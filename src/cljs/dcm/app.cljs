(ns dcm.app
  (:require [dcm.greet :as greet]))

(greet/say-hello)

(.log js/console "Hello Cljs!")
