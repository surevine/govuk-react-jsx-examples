(this["webpackJsonpgovuk-react-jsx-examples"]=this["webpackJsonpgovuk-react-jsx-examples"]||[]).push([[12],{253:function(t,e,n){(function(e){var n;n=function(){"use strict";function t(t,e){if(window.NodeList.prototype.forEach)return t.forEach(e);for(var n=0;n<t.length;n++)e.call(window,t[n],n,t)}function n(t){this.$module=t,this.$tabs=t.querySelectorAll(".govuk-tabs__tab"),this.keys={left:37,right:39,up:38,down:40},this.jsHiddenClass="govuk-tabs__panel--hidden"}return function(t){"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||function(t){var e=Object.prototype.hasOwnProperty("__defineGetter__"),n="Getters & setters cannot be defined on this javascript engine",o="A property cannot both have accessors and be writable or have a value";Object.defineProperty=function(i,r,s){if(t&&(i===window||i===document||i===Element.prototype||i instanceof Element))return t(i,r,s);if(null===i||!(i instanceof Object||"object"===typeof i))throw new TypeError("Object.defineProperty called on non-object");if(!(s instanceof Object))throw new TypeError("Property description must be an object");var c=String(r),a="value"in s||"writable"in s,l="get"in s&&typeof s.get,u="set"in s&&typeof s.set;if(l){if("function"!==l)throw new TypeError("Getter must be a function");if(!e)throw new TypeError(n);if(a)throw new TypeError(o);Object.__defineGetter__.call(i,c,s.get)}else i[c]=s.value;if(u){if("function"!==u)throw new TypeError("Setter must be a function");if(!e)throw new TypeError(n);if(a)throw new TypeError(o);Object.__defineSetter__.call(i,c,s.set)}return"value"in s&&(i[c]=s.value),i}}(Object.defineProperty)}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof e&&e||{}),function(t){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function(t){var e,n=Array,o=Object,i=o.prototype,r=n.prototype,s=function(){},c=i.toString,a="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,l=Function.prototype.toString,u=function(t){try{return l.call(t),!0}catch(e){return!1}},d="[object Function]",p="[object GeneratorFunction]";e=function(t){if("function"!==typeof t)return!1;if(a)return u(t);var e=c.call(t);return e===d||e===p};var f=r.slice,h=r.concat,b=r.push,m=Math.max,y=this;if(!e(y))throw new TypeError("Function.prototype.bind called on incompatible "+y);for(var v,w=f.call(arguments,1),g=function(){if(this instanceof v){var e=y.apply(this,h.call(w,f.call(arguments)));return o(e)===e?e:this}return y.apply(t,h.call(w,f.call(arguments)))},E=m(0,y.length-w.length),T=[],L=0;L<E;L++)b.call(T,"$"+L);return v=Function("binder","return function ("+T.join(",")+"){ return binder.apply(this, arguments); }")(g),y.prototype&&(s.prototype=y.prototype,v.prototype=new s,s.prototype=null),v}})}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof e&&e||{}),function(t){var e;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||function(e){"DOMTokenList"in e&&e.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(e.DOMTokenList=function(){var e=!0,n=function(t,n,o,i){Object.defineProperty?Object.defineProperty(t,n,{configurable:!1===e||!!i,get:o}):t.__defineGetter__(n,o)};try{n({},"support")}catch(o){e=!1}return function(e,o){var i=this,r=[],s={},c=0,a=0,l=function(t){n(i,t,(function(){return d(),r[t]}),!1)},u=function(){if(c>=a)for(;a<c;++a)l(a)},d=function(){var t,n,i=arguments,a=/\s+/;if(i.length)for(n=0;n<i.length;++n)if(a.test(i[n]))throw(t=new SyntaxError('String "'+i[n]+'" contains an invalid character')).code=5,t.name="InvalidCharacterError",t;for(""===(r="object"===typeof e[o]?(""+e[o].baseVal).replace(/^\s+|\s+$/g,"").split(a):(""+e[o]).replace(/^\s+|\s+$/g,"").split(a))[0]&&(r=[]),s={},n=0;n<r.length;++n)s[r[n]]=!0;c=r.length,u()};return d(),n(i,"length",(function(){return d(),c})),i.toLocaleString=i.toString=function(){return d(),r.join(" ")},i.item=function(t){return d(),r[t]},i.contains=function(t){return d(),!!s[t]},i.add=function(){d.apply(i,t=arguments);for(var t,n,a=0,l=t.length;a<l;++a)n=t[a],s[n]||(r.push(n),s[n]=!0);c!==r.length&&(c=r.length>>>0,"object"===typeof e[o]?e[o].baseVal=r.join(" "):e[o]=r.join(" "),u())},i.remove=function(){d.apply(i,t=arguments);for(var t,n={},a=0,l=[];a<t.length;++a)n[t[a]]=!0,delete s[t[a]];for(a=0;a<r.length;++a)n[r[a]]||l.push(r[a]);r=l,c=l.length>>>0,"object"===typeof e[o]?e[o].baseVal=r.join(" "):e[o]=r.join(" "),u()},i.toggle=function(e,n){return d.apply(i,[e]),t!==n?n?(i.add(e),!0):(i.remove(e),!1):s[e]?(i.remove(e),!1):(i.add(e),!0)},i}}()),function(){var e=document.createElement("span");"classList"in e&&(e.classList.toggle("x",!1),e.classList.contains("x")&&(e.classList.constructor.prototype.toggle=function(e){var n=arguments[1];if(n===t){var o=!this.contains(e);return this[o?"add":"remove"](e),o}return this[(n=!!n)?"add":"remove"](e),n}))}(),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a","b"),!t.classList.contains("b"))){var e=t.classList.constructor.prototype.add;t.classList.constructor.prototype.add=function(){for(var t=arguments,n=arguments.length,o=0;o<n;o++)e.call(this,t[o])}}}(),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a"),t.classList.add("b"),t.classList.remove("a","b"),t.classList.contains("b"))){var e=t.classList.constructor.prototype.remove;t.classList.constructor.prototype.remove=function(){for(var t=arguments,n=arguments.length,o=0;o<n;o++)e.call(this,t[o])}}}()}(this)}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof e&&e||{}),function(t){"Document"in this||"undefined"===typeof WorkerGlobalScope&&"function"!==typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document))}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof e&&e||{}),function(t){"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,e=document.appendChild(document.createElement("body")),n=e.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=n.appendChild(n.createElement("*")),i={},r=function t(e,n){var o,r,s,c=e.childNodes||[],a=-1;if(1===e.nodeType&&e.constructor!==Element)for(o in e.constructor=Element,i)r=i[o],e[o]=r;for(;s=n&&c[++a];)t(s,n);return e},s=document.getElementsByTagName("*"),c=document.createElement,a=100;o.attachEvent("onpropertychange",(function(t){for(var e,n=t.propertyName,r=!i.hasOwnProperty(n),c=o[n],a=i[n],l=-1;e=s[++l];)1===e.nodeType&&(r||e[n]===a)&&(e[n]=c);i[n]=c})),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(t){return null!==this.getAttribute(t)}),l()||(document.onreadystatechange=l,t=setInterval(l,25)),document.createElement=function(t){var e=c(String(t).toLowerCase());return r(e)},document.removeChild(e)}else window.HTMLElement=window.Element;function l(){return a--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(r(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)}}()}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof e&&e||{}),function(t){"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&function(){var t=document.createElement("span");return t.classList.add("a","b"),t.classList.contains("b")}()||function(t){var e=!0,n=function(t,n,o,i){Object.defineProperty?Object.defineProperty(t,n,{configurable:!1===e||!!i,get:o}):t.__defineGetter__(n,o)};try{n({},"support")}catch(i){e=!1}var o=function t(o,i,r){n(o.prototype,i,(function(){var o,s=this,c="__defineGetter__DEFINE_PROPERTY"+i;if(s[c])return o;if(s[c]=!0,!1===e){for(var a,l=t.mirror||document.createElement("div"),u=l.childNodes,d=u.length,p=0;p<d;++p)if(u[p]._R===s){a=u[p];break}a||(a=l.appendChild(document.createElement("div"))),o=DOMTokenList.call(a,s,r)}else o=new DOMTokenList(s,r);return n(s,i,(function(){return o})),delete s[c],o}),!0)};o(t.Element,"classList","className"),o(t.HTMLElement,"classList","className"),o(t.HTMLLinkElement,"relList","rel"),o(t.HTMLAnchorElement,"relList","rel"),o(t.HTMLAreaElement,"relList","rel")}(this)}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof e&&e||{}),function(t){"document"in this&&"nextElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var t=this.nextSibling;t&&1!==t.nodeType;)t=t.nextSibling;return t}})}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof e&&e||{}),function(t){"document"in this&&"previousElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"previousElementSibling",{get:function(){for(var t=this.previousSibling;t&&1!==t.nodeType;)t=t.previousSibling;return t}})}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof e&&e||{}),function(t){"Window"in this||"undefined"===typeof WorkerGlobalScope&&"function"!==typeof importScripts&&function(t){t.constructor?t.Window=t.constructor:(t.Window=t.constructor=new Function("return function Window() {}")()).prototype=this}(this)}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof e&&e||{}),function(t){(function(t){if(!("Event"in t))return!1;if("function"===typeof t.Event)return!0;try{return new Event("click"),!0}catch(e){return!1}})(this)||function(){var e={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!==typeof document&&"undefined"!==typeof window){var n=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(e,n){if(!e)throw new Error("Not enough arguments");var o;if("createEvent"in document){o=document.createEvent("Event");var i=!(!n||n.bubbles===t)&&n.bubbles,r=!(!n||n.cancelable===t)&&n.cancelable;return o.initEvent(e,i,r),o}return(o=document.createEventObject()).type=e,o.bubbles=!(!n||n.bubbles===t)&&n.bubbles,o.cancelable=!(!n||n.cancelable===t)&&n.cancelable,o},n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var t=this,n=arguments[0],i=arguments[1];if(t===window&&n in e)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");t._events||(t._events={}),t._events[n]||(t._events[n]=function(e){var n,i=t._events[e.type].list,r=i.slice(),s=-1,c=r.length;for(e.preventDefault=function(){!1!==e.cancelable&&(e.returnValue=!1)},e.stopPropagation=function(){e.cancelBubble=!0},e.stopImmediatePropagation=function(){e.cancelBubble=!0,e.cancelImmediate=!0},e.currentTarget=t,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||t,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++s<c&&!e.cancelImmediate;)s in r&&-1!==o(i,n=r[s])&&"function"===typeof n&&n.call(t,e)},t._events[n].list=[],t.attachEvent&&t.attachEvent("on"+n,t._events[n])),t._events[n].list.push(i)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=this,n=arguments[0],i=arguments[1];e._events&&e._events[n]&&e._events[n].list&&-1!==(t=o(e._events[n].list,i))&&(e._events[n].list.splice(t,1),e._events[n].list.length||(e.detachEvent&&e.detachEvent("on"+n,e._events[n]),delete e._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!==typeof t.type)throw new Error("DOM Events Exception 0");var e=this,n=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var o=function t(o){o.cancelBubble=!0,(e||window).detachEvent("on"+n,t)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,t)}catch(i){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"===typeof e._events[n]&&e._events[n].call(e,t),"function"===typeof e["on"+n]&&e["on"+n].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))})))}function o(t,e){for(var n=-1,o=t.length;++n<o;)if(n in t&&t[n]===e)return n;return-1}}()}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof e&&e||{}),n.prototype.init=function(){"function"===typeof window.matchMedia?this.setupResponsiveChecks():this.setup()},n.prototype.setupResponsiveChecks=function(){this.mql=window.matchMedia("(min-width: 40.0625em)"),this.mql.addListener(this.checkMode.bind(this)),this.checkMode()},n.prototype.checkMode=function(){this.mql.matches?this.setup():this.teardown()},n.prototype.setup=function(){var e=this.$module,n=this.$tabs,o=e.querySelector(".govuk-tabs__list"),i=e.querySelectorAll(".govuk-tabs__list-item");if(n&&o&&i){o.setAttribute("role","tablist"),t(i,(function(t){t.setAttribute("role","presentation")})),t(n,function(t){this.setAttributes(t),t.boundTabClick=this.onTabClick.bind(this),t.boundTabKeydown=this.onTabKeydown.bind(this),t.addEventListener("click",t.boundTabClick,!0),t.addEventListener("keydown",t.boundTabKeydown,!0),this.hideTab(t)}.bind(this));var r=this.getTab(window.location.hash)||this.$tabs[0];this.showTab(r),e.boundOnHashChange=this.onHashChange.bind(this),window.addEventListener("hashchange",e.boundOnHashChange,!0)}},n.prototype.teardown=function(){var e=this.$module,n=this.$tabs,o=e.querySelector(".govuk-tabs__list"),i=e.querySelectorAll(".govuk-tabs__list-item");n&&o&&i&&(o.removeAttribute("role"),t(i,(function(t){t.removeAttribute("role","presentation")})),t(n,function(t){t.removeEventListener("click",t.boundTabClick,!0),t.removeEventListener("keydown",t.boundTabKeydown,!0),this.unsetAttributes(t)}.bind(this)),window.removeEventListener("hashchange",e.boundOnHashChange,!0))},n.prototype.onHashChange=function(t){var e=window.location.hash,n=this.getTab(e);if(n)if(this.changingHash)this.changingHash=!1;else{var o=this.getCurrentTab();this.hideTab(o),this.showTab(n),n.focus()}},n.prototype.hideTab=function(t){this.unhighlightTab(t),this.hidePanel(t)},n.prototype.showTab=function(t){this.highlightTab(t),this.showPanel(t)},n.prototype.getTab=function(t){return this.$module.querySelector('.govuk-tabs__tab[href="'+t+'"]')},n.prototype.setAttributes=function(t){var e=this.getHref(t).slice(1);t.setAttribute("id","tab_"+e),t.setAttribute("role","tab"),t.setAttribute("aria-controls",e),t.setAttribute("aria-selected","false"),t.setAttribute("tabindex","-1");var n=this.getPanel(t);n.setAttribute("role","tabpanel"),n.setAttribute("aria-labelledby",t.id),n.classList.add(this.jsHiddenClass)},n.prototype.unsetAttributes=function(t){t.removeAttribute("id"),t.removeAttribute("role"),t.removeAttribute("aria-controls"),t.removeAttribute("aria-selected"),t.removeAttribute("tabindex");var e=this.getPanel(t);e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.classList.remove(this.jsHiddenClass)},n.prototype.onTabClick=function(t){if(!t.target.classList.contains("govuk-tabs__tab"))return!1;t.preventDefault();var e=t.target,n=this.getCurrentTab();this.hideTab(n),this.showTab(e),this.createHistoryEntry(e)},n.prototype.createHistoryEntry=function(t){var e=this.getPanel(t),n=e.id;e.id="",this.changingHash=!0,window.location.hash=this.getHref(t).slice(1),e.id=n},n.prototype.onTabKeydown=function(t){switch(t.keyCode){case this.keys.left:case this.keys.up:this.activatePreviousTab(),t.preventDefault();break;case this.keys.right:case this.keys.down:this.activateNextTab(),t.preventDefault()}},n.prototype.activateNextTab=function(){var t=this.getCurrentTab(),e=t.parentNode.nextElementSibling;if(e)var n=e.querySelector(".govuk-tabs__tab");n&&(this.hideTab(t),this.showTab(n),n.focus(),this.createHistoryEntry(n))},n.prototype.activatePreviousTab=function(){var t=this.getCurrentTab(),e=t.parentNode.previousElementSibling;if(e)var n=e.querySelector(".govuk-tabs__tab");n&&(this.hideTab(t),this.showTab(n),n.focus(),this.createHistoryEntry(n))},n.prototype.getPanel=function(t){return this.$module.querySelector(this.getHref(t))},n.prototype.showPanel=function(t){this.getPanel(t).classList.remove(this.jsHiddenClass)},n.prototype.hidePanel=function(t){this.getPanel(t).classList.add(this.jsHiddenClass)},n.prototype.unhighlightTab=function(t){t.setAttribute("aria-selected","false"),t.parentNode.classList.remove("govuk-tabs__list-item--selected"),t.setAttribute("tabindex","-1")},n.prototype.highlightTab=function(t){t.setAttribute("aria-selected","true"),t.parentNode.classList.add("govuk-tabs__list-item--selected"),t.setAttribute("tabindex","0")},n.prototype.getCurrentTab=function(){return this.$module.querySelector(".govuk-tabs__list-item--selected .govuk-tabs__tab")},n.prototype.getHref=function(t){var e=t.getAttribute("href");return e.slice(e.indexOf("#"),e.length)},n},t.exports=n()}).call(this,n(35))}}]);
//# sourceMappingURL=12.3c977678.chunk.js.map