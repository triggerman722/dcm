(ns dcm.transactional
  (:require [clojure.java.io :as io]))

(defprotocol Transaction (update [_ state]))

(defrecord CreateUser [name email start-date]
  Transaction
  (update [this db]
    (update-in db [:users] conj
      {:name name :email email :start-date start-date})))

(defrecord DeleteUser [email remove-date]
  Transaction
  (update [this db]
    (update-in db [:users]
      (fn [coll] (remove (fn [r] (= (:email r) email)) coll)))))


(defprotocol TransactionLog (record [_ tx]))
(defrecord DefaultTransactionLog [ag]
  TransactionLog
  (record [this tx]
    (send-off ag
      (fn [out]
        (binding [*out* out *flush-on-newline* true]
          (io! (prn tx)) out)))))

(defn read-transactions [f]
  (if-not (.exists f) []
    (let [rdr (java.io.PushbackReader. (clojure.java.io/reader f))]
      (take-while identity
        (repeatedly 
          (fn [] (read rdr false nil)))))))

(defrecord Database [state delegate]
  TransactionLog
  (record [this tx]
    (dosync
     (alter state (partial update tx))
     (record delegate tx))))

(def db 
   (Database.
     (ref (reduce (fn [db tx] (update tx db)) {}
                    (read-transactions
                      (clojure.java.io/file "my.db.clj"))))
     (DefaultTransactionLog. 
       (agent (clojure.java.io/writer
                (clojure.java.io/file "my.db.clj")
                :append true)))))

(defn create-user [name email]
    (record db (CreateUser. name email (java.util.Date.))))

(defn delete-user [email]
    (record db (DeleteUser. email (java.util.Date.))))

