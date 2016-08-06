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
var pred__25803 = cljs.core._EQ_;
var expr__25804 = (function (){var or__16775__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25803.call(null,"true",expr__25804))){
return true;
} else {
if(cljs.core.truth_(pred__25803.call(null,"false",expr__25804))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25804)].join('')));
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
var G__25806__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25807__i = 0, G__25807__a = new Array(arguments.length -  0);
while (G__25807__i < G__25807__a.length) {G__25807__a[G__25807__i] = arguments[G__25807__i + 0]; ++G__25807__i;}
  args = new cljs.core.IndexedSeq(G__25807__a,0);
} 
return G__25806__delegate.call(this,args);};
G__25806.cljs$lang$maxFixedArity = 0;
G__25806.cljs$lang$applyTo = (function (arglist__25808){
var args = cljs.core.seq(arglist__25808);
return G__25806__delegate(args);
});
G__25806.cljs$core$IFn$_invoke$arity$variadic = G__25806__delegate;
return G__25806;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25809){
var map__25812 = p__25809;
var map__25812__$1 = ((((!((map__25812 == null)))?((((map__25812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25812):map__25812);
var message = cljs.core.get.call(null,map__25812__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25812__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20691__auto___25974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___25974,ch){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___25974,ch){
return (function (state_25943){
var state_val_25944 = (state_25943[(1)]);
if((state_val_25944 === (7))){
var inst_25939 = (state_25943[(2)]);
var state_25943__$1 = state_25943;
var statearr_25945_25975 = state_25943__$1;
(statearr_25945_25975[(2)] = inst_25939);

(statearr_25945_25975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (1))){
var state_25943__$1 = state_25943;
var statearr_25946_25976 = state_25943__$1;
(statearr_25946_25976[(2)] = null);

(statearr_25946_25976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (4))){
var inst_25896 = (state_25943[(7)]);
var inst_25896__$1 = (state_25943[(2)]);
var state_25943__$1 = (function (){var statearr_25947 = state_25943;
(statearr_25947[(7)] = inst_25896__$1);

return statearr_25947;
})();
if(cljs.core.truth_(inst_25896__$1)){
var statearr_25948_25977 = state_25943__$1;
(statearr_25948_25977[(1)] = (5));

} else {
var statearr_25949_25978 = state_25943__$1;
(statearr_25949_25978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (15))){
var inst_25903 = (state_25943[(8)]);
var inst_25918 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25903);
var inst_25919 = cljs.core.first.call(null,inst_25918);
var inst_25920 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25919);
var inst_25921 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25920)].join('');
var inst_25922 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25921);
var state_25943__$1 = state_25943;
var statearr_25950_25979 = state_25943__$1;
(statearr_25950_25979[(2)] = inst_25922);

(statearr_25950_25979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (13))){
var inst_25927 = (state_25943[(2)]);
var state_25943__$1 = state_25943;
var statearr_25951_25980 = state_25943__$1;
(statearr_25951_25980[(2)] = inst_25927);

(statearr_25951_25980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (6))){
var state_25943__$1 = state_25943;
var statearr_25952_25981 = state_25943__$1;
(statearr_25952_25981[(2)] = null);

(statearr_25952_25981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (17))){
var inst_25925 = (state_25943[(2)]);
var state_25943__$1 = state_25943;
var statearr_25953_25982 = state_25943__$1;
(statearr_25953_25982[(2)] = inst_25925);

(statearr_25953_25982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (3))){
var inst_25941 = (state_25943[(2)]);
var state_25943__$1 = state_25943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25943__$1,inst_25941);
} else {
if((state_val_25944 === (12))){
var inst_25902 = (state_25943[(9)]);
var inst_25916 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25902,opts);
var state_25943__$1 = state_25943;
if(cljs.core.truth_(inst_25916)){
var statearr_25954_25983 = state_25943__$1;
(statearr_25954_25983[(1)] = (15));

} else {
var statearr_25955_25984 = state_25943__$1;
(statearr_25955_25984[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (2))){
var state_25943__$1 = state_25943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25943__$1,(4),ch);
} else {
if((state_val_25944 === (11))){
var inst_25903 = (state_25943[(8)]);
var inst_25908 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25909 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25903);
var inst_25910 = cljs.core.async.timeout.call(null,(1000));
var inst_25911 = [inst_25909,inst_25910];
var inst_25912 = (new cljs.core.PersistentVector(null,2,(5),inst_25908,inst_25911,null));
var state_25943__$1 = state_25943;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25943__$1,(14),inst_25912);
} else {
if((state_val_25944 === (9))){
var inst_25903 = (state_25943[(8)]);
var inst_25929 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25930 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25903);
var inst_25931 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25930);
var inst_25932 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25931)].join('');
var inst_25933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25932);
var state_25943__$1 = (function (){var statearr_25956 = state_25943;
(statearr_25956[(10)] = inst_25929);

return statearr_25956;
})();
var statearr_25957_25985 = state_25943__$1;
(statearr_25957_25985[(2)] = inst_25933);

(statearr_25957_25985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (5))){
var inst_25896 = (state_25943[(7)]);
var inst_25898 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25899 = (new cljs.core.PersistentArrayMap(null,2,inst_25898,null));
var inst_25900 = (new cljs.core.PersistentHashSet(null,inst_25899,null));
var inst_25901 = figwheel.client.focus_msgs.call(null,inst_25900,inst_25896);
var inst_25902 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25901);
var inst_25903 = cljs.core.first.call(null,inst_25901);
var inst_25904 = figwheel.client.autoload_QMARK_.call(null);
var state_25943__$1 = (function (){var statearr_25958 = state_25943;
(statearr_25958[(9)] = inst_25902);

(statearr_25958[(8)] = inst_25903);

return statearr_25958;
})();
if(cljs.core.truth_(inst_25904)){
var statearr_25959_25986 = state_25943__$1;
(statearr_25959_25986[(1)] = (8));

} else {
var statearr_25960_25987 = state_25943__$1;
(statearr_25960_25987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (14))){
var inst_25914 = (state_25943[(2)]);
var state_25943__$1 = state_25943;
var statearr_25961_25988 = state_25943__$1;
(statearr_25961_25988[(2)] = inst_25914);

(statearr_25961_25988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (16))){
var state_25943__$1 = state_25943;
var statearr_25962_25989 = state_25943__$1;
(statearr_25962_25989[(2)] = null);

(statearr_25962_25989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (10))){
var inst_25935 = (state_25943[(2)]);
var state_25943__$1 = (function (){var statearr_25963 = state_25943;
(statearr_25963[(11)] = inst_25935);

return statearr_25963;
})();
var statearr_25964_25990 = state_25943__$1;
(statearr_25964_25990[(2)] = null);

(statearr_25964_25990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (8))){
var inst_25902 = (state_25943[(9)]);
var inst_25906 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25902,opts);
var state_25943__$1 = state_25943;
if(cljs.core.truth_(inst_25906)){
var statearr_25965_25991 = state_25943__$1;
(statearr_25965_25991[(1)] = (11));

} else {
var statearr_25966_25992 = state_25943__$1;
(statearr_25966_25992[(1)] = (12));

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
});})(c__20691__auto___25974,ch))
;
return ((function (switch__20626__auto__,c__20691__auto___25974,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20627__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20627__auto____0 = (function (){
var statearr_25970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25970[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20627__auto__);

(statearr_25970[(1)] = (1));

return statearr_25970;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20627__auto____1 = (function (state_25943){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_25943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e25971){if((e25971 instanceof Object)){
var ex__20630__auto__ = e25971;
var statearr_25972_25993 = state_25943;
(statearr_25972_25993[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25994 = state_25943;
state_25943 = G__25994;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20627__auto__ = function(state_25943){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20627__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20627__auto____1.call(this,state_25943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20627__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20627__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___25974,ch))
})();
var state__20693__auto__ = (function (){var statearr_25973 = f__20692__auto__.call(null);
(statearr_25973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___25974);

return statearr_25973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___25974,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25995_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25995_SHARP_));
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
var base_path_26002 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26002){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26000 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26001 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26000,_STAR_print_newline_STAR_26001,base_path_26002){
return (function() { 
var G__26003__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26004__i = 0, G__26004__a = new Array(arguments.length -  0);
while (G__26004__i < G__26004__a.length) {G__26004__a[G__26004__i] = arguments[G__26004__i + 0]; ++G__26004__i;}
  args = new cljs.core.IndexedSeq(G__26004__a,0);
} 
return G__26003__delegate.call(this,args);};
G__26003.cljs$lang$maxFixedArity = 0;
G__26003.cljs$lang$applyTo = (function (arglist__26005){
var args = cljs.core.seq(arglist__26005);
return G__26003__delegate(args);
});
G__26003.cljs$core$IFn$_invoke$arity$variadic = G__26003__delegate;
return G__26003;
})()
;})(_STAR_print_fn_STAR_26000,_STAR_print_newline_STAR_26001,base_path_26002))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26001;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26000;
}}catch (e25999){if((e25999 instanceof Error)){
var e = e25999;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26002], null));
} else {
var e = e25999;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26002))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26006){
var map__26013 = p__26006;
var map__26013__$1 = ((((!((map__26013 == null)))?((((map__26013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26013):map__26013);
var opts = map__26013__$1;
var build_id = cljs.core.get.call(null,map__26013__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26013,map__26013__$1,opts,build_id){
return (function (p__26015){
var vec__26016 = p__26015;
var map__26017 = cljs.core.nth.call(null,vec__26016,(0),null);
var map__26017__$1 = ((((!((map__26017 == null)))?((((map__26017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26017):map__26017);
var msg = map__26017__$1;
var msg_name = cljs.core.get.call(null,map__26017__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26016,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26016,map__26017,map__26017__$1,msg,msg_name,_,map__26013,map__26013__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26016,map__26017,map__26017__$1,msg,msg_name,_,map__26013,map__26013__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26013,map__26013__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26023){
var vec__26024 = p__26023;
var map__26025 = cljs.core.nth.call(null,vec__26024,(0),null);
var map__26025__$1 = ((((!((map__26025 == null)))?((((map__26025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26025):map__26025);
var msg = map__26025__$1;
var msg_name = cljs.core.get.call(null,map__26025__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26024,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26027){
var map__26037 = p__26027;
var map__26037__$1 = ((((!((map__26037 == null)))?((((map__26037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26037):map__26037);
var on_compile_warning = cljs.core.get.call(null,map__26037__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26037__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26037,map__26037__$1,on_compile_warning,on_compile_fail){
return (function (p__26039){
var vec__26040 = p__26039;
var map__26041 = cljs.core.nth.call(null,vec__26040,(0),null);
var map__26041__$1 = ((((!((map__26041 == null)))?((((map__26041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26041):map__26041);
var msg = map__26041__$1;
var msg_name = cljs.core.get.call(null,map__26041__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26040,(1));
var pred__26043 = cljs.core._EQ_;
var expr__26044 = msg_name;
if(cljs.core.truth_(pred__26043.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26044))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26043.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26044))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26037,map__26037__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto__,msg_hist,msg_names,msg){
return (function (state_26260){
var state_val_26261 = (state_26260[(1)]);
if((state_val_26261 === (7))){
var inst_26184 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
if(cljs.core.truth_(inst_26184)){
var statearr_26262_26308 = state_26260__$1;
(statearr_26262_26308[(1)] = (8));

} else {
var statearr_26263_26309 = state_26260__$1;
(statearr_26263_26309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (20))){
var inst_26254 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26264_26310 = state_26260__$1;
(statearr_26264_26310[(2)] = inst_26254);

(statearr_26264_26310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (27))){
var inst_26250 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26265_26311 = state_26260__$1;
(statearr_26265_26311[(2)] = inst_26250);

(statearr_26265_26311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (1))){
var inst_26177 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26260__$1 = state_26260;
if(cljs.core.truth_(inst_26177)){
var statearr_26266_26312 = state_26260__$1;
(statearr_26266_26312[(1)] = (2));

} else {
var statearr_26267_26313 = state_26260__$1;
(statearr_26267_26313[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (24))){
var inst_26252 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26268_26314 = state_26260__$1;
(statearr_26268_26314[(2)] = inst_26252);

(statearr_26268_26314[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (4))){
var inst_26258 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26260__$1,inst_26258);
} else {
if((state_val_26261 === (15))){
var inst_26256 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26269_26315 = state_26260__$1;
(statearr_26269_26315[(2)] = inst_26256);

(statearr_26269_26315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (21))){
var inst_26215 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26270_26316 = state_26260__$1;
(statearr_26270_26316[(2)] = inst_26215);

(statearr_26270_26316[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (31))){
var inst_26239 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26260__$1 = state_26260;
if(cljs.core.truth_(inst_26239)){
var statearr_26271_26317 = state_26260__$1;
(statearr_26271_26317[(1)] = (34));

} else {
var statearr_26272_26318 = state_26260__$1;
(statearr_26272_26318[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (32))){
var inst_26248 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26273_26319 = state_26260__$1;
(statearr_26273_26319[(2)] = inst_26248);

(statearr_26273_26319[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (33))){
var inst_26237 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26274_26320 = state_26260__$1;
(statearr_26274_26320[(2)] = inst_26237);

(statearr_26274_26320[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (13))){
var inst_26198 = figwheel.client.heads_up.clear.call(null);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(16),inst_26198);
} else {
if((state_val_26261 === (22))){
var inst_26219 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26220 = figwheel.client.heads_up.append_message.call(null,inst_26219);
var state_26260__$1 = state_26260;
var statearr_26275_26321 = state_26260__$1;
(statearr_26275_26321[(2)] = inst_26220);

(statearr_26275_26321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (36))){
var inst_26246 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26276_26322 = state_26260__$1;
(statearr_26276_26322[(2)] = inst_26246);

(statearr_26276_26322[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (29))){
var inst_26230 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26277_26323 = state_26260__$1;
(statearr_26277_26323[(2)] = inst_26230);

(statearr_26277_26323[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (6))){
var inst_26179 = (state_26260[(7)]);
var state_26260__$1 = state_26260;
var statearr_26278_26324 = state_26260__$1;
(statearr_26278_26324[(2)] = inst_26179);

(statearr_26278_26324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (28))){
var inst_26226 = (state_26260[(2)]);
var inst_26227 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26228 = figwheel.client.heads_up.display_warning.call(null,inst_26227);
var state_26260__$1 = (function (){var statearr_26279 = state_26260;
(statearr_26279[(8)] = inst_26226);

return statearr_26279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(29),inst_26228);
} else {
if((state_val_26261 === (25))){
var inst_26224 = figwheel.client.heads_up.clear.call(null);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(28),inst_26224);
} else {
if((state_val_26261 === (34))){
var inst_26241 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(37),inst_26241);
} else {
if((state_val_26261 === (17))){
var inst_26206 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26280_26325 = state_26260__$1;
(statearr_26280_26325[(2)] = inst_26206);

(statearr_26280_26325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (3))){
var inst_26196 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26260__$1 = state_26260;
if(cljs.core.truth_(inst_26196)){
var statearr_26281_26326 = state_26260__$1;
(statearr_26281_26326[(1)] = (13));

} else {
var statearr_26282_26327 = state_26260__$1;
(statearr_26282_26327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (12))){
var inst_26192 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26283_26328 = state_26260__$1;
(statearr_26283_26328[(2)] = inst_26192);

(statearr_26283_26328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (2))){
var inst_26179 = (state_26260[(7)]);
var inst_26179__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26260__$1 = (function (){var statearr_26284 = state_26260;
(statearr_26284[(7)] = inst_26179__$1);

return statearr_26284;
})();
if(cljs.core.truth_(inst_26179__$1)){
var statearr_26285_26329 = state_26260__$1;
(statearr_26285_26329[(1)] = (5));

} else {
var statearr_26286_26330 = state_26260__$1;
(statearr_26286_26330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (23))){
var inst_26222 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26260__$1 = state_26260;
if(cljs.core.truth_(inst_26222)){
var statearr_26287_26331 = state_26260__$1;
(statearr_26287_26331[(1)] = (25));

} else {
var statearr_26288_26332 = state_26260__$1;
(statearr_26288_26332[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (35))){
var state_26260__$1 = state_26260;
var statearr_26289_26333 = state_26260__$1;
(statearr_26289_26333[(2)] = null);

(statearr_26289_26333[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (19))){
var inst_26217 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26260__$1 = state_26260;
if(cljs.core.truth_(inst_26217)){
var statearr_26290_26334 = state_26260__$1;
(statearr_26290_26334[(1)] = (22));

} else {
var statearr_26291_26335 = state_26260__$1;
(statearr_26291_26335[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (11))){
var inst_26188 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26292_26336 = state_26260__$1;
(statearr_26292_26336[(2)] = inst_26188);

(statearr_26292_26336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (9))){
var inst_26190 = figwheel.client.heads_up.clear.call(null);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(12),inst_26190);
} else {
if((state_val_26261 === (5))){
var inst_26181 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26260__$1 = state_26260;
var statearr_26293_26337 = state_26260__$1;
(statearr_26293_26337[(2)] = inst_26181);

(statearr_26293_26337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (14))){
var inst_26208 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26260__$1 = state_26260;
if(cljs.core.truth_(inst_26208)){
var statearr_26294_26338 = state_26260__$1;
(statearr_26294_26338[(1)] = (18));

} else {
var statearr_26295_26339 = state_26260__$1;
(statearr_26295_26339[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (26))){
var inst_26232 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26260__$1 = state_26260;
if(cljs.core.truth_(inst_26232)){
var statearr_26296_26340 = state_26260__$1;
(statearr_26296_26340[(1)] = (30));

} else {
var statearr_26297_26341 = state_26260__$1;
(statearr_26297_26341[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (16))){
var inst_26200 = (state_26260[(2)]);
var inst_26201 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26202 = figwheel.client.format_messages.call(null,inst_26201);
var inst_26203 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26204 = figwheel.client.heads_up.display_error.call(null,inst_26202,inst_26203);
var state_26260__$1 = (function (){var statearr_26298 = state_26260;
(statearr_26298[(9)] = inst_26200);

return statearr_26298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(17),inst_26204);
} else {
if((state_val_26261 === (30))){
var inst_26234 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26235 = figwheel.client.heads_up.display_warning.call(null,inst_26234);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(33),inst_26235);
} else {
if((state_val_26261 === (10))){
var inst_26194 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26299_26342 = state_26260__$1;
(statearr_26299_26342[(2)] = inst_26194);

(statearr_26299_26342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (18))){
var inst_26210 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26211 = figwheel.client.format_messages.call(null,inst_26210);
var inst_26212 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26213 = figwheel.client.heads_up.display_error.call(null,inst_26211,inst_26212);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(21),inst_26213);
} else {
if((state_val_26261 === (37))){
var inst_26243 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26300_26343 = state_26260__$1;
(statearr_26300_26343[(2)] = inst_26243);

(statearr_26300_26343[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (8))){
var inst_26186 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(11),inst_26186);
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
});})(c__20691__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20626__auto__,c__20691__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto____0 = (function (){
var statearr_26304 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26304[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto__);

(statearr_26304[(1)] = (1));

return statearr_26304;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto____1 = (function (state_26260){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_26260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e26305){if((e26305 instanceof Object)){
var ex__20630__auto__ = e26305;
var statearr_26306_26344 = state_26260;
(statearr_26306_26344[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26345 = state_26260;
state_26260 = G__26345;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto__ = function(state_26260){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto____1.call(this,state_26260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto__,msg_hist,msg_names,msg))
})();
var state__20693__auto__ = (function (){var statearr_26307 = f__20692__auto__.call(null);
(statearr_26307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto__);

return statearr_26307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto__,msg_hist,msg_names,msg))
);

return c__20691__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20691__auto___26408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto___26408,ch){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto___26408,ch){
return (function (state_26391){
var state_val_26392 = (state_26391[(1)]);
if((state_val_26392 === (1))){
var state_26391__$1 = state_26391;
var statearr_26393_26409 = state_26391__$1;
(statearr_26393_26409[(2)] = null);

(statearr_26393_26409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (2))){
var state_26391__$1 = state_26391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26391__$1,(4),ch);
} else {
if((state_val_26392 === (3))){
var inst_26389 = (state_26391[(2)]);
var state_26391__$1 = state_26391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26391__$1,inst_26389);
} else {
if((state_val_26392 === (4))){
var inst_26379 = (state_26391[(7)]);
var inst_26379__$1 = (state_26391[(2)]);
var state_26391__$1 = (function (){var statearr_26394 = state_26391;
(statearr_26394[(7)] = inst_26379__$1);

return statearr_26394;
})();
if(cljs.core.truth_(inst_26379__$1)){
var statearr_26395_26410 = state_26391__$1;
(statearr_26395_26410[(1)] = (5));

} else {
var statearr_26396_26411 = state_26391__$1;
(statearr_26396_26411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (5))){
var inst_26379 = (state_26391[(7)]);
var inst_26381 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26379);
var state_26391__$1 = state_26391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26391__$1,(8),inst_26381);
} else {
if((state_val_26392 === (6))){
var state_26391__$1 = state_26391;
var statearr_26397_26412 = state_26391__$1;
(statearr_26397_26412[(2)] = null);

(statearr_26397_26412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (7))){
var inst_26387 = (state_26391[(2)]);
var state_26391__$1 = state_26391;
var statearr_26398_26413 = state_26391__$1;
(statearr_26398_26413[(2)] = inst_26387);

(statearr_26398_26413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (8))){
var inst_26383 = (state_26391[(2)]);
var state_26391__$1 = (function (){var statearr_26399 = state_26391;
(statearr_26399[(8)] = inst_26383);

return statearr_26399;
})();
var statearr_26400_26414 = state_26391__$1;
(statearr_26400_26414[(2)] = null);

(statearr_26400_26414[(1)] = (2));


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
});})(c__20691__auto___26408,ch))
;
return ((function (switch__20626__auto__,c__20691__auto___26408,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20627__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20627__auto____0 = (function (){
var statearr_26404 = [null,null,null,null,null,null,null,null,null];
(statearr_26404[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20627__auto__);

(statearr_26404[(1)] = (1));

return statearr_26404;
});
var figwheel$client$heads_up_plugin_$_state_machine__20627__auto____1 = (function (state_26391){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_26391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e26405){if((e26405 instanceof Object)){
var ex__20630__auto__ = e26405;
var statearr_26406_26415 = state_26391;
(statearr_26406_26415[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26416 = state_26391;
state_26391 = G__26416;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20627__auto__ = function(state_26391){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20627__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20627__auto____1.call(this,state_26391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20627__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20627__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto___26408,ch))
})();
var state__20693__auto__ = (function (){var statearr_26407 = f__20692__auto__.call(null);
(statearr_26407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto___26408);

return statearr_26407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto___26408,ch))
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
var c__20691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20691__auto__){
return (function (){
var f__20692__auto__ = (function (){var switch__20626__auto__ = ((function (c__20691__auto__){
return (function (state_26437){
var state_val_26438 = (state_26437[(1)]);
if((state_val_26438 === (1))){
var inst_26432 = cljs.core.async.timeout.call(null,(3000));
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26437__$1,(2),inst_26432);
} else {
if((state_val_26438 === (2))){
var inst_26434 = (state_26437[(2)]);
var inst_26435 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26437__$1 = (function (){var statearr_26439 = state_26437;
(statearr_26439[(7)] = inst_26434);

return statearr_26439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26437__$1,inst_26435);
} else {
return null;
}
}
});})(c__20691__auto__))
;
return ((function (switch__20626__auto__,c__20691__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20627__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20627__auto____0 = (function (){
var statearr_26443 = [null,null,null,null,null,null,null,null];
(statearr_26443[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20627__auto__);

(statearr_26443[(1)] = (1));

return statearr_26443;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20627__auto____1 = (function (state_26437){
while(true){
var ret_value__20628__auto__ = (function (){try{while(true){
var result__20629__auto__ = switch__20626__auto__.call(null,state_26437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20629__auto__;
}
break;
}
}catch (e26444){if((e26444 instanceof Object)){
var ex__20630__auto__ = e26444;
var statearr_26445_26447 = state_26437;
(statearr_26445_26447[(5)] = ex__20630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26448 = state_26437;
state_26437 = G__26448;
continue;
} else {
return ret_value__20628__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20627__auto__ = function(state_26437){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20627__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20627__auto____1.call(this,state_26437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20627__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20627__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20627__auto__;
})()
;})(switch__20626__auto__,c__20691__auto__))
})();
var state__20693__auto__ = (function (){var statearr_26446 = f__20692__auto__.call(null);
(statearr_26446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20691__auto__);

return statearr_26446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20693__auto__);
});})(c__20691__auto__))
);

return c__20691__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26449){
var map__26456 = p__26449;
var map__26456__$1 = ((((!((map__26456 == null)))?((((map__26456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26456):map__26456);
var ed = map__26456__$1;
var formatted_exception = cljs.core.get.call(null,map__26456__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26456__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26456__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26458_26462 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26459_26463 = null;
var count__26460_26464 = (0);
var i__26461_26465 = (0);
while(true){
if((i__26461_26465 < count__26460_26464)){
var msg_26466 = cljs.core._nth.call(null,chunk__26459_26463,i__26461_26465);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26466);

var G__26467 = seq__26458_26462;
var G__26468 = chunk__26459_26463;
var G__26469 = count__26460_26464;
var G__26470 = (i__26461_26465 + (1));
seq__26458_26462 = G__26467;
chunk__26459_26463 = G__26468;
count__26460_26464 = G__26469;
i__26461_26465 = G__26470;
continue;
} else {
var temp__4657__auto___26471 = cljs.core.seq.call(null,seq__26458_26462);
if(temp__4657__auto___26471){
var seq__26458_26472__$1 = temp__4657__auto___26471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26458_26472__$1)){
var c__17578__auto___26473 = cljs.core.chunk_first.call(null,seq__26458_26472__$1);
var G__26474 = cljs.core.chunk_rest.call(null,seq__26458_26472__$1);
var G__26475 = c__17578__auto___26473;
var G__26476 = cljs.core.count.call(null,c__17578__auto___26473);
var G__26477 = (0);
seq__26458_26462 = G__26474;
chunk__26459_26463 = G__26475;
count__26460_26464 = G__26476;
i__26461_26465 = G__26477;
continue;
} else {
var msg_26478 = cljs.core.first.call(null,seq__26458_26472__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26478);

var G__26479 = cljs.core.next.call(null,seq__26458_26472__$1);
var G__26480 = null;
var G__26481 = (0);
var G__26482 = (0);
seq__26458_26462 = G__26479;
chunk__26459_26463 = G__26480;
count__26460_26464 = G__26481;
i__26461_26465 = G__26482;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26483){
var map__26486 = p__26483;
var map__26486__$1 = ((((!((map__26486 == null)))?((((map__26486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26486):map__26486);
var w = map__26486__$1;
var message = cljs.core.get.call(null,map__26486__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26494 = cljs.core.seq.call(null,plugins);
var chunk__26495 = null;
var count__26496 = (0);
var i__26497 = (0);
while(true){
if((i__26497 < count__26496)){
var vec__26498 = cljs.core._nth.call(null,chunk__26495,i__26497);
var k = cljs.core.nth.call(null,vec__26498,(0),null);
var plugin = cljs.core.nth.call(null,vec__26498,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26500 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26494,chunk__26495,count__26496,i__26497,pl_26500,vec__26498,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26500.call(null,msg_hist);
});})(seq__26494,chunk__26495,count__26496,i__26497,pl_26500,vec__26498,k,plugin))
);
} else {
}

var G__26501 = seq__26494;
var G__26502 = chunk__26495;
var G__26503 = count__26496;
var G__26504 = (i__26497 + (1));
seq__26494 = G__26501;
chunk__26495 = G__26502;
count__26496 = G__26503;
i__26497 = G__26504;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26494);
if(temp__4657__auto__){
var seq__26494__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26494__$1)){
var c__17578__auto__ = cljs.core.chunk_first.call(null,seq__26494__$1);
var G__26505 = cljs.core.chunk_rest.call(null,seq__26494__$1);
var G__26506 = c__17578__auto__;
var G__26507 = cljs.core.count.call(null,c__17578__auto__);
var G__26508 = (0);
seq__26494 = G__26505;
chunk__26495 = G__26506;
count__26496 = G__26507;
i__26497 = G__26508;
continue;
} else {
var vec__26499 = cljs.core.first.call(null,seq__26494__$1);
var k = cljs.core.nth.call(null,vec__26499,(0),null);
var plugin = cljs.core.nth.call(null,vec__26499,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26509 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26494,chunk__26495,count__26496,i__26497,pl_26509,vec__26499,k,plugin,seq__26494__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26509.call(null,msg_hist);
});})(seq__26494,chunk__26495,count__26496,i__26497,pl_26509,vec__26499,k,plugin,seq__26494__$1,temp__4657__auto__))
);
} else {
}

var G__26510 = cljs.core.next.call(null,seq__26494__$1);
var G__26511 = null;
var G__26512 = (0);
var G__26513 = (0);
seq__26494 = G__26510;
chunk__26495 = G__26511;
count__26496 = G__26512;
i__26497 = G__26513;
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
var args26514 = [];
var len__17833__auto___26517 = arguments.length;
var i__17834__auto___26518 = (0);
while(true){
if((i__17834__auto___26518 < len__17833__auto___26517)){
args26514.push((arguments[i__17834__auto___26518]));

var G__26519 = (i__17834__auto___26518 + (1));
i__17834__auto___26518 = G__26519;
continue;
} else {
}
break;
}

var G__26516 = args26514.length;
switch (G__26516) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26514.length)].join('')));

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
var len__17833__auto___26525 = arguments.length;
var i__17834__auto___26526 = (0);
while(true){
if((i__17834__auto___26526 < len__17833__auto___26525)){
args__17840__auto__.push((arguments[i__17834__auto___26526]));

var G__26527 = (i__17834__auto___26526 + (1));
i__17834__auto___26526 = G__26527;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((0) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17841__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26522){
var map__26523 = p__26522;
var map__26523__$1 = ((((!((map__26523 == null)))?((((map__26523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26523):map__26523);
var opts = map__26523__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26521){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26521));
});

//# sourceMappingURL=client.js.map