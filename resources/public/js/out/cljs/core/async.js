// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async28353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28353 = (function (fn_handler,f,meta28354){
this.fn_handler = fn_handler;
this.f = f;
this.meta28354 = meta28354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28355,meta28354__$1){
var self__ = this;
var _28355__$1 = this;
return (new cljs.core.async.t_cljs$core$async28353(self__.fn_handler,self__.f,meta28354__$1));
});

cljs.core.async.t_cljs$core$async28353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28355){
var self__ = this;
var _28355__$1 = this;
return self__.meta28354;
});

cljs.core.async.t_cljs$core$async28353.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28354","meta28354",-137315678,null)], null);
});

cljs.core.async.t_cljs$core$async28353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28353";

cljs.core.async.t_cljs$core$async28353.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async28353");
});

cljs.core.async.__GT_t_cljs$core$async28353 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async28353(fn_handler__$1,f__$1,meta28354){
return (new cljs.core.async.t_cljs$core$async28353(fn_handler__$1,f__$1,meta28354));
});

}

return (new cljs.core.async.t_cljs$core$async28353(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28358 = [];
var len__17833__auto___28361 = arguments.length;
var i__17834__auto___28362 = (0);
while(true){
if((i__17834__auto___28362 < len__17833__auto___28361)){
args28358.push((arguments[i__17834__auto___28362]));

var G__28363 = (i__17834__auto___28362 + (1));
i__17834__auto___28362 = G__28363;
continue;
} else {
}
break;
}

var G__28360 = args28358.length;
switch (G__28360) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28358.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28365 = [];
var len__17833__auto___28368 = arguments.length;
var i__17834__auto___28369 = (0);
while(true){
if((i__17834__auto___28369 < len__17833__auto___28368)){
args28365.push((arguments[i__17834__auto___28369]));

var G__28370 = (i__17834__auto___28369 + (1));
i__17834__auto___28369 = G__28370;
continue;
} else {
}
break;
}

var G__28367 = args28365.length;
switch (G__28367) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28365.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28372 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28372);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28372,ret){
return (function (){
return fn1.call(null,val_28372);
});})(val_28372,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28373 = [];
var len__17833__auto___28376 = arguments.length;
var i__17834__auto___28377 = (0);
while(true){
if((i__17834__auto___28377 < len__17833__auto___28376)){
args28373.push((arguments[i__17834__auto___28377]));

var G__28378 = (i__17834__auto___28377 + (1));
i__17834__auto___28377 = G__28378;
continue;
} else {
}
break;
}

var G__28375 = args28373.length;
switch (G__28375) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28373.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17678__auto___28380 = n;
var x_28381 = (0);
while(true){
if((x_28381 < n__17678__auto___28380)){
(a[x_28381] = (0));

var G__28382 = (x_28381 + (1));
x_28381 = G__28382;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28383 = (i + (1));
i = G__28383;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28387 = (function (alt_flag,flag,meta28388){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28388 = meta28388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28389,meta28388__$1){
var self__ = this;
var _28389__$1 = this;
return (new cljs.core.async.t_cljs$core$async28387(self__.alt_flag,self__.flag,meta28388__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28389){
var self__ = this;
var _28389__$1 = this;
return self__.meta28388;
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28388","meta28388",-1052404652,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28387";

cljs.core.async.t_cljs$core$async28387.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async28387");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28387 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28387(alt_flag__$1,flag__$1,meta28388){
return (new cljs.core.async.t_cljs$core$async28387(alt_flag__$1,flag__$1,meta28388));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28387(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28393 = (function (alt_handler,flag,cb,meta28394){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28394 = meta28394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28395,meta28394__$1){
var self__ = this;
var _28395__$1 = this;
return (new cljs.core.async.t_cljs$core$async28393(self__.alt_handler,self__.flag,self__.cb,meta28394__$1));
});

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28395){
var self__ = this;
var _28395__$1 = this;
return self__.meta28394;
});

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28394","meta28394",-609032296,null)], null);
});

cljs.core.async.t_cljs$core$async28393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28393";

cljs.core.async.t_cljs$core$async28393.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async28393");
});

cljs.core.async.__GT_t_cljs$core$async28393 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28393(alt_handler__$1,flag__$1,cb__$1,meta28394){
return (new cljs.core.async.t_cljs$core$async28393(alt_handler__$1,flag__$1,cb__$1,meta28394));
});

}

return (new cljs.core.async.t_cljs$core$async28393(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28396_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28396_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28397_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28397_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16775__auto__ = wport;
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28398 = (i + (1));
i = G__28398;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16775__auto__ = ret;
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__16763__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16763__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16763__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___28404 = arguments.length;
var i__17834__auto___28405 = (0);
while(true){
if((i__17834__auto___28405 < len__17833__auto___28404)){
args__17840__auto__.push((arguments[i__17834__auto___28405]));

var G__28406 = (i__17834__auto___28405 + (1));
i__17834__auto___28405 = G__28406;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28401){
var map__28402 = p__28401;
var map__28402__$1 = ((((!((map__28402 == null)))?((((map__28402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28402):map__28402);
var opts = map__28402__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28399){
var G__28400 = cljs.core.first.call(null,seq28399);
var seq28399__$1 = cljs.core.next.call(null,seq28399);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28400,seq28399__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28407 = [];
var len__17833__auto___28457 = arguments.length;
var i__17834__auto___28458 = (0);
while(true){
if((i__17834__auto___28458 < len__17833__auto___28457)){
args28407.push((arguments[i__17834__auto___28458]));

var G__28459 = (i__17834__auto___28458 + (1));
i__17834__auto___28458 = G__28459;
continue;
} else {
}
break;
}

var G__28409 = args28407.length;
switch (G__28409) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28407.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20669__auto___28461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___28461){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___28461){
return (function (state_28433){
var state_val_28434 = (state_28433[(1)]);
if((state_val_28434 === (7))){
var inst_28429 = (state_28433[(2)]);
var state_28433__$1 = state_28433;
var statearr_28435_28462 = state_28433__$1;
(statearr_28435_28462[(2)] = inst_28429);

(statearr_28435_28462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (1))){
var state_28433__$1 = state_28433;
var statearr_28436_28463 = state_28433__$1;
(statearr_28436_28463[(2)] = null);

(statearr_28436_28463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (4))){
var inst_28412 = (state_28433[(7)]);
var inst_28412__$1 = (state_28433[(2)]);
var inst_28413 = (inst_28412__$1 == null);
var state_28433__$1 = (function (){var statearr_28437 = state_28433;
(statearr_28437[(7)] = inst_28412__$1);

return statearr_28437;
})();
if(cljs.core.truth_(inst_28413)){
var statearr_28438_28464 = state_28433__$1;
(statearr_28438_28464[(1)] = (5));

} else {
var statearr_28439_28465 = state_28433__$1;
(statearr_28439_28465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (13))){
var state_28433__$1 = state_28433;
var statearr_28440_28466 = state_28433__$1;
(statearr_28440_28466[(2)] = null);

(statearr_28440_28466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (6))){
var inst_28412 = (state_28433[(7)]);
var state_28433__$1 = state_28433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28433__$1,(11),to,inst_28412);
} else {
if((state_val_28434 === (3))){
var inst_28431 = (state_28433[(2)]);
var state_28433__$1 = state_28433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28433__$1,inst_28431);
} else {
if((state_val_28434 === (12))){
var state_28433__$1 = state_28433;
var statearr_28441_28467 = state_28433__$1;
(statearr_28441_28467[(2)] = null);

(statearr_28441_28467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (2))){
var state_28433__$1 = state_28433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28433__$1,(4),from);
} else {
if((state_val_28434 === (11))){
var inst_28422 = (state_28433[(2)]);
var state_28433__$1 = state_28433;
if(cljs.core.truth_(inst_28422)){
var statearr_28442_28468 = state_28433__$1;
(statearr_28442_28468[(1)] = (12));

} else {
var statearr_28443_28469 = state_28433__$1;
(statearr_28443_28469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (9))){
var state_28433__$1 = state_28433;
var statearr_28444_28470 = state_28433__$1;
(statearr_28444_28470[(2)] = null);

(statearr_28444_28470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (5))){
var state_28433__$1 = state_28433;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28445_28471 = state_28433__$1;
(statearr_28445_28471[(1)] = (8));

} else {
var statearr_28446_28472 = state_28433__$1;
(statearr_28446_28472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (14))){
var inst_28427 = (state_28433[(2)]);
var state_28433__$1 = state_28433;
var statearr_28447_28473 = state_28433__$1;
(statearr_28447_28473[(2)] = inst_28427);

(statearr_28447_28473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (10))){
var inst_28419 = (state_28433[(2)]);
var state_28433__$1 = state_28433;
var statearr_28448_28474 = state_28433__$1;
(statearr_28448_28474[(2)] = inst_28419);

(statearr_28448_28474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (8))){
var inst_28416 = cljs.core.async.close_BANG_.call(null,to);
var state_28433__$1 = state_28433;
var statearr_28449_28475 = state_28433__$1;
(statearr_28449_28475[(2)] = inst_28416);

(statearr_28449_28475[(1)] = (10));


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
});})(c__20669__auto___28461))
;
return ((function (switch__20604__auto__,c__20669__auto___28461){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_28453 = [null,null,null,null,null,null,null,null];
(statearr_28453[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_28453[(1)] = (1));

return statearr_28453;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_28433){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_28433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e28454){if((e28454 instanceof Object)){
var ex__20608__auto__ = e28454;
var statearr_28455_28476 = state_28433;
(statearr_28455_28476[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28477 = state_28433;
state_28433 = G__28477;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_28433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_28433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___28461))
})();
var state__20671__auto__ = (function (){var statearr_28456 = f__20670__auto__.call(null);
(statearr_28456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___28461);

return statearr_28456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___28461))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28661){
var vec__28662 = p__28661;
var v = cljs.core.nth.call(null,vec__28662,(0),null);
var p = cljs.core.nth.call(null,vec__28662,(1),null);
var job = vec__28662;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20669__auto___28844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___28844,res,vec__28662,v,p,job,jobs,results){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___28844,res,vec__28662,v,p,job,jobs,results){
return (function (state_28667){
var state_val_28668 = (state_28667[(1)]);
if((state_val_28668 === (1))){
var state_28667__$1 = state_28667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28667__$1,(2),res,v);
} else {
if((state_val_28668 === (2))){
var inst_28664 = (state_28667[(2)]);
var inst_28665 = cljs.core.async.close_BANG_.call(null,res);
var state_28667__$1 = (function (){var statearr_28669 = state_28667;
(statearr_28669[(7)] = inst_28664);

return statearr_28669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28667__$1,inst_28665);
} else {
return null;
}
}
});})(c__20669__auto___28844,res,vec__28662,v,p,job,jobs,results))
;
return ((function (switch__20604__auto__,c__20669__auto___28844,res,vec__28662,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0 = (function (){
var statearr_28673 = [null,null,null,null,null,null,null,null];
(statearr_28673[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__);

(statearr_28673[(1)] = (1));

return statearr_28673;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1 = (function (state_28667){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_28667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e28674){if((e28674 instanceof Object)){
var ex__20608__auto__ = e28674;
var statearr_28675_28845 = state_28667;
(statearr_28675_28845[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28846 = state_28667;
state_28667 = G__28846;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__ = function(state_28667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1.call(this,state_28667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___28844,res,vec__28662,v,p,job,jobs,results))
})();
var state__20671__auto__ = (function (){var statearr_28676 = f__20670__auto__.call(null);
(statearr_28676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___28844);

return statearr_28676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___28844,res,vec__28662,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28677){
var vec__28678 = p__28677;
var v = cljs.core.nth.call(null,vec__28678,(0),null);
var p = cljs.core.nth.call(null,vec__28678,(1),null);
var job = vec__28678;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17678__auto___28847 = n;
var __28848 = (0);
while(true){
if((__28848 < n__17678__auto___28847)){
var G__28679_28849 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28679_28849) {
case "compute":
var c__20669__auto___28851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28848,c__20669__auto___28851,G__28679_28849,n__17678__auto___28847,jobs,results,process,async){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (__28848,c__20669__auto___28851,G__28679_28849,n__17678__auto___28847,jobs,results,process,async){
return (function (state_28692){
var state_val_28693 = (state_28692[(1)]);
if((state_val_28693 === (1))){
var state_28692__$1 = state_28692;
var statearr_28694_28852 = state_28692__$1;
(statearr_28694_28852[(2)] = null);

(statearr_28694_28852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (2))){
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28692__$1,(4),jobs);
} else {
if((state_val_28693 === (3))){
var inst_28690 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28692__$1,inst_28690);
} else {
if((state_val_28693 === (4))){
var inst_28682 = (state_28692[(2)]);
var inst_28683 = process.call(null,inst_28682);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28683)){
var statearr_28695_28853 = state_28692__$1;
(statearr_28695_28853[(1)] = (5));

} else {
var statearr_28696_28854 = state_28692__$1;
(statearr_28696_28854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (5))){
var state_28692__$1 = state_28692;
var statearr_28697_28855 = state_28692__$1;
(statearr_28697_28855[(2)] = null);

(statearr_28697_28855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (6))){
var state_28692__$1 = state_28692;
var statearr_28698_28856 = state_28692__$1;
(statearr_28698_28856[(2)] = null);

(statearr_28698_28856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (7))){
var inst_28688 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28699_28857 = state_28692__$1;
(statearr_28699_28857[(2)] = inst_28688);

(statearr_28699_28857[(1)] = (3));


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
});})(__28848,c__20669__auto___28851,G__28679_28849,n__17678__auto___28847,jobs,results,process,async))
;
return ((function (__28848,switch__20604__auto__,c__20669__auto___28851,G__28679_28849,n__17678__auto___28847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0 = (function (){
var statearr_28703 = [null,null,null,null,null,null,null];
(statearr_28703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__);

(statearr_28703[(1)] = (1));

return statearr_28703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1 = (function (state_28692){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_28692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e28704){if((e28704 instanceof Object)){
var ex__20608__auto__ = e28704;
var statearr_28705_28858 = state_28692;
(statearr_28705_28858[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28859 = state_28692;
state_28692 = G__28859;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__ = function(state_28692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1.call(this,state_28692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__;
})()
;})(__28848,switch__20604__auto__,c__20669__auto___28851,G__28679_28849,n__17678__auto___28847,jobs,results,process,async))
})();
var state__20671__auto__ = (function (){var statearr_28706 = f__20670__auto__.call(null);
(statearr_28706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___28851);

return statearr_28706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(__28848,c__20669__auto___28851,G__28679_28849,n__17678__auto___28847,jobs,results,process,async))
);


break;
case "async":
var c__20669__auto___28860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28848,c__20669__auto___28860,G__28679_28849,n__17678__auto___28847,jobs,results,process,async){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (__28848,c__20669__auto___28860,G__28679_28849,n__17678__auto___28847,jobs,results,process,async){
return (function (state_28719){
var state_val_28720 = (state_28719[(1)]);
if((state_val_28720 === (1))){
var state_28719__$1 = state_28719;
var statearr_28721_28861 = state_28719__$1;
(statearr_28721_28861[(2)] = null);

(statearr_28721_28861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28720 === (2))){
var state_28719__$1 = state_28719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28719__$1,(4),jobs);
} else {
if((state_val_28720 === (3))){
var inst_28717 = (state_28719[(2)]);
var state_28719__$1 = state_28719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28719__$1,inst_28717);
} else {
if((state_val_28720 === (4))){
var inst_28709 = (state_28719[(2)]);
var inst_28710 = async.call(null,inst_28709);
var state_28719__$1 = state_28719;
if(cljs.core.truth_(inst_28710)){
var statearr_28722_28862 = state_28719__$1;
(statearr_28722_28862[(1)] = (5));

} else {
var statearr_28723_28863 = state_28719__$1;
(statearr_28723_28863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28720 === (5))){
var state_28719__$1 = state_28719;
var statearr_28724_28864 = state_28719__$1;
(statearr_28724_28864[(2)] = null);

(statearr_28724_28864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28720 === (6))){
var state_28719__$1 = state_28719;
var statearr_28725_28865 = state_28719__$1;
(statearr_28725_28865[(2)] = null);

(statearr_28725_28865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28720 === (7))){
var inst_28715 = (state_28719[(2)]);
var state_28719__$1 = state_28719;
var statearr_28726_28866 = state_28719__$1;
(statearr_28726_28866[(2)] = inst_28715);

(statearr_28726_28866[(1)] = (3));


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
});})(__28848,c__20669__auto___28860,G__28679_28849,n__17678__auto___28847,jobs,results,process,async))
;
return ((function (__28848,switch__20604__auto__,c__20669__auto___28860,G__28679_28849,n__17678__auto___28847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0 = (function (){
var statearr_28730 = [null,null,null,null,null,null,null];
(statearr_28730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__);

(statearr_28730[(1)] = (1));

return statearr_28730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1 = (function (state_28719){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_28719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e28731){if((e28731 instanceof Object)){
var ex__20608__auto__ = e28731;
var statearr_28732_28867 = state_28719;
(statearr_28732_28867[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28868 = state_28719;
state_28719 = G__28868;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__ = function(state_28719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1.call(this,state_28719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__;
})()
;})(__28848,switch__20604__auto__,c__20669__auto___28860,G__28679_28849,n__17678__auto___28847,jobs,results,process,async))
})();
var state__20671__auto__ = (function (){var statearr_28733 = f__20670__auto__.call(null);
(statearr_28733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___28860);

return statearr_28733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(__28848,c__20669__auto___28860,G__28679_28849,n__17678__auto___28847,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28869 = (__28848 + (1));
__28848 = G__28869;
continue;
} else {
}
break;
}

var c__20669__auto___28870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___28870,jobs,results,process,async){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___28870,jobs,results,process,async){
return (function (state_28755){
var state_val_28756 = (state_28755[(1)]);
if((state_val_28756 === (1))){
var state_28755__$1 = state_28755;
var statearr_28757_28871 = state_28755__$1;
(statearr_28757_28871[(2)] = null);

(statearr_28757_28871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28756 === (2))){
var state_28755__$1 = state_28755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28755__$1,(4),from);
} else {
if((state_val_28756 === (3))){
var inst_28753 = (state_28755[(2)]);
var state_28755__$1 = state_28755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28755__$1,inst_28753);
} else {
if((state_val_28756 === (4))){
var inst_28736 = (state_28755[(7)]);
var inst_28736__$1 = (state_28755[(2)]);
var inst_28737 = (inst_28736__$1 == null);
var state_28755__$1 = (function (){var statearr_28758 = state_28755;
(statearr_28758[(7)] = inst_28736__$1);

return statearr_28758;
})();
if(cljs.core.truth_(inst_28737)){
var statearr_28759_28872 = state_28755__$1;
(statearr_28759_28872[(1)] = (5));

} else {
var statearr_28760_28873 = state_28755__$1;
(statearr_28760_28873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28756 === (5))){
var inst_28739 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28755__$1 = state_28755;
var statearr_28761_28874 = state_28755__$1;
(statearr_28761_28874[(2)] = inst_28739);

(statearr_28761_28874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28756 === (6))){
var inst_28741 = (state_28755[(8)]);
var inst_28736 = (state_28755[(7)]);
var inst_28741__$1 = cljs.core.async.chan.call(null,(1));
var inst_28742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28743 = [inst_28736,inst_28741__$1];
var inst_28744 = (new cljs.core.PersistentVector(null,2,(5),inst_28742,inst_28743,null));
var state_28755__$1 = (function (){var statearr_28762 = state_28755;
(statearr_28762[(8)] = inst_28741__$1);

return statearr_28762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28755__$1,(8),jobs,inst_28744);
} else {
if((state_val_28756 === (7))){
var inst_28751 = (state_28755[(2)]);
var state_28755__$1 = state_28755;
var statearr_28763_28875 = state_28755__$1;
(statearr_28763_28875[(2)] = inst_28751);

(statearr_28763_28875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28756 === (8))){
var inst_28741 = (state_28755[(8)]);
var inst_28746 = (state_28755[(2)]);
var state_28755__$1 = (function (){var statearr_28764 = state_28755;
(statearr_28764[(9)] = inst_28746);

return statearr_28764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28755__$1,(9),results,inst_28741);
} else {
if((state_val_28756 === (9))){
var inst_28748 = (state_28755[(2)]);
var state_28755__$1 = (function (){var statearr_28765 = state_28755;
(statearr_28765[(10)] = inst_28748);

return statearr_28765;
})();
var statearr_28766_28876 = state_28755__$1;
(statearr_28766_28876[(2)] = null);

(statearr_28766_28876[(1)] = (2));


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
});})(c__20669__auto___28870,jobs,results,process,async))
;
return ((function (switch__20604__auto__,c__20669__auto___28870,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0 = (function (){
var statearr_28770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__);

(statearr_28770[(1)] = (1));

return statearr_28770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1 = (function (state_28755){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_28755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e28771){if((e28771 instanceof Object)){
var ex__20608__auto__ = e28771;
var statearr_28772_28877 = state_28755;
(statearr_28772_28877[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28878 = state_28755;
state_28755 = G__28878;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__ = function(state_28755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1.call(this,state_28755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___28870,jobs,results,process,async))
})();
var state__20671__auto__ = (function (){var statearr_28773 = f__20670__auto__.call(null);
(statearr_28773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___28870);

return statearr_28773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___28870,jobs,results,process,async))
);


var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__,jobs,results,process,async){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__,jobs,results,process,async){
return (function (state_28811){
var state_val_28812 = (state_28811[(1)]);
if((state_val_28812 === (7))){
var inst_28807 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28813_28879 = state_28811__$1;
(statearr_28813_28879[(2)] = inst_28807);

(statearr_28813_28879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (20))){
var state_28811__$1 = state_28811;
var statearr_28814_28880 = state_28811__$1;
(statearr_28814_28880[(2)] = null);

(statearr_28814_28880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (1))){
var state_28811__$1 = state_28811;
var statearr_28815_28881 = state_28811__$1;
(statearr_28815_28881[(2)] = null);

(statearr_28815_28881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (4))){
var inst_28776 = (state_28811[(7)]);
var inst_28776__$1 = (state_28811[(2)]);
var inst_28777 = (inst_28776__$1 == null);
var state_28811__$1 = (function (){var statearr_28816 = state_28811;
(statearr_28816[(7)] = inst_28776__$1);

return statearr_28816;
})();
if(cljs.core.truth_(inst_28777)){
var statearr_28817_28882 = state_28811__$1;
(statearr_28817_28882[(1)] = (5));

} else {
var statearr_28818_28883 = state_28811__$1;
(statearr_28818_28883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (15))){
var inst_28789 = (state_28811[(8)]);
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28811__$1,(18),to,inst_28789);
} else {
if((state_val_28812 === (21))){
var inst_28802 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28819_28884 = state_28811__$1;
(statearr_28819_28884[(2)] = inst_28802);

(statearr_28819_28884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (13))){
var inst_28804 = (state_28811[(2)]);
var state_28811__$1 = (function (){var statearr_28820 = state_28811;
(statearr_28820[(9)] = inst_28804);

return statearr_28820;
})();
var statearr_28821_28885 = state_28811__$1;
(statearr_28821_28885[(2)] = null);

(statearr_28821_28885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (6))){
var inst_28776 = (state_28811[(7)]);
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28811__$1,(11),inst_28776);
} else {
if((state_val_28812 === (17))){
var inst_28797 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
if(cljs.core.truth_(inst_28797)){
var statearr_28822_28886 = state_28811__$1;
(statearr_28822_28886[(1)] = (19));

} else {
var statearr_28823_28887 = state_28811__$1;
(statearr_28823_28887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (3))){
var inst_28809 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28811__$1,inst_28809);
} else {
if((state_val_28812 === (12))){
var inst_28786 = (state_28811[(10)]);
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28811__$1,(14),inst_28786);
} else {
if((state_val_28812 === (2))){
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28811__$1,(4),results);
} else {
if((state_val_28812 === (19))){
var state_28811__$1 = state_28811;
var statearr_28824_28888 = state_28811__$1;
(statearr_28824_28888[(2)] = null);

(statearr_28824_28888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (11))){
var inst_28786 = (state_28811[(2)]);
var state_28811__$1 = (function (){var statearr_28825 = state_28811;
(statearr_28825[(10)] = inst_28786);

return statearr_28825;
})();
var statearr_28826_28889 = state_28811__$1;
(statearr_28826_28889[(2)] = null);

(statearr_28826_28889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (9))){
var state_28811__$1 = state_28811;
var statearr_28827_28890 = state_28811__$1;
(statearr_28827_28890[(2)] = null);

(statearr_28827_28890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (5))){
var state_28811__$1 = state_28811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28828_28891 = state_28811__$1;
(statearr_28828_28891[(1)] = (8));

} else {
var statearr_28829_28892 = state_28811__$1;
(statearr_28829_28892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (14))){
var inst_28791 = (state_28811[(11)]);
var inst_28789 = (state_28811[(8)]);
var inst_28789__$1 = (state_28811[(2)]);
var inst_28790 = (inst_28789__$1 == null);
var inst_28791__$1 = cljs.core.not.call(null,inst_28790);
var state_28811__$1 = (function (){var statearr_28830 = state_28811;
(statearr_28830[(11)] = inst_28791__$1);

(statearr_28830[(8)] = inst_28789__$1);

return statearr_28830;
})();
if(inst_28791__$1){
var statearr_28831_28893 = state_28811__$1;
(statearr_28831_28893[(1)] = (15));

} else {
var statearr_28832_28894 = state_28811__$1;
(statearr_28832_28894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (16))){
var inst_28791 = (state_28811[(11)]);
var state_28811__$1 = state_28811;
var statearr_28833_28895 = state_28811__$1;
(statearr_28833_28895[(2)] = inst_28791);

(statearr_28833_28895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (10))){
var inst_28783 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28834_28896 = state_28811__$1;
(statearr_28834_28896[(2)] = inst_28783);

(statearr_28834_28896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (18))){
var inst_28794 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28835_28897 = state_28811__$1;
(statearr_28835_28897[(2)] = inst_28794);

(statearr_28835_28897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (8))){
var inst_28780 = cljs.core.async.close_BANG_.call(null,to);
var state_28811__$1 = state_28811;
var statearr_28836_28898 = state_28811__$1;
(statearr_28836_28898[(2)] = inst_28780);

(statearr_28836_28898[(1)] = (10));


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
});})(c__20669__auto__,jobs,results,process,async))
;
return ((function (switch__20604__auto__,c__20669__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0 = (function (){
var statearr_28840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__);

(statearr_28840[(1)] = (1));

return statearr_28840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1 = (function (state_28811){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_28811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e28841){if((e28841 instanceof Object)){
var ex__20608__auto__ = e28841;
var statearr_28842_28899 = state_28811;
(statearr_28842_28899[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28900 = state_28811;
state_28811 = G__28900;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__ = function(state_28811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1.call(this,state_28811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__,jobs,results,process,async))
})();
var state__20671__auto__ = (function (){var statearr_28843 = f__20670__auto__.call(null);
(statearr_28843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_28843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__,jobs,results,process,async))
);

return c__20669__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28901 = [];
var len__17833__auto___28904 = arguments.length;
var i__17834__auto___28905 = (0);
while(true){
if((i__17834__auto___28905 < len__17833__auto___28904)){
args28901.push((arguments[i__17834__auto___28905]));

var G__28906 = (i__17834__auto___28905 + (1));
i__17834__auto___28905 = G__28906;
continue;
} else {
}
break;
}

var G__28903 = args28901.length;
switch (G__28903) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28901.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28908 = [];
var len__17833__auto___28911 = arguments.length;
var i__17834__auto___28912 = (0);
while(true){
if((i__17834__auto___28912 < len__17833__auto___28911)){
args28908.push((arguments[i__17834__auto___28912]));

var G__28913 = (i__17834__auto___28912 + (1));
i__17834__auto___28912 = G__28913;
continue;
} else {
}
break;
}

var G__28910 = args28908.length;
switch (G__28910) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28908.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28915 = [];
var len__17833__auto___28968 = arguments.length;
var i__17834__auto___28969 = (0);
while(true){
if((i__17834__auto___28969 < len__17833__auto___28968)){
args28915.push((arguments[i__17834__auto___28969]));

var G__28970 = (i__17834__auto___28969 + (1));
i__17834__auto___28969 = G__28970;
continue;
} else {
}
break;
}

var G__28917 = args28915.length;
switch (G__28917) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28915.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20669__auto___28972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___28972,tc,fc){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___28972,tc,fc){
return (function (state_28943){
var state_val_28944 = (state_28943[(1)]);
if((state_val_28944 === (7))){
var inst_28939 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28945_28973 = state_28943__$1;
(statearr_28945_28973[(2)] = inst_28939);

(statearr_28945_28973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (1))){
var state_28943__$1 = state_28943;
var statearr_28946_28974 = state_28943__$1;
(statearr_28946_28974[(2)] = null);

(statearr_28946_28974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (4))){
var inst_28920 = (state_28943[(7)]);
var inst_28920__$1 = (state_28943[(2)]);
var inst_28921 = (inst_28920__$1 == null);
var state_28943__$1 = (function (){var statearr_28947 = state_28943;
(statearr_28947[(7)] = inst_28920__$1);

return statearr_28947;
})();
if(cljs.core.truth_(inst_28921)){
var statearr_28948_28975 = state_28943__$1;
(statearr_28948_28975[(1)] = (5));

} else {
var statearr_28949_28976 = state_28943__$1;
(statearr_28949_28976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (13))){
var state_28943__$1 = state_28943;
var statearr_28950_28977 = state_28943__$1;
(statearr_28950_28977[(2)] = null);

(statearr_28950_28977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (6))){
var inst_28920 = (state_28943[(7)]);
var inst_28926 = p.call(null,inst_28920);
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28926)){
var statearr_28951_28978 = state_28943__$1;
(statearr_28951_28978[(1)] = (9));

} else {
var statearr_28952_28979 = state_28943__$1;
(statearr_28952_28979[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (3))){
var inst_28941 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28943__$1,inst_28941);
} else {
if((state_val_28944 === (12))){
var state_28943__$1 = state_28943;
var statearr_28953_28980 = state_28943__$1;
(statearr_28953_28980[(2)] = null);

(statearr_28953_28980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (2))){
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(4),ch);
} else {
if((state_val_28944 === (11))){
var inst_28920 = (state_28943[(7)]);
var inst_28930 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28943__$1,(8),inst_28930,inst_28920);
} else {
if((state_val_28944 === (9))){
var state_28943__$1 = state_28943;
var statearr_28954_28981 = state_28943__$1;
(statearr_28954_28981[(2)] = tc);

(statearr_28954_28981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (5))){
var inst_28923 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28924 = cljs.core.async.close_BANG_.call(null,fc);
var state_28943__$1 = (function (){var statearr_28955 = state_28943;
(statearr_28955[(8)] = inst_28923);

return statearr_28955;
})();
var statearr_28956_28982 = state_28943__$1;
(statearr_28956_28982[(2)] = inst_28924);

(statearr_28956_28982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (14))){
var inst_28937 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28957_28983 = state_28943__$1;
(statearr_28957_28983[(2)] = inst_28937);

(statearr_28957_28983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (10))){
var state_28943__$1 = state_28943;
var statearr_28958_28984 = state_28943__$1;
(statearr_28958_28984[(2)] = fc);

(statearr_28958_28984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (8))){
var inst_28932 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28932)){
var statearr_28959_28985 = state_28943__$1;
(statearr_28959_28985[(1)] = (12));

} else {
var statearr_28960_28986 = state_28943__$1;
(statearr_28960_28986[(1)] = (13));

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
});})(c__20669__auto___28972,tc,fc))
;
return ((function (switch__20604__auto__,c__20669__auto___28972,tc,fc){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_28964 = [null,null,null,null,null,null,null,null,null];
(statearr_28964[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_28964[(1)] = (1));

return statearr_28964;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_28943){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_28943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e28965){if((e28965 instanceof Object)){
var ex__20608__auto__ = e28965;
var statearr_28966_28987 = state_28943;
(statearr_28966_28987[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28988 = state_28943;
state_28943 = G__28988;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___28972,tc,fc))
})();
var state__20671__auto__ = (function (){var statearr_28967 = f__20670__auto__.call(null);
(statearr_28967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___28972);

return statearr_28967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___28972,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__){
return (function (state_29035){
var state_val_29036 = (state_29035[(1)]);
if((state_val_29036 === (1))){
var inst_29021 = init;
var state_29035__$1 = (function (){var statearr_29037 = state_29035;
(statearr_29037[(7)] = inst_29021);

return statearr_29037;
})();
var statearr_29038_29053 = state_29035__$1;
(statearr_29038_29053[(2)] = null);

(statearr_29038_29053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29036 === (2))){
var state_29035__$1 = state_29035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29035__$1,(4),ch);
} else {
if((state_val_29036 === (3))){
var inst_29033 = (state_29035[(2)]);
var state_29035__$1 = state_29035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29035__$1,inst_29033);
} else {
if((state_val_29036 === (4))){
var inst_29024 = (state_29035[(8)]);
var inst_29024__$1 = (state_29035[(2)]);
var inst_29025 = (inst_29024__$1 == null);
var state_29035__$1 = (function (){var statearr_29039 = state_29035;
(statearr_29039[(8)] = inst_29024__$1);

return statearr_29039;
})();
if(cljs.core.truth_(inst_29025)){
var statearr_29040_29054 = state_29035__$1;
(statearr_29040_29054[(1)] = (5));

} else {
var statearr_29041_29055 = state_29035__$1;
(statearr_29041_29055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29036 === (5))){
var inst_29021 = (state_29035[(7)]);
var state_29035__$1 = state_29035;
var statearr_29042_29056 = state_29035__$1;
(statearr_29042_29056[(2)] = inst_29021);

(statearr_29042_29056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29036 === (6))){
var inst_29024 = (state_29035[(8)]);
var inst_29021 = (state_29035[(7)]);
var inst_29028 = f.call(null,inst_29021,inst_29024);
var inst_29021__$1 = inst_29028;
var state_29035__$1 = (function (){var statearr_29043 = state_29035;
(statearr_29043[(7)] = inst_29021__$1);

return statearr_29043;
})();
var statearr_29044_29057 = state_29035__$1;
(statearr_29044_29057[(2)] = null);

(statearr_29044_29057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29036 === (7))){
var inst_29031 = (state_29035[(2)]);
var state_29035__$1 = state_29035;
var statearr_29045_29058 = state_29035__$1;
(statearr_29045_29058[(2)] = inst_29031);

(statearr_29045_29058[(1)] = (3));


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
});})(c__20669__auto__))
;
return ((function (switch__20604__auto__,c__20669__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20605__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20605__auto____0 = (function (){
var statearr_29049 = [null,null,null,null,null,null,null,null,null];
(statearr_29049[(0)] = cljs$core$async$reduce_$_state_machine__20605__auto__);

(statearr_29049[(1)] = (1));

return statearr_29049;
});
var cljs$core$async$reduce_$_state_machine__20605__auto____1 = (function (state_29035){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_29035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e29050){if((e29050 instanceof Object)){
var ex__20608__auto__ = e29050;
var statearr_29051_29059 = state_29035;
(statearr_29051_29059[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29060 = state_29035;
state_29035 = G__29060;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20605__auto__ = function(state_29035){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20605__auto____1.call(this,state_29035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20605__auto____0;
cljs$core$async$reduce_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20605__auto____1;
return cljs$core$async$reduce_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__))
})();
var state__20671__auto__ = (function (){var statearr_29052 = f__20670__auto__.call(null);
(statearr_29052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_29052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__))
);

return c__20669__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29061 = [];
var len__17833__auto___29113 = arguments.length;
var i__17834__auto___29114 = (0);
while(true){
if((i__17834__auto___29114 < len__17833__auto___29113)){
args29061.push((arguments[i__17834__auto___29114]));

var G__29115 = (i__17834__auto___29114 + (1));
i__17834__auto___29114 = G__29115;
continue;
} else {
}
break;
}

var G__29063 = args29061.length;
switch (G__29063) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29061.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__){
return (function (state_29088){
var state_val_29089 = (state_29088[(1)]);
if((state_val_29089 === (7))){
var inst_29070 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29090_29117 = state_29088__$1;
(statearr_29090_29117[(2)] = inst_29070);

(statearr_29090_29117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (1))){
var inst_29064 = cljs.core.seq.call(null,coll);
var inst_29065 = inst_29064;
var state_29088__$1 = (function (){var statearr_29091 = state_29088;
(statearr_29091[(7)] = inst_29065);

return statearr_29091;
})();
var statearr_29092_29118 = state_29088__$1;
(statearr_29092_29118[(2)] = null);

(statearr_29092_29118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (4))){
var inst_29065 = (state_29088[(7)]);
var inst_29068 = cljs.core.first.call(null,inst_29065);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29088__$1,(7),ch,inst_29068);
} else {
if((state_val_29089 === (13))){
var inst_29082 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29093_29119 = state_29088__$1;
(statearr_29093_29119[(2)] = inst_29082);

(statearr_29093_29119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (6))){
var inst_29073 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
if(cljs.core.truth_(inst_29073)){
var statearr_29094_29120 = state_29088__$1;
(statearr_29094_29120[(1)] = (8));

} else {
var statearr_29095_29121 = state_29088__$1;
(statearr_29095_29121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (3))){
var inst_29086 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29088__$1,inst_29086);
} else {
if((state_val_29089 === (12))){
var state_29088__$1 = state_29088;
var statearr_29096_29122 = state_29088__$1;
(statearr_29096_29122[(2)] = null);

(statearr_29096_29122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (2))){
var inst_29065 = (state_29088[(7)]);
var state_29088__$1 = state_29088;
if(cljs.core.truth_(inst_29065)){
var statearr_29097_29123 = state_29088__$1;
(statearr_29097_29123[(1)] = (4));

} else {
var statearr_29098_29124 = state_29088__$1;
(statearr_29098_29124[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (11))){
var inst_29079 = cljs.core.async.close_BANG_.call(null,ch);
var state_29088__$1 = state_29088;
var statearr_29099_29125 = state_29088__$1;
(statearr_29099_29125[(2)] = inst_29079);

(statearr_29099_29125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (9))){
var state_29088__$1 = state_29088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29100_29126 = state_29088__$1;
(statearr_29100_29126[(1)] = (11));

} else {
var statearr_29101_29127 = state_29088__$1;
(statearr_29101_29127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (5))){
var inst_29065 = (state_29088[(7)]);
var state_29088__$1 = state_29088;
var statearr_29102_29128 = state_29088__$1;
(statearr_29102_29128[(2)] = inst_29065);

(statearr_29102_29128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (10))){
var inst_29084 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29103_29129 = state_29088__$1;
(statearr_29103_29129[(2)] = inst_29084);

(statearr_29103_29129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (8))){
var inst_29065 = (state_29088[(7)]);
var inst_29075 = cljs.core.next.call(null,inst_29065);
var inst_29065__$1 = inst_29075;
var state_29088__$1 = (function (){var statearr_29104 = state_29088;
(statearr_29104[(7)] = inst_29065__$1);

return statearr_29104;
})();
var statearr_29105_29130 = state_29088__$1;
(statearr_29105_29130[(2)] = null);

(statearr_29105_29130[(1)] = (2));


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
});})(c__20669__auto__))
;
return ((function (switch__20604__auto__,c__20669__auto__){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_29109 = [null,null,null,null,null,null,null,null];
(statearr_29109[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_29109[(1)] = (1));

return statearr_29109;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_29088){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_29088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e29110){if((e29110 instanceof Object)){
var ex__20608__auto__ = e29110;
var statearr_29111_29131 = state_29088;
(statearr_29111_29131[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29132 = state_29088;
state_29088 = G__29132;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_29088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_29088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__))
})();
var state__20671__auto__ = (function (){var statearr_29112 = f__20670__auto__.call(null);
(statearr_29112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_29112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__))
);

return c__20669__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17430__auto__ = (((_ == null))?null:_);
var m__17431__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,_);
} else {
var m__17431__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17430__auto__ = (((m == null))?null:m);
var m__17431__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17431__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17430__auto__ = (((m == null))?null:m);
var m__17431__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,m,ch);
} else {
var m__17431__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17430__auto__ = (((m == null))?null:m);
var m__17431__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,m);
} else {
var m__17431__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29354 = (function (mult,ch,cs,meta29355){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29355 = meta29355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29356,meta29355__$1){
var self__ = this;
var _29356__$1 = this;
return (new cljs.core.async.t_cljs$core$async29354(self__.mult,self__.ch,self__.cs,meta29355__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29356){
var self__ = this;
var _29356__$1 = this;
return self__.meta29355;
});})(cs))
;

cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29354.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29355","meta29355",145953064,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29354";

cljs.core.async.t_cljs$core$async29354.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async29354");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29354 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29354(mult__$1,ch__$1,cs__$1,meta29355){
return (new cljs.core.async.t_cljs$core$async29354(mult__$1,ch__$1,cs__$1,meta29355));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29354(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20669__auto___29575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___29575,cs,m,dchan,dctr,done){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___29575,cs,m,dchan,dctr,done){
return (function (state_29487){
var state_val_29488 = (state_29487[(1)]);
if((state_val_29488 === (7))){
var inst_29483 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29489_29576 = state_29487__$1;
(statearr_29489_29576[(2)] = inst_29483);

(statearr_29489_29576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (20))){
var inst_29388 = (state_29487[(7)]);
var inst_29398 = cljs.core.first.call(null,inst_29388);
var inst_29399 = cljs.core.nth.call(null,inst_29398,(0),null);
var inst_29400 = cljs.core.nth.call(null,inst_29398,(1),null);
var state_29487__$1 = (function (){var statearr_29490 = state_29487;
(statearr_29490[(8)] = inst_29399);

return statearr_29490;
})();
if(cljs.core.truth_(inst_29400)){
var statearr_29491_29577 = state_29487__$1;
(statearr_29491_29577[(1)] = (22));

} else {
var statearr_29492_29578 = state_29487__$1;
(statearr_29492_29578[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (27))){
var inst_29430 = (state_29487[(9)]);
var inst_29359 = (state_29487[(10)]);
var inst_29428 = (state_29487[(11)]);
var inst_29435 = (state_29487[(12)]);
var inst_29435__$1 = cljs.core._nth.call(null,inst_29428,inst_29430);
var inst_29436 = cljs.core.async.put_BANG_.call(null,inst_29435__$1,inst_29359,done);
var state_29487__$1 = (function (){var statearr_29493 = state_29487;
(statearr_29493[(12)] = inst_29435__$1);

return statearr_29493;
})();
if(cljs.core.truth_(inst_29436)){
var statearr_29494_29579 = state_29487__$1;
(statearr_29494_29579[(1)] = (30));

} else {
var statearr_29495_29580 = state_29487__$1;
(statearr_29495_29580[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (1))){
var state_29487__$1 = state_29487;
var statearr_29496_29581 = state_29487__$1;
(statearr_29496_29581[(2)] = null);

(statearr_29496_29581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (24))){
var inst_29388 = (state_29487[(7)]);
var inst_29405 = (state_29487[(2)]);
var inst_29406 = cljs.core.next.call(null,inst_29388);
var inst_29368 = inst_29406;
var inst_29369 = null;
var inst_29370 = (0);
var inst_29371 = (0);
var state_29487__$1 = (function (){var statearr_29497 = state_29487;
(statearr_29497[(13)] = inst_29369);

(statearr_29497[(14)] = inst_29371);

(statearr_29497[(15)] = inst_29368);

(statearr_29497[(16)] = inst_29370);

(statearr_29497[(17)] = inst_29405);

return statearr_29497;
})();
var statearr_29498_29582 = state_29487__$1;
(statearr_29498_29582[(2)] = null);

(statearr_29498_29582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (39))){
var state_29487__$1 = state_29487;
var statearr_29502_29583 = state_29487__$1;
(statearr_29502_29583[(2)] = null);

(statearr_29502_29583[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (4))){
var inst_29359 = (state_29487[(10)]);
var inst_29359__$1 = (state_29487[(2)]);
var inst_29360 = (inst_29359__$1 == null);
var state_29487__$1 = (function (){var statearr_29503 = state_29487;
(statearr_29503[(10)] = inst_29359__$1);

return statearr_29503;
})();
if(cljs.core.truth_(inst_29360)){
var statearr_29504_29584 = state_29487__$1;
(statearr_29504_29584[(1)] = (5));

} else {
var statearr_29505_29585 = state_29487__$1;
(statearr_29505_29585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (15))){
var inst_29369 = (state_29487[(13)]);
var inst_29371 = (state_29487[(14)]);
var inst_29368 = (state_29487[(15)]);
var inst_29370 = (state_29487[(16)]);
var inst_29384 = (state_29487[(2)]);
var inst_29385 = (inst_29371 + (1));
var tmp29499 = inst_29369;
var tmp29500 = inst_29368;
var tmp29501 = inst_29370;
var inst_29368__$1 = tmp29500;
var inst_29369__$1 = tmp29499;
var inst_29370__$1 = tmp29501;
var inst_29371__$1 = inst_29385;
var state_29487__$1 = (function (){var statearr_29506 = state_29487;
(statearr_29506[(13)] = inst_29369__$1);

(statearr_29506[(14)] = inst_29371__$1);

(statearr_29506[(15)] = inst_29368__$1);

(statearr_29506[(18)] = inst_29384);

(statearr_29506[(16)] = inst_29370__$1);

return statearr_29506;
})();
var statearr_29507_29586 = state_29487__$1;
(statearr_29507_29586[(2)] = null);

(statearr_29507_29586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (21))){
var inst_29409 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29511_29587 = state_29487__$1;
(statearr_29511_29587[(2)] = inst_29409);

(statearr_29511_29587[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (31))){
var inst_29435 = (state_29487[(12)]);
var inst_29439 = done.call(null,null);
var inst_29440 = cljs.core.async.untap_STAR_.call(null,m,inst_29435);
var state_29487__$1 = (function (){var statearr_29512 = state_29487;
(statearr_29512[(19)] = inst_29439);

return statearr_29512;
})();
var statearr_29513_29588 = state_29487__$1;
(statearr_29513_29588[(2)] = inst_29440);

(statearr_29513_29588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (32))){
var inst_29427 = (state_29487[(20)]);
var inst_29430 = (state_29487[(9)]);
var inst_29429 = (state_29487[(21)]);
var inst_29428 = (state_29487[(11)]);
var inst_29442 = (state_29487[(2)]);
var inst_29443 = (inst_29430 + (1));
var tmp29508 = inst_29427;
var tmp29509 = inst_29429;
var tmp29510 = inst_29428;
var inst_29427__$1 = tmp29508;
var inst_29428__$1 = tmp29510;
var inst_29429__$1 = tmp29509;
var inst_29430__$1 = inst_29443;
var state_29487__$1 = (function (){var statearr_29514 = state_29487;
(statearr_29514[(20)] = inst_29427__$1);

(statearr_29514[(9)] = inst_29430__$1);

(statearr_29514[(21)] = inst_29429__$1);

(statearr_29514[(11)] = inst_29428__$1);

(statearr_29514[(22)] = inst_29442);

return statearr_29514;
})();
var statearr_29515_29589 = state_29487__$1;
(statearr_29515_29589[(2)] = null);

(statearr_29515_29589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (40))){
var inst_29455 = (state_29487[(23)]);
var inst_29459 = done.call(null,null);
var inst_29460 = cljs.core.async.untap_STAR_.call(null,m,inst_29455);
var state_29487__$1 = (function (){var statearr_29516 = state_29487;
(statearr_29516[(24)] = inst_29459);

return statearr_29516;
})();
var statearr_29517_29590 = state_29487__$1;
(statearr_29517_29590[(2)] = inst_29460);

(statearr_29517_29590[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (33))){
var inst_29446 = (state_29487[(25)]);
var inst_29448 = cljs.core.chunked_seq_QMARK_.call(null,inst_29446);
var state_29487__$1 = state_29487;
if(inst_29448){
var statearr_29518_29591 = state_29487__$1;
(statearr_29518_29591[(1)] = (36));

} else {
var statearr_29519_29592 = state_29487__$1;
(statearr_29519_29592[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (13))){
var inst_29378 = (state_29487[(26)]);
var inst_29381 = cljs.core.async.close_BANG_.call(null,inst_29378);
var state_29487__$1 = state_29487;
var statearr_29520_29593 = state_29487__$1;
(statearr_29520_29593[(2)] = inst_29381);

(statearr_29520_29593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (22))){
var inst_29399 = (state_29487[(8)]);
var inst_29402 = cljs.core.async.close_BANG_.call(null,inst_29399);
var state_29487__$1 = state_29487;
var statearr_29521_29594 = state_29487__$1;
(statearr_29521_29594[(2)] = inst_29402);

(statearr_29521_29594[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (36))){
var inst_29446 = (state_29487[(25)]);
var inst_29450 = cljs.core.chunk_first.call(null,inst_29446);
var inst_29451 = cljs.core.chunk_rest.call(null,inst_29446);
var inst_29452 = cljs.core.count.call(null,inst_29450);
var inst_29427 = inst_29451;
var inst_29428 = inst_29450;
var inst_29429 = inst_29452;
var inst_29430 = (0);
var state_29487__$1 = (function (){var statearr_29522 = state_29487;
(statearr_29522[(20)] = inst_29427);

(statearr_29522[(9)] = inst_29430);

(statearr_29522[(21)] = inst_29429);

(statearr_29522[(11)] = inst_29428);

return statearr_29522;
})();
var statearr_29523_29595 = state_29487__$1;
(statearr_29523_29595[(2)] = null);

(statearr_29523_29595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (41))){
var inst_29446 = (state_29487[(25)]);
var inst_29462 = (state_29487[(2)]);
var inst_29463 = cljs.core.next.call(null,inst_29446);
var inst_29427 = inst_29463;
var inst_29428 = null;
var inst_29429 = (0);
var inst_29430 = (0);
var state_29487__$1 = (function (){var statearr_29524 = state_29487;
(statearr_29524[(20)] = inst_29427);

(statearr_29524[(9)] = inst_29430);

(statearr_29524[(21)] = inst_29429);

(statearr_29524[(11)] = inst_29428);

(statearr_29524[(27)] = inst_29462);

return statearr_29524;
})();
var statearr_29525_29596 = state_29487__$1;
(statearr_29525_29596[(2)] = null);

(statearr_29525_29596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (43))){
var state_29487__$1 = state_29487;
var statearr_29526_29597 = state_29487__$1;
(statearr_29526_29597[(2)] = null);

(statearr_29526_29597[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (29))){
var inst_29471 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29527_29598 = state_29487__$1;
(statearr_29527_29598[(2)] = inst_29471);

(statearr_29527_29598[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (44))){
var inst_29480 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29528 = state_29487;
(statearr_29528[(28)] = inst_29480);

return statearr_29528;
})();
var statearr_29529_29599 = state_29487__$1;
(statearr_29529_29599[(2)] = null);

(statearr_29529_29599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (6))){
var inst_29419 = (state_29487[(29)]);
var inst_29418 = cljs.core.deref.call(null,cs);
var inst_29419__$1 = cljs.core.keys.call(null,inst_29418);
var inst_29420 = cljs.core.count.call(null,inst_29419__$1);
var inst_29421 = cljs.core.reset_BANG_.call(null,dctr,inst_29420);
var inst_29426 = cljs.core.seq.call(null,inst_29419__$1);
var inst_29427 = inst_29426;
var inst_29428 = null;
var inst_29429 = (0);
var inst_29430 = (0);
var state_29487__$1 = (function (){var statearr_29530 = state_29487;
(statearr_29530[(20)] = inst_29427);

(statearr_29530[(9)] = inst_29430);

(statearr_29530[(21)] = inst_29429);

(statearr_29530[(11)] = inst_29428);

(statearr_29530[(30)] = inst_29421);

(statearr_29530[(29)] = inst_29419__$1);

return statearr_29530;
})();
var statearr_29531_29600 = state_29487__$1;
(statearr_29531_29600[(2)] = null);

(statearr_29531_29600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (28))){
var inst_29427 = (state_29487[(20)]);
var inst_29446 = (state_29487[(25)]);
var inst_29446__$1 = cljs.core.seq.call(null,inst_29427);
var state_29487__$1 = (function (){var statearr_29532 = state_29487;
(statearr_29532[(25)] = inst_29446__$1);

return statearr_29532;
})();
if(inst_29446__$1){
var statearr_29533_29601 = state_29487__$1;
(statearr_29533_29601[(1)] = (33));

} else {
var statearr_29534_29602 = state_29487__$1;
(statearr_29534_29602[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (25))){
var inst_29430 = (state_29487[(9)]);
var inst_29429 = (state_29487[(21)]);
var inst_29432 = (inst_29430 < inst_29429);
var inst_29433 = inst_29432;
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29433)){
var statearr_29535_29603 = state_29487__$1;
(statearr_29535_29603[(1)] = (27));

} else {
var statearr_29536_29604 = state_29487__$1;
(statearr_29536_29604[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (34))){
var state_29487__$1 = state_29487;
var statearr_29537_29605 = state_29487__$1;
(statearr_29537_29605[(2)] = null);

(statearr_29537_29605[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (17))){
var state_29487__$1 = state_29487;
var statearr_29538_29606 = state_29487__$1;
(statearr_29538_29606[(2)] = null);

(statearr_29538_29606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (3))){
var inst_29485 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29487__$1,inst_29485);
} else {
if((state_val_29488 === (12))){
var inst_29414 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29539_29607 = state_29487__$1;
(statearr_29539_29607[(2)] = inst_29414);

(statearr_29539_29607[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (2))){
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29487__$1,(4),ch);
} else {
if((state_val_29488 === (23))){
var state_29487__$1 = state_29487;
var statearr_29540_29608 = state_29487__$1;
(statearr_29540_29608[(2)] = null);

(statearr_29540_29608[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (35))){
var inst_29469 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29541_29609 = state_29487__$1;
(statearr_29541_29609[(2)] = inst_29469);

(statearr_29541_29609[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (19))){
var inst_29388 = (state_29487[(7)]);
var inst_29392 = cljs.core.chunk_first.call(null,inst_29388);
var inst_29393 = cljs.core.chunk_rest.call(null,inst_29388);
var inst_29394 = cljs.core.count.call(null,inst_29392);
var inst_29368 = inst_29393;
var inst_29369 = inst_29392;
var inst_29370 = inst_29394;
var inst_29371 = (0);
var state_29487__$1 = (function (){var statearr_29542 = state_29487;
(statearr_29542[(13)] = inst_29369);

(statearr_29542[(14)] = inst_29371);

(statearr_29542[(15)] = inst_29368);

(statearr_29542[(16)] = inst_29370);

return statearr_29542;
})();
var statearr_29543_29610 = state_29487__$1;
(statearr_29543_29610[(2)] = null);

(statearr_29543_29610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (11))){
var inst_29388 = (state_29487[(7)]);
var inst_29368 = (state_29487[(15)]);
var inst_29388__$1 = cljs.core.seq.call(null,inst_29368);
var state_29487__$1 = (function (){var statearr_29544 = state_29487;
(statearr_29544[(7)] = inst_29388__$1);

return statearr_29544;
})();
if(inst_29388__$1){
var statearr_29545_29611 = state_29487__$1;
(statearr_29545_29611[(1)] = (16));

} else {
var statearr_29546_29612 = state_29487__$1;
(statearr_29546_29612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (9))){
var inst_29416 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29547_29613 = state_29487__$1;
(statearr_29547_29613[(2)] = inst_29416);

(statearr_29547_29613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (5))){
var inst_29366 = cljs.core.deref.call(null,cs);
var inst_29367 = cljs.core.seq.call(null,inst_29366);
var inst_29368 = inst_29367;
var inst_29369 = null;
var inst_29370 = (0);
var inst_29371 = (0);
var state_29487__$1 = (function (){var statearr_29548 = state_29487;
(statearr_29548[(13)] = inst_29369);

(statearr_29548[(14)] = inst_29371);

(statearr_29548[(15)] = inst_29368);

(statearr_29548[(16)] = inst_29370);

return statearr_29548;
})();
var statearr_29549_29614 = state_29487__$1;
(statearr_29549_29614[(2)] = null);

(statearr_29549_29614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (14))){
var state_29487__$1 = state_29487;
var statearr_29550_29615 = state_29487__$1;
(statearr_29550_29615[(2)] = null);

(statearr_29550_29615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (45))){
var inst_29477 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29551_29616 = state_29487__$1;
(statearr_29551_29616[(2)] = inst_29477);

(statearr_29551_29616[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (26))){
var inst_29419 = (state_29487[(29)]);
var inst_29473 = (state_29487[(2)]);
var inst_29474 = cljs.core.seq.call(null,inst_29419);
var state_29487__$1 = (function (){var statearr_29552 = state_29487;
(statearr_29552[(31)] = inst_29473);

return statearr_29552;
})();
if(inst_29474){
var statearr_29553_29617 = state_29487__$1;
(statearr_29553_29617[(1)] = (42));

} else {
var statearr_29554_29618 = state_29487__$1;
(statearr_29554_29618[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (16))){
var inst_29388 = (state_29487[(7)]);
var inst_29390 = cljs.core.chunked_seq_QMARK_.call(null,inst_29388);
var state_29487__$1 = state_29487;
if(inst_29390){
var statearr_29555_29619 = state_29487__$1;
(statearr_29555_29619[(1)] = (19));

} else {
var statearr_29556_29620 = state_29487__$1;
(statearr_29556_29620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (38))){
var inst_29466 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29557_29621 = state_29487__$1;
(statearr_29557_29621[(2)] = inst_29466);

(statearr_29557_29621[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (30))){
var state_29487__$1 = state_29487;
var statearr_29558_29622 = state_29487__$1;
(statearr_29558_29622[(2)] = null);

(statearr_29558_29622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (10))){
var inst_29369 = (state_29487[(13)]);
var inst_29371 = (state_29487[(14)]);
var inst_29377 = cljs.core._nth.call(null,inst_29369,inst_29371);
var inst_29378 = cljs.core.nth.call(null,inst_29377,(0),null);
var inst_29379 = cljs.core.nth.call(null,inst_29377,(1),null);
var state_29487__$1 = (function (){var statearr_29559 = state_29487;
(statearr_29559[(26)] = inst_29378);

return statearr_29559;
})();
if(cljs.core.truth_(inst_29379)){
var statearr_29560_29623 = state_29487__$1;
(statearr_29560_29623[(1)] = (13));

} else {
var statearr_29561_29624 = state_29487__$1;
(statearr_29561_29624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (18))){
var inst_29412 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29562_29625 = state_29487__$1;
(statearr_29562_29625[(2)] = inst_29412);

(statearr_29562_29625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (42))){
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29487__$1,(45),dchan);
} else {
if((state_val_29488 === (37))){
var inst_29446 = (state_29487[(25)]);
var inst_29455 = (state_29487[(23)]);
var inst_29359 = (state_29487[(10)]);
var inst_29455__$1 = cljs.core.first.call(null,inst_29446);
var inst_29456 = cljs.core.async.put_BANG_.call(null,inst_29455__$1,inst_29359,done);
var state_29487__$1 = (function (){var statearr_29563 = state_29487;
(statearr_29563[(23)] = inst_29455__$1);

return statearr_29563;
})();
if(cljs.core.truth_(inst_29456)){
var statearr_29564_29626 = state_29487__$1;
(statearr_29564_29626[(1)] = (39));

} else {
var statearr_29565_29627 = state_29487__$1;
(statearr_29565_29627[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (8))){
var inst_29371 = (state_29487[(14)]);
var inst_29370 = (state_29487[(16)]);
var inst_29373 = (inst_29371 < inst_29370);
var inst_29374 = inst_29373;
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29374)){
var statearr_29566_29628 = state_29487__$1;
(statearr_29566_29628[(1)] = (10));

} else {
var statearr_29567_29629 = state_29487__$1;
(statearr_29567_29629[(1)] = (11));

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
});})(c__20669__auto___29575,cs,m,dchan,dctr,done))
;
return ((function (switch__20604__auto__,c__20669__auto___29575,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20605__auto__ = null;
var cljs$core$async$mult_$_state_machine__20605__auto____0 = (function (){
var statearr_29571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29571[(0)] = cljs$core$async$mult_$_state_machine__20605__auto__);

(statearr_29571[(1)] = (1));

return statearr_29571;
});
var cljs$core$async$mult_$_state_machine__20605__auto____1 = (function (state_29487){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_29487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e29572){if((e29572 instanceof Object)){
var ex__20608__auto__ = e29572;
var statearr_29573_29630 = state_29487;
(statearr_29573_29630[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29631 = state_29487;
state_29487 = G__29631;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20605__auto__ = function(state_29487){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20605__auto____1.call(this,state_29487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20605__auto____0;
cljs$core$async$mult_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20605__auto____1;
return cljs$core$async$mult_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___29575,cs,m,dchan,dctr,done))
})();
var state__20671__auto__ = (function (){var statearr_29574 = f__20670__auto__.call(null);
(statearr_29574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___29575);

return statearr_29574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___29575,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29632 = [];
var len__17833__auto___29635 = arguments.length;
var i__17834__auto___29636 = (0);
while(true){
if((i__17834__auto___29636 < len__17833__auto___29635)){
args29632.push((arguments[i__17834__auto___29636]));

var G__29637 = (i__17834__auto___29636 + (1));
i__17834__auto___29636 = G__29637;
continue;
} else {
}
break;
}

var G__29634 = args29632.length;
switch (G__29634) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29632.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17430__auto__ = (((m == null))?null:m);
var m__17431__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,m,ch);
} else {
var m__17431__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17430__auto__ = (((m == null))?null:m);
var m__17431__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,m,ch);
} else {
var m__17431__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17430__auto__ = (((m == null))?null:m);
var m__17431__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,m);
} else {
var m__17431__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17430__auto__ = (((m == null))?null:m);
var m__17431__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,m,state_map);
} else {
var m__17431__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17430__auto__ = (((m == null))?null:m);
var m__17431__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,m,mode);
} else {
var m__17431__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___29649 = arguments.length;
var i__17834__auto___29650 = (0);
while(true){
if((i__17834__auto___29650 < len__17833__auto___29649)){
args__17840__auto__.push((arguments[i__17834__auto___29650]));

var G__29651 = (i__17834__auto___29650 + (1));
i__17834__auto___29650 = G__29651;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((3) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17841__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29643){
var map__29644 = p__29643;
var map__29644__$1 = ((((!((map__29644 == null)))?((((map__29644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29644):map__29644);
var opts = map__29644__$1;
var statearr_29646_29652 = state;
(statearr_29646_29652[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29644,map__29644__$1,opts){
return (function (val){
var statearr_29647_29653 = state;
(statearr_29647_29653[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29644,map__29644__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29648_29654 = state;
(statearr_29648_29654[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29639){
var G__29640 = cljs.core.first.call(null,seq29639);
var seq29639__$1 = cljs.core.next.call(null,seq29639);
var G__29641 = cljs.core.first.call(null,seq29639__$1);
var seq29639__$2 = cljs.core.next.call(null,seq29639__$1);
var G__29642 = cljs.core.first.call(null,seq29639__$2);
var seq29639__$3 = cljs.core.next.call(null,seq29639__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29640,G__29641,G__29642,seq29639__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29818 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29819){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29819 = meta29819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29820,meta29819__$1){
var self__ = this;
var _29820__$1 = this;
return (new cljs.core.async.t_cljs$core$async29818(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29819__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29820){
var self__ = this;
var _29820__$1 = this;
return self__.meta29819;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29818.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29819","meta29819",-481839183,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29818";

cljs.core.async.t_cljs$core$async29818.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async29818");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29818 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29818(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29819){
return (new cljs.core.async.t_cljs$core$async29818(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29819));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29818(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20669__auto___29981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___29981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___29981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29918){
var state_val_29919 = (state_29918[(1)]);
if((state_val_29919 === (7))){
var inst_29836 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
var statearr_29920_29982 = state_29918__$1;
(statearr_29920_29982[(2)] = inst_29836);

(statearr_29920_29982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (20))){
var inst_29848 = (state_29918[(7)]);
var state_29918__$1 = state_29918;
var statearr_29921_29983 = state_29918__$1;
(statearr_29921_29983[(2)] = inst_29848);

(statearr_29921_29983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (27))){
var state_29918__$1 = state_29918;
var statearr_29922_29984 = state_29918__$1;
(statearr_29922_29984[(2)] = null);

(statearr_29922_29984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (1))){
var inst_29824 = (state_29918[(8)]);
var inst_29824__$1 = calc_state.call(null);
var inst_29826 = (inst_29824__$1 == null);
var inst_29827 = cljs.core.not.call(null,inst_29826);
var state_29918__$1 = (function (){var statearr_29923 = state_29918;
(statearr_29923[(8)] = inst_29824__$1);

return statearr_29923;
})();
if(inst_29827){
var statearr_29924_29985 = state_29918__$1;
(statearr_29924_29985[(1)] = (2));

} else {
var statearr_29925_29986 = state_29918__$1;
(statearr_29925_29986[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (24))){
var inst_29878 = (state_29918[(9)]);
var inst_29871 = (state_29918[(10)]);
var inst_29892 = (state_29918[(11)]);
var inst_29892__$1 = inst_29871.call(null,inst_29878);
var state_29918__$1 = (function (){var statearr_29926 = state_29918;
(statearr_29926[(11)] = inst_29892__$1);

return statearr_29926;
})();
if(cljs.core.truth_(inst_29892__$1)){
var statearr_29927_29987 = state_29918__$1;
(statearr_29927_29987[(1)] = (29));

} else {
var statearr_29928_29988 = state_29918__$1;
(statearr_29928_29988[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (4))){
var inst_29839 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
if(cljs.core.truth_(inst_29839)){
var statearr_29929_29989 = state_29918__$1;
(statearr_29929_29989[(1)] = (8));

} else {
var statearr_29930_29990 = state_29918__$1;
(statearr_29930_29990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (15))){
var inst_29865 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
if(cljs.core.truth_(inst_29865)){
var statearr_29931_29991 = state_29918__$1;
(statearr_29931_29991[(1)] = (19));

} else {
var statearr_29932_29992 = state_29918__$1;
(statearr_29932_29992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (21))){
var inst_29870 = (state_29918[(12)]);
var inst_29870__$1 = (state_29918[(2)]);
var inst_29871 = cljs.core.get.call(null,inst_29870__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29872 = cljs.core.get.call(null,inst_29870__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29873 = cljs.core.get.call(null,inst_29870__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29918__$1 = (function (){var statearr_29933 = state_29918;
(statearr_29933[(12)] = inst_29870__$1);

(statearr_29933[(10)] = inst_29871);

(statearr_29933[(13)] = inst_29872);

return statearr_29933;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29918__$1,(22),inst_29873);
} else {
if((state_val_29919 === (31))){
var inst_29900 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
if(cljs.core.truth_(inst_29900)){
var statearr_29934_29993 = state_29918__$1;
(statearr_29934_29993[(1)] = (32));

} else {
var statearr_29935_29994 = state_29918__$1;
(statearr_29935_29994[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (32))){
var inst_29877 = (state_29918[(14)]);
var state_29918__$1 = state_29918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29918__$1,(35),out,inst_29877);
} else {
if((state_val_29919 === (33))){
var inst_29870 = (state_29918[(12)]);
var inst_29848 = inst_29870;
var state_29918__$1 = (function (){var statearr_29936 = state_29918;
(statearr_29936[(7)] = inst_29848);

return statearr_29936;
})();
var statearr_29937_29995 = state_29918__$1;
(statearr_29937_29995[(2)] = null);

(statearr_29937_29995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (13))){
var inst_29848 = (state_29918[(7)]);
var inst_29855 = inst_29848.cljs$lang$protocol_mask$partition0$;
var inst_29856 = (inst_29855 & (64));
var inst_29857 = inst_29848.cljs$core$ISeq$;
var inst_29858 = (inst_29856) || (inst_29857);
var state_29918__$1 = state_29918;
if(cljs.core.truth_(inst_29858)){
var statearr_29938_29996 = state_29918__$1;
(statearr_29938_29996[(1)] = (16));

} else {
var statearr_29939_29997 = state_29918__$1;
(statearr_29939_29997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (22))){
var inst_29878 = (state_29918[(9)]);
var inst_29877 = (state_29918[(14)]);
var inst_29876 = (state_29918[(2)]);
var inst_29877__$1 = cljs.core.nth.call(null,inst_29876,(0),null);
var inst_29878__$1 = cljs.core.nth.call(null,inst_29876,(1),null);
var inst_29879 = (inst_29877__$1 == null);
var inst_29880 = cljs.core._EQ_.call(null,inst_29878__$1,change);
var inst_29881 = (inst_29879) || (inst_29880);
var state_29918__$1 = (function (){var statearr_29940 = state_29918;
(statearr_29940[(9)] = inst_29878__$1);

(statearr_29940[(14)] = inst_29877__$1);

return statearr_29940;
})();
if(cljs.core.truth_(inst_29881)){
var statearr_29941_29998 = state_29918__$1;
(statearr_29941_29998[(1)] = (23));

} else {
var statearr_29942_29999 = state_29918__$1;
(statearr_29942_29999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (36))){
var inst_29870 = (state_29918[(12)]);
var inst_29848 = inst_29870;
var state_29918__$1 = (function (){var statearr_29943 = state_29918;
(statearr_29943[(7)] = inst_29848);

return statearr_29943;
})();
var statearr_29944_30000 = state_29918__$1;
(statearr_29944_30000[(2)] = null);

(statearr_29944_30000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (29))){
var inst_29892 = (state_29918[(11)]);
var state_29918__$1 = state_29918;
var statearr_29945_30001 = state_29918__$1;
(statearr_29945_30001[(2)] = inst_29892);

(statearr_29945_30001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (6))){
var state_29918__$1 = state_29918;
var statearr_29946_30002 = state_29918__$1;
(statearr_29946_30002[(2)] = false);

(statearr_29946_30002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (28))){
var inst_29888 = (state_29918[(2)]);
var inst_29889 = calc_state.call(null);
var inst_29848 = inst_29889;
var state_29918__$1 = (function (){var statearr_29947 = state_29918;
(statearr_29947[(7)] = inst_29848);

(statearr_29947[(15)] = inst_29888);

return statearr_29947;
})();
var statearr_29948_30003 = state_29918__$1;
(statearr_29948_30003[(2)] = null);

(statearr_29948_30003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (25))){
var inst_29914 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
var statearr_29949_30004 = state_29918__$1;
(statearr_29949_30004[(2)] = inst_29914);

(statearr_29949_30004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (34))){
var inst_29912 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
var statearr_29950_30005 = state_29918__$1;
(statearr_29950_30005[(2)] = inst_29912);

(statearr_29950_30005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (17))){
var state_29918__$1 = state_29918;
var statearr_29951_30006 = state_29918__$1;
(statearr_29951_30006[(2)] = false);

(statearr_29951_30006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (3))){
var state_29918__$1 = state_29918;
var statearr_29952_30007 = state_29918__$1;
(statearr_29952_30007[(2)] = false);

(statearr_29952_30007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (12))){
var inst_29916 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29918__$1,inst_29916);
} else {
if((state_val_29919 === (2))){
var inst_29824 = (state_29918[(8)]);
var inst_29829 = inst_29824.cljs$lang$protocol_mask$partition0$;
var inst_29830 = (inst_29829 & (64));
var inst_29831 = inst_29824.cljs$core$ISeq$;
var inst_29832 = (inst_29830) || (inst_29831);
var state_29918__$1 = state_29918;
if(cljs.core.truth_(inst_29832)){
var statearr_29953_30008 = state_29918__$1;
(statearr_29953_30008[(1)] = (5));

} else {
var statearr_29954_30009 = state_29918__$1;
(statearr_29954_30009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (23))){
var inst_29877 = (state_29918[(14)]);
var inst_29883 = (inst_29877 == null);
var state_29918__$1 = state_29918;
if(cljs.core.truth_(inst_29883)){
var statearr_29955_30010 = state_29918__$1;
(statearr_29955_30010[(1)] = (26));

} else {
var statearr_29956_30011 = state_29918__$1;
(statearr_29956_30011[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (35))){
var inst_29903 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
if(cljs.core.truth_(inst_29903)){
var statearr_29957_30012 = state_29918__$1;
(statearr_29957_30012[(1)] = (36));

} else {
var statearr_29958_30013 = state_29918__$1;
(statearr_29958_30013[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (19))){
var inst_29848 = (state_29918[(7)]);
var inst_29867 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29848);
var state_29918__$1 = state_29918;
var statearr_29959_30014 = state_29918__$1;
(statearr_29959_30014[(2)] = inst_29867);

(statearr_29959_30014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (11))){
var inst_29848 = (state_29918[(7)]);
var inst_29852 = (inst_29848 == null);
var inst_29853 = cljs.core.not.call(null,inst_29852);
var state_29918__$1 = state_29918;
if(inst_29853){
var statearr_29960_30015 = state_29918__$1;
(statearr_29960_30015[(1)] = (13));

} else {
var statearr_29961_30016 = state_29918__$1;
(statearr_29961_30016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (9))){
var inst_29824 = (state_29918[(8)]);
var state_29918__$1 = state_29918;
var statearr_29962_30017 = state_29918__$1;
(statearr_29962_30017[(2)] = inst_29824);

(statearr_29962_30017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (5))){
var state_29918__$1 = state_29918;
var statearr_29963_30018 = state_29918__$1;
(statearr_29963_30018[(2)] = true);

(statearr_29963_30018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (14))){
var state_29918__$1 = state_29918;
var statearr_29964_30019 = state_29918__$1;
(statearr_29964_30019[(2)] = false);

(statearr_29964_30019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (26))){
var inst_29878 = (state_29918[(9)]);
var inst_29885 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29878);
var state_29918__$1 = state_29918;
var statearr_29965_30020 = state_29918__$1;
(statearr_29965_30020[(2)] = inst_29885);

(statearr_29965_30020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (16))){
var state_29918__$1 = state_29918;
var statearr_29966_30021 = state_29918__$1;
(statearr_29966_30021[(2)] = true);

(statearr_29966_30021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (38))){
var inst_29908 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
var statearr_29967_30022 = state_29918__$1;
(statearr_29967_30022[(2)] = inst_29908);

(statearr_29967_30022[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (30))){
var inst_29878 = (state_29918[(9)]);
var inst_29871 = (state_29918[(10)]);
var inst_29872 = (state_29918[(13)]);
var inst_29895 = cljs.core.empty_QMARK_.call(null,inst_29871);
var inst_29896 = inst_29872.call(null,inst_29878);
var inst_29897 = cljs.core.not.call(null,inst_29896);
var inst_29898 = (inst_29895) && (inst_29897);
var state_29918__$1 = state_29918;
var statearr_29968_30023 = state_29918__$1;
(statearr_29968_30023[(2)] = inst_29898);

(statearr_29968_30023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (10))){
var inst_29824 = (state_29918[(8)]);
var inst_29844 = (state_29918[(2)]);
var inst_29845 = cljs.core.get.call(null,inst_29844,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29846 = cljs.core.get.call(null,inst_29844,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29847 = cljs.core.get.call(null,inst_29844,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29848 = inst_29824;
var state_29918__$1 = (function (){var statearr_29969 = state_29918;
(statearr_29969[(7)] = inst_29848);

(statearr_29969[(16)] = inst_29845);

(statearr_29969[(17)] = inst_29847);

(statearr_29969[(18)] = inst_29846);

return statearr_29969;
})();
var statearr_29970_30024 = state_29918__$1;
(statearr_29970_30024[(2)] = null);

(statearr_29970_30024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (18))){
var inst_29862 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
var statearr_29971_30025 = state_29918__$1;
(statearr_29971_30025[(2)] = inst_29862);

(statearr_29971_30025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (37))){
var state_29918__$1 = state_29918;
var statearr_29972_30026 = state_29918__$1;
(statearr_29972_30026[(2)] = null);

(statearr_29972_30026[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (8))){
var inst_29824 = (state_29918[(8)]);
var inst_29841 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29824);
var state_29918__$1 = state_29918;
var statearr_29973_30027 = state_29918__$1;
(statearr_29973_30027[(2)] = inst_29841);

(statearr_29973_30027[(1)] = (10));


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
});})(c__20669__auto___29981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20604__auto__,c__20669__auto___29981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20605__auto__ = null;
var cljs$core$async$mix_$_state_machine__20605__auto____0 = (function (){
var statearr_29977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29977[(0)] = cljs$core$async$mix_$_state_machine__20605__auto__);

(statearr_29977[(1)] = (1));

return statearr_29977;
});
var cljs$core$async$mix_$_state_machine__20605__auto____1 = (function (state_29918){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_29918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e29978){if((e29978 instanceof Object)){
var ex__20608__auto__ = e29978;
var statearr_29979_30028 = state_29918;
(statearr_29979_30028[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30029 = state_29918;
state_29918 = G__30029;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20605__auto__ = function(state_29918){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20605__auto____1.call(this,state_29918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20605__auto____0;
cljs$core$async$mix_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20605__auto____1;
return cljs$core$async$mix_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___29981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20671__auto__ = (function (){var statearr_29980 = f__20670__auto__.call(null);
(statearr_29980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___29981);

return statearr_29980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___29981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17430__auto__ = (((p == null))?null:p);
var m__17431__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17431__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17430__auto__ = (((p == null))?null:p);
var m__17431__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,p,v,ch);
} else {
var m__17431__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30030 = [];
var len__17833__auto___30033 = arguments.length;
var i__17834__auto___30034 = (0);
while(true){
if((i__17834__auto___30034 < len__17833__auto___30033)){
args30030.push((arguments[i__17834__auto___30034]));

var G__30035 = (i__17834__auto___30034 + (1));
i__17834__auto___30034 = G__30035;
continue;
} else {
}
break;
}

var G__30032 = args30030.length;
switch (G__30032) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30030.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17430__auto__ = (((p == null))?null:p);
var m__17431__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,p);
} else {
var m__17431__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17430__auto__ = (((p == null))?null:p);
var m__17431__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17430__auto__)]);
if(!((m__17431__auto__ == null))){
return m__17431__auto__.call(null,p,v);
} else {
var m__17431__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17431__auto____$1 == null))){
return m__17431__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30038 = [];
var len__17833__auto___30163 = arguments.length;
var i__17834__auto___30164 = (0);
while(true){
if((i__17834__auto___30164 < len__17833__auto___30163)){
args30038.push((arguments[i__17834__auto___30164]));

var G__30165 = (i__17834__auto___30164 + (1));
i__17834__auto___30164 = G__30165;
continue;
} else {
}
break;
}

var G__30040 = args30038.length;
switch (G__30040) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30038.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16775__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16775__auto__,mults){
return (function (p1__30037_SHARP_){
if(cljs.core.truth_(p1__30037_SHARP_.call(null,topic))){
return p1__30037_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30037_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16775__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30041 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30042){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30042 = meta30042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30043,meta30042__$1){
var self__ = this;
var _30043__$1 = this;
return (new cljs.core.async.t_cljs$core$async30041(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30042__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30043){
var self__ = this;
var _30043__$1 = this;
return self__.meta30042;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30041.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30041.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30041.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30041.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30041.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30042","meta30042",-1171528831,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30041";

cljs.core.async.t_cljs$core$async30041.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async30041");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30041 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30042){
return (new cljs.core.async.t_cljs$core$async30041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30042));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30041(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20669__auto___30167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___30167,mults,ensure_mult,p){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___30167,mults,ensure_mult,p){
return (function (state_30115){
var state_val_30116 = (state_30115[(1)]);
if((state_val_30116 === (7))){
var inst_30111 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30117_30168 = state_30115__$1;
(statearr_30117_30168[(2)] = inst_30111);

(statearr_30117_30168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (20))){
var state_30115__$1 = state_30115;
var statearr_30118_30169 = state_30115__$1;
(statearr_30118_30169[(2)] = null);

(statearr_30118_30169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (1))){
var state_30115__$1 = state_30115;
var statearr_30119_30170 = state_30115__$1;
(statearr_30119_30170[(2)] = null);

(statearr_30119_30170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (24))){
var inst_30094 = (state_30115[(7)]);
var inst_30103 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30094);
var state_30115__$1 = state_30115;
var statearr_30120_30171 = state_30115__$1;
(statearr_30120_30171[(2)] = inst_30103);

(statearr_30120_30171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (4))){
var inst_30046 = (state_30115[(8)]);
var inst_30046__$1 = (state_30115[(2)]);
var inst_30047 = (inst_30046__$1 == null);
var state_30115__$1 = (function (){var statearr_30121 = state_30115;
(statearr_30121[(8)] = inst_30046__$1);

return statearr_30121;
})();
if(cljs.core.truth_(inst_30047)){
var statearr_30122_30172 = state_30115__$1;
(statearr_30122_30172[(1)] = (5));

} else {
var statearr_30123_30173 = state_30115__$1;
(statearr_30123_30173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (15))){
var inst_30088 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30124_30174 = state_30115__$1;
(statearr_30124_30174[(2)] = inst_30088);

(statearr_30124_30174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (21))){
var inst_30108 = (state_30115[(2)]);
var state_30115__$1 = (function (){var statearr_30125 = state_30115;
(statearr_30125[(9)] = inst_30108);

return statearr_30125;
})();
var statearr_30126_30175 = state_30115__$1;
(statearr_30126_30175[(2)] = null);

(statearr_30126_30175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (13))){
var inst_30070 = (state_30115[(10)]);
var inst_30072 = cljs.core.chunked_seq_QMARK_.call(null,inst_30070);
var state_30115__$1 = state_30115;
if(inst_30072){
var statearr_30127_30176 = state_30115__$1;
(statearr_30127_30176[(1)] = (16));

} else {
var statearr_30128_30177 = state_30115__$1;
(statearr_30128_30177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (22))){
var inst_30100 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
if(cljs.core.truth_(inst_30100)){
var statearr_30129_30178 = state_30115__$1;
(statearr_30129_30178[(1)] = (23));

} else {
var statearr_30130_30179 = state_30115__$1;
(statearr_30130_30179[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (6))){
var inst_30096 = (state_30115[(11)]);
var inst_30046 = (state_30115[(8)]);
var inst_30094 = (state_30115[(7)]);
var inst_30094__$1 = topic_fn.call(null,inst_30046);
var inst_30095 = cljs.core.deref.call(null,mults);
var inst_30096__$1 = cljs.core.get.call(null,inst_30095,inst_30094__$1);
var state_30115__$1 = (function (){var statearr_30131 = state_30115;
(statearr_30131[(11)] = inst_30096__$1);

(statearr_30131[(7)] = inst_30094__$1);

return statearr_30131;
})();
if(cljs.core.truth_(inst_30096__$1)){
var statearr_30132_30180 = state_30115__$1;
(statearr_30132_30180[(1)] = (19));

} else {
var statearr_30133_30181 = state_30115__$1;
(statearr_30133_30181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (25))){
var inst_30105 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30134_30182 = state_30115__$1;
(statearr_30134_30182[(2)] = inst_30105);

(statearr_30134_30182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (17))){
var inst_30070 = (state_30115[(10)]);
var inst_30079 = cljs.core.first.call(null,inst_30070);
var inst_30080 = cljs.core.async.muxch_STAR_.call(null,inst_30079);
var inst_30081 = cljs.core.async.close_BANG_.call(null,inst_30080);
var inst_30082 = cljs.core.next.call(null,inst_30070);
var inst_30056 = inst_30082;
var inst_30057 = null;
var inst_30058 = (0);
var inst_30059 = (0);
var state_30115__$1 = (function (){var statearr_30135 = state_30115;
(statearr_30135[(12)] = inst_30056);

(statearr_30135[(13)] = inst_30057);

(statearr_30135[(14)] = inst_30081);

(statearr_30135[(15)] = inst_30058);

(statearr_30135[(16)] = inst_30059);

return statearr_30135;
})();
var statearr_30136_30183 = state_30115__$1;
(statearr_30136_30183[(2)] = null);

(statearr_30136_30183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (3))){
var inst_30113 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30115__$1,inst_30113);
} else {
if((state_val_30116 === (12))){
var inst_30090 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30137_30184 = state_30115__$1;
(statearr_30137_30184[(2)] = inst_30090);

(statearr_30137_30184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (2))){
var state_30115__$1 = state_30115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30115__$1,(4),ch);
} else {
if((state_val_30116 === (23))){
var state_30115__$1 = state_30115;
var statearr_30138_30185 = state_30115__$1;
(statearr_30138_30185[(2)] = null);

(statearr_30138_30185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (19))){
var inst_30096 = (state_30115[(11)]);
var inst_30046 = (state_30115[(8)]);
var inst_30098 = cljs.core.async.muxch_STAR_.call(null,inst_30096);
var state_30115__$1 = state_30115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30115__$1,(22),inst_30098,inst_30046);
} else {
if((state_val_30116 === (11))){
var inst_30056 = (state_30115[(12)]);
var inst_30070 = (state_30115[(10)]);
var inst_30070__$1 = cljs.core.seq.call(null,inst_30056);
var state_30115__$1 = (function (){var statearr_30139 = state_30115;
(statearr_30139[(10)] = inst_30070__$1);

return statearr_30139;
})();
if(inst_30070__$1){
var statearr_30140_30186 = state_30115__$1;
(statearr_30140_30186[(1)] = (13));

} else {
var statearr_30141_30187 = state_30115__$1;
(statearr_30141_30187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (9))){
var inst_30092 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30142_30188 = state_30115__$1;
(statearr_30142_30188[(2)] = inst_30092);

(statearr_30142_30188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (5))){
var inst_30053 = cljs.core.deref.call(null,mults);
var inst_30054 = cljs.core.vals.call(null,inst_30053);
var inst_30055 = cljs.core.seq.call(null,inst_30054);
var inst_30056 = inst_30055;
var inst_30057 = null;
var inst_30058 = (0);
var inst_30059 = (0);
var state_30115__$1 = (function (){var statearr_30143 = state_30115;
(statearr_30143[(12)] = inst_30056);

(statearr_30143[(13)] = inst_30057);

(statearr_30143[(15)] = inst_30058);

(statearr_30143[(16)] = inst_30059);

return statearr_30143;
})();
var statearr_30144_30189 = state_30115__$1;
(statearr_30144_30189[(2)] = null);

(statearr_30144_30189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (14))){
var state_30115__$1 = state_30115;
var statearr_30148_30190 = state_30115__$1;
(statearr_30148_30190[(2)] = null);

(statearr_30148_30190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (16))){
var inst_30070 = (state_30115[(10)]);
var inst_30074 = cljs.core.chunk_first.call(null,inst_30070);
var inst_30075 = cljs.core.chunk_rest.call(null,inst_30070);
var inst_30076 = cljs.core.count.call(null,inst_30074);
var inst_30056 = inst_30075;
var inst_30057 = inst_30074;
var inst_30058 = inst_30076;
var inst_30059 = (0);
var state_30115__$1 = (function (){var statearr_30149 = state_30115;
(statearr_30149[(12)] = inst_30056);

(statearr_30149[(13)] = inst_30057);

(statearr_30149[(15)] = inst_30058);

(statearr_30149[(16)] = inst_30059);

return statearr_30149;
})();
var statearr_30150_30191 = state_30115__$1;
(statearr_30150_30191[(2)] = null);

(statearr_30150_30191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (10))){
var inst_30056 = (state_30115[(12)]);
var inst_30057 = (state_30115[(13)]);
var inst_30058 = (state_30115[(15)]);
var inst_30059 = (state_30115[(16)]);
var inst_30064 = cljs.core._nth.call(null,inst_30057,inst_30059);
var inst_30065 = cljs.core.async.muxch_STAR_.call(null,inst_30064);
var inst_30066 = cljs.core.async.close_BANG_.call(null,inst_30065);
var inst_30067 = (inst_30059 + (1));
var tmp30145 = inst_30056;
var tmp30146 = inst_30057;
var tmp30147 = inst_30058;
var inst_30056__$1 = tmp30145;
var inst_30057__$1 = tmp30146;
var inst_30058__$1 = tmp30147;
var inst_30059__$1 = inst_30067;
var state_30115__$1 = (function (){var statearr_30151 = state_30115;
(statearr_30151[(17)] = inst_30066);

(statearr_30151[(12)] = inst_30056__$1);

(statearr_30151[(13)] = inst_30057__$1);

(statearr_30151[(15)] = inst_30058__$1);

(statearr_30151[(16)] = inst_30059__$1);

return statearr_30151;
})();
var statearr_30152_30192 = state_30115__$1;
(statearr_30152_30192[(2)] = null);

(statearr_30152_30192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (18))){
var inst_30085 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30153_30193 = state_30115__$1;
(statearr_30153_30193[(2)] = inst_30085);

(statearr_30153_30193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (8))){
var inst_30058 = (state_30115[(15)]);
var inst_30059 = (state_30115[(16)]);
var inst_30061 = (inst_30059 < inst_30058);
var inst_30062 = inst_30061;
var state_30115__$1 = state_30115;
if(cljs.core.truth_(inst_30062)){
var statearr_30154_30194 = state_30115__$1;
(statearr_30154_30194[(1)] = (10));

} else {
var statearr_30155_30195 = state_30115__$1;
(statearr_30155_30195[(1)] = (11));

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
});})(c__20669__auto___30167,mults,ensure_mult,p))
;
return ((function (switch__20604__auto__,c__20669__auto___30167,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_30159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30159[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_30159[(1)] = (1));

return statearr_30159;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_30115){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_30115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e30160){if((e30160 instanceof Object)){
var ex__20608__auto__ = e30160;
var statearr_30161_30196 = state_30115;
(statearr_30161_30196[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30197 = state_30115;
state_30115 = G__30197;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_30115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_30115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___30167,mults,ensure_mult,p))
})();
var state__20671__auto__ = (function (){var statearr_30162 = f__20670__auto__.call(null);
(statearr_30162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___30167);

return statearr_30162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___30167,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30198 = [];
var len__17833__auto___30201 = arguments.length;
var i__17834__auto___30202 = (0);
while(true){
if((i__17834__auto___30202 < len__17833__auto___30201)){
args30198.push((arguments[i__17834__auto___30202]));

var G__30203 = (i__17834__auto___30202 + (1));
i__17834__auto___30202 = G__30203;
continue;
} else {
}
break;
}

var G__30200 = args30198.length;
switch (G__30200) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30198.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30205 = [];
var len__17833__auto___30208 = arguments.length;
var i__17834__auto___30209 = (0);
while(true){
if((i__17834__auto___30209 < len__17833__auto___30208)){
args30205.push((arguments[i__17834__auto___30209]));

var G__30210 = (i__17834__auto___30209 + (1));
i__17834__auto___30209 = G__30210;
continue;
} else {
}
break;
}

var G__30207 = args30205.length;
switch (G__30207) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30205.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30212 = [];
var len__17833__auto___30283 = arguments.length;
var i__17834__auto___30284 = (0);
while(true){
if((i__17834__auto___30284 < len__17833__auto___30283)){
args30212.push((arguments[i__17834__auto___30284]));

var G__30285 = (i__17834__auto___30284 + (1));
i__17834__auto___30284 = G__30285;
continue;
} else {
}
break;
}

var G__30214 = args30212.length;
switch (G__30214) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30212.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20669__auto___30287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___30287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___30287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30253){
var state_val_30254 = (state_30253[(1)]);
if((state_val_30254 === (7))){
var state_30253__$1 = state_30253;
var statearr_30255_30288 = state_30253__$1;
(statearr_30255_30288[(2)] = null);

(statearr_30255_30288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (1))){
var state_30253__$1 = state_30253;
var statearr_30256_30289 = state_30253__$1;
(statearr_30256_30289[(2)] = null);

(statearr_30256_30289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (4))){
var inst_30217 = (state_30253[(7)]);
var inst_30219 = (inst_30217 < cnt);
var state_30253__$1 = state_30253;
if(cljs.core.truth_(inst_30219)){
var statearr_30257_30290 = state_30253__$1;
(statearr_30257_30290[(1)] = (6));

} else {
var statearr_30258_30291 = state_30253__$1;
(statearr_30258_30291[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (15))){
var inst_30249 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
var statearr_30259_30292 = state_30253__$1;
(statearr_30259_30292[(2)] = inst_30249);

(statearr_30259_30292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (13))){
var inst_30242 = cljs.core.async.close_BANG_.call(null,out);
var state_30253__$1 = state_30253;
var statearr_30260_30293 = state_30253__$1;
(statearr_30260_30293[(2)] = inst_30242);

(statearr_30260_30293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (6))){
var state_30253__$1 = state_30253;
var statearr_30261_30294 = state_30253__$1;
(statearr_30261_30294[(2)] = null);

(statearr_30261_30294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (3))){
var inst_30251 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30253__$1,inst_30251);
} else {
if((state_val_30254 === (12))){
var inst_30239 = (state_30253[(8)]);
var inst_30239__$1 = (state_30253[(2)]);
var inst_30240 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30239__$1);
var state_30253__$1 = (function (){var statearr_30262 = state_30253;
(statearr_30262[(8)] = inst_30239__$1);

return statearr_30262;
})();
if(cljs.core.truth_(inst_30240)){
var statearr_30263_30295 = state_30253__$1;
(statearr_30263_30295[(1)] = (13));

} else {
var statearr_30264_30296 = state_30253__$1;
(statearr_30264_30296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (2))){
var inst_30216 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30217 = (0);
var state_30253__$1 = (function (){var statearr_30265 = state_30253;
(statearr_30265[(7)] = inst_30217);

(statearr_30265[(9)] = inst_30216);

return statearr_30265;
})();
var statearr_30266_30297 = state_30253__$1;
(statearr_30266_30297[(2)] = null);

(statearr_30266_30297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (11))){
var inst_30217 = (state_30253[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30253,(10),Object,null,(9));
var inst_30226 = chs__$1.call(null,inst_30217);
var inst_30227 = done.call(null,inst_30217);
var inst_30228 = cljs.core.async.take_BANG_.call(null,inst_30226,inst_30227);
var state_30253__$1 = state_30253;
var statearr_30267_30298 = state_30253__$1;
(statearr_30267_30298[(2)] = inst_30228);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30253__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (9))){
var inst_30217 = (state_30253[(7)]);
var inst_30230 = (state_30253[(2)]);
var inst_30231 = (inst_30217 + (1));
var inst_30217__$1 = inst_30231;
var state_30253__$1 = (function (){var statearr_30268 = state_30253;
(statearr_30268[(10)] = inst_30230);

(statearr_30268[(7)] = inst_30217__$1);

return statearr_30268;
})();
var statearr_30269_30299 = state_30253__$1;
(statearr_30269_30299[(2)] = null);

(statearr_30269_30299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (5))){
var inst_30237 = (state_30253[(2)]);
var state_30253__$1 = (function (){var statearr_30270 = state_30253;
(statearr_30270[(11)] = inst_30237);

return statearr_30270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30253__$1,(12),dchan);
} else {
if((state_val_30254 === (14))){
var inst_30239 = (state_30253[(8)]);
var inst_30244 = cljs.core.apply.call(null,f,inst_30239);
var state_30253__$1 = state_30253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30253__$1,(16),out,inst_30244);
} else {
if((state_val_30254 === (16))){
var inst_30246 = (state_30253[(2)]);
var state_30253__$1 = (function (){var statearr_30271 = state_30253;
(statearr_30271[(12)] = inst_30246);

return statearr_30271;
})();
var statearr_30272_30300 = state_30253__$1;
(statearr_30272_30300[(2)] = null);

(statearr_30272_30300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (10))){
var inst_30221 = (state_30253[(2)]);
var inst_30222 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30253__$1 = (function (){var statearr_30273 = state_30253;
(statearr_30273[(13)] = inst_30221);

return statearr_30273;
})();
var statearr_30274_30301 = state_30253__$1;
(statearr_30274_30301[(2)] = inst_30222);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30253__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (8))){
var inst_30235 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
var statearr_30275_30302 = state_30253__$1;
(statearr_30275_30302[(2)] = inst_30235);

(statearr_30275_30302[(1)] = (5));


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
});})(c__20669__auto___30287,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20604__auto__,c__20669__auto___30287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_30279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30279[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_30279[(1)] = (1));

return statearr_30279;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_30253){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_30253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e30280){if((e30280 instanceof Object)){
var ex__20608__auto__ = e30280;
var statearr_30281_30303 = state_30253;
(statearr_30281_30303[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30304 = state_30253;
state_30253 = G__30304;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_30253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_30253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___30287,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20671__auto__ = (function (){var statearr_30282 = f__20670__auto__.call(null);
(statearr_30282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___30287);

return statearr_30282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___30287,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30306 = [];
var len__17833__auto___30362 = arguments.length;
var i__17834__auto___30363 = (0);
while(true){
if((i__17834__auto___30363 < len__17833__auto___30362)){
args30306.push((arguments[i__17834__auto___30363]));

var G__30364 = (i__17834__auto___30363 + (1));
i__17834__auto___30363 = G__30364;
continue;
} else {
}
break;
}

var G__30308 = args30306.length;
switch (G__30308) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30306.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20669__auto___30366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___30366,out){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___30366,out){
return (function (state_30338){
var state_val_30339 = (state_30338[(1)]);
if((state_val_30339 === (7))){
var inst_30317 = (state_30338[(7)]);
var inst_30318 = (state_30338[(8)]);
var inst_30317__$1 = (state_30338[(2)]);
var inst_30318__$1 = cljs.core.nth.call(null,inst_30317__$1,(0),null);
var inst_30319 = cljs.core.nth.call(null,inst_30317__$1,(1),null);
var inst_30320 = (inst_30318__$1 == null);
var state_30338__$1 = (function (){var statearr_30340 = state_30338;
(statearr_30340[(7)] = inst_30317__$1);

(statearr_30340[(8)] = inst_30318__$1);

(statearr_30340[(9)] = inst_30319);

return statearr_30340;
})();
if(cljs.core.truth_(inst_30320)){
var statearr_30341_30367 = state_30338__$1;
(statearr_30341_30367[(1)] = (8));

} else {
var statearr_30342_30368 = state_30338__$1;
(statearr_30342_30368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (1))){
var inst_30309 = cljs.core.vec.call(null,chs);
var inst_30310 = inst_30309;
var state_30338__$1 = (function (){var statearr_30343 = state_30338;
(statearr_30343[(10)] = inst_30310);

return statearr_30343;
})();
var statearr_30344_30369 = state_30338__$1;
(statearr_30344_30369[(2)] = null);

(statearr_30344_30369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (4))){
var inst_30310 = (state_30338[(10)]);
var state_30338__$1 = state_30338;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30338__$1,(7),inst_30310);
} else {
if((state_val_30339 === (6))){
var inst_30334 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30345_30370 = state_30338__$1;
(statearr_30345_30370[(2)] = inst_30334);

(statearr_30345_30370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (3))){
var inst_30336 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30338__$1,inst_30336);
} else {
if((state_val_30339 === (2))){
var inst_30310 = (state_30338[(10)]);
var inst_30312 = cljs.core.count.call(null,inst_30310);
var inst_30313 = (inst_30312 > (0));
var state_30338__$1 = state_30338;
if(cljs.core.truth_(inst_30313)){
var statearr_30347_30371 = state_30338__$1;
(statearr_30347_30371[(1)] = (4));

} else {
var statearr_30348_30372 = state_30338__$1;
(statearr_30348_30372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (11))){
var inst_30310 = (state_30338[(10)]);
var inst_30327 = (state_30338[(2)]);
var tmp30346 = inst_30310;
var inst_30310__$1 = tmp30346;
var state_30338__$1 = (function (){var statearr_30349 = state_30338;
(statearr_30349[(11)] = inst_30327);

(statearr_30349[(10)] = inst_30310__$1);

return statearr_30349;
})();
var statearr_30350_30373 = state_30338__$1;
(statearr_30350_30373[(2)] = null);

(statearr_30350_30373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (9))){
var inst_30318 = (state_30338[(8)]);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30338__$1,(11),out,inst_30318);
} else {
if((state_val_30339 === (5))){
var inst_30332 = cljs.core.async.close_BANG_.call(null,out);
var state_30338__$1 = state_30338;
var statearr_30351_30374 = state_30338__$1;
(statearr_30351_30374[(2)] = inst_30332);

(statearr_30351_30374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (10))){
var inst_30330 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30352_30375 = state_30338__$1;
(statearr_30352_30375[(2)] = inst_30330);

(statearr_30352_30375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (8))){
var inst_30310 = (state_30338[(10)]);
var inst_30317 = (state_30338[(7)]);
var inst_30318 = (state_30338[(8)]);
var inst_30319 = (state_30338[(9)]);
var inst_30322 = (function (){var cs = inst_30310;
var vec__30315 = inst_30317;
var v = inst_30318;
var c = inst_30319;
return ((function (cs,vec__30315,v,c,inst_30310,inst_30317,inst_30318,inst_30319,state_val_30339,c__20669__auto___30366,out){
return (function (p1__30305_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30305_SHARP_);
});
;})(cs,vec__30315,v,c,inst_30310,inst_30317,inst_30318,inst_30319,state_val_30339,c__20669__auto___30366,out))
})();
var inst_30323 = cljs.core.filterv.call(null,inst_30322,inst_30310);
var inst_30310__$1 = inst_30323;
var state_30338__$1 = (function (){var statearr_30353 = state_30338;
(statearr_30353[(10)] = inst_30310__$1);

return statearr_30353;
})();
var statearr_30354_30376 = state_30338__$1;
(statearr_30354_30376[(2)] = null);

(statearr_30354_30376[(1)] = (2));


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
});})(c__20669__auto___30366,out))
;
return ((function (switch__20604__auto__,c__20669__auto___30366,out){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_30358 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30358[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_30358[(1)] = (1));

return statearr_30358;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_30338){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_30338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e30359){if((e30359 instanceof Object)){
var ex__20608__auto__ = e30359;
var statearr_30360_30377 = state_30338;
(statearr_30360_30377[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30378 = state_30338;
state_30338 = G__30378;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_30338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_30338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___30366,out))
})();
var state__20671__auto__ = (function (){var statearr_30361 = f__20670__auto__.call(null);
(statearr_30361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___30366);

return statearr_30361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___30366,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30379 = [];
var len__17833__auto___30428 = arguments.length;
var i__17834__auto___30429 = (0);
while(true){
if((i__17834__auto___30429 < len__17833__auto___30428)){
args30379.push((arguments[i__17834__auto___30429]));

var G__30430 = (i__17834__auto___30429 + (1));
i__17834__auto___30429 = G__30430;
continue;
} else {
}
break;
}

var G__30381 = args30379.length;
switch (G__30381) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30379.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20669__auto___30432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___30432,out){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___30432,out){
return (function (state_30405){
var state_val_30406 = (state_30405[(1)]);
if((state_val_30406 === (7))){
var inst_30387 = (state_30405[(7)]);
var inst_30387__$1 = (state_30405[(2)]);
var inst_30388 = (inst_30387__$1 == null);
var inst_30389 = cljs.core.not.call(null,inst_30388);
var state_30405__$1 = (function (){var statearr_30407 = state_30405;
(statearr_30407[(7)] = inst_30387__$1);

return statearr_30407;
})();
if(inst_30389){
var statearr_30408_30433 = state_30405__$1;
(statearr_30408_30433[(1)] = (8));

} else {
var statearr_30409_30434 = state_30405__$1;
(statearr_30409_30434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (1))){
var inst_30382 = (0);
var state_30405__$1 = (function (){var statearr_30410 = state_30405;
(statearr_30410[(8)] = inst_30382);

return statearr_30410;
})();
var statearr_30411_30435 = state_30405__$1;
(statearr_30411_30435[(2)] = null);

(statearr_30411_30435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (4))){
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(7),ch);
} else {
if((state_val_30406 === (6))){
var inst_30400 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30412_30436 = state_30405__$1;
(statearr_30412_30436[(2)] = inst_30400);

(statearr_30412_30436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (3))){
var inst_30402 = (state_30405[(2)]);
var inst_30403 = cljs.core.async.close_BANG_.call(null,out);
var state_30405__$1 = (function (){var statearr_30413 = state_30405;
(statearr_30413[(9)] = inst_30402);

return statearr_30413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30405__$1,inst_30403);
} else {
if((state_val_30406 === (2))){
var inst_30382 = (state_30405[(8)]);
var inst_30384 = (inst_30382 < n);
var state_30405__$1 = state_30405;
if(cljs.core.truth_(inst_30384)){
var statearr_30414_30437 = state_30405__$1;
(statearr_30414_30437[(1)] = (4));

} else {
var statearr_30415_30438 = state_30405__$1;
(statearr_30415_30438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (11))){
var inst_30382 = (state_30405[(8)]);
var inst_30392 = (state_30405[(2)]);
var inst_30393 = (inst_30382 + (1));
var inst_30382__$1 = inst_30393;
var state_30405__$1 = (function (){var statearr_30416 = state_30405;
(statearr_30416[(10)] = inst_30392);

(statearr_30416[(8)] = inst_30382__$1);

return statearr_30416;
})();
var statearr_30417_30439 = state_30405__$1;
(statearr_30417_30439[(2)] = null);

(statearr_30417_30439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (9))){
var state_30405__$1 = state_30405;
var statearr_30418_30440 = state_30405__$1;
(statearr_30418_30440[(2)] = null);

(statearr_30418_30440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (5))){
var state_30405__$1 = state_30405;
var statearr_30419_30441 = state_30405__$1;
(statearr_30419_30441[(2)] = null);

(statearr_30419_30441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (10))){
var inst_30397 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30420_30442 = state_30405__$1;
(statearr_30420_30442[(2)] = inst_30397);

(statearr_30420_30442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (8))){
var inst_30387 = (state_30405[(7)]);
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30405__$1,(11),out,inst_30387);
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
});})(c__20669__auto___30432,out))
;
return ((function (switch__20604__auto__,c__20669__auto___30432,out){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_30424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30424[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_30424[(1)] = (1));

return statearr_30424;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_30405){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_30405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e30425){if((e30425 instanceof Object)){
var ex__20608__auto__ = e30425;
var statearr_30426_30443 = state_30405;
(statearr_30426_30443[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30444 = state_30405;
state_30405 = G__30444;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_30405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_30405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___30432,out))
})();
var state__20671__auto__ = (function (){var statearr_30427 = f__20670__auto__.call(null);
(statearr_30427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___30432);

return statearr_30427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___30432,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30452 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30452 = (function (map_LT_,f,ch,meta30453){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30453 = meta30453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30454,meta30453__$1){
var self__ = this;
var _30454__$1 = this;
return (new cljs.core.async.t_cljs$core$async30452(self__.map_LT_,self__.f,self__.ch,meta30453__$1));
});

cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30454){
var self__ = this;
var _30454__$1 = this;
return self__.meta30453;
});

cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30455 = (function (map_LT_,f,ch,meta30453,_,fn1,meta30456){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30453 = meta30453;
this._ = _;
this.fn1 = fn1;
this.meta30456 = meta30456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30457,meta30456__$1){
var self__ = this;
var _30457__$1 = this;
return (new cljs.core.async.t_cljs$core$async30455(self__.map_LT_,self__.f,self__.ch,self__.meta30453,self__._,self__.fn1,meta30456__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30457){
var self__ = this;
var _30457__$1 = this;
return self__.meta30456;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30455.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30445_SHARP_){
return f1.call(null,(((p1__30445_SHARP_ == null))?null:self__.f.call(null,p1__30445_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30455.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30453","meta30453",-1807050780,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30452","cljs.core.async/t_cljs$core$async30452",-160348682,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30456","meta30456",-1085412872,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30455";

cljs.core.async.t_cljs$core$async30455.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async30455");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30455 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30455(map_LT___$1,f__$1,ch__$1,meta30453__$1,___$2,fn1__$1,meta30456){
return (new cljs.core.async.t_cljs$core$async30455(map_LT___$1,f__$1,ch__$1,meta30453__$1,___$2,fn1__$1,meta30456));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30455(self__.map_LT_,self__.f,self__.ch,self__.meta30453,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16763__auto__ = ret;
if(cljs.core.truth_(and__16763__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16763__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30453","meta30453",-1807050780,null)], null);
});

cljs.core.async.t_cljs$core$async30452.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30452";

cljs.core.async.t_cljs$core$async30452.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async30452");
});

cljs.core.async.__GT_t_cljs$core$async30452 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30452(map_LT___$1,f__$1,ch__$1,meta30453){
return (new cljs.core.async.t_cljs$core$async30452(map_LT___$1,f__$1,ch__$1,meta30453));
});

}

return (new cljs.core.async.t_cljs$core$async30452(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30461 = (function (map_GT_,f,ch,meta30462){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30462 = meta30462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30463,meta30462__$1){
var self__ = this;
var _30463__$1 = this;
return (new cljs.core.async.t_cljs$core$async30461(self__.map_GT_,self__.f,self__.ch,meta30462__$1));
});

cljs.core.async.t_cljs$core$async30461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30463){
var self__ = this;
var _30463__$1 = this;
return self__.meta30462;
});

cljs.core.async.t_cljs$core$async30461.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30461.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30461.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30462","meta30462",-1550986613,null)], null);
});

cljs.core.async.t_cljs$core$async30461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30461";

cljs.core.async.t_cljs$core$async30461.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async30461");
});

cljs.core.async.__GT_t_cljs$core$async30461 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30461(map_GT___$1,f__$1,ch__$1,meta30462){
return (new cljs.core.async.t_cljs$core$async30461(map_GT___$1,f__$1,ch__$1,meta30462));
});

}

return (new cljs.core.async.t_cljs$core$async30461(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30467 = (function (filter_GT_,p,ch,meta30468){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30468 = meta30468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30469,meta30468__$1){
var self__ = this;
var _30469__$1 = this;
return (new cljs.core.async.t_cljs$core$async30467(self__.filter_GT_,self__.p,self__.ch,meta30468__$1));
});

cljs.core.async.t_cljs$core$async30467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30469){
var self__ = this;
var _30469__$1 = this;
return self__.meta30468;
});

cljs.core.async.t_cljs$core$async30467.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30467.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30467.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30467.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30468","meta30468",795326081,null)], null);
});

cljs.core.async.t_cljs$core$async30467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30467";

cljs.core.async.t_cljs$core$async30467.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async30467");
});

cljs.core.async.__GT_t_cljs$core$async30467 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30467(filter_GT___$1,p__$1,ch__$1,meta30468){
return (new cljs.core.async.t_cljs$core$async30467(filter_GT___$1,p__$1,ch__$1,meta30468));
});

}

return (new cljs.core.async.t_cljs$core$async30467(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30470 = [];
var len__17833__auto___30514 = arguments.length;
var i__17834__auto___30515 = (0);
while(true){
if((i__17834__auto___30515 < len__17833__auto___30514)){
args30470.push((arguments[i__17834__auto___30515]));

var G__30516 = (i__17834__auto___30515 + (1));
i__17834__auto___30515 = G__30516;
continue;
} else {
}
break;
}

var G__30472 = args30470.length;
switch (G__30472) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30470.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20669__auto___30518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___30518,out){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___30518,out){
return (function (state_30493){
var state_val_30494 = (state_30493[(1)]);
if((state_val_30494 === (7))){
var inst_30489 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30495_30519 = state_30493__$1;
(statearr_30495_30519[(2)] = inst_30489);

(statearr_30495_30519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (1))){
var state_30493__$1 = state_30493;
var statearr_30496_30520 = state_30493__$1;
(statearr_30496_30520[(2)] = null);

(statearr_30496_30520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (4))){
var inst_30475 = (state_30493[(7)]);
var inst_30475__$1 = (state_30493[(2)]);
var inst_30476 = (inst_30475__$1 == null);
var state_30493__$1 = (function (){var statearr_30497 = state_30493;
(statearr_30497[(7)] = inst_30475__$1);

return statearr_30497;
})();
if(cljs.core.truth_(inst_30476)){
var statearr_30498_30521 = state_30493__$1;
(statearr_30498_30521[(1)] = (5));

} else {
var statearr_30499_30522 = state_30493__$1;
(statearr_30499_30522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (6))){
var inst_30475 = (state_30493[(7)]);
var inst_30480 = p.call(null,inst_30475);
var state_30493__$1 = state_30493;
if(cljs.core.truth_(inst_30480)){
var statearr_30500_30523 = state_30493__$1;
(statearr_30500_30523[(1)] = (8));

} else {
var statearr_30501_30524 = state_30493__$1;
(statearr_30501_30524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (3))){
var inst_30491 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30493__$1,inst_30491);
} else {
if((state_val_30494 === (2))){
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(4),ch);
} else {
if((state_val_30494 === (11))){
var inst_30483 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30502_30525 = state_30493__$1;
(statearr_30502_30525[(2)] = inst_30483);

(statearr_30502_30525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (9))){
var state_30493__$1 = state_30493;
var statearr_30503_30526 = state_30493__$1;
(statearr_30503_30526[(2)] = null);

(statearr_30503_30526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (5))){
var inst_30478 = cljs.core.async.close_BANG_.call(null,out);
var state_30493__$1 = state_30493;
var statearr_30504_30527 = state_30493__$1;
(statearr_30504_30527[(2)] = inst_30478);

(statearr_30504_30527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (10))){
var inst_30486 = (state_30493[(2)]);
var state_30493__$1 = (function (){var statearr_30505 = state_30493;
(statearr_30505[(8)] = inst_30486);

return statearr_30505;
})();
var statearr_30506_30528 = state_30493__$1;
(statearr_30506_30528[(2)] = null);

(statearr_30506_30528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (8))){
var inst_30475 = (state_30493[(7)]);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30493__$1,(11),out,inst_30475);
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
});})(c__20669__auto___30518,out))
;
return ((function (switch__20604__auto__,c__20669__auto___30518,out){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_30510 = [null,null,null,null,null,null,null,null,null];
(statearr_30510[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_30510[(1)] = (1));

return statearr_30510;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_30493){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_30493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e30511){if((e30511 instanceof Object)){
var ex__20608__auto__ = e30511;
var statearr_30512_30529 = state_30493;
(statearr_30512_30529[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30530 = state_30493;
state_30493 = G__30530;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_30493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_30493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___30518,out))
})();
var state__20671__auto__ = (function (){var statearr_30513 = f__20670__auto__.call(null);
(statearr_30513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___30518);

return statearr_30513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___30518,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30531 = [];
var len__17833__auto___30534 = arguments.length;
var i__17834__auto___30535 = (0);
while(true){
if((i__17834__auto___30535 < len__17833__auto___30534)){
args30531.push((arguments[i__17834__auto___30535]));

var G__30536 = (i__17834__auto___30535 + (1));
i__17834__auto___30535 = G__30536;
continue;
} else {
}
break;
}

var G__30533 = args30531.length;
switch (G__30533) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30531.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__){
return (function (state_30703){
var state_val_30704 = (state_30703[(1)]);
if((state_val_30704 === (7))){
var inst_30699 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30705_30746 = state_30703__$1;
(statearr_30705_30746[(2)] = inst_30699);

(statearr_30705_30746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (20))){
var inst_30669 = (state_30703[(7)]);
var inst_30680 = (state_30703[(2)]);
var inst_30681 = cljs.core.next.call(null,inst_30669);
var inst_30655 = inst_30681;
var inst_30656 = null;
var inst_30657 = (0);
var inst_30658 = (0);
var state_30703__$1 = (function (){var statearr_30706 = state_30703;
(statearr_30706[(8)] = inst_30658);

(statearr_30706[(9)] = inst_30657);

(statearr_30706[(10)] = inst_30680);

(statearr_30706[(11)] = inst_30656);

(statearr_30706[(12)] = inst_30655);

return statearr_30706;
})();
var statearr_30707_30747 = state_30703__$1;
(statearr_30707_30747[(2)] = null);

(statearr_30707_30747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (1))){
var state_30703__$1 = state_30703;
var statearr_30708_30748 = state_30703__$1;
(statearr_30708_30748[(2)] = null);

(statearr_30708_30748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (4))){
var inst_30644 = (state_30703[(13)]);
var inst_30644__$1 = (state_30703[(2)]);
var inst_30645 = (inst_30644__$1 == null);
var state_30703__$1 = (function (){var statearr_30709 = state_30703;
(statearr_30709[(13)] = inst_30644__$1);

return statearr_30709;
})();
if(cljs.core.truth_(inst_30645)){
var statearr_30710_30749 = state_30703__$1;
(statearr_30710_30749[(1)] = (5));

} else {
var statearr_30711_30750 = state_30703__$1;
(statearr_30711_30750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (15))){
var state_30703__$1 = state_30703;
var statearr_30715_30751 = state_30703__$1;
(statearr_30715_30751[(2)] = null);

(statearr_30715_30751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (21))){
var state_30703__$1 = state_30703;
var statearr_30716_30752 = state_30703__$1;
(statearr_30716_30752[(2)] = null);

(statearr_30716_30752[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (13))){
var inst_30658 = (state_30703[(8)]);
var inst_30657 = (state_30703[(9)]);
var inst_30656 = (state_30703[(11)]);
var inst_30655 = (state_30703[(12)]);
var inst_30665 = (state_30703[(2)]);
var inst_30666 = (inst_30658 + (1));
var tmp30712 = inst_30657;
var tmp30713 = inst_30656;
var tmp30714 = inst_30655;
var inst_30655__$1 = tmp30714;
var inst_30656__$1 = tmp30713;
var inst_30657__$1 = tmp30712;
var inst_30658__$1 = inst_30666;
var state_30703__$1 = (function (){var statearr_30717 = state_30703;
(statearr_30717[(8)] = inst_30658__$1);

(statearr_30717[(14)] = inst_30665);

(statearr_30717[(9)] = inst_30657__$1);

(statearr_30717[(11)] = inst_30656__$1);

(statearr_30717[(12)] = inst_30655__$1);

return statearr_30717;
})();
var statearr_30718_30753 = state_30703__$1;
(statearr_30718_30753[(2)] = null);

(statearr_30718_30753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (22))){
var state_30703__$1 = state_30703;
var statearr_30719_30754 = state_30703__$1;
(statearr_30719_30754[(2)] = null);

(statearr_30719_30754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (6))){
var inst_30644 = (state_30703[(13)]);
var inst_30653 = f.call(null,inst_30644);
var inst_30654 = cljs.core.seq.call(null,inst_30653);
var inst_30655 = inst_30654;
var inst_30656 = null;
var inst_30657 = (0);
var inst_30658 = (0);
var state_30703__$1 = (function (){var statearr_30720 = state_30703;
(statearr_30720[(8)] = inst_30658);

(statearr_30720[(9)] = inst_30657);

(statearr_30720[(11)] = inst_30656);

(statearr_30720[(12)] = inst_30655);

return statearr_30720;
})();
var statearr_30721_30755 = state_30703__$1;
(statearr_30721_30755[(2)] = null);

(statearr_30721_30755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (17))){
var inst_30669 = (state_30703[(7)]);
var inst_30673 = cljs.core.chunk_first.call(null,inst_30669);
var inst_30674 = cljs.core.chunk_rest.call(null,inst_30669);
var inst_30675 = cljs.core.count.call(null,inst_30673);
var inst_30655 = inst_30674;
var inst_30656 = inst_30673;
var inst_30657 = inst_30675;
var inst_30658 = (0);
var state_30703__$1 = (function (){var statearr_30722 = state_30703;
(statearr_30722[(8)] = inst_30658);

(statearr_30722[(9)] = inst_30657);

(statearr_30722[(11)] = inst_30656);

(statearr_30722[(12)] = inst_30655);

return statearr_30722;
})();
var statearr_30723_30756 = state_30703__$1;
(statearr_30723_30756[(2)] = null);

(statearr_30723_30756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (3))){
var inst_30701 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30703__$1,inst_30701);
} else {
if((state_val_30704 === (12))){
var inst_30689 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30724_30757 = state_30703__$1;
(statearr_30724_30757[(2)] = inst_30689);

(statearr_30724_30757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (2))){
var state_30703__$1 = state_30703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30703__$1,(4),in$);
} else {
if((state_val_30704 === (23))){
var inst_30697 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30725_30758 = state_30703__$1;
(statearr_30725_30758[(2)] = inst_30697);

(statearr_30725_30758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (19))){
var inst_30684 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30726_30759 = state_30703__$1;
(statearr_30726_30759[(2)] = inst_30684);

(statearr_30726_30759[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (11))){
var inst_30669 = (state_30703[(7)]);
var inst_30655 = (state_30703[(12)]);
var inst_30669__$1 = cljs.core.seq.call(null,inst_30655);
var state_30703__$1 = (function (){var statearr_30727 = state_30703;
(statearr_30727[(7)] = inst_30669__$1);

return statearr_30727;
})();
if(inst_30669__$1){
var statearr_30728_30760 = state_30703__$1;
(statearr_30728_30760[(1)] = (14));

} else {
var statearr_30729_30761 = state_30703__$1;
(statearr_30729_30761[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (9))){
var inst_30691 = (state_30703[(2)]);
var inst_30692 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30703__$1 = (function (){var statearr_30730 = state_30703;
(statearr_30730[(15)] = inst_30691);

return statearr_30730;
})();
if(cljs.core.truth_(inst_30692)){
var statearr_30731_30762 = state_30703__$1;
(statearr_30731_30762[(1)] = (21));

} else {
var statearr_30732_30763 = state_30703__$1;
(statearr_30732_30763[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (5))){
var inst_30647 = cljs.core.async.close_BANG_.call(null,out);
var state_30703__$1 = state_30703;
var statearr_30733_30764 = state_30703__$1;
(statearr_30733_30764[(2)] = inst_30647);

(statearr_30733_30764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (14))){
var inst_30669 = (state_30703[(7)]);
var inst_30671 = cljs.core.chunked_seq_QMARK_.call(null,inst_30669);
var state_30703__$1 = state_30703;
if(inst_30671){
var statearr_30734_30765 = state_30703__$1;
(statearr_30734_30765[(1)] = (17));

} else {
var statearr_30735_30766 = state_30703__$1;
(statearr_30735_30766[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (16))){
var inst_30687 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30736_30767 = state_30703__$1;
(statearr_30736_30767[(2)] = inst_30687);

(statearr_30736_30767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (10))){
var inst_30658 = (state_30703[(8)]);
var inst_30656 = (state_30703[(11)]);
var inst_30663 = cljs.core._nth.call(null,inst_30656,inst_30658);
var state_30703__$1 = state_30703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30703__$1,(13),out,inst_30663);
} else {
if((state_val_30704 === (18))){
var inst_30669 = (state_30703[(7)]);
var inst_30678 = cljs.core.first.call(null,inst_30669);
var state_30703__$1 = state_30703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30703__$1,(20),out,inst_30678);
} else {
if((state_val_30704 === (8))){
var inst_30658 = (state_30703[(8)]);
var inst_30657 = (state_30703[(9)]);
var inst_30660 = (inst_30658 < inst_30657);
var inst_30661 = inst_30660;
var state_30703__$1 = state_30703;
if(cljs.core.truth_(inst_30661)){
var statearr_30737_30768 = state_30703__$1;
(statearr_30737_30768[(1)] = (10));

} else {
var statearr_30738_30769 = state_30703__$1;
(statearr_30738_30769[(1)] = (11));

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
});})(c__20669__auto__))
;
return ((function (switch__20604__auto__,c__20669__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20605__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20605__auto____0 = (function (){
var statearr_30742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30742[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20605__auto__);

(statearr_30742[(1)] = (1));

return statearr_30742;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20605__auto____1 = (function (state_30703){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_30703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e30743){if((e30743 instanceof Object)){
var ex__20608__auto__ = e30743;
var statearr_30744_30770 = state_30703;
(statearr_30744_30770[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30771 = state_30703;
state_30703 = G__30771;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20605__auto__ = function(state_30703){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20605__auto____1.call(this,state_30703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20605__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20605__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__))
})();
var state__20671__auto__ = (function (){var statearr_30745 = f__20670__auto__.call(null);
(statearr_30745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_30745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__))
);

return c__20669__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30772 = [];
var len__17833__auto___30775 = arguments.length;
var i__17834__auto___30776 = (0);
while(true){
if((i__17834__auto___30776 < len__17833__auto___30775)){
args30772.push((arguments[i__17834__auto___30776]));

var G__30777 = (i__17834__auto___30776 + (1));
i__17834__auto___30776 = G__30777;
continue;
} else {
}
break;
}

var G__30774 = args30772.length;
switch (G__30774) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30772.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30779 = [];
var len__17833__auto___30782 = arguments.length;
var i__17834__auto___30783 = (0);
while(true){
if((i__17834__auto___30783 < len__17833__auto___30782)){
args30779.push((arguments[i__17834__auto___30783]));

var G__30784 = (i__17834__auto___30783 + (1));
i__17834__auto___30783 = G__30784;
continue;
} else {
}
break;
}

var G__30781 = args30779.length;
switch (G__30781) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30779.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30786 = [];
var len__17833__auto___30837 = arguments.length;
var i__17834__auto___30838 = (0);
while(true){
if((i__17834__auto___30838 < len__17833__auto___30837)){
args30786.push((arguments[i__17834__auto___30838]));

var G__30839 = (i__17834__auto___30838 + (1));
i__17834__auto___30838 = G__30839;
continue;
} else {
}
break;
}

var G__30788 = args30786.length;
switch (G__30788) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30786.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20669__auto___30841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___30841,out){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___30841,out){
return (function (state_30812){
var state_val_30813 = (state_30812[(1)]);
if((state_val_30813 === (7))){
var inst_30807 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30814_30842 = state_30812__$1;
(statearr_30814_30842[(2)] = inst_30807);

(statearr_30814_30842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (1))){
var inst_30789 = null;
var state_30812__$1 = (function (){var statearr_30815 = state_30812;
(statearr_30815[(7)] = inst_30789);

return statearr_30815;
})();
var statearr_30816_30843 = state_30812__$1;
(statearr_30816_30843[(2)] = null);

(statearr_30816_30843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (4))){
var inst_30792 = (state_30812[(8)]);
var inst_30792__$1 = (state_30812[(2)]);
var inst_30793 = (inst_30792__$1 == null);
var inst_30794 = cljs.core.not.call(null,inst_30793);
var state_30812__$1 = (function (){var statearr_30817 = state_30812;
(statearr_30817[(8)] = inst_30792__$1);

return statearr_30817;
})();
if(inst_30794){
var statearr_30818_30844 = state_30812__$1;
(statearr_30818_30844[(1)] = (5));

} else {
var statearr_30819_30845 = state_30812__$1;
(statearr_30819_30845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (6))){
var state_30812__$1 = state_30812;
var statearr_30820_30846 = state_30812__$1;
(statearr_30820_30846[(2)] = null);

(statearr_30820_30846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (3))){
var inst_30809 = (state_30812[(2)]);
var inst_30810 = cljs.core.async.close_BANG_.call(null,out);
var state_30812__$1 = (function (){var statearr_30821 = state_30812;
(statearr_30821[(9)] = inst_30809);

return statearr_30821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30812__$1,inst_30810);
} else {
if((state_val_30813 === (2))){
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30812__$1,(4),ch);
} else {
if((state_val_30813 === (11))){
var inst_30792 = (state_30812[(8)]);
var inst_30801 = (state_30812[(2)]);
var inst_30789 = inst_30792;
var state_30812__$1 = (function (){var statearr_30822 = state_30812;
(statearr_30822[(7)] = inst_30789);

(statearr_30822[(10)] = inst_30801);

return statearr_30822;
})();
var statearr_30823_30847 = state_30812__$1;
(statearr_30823_30847[(2)] = null);

(statearr_30823_30847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (9))){
var inst_30792 = (state_30812[(8)]);
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30812__$1,(11),out,inst_30792);
} else {
if((state_val_30813 === (5))){
var inst_30789 = (state_30812[(7)]);
var inst_30792 = (state_30812[(8)]);
var inst_30796 = cljs.core._EQ_.call(null,inst_30792,inst_30789);
var state_30812__$1 = state_30812;
if(inst_30796){
var statearr_30825_30848 = state_30812__$1;
(statearr_30825_30848[(1)] = (8));

} else {
var statearr_30826_30849 = state_30812__$1;
(statearr_30826_30849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (10))){
var inst_30804 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30827_30850 = state_30812__$1;
(statearr_30827_30850[(2)] = inst_30804);

(statearr_30827_30850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (8))){
var inst_30789 = (state_30812[(7)]);
var tmp30824 = inst_30789;
var inst_30789__$1 = tmp30824;
var state_30812__$1 = (function (){var statearr_30828 = state_30812;
(statearr_30828[(7)] = inst_30789__$1);

return statearr_30828;
})();
var statearr_30829_30851 = state_30812__$1;
(statearr_30829_30851[(2)] = null);

(statearr_30829_30851[(1)] = (2));


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
});})(c__20669__auto___30841,out))
;
return ((function (switch__20604__auto__,c__20669__auto___30841,out){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_30833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30833[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_30833[(1)] = (1));

return statearr_30833;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_30812){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_30812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e30834){if((e30834 instanceof Object)){
var ex__20608__auto__ = e30834;
var statearr_30835_30852 = state_30812;
(statearr_30835_30852[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30853 = state_30812;
state_30812 = G__30853;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_30812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_30812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___30841,out))
})();
var state__20671__auto__ = (function (){var statearr_30836 = f__20670__auto__.call(null);
(statearr_30836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___30841);

return statearr_30836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___30841,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30854 = [];
var len__17833__auto___30924 = arguments.length;
var i__17834__auto___30925 = (0);
while(true){
if((i__17834__auto___30925 < len__17833__auto___30924)){
args30854.push((arguments[i__17834__auto___30925]));

var G__30926 = (i__17834__auto___30925 + (1));
i__17834__auto___30925 = G__30926;
continue;
} else {
}
break;
}

var G__30856 = args30854.length;
switch (G__30856) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30854.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20669__auto___30928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___30928,out){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___30928,out){
return (function (state_30894){
var state_val_30895 = (state_30894[(1)]);
if((state_val_30895 === (7))){
var inst_30890 = (state_30894[(2)]);
var state_30894__$1 = state_30894;
var statearr_30896_30929 = state_30894__$1;
(statearr_30896_30929[(2)] = inst_30890);

(statearr_30896_30929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30895 === (1))){
var inst_30857 = (new Array(n));
var inst_30858 = inst_30857;
var inst_30859 = (0);
var state_30894__$1 = (function (){var statearr_30897 = state_30894;
(statearr_30897[(7)] = inst_30858);

(statearr_30897[(8)] = inst_30859);

return statearr_30897;
})();
var statearr_30898_30930 = state_30894__$1;
(statearr_30898_30930[(2)] = null);

(statearr_30898_30930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30895 === (4))){
var inst_30862 = (state_30894[(9)]);
var inst_30862__$1 = (state_30894[(2)]);
var inst_30863 = (inst_30862__$1 == null);
var inst_30864 = cljs.core.not.call(null,inst_30863);
var state_30894__$1 = (function (){var statearr_30899 = state_30894;
(statearr_30899[(9)] = inst_30862__$1);

return statearr_30899;
})();
if(inst_30864){
var statearr_30900_30931 = state_30894__$1;
(statearr_30900_30931[(1)] = (5));

} else {
var statearr_30901_30932 = state_30894__$1;
(statearr_30901_30932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30895 === (15))){
var inst_30884 = (state_30894[(2)]);
var state_30894__$1 = state_30894;
var statearr_30902_30933 = state_30894__$1;
(statearr_30902_30933[(2)] = inst_30884);

(statearr_30902_30933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30895 === (13))){
var state_30894__$1 = state_30894;
var statearr_30903_30934 = state_30894__$1;
(statearr_30903_30934[(2)] = null);

(statearr_30903_30934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30895 === (6))){
var inst_30859 = (state_30894[(8)]);
var inst_30880 = (inst_30859 > (0));
var state_30894__$1 = state_30894;
if(cljs.core.truth_(inst_30880)){
var statearr_30904_30935 = state_30894__$1;
(statearr_30904_30935[(1)] = (12));

} else {
var statearr_30905_30936 = state_30894__$1;
(statearr_30905_30936[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30895 === (3))){
var inst_30892 = (state_30894[(2)]);
var state_30894__$1 = state_30894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30894__$1,inst_30892);
} else {
if((state_val_30895 === (12))){
var inst_30858 = (state_30894[(7)]);
var inst_30882 = cljs.core.vec.call(null,inst_30858);
var state_30894__$1 = state_30894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30894__$1,(15),out,inst_30882);
} else {
if((state_val_30895 === (2))){
var state_30894__$1 = state_30894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30894__$1,(4),ch);
} else {
if((state_val_30895 === (11))){
var inst_30874 = (state_30894[(2)]);
var inst_30875 = (new Array(n));
var inst_30858 = inst_30875;
var inst_30859 = (0);
var state_30894__$1 = (function (){var statearr_30906 = state_30894;
(statearr_30906[(10)] = inst_30874);

(statearr_30906[(7)] = inst_30858);

(statearr_30906[(8)] = inst_30859);

return statearr_30906;
})();
var statearr_30907_30937 = state_30894__$1;
(statearr_30907_30937[(2)] = null);

(statearr_30907_30937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30895 === (9))){
var inst_30858 = (state_30894[(7)]);
var inst_30872 = cljs.core.vec.call(null,inst_30858);
var state_30894__$1 = state_30894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30894__$1,(11),out,inst_30872);
} else {
if((state_val_30895 === (5))){
var inst_30862 = (state_30894[(9)]);
var inst_30867 = (state_30894[(11)]);
var inst_30858 = (state_30894[(7)]);
var inst_30859 = (state_30894[(8)]);
var inst_30866 = (inst_30858[inst_30859] = inst_30862);
var inst_30867__$1 = (inst_30859 + (1));
var inst_30868 = (inst_30867__$1 < n);
var state_30894__$1 = (function (){var statearr_30908 = state_30894;
(statearr_30908[(12)] = inst_30866);

(statearr_30908[(11)] = inst_30867__$1);

return statearr_30908;
})();
if(cljs.core.truth_(inst_30868)){
var statearr_30909_30938 = state_30894__$1;
(statearr_30909_30938[(1)] = (8));

} else {
var statearr_30910_30939 = state_30894__$1;
(statearr_30910_30939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30895 === (14))){
var inst_30887 = (state_30894[(2)]);
var inst_30888 = cljs.core.async.close_BANG_.call(null,out);
var state_30894__$1 = (function (){var statearr_30912 = state_30894;
(statearr_30912[(13)] = inst_30887);

return statearr_30912;
})();
var statearr_30913_30940 = state_30894__$1;
(statearr_30913_30940[(2)] = inst_30888);

(statearr_30913_30940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30895 === (10))){
var inst_30878 = (state_30894[(2)]);
var state_30894__$1 = state_30894;
var statearr_30914_30941 = state_30894__$1;
(statearr_30914_30941[(2)] = inst_30878);

(statearr_30914_30941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30895 === (8))){
var inst_30867 = (state_30894[(11)]);
var inst_30858 = (state_30894[(7)]);
var tmp30911 = inst_30858;
var inst_30858__$1 = tmp30911;
var inst_30859 = inst_30867;
var state_30894__$1 = (function (){var statearr_30915 = state_30894;
(statearr_30915[(7)] = inst_30858__$1);

(statearr_30915[(8)] = inst_30859);

return statearr_30915;
})();
var statearr_30916_30942 = state_30894__$1;
(statearr_30916_30942[(2)] = null);

(statearr_30916_30942[(1)] = (2));


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
});})(c__20669__auto___30928,out))
;
return ((function (switch__20604__auto__,c__20669__auto___30928,out){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_30920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30920[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_30920[(1)] = (1));

return statearr_30920;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_30894){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_30894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e30921){if((e30921 instanceof Object)){
var ex__20608__auto__ = e30921;
var statearr_30922_30943 = state_30894;
(statearr_30922_30943[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30944 = state_30894;
state_30894 = G__30944;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_30894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_30894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___30928,out))
})();
var state__20671__auto__ = (function (){var statearr_30923 = f__20670__auto__.call(null);
(statearr_30923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___30928);

return statearr_30923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___30928,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30945 = [];
var len__17833__auto___31019 = arguments.length;
var i__17834__auto___31020 = (0);
while(true){
if((i__17834__auto___31020 < len__17833__auto___31019)){
args30945.push((arguments[i__17834__auto___31020]));

var G__31021 = (i__17834__auto___31020 + (1));
i__17834__auto___31020 = G__31021;
continue;
} else {
}
break;
}

var G__30947 = args30945.length;
switch (G__30947) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30945.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20669__auto___31023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___31023,out){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___31023,out){
return (function (state_30989){
var state_val_30990 = (state_30989[(1)]);
if((state_val_30990 === (7))){
var inst_30985 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_30991_31024 = state_30989__$1;
(statearr_30991_31024[(2)] = inst_30985);

(statearr_30991_31024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (1))){
var inst_30948 = [];
var inst_30949 = inst_30948;
var inst_30950 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30989__$1 = (function (){var statearr_30992 = state_30989;
(statearr_30992[(7)] = inst_30950);

(statearr_30992[(8)] = inst_30949);

return statearr_30992;
})();
var statearr_30993_31025 = state_30989__$1;
(statearr_30993_31025[(2)] = null);

(statearr_30993_31025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (4))){
var inst_30953 = (state_30989[(9)]);
var inst_30953__$1 = (state_30989[(2)]);
var inst_30954 = (inst_30953__$1 == null);
var inst_30955 = cljs.core.not.call(null,inst_30954);
var state_30989__$1 = (function (){var statearr_30994 = state_30989;
(statearr_30994[(9)] = inst_30953__$1);

return statearr_30994;
})();
if(inst_30955){
var statearr_30995_31026 = state_30989__$1;
(statearr_30995_31026[(1)] = (5));

} else {
var statearr_30996_31027 = state_30989__$1;
(statearr_30996_31027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (15))){
var inst_30979 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_30997_31028 = state_30989__$1;
(statearr_30997_31028[(2)] = inst_30979);

(statearr_30997_31028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (13))){
var state_30989__$1 = state_30989;
var statearr_30998_31029 = state_30989__$1;
(statearr_30998_31029[(2)] = null);

(statearr_30998_31029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (6))){
var inst_30949 = (state_30989[(8)]);
var inst_30974 = inst_30949.length;
var inst_30975 = (inst_30974 > (0));
var state_30989__$1 = state_30989;
if(cljs.core.truth_(inst_30975)){
var statearr_30999_31030 = state_30989__$1;
(statearr_30999_31030[(1)] = (12));

} else {
var statearr_31000_31031 = state_30989__$1;
(statearr_31000_31031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (3))){
var inst_30987 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30989__$1,inst_30987);
} else {
if((state_val_30990 === (12))){
var inst_30949 = (state_30989[(8)]);
var inst_30977 = cljs.core.vec.call(null,inst_30949);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30989__$1,(15),out,inst_30977);
} else {
if((state_val_30990 === (2))){
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(4),ch);
} else {
if((state_val_30990 === (11))){
var inst_30957 = (state_30989[(10)]);
var inst_30953 = (state_30989[(9)]);
var inst_30967 = (state_30989[(2)]);
var inst_30968 = [];
var inst_30969 = inst_30968.push(inst_30953);
var inst_30949 = inst_30968;
var inst_30950 = inst_30957;
var state_30989__$1 = (function (){var statearr_31001 = state_30989;
(statearr_31001[(7)] = inst_30950);

(statearr_31001[(11)] = inst_30967);

(statearr_31001[(12)] = inst_30969);

(statearr_31001[(8)] = inst_30949);

return statearr_31001;
})();
var statearr_31002_31032 = state_30989__$1;
(statearr_31002_31032[(2)] = null);

(statearr_31002_31032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (9))){
var inst_30949 = (state_30989[(8)]);
var inst_30965 = cljs.core.vec.call(null,inst_30949);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30989__$1,(11),out,inst_30965);
} else {
if((state_val_30990 === (5))){
var inst_30950 = (state_30989[(7)]);
var inst_30957 = (state_30989[(10)]);
var inst_30953 = (state_30989[(9)]);
var inst_30957__$1 = f.call(null,inst_30953);
var inst_30958 = cljs.core._EQ_.call(null,inst_30957__$1,inst_30950);
var inst_30959 = cljs.core.keyword_identical_QMARK_.call(null,inst_30950,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30960 = (inst_30958) || (inst_30959);
var state_30989__$1 = (function (){var statearr_31003 = state_30989;
(statearr_31003[(10)] = inst_30957__$1);

return statearr_31003;
})();
if(cljs.core.truth_(inst_30960)){
var statearr_31004_31033 = state_30989__$1;
(statearr_31004_31033[(1)] = (8));

} else {
var statearr_31005_31034 = state_30989__$1;
(statearr_31005_31034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (14))){
var inst_30982 = (state_30989[(2)]);
var inst_30983 = cljs.core.async.close_BANG_.call(null,out);
var state_30989__$1 = (function (){var statearr_31007 = state_30989;
(statearr_31007[(13)] = inst_30982);

return statearr_31007;
})();
var statearr_31008_31035 = state_30989__$1;
(statearr_31008_31035[(2)] = inst_30983);

(statearr_31008_31035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (10))){
var inst_30972 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31009_31036 = state_30989__$1;
(statearr_31009_31036[(2)] = inst_30972);

(statearr_31009_31036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (8))){
var inst_30957 = (state_30989[(10)]);
var inst_30953 = (state_30989[(9)]);
var inst_30949 = (state_30989[(8)]);
var inst_30962 = inst_30949.push(inst_30953);
var tmp31006 = inst_30949;
var inst_30949__$1 = tmp31006;
var inst_30950 = inst_30957;
var state_30989__$1 = (function (){var statearr_31010 = state_30989;
(statearr_31010[(7)] = inst_30950);

(statearr_31010[(14)] = inst_30962);

(statearr_31010[(8)] = inst_30949__$1);

return statearr_31010;
})();
var statearr_31011_31037 = state_30989__$1;
(statearr_31011_31037[(2)] = null);

(statearr_31011_31037[(1)] = (2));


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
});})(c__20669__auto___31023,out))
;
return ((function (switch__20604__auto__,c__20669__auto___31023,out){
return (function() {
var cljs$core$async$state_machine__20605__auto__ = null;
var cljs$core$async$state_machine__20605__auto____0 = (function (){
var statearr_31015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31015[(0)] = cljs$core$async$state_machine__20605__auto__);

(statearr_31015[(1)] = (1));

return statearr_31015;
});
var cljs$core$async$state_machine__20605__auto____1 = (function (state_30989){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_30989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e31016){if((e31016 instanceof Object)){
var ex__20608__auto__ = e31016;
var statearr_31017_31038 = state_30989;
(statearr_31017_31038[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31039 = state_30989;
state_30989 = G__31039;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
cljs$core$async$state_machine__20605__auto__ = function(state_30989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20605__auto____1.call(this,state_30989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20605__auto____0;
cljs$core$async$state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20605__auto____1;
return cljs$core$async$state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___31023,out))
})();
var state__20671__auto__ = (function (){var statearr_31018 = f__20670__auto__.call(null);
(statearr_31018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___31023);

return statearr_31018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___31023,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map