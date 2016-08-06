// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__25270,handler){
var map__25271 = p__25270;
var map__25271__$1 = ((((!((map__25271 == null)))?((((map__25271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25271):map__25271);
var uri = cljs.core.get.call(null,map__25271__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__25271__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__25271__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__25271__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__25271__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__25271__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__25271__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__25271,map__25271__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__25269_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__25269_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__25271,map__25271__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___25279 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___25279)){
var response_type_25280 = temp__4657__auto___25279;
this$__$1.responseType = cljs.core.name.call(null,response_type_25280);
} else {
}

var seq__25273_25281 = cljs.core.seq.call(null,headers);
var chunk__25274_25282 = null;
var count__25275_25283 = (0);
var i__25276_25284 = (0);
while(true){
if((i__25276_25284 < count__25275_25283)){
var vec__25277_25285 = cljs.core._nth.call(null,chunk__25274_25282,i__25276_25284);
var k_25286 = cljs.core.nth.call(null,vec__25277_25285,(0),null);
var v_25287 = cljs.core.nth.call(null,vec__25277_25285,(1),null);
this$__$1.setRequestHeader(k_25286,v_25287);

var G__25288 = seq__25273_25281;
var G__25289 = chunk__25274_25282;
var G__25290 = count__25275_25283;
var G__25291 = (i__25276_25284 + (1));
seq__25273_25281 = G__25288;
chunk__25274_25282 = G__25289;
count__25275_25283 = G__25290;
i__25276_25284 = G__25291;
continue;
} else {
var temp__4657__auto___25292 = cljs.core.seq.call(null,seq__25273_25281);
if(temp__4657__auto___25292){
var seq__25273_25293__$1 = temp__4657__auto___25292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25273_25293__$1)){
var c__17578__auto___25294 = cljs.core.chunk_first.call(null,seq__25273_25293__$1);
var G__25295 = cljs.core.chunk_rest.call(null,seq__25273_25293__$1);
var G__25296 = c__17578__auto___25294;
var G__25297 = cljs.core.count.call(null,c__17578__auto___25294);
var G__25298 = (0);
seq__25273_25281 = G__25295;
chunk__25274_25282 = G__25296;
count__25275_25283 = G__25297;
i__25276_25284 = G__25298;
continue;
} else {
var vec__25278_25299 = cljs.core.first.call(null,seq__25273_25293__$1);
var k_25300 = cljs.core.nth.call(null,vec__25278_25299,(0),null);
var v_25301 = cljs.core.nth.call(null,vec__25278_25299,(1),null);
this$__$1.setRequestHeader(k_25300,v_25301);

var G__25302 = cljs.core.next.call(null,seq__25273_25293__$1);
var G__25303 = null;
var G__25304 = (0);
var G__25305 = (0);
seq__25273_25281 = G__25302;
chunk__25274_25282 = G__25303;
count__25275_25283 = G__25304;
i__25276_25284 = G__25305;
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