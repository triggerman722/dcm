// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17840__auto__ = [];
var len__17833__auto___26979 = arguments.length;
var i__17834__auto___26980 = (0);
while(true){
if((i__17834__auto___26980 < len__17833__auto___26979)){
args__17840__auto__.push((arguments[i__17834__auto___26980]));

var G__26981 = (i__17834__auto___26980 + (1));
i__17834__auto___26980 = G__26981;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((2) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17841__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26971_26982 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26972_26983 = null;
var count__26973_26984 = (0);
var i__26974_26985 = (0);
while(true){
if((i__26974_26985 < count__26973_26984)){
var k_26986 = cljs.core._nth.call(null,chunk__26972_26983,i__26974_26985);
e.setAttribute(cljs.core.name.call(null,k_26986),cljs.core.get.call(null,attrs,k_26986));

var G__26987 = seq__26971_26982;
var G__26988 = chunk__26972_26983;
var G__26989 = count__26973_26984;
var G__26990 = (i__26974_26985 + (1));
seq__26971_26982 = G__26987;
chunk__26972_26983 = G__26988;
count__26973_26984 = G__26989;
i__26974_26985 = G__26990;
continue;
} else {
var temp__4657__auto___26991 = cljs.core.seq.call(null,seq__26971_26982);
if(temp__4657__auto___26991){
var seq__26971_26992__$1 = temp__4657__auto___26991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26971_26992__$1)){
var c__17578__auto___26993 = cljs.core.chunk_first.call(null,seq__26971_26992__$1);
var G__26994 = cljs.core.chunk_rest.call(null,seq__26971_26992__$1);
var G__26995 = c__17578__auto___26993;
var G__26996 = cljs.core.count.call(null,c__17578__auto___26993);
var G__26997 = (0);
seq__26971_26982 = G__26994;
chunk__26972_26983 = G__26995;
count__26973_26984 = G__26996;
i__26974_26985 = G__26997;
continue;
} else {
var k_26998 = cljs.core.first.call(null,seq__26971_26992__$1);
e.setAttribute(cljs.core.name.call(null,k_26998),cljs.core.get.call(null,attrs,k_26998));

var G__26999 = cljs.core.next.call(null,seq__26971_26992__$1);
var G__27000 = null;
var G__27001 = (0);
var G__27002 = (0);
seq__26971_26982 = G__26999;
chunk__26972_26983 = G__27000;
count__26973_26984 = G__27001;
i__26974_26985 = G__27002;
continue;
}
} else {
}
}
break;
}

var seq__26975_27003 = cljs.core.seq.call(null,children);
var chunk__26976_27004 = null;
var count__26977_27005 = (0);
var i__26978_27006 = (0);
while(true){
if((i__26978_27006 < count__26977_27005)){
var ch_27007 = cljs.core._nth.call(null,chunk__26976_27004,i__26978_27006);
e.appendChild(ch_27007);

var G__27008 = seq__26975_27003;
var G__27009 = chunk__26976_27004;
var G__27010 = count__26977_27005;
var G__27011 = (i__26978_27006 + (1));
seq__26975_27003 = G__27008;
chunk__26976_27004 = G__27009;
count__26977_27005 = G__27010;
i__26978_27006 = G__27011;
continue;
} else {
var temp__4657__auto___27012 = cljs.core.seq.call(null,seq__26975_27003);
if(temp__4657__auto___27012){
var seq__26975_27013__$1 = temp__4657__auto___27012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26975_27013__$1)){
var c__17578__auto___27014 = cljs.core.chunk_first.call(null,seq__26975_27013__$1);
var G__27015 = cljs.core.chunk_rest.call(null,seq__26975_27013__$1);
var G__27016 = c__17578__auto___27014;
var G__27017 = cljs.core.count.call(null,c__17578__auto___27014);
var G__27018 = (0);
seq__26975_27003 = G__27015;
chunk__26976_27004 = G__27016;
count__26977_27005 = G__27017;
i__26978_27006 = G__27018;
continue;
} else {
var ch_27019 = cljs.core.first.call(null,seq__26975_27013__$1);
e.appendChild(ch_27019);

var G__27020 = cljs.core.next.call(null,seq__26975_27013__$1);
var G__27021 = null;
var G__27022 = (0);
var G__27023 = (0);
seq__26975_27003 = G__27020;
chunk__26976_27004 = G__27021;
count__26977_27005 = G__27022;
i__26978_27006 = G__27023;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26968){
var G__26969 = cljs.core.first.call(null,seq26968);
var seq26968__$1 = cljs.core.next.call(null,seq26968);
var G__26970 = cljs.core.first.call(null,seq26968__$1);
var seq26968__$2 = cljs.core.next.call(null,seq26968__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26969,G__26970,seq26968__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17688__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17689__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17690__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17691__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17692__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17688__auto__,prefer_table__17689__auto__,method_cache__17690__auto__,cached_hierarchy__17691__auto__,hierarchy__17692__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17688__auto__,prefer_table__17689__auto__,method_cache__17690__auto__,cached_hierarchy__17691__auto__,hierarchy__17692__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17692__auto__,method_table__17688__auto__,prefer_table__17689__auto__,method_cache__17690__auto__,cached_hierarchy__17691__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27024 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27024.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27024.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27024.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27024);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27025,st_map){
var map__27030 = p__27025;
var map__27030__$1 = ((((!((map__27030 == null)))?((((map__27030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27030):map__27030);
var container_el = cljs.core.get.call(null,map__27030__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27030,map__27030__$1,container_el){
return (function (p__27032){
var vec__27033 = p__27032;
var k = cljs.core.nth.call(null,vec__27033,(0),null);
var v = cljs.core.nth.call(null,vec__27033,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27030,map__27030__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27034,dom_str){
var map__27037 = p__27034;
var map__27037__$1 = ((((!((map__27037 == null)))?((((map__27037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27037):map__27037);
var c = map__27037__$1;
var content_area_el = cljs.core.get.call(null,map__27037__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27039){
var map__27042 = p__27039;
var map__27042__$1 = ((((!((map__27042 == null)))?((((map__27042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27042):map__27042);
var content_area_el = cljs.core.get.call(null,map__27042__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__){
return (function (state_27085){
var state_val_27086 = (state_27085[(1)]);
if((state_val_27086 === (1))){
var inst_27070 = (state_27085[(7)]);
var inst_27070__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27071 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27072 = ["10px","10px","100%","68px","1.0"];
var inst_27073 = cljs.core.PersistentHashMap.fromArrays(inst_27071,inst_27072);
var inst_27074 = cljs.core.merge.call(null,inst_27073,style);
var inst_27075 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27070__$1,inst_27074);
var inst_27076 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27070__$1,msg);
var inst_27077 = cljs.core.async.timeout.call(null,(300));
var state_27085__$1 = (function (){var statearr_27087 = state_27085;
(statearr_27087[(8)] = inst_27075);

(statearr_27087[(9)] = inst_27076);

(statearr_27087[(7)] = inst_27070__$1);

return statearr_27087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,(2),inst_27077);
} else {
if((state_val_27086 === (2))){
var inst_27070 = (state_27085[(7)]);
var inst_27079 = (state_27085[(2)]);
var inst_27080 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27081 = ["auto"];
var inst_27082 = cljs.core.PersistentHashMap.fromArrays(inst_27080,inst_27081);
var inst_27083 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27070,inst_27082);
var state_27085__$1 = (function (){var statearr_27088 = state_27085;
(statearr_27088[(10)] = inst_27079);

return statearr_27088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27085__$1,inst_27083);
} else {
return null;
}
}
});})(c__20669__auto__))
;
return ((function (switch__20604__auto__,c__20669__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto____0 = (function (){
var statearr_27092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27092[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto__);

(statearr_27092[(1)] = (1));

return statearr_27092;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto____1 = (function (state_27085){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_27085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e27093){if((e27093 instanceof Object)){
var ex__20608__auto__ = e27093;
var statearr_27094_27096 = state_27085;
(statearr_27094_27096[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27097 = state_27085;
state_27085 = G__27097;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto__ = function(state_27085){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto____1.call(this,state_27085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__))
})();
var state__20671__auto__ = (function (){var statearr_27095 = f__20670__auto__.call(null);
(statearr_27095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_27095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__))
);

return c__20669__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__27099 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__27099,(0),null);
var ln = cljs.core.nth.call(null,vec__27099,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27102 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27102,(0),null);
var file_line = cljs.core.nth.call(null,vec__27102,(1),null);
var file_column = cljs.core.nth.call(null,vec__27102,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27102,file_name,file_line,file_column){
return (function (p1__27100_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27100_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27102,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16775__auto__ = file_line;
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
var and__16763__auto__ = cause;
if(cljs.core.truth_(and__16763__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16763__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27105 = figwheel.client.heads_up.ensure_container.call(null);
var map__27105__$1 = ((((!((map__27105 == null)))?((((map__27105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27105):map__27105);
var content_area_el = cljs.core.get.call(null,map__27105__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__){
return (function (state_27153){
var state_val_27154 = (state_27153[(1)]);
if((state_val_27154 === (1))){
var inst_27136 = (state_27153[(7)]);
var inst_27136__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27137 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27138 = ["0.0"];
var inst_27139 = cljs.core.PersistentHashMap.fromArrays(inst_27137,inst_27138);
var inst_27140 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27136__$1,inst_27139);
var inst_27141 = cljs.core.async.timeout.call(null,(300));
var state_27153__$1 = (function (){var statearr_27155 = state_27153;
(statearr_27155[(7)] = inst_27136__$1);

(statearr_27155[(8)] = inst_27140);

return statearr_27155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27153__$1,(2),inst_27141);
} else {
if((state_val_27154 === (2))){
var inst_27136 = (state_27153[(7)]);
var inst_27143 = (state_27153[(2)]);
var inst_27144 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27145 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27146 = cljs.core.PersistentHashMap.fromArrays(inst_27144,inst_27145);
var inst_27147 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27136,inst_27146);
var inst_27148 = cljs.core.async.timeout.call(null,(200));
var state_27153__$1 = (function (){var statearr_27156 = state_27153;
(statearr_27156[(9)] = inst_27143);

(statearr_27156[(10)] = inst_27147);

return statearr_27156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27153__$1,(3),inst_27148);
} else {
if((state_val_27154 === (3))){
var inst_27136 = (state_27153[(7)]);
var inst_27150 = (state_27153[(2)]);
var inst_27151 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27136,"");
var state_27153__$1 = (function (){var statearr_27157 = state_27153;
(statearr_27157[(11)] = inst_27150);

return statearr_27157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27153__$1,inst_27151);
} else {
return null;
}
}
}
});})(c__20669__auto__))
;
return ((function (switch__20604__auto__,c__20669__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20605__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20605__auto____0 = (function (){
var statearr_27161 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27161[(0)] = figwheel$client$heads_up$clear_$_state_machine__20605__auto__);

(statearr_27161[(1)] = (1));

return statearr_27161;
});
var figwheel$client$heads_up$clear_$_state_machine__20605__auto____1 = (function (state_27153){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_27153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e27162){if((e27162 instanceof Object)){
var ex__20608__auto__ = e27162;
var statearr_27163_27165 = state_27153;
(statearr_27163_27165[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27166 = state_27153;
state_27153 = G__27166;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20605__auto__ = function(state_27153){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20605__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20605__auto____1.call(this,state_27153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20605__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20605__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__))
})();
var state__20671__auto__ = (function (){var statearr_27164 = f__20670__auto__.call(null);
(statearr_27164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_27164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__))
);

return c__20669__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20669__auto__){
return (function (){
var f__20670__auto__ = (function (){var switch__20604__auto__ = ((function (c__20669__auto__){
return (function (state_27198){
var state_val_27199 = (state_27198[(1)]);
if((state_val_27199 === (1))){
var inst_27188 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27198__$1 = state_27198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27198__$1,(2),inst_27188);
} else {
if((state_val_27199 === (2))){
var inst_27190 = (state_27198[(2)]);
var inst_27191 = cljs.core.async.timeout.call(null,(400));
var state_27198__$1 = (function (){var statearr_27200 = state_27198;
(statearr_27200[(7)] = inst_27190);

return statearr_27200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27198__$1,(3),inst_27191);
} else {
if((state_val_27199 === (3))){
var inst_27193 = (state_27198[(2)]);
var inst_27194 = figwheel.client.heads_up.clear.call(null);
var state_27198__$1 = (function (){var statearr_27201 = state_27198;
(statearr_27201[(8)] = inst_27193);

return statearr_27201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27198__$1,(4),inst_27194);
} else {
if((state_val_27199 === (4))){
var inst_27196 = (state_27198[(2)]);
var state_27198__$1 = state_27198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27198__$1,inst_27196);
} else {
return null;
}
}
}
}
});})(c__20669__auto__))
;
return ((function (switch__20604__auto__,c__20669__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto____0 = (function (){
var statearr_27205 = [null,null,null,null,null,null,null,null,null];
(statearr_27205[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto__);

(statearr_27205[(1)] = (1));

return statearr_27205;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto____1 = (function (state_27198){
while(true){
var ret_value__20606__auto__ = (function (){try{while(true){
var result__20607__auto__ = switch__20604__auto__.call(null,state_27198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20607__auto__;
}
break;
}
}catch (e27206){if((e27206 instanceof Object)){
var ex__20608__auto__ = e27206;
var statearr_27207_27209 = state_27198;
(statearr_27207_27209[(5)] = ex__20608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27210 = state_27198;
state_27198 = G__27210;
continue;
} else {
return ret_value__20606__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto__ = function(state_27198){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto____1.call(this,state_27198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20605__auto__;
})()
;})(switch__20604__auto__,c__20669__auto__))
})();
var state__20671__auto__ = (function (){var statearr_27208 = f__20670__auto__.call(null);
(statearr_27208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20669__auto__);

return statearr_27208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20671__auto__);
});})(c__20669__auto__))
);

return c__20669__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map