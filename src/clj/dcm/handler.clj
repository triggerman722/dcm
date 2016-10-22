(ns dcm.handler
  (:use compojure.core)


  (:import [java.net URI URL])
  (:import [org.apache.pdfbox.pdmodel PDDocument])
  (:import [org.apache.pdfbox.rendering ImageType])
  (:import [org.apache.pdfbox.rendering PDFRenderer])
  (:import [java.awt Image Graphics Dimension AlphaComposite Graphics2D])
  (:import [java.awt.image BufferedImage])
  (:import [java.awt.geom AffineTransform])
  (:import [javax.imageio ImageIO])
  (:import [java.awt Color RenderingHints])
  (:import [java.util Vector])
  (:import [java.io File])

  (:require 
                        [compojure.handler :as handler]
			[clojure.java.io :as io]
                        [clojure.java.shell :as shell]
                        [clojure.tools.logging :as log]
                        [clojure.data.json :as json]
			[compojure.route :as route]
                        [cemerick.friend :as friend]
                        [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
                        [ring.middleware.keyword-params :refer [wrap-keyword-params]]
                        [ring.util.response :as rr]
                        [dcm.mail :as mail]
                        [dcm.transactional :as trans]
                        (cemerick.friend [workflows :as workflows]
                                         [credentials :as creds])))


(derive ::admin ::user)


(def db (atom {}))

(defn load-data [app]
(try
  (log/info "Loading database...")
  (reset! db (read-string (slurp "somefile")))
  (log/info "...done loading database.")
  (catch Exception e
     (log/info (.getMessage e))))
  app)

(defn write-data []
 (spit "somefile.tmp" (prn-str @db))
 (.renameTo (File. "somefile.tmp") (File. "somefile")))

(def save-agent (agent nil))

(defn save-data []
  (send-off save-agent
    (fn [_]
      (spit "somefile.tmp" (prn-str @db))
      (.renameTo (File. "somefile.tmp") (File. "somefile")))))

(defn load-user [username]
 ((:users @db) username))
(defn get-user-by-id [userid]
 ((:users @db)))

(defn write-pdf-page-to-image [uniquename pagenum pdRenderer]
    (log/info "Received page number " pagenum)
    (let [ bufferedImage (.renderImageWithDPI pdRenderer pagenum 300 ImageType/RGB)
           image (.getScaledInstance bufferedImage -1, 406, Image/SCALE_SMOOTH)
           w (.getWidth image nil)
           h (.getHeight image nil)
           ol (/ (- 720 w) 2)
           ot (/ (- 406 h) 2)
           dest (new BufferedImage 720 406 BufferedImage/TYPE_INT_RGB)
           g2 (.getGraphics dest)
           fileout (io/file (str "/home/greg/Projects/dcm/resources/private/images/" uniquename  (+ 1 pagenum) ".jpeg")) ]

           (.setColor g2 Color/BLACK)
           (.fillRect g2 0 0 720 406)
           (.drawImage g2 image ol ot nil)
           (.dispose g2)
           (ImageIO/write dest "jpg" fileout)))

(defn make-pdf-images [slidepdf uniquename]
     (let [ pdffile (io/file slidepdf)
            pdDoc (PDDocument/load pdffile)
            numpages (.getNumberOfPages pdDoc)
            pdRenderer (new PDFRenderer pdDoc)]

        (doall (for [n (range numpages)] (write-pdf-page-to-image uniquename n pdRenderer)))
        (.close pdDoc)))

(defn rename-image-files [inputfile increment outputfilename]
     (let [ newfile (str "/home/greg/Projects/dcm/resources/private/images/" outputfilename "_" increment ".jpg")]
     (.renameTo (File. inputfile) (File. newfile))
     newfile) ; force extension to jpg ?
)

(defn future-video-receiver [message]
      (log/info "=====================Begin video transition==================\n\n")
      (let [
            filelist (distinct (flatten message)) ; how to eliminate duplicates?
            outputfilename (.toString (java.util.UUID/randomUUID))
            inc-filelist (doall (map-indexed (fn [i x] (rename-image-files x i outputfilename)) filelist))            
            outputMP4video (str "/home/greg/Projects/dcm/resources/public/videos/" outputfilename  ".mp4")
            outputOGVvideo (str "/home/greg/Projects/dcm/resources/public/videos/" outputfilename  ".ogv")
            outputWEBMvideo (str "/home/greg/Projects/dcm/resources/public/videos/" outputfilename  ".webm")
           ]
; if the person is a free account, use -fs <bytes> to limit the filesize "-fs" "2000000" 
; also free accounts get jpg, whereas pro accounts get HQ?

; TODO: Fix the .wav file hardcoding!!!!
          (println (shell/sh "avconv" "-y" "-f" "image2" "-i" (str "/home/greg/Projects/dcm/resources/private/images/" outputfilename "_%d.jpg") "-i" "/home/greg/Projects/dcm/resources/private/audio/slideshow.wav" "-threads" "1" "-c:v" "libx264" "-vf" "fps=25,format=yuv420p" "-c:a" "aac" "-strict" "experimental" "-b:a" "44k" outputMP4video))
          (println "Transforming to OGV")
          (println (shell/sh "avconv" "-y" "-i" outputMP4video "-vcodec" "libtheora" "-qscale:v" "7" "-acodec" "libvorbis" "-qscale:a" "3" outputOGVvideo))
          (println "Transforming to WEBM")
          (println (shell/sh "avconv" "-y" "-i" outputMP4video "-acodec" "libvorbis" "-ac" "2" "-ab" "96k" "-ar" "44100" "-b" "345k" "-s" "640x360" outputWEBMvideo))
          (println "Killing temporary image files...")
          (doall (map #(io/delete-file % true) inc-filelist))
          (println "Successfully killed all temporary images files")
          )
)
(defn fade-image [startfile endfile progress]
(log/info (str "Initiating transition between: " startfile " and " endfile ". Progress: " progress))
(let [
       img-start (ImageIO/read startfile)
       img-end (ImageIO/read endfile)
       img-new (new BufferedImage (.getWidth img-start) (.getHeight img-start) BufferedImage/TYPE_INT_RGB) 
       gfx (.createGraphics img-new)
       composite (AlphaComposite/getInstance AlphaComposite/SRC_OVER (/ progress 10.0))
       uniquename (.toString (java.util.UUID/randomUUID))
       fileout (io/output-stream (io/file "resources" "private" "images" uniquename))
     ]
     (.drawImage gfx img-start 0 0 nil)
     (.setComposite gfx composite)
     (.drawImage gfx img-end 0 0 nil)
     (ImageIO/write img-new "jpeg" fileout)
     (log/info "Successfully transitioned image: " uniquename)
     (str "/home/greg/Projects/dcm/resources/private/images/" uniquename)))

(defn copy-image [start progress]
 (let [startfile (io/file "resources" "private" "images" start)
       endname   (str start "_" progress)
       endfile   (io/file "resources" "private" "images" endname)]
     (io/copy startfile endfile)
     (log/info "Successfully copied image: " endname)
     (str "/home/greg/Projects/dcm/resources/private/images/" endname)))

(defn make-transition-images [start end]
     (let [startfile (io/file "resources" "private" "images" start)
       endfile   (io/file "resources" "private" "images" end)]
     (log/info "Performing image transition between " start " and " end)
     (concat [(for [l (range 50)]
                 (copy-image start l))]
         (concat
             (for [n (range 10)] (fade-image startfile endfile n))
             [(str "/home/greg/Projects/dcm/resources/private/images/" end)]
         ))))

(defn future-transition [message]
      (log/info "=====================Begin image transition==================\n\n")
      (let
          [
             transition-results (doall (for [[a b] (partition 2 1 message)](make-transition-images a b)))
          ]
          (println transition-results)
          (future (future-video-receiver transition-results))))

(defn make-slide-images-cli [filepath]
     (let [ slidedeck (str "/home/greg/Projects/dcm/resources/private/uploads/" filepath)
            slidepdf (str "/home/greg/Projects/dcm/resources/private/uploads/" (.substring filepath 0 (.lastIndexOf filepath ".")) ".pdf")           
            uniquename (.toString (java.util.UUID/randomUUID))
            imagenames (str "/home/greg/Projects/dcm/resources/private/images/" uniquename "%d.jpeg")
            slideextension (.substring filepath (.lastIndexOf filepath "."))]
     (log/info "=====================Begin Make Slide Images CLI==================\n\n")
     (log/info (str "Attempting to convert " slidedeck))
     (log/info "Slide Extension: " slideextension)
     (when (not (.contains slideextension "pdf"))
         (log/info "This is NOT a PDF")

         ; Unfortunately, the below fails if libreoffice is running on the same system in non-headless mode.
         (println (shell/sh "soffice" "--headless" "--convert-to" "pdf" "--outdir" "/home/greg/Projects/dcm/resources/private/uploads/" slidedeck)))

     (.mkdir (io/file (str "/home/greg/Projects/dcm/resources/private/uploads/" uniquename)))
(log/info "=====================Begin Make Slide Images PDF==================\n\n")
(make-pdf-images slidepdf uniquename)

     (let[ whole-dir (.list (io/file (str "/home/greg/Projects/dcm/resources/private/images/")))
           filtered-dir (filter #(.contains % uniquename)  whole-dir)
           filecount (count filtered-dir)
           final-list (for [l (range 1 (+ 1 filecount))] (str uniquename l ".jpeg"))]

     (log/info "Final List: " final-list)
     (future (future-transition final-list))
     (log/info "Successfully made slide images"))))

(defn upload-message-receiver [message]
      (make-slide-images-cli message))

(defn forgot-password-receiver [message]
 (log/info "Forgot from: " message)
 (let [userinfo (load-user (:username message))]
  (log/info "Email address: " (:email userinfo))
  (mail/send-gmail {:from "gemartin@gmail.com",
                            :to (:email userinfo),
                            :subject "Forgot to the club",
                            :text "Please click the activation link to proceed",
                            :user "gemartin@gmail.com",
                            :password "hockey"} )))

(defn join-message-receiver [message]
          (log/info "The message is: " message)
(log/info "Is DB Swap Working?")
(log/info @db)
   (try

(swap! db assoc-in [:users (:username message)] {:username (:username message)
                                   :userid (.toString (java.util.UUID/randomUUID))
                                   :password (creds/hash-bcrypt (:password message))
                                   :email (:joinemail message)
                                   :enabled false
                                   :account-expired false
                                   :credentials-expired false
                                   :account-locked false
                                   :firstname (:firstname message)
                                   :lastname (:lastname message)
                                   :created-date (java.util.Date.)
                                   :roles #{::admin}})
   (catch Exception e
         (log/info (.getMessage e))))
          (save-data)
;shouldn't this be in a future?
          (mail/send-gmail {:from "gemartin@gmail.com", 
                            :to "gemartin@gmail.com",
                            :subject "Welcome to the club",
                            :text "Please click the activation link to proceed",
                            :user "gemartin@gmail.com",
                            :password "hockey"} ))
(defn do-activation [probably-false]
; just want to return true here
true)

(defn get-userid [[username userinfo]]
 (:userid userinfo))

(defn enable-specific [[[username userinfo]]]
[username (update-in userinfo [:enabled] do-activation)] 
)
(defn enable-user [users code]
(enable-specific (filter #(= (get-userid %) code) users))
)

(defn activate-user [code]
 (log/info "pre")
; (swap! (:users @db) update-in enable-user (filter #(= (get-userid %) code) (:users @db)))
; (swap! db update-in [:users] enable-user code)
(doall (map-indexed #(println (str "\t" %1 ", " %2 "!\n")) (:users @db)))

(let [updated-user-full (enable-user (:users @db) code)
      username (get updated-user-full 0)
      updated-user (get updated-user-full 1)]
(log/info "For real: " username)
(log/info "For Real2: " updated-user)
;(swap! db assoc-in [:users username] updated-user))
(swap! db update-in [:users username :enabled] do-activation))
 (log/info "post")
(doall (map-indexed #(println (str "\t" %1 ", " %2 "!\n")) (:users @db)))

)
  (defn future-file-uploads [tempfile filename audio-tempfile audio-filename]
    (println (io/copy tempfile (io/file "resources" "private" "uploads" filename)))
; the code below must be made conditional on whether or not an audio file was supplied.
    (println (io/copy audio-tempfile (io/file "resources" "private" "uploads" audio-filename)))
    (future (make-slide-images-cli filename))
  )



(defroutes app-routes
  (GET "/" req (-> "index.html"
                       (rr/file-response {:root "resources/public"})
                       (rr/content-type "text/html")))
  (POST "/follow" req "Notimpl")
  (GET  "/likes" [] "NotImpl")
  (POST "/like" req "Notimpl")
  (POST "/hello" req (rr/response {:greeting (get-in req [:params :user])}))
  (POST "/post" req "Notimpl")
  (GET  "/comments/:id" [id] {:body {:hello "world"}})
  (POST "/comments" req "Notimpl")
  (POST "/feedback" req "Notimpl")
  (POST "/people" req "Notimpl")
  (GET "/activate/:code" [code]
(activate-user code)
{
:status 200
:body {:h1 "Whachu do to my body"}
; :status 302
; :headers {"Location" "/#/login"}
}) 
  (GET  "/people/:id" [id]
          {:body "todo"})
  (POST "/profile" req "Notimpl")
  (POST "/forgot" req 
       (let [userinfo (get-in req [:body])]
         (future (forgot-password-receiver userinfo)))
 {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/write-str  {:status "OK"})})
  (POST "/join" req
          (let [userinfo (get-in req [:body])]
          (log/info userinfo)
          (future (join-message-receiver userinfo)))
          (-> "activate.html"
                       (rr/file-response {:root "resources/public"})
                       (rr/content-type "text/html")))
  
  (POST "/upload"
   {{{tempfile :tempfile filename :filename size :size} :upload-deck {audio-tempfile :tempfile audio-filename :filename audio-size :size}:upload-audio} :params :as params}

    (friend/authorize #{::user} 
    (future (future-file-uploads tempfile filename audio-tempfile audio-filename))
    {:status 200
    :headers {"Content-Type" "application/json"}
    :body (json/write-str  {:status "OK"
                           :filename filename
                           :tempfile (str tempfile)
                           :size size})}))
  (GET "/authorized" request
       (friend/authorize #{::user} "This page can only be seen by authenticated users."))
  (GET "/admin" request
       (friend/authorize #{::admin} "This page can only be seen by administrators."))
  (friend/logout (ANY "/logout" request (rr/redirect "/")))
 (route/resources "/") 
 (route/not-found "Not Found"))

(def app
  (-> (handler/site
   (friend/authenticate app-routes
           {:credential-fn (partial creds/bcrypt-credential-fn load-user)
            :workflows [(workflows/interactive-form)]
            :redirect-on-auth? false
            :login-failure-handler #(-> (rr/status % 401))
            :unauthenticated-handler #(-> (log/info %) (rr/status 401))
            :unauthorized-handler #(-> (rr/status % 401))}))
   (wrap-keyword-params)
   (wrap-json-body {:keywords? true :bigdecimals? true})
   (wrap-json-response)
   (load-data)))
