(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),s=t.n(a)()(o());s.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f5f5f5;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: black;\r\n  overflow: scroll;\r\n  font-size: 25px;\r\n}\r\n\r\n.main-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  /* align-items: center; */\r\n  justify-content: center;\r\n  min-height: 80vh;\r\n  margin-top: 50px;\r\n  gap: 80px;\r\n  padding: 50px;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.blocks-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n\r\n  /* border: 1px solid blue; */\r\n}\r\n",""]);const i=s},944:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),s=t.n(a)()(o());s.push([e.id,"/* * {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n} */\r\n",""]);const i=s},834:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),s=t.n(a)()(o());s.push([e.id,".left-block {\r\n  width: 40%;\r\n}\r\n\r\n.left-block-head-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.left-block-button {\r\n  box-shadow: #000;\r\n  border: 5px solid #000;\r\n  padding: 5px 15px;\r\n  border-radius: 1px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.left-block-list {\r\n  list-style-type: none;\r\n  border: 5px solid black;\r\n  overflow-y: scroll;\r\n  height: 500px;\r\n  overflow-x: scroll;\r\n}\r\n\r\nli {\r\n  padding: 10px;\r\n}\r\n\r\nli:nth-child(odd) {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\nli:nth-child(even) {\r\n  background-color: #e5e5e5;\r\n}",""]);const i=s},985:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),s=t.n(a)()(o());s.push([e.id,".right-block {\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.right-block-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  border: 1px solid #e0e0e0;\r\n  padding: 0 20px;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: #828282;\r\n}\r\n\r\n.btn {\r\n  align-self: flex-end;\r\n  box-shadow: #000;\r\n  border: 5px solid #000;\r\n  padding: 5px 15px;\r\n  border-radius: 1px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n",""]);const i=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=t(a[s]);n[i].references--}for(var l=r(e,o),c=0;c<a.length;c++){var d=t(a[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),s=t.n(a),i=t(565),l=t.n(i),c=t(216),d=t.n(c),u=t(589),p=t.n(u),m=t(424),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var b=t(944),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var y=t(834),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),n()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals;var v=t(985),x={};x.styleTagTransform=p(),x.setAttributes=l(),x.insert=s().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),n()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals;const E="Zyge2Wfio2c1GwGRvMJj",k={name:"Leader Board of Microverse Game",id:E,description:"This is a Leader Board of Microverse Game created by Wahab!"},L=async e=>{const n=await fetch(e);return(await n.json()).result};document.addEventListener("DOMContentLoaded",(async()=>{localStorage.setItem("game",JSON.stringify(k)),(()=>{const e=document.getElementsByTagName("div")[0];e.classList.add("main-page");const n=document.createElement("div");n.classList.add("blocks-container"),n.appendChild((()=>{const e=document.createElement("div");e.classList.add("left-block");const n=document.createElement("h2");n.classList.add("left-block-title"),n.innerHTML="Recent Scores";const t=document.createElement("button");t.classList.add("left-block-button"),t.innerHTML="Refresh";const r=document.createElement("div");r.classList.add("left-block-head-wrapper"),r.appendChild(n),r.appendChild(t);const o=document.createElement("ul");return o.classList.add("left-block-list"),o.innerHTML='\n  <li class="left-block-list-item">Player 1: 100 - Dummy</li>\n  <li class="left-block-list-item">Player 2: 80 - Dummy</li>\n  <li class="left-block-list-item">Player 3: 70 - Dummy</li>\n  <li class="left-block-list-item">Player 4: 65 - Dummy</li>\n  <li class="left-block-list-item">Player 5: 60 - Dummy</li>\n  <li class="left-block-list-item">Player 6: 55 - Dummy</li>\n  <li class="left-block-list-item">Player 7: 50 - Dummy</li>\n  ',e.appendChild(r),e.appendChild(o),e})()),n.appendChild((()=>{const e=document.createElement("div");e.classList.add("right-block");const n=document.createElement("h2");n.classList.add("right-block-title"),n.innerHTML="Add your Score";const t=document.createElement("form");return t.classList.add("right-block-form"),t.innerHTML='\n    <input type="text" name="name" id="name" placeholder="Your Name" required>\n    <input type="number" name="score" id="score" placeholder="Your Score 0-100" required>\n    <button type="submit" class="btn btn-primary">Submit</button>',e.appendChild(n),e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("header-title");const n=document.createElement("h1");return n.classList.add("header-title-text"),n.innerHTML="Leaderboard",e.appendChild(n),e})()),e.appendChild(n)})();const e=`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${E}/scores/`,n=await L(e);console.log(n);const t=document.getElementsByClassName("left-block-list")[0];t.innerHTML="",n.forEach((e=>{const n=document.createElement("li");n.classList.add("left-block-list-item"),n.innerHTML=`${e.user} : ${e.score}`,t.appendChild(n)})),document.getElementsByClassName("right-block-form")[0].addEventListener("submit",(async n=>{n.preventDefault();const t=document.getElementById("name").value,r=document.getElementById("score").value<0||document.getElementById("score").value>100?alert("Your score must be between 0 and 100"):document.getElementById("score").value;if(void 0===r)return;const o=await(async(e,n,t)=>{const r={user:n,score:t},o=await fetch(e,{method:"POST",body:JSON.stringify(r),headers:{"Content-type":"application/json; charset=UTF-8"}}),a=await o.json(),{result:s}=a;return s})(e,t,r);"Leaderboard score created correctly."===o?(document.getElementById("name").value="",document.getElementById("score").value="",alert("Your score was added correctly!")):alert("There was an error adding your score, please try again.")})),document.getElementsByClassName("left-block-button")[0].addEventListener("click",(async()=>{const n=await L(e);console.log(n);const t=document.getElementsByClassName("left-block-list")[0];t.innerHTML="",n.forEach((e=>{const n=document.createElement("li");n.classList.add("left-block-list-item"),n.innerHTML=`${e.user} : ${e.score}`,t.appendChild(n)}))}))}))})()})();