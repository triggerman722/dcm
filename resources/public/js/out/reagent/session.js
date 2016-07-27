// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__5670__auto__ = [];
var len__5663__auto___9375 = arguments.length;
var i__5664__auto___9376 = (0);
while(true){
if((i__5664__auto___9376 < len__5663__auto___9375)){
args__5670__auto__.push((arguments[i__5664__auto___9376]));

var G__9377 = (i__5664__auto___9376 + (1));
i__5664__auto___9376 = G__9377;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__9373){
var vec__9374 = p__9373;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9374,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq9371){
var G__9372 = cljs.core.first(seq9371);
var seq9371__$1 = cljs.core.next(seq9371);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__9372,seq9371__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__5670__auto__ = [];
var len__5663__auto___9382 = arguments.length;
var i__5664__auto___9383 = (0);
while(true){
if((i__5664__auto___9383 < len__5663__auto___9382)){
args__5670__auto__.push((arguments[i__5664__auto___9383]));

var G__9384 = (i__5664__auto___9383 + (1));
i__5664__auto___9383 = G__9384;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__9380){
var vec__9381 = p__9380;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9381,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq9378){
var G__9379 = cljs.core.first(seq9378);
var seq9378__$1 = cljs.core.next(seq9378);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__9379,seq9378__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___9387 = arguments.length;
var i__5664__auto___9388 = (0);
while(true){
if((i__5664__auto___9388 < len__5663__auto___9387)){
args__5670__auto__.push((arguments[i__5664__auto___9388]));

var G__9389 = (i__5664__auto___9388 + (1));
i__5664__auto___9388 = G__9389;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq9385){
var G__9386 = cljs.core.first(seq9385);
var seq9385__$1 = cljs.core.next(seq9385);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9386,seq9385__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__9392 = reagent.session.state;
var G__9393 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9392,G__9393) : cljs.core.reset_BANG_.call(null,G__9392,G__9393));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__9394_SHARP_){
return cljs.core.assoc_in(p1__9394_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___9399 = arguments.length;
var i__5664__auto___9400 = (0);
while(true){
if((i__5664__auto___9400 < len__5663__auto___9399)){
args__5670__auto__.push((arguments[i__5664__auto___9400]));

var G__9401 = (i__5664__auto___9400 + (1));
i__5664__auto___9400 = G__9401;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__9397){
var vec__9398 = p__9397;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9398,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq9395){
var G__9396 = cljs.core.first(seq9395);
var seq9395__$1 = cljs.core.next(seq9395);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9396,seq9395__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___9406 = arguments.length;
var i__5664__auto___9407 = (0);
while(true){
if((i__5664__auto___9407 < len__5663__auto___9406)){
args__5670__auto__.push((arguments[i__5664__auto___9407]));

var G__9408 = (i__5664__auto___9407 + (1));
i__5664__auto___9407 = G__9408;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__9404){
var vec__9405 = p__9404;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9405,(0),null);
var cur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),ks,default$);
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq9402){
var G__9403 = cljs.core.first(seq9402);
var seq9402__$1 = cljs.core.next(seq9402);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9403,seq9402__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___9413 = arguments.length;
var i__5664__auto___9414 = (0);
while(true){
if((i__5664__auto___9414 < len__5663__auto___9413)){
args__5670__auto__.push((arguments[i__5664__auto___9414]));

var G__9415 = (i__5664__auto___9414 + (1));
i__5664__auto___9414 = G__9415;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((2) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5671__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__9409_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__9409_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq9410){
var G__9411 = cljs.core.first(seq9410);
var seq9410__$1 = cljs.core.next(seq9410);
var G__9412 = cljs.core.first(seq9410__$1);
var seq9410__$2 = cljs.core.next(seq9410__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9411,G__9412,seq9410__$2);
});
