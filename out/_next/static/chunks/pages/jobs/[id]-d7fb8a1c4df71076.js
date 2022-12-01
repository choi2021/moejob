(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{8445:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(9008),r=n.n(i);n(7294);var o=n(5893);function c(e){var t=e.title;return(0,o.jsx)(r(),{children:(0,o.jsx)("title",{children:t})})}},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}}),n(7294);var i=n(9521),r=n(29),o=n(7794),c=n.n(o),a=n(5675),s=n.n(a),l=n(5434),d=n(5945),u=n(8228),f=n(9204),p=n(1664),m=n.n(p),h=n(8664),g=n(5893),x=i.ZP.div.withConfig({displayName:"JobItem__Wrapper",componentId:"sc-ie5q6q-0"})(["width:100%;margin:auto;height:20rem;display:flex;flex-direction:column;align-items:center;position:relative;cursor:pointer;a{width:100%;}"]),b=i.ZP.div.withConfig({displayName:"JobItem__Badge",componentId:"sc-ie5q6q-1"})(["left:-10px;top:-10px;padding:0.25rem 0.5rem;background-color:lightblue;margin-right:0.5rem;font-size:0.8rem;border-radius:0.25rem;position:absolute;line-height:25px;@media screen and (max-width:700px){font-size:0.6rem;padding:0.1rem 0.25rem;}"]),y=i.ZP.div.withConfig({displayName:"JobItem__Box",componentId:"sc-ie5q6q-2"})(["margin-top:0.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;h1{font-weight:bold;font-size:1rem;}"]),j=(0,i.ZP)(s()).withConfig({displayName:"JobItem__Img",componentId:"sc-ie5q6q-3"})(["width:100%;height:auto;"]),v=i.ZP.button.withConfig({displayName:"JobItem__DeleteBtn",componentId:"sc-ie5q6q-4"})(["right:-5px;top:-5px;font-size:1rem;position:absolute;padding:0;display:flex;justify-content:center;align-items:center;width:20px;height:20px;border-radius:50%;color:white;background-color:",";"],function(e){return e.theme.colors.black});function w(e){var t,n=e.job,i=n.name,o=n.platform,a=n.img,s=n.checkPercentage,p=(0,d.NL)(),w=(0,h.F)(),_=(0,u.D)((t=(0,r.Z)(c().mark(function e(t){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.removeJob(t));case 1:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),{onSuccess:function(){p.invalidateQueries(["jobs"])},onError:function(e){if(e instanceof f.d7){var t=e.response;t&&console.log(t)}}}).mutate;return(0,g.jsxs)(x,{children:[s>=.5&&(0,g.jsx)(b,{children:"50% 이상"}),(0,g.jsx)(v,{onClick:function(){_(n)},children:(0,g.jsx)(l.eqC,{})}),(0,g.jsxs)(m(),{href:"/jobs/".concat(n.id),children:[(0,g.jsx)(j,{src:a,alt:"job",width:"200",height:"180",priority:!0}),(0,g.jsxs)(y,{children:[(0,g.jsx)("h1",{children:i}),(0,g.jsx)("h3",{children:o})]})]})]})}var _=n(7848),k=n(1163),P=i.ZP.ul.withConfig({displayName:"JobList__Wrapper",componentId:"sc-e8fcer-0"})(["width:100%;padding:0 1rem;height:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:10px 20px;@media screen and (max-width:700px){grid-template-columns:repeat(2,1fr);}"]);function O(){var e=(0,k.useRouter)().query.id,t=(0,h.F)(),n=(0,_.a)(["jobs"],function(){return t.getJobs()},{select:function(t){return Object.values(t).filter(function(t){return t.id!==e})}}),i=n.data;return n.isLoading?(0,g.jsx)("div",{children:"채용공고를 불러오는 중입니다..."}):(0,g.jsx)(P,{children:i&&i.map(function(e){return(0,g.jsx)(w,{job:e},e.id)})})}},8648:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}}),n(7294);var i=n(9521),r=n(1664),o=n.n(r),c=n(1163),a=n(3988),s=n(2762),l=n(5893),d=i.ZP.nav.withConfig({displayName:"Navbar__Wrapper",componentId:"sc-1lcf8pc-0"})(["width:100%;position:fixed;top:0;background-color:",";height:3rem;border-bottom:gray 1px solid;z-index:800;"],function(e){return e.theme.colors.white}),u=i.ZP.nav.withConfig({displayName:"Navbar__Layout",componentId:"sc-1lcf8pc-1"})(["margin:auto;max-width:1000px;display:flex;align-items:center;justify-content:space-between;height:3rem;padding:1rem;a{font-size:1.6rem;font-weight:bold;color:lightcoral;}"]),f=i.ZP.div.withConfig({displayName:"Navbar__Btns",componentId:"sc-1lcf8pc-2"})(["display:flex;align-items:center;button{font-weight:bold;padding:0.5rem;&:hover{color:lightcoral;}}"]);function p(){var e=(0,c.useRouter)().push,t=(0,a.m)();return(0,l.jsx)(d,{children:(0,l.jsxs)(u,{children:[(0,l.jsx)(o(),{href:"/",children:"모으잡"}),(0,l.jsx)(f,{children:(0,l.jsx)("button",{onClick:function(){t.signOut().then(function(){localStorage.removeItem(s.J),e("/login")}).catch(function(e){return console.log(e)})},children:"로그아웃"})})]})})}var m=i.ZP.section.withConfig({displayName:"MainLayout__Wrapper",componentId:"sc-x4d77b-0"})(["padding-top:3rem;margin:auto;display:flex;flex-direction:column;min-height:100vh;"]),h=i.ZP.main.withConfig({displayName:"MainLayout__Layout",componentId:"sc-x4d77b-1"})(["flex:1;display:flex;flex-direction:column;align-items:center;"]),g=function(e){var t=e.children;return(0,l.jsxs)(m,{children:[(0,l.jsx)(p,{}),(0,l.jsx)(h,{children:t})]})}},3621:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var i=n(1163);n(7294);var r=n(9521),o=n(8664),c=n(7848),a=n(1664),s=n.n(a),l=n(8193),d=n(5893),u=r.ZP.div.withConfig({displayName:"NotFound__NotfoundBox",componentId:"sc-1pq8q8e-0"})(["font-size:1.3rem;color:",";text-align:center;a{color:",";display:flex;align-items:center;justify-content:center;}"],function(e){return e.theme.colors.mainColor},function(e){return e.theme.colors.black});function f(){return(0,d.jsxs)(u,{children:[(0,d.jsx)("h1",{children:"해당 채용공고를 찾을 수 없습니다."}),(0,d.jsxs)(s(),{href:"/",children:[(0,d.jsx)(l.iqr,{}),"메인페이지로 돌아가기"]})]})}var p=n(5675),m=n.n(p),h=n(9499);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function x(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=n(29),y=n(7794),j=n.n(y),v=n(9352),w=n(5945),_=n(8228),k=n(9204),P={MainWork:"주요업무",qualification:"자격조건",preferential:"우대사항"},O=n(9014);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(t){(0,h.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Z=r.ZP.li.withConfig({displayName:"DescriptionItem__List",componentId:"sc-ez19yv-0"})(["padding:0.25rem 0rem;font-size:0.8rem;margin-bottom:0.5rem;line-height:1.5;svg,input{width:0.5rem;margin-right:0.5rem;cursor:pointer;}input{width:0.8rem;}"]);function C(e){var t,n=e.text,r=e.isMainJob,a=e.checked,s=e.kind,l=(0,w.NL)(),u=(0,o.F)(),f=(0,i.useRouter)().query.id,p="string"==typeof f?f:(null==f?void 0:f.join())||"",m=(0,c.a)(["jobs"],function(){return u.getJobs()},{select:function(e){return e[p]}}).data,h=(0,_.D)((t=(0,b.Z)(j().mark(function e(t){return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.updateJob(t));case 1:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),{onSuccess:function(){l.invalidateQueries(["jobs"])},onError:function(e){if(e instanceof k.d7){var t=e.response;t&&console.log(t)}}}).mutate;return(0,d.jsxs)(Z,{children:[r&&(0,d.jsx)(v.o$3,{}),!r&&(0,d.jsx)("input",{type:"checkbox",name:n,checked:a,onChange:function(e){var t,n=e.currentTarget.name;if(m){if(s===P.qualification){var i=x(null==m?void 0:m.qualification).map(function(e){return e.text===n?N(N({},e),{},{checked:!e.checked}):e});t=N(N({},m),{},{qualification:i})}else{var r=x(null==m?void 0:m.preferential).map(function(e){return e.text===n?N(N({},e),{},{checked:!e.checked}):e});t=N(N({},m),{},{preferential:r})}h((0,O.X)(t))}}}),(0,d.jsx)("span",{children:n})]})}var q=r.ZP.ul.withConfig({displayName:"DescriptionList__List",componentId:"sc-y95y36-0"})(["width:100%;padding:1rem;h3{margin-bottom:0.5rem;font-weight:bold;}"]);function J(e){var t=e.list,n=e.kind;return(0,d.jsxs)(q,{children:[(0,d.jsxs)("h3",{children:[n,":"]}),t.map(function(e){return"string"==typeof e?(0,d.jsx)(C,{kind:n,text:e,isMainJob:n===P.MainWork},e):(0,d.jsx)(C,{kind:n,text:e.text,checked:e.checked,isMainJob:n===P.MainWork},e.text)})]})}var D=r.ZP.section.withConfig({displayName:"DetailJob__Wrapper",componentId:"sc-1ontycg-0"})(["max-width:1000px;width:100%;margin-bottom:2rem;"]),L=(0,r.ZP)(m()).withConfig({displayName:"DetailJob__JobImg",componentId:"sc-1ontycg-1"})(["flex:50%;height:auto;@media screen and (max-width:700px){width:100%;}"]),z=r.ZP.div.withConfig({displayName:"DetailJob__TitleBox",componentId:"sc-1ontycg-2"})(["display:flex;justify-content:center;flex:50%;@media screen and (max-width:700px){flex-direction:column;}"]),E=r.ZP.div.withConfig({displayName:"DetailJob__MetaBox",componentId:"sc-1ontycg-3"})(["flex:60%;padding:1rem;h1{text-align:center;font-size:1.6rem;font-weight:bold;color:black;}"]),S=r.ZP.div.withConfig({displayName:"DetailJob__PlatformBox",componentId:"sc-1ontycg-4"})(["margin-top:1rem;display:flex;justify-content:center;align-items:center;margin-right:1rem;h3{font-size:0.9rem;font-weight:bold;margin-right:0.5rem;}img{width:50px;height:35px;margin-right:1rem;}div{padding:0.25rem 0.5rem;background-color:lightblue;margin-right:0.5rem;font-size:0.8rem;border-radius:1rem;}"]),B=r.ZP.div.withConfig({displayName:"DetailJob__PlatformAndTagBox",componentId:"sc-1ontycg-5"})(["display:flex;justify-content:center;align-items:center;"]),M=r.ZP.div.withConfig({displayName:"DetailJob__DescriptionBox",componentId:"sc-1ontycg-6"})(["display:flex;margin-top:1rem;@media screen and (max-width:700px){flex-direction:column;}"]);function W(){var e=(0,i.useRouter)().query,t=(0,o.F)(),n=e.id,r="string"==typeof n?n:(null==n?void 0:n.join())||"",a=(0,c.a)(["jobs"],function(){return t.getJobs()},{select:function(e){return e[r]}}).data;return(0,d.jsx)(D,{children:a&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(z,{children:[(0,d.jsx)(L,{src:null==a?void 0:a.img,alt:"detail_image",height:350,width:400,priority:!0}),(0,d.jsxs)(E,{children:[(0,d.jsx)("h1",{children:null==a?void 0:a.name}),(0,d.jsx)(B,{children:(0,d.jsxs)(S,{children:[(0,d.jsx)("h3",{children:"플랫폼:"}),(0,d.jsx)(m(),{src:"/wanted_logo.png",alt:"logo",height:100,width:100,priority:!0}),(0,d.jsx)("h3",{children:"태그:"}),a.checkPercentage>=.5&&(0,d.jsx)("div",{children:"50%이상"})]})}),(0,d.jsx)(J,{kind:P.MainWork,list:(null==a?void 0:a.mainWork)||[]})]})]}),(0,d.jsxs)(M,{children:[(0,d.jsx)(J,{kind:P.qualification,list:(null==a?void 0:a.qualification)||[]}),(0,d.jsx)(J,{kind:P.preferential,list:(null==a?void 0:a.preferential)||[]})]})]})})}var A=n(1217),F=n(8648),T=n(8445),R=r.ZP.section.withConfig({displayName:"id__JobListBox",componentId:"sc-1jlly0m-0"})(["max-width:1000px;width:100%;"]);function X(){var e=(0,i.useRouter)().query,t=(0,o.F)(),n=e.id,r="string"==typeof n?n:(null==n?void 0:n.join())||"",a=(0,c.a)(["jobs"],function(){return t.getJobs()},{select:function(e){return e[r]}}),s=a.data,l=a.isLoading;return(0,d.jsxs)(F.Z,{children:[(0,d.jsx)(T.Z,{title:s?"상세페이지 | ".concat(s.name):"상세 페이지"}),l&&(0,d.jsx)("p",{children:"로딩중입니다..."}),!l&&!s&&(0,d.jsx)(f,{}),s&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(W,{}),(0,d.jsx)(R,{children:(0,d.jsx)(A.Z,{})})]})]})}},9014:function(e,t,n){"use strict";n.d(t,{X:function(){return a},g:function(){return c}});var i=n(9499);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c=function(e){var t=e.preferential.map(function(e){return{text:e,checked:!1}}),n=e.qualification.map(function(e){return{text:e,checked:!1}});return o(o({},e),{},{preferential:t,qualification:n,checkPercentage:0})},a=function(e){var t=e.preferential,n=e.qualification,i=t.length+n.length,r=t.reduce(function(e,t){return t.checked?e+1:e},0),c=n.reduce(function(e,t){return t.checked?e+1:e},0);return o(o({},e),{},{checkPercentage:(r+c)/i})}},3659:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jobs/[id]",function(){return n(3621)}])}},function(e){e.O(0,[617,228,937,831,781,774,888,179],function(){return e(e.s=3659)}),_N_E=e.O()}]);