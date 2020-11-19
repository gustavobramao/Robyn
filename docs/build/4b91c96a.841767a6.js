(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),i=(r(0),r(93)),a=r(95),c={id:"doc4",title:"Ridge Regression"},s={unversionedId:"doc4",id:"doc4",isDocsHomePage:!1,title:"Ridge Regression",description:"In order to address multicollinearity among many regressors and prevent overfitting we apply a regularization technique to reduce variance at the cost of introducing some bias. This approach tends to improve the predictive performance of MMMs. The most common regularization, and the one we are using in this code is Ridge regression. The mathematical notation for Ridge regression is:",source:"@site/docs/doc4.md",permalink:"/Robyn/docs/doc4",editUrl:"https://github.com/facebookexperimental/Robyn/docs/doc4.md",sidebar:"someSidebar",previous:{title:"Step-by-step guide",permalink:"/Robyn/docs/doc12"},next:{title:"Variable Transformations",permalink:"/Robyn/docs/doc5"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null," In order to address multicollinearity among many regressors and prevent overfitting we apply a regularization technique to reduce variance at the cost of introducing some bias. This approach tends to improve the predictive performance of MMMs. The most common regularization, and the one we are using in this code is Ridge regression. The mathematical notation for Ridge regression is:"),Object(i.b)("img",{alt:"Ridge Regression Formula",src:Object(a.a)("img/Ridge.png")}),Object(i.b)("p",null,"Below the code where we execute this part, remember you will find it under the \u2018func.R\u2019 script:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'   #### fit ridge regression with x-validation\n      cvmod <- cv.glmnet(x_train\n                         ,y_train\n                         ,family = "gaussian"\n                         ,alpha = 0 #0 for ridge regression\n                         ,lambda = lambda_seq\n                         ,lower.limits = lower.limits\n                         ,upper.limits = upper.limits\n                         ,type.measure = "mse"\n                         #,nlambda = 100\n                         #,intercept = FALSE\n      )\n')))}p.isMDXComponent=!0},93:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";var n=r(0),o=r(21);t.a=function(){const e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},95:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(94),o=r(97);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const a=!r.startsWith(t)?t+r.replace(/^\//,""):r;return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},97:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);