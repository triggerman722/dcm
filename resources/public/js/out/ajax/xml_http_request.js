// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8819,handler){
var map__8820 = p__8819;
var map__8820__$1 = ((((!((map__8820 == null)))?((((map__8820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8820):map__8820);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8820__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8820__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8820__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8820__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8820__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8820__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8820__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__8820,map__8820__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__8818_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__8818_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__8820,map__8820__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___8828 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___8828)){
var response_type_8829 = temp__4657__auto___8828;
this$__$1.responseType = cljs.core.name(response_type_8829);
} else {
}

var seq__8822_8830 = cljs.core.seq(headers);
var chunk__8823_8831 = null;
var count__8824_8832 = (0);
var i__8825_8833 = (0);
while(true){
if((i__8825_8833 < count__8824_8832)){
var vec__8826_8834 = chunk__8823_8831.cljs$core$IIndexed$_nth$arity$2(null,i__8825_8833);
var k_8835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8826_8834,(0),null);
var v_8836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8826_8834,(1),null);
this$__$1.setRequestHeader(k_8835,v_8836);

var G__8837 = seq__8822_8830;
var G__8838 = chunk__8823_8831;
var G__8839 = count__8824_8832;
var G__8840 = (i__8825_8833 + (1));
seq__8822_8830 = G__8837;
chunk__8823_8831 = G__8838;
count__8824_8832 = G__8839;
i__8825_8833 = G__8840;
continue;
} else {
var temp__4657__auto___8841 = cljs.core.seq(seq__8822_8830);
if(temp__4657__auto___8841){
var seq__8822_8842__$1 = temp__4657__auto___8841;
if(cljs.core.chunked_seq_QMARK_(seq__8822_8842__$1)){
var c__5408__auto___8843 = cljs.core.chunk_first(seq__8822_8842__$1);
var G__8844 = cljs.core.chunk_rest(seq__8822_8842__$1);
var G__8845 = c__5408__auto___8843;
var G__8846 = cljs.core.count(c__5408__auto___8843);
var G__8847 = (0);
seq__8822_8830 = G__8844;
chunk__8823_8831 = G__8845;
count__8824_8832 = G__8846;
i__8825_8833 = G__8847;
continue;
} else {
var vec__8827_8848 = cljs.core.first(seq__8822_8842__$1);
var k_8849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8827_8848,(0),null);
var v_8850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8827_8848,(1),null);
this$__$1.setRequestHeader(k_8849,v_8850);

var G__8851 = cljs.core.next(seq__8822_8842__$1);
var G__8852 = null;
var G__8853 = (0);
var G__8854 = (0);
seq__8822_8830 = G__8851;
chunk__8823_8831 = G__8852;
count__8824_8832 = G__8853;
i__8825_8833 = G__8854;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4605__auto__ = body;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
