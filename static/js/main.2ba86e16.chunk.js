(this["webpackJsonpjphappy-new-year"]=this["webpackJsonpjphappy-new-year"]||[]).push([[0],[,,,,function(e,t,n){e.exports={item:"Wish_item__3DoGd",inner:"Wish_inner__1-Dh0",front:"Wish_front__1__T_",back:"Wish_back__2YPNq"}},,function(e,t,n){e.exports={wishes:"Wishes_wishes__1RaPy",card:"Wishes_card__C35_E"}},function(e,t,n){e.exports={wishForm:"AddWish_wishForm__3I9ji"}},function(e,t,n){e.exports={container:"AutoFontSize_container__1PkjC"}},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(9),i=n(3),r=n(1),o=n.n(r),d=n(0);function l(e,t){return e.id>t.id?-1:e.id<t.id?1:0}var j=o.a.createContext({wishes:[],addWish:function(e){}}),h=function(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),c=n[0],s=n[1];Object(r.useEffect)((function(){fetch("https://react-http-d6323-default-rtdb.firebaseio.com/wishes.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var n in e){var c=Object(a.a)({id:n},e[n]);t.push(c)}s(t)}))}),[]);var o={wishes:c.sort(l),addWish:function(e){console.log("addWish evaluated"),s((function(t){return t.concat(e)}))}};return Object(d.jsx)(j.Provider,{value:o,children:e.children})},u=j,f=(n(15),n(7)),b=n.n(f);var O=["#c90404","#2506c2","#00a811"],x=function(){var e=Object(r.useContext)(u),t=Object(r.useRef)(),n=Object(r.useRef)();return Object(d.jsxs)("form",{onSubmit:function(c){c.preventDefault();var s=t.current.value,a=n.current.value;if(s.length&&a){var i,r=O[(i=3,Math.floor(Math.random()*i))];fetch("https://react-http-d6323-default-rtdb.firebaseio.com/wishes.json",{method:"POST",headers:{ContentType:"application/json"},body:JSON.stringify({name:s,text:a,color:r})}).then((function(e){return e.json()})).then((function(t){e.addWish({id:t.name,name:s,text:a,color:r})}))}else alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u043e\u0431\u0430 \u043f\u043e\u043b\u044f, \u0447\u0451 \u0442\u044b \u043a\u0430\u043a \u044d\u0442\u043e\u0442...")},className:b.a.wishForm,children:[Object(d.jsx)("label",{htmlFor:"name",children:"\u041e\u0442 \u043a\u043e\u0433\u043e "}),Object(d.jsx)("input",{type:"text",id:"name",ref:t}),Object(d.jsx)("label",{htmlFor:"wish",children:"\u041f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0435 "}),Object(d.jsx)("textarea",{id:"wish",rows:"5",ref:n}),Object(d.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},m=n(8),v=n.n(m),p=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useState)(28),a=Object(i.a)(c,2),o=a[0],l=a[1],j=Object(r.useState)(0),h=Object(i.a)(j,2),u=h[0],f=h[1];return Object(r.useEffect)((function(){var e=parseInt(window.getComputedStyle(s.a.findDOMNode(n.current)).getPropertyValue("height"),10);parseInt(window.getComputedStyle(s.a.findDOMNode(t.current)).getPropertyValue("height"),10)>e-20?l((function(e){return e-1})):f(1)}),[o]),Object(d.jsx)("div",{className:v.a.container,ref:n,children:Object(d.jsx)("p",{style:{fontSize:o,opacity:u},ref:t,children:e.children})})},w=n(4),_=n.n(w),N=function(e){return Object(d.jsx)("div",{className:_.a.item,children:Object(d.jsxs)("div",{className:_.a.inner,children:[Object(d.jsx)("div",{className:_.a.front,children:Object(d.jsx)(p,{children:e.text})}),Object(d.jsx)("div",{className:_.a.back,style:{backgroundColor:e.color},children:Object(d.jsx)("span",{children:e.name})})]})})},k=n(6),y=n.n(k),g=function(){var e=Object(r.useContext)(u).wishes.map((function(e){return Object(d.jsx)("div",{className:"col-xl-4 col-lg-6 col-12 ".concat(y.a.card),children:Object(d.jsx)(N,{name:e.name,text:e.text,color:e.color})},e.id)}));return Object(d.jsx)("div",{className:"row ".concat(y.a.wishes),children:e})},W=(n(16),function(e){return Object(d.jsxs)("div",{className:"snowflakes","aria-hidden":"true",children:[Object(d.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(d.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(d.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(d.jsx)("div",{className:"snowflake",children:"\u2744"}),Object(d.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(d.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(d.jsx)("div",{className:"snowflake",children:"\u2744"}),Object(d.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(d.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(d.jsx)("div",{className:"snowflake",children:"\u2744"}),Object(d.jsx)("div",{children:e.children})]})});function S(){return Object(d.jsxs)(W,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(g,{})]})}var C=document.getElementById("root");s.a.render(Object(d.jsx)(h,{children:Object(d.jsx)(S,{})}),C)}],[[17,1,2]]]);
//# sourceMappingURL=main.2ba86e16.chunk.js.map