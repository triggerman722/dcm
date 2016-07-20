(defproject dcm "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.89"]
;                 [cljs-http "0.1.21"]
                 [org.clojure/tools.logging "0.2.4"]
;                 [org.clojure/core.async "0.2.385"]
                 [compojure "1.5.1"]
                 [com.cemerick/friend "0.2.3"]
                 [clamq/clamq-activemq "0.4"]
                 [org.slf4j/slf4j-api "1.7.5"]
                 [org.slf4j/slf4j-log4j12 "1.7.5"]
                 [org.apache.activemq/activemq-core "5.5.0"]
                 [javax.mail/mail "1.4.3"]
;                 [om "0.7.3"]
                 [reagent "0.6.0-rc"]
                 [figwheel "0.3.7"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-json "0.4.0"]
                 [org.mongodb/mongodb-driver "3.2.0"]
                 [com.novemberain/monger "3.0.2"]
		 [org.clojure/data.json "0.2.6"]
                 [org.apache.poi/poi "3.14"]
                 [org.apache.poi/poi-ooxml "3.14"]
                 [org.apache.poi/poi-scratchpad "3.14"]]
  :plugins      [[lein-ring "0.9.7"]
                 [lein-cljsbuild "1.0.6"]
                 [lein-figwheel "0.3.7"]]
;                 [lein-pdo "0.1.1"]]

;  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}
  :hooks [leiningen.cljsbuild]

  :ring {:handler dcm.handler/app}
  :figwheel {:repl false}

  :cljsbuild {:builds {:client
                       {:source-paths ["src/cljs"]
                        :compiler {:output-dir "resources/public/js/out"
                                   :output-to "resources/public/js/app.js"}}}}
 ; :cljsbuild {:builds [{:id "dev"
 ;                     :source-paths ["src/cljs"]
 ;                     :compiler {:output-to "resources/public/js/app.js"
 ;                                :output-dir "resources/public/js/out"
 ;                                :optimizations :none
 ;                                :source-map true}}]}

  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]

         :cljsbuild {:builds {:client
                             {:figwheel {:on-jsload "dcm.core/run"}
                              :compiler {:main "dcm.core"
                                         :optimizations :none}}}}
         :prod {:cljsbuild
                    {:builds {:client
                              {:compiler {:optimizations :advanced
                                          :elide-asserts true
                                          :pretty-print false}}}}}
         }}
   :source-paths ["src/clj"])
