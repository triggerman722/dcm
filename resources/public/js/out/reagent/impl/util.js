// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = (function (){var G__9193 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9193) : cljs.core.atom.call(null,G__9193));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mem) : cljs.core.deref.call(null,mem)),arg);
if(!((v == null))){
return v;
} else {
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null,arg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__9195 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9195,(0),null);
var parts = cljs.core.nthnext(vec__9195,(1));
if(cljs.core.truth_((reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : reagent.impl.util.dont_camel_case.call(null,start)))){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__9197__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__4605__auto___9198 = self__.p;
if(cljs.core.truth_(or__4605__auto___9198)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__9197 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__9199__i = 0, G__9199__a = new Array(arguments.length -  1);
while (G__9199__i < G__9199__a.length) {G__9199__a[G__9199__i] = arguments[G__9199__i + 1]; ++G__9199__i;}
  a = new cljs.core.IndexedSeq(G__9199__a,0);
} 
return G__9197__delegate.call(this,self__,a);};
G__9197.cljs$lang$maxFixedArity = 1;
G__9197.cljs$lang$applyTo = (function (arglist__9200){
var self__ = cljs.core.first(arglist__9200);
var a = cljs.core.rest(arglist__9200);
return G__9197__delegate(self__,a);
});
G__9197.cljs$core$IFn$_invoke$arity$variadic = G__9197__delegate;
return G__9197;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args9196){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args9196)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9201__delegate = function (a){
var _ = this;
var or__4605__auto___9202 = self__.p;
if(cljs.core.truth_(or__4605__auto___9202)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__9201 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__9203__i = 0, G__9203__a = new Array(arguments.length -  0);
while (G__9203__i < G__9203__a.length) {G__9203__a[G__9203__i] = arguments[G__9203__i + 0]; ++G__9203__i;}
  a = new cljs.core.IndexedSeq(G__9203__a,0);
} 
return G__9201__delegate.call(this,a);};
G__9201.cljs$lang$maxFixedArity = 0;
G__9201.cljs$lang$applyTo = (function (arglist__9204){
var a = cljs.core.seq(arglist__9204);
return G__9201__delegate(a);
});
G__9201.cljs$core$IFn$_invoke$arity$variadic = G__9201__delegate;
return G__9201;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$args,cljs.core.with_meta(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write(writer__5204__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4657__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var c1 = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var c2 = temp__4657__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$class,class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4657__auto__ = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var s1 = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var s2 = temp__4657__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$style,style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$p1)], 0)))].join('')));
}

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = (function (){var G__9205 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9205) : cljs.core.atom.call(null,G__9205));
})();
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
var G__9207 = node;
if((G__9207 == null)){
return null;
} else {
return (G__9207["innerHTML"] = "");
}
});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
var rendered = cljs.core.volatile_BANG_(null);
try{var _STAR_always_update_STAR_9210 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return cljs.core.vreset_BANG_(rendered,(React["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_9210,rendered){
return (function (){
var _STAR_always_update_STAR_9211 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9211;
}});})(_STAR_always_update_STAR_9210,rendered))
));
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9210;
}}finally {if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rendered) : cljs.core.deref.call(null,rendered)))){
} else {
reagent.impl.util.clear_container(container);
}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__9216_9220 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.roots) : cljs.core.deref.call(null,reagent.impl.util.roots))));
var chunk__9217_9221 = null;
var count__9218_9222 = (0);
var i__9219_9223 = (0);
while(true){
if((i__9219_9223 < count__9218_9222)){
var v_9224 = chunk__9217_9221.cljs$core$IIndexed$_nth$arity$2(null,i__9219_9223);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_9224);

var G__9225 = seq__9216_9220;
var G__9226 = chunk__9217_9221;
var G__9227 = count__9218_9222;
var G__9228 = (i__9219_9223 + (1));
seq__9216_9220 = G__9225;
chunk__9217_9221 = G__9226;
count__9218_9222 = G__9227;
i__9219_9223 = G__9228;
continue;
} else {
var temp__4657__auto___9229 = cljs.core.seq(seq__9216_9220);
if(temp__4657__auto___9229){
var seq__9216_9230__$1 = temp__4657__auto___9229;
if(cljs.core.chunked_seq_QMARK_(seq__9216_9230__$1)){
var c__5408__auto___9231 = cljs.core.chunk_first(seq__9216_9230__$1);
var G__9232 = cljs.core.chunk_rest(seq__9216_9230__$1);
var G__9233 = c__5408__auto___9231;
var G__9234 = cljs.core.count(c__5408__auto___9231);
var G__9235 = (0);
seq__9216_9220 = G__9232;
chunk__9217_9221 = G__9233;
count__9218_9222 = G__9234;
i__9219_9223 = G__9235;
continue;
} else {
var v_9236 = cljs.core.first(seq__9216_9230__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_9236);

var G__9237 = cljs.core.next(seq__9216_9230__$1);
var G__9238 = null;
var G__9239 = (0);
var G__9240 = (0);
seq__9216_9220 = G__9237;
chunk__9217_9221 = G__9238;
count__9218_9222 = G__9239;
i__9219_9223 = G__9240;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_9242 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9242;
}} else {
return (comp["forceUpdate"])();
}
});
