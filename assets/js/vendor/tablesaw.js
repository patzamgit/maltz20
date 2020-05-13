!function(t){"function"==typeof define&&define.amd?define(["shoestring"],t):"object"==typeof module&&module.exports?module.exports=t():t()}(function(){var t="undefined"!=typeof window?window:this,e=t.document;function n(s,i){var o,r=typeof s;if(!s)return new a([]);if(s.call)return n.ready(s);if(s.constructor===a&&!i)return s;if("string"===r&&0===s.indexOf("<")){var l=e.createElement("div");return l.innerHTML=s,n(l).children().each(function(){l.removeChild(this)})}return"string"===r?i?n(i).find(s):(o=e.querySelectorAll(s),new a(o,s)):"[object Array]"===Object.prototype.toString.call(r)||t.NodeList&&s instanceof t.NodeList?new a(s,s):s.constructor===Array?new a(s,s):new a([s],s)}var a=function(t,e){this.length=0,this.selector=e,n.merge(this,t)};a.prototype.reverse=[].reverse,n.fn=a.prototype,n.Shoestring=a,n.extend=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},n.merge=function(t,e){var n,a,s;for(n=+e.length,a=0,s=t.length;a<n;a++)t[s++]=e[a];return t.length=s,t},t.shoestring=n,n.fn.each=function(t){return n.each(this,t)},n.each=function(t,e){for(var n=0,a=t.length;n<a&&!1!==e.call(t[n],n,t[n]);n++);return t},n.inArray=function(t,e){for(var n=-1,a=0,s=e.length;a<s;a++)e.hasOwnProperty(a)&&e[a]===t&&(n=a);return n},n.ready=function(t){return s&&t?t.call(e):t?i.push(t):o(),[e]},n.fn.ready=function(t){return n.ready(t),this};var s=!1,i=[],o=function(){if(!s){for(;i.length;)i.shift().call(e);s=!0}};function r(t,e){var n=!1;return t.each(function(){for(var t=0;t<e.length;)this===e[t]&&(n=!0),t++}),n}(e.attachEvent?"complete"===e.readyState:"loading"!==e.readyState)?o():(e.addEventListener("DOMContentLoaded",o,!1),e.addEventListener("readystatechange",o,!1),t.addEventListener("load",o,!1)),n.fn.is=function(t){var a,s=!1,i=this;return"string"!=typeof t?r(this,t.length&&t[0]?t:[t]):((a=this.parent()).length||(a=n(e)),a.each(function(e,n){var a;a=n.querySelectorAll(t),s=r(i,a)}),s)},n.fn.data=function(t,e){return void 0===t?this[0]?this[0].shoestringData||{}:void 0:void 0!==e?this.each(function(){this.shoestringData||(this.shoestringData={}),this.shoestringData[t]=e}):this[0]&&this[0].shoestringData?this[0].shoestringData[t]:void 0},n.fn.removeData=function(t){return this.each(function(){void 0!==t&&this.shoestringData?(this.shoestringData[t]=void 0,delete this.shoestringData[t]):this[0].shoestringData={}})},t.$=n,n.fn.addClass=function(t){var e=t.replace(/^\s+|\s+$/g,"").split(" ");return this.each(function(){for(var t=0,n=e.length;t<n;t++)void 0===this.className||""!==this.className&&this.className.match(new RegExp("(^|\\s)"+e[t]+"($|\\s)"))||(this.className+=" "+e[t])})},n.fn.add=function(t){var e=[];return this.each(function(){e.push(this)}),n(t).each(function(){e.push(this)}),n(e)},n.fn.append=function(t){return"string"!=typeof t&&void 0===t.nodeType||(t=n(t)),this.each(function(e){for(var n=0,a=t.length;n<a;n++)this.appendChild(e>0?t[n].cloneNode(!0):t[n])})},n.fn.appendTo=function(t){return this.each(function(){n(t).append(this)})},n.fn.attr=function(t,e){var n="string"==typeof t;return void 0===e&&n?this[0]?this[0].getAttribute(t):void 0:this.each(function(){if(n)this.setAttribute(t,e);else for(var a in t)t.hasOwnProperty(a)&&this.setAttribute(a,t[a])})},n.fn.before=function(t){return"string"!=typeof t&&void 0===t.nodeType||(t=n(t)),this.each(function(e){for(var n=0,a=t.length;n<a;n++)this.parentNode.insertBefore(e>0?t[n].cloneNode(!0):t[n],this)})},n.fn.children=function(){var t,e,a=[];return this.each(function(){for(t=this.children,e=-1;e++<t.length-1;)-1===n.inArray(t[e],a)&&a.push(t[e])}),n(a)},n.fn.closest=function(t){var e=[];return t?(this.each(function(){var a;if(n(a=this).is(t))e.push(this);else for(;a.parentElement;){if(n(a.parentElement).is(t)){e.push(a.parentElement);break}a=a.parentElement}}),n(e)):n(e)},n.cssExceptions={float:["cssFloat"]},function(){var e=n.cssExceptions;function a(e,n){return t.getComputedStyle(e,null).getPropertyValue(n)}var s=["","-webkit-","-ms-","-moz-","-o-","-khtml-"];n._getStyle=function(t,n){var i,o,r,l;if(e[n])for(r=0,l=e[n].length;r<l;r++)if(o=a(t,e[n][r]))return o;for(r=0,l=s.length;r<l;r++)if(o=a(t,i=(s[r]+n).replace(/\-([A-Za-z])/g,function(t,e){return e.toUpperCase()})),i!==n&&(o=o||a(t,n)),s[r]&&(o=o||a(t,s[r]+n)),o)return o}}(),function(){var t=n.cssExceptions;n._setStyle=function(e,n,a){var s=n.replace(/\-([A-Za-z])/g,function(t,e){return e.toUpperCase()});if(e.style[n]=a,s!==n&&(e.style[s]=a),t[n])for(var i=0,o=t[n].length;i<o;i++)e.style[t[n][i]]=a}}(),n.fn.css=function(t,e){if(this[0])return"object"==typeof t?this.each(function(){for(var e in t)t.hasOwnProperty(e)&&n._setStyle(this,e,t[e])}):void 0!==e?this.each(function(){n._setStyle(this,t,e)}):n._getStyle(this[0],t)},n.fn.eq=function(t){return this[t]?n(this[t]):n([])},n.fn.filter=function(t){var a=[];return this.each(function(s){var i;if("function"==typeof t)!1!==t.call(this,s)&&a.push(this);else{if(this.parentNode)i=n(t,this.parentNode);else{var o=n(e.createDocumentFragment());o[0].appendChild(this),i=n(t,o)}n.inArray(this,i)>-1&&a.push(this)}}),n(a)},n.fn.find=function(t){var e,a=[];return this.each(function(){for(var n=0,s=(e=this.querySelectorAll(t)).length;n<s;n++)a=a.concat(e[n])}),n(a)},n.fn.first=function(){return this.eq(0)},n.fn.get=function(t){if(void 0===t){for(var e=[],n=0;n<this.length;n++)e.push(this[n]);return e}return this[t]};n.fn.html=function(t){if(void 0!==t)return function(t){if("string"==typeof t||"number"==typeof t)return this.each(function(){this.innerHTML=""+t});var e="";if(void 0!==t.length)for(var n=0,a=t.length;n<a;n++)e+=t[n].outerHTML;else e=t.outerHTML;return this.each(function(){this.innerHTML=e})}.call(this,t);var e="";return this.each(function(){e+=this.innerHTML}),e},function(){function t(t,e){var n,a,s;for(n=a=0;n<t.length;n++){if(e(s=t.item?t.item(n):t[n]))return a;1===s.nodeType&&a++}return-1}n.fn.index=function(a){var s;return s=this,void 0===a?t((this[0]&&this[0].parentNode||e.documentElement).childNodes,function(t){return s[0]===t}):t(s,function(t){return t===n(a,t.parentNode)[0]})}}(),n.fn.insertBefore=function(t){return this.each(function(){n(t).before(this)})},n.fn.last=function(){return this.eq(this.length-1)},n.fn.next=function(){var t=[];return this.each(function(){var e,a,s;e=n(this.parentNode)[0].childNodes;for(var i=0;i<e.length;i++){if(a=e.item(i),s&&1===a.nodeType){t.push(a);break}a===this&&(s=!0)}}),n(t)},n.fn.not=function(t){var e=[];return this.each(function(){var a=n(t,this.parentNode);-1===n.inArray(this,a)&&e.push(this)}),n(e)},n.fn.parent=function(){var t,a=[];return this.each(function(){(t=this===e.documentElement?e:this.parentNode)&&11!==t.nodeType&&a.push(t)}),n(a)},n.fn.prepend=function(t){return"string"!=typeof t&&void 0===t.nodeType||(t=n(t)),this.each(function(e){for(var n=0,a=t.length;n<a;n++){var s=e>0?t[n].cloneNode(!0):t[n];this.firstChild?this.insertBefore(s,this.firstChild):this.appendChild(s)}})},n.fn.prev=function(){var t=[];return this.each(function(){for(var e,a,s,i=(e=n(this.parentNode)[0].childNodes).length-1;i>=0;i--){if(a=e.item(i),s&&1===a.nodeType){t.push(a);break}a===this&&(s=!0)}}),n(t)},n.fn.prevAll=function(){var t=[];return this.each(function(){for(var e=n(this).prev();e.length;)t.push(e[0]),e=e.prev()}),n(t)},n.fn.removeAttr=function(t){return this.each(function(){this.removeAttribute(t)})},n.fn.removeClass=function(t){var e=t.replace(/^\s+|\s+$/g,"").split(" ");return this.each(function(){for(var t,n,a=0,s=e.length;a<s;a++)void 0!==this.className&&(n=new RegExp("(^|\\s)"+e[a]+"($|\\s)","gmi"),t=this.className.replace(n," "),this.className=t.replace(/^\s+|\s+$/g,""))})},n.fn.remove=function(){return this.each(function(){this.parentNode&&this.parentNode.removeChild(this)})},n.fn.replaceWith=function(t){"string"==typeof t&&(t=n(t));var e=[];return t.length>1&&(t=t.reverse()),this.each(function(n){var a,s=this.cloneNode(!0);if(e.push(s),this.parentNode)if(1===t.length)a=n>0?t[0].cloneNode(!0):t[0],this.parentNode.replaceChild(a,this);else{for(var i=0,o=t.length;i<o;i++)a=n>0?t[i].cloneNode(!0):t[i],this.parentNode.insertBefore(a,this.nextSibling);this.parentNode.removeChild(this)}}),n(e)},n.fn.siblings=function(){if(!this.length)return n([]);var t=[],e=this[0].parentNode.firstChild;do{1===e.nodeType&&e!==this[0]&&t.push(e),e=e.nextSibling}while(e);return n(t)};var l=function(t){var e,n="",a=0,s=t.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=l(t)}else if(3===s||4===s)return t.nodeValue}else for(;e=t[a++];)n+=l(e);return n};function c(t,e){t.shoestringData||(t.shoestringData={}),t.shoestringData.events||(t.shoestringData.events={}),t.shoestringData.loop||(t.shoestringData.loop={}),t.shoestringData.events[e]||(t.shoestringData.events[e]=[])}function h(t,e,n){var a={};a.isCustomEvent=n.isCustomEvent,a.callback=n.callfunc,a.originalCallback=n.originalCallback,a.namespace=n.namespace,t.shoestringData.events[e].push(a),n.customEventLoop&&(t.shoestringData.loop[e]=n.customEventLoop)}function d(t,e,n){var a=this.shoestringData.events[t];if(a&&a.length){var s,i,o=[];for(s=0,i=a.length;s<i;s++)e&&e!==a[s].namespace||void 0!==n&&n!==a[s].originalCallback||(this.removeEventListener(t,a[s].callback,!1),o.push(s));for(s=0,i=o.length;s<i;s++)this.shoestringData.events[t].splice(s,1)}}function u(t,e){for(var n in this.shoestringData.events)d.call(this,n,t,e)}return n.fn.text=function(){return l(this)},n.fn.val=function(t){var e;return void 0!==t?this.each(function(){if("SELECT"===this.tagName){var e,a,s,i=this.options,o=[],r=i.length;for(o[0]=t;r--;)((a=i[r]).selected=n.inArray(a.value,o)>=0)&&(e=!0,s=r);this.selectedIndex=e?s:-1}else this.value=t}):"SELECT"===(e=this[0]).tagName?e.selectedIndex<0?"":e.options[e.selectedIndex].value:e.value},n._dimension=function(t,e,n){var a;return void 0===n?(a=e.replace(/^[a-z]/,function(t){return t.toUpperCase()}),t[0]["offset"+a]):(n="string"==typeof n?n:n+"px",t.each(function(){this.style[e]=n}))},n.fn.width=function(t){return n._dimension(this,"width",t)},n.fn.wrapInner=function(t){return this.each(function(){var e=this.innerHTML;this.innerHTML="",n(this).append(n(t).html(e))})},n.fn.bind=function(t,e,n){"function"==typeof e&&(n=e,e=null);var a=t.split(" ");function s(t,a,s){var i;if(!t._namespace||t._namespace===a){t.data=e,t.namespace=t._namespace;var o=function(){return!0};t.isDefaultPrevented=function(){return!1};var r=t.preventDefault;return t.target=s||t.target||t.srcElement,t.preventDefault=r?function(){t.isDefaultPrevented=o,r.call(t)}:function(){t.isDefaultPrevented=o,t.returnValue=!1},t.stopPropagation=t.stopPropagation||function(){t.cancelBubble=!0},!1===(i=n.apply(this,[t].concat(t._args)))&&(t.preventDefault(),t.stopPropagation()),i}}return this.each(function(){for(var t,e=this,i=0,o=a.length;i<o;i++){var r=a[i].split("."),l=r[0],d=r.length>0?r[1]:null;t=function(t){return e.ssEventTrigger&&(t._namespace=e.ssEventTrigger._namespace,t._args=e.ssEventTrigger._args,e.ssEventTrigger=null),s.call(e,t,d)},null,null,c(this,l),this.addEventListener(l,t,!1),h(this,l,{callfunc:t,isCustomEvent:!1,customEventLoop:null,originalCallback:n,namespace:d})}})},n.fn.on=n.fn.bind,n.fn.unbind=function(t,e){var n=t?t.split(" "):[];return this.each(function(){if(this.shoestringData&&this.shoestringData.events)if(n.length)for(var t,a,s,i=0,o=n.length;i<o;i++)a=(t=n[i].split("."))[0],s=t.length>0?t[1]:null,a?d.call(this,a,s,e):u.call(this,s,e);else u.call(this)})},n.fn.off=n.fn.unbind,n.fn.one=function(t,e){var a=t.split(" ");return this.each(function(){for(var t,s={},i=n(this),o=0,r=a.length;o<r;o++)t=a[o],s[t]=function(t){var a=n(this);for(var i in s)a.unbind(i,s[i]);return e.apply(this,[t].concat(t._args))},i.bind(t,s[t])})},n.fn.triggerHandler=function(t,n){var a,s=t.split(" ")[0],i=this[0];if(e.createEvent&&i.shoestringData&&i.shoestringData.events&&i.shoestringData.events[s]){var o=i.shoestringData.events[s];for(var r in o)o.hasOwnProperty(r)&&((t=e.createEvent("Event")).initEvent(s,!0,!0),t._args=n,n.unshift(t),a=o[r].originalCallback.apply(t.target,n))}return a},n.fn.trigger=function(t,n){var a=t.split(" ");return this.each(function(){for(var t,s,i,o=0,r=a.length;o<r;o++){if(s=(t=a[o].split("."))[0],i=t.length>0?t[1]:null,"click"===s&&"INPUT"===this.tagName&&"checkbox"===this.type&&this.click)return this.click(),!1;if(e.createEvent){var l=e.createEvent("Event");l.initEvent(s,!0,!0),l._args=n,l._namespace=i,this.dispatchEvent(l)}}})},n}),function(t,e){"function"==typeof define&&define.amd?define(["shoestring"],function(n){return t.Tablesaw=e(n,t)}):"object"==typeof exports?module.exports=e(require("shoestring"),t):t.Tablesaw=e(shoestring,t)}("undefined"!=typeof window?window:this,function(t,e){"use strict";var n=!1;document.addEventListener("DOMContentLoaded",function(){n=!0});var a,s,i,o,r,l,c,h,d,u={i18n:{modeStack:"Stack",modeSwipe:"Swipe",modeToggle:"Toggle",modeSwitchColumnsAbbreviated:"Cols",modeSwitchColumns:"Columns",columnToggleButton:"Columns",columnToggleError:"No eligible columns.",sort:"Sort",swipePreviousColumn:"Previous column",swipeNextColumn:"Next column"},mustard:"head"in document&&(!window.blackberry||window.WebKitPoint)&&!window.operamini,$:t,_init:function(t){u.$(t||document).trigger("enhance.tablesaw")},init:function(t){n?u._init(t):"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){u._init(t)})}};return t(e.document).on("enhance.tablesaw",function(){"undefined"!=typeof TablesawConfig&&TablesawConfig.i18n&&(u.i18n=t.extend(u.i18n,TablesawConfig.i18n||{})),u.i18n.modes=[u.i18n.modeStack,u.i18n.modeSwipe,u.i18n.modeToggle]}),u.mustard&&t(document.documentElement).addClass("tablesaw-enhanced"),function(){var n="tablesaw-bar",a={create:"tablesawcreate",destroy:"tablesawdestroy",refresh:"tablesawrefresh",resize:"tablesawresize"},s={};u.events=a;var i=function(e){if(!e)throw new Error("Tablesaw requires an element.");this.table=e,this.$table=t(e),this.$thead=this.$table.children().filter("thead").eq(0),this.$tbody=this.$table.children().filter("tbody"),this.mode=this.$table.attr("data-tablesaw-mode")||"stack",this.$toolbar=null,this.attributes={subrow:"data-tablesaw-subrow",ignorerow:"data-tablesaw-ignorerow"},this.init()};i.prototype.init=function(){if(!this.$thead.length)throw new Error("tablesaw: a <thead> is required, but none was found.");if(!this.$thead.find("th").length)throw new Error("tablesaw: no header cells found. Are you using <th> inside of <thead>?");this.$table.attr("id")||this.$table.attr("id","tablesaw-"+Math.round(1e4*Math.random())),this.createToolbar(),this._initCells(),this.$table.data("tablesaw",this),this.$table.trigger(a.create,[this])},i.prototype.getConfig=function(e){var n=t.extend(s,e||{});return t.extend(n,"undefined"!=typeof TablesawConfig?TablesawConfig:{})},i.prototype._getPrimaryHeaderRow=function(){return this._getHeaderRows().eq(0)},i.prototype._getHeaderRows=function(){return this.$thead.children().filter("tr").filter(function(){return!t(this).is("[data-tablesaw-ignorerow]")})},i.prototype._getRowIndex=function(t){return t.prevAll().length},i.prototype._getHeaderRowIndeces=function(){var e=this,n=[];return this._getHeaderRows().each(function(){n.push(e._getRowIndex(t(this)))}),n},i.prototype._getPrimaryHeaderCells=function(t){return(t||this._getPrimaryHeaderRow()).find("th")},i.prototype._$getCells=function(e){var n=this;return t(e).add(e.cells).filter(function(){var e=t(this),a=e.parent(),s=e.is("[colspan]");return!(a.is("["+n.attributes.subrow+"]")||a.is("["+n.attributes.ignorerow+"]")&&s)})},i.prototype._getVisibleColspan=function(){var e=0;return this._getPrimaryHeaderCells().each(function(){var n=t(this);"none"!==n.css("display")&&(e+=parseInt(n.attr("colspan"),10)||1)}),e},i.prototype.getColspanForCell=function(e){var n=this._getVisibleColspan(),a=0;return e.closest("tr").data("tablesaw-rowspanned")&&a++,e.siblings().each(function(){var e=t(this),n=parseInt(e.attr("colspan"),10)||1;"none"!==e.css("display")&&(a+=n)}),n-a},i.prototype.isCellInColumn=function(e,n){return t(e).add(e.cells).filter(function(){return this===n}).length},i.prototype.updateColspanCells=function(e,n,a){var s=this,i=s._getPrimaryHeaderRow();this.$table.find("[rowspan][data-tablesaw-priority]").each(function(){var e=t(this);if("persist"===e.attr("data-tablesaw-priority")){var n=e.closest("tr"),a=parseInt(e.attr("rowspan"),10);a>1&&((n=n.next()).data("tablesaw-rowspanned",!0),a--)}}),this.$table.find("[colspan],[data-tablesaw-maxcolspan]").filter(function(){return t(this).closest("tr")[0]!==i[0]}).each(function(){var i=t(this);if(void 0===a||s.isCellInColumn(n,this)){var o=s.getColspanForCell(i);e&&void 0!==a&&i[0===o?"addClass":"removeClass"](e);var r=parseInt(i.attr("data-tablesaw-maxcolspan"),10);r?o>r&&(o=r):i.attr("data-tablesaw-maxcolspan",i.attr("colspan")),i.attr("colspan",o)}})},i.prototype._findPrimaryHeadersForCell=function(t){for(var e=this._getPrimaryHeaderRow(),n=this._getPrimaryHeaderCells(e),a=this._getRowIndex(e),s=[],i=0;i<this.headerMapping.length;i++)if(i!==a)for(var o=0;o<this.headerMapping[i].length;o++)this.headerMapping[i][o]===t&&s.push(n[o]);return s},i.prototype.getRows=function(){var e=this;return this.$table.find("tr").filter(function(){return t(this).closest("table").is(e.$table)})},i.prototype.getBodyRows=function(e){return(e?t(e):this.$tbody).children().filter("tr")},i.prototype.getHeaderCellIndex=function(t){for(var e=this.headerMapping[0],n=0;n<e.length;n++)if(e[n]===t)return n;return-1},i.prototype._initCells=function(){this.$table.find("[data-tablesaw-maxcolspan]").each(function(){var e=t(this);e.attr("colspan",e.attr("data-tablesaw-maxcolspan"))});var e=this.getRows(),n=[];e.each(function(t){n[t]=[]}),e.each(function(e){var a=0;t(this).children().each(function(){for(var t=parseInt(this.getAttribute("data-tablesaw-maxcolspan")||this.getAttribute("colspan"),10),s=parseInt(this.getAttribute("rowspan"),10);n[e][a];)a++;if(n[e][a]=this,t)for(var i=0;i<t-1;i++)a++,n[e][a]=this;if(s)for(var o=1;o<s;o++)n[e+o][a]=this;a++})});for(var a=this._getHeaderRowIndeces(),s=0;s<n[0].length;s++)for(var i=0,o=a.length;i<o;i++){var r,l=n[a[i]][s],c=a[i];for(l.cells||(l.cells=[]);c<n.length;)l!==(r=n[c][s])&&l.cells.push(r),c++}this.headerMapping=n},i.prototype.refresh=function(){this._initCells(),this.$table.trigger(a.refresh,[this])},i.prototype._getToolbarAnchor=function(){var t=this.$table.parent();return t.is(".tablesaw-overflow")?t:this.$table},i.prototype._getToolbar=function(t){return t||(t=this._getToolbarAnchor()),t.prev().filter("."+n)},i.prototype.createToolbar=function(){var e=this._getToolbarAnchor(),a=this._getToolbar(e);a.length||(a=t("<div>").addClass(n).insertBefore(e)),this.$toolbar=a,this.mode&&this.$toolbar.addClass("tablesaw-mode-"+this.mode)},i.prototype.destroy=function(){this._getToolbar().each(function(){this.className=this.className.replace(/\btablesaw-mode\-\w*\b/gi,"")});var e=this.$table.attr("id");t(document).off("."+e),t(window).off("."+e),this.$table.trigger(a.destroy,[this]),this.$table.removeData("tablesaw")},t.fn.tablesaw=function(){return this.each(function(){t(this).data("tablesaw")||new i(this)})};var o=t(e.document);o.on("enhance.tablesaw",function(e){u.mustard&&t(e.target).find("table").filter("[data-tablesaw],[data-tablesaw-mode],[data-tablesaw-sortable]").tablesaw()});var r,l,c=!1;o.on("scroll.tablesaw",function(){c=!0,e.clearTimeout(r),r=e.setTimeout(function(){c=!1},300)}),t(e).on("resize",function(){c||(e.clearTimeout(l),l=e.setTimeout(function(){o.trigger(a.resize)},150))}),u.Table=i}(),a="tablesaw-stack",s="tablesaw-cell-label",i="tablesaw-cell-content",o="tablesaw-stack",r="data-tablesaw-no-labels",l="data-tablesaw-hide-empty",(c=function(e,n){this.tablesaw=n,this.$table=t(e),this.labelless=this.$table.is("["+r+"]"),this.hideempty=this.$table.is("["+l+"]"),this.$table.data(o,this)}).prototype.init=function(){if(this.$table.addClass(a),!this.labelless){var e=this;this.$table.find("th, td").filter(function(){return!t(this).closest("thead").length}).filter(function(){return!(t(this).closest("tr").is("["+r+"]")||e.hideempty&&!t(this).html())}).each(function(){var n=t(document.createElement("b")).addClass(s),a=t(this);t(e.tablesaw._findPrimaryHeadersForCell(this)).each(function(e){var a=t(this.cloneNode(!0)),s=a.find(".tablesaw-sortable-btn");a.find(".tablesaw-sortable-arrow").remove();var i=a.find("[data-tablesaw-checkall]");i.closest("label").remove(),i.length?n=t([]):(e>0&&n.append(document.createTextNode(", ")),n.append(s.length?s[0].childNodes:a[0].childNodes))}),n.length&&!a.find("."+i).length&&a.wrapInner("<span class='"+i+"'></span>");var o=a.find("."+s);o.length?o.replaceWith(n):a.prepend(n)})}},c.prototype.destroy=function(){this.$table.removeClass(a),this.$table.find("."+s).remove(),this.$table.find("."+i).each(function(){t(this).replaceWith(this.childNodes)})},t(document).on(u.events.create,function(t,e){"stack"===e.mode&&new c(e.table,e).init()}).on(u.events.refresh,function(e,n){"stack"===n.mode&&t(n.table).data(o).init()}).on(u.events.destroy,function(e,n){"stack"===n.mode&&t(n.table).data(o).destroy()}),u.Stack=c,h={_create:function(){return t(this).each(function(){t(this).trigger("beforecreate.tablesawbtn").tablesawbtn("_init").trigger("create.tablesawbtn")})},_init:function(){var e=t(this),n=this.getElementsByTagName("select")[0];return n&&t(this).addClass("btn-select tablesaw-btn-select").tablesawbtn("_select",n),e},_select:function(e){var n=function(e,n){var a,s,i=t(n).find("option"),o=document.createElement("span"),r=!1;if(o.setAttribute("aria-hidden","true"),o.innerHTML="&#160;",i.each(function(){this.selected&&(o.innerHTML=this.text)}),s=e.childNodes,i.length>0){for(var l=0,c=s.length;l<c;l++)(a=s[l])&&"SPAN"===a.nodeName.toUpperCase()&&(e.replaceChild(o,a),r=!0);r||e.insertBefore(o,e.firstChild)}};n(this,e),t(this).on("change refresh",function(){n(this,e)})}},t.fn.tablesawbtn=function(e,n,a,s){return this.each(function(){return e&&"string"==typeof e?t.fn.tablesawbtn.prototype[e].call(this,n,a,s):t(this).data("tablesawbtnactive")?t(this):(t(this).data("tablesawbtnactive",!0),void t.fn.tablesawbtn.prototype._create.call(this))})},t.extend(t.fn.tablesawbtn.prototype,h),function(){var e="tablesaw-coltoggle",n=function(n){this.$table=t(n),this.$table.length&&(this.tablesaw=this.$table.data("tablesaw"),this.attributes={btnTarget:"data-tablesaw-columntoggle-btn-target",set:"data-tablesaw-columntoggle-set"},this.classes={columnToggleTable:"tablesaw-columntoggle",columnBtnContain:"tablesaw-columntoggle-btnwrap tablesaw-advance",columnBtn:"tablesaw-columntoggle-btn tablesaw-nav-btn down",popup:"tablesaw-columntoggle-popup",priorityPrefix:"tablesaw-priority-"},this.set=[],this.$headers=this.tablesaw._getPrimaryHeaderCells(),this.$table.data(e,this))};n.prototype.initSet=function(){var e=this.$table.attr(this.attributes.set);if(e){var n=this.$table[0];this.set=t("table["+this.attributes.set+"='"+e+"']").filter(function(){return this!==n}).get()}},n.prototype.init=function(){if(this.$table.length){var n,a,s,i,o,r,l=this,c=this.tablesaw.getConfig({getColumnToggleLabelTemplate:function(t){return"<label><input type='checkbox' checked>"+t+"</label>"}});this.$table.addClass(this.classes.columnToggleTable),a=(n=this.$table.attr("id"))+"-popup",r=t("<div class='"+this.classes.columnBtnContain+"'></div>"),s=t("<a href='#"+a+"' class='btn tablesaw-btn btn-micro "+this.classes.columnBtn+"' data-popup-link><span>"+u.i18n.columnToggleButton+"</span></a>"),i=t("<div class='"+this.classes.popup+"' id='"+a+"'></div>"),o=t("<div class='btn-group'></div>"),this.$popup=i;var h=!1;this.$headers.each(function(){var e=t(this),n=e.attr("data-tablesaw-priority"),a=l.tablesaw._$getCells(this);n&&"persist"!==n&&(a.addClass(l.classes.priorityPrefix+n),t(c.getColumnToggleLabelTemplate(e.text())).appendTo(o).find('input[type="checkbox"]').data("tablesaw-header",this),h=!0)}),h||o.append("<label>"+u.i18n.columnToggleError+"</label>"),o.appendTo(i),o.find('input[type="checkbox"]').on("change",function(n){var a;(g(n.target),l.set.length)&&(t(l.$popup).find("input[type='checkbox']").each(function(t){if(this===n.target)return a=t,!1}),t(l.set).each(function(){var s=t(this).data(e).$popup.find("input[type='checkbox']").get(a);s&&(s.checked=n.target.checked,g(s))}))}),s.appendTo(r);var d,f=t(this.$table.attr(this.attributes.btnTarget));r.appendTo(f.length?f:this.tablesaw.$toolbar),s.on("click.tablesaw",function(e){e.preventDefault(),r.is(".visible")?v():(r.addClass("visible"),s.removeClass("down").addClass("up"),t(document).off("click."+n,v),window.clearTimeout(d),d=window.setTimeout(function(){t(document).on("click."+n,v)},15))}),i.appendTo(r),this.$menu=o;var p,b=this.$table.closest(".tablesaw-overflow");if(b.css("-webkit-overflow-scrolling"))b.on("scroll",function(){var e=t(this);window.clearTimeout(p),p=window.setTimeout(function(){e.css("-webkit-overflow-scrolling","auto"),window.setTimeout(function(){e.css("-webkit-overflow-scrolling","touch")},0)},100)});t(window).on(u.events.resize+"."+n,function(){l.refreshToggle()}),this.initSet(),this.refreshToggle()}function g(t){var e=t.checked,n=l.getHeaderFromCheckbox(t),a=l.tablesaw._$getCells(n);a[e?"removeClass":"addClass"]("tablesaw-toggle-cellhidden"),a[e?"addClass":"removeClass"]("tablesaw-toggle-cellvisible"),l.updateColspanCells(n,e),l.$table.trigger("tablesawcolumns")}function v(e){e&&t(e.target).closest("."+l.classes.popup).length||(t(document).off("click."+n),s.removeClass("up").addClass("down"),r.removeClass("visible"))}},n.prototype.getHeaderFromCheckbox=function(e){return t(e).data("tablesaw-header")},n.prototype.refreshToggle=function(){var t=this;this.$menu.find("input").each(function(){var e=t.getHeaderFromCheckbox(this);this.checked="table-cell"===t.tablesaw._$getCells(e).eq(0).css("display")}),this.updateColspanCells()},n.prototype.updateColspanCells=function(t,e){this.tablesaw.updateColspanCells("tablesaw-toggle-cellhidden",t,e)},n.prototype.destroy=function(){this.$table.removeClass(this.classes.columnToggleTable),this.$table.find("th, td").each(function(){t(this).removeClass("tablesaw-toggle-cellhidden").removeClass("tablesaw-toggle-cellvisible"),this.className=this.className.replace(/\bui\-table\-priority\-\d\b/g,"")})},t(document).on(u.events.create,function(t,e){"columntoggle"===e.mode&&new n(e.table).init()}),t(document).on(u.events.destroy,function(n,a){"columntoggle"===a.mode&&t(a.table).data(e).destroy()}),t(document).on(u.events.refresh,function(n,a){"columntoggle"===a.mode&&t(a.table).data(e).refreshPriority()}),u.ColumnToggle=n}(),function(){function e(e){var n=[];return t(e.childNodes).each(function(){var e=t(this);e.is("input, select")?n.push(e.val()):e.is(".tablesaw-cell-label")||n.push((e.text()||"").replace(/^\s+|\s+$/g,""))}),n.join("")}var n="tablesaw-sortable",a="table[data-"+n+"]",s="[data-"+n+"-switch]",i={sortCol:"data-tablesaw-sortable-col",defaultCol:"data-tablesaw-sortable-default-col",numericCol:"data-tablesaw-sortable-numeric",subRow:"data-tablesaw-subrow",ignoreRow:"data-tablesaw-ignorerow"},o={head:n+"-head",ascend:n+"-ascending",descend:n+"-descending",switcher:n+"-switch",tableToolbar:"tablesaw-bar-section",sortButton:n+"-btn"},r={_create:function(e){return t(this).each(function(){if(t(this).data(n+"-init"))return!1;t(this).data(n+"-init",!0).trigger("beforecreate."+n)[n]("_init",e).trigger("create."+n)})},_init:function(){var a,r,l,c=t(this),h=c.data("tablesaw");function d(e){t.each(e,function(e,n){var a=t(n);a.removeAttr(i.defaultCol),a.removeClass(o.ascend),a.removeClass(o.descend)})}c.addClass(n),a=c.children().filter("thead").find("th["+i.sortCol+"]"),l=a,t.each(l,function(e,n){t(n).addClass(o.head)}),function(e,n){t.each(e,function(e,a){var s=t("<button class='"+o.sortButton+"'/>");s.on("click",{col:a},n),t(a).wrapInner(s).find("button").append("<span class='tablesaw-sortable-arrow'>")})}(a,function(e){if(!t(e.target).is("a[href]")){e.stopPropagation();var s=t(e.target).closest("["+i.sortCol+"]"),l=e.data.col,h=a.index(s[0]);d(s.closest("thead").find("th").filter(function(){return this!==s[0]})),s.is("."+o.descend)||!s.is("."+o.ascend)?(c[n]("sortBy",l,!0),h+="_asc"):(c[n]("sortBy",l),h+="_desc"),r&&r.find("select").val(h).trigger("refresh"),e.preventDefault()}}),function(e){t.each(e,function(e,n){var a=t(n);a.is("["+i.defaultCol+"]")&&(a.is("."+o.descend)||a.addClass(o.ascend))})}(a),c.is(s)&&function(a){r=t("<div>").addClass(o.switcher).addClass(o.tableToolbar);var s=["<label>"+u.i18n.sort+":"];s.push('<span class="btn tablesaw-btn"><select>'),a.each(function(n){var a=t(this),r=a.is("["+i.defaultCol+"]"),l=a.is("."+o.descend),c=a.is("["+i.numericCol+"]"),h=0;t(this.cells.slice(0,5)).each(function(){isNaN(parseInt(e(this),10))||h++});var d=5===h;c||a.attr(i.numericCol,d?"":"false"),s.push("<option"+(r&&!l?" selected":"")+' value="'+n+'_asc">'+a.text()+" "+(d?"&#x2191;":"(A-Z)")+"</option>"),s.push("<option"+(r&&l?" selected":"")+' value="'+n+'_desc">'+a.text()+" "+(d?"&#x2193;":"(Z-A)")+"</option>")}),s.push("</select></span></label>"),r.html(s.join(""));var l=h.$toolbar.children().eq(0);l.length?r.insertBefore(l):r.appendTo(h.$toolbar),r.find(".tablesaw-btn").tablesawbtn(),r.find("select").on("change",function(){var e=t(this).val().split("_"),s=a.eq(e[0]);d(s.siblings()),c[n]("sortBy",s.get(0),"asc"===e[1])})}(a)},sortRows:function(n,a,s,o,r){var l,c=function(n,a){var s=[];return t.each(n,function(n,o){for(var r=o.parentNode,l=t(r),c=[],h=l.next();h.is("["+i.subRow+"]");)c.push(h[0]),h=h.next();var d=r.parentNode;l.is("["+i.subRow+"]")||d===a&&s.push({element:o,cell:e(o),row:r,subrows:c.length?c:null,ignored:l.is("["+i.ignoreRow+"]")})}),s}(o.cells,r),h=t(o).data("tablesaw-sort");return l=!(!h||"function"!=typeof h)&&h(s)||function(t,e){var n=/[^\-\+\d\.]/g;return t?function(t,a){return t.ignored||a.ignored?0:e?parseFloat(t.cell.replace(n,""))-parseFloat(a.cell.replace(n,"")):t.cell.toLowerCase()>a.cell.toLowerCase()?1:-1}:function(t,a){return t.ignored||a.ignored?0:e?parseFloat(a.cell.replace(n,""))-parseFloat(t.cell.replace(n,"")):t.cell.toLowerCase()<a.cell.toLowerCase()?1:-1}}(s,t(o).is("["+i.numericCol+"]")&&!t(o).is("["+i.numericCol+'="false"]')),function(t){var e,n,a=[];for(e=0,n=t.length;e<n;e++)a.push(t[e].row),t[e].subrows&&a.push(t[e].subrows);return a}(c.sort(l))},makeColDefault:function(e,n){var a=t(e);a.attr(i.defaultCol,"true"),n?(a.removeClass(o.descend),a.addClass(o.ascend)):(a.removeClass(o.ascend),a.addClass(o.descend))},sortBy:function(e,a){var s,i=t(this),o=i.data("tablesaw");o.$tbody.each(function(){var r,l,c,h=t(this),d=o.getBodyRows(this),u=o.headerMapping[0];for(l=0,c=u.length;l<c;l++)if(u[l]===e){s=l;break}for(l=0,c=(r=i[n]("sortRows",d,s,a,e,this)).length;l<c;l++)h.append(r[l])}),i[n]("makeColDefault",e,a),i.trigger("tablesaw-sorted")}};t.fn[n]=function(e){var a,s=Array.prototype.slice.call(arguments,1);return e&&"string"==typeof e?void 0!==(a=t.fn[n].prototype[e].apply(this[0],s))?a:t(this):(t(this).data(n+"-active")||(t(this).data(n+"-active",!0),t.fn[n].prototype._create.call(this,e)),t(this))},t.extend(t.fn[n].prototype,r),t(document).on(u.events.create,function(t,e){e.$table.is(a)&&e.$table[n]()})}(),function(){var n={hideBtn:"disabled",persistWidths:"tablesaw-fix-persist",hiddenCol:"tablesaw-swipe-cellhidden",persistCol:"tablesaw-swipe-cellpersist",allColumnsVisible:"tablesaw-all-cols-visible"},a={disableTouchEvents:"data-tablesaw-no-touch",ignorerow:"data-tablesaw-ignorerow",subrow:"data-tablesaw-subrow"};function s(s,i){var o=i.data("tablesaw"),r=t("<div class='tablesaw-advance'></div>"),l=t("<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro left'>"+u.i18n.swipePreviousColumn+"</a>").appendTo(r),c=t("<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro right'>"+u.i18n.swipeNextColumn+"</a>").appendTo(r),h=s._getPrimaryHeaderCells(),d=h.not('[data-tablesaw-priority="persist"]'),f=[],p=t(document.head||"head"),b=i.attr("id");if(!h.length)throw new Error("tablesaw swipe: no header cells found.");function g(){i.css({width:"1px"}),i.find("."+n.hiddenCol).removeClass(n.hiddenCol),f=[],h.each(function(){f.push(this.offsetWidth)}),i.css({width:""})}function v(t){o._$getCells(t).removeClass(n.hiddenCol)}function w(t){o._$getCells(t).addClass(n.hiddenCol)}function m(){i.removeClass(n.persistWidths),t("#"+b+"-persist").remove()}function C(){var e,a="#"+b+".tablesaw-swipe ",s=[],o=i.width(),r=[];if(h.each(function(e){var i;t(this).is('[data-tablesaw-priority="persist"]')&&(i=this.offsetWidth)<.75*o&&(r.push(e+"-"+i),s.push(a+" ."+n.persistCol+":nth-child("+(e+1)+") { width: "+i+"px; }"))}),e=r.join("_"),s.length){i.addClass(n.persistWidths);var l=t("#"+b+"-persist");l.length&&l.data("tablesaw-hash")===e||(l.remove(),t("<style>"+s.join("\n")+"</style>").attr("id",b+"-persist").data("tablesaw-hash",e).appendTo(p))}}function y(){var e,a=[];return d.each(function(s){var i=t(this),o="none"===i.css("display")||i.is("."+n.hiddenCol);if(o||e){if(o&&e)return a[1]=s,!1}else e=!0,a[0]=s}),a}function T(){var t=y();return[t[1]-1,t[0]-1]}function $(t){return t[1]>-1&&t[1]<d.length}function k(){if(!(a=i.attr("data-tablesaw-swipe-media"))||"matchMedia"in e&&e.matchMedia(a).matches){var a,s=i.parent().width(),r=[],l=0,c=[],d=h.length;h.each(function(e){var n=t(this).is('[data-tablesaw-priority="persist"]');r.push(n),l+=f[e],c.push(l),(n||l>s)&&d--});var u=0===d;h.each(function(t){c[t]>s&&w(this)}),h.each(function(t){if(r[t])return e=this,void o._$getCells(e).addClass(n.persistCol);var e;(c[t]<=s||u)&&(u=!1,v(this),o.updateColspanCells(n.hiddenCol,this,!0))}),m(),i.trigger("tablesawcolumns")}}function x(t){var e=function(t){return t?y():T()}(t);$(e)&&(isNaN(e[0])&&(e[0]=t?0:d.length-1),C(),w(d.get(e[0])),o.updateColspanCells(n.hiddenCol,d.get(e[0]),!1),v(d.get(e[1])),o.updateColspanCells(n.hiddenCol,d.get(e[1]),!0),i.trigger("tablesawcolumns"))}function _(t,e){return(t.touches||t.originalEvent.touches)[0][e]}i.addClass("tablesaw-swipe"),g(),r.appendTo(o.$toolbar),b||(b="tableswipe-"+Math.round(1e4*Math.random()),i.attr("id",b)),l.add(c).on("click",function(e){x(!!t(e.target).closest(c).length),e.preventDefault()}),i.is("["+a.disableTouchEvents+"]")||i.on("touchstart.swipetoggle",function(n){var a,i,o=_(n,"pageX"),r=_(n,"pageY"),l=window.pageYOffset;t(e).off(u.events.resize,k),t(this).on("touchmove.swipetoggle",function(t){a=_(t,"pageX"),i=_(t,"pageY")}).on("touchend.swipetoggle",function(){var n=s.getConfig({swipeHorizontalThreshold:30,swipeVerticalThreshold:30}),c=n.swipe?n.swipe.verticalThreshold:n.swipeVerticalThreshold,h=n.swipe?n.swipe.horizontalThreshold:n.swipeHorizontalThreshold,d=Math.abs(window.pageYOffset-l)>=c;Math.abs(i-r)>=c||d||(a-o<-1*h&&x(!0),a-o>h&&x(!1)),window.setTimeout(function(){t(e).on(u.events.resize,k)},300),t(this).off("touchmove.swipetoggle touchend.swipetoggle")})}),i.on("tablesawcolumns.swipetoggle",function(){var t=$(T()),e=$(y());l[t?"removeClass":"addClass"](n.hideBtn),c[e?"removeClass":"addClass"](n.hideBtn),o.$toolbar[t||e?"removeClass":"addClass"](n.allColumnsVisible)}).on("tablesawnext.swipetoggle",function(){x(!0)}).on("tablesawprev.swipetoggle",function(){x(!1)}).on(u.events.destroy+".swipetoggle",function(){var n=t(this);n.removeClass("tablesaw-swipe"),o.$toolbar.find(".tablesaw-advance").remove(),t(e).off(u.events.resize,k),n.off(".swipetoggle")}).on(u.events.refresh,function(){m(),g(),k()}),k(),t(e).on(u.events.resize,k)}t(document).on(u.events.create,function(t,e){"swipe"===e.mode&&s(e,e.$table)})}(),function(){var n={attr:{init:"data-tablesaw-minimap"},show:function(t){var a=t.getAttribute(n.attr.init);return""===a||!!(a&&"matchMedia"in e)&&e.matchMedia(a).matches}};t(document).on(u.events.create,function(a,s){"swipe"!==s.mode&&"columntoggle"!==s.mode||!s.$table.is("[ "+n.attr.init+"]")||function(a){var s=a.data("tablesaw"),i=t('<div class="tablesaw-advance minimap">'),o=t('<ul class="tablesaw-advance-dots">').appendTo(i),r="tablesaw-advance-dots-hide";function l(){if(n.show(a[0])){i.css("display","block");var e=o.find("li").removeClass(r);a.find("thead th").each(function(n){"none"===t(this).css("display")&&e.eq(n).addClass(r)})}else i.css("display","none")}a.data("tablesaw")._getPrimaryHeaderCells().each(function(){o.append("<li><i></i></li>")}),i.appendTo(s.$toolbar),l(),t(e).on(u.events.resize,l),a.on("tablesawcolumns.minimap",function(){l()}).on(u.events.destroy+".minimap",function(){var n=t(this);s.$toolbar.find(".tablesaw-advance").remove(),t(e).off(u.events.resize,l),n.off(".minimap")})}(s.$table)}),u.MiniMap=n}(),d={selectors:{init:"table[data-tablesaw-mode-switch]"},attributes:{excludeMode:"data-tablesaw-mode-exclude"},classes:{main:"tablesaw-modeswitch",toolbar:"tablesaw-bar-section"},modes:["stack","swipe","columntoggle"],init:function(e){var n,a=t(e),s=a.data("tablesaw"),i=a.attr(d.attributes.excludeMode),o=s.$toolbar,r=t("<div>").addClass(d.classes.main+" "+d.classes.toolbar),l=['<label><span class="abbreviated">'+u.i18n.modeSwitchColumnsAbbreviated+'</span><span class="longform">'+u.i18n.modeSwitchColumns+"</span>:"],c=a.attr("data-tablesaw-mode");l.push('<span class="btn tablesaw-btn"><select>');for(var h=0,f=d.modes.length;h<f;h++)i&&i.toLowerCase()===d.modes[h]||(n=c===d.modes[h],l.push("<option"+(n?" selected":"")+' value="'+d.modes[h]+'">'+u.i18n.modes[h]+"</option>"));l.push("</select></span></label>"),r.html(l.join(""));var p=o.find(".tablesaw-advance").eq(0);p.length?r.insertBefore(p):r.appendTo(o),r.find(".tablesaw-btn").tablesawbtn(),r.find("select").on("change",function(n){return d.onModeChange.call(e,n,t(this).val())})},onModeChange:function(e,n){var a=t(this),s=a.data("tablesaw");s.$toolbar.find("."+d.classes.main).remove(),s.destroy(),a.attr("data-tablesaw-mode",n),a.tablesaw()}},t(e.document).on(u.events.create,function(t,e){e.$table.is(d.selectors.init)&&d.init(e.table)}),function(){var e="tablesawCheckAll";function n(t){this.tablesaw=t,this.$table=t.$table,this.attr="data-tablesaw-checkall",this.checkAllSelector="["+this.attr+"]",this.forceCheckedSelector="["+this.attr+"-checked]",this.forceUncheckedSelector="["+this.attr+"-unchecked]",this.checkboxSelector='input[type="checkbox"]',this.$triggers=null,this.$checkboxes=null,this.$table.data(e)||(this.$table.data(e,this),this.init())}n.prototype._filterCells=function(e){return e.filter(function(){return!t(this).closest("tr").is("[data-tablesaw-subrow],[data-tablesaw-ignorerow]")}).find(this.checkboxSelector).not(this.checkAllSelector)},n.prototype.getCheckboxesForButton=function(e){return this._filterCells(t(t(e).attr(this.attr)))},n.prototype.getCheckboxesForCheckbox=function(e){return this._filterCells(t(t(e).closest("th")[0].cells))},n.prototype.init=function(){var e=this;this.$table.find(this.checkAllSelector).each(function(){t(this).is(e.checkboxSelector)?e.addCheckboxEvents(this):e.addButtonEvents(this)})},n.prototype.addButtonEvents=function(n){var a=this;t(n).on("click",function(n){n.preventDefault();var s,i=a.getCheckboxesForButton(this),o=!0;i.each(function(){this.checked||(o=!1)}),s=!!t(this).is(a.forceCheckedSelector)||!t(this).is(a.forceUncheckedSelector)&&!o,i.each(function(){this.checked=s,t(this).trigger("change."+e)})})},n.prototype.addCheckboxEvents=function(n){var a=this;t(n).on("change",function(){var t=this.checked;a.getCheckboxesForCheckbox(this).each(function(){this.checked=t})});var s=a.getCheckboxesForCheckbox(n);s.on("change."+e,function(){var t=0;s.each(function(){this.checked&&t++});var e=t===s.length;n.checked=e,n.indeterminate=0!==t&&!e})},t(document).on(u.events.create,function(t,e){new n(e)}),u.CheckAll=n}(),u});