(this["webpackJsonpstreamers-campaign"]=this["webpackJsonpstreamers-campaign"]||[]).push([[0],{28:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var c=t(1),r=t(14),a=t(2),i=t(5),s=t(7),o=t(9),b=t(3),u=function(){var n=Object(s.a)(Object(i.a)().mark((function n(){var e;return Object(i.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://webcdn.17app.co/campaign/pretest/data.json");case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:return n.prev=9,n.t0=n.catch(0),n.abrupt("return",[]);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),j=t(18),l=t(6);var p,d,m,O,f,x,h,g,v,w,k,N,y,z,M,L,Y,H,E,A,I,R,B,C,D,S,F,T,q,J,X,Z,G,K,P,Q=function(n){var e=Object(c.useRef)();return Object(c.useEffect)((function(){e.current=n}),[n]),e.current},U=t(0),V=function(n){var e=n.className,t=n.value,r=n.duration,a=void 0===r?500:r,i=Object(c.useRef)(0),s=Object(c.useRef)(null),o=Object(c.useRef)(0),b=Q(t);return Object(c.useEffect)((function(){var n=null;i.current=(new Date).getTime();return n=window.requestAnimationFrame((function e(){var c=(new Date).getTime()-i.current;if(c<a){var r=function(n,e,t,c,r){var a=c+(n-e)*(r-c)/(t-e||1);return a<Math.min(c,r)&&(a=Math.min(c,r)),a>Math.max(c,r)&&(a=Math.max(c,r)),a}(c,0,a,b||0,t);o.current=Math.round(r),n=window.requestAnimationFrame(e)}else o.current=t;s.current&&(s.current.innerHTML="".concat(o.current))})),function(){n&&window.cancelAnimationFrame(n)}}),[t,a,b]),Object(U.jsx)("span",{className:e,ref:s})},W=Object(a.d)(p||(p=Object(b.a)(["\n  0% {\n    opacity: 1;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(20);\n  }\n}\n"]))),$=a.c.div(d||(d=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  right: 15px;\n  opacity: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: ",";\n  transform-origin: center;\n  &.anim {\n    animation: "," 300ms linear;\n  }\n"])),(function(n){return n.theme.second}),W),_=function(n){var e=n.className,t=n.watch,r=Object(c.useState)(!1),a=Object(o.a)(r,2),i=a[0],s=a[1],b=Object(c.useCallback)((function(){s(!1)}),[]);return Object(c.useEffect)((function(){s(!0)}),[t]),Object(U.jsx)($,{onAnimationEnd:b,className:"".concat(e," ").concat(i?"anim":"")})},nn=a.c.div(m||(m=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  border-radius: 0.4em;\n  font-size: 0.9em;\n  color: white;\n  position: relative;\n  overflow: hidden;\n"]))),en=a.c.div(O||(O=Object(b.a)(["\n  padding: 0 0.5em;\n"]))),tn=Object(a.c)(en)(f||(f=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),cn=a.c.p(x||(x=Object(b.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),rn=a.c.p(h||(h=Object(b.a)(["\n  text-align: center;\n  min-width: 30px;\n  font-weight: 800;\n"]))),an=Object(a.c)(cn)(g||(g=Object(b.a)(["\n  margin-left: 5px;\n  text-shadow: 1px 1px 0 black;\n"]))),sn=a.c.div(v||(v=Object(b.a)(["\n  width: 36px;\n  height: 36px;\n  margin: 0.5em;\n  border-radius: 50%;\n  background-size: cover;\n  background-image: url(",");\n"])),(function(n){return n.picture})),on=Object(a.c)(en)(w||(w=Object(b.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0 0.5em;\n  text-shadow: 1px 1px 0 black;\n"]))),bn=Object(a.c)(V)(k||(k=Object(b.a)([""]))),un=a.c.span(N||(N=Object(b.a)(["\n  font-size: 0.9em;\n  font-weight: 400;\n  opacity: 0.8;\n  margin-left: 1px;\n"]))),jn=function(n){var e=n.className,t=n.rank,c=n.picture,r=n.displayName,a=n.score;return Object(U.jsxs)(nn,{className:e,children:[Object(U.jsx)(_,{watch:a}),Object(U.jsxs)(tn,{children:[Object(U.jsx)(rn,{children:t+2}),Object(U.jsx)(sn,{picture:c}),Object(U.jsx)(an,{children:r})]}),Object(U.jsxs)(on,{children:[Object(U.jsx)(bn,{value:a}),Object(U.jsx)(un,{children:"pt"})]})]})},ln=Object(c.memo)(jn),pn=function(n){var e=n.className;return Object(U.jsx)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",children:Object(U.jsx)("path",{d:"M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"})})},dn=function(n){var e=n.className;return Object(U.jsx)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 40",fill:"currentColor",children:Object(U.jsx)("path",{d:"M0 40 L80 40 L60 20 L80 0 L0 0Z"})})},mn=function(n){var e=n.className;return Object(U.jsx)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 80",fill:"currentColor",children:Object(U.jsx)("path",{d:"M0 80 L80 0 L0 0 Z"})})},On=a.c.div(y||(y=Object(b.a)(["\n  position: relative;\n  overflow: hidden;\n  background: ",";\n  border-radius: 0.4em;\n  padding: 1em;\n  margin: 5px auto 3px;\n"])),(function(n){return n.theme.gradient})),fn=a.c.div(z||(z=Object(b.a)(["\n  position: relative;\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50%;\n  border: 4px solid ",";\n  background-size: cover;\n  background-image: url(",");\n  box-shadow: 4px 4px 10px rgba(0, 0, 255, 0.3);\n  z-index: 1;\n"])),(function(n){return n.theme.first}),(function(n){return n.picture})),xn=a.c.div(M||(M=Object(b.a)(["\n  position: relative;\n  margin-bottom: -20px;\n  z-index: 0;\n"]))),hn=a.c.p(L||(L=Object(b.a)(["\n  position: absolute;\n  width: 100%;\n  top: 40%;\n  text-align: center;\n  font-size: 2em;\n  z-index: 2;\n  margin: 0;\n  color: white;\n"]))),gn=Object(a.c)(pn)(Y||(Y=Object(b.a)(["\n  width: 100px;\n  color: ",";\n  opacity: 0.5;\n"])),(function(n){return n.theme.second})),vn=a.c.p(H||(H=Object(b.a)(["\n  position: relative;\n  letter-spacing: 0.1em;\n  font-weight: 800;\n  display: inline-block;\n  text-align: center;\n  color: white;\n  padding: 4px 2em;\n  margin: -1em 0 0.5em;\n  background: rgb(84, 0, 90);\n  text-shadow: 1px 1px 0 black;\n  z-index: 3;\n"]))),wn=a.c.p(E||(E=Object(b.a)(["\n  margin: 0;\n  font-weight: 800;\n  color: white;\n  text-shadow: 1px 1px 0 black;\n"]))),kn=a.c.span(A||(A=Object(b.a)(["\n  font-size: 0.9em;\n  font-weight: 400;\n  opacity: 0.8;\n  margin-left: 1px;\n"]))),Nn=Object(a.c)(mn)(I||(I=Object(b.a)(["\n  position: absolute;\n  z-index: 0;\n  top: 10px;\n  height: 20px;\n  color: rgb(180, 0, 255);\n"]))),yn=Object(a.c)(Nn)(R||(R=Object(b.a)(["\n  transform: scaleX(-1);\n  right: 100%;\n"]))),zn=Object(a.c)(Nn)(B||(B=Object(b.a)(["\n  left: 100%;\n"]))),Mn=Object(a.c)(dn)(C||(C=Object(b.a)(["\n  position: absolute;\n  z-index: 0;\n  top: 15px;\n  height: 20px;\n  color: rgb(150, 0, 180);\n"]))),Ln=Object(a.c)(Mn)(D||(D=Object(b.a)(["\n  transform: scaleX(-1);\n  right: 95%;\n"]))),Yn=Object(a.c)(Mn)(S||(S=Object(b.a)(["\n  left: 95%;\n"]))),Hn=Object(a.c)(_)(F||(F=Object(b.a)(["\n  left: calc(50% - 25px);\n  bottom: 0;\n  && {\n    top: auto;\n  }\n"]))),En=function(n){var e=n.className,t=n.displayName,c=n.score,r=n.picture;return Object(U.jsxs)(On,{className:e,children:[Object(U.jsx)(Hn,{watch:c}),Object(U.jsxs)(xn,{children:[Object(U.jsx)(gn,{}),Object(U.jsx)(hn,{children:"1"})]}),Object(U.jsx)(fn,{picture:r}),Object(U.jsxs)(vn,{children:[t,Object(U.jsx)(yn,{}),Object(U.jsx)(zn,{}),Object(U.jsx)(Ln,{}),Object(U.jsx)(Yn,{})]}),Object(U.jsxs)(wn,{children:[Object(U.jsx)(V,{value:c}),Object(U.jsx)(kn,{children:"pt"})]})]})},An=Object(c.memo)(En),In=a.c.div(q||(q=Object(b.a)(["\n  position: absolute;\n  height: ","px;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: ",";\n  transform-origin: center center;\n  transform: translateY(","px);\n  ","\n"])),(function(n){return n.elemHeight||60}),(function(n){return n.fromY}),(function(n){return n.toY*(n.elemHeight||60)}),(function(n){var e=n.fromY,t=n.toY,c=n.elemHeight;if(e!==t){var r=e*(c||60),i=t*(c||60),s=function(n,e,t){return Object(a.d)(T||(T=Object(b.a)(["\n  0% {\n    transform : translateY(","px);\n  }\n  50% {\n    transform : translateY(","px) scale(",");\n  }\n  100% {\n    transform : translateY(","px);\n  }\n"])),n,t,n<e?.9:1.1,e)}(r,i,(r+i)/2);return Object(a.b)(J||(J=Object(b.a)(["\n        animation: "," 300ms linear forwards;\n      "])),s)}})),Rn=function(n){var e=n.children,t=n.className,c=n.rank,r=void 0===c?0:c,a=n.elemHeight,i=void 0===a?60:a,s=Q(r);return Object(U.jsx)(In,{className:t,fromY:s,toY:r,elemHeight:i,children:e})},Bn=["userID"],Cn=a.c.div(X||(X=Object(b.a)(["\n  margin: 0 10px;\n"]))),Dn=Object(a.c)(ln)(Z||(Z=Object(b.a)(["\n  background: hsl("," ","% 40%);\n"])),(function(n){return 304-10*n.rank}),(function(n){return 90-7*n.rank})),Sn=Object(a.c)(Rn)(G||(G=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Fn=a.c.div(K||(K=Object(b.a)(["\n  position: relative;\n"]))),Tn=function(n){var e=n.streamers;return Object(U.jsxs)(Cn,{children:[Object(U.jsx)(An,Object(l.a)({},e[0])),Object(U.jsx)(Fn,{style:{height:"".concat(60*(e.length-1),"px")},children:e.slice(1,e.length).map((function(n,e){var t=n.userID,c=Object(j.a)(n,Bn);return Object(U.jsx)(Sn,{rank:e,elemHeight:60,children:Object(U.jsx)(Dn,Object(l.a)({rank:e},c))},t)}))})]})},qn=function(n){var e=Math.floor(Math.random()*n.length),t=Math.round(1e3+1e3*Math.random());return n.map((function(n,c){return Object(l.a)(Object(l.a)({},n),{},{score:c===e?n.score+t:n.score})})).sort((function(n,e){return n.score-e.score>0?-1:1}))},Jn=a.c.p(P||(P=Object(b.a)(["\n  background: ",";\n  border-radius: 0.4em;\n  padding: 1em;\n"])),(function(n){return n.theme.gradient}));function Xn(){var n=Object(c.useState)([]),e=Object(o.a)(n,2),t=e[0],r=e[1];return Object(c.useEffect)((function(){var n=function(){var n=Object(s.a)(Object(i.a)().mark((function n(){var e;return Object(i.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u();case 2:e=n.sent,r(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),Object(c.useEffect)((function(){var n=setInterval((function(){r(qn)}),1e3);return function(){clearInterval(n)}}),[]),Object(U.jsx)("div",{className:"App",children:t.length?Object(U.jsx)(Tn,{streamers:t}):Object(U.jsx)(Jn,{children:"No streamers availables."})})}t(28);var Zn=document.getElementById("root");Zn&&Object(r.createRoot)(Zn).render(Object(U.jsx)(c.StrictMode,{children:Object(U.jsx)(a.a,{theme:{first:"rgb(243, 47, 229)",second:"rgb(195, 104, 243)",third:"rgb(118, 154, 233)",gradient:"linear-gradient(to bottom, rgb(255, 173, 173), rgb(243, 47, 229))"},children:Object(U.jsx)(Xn,{})})}))}},[[29,1,2]]]);
//# sourceMappingURL=main.d3fd3bd0.chunk.js.map