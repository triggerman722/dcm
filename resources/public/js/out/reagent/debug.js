// Compiled by ClojureScript 1.7.107 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__6187__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6188__i = 0, G__6188__a = new Array(arguments.length -  0);
while (G__6188__i < G__6188__a.length) {G__6188__a[G__6188__i] = arguments[G__6188__i + 0]; ++G__6188__i;}
  args = new cljs.core.IndexedSeq(G__6188__a,0);
} 
return G__6187__delegate.call(this,args);};
G__6187.cljs$lang$maxFixedArity = 0;
G__6187.cljs$lang$applyTo = (function (arglist__6189){
var args = cljs.core.seq(arglist__6189);
return G__6187__delegate(args);
});
G__6187.cljs$core$IFn$_invoke$arity$variadic = G__6187__delegate;
return G__6187;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6190__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6191__i = 0, G__6191__a = new Array(arguments.length -  0);
while (G__6191__i < G__6191__a.length) {G__6191__a[G__6191__i] = arguments[G__6191__i + 0]; ++G__6191__i;}
  args = new cljs.core.IndexedSeq(G__6191__a,0);
} 
return G__6190__delegate.call(this,args);};
G__6190.cljs$lang$maxFixedArity = 0;
G__6190.cljs$lang$applyTo = (function (arglist__6192){
var args = cljs.core.seq(arglist__6192);
return G__6190__delegate(args);
});
G__6190.cljs$core$IFn$_invoke$arity$variadic = G__6190__delegate;
return G__6190;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map