(ns dcm.handler
  (:use compojure.core)
  (:use [clamq.activemq])

  (:import [java.net URI URL])
  (:import [org.apache.activemq.broker.BrokerFactory])
  (:import [org.apache.activemq.broker.BrokerService])
  (:import [org.apache.poi.xslf.usermodel XMLSlideShow XSLFSlide])
  (:import [org.apache.poi.util Units])
  (:import [java.awt Image Graphics Dimension AlphaComposite])
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
			[clamq.protocol.connection :as connection]
			[clamq.protocol.consumer :as consumer]
			[clamq.protocol.seqable :as seqable]
			[clamq.protocol.producer :as producer]
			[clamq.pipes :as pipes]
                        [dcm.mail :as mail]
                        [dcm.data :as data]
                        (cemerick.friend [workflows :as workflows]
                                         [credentials :as creds])))

(def users {"admin" {:username "admin"
                    :password (creds/hash-bcrypt "password")
                    :roles #{::admin}}
            "dave" {:username "dave"
                    :password (creds/hash-bcrypt "password")
                    :roles #{::user}}})

(derive ::admin ::user)

(defn init-consumer [queue on-message-receiver]
(with-open [connection (activemq-connection "tcp://localhost:61616")]
    (let [consumer (connection/consumer connection {:endpoint queue :on-message on-message-receiver :transacted false})]
       (consumer/start consumer) )))

(defn sendmessage [queue message]
    (with-open [connection (activemq-connection "tcp://localhost:61616")]
       (let [producer (connection/producer connection)]
                (producer/publish producer queue message) )))


(defn save-slide-image [slide]
(let [
       slideshow (.getSlideShow slide)
       dims (.getPageSize slideshow)
       slidewidth (Units/pointsToPixel (.getWidth dims))
       slideheight (Units/pointsToPixel (.getHeight dims))
       img (new BufferedImage slidewidth slideheight BufferedImage/TYPE_INT_RGB)
       gfx (.createGraphics img)
       uniquename (.toString (java.util.UUID/randomUUID))
       fileout (io/output-stream (io/file "resources" "private" "images" uniquename))
       transx (new AffineTransform)
       dpisize (/ 96.0 72.0)
     ] 
        (.scale transx dpisize dpisize)
        (.setTransform gfx transx)
        (.setRenderingHint gfx RenderingHints/KEY_ANTIALIASING RenderingHints/VALUE_ANTIALIAS_ON)
        (.setRenderingHint gfx RenderingHints/KEY_RENDERING RenderingHints/VALUE_RENDER_QUALITY)
        (.setRenderingHint gfx RenderingHints/KEY_INTERPOLATION RenderingHints/VALUE_INTERPOLATION_BICUBIC)
        (.setRenderingHint gfx RenderingHints/KEY_FRACTIONALMETRICS RenderingHints/VALUE_FRACTIONALMETRICS_ON)
        (.setPaint gfx Color/white)
        (println (str "The dimensions are: " slidewidth slideheight))
        (.fillRect gfx 0 0 slidewidth slideheight)
        (.draw slide gfx)
        (ImageIO/write img "jpeg" fileout)
        (log/info "Successfully saved image for slide#: " (.getSlideNumber slide))
        uniquename))

(defn make-slide-images [filepath]
(let [
       filein (io/input-stream (io/file "resources" "private" "uploads" filepath))
       ppt (new XMLSlideShow filein)
       slides (into [] (.getSlides ppt))
       result-map (doall (map save-slide-image slides))
     ]
       (log/info "Begin processing " filepath)
       ; (println result-map) ; update: trying doall instead ;do not remove this, it is needed to force the map
       (sendmessage "transition-queue" result-map)
       (log/info "Successfully processed " filepath))) ;map is a lazy function; doall forces it.

(defn fade-image [startfile endfile progress]
(let [
       img-start (ImageIO/read startfile)
       img-end (ImageIO/read endfile)
       img-new (new BufferedImage (.getWidth img-start) (.getHeight img-start) BufferedImage/TYPE_INT_RGB) ;assume img-start and img-end are the same size
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
     (str "/home/greg/Projects/dcm/resources/private/images/" endname))
)
(defn make-transition-images [start end]
     (let [startfile (io/file "resources" "private" "images" start)
       endfile   (io/file "resources" "private" "images" end)]
     (log/info "Performing image transition between " start " and " end)
     (concat [(for [l (range 50)] 
                 (copy-image start l))] 
         (concat 
             (for [n (range 10)] (fade-image startfile endfile n))
             [(str "/home/greg/Projects/dcm/resources/private/images/" end)]
         )
     )
     )
)
(defn rename-image-files [inputfile increment]
     (let [ newfile (str "/home/greg/Projects/dcm/resources/private/images/slide_" increment ".jpg")]
     (.renameTo (File. inputfile) (File. newfile))
     newfile) ; force extension to jpg ?
)
(defn video-message-receiver [message]
      (log/info "=====================Begin video transition==================\n\n")
      (println (flatten message))
      ; TODO: Use clojure shell and run FFMPEG.
      (let [
            filelist (distinct (flatten message)) ; how to eliminate duplicates?
            inc-filelist (doall (map-indexed (fn [i x] (rename-image-files x i)) filelist))
            outputfilename (.toString (java.util.UUID/randomUUID))
            outputMP4video (str "/home/greg/Projects/dcm/resources/public/videos/" outputfilename  ".mp4")
            outputOGVvideo (str "/home/greg/Projects/dcm/resources/public/videos/" outputfilename  ".ogv")
            outputWEBMvideo (str "/home/greg/Projects/dcm/resources/public/videos/" outputfilename  ".webm")
           ]
          (println inc-filelist)

;          (println (shell/sh "ffmpeg" "-y" "-f" "image2" "-loop" "1" "-i" "/home/greg/Projects/dcm/resources/private/images/slide_%d.jpg" "-i" "/home/greg/Projects/dcm/resources/private/audio/slideshow.wav" "-threads" "1" "-c:v" "libx264" "-vf" "fps=25,format=yuv420p" "-c:a" "aac" "-strict" "experimental" "-b:a" "44k" "-t" "00:00:30" outputMP4video))
          (println (shell/sh "ffmpeg" "-y" "-f" "image2" "-i" "/home/greg/Projects/dcm/resources/private/images/slide_%d.jpg" "-i" "/home/greg/Projects/dcm/resources/private/audio/slideshow.wav" "-threads" "1" "-c:v" "libx264" "-vf" "fps=25,format=yuv420p" "-c:a" "aac" "-strict" "experimental" "-b:a" "44k" outputMP4video))

          (println "Transforming to OGV")
          (println (shell/sh "ffmpeg" "-y" "-i" outputMP4video "-vcodec" "libtheora" "-qscale:v" "7" "-acodec" "libvorbis" "-qscale:a" "3" outputOGVvideo))
          (println "Transforming to WEBM")
          (println (shell/sh "ffmpeg" "-y" "-i" outputMP4video "-acodec" "libvorbis" "-ac" "2" "-ab" "96k" "-ar" "44100" "-b" "345k" "-s" "640x360" outputWEBMvideo))
          (println "Killing temporary image files...")
          (doall (map #(io/delete-file % true) inc-filelist))
          (println "Successfully killed all temporary images files")
          )
)
(defn transition-message-receiver [message]
      (log/info "=====================Begin image transition==================\n\n")
      (let
          [
             transition-results (doall (for [[a b] (partition 2 1 message)](make-transition-images a b)))
          ]
          (println transition-results)
          (sendmessage "video-queue" transition-results)
          ;(println transition-results)
      )
)

(defn upload-message-receiver [message]
      (make-slide-images message))

(defn join-message-receiver [message]
          (log/info message)
          (data/add-item "users" message)
          (mail/send-gmail {:from "gemartin@gmail.com", 
                            :to "gemartin@gmail.com",
                            :subject "Welcome to the club",
                            :text "Please click the activation link to proceed",
                            :user "gemartin@gmail.com",
                            :password "hockey"} ))

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
  (GET  "/people/:id" [id]
          {:body (data/get-single "users" id)})
  (POST "/profile" req "Notimpl")
  (POST "/join" req
          (let [userinfo (get-in req [:body])]
          (log/info userinfo)
          (sendmessage "join-queue" userinfo))
          (-> "activate.html"
                       (rr/file-response {:root "resources/public"})
                       (rr/content-type "text/html")))

  (POST "/upload"
   {{{tempfile :tempfile filename :filename size :size} :upload-file} :params :as params}
   (io/copy tempfile (io/file "resources" "private" "uploads" filename))   
   (sendmessage "upload-queue" filename) ; I should send a map with other values like id, user, etc.
   {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/write-str  {:status "OK"
                           :filename filename
                           :tempfile (str tempfile)
                           :size size})})
  (GET "/authorized" request
       (friend/authorize #{::user} "This page can only be seen by authenticated users."))
  (GET "/admin" request
       (friend/authorize #{::admin} "This page can only be seen by administrators."))
	(GET "/join" [] (-> "join.html"
                       (rr/file-response {:root "resources/public"})
                       (rr/content-type "text/html")))
  (GET "/login" [] (-> "login.html"
                       (rr/file-response {:root "resources/public"})
                       (rr/content-type "text/html")))
  (GET "/upload" [] (-> "upload.html"
                       (rr/file-response {:root "resources/public"})
                       (rr/content-type "text/html")))
  (friend/logout (ANY "/logout" request (rr/redirect "/")))
 (route/resources "/") 
 (route/not-found "Not Found"))

(def app
  (-> (handler/site
   (friend/authenticate app-routes
           {:credential-fn (partial creds/bcrypt-credential-fn users)
            :workflows [(workflows/interactive-form)]
            :redirect-on-auth? false
;            :login-uri "/api/login"
;            :default-landing-uri "/"
            :login-failure-handler #(-> (rr/status % 401))
            :unauthenticated-handler #(-> (log/info %) (rr/status 401))
            :unauthorized-handler #(-> (rr/status % 401))
})
   (try
      (let [
	broker (org.apache.activemq.broker.BrokerFactory/createBroker  (URI. "broker:(tcp://localhost:61616)"))]
           (.start broker))
         (catch Exception e
            (log/info (.getMessage e))))
   (init-consumer "upload-queue" upload-message-receiver)
   (init-consumer "join-queue" join-message-receiver)
   (init-consumer "transition-queue" transition-message-receiver)
   (init-consumer "video-queue" video-message-receiver))
   (wrap-keyword-params)
   (wrap-json-body)
   (wrap-json-response)
))
