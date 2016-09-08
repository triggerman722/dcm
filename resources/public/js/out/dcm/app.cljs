(ns dcm.app
  (:import goog.History
           goog.net.IframeIo
           goog.net.EventType)
  (:require 
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [ajax.core :refer [GET POST]]
            [goog.history.EventType :as EventType]
            [reagent.core :as reagent]
            [reagent.session :as session]))


(def application
  (js/document.getElementById "application"))

(def app-state (reagent/atom {}))

(defn formfield [type placeholder formkey]
   [:input {
           :type type
           :placeholder placeholder
           :on-change #(swap! app-state assoc formkey (-> % .-target .-value))
           :class "form-control input-md"}]
 )

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn error-handler [{:keys [status status-text]}]
; is status is 401, change to unauthenticated
  (if (= status 401) (swap! app-state assoc :authenticated false))
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn unauthenticatedsuccess [response]
   ;set a value indicating we are authenticated
   (swap! app-state assoc :authenticated false)
   (aset js/window "location" "#/"))

(defn authenticatedsuccess [response]
   ;set a value indicating we are authenticated
   (swap! app-state assoc :authenticated true)
   (aset js/window "location" "#/profile"))


(defn status-component []
  (if-let [status (session/get :upload-status)]
    [:div
     [:h3 "Status"]
     status]))

(defn upload-component []
  [:div
   [:form {:id "upload-form"
           :enc-type "multipart/form-data"
           :method "POST"}
    [:label "Upload Slide Deck (*.ppt, *.pptx, *.ods, *.pdf): "]
    [:input {:type "file"
             :name "upload-deck"
             :id "upload-deck"}]
    [:label "Upload (optional) Audio file (*.wav, *.mp3, *.aac): "]
    [:input {:type "file"
             :name "upload-audio"
             :id "upload-audio"}]

]])

 (defn form-element [label-text glyphicon fieldtype fieldname fieldkey]
  [:div {:class "form-group"}
       [:label {:class "control-label col-lg-4"} (str label-text " ")]
       [:div {:class "input-group col-lg-7"}
        [:span {:class "input-group-addon"} [:i {:class (str "glyphicon " glyphicon)}]]
;        [:span {:class "help-block"} "Your password"]
        (formfield fieldtype fieldname fieldkey)]]

 )
 (defn about-sidebar [class]
 [:div {:class "panel panel-default"}
    [:div {:class "panel-body"}
    [:legend "Get in motion in less than a minute"]
    [:div {:class class}
      [:img {:src "ref/openspection/img/loop.png" :class "center-block"}]
      [:h4 {:class "text-center"} "Create your slide deck."]]
    [:div {:class class}
     [:img {:src "ref/openspection/img/audio.png" :class "center-block"}]
      [:h4 {:class "text-center"} "Add some sound."]]
    [:div {:class class}
     [:img {:src "ref/openspection/img/create.png" :class "center-block"}]
      [:h4 {:class "text-center"} "Get in motion."]]]]
 )

(defn set-upload-indicator []
  (let [class "fa fa-spinner fa-spin fa-pulse"]
    (session/put! :upload-status [:div 
                                  [:p "Uploading file... "
                                   [:span {:class class}]]])))
(defn into-list [items]
  (into [:ul]
        (for [i items]
          [:li i])))

(defn set-status [class title items]
  [:div {:class class}
   [:h4 title]
   (into-list items)])

(defn iframe-response-ok [msg]
  (let [status (set-status "alert alert-success"
                           "Upload Successful"
                           [(str "Filename: " (:filename msg))
                            (str "Size: " (:size msg))
                            (str "Tempfile: " (:tempfile msg))])]
    (session/put! :upload-status status)))

(defn iframe-response-error [msg]
  (let [status (set-status "alert alert-danger"
                           "Upload Failure"
                           [(str "Status: " (:status msg))
                            (str (:message msg))])]
    (session/put! :upload-status status)))

(defn handle-iframe-response [json-msg]
  (let [msg (js->clj json-msg :keywordize-keys true)]
    (.log js/console (str "iframe-response: " msg))
    (cond
      (= "OK" (:status msg)) (iframe-response-ok msg)
      (= "ERROR" (:status msg)) (iframe-response-error msg)
      :else (session/put! :upload-status [:div.alert.alert-danger
                                          [:h4 "Unexpected Error"]
                                          [:ul
                                           [:li (str "Status: " (:status msg))]
                                           [:li (:message msg)]]]))))
;;; Stole this from Dmitri Sotnikov - thanks.
;;; Original code is at https://github.com/yogthos
(defn iframeio-upload-file [form-id]
  (let [el (.getElementById js/document form-id)
        iframe (IframeIo.)]
    (events/listen iframe EventType.COMPLETE
                   (fn [event]
                     (let [rsp (.getResponseJson iframe)
                           status ()])
                     (handle-iframe-response (.getResponseJson iframe))
                     (.dispose iframe)))
    (set-upload-indicator)
    (.sendFromForm iframe el "/upload")))

(defn iframeio-upload-button []
  [:div
   [:hr]
   [:button {:class "btn btn-primary"
             :type "button"
             :on-click #(iframeio-upload-file "upload-form")}
    "Upload" [:span {:class "fa fa-upload"}]]])

(defn loginaction []
  (POST "/login"
        {:params {:username (@app-state :username) :password (@app-state :password)}
         :handler authenticatedsuccess
         :error-handler error-handler
         :format :raw
         :response-format :text
        }))

(defn forgotaction []
  (POST "/forgot"
        {:params {:username (@app-state :username)}
         :handler unauthenticatedsuccess
         :error-handler error-handler
         :format :json
         :response-format :json
        }))


(defn joinaction []
  (POST "/join"
        {:params {:username (@app-state :username)
                  :password (@app-state :password)
                  :confirmpassword (@app-state :confirmpassword)
                  :firstname (@app-state :firstname)
                  :lastname (@app-state :lastname)
                  :joinemail (@app-state :joinemail)
                  :join-agreetoterms (@app-state :join-agreetoterms)
                  }
         :handler authenticatedsuccess
         :error-handler error-handler
         :format :json
         :response-format :json}))
(defn temp-auth-action []
 (GET "/admin" 
         {:params {:username (@app-state :username) :password (@app-state :password) :firstname (@app-state :firstname) :lastname (@app-state :lastname)}
         :handler unauthenticatedsuccess
         :error-handler error-handler
         :format :json
         :response-format :json}))
(defn logout-action []
 (POST "/logout" {:handler unauthenticatedsuccess}))

(defn app-routes []
  (secretary/set-config! :prefix "#")

  (defroute "/" []
    (swap! app-state assoc :page :home))
  (defroute "/upload" []
    (swap! app-state assoc :page :upload))
  (defroute "/about" []
    (swap! app-state assoc :page :about))
   (defroute "/login" []
    (swap! app-state assoc :page :login))
   (defroute "/forgot" []
    (swap! app-state assoc :page :forgot))
   (defroute "/join" []
    (swap! app-state assoc :page :join))
   (defroute "/deckmotion/:id" [id]
    (swap! app-state assoc :page :deckmotion)
    (swap! app-state assoc :page-id id))

  (hook-browser-navigation!))

(defn home []
  [:div [:h1 "Home Page"]
   [:a {:href "#/about"} "about page"]])

(defn upload []
 (if (not= (@app-state :authenticated) true)
    (aset js/window "location" "#/login"))
   [:div {:class "row"}
    [:div {:class "col-lg-12"}
     [:div {:class "panel panel-default"}
      [:div {:class "panel-body"}
       [:legend "Upload your deck and audio and get in motion"]
        [status-component]
        [upload-component]
        [iframeio-upload-button] ]]]])


(defn about []
  [:h2 "Deckmotion"]
  [:div {:class "row"}
    [:div {:class "col-lg-12"}
    (about-sidebar "col-lg-4")]
    [:div {:class "col-lg-12"}
     [:div {:class "panel panel-default"}
      [:div {:class "panel-body"}
       [:button {:on-click temp-auth-action} "Auth"]
       [:button {:on-click logout-action} "Logout"]]]]])
;     [:img {:src "ref/openspection/img/create.png" :class "center-block"}]
;      [:h4 {:class "text-center"} "Make it."]
;        [:p {:class "well"} "You make awesome stuff. Whether it is super-cute kitten collars, or amazingly insightful website reviews, you make awesome stuff."]]
;    [:div {:class "col-lg-4"}
;     [:img {:src "ref/openspection/img/images.png" :class "center-block"}] 
;      [:h4 {:class "text-center"} "Sell it."]     
;       [:p {:class "well"} "Create a beautiful storefront at Everflair where people who love your stuff can find you"]]
;    [:div {:class "col-lg-4"}
;     [:img {:src "ref/openspection/img/loop.png" :class "center-block"}]
;      [:h4 {:class "text-center"} "Repeat"]
;       [:p {:class "well"} "Create a beautiful storefront at Everflair where people who love your stuff can find you"]]])

 (defn login []
   [:div {:class "row"}
   [:div {:class "col-lg-5"}
    (about-sidebar "col-lg-12")]
   [:div {:class "col-lg-7"}
    [:div {:class "panel panel-default"}
     [:div {:class "panel-body"}
     [:fieldset
      [:legend "Login"]
      [:form {:class "form-horizontal" :role "form"}
       (form-element "Username:" "glyphicon-user" "text" "Username" :username)
       (form-element "Password:" "glyphicon-asterisk" "password" "Password" :password)
       [:div {:class "form-group"}
         [:label {:class "control-label col-lg-4"}]
         [:span {:class "input-group col-lg-7"} [:input {:id "login-rememberme" :type "checkbox" :name "rememberme"}] " Remember Me"]]
        [:div {:class "form-group"}
         [:label {:class "control-label col-lg-4"}]
         [:button {:type "submit" :class "btn btn-success" :on-click loginaction} "Login"]
         [:a {:href "#/forgot" :style {:padding-left "20px"}} "Forgot your password?"]]]]]]]])

 (defn forgot []
   [:div {:class "row"}
   [:div {:class "col-lg-5"}
    (about-sidebar "col-lg-12")]
   [:div {:class "col-lg-7"}
    [:div {:class "panel panel-default"}
     [:div {:class "panel-body"}
     [:fieldset
      [:legend "Forgot your password?"]
      [:form {:class "form-horizontal" :role "form"}
       (form-element "Email or Username:" "glyphicon-user" "text" "Email or Username" :username)
        [:div {:class "form-group"}
         [:label {:class "control-label col-lg-4"}]
         [:button {:type "submit" :class "btn btn-success" :on-click forgotaction} "Send Password Reset Instructions"]]]]]]]])

 (defn join []
   [:div {:class "row"}
   [:div {:class "col-lg-5"}
    (about-sidebar "col-lg-12")]
   [:div {:class "col-lg-7"}
    [:div {:class "panel panel-default"}
     [:div {:class "panel-body"} 
     [:fieldset 
      [:legend "Join"]
      [:form {:class "form-horizontal" :role "form"}
       (form-element "First name:" "glyphicon-pencil" "text" "Firstname" :firstname)
       (form-element "Last name:" "glyphicon-pencil" "text" "Lastname" :lastname)
       (form-element "Email:" "glyphicon-envelope" "email" "name@deckmotion.com" :joinemail)
       (form-element "Username:" "glyphicon-user" "text" "Username" :username)
       (form-element "Password:" "glyphicon-asterisk" "password" "" :password)
       (form-element "Confirm Password:" "glyphicon-asterisk" "password" "" :confirmpassword)
        [:div {:class "form-group"}
         [:label {:class "control-label col-lg-4"}]
         [:span {:class "input-group col-lg-7"} [:input {:id "join-agreetoterms" :type "checkbox" :name "join-agreetoterms"}] " I agree to the terms and conditions."]]
        [:div {:class "form-group"}
         [:label {:class "control-label col-lg-4"}]
         [:button {:type "submit" :class "btn btn-success" :on-click joinaction} "Get Started"]]]]]]]])
(defn deckmotion []
   [:div {:class "row"}
    [:div {:class "col-lg-9"}
      [:div {:align "center" :class "embed-responsive embed-responsive-16by9"}
        [:video {:controls true :src (str "/videos/" (@app-state :page-id) ".mp4") :width "100%" :class "embed-responsive-item"}]]
      [:br]
      [:div {:class "col-lg-12 panel panel-default"}
        [:div {:class "panel-body"}
         [:h1 "Deckmotion Page"] [:h3 (@app-state :page-id)]]]] 
    [:div {:class "col-lg-3"}
      [:div {:class "panel panel-default"}
        [:div {:class "panel-body"}]]]
   ]   
)

(defmulti current-page #(@app-state :page))
(defmethod current-page :home [] 
  [home])
(defmethod current-page :upload []
  [upload])
(defmethod current-page :about [] 
  [about])
(defmethod current-page :login []
  [login])
(defmethod current-page :forgot []
  [forgot])
(defmethod current-page :join []
  [join])
(defmethod current-page :deckmotion []
  [deckmotion])


(defmethod current-page :default [] 
  [:div])

(defn ^:export main []
  (app-routes)
  (reagent/render [current-page]
                  application))

