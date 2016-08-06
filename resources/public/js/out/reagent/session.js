// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25739 = arguments.length;
var i__17834__auto___25740 = (0);
while(true){
if((i__17834__auto___25740 < len__17833__auto___25739)){
args__17840__auto__.push((arguments[i__17834__auto___25740]));

var G__25741 = (i__17834__auto___25740 + (1));
i__17834__auto___25740 = G__25741;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__25737){
var vec__25738 = p__25737;
var default$ = cljs.core.nth.call(null,vec__25738,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq25735){
var G__25736 = cljs.core.first.call(null,seq25735);
var seq25735__$1 = cljs.core.next.call(null,seq25735);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__25736,seq25735__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25746 = arguments.length;
var i__17834__auto___25747 = (0);
while(true){
if((i__17834__auto___25747 < len__17833__auto___25746)){
args__17840__auto__.push((arguments[i__17834__auto___25747]));

var G__25748 = (i__17834__auto___25747 + (1));
i__17834__auto___25747 = G__25748;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__25744){
var vec__25745 = p__25744;
var default$ = cljs.core.nth.call(null,vec__25745,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq25742){
var G__25743 = cljs.core.first.call(null,seq25742);
var seq25742__$1 = cljs.core.next.call(null,seq25742);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__25743,seq25742__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25751 = arguments.length;
var i__17834__auto___25752 = (0);
while(true){
if((i__17834__auto___25752 < len__17833__auto___25751)){
args__17840__auto__.push((arguments[i__17834__auto___25752]));

var G__25753 = (i__17834__auto___25752 + (1));
i__17834__auto___25752 = G__25753;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq25749){
var G__25750 = cljs.core.first.call(null,seq25749);
var seq25749__$1 = cljs.core.next.call(null,seq25749);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25750,seq25749__$1);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__25754_SHARP_){
return cljs.core.assoc_in.call(null,p1__25754_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25759 = arguments.length;
var i__17834__auto___25760 = (0);
while(true){
if((i__17834__auto___25760 < len__17833__auto___25759)){
args__17840__auto__.push((arguments[i__17834__auto___25760]));

var G__25761 = (i__17834__auto___25760 + (1));
i__17834__auto___25760 = G__25761;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__25757){
var vec__25758 = p__25757;
var default$ = cljs.core.nth.call(null,vec__25758,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq25755){
var G__25756 = cljs.core.first.call(null,seq25755);
var seq25755__$1 = cljs.core.next.call(null,seq25755);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25756,seq25755__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25766 = arguments.length;
var i__17834__auto___25767 = (0);
while(true){
if((i__17834__auto___25767 < len__17833__auto___25766)){
args__17840__auto__.push((arguments[i__17834__auto___25767]));

var G__25768 = (i__17834__auto___25767 + (1));
i__17834__auto___25767 = G__25768;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__25764){
var vec__25765 = p__25764;
var default$ = cljs.core.nth.call(null,vec__25765,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq25762){
var G__25763 = cljs.core.first.call(null,seq25762);
var seq25762__$1 = cljs.core.next.call(null,seq25762);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25763,seq25762__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25773 = arguments.length;
var i__17834__auto___25774 = (0);
while(true){
if((i__17834__auto___25774 < len__17833__auto___25773)){
args__17840__auto__.push((arguments[i__17834__auto___25774]));

var G__25775 = (i__17834__auto___25774 + (1));
i__17834__auto___25774 = G__25775;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((2) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17841__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__25769_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__25769_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq25770){
var G__25771 = cljs.core.first.call(null,seq25770);
var seq25770__$1 = cljs.core.next.call(null,seq25770);
var G__25772 = cljs.core.first.call(null,seq25770__$1);
var seq25770__$2 = cljs.core.next.call(null,seq25770__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25771,G__25772,seq25770__$2);
});

//# sourceMappingURL=session.js.map