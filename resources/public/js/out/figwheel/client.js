// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26117 = cljs.core._EQ_;
var expr__26118 = (function (){var or__16775__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26117.call(null,"true",expr__26118))){
return true;
} else {
if(cljs.core.truth_(pred__26117.call(null,"false",expr__26118))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26118)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26120__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26121__i = 0, G__26121__a = new Array(arguments.length -  0);
while (G__26121__i < G__26121__a.length) {G__26121__a[G__26121__i] = arguments[G__26121__i + 0]; ++G__26121__i;}
  args = new cljs.core.IndexedSeq(G__26121__a,0);
} 
return G__26120__delegate.call(this,args);};
G__26120.cljs$lang$maxFixedArity = 0;
G__26120.cljs$lang$applyTo = (function (arglist__26122){
var args = cljs.core.seq(arglist__26122);
return G__26120__delegate(args);
});
G__26120.cljs$core$IFn$_invoke$arity$variadic = G__26120__delegate;
return G__26120;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26123){
var map__26126 = p__26123;
var map__26126__$1 = ((((!((map__26126 == null)))?((((map__26126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26126):map__26126);
var message = cljs.core.get.call(null,map__26126__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26126__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16775__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16763__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16763__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16763__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20669__auto___26288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___26288,ch){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___26288,ch){
return (function (state_26257){
var state_val_26258 = (state_26257[(1)]);
if((state_val_26258 === (7))){
var inst_26253 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26259_26289 = state_26257__$1;
(statearr_26259_26289[(2)] = inst_26253);

(statearr_26259_26289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (1))){
var state_26257__$1 = state_26257;
var statearr_26260_26290 = state_26257__$1;
(statearr_26260_26290[(2)] = null);

(statearr_26260_26290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (4))){
var inst_26210 = (state_26257[(7)]);
var inst_26210__$1 = (state_26257[(2)]);
var state_26257__$1 = (function (){var statearr_26261 = state_26257;
(statearr_26261[(7)] = inst_26210__$1);

return statearr_26261;
})();
if(cljs.core.truth_(inst_26210__$1)){
var statearr_26262_26291 = state_26257__$1;
(statearr_26262_26291[(1)] = (5));

} else {
var statearr_26263_26292 = state_26257__$1;
(statearr_26263_26292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (15))){
var inst_26217 = (state_26257[(8)]);
var inst_26232 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26217);
var inst_26233 = cljs.core.first.call(null,inst_26232);
var inst_26234 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26233);
var inst_26235 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26234)].join('');
var inst_26236 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26235);
var state_26257__$1 = state_26257;
var statearr_26264_26293 = state_26257__$1;
(statearr_26264_26293[(2)] = inst_26236);

(statearr_26264_26293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (13))){
var inst_26241 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26265_26294 = state_26257__$1;
(statearr_26265_26294[(2)] = inst_26241);

(statearr_26265_26294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (6))){
var state_26257__$1 = state_26257;
var statearr_26266_26295 = state_26257__$1;
(statearr_26266_26295[(2)] = null);

(statearr_26266_26295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (17))){
var inst_26239 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26267_26296 = state_26257__$1;
(statearr_26267_26296[(2)] = inst_26239);

(statearr_26267_26296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (3))){
var inst_26255 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26257__$1,inst_26255);
} else {
if((state_val_26258 === (12))){
var inst_26216 = (state_26257[(9)]);
var inst_26230 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26216,opts);
var state_26257__$1 = state_26257;
if(cljs.core.truth_(inst_26230)){
var statearr_26268_26297 = state_26257__$1;
(statearr_26268_26297[(1)] = (15));

} else {
var statearr_26269_26298 = state_26257__$1;
(statearr_26269_26298[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (2))){
var state_26257__$1 = state_26257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26257__$1,(4),ch);
} else {
if((state_val_26258 === (11))){
var inst_26217 = (state_26257[(8)]);
var inst_26222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26223 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26217);
var inst_26224 = cljs.core.async.timeout.call(null,(1000));
var inst_26225 = [inst_26223,inst_26224];
var inst_26226 = (new cljs.core.PersistentVector(null,2,(5),inst_26222,inst_26225,null));
var state_26257__$1 = state_26257;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26257__$1,(14),inst_26226);
} else {
if((state_val_26258 === (9))){
var inst_26217 = (state_26257[(8)]);
var inst_26243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26244 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26217);
var inst_26245 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26244);
var inst_26246 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26245)].join('');
var inst_26247 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26246);
var state_26257__$1 = (function (){var statearr_26270 = state_26257;
(statearr_26270[(10)] = inst_26243);

return statearr_26270;
})();
var statearr_26271_26299 = state_26257__$1;
(statearr_26271_26299[(2)] = inst_26247);

(statearr_26271_26299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (5))){
var inst_26210 = (state_26257[(7)]);
var inst_26212 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26213 = (new cljs.core.PersistentArrayMap(null,2,inst_26212,null));
var inst_26214 = (new cljs.core.PersistentHashSet(null,inst_26213,null));
var inst_26215 = figwheel.client.focus_msgs.call(null,inst_26214,inst_26210);
var inst_26216 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26215);
var inst_26217 = cljs.core.first.call(null,inst_26215);
var inst_26218 = figwheel.client.autoload_QMARK_.call(null);
var state_26257__$1 = (function (){var statearr_26272 = state_26257;
(statearr_26272[(9)] = inst_26216);

(statearr_26272[(8)] = inst_26217);

return statearr_26272;
})();
if(cljs.core.truth_(inst_26218)){
var statearr_26273_26300 = state_26257__$1;
(statearr_26273_26300[(1)] = (8));

} else {
var statearr_26274_26301 = state_26257__$1;
(statearr_26274_26301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (14))){
var inst_26228 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26275_26302 = state_26257__$1;
(statearr_26275_26302[(2)] = inst_26228);

(statearr_26275_26302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (16))){
var state_26257__$1 = state_26257;
var statearr_26276_26303 = state_26257__$1;
(statearr_26276_26303[(2)] = null);

(statearr_26276_26303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (10))){
var inst_26249 = (state_26257[(2)]);
var state_26257__$1 = (function (){var statearr_26277 = state_26257;
(statearr_26277[(11)] = inst_26249);

return statearr_26277;
})();
var statearr_26278_26304 = state_26257__$1;
(statearr_26278_26304[(2)] = null);

(statearr_26278_26304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (8))){
var inst_26216 = (state_26257[(9)]);
var inst_26220 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26216,opts);
var state_26257__$1 = state_26257;
if(cljs.core.truth_(inst_26220)){
var statearr_26279_26305 = state_26257__$1;
(statearr_26279_26305[(1)] = (11));

} else {
var statearr_26280_26306 = state_26257__$1;
(statearr_26280_26306[(1)] = (12));

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
});})(c__20669__auto___26288,ch))
;
return ((function (switch__20604__auto__,c__20669__auto___26288,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20605__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20605__auto____0 = (function (){
var statearr_26284 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26284[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20605__auto__);

(statearr_26284[(1)] = (1));

return statearr_26284;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20605__auto____1 = (function (state_26257){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_26257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e26285){if((e26285 instanceof Object)){
var ex__20608__auto__ = e26285;
var statearr_26286_26307 = state_26257;
(statearr_26286_26307[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26308 = state_26257;
state_26257 = G__26308;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20605__auto__ = function(state_26257){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20605__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20605__auto____1.call(this,state_26257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20605__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20605__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___26288,ch))
})();
var state__20671__auto__ = (function (){var statearr_26287 = f__20670__auto__.call(null);
(statearr_26287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___26288);

return statearr_26287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___26288,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26309_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26309_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26316 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26316){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26314 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26315 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26314,_STAR_print_newline_STAR_26315,base_path_26316){
return (function() { 
var G__26317__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26318__i = 0, G__26318__a = new Array(arguments.length -  0);
while (G__26318__i < G__26318__a.length) {G__26318__a[G__26318__i] = arguments[G__26318__i + 0]; ++G__26318__i;}
  args = new cljs.core.IndexedSeq(G__26318__a,0);
} 
return G__26317__delegate.call(this,args);};
G__26317.cljs$lang$maxFixedArity = 0;
G__26317.cljs$lang$applyTo = (function (arglist__26319){
var args = cljs.core.seq(arglist__26319);
return G__26317__delegate(args);
});
G__26317.cljs$core$IFn$_invoke$arity$variadic = G__26317__delegate;
return G__26317;
})()
;})(_STAR_print_fn_STAR_26314,_STAR_print_newline_STAR_26315,base_path_26316))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26315;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26314;
}}catch (e26313){if((e26313 instanceof Error)){
var e = e26313;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26316], null));
} else {
var e = e26313;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26316))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26320){
var map__26327 = p__26320;
var map__26327__$1 = ((((!((map__26327 == null)))?((((map__26327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26327):map__26327);
var opts = map__26327__$1;
var build_id = cljs.core.get.call(null,map__26327__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26327,map__26327__$1,opts,build_id){
return (function (p__26329){
var vec__26330 = p__26329;
var map__26331 = cljs.core.nth.call(null,vec__26330,(0),null);
var map__26331__$1 = ((((!((map__26331 == null)))?((((map__26331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26331):map__26331);
var msg = map__26331__$1;
var msg_name = cljs.core.get.call(null,map__26331__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26330,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26330,map__26331,map__26331__$1,msg,msg_name,_,map__26327,map__26327__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26330,map__26331,map__26331__$1,msg,msg_name,_,map__26327,map__26327__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26327,map__26327__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26337){
var vec__26338 = p__26337;
var map__26339 = cljs.core.nth.call(null,vec__26338,(0),null);
var map__26339__$1 = ((((!((map__26339 == null)))?((((map__26339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26339):map__26339);
var msg = map__26339__$1;
var msg_name = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26338,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26341){
var map__26351 = p__26341;
var map__26351__$1 = ((((!((map__26351 == null)))?((((map__26351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26351):map__26351);
var on_compile_warning = cljs.core.get.call(null,map__26351__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26351__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26351,map__26351__$1,on_compile_warning,on_compile_fail){
return (function (p__26353){
var vec__26354 = p__26353;
var map__26355 = cljs.core.nth.call(null,vec__26354,(0),null);
var map__26355__$1 = ((((!((map__26355 == null)))?((((map__26355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26355):map__26355);
var msg = map__26355__$1;
var msg_name = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26354,(1));
var pred__26357 = cljs.core._EQ_;
var expr__26358 = msg_name;
if(cljs.core.truth_(pred__26357.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26358))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26357.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26358))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26351,map__26351__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__,msg_hist,msg_names,msg){
return (function (state_26574){
var state_val_26575 = (state_26574[(1)]);
if((state_val_26575 === (7))){
var inst_26498 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26498)){
var statearr_26576_26622 = state_26574__$1;
(statearr_26576_26622[(1)] = (8));

} else {
var statearr_26577_26623 = state_26574__$1;
(statearr_26577_26623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (20))){
var inst_26568 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26578_26624 = state_26574__$1;
(statearr_26578_26624[(2)] = inst_26568);

(statearr_26578_26624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (27))){
var inst_26564 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26579_26625 = state_26574__$1;
(statearr_26579_26625[(2)] = inst_26564);

(statearr_26579_26625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (1))){
var inst_26491 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26491)){
var statearr_26580_26626 = state_26574__$1;
(statearr_26580_26626[(1)] = (2));

} else {
var statearr_26581_26627 = state_26574__$1;
(statearr_26581_26627[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (24))){
var inst_26566 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26582_26628 = state_26574__$1;
(statearr_26582_26628[(2)] = inst_26566);

(statearr_26582_26628[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (4))){
var inst_26572 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26574__$1,inst_26572);
} else {
if((state_val_26575 === (15))){
var inst_26570 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26583_26629 = state_26574__$1;
(statearr_26583_26629[(2)] = inst_26570);

(statearr_26583_26629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (21))){
var inst_26529 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26584_26630 = state_26574__$1;
(statearr_26584_26630[(2)] = inst_26529);

(statearr_26584_26630[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (31))){
var inst_26553 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26553)){
var statearr_26585_26631 = state_26574__$1;
(statearr_26585_26631[(1)] = (34));

} else {
var statearr_26586_26632 = state_26574__$1;
(statearr_26586_26632[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (32))){
var inst_26562 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26587_26633 = state_26574__$1;
(statearr_26587_26633[(2)] = inst_26562);

(statearr_26587_26633[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (33))){
var inst_26551 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26588_26634 = state_26574__$1;
(statearr_26588_26634[(2)] = inst_26551);

(statearr_26588_26634[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (13))){
var inst_26512 = figwheel.client.heads_up.clear.call(null);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26574__$1,(16),inst_26512);
} else {
if((state_val_26575 === (22))){
var inst_26533 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26534 = figwheel.client.heads_up.append_message.call(null,inst_26533);
var state_26574__$1 = state_26574;
var statearr_26589_26635 = state_26574__$1;
(statearr_26589_26635[(2)] = inst_26534);

(statearr_26589_26635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (36))){
var inst_26560 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26590_26636 = state_26574__$1;
(statearr_26590_26636[(2)] = inst_26560);

(statearr_26590_26636[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (29))){
var inst_26544 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26591_26637 = state_26574__$1;
(statearr_26591_26637[(2)] = inst_26544);

(statearr_26591_26637[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (6))){
var inst_26493 = (state_26574[(7)]);
var state_26574__$1 = state_26574;
var statearr_26592_26638 = state_26574__$1;
(statearr_26592_26638[(2)] = inst_26493);

(statearr_26592_26638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (28))){
var inst_26540 = (state_26574[(2)]);
var inst_26541 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26542 = figwheel.client.heads_up.display_warning.call(null,inst_26541);
var state_26574__$1 = (function (){var statearr_26593 = state_26574;
(statearr_26593[(8)] = inst_26540);

return statearr_26593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26574__$1,(29),inst_26542);
} else {
if((state_val_26575 === (25))){
var inst_26538 = figwheel.client.heads_up.clear.call(null);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26574__$1,(28),inst_26538);
} else {
if((state_val_26575 === (34))){
var inst_26555 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26574__$1,(37),inst_26555);
} else {
if((state_val_26575 === (17))){
var inst_26520 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26594_26639 = state_26574__$1;
(statearr_26594_26639[(2)] = inst_26520);

(statearr_26594_26639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (3))){
var inst_26510 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26510)){
var statearr_26595_26640 = state_26574__$1;
(statearr_26595_26640[(1)] = (13));

} else {
var statearr_26596_26641 = state_26574__$1;
(statearr_26596_26641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (12))){
var inst_26506 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26597_26642 = state_26574__$1;
(statearr_26597_26642[(2)] = inst_26506);

(statearr_26597_26642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (2))){
var inst_26493 = (state_26574[(7)]);
var inst_26493__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26574__$1 = (function (){var statearr_26598 = state_26574;
(statearr_26598[(7)] = inst_26493__$1);

return statearr_26598;
})();
if(cljs.core.truth_(inst_26493__$1)){
var statearr_26599_26643 = state_26574__$1;
(statearr_26599_26643[(1)] = (5));

} else {
var statearr_26600_26644 = state_26574__$1;
(statearr_26600_26644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (23))){
var inst_26536 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26536)){
var statearr_26601_26645 = state_26574__$1;
(statearr_26601_26645[(1)] = (25));

} else {
var statearr_26602_26646 = state_26574__$1;
(statearr_26602_26646[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (35))){
var state_26574__$1 = state_26574;
var statearr_26603_26647 = state_26574__$1;
(statearr_26603_26647[(2)] = null);

(statearr_26603_26647[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (19))){
var inst_26531 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26531)){
var statearr_26604_26648 = state_26574__$1;
(statearr_26604_26648[(1)] = (22));

} else {
var statearr_26605_26649 = state_26574__$1;
(statearr_26605_26649[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (11))){
var inst_26502 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26606_26650 = state_26574__$1;
(statearr_26606_26650[(2)] = inst_26502);

(statearr_26606_26650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (9))){
var inst_26504 = figwheel.client.heads_up.clear.call(null);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26574__$1,(12),inst_26504);
} else {
if((state_val_26575 === (5))){
var inst_26495 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26574__$1 = state_26574;
var statearr_26607_26651 = state_26574__$1;
(statearr_26607_26651[(2)] = inst_26495);

(statearr_26607_26651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (14))){
var inst_26522 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26522)){
var statearr_26608_26652 = state_26574__$1;
(statearr_26608_26652[(1)] = (18));

} else {
var statearr_26609_26653 = state_26574__$1;
(statearr_26609_26653[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (26))){
var inst_26546 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26546)){
var statearr_26610_26654 = state_26574__$1;
(statearr_26610_26654[(1)] = (30));

} else {
var statearr_26611_26655 = state_26574__$1;
(statearr_26611_26655[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (16))){
var inst_26514 = (state_26574[(2)]);
var inst_26515 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26516 = figwheel.client.format_messages.call(null,inst_26515);
var inst_26517 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26518 = figwheel.client.heads_up.display_error.call(null,inst_26516,inst_26517);
var state_26574__$1 = (function (){var statearr_26612 = state_26574;
(statearr_26612[(9)] = inst_26514);

return statearr_26612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26574__$1,(17),inst_26518);
} else {
if((state_val_26575 === (30))){
var inst_26548 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26549 = figwheel.client.heads_up.display_warning.call(null,inst_26548);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26574__$1,(33),inst_26549);
} else {
if((state_val_26575 === (10))){
var inst_26508 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26613_26656 = state_26574__$1;
(statearr_26613_26656[(2)] = inst_26508);

(statearr_26613_26656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (18))){
var inst_26524 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26525 = figwheel.client.format_messages.call(null,inst_26524);
var inst_26526 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26527 = figwheel.client.heads_up.display_error.call(null,inst_26525,inst_26526);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26574__$1,(21),inst_26527);
} else {
if((state_val_26575 === (37))){
var inst_26557 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26614_26657 = state_26574__$1;
(statearr_26614_26657[(2)] = inst_26557);

(statearr_26614_26657[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (8))){
var inst_26500 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26574__$1,(11),inst_26500);
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
});})(c__20669__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20604__auto__,c__20669__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto____0 = (function (){
var statearr_26618 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26618[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto__);

(statearr_26618[(1)] = (1));

return statearr_26618;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto____1 = (function (state_26574){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_26574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e26619){if((e26619 instanceof Object)){
var ex__20608__auto__ = e26619;
var statearr_26620_26658 = state_26574;
(statearr_26620_26658[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26659 = state_26574;
state_26574 = G__26659;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto__ = function(state_26574){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto____1.call(this,state_26574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__,msg_hist,msg_names,msg))
})();
var state__20671__auto__ = (function (){var statearr_26621 = f__20670__auto__.call(null);
(statearr_26621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_26621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__,msg_hist,msg_names,msg))
);

return c__20669__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20669__auto___26722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto___26722,ch){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto___26722,ch){
return (function (state_26705){
var state_val_26706 = (state_26705[(1)]);
if((state_val_26706 === (1))){
var state_26705__$1 = state_26705;
var statearr_26707_26723 = state_26705__$1;
(statearr_26707_26723[(2)] = null);

(statearr_26707_26723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (2))){
var state_26705__$1 = state_26705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26705__$1,(4),ch);
} else {
if((state_val_26706 === (3))){
var inst_26703 = (state_26705[(2)]);
var state_26705__$1 = state_26705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26705__$1,inst_26703);
} else {
if((state_val_26706 === (4))){
var inst_26693 = (state_26705[(7)]);
var inst_26693__$1 = (state_26705[(2)]);
var state_26705__$1 = (function (){var statearr_26708 = state_26705;
(statearr_26708[(7)] = inst_26693__$1);

return statearr_26708;
})();
if(cljs.core.truth_(inst_26693__$1)){
var statearr_26709_26724 = state_26705__$1;
(statearr_26709_26724[(1)] = (5));

} else {
var statearr_26710_26725 = state_26705__$1;
(statearr_26710_26725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (5))){
var inst_26693 = (state_26705[(7)]);
var inst_26695 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26693);
var state_26705__$1 = state_26705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26705__$1,(8),inst_26695);
} else {
if((state_val_26706 === (6))){
var state_26705__$1 = state_26705;
var statearr_26711_26726 = state_26705__$1;
(statearr_26711_26726[(2)] = null);

(statearr_26711_26726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (7))){
var inst_26701 = (state_26705[(2)]);
var state_26705__$1 = state_26705;
var statearr_26712_26727 = state_26705__$1;
(statearr_26712_26727[(2)] = inst_26701);

(statearr_26712_26727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (8))){
var inst_26697 = (state_26705[(2)]);
var state_26705__$1 = (function (){var statearr_26713 = state_26705;
(statearr_26713[(8)] = inst_26697);

return statearr_26713;
})();
var statearr_26714_26728 = state_26705__$1;
(statearr_26714_26728[(2)] = null);

(statearr_26714_26728[(1)] = (2));


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
});})(c__20669__auto___26722,ch))
;
return ((function (switch__20604__auto__,c__20669__auto___26722,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20605__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20605__auto____0 = (function (){
var statearr_26718 = [null,null,null,null,null,null,null,null,null];
(statearr_26718[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20605__auto__);

(statearr_26718[(1)] = (1));

return statearr_26718;
});
var figwheel$client$heads_up_plugin_$_state_machine__20605__auto____1 = (function (state_26705){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_26705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e26719){if((e26719 instanceof Object)){
var ex__20608__auto__ = e26719;
var statearr_26720_26729 = state_26705;
(statearr_26720_26729[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26730 = state_26705;
state_26705 = G__26730;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20605__auto__ = function(state_26705){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20605__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20605__auto____1.call(this,state_26705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20605__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20605__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto___26722,ch))
})();
var state__20671__auto__ = (function (){var statearr_26721 = f__20670__auto__.call(null);
(statearr_26721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto___26722);

return statearr_26721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto___26722,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__){
return (function (state_26751){
var state_val_26752 = (state_26751[(1)]);
if((state_val_26752 === (1))){
var inst_26746 = cljs.core.async.timeout.call(null,(3000));
var state_26751__$1 = state_26751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26751__$1,(2),inst_26746);
} else {
if((state_val_26752 === (2))){
var inst_26748 = (state_26751[(2)]);
var inst_26749 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26751__$1 = (function (){var statearr_26753 = state_26751;
(statearr_26753[(7)] = inst_26748);

return statearr_26753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26751__$1,inst_26749);
} else {
return null;
}
}
});})(c__20669__auto__))
;
return ((function (switch__20604__auto__,c__20669__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20605__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20605__auto____0 = (function (){
var statearr_26757 = [null,null,null,null,null,null,null,null];
(statearr_26757[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20605__auto__);

(statearr_26757[(1)] = (1));

return statearr_26757;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20605__auto____1 = (function (state_26751){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_26751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e26758){if((e26758 instanceof Object)){
var ex__20608__auto__ = e26758;
var statearr_26759_26761 = state_26751;
(statearr_26759_26761[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26762 = state_26751;
state_26751 = G__26762;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20605__auto__ = function(state_26751){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20605__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20605__auto____1.call(this,state_26751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20605__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20605__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__))
})();
var state__20671__auto__ = (function (){var statearr_26760 = f__20670__auto__.call(null);
(statearr_26760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_26760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__))
);

return c__20669__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26763){
var map__26770 = p__26763;
var map__26770__$1 = ((((!((map__26770 == null)))?((((map__26770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26770):map__26770);
var ed = map__26770__$1;
var formatted_exception = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26772_26776 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26773_26777 = null;
var count__26774_26778 = (0);
var i__26775_26779 = (0);
while(true){
if((i__26775_26779 < count__26774_26778)){
var msg_26780 = cljs.core._nth.call(null,chunk__26773_26777,i__26775_26779);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26780);

var G__26781 = seq__26772_26776;
var G__26782 = chunk__26773_26777;
var G__26783 = count__26774_26778;
var G__26784 = (i__26775_26779 + (1));
seq__26772_26776 = G__26781;
chunk__26773_26777 = G__26782;
count__26774_26778 = G__26783;
i__26775_26779 = G__26784;
continue;
} else {
var temp__4657__auto___26785 = cljs.core.seq.call(null,seq__26772_26776);
if(temp__4657__auto___26785){
var seq__26772_26786__$1 = temp__4657__auto___26785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26772_26786__$1)){
var c__17578__auto___26787 = cljs.core.chunk_first.call(null,seq__26772_26786__$1);
var G__26788 = cljs.core.chunk_rest.call(null,seq__26772_26786__$1);
var G__26789 = c__17578__auto___26787;
var G__26790 = cljs.core.count.call(null,c__17578__auto___26787);
var G__26791 = (0);
seq__26772_26776 = G__26788;
chunk__26773_26777 = G__26789;
count__26774_26778 = G__26790;
i__26775_26779 = G__26791;
continue;
} else {
var msg_26792 = cljs.core.first.call(null,seq__26772_26786__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26792);

var G__26793 = cljs.core.next.call(null,seq__26772_26786__$1);
var G__26794 = null;
var G__26795 = (0);
var G__26796 = (0);
seq__26772_26776 = G__26793;
chunk__26773_26777 = G__26794;
count__26774_26778 = G__26795;
i__26775_26779 = G__26796;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26797){
var map__26800 = p__26797;
var map__26800__$1 = ((((!((map__26800 == null)))?((((map__26800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26800):map__26800);
var w = map__26800__$1;
var message = cljs.core.get.call(null,map__26800__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16763__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16763__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16763__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26808 = cljs.core.seq.call(null,plugins);
var chunk__26809 = null;
var count__26810 = (0);
var i__26811 = (0);
while(true){
if((i__26811 < count__26810)){
var vec__26812 = cljs.core._nth.call(null,chunk__26809,i__26811);
var k = cljs.core.nth.call(null,vec__26812,(0),null);
var plugin = cljs.core.nth.call(null,vec__26812,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26814 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26808,chunk__26809,count__26810,i__26811,pl_26814,vec__26812,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26814.call(null,msg_hist);
});})(seq__26808,chunk__26809,count__26810,i__26811,pl_26814,vec__26812,k,plugin))
);
} else {
}

var G__26815 = seq__26808;
var G__26816 = chunk__26809;
var G__26817 = count__26810;
var G__26818 = (i__26811 + (1));
seq__26808 = G__26815;
chunk__26809 = G__26816;
count__26810 = G__26817;
i__26811 = G__26818;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26808);
if(temp__4657__auto__){
var seq__26808__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26808__$1)){
var c__17578__auto__ = cljs.core.chunk_first.call(null,seq__26808__$1);
var G__26819 = cljs.core.chunk_rest.call(null,seq__26808__$1);
var G__26820 = c__17578__auto__;
var G__26821 = cljs.core.count.call(null,c__17578__auto__);
var G__26822 = (0);
seq__26808 = G__26819;
chunk__26809 = G__26820;
count__26810 = G__26821;
i__26811 = G__26822;
continue;
} else {
var vec__26813 = cljs.core.first.call(null,seq__26808__$1);
var k = cljs.core.nth.call(null,vec__26813,(0),null);
var plugin = cljs.core.nth.call(null,vec__26813,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26823 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26808,chunk__26809,count__26810,i__26811,pl_26823,vec__26813,k,plugin,seq__26808__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26823.call(null,msg_hist);
});})(seq__26808,chunk__26809,count__26810,i__26811,pl_26823,vec__26813,k,plugin,seq__26808__$1,temp__4657__auto__))
);
} else {
}

var G__26824 = cljs.core.next.call(null,seq__26808__$1);
var G__26825 = null;
var G__26826 = (0);
var G__26827 = (0);
seq__26808 = G__26824;
chunk__26809 = G__26825;
count__26810 = G__26826;
i__26811 = G__26827;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26828 = [];
var len__17833__auto___26831 = arguments.length;
var i__17834__auto___26832 = (0);
while(true){
if((i__17834__auto___26832 < len__17833__auto___26831)){
args26828.push((arguments[i__17834__auto___26832]));

var G__26833 = (i__17834__auto___26832 + (1));
i__17834__auto___26832 = G__26833;
continue;
} else {
}
break;
}

var G__26830 = args26828.length;
switch (G__26830) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26828.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17840__auto__ = [];
var len__17833__auto___26839 = arguments.length;
var i__17834__auto___26840 = (0);
while(true){
if((i__17834__auto___26840 < len__17833__auto___26839)){
args__17840__auto__.push((arguments[i__17834__auto___26840]));

var G__26841 = (i__17834__auto___26840 + (1));
i__17834__auto___26840 = G__26841;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((0) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17841__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26836){
var map__26837 = p__26836;
var map__26837__$1 = ((((!((map__26837 == null)))?((((map__26837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26837):map__26837);
var opts = map__26837__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26835){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26835));
});

//# sourceMappingURL=client.js.map