// Compiled by ClojureScript 1.7.122 {}
goog.provide('dcm.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.net.IframeIo');
goog.require('dcm.greet');
goog.require('goog.History');
goog.require('goog.events');
dcm.app.application = document.getElementById("application");
dcm.app.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
dcm.app.hook_browser_navigation_BANG_ = (function dcm$app$hook_browser_navigation_BANG_(){
var G__20657 = (new goog.History());
goog.events.listen(G__20657,goog.history.EventType.NAVIGATE,((function (G__20657){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__20657))
);

G__20657.setEnabled(true);

return G__20657;
});
dcm.app.error_handler = (function dcm$app$error_handler(p__20658){
var map__20661 = p__20658;
var map__20661__$1 = ((((!((map__20661 == null)))?((((map__20661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20661):map__20661);
var status = cljs.core.get.call(null,map__20661__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__20661__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
dcm.app.loginsuccess = (function dcm$app$loginsuccess(response){
return (window["location"] = "#/about");
});
dcm.app.status_component = (function dcm$app$status_component(){
var temp__4655__auto__ = reagent.session.get.call(null,new cljs.core.Keyword(null,"upload-status","upload-status",-116013326));
if(cljs.core.truth_(temp__4655__auto__)){
var status = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Status"], null),status], null);
} else {
return null;
}
});
dcm.app.upload_component = (function dcm$app$upload_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-form",new cljs.core.Keyword(null,"enc-type","enc-type",-1746291599),"multipart/form-data",new cljs.core.Keyword(null,"method","method",55703592),"POST"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Upload Filename: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"name","name",1843675177),"upload-file",new cljs.core.Keyword(null,"id","id",-1388402092),"upload-file"], null)], null)], null)], null);
});
dcm.app.set_upload_indicator = (function dcm$app$set_upload_indicator(){
var class$ = "fa fa-spinner fa-spin fa-pulse";
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"upload-status","upload-status",-116013326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Uploading file... ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], null)], null)], null));
});
dcm.app.into_list = (function dcm$app$into_list(items){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__17547__auto__ = (function dcm$app$into_list_$_iter__20667(s__20668){
return (new cljs.core.LazySeq(null,(function (){
var s__20668__$1 = s__20668;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20668__$1);
if(temp__4657__auto__){
var s__20668__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20668__$2)){
var c__17545__auto__ = cljs.core.chunk_first.call(null,s__20668__$2);
var size__17546__auto__ = cljs.core.count.call(null,c__17545__auto__);
var b__20670 = cljs.core.chunk_buffer.call(null,size__17546__auto__);
if((function (){var i__20669 = (0);
while(true){
if((i__20669 < size__17546__auto__)){
var i = cljs.core._nth.call(null,c__17545__auto__,i__20669);
cljs.core.chunk_append.call(null,b__20670,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null));

var G__20671 = (i__20669 + (1));
i__20669 = G__20671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20670),dcm$app$into_list_$_iter__20667.call(null,cljs.core.chunk_rest.call(null,s__20668__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20670),null);
}
} else {
var i = cljs.core.first.call(null,s__20668__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null),dcm$app$into_list_$_iter__20667.call(null,cljs.core.rest.call(null,s__20668__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17547__auto__.call(null,items);
})());
});
dcm.app.set_status = (function dcm$app$set_status(class$,title,items){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),dcm.app.into_list.call(null,items)], null);
});
dcm.app.handle_response_ok = (function dcm$app$handle_response_ok(resp){
var rsp = cljs.core.js__GT_clj.call(null,resp,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var status = dcm.app.set_status.call(null,"alert alert-success","Upload Successful",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("Filename: "),cljs.core.str(new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(rsp))].join(''),[cljs.core.str("Size: "),cljs.core.str(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(rsp))].join(''),[cljs.core.str("Tempfile: "),cljs.core.str(new cljs.core.Keyword(null,"tempfile","tempfile",-478552036).cljs$core$IFn$_invoke$arity$1(rsp))].join('')], null));
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"upload-status","upload-status",-116013326),status);
});
dcm.app.handle_response_error = (function dcm$app$handle_response_error(ctx){
var rsp = cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var status = dcm.app.set_status.call(null,"alert alert-danger","Upload Failure",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("Status: "),cljs.core.str(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(ctx)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(ctx))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(rsp))].join('')], null));
console.log([cljs.core.str("cljs-ajax error: "),cljs.core.str(status)].join(''));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"upload-status","upload-status",-116013326),status);
});
dcm.app.cljs_ajax_upload_file = (function dcm$app$cljs_ajax_upload_file(element_id){
var el = document.getElementById(element_id);
var name = el.name;
var file = (el.files[(0)]);
var form_data = (function (){var G__20673 = (new FormData());
G__20673.append(name,file);

return G__20673;
})();
ajax.core.POST.call(null,"/upload",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),form_data,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),dcm.app.handle_response_ok,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),dcm.app.handle_response_error], null));

return dcm.app.set_upload_indicator.call(null);
});
dcm.app.cljs_ajax_upload_button = (function dcm$app$cljs_ajax_upload_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dcm.app.cljs_ajax_upload_file.call(null,"upload-file");
})], null),"Upload using cljs-ajax  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-upload"], null)], null)], null)], null);
});
dcm.app.iframe_response_ok = (function dcm$app$iframe_response_ok(msg){
var status = dcm.app.set_status.call(null,"alert alert-success","Upload Successful",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("Filename: "),cljs.core.str(new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(msg))].join(''),[cljs.core.str("Size: "),cljs.core.str(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(msg))].join(''),[cljs.core.str("Tempfile: "),cljs.core.str(new cljs.core.Keyword(null,"tempfile","tempfile",-478552036).cljs$core$IFn$_invoke$arity$1(msg))].join('')], null));
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"upload-status","upload-status",-116013326),status);
});
dcm.app.iframe_response_error = (function dcm$app$iframe_response_error(msg){
var status = dcm.app.set_status.call(null,"alert alert-danger","Upload Failure",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("Status: "),cljs.core.str(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(msg))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg))].join('')], null));
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"upload-status","upload-status",-116013326),status);
});
dcm.app.handle_iframe_response = (function dcm$app$handle_iframe_response(json_msg){
var msg = cljs.core.js__GT_clj.call(null,json_msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
console.log([cljs.core.str("iframe-response: "),cljs.core.str(msg)].join(''));

if(cljs.core._EQ_.call(null,"OK",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(msg))){
return dcm.app.iframe_response_ok.call(null,msg);
} else {
if(cljs.core._EQ_.call(null,"ERROR",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(msg))){
return dcm.app.iframe_response_error.call(null,msg);
} else {
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"upload-status","upload-status",-116013326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Unexpected Error"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str("Status: "),cljs.core.str(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(msg))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg)], null)], null)], null));

}
}
});
dcm.app.iframeio_upload_file = (function dcm$app$iframeio_upload_file(form_id){
var el = document.getElementById(form_id);
var iframe = (new goog.net.IframeIo());
goog.events.listen(iframe,goog.net.EventType.COMPLETE,((function (el,iframe){
return (function (event){
var rsp_20674 = iframe.getResponseJson();
var status_20675 = cljs.core.List.EMPTY;

dcm.app.handle_iframe_response.call(null,iframe.getResponseJson());

return iframe.dispose();
});})(el,iframe))
);

dcm.app.set_upload_indicator.call(null);

return iframe.sendFromForm(el,"/upload");
});
dcm.app.iframeio_upload_button = (function dcm$app$iframeio_upload_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dcm.app.iframeio_upload_file.call(null,"upload-form");
})], null),"Upload Using IFrameIO ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-upload"], null)], null)], null)], null);
});
dcm.app.loginaction = (function dcm$app$loginaction(){
return ajax.core.POST.call(null,"/hello",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),"from Joe!"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),dcm.app.loginsuccess,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),dcm.app.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
dcm.app.joinaction = (function dcm$app$joinaction(){
return ajax.core.POST.call(null,"/hello",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),"from Joe!"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),dcm.app.loginsuccess,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),dcm.app.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
dcm.app.app_routes = (function dcm$app$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__19212__auto___20706 = (function (params__19213__auto__){
if(cljs.core.map_QMARK_.call(null,params__19213__auto__)){
var map__20691 = params__19213__auto__;
var map__20691__$1 = ((((!((map__20691 == null)))?((((map__20691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20691):map__20691);
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19213__auto__)){
var vec__20693 = params__19213__auto__;
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__19212__auto___20706);


var action__19212__auto___20707 = (function (params__19213__auto__){
if(cljs.core.map_QMARK_.call(null,params__19213__auto__)){
var map__20694 = params__19213__auto__;
var map__20694__$1 = ((((!((map__20694 == null)))?((((map__20694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20694):map__20694);
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"upload","upload",-255769218));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19213__auto__)){
var vec__20696 = params__19213__auto__;
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"upload","upload",-255769218));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/upload",action__19212__auto___20707);


var action__19212__auto___20708 = (function (params__19213__auto__){
if(cljs.core.map_QMARK_.call(null,params__19213__auto__)){
var map__20697 = params__19213__auto__;
var map__20697__$1 = ((((!((map__20697 == null)))?((((map__20697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20697):map__20697);
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19213__auto__)){
var vec__20699 = params__19213__auto__;
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__19212__auto___20708);


var action__19212__auto___20709 = (function (params__19213__auto__){
if(cljs.core.map_QMARK_.call(null,params__19213__auto__)){
var map__20700 = params__19213__auto__;
var map__20700__$1 = ((((!((map__20700 == null)))?((((map__20700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20700):map__20700);
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19213__auto__)){
var vec__20702 = params__19213__auto__;
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__19212__auto___20709);


var action__19212__auto___20710 = (function (params__19213__auto__){
if(cljs.core.map_QMARK_.call(null,params__19213__auto__)){
var map__20703 = params__19213__auto__;
var map__20703__$1 = ((((!((map__20703 == null)))?((((map__20703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20703):map__20703);
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"join","join",-758861890));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19213__auto__)){
var vec__20705 = params__19213__auto__;
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"join","join",-758861890));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/join",action__19212__auto___20710);


return dcm.app.hook_browser_navigation_BANG_.call(null);
});
dcm.app.home = (function dcm$app$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Home Page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"about page"], null)], null);
});
dcm.app.upload = (function dcm$app$upload(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Upload Page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.status_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.upload_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.cljs_ajax_upload_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.iframeio_upload_button], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"about page"], null)], null);
});
dcm.app.about = (function dcm$app$about(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Everflair"], null);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"ref/openspection/img/create.png",new cljs.core.Keyword(null,"class","class",-2030961996),"center-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center"], null),"Make it."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"well"], null),"You make awesome stuff. Whether it is super-cute kitten collars, or amazingly insightful website reviews, you make awesome stuff."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"ref/openspection/img/images.png",new cljs.core.Keyword(null,"class","class",-2030961996),"center-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center"], null),"Sell it."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"well"], null),"Create a beautiful storefront at Everflair where people who love your stuff can find you"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"ref/openspection/img/loop.png",new cljs.core.Keyword(null,"class","class",-2030961996),"center-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center"], null),"Repeat"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"well"], null),"Create a beautiful storefront at Everflair where people who love your stuff can find you"], null)], null)], null);
});
dcm.app.login = (function dcm$app$login(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"well"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Login"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-user"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"login-username",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"username or email"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-lock"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"login-password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"password"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"checkbox"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"login-rememberme",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"rememberme"], null)], null),"Remember Me"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-actions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),dcm.app.loginaction], null),"Login"], null)], null)], null)], null)], null);
});
dcm.app.join = (function dcm$app$join(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"well"], null),new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Join"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"First name: "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-pencil"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"join-firstname",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control input-md",new cljs.core.Keyword(null,"name","name",1843675177),"join-firstname",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Firstname"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"help-block"], null),"Your first name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Last name: "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-pencil"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"join-lastname",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control input-md",new cljs.core.Keyword(null,"name","name",1843675177),"join-lastname",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Lastname"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"help-block"], null),"Your last name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Email: "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-envelope"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"join-email",new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control input-md",new cljs.core.Keyword(null,"name","name",1843675177),"join-email"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"help-block"], null),"Your email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Username: "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-user"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"join-username",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control input-md",new cljs.core.Keyword(null,"name","name",1843675177),"join-username",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"help-block"], null),"Your user name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Password: "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-asterisk"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"join-password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control input-md",new cljs.core.Keyword(null,"name","name",1843675177),"join-password"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"help-block"], null),"Your password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Confirm Password: "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-asterisk"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"join-confirmpassword",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control input-md",new cljs.core.Keyword(null,"name","name",1843675177),"join-confirmpassword"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"help-block"], null),"Your password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"help-block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"join-agreetoterms",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"join-agreetoterms"], null)], null)," I agree to the terms and conditions."], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),dcm.app.joinaction], null),"Join"], null)], null)], null)], null);
});
if(typeof dcm.app.current_page !== 'undefined'){
} else {
dcm.app.current_page = (function (){var method_table__17688__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17689__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17690__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17691__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17692__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dcm.app","current-page"),((function (method_table__17688__auto__,prefer_table__17689__auto__,method_cache__17690__auto__,cached_hierarchy__17691__auto__,hierarchy__17692__auto__){
return (function (){
return cljs.core.deref.call(null,dcm.app.app_state).call(null,new cljs.core.Keyword(null,"page","page",849072397));
});})(method_table__17688__auto__,prefer_table__17689__auto__,method_cache__17690__auto__,cached_hierarchy__17691__auto__,hierarchy__17692__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17692__auto__,method_table__17688__auto__,prefer_table__17689__auto__,method_cache__17690__auto__,cached_hierarchy__17691__auto__));
})();
}
cljs.core._add_method.call(null,dcm.app.current_page,new cljs.core.Keyword(null,"home","home",-74557309),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.home], null);
}));
cljs.core._add_method.call(null,dcm.app.current_page,new cljs.core.Keyword(null,"upload","upload",-255769218),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.upload], null);
}));
cljs.core._add_method.call(null,dcm.app.current_page,new cljs.core.Keyword(null,"about","about",1423892543),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.about], null);
}));
cljs.core._add_method.call(null,dcm.app.current_page,new cljs.core.Keyword(null,"login","login",55217519),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.login], null);
}));
cljs.core._add_method.call(null,dcm.app.current_page,new cljs.core.Keyword(null,"join","join",-758861890),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.join], null);
}));
cljs.core._add_method.call(null,dcm.app.current_page,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
dcm.app.main = (function dcm$app$main(){
dcm.app.app_routes.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.current_page], null),dcm.app.application);
});
goog.exportSymbol('dcm.app.main', dcm.app.main);

//# sourceMappingURL=app.js.map