(()=>{"use strict";var e={424:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"",""]);const i=s},944:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"",""]);const i=s},834:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"",""]);const i=s},985:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=n(o[s]);t[i].references--}for(var l=r(e,a),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),s=n.n(o),i=n(565),l=n.n(i),c=n(216),d=n.n(c),u=n(589),p=n.n(u),m=n(424),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var v=n(944),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),t()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;var b=n(834),y={};y.styleTagTransform=p(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=d(),t()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;var g=n(985),T={};T.styleTagTransform=p(),T.setAttributes=l(),T.insert=s().bind(null,"head"),T.domAPI=a(),T.insertStyleElement=d(),t()(g.Z,T),g.Z&&g.Z.locals&&g.Z.locals;(()=>{const e=document.createElement("div");e.classList.add("main-page"),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("header-title");const t=document.createElement("h1");return t.classList.add("header-title-text"),t.innerHTML="Leaderboard",e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("left-block");const t=document.createElement("h2");t.classList.add("left-block-title"),t.innerHTML="Recent Scores";const n=document.createElement("button");n.classList.add("left-block-button"),n.innerHTML="Refresh";const r=document.createElement("ul");return r.classList.add("left-block-list"),r.innerHTML='\n  <li class="left-block-list-item">Player 1: 100</li>\n  <li class="left-block-list-item">Player 2: 80</li>\n  <li class="left-block-list-item">Player 3: 70</li>\n  <li class="left-block-list-item">Player 4: 65</li>\n  <li class="left-block-list-item">Player 5: 60</li>\n  <li class="left-block-list-item">Player 6: 55</li>\n  <li class="left-block-list-item">Player 7: 50</li>\n  ',e.appendChild(t),e.appendChild(n),e.appendChild(r),e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("right-block");const t=document.createElement("h2");t.classList.add("right-block-title"),t.innerHTML="Add your Score";const n=document.createElement("form");return n.classList.add("right-block-form"),n.innerHTML='\n    <input type="text" name="name" id="name" placeholder="Your Name" required>\n    <input type="number" name="score" id="score" placeholder="Your Score" required>\n    <button type="submit" class="btn btn-primary">Add</button>',e.appendChild(t),e.appendChild(n),e})()),document.body.appendChild(e)})()})()})();