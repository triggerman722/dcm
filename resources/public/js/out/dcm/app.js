// Compiled by ClojureScript 1.7.122 {}
goog.provide('dcm.app');
goog.require('cljs.core');
goog.require('dcm.greet');
goog.require('secretary.core');
dcm.app.application = document.getElementById("application");
dcm.app.set_html_BANG_ = (function dcm$app$set_html_BANG_(el,content){
return (el["innerHTML"] = content);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__19602__auto___33008 = (function (params__19603__auto__){
if(cljs.core.map_QMARK_.call(null,params__19603__auto__)){
var map__33004 = params__19603__auto__;
var map__33004__$1 = ((((!((map__33004 == null)))?((((map__33004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33004):map__33004);
return dcm.app.set_html_BANG_.call(null,dcm.app.application,"<h1>OMG! YOU'RE HOME!</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__19603__auto__)){
var vec__33006 = params__19603__auto__;
return dcm.app.set_html_BANG_.call(null,dcm.app.application,"<h1>OMG! YOU'RE HOME!</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__19602__auto___33008);

dcm.app.home_path = ((function (action__19602__auto___33008){
return (function dcm$app$home_path(var_args){
var args__17840__auto__ = [];
var len__17833__auto___33009 = arguments.length;
var i__17834__auto___33010 = (0);
while(true){
if((i__17834__auto___33010 < len__17833__auto___33009)){
args__17840__auto__.push((arguments[i__17834__auto___33010]));

var G__33011 = (i__17834__auto___33010 + (1));
i__17834__auto___33010 = G__33011;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((0) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((0)),(0))):null);
return dcm.app.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17841__auto__);
});})(action__19602__auto___33008))
;

dcm.app.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__19602__auto___33008){
return (function (args__19601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__19601__auto__);
});})(action__19602__auto___33008))
;

dcm.app.home_path.cljs$lang$maxFixedArity = (0);

dcm.app.home_path.cljs$lang$applyTo = ((function (action__19602__auto___33008){
return (function (seq33007){
return dcm.app.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33007));
});})(action__19602__auto___33008))
;
var action__19602__auto___33016 = (function (params__19603__auto__){
if(cljs.core.map_QMARK_.call(null,params__19603__auto__)){
var map__33012 = params__19603__auto__;
var map__33012__$1 = ((((!((map__33012 == null)))?((((map__33012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33012):map__33012);
return dcm.app.set_html_BANG_.call(null,dcm.app.application,"<h1>USERS!</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__19603__auto__)){
var vec__33014 = params__19603__auto__;
return dcm.app.set_html_BANG_.call(null,dcm.app.application,"<h1>USERS!</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/users",action__19602__auto___33016);

dcm.app.users_path = ((function (action__19602__auto___33016){
return (function dcm$app$users_path(var_args){
var args__17840__auto__ = [];
var len__17833__auto___33017 = arguments.length;
var i__17834__auto___33018 = (0);
while(true){
if((i__17834__auto___33018 < len__17833__auto___33017)){
args__17840__auto__.push((arguments[i__17834__auto___33018]));

var G__33019 = (i__17834__auto___33018 + (1));
i__17834__auto___33018 = G__33019;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((0) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((0)),(0))):null);
return dcm.app.users_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17841__auto__);
});})(action__19602__auto___33016))
;

dcm.app.users_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__19602__auto___33016){
return (function (args__19601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/users",args__19601__auto__);
});})(action__19602__auto___33016))
;

dcm.app.users_path.cljs$lang$maxFixedArity = (0);

dcm.app.users_path.cljs$lang$applyTo = ((function (action__19602__auto___33016){
return (function (seq33015){
return dcm.app.users_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33015));
});})(action__19602__auto___33016))
;
var action__19602__auto___33024 = (function (params__19603__auto__){
if(cljs.core.map_QMARK_.call(null,params__19603__auto__)){
var map__33020 = params__19603__auto__;
var map__33020__$1 = ((((!((map__33020 == null)))?((((map__33020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33020):map__33020);
var id = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var message = [cljs.core.str("<h1>HELLO USER <small>"),cljs.core.str(id),cljs.core.str("</small>!</h1>")].join('');
return dcm.app.set_html_BANG_.call(null,dcm.app.application,message);
} else {
if(cljs.core.vector_QMARK_.call(null,params__19603__auto__)){
var vec__33022 = params__19603__auto__;
var id = cljs.core.nth.call(null,vec__33022,(0),null);
var message = [cljs.core.str("<h1>HELLO USER <small>"),cljs.core.str(id),cljs.core.str("</small>!</h1>")].join('');
return dcm.app.set_html_BANG_.call(null,dcm.app.application,message);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/users/:id",action__19602__auto___33024);

dcm.app.user_path = ((function (action__19602__auto___33024){
return (function dcm$app$user_path(var_args){
var args__17840__auto__ = [];
var len__17833__auto___33025 = arguments.length;
var i__17834__auto___33026 = (0);
while(true){
if((i__17834__auto___33026 < len__17833__auto___33025)){
args__17840__auto__.push((arguments[i__17834__auto___33026]));

var G__33027 = (i__17834__auto___33026 + (1));
i__17834__auto___33026 = G__33027;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((0) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((0)),(0))):null);
return dcm.app.user_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17841__auto__);
});})(action__19602__auto___33024))
;

dcm.app.user_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__19602__auto___33024){
return (function (args__19601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/users/:id",args__19601__auto__);
});})(action__19602__auto___33024))
;

dcm.app.user_path.cljs$lang$maxFixedArity = (0);

dcm.app.user_path.cljs$lang$applyTo = ((function (action__19602__auto___33024){
return (function (seq33023){
return dcm.app.user_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33023));
});})(action__19602__auto___33024))
;
var action__19602__auto___33032 = (function (params__19603__auto__){
if(cljs.core.map_QMARK_.call(null,params__19603__auto__)){
var map__33028 = params__19603__auto__;
var map__33028__$1 = ((((!((map__33028 == null)))?((((map__33028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33028):map__33028);
return dcm.app.set_html_BANG_.call(null,dcm.app.application,"<h1>YOU HIT THE JACKPOT!</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__19603__auto__)){
var vec__33030 = params__19603__auto__;
return dcm.app.set_html_BANG_.call(null,dcm.app.application,"<h1>YOU HIT THE JACKPOT!</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/777",action__19602__auto___33032);

dcm.app.jackpot_path = ((function (action__19602__auto___33032){
return (function dcm$app$jackpot_path(var_args){
var args__17840__auto__ = [];
var len__17833__auto___33033 = arguments.length;
var i__17834__auto___33034 = (0);
while(true){
if((i__17834__auto___33034 < len__17833__auto___33033)){
args__17840__auto__.push((arguments[i__17834__auto___33034]));

var G__33035 = (i__17834__auto___33034 + (1));
i__17834__auto___33034 = G__33035;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((0) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((0)),(0))):null);
return dcm.app.jackpot_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17841__auto__);
});})(action__19602__auto___33032))
;

dcm.app.jackpot_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__19602__auto___33032){
return (function (args__19601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/777",args__19601__auto__);
});})(action__19602__auto___33032))
;

dcm.app.jackpot_path.cljs$lang$maxFixedArity = (0);

dcm.app.jackpot_path.cljs$lang$applyTo = ((function (action__19602__auto___33032){
return (function (seq33031){
return dcm.app.jackpot_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33031));
});})(action__19602__auto___33032))
;
var action__19602__auto___33039 = (function (params__19603__auto__){
if(cljs.core.map_QMARK_.call(null,params__19603__auto__)){
var map__33036 = params__19603__auto__;
var map__33036__$1 = ((((!((map__33036 == null)))?((((map__33036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33036):map__33036);
return dcm.app.set_html_BANG_.call(null,dcm.app.application,"<h1>LOL! YOU LOST!</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__19603__auto__)){
var vec__33038 = params__19603__auto__;
return dcm.app.set_html_BANG_.call(null,dcm.app.application,"<h1>LOL! YOU LOST!</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__19602__auto___33039);


//# sourceMappingURL=app.js.map