// Compiled by ClojureScript 1.7.122 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__16775__auto__ = elem.textContent;
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args25268 = [];
var len__17833__auto___25271 = arguments.length;
var i__17834__auto___25272 = (0);
while(true){
if((i__17834__auto___25272 < len__17833__auto___25271)){
args25268.push((arguments[i__17834__auto___25272]));

var G__25273 = (i__17834__auto___25272 + (1));
i__17834__auto___25272 = G__25273;
continue;
} else {
}
break;
}

var G__25270 = args25268.length;
switch (G__25270) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25268.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args25275 = [];
var len__17833__auto___25278 = arguments.length;
var i__17834__auto___25279 = (0);
while(true){
if((i__17834__auto___25279 < len__17833__auto___25278)){
args25275.push((arguments[i__17834__auto___25279]));

var G__25280 = (i__17834__auto___25279 + (1));
i__17834__auto___25279 = G__25280;
continue;
} else {
}
break;
}

var G__25277 = args25275.length;
switch (G__25277) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25275.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args25283 = [];
var len__17833__auto___25286 = arguments.length;
var i__17834__auto___25287 = (0);
while(true){
if((i__17834__auto___25287 < len__17833__auto___25286)){
args25283.push((arguments[i__17834__auto___25287]));

var G__25288 = (i__17834__auto___25287 + (1));
i__17834__auto___25287 = G__25288;
continue;
} else {
}
break;
}

var G__25285 = args25283.length;
switch (G__25285) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25283.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__25282_SHARP_){
return !((p1__25282_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25298 = arguments.length;
var i__17834__auto___25299 = (0);
while(true){
if((i__17834__auto___25299 < len__17833__auto___25298)){
args__17840__auto__.push((arguments[i__17834__auto___25299]));

var G__25300 = (i__17834__auto___25299 + (1));
i__17834__auto___25299 = G__25300;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__25292_25301 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__25293_25302 = null;
var count__25294_25303 = (0);
var i__25295_25304 = (0);
while(true){
if((i__25295_25304 < count__25294_25303)){
var vec__25296_25305 = cljs.core._nth.call(null,chunk__25293_25302,i__25295_25304);
var k_25306 = cljs.core.nth.call(null,vec__25296_25305,(0),null);
var v_25307 = cljs.core.nth.call(null,vec__25296_25305,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_25306),v_25307);

var G__25308 = seq__25292_25301;
var G__25309 = chunk__25293_25302;
var G__25310 = count__25294_25303;
var G__25311 = (i__25295_25304 + (1));
seq__25292_25301 = G__25308;
chunk__25293_25302 = G__25309;
count__25294_25303 = G__25310;
i__25295_25304 = G__25311;
continue;
} else {
var temp__4657__auto___25312 = cljs.core.seq.call(null,seq__25292_25301);
if(temp__4657__auto___25312){
var seq__25292_25313__$1 = temp__4657__auto___25312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25292_25313__$1)){
var c__17578__auto___25314 = cljs.core.chunk_first.call(null,seq__25292_25313__$1);
var G__25315 = cljs.core.chunk_rest.call(null,seq__25292_25313__$1);
var G__25316 = c__17578__auto___25314;
var G__25317 = cljs.core.count.call(null,c__17578__auto___25314);
var G__25318 = (0);
seq__25292_25301 = G__25315;
chunk__25293_25302 = G__25316;
count__25294_25303 = G__25317;
i__25295_25304 = G__25318;
continue;
} else {
var vec__25297_25319 = cljs.core.first.call(null,seq__25292_25313__$1);
var k_25320 = cljs.core.nth.call(null,vec__25297_25319,(0),null);
var v_25321 = cljs.core.nth.call(null,vec__25297_25319,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_25320),v_25321);

var G__25322 = cljs.core.next.call(null,seq__25292_25313__$1);
var G__25323 = null;
var G__25324 = (0);
var G__25325 = (0);
seq__25292_25301 = G__25322;
chunk__25293_25302 = G__25323;
count__25294_25303 = G__25324;
i__25295_25304 = G__25325;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq25290){
var G__25291 = cljs.core.first.call(null,seq25290);
var seq25290__$1 = cljs.core.next.call(null,seq25290);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25291,seq25290__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25332 = arguments.length;
var i__17834__auto___25333 = (0);
while(true){
if((i__17834__auto___25333 < len__17833__auto___25332)){
args__17840__auto__.push((arguments[i__17834__auto___25333]));

var G__25334 = (i__17834__auto___25333 + (1));
i__17834__auto___25333 = G__25334;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__25328_25335 = cljs.core.seq.call(null,keywords);
var chunk__25329_25336 = null;
var count__25330_25337 = (0);
var i__25331_25338 = (0);
while(true){
if((i__25331_25338 < count__25330_25337)){
var kw_25339 = cljs.core._nth.call(null,chunk__25329_25336,i__25331_25338);
style.removeProperty(dommy.utils.as_str.call(null,kw_25339));

var G__25340 = seq__25328_25335;
var G__25341 = chunk__25329_25336;
var G__25342 = count__25330_25337;
var G__25343 = (i__25331_25338 + (1));
seq__25328_25335 = G__25340;
chunk__25329_25336 = G__25341;
count__25330_25337 = G__25342;
i__25331_25338 = G__25343;
continue;
} else {
var temp__4657__auto___25344 = cljs.core.seq.call(null,seq__25328_25335);
if(temp__4657__auto___25344){
var seq__25328_25345__$1 = temp__4657__auto___25344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25328_25345__$1)){
var c__17578__auto___25346 = cljs.core.chunk_first.call(null,seq__25328_25345__$1);
var G__25347 = cljs.core.chunk_rest.call(null,seq__25328_25345__$1);
var G__25348 = c__17578__auto___25346;
var G__25349 = cljs.core.count.call(null,c__17578__auto___25346);
var G__25350 = (0);
seq__25328_25335 = G__25347;
chunk__25329_25336 = G__25348;
count__25330_25337 = G__25349;
i__25331_25338 = G__25350;
continue;
} else {
var kw_25351 = cljs.core.first.call(null,seq__25328_25345__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_25351));

var G__25352 = cljs.core.next.call(null,seq__25328_25345__$1);
var G__25353 = null;
var G__25354 = (0);
var G__25355 = (0);
seq__25328_25335 = G__25352;
chunk__25329_25336 = G__25353;
count__25330_25337 = G__25354;
i__25331_25338 = G__25355;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq25326){
var G__25327 = cljs.core.first.call(null,seq25326);
var seq25326__$1 = cljs.core.next.call(null,seq25326);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25327,seq25326__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25364 = arguments.length;
var i__17834__auto___25365 = (0);
while(true){
if((i__17834__auto___25365 < len__17833__auto___25364)){
args__17840__auto__.push((arguments[i__17834__auto___25365]));

var G__25366 = (i__17834__auto___25365 + (1));
i__17834__auto___25365 = G__25366;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__25358_25367 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__25359_25368 = null;
var count__25360_25369 = (0);
var i__25361_25370 = (0);
while(true){
if((i__25361_25370 < count__25360_25369)){
var vec__25362_25371 = cljs.core._nth.call(null,chunk__25359_25368,i__25361_25370);
var k_25372 = cljs.core.nth.call(null,vec__25362_25371,(0),null);
var v_25373 = cljs.core.nth.call(null,vec__25362_25371,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_25372,[cljs.core.str(v_25373),cljs.core.str("px")].join(''));

var G__25374 = seq__25358_25367;
var G__25375 = chunk__25359_25368;
var G__25376 = count__25360_25369;
var G__25377 = (i__25361_25370 + (1));
seq__25358_25367 = G__25374;
chunk__25359_25368 = G__25375;
count__25360_25369 = G__25376;
i__25361_25370 = G__25377;
continue;
} else {
var temp__4657__auto___25378 = cljs.core.seq.call(null,seq__25358_25367);
if(temp__4657__auto___25378){
var seq__25358_25379__$1 = temp__4657__auto___25378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25358_25379__$1)){
var c__17578__auto___25380 = cljs.core.chunk_first.call(null,seq__25358_25379__$1);
var G__25381 = cljs.core.chunk_rest.call(null,seq__25358_25379__$1);
var G__25382 = c__17578__auto___25380;
var G__25383 = cljs.core.count.call(null,c__17578__auto___25380);
var G__25384 = (0);
seq__25358_25367 = G__25381;
chunk__25359_25368 = G__25382;
count__25360_25369 = G__25383;
i__25361_25370 = G__25384;
continue;
} else {
var vec__25363_25385 = cljs.core.first.call(null,seq__25358_25379__$1);
var k_25386 = cljs.core.nth.call(null,vec__25363_25385,(0),null);
var v_25387 = cljs.core.nth.call(null,vec__25363_25385,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_25386,[cljs.core.str(v_25387),cljs.core.str("px")].join(''));

var G__25388 = cljs.core.next.call(null,seq__25358_25379__$1);
var G__25389 = null;
var G__25390 = (0);
var G__25391 = (0);
seq__25358_25367 = G__25388;
chunk__25359_25368 = G__25389;
count__25360_25369 = G__25390;
i__25361_25370 = G__25391;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq25356){
var G__25357 = cljs.core.first.call(null,seq25356);
var seq25356__$1 = cljs.core.next.call(null,seq25356);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25357,seq25356__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args25392 = [];
var len__17833__auto___25407 = arguments.length;
var i__17834__auto___25408 = (0);
while(true){
if((i__17834__auto___25408 < len__17833__auto___25407)){
args25392.push((arguments[i__17834__auto___25408]));

var G__25409 = (i__17834__auto___25408 + (1));
i__17834__auto___25408 = G__25409;
continue;
} else {
}
break;
}

var G__25398 = args25392.length;
switch (G__25398) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__17852__auto__ = (new cljs.core.IndexedSeq(args25392.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17852__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__25399 = elem;
(G__25399[k__$1] = v);

return G__25399;
} else {
var G__25400 = elem;
G__25400.setAttribute(k__$1,v);

return G__25400;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__25401_25411 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__25402_25412 = null;
var count__25403_25413 = (0);
var i__25404_25414 = (0);
while(true){
if((i__25404_25414 < count__25403_25413)){
var vec__25405_25415 = cljs.core._nth.call(null,chunk__25402_25412,i__25404_25414);
var k_25416__$1 = cljs.core.nth.call(null,vec__25405_25415,(0),null);
var v_25417__$1 = cljs.core.nth.call(null,vec__25405_25415,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_25416__$1,v_25417__$1);

var G__25418 = seq__25401_25411;
var G__25419 = chunk__25402_25412;
var G__25420 = count__25403_25413;
var G__25421 = (i__25404_25414 + (1));
seq__25401_25411 = G__25418;
chunk__25402_25412 = G__25419;
count__25403_25413 = G__25420;
i__25404_25414 = G__25421;
continue;
} else {
var temp__4657__auto___25422 = cljs.core.seq.call(null,seq__25401_25411);
if(temp__4657__auto___25422){
var seq__25401_25423__$1 = temp__4657__auto___25422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25401_25423__$1)){
var c__17578__auto___25424 = cljs.core.chunk_first.call(null,seq__25401_25423__$1);
var G__25425 = cljs.core.chunk_rest.call(null,seq__25401_25423__$1);
var G__25426 = c__17578__auto___25424;
var G__25427 = cljs.core.count.call(null,c__17578__auto___25424);
var G__25428 = (0);
seq__25401_25411 = G__25425;
chunk__25402_25412 = G__25426;
count__25403_25413 = G__25427;
i__25404_25414 = G__25428;
continue;
} else {
var vec__25406_25429 = cljs.core.first.call(null,seq__25401_25423__$1);
var k_25430__$1 = cljs.core.nth.call(null,vec__25406_25429,(0),null);
var v_25431__$1 = cljs.core.nth.call(null,vec__25406_25429,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_25430__$1,v_25431__$1);

var G__25432 = cljs.core.next.call(null,seq__25401_25423__$1);
var G__25433 = null;
var G__25434 = (0);
var G__25435 = (0);
seq__25401_25411 = G__25432;
chunk__25402_25412 = G__25433;
count__25403_25413 = G__25434;
i__25404_25414 = G__25435;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq25393){
var G__25394 = cljs.core.first.call(null,seq25393);
var seq25393__$1 = cljs.core.next.call(null,seq25393);
var G__25395 = cljs.core.first.call(null,seq25393__$1);
var seq25393__$2 = cljs.core.next.call(null,seq25393__$1);
var G__25396 = cljs.core.first.call(null,seq25393__$2);
var seq25393__$3 = cljs.core.next.call(null,seq25393__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25394,G__25395,G__25396,seq25393__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args25436 = [];
var len__17833__auto___25446 = arguments.length;
var i__17834__auto___25447 = (0);
while(true){
if((i__17834__auto___25447 < len__17833__auto___25446)){
args25436.push((arguments[i__17834__auto___25447]));

var G__25448 = (i__17834__auto___25447 + (1));
i__17834__auto___25447 = G__25448;
continue;
} else {
}
break;
}

var G__25441 = args25436.length;
switch (G__25441) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17852__auto__ = (new cljs.core.IndexedSeq(args25436.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17852__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_25450__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_25450__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_25450__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__25442_25451 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__25443_25452 = null;
var count__25444_25453 = (0);
var i__25445_25454 = (0);
while(true){
if((i__25445_25454 < count__25444_25453)){
var k_25455__$1 = cljs.core._nth.call(null,chunk__25443_25452,i__25445_25454);
dommy.core.remove_attr_BANG_.call(null,elem,k_25455__$1);

var G__25456 = seq__25442_25451;
var G__25457 = chunk__25443_25452;
var G__25458 = count__25444_25453;
var G__25459 = (i__25445_25454 + (1));
seq__25442_25451 = G__25456;
chunk__25443_25452 = G__25457;
count__25444_25453 = G__25458;
i__25445_25454 = G__25459;
continue;
} else {
var temp__4657__auto___25460 = cljs.core.seq.call(null,seq__25442_25451);
if(temp__4657__auto___25460){
var seq__25442_25461__$1 = temp__4657__auto___25460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25442_25461__$1)){
var c__17578__auto___25462 = cljs.core.chunk_first.call(null,seq__25442_25461__$1);
var G__25463 = cljs.core.chunk_rest.call(null,seq__25442_25461__$1);
var G__25464 = c__17578__auto___25462;
var G__25465 = cljs.core.count.call(null,c__17578__auto___25462);
var G__25466 = (0);
seq__25442_25451 = G__25463;
chunk__25443_25452 = G__25464;
count__25444_25453 = G__25465;
i__25445_25454 = G__25466;
continue;
} else {
var k_25467__$1 = cljs.core.first.call(null,seq__25442_25461__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_25467__$1);

var G__25468 = cljs.core.next.call(null,seq__25442_25461__$1);
var G__25469 = null;
var G__25470 = (0);
var G__25471 = (0);
seq__25442_25451 = G__25468;
chunk__25443_25452 = G__25469;
count__25444_25453 = G__25470;
i__25445_25454 = G__25471;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq25437){
var G__25438 = cljs.core.first.call(null,seq25437);
var seq25437__$1 = cljs.core.next.call(null,seq25437);
var G__25439 = cljs.core.first.call(null,seq25437__$1);
var seq25437__$2 = cljs.core.next.call(null,seq25437__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25438,G__25439,seq25437__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args25472 = [];
var len__17833__auto___25475 = arguments.length;
var i__17834__auto___25476 = (0);
while(true){
if((i__17834__auto___25476 < len__17833__auto___25475)){
args25472.push((arguments[i__17834__auto___25476]));

var G__25477 = (i__17834__auto___25476 + (1));
i__17834__auto___25476 = G__25477;
continue;
} else {
}
break;
}

var G__25474 = args25472.length;
switch (G__25474) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25472.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args25479 = [];
var len__17833__auto___25497 = arguments.length;
var i__17834__auto___25498 = (0);
while(true){
if((i__17834__auto___25498 < len__17833__auto___25497)){
args25479.push((arguments[i__17834__auto___25498]));

var G__25499 = (i__17834__auto___25498 + (1));
i__17834__auto___25498 = G__25499;
continue;
} else {
}
break;
}

var G__25484 = args25479.length;
switch (G__25484) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17852__auto__ = (new cljs.core.IndexedSeq(args25479.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17852__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___25501 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___25501)){
var class_list_25502 = temp__4655__auto___25501;
var seq__25485_25503 = cljs.core.seq.call(null,classes__$1);
var chunk__25486_25504 = null;
var count__25487_25505 = (0);
var i__25488_25506 = (0);
while(true){
if((i__25488_25506 < count__25487_25505)){
var c_25507 = cljs.core._nth.call(null,chunk__25486_25504,i__25488_25506);
class_list_25502.add(c_25507);

var G__25508 = seq__25485_25503;
var G__25509 = chunk__25486_25504;
var G__25510 = count__25487_25505;
var G__25511 = (i__25488_25506 + (1));
seq__25485_25503 = G__25508;
chunk__25486_25504 = G__25509;
count__25487_25505 = G__25510;
i__25488_25506 = G__25511;
continue;
} else {
var temp__4657__auto___25512 = cljs.core.seq.call(null,seq__25485_25503);
if(temp__4657__auto___25512){
var seq__25485_25513__$1 = temp__4657__auto___25512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25485_25513__$1)){
var c__17578__auto___25514 = cljs.core.chunk_first.call(null,seq__25485_25513__$1);
var G__25515 = cljs.core.chunk_rest.call(null,seq__25485_25513__$1);
var G__25516 = c__17578__auto___25514;
var G__25517 = cljs.core.count.call(null,c__17578__auto___25514);
var G__25518 = (0);
seq__25485_25503 = G__25515;
chunk__25486_25504 = G__25516;
count__25487_25505 = G__25517;
i__25488_25506 = G__25518;
continue;
} else {
var c_25519 = cljs.core.first.call(null,seq__25485_25513__$1);
class_list_25502.add(c_25519);

var G__25520 = cljs.core.next.call(null,seq__25485_25513__$1);
var G__25521 = null;
var G__25522 = (0);
var G__25523 = (0);
seq__25485_25503 = G__25520;
chunk__25486_25504 = G__25521;
count__25487_25505 = G__25522;
i__25488_25506 = G__25523;
continue;
}
} else {
}
}
break;
}
} else {
var seq__25489_25524 = cljs.core.seq.call(null,classes__$1);
var chunk__25490_25525 = null;
var count__25491_25526 = (0);
var i__25492_25527 = (0);
while(true){
if((i__25492_25527 < count__25491_25526)){
var c_25528 = cljs.core._nth.call(null,chunk__25490_25525,i__25492_25527);
var class_name_25529 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_25529,c_25528))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_25529 === ""))?c_25528:[cljs.core.str(class_name_25529),cljs.core.str(" "),cljs.core.str(c_25528)].join('')));
}

var G__25530 = seq__25489_25524;
var G__25531 = chunk__25490_25525;
var G__25532 = count__25491_25526;
var G__25533 = (i__25492_25527 + (1));
seq__25489_25524 = G__25530;
chunk__25490_25525 = G__25531;
count__25491_25526 = G__25532;
i__25492_25527 = G__25533;
continue;
} else {
var temp__4657__auto___25534 = cljs.core.seq.call(null,seq__25489_25524);
if(temp__4657__auto___25534){
var seq__25489_25535__$1 = temp__4657__auto___25534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25489_25535__$1)){
var c__17578__auto___25536 = cljs.core.chunk_first.call(null,seq__25489_25535__$1);
var G__25537 = cljs.core.chunk_rest.call(null,seq__25489_25535__$1);
var G__25538 = c__17578__auto___25536;
var G__25539 = cljs.core.count.call(null,c__17578__auto___25536);
var G__25540 = (0);
seq__25489_25524 = G__25537;
chunk__25490_25525 = G__25538;
count__25491_25526 = G__25539;
i__25492_25527 = G__25540;
continue;
} else {
var c_25541 = cljs.core.first.call(null,seq__25489_25535__$1);
var class_name_25542 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_25542,c_25541))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_25542 === ""))?c_25541:[cljs.core.str(class_name_25542),cljs.core.str(" "),cljs.core.str(c_25541)].join('')));
}

var G__25543 = cljs.core.next.call(null,seq__25489_25535__$1);
var G__25544 = null;
var G__25545 = (0);
var G__25546 = (0);
seq__25489_25524 = G__25543;
chunk__25490_25525 = G__25544;
count__25491_25526 = G__25545;
i__25492_25527 = G__25546;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__25493_25547 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__25494_25548 = null;
var count__25495_25549 = (0);
var i__25496_25550 = (0);
while(true){
if((i__25496_25550 < count__25495_25549)){
var c_25551 = cljs.core._nth.call(null,chunk__25494_25548,i__25496_25550);
dommy.core.add_class_BANG_.call(null,elem,c_25551);

var G__25552 = seq__25493_25547;
var G__25553 = chunk__25494_25548;
var G__25554 = count__25495_25549;
var G__25555 = (i__25496_25550 + (1));
seq__25493_25547 = G__25552;
chunk__25494_25548 = G__25553;
count__25495_25549 = G__25554;
i__25496_25550 = G__25555;
continue;
} else {
var temp__4657__auto___25556 = cljs.core.seq.call(null,seq__25493_25547);
if(temp__4657__auto___25556){
var seq__25493_25557__$1 = temp__4657__auto___25556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25493_25557__$1)){
var c__17578__auto___25558 = cljs.core.chunk_first.call(null,seq__25493_25557__$1);
var G__25559 = cljs.core.chunk_rest.call(null,seq__25493_25557__$1);
var G__25560 = c__17578__auto___25558;
var G__25561 = cljs.core.count.call(null,c__17578__auto___25558);
var G__25562 = (0);
seq__25493_25547 = G__25559;
chunk__25494_25548 = G__25560;
count__25495_25549 = G__25561;
i__25496_25550 = G__25562;
continue;
} else {
var c_25563 = cljs.core.first.call(null,seq__25493_25557__$1);
dommy.core.add_class_BANG_.call(null,elem,c_25563);

var G__25564 = cljs.core.next.call(null,seq__25493_25557__$1);
var G__25565 = null;
var G__25566 = (0);
var G__25567 = (0);
seq__25493_25547 = G__25564;
chunk__25494_25548 = G__25565;
count__25495_25549 = G__25566;
i__25496_25550 = G__25567;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq25480){
var G__25481 = cljs.core.first.call(null,seq25480);
var seq25480__$1 = cljs.core.next.call(null,seq25480);
var G__25482 = cljs.core.first.call(null,seq25480__$1);
var seq25480__$2 = cljs.core.next.call(null,seq25480__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25481,G__25482,seq25480__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args25568 = [];
var len__17833__auto___25578 = arguments.length;
var i__17834__auto___25579 = (0);
while(true){
if((i__17834__auto___25579 < len__17833__auto___25578)){
args25568.push((arguments[i__17834__auto___25579]));

var G__25580 = (i__17834__auto___25579 + (1));
i__17834__auto___25579 = G__25580;
continue;
} else {
}
break;
}

var G__25573 = args25568.length;
switch (G__25573) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17852__auto__ = (new cljs.core.IndexedSeq(args25568.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17852__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___25582 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___25582)){
var class_list_25583 = temp__4655__auto___25582;
class_list_25583.remove(c__$1);
} else {
var class_name_25584 = dommy.core.class$.call(null,elem);
var new_class_name_25585 = dommy.utils.remove_class_str.call(null,class_name_25584,c__$1);
if((class_name_25584 === new_class_name_25585)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_25585);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__25574 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__25575 = null;
var count__25576 = (0);
var i__25577 = (0);
while(true){
if((i__25577 < count__25576)){
var c = cljs.core._nth.call(null,chunk__25575,i__25577);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__25586 = seq__25574;
var G__25587 = chunk__25575;
var G__25588 = count__25576;
var G__25589 = (i__25577 + (1));
seq__25574 = G__25586;
chunk__25575 = G__25587;
count__25576 = G__25588;
i__25577 = G__25589;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25574);
if(temp__4657__auto__){
var seq__25574__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25574__$1)){
var c__17578__auto__ = cljs.core.chunk_first.call(null,seq__25574__$1);
var G__25590 = cljs.core.chunk_rest.call(null,seq__25574__$1);
var G__25591 = c__17578__auto__;
var G__25592 = cljs.core.count.call(null,c__17578__auto__);
var G__25593 = (0);
seq__25574 = G__25590;
chunk__25575 = G__25591;
count__25576 = G__25592;
i__25577 = G__25593;
continue;
} else {
var c = cljs.core.first.call(null,seq__25574__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__25594 = cljs.core.next.call(null,seq__25574__$1);
var G__25595 = null;
var G__25596 = (0);
var G__25597 = (0);
seq__25574 = G__25594;
chunk__25575 = G__25595;
count__25576 = G__25596;
i__25577 = G__25597;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq25569){
var G__25570 = cljs.core.first.call(null,seq25569);
var seq25569__$1 = cljs.core.next.call(null,seq25569);
var G__25571 = cljs.core.first.call(null,seq25569__$1);
var seq25569__$2 = cljs.core.next.call(null,seq25569__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25570,G__25571,seq25569__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args25598 = [];
var len__17833__auto___25601 = arguments.length;
var i__17834__auto___25602 = (0);
while(true){
if((i__17834__auto___25602 < len__17833__auto___25601)){
args25598.push((arguments[i__17834__auto___25602]));

var G__25603 = (i__17834__auto___25602 + (1));
i__17834__auto___25602 = G__25603;
continue;
} else {
}
break;
}

var G__25600 = args25598.length;
switch (G__25600) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25598.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___25605 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___25605)){
var class_list_25606 = temp__4655__auto___25605;
class_list_25606.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args25607 = [];
var len__17833__auto___25610 = arguments.length;
var i__17834__auto___25611 = (0);
while(true){
if((i__17834__auto___25611 < len__17833__auto___25610)){
args25607.push((arguments[i__17834__auto___25611]));

var G__25612 = (i__17834__auto___25611 + (1));
i__17834__auto___25611 = G__25612;
continue;
} else {
}
break;
}

var G__25609 = args25607.length;
switch (G__25609) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25607.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args25614 = [];
var len__17833__auto___25617 = arguments.length;
var i__17834__auto___25618 = (0);
while(true){
if((i__17834__auto___25618 < len__17833__auto___25617)){
args25614.push((arguments[i__17834__auto___25618]));

var G__25619 = (i__17834__auto___25618 + (1));
i__17834__auto___25618 = G__25619;
continue;
} else {
}
break;
}

var G__25616 = args25614.length;
switch (G__25616) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25614.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args25621 = [];
var len__17833__auto___25632 = arguments.length;
var i__17834__auto___25633 = (0);
while(true){
if((i__17834__auto___25633 < len__17833__auto___25632)){
args25621.push((arguments[i__17834__auto___25633]));

var G__25634 = (i__17834__auto___25633 + (1));
i__17834__auto___25633 = G__25634;
continue;
} else {
}
break;
}

var G__25626 = args25621.length;
switch (G__25626) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17852__auto__ = (new cljs.core.IndexedSeq(args25621.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17852__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__25627 = parent;
G__25627.appendChild(child);

return G__25627;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__25628_25636 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__25629_25637 = null;
var count__25630_25638 = (0);
var i__25631_25639 = (0);
while(true){
if((i__25631_25639 < count__25630_25638)){
var c_25640 = cljs.core._nth.call(null,chunk__25629_25637,i__25631_25639);
dommy.core.append_BANG_.call(null,parent,c_25640);

var G__25641 = seq__25628_25636;
var G__25642 = chunk__25629_25637;
var G__25643 = count__25630_25638;
var G__25644 = (i__25631_25639 + (1));
seq__25628_25636 = G__25641;
chunk__25629_25637 = G__25642;
count__25630_25638 = G__25643;
i__25631_25639 = G__25644;
continue;
} else {
var temp__4657__auto___25645 = cljs.core.seq.call(null,seq__25628_25636);
if(temp__4657__auto___25645){
var seq__25628_25646__$1 = temp__4657__auto___25645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25628_25646__$1)){
var c__17578__auto___25647 = cljs.core.chunk_first.call(null,seq__25628_25646__$1);
var G__25648 = cljs.core.chunk_rest.call(null,seq__25628_25646__$1);
var G__25649 = c__17578__auto___25647;
var G__25650 = cljs.core.count.call(null,c__17578__auto___25647);
var G__25651 = (0);
seq__25628_25636 = G__25648;
chunk__25629_25637 = G__25649;
count__25630_25638 = G__25650;
i__25631_25639 = G__25651;
continue;
} else {
var c_25652 = cljs.core.first.call(null,seq__25628_25646__$1);
dommy.core.append_BANG_.call(null,parent,c_25652);

var G__25653 = cljs.core.next.call(null,seq__25628_25646__$1);
var G__25654 = null;
var G__25655 = (0);
var G__25656 = (0);
seq__25628_25636 = G__25653;
chunk__25629_25637 = G__25654;
count__25630_25638 = G__25655;
i__25631_25639 = G__25656;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq25622){
var G__25623 = cljs.core.first.call(null,seq25622);
var seq25622__$1 = cljs.core.next.call(null,seq25622);
var G__25624 = cljs.core.first.call(null,seq25622__$1);
var seq25622__$2 = cljs.core.next.call(null,seq25622__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25623,G__25624,seq25622__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args25657 = [];
var len__17833__auto___25668 = arguments.length;
var i__17834__auto___25669 = (0);
while(true){
if((i__17834__auto___25669 < len__17833__auto___25668)){
args25657.push((arguments[i__17834__auto___25669]));

var G__25670 = (i__17834__auto___25669 + (1));
i__17834__auto___25669 = G__25670;
continue;
} else {
}
break;
}

var G__25662 = args25657.length;
switch (G__25662) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17852__auto__ = (new cljs.core.IndexedSeq(args25657.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17852__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__25663 = parent;
G__25663.insertBefore(child,parent.firstChild);

return G__25663;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__25664_25672 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__25665_25673 = null;
var count__25666_25674 = (0);
var i__25667_25675 = (0);
while(true){
if((i__25667_25675 < count__25666_25674)){
var c_25676 = cljs.core._nth.call(null,chunk__25665_25673,i__25667_25675);
dommy.core.prepend_BANG_.call(null,parent,c_25676);

var G__25677 = seq__25664_25672;
var G__25678 = chunk__25665_25673;
var G__25679 = count__25666_25674;
var G__25680 = (i__25667_25675 + (1));
seq__25664_25672 = G__25677;
chunk__25665_25673 = G__25678;
count__25666_25674 = G__25679;
i__25667_25675 = G__25680;
continue;
} else {
var temp__4657__auto___25681 = cljs.core.seq.call(null,seq__25664_25672);
if(temp__4657__auto___25681){
var seq__25664_25682__$1 = temp__4657__auto___25681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25664_25682__$1)){
var c__17578__auto___25683 = cljs.core.chunk_first.call(null,seq__25664_25682__$1);
var G__25684 = cljs.core.chunk_rest.call(null,seq__25664_25682__$1);
var G__25685 = c__17578__auto___25683;
var G__25686 = cljs.core.count.call(null,c__17578__auto___25683);
var G__25687 = (0);
seq__25664_25672 = G__25684;
chunk__25665_25673 = G__25685;
count__25666_25674 = G__25686;
i__25667_25675 = G__25687;
continue;
} else {
var c_25688 = cljs.core.first.call(null,seq__25664_25682__$1);
dommy.core.prepend_BANG_.call(null,parent,c_25688);

var G__25689 = cljs.core.next.call(null,seq__25664_25682__$1);
var G__25690 = null;
var G__25691 = (0);
var G__25692 = (0);
seq__25664_25672 = G__25689;
chunk__25665_25673 = G__25690;
count__25666_25674 = G__25691;
i__25667_25675 = G__25692;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq25658){
var G__25659 = cljs.core.first.call(null,seq25658);
var seq25658__$1 = cljs.core.next.call(null,seq25658);
var G__25660 = cljs.core.first.call(null,seq25658__$1);
var seq25658__$2 = cljs.core.next.call(null,seq25658__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25659,G__25660,seq25658__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___25693 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___25693)){
var next_25694 = temp__4655__auto___25693;
dommy.core.insert_before_BANG_.call(null,elem,next_25694);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args25695 = [];
var len__17833__auto___25699 = arguments.length;
var i__17834__auto___25700 = (0);
while(true){
if((i__17834__auto___25700 < len__17833__auto___25699)){
args25695.push((arguments[i__17834__auto___25700]));

var G__25701 = (i__17834__auto___25700 + (1));
i__17834__auto___25700 = G__25701;
continue;
} else {
}
break;
}

var G__25697 = args25695.length;
switch (G__25697) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25695.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__25698 = p;
G__25698.removeChild(elem);

return G__25698;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25703){
var vec__25704 = p__25703;
var special_mouse_event = cljs.core.nth.call(null,vec__25704,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__25704,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__25704,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__25704,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__16775__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__16763__auto__ = related_target;
if(cljs.core.truth_(and__16763__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__16763__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__25704,special_mouse_event,real_mouse_event))
});})(vec__25704,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__16763__auto__ = selected_target;
if(cljs.core.truth_(and__16763__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__16763__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__16775__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__16775__auto__)){
return or__16775__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25708 = arguments.length;
var i__17834__auto___25709 = (0);
while(true){
if((i__17834__auto___25709 < len__17833__auto___25708)){
args__17840__auto__.push((arguments[i__17834__auto___25709]));

var G__25710 = (i__17834__auto___25709 + (1));
i__17834__auto___25709 = G__25710;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((2) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17841__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq25705){
var G__25706 = cljs.core.first.call(null,seq25705);
var seq25705__$1 = cljs.core.next.call(null,seq25705);
var G__25707 = cljs.core.first.call(null,seq25705__$1);
var seq25705__$2 = cljs.core.next.call(null,seq25705__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25706,G__25707,seq25705__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25736 = arguments.length;
var i__17834__auto___25737 = (0);
while(true){
if((i__17834__auto___25737 < len__17833__auto___25736)){
args__17840__auto__.push((arguments[i__17834__auto___25737]));

var G__25738 = (i__17834__auto___25737 + (1));
i__17834__auto___25737 = G__25738;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__25713_25739 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25740 = cljs.core.nth.call(null,vec__25713_25739,(0),null);
var selector_25741 = cljs.core.nth.call(null,vec__25713_25739,(1),null);
var seq__25714_25742 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25721_25743 = null;
var count__25722_25744 = (0);
var i__25723_25745 = (0);
while(true){
if((i__25723_25745 < count__25722_25744)){
var vec__25730_25746 = cljs.core._nth.call(null,chunk__25721_25743,i__25723_25745);
var orig_type_25747 = cljs.core.nth.call(null,vec__25730_25746,(0),null);
var f_25748 = cljs.core.nth.call(null,vec__25730_25746,(1),null);
var seq__25724_25749 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25747,cljs.core.PersistentArrayMap.fromArray([orig_type_25747,cljs.core.identity], true, false)));
var chunk__25726_25750 = null;
var count__25727_25751 = (0);
var i__25728_25752 = (0);
while(true){
if((i__25728_25752 < count__25727_25751)){
var vec__25731_25753 = cljs.core._nth.call(null,chunk__25726_25750,i__25728_25752);
var actual_type_25754 = cljs.core.nth.call(null,vec__25731_25753,(0),null);
var factory_25755 = cljs.core.nth.call(null,vec__25731_25753,(1),null);
var canonical_f_25756 = (cljs.core.truth_(selector_25741)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25740,selector_25741):cljs.core.identity).call(null,factory_25755.call(null,f_25748));
dommy.core.update_event_listeners_BANG_.call(null,elem_25740,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25741,actual_type_25754,f_25748], null),canonical_f_25756);

if(cljs.core.truth_(elem_25740.addEventListener)){
elem_25740.addEventListener(cljs.core.name.call(null,actual_type_25754),canonical_f_25756);
} else {
elem_25740.attachEvent(cljs.core.name.call(null,actual_type_25754),canonical_f_25756);
}

var G__25757 = seq__25724_25749;
var G__25758 = chunk__25726_25750;
var G__25759 = count__25727_25751;
var G__25760 = (i__25728_25752 + (1));
seq__25724_25749 = G__25757;
chunk__25726_25750 = G__25758;
count__25727_25751 = G__25759;
i__25728_25752 = G__25760;
continue;
} else {
var temp__4657__auto___25761 = cljs.core.seq.call(null,seq__25724_25749);
if(temp__4657__auto___25761){
var seq__25724_25762__$1 = temp__4657__auto___25761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25724_25762__$1)){
var c__17578__auto___25763 = cljs.core.chunk_first.call(null,seq__25724_25762__$1);
var G__25764 = cljs.core.chunk_rest.call(null,seq__25724_25762__$1);
var G__25765 = c__17578__auto___25763;
var G__25766 = cljs.core.count.call(null,c__17578__auto___25763);
var G__25767 = (0);
seq__25724_25749 = G__25764;
chunk__25726_25750 = G__25765;
count__25727_25751 = G__25766;
i__25728_25752 = G__25767;
continue;
} else {
var vec__25732_25768 = cljs.core.first.call(null,seq__25724_25762__$1);
var actual_type_25769 = cljs.core.nth.call(null,vec__25732_25768,(0),null);
var factory_25770 = cljs.core.nth.call(null,vec__25732_25768,(1),null);
var canonical_f_25771 = (cljs.core.truth_(selector_25741)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25740,selector_25741):cljs.core.identity).call(null,factory_25770.call(null,f_25748));
dommy.core.update_event_listeners_BANG_.call(null,elem_25740,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25741,actual_type_25769,f_25748], null),canonical_f_25771);

if(cljs.core.truth_(elem_25740.addEventListener)){
elem_25740.addEventListener(cljs.core.name.call(null,actual_type_25769),canonical_f_25771);
} else {
elem_25740.attachEvent(cljs.core.name.call(null,actual_type_25769),canonical_f_25771);
}

var G__25772 = cljs.core.next.call(null,seq__25724_25762__$1);
var G__25773 = null;
var G__25774 = (0);
var G__25775 = (0);
seq__25724_25749 = G__25772;
chunk__25726_25750 = G__25773;
count__25727_25751 = G__25774;
i__25728_25752 = G__25775;
continue;
}
} else {
}
}
break;
}

var G__25776 = seq__25714_25742;
var G__25777 = chunk__25721_25743;
var G__25778 = count__25722_25744;
var G__25779 = (i__25723_25745 + (1));
seq__25714_25742 = G__25776;
chunk__25721_25743 = G__25777;
count__25722_25744 = G__25778;
i__25723_25745 = G__25779;
continue;
} else {
var temp__4657__auto___25780 = cljs.core.seq.call(null,seq__25714_25742);
if(temp__4657__auto___25780){
var seq__25714_25781__$1 = temp__4657__auto___25780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25714_25781__$1)){
var c__17578__auto___25782 = cljs.core.chunk_first.call(null,seq__25714_25781__$1);
var G__25783 = cljs.core.chunk_rest.call(null,seq__25714_25781__$1);
var G__25784 = c__17578__auto___25782;
var G__25785 = cljs.core.count.call(null,c__17578__auto___25782);
var G__25786 = (0);
seq__25714_25742 = G__25783;
chunk__25721_25743 = G__25784;
count__25722_25744 = G__25785;
i__25723_25745 = G__25786;
continue;
} else {
var vec__25733_25787 = cljs.core.first.call(null,seq__25714_25781__$1);
var orig_type_25788 = cljs.core.nth.call(null,vec__25733_25787,(0),null);
var f_25789 = cljs.core.nth.call(null,vec__25733_25787,(1),null);
var seq__25715_25790 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25788,cljs.core.PersistentArrayMap.fromArray([orig_type_25788,cljs.core.identity], true, false)));
var chunk__25717_25791 = null;
var count__25718_25792 = (0);
var i__25719_25793 = (0);
while(true){
if((i__25719_25793 < count__25718_25792)){
var vec__25734_25794 = cljs.core._nth.call(null,chunk__25717_25791,i__25719_25793);
var actual_type_25795 = cljs.core.nth.call(null,vec__25734_25794,(0),null);
var factory_25796 = cljs.core.nth.call(null,vec__25734_25794,(1),null);
var canonical_f_25797 = (cljs.core.truth_(selector_25741)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25740,selector_25741):cljs.core.identity).call(null,factory_25796.call(null,f_25789));
dommy.core.update_event_listeners_BANG_.call(null,elem_25740,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25741,actual_type_25795,f_25789], null),canonical_f_25797);

if(cljs.core.truth_(elem_25740.addEventListener)){
elem_25740.addEventListener(cljs.core.name.call(null,actual_type_25795),canonical_f_25797);
} else {
elem_25740.attachEvent(cljs.core.name.call(null,actual_type_25795),canonical_f_25797);
}

var G__25798 = seq__25715_25790;
var G__25799 = chunk__25717_25791;
var G__25800 = count__25718_25792;
var G__25801 = (i__25719_25793 + (1));
seq__25715_25790 = G__25798;
chunk__25717_25791 = G__25799;
count__25718_25792 = G__25800;
i__25719_25793 = G__25801;
continue;
} else {
var temp__4657__auto___25802__$1 = cljs.core.seq.call(null,seq__25715_25790);
if(temp__4657__auto___25802__$1){
var seq__25715_25803__$1 = temp__4657__auto___25802__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25715_25803__$1)){
var c__17578__auto___25804 = cljs.core.chunk_first.call(null,seq__25715_25803__$1);
var G__25805 = cljs.core.chunk_rest.call(null,seq__25715_25803__$1);
var G__25806 = c__17578__auto___25804;
var G__25807 = cljs.core.count.call(null,c__17578__auto___25804);
var G__25808 = (0);
seq__25715_25790 = G__25805;
chunk__25717_25791 = G__25806;
count__25718_25792 = G__25807;
i__25719_25793 = G__25808;
continue;
} else {
var vec__25735_25809 = cljs.core.first.call(null,seq__25715_25803__$1);
var actual_type_25810 = cljs.core.nth.call(null,vec__25735_25809,(0),null);
var factory_25811 = cljs.core.nth.call(null,vec__25735_25809,(1),null);
var canonical_f_25812 = (cljs.core.truth_(selector_25741)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25740,selector_25741):cljs.core.identity).call(null,factory_25811.call(null,f_25789));
dommy.core.update_event_listeners_BANG_.call(null,elem_25740,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25741,actual_type_25810,f_25789], null),canonical_f_25812);

if(cljs.core.truth_(elem_25740.addEventListener)){
elem_25740.addEventListener(cljs.core.name.call(null,actual_type_25810),canonical_f_25812);
} else {
elem_25740.attachEvent(cljs.core.name.call(null,actual_type_25810),canonical_f_25812);
}

var G__25813 = cljs.core.next.call(null,seq__25715_25803__$1);
var G__25814 = null;
var G__25815 = (0);
var G__25816 = (0);
seq__25715_25790 = G__25813;
chunk__25717_25791 = G__25814;
count__25718_25792 = G__25815;
i__25719_25793 = G__25816;
continue;
}
} else {
}
}
break;
}

var G__25817 = cljs.core.next.call(null,seq__25714_25781__$1);
var G__25818 = null;
var G__25819 = (0);
var G__25820 = (0);
seq__25714_25742 = G__25817;
chunk__25721_25743 = G__25818;
count__25722_25744 = G__25819;
i__25723_25745 = G__25820;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq25711){
var G__25712 = cljs.core.first.call(null,seq25711);
var seq25711__$1 = cljs.core.next.call(null,seq25711);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25712,seq25711__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25846 = arguments.length;
var i__17834__auto___25847 = (0);
while(true){
if((i__17834__auto___25847 < len__17833__auto___25846)){
args__17840__auto__.push((arguments[i__17834__auto___25847]));

var G__25848 = (i__17834__auto___25847 + (1));
i__17834__auto___25847 = G__25848;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__25823_25849 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25850 = cljs.core.nth.call(null,vec__25823_25849,(0),null);
var selector_25851 = cljs.core.nth.call(null,vec__25823_25849,(1),null);
var seq__25824_25852 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25831_25853 = null;
var count__25832_25854 = (0);
var i__25833_25855 = (0);
while(true){
if((i__25833_25855 < count__25832_25854)){
var vec__25840_25856 = cljs.core._nth.call(null,chunk__25831_25853,i__25833_25855);
var orig_type_25857 = cljs.core.nth.call(null,vec__25840_25856,(0),null);
var f_25858 = cljs.core.nth.call(null,vec__25840_25856,(1),null);
var seq__25834_25859 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25857,cljs.core.PersistentArrayMap.fromArray([orig_type_25857,cljs.core.identity], true, false)));
var chunk__25836_25860 = null;
var count__25837_25861 = (0);
var i__25838_25862 = (0);
while(true){
if((i__25838_25862 < count__25837_25861)){
var vec__25841_25863 = cljs.core._nth.call(null,chunk__25836_25860,i__25838_25862);
var actual_type_25864 = cljs.core.nth.call(null,vec__25841_25863,(0),null);
var __25865 = cljs.core.nth.call(null,vec__25841_25863,(1),null);
var keys_25866 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25851,actual_type_25864,f_25858], null);
var canonical_f_25867 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25850),keys_25866);
dommy.core.update_event_listeners_BANG_.call(null,elem_25850,dommy.utils.dissoc_in,keys_25866);

if(cljs.core.truth_(elem_25850.removeEventListener)){
elem_25850.removeEventListener(cljs.core.name.call(null,actual_type_25864),canonical_f_25867);
} else {
elem_25850.detachEvent(cljs.core.name.call(null,actual_type_25864),canonical_f_25867);
}

var G__25868 = seq__25834_25859;
var G__25869 = chunk__25836_25860;
var G__25870 = count__25837_25861;
var G__25871 = (i__25838_25862 + (1));
seq__25834_25859 = G__25868;
chunk__25836_25860 = G__25869;
count__25837_25861 = G__25870;
i__25838_25862 = G__25871;
continue;
} else {
var temp__4657__auto___25872 = cljs.core.seq.call(null,seq__25834_25859);
if(temp__4657__auto___25872){
var seq__25834_25873__$1 = temp__4657__auto___25872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25834_25873__$1)){
var c__17578__auto___25874 = cljs.core.chunk_first.call(null,seq__25834_25873__$1);
var G__25875 = cljs.core.chunk_rest.call(null,seq__25834_25873__$1);
var G__25876 = c__17578__auto___25874;
var G__25877 = cljs.core.count.call(null,c__17578__auto___25874);
var G__25878 = (0);
seq__25834_25859 = G__25875;
chunk__25836_25860 = G__25876;
count__25837_25861 = G__25877;
i__25838_25862 = G__25878;
continue;
} else {
var vec__25842_25879 = cljs.core.first.call(null,seq__25834_25873__$1);
var actual_type_25880 = cljs.core.nth.call(null,vec__25842_25879,(0),null);
var __25881 = cljs.core.nth.call(null,vec__25842_25879,(1),null);
var keys_25882 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25851,actual_type_25880,f_25858], null);
var canonical_f_25883 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25850),keys_25882);
dommy.core.update_event_listeners_BANG_.call(null,elem_25850,dommy.utils.dissoc_in,keys_25882);

if(cljs.core.truth_(elem_25850.removeEventListener)){
elem_25850.removeEventListener(cljs.core.name.call(null,actual_type_25880),canonical_f_25883);
} else {
elem_25850.detachEvent(cljs.core.name.call(null,actual_type_25880),canonical_f_25883);
}

var G__25884 = cljs.core.next.call(null,seq__25834_25873__$1);
var G__25885 = null;
var G__25886 = (0);
var G__25887 = (0);
seq__25834_25859 = G__25884;
chunk__25836_25860 = G__25885;
count__25837_25861 = G__25886;
i__25838_25862 = G__25887;
continue;
}
} else {
}
}
break;
}

var G__25888 = seq__25824_25852;
var G__25889 = chunk__25831_25853;
var G__25890 = count__25832_25854;
var G__25891 = (i__25833_25855 + (1));
seq__25824_25852 = G__25888;
chunk__25831_25853 = G__25889;
count__25832_25854 = G__25890;
i__25833_25855 = G__25891;
continue;
} else {
var temp__4657__auto___25892 = cljs.core.seq.call(null,seq__25824_25852);
if(temp__4657__auto___25892){
var seq__25824_25893__$1 = temp__4657__auto___25892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25824_25893__$1)){
var c__17578__auto___25894 = cljs.core.chunk_first.call(null,seq__25824_25893__$1);
var G__25895 = cljs.core.chunk_rest.call(null,seq__25824_25893__$1);
var G__25896 = c__17578__auto___25894;
var G__25897 = cljs.core.count.call(null,c__17578__auto___25894);
var G__25898 = (0);
seq__25824_25852 = G__25895;
chunk__25831_25853 = G__25896;
count__25832_25854 = G__25897;
i__25833_25855 = G__25898;
continue;
} else {
var vec__25843_25899 = cljs.core.first.call(null,seq__25824_25893__$1);
var orig_type_25900 = cljs.core.nth.call(null,vec__25843_25899,(0),null);
var f_25901 = cljs.core.nth.call(null,vec__25843_25899,(1),null);
var seq__25825_25902 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25900,cljs.core.PersistentArrayMap.fromArray([orig_type_25900,cljs.core.identity], true, false)));
var chunk__25827_25903 = null;
var count__25828_25904 = (0);
var i__25829_25905 = (0);
while(true){
if((i__25829_25905 < count__25828_25904)){
var vec__25844_25906 = cljs.core._nth.call(null,chunk__25827_25903,i__25829_25905);
var actual_type_25907 = cljs.core.nth.call(null,vec__25844_25906,(0),null);
var __25908 = cljs.core.nth.call(null,vec__25844_25906,(1),null);
var keys_25909 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25851,actual_type_25907,f_25901], null);
var canonical_f_25910 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25850),keys_25909);
dommy.core.update_event_listeners_BANG_.call(null,elem_25850,dommy.utils.dissoc_in,keys_25909);

if(cljs.core.truth_(elem_25850.removeEventListener)){
elem_25850.removeEventListener(cljs.core.name.call(null,actual_type_25907),canonical_f_25910);
} else {
elem_25850.detachEvent(cljs.core.name.call(null,actual_type_25907),canonical_f_25910);
}

var G__25911 = seq__25825_25902;
var G__25912 = chunk__25827_25903;
var G__25913 = count__25828_25904;
var G__25914 = (i__25829_25905 + (1));
seq__25825_25902 = G__25911;
chunk__25827_25903 = G__25912;
count__25828_25904 = G__25913;
i__25829_25905 = G__25914;
continue;
} else {
var temp__4657__auto___25915__$1 = cljs.core.seq.call(null,seq__25825_25902);
if(temp__4657__auto___25915__$1){
var seq__25825_25916__$1 = temp__4657__auto___25915__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25825_25916__$1)){
var c__17578__auto___25917 = cljs.core.chunk_first.call(null,seq__25825_25916__$1);
var G__25918 = cljs.core.chunk_rest.call(null,seq__25825_25916__$1);
var G__25919 = c__17578__auto___25917;
var G__25920 = cljs.core.count.call(null,c__17578__auto___25917);
var G__25921 = (0);
seq__25825_25902 = G__25918;
chunk__25827_25903 = G__25919;
count__25828_25904 = G__25920;
i__25829_25905 = G__25921;
continue;
} else {
var vec__25845_25922 = cljs.core.first.call(null,seq__25825_25916__$1);
var actual_type_25923 = cljs.core.nth.call(null,vec__25845_25922,(0),null);
var __25924 = cljs.core.nth.call(null,vec__25845_25922,(1),null);
var keys_25925 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25851,actual_type_25923,f_25901], null);
var canonical_f_25926 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25850),keys_25925);
dommy.core.update_event_listeners_BANG_.call(null,elem_25850,dommy.utils.dissoc_in,keys_25925);

if(cljs.core.truth_(elem_25850.removeEventListener)){
elem_25850.removeEventListener(cljs.core.name.call(null,actual_type_25923),canonical_f_25926);
} else {
elem_25850.detachEvent(cljs.core.name.call(null,actual_type_25923),canonical_f_25926);
}

var G__25927 = cljs.core.next.call(null,seq__25825_25916__$1);
var G__25928 = null;
var G__25929 = (0);
var G__25930 = (0);
seq__25825_25902 = G__25927;
chunk__25827_25903 = G__25928;
count__25828_25904 = G__25929;
i__25829_25905 = G__25930;
continue;
}
} else {
}
}
break;
}

var G__25931 = cljs.core.next.call(null,seq__25824_25893__$1);
var G__25932 = null;
var G__25933 = (0);
var G__25934 = (0);
seq__25824_25852 = G__25931;
chunk__25831_25853 = G__25932;
count__25832_25854 = G__25933;
i__25833_25855 = G__25934;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq25821){
var G__25822 = cljs.core.first.call(null,seq25821);
var seq25821__$1 = cljs.core.next.call(null,seq25821);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25822,seq25821__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__17840__auto__ = [];
var len__17833__auto___25944 = arguments.length;
var i__17834__auto___25945 = (0);
while(true){
if((i__17834__auto___25945 < len__17833__auto___25944)){
args__17840__auto__.push((arguments[i__17834__auto___25945]));

var G__25946 = (i__17834__auto___25945 + (1));
i__17834__auto___25945 = G__25946;
continue;
} else {
}
break;
}

var argseq__17841__auto__ = ((((1) < args__17840__auto__.length))?(new cljs.core.IndexedSeq(args__17840__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17841__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__25937_25947 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25948 = cljs.core.nth.call(null,vec__25937_25947,(0),null);
var selector_25949 = cljs.core.nth.call(null,vec__25937_25947,(1),null);
var seq__25938_25950 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25939_25951 = null;
var count__25940_25952 = (0);
var i__25941_25953 = (0);
while(true){
if((i__25941_25953 < count__25940_25952)){
var vec__25942_25954 = cljs.core._nth.call(null,chunk__25939_25951,i__25941_25953);
var type_25955 = cljs.core.nth.call(null,vec__25942_25954,(0),null);
var f_25956 = cljs.core.nth.call(null,vec__25942_25954,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_25955,((function (seq__25938_25950,chunk__25939_25951,count__25940_25952,i__25941_25953,vec__25942_25954,type_25955,f_25956,vec__25937_25947,elem_25948,selector_25949){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_25955,dommy$core$this_fn);

return f_25956.call(null,e);
});})(seq__25938_25950,chunk__25939_25951,count__25940_25952,i__25941_25953,vec__25942_25954,type_25955,f_25956,vec__25937_25947,elem_25948,selector_25949))
);

var G__25957 = seq__25938_25950;
var G__25958 = chunk__25939_25951;
var G__25959 = count__25940_25952;
var G__25960 = (i__25941_25953 + (1));
seq__25938_25950 = G__25957;
chunk__25939_25951 = G__25958;
count__25940_25952 = G__25959;
i__25941_25953 = G__25960;
continue;
} else {
var temp__4657__auto___25961 = cljs.core.seq.call(null,seq__25938_25950);
if(temp__4657__auto___25961){
var seq__25938_25962__$1 = temp__4657__auto___25961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25938_25962__$1)){
var c__17578__auto___25963 = cljs.core.chunk_first.call(null,seq__25938_25962__$1);
var G__25964 = cljs.core.chunk_rest.call(null,seq__25938_25962__$1);
var G__25965 = c__17578__auto___25963;
var G__25966 = cljs.core.count.call(null,c__17578__auto___25963);
var G__25967 = (0);
seq__25938_25950 = G__25964;
chunk__25939_25951 = G__25965;
count__25940_25952 = G__25966;
i__25941_25953 = G__25967;
continue;
} else {
var vec__25943_25968 = cljs.core.first.call(null,seq__25938_25962__$1);
var type_25969 = cljs.core.nth.call(null,vec__25943_25968,(0),null);
var f_25970 = cljs.core.nth.call(null,vec__25943_25968,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_25969,((function (seq__25938_25950,chunk__25939_25951,count__25940_25952,i__25941_25953,vec__25943_25968,type_25969,f_25970,seq__25938_25962__$1,temp__4657__auto___25961,vec__25937_25947,elem_25948,selector_25949){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_25969,dommy$core$this_fn);

return f_25970.call(null,e);
});})(seq__25938_25950,chunk__25939_25951,count__25940_25952,i__25941_25953,vec__25943_25968,type_25969,f_25970,seq__25938_25962__$1,temp__4657__auto___25961,vec__25937_25947,elem_25948,selector_25949))
);

var G__25971 = cljs.core.next.call(null,seq__25938_25962__$1);
var G__25972 = null;
var G__25973 = (0);
var G__25974 = (0);
seq__25938_25950 = G__25971;
chunk__25939_25951 = G__25972;
count__25940_25952 = G__25973;
i__25941_25953 = G__25974;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq25935){
var G__25936 = cljs.core.first.call(null,seq25935);
var seq25935__$1 = cljs.core.next.call(null,seq25935);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25936,seq25935__$1);
});

//# sourceMappingURL=core.js.map