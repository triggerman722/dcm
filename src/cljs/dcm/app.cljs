(ns dcm.app
  (:import goog.History
           goog.net.IframeIo
           goog.net.EventType)
  (:require [dcm.greet :as greet]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [ajax.core :refer [GET POST]]
            [goog.history.EventType :as EventType]
            [reagent.core :as reagent]
            [reagent.session :as session]))


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
    [:label "Upload Filename: "]
    [:input {:type "file"
             :name "upload-file"
             :id "upload-file"}]]])

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

;;; cljs-ajax upload routines
(defn handle-response-ok [resp]
  (let [rsp (js->clj resp :keywordize-keys true)
        status (set-status "alert alert-success"
                           "Upload Successful"
                           [(str "Filename: " (:filename rsp))
                            (str "Size: " (:size rsp))
                            (str "Tempfile: " (:tempfile rsp))])]
    (session/put! :upload-status status)))

(defn handle-response-error [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        status (set-status "alert alert-danger"
                           "Upload Failure"
                           [(str "Status: " (:status ctx) " "
                                 (:status-text ctx))
                            (str (:message rsp))])]
    (.log js/console (str "cljs-ajax error: " status))
    (session/put! :upload-status status)))

(defn cljs-ajax-upload-file [element-id]
  (let [el (.getElementById js/document element-id)
        name (.-name el)
        file (aget (.-files el) 0)
        form-data (doto
                      (js/FormData.)
                    (.append name file))]
    (POST "/upload" {:params form-data
                     :response-format :json
                     :keywords? true
                     :handler handle-response-ok
                     :error-handler handle-response-error})
    (set-upload-indicator)))

(defn cljs-ajax-upload-button []
  [:div
   [:hr]
   [:button {:class "btn btn-primary" :type "button"
             :on-click #(cljs-ajax-upload-file "upload-file")}
    "Upload using cljs-ajax  " [:span {:class "fa fa-upload"}]]])


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
    "Upload Using IFrameIO " [:span {:class "fa fa-upload"}]]])

(defn loginaction []
  (POST "/hello"
        {:params {:user "from Joe!"}
         :handler loginsuccess
         :error-handler error-handler
         :format :json
         :response-format :json}))

(defn joinaction []
  (POST "/join"
        {:params {:username (@app-state :username) :password (@app-state :password) :firstname (@app-state :firstname) :lastname (@app-state :lastname)}
         :handler loginsuccess
         :error-handler error-handler
         :format :json
         :response-format :json}))


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
   (defroute "/join" []
    (swap! app-state assoc :page :join))

  (hook-browser-navigation!))

(defn home []
  [:div [:h1 "Home Page"]
   [:a {:href "#/about"} "about page"]])

(defn upload []
  [:div [:h1 "Upload Page"]
     [status-component]
     [upload-component]
     [cljs-ajax-upload-button]
     [iframeio-upload-button]
   [:a {:href "#/about"} "about page"]])


(defn about []
  [:h2 "Everflair"]
  [:div {:class "row"}
    [:div {:class "col-lg-4"}
     [:img {:src "ref/openspection/img/create.png" :class "center-block"}]
      [:h4 {:class "text-center"} "Make it."]
        [:p {:class "well"} "You make awesome stuff. Whether it is super-cute kitten collars, or amazingly insightful website reviews, you make awesome stuff."]]
    [:div {:class "col-lg-4"}
     [:img {:src "ref/openspection/img/images.png" :class "center-block"}] 
      [:h4 {:class "text-center"} "Sell it."]     
       [:p {:class "well"} "Create a beautiful storefront at Everflair where people who love your stuff can find you"]]
    [:div {:class "col-lg-4"}
     [:img {:src "ref/openspection/img/loop.png" :class "center-block"}]
      [:h4 {:class "text-center"} "Repeat"]
       [:p {:class "well"} "Create a beautiful storefront at Everflair where people who love your stuff can find you"]]])

 (defn login []
   [:div {:class "col-sm-12"}
    [:div {:class "well"}
     [:fieldset
      [:legend "Login"]
      [:div {:class "input-group"}
       [:span {:class "input-group-addon"} [:i {:class "glyphicon glyphicon-user"}]]
       [:input {:id "login-username" :type "text" :class "form-control" :name "username" :value "" :placeholder "username or email"}]]
      [:br]
      [:div {:class "input-group"}
       [:span {:class "input-group-addon"} [:i {:class "glyphicon glyphicon-lock"}]]
       [:input {:id "login-password" :type "password" :class "form-control" :name "password" :value "" :placeholder "password"}]]
      [:br]
      [:div {:class "checkbox"}
       [:label [:input {:id "login-rememberme" :type "checkbox" :name "rememberme"}] "Remember Me"]
      ]
      [:br]
      [:div {:class "form-actions"} [:button {:type "submit" :class "btn btn-success" :on-click loginaction} "Login"]]
     ]
    ]
   ])
 (defn formfield [type placeholder formkey]
   [:input {
           :type type
           :placeholder placeholder      
           :on-change #(swap! app-state assoc formkey (-> % .-target .-value))
           :class "form-control input-md"}]
 )
 (defn join []
   [:div {:class "col-sm-12"} 
    [:div {:class "well"} 
     [:fieldset 
      [:legend "Join"]
      [:label "First name: "]
      [:div {:class "input-group"}
       [:span {:class "input-group-addon"} [:i {:class "glyphicon glyphicon-pencil"}]]
       (formfield "text" "Firstname" :firstname)]
       [:span {:class "help-block"} "Your first name"]
      [:label "Last name: "]
      [:div {:class "input-group"}
       [:span {:class "input-group-addon"} [:i {:class "glyphicon glyphicon-pencil"}]]
       (formfield "text" "Lastname" :lastname)]
       [:span {:class "help-block"} "Your last name"]
      [:label "Email: "]
      [:div {:class "input-group"}
       [:span {:class "input-group-addon"} [:i {:class "glyphicon glyphicon-envelope"}]]
       (formfield "email" "name@deckmotion.com" :joinemail)]
       [:span {:class "help-block"} "Your email"]
      [:label "Username: "]
      [:div {:class "input-group"}
       [:span {:class "input-group-addon"} [:i {:class "glyphicon glyphicon-user"}]]
       (formfield "text" "Username" :username)]
       [:span {:class "help-block"} "Your user name"]
      [:label "Password: "]
      [:div {:class "input-group"}
       [:span {:class "input-group-addon"} [:i {:class "glyphicon glyphicon-asterisk"}]]
       (formfield "password" "" :password)];
       [:span {:class "help-block"} "Your password"]
      [:label "Confirm Password: "]
      [:div {:class "input-group"}
       [:span {:class "input-group-addon"} [:i {:class "glyphicon glyphicon-asterisk"}]]
       (formfield "password" "" :confirmpassword)]
       [:span {:class "help-block"} "Confirm your password"]
      [:div
       [:span {:class "help-block"} [:input {:id "join-agreetoterms" :type "checkbox" :name "join-agreetoterms"}] " I agree to the terms and conditions."]
      ]
      [:br]
      [:button {:type "submit" :class "btn btn-success" :on-click joinaction} "Join"]
     ]
    ]
   ])

(defmulti current-page #(@app-state :page))
(defmethod current-page :home [] 
  [home])
(defmethod current-page :upload []
  [upload])
(defmethod current-page :about [] 
  [about])
(defmethod current-page :login []
  [login])
(defmethod current-page :join []
  [join])
(defmethod current-page :default [] 
  [:div])

(defn ^:export main []
  (app-routes)
  (reagent/render [current-page]
                  application))

