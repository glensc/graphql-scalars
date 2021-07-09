(self.webpackChunk_graphql_scalars_website=self.webpackChunk_graphql_scalars_website||[]).push([[2583],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8294:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s=["components"],o={id:"safe-int",title:"SafeInt",sidebar_label:"SafeInt"},l=void 0,c={unversionedId:"scalars/safe-int",id:"scalars/safe-int",isDocsHomePage:!1,title:"SafeInt",description:'This scalar behaves just like the native GraphQLInt scalar, but it allows integers that require more than 32-bits. Any integer that is considered "safe" in JavaScript (i.e. \xb1 9,007,199,254,740,991) is considered a valid value. But if you need more than 52-bits, you should use BigInt.',source:"@site/docs/scalars/safe-int.md",sourceDirName:"scalars",slug:"/scalars/safe-int",permalink:"/docs/scalars/safe-int",editUrl:"https://github.com/urigo/graphql-scalars/edit/master/website/docs/scalars/safe-int.md",version:"current",frontMatter:{id:"safe-int",title:"SafeInt",sidebar_label:"SafeInt"},sidebar:"sidebar",previous:{title:"RGBA",permalink:"/docs/scalars/rgba"},next:{title:"Time",permalink:"/docs/scalars/time"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This scalar behaves just like the native ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLInt"),' scalar, but it allows integers that require more than 32-bits. Any integer that is considered "safe" in JavaScript (i.e. \xb1 9,007,199,254,740,991) is considered a valid value. But if you need more than 52-bits, you should use ',(0,i.kt)("inlineCode",{parentName:"p"},"BigInt"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/graphql/#sec-Int"},"GraphQL spec")," limits its Int type to 32-bits. Maybe you've seen this error before:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-js/issues/292"},"Issue on graphql-js")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stems/graphql-bigint"},"graphql-bigint"),". Even though ",(0,i.kt)("inlineCode",{parentName:"p"},"stems"),"'s implementation looks like the same with ",(0,i.kt)("inlineCode",{parentName:"p"},"BigInt")," scalar, it is different because our ",(0,i.kt)("inlineCode",{parentName:"p"},"BigInt")," implementation uses JavaScript's native ",(0,i.kt)("inlineCode",{parentName:"p"},"BigInt")," type while ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeInt")," implementation doesn't support more than 52-bit integers.")))}f.isMDXComponent=!0}}]);