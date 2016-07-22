(ns figwheel.connect (:require [dcm.app] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dcmclient", :websocket-url "ws://localhost:3450/figwheel-ws"})

