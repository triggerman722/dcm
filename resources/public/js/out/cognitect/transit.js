// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__25119_25123 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__25120_25124 = null;
var count__25121_25125 = (0);
var i__25122_25126 = (0);
while(true){
if((i__25122_25126 < count__25121_25125)){
var k_25127 = cljs.core._nth.call(null,chunk__25120_25124,i__25122_25126);
var v_25128 = (b[k_25127]);
(a[k_25127] = v_25128);

var G__25129 = seq__25119_25123;
var G__25130 = chunk__25120_25124;
var G__25131 = count__25121_25125;
var G__25132 = (i__25122_25126 + (1));
seq__25119_25123 = G__25129;
chunk__25120_25124 = G__25130;
count__25121_25125 = G__25131;
i__25122_25126 = G__25132;
continue;
} else {
var temp__4657__auto___25133 = cljs.core.seq.call(null,seq__25119_25123);
if(temp__4657__auto___25133){
var seq__25119_25134__$1 = temp__4657__auto___25133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25119_25134__$1)){
var c__17578__auto___25135 = cljs.core.chunk_first.call(null,seq__25119_25134__$1);
var G__25136 = cljs.core.chunk_rest.call(null,seq__25119_25134__$1);
var G__25137 = c__17578__auto___25135;
var G__25138 = cljs.core.count.call(null,c__17578__auto___25135);
var G__25139 = (0);
seq__25119_25123 = G__25136;
chunk__25120_25124 = G__25137;
count__25121_25125 = G__25138;
i__25122_25126 = G__25139;
continue;
} else {
var k_25140 = cljs.core.first.call(null,seq__25119_25134__$1);
var v_25141 = (b[k_25140]);
(a[k_25140] = v_25141);

var G__25142 = cljs.core.next.call(null,seq__25119_25134__$1);
var G__25143 = null;
var G__25144 = (0);
var G__25145 = (0);
seq__25119_25123 = G__25142;
chunk__25120_25124 = G__25143;
count__25121_25125 = G__25144;
i__25122_25126 = G__25145;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args25146 = [];
var len__17833__auto___25149 = arguments.length;
var i__17834__auto___25150 = (0);
while(true){
if((i__17834__auto___25150 < len__17833__auto___25149)){
args25146.push((arguments[i__17834__auto___25150]));

var G__25151 = (i__17834__auto___25150 + (1));
i__17834__auto___25150 = G__25151;
continue;
} else {
}
break;
}

var G__25148 = args25146.length;
switch (G__25148) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25146.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__25153 = (i + (2));
var G__25154 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__25153;
ret = G__25154;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25155_25159 = cljs.core.seq.call(null,v);
var chunk__25156_25160 = null;
var count__25157_25161 = (0);
var i__25158_25162 = (0);
while(true){
if((i__25158_25162 < count__25157_25161)){
var x_25163 = cljs.core._nth.call(null,chunk__25156_25160,i__25158_25162);
ret.push(x_25163);

var G__25164 = seq__25155_25159;
var G__25165 = chunk__25156_25160;
var G__25166 = count__25157_25161;
var G__25167 = (i__25158_25162 + (1));
seq__25155_25159 = G__25164;
chunk__25156_25160 = G__25165;
count__25157_25161 = G__25166;
i__25158_25162 = G__25167;
continue;
} else {
var temp__4657__auto___25168 = cljs.core.seq.call(null,seq__25155_25159);
if(temp__4657__auto___25168){
var seq__25155_25169__$1 = temp__4657__auto___25168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25155_25169__$1)){
var c__17578__auto___25170 = cljs.core.chunk_first.call(null,seq__25155_25169__$1);
var G__25171 = cljs.core.chunk_rest.call(null,seq__25155_25169__$1);
var G__25172 = c__17578__auto___25170;
var G__25173 = cljs.core.count.call(null,c__17578__auto___25170);
var G__25174 = (0);
seq__25155_25159 = G__25171;
chunk__25156_25160 = G__25172;
count__25157_25161 = G__25173;
i__25158_25162 = G__25174;
continue;
} else {
var x_25175 = cljs.core.first.call(null,seq__25155_25169__$1);
ret.push(x_25175);

var G__25176 = cljs.core.next.call(null,seq__25155_25169__$1);
var G__25177 = null;
var G__25178 = (0);
var G__25179 = (0);
seq__25155_25159 = G__25176;
chunk__25156_25160 = G__25177;
count__25157_25161 = G__25178;
i__25158_25162 = G__25179;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25180_25184 = cljs.core.seq.call(null,v);
var chunk__25181_25185 = null;
var count__25182_25186 = (0);
var i__25183_25187 = (0);
while(true){
if((i__25183_25187 < count__25182_25186)){
var x_25188 = cljs.core._nth.call(null,chunk__25181_25185,i__25183_25187);
ret.push(x_25188);

var G__25189 = seq__25180_25184;
var G__25190 = chunk__25181_25185;
var G__25191 = count__25182_25186;
var G__25192 = (i__25183_25187 + (1));
seq__25180_25184 = G__25189;
chunk__25181_25185 = G__25190;
count__25182_25186 = G__25191;
i__25183_25187 = G__25192;
continue;
} else {
var temp__4657__auto___25193 = cljs.core.seq.call(null,seq__25180_25184);
if(temp__4657__auto___25193){
var seq__25180_25194__$1 = temp__4657__auto___25193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25180_25194__$1)){
var c__17578__auto___25195 = cljs.core.chunk_first.call(null,seq__25180_25194__$1);
var G__25196 = cljs.core.chunk_rest.call(null,seq__25180_25194__$1);
var G__25197 = c__17578__auto___25195;
var G__25198 = cljs.core.count.call(null,c__17578__auto___25195);
var G__25199 = (0);
seq__25180_25184 = G__25196;
chunk__25181_25185 = G__25197;
count__25182_25186 = G__25198;
i__25183_25187 = G__25199;
continue;
} else {
var x_25200 = cljs.core.first.call(null,seq__25180_25194__$1);
ret.push(x_25200);

var G__25201 = cljs.core.next.call(null,seq__25180_25194__$1);
var G__25202 = null;
var G__25203 = (0);
var G__25204 = (0);
seq__25180_25184 = G__25201;
chunk__25181_25185 = G__25202;
count__25182_25186 = G__25203;
i__25183_25187 = G__25204;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25205_25209 = cljs.core.seq.call(null,v);
var chunk__25206_25210 = null;
var count__25207_25211 = (0);
var i__25208_25212 = (0);
while(true){
if((i__25208_25212 < count__25207_25211)){
var x_25213 = cljs.core._nth.call(null,chunk__25206_25210,i__25208_25212);
ret.push(x_25213);

var G__25214 = seq__25205_25209;
var G__25215 = chunk__25206_25210;
var G__25216 = count__25207_25211;
var G__25217 = (i__25208_25212 + (1));
seq__25205_25209 = G__25214;
chunk__25206_25210 = G__25215;
count__25207_25211 = G__25216;
i__25208_25212 = G__25217;
continue;
} else {
var temp__4657__auto___25218 = cljs.core.seq.call(null,seq__25205_25209);
if(temp__4657__auto___25218){
var seq__25205_25219__$1 = temp__4657__auto___25218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25205_25219__$1)){
var c__17578__auto___25220 = cljs.core.chunk_first.call(null,seq__25205_25219__$1);
var G__25221 = cljs.core.chunk_rest.call(null,seq__25205_25219__$1);
var G__25222 = c__17578__auto___25220;
var G__25223 = cljs.core.count.call(null,c__17578__auto___25220);
var G__25224 = (0);
seq__25205_25209 = G__25221;
chunk__25206_25210 = G__25222;
count__25207_25211 = G__25223;
i__25208_25212 = G__25224;
continue;
} else {
var x_25225 = cljs.core.first.call(null,seq__25205_25219__$1);
ret.push(x_25225);

var G__25226 = cljs.core.next.call(null,seq__25205_25219__$1);
var G__25227 = null;
var G__25228 = (0);
var G__25229 = (0);
seq__25205_25209 = G__25226;
chunk__25206_25210 = G__25227;
count__25207_25211 = G__25228;
i__25208_25212 = G__25229;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args25230 = [];
var len__17833__auto___25241 = arguments.length;
var i__17834__auto___25242 = (0);
while(true){
if((i__17834__auto___25242 < len__17833__auto___25241)){
args25230.push((arguments[i__17834__auto___25242]));

var G__25243 = (i__17834__auto___25242 + (1));
i__17834__auto___25242 = G__25243;
continue;
} else {
}
break;
}

var G__25232 = args25230.length;
switch (G__25232) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25230.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__25233 = obj;
G__25233.push(kfn.call(null,k),vfn.call(null,v));

return G__25233;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x25234 = cljs.core.clone.call(null,handlers);
x25234.forEach = ((function (x25234,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__25235 = cljs.core.seq.call(null,coll);
var chunk__25236 = null;
var count__25237 = (0);
var i__25238 = (0);
while(true){
if((i__25238 < count__25237)){
var vec__25239 = cljs.core._nth.call(null,chunk__25236,i__25238);
var k = cljs.core.nth.call(null,vec__25239,(0),null);
var v = cljs.core.nth.call(null,vec__25239,(1),null);
f.call(null,v,k);

var G__25245 = seq__25235;
var G__25246 = chunk__25236;
var G__25247 = count__25237;
var G__25248 = (i__25238 + (1));
seq__25235 = G__25245;
chunk__25236 = G__25246;
count__25237 = G__25247;
i__25238 = G__25248;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25235);
if(temp__4657__auto__){
var seq__25235__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25235__$1)){
var c__17578__auto__ = cljs.core.chunk_first.call(null,seq__25235__$1);
var G__25249 = cljs.core.chunk_rest.call(null,seq__25235__$1);
var G__25250 = c__17578__auto__;
var G__25251 = cljs.core.count.call(null,c__17578__auto__);
var G__25252 = (0);
seq__25235 = G__25249;
chunk__25236 = G__25250;
count__25237 = G__25251;
i__25238 = G__25252;
continue;
} else {
var vec__25240 = cljs.core.first.call(null,seq__25235__$1);
var k = cljs.core.nth.call(null,vec__25240,(0),null);
var v = cljs.core.nth.call(null,vec__25240,(1),null);
f.call(null,v,k);

var G__25253 = cljs.core.next.call(null,seq__25235__$1);
var G__25254 = null;
var G__25255 = (0);
var G__25256 = (0);
seq__25235 = G__25253;
chunk__25236 = G__25254;
count__25237 = G__25255;
i__25238 = G__25256;
continue;
}
} else {
return null;
}
}
break;
}
});})(x25234,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x25234;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args25257 = [];
var len__17833__auto___25263 = arguments.length;
var i__17834__auto___25264 = (0);
while(true){
if((i__17834__auto___25264 < len__17833__auto___25263)){
args25257.push((arguments[i__17834__auto___25264]));

var G__25265 = (i__17834__auto___25264 + (1));
i__17834__auto___25264 = G__25265;
continue;
} else {
}
break;
}

var G__25259 = args25257.length;
switch (G__25259) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25257.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit25260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit25260 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta25261){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta25261 = meta25261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit25260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25262,meta25261__$1){
var self__ = this;
var _25262__$1 = this;
return (new cognitect.transit.t_cognitect$transit25260(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta25261__$1));
});

cognitect.transit.t_cognitect$transit25260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25262){
var self__ = this;
var _25262__$1 = this;
return self__.meta25261;
});

cognitect.transit.t_cognitect$transit25260.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25260.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25260.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25260.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta25261","meta25261",489657817,null)], null);
});

cognitect.transit.t_cognitect$transit25260.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit25260.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit25260";

cognitect.transit.t_cognitect$transit25260.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cognitect.transit/t_cognitect$transit25260");
});

cognitect.transit.__GT_t_cognitect$transit25260 = (function cognitect$transit$__GT_t_cognitect$transit25260(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25261){
return (new cognitect.transit.t_cognitect$transit25260(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25261));
});

}

return (new cognitect.transit.t_cognitect$transit25260(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16775__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map