(ns dcm.handler
  (:use compojure.core)
  (:use [clamq.activemq])

  (:import [java.net URI URL])
  (:import [org.apache.activemq.broker.BrokerFactory])
  (:import [org.apache.activemq.broker.BrokerService])
  (:import [org.apache.poi.xslf.usermodel XMLSlideShow XSLFSlide])
  (:import [java.awt Image Graphics Dimension AlphaComposite])
  (:import [java.awt.image BufferedImage])
  (:import [javax.imageio ImageIO])
  (:import [java.awt Color])

  (:require 
                        [compojure.handler :as handler]
			[clojure.java.io :as io]
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
       img (new BufferedImage (.getWidth dims) (.getHeight dims) BufferedImage/TYPE_INT_RGB)
       gfx (.createGraphics img)
       uniquename (.toString (java.util.UUID/randomUUID))
       fileout (io/output-stream (io/file "resources" "private" "images" uniquename))
     ] 
        (.setPaint gfx Color/white)
        (.fillRect gfx 0 0 (.getWidth dims) (.getHeight dims))
        (.draw slide gfx)
        (ImageIO/write img "jpeg" fileout)
        (log/info "Successfully saved image for slide#: " (.getSlideNumber slide))
        uniquename))

(defn make-slide-images [filepath]
(let [
       filein (io/input-stream (io/file "resources" "private" "uploads" filepath))
       ppt (new XMLSlideShow filein)
       slides (into [] (.getSlides ppt))
       result-map (map save-slide-image slides)
     ]
       (log/info "Begin processing " filepath)
       (println result-map) ;do not remove this, it is needed to force the map
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
     {:uniquename uniquename}))
(defn make-transition-images [start end]
(let [
       startfile (io/file "resources" "private" "images" start)
       endfile   (io/file "resources" "private" "images" end)
     ]
     (log/info "Performing image transition between " start " and " end)

     ; I think dotimes should send a msg to a queue. so this fork/join just got harder.
     ; if I can just figure out a correlation id (i.e. a counter) I can send that plus the other info to a queue
     ; and then when processing, I can save the image to that counter name.

      (conj [start] (conj (for [n (range 10)] (fade-image startfile endfile n)) [end]))
;     (println (dotimes [n 10] (fade-image startfile endfile n)))

)
)
(defn transition-message-receiver [message]
      (log/info "=====================Begin image transition==================\n\n")
      (let
          [
             transition-results (for [[a b] (partition 2 1 message)](make-transition-images a b))
          ]
          ;(sendmessage "video-queue" transition-results)
          (println transition-results)
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
   (init-consumer "upload-queue" upload-message-receiver )
   (init-consumer "join-queue" join-message-receiver )
   (init-consumer "transition-queue" transition-message-receiver ))
   (wrap-keyword-params)
   (wrap-json-body)
   (wrap-json-response)
))
