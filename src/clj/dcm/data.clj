(ns dcm.data
   (:require [monger.core :as mg]
             [monger.collection :as mc]
             [monger.credentials :as mcred]
             [clojure.data.json :as json])

   (:import [com.mongodb MongoOptions ServerAddress])
   (:import org.bson.types.ObjectId))

(def conn (let [  db      "deckmotion"
        u       "admin"
        p       "pMASCPzESFkl"
        port    (Integer/parseInt (get (System/getenv) "OPENSHIFT_MONGODB_DB_PORT" "27017"))
        host    (get (System/getenv) "OPENSHIFT_MONGODB_DB_HOST" "0.0.0.0")]
        (mg/connect-with-credentials host port (mcred/create u db p))))


(def db   (mg/get-db conn "deckmotion"))

(defn add-item [collection value]
  (mc/insert-and-return db collection value))

(defn get-item [collection query]
  (mc/find db collection query))

(defn get-all [collection]
  (mc/find db collection))

(defn get-single [collection id]
  (mc/find-one db collection { :_id (ObjectId. id) }))

(defn json-writestr [s]
  (json/write-str s :value-fn (fn [k v] (if (instance? ObjectId v) (str v) v))))
