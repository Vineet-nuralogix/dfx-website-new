"use strict";(self.webpackChunkdfx_website=self.webpackChunkdfx_website||[]).push([[550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4780:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const o={subBtn:"subBtn_We1y",subMessage:"subMessage_aX6D",subSection:"subSection_TaaP",subContent:"subContent_PUnr",subSectionHide:"subSectionHide_lK9z",closeButton:"closeButton_PJmg",closeButtonHide:"closeButtonHide_Ccn6",fadeIn:"fadeIn_mk0G"};var r=n(2389);function i(){const e=(0,r.Z)(),[t,n]=(0,a.useState)("false"),i=e?Date.now()-localStorage.getItem("popState"):"fetching time...";return a.createElement("div",null,i>864e5==!0&&a.createElement("div",{className:t?o.subSection:o.subSectionHide},a.createElement("div",{className:o.subContent},a.createElement("img",{className:t?o.closeButton:o.closeButtonHide,onClick:()=>{n(!t),localStorage.setItem("popState",Date.now())},src:"/img/close.png"}),a.createElement("div",{className:o.subMessage},a.createElement("b",null,"Email Subscriptions are here!"),a.createElement("br",null),"Get notified in your email when a new post is published to this blog"),a.createElement("a",{href:"https://cdn.forms-content.sg-form.com/dea9abd5-4128-11ee-8da8-5eb23d8ff74c",target:"_blank"},a.createElement("button",{className:o.subBtn},"Subscribe ")))))}function l(){return a.createElement("div",null,a.createElement(i,null))}},14:(e,t,n)=>{n.r(t),n.d(t,{Banner:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(4780);const i={slug:"first-blog-post",title:"Welcome",authors:"vineet",tags:["deepaffex","blog"]},l=void 0,s={permalink:"/dfx-website-new/blog/first-blog-post",source:"@site/blog/2023-12-01-first-blog-post.md",title:"Welcome",description:"Welcome to the DeepAffex\u2019s official blog. We are thrilled to have you join us",date:"2023-12-01T00:00:00.000Z",formattedDate:"December 1, 2023",tags:[{label:"deepaffex",permalink:"/dfx-website-new/blog/tags/deepaffex"},{label:"blog",permalink:"/dfx-website-new/blog/tags/blog"}],readingTime:2.485,hasTruncateMarker:!1,authors:[{name:"Vineet Puri",title:"Software Product Engineer",url:"https://github.com/Vineet-nuralogix",imageURL:"https://github.com/Vineet-nuralogix.png",key:"vineet"}],frontMatter:{slug:"first-blog-post",title:"Welcome",authors:"vineet",tags:["deepaffex","blog"]}},c={authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Talk About:",id:"what-well-talk-about",level:2},{value:"Why Subscribe:",id:"why-subscribe",level:2}],p=()=>(0,o.kt)("main",null,(0,o.kt)(r.Z,{mdxType:"SubscribeBanner"})),h={toc:u,Banner:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"Banner"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Welcome to the ",(0,o.kt)("strong",{parentName:"p"},"DeepAffex\u2019s")," official blog. We are thrilled to have you join us\non this journey as we explore the fascinating intersection of technology and\nhealthcare, and how it is transforming the way we monitor and understand our\nwell-being."),(0,o.kt)("p",null,"In today's rapidly evolving world, technology plays an increasingly vital role in\nour lives, and healthcare is no exception. The convergence of artificial intelligence,\ncomputer vision, and healthcare has given rise to revolutionary solutions that\nwere once the stuff of science fiction. At ",(0,o.kt)("strong",{parentName:"p"},"NuraLogix"),", we are at the forefront\nof this revolution, and we are excited to share our insights, discoveries, and\ninnovations with you through this blog."),(0,o.kt)("h2",{id:"what-well-talk-about"},"What We'll Talk About:"),(0,o.kt)("p",null,"Our blog will be a hub of knowledge and exploration, where we'll delve into various\nfacets of our groundbreaking technology, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Important updates:")," We will discuss any important upcoming updates that we\nplan to release or any information that we feel can be helpful to our users.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Video-Based Health Assessment:")," We will explain the core principles and\nintricacies of our technology, how it works, and its immense potential to predict\nhuman health parameters using nothing but a video of your face.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The Science Behind It:")," Dive into the science that power our system. We'll\nbreak down complex concepts into digestible insights, making it accessible to\nall.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Real-World Applications:")," Discover how video-based health assessment is being\napplied across diverse sectors, from healthcare facilities to fitness centers\nand beyond. Explore the real-life impact and stories of individuals whose lives\nhave been transformed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Privacy and Ethical Considerations:")," We take your privacy seriously. Learn\nabout the measures we have in place to ensure data security and the ethical\nconsiderations that guide our technology development.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Health & Wellness Insights:")," Stay updated with the latest advancements in\nhealth monitoring and wellness tracking. We'll share expert advice and tips on\nhow to use technology to live a healthier life.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Industry Trends:")," Get a pulse on the ever-evolving landscape of healthcare\ntechnology. We'll keep you informed about the latest trends, breakthroughs,\nand innovations."))),(0,o.kt)("h2",{id:"why-subscribe"},"Why Subscribe:"),(0,o.kt)("p",null,"By subscribing to our blog, you will be notified whenever we will publish a new\nblog post. Moreover, you'll become part of a thriving community passionate about\nhealth technology and innovation."),(0,o.kt)("p",null,"So, whether you're a healthcare professional, a tech enthusiast, or simply someone\ncurious about the future of healthcare, we invite you to embark on this exciting\njourney with us. Together, we'll explore the limitless possibilities that video-based\nhealth assessment technology offers."),(0,o.kt)("p",null,"Stay tuned for our upcoming articles and be part of the conversation that is shaping\nthe future of healthcare. Subscribe today, and let's take a step into the future\nof health and wellness, one blog post at a time."),(0,o.kt)("p",null,"Thank you for visiting us, and we can't wait to share this exciting journey with\nyou!"))}m.isMDXComponent=!0}}]);