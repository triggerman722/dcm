(ns dcm.app
  (:import goog.History)
  (:require [dcm.greet :as greet]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [ajax.core :refer [GET POST]]
            [goog.history.EventType :as EventType]
            [reagent.core :as reagent]))


(def application
  (js/document.getElementById "application"))

(def app-state (reagent/atom {}))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))
(defn loginsuccess [response]
   (aset js/window "location" "#/about"))

(defn loginaction []
  (POST "/hello"
        {:params {:user "from Joe!"}
         :handler loginsuccess
         :error-handler error-handler
         :format :json
         :response-format :json}))


(defn app-routes []
  (secretary/set-config! :prefix "#")

  (defroute "/" []
    (swap! app-state assoc :page :home))

  (defroute "/about" []
    (swap! app-state assoc :page :about))
   (defroute "/login" []
    (swap! app-state assoc :page :login))

  (hook-browser-navigation!))

(defn home []
  [:div [:h1 "Home Page"]
   [:a {:href "#/about"} "about page"]])

(defn about []
  [:div [:h1 "About Page"]
   [:a {:href "#/"} "home page"]])

 (defn login []
  [:div [:h1 "Login"]
   [:div.row
    [:span "Username: "]
    [:input {:type "text" :name "username"}]]
   [:div.row
    [:span "Password: "]
    [:input {:type "password" :name "password"}]]
   [:div.row
    [:button {:type "submit"
              
              :on-click loginaction} "bubmit" ]]])

(defmulti current-page #(@app-state :page))
(defmethod current-page :home [] 
  [home])
(defmethod current-page :about [] 
  [about])
(defmethod current-page :login []
  [login])
(defmethod current-page :default [] 
  [:div])

(defn ^:export main []
  (app-routes)
  (reagent/render [current-page]
                  application))

