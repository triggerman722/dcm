(ns dcm.app
  (:import goog.History)
  (:require [dcm.greet :as greet]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [reagent.core :as reagent]))

;(greet/say-hello)

;(.log js/console "Hello Cljs!")


(def application
  (js/document.getElementById "application"))

;(defn set-html! [el content]
;  (aset el "innerHTML" content))

;(secretary/set-config! :prefix "#")


;; /#/users
;(defroute users-path "/users" []
;  (set-html! application "<h1>USERS!</h1>"))

;; /#/users/:id
;(defroute user-path "/users/:id" [id]
;  (let [message (str "<h1>HELLO USER <small>" id "</small>!</h1>")]
;    (set-html! application message)))

;; /#/777
;(defroute jackpot-path "/777" []
;  (set-html! application "<h1>YOU HIT THE JACKPOT!</h1>"))

;; Catch all
;(defroute "*" []
;  (set-html! application "<h1>LOL! YOU LOST!</h1>"))


(def app-state (reagent/atom {}))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")

  (defroute "/" []
    (swap! app-state assoc :page :home))

  (defroute "/about" []
    (swap! app-state assoc :page :about))
  
  (hook-browser-navigation!))

(defn home []
  [:div [:h1 "Home Page"]
   [:a {:href "#/about"} "about page"]])

(defn about []
  [:div [:h1 "About Page"]
   [:a {:href "#/"} "home page"]])

(defmulti current-page #(@app-state :page))
(defmethod current-page :home [] 
  [home])
(defmethod current-page :about [] 
  [about])
(defmethod current-page :default [] 
  [:div])

(defn ^:export main []
  (app-routes)
  (reagent/render [current-page]
                  application))

