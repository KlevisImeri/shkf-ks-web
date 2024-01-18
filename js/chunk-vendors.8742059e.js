"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[998],{2054:function(e,t,n){n.d(t,{Z:function(){return g}});n(560);var r=n(3396);
/*! vue-carousel v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */
const i="undefined"!==typeof window&&"undefined"!==typeof window.document,s=!(!i||!window.document.documentElement)&&"ontouchstart"in window.document.documentElement,o=!!i&&"PointerEvent"in window,a=s?"ontouchstart":"onmousedown",c=s?"ontouchmove":"onmousemove",u=s?"ontouchend":"onmouseup",l=o?"onpointerdown":a,h=o?"onpointermove":c,d=o?"onpointerup":u,f=o?"onpointerenter":"onmouseenter",p=o?"onpointerleave":"onmouseleave",m=e=>"object"===typeof e&&null!==e||"function"===typeof e?e:{template:String(e)};var g=(0,r.aZ)({name:"VueCarousel",props:{autoplay:{type:Boolean,default:!0},controls:{type:[Boolean,String],default:"hover"},data:{type:Array,default:void 0},direction:{type:String,default:"left"},duration:{type:Number,default:600},indicators:{type:[Boolean,String],default:!0},indicatorTrigger:{type:String,default:"click"},indicatorType:{type:String,default:"line"},interval:{type:Number,default:5e3},pauseOnEnter:{type:Boolean,default:!0},slideOnSwipe:{type:Boolean,default:!0},tag:{type:String,default:"div"}},emits:["slide","slid"],data(){return{endX:0,endY:0,index:0,list:[],onVisibilityChange:()=>{},playing:!1,sliding:!1,startX:0,startY:0,timeout:0}},watch:{data(){this.init()}},created(){this.init()},mounted(){document.addEventListener("visibilitychange",this.onVisibilityChange=()=>{this.playing&&("visible"===document.visibilityState?this.cycle():this.pause())}),this.autoplay&&this.play()},beforeUnmount(){document.removeEventListener("visibilitychange",this.onVisibilityChange)},methods:{init(){const{data:e}=this,t=[];if(e&&e.length>0){const n=e.length-1;this.index>n&&(this.index=n),e.forEach(((e,n)=>{const r=n===this.index,i={...e&&void 0!==e.content?e:{content:e},active:r,bottom:!1,left:!1,raw:e,right:!1,sliding:r,toBottom:!1,toLeft:!1,toRight:!1,toTop:!1,top:!1};t.push(i)}))}this.list=t},play(){this.playing||(this.playing=!0,this.cycle())},cycle(){this.playing&&(this.pause(),this.timeout=window.setTimeout((()=>{this.next((()=>{this.cycle()}))}),this.interval))},pause(){window.clearTimeout(this.timeout),this.timeout=0},stop(){this.playing&&(this.pause(),this.playing=!1)},prev(e){this.slideTo(this.index-1,e)},next(e){this.slideTo(this.index+1,e)},slide(e,t=!1,n=(()=>{})){if(document.hidden||this.sliding)return void n();const{list:i}=this,s=0,o=i.length-1;if(e>o?e=s:e<s&&(e=o),e===this.index)return void n();this.sliding=!0,this.$emit("slide",e,this.index);const a=i[this.index],c=i[e];switch(this.direction){case"up":c.bottom=!t,c.top=t;break;case"right":c.left=!t,c.right=t;break;case"down":c.top=!t,c.bottom=t;break;default:c.right=!t,c.left=t}(0,r.Y3)((()=>{switch(this.$el.offsetWidth,this.direction){case"up":a.toTop=!t,a.toBottom=t,c.toTop=!t,c.toBottom=t;break;case"right":a.toRight=!t,a.toLeft=t,c.toRight=!t,c.toLeft=t;break;case"down":a.toBottom=!t,a.toTop=t,c.toBottom=!t,c.toTop=t;break;default:a.toLeft=!t,a.toRight=t,c.toLeft=!t,c.toRight=t}a.sliding=!1,c.sliding=!0,setTimeout((()=>{a.active=!1,a.top=!1,a.right=!1,a.bottom=!1,a.left=!1,a.toTop=!1,a.toRight=!1,a.toBottom=!1,a.toLeft=!1,c.active=!0,c.top=!1,c.right=!1,c.bottom=!1,c.left=!1,c.toTop=!1,c.toRight=!1,c.toBottom=!1,c.toLeft=!1,this.$emit("slid",e,this.index),this.index=e,this.sliding=!1,n()}),this.duration)}))},slideTo(e,t){e!==this.index&&this.slide(e,e<this.index,t)},slideStart(e){const t=e.touches?e.touches[0]:null;this.playing&&this.pauseOnEnter&&this.stop(),this.startX=t?t.pageX:e.pageX,this.startY=t?t.pageY:e.pageY},slideMove(e){const t=e.touches?e.touches[0]:null;e.preventDefault(),this.endX=t?t.pageX:e.pageX,this.endY=t?t.pageY:e.pageY},slideEnd(){const e=this.endX-this.startX,t=this.endY-this.startY;if(this.endX=this.startX,this.endY=this.startY,0===e&&0===t)return;const n=this.$el.offsetWidth/5,r=this.$el.offsetHeight/5,i=t<-r,s=e>n,o=t>r,a=e<-n,c=()=>{!this.playing&&this.pauseOnEnter&&this.play()};let u=!1,l=!1;switch(this.direction){case"up":u=o,l=i;break;case"right":u=a,l=s;break;case"down":u=i,l=o;break;default:u=s,l=a}u?this.prev(c):l?this.next(c):c()}},render(){return(0,r.h)(this.tag,{class:{"vue-carousel":!0,[`vue-carousel--${this.direction}`]:this.direction,"vue-carousel--slidable":this.slideOnSwipe,"vue-carousel--controls":"hover"===this.controls,"vue-carousel--indicators":"hover"===this.indicators},...this.pauseOnEnter?{[f]:this.pause,[p]:this.cycle}:{},...this.slideOnSwipe?{[l]:this.slideStart,[h]:this.slideMove,[d]:this.slideEnd}:{}},0===this.list.length?[]:[(0,r.h)("ul",{class:"vue-carousel__list"},this.list.map(((e,t)=>(0,r.h)("li",{"data-index":t,class:{"vue-carousel__item":!0,"vue-carousel__item--active":e.active,"vue-carousel__item--top":e.top,"vue-carousel__item--right":e.right,"vue-carousel__item--bottom":e.bottom,"vue-carousel__item--left":e.left,"vue-carousel__item--to-top":e.toTop,"vue-carousel__item--to-right":e.toRight,"vue-carousel__item--to-bottom":e.toBottom,"vue-carousel__item--to-left":e.toLeft},style:{"transition-duration":this.duration/1e3+"s"}},[(0,r.h)(m(e.content))])))),this.indicators?(0,r.h)("ol",{class:{"vue-carousel__indicators":!0,[`vue-carousel__indicators--${this.indicatorType}`]:this.indicatorType}},this.list.map(((e,t)=>(0,r.h)("li",{"data-slide-to":t,class:{"vue-carousel__indicator":!0,"vue-carousel__indicator--active":e.sliding},...(()=>{const e={},n=()=>{this.slideTo(t)};return"hover"===this.indicatorTrigger?(e[f]=n,s&&!o&&(e[a]=n)):e.onclick=n,e})()})))):"",this.controls?(0,r.h)("button",{type:"button","data-slide":"prev",class:"vue-carousel__control vue-carousel__control--prev",onclick:()=>{["right","down"].indexOf(this.direction)>-1?this.next():this.prev()}}):"",this.controls?(0,r.h)("button",{type:"button","data-slide":"next",class:"vue-carousel__control vue-carousel__control--next",onclick:()=>{["right","down"].indexOf(this.direction)>-1?this.prev():this.next()}}):""])}});function y(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var v='.vue-carousel{position:relative;user-select:none}.vue-carousel--slidable{touch-action:none}.vue-carousel--down>.vue-carousel__indicators,.vue-carousel--up>.vue-carousel__indicators{bottom:auto;flex-direction:column;left:auto;right:0;top:50%;transform:translateY(-50%)}.vue-carousel--down>.vue-carousel__indicators>.vue-carousel__indicator:before,.vue-carousel--up>.vue-carousel__indicators>.vue-carousel__indicator:before{height:100%;width:.125rem}.vue-carousel--down>.vue-carousel__indicators--disc>.vue-carousel__indicator,.vue-carousel--up>.vue-carousel__indicators--disc>.vue-carousel__indicator{height:.75rem;width:1.5rem}.vue-carousel--down>.vue-carousel__indicators--disc>.vue-carousel__indicator:before,.vue-carousel--up>.vue-carousel__indicators--disc>.vue-carousel__indicator:before{height:.5rem;width:.5rem}.vue-carousel--right>.vue-carousel__indicators{flex-direction:row-reverse}.vue-carousel--down>.vue-carousel__indicators{flex-direction:column-reverse}.vue-carousel--controls:hover>.vue-carousel__control{opacity:.5;transform:translateX(0);z-index:1}.vue-carousel--controls:hover>.vue-carousel__control:focus,.vue-carousel--controls:hover>.vue-carousel__control:hover{opacity:1}.vue-carousel--controls>.vue-carousel__control{opacity:0;z-index:-1}.vue-carousel--controls>.vue-carousel__control--prev{transform:translateX(-50%)}.vue-carousel--controls>.vue-carousel__control--next{transform:translateX(50%)}.vue-carousel--indicators:hover>.vue-carousel__indicators{opacity:1;z-index:1}.vue-carousel--indicators>.vue-carousel__indicators{opacity:0;transition:opacity .15s;z-index:-1}.vue-carousel__list{margin:0;overflow:hidden;padding:0;position:relative;width:100%}.vue-carousel__item{display:none;margin:0}.vue-carousel__item--active,.vue-carousel__item--bottom,.vue-carousel__item--left,.vue-carousel__item--right,.vue-carousel__item--top{display:block;transition:transform .6s ease-in-out;width:100%}.vue-carousel__item--bottom,.vue-carousel__item--left,.vue-carousel__item--right,.vue-carousel__item--top{left:0;position:absolute;top:0}.vue-carousel__item--top{transform:translateY(-100%)}.vue-carousel__item--top.vue-carousel__item--to-bottom{transform:translateY(0)}.vue-carousel__item--right{transform:translateX(100%)}.vue-carousel__item--right.vue-carousel__item--to-left{transform:translateX(0)}.vue-carousel__item--bottom{transform:translateY(100%)}.vue-carousel__item--bottom.vue-carousel__item--to-top{transform:translateY(0)}.vue-carousel__item--left{transform:translateX(-100%)}.vue-carousel__item--left.vue-carousel__item--to-right{transform:translateX(0)}.vue-carousel__item--active{transform:translate(0);z-index:1}.vue-carousel__item--active.vue-carousel__item--to-top{transform:translateY(-100%)}.vue-carousel__item--active.vue-carousel__item--to-right{transform:translateX(100%)}.vue-carousel__item--active.vue-carousel__item--to-bottom{transform:translateY(100%)}.vue-carousel__item--active.vue-carousel__item--to-left{transform:translateX(-100%)}.vue-carousel__indicators{bottom:0;display:flex;justify-content:center;left:50%;list-style:none;margin:0;padding:0;position:absolute;transform:translateX(-50%);z-index:1}.vue-carousel__indicators--disc>.vue-carousel__indicator{width:.75rem}.vue-carousel__indicators--disc>.vue-carousel__indicator:before{border-radius:50%;height:.5rem;width:.5rem}.vue-carousel__indicator{cursor:pointer;height:1.5rem;margin:.125rem;opacity:.5;position:relative;transition:opacity .15s;width:1.5rem}.vue-carousel__indicator:before{background-color:#fff;content:"";display:block;height:.125rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:100%}.vue-carousel__indicator--active{opacity:1}.vue-carousel__control{background-color:rgba(0,0,0,.5);border:0;border-radius:50%;color:#fff;cursor:pointer;height:2rem;margin-top:-1rem;opacity:.5;padding:.5rem;position:absolute;top:50%;transition:all .15s;width:2rem}.vue-carousel__control:focus,.vue-carousel__control:hover{opacity:1}.vue-carousel__control:focus{outline:none}.vue-carousel__control:before{border:.0625rem solid transparent;border-radius:.125rem;content:"";display:block;height:.5rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%) rotate(45deg);width:.5rem}.vue-carousel__control--prev{left:1rem}.vue-carousel__control--prev:before{border-bottom-color:#fff;border-left-color:#fff;margin-left:.125rem}.vue-carousel__control--next{right:1rem}.vue-carousel__control--next:before{border-right-color:#fff;border-top-color:#fff;margin-left:-.125rem}';y(v)},223:function(e,t,n){n.d(t,{BH:function(){return _},L:function(){return c},LL:function(){return N},P0:function(){return g},Pz:function(){return v},Sg:function(){return w},ZR:function(){return R},aH:function(){return y},b$:function(){return S},eu:function(){return C},hl:function(){return k},m9:function(){return q},ne:function(){return V},pd:function(){return U},q4:function(){return m},ru:function(){return T},tV:function(){return u},uI:function(){return E},vZ:function(){return P},w1:function(){return I},xO:function(){return M},xb:function(){return D},z$:function(){return b},zd:function(){return F}});n(3429),n(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:""}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=e=>{const t=m(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function T(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"===typeof indexedDB}catch(e){return!1}}function C(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=A,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?x(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new R(r,o,n);return a}}function x(e,t){return e.replace(O,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(L(n)&&L(s)){if(!P(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function F(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){const n=new j(e,t);return n.subscribe.bind(n)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=B(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=$),void 0===r.error&&(r.error=$),void 0===r.complete&&(r.complete=$);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function $(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){n.d(t,{$y:function(){return Ae},B:function(){return a},BK:function(){return Xe},Bj:function(){return o},EB:function(){return l},ER:function(){return nt},Fl:function(){return Me},IU:function(){return xe},Jd:function(){return b},OT:function(){return Se},PG:function(){return Ce},PQ:function(){return rt},SU:function(){return ze},Tn:function(){return Ke},Um:function(){return Te},Vh:function(){return et},WL:function(){return We},X$:function(){return P},X3:function(){return Ne},XI:function(){return Be},Xl:function(){return Oe},YS:function(){return Ie},ZM:function(){return Ye},cE:function(){return g},dq:function(){return Ve},iH:function(){return je},j:function(){return D},lk:function(){return E},nZ:function(){return u},oR:function(){return He},qj:function(){return Ee},qq:function(){return h},sT:function(){return y},yT:function(){return Re}});n(560);var r=n(7139);let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e){return new o(e)}function c(e,t=i){t&&t.active&&t.effects.push(e)}function u(){return i}function l(e){i&&i.cleanups.push(e)}class h{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,c(this,r)}get dirty(){if(1===this._dirtyLevel){b();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(d(t.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),E()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=v,t=s;try{return v=!0,s=this,this._runnings++,f(this),this.fn()}finally{p(this),this._runnings--,s=t,v=e}}stop(){var e;this.active&&(f(this),p(this),null==(e=this.onStop)||e.call(this),this.active=!1)}}function d(e){return e.value}function f(e){e._trackId++,e._depsLength=0}function p(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)m(e.deps[t],e);e.deps.length=e._depsLength}}function m(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}function g(e,t){e.effect instanceof h&&(e=e.effect.fn);const n=new h(e,r.dG,(()=>{n.dirty&&n.run()}));t&&((0,r.l7)(n,t),t.scope&&c(n,t.scope)),t&&t.lazy||n.run();const i=n.run.bind(n);return i.effect=n,i}function y(e){e.effect.stop()}let v=!0,_=0;const w=[];function b(){w.push(v),v=!1}function E(){const e=w.pop();v=void 0===e||e}function T(){_++}function S(){_--;while(!_&&k.length)k.shift()()}function I(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&m(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const k=[];function C(e,t,n){T();for(const r of e.keys())if(r._dirtyLevel<t&&e.get(r)===r._trackId){const e=r._dirtyLevel;r._dirtyLevel=t,0===e&&(r._shouldSchedule=!0,r.trigger())}A(e),S()}function A(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,k.push(t.scheduler))}const R=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},N=new WeakMap,x=Symbol(""),O=Symbol("");function D(e,t,n){if(v&&s){let t=N.get(e);t||N.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=R((()=>t.delete(n)))),I(s,r,void 0)}}function P(e,t,n,i,s,o){const a=N.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.yk)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(x)),(0,r._N)(e)&&c.push(a.get(O)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(x)),(0,r._N)(e)&&c.push(a.get(O)));break;case"set":(0,r._N)(e)&&c.push(a.get(x));break}T();for(const r of c)r&&C(r,2,void 0);S()}function L(e,t){var n;return null==(n=N.get(e))?void 0:n.get(t)}const M=(0,r.fY)("__proto__,__v_isRef,__isVue"),F=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),U=V();function V(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=xe(this);for(let t=0,i=this.length;t<i;t++)D(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(xe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){b(),T();const n=xe(this)[t].apply(this,e);return S(),E(),n}})),e}function j(e){const t=xe(this);return D(t,"has",e),t.hasOwnProperty(e)}class B{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const i=this._isReadonly,s=this._shallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?_e:ve:s?ye:ge).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.kJ)(e);if(!i){if(o&&(0,r.RI)(U,t))return Reflect.get(U,t,n);if("hasOwnProperty"===t)return j}const a=Reflect.get(e,t,n);return((0,r.yk)(t)?F.has(t):M(t))?a:(i||D(e,"get",t),s?a:Ve(a)?o&&(0,r.S0)(t)?a:a.value:(0,r.Kn)(a)?i?Se(a):Ee(a):a)}}class $ extends B{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._shallow){const t=Ae(s);if(Re(n)||Ae(n)||(s=xe(s),n=xe(n)),!(0,r.kJ)(e)&&Ve(s)&&!Ve(n))return!t&&(s.value=n,!0)}const o=(0,r.kJ)(e)&&(0,r.S0)(t)?Number(t)<e.length:(0,r.RI)(e,t),a=Reflect.set(e,t,n,i);return e===xe(i)&&(o?(0,r.aU)(n,s)&&P(e,"set",t,n,s):P(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&P(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&F.has(t)||D(e,"has",t),n}ownKeys(e){return D(e,"iterate",(0,r.kJ)(e)?"length":x),Reflect.ownKeys(e)}}class q extends B{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const H=new $,z=new q,K=new $(!0),G=new q(!0),W=e=>e,J=e=>Reflect.getPrototypeOf(e);function Y(e,t,n=!1,i=!1){e=e["__v_raw"];const s=xe(e),o=xe(t);n||((0,r.aU)(t,o)&&D(s,"get",t),D(s,"get",o));const{has:a}=J(s),c=i?W:n?Pe:De;return a.call(s,t)?c(e.get(t)):a.call(s,o)?c(e.get(o)):void(e!==s&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],i=xe(n),s=xe(e);return t||((0,r.aU)(e,s)&&D(i,"has",e),D(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Q(e,t=!1){return e=e["__v_raw"],!t&&D(xe(e),"iterate",x),Reflect.get(e,"size",e)}function Z(e){e=xe(e);const t=xe(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),P(t,"add",e,e)),this}function ee(e,t){t=xe(t);const n=xe(this),{has:i,get:s}=J(n);let o=i.call(n,e);o||(e=xe(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&P(n,"set",e,t,a):P(n,"add",e,t),this}function te(e){const t=xe(this),{has:n,get:r}=J(t);let i=n.call(t,e);i||(e=xe(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&P(t,"delete",e,void 0,s),o}function ne(){const e=xe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&P(e,"clear",void 0,void 0,n),r}function re(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=xe(s),a=t?W:e?Pe:De;return!e&&D(o,"iterate",x),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ie(e,t,n){return function(...i){const s=this["__v_raw"],o=xe(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?W:t?Pe:De;return!t&&D(o,"iterate",u?O:x),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function oe(){const e={get(e){return Y(this,e)},get size(){return Q(this)},has:X,add:Z,set:ee,delete:te,clear:ne,forEach:re(!1,!1)},t={get(e){return Y(this,e,!1,!0)},get size(){return Q(this)},has:X,add:Z,set:ee,delete:te,clear:ne,forEach:re(!1,!0)},n={get(e){return Y(this,e,!0)},get size(){return Q(this,!0)},has(e){return X.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:re(!0,!1)},r={get(e){return Y(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return X.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:re(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ie(i,!1,!1),n[i]=ie(i,!0,!1),t[i]=ie(i,!1,!0),r[i]=ie(i,!0,!0)})),[e,n,t,r]}const[ae,ce,ue,le]=oe();function he(e,t){const n=t?e?le:ue:e?ce:ae;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const de={get:he(!1,!1)},fe={get:he(!1,!0)},pe={get:he(!0,!1)},me={get:he(!0,!0)};const ge=new WeakMap,ye=new WeakMap,ve=new WeakMap,_e=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,r.W7)(e))}function Ee(e){return Ae(e)?e:ke(e,!1,H,de,ge)}function Te(e){return ke(e,!1,K,fe,ye)}function Se(e){return ke(e,!0,z,pe,ve)}function Ie(e){return ke(e,!0,G,me,_e)}function ke(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ce(e){return Ae(e)?Ce(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function Re(e){return!(!e||!e["__v_isShallow"])}function Ne(e){return Ce(e)||Ae(e)}function xe(e){const t=e&&e["__v_raw"];return t?xe(t):e}function Oe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const De=e=>(0,r.Kn)(e)?Ee(e):e,Pe=e=>(0,r.Kn)(e)?Se(e):e;class Le{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new h((()=>e(this._value)),(()=>Ue(this,1)),(()=>this.dep&&A(this.dep))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=xe(this);return e._cacheable&&!e.effect.dirty||(0,r.aU)(e._value,e._value=e.effect.run())&&Ue(e,2),Fe(e),e.effect._dirtyLevel>=1&&Ue(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Me(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Le(i,s,o||!s,n);return a}function Fe(e){v&&s&&(e=xe(e),I(s,e.dep||(e.dep=R((()=>e.dep=void 0),e instanceof Le?e:void 0)),void 0))}function Ue(e,t=2,n){e=xe(e);const r=e.dep;r&&C(r,t,void 0)}function Ve(e){return!(!e||!0!==e.__v_isRef)}function je(e){return $e(e,!1)}function Be(e){return $e(e,!0)}function $e(e,t){return Ve(e)?e:new qe(e,t)}class qe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:xe(e),this._value=t?e:De(e)}get value(){return Fe(this),this._value}set value(e){const t=this.__v_isShallow||Re(e)||Ae(e);e=t?e:xe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:De(e),Ue(this,2,e))}}function He(e){Ue(e,2,void 0)}function ze(e){return Ve(e)?e.value:e}function Ke(e){return(0,r.mf)(e)?e():ze(e)}const Ge={get:(e,t,n)=>ze(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function We(e){return Ce(e)?e:new Proxy(e,Ge)}class Je{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e((()=>Fe(this)),(()=>Ue(this)));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function Ye(e){return new Je(e)}function Xe(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=tt(e,n);return t}class Qe{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return L(xe(this._object),this._key)}}class Ze{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function et(e,t,n){return Ve(e)?e:(0,r.mf)(e)?new Ze(e):(0,r.Kn)(e)&&arguments.length>1?tt(e,t,n):je(e)}function tt(e,t,n){const r=e[t];return Ve(r)?r:new Qe(e,t,n)}const nt={GET:"get",HAS:"has",ITERATE:"iterate"},rt={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"}},3396:function(e,t,n){n.d(t,{$d:function(){return g},$y:function(){return r.$y},Ah:function(){return bt},B:function(){return r.B},BK:function(){return r.BK},Bj:function(){return r.Bj},Bz:function(){return Ft},C3:function(){return kr},C_:function(){return i.C_},Cn:function(){return Y},EB:function(){return r.EB},EM:function(){return _n},ER:function(){return r.ER},Eo:function(){return Kn},F4:function(){return Dr},FN:function(){return Gr},Fl:function(){return gi},G:function(){return Ai},Gn:function(){return Bt},HX:function(){return X},HY:function(){return lr},Ho:function(){return Pr},IU:function(){return r.IU},JJ:function(){return yn},Jd:function(){return wt},KU:function(){return m},Ko:function(){return kt},LL:function(){return le},MW:function(){return Mt},MX:function(){return wi},Mr:function(){return _i},Nv:function(){return Ct},OT:function(){return r.OT},Ob:function(){return ot},P$:function(){return Ge},PG:function(){return r.PG},PQ:function(){return r.PQ},Q2:function(){return he},Q6:function(){return Ze},RC:function(){return nt},RM:function(){return xi},Rh:function(){return xe},Rr:function(){return qt},S3:function(){return y},SM:function(){return f},SU:function(){return r.SU},Tn:function(){return r.Tn},U2:function(){return Je},Uc:function(){return Ae},Uk:function(){return Lr},Um:function(){return r.Um},Us:function(){return zn},Vf:function(){return Wt},Vh:function(){return r.Vh},WI:function(){return At},WL:function(){return r.WL},WY:function(){return Ut},Wl:function(){return jt},Wm:function(){return xr},Wu:function(){return d},X3:function(){return r.X3},XI:function(){return r.XI},Xl:function(){return r.Xl},Xn:function(){return vt},Y1:function(){return si},Y3:function(){return A},Y8:function(){return qe},YP:function(){return Pe},YS:function(){return r.YS},Yq:function(){return Tt},Yu:function(){return Vt},ZK:function(){return Ti},ZM:function(){return r.ZM},Zq:function(){return Re},_:function(){return Nr},_A:function(){return i._A},aZ:function(){return et},b9:function(){return $t},bT:function(){return St},bv:function(){return yt},cE:function(){return r.cE},d1:function(){return It},dD:function(){return J},dG:function(){return Br},dl:function(){return ct},dq:function(){return r.dq},ec:function(){return ki},eq:function(){return Ri},f3:function(){return vn},h:function(){return vi},hR:function(){return i.hR},i8:function(){return Ei},iD:function(){return Er},iH:function(){return r.iH},ic:function(){return _t},j4:function(){return Tr},j5:function(){return i.j5},kC:function(){return i.kC},kq:function(){return Fr},l1:function(){return Ht},lA:function(){return Sr},lR:function(){return cr},m0:function(){return Ne},mW:function(){return Ii},mv:function(){return Yt},mx:function(){return Nt},n4:function(){return ye},nJ:function(){return ze},nK:function(){return Qe},nQ:function(){return bi},nZ:function(){return r.nZ},oR:function(){return r.oR},of:function(){return oi},p1:function(){return Jt},qG:function(){return fr},qZ:function(){return wr},qb:function(){return D},qj:function(){return r.qj},qq:function(){return r.qq},ry:function(){return Ni},sT:function(){return r.sT},se:function(){return ut},sv:function(){return dr},tT:function(){return yi},uE:function(){return Mr},u_:function(){return Gt},up:function(){return ce},vl:function(){return Et},vs:function(){return i.vs},w5:function(){return Q},wF:function(){return gt},wg:function(){return gr},wy:function(){return Ve},xv:function(){return hr},yT:function(){return r.yT},yX:function(){return Oe},yg:function(){return Si},zw:function(){return i.zw}});n(560);var r=n(4870),i=n(7139);
/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const s=[];function o(e,...t){(0,r.Jd)();const n=s.length?s[s.length-1].component:null,i=n&&n.appContext.config.warnHandler,o=a();if(i)m(i,n,11,[e+t.join(""),n&&n.proxy,o.map((({vnode:e})=>`at <${pi(n,e.type)}>`)).join("\n"),o]);else{const n=[`[Vue warn]: ${e}`,...t];o.length&&n.push("\n",...c(o)),console.warn(...n)}(0,r.lk)()}function a(){let e=s[s.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function c(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...u(e))})),t}function u({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,i=` at <${pi(e.component,e.type,r)}`,s=">"+n;return e.props?[i,...l(e.props),s]:[i+s]}function l(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...h(n,e[n]))})),n.length>3&&t.push(" ..."),t}function h(e,t,n){return(0,i.HD)(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:(0,r.dq)(t)?(t=h(e,(0,r.IU)(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):(0,i.mf)(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=(0,r.IU)(t),n?t:[`${e}=`,t])}function d(e,t){}const f={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},p={["sp"]:"serverPrefetch hook",["bc"]:"beforeCreate hook",["c"]:"created hook",["bm"]:"beforeMount hook",["m"]:"mounted hook",["bu"]:"beforeUpdate hook",["u"]:"updated",["bum"]:"beforeUnmount hook",["um"]:"unmounted hook",["a"]:"activated hook",["da"]:"deactivated hook",["ec"]:"errorCaptured hook",["rtc"]:"renderTracked hook",["rtg"]:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function m(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){y(s,t,n)}return i}function g(e,t,n,r){if((0,i.mf)(e)){const s=m(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{y(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(g(e[i],t,n,r));return s}function y(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void m(o,null,10,[e,i,s])}v(e,n,i,r)}function v(e,t,n,r=!0){console.error(e)}let _=!1,w=!1;const b=[];let E=0;const T=[];let S=null,I=0;const k=Promise.resolve();let C=null;function A(e){const t=C||k;return e?t.then(this?e.bind(this):e):t}function R(e){let t=E+1,n=b.length;while(t<n){const r=t+n>>>1,i=b[r],s=M(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function N(e){b.length&&b.includes(e,_&&e.allowRecurse?E+1:E)||(null==e.id?b.push(e):b.splice(R(e.id),0,e),x())}function x(){_||w||(w=!0,C=k.then(U))}function O(e){const t=b.indexOf(e);t>E&&b.splice(t,1)}function D(e){(0,i.kJ)(e)?T.push(...e):S&&S.includes(e,e.allowRecurse?I+1:I)||T.push(e),x()}function P(e,t,n=(_?E+1:0)){for(0;n<b.length;n++){const t=b[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,b.splice(n,1),n--,t()}}}function L(e){if(T.length){const e=[...new Set(T)].sort(((e,t)=>M(e)-M(t)));if(T.length=0,S)return void S.push(...e);for(S=e,I=0;I<S.length;I++)S[I]();S=null,I=0}}const M=e=>null==e.id?1/0:e.id,F=(e,t)=>{const n=M(e)-M(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function U(e){w=!1,_=!0,b.sort(F);i.dG;try{for(E=0;E<b.length;E++){const e=b[E];e&&!1!==e.active&&m(e,null,14)}}finally{E=0,b.length=0,L(e),_=!1,C=null,(b.length||T.length)&&U(e)}}let V,j=[],B=!1;function $(e,t){var n,r;if(V=e,V)V.enabled=!0,j.forEach((({event:e,args:t})=>V.emit(e,...t))),j=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null==(r=null==(n=window.navigator)?void 0:n.userAgent)?void 0:r.includes("jsdom"))){const e=t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[];e.push((e=>{$(e,t)})),setTimeout((()=>{V||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,B=!0,j=[])}),3e3)}else B=!0,j=[]}function q(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.h5))}let c;let u=r[c=(0,i.hR)(t)]||r[c=(0,i.hR)((0,i._A)(t))];!u&&o&&(u=r[c=(0,i.hR)((0,i.rs)(t))]),u&&g(u,e,6,s);const l=r[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,g(l,e,6,s)}}function H(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=H(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function z(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let K=null,G=null;function W(e){const t=K;return K=e,G=e&&e.type.__scopeId||null,t}function J(e){G=e}function Y(){G=null}const X=e=>Q;function Q(e,t=K,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&wr(-1);const i=W(t);let s;try{s=e(...n)}finally{W(i),r._d&&wr(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Z(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let v,_;const w=W(e);try{if(4&n.shapeFlag){const e=s||r,t=e;v=Ur(h.call(t,e,d,o,p,f,m)),_=u}else{const e=t;0,v=Ur(e.length>1?e(o,{attrs:u,slots:c,emit:l}):e(o,null)),_=t.props?u:te(u)}}catch(E){pr.length=0,y(E,e,1),v=xr(dr)}let b=v;if(_&&!1!==g){const e=Object.keys(_),{shapeFlag:t}=b;e.length&&7&t&&(a&&e.some(i.tR)&&(_=ne(_,a)),b=Pr(b,_))}return n.dirs&&(b=Pr(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,W(w),v}function ee(e,t=!0){let n;for(let r=0;r<e.length;r++){const t=e[r];if(!Sr(t))return;if(t.type!==dr||"v-if"===t.children){if(n)return;n=t}}return n}const te=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},ne=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function re(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||ie(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?ie(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!z(u,n))return!0}}return!1}function ie(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!z(n,s))return!0}return!1}function se({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const oe="components",ae="directives";function ce(e,t){return de(oe,e,!0,t)||e}const ue=Symbol.for("v-ndc");function le(e){return(0,i.HD)(e)?de(oe,e,!1)||e:e||ue}function he(e){return de(ae,e)}function de(e,t,n=!0,r=!1){const s=K||Kr;if(s){const n=s.type;if(e===oe){const e=fi(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=fe(s[e]||n[e],t)||fe(s.appContext[e],t);return!o&&r?n:o}}function fe(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const pe=e=>e.__isSuspense;let me=0;const ge={name:"Suspense",__isSuspense:!0,process(e,t,n,r,i,s,o,a,c,u){if(null==e)_e(t,n,r,i,s,o,a,c,u);else{if(s&&s.deps>0)return void(t.suspense=e.suspense);we(e,t,n,r,i,o,a,c,u)}},hydrate:Ee,create:be,normalize:Te},ye=ge;function ve(e,t){const n=e.props&&e.props[t];(0,i.mf)(n)&&n()}function _e(e,t,n,r,i,s,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=e.suspense=be(e,i,r,t,h,n,s,o,a,c);u(null,d.pendingBranch=e.ssContent,h,null,r,d,s,o),d.deps>0?(ve(e,"onPending"),ve(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,s,o),ke(d,e.ssFallback)):d.resolve(!1,!0)}function we(e,t,n,r,i,s,o,a,{p:c,um:u,o:{createElement:l}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const d=t.ssContent,f=t.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:g,isHydrating:y}=h;if(m)h.pendingBranch=d,Ir(d,m)?(c(m,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():g&&(y||(c(p,f,n,r,i,null,s,o,a),ke(h,f)))):(h.pendingId=me++,y?(h.isHydrating=!1,h.activeBranch=m):u(m,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),g?(c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():(c(p,f,n,r,i,null,s,o,a),ke(h,f))):p&&Ir(d,p)?(c(p,d,n,r,i,h,s,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0&&h.resolve()));else if(p&&Ir(d,p))c(p,d,n,r,i,h,s,o,a),ke(h,d);else if(ve(t,"onPending"),h.pendingBranch=d,512&d.shapeFlag?h.pendingId=d.component.suspenseId:h.pendingId=me++,c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:e,pendingId:t}=h;e>0?setTimeout((()=>{h.pendingId===t&&h.fallback(f)}),e):0===e&&h.fallback(f)}}function be(e,t,n,r,s,o,a,c,u,l,h=!1){const{p:d,m:f,um:p,n:m,o:{parentNode:g,remove:v}}=l;let _;const w=Ce(e);w&&(null==t?void 0:t.pendingBranch)&&(_=t.pendingId,t.deps++);const b=e.props?(0,i.He)(e.props.timeout):void 0;const E=o,T={vnode:e,parent:t,parentComponent:n,namespace:a,container:r,hiddenContainer:s,deps:0,pendingId:me++,timeout:"number"===typeof b?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){const{vnode:r,activeBranch:i,pendingBranch:s,pendingId:a,effects:c,parentComponent:u,container:l}=T;let h=!1;T.isHydrating?T.isHydrating=!1:e||(h=i&&s.transition&&"out-in"===s.transition.mode,h&&(i.transition.afterLeave=()=>{a===T.pendingId&&(f(s,l,o===E?m(i):o,0),D(c))}),i&&(g(i.el)!==T.hiddenContainer&&(o=m(i)),p(i,u,T,!0)),h||f(s,l,o,0)),ke(T,s),T.pendingBranch=null,T.isInFallback=!1;let d=T.parent,y=!1;while(d){if(d.pendingBranch){d.effects.push(...c),y=!0;break}d=d.parent}y||h||D(c),T.effects=[],w&&t&&t.pendingBranch&&_===t.pendingId&&(t.deps--,0!==t.deps||n||t.resolve()),ve(r,"onResolve")},fallback(e){if(!T.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:r,container:i,namespace:s}=T;ve(t,"onFallback");const o=m(n),a=()=>{T.isInFallback&&(d(null,e,i,o,r,null,s,c,u),ke(T,e))},l=e.transition&&"out-in"===e.transition.mode;l&&(n.transition.afterLeave=a),T.isInFallback=!0,p(n,r,null,!0),l||a()},move(e,t,n){T.activeBranch&&f(T.activeBranch,e,t,n),T.container=e},next(){return T.activeBranch&&m(T.activeBranch)},registerDep(e,t){const n=!!T.pendingBranch;n&&T.deps++;const r=e.vnode.el;e.asyncDep.catch((t=>{y(t,e,0)})).then((i=>{if(e.isUnmounted||T.isUnmounted||T.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:s}=e;ii(e,i,!1),r&&(s.el=r);const o=!r&&e.subTree.el;t(e,s,g(r||e.subTree.el),r?null:m(e.subTree),T,a,u),o&&v(o),se(e,s.el),n&&0===--T.deps&&T.resolve()}))},unmount(e,t){T.isUnmounted=!0,T.activeBranch&&p(T.activeBranch,n,e,t),T.pendingBranch&&p(T.pendingBranch,n,e,t)}};return T}function Ee(e,t,n,r,i,s,o,a,c){const u=t.suspense=be(t,r,n,e.parentNode,document.createElement("div"),null,i,s,o,a,!0),l=c(e,u.pendingBranch=t.ssContent,n,u,s,o);return 0===u.deps&&u.resolve(!1,!0),l}function Te(e){const{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=Se(r?n.default:n),e.ssFallback=r?Se(n.fallback):xr(dr)}function Se(e){let t;if((0,i.mf)(e)){const n=_r&&e._c;n&&(e._d=!1,gr()),e=e(),n&&(e._d=!0,t=mr,yr())}if((0,i.kJ)(e)){const t=ee(e);0,e=t}return e=Ur(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function Ie(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):D(e)}function ke(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let i=t.el;while(!i&&t.component)t=t.component.subTree,i=t.el;n.el=i,r&&r.subTree===n&&(r.vnode.el=i,se(r,i))}function Ce(e){var t;return null!=(null==(t=e.props)?void 0:t.suspensible)&&!1!==e.props.suspensible}const Ae=Symbol.for("v-scx"),Re=()=>{{const e=vn(Ae);return e}};function Ne(e,t){return Le(e,null,t)}function xe(e,t){return Le(e,null,{flush:"post"})}function Oe(e,t){return Le(e,null,{flush:"sync"})}const De={};function Pe(e,t,n){return Le(e,t,n)}function Le(e,t,{immediate:n,deep:s,flush:o,once:a,onTrack:c,onTrigger:u}=i.kT){if(t&&a){const e=t;t=(...t)=>{e(...t),I()}}const l=Kr,h=e=>!0===s?e:Ue(e,!1===s?1:void 0);let d,f,p=!1,y=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>h(e),p=!0):(0,i.kJ)(e)?(y=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?h(e):(0,i.mf)(e)?m(e,l,2):void 0))):d=(0,i.mf)(e)?t?()=>m(e,l,2):()=>(f&&f(),g(e,l,3,[_])):i.dG,t&&s){const e=d;d=()=>Ue(e())}let v,_=e=>{f=T.onStop=()=>{m(e,l,4),f=T.onStop=void 0}};if(ti){if(_=i.dG,t?n&&g(t,l,3,[d(),y?[]:void 0,_]):d(),"sync"!==o)return i.dG;{const e=Re();v=e.__watcherHandles||(e.__watcherHandles=[])}}let w=y?new Array(e.length).fill(De):De;const b=()=>{if(T.active&&T.dirty)if(t){const e=T.run();(s||p||(y?e.some(((e,t)=>(0,i.aU)(e,w[t]))):(0,i.aU)(e,w)))&&(f&&f(),g(t,l,3,[e,w===De?void 0:y&&w[0]===De?[]:w,_]),w=e)}else T.run()};let E;b.allowRecurse=!!t,"sync"===o?E=b:"post"===o?E=()=>Hn(b,l&&l.suspense):(b.pre=!0,l&&(b.id=l.uid),E=()=>N(b));const T=new r.qq(d,i.dG,E),S=(0,r.nZ)(),I=()=>{T.stop(),S&&(0,i.Od)(S.effects,T)};return t?n?b():w=T.run():"post"===o?Hn(T.run.bind(T),l&&l.suspense):T.run(),v&&v.push(I),I}function Me(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?Fe(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=Yr(this),c=Le(s,o.bind(r),n);return a(),c}function Fe(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Ue(e,t,n=0,s){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t&&t>0){if(n>=t)return e;n++}if(s=s||new Set,s.has(e))return e;if(s.add(e),(0,r.dq)(e))Ue(e.value,t,n,s);else if((0,i.kJ)(e))for(let r=0;r<e.length;r++)Ue(e[r],t,n,s);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Ue(e,t,n,s)}));else if((0,i.PO)(e))for(const r in e)Ue(e[r],t,n,s);return e}function Ve(e,t){if(null===K)return e;const n=li(K)||K.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,o,a,c=i.kT]=t[s];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Ue(o),r.push({dir:e,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function je(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let u=c.dir[i];u&&((0,r.Jd)(),g(u,n,8,[e.el,c,e,t]),(0,r.lk)())}}const Be=Symbol("_leaveCb"),$e=Symbol("_enterCb");function qe(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yt((()=>{e.isMounted=!0})),wt((()=>{e.isUnmounting=!0})),e}const He=[Function,Array],ze={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},Ke={name:"BaseTransition",props:ze,setup(e,{slots:t}){const n=Gr(),i=qe();let s;return()=>{const o=t.default&&Ze(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==dr){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return Ye(a);const l=Xe(a);if(!l)return Ye(a);const h=Je(l,c,i,n);Qe(l,h);const d=n.subTree,f=d&&Xe(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==dr&&(!Ir(l,f)||p)){const e=Je(f,c,i,n);if(Qe(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},Ye(a);"in-out"===u&&l.type!==dr&&(e.delayLeave=(e,t,n)=>{const r=We(i,f);r[String(f.key)]=f,e[Be]=()=>{t(),e[Be]=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},Ge=Ke;function We(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Je(e,t,n,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:_,onAppearCancelled:w}=t,b=String(e.key),E=We(n,e),T=(e,t)=>{e&&g(e,r,9,t)},S=(e,t)=>{const n=t[1];T(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:o,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=y||c}t[Be]&&t[Be](!0);const i=E[b];i&&Ir(e,i)&&i.el[Be]&&i.el[Be](),T(r,[t])},enter(e){let t=u,r=l,i=h;if(!n.isMounted){if(!s)return;t=v||u,r=_||l,i=w||h}let o=!1;const a=e[$e]=t=>{o||(o=!0,T(t?i:r,[e]),I.delayedLeave&&I.delayedLeave(),e[$e]=void 0)};t?S(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[$e]&&t[$e](!0),n.isUnmounting)return r();T(d,[t]);let s=!1;const o=t[Be]=n=>{s||(s=!0,r(),T(n?m:p,[t]),t[Be]=void 0,E[i]===e&&delete E[i])};E[i]=e,f?S(f,[t,o]):o()},clone(e){return Je(e,t,n,r)}};return I}function Ye(e){if(it(e))return e=Pr(e),e.children=null,e}function Xe(e){return it(e)?e.children?e.children[0]:void 0:e}function Qe(e,t){6&e.shapeFlag&&e.component?Qe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ze(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===lr?(128&o.patchFlag&&i++,r=r.concat(Ze(o.children,t,a))):(t||o.type!==dr)&&r.push(null!=a?Pr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function et(e,t){return(0,i.mf)(e)?(()=>(0,i.l7)({name:e.name},t,{setup:e}))():e}const tt=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;function nt(e){(0,i.mf)(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:o=200,timeout:a,suspensible:c=!0,onError:u}=e;let l,h=null,d=0;const f=()=>(d++,h=null,p()),p=()=>{let e;return h||(e=h=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),u)return new Promise(((t,n)=>{const r=()=>t(f()),i=()=>n(e);u(e,r,i,d+1)}));throw e})).then((t=>e!==h&&h?h:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),l=t,t))))};return et({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return l},setup(){const e=Kr;if(l)return()=>rt(l,e);const t=t=>{h=null,y(t,e,13,!s)};if(c&&e.suspense||ti)return p().then((t=>()=>rt(t,e))).catch((e=>(t(e),()=>s?xr(s,{error:e}):null)));const i=(0,r.iH)(!1),u=(0,r.iH)(),d=(0,r.iH)(!!o);return o&&setTimeout((()=>{d.value=!1}),o),null!=a&&setTimeout((()=>{if(!i.value&&!u.value){const e=new Error(`Async component timed out after ${a}ms.`);t(e),u.value=e}}),a),p().then((()=>{i.value=!0,e.parent&&it(e.parent.vnode)&&(e.parent.effect.dirty=!0,N(e.parent.update))})).catch((e=>{t(e),u.value=e})),()=>i.value&&l?rt(l,e):u.value&&s?xr(s,{error:u.value}):n&&!d.value?xr(n):void 0}})}function rt(e,t){const{ref:n,props:r,children:i,ce:s}=t.vnode,o=xr(e,r,i);return o.ref=n,o.ce=s,delete t.vnode.ce,o}const it=e=>e.type.__isKeepAlive,st={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Gr(),r=n.ctx;if(!r.renderer)return()=>{const e=t.default&&t.default();return e&&1===e.length?e[0]:e};const s=new Map,o=new Set;let a=null;const c=n.suspense,{renderer:{p:u,m:l,um:h,o:{createElement:d}}}=r,f=d("div");function p(e){dt(e),h(e,n,c,!0)}function m(e){s.forEach(((t,n)=>{const r=fi(t.type);!r||e&&e(r)||g(n)}))}function g(e){const t=s.get(e);a&&Ir(t,a)?a&&dt(a):p(t),s.delete(e),o.delete(e)}r.activate=(e,t,n,r,s)=>{const o=e.component;l(e,t,n,0,c),u(o.vnode,e,t,n,o,c,r,e.slotScopeIds,s),Hn((()=>{o.isDeactivated=!1,o.a&&(0,i.ir)(o.a);const t=e.props&&e.props.onVnodeMounted;t&&$r(t,o.parent,e)}),c)},r.deactivate=e=>{const t=e.component;l(e,f,null,1,c),Hn((()=>{t.da&&(0,i.ir)(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&$r(n,t.parent,e),t.isDeactivated=!0}),c)},Pe((()=>[e.include,e.exclude]),(([e,t])=>{e&&m((t=>at(e,t))),t&&m((e=>!at(t,e)))}),{flush:"post",deep:!0});let y=null;const v=()=>{null!=y&&s.set(y,ft(n.subTree))};return yt(v),_t(v),wt((()=>{s.forEach((e=>{const{subTree:t,suspense:r}=n,i=ft(t);if(e.type!==i.type||e.key!==i.key)p(e);else{dt(i);const e=i.component.da;e&&Hn(e,r)}}))})),()=>{if(y=null,!t.default)return null;const n=t.default(),r=n[0];if(n.length>1)return a=null,n;if(!Sr(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=ft(r);const c=i.type,u=fi(tt(i)?i.type.__asyncResolved||{}:c),{include:l,exclude:h,max:d}=e;if(l&&(!u||!at(l,u))||h&&u&&at(h,u))return a=i,r;const f=null==i.key?c:i.key,p=s.get(f);return i.el&&(i=Pr(i),128&r.shapeFlag&&(r.ssContent=i)),y=f,p?(i.el=p.el,i.component=p.component,i.transition&&Qe(i,i.transition),i.shapeFlag|=512,o.delete(f),o.add(f)):(o.add(f),d&&o.size>parseInt(d,10)&&g(o.values().next().value)),i.shapeFlag|=256,a=i,pe(r.type)?r:i}}},ot=st;function at(e,t){return(0,i.kJ)(e)?e.some((e=>at(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function ct(e,t){lt(e,"a",t)}function ut(e,t){lt(e,"da",t)}function lt(e,t,n=Kr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(pt(t,r,n),n){let e=n.parent;while(e&&e.parent)it(e.parent.vnode)&&ht(r,t,n,e),e=e.parent}}function ht(e,t,n,r){const s=pt(t,e,r,!0);bt((()=>{(0,i.Od)(r[t],s)}),n)}function dt(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ft(e){return 128&e.shapeFlag?e.ssContent:e}function pt(e,t,n=Kr,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)();const s=Yr(n),o=g(t,n,e,i);return s(),(0,r.lk)(),o});return i?s.unshift(o):s.push(o),o}}const mt=e=>(t,n=Kr)=>(!ti||"sp"===e)&&pt(e,((...e)=>t(...e)),n),gt=mt("bm"),yt=mt("m"),vt=mt("bu"),_t=mt("u"),wt=mt("bum"),bt=mt("um"),Et=mt("sp"),Tt=mt("rtg"),St=mt("rtc");function It(e,t=Kr){pt("ec",e,t)}function kt(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function Ct(e,t){for(let n=0;n<t.length;n++){const r=t[n];if((0,i.kJ)(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{const t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function At(e,t,n={},r,i){if(K.isCE||K.parent&&tt(K.parent)&&K.parent.isCE)return"default"!==t&&(n.name=t),xr("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),gr();const o=s&&Rt(s(n)),a=Tr(lr,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Rt(e){return e.some((e=>!Sr(e)||e.type!==dr&&!(e.type===lr&&!Rt(e.children))))?e:null}function Nt(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:(0,i.hR)(r)]=e[r];return n}const xt=e=>e?Qr(e)?li(e)||e.proxy:xt(e.parent):null,Ot=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xt(e.parent),$root:e=>xt(e.root),$emit:e=>e.emit,$options:e=>nn(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,N(e.update)}),$nextTick:e=>e.n||(e.n=A.bind(e.proxy)),$watch:e=>Me.bind(e)}),Dt=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Pt={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Dt(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Xt&&(c[t]=0)}}const d=Ot[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Dt(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Dt(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Ot,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const Lt=(0,i.l7)({},Pt,{get(e,t){if(t!==Symbol.unscopables)return Pt.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!(0,i.yl)(t);return n}});function Mt(){return null}function Ft(){return null}function Ut(e){0}function Vt(e){0}function jt(){return null}function Bt(){0}function $t(e,t){return null}function qt(){return zt().slots}function Ht(){return zt().attrs}function zt(){const e=Gr();return e.setupContext||(e.setupContext=ui(e))}function Kt(e){return(0,i.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}function Gt(e,t){const n=Kt(e);for(const r in t){if(r.startsWith("__skip"))continue;let e=n[r];e?(0,i.kJ)(e)||(0,i.mf)(e)?e=n[r]={type:e,default:t[r]}:e.default=t[r]:null===e&&(e=n[r]={default:t[r]}),e&&t[`__skip_${r}`]&&(e.skipFactory=!0)}return n}function Wt(e,t){return e&&t?(0,i.kJ)(e)&&(0,i.kJ)(t)?e.concat(t):(0,i.l7)({},Kt(e),Kt(t)):e||t}function Jt(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function Yt(e){const t=Gr();let n=e();return Xr(),(0,i.tI)(n)&&(n=n.catch((e=>{throw Yr(t),e}))),[n,()=>Yr(t)]}let Xt=!0;function Qt(e){const t=nn(e),n=e.proxy,s=e.ctx;Xt=!1,t.beforeCreate&&en(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:S,renderTriggered:I,errorCaptured:k,serverPrefetch:C,expose:A,inheritAttrs:R,components:N,directives:x,filters:O}=t,D=null;if(h&&Zt(h,s,D),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Xt=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=gi({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)tn(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{yn(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&en(d,e,"c"),P(gt,f),P(yt,p),P(vt,m),P(_t,g),P(ct,y),P(ut,v),P(It,k),P(St,S),P(Tt,I),P(wt,w),P(bt,E),P(Et,C),(0,i.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=R&&(e.inheritAttrs=R),N&&(e.components=N),x&&(e.directives=x)}function Zt(e,t,n=i.dG){(0,i.kJ)(e)&&(e=cn(e));for(const s in e){const n=e[s];let o;o=(0,i.Kn)(n)?"default"in n?vn(n.from||s,n.default,!0):vn(n.from||s):vn(n),(0,r.dq)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function en(e,t,n){g((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function tn(e,t,n,r){const s=r.includes(".")?Fe(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Pe(s,n)}else if((0,i.mf)(e))Pe(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>tn(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Pe(s,r,e)}else 0}function nn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>rn(u,e,a,!0))),rn(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function rn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&rn(e,s,n,!0),i&&i.forEach((t=>rn(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=sn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const sn={data:on,props:hn,emits:hn,methods:ln,computed:ln,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:ln,directives:ln,watch:dn,provide:on,inject:an};function on(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function an(e,t){return ln(cn(e),cn(t))}function cn(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function un(e,t){return e?[...new Set([].concat(e,t))]:t}function ln(e,t){return e?(0,i.l7)(Object.create(null),e,t):t}function hn(e,t){return e?(0,i.kJ)(e)&&(0,i.kJ)(t)?[...new Set([...e,...t])]:(0,i.l7)(Object.create(null),Kt(e),Kt(null!=t?t:{})):t}function dn(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=un(e[r],t[r]);return n}function fn(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pn=0;function mn(e,t){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=fn(),o=new WeakSet;let a=!1;const c=s.app={_uid:pn++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Ei,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=xr(n,r);return l.appContext=s,!0===u?u="svg":!1===u&&(u=void 0),o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,li(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){gn=c;try{return e()}finally{gn=null}}};return c}}let gn=null;function yn(e,t){if(Kr){let n=Kr.provides;const r=Kr.parent&&Kr.parent.provides;r===n&&(n=Kr.provides=Object.create(r)),n[e]=t}else 0}function vn(e,t,n=!1){const r=Kr||K;if(r||gn){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:gn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r&&r.proxy):t}else 0}function _n(){return!!(Kr||K||gn)}function wn(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Cr,1),e.propsDefaults=Object.create(null),En(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function bn(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;En(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Tn(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(z(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=Tn(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function En(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:z(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Tn(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function Tn(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Yr(s);r=i[n]=e.call(null,t),o()}}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function Sn(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=Sn(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);In(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(In(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const e=An(Boolean,r.type),n=An(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function In(e){return"$"!==e[0]}function kn(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function Cn(e,t){return kn(e)===kn(t)}function An(e,t){return(0,i.kJ)(t)?t.findIndex((t=>Cn(t,e))):(0,i.mf)(t)&&Cn(t,e)?0:-1}const Rn=e=>"_"===e[0]||"$stable"===e,Nn=e=>(0,i.kJ)(e)?e.map(Ur):[Ur(e)],xn=(e,t,n)=>{if(t._n)return t;const r=Q(((...e)=>Nn(t(...e))),n);return r._c=!1,r},On=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Rn(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=xn(s,n,r);else if(null!=n){0;const e=Nn(n);t[s]=()=>e}}},Dn=(e,t)=>{const n=Nn(t);e.slots.default=()=>n},Pn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):On(t,e.slots={})}else e.slots={},t&&Dn(e,t);(0,i.Nj)(e.slots,Cr,1)},Ln=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,On(t,s)),a=t}else t&&(Dn(e,t),a={default:1});if(o)for(const i in s)Rn(i)||null!=a[i]||delete s[i]};function Mn(e,t,n,s,o=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Mn(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,o)));if(tt(s)&&!o)return;const a=4&s.shapeFlag?li(s.component)||s.component.proxy:s.el,c=o?null:a,{i:u,r:l}=e;const h=t&&t.r,d=u.refs===i.kT?u.refs={}:u.refs,f=u.setupState;if(null!=h&&h!==l&&((0,i.HD)(h)?(d[h]=null,(0,i.RI)(f,h)&&(f[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.mf)(l))m(l,u,12,[c,d]);else{const t=(0,i.HD)(l),s=(0,r.dq)(l),u=e.f;if(t||s){const r=()=>{if(u){const n=t?(0,i.RI)(f,l)?f[l]:d[l]:l.value;o?(0,i.kJ)(n)&&(0,i.Od)(n,a):(0,i.kJ)(n)?n.includes(a)||n.push(a):t?(d[l]=[a],(0,i.RI)(f,l)&&(f[l]=d[l])):(l.value=[a],e.k&&(d[e.k]=l.value))}else t?(d[l]=c,(0,i.RI)(f,l)&&(f[l]=c)):s&&(l.value=c,e.k&&(d[e.k]=c))};o||u?r():(r.id=-1,Hn(r,n))}else 0}}let Fn=!1;const Un=e=>e.namespaceURI.includes("svg")&&"foreignObject"!==e.tagName,Vn=e=>e.namespaceURI.includes("MathML"),jn=e=>Un(e)?"svg":Vn(e)?"mathml":void 0,Bn=e=>8===e.nodeType;function $n(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:a,parentNode:c,remove:u,insert:l,createComment:h}}=e,d=(e,t)=>{if(!t.hasChildNodes())return __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&o("Attempting to hydrate existing markup but container is empty. Performing full mount instead."),n(null,e,t),L(),void(t._vnode=e);Fn=!1,f(t.firstChild,e,null,null,null),L(),t._vnode=e,Fn&&console.error("Hydration completed but contains mismatches.")},f=(n,r,i,u,h,d=!1)=>{const b=Bn(n)&&"["===n.data,E=()=>y(n,r,i,u,h,b),{type:T,ref:S,shapeFlag:I,patchFlag:k}=r;let C=n.nodeType;r.el=n,-2===k&&(d=!1,r.dynamicChildren=null);let A=null;switch(T){case hr:3!==C?""===r.children?(l(r.el=s(""),c(n),n),A=n):A=E():(n.data!==r.children&&(Fn=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&o("Hydration text mismatch in",n.parentNode,`\n  - rendered on server: ${JSON.stringify(n.data)}\n  - expected on client: ${JSON.stringify(r.children)}`),n.data=r.children),A=a(n));break;case dr:w(n)?(A=a(n),_(r.el=n.content.firstChild,n,i)):A=8!==C||b?E():a(n);break;case fr:if(b&&(n=a(n),C=n.nodeType),1===C||3===C){A=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=1===A.nodeType?A.outerHTML:A.data),t===r.staticCount-1&&(r.anchor=A),A=a(A);return b?a(A):A}E();break;case lr:A=b?g(n,r,i,u,h,d):E();break;default:if(1&I)A=1===C&&r.type.toLowerCase()===n.tagName.toLowerCase()||w(n)?p(n,r,i,u,h,d):E();else if(6&I){r.slotScopeIds=h;const e=c(n);if(A=b?v(n):Bn(n)&&"teleport start"===n.data?v(n,n.data,"teleport end"):a(n),t(r,e,null,i,u,jn(e),d),tt(r)){let t;b?(t=xr(lr),t.anchor=A?A.previousSibling:e.lastChild):t=3===n.nodeType?Lr(""):xr("div"),t.el=n,r.component.subTree=t}}else 64&I?A=8!==C?E():r.type.hydrate(n,r,i,u,h,d,e,m):128&I?A=r.type.hydrate(n,r,i,u,jn(c(n)),h,d,e,f):__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&o("Invalid HostVNode type:",T,`(${typeof T})`)}return null!=S&&Mn(S,null,u,r),A},p=(e,t,n,s,a,c)=>{c=c||!!t.dynamicChildren;const{type:l,props:h,patchFlag:d,shapeFlag:f,dirs:p,transition:g}=t,y="input"===l||"option"===l;if(y||-1!==d){p&&je(t,null,n,"created");let l,v=!1;if(w(e)){v=Yn(s,g)&&n&&n.vnode.props&&n.vnode.props.appear;const r=e.content.firstChild;v&&g.beforeEnter(r),_(r,e,n),t.el=e=r}if(16&f&&(!h||!h.innerHTML&&!h.textContent)){let r=m(e.firstChild,t,e,n,s,a,c),i=!1;while(r){Fn=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&!i&&(o("Hydration children mismatch on",e,"\nServer rendered element contains more child nodes than client vdom."),i=!0);const t=r;r=r.nextSibling,u(t)}}else 8&f&&e.textContent!==t.children&&(Fn=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&o("Hydration text content mismatch on",e,`\n  - rendered on server: ${e.textContent}\n  - expected on client: ${t.children}`),e.textContent=t.children);if(h)if(y||!c||48&d)for(const t in h)(y&&(t.endsWith("value")||"indeterminate"===t)||(0,i.F7)(t)&&!(0,i.Gg)(t)||"."===t[0])&&r(e,t,null,h[t],void 0,void 0,n);else h.onClick&&r(e,"onClick",null,h.onClick,void 0,void 0,n);(l=h&&h.onVnodeBeforeMount)&&$r(l,n,t),p&&je(t,null,n,"beforeMount"),((l=h&&h.onVnodeMounted)||p||v)&&Ie((()=>{l&&$r(l,n,t),v&&g.enter(e),p&&je(t,null,n,"mounted")}),s)}return e.nextSibling},m=(e,t,r,i,s,a,c)=>{c=c||!!t.dynamicChildren;const u=t.children,l=u.length;let h=!1;for(let d=0;d<l;d++){const t=c?u[d]:u[d]=Ur(u[d]);if(e)e=f(e,t,i,s,a,c);else{if(t.type===hr&&!t.children)continue;Fn=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&!h&&(o("Hydration children mismatch on",r,"\nServer rendered element contains fewer child nodes than client vdom."),h=!0),n(null,t,r,null,i,s,jn(r),a)}}return e},g=(e,t,n,r,i,s)=>{const{slotScopeIds:o}=t;o&&(i=i?i.concat(o):o);const u=c(e),d=m(a(e),t,u,n,r,i,s);return d&&Bn(d)&&"]"===d.data?a(t.anchor=d):(Fn=!0,l(t.anchor=h("]"),u,d),d)},y=(e,t,r,i,s,l)=>{if(Fn=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&o("Hydration node mismatch:\n- rendered on server:",e,3===e.nodeType?"(text)":Bn(e)&&"["===e.data?"(start of fragment)":"","\n- expected on client:",t.type),t.el=null,l){const t=v(e);while(1){const n=a(e);if(!n||n===t)break;u(n)}}const h=a(e),d=c(e);return u(e),n(null,t,d,h,r,i,jn(d),s),h},v=(e,t="[",n="]")=>{let r=0;while(e)if(e=a(e),e&&Bn(e)&&(e.data===t&&r++,e.data===n)){if(0===r)return a(e);r--}return e},_=(e,t,n)=>{const r=t.parentNode;r&&r.replaceChild(e,t);let i=n;while(i)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},w=e=>1===e.nodeType&&"template"===e.tagName.toLowerCase();return[d,f]}function qn(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.E9)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Hn=Ie;function zn(e){return Gn(e)}function Kn(e){return Gn(e,$n)}function Gn(e,t){qn();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ir(e,t)&&(r=J(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case hr:v(e,t,n,r);break;case dr:_(e,t,n,r);break;case fr:null==e&&w(t,n,r,o);break;case lr:x(e,t,n,r,i,s,o,a,c);break;default:1&h?T(e,t,n,r,i,s,o,a,c):6&h?D(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,Q)}null!=l&&i&&Mn(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},_=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},b=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},T=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?S(t,n,r,i,s,o,a,c):C(e,t,i,s,o,a,c)},S=(e,t,n,r,o,u,l,h)=>{let f,p;const{props:m,shapeFlag:g,transition:y,dirs:v}=e;if(f=e.el=c(e.type,u,m&&m.is,m),8&g?d(f,e.children):16&g&&k(e.children,f,null,r,o,Wn(e,u),l,h),v&&je(e,null,r,"created"),I(f,e,e.scopeId,l,r),m){for(const t in m)"value"===t||(0,i.Gg)(t)||a(f,t,null,m[t],u,e.children,r,o,W);"value"in m&&a(f,"value",null,m.value,u),(p=m.onVnodeBeforeMount)&&$r(p,r,e)}v&&je(e,null,r,"beforeMount");const _=Yn(o,y);_&&y.beforeEnter(f),s(f,t,n),((p=m&&m.onVnodeMounted)||_||v)&&Hn((()=>{p&&$r(p,r,e),_&&y.enter(f),v&&je(e,null,r,"mounted")}),o)},I=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;I(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},k=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Vr(e[u]):Ur(e[u]);y(null,c,t,n,r,i,s,o,a)}},C=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;if(n&&Jn(n,!1),(g=m.onVnodeBeforeUpdate)&&$r(g,n,t,e),f&&je(t,e,n,"beforeUpdate"),n&&Jn(n,!0),h?A(e.dynamicChildren,h,u,n,r,Wn(t,s),o):c||j(e,t,u,null,n,r,Wn(t,s),o,!1),l>0){if(16&l)R(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,W)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||R(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&Hn((()=>{g&&$r(g,n,t,e),f&&je(t,e,n,"updated")}),r)},A=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===lr||!Ir(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},R=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,W);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,W)}"value"in r&&a(e,"value",n.value,r.value,c)}},x=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),k(t.children||[],n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Xn(e,t,!0)):j(e,t,n,d,i,o,a,c,l)},D=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,s,o,c):F(e,t,c)},M=(e,t,n,r,i,s,o)=>{const a=e.component=zr(e,r,i);if(it(e)&&(a.ctx.renderer=Q),ni(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=xr(dr);_(null,e,t,n)}}else U(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(re(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,O(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:l}=e;{const n=Zn(e);if(n)return t&&(t.el=l.el,V(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let h,d=t;0,Jn(e,!1),t?(t.el=l.el,V(e,t,c)):t=l,n&&(0,i.ir)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&$r(h,s,t,l),Jn(e,!0);const p=Z(e);0;const m=e.subTree;e.subTree=p,y(m,p,f(m.el),J(m),e,o,a),t.el=p.el,null===d&&se(e,p.el),r&&Hn(r,o),(h=t.props&&t.props.onVnodeUpdated)&&Hn((()=>$r(h,s,t,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=tt(t);if(Jn(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&$r(r,d,t),Jn(e,!0),c&&te){const n=()=>{e.subTree=Z(e),te(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=Z(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&Hn(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Hn((()=>$r(r,d,e)),o)}(256&t.shapeFlag||d&&tt(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Hn(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,i.dG,(()=>N(h)),e.scope),h=e.update=()=>{l.dirty&&l.run()};h.id=e.uid,Jn(e,!0),h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,bn(e,t.props,i,n),Ln(e,t.children,n),(0,r.Jd)(),P(e),(0,r.lk)()},j=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void $(u,h,n,r,i,s,o,a,c);if(256&f)return void B(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&W(u,i,s),h!==u&&d(n,h)):16&l?16&p?$(u,h,n,r,i,s,o,a,c):W(u,i,s,!0):(8&l&&d(n,""),16&p&&k(h,n,r,i,s,o,a,c))},B=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Vr(t[f]):Ur(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?W(e,s,o,!0,!1,d):k(t,n,r,s,o,a,c,u,d)},$=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?Vr(t[l]):Ur(t[l]);if(!Ir(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?Vr(t[f]):Ur(t[f]);if(!Ir(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?Vr(t[l]):Ur(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)H(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?Vr(t[l]):Ur(t[l]);null!=e.key&&g.set(e.key,l)}let v,_=0;const w=f-m+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(_>=w){H(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===T[v-m]&&Ir(r,t[v])){i=v;break}void 0===i?H(r,s,o,!0):(T[i-m]=l+1,i>=E?E=i:b=!0,y(r,t[i],n,null,s,o,a,c,u),_++)}const S=b?Qn(T):i.Z6;for(v=S.length-1,l=w-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):b&&(v<0||l!==S[v]?q(i,n,d,2):v--)}}},q=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,Q);if(a===lr){s(o,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===fr)return void b(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Hn((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&Mn(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!tt(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&$r(m,t,e),6&l)G(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&je(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,Q,r):u&&(s!==lr||h>0&&64&h)?W(u,t,n,!1,!0):(s===lr&&384&h||!i&&16&l)&&W(c,t,n),r&&z(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Hn((()=>{m&&$r(m,t,e),f&&je(e,null,t,"unmounted")}),n)},z=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===lr)return void K(n,r);if(t===fr)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},K=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},G=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&Hn(c,t),Hn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},W=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el);let Y=!1;const X=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Y||(Y=!0,P(),L(),Y=!1),t._vnode=e},Q={p:y,um:H,m:q,r:z,mt:M,mc:k,pc:j,pbc:A,n:J,o:e};let ee,te;return t&&([ee,te]=t(Q)),{render:X,hydrate:ee,createApp:mn(X,ee)}}function Wn({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Jn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Yn(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Xn(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Vr(s[i]),t.el=e.el),n||Xn(e,t)),t.type===hr&&(t.el=e.el)}}function Qn(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function Zn(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zn(t)}const er=e=>e.__isTeleport,tr=e=>e&&(e.disabled||""===e.disabled),nr=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,rr=e=>"function"===typeof MathMLElement&&e instanceof MathMLElement,ir=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},sr={name:"Teleport",__isTeleport:!0,process(e,t,n,r,i,s,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=u,y=tr(t.props);let{shapeFlag:v,children:_,dynamicChildren:w}=t;if(null==e){const e=t.el=m(""),u=t.anchor=m("");f(e,n,r),f(u,n,r);const h=t.target=ir(t.props,p),d=t.targetAnchor=m("");h&&(f(d,h),"svg"===o||nr(h)?o="svg":("mathml"===o||rr(h))&&(o="mathml"));const g=(e,t)=>{16&v&&l(_,e,t,i,s,o,a,c)};y?g(n,u):h&&g(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,l=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=tr(e.props),g=m?n:l,v=m?r:f;if("svg"===o||nr(l)?o="svg":("mathml"===o||rr(l))&&(o="mathml"),w?(d(e.dynamicChildren,w,g,i,s,o,a),Xn(e,t,!0)):c||h(e,t,g,v,i,s,o,a,!1),y)m?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):or(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=ir(t.props,p);e&&or(t,e,null,u,0)}else m&&or(t,l,f,u,1)}ur(t)},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=e;if(h&&s(l),o&&s(u),16&a){const e=o||!tr(d);for(let r=0;r<c.length;r++){const s=c[r];i(s,t,n,e,!!s.dynamicChildren)}}},move:or,hydrate:ar};function or(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=e,h=2===s;if(h&&r(o,t,n),(!h||tr(l))&&16&c)for(let d=0;d<u.length;d++)i(u[d],t,n,2);h&&r(a,t,n)}function ar(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=t.target=ir(t.props,c);if(l){const c=l._lpa||l.firstChild;if(16&t.shapeFlag)if(tr(t.props))t.anchor=u(o(e),t,a(e),n,r,i,s),t.targetAnchor=c;else{t.anchor=o(e);let a=c;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,l._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(c,t,l,n,r,i,s)}ur(t)}return t.anchor&&o(t.anchor)}const cr=sr;function ur(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n&&n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const lr=Symbol.for("v-fgt"),hr=Symbol.for("v-txt"),dr=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),pr=[];let mr=null;function gr(e=!1){pr.push(mr=e?null:[])}function yr(){pr.pop(),mr=pr[pr.length-1]||null}let vr,_r=1;function wr(e){_r+=e}function br(e){return e.dynamicChildren=_r>0?mr||i.Z6:null,yr(),_r>0&&mr&&mr.push(e),e}function Er(e,t,n,r,i,s){return br(Nr(e,t,n,r,i,s,!0))}function Tr(e,t,n,r,i){return br(xr(e,t,n,r,i,!0))}function Sr(e){return!!e&&!0===e.__v_isVNode}function Ir(e,t){return e.type===t.type&&e.key===t.key}function kr(e){vr=e}const Cr="__vInternal",Ar=({key:e})=>null!=e?e:null,Rr=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:K,r:e,k:t,f:!!n}:e:null);function Nr(e,t=null,n=null,r=0,s=null,o=(e===lr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ar(t),ref:t&&Rr(t),scopeId:G,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:K};return c?(jr(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),_r>0&&!a&&mr&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&mr.push(u),u}const xr=Or;function Or(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==ue||(e=dr),Sr(e)){const r=Pr(e,t,!0);return n&&jr(r,n),_r>0&&!a&&mr&&(6&r.shapeFlag?mr[mr.indexOf(e)]=r:mr.push(r)),r.patchFlag|=-2,r}if(mi(e)&&(e=e.__vccOpts),t){t=Dr(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:pe(e)?128:er(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Nr(e,t,n,s,o,c,a,!0)}function Dr(e){return e?(0,r.X3)(e)||Cr in e?(0,i.l7)({},e):e:null}function Pr(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?Br(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ar(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Rr(t)):[s,Rr(t)]:Rr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==lr?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pr(e.ssContent),ssFallback:e.ssFallback&&Pr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function Lr(e=" ",t=0){return xr(hr,null,e,t)}function Mr(e,t){const n=xr(fr,null,e);return n.staticCount=t,n}function Fr(e="",t=!1){return t?(gr(),Tr(dr,null,e)):xr(dr,null,e)}function Ur(e){return null==e||"boolean"===typeof e?xr(dr):(0,i.kJ)(e)?xr(lr,null,e.slice()):"object"===typeof e?Vr(e):xr(hr,null,String(e))}function Vr(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Pr(e)}function jr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),jr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Cr in t?3===r&&K&&(1===K.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=K}}else(0,i.mf)(t)?(t={default:t,_ctx:K},n=32):(t=String(t),64&r?(n=16,t=[Lr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Br(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function $r(e,t,n,r=null){g(e,t,7,[n,r])}const qr=fn();let Hr=0;function zr(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||qr,a={uid:Hr++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sn(s,o),emitsOptions:H(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=q.bind(null,a),e.ce&&e.ce(a),a}let Kr=null;const Gr=()=>Kr||K;let Wr,Jr;{const e=(0,i.E9)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};Wr=t("__VUE_INSTANCE_SETTERS__",(e=>Kr=e)),Jr=t("__VUE_SSR_SETTERS__",(e=>ti=e))}const Yr=e=>{const t=Kr;return Wr(e),e.scope.on(),()=>{e.scope.off(),Wr(t)}},Xr=()=>{Kr&&Kr.scope.off(),Wr(null)};function Qr(e){return 4&e.vnode.shapeFlag}let Zr,ei,ti=!1;function ni(e,t=!1){t&&Jr(t);const{props:n,children:r}=e.vnode,i=Qr(e);wn(e,n,i,t),Pn(e,r);const s=i?ri(e,t):void 0;return t&&Jr(!1),s}function ri(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Pt));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?ui(e):null,o=Yr(e);(0,r.Jd)();const a=m(s,e,0,[e.props,n]);if((0,r.lk)(),o(),(0,i.tI)(a)){if(a.then(Xr,Xr),t)return a.then((n=>{ii(e,n,t)})).catch((t=>{y(t,e,0)}));e.asyncDep=a}else ii(e,a,t)}else ai(e,t)}function ii(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),ai(e,n)}function si(e){Zr=e,ei=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Lt))}}const oi=()=>!Zr;function ai(e,t,n){const s=e.type;if(!e.render){if(!t&&Zr&&!s.render){const t=s.template||nn(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Zr(t,c)}}e.render=s.render||i.dG,ei&&ei(e)}{const t=Yr(e);(0,r.Jd)();try{Qt(e)}finally{(0,r.lk)(),t()}}}function ci(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}}))}function ui(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return ci(e)},slots:e.slots,emit:e.emit,expose:t}}function li(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ot?Ot[n](e):void 0},has(e,t){return t in e||t in Ot}}))}const hi=/(?:^|[-_])(\w)/g,di=e=>e.replace(hi,(e=>e.toUpperCase())).replace(/[-_]/g,"");function fi(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function pi(e,t,n=!1){let r=fi(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?di(r):n?"App":"Anonymous"}function mi(e){return(0,i.mf)(e)&&"__vccOpts"in e}const gi=(e,t)=>(0,r.Fl)(e,t,ti);function yi(e,t,n=i.kT){const s=Gr();const o=(0,i._A)(t),a=(0,i.rs)(t),c=(0,r.ZM)(((r,c)=>{let u;return Oe((()=>{const n=e[t];(0,i.aU)(u,n)&&(u=n,c())})),{get(){return r(),n.get?n.get(u):u},set(e){const r=s.vnode.props;r&&(t in r||o in r||a in r)&&(`onUpdate:${t}`in r||`onUpdate:${o}`in r||`onUpdate:${a}`in r)||!(0,i.aU)(e,u)||(u=e,c()),s.emit(`update:${t}`,n.set?n.set(e):e)}}})),u="modelValue"===t?"modelModifiers":`${t}Modifiers`;return c[Symbol.iterator]=()=>{let t=0;return{next(){return t<2?{value:t++?e[u]||{}:c,done:!1}:{done:!0}}}},c}function vi(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Sr(t)?xr(e,null,[t]):xr(e,t):xr(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Sr(n)&&(n=[n]),xr(e,t,n))}function _i(){return void 0}function wi(e,t,n,r){const i=n[r];if(i&&bi(i,e))return i;const s=t();return s.memo=e.slice(),n[r]=s}function bi(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if((0,i.aU)(n[r],t[r]))return!1;return _r>0&&mr&&mr.push(e),!0}const Ei="3.4.15",Ti=i.dG,Si=p,Ii=V,ki=$,Ci={createComponentInstance:zr,setupComponent:ni,renderComponentRoot:Z,setCurrentRenderingInstance:W,isVNode:Sr,normalizeVNode:Ur},Ai=Ci,Ri=null,Ni=null,xi=null},9242:function(e,t,n){n.r(t),n.d(t,{BaseTransition:function(){return r.P$},BaseTransitionPropsValidators:function(){return r.nJ},Comment:function(){return r.sv},DeprecationTypes:function(){return r.RM},EffectScope:function(){return r.Bj},ErrorCodes:function(){return r.SM},ErrorTypeStrings:function(){return r.yg},Fragment:function(){return r.HY},KeepAlive:function(){return r.Ob},ReactiveEffect:function(){return r.qq},Static:function(){return r.qG},Suspense:function(){return r.n4},Teleport:function(){return r.lR},Text:function(){return r.xv},TrackOpTypes:function(){return r.ER},Transition:function(){return p},TransitionGroup:function(){return _e},TriggerOpTypes:function(){return r.PQ},VueElement:function(){return de},assertNumber:function(){return r.Wu},callWithAsyncErrorHandling:function(){return r.$d},callWithErrorHandling:function(){return r.KU},camelize:function(){return r._A},capitalize:function(){return r.kC},cloneVNode:function(){return r.Ho},compatUtils:function(){return r.ry},computed:function(){return r.Fl},createApp:function(){return Qe},createBlock:function(){return r.j4},createCommentVNode:function(){return r.kq},createElementBlock:function(){return r.iD},createElementVNode:function(){return r._},createHydrationRenderer:function(){return r.Eo},createPropsRestProxy:function(){return r.p1},createRenderer:function(){return r.Us},createSSRApp:function(){return Ze},createSlots:function(){return r.Nv},createStaticVNode:function(){return r.uE},createTextVNode:function(){return r.Uk},createVNode:function(){return r.Wm},customRef:function(){return r.ZM},defineAsyncComponent:function(){return r.RC},defineComponent:function(){return r.aZ},defineCustomElement:function(){return ue},defineEmits:function(){return r.Bz},defineExpose:function(){return r.WY},defineModel:function(){return r.Gn},defineOptions:function(){return r.Yu},defineProps:function(){return r.MW},defineSSRCustomElement:function(){return le},defineSlots:function(){return r.Wl},devtools:function(){return r.mW},effect:function(){return r.cE},effectScope:function(){return r.B},getCurrentInstance:function(){return r.FN},getCurrentScope:function(){return r.nZ},getTransitionRawChildren:function(){return r.Q6},guardReactiveProps:function(){return r.F4},h:function(){return r.h},handleError:function(){return r.S3},hasInjectionContext:function(){return r.EM},hydrate:function(){return Xe},initCustomFormatter:function(){return r.Mr},initDirectivesForSSR:function(){return rt},inject:function(){return r.f3},isMemoSame:function(){return r.nQ},isProxy:function(){return r.X3},isReactive:function(){return r.PG},isReadonly:function(){return r.$y},isRef:function(){return r.dq},isRuntimeOnly:function(){return r.of},isShallow:function(){return r.yT},isVNode:function(){return r.lA},markRaw:function(){return r.Xl},mergeDefaults:function(){return r.u_},mergeModels:function(){return r.Vf},mergeProps:function(){return r.dG},nextTick:function(){return r.Y3},normalizeClass:function(){return r.C_},normalizeProps:function(){return r.vs},normalizeStyle:function(){return r.j5},onActivated:function(){return r.dl},onBeforeMount:function(){return r.wF},onBeforeUnmount:function(){return r.Jd},onBeforeUpdate:function(){return r.Xn},onDeactivated:function(){return r.se},onErrorCaptured:function(){return r.d1},onMounted:function(){return r.bv},onRenderTracked:function(){return r.bT},onRenderTriggered:function(){return r.Yq},onScopeDispose:function(){return r.EB},onServerPrefetch:function(){return r.vl},onUnmounted:function(){return r.Ah},onUpdated:function(){return r.ic},openBlock:function(){return r.wg},popScopeId:function(){return r.Cn},provide:function(){return r.JJ},proxyRefs:function(){return r.WL},pushScopeId:function(){return r.dD},queuePostFlushCb:function(){return r.qb},reactive:function(){return r.qj},readonly:function(){return r.OT},ref:function(){return r.iH},registerRuntimeCompiler:function(){return r.Y1},render:function(){return Ye},renderList:function(){return r.Ko},renderSlot:function(){return r.WI},resolveComponent:function(){return r.up},resolveDirective:function(){return r.Q2},resolveDynamicComponent:function(){return r.LL},resolveFilter:function(){return r.eq},resolveTransitionHooks:function(){return r.U2},setBlockTracking:function(){return r.qZ},setDevtoolsHook:function(){return r.ec},setTransitionHooks:function(){return r.nK},shallowReactive:function(){return r.Um},shallowReadonly:function(){return r.YS},shallowRef:function(){return r.XI},ssrContextKey:function(){return r.Uc},ssrUtils:function(){return r.G},stop:function(){return r.sT},toDisplayString:function(){return r.zw},toHandlerKey:function(){return r.hR},toHandlers:function(){return r.mx},toRaw:function(){return r.IU},toRef:function(){return r.Vh},toRefs:function(){return r.BK},toValue:function(){return r.Tn},transformVNodeArgs:function(){return r.C3},triggerRef:function(){return r.oR},unref:function(){return r.SU},useAttrs:function(){return r.l1},useCssModule:function(){return fe},useCssVars:function(){return F},useModel:function(){return r.tT},useSSRContext:function(){return r.Zq},useSlots:function(){return r.Rr},useTransitionState:function(){return r.Y8},vModelCheckbox:function(){return Re},vModelDynamic:function(){return Me},vModelRadio:function(){return xe},vModelSelect:function(){return Oe},vModelText:function(){return Ae},vShow:function(){return D},version:function(){return r.i8},warn:function(){return r.ZK},watch:function(){return r.YP},watchEffect:function(){return r.m0},watchPostEffect:function(){return r.Rh},watchSyncEffect:function(){return r.yX},withAsyncContext:function(){return r.mv},withCtx:function(){return r.w5},withDefaults:function(){return r.b9},withDirectives:function(){return r.wy},withKeys:function(){return He},withMemo:function(){return r.MX},withModifiers:function(){return $e},withScopeId:function(){return r.HX}});n(560);var r=n(3396),i=n(7139),s=n(4870);
/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?c.createElementNS(o,e):"mathml"===t?c.createElementNS(a,e):c.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const i=u.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,r.h)(r.P$,_(e),t);p.displayName="Transition";const m={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g=p.props=(0,i.l7)({},r.nJ,m),y=(e,t=[])=>{(0,i.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},v=e=>!!e&&((0,i.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function _(e){const t={};for(const i in e)i in m||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=w(s),_=g&&g[0],b=g&&g[1],{onBeforeEnter:I,onEnter:C,onEnterCancelled:A,onLeave:R,onLeaveCancelled:x,onBeforeAppear:O=I,onAppear:D=C,onAppearCancelled:P=A}=t,L=(e,t,n)=>{T(e,t?h:c),T(e,t?l:a),n&&n()},M=(e,t)=>{e._isLeaving=!1,T(e,d),T(e,p),T(e,f),t&&t()},F=e=>(t,n)=>{const i=e?D:C,s=()=>L(t,e,n);y(i,[t,s]),S((()=>{T(t,e?u:o),E(t,e?h:c),v(i)||k(t,r,_,s)}))};return(0,i.l7)(t,{onBeforeEnter(e){y(I,[e]),E(e,o),E(e,a)},onBeforeAppear(e){y(O,[e]),E(e,u),E(e,l)},onEnter:F(!1),onAppear:F(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>M(e,t);E(e,d),N(),E(e,f),S((()=>{e._isLeaving&&(T(e,d),E(e,p),v(R)||k(e,r,b,n))})),y(R,[e,n])},onEnterCancelled(e){L(e,!1),y(A,[e])},onAppearCancelled(e){L(e,!0),y(P,[e])},onLeaveCancelled(e){M(e),y(x,[e])}})}function w(e){if(null==e)return null;if((0,i.Kn)(e))return[b(e.enter),b(e.leave)];{const t=b(e);return[t,t]}}function b(e){const t=(0,i.He)(e);return t}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function T(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[f];n&&(n.delete(t),n.size||(e[f]=void 0))}function S(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let I=0;function k(e,t,n,r){const i=e._endId=++I,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=C(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function C(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=A(i,s),a=r(`${d}Delay`),c=r(`${d}Duration`),u=A(a,c);let l=null,f=0,p=0;t===h?o>0&&(l=h,f=o,p=s.length):t===d?u>0&&(l=d,f=u,p=c.length):(f=Math.max(o,u),l=f>0?o>u?h:d:null,p=l?l===h?s.length:c.length:0);const m=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:f,propCount:p,hasTransform:m}}function A(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>R(t)+R(e[n]))))}function R(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function N(){return document.body.offsetHeight}function x(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const O=Symbol("_vod"),D={beforeMount(e,{value:t},{transition:n}){e[O]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):P(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),P(e,!0),r.enter(e)):r.leave(e,(()=>{P(e,!1)})):P(e,t))},beforeUnmount(e,{value:t}){P(e,t)}};function P(e,t){e.style.display=t?e[O]:"none"}function L(){D.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const M=Symbol("");function F(e){const t=(0,r.FN)();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>V(e,n)))},i=()=>{const r=e(t.proxy);U(t.subTree,r),n(r)};(0,r.Rh)(i),(0,r.bv)((()=>{const e=new MutationObserver(i);e.observe(t.subTree.el.parentNode,{childList:!0}),(0,r.Ah)((()=>e.disconnect()))}))}function U(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{U(n.activeBranch,t)}))}while(e.component)e=e.component.subTree;if(1&e.shapeFlag&&e.el)V(e.el,t);else if(e.type===r.HY)e.children.forEach((e=>U(e,t)));else if(e.type===r.qG){let{el:n,anchor:r}=e;while(n){if(V(n,t),n===r)break;n=n.nextSibling}}}function V(e,t){if(1===e.nodeType){const n=e.style;let r="";for(const e in t)n.setProperty(`--${e}`,t[e]),r+=`--${e}: ${t[e]};`;n[M]=r}}function j(e,t,n){const r=e.style,s=r.display,o=(0,i.HD)(n);if(n&&!o){if(t&&!(0,i.HD)(t))for(const e in t)null==n[e]&&$(r,e,"");for(const e in n)$(r,e,n[e])}else if(o){if(t!==n){const e=r[M];e&&(n+=";"+e),r.cssText=n}}else t&&e.removeAttribute("style");O in e&&(r.display=s)}const B=/\s*!important$/;function $(e,t,n){if((0,i.kJ)(n))n.forEach((n=>$(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=z(e,t);B.test(n)?e.setProperty((0,i.rs)(r),n.replace(B,""),"important"):e[r]=n}}const q=["Webkit","Moz","ms"],H={};function z(e,t){const n=H[t];if(n)return n;let r=(0,i._A)(t);if("filter"!==r&&r in e)return H[t]=r;r=(0,i.kC)(r);for(let i=0;i<q.length;i++){const n=q[i]+r;if(n in e)return H[t]=n}return t}const K="http://www.w3.org/1999/xlink";function G(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(K,t.slice(6,t.length)):e.setAttributeNS(K,t,n);else{const r=(0,i.Pq)(t);null==n||r&&!(0,i.yA)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function W(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){e._value=n;const r="OPTION"===c?e.getAttribute("value"):e.value,i=null==n?"":n;return r!==i&&(e.value=i),void(null==n&&e.removeAttribute(t))}let u=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function J(e,t,n,r){e.addEventListener(t,n,r)}function Y(e,t,n,r){e.removeEventListener(t,n,r)}const X=Symbol("_vei");function Q(e,t,n,r,i=null){const s=e[X]||(e[X]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=ee(t);if(r){const o=s[t]=ie(r,i);J(e,n,o,a)}else o&&(Y(e,n,o,a),s[t]=void 0)}}const Z=/(?:Once|Passive|Capture)$/;function ee(e){let t;if(Z.test(e)){let n;t={};while(n=e.match(Z))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.rs)(e.slice(2));return[n,t]}let te=0;const ne=Promise.resolve(),re=()=>te||(ne.then((()=>te=0)),te=Date.now());function ie(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.$d)(se(e,n.value),t,5,[e])};return n.value=e,n.attached=re(),n}function se(e,t){if((0,i.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const oe=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ae=(e,t,n,r,s,o,a,c,u)=>{const l="svg"===s;"class"===t?x(e,r,l):"style"===t?j(e,n,r):(0,i.F7)(t)?(0,i.tR)(t)||Q(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ce(e,t,r,l))?W(e,t,r,o,a,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),G(e,t,r,l))};function ce(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&oe(t)&&(0,i.mf)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!oe(t)||!(0,i.HD)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */function ue(e,t){const n=(0,r.aZ)(e);class i extends de{constructor(e){super(n,e,t)}}return i.def=n,i}
/*! #__NO_SIDE_EFFECTS__ */const le=e=>ue(e,Xe),he="undefined"!==typeof HTMLElement?HTMLElement:class{};class de extends he{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),(0,r.Y3)((()=>{this._connected||(Ye(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);this._ob=new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})),this._ob.observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:r}=e;let s;if(n&&!(0,i.kJ)(n))for(const o in n){const e=n[o];(e===Number||e&&e.type===Number)&&(o in this._props&&(this._props[o]=(0,i.He)(this._props[o])),(s||(s=Object.create(null)))[(0,i._A)(o)]=!0)}this._numberProps=s,t&&this._resolveProps(e),this._applyStyles(r),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=(0,i.kJ)(t)?t:Object.keys(t||{});for(const r of Object.keys(this))"_"!==r[0]&&n.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of n.map(i._A))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(e){this._setProp(r,e)}})}_setAttr(e){let t=this.getAttribute(e);const n=(0,i._A)(e);this._numberProps&&this._numberProps[n]&&(t=(0,i.He)(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,r=!0){t!==this._props[e]&&(this._props[e]=t,r&&this._instance&&this._update(),n&&(!0===t?this.setAttribute((0,i.rs)(e),""):"string"===typeof t||"number"===typeof t?this.setAttribute((0,i.rs)(e),t+""):t||this.removeAttribute((0,i.rs)(e))))}_update(){Ye(this._createVNode(),this.shadowRoot)}_createVNode(){const e=(0,r.Wm)(this._def,(0,i.l7)({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),(0,i.rs)(e)!==e&&t((0,i.rs)(e),n)};let n=this;while(n=n&&(n.parentNode||n.host))if(n instanceof de){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function fe(e="$style"){{const t=(0,r.FN)();if(!t)return i.kT;const n=t.type.__cssModules;if(!n)return i.kT;const s=n[e];return s||i.kT}}const pe=new WeakMap,me=new WeakMap,ge=Symbol("_moveCb"),ye=Symbol("_enterCb"),ve={name:"TransitionGroup",props:(0,i.l7)({},g,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!Te(o[0].el,n.vnode.el,t))return;o.forEach(we),o.forEach(be);const r=o.filter(Ee);N(),r.forEach((e=>{const n=e.el,r=n.style;E(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[ge]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[ge]=null,T(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),u=_(c);let l=c.tag||r.HY;o=a,a=t.default?(0,r.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.nK)(t,(0,r.U2)(t,u,i,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,r.nK)(t,(0,r.U2)(t,u,i,n)),pe.set(t,t.el.getBoundingClientRect())}return(0,r.Wm)(l,null,a)}}};ve.props;const _e=ve;function we(e){const t=e.el;t[ge]&&t[ge](),t[ye]&&t[ye]()}function be(e){me.set(e,e.el.getBoundingClientRect())}function Ee(e){const t=pe.get(e),n=me.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function Te(e,t,n){const r=e.cloneNode(),i=e[f];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=C(r);return s.removeChild(r),o}const Se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(t)?e=>(0,i.ir)(t,e):t};function Ie(e){e.target.composing=!0}function ke(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ce=Symbol("_assign"),Ae={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Ce]=Se(s);const o=r||s.props&&"number"===s.props.type;J(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.h5)(r)),e[Ce](r)})),n&&J(e,"change",(()=>{e.value=e.value.trim()})),t||(J(e,"compositionstart",Ie),J(e,"compositionend",ke),J(e,"change",ke))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e[Ce]=Se(o),e.composing)return;const a=s||"number"===e.type?(0,i.h5)(e.value):e.value,c=null==t?"":t;if(a!==c){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===c)return}e.value=c}}},Re={deep:!0,created(e,t,n){e[Ce]=Se(n),J(e,"change",(()=>{const t=e._modelValue,n=Pe(e),r=e.checked,s=e[Ce];if((0,i.kJ)(t)){const e=(0,i.hq)(t,n),o=-1!==e;if(r&&!o)s(t.concat(n));else if(!r&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,i.DM)(t)){const e=new Set(t);r?e.add(n):e.delete(n),s(e)}else s(Le(e,r))}))},mounted:Ne,beforeUpdate(e,t,n){e[Ce]=Se(n),Ne(e,t,n)}};function Ne(e,{value:t,oldValue:n},r){e._modelValue=t,(0,i.kJ)(t)?e.checked=(0,i.hq)(t,r.props.value)>-1:(0,i.DM)(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=(0,i.WV)(t,Le(e,!0)))}const xe={created(e,{value:t},n){e.checked=(0,i.WV)(t,n.props.value),e[Ce]=Se(n),J(e,"change",(()=>{e[Ce](Pe(e))}))},beforeUpdate(e,{value:t,oldValue:n},r){e[Ce]=Se(r),t!==n&&(e.checked=(0,i.WV)(t,r.props.value))}},Oe={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=(0,i.DM)(t);J(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.h5)(Pe(e)):Pe(e)));e[Ce](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,(0,r.Y3)((()=>{e._assigning=!1}))})),e[Ce]=Se(s)},mounted(e,{value:t,oldValue:n,modifiers:{number:r}}){De(e,t,n,r)},beforeUpdate(e,t,n){e[Ce]=Se(n)},updated(e,{value:t,oldValue:n,modifiers:{number:r}}){e._assigning||De(e,t,n,r)}};function De(e,t,n,r){const s=e.multiple,o=(0,i.kJ)(t);if((!s||o||(0,i.DM)(t))&&(!o||!(0,i.WV)(t,n))){for(let n=0,a=e.options.length;n<a;n++){const a=e.options[n],c=Pe(a);if(s)if(o){const e=typeof c;a.selected="string"===e||"number"===e?t.includes(r?(0,i.h5)(c):c):(0,i.hq)(t,c)>-1}else a.selected=t.has(c);else if((0,i.WV)(Pe(a),t))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}s||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Pe(e){return"_value"in e?e._value:e.value}function Le(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Me={created(e,t,n){Ue(e,t,n,null,"created")},mounted(e,t,n){Ue(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){Ue(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){Ue(e,t,n,r,"updated")}};function Fe(e,t){switch(e){case"SELECT":return Oe;case"TEXTAREA":return Ae;default:switch(t){case"checkbox":return Re;case"radio":return xe;default:return Ae}}}function Ue(e,t,n,r,i){const s=Fe(e.tagName,n.props&&n.props.type),o=s[i];o&&o(e,t,n,r)}function Ve(){Ae.getSSRProps=({value:e})=>({value:e}),xe.getSSRProps=({value:e},t)=>{if(t.props&&(0,i.WV)(t.props.value,e))return{checked:!0}},Re.getSSRProps=({value:e},t)=>{if((0,i.kJ)(e)){if(t.props&&(0,i.hq)(e,t.props.value)>-1)return{checked:!0}}else if((0,i.DM)(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Me.getSSRProps=(e,t)=>{if("string"!==typeof t.type)return;const n=Fe(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const je=["ctrl","shift","alt","meta"],Be={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>je.some((n=>e[`${n}Key`]&&!t.includes(n)))},$e=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=Be[t[e]];if(r&&r(n,t))return}return e(n,...r)})},qe={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},He=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.rs)(n.key);return t.some((e=>e===r||qe[e]===r))?e(n):void 0})},ze=(0,i.l7)({patchProp:ae},l);let Ke,Ge=!1;function We(){return Ke||(Ke=(0,r.Us)(ze))}function Je(){return Ke=Ge?Ke:(0,r.Eo)(ze),Ge=!0,Ke}const Ye=(...e)=>{We().render(...e)},Xe=(...e)=>{Je().hydrate(...e)},Qe=(...e)=>{const t=We().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=tt(e);if(!r)return;const s=t._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,et(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t},Ze=(...e)=>{const t=Je().createApp(...e);const{mount:n}=t;return t.mount=e=>{const t=tt(e);if(t)return n(t,!0,et(t))},t};function et(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function tt(e){if((0,i.HD)(e)){const t=document.querySelector(e);return t}return e}let nt=!1;const rt=()=>{nt||(nt=!0,Ve(),L())}},7139:function(e,t,n){n.d(t,{C_:function(){return te},DM:function(){return g},E9:function(){return H},F7:function(){return c},Gg:function(){return R},HD:function(){return w},He:function(){return $},Kj:function(){return v},Kn:function(){return E},Kp:function(){return J},NO:function(){return a},Nj:function(){return j},Od:function(){return h},PO:function(){return C},Pq:function(){return de},RI:function(){return f},S0:function(){return A},TJ:function(){return ue},W7:function(){return k},WB:function(){return le},WV:function(){return me},Z6:function(){return s},_A:function(){return D},_N:function(){return m},aN:function(){return ce},aU:function(){return U},dG:function(){return o},eS:function(){return ae},fY:function(){return r},h5:function(){return B},hR:function(){return F},hq:function(){return ge},ir:function(){return V},j5:function(){return Y},kC:function(){return M},kJ:function(){return p},kT:function(){return i},l7:function(){return l},m:function(){return z},mf:function(){return _},rs:function(){return L},tI:function(){return T},tR:function(){return u},vs:function(){return ne},wh:function(){return N},yA:function(){return fe},yL:function(){return ee},yk:function(){return b},yl:function(){return G},zw:function(){return ye}});n(560);
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>"[object Map]"===I(e),g=e=>"[object Set]"===I(e),y=e=>"[object Date]"===I(e),v=e=>"[object RegExp]"===I(e),_=e=>"function"===typeof e,w=e=>"string"===typeof e,b=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>(E(e)||_(e))&&_(e.then)&&_(e.catch),S=Object.prototype.toString,I=e=>S.call(e),k=e=>I(e).slice(8,-1),C=e=>"[object Object]"===I(e),A=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),x=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},O=/-(\w)/g,D=x((e=>e.replace(O,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,L=x((e=>e.replace(P,"-$1").toLowerCase())),M=x((e=>e.charAt(0).toUpperCase()+e.slice(1))),F=x((e=>{const t=e?`on${M(e)}`:"";return t})),U=(e,t)=>!Object.is(e,t),V=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},j=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let q;const H=()=>q||(q="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z={[1]:"TEXT",[2]:"CLASS",[4]:"STYLE",[8]:"PROPS",[16]:"FULL_PROPS",[32]:"NEED_HYDRATION",[64]:"STABLE_FRAGMENT",[128]:"KEYED_FRAGMENT",[256]:"UNKEYED_FRAGMENT",[512]:"NEED_PATCH",[1024]:"DYNAMIC_SLOTS",[2048]:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},K="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",G=r(K),W=2;function J(e,t=0,n=e.length){let r=e.split(/(\r?\n)/);const i=r.filter(((e,t)=>t%2===1));r=r.filter(((e,t)=>t%2===0));let s=0;const o=[];for(let a=0;a<r.length;a++)if(s+=r[a].length+(i[a]&&i[a].length||0),s>=t){for(let e=a-W;e<=a+W||n>s;e++){if(e<0||e>=r.length)continue;const c=e+1;o.push(`${c}${" ".repeat(Math.max(3-String(c).length,0))}|  ${r[e]}`);const u=r[e].length,l=i[e]&&i[e].length||0;if(e===a){const e=t-(s-(u+l)),r=Math.max(1,n>s?u-e:n-t);o.push("   |  "+" ".repeat(e)+"^".repeat(r))}else if(e>a){if(n>s){const e=Math.max(Math.min(n-s,u),1);o.push("   |  "+"^".repeat(e))}s+=u+l}}break}return o.join("\n")}function Y(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=w(r)?ee(r):Y(r);if(i)for(const e in i)t[e]=i[e]}return t}if(w(e)||E(e))return e}const X=/;(?![^(]*\))/g,Q=/:([^]+)/,Z=/\/\*[^]*?\*\//g;function ee(e){const t={};return e.replace(Z,"").split(X).forEach((e=>{if(e){const n=e.split(Q);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function te(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=te(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ne(e){if(!e)return null;let{class:t,style:n}=e;return t&&!w(t)&&(e.class=te(t)),n&&(e.style=Y(n)),e}const re="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ie="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",se="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",oe="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",ae=r(re),ce=r(ie),ue=r(se),le=r(oe),he="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",de=r(he);function fe(e){return!!e||""===e}function pe(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=me(e[r],t[r]);return n}function me(e,t){if(e===t)return!0;let n=y(e),r=y(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=b(e),r=b(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&pe(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!me(e[n],t[n]))return!1}}return String(e)===String(t)}function ge(e,t){return e.findIndex((e=>me(e,t)))}const ye=e=>w(e)?e:null==e?"":p(e)||E(e)&&(e.toString===S||!_(e.toString))?JSON.stringify(e,ve,2):String(e),ve=(e,t)=>t&&t.__v_isRef?ve(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[_e(t,r)+" =>"]=n,e)),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>_e(e)))}:b(t)?_e(t):!E(t)||p(t)||C(t)?t:String(t),_e=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},89:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},525:function(e,t,n){n.d(t,{ri:function(){return r.createApp}});var r=n(9242),i=n(3396),s=(n(560),n(4224),n(1121),n(7133),n(7139));
/**
* @vue/compiler-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o=Symbol(""),a=Symbol(""),c=Symbol(""),u=Symbol(""),l=Symbol(""),h=Symbol(""),d=Symbol(""),f=Symbol(""),p=Symbol(""),m=Symbol(""),g=Symbol(""),y=Symbol(""),v=Symbol(""),_=Symbol(""),w=Symbol(""),b=Symbol(""),E=Symbol(""),T=Symbol(""),S=Symbol(""),I=Symbol(""),k=Symbol(""),C=Symbol(""),A=Symbol(""),R=Symbol(""),N=Symbol(""),x=Symbol(""),O=Symbol(""),D=Symbol(""),P=Symbol(""),L=Symbol(""),M=Symbol(""),F=Symbol(""),U=Symbol(""),V=Symbol(""),j=Symbol(""),B=Symbol(""),$=Symbol(""),q=Symbol(""),H=Symbol(""),z={[o]:"Fragment",[a]:"Teleport",[c]:"Suspense",[u]:"KeepAlive",[l]:"BaseTransition",[h]:"openBlock",[d]:"createBlock",[f]:"createElementBlock",[p]:"createVNode",[m]:"createElementVNode",[g]:"createCommentVNode",[y]:"createTextVNode",[v]:"createStaticVNode",[_]:"resolveComponent",[w]:"resolveDynamicComponent",[b]:"resolveDirective",[E]:"resolveFilter",[T]:"withDirectives",[S]:"renderList",[I]:"renderSlot",[k]:"createSlots",[C]:"toDisplayString",[A]:"mergeProps",[R]:"normalizeClass",[N]:"normalizeStyle",[x]:"normalizeProps",[O]:"guardReactiveProps",[D]:"toHandlers",[P]:"camelize",[L]:"capitalize",[M]:"toHandlerKey",[F]:"setBlockTracking",[U]:"pushScopeId",[V]:"popScopeId",[j]:"withCtx",[B]:"unref",[$]:"isRef",[q]:"withMemo",[H]:"isMemoSame"};function K(e){Object.getOwnPropertySymbols(e).forEach((t=>{z[t]=e[t]}))}const G={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function W(e,t=""){return{type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:G}}function J(e,t,n,r,i,s,o,a=!1,c=!1,u=!1,l=G){return e&&(a?(e.helper(h),e.helper(ae(e.inSSR,u))):e.helper(oe(e.inSSR,u)),o&&e.helper(T)),{type:13,tag:t,props:n,children:r,patchFlag:i,dynamicProps:s,directives:o,isBlock:a,disableTracking:c,isComponent:u,loc:l}}function Y(e,t=G){return{type:17,loc:t,elements:e}}function X(e,t=G){return{type:15,loc:t,properties:e}}function Q(e,t){return{type:16,loc:G,key:(0,s.HD)(e)?Z(e,!0):e,value:t}}function Z(e,t=!1,n=G,r=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:r}}function ee(e,t=G){return{type:8,loc:t,children:e}}function te(e,t=[],n=G){return{type:14,loc:n,callee:e,arguments:t}}function ne(e,t=void 0,n=!1,r=!1,i=G){return{type:18,params:e,returns:t,newline:n,isSlot:r,loc:i}}function re(e,t,n,r=!0){return{type:19,test:e,consequent:t,alternate:n,newline:r,loc:G}}function ie(e,t,n=!1){return{type:20,index:e,value:t,isVNode:n,loc:G}}function se(e){return{type:21,body:e,loc:G}}function oe(e,t){return e||t?p:m}function ae(e,t){return e||t?d:f}function ce(e,{helper:t,removeHelper:n,inSSR:r}){e.isBlock||(e.isBlock=!0,n(oe(r,e.isComponent)),t(h),t(ae(r,e.isComponent)))}const ue=new Uint8Array([123,123]),le=new Uint8Array([125,125]);function he(e){return e>=97&&e<=122||e>=65&&e<=90}function de(e){return 32===e||10===e||9===e||12===e||13===e}function fe(e){return 47===e||62===e||de(e)}function pe(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}const me={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class ge{constructor(e,t){this.stack=e,this.cbs=t,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=ue,this.delimiterClose=le,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return 2===this.mode&&0===this.stack.length}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=ue,this.delimiterClose=le}getPos(e){let t=1,n=e+1;for(let r=this.newlines.length-1;r>=0;r--){const i=this.newlines[r];if(e>i){t=r+2,n=e-i;break}}return{column:n,line:t,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){60===e?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):this.inVPre||e!==this.delimiterOpen[0]||(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const e=this.index+1-this.delimiterOpen.length;e>this.sectionStart&&this.cbs.ontext(this.sectionStart,e),this.state=3,this.sectionStart=e}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){const t=this.sequenceIndex===this.currentSequence.length,n=t?fe(e):(32|e)===this.currentSequence[this.sequenceIndex];if(n){if(!t)return void this.sequenceIndex++}else this.inRCDATA=!1;this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(62===e||de(e)){const t=this.index-this.currentSequence.length;if(this.sectionStart<t){const e=this.index;this.index=t,this.cbs.ontext(this.sectionStart,t),this.index=e}return this.sectionStart=t+2,this.stateInClosingTagName(e),void(this.inRCDATA=!1)}this.sequenceIndex=0}(32|e)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:0===this.sequenceIndex?this.currentSequence===me.TitleEnd||this.currentSequence===me.TextareaEnd&&!this.inSFCRoot?e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=Number(60===e)}stateCDATASequence(e){e===me.Cdata[this.sequenceIndex]?++this.sequenceIndex===me.Cdata.length&&(this.state=28,this.currentSequence=me.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){while(++this.index<this.buffer.length){const t=this.buffer.charCodeAt(this.index);if(10===t&&this.newlines.push(this.index),t===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===me.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):0===this.sequenceIndex?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,t){this.enterRCDATA(e,t),this.state=31}enterRCDATA(e,t){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=t}stateBeforeTagName(e){if(33===e)this.state=22,this.sectionStart=this.index+1;else if(63===e)this.state=24,this.sectionStart=this.index+1;else if(he(e))if(this.sectionStart=this.index,0===this.mode)this.state=6;else if(this.inSFCRoot)this.state=34;else if(this.inXML)this.state=6;else{const t=32|e;this.state=116===t?30:115===t?29:6}else 47===e?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){fe(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(fe(e)){const t=this.buffer.slice(this.sectionStart,this.index);"template"!==t&&this.enterRCDATA(pe("</"+t),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){de(e)||(62===e?(this.state=1,this.sectionStart=this.index+1):(this.state=he(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(62===e||de(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){62===e&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){62===e?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):47===e?this.state=7:60===e&&47===this.peek()?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):de(e)||this.handleAttrStart(e)}handleAttrStart(e){118===e&&45===this.peek()?(this.state=13,this.sectionStart=this.index):46===e||58===e||64===e||35===e?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){62===e?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):de(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(61===e||fe(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){61===e||fe(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):58===e?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):46===e&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){61===e||fe(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):91===e?this.state=15:46===e&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){93===e?this.state=14:(61===e||fe(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){61===e||fe(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):46===e&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){61===e?this.state=18:47===e||62===e?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):de(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){34===e?(this.state=19,this.sectionStart=this.index+1):39===e?(this.state=20,this.sectionStart=this.index+1):de(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,t){(e===t||this.fastForwardTo(t))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(34===t?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){de(e)||62===e?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):39!==e&&60!==e&&61!==e&&96!==e||this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){91===e?(this.state=26,this.sequenceIndex=0):this.state=45===e?25:23}stateInDeclaration(e){(62===e||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(62===e||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){45===e?(this.state=28,this.currentSequence=me.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(62===e||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){const t=32|e;t===me.ScriptEnd[3]?this.startSpecial(me.ScriptEnd,4):t===me.StyleEnd[3]?this.startSpecial(me.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){const t=32|e;t===me.TitleEnd[3]?this.startSpecial(me.TitleEnd,4):t===me.TextareaEnd[3]?this.startSpecial(me.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){this.buffer=e;while(this.index<this.buffer.length){const e=this.buffer.charCodeAt(this.index);switch(10===e&&this.newlines.push(this.index),this.state){case 1:this.stateText(e);break;case 2:this.stateInterpolationOpen(e);break;case 3:this.stateInterpolation(e);break;case 4:this.stateInterpolationClose(e);break;case 31:this.stateSpecialStartSequence(e);break;case 32:this.stateInRCDATA(e);break;case 26:this.stateCDATASequence(e);break;case 19:this.stateInAttrValueDoubleQuotes(e);break;case 12:this.stateInAttrName(e);break;case 13:this.stateInDirName(e);break;case 14:this.stateInDirArg(e);break;case 15:this.stateInDynamicDirArg(e);break;case 16:this.stateInDirModifier(e);break;case 28:this.stateInCommentLike(e);break;case 27:this.stateInSpecialComment(e);break;case 11:this.stateBeforeAttrName(e);break;case 6:this.stateInTagName(e);break;case 34:this.stateInSFCRootTagName(e);break;case 9:this.stateInClosingTagName(e);break;case 5:this.stateBeforeTagName(e);break;case 17:this.stateAfterAttrName(e);break;case 20:this.stateInAttrValueSingleQuotes(e);break;case 18:this.stateBeforeAttrValue(e);break;case 8:this.stateBeforeClosingTagName(e);break;case 10:this.stateAfterClosingTagName(e);break;case 29:this.stateBeforeSpecialS(e);break;case 30:this.stateBeforeSpecialT(e);break;case 21:this.stateInAttrValueNoQuotes(e);break;case 7:this.stateInSelfClosingTag(e);break;case 23:this.stateInDeclaration(e);break;case 22:this.stateBeforeDeclaration(e);break;case 25:this.stateBeforeComment(e);break;case 24:this.stateInProcessingInstruction(e);break;case 33:this.stateInEntity();break}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(1===this.state||32===this.state&&0===this.sequenceIndex?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):19!==this.state&&20!==this.state&&21!==this.state||(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const e=this.buffer.length;this.sectionStart>=e||(28===this.state?this.currentSequence===me.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):6===this.state||11===this.state||18===this.state||17===this.state||12===this.state||13===this.state||14===this.state||15===this.state||16===this.state||20===this.state||19===this.state||21===this.state||9===this.state||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,t){}}function ye(e,{compatConfig:t}){const n=t&&t[e];return"MODE"===e?n||3:n}function ve(e,t){const n=ye("MODE",t),r=ye(e,t);return 3===n?!0===r:!1!==r}function _e(e,t,n,...r){const i=ve(e,t);return i}function we(e){throw e}function be(e){}function Ee(e,t,n,r){const i=`https://vuejs.org/error-reference/#compiler-${e}`,s=new SyntaxError(String(i));return s.code=e,s.loc=t,s}const Te=e=>4===e.type&&e.isStatic;function Se(e){switch(e){case"Teleport":case"teleport":return a;case"Suspense":case"suspense":return c;case"KeepAlive":case"keep-alive":return u;case"BaseTransition":case"base-transition":return l}}const Ie=/^\d|[^\$\w]/,ke=e=>!Ie.test(e),Ce=/[A-Za-z_$\xA0-\uFFFF]/,Ae=/[\.\?\w$\xA0-\uFFFF]/,Re=/\s+[.[]\s*|\s*[.[]\s+/g,Ne=e=>{e=e.trim().replace(Re,(e=>e.trim()));let t=0,n=[],r=0,i=0,s=null;for(let o=0;o<e.length;o++){const a=e.charAt(o);switch(t){case 0:if("["===a)n.push(t),t=1,r++;else if("("===a)n.push(t),t=2,i++;else if(!(0===o?Ce:Ae).test(a))return!1;break;case 1:"'"===a||'"'===a||"`"===a?(n.push(t),t=3,s=a):"["===a?r++:"]"===a&&(--r||(t=n.pop()));break;case 2:if("'"===a||'"'===a||"`"===a)n.push(t),t=3,s=a;else if("("===a)i++;else if(")"===a){if(o===e.length-1)return!1;--i||(t=n.pop())}break;case 3:a===s&&(t=n.pop(),s=null);break}}return!r&&!i},xe=Ne;function Oe(e,t,n=!1){for(let r=0;r<e.props.length;r++){const i=e.props[r];if(7===i.type&&(n||i.exp)&&((0,s.HD)(t)?i.name===t:t.test(i.name)))return i}}function De(e,t,n=!1,r=!1){for(let i=0;i<e.props.length;i++){const s=e.props[i];if(6===s.type){if(n)continue;if(s.name===t&&(s.value||r))return s}else if("bind"===s.name&&(s.exp||r)&&Pe(s.arg,t))return s}}function Pe(e,t){return!(!e||!Te(e)||e.content!==t)}function Le(e){return e.props.some((e=>7===e.type&&"bind"===e.name&&(!e.arg||4!==e.arg.type||!e.arg.isStatic)))}function Me(e){return 5===e.type||2===e.type}function Fe(e){return 7===e.type&&"slot"===e.name}function Ue(e){return 1===e.type&&3===e.tagType}function Ve(e){return 1===e.type&&2===e.tagType}const je=new Set([x,O]);function Be(e,t=[]){if(e&&!(0,s.HD)(e)&&14===e.type){const n=e.callee;if(!(0,s.HD)(n)&&je.has(n))return Be(e.arguments[0],t.concat(e))}return[e,t]}function $e(e,t,n){let r,i,o=13===e.type?e.props:e.arguments[2],a=[];if(o&&!(0,s.HD)(o)&&14===o.type){const e=Be(o);o=e[0],a=e[1],i=a[a.length-1]}if(null==o||(0,s.HD)(o))r=X([t]);else if(14===o.type){const e=o.arguments[0];(0,s.HD)(e)||15!==e.type?o.callee===D?r=te(n.helper(A),[X([t]),o]):o.arguments.unshift(X([t])):qe(t,e)||e.properties.unshift(t),!r&&(r=o)}else 15===o.type?(qe(t,o)||o.properties.unshift(t),r=o):(r=te(n.helper(A),[X([t]),o]),i&&i.callee===O&&(i=a[a.length-2]));13===e.type?i?i.arguments[0]=r:e.props=r:i?i.arguments[0]=r:e.arguments[2]=r}function qe(e,t){let n=!1;if(4===e.key.type){const r=e.key.content;n=t.properties.some((e=>4===e.key.type&&e.key.content===r))}return n}function He(e,t){return`_${t}_${e.replace(/[^\w]/g,((t,n)=>"-"===t?"_":e.charCodeAt(n).toString()))}`}function ze(e){return 14===e.type&&e.callee===q?e.arguments[1].returns:e}const Ke=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Ge={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:s.NO,isPreTag:s.NO,isCustomElement:s.NO,onError:we,onWarn:be,comments:!1,prefixIdentifiers:!1};let We=Ge,Je=null,Ye="",Xe=null,Qe=null,Ze="",et=-1,tt=-1,nt=0,rt=!1,it=null;const st=[],ot=new ge(st,{onerr:Rt,ontext(e,t){dt(lt(e,t),e,t)},ontextentity(e,t,n){dt(e,t,n)},oninterpolation(e,t){if(rt)return dt(lt(e,t),e,t);let n=e+ot.delimiterOpen.length,r=t-ot.delimiterClose.length;while(de(Ye.charCodeAt(n)))n++;while(de(Ye.charCodeAt(r-1)))r--;let i=lt(n,r);i.includes("&")&&(i=We.decodeEntities(i,!1)),St({type:5,content:At(i,!1,It(n,r)),loc:It(e,t)})},onopentagname(e,t){const n=lt(e,t);Xe={type:1,tag:n,ns:We.getNamespace(n,st[0],We.ns),tagType:0,props:[],children:[],loc:It(e-1,t),codegenNode:void 0}},onopentagend(e){ht(e)},onclosetag(e,t){const n=lt(e,t);if(!We.isVoidTag(n)){let r=!1;for(let e=0;e<st.length;e++){const i=st[e];if(i.tag.toLowerCase()===n.toLowerCase()){r=!0,e>0&&Rt(24,st[0].loc.start.offset);for(let n=0;n<=e;n++){const r=st.shift();ft(r,t,n<e)}break}}r||Rt(23,pt(e,60))}},onselfclosingtag(e){var t;const n=Xe.tag;Xe.isSelfClosing=!0,ht(e),(null==(t=st[0])?void 0:t.tag)===n&&ft(st.shift(),e)},onattribname(e,t){Qe={type:6,name:lt(e,t),nameLoc:It(e,t),value:void 0,loc:It(e)}},ondirname(e,t){const n=lt(e,t),r="."===n||":"===n?"bind":"@"===n?"on":"#"===n?"slot":n.slice(2);if(rt||""!==r||Rt(26,e),rt||""===r)Qe={type:6,name:n,nameLoc:It(e,t),value:void 0,loc:It(e)};else if(Qe={type:7,name:r,rawName:n,exp:void 0,arg:void 0,modifiers:"."===n?["prop"]:[],loc:It(e)},"pre"===r){rt=ot.inVPre=!0,it=Xe;const e=Xe.props;for(let t=0;t<e.length;t++)7===e[t].type&&(e[t]=Ct(e[t]))}},ondirarg(e,t){if(e===t)return;const n=lt(e,t);if(rt)Qe.name+=n,kt(Qe.nameLoc,t);else{const r="["!==n[0];Qe.arg=At(r?n:n.slice(1,-1),r,It(e,t),r?3:0)}},ondirmodifier(e,t){const n=lt(e,t);if(rt)Qe.name+="."+n,kt(Qe.nameLoc,t);else if("slot"===Qe.name){const e=Qe.arg;e&&(e.content+="."+n,kt(e.loc,t))}else Qe.modifiers.push(n)},onattribdata(e,t){Ze+=lt(e,t),et<0&&(et=e),tt=t},onattribentity(e,t,n){Ze+=e,et<0&&(et=t),tt=n},onattribnameend(e){const t=Qe.loc.start.offset,n=lt(t,e);7===Qe.type&&(Qe.rawName=n),Xe.props.some((e=>(7===e.type?e.rawName:e.name)===n))&&Rt(2,t)},onattribend(e,t){if(Xe&&Qe){if(kt(Qe.loc,t),0!==e)if(Ze.includes("&")&&(Ze=We.decodeEntities(Ze,!0)),6===Qe.type)"class"===Qe.name&&(Ze=Tt(Ze).trim()),1!==e||Ze||Rt(13,t),Qe.value={type:2,content:Ze,loc:1===e?It(et,tt):It(et-1,tt+1)},ot.inSFCRoot&&"template"===Xe.tag&&"lang"===Qe.name&&Ze&&"html"!==Ze&&ot.enterRCDATA(pe("</template"),0);else{let e=0;Qe.exp=At(Ze,!1,It(et,tt),0,e),"for"===Qe.name&&(Qe.forParseResult=ut(Qe.exp));let t=-1;"bind"===Qe.name&&(t=Qe.modifiers.indexOf("sync"))>-1&&_e("COMPILER_V_BIND_SYNC",We,Qe.loc,Qe.rawName)&&(Qe.name="model",Qe.modifiers.splice(t,1))}7===Qe.type&&"pre"===Qe.name||Xe.props.push(Qe)}Ze="",et=tt=-1},oncomment(e,t){We.comments&&St({type:3,content:lt(e,t),loc:It(e-4,t+3)})},onend(){const e=Ye.length;for(let t=0;t<st.length;t++)ft(st[t],e-1),Rt(24,st[t].loc.start.offset)},oncdata(e,t){0!==st[0].ns?dt(lt(e,t),e,t):Rt(1,e-9)},onprocessinginstruction(e){0===(st[0]?st[0].ns:We.ns)&&Rt(21,e-1)}}),at=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,ct=/^\(|\)$/g;function ut(e){const t=e.loc,n=e.content,r=n.match(Ke);if(!r)return;const[,i,s]=r,o=(e,n,r=!1)=>{const i=t.start.offset+n,s=i+e.length;return At(e,!1,It(i,s),0,r?1:0)},a={source:o(s.trim(),n.indexOf(s,i.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let c=i.trim().replace(ct,"").trim();const u=i.indexOf(c),l=c.match(at);if(l){c=c.replace(at,"").trim();const e=l[1].trim();let t;if(e&&(t=n.indexOf(e,u+c.length),a.key=o(e,t,!0)),l[2]){const r=l[2].trim();r&&(a.index=o(r,n.indexOf(r,a.key?t+e.length:u+c.length),!0))}}return c&&(a.value=o(c,u,!0)),a}function lt(e,t){return Ye.slice(e,t)}function ht(e){ot.inSFCRoot&&(Xe.innerLoc=It(e+1,e+1)),St(Xe);const{tag:t,ns:n}=Xe;0===n&&We.isPreTag(t)&&nt++,We.isVoidTag(t)?ft(Xe,e):(st.unshift(Xe),1!==n&&2!==n||(ot.inXML=!0)),Xe=null}function dt(e,t,n){var r;{const t=null==(r=st[0])?void 0:r.tag;"script"!==t&&"style"!==t&&e.includes("&")&&(e=We.decodeEntities(e,!1))}const i=st[0]||Je,s=i.children[i.children.length-1];2===(null==s?void 0:s.type)?(s.content+=e,kt(s.loc,n)):i.children.push({type:2,content:e,loc:It(t,n)})}function ft(e,t,n=!1){kt(e.loc,n?pt(t,60):t+1),ot.inSFCRoot&&(e.children.length?e.innerLoc.end=(0,s.l7)({},e.children[e.children.length-1].loc.end):e.innerLoc.end=(0,s.l7)({},e.innerLoc.start),e.innerLoc.source=lt(e.innerLoc.start.offset,e.innerLoc.end.offset));const{tag:r,ns:i}=e;rt||("slot"===r?e.tagType=2:gt(e)?e.tagType=3:yt(e)&&(e.tagType=1)),ot.inRCDATA||(e.children=wt(e.children,e.tag)),0===i&&We.isPreTag(r)&&nt--,it===e&&(rt=ot.inVPre=!1,it=null),ot.inXML&&0===(st[0]?st[0].ns:We.ns)&&(ot.inXML=!1);{const t=e.props;if(!ot.inSFCRoot&&ve("COMPILER_NATIVE_TEMPLATE",We)&&"template"===e.tag&&!gt(e)){const t=st[0]||Je,n=t.children.indexOf(e);t.children.splice(n,1,...e.children)}const n=t.find((e=>6===e.type&&"inline-template"===e.name));n&&_e("COMPILER_INLINE_TEMPLATE",We,n.loc)&&e.children.length&&(n.value={type:2,content:lt(e.children[0].loc.start.offset,e.children[e.children.length-1].loc.end.offset),loc:n.loc})}}function pt(e,t){let n=e;while(Ye.charCodeAt(n)!==t&&n>=0)n--;return n}const mt=new Set(["if","else","else-if","for","slot"]);function gt({tag:e,props:t}){if("template"===e)for(let n=0;n<t.length;n++)if(7===t[n].type&&mt.has(t[n].name))return!0;return!1}function yt({tag:e,props:t}){var n;if(We.isCustomElement(e))return!1;if("component"===e||vt(e.charCodeAt(0))||Se(e)||(null==(n=We.isBuiltInComponent)?void 0:n.call(We,e))||We.isNativeTag&&!We.isNativeTag(e))return!0;for(let r=0;r<t.length;r++){const e=t[r];if(6===e.type){if("is"===e.name&&e.value){if(e.value.content.startsWith("vue:"))return!0;if(_e("COMPILER_IS_ON_ELEMENT",We,e.loc))return!0}}else if("bind"===e.name&&Pe(e.arg,"is")&&_e("COMPILER_IS_ON_ELEMENT",We,e.loc))return!0}return!1}function vt(e){return e>64&&e<91}const _t=/\r\n/g;function wt(e,t){var n,r;const i="preserve"!==We.whitespace;let s=!1;for(let o=0;o<e.length;o++){const t=e[o];if(2===t.type)if(nt)t.content=t.content.replace(_t,"\n");else if(bt(t.content)){const a=null==(n=e[o-1])?void 0:n.type,c=null==(r=e[o+1])?void 0:r.type;!a||!c||i&&(3===a&&(3===c||1===c)||1===a&&(3===c||1===c&&Et(t.content)))?(s=!0,e[o]=null):t.content=" "}else i&&(t.content=Tt(t.content))}if(nt&&t&&We.isPreTag(t)){const t=e[0];t&&2===t.type&&(t.content=t.content.replace(/^\r?\n/,""))}return s?e.filter(Boolean):e}function bt(e){for(let t=0;t<e.length;t++)if(!de(e.charCodeAt(t)))return!1;return!0}function Et(e){for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(10===n||13===n)return!0}return!1}function Tt(e){let t="",n=!1;for(let r=0;r<e.length;r++)de(e.charCodeAt(r))?n||(t+=" ",n=!0):(t+=e[r],n=!1);return t}function St(e){(st[0]||Je).children.push(e)}function It(e,t){return{start:ot.getPos(e),end:null==t?t:ot.getPos(t),source:null==t?t:lt(e,t)}}function kt(e,t){e.end=ot.getPos(t),e.source=lt(e.start.offset,t)}function Ct(e){const t={type:6,name:e.rawName,nameLoc:It(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){const n=e.exp.loc;n.end.offset<e.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),t.value={type:2,content:e.exp.content,loc:n}}return t}function At(e,t=!1,n,r=0,i=0){const s=Z(e,t,n,r);return s}function Rt(e,t,n){We.onError(Ee(e,It(t,t),void 0,n))}function Nt(){ot.reset(),Xe=null,Qe=null,Ze="",et=-1,tt=-1,st.length=0}function xt(e,t){if(Nt(),Ye=e,We=(0,s.l7)({},Ge),t){let e;for(e in t)null!=t[e]&&(We[e]=t[e])}ot.mode="html"===We.parseMode?1:"sfc"===We.parseMode?2:0,ot.inXML=1===We.ns||2===We.ns;const n=null==t?void 0:t.delimiters;n&&(ot.delimiterOpen=pe(n[0]),ot.delimiterClose=pe(n[1]));const r=Je=W([],e);return ot.parse(Ye),r.loc=It(0,e.length),r.children=wt(r.children),Je=null,r}function Ot(e,t){Pt(e,t,Dt(e,e.children[0]))}function Dt(e,t){const{children:n}=e;return 1===n.length&&1===t.type&&!Ve(t)}function Pt(e,t,n=!1){const{children:r}=e,i=r.length;let o=0;for(let s=0;s<r.length;s++){const e=r[s];if(1===e.type&&0===e.tagType){const r=n?0:Lt(e,t);if(r>0){if(r>=2){e.codegenNode.patchFlag="-1",e.codegenNode=t.hoist(e.codegenNode),o++;continue}}else{const n=e.codegenNode;if(13===n.type){const r=jt(n);if((!r||512===r||1===r)&&Ut(e,t)>=2){const r=Vt(e);r&&(n.props=t.hoist(r))}n.dynamicProps&&(n.dynamicProps=t.hoist(n.dynamicProps))}}}if(1===e.type){const n=1===e.tagType;n&&t.scopes.vSlot++,Pt(e,t),n&&t.scopes.vSlot--}else if(11===e.type)Pt(e,t,1===e.children.length);else if(9===e.type)for(let n=0;n<e.branches.length;n++)Pt(e.branches[n],t,1===e.branches[n].children.length)}if(o&&t.transformHoist&&t.transformHoist(r,t,e),o&&o===i&&1===e.type&&0===e.tagType&&e.codegenNode&&13===e.codegenNode.type&&(0,s.kJ)(e.codegenNode.children)){const n=t.hoist(Y(e.codegenNode.children));t.hmr&&(n.content=`[...${n.content}]`),e.codegenNode.children=n}}function Lt(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(0!==e.tagType)return 0;const r=n.get(e);if(void 0!==r)return r;const i=e.codegenNode;if(13!==i.type)return 0;if(i.isBlock&&"svg"!==e.tag&&"foreignObject"!==e.tag)return 0;const o=jt(i);if(o)return n.set(e,0),0;{let r=3;const s=Ut(e,t);if(0===s)return n.set(e,0),0;s<r&&(r=s);for(let i=0;i<e.children.length;i++){const s=Lt(e.children[i],t);if(0===s)return n.set(e,0),0;s<r&&(r=s)}if(r>1)for(let i=0;i<e.props.length;i++){const s=e.props[i];if(7===s.type&&"bind"===s.name&&s.exp){const i=Lt(s.exp,t);if(0===i)return n.set(e,0),0;i<r&&(r=i)}}if(i.isBlock){for(let t=0;t<e.props.length;t++){const r=e.props[t];if(7===r.type)return n.set(e,0),0}t.removeHelper(h),t.removeHelper(ae(t.inSSR,i.isComponent)),i.isBlock=!1,t.helper(oe(t.inSSR,i.isComponent))}return n.set(e,r),r}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Lt(e.content,t);case 4:return e.constType;case 8:let a=3;for(let n=0;n<e.children.length;n++){const r=e.children[n];if((0,s.HD)(r)||(0,s.yk)(r))continue;const i=Lt(r,t);if(0===i)return 0;i<a&&(a=i)}return a;default:return 0}}const Mt=new Set([R,N,x,O]);function Ft(e,t){if(14===e.type&&!(0,s.HD)(e.callee)&&Mt.has(e.callee)){const n=e.arguments[0];if(4===n.type)return Lt(n,t);if(14===n.type)return Ft(n,t)}return 0}function Ut(e,t){let n=3;const r=Vt(e);if(r&&15===r.type){const{properties:e}=r;for(let r=0;r<e.length;r++){const{key:i,value:s}=e[r],o=Lt(i,t);if(0===o)return o;let a;if(o<n&&(n=o),a=4===s.type?Lt(s,t):14===s.type?Ft(s,t):0,0===a)return a;a<n&&(n=a)}}return n}function Vt(e){const t=e.codegenNode;if(13===t.type)return t.props}function jt(e){const t=e.patchFlag;return t?parseInt(t,10):void 0}function Bt(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:r=!1,hmr:i=!1,cacheHandlers:o=!1,nodeTransforms:a=[],directiveTransforms:c={},transformHoist:u=null,isBuiltInComponent:l=s.dG,isCustomElement:h=s.dG,expressionPlugins:d=[],scopeId:f=null,slotted:p=!0,ssr:m=!1,inSSR:g=!1,ssrCssVars:y="",bindingMetadata:v=s.kT,inline:_=!1,isTS:w=!1,onError:b=we,onWarn:E=be,compatConfig:T}){const S=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),I={filename:t,selfName:S&&(0,s.kC)((0,s._A)(S[1])),prefixIdentifiers:n,hoistStatic:r,hmr:i,cacheHandlers:o,nodeTransforms:a,directiveTransforms:c,transformHoist:u,isBuiltInComponent:l,isCustomElement:h,expressionPlugins:d,scopeId:f,slotted:p,ssr:m,inSSR:g,ssrCssVars:y,bindingMetadata:v,inline:_,isTS:w,onError:b,onWarn:E,compatConfig:T,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new WeakMap,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(e){const t=I.helpers.get(e)||0;return I.helpers.set(e,t+1),e},removeHelper(e){const t=I.helpers.get(e);if(t){const n=t-1;n?I.helpers.set(e,n):I.helpers.delete(e)}},helperString(e){return`_${z[I.helper(e)]}`},replaceNode(e){I.parent.children[I.childIndex]=I.currentNode=e},removeNode(e){const t=I.parent.children,n=e?t.indexOf(e):I.currentNode?I.childIndex:-1;e&&e!==I.currentNode?I.childIndex>n&&(I.childIndex--,I.onNodeRemoved()):(I.currentNode=null,I.onNodeRemoved()),I.parent.children.splice(n,1)},onNodeRemoved:s.dG,addIdentifiers(e){},removeIdentifiers(e){},hoist(e){(0,s.HD)(e)&&(e=Z(e)),I.hoists.push(e);const t=Z(`_hoisted_${I.hoists.length}`,!1,e.loc,2);return t.hoisted=e,t},cache(e,t=!1){return ie(I.cached++,e,t)}};return I.filters=new Set,I}function $t(e,t){const n=Bt(e,t);zt(e,n),t.hoistStatic&&Ot(e,n),t.ssr||qt(e,n),e.helpers=new Set([...n.helpers.keys()]),e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.transformed=!0,e.filters=[...n.filters]}function qt(e,t){const{helper:n}=t,{children:r}=e;if(1===r.length){const n=r[0];if(Dt(e,n)&&n.codegenNode){const r=n.codegenNode;13===r.type&&ce(r,t),e.codegenNode=r}else e.codegenNode=n}else if(r.length>1){let r=64;s.m[64];0,e.codegenNode=J(t,n(o),void 0,e.children,r+"",void 0,void 0,!0,void 0,!1)}}function Ht(e,t){let n=0;const r=()=>{n--};for(;n<e.children.length;n++){const i=e.children[n];(0,s.HD)(i)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=r,zt(i,t))}}function zt(e,t){t.currentNode=e;const{nodeTransforms:n}=t,r=[];for(let o=0;o<n.length;o++){const i=n[o](e,t);if(i&&((0,s.kJ)(i)?r.push(...i):r.push(i)),!t.currentNode)return;e=t.currentNode}switch(e.type){case 3:t.ssr||t.helper(g);break;case 5:t.ssr||t.helper(C);break;case 9:for(let n=0;n<e.branches.length;n++)zt(e.branches[n],t);break;case 10:case 11:case 1:case 0:Ht(e,t);break}t.currentNode=e;let i=r.length;while(i--)r[i]()}function Kt(e,t){const n=(0,s.HD)(e)?t=>t===e:t=>e.test(t);return(e,r)=>{if(1===e.type){const{props:i}=e;if(3===e.tagType&&i.some(Fe))return;const s=[];for(let o=0;o<i.length;o++){const a=i[o];if(7===a.type&&n(a.name)){i.splice(o,1),o--;const n=t(e,a,r);n&&s.push(n)}}return s}}}const Gt="/*#__PURE__*/",Wt=e=>`${z[e]}: _${z[e]}`;function Jt(e,{mode:t="function",prefixIdentifiers:n="module"===t,sourceMap:r=!1,filename:i="template.vue.html",scopeId:s=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:c="vue",ssrRuntimeModuleName:u="vue/server-renderer",ssr:l=!1,isTS:h=!1,inSSR:d=!1}){const f={mode:t,prefixIdentifiers:n,sourceMap:r,filename:i,scopeId:s,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:c,ssrRuntimeModuleName:u,ssr:l,isTS:h,inSSR:d,source:e.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(e){return`_${z[e]}`},push(e,t=-2,n){f.code+=e},indent(){p(++f.indentLevel)},deindent(e=!1){e?--f.indentLevel:p(--f.indentLevel)},newline(){p(f.indentLevel)}};function p(e){f.push("\n"+"  ".repeat(e),0)}return f}function Yt(e,t={}){const n=Jt(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:r,push:i,prefixIdentifiers:s,indent:o,deindent:a,newline:c,scopeId:u,ssr:l}=n,h=Array.from(e.helpers),d=h.length>0,f=!s&&"module"!==r,p=!1,m=p?Jt(e,t):n;Xt(e,m);const g=l?"ssrRender":"render",y=l?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"],v=y.join(", ");if(i(`function ${g}(${v}) {`),o(),f&&(i("with (_ctx) {"),o(),d&&(i(`const { ${h.map(Wt).join(", ")} } = _Vue\n`,-1),c())),e.components.length&&(Qt(e.components,"component",n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(Qt(e.directives,"directive",n),e.temps>0&&c()),e.filters&&e.filters.length&&(c(),Qt(e.filters,"filter",n),c()),e.temps>0){i("let ");for(let t=0;t<e.temps;t++)i(`${t>0?", ":""}_temp${t}`)}return(e.components.length||e.directives.length||e.temps)&&(i("\n",0),c()),l||i("return "),e.codegenNode?nn(e.codegenNode,n):i("null"),f&&(a(),i("}")),a(),i("}"),{ast:e,code:n.code,preamble:p?m.code:"",map:n.map?n.map.toJSON():void 0}}function Xt(e,t){const{ssr:n,prefixIdentifiers:r,push:i,newline:s,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:c}=t,u=a,l=Array.from(e.helpers);if(l.length>0&&(i(`const _Vue = ${u}\n`,-1),e.hoists.length)){const e=[p,m,g,y,v].filter((e=>l.includes(e))).map(Wt).join(", ");i(`const { ${e} } = _Vue\n`,-1)}Zt(e.hoists,t),s(),i("return ")}function Qt(e,t,{helper:n,push:r,newline:i,isTS:s}){const o=n("filter"===t?E:"component"===t?_:b);for(let a=0;a<e.length;a++){let n=e[a];const c=n.endsWith("__self");c&&(n=n.slice(0,-6)),r(`const ${He(n,t)} = ${o}(${JSON.stringify(n)}${c?", true":""})${s?"!":""}`),a<e.length-1&&i()}}function Zt(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:r,helper:i,scopeId:s,mode:o}=t;r();for(let a=0;a<e.length;a++){const i=e[a];i&&(n(`const _hoisted_${a+1} = `),nn(i,t),r())}t.pure=!1}function en(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),tn(e,t,n),n&&t.deindent(),t.push("]")}function tn(e,t,n=!1,r=!0){const{push:i,newline:o}=t;for(let a=0;a<e.length;a++){const c=e[a];(0,s.HD)(c)?i(c,-3):(0,s.kJ)(c)?en(c,t):nn(c,t),a<e.length-1&&(n?(r&&i(","),o()):r&&i(", "))}}function nn(e,t){if((0,s.HD)(e))t.push(e,-3);else if((0,s.yk)(e))t.push(t.helper(e));else switch(e.type){case 1:case 9:case 11:nn(e.codegenNode,t);break;case 2:rn(e,t);break;case 4:sn(e,t);break;case 5:on(e,t);break;case 12:nn(e.codegenNode,t);break;case 8:an(e,t);break;case 3:un(e,t);break;case 13:ln(e,t);break;case 14:dn(e,t);break;case 15:fn(e,t);break;case 17:pn(e,t);break;case 18:mn(e,t);break;case 19:gn(e,t);break;case 20:yn(e,t);break;case 21:tn(e.body,t,!0,!1);break;case 22:break;case 23:break;case 24:break;case 25:break;case 26:break;case 10:break;default:0}}function rn(e,t){t.push(JSON.stringify(e.content),-3,e)}function sn(e,t){const{content:n,isStatic:r}=e;t.push(r?JSON.stringify(n):n,-3,e)}function on(e,t){const{push:n,helper:r,pure:i}=t;i&&n(Gt),n(`${r(C)}(`),nn(e.content,t),n(")")}function an(e,t){for(let n=0;n<e.children.length;n++){const r=e.children[n];(0,s.HD)(r)?t.push(r,-3):nn(r,t)}}function cn(e,t){const{push:n}=t;if(8===e.type)n("["),an(e,t),n("]");else if(e.isStatic){const t=ke(e.content)?e.content:JSON.stringify(e.content);n(t,-2,e)}else n(`[${e.content}]`,-3,e)}function un(e,t){const{push:n,helper:r,pure:i}=t;i&&n(Gt),n(`${r(g)}(${JSON.stringify(e.content)})`,-3,e)}function ln(e,t){const{push:n,helper:r,pure:i}=t,{tag:s,props:o,children:a,patchFlag:c,dynamicProps:u,directives:l,isBlock:d,disableTracking:f,isComponent:p}=e;l&&n(r(T)+"("),d&&n(`(${r(h)}(${f?"true":""}), `),i&&n(Gt);const m=d?ae(t.inSSR,p):oe(t.inSSR,p);n(r(m)+"(",-2,e),tn(hn([s,o,a,c,u]),t),n(")"),d&&n(")"),l&&(n(", "),nn(l,t),n(")"))}function hn(e){let t=e.length;while(t--)if(null!=e[t])break;return e.slice(0,t+1).map((e=>e||"null"))}function dn(e,t){const{push:n,helper:r,pure:i}=t,o=(0,s.HD)(e.callee)?e.callee:r(e.callee);i&&n(Gt),n(o+"(",-2,e),tn(e.arguments,t),n(")")}function fn(e,t){const{push:n,indent:r,deindent:i,newline:s}=t,{properties:o}=e;if(!o.length)return void n("{}",-2,e);const a=o.length>1||!1;n(a?"{":"{ "),a&&r();for(let c=0;c<o.length;c++){const{key:e,value:r}=o[c];cn(e,t),n(": "),nn(r,t),c<o.length-1&&(n(","),s())}a&&i(),n(a?"}":" }")}function pn(e,t){en(e.elements,t)}function mn(e,t){const{push:n,indent:r,deindent:i}=t,{params:o,returns:a,body:c,newline:u,isSlot:l}=e;l&&n(`_${z[j]}(`),n("(",-2,e),(0,s.kJ)(o)?tn(o,t):o&&nn(o,t),n(") => "),(u||c)&&(n("{"),r()),a?(u&&n("return "),(0,s.kJ)(a)?en(a,t):nn(a,t)):c&&nn(c,t),(u||c)&&(i(),n("}")),l&&(e.isNonScopedSlot&&n(", undefined, true"),n(")"))}function gn(e,t){const{test:n,consequent:r,alternate:i,newline:s}=e,{push:o,indent:a,deindent:c,newline:u}=t;if(4===n.type){const e=!ke(n.content);e&&o("("),sn(n,t),e&&o(")")}else o("("),nn(n,t),o(")");s&&a(),t.indentLevel++,s||o(" "),o("? "),nn(r,t),t.indentLevel--,s&&u(),s||o(" "),o(": ");const l=19===i.type;l||t.indentLevel++,nn(i,t),l||t.indentLevel--,s&&c(!0)}function yn(e,t){const{push:n,helper:r,indent:i,deindent:s,newline:o}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(i(),n(`${r(F)}(-1),`),o()),n(`_cache[${e.index}] = `),nn(e.value,t),e.isVNode&&(n(","),o(),n(`${r(F)}(1),`),o(),n(`_cache[${e.index}]`),s()),n(")")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const vn=Kt(/^(if|else|else-if)$/,((e,t,n)=>_n(e,t,n,((e,t,r)=>{const i=n.parent.children;let s=i.indexOf(e),o=0;while(s-- >=0){const e=i[s];e&&9===e.type&&(o+=e.branches.length)}return()=>{if(r)e.codegenNode=bn(t,o,n);else{const r=Tn(e.codegenNode);r.alternate=bn(t,o+e.branches.length-1,n)}}}))));function _n(e,t,n,r){if("else"!==t.name&&(!t.exp||!t.exp.content.trim())){const r=t.exp?t.exp.loc:e.loc;n.onError(Ee(28,t.loc)),t.exp=Z("true",!1,r)}if("if"===t.name){const i=wn(e,t),s={type:9,loc:e.loc,branches:[i]};if(n.replaceNode(s),r)return r(s,i,!0)}else{const i=n.parent.children;let s=i.indexOf(e);while(s-- >=-1){const o=i[s];if(o&&3===o.type)n.removeNode(o);else{if(!o||2!==o.type||o.content.trim().length){if(o&&9===o.type){"else-if"===t.name&&void 0===o.branches[o.branches.length-1].condition&&n.onError(Ee(30,e.loc)),n.removeNode();const i=wn(e,t);0,o.branches.push(i);const s=r&&r(o,i,!1);zt(i,n),s&&s(),n.currentNode=null}else n.onError(Ee(30,e.loc));break}n.removeNode(o)}}}}function wn(e,t){const n=3===e.tagType;return{type:10,loc:e.loc,condition:"else"===t.name?void 0:t.exp,children:n&&!Oe(e,"for")?e.children:[e],userKey:De(e,"key"),isTemplateIf:n}}function bn(e,t,n){return e.condition?re(e.condition,En(e,t,n),te(n.helper(g),['""',"true"])):En(e,t,n)}function En(e,t,n){const{helper:r}=n,i=Q("key",Z(`${t}`,!1,G,2)),{children:a}=e,c=a[0],u=1!==a.length||1!==c.type;if(u){if(1===a.length&&11===c.type){const e=c.codegenNode;return $e(e,i,n),e}{let t=64;s.m[64];return J(n,r(o),X([i]),a,t+"",void 0,void 0,!0,!1,!1,e.loc)}}{const e=c.codegenNode,t=ze(e);return 13===t.type&&ce(t,n),$e(t,i,n),e}}function Tn(e){while(1)if(19===e.type){if(19!==e.alternate.type)return e;e=e.alternate}else 20===e.type&&(e=e.value)}const Sn=Kt("for",((e,t,n)=>{const{helper:r,removeHelper:i}=n;return In(e,t,n,(t=>{const s=te(r(S),[t.source]),a=Ue(e),c=Oe(e,"memo"),u=De(e,"key"),l=u&&(6===u.type?Z(u.value.content,!0):u.exp),d=u?Q("key",l):null,f=4===t.source.type&&t.source.constType>0,p=f?64:u?128:256;return t.codegenNode=J(n,r(o),void 0,s,p+"",void 0,void 0,!0,!f,!1,e.loc),()=>{let u;const{children:p}=t;const m=1!==p.length||1!==p[0].type,g=Ve(e)?e:a&&1===e.children.length&&Ve(e.children[0])?e.children[0]:null;if(g?(u=g.codegenNode,a&&d&&$e(u,d,n)):m?u=J(n,r(o),d?X([d]):void 0,e.children,"64",void 0,void 0,!0,void 0,!1):(u=p[0].codegenNode,a&&d&&$e(u,d,n),u.isBlock!==!f&&(u.isBlock?(i(h),i(ae(n.inSSR,u.isComponent))):i(oe(n.inSSR,u.isComponent))),u.isBlock=!f,u.isBlock?(r(h),r(ae(n.inSSR,u.isComponent))):r(oe(n.inSSR,u.isComponent))),c){const e=ne(Cn(t.parseResult,[Z("_cached")]));e.body=se([ee(["const _memo = (",c.exp,")"]),ee(["if (_cached",...l?[" && _cached.key === ",l]:[],` && ${n.helperString(H)}(_cached, _memo)) return _cached`]),ee(["const _item = ",u]),Z("_item.memo = _memo"),Z("return _item")]),s.arguments.push(e,Z("_cache"),Z(String(n.cached++)))}else s.arguments.push(ne(Cn(t.parseResult),u,!0))}}))}));function In(e,t,n,r){if(!t.exp)return void n.onError(Ee(31,t.loc));const i=t.forParseResult;if(!i)return void n.onError(Ee(32,t.loc));kn(i,n);const{addIdentifiers:s,removeIdentifiers:o,scopes:a}=n,{source:c,value:u,key:l,index:h}=i,d={type:11,loc:t.loc,source:c,valueAlias:u,keyAlias:l,objectIndexAlias:h,parseResult:i,children:Ue(e)?e.children:[e]};n.replaceNode(d),a.vFor++;const f=r&&r(d);return()=>{a.vFor--,f&&f()}}function kn(e,t){e.finalized||(e.finalized=!0)}function Cn({value:e,key:t,index:n},r=[]){return An([e,t,n,...r])}function An(e){let t=e.length;while(t--)if(e[t])break;return e.slice(0,t+1).map(((e,t)=>e||Z("_".repeat(t+1),!1)))}const Rn=Z("undefined",!1),Nn=(e,t)=>{if(1===e.type&&(1===e.tagType||3===e.tagType)){const n=Oe(e,"slot");if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},xn=(e,t,n,r)=>ne(e,n,!1,!0,n.length?n[0].loc:r);function On(e,t,n=xn){t.helper(j);const{children:r,loc:i}=e,s=[],o=[];let a=t.scopes.vSlot>0||t.scopes.vFor>0;const c=Oe(e,"slot",!0);if(c){const{arg:e,exp:t}=c;e&&!Te(e)&&(a=!0),s.push(Q(e||Z("default",!0),n(t,void 0,r,i)))}let u=!1,l=!1;const h=[],d=new Set;let f=0;for(let g=0;g<r.length;g++){const e=r[g];let i;if(!Ue(e)||!(i=Oe(e,"slot",!0))){3!==e.type&&h.push(e);continue}if(c){t.onError(Ee(37,i.loc));break}u=!0;const{children:p,loc:m}=e,{arg:y=Z("default",!0),exp:v,loc:_}=i;let w;Te(y)?w=y?y.content:"default":a=!0;const b=Oe(e,"for"),E=n(v,b,p,m);let T,I;if(T=Oe(e,"if"))a=!0,o.push(re(T.exp,Dn(y,E,f++),Rn));else if(I=Oe(e,/^else(-if)?$/,!0)){let e,n=g;while(n--)if(e=r[n],3!==e.type)break;if(e&&Ue(e)&&Oe(e,"if")){r.splice(g,1),g--;let e=o[o.length-1];while(19===e.alternate.type)e=e.alternate;e.alternate=I.exp?re(I.exp,Dn(y,E,f++),Rn):Dn(y,E,f++)}else t.onError(Ee(30,I.loc))}else if(b){a=!0;const e=b.forParseResult;e?(kn(e,t),o.push(te(t.helper(S),[e.source,ne(Cn(e),Dn(y,E),!0)]))):t.onError(Ee(32,b.loc))}else{if(w){if(d.has(w)){t.onError(Ee(38,_));continue}d.add(w),"default"===w&&(l=!0)}s.push(Q(y,E))}}if(!c){const e=(e,r)=>{const s=n(e,void 0,r,i);return t.compatConfig&&(s.isNonScopedSlot=!0),Q("default",s)};u?h.length&&h.some((e=>Ln(e)))&&(l?t.onError(Ee(39,h[0].loc)):s.push(e(void 0,h))):s.push(e(void 0,r))}const p=a?2:Pn(e.children)?3:1;let m=X(s.concat(Q("_",Z(p+"",!1))),i);return o.length&&(m=te(t.helper(k),[m,Y(o)])),{slots:m,hasDynamicSlots:a}}function Dn(e,t,n){const r=[Q("name",e),Q("fn",t)];return null!=n&&r.push(Q("key",Z(String(n),!0))),X(r)}function Pn(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(2===n.tagType||Pn(n.children))return!0;break;case 9:if(Pn(n.branches))return!0;break;case 10:case 11:if(Pn(n.children))return!0;break}}return!1}function Ln(e){return 2!==e.type&&12!==e.type||(2===e.type?!!e.content.trim():Ln(e.content))}const Mn=new WeakMap,Fn=(e,t)=>function(){if(e=t.currentNode,1!==e.type||0!==e.tagType&&1!==e.tagType)return;const{tag:n,props:r}=e,i=1===e.tagType;let o=i?Un(e,t):`"${n}"`;const l=(0,s.Kn)(o)&&o.callee===w;let h,d,f,p,m,g,y=0,v=l||o===a||o===c||!i&&("svg"===n||"foreignObject"===n);if(r.length>0){const n=Vn(e,t,void 0,i,l);h=n.props,y=n.patchFlag,m=n.dynamicPropNames;const r=n.directives;g=r&&r.length?Y(r.map((e=>$n(e,t)))):void 0,n.shouldUseBlock&&(v=!0)}if(e.children.length>0){o===u&&(v=!0,y|=1024);const n=i&&o!==a&&o!==u;if(n){const{slots:n,hasDynamicSlots:r}=On(e,t);d=n,r&&(y|=1024)}else if(1===e.children.length&&o!==a){const n=e.children[0],r=n.type,i=5===r||8===r;i&&0===Lt(n,t)&&(y|=1),d=i||2===r?n:e.children}else d=e.children}0!==y&&(f=String(y),m&&m.length&&(p=qn(m))),e.codegenNode=J(t,o,h,d,f,p,g,!!v,!1,i,e.loc)};function Un(e,t,n=!1){let{tag:r}=e;const i=Hn(r),s=De(e,"is");if(s)if(i||ve("COMPILER_IS_ON_ELEMENT",t)){const e=6===s.type?s.value&&Z(s.value.content,!0):s.exp;if(e)return te(t.helper(w),[e])}else 6===s.type&&s.value.content.startsWith("vue:")&&(r=s.value.content.slice(4));const o=Se(r)||t.isBuiltInComponent(r);return o?(n||t.helper(o),o):(t.helper(_),t.components.add(r),He(r,"component"))}function Vn(e,t,n=e.props,r,i,o=!1){const{tag:a,loc:c,children:u}=e;let l=[];const h=[],d=[],f=u.length>0;let p=!1,m=0,g=!1,y=!1,v=!1,_=!1,w=!1,b=!1;const E=[],T=e=>{l.length&&(h.push(X(jn(l),c)),l=[]),e&&h.push(e)},S=({key:e,value:n})=>{if(Te(e)){const o=e.content,a=(0,s.F7)(o);if(!a||r&&!i||"onclick"===o.toLowerCase()||"onUpdate:modelValue"===o||(0,s.Gg)(o)||(_=!0),a&&(0,s.Gg)(o)&&(b=!0),a&&14===n.type&&(n=n.arguments[0]),20===n.type||(4===n.type||8===n.type)&&Lt(n,t)>0)return;"ref"===o?g=!0:"class"===o?y=!0:"style"===o?v=!0:"key"===o||E.includes(o)||E.push(o),!r||"class"!==o&&"style"!==o||E.includes(o)||E.push(o)}else w=!0};for(let k=0;k<n.length;k++){const i=n[k];if(6===i.type){const{loc:e,name:n,nameLoc:r,value:s}=i;let o=!0;if("ref"===n&&(g=!0,t.scopes.vFor>0&&l.push(Q(Z("ref_for",!0),Z("true")))),"is"===n&&(Hn(a)||s&&s.content.startsWith("vue:")||ve("COMPILER_IS_ON_ELEMENT",t)))continue;l.push(Q(Z(n,!0,r),Z(s?s.content:"",o,s?s.loc:e)))}else{const{name:n,arg:u,exp:g,loc:y,modifiers:v}=i,_="bind"===n,b="on"===n;if("slot"===n){r||t.onError(Ee(40,y));continue}if("once"===n||"memo"===n)continue;if("is"===n||_&&Pe(u,"is")&&(Hn(a)||ve("COMPILER_IS_ON_ELEMENT",t)))continue;if(b&&o)continue;if((_&&Pe(u,"key")||b&&f&&Pe(u,"vue:before-update"))&&(p=!0),_&&Pe(u,"ref")&&t.scopes.vFor>0&&l.push(Q(Z("ref_for",!0),Z("true"))),!u&&(_||b)){if(w=!0,g)if(_){if(T(),ve("COMPILER_V_BIND_OBJECT_ORDER",t)){h.unshift(g);continue}h.push(g)}else T({type:14,loc:y,callee:t.helper(D),arguments:r?[g]:[g,"true"]});else t.onError(Ee(_?34:35,y));continue}_&&v.includes("prop")&&(m|=32);const E=t.directiveTransforms[n];if(E){const{props:n,needRuntime:r}=E(i,e,t);!o&&n.forEach(S),b&&u&&!Te(u)?T(X(n,c)):l.push(...n),r&&(d.push(i),(0,s.yk)(r)&&Mn.set(i,r))}else(0,s.wh)(n)||(d.push(i),f&&(p=!0))}}let I;if(h.length?(T(),I=h.length>1?te(t.helper(A),h,c):h[0]):l.length&&(I=X(jn(l),c)),w?m|=16:(y&&!r&&(m|=2),v&&!r&&(m|=4),E.length&&(m|=8),_&&(m|=32)),p||0!==m&&32!==m||!(g||b||d.length>0)||(m|=512),!t.inSSR&&I)switch(I.type){case 15:let e=-1,n=-1,r=!1;for(let t=0;t<I.properties.length;t++){const i=I.properties[t].key;Te(i)?"class"===i.content?e=t:"style"===i.content&&(n=t):i.isHandlerKey||(r=!0)}const i=I.properties[e],s=I.properties[n];r?I=te(t.helper(x),[I]):(i&&!Te(i.value)&&(i.value=te(t.helper(R),[i.value])),s&&(v||4===s.value.type&&"["===s.value.content.trim()[0]||17===s.value.type)&&(s.value=te(t.helper(N),[s.value])));break;case 14:break;default:I=te(t.helper(x),[te(t.helper(O),[I])]);break}return{props:I,directives:d,patchFlag:m,dynamicPropNames:E,shouldUseBlock:p}}function jn(e){const t=new Map,n=[];for(let r=0;r<e.length;r++){const i=e[r];if(8===i.key.type||!i.key.isStatic){n.push(i);continue}const o=i.key.content,a=t.get(o);a?("style"===o||"class"===o||(0,s.F7)(o))&&Bn(a,i):(t.set(o,i),n.push(i))}return n}function Bn(e,t){17===e.value.type?e.value.elements.push(t.value):e.value=Y([e.value,t.value],e.loc)}function $n(e,t){const n=[],r=Mn.get(e);r?n.push(t.helperString(r)):(t.helper(b),t.directives.add(e.name),n.push(He(e.name,"directive")));const{loc:i}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push("void 0"),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const t=Z("true",!1,i);n.push(X(e.modifiers.map((e=>Q(e,t))),i))}return Y(n,e.loc)}function qn(e){let t="[";for(let n=0,r=e.length;n<r;n++)t+=JSON.stringify(e[n]),n<r-1&&(t+=", ");return t+"]"}function Hn(e){return"component"===e||"Component"===e}const zn=(e,t)=>{if(Ve(e)){const{children:n,loc:r}=e,{slotName:i,slotProps:s}=Kn(e,t),o=[t.prefixIdentifiers?"_ctx.$slots":"$slots",i,"{}","undefined","true"];let a=2;s&&(o[2]=s,a=3),n.length&&(o[3]=ne([],n,!1,!1,r),a=4),t.scopeId&&!t.slotted&&(a=5),o.splice(a),e.codegenNode=te(t.helper(I),o,r)}};function Kn(e,t){let n,r='"default"';const i=[];for(let o=0;o<e.props.length;o++){const t=e.props[o];6===t.type?t.value&&("name"===t.name?r=JSON.stringify(t.value.content):(t.name=(0,s._A)(t.name),i.push(t))):"bind"===t.name&&Pe(t.arg,"name")?t.exp&&(r=t.exp):("bind"===t.name&&t.arg&&Te(t.arg)&&(t.arg.content=(0,s._A)(t.arg.content)),i.push(t))}if(i.length>0){const{props:r,directives:s}=Vn(e,t,i,!1,!1);n=r,s.length&&t.onError(Ee(36,s[0].loc))}return{slotName:r,slotProps:n}}const Gn=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Wn=(e,t,n,r)=>{const{loc:i,modifiers:o,arg:a}=e;let c;if(e.exp||o.length||n.onError(Ee(35,i)),4===a.type)if(a.isStatic){let e=a.content;0,e.startsWith("vue:")&&(e=`vnode-${e.slice(4)}`);const n=0!==t.tagType||e.startsWith("vnode")||!/[A-Z]/.test(e)?(0,s.hR)((0,s._A)(e)):`on:${e}`;c=Z(n,!0,a.loc)}else c=ee([`${n.helperString(M)}(`,a,")"]);else c=a,c.children.unshift(`${n.helperString(M)}(`),c.children.push(")");let u=e.exp;u&&!u.content.trim()&&(u=void 0);let l=n.cacheHandlers&&!u&&!n.inVOnce;if(u){const e=xe(u.content),t=!(e||Gn.test(u.content)),n=u.content.includes(";");0,(t||l&&e)&&(u=ee([`${t?"$event":"(...args)"} => ${n?"{":"("}`,u,n?"}":")"]))}let h={props:[Q(c,u||Z("() => {}",!1,i))]};return r&&(h=r(h)),l&&(h.props[0].value=n.cache(h.props[0].value)),h.props.forEach((e=>e.key.isHandlerKey=!0)),h},Jn=(e,t,n)=>{const{modifiers:r,loc:i}=e,o=e.arg;let{exp:a}=e;if(!a&&4===o.type){const t=(0,s._A)(o.content);a=e.exp=Z(t,!1,o.loc)}return 4!==o.type?(o.children.unshift("("),o.children.push(') || ""')):o.isStatic||(o.content=`${o.content} || ""`),r.includes("camel")&&(4===o.type?o.isStatic?o.content=(0,s._A)(o.content):o.content=`${n.helperString(P)}(${o.content})`:(o.children.unshift(`${n.helperString(P)}(`),o.children.push(")"))),n.inSSR||(r.includes("prop")&&Yn(o,"."),r.includes("attr")&&Yn(o,"^")),!a||4===a.type&&!a.content.trim()?(n.onError(Ee(34,i)),{props:[Q(o,Z("",!0,i))]}):{props:[Q(o,a)]}},Yn=(e,t)=>{4===e.type?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},Xn=(e,t)=>{if(0===e.type||1===e.type||11===e.type||10===e.type)return()=>{const n=e.children;let r,i=!1;for(let e=0;e<n.length;e++){const t=n[e];if(Me(t)){i=!0;for(let i=e+1;i<n.length;i++){const s=n[i];if(!Me(s)){r=void 0;break}r||(r=n[e]=ee([t],t.loc)),r.children.push(" + ",s),n.splice(i,1),i--}}}if(i&&(1!==n.length||0!==e.type&&(1!==e.type||0!==e.tagType||e.props.find((e=>7===e.type&&!t.directiveTransforms[e.name]))||"template"===e.tag)))for(let e=0;e<n.length;e++){const r=n[e];if(Me(r)||8===r.type){const i=[];2===r.type&&" "===r.content||i.push(r),t.ssr||0!==Lt(r,t)||i.push("1"),n[e]={type:12,content:r,loc:r.loc,codegenNode:te(t.helper(y),i)}}}}},Qn=new WeakSet,Zn=(e,t)=>{if(1===e.type&&Oe(e,"once",!0)){if(Qn.has(e)||t.inVOnce||t.inSSR)return;return Qn.add(e),t.inVOnce=!0,t.helper(F),()=>{t.inVOnce=!1;const e=t.currentNode;e.codegenNode&&(e.codegenNode=t.cache(e.codegenNode,!0))}}},er=(e,t,n)=>{const{exp:r,arg:i}=e;if(!r)return n.onError(Ee(41,e.loc)),tr();const o=r.loc.source,a=4===r.type?r.content:o,c=n.bindingMetadata[o];if("props"===c||"props-aliased"===c)return n.onError(Ee(44,r.loc)),tr();const u=!1;if(!a.trim()||!xe(a)&&!u)return n.onError(Ee(42,r.loc)),tr();const l=i||Z("modelValue",!0),h=i?Te(i)?`onUpdate:${(0,s._A)(i.content)}`:ee(['"onUpdate:" + ',i]):"onUpdate:modelValue";let d;const f=n.isTS?"($event: any)":"$event";d=ee([`${f} => ((`,r,") = $event)"]);const p=[Q(l,e.exp),Q(h,d)];if(e.modifiers.length&&1===t.tagType){const t=e.modifiers.map((e=>(ke(e)?e:JSON.stringify(e))+": true")).join(", "),n=i?Te(i)?`${i.content}Modifiers`:ee([i,' + "Modifiers"']):"modelModifiers";p.push(Q(n,Z(`{ ${t} }`,!1,e.loc,2)))}return tr(p)};function tr(e=[]){return{props:e}}const nr=/[\w).+\-_$\]]/,rr=(e,t)=>{ve("COMPILER_FILTERS",t)&&(5===e.type&&ir(e.content,t),1===e.type&&e.props.forEach((e=>{7===e.type&&"for"!==e.name&&e.exp&&ir(e.exp,t)})))};function ir(e,t){if(4===e.type)sr(e,t);else for(let n=0;n<e.children.length;n++){const r=e.children[n];"object"===typeof r&&(4===r.type?sr(r,t):8===r.type?ir(e,t):5===r.type&&ir(r.content,t))}}function sr(e,t){const n=e.content;let r,i,s,o,a=!1,c=!1,u=!1,l=!1,h=0,d=0,f=0,p=0,m=[];for(s=0;s<n.length;s++)if(i=r,r=n.charCodeAt(s),a)39===r&&92!==i&&(a=!1);else if(c)34===r&&92!==i&&(c=!1);else if(u)96===r&&92!==i&&(u=!1);else if(l)47===r&&92!==i&&(l=!1);else if(124!==r||124===n.charCodeAt(s+1)||124===n.charCodeAt(s-1)||h||d||f){switch(r){case 34:c=!0;break;case 39:a=!0;break;case 96:u=!0;break;case 40:f++;break;case 41:f--;break;case 91:d++;break;case 93:d--;break;case 123:h++;break;case 125:h--;break}if(47===r){let e,t=s-1;for(;t>=0;t--)if(e=n.charAt(t)," "!==e)break;e&&nr.test(e)||(l=!0)}}else void 0===o?(p=s+1,o=n.slice(0,s).trim()):g();function g(){m.push(n.slice(p,s).trim()),p=s+1}if(void 0===o?o=n.slice(0,s).trim():0!==p&&g(),m.length){for(s=0;s<m.length;s++)o=or(o,m[s],t);e.content=o}}function or(e,t,n){n.helper(E);const r=t.indexOf("(");if(r<0)return n.filters.add(t),`${He(t,"filter")}(${e})`;{const i=t.slice(0,r),s=t.slice(r+1);return n.filters.add(i),`${He(i,"filter")}(${e}${")"!==s?","+s:s}`}}const ar=new WeakSet,cr=(e,t)=>{if(1===e.type){const n=Oe(e,"memo");if(!n||ar.has(e))return;return ar.add(e),()=>{const r=e.codegenNode||t.currentNode.codegenNode;r&&13===r.type&&(1!==e.tagType&&ce(r,t),e.codegenNode=te(t.helper(q),[n.exp,ne(void 0,r),"_cache",String(t.cached++)]))}}};function ur(e){return[[Zn,vn,cr,Sn,rr,zn,Fn,Nn,Xn],{on:Wn,bind:Jn,model:er}]}function lr(e,t={}){const n=t.onError||we,r="module"===t.mode;!0===t.prefixIdentifiers?n(Ee(47)):r&&n(Ee(48));const i=!1;t.cacheHandlers&&n(Ee(49)),t.scopeId&&!r&&n(Ee(50));const o=(0,s.l7)({},t,{prefixIdentifiers:i}),a=(0,s.HD)(e)?xt(e,o):e,[c,u]=ur();return $t(a,(0,s.l7)({},o,{nodeTransforms:[...c,...t.nodeTransforms||[]],directiveTransforms:(0,s.l7)({},u,t.directiveTransforms||{})})),Yt(a,o)}const hr=()=>({props:[]}),dr=Symbol(""),fr=Symbol(""),pr=Symbol(""),mr=Symbol(""),gr=Symbol(""),yr=Symbol(""),vr=Symbol(""),_r=Symbol(""),wr=Symbol(""),br=Symbol("");let Er;function Tr(e,t=!1){return Er||(Er=document.createElement("div")),t?(Er.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Er.children[0].getAttribute("foo")):(Er.innerHTML=e,Er.textContent)}K({[dr]:"vModelRadio",[fr]:"vModelCheckbox",[pr]:"vModelText",[mr]:"vModelSelect",[gr]:"vModelDynamic",[yr]:"withModifiers",[vr]:"withKeys",[_r]:"vShow",[wr]:"Transition",[br]:"TransitionGroup"});const Sr={parseMode:"html",isVoidTag:s.WB,isNativeTag:e=>(0,s.eS)(e)||(0,s.aN)(e)||(0,s.TJ)(e),isPreTag:e=>"pre"===e,decodeEntities:Tr,isBuiltInComponent:e=>"Transition"===e||"transition"===e?wr:"TransitionGroup"===e||"transition-group"===e?br:void 0,getNamespace(e,t,n){let r=t?t.ns:n;if(t&&2===r)if("annotation-xml"===t.tag){if("svg"===e)return 1;t.props.some((e=>6===e.type&&"encoding"===e.name&&null!=e.value&&("text/html"===e.value.content||"application/xhtml+xml"===e.value.content)))&&(r=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&"mglyph"!==e&&"malignmark"!==e&&(r=0);else t&&1===r&&("foreignObject"!==t.tag&&"desc"!==t.tag&&"title"!==t.tag||(r=0));if(0===r){if("svg"===e)return 1;if("math"===e)return 2}return r}},Ir=e=>{1===e.type&&e.props.forEach(((t,n)=>{6===t.type&&"style"===t.name&&t.value&&(e.props[n]={type:7,name:"bind",arg:Z("style",!0,t.loc),exp:kr(t.value.content,t.loc),modifiers:[],loc:t.loc})}))},kr=(e,t)=>{const n=(0,s.yL)(e);return Z(JSON.stringify(n),!1,t,3)};function Cr(e,t){return Ee(e,t,void 0)}const Ar=(e,t,n)=>{const{exp:r,loc:i}=e;return r||n.onError(Cr(53,i)),t.children.length&&(n.onError(Cr(54,i)),t.children.length=0),{props:[Q(Z("innerHTML",!0,i),r||Z("",!0))]}},Rr=(e,t,n)=>{const{exp:r,loc:i}=e;return r||n.onError(Cr(55,i)),t.children.length&&(n.onError(Cr(56,i)),t.children.length=0),{props:[Q(Z("textContent",!0),r?Lt(r,n)>0?r:te(n.helperString(C),[r],i):Z("",!0))]}},Nr=(e,t,n)=>{const r=er(e,t,n);if(!r.props.length||1===t.tagType)return r;e.arg&&n.onError(Cr(58,e.arg.loc));const{tag:i}=t,s=n.isCustomElement(i);if("input"===i||"textarea"===i||"select"===i||s){let o=pr,a=!1;if("input"===i||s){const r=De(t,"type");if(r){if(7===r.type)o=gr;else if(r.value)switch(r.value.content){case"radio":o=dr;break;case"checkbox":o=fr;break;case"file":a=!0,n.onError(Cr(59,e.loc));break;default:break}}else Le(t)&&(o=gr)}else"select"===i&&(o=mr);a||(r.needRuntime=n.helper(o))}else n.onError(Cr(57,e.loc));return r.props=r.props.filter((e=>!(4===e.key.type&&"modelValue"===e.key.content))),r},xr=(0,s.fY)("passive,once,capture"),Or=(0,s.fY)("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),Dr=(0,s.fY)("left,right"),Pr=(0,s.fY)("onkeyup,onkeydown,onkeypress",!0),Lr=(e,t,n,r)=>{const i=[],s=[],o=[];for(let a=0;a<t.length;a++){const c=t[a];"native"===c&&_e("COMPILER_V_ON_NATIVE",n,r)||xr(c)?o.push(c):Dr(c)?Te(e)?Pr(e.content)?i.push(c):s.push(c):(i.push(c),s.push(c)):Or(c)?s.push(c):i.push(c)}return{keyModifiers:i,nonKeyModifiers:s,eventOptionModifiers:o}},Mr=(e,t)=>{const n=Te(e)&&"onclick"===e.content.toLowerCase();return n?Z(t,!0):4!==e.type?ee(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e},Fr=(e,t,n)=>Wn(e,t,n,(t=>{const{modifiers:r}=e;if(!r.length)return t;let{key:i,value:o}=t.props[0];const{keyModifiers:a,nonKeyModifiers:c,eventOptionModifiers:u}=Lr(i,r,n,e.loc);if(c.includes("right")&&(i=Mr(i,"onContextmenu")),c.includes("middle")&&(i=Mr(i,"onMouseup")),c.length&&(o=te(n.helper(yr),[o,JSON.stringify(c)])),!a.length||Te(i)&&!Pr(i.content)||(o=te(n.helper(vr),[o,JSON.stringify(a)])),u.length){const e=u.map(s.kC).join("");i=Te(i)?Z(`${i.content}${e}`,!0):ee(["(",i,`) + "${e}"`])}return{props:[Q(i,o)]}})),Ur=(e,t,n)=>{const{exp:r,loc:i}=e;return r||n.onError(Cr(61,i)),{props:[],needRuntime:n.helper(_r)}};const Vr=(e,t)=>{1!==e.type||0!==e.tagType||"script"!==e.tag&&"style"!==e.tag||t.removeNode()},jr=[Ir],Br={cloak:hr,html:Ar,text:Rr,model:Nr,on:Fr,show:Ur};function $r(e,t={}){return lr(e,(0,s.l7)({},Sr,t,{nodeTransforms:[Vr,...jr,...t.nodeTransforms||[]],directiveTransforms:(0,s.l7)({},Br,t.directiveTransforms||{}),transformHoist:null}))}const qr=new WeakMap;function Hr(e){let t=qr.get(null!=e?e:s.kT);return t||(t=Object.create(null),qr.set(null!=e?e:s.kT,t)),t}function zr(e,t){if(!(0,s.HD)(e)){if(!e.nodeType)return s.dG;e=e.innerHTML}const n=e,i=Hr(t),o=i[n];if(o)return o;if("#"===e[0]){const t=document.querySelector(e);0,e=t?t.innerHTML:""}const a=(0,s.l7)({hoistStatic:!0,onError:void 0,onWarn:s.dG},t);a.isCustomElement||"undefined"===typeof customElements||(a.isCustomElement=e=>!!customElements.get(e));const{code:c}=$r(e,a);const u=new Function("Vue",c)(r);return u._rc=!0,i[n]=u}(0,i.Y1)(zr)},509:function(e,t,n){var r=n(9985),i=n(3691),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},3550:function(e,t,n){var r=n(598),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s("Can't set "+i(e)+" as a prototype")}},767:function(e,t,n){var r=n(3622),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},5027:function(e,t,n){var r=n(8999),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},7075:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},4872:function(e,t,n){var r,i,s,o=n(7075),a=n(7697),c=n(9037),u=n(9985),l=n(8999),h=n(6812),d=n(926),f=n(3691),p=n(5773),m=n(1880),g=n(2148),y=n(3622),v=n(1868),_=n(9385),w=n(4201),b=n(4630),E=n(618),T=E.enforce,S=E.get,I=c.Int8Array,k=I&&I.prototype,C=c.Uint8ClampedArray,A=C&&C.prototype,R=I&&v(I),N=k&&v(k),x=Object.prototype,O=c.TypeError,D=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!_&&"Opera"!==d(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(U,t)||h(V,t)},B=function(e){var t=v(e);if(l(t)){var n=S(t);return n&&h(n,L)?n[L]:B(t)}},$=function(e){if(!l(e))return!1;var t=d(e);return h(U,t)||h(V,t)},q=function(e){if($(e))return e;throw new O("Target is not a typed array")},H=function(e){if(u(e)&&(!_||y(R,e)))return e;throw new O(f(e)+" is not a typed array constructor")},z=function(e,t,n,r){if(a){if(n)for(var i in U){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}N[e]&&!n||m(N,e,n?t:M&&k[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(_){if(n)for(r in U)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(R[e]&&!n)return;try{return m(R,e,n?t:M&&R[e]||t)}catch(s){}}for(r in U)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in U)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(R)||R===Function.prototype)&&(R=function(){throw new O("Incorrect invocation")},M))for(r in U)c[r]&&_(c[r],R);if((!M||!N||N===x)&&(N=R.prototype,M))for(r in U)c[r]&&_(c[r].prototype,N);if(M&&v(A)!==N&&_(A,N),a&&!h(N,D))for(r in F=!0,g(N,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),U)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:q,aTypedArrayConstructor:H,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:B,isView:j,isTypedArray:$,TypedArray:R,TypedArrayPrototype:N}},9976:function(e,t,n){var r=n(6310);e.exports=function(e,t,n){var i=0,s=arguments.length>2?n:r(t),o=new e(s);while(s>i)o[i]=t[i++];return o}},4328:function(e,t,n){var r=n(5290),i=n(7578),s=n(6310),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!==n){while(u>l)if(a=c[l++],a!==a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5649:function(e,t,n){var r=n(7697),i=n(2297),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},6166:function(e,t,n){var r=n(6310);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},6134:function(e,t,n){var r=n(6310),i=n(8700),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},6648:function(e,t,n){var r=n(8844),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},926:function(e,t,n){var r=n(3043),i=n(9985),s=n(6648),o=n(4201),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"===(r=s(t))&&i(t.callee)?"Arguments":r}},8758:function(e,t,n){var r=n(6812),i=n(9152),s=n(2474),o=n(2560);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},1748:function(e,t,n){var r=n(3689);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},5773:function(e,t,n){var r=n(7697),i=n(2560),s=n(5684);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5684:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2148:function(e,t,n){var r=n(8702),i=n(2560);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},1880:function(e,t,n){var r=n(9985),i=n(2560),s=n(8702),o=n(5014);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},5014:function(e,t,n){var r=n(9037),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},7697:function(e,t,n){var r=n(3689);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6420:function(e,t,n){var r=n(9037),i=n(8999),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},5565:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},7136:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},71:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(e,t,n){var r,i,s=n(9037),o=n(71),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},2739:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6610:function(e,t,n){var r=n(8844),i=Error,s=r("".replace),o=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},9989:function(e,t,n){var r=n(9037),i=n(2474).f,s=n(5773),o=n(1880),a=n(5014),c=n(8758),u=n(5266);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},3689:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},7215:function(e,t,n){var r=n(3689);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},2615:function(e,t,n){var r=n(7215),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},1236:function(e,t,n){var r=n(7697),i=n(6812),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},2743:function(e,t,n){var r=n(8844),i=n(509);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},8844:function(e,t,n){var r=n(7215),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},6058:function(e,t,n){var r=n(9037),i=n(9985),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},4849:function(e,t,n){var r=n(509),i=n(981);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},9037:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:function(e,t,n){var r=n(8844),i=n(690),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},7248:function(e){e.exports={}},8506:function(e,t,n){var r=n(7697),i=n(3689),s=n(6420);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},4413:function(e,t,n){var r=n(8844),i=n(3689),s=n(6648),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},3457:function(e,t,n){var r=n(9985),i=n(8999),s=n(9385);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},6738:function(e,t,n){var r=n(8844),i=n(9985),s=n(4091),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},618:function(e,t,n){var r,i,s,o=n(9834),a=n(9037),c=n(8999),u=n(5773),l=n(6812),h=n(4091),d=n(2713),f=n(7248),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var _=h.state||(h.state=new g);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw new m(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},s=function(e){return _.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(l(e,w))throw new m(p);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},s=function(e){return l(e,w)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},2297:function(e,t,n){var r=n(6648);e.exports=Array.isArray||function(e){return"Array"===r(e)}},9401:function(e,t,n){var r=n(926);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},9985:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},5266:function(e,t,n){var r=n(3689),i=n(9985),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},981:function(e){e.exports=function(e){return null===e||void 0===e}},8999:function(e,t,n){var r=n(9985);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},598:function(e,t,n){var r=n(8999);e.exports=function(e){return r(e)||null===e}},3931:function(e){e.exports=!1},734:function(e,t,n){var r=n(6058),i=n(9985),s=n(3622),o=n(9525),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6310:function(e,t,n){var r=n(3126);e.exports=function(e){return r(e.length)}},8702:function(e,t,n){var r=n(8844),i=n(3689),s=n(9985),o=n(6812),a=n(7697),c=n(1236).CONFIGURABLE,u=n(6738),l=n(618),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(_,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return s(this)&&d(this).source||u(this)}),"toString")},8828:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},3841:function(e,t,n){var r=n(4327);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2560:function(e,t,n){var r=n(7697),i=n(8506),s=n(5648),o=n(5027),a=n(8360),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},2474:function(e,t,n){var r=n(7697),i=n(2615),s=n(9556),o=n(5684),a=n(5290),c=n(8360),u=n(6812),l=n(8506),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},2741:function(e,t,n){var r=n(4948),i=n(2739),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},7518:function(e,t){t.f=Object.getOwnPropertySymbols},1868:function(e,t,n){var r=n(6812),i=n(9985),s=n(690),o=n(2713),a=n(1748),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},3622:function(e,t,n){var r=n(8844);e.exports=r({}.isPrototypeOf)},4948:function(e,t,n){var r=n(8844),i=n(6812),s=n(5290),o=n(4328).indexOf,a=n(7248),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},9556:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},9385:function(e,t,n){var r=n(2743),i=n(5027),s=n(3550);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},5899:function(e,t,n){var r=n(2615),i=n(9985),s=n(8999),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},9152:function(e,t,n){var r=n(6058),i=n(8844),s=n(2741),o=n(7518),a=n(5027),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4684:function(e,t,n){var r=n(981),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},2713:function(e,t,n){var r=n(3430),i=n(4630),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},4091:function(e,t,n){var r=n(9037),i=n(5014),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},3430:function(e,t,n){var r=n(3931),i=n(4091);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(e,t,n){var r=n(3615),i=n(3689),s=n(9037),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(e,t,n){var r=n(8700),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},1530:function(e,t,n){var r=n(8732),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},5290:function(e,t,n){var r=n(4413),i=n(4684);e.exports=function(e){return r(i(e))}},8700:function(e,t,n){var r=n(8828);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},3126:function(e,t,n){var r=n(8700),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},690:function(e,t,n){var r=n(4684),i=Object;e.exports=function(e){return i(r(e))}},8732:function(e,t,n){var r=n(2615),i=n(8999),s=n(734),o=n(4849),a=n(5899),c=n(4201),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},8360:function(e,t,n){var r=n(8732),i=n(734);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},3043:function(e,t,n){var r=n(4201),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},4327:function(e,t,n){var r=n(926),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},3691:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},4630:function(e,t,n){var r=n(8844),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9525:function(e,t,n){var r=n(146);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(e,t,n){var r=n(7697),i=n(3689);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1500:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},9834:function(e,t,n){var r=n(9037),i=n(9985),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},4201:function(e,t,n){var r=n(9037),i=n(3430),s=n(6812),o=n(4630),a=n(146),c=n(9525),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},560:function(e,t,n){var r=n(9989),i=n(690),s=n(6310),o=n(5649),a=n(5565),c=n(3689),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},4224:function(e,t,n){var r=n(6166),i=n(4872),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},1121:function(e,t,n){var r=n(4872),i=n(8844),s=n(509),o=n(9976),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},7133:function(e,t,n){var r=n(6134),i=n(4872),s=n(9401),o=n(8700),a=n(1530),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},3429:function(e,t,n){var r=n(9989),i=n(9037),s=n(6058),o=n(5684),a=n(2560).f,c=n(6812),u=n(767),l=n(3457),h=n(3841),d=n(7136),f=n(6610),p=n(7697),m=n(3931),g="DOMException",y=s("Error"),v=s(g),_=function(){u(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=new y(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,_),r},w=_.prototype=v.prototype,b="stack"in new y(g),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,g),S=!!T&&!(T.writable&&T.configurable),I=b&&!S&&!E;r({global:!0,constructor:!0,forced:m||I},{DOMException:I?_:v});var k=s(g),C=k.prototype;if(C.constructor!==k)for(var A in m||a(C,"constructor",o(1,k)),d)if(c(d,A)){var R=d[A],N=R.s;c(k,N)||a(k,N,o(6,R.c))}},8858:function(e,t,n){var r=n(1880),i=n(8844),s=n(4327),o=n(1500),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),o(t,1);var i,a=s(e),c=s(n),f=0,p=0,m=!1,g=r.length;while(f<g)i=r[f++],m||i.key===a?(m=!0,l(this,i.key)):p++;while(p<g)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},1318:function(e,t,n){var r=n(1880),i=n(8844),s=n(4327),o=n(1500),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);o(t,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},3228:function(e,t,n){var r=n(7697),i=n(8844),s=n(2148),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},7077:function(e,t,n){n.d(t,{Jn:function(){return me},qX:function(){return he},Xd:function(){return le},Mq:function(){return ye},ZF:function(){return ge},KN:function(){return ve}});n(560);var r=n(7142),i=n(5168),s=n(223);n(3429);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){v=e(v)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}_((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const x="@firebase/app",O="0.9.13",D=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",J="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.23.0",se="[DEFAULT]",oe={[x]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[J]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ie;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new pe(n,i,c);return ae.set(o,u),u}function ye(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.aH)())return ge();if(!t)throw fe.create("no-app",{appName:e});return t}function ve(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}le(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",we=1,be="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=S(_e,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(be)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Se(e){try{const t=await Te(),n=await t.transaction(be).objectStore(be).get(ke(e));return n}catch(t){if(t instanceof s.ZR)D.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ie(e,t){try{const n=await Te(),r=n.transaction(be,"readwrite"),i=r.objectStore(be);await i.put(t,ke(e)),await r.done}catch(n){if(n instanceof s.ZR)D.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=1024,Ae=2592e6;class Re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ne(),{heartbeatsToSend:t,unsentEntries:n}=xe(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function xe(e,t=Ce){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),De(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){le(new r.wA("platform-logger",(e=>new R(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new Re(e)),"PRIVATE")),ve(x,O,e),ve(x,O,"esm2017"),ve("fire-js","")}Pe("")},7142:function(e,t,n){n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){n.d(t,{Yd:function(){return u},in:function(){return i}});n(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},7795:function(e,t,n){n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},1588:function(e,t,n){n.d(t,{v0:function(){return Pr},e5:function(){return St}});n(560),n(8858),n(1318),n(3228);var r=n(223),i=n(7077);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].WARN&&h.warn(`Auth (${i.Jn}): ${e}`,...t)}function f(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function m(e,...t){return y(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function w(e,t){e||_(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function O(e,t,n,i,s={}){return D(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(L(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function D(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),t);try{const t=new M(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw F(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);p(e,a)}}catch(s){if(s instanceof r.ZR)throw s;p(e,"network-request-failed",{message:String(s)})}}async function P(e,t,n,r,i={}){const s=await O(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function L(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?C(e.config,i):`${e.config.apiScheme}://${i}`}class M{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return O(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return O(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=q(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:j($(s.auth_time)),issuedAtTime:j($(s.iat)),expirationTime:j($(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function $(e){return 1e3*Number(e)}function q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function H(e){const t=q(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&K(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function K({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e){var t;const n=e.auth,r=await e.getIdToken(),i=await z(e,V(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Q(s.providerUserInfo):[],a=X(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new W(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Y(e){const t=(0,r.m9)(e);await J(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function X(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function Q(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t){const n=await D(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=L(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):H(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await Z(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ee;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ne{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await z(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return B(this,e)}reload(){return Y(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await z(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=t;v(_&&T,e,"internal-error");const S=ee.fromJSON(this.name,T);v("string"===typeof _,e,"internal-error"),te(l,e.name),te(h,e.name),v("boolean"===typeof w,e,"internal-error"),v("boolean"===typeof b,e,"internal-error"),te(d,e.name),te(f,e.name),te(p,e.name),te(m,e.name),te(g,e.name),te(y,e.name);const I=new ne({uid:_,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new ee;r.updateFromServerResponse(t);const i=new ne({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await J(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Map;function ie(e){w(e instanceof Function,"Expected a class definition");let t=re.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,re.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const oe=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,i),this.fullPersistenceKey=ae("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(ie(oe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ie(oe);const s=ae(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ne._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new ce(i,e,n)):new ce(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(le(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function le(e=(0,r.z$)()){return/firefox\//i.test(e)}function he(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,r.z$)()){return/crios\//i.test(e)}function fe(e=(0,r.z$)()){return/iemobile/i.test(e)}function pe(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ve(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return(0,r.w1)()&&10===document.documentMode}function we(e=(0,r.z$)()){return ye(e)||pe(e)||ge(e)||me(e)||/windows phone/i.test(e)||fe(e)}function be(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.z$)());break;case"Worker":n=`${ue((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(e,t){return O(e,"GET","/v2/recaptchaConfig",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e){return void 0!==e&&void 0!==e.enterprise}class Ie{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Ce(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ke().appendChild(r)}))}function Ae(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Re="https://www.google.com/recaptcha/enterprise.js?render=",Ne="recaptcha-enterprise",xe="NO_RECAPTCHA";class Oe{constructor(e){this.type=Ne,this.auth=Me(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Te(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Ie(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Se(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(xe)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Se(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Ce(Re+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function De(e,t,n,r=!1){const i=new Oe(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fe(this),this.idTokenSubscription=new Fe(this),this.beforeStateQueue=new Pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ie(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await J(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ie(e))}))}async initializeRecaptchaConfig(){const e=await Te(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ie(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Oe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ie(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Me(e){return(0,r.m9)(e)}class Fe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ve(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ie);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function je(e,t,n){const r=Me(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Be(t),{host:o,port:a}=$e(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||He()}function Be(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $e(e){const t=Be(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:qe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:qe(t)}}}function qe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function He(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(e,t){return O(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ge(e,t){return P(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function We(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}async function Je(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends ze{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ye(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ye(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await De(e,n,"signInWithPassword");return Ge(e,t)}return Ge(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await De(e,n,"signInWithPassword");return Ge(e,t)}return Promise.reject(t)}));case"emailLink":return We(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ke(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t){return P(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="http://localhost";class Ze extends ze{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ze(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}buildRequest(){const e={requestUri:Qe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return O(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}async function tt(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}async function nt(e,t){const n=await P(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return P(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,n),rt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ze{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new st({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class ct{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Ye._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return v(n,"argument-error"),Ye._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch(t){return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com",dt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ft.credential(t,n)}catch(r){return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com",ft.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com",pt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com",mt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ne._fromIdTokenResponse(e,n,r),s=yt(n),o=new gt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=yt(n);return new gt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function yt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,vt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new vt(e,t,n,r)}}function _t(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw vt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(e,t,n=!1){const r=await z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await z(e,_t(r,i,t,e),n);v(s.idToken,r,"internal-error");const o=q(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),gt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e,t,n=!1){const r="signIn",i=await _t(e,r,t),s=await gt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Tt(e,t){return Et(Me(e),t)}function St(e,t,n){return Tt((0,r.m9)(e),ut.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function kt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function At(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}function Rt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function Nt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}new WeakMap;const xt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xt,"1"),this.storage.removeItem(xt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){const e=(0,r.z$)();return he(e)||ye(e)}const Pt=1e3,Lt=10;class Mt extends Ot{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dt()&&be(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);_e()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Lt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Pt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mt.type="LOCAL";const Ft=Mt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Ot{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ut.type="SESSION";const Vt=Ut;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Bt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await jt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt.receivers=[];class qt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=$t("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function zt(e){Ht().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return"undefined"!==typeof Ht()["WorkerGlobalScope"]&&"function"===typeof Ht()["importScripts"]}async function Gt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Wt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Jt(){return Kt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="firebaseLocalStorageDb",Xt=1,Qt="firebaseLocalStorage",Zt="fbase_key";class en{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function tn(e,t){return e.transaction([Qt],t?"readwrite":"readonly").objectStore(Qt)}function nn(){const e=indexedDB.deleteDatabase(Yt);return new en(e).toPromise()}function rn(){const e=indexedDB.open(Yt,Xt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Qt,{keyPath:Zt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Qt)?t(n):(n.close(),await nn(),t(await rn()))}))}))}async function sn(e,t,n){const r=tn(e,!0).put({[Zt]:t,value:n});return new en(r).toPromise()}async function on(e,t){const n=tn(e,!1).get(t),r=await new en(n).toPromise();return void 0===r?null:r.value}function an(e,t){const n=tn(e,!0).delete(t);return new en(n).toPromise()}const cn=800,un=3;class ln{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await rn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>un)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bt._getInstance(Jt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Gt(),!this.activeServiceWorker)return;this.sender=new qt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Wt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rn();return await sn(e,xt,"1"),await an(e,xt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>sn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>on(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>an(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=tn(e,!1).getAll();return new en(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ln.type="LOCAL";const hn=ln;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}function fn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}function pn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ae("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn="recaptcha";async function gn(e,t,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,e,"argument-error"),v(n.type===mn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await Ct(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await dn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn{constructor(e){this.providerId=yn.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,t){return gn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return yn.credentialFromTaggedObject(t)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vn(e,t){return t?ie(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.PROVIDER_ID="phone",yn.PHONE_SIGN_IN_METHOD="phone";class _n extends ze{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wn(e){return Et(e.auth,new _n(e),e.bypassAuthState)}function bn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),bt(n,new _n(e),e.bypassAuthState)}async function En(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),wt(n,new _n(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wn;case"linkViaPopup":case"linkViaRedirect":return En;case"reauthViaPopup":case"reauthViaRedirect":return bn;default:p(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new k(2e3,1e4);class In extends Tn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=$t();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Sn.get())};e()}}In.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kn="pendingRedirect",Cn=new Map;class An extends Tn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Cn.get(this.auth._key());if(!e){try{const t=await Rn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Cn.set(this.auth._key(),e)}return this.bypassAuthState||Cn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Rn(e,t){const n=On(t),r=xn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Nn(e,t){Cn.set(e._key(),t)}function xn(e){return ie(e._redirectPersistence)}function On(e){return ae(kn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(e,t,n=!1){const r=Me(e),i=vn(r,t),s=new An(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn=6e5;class Ln{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Un(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Fn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mn(e))}saveEventToCache(e){this.cachedEventUids.add(Mn(e)),this.lastProcessedEventTime=Date.now()}}function Mn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Fn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Un(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(e,t={}){return O(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bn=/^https?/;async function $n(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Vn(e);for(const r of t)try{if(qn(r))return}catch(n){}p(e,"unauthorized-domain")}function qn(e){const t=b(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Bn.test(n))return!1;if(jn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new k(3e4,6e4);function zn(){const e=Ht().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Kn(e){return new Promise(((t,n)=>{var r,i,s;function o(){zn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zn(),n(m(e,"network-request-failed"))},timeout:Hn.get()})}if(null===(i=null===(r=Ht().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ht().gapi)||void 0===s?void 0:s.load)){const t=Ae("iframefcb");return Ht()[t]=()=>{gapi.load?o():n(m(e,"network-request-failed"))},Ce(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Gn=null,e}))}let Gn=null;function Wn(e){return Gn=Gn||Kn(e),Gn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new k(5e3,15e3),Yn="__/auth/iframe",Xn="emulator/auth/iframe",Qn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function er(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,Xn):`https://${e.config.authDomain}/${Yn}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=Zn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function tr(e){const t=await Wn(e),n=Ht().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:er(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=m(e,"network-request-failed"),s=Ht().setTimeout((()=>{r(i)}),Jn.get());function o(){Ht().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rr=500,ir=600,sr="_blank",or="http://localhost";class ar{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function cr(e,t,n,i=rr,s=ir){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},nr),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=de(l)?sr:n),le(l)&&(t=t||or,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ve(l)&&"_self"!==c)return ur(t||"",c),new ar(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new ar(d)}function ur(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="__/auth/handler",hr="emulator/auth/handler",dr=encodeURIComponent("fac");async function fr(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof lt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${dr}=${encodeURIComponent(l)}`:"";return`${pr(e)}?${(0,r.xO)(u).slice(1)}${h}`}function pr({config:e}){return e.emulator?C(e,hr):`https://${e.authDomain}/${lr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="webStorageSupport";class gr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vt,this._completeRedirectFn=Dn,this._overrideRedirectResult=Nn}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await fr(e,t,n,b(),r);return cr(e,s,$t())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await fr(e,t,n,b(),r);return zt(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await tr(e),n=new Ln(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(mr,{type:mr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[mr];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$n(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||he()||ye()}}const yr=gr;class vr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class _r extends vr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new _r(e)}_finalizeEnroll(e,t,n){return At(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return fn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wr{constructor(){}static assertion(e){return _r._fromCredential(e)}}wr.FACTOR_ID="phone";class br{static assertionForEnrollment(e,t){return Er._fromSecret(e,t)}static assertionForSignIn(e,t){return Er._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;v("undefined"!==typeof t.auth,"internal-error");const n=await Rt(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Tr._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}br.FACTOR_ID="totp";class Er extends vr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Er(t,void 0,e)}static _fromEnrollmentId(e,t){return new Er(t,e)}async _finalizeEnroll(e,t,n){return v("undefined"!==typeof this.secret,e,"argument-error"),Nt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return pn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Tr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Tr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Sr(e)||Sr(t))&&(r=!0),r&&(Sr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Sr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Sr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Ir="@firebase/auth",kr="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},u=new Le(r,i,s,c);return Ve(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Me(e.getProvider("auth").getImmediate());return(e=>new Cr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Ir,kr,Ar(e)),(0,i.KN)(Ir,kr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=300,xr=(0,r.Pz)("authIdTokenMaxAge")||Nr;let Or=null;const Dr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xr)return;const i=null===n||void 0===n?void 0:n.token;Or!==i&&(Or=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ue(e,{popupRedirectResolver:yr,persistence:[hn,Ft,Vt]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=Dr(s);kt(n,e,(()=>e(n.currentUser))),It(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&je(n,`http://${o}`),n}Rr("Browser")},4287:function(e,t,n){n.d(t,{ET:function(){return zh},hJ:function(){return ih},oe:function(){return Hh},JU:function(){return sh},PL:function(){return qh},ad:function(){return ch}});n(4224),n(1121),n(7133),n(560),n(3429);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function v(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,_.apply(null,arguments)}function w(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function b(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function I(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(d(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function C(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",(()=>{}),t),h.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}function N(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function x(e){return-1!=N().indexOf(e)}function O(e){return O[" "](e),e}function D(e,t){var n=wr;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}O[" "]=function(){};var P,L,M=x("Opera"),F=x("Trident")||x("MSIE"),U=x("Edge"),V=U||F,j=x("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),B=-1!=N().toLowerCase().indexOf("webkit")&&!x("Edge");function $(){var e=h.document;return e?e.documentMode:void 0}e:{var q="",H=function(){var e=N();return j?/rv:([^\);]+)(\)|;)/.exec(e):U?/Edge\/([\d\.]+)/.exec(e):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):B?/WebKit\/(\S+)/.exec(e):M?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(H&&(q=H?H[1]:""),F){var z=$();if(null!=z&&z>parseFloat(q)){P=String(z);break e}}P=q}if(h.document&&F){var K=$();L=K||(parseInt(P,10)||void 0)}else L=void 0;var G=L;function W(e,t){if(C.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{O(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:J[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&W.$.h.call(this)}}b(W,C);var J={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function te(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ne(e){const t={};for(const n in e)t[n]=e[n];return t}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<re.length;t++)n=re[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}se.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ae(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Q(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),ue={};function le(e,t,n,r,i){if(r&&r.once)return fe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);return null}return n=we(n),e&&e[Y]?e.O(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!1,r,i)}function he(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,a=ve(e);if(a||(e[ce]=a=new se(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=de(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ge(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=ye;return e}function fe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,r,i);return null}return n=we(n),e&&e[Y]?e.P(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!0,r,i)}function pe(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);else r=f(r)?!!r.capture:!!r,n=we(n),e&&e[Y]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ae(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ve(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,i)),(n=-1<e?t[e]:null)&&me(n))}function me(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Y])oe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ge(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ve(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):Z(e)}}}function ge(e){return e in ue?ue[e]:ue[e]="on"+e}function ye(e,t){if(e.fa)e=!0;else{t=new W(t,this);var n=e.listener,r=e.la||e.src;e.ia&&me(e),e=n.call(r,t)}return e}function ve(e){return e=e[ce],e instanceof se?e:null}var _e="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[_e]||(e[_e]=function(t){return e.handleEvent(t)}),e[_e])}function be(){E.call(this),this.i=new se(this),this.S=this,this.J=null}function Ee(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new C(t,e);else if(t instanceof C)t.target=t.target||e;else{var i=t;t=new C(r,e),ie(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Te(o,r,!0,t)&&i}if(o=t.g=e,i=Te(o,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Te(o,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&oe(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}b(be,E),be.prototype[Y]=!0,be.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},be.prototype.N=function(){if(be.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Z(n[r]);delete t.g[e],t.h--}}this.J=null},be.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},be.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Se=h.JSON.stringify;class Ie{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ke(){var e=Pe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ce{constructor(){this.h=this.g=null}add(e,t){const n=Ae.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ae=new Ie((()=>new Re),(e=>e.reset()));class Re{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ne(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function xe(e){h.setTimeout((()=>{throw e}),0)}let Oe,De=!1,Pe=new Ce,Le=()=>{const e=h.Promise.resolve(void 0);Oe=()=>{e.then(Me)}};var Me=()=>{for(var e;e=ke();){try{e.h.call(e.g)}catch(n){xe(n)}var t=Ae;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}De=!1};function Fe(e,t){be.call(this),this.h=e||1,this.g=t||h,this.j=_(this.qb,this),this.l=Date.now()}function Ue(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ve(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function je(e){e.g=Ve((()=>{e.g=null,e.i&&(e.i=!1,je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}b(Fe,be),r=Fe.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ee(this,"tick"),this.ga&&(Ue(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Fe.$.N.call(this),Ue(this),delete this.g};class Be extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){E.call(this),this.h=e,this.g={}}b($e,E);var qe=[];function He(e,t,n,r){Array.isArray(n)||(n&&(qe[0]=n.toString()),n=qe);for(var i=0;i<n.length;i++){var s=le(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ze(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&me(e)}),e),e.g={}}function Ke(){this.g=!0}function Ge(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function We(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Je(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Xe(e,n)+(r?" "+r:"")}))}function Ye(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Xe(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Se(n)}catch(a){return t}}$e.prototype.N=function(){$e.$.N.call(this),ze(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ke.prototype.Ea=function(){this.g=!1},Ke.prototype.info=function(){};var Qe={},Ze=null;function et(){return Ze=Ze||new be}function tt(e){C.call(this,Qe.Ta,e)}function nt(e){const t=et();Ee(t,new tt(t))}function rt(e,t){C.call(this,Qe.STAT_EVENT,e),this.stat=t}function it(e){const t=et();Ee(t,new rt(t,e))}function st(e,t){C.call(this,Qe.Ua,e),this.size=t}function ot(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}Qe.Ta="serverreachability",b(tt,C),Qe.STAT_EVENT="statevent",b(rt,C),Qe.Ua="timingevent",b(st,C);var at={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ct={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ut(){}function lt(e){return e.h||(e.h=e.i())}function ht(){}ut.prototype.h=null;var dt,ft={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pt(){C.call(this,"d")}function mt(){C.call(this,"c")}function gt(){}function yt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new $e(this),this.P=_t,e=V?125:void 0,this.V=new Fe(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vt}function vt(){this.i=null,this.g="",this.h=!1}b(pt,C),b(mt,C),b(gt,ut),gt.prototype.g=function(){return new XMLHttpRequest},gt.prototype.i=function(){return{}},dt=new gt;var _t=45e3,wt={},bt={};function Et(e,t,n){e.L=1,e.v=Ht(Vt(t)),e.s=n,e.S=!0,Tt(e,null)}function Tt(e,t){e.G=Date.now(),Ct(e),e.A=Vt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),e.C=0,n=e.l.J,e.h=new vt,e.g=ur(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Be(_(e.Pa,e,e.g),e.O)),He(e.U,e.g,"readystatechange",e.nb),t=e.I?ne(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),nt(),Ge(e.j,e.u,e.A,e.m,e.W,e.s)}function St(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function It(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=kt(e,n),r==bt){4==t&&(e.o=4,it(14),i=!1),Je(e.j,e.m,null,"[Incomplete Response]");break}if(r==wt){e.o=4,it(15),Je(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Je(e.j,e.m,r,null),Ot(e,r)}St(e)&&r!=bt&&r!=wt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,it(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tr(t),t.M=!0,it(11))):(Je(e.j,e.m,n,"[Invalid Chunked Response]"),xt(e),Nt(e))}function kt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?bt:(n=Number(t.substring(n,r)),isNaN(n)?wt:(r+=1,r+n>t.length?bt:(t=t.slice(r,r+n),e.C=r+n,t)))}function Ct(e){e.Y=Date.now()+e.P,At(e,e.P)}function At(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ot(_(e.lb,e),t)}function Rt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Nt(e){0==e.l.H||e.J||ir(e.l,e)}function xt(e){Rt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ue(e.V),ze(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ot(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||dn(n.i,e)))if(!e.K&&dn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;rr(n),Kn(n)}er(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=ot(_(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else or(n,11)}else if((e.K||n.g==e)&&rr(n),!R(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(fn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,qt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=cr(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Rt(a),Ct(a)),r.g=o}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=u[0]&&"close"!=u[0]||or(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?or(n,7):zn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}nt(4)}catch(u){}}function Dt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Pt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Lt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Pt(e),r=Dt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=yt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Un(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=Un(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>l)&&(3!=l||V||this.g&&(this.h.h||this.g.ja()||Vn(this.g)))){this.J||4!=l||7==t||nt(8==t||0>=d?3:2),Rt(this);var n=this.g.da();this.ca=n;t:if(St(this)){var r=Vn(this.g);e="";var i=r.length,s=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xt(this),Nt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,We(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,it(12),xt(this),Nt(this);break e}Je(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ot(this,n)}this.S?(It(this,l,o),V&&this.i&&3==l&&(He(this.U,this.V,"tick",this.mb),this.V.start())):(Je(this.j,this.m,o,null),Ot(this,o)),4==l&&xt(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,Ct(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),xt(this),Nt(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=Un(this.g),t=this.g.ja();this.C<t.length&&(Rt(this),It(this,e,t),this.i&&4!=e&&Ct(this))}},r.cancel=function(){this.J=!0,xt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Ye(this.j,this.A),2!=this.L&&(nt(),it(17)),xt(this),this.o=2,Nt(this)):At(this,this.Y-e)};var Mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,jt(this,e.j),this.s=e.s,this.g=e.g,Bt(this,e.m),this.l=e.l;var t=e.i,n=new Zt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),$t(this,n),this.o=e.o}else e&&(t=String(e).match(Mt))?(this.h=!1,jt(this,t[1]||"",!0),this.s=zt(t[2]||""),this.g=zt(t[3]||"",!0),Bt(this,t[4]),this.l=zt(t[5]||"",!0),$t(this,t[6]||"",!0),this.o=zt(t[7]||"")):(this.h=!1,this.i=new Zt(null,this.h))}function Vt(e){return new Ut(e)}function jt(e,t,n){e.j=n?zt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function $t(e,t,n){t instanceof Zt?(e.i=t,on(e.i,e.h)):(n||(t=Kt(t,Xt)),e.i=new Zt(t,e.h))}function qt(e,t,n){e.i.set(t,n)}function Ht(e){return qt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function zt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Kt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Gt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Gt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Kt(t,Wt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Kt(t,Wt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Kt(n,"/"==n.charAt(0)?Yt:Jt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Kt(n,Qt)),e.join("")};var Wt=/[#\/\?@]/g,Jt=/[#\?:]/g,Yt=/[#\?]/g,Xt=/[#\?@]/g,Qt=/#/g;function Zt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function en(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function tn(e,t){en(e),t=sn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nn(e,t){return en(e),t=sn(e,t),e.g.has(t)}function rn(e,t,n){tn(e,t),0<n.length&&(e.i=null,e.g.set(sn(e,t),I(n)),e.h+=n.length)}function sn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function on(e,t){t&&!e.j&&(en(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(tn(this,t),rn(this,n,e))}),e)),e.j=t}r=Zt.prototype,r.add=function(e,t){en(this),this.i=null,e=sn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){en(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){en(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){en(this);let t=[];if("string"===typeof e)nn(this,e)&&(t=t.concat(this.g.get(sn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return en(this),this.i=null,e=sn(this,e),nn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var an=class{constructor(e,t){this.g=e,this.map=t}};function cn(e){this.l=e||un,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(e){return!!e.h||!!e.g&&e.g.size>=e.j}function hn(e){return e.h?1:e.g?e.g.size:0}function dn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fn(e,t){e.g?e.g.add(t):e.h=t}function pn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function mn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return I(e.i)}cn.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var gn=class{stringify(e){return h.JSON.stringify(e,void 0)}parse(e){return h.JSON.parse(e,void 0)}};function yn(){this.g=new gn}function vn(e,t,n){const r=n||"";try{Lt(e,(function(e,n){let i=e;f(e)&&(i=Se(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function _n(e,t){const n=new Ke;if(h.Image){const r=new Image;r.onload=w(wn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=w(wn,n,r,"TestLoadImage: error",!1,t),r.onabort=w(wn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=w(wn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function wn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function bn(e){this.l=e.fc||null,this.j=e.ob||!1}function En(e,t){be.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(bn,ut),bn.prototype.g=function(){return new En(this.l,this.j)},bn.prototype.i=function(e){return function(){return e}}({}),b(En,be);var Tn=0;function Sn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function In(e){e.readyState=4,e.l=null,e.j=null,e.A=null,kn(e)}function kn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=En.prototype,r.open=function(e,t){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,kn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||h).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,In(this)),this.readyState=Tn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?In(this):kn(this),3==this.readyState&&Sn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,In(this))},r.Ya=function(e){this.g&&(this.response=e,In(this))},r.ka=function(){this.g&&In(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Cn=h.JSON.parse;function An(e){be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rn,this.L=this.M=!1}b(An,be);var Rn="",Nn=/^https?$/i,xn=["POST","PUT"];function On(e){return F&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Dn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Pn(e),Mn(e)}function Pn(e){e.F||(e.F=!0,Ee(e,"complete"),Ee(e,"error"))}function Ln(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Un(e)||2!=e.da()))if(e.v&&4==Un(e))Ve(e.La,0,e);else if(Ee(e,"readystatechange"),4==Un(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Mt)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!Nn.test(i?i.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var s=2<Un(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Pn(e)}}finally{Mn(e)}}}function Mn(e,t){if(e.g){Fn(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ee(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Un(e){return e.g?e.g.readyState:0}function Vn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Rn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Wr){return null}}function jn(e){const t={};e=(e.g&&2<=Un(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(R(e[r]))continue;var n=Ne(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}te(t,(function(e){return e.join(", ")}))}function Bn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function $n(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Bn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):qt(e,t,n))}function qn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hn(e){this.Ga=0,this.j=[],this.l=new Ke,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,e),this.hb=qn("retryDelaySeedMs",1e4,e),this.eb=qn("forwardChannelMaxRetries",2,e),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(e&&e.concurrentRequestLimit),this.Ja=new yn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function zn(e){if(Gn(e),3==e.H){var t=e.W++,n=Vt(e.I);if(qt(n,"SID",e.K),qt(n,"RID",t),qt(n,"TYPE","terminate"),Xn(e,n),t=new yt(e,e.l,t),t.L=2,t.v=Ht(Vt(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=ur(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ct(t)}ar(e)}function Kn(e){e.g&&(tr(e),e.g.cancel(),e.g=null)}function Gn(e){Kn(e),e.u&&(h.clearTimeout(e.u),e.u=null),rr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Wn(e){if(!ln(e.i)&&!e.m){e.m=!0;var t=e.Na;Oe||Le(),De||(Oe(),De=!0),Pe.add(t,e),e.C=0}}function Jn(e,t){return!(hn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=ot(_(e.Na,e,t),sr(e,e.C)),e.C++,!0))}function Yn(e,t){var n;n=t?t.m:e.W++;const r=Vt(e.I);qt(r,"SID",e.K),qt(r,"RID",n),qt(r,"AID",e.V),Xn(e,r),e.o&&e.s&&$n(r,e.o,e.s),n=new yt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Qn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),fn(e.i,n),Et(n,r,t)}function Xn(e,t){e.na&&ee(e.na,(function(e,n){qt(t,n,e)})),e.h&&Lt({},(function(e,n){qt(t,n,e)}))}function Qn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?_(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{vn(a,e,"req"+n+"_")}catch(si){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Zn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Oe||Le(),De||(Oe(),De=!0),Pe.add(t,e),e.A=0}}function er(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ot(_(e.Ma,e),sr(e,e.A)),e.A++,!0)}function tr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function nr(e){e.g=new yt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Vt(e.wa);qt(t,"RID","rpc"),qt(t,"SID",e.K),qt(t,"AID",e.V),qt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&qt(t,"TO",e.qa),qt(t,"TYPE","xmlhttp"),Xn(e,t),e.o&&e.s&&$n(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ht(Vt(t)),n.s=null,n.S=!0,Tt(n,e)}function rr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function ir(e,t){var n=null;if(e.g==t){rr(e),tr(e),e.g=null;var r=2}else{if(!dn(e.i,t))return;n=t.F,pn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=et(),Ee(r,new st(r,n)),Wn(e)}else Zn(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Jn(e,t)||2==r&&er(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:or(e,5);break;case 4:or(e,10);break;case 3:or(e,6);break;default:or(e,2)}}function sr(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function or(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=_(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||jt(n,"https"),Ht(n)),_n(n.toString(),r)}else it(2);e.H=0,e.h&&e.h.za(t),ar(e),Gn(e)}function ar(e){if(e.H=0,e.ma=[],e.h){const t=mn(e.i);0==t.length&&0==e.j.length||(k(e.ma,t),k(e.ma,e.j),e.i.i.length=0,I(e.j),e.j.length=0),e.h.ya()}}function cr(e,t,n){var r=n instanceof Ut?Vt(n):new Ut(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Bt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ut(null);r&&jt(s,r),t&&(s.g=t),i&&Bt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&qt(r,n,t),qt(r,"VER",e.ra),Xn(e,r),r}function ur(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new An(new bn({ob:!0})):new An(e.va),t.Oa(e.J),t}function lr(){}function hr(){if(F&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function dr(e,t){be.call(this),this.g=new Hn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new mr(this)}function fr(e){pt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function pr(){mt.call(this),this.status=1}function mr(e){this.g=e}function gr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function _r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=An.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dt.g(),this.C=this.u?lt(this.u):lt(dt),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Dn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=S(xn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=On(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=Ve(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Dn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),An.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},r.kb=function(){Ln(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Cn(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Hn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new yt(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ne(s),ie(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Qn(this,i,t),n=Vt(this.I),qt(n,"RID",e),qt(n,"CVER",22),this.F&&qt(n,"X-HTTP-Session-Id",this.F),Xn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Bn(s)))+"&"+t:this.o&&$n(n,this.o,s)),fn(this.i,i),this.bb&&qt(n,"TYPE","init"),this.P?(qt(n,"$req",t),qt(n,"SID","null"),i.aa=!0,Et(i,n,null)):Et(i,n,t),this.H=2}}else 3==this.H&&(e?Yn(this,e):0==this.j.length||ln(this.i)||Yn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ot(_(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),Kn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Kn(this),er(this),it(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(e,t){return new dr(e,t)},b(dr,be),dr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=cr(e,null,e.Y),Wn(e)},dr.prototype.close=function(){zn(this.g)},dr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Se(e),e=n);t.j.push(new an(t.fb++,e)),3==t.H&&Wn(t)},dr.prototype.N=function(){this.g.h=null,delete this.j,zn(this.g),delete this.g,dr.$.N.call(this)},b(fr,pt),b(pr,mt),b(mr,lr),mr.prototype.Ba=function(){Ee(this.g,"a")},mr.prototype.Aa=function(e){Ee(this.g,new fr(e))},mr.prototype.za=function(e){Ee(this.g,new pr)},mr.prototype.ya=function(){Ee(this.g,"b")},b(yr,gr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)vr(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){vr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){vr(this,r),i=0;break}}this.h=i,this.i+=t},yr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var wr={};function br(e){return-128<=e&&128>e?D(e,(function(e){return new _r([0|e],0>e?-1:0)})):new _r([0|e],0>e?-1:0)}function Er(e){if(isNaN(e)||!isFinite(e))return Ir;if(0>e)return Nr(Er(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Sr;return new _r(t,0)}function Tr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Nr(Tr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(t,8)),r=Ir,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Er(Math.pow(t,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Sr=4294967296,Ir=br(0),kr=br(1),Cr=br(16777216);function Ar(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Rr(e){return-1==e.h}function Nr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new _r(n,~e.h).add(kr)}function xr(e,t){return e.add(Nr(t))}function Or(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Dr(e,t){this.g=e,this.h=t}function Pr(e,t){if(Ar(t))throw Error("division by zero");if(Ar(e))return new Dr(Ir,Ir);if(Rr(e))return t=Pr(Nr(e),t),new Dr(Nr(t.g),Nr(t.h));if(Rr(t))return t=Pr(e,Nr(t)),new Dr(Nr(t.g),t.h);if(30<e.g.length){if(Rr(e)||Rr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=kr,r=t;0>=r.X(e);)n=Lr(n),r=Lr(r);var i=Mr(n,1),s=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!Ar(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Mr(r,1),n=Mr(n,1)}return t=xr(e,i.R(t)),new Dr(i,t)}for(i=Ir;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(t);Rr(o)||0<o.X(e);)n-=r,s=Er(n),o=s.R(t);Ar(s)&&(s=kr),i=i.add(s),e=xr(e,o)}return new Dr(i,e)}function Lr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new _r(n,e.h)}function Mr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new _r(i,e.h)}r=_r.prototype,r.ea=function(){if(Rr(this))return-Nr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Sr+r)*t,t*=Sr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ar(this))return"0";if(Rr(this))return"-"+Nr(this).toString(e);for(var t=Er(Math.pow(e,6)),n=this,r="";;){var i=Pr(n,t).g;n=xr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Ar(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=xr(this,e),Rr(e)?-1:Ar(e)?0:1},r.abs=function(){return Rr(this)?Nr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _r(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(Ar(this)||Ar(e))return Ir;if(Rr(this))return Rr(e)?Nr(this).R(Nr(e)):Nr(Nr(this).R(e));if(Rr(e))return Nr(this.R(Nr(e)));if(0>this.X(Cr)&&0>e.X(Cr))return Er(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Or(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Or(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Or(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Or(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new _r(n,0)},r.gb=function(e){return Pr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new _r(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new _r(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new _r(n,this.h^e.h)},hr.prototype.createWebChannel=hr.prototype.g,dr.prototype.send=dr.prototype.u,dr.prototype.open=dr.prototype.m,dr.prototype.close=dr.prototype.close,at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,ct.COMPLETE="complete",ht.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",be.prototype.listen=be.prototype.O,An.prototype.listenOnce=An.prototype.P,An.prototype.getLastError=An.prototype.Sa,An.prototype.getLastErrorCode=An.prototype.Ia,An.prototype.getStatus=An.prototype.da,An.prototype.getResponseJson=An.prototype.Wa,An.prototype.getResponseText=An.prototype.ja,An.prototype.send=An.prototype.ha,An.prototype.setWithCredentials=An.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,_r.prototype.add=_r.prototype.add,_r.prototype.multiply=_r.prototype.R,_r.prototype.modulo=_r.prototype.gb,_r.prototype.compare=_r.prototype.X,_r.prototype.toNumber=_r.prototype.ea,_r.prototype.toString=_r.prototype.toString,_r.prototype.getBits=_r.prototype.D,_r.fromNumber=Er,_r.fromString=Tr;var Fr=u.createWebChannelTransport=function(){return new hr},Ur=u.getStatEventTarget=function(){return et()},Vr=u.ErrorCode=at,jr=u.EventType=ct,Br=u.Event=Qe,$r=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qr=u.FetchXmlHttpFactory=bn,Hr=u.WebChannel=ht,zr=u.XhrIo=An,Kr=u.Md5=yr,Gr=u.Integer=_r;const Wr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jr.UNAUTHENTICATED=new Jr(null),Jr.GOOGLE_CREDENTIALS=new Jr("google-credentials-uid"),Jr.FIRST_PARTY=new Jr("first-party-uid"),Jr.MOCK_USER=new Jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yr="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new o.Yd("@firebase/firestore");function Qr(){return Xr.logLevel}function Zr(e,...t){if(Xr.logLevel<=o["in"].DEBUG){const n=t.map(ni);Xr.debug(`Firestore (${Yr}): ${e}`,...n)}}function ei(e,...t){if(Xr.logLevel<=o["in"].ERROR){const n=t.map(ni);Xr.error(`Firestore (${Yr}): ${e}`,...n)}}function ti(e,...t){if(Xr.logLevel<=o["in"].WARN){const n=t.map(ni);Xr.warn(`Firestore (${Yr}): ${e}`,...n)}}function ni(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e="Unexpected state"){const t=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+e;throw ei(t),new Error(t)}function ii(e,t){e||ri()}function si(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Jr.UNAUTHENTICATED)))}shutdown(){}}class hi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class di{constructor(e){this.t=e,this.currentUser=Jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ci,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ci)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ii("string"==typeof t.accessToken),new ui(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ii(null===e||"string"==typeof e),new Jr(e)}}class fi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Jr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new fi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gi{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ii("string"==typeof e.token),this.T=e.token,new mi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=yi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function _i(e,t){return e<t?-1:e>t?1:0}function wi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bi.fromMillis(Date.now())}static fromDate(e){return bi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new bi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_i(this.nanoseconds,e.nanoseconds):_i(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ei(e)}static min(){return new Ei(new bi(0,0))}static max(){return new Ei(new bi(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,n){void 0===t?t=0:t>e.length&&ri(),void 0===n?n=e.length-t:n>e.length-t&&ri(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ti.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ti?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Si extends Ti{construct(e,t,n){return new Si(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ai(oi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Si(t)}static emptyPath(){return new Si([])}}const Ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ki extends Ti{construct(e,t,n){return new ki(e,t,n)}static isValidIdentifier(e){return Ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ki.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ki(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ai(oi.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ai(oi.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ai(oi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ai(oi.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ki(t)}static emptyPath(){return new ki([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.path=e}static fromPath(e){return new Ci(Si.fromString(e))}static fromName(e){return new Ci(Si.fromString(e).popFirst(5))}static empty(){return new Ci(Si.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Si.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Si.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ci(new Si(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ai.UNKNOWN_ID=-1;function Ri(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ei.fromTimestamp(1e9===r?new bi(n+1,0):new bi(n,r));return new xi(i,Ci.empty(),t)}function Ni(e){return new xi(e.readTime,e.key,-1)}class xi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new xi(Ei.min(),Ci.empty(),-1)}static max(){return new xi(Ei.max(),Ci.empty(),-1)}}function Oi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ci.comparator(e.documentKey,t.documentKey),0!==n?n:_i(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e){if(e.code!==oi.FAILED_PRECONDITION||e.message!==Di)throw e;Zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Mi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Mi?t:Mi.resolve(t)}catch(e){return Mi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Mi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Mi.reject(t)}static resolve(e){return new Mi(((t,n)=>{t(e)}))}static reject(e){return new Mi(((t,n)=>{n(e)}))}static waitFor(e){return new Mi(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Mi.resolve(!1);for(const n of e)t=t.next((e=>e?Mi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Mi(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Mi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Vi(e){return null==e}function ji(e){return 0===e&&1/e==-1/0}function Bi(e){return"number"==typeof e&&Number.isInteger(e)&&!ji(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui.ct=-1;const $i=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],qi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Hi=qi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ki(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Gi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t){this.comparator=e,this.root=t||Yi.EMPTY}insert(e,t){return new Wi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yi.BLACK,null,null))}remove(e){return new Wi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yi{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Yi.RED,this.left=null!=r?r:Yi.EMPTY,this.right=null!=i?i:Yi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Yi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Yi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Yi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const e=this.left.check();if(e!==this.right.check())throw ri();return e+(this.isRed()?0:1)}}Yi.EMPTY=null,Yi.RED=!0,Yi.BLACK=!1,Yi.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Yi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(e){this.comparator=e,this.data=new Wi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qi(this.data.getIterator())}getIteratorFrom(e){return new Qi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Xi))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Xi(this.comparator);return t.data=e,t}}class Qi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(e){this.fields=e,e.sort(ki.comparator)}static empty(){return new Zi([])}unionWith(e){let t=new Xi(ki.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Zi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new es("Invalid base64 string: "+e):e}}(e);return new ts(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ts(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _i(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ts.EMPTY_BYTE_STRING=new ts("");const ns=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(e){if(ii(!!e),"string"==typeof e){let t=0;const n=ns.exec(e);if(ii(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:is(e.seconds),nanos:is(e.nanos)}}function is(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ss(e){return"string"==typeof e?ts.fromBase64String(e):ts.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function as(e){const t=e.mapValue.fields.__previous_value__;return os(t)?as(t):t}function cs(e){const t=rs(e.mapValue.fields.__local_write_time__.timestampValue);return new bi(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class ls{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ls("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ls&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ds(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?os(e)?4:Is(e)?9007199254740991:10:ri()}function fs(e,t){if(e===t)return!0;const n=ds(e);if(n!==ds(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return cs(e).isEqual(cs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=rs(e.timestampValue),r=rs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ss(e.bytesValue).isEqual(ss(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return is(e.geoPointValue.latitude)===is(t.geoPointValue.latitude)&&is(e.geoPointValue.longitude)===is(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return is(e.integerValue)===is(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=is(e.doubleValue),r=is(t.doubleValue);return n===r?ji(n)===ji(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return wi(e.arrayValue.values||[],t.arrayValue.values||[],fs);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(zi(n)!==zi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!fs(n[i],r[i])))return!1;return!0}(e,t);default:return ri()}}function ps(e,t){return void 0!==(e.values||[]).find((e=>fs(e,t)))}function ms(e,t){if(e===t)return 0;const n=ds(e),r=ds(t);if(n!==r)return _i(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _i(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=is(e.integerValue||e.doubleValue),r=is(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return gs(e.timestampValue,t.timestampValue);case 4:return gs(cs(e),cs(t));case 5:return _i(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ss(e),r=ss(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=_i(n[i],r[i]);if(0!==e)return e}return _i(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=_i(is(e.latitude),is(t.latitude));return 0!==n?n:_i(is(e.longitude),is(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ms(n[i],r[i]);if(e)return e}return _i(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===hs.mapValue&&t===hs.mapValue)return 0;if(e===hs.mapValue)return 1;if(t===hs.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=_i(r[o],s[o]);if(0!==e)return e;const t=ms(n[r[o]],i[s[o]]);if(0!==t)return t}return _i(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ri()}}function gs(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return _i(e,t);const n=rs(e),r=rs(t),i=_i(n.seconds,r.seconds);return 0!==i?i:_i(n.nanos,r.nanos)}function ys(e){return vs(e)}function vs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=rs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ss(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ci.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=vs(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${vs(e.fields[i])}`;return n+"}"}(e.mapValue):ri();var t,n}function _s(e){return!!e&&"integerValue"in e}function ws(e){return!!e&&"arrayValue"in e}function bs(e){return!!e&&"nullValue"in e}function Es(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ts(e){return!!e&&"mapValue"in e}function Ss(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ki(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ss(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ss(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Is(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(e){this.value=e}static empty(){return new ks({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ts(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ss(t)}setAll(e){let t=ki.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ss(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ts(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fs(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ki(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ks(Ss(this.value))}}function Cs(e){const t=[];return Ki(e.fields,((e,n)=>{const r=new ki([e]);if(Ts(n)){const e=Cs(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Zi(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class As{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new As(e,0,Ei.min(),Ei.min(),Ei.min(),ks.empty(),0)}static newFoundDocument(e,t,n,r){return new As(e,1,t,Ei.min(),n,r,0)}static newNoDocument(e,t){return new As(e,2,t,Ei.min(),Ei.min(),ks.empty(),0)}static newUnknownDocument(e,t){return new As(e,3,t,Ei.min(),Ei.min(),ks.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ks.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ks.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ei.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof As&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new As(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.position=e,this.inclusive=t}}function Ns(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ci.comparator(Ci.fromName(o.referenceValue),n.key):ms(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function xs(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fs(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ds(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{}class Ls extends Ps{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new qs(e,t,n):"array-contains"===t?new Gs(e,n):"in"===t?new Ws(e,n):"not-in"===t?new Js(e,n):"array-contains-any"===t?new Ys(e,n):new Ls(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Hs(e,n):new zs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ms(t,this.value)):null!==t&&ds(this.value)===ds(t)&&this.matchesComparison(ms(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ri()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ms extends Ps{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Ms(e,t)}matches(e){return Fs(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Fs(e){return"and"===e.op}function Us(e){return Vs(e)&&Fs(e)}function Vs(e){for(const t of e.filters)if(t instanceof Ms)return!1;return!0}function js(e){if(e instanceof Ls)return e.field.canonicalString()+e.op.toString()+ys(e.value);if(Us(e))return e.filters.map((e=>js(e))).join(",");{const t=e.filters.map((e=>js(e))).join(",");return`${e.op}(${t})`}}function Bs(e,t){return e instanceof Ls?function(e,t){return t instanceof Ls&&e.op===t.op&&e.field.isEqual(t.field)&&fs(e.value,t.value)}(e,t):e instanceof Ms?function(e,t){return t instanceof Ms&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Bs(n,t.filters[r])),!0)}(e,t):void ri()}function $s(e){return e instanceof Ls?function(e){return`${e.field.canonicalString()} ${e.op} ${ys(e.value)}`}(e):e instanceof Ms?function(e){return e.op.toString()+" {"+e.getFilters().map($s).join(" ,")+"}"}(e):"Filter"}class qs extends Ls{constructor(e,t,n){super(e,t,n),this.key=Ci.fromName(n.referenceValue)}matches(e){const t=Ci.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hs extends Ls{constructor(e,t){super(e,"in",t),this.keys=Ks("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class zs extends Ls{constructor(e,t){super(e,"not-in",t),this.keys=Ks("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ks(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ci.fromName(e.referenceValue)))}class Gs extends Ls{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ws(t)&&ps(t.arrayValue,this.value)}}class Ws extends Ls{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ps(this.value.arrayValue,t)}}class Js extends Ls{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ps(this.value.arrayValue,t)}}class Ys extends Ls{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ws(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ps(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function Qs(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Xs(e,t,n,r,i,s,o)}function Zs(e){const t=si(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>js(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Vi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ys(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ys(e))).join(",")),t.dt=e}return t.dt}function eo(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ds(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Bs(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!xs(e.startAt,t.startAt)&&xs(e.endAt,t.endAt)}function to(e){return Ci.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function ro(e,t,n,r,i,s,o,a){return new no(e,t,n,r,i,s,o,a)}function io(e){return new no(e)}function so(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function oo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ao(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function co(e){return null!==e.collectionGroup}function uo(e){const t=si(e);if(null===t.wt){t.wt=[];const e=ao(t),n=oo(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Os(e)),t.wt.push(new Os(ki.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Os(ki.keyField(),e))}}}return t.wt}function lo(e){const t=si(e);if(!t._t)if("F"===t.limitType)t._t=Qs(t.path,t.collectionGroup,uo(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of uo(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Os(i.field,t))}const n=t.endAt?new Rs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rs(t.startAt.position,t.startAt.inclusive):null;t._t=Qs(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ho(e,t,n){return new no(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function fo(e,t){return eo(lo(e),lo(t))&&e.limitType===t.limitType}function po(e){return`${Zs(lo(e))}|lt:${e.limitType}`}function mo(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>$s(e))).join(", ")}]`),Vi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ys(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ys(e))).join(",")),`Target(${t})`}(lo(e))}; limitType=${e.limitType})`}function go(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ci.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of uo(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ns(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,uo(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ns(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,uo(e),t))}(e,t)}function yo(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function vo(e){return(t,n)=>{let r=!1;for(const i of uo(e)){const e=_o(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function _o(e,t,n){const r=e.field.isKeyField()?Ci.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ms(r,i):ri()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ri()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Gi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Wi(Ci.comparator);function Eo(){return bo}const To=new Wi(Ci.comparator);function So(...e){let t=To;for(const n of e)t=t.insert(n.key,n);return t}function Io(e){let t=To;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ko(){return Ao()}function Co(){return Ao()}function Ao(){return new wo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ro=new Wi(Ci.comparator),No=new Xi(Ci.comparator);function xo(...e){let t=No;for(const n of e)t=t.add(n);return t}const Oo=new Xi(_i);function Do(){return Oo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(t)?"-0":t}}function Lo(e){return{integerValue:""+e}}function Mo(e,t){return Bi(t)?Lo(t):Po(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this._=void 0}}function Uo(e,t,n){return e instanceof Bo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&os(t)&&(t=as(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof $o?qo(e,t):e instanceof Ho?zo(e,t):function(e,t){const n=jo(e,t),r=Go(n)+Go(e.gt);return _s(n)&&_s(e.gt)?Lo(r):Po(e.serializer,r)}(e,t)}function Vo(e,t,n){return e instanceof $o?qo(e,t):e instanceof Ho?zo(e,t):n}function jo(e,t){return e instanceof Ko?_s(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Bo extends Fo{}class $o extends Fo{constructor(e){super(),this.elements=e}}function qo(e,t){const n=Wo(t);for(const r of e.elements)n.some((e=>fs(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Ho extends Fo{constructor(e){super(),this.elements=e}}function zo(e,t){let n=Wo(t);for(const r of e.elements)n=n.filter((e=>!fs(e,r)));return{arrayValue:{values:n}}}class Ko extends Fo{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Go(e){return is(e.integerValue||e.doubleValue)}function Wo(e){return ws(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof $o&&t instanceof $o||e instanceof Ho&&t instanceof Ho?wi(e.elements,t.elements,fs):e instanceof Ko&&t instanceof Ko?fs(e.gt,t.gt):e instanceof Bo&&t instanceof Bo}(e.transform,t.transform)}class Yo{constructor(e,t){this.version=e,this.transformResults=t}}class Xo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xo}static exists(e){return new Xo(void 0,e)}static updateTime(e){return new Xo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Zo{}function ea(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new la(e.key,Xo.none()):new sa(e.key,e.data,Xo.none());{const n=e.data,r=ks.empty();let i=new Xi(ki.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new oa(e.key,r,new Zi(i.toArray()),Xo.none())}}function ta(e,t,n){e instanceof sa?function(e,t,n){const r=e.value.clone(),i=ca(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof oa?function(e,t,n){if(!Qo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ca(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(aa(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function na(e,t,n,r){return e instanceof sa?function(e,t,n,r){if(!Qo(e.precondition,t))return n;const i=e.value.clone(),s=ua(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof oa?function(e,t,n,r){if(!Qo(e.precondition,t))return n;const i=ua(e.fieldTransforms,r,t),s=t.data;return s.setAll(aa(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Qo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ra(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=jo(r.transform,e||null);null!=i&&(null===n&&(n=ks.empty()),n.set(r.field,i))}return n||null}function ia(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&wi(e,t,((e,t)=>Jo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sa extends Zo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class oa extends Zo{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function aa(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ca(e,t,n){const r=new Map;ii(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Vo(o,a,n[i]))}return r}function ua(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Uo(e,s,t))}return r}class la extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ha extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ta(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=na(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=na(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Co();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=ea(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ei.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xo())}isEqual(e){return this.batchId===e.batchId&&wi(this.mutations,e.mutations,((e,t)=>ia(e,t)))&&wi(this.baseMutations,e.baseMutations,((e,t)=>ia(e,t)))}}class fa{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ii(e.mutations.length===n.length);let r=Ro;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new fa(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ma{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ga,ya;function va(e){switch(e){default:return ri();case oi.CANCELLED:case oi.UNKNOWN:case oi.DEADLINE_EXCEEDED:case oi.RESOURCE_EXHAUSTED:case oi.INTERNAL:case oi.UNAVAILABLE:case oi.UNAUTHENTICATED:return!1;case oi.INVALID_ARGUMENT:case oi.NOT_FOUND:case oi.ALREADY_EXISTS:case oi.PERMISSION_DENIED:case oi.FAILED_PRECONDITION:case oi.ABORTED:case oi.OUT_OF_RANGE:case oi.UNIMPLEMENTED:case oi.DATA_LOSS:return!0}}function _a(e){if(void 0===e)return ei("GRPC error has no .code"),oi.UNKNOWN;switch(e){case ga.OK:return oi.OK;case ga.CANCELLED:return oi.CANCELLED;case ga.UNKNOWN:return oi.UNKNOWN;case ga.DEADLINE_EXCEEDED:return oi.DEADLINE_EXCEEDED;case ga.RESOURCE_EXHAUSTED:return oi.RESOURCE_EXHAUSTED;case ga.INTERNAL:return oi.INTERNAL;case ga.UNAVAILABLE:return oi.UNAVAILABLE;case ga.UNAUTHENTICATED:return oi.UNAUTHENTICATED;case ga.INVALID_ARGUMENT:return oi.INVALID_ARGUMENT;case ga.NOT_FOUND:return oi.NOT_FOUND;case ga.ALREADY_EXISTS:return oi.ALREADY_EXISTS;case ga.PERMISSION_DENIED:return oi.PERMISSION_DENIED;case ga.FAILED_PRECONDITION:return oi.FAILED_PRECONDITION;case ga.ABORTED:return oi.ABORTED;case ga.OUT_OF_RANGE:return oi.OUT_OF_RANGE;case ga.UNIMPLEMENTED:return oi.UNIMPLEMENTED;case ga.DATA_LOSS:return oi.DATA_LOSS;default:return ri()}}(ya=ga||(ga={}))[ya.OK=0]="OK",ya[ya.CANCELLED=1]="CANCELLED",ya[ya.UNKNOWN=2]="UNKNOWN",ya[ya.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ya[ya.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ya[ya.NOT_FOUND=5]="NOT_FOUND",ya[ya.ALREADY_EXISTS=6]="ALREADY_EXISTS",ya[ya.PERMISSION_DENIED=7]="PERMISSION_DENIED",ya[ya.UNAUTHENTICATED=16]="UNAUTHENTICATED",ya[ya.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ya[ya.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ya[ya.ABORTED=10]="ABORTED",ya[ya.OUT_OF_RANGE=11]="OUT_OF_RANGE",ya[ya.UNIMPLEMENTED=12]="UNIMPLEMENTED",ya[ya.INTERNAL=13]="INTERNAL",ya[ya.UNAVAILABLE=14]="UNAVAILABLE",ya[ya.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ba}static getOrCreateInstance(){return null===ba&&(ba=new wa),ba}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let ba=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Gr([4294967295,4294967295],0);function Sa(e){const t=Ea().encode(e),n=new Kr;return n.update(t),new Uint8Array(n.digest())}function Ia(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Gr([n,r],0),new Gr([i,s],0)]}class ka{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ca(`Invalid padding: ${t}`);if(n<0)throw new Ca(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Ca(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Ca(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Gr.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(Gr.fromNumber(n)));return 1===r.compare(Ta)&&(r=new Gr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=Sa(e),[n,r]=Ia(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);if(!this.At(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new ka(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.It)return;const t=Sa(e),[n,r]=Ia(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Aa(Ei.min(),r,new Wi(_i),Eo(),xo())}}class Ra{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ra(n,t,xo(),xo(),xo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class xa{constructor(e,t){this.targetId=e,this.Vt=t}}class Oa{constructor(e,t,n=ts.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Da{constructor(){this.St=0,this.Dt=Ma(),this.Ct=ts.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=xo(),t=xo(),n=xo();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ri()}})),new Ra(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Ma()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Pa{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Eo(),this.zt=La(),this.Wt=new Wi(_i)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:ri()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const s=i.target;if(to(s))if(0===r){const e=new Ci(s.path);this.Yt(n,e,As.newNoDocument(e,Ei.min()))}else ii(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=wa.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=ss(i).toUint8Array()}catch(e){if(e instanceof es)return ti("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new ka(a,s,o)}catch(e){return ti(e instanceof Ca?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&to(i.target)){const t=new Ci(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,As.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=xo();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new Aa(e,t,this.Wt,this.jt,n);return this.jt=Eo(),this.zt=La(),this.Wt=new Wi(_i),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Da,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Xi(_i),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||Zr("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Da),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function La(){return new Wi(Ci.comparator)}function Ma(){return new Wi(Ci.comparator)}const Fa=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Ua=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Va=(()=>{const e={and:"AND",or:"OR"};return e})();class ja{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ba(e,t){return e.useProto3Json||Vi(t)?t:{value:t}}function $a(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qa(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ha(e,t){return $a(e,t.toTimestamp())}function za(e){return ii(!!e),Ei.fromTimestamp(function(e){const t=rs(e);return new bi(t.seconds,t.nanos)}(e))}function Ka(e,t){return function(e){return new Si(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ga(e){const t=Si.fromString(e);return ii(gc(t)),t}function Wa(e,t){return Ka(e.databaseId,t.path)}function Ja(e,t){const n=Ga(t);if(n.get(1)!==e.databaseId.projectId)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ci(Za(n))}function Ya(e,t){return Ka(e.databaseId,t)}function Xa(e){const t=Ga(e);return 4===t.length?Si.emptyPath():Za(t)}function Qa(e){return new Si(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Za(e){return ii(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ec(e,t,n){return{name:Wa(e,t),fields:n.value.mapValue.fields}}function tc(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ri()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(ii(void 0===t||"string"==typeof t),ts.fromBase64String(t||"")):(ii(void 0===t||t instanceof Uint8Array),ts.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?oi.UNKNOWN:_a(e.code);return new ai(t,e.message||"")}(o);n=new Oa(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ja(e,r.document.name),s=za(r.document.updateTime),o=r.document.createTime?za(r.document.createTime):Ei.min(),a=new ks({mapValue:{fields:r.document.fields}}),c=As.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Na(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ja(e,r.document),s=r.readTime?za(r.readTime):Ei.min(),o=As.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Na([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ja(e,r.document),s=r.removedTargetIds||[];n=new Na([],s,i,null)}else{if(!("filter"in t))return ri();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new ma(r,i),o=e.targetId;n=new xa(o,s)}}return n}function nc(e,t){let n;if(t instanceof sa)n={update:ec(e,t.key,t.value)};else if(t instanceof la)n={delete:Wa(e,t.key)};else if(t instanceof oa)n={update:ec(e,t.key,t.data),updateMask:mc(t.fieldMask)};else{if(!(t instanceof ha))return ri();n={verify:Wa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Bo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof $o)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ho)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ko)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw ri()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ha(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ri()}(e,t.precondition)),n}function rc(e,t){return e&&e.length>0?(ii(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?za(e.updateTime):za(t);return n.isEqual(Ei.min())&&(n=za(t)),new Yo(n,e.transformResults||[])}(e,t)))):[]}function ic(e,t){return{documents:[Ya(e,t.path)]}}function sc(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Ya(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ya(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return pc(Ms.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:dc(e.field),direction:uc(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ba(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function oc(e){let t=Xa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ii(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=cc(e);return t instanceof Ms&&Us(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Os(fc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Vi(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Rs(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Rs(n,t)}(n.endAt)),ro(t,i,o,s,a,"F",c,u)}function ac(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ri()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function cc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=fc(e.unaryFilter.field);return Ls.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=fc(e.unaryFilter.field);return Ls.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fc(e.unaryFilter.field);return Ls.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fc(e.unaryFilter.field);return Ls.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}(e):void 0!==e.fieldFilter?function(e){return Ls.create(fc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ms.create(e.compositeFilter.filters.map((e=>cc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ri()}}(e.compositeFilter.op))}(e):ri()}function uc(e){return Fa[e]}function lc(e){return Ua[e]}function hc(e){return Va[e]}function dc(e){return{fieldPath:e.canonicalString()}}function fc(e){return ki.fromServerFormat(e.fieldPath)}function pc(e){return e instanceof Ls?function(e){if("=="===e.op){if(Es(e.value))return{unaryFilter:{field:dc(e.field),op:"IS_NAN"}};if(bs(e.value))return{unaryFilter:{field:dc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Es(e.value))return{unaryFilter:{field:dc(e.field),op:"IS_NOT_NAN"}};if(bs(e.value))return{unaryFilter:{field:dc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dc(e.field),op:lc(e.op),value:e.value}}}(e):e instanceof Ms?function(e){const t=e.getFilters().map((e=>pc(e)));return 1===t.length?t[0]:{compositeFilter:{op:hc(e.op),filters:t}}}(e):ri()}function mc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function gc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,n,r,i=Ei.min(),s=Ei.min(),o=ts.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new yc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.fe=e}}function _c(e){const t=oc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ho(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(is(e.integerValue));else if("doubleValue"in e){const n=is(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),ji(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(ss(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Is(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):ri()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const r of Object.keys(n))this.Te(r,t),this.me(n[r],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const r of n)this.me(r,t)}ve(e,t){this.ye(t,37),Ci.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}wc.Ve=new wc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(){this.rn=new Ec}addToCollectionParentIndex(e,t){return this.rn.add(t),Mi.resolve()}getCollectionParents(e,t){return Mi.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Mi.resolve()}deleteFieldIndex(e,t){return Mi.resolve()}getDocumentsMatchingTarget(e,t){return Mi.resolve(null)}getIndexType(e,t){return Mi.resolve(0)}getFieldIndexes(e,t){return Mi.resolve([])}getNextCollectionGroupToUpdate(e){return Mi.resolve(null)}getMinOffset(e,t){return Mi.resolve(xi.min())}getMinOffsetFromCollectionGroup(e,t){return Mi.resolve(xi.min())}updateCollectionGroup(e,t,n){return Mi.resolve()}updateIndexEntries(e,t){return Mi.resolve()}}class Ec{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Xi(Si.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Xi(Si.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Tc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Tc(e,Tc.DEFAULT_COLLECTION_PERCENTILE,Tc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tc.DEFAULT_COLLECTION_PERCENTILE=10,Tc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tc.DEFAULT=new Tc(41943040,Tc.DEFAULT_COLLECTION_PERCENTILE,Tc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tc.DISABLED=new Tc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Sc(0)}static Mn(){return new Sc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(){this.changes=new wo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,As.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Mi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&na(n.mutation,e,Zi.empty(),bi.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,xo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=xo()){const r=ko();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=So();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ko();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,xo())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Eo();const s=Ao(),o=Ao();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof oa)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),na(o.mutation,t,o.mutation.getFieldMask(),bi.now())):s.set(t.key,Zi.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new kc(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ao();let r=new Wi(((e,t)=>e-t)),i=xo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Zi.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||xo()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Co();c.forEach((e=>{if(!i.has(e)){const r=ea(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Mi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Ci.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):co(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Mi.resolve(ko());let o=-1,a=i;return s.next((t=>Mi.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Mi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,xo()))).next((e=>({batchId:o,changes:Io(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ci(t)).next((e=>{let t=So();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=So();return this.indexManager.getCollectionParents(e,r).next((s=>Mi.forEach(s,(s=>{const o=function(e,t){return new no(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,As.newInvalidDocument(r)))}));let n=So();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&na(s.mutation,i,Zi.empty(),bi.now()),go(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Mi.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:za(n.createTime)}),Mi.resolve()}getNamedQuery(e,t){return Mi.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:_c(e.bundledQuery),readTime:za(e.readTime)}}(t)),Mi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.overlays=new Wi(Ci.comparator),this.ls=new Map}getOverlay(e,t){return Mi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ko();return Mi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),Mi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Mi.resolve()}getOverlaysForCollection(e,t,n){const r=ko(),i=t.length+1,s=new Ci(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Mi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Wi(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ko(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ko(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Mi.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new pa(t,n));let i=this.ls.get(t);void 0===i&&(i=xo(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.fs=new Xi(xc.ds),this.ws=new Xi(xc._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new xc(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new xc(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new Ci(new Si([])),n=new xc(t,e),r=new xc(t,e+1),i=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Ci(new Si([])),n=new xc(t,e),r=new xc(t,e+1);let i=xo();return this.ws.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new xc(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class xc{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Ci.comparator(e.key,t.key)||_i(e.As,t.As)}static _s(e,t){return _i(e.As,t.As)||Ci.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Xi(xc.ds)}checkEmpty(e){return Mi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new da(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new xc(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Mi.resolve(s)}lookupMutationBatch(e,t){return Mi.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return Mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Mi.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new xc(t,0),r=new xc(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);i.push(t)})),Mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Xi(_i);return t.forEach((e=>{const t=new xc(e,0),r=new xc(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),Mi.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ci.isDocumentKey(i)||(i=i.child(""));const s=new xc(new Ci(i),0);let o=new Xi(_i);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)}),s),Mi.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ii(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Mi.forEach(t.mutations,(r=>{const i=new xc(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new xc(t,0),r=this.Rs.firstAfterOrEqual(n);return Mi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Mi.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.Ds=e,this.docs=new Wi(Ci.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Mi.resolve(n?n.document.mutableCopy():As.newInvalidDocument(t))}getEntries(e,t){let n=Eo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():As.newInvalidDocument(e))})),Mi.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Eo();const s=t.path,o=new Ci(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Oi(Ni(o),n)<=0||(r.has(o.key)||go(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Mi.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ri()}Cs(e,t){return Mi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Pc(this)}getSize(e){return Mi.resolve(this.size)}}class Pc extends Ic{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),Mi.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.persistence=e,this.xs=new wo((e=>Zs(e)),eo),this.lastRemoteSnapshotVersion=Ei.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Nc,this.targetCount=0,this.Ms=Sc.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Mi.resolve()}getLastRemoteSnapshotVersion(e){return Mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Mi.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Mi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Mi.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Sc(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Mi.resolve()}updateTargetData(e,t){return this.Fn(t),Mi.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Mi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Mi.waitFor(i).next((()=>r))}getTargetCount(e){return Mi.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Mi.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Mi.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Mi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Mi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Mi.resolve(n)}containsKey(e,t){return Mi.resolve(this.ks.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.$s={},this.overlays={},this.Os=new Ui(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Lc(this),this.indexManager=new bc,this.remoteDocumentCache=function(e){return new Dc(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new vc(t),this.qs=new Ac(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Rc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Oc(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){Zr("MemoryPersistence","Starting transaction:",e);const r=new Fc(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return Mi.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Fc extends Pi{constructor(e){super(),this.currentSequenceNumber=e}}class Uc{constructor(e){this.persistence=e,this.Qs=new Nc,this.js=null}static zs(e){return new Uc(e)}get Ws(){if(this.js)return this.js;throw ri()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Mi.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Mi.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Mi.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Mi.forEach(this.Ws,(n=>{const r=Ci.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,Ei.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Mi.or([()=>Mi.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=xo(),r=xo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Vc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(so(t))return Mi.resolve(null);let n=lo(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ho(t,null,"F"),n=lo(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=xo(...r);return this.Ui.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,ho(t,null,"F")):this.Wi(e,s,t,n)}))))})))))}Gi(e,t,n,r){return so(t)||r.isEqual(Ei.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const s=this.ji(t,i);return this.zi(t,s,n,r)?this.Qi(e,t):(Qr()<=o["in"].DEBUG&&Zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mo(t)),this.Wi(e,s,t,Ri(r,-1)))}))}ji(e,t){let n=new Xi(vo(e));return t.forEach(((t,r)=>{go(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return Qr()<=o["in"].DEBUG&&Zr("QueryEngine","Using full collection scan to execute query:",mo(t)),this.Ui.getDocumentsMatchingQuery(e,t,xi.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Wi(_i),this.Yi=new wo((e=>Zs(e)),eo),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cc(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function $c(e,t,n,r){return new Bc(e,t,n,r)}async function qc(e,t){const n=si(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=xo();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Hc(e,t){const n=si(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Mi.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ii(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=xo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function zc(e){const t=si(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function Kc(e,t){const n=si(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(ts.EMPTY_BYTE_STRING,Ei.min()).withLastLimboFreeSnapshotVersion(Ei.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Bs.updateTargetData(e,u))}));let a=Eo(),c=xo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Gc(e,s,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!r.isEqual(Ei.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Mi.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}function Gc(e,t,n){let r=xo(),i=xo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Eo();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ei.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{nr:r,sr:i}}))}function Wc(e,t){const n=si(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Jc(e,t){const n=si(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((i=>i?(r=i,Mi.resolve(r)):n.Bs.allocateTargetId(e).next((i=>(r=new yc(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Yc(e,t,n){const r=si(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Fi(e))throw e;Zr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Xc(e,t,n){const r=si(e);let i=Ei.min(),s=xo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=si(e),i=r.Yi.get(n);return void 0!==i?Mi.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,lo(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:Ei.min(),n?s:xo()))).next((e=>(Qc(r,yo(t),e),{documents:e,ir:s})))))}function Qc(e,t,n){let r=e.Xi.get(t)||Ei.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}class Zc{constructor(){this.activeTargetIds=Do()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eu{constructor(){this.Hr=new Zc,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Zc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru=null;function iu(){return null===ru?ru=268435456+Math.round(2147483648*Math.random()):ru++,"0x"+ru.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const su={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="WebChannelConnection";class cu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const s=iu(),o=this.To(e,t);Zr("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(e,o,a,n).then((t=>(Zr("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ti("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Yr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=su[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=iu();return new Promise(((s,o)=>{const a=new zr;a.setWithCredentials(!0),a.listenOnce(jr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Vr.NO_ERROR:const t=a.getResponseJson();Zr(au,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Vr.TIMEOUT:Zr(au,`RPC '${e}' ${i} timed out`),o(new ai(oi.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const n=a.getStatus();if(Zr(au,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(oi).indexOf(t)>=0?t:oi.UNKNOWN}(t.status);o(new ai(e,t.message))}else o(new ai(oi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ai(oi.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{Zr(au,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Zr(au,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=iu(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Fr(),o=Ur(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new qr({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Zr(au,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new ou({ro:t=>{d?Zr(au,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Zr(au,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),Zr(au,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,Hr.EventType.OPEN,(()=>{d||Zr(au,`RPC '${e}' stream ${r} transport opened.`)})),p(l,Hr.EventType.CLOSE,(()=>{d||(d=!0,Zr(au,`RPC '${e}' stream ${r} transport closed`),f.wo())})),p(l,Hr.EventType.ERROR,(t=>{d||(d=!0,ti(au,`RPC '${e}' stream ${r} transport errored:`,t),f.wo(new ai(oi.UNAVAILABLE,"The operation could not be completed")))})),p(l,Hr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ii(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Zr(au,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=ga[e];if(void 0!==t)return _a(t)}(t),i=o.message;void 0===n&&(n=oi.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new ai(n,i)),l.close()}else Zr(au,`RPC '${e}' stream ${r} received:`,i),f._o(i)}})),p(o,Br.STAT_EVENT,(t=>{t.stat===$r.PROXY?Zr(au,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===$r.NOPROXY&&Zr(au,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(e){return new ja(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&Zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new hu(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===oi.RESOURCE_EXHAUSTED?(ei(t.toString()),ei("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===oi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new ai(oi.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return Zr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(Zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fu extends du{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=tc(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ei.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ei.min():t.readTime?za(t.readTime):Ei.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Qa(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=to(r)?{documents:ic(e,r)}:{query:sc(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=qa(e,t.resumeToken);const r=Ba(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ei.min())>0){n.readTime=$a(e,t.snapshotVersion.toTimestamp());const r=Ba(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=ac(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Qa(this.serializer),t.removeTarget=e,this.Wo(t)}}class pu extends du{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(ii(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=rc(e.writeResults,e.commitTime),n=za(e.commitTime);return this.listener.cu(n,t)}return ii(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Qa(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>nc(this.serializer,e)))};this.Wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ai(oi.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.vo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ai(oi.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class gu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ei(t),this.mu=!1):Zr("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{ku(this)&&(Zr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=si(e);t.vu.add(4),await _u(t),t.bu.set("Unknown"),t.vu.delete(4),await vu(t)}(this))}))})),this.bu=new gu(n,r)}}async function vu(e){if(ku(e))for(const t of e.Ru)await t(!0)}async function _u(e){for(const t of e.Ru)await t(!1)}function wu(e,t){const n=si(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Iu(n)?Su(n):Hu(n).Ko()&&Eu(n,t))}function bu(e,t){const n=si(e),r=Hu(n);n.Au.delete(t),r.Ko()&&Tu(n,t),0===n.Au.size&&(r.Ko()?r.jo():ku(n)&&n.bu.set("Unknown"))}function Eu(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ei.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Hu(e).su(t)}function Tu(e,t){e.Vu.qt(t),Hu(e).iu(t)}function Su(e){e.Vu=new Pa({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Hu(e).start(),e.bu.gu()}function Iu(e){return ku(e)&&!Hu(e).Uo()&&e.Au.size>0}function ku(e){return 0===si(e).vu.size}function Cu(e){e.Vu=void 0}async function Au(e){e.Au.forEach(((t,n)=>{Eu(e,t)}))}async function Ru(e,t){Cu(e),Iu(e)?(e.bu.Iu(t),Su(e)):e.bu.set("Unknown")}async function Nu(e,t,n){if(e.bu.set("Online"),t instanceof Oa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){Zr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await xu(e,n)}else if(t instanceof Na?e.Vu.Ht(t):t instanceof xa?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Ei.min()))try{const t=await zc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(ts.EMPTY_BYTE_STRING,r.snapshotVersion)),Tu(e,t);const i=new yc(r.target,t,n,r.sequenceNumber);Eu(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Zr("RemoteStore","Failed to raise snapshot:",t),await xu(e,t)}}async function xu(e,t,n){if(!Fi(t))throw t;e.vu.add(1),await _u(e),e.bu.set("Offline"),n||(n=()=>zc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Zr("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await vu(e)}))}function Ou(e,t){return t().catch((n=>xu(e,n,t)))}async function Du(e){const t=si(e),n=zu(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Pu(t);)try{const e=await Wc(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Lu(t,e)}catch(e){await xu(t,e)}Mu(t)&&Fu(t)}function Pu(e){return ku(e)&&e.Eu.length<10}function Lu(e,t){e.Eu.push(t);const n=zu(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Mu(e){return ku(e)&&!zu(e).Uo()&&e.Eu.length>0}function Fu(e){zu(e).start()}async function Uu(e){zu(e).hu()}async function Vu(e){const t=zu(e);for(const n of e.Eu)t.uu(n.mutations)}async function ju(e,t,n){const r=e.Eu.shift(),i=fa.from(r,t,n);await Ou(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Du(e)}async function Bu(e,t){t&&zu(e).ou&&await async function(e,t){if(n=t.code,va(n)&&n!==oi.ABORTED){const n=e.Eu.shift();zu(e).Qo(),await Ou(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Du(e)}var n}(e,t),Mu(e)&&Fu(e)}async function $u(e,t){const n=si(e);n.asyncQueue.verifyOperationInProgress(),Zr("RemoteStore","RemoteStore received new credentials");const r=ku(n);n.vu.add(3),await _u(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await vu(n)}async function qu(e,t){const n=si(e);t?(n.vu.delete(2),await vu(n)):t||(n.vu.add(2),await _u(n),n.bu.set("Unknown"))}function Hu(e){return e.Su||(e.Su=function(e,t,n){const r=si(e);return r.fu(),new fu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{uo:Au.bind(null,e),ao:Ru.bind(null,e),nu:Nu.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Iu(e)?Su(e):e.bu.set("Unknown")):(await e.Su.stop(),Cu(e))}))),e.Su}function zu(e){return e.Du||(e.Du=function(e,t,n){const r=si(e);return r.fu(),new pu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:Uu.bind(null,e),ao:Bu.bind(null,e),au:Vu.bind(null,e),cu:ju.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Du(e)):(await e.Du.stop(),e.Eu.length>0&&(Zr("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ku{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ku(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(oi.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(e,t){if(ei("AsyncQueue",`${t}: ${e}`),Fi(e))return new ai(oi.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ci.comparator(t.key,n.key):(e,t)=>Ci.comparator(e.key,t.key),this.keyedMap=So(),this.sortedSet=new Wi(this.comparator)}static emptySet(e){return new Wu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Wu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.Cu=new Wi(Ci.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):ri():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Yu{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Yu(e,t,Wu.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.Nu=void 0,this.listeners=[]}}class Qu{constructor(){this.queries=new wo((e=>po(e)),fo),this.onlineState="Unknown",this.ku=new Set}}async function Zu(e,t){const n=si(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Xu),i)try{s.Nu=await n.onListen(r)}catch(e){const n=Gu(e,`Initialization of query '${mo(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&rl(n)}async function el(e,t){const n=si(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function tl(e,t){const n=si(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.$u(i)&&(r=!0);t.Nu=i}}r&&rl(n)}function nl(e,t,n){const r=si(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function rl(e){e.ku.forEach((e=>{e.next()}))}class il{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Yu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Yu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(e){this.key=e}}class ol{constructor(e){this.key=e}}class al{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=xo(),this.mutatedKeys=xo(),this.tc=vo(e),this.ec=new Wu(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Ju,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=go(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Yu(this.query,e.ec,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ju,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=xo(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new ol(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new sl(n))})),t}hc(e){this.Yu=e.ir,this.Zu=xo();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Yu.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class cl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ul{constructor(e){this.key=e,this.fc=!1}}class ll{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new wo((e=>po(e)),fo),this._c=new Map,this.mc=new Set,this.gc=new Wi(Ci.comparator),this.yc=new Map,this.Ic=new Nc,this.Tc={},this.Ec=new Map,this.Ac=Sc.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function hl(e,t){const n=Nl(e);let r,i;const s=n.wc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const e=await Jc(n.localStore,lo(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await dl(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&wu(n.remoteStore,e)}return i}async function dl(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await Xc(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Sl(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const s=await Xc(e.localStore,t,!0),o=new al(t,s.ir),a=o.sc(s.documents),c=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Sl(e,n,u.cc);const l=new cl(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function fl(e,t){const n=si(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!fo(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Yc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),bu(n.remoteStore,r.targetId),El(n,r.targetId)})).catch(Li)):(El(n,r.targetId),await Yc(n.localStore,r.targetId,!0))}async function pl(e,t,n){const r=xl(e);try{const e=await function(e,t){const n=si(e),r=bi.now(),i=t.reduce(((e,t)=>e.add(t.key)),xo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Eo(),c=xo();return n.Zi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=ra(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new oa(e.key,t,Cs(t.value.mapValue),Xo.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Io(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new Wi(_i)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Cl(r,e.changes),await Du(r.remoteStore)}catch(e){const t=Gu(e,"Failed to persist write");n.reject(t)}}async function ml(e,t){const n=si(e);try{const e=await Kc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(ii(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?ii(r.fc):e.removedDocuments.size>0&&(ii(r.fc),r.fc=!1))})),await Cl(n,e,t)}catch(e){await Li(e)}}function gl(e,t,n){const r=si(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=si(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Mu(t)&&(r=!0)})),r&&rl(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function yl(e,t,n){const r=si(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),s=i&&i.key;if(s){let e=new Wi(Ci.comparator);e=e.insert(s,As.newNoDocument(s,Ei.min()));const n=xo().add(s),i=new Aa(Ei.min(),new Map,new Wi(_i),e,n);await ml(r,i),r.gc=r.gc.remove(s),r.yc.delete(t),kl(r)}else await Yc(r.localStore,t,!1).then((()=>El(r,t,n))).catch(Li)}async function vl(e,t){const n=si(e),r=t.batch.batchId;try{const e=await Hc(n.localStore,t);bl(n,r,null),wl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cl(n,e)}catch(e){await Li(e)}}async function _l(e,t,n){const r=si(e);try{const e=await function(e,t){const n=si(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ii(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);bl(r,t,n),wl(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Cl(r,e)}catch(n){await Li(n)}}function wl(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function bl(e,t,n){const r=si(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function El(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Tl(e,t)}))}function Tl(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(bu(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),kl(e))}function Sl(e,t,n){for(const r of n)r instanceof sl?(e.Ic.addReference(r.key,t),Il(e,r)):r instanceof ol?(Zr("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||Tl(e,r.key)):ri()}function Il(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(Zr("SyncEngine","New document in limbo: "+n),e.mc.add(r),kl(e))}function kl(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Ci(Si.fromString(t)),r=e.Ac.next();e.yc.set(r,new ul(n)),e.gc=e.gc.insert(n,r),wu(e.remoteStore,new yc(lo(io(n.path)),r,"TargetPurposeLimboResolution",Ui.ct))}}async function Cl(e,t,n){const r=si(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Vc.Li(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.dc.nu(i),await async function(e,t){const n=si(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Mi.forEach(t,(t=>Mi.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Mi.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Fi(e))throw e;Zr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function Al(e,t){const n=si(e);if(!n.currentUser.isEqual(t)){Zr("SyncEngine","User change. New user:",t.toKey());const e=await qc(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new ai(oi.CANCELLED,t))}))})),e.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Cl(n,e.er)}}function Rl(e,t){const n=si(e),r=n.yc.get(t);if(r&&r.fc)return xo().add(r.key);{let e=xo();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}function Nl(e){const t=si(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ml.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yl.bind(null,t),t.dc.nu=tl.bind(null,t.eventManager),t.dc.Pc=nl.bind(null,t.eventManager),t}function xl(e){const t=si(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_l.bind(null,t),t}class Ol{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return $c(this.persistence,new jc,e.initialUser,this.serializer)}createPersistence(e){return new Mc(Uc.zs,this.serializer)}createSharedClientState(e){return new eu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Dl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>gl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Al.bind(null,this.syncEngine),await qu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Qu}createDatastore(e){const t=lu(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new cu(r));var r;return function(e,t,n,r){return new mu(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>gl(this.syncEngine,e,0),s=nu.D()?new nu:new tu,new yu(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new ll(e,t,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=si(e);Zr("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await _u(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ei("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ll{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Jr.UNAUTHENTICATED,this.clientId=vi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Zr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Zr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Gu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ml(e,t){e.asyncQueue.verifyOperationInProgress(),Zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await qc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Fl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Vl(e);Zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>$u(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>$u(t.remoteStore,n))),e._onlineComponents=t}function Ul(e){return"FirebaseError"===e.name?e.code===oi.FAILED_PRECONDITION||e.code===oi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Vl(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Zr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ml(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Ul(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await Ml(e,new Ol)}}else Zr("FirestoreClient","Using default OfflineComponentProvider"),await Ml(e,new Ol);return e._offlineComponents}async function jl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Zr("FirestoreClient","Using user provided OnlineComponentProvider"),await Fl(e,e._uninitializedComponentsProvider._online)):(Zr("FirestoreClient","Using default OnlineComponentProvider"),await Fl(e,new Dl))),e._onlineComponents}function Bl(e){return jl(e).then((e=>e.syncEngine))}async function $l(e){const t=await jl(e),n=t.eventManager;return n.onListen=hl.bind(null,t.syncEngine),n.onUnlisten=fl.bind(null,t.syncEngine),n}function ql(e,t,n={}){const r=new ci;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Pl({next:n=>{t.enqueueAndForget((()=>el(e,o))),n.fromCache&&"server"===r.source?i.reject(new ai(oi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new il(n,s,{includeMetadataChanges:!0,Ku:!0});return Zu(e,o)}(await $l(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hl(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const zl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(e,t,n){if(!n)throw new ai(oi.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Gl(e,t,n,r){if(!0===t&&!0===r)throw new ai(oi.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Wl(e){if(!Ci.isDocumentKey(e))throw new ai(oi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Jl(e){if(Ci.isDocumentKey(e))throw new ai(oi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Yl(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ri()}function Xl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ai(oi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yl(e);throw new ai(oi.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ql{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ai(oi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ai(oi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hl(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Zl{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ql({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(oi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ai(oi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ql(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new li;switch(e.type){case"firstParty":return new pi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ai(oi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=zl.get(e);t&&(Zr("ComponentProvider","Removing Datastore"),zl.delete(e),t.terminate())}(this),Promise.resolve()}}function eh(e,t,n,r={}){var i;const s=(e=Xl(e,Zl))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Jr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ai(oi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Jr(s)}e._authCredentials=new hi(new ui(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new th(this.firestore,e,this._key)}}class nh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new nh(this.firestore,e,this._query)}}class rh extends nh{constructor(e,t,n){super(e,t,io(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new th(this.firestore,null,new Ci(e))}withConverter(e){return new rh(this.firestore,e,this._path)}}function ih(e,t,...n){if(e=(0,a.m9)(e),Kl("collection","path",t),e instanceof Zl){const r=Si.fromString(t,...n);return Jl(r),new rh(e,null,r)}{if(!(e instanceof th||e instanceof rh))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Si.fromString(t,...n));return Jl(r),new rh(e.firestore,null,r)}}function sh(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=vi.A()),Kl("doc","path",t),e instanceof Zl){const r=Si.fromString(t,...n);return Wl(r),new th(e,null,new Ci(r))}{if(!(e instanceof th||e instanceof rh))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Si.fromString(t,...n));return Wl(r),new th(e.firestore,e instanceof rh?e.converter:null,new Ci(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oh{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new hu(this,"async_queue_retry"),this.Xc=()=>{const e=uu();e&&Zr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=uu();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=uu();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new ci;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Fi(e))throw e;Zr("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw ei("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=Ku.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&ri()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class ah extends Zl{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oh,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lh(this),this._firestoreClient.terminate()}}function ch(e,t){const n="object"==typeof e?e:(0,i.Mq)(),r="string"==typeof e?e:t||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.P0)("firestore");e&&eh(s,...e)}return s}function uh(e){return e._firestoreClient||lh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function lh(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new us(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Hl(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Ll(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hh(ts.fromBase64String(e))}catch(e){throw new ai(oi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new hh(ts.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ai(oi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ki(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ai(oi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ai(oi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _i(this._lat,e._lat)||_i(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=/^__.*__$/;class gh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new oa(e,this.data,this.fieldMask,t,this.fieldTransforms):new sa(e,this.data,t,this.fieldTransforms)}}function yh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ri()}}class vh{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new vh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Rh(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(yh(this.ca)&&mh.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class _h{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||lu(e)}ya(e,t,n,r=!1){return new vh({ca:e,methodName:t,ga:n,path:ki.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wh(e){const t=e._freezeSettings(),n=lu(e._databaseId);return new _h(e._databaseId,!!t.ignoreUndefinedProperties,n)}function bh(e,t,n,r,i,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,i);Ih("Data must be an object, but it was:",o,r);const a=Th(r,o);let c,u;if(s.merge)c=new Zi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=kh(t,r,n);if(!o.contains(i))throw new ai(oi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Nh(e,i)||e.push(i)}c=new Zi(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new gh(new ks(a),c,u)}function Eh(e,t){if(Sh(e=(0,a.m9)(e)))return Ih("Unsupported field value:",t,e),Th(e,t);if(e instanceof fh)return function(e,t){if(!yh(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Eh(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Mo(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=bi.fromDate(e);return{timestampValue:$a(t.serializer,n)}}if(e instanceof bi){const n=new bi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:$a(t.serializer,n)}}if(e instanceof ph)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof hh)return{bytesValue:qa(t.serializer,e._byteString)};if(e instanceof th){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ka(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${Yl(e)}`)}(e,t)}function Th(e,t){const n={};return Gi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ki(e,((e,r)=>{const i=Eh(r,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Sh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof bi||e instanceof ph||e instanceof hh||e instanceof th||e instanceof fh)}function Ih(e,t,n){if(!Sh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Yl(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function kh(e,t,n){if((t=(0,a.m9)(t))instanceof dh)return t._internalPath;if("string"==typeof t)return Ah(e,t);throw Rh("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ch=new RegExp("[~\\*/\\[\\]]");function Ah(e,t,n){if(t.search(Ch)>=0)throw Rh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new dh(...t.split("."))._internalPath}catch(r){throw Rh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Rh(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ai(oi.INVALID_ARGUMENT,a+e+c)}function Nh(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new th(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Oh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Dh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Oh extends xh{data(){return super.data()}}function Dh(e,t){return"string"==typeof t?Ah(e,t):t instanceof dh?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ai(oi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lh{convertValue(e,t="none"){switch(ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return is(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ri()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ki(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new ph(is(e.latitude),is(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=as(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(cs(e));default:return null}}convertTimestamp(e){const t=rs(e);return new bi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Si.fromString(e);ii(gc(n));const r=new ls(n.get(1),n.get(3)),i=new Ci(n.popFirst(5));return r.isEqual(t)||ei(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Uh extends xh{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Dh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Vh extends Uh{data(e={}){return super.data(e)}}class jh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Fh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Vh(this._firestore,this._userDataWriter,n.key,n,new Fh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ai(oi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Vh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Fh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Vh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Fh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Bh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Bh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri()}}class $h extends Lh{constructor(e){super(),this.firestore=e}convertBytes(e){return new hh(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new th(this.firestore,null,t)}}function qh(e){e=Xl(e,nh);const t=Xl(e.firestore,ah),n=uh(t),r=new $h(t);return Ph(e._query),ql(n,e._query).then((n=>new jh(t,r,e,n)))}function Hh(e){return Kh(Xl(e.firestore,ah),[new la(e._key,Xo.none())])}function zh(e,t){const n=Xl(e.firestore,ah),r=sh(e),i=Mh(e.converter,t);return Kh(n,[bh(wh(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Xo.exists(!1))]).then((()=>r))}function Kh(e,t){return function(e,t){const n=new ci;return e.asyncQueue.enqueueAndForget((async()=>pl(await Bl(e),t,n))),n.promise}(uh(e),t)}!function(e,t=!0){!function(e){Yr=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new ah(new di(e.getProvider("auth-internal")),new gi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ai(oi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Wr,"3.13.0",e),(0,i.KN)(Wr,"3.13.0","esm2017")}()},2483:function(e,t,n){n.d(t,{p7:function(){return nt},r5:function(){return j}});n(560);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=b(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_(e[n],t[n]))return!1;return!0}function _(e,t){return l(e)?w(e,t):l(t)?w(t,e):e===t}function w(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function b(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function S(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const I=/^[^#]+#/;function k(e,t){return e.replace(I,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=C(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const x=new Map;function O(e,t){x.set(e,t)}function D(e){const t=x.get(e);return x.delete(e),t}let P=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function M(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=L(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:A()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function F(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function U(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,F(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:A()});s(o.current,o,!0);const c=a({},F(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function V(e){e=S(e);const t=U(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:k.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function j(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),V(e)}function B(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function K(e,t){return a(new Error,{type:e,[H]:!0},t)}function G(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const W="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},Y=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},J,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Y,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||W;if(l!==W){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Q(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Q(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ie(e,t,n){const r=X(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=ae(e);c.aliasOf=r&&r.record;const h=he(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ue(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw K(1,{location:e});0,o=i.record.name,c=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw K(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:le(u)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,me=/\//g,ge=/=/g,ye=/\?/g,ve=/\+/g,_e=/%5B/g,we=/%5D/g,be=/%5E/g,Ee=/%60/g,Te=/%7B/g,Se=/%7C/g,Ie=/%7D/g,ke=/%20/g;function Ce(e){return encodeURI(""+e).replace(Se,"|").replace(_e,"[").replace(we,"]")}function Ae(e){return Ce(e).replace(Te,"{").replace(Ie,"}").replace(be,"^")}function Re(e){return Ce(e).replace(ve,"%2B").replace(ke,"+").replace(fe,"%23").replace(pe,"%26").replace(Ee,"`").replace(Te,"{").replace(Ie,"}").replace(be,"^")}function Ne(e){return Re(e).replace(ge,"%3D")}function xe(e){return Ce(e).replace(fe,"%23").replace(ye,"%3F")}function Oe(e){return null==e?"":xe(e).replace(me,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ve," "),n=e.indexOf("="),s=De(n<0?e:e.slice(0,n)),o=n<0?null:De(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Ne(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Re(e))):[r&&Re(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),je=Symbol(""),Be=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function qe(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(K(4,{from:n,to:t})):e instanceof Error?a(e):B(e)?a(K(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function He(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(ze(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push(qe(c,n,r,s,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&qe(u,n,r,s,e)()}))))}}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.f3)(Ve),n=(0,r.f3)(je),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Ye(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return Je(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ge=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,i.qj)(Ke(e)),{options:s}=(0,r.f3)(Ve),o=(0,r.Fl)((()=>({[Qe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=Ge;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(Be),o=(0,r.Fl)((()=>e.route||s.value)),c=(0,r.f3)(Ue,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ue,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Fe,l),(0,r.JJ)(Be,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&y(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return et(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||Pe,o=e.stringifyQuery||Le,h=e.history;const d=$e(),m=$e(),y=$e(),v=(0,i.XI)(q);let _=q;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,(e=>""+e)),b=c.bind(null,Oe),T=c.bind(null,De);function S(e,n){let r,i;return $(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:De(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:b(t)}),r.params=b(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=w(T(s.params));const u=p(o,a({},e,{hash:Ae(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Le?Me(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function P(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function L(e,t){if(_!==e)return K(8,{from:t,to:e})}function M(e){return V(e)}function F(e){return M(a(P(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function V(e,t){const n=_=x(e),r=v.value,i=e.state,s=e.force,c=!0===e.replace,u=U(n);if(u)return V(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&g(o,r,n)&&(h=K(16,{to:l,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):H(l,r)).catch((e=>G(e)?G(e,2)?e:ne(e):ee(e,l,r))).then((e=>{if(e){if(G(e,2))return V(a({replace:c},P(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=W(l,r,!0,c,i);return z(l,r,e),e}))}function j(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e){const t=ae.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function H(e,t){let n;const[r,i,s]=rt(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=j.bind(null,e,t);return n.push(o),ue(n).then((()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),ue(n)})).then((()=>{n=He(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),ue(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),ue(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(s,"beforeRouteEnter",e,t),n.push(o),ue(n)))).then((()=>{n=[];for(const r of m.list())n.push(qe(r,e,t));return n.push(o),ue(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function z(e,t,n){y.list().forEach((r=>B((()=>r(e,t,n)))))}function W(e,t,n,r,i){const o=L(e,t);if(o)return o;const c=t===q,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),v.value=e,re(e,t,n,c),ne()}let J;function Y(){J||(J=h.listen(((e,t,n)=>{if(!ce.listening)return;const r=x(e),i=U(r);if(i)return void V(a(i,{replace:!0}),r).catch(u);_=r;const o=v.value;s&&O(N(o.fullPath,n.delta),A()),H(r,o).catch((e=>G(e,12)?e:G(e,2)?(V(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),ee(e,r,o)))).then((e=>{e=e||W(r,o,!1),e&&(n.delta&&!G(e,8)?h.go(-n.delta,!1):n.type===E.pop&&G(e,20)&&h.go(-1,!1)),z(r,o,e)})).catch(u)})))}let X,Q=$e(),Z=$e();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function te(){return X&&v.value!==q?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function ne(e){return X||(X=!e,Y(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function re(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&D(N(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&R(e))).catch((e=>ee(e,t,n)))}const ie=e=>h.go(e);let oe;const ae=new Set,ce={currentRoute:v,listening:!0,addRoute:S,removeRoute:I,hasRoute:C,getRoutes:k,resolve:x,options:e,push:M,replace:F,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!oe&&v.value===q&&(oe=!0,M(h.location).catch((e=>{0})));const n={};for(const i in q)Object.defineProperty(n,i,{get:()=>v.value[i],enumerable:!0});e.provide(Ve,t),e.provide(je,(0,i.Um)(n)),e.provide(Be,v);const r=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(_=q,J&&J(),J=null,v.value=q,oe=!1,X=!1),r()}}};function ue(e){return e.reduce(((e,t)=>e.then((()=>B(t)))),Promise.resolve())}return ce}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>y(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>y(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.8742059e.js.map