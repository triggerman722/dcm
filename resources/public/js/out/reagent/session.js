// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__17841__auto__ = [];
var len__17834__auto___20276 = arguments.length;
var i__17835__auto___20277 = (0);
while(true){
if((i__17835__auto___20277 < len__17834__auto___20276)){
args__17841__auto__.push((arguments[i__17835__auto___20277]));

var G__20278 = (i__17835__auto___20277 + (1));
i__17835__auto___20277 = G__20278;
continue;
} else {
}
break;
}

var argseq__17842__auto__ = ((((1) < args__17841__auto__.length))?(new cljs.core.IndexedSeq(args__17841__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17842__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__20274){
var vec__20275 = p__20274;
var default$ = cljs.core.nth.call(null,vec__20275,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq20272){
var G__20273 = cljs.core.first.call(null,seq20272);
var seq20272__$1 = cljs.core.next.call(null,seq20272);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__20273,seq20272__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__17841__auto__ = [];
var len__17834__auto___20283 = arguments.length;
var i__17835__auto___20284 = (0);
while(true){
if((i__17835__auto___20284 < len__17834__auto___20283)){
args__17841__auto__.push((arguments[i__17835__auto___20284]));

var G__20285 = (i__17835__auto___20284 + (1));
i__17835__auto___20284 = G__20285;
continue;
} else {
}
break;
}

var argseq__17842__auto__ = ((((1) < args__17841__auto__.length))?(new cljs.core.IndexedSeq(args__17841__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17842__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__20281){
var vec__20282 = p__20281;
var default$ = cljs.core.nth.call(null,vec__20282,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq20279){
var G__20280 = cljs.core.first.call(null,seq20279);
var seq20279__$1 = cljs.core.next.call(null,seq20279);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__20280,seq20279__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__17841__auto__ = [];
var len__17834__auto___20288 = arguments.length;
var i__17835__auto___20289 = (0);
while(true){
if((i__17835__auto___20289 < len__17834__auto___20288)){
args__17841__auto__.push((arguments[i__17835__auto___20289]));

var G__20290 = (i__17835__auto___20289 + (1));
i__17835__auto___20289 = G__20290;
continue;
} else {
}
break;
}

var argseq__17842__auto__ = ((((1) < args__17841__auto__.length))?(new cljs.core.IndexedSeq(args__17841__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17842__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq20286){
var G__20287 = cljs.core.first.call(null,seq20286);
var seq20286__$1 = cljs.core.next.call(null,seq20286);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20287,seq20286__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__20291_SHARP_){
return cljs.core.assoc_in.call(null,p1__20291_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__17841__auto__ = [];
var len__17834__auto___20296 = arguments.length;
var i__17835__auto___20297 = (0);
while(true){
if((i__17835__auto___20297 < len__17834__auto___20296)){
args__17841__auto__.push((arguments[i__17835__auto___20297]));

var G__20298 = (i__17835__auto___20297 + (1));
i__17835__auto___20297 = G__20298;
continue;
} else {
}
break;
}

var argseq__17842__auto__ = ((((1) < args__17841__auto__.length))?(new cljs.core.IndexedSeq(args__17841__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17842__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__20294){
var vec__20295 = p__20294;
var default$ = cljs.core.nth.call(null,vec__20295,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq20292){
var G__20293 = cljs.core.first.call(null,seq20292);
var seq20292__$1 = cljs.core.next.call(null,seq20292);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20293,seq20292__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__17841__auto__ = [];
var len__17834__auto___20303 = arguments.length;
var i__17835__auto___20304 = (0);
while(true){
if((i__17835__auto___20304 < len__17834__auto___20303)){
args__17841__auto__.push((arguments[i__17835__auto___20304]));

var G__20305 = (i__17835__auto___20304 + (1));
i__17835__auto___20304 = G__20305;
continue;
} else {
}
break;
}

var argseq__17842__auto__ = ((((1) < args__17841__auto__.length))?(new cljs.core.IndexedSeq(args__17841__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17842__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__20301){
var vec__20302 = p__20301;
var default$ = cljs.core.nth.call(null,vec__20302,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq20299){
var G__20300 = cljs.core.first.call(null,seq20299);
var seq20299__$1 = cljs.core.next.call(null,seq20299);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20300,seq20299__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__17841__auto__ = [];
var len__17834__auto___20310 = arguments.length;
var i__17835__auto___20311 = (0);
while(true){
if((i__17835__auto___20311 < len__17834__auto___20310)){
args__17841__auto__.push((arguments[i__17835__auto___20311]));

var G__20312 = (i__17835__auto___20311 + (1));
i__17835__auto___20311 = G__20312;
continue;
} else {
}
break;
}

var argseq__17842__auto__ = ((((2) < args__17841__auto__.length))?(new cljs.core.IndexedSeq(args__17841__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17842__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__20306_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__20306_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq20307){
var G__20308 = cljs.core.first.call(null,seq20307);
var seq20307__$1 = cljs.core.next.call(null,seq20307);
var G__20309 = cljs.core.first.call(null,seq20307__$1);
var seq20307__$2 = cljs.core.next.call(null,seq20307__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20308,G__20309,seq20307__$2);
});

//# sourceMappingURL=session.js.map