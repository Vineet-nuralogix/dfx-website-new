"use strict";(self.webpackChunkdfx_website=self.webpackChunkdfx_website||[]).push([[2267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),b=o,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4780:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294);const o={subBtn:"subBtn_We1y",subMessage:"subMessage_aX6D",subSection:"subSection_TaaP",subContent:"subContent_PUnr",subSectionHide:"subSectionHide_lK9z",closeButton:"closeButton_PJmg",closeButtonHide:"closeButtonHide_Ccn6",fadeIn:"fadeIn_mk0G"};var a=n(2389);function s(){const e=(0,a.Z)(),[t,n]=(0,r.useState)("false"),s=e?Date.now()-localStorage.getItem("popState"):"fetching time...";return r.createElement("div",null,s>864e5==!0&&r.createElement("div",{className:t?o.subSection:o.subSectionHide},r.createElement("div",{className:o.subContent},r.createElement("img",{className:t?o.closeButton:o.closeButtonHide,onClick:()=>{n(!t),localStorage.setItem("popState",Date.now())},src:"/dfx-website-new/img/close.png"}),r.createElement("div",{className:o.subMessage},r.createElement("b",null,"Email Subscriptions are here!"),r.createElement("br",null),"Get notified in your email when a new post is published to this blog"),r.createElement("a",{href:"https://cdn.forms-content.sg-form.com/dea9abd5-4128-11ee-8da8-5eb23d8ff74c",target:"_blank"},r.createElement("button",{className:o.subBtn},"Subscribe ")))))}function l(){return r.createElement("div",null,r.createElement(s,null))}},8642:(e,t,n)=>{n.r(t),n.d(t,{Banner:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),a=n(4780);const s={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["rajas"],tags:["docusaurus"]},l=void 0,c={permalink:"/dfx-website-new/blog/mdx-blog-post",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"MDX Blog Post",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"docusaurus",permalink:"/dfx-website-new/blog/tags/docusaurus"}],readingTime:.28,hasTruncateMarker:!1,authors:[{name:"Rajas Sambhare",title:"Manager - Application Development",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"rajas"}],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",authors:["rajas"],tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/dfx-website-new/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/dfx-website-new/blog/long-blog-post"}},i={authorsImageUrls:[void 0]},u=[],p=()=>(0,o.kt)("main",null,(0,o.kt)(a.Z,{mdxType:"SubscribeBanner"})),m={toc:u,Banner:p},b="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"Banner"}),(0,o.kt)("p",null,"Blog posts support ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,o.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}d.isMDXComponent=!0}}]);