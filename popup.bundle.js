(function(){'use strict';var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};
$jscomp.SymbolClass=function(a,c){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:c})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};$jscomp.Symbol=function(){function a(b){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(b||"")+"_"+c++,b)}var c=0;return a}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};
$jscomp.iteratorFromArray=function(a,c){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var b=0,d={next:function(){if(b<a.length){var e=b++;return{value:c(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};
$jscomp.polyfill=function(a,c,b,d){if(c){b=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in b||(b[e]={});b=b[e]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})}};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6","es3");
(function(a){function c(d){if(b[d])return b[d].exports;var e=b[d]={i:d,l:!1,exports:{}};a[d].call(e.exports,e,e.exports,c);e.l=!0;return e.exports}var b={};c.m=a;c.c=b;c.d=function(a,b,l){c.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:l})};c.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})};c.t=function(a,b){b&1&&(a=c(a));if(b&8||b&4&&"object"===typeof a&&a&&a.__esModule)return a;
var d=Object.create(null);c.r(d);Object.defineProperty(d,"default",{enumerable:!0,value:a});if(b&2&&"string"!=typeof a)for(var e in a)c.d(d,e,function(b){return a[b]}.bind(null,e));return d};c.n=function(a){var b=a&&a.__esModule?function(){return a["default"]}:function(){return a};c.d(b,"a",b);return b};c.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};c.p="";return c(c.s=16)})([function(a,c,b){function d(a,b){var c=a[1]||"",d=a[3];return d?b&&"function"===typeof btoa?(a="/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+
btoa(unescape(encodeURIComponent(JSON.stringify(d))))+" */",b=d.sources.map(function(a){return"/*# sourceURL="+d.sourceRoot+a+" */"}),[c].concat(b).concat([a]).join("\n")):[c].join("\n"):c}a.exports=function(a){var b=[];b.toString=function(){return this.map(function(b){var c=d(b,a);return b[2]?"@media "+b[2]+"{"+c+"}":c}).join("")};b.i=function(a,c){"string"===typeof a&&(a=[[null,a,""]]);for(var d={},e=0;e<this.length;e++){var f=this[e][0];null!=f&&(d[f]=!0)}for(e=0;e<a.length;e++)f=a[e],null!=f[0]&&
d[f[0]]||(c&&!f[2]?f[2]=c:c&&(f[2]="("+f[2]+") and ("+c+")"),b.push(f))};return b}},function(a,c,b){a.exports=function(a,b){if("string"!==typeof a)return a;/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1));return/["'() \t\n]/.test(a)||b?'"'+a.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':a}},function(a,c,b){function d(a,b){for(var c=0;c<a.length;c++){var g=a[c],h=r[g.id];if(h){h.refs++;for(var d=0;d<h.parts.length;d++)h.parts[d](g.parts[d]);for(;d<g.parts.length;d++)h.parts.push(f(g.parts[d],b))}else{h=[];
for(d=0;d<g.parts.length;d++)h.push(f(g.parts[d],b));r[g.id]={id:g.id,refs:1,parts:h}}}}function e(a,b){for(var c=[],g={},h=0;h<a.length;h++){var d=a[h],e=b.base?d[0]+b.base:d[0];d={css:d[1],media:d[2],sourceMap:d[3]};g[e]?g[e].parts.push(d):c.push(g[e]={id:e,parts:[d]})}return c}function l(a,b){var c=u(a.insertInto);if(!c)throw Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var d=p[p.length-1];if("top"===a.insertAt)d?d.nextSibling?
c.insertBefore(b,d.nextSibling):c.appendChild(b):c.insertBefore(b,c.firstChild),p.push(b);else if("bottom"===a.insertAt)c.appendChild(b);else if("object"===typeof a.insertAt&&a.insertAt.before)a=u(a.insertAt.before,c),c.insertBefore(b,a);else throw Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");}function q(a){if(null===a.parentNode)return!1;a.parentNode.removeChild(a);
a=p.indexOf(a);0<=a&&p.splice(a,1)}function t(a){var c=document.createElement("style");void 0===a.attrs.type&&(a.attrs.type="text/css");if(void 0===a.attrs.nonce){var d;if(d=b.nc)a.attrs.nonce=d}k(c,a.attrs);l(a,c);return c}function m(a){var b=document.createElement("link");void 0===a.attrs.type&&(a.attrs.type="text/css");a.attrs.rel="stylesheet";k(b,a.attrs);l(a,b);return b}function k(a,b){Object.keys(b).forEach(function(c){a.setAttribute(c,b[c])})}function f(a,b){var c;if(b.transform&&a.css)if(c=
"function"===typeof b.transform?b.transform(a.css):b.transform.default(a.css))a.css=c;else return function(){};if(b.singleton){c=w++;var d=v||(v=t(b));var g=n.bind(null,d,c,!1);var e=n.bind(null,d,c,!0)}else a.sourceMap&&"function"===typeof URL&&"function"===typeof URL.createObjectURL&&"function"===typeof URL.revokeObjectURL&&"function"===typeof Blob&&"function"===typeof btoa?(d=m(b),g=x.bind(null,d,b),e=function(){q(d);d.href&&URL.revokeObjectURL(d.href)}):(d=t(b),g=y.bind(null,d),e=function(){q(d)});
g(a);return function(b){b?(b.css!==a.css||b.media!==a.media||b.sourceMap!==a.sourceMap)&&g(a=b):e()}}function n(a,b,c,d){c=c?"":d.css;a.styleSheet?a.styleSheet.cssText=z(b,c):(c=document.createTextNode(c),d=a.childNodes,d[b]&&a.removeChild(d[b]),d.length?a.insertBefore(c,d[b]):a.appendChild(c))}function y(a,b){var c=b.css;(b=b.media)&&a.setAttribute("media",b);if(a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}function x(a,
b,c){var d=c.css;c=c.sourceMap;var e=void 0===b.convertToAbsoluteUrls&&c;if(b.convertToAbsoluteUrls||e)d=A(d);c&&(d+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */");b=new Blob([d],{type:"text/css"});d=a.href;a.href=URL.createObjectURL(b);d&&URL.revokeObjectURL(d)}var r={},B=function(a){var b;return function(){"undefined"===typeof b&&(b=a.apply(this,arguments));return b}}(function(){return window&&document&&document.all&&!window.atob}),
u=function(a){var b={};return function(a,c){if("function"===typeof a)return a();if("undefined"===typeof b[a]){c=c?c.querySelector(a):document.querySelector(a);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(C){c=null}b[a]=c}return b[a]}}(),v=null,w=0,p=[],A=b(13);a.exports=function(a,b){if("undefined"!==typeof DEBUG&&DEBUG&&"object"!==typeof document)throw Error("The style-loader cannot be used in a non-browser environment");b=b||{};b.attrs="object"===
typeof b.attrs?b.attrs:{};b.singleton||"boolean"===typeof b.singleton||(b.singleton=B());b.insertInto||(b.insertInto="head");b.insertAt||(b.insertAt="bottom");var c=e(a,b);d(c,b);return function(a){for(var n=[],f=0;f<c.length;f++){var g=r[c[f].id];g.refs--;n.push(g)}a&&(f=e(a,b),d(f,b));for(f=0;f<n.length;f++)if(g=n[f],0===g.refs){for(a=0;a<g.parts.length;a++)g.parts[a]();delete r[g.id]}}};var z=function(){var a=[];return function(b,c){a[b]=c;return a.filter(Boolean).join("\n")}}()},,,function(a,
c,b){a.exports=b.p+"on.png"},function(a,c,b){a.exports=b.p+"off.png"},function(a,c,b){c=b(8);"string"===typeof c&&(c=[[a.i,c,""]]);b(2)(c,{hmr:!0,transform:void 0,insertInto:void 0});c.locals&&(a.exports=c.locals)},function(a,c,b){c=a.exports=b(0)(!1);var d=b(1),e=d(b(9)),l=d(b(10)),q=d(b(11));b=d(b(12));c.push([a.i,"  /* roboto-100normal - latin */\n  @font-face {\n      font-family: 'Roboto';\n      font-style: normal;\n      font-display: swap;\n      font-weight: 100;\n      src: local('Roboto Thin '), local('Roboto-Thin'), url("+
e+") format('woff2');\n      /* Modern Browsers */\n  }\n\n  /* roboto-300normal - latin */\n  @font-face {\n      font-family: 'Roboto';\n      font-style: normal;\n      font-display: swap;\n      font-weight: 300;\n      src: local('Roboto Light '), local('Roboto-Light'), url("+l+") format('woff2');\n      /* Modern Browsers */\n  }\n\n  /* roboto-400normal - latin */\n  @font-face {\n      font-family: 'Roboto';\n      font-style: normal;\n      font-display: swap;\n      font-weight: 400;\n      src: local('Roboto Regular '), local('Roboto-Regular'), url("+
q+") format('woff2');\n      /* Modern Browsers */\n  }\n\n  /* roboto-500normal - latin */\n  @font-face {\n      font-family: 'Roboto';\n      font-style: normal;\n      font-display: swap;\n      font-weight: 500;\n      src: local('Roboto Medium '), local('Roboto-Medium'), url("+b+") format('woff2');\n      /* Modern Browsers */\n  }\n",""])},function(a,c,b){a.exports=b.p+"roboto-latin-100.woff2"},function(a,c,b){a.exports=b.p+"roboto-latin-300.woff2"},function(a,c,b){a.exports=b.p+"roboto-latin-400.woff2"},
function(a,c,b){a.exports=b.p+"roboto-latin-500.woff2"},function(a,c){a.exports=function(a){var b="undefined"!==typeof window&&window.location;if(!b)throw Error("fixUrls requires window.location");if(!a||"string"!==typeof a)return a;var c=b.protocol+"//"+b.host,l=c+b.pathname.replace(/\/[^\/]*$/,"/");return a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(a,b){b=b.trim().replace(/^"(.*)"$/,function(a,b){return b}).replace(/^'(.*)'$/,function(a,b){return b});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(b))return a;
a=0===b.indexOf("//")?b:0===b.indexOf("/")?c+b:l+b.replace(/^\.\//,"");return"url("+JSON.stringify(a)+")"})}},function(a,c,b){a.exports=b.p+"heart-red.png"},,function(a,c,b){b.r(c);a=b(7);b.n(a);a=b(17);b.n(a);a=b(5);var d=b.n(a);a=b(6);var e=b.n(a);(function(){function a(a){!0===c?document.querySelector(".enable-copy img").src=d.a:(document.querySelector(".enable-copy img").src=e.a,1==a&&b());!0===m?document.querySelector(".abs-mode img").src=d.a:(document.querySelector(".abs-mode img").src=e.a,
1==a&&b());!0===f?document.querySelector(".javascript-mode img").src=d.a:(document.querySelector(".javascript-mode img").src=e.a,1==a&&b());!1===c&&!1===m&&!1===f?document.querySelector(".state span").innerHTML="Not Enabled":document.querySelector(".state span").innerHTML="Enabled"}function b(){document.querySelector(".reload").style.display="flex"}var c=!1,m=!1,k=!1,f=!1;chrome.runtime.sendMessage({text:"state"});chrome.runtime.onMessage.addListener(function(b){"true"===b.c&&(c=!0);"true"===b.a&&
(m=!0);"true"===b.j&&(f=!0);a()});document.querySelector(".enable-copy").onclick=function(){if(!1===c){c=!0;var b={text:"c-true"}}else c=!1,k=!0,b={text:"c-false"};chrome.runtime.sendMessage(b);a(k)};document.querySelector(".abs-mode").onclick=function(){if(0==m){m=!0;var b={text:"a-true"}}else m=!1,k=!0,b={text:"a-false"};chrome.runtime.sendMessage(b);a(k)};document.querySelector(".javascript-mode").onclick=function(){if(0==f){f=!0;var b={text:"j-true"}}else f=!1,k=!0,b={text:"j-false"};chrome.runtime.sendMessage(b);
chrome.tabs.reload();window.close();a(k)};document.querySelector(".reload").onclick=function(){chrome.tabs.reload();window.close()};document.querySelector(".settings").addEventListener("click",function(){chrome.tabs.query({active:!0,currentWindow:!0},function(a){chrome.tabs.create({url:"options.html",index:a[0].index+1,active:!0,openerTabId:a[0].id});window.close()})});document.querySelector(".version").addEventListener("click",function(){chrome.tabs.query({active:!0,currentWindow:!0},function(a){chrome.tabs.create({url:"https://chrome.google.com/webstore/detail/"+
chrome.runtime.id+"/reviews",index:a[0].index+1,active:!0,openerTabId:a[0].id});window.close()})});document.addEventListener("dragstart",function(a){a.preventDefault();return!1});chrome.tabs.query({active:!0,currentWindow:!0},function(a){/^https?:\/\//i.test(a[0].url)||(document.querySelector(".enable-copy").remove(),document.querySelector(".abs-mode").remove(),document.querySelector(".javascript-mode").remove(),document.querySelector(".description").remove(),document.querySelector(".state").style=
"color: #a98e8e; height: 150px; display: grid; align-items: center;",document.querySelector(".state span").innerHTML="Unable to run on this page")})})()},function(a,c,b){c=b(18);"string"===typeof c&&(c=[[a.i,c,""]]);b(2)(c,{hmr:!0,transform:void 0,insertInto:void 0});c.locals&&(a.exports=c.locals)},function(a,c,b){c=a.exports=b(0)(!1);var d=b(1),e=d(b(14));b=d(b(19));c.push([a.i,"html {\n    overflow: scroll;\n    overflow-x: hidden;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    background-color: #fff;\n    overflow: hidden;\n}\n\ndiv,\nimg {\n    user-select: none;\n    -webkit-user-select: none;\n    -webkit-user-drag: none;\n    -moz-user-select: none;\n    -moz-user-drag: none;\n}\n\n.content {\n    width: 240px;\n    height: auto;\n    margin: auto;\n    background-color: #fff;\n}\n\n.title-bar {\n    width: 100%;\n    height: 40px;\n    left: 0px;\n    top: 0px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    border-bottom: 1px solid #f6e6e6;\n}\n\n.title-bar span {\n    width: 100%;\n    font-size: 11.5px;\n    font-style: normal;\n    font-weight: normal;\n    color: #999;\n}\n\n.state {\n    font-size: 15px;\n    color: #666;\n    text-align: center;\n    padding: 26px;\n}\n\n.mid-container {\n    padding: 10px;\n    width: 190px;\n    height: 24px;\n    font-size: 14px;\n    color: #666;\n    margin: auto;\n    line-height: 20px;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #e4e4e4;\n}\n\n.enable-copy {\n    border-top: 1px solid #e4e4e4;\n}\n\n.mode-text {\n    margin: 0px;\n}\n\n.check-image {\n    width: auto;\n    height: 14px;\n    background-repeat: no-repeat;\n    user-select: none;\n    float: right;\n    margin: 0;\n    opacity: 0.8;\n}\n\n.description {\n    margin: 12px 0;\n    font-size: 12px;\n    display: grid;\n    align-items: center;\n    text-align: center;\n    height: 40px;\n    justify-content: center;\n}\n\n.reload {\n    display: none;\n    cursor: pointer;\n    opacity: 0.3;\n}\n\n.reload img {\n    width: auto;\n    height: 24px;\n    margin: auto;\n    transform: rotate(0deg);\n}\n\n.footer {\n    width: 240px;\n    height: 40px;\n    bottom: 0;\n    color: #545454;\n    background-color: #f1f3f4;\n    text-decoration: unset;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 0 0 2px 2px;\n    border-top: 1px solid #d8d8d8;\n}\n\n.version {\n    margin-left: 10px;\n    width: 22px;\n    height: 22px;\n    vertical-align: middle;\n    opacity: 0.6;\n    background-image: url("+
e+");\n    background-repeat: no-repeat;\n    background-size: 100%;\n    cursor: pointer;\n}\n\n.settings {\n    width: 22px;\n    height: 22px;\n    margin-right: 10px;\n    vertical-align: middle;\n    opacity: 0.4;\n    background-image: url("+b+");\n    background-repeat: no-repeat;\n    background-size: 100%;\n    cursor: pointer;\n}\n\n.footer .browsers {\n    position: relative;\n    left: 125px;\n    top: 2px;\n}\n\n.browsers img {\n    height: 20px;\n    width: auto;\n    cursor: pointer;\n}\n\n.enable-copy:hover,\n.abs-mode:hover,\n.javascript-mode:hover {\n    background: #ece9e3;\n}\n\n.enable-copy:active,\n.abs-mode:active,\n.javascript-mode:hover  {\n    background: #e4e1d9;\n}\n\n.reload:hover {\n    opacity: 0.6;\n}\n\n.reload:active {\n    opacity: 0.4;\n}\n\n.settings:hover {\n    opacity: 0.6;\n}\n\n.settings:active {\n    opacity: 0.5;\n}\n\n.version:hover {\n    opacity: 1;\n}\n\n.version:active {\n    opacity: 0.9;\n}",
""])},function(a,c,b){a.exports=b.p+"settings.png"}]);}).call(this || window)
