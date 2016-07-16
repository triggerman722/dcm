(defproject dcm "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [com.cemerick/friend "0.2.3"]
                 [clamq/clamq-activemq "0.4"]
                 [org.slf4j/slf4j-api "1.6.1"]
                 [org.apache.activemq/activemq-core "5.5.0"]
                 [javax.mail/mail "1.4.3"]
                 [ring/ring-defaults "0.2.1"]
                 [org.apache.poi/poi "3.14"]
                 [org.apache.poi/poi-ooxml "3.14"]
                 [org.apache.poi/poi-scratchpad "3.14"]]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler dcm.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
