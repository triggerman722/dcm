// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__25230,handler){
var map__25231 = p__25230;
var map__25231__$1 = ((((!((map__25231 == null)))?((((map__25231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25231):map__25231);
var uri = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__25231,map__25231__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__25229_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__25229_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__25231,map__25231__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___25239 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___25239)){
var response_type_25240 = temp__4657__auto___25239;
this$__$1.responseType = cljs.core.name.call(null,response_type_25240);
} else {
}

var seq__25233_25241 = cljs.core.seq.call(null,headers);
var chunk__25234_25242 = null;
var count__25235_25243 = (0);
var i__25236_25244 = (0);
while(true){
if((i__25236_25244 < count__25235_25243)){
var vec__25237_25245 = cljs.core._nth.call(null,chunk__25234_25242,i__25236_25244);
var k_25246 = cljs.core.nth.call(null,vec__25237_25245,(0),null);
var v_25247 = cljs.core.nth.call(null,vec__25237_25245,(1),null);
this$__$1.setRequestHeader(k_25246,v_25247);

var G__25248 = seq__25233_25241;
var G__25249 = chunk__25234_25242;
var G__25250 = count__25235_25243;
var G__25251 = (i__25236_25244 + (1));
seq__25233_25241 = G__25248;
chunk__25234_25242 = G__25249;
count__25235_25243 = G__25250;
i__25236_25244 = G__25251;
continue;
} else {
var temp__4657__auto___25252 = cljs.core.seq.call(null,seq__25233_25241);
if(temp__4657__auto___25252){
var seq__25233_25253__$1 = temp__4657__auto___25252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25233_25253__$1)){
var c__17578__auto___25254 = cljs.core.chunk_first.call(null,seq__25233_25253__$1);
var G__25255 = cljs.core.chunk_rest.call(null,seq__25233_25253__$1);
var G__25256 = c__17578__auto___25254;
var G__25257 = cljs.core.count.call(null,c__17578__auto___25254);
var G__25258 = (0);
seq__25233_25241 = G__25255;
chunk__25234_25242 = G__25256;
count__25235_25243 = G__25257;
i__25236_25244 = G__25258;
continue;
} else {
var vec__25238_25259 = cljs.core.first.call(null,seq__25233_25253__$1);
var k_25260 = cljs.core.nth.call(null,vec__25238_25259,(0),null);
var v_25261 = cljs.core.nth.call(null,vec__25238_25259,(1),null);
this$__$1.setRequestHeader(k_25260,v_25261);

var G__25262 = cljs.core.next.call(null,seq__25233_25253__$1);
var G__25263 = null;
var G__25264 = (0);
var G__25265 = (0);
seq__25233_25241 = G__25262;
chunk__25234_25242 = G__25263;
count__25235_25243 = G__25264;
i__25236_25244 = G__25265;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16775__auto__ = body;
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map