(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8679:function(e,t,n){"use strict";var i=n(9864),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return i.isMemo(e)?o:a[e.$$typeof]||r}a[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[i.Memo]=o;var h=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,n,i){if("string"!=typeof n){if(f){var r=p(n);r&&r!==f&&e(t,r,i)}var o=u(n);c&&(o=o.concat(c(n)));for(var a=l(t),m=l(n),g=0;g<o.length;++g){var _=o[g];if(!s[_]&&!(i&&i[_])&&!(m&&m[_])&&!(a&&a[_])){var v=d(n,_);try{h(t,_,v)}catch(y){}}}}return t}},3988:function(e,t,n){"use strict";n.d(t,{H:function(){return o},m:function(){return a}});var i=n(7294),r=n(5893),s=(0,i.createContext)(null),o=function(e){var t=e.children,n=e.authService;return(0,r.jsx)(s.Provider,{value:n,children:t})},a=function(){var e=(0,i.useContext)(s);if(!e)throw Error("Not under AuthProvider");return e}},8664:function(e,t,n){"use strict";n.d(t,{F:function(){return a},U:function(){return o}});var i=n(7294),r=n(5893),s=(0,i.createContext)(null),o=function(e){var t=e.children,n=e.dbService;return(0,r.jsx)(s.Provider,{value:n,children:t})},a=function(){var e=(0,i.useContext)(s);if(!e)throw Error("Not under DBProvider");return e}},4403:function(e,t,n){"use strict";let i,r,s,o,a,l,h,u,c,d,p,f,m;n.r(t),n.d(t,{default:function(){return le}});var g,_,v,y,b,w,C,I,k=n(9499),T=n(9521),S=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},E=(0,T.iv)(b||(b=S(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));(0,T.vJ)(w||(w=S(["",""],["",""])),E),console.log();var P=(0,T.vJ)(['@font-face{font-family:"Pretendard-bold";src:url("/fonts/Pretendard-Bold.woff2") format("woff2");font-weight:bold;}@font-face{font-family:"Pretendard-regular";src:url("/fonts/Pretendard-Regular.woff2") format("woff2");font-weight:300;}',' *,*::before,*::after{box-sizing:border-box;font-family:"Pretendard-Regular";}body{font-family:"Pretendard-regular",sans-serif;line-height:1.5;margin:0;color:','}h1{font-family:"Pretendard-bold";}input{outline:none;text-align:center;}button{cursor:pointer;background-color:transparent;border:none;}a{text-decoration:none;color:inherit;}'],E,function(e){return e.theme.colors.black}),R={colors:{white:"white",blue:"black",black:"#333",gray:"#888",lightGray:"#f2f4f7",mainColor:"lightcoral"},fontSize:{text:"16px"}};function N(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function x(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),e}var A=n(3454);/**
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
 */ let D={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},M=function(e,t){if(!e)throw L(t)},L=function(e){return Error("Firebase Database ("+D.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},F=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):(64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},q=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let o=e[n++],a=e[n++],l=e[n++],h=((7&r)<<18|(63&o)<<12|(63&a)<<6|63&l)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(1023&h))}else{let u=e[n++],c=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&u)<<6|63&c)}}return t.join("")},U={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){let s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,h=l?e[r+2]:0,u=s>>2,c=(3&s)<<4|a>>4,d=(15&a)<<2|h>>6,p=63&h;l||(p=64,o||(d=64)),i.push(n[u],n[c],n[d],n[p])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(F(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):q(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){let s=n[e.charAt(r++)],o=r<e.length,a=o?n[e.charAt(r)]:0;++r;let l=r<e.length,h=l?n[e.charAt(r)]:64;++r;let u=r<e.length,c=u?n[e.charAt(r)]:64;if(++r,null==s||null==a||null==h||null==c)throw Error();let d=s<<2|a>>4;if(i.push(d),64!==h){let p=a<<4&240|h>>2;if(i.push(p),64!==c){let f=h<<6&192|c;i.push(f)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},j=function(e){let t=F(e);return U.encodeByteArray(t,!0)},W=function(e){return j(e).replace(/\./g,"")},z=function(e){try{return U.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */ function H(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function V(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function $(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function B(){return!0===D.NODE_CLIENT||!0===D.NODE_ADMIN}/**
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
 */ let K=()=>(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,G=()=>{if(void 0===A||void 0===A.env)return;let e=A.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Y=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let n=e&&z(e[1]);return n&&JSON.parse(n)},Q=()=>{try{return K()||G()||Y()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},J=e=>{var t,n;return null===(n=null===(t=Q())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},X=e=>{let t=J(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Z=()=>{var e;return null===(e=Q())||void 0===e?void 0:e.config},ee=e=>{var t;return null===(t=Q())||void 0===t?void 0:t[`_${e}`]};/**
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
 */ class et{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}class en extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(er,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new en(i,o,n);return a}}let er=/\{\$([^}]+)}/g;/**
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
 */ function es(e){return JSON.parse(e)}function eo(e){return JSON.stringify(e)}/**
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
 */ let ea=function(e){let t={},n={},i={},r="";try{let s=e.split(".");t=es(z(s[0])||""),n=es(z(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(o){}return{header:t,claims:n,data:i,signature:r}},el=function(e){let t=ea(e),n=t.claims;return!!n&&"object"==typeof n&&n.hasOwnProperty("iat")},eh=function(e){let t=ea(e).claims;return"object"==typeof t&&!0===t.admin};/**
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
 */ function eu(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ec(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ed(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ep(e,t,n){let i={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function ef(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let s=e[r],o=t[r];if(em(s)&&em(o)){if(!ef(s,o))return!1}else if(s!==o)return!1}for(let a of i)if(!n.includes(a))return!1;return!0}function em(e){return null!==e&&"object"==typeof e}/**
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
 */ function eg(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function e_(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function ev(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
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
 */ class ey{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let n,i;t||(t=0);let r=this.W_;if("string"==typeof e)for(let s=0;s<16;s++)r[s]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let o=0;o<16;o++)r[o]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let a=16;a<80;a++){let l=r[a-3]^r[a-8]^r[a-14]^r[a-16];r[a]=(l<<1|l>>>31)&4294967295}let h=this.chain_[0],u=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4];for(let f=0;f<80;f++){f<40?f<20?(n=d^u&(c^d),i=1518500249):(n=u^c^d,i=1859775393):f<60?(n=u&c|d&(u|c),i=2400959708):(n=u^c^d,i=3395469782);let m=(h<<5|h>>>27)+n+p+i+r[f]&4294967295;p=d,d=c,c=(u<<30|u>>>2)&4294967295,u=h,h=m}this.chain_[0]=this.chain_[0]+h&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}class eb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(i=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(i.next=ew),void 0===i.error&&(i.error=ew),void 0===i.complete&&(i.complete=ew);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ew(){}function eC(e,t){return`${e} failed: ${t} argument `}/**
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
 */ let eI=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){let s=r-55296;M(++i<e.length,"Surrogate pair missing trail surrogate.");let o=e.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},ek=function(e){let t=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */ function eT(e){return e&&e._delegate?e._delegate:e}class eS{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */ let eE="[DEFAULT]";/**
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
 */ class eP{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new et;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(r){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eE})}catch(t){}for(let[n,i]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(n);try{let s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch(o){}}}}clearInstance(e=eE){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eE){return this.instances.has(e)}getOptions(e=eE){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[r,s]of this.instancesDeferred.entries()){let o=this.normalizeInstanceIdentifier(r);n===o&&s.resolve(i)}return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===eE?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=eE){return this.component?this.component.multipleInstances?e:eE:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */ class eR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eP(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */ let eN=[];(_=C||(C={}))[_.DEBUG=0]="DEBUG",_[_.VERBOSE=1]="VERBOSE",_[_.INFO=2]="INFO",_[_.WARN=3]="WARN",_[_.ERROR=4]="ERROR",_[_.SILENT=5]="SILENT";let eO={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},ex=C.INFO,eA={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},eD=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=eA[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eM{constructor(e){this.name=e,this._logLevel=ex,this._logHandler=eD,this._userLogHandler=null,eN.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}let eL=(e,t)=>t.some(t=>e instanceof t),eF=new WeakMap,eq=new WeakMap,eU=new WeakMap,ej=new WeakMap,eW=new WeakMap,ez={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eq.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eU.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eH(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eH(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(eH(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eF.set(t,e)}).catch(()=>{}),eW.set(t,e),t}(e);if(ej.has(e))return ej.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(eV(this),e),eH(eF.get(this))}:function(...e){return eH(t.apply(eV(this),e))}:function(e,...n){let i=t.call(eV(this),e,...n);return eU.set(i,e.sort?e.sort():[e]),eH(i)}:(t instanceof IDBTransaction&&function(e){if(eq.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});eq.set(e,t)}(t),eL(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,ez):t;return n!==e&&(ej.set(e,n),eW.set(n,e)),n}let eV=e=>eW.get(e),e$=["get","getKey","getAll","getAllKeys","count"],eB=["put","add","delete","clear"],eK=new Map;function eG(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eK.get(t))return eK.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=eB.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||e$.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return eK.set(t,s),s}ez={...g=ez,get:(e,t,n)=>eG(e,t)||g.get(e,t,n),has:(e,t)=>!!eG(e,t)||g.has(e,t)};/**
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
 */ class eY{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let eQ="@firebase/app",eJ="0.8.4",eX=new eM("@firebase/app"),eZ="[DEFAULT]",e0={[eQ]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},e1=new Map,e2=new Map;function e3(e){let t=e.name;if(e2.has(t))return eX.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(e2.set(t,e),e1.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){eX.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function e4(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let e6=new ei("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */ class e5{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eS("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw e6.create("app-deleted",{appName:this._name})}}/**
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
 */ let e9="9.14.0";function e8(e,t={}){let n=e;if("object"!=typeof t){let i=t;t={name:i}}let r=Object.assign({name:eZ,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw e6.create("bad-app-name",{appName:String(s)});if(n||(n=Z()),!n)throw e6.create("no-options");let o=e1.get(s);if(o){if(ef(n,o.options)&&ef(r,o.config))return o;throw e6.create("duplicate-app",{appName:s})}let a=new eR(s);for(let l of e2.values())a.addComponent(l);let h=new e5(n,r,a);return e1.set(s,h),h}function e7(e=eZ){let t=e1.get(e);if(!t&&e===eZ)return e8();if(!t)throw e6.create("no-app",{appName:e});return t}function te(e,t,n){var i;let r=null!==(i=e0[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eX.warn(a.join(" "));return}e3(new eS(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}let tt="firebase-heartbeat-store",tn=null;function ti(){return tn||(tn=(function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=eH(o);return i&&o.addEventListener("upgradeneeded",e=>{i(eH(o.result),e.oldVersion,e.newVersion,eH(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade(e,t){0===t&&e.createObjectStore(tt)}}).catch(e=>{throw e6.create("idb-open",{originalErrorMessage:e.message})})),tn}async function tr(e){try{let t=await ti();return t.transaction(tt).objectStore(tt).get(to(e))}catch(i){if(i instanceof en)eX.warn(i.message);else{let n=e6.create("idb-get",{originalErrorMessage:null==i?void 0:i.message});eX.warn(n.message)}}}async function ts(e,t){try{let n=await ti(),i=n.transaction(tt,"readwrite"),r=i.objectStore(tt);return await r.put(t,to(e)),i.done}catch(o){if(o instanceof en)eX.warn(o.message);else{let s=e6.create("idb-set",{originalErrorMessage:null==o?void 0:o.message});eX.warn(s.message)}}}function to(e){return`${e.name}!${e.options.appId}`}class ta{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new th(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=tl();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=tl(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let s=n.find(e=>e.agent===r.agent);if(s){if(s.dates.push(r.date),tu(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tu(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=W(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tl(){let e=new Date;return e.toISOString().substring(0,10)}class th{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}}).then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await tr(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let i=await this.read();return ts(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let i=await this.read();return ts(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function tu(e){return W(JSON.stringify({version:2,heartbeats:e})).length}e3(new eS("platform-logger",e=>new eY(e),"PRIVATE")),e3(new eS("heartbeat",e=>new ta(e),"PRIVATE")),te(eQ,eJ,""),te(eQ,eJ,"esm2017"),te("fire-js","");function tc(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function td(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let tp=new ei("auth","Firebase",td()),tf=new eM("@firebase/auth");function tm(e,...t){tf.logLevel<=C.ERROR&&tf.error(`Auth (${e9}): ${e}`,...t)}/**
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
 */ function tg(e,...t){throw ty(e,...t)}function t_(e,...t){return ty(e,...t)}function tv(e,t,n){let i=Object.assign(Object.assign({},td()),{[t]:n}),r=new ei("auth","Firebase",i);return r.create(t,{appName:e.name})}function ty(e,...t){if("string"!=typeof e){let n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return tp.create(e,...t)}function tb(e,t,...n){if(!e)throw ty(t,...n)}function tw(e){let t="INTERNAL ASSERTION FAILED: "+e;throw tm(t),Error(t)}/**
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
 */ let tC=new Map;function tI(e){e instanceof Function||tw("Expected a class definition");let t=tC.get(e);return t?(t instanceof e||tw("Instance stored in cache mismatched with class"),t):(t=new e,tC.set(e,t),t)}/**
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
 */ function tk(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tT(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
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
 */ class tS{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||tw("Short delay should be less than long delay!"),this.isMobile=V()||$()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===tT()||"https:"===tT()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */ function tE(e,t){e.emulator||tw("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */ class tP{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void tw("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void tw("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void tw("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */ let tR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},tN=new tS(3e4,6e4);function tO(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tx(e,t,n,i,r={}){return tA(e,r,async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});let o=eg(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),tP.fetch()(tM(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function tA(e,t,n){e._canInitEmulator=!1;let i=Object.assign(Object.assign({},tR),t);try{let r=new tL(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw tF(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===l)throw tF(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===l)throw tF(e,"email-already-in-use",o);if("USER_DISABLED"===l)throw tF(e,"user-disabled",o);let u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw tv(e,u,h);tg(e,u)}}catch(c){if(c instanceof en)throw c;tg(e,"network-request-failed")}}async function tD(e,t,n,i,r={}){let s=await tx(e,t,n,i,r);return"mfaPendingCredential"in s&&tg(e,"multi-factor-auth-required",{_serverResponse:s}),s}function tM(e,t,n,i){let r=`${t}${n}?${i}`;return e.config.emulator?tE(e.config,r):`${e.config.apiScheme}://${r}`}class tL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(t_(this.auth,"network-request-failed")),tN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tF(e,t,n){let i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);let r=t_(e,t,i);return r.customData._tokenResponse=n,r}/**
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
 */ async function tq(e,t){return tx(e,"POST","/v1/accounts:delete",t)}async function tU(e,t){return tx(e,"POST","/v1/accounts:lookup",t)}/**
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
 */ function tj(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(n){}}async function tW(e,t=!1){let n=eT(e),i=await n.getIdToken(t),r=tH(i);tb(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");let s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:tj(tz(r.auth_time)),issuedAtTime:tj(tz(r.iat)),expirationTime:tj(tz(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function tz(e){return 1e3*Number(e)}function tH(e){let[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return tm("JWT malformed, contained fewer than 3 sections"),null;try{let r=z(n);if(!r)return tm("Failed to decode base64 JWT payload"),null;return JSON.parse(r)}catch(s){return tm("Caught error parsing JWT payload as JSON",null==s?void 0:s.toString()),null}}/**
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
 */ async function tV(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof en&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}/**
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
 */ class t${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}{this.errorBackoff=3e4;let i=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=i-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */ class tB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tj(this.lastLoginAt),this.creationTime=tj(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */ async function tK(e){var t;let n=e.auth,i=await e.getIdToken(),r=await tV(e,tU(n,{idToken:i}));tb(null==r?void 0:r.users.length,n,"internal-error");let s=r.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,n=tc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[],a=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,o),l=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tB(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&h};Object.assign(e,u)}async function tG(e){let t=eT(e);await tK(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
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
 */ async function tY(e,t){let n=await tA(e,{},async()=>{let n=eg({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=tM(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",tP.fetch()(s,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */ class tQ{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){tb(e.idToken,"internal-error"),tb(void 0!==e.idToken,"internal-error"),tb(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=tH(e);return tb(t,"internal-error"),tb(void 0!==t.exp,"internal-error"),tb(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(tb(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:i,expiresIn:r}=await tY(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new tQ;return n&&(tb("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(tb("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(tb("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tQ,this.toJSON())}_performRefresh(){return tw("not implemented")}}/**
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
 */ function tJ(e,t){tb("string"==typeof e||void 0===e,"internal-error",{appName:t})}class tX{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=tc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new t$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tB(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await tV(this,this.stsTokenManager.getToken(this.auth,e));return tb(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tW(this,e)}reload(){return tG(this)}_assign(e){this!==e&&(tb(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new tX(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){tb(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await tK(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await tV(this,tq(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,h;let u=null!==(n=t.displayName)&&void 0!==n?n:void 0,c=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,_=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:C}=t;tb(v&&C,e,"internal-error");let I=tQ.fromJSON(this.name,C);tb("string"==typeof v,e,"internal-error"),tJ(u,e.name),tJ(c,e.name),tb("boolean"==typeof y,e,"internal-error"),tb("boolean"==typeof b,e,"internal-error"),tJ(d,e.name),tJ(p,e.name),tJ(f,e.name),tJ(m,e.name),tJ(g,e.name),tJ(_,e.name);let k=new tX({uid:v,auth:e,email:c,emailVerified:y,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:I,createdAt:g,lastLoginAt:_});return w&&Array.isArray(w)&&(k.providerData=w.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){let i=new tQ;i.updateFromServerResponse(t);let r=new tX({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await tK(r),r}}/**
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
 */ class tZ{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */ function t0(e,t,n){return`firebase:${e}:${t}:${n}`}tZ.type="NONE";class t1{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:i,name:r}=this.auth;this.fullUserKey=t0(this.userKey,i.apiKey,r),this.fullPersistenceKey=t0("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?tX._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new t1(tI(tZ),e,n);let i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=i[0]||tI(tZ),s=t0(n,e.config.apiKey,e.name),o=null;for(let a of t)try{let l=await a._get(s);if(l){let h=tX._fromJSON(e,l);a!==r&&(o=h),r=a;break}}catch(u){}let c=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&c.length&&(r=c[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(t){}}))),new t1(r,e,n)}}/**
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
 */ function t2(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(t5(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(t3(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(t8(t))return"Blackberry";if(t7(t))return"Webos";if(t4(t))return"Safari";if((t.includes("chrome/")||t6(t))&&!t.includes("edge/"))return"Chrome";if(t9(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function t3(e=H()){return/firefox\//i.test(e)}function t4(e=H()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function t6(e=H()){return/crios\//i.test(e)}function t5(e=H()){return/iemobile/i.test(e)}function t9(e=H()){return/android/i.test(e)}function t8(e=H()){return/blackberry/i.test(e)}function t7(e=H()){return/webos/i.test(e)}function ne(e=H()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function nt(e=H()){return ne(e)||t9(e)||t7(e)||t8(e)||/windows phone/i.test(e)||t5(e)}/**
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
 */ function nn(e,t=[]){let n;switch(e){case"Browser":n=t2(H());break;case"Worker":n=`${t2(H())}-${e}`;break;default:n=e}let i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${e9}/${i}`}/**
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
 */ class ni{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,i)=>{try{let r=e(t);n(r)}catch(s){i(s)}});n.onAbort=t,this.queue.push(n);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(s){for(let i of(t.reverse(),t))try{i()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==s?void 0:s.message})}}}/**
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
 */ class nr{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ns(this),this.idTokenSubscription=new ns(this),this.beforeStateQueue=new ni(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tI(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await t1.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&(null==a?void 0:a.user)&&(i=a.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return(tb(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId)?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tK(e)}catch(t){if((null==t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?eT(e):null;return t&&tb(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&tb(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tI(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&tI(e)||this._popupRedirectResolver;tb(t,this,"argument-error"),this.redirectPersistenceManager=await t1.create(this,[tI(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(tb(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"==typeof t)?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return tb(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}class ns{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let n=new eb(e,void 0);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return tb(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function no(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function na(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
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
 */ class nl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tw("not implemented")}_getIdTokenResponse(e){return tw("not implemented")}_linkToIdToken(e,t){return tw("not implemented")}_getReauthenticationResolver(e){return tw("not implemented")}}async function nh(e,t){return tx(e,"POST","/v1/accounts:update",t)}/**
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
 */ async function nu(e,t){return tD(e,"POST","/v1/accounts:signInWithPassword",tO(e,t))}/**
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
 */ async function nc(e,t){return tD(e,"POST","/v1/accounts:signInWithEmailLink",tO(e,t))}async function nd(e,t){return tD(e,"POST","/v1/accounts:signInWithEmailLink",tO(e,t))}/**
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
 */ class np extends nl{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new np(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new np(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nu(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nc(e,{email:this._email,oobCode:this._password});default:tg(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nd(e,{idToken:t,email:this._email,oobCode:this._password});default:tg(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */ async function nf(e,t){return tD(e,"POST","/v1/accounts:signInWithIdp",tO(e,t))}class nm extends nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new nm(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tg("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=tc(t,["providerId","signInMethod"]);if(!n||!i)return null;let s=new nm(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return nf(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,nf(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,nf(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=eg(t)}return e}}/**
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
 */ async function ng(e,t){return tx(e,"POST","/v1/accounts:sendVerificationCode",tO(e,t))}async function n_(e,t){return tD(e,"POST","/v1/accounts:signInWithPhoneNumber",tO(e,t))}async function nv(e,t){let n=await tD(e,"POST","/v1/accounts:signInWithPhoneNumber",tO(e,t));if(n.temporaryProof)throw tF(e,"account-exists-with-different-credential",n);return n}let ny={USER_NOT_FOUND:"user-not-found"};async function nb(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return tD(e,"POST","/v1/accounts:signInWithPhoneNumber",tO(e,n),ny)}/**
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
 */ class nw extends nl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new nw({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new nw({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return n_(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return nb(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new nw({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}class nC{constructor(e){var t,n,i,r,s,o;let a=e_(ev(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,h=null!==(n=a.oobCode)&&void 0!==n?n:null,u=/**
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
 */ function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);tb(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=e_(ev(e)).link,n=t?e_(ev(t)).deep_link_id:null,i=e_(ev(e)).deep_link_id,r=i?e_(ev(i)).link:null;return r||i||n||t||e}(e);try{return new nC(t)}catch(n){return null}}}/**
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
 */ class nI{constructor(){this.providerId=nI.PROVIDER_ID}static credential(e,t){return np._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=nC.parseLink(t);return tb(n,"argument-error"),np._fromEmailAndCode(e,n.code,n.tenantId)}}nI.PROVIDER_ID="password",nI.EMAIL_PASSWORD_SIGN_IN_METHOD="password",nI.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */ class nk{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */ class nT extends nk{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */ class nS extends nT{constructor(){super("facebook.com")}static credential(e){return nm._fromParams({providerId:nS.PROVIDER_ID,signInMethod:nS.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nS.credentialFromTaggedObject(e)}static credentialFromError(e){return nS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nS.credential(e.oauthAccessToken)}catch(t){return null}}}nS.FACEBOOK_SIGN_IN_METHOD="facebook.com",nS.PROVIDER_ID="facebook.com";/**
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
 */ class nE extends nT{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nm._fromParams({providerId:nE.PROVIDER_ID,signInMethod:nE.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nE.credentialFromTaggedObject(e)}static credentialFromError(e){return nE.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nE.credential(t,n)}catch(i){return null}}}nE.GOOGLE_SIGN_IN_METHOD="google.com",nE.PROVIDER_ID="google.com";/**
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
 */ class nP extends nT{constructor(){super("github.com")}static credential(e){return nm._fromParams({providerId:nP.PROVIDER_ID,signInMethod:nP.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nP.credentialFromTaggedObject(e)}static credentialFromError(e){return nP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nP.credential(e.oauthAccessToken)}catch(t){return null}}}nP.GITHUB_SIGN_IN_METHOD="github.com",nP.PROVIDER_ID="github.com";/**
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
 */ class nR extends nT{constructor(){super("twitter.com")}static credential(e,t){return nm._fromParams({providerId:nR.PROVIDER_ID,signInMethod:nR.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nR.credentialFromTaggedObject(e)}static credentialFromError(e){return nR.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return nR.credential(t,n)}catch(i){return null}}}/**
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
 */ async function nN(e,t){return tD(e,"POST","/v1/accounts:signUp",tO(e,t))}nR.TWITTER_SIGN_IN_METHOD="twitter.com",nR.PROVIDER_ID="twitter.com";/**
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
 */ class nO{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){let r=await tX._fromIdTokenResponse(e,n,i),s=nx(n),o=new nO({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let i=nx(n);return new nO({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function nx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */ class nA extends en{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,nA.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new nA(e,t,n,i)}}function nD(e,t,n,i){let r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw nA._fromErrorAndOperation(e,n,t,i);throw n})}async function nM(e,t,n=!1){let i=await tV(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nO._forOperation(e,"link",i)}/**
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
 */ async function nL(e,t,n=!1){let{auth:i}=e,r="reauthenticate";try{let s=await tV(e,nD(i,r,t,e),n);tb(s.idToken,i,"internal-error");let o=tH(s.idToken);tb(o,i,"internal-error");let{sub:a}=o;return tb(e.uid===a,i,"user-mismatch"),nO._forOperation(e,r,s)}catch(l){throw(null==l?void 0:l.code)==="auth/user-not-found"&&tg(i,"user-mismatch"),l}}/**
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
 */ async function nF(e,t,n=!1){let i="signIn",r=await nD(e,i,t),s=await nO._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function nq(e,t){return nF(eT(e),t)}async function nU(e,t,n){let i=eT(e),r=await nN(i,{returnSecureToken:!0,email:t,password:n}),s=await nO._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}new WeakMap;let nj="__sak";/**
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
 */ class nW{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(nj,"1"),this.storage.removeItem(nj),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class nz extends nW{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
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
 */ function(){let e=H();return t4(e)||ne(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=nt(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let r=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(function(){let e=H();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nz.type="LOCAL";/**
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
 */ class nH extends nW{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nH.type="SESSION";/**
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
 */ class nV{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new nV(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:i}=e.data,r=this.handlersMap[n];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(r).map(async t=>t(e.origin,i)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(n){return{fulfilled:!1,reason:n}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
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
 */ function n$(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}nV.receivers=[];/**
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
 */ class nB{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let i,r;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=n$("",20);s.port1.start();let h=setTimeout(()=>{a(Error("unsupported_event"))},n);r={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(h),clearTimeout(i),a(Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
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
 */ function nK(){return window}/**
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
 */ function nG(){return void 0!==nK().WorkerGlobalScope&&"function"==typeof nK().importScripts}async function nY(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
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
 */ let nQ="firebaseLocalStorageDb",nJ="firebaseLocalStorage",nX="fbase_key";class nZ{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function n0(e,t){return e.transaction([nJ],t?"readwrite":"readonly").objectStore(nJ)}function n1(){let e=indexedDB.open(nQ,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(nJ,{keyPath:nX})}catch(i){n(i)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(nJ)?t(n):(n.close(),await function(){let e=indexedDB.deleteDatabase(nQ);return new nZ(e).toPromise()}(),t(await n1()))})})}async function n2(e,t,n){let i=n0(e,!0).put({[nX]:t,value:n});return new nZ(i).toPromise()}async function n3(e,t){let n=n0(e,!1).get(t),i=await new nZ(n).toPromise();return void 0===i?null:i.value}function n4(e,t){let n=n0(e,!0).delete(t);return new nZ(n).toPromise()}class n6{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await n1()),this.db}async _withRetries(e){let t=0;for(;;)try{let n=await this._openDb();return await e(n)}catch(i){if(t++>3)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nG()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nV._getInstance(nG()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nY(),!this.activeServiceWorker)return;this.sender=new nB(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await n1();return await n2(e,nj,"1"),await n4(e,nj),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>n2(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>n3(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>n4(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=n0(e,!1).getAll();return new nZ(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(let s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function n5(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function n9(e,t,n){var i,r,s;let o=await n.verify();try{let a;if(tb("string"==typeof o,e,"argument-error"),tb("recaptcha"===n.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let l=a.session;if("phoneNumber"in a){tb("enroll"===l.type,e,"internal-error");let h=await (r={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},tx(e,"POST","/v2/accounts/mfaEnrollment:start",tO(e,r)));return h.phoneSessionInfo.sessionInfo}{tb("signin"===l.type,e,"internal-error");let u=(null===(i=a.multiFactorHint)||void 0===i?void 0:i.uid)||a.multiFactorUid;tb(u,e,"missing-multi-factor-info");let c=await (s={mfaPendingCredential:l.credential,mfaEnrollmentId:u,phoneSignInInfo:{recaptchaToken:o}},tx(e,"POST","/v2/accounts/mfaSignIn:start",tO(e,s)));return c.phoneResponseInfo.sessionInfo}}{let{sessionInfo:d}=await ng(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return d}}finally{n._reset()}}n6.type="LOCAL",n5("rcb"),new tS(3e4,6e4);/**
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
 */ class n8{constructor(e){this.providerId=n8.PROVIDER_ID,this.auth=eT(e)}verifyPhoneNumber(e,t){return n9(this.auth,e,eT(t))}static credential(e,t){return nw._fromVerification(e,t)}static credentialFromResult(e){return n8.credentialFromTaggedObject(e)}static credentialFromError(e){return n8.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?nw._fromTokenResponse(t,n):null}}/**
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
 */ function n7(e,t){return t?tI(t):(tb(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}n8.PROVIDER_ID="phone",n8.PHONE_SIGN_IN_METHOD="phone";/**
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
 */ class ie extends nl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nf(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nf(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nf(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function it(e){return nF(e.auth,new ie(e),e.bypassAuthState)}function ii(e){let{auth:t,user:n}=e;return tb(n,t,"internal-error"),nL(n,new ie(e),e.bypassAuthState)}async function ir(e){let{auth:t,user:n}=e;return tb(n,t,"internal-error"),nM(n,new ie(e),e.bypassAuthState)}/**
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
 */ class is{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return it;case"linkViaPopup":case"linkViaRedirect":return ir;case"reauthViaPopup":case"reauthViaRedirect":return ii;default:tg(this.auth,"internal-error")}}resolve(e){this.pendingPromise||tw("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||tw("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */ let io=new tS(2e3,1e4);async function ia(e,t,n){let i=eT(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&tg(e,"argument-error"),tv(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,nk);let r=n7(i,n),s=new il(i,"signInViaPopup",t,r);return s.executeNotNull()}class il extends is{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,il.currentPopupAction&&il.currentPopupAction.cancel(),il.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return tb(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||tw("Popup operations only handle one event");let e=n$();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(t_(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(t_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,il.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(t_(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,io.get())};e()}}il.currentPopupAction=null;let ih=new Map;class iu extends is{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ih.get(this.auth._key());if(!e){try{let t=await ic(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(i){e=()=>Promise.reject(i)}ih.set(this.auth._key(),e)}return this.bypassAuthState||ih.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ic(e,t){let n=t0("pendingRedirect",t.config.apiKey,t.name),i=tI(e._redirectPersistence);if(!await i._isAvailable())return!1;let r=await i._get(n)==="true";return await i._remove(n),r}function id(e,t){ih.set(e._key(),t)}async function ip(e,t,n=!1){let i=eT(e),r=n7(i,t),s=new iu(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class im{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return i_(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!i_(e)){let i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(t_(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ig(e))}saveEventToCache(e){this.cachedEventUids.add(ig(e)),this.lastProcessedEventTime=Date.now()}}function ig(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function i_({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
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
 */ async function iv(e,t={}){return tx(e,"GET","/v1/projects",t)}/**
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
 */ let iy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ib=/^https?/;async function iw(e){if(e.config.emulator)return;let{authorizedDomains:t}=await iv(e);for(let n of t)try{if(function(e){let t=tk(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!ib.test(n))return!1;if(iy.test(e))return i===e;let s=e.replace(/\./g,"\\."),o=RegExp("^(.+\\."+s+"|"+s+")$","i");return o.test(i)}(n))return}catch(i){}tg(e,"unauthorized-domain")}/**
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
 */ let iC=new tS(3e4,6e4);function iI(){let e=nK().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}let ik=null,iT=new tS(5e3,15e3),iS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function iP(e){let t=await (ik=ik||new Promise((t,n)=>{var i,r,s,o;function a(){iI(),gapi.load("gapi.iframes",{callback(){t(gapi.iframes.getContext())},ontimeout(){iI(),n(t_(e,"network-request-failed"))},timeout:iC.get()})}if(null===(r=null===(i=nK().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(s=nK().gapi)||void 0===s?void 0:s.load)a();else{let l=n5("iframefcb");return nK()[l]=()=>{gapi.load?a():n(t_(e,"network-request-failed"))},(o=`https://apis.google.com/js/api.js?onload=${l}`,new Promise((e,t)=>{var n,i;let r=document.createElement("script");r.setAttribute("src",o),r.onload=e,r.onerror=e=>{let n=t_("internal-error");n.customData=e,t(n)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(r)})).catch(e=>n(e))}}).catch(e=>{throw ik=null,e})),n=nK().gapi;return tb(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;tb(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?tE(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:e9},r=iE.get(e.config.apiHost);r&&(i.eid=r);let s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${eg(i).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iS,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});let r=t_(e,"network-request-failed"),s=nK().setTimeout(()=>{i(r)},iT.get());function o(){nK().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}/**
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
 */ let iR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class iN{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function iO(e,t,n,i,r,s){tb(e.config.authDomain,e,"auth-domain-config-required"),tb(e.config.apiKey,e,"invalid-api-key");let o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:e9,eventId:r};if(t instanceof nk)for(let[a,l]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ed(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[a]=l;if(t instanceof nT){let h=t.getScopes().filter(e=>""!==e);h.length>0&&(o.scopes=h.join(","))}e.tenantId&&(o.tid=e.tenantId);let u=o;for(let c of Object.keys(u))void 0===u[c]&&delete u[c];return`${function({config:e}){return e.emulator?tE(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${eg(u).slice(1)}`}/**
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
 */ let ix="webStorageSupport",iA=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nH,this._completeRedirectFn=ip,this._overrideRedirectResult=id}async _openPopup(e,t,n,i){var r;(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager)||tw("_initialize() not called before _openPopup()");let s=iO(e,t,n,tk(),i);return function(e,t,n,i=500,r=600){let s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),a="",l=Object.assign(Object.assign({},iR),{width:i.toString(),height:r.toString(),top:s,left:o}),h=H().toLowerCase();n&&(a=t6(h)?"_blank":n),t3(h)&&(t=t||"http://localhost",l.scrollbars="yes");let u=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=H()){var t;return ne(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}(t||"",a),new iN(null);let c=window.open(t||"",a,u);tb(c,e,"popup-blocked");try{c.focus()}catch(d){}return new iN(c)}(e,s,n$())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=iO(e,t,n,tk(),i),nK().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:n,promise:i}=this.eventManagers[t];return n?Promise.resolve(n):(i||tw("If manager is not set, promise should be"),i)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await iP(e),n=new im(e);return t.register("authEvent",t=>{tb(null==t?void 0:t.authEvent,e,"invalid-auth-event");let i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(ix,{type:ix},n=>{var i;let r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[ix];void 0!==r&&t(!!r),tg(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nt()||t4()||ne()}};class iD{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return tw("unexpected MultiFactorSessionType")}}}class iM extends iD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new iM(e)}_finalizeEnroll(e,t,n){return tx(e,"POST","/v2/accounts/mfaEnrollment:finalize",tO(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return tx(e,"POST","/v2/accounts/mfaSignIn:finalize",tO(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}var iL="@firebase/auth",iF="0.20.11";/**
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
 */ class iq{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){tb(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let iU=ee("authIdTokenMaxAge")||300,ij=null,iW=e=>async t=>{let n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>iU)return;let r=null==n?void 0:n.token;ij!==r&&(ij=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};v="Browser",e3(new eS("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{tb(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),tb(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});let i={apiKey:r,authDomain:s,clientPlatform:v,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nn(v)},o=new nr(e,n,i);return function(e,t){let n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(tI);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{let i=e.getProvider("auth-internal");i.initialize()})),e3(new eS("auth-internal",e=>{let t=eT(e.getProvider("auth").getImmediate());return new iq(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),te(iL,iF,/**
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
 */ function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(v)),te(iL,iF,"esm2017");var iz=function(){function e(t){N(this,e),this.app=t,(0,k.Z)(this,"googleProvider",void 0),(0,k.Z)(this,"githubProvider",void 0),(0,k.Z)(this,"auth",void 0),this.googleProvider=new nE,this.githubProvider=new nP,this.auth=function(e=e7()){let t=e4(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
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
 */ function(e,t){let n=e4(e,"auth");if(n.isInitialized()){let i=n.getImmediate(),r=n.getOptions();if(ef(r,null!=t?t:{}))return i;tg(i,"already-initialized")}let s=n.initialize({options:t});return s}(e,{popupRedirectResolver:iA,persistence:[n6,nz,nH]}),i=ee("authTokenSyncURL");if(i){var r,s;let o=iW(i);r=()=>o(n.currentUser),eT(n).beforeAuthStateChanged(o,r),s=e=>o(e),eT(n).onIdTokenChanged(s,void 0,void 0)}let a=J("auth");return a&&function(e,t,n){let i=eT(e);tb(i._canInitEmulator,i,"emulator-config-failed"),tb(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");let r=!!(null==n?void 0:n.disableWarnings),s=no(t),{host:o,port:a}=function(e){let t=no(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){let s=r[1];return{host:s,port:na(i.substr(s.length+1))}}{let[o,a]=i.split(":");return{host:o,port:na(a)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${a}`),n}(this.app)}return x(e,[{key:"signIn",value:function(e,t){return nq(eT(this.auth),nI.credential(e,t))}},{key:"signUp",value:function(e,t){return nU(this.auth,e,t)}},{key:"OAuthSignIn",value:function(e){var t=this["".concat(e,"Provider")];return ia(this.auth,t)}},{key:"signOut",value:function(){return eT(this.auth).signOut()}}]),e}();/**
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
 */ te("firebase","9.14.0","app");var iH=n(3988),iV=n(7294),i$=n(2762),iB=n(1163),iK=n(8664),iG=n(2161),iY=n(819),iQ=n(81),iJ=n(2379),iX=n(9643);class iZ extends iX.F{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||iY._,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,n=void 0!==t,i=n?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?null!=i?i:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){let n=(0,iG.oE)(this.state.data,e,this.options);return this.dispatch({data:n,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),n}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let n=this.promise;return null==(t=this.retryer)||t.cancel(e),n?n.then(iG.ZT).catch(iG.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,iG.Kp)(this.state.dataUpdatedAt,e)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){-1===this.observers.indexOf(e)&&(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){-1!==this.observers.indexOf(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var n,i,r,s;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(r=this.retryer)||r.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){let o=this.observers.find(e=>e.options.queryFn);o&&this.setOptions(o.options)}Array.isArray(this.options.queryKey);let a=(0,iG.G9)(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};h(l);let u=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn"),c={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};h(c),null==(n=this.options.behavior)||n.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(i=c.fetchOptions)?void 0:i.meta))&&this.dispatch({type:"fetch",meta:null==(s=c.fetchOptions)?void 0:s.meta});let d=e=>{if((0,iJ.DV)(e)&&e.silent||this.dispatch({type:"error",error:e}),!(0,iJ.DV)(e)){var t,n;null==(t=(n=this.cache.config).onError)||t.call(n,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,iJ.Mz)({fn:c.fetchFn,abort:null==a?void 0:a.abort.bind(a),onSuccess:e=>{var t,n;if(void 0===e){d(Error("undefined"));return}this.setData(e),null==(t=(n=this.cache.config).onSuccess)||t.call(n,e,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:d,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var n,i;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(n=e.meta)?n:null,fetchStatus:(0,iJ.Kw)(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(i=e.dataUpdatedAt)?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=e.error;if((0,iJ.DV)(r)&&r.revert&&this.revertState)return{...this.revertState};return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),iQ.V.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}var i0=n(3989);class i1 extends i0.l{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,n){var i;let r=t.queryKey,s=null!=(i=t.queryHash)?i:(0,iG.Rm)(r,t),o=this.get(s);return o||(o=new iZ({cache:this,logger:e.getLogger(),queryKey:r,queryHash:s,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){let t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(t=>t!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){iQ.V.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){let[n]=(0,iG.I6)(e,t);return void 0===n.exact&&(n.exact=!0),this.queries.find(e=>(0,iG._x)(n,e))}findAll(e,t){let[n]=(0,iG.I6)(e,t);return Object.keys(n).length>0?this.queries.filter(e=>(0,iG._x)(n,e)):this.queries}notify(e){iQ.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){iQ.V.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){iQ.V.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}var i2=n(9886);class i3 extends i0.l{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,n){let i=new i2.m({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:n,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){iQ.V.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(t=>(0,iG.X7)(e,t))}findAll(e){return this.mutations.filter(t=>(0,iG.X7)(e,t))}notify(e){iQ.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.mutations.filter(e=>e.state.isPaused);return iQ.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(iG.ZT)),Promise.resolve()))}}var i4=n(5761),i6=n(6474);function i5(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}var i9=n(5945),i8=n(5893),i7=(0,iV.createContext)(void 0),re=function(e){var t=e.children,n=(0,iV.useState)([]),i=n[0],r=n[1];return(0,i8.jsx)(i7.Provider,{value:{jobs:i,setJobs:r},children:t})},rt=n(29),rn=n(7794),ri=n.n(rn),rr=n(3454);let rs="@firebase/database",ro="0.13.10",ra="";/**
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
 */ class rl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),eo(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:es(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */ class rh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return eu(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */ let ru=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new rl(t)}}catch(n){}return new rh},rc=ru("localStorage"),rd=ru("sessionStorage"),rp=new eM("@firebase/database"),rf=(m=1,function(){return m++}),rm=function(e){let t=eI(e),n=new ey;n.update(t);let i=n.digest();return U.encodeByteArray(i)},rg=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=rg.apply(null,i):"object"==typeof i?t+=eo(i):t+=i,t+=" "}return t},r_=null,rv=!0,ry=function(e,t){M(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(rp.logLevel=C.VERBOSE,r_=rp.log.bind(rp),t&&rd.set("logging_enabled",!0)):"function"==typeof e?r_=e:(r_=null,rd.remove("logging_enabled"))},rb=function(...e){if(!0===rv&&(rv=!1,null===r_&&!0===rd.get("logging_enabled")&&ry(!0)),r_){let t=rg.apply(null,e);r_(t)}},rw=function(e){return function(...t){rb(e,...t)}},rC=function(...e){let t="FIREBASE INTERNAL ERROR: "+rg(...e);rp.error(t)},rI=function(...e){let t=`FIREBASE FATAL ERROR: ${rg(...e)}`;throw rp.error(t),Error(t)},rk=function(...e){let t="FIREBASE WARNING: "+rg(...e);rp.warn(t)},rT=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&rk("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rS=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},rE=function(e){if(B()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},rP="[MIN_NAME]",rR="[MAX_NAME]",rN=function(e,t){if(e===t)return 0;if(e===rP||t===rR)return -1;if(t===rP||e===rR)return 1;{let n=rq(e),i=rq(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},rO=function(e,t){return e===t?0:e<t?-1:1},rx=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+eo(t))},rA=function(e){if("object"!=typeof e||null===e)return eo(e);let t=[];for(let n in e)t.push(n);t.sort();let i="{";for(let r=0;r<t.length;r++)0!==r&&(i+=","),i+=eo(t[r])+":"+rA(e[t[r]]);return i+"}"},rD=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function rM(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}let rL=function(e){let t,n,i,r,s;M(!rS(e),"Invalid JSON number"),0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(n=0,i=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let h=parseInt(a.substr(s,8),2).toString(16);1===h.length&&(h="0"+h),l+=h}return l.toLowerCase()},rF=RegExp("^-?(0*)\\d{1,10}$"),rq=function(e){if(rF.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},rU=function(e){try{e()}catch(t){setTimeout(()=>{let e=t.stack||"";throw rk("Exception was thrown by user callback.",e),t},Math.floor(0))}},rj=function(){let e="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rW=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
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
 */ class rz{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){rk(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */ class rH{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(rb("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',rk(e)}}class rV{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rV.OWNER="owner";let r$=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rB="websocket",rK="long_polling";/**
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
 */ class rG{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rc.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rc.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function rY(e,t,n){let i;if(M("string"==typeof t,"typeof type must == string"),M("object"==typeof n,"typeof params must == object"),t===rB)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===rK)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return rM(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}/**
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
 */ class rQ{constructor(){this.counters_={}}incrementCounter(e,t=1){eu(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=e(t[i],n[i]));return t}(void 0,this.counters_)}}/**
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
 */ let rJ={},rX={};function rZ(e){let t=e.toString();return rJ[t]||(rJ[t]=new rQ),rJ[t]}/**
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
 */ class r0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<n.length;++i)n[i]&&rU(()=>{this.onMessage_(n[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */ let r1="start";class r2{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rw(e),this.stats_=rZ(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),rY(t,rK,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new r0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),rE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new r3((...e)=>{let[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===r1)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[r1]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&r$.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){r2.forceAllow_=!0}static forceDisallow(){r2.forceDisallow_=!0}static isAvailable(){return!B()&&(!!r2.forceAllow_||!r2.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=eo(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=j(t),i=rD(n,1840);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(B())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=eo(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class r3{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,B())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=rf(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=r3.createIFrame_();let r="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){let s=document.domain;r='<script>document.domain="'+s+'";</script>'}let o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){rb("frame writing exception"),a.stack&&rb(a.stack),rb(a)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{let t=e.contentWindow.document;t||rb("No IE domain setting required")}catch(i){let n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){let r=this.pendingSegs[0];if(r.d.length+30+n.length<=1870){let s=this.pendingSegs.shift();n=n+"&seg"+i+"="+s.seg+"&ts"+i+"="+s.ts+"&d"+i+"="+s.d,i++}else break}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){B()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{rb("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(i){}},Math.floor(1))}}let r4=null;"undefined"!=typeof MozWebSocket?r4=MozWebSocket:"undefined"!=typeof WebSocket&&(r4=WebSocket);class r6{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rw(this.connId),this.stats_=rZ(t),this.connURL=r6.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){let s={};return s.v="5",!B()&&"undefined"!=typeof location&&location.hostname&&r$.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),rY(e,rB,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rc.set("previous_websocket_failure",!0);try{let n;if(B()){let i=this.nodeAdmin?"AdminNode":"Node";n={headers:{"User-Agent":`Firebase/5/${ra}/${rr.platform}/${i}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(n.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);let r=rr.env,s=0===this.connURL.indexOf("wss://")?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;s&&(n.proxy={origin:s})}this.mySock=new r4(this.connURL,[],n)}catch(a){this.log_("Error instantiating WebSocket.");let o=a.message||a.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){r6.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==r4&&!r6.forceDisallow_}static previouslyFailed(){return rc.isInMemoryStorage||!0===rc.get("previous_websocket_failure")}markConnectionHealthy(){rc.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let n=es(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();let t=eo(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=rD(t,16384);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}r6.responsesRequiredToBeHealthy=2,r6.healthyTimeout=3e4;/**
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
 */ class r5{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[r2,r6]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=r6&&r6.isAvailable(),n=t&&!r6.previouslyFailed();if(e.webSocketOnly&&(t||rk("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[r6];else{let i=this.transports_=[];for(let r of r5.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);r5.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}r5.globalTransportInitialized_=!1;class r9{constructor(e,t,n,i,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rw("c:"+this.id+":"),this.transportManager_=new r5(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=rW(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=rx("t",e),n=rx("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=rx("t",e),n=rx("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=rx("t",e);if("d"in e){let n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?rC("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rC("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&rk("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),rW(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rW(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rc.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */ class r8{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */ class r7{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let i=0;i<n.length;i++)n[i].callback.apply(n[i].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context)){i.splice(r,1);return}}validateEventType_(e){M(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */ class se extends r7{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||V()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new se}getInitialEvent(e){return M("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class st{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let n=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[n]=this.pieces_[i],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function sn(){return new st("")}function si(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function sr(e){return e.pieces_.length-e.pieceNum_}function ss(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new st(e.pieces_,t)}function so(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function sa(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function sl(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new st(t,0)}function sh(e,t){let n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof st)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{let s=t.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&n.push(s[o])}return new st(n,0)}function su(e){return e.pieceNum_>=e.pieces_.length}function sc(e,t){let n=si(e),i=si(t);if(null===n)return t;if(n===i)return sc(ss(e),ss(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function sd(e,t){if(sr(e)!==sr(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function sp(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(sr(e)>sr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class sf{constructor(e,t){this.errorPrefix_=t,this.parts_=sa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=ek(this.parts_[n]);sm(this)}}function sm(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+sg(e))}function sg(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */ class s_ extends r7{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new s_}getInitialEvent(e){return M("visible"===e,"Unknown event type: "+e),[this.visible_]}}class sv extends r8{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=sv.nextPersistentConnectionId_++,this.log_=rw("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!B())throw Error("Auth override specified in options, but not supported on non Node.js platforms");s_.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&se.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(eo(r)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new et,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete(e){let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;sv.warnOnListenWarnings_(s,t);let a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&eu(e,"w")){let n=ec(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();rk(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){let t=e&&40===e.length;(t||eh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=el(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");let r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();let s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{let t=e.s;if("ok"!==t){let n=e.d;this.log_("reportStats","Error sending stats: "+n)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+eo(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):rC("Unrecognized action received from server: "+eo(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){let e=new Date().getTime()-this.lastConnectionEstablishedTime_;e>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();let t=new Date().getTime()-this.lastConnectionAttemptTime_,n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+sv.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())};this.realtime_={close:a,sendRequest:function(e){M(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[h,u]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?rb("getToken() completed but was canceled"):(rb("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,o=new r9(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{rk(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(c){this.log_("Failed to get token: "+c),s||(this.repoInfo_.nodeAdmin&&rk(c),a())}}}interrupt(e){rb("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rb("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ed(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>rA(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n;let i=new st(e).toString();if(this.listens.has(i)){let r=this.listens.get(i);n=r.get(t),r.delete(t),0===r.size&&this.listens.delete(i)}else n=void 0;return n}onAuthRevoked_(e,t){rb("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rb("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let n=0;n<this.outstandingPuts_.length;n++)this.outstandingPuts_[n]&&this.sendPut_(n);for(;this.onDisconnectRequestQueue_.length;){let i=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(i.action,i.pathString,i.data,i.onComplete)}for(let r=0;r<this.outstandingGets_.length;r++)this.outstandingGets_[r]&&this.sendGet_(r)}sendConnectStats_(){let e={},t="js";B()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ra.replace(/\./g,"-")]=1,V()?e["framework.cordova"]=1:$()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=se.getInstance().currentlyOnline();return ed(this.interruptReasons_)&&e}}sv.nextPersistentConnectionId_=0,sv.nextConnectionId_=0;/**
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
 */ class sy{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new sy(e,t)}}/**
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
 */ class sb{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new sy(rP,e),i=new sy(rP,t);return 0!==this.compare(n,i)}minPost(){return sy.MIN}}class sw extends sb{static get __EMPTY_NODE(){return s}static set __EMPTY_NODE(e){s=e}compare(e,t){return rN(e.name,t.name)}isDefinedOn(e){throw L("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return sy.MIN}maxPost(){return new sy(rR,s)}makePost(e,t){return M("string"==typeof e,"KeyIndex indexValue must always be a string."),new sy(e,s)}toString(){return".key"}}let sC=new sw;/**
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
 */ class sI{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class sk{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:sk.RED,this.left=null!=i?i:sT.EMPTY_NODE,this.right=null!=r?r:sT.EMPTY_NODE}copy(e,t,n,i,r){return new sk(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return sT.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return sT.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,sk.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,sk.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}sk.RED=!0,sk.BLACK=!1;class sT{constructor(e,t=sT.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new sT(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,sk.BLACK,null,null))}remove(e){return new sT(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,sk.BLACK,null,null))}get(e){let t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sI(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new sI(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new sI(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new sI(this.root_,null,this.comparator_,!0,e)}}/**
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
 */ function sS(e,t){return rN(e.name,t.name)}function sE(e,t){return rN(e,t)}sT.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new sk(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};let sP=function(e){return"number"==typeof e?"number:"+rL(e):"string:"+e},sR=function(e){if(e.isLeafNode()){let t=e.val();M("string"==typeof t||"number"==typeof t||"object"==typeof t&&eu(t,".sv"),"Priority must be a string or number.")}else M(e===o||e.isEmpty(),"priority of unexpected type.");M(e===o||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class sN{constructor(e,t=sN.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,M(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),sR(this.priorityNode_)}static set __childrenNodeConstructor(e){a=e}static get __childrenNodeConstructor(){return a}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new sN(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:sN.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return su(e)?this:".priority"===si(e)?this.priorityNode_:sN.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:sN.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=si(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(M(".priority"!==n||1===sr(e),".priority must be the last token in a path"),this.updateImmediateChild(n,sN.__childrenNodeConstructor.EMPTY_NODE.updateChild(ss(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sP(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=rL(this.value_):e+=this.value_,this.lazyHash_=rm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===sN.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof sN.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=sN.VALUE_TYPE_ORDER.indexOf(t),r=sN.VALUE_TYPE_ORDER.indexOf(n);return(M(i>=0,"Unknown leaf type: "+t),M(r>=0,"Unknown leaf type: "+n),i!==r)?r-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}sN.VALUE_TYPE_ORDER=["object","boolean","number","string"];let sO=new class extends sb{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?rN(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return sy.MIN}maxPost(){return new sy(rR,new sN("[PRIORITY-POST]",h))}makePost(e,t){let n=l(e);return new sy(t,new sN("[PRIORITY-POST]",n))}toString(){return".priority"}},sx=Math.log(2);class sA{constructor(e){this.count=parseInt(Math.log(e+1)/sx,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}let sD=function(e,t,n,i){e.sort(t);let r=function(t,i){let s,o;let a=i-t;if(0===a)return null;if(1===a)return s=e[t],o=n?n(s):s,new sk(o,s.node,sk.BLACK,null,null);{let l=parseInt(a/2,10)+t,h=r(t,l),u=r(l+1,i);return s=e[l],o=n?n(s):s,new sk(o,s.node,sk.BLACK,h,u)}},s=new sA(e.length),o=function(t){let i=null,s=null,o=e.length,a=function(t,i){let s=o-t,a=o;o-=t;let h=r(s+1,a),u=e[s],c=n?n(u):u;l(new sk(c,u.node,i,null,h))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let h=0;h<t.count;++h){let u=t.nextBitIsOne(),c=Math.pow(2,t.count-(h+1));u?a(c,sk.BLACK):(a(c,sk.BLACK),a(c,sk.RED))}return s}(s);return new sT(i||t,o)},sM={};class sL{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return M(sM&&sO,"ChildrenNode.ts has not been loaded"),u=u||new sL({".priority":sM},{".priority":sO})}get(e){let t=ec(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof sT?t:null}hasIndex(e){return eu(this.indexSet_,e.toString())}addIndex(e,t){let n;M(e!==sC,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(sy.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();n=r?sD(i,e.getCompare()):sM;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=n,new sL(h,l)}addToIndexes(e,t){let n=ep(this.indexes_,(n,i)=>{let r=ec(this.indexSet_,i);if(M(r,"Missing index implementation for "+i),n===sM){if(!r.isDefinedOn(e.node))return sM;{let s=[],o=t.getIterator(sy.Wrap),a=o.getNext();for(;a;)a.name!==e.name&&s.push(a),a=o.getNext();return s.push(e),sD(s,r.getCompare())}}{let l=t.get(e.name),h=n;return l&&(h=h.remove(new sy(e.name,l))),h.insert(e,e.node)}});return new sL(n,this.indexSet_)}removeFromIndexes(e,t){let n=ep(this.indexes_,n=>{if(n===sM)return n;{let i=t.get(e.name);return i?n.remove(new sy(e.name,i)):n}});return new sL(n,this.indexSet_)}}class sF{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&sR(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return c||(c=new sF(new sT(sE),null,sL.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||c}updatePriority(e){return this.children_.isEmpty()?this:new sF(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?c:t}}getChild(e){let t=si(e);return null===t?this:this.getImmediateChild(t).getChild(ss(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(M(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n,i;let r=new sy(e,t);t.isEmpty()?(n=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(n=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));let s=n.isEmpty()?c:this.priorityNode_;return new sF(n,s,i)}}updateChild(e,t){let n=si(e);if(null===n)return t;{M(".priority"!==si(e)||1===sr(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(ss(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,r=!0;if(this.forEachChild(sO,(s,o)=>{t[s]=o.val(e),n++,r&&sF.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),e||!r||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let s=[];for(let o in t)s[o]=t[o];return s}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+sP(this.getPriority().val())+":"),this.forEachChild(sO,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":rm(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let r=i.getPredecessorKey(new sy(e,t));return r?r.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let n=t.minKey();return n&&n.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new sy(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let n=t.maxKey();return n&&n.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new sy(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let i=this.children_.getIteratorFrom(e.name,sy.Wrap),r=i.peek();for(;null!=r&&0>t.compare(r,e);)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let i=this.children_.getReverseIteratorFrom(e.name,sy.Wrap),r=i.peek();for(;null!=r&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===sq?-1:0}withIndex(e){if(e===sC||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new sF(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===sC||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(sO),n=e.getIterator(sO),i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}}resolveIndex_(e){return e===sC?null:this.indexMap_.get(e.toString())}}sF.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let sq=new class extends sF{constructor(){super(new sT(sE),sF.EMPTY_NODE,sL.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return sF.EMPTY_NODE}isEmpty(){return!1}};function sU(e,t=null){if(null===e)return sF.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),M(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){let n=e;return new sN(n,sU(t))}if(e instanceof Array){let i=sF.EMPTY_NODE;return rM(e,(t,n)=>{if(eu(e,t)&&"."!==t.substring(0,1)){let r=sU(n);(r.isLeafNode()||!r.isEmpty())&&(i=i.updateImmediateChild(t,r))}}),i.updatePriority(sU(t))}{let r=[],s=!1,o=e;if(rM(o,(e,t)=>{if("."!==e.substring(0,1)){let n=sU(t);n.isEmpty()||(s=s||!n.getPriority().isEmpty(),r.push(new sy(e,n)))}}),0===r.length)return sF.EMPTY_NODE;let a=sD(r,sS,e=>e.name,sE);if(!s)return new sF(a,sU(t),sL.Default);{let l=sD(r,sO.getCompare());return new sF(a,sU(t),new sL({".priority":l},{".priority":sO}))}}}Object.defineProperties(sy,{MIN:{value:new sy(rP,sF.EMPTY_NODE)},MAX:{value:new sy(rR,sq)}}),sw.__EMPTY_NODE=sF.EMPTY_NODE,sN.__childrenNodeConstructor=sF,o=sq,h=sq,l=sU;/**
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
 */ class sj extends sb{constructor(e){super(),this.indexPath_=e,M(!su(e)&&".priority"!==si(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?rN(e.name,t.name):r}makePost(e,t){let n=sU(e),i=sF.EMPTY_NODE.updateChild(this.indexPath_,n);return new sy(t,i)}maxPost(){let e=sF.EMPTY_NODE.updateChild(this.indexPath_,sq);return new sy(rR,e)}toString(){return sa(this.indexPath_,0).join("/")}}let sW=new /**
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
 */ class extends sb{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?rN(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return sy.MIN}maxPost(){return sy.MAX}makePost(e,t){let n=sU(e);return new sy(t,n)}toString(){return".value"}};/**
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
 */ function sz(e){return{type:"value",snapshotNode:e}}function sH(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function sV(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function s$(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
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
 */ class sB{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(sV(t,o)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(sH(t,n)):s.trackChildChange(s$(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(sO,(e,i)=>{t.hasChild(e)||n.trackChildChange(sV(e,i))}),t.isLeafNode()||t.forEachChild(sO,(t,i)=>{if(e.hasChild(t)){let r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(s$(t,i,r))}else n.trackChildChange(sH(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?sF.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */ class sK{constructor(e){this.indexedFilter_=new sB(e.getIndex()),this.index_=e.getIndex(),this.startPost_=sK.getStartPost_(e),this.endPost_=sK.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return 0>=this.index_.compare(this.getStartPost(),e)&&0>=this.index_.compare(e,this.getEndPost())}updateChild(e,t,n,i,r,s){return this.matches(new sy(t,n))||(n=sF.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=sF.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(sF.EMPTY_NODE);let r=this;return t.forEachChild(sO,(e,t)=>{r.matches(new sy(e,t))||(i=i.updateImmediateChild(e,sF.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
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
 */ class sG{constructor(e){this.rangedFilter_=new sK(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return(this.rangedFilter_.matches(new sy(t,n))||(n=sF.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=sF.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let r;i=sF.EMPTY_NODE.withIndex(this.index_),r=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;r.hasNext()&&s<this.limit_;){let o=r.getNext();if(this.reverse_?0>=this.index_.compare(this.rangedFilter_.getStartPost(),o):0>=this.index_.compare(o,this.rangedFilter_.getEndPost()))i=i.updateImmediateChild(o.name,o.node),s++;else break}}else{let a,l,h,u;if(i=(i=t.withIndex(this.index_)).updatePriority(sF.EMPTY_NODE),this.reverse_){u=i.getReverseIterator(this.index_),a=this.rangedFilter_.getEndPost(),l=this.rangedFilter_.getStartPost();let c=this.index_.getCompare();h=(e,t)=>c(t,e)}else u=i.getIterator(this.index_),a=this.rangedFilter_.getStartPost(),l=this.rangedFilter_.getEndPost(),h=this.index_.getCompare();let d=0,p=!1;for(;u.hasNext();){let f=u.getNext();!p&&0>=h(a,f)&&(p=!0);let m=p&&d<this.limit_&&0>=h(f,l);m?d++:i=i.updateImmediateChild(f.name,sF.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){let o=this.index_.getCompare();s=(e,t)=>o(t,e)}else s=this.index_.getCompare();M(e.numChildren()===this.limit_,"");let a=new sy(t,n),l=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(e.hasChild(t)){let u=e.getImmediateChild(t),c=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=c&&(c.name===t||e.hasChild(c.name));)c=i.getChildAfterChild(this.index_,c,this.reverse_);let d=null==c?1:s(c,a),p=h&&!n.isEmpty()&&d>=0;if(p)return null!=r&&r.trackChildChange(s$(t,n,u)),e.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(sV(t,u));let f=e.updateImmediateChild(t,sF.EMPTY_NODE),m=null!=c&&this.rangedFilter_.matches(c);return m?(null!=r&&r.trackChildChange(sH(c.name,c.node)),f.updateImmediateChild(c.name,c.node)):f}}return n.isEmpty()?e:h&&s(l,a)>=0?(null!=r&&(r.trackChildChange(sV(l.name,l.node)),r.trackChildChange(sH(t,n))),e.updateImmediateChild(t,n).updateImmediateChild(l.name,sF.EMPTY_NODE)):e}}/**
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
 */ class sY{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sO}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(M(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:rP}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(M(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:rR}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sO}copy(){let e=new sY;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sQ(e){let t;let n={};return e.isDefault()||(e.index_===sO?t="$priority":e.index_===sW?t="$value":e.index_===sC?t="$key":(M(e.index_ instanceof sj,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=eo(t),e.startSet_&&(n.startAt=eo(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+eo(e.indexStartName_))),e.endSet_&&(n.endAt=eo(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+eo(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function sJ(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==sO&&(t.i=e.index_.toString()),t}/**
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
 */ class sX extends r8{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=rw("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=sX.getListenId_(e,n),o={};this.listens_[s]=o;let a=sQ(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ec(this.listens_,s)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=sX.getListenId_(e,t);delete this.listens_[n]}get(e){let t=sQ(e._queryParams),n=e._path.toString(),i=new et;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+eg(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=es(o.responseText)}catch(t){rk("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&rk("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
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
 */ class sZ{constructor(){this.rootNode_=sF.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */ function s0(){return{value:null,children:new Map}}function s1(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{let r=new st(t.toString()+"/"+e);s1(i,r,n)})}/**
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
 */ class s2{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&rM(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class s3{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new s2(e),rW(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;rM(e,(e,i)=>{i>0&&eu(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),rW(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function s4(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function s6(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function s5(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(y=I||(I={}))[y.OVERWRITE=0]="OVERWRITE",y[y.MERGE=1]="MERGE",y[y.ACK_USER_WRITE=2]="ACK_USER_WRITE",y[y.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
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
 */ class s9{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=I.ACK_USER_WRITE,this.source=s4()}operationForChild(e){if(!su(this.path))return M(si(this.path)===e,"operationForChild called for unrelated child."),new s9(ss(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new st(e));return new s9(sn(),t,this.revert)}}}/**
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
 */ class s8{constructor(e,t){this.source=e,this.path=t,this.type=I.LISTEN_COMPLETE}operationForChild(e){return su(this.path)?new s8(this.source,sn()):new s8(this.source,ss(this.path))}}/**
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
 */ class s7{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=I.OVERWRITE}operationForChild(e){return su(this.path)?new s7(this.source,sn(),this.snap.getImmediateChild(e)):new s7(this.source,ss(this.path),this.snap)}}/**
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
 */ class oe{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=I.MERGE}operationForChild(e){if(!su(this.path))return M(si(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new oe(this.source,ss(this.path),this.children);{let t=this.children.subtree(new st(e));return t.isEmpty()?null:t.value?new s7(this.source,sn(),t.value):new oe(this.source,sn(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */ class ot{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(su(e))return this.isFullyInitialized()&&!this.filtered_;let t=si(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */ class on{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function oi(e,t,n,i,r,s){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw L("Should only compare child_ events.");let i=new sy(t.childName,t.snapshotNode),r=new sy(n.childName,n.snapshotNode);return e.index_.compare(i,r)})(e,t,n)),o.forEach(n=>{var i;let o=("value"===(i=n).type||"child_removed"===i.type||(i.prevName=s.getPredecessorChildName(i.childName,i.snapshotNode,e.index_)),i);r.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(o,e.query_))})})}/**
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
 */ function or(e,t){return{eventCache:e,serverCache:t}}function os(e,t,n,i){return or(new ot(t,n,i),e.serverCache)}function oo(e,t,n,i){return or(e.eventCache,new ot(t,n,i))}function oa(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ol(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}let oh=()=>(d||(d=new sT(rO)),d);class ou{constructor(e,t=oh()){this.value=e,this.children=t}static fromObject(e){let t=new ou(null);return rM(e,(e,n)=>{t=t.set(new st(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:sn(),value:this.value};if(su(e))return null;{let n=si(e),i=this.children.get(n);if(null===i)return null;{let r=i.findRootMostMatchingPathAndValue(ss(e),t);if(null==r)return null;{let s=sh(new st(n),r.path);return{path:s,value:r.value}}}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(su(e))return this;{let t=si(e),n=this.children.get(t);return null!==n?n.subtree(ss(e)):new ou(null)}}set(e,t){if(su(e))return new ou(t,this.children);{let n=si(e),i=this.children.get(n)||new ou(null),r=i.set(ss(e),t),s=this.children.insert(n,r);return new ou(this.value,s)}}remove(e){if(su(e))return this.children.isEmpty()?new ou(null):new ou(null,this.children);{let t=si(e),n=this.children.get(t);if(!n)return this;{let i;let r=n.remove(ss(e));return(i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty())?new ou(null):new ou(this.value,i)}}}get(e){if(su(e))return this.value;{let t=si(e),n=this.children.get(t);return n?n.get(ss(e)):null}}setTree(e,t){if(su(e))return t;{let n;let i=si(e),r=this.children.get(i)||new ou(null),s=r.setTree(ss(e),t);return n=s.isEmpty()?this.children.remove(i):this.children.insert(i,s),new ou(this.value,n)}}fold(e){return this.fold_(sn(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(sh(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,sn(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(su(e))return null;{let r=si(e),s=this.children.get(r);return s?s.findOnPath_(ss(e),sh(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,sn(),t)}foreachOnPath_(e,t,n){if(su(e))return this;{this.value&&n(t,this.value);let i=si(e),r=this.children.get(i);return r?r.foreachOnPath_(ss(e),sh(t,i),n):new ou(null)}}foreach(e){this.foreach_(sn(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(sh(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
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
 */ class oc{constructor(e){this.writeTree_=e}static empty(){return new oc(new ou(null))}}function od(e,t,n){if(su(t))return new oc(new ou(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let r=i.path,s=i.value,o=sc(r,t);return s=s.updateChild(o,n),new oc(e.writeTree_.set(r,s))}{let a=new ou(n),l=e.writeTree_.setTree(t,a);return new oc(l)}}}function op(e,t,n){let i=e;return rM(n,(e,n)=>{i=od(i,sh(t,e),n)}),i}function of(e,t){if(su(t))return oc.empty();{let n=e.writeTree_.setTree(t,new ou(null));return new oc(n)}}function om(e,t){return null!=og(e,t)}function og(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(sc(n.path,t)):null}function o_(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(sO,(e,n)=>{t.push(new sy(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new sy(e,n.value))}),t}function ov(e,t){if(su(t))return e;{let n=og(e,t);return new oc(null!=n?new ou(n):e.writeTree_.subtree(t))}}function oy(e){return e.writeTree_.isEmpty()}function ob(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?(M(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=e(sh(t,n),s,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(sh(t,".priority"),r)),i}}(sn(),e.writeTree_,t)}function ow(e){return e.visible}function oC(e,t,n){let i=oc.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let o;let a=s.path;if(s.snap)sp(n,a)?i=od(i,o=sc(n,a),s.snap):sp(a,n)&&(o=sc(a,n),i=od(i,sn(),s.snap.getChild(o)));else if(s.children){if(sp(n,a))i=op(i,o=sc(n,a),s.children);else if(sp(a,n)){if(su(o=sc(a,n)))i=op(i,sn(),s.children);else{let l=ec(s.children,si(o));if(l){let h=l.getChild(ss(o));i=od(i,sn(),h)}}}}else throw L("WriteRecord should have .snap or .children")}}return i}function oI(e,t,n,i,r){if(i||r){let s=ov(e.visibleWrites,t);if(!r&&oy(s))return n;if(!r&&null==n&&!om(s,sn()))return null;{let o=oC(e.allWrites,function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(sp(e.path,t)||sp(t,e.path))},t),a=n||sF.EMPTY_NODE;return ob(o,a)}}{let l=og(e.visibleWrites,t);if(null!=l)return l;{let h=ov(e.visibleWrites,t);if(oy(h))return n;if(null==n&&!om(h,sn()))return null;{let u=n||sF.EMPTY_NODE;return ob(h,u)}}}}function ok(e,t,n,i){return oI(e.writeTree,e.treePath,t,n,i)}function oT(e,t){return function(e,t,n){let i=sF.EMPTY_NODE,r=og(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(sO,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){let s=ov(e.visibleWrites,t);return n.forEachChild(sO,(e,t)=>{let n=ob(ov(s,new st(e)),t);i=i.updateImmediateChild(e,n)}),o_(s).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{let o=ov(e.visibleWrites,t);return o_(o).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function oS(e,t,n,i){return function(e,t,n,i,r){M(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=sh(t,n);if(om(e.visibleWrites,s))return null;{let o=ov(e.visibleWrites,s);return oy(o)?r.getChild(n):ob(o,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function oE(e,t){var n,i;return n=e.writeTree,i=sh(e.treePath,t),og(n.visibleWrites,i)}function oP(e,t,n){return function(e,t,n,i){let r=sh(t,n),s=og(e.visibleWrites,r);if(null!=s)return s;if(!i.isCompleteForChild(n))return null;{let o=ov(e.visibleWrites,r);return ob(o,i.getNode().getImmediateChild(n))}}(e.writeTree,e.treePath,t,n)}function oR(e,t){return oN(sh(e.treePath,t),e.writeTree)}function oN(e,t){return{treePath:e,writeTree:t}}/**
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
 */ class oO{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;M("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),M(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,s$(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,sV(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,sH(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(n,s$(n,e.snapshotNode,i.oldSnap));else throw L("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}let ox=new /**
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
 */ class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class oA{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let n=null!=this.optCompleteServerCache_?new ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oP(this.writes_,e,n)}}getChildAfterChild(e,t,n){var i;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ol(this.viewCache_),s=function(e,t,n,i,r,s,o){let a;let l=ov(e.visibleWrites,t),h=og(l,sn());if(null!=h)a=h;else{if(null==n)return[];a=ob(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let u=[],c=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),p=d.getNext();for(;p&&u.length<1;)0!==c(p,i)&&u.push(p),p=d.getNext();return u}}((i=this.writes_).writeTree,i.treePath,r,t,0,n,e);return 0===s.length?null:s[0]}}function oD(e,t,n,i,r,s){let o=t.eventCache;if(null!=oE(i,n))return t;{let a,l;if(su(n)){if(M(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let h=ol(t),u=h instanceof sF?h:sF.EMPTY_NODE,c=oT(i,u);a=e.filter.updateFullNode(t.eventCache.getNode(),c,s)}else{let d=ok(i,ol(t));a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}}else{let p=si(n);if(".priority"===p){M(1===sr(n),"Can't have a priority with additional path components");let f=o.getNode();l=t.serverCache.getNode();let m=oS(i,n,f,l);a=null!=m?e.filter.updatePriority(f,m):o.getNode()}else{let g;let _=ss(n);if(o.isCompleteForChild(p)){l=t.serverCache.getNode();let v=oS(i,n,o.getNode(),l);g=null!=v?o.getNode().getImmediateChild(p).updateChild(_,v):o.getNode().getImmediateChild(p)}else g=oP(i,p,t.serverCache);a=null!=g?e.filter.updateChild(o.getNode(),p,g,_,r,s):o.getNode()}}return os(t,a,o.isFullyInitialized()||su(n),e.filter.filtersNodes())}}function oM(e,t,n,i,r,s,o,a){let l;let h=t.serverCache,u=o?e.filter:e.filter.getIndexedFilter();if(su(n))l=u.updateFullNode(h.getNode(),i,null);else if(u.filtersNodes()&&!h.isFiltered()){let c=h.getNode().updateChild(n,i);l=u.updateFullNode(h.getNode(),c,null)}else{let d=si(n);if(!h.isCompleteForPath(n)&&sr(n)>1)return t;let p=ss(n),f=h.getNode().getImmediateChild(d),m=f.updateChild(p,i);l=".priority"===d?u.updatePriority(h.getNode(),m):u.updateChild(h.getNode(),d,m,p,ox,null)}let g=oo(t,l,h.isFullyInitialized()||su(n),u.filtersNodes()),_=new oA(r,g,s);return oD(e,g,n,r,_,a)}function oL(e,t,n,i,r,s,o){let a,l;let h=t.eventCache,u=new oA(r,t,s);if(su(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=os(t,l,!0,e.filter.filtersNodes());else{let c=si(n);if(".priority"===c)l=e.filter.updatePriority(t.eventCache.getNode(),i),a=os(t,l,h.isFullyInitialized(),h.isFiltered());else{let d;let p=ss(n),f=h.getNode().getImmediateChild(c);if(su(p))d=i;else{let m=u.getCompleteChild(c);d=null!=m?".priority"===so(p)&&m.getChild(sl(p)).isEmpty()?m:m.updateChild(p,i):sF.EMPTY_NODE}if(f.equals(d))a=t;else{let g=e.filter.updateChild(h.getNode(),c,d,p,u,o);a=os(t,g,h.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function oF(e,t){return e.eventCache.isCompleteForChild(t)}function oq(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function oU(e,t,n,i,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=su(n)?i:new ou(null).setTree(n,i);let u=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){let l=t.serverCache.getNode().getImmediateChild(n),c=oq(e,l,i);h=oM(e,h,new st(n),c,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{let l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){let c=t.serverCache.getNode().getImmediateChild(n),d=oq(e,c,i);h=oM(e,h,new st(n),d,r,s,o,a)}}),h}/**
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
 */ class oj{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let n=this.query_._queryParams,i=new sB(n.getIndex()),r=n.loadsAllData()?new sB(n.getIndex()):n.hasLimit()?new sG(n):new sK(n);this.processor_={filter:r};let s=t.serverCache,o=t.eventCache,a=i.updateFullNode(sF.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(sF.EMPTY_NODE,o.getNode(),null),h=new ot(a,s.isFullyInitialized(),i.filtersNodes()),u=new ot(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=or(u,h),this.eventGenerator_=new on(this.query_)}get query(){return this.query_}}function oW(e){return 0===e.eventRegistrations_.length}function oz(e,t,n){let i=[];if(n){M(null==t,"A cancel should cancel all event registrations.");let r=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let s=[];for(let o=0;o<e.eventRegistrations_.length;++o){let a=e.eventRegistrations_[o];if(a.matches(t)){if(t.hasAnyCallback()){s=s.concat(e.eventRegistrations_.slice(o+1));break}}else s.push(a)}e.eventRegistrations_=s}else e.eventRegistrations_=[];return i}function oH(e,t,n,i){var r,s;t.type===I.MERGE&&null!==t.source.queryId&&(M(ol(e.viewCache_),"We should always have a full cache before handling merges"),M(oa(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,i,r){let s,o;let a=new oO;if(n.type===I.OVERWRITE)n.source.fromUser?s=oL(e,t,n.path,n.snap,i,r,a):(M(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered()&&!su(n.path),s=oM(e,t,n.path,n.snap,i,r,o,a));else if(n.type===I.MERGE){var l,h;let u;n.source.fromUser?(l=n.path,h=n.children,u=t,h.foreach((n,s)=>{let o=sh(l,n);oF(t,si(o))&&(u=oL(e,u,o,s,i,r,a))}),h.foreach((n,s)=>{let o=sh(l,n);oF(t,si(o))||(u=oL(e,u,o,s,i,r,a))}),s=u):(M(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered(),s=oU(e,t,n.path,n.children,i,r,o,a))}else if(n.type===I.ACK_USER_WRITE)s=n.revert?function(e,t,n,i,r,s){let o;if(null!=oE(i,n))return t;{let a;let l=new oA(i,t,r),h=t.eventCache.getNode();if(su(n)||".priority"===si(n)){let u;if(t.serverCache.isFullyInitialized())u=ok(i,ol(t));else{let c=t.serverCache.getNode();M(c instanceof sF,"serverChildren would be complete if leaf node"),u=oT(i,c)}a=e.filter.updateFullNode(h,u,s)}else{let d=si(n),p=oP(i,d,t.serverCache);null==p&&t.serverCache.isCompleteForChild(d)&&(p=h.getImmediateChild(d)),(a=null!=p?e.filter.updateChild(h,d,p,ss(n),l,s):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(h,d,sF.EMPTY_NODE,ss(n),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=ok(i,ol(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=oE(i,sn()),os(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,i,r,a):function(e,t,n,i,r,s,o){if(null!=oE(r,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(su(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return oM(e,t,n,l.getNode().getChild(n),r,s,a,o);if(!su(n))return t;{let h=new ou(null);return l.getNode().forEachChild(sC,(e,t)=>{h=h.set(new st(e),t)}),oU(e,t,n,h,r,s,a,o)}}{let u=new ou(null);return i.foreach((e,t)=>{let i=sh(n,e);l.isCompleteForPath(i)&&(u=u.set(e,l.getNode().getChild(i)))}),oU(e,t,n,u,r,s,a,o)}}(e,t,n.path,n.affectedTree,i,r,a);else if(n.type===I.LISTEN_COMPLETE)s=function(e,t,n,i,r){let s=t.serverCache,o=oo(t,s.getNode(),s.isFullyInitialized()||su(n),s.isFiltered());return oD(e,o,n,i,ox,r)}(e,t,n.path,i,a);else throw L("Unknown operation type: "+n.type);let c=a.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=oa(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!r||i.getNode().equals(s))&&i.getNode().getPriority().equals(s.getPriority())||n.push(sz(oa(t)))}}(t,s,c),{viewCache:s,changes:c}}(e.processor_,o,t,n,i);return r=e.processor_,M((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),M(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),M(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,oV(e,a.changes,a.viewCache.eventCache.getNode(),null)}function oV(e,t,n,i){let r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n,i;s.push((n=t.childName,i=t.snapshotNode,{type:"child_moved",snapshotNode:i,childName:n}))}}),oi(e,r,"child_removed",t,i,n),oi(e,r,"child_added",t,i,n),oi(e,r,"child_moved",s,i,n),oi(e,r,"child_changed",t,i,n),oi(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}class o${constructor(){this.views=new Map}}function oB(e,t,n,i){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return M(null!=s,"SyncTree gave us an op for an invalid query."),oH(s,t,n,i)}{let o=[];for(let a of e.views.values())o=o.concat(oH(a,t,n,i));return o}}function oK(e,t,n,i,r){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let a=ok(n,r?i:null),l=!1;a?l=!0:i instanceof sF?(a=oT(n,i),l=!1):(a=sF.EMPTY_NODE,l=!1);let h=or(new ot(a,l,!1),new ot(i,r,!1));return new oj(t,h)}return o}function oG(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function oY(e,t){let n=null;for(let i of e.views.values())n=n||function(e,t){let n=ol(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!su(t)&&!n.getImmediateChild(si(t)).isEmpty())?n.getChild(t):null}(i,t);return n}function oQ(e,t){let n=t._queryParams;if(n.loadsAllData())return oX(e);{let i=t._queryIdentifier;return e.views.get(i)}}function oJ(e){return null!=oX(e)}function oX(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}let oZ=1;class o0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ou(null),this.pendingWriteTree_={visibleWrites:oc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function o1(e,t,n,i,r){var s,o;return(s=e.pendingWriteTree_,o=r,M(i>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(s.visibleWrites=od(s.visibleWrites,t,n)),s.lastWriteId=i,r)?o9(e,new s7(s4(),t,n)):[]}function o2(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t),r=function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);M(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let a=e.allWrites[o];a.visible&&(o>=n&&function(e,t){if(e.snap)return sp(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&sp(sh(e.path,n),t))return!0;return!1}(a,i.path)?r=!1:sp(i.path,a.path)&&(s=!0)),o--}if(!r)return!1;if(s){var l;return(l=e).visibleWrites=oC(l.allWrites,ow,sn()),l.allWrites.length>0?l.lastWriteId=l.allWrites[l.allWrites.length-1].writeId:l.lastWriteId=-1,!0}if(i.snap)e.visibleWrites=of(e.visibleWrites,i.path);else{let h=i.children;rM(h,t=>{e.visibleWrites=of(e.visibleWrites,sh(i.path,t))})}return!0}(e.pendingWriteTree_,t);if(!r)return[];{let s=new ou(null);return null!=i.snap?s=s.set(sn(),!0):rM(i.children,e=>{s=s.set(new st(e),!0)}),o9(e,new s9(i.path,s,n))}}function o3(e,t,n){return o9(e,new s7(s6(),t,n))}function o4(e,t,n,i,r=!1){let s=t._path,o=e.syncPointTree_.get(s),a=[];if(o&&("default"===t._queryIdentifier||null!=oQ(o,t))){let l=function(e,t,n,i){let r=t._queryIdentifier,s=[],o=[],a=oJ(e);if("default"===r)for(let[l,h]of e.views.entries())o=o.concat(oz(h,n,i)),oW(h)&&(e.views.delete(l),h.query._queryParams.loadsAllData()||s.push(h.query));else{let u=e.views.get(r);u&&(o=o.concat(oz(u,n,i)),oW(u)&&(e.views.delete(r),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!oJ(e)&&s.push(new(M(p,"Reference.ts has not been loaded"),p)(t._repo,t._path)),{removed:s,events:o}}(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let h=l.removed;if(a=l.events,!r){let u=-1!==h.findIndex(e=>e._queryParams.loadsAllData()),c=e.syncPointTree_.findOnPath(s,(e,t)=>oJ(t));if(u&&!c){let d=e.syncPointTree_.subtree(s);if(!d.isEmpty()){let f=d.fold((e,t,n)=>{if(t&&oJ(t)){let i=oX(t);return[i]}{let r=[];return t&&(r=oG(t)),rM(n,(e,t)=>{r=r.concat(t)}),r}});for(let m=0;m<f.length;++m){let g=f[m],_=g.query,v=o8(e,g);e.listenProvider_.startListening(ar(_),o7(e,_),v.hashFn,v.onComplete)}}}c||!(h.length>0)||i||(u?e.listenProvider_.stopListening(ar(t),null):h.forEach(t=>{let n=e.queryToTagMap.get(ae(t));e.listenProvider_.stopListening(ar(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){let i=t[n];if(!i._queryParams.loadsAllData()){let r=ae(i),s=e.queryToTagMap.get(r);e.queryToTagMap.delete(r),e.tagToQueryMap.delete(s)}}}(e,h)}return a}function o6(e,t,n,i){let r=at(e,i);if(null==r)return[];{let s=an(r),o=s.path,a=s.queryId,l=sc(o,t),h=new s7(s5(a),l,n);return ai(e,o,h)}}function o5(e,t,n){let i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=sc(e,t),r=oY(n,i);if(r)return r});return oI(i,t,r,n,!0)}function o9(e,t){var n;return function e(t,n,i,r){if(su(t.path))return function e(t,n,i,r){let s=n.get(sn());null==i&&null!=s&&(i=oY(s,sn()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=i?i.getImmediateChild(n):null,l=oR(r,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(oB(s,t,r,i))),o}(t,n,i,r);{let s=n.get(sn());null==i&&null!=s&&(i=oY(s,sn()));let o=[],a=si(t.path),l=t.operationForChild(a),h=n.children.get(a);if(h&&l){let u=i?i.getImmediateChild(a):null,c=oR(r,a);o=o.concat(e(l,h,u,c))}return s&&(o=o.concat(oB(s,t,r,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,oN(sn(),n)))}function o8(e,t){let n=t.query,i=o7(e,n);return{hashFn(){let e=t.viewCache_.serverCache.getNode()||sF.EMPTY_NODE;return e.hash()},onComplete(t){if("ok"===t){var r;return i?function(e,t,n){let i=at(e,n);if(!i)return[];{let r=an(i),s=r.path,o=r.queryId,a=sc(s,t),l=new s8(s5(o),a);return ai(e,s,l)}}(e,n._path,i):(r=n._path,o9(e,new s8(s6(),r)))}{let s=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let i=Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return o4(e,n,null,s)}}}}function o7(e,t){let n=ae(t);return e.queryToTagMap.get(n)}function ae(e){return e._path.toString()+"$"+e._queryIdentifier}function at(e,t){return e.tagToQueryMap.get(t)}function an(e){let t=e.indexOf("$");return M(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new st(e.substr(0,t))}}function ai(e,t,n){let i=e.syncPointTree_.get(t);M(i,"Missing sync point for query tag that we're tracking");let r=oN(t,e.pendingWriteTree_);return oB(i,n,r,null)}function ar(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(M(f,"Reference.ts has not been loaded"),f)(e._repo,e._path):e}/**
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
 */ class as{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new as(t)}node(){return this.node_}}class ao{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=sh(this.path_,e);return new ao(this.syncTree_,t)}node(){return o5(this.syncTree_,this.path_)}}let aa=function(e,t,n){return e&&"object"==typeof e?(M(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?al(e[".sv"],t,n):"object"==typeof e[".sv"]?ah(e[".sv"],t):void M(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},al=function(e,t,n){if("timestamp"===e)return n.timestamp;M(!1,"Unexpected server value: "+e)},ah=function(e,t,n){e.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&M(!1,"Unexpected increment value: "+i);let r=t.node();if(M(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let s=r.getValue();return"number"!=typeof s?i:s+i},au=function(e,t,n){return ac(e,new as(t),n)};function ac(e,t,n){let i;let r=e.getPriority().val(),s=aa(r,t.getImmediateChild(".priority"),n);if(!e.isLeafNode())return i=e,s!==e.getPriority().val()&&(i=i.updatePriority(new sN(s))),e.forEachChild(sO,(e,r)=>{let s=ac(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))}),i;{let o=aa(e.getValue(),t,n);return o!==e.getValue()||s!==e.getPriority().val()?new sN(o,sU(s)):e}}/**
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
 */ class ad{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function ap(e,t){let n=t instanceof st?t:new st(t),i=e,r=si(n);for(;null!==r;){let s=ec(i.node.children,r)||{children:{},childCount:0};i=new ad(r,i,s),r=si(n=ss(n))}return i}function af(e){return e.node.value}function am(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){let r=void 0===af(i)&&!ag(i),s=eu(t.node.children,n);r&&s?(delete t.node.children[n],t.node.childCount--,e(t)):r||s||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function ag(e){return e.node.childCount>0}function a_(e,t){rM(e.node.children,(n,i)=>{t(new ad(n,e,i))})}function av(e){return new st(null===e.parent?e.name:av(e.parent)+"/"+e.name)}/**
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
 */ let ay=/[\[\].#$\/\u0000-\u001F\u007F]/,ab=/[\[\].#$\u0000-\u001F\u007F]/,aw=function(e){return"string"==typeof e&&0!==e.length&&!ay.test(e)},aC=function(e){return"string"==typeof e&&0!==e.length&&!ab.test(e)},aI=function(e,t,n,i){i&&void 0===t||ak(eC(e,"value"),t,n)},ak=function(e,t,n){let i=n instanceof st?new sf(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+sg(i));if("function"==typeof t)throw Error(e+"contains a function "+sg(i)+" with contents = "+t.toString());if(rS(t))throw Error(e+"contains "+t.toString()+" "+sg(i));if("string"==typeof t&&t.length>3495253.3333333335&&ek(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+sg(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let r=!1,s=!1;if(rM(t,(t,n)=>{var o;if(".value"===t)r=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!aw(t)))throw Error(e+" contains an invalid key ("+t+") "+sg(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(t),o.byteLength_+=ek(t),sm(o),ak(e,n,i),function(e){let t=e.parts_.pop();e.byteLength_-=ek(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),r&&s)throw Error(e+' contains ".value" child '+sg(i)+" in addition to actual children.")}},aT=function(e,t,n,i){if((!i||void 0!==n)&&!aC(n))throw Error(eC(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},aS=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aT(e,t,n,i)},aE=function(e,t){if(".info"===si(t))throw Error(e+" failed = Can't modify data under /.info/")},aP=function(e,t){var n;let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!aw(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&((n=i)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!aC(n)))throw Error(eC(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
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
 */ class aR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function aN(e,t){let n=null;for(let i=0;i<t.length;i++){let r=t[i],s=r.getPath();null===n||sd(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function aO(e,t,n){aN(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let r=e.eventLists_[i];if(r){let s=r.path;t(s)?(function(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();r_&&rb("event: "+n.toString()),rU(i)}}}(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>sp(e,t)||sp(t,e))}class ax{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=s0(),this.transactionQueueTree_=new ad,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aA(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new st(".info/serverTimeOffset")),n=t.val()||0;return new Date().getTime()+n}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function aD(e,t,n,i,r){e.dataUpdateCount++;let s=new st(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r){if(i){let a=ep(n,e=>sU(e));o=function(e,t,n,i){let r=at(e,i);if(!r)return[];{let s=an(r),o=s.path,a=s.queryId,l=sc(o,t),h=ou.fromObject(n),u=new oe(s5(a),l,h);return ai(e,o,u)}}(e.serverSyncTree_,s,a,r)}else{let l=sU(n);o=o6(e.serverSyncTree_,s,l,r)}}else if(i){let h=ep(n,e=>sU(e));o=function(e,t,n){let i=ou.fromObject(n);return o9(e,new oe(s6(),t,i))}(e.serverSyncTree_,s,h)}else{let u=sU(n);o=o3(e.serverSyncTree_,s,u)}let c=s;o.length>0&&(c=aj(e,s)),aO(e.eventQueue_,c,o)}function aM(e,t){aL(e,"connected",t),!1===t&&function(e){aq(e,"onDisconnectEvents");let t=aA(e),n=s0();s1(e.onDisconnect_,sn(),(i,r)=>{var s;let o=(s=e.serverSyncTree_,ac(r,new ao(s,i),t));!function e(t,n,i){if(su(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let r=si(n);t.children.has(r)||t.children.set(r,s0());let s=t.children.get(r);e(s,n=ss(n),i)}}(n,i,o)});let i=[];s1(n,sn(),(t,n)=>{i=i.concat(o3(e.serverSyncTree_,t,n));let r=aV(e,t);aj(e,r)}),e.onDisconnect_=s0(),aO(e.eventQueue_,sn(),i)}(e)}function aL(e,t,n){let i=new st("/.info/"+t),r=sU(n);e.infoData_.updateSnapshot(i,r);let s=o3(e.infoSyncTree_,i,r);aO(e.eventQueue_,i,s)}function aF(e){return e.nextWriteId_++}function aq(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),rb(n,...t)}function aU(e,t,n){return o5(e.serverSyncTree_,t,n)||sF.EMPTY_NODE}function aj(e,t){let n=aW(e,t),i=av(n),r=az(e,n);return function(e,t,n){if(0===t.length)return;let i=[],r=[],s=t.filter(e=>0===e.status),o=s.map(e=>e.currentWriteId);for(let a=0;a<t.length;a++){let l=t[a],h=sc(n,l.path),u=!1,c;if(M(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,c=l.abortReason,r=r.concat(o2(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status){if(l.retryCount>=25)u=!0,c="maxretry",r=r.concat(o2(e.serverSyncTree_,l.currentWriteId,!0));else{let d=aU(e,l.path,o);l.currentInputSnapshot=d;let p=t[a].update(d.val());if(void 0!==p){ak("transaction failed: Data returned ",p,l.path);let f=sU(p),m="object"==typeof p&&null!=p&&eu(p,".priority");m||(f=f.updatePriority(d.getPriority()));let g=l.currentWriteId,_=aA(e),v=au(f,d,_);l.currentOutputSnapshotRaw=f,l.currentOutputSnapshotResolved=v,l.currentWriteId=aF(e),o.splice(o.indexOf(g),1),r=(r=r.concat(o1(e.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally))).concat(o2(e.serverSyncTree_,g,!0))}else u=!0,c="nodata",r=r.concat(o2(e.serverSyncTree_,l.currentWriteId,!0))}}aO(e.eventQueue_,n,r),r=[],u&&(t[a].status=2,setTimeout(t[a].unwatcher,Math.floor(0)),t[a].onComplete&&("nodata"===c?i.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):i.push(()=>t[a].onComplete(Error(c),!1,null))))}aH(e,e.transactionQueueTree_);for(let y=0;y<i.length;y++)rU(i[y]);(function e(t,n=t.transactionQueueTree_){if(n||aH(t,n),af(n)){let i=az(t,n);M(i.length>0,"Sending zero length transaction queue");let r=i.every(e=>0===e.status);r&&function(t,n,i){let r=i.map(e=>e.currentWriteId),s=aU(t,n,r),o=s,a=s.hash();for(let l=0;l<i.length;l++){let h=i[l];M(0===h.status,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;let u=sc(n,h.path);o=o.updateChild(u,h.currentOutputSnapshotRaw)}let c=o.val(!0);t.server_.put(n.toString(),c,r=>{aq(t,"transaction put response",{path:n.toString(),status:r});let s=[];if("ok"===r){let o=[];for(let a=0;a<i.length;a++)i[a].status=2,s=s.concat(o2(t.serverSyncTree_,i[a].currentWriteId)),i[a].onComplete&&o.push(()=>i[a].onComplete(null,!0,i[a].currentOutputSnapshotResolved)),i[a].unwatcher();aH(t,ap(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),aO(t.eventQueue_,n,s);for(let l=0;l<o.length;l++)rU(o[l])}else{if("datastale"===r)for(let h=0;h<i.length;h++)3===i[h].status?i[h].status=4:i[h].status=0;else{rk("transaction at "+n.toString()+" failed: "+r);for(let u=0;u<i.length;u++)i[u].status=4,i[u].abortReason=r}aj(t,n)}},a)}(t,av(n),i)}else ag(n)&&a_(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,r,i),i}function aW(e,t){let n;let i=e.transactionQueueTree_;for(n=si(t);null!==n&&void 0===af(i);)i=ap(i,n),n=si(t=ss(t));return i}function az(e,t){let n=[];return function e(t,n,i){let r=af(n);if(r)for(let s=0;s<r.length;s++)i.push(r[s]);a_(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function aH(e,t){let n=af(t);if(n){let i=0;for(let r=0;r<n.length;r++)2!==n[r].status&&(n[i]=n[r],i++);n.length=i,am(t,n.length>0?n:void 0)}a_(t,t=>{aH(e,t)})}function aV(e,t){let n=av(aW(e,t)),i=ap(e.transactionQueueTree_,t);return!function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{a$(e,t)}),a$(e,i),!function e(t,n,i,r){i&&!r&&n(t),a_(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{a$(e,t)}),n}function a$(e,t){let n=af(t);if(n){let i=[],r=[],s=-1;for(let o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(M(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(M(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(o2(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,Error("set"),!1,null))));-1===s?am(t,void 0):n.length=s+1,aO(e.eventQueue_,av(t),r);for(let a=0;a<i.length;a++)rU(i[a])}}let aB=function(e,t){let n=aK(e),i=n.namespace;"firebase.com"===n.domain&&rI(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||rI("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rT();let r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new rG(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new st(n.pathString)}},aK=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let u=e.indexOf("/");-1===u&&(u=e.length);let c=e.indexOf("?");-1===c&&(c=e.length),t=e.substring(0,Math.min(u,c)),u<c&&(r=/**
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
 */ function(e){let t="",n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(s){}t+="/"+r}return t}(e.substring(u,c)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):rk(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,c)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let f=t.indexOf(".");i=t.substring(0,f).toLowerCase(),n=t.substring(f+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */ class aG{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+eo(this.snapshot.exportVal())}}class aY{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */ class aQ{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */ class aJ{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return su(this._path)?null:so(this._path)}get ref(){return new aX(this._repo,this._path)}get _queryIdentifier(){let e=sJ(this._queryParams),t=rA(e);return"{}"===t?"default":t}get _queryObject(){return sJ(this._queryParams)}isEqual(e){if(!((e=eT(e))instanceof aJ))return!1;let t=this._repo===e._repo,n=sd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class aX extends aJ{constructor(e,t){super(e,t,new sY,!1)}get parent(){let e=sl(this._path);return null===e?null:new aX(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class aZ{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new st(e),n=a1(this.ref,e);return new aZ(this._node.getChild(t),n,sO)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;let t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new aZ(n,a1(this.ref,t),sO)))}hasChild(e){let t=new st(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function a0(e,t){return(e=eT(e))._checkNotDeleted("ref"),void 0!==t?a1(e._root,t):e._root}function a1(e,t){return null===si((e=eT(e))._path)?aS("child","path",t,!1):aT("child","path",t,!1),new aX(e._repo,sh(e._path,t))}function a2(e,t){aE("set",(e=eT(e))._path),aI("set",t,e._path,!1);let n=new et;return!function(e,t,n,i,r){aq(e,"set",{path:t.toString(),value:n,priority:i});let s=aA(e),o=sU(n,i),a=o5(e.serverSyncTree_,t),l=au(o,a,s),h=aF(e),u=o1(e.serverSyncTree_,t,l,h,!0);aN(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,i)=>{let s="ok"===n;s||rk("set at "+t+" failed: "+n);let o=o2(e.serverSyncTree_,h,!s);aO(e.eventQueue_,t,o),r&&rU(()=>{if("ok"===n)r(null);else{let e=(n||"error").toUpperCase(),t=e;i&&(t+=": "+i);let s=Error(t);s.code=e,r(s)}})});let c=aV(e,t);aj(e,c),aO(e.eventQueue_,c,[])}(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}class a3{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new aG("value",this,new aZ(e.snapshotNode,new aX(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new aY(this,e,t):null}matches(e){return e instanceof a3&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}M(!p,"__referenceConstructor has already been defined"),p=aX,M(!f,"__referenceConstructor has already been defined"),f=aX;let a4={};class a6{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=rZ(e.repoInfo_),e.forceRestClient_||rj())e.server_=new sX(e.repoInfo_,(t,n,i,r)=>{aD(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>aM(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{eo(n)}catch(i){throw Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new sv(e.repoInfo_,t,(t,n,i,r)=>{aD(e,t,n,i,r)},t=>{aM(e,t)},t=>{rM(t,(t,n)=>{aL(e,t,n)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return rX[n]||(rX[n]=t()),rX[n]}(e.repoInfo_,()=>new s3(e.stats_,e.server_)),e.infoData_=new sZ,e.infoSyncTree_=new o0({startListening(t,n,i,r){let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=o3(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening(){}}),aL(e,"connected",!1),e.serverSyncTree_=new o0({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{let s=r(n,i);aO(e.eventQueue_,t._path,s)}),[]),stopListening(t,n){e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new aX(this._repo,sn())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=a4[t];n&&n[e.key]===e||rI(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&rI("Cannot call "+e+" on a deleted database.")}}sv.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},sv.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},ra=e9,e3(new eS("database",(e,{instanceIdentifier:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return function(e,t,n,i,r){var s,o,a;let l,h,u,c,d=i||e.options.databaseURL;void 0===d&&(e.options.projectId||rI("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rb("Using default host for project ",e.options.projectId),d=`${e.options.projectId}-default-rtdb.firebaseio.com`);let p=aB(d,r),f=p.repoInfo;void 0!==rr&&rr.env&&(u=rr.env.FIREBASE_DATABASE_EMULATOR_HOST),u?(c=!0,f=(p=aB(d=`http://${u}?ns=${f.namespace}`,r)).repoInfo):c=!p.repoInfo.secure;let m=r&&c?new rV(rV.OWNER):new rH(e.name,e.options,t);aP("Invalid Firebase Database URL",p),su(p.path)||rI("Database URL must point to the root of a Firebase Database (not including a child path).");let g=(s=f,o=e,a=new rz(e.name,n),(l=a4[o.name])||(l={},a4[o.name]=l),(h=l[s.toURLString()])&&rI("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),h=new ax(s,!1,m,a),l[s.toURLString()]=h,h);return new a6(g,e)}(n,i,r,t)},"PUBLIC").setMultipleInstances(!0)),te(rs,ro,void 0),te(rs,ro,"esm2017");var a5=function(){var e;function t(e){N(this,t),this.app=e,(0,k.Z)(this,"db",void 0),this.db=function(e=e7(),t){let n=e4(e,"database").getImmediate({identifier:void 0}),i=X("database");return i&&function(e,t,n,i={}){var r,s;let o;(e=eT(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&rI("Cannot call useEmulator() after instance has already been initialized.");let a=e._repoInternal;if(a.repoInfo_.nodeAdmin)i.mockUserToken&&rI('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new rV(rV.OWNER);else if(i.mockUserToken){let l="string"==typeof i.mockUserToken?i.mockUserToken:/**
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
 */ function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[W(JSON.stringify({alg:"none",type:"JWT"})),W(JSON.stringify(s)),""].join(".")}(i.mockUserToken,e.app.options.projectId);o=new rV(l)}r=a,s=o,r.repoInfo_=new rG(`${t}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams),s&&(r.authTokenProvider_=s)}(n,...i),n}(this.app)}return x(t,[{key:"addJob",value:function(e){var t=localStorage.getItem(i$.E);return a2(a0(this.db,"users/".concat(t,"/jobs/").concat(e.id)),e)}},{key:"updateJob",value:function(e){var t=localStorage.getItem(i$.E);return a2(a0(this.db,"users/".concat(t,"/jobs/").concat(e.id)),e)}},{key:"getJobs",value:(e=(0,rt.Z)(ri().mark(function e(){var t,n;return ri().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem(i$.E),n=a0(this.db),e.abrupt("return",(function(e){e=eT(e);let t=new aQ(()=>{}),n=new a3(t);return(function(e,t,n){let i=function(e,t){var n;let i=t._path,r=null;e.syncPointTree_.foreachOnPath(i,(e,t)=>{let n=sc(e,i);r=r||oY(t,n)});let s=e.syncPointTree_.get(i);s?r=r||oY(s,sn()):(s=new o$,e.syncPointTree_=e.syncPointTree_.set(i,s));let o=null!=r,a=o?new ot(r,!0,!1):null,l=(n=e.pendingWriteTree_,oN(t._path,n)),h=oK(s,t,l,o?a.getNode():sF.EMPTY_NODE,o);return oa(h.viewCache_)}(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then(i=>{let r;let s=sU(i).withIndex(t._queryParams.getIndex());if(function(e,t,n,i=!1){var r;let s;let o=t._path,a=null,l=!1;e.syncPointTree_.foreachOnPath(o,(e,t)=>{let n=sc(e,o);a=a||oY(t,n),l=l||oJ(t)});let h=e.syncPointTree_.get(o);if(h?(l=l||oJ(h),a=a||oY(h,sn())):(h=new o$,e.syncPointTree_=e.syncPointTree_.set(o,h)),null!=a)s=!0;else{s=!1,a=sF.EMPTY_NODE;let u=e.syncPointTree_.subtree(o);u.foreachChild((e,t)=>{let n=oY(t,sn());n&&(a=a.updateImmediateChild(e,n))})}let c=null!=oQ(h,t);if(!c&&!t._queryParams.loadsAllData()){let d=ae(t);M(!e.queryToTagMap.has(d),"View does not exist, but we have a tag");let p=oZ++;e.queryToTagMap.set(d,p),e.tagToQueryMap.set(p,d)}let f=(r=e.pendingWriteTree_,oN(o,r)),m=function(e,t,n,i,r,s){let o=oK(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){let r=n.getNode();r.forEachChild(sO,(e,t)=>{i.push(sH(e,t))})}return n.isFullyInitialized()&&i.push(sz(n.getNode())),oV(e,i,n.getNode(),t)}(o,n)}(h,t,n,f,a,s);if(!c&&!l&&!i){let g=oQ(h,t);m=m.concat(function(e,t,n){let i=t._path,r=o7(e,t),s=o8(e,n),o=e.listenProvider_.startListening(ar(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)M(!oJ(a.value),"If we're adding a query, it shouldn't be shadowed");else{let l=a.fold((e,t,n)=>{if(!su(e)&&t&&oJ(t))return[oX(t).query];{let i=[];return t&&(i=i.concat(oG(t).map(e=>e.query))),rM(n,(e,t)=>{i=i.concat(t)}),i}});for(let h=0;h<l.length;++h){let u=l[h];e.listenProvider_.stopListening(ar(u),o7(e,u))}}return o}(e,t,g))}}(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=o3(e.serverSyncTree_,t._path,s);else{let o=o7(e.serverSyncTree_,t);r=o6(e.serverSyncTree_,t._path,s,o)}return aO(e.eventQueue_,t._path,r),o4(e.serverSyncTree_,t,n,null,!0),s},n=>(aq(e,"get for query "+eo(t)+" failed: "+n),Promise.reject(Error(n))))})(e._repo,e,n).then(t=>new aZ(t,new aX(e._repo,e._path),e._queryParams.getIndex()))})(a1(n,"users/".concat(t,"/jobs"))).then(function(e){return e.exists()?e.val():[]}).catch(function(e){console.error(e)}));case 3:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"removeJob",value:function(e){var t,n=localStorage.getItem(i$.E);return aE("remove",(t=a0(this.db,"users/".concat(n,"/jobs/").concat(e.id)))._path),a2(t,null)}}]),t}();function a9(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var a8={apiKey:"AIzaSyAfxhqYN32sMXKsH_ExfuFdkhclTHbcj98",authDomain:"moejob-e434f.firebaseapp.com",projectId:"moejob-e434f",storageBucket:"moejob-e434f.appspot.com",appId:"1330381651629:web:0c8665d5de522fb9186024",measurementId:"G-J4VVV27QL0"},a7=new class{constructor(e={}){this.queryCache=e.queryCache||new i1,this.mutationCache=e.mutationCache||new i3,this.logger=e.logger||iY._,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}mount(){this.unsubscribeFocus=i4.j.subscribe(()=>{i4.j.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=i6.N.subscribe(()=>{i6.N.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())})}unmount(){var e,t;null==(e=this.unsubscribeFocus)||e.call(this),null==(t=this.unsubscribeOnline)||t.call(this)}isFetching(e,t){let[n]=(0,iG.I6)(e,t);return n.fetchStatus="fetching",this.queryCache.findAll(n).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var n;return null==(n=this.queryCache.find(e,t))?void 0:n.state.data}ensureQueryData(e,t,n){let i=(0,iG._v)(e,t,n),r=this.getQueryData(i.queryKey);return r?Promise.resolve(r):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>{let n=t.data;return[e,n]})}setQueryData(e,t,n){let i=this.queryCache.find(e),r=null==i?void 0:i.state.data,s=(0,iG.SE)(t,r);if(void 0===s)return;let o=(0,iG._v)(e),a=this.defaultQueryOptions(o);return this.queryCache.build(this,a).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return iQ.V.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e,t){var n;return null==(n=this.queryCache.find(e,t))?void 0:n.state}removeQueries(e,t){let[n]=(0,iG.I6)(e,t),i=this.queryCache;iQ.V.batch(()=>{i.findAll(n).forEach(e=>{i.remove(e)})})}resetQueries(e,t,n){let[i,r]=(0,iG.I6)(e,t,n),s=this.queryCache,o={type:"active",...i};return iQ.V.batch(()=>(s.findAll(i).forEach(e=>{e.reset()}),this.refetchQueries(o,r)))}cancelQueries(e,t,n){let[i,r={}]=(0,iG.I6)(e,t,n);void 0===r.revert&&(r.revert=!0);let s=iQ.V.batch(()=>this.queryCache.findAll(i).map(e=>e.cancel(r)));return Promise.all(s).then(iG.ZT).catch(iG.ZT)}invalidateQueries(e,t,n){let[i,r]=(0,iG.I6)(e,t,n);return iQ.V.batch(()=>{var e,t;if(this.queryCache.findAll(i).forEach(e=>{e.invalidate()}),"none"===i.refetchType)return Promise.resolve();let n={...i,type:null!=(e=null!=(t=i.refetchType)?t:i.type)?e:"active"};return this.refetchQueries(n,r)})}refetchQueries(e,t,n){let[i,r]=(0,iG.I6)(e,t,n),s=iQ.V.batch(()=>this.queryCache.findAll(i).filter(e=>!e.isDisabled()).map(e=>{var t;return e.fetch(void 0,{...r,cancelRefetch:null==(t=null==r?void 0:r.cancelRefetch)||t,meta:{refetchPage:i.refetchPage}})})),o=Promise.all(s).then(iG.ZT);return null!=r&&r.throwOnError||(o=o.catch(iG.ZT)),o}fetchQuery(e,t,n){let i=(0,iG._v)(e,t,n),r=this.defaultQueryOptions(i);void 0===r.retry&&(r.retry=!1);let s=this.queryCache.build(this,r);return s.isStaleByTime(r.staleTime)?s.fetch(r):Promise.resolve(s.state.data)}prefetchQuery(e,t,n){return this.fetchQuery(e,t,n).then(iG.ZT).catch(iG.ZT)}fetchInfiniteQuery(e,t,n){let i=(0,iG._v)(e,t,n);return i.behavior={onFetch(e){e.fetchFn=()=>{var t,n,i,r,s,o,a;let l;let h=null==(t=e.fetchOptions)?void 0:null==(n=t.meta)?void 0:n.refetchPage,u=null==(i=e.fetchOptions)?void 0:null==(r=i.meta)?void 0:r.fetchMore,c=null==u?void 0:u.pageParam,d=(null==u?void 0:u.direction)==="forward",p=(null==u?void 0:u.direction)==="backward",f=(null==(s=e.state.data)?void 0:s.pages)||[],m=(null==(o=e.state.data)?void 0:o.pageParams)||[],g=m,_=!1,v=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get(){var t,n;return null!=(t=e.signal)&&t.aborted?_=!0:null==(n=e.signal)||n.addEventListener("abort",()=>{_=!0}),e.signal}})},y=e.options.queryFn||(()=>Promise.reject("Missing queryFn")),b=(e,t,n,i)=>(g=i?[t,...g]:[...g,t],i?[n,...e]:[...e,n]),w=(t,n,i,r)=>{if(_)return Promise.reject("Cancelled");if(void 0===i&&!n&&t.length)return Promise.resolve(t);let s={queryKey:e.queryKey,pageParam:i,meta:e.options.meta};v(s);let o=y(s),a=Promise.resolve(o).then(e=>b(t,i,e,r));return a};if(f.length){if(d){let C=void 0!==c,I=C?c:i5(e.options,f);l=w(f,C,I)}else if(p){let k=void 0!==c,T=k?c:null==(a=e.options).getPreviousPageParam?void 0:a.getPreviousPageParam(f[0],f);l=w(f,k,T,!0)}else{g=[];let S=void 0===e.options.getNextPageParam,E=!h||!f[0]||h(f[0],0,f);l=E?w([],S,m[0]):Promise.resolve(b([],m[0],f[0]));for(let P=1;P<f.length;P++)l=l.then(t=>{let n=!h||!f[P]||h(f[P],P,f);if(n){let i=S?m[P]:i5(e.options,t);return w(t,S,i)}return Promise.resolve(b(t,m[P],f[P]))})}}else l=w([]);let R=l.then(e=>({pages:e,pageParams:g}));return R}}},this.fetchQuery(i)}prefetchInfiniteQuery(e,t,n){return this.fetchInfiniteQuery(e,t,n).then(iG.ZT).catch(iG.ZT)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){let n=this.queryDefaults.find(t=>(0,iG.yF)(e)===(0,iG.yF)(t.queryKey));n?n.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;let t=this.queryDefaults.find(t=>(0,iG.to)(e,t.queryKey));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){let n=this.mutationDefaults.find(t=>(0,iG.yF)(e)===(0,iG.yF)(t.mutationKey));n?n.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;let t=this.mutationDefaults.find(t=>(0,iG.to)(e,t.mutationKey));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;let t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=(0,iG.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}({defaultOptions:{queries:{staleTime:3e3,cacheTime:36e4}}}),le=function(e){var t=e.Component,n=e.pageProps,i=e8(a8),r=new iz(i),s=new a5(i),o=(0,iB.useRouter)().push;return(0,iV.useEffect)(function(){localStorage.getItem(i$.J)||o("/login")},[]),(0,i8.jsx)(i8.Fragment,{children:(0,i8.jsx)(i9.aH,{client:a7,children:(0,i8.jsx)(iK.U,{dbService:s,children:(0,i8.jsx)(iH.H,{authService:r,children:(0,i8.jsx)(re,{children:(0,i8.jsxs)(T.f6,{theme:R,children:[(0,i8.jsx)(P,{}),(0,i8.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a9(Object(n),!0).forEach(function(t){(0,k.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a9(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n))]})})})})})})}},2762:function(e,t,n){"use strict";n.d(t,{E:function(){return r},J:function(){return i}});var i="access-token",r="user-id"},3454:function(e,t,n){"use strict";var i,r;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4403)}])},7663:function(e){!function(){var t={229:function(e){var t,n,i,r=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(i){n=o}}();var l=[],h=!1,u=-1;function c(){h&&i&&(h=!1,i.length?l=i.concat(l):u=-1,l.length&&d())}function d(){if(!h){var e=a(c);h=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,h=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(i){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||h||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,i),o=!1}finally{o&&delete n[e]}return s.exports}i.ab="//";var r=i(229);e.exports=r}()},1163:function(e,t,n){e.exports=n(1587)},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n="function"==typeof Symbol&&Symbol.for,i=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,h=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case u:case c:case s:case a:case o:case p:return e;default:switch(e=e&&e.$$typeof){case h:case d:case g:case m:case l:return e;default:return t}}case r:return t}}}function C(e){return w(e)===c}t.AsyncMode=u,t.ConcurrentMode=c,t.ContextConsumer=h,t.ContextProvider=l,t.Element=i,t.ForwardRef=d,t.Fragment=s,t.Lazy=g,t.Memo=m,t.Portal=r,t.Profiler=a,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return C(e)||w(e)===u},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===h},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===s},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===c||e===a||e===o||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===h||e.$$typeof===d||e.$$typeof===v||e.$$typeof===y||e.$$typeof===b||e.$$typeof===_)},t.typeOf=w},9864:function(e,t,n){"use strict";e.exports=n(9921)},6774:function(e){e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),o=Object.keys(t);if(s.length!==o.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),l=0;l<s.length;l++){var h=s[l];if(!a(h))return!1;var u=e[h],c=t[h];if(!1===(r=n?n.call(i,u,c,h):void 0)||void 0===r&&u!==c)return!1}return!0}},9521:function(e,t,n){"use strict";n.d(t,{f6:function(){return eR},vJ:function(){return eA},iv:function(){return eb},ZP:function(){return eD}});var i,r,s=n(9864),o=n(7294),a=n(6774),l=n.n(a),h=function(e){function t(e,t,i){var r=t.trim().split(f);t=r;var s=r.length,o=e.length;switch(o){case 0:case 1:var a=0;for(e=0===o?"":e[0]+" ";a<s;++a)t[a]=n(e,t[a],i).trim();break;default:var l=a=0;for(t=[];a<s;++a)for(var h=0;h<o;++h)t[l++]=n(e[h]+" ",r[a],i).trim()}return t}function n(e,t,n){var i=t.charCodeAt(0);switch(33>i&&(i=(t=t.trim()).charCodeAt(0)),i){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,n,s){var o=e+";",a=2*t+3*n+4*s;if(944===a){e=o.indexOf(":",9)+1;var l=o.substring(e,o.length-1).trim();return l=o.substring(0,e).trim()+l+";",1===R||2===R&&r(l,1)?"-webkit-"+l+l:l}if(0===R||2===R&&!r(o,1))return o;switch(a){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(T,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(l=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+l+o;case 1005:return d.test(o)?o.replace(c,":-webkit-")+o.replace(c,":-moz-")+o:o;case 1e3:switch(t=(l=o.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=o.replace(y,"tb");break;case 232:l=o.replace(y,"tb-rl");break;case 220:l=o.replace(y,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+l+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,a=(l=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:o=o.replace(l,"-webkit-"+l)+";"+o;break;case 207:case 102:o=o.replace(l,"-webkit-"+(102<a?"inline-":"")+"box")+";"+o.replace(l,"-webkit-"+l)+";"+o.replace(l,"-ms-"+l+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return l=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+l+"-ms-flex-"+l+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(C,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(C,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===k.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,n,s).replace(":fill-available",":stretch"):o.replace(l,"-webkit-"+l)+o.replace(l,"-moz-"+l.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+s&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function r(e,t){var n=e.indexOf(1===t?":":"{"),i=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),A(2!==t?i:i.replace(I,"$1"),n,t)}function s(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(w," or ($1)").substring(4):"("+t+")"}function o(e,t,n,i,r,s,o,a,h,u){for(var c,d=0,p=t;d<x;++d)switch(c=O[d].call(l,e,p,n,i,r,s,o,a,h,u)){case void 0:case!1:case!0:case null:break;default:p=c}if(p!==t)return p}function a(e){return void 0!==(e=e.prefix)&&(A=null,e?"function"!=typeof e?R=1:(R=2,A=e):R=0),a}function l(e,n){var a=e;if(33>a.charCodeAt(0)&&(a=a.trim()),a=[a],0<x){var l=o(-1,n,a,a,E,S,0,0,0,0);void 0!==l&&"string"==typeof l&&(n=l)}var c=function e(n,a,l,c,d){for(var p,f,m,y,w,C=0,I=0,k=0,T=0,O=0,A=0,M=m=p=0,L=0,F=0,q=0,U=0,j=l.length,W=j-1,z="",H="",V="",$="";L<j;){if(f=l.charCodeAt(L),L===W&&0!==I+T+k+C&&(0!==I&&(f=47===I?10:47),T=k=C=0,j++,W++),0===I+T+k+C){if(L===W&&(0<F&&(z=z.replace(u,"")),0<z.trim().length)){switch(f){case 32:case 9:case 59:case 13:case 10:break;default:z+=l.charAt(L)}f=59}switch(f){case 123:for(p=(z=z.trim()).charCodeAt(0),m=1,U=++L;L<j;){switch(f=l.charCodeAt(L)){case 123:m++;break;case 125:m--;break;case 47:switch(f=l.charCodeAt(L+1)){case 42:case 47:e:{for(M=L+1;M<W;++M)switch(l.charCodeAt(M)){case 47:if(42===f&&42===l.charCodeAt(M-1)&&L+2!==M){L=M+1;break e}break;case 10:if(47===f){L=M+1;break e}}L=M}}break;case 91:f++;case 40:f++;case 34:case 39:for(;L++<W&&l.charCodeAt(L)!==f;);}if(0===m)break;L++}if(m=l.substring(U,L),0===p&&(p=(z=z.replace(h,"").trim()).charCodeAt(0)),64===p){switch(0<F&&(z=z.replace(u,"")),f=z.charCodeAt(1)){case 100:case 109:case 115:case 45:F=a;break;default:F=N}if(U=(m=e(a,F,m,f,d+1)).length,0<x&&(F=t(N,z,q),w=o(3,m,F,a,E,S,U,f,d,c),z=F.join(""),void 0!==w&&0===(U=(m=w.trim()).length)&&(f=0,m="")),0<U)switch(f){case 115:z=z.replace(b,s);case 100:case 109:case 45:m=z+"{"+m+"}";break;case 107:m=(z=z.replace(g,"$1 $2"))+"{"+m+"}",m=1===R||2===R&&r("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=z+m,112===c&&(H+=m,m="")}else m=""}else m=e(a,t(a,z,q),m,c,d+1);V+=m,m=q=F=M=p=0,z="",f=l.charCodeAt(++L);break;case 125:case 59:if(1<(U=(z=(0<F?z.replace(u,""):z).trim()).length))switch(0===M&&(45===(p=z.charCodeAt(0))||96<p&&123>p)&&(U=(z=z.replace(" ",":")).length),0<x&&void 0!==(w=o(1,z,a,n,E,S,H.length,c,d,c))&&0===(U=(z=w.trim()).length)&&(z="\0\0"),p=z.charCodeAt(0),f=z.charCodeAt(1),p){case 0:break;case 64:if(105===f||99===f){$+=z+l.charAt(L);break}default:58!==z.charCodeAt(U-1)&&(H+=i(z,p,f,z.charCodeAt(2)))}q=F=M=p=0,z="",f=l.charCodeAt(++L)}}switch(f){case 13:case 10:47===I?I=0:0===1+p&&107!==c&&0<z.length&&(F=1,z+="\0"),0<x*D&&o(0,z,a,n,E,S,H.length,c,d,c),S=1,E++;break;case 59:case 125:if(0===I+T+k+C){S++;break}default:switch(S++,y=l.charAt(L),f){case 9:case 32:if(0===T+C+I)switch(O){case 44:case 58:case 9:case 32:y="";break;default:32!==f&&(y=" ")}break;case 0:y="\\0";break;case 12:y="\\f";break;case 11:y="\\v";break;case 38:0===T+I+C&&(F=q=1,y="\f"+y);break;case 108:if(0===T+I+C+P&&0<M)switch(L-M){case 2:112===O&&58===l.charCodeAt(L-3)&&(P=O);case 8:111===A&&(P=A)}break;case 58:0===T+I+C&&(M=L);break;case 44:0===I+k+T+C&&(F=1,y+="\r");break;case 34:case 39:0===I&&(T=T===f?0:0===T?f:T);break;case 91:0===T+I+k&&C++;break;case 93:0===T+I+k&&C--;break;case 41:0===T+I+C&&k--;break;case 40:0===T+I+C&&(0===p&&(2*O+3*A==533||(p=1)),k++);break;case 64:0===I+k+T+C+M+m&&(m=1);break;case 42:case 47:if(!(0<T+C+k))switch(I){case 0:switch(2*f+3*l.charCodeAt(L+1)){case 235:I=47;break;case 220:U=L,I=42}break;case 42:47===f&&42===O&&U+2!==L&&(33===l.charCodeAt(U+2)&&(H+=l.substring(U,L+1)),y="",I=0)}}0===I&&(z+=y)}A=O,O=f,L++}if(0<(U=H.length)){if(F=a,0<x&&void 0!==(w=o(2,H,F,n,E,S,U,c,d,c))&&0===(H=w).length)return $+H+V;if(H=F.join(",")+"{"+H+"}",0!=R*P){switch(2!==R||r(H,2)||(P=0),P){case 111:H=H.replace(v,":-moz-$1")+H;break;case 112:H=H.replace(_,"::-webkit-input-$1")+H.replace(_,"::-moz-$1")+H.replace(_,":-ms-input-$1")+H}P=0}}return $+H+V}(N,a,n,0,0);return 0<x&&void 0!==(l=o(-2,c,a,a,E,S,c.length,0,0,0))&&(c=l),P=0,S=E=1,c}var h=/^\0+/g,u=/[\0\r\f]/g,c=/: */g,d=/zoo|gra/,p=/([,: ])(transform)/g,f=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,v=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,C=/-self|flex-/g,I=/[^]*?(:[rp][el]a[\w-]+)[^]*/,k=/stretch|:\s*\w+\-(?:conte|avail)/,T=/([^-])(image-set\()/,S=1,E=1,P=0,R=1,N=[],O=[],x=0,A=null,D=0;return l.use=function e(t){switch(t){case void 0:case null:x=O.length=0;break;default:if("function"==typeof t)O[x++]=t;else if("object"==typeof t)for(var n=0,i=t.length;n<i;++n)e(t[n]);else D=0|!!t}return e},l.set=a,void 0!==e&&a(e),l},u={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,d=(i=Object.create(null),function(e){return void 0===i[e]&&(i[e]=c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)),i[e]}),p=n(8679),f=n.n(p),m=n(3454);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var _=function(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n},v=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,s.typeOf)(e)},y=Object.freeze([]),b=Object.freeze({});function w(e){return"function"==typeof e}function C(e){return e.displayName||e.name||"Component"}function I(e){return e&&"string"==typeof e.styledComponentId}var k=void 0!==m&&(m.env.REACT_APP_SC_ATTR||m.env.SC_ATTR)||"data-styled",T="undefined"!=typeof window&&"HTMLElement"in window,S=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==m&&void 0!==m.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==m.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==m.env.REACT_APP_SC_DISABLE_SPEEDY&&m.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==m&&void 0!==m.env.SC_DISABLE_SPEEDY&&""!==m.env.SC_DISABLE_SPEEDY&&"false"!==m.env.SC_DISABLE_SPEEDY&&m.env.SC_DISABLE_SPEEDY),E={};function P(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];throw Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var R=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,r=i;e>=r;)(r<<=1)<0&&P(16,""+e);this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var s=i;s<r;s++)this.groupSizes[s]=0}for(var o=this.indexOfGroup(e+1),a=0,l=t.length;a<l;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),i=n+t;this.groupSizes[e]=0;for(var r=n;r<i;r++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n,s=i;s<r;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),N=new Map,O=new Map,x=1,A=function(e){if(N.has(e))return N.get(e);for(;O.has(x);)x++;var t=x++;return N.set(e,t),O.set(t,e),t},D=function(e,t){t>=x&&(x=t+1),N.set(e,t),O.set(t,e)},M="style["+k+'][data-styled-version="5.3.6"]',L=RegExp("^"+k+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&e.registerName(t,i)},q=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),i=[],r=0,s=n.length;r<s;r++){var o=n[r].trim();if(o){var a=o.match(L);if(a){var l=0|parseInt(a[1],10),h=a[2];0!==l&&(D(h,l),F(e,h,a[3]),e.getTag().insertRules(l,i)),i.length=0}else i.push(o)}}},U=function(){return n.nc},j=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var i=t[n];if(i&&1===i.nodeType&&i.hasAttribute(k))return i}}(n),s=void 0!==r?r.nextSibling:null;i.setAttribute(k,"active"),i.setAttribute("data-styled-version","5.3.6");var o=U();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},W=function(){function e(e){var t=this.element=j(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,i=t.length;n<i;n++){var r=t[n];if(r.ownerNode===e)return r}P(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),z=function(){function e(e){var t=this.element=j(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),i=this.nodes[e];return this.element.insertBefore(n,i||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),H=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),V=T,$={isServer:!T,useCSSOMInjection:!S},B=function(){function e(e,t,n){void 0===e&&(e=b),void 0===t&&(t={}),this.options=g({},$,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&T&&V&&(V=!1,function(e){for(var t=document.querySelectorAll(M),n=0,i=t.length;n<i;n++){var r=t[n];r&&"active"!==r.getAttribute(k)&&(q(e,r),r.parentNode&&r.parentNode.removeChild(r))}}(this))}e.registerId=function(e){return A(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(g({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){var e,t,n,i,r;return this.tag||(this.tag=(n=(t=this.options).isServer,i=t.useCSSOMInjection,r=t.target,e=n?new H(r):i?new W(r):new z(r),new R(e)))},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(A(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(A(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(A(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,i="",r=0;r<n;r++){var s,o=(s=r,O.get(s));if(void 0!==o){var a=e.names.get(o),l=t.getGroup(r);if(a&&l&&a.size){var h=k+".g"+r+'[id="'+o+'"]',u="";void 0!==a&&a.forEach(function(e){e.length>0&&(u+=e+",")}),i+=""+l+h+'{content:"'+u+'"}/*!sc*/\n'}}}return i}(this)},e}(),K=/(a)(d)/gi,G=function(e){return String.fromCharCode(e+(e>25?39:97))};function Y(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=G(t%52)+n;return(G(t%52)+n).replace(K,"$1-$2")}var Q=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},J=function(e){return Q(5381,e)};function X(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(w(n)&&!I(n))return!1}return!0}var Z=J("5.3.6"),ee=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&X(e),this.componentId=t,this.baseHash=Q(Z,t),this.baseStyle=n,B.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var i=this.componentId,r=[];if(this.baseStyle&&r.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash){if(this.staticRulesId&&t.hasNameForId(i,this.staticRulesId))r.push(this.staticRulesId);else{var s=ev(this.rules,e,t,n).join(""),o=Y(Q(this.baseHash,s)>>>0);if(!t.hasNameForId(i,o)){var a=n(s,"."+o,void 0,i);t.insertRules(i,o,a)}r.push(o),this.staticRulesId=o}}else{for(var l=this.rules.length,h=Q(this.baseHash,n.hash),u="",c=0;c<l;c++){var d=this.rules[c];if("string"==typeof d)u+=d;else if(d){var p=ev(d,e,t,n),f=Array.isArray(p)?p.join(""):p;h=Q(h,f+c),u+=f}}if(u){var m=Y(h>>>0);if(!t.hasNameForId(i,m)){var g=n(u,"."+m,void 0,i);t.insertRules(i,m,g)}r.push(m)}}return r.join(" ")},e}(),et=/^\s*\/\/.*$/gm,en=[":","[",".","#"];function ei(e){var t,n,i,r,s=void 0===e?b:e,o=s.options,a=s.plugins,l=void 0===a?y:a,u=new h(void 0===o?b:o),c=[],d=function(e){function t(t){if(t)try{e(t+"}")}catch(n){}}return function(n,i,r,s,o,a,l,h,u,c){switch(n){case 1:if(0===u&&64===i.charCodeAt(0))return e(i+";"),"";break;case 2:if(0===h)return i+"/*|*/";break;case 3:switch(h){case 102:case 112:return e(r[0]+i),"";default:return i+(0===c?"/*|*/":"")}case -2:i.split("/*|*/}").forEach(t)}}}(function(e){c.push(e)}),p=function(e,i,s){return 0===i&&-1!==en.indexOf(s[n.length])||s.match(r)?e:"."+t};function f(e,s,o,a){void 0===a&&(a="&");var l=e.replace(et,"");return t=a,i=RegExp("\\"+(n=s)+"\\b","g"),r=RegExp("(\\"+n+"\\b){2,}"),u(o||!s?"":s,s&&o?o+" "+s+" { "+l+" }":l)}return u.use([].concat(l,[function(e,t,r){2===e&&r.length&&r[0].lastIndexOf(n)>0&&(r[0]=r[0].replace(i,p))},d,function(e){if(-2===e){var t=c;return c=[],t}}])),f.hash=l.length?l.reduce(function(e,t){return t.name||P(15),Q(e,t.name)},5381).toString():"",f}var er=o.createContext(),es=(er.Consumer,o.createContext()),eo=(es.Consumer,new B),ea=ei();function el(){return(0,o.useContext)(er)||eo}function eh(){return(0,o.useContext)(es)||ea}function eu(e){var t=(0,o.useState)(e.stylisPlugins),n=t[0],i=t[1],r=el(),s=(0,o.useMemo)(function(){var t=r;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target]),a=(0,o.useMemo)(function(){return ei({options:{prefix:!e.disableVendorPrefixes},plugins:n})},[e.disableVendorPrefixes,n]);return(0,o.useEffect)(function(){l()(n,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]),o.createElement(er.Provider,{value:s},o.createElement(es.Provider,{value:a},e.children))}var ec=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ea);var i=n.name+t.hash;e.hasNameForId(n.id,i)||e.insertRules(n.id,i,t(n.rules,i,"@keyframes"))},this.toString=function(){return P(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ea),this.name+e.hash},e}(),ed=/([A-Z])/,ep=/([A-Z])/g,ef=/^ms-/,em=function(e){return"-"+e.toLowerCase()};function eg(e){return ed.test(e)?e.replace(ep,em).replace(ef,"-ms-"):e}var e_=function(e){return null==e||!1===e||""===e};function ev(e,t,n,i){if(Array.isArray(e)){for(var r,s=[],o=0,a=e.length;o<a;o+=1)""!==(r=ev(e[o],t,n,i))&&(Array.isArray(r)?s.push.apply(s,r):s.push(r));return s}return e_(e)?"":I(e)?"."+e.styledComponentId:w(e)?"function"!=typeof e||e.prototype&&e.prototype.isReactComponent||!t?e:ev(e(t),t,n,i):e instanceof ec?n?(e.inject(n,i),e.getName(i)):e:v(e)?function e(t,n){var i,r,s=[];for(var o in t)t.hasOwnProperty(o)&&!e_(t[o])&&(Array.isArray(t[o])&&t[o].isCss||w(t[o])?s.push(eg(o)+":",t[o],";"):v(t[o])?s.push.apply(s,e(t[o],o)):s.push(eg(o)+": "+(i=o,null==(r=t[o])||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||i in u?String(r).trim():r+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var ey=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function eb(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return w(e)||v(e)?ey(ev(_(y,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:ey(ev(_(e,n)))}var ew=function(e,t,n){return void 0===n&&(n=b),e.theme!==n.theme&&e.theme||t||n.theme},eC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eI=/(^-|-$)/g;function ek(e){return e.replace(eC,"-").replace(eI,"")}var eT=function(e){return Y(J(e)>>>0)};function eS(e){return"string"==typeof e}var eE=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},eP=o.createContext();function eR(e){var t=(0,o.useContext)(eP),n=(0,o.useMemo)(function(){var n;return(n=e.theme)?w(n)?n(t):Array.isArray(n)||"object"!=typeof n?P(8):t?g({},t,{},n):n:P(14)},[e.theme,t]);return e.children?o.createElement(eP.Provider,{value:n},e.children):null}eP.Consumer;var eN={},eO=function(e){return function e(t,n,i){if(void 0===i&&(i=b),!(0,s.isValidElementType)(n))return P(1,String(n));var r=function(){return t(n,i,eb.apply(void 0,arguments))};return r.withConfig=function(r){return e(t,n,g({},i,{},r))},r.attrs=function(r){return e(t,n,g({},i,{attrs:Array.prototype.concat(i.attrs,r).filter(Boolean)}))},r}(function e(t,n,i){var r=I(t),s=!eS(t),a=n.attrs,l=void 0===a?y:a,h=n.componentId,u=void 0===h?(k=n.displayName,T=n.parentComponentId,eN[S="string"!=typeof k?"sc":ek(k)]=(eN[S]||0)+1,E=S+"-"+eT("5.3.6"+S+eN[S]),T?T+"-"+E:E):h,c=n.displayName,p=void 0===c?eS(t)?"styled."+t:"Styled("+C(t)+")":c,m=n.displayName&&n.componentId?ek(n.displayName)+"-"+n.componentId:n.componentId||u,_=r&&t.attrs?Array.prototype.concat(t.attrs,l).filter(Boolean):l,v=n.shouldForwardProp;r&&t.shouldForwardProp&&(v=n.shouldForwardProp?function(e,i,r){return t.shouldForwardProp(e,i,r)&&n.shouldForwardProp(e,i,r)}:t.shouldForwardProp);var k,T,S,E,P,R=new ee(i,m,r?t.componentStyle:void 0),N=R.isStatic&&0===l.length,O=function(e,t){return function(e,t,n,i){var r,s,a,l,h,u=e.attrs,c=e.componentStyle,p=e.defaultProps,f=e.foldedComponentIds,m=e.shouldForwardProp,_=e.styledComponentId,v=e.target,y=(void 0===(r=ew(t,(0,o.useContext)(eP),p)||b)&&(r=b),s=g({},t,{theme:r}),a={},u.forEach(function(e){var t,n,i,r=e;for(t in w(r)&&(r=r(s)),r)s[t]=a[t]="className"===t?(n=a[t],i=r[t],n&&i?n+" "+i:n||i):r[t]}),[s,a]),C=y[0],I=y[1],k=(l=el(),h=eh(),i?c.generateAndInjectStyles(b,l,h):c.generateAndInjectStyles(C,l,h)),T=I.$as||t.$as||I.as||t.as||v,S=eS(T),E=I!==t?g({},t,{},I):t,P={};for(var R in E)"$"!==R[0]&&"as"!==R&&("forwardedAs"===R?P.as=E[R]:(m?m(R,d,T):!S||d(R))&&(P[R]=E[R]));return t.style&&I.style!==t.style&&(P.style=g({},t.style,{},I.style)),P.className=Array.prototype.concat(f,_,k!==_?k:null,t.className,I.className).filter(Boolean).join(" "),P.ref=n,(0,o.createElement)(T,P)}(P,e,t,N)};return O.displayName=p,(P=o.forwardRef(O)).attrs=_,P.componentStyle=R,P.displayName=p,P.shouldForwardProp=v,P.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):y,P.styledComponentId=m,P.target=r?t.target:t,P.withComponent=function(t){var r=n.componentId,s=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t.indexOf(n=s[i])>=0||(r[n]=e[n]);return r}(n,["componentId"]),o=r&&r+"-"+(eS(t)?t:ek(C(t)));return e(t,g({},s,{attrs:_,componentId:o}),i)},Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function e(t){for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];for(var s=0;s<i.length;s++){var o,a=i[s];if(eE(a))for(var l in a)"__proto__"!==(o=l)&&"constructor"!==o&&"prototype"!==o&&function(t,n,i){var r=t[i];eE(n)&&eE(r)?e(r,n):t[i]=n}(t,a[l],l)}return t}({},t.defaultProps,e):e}}),P.toString=function(){return"."+P.styledComponentId},s&&f()(P,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),P},e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){eO[e]=eO(e)});var ex=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=X(e),B.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,i){var r=i(ev(this.rules,t,n,i).join(""),""),s=this.componentId+e;n.insertRules(s,s,r)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,i){e>2&&B.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,i)},e}();function eA(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var r=eb.apply(void 0,[e].concat(n)),s="sc-global-"+eT(JSON.stringify(r)),a=new ex(r,s);function l(e){var t=el(),n=eh(),i=(0,o.useContext)(eP),r=(0,o.useRef)(t.allocateGSInstance(s)).current;return t.server&&h(r,e,t,i,n),(0,o.useLayoutEffect)(function(){if(!t.server)return h(r,e,t,i,n),function(){return a.removeStyles(r,t)}},[r,e,t,i,n]),null}function h(e,t,n,i,r){if(a.isStatic)a.renderStyles(e,E,n,r);else{var s=g({},t,{theme:ew(t,i,l.defaultProps)});a.renderStyles(e,s,n,r)}}return o.memo(l)}(r=(function(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=U();return"<style "+[n&&'nonce="'+n+'"',k+'="true"','data-styled-version="5.3.6"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?P(2):e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)return P(2);var t,n=((t={})[k]="",t["data-styled-version"]="5.3.6",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),i=U();return i&&(n.nonce=i),[o.createElement("style",g({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new B({isServer:!0}),this.sealed=!1}).prototype).collectStyles=function(e){return this.sealed?P(2):o.createElement(eu,{sheet:this.instance},e)},r.interleaveWithNodeStream=function(e){return P(3)};var eD=eO},5761:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});var i=n(3989),r=n(2161);class s extends i.l{constructor(){super(),this.setup=e=>{if(!r.sk&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.focused=e,e&&this.onFocus()}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let o=new s},819:function(e,t,n){"use strict";n.d(t,{_:function(){return i}});let i=console},9886:function(e,t,n){"use strict";n.d(t,{R:function(){return l},m:function(){return a}});var i=n(819),r=n(81),s=n(9643),o=n(2379);class a extends s.F{constructor(e){super(),this.options={...e.defaultOptions,...e.options},this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||i._,this.observers=[],this.state=e.state||l(),this.updateCacheTime(this.options.cacheTime),this.scheduleGc()}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){-1===this.observers.indexOf(e)&&(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()}async execute(){var e,t,n,i,r,s,a,l,h,u,c,d,p,f,m,g;let _="loading"===this.state.status;try{if(!_){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(a=(l=this.mutationCache.config).onMutate)?void 0:a.call(l,this.state.variables,this));let v=await (null==(h=(u=this.options).onMutate)?void 0:h.call(u,this.state.variables));v!==this.state.context&&this.dispatch({type:"loading",context:v,variables:this.state.variables})}let y=await (()=>{var e;return this.retryer=(0,o.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(e=(t=this.mutationCache.config).onSuccess)?void 0:e.call(t,y,this.state.variables,this.state.context,this)),await (null==(n=(i=this.options).onSuccess)?void 0:n.call(i,y,this.state.variables,this.state.context)),await (null==(r=(s=this.options).onSettled)?void 0:r.call(s,y,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:y}),y}catch(b){try{throw await (null==(c=(d=this.mutationCache.config).onError)?void 0:c.call(d,b,this.state.variables,this.state.context,this)),await (null==(p=(f=this.options).onError)?void 0:p.call(f,b,this.state.variables,this.state.context)),await (null==(m=(g=this.options).onSettled)?void 0:m.call(g,void 0,b,this.state.variables,this.state.context)),b}finally{this.dispatch({type:"error",error:b})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,o.Kw)(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),r.V.batch(()=>{this.observers.forEach(t=>{t.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function l(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},81:function(e,t,n){"use strict";n.d(t,{V:function(){return r}});var i=n(2161);let r=function(){let e=[],t=0,n=e=>{e()},r=e=>{e()},s=e=>{let n;t++;try{n=e()}finally{--t||l()}return n},o=r=>{t?e.push(r):(0,i.A4)(()=>{n(r)})},a=e=>(...t)=>{o(()=>{e(...t)})},l=()=>{let t=e;e=[],t.length&&(0,i.A4)(()=>{r(()=>{t.forEach(e=>{n(e)})})})},h=e=>{n=e},u=e=>{r=e};return{batch:s,batchCalls:a,schedule:o,setNotifyFunction:h,setBatchNotifyFunction:u}}()},6474:function(e,t,n){"use strict";n.d(t,{N:function(){return o}});var i=n(3989),r=n(2161);class s extends i.l{constructor(){super(),this.setup=e=>{if(!r.sk&&window.addEventListener){let t=()=>e();return window.addEventListener("online",t,!1),window.addEventListener("offline",t,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){this.online=e,e&&this.onOnline()}onOnline(){this.listeners.forEach(e=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let o=new s},9643:function(e,t,n){"use strict";n.d(t,{F:function(){return r}});var i=n(2161);class r{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:i.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},2379:function(e,t,n){"use strict";n.d(t,{DV:function(){return h},Kw:function(){return a},Mz:function(){return u}});var i=n(5761),r=n(6474),s=n(2161);function o(e){return Math.min(1e3*2**e,3e4)}function a(e){return(null!=e?e:"online")!=="online"||r.N.isOnline()}class l{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function h(e){return e instanceof l}function u(e){let t,n,h,u=!1,c=0,d=!1,p=new Promise((e,t)=>{n=e,h=t}),f=t=>{d||(y(new l(t)),null==e.abort||e.abort())},m=()=>{u=!0},g=()=>{u=!1},_=()=>!i.j.isFocused()||"always"!==e.networkMode&&!r.N.isOnline(),v=i=>{d||(d=!0,null==e.onSuccess||e.onSuccess(i),null==t||t(),n(i))},y=n=>{d||(d=!0,null==e.onError||e.onError(n),null==t||t(),h(n))},b=()=>new Promise(n=>{t=e=>{if(d||!_())return n(e)},null==e.onPause||e.onPause()}).then(()=>{t=void 0,d||null==e.onContinue||e.onContinue()}),w=()=>{let t;if(!d){try{t=e.fn()}catch(n){t=Promise.reject(n)}Promise.resolve(t).then(v).catch(t=>{var n,i;if(d)return;let r=null!=(n=e.retry)?n:3,a=null!=(i=e.retryDelay)?i:o,l="function"==typeof a?a(c,t):a,h=!0===r||"number"==typeof r&&c<r||"function"==typeof r&&r(c,t);if(u||!h){y(t);return}c++,null==e.onFail||e.onFail(c,t),(0,s.Gh)(l).then(()=>{if(_())return b()}).then(()=>{u?y(t):w()})})}};return a(e.networkMode)?w():b().then(w),{promise:p,cancel:f,continue(){null==t||t()},cancelRetry:m,continueRetry:g}}},3989:function(e,t,n){"use strict";n.d(t,{l:function(){return i}});class i{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.push(e),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(t=>t!==e),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}},2161:function(e,t,n){"use strict";n.d(t,{A4:function(){return I},G9:function(){return k},Gh:function(){return C},I6:function(){return u},Kp:function(){return a},PN:function(){return o},Rm:function(){return p},SE:function(){return s},VS:function(){return _},X7:function(){return d},ZT:function(){return r},_v:function(){return l},_x:function(){return c},lV:function(){return h},oE:function(){return T},sk:function(){return i},to:function(){return m},yF:function(){return f}});let i="undefined"==typeof window;function r(){}function s(e,t){return"function"==typeof e?e(t):e}function o(e){return"number"==typeof e&&e>=0&&e!==1/0}function a(e,t){return Math.max(e+(t||0)-Date.now(),0)}function l(e,t,n){return w(e)?"function"==typeof t?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function h(e,t,n){return w(e)?"function"==typeof t?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function u(e,t,n){return w(e)?[{...t,queryKey:e},n]:[e||{},t]}function c(e,t){let{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:o,stale:a}=e;if(w(o)){if(i){if(t.queryHash!==p(o,t.options))return!1}else{if(!g(t.queryKey,o))return!1}}if("all"!==n){let l=t.isActive();if("active"===n&&!l||"inactive"===n&&l)return!1}return("boolean"!=typeof a||t.isStale()===a)&&(void 0===r||r===t.state.fetchStatus)&&(!s||!!s(t))}function d(e,t){let{exact:n,fetching:i,predicate:r,mutationKey:s}=e;if(w(s)){if(!t.options.mutationKey)return!1;if(n){if(f(t.options.mutationKey)!==f(s))return!1}else{if(!g(t.options.mutationKey,s))return!1}}return("boolean"!=typeof i||"loading"===t.state.status===i)&&(!r||!!r(t))}function p(e,t){let n=(null==t?void 0:t.queryKeyHashFn)||f;return n(e)}function f(e){return JSON.stringify(e,(e,t)=>y(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function m(e,t){return g(e,t)}function g(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(n=>!g(e[n],t[n]))}function _(e,t){if(e&&!t||t&&!e)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function v(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function y(e){if(!b(e))return!1;let t=e.constructor;if(void 0===t)return!0;let n=t.prototype;return!!(b(n)&&n.hasOwnProperty("isPrototypeOf"))}function b(e){return"[object Object]"===Object.prototype.toString.call(e)}function w(e){return Array.isArray(e)}function C(e){return new Promise(t=>{setTimeout(t,e)})}function I(e){C(0).then(e)}function k(){if("function"==typeof AbortController)return new AbortController}function T(e,t,n){return null!=n.isDataEqual&&n.isDataEqual(e,t)?e:"function"==typeof n.structuralSharing?n.structuralSharing(e,t):!1!==n.structuralSharing?function e(t,n){if(t===n)return t;let i=v(t)&&v(n);if(i||y(t)&&y(n)){let r=i?t.length:Object.keys(t).length,s=i?n:Object.keys(n),o=s.length,a=i?[]:{},l=0;for(let h=0;h<o;h++){let u=i?h:s[h];a[u]=e(t[u],n[u]),a[u]===t[u]&&l++}return r===o&&l===r?t:a}return n}(e,t):t}},5945:function(e,t,n){"use strict";n.d(t,{NL:function(){return a},aH:function(){return l}});var i=n(7294);let r=i.createContext(void 0),s=i.createContext(!1);function o(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=r),window.ReactQueryClientContext):r)}let a=({context:e}={})=>{let t=i.useContext(o(e,i.useContext(s)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},l=({client:e,children:t,context:n,contextSharing:r=!1})=>{i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let a=o(n,r);return i.createElement(s.Provider,{value:!n&&r},i.createElement(a.Provider,{value:e},t))}},29:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o){try{var a=e[s](o),l=a.value}catch(h){n(h);return}a.done?t(l):Promise.resolve(l).then(i,r)}function r(e){return function(){var t=this,n=arguments;return new Promise(function(r,s){var o=e.apply(t,n);function a(e){i(o,r,s,a,l,"next",e)}function l(e){i(o,r,s,a,l,"throw",e)}a(void 0)})}}n.d(t,{Z:function(){return r}})},9499:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return i}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(1587)}),_N_E=e.O()}]);