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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26965_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26965_SHARP_));
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
var seq__26970 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26971 = null;
var count__26972 = (0);
var i__26973 = (0);
while(true){
if((i__26973 < count__26972)){
var n = cljs.core._nth.call(null,chunk__26971,i__26973);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26974 = seq__26970;
var G__26975 = chunk__26971;
var G__26976 = count__26972;
var G__26977 = (i__26973 + (1));
seq__26970 = G__26974;
chunk__26971 = G__26975;
count__26972 = G__26976;
i__26973 = G__26977;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26970);
if(temp__4657__auto__){
var seq__26970__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26970__$1)){
var c__17578__auto__ = cljs.core.chunk_first.call(null,seq__26970__$1);
var G__26978 = cljs.core.chunk_rest.call(null,seq__26970__$1);
var G__26979 = c__17578__auto__;
var G__26980 = cljs.core.count.call(null,c__17578__auto__);
var G__26981 = (0);
seq__26970 = G__26978;
chunk__26971 = G__26979;
count__26972 = G__26980;
i__26973 = G__26981;
continue;
} else {
var n = cljs.core.first.call(null,seq__26970__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26982 = cljs.core.next.call(null,seq__26970__$1);
var G__26983 = null;
var G__26984 = (0);
var G__26985 = (0);
seq__26970 = G__26982;
chunk__26971 = G__26983;
count__26972 = G__26984;
i__26973 = G__26985;
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

var seq__27024_27031 = cljs.core.seq.call(null,deps);
var chunk__27025_27032 = null;
var count__27026_27033 = (0);
var i__27027_27034 = (0);
while(true){
if((i__27027_27034 < count__27026_27033)){
var dep_27035 = cljs.core._nth.call(null,chunk__27025_27032,i__27027_27034);
topo_sort_helper_STAR_.call(null,dep_27035,(depth + (1)),state);

var G__27036 = seq__27024_27031;
var G__27037 = chunk__27025_27032;
var G__27038 = count__27026_27033;
var G__27039 = (i__27027_27034 + (1));
seq__27024_27031 = G__27036;
chunk__27025_27032 = G__27037;
count__27026_27033 = G__27038;
i__27027_27034 = G__27039;
continue;
} else {
var temp__4657__auto___27040 = cljs.core.seq.call(null,seq__27024_27031);
if(temp__4657__auto___27040){
var seq__27024_27041__$1 = temp__4657__auto___27040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27024_27041__$1)){
var c__17578__auto___27042 = cljs.core.chunk_first.call(null,seq__27024_27041__$1);
var G__27043 = cljs.core.chunk_rest.call(null,seq__27024_27041__$1);
var G__27044 = c__17578__auto___27042;
var G__27045 = cljs.core.count.call(null,c__17578__auto___27042);
var G__27046 = (0);
seq__27024_27031 = G__27043;
chunk__27025_27032 = G__27044;
count__27026_27033 = G__27045;
i__27027_27034 = G__27046;
continue;
} else {
var dep_27047 = cljs.core.first.call(null,seq__27024_27041__$1);
topo_sort_helper_STAR_.call(null,dep_27047,(depth + (1)),state);

var G__27048 = cljs.core.next.call(null,seq__27024_27041__$1);
var G__27049 = null;
var G__27050 = (0);
var G__27051 = (0);
seq__27024_27031 = G__27048;
chunk__27025_27032 = G__27049;
count__27026_27033 = G__27050;
i__27027_27034 = G__27051;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27028){
var vec__27030 = p__27028;
var x = cljs.core.nth.call(null,vec__27030,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27030,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27030,x,xs,get_deps__$1){
return (function (p1__26986_SHARP_){
return clojure.set.difference.call(null,p1__26986_SHARP_,x);
});})(vec__27030,x,xs,get_deps__$1))
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
var seq__27064 = cljs.core.seq.call(null,provides);
var chunk__27065 = null;
var count__27066 = (0);
var i__27067 = (0);
while(true){
if((i__27067 < count__27066)){
var prov = cljs.core._nth.call(null,chunk__27065,i__27067);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27068_27076 = cljs.core.seq.call(null,requires);
var chunk__27069_27077 = null;
var count__27070_27078 = (0);
var i__27071_27079 = (0);
while(true){
if((i__27071_27079 < count__27070_27078)){
var req_27080 = cljs.core._nth.call(null,chunk__27069_27077,i__27071_27079);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27080,prov);

var G__27081 = seq__27068_27076;
var G__27082 = chunk__27069_27077;
var G__27083 = count__27070_27078;
var G__27084 = (i__27071_27079 + (1));
seq__27068_27076 = G__27081;
chunk__27069_27077 = G__27082;
count__27070_27078 = G__27083;
i__27071_27079 = G__27084;
continue;
} else {
var temp__4657__auto___27085 = cljs.core.seq.call(null,seq__27068_27076);
if(temp__4657__auto___27085){
var seq__27068_27086__$1 = temp__4657__auto___27085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27068_27086__$1)){
var c__17578__auto___27087 = cljs.core.chunk_first.call(null,seq__27068_27086__$1);
var G__27088 = cljs.core.chunk_rest.call(null,seq__27068_27086__$1);
var G__27089 = c__17578__auto___27087;
var G__27090 = cljs.core.count.call(null,c__17578__auto___27087);
var G__27091 = (0);
seq__27068_27076 = G__27088;
chunk__27069_27077 = G__27089;
count__27070_27078 = G__27090;
i__27071_27079 = G__27091;
continue;
} else {
var req_27092 = cljs.core.first.call(null,seq__27068_27086__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27092,prov);

var G__27093 = cljs.core.next.call(null,seq__27068_27086__$1);
var G__27094 = null;
var G__27095 = (0);
var G__27096 = (0);
seq__27068_27076 = G__27093;
chunk__27069_27077 = G__27094;
count__27070_27078 = G__27095;
i__27071_27079 = G__27096;
continue;
}
} else {
}
}
break;
}

var G__27097 = seq__27064;
var G__27098 = chunk__27065;
var G__27099 = count__27066;
var G__27100 = (i__27067 + (1));
seq__27064 = G__27097;
chunk__27065 = G__27098;
count__27066 = G__27099;
i__27067 = G__27100;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27064);
if(temp__4657__auto__){
var seq__27064__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27064__$1)){
var c__17578__auto__ = cljs.core.chunk_first.call(null,seq__27064__$1);
var G__27101 = cljs.core.chunk_rest.call(null,seq__27064__$1);
var G__27102 = c__17578__auto__;
var G__27103 = cljs.core.count.call(null,c__17578__auto__);
var G__27104 = (0);
seq__27064 = G__27101;
chunk__27065 = G__27102;
count__27066 = G__27103;
i__27067 = G__27104;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27064__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27072_27105 = cljs.core.seq.call(null,requires);
var chunk__27073_27106 = null;
var count__27074_27107 = (0);
var i__27075_27108 = (0);
while(true){
if((i__27075_27108 < count__27074_27107)){
var req_27109 = cljs.core._nth.call(null,chunk__27073_27106,i__27075_27108);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27109,prov);

var G__27110 = seq__27072_27105;
var G__27111 = chunk__27073_27106;
var G__27112 = count__27074_27107;
var G__27113 = (i__27075_27108 + (1));
seq__27072_27105 = G__27110;
chunk__27073_27106 = G__27111;
count__27074_27107 = G__27112;
i__27075_27108 = G__27113;
continue;
} else {
var temp__4657__auto___27114__$1 = cljs.core.seq.call(null,seq__27072_27105);
if(temp__4657__auto___27114__$1){
var seq__27072_27115__$1 = temp__4657__auto___27114__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27072_27115__$1)){
var c__17578__auto___27116 = cljs.core.chunk_first.call(null,seq__27072_27115__$1);
var G__27117 = cljs.core.chunk_rest.call(null,seq__27072_27115__$1);
var G__27118 = c__17578__auto___27116;
var G__27119 = cljs.core.count.call(null,c__17578__auto___27116);
var G__27120 = (0);
seq__27072_27105 = G__27117;
chunk__27073_27106 = G__27118;
count__27074_27107 = G__27119;
i__27075_27108 = G__27120;
continue;
} else {
var req_27121 = cljs.core.first.call(null,seq__27072_27115__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27121,prov);

var G__27122 = cljs.core.next.call(null,seq__27072_27115__$1);
var G__27123 = null;
var G__27124 = (0);
var G__27125 = (0);
seq__27072_27105 = G__27122;
chunk__27073_27106 = G__27123;
count__27074_27107 = G__27124;
i__27075_27108 = G__27125;
continue;
}
} else {
}
}
break;
}

var G__27126 = cljs.core.next.call(null,seq__27064__$1);
var G__27127 = null;
var G__27128 = (0);
var G__27129 = (0);
seq__27064 = G__27126;
chunk__27065 = G__27127;
count__27066 = G__27128;
i__27067 = G__27129;
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
var seq__27134_27138 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27135_27139 = null;
var count__27136_27140 = (0);
var i__27137_27141 = (0);
while(true){
if((i__27137_27141 < count__27136_27140)){
var ns_27142 = cljs.core._nth.call(null,chunk__27135_27139,i__27137_27141);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27142);

var G__27143 = seq__27134_27138;
var G__27144 = chunk__27135_27139;
var G__27145 = count__27136_27140;
var G__27146 = (i__27137_27141 + (1));
seq__27134_27138 = G__27143;
chunk__27135_27139 = G__27144;
count__27136_27140 = G__27145;
i__27137_27141 = G__27146;
continue;
} else {
var temp__4657__auto___27147 = cljs.core.seq.call(null,seq__27134_27138);
if(temp__4657__auto___27147){
var seq__27134_27148__$1 = temp__4657__auto___27147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27134_27148__$1)){
var c__17578__auto___27149 = cljs.core.chunk_first.call(null,seq__27134_27148__$1);
var G__27150 = cljs.core.chunk_rest.call(null,seq__27134_27148__$1);
var G__27151 = c__17578__auto___27149;
var G__27152 = cljs.core.count.call(null,c__17578__auto___27149);
var G__27153 = (0);
seq__27134_27138 = G__27150;
chunk__27135_27139 = G__27151;
count__27136_27140 = G__27152;
i__27137_27141 = G__27153;
continue;
} else {
var ns_27154 = cljs.core.first.call(null,seq__27134_27148__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27154);

var G__27155 = cljs.core.next.call(null,seq__27134_27148__$1);
var G__27156 = null;
var G__27157 = (0);
var G__27158 = (0);
seq__27134_27138 = G__27155;
chunk__27135_27139 = G__27156;
count__27136_27140 = G__27157;
i__27137_27141 = G__27158;
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
var G__27159__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27160__i = 0, G__27160__a = new Array(arguments.length -  0);
while (G__27160__i < G__27160__a.length) {G__27160__a[G__27160__i] = arguments[G__27160__i + 0]; ++G__27160__i;}
  args = new cljs.core.IndexedSeq(G__27160__a,0);
} 
return G__27159__delegate.call(this,args);};
G__27159.cljs$lang$maxFixedArity = 0;
G__27159.cljs$lang$applyTo = (function (arglist__27161){
var args = cljs.core.seq(arglist__27161);
return G__27159__delegate(args);
});
G__27159.cljs$core$IFn$_invoke$arity$variadic = G__27159__delegate;
return G__27159;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27163 = cljs.core._EQ_;
var expr__27164 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27163.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27164))){
var path_parts = ((function (pred__27163,expr__27164){
return (function (p1__27162_SHARP_){
return clojure.string.split.call(null,p1__27162_SHARP_,/[\/\\]/);
});})(pred__27163,expr__27164))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27163,expr__27164){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e27166){if((e27166 instanceof Error)){
var e = e27166;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27166;

}
}})());
});
;})(path_parts,sep,root,pred__27163,expr__27164))
} else {
if(cljs.core.truth_(pred__27163.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27164))){
return ((function (pred__27163,expr__27164){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27163,expr__27164){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27163,expr__27164))
);

return deferred.addErrback(((function (deferred,pred__27163,expr__27164){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27163,expr__27164))
);
});
;})(pred__27163,expr__27164))
} else {
return ((function (pred__27163,expr__27164){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27163,expr__27164))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27167,callback){
var map__27170 = p__27167;
var map__27170__$1 = ((((!((map__27170 == null)))?((((map__27170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27170):map__27170);
var file_msg = map__27170__$1;
var request_url = cljs.core.get.call(null,map__27170__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27170,map__27170__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27170,map__27170__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto__){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto__){
return (function (state_27194){
var state_val_27195 = (state_27194[(1)]);
if((state_val_27195 === (7))){
var inst_27190 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
var statearr_27196_27216 = state_27194__$1;
(statearr_27196_27216[(2)] = inst_27190);

(statearr_27196_27216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (1))){
var state_27194__$1 = state_27194;
var statearr_27197_27217 = state_27194__$1;
(statearr_27197_27217[(2)] = null);

(statearr_27197_27217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (4))){
var inst_27174 = (state_27194[(7)]);
var inst_27174__$1 = (state_27194[(2)]);
var state_27194__$1 = (function (){var statearr_27198 = state_27194;
(statearr_27198[(7)] = inst_27174__$1);

return statearr_27198;
})();
if(cljs.core.truth_(inst_27174__$1)){
var statearr_27199_27218 = state_27194__$1;
(statearr_27199_27218[(1)] = (5));

} else {
var statearr_27200_27219 = state_27194__$1;
(statearr_27200_27219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (6))){
var state_27194__$1 = state_27194;
var statearr_27201_27220 = state_27194__$1;
(statearr_27201_27220[(2)] = null);

(statearr_27201_27220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (3))){
var inst_27192 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27194__$1,inst_27192);
} else {
if((state_val_27195 === (2))){
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27194__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27195 === (11))){
var inst_27186 = (state_27194[(2)]);
var state_27194__$1 = (function (){var statearr_27202 = state_27194;
(statearr_27202[(8)] = inst_27186);

return statearr_27202;
})();
var statearr_27203_27221 = state_27194__$1;
(statearr_27203_27221[(2)] = null);

(statearr_27203_27221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (9))){
var inst_27178 = (state_27194[(9)]);
var inst_27180 = (state_27194[(10)]);
var inst_27182 = inst_27180.call(null,inst_27178);
var state_27194__$1 = state_27194;
var statearr_27204_27222 = state_27194__$1;
(statearr_27204_27222[(2)] = inst_27182);

(statearr_27204_27222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (5))){
var inst_27174 = (state_27194[(7)]);
var inst_27176 = figwheel.client.file_reloading.blocking_load.call(null,inst_27174);
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27194__$1,(8),inst_27176);
} else {
if((state_val_27195 === (10))){
var inst_27178 = (state_27194[(9)]);
var inst_27184 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27178);
var state_27194__$1 = state_27194;
var statearr_27205_27223 = state_27194__$1;
(statearr_27205_27223[(2)] = inst_27184);

(statearr_27205_27223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (8))){
var inst_27180 = (state_27194[(10)]);
var inst_27174 = (state_27194[(7)]);
var inst_27178 = (state_27194[(2)]);
var inst_27179 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27180__$1 = cljs.core.get.call(null,inst_27179,inst_27174);
var state_27194__$1 = (function (){var statearr_27206 = state_27194;
(statearr_27206[(9)] = inst_27178);

(statearr_27206[(10)] = inst_27180__$1);

return statearr_27206;
})();
if(cljs.core.truth_(inst_27180__$1)){
var statearr_27207_27224 = state_27194__$1;
(statearr_27207_27224[(1)] = (9));

} else {
var statearr_27208_27225 = state_27194__$1;
(statearr_27208_27225[(1)] = (10));

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
});})(c__20691__auto__))
;
return ((function (switch__20626__auto__,c__20691__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20627__auto__ = null;
var figwheel$client$file_reloading$state_machine__20627__auto____0 = (function (){
var statearr_27212 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27212[(0)] = figwheel$client$file_reloading$state_machine__20627__auto__);

(statearr_27212[(1)] = (1));

return statearr_27212;
});
var figwheel$client$file_reloading$state_machine__20627__auto____1 = (function (state_27194){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_27194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e27213){if((e27213 instanceof Object)){
var ex__20630__auto__ = e27213;
var statearr_27214_27226 = state_27194;
(statearr_27214_27226[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27227 = state_27194;
state_27194 = G__27227;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20627__auto__ = function(state_27194){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20627__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20627__auto____1.call(this,state_27194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20627__auto____0;
figwheel$client$file_reloading$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20627__auto____1;
return figwheel$client$file_reloading$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto__))
})();
var state__20693__auto__ = (function (){var statearr_27215 = f__20692__auto__.call(null);
(statearr_27215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto__);

return statearr_27215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto__))
);

return c__20691__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27228,callback){
var map__27231 = p__27228;
var map__27231__$1 = ((((!((map__27231 == null)))?((((map__27231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27231):map__27231);
var file_msg = map__27231__$1;
var namespace = cljs.core.get.call(null,map__27231__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27231,map__27231__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27231,map__27231__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27233){
var map__27236 = p__27233;
var map__27236__$1 = ((((!((map__27236 == null)))?((((map__27236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27236):map__27236);
var file_msg = map__27236__$1;
var namespace = cljs.core.get.call(null,map__27236__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27238,callback){
var map__27241 = p__27238;
var map__27241__$1 = ((((!((map__27241 == null)))?((((map__27241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27241):map__27241);
var file_msg = map__27241__$1;
var request_url = cljs.core.get.call(null,map__27241__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27241__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20691__auto___27329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___27329,out){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___27329,out){
return (function (state_27311){
var state_val_27312 = (state_27311[(1)]);
if((state_val_27312 === (1))){
var inst_27289 = cljs.core.nth.call(null,files,(0),null);
var inst_27290 = cljs.core.nthnext.call(null,files,(1));
var inst_27291 = files;
var state_27311__$1 = (function (){var statearr_27313 = state_27311;
(statearr_27313[(7)] = inst_27291);

(statearr_27313[(8)] = inst_27290);

(statearr_27313[(9)] = inst_27289);

return statearr_27313;
})();
var statearr_27314_27330 = state_27311__$1;
(statearr_27314_27330[(2)] = null);

(statearr_27314_27330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (2))){
var inst_27291 = (state_27311[(7)]);
var inst_27294 = (state_27311[(10)]);
var inst_27294__$1 = cljs.core.nth.call(null,inst_27291,(0),null);
var inst_27295 = cljs.core.nthnext.call(null,inst_27291,(1));
var inst_27296 = (inst_27294__$1 == null);
var inst_27297 = cljs.core.not.call(null,inst_27296);
var state_27311__$1 = (function (){var statearr_27315 = state_27311;
(statearr_27315[(11)] = inst_27295);

(statearr_27315[(10)] = inst_27294__$1);

return statearr_27315;
})();
if(inst_27297){
var statearr_27316_27331 = state_27311__$1;
(statearr_27316_27331[(1)] = (4));

} else {
var statearr_27317_27332 = state_27311__$1;
(statearr_27317_27332[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (3))){
var inst_27309 = (state_27311[(2)]);
var state_27311__$1 = state_27311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27311__$1,inst_27309);
} else {
if((state_val_27312 === (4))){
var inst_27294 = (state_27311[(10)]);
var inst_27299 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27294);
var state_27311__$1 = state_27311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27311__$1,(7),inst_27299);
} else {
if((state_val_27312 === (5))){
var inst_27305 = cljs.core.async.close_BANG_.call(null,out);
var state_27311__$1 = state_27311;
var statearr_27318_27333 = state_27311__$1;
(statearr_27318_27333[(2)] = inst_27305);

(statearr_27318_27333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (6))){
var inst_27307 = (state_27311[(2)]);
var state_27311__$1 = state_27311;
var statearr_27319_27334 = state_27311__$1;
(statearr_27319_27334[(2)] = inst_27307);

(statearr_27319_27334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (7))){
var inst_27295 = (state_27311[(11)]);
var inst_27301 = (state_27311[(2)]);
var inst_27302 = cljs.core.async.put_BANG_.call(null,out,inst_27301);
var inst_27291 = inst_27295;
var state_27311__$1 = (function (){var statearr_27320 = state_27311;
(statearr_27320[(7)] = inst_27291);

(statearr_27320[(12)] = inst_27302);

return statearr_27320;
})();
var statearr_27321_27335 = state_27311__$1;
(statearr_27321_27335[(2)] = null);

(statearr_27321_27335[(1)] = (2));


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
});})(c__20691__auto___27329,out))
;
return ((function (switch__20626__auto__,c__20691__auto___27329,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto____0 = (function (){
var statearr_27325 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27325[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto__);

(statearr_27325[(1)] = (1));

return statearr_27325;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto____1 = (function (state_27311){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_27311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e27326){if((e27326 instanceof Object)){
var ex__20630__auto__ = e27326;
var statearr_27327_27336 = state_27311;
(statearr_27327_27336[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27337 = state_27311;
state_27311 = G__27337;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto__ = function(state_27311){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto____1.call(this,state_27311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___27329,out))
})();
var state__20693__auto__ = (function (){var statearr_27328 = f__20692__auto__.call(null);
(statearr_27328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___27329);

return statearr_27328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___27329,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27338,opts){
var map__27342 = p__27338;
var map__27342__$1 = ((((!((map__27342 == null)))?((((map__27342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27342):map__27342);
var eval_body__$1 = cljs.core.get.call(null,map__27342__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27342__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27344){var e = e27344;
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
return (function (p1__27345_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27345_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27350){
var vec__27351 = p__27350;
var k = cljs.core.nth.call(null,vec__27351,(0),null);
var v = cljs.core.nth.call(null,vec__27351,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27352){
var vec__27353 = p__27352;
var k = cljs.core.nth.call(null,vec__27353,(0),null);
var v = cljs.core.nth.call(null,vec__27353,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27357,p__27358){
var map__27605 = p__27357;
var map__27605__$1 = ((((!((map__27605 == null)))?((((map__27605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27605):map__27605);
var opts = map__27605__$1;
var before_jsload = cljs.core.get.call(null,map__27605__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27605__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27605__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27606 = p__27358;
var map__27606__$1 = ((((!((map__27606 == null)))?((((map__27606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27606):map__27606);
var msg = map__27606__$1;
var files = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27759){
var state_val_27760 = (state_27759[(1)]);
if((state_val_27760 === (7))){
var inst_27622 = (state_27759[(7)]);
var inst_27623 = (state_27759[(8)]);
var inst_27620 = (state_27759[(9)]);
var inst_27621 = (state_27759[(10)]);
var inst_27628 = cljs.core._nth.call(null,inst_27621,inst_27623);
var inst_27629 = figwheel.client.file_reloading.eval_body.call(null,inst_27628,opts);
var inst_27630 = (inst_27623 + (1));
var tmp27761 = inst_27622;
var tmp27762 = inst_27620;
var tmp27763 = inst_27621;
var inst_27620__$1 = tmp27762;
var inst_27621__$1 = tmp27763;
var inst_27622__$1 = tmp27761;
var inst_27623__$1 = inst_27630;
var state_27759__$1 = (function (){var statearr_27764 = state_27759;
(statearr_27764[(7)] = inst_27622__$1);

(statearr_27764[(8)] = inst_27623__$1);

(statearr_27764[(9)] = inst_27620__$1);

(statearr_27764[(10)] = inst_27621__$1);

(statearr_27764[(11)] = inst_27629);

return statearr_27764;
})();
var statearr_27765_27851 = state_27759__$1;
(statearr_27765_27851[(2)] = null);

(statearr_27765_27851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (20))){
var inst_27663 = (state_27759[(12)]);
var inst_27671 = figwheel.client.file_reloading.sort_files.call(null,inst_27663);
var state_27759__$1 = state_27759;
var statearr_27766_27852 = state_27759__$1;
(statearr_27766_27852[(2)] = inst_27671);

(statearr_27766_27852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (27))){
var state_27759__$1 = state_27759;
var statearr_27767_27853 = state_27759__$1;
(statearr_27767_27853[(2)] = null);

(statearr_27767_27853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (1))){
var inst_27612 = (state_27759[(13)]);
var inst_27609 = before_jsload.call(null,files);
var inst_27610 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27611 = (function (){return ((function (inst_27612,inst_27609,inst_27610,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27354_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27354_SHARP_);
});
;})(inst_27612,inst_27609,inst_27610,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27612__$1 = cljs.core.filter.call(null,inst_27611,files);
var inst_27613 = cljs.core.not_empty.call(null,inst_27612__$1);
var state_27759__$1 = (function (){var statearr_27768 = state_27759;
(statearr_27768[(14)] = inst_27609);

(statearr_27768[(13)] = inst_27612__$1);

(statearr_27768[(15)] = inst_27610);

return statearr_27768;
})();
if(cljs.core.truth_(inst_27613)){
var statearr_27769_27854 = state_27759__$1;
(statearr_27769_27854[(1)] = (2));

} else {
var statearr_27770_27855 = state_27759__$1;
(statearr_27770_27855[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (24))){
var state_27759__$1 = state_27759;
var statearr_27771_27856 = state_27759__$1;
(statearr_27771_27856[(2)] = null);

(statearr_27771_27856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (39))){
var inst_27713 = (state_27759[(16)]);
var state_27759__$1 = state_27759;
var statearr_27772_27857 = state_27759__$1;
(statearr_27772_27857[(2)] = inst_27713);

(statearr_27772_27857[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (46))){
var inst_27754 = (state_27759[(2)]);
var state_27759__$1 = state_27759;
var statearr_27773_27858 = state_27759__$1;
(statearr_27773_27858[(2)] = inst_27754);

(statearr_27773_27858[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (4))){
var inst_27657 = (state_27759[(2)]);
var inst_27658 = cljs.core.List.EMPTY;
var inst_27659 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27658);
var inst_27660 = (function (){return ((function (inst_27657,inst_27658,inst_27659,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27355_SHARP_){
var and__16763__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27355_SHARP_);
if(cljs.core.truth_(and__16763__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27355_SHARP_));
} else {
return and__16763__auto__;
}
});
;})(inst_27657,inst_27658,inst_27659,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27661 = cljs.core.filter.call(null,inst_27660,files);
var inst_27662 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27663 = cljs.core.concat.call(null,inst_27661,inst_27662);
var state_27759__$1 = (function (){var statearr_27774 = state_27759;
(statearr_27774[(12)] = inst_27663);

(statearr_27774[(17)] = inst_27657);

(statearr_27774[(18)] = inst_27659);

return statearr_27774;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27775_27859 = state_27759__$1;
(statearr_27775_27859[(1)] = (16));

} else {
var statearr_27776_27860 = state_27759__$1;
(statearr_27776_27860[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (15))){
var inst_27647 = (state_27759[(2)]);
var state_27759__$1 = state_27759;
var statearr_27777_27861 = state_27759__$1;
(statearr_27777_27861[(2)] = inst_27647);

(statearr_27777_27861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (21))){
var inst_27673 = (state_27759[(19)]);
var inst_27673__$1 = (state_27759[(2)]);
var inst_27674 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27673__$1);
var state_27759__$1 = (function (){var statearr_27778 = state_27759;
(statearr_27778[(19)] = inst_27673__$1);

return statearr_27778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27759__$1,(22),inst_27674);
} else {
if((state_val_27760 === (31))){
var inst_27757 = (state_27759[(2)]);
var state_27759__$1 = state_27759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27759__$1,inst_27757);
} else {
if((state_val_27760 === (32))){
var inst_27713 = (state_27759[(16)]);
var inst_27718 = inst_27713.cljs$lang$protocol_mask$partition0$;
var inst_27719 = (inst_27718 & (64));
var inst_27720 = inst_27713.cljs$core$ISeq$;
var inst_27721 = (inst_27719) || (inst_27720);
var state_27759__$1 = state_27759;
if(cljs.core.truth_(inst_27721)){
var statearr_27779_27862 = state_27759__$1;
(statearr_27779_27862[(1)] = (35));

} else {
var statearr_27780_27863 = state_27759__$1;
(statearr_27780_27863[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (40))){
var inst_27734 = (state_27759[(20)]);
var inst_27733 = (state_27759[(2)]);
var inst_27734__$1 = cljs.core.get.call(null,inst_27733,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27735 = cljs.core.get.call(null,inst_27733,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27736 = cljs.core.not_empty.call(null,inst_27734__$1);
var state_27759__$1 = (function (){var statearr_27781 = state_27759;
(statearr_27781[(20)] = inst_27734__$1);

(statearr_27781[(21)] = inst_27735);

return statearr_27781;
})();
if(cljs.core.truth_(inst_27736)){
var statearr_27782_27864 = state_27759__$1;
(statearr_27782_27864[(1)] = (41));

} else {
var statearr_27783_27865 = state_27759__$1;
(statearr_27783_27865[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (33))){
var state_27759__$1 = state_27759;
var statearr_27784_27866 = state_27759__$1;
(statearr_27784_27866[(2)] = false);

(statearr_27784_27866[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (13))){
var inst_27633 = (state_27759[(22)]);
var inst_27637 = cljs.core.chunk_first.call(null,inst_27633);
var inst_27638 = cljs.core.chunk_rest.call(null,inst_27633);
var inst_27639 = cljs.core.count.call(null,inst_27637);
var inst_27620 = inst_27638;
var inst_27621 = inst_27637;
var inst_27622 = inst_27639;
var inst_27623 = (0);
var state_27759__$1 = (function (){var statearr_27785 = state_27759;
(statearr_27785[(7)] = inst_27622);

(statearr_27785[(8)] = inst_27623);

(statearr_27785[(9)] = inst_27620);

(statearr_27785[(10)] = inst_27621);

return statearr_27785;
})();
var statearr_27786_27867 = state_27759__$1;
(statearr_27786_27867[(2)] = null);

(statearr_27786_27867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (22))){
var inst_27681 = (state_27759[(23)]);
var inst_27677 = (state_27759[(24)]);
var inst_27673 = (state_27759[(19)]);
var inst_27676 = (state_27759[(25)]);
var inst_27676__$1 = (state_27759[(2)]);
var inst_27677__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27676__$1);
var inst_27678 = (function (){var all_files = inst_27673;
var res_SINGLEQUOTE_ = inst_27676__$1;
var res = inst_27677__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27681,inst_27677,inst_27673,inst_27676,inst_27676__$1,inst_27677__$1,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27356_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27356_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27681,inst_27677,inst_27673,inst_27676,inst_27676__$1,inst_27677__$1,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27679 = cljs.core.filter.call(null,inst_27678,inst_27676__$1);
var inst_27680 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27681__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27680);
var inst_27682 = cljs.core.not_empty.call(null,inst_27681__$1);
var state_27759__$1 = (function (){var statearr_27787 = state_27759;
(statearr_27787[(23)] = inst_27681__$1);

(statearr_27787[(24)] = inst_27677__$1);

(statearr_27787[(26)] = inst_27679);

(statearr_27787[(25)] = inst_27676__$1);

return statearr_27787;
})();
if(cljs.core.truth_(inst_27682)){
var statearr_27788_27868 = state_27759__$1;
(statearr_27788_27868[(1)] = (23));

} else {
var statearr_27789_27869 = state_27759__$1;
(statearr_27789_27869[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (36))){
var state_27759__$1 = state_27759;
var statearr_27790_27870 = state_27759__$1;
(statearr_27790_27870[(2)] = false);

(statearr_27790_27870[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (41))){
var inst_27734 = (state_27759[(20)]);
var inst_27738 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27739 = cljs.core.map.call(null,inst_27738,inst_27734);
var inst_27740 = cljs.core.pr_str.call(null,inst_27739);
var inst_27741 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27740)].join('');
var inst_27742 = figwheel.client.utils.log.call(null,inst_27741);
var state_27759__$1 = state_27759;
var statearr_27791_27871 = state_27759__$1;
(statearr_27791_27871[(2)] = inst_27742);

(statearr_27791_27871[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (43))){
var inst_27735 = (state_27759[(21)]);
var inst_27745 = (state_27759[(2)]);
var inst_27746 = cljs.core.not_empty.call(null,inst_27735);
var state_27759__$1 = (function (){var statearr_27792 = state_27759;
(statearr_27792[(27)] = inst_27745);

return statearr_27792;
})();
if(cljs.core.truth_(inst_27746)){
var statearr_27793_27872 = state_27759__$1;
(statearr_27793_27872[(1)] = (44));

} else {
var statearr_27794_27873 = state_27759__$1;
(statearr_27794_27873[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (29))){
var inst_27713 = (state_27759[(16)]);
var inst_27681 = (state_27759[(23)]);
var inst_27677 = (state_27759[(24)]);
var inst_27679 = (state_27759[(26)]);
var inst_27673 = (state_27759[(19)]);
var inst_27676 = (state_27759[(25)]);
var inst_27709 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27712 = (function (){var all_files = inst_27673;
var res_SINGLEQUOTE_ = inst_27676;
var res = inst_27677;
var files_not_loaded = inst_27679;
var dependencies_that_loaded = inst_27681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27713,inst_27681,inst_27677,inst_27679,inst_27673,inst_27676,inst_27709,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27711){
var map__27795 = p__27711;
var map__27795__$1 = ((((!((map__27795 == null)))?((((map__27795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27795):map__27795);
var namespace = cljs.core.get.call(null,map__27795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27713,inst_27681,inst_27677,inst_27679,inst_27673,inst_27676,inst_27709,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27713__$1 = cljs.core.group_by.call(null,inst_27712,inst_27679);
var inst_27715 = (inst_27713__$1 == null);
var inst_27716 = cljs.core.not.call(null,inst_27715);
var state_27759__$1 = (function (){var statearr_27797 = state_27759;
(statearr_27797[(16)] = inst_27713__$1);

(statearr_27797[(28)] = inst_27709);

return statearr_27797;
})();
if(inst_27716){
var statearr_27798_27874 = state_27759__$1;
(statearr_27798_27874[(1)] = (32));

} else {
var statearr_27799_27875 = state_27759__$1;
(statearr_27799_27875[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (44))){
var inst_27735 = (state_27759[(21)]);
var inst_27748 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27735);
var inst_27749 = cljs.core.pr_str.call(null,inst_27748);
var inst_27750 = [cljs.core.str("not required: "),cljs.core.str(inst_27749)].join('');
var inst_27751 = figwheel.client.utils.log.call(null,inst_27750);
var state_27759__$1 = state_27759;
var statearr_27800_27876 = state_27759__$1;
(statearr_27800_27876[(2)] = inst_27751);

(statearr_27800_27876[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (6))){
var inst_27654 = (state_27759[(2)]);
var state_27759__$1 = state_27759;
var statearr_27801_27877 = state_27759__$1;
(statearr_27801_27877[(2)] = inst_27654);

(statearr_27801_27877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (28))){
var inst_27679 = (state_27759[(26)]);
var inst_27706 = (state_27759[(2)]);
var inst_27707 = cljs.core.not_empty.call(null,inst_27679);
var state_27759__$1 = (function (){var statearr_27802 = state_27759;
(statearr_27802[(29)] = inst_27706);

return statearr_27802;
})();
if(cljs.core.truth_(inst_27707)){
var statearr_27803_27878 = state_27759__$1;
(statearr_27803_27878[(1)] = (29));

} else {
var statearr_27804_27879 = state_27759__$1;
(statearr_27804_27879[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (25))){
var inst_27677 = (state_27759[(24)]);
var inst_27693 = (state_27759[(2)]);
var inst_27694 = cljs.core.not_empty.call(null,inst_27677);
var state_27759__$1 = (function (){var statearr_27805 = state_27759;
(statearr_27805[(30)] = inst_27693);

return statearr_27805;
})();
if(cljs.core.truth_(inst_27694)){
var statearr_27806_27880 = state_27759__$1;
(statearr_27806_27880[(1)] = (26));

} else {
var statearr_27807_27881 = state_27759__$1;
(statearr_27807_27881[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (34))){
var inst_27728 = (state_27759[(2)]);
var state_27759__$1 = state_27759;
if(cljs.core.truth_(inst_27728)){
var statearr_27808_27882 = state_27759__$1;
(statearr_27808_27882[(1)] = (38));

} else {
var statearr_27809_27883 = state_27759__$1;
(statearr_27809_27883[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (17))){
var state_27759__$1 = state_27759;
var statearr_27810_27884 = state_27759__$1;
(statearr_27810_27884[(2)] = recompile_dependents);

(statearr_27810_27884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (3))){
var state_27759__$1 = state_27759;
var statearr_27811_27885 = state_27759__$1;
(statearr_27811_27885[(2)] = null);

(statearr_27811_27885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (12))){
var inst_27650 = (state_27759[(2)]);
var state_27759__$1 = state_27759;
var statearr_27812_27886 = state_27759__$1;
(statearr_27812_27886[(2)] = inst_27650);

(statearr_27812_27886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (2))){
var inst_27612 = (state_27759[(13)]);
var inst_27619 = cljs.core.seq.call(null,inst_27612);
var inst_27620 = inst_27619;
var inst_27621 = null;
var inst_27622 = (0);
var inst_27623 = (0);
var state_27759__$1 = (function (){var statearr_27813 = state_27759;
(statearr_27813[(7)] = inst_27622);

(statearr_27813[(8)] = inst_27623);

(statearr_27813[(9)] = inst_27620);

(statearr_27813[(10)] = inst_27621);

return statearr_27813;
})();
var statearr_27814_27887 = state_27759__$1;
(statearr_27814_27887[(2)] = null);

(statearr_27814_27887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (23))){
var inst_27681 = (state_27759[(23)]);
var inst_27677 = (state_27759[(24)]);
var inst_27679 = (state_27759[(26)]);
var inst_27673 = (state_27759[(19)]);
var inst_27676 = (state_27759[(25)]);
var inst_27684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27686 = (function (){var all_files = inst_27673;
var res_SINGLEQUOTE_ = inst_27676;
var res = inst_27677;
var files_not_loaded = inst_27679;
var dependencies_that_loaded = inst_27681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27681,inst_27677,inst_27679,inst_27673,inst_27676,inst_27684,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27685){
var map__27815 = p__27685;
var map__27815__$1 = ((((!((map__27815 == null)))?((((map__27815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27815):map__27815);
var request_url = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27681,inst_27677,inst_27679,inst_27673,inst_27676,inst_27684,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27687 = cljs.core.reverse.call(null,inst_27681);
var inst_27688 = cljs.core.map.call(null,inst_27686,inst_27687);
var inst_27689 = cljs.core.pr_str.call(null,inst_27688);
var inst_27690 = figwheel.client.utils.log.call(null,inst_27689);
var state_27759__$1 = (function (){var statearr_27817 = state_27759;
(statearr_27817[(31)] = inst_27684);

return statearr_27817;
})();
var statearr_27818_27888 = state_27759__$1;
(statearr_27818_27888[(2)] = inst_27690);

(statearr_27818_27888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (35))){
var state_27759__$1 = state_27759;
var statearr_27819_27889 = state_27759__$1;
(statearr_27819_27889[(2)] = true);

(statearr_27819_27889[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (19))){
var inst_27663 = (state_27759[(12)]);
var inst_27669 = figwheel.client.file_reloading.expand_files.call(null,inst_27663);
var state_27759__$1 = state_27759;
var statearr_27820_27890 = state_27759__$1;
(statearr_27820_27890[(2)] = inst_27669);

(statearr_27820_27890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (11))){
var state_27759__$1 = state_27759;
var statearr_27821_27891 = state_27759__$1;
(statearr_27821_27891[(2)] = null);

(statearr_27821_27891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (9))){
var inst_27652 = (state_27759[(2)]);
var state_27759__$1 = state_27759;
var statearr_27822_27892 = state_27759__$1;
(statearr_27822_27892[(2)] = inst_27652);

(statearr_27822_27892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (5))){
var inst_27622 = (state_27759[(7)]);
var inst_27623 = (state_27759[(8)]);
var inst_27625 = (inst_27623 < inst_27622);
var inst_27626 = inst_27625;
var state_27759__$1 = state_27759;
if(cljs.core.truth_(inst_27626)){
var statearr_27823_27893 = state_27759__$1;
(statearr_27823_27893[(1)] = (7));

} else {
var statearr_27824_27894 = state_27759__$1;
(statearr_27824_27894[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (14))){
var inst_27633 = (state_27759[(22)]);
var inst_27642 = cljs.core.first.call(null,inst_27633);
var inst_27643 = figwheel.client.file_reloading.eval_body.call(null,inst_27642,opts);
var inst_27644 = cljs.core.next.call(null,inst_27633);
var inst_27620 = inst_27644;
var inst_27621 = null;
var inst_27622 = (0);
var inst_27623 = (0);
var state_27759__$1 = (function (){var statearr_27825 = state_27759;
(statearr_27825[(7)] = inst_27622);

(statearr_27825[(8)] = inst_27623);

(statearr_27825[(9)] = inst_27620);

(statearr_27825[(10)] = inst_27621);

(statearr_27825[(32)] = inst_27643);

return statearr_27825;
})();
var statearr_27826_27895 = state_27759__$1;
(statearr_27826_27895[(2)] = null);

(statearr_27826_27895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (45))){
var state_27759__$1 = state_27759;
var statearr_27827_27896 = state_27759__$1;
(statearr_27827_27896[(2)] = null);

(statearr_27827_27896[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (26))){
var inst_27681 = (state_27759[(23)]);
var inst_27677 = (state_27759[(24)]);
var inst_27679 = (state_27759[(26)]);
var inst_27673 = (state_27759[(19)]);
var inst_27676 = (state_27759[(25)]);
var inst_27696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27698 = (function (){var all_files = inst_27673;
var res_SINGLEQUOTE_ = inst_27676;
var res = inst_27677;
var files_not_loaded = inst_27679;
var dependencies_that_loaded = inst_27681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27681,inst_27677,inst_27679,inst_27673,inst_27676,inst_27696,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27697){
var map__27828 = p__27697;
var map__27828__$1 = ((((!((map__27828 == null)))?((((map__27828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27828):map__27828);
var namespace = cljs.core.get.call(null,map__27828__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27828__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27681,inst_27677,inst_27679,inst_27673,inst_27676,inst_27696,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27699 = cljs.core.map.call(null,inst_27698,inst_27677);
var inst_27700 = cljs.core.pr_str.call(null,inst_27699);
var inst_27701 = figwheel.client.utils.log.call(null,inst_27700);
var inst_27702 = (function (){var all_files = inst_27673;
var res_SINGLEQUOTE_ = inst_27676;
var res = inst_27677;
var files_not_loaded = inst_27679;
var dependencies_that_loaded = inst_27681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27681,inst_27677,inst_27679,inst_27673,inst_27676,inst_27696,inst_27698,inst_27699,inst_27700,inst_27701,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27681,inst_27677,inst_27679,inst_27673,inst_27676,inst_27696,inst_27698,inst_27699,inst_27700,inst_27701,state_val_27760,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27703 = setTimeout(inst_27702,(10));
var state_27759__$1 = (function (){var statearr_27830 = state_27759;
(statearr_27830[(33)] = inst_27701);

(statearr_27830[(34)] = inst_27696);

return statearr_27830;
})();
var statearr_27831_27897 = state_27759__$1;
(statearr_27831_27897[(2)] = inst_27703);

(statearr_27831_27897[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (16))){
var state_27759__$1 = state_27759;
var statearr_27832_27898 = state_27759__$1;
(statearr_27832_27898[(2)] = reload_dependents);

(statearr_27832_27898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (38))){
var inst_27713 = (state_27759[(16)]);
var inst_27730 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27713);
var state_27759__$1 = state_27759;
var statearr_27833_27899 = state_27759__$1;
(statearr_27833_27899[(2)] = inst_27730);

(statearr_27833_27899[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (30))){
var state_27759__$1 = state_27759;
var statearr_27834_27900 = state_27759__$1;
(statearr_27834_27900[(2)] = null);

(statearr_27834_27900[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (10))){
var inst_27633 = (state_27759[(22)]);
var inst_27635 = cljs.core.chunked_seq_QMARK_.call(null,inst_27633);
var state_27759__$1 = state_27759;
if(inst_27635){
var statearr_27835_27901 = state_27759__$1;
(statearr_27835_27901[(1)] = (13));

} else {
var statearr_27836_27902 = state_27759__$1;
(statearr_27836_27902[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (18))){
var inst_27667 = (state_27759[(2)]);
var state_27759__$1 = state_27759;
if(cljs.core.truth_(inst_27667)){
var statearr_27837_27903 = state_27759__$1;
(statearr_27837_27903[(1)] = (19));

} else {
var statearr_27838_27904 = state_27759__$1;
(statearr_27838_27904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (42))){
var state_27759__$1 = state_27759;
var statearr_27839_27905 = state_27759__$1;
(statearr_27839_27905[(2)] = null);

(statearr_27839_27905[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (37))){
var inst_27725 = (state_27759[(2)]);
var state_27759__$1 = state_27759;
var statearr_27840_27906 = state_27759__$1;
(statearr_27840_27906[(2)] = inst_27725);

(statearr_27840_27906[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27760 === (8))){
var inst_27633 = (state_27759[(22)]);
var inst_27620 = (state_27759[(9)]);
var inst_27633__$1 = cljs.core.seq.call(null,inst_27620);
var state_27759__$1 = (function (){var statearr_27841 = state_27759;
(statearr_27841[(22)] = inst_27633__$1);

return statearr_27841;
})();
if(inst_27633__$1){
var statearr_27842_27907 = state_27759__$1;
(statearr_27842_27907[(1)] = (10));

} else {
var statearr_27843_27908 = state_27759__$1;
(statearr_27843_27908[(1)] = (11));

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
});})(c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20626__auto__,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto____0 = (function (){
var statearr_27847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27847[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto__);

(statearr_27847[(1)] = (1));

return statearr_27847;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto____1 = (function (state_27759){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_27759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e27848){if((e27848 instanceof Object)){
var ex__20630__auto__ = e27848;
var statearr_27849_27909 = state_27759;
(statearr_27849_27909[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27910 = state_27759;
state_27759 = G__27910;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto__ = function(state_27759){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto____1.call(this,state_27759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20693__auto__ = (function (){var statearr_27850 = f__20692__auto__.call(null);
(statearr_27850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto__);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto__,map__27605,map__27605__$1,opts,before_jsload,on_jsload,reload_dependents,map__27606,map__27606__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20691__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27913,link){
var map__27916 = p__27913;
var map__27916__$1 = ((((!((map__27916 == null)))?((((map__27916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27916):map__27916);
var file = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27916,map__27916__$1,file){
return (function (p1__27911_SHARP_,p2__27912_SHARP_){
if(cljs.core._EQ_.call(null,p1__27911_SHARP_,p2__27912_SHARP_)){
return p1__27911_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27916,map__27916__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27922){
var map__27923 = p__27922;
var map__27923__$1 = ((((!((map__27923 == null)))?((((map__27923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27923):map__27923);
var match_length = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27918_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27918_SHARP_);
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
var args27925 = [];
var len__17833__auto___27928 = arguments.length;
var i__17834__auto___27929 = (0);
while(true){
if((i__17834__auto___27929 < len__17833__auto___27928)){
args27925.push((arguments[i__17834__auto___27929]));

var G__27930 = (i__17834__auto___27929 + (1));
i__17834__auto___27929 = G__27930;
continue;
} else {
}
break;
}

var G__27927 = args27925.length;
switch (G__27927) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27925.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27932_SHARP_,p2__27933_SHARP_){
return cljs.core.assoc.call(null,p1__27932_SHARP_,cljs.core.get.call(null,p2__27933_SHARP_,key),p2__27933_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27934){
var map__27937 = p__27934;
var map__27937__$1 = ((((!((map__27937 == null)))?((((map__27937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27937):map__27937);
var f_data = map__27937__$1;
var file = cljs.core.get.call(null,map__27937__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27939,files_msg){
var map__27946 = p__27939;
var map__27946__$1 = ((((!((map__27946 == null)))?((((map__27946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27946):map__27946);
var opts = map__27946__$1;
var on_cssload = cljs.core.get.call(null,map__27946__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27948_27952 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27949_27953 = null;
var count__27950_27954 = (0);
var i__27951_27955 = (0);
while(true){
if((i__27951_27955 < count__27950_27954)){
var f_27956 = cljs.core._nth.call(null,chunk__27949_27953,i__27951_27955);
figwheel.client.file_reloading.reload_css_file.call(null,f_27956);

var G__27957 = seq__27948_27952;
var G__27958 = chunk__27949_27953;
var G__27959 = count__27950_27954;
var G__27960 = (i__27951_27955 + (1));
seq__27948_27952 = G__27957;
chunk__27949_27953 = G__27958;
count__27950_27954 = G__27959;
i__27951_27955 = G__27960;
continue;
} else {
var temp__4657__auto___27961 = cljs.core.seq.call(null,seq__27948_27952);
if(temp__4657__auto___27961){
var seq__27948_27962__$1 = temp__4657__auto___27961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27948_27962__$1)){
var c__17578__auto___27963 = cljs.core.chunk_first.call(null,seq__27948_27962__$1);
var G__27964 = cljs.core.chunk_rest.call(null,seq__27948_27962__$1);
var G__27965 = c__17578__auto___27963;
var G__27966 = cljs.core.count.call(null,c__17578__auto___27963);
var G__27967 = (0);
seq__27948_27952 = G__27964;
chunk__27949_27953 = G__27965;
count__27950_27954 = G__27966;
i__27951_27955 = G__27967;
continue;
} else {
var f_27968 = cljs.core.first.call(null,seq__27948_27962__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27968);

var G__27969 = cljs.core.next.call(null,seq__27948_27962__$1);
var G__27970 = null;
var G__27971 = (0);
var G__27972 = (0);
seq__27948_27952 = G__27969;
chunk__27949_27953 = G__27970;
count__27950_27954 = G__27971;
i__27951_27955 = G__27972;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27946,map__27946__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27946,map__27946__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map