(ns dcm.handler
  (:use compojure.core)
  (:use [clamq.activemq])

  (:import [java.net URI URL])
  (:import [org.apache.activemq.broker.BrokerFactory])
  (:import [org.apache.activemq.broker.BrokerService])
  (:import [org.apache.poi.xslf.usermodel XMLSlideShow XSLFSlide])
  (:import [java.util Properties])
  (:import [java.awt Image Graphics Dimension])
  (:import [java.awt.image BufferedImage])
  (:import [javax.imageio ImageIO])
  (:import [java.awt Color])
  (:import [javax.mail.internet.MimeMessage])
  (:import [javax.mail.internet MimeMessage InternetAddress])
  (:import [javax.mail Session Transport Authenticator PasswordAuthentication Message$RecipientType])

  (:require [compojure.handler :as handler]
			[clojure.java.io :as io]
			[compojure.route :as route]
                        [cemerick.friend :as friend]
			[clamq.protocol.connection :as connection]
			[clamq.protocol.consumer :as consumer]
			[clamq.protocol.seqable :as seqable]
			[clamq.protocol.producer :as producer]
			[clamq.pipes :as pipes]
                        (cemerick.friend [workflows :as workflows]
                                         [credentials :as creds])))

(def users {"admin" {:username "admin"
                    :password (creds/hash-bcrypt "password")
                    :roles #{::admin}}
            "dave" {:username "dave"
                    :password (creds/hash-bcrypt "password")
                    :roles #{::user}}})

(derive ::admin ::user)

(defn send-gmail [{:keys [from to subject text user password]}]
  (let [auth (proxy [Authenticator] []
               (getPasswordAuthentication []
                 (PasswordAuthentication. user password)))
        props (doto (Properties.)
                (.putAll {"mail.smtp.user" user
                          "mail.smtp.host" "smtp.gmail.com"
                          "mail.smtp.starttls.enable" "true"
                          "mail.smtp.auth" "true"
                          "mail.smtp.port" "465"
                          "mail.smtp.socketFactory.port" "465"
                          "mail.smtp.socketFactory.class" "javax.net.ssl.SSLSocketFactory"}))
        session (Session/getInstance props auth)
        msg (doto (MimeMessage. session)
              (.setText text)
              (.setSubject subject)
              (.setFrom (InternetAddress. from)))]
        (.addRecipient msg Message$RecipientType/TO (InternetAddress. to))
        (Transport/send msg)))

(defn save-slide-image2 [slide]
(println "I'm here")
"success"
)
(defn save-slide-image [slide]
(let [
       slideshow (.getSlideShow slide)
       dims (.getPageSize slideshow)
       img (new BufferedImage (.getWidth dims) (.getHeight dims) BufferedImage/TYPE_INT_RGB)
       gfx (.createGraphics img)
       fileout (io/output-stream (io/file "resources" "public" (.toString (java.util.UUID/randomUUID))))
     ] 
(do
(println "I'm in here")
(.setPaint gfx Color/white)
(.fillRect gfx 0 0 (.getWidth dims) (.getHeight dims))
(.draw slide gfx)
(println (.getSlideNumber slide))
(ImageIO/write img "jpeg" fileout)
))
)
(defn make-slide-images [filepath]
(let [
       filein (io/input-stream (io/file "resources" "public" filepath))
       ppt (new XMLSlideShow filein)
       slides (into [] (.getSlides ppt))]
       (map save-slide-image slides)))

; These are like message driven beans
(defn upload-message-receiver [message] ;listening to "upload-queue"
   ;(println (str "The message is: " message))
   (try
      (println (make-slide-images message))
      (println "past it")
      (catch Exception e (str "ex: " (.getMessage e))))
)

(defn join-message-receiver [message] ;listening to "join-queue"
(send-gmail {:from "gemartin@gmail.com", :to "gemartin@gmail.com", :subject "Welcome to the club", :text "Please click the activation link to proceed", :user "gemartin@gmail.com", :password "hockey"} ))

(defn init-consumer [queue on-message-receiver]
(with-open [connection (activemq-connection "tcp://localhost:61616")]
    (let [
		consumer (connection/consumer connection {:endpoint queue :on-message on-message-receiver :transacted false})]
		(consumer/start consumer) )))

(defn sendmessage [queue message]
    (with-open [connection (activemq-connection "tcp://localhost:61616")]
       (let [producer (connection/producer connection)]
		(producer/publish producer queue message) )))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (POST "/follow" req "Notimpl")
  (POST "/like" req "Notimpl")
  (POST "/post" req "Notimpl")
  (POST "/comment" req "Notimpl")
  (POST "/feedback" req "Notimpl")
  (POST "/people" req "Notimpl") ;;should replace /join?
  (POST "/profile" req "Notimpl")
  (POST "/join" req
	(let [username (get (:params req) :username)
          password (get (:params req) :password)
          firstname (get (:params req) :firstname)
          lastname  (get (:params req) :lastname)
          tempfile  (get (get (:params req) :avatar) :tempfile)
          filename  (get (get (:params req) :avatar) :filename)]
          (sendmessage "join-queue" "ok")
          ; Doing this vs. slurp because I may want to set the content-type in the future
          (-> "activate.html"
                       (ring.util.response/file-response {:root "resources/public"})
                       (ring.util.response/content-type "text/html"))))

  (POST "/upload"
   {{{tempfile :tempfile filename :filename} :file} :params :as params}
   (io/copy tempfile (io/file "resources" "public" filename))
   ;(make-slide-images filename))
   (sendmessage "upload-queue" filename) ; I should send a map with other values like id, user, etc.
   "Success")
  (GET "/authorized" request
       (friend/authorize #{::user} "This page can only be seen by authenticated users."))
  (GET "/admin" request
       (friend/authorize #{::admin} "This page can only be seen by administrators."))
	(GET "/join" [] (-> "join.html"
                       (ring.util.response/file-response {:root "resources/public"})
                       (ring.util.response/content-type "text/html")))
  (GET "/login" [] (-> "login.html"
                       (ring.util.response/file-response {:root "resources/public"})
                       (ring.util.response/content-type "text/html")))
  (GET "/upload" [] (-> "upload.html"
                       (ring.util.response/file-response {:root "resources/public"})
                       (ring.util.response/content-type "text/html")))
  (friend/logout (ANY "/logout" request (ring.util.response/redirect "/")))
  (route/not-found "Not Found"))

(def app
  (handler/site
   (friend/authenticate app-routes
           {:credential-fn (partial creds/bcrypt-credential-fn users)
            :workflows [(workflows/interactive-form)]})
   (let [
	broker (org.apache.activemq.broker.BrokerFactory/createBroker  (URI. "broker:(tcp://localhost:61616)"))]
	(.start broker)
	(init-consumer "upload-queue" upload-message-receiver )
	(init-consumer "join-queue" join-message-receiver ))))
