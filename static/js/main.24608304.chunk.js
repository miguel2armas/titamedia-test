(this["webpackJsonptitamedia-test"]=this["webpackJsonptitamedia-test"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),i=n.n(o),l=(n(14),n(15),n(16),n(5)),r=n.n(l),s=n(2),d="SIGNIN_USER",g="SIGNOUT_USER",m="THEME_DARK",u="THEME_LIGTH",h=function(){return{type:m,payload:null}},j=function(){return{type:u,payload:null}},b=n(1),O=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.themeState})),n=function(t){var n={googleId:t.profileObj.googleId,name:t.profileObj.name,email:t.profileObj.email,imageUrl:t.profileObj.imageUrl};e({type:d,payload:n})};return Object(b.jsxs)("div",{className:"div-login",children:[Object(b.jsx)("div",{className:"login-div-check-theme",children:Object(b.jsxs)("div",{className:"login-div1-check-theme",children:[Object(b.jsx)("input",{className:"login-check-theme",checked:"dark"===t.theme,type:"checkbox"}),Object(b.jsx)("i",{onClick:function(){"dark"===t.theme?e(j()):e(h())},children:Object(b.jsx)("span",{children:"Dark Mode"})})]})}),Object(b.jsx)("section",{className:"section-login",children:Object(b.jsxs)("div",{className:"div1-login",children:[Object(b.jsx)("h1",{className:"h1-login",children:"Social Network - TITA MEDIA"}),Object(b.jsx)(r.a,{clientId:"341846146220-8g6gupvq3en8g5q0n9u03kg3c5oe898r.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:n,onFailure:n,isSignedIn:!0,cookiePolicy:"single_host_origin"})]})})]})},p=function(){var e=Object(s.b)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.GoogleLogout,{clientId:"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){e({type:g,payload:null})}})})},f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(p,{})})},T=function(){var e=Object(s.c)((function(e){return e.userState}));return Object(b.jsx)(b.Fragment,{children:e.stateLogIn?Object(b.jsx)(f,{}):Object(b.jsx)(O,{})})};var v=function(){return function(e){var t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;null===localStorage.getItem("theme")?t?(localStorage.setItem("theme","dark"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme","dark"),e(h())):(localStorage.setItem("theme","light"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme","light"),e(j())):"dark"===localStorage.getItem("theme")?(document.getElementsByTagName("HTML")[0].setAttribute("data-theme","dark"),e(h())):(document.getElementsByTagName("HTML")[0].setAttribute("data-theme","light"),e(j()))}(Object(s.b)()),Object(b.jsx)("div",{children:Object(b.jsx)(T,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))},I=n(6),k=n(3),S={stateLogIn:!1,googleId:"",name:"",email:"",imageUrl:""},y={theme:"light"},E=Object(I.a)({userState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case d:return a=Object(k.a)(Object(k.a)({},a),{},{stateLogIn:!0}),console.log({payload:a}),a;case g:return S;default:return e}},themeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case m:return localStorage.setItem("theme","dark"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme","dark"),{theme:"dark"};case u:return localStorage.setItem("theme","light"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme","light"),{theme:"light"};default:return e}}}),N=E,L=Object(I.b)(N,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(s.a,{store:L,children:Object(b.jsx)(v,{})})}),document.getElementById("root")),x()}},[[24,1,2]]]);
//# sourceMappingURL=main.24608304.chunk.js.map