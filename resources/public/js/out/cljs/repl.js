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
var seq__26913_26927 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26914_26928 = null;
var count__26915_26929 = (0);
var i__26916_26930 = (0);
while(true){
if((i__26916_26930 < count__26915_26929)){
var f_26931 = cljs.core._nth.call(null,chunk__26914_26928,i__26916_26930);
cljs.core.println.call(null,"  ",f_26931);

var G__26932 = seq__26913_26927;
var G__26933 = chunk__26914_26928;
var G__26934 = count__26915_26929;
var G__26935 = (i__26916_26930 + (1));
seq__26913_26927 = G__26932;
chunk__26914_26928 = G__26933;
count__26915_26929 = G__26934;
i__26916_26930 = G__26935;
continue;
} else {
var temp__4657__auto___26936 = cljs.core.seq.call(null,seq__26913_26927);
if(temp__4657__auto___26936){
var seq__26913_26937__$1 = temp__4657__auto___26936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26913_26937__$1)){
var c__17578__auto___26938 = cljs.core.chunk_first.call(null,seq__26913_26937__$1);
var G__26939 = cljs.core.chunk_rest.call(null,seq__26913_26937__$1);
var G__26940 = c__17578__auto___26938;
var G__26941 = cljs.core.count.call(null,c__17578__auto___26938);
var G__26942 = (0);
seq__26913_26927 = G__26939;
chunk__26914_26928 = G__26940;
count__26915_26929 = G__26941;
i__26916_26930 = G__26942;
continue;
} else {
var f_26943 = cljs.core.first.call(null,seq__26913_26937__$1);
cljs.core.println.call(null,"  ",f_26943);

var G__26944 = cljs.core.next.call(null,seq__26913_26937__$1);
var G__26945 = null;
var G__26946 = (0);
var G__26947 = (0);
seq__26913_26927 = G__26944;
chunk__26914_26928 = G__26945;
count__26915_26929 = G__26946;
i__26916_26930 = G__26947;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26948 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16775__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26948);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26948)))?cljs.core.second.call(null,arglists_26948):arglists_26948));
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
var seq__26917 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26918 = null;
var count__26919 = (0);
var i__26920 = (0);
while(true){
if((i__26920 < count__26919)){
var vec__26921 = cljs.core._nth.call(null,chunk__26918,i__26920);
var name = cljs.core.nth.call(null,vec__26921,(0),null);
var map__26922 = cljs.core.nth.call(null,vec__26921,(1),null);
var map__26922__$1 = ((((!((map__26922 == null)))?((((map__26922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26922):map__26922);
var doc = cljs.core.get.call(null,map__26922__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26922__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26949 = seq__26917;
var G__26950 = chunk__26918;
var G__26951 = count__26919;
var G__26952 = (i__26920 + (1));
seq__26917 = G__26949;
chunk__26918 = G__26950;
count__26919 = G__26951;
i__26920 = G__26952;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26917);
if(temp__4657__auto__){
var seq__26917__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26917__$1)){
var c__17578__auto__ = cljs.core.chunk_first.call(null,seq__26917__$1);
var G__26953 = cljs.core.chunk_rest.call(null,seq__26917__$1);
var G__26954 = c__17578__auto__;
var G__26955 = cljs.core.count.call(null,c__17578__auto__);
var G__26956 = (0);
seq__26917 = G__26953;
chunk__26918 = G__26954;
count__26919 = G__26955;
i__26920 = G__26956;
continue;
} else {
var vec__26924 = cljs.core.first.call(null,seq__26917__$1);
var name = cljs.core.nth.call(null,vec__26924,(0),null);
var map__26925 = cljs.core.nth.call(null,vec__26924,(1),null);
var map__26925__$1 = ((((!((map__26925 == null)))?((((map__26925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26925):map__26925);
var doc = cljs.core.get.call(null,map__26925__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26925__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26957 = cljs.core.next.call(null,seq__26917__$1);
var G__26958 = null;
var G__26959 = (0);
var G__26960 = (0);
seq__26917 = G__26957;
chunk__26918 = G__26958;
count__26919 = G__26959;
i__26920 = G__26960;
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