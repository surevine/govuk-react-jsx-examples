(this["webpackJsonpgovuk-react-jsx-examples"]=this["webpackJsonpgovuk-react-jsx-examples"]||[]).push([[1],{251:function(e,t,n){(function(t){var n;n=function(){"use strict";function e(e){this.$module=e}return function(e){"Window"in this||"undefined"===typeof WorkerGlobalScope&&"function"!==typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {}")()).prototype=this}(this)}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof t&&t||{}),function(e){"Document"in this||"undefined"===typeof WorkerGlobalScope&&"function"!==typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document))}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof t&&t||{}),function(e){"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var e,t=document.appendChild(document.createElement("body")),n=t.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=n.appendChild(n.createElement("*")),r={},i=function e(t,n){var o,i,c,u=t.childNodes||[],a=-1;if(1===t.nodeType&&t.constructor!==Element)for(o in t.constructor=Element,r)i=r[o],t[o]=i;for(;c=n&&u[++a];)e(c,n);return t},c=document.getElementsByTagName("*"),u=document.createElement,a=100;o.attachEvent("onpropertychange",(function(e){for(var t,n=e.propertyName,i=!r.hasOwnProperty(n),u=o[n],a=r[n],l=-1;t=c[++l];)1===t.nodeType&&(i||t[n]===a)&&(t[n]=u);r[n]=u})),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(e){return null!==this.getAttribute(e)}),l()||(document.onreadystatechange=l,e=setInterval(l,25)),document.createElement=function(e){var t=u(String(e).toLowerCase());return i(t)},document.removeChild(t)}else window.HTMLElement=window.Element;function l(){return a--||clearTimeout(e),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(i(document,!0),e&&document.body.prototype&&clearTimeout(e),!!document.body.prototype)}}()}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof t&&t||{}),function(e){"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(e){return!1}}()||function(e){var t=Object.prototype.hasOwnProperty("__defineGetter__"),n="Getters & setters cannot be defined on this javascript engine",o="A property cannot both have accessors and be writable or have a value";Object.defineProperty=function(r,i,c){if(e&&(r===window||r===document||r===Element.prototype||r instanceof Element))return e(r,i,c);if(null===r||!(r instanceof Object||"object"===typeof r))throw new TypeError("Object.defineProperty called on non-object");if(!(c instanceof Object))throw new TypeError("Property description must be an object");var u=String(i),a="value"in c||"writable"in c,l="get"in c&&typeof c.get,s="set"in c&&typeof c.set;if(l){if("function"!==l)throw new TypeError("Getter must be a function");if(!t)throw new TypeError(n);if(a)throw new TypeError(o);Object.__defineGetter__.call(r,u,c.get)}else r[u]=c.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!t)throw new TypeError(n);if(a)throw new TypeError(o);Object.__defineSetter__.call(r,u,c.set)}return"value"in c&&(r[u]=c.value),r}}(Object.defineProperty)}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof t&&t||{}),function(e){(function(e){if(!("Event"in e))return!1;if("function"===typeof e.Event)return!0;try{return new Event("click"),!0}catch(t){return!1}})(this)||function(){var t={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!==typeof document&&"undefined"!==typeof window){var n=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(t,n){if(!t)throw new Error("Not enough arguments");var o;if("createEvent"in document){o=document.createEvent("Event");var r=!(!n||n.bubbles===e)&&n.bubbles,i=!(!n||n.cancelable===e)&&n.cancelable;return o.initEvent(t,r,i),o}return(o=document.createEventObject()).type=t,o.bubbles=!(!n||n.bubbles===e)&&n.bubbles,o.cancelable=!(!n||n.cancelable===e)&&n.cancelable,o},n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var e=this,n=arguments[0],r=arguments[1];if(e===window&&n in t)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");e._events||(e._events={}),e._events[n]||(e._events[n]=function(t){var n,r=e._events[t.type].list,i=r.slice(),c=-1,u=i.length;for(t.preventDefault=function(){!1!==t.cancelable&&(t.returnValue=!1)},t.stopPropagation=function(){t.cancelBubble=!0},t.stopImmediatePropagation=function(){t.cancelBubble=!0,t.cancelImmediate=!0},t.currentTarget=e,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||e,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++c<u&&!t.cancelImmediate;)c in i&&-1!==o(r,n=i[c])&&"function"===typeof n&&n.call(e,t)},e._events[n].list=[],e.attachEvent&&e.attachEvent("on"+n,e._events[n])),e._events[n].list.push(r)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var e,t=this,n=arguments[0],r=arguments[1];t._events&&t._events[n]&&t._events[n].list&&-1!==(e=o(t._events[n].list,r))&&(t._events[n].list.splice(e,1),t._events[n].list.length||(t.detachEvent&&t.detachEvent("on"+n,t._events[n]),delete t._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!==typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function e(o){o.cancelBubble=!0,(t||window).detachEvent("on"+n,e)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,e)}catch(r){e.target=t;do{e.currentTarget=t,"_events"in t&&"function"===typeof t._events[n]&&t._events[n].call(t,e),"function"===typeof t["on"+n]&&t["on"+n].call(t,e),t=9===t.nodeType?t.parentWindow:t.parentNode}while(t&&!e.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))})))}function o(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1}}()}.call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof t&&t||{}),e.prototype.init=function(){this.$module&&this.setFocus()},e.prototype.setFocus=function(){var e=this.$module;"true"!==e.getAttribute("data-disable-auto-focus")&&"alert"===e.getAttribute("role")&&(e.getAttribute("tabindex")||(e.setAttribute("tabindex","-1"),e.addEventListener("blur",(function(){e.removeAttribute("tabindex")}))),e.focus())},e},e.exports=n()}).call(this,n(35))}}]);
//# sourceMappingURL=govuk-frontend-notification-banner.67450481.chunk.js.map