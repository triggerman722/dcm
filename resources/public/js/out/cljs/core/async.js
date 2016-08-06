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
if(typeof cljs.core.async.t_cljs$core$async28039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28039 = (function (fn_handler,f,meta28040){
this.fn_handler = fn_handler;
this.f = f;
this.meta28040 = meta28040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28041,meta28040__$1){
var self__ = this;
var _28041__$1 = this;
return (new cljs.core.async.t_cljs$core$async28039(self__.fn_handler,self__.f,meta28040__$1));
});

cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28041){
var self__ = this;
var _28041__$1 = this;
return self__.meta28040;
});

cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28040","meta28040",-1702016895,null)], null);
});

cljs.core.async.t_cljs$core$async28039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28039";

cljs.core.async.t_cljs$core$async28039.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async28039");
});

cljs.core.async.__GT_t_cljs$core$async28039 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async28039(fn_handler__$1,f__$1,meta28040){
return (new cljs.core.async.t_cljs$core$async28039(fn_handler__$1,f__$1,meta28040));
});

}

return (new cljs.core.async.t_cljs$core$async28039(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args28044 = [];
var len__17833__auto___28047 = arguments.length;
var i__17834__auto___28048 = (0);
while(true){
if((i__17834__auto___28048 < len__17833__auto___28047)){
args28044.push((arguments[i__17834__auto___28048]));

var G__28049 = (i__17834__auto___28048 + (1));
i__17834__auto___28048 = G__28049;
continue;
} else {
}
break;
}

var G__28046 = args28044.length;
switch (G__28046) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28044.length)].join('')));

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
var args28051 = [];
var len__17833__auto___28054 = arguments.length;
var i__17834__auto___28055 = (0);
while(true){
if((i__17834__auto___28055 < len__17833__auto___28054)){
args28051.push((arguments[i__17834__auto___28055]));

var G__28056 = (i__17834__auto___28055 + (1));
i__17834__auto___28055 = G__28056;
continue;
} else {
}
break;
}

var G__28053 = args28051.length;
switch (G__28053) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28051.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28058 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28058);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28058,ret){
return (function (){
return fn1.call(null,val_28058);
});})(val_28058,ret))
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
var args28059 = [];
var len__17833__auto___28062 = arguments.length;
var i__17834__auto___28063 = (0);
while(true){
if((i__17834__auto___28063 < len__17833__auto___28062)){
args28059.push((arguments[i__17834__auto___28063]));

var G__28064 = (i__17834__auto___28063 + (1));
i__17834__auto___28063 = G__28064;
continue;
} else {
}
break;
}

var G__28061 = args28059.length;
switch (G__28061) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28059.length)].join('')));

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
var n__17678__auto___28066 = n;
var x_28067 = (0);
while(true){
if((x_28067 < n__17678__auto___28066)){
(a[x_28067] = (0));

var G__28068 = (x_28067 + (1));
x_28067 = G__28068;
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

var G__28069 = (i + (1));
i = G__28069;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28073 = (function (alt_flag,flag,meta28074){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28074 = meta28074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28075,meta28074__$1){
var self__ = this;
var _28075__$1 = this;
return (new cljs.core.async.t_cljs$core$async28073(self__.alt_flag,self__.flag,meta28074__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28075){
var self__ = this;
var _28075__$1 = this;
return self__.meta28074;
});})(flag))
;

cljs.core.async.t_cljs$core$async28073.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28073.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28074","meta28074",1859359238,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28073";

cljs.core.async.t_cljs$core$async28073.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async28073");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28073 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28073(alt_flag__$1,flag__$1,meta28074){
return (new cljs.core.async.t_cljs$core$async28073(alt_flag__$1,flag__$1,meta28074));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28073(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28079 = (function (alt_handler,flag,cb,meta28080){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28080 = meta28080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28081,meta28080__$1){
var self__ = this;
var _28081__$1 = this;
return (new cljs.core.async.t_cljs$core$async28079(self__.alt_handler,self__.flag,self__.cb,meta28080__$1));
});

cljs.core.async.t_cljs$core$async28079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28081){
var self__ = this;
var _28081__$1 = this;
return self__.meta28080;
});

cljs.core.async.t_cljs$core$async28079.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28080","meta28080",1423982536,null)], null);
});

cljs.core.async.t_cljs$core$async28079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28079";

cljs.core.async.t_cljs$core$async28079.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async28079");
});

cljs.core.async.__GT_t_cljs$core$async28079 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28079(alt_handler__$1,flag__$1,cb__$1,meta28080){
return (new cljs.core.async.t_cljs$core$async28079(alt_handler__$1,flag__$1,cb__$1,meta28080));
});

}

return (new cljs.core.async.t_cljs$core$async28079(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28082_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28082_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28083_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28083_SHARP_,port], null));
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
var G__28084 = (i + (1));
i = G__28084;
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
var len__17833__auto___28090 = arguments.length;
var i__17834__auto___28091 = (0);
while(true){
if((i__17834__auto___28091 < len__17833__auto___28090)){
args__17840__auto__.push((arguments[i__17834__auto___28091]));

var G__28092 = (i__17834__auto___28091 + (1));
i__17834__auto___28091 = G__28092;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28087){
var map__28088 = p__28087;
var map__28088__$1 = ((((!((map__28088 == null)))?((((map__28088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28088):map__28088);
var opts = map__28088__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28085){
var G__28086 = cljs.core.first.call(null,seq28085);
var seq28085__$1 = cljs.core.next.call(null,seq28085);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28086,seq28085__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28093 = [];
var len__17833__auto___28143 = arguments.length;
var i__17834__auto___28144 = (0);
while(true){
if((i__17834__auto___28144 < len__17833__auto___28143)){
args28093.push((arguments[i__17834__auto___28144]));

var G__28145 = (i__17834__auto___28144 + (1));
i__17834__auto___28144 = G__28145;
continue;
} else {
}
break;
}

var G__28095 = args28093.length;
switch (G__28095) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28093.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20691__auto___28147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___28147){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___28147){
return (function (state_28119){
var state_val_28120 = (state_28119[(1)]);
if((state_val_28120 === (7))){
var inst_28115 = (state_28119[(2)]);
var state_28119__$1 = state_28119;
var statearr_28121_28148 = state_28119__$1;
(statearr_28121_28148[(2)] = inst_28115);

(statearr_28121_28148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (1))){
var state_28119__$1 = state_28119;
var statearr_28122_28149 = state_28119__$1;
(statearr_28122_28149[(2)] = null);

(statearr_28122_28149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (4))){
var inst_28098 = (state_28119[(7)]);
var inst_28098__$1 = (state_28119[(2)]);
var inst_28099 = (inst_28098__$1 == null);
var state_28119__$1 = (function (){var statearr_28123 = state_28119;
(statearr_28123[(7)] = inst_28098__$1);

return statearr_28123;
})();
if(cljs.core.truth_(inst_28099)){
var statearr_28124_28150 = state_28119__$1;
(statearr_28124_28150[(1)] = (5));

} else {
var statearr_28125_28151 = state_28119__$1;
(statearr_28125_28151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (13))){
var state_28119__$1 = state_28119;
var statearr_28126_28152 = state_28119__$1;
(statearr_28126_28152[(2)] = null);

(statearr_28126_28152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (6))){
var inst_28098 = (state_28119[(7)]);
var state_28119__$1 = state_28119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28119__$1,(11),to,inst_28098);
} else {
if((state_val_28120 === (3))){
var inst_28117 = (state_28119[(2)]);
var state_28119__$1 = state_28119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28119__$1,inst_28117);
} else {
if((state_val_28120 === (12))){
var state_28119__$1 = state_28119;
var statearr_28127_28153 = state_28119__$1;
(statearr_28127_28153[(2)] = null);

(statearr_28127_28153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (2))){
var state_28119__$1 = state_28119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28119__$1,(4),from);
} else {
if((state_val_28120 === (11))){
var inst_28108 = (state_28119[(2)]);
var state_28119__$1 = state_28119;
if(cljs.core.truth_(inst_28108)){
var statearr_28128_28154 = state_28119__$1;
(statearr_28128_28154[(1)] = (12));

} else {
var statearr_28129_28155 = state_28119__$1;
(statearr_28129_28155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (9))){
var state_28119__$1 = state_28119;
var statearr_28130_28156 = state_28119__$1;
(statearr_28130_28156[(2)] = null);

(statearr_28130_28156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (5))){
var state_28119__$1 = state_28119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28131_28157 = state_28119__$1;
(statearr_28131_28157[(1)] = (8));

} else {
var statearr_28132_28158 = state_28119__$1;
(statearr_28132_28158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (14))){
var inst_28113 = (state_28119[(2)]);
var state_28119__$1 = state_28119;
var statearr_28133_28159 = state_28119__$1;
(statearr_28133_28159[(2)] = inst_28113);

(statearr_28133_28159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (10))){
var inst_28105 = (state_28119[(2)]);
var state_28119__$1 = state_28119;
var statearr_28134_28160 = state_28119__$1;
(statearr_28134_28160[(2)] = inst_28105);

(statearr_28134_28160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (8))){
var inst_28102 = cljs.core.async.close_BANG_.call(null,to);
var state_28119__$1 = state_28119;
var statearr_28135_28161 = state_28119__$1;
(statearr_28135_28161[(2)] = inst_28102);

(statearr_28135_28161[(1)] = (10));


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
});})(c__20691__auto___28147))
;
return ((function (switch__20626__auto__,c__20691__auto___28147){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_28139 = [null,null,null,null,null,null,null,null];
(statearr_28139[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_28139[(1)] = (1));

return statearr_28139;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_28119){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_28119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e28140){if((e28140 instanceof Object)){
var ex__20630__auto__ = e28140;
var statearr_28141_28162 = state_28119;
(statearr_28141_28162[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28163 = state_28119;
state_28119 = G__28163;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_28119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_28119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___28147))
})();
var state__20693__auto__ = (function (){var statearr_28142 = f__20692__auto__.call(null);
(statearr_28142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___28147);

return statearr_28142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___28147))
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
return (function (p__28347){
var vec__28348 = p__28347;
var v = cljs.core.nth.call(null,vec__28348,(0),null);
var p = cljs.core.nth.call(null,vec__28348,(1),null);
var job = vec__28348;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20691__auto___28530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___28530,res,vec__28348,v,p,job,jobs,results){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___28530,res,vec__28348,v,p,job,jobs,results){
return (function (state_28353){
var state_val_28354 = (state_28353[(1)]);
if((state_val_28354 === (1))){
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28353__$1,(2),res,v);
} else {
if((state_val_28354 === (2))){
var inst_28350 = (state_28353[(2)]);
var inst_28351 = cljs.core.async.close_BANG_.call(null,res);
var state_28353__$1 = (function (){var statearr_28355 = state_28353;
(statearr_28355[(7)] = inst_28350);

return statearr_28355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28353__$1,inst_28351);
} else {
return null;
}
}
});})(c__20691__auto___28530,res,vec__28348,v,p,job,jobs,results))
;
return ((function (switch__20626__auto__,c__20691__auto___28530,res,vec__28348,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0 = (function (){
var statearr_28359 = [null,null,null,null,null,null,null,null];
(statearr_28359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__);

(statearr_28359[(1)] = (1));

return statearr_28359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1 = (function (state_28353){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_28353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e28360){if((e28360 instanceof Object)){
var ex__20630__auto__ = e28360;
var statearr_28361_28531 = state_28353;
(statearr_28361_28531[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28532 = state_28353;
state_28353 = G__28532;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__ = function(state_28353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1.call(this,state_28353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___28530,res,vec__28348,v,p,job,jobs,results))
})();
var state__20693__auto__ = (function (){var statearr_28362 = f__20692__auto__.call(null);
(statearr_28362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___28530);

return statearr_28362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___28530,res,vec__28348,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28363){
var vec__28364 = p__28363;
var v = cljs.core.nth.call(null,vec__28364,(0),null);
var p = cljs.core.nth.call(null,vec__28364,(1),null);
var job = vec__28364;
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
var n__17678__auto___28533 = n;
var __28534 = (0);
while(true){
if((__28534 < n__17678__auto___28533)){
var G__28365_28535 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28365_28535) {
case "compute":
var c__20691__auto___28537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28534,c__20691__auto___28537,G__28365_28535,n__17678__auto___28533,jobs,results,process,async){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (__28534,c__20691__auto___28537,G__28365_28535,n__17678__auto___28533,jobs,results,process,async){
return (function (state_28378){
var state_val_28379 = (state_28378[(1)]);
if((state_val_28379 === (1))){
var state_28378__$1 = state_28378;
var statearr_28380_28538 = state_28378__$1;
(statearr_28380_28538[(2)] = null);

(statearr_28380_28538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (2))){
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28378__$1,(4),jobs);
} else {
if((state_val_28379 === (3))){
var inst_28376 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28378__$1,inst_28376);
} else {
if((state_val_28379 === (4))){
var inst_28368 = (state_28378[(2)]);
var inst_28369 = process.call(null,inst_28368);
var state_28378__$1 = state_28378;
if(cljs.core.truth_(inst_28369)){
var statearr_28381_28539 = state_28378__$1;
(statearr_28381_28539[(1)] = (5));

} else {
var statearr_28382_28540 = state_28378__$1;
(statearr_28382_28540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (5))){
var state_28378__$1 = state_28378;
var statearr_28383_28541 = state_28378__$1;
(statearr_28383_28541[(2)] = null);

(statearr_28383_28541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (6))){
var state_28378__$1 = state_28378;
var statearr_28384_28542 = state_28378__$1;
(statearr_28384_28542[(2)] = null);

(statearr_28384_28542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (7))){
var inst_28374 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
var statearr_28385_28543 = state_28378__$1;
(statearr_28385_28543[(2)] = inst_28374);

(statearr_28385_28543[(1)] = (3));


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
});})(__28534,c__20691__auto___28537,G__28365_28535,n__17678__auto___28533,jobs,results,process,async))
;
return ((function (__28534,switch__20626__auto__,c__20691__auto___28537,G__28365_28535,n__17678__auto___28533,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0 = (function (){
var statearr_28389 = [null,null,null,null,null,null,null];
(statearr_28389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__);

(statearr_28389[(1)] = (1));

return statearr_28389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1 = (function (state_28378){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_28378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e28390){if((e28390 instanceof Object)){
var ex__20630__auto__ = e28390;
var statearr_28391_28544 = state_28378;
(statearr_28391_28544[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28545 = state_28378;
state_28378 = G__28545;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__ = function(state_28378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1.call(this,state_28378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__;
})()
;})(__28534,switch__20626__auto__,c__20691__auto___28537,G__28365_28535,n__17678__auto___28533,jobs,results,process,async))
})();
var state__20693__auto__ = (function (){var statearr_28392 = f__20692__auto__.call(null);
(statearr_28392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___28537);

return statearr_28392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(__28534,c__20691__auto___28537,G__28365_28535,n__17678__auto___28533,jobs,results,process,async))
);


break;
case "async":
var c__20691__auto___28546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28534,c__20691__auto___28546,G__28365_28535,n__17678__auto___28533,jobs,results,process,async){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (__28534,c__20691__auto___28546,G__28365_28535,n__17678__auto___28533,jobs,results,process,async){
return (function (state_28405){
var state_val_28406 = (state_28405[(1)]);
if((state_val_28406 === (1))){
var state_28405__$1 = state_28405;
var statearr_28407_28547 = state_28405__$1;
(statearr_28407_28547[(2)] = null);

(statearr_28407_28547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (2))){
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28405__$1,(4),jobs);
} else {
if((state_val_28406 === (3))){
var inst_28403 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28405__$1,inst_28403);
} else {
if((state_val_28406 === (4))){
var inst_28395 = (state_28405[(2)]);
var inst_28396 = async.call(null,inst_28395);
var state_28405__$1 = state_28405;
if(cljs.core.truth_(inst_28396)){
var statearr_28408_28548 = state_28405__$1;
(statearr_28408_28548[(1)] = (5));

} else {
var statearr_28409_28549 = state_28405__$1;
(statearr_28409_28549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (5))){
var state_28405__$1 = state_28405;
var statearr_28410_28550 = state_28405__$1;
(statearr_28410_28550[(2)] = null);

(statearr_28410_28550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (6))){
var state_28405__$1 = state_28405;
var statearr_28411_28551 = state_28405__$1;
(statearr_28411_28551[(2)] = null);

(statearr_28411_28551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (7))){
var inst_28401 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28412_28552 = state_28405__$1;
(statearr_28412_28552[(2)] = inst_28401);

(statearr_28412_28552[(1)] = (3));


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
});})(__28534,c__20691__auto___28546,G__28365_28535,n__17678__auto___28533,jobs,results,process,async))
;
return ((function (__28534,switch__20626__auto__,c__20691__auto___28546,G__28365_28535,n__17678__auto___28533,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0 = (function (){
var statearr_28416 = [null,null,null,null,null,null,null];
(statearr_28416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__);

(statearr_28416[(1)] = (1));

return statearr_28416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1 = (function (state_28405){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_28405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e28417){if((e28417 instanceof Object)){
var ex__20630__auto__ = e28417;
var statearr_28418_28553 = state_28405;
(statearr_28418_28553[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28554 = state_28405;
state_28405 = G__28554;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__ = function(state_28405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1.call(this,state_28405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__;
})()
;})(__28534,switch__20626__auto__,c__20691__auto___28546,G__28365_28535,n__17678__auto___28533,jobs,results,process,async))
})();
var state__20693__auto__ = (function (){var statearr_28419 = f__20692__auto__.call(null);
(statearr_28419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___28546);

return statearr_28419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(__28534,c__20691__auto___28546,G__28365_28535,n__17678__auto___28533,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28555 = (__28534 + (1));
__28534 = G__28555;
continue;
} else {
}
break;
}

var c__20691__auto___28556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___28556,jobs,results,process,async){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___28556,jobs,results,process,async){
return (function (state_28441){
var state_val_28442 = (state_28441[(1)]);
if((state_val_28442 === (1))){
var state_28441__$1 = state_28441;
var statearr_28443_28557 = state_28441__$1;
(statearr_28443_28557[(2)] = null);

(statearr_28443_28557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28442 === (2))){
var state_28441__$1 = state_28441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28441__$1,(4),from);
} else {
if((state_val_28442 === (3))){
var inst_28439 = (state_28441[(2)]);
var state_28441__$1 = state_28441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28441__$1,inst_28439);
} else {
if((state_val_28442 === (4))){
var inst_28422 = (state_28441[(7)]);
var inst_28422__$1 = (state_28441[(2)]);
var inst_28423 = (inst_28422__$1 == null);
var state_28441__$1 = (function (){var statearr_28444 = state_28441;
(statearr_28444[(7)] = inst_28422__$1);

return statearr_28444;
})();
if(cljs.core.truth_(inst_28423)){
var statearr_28445_28558 = state_28441__$1;
(statearr_28445_28558[(1)] = (5));

} else {
var statearr_28446_28559 = state_28441__$1;
(statearr_28446_28559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28442 === (5))){
var inst_28425 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28441__$1 = state_28441;
var statearr_28447_28560 = state_28441__$1;
(statearr_28447_28560[(2)] = inst_28425);

(statearr_28447_28560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28442 === (6))){
var inst_28422 = (state_28441[(7)]);
var inst_28427 = (state_28441[(8)]);
var inst_28427__$1 = cljs.core.async.chan.call(null,(1));
var inst_28428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28429 = [inst_28422,inst_28427__$1];
var inst_28430 = (new cljs.core.PersistentVector(null,2,(5),inst_28428,inst_28429,null));
var state_28441__$1 = (function (){var statearr_28448 = state_28441;
(statearr_28448[(8)] = inst_28427__$1);

return statearr_28448;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28441__$1,(8),jobs,inst_28430);
} else {
if((state_val_28442 === (7))){
var inst_28437 = (state_28441[(2)]);
var state_28441__$1 = state_28441;
var statearr_28449_28561 = state_28441__$1;
(statearr_28449_28561[(2)] = inst_28437);

(statearr_28449_28561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28442 === (8))){
var inst_28427 = (state_28441[(8)]);
var inst_28432 = (state_28441[(2)]);
var state_28441__$1 = (function (){var statearr_28450 = state_28441;
(statearr_28450[(9)] = inst_28432);

return statearr_28450;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28441__$1,(9),results,inst_28427);
} else {
if((state_val_28442 === (9))){
var inst_28434 = (state_28441[(2)]);
var state_28441__$1 = (function (){var statearr_28451 = state_28441;
(statearr_28451[(10)] = inst_28434);

return statearr_28451;
})();
var statearr_28452_28562 = state_28441__$1;
(statearr_28452_28562[(2)] = null);

(statearr_28452_28562[(1)] = (2));


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
});})(c__20691__auto___28556,jobs,results,process,async))
;
return ((function (switch__20626__auto__,c__20691__auto___28556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0 = (function (){
var statearr_28456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__);

(statearr_28456[(1)] = (1));

return statearr_28456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1 = (function (state_28441){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_28441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e28457){if((e28457 instanceof Object)){
var ex__20630__auto__ = e28457;
var statearr_28458_28563 = state_28441;
(statearr_28458_28563[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28564 = state_28441;
state_28441 = G__28564;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__ = function(state_28441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1.call(this,state_28441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___28556,jobs,results,process,async))
})();
var state__20693__auto__ = (function (){var statearr_28459 = f__20692__auto__.call(null);
(statearr_28459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___28556);

return statearr_28459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___28556,jobs,results,process,async))
);


var c__20691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto__,jobs,results,process,async){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto__,jobs,results,process,async){
return (function (state_28497){
var state_val_28498 = (state_28497[(1)]);
if((state_val_28498 === (7))){
var inst_28493 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
var statearr_28499_28565 = state_28497__$1;
(statearr_28499_28565[(2)] = inst_28493);

(statearr_28499_28565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (20))){
var state_28497__$1 = state_28497;
var statearr_28500_28566 = state_28497__$1;
(statearr_28500_28566[(2)] = null);

(statearr_28500_28566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (1))){
var state_28497__$1 = state_28497;
var statearr_28501_28567 = state_28497__$1;
(statearr_28501_28567[(2)] = null);

(statearr_28501_28567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (4))){
var inst_28462 = (state_28497[(7)]);
var inst_28462__$1 = (state_28497[(2)]);
var inst_28463 = (inst_28462__$1 == null);
var state_28497__$1 = (function (){var statearr_28502 = state_28497;
(statearr_28502[(7)] = inst_28462__$1);

return statearr_28502;
})();
if(cljs.core.truth_(inst_28463)){
var statearr_28503_28568 = state_28497__$1;
(statearr_28503_28568[(1)] = (5));

} else {
var statearr_28504_28569 = state_28497__$1;
(statearr_28504_28569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (15))){
var inst_28475 = (state_28497[(8)]);
var state_28497__$1 = state_28497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28497__$1,(18),to,inst_28475);
} else {
if((state_val_28498 === (21))){
var inst_28488 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
var statearr_28505_28570 = state_28497__$1;
(statearr_28505_28570[(2)] = inst_28488);

(statearr_28505_28570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (13))){
var inst_28490 = (state_28497[(2)]);
var state_28497__$1 = (function (){var statearr_28506 = state_28497;
(statearr_28506[(9)] = inst_28490);

return statearr_28506;
})();
var statearr_28507_28571 = state_28497__$1;
(statearr_28507_28571[(2)] = null);

(statearr_28507_28571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (6))){
var inst_28462 = (state_28497[(7)]);
var state_28497__$1 = state_28497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28497__$1,(11),inst_28462);
} else {
if((state_val_28498 === (17))){
var inst_28483 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
if(cljs.core.truth_(inst_28483)){
var statearr_28508_28572 = state_28497__$1;
(statearr_28508_28572[(1)] = (19));

} else {
var statearr_28509_28573 = state_28497__$1;
(statearr_28509_28573[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (3))){
var inst_28495 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28497__$1,inst_28495);
} else {
if((state_val_28498 === (12))){
var inst_28472 = (state_28497[(10)]);
var state_28497__$1 = state_28497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28497__$1,(14),inst_28472);
} else {
if((state_val_28498 === (2))){
var state_28497__$1 = state_28497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28497__$1,(4),results);
} else {
if((state_val_28498 === (19))){
var state_28497__$1 = state_28497;
var statearr_28510_28574 = state_28497__$1;
(statearr_28510_28574[(2)] = null);

(statearr_28510_28574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (11))){
var inst_28472 = (state_28497[(2)]);
var state_28497__$1 = (function (){var statearr_28511 = state_28497;
(statearr_28511[(10)] = inst_28472);

return statearr_28511;
})();
var statearr_28512_28575 = state_28497__$1;
(statearr_28512_28575[(2)] = null);

(statearr_28512_28575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (9))){
var state_28497__$1 = state_28497;
var statearr_28513_28576 = state_28497__$1;
(statearr_28513_28576[(2)] = null);

(statearr_28513_28576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (5))){
var state_28497__$1 = state_28497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28514_28577 = state_28497__$1;
(statearr_28514_28577[(1)] = (8));

} else {
var statearr_28515_28578 = state_28497__$1;
(statearr_28515_28578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (14))){
var inst_28475 = (state_28497[(8)]);
var inst_28477 = (state_28497[(11)]);
var inst_28475__$1 = (state_28497[(2)]);
var inst_28476 = (inst_28475__$1 == null);
var inst_28477__$1 = cljs.core.not.call(null,inst_28476);
var state_28497__$1 = (function (){var statearr_28516 = state_28497;
(statearr_28516[(8)] = inst_28475__$1);

(statearr_28516[(11)] = inst_28477__$1);

return statearr_28516;
})();
if(inst_28477__$1){
var statearr_28517_28579 = state_28497__$1;
(statearr_28517_28579[(1)] = (15));

} else {
var statearr_28518_28580 = state_28497__$1;
(statearr_28518_28580[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (16))){
var inst_28477 = (state_28497[(11)]);
var state_28497__$1 = state_28497;
var statearr_28519_28581 = state_28497__$1;
(statearr_28519_28581[(2)] = inst_28477);

(statearr_28519_28581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (10))){
var inst_28469 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
var statearr_28520_28582 = state_28497__$1;
(statearr_28520_28582[(2)] = inst_28469);

(statearr_28520_28582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (18))){
var inst_28480 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
var statearr_28521_28583 = state_28497__$1;
(statearr_28521_28583[(2)] = inst_28480);

(statearr_28521_28583[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (8))){
var inst_28466 = cljs.core.async.close_BANG_.call(null,to);
var state_28497__$1 = state_28497;
var statearr_28522_28584 = state_28497__$1;
(statearr_28522_28584[(2)] = inst_28466);

(statearr_28522_28584[(1)] = (10));


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
});})(c__20691__auto__,jobs,results,process,async))
;
return ((function (switch__20626__auto__,c__20691__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0 = (function (){
var statearr_28526 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__);

(statearr_28526[(1)] = (1));

return statearr_28526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1 = (function (state_28497){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_28497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e28527){if((e28527 instanceof Object)){
var ex__20630__auto__ = e28527;
var statearr_28528_28585 = state_28497;
(statearr_28528_28585[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28586 = state_28497;
state_28497 = G__28586;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__ = function(state_28497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1.call(this,state_28497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto__,jobs,results,process,async))
})();
var state__20693__auto__ = (function (){var statearr_28529 = f__20692__auto__.call(null);
(statearr_28529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto__);

return statearr_28529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto__,jobs,results,process,async))
);

return c__20691__auto__;
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
var args28587 = [];
var len__17833__auto___28590 = arguments.length;
var i__17834__auto___28591 = (0);
while(true){
if((i__17834__auto___28591 < len__17833__auto___28590)){
args28587.push((arguments[i__17834__auto___28591]));

var G__28592 = (i__17834__auto___28591 + (1));
i__17834__auto___28591 = G__28592;
continue;
} else {
}
break;
}

var G__28589 = args28587.length;
switch (G__28589) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28587.length)].join('')));

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
var args28594 = [];
var len__17833__auto___28597 = arguments.length;
var i__17834__auto___28598 = (0);
while(true){
if((i__17834__auto___28598 < len__17833__auto___28597)){
args28594.push((arguments[i__17834__auto___28598]));

var G__28599 = (i__17834__auto___28598 + (1));
i__17834__auto___28598 = G__28599;
continue;
} else {
}
break;
}

var G__28596 = args28594.length;
switch (G__28596) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28594.length)].join('')));

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
var args28601 = [];
var len__17833__auto___28654 = arguments.length;
var i__17834__auto___28655 = (0);
while(true){
if((i__17834__auto___28655 < len__17833__auto___28654)){
args28601.push((arguments[i__17834__auto___28655]));

var G__28656 = (i__17834__auto___28655 + (1));
i__17834__auto___28655 = G__28656;
continue;
} else {
}
break;
}

var G__28603 = args28601.length;
switch (G__28603) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28601.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20691__auto___28658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___28658,tc,fc){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___28658,tc,fc){
return (function (state_28629){
var state_val_28630 = (state_28629[(1)]);
if((state_val_28630 === (7))){
var inst_28625 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28631_28659 = state_28629__$1;
(statearr_28631_28659[(2)] = inst_28625);

(statearr_28631_28659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (1))){
var state_28629__$1 = state_28629;
var statearr_28632_28660 = state_28629__$1;
(statearr_28632_28660[(2)] = null);

(statearr_28632_28660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (4))){
var inst_28606 = (state_28629[(7)]);
var inst_28606__$1 = (state_28629[(2)]);
var inst_28607 = (inst_28606__$1 == null);
var state_28629__$1 = (function (){var statearr_28633 = state_28629;
(statearr_28633[(7)] = inst_28606__$1);

return statearr_28633;
})();
if(cljs.core.truth_(inst_28607)){
var statearr_28634_28661 = state_28629__$1;
(statearr_28634_28661[(1)] = (5));

} else {
var statearr_28635_28662 = state_28629__$1;
(statearr_28635_28662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (13))){
var state_28629__$1 = state_28629;
var statearr_28636_28663 = state_28629__$1;
(statearr_28636_28663[(2)] = null);

(statearr_28636_28663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (6))){
var inst_28606 = (state_28629[(7)]);
var inst_28612 = p.call(null,inst_28606);
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28612)){
var statearr_28637_28664 = state_28629__$1;
(statearr_28637_28664[(1)] = (9));

} else {
var statearr_28638_28665 = state_28629__$1;
(statearr_28638_28665[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (3))){
var inst_28627 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28629__$1,inst_28627);
} else {
if((state_val_28630 === (12))){
var state_28629__$1 = state_28629;
var statearr_28639_28666 = state_28629__$1;
(statearr_28639_28666[(2)] = null);

(statearr_28639_28666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (2))){
var state_28629__$1 = state_28629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28629__$1,(4),ch);
} else {
if((state_val_28630 === (11))){
var inst_28606 = (state_28629[(7)]);
var inst_28616 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28629__$1,(8),inst_28616,inst_28606);
} else {
if((state_val_28630 === (9))){
var state_28629__$1 = state_28629;
var statearr_28640_28667 = state_28629__$1;
(statearr_28640_28667[(2)] = tc);

(statearr_28640_28667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (5))){
var inst_28609 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28610 = cljs.core.async.close_BANG_.call(null,fc);
var state_28629__$1 = (function (){var statearr_28641 = state_28629;
(statearr_28641[(8)] = inst_28609);

return statearr_28641;
})();
var statearr_28642_28668 = state_28629__$1;
(statearr_28642_28668[(2)] = inst_28610);

(statearr_28642_28668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (14))){
var inst_28623 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28643_28669 = state_28629__$1;
(statearr_28643_28669[(2)] = inst_28623);

(statearr_28643_28669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (10))){
var state_28629__$1 = state_28629;
var statearr_28644_28670 = state_28629__$1;
(statearr_28644_28670[(2)] = fc);

(statearr_28644_28670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (8))){
var inst_28618 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28618)){
var statearr_28645_28671 = state_28629__$1;
(statearr_28645_28671[(1)] = (12));

} else {
var statearr_28646_28672 = state_28629__$1;
(statearr_28646_28672[(1)] = (13));

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
});})(c__20691__auto___28658,tc,fc))
;
return ((function (switch__20626__auto__,c__20691__auto___28658,tc,fc){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_28650 = [null,null,null,null,null,null,null,null,null];
(statearr_28650[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_28650[(1)] = (1));

return statearr_28650;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_28629){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_28629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e28651){if((e28651 instanceof Object)){
var ex__20630__auto__ = e28651;
var statearr_28652_28673 = state_28629;
(statearr_28652_28673[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28674 = state_28629;
state_28629 = G__28674;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_28629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_28629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___28658,tc,fc))
})();
var state__20693__auto__ = (function (){var statearr_28653 = f__20692__auto__.call(null);
(statearr_28653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___28658);

return statearr_28653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___28658,tc,fc))
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
var c__20691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto__){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto__){
return (function (state_28721){
var state_val_28722 = (state_28721[(1)]);
if((state_val_28722 === (1))){
var inst_28707 = init;
var state_28721__$1 = (function (){var statearr_28723 = state_28721;
(statearr_28723[(7)] = inst_28707);

return statearr_28723;
})();
var statearr_28724_28739 = state_28721__$1;
(statearr_28724_28739[(2)] = null);

(statearr_28724_28739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (2))){
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28721__$1,(4),ch);
} else {
if((state_val_28722 === (3))){
var inst_28719 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28721__$1,inst_28719);
} else {
if((state_val_28722 === (4))){
var inst_28710 = (state_28721[(8)]);
var inst_28710__$1 = (state_28721[(2)]);
var inst_28711 = (inst_28710__$1 == null);
var state_28721__$1 = (function (){var statearr_28725 = state_28721;
(statearr_28725[(8)] = inst_28710__$1);

return statearr_28725;
})();
if(cljs.core.truth_(inst_28711)){
var statearr_28726_28740 = state_28721__$1;
(statearr_28726_28740[(1)] = (5));

} else {
var statearr_28727_28741 = state_28721__$1;
(statearr_28727_28741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (5))){
var inst_28707 = (state_28721[(7)]);
var state_28721__$1 = state_28721;
var statearr_28728_28742 = state_28721__$1;
(statearr_28728_28742[(2)] = inst_28707);

(statearr_28728_28742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (6))){
var inst_28707 = (state_28721[(7)]);
var inst_28710 = (state_28721[(8)]);
var inst_28714 = f.call(null,inst_28707,inst_28710);
var inst_28707__$1 = inst_28714;
var state_28721__$1 = (function (){var statearr_28729 = state_28721;
(statearr_28729[(7)] = inst_28707__$1);

return statearr_28729;
})();
var statearr_28730_28743 = state_28721__$1;
(statearr_28730_28743[(2)] = null);

(statearr_28730_28743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (7))){
var inst_28717 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
var statearr_28731_28744 = state_28721__$1;
(statearr_28731_28744[(2)] = inst_28717);

(statearr_28731_28744[(1)] = (3));


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
});})(c__20691__auto__))
;
return ((function (switch__20626__auto__,c__20691__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20627__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20627__auto____0 = (function (){
var statearr_28735 = [null,null,null,null,null,null,null,null,null];
(statearr_28735[(0)] = cljs$core$async$reduce_$_state_machine__20627__auto__);

(statearr_28735[(1)] = (1));

return statearr_28735;
});
var cljs$core$async$reduce_$_state_machine__20627__auto____1 = (function (state_28721){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_28721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e28736){if((e28736 instanceof Object)){
var ex__20630__auto__ = e28736;
var statearr_28737_28745 = state_28721;
(statearr_28737_28745[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28746 = state_28721;
state_28721 = G__28746;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20627__auto__ = function(state_28721){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20627__auto____1.call(this,state_28721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20627__auto____0;
cljs$core$async$reduce_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20627__auto____1;
return cljs$core$async$reduce_$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto__))
})();
var state__20693__auto__ = (function (){var statearr_28738 = f__20692__auto__.call(null);
(statearr_28738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto__);

return statearr_28738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto__))
);

return c__20691__auto__;
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
var args28747 = [];
var len__17833__auto___28799 = arguments.length;
var i__17834__auto___28800 = (0);
while(true){
if((i__17834__auto___28800 < len__17833__auto___28799)){
args28747.push((arguments[i__17834__auto___28800]));

var G__28801 = (i__17834__auto___28800 + (1));
i__17834__auto___28800 = G__28801;
continue;
} else {
}
break;
}

var G__28749 = args28747.length;
switch (G__28749) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28747.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto__){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto__){
return (function (state_28774){
var state_val_28775 = (state_28774[(1)]);
if((state_val_28775 === (7))){
var inst_28756 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28776_28803 = state_28774__$1;
(statearr_28776_28803[(2)] = inst_28756);

(statearr_28776_28803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (1))){
var inst_28750 = cljs.core.seq.call(null,coll);
var inst_28751 = inst_28750;
var state_28774__$1 = (function (){var statearr_28777 = state_28774;
(statearr_28777[(7)] = inst_28751);

return statearr_28777;
})();
var statearr_28778_28804 = state_28774__$1;
(statearr_28778_28804[(2)] = null);

(statearr_28778_28804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (4))){
var inst_28751 = (state_28774[(7)]);
var inst_28754 = cljs.core.first.call(null,inst_28751);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28774__$1,(7),ch,inst_28754);
} else {
if((state_val_28775 === (13))){
var inst_28768 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28779_28805 = state_28774__$1;
(statearr_28779_28805[(2)] = inst_28768);

(statearr_28779_28805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (6))){
var inst_28759 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28759)){
var statearr_28780_28806 = state_28774__$1;
(statearr_28780_28806[(1)] = (8));

} else {
var statearr_28781_28807 = state_28774__$1;
(statearr_28781_28807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (3))){
var inst_28772 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28774__$1,inst_28772);
} else {
if((state_val_28775 === (12))){
var state_28774__$1 = state_28774;
var statearr_28782_28808 = state_28774__$1;
(statearr_28782_28808[(2)] = null);

(statearr_28782_28808[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (2))){
var inst_28751 = (state_28774[(7)]);
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28751)){
var statearr_28783_28809 = state_28774__$1;
(statearr_28783_28809[(1)] = (4));

} else {
var statearr_28784_28810 = state_28774__$1;
(statearr_28784_28810[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (11))){
var inst_28765 = cljs.core.async.close_BANG_.call(null,ch);
var state_28774__$1 = state_28774;
var statearr_28785_28811 = state_28774__$1;
(statearr_28785_28811[(2)] = inst_28765);

(statearr_28785_28811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (9))){
var state_28774__$1 = state_28774;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28786_28812 = state_28774__$1;
(statearr_28786_28812[(1)] = (11));

} else {
var statearr_28787_28813 = state_28774__$1;
(statearr_28787_28813[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (5))){
var inst_28751 = (state_28774[(7)]);
var state_28774__$1 = state_28774;
var statearr_28788_28814 = state_28774__$1;
(statearr_28788_28814[(2)] = inst_28751);

(statearr_28788_28814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (10))){
var inst_28770 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28789_28815 = state_28774__$1;
(statearr_28789_28815[(2)] = inst_28770);

(statearr_28789_28815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (8))){
var inst_28751 = (state_28774[(7)]);
var inst_28761 = cljs.core.next.call(null,inst_28751);
var inst_28751__$1 = inst_28761;
var state_28774__$1 = (function (){var statearr_28790 = state_28774;
(statearr_28790[(7)] = inst_28751__$1);

return statearr_28790;
})();
var statearr_28791_28816 = state_28774__$1;
(statearr_28791_28816[(2)] = null);

(statearr_28791_28816[(1)] = (2));


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
});})(c__20691__auto__))
;
return ((function (switch__20626__auto__,c__20691__auto__){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_28795 = [null,null,null,null,null,null,null,null];
(statearr_28795[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_28795[(1)] = (1));

return statearr_28795;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_28774){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_28774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e28796){if((e28796 instanceof Object)){
var ex__20630__auto__ = e28796;
var statearr_28797_28817 = state_28774;
(statearr_28797_28817[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28818 = state_28774;
state_28774 = G__28818;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_28774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_28774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto__))
})();
var state__20693__auto__ = (function (){var statearr_28798 = f__20692__auto__.call(null);
(statearr_28798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto__);

return statearr_28798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto__))
);

return c__20691__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async29040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29040 = (function (mult,ch,cs,meta29041){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29041 = meta29041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29042,meta29041__$1){
var self__ = this;
var _29042__$1 = this;
return (new cljs.core.async.t_cljs$core$async29040(self__.mult,self__.ch,self__.cs,meta29041__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29042){
var self__ = this;
var _29042__$1 = this;
return self__.meta29041;
});})(cs))
;

cljs.core.async.t_cljs$core$async29040.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29040.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29040.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29040.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29040.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29040.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29040.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29041","meta29041",-1790978554,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29040";

cljs.core.async.t_cljs$core$async29040.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async29040");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29040 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29040(mult__$1,ch__$1,cs__$1,meta29041){
return (new cljs.core.async.t_cljs$core$async29040(mult__$1,ch__$1,cs__$1,meta29041));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29040(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20691__auto___29261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___29261,cs,m,dchan,dctr,done){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___29261,cs,m,dchan,dctr,done){
return (function (state_29173){
var state_val_29174 = (state_29173[(1)]);
if((state_val_29174 === (7))){
var inst_29169 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
var statearr_29175_29262 = state_29173__$1;
(statearr_29175_29262[(2)] = inst_29169);

(statearr_29175_29262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (20))){
var inst_29074 = (state_29173[(7)]);
var inst_29084 = cljs.core.first.call(null,inst_29074);
var inst_29085 = cljs.core.nth.call(null,inst_29084,(0),null);
var inst_29086 = cljs.core.nth.call(null,inst_29084,(1),null);
var state_29173__$1 = (function (){var statearr_29176 = state_29173;
(statearr_29176[(8)] = inst_29085);

return statearr_29176;
})();
if(cljs.core.truth_(inst_29086)){
var statearr_29177_29263 = state_29173__$1;
(statearr_29177_29263[(1)] = (22));

} else {
var statearr_29178_29264 = state_29173__$1;
(statearr_29178_29264[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (27))){
var inst_29116 = (state_29173[(9)]);
var inst_29045 = (state_29173[(10)]);
var inst_29121 = (state_29173[(11)]);
var inst_29114 = (state_29173[(12)]);
var inst_29121__$1 = cljs.core._nth.call(null,inst_29114,inst_29116);
var inst_29122 = cljs.core.async.put_BANG_.call(null,inst_29121__$1,inst_29045,done);
var state_29173__$1 = (function (){var statearr_29179 = state_29173;
(statearr_29179[(11)] = inst_29121__$1);

return statearr_29179;
})();
if(cljs.core.truth_(inst_29122)){
var statearr_29180_29265 = state_29173__$1;
(statearr_29180_29265[(1)] = (30));

} else {
var statearr_29181_29266 = state_29173__$1;
(statearr_29181_29266[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (1))){
var state_29173__$1 = state_29173;
var statearr_29182_29267 = state_29173__$1;
(statearr_29182_29267[(2)] = null);

(statearr_29182_29267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (24))){
var inst_29074 = (state_29173[(7)]);
var inst_29091 = (state_29173[(2)]);
var inst_29092 = cljs.core.next.call(null,inst_29074);
var inst_29054 = inst_29092;
var inst_29055 = null;
var inst_29056 = (0);
var inst_29057 = (0);
var state_29173__$1 = (function (){var statearr_29183 = state_29173;
(statearr_29183[(13)] = inst_29057);

(statearr_29183[(14)] = inst_29091);

(statearr_29183[(15)] = inst_29056);

(statearr_29183[(16)] = inst_29055);

(statearr_29183[(17)] = inst_29054);

return statearr_29183;
})();
var statearr_29184_29268 = state_29173__$1;
(statearr_29184_29268[(2)] = null);

(statearr_29184_29268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (39))){
var state_29173__$1 = state_29173;
var statearr_29188_29269 = state_29173__$1;
(statearr_29188_29269[(2)] = null);

(statearr_29188_29269[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (4))){
var inst_29045 = (state_29173[(10)]);
var inst_29045__$1 = (state_29173[(2)]);
var inst_29046 = (inst_29045__$1 == null);
var state_29173__$1 = (function (){var statearr_29189 = state_29173;
(statearr_29189[(10)] = inst_29045__$1);

return statearr_29189;
})();
if(cljs.core.truth_(inst_29046)){
var statearr_29190_29270 = state_29173__$1;
(statearr_29190_29270[(1)] = (5));

} else {
var statearr_29191_29271 = state_29173__$1;
(statearr_29191_29271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (15))){
var inst_29057 = (state_29173[(13)]);
var inst_29056 = (state_29173[(15)]);
var inst_29055 = (state_29173[(16)]);
var inst_29054 = (state_29173[(17)]);
var inst_29070 = (state_29173[(2)]);
var inst_29071 = (inst_29057 + (1));
var tmp29185 = inst_29056;
var tmp29186 = inst_29055;
var tmp29187 = inst_29054;
var inst_29054__$1 = tmp29187;
var inst_29055__$1 = tmp29186;
var inst_29056__$1 = tmp29185;
var inst_29057__$1 = inst_29071;
var state_29173__$1 = (function (){var statearr_29192 = state_29173;
(statearr_29192[(13)] = inst_29057__$1);

(statearr_29192[(18)] = inst_29070);

(statearr_29192[(15)] = inst_29056__$1);

(statearr_29192[(16)] = inst_29055__$1);

(statearr_29192[(17)] = inst_29054__$1);

return statearr_29192;
})();
var statearr_29193_29272 = state_29173__$1;
(statearr_29193_29272[(2)] = null);

(statearr_29193_29272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (21))){
var inst_29095 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
var statearr_29197_29273 = state_29173__$1;
(statearr_29197_29273[(2)] = inst_29095);

(statearr_29197_29273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (31))){
var inst_29121 = (state_29173[(11)]);
var inst_29125 = done.call(null,null);
var inst_29126 = cljs.core.async.untap_STAR_.call(null,m,inst_29121);
var state_29173__$1 = (function (){var statearr_29198 = state_29173;
(statearr_29198[(19)] = inst_29125);

return statearr_29198;
})();
var statearr_29199_29274 = state_29173__$1;
(statearr_29199_29274[(2)] = inst_29126);

(statearr_29199_29274[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (32))){
var inst_29116 = (state_29173[(9)]);
var inst_29113 = (state_29173[(20)]);
var inst_29115 = (state_29173[(21)]);
var inst_29114 = (state_29173[(12)]);
var inst_29128 = (state_29173[(2)]);
var inst_29129 = (inst_29116 + (1));
var tmp29194 = inst_29113;
var tmp29195 = inst_29115;
var tmp29196 = inst_29114;
var inst_29113__$1 = tmp29194;
var inst_29114__$1 = tmp29196;
var inst_29115__$1 = tmp29195;
var inst_29116__$1 = inst_29129;
var state_29173__$1 = (function (){var statearr_29200 = state_29173;
(statearr_29200[(9)] = inst_29116__$1);

(statearr_29200[(20)] = inst_29113__$1);

(statearr_29200[(22)] = inst_29128);

(statearr_29200[(21)] = inst_29115__$1);

(statearr_29200[(12)] = inst_29114__$1);

return statearr_29200;
})();
var statearr_29201_29275 = state_29173__$1;
(statearr_29201_29275[(2)] = null);

(statearr_29201_29275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (40))){
var inst_29141 = (state_29173[(23)]);
var inst_29145 = done.call(null,null);
var inst_29146 = cljs.core.async.untap_STAR_.call(null,m,inst_29141);
var state_29173__$1 = (function (){var statearr_29202 = state_29173;
(statearr_29202[(24)] = inst_29145);

return statearr_29202;
})();
var statearr_29203_29276 = state_29173__$1;
(statearr_29203_29276[(2)] = inst_29146);

(statearr_29203_29276[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (33))){
var inst_29132 = (state_29173[(25)]);
var inst_29134 = cljs.core.chunked_seq_QMARK_.call(null,inst_29132);
var state_29173__$1 = state_29173;
if(inst_29134){
var statearr_29204_29277 = state_29173__$1;
(statearr_29204_29277[(1)] = (36));

} else {
var statearr_29205_29278 = state_29173__$1;
(statearr_29205_29278[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (13))){
var inst_29064 = (state_29173[(26)]);
var inst_29067 = cljs.core.async.close_BANG_.call(null,inst_29064);
var state_29173__$1 = state_29173;
var statearr_29206_29279 = state_29173__$1;
(statearr_29206_29279[(2)] = inst_29067);

(statearr_29206_29279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (22))){
var inst_29085 = (state_29173[(8)]);
var inst_29088 = cljs.core.async.close_BANG_.call(null,inst_29085);
var state_29173__$1 = state_29173;
var statearr_29207_29280 = state_29173__$1;
(statearr_29207_29280[(2)] = inst_29088);

(statearr_29207_29280[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (36))){
var inst_29132 = (state_29173[(25)]);
var inst_29136 = cljs.core.chunk_first.call(null,inst_29132);
var inst_29137 = cljs.core.chunk_rest.call(null,inst_29132);
var inst_29138 = cljs.core.count.call(null,inst_29136);
var inst_29113 = inst_29137;
var inst_29114 = inst_29136;
var inst_29115 = inst_29138;
var inst_29116 = (0);
var state_29173__$1 = (function (){var statearr_29208 = state_29173;
(statearr_29208[(9)] = inst_29116);

(statearr_29208[(20)] = inst_29113);

(statearr_29208[(21)] = inst_29115);

(statearr_29208[(12)] = inst_29114);

return statearr_29208;
})();
var statearr_29209_29281 = state_29173__$1;
(statearr_29209_29281[(2)] = null);

(statearr_29209_29281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (41))){
var inst_29132 = (state_29173[(25)]);
var inst_29148 = (state_29173[(2)]);
var inst_29149 = cljs.core.next.call(null,inst_29132);
var inst_29113 = inst_29149;
var inst_29114 = null;
var inst_29115 = (0);
var inst_29116 = (0);
var state_29173__$1 = (function (){var statearr_29210 = state_29173;
(statearr_29210[(9)] = inst_29116);

(statearr_29210[(20)] = inst_29113);

(statearr_29210[(27)] = inst_29148);

(statearr_29210[(21)] = inst_29115);

(statearr_29210[(12)] = inst_29114);

return statearr_29210;
})();
var statearr_29211_29282 = state_29173__$1;
(statearr_29211_29282[(2)] = null);

(statearr_29211_29282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (43))){
var state_29173__$1 = state_29173;
var statearr_29212_29283 = state_29173__$1;
(statearr_29212_29283[(2)] = null);

(statearr_29212_29283[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (29))){
var inst_29157 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
var statearr_29213_29284 = state_29173__$1;
(statearr_29213_29284[(2)] = inst_29157);

(statearr_29213_29284[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (44))){
var inst_29166 = (state_29173[(2)]);
var state_29173__$1 = (function (){var statearr_29214 = state_29173;
(statearr_29214[(28)] = inst_29166);

return statearr_29214;
})();
var statearr_29215_29285 = state_29173__$1;
(statearr_29215_29285[(2)] = null);

(statearr_29215_29285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (6))){
var inst_29105 = (state_29173[(29)]);
var inst_29104 = cljs.core.deref.call(null,cs);
var inst_29105__$1 = cljs.core.keys.call(null,inst_29104);
var inst_29106 = cljs.core.count.call(null,inst_29105__$1);
var inst_29107 = cljs.core.reset_BANG_.call(null,dctr,inst_29106);
var inst_29112 = cljs.core.seq.call(null,inst_29105__$1);
var inst_29113 = inst_29112;
var inst_29114 = null;
var inst_29115 = (0);
var inst_29116 = (0);
var state_29173__$1 = (function (){var statearr_29216 = state_29173;
(statearr_29216[(29)] = inst_29105__$1);

(statearr_29216[(9)] = inst_29116);

(statearr_29216[(20)] = inst_29113);

(statearr_29216[(30)] = inst_29107);

(statearr_29216[(21)] = inst_29115);

(statearr_29216[(12)] = inst_29114);

return statearr_29216;
})();
var statearr_29217_29286 = state_29173__$1;
(statearr_29217_29286[(2)] = null);

(statearr_29217_29286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (28))){
var inst_29113 = (state_29173[(20)]);
var inst_29132 = (state_29173[(25)]);
var inst_29132__$1 = cljs.core.seq.call(null,inst_29113);
var state_29173__$1 = (function (){var statearr_29218 = state_29173;
(statearr_29218[(25)] = inst_29132__$1);

return statearr_29218;
})();
if(inst_29132__$1){
var statearr_29219_29287 = state_29173__$1;
(statearr_29219_29287[(1)] = (33));

} else {
var statearr_29220_29288 = state_29173__$1;
(statearr_29220_29288[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (25))){
var inst_29116 = (state_29173[(9)]);
var inst_29115 = (state_29173[(21)]);
var inst_29118 = (inst_29116 < inst_29115);
var inst_29119 = inst_29118;
var state_29173__$1 = state_29173;
if(cljs.core.truth_(inst_29119)){
var statearr_29221_29289 = state_29173__$1;
(statearr_29221_29289[(1)] = (27));

} else {
var statearr_29222_29290 = state_29173__$1;
(statearr_29222_29290[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (34))){
var state_29173__$1 = state_29173;
var statearr_29223_29291 = state_29173__$1;
(statearr_29223_29291[(2)] = null);

(statearr_29223_29291[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (17))){
var state_29173__$1 = state_29173;
var statearr_29224_29292 = state_29173__$1;
(statearr_29224_29292[(2)] = null);

(statearr_29224_29292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (3))){
var inst_29171 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29173__$1,inst_29171);
} else {
if((state_val_29174 === (12))){
var inst_29100 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
var statearr_29225_29293 = state_29173__$1;
(statearr_29225_29293[(2)] = inst_29100);

(statearr_29225_29293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (2))){
var state_29173__$1 = state_29173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29173__$1,(4),ch);
} else {
if((state_val_29174 === (23))){
var state_29173__$1 = state_29173;
var statearr_29226_29294 = state_29173__$1;
(statearr_29226_29294[(2)] = null);

(statearr_29226_29294[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (35))){
var inst_29155 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
var statearr_29227_29295 = state_29173__$1;
(statearr_29227_29295[(2)] = inst_29155);

(statearr_29227_29295[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (19))){
var inst_29074 = (state_29173[(7)]);
var inst_29078 = cljs.core.chunk_first.call(null,inst_29074);
var inst_29079 = cljs.core.chunk_rest.call(null,inst_29074);
var inst_29080 = cljs.core.count.call(null,inst_29078);
var inst_29054 = inst_29079;
var inst_29055 = inst_29078;
var inst_29056 = inst_29080;
var inst_29057 = (0);
var state_29173__$1 = (function (){var statearr_29228 = state_29173;
(statearr_29228[(13)] = inst_29057);

(statearr_29228[(15)] = inst_29056);

(statearr_29228[(16)] = inst_29055);

(statearr_29228[(17)] = inst_29054);

return statearr_29228;
})();
var statearr_29229_29296 = state_29173__$1;
(statearr_29229_29296[(2)] = null);

(statearr_29229_29296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (11))){
var inst_29074 = (state_29173[(7)]);
var inst_29054 = (state_29173[(17)]);
var inst_29074__$1 = cljs.core.seq.call(null,inst_29054);
var state_29173__$1 = (function (){var statearr_29230 = state_29173;
(statearr_29230[(7)] = inst_29074__$1);

return statearr_29230;
})();
if(inst_29074__$1){
var statearr_29231_29297 = state_29173__$1;
(statearr_29231_29297[(1)] = (16));

} else {
var statearr_29232_29298 = state_29173__$1;
(statearr_29232_29298[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (9))){
var inst_29102 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
var statearr_29233_29299 = state_29173__$1;
(statearr_29233_29299[(2)] = inst_29102);

(statearr_29233_29299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (5))){
var inst_29052 = cljs.core.deref.call(null,cs);
var inst_29053 = cljs.core.seq.call(null,inst_29052);
var inst_29054 = inst_29053;
var inst_29055 = null;
var inst_29056 = (0);
var inst_29057 = (0);
var state_29173__$1 = (function (){var statearr_29234 = state_29173;
(statearr_29234[(13)] = inst_29057);

(statearr_29234[(15)] = inst_29056);

(statearr_29234[(16)] = inst_29055);

(statearr_29234[(17)] = inst_29054);

return statearr_29234;
})();
var statearr_29235_29300 = state_29173__$1;
(statearr_29235_29300[(2)] = null);

(statearr_29235_29300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (14))){
var state_29173__$1 = state_29173;
var statearr_29236_29301 = state_29173__$1;
(statearr_29236_29301[(2)] = null);

(statearr_29236_29301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (45))){
var inst_29163 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
var statearr_29237_29302 = state_29173__$1;
(statearr_29237_29302[(2)] = inst_29163);

(statearr_29237_29302[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (26))){
var inst_29105 = (state_29173[(29)]);
var inst_29159 = (state_29173[(2)]);
var inst_29160 = cljs.core.seq.call(null,inst_29105);
var state_29173__$1 = (function (){var statearr_29238 = state_29173;
(statearr_29238[(31)] = inst_29159);

return statearr_29238;
})();
if(inst_29160){
var statearr_29239_29303 = state_29173__$1;
(statearr_29239_29303[(1)] = (42));

} else {
var statearr_29240_29304 = state_29173__$1;
(statearr_29240_29304[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (16))){
var inst_29074 = (state_29173[(7)]);
var inst_29076 = cljs.core.chunked_seq_QMARK_.call(null,inst_29074);
var state_29173__$1 = state_29173;
if(inst_29076){
var statearr_29241_29305 = state_29173__$1;
(statearr_29241_29305[(1)] = (19));

} else {
var statearr_29242_29306 = state_29173__$1;
(statearr_29242_29306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (38))){
var inst_29152 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
var statearr_29243_29307 = state_29173__$1;
(statearr_29243_29307[(2)] = inst_29152);

(statearr_29243_29307[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (30))){
var state_29173__$1 = state_29173;
var statearr_29244_29308 = state_29173__$1;
(statearr_29244_29308[(2)] = null);

(statearr_29244_29308[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (10))){
var inst_29057 = (state_29173[(13)]);
var inst_29055 = (state_29173[(16)]);
var inst_29063 = cljs.core._nth.call(null,inst_29055,inst_29057);
var inst_29064 = cljs.core.nth.call(null,inst_29063,(0),null);
var inst_29065 = cljs.core.nth.call(null,inst_29063,(1),null);
var state_29173__$1 = (function (){var statearr_29245 = state_29173;
(statearr_29245[(26)] = inst_29064);

return statearr_29245;
})();
if(cljs.core.truth_(inst_29065)){
var statearr_29246_29309 = state_29173__$1;
(statearr_29246_29309[(1)] = (13));

} else {
var statearr_29247_29310 = state_29173__$1;
(statearr_29247_29310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (18))){
var inst_29098 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
var statearr_29248_29311 = state_29173__$1;
(statearr_29248_29311[(2)] = inst_29098);

(statearr_29248_29311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (42))){
var state_29173__$1 = state_29173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29173__$1,(45),dchan);
} else {
if((state_val_29174 === (37))){
var inst_29141 = (state_29173[(23)]);
var inst_29045 = (state_29173[(10)]);
var inst_29132 = (state_29173[(25)]);
var inst_29141__$1 = cljs.core.first.call(null,inst_29132);
var inst_29142 = cljs.core.async.put_BANG_.call(null,inst_29141__$1,inst_29045,done);
var state_29173__$1 = (function (){var statearr_29249 = state_29173;
(statearr_29249[(23)] = inst_29141__$1);

return statearr_29249;
})();
if(cljs.core.truth_(inst_29142)){
var statearr_29250_29312 = state_29173__$1;
(statearr_29250_29312[(1)] = (39));

} else {
var statearr_29251_29313 = state_29173__$1;
(statearr_29251_29313[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (8))){
var inst_29057 = (state_29173[(13)]);
var inst_29056 = (state_29173[(15)]);
var inst_29059 = (inst_29057 < inst_29056);
var inst_29060 = inst_29059;
var state_29173__$1 = state_29173;
if(cljs.core.truth_(inst_29060)){
var statearr_29252_29314 = state_29173__$1;
(statearr_29252_29314[(1)] = (10));

} else {
var statearr_29253_29315 = state_29173__$1;
(statearr_29253_29315[(1)] = (11));

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
});})(c__20691__auto___29261,cs,m,dchan,dctr,done))
;
return ((function (switch__20626__auto__,c__20691__auto___29261,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20627__auto__ = null;
var cljs$core$async$mult_$_state_machine__20627__auto____0 = (function (){
var statearr_29257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29257[(0)] = cljs$core$async$mult_$_state_machine__20627__auto__);

(statearr_29257[(1)] = (1));

return statearr_29257;
});
var cljs$core$async$mult_$_state_machine__20627__auto____1 = (function (state_29173){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_29173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e29258){if((e29258 instanceof Object)){
var ex__20630__auto__ = e29258;
var statearr_29259_29316 = state_29173;
(statearr_29259_29316[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29317 = state_29173;
state_29173 = G__29317;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20627__auto__ = function(state_29173){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20627__auto____1.call(this,state_29173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20627__auto____0;
cljs$core$async$mult_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20627__auto____1;
return cljs$core$async$mult_$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___29261,cs,m,dchan,dctr,done))
})();
var state__20693__auto__ = (function (){var statearr_29260 = f__20692__auto__.call(null);
(statearr_29260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___29261);

return statearr_29260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___29261,cs,m,dchan,dctr,done))
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
var args29318 = [];
var len__17833__auto___29321 = arguments.length;
var i__17834__auto___29322 = (0);
while(true){
if((i__17834__auto___29322 < len__17833__auto___29321)){
args29318.push((arguments[i__17834__auto___29322]));

var G__29323 = (i__17834__auto___29322 + (1));
i__17834__auto___29322 = G__29323;
continue;
} else {
}
break;
}

var G__29320 = args29318.length;
switch (G__29320) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29318.length)].join('')));

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
var len__17833__auto___29335 = arguments.length;
var i__17834__auto___29336 = (0);
while(true){
if((i__17834__auto___29336 < len__17833__auto___29335)){
args__17840__auto__.push((arguments[i__17834__auto___29336]));

var G__29337 = (i__17834__auto___29336 + (1));
i__17834__auto___29336 = G__29337;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((3) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17841__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29329){
var map__29330 = p__29329;
var map__29330__$1 = ((((!((map__29330 == null)))?((((map__29330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29330):map__29330);
var opts = map__29330__$1;
var statearr_29332_29338 = state;
(statearr_29332_29338[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29330,map__29330__$1,opts){
return (function (val){
var statearr_29333_29339 = state;
(statearr_29333_29339[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29330,map__29330__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29334_29340 = state;
(statearr_29334_29340[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29325){
var G__29326 = cljs.core.first.call(null,seq29325);
var seq29325__$1 = cljs.core.next.call(null,seq29325);
var G__29327 = cljs.core.first.call(null,seq29325__$1);
var seq29325__$2 = cljs.core.next.call(null,seq29325__$1);
var G__29328 = cljs.core.first.call(null,seq29325__$2);
var seq29325__$3 = cljs.core.next.call(null,seq29325__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29326,G__29327,G__29328,seq29325__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29504 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29504 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29505){
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
this.meta29505 = meta29505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29506,meta29505__$1){
var self__ = this;
var _29506__$1 = this;
return (new cljs.core.async.t_cljs$core$async29504(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29505__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29506){
var self__ = this;
var _29506__$1 = this;
return self__.meta29505;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29504.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29505","meta29505",1930928215,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29504";

cljs.core.async.t_cljs$core$async29504.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async29504");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29504 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29504(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29505){
return (new cljs.core.async.t_cljs$core$async29504(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29505));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29504(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20691__auto___29667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___29667,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___29667,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29604){
var state_val_29605 = (state_29604[(1)]);
if((state_val_29605 === (7))){
var inst_29522 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
var statearr_29606_29668 = state_29604__$1;
(statearr_29606_29668[(2)] = inst_29522);

(statearr_29606_29668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (20))){
var inst_29534 = (state_29604[(7)]);
var state_29604__$1 = state_29604;
var statearr_29607_29669 = state_29604__$1;
(statearr_29607_29669[(2)] = inst_29534);

(statearr_29607_29669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (27))){
var state_29604__$1 = state_29604;
var statearr_29608_29670 = state_29604__$1;
(statearr_29608_29670[(2)] = null);

(statearr_29608_29670[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (1))){
var inst_29510 = (state_29604[(8)]);
var inst_29510__$1 = calc_state.call(null);
var inst_29512 = (inst_29510__$1 == null);
var inst_29513 = cljs.core.not.call(null,inst_29512);
var state_29604__$1 = (function (){var statearr_29609 = state_29604;
(statearr_29609[(8)] = inst_29510__$1);

return statearr_29609;
})();
if(inst_29513){
var statearr_29610_29671 = state_29604__$1;
(statearr_29610_29671[(1)] = (2));

} else {
var statearr_29611_29672 = state_29604__$1;
(statearr_29611_29672[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (24))){
var inst_29564 = (state_29604[(9)]);
var inst_29578 = (state_29604[(10)]);
var inst_29557 = (state_29604[(11)]);
var inst_29578__$1 = inst_29557.call(null,inst_29564);
var state_29604__$1 = (function (){var statearr_29612 = state_29604;
(statearr_29612[(10)] = inst_29578__$1);

return statearr_29612;
})();
if(cljs.core.truth_(inst_29578__$1)){
var statearr_29613_29673 = state_29604__$1;
(statearr_29613_29673[(1)] = (29));

} else {
var statearr_29614_29674 = state_29604__$1;
(statearr_29614_29674[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (4))){
var inst_29525 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
if(cljs.core.truth_(inst_29525)){
var statearr_29615_29675 = state_29604__$1;
(statearr_29615_29675[(1)] = (8));

} else {
var statearr_29616_29676 = state_29604__$1;
(statearr_29616_29676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (15))){
var inst_29551 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
if(cljs.core.truth_(inst_29551)){
var statearr_29617_29677 = state_29604__$1;
(statearr_29617_29677[(1)] = (19));

} else {
var statearr_29618_29678 = state_29604__$1;
(statearr_29618_29678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (21))){
var inst_29556 = (state_29604[(12)]);
var inst_29556__$1 = (state_29604[(2)]);
var inst_29557 = cljs.core.get.call(null,inst_29556__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29558 = cljs.core.get.call(null,inst_29556__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29559 = cljs.core.get.call(null,inst_29556__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29604__$1 = (function (){var statearr_29619 = state_29604;
(statearr_29619[(13)] = inst_29558);

(statearr_29619[(11)] = inst_29557);

(statearr_29619[(12)] = inst_29556__$1);

return statearr_29619;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29604__$1,(22),inst_29559);
} else {
if((state_val_29605 === (31))){
var inst_29586 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
if(cljs.core.truth_(inst_29586)){
var statearr_29620_29679 = state_29604__$1;
(statearr_29620_29679[(1)] = (32));

} else {
var statearr_29621_29680 = state_29604__$1;
(statearr_29621_29680[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (32))){
var inst_29563 = (state_29604[(14)]);
var state_29604__$1 = state_29604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29604__$1,(35),out,inst_29563);
} else {
if((state_val_29605 === (33))){
var inst_29556 = (state_29604[(12)]);
var inst_29534 = inst_29556;
var state_29604__$1 = (function (){var statearr_29622 = state_29604;
(statearr_29622[(7)] = inst_29534);

return statearr_29622;
})();
var statearr_29623_29681 = state_29604__$1;
(statearr_29623_29681[(2)] = null);

(statearr_29623_29681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (13))){
var inst_29534 = (state_29604[(7)]);
var inst_29541 = inst_29534.cljs$lang$protocol_mask$partition0$;
var inst_29542 = (inst_29541 & (64));
var inst_29543 = inst_29534.cljs$core$ISeq$;
var inst_29544 = (inst_29542) || (inst_29543);
var state_29604__$1 = state_29604;
if(cljs.core.truth_(inst_29544)){
var statearr_29624_29682 = state_29604__$1;
(statearr_29624_29682[(1)] = (16));

} else {
var statearr_29625_29683 = state_29604__$1;
(statearr_29625_29683[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (22))){
var inst_29564 = (state_29604[(9)]);
var inst_29563 = (state_29604[(14)]);
var inst_29562 = (state_29604[(2)]);
var inst_29563__$1 = cljs.core.nth.call(null,inst_29562,(0),null);
var inst_29564__$1 = cljs.core.nth.call(null,inst_29562,(1),null);
var inst_29565 = (inst_29563__$1 == null);
var inst_29566 = cljs.core._EQ_.call(null,inst_29564__$1,change);
var inst_29567 = (inst_29565) || (inst_29566);
var state_29604__$1 = (function (){var statearr_29626 = state_29604;
(statearr_29626[(9)] = inst_29564__$1);

(statearr_29626[(14)] = inst_29563__$1);

return statearr_29626;
})();
if(cljs.core.truth_(inst_29567)){
var statearr_29627_29684 = state_29604__$1;
(statearr_29627_29684[(1)] = (23));

} else {
var statearr_29628_29685 = state_29604__$1;
(statearr_29628_29685[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (36))){
var inst_29556 = (state_29604[(12)]);
var inst_29534 = inst_29556;
var state_29604__$1 = (function (){var statearr_29629 = state_29604;
(statearr_29629[(7)] = inst_29534);

return statearr_29629;
})();
var statearr_29630_29686 = state_29604__$1;
(statearr_29630_29686[(2)] = null);

(statearr_29630_29686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (29))){
var inst_29578 = (state_29604[(10)]);
var state_29604__$1 = state_29604;
var statearr_29631_29687 = state_29604__$1;
(statearr_29631_29687[(2)] = inst_29578);

(statearr_29631_29687[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (6))){
var state_29604__$1 = state_29604;
var statearr_29632_29688 = state_29604__$1;
(statearr_29632_29688[(2)] = false);

(statearr_29632_29688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (28))){
var inst_29574 = (state_29604[(2)]);
var inst_29575 = calc_state.call(null);
var inst_29534 = inst_29575;
var state_29604__$1 = (function (){var statearr_29633 = state_29604;
(statearr_29633[(7)] = inst_29534);

(statearr_29633[(15)] = inst_29574);

return statearr_29633;
})();
var statearr_29634_29689 = state_29604__$1;
(statearr_29634_29689[(2)] = null);

(statearr_29634_29689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (25))){
var inst_29600 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
var statearr_29635_29690 = state_29604__$1;
(statearr_29635_29690[(2)] = inst_29600);

(statearr_29635_29690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (34))){
var inst_29598 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
var statearr_29636_29691 = state_29604__$1;
(statearr_29636_29691[(2)] = inst_29598);

(statearr_29636_29691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (17))){
var state_29604__$1 = state_29604;
var statearr_29637_29692 = state_29604__$1;
(statearr_29637_29692[(2)] = false);

(statearr_29637_29692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (3))){
var state_29604__$1 = state_29604;
var statearr_29638_29693 = state_29604__$1;
(statearr_29638_29693[(2)] = false);

(statearr_29638_29693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (12))){
var inst_29602 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29604__$1,inst_29602);
} else {
if((state_val_29605 === (2))){
var inst_29510 = (state_29604[(8)]);
var inst_29515 = inst_29510.cljs$lang$protocol_mask$partition0$;
var inst_29516 = (inst_29515 & (64));
var inst_29517 = inst_29510.cljs$core$ISeq$;
var inst_29518 = (inst_29516) || (inst_29517);
var state_29604__$1 = state_29604;
if(cljs.core.truth_(inst_29518)){
var statearr_29639_29694 = state_29604__$1;
(statearr_29639_29694[(1)] = (5));

} else {
var statearr_29640_29695 = state_29604__$1;
(statearr_29640_29695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (23))){
var inst_29563 = (state_29604[(14)]);
var inst_29569 = (inst_29563 == null);
var state_29604__$1 = state_29604;
if(cljs.core.truth_(inst_29569)){
var statearr_29641_29696 = state_29604__$1;
(statearr_29641_29696[(1)] = (26));

} else {
var statearr_29642_29697 = state_29604__$1;
(statearr_29642_29697[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (35))){
var inst_29589 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
if(cljs.core.truth_(inst_29589)){
var statearr_29643_29698 = state_29604__$1;
(statearr_29643_29698[(1)] = (36));

} else {
var statearr_29644_29699 = state_29604__$1;
(statearr_29644_29699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (19))){
var inst_29534 = (state_29604[(7)]);
var inst_29553 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29534);
var state_29604__$1 = state_29604;
var statearr_29645_29700 = state_29604__$1;
(statearr_29645_29700[(2)] = inst_29553);

(statearr_29645_29700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (11))){
var inst_29534 = (state_29604[(7)]);
var inst_29538 = (inst_29534 == null);
var inst_29539 = cljs.core.not.call(null,inst_29538);
var state_29604__$1 = state_29604;
if(inst_29539){
var statearr_29646_29701 = state_29604__$1;
(statearr_29646_29701[(1)] = (13));

} else {
var statearr_29647_29702 = state_29604__$1;
(statearr_29647_29702[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (9))){
var inst_29510 = (state_29604[(8)]);
var state_29604__$1 = state_29604;
var statearr_29648_29703 = state_29604__$1;
(statearr_29648_29703[(2)] = inst_29510);

(statearr_29648_29703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (5))){
var state_29604__$1 = state_29604;
var statearr_29649_29704 = state_29604__$1;
(statearr_29649_29704[(2)] = true);

(statearr_29649_29704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (14))){
var state_29604__$1 = state_29604;
var statearr_29650_29705 = state_29604__$1;
(statearr_29650_29705[(2)] = false);

(statearr_29650_29705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (26))){
var inst_29564 = (state_29604[(9)]);
var inst_29571 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29564);
var state_29604__$1 = state_29604;
var statearr_29651_29706 = state_29604__$1;
(statearr_29651_29706[(2)] = inst_29571);

(statearr_29651_29706[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (16))){
var state_29604__$1 = state_29604;
var statearr_29652_29707 = state_29604__$1;
(statearr_29652_29707[(2)] = true);

(statearr_29652_29707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (38))){
var inst_29594 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
var statearr_29653_29708 = state_29604__$1;
(statearr_29653_29708[(2)] = inst_29594);

(statearr_29653_29708[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (30))){
var inst_29564 = (state_29604[(9)]);
var inst_29558 = (state_29604[(13)]);
var inst_29557 = (state_29604[(11)]);
var inst_29581 = cljs.core.empty_QMARK_.call(null,inst_29557);
var inst_29582 = inst_29558.call(null,inst_29564);
var inst_29583 = cljs.core.not.call(null,inst_29582);
var inst_29584 = (inst_29581) && (inst_29583);
var state_29604__$1 = state_29604;
var statearr_29654_29709 = state_29604__$1;
(statearr_29654_29709[(2)] = inst_29584);

(statearr_29654_29709[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (10))){
var inst_29510 = (state_29604[(8)]);
var inst_29530 = (state_29604[(2)]);
var inst_29531 = cljs.core.get.call(null,inst_29530,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29532 = cljs.core.get.call(null,inst_29530,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29533 = cljs.core.get.call(null,inst_29530,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29534 = inst_29510;
var state_29604__$1 = (function (){var statearr_29655 = state_29604;
(statearr_29655[(16)] = inst_29532);

(statearr_29655[(17)] = inst_29533);

(statearr_29655[(7)] = inst_29534);

(statearr_29655[(18)] = inst_29531);

return statearr_29655;
})();
var statearr_29656_29710 = state_29604__$1;
(statearr_29656_29710[(2)] = null);

(statearr_29656_29710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (18))){
var inst_29548 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
var statearr_29657_29711 = state_29604__$1;
(statearr_29657_29711[(2)] = inst_29548);

(statearr_29657_29711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (37))){
var state_29604__$1 = state_29604;
var statearr_29658_29712 = state_29604__$1;
(statearr_29658_29712[(2)] = null);

(statearr_29658_29712[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (8))){
var inst_29510 = (state_29604[(8)]);
var inst_29527 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29510);
var state_29604__$1 = state_29604;
var statearr_29659_29713 = state_29604__$1;
(statearr_29659_29713[(2)] = inst_29527);

(statearr_29659_29713[(1)] = (10));


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
});})(c__20691__auto___29667,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20626__auto__,c__20691__auto___29667,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20627__auto__ = null;
var cljs$core$async$mix_$_state_machine__20627__auto____0 = (function (){
var statearr_29663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29663[(0)] = cljs$core$async$mix_$_state_machine__20627__auto__);

(statearr_29663[(1)] = (1));

return statearr_29663;
});
var cljs$core$async$mix_$_state_machine__20627__auto____1 = (function (state_29604){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_29604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e29664){if((e29664 instanceof Object)){
var ex__20630__auto__ = e29664;
var statearr_29665_29714 = state_29604;
(statearr_29665_29714[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29715 = state_29604;
state_29604 = G__29715;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20627__auto__ = function(state_29604){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20627__auto____1.call(this,state_29604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20627__auto____0;
cljs$core$async$mix_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20627__auto____1;
return cljs$core$async$mix_$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___29667,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20693__auto__ = (function (){var statearr_29666 = f__20692__auto__.call(null);
(statearr_29666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___29667);

return statearr_29666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___29667,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args29716 = [];
var len__17833__auto___29719 = arguments.length;
var i__17834__auto___29720 = (0);
while(true){
if((i__17834__auto___29720 < len__17833__auto___29719)){
args29716.push((arguments[i__17834__auto___29720]));

var G__29721 = (i__17834__auto___29720 + (1));
i__17834__auto___29720 = G__29721;
continue;
} else {
}
break;
}

var G__29718 = args29716.length;
switch (G__29718) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29716.length)].join('')));

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
var args29724 = [];
var len__17833__auto___29849 = arguments.length;
var i__17834__auto___29850 = (0);
while(true){
if((i__17834__auto___29850 < len__17833__auto___29849)){
args29724.push((arguments[i__17834__auto___29850]));

var G__29851 = (i__17834__auto___29850 + (1));
i__17834__auto___29850 = G__29851;
continue;
} else {
}
break;
}

var G__29726 = args29724.length;
switch (G__29726) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29724.length)].join('')));

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
return (function (p1__29723_SHARP_){
if(cljs.core.truth_(p1__29723_SHARP_.call(null,topic))){
return p1__29723_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29723_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16775__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29727 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29728){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29728 = meta29728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29729,meta29728__$1){
var self__ = this;
var _29729__$1 = this;
return (new cljs.core.async.t_cljs$core$async29727(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29728__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29729){
var self__ = this;
var _29729__$1 = this;
return self__.meta29728;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29727.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29727.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29727.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29727.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29727.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29727.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29727.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29727.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29728","meta29728",-2076867072,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29727";

cljs.core.async.t_cljs$core$async29727.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async29727");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29727 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29727(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29728){
return (new cljs.core.async.t_cljs$core$async29727(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29728));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29727(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20691__auto___29853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___29853,mults,ensure_mult,p){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___29853,mults,ensure_mult,p){
return (function (state_29801){
var state_val_29802 = (state_29801[(1)]);
if((state_val_29802 === (7))){
var inst_29797 = (state_29801[(2)]);
var state_29801__$1 = state_29801;
var statearr_29803_29854 = state_29801__$1;
(statearr_29803_29854[(2)] = inst_29797);

(statearr_29803_29854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (20))){
var state_29801__$1 = state_29801;
var statearr_29804_29855 = state_29801__$1;
(statearr_29804_29855[(2)] = null);

(statearr_29804_29855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (1))){
var state_29801__$1 = state_29801;
var statearr_29805_29856 = state_29801__$1;
(statearr_29805_29856[(2)] = null);

(statearr_29805_29856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (24))){
var inst_29780 = (state_29801[(7)]);
var inst_29789 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29780);
var state_29801__$1 = state_29801;
var statearr_29806_29857 = state_29801__$1;
(statearr_29806_29857[(2)] = inst_29789);

(statearr_29806_29857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (4))){
var inst_29732 = (state_29801[(8)]);
var inst_29732__$1 = (state_29801[(2)]);
var inst_29733 = (inst_29732__$1 == null);
var state_29801__$1 = (function (){var statearr_29807 = state_29801;
(statearr_29807[(8)] = inst_29732__$1);

return statearr_29807;
})();
if(cljs.core.truth_(inst_29733)){
var statearr_29808_29858 = state_29801__$1;
(statearr_29808_29858[(1)] = (5));

} else {
var statearr_29809_29859 = state_29801__$1;
(statearr_29809_29859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (15))){
var inst_29774 = (state_29801[(2)]);
var state_29801__$1 = state_29801;
var statearr_29810_29860 = state_29801__$1;
(statearr_29810_29860[(2)] = inst_29774);

(statearr_29810_29860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (21))){
var inst_29794 = (state_29801[(2)]);
var state_29801__$1 = (function (){var statearr_29811 = state_29801;
(statearr_29811[(9)] = inst_29794);

return statearr_29811;
})();
var statearr_29812_29861 = state_29801__$1;
(statearr_29812_29861[(2)] = null);

(statearr_29812_29861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (13))){
var inst_29756 = (state_29801[(10)]);
var inst_29758 = cljs.core.chunked_seq_QMARK_.call(null,inst_29756);
var state_29801__$1 = state_29801;
if(inst_29758){
var statearr_29813_29862 = state_29801__$1;
(statearr_29813_29862[(1)] = (16));

} else {
var statearr_29814_29863 = state_29801__$1;
(statearr_29814_29863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (22))){
var inst_29786 = (state_29801[(2)]);
var state_29801__$1 = state_29801;
if(cljs.core.truth_(inst_29786)){
var statearr_29815_29864 = state_29801__$1;
(statearr_29815_29864[(1)] = (23));

} else {
var statearr_29816_29865 = state_29801__$1;
(statearr_29816_29865[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (6))){
var inst_29782 = (state_29801[(11)]);
var inst_29780 = (state_29801[(7)]);
var inst_29732 = (state_29801[(8)]);
var inst_29780__$1 = topic_fn.call(null,inst_29732);
var inst_29781 = cljs.core.deref.call(null,mults);
var inst_29782__$1 = cljs.core.get.call(null,inst_29781,inst_29780__$1);
var state_29801__$1 = (function (){var statearr_29817 = state_29801;
(statearr_29817[(11)] = inst_29782__$1);

(statearr_29817[(7)] = inst_29780__$1);

return statearr_29817;
})();
if(cljs.core.truth_(inst_29782__$1)){
var statearr_29818_29866 = state_29801__$1;
(statearr_29818_29866[(1)] = (19));

} else {
var statearr_29819_29867 = state_29801__$1;
(statearr_29819_29867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (25))){
var inst_29791 = (state_29801[(2)]);
var state_29801__$1 = state_29801;
var statearr_29820_29868 = state_29801__$1;
(statearr_29820_29868[(2)] = inst_29791);

(statearr_29820_29868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (17))){
var inst_29756 = (state_29801[(10)]);
var inst_29765 = cljs.core.first.call(null,inst_29756);
var inst_29766 = cljs.core.async.muxch_STAR_.call(null,inst_29765);
var inst_29767 = cljs.core.async.close_BANG_.call(null,inst_29766);
var inst_29768 = cljs.core.next.call(null,inst_29756);
var inst_29742 = inst_29768;
var inst_29743 = null;
var inst_29744 = (0);
var inst_29745 = (0);
var state_29801__$1 = (function (){var statearr_29821 = state_29801;
(statearr_29821[(12)] = inst_29767);

(statearr_29821[(13)] = inst_29744);

(statearr_29821[(14)] = inst_29743);

(statearr_29821[(15)] = inst_29742);

(statearr_29821[(16)] = inst_29745);

return statearr_29821;
})();
var statearr_29822_29869 = state_29801__$1;
(statearr_29822_29869[(2)] = null);

(statearr_29822_29869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (3))){
var inst_29799 = (state_29801[(2)]);
var state_29801__$1 = state_29801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29801__$1,inst_29799);
} else {
if((state_val_29802 === (12))){
var inst_29776 = (state_29801[(2)]);
var state_29801__$1 = state_29801;
var statearr_29823_29870 = state_29801__$1;
(statearr_29823_29870[(2)] = inst_29776);

(statearr_29823_29870[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (2))){
var state_29801__$1 = state_29801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29801__$1,(4),ch);
} else {
if((state_val_29802 === (23))){
var state_29801__$1 = state_29801;
var statearr_29824_29871 = state_29801__$1;
(statearr_29824_29871[(2)] = null);

(statearr_29824_29871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (19))){
var inst_29782 = (state_29801[(11)]);
var inst_29732 = (state_29801[(8)]);
var inst_29784 = cljs.core.async.muxch_STAR_.call(null,inst_29782);
var state_29801__$1 = state_29801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29801__$1,(22),inst_29784,inst_29732);
} else {
if((state_val_29802 === (11))){
var inst_29742 = (state_29801[(15)]);
var inst_29756 = (state_29801[(10)]);
var inst_29756__$1 = cljs.core.seq.call(null,inst_29742);
var state_29801__$1 = (function (){var statearr_29825 = state_29801;
(statearr_29825[(10)] = inst_29756__$1);

return statearr_29825;
})();
if(inst_29756__$1){
var statearr_29826_29872 = state_29801__$1;
(statearr_29826_29872[(1)] = (13));

} else {
var statearr_29827_29873 = state_29801__$1;
(statearr_29827_29873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (9))){
var inst_29778 = (state_29801[(2)]);
var state_29801__$1 = state_29801;
var statearr_29828_29874 = state_29801__$1;
(statearr_29828_29874[(2)] = inst_29778);

(statearr_29828_29874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (5))){
var inst_29739 = cljs.core.deref.call(null,mults);
var inst_29740 = cljs.core.vals.call(null,inst_29739);
var inst_29741 = cljs.core.seq.call(null,inst_29740);
var inst_29742 = inst_29741;
var inst_29743 = null;
var inst_29744 = (0);
var inst_29745 = (0);
var state_29801__$1 = (function (){var statearr_29829 = state_29801;
(statearr_29829[(13)] = inst_29744);

(statearr_29829[(14)] = inst_29743);

(statearr_29829[(15)] = inst_29742);

(statearr_29829[(16)] = inst_29745);

return statearr_29829;
})();
var statearr_29830_29875 = state_29801__$1;
(statearr_29830_29875[(2)] = null);

(statearr_29830_29875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (14))){
var state_29801__$1 = state_29801;
var statearr_29834_29876 = state_29801__$1;
(statearr_29834_29876[(2)] = null);

(statearr_29834_29876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (16))){
var inst_29756 = (state_29801[(10)]);
var inst_29760 = cljs.core.chunk_first.call(null,inst_29756);
var inst_29761 = cljs.core.chunk_rest.call(null,inst_29756);
var inst_29762 = cljs.core.count.call(null,inst_29760);
var inst_29742 = inst_29761;
var inst_29743 = inst_29760;
var inst_29744 = inst_29762;
var inst_29745 = (0);
var state_29801__$1 = (function (){var statearr_29835 = state_29801;
(statearr_29835[(13)] = inst_29744);

(statearr_29835[(14)] = inst_29743);

(statearr_29835[(15)] = inst_29742);

(statearr_29835[(16)] = inst_29745);

return statearr_29835;
})();
var statearr_29836_29877 = state_29801__$1;
(statearr_29836_29877[(2)] = null);

(statearr_29836_29877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (10))){
var inst_29744 = (state_29801[(13)]);
var inst_29743 = (state_29801[(14)]);
var inst_29742 = (state_29801[(15)]);
var inst_29745 = (state_29801[(16)]);
var inst_29750 = cljs.core._nth.call(null,inst_29743,inst_29745);
var inst_29751 = cljs.core.async.muxch_STAR_.call(null,inst_29750);
var inst_29752 = cljs.core.async.close_BANG_.call(null,inst_29751);
var inst_29753 = (inst_29745 + (1));
var tmp29831 = inst_29744;
var tmp29832 = inst_29743;
var tmp29833 = inst_29742;
var inst_29742__$1 = tmp29833;
var inst_29743__$1 = tmp29832;
var inst_29744__$1 = tmp29831;
var inst_29745__$1 = inst_29753;
var state_29801__$1 = (function (){var statearr_29837 = state_29801;
(statearr_29837[(17)] = inst_29752);

(statearr_29837[(13)] = inst_29744__$1);

(statearr_29837[(14)] = inst_29743__$1);

(statearr_29837[(15)] = inst_29742__$1);

(statearr_29837[(16)] = inst_29745__$1);

return statearr_29837;
})();
var statearr_29838_29878 = state_29801__$1;
(statearr_29838_29878[(2)] = null);

(statearr_29838_29878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (18))){
var inst_29771 = (state_29801[(2)]);
var state_29801__$1 = state_29801;
var statearr_29839_29879 = state_29801__$1;
(statearr_29839_29879[(2)] = inst_29771);

(statearr_29839_29879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (8))){
var inst_29744 = (state_29801[(13)]);
var inst_29745 = (state_29801[(16)]);
var inst_29747 = (inst_29745 < inst_29744);
var inst_29748 = inst_29747;
var state_29801__$1 = state_29801;
if(cljs.core.truth_(inst_29748)){
var statearr_29840_29880 = state_29801__$1;
(statearr_29840_29880[(1)] = (10));

} else {
var statearr_29841_29881 = state_29801__$1;
(statearr_29841_29881[(1)] = (11));

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
});})(c__20691__auto___29853,mults,ensure_mult,p))
;
return ((function (switch__20626__auto__,c__20691__auto___29853,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_29845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29845[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_29845[(1)] = (1));

return statearr_29845;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_29801){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_29801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e29846){if((e29846 instanceof Object)){
var ex__20630__auto__ = e29846;
var statearr_29847_29882 = state_29801;
(statearr_29847_29882[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29883 = state_29801;
state_29801 = G__29883;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_29801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_29801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___29853,mults,ensure_mult,p))
})();
var state__20693__auto__ = (function (){var statearr_29848 = f__20692__auto__.call(null);
(statearr_29848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___29853);

return statearr_29848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___29853,mults,ensure_mult,p))
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
var args29884 = [];
var len__17833__auto___29887 = arguments.length;
var i__17834__auto___29888 = (0);
while(true){
if((i__17834__auto___29888 < len__17833__auto___29887)){
args29884.push((arguments[i__17834__auto___29888]));

var G__29889 = (i__17834__auto___29888 + (1));
i__17834__auto___29888 = G__29889;
continue;
} else {
}
break;
}

var G__29886 = args29884.length;
switch (G__29886) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29884.length)].join('')));

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
var args29891 = [];
var len__17833__auto___29894 = arguments.length;
var i__17834__auto___29895 = (0);
while(true){
if((i__17834__auto___29895 < len__17833__auto___29894)){
args29891.push((arguments[i__17834__auto___29895]));

var G__29896 = (i__17834__auto___29895 + (1));
i__17834__auto___29895 = G__29896;
continue;
} else {
}
break;
}

var G__29893 = args29891.length;
switch (G__29893) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29891.length)].join('')));

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
var args29898 = [];
var len__17833__auto___29969 = arguments.length;
var i__17834__auto___29970 = (0);
while(true){
if((i__17834__auto___29970 < len__17833__auto___29969)){
args29898.push((arguments[i__17834__auto___29970]));

var G__29971 = (i__17834__auto___29970 + (1));
i__17834__auto___29970 = G__29971;
continue;
} else {
}
break;
}

var G__29900 = args29898.length;
switch (G__29900) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29898.length)].join('')));

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
var c__20691__auto___29973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___29973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___29973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29939){
var state_val_29940 = (state_29939[(1)]);
if((state_val_29940 === (7))){
var state_29939__$1 = state_29939;
var statearr_29941_29974 = state_29939__$1;
(statearr_29941_29974[(2)] = null);

(statearr_29941_29974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (1))){
var state_29939__$1 = state_29939;
var statearr_29942_29975 = state_29939__$1;
(statearr_29942_29975[(2)] = null);

(statearr_29942_29975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (4))){
var inst_29903 = (state_29939[(7)]);
var inst_29905 = (inst_29903 < cnt);
var state_29939__$1 = state_29939;
if(cljs.core.truth_(inst_29905)){
var statearr_29943_29976 = state_29939__$1;
(statearr_29943_29976[(1)] = (6));

} else {
var statearr_29944_29977 = state_29939__$1;
(statearr_29944_29977[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (15))){
var inst_29935 = (state_29939[(2)]);
var state_29939__$1 = state_29939;
var statearr_29945_29978 = state_29939__$1;
(statearr_29945_29978[(2)] = inst_29935);

(statearr_29945_29978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (13))){
var inst_29928 = cljs.core.async.close_BANG_.call(null,out);
var state_29939__$1 = state_29939;
var statearr_29946_29979 = state_29939__$1;
(statearr_29946_29979[(2)] = inst_29928);

(statearr_29946_29979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (6))){
var state_29939__$1 = state_29939;
var statearr_29947_29980 = state_29939__$1;
(statearr_29947_29980[(2)] = null);

(statearr_29947_29980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (3))){
var inst_29937 = (state_29939[(2)]);
var state_29939__$1 = state_29939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29939__$1,inst_29937);
} else {
if((state_val_29940 === (12))){
var inst_29925 = (state_29939[(8)]);
var inst_29925__$1 = (state_29939[(2)]);
var inst_29926 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29925__$1);
var state_29939__$1 = (function (){var statearr_29948 = state_29939;
(statearr_29948[(8)] = inst_29925__$1);

return statearr_29948;
})();
if(cljs.core.truth_(inst_29926)){
var statearr_29949_29981 = state_29939__$1;
(statearr_29949_29981[(1)] = (13));

} else {
var statearr_29950_29982 = state_29939__$1;
(statearr_29950_29982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (2))){
var inst_29902 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29903 = (0);
var state_29939__$1 = (function (){var statearr_29951 = state_29939;
(statearr_29951[(7)] = inst_29903);

(statearr_29951[(9)] = inst_29902);

return statearr_29951;
})();
var statearr_29952_29983 = state_29939__$1;
(statearr_29952_29983[(2)] = null);

(statearr_29952_29983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (11))){
var inst_29903 = (state_29939[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29939,(10),Object,null,(9));
var inst_29912 = chs__$1.call(null,inst_29903);
var inst_29913 = done.call(null,inst_29903);
var inst_29914 = cljs.core.async.take_BANG_.call(null,inst_29912,inst_29913);
var state_29939__$1 = state_29939;
var statearr_29953_29984 = state_29939__$1;
(statearr_29953_29984[(2)] = inst_29914);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29939__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (9))){
var inst_29903 = (state_29939[(7)]);
var inst_29916 = (state_29939[(2)]);
var inst_29917 = (inst_29903 + (1));
var inst_29903__$1 = inst_29917;
var state_29939__$1 = (function (){var statearr_29954 = state_29939;
(statearr_29954[(7)] = inst_29903__$1);

(statearr_29954[(10)] = inst_29916);

return statearr_29954;
})();
var statearr_29955_29985 = state_29939__$1;
(statearr_29955_29985[(2)] = null);

(statearr_29955_29985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (5))){
var inst_29923 = (state_29939[(2)]);
var state_29939__$1 = (function (){var statearr_29956 = state_29939;
(statearr_29956[(11)] = inst_29923);

return statearr_29956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29939__$1,(12),dchan);
} else {
if((state_val_29940 === (14))){
var inst_29925 = (state_29939[(8)]);
var inst_29930 = cljs.core.apply.call(null,f,inst_29925);
var state_29939__$1 = state_29939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29939__$1,(16),out,inst_29930);
} else {
if((state_val_29940 === (16))){
var inst_29932 = (state_29939[(2)]);
var state_29939__$1 = (function (){var statearr_29957 = state_29939;
(statearr_29957[(12)] = inst_29932);

return statearr_29957;
})();
var statearr_29958_29986 = state_29939__$1;
(statearr_29958_29986[(2)] = null);

(statearr_29958_29986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (10))){
var inst_29907 = (state_29939[(2)]);
var inst_29908 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29939__$1 = (function (){var statearr_29959 = state_29939;
(statearr_29959[(13)] = inst_29907);

return statearr_29959;
})();
var statearr_29960_29987 = state_29939__$1;
(statearr_29960_29987[(2)] = inst_29908);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29939__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (8))){
var inst_29921 = (state_29939[(2)]);
var state_29939__$1 = state_29939;
var statearr_29961_29988 = state_29939__$1;
(statearr_29961_29988[(2)] = inst_29921);

(statearr_29961_29988[(1)] = (5));


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
});})(c__20691__auto___29973,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20626__auto__,c__20691__auto___29973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_29965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29965[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_29965[(1)] = (1));

return statearr_29965;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_29939){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_29939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e29966){if((e29966 instanceof Object)){
var ex__20630__auto__ = e29966;
var statearr_29967_29989 = state_29939;
(statearr_29967_29989[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29990 = state_29939;
state_29939 = G__29990;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_29939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_29939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___29973,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20693__auto__ = (function (){var statearr_29968 = f__20692__auto__.call(null);
(statearr_29968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___29973);

return statearr_29968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___29973,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29992 = [];
var len__17833__auto___30048 = arguments.length;
var i__17834__auto___30049 = (0);
while(true){
if((i__17834__auto___30049 < len__17833__auto___30048)){
args29992.push((arguments[i__17834__auto___30049]));

var G__30050 = (i__17834__auto___30049 + (1));
i__17834__auto___30049 = G__30050;
continue;
} else {
}
break;
}

var G__29994 = args29992.length;
switch (G__29994) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29992.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20691__auto___30052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___30052,out){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___30052,out){
return (function (state_30024){
var state_val_30025 = (state_30024[(1)]);
if((state_val_30025 === (7))){
var inst_30004 = (state_30024[(7)]);
var inst_30003 = (state_30024[(8)]);
var inst_30003__$1 = (state_30024[(2)]);
var inst_30004__$1 = cljs.core.nth.call(null,inst_30003__$1,(0),null);
var inst_30005 = cljs.core.nth.call(null,inst_30003__$1,(1),null);
var inst_30006 = (inst_30004__$1 == null);
var state_30024__$1 = (function (){var statearr_30026 = state_30024;
(statearr_30026[(7)] = inst_30004__$1);

(statearr_30026[(9)] = inst_30005);

(statearr_30026[(8)] = inst_30003__$1);

return statearr_30026;
})();
if(cljs.core.truth_(inst_30006)){
var statearr_30027_30053 = state_30024__$1;
(statearr_30027_30053[(1)] = (8));

} else {
var statearr_30028_30054 = state_30024__$1;
(statearr_30028_30054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (1))){
var inst_29995 = cljs.core.vec.call(null,chs);
var inst_29996 = inst_29995;
var state_30024__$1 = (function (){var statearr_30029 = state_30024;
(statearr_30029[(10)] = inst_29996);

return statearr_30029;
})();
var statearr_30030_30055 = state_30024__$1;
(statearr_30030_30055[(2)] = null);

(statearr_30030_30055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (4))){
var inst_29996 = (state_30024[(10)]);
var state_30024__$1 = state_30024;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30024__$1,(7),inst_29996);
} else {
if((state_val_30025 === (6))){
var inst_30020 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30031_30056 = state_30024__$1;
(statearr_30031_30056[(2)] = inst_30020);

(statearr_30031_30056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (3))){
var inst_30022 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30024__$1,inst_30022);
} else {
if((state_val_30025 === (2))){
var inst_29996 = (state_30024[(10)]);
var inst_29998 = cljs.core.count.call(null,inst_29996);
var inst_29999 = (inst_29998 > (0));
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_29999)){
var statearr_30033_30057 = state_30024__$1;
(statearr_30033_30057[(1)] = (4));

} else {
var statearr_30034_30058 = state_30024__$1;
(statearr_30034_30058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (11))){
var inst_29996 = (state_30024[(10)]);
var inst_30013 = (state_30024[(2)]);
var tmp30032 = inst_29996;
var inst_29996__$1 = tmp30032;
var state_30024__$1 = (function (){var statearr_30035 = state_30024;
(statearr_30035[(10)] = inst_29996__$1);

(statearr_30035[(11)] = inst_30013);

return statearr_30035;
})();
var statearr_30036_30059 = state_30024__$1;
(statearr_30036_30059[(2)] = null);

(statearr_30036_30059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (9))){
var inst_30004 = (state_30024[(7)]);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30024__$1,(11),out,inst_30004);
} else {
if((state_val_30025 === (5))){
var inst_30018 = cljs.core.async.close_BANG_.call(null,out);
var state_30024__$1 = state_30024;
var statearr_30037_30060 = state_30024__$1;
(statearr_30037_30060[(2)] = inst_30018);

(statearr_30037_30060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (10))){
var inst_30016 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30038_30061 = state_30024__$1;
(statearr_30038_30061[(2)] = inst_30016);

(statearr_30038_30061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (8))){
var inst_30004 = (state_30024[(7)]);
var inst_29996 = (state_30024[(10)]);
var inst_30005 = (state_30024[(9)]);
var inst_30003 = (state_30024[(8)]);
var inst_30008 = (function (){var cs = inst_29996;
var vec__30001 = inst_30003;
var v = inst_30004;
var c = inst_30005;
return ((function (cs,vec__30001,v,c,inst_30004,inst_29996,inst_30005,inst_30003,state_val_30025,c__20691__auto___30052,out){
return (function (p1__29991_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29991_SHARP_);
});
;})(cs,vec__30001,v,c,inst_30004,inst_29996,inst_30005,inst_30003,state_val_30025,c__20691__auto___30052,out))
})();
var inst_30009 = cljs.core.filterv.call(null,inst_30008,inst_29996);
var inst_29996__$1 = inst_30009;
var state_30024__$1 = (function (){var statearr_30039 = state_30024;
(statearr_30039[(10)] = inst_29996__$1);

return statearr_30039;
})();
var statearr_30040_30062 = state_30024__$1;
(statearr_30040_30062[(2)] = null);

(statearr_30040_30062[(1)] = (2));


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
});})(c__20691__auto___30052,out))
;
return ((function (switch__20626__auto__,c__20691__auto___30052,out){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_30044 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30044[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_30044[(1)] = (1));

return statearr_30044;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_30024){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_30024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e30045){if((e30045 instanceof Object)){
var ex__20630__auto__ = e30045;
var statearr_30046_30063 = state_30024;
(statearr_30046_30063[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30064 = state_30024;
state_30024 = G__30064;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_30024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_30024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___30052,out))
})();
var state__20693__auto__ = (function (){var statearr_30047 = f__20692__auto__.call(null);
(statearr_30047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___30052);

return statearr_30047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___30052,out))
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
var args30065 = [];
var len__17833__auto___30114 = arguments.length;
var i__17834__auto___30115 = (0);
while(true){
if((i__17834__auto___30115 < len__17833__auto___30114)){
args30065.push((arguments[i__17834__auto___30115]));

var G__30116 = (i__17834__auto___30115 + (1));
i__17834__auto___30115 = G__30116;
continue;
} else {
}
break;
}

var G__30067 = args30065.length;
switch (G__30067) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30065.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20691__auto___30118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___30118,out){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___30118,out){
return (function (state_30091){
var state_val_30092 = (state_30091[(1)]);
if((state_val_30092 === (7))){
var inst_30073 = (state_30091[(7)]);
var inst_30073__$1 = (state_30091[(2)]);
var inst_30074 = (inst_30073__$1 == null);
var inst_30075 = cljs.core.not.call(null,inst_30074);
var state_30091__$1 = (function (){var statearr_30093 = state_30091;
(statearr_30093[(7)] = inst_30073__$1);

return statearr_30093;
})();
if(inst_30075){
var statearr_30094_30119 = state_30091__$1;
(statearr_30094_30119[(1)] = (8));

} else {
var statearr_30095_30120 = state_30091__$1;
(statearr_30095_30120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (1))){
var inst_30068 = (0);
var state_30091__$1 = (function (){var statearr_30096 = state_30091;
(statearr_30096[(8)] = inst_30068);

return statearr_30096;
})();
var statearr_30097_30121 = state_30091__$1;
(statearr_30097_30121[(2)] = null);

(statearr_30097_30121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (4))){
var state_30091__$1 = state_30091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30091__$1,(7),ch);
} else {
if((state_val_30092 === (6))){
var inst_30086 = (state_30091[(2)]);
var state_30091__$1 = state_30091;
var statearr_30098_30122 = state_30091__$1;
(statearr_30098_30122[(2)] = inst_30086);

(statearr_30098_30122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (3))){
var inst_30088 = (state_30091[(2)]);
var inst_30089 = cljs.core.async.close_BANG_.call(null,out);
var state_30091__$1 = (function (){var statearr_30099 = state_30091;
(statearr_30099[(9)] = inst_30088);

return statearr_30099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30091__$1,inst_30089);
} else {
if((state_val_30092 === (2))){
var inst_30068 = (state_30091[(8)]);
var inst_30070 = (inst_30068 < n);
var state_30091__$1 = state_30091;
if(cljs.core.truth_(inst_30070)){
var statearr_30100_30123 = state_30091__$1;
(statearr_30100_30123[(1)] = (4));

} else {
var statearr_30101_30124 = state_30091__$1;
(statearr_30101_30124[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (11))){
var inst_30068 = (state_30091[(8)]);
var inst_30078 = (state_30091[(2)]);
var inst_30079 = (inst_30068 + (1));
var inst_30068__$1 = inst_30079;
var state_30091__$1 = (function (){var statearr_30102 = state_30091;
(statearr_30102[(10)] = inst_30078);

(statearr_30102[(8)] = inst_30068__$1);

return statearr_30102;
})();
var statearr_30103_30125 = state_30091__$1;
(statearr_30103_30125[(2)] = null);

(statearr_30103_30125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (9))){
var state_30091__$1 = state_30091;
var statearr_30104_30126 = state_30091__$1;
(statearr_30104_30126[(2)] = null);

(statearr_30104_30126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (5))){
var state_30091__$1 = state_30091;
var statearr_30105_30127 = state_30091__$1;
(statearr_30105_30127[(2)] = null);

(statearr_30105_30127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (10))){
var inst_30083 = (state_30091[(2)]);
var state_30091__$1 = state_30091;
var statearr_30106_30128 = state_30091__$1;
(statearr_30106_30128[(2)] = inst_30083);

(statearr_30106_30128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (8))){
var inst_30073 = (state_30091[(7)]);
var state_30091__$1 = state_30091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30091__$1,(11),out,inst_30073);
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
});})(c__20691__auto___30118,out))
;
return ((function (switch__20626__auto__,c__20691__auto___30118,out){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_30110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30110[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_30110[(1)] = (1));

return statearr_30110;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_30091){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_30091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e30111){if((e30111 instanceof Object)){
var ex__20630__auto__ = e30111;
var statearr_30112_30129 = state_30091;
(statearr_30112_30129[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30130 = state_30091;
state_30091 = G__30130;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_30091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_30091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___30118,out))
})();
var state__20693__auto__ = (function (){var statearr_30113 = f__20692__auto__.call(null);
(statearr_30113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___30118);

return statearr_30113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___30118,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30138 = (function (map_LT_,f,ch,meta30139){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30139 = meta30139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30140,meta30139__$1){
var self__ = this;
var _30140__$1 = this;
return (new cljs.core.async.t_cljs$core$async30138(self__.map_LT_,self__.f,self__.ch,meta30139__$1));
});

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30140){
var self__ = this;
var _30140__$1 = this;
return self__.meta30139;
});

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30141 = (function (map_LT_,f,ch,meta30139,_,fn1,meta30142){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30139 = meta30139;
this._ = _;
this.fn1 = fn1;
this.meta30142 = meta30142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30143,meta30142__$1){
var self__ = this;
var _30143__$1 = this;
return (new cljs.core.async.t_cljs$core$async30141(self__.map_LT_,self__.f,self__.ch,self__.meta30139,self__._,self__.fn1,meta30142__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30143){
var self__ = this;
var _30143__$1 = this;
return self__.meta30142;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30141.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30131_SHARP_){
return f1.call(null,(((p1__30131_SHARP_ == null))?null:self__.f.call(null,p1__30131_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30141.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30139","meta30139",-1722471586,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30138","cljs.core.async/t_cljs$core$async30138",2120093266,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30142","meta30142",701007147,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30141";

cljs.core.async.t_cljs$core$async30141.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async30141");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30141 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30141(map_LT___$1,f__$1,ch__$1,meta30139__$1,___$2,fn1__$1,meta30142){
return (new cljs.core.async.t_cljs$core$async30141(map_LT___$1,f__$1,ch__$1,meta30139__$1,___$2,fn1__$1,meta30142));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30141(self__.map_LT_,self__.f,self__.ch,self__.meta30139,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30139","meta30139",-1722471586,null)], null);
});

cljs.core.async.t_cljs$core$async30138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30138";

cljs.core.async.t_cljs$core$async30138.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async30138");
});

cljs.core.async.__GT_t_cljs$core$async30138 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30138(map_LT___$1,f__$1,ch__$1,meta30139){
return (new cljs.core.async.t_cljs$core$async30138(map_LT___$1,f__$1,ch__$1,meta30139));
});

}

return (new cljs.core.async.t_cljs$core$async30138(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30147 = (function (map_GT_,f,ch,meta30148){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30148 = meta30148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30149,meta30148__$1){
var self__ = this;
var _30149__$1 = this;
return (new cljs.core.async.t_cljs$core$async30147(self__.map_GT_,self__.f,self__.ch,meta30148__$1));
});

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30149){
var self__ = this;
var _30149__$1 = this;
return self__.meta30148;
});

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30148","meta30148",-317995787,null)], null);
});

cljs.core.async.t_cljs$core$async30147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30147";

cljs.core.async.t_cljs$core$async30147.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async30147");
});

cljs.core.async.__GT_t_cljs$core$async30147 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30147(map_GT___$1,f__$1,ch__$1,meta30148){
return (new cljs.core.async.t_cljs$core$async30147(map_GT___$1,f__$1,ch__$1,meta30148));
});

}

return (new cljs.core.async.t_cljs$core$async30147(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30153 = (function (filter_GT_,p,ch,meta30154){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30154 = meta30154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30155,meta30154__$1){
var self__ = this;
var _30155__$1 = this;
return (new cljs.core.async.t_cljs$core$async30153(self__.filter_GT_,self__.p,self__.ch,meta30154__$1));
});

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30155){
var self__ = this;
var _30155__$1 = this;
return self__.meta30154;
});

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30154","meta30154",-1787706143,null)], null);
});

cljs.core.async.t_cljs$core$async30153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30153";

cljs.core.async.t_cljs$core$async30153.cljs$lang$ctorPrWriter = (function (this__17373__auto__,writer__17374__auto__,opt__17375__auto__){
return cljs.core._write.call(null,writer__17374__auto__,"cljs.core.async/t_cljs$core$async30153");
});

cljs.core.async.__GT_t_cljs$core$async30153 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30153(filter_GT___$1,p__$1,ch__$1,meta30154){
return (new cljs.core.async.t_cljs$core$async30153(filter_GT___$1,p__$1,ch__$1,meta30154));
});

}

return (new cljs.core.async.t_cljs$core$async30153(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30156 = [];
var len__17833__auto___30200 = arguments.length;
var i__17834__auto___30201 = (0);
while(true){
if((i__17834__auto___30201 < len__17833__auto___30200)){
args30156.push((arguments[i__17834__auto___30201]));

var G__30202 = (i__17834__auto___30201 + (1));
i__17834__auto___30201 = G__30202;
continue;
} else {
}
break;
}

var G__30158 = args30156.length;
switch (G__30158) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30156.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20691__auto___30204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___30204,out){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___30204,out){
return (function (state_30179){
var state_val_30180 = (state_30179[(1)]);
if((state_val_30180 === (7))){
var inst_30175 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30181_30205 = state_30179__$1;
(statearr_30181_30205[(2)] = inst_30175);

(statearr_30181_30205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (1))){
var state_30179__$1 = state_30179;
var statearr_30182_30206 = state_30179__$1;
(statearr_30182_30206[(2)] = null);

(statearr_30182_30206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (4))){
var inst_30161 = (state_30179[(7)]);
var inst_30161__$1 = (state_30179[(2)]);
var inst_30162 = (inst_30161__$1 == null);
var state_30179__$1 = (function (){var statearr_30183 = state_30179;
(statearr_30183[(7)] = inst_30161__$1);

return statearr_30183;
})();
if(cljs.core.truth_(inst_30162)){
var statearr_30184_30207 = state_30179__$1;
(statearr_30184_30207[(1)] = (5));

} else {
var statearr_30185_30208 = state_30179__$1;
(statearr_30185_30208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (6))){
var inst_30161 = (state_30179[(7)]);
var inst_30166 = p.call(null,inst_30161);
var state_30179__$1 = state_30179;
if(cljs.core.truth_(inst_30166)){
var statearr_30186_30209 = state_30179__$1;
(statearr_30186_30209[(1)] = (8));

} else {
var statearr_30187_30210 = state_30179__$1;
(statearr_30187_30210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (3))){
var inst_30177 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30179__$1,inst_30177);
} else {
if((state_val_30180 === (2))){
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30179__$1,(4),ch);
} else {
if((state_val_30180 === (11))){
var inst_30169 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30188_30211 = state_30179__$1;
(statearr_30188_30211[(2)] = inst_30169);

(statearr_30188_30211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (9))){
var state_30179__$1 = state_30179;
var statearr_30189_30212 = state_30179__$1;
(statearr_30189_30212[(2)] = null);

(statearr_30189_30212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (5))){
var inst_30164 = cljs.core.async.close_BANG_.call(null,out);
var state_30179__$1 = state_30179;
var statearr_30190_30213 = state_30179__$1;
(statearr_30190_30213[(2)] = inst_30164);

(statearr_30190_30213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (10))){
var inst_30172 = (state_30179[(2)]);
var state_30179__$1 = (function (){var statearr_30191 = state_30179;
(statearr_30191[(8)] = inst_30172);

return statearr_30191;
})();
var statearr_30192_30214 = state_30179__$1;
(statearr_30192_30214[(2)] = null);

(statearr_30192_30214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (8))){
var inst_30161 = (state_30179[(7)]);
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30179__$1,(11),out,inst_30161);
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
});})(c__20691__auto___30204,out))
;
return ((function (switch__20626__auto__,c__20691__auto___30204,out){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_30196 = [null,null,null,null,null,null,null,null,null];
(statearr_30196[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_30196[(1)] = (1));

return statearr_30196;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_30179){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_30179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e30197){if((e30197 instanceof Object)){
var ex__20630__auto__ = e30197;
var statearr_30198_30215 = state_30179;
(statearr_30198_30215[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30216 = state_30179;
state_30179 = G__30216;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_30179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_30179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___30204,out))
})();
var state__20693__auto__ = (function (){var statearr_30199 = f__20692__auto__.call(null);
(statearr_30199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___30204);

return statearr_30199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___30204,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30217 = [];
var len__17833__auto___30220 = arguments.length;
var i__17834__auto___30221 = (0);
while(true){
if((i__17834__auto___30221 < len__17833__auto___30220)){
args30217.push((arguments[i__17834__auto___30221]));

var G__30222 = (i__17834__auto___30221 + (1));
i__17834__auto___30221 = G__30222;
continue;
} else {
}
break;
}

var G__30219 = args30217.length;
switch (G__30219) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30217.length)].join('')));

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
var c__20691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto__){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto__){
return (function (state_30389){
var state_val_30390 = (state_30389[(1)]);
if((state_val_30390 === (7))){
var inst_30385 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30391_30432 = state_30389__$1;
(statearr_30391_30432[(2)] = inst_30385);

(statearr_30391_30432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (20))){
var inst_30355 = (state_30389[(7)]);
var inst_30366 = (state_30389[(2)]);
var inst_30367 = cljs.core.next.call(null,inst_30355);
var inst_30341 = inst_30367;
var inst_30342 = null;
var inst_30343 = (0);
var inst_30344 = (0);
var state_30389__$1 = (function (){var statearr_30392 = state_30389;
(statearr_30392[(8)] = inst_30344);

(statearr_30392[(9)] = inst_30343);

(statearr_30392[(10)] = inst_30342);

(statearr_30392[(11)] = inst_30341);

(statearr_30392[(12)] = inst_30366);

return statearr_30392;
})();
var statearr_30393_30433 = state_30389__$1;
(statearr_30393_30433[(2)] = null);

(statearr_30393_30433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (1))){
var state_30389__$1 = state_30389;
var statearr_30394_30434 = state_30389__$1;
(statearr_30394_30434[(2)] = null);

(statearr_30394_30434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (4))){
var inst_30330 = (state_30389[(13)]);
var inst_30330__$1 = (state_30389[(2)]);
var inst_30331 = (inst_30330__$1 == null);
var state_30389__$1 = (function (){var statearr_30395 = state_30389;
(statearr_30395[(13)] = inst_30330__$1);

return statearr_30395;
})();
if(cljs.core.truth_(inst_30331)){
var statearr_30396_30435 = state_30389__$1;
(statearr_30396_30435[(1)] = (5));

} else {
var statearr_30397_30436 = state_30389__$1;
(statearr_30397_30436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (15))){
var state_30389__$1 = state_30389;
var statearr_30401_30437 = state_30389__$1;
(statearr_30401_30437[(2)] = null);

(statearr_30401_30437[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (21))){
var state_30389__$1 = state_30389;
var statearr_30402_30438 = state_30389__$1;
(statearr_30402_30438[(2)] = null);

(statearr_30402_30438[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (13))){
var inst_30344 = (state_30389[(8)]);
var inst_30343 = (state_30389[(9)]);
var inst_30342 = (state_30389[(10)]);
var inst_30341 = (state_30389[(11)]);
var inst_30351 = (state_30389[(2)]);
var inst_30352 = (inst_30344 + (1));
var tmp30398 = inst_30343;
var tmp30399 = inst_30342;
var tmp30400 = inst_30341;
var inst_30341__$1 = tmp30400;
var inst_30342__$1 = tmp30399;
var inst_30343__$1 = tmp30398;
var inst_30344__$1 = inst_30352;
var state_30389__$1 = (function (){var statearr_30403 = state_30389;
(statearr_30403[(14)] = inst_30351);

(statearr_30403[(8)] = inst_30344__$1);

(statearr_30403[(9)] = inst_30343__$1);

(statearr_30403[(10)] = inst_30342__$1);

(statearr_30403[(11)] = inst_30341__$1);

return statearr_30403;
})();
var statearr_30404_30439 = state_30389__$1;
(statearr_30404_30439[(2)] = null);

(statearr_30404_30439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (22))){
var state_30389__$1 = state_30389;
var statearr_30405_30440 = state_30389__$1;
(statearr_30405_30440[(2)] = null);

(statearr_30405_30440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (6))){
var inst_30330 = (state_30389[(13)]);
var inst_30339 = f.call(null,inst_30330);
var inst_30340 = cljs.core.seq.call(null,inst_30339);
var inst_30341 = inst_30340;
var inst_30342 = null;
var inst_30343 = (0);
var inst_30344 = (0);
var state_30389__$1 = (function (){var statearr_30406 = state_30389;
(statearr_30406[(8)] = inst_30344);

(statearr_30406[(9)] = inst_30343);

(statearr_30406[(10)] = inst_30342);

(statearr_30406[(11)] = inst_30341);

return statearr_30406;
})();
var statearr_30407_30441 = state_30389__$1;
(statearr_30407_30441[(2)] = null);

(statearr_30407_30441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (17))){
var inst_30355 = (state_30389[(7)]);
var inst_30359 = cljs.core.chunk_first.call(null,inst_30355);
var inst_30360 = cljs.core.chunk_rest.call(null,inst_30355);
var inst_30361 = cljs.core.count.call(null,inst_30359);
var inst_30341 = inst_30360;
var inst_30342 = inst_30359;
var inst_30343 = inst_30361;
var inst_30344 = (0);
var state_30389__$1 = (function (){var statearr_30408 = state_30389;
(statearr_30408[(8)] = inst_30344);

(statearr_30408[(9)] = inst_30343);

(statearr_30408[(10)] = inst_30342);

(statearr_30408[(11)] = inst_30341);

return statearr_30408;
})();
var statearr_30409_30442 = state_30389__$1;
(statearr_30409_30442[(2)] = null);

(statearr_30409_30442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (3))){
var inst_30387 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30389__$1,inst_30387);
} else {
if((state_val_30390 === (12))){
var inst_30375 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30410_30443 = state_30389__$1;
(statearr_30410_30443[(2)] = inst_30375);

(statearr_30410_30443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (2))){
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30389__$1,(4),in$);
} else {
if((state_val_30390 === (23))){
var inst_30383 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30411_30444 = state_30389__$1;
(statearr_30411_30444[(2)] = inst_30383);

(statearr_30411_30444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (19))){
var inst_30370 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30412_30445 = state_30389__$1;
(statearr_30412_30445[(2)] = inst_30370);

(statearr_30412_30445[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (11))){
var inst_30341 = (state_30389[(11)]);
var inst_30355 = (state_30389[(7)]);
var inst_30355__$1 = cljs.core.seq.call(null,inst_30341);
var state_30389__$1 = (function (){var statearr_30413 = state_30389;
(statearr_30413[(7)] = inst_30355__$1);

return statearr_30413;
})();
if(inst_30355__$1){
var statearr_30414_30446 = state_30389__$1;
(statearr_30414_30446[(1)] = (14));

} else {
var statearr_30415_30447 = state_30389__$1;
(statearr_30415_30447[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (9))){
var inst_30377 = (state_30389[(2)]);
var inst_30378 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30389__$1 = (function (){var statearr_30416 = state_30389;
(statearr_30416[(15)] = inst_30377);

return statearr_30416;
})();
if(cljs.core.truth_(inst_30378)){
var statearr_30417_30448 = state_30389__$1;
(statearr_30417_30448[(1)] = (21));

} else {
var statearr_30418_30449 = state_30389__$1;
(statearr_30418_30449[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (5))){
var inst_30333 = cljs.core.async.close_BANG_.call(null,out);
var state_30389__$1 = state_30389;
var statearr_30419_30450 = state_30389__$1;
(statearr_30419_30450[(2)] = inst_30333);

(statearr_30419_30450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (14))){
var inst_30355 = (state_30389[(7)]);
var inst_30357 = cljs.core.chunked_seq_QMARK_.call(null,inst_30355);
var state_30389__$1 = state_30389;
if(inst_30357){
var statearr_30420_30451 = state_30389__$1;
(statearr_30420_30451[(1)] = (17));

} else {
var statearr_30421_30452 = state_30389__$1;
(statearr_30421_30452[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (16))){
var inst_30373 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30422_30453 = state_30389__$1;
(statearr_30422_30453[(2)] = inst_30373);

(statearr_30422_30453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (10))){
var inst_30344 = (state_30389[(8)]);
var inst_30342 = (state_30389[(10)]);
var inst_30349 = cljs.core._nth.call(null,inst_30342,inst_30344);
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30389__$1,(13),out,inst_30349);
} else {
if((state_val_30390 === (18))){
var inst_30355 = (state_30389[(7)]);
var inst_30364 = cljs.core.first.call(null,inst_30355);
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30389__$1,(20),out,inst_30364);
} else {
if((state_val_30390 === (8))){
var inst_30344 = (state_30389[(8)]);
var inst_30343 = (state_30389[(9)]);
var inst_30346 = (inst_30344 < inst_30343);
var inst_30347 = inst_30346;
var state_30389__$1 = state_30389;
if(cljs.core.truth_(inst_30347)){
var statearr_30423_30454 = state_30389__$1;
(statearr_30423_30454[(1)] = (10));

} else {
var statearr_30424_30455 = state_30389__$1;
(statearr_30424_30455[(1)] = (11));

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
});})(c__20691__auto__))
;
return ((function (switch__20626__auto__,c__20691__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20627__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20627__auto____0 = (function (){
var statearr_30428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30428[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20627__auto__);

(statearr_30428[(1)] = (1));

return statearr_30428;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20627__auto____1 = (function (state_30389){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_30389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e30429){if((e30429 instanceof Object)){
var ex__20630__auto__ = e30429;
var statearr_30430_30456 = state_30389;
(statearr_30430_30456[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30457 = state_30389;
state_30389 = G__30457;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20627__auto__ = function(state_30389){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20627__auto____1.call(this,state_30389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20627__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20627__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto__))
})();
var state__20693__auto__ = (function (){var statearr_30431 = f__20692__auto__.call(null);
(statearr_30431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto__);

return statearr_30431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto__))
);

return c__20691__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30458 = [];
var len__17833__auto___30461 = arguments.length;
var i__17834__auto___30462 = (0);
while(true){
if((i__17834__auto___30462 < len__17833__auto___30461)){
args30458.push((arguments[i__17834__auto___30462]));

var G__30463 = (i__17834__auto___30462 + (1));
i__17834__auto___30462 = G__30463;
continue;
} else {
}
break;
}

var G__30460 = args30458.length;
switch (G__30460) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30458.length)].join('')));

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
var args30465 = [];
var len__17833__auto___30468 = arguments.length;
var i__17834__auto___30469 = (0);
while(true){
if((i__17834__auto___30469 < len__17833__auto___30468)){
args30465.push((arguments[i__17834__auto___30469]));

var G__30470 = (i__17834__auto___30469 + (1));
i__17834__auto___30469 = G__30470;
continue;
} else {
}
break;
}

var G__30467 = args30465.length;
switch (G__30467) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30465.length)].join('')));

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
var args30472 = [];
var len__17833__auto___30523 = arguments.length;
var i__17834__auto___30524 = (0);
while(true){
if((i__17834__auto___30524 < len__17833__auto___30523)){
args30472.push((arguments[i__17834__auto___30524]));

var G__30525 = (i__17834__auto___30524 + (1));
i__17834__auto___30524 = G__30525;
continue;
} else {
}
break;
}

var G__30474 = args30472.length;
switch (G__30474) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30472.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20691__auto___30527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___30527,out){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___30527,out){
return (function (state_30498){
var state_val_30499 = (state_30498[(1)]);
if((state_val_30499 === (7))){
var inst_30493 = (state_30498[(2)]);
var state_30498__$1 = state_30498;
var statearr_30500_30528 = state_30498__$1;
(statearr_30500_30528[(2)] = inst_30493);

(statearr_30500_30528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (1))){
var inst_30475 = null;
var state_30498__$1 = (function (){var statearr_30501 = state_30498;
(statearr_30501[(7)] = inst_30475);

return statearr_30501;
})();
var statearr_30502_30529 = state_30498__$1;
(statearr_30502_30529[(2)] = null);

(statearr_30502_30529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (4))){
var inst_30478 = (state_30498[(8)]);
var inst_30478__$1 = (state_30498[(2)]);
var inst_30479 = (inst_30478__$1 == null);
var inst_30480 = cljs.core.not.call(null,inst_30479);
var state_30498__$1 = (function (){var statearr_30503 = state_30498;
(statearr_30503[(8)] = inst_30478__$1);

return statearr_30503;
})();
if(inst_30480){
var statearr_30504_30530 = state_30498__$1;
(statearr_30504_30530[(1)] = (5));

} else {
var statearr_30505_30531 = state_30498__$1;
(statearr_30505_30531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (6))){
var state_30498__$1 = state_30498;
var statearr_30506_30532 = state_30498__$1;
(statearr_30506_30532[(2)] = null);

(statearr_30506_30532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (3))){
var inst_30495 = (state_30498[(2)]);
var inst_30496 = cljs.core.async.close_BANG_.call(null,out);
var state_30498__$1 = (function (){var statearr_30507 = state_30498;
(statearr_30507[(9)] = inst_30495);

return statearr_30507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30498__$1,inst_30496);
} else {
if((state_val_30499 === (2))){
var state_30498__$1 = state_30498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30498__$1,(4),ch);
} else {
if((state_val_30499 === (11))){
var inst_30478 = (state_30498[(8)]);
var inst_30487 = (state_30498[(2)]);
var inst_30475 = inst_30478;
var state_30498__$1 = (function (){var statearr_30508 = state_30498;
(statearr_30508[(7)] = inst_30475);

(statearr_30508[(10)] = inst_30487);

return statearr_30508;
})();
var statearr_30509_30533 = state_30498__$1;
(statearr_30509_30533[(2)] = null);

(statearr_30509_30533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (9))){
var inst_30478 = (state_30498[(8)]);
var state_30498__$1 = state_30498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30498__$1,(11),out,inst_30478);
} else {
if((state_val_30499 === (5))){
var inst_30478 = (state_30498[(8)]);
var inst_30475 = (state_30498[(7)]);
var inst_30482 = cljs.core._EQ_.call(null,inst_30478,inst_30475);
var state_30498__$1 = state_30498;
if(inst_30482){
var statearr_30511_30534 = state_30498__$1;
(statearr_30511_30534[(1)] = (8));

} else {
var statearr_30512_30535 = state_30498__$1;
(statearr_30512_30535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (10))){
var inst_30490 = (state_30498[(2)]);
var state_30498__$1 = state_30498;
var statearr_30513_30536 = state_30498__$1;
(statearr_30513_30536[(2)] = inst_30490);

(statearr_30513_30536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (8))){
var inst_30475 = (state_30498[(7)]);
var tmp30510 = inst_30475;
var inst_30475__$1 = tmp30510;
var state_30498__$1 = (function (){var statearr_30514 = state_30498;
(statearr_30514[(7)] = inst_30475__$1);

return statearr_30514;
})();
var statearr_30515_30537 = state_30498__$1;
(statearr_30515_30537[(2)] = null);

(statearr_30515_30537[(1)] = (2));


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
});})(c__20691__auto___30527,out))
;
return ((function (switch__20626__auto__,c__20691__auto___30527,out){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_30519 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30519[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_30519[(1)] = (1));

return statearr_30519;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_30498){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_30498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e30520){if((e30520 instanceof Object)){
var ex__20630__auto__ = e30520;
var statearr_30521_30538 = state_30498;
(statearr_30521_30538[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30539 = state_30498;
state_30498 = G__30539;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_30498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_30498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___30527,out))
})();
var state__20693__auto__ = (function (){var statearr_30522 = f__20692__auto__.call(null);
(statearr_30522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___30527);

return statearr_30522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___30527,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30540 = [];
var len__17833__auto___30610 = arguments.length;
var i__17834__auto___30611 = (0);
while(true){
if((i__17834__auto___30611 < len__17833__auto___30610)){
args30540.push((arguments[i__17834__auto___30611]));

var G__30612 = (i__17834__auto___30611 + (1));
i__17834__auto___30611 = G__30612;
continue;
} else {
}
break;
}

var G__30542 = args30540.length;
switch (G__30542) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30540.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20691__auto___30614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___30614,out){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___30614,out){
return (function (state_30580){
var state_val_30581 = (state_30580[(1)]);
if((state_val_30581 === (7))){
var inst_30576 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
var statearr_30582_30615 = state_30580__$1;
(statearr_30582_30615[(2)] = inst_30576);

(statearr_30582_30615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (1))){
var inst_30543 = (new Array(n));
var inst_30544 = inst_30543;
var inst_30545 = (0);
var state_30580__$1 = (function (){var statearr_30583 = state_30580;
(statearr_30583[(7)] = inst_30544);

(statearr_30583[(8)] = inst_30545);

return statearr_30583;
})();
var statearr_30584_30616 = state_30580__$1;
(statearr_30584_30616[(2)] = null);

(statearr_30584_30616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (4))){
var inst_30548 = (state_30580[(9)]);
var inst_30548__$1 = (state_30580[(2)]);
var inst_30549 = (inst_30548__$1 == null);
var inst_30550 = cljs.core.not.call(null,inst_30549);
var state_30580__$1 = (function (){var statearr_30585 = state_30580;
(statearr_30585[(9)] = inst_30548__$1);

return statearr_30585;
})();
if(inst_30550){
var statearr_30586_30617 = state_30580__$1;
(statearr_30586_30617[(1)] = (5));

} else {
var statearr_30587_30618 = state_30580__$1;
(statearr_30587_30618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (15))){
var inst_30570 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
var statearr_30588_30619 = state_30580__$1;
(statearr_30588_30619[(2)] = inst_30570);

(statearr_30588_30619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (13))){
var state_30580__$1 = state_30580;
var statearr_30589_30620 = state_30580__$1;
(statearr_30589_30620[(2)] = null);

(statearr_30589_30620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (6))){
var inst_30545 = (state_30580[(8)]);
var inst_30566 = (inst_30545 > (0));
var state_30580__$1 = state_30580;
if(cljs.core.truth_(inst_30566)){
var statearr_30590_30621 = state_30580__$1;
(statearr_30590_30621[(1)] = (12));

} else {
var statearr_30591_30622 = state_30580__$1;
(statearr_30591_30622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (3))){
var inst_30578 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30580__$1,inst_30578);
} else {
if((state_val_30581 === (12))){
var inst_30544 = (state_30580[(7)]);
var inst_30568 = cljs.core.vec.call(null,inst_30544);
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30580__$1,(15),out,inst_30568);
} else {
if((state_val_30581 === (2))){
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30580__$1,(4),ch);
} else {
if((state_val_30581 === (11))){
var inst_30560 = (state_30580[(2)]);
var inst_30561 = (new Array(n));
var inst_30544 = inst_30561;
var inst_30545 = (0);
var state_30580__$1 = (function (){var statearr_30592 = state_30580;
(statearr_30592[(7)] = inst_30544);

(statearr_30592[(8)] = inst_30545);

(statearr_30592[(10)] = inst_30560);

return statearr_30592;
})();
var statearr_30593_30623 = state_30580__$1;
(statearr_30593_30623[(2)] = null);

(statearr_30593_30623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (9))){
var inst_30544 = (state_30580[(7)]);
var inst_30558 = cljs.core.vec.call(null,inst_30544);
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30580__$1,(11),out,inst_30558);
} else {
if((state_val_30581 === (5))){
var inst_30544 = (state_30580[(7)]);
var inst_30545 = (state_30580[(8)]);
var inst_30548 = (state_30580[(9)]);
var inst_30553 = (state_30580[(11)]);
var inst_30552 = (inst_30544[inst_30545] = inst_30548);
var inst_30553__$1 = (inst_30545 + (1));
var inst_30554 = (inst_30553__$1 < n);
var state_30580__$1 = (function (){var statearr_30594 = state_30580;
(statearr_30594[(11)] = inst_30553__$1);

(statearr_30594[(12)] = inst_30552);

return statearr_30594;
})();
if(cljs.core.truth_(inst_30554)){
var statearr_30595_30624 = state_30580__$1;
(statearr_30595_30624[(1)] = (8));

} else {
var statearr_30596_30625 = state_30580__$1;
(statearr_30596_30625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (14))){
var inst_30573 = (state_30580[(2)]);
var inst_30574 = cljs.core.async.close_BANG_.call(null,out);
var state_30580__$1 = (function (){var statearr_30598 = state_30580;
(statearr_30598[(13)] = inst_30573);

return statearr_30598;
})();
var statearr_30599_30626 = state_30580__$1;
(statearr_30599_30626[(2)] = inst_30574);

(statearr_30599_30626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (10))){
var inst_30564 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
var statearr_30600_30627 = state_30580__$1;
(statearr_30600_30627[(2)] = inst_30564);

(statearr_30600_30627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (8))){
var inst_30544 = (state_30580[(7)]);
var inst_30553 = (state_30580[(11)]);
var tmp30597 = inst_30544;
var inst_30544__$1 = tmp30597;
var inst_30545 = inst_30553;
var state_30580__$1 = (function (){var statearr_30601 = state_30580;
(statearr_30601[(7)] = inst_30544__$1);

(statearr_30601[(8)] = inst_30545);

return statearr_30601;
})();
var statearr_30602_30628 = state_30580__$1;
(statearr_30602_30628[(2)] = null);

(statearr_30602_30628[(1)] = (2));


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
});})(c__20691__auto___30614,out))
;
return ((function (switch__20626__auto__,c__20691__auto___30614,out){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_30606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30606[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_30606[(1)] = (1));

return statearr_30606;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_30580){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_30580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e30607){if((e30607 instanceof Object)){
var ex__20630__auto__ = e30607;
var statearr_30608_30629 = state_30580;
(statearr_30608_30629[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30630 = state_30580;
state_30580 = G__30630;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_30580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_30580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___30614,out))
})();
var state__20693__auto__ = (function (){var statearr_30609 = f__20692__auto__.call(null);
(statearr_30609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___30614);

return statearr_30609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___30614,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30631 = [];
var len__17833__auto___30705 = arguments.length;
var i__17834__auto___30706 = (0);
while(true){
if((i__17834__auto___30706 < len__17833__auto___30705)){
args30631.push((arguments[i__17834__auto___30706]));

var G__30707 = (i__17834__auto___30706 + (1));
i__17834__auto___30706 = G__30707;
continue;
} else {
}
break;
}

var G__30633 = args30631.length;
switch (G__30633) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30631.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20691__auto___30709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___30709,out){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___30709,out){
return (function (state_30675){
var state_val_30676 = (state_30675[(1)]);
if((state_val_30676 === (7))){
var inst_30671 = (state_30675[(2)]);
var state_30675__$1 = state_30675;
var statearr_30677_30710 = state_30675__$1;
(statearr_30677_30710[(2)] = inst_30671);

(statearr_30677_30710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (1))){
var inst_30634 = [];
var inst_30635 = inst_30634;
var inst_30636 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30675__$1 = (function (){var statearr_30678 = state_30675;
(statearr_30678[(7)] = inst_30636);

(statearr_30678[(8)] = inst_30635);

return statearr_30678;
})();
var statearr_30679_30711 = state_30675__$1;
(statearr_30679_30711[(2)] = null);

(statearr_30679_30711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (4))){
var inst_30639 = (state_30675[(9)]);
var inst_30639__$1 = (state_30675[(2)]);
var inst_30640 = (inst_30639__$1 == null);
var inst_30641 = cljs.core.not.call(null,inst_30640);
var state_30675__$1 = (function (){var statearr_30680 = state_30675;
(statearr_30680[(9)] = inst_30639__$1);

return statearr_30680;
})();
if(inst_30641){
var statearr_30681_30712 = state_30675__$1;
(statearr_30681_30712[(1)] = (5));

} else {
var statearr_30682_30713 = state_30675__$1;
(statearr_30682_30713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (15))){
var inst_30665 = (state_30675[(2)]);
var state_30675__$1 = state_30675;
var statearr_30683_30714 = state_30675__$1;
(statearr_30683_30714[(2)] = inst_30665);

(statearr_30683_30714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (13))){
var state_30675__$1 = state_30675;
var statearr_30684_30715 = state_30675__$1;
(statearr_30684_30715[(2)] = null);

(statearr_30684_30715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (6))){
var inst_30635 = (state_30675[(8)]);
var inst_30660 = inst_30635.length;
var inst_30661 = (inst_30660 > (0));
var state_30675__$1 = state_30675;
if(cljs.core.truth_(inst_30661)){
var statearr_30685_30716 = state_30675__$1;
(statearr_30685_30716[(1)] = (12));

} else {
var statearr_30686_30717 = state_30675__$1;
(statearr_30686_30717[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (3))){
var inst_30673 = (state_30675[(2)]);
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30675__$1,inst_30673);
} else {
if((state_val_30676 === (12))){
var inst_30635 = (state_30675[(8)]);
var inst_30663 = cljs.core.vec.call(null,inst_30635);
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30675__$1,(15),out,inst_30663);
} else {
if((state_val_30676 === (2))){
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30675__$1,(4),ch);
} else {
if((state_val_30676 === (11))){
var inst_30643 = (state_30675[(10)]);
var inst_30639 = (state_30675[(9)]);
var inst_30653 = (state_30675[(2)]);
var inst_30654 = [];
var inst_30655 = inst_30654.push(inst_30639);
var inst_30635 = inst_30654;
var inst_30636 = inst_30643;
var state_30675__$1 = (function (){var statearr_30687 = state_30675;
(statearr_30687[(11)] = inst_30653);

(statearr_30687[(7)] = inst_30636);

(statearr_30687[(8)] = inst_30635);

(statearr_30687[(12)] = inst_30655);

return statearr_30687;
})();
var statearr_30688_30718 = state_30675__$1;
(statearr_30688_30718[(2)] = null);

(statearr_30688_30718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (9))){
var inst_30635 = (state_30675[(8)]);
var inst_30651 = cljs.core.vec.call(null,inst_30635);
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30675__$1,(11),out,inst_30651);
} else {
if((state_val_30676 === (5))){
var inst_30643 = (state_30675[(10)]);
var inst_30639 = (state_30675[(9)]);
var inst_30636 = (state_30675[(7)]);
var inst_30643__$1 = f.call(null,inst_30639);
var inst_30644 = cljs.core._EQ_.call(null,inst_30643__$1,inst_30636);
var inst_30645 = cljs.core.keyword_identical_QMARK_.call(null,inst_30636,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30646 = (inst_30644) || (inst_30645);
var state_30675__$1 = (function (){var statearr_30689 = state_30675;
(statearr_30689[(10)] = inst_30643__$1);

return statearr_30689;
})();
if(cljs.core.truth_(inst_30646)){
var statearr_30690_30719 = state_30675__$1;
(statearr_30690_30719[(1)] = (8));

} else {
var statearr_30691_30720 = state_30675__$1;
(statearr_30691_30720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (14))){
var inst_30668 = (state_30675[(2)]);
var inst_30669 = cljs.core.async.close_BANG_.call(null,out);
var state_30675__$1 = (function (){var statearr_30693 = state_30675;
(statearr_30693[(13)] = inst_30668);

return statearr_30693;
})();
var statearr_30694_30721 = state_30675__$1;
(statearr_30694_30721[(2)] = inst_30669);

(statearr_30694_30721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (10))){
var inst_30658 = (state_30675[(2)]);
var state_30675__$1 = state_30675;
var statearr_30695_30722 = state_30675__$1;
(statearr_30695_30722[(2)] = inst_30658);

(statearr_30695_30722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30676 === (8))){
var inst_30643 = (state_30675[(10)]);
var inst_30639 = (state_30675[(9)]);
var inst_30635 = (state_30675[(8)]);
var inst_30648 = inst_30635.push(inst_30639);
var tmp30692 = inst_30635;
var inst_30635__$1 = tmp30692;
var inst_30636 = inst_30643;
var state_30675__$1 = (function (){var statearr_30696 = state_30675;
(statearr_30696[(7)] = inst_30636);

(statearr_30696[(8)] = inst_30635__$1);

(statearr_30696[(14)] = inst_30648);

return statearr_30696;
})();
var statearr_30697_30723 = state_30675__$1;
(statearr_30697_30723[(2)] = null);

(statearr_30697_30723[(1)] = (2));


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
});})(c__20691__auto___30709,out))
;
return ((function (switch__20626__auto__,c__20691__auto___30709,out){
return (function() {
var cljs$core$async$state_machine__20627__auto__ = null;
var cljs$core$async$state_machine__20627__auto____0 = (function (){
var statearr_30701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30701[(0)] = cljs$core$async$state_machine__20627__auto__);

(statearr_30701[(1)] = (1));

return statearr_30701;
});
var cljs$core$async$state_machine__20627__auto____1 = (function (state_30675){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_30675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e30702){if((e30702 instanceof Object)){
var ex__20630__auto__ = e30702;
var statearr_30703_30724 = state_30675;
(statearr_30703_30724[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30725 = state_30675;
state_30675 = G__30725;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
cljs$core$async$state_machine__20627__auto__ = function(state_30675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20627__auto____1.call(this,state_30675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20627__auto____0;
cljs$core$async$state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20627__auto____1;
return cljs$core$async$state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___30709,out))
})();
var state__20693__auto__ = (function (){var statearr_30704 = f__20692__auto__.call(null);
(statearr_30704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___30709);

return statearr_30704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___30709,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map