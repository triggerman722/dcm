// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27227_27241 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27228_27242 = null;
var count__27229_27243 = (0);
var i__27230_27244 = (0);
while(true){
if((i__27230_27244 < count__27229_27243)){
var f_27245 = cljs.core._nth.call(null,chunk__27228_27242,i__27230_27244);
cljs.core.println.call(null,"  ",f_27245);

var G__27246 = seq__27227_27241;
var G__27247 = chunk__27228_27242;
var G__27248 = count__27229_27243;
var G__27249 = (i__27230_27244 + (1));
seq__27227_27241 = G__27246;
chunk__27228_27242 = G__27247;
count__27229_27243 = G__27248;
i__27230_27244 = G__27249;
continue;
} else {
var temp__4657__auto___27250 = cljs.core.seq.call(null,seq__27227_27241);
if(temp__4657__auto___27250){
var seq__27227_27251__$1 = temp__4657__auto___27250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27227_27251__$1)){
var c__17578__auto___27252 = cljs.core.chunk_first.call(null,seq__27227_27251__$1);
var G__27253 = cljs.core.chunk_rest.call(null,seq__27227_27251__$1);
var G__27254 = c__17578__auto___27252;
var G__27255 = cljs.core.count.call(null,c__17578__auto___27252);
var G__27256 = (0);
seq__27227_27241 = G__27253;
chunk__27228_27242 = G__27254;
count__27229_27243 = G__27255;
i__27230_27244 = G__27256;
continue;
} else {
var f_27257 = cljs.core.first.call(null,seq__27227_27251__$1);
cljs.core.println.call(null,"  ",f_27257);

var G__27258 = cljs.core.next.call(null,seq__27227_27251__$1);
var G__27259 = null;
var G__27260 = (0);
var G__27261 = (0);
seq__27227_27241 = G__27258;
chunk__27228_27242 = G__27259;
count__27229_27243 = G__27260;
i__27230_27244 = G__27261;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27262 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16775__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27262);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27262)))?cljs.core.second.call(null,arglists_27262):arglists_27262));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27231 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27232 = null;
var count__27233 = (0);
var i__27234 = (0);
while(true){
if((i__27234 < count__27233)){
var vec__27235 = cljs.core._nth.call(null,chunk__27232,i__27234);
var name = cljs.core.nth.call(null,vec__27235,(0),null);
var map__27236 = cljs.core.nth.call(null,vec__27235,(1),null);
var map__27236__$1 = ((((!((map__27236 == null)))?((((map__27236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27236):map__27236);
var doc = cljs.core.get.call(null,map__27236__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27236__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27263 = seq__27231;
var G__27264 = chunk__27232;
var G__27265 = count__27233;
var G__27266 = (i__27234 + (1));
seq__27231 = G__27263;
chunk__27232 = G__27264;
count__27233 = G__27265;
i__27234 = G__27266;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27231);
if(temp__4657__auto__){
var seq__27231__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27231__$1)){
var c__17578__auto__ = cljs.core.chunk_first.call(null,seq__27231__$1);
var G__27267 = cljs.core.chunk_rest.call(null,seq__27231__$1);
var G__27268 = c__17578__auto__;
var G__27269 = cljs.core.count.call(null,c__17578__auto__);
var G__27270 = (0);
seq__27231 = G__27267;
chunk__27232 = G__27268;
count__27233 = G__27269;
i__27234 = G__27270;
continue;
} else {
var vec__27238 = cljs.core.first.call(null,seq__27231__$1);
var name = cljs.core.nth.call(null,vec__27238,(0),null);
var map__27239 = cljs.core.nth.call(null,vec__27238,(1),null);
var map__27239__$1 = ((((!((map__27239 == null)))?((((map__27239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27239):map__27239);
var doc = cljs.core.get.call(null,map__27239__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27239__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27271 = cljs.core.next.call(null,seq__27231__$1);
var G__27272 = null;
var G__27273 = (0);
var G__27274 = (0);
seq__27231 = G__27271;
chunk__27232 = G__27272;
count__27233 = G__27273;
i__27234 = G__27274;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map