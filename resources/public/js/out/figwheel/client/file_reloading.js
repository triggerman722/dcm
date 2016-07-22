// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16775__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16775__auto__){
return or__16775__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16775__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27279_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27279_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27284 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27285 = null;
var count__27286 = (0);
var i__27287 = (0);
while(true){
if((i__27287 < count__27286)){
var n = cljs.core._nth.call(null,chunk__27285,i__27287);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27288 = seq__27284;
var G__27289 = chunk__27285;
var G__27290 = count__27286;
var G__27291 = (i__27287 + (1));
seq__27284 = G__27288;
chunk__27285 = G__27289;
count__27286 = G__27290;
i__27287 = G__27291;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27284);
if(temp__4657__auto__){
var seq__27284__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27284__$1)){
var c__17578__auto__ = cljs.core.chunk_first.call(null,seq__27284__$1);
var G__27292 = cljs.core.chunk_rest.call(null,seq__27284__$1);
var G__27293 = c__17578__auto__;
var G__27294 = cljs.core.count.call(null,c__17578__auto__);
var G__27295 = (0);
seq__27284 = G__27292;
chunk__27285 = G__27293;
count__27286 = G__27294;
i__27287 = G__27295;
continue;
} else {
var n = cljs.core.first.call(null,seq__27284__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27296 = cljs.core.next.call(null,seq__27284__$1);
var G__27297 = null;
var G__27298 = (0);
var G__27299 = (0);
seq__27284 = G__27296;
chunk__27285 = G__27297;
count__27286 = G__27298;
i__27287 = G__27299;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27338_27345 = cljs.core.seq.call(null,deps);
var chunk__27339_27346 = null;
var count__27340_27347 = (0);
var i__27341_27348 = (0);
while(true){
if((i__27341_27348 < count__27340_27347)){
var dep_27349 = cljs.core._nth.call(null,chunk__27339_27346,i__27341_27348);
topo_sort_helper_STAR_.call(null,dep_27349,(depth + (1)),state);

var G__27350 = seq__27338_27345;
var G__27351 = chunk__27339_27346;
var G__27352 = count__27340_27347;
var G__27353 = (i__27341_27348 + (1));
seq__27338_27345 = G__27350;
chunk__27339_27346 = G__27351;
count__27340_27347 = G__27352;
i__27341_27348 = G__27353;
continue;
} else {
var temp__4657__auto___27354 = cljs.core.seq.call(null,seq__27338_27345);
if(temp__4657__auto___27354){
var seq__27338_27355__$1 = temp__4657__auto___27354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27338_27355__$1)){
var c__17578__auto___27356 = cljs.core.chunk_first.call(null,seq__27338_27355__$1);
var G__27357 = cljs.core.chunk_rest.call(null,seq__27338_27355__$1);
var G__27358 = c__17578__auto___27356;
var G__27359 = cljs.core.count.call(null,c__17578__auto___27356);
var G__27360 = (0);
seq__27338_27345 = G__27357;
chunk__27339_27346 = G__27358;
count__27340_27347 = G__27359;
i__27341_27348 = G__27360;
continue;
} else {
var dep_27361 = cljs.core.first.call(null,seq__27338_27355__$1);
topo_sort_helper_STAR_.call(null,dep_27361,(depth + (1)),state);

var G__27362 = cljs.core.next.call(null,seq__27338_27355__$1);
var G__27363 = null;
var G__27364 = (0);
var G__27365 = (0);
seq__27338_27345 = G__27362;
chunk__27339_27346 = G__27363;
count__27340_27347 = G__27364;
i__27341_27348 = G__27365;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27342){
var vec__27344 = p__27342;
var x = cljs.core.nth.call(null,vec__27344,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27344,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27344,x,xs,get_deps__$1){
return (function (p1__27300_SHARP_){
return clojure.set.difference.call(null,p1__27300_SHARP_,x);
});})(vec__27344,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27378 = cljs.core.seq.call(null,provides);
var chunk__27379 = null;
var count__27380 = (0);
var i__27381 = (0);
while(true){
if((i__27381 < count__27380)){
var prov = cljs.core._nth.call(null,chunk__27379,i__27381);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27382_27390 = cljs.core.seq.call(null,requires);
var chunk__27383_27391 = null;
var count__27384_27392 = (0);
var i__27385_27393 = (0);
while(true){
if((i__27385_27393 < count__27384_27392)){
var req_27394 = cljs.core._nth.call(null,chunk__27383_27391,i__27385_27393);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27394,prov);

var G__27395 = seq__27382_27390;
var G__27396 = chunk__27383_27391;
var G__27397 = count__27384_27392;
var G__27398 = (i__27385_27393 + (1));
seq__27382_27390 = G__27395;
chunk__27383_27391 = G__27396;
count__27384_27392 = G__27397;
i__27385_27393 = G__27398;
continue;
} else {
var temp__4657__auto___27399 = cljs.core.seq.call(null,seq__27382_27390);
if(temp__4657__auto___27399){
var seq__27382_27400__$1 = temp__4657__auto___27399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27382_27400__$1)){
var c__17578__auto___27401 = cljs.core.chunk_first.call(null,seq__27382_27400__$1);
var G__27402 = cljs.core.chunk_rest.call(null,seq__27382_27400__$1);
var G__27403 = c__17578__auto___27401;
var G__27404 = cljs.core.count.call(null,c__17578__auto___27401);
var G__27405 = (0);
seq__27382_27390 = G__27402;
chunk__27383_27391 = G__27403;
count__27384_27392 = G__27404;
i__27385_27393 = G__27405;
continue;
} else {
var req_27406 = cljs.core.first.call(null,seq__27382_27400__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27406,prov);

var G__27407 = cljs.core.next.call(null,seq__27382_27400__$1);
var G__27408 = null;
var G__27409 = (0);
var G__27410 = (0);
seq__27382_27390 = G__27407;
chunk__27383_27391 = G__27408;
count__27384_27392 = G__27409;
i__27385_27393 = G__27410;
continue;
}
} else {
}
}
break;
}

var G__27411 = seq__27378;
var G__27412 = chunk__27379;
var G__27413 = count__27380;
var G__27414 = (i__27381 + (1));
seq__27378 = G__27411;
chunk__27379 = G__27412;
count__27380 = G__27413;
i__27381 = G__27414;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27378);
if(temp__4657__auto__){
var seq__27378__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27378__$1)){
var c__17578__auto__ = cljs.core.chunk_first.call(null,seq__27378__$1);
var G__27415 = cljs.core.chunk_rest.call(null,seq__27378__$1);
var G__27416 = c__17578__auto__;
var G__27417 = cljs.core.count.call(null,c__17578__auto__);
var G__27418 = (0);
seq__27378 = G__27415;
chunk__27379 = G__27416;
count__27380 = G__27417;
i__27381 = G__27418;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27378__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27386_27419 = cljs.core.seq.call(null,requires);
var chunk__27387_27420 = null;
var count__27388_27421 = (0);
var i__27389_27422 = (0);
while(true){
if((i__27389_27422 < count__27388_27421)){
var req_27423 = cljs.core._nth.call(null,chunk__27387_27420,i__27389_27422);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27423,prov);

var G__27424 = seq__27386_27419;
var G__27425 = chunk__27387_27420;
var G__27426 = count__27388_27421;
var G__27427 = (i__27389_27422 + (1));
seq__27386_27419 = G__27424;
chunk__27387_27420 = G__27425;
count__27388_27421 = G__27426;
i__27389_27422 = G__27427;
continue;
} else {
var temp__4657__auto___27428__$1 = cljs.core.seq.call(null,seq__27386_27419);
if(temp__4657__auto___27428__$1){
var seq__27386_27429__$1 = temp__4657__auto___27428__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27386_27429__$1)){
var c__17578__auto___27430 = cljs.core.chunk_first.call(null,seq__27386_27429__$1);
var G__27431 = cljs.core.chunk_rest.call(null,seq__27386_27429__$1);
var G__27432 = c__17578__auto___27430;
var G__27433 = cljs.core.count.call(null,c__17578__auto___27430);
var G__27434 = (0);
seq__27386_27419 = G__27431;
chunk__27387_27420 = G__27432;
count__27388_27421 = G__27433;
i__27389_27422 = G__27434;
continue;
} else {
var req_27435 = cljs.core.first.call(null,seq__27386_27429__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27435,prov);

var G__27436 = cljs.core.next.call(null,seq__27386_27429__$1);
var G__27437 = null;
var G__27438 = (0);
var G__27439 = (0);
seq__27386_27419 = G__27436;
chunk__27387_27420 = G__27437;
count__27388_27421 = G__27438;
i__27389_27422 = G__27439;
continue;
}
} else {
}
}
break;
}

var G__27440 = cljs.core.next.call(null,seq__27378__$1);
var G__27441 = null;
var G__27442 = (0);
var G__27443 = (0);
seq__27378 = G__27440;
chunk__27379 = G__27441;
count__27380 = G__27442;
i__27381 = G__27443;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27448_27452 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27449_27453 = null;
var count__27450_27454 = (0);
var i__27451_27455 = (0);
while(true){
if((i__27451_27455 < count__27450_27454)){
var ns_27456 = cljs.core._nth.call(null,chunk__27449_27453,i__27451_27455);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27456);

var G__27457 = seq__27448_27452;
var G__27458 = chunk__27449_27453;
var G__27459 = count__27450_27454;
var G__27460 = (i__27451_27455 + (1));
seq__27448_27452 = G__27457;
chunk__27449_27453 = G__27458;
count__27450_27454 = G__27459;
i__27451_27455 = G__27460;
continue;
} else {
var temp__4657__auto___27461 = cljs.core.seq.call(null,seq__27448_27452);
if(temp__4657__auto___27461){
var seq__27448_27462__$1 = temp__4657__auto___27461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27448_27462__$1)){
var c__17578__auto___27463 = cljs.core.chunk_first.call(null,seq__27448_27462__$1);
var G__27464 = cljs.core.chunk_rest.call(null,seq__27448_27462__$1);
var G__27465 = c__17578__auto___27463;
var G__27466 = cljs.core.count.call(null,c__17578__auto___27463);
var G__27467 = (0);
seq__27448_27452 = G__27464;
chunk__27449_27453 = G__27465;
count__27450_27454 = G__27466;
i__27451_27455 = G__27467;
continue;
} else {
var ns_27468 = cljs.core.first.call(null,seq__27448_27462__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27468);

var G__27469 = cljs.core.next.call(null,seq__27448_27462__$1);
var G__27470 = null;
var G__27471 = (0);
var G__27472 = (0);
seq__27448_27452 = G__27469;
chunk__27449_27453 = G__27470;
count__27450_27454 = G__27471;
i__27451_27455 = G__27472;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16775__auto__ = goog.require__;
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27473__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27474__i = 0, G__27474__a = new Array(arguments.length -  0);
while (G__27474__i < G__27474__a.length) {G__27474__a[G__27474__i] = arguments[G__27474__i + 0]; ++G__27474__i;}
  args = new cljs.core.IndexedSeq(G__27474__a,0);
} 
return G__27473__delegate.call(this,args);};
G__27473.cljs$lang$maxFixedArity = 0;
G__27473.cljs$lang$applyTo = (function (arglist__27475){
var args = cljs.core.seq(arglist__27475);
return G__27473__delegate(args);
});
G__27473.cljs$core$IFn$_invoke$arity$variadic = G__27473__delegate;
return G__27473;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27477 = cljs.core._EQ_;
var expr__27478 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27477.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27478))){
var path_parts = ((function (pred__27477,expr__27478){
return (function (p1__27476_SHARP_){
return clojure.string.split.call(null,p1__27476_SHARP_,/[\/\\]/);
});})(pred__27477,expr__27478))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27477,expr__27478){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e27480){if((e27480 instanceof Error)){
var e = e27480;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27480;

}
}})());
});
;})(path_parts,sep,root,pred__27477,expr__27478))
} else {
if(cljs.core.truth_(pred__27477.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27478))){
return ((function (pred__27477,expr__27478){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27477,expr__27478){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27477,expr__27478))
);

return deferred.addErrback(((function (deferred,pred__27477,expr__27478){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27477,expr__27478))
);
});
;})(pred__27477,expr__27478))
} else {
return ((function (pred__27477,expr__27478){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27477,expr__27478))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27481,callback){
var map__27484 = p__27481;
var map__27484__$1 = ((((!((map__27484 == null)))?((((map__27484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27484):map__27484);
var file_msg = map__27484__$1;
var request_url = cljs.core.get.call(null,map__27484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27484,map__27484__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27484,map__27484__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__){
return (function (state_27508){
var state_val_27509 = (state_27508[(1)]);
if((state_val_27509 === (7))){
var inst_27504 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27510_27530 = state_27508__$1;
(statearr_27510_27530[(2)] = inst_27504);

(statearr_27510_27530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (1))){
var state_27508__$1 = state_27508;
var statearr_27511_27531 = state_27508__$1;
(statearr_27511_27531[(2)] = null);

(statearr_27511_27531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (4))){
var inst_27488 = (state_27508[(7)]);
var inst_27488__$1 = (state_27508[(2)]);
var state_27508__$1 = (function (){var statearr_27512 = state_27508;
(statearr_27512[(7)] = inst_27488__$1);

return statearr_27512;
})();
if(cljs.core.truth_(inst_27488__$1)){
var statearr_27513_27532 = state_27508__$1;
(statearr_27513_27532[(1)] = (5));

} else {
var statearr_27514_27533 = state_27508__$1;
(statearr_27514_27533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (6))){
var state_27508__$1 = state_27508;
var statearr_27515_27534 = state_27508__$1;
(statearr_27515_27534[(2)] = null);

(statearr_27515_27534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (3))){
var inst_27506 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27508__$1,inst_27506);
} else {
if((state_val_27509 === (2))){
var state_27508__$1 = state_27508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27508__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27509 === (11))){
var inst_27500 = (state_27508[(2)]);
var state_27508__$1 = (function (){var statearr_27516 = state_27508;
(statearr_27516[(8)] = inst_27500);

return statearr_27516;
})();
var statearr_27517_27535 = state_27508__$1;
(statearr_27517_27535[(2)] = null);

(statearr_27517_27535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (9))){
var inst_27492 = (state_27508[(9)]);
var inst_27494 = (state_27508[(10)]);
var inst_27496 = inst_27494.call(null,inst_27492);
var state_27508__$1 = state_27508;
var statearr_27518_27536 = state_27508__$1;
(statearr_27518_27536[(2)] = inst_27496);

(statearr_27518_27536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (5))){
var inst_27488 = (state_27508[(7)]);
var inst_27490 = figwheel.client.file_reloading.blocking_load.call(null,inst_27488);
var state_27508__$1 = state_27508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27508__$1,(8),inst_27490);
} else {
if((state_val_27509 === (10))){
var inst_27492 = (state_27508[(9)]);
var inst_27498 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27492);
var state_27508__$1 = state_27508;
var statearr_27519_27537 = state_27508__$1;
(statearr_27519_27537[(2)] = inst_27498);

(statearr_27519_27537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (8))){
var inst_27488 = (state_27508[(7)]);
var inst_27494 = (state_27508[(10)]);
var inst_27492 = (state_27508[(2)]);
var inst_27493 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27494__$1 = cljs.core.get.call(null,inst_27493,inst_27488);
var state_27508__$1 = (function (){var statearr_27520 = state_27508;
(statearr_27520[(9)] = inst_27492);

(statearr_27520[(10)] = inst_27494__$1);

return statearr_27520;
})();
if(cljs.core.truth_(inst_27494__$1)){
var statearr_27521_27538 = state_27508__$1;
(statearr_27521_27538[(1)] = (9));

} else {
var statearr_27522_27539 = state_27508__$1;
(statearr_27522_27539[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20669__auto__))
;
return ((function (switch__20604__auto__,c__20669__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20605__auto__ = null;
var figwheel$client$file_reloading$state_machine__20605__auto____0 = (function (){
var statearr_27526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27526[(0)] = figwheel$client$file_reloading$state_machine__20605__auto__);

(statearr_27526[(1)] = (1));

return statearr_27526;
});
var figwheel$client$file_reloading$state_machine__20605__auto____1 = (function (state_27508){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_27508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e27527){if((e27527 instanceof Object)){
var ex__20608__auto__ = e27527;
var statearr_27528_27540 = state_27508;
(statearr_27528_27540[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27541 = state_27508;
state_27508 = G__27541;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20605__auto__ = function(state_27508){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20605__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20605__auto____1.call(this,state_27508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20605__auto____0;
figwheel$client$file_reloading$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20605__auto____1;
return figwheel$client$file_reloading$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__))
})();
var state__20671__auto__ = (function (){var statearr_27529 = f__20670__auto__.call(null);
(statearr_27529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_27529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__))
);

return c__20669__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27542,callback){
var map__27545 = p__27542;
var map__27545__$1 = ((((!((map__27545 == null)))?((((map__27545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27545):map__27545);
var file_msg = map__27545__$1;
var namespace = cljs.core.get.call(null,map__27545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27545,map__27545__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27545,map__27545__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27547){
var map__27550 = p__27547;
var map__27550__$1 = ((((!((map__27550 == null)))?((((map__27550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27550):map__27550);
var file_msg = map__27550__$1;
var namespace = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16763__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16763__auto__){
var or__16775__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
var or__16775__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16775__auto____$1)){
return or__16775__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16763__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27552,callback){
var map__27555 = p__27552;
var map__27555__$1 = ((((!((map__27555 == null)))?((((map__27555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27555):map__27555);
var file_msg = map__27555__$1;
var request_url = cljs.core.get.call(null,map__27555__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20669__auto___27643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___27643,out){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___27643,out){
return (function (state_27625){
var state_val_27626 = (state_27625[(1)]);
if((state_val_27626 === (1))){
var inst_27603 = cljs.core.nth.call(null,files,(0),null);
var inst_27604 = cljs.core.nthnext.call(null,files,(1));
var inst_27605 = files;
var state_27625__$1 = (function (){var statearr_27627 = state_27625;
(statearr_27627[(7)] = inst_27603);

(statearr_27627[(8)] = inst_27605);

(statearr_27627[(9)] = inst_27604);

return statearr_27627;
})();
var statearr_27628_27644 = state_27625__$1;
(statearr_27628_27644[(2)] = null);

(statearr_27628_27644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (2))){
var inst_27608 = (state_27625[(10)]);
var inst_27605 = (state_27625[(8)]);
var inst_27608__$1 = cljs.core.nth.call(null,inst_27605,(0),null);
var inst_27609 = cljs.core.nthnext.call(null,inst_27605,(1));
var inst_27610 = (inst_27608__$1 == null);
var inst_27611 = cljs.core.not.call(null,inst_27610);
var state_27625__$1 = (function (){var statearr_27629 = state_27625;
(statearr_27629[(10)] = inst_27608__$1);

(statearr_27629[(11)] = inst_27609);

return statearr_27629;
})();
if(inst_27611){
var statearr_27630_27645 = state_27625__$1;
(statearr_27630_27645[(1)] = (4));

} else {
var statearr_27631_27646 = state_27625__$1;
(statearr_27631_27646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (3))){
var inst_27623 = (state_27625[(2)]);
var state_27625__$1 = state_27625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27625__$1,inst_27623);
} else {
if((state_val_27626 === (4))){
var inst_27608 = (state_27625[(10)]);
var inst_27613 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27608);
var state_27625__$1 = state_27625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27625__$1,(7),inst_27613);
} else {
if((state_val_27626 === (5))){
var inst_27619 = cljs.core.async.close_BANG_.call(null,out);
var state_27625__$1 = state_27625;
var statearr_27632_27647 = state_27625__$1;
(statearr_27632_27647[(2)] = inst_27619);

(statearr_27632_27647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (6))){
var inst_27621 = (state_27625[(2)]);
var state_27625__$1 = state_27625;
var statearr_27633_27648 = state_27625__$1;
(statearr_27633_27648[(2)] = inst_27621);

(statearr_27633_27648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (7))){
var inst_27609 = (state_27625[(11)]);
var inst_27615 = (state_27625[(2)]);
var inst_27616 = cljs.core.async.put_BANG_.call(null,out,inst_27615);
var inst_27605 = inst_27609;
var state_27625__$1 = (function (){var statearr_27634 = state_27625;
(statearr_27634[(8)] = inst_27605);

(statearr_27634[(12)] = inst_27616);

return statearr_27634;
})();
var statearr_27635_27649 = state_27625__$1;
(statearr_27635_27649[(2)] = null);

(statearr_27635_27649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20669__auto___27643,out))
;
return ((function (switch__20604__auto__,c__20669__auto___27643,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto____0 = (function (){
var statearr_27639 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27639[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto__);

(statearr_27639[(1)] = (1));

return statearr_27639;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto____1 = (function (state_27625){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_27625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e27640){if((e27640 instanceof Object)){
var ex__20608__auto__ = e27640;
var statearr_27641_27650 = state_27625;
(statearr_27641_27650[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27651 = state_27625;
state_27625 = G__27651;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto__ = function(state_27625){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto____1.call(this,state_27625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___27643,out))
})();
var state__20671__auto__ = (function (){var statearr_27642 = f__20670__auto__.call(null);
(statearr_27642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___27643);

return statearr_27642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___27643,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27652,opts){
var map__27656 = p__27652;
var map__27656__$1 = ((((!((map__27656 == null)))?((((map__27656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27656):map__27656);
var eval_body__$1 = cljs.core.get.call(null,map__27656__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16763__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16763__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16763__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27658){var e = e27658;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27659_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27659_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27664){
var vec__27665 = p__27664;
var k = cljs.core.nth.call(null,vec__27665,(0),null);
var v = cljs.core.nth.call(null,vec__27665,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27666){
var vec__27667 = p__27666;
var k = cljs.core.nth.call(null,vec__27667,(0),null);
var v = cljs.core.nth.call(null,vec__27667,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27671,p__27672){
var map__27919 = p__27671;
var map__27919__$1 = ((((!((map__27919 == null)))?((((map__27919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27919):map__27919);
var opts = map__27919__$1;
var before_jsload = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27920 = p__27672;
var map__27920__$1 = ((((!((map__27920 == null)))?((((map__27920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27920):map__27920);
var msg = map__27920__$1;
var files = cljs.core.get.call(null,map__27920__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27920__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27920__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28073){
var state_val_28074 = (state_28073[(1)]);
if((state_val_28074 === (7))){
var inst_27934 = (state_28073[(7)]);
var inst_27937 = (state_28073[(8)]);
var inst_27935 = (state_28073[(9)]);
var inst_27936 = (state_28073[(10)]);
var inst_27942 = cljs.core._nth.call(null,inst_27935,inst_27937);
var inst_27943 = figwheel.client.file_reloading.eval_body.call(null,inst_27942,opts);
var inst_27944 = (inst_27937 + (1));
var tmp28075 = inst_27934;
var tmp28076 = inst_27935;
var tmp28077 = inst_27936;
var inst_27934__$1 = tmp28075;
var inst_27935__$1 = tmp28076;
var inst_27936__$1 = tmp28077;
var inst_27937__$1 = inst_27944;
var state_28073__$1 = (function (){var statearr_28078 = state_28073;
(statearr_28078[(11)] = inst_27943);

(statearr_28078[(7)] = inst_27934__$1);

(statearr_28078[(8)] = inst_27937__$1);

(statearr_28078[(9)] = inst_27935__$1);

(statearr_28078[(10)] = inst_27936__$1);

return statearr_28078;
})();
var statearr_28079_28165 = state_28073__$1;
(statearr_28079_28165[(2)] = null);

(statearr_28079_28165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (20))){
var inst_27977 = (state_28073[(12)]);
var inst_27985 = figwheel.client.file_reloading.sort_files.call(null,inst_27977);
var state_28073__$1 = state_28073;
var statearr_28080_28166 = state_28073__$1;
(statearr_28080_28166[(2)] = inst_27985);

(statearr_28080_28166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (27))){
var state_28073__$1 = state_28073;
var statearr_28081_28167 = state_28073__$1;
(statearr_28081_28167[(2)] = null);

(statearr_28081_28167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (1))){
var inst_27926 = (state_28073[(13)]);
var inst_27923 = before_jsload.call(null,files);
var inst_27924 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27925 = (function (){return ((function (inst_27926,inst_27923,inst_27924,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27668_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27668_SHARP_);
});
;})(inst_27926,inst_27923,inst_27924,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27926__$1 = cljs.core.filter.call(null,inst_27925,files);
var inst_27927 = cljs.core.not_empty.call(null,inst_27926__$1);
var state_28073__$1 = (function (){var statearr_28082 = state_28073;
(statearr_28082[(14)] = inst_27923);

(statearr_28082[(15)] = inst_27924);

(statearr_28082[(13)] = inst_27926__$1);

return statearr_28082;
})();
if(cljs.core.truth_(inst_27927)){
var statearr_28083_28168 = state_28073__$1;
(statearr_28083_28168[(1)] = (2));

} else {
var statearr_28084_28169 = state_28073__$1;
(statearr_28084_28169[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (24))){
var state_28073__$1 = state_28073;
var statearr_28085_28170 = state_28073__$1;
(statearr_28085_28170[(2)] = null);

(statearr_28085_28170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (39))){
var inst_28027 = (state_28073[(16)]);
var state_28073__$1 = state_28073;
var statearr_28086_28171 = state_28073__$1;
(statearr_28086_28171[(2)] = inst_28027);

(statearr_28086_28171[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (46))){
var inst_28068 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
var statearr_28087_28172 = state_28073__$1;
(statearr_28087_28172[(2)] = inst_28068);

(statearr_28087_28172[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (4))){
var inst_27971 = (state_28073[(2)]);
var inst_27972 = cljs.core.List.EMPTY;
var inst_27973 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27972);
var inst_27974 = (function (){return ((function (inst_27971,inst_27972,inst_27973,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27669_SHARP_){
var and__16763__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27669_SHARP_);
if(cljs.core.truth_(and__16763__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27669_SHARP_));
} else {
return and__16763__auto__;
}
});
;})(inst_27971,inst_27972,inst_27973,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27975 = cljs.core.filter.call(null,inst_27974,files);
var inst_27976 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27977 = cljs.core.concat.call(null,inst_27975,inst_27976);
var state_28073__$1 = (function (){var statearr_28088 = state_28073;
(statearr_28088[(17)] = inst_27973);

(statearr_28088[(18)] = inst_27971);

(statearr_28088[(12)] = inst_27977);

return statearr_28088;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28089_28173 = state_28073__$1;
(statearr_28089_28173[(1)] = (16));

} else {
var statearr_28090_28174 = state_28073__$1;
(statearr_28090_28174[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (15))){
var inst_27961 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
var statearr_28091_28175 = state_28073__$1;
(statearr_28091_28175[(2)] = inst_27961);

(statearr_28091_28175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (21))){
var inst_27987 = (state_28073[(19)]);
var inst_27987__$1 = (state_28073[(2)]);
var inst_27988 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27987__$1);
var state_28073__$1 = (function (){var statearr_28092 = state_28073;
(statearr_28092[(19)] = inst_27987__$1);

return statearr_28092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28073__$1,(22),inst_27988);
} else {
if((state_val_28074 === (31))){
var inst_28071 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28073__$1,inst_28071);
} else {
if((state_val_28074 === (32))){
var inst_28027 = (state_28073[(16)]);
var inst_28032 = inst_28027.cljs$lang$protocol_mask$partition0$;
var inst_28033 = (inst_28032 & (64));
var inst_28034 = inst_28027.cljs$core$ISeq$;
var inst_28035 = (inst_28033) || (inst_28034);
var state_28073__$1 = state_28073;
if(cljs.core.truth_(inst_28035)){
var statearr_28093_28176 = state_28073__$1;
(statearr_28093_28176[(1)] = (35));

} else {
var statearr_28094_28177 = state_28073__$1;
(statearr_28094_28177[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (40))){
var inst_28048 = (state_28073[(20)]);
var inst_28047 = (state_28073[(2)]);
var inst_28048__$1 = cljs.core.get.call(null,inst_28047,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28049 = cljs.core.get.call(null,inst_28047,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28050 = cljs.core.not_empty.call(null,inst_28048__$1);
var state_28073__$1 = (function (){var statearr_28095 = state_28073;
(statearr_28095[(20)] = inst_28048__$1);

(statearr_28095[(21)] = inst_28049);

return statearr_28095;
})();
if(cljs.core.truth_(inst_28050)){
var statearr_28096_28178 = state_28073__$1;
(statearr_28096_28178[(1)] = (41));

} else {
var statearr_28097_28179 = state_28073__$1;
(statearr_28097_28179[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (33))){
var state_28073__$1 = state_28073;
var statearr_28098_28180 = state_28073__$1;
(statearr_28098_28180[(2)] = false);

(statearr_28098_28180[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (13))){
var inst_27947 = (state_28073[(22)]);
var inst_27951 = cljs.core.chunk_first.call(null,inst_27947);
var inst_27952 = cljs.core.chunk_rest.call(null,inst_27947);
var inst_27953 = cljs.core.count.call(null,inst_27951);
var inst_27934 = inst_27952;
var inst_27935 = inst_27951;
var inst_27936 = inst_27953;
var inst_27937 = (0);
var state_28073__$1 = (function (){var statearr_28099 = state_28073;
(statearr_28099[(7)] = inst_27934);

(statearr_28099[(8)] = inst_27937);

(statearr_28099[(9)] = inst_27935);

(statearr_28099[(10)] = inst_27936);

return statearr_28099;
})();
var statearr_28100_28181 = state_28073__$1;
(statearr_28100_28181[(2)] = null);

(statearr_28100_28181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (22))){
var inst_27987 = (state_28073[(19)]);
var inst_27995 = (state_28073[(23)]);
var inst_27991 = (state_28073[(24)]);
var inst_27990 = (state_28073[(25)]);
var inst_27990__$1 = (state_28073[(2)]);
var inst_27991__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27990__$1);
var inst_27992 = (function (){var all_files = inst_27987;
var res_SINGLEQUOTE_ = inst_27990__$1;
var res = inst_27991__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27987,inst_27995,inst_27991,inst_27990,inst_27990__$1,inst_27991__$1,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27670_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27670_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27987,inst_27995,inst_27991,inst_27990,inst_27990__$1,inst_27991__$1,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27993 = cljs.core.filter.call(null,inst_27992,inst_27990__$1);
var inst_27994 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27995__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27994);
var inst_27996 = cljs.core.not_empty.call(null,inst_27995__$1);
var state_28073__$1 = (function (){var statearr_28101 = state_28073;
(statearr_28101[(23)] = inst_27995__$1);

(statearr_28101[(24)] = inst_27991__$1);

(statearr_28101[(26)] = inst_27993);

(statearr_28101[(25)] = inst_27990__$1);

return statearr_28101;
})();
if(cljs.core.truth_(inst_27996)){
var statearr_28102_28182 = state_28073__$1;
(statearr_28102_28182[(1)] = (23));

} else {
var statearr_28103_28183 = state_28073__$1;
(statearr_28103_28183[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (36))){
var state_28073__$1 = state_28073;
var statearr_28104_28184 = state_28073__$1;
(statearr_28104_28184[(2)] = false);

(statearr_28104_28184[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (41))){
var inst_28048 = (state_28073[(20)]);
var inst_28052 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28053 = cljs.core.map.call(null,inst_28052,inst_28048);
var inst_28054 = cljs.core.pr_str.call(null,inst_28053);
var inst_28055 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28054)].join('');
var inst_28056 = figwheel.client.utils.log.call(null,inst_28055);
var state_28073__$1 = state_28073;
var statearr_28105_28185 = state_28073__$1;
(statearr_28105_28185[(2)] = inst_28056);

(statearr_28105_28185[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (43))){
var inst_28049 = (state_28073[(21)]);
var inst_28059 = (state_28073[(2)]);
var inst_28060 = cljs.core.not_empty.call(null,inst_28049);
var state_28073__$1 = (function (){var statearr_28106 = state_28073;
(statearr_28106[(27)] = inst_28059);

return statearr_28106;
})();
if(cljs.core.truth_(inst_28060)){
var statearr_28107_28186 = state_28073__$1;
(statearr_28107_28186[(1)] = (44));

} else {
var statearr_28108_28187 = state_28073__$1;
(statearr_28108_28187[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (29))){
var inst_27987 = (state_28073[(19)]);
var inst_27995 = (state_28073[(23)]);
var inst_28027 = (state_28073[(16)]);
var inst_27991 = (state_28073[(24)]);
var inst_27993 = (state_28073[(26)]);
var inst_27990 = (state_28073[(25)]);
var inst_28023 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28026 = (function (){var all_files = inst_27987;
var res_SINGLEQUOTE_ = inst_27990;
var res = inst_27991;
var files_not_loaded = inst_27993;
var dependencies_that_loaded = inst_27995;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27987,inst_27995,inst_28027,inst_27991,inst_27993,inst_27990,inst_28023,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28025){
var map__28109 = p__28025;
var map__28109__$1 = ((((!((map__28109 == null)))?((((map__28109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28109):map__28109);
var namespace = cljs.core.get.call(null,map__28109__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27987,inst_27995,inst_28027,inst_27991,inst_27993,inst_27990,inst_28023,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28027__$1 = cljs.core.group_by.call(null,inst_28026,inst_27993);
var inst_28029 = (inst_28027__$1 == null);
var inst_28030 = cljs.core.not.call(null,inst_28029);
var state_28073__$1 = (function (){var statearr_28111 = state_28073;
(statearr_28111[(16)] = inst_28027__$1);

(statearr_28111[(28)] = inst_28023);

return statearr_28111;
})();
if(inst_28030){
var statearr_28112_28188 = state_28073__$1;
(statearr_28112_28188[(1)] = (32));

} else {
var statearr_28113_28189 = state_28073__$1;
(statearr_28113_28189[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (44))){
var inst_28049 = (state_28073[(21)]);
var inst_28062 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28049);
var inst_28063 = cljs.core.pr_str.call(null,inst_28062);
var inst_28064 = [cljs.core.str("not required: "),cljs.core.str(inst_28063)].join('');
var inst_28065 = figwheel.client.utils.log.call(null,inst_28064);
var state_28073__$1 = state_28073;
var statearr_28114_28190 = state_28073__$1;
(statearr_28114_28190[(2)] = inst_28065);

(statearr_28114_28190[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (6))){
var inst_27968 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
var statearr_28115_28191 = state_28073__$1;
(statearr_28115_28191[(2)] = inst_27968);

(statearr_28115_28191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (28))){
var inst_27993 = (state_28073[(26)]);
var inst_28020 = (state_28073[(2)]);
var inst_28021 = cljs.core.not_empty.call(null,inst_27993);
var state_28073__$1 = (function (){var statearr_28116 = state_28073;
(statearr_28116[(29)] = inst_28020);

return statearr_28116;
})();
if(cljs.core.truth_(inst_28021)){
var statearr_28117_28192 = state_28073__$1;
(statearr_28117_28192[(1)] = (29));

} else {
var statearr_28118_28193 = state_28073__$1;
(statearr_28118_28193[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (25))){
var inst_27991 = (state_28073[(24)]);
var inst_28007 = (state_28073[(2)]);
var inst_28008 = cljs.core.not_empty.call(null,inst_27991);
var state_28073__$1 = (function (){var statearr_28119 = state_28073;
(statearr_28119[(30)] = inst_28007);

return statearr_28119;
})();
if(cljs.core.truth_(inst_28008)){
var statearr_28120_28194 = state_28073__$1;
(statearr_28120_28194[(1)] = (26));

} else {
var statearr_28121_28195 = state_28073__$1;
(statearr_28121_28195[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (34))){
var inst_28042 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
if(cljs.core.truth_(inst_28042)){
var statearr_28122_28196 = state_28073__$1;
(statearr_28122_28196[(1)] = (38));

} else {
var statearr_28123_28197 = state_28073__$1;
(statearr_28123_28197[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (17))){
var state_28073__$1 = state_28073;
var statearr_28124_28198 = state_28073__$1;
(statearr_28124_28198[(2)] = recompile_dependents);

(statearr_28124_28198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (3))){
var state_28073__$1 = state_28073;
var statearr_28125_28199 = state_28073__$1;
(statearr_28125_28199[(2)] = null);

(statearr_28125_28199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (12))){
var inst_27964 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
var statearr_28126_28200 = state_28073__$1;
(statearr_28126_28200[(2)] = inst_27964);

(statearr_28126_28200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (2))){
var inst_27926 = (state_28073[(13)]);
var inst_27933 = cljs.core.seq.call(null,inst_27926);
var inst_27934 = inst_27933;
var inst_27935 = null;
var inst_27936 = (0);
var inst_27937 = (0);
var state_28073__$1 = (function (){var statearr_28127 = state_28073;
(statearr_28127[(7)] = inst_27934);

(statearr_28127[(8)] = inst_27937);

(statearr_28127[(9)] = inst_27935);

(statearr_28127[(10)] = inst_27936);

return statearr_28127;
})();
var statearr_28128_28201 = state_28073__$1;
(statearr_28128_28201[(2)] = null);

(statearr_28128_28201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (23))){
var inst_27987 = (state_28073[(19)]);
var inst_27995 = (state_28073[(23)]);
var inst_27991 = (state_28073[(24)]);
var inst_27993 = (state_28073[(26)]);
var inst_27990 = (state_28073[(25)]);
var inst_27998 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28000 = (function (){var all_files = inst_27987;
var res_SINGLEQUOTE_ = inst_27990;
var res = inst_27991;
var files_not_loaded = inst_27993;
var dependencies_that_loaded = inst_27995;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27987,inst_27995,inst_27991,inst_27993,inst_27990,inst_27998,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27999){
var map__28129 = p__27999;
var map__28129__$1 = ((((!((map__28129 == null)))?((((map__28129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28129):map__28129);
var request_url = cljs.core.get.call(null,map__28129__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27987,inst_27995,inst_27991,inst_27993,inst_27990,inst_27998,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28001 = cljs.core.reverse.call(null,inst_27995);
var inst_28002 = cljs.core.map.call(null,inst_28000,inst_28001);
var inst_28003 = cljs.core.pr_str.call(null,inst_28002);
var inst_28004 = figwheel.client.utils.log.call(null,inst_28003);
var state_28073__$1 = (function (){var statearr_28131 = state_28073;
(statearr_28131[(31)] = inst_27998);

return statearr_28131;
})();
var statearr_28132_28202 = state_28073__$1;
(statearr_28132_28202[(2)] = inst_28004);

(statearr_28132_28202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (35))){
var state_28073__$1 = state_28073;
var statearr_28133_28203 = state_28073__$1;
(statearr_28133_28203[(2)] = true);

(statearr_28133_28203[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (19))){
var inst_27977 = (state_28073[(12)]);
var inst_27983 = figwheel.client.file_reloading.expand_files.call(null,inst_27977);
var state_28073__$1 = state_28073;
var statearr_28134_28204 = state_28073__$1;
(statearr_28134_28204[(2)] = inst_27983);

(statearr_28134_28204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (11))){
var state_28073__$1 = state_28073;
var statearr_28135_28205 = state_28073__$1;
(statearr_28135_28205[(2)] = null);

(statearr_28135_28205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (9))){
var inst_27966 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
var statearr_28136_28206 = state_28073__$1;
(statearr_28136_28206[(2)] = inst_27966);

(statearr_28136_28206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (5))){
var inst_27937 = (state_28073[(8)]);
var inst_27936 = (state_28073[(10)]);
var inst_27939 = (inst_27937 < inst_27936);
var inst_27940 = inst_27939;
var state_28073__$1 = state_28073;
if(cljs.core.truth_(inst_27940)){
var statearr_28137_28207 = state_28073__$1;
(statearr_28137_28207[(1)] = (7));

} else {
var statearr_28138_28208 = state_28073__$1;
(statearr_28138_28208[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (14))){
var inst_27947 = (state_28073[(22)]);
var inst_27956 = cljs.core.first.call(null,inst_27947);
var inst_27957 = figwheel.client.file_reloading.eval_body.call(null,inst_27956,opts);
var inst_27958 = cljs.core.next.call(null,inst_27947);
var inst_27934 = inst_27958;
var inst_27935 = null;
var inst_27936 = (0);
var inst_27937 = (0);
var state_28073__$1 = (function (){var statearr_28139 = state_28073;
(statearr_28139[(32)] = inst_27957);

(statearr_28139[(7)] = inst_27934);

(statearr_28139[(8)] = inst_27937);

(statearr_28139[(9)] = inst_27935);

(statearr_28139[(10)] = inst_27936);

return statearr_28139;
})();
var statearr_28140_28209 = state_28073__$1;
(statearr_28140_28209[(2)] = null);

(statearr_28140_28209[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (45))){
var state_28073__$1 = state_28073;
var statearr_28141_28210 = state_28073__$1;
(statearr_28141_28210[(2)] = null);

(statearr_28141_28210[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (26))){
var inst_27987 = (state_28073[(19)]);
var inst_27995 = (state_28073[(23)]);
var inst_27991 = (state_28073[(24)]);
var inst_27993 = (state_28073[(26)]);
var inst_27990 = (state_28073[(25)]);
var inst_28010 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28012 = (function (){var all_files = inst_27987;
var res_SINGLEQUOTE_ = inst_27990;
var res = inst_27991;
var files_not_loaded = inst_27993;
var dependencies_that_loaded = inst_27995;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27987,inst_27995,inst_27991,inst_27993,inst_27990,inst_28010,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28011){
var map__28142 = p__28011;
var map__28142__$1 = ((((!((map__28142 == null)))?((((map__28142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28142):map__28142);
var namespace = cljs.core.get.call(null,map__28142__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28142__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27987,inst_27995,inst_27991,inst_27993,inst_27990,inst_28010,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28013 = cljs.core.map.call(null,inst_28012,inst_27991);
var inst_28014 = cljs.core.pr_str.call(null,inst_28013);
var inst_28015 = figwheel.client.utils.log.call(null,inst_28014);
var inst_28016 = (function (){var all_files = inst_27987;
var res_SINGLEQUOTE_ = inst_27990;
var res = inst_27991;
var files_not_loaded = inst_27993;
var dependencies_that_loaded = inst_27995;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27987,inst_27995,inst_27991,inst_27993,inst_27990,inst_28010,inst_28012,inst_28013,inst_28014,inst_28015,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27987,inst_27995,inst_27991,inst_27993,inst_27990,inst_28010,inst_28012,inst_28013,inst_28014,inst_28015,state_val_28074,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28017 = setTimeout(inst_28016,(10));
var state_28073__$1 = (function (){var statearr_28144 = state_28073;
(statearr_28144[(33)] = inst_28010);

(statearr_28144[(34)] = inst_28015);

return statearr_28144;
})();
var statearr_28145_28211 = state_28073__$1;
(statearr_28145_28211[(2)] = inst_28017);

(statearr_28145_28211[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (16))){
var state_28073__$1 = state_28073;
var statearr_28146_28212 = state_28073__$1;
(statearr_28146_28212[(2)] = reload_dependents);

(statearr_28146_28212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (38))){
var inst_28027 = (state_28073[(16)]);
var inst_28044 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28027);
var state_28073__$1 = state_28073;
var statearr_28147_28213 = state_28073__$1;
(statearr_28147_28213[(2)] = inst_28044);

(statearr_28147_28213[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (30))){
var state_28073__$1 = state_28073;
var statearr_28148_28214 = state_28073__$1;
(statearr_28148_28214[(2)] = null);

(statearr_28148_28214[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (10))){
var inst_27947 = (state_28073[(22)]);
var inst_27949 = cljs.core.chunked_seq_QMARK_.call(null,inst_27947);
var state_28073__$1 = state_28073;
if(inst_27949){
var statearr_28149_28215 = state_28073__$1;
(statearr_28149_28215[(1)] = (13));

} else {
var statearr_28150_28216 = state_28073__$1;
(statearr_28150_28216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (18))){
var inst_27981 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
if(cljs.core.truth_(inst_27981)){
var statearr_28151_28217 = state_28073__$1;
(statearr_28151_28217[(1)] = (19));

} else {
var statearr_28152_28218 = state_28073__$1;
(statearr_28152_28218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (42))){
var state_28073__$1 = state_28073;
var statearr_28153_28219 = state_28073__$1;
(statearr_28153_28219[(2)] = null);

(statearr_28153_28219[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (37))){
var inst_28039 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
var statearr_28154_28220 = state_28073__$1;
(statearr_28154_28220[(2)] = inst_28039);

(statearr_28154_28220[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (8))){
var inst_27934 = (state_28073[(7)]);
var inst_27947 = (state_28073[(22)]);
var inst_27947__$1 = cljs.core.seq.call(null,inst_27934);
var state_28073__$1 = (function (){var statearr_28155 = state_28073;
(statearr_28155[(22)] = inst_27947__$1);

return statearr_28155;
})();
if(inst_27947__$1){
var statearr_28156_28221 = state_28073__$1;
(statearr_28156_28221[(1)] = (10));

} else {
var statearr_28157_28222 = state_28073__$1;
(statearr_28157_28222[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20604__auto__,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto____0 = (function (){
var statearr_28161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28161[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto__);

(statearr_28161[(1)] = (1));

return statearr_28161;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto____1 = (function (state_28073){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_28073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e28162){if((e28162 instanceof Object)){
var ex__20608__auto__ = e28162;
var statearr_28163_28223 = state_28073;
(statearr_28163_28223[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28224 = state_28073;
state_28073 = G__28224;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto__ = function(state_28073){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto____1.call(this,state_28073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20671__auto__ = (function (){var statearr_28164 = f__20670__auto__.call(null);
(statearr_28164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_28164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__,map__27919,map__27919__$1,opts,before_jsload,on_jsload,reload_dependents,map__27920,map__27920__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20669__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28227,link){
var map__28230 = p__28227;
var map__28230__$1 = ((((!((map__28230 == null)))?((((map__28230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28230):map__28230);
var file = cljs.core.get.call(null,map__28230__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28230,map__28230__$1,file){
return (function (p1__28225_SHARP_,p2__28226_SHARP_){
if(cljs.core._EQ_.call(null,p1__28225_SHARP_,p2__28226_SHARP_)){
return p1__28225_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28230,map__28230__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28236){
var map__28237 = p__28236;
var map__28237__$1 = ((((!((map__28237 == null)))?((((map__28237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28237):map__28237);
var match_length = cljs.core.get.call(null,map__28237__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28237__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28232_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28232_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28239 = [];
var len__17833__auto___28242 = arguments.length;
var i__17834__auto___28243 = (0);
while(true){
if((i__17834__auto___28243 < len__17833__auto___28242)){
args28239.push((arguments[i__17834__auto___28243]));

var G__28244 = (i__17834__auto___28243 + (1));
i__17834__auto___28243 = G__28244;
continue;
} else {
}
break;
}

var G__28241 = args28239.length;
switch (G__28241) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28239.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28246_SHARP_,p2__28247_SHARP_){
return cljs.core.assoc.call(null,p1__28246_SHARP_,cljs.core.get.call(null,p2__28247_SHARP_,key),p2__28247_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28248){
var map__28251 = p__28248;
var map__28251__$1 = ((((!((map__28251 == null)))?((((map__28251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28251):map__28251);
var f_data = map__28251__$1;
var file = cljs.core.get.call(null,map__28251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28253,files_msg){
var map__28260 = p__28253;
var map__28260__$1 = ((((!((map__28260 == null)))?((((map__28260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28260):map__28260);
var opts = map__28260__$1;
var on_cssload = cljs.core.get.call(null,map__28260__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28262_28266 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28263_28267 = null;
var count__28264_28268 = (0);
var i__28265_28269 = (0);
while(true){
if((i__28265_28269 < count__28264_28268)){
var f_28270 = cljs.core._nth.call(null,chunk__28263_28267,i__28265_28269);
figwheel.client.file_reloading.reload_css_file.call(null,f_28270);

var G__28271 = seq__28262_28266;
var G__28272 = chunk__28263_28267;
var G__28273 = count__28264_28268;
var G__28274 = (i__28265_28269 + (1));
seq__28262_28266 = G__28271;
chunk__28263_28267 = G__28272;
count__28264_28268 = G__28273;
i__28265_28269 = G__28274;
continue;
} else {
var temp__4657__auto___28275 = cljs.core.seq.call(null,seq__28262_28266);
if(temp__4657__auto___28275){
var seq__28262_28276__$1 = temp__4657__auto___28275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28262_28276__$1)){
var c__17578__auto___28277 = cljs.core.chunk_first.call(null,seq__28262_28276__$1);
var G__28278 = cljs.core.chunk_rest.call(null,seq__28262_28276__$1);
var G__28279 = c__17578__auto___28277;
var G__28280 = cljs.core.count.call(null,c__17578__auto___28277);
var G__28281 = (0);
seq__28262_28266 = G__28278;
chunk__28263_28267 = G__28279;
count__28264_28268 = G__28280;
i__28265_28269 = G__28281;
continue;
} else {
var f_28282 = cljs.core.first.call(null,seq__28262_28276__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28282);

var G__28283 = cljs.core.next.call(null,seq__28262_28276__$1);
var G__28284 = null;
var G__28285 = (0);
var G__28286 = (0);
seq__28262_28266 = G__28283;
chunk__28263_28267 = G__28284;
count__28264_28268 = G__28285;
i__28265_28269 = G__28286;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28260,map__28260__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28260,map__28260__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map