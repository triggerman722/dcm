(defproject dcm "0.1.1-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [secretary "1.2.3"]
                 [cljs-ajax "0.5.1"]
                 [reagent "0.5.1"]
                 [reagent-forms "0.5.1"]
                 [reagent-utils "0.1.4"]
                 [org.clojure/tools.logging "0.2.4"]
                 [compojure "1.5.1"]
                 [com.cemerick/friend "0.2.3"]
                 [clamq/clamq-activemq "0.4"]
                 [org.slf4j/slf4j-api "1.7.5"]
                 [org.slf4j/slf4j-log4j12 "1.7.5"]
                 [org.apache.activemq/activemq-core "5.5.0"]
                 [javax.mail/mail "1.4.3"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-json "0.4.0"]
                 [org.mongodb/mongodb-driver "3.2.0"]
                 [com.novemberain/monger "3.0.2"]
                 [org.clojure/data.json "0.2.6"]
                 [org.apache.poi/poi "3.14"]
                 [org.apache.poi/poi-ooxml "3.14"]
                 [org.apache.poi/poi-scratchpad "3.14"]]
  :plugins      [[lein-ring "0.9.7"]
                 [lein-cljsbuild "1.1.3"]
                 [lein-figwheel "0.4.1"]]

  :ring {:handler dcm.handler/app}
  :figwheel {:server-port 3450}
  :cljsbuild {:builds  [{
                        :id "dcmclient"
                        :source-paths ["src/cljs"]
                        :figwheel true
                        :compiler {:main "dcm.app"
                                   :asset-path "js/out"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :output-dir "resources/public/js/out"
                                   :output-to "resources/public/js/dcm.js"}}]}

  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
