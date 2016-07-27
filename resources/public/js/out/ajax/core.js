// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response(interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request(interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5219__auto__,k__5220__auto__){
var self__ = this;
var this__5219__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5219__auto____$1,k__5220__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5221__auto__,k8274,else__5222__auto__){
var self__ = this;
var this__5221__auto____$1 = this;
var G__8276 = (((k8274 instanceof cljs.core.Keyword))?k8274.fqn:null);
switch (G__8276) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8274,else__5222__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__8277,opts){
var self__ = this;
var map__8278 = p__8277;
var map__8278__$1 = ((((!((map__8278 == null)))?((((map__8278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8278):map__8278);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8278__$1,cljs.core.cst$kw$request);
var map__8280 = this;
var map__8280__$1 = ((((!((map__8280 == null)))?((((map__8280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8280):map__8280);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8280__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__8282,xhrio){
var self__ = this;
var map__8283 = p__8282;
var map__8283__$1 = ((((!((map__8283 == null)))?((((map__8283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8283):map__8283);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8283__$1,cljs.core.cst$kw$response);
var map__8285 = this;
var map__8285__$1 = ((((!((map__8285 == null)))?((((map__8285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8285):map__8285);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8285__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5233__auto__,writer__5234__auto__,opts__5235__auto__){
var self__ = this;
var this__5233__auto____$1 = this;
var pr_pair__5236__auto__ = ((function (this__5233__auto____$1){
return (function (keyval__5237__auto__){
return cljs.core.pr_sequential_writer(writer__5234__auto__,cljs.core.pr_writer,""," ","",opts__5235__auto__,keyval__5237__auto__);
});})(this__5233__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5234__auto__,pr_pair__5236__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__5235__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8273){
var self__ = this;
var G__8273__$1 = this;
return (new cljs.core.RecordIter((0),G__8273__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),cljs.core._iterator(self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5217__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5213__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5223__auto__){
var self__ = this;
var this__5223__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5214__auto__){
var self__ = this;
var this__5214__auto____$1 = this;
var h__5040__auto__ = self__.__hash;
if(!((h__5040__auto__ == null))){
return h__5040__auto__;
} else {
var h__5040__auto____$1 = cljs.core.hash_imap(this__5214__auto____$1);
self__.__hash = h__5040__auto____$1;

return h__5040__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5215__auto__,other__5216__auto__){
var self__ = this;
var this__5215__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4593__auto__ = other__5216__auto__;
if(cljs.core.truth_(and__4593__auto__)){
var and__4593__auto____$1 = (this__5215__auto____$1.constructor === other__5216__auto__.constructor);
if(and__4593__auto____$1){
return cljs.core.equiv_map(this__5215__auto____$1,other__5216__auto__);
} else {
return and__4593__auto____$1;
}
} else {
return and__4593__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5228__auto__,k__5229__auto__){
var self__ = this;
var this__5228__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__5229__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5228__auto____$1),self__.__meta),k__5229__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5229__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5226__auto__,k__5227__auto__,G__8273){
var self__ = this;
var this__5226__auto____$1 = this;
var pred__8287 = cljs.core.keyword_identical_QMARK_;
var expr__8288 = k__5227__auto__;
if(cljs.core.truth_((pred__8287.cljs$core$IFn$_invoke$arity$2 ? pred__8287.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__8288) : pred__8287.call(null,cljs.core.cst$kw$name,expr__8288)))){
return (new ajax.core.StandardInterceptor(G__8273,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__8287.cljs$core$IFn$_invoke$arity$2 ? pred__8287.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$request,expr__8288) : pred__8287.call(null,cljs.core.cst$kw$request,expr__8288)))){
return (new ajax.core.StandardInterceptor(self__.name,G__8273,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__8287.cljs$core$IFn$_invoke$arity$2 ? pred__8287.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response,expr__8288) : pred__8287.call(null,cljs.core.cst$kw$response,expr__8288)))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__8273,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5227__auto__,G__8273),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5231__auto__){
var self__ = this;
var this__5231__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5218__auto__,G__8273){
var self__ = this;
var this__5218__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__8273,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5224__auto__,entry__5225__auto__){
var self__ = this;
var this__5224__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5225__auto__)){
return cljs.core._assoc(this__5224__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5225__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5225__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5224__auto____$1,entry__5225__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__5253__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__5253__auto__,writer__5254__auto__){
return cljs.core._write(writer__5254__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__8275){
return (new ajax.core.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__8275),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__8275),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__8275),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8275,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__4605__auto__ = ajax.protocols._get_response_header(response,"Content-Type");
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort(this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__8291,xhrio){
var map__8294 = p__8291;
var map__8294__$1 = ((((!((map__8294 == null)))?((((map__8294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8294):map__8294);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8294__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str(ajax.core.exception_message(e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.array_seq([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.array_seq([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__5670__auto__ = [];
var len__5663__auto___8300 = arguments.length;
var i__5664__auto___8301 = (0);
while(true){
if((i__5664__auto___8301 < len__5663__auto___8300)){
args__5670__auto__.push((arguments[i__5664__auto___8301]));

var G__8302 = (i__5664__auto___8301 + (1));
i__5664__auto___8301 = G__8302;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((3) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5671__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq8296){
var G__8297 = cljs.core.first(seq8296);
var seq8296__$1 = cljs.core.next(seq8296);
var G__8298 = cljs.core.first(seq8296__$1);
var seq8296__$2 = cljs.core.next(seq8296__$1);
var G__8299 = cljs.core.first(seq8296__$2);
var seq8296__$3 = cljs.core.next(seq8296__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__8297,G__8298,G__8299,seq8296__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8303_SHARP_){
return [cljs.core.str(p1__8303_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5219__auto__,k__5220__auto__){
var self__ = this;
var this__5219__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5219__auto____$1,k__5220__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5221__auto__,k8306,else__5222__auto__){
var self__ = this;
var this__5221__auto____$1 = this;
var G__8308 = (((k8306 instanceof cljs.core.Keyword))?k8306.fqn:null);
switch (G__8308) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8306,else__5222__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__8309,request){
var self__ = this;
var map__8310 = p__8309;
var map__8310__$1 = ((((!((map__8310 == null)))?((((map__8310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8310):map__8310);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8310__$1,cljs.core.cst$kw$content_DASH_type);
var map__8312 = this;
var map__8312__$1 = ((((!((map__8312 == null)))?((((map__8312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8312):map__8312);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8312__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__8312,map__8312__$1,content_type__$2,map__8310,map__8310__$1,content_type__$1){
return (function (p1__8304_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header(content_type__$2)], null),(function (){var or__4605__auto__ = p1__8304_SHARP_;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__8312,map__8312__$1,content_type__$2,map__8310,map__8310__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__8314,xhrio){
var self__ = this;
var map__8315 = p__8314;
var map__8315__$1 = ((((!((map__8315 == null)))?((((map__8315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8315):map__8315);
var format = map__8315__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8315__$1,cljs.core.cst$kw$read);
var map__8317 = this;
var map__8317__$1 = ((((!((map__8317 == null)))?((((map__8317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8317):map__8317);
var format__$1 = map__8317__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8317__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
var G__8320 = status;
switch (G__8320) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request failed.",cljs.core.cst$kw$failed) : fail.call(null,"Request failed.",cljs.core.cst$kw$failed));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request aborted by client.",cljs.core.cst$kw$aborted) : fail.call(null,"Request aborted by client.",cljs.core.cst$kw$aborted));
} else {
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request timed out.",cljs.core.cst$kw$timeout) : fail.call(null,"Request timed out.",cljs.core.cst$kw$timeout));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__8322 = ajax.protocols._status_text(xhrio);
var G__8323 = cljs.core.cst$kw$error;
var G__8324 = cljs.core.cst$kw$response;
var G__8325 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__8322,G__8323,G__8324,G__8325) : fail.call(null,G__8322,G__8323,G__8324,G__8325));
}
}catch (e8321){if((e8321 instanceof Object)){
var e = e8321;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e8321;

}
}
}
}catch (e8319){if((e8319 instanceof Object)){
var e = e8319;
var message = e.message;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.array_seq([cljs.core.cst$kw$exception,e], 0));
} else {
throw e8319;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5233__auto__,writer__5234__auto__,opts__5235__auto__){
var self__ = this;
var this__5233__auto____$1 = this;
var pr_pair__5236__auto__ = ((function (this__5233__auto____$1){
return (function (keyval__5237__auto__){
return cljs.core.pr_sequential_writer(writer__5234__auto__,cljs.core.pr_writer,""," ","",opts__5235__auto__,keyval__5237__auto__);
});})(this__5233__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5234__auto__,pr_pair__5236__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__5235__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8305){
var self__ = this;
var G__8305__$1 = this;
return (new cljs.core.RecordIter((0),G__8305__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),cljs.core._iterator(self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5217__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5213__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5223__auto__){
var self__ = this;
var this__5223__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5214__auto__){
var self__ = this;
var this__5214__auto____$1 = this;
var h__5040__auto__ = self__.__hash;
if(!((h__5040__auto__ == null))){
return h__5040__auto__;
} else {
var h__5040__auto____$1 = cljs.core.hash_imap(this__5214__auto____$1);
self__.__hash = h__5040__auto____$1;

return h__5040__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5215__auto__,other__5216__auto__){
var self__ = this;
var this__5215__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4593__auto__ = other__5216__auto__;
if(cljs.core.truth_(and__4593__auto__)){
var and__4593__auto____$1 = (this__5215__auto____$1.constructor === other__5216__auto__.constructor);
if(and__4593__auto____$1){
return cljs.core.equiv_map(this__5215__auto____$1,other__5216__auto__);
} else {
return and__4593__auto____$1;
}
} else {
return and__4593__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5228__auto__,k__5229__auto__){
var self__ = this;
var this__5228__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__5229__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5228__auto____$1),self__.__meta),k__5229__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5229__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5226__auto__,k__5227__auto__,G__8305){
var self__ = this;
var this__5226__auto____$1 = this;
var pred__8326 = cljs.core.keyword_identical_QMARK_;
var expr__8327 = k__5227__auto__;
if(cljs.core.truth_((pred__8326.cljs$core$IFn$_invoke$arity$2 ? pred__8326.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$read,expr__8327) : pred__8326.call(null,cljs.core.cst$kw$read,expr__8327)))){
return (new ajax.core.ResponseFormat(G__8305,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__8326.cljs$core$IFn$_invoke$arity$2 ? pred__8326.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$description,expr__8327) : pred__8326.call(null,cljs.core.cst$kw$description,expr__8327)))){
return (new ajax.core.ResponseFormat(self__.read,G__8305,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__8326.cljs$core$IFn$_invoke$arity$2 ? pred__8326.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$content_DASH_type,expr__8327) : pred__8326.call(null,cljs.core.cst$kw$content_DASH_type,expr__8327)))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__8305,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5227__auto__,G__8305),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5231__auto__){
var self__ = this;
var this__5231__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5218__auto__,G__8305){
var self__ = this;
var this__5218__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__8305,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5224__auto__,entry__5225__auto__){
var self__ = this;
var this__5224__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5225__auto__)){
return cljs.core._assoc(this__5224__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5225__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5225__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5224__auto____$1,entry__5225__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__5253__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__5253__auto__,writer__5254__auto__){
return cljs.core._write(writer__5254__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__8307){
return (new ajax.core.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__8307),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__8307),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__8307),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8307,cljs.core.cst$kw$read,cljs.core.array_seq([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0)),null));
});

ajax.core.params_to_str_old = (function ajax$core$params_to_str_old(params){
if(cljs.core.truth_(params)){
return (function (){var G__8332 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__8332);
})().toString();
} else {
return null;
}
});
ajax.core.param_to_str;
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args8333 = [];
var len__5663__auto___8342 = arguments.length;
var i__5664__auto___8343 = (0);
while(true){
if((i__5664__auto___8343 < len__5663__auto___8342)){
args8333.push((arguments[i__5664__auto___8343]));

var G__8344 = (i__5664__auto___8343 + (1));
i__5664__auto___8343 = G__8344;
continue;
} else {
}
break;
}

var G__8335 = args8333.length;
switch (G__8335) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8333.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
var G__8336 = prefix;
var G__8337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__8336,G__8337) : ajax.core.param_to_str.call(null,G__8336,G__8337));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
var G__8338 = prefix;
var G__8339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__8338,G__8339) : ajax.core.param_to_str.call(null,G__8338,G__8339));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
var G__8340 = prefix;
var G__8341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__8340,G__8341) : ajax.core.param_to_str.call(null,G__8340,G__8341));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args8346 = [];
var len__5663__auto___8353 = arguments.length;
var i__5664__auto___8354 = (0);
while(true){
if((i__5664__auto___8354 < len__5663__auto___8353)){
args8346.push((arguments[i__5664__auto___8354]));

var G__8355 = (i__5664__auto___8354 + (1));
i__5664__auto___8354 = G__8355;
continue;
} else {
}
break;
}

var G__8348 = args8346.length;
switch (G__8348) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8346.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__8349){
var vec__8350 = p__8349;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8350,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8350,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.array_seq([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__8351){
var vec__8352 = p__8351;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8352,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8352,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.array_seq([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8359){
var vec__8360 = p__8359;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8360,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8360,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.array_seq([cljs.core.seq(params)], 0))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5219__auto__,k__5220__auto__){
var self__ = this;
var this__5219__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5219__auto____$1,k__5220__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5221__auto__,k8363,else__5222__auto__){
var self__ = this;
var this__5221__auto____$1 = this;
var G__8365 = k8363;
switch (G__8365) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8363,else__5222__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__8366){
var self__ = this;
var map__8367 = p__8366;
var map__8367__$1 = ((((!((map__8367 == null)))?((((map__8367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8367):map__8367);
var request = map__8367__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8367__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,((function (___$1,map__8367,map__8367__$1,request,method){
return (function (p1__8361_SHARP_){
return ajax.core.uri_with_params(p1__8361_SHARP_,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__8367,map__8367__$1,request,method))
));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5233__auto__,writer__5234__auto__,opts__5235__auto__){
var self__ = this;
var this__5233__auto____$1 = this;
var pr_pair__5236__auto__ = ((function (this__5233__auto____$1){
return (function (keyval__5237__auto__){
return cljs.core.pr_sequential_writer(writer__5234__auto__,cljs.core.pr_writer,""," ","",opts__5235__auto__,keyval__5237__auto__);
});})(this__5233__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5234__auto__,pr_pair__5236__auto__,"#ajax.core.ProcessGet{",", ","}",opts__5235__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8362){
var self__ = this;
var G__8362__$1 = this;
return (new cljs.core.RecordIter((0),G__8362__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5217__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5213__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5223__auto__){
var self__ = this;
var this__5223__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5214__auto__){
var self__ = this;
var this__5214__auto____$1 = this;
var h__5040__auto__ = self__.__hash;
if(!((h__5040__auto__ == null))){
return h__5040__auto__;
} else {
var h__5040__auto____$1 = cljs.core.hash_imap(this__5214__auto____$1);
self__.__hash = h__5040__auto____$1;

return h__5040__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5215__auto__,other__5216__auto__){
var self__ = this;
var this__5215__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4593__auto__ = other__5216__auto__;
if(cljs.core.truth_(and__4593__auto__)){
var and__4593__auto____$1 = (this__5215__auto____$1.constructor === other__5216__auto__.constructor);
if(and__4593__auto____$1){
return cljs.core.equiv_map(this__5215__auto____$1,other__5216__auto__);
} else {
return and__4593__auto____$1;
}
} else {
return and__4593__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5228__auto__,k__5229__auto__){
var self__ = this;
var this__5228__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5229__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5228__auto____$1),self__.__meta),k__5229__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5229__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5226__auto__,k__5227__auto__,G__8362){
var self__ = this;
var this__5226__auto____$1 = this;
var pred__8369 = cljs.core.keyword_identical_QMARK_;
var expr__8370 = k__5227__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5227__auto__,G__8362),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5231__auto__){
var self__ = this;
var this__5231__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5218__auto__,G__8362){
var self__ = this;
var this__5218__auto____$1 = this;
return (new ajax.core.ProcessGet(G__8362,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5224__auto__,entry__5225__auto__){
var self__ = this;
var this__5224__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5225__auto__)){
return cljs.core._assoc(this__5224__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5225__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5225__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5224__auto____$1,entry__5225__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__5253__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__5253__auto__,writer__5254__auto__){
return cljs.core._write(writer__5254__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__8364){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__8364),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5219__auto__,k__5220__auto__){
var self__ = this;
var this__5219__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5219__auto____$1,k__5220__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5221__auto__,k8374,else__5222__auto__){
var self__ = this;
var this__5221__auto____$1 = this;
var G__8376 = k8374;
switch (G__8376) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8374,else__5222__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__8377){
var self__ = this;
var map__8378 = p__8377;
var map__8378__$1 = ((((!((map__8378 == null)))?((((map__8378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8378):map__8378);
var request = map__8378__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8378__$1,cljs.core.cst$kw$body);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8378__$1,cljs.core.cst$kw$params);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5233__auto__,writer__5234__auto__,opts__5235__auto__){
var self__ = this;
var this__5233__auto____$1 = this;
var pr_pair__5236__auto__ = ((function (this__5233__auto____$1){
return (function (keyval__5237__auto__){
return cljs.core.pr_sequential_writer(writer__5234__auto__,cljs.core.pr_writer,""," ","",opts__5235__auto__,keyval__5237__auto__);
});})(this__5233__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5234__auto__,pr_pair__5236__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__5235__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8373){
var self__ = this;
var G__8373__$1 = this;
return (new cljs.core.RecordIter((0),G__8373__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5217__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5213__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5223__auto__){
var self__ = this;
var this__5223__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5214__auto__){
var self__ = this;
var this__5214__auto____$1 = this;
var h__5040__auto__ = self__.__hash;
if(!((h__5040__auto__ == null))){
return h__5040__auto__;
} else {
var h__5040__auto____$1 = cljs.core.hash_imap(this__5214__auto____$1);
self__.__hash = h__5040__auto____$1;

return h__5040__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5215__auto__,other__5216__auto__){
var self__ = this;
var this__5215__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4593__auto__ = other__5216__auto__;
if(cljs.core.truth_(and__4593__auto__)){
var and__4593__auto____$1 = (this__5215__auto____$1.constructor === other__5216__auto__.constructor);
if(and__4593__auto____$1){
return cljs.core.equiv_map(this__5215__auto____$1,other__5216__auto__);
} else {
return and__4593__auto____$1;
}
} else {
return and__4593__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5228__auto__,k__5229__auto__){
var self__ = this;
var this__5228__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5229__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5228__auto____$1),self__.__meta),k__5229__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5229__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5226__auto__,k__5227__auto__,G__8373){
var self__ = this;
var this__5226__auto____$1 = this;
var pred__8380 = cljs.core.keyword_identical_QMARK_;
var expr__8381 = k__5227__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5227__auto__,G__8373),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5231__auto__){
var self__ = this;
var this__5231__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5218__auto__,G__8373){
var self__ = this;
var this__5218__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__8373,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5224__auto__,entry__5225__auto__){
var self__ = this;
var this__5224__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5225__auto__)){
return cljs.core._assoc(this__5224__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5225__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5225__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5224__auto____$1,entry__5225__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__5253__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__5253__auto__,writer__5254__auto__){
return cljs.core._write(writer__5254__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__8375){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__8375),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5219__auto__,k__5220__auto__){
var self__ = this;
var this__5219__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5219__auto____$1,k__5220__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5221__auto__,k8385,else__5222__auto__){
var self__ = this;
var this__5221__auto____$1 = this;
var G__8387 = k8385;
switch (G__8387) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8385,else__5222__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__8388){
var self__ = this;
var map__8389 = p__8388;
var map__8389__$1 = ((((!((map__8389 == null)))?((((map__8389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8389):map__8389);
var request = map__8389__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8389__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8389__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8389__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8389__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8389__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__8391 = ajax.core.get_request_format(format);
var map__8391__$1 = ((((!((map__8391 == null)))?((((map__8391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8391):map__8391);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8391__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8391__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.core.apply_request_format(write,params):ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__4605__auto__ = headers;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.array_seq([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.core.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5233__auto__,writer__5234__auto__,opts__5235__auto__){
var self__ = this;
var this__5233__auto____$1 = this;
var pr_pair__5236__auto__ = ((function (this__5233__auto____$1){
return (function (keyval__5237__auto__){
return cljs.core.pr_sequential_writer(writer__5234__auto__,cljs.core.pr_writer,""," ","",opts__5235__auto__,keyval__5237__auto__);
});})(this__5233__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5234__auto__,pr_pair__5236__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__5235__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8384){
var self__ = this;
var G__8384__$1 = this;
return (new cljs.core.RecordIter((0),G__8384__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5217__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5213__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5223__auto__){
var self__ = this;
var this__5223__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5214__auto__){
var self__ = this;
var this__5214__auto____$1 = this;
var h__5040__auto__ = self__.__hash;
if(!((h__5040__auto__ == null))){
return h__5040__auto__;
} else {
var h__5040__auto____$1 = cljs.core.hash_imap(this__5214__auto____$1);
self__.__hash = h__5040__auto____$1;

return h__5040__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5215__auto__,other__5216__auto__){
var self__ = this;
var this__5215__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4593__auto__ = other__5216__auto__;
if(cljs.core.truth_(and__4593__auto__)){
var and__4593__auto____$1 = (this__5215__auto____$1.constructor === other__5216__auto__.constructor);
if(and__4593__auto____$1){
return cljs.core.equiv_map(this__5215__auto____$1,other__5216__auto__);
} else {
return and__4593__auto____$1;
}
} else {
return and__4593__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5228__auto__,k__5229__auto__){
var self__ = this;
var this__5228__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5229__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5228__auto____$1),self__.__meta),k__5229__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5229__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5226__auto__,k__5227__auto__,G__8384){
var self__ = this;
var this__5226__auto____$1 = this;
var pred__8393 = cljs.core.keyword_identical_QMARK_;
var expr__8394 = k__5227__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5227__auto__,G__8384),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5231__auto__){
var self__ = this;
var this__5231__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5218__auto__,G__8384){
var self__ = this;
var this__5218__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__8384,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5224__auto__,entry__5225__auto__){
var self__ = this;
var this__5224__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5225__auto__)){
return cljs.core._assoc(this__5224__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5225__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5225__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5224__auto____$1,entry__5225__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__5253__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__5253__auto__,writer__5254__auto__){
return cljs.core._write(writer__5254__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__8386){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__8386),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__8397){
var map__8400 = p__8397;
var map__8400__$1 = ((((!((map__8400 == null)))?((((map__8400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8400):map__8400);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8400__$1,cljs.core.cst$kw$type);
var or__4605__auto__ = type;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cljs.core.cst$kw$json;
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__4605__auto__ = cljs.core.cst$kw$writer.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write(writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args8402 = [];
var len__5663__auto___8405 = arguments.length;
var i__5664__auto___8406 = (0);
while(true){
if((i__5664__auto___8406 < len__5663__auto___8405)){
args8402.push((arguments[i__5664__auto___8406]));

var G__8407 = (i__5664__auto___8406 + (1));
i__5664__auto___8406 = G__8407;
continue;
} else {
}
break;
}

var G__8404 = args8402.length;
switch (G__8404) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8402.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type(request);
var mime_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$json))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.transit_write_fn(type,request),cljs.core.cst$kw$content_DASH_type,[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__4605__auto__ = cljs.core.cst$kw$reader.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read(reader,ajax.protocols._body(response));
if(cljs.core.truth_(cljs.core.cst$kw$raw.cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args8409 = [];
var len__5663__auto___8412 = arguments.length;
var i__5664__auto___8413 = (0);
while(true){
if((i__5664__auto___8413 < len__5663__auto___8412)){
args8409.push((arguments[i__5664__auto___8413]));

var G__8414 = (i__5664__auto___8413 + (1));
i__5664__auto___8413 = G__8414;
continue;
} else {
}
break;
}

var G__8411 = args8409.length;
switch (G__8411) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8409.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2(ajax.core.transit_type(request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.transit_read_fn(request),cljs.core.cst$kw$description,"Transit",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(ajax.core.params_to_str),cljs.core.cst$kw$content_DASH_type,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args8416 = [];
var len__5663__auto___8419 = arguments.length;
var i__5664__auto___8420 = (0);
while(true){
if((i__5664__auto___8420 < len__5663__auto___8419)){
args8416.push((arguments[i__5664__auto___8420]));

var G__8421 = (i__5664__auto___8420 + (1));
i__5664__auto___8420 = G__8421;
continue;
} else {
}
break;
}

var G__8418 = args8416.length;
switch (G__8418) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8416.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"raw text",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(cljs.core.identity),cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.write_json,cljs.core.cst$kw$content_DASH_type,"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__4593__auto__ = prefix;
if(cljs.core.truth_(and__4593__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4593__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args8423 = [];
var len__5663__auto___8426 = arguments.length;
var i__5664__auto___8427 = (0);
while(true){
if((i__5664__auto___8427 < len__5663__auto___8426)){
args8423.push((arguments[i__5664__auto___8427]));

var G__8428 = (i__5664__auto___8427 + (1));
i__5664__auto___8427 = G__8428;
continue;
} else {
}
break;
}

var G__8425 = args8423.length;
switch (G__8425) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8423.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args8430 = [];
var len__5663__auto___8436 = arguments.length;
var i__5664__auto___8437 = (0);
while(true){
if((i__5664__auto___8437 < len__5663__auto___8436)){
args8430.push((arguments[i__5664__auto___8437]));

var G__8438 = (i__5664__auto___8437 + (1));
i__5664__auto___8437 = G__8438;
continue;
} else {
}
break;
}

var G__8432 = args8430.length;
switch (G__8432) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8430.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__8433){
var map__8434 = p__8433;
var map__8434__$1 = ((((!((map__8434 == null)))?((((map__8434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8434):map__8434);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8434__$1,cljs.core.cst$kw$prefix);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8434__$1,cljs.core.cst$kw$keywords_QMARK_);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8434__$1,cljs.core.cst$kw$raw);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.cst$kw$description,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args8440 = [];
var len__5663__auto___8443 = arguments.length;
var i__5664__auto___8444 = (0);
while(true){
if((i__5664__auto___8444 < len__5663__auto___8443)){
args8440.push((arguments[i__5664__auto___8444]));

var G__8445 = (i__5664__auto___8444 + (1));
i__5664__auto___8444 = G__8445;
continue;
} else {
}
break;
}

var G__8442 = args8440.length;
switch (G__8442) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8440.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args8447 = [];
var len__5663__auto___8450 = arguments.length;
var i__5664__auto___8451 = (0);
while(true){
if((i__5664__auto___8451 < len__5663__auto___8450)){
args8447.push((arguments[i__5664__auto___8451]));

var G__8452 = (i__5664__auto___8451 + (1));
i__5664__auto___8451 = G__8452;
continue;
} else {
}
break;
}

var G__8449 = args8447.length;
switch (G__8449) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8447.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args8454 = [];
var len__5663__auto___8457 = arguments.length;
var i__5664__auto___8458 = (0);
while(true){
if((i__5664__auto___8458 < len__5663__auto___8457)){
args8454.push((arguments[i__5664__auto___8458]));

var G__8459 = (i__5664__auto___8458 + (1));
i__5664__auto___8458 = G__8459;
continue;
} else {
}
break;
}

var G__8456 = args8454.length;
switch (G__8456) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8454.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args8461 = [];
var len__5663__auto___8464 = arguments.length;
var i__5664__auto___8465 = (0);
while(true){
if((i__5664__auto___8465 < len__5663__auto___8464)){
args8461.push((arguments[i__5664__auto___8465]));

var G__8466 = (i__5664__auto___8465 + (1));
i__5664__auto___8465 = G__8466;
continue;
} else {
}
break;
}

var G__8463 = args8461.length;
switch (G__8463) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8461.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__8468){
var map__8471 = p__8468;
var map__8471__$1 = ((((!((map__8471 == null)))?((((map__8471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8471):map__8471);
var request = map__8471__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8471__$1,cljs.core.cst$kw$response_DASH_format);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2(ajax.core.get_content_type(response),request);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args8473 = [];
var len__5663__auto___8476 = arguments.length;
var i__5664__auto___8477 = (0);
while(true){
if((i__5664__auto___8477 < len__5663__auto___8476)){
args8473.push((arguments[i__5664__auto___8477]));

var G__8478 = (i__5664__auto___8477 + (1));
i__5664__auto___8477 = G__8478;
continue;
} else {
}
break;
}

var G__8475 = args8473.length;
switch (G__8475) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8473.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format(response,request);
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format(response,request);
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__8480){
var map__8483 = p__8480;
var map__8483__$1 = ((((!((map__8483 == null)))?((((map__8483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8483):map__8483);
var request = map__8483__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8483__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1(request),cljs.core.array_seq([response_format], 0));
} else {
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args8485 = [];
var len__5663__auto___8488 = arguments.length;
var i__5664__auto___8489 = (0);
while(true){
if((i__5664__auto___8489 < len__5663__auto___8488)){
args8485.push((arguments[i__5664__auto___8489]));

var G__8490 = (i__5664__auto___8489 + (1));
i__5664__auto___8489 = G__8490;
continue;
} else {
}
break;
}

var G__8487 = args8485.length;
switch (G__8487) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8485.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$response_DASH_format,ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$format,[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),cljs.core.cst$kw$content_DASH_type,accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__8492){
var map__8495 = p__8492;
var map__8495__$1 = ((((!((map__8495 == null)))?((((map__8495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8495):map__8495);
var opts = map__8495__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8495__$1,cljs.core.cst$kw$response_DASH_format);
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(response_format);
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args8497 = [];
var len__5663__auto___8500 = arguments.length;
var i__5664__auto___8501 = (0);
while(true){
if((i__5664__auto___8501 < len__5663__auto___8500)){
args8497.push((arguments[i__5664__auto___8501]));

var G__8502 = (i__5664__auto___8501 + (1));
i__5664__auto___8501 = G__8502;
continue;
} else {
}
break;
}

var G__8499 = args8497.length;
switch (G__8499) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8497.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__8504){
var map__8507 = p__8504;
var map__8507__$1 = ((((!((map__8507 == null)))?((((map__8507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8507):map__8507);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8507__$1,cljs.core.cst$kw$handler);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(handler,interceptors);
} else {
return ajax.core.throw_error("No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = (function (){var G__8509 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8509) : cljs.core.atom.call(null,G__8509));
})();
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format(request);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$method,ajax.core.normalize_method),cljs.core.cst$kw$interceptors,((function (response_format){
return (function (p1__8510_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__4605__auto__ = p1__8510_SHARP_;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ajax.core.default_interceptors) : cljs.core.deref.call(null,ajax.core.default_interceptors));
}
})(),cljs.core.array_seq([ajax.core.request_interceptors], 0));
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__8511){
var map__8514 = p__8511;
var map__8514__$1 = ((((!((map__8514 == null)))?((((map__8514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8514):map__8514);
var request = map__8514__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8514__$1,cljs.core.cst$kw$interceptors);
var request__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler(cljs.core.reverse(interceptors),request__$1);
var api = (function (){var or__4605__auto__ = cljs.core.cst$kw$api.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return ajax.core.new_default_api();
}
})();
return ajax.protocols._js_ajax_request(api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request(ajax.core.normalize_request(request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$write,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__8517 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__8517) {
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_request_format();

break;
case "text":
return ajax.core.text_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "url":
return ajax.core.url_request_format();

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),ajax$core$keyword_response_format_element(cljs.core.second(format),format_params)], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,format,cljs.core.cst$kw$description,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__8522 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__8522) {
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "text":
return (ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null));

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8524_SHARP_){
return ajax.core.keyword_response_format_element(p1__8524_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element(format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args8525 = [];
var len__5663__auto___8538 = arguments.length;
var i__5664__auto___8539 = (0);
while(true){
if((i__5664__auto___8539 < len__5663__auto___8538)){
args8525.push((arguments[i__5664__auto___8539]));

var G__8540 = (i__5664__auto___8539 + (1));
i__5664__auto___8539 = G__8540;
continue;
} else {
}
break;
}

var G__8527 = args8525.length;
switch (G__8527) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8525.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__8528,p__8529){
var map__8530 = p__8528;
var map__8530__$1 = ((((!((map__8530 == null)))?((((map__8530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8530):map__8530);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8530__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8530__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8530__$1,cljs.core.cst$kw$finally);
var vec__8531 = p__8529;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8531,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8531,(1),null);
var temp__4655__auto___8542 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___8542)){
var h_8543 = temp__4655__auto___8542;
(h_8543.cljs$core$IFn$_invoke$arity$1 ? h_8543.cljs$core$IFn$_invoke$arity$1(result) : h_8543.call(null,result));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__8533){
var map__8534 = p__8533;
var map__8534__$1 = ((((!((map__8534 == null)))?((((map__8534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8534):map__8534);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8534__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8534__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8534__$1,cljs.core.cst$kw$finally);
return ((function (map__8534,map__8534__$1,handler,error_handler,finally$){
return (function (p__8536){
var vec__8537 = p__8536;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8537,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8537,(1),null);
var temp__4655__auto___8544 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___8544)){
var h_8545 = temp__4655__auto___8544;
(h_8545.cljs$core$IFn$_invoke$arity$1 ? h_8545.cljs$core$IFn$_invoke$arity$1(result) : h_8545.call(null,result));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(map__8534,map__8534__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__8546){
var map__8549 = p__8546;
var map__8549__$1 = ((((!((map__8549 == null)))?((((map__8549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8549):map__8549);
var opts = map__8549__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8549__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8549__$1,cljs.core.cst$kw$format);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8549__$1,cljs.core.cst$kw$response_DASH_format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8549__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8549__$1,cljs.core.cst$kw$body);

var needs_format = ((body == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"));
var rf = (cljs.core.truth_((function (){var or__4605__auto__ = format;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$handler,ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.array_seq([cljs.core.cst$kw$format,rf,cljs.core.cst$kw$response_DASH_format,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$uri,uri,cljs.core.array_seq([cljs.core.cst$kw$method,method], 0))));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__5670__auto__ = [];
var len__5663__auto___8553 = arguments.length;
var i__5664__auto___8554 = (0);
while(true){
if((i__5664__auto___8554 < len__5663__auto___8553)){
args__5670__auto__.push((arguments[i__5664__auto___8554]));

var G__8555 = (i__5664__auto___8554 + (1));
i__5664__auto___8554 = G__8555;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7373__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__7373__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7373__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq8551){
var G__8552 = cljs.core.first(seq8551);
var seq8551__$1 = cljs.core.next(seq8551);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__8552,seq8551__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__5670__auto__ = [];
var len__5663__auto___8558 = arguments.length;
var i__5664__auto___8559 = (0);
while(true){
if((i__5664__auto___8559 < len__5663__auto___8558)){
args__5670__auto__.push((arguments[i__5664__auto___8559]));

var G__8560 = (i__5664__auto___8559 + (1));
i__5664__auto___8559 = G__8560;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7373__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__7373__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7373__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq8556){
var G__8557 = cljs.core.first(seq8556);
var seq8556__$1 = cljs.core.next(seq8556);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__8557,seq8556__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__5670__auto__ = [];
var len__5663__auto___8563 = arguments.length;
var i__5664__auto___8564 = (0);
while(true){
if((i__5664__auto___8564 < len__5663__auto___8563)){
args__5670__auto__.push((arguments[i__5664__auto___8564]));

var G__8565 = (i__5664__auto___8564 + (1));
i__5664__auto___8564 = G__8565;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7373__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__7373__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7373__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq8561){
var G__8562 = cljs.core.first(seq8561);
var seq8561__$1 = cljs.core.next(seq8561);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__8562,seq8561__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__5670__auto__ = [];
var len__5663__auto___8568 = arguments.length;
var i__5664__auto___8569 = (0);
while(true){
if((i__5664__auto___8569 < len__5663__auto___8568)){
args__5670__auto__.push((arguments[i__5664__auto___8569]));

var G__8570 = (i__5664__auto___8569 + (1));
i__5664__auto___8569 = G__8570;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7373__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__7373__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7373__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq8566){
var G__8567 = cljs.core.first(seq8566);
var seq8566__$1 = cljs.core.next(seq8566);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__8567,seq8566__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__5670__auto__ = [];
var len__5663__auto___8573 = arguments.length;
var i__5664__auto___8574 = (0);
while(true){
if((i__5664__auto___8574 < len__5663__auto___8573)){
args__5670__auto__.push((arguments[i__5664__auto___8574]));

var G__8575 = (i__5664__auto___8574 + (1));
i__5664__auto___8574 = G__8575;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7373__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__7373__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7373__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq8571){
var G__8572 = cljs.core.first(seq8571);
var seq8571__$1 = cljs.core.next(seq8571);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__8572,seq8571__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__5670__auto__ = [];
var len__5663__auto___8578 = arguments.length;
var i__5664__auto___8579 = (0);
while(true){
if((i__5664__auto___8579 < len__5663__auto___8578)){
args__5670__auto__.push((arguments[i__5664__auto___8579]));

var G__8580 = (i__5664__auto___8579 + (1));
i__5664__auto___8579 = G__8580;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7373__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__7373__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7373__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq8576){
var G__8577 = cljs.core.first(seq8576);
var seq8576__$1 = cljs.core.next(seq8576);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__8577,seq8576__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__5670__auto__ = [];
var len__5663__auto___8583 = arguments.length;
var i__5664__auto___8584 = (0);
while(true){
if((i__5664__auto___8584 < len__5663__auto___8583)){
args__5670__auto__.push((arguments[i__5664__auto___8584]));

var G__8585 = (i__5664__auto___8584 + (1));
i__5664__auto___8584 = G__8585;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7373__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__7373__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7373__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq8581){
var G__8582 = cljs.core.first(seq8581);
var seq8581__$1 = cljs.core.next(seq8581);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__8582,seq8581__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__5670__auto__ = [];
var len__5663__auto___8588 = arguments.length;
var i__5664__auto___8589 = (0);
while(true){
if((i__5664__auto___8589 < len__5663__auto___8588)){
args__5670__auto__.push((arguments[i__5664__auto___8589]));

var G__8590 = (i__5664__auto___8589 + (1));
i__5664__auto___8589 = G__8590;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7373__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PATCH",(((f__7373__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7373__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq8586){
var G__8587 = cljs.core.first(seq8586);
var seq8586__$1 = cljs.core.next(seq8586);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__8587,seq8586__$1);
});
