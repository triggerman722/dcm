// Compiled by ClojureScript 1.7.122 {}
goog.provide('dcm.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('dcm.greet');
goog.require('goog.History');
goog.require('goog.events');
dcm.app.application = document.getElementById("application");
dcm.app.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
dcm.app.hook_browser_navigation_BANG_ = (function dcm$app$hook_browser_navigation_BANG_(){
var G__20762 = (new goog.History());
goog.events.listen(G__20762,goog.history.EventType.NAVIGATE,((function (G__20762){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__20762))
);

G__20762.setEnabled(true);

return G__20762;
});
dcm.app.error_handler = (function dcm$app$error_handler(p__20763){
var map__20766 = p__20763;
var map__20766__$1 = ((((!((map__20766 == null)))?((((map__20766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20766):map__20766);
var status = cljs.core.get.call(null,map__20766__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__20766__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
dcm.app.loginsuccess = (function dcm$app$loginsuccess(response){
return (window["location"] = "#/about");
});
dcm.app.loginaction = (function dcm$app$loginaction(){
return ajax.core.POST.call(null,"/hello",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),"from Joe!"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),dcm.app.loginsuccess,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),dcm.app.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
dcm.app.app_routes = (function dcm$app$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__19211__auto___20786 = (function (params__19212__auto__){
if(cljs.core.map_QMARK_.call(null,params__19212__auto__)){
var map__20777 = params__19212__auto__;
var map__20777__$1 = ((((!((map__20777 == null)))?((((map__20777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20777):map__20777);
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19212__auto__)){
var vec__20779 = params__19212__auto__;
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__19211__auto___20786);


var action__19211__auto___20787 = (function (params__19212__auto__){
if(cljs.core.map_QMARK_.call(null,params__19212__auto__)){
var map__20780 = params__19212__auto__;
var map__20780__$1 = ((((!((map__20780 == null)))?((((map__20780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20780):map__20780);
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19212__auto__)){
var vec__20782 = params__19212__auto__;
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__19211__auto___20787);


var action__19211__auto___20788 = (function (params__19212__auto__){
if(cljs.core.map_QMARK_.call(null,params__19212__auto__)){
var map__20783 = params__19212__auto__;
var map__20783__$1 = ((((!((map__20783 == null)))?((((map__20783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20783):map__20783);
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19212__auto__)){
var vec__20785 = params__19212__auto__;
return cljs.core.swap_BANG_.call(null,dcm.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__19211__auto___20788);


return dcm.app.hook_browser_navigation_BANG_.call(null);
});
dcm.app.home = (function dcm$app$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Home Page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"about page"], null)], null);
});
dcm.app.about = (function dcm$app$about(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About Page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"home page"], null)], null);
});
dcm.app.login = (function dcm$app$login(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Login"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Username: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"username"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Password: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),dcm.app.loginaction], null),"bubmit"], null)], null)], null);
});
if(typeof dcm.app.current_page !== 'undefined'){
} else {
dcm.app.current_page = (function (){var method_table__17689__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17690__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17691__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17692__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17693__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dcm.app","current-page"),((function (method_table__17689__auto__,prefer_table__17690__auto__,method_cache__17691__auto__,cached_hierarchy__17692__auto__,hierarchy__17693__auto__){
return (function (){
return cljs.core.deref.call(null,dcm.app.app_state).call(null,new cljs.core.Keyword(null,"page","page",849072397));
});})(method_table__17689__auto__,prefer_table__17690__auto__,method_cache__17691__auto__,cached_hierarchy__17692__auto__,hierarchy__17693__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17693__auto__,method_table__17689__auto__,prefer_table__17690__auto__,method_cache__17691__auto__,cached_hierarchy__17692__auto__));
})();
}
cljs.core._add_method.call(null,dcm.app.current_page,new cljs.core.Keyword(null,"home","home",-74557309),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.home], null);
}));
cljs.core._add_method.call(null,dcm.app.current_page,new cljs.core.Keyword(null,"about","about",1423892543),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.about], null);
}));
cljs.core._add_method.call(null,dcm.app.current_page,new cljs.core.Keyword(null,"login","login",55217519),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.app.login], null);
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