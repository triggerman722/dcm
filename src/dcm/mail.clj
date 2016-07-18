(ns dcm.mail
  (:import [java.util Properties])
  (:import [javax.mail.internet.MimeMessage])
  (:import [javax.mail.internet MimeMessage InternetAddress])
  (:import [javax.mail Session Transport Authenticator PasswordAuthentication Message$RecipientType])

  (:require [clojure.tools.logging :as log]))

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
        (log/info "Sending join email to " to)
        (Transport/send msg)))

