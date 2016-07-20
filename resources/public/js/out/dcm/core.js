// Compiled by ClojureScript 1.7.107 {}
goog.provide('dcm.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof dcm.core.timer !== 'undefined'){
} else {
dcm.core.timer = reagent.core.atom.call(null,(new Date()));
}
if(typeof dcm.core.time_color !== 'undefined'){
} else {
dcm.core.time_color = reagent.core.atom.call(null,"#f34");
}
if(typeof dcm.core.time_updater !== 'undefined'){
} else {
dcm.core.time_updater = setInterval((function (){
return cljs.core.reset_BANG_.call(null,dcm.core.timer,(new Date()));
}),(5000));
}
dcm.core.greeting = (function dcm$core$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null);
});
dcm.core.clock = (function dcm$core$clock(){
var time_str = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,dcm.core.timer).toTimeString()," "));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,dcm.core.time_color)], null)], null),time_str], null);
});
dcm.core.color_input = (function dcm$core$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,dcm.core.time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__6075_SHARP_){
return cljs.core.reset_BANG_.call(null,dcm.core.time_color,p1__6075_SHARP_.target.value);
})], null)], null)], null);
});
dcm.core.simple_example = (function dcm$core$simple_example(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#045584"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.core.greeting,"Hello world2, it is now"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.core.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.core.color_input], null)], null);
});
dcm.core.run = (function dcm$core$run(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcm.core.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('dcm.core.run', dcm.core.run);

//# sourceMappingURL=core.js.map