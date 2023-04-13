"use strict";(self.webpackChunkdfx_website=self.webpackChunkdfx_website||[]).push([[8715],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>p});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(i),f=o,p=d["".concat(l,".").concat(f)]||d[f]||h[f]||a;return i?n.createElement(p,s(s({ref:t},u),{},{components:i})):n.createElement(p,s({ref:t},u))}));function p(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,s=new Array(a);s[0]=f;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},8278:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=i(7462),o=(i(7294),i(3905));const a={},s="DFX Cloud API FAQ",r={unversionedId:"faq/dfx_cloud_faq",id:"faq/dfx_cloud_faq",title:"DFX Cloud API FAQ",description:"What is DFX Cloud API?",source:"@site/docs/faq/2_dfx_cloud_faq.md",sourceDirName:"faq",slug:"/faq/dfx_cloud_faq",permalink:"/dfx-website-new/docs/faq/dfx_cloud_faq",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/2_dfx_cloud_faq.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"faqSidebar",previous:{title:"Anura FAQ",permalink:"/dfx-website-new/docs/faq/anura_faq"},next:{title:"WMS FAQ",permalink:"/dfx-website-new/docs/faq/wms_faq"}},l={},c=[{value:"What is DFX Cloud API?",id:"what-is-dfx-cloud-api",level:3},{value:"What is an Organization on DFX?",id:"what-is-an-organization-on-dfx",level:3},{value:"What is a DFX license  key and why do I need it?",id:"what-is-a-dfx-license--key-and-why-do-i-need-it",level:3},{value:"What is meant by tokens while using DFX service?",id:"what-is-meant-by-tokens-while-using-dfx-service",level:3},{value:"What is a device token?",id:"what-is-a-device-token",level:3},{value:"What is a user token?",id:"what-is-a-user-token",level:3},{value:"Is user token mandatory?",id:"is-user-token-mandatory",level:3},{value:"Can I access  DFX Cloud API through WebSockets?",id:"can-i-access--dfx-cloud-api-through-websockets",level:3},{value:"Can a user have multiple profiles?",id:"can-a-user-have-multiple-profiles",level:3},{value:"Is it possible to carry out anonymous measurements?",id:"is-it-possible-to-carry-out-anonymous-measurements",level:3},{value:"What is a study configuration data?",id:"what-is-a-study-configuration-data",level:3},{value:"What are the different endpoints related to studies and study management?",id:"what-are-the-different-endpoints-related-to-studies-and-study-management",level:3},{value:"Can I get a history of the measurements done through a device?",id:"can-i-get-a-history-of-the-measurements-done-through-a-device",level:3},{value:"What are the different statuses possible for a measurement?",id:"what-are-the-different-statuses-possible-for-a-measurement",level:3},{value:"Can I receive real-time results for a measurement?",id:"can-i-receive-real-time-results-for-a-measurement",level:3},{value:"What is the request structure for a WebSocket request?",id:"what-is-the-request-structure-for-a-websocket-request",level:3},{value:"Please explain the License API registration flow?",id:"please-explain-the-license-api-registration-flow",level:3},{value:"What is One-Time Refresh Token (OTRT)?",id:"what-is-one-time-refresh-token-otrt",level:3},{value:"How can I start using the DFX Cloud API?",id:"how-can-i-start-using-the-dfx-cloud-api",level:3},{value:"How can I obtain a device token?",id:"how-can-i-obtain-a-device-token",level:3},{value:"How do I register a device to carry out the measurements?",id:"how-do-i-register-a-device-to-carry-out-the-measurements",level:3},{value:"How many devices can I register for measurement through my license?",id:"how-many-devices-can-i-register-for-measurement-through-my-license",level:3},{value:"How can I check the number of devices registered through my license?",id:"how-can-i-check-the-number-of-devices-registered-through-my-license",level:3},{value:"How can I unregister a device?",id:"how-can-i-unregister-a-device",level:3},{value:"How can I re-register a device?",id:"how-can-i-re-register-a-device",level:3},{value:"How can I know about the latest updates to the DFX Cloud API?",id:"how-can-i-know-about-the-latest-updates-to-the-dfx-cloud-api",level:3},{value:"Can a device token get expired? How can I ensure that a token is still valid?",id:"can-a-device-token-get-expired-how-can-i-ensure-that-a-token-is-still-valid",level:3},{value:"How to logout a user which is logged in?",id:"how-to-logout-a-user-which-is-logged-in",level:3},{value:"How can I decode real-time results?",id:"how-can-i-decode-real-time-results",level:3},{value:"How can I send data to the cloud after subscribing to the results?",id:"how-can-i-send-data-to-the-cloud-after-subscribing-to-the-results",level:3},{value:"Where can I find about the different endpoints for the DFX Cloud API?",id:"where-can-i-find-about-the-different-endpoints-for-the-dfx-cloud-api",level:3},{value:"Where can I find my DFX license key?",id:"where-can-i-find-my-dfx-license-key",level:3},{value:"Where can I find the device token for a registered device?",id:"where-can-i-find-the-device-token-for-a-registered-device",level:3},{value:"What are the allowed REST HTTP request methods?",id:"what-are-the-allowed-rest-http-request-methods",level:3},{value:"Which ports should I use for API requests?",id:"which-ports-should-i-use-for-api-requests",level:3},{value:"Where can I check the validity of my license key?",id:"where-can-i-check-the-validity-of-my-license-key",level:3},{value:"Why my API requests to register the DFX license from a device keep failing?",id:"why-my-api-requests-to-register-the-dfx-license-from-a-device-keep-failing",level:3},{value:"Why I am getting \u201cINCORRECT_REQUEST\u201c for a WebSocket request?",id:"why-i-am-getting-incorrect_request-for-a-websocket-request",level:3}],u={toc:c},d="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dfx-cloud-api-faq"},"DFX Cloud API FAQ"),(0,o.kt)("h3",{id:"what-is-dfx-cloud-api"},"What is DFX Cloud API?"),(0,o.kt)("p",null,"The DFX Cloud API enables customers to communicate with our DFX cloud service. It allows them to programmatically access and manage their organization\u2019s DeepAffex\u2122 account data and results."),(0,o.kt)("p",null,"The DFX Cloud API is published as a reference specification (documentation) describing the programmatic interfaces (or endpoints) that are provided by the DeepAffex\u2122 cloud engine."),(0,o.kt)("p",null,"These network endpoints allow a remote client (program) to invoke and access all DeepAffex\u2122 micro-services and features."),(0,o.kt)("p",null,"The DFX Cloud API allows the use of REST for synchronous (blocking) transactions as well as Web-socket protocols for asynchronous (non-blocking) communications."),(0,o.kt)("h3",{id:"what-is-an-organization-on-dfx"},"What is an Organization on DFX?"),(0,o.kt)("p",null,'In the DeepAffex\u2122 Cloud\'s business-to-business services model, the Organization is the partitioning "silo" that gets created and licensed by a business.'),(0,o.kt)("p",null,"All measurements, results, raw data etc. that are created under an Organization are secure and isolated from other Organizations. Only NuraLogix\u2122 can create Organizations."),(0,o.kt)("h3",{id:"what-is-a-dfx-license--key-and-why-do-i-need-it"},"What is a DFX license  key and why do I need it?"),(0,o.kt)("p",null,"The use of the DFX network API is restricted to customers holding a valid DeepAffex\u2122 license. The DFX license key permits a specified quantity (as licensed) of client devices to communicate with the DFX API for a specified duration (as licensed) while accessing a specified ORGANIZATION (as licensed)."),(0,o.kt)("h3",{id:"what-is-meant-by-tokens-while-using-dfx-service"},"What is meant by tokens while using DFX service?"),(0,o.kt)("p",null,"Authentication on the DeepAffex\u2122 Cloud uses JSON Web Tokens. "),(0,o.kt)("p",null,"Please check out the Tokens section in our developer guider."),(0,o.kt)("h3",{id:"what-is-a-device-token"},"What is a device token?"),(0,o.kt)("p",null,"A device token usually represents a single device. A device token provides access to endpoints that allow for device-specific features e.g. making measurements."),(0,o.kt)("p",null,"Please check out the Tokens section in our developer guider for more information."),(0,o.kt)("h3",{id:"what-is-a-user-token"},"What is a user token?"),(0,o.kt)("p",null,"A user token provides access to most non-measurement related endpoints. To obtain a user token, login as a user using the Users.Login endpoint."),(0,o.kt)("p",null,"Please check out the Tokens section in our developer guider for more information."),(0,o.kt)("h3",{id:"is-user-token-mandatory"},"Is user token mandatory?"),(0,o.kt)("p",null,"The response to Organizations.RegisterLicense contains a RoleID for the license - if it is SDK_DEVICE, then obtaining a user token is mandatory."),(0,o.kt)("p",null,"Please check out the More details and best practices section in our docs."),(0,o.kt)("h3",{id:"can-i-access--dfx-cloud-api-through-websockets"},"Can I access  DFX Cloud API through WebSockets?"),(0,o.kt)("p",null,"Yes. We recommend using the WebSocket API for platforms where real-time results are required."),(0,o.kt)("p",null,"Please check out the WebSockets section in our developer guider for more information."),(0,o.kt)("h3",{id:"can-a-user-have-multiple-profiles"},"Can a user have multiple profiles?"),(0,o.kt)("p",null,"Yes. Please check out the Profiles section in our docs to get information about multiple profiles."),(0,o.kt)("h3",{id:"is-it-possible-to-carry-out-anonymous-measurements"},"Is it possible to carry out anonymous measurements?"),(0,o.kt)("p",null,"Yes. Please check out the Anonymous Measurements section in our developer guider."),(0,o.kt)("h3",{id:"what-is-a-study-configuration-data"},"What is a study configuration data?"),(0,o.kt)("p",null,"Please check out the Study Configuration Data section in our developer guide."),(0,o.kt)("h3",{id:"what-are-the-different-endpoints-related-to-studies-and-study-management"},"What are the different endpoints related to studies and study management?"),(0,o.kt)("p",null,"Please check out the Studies section in our developer guide."),(0,o.kt)("h3",{id:"can-i-get-a-history-of-the-measurements-done-through-a-device"},"Can I get a history of the measurements done through a device?"),(0,o.kt)("p",null,"A history of the measurements made by a device, user or profile is available on the DeepAffex\u2122 Cloud. You can retrieve this history by using the Measurements.List endpoint."),(0,o.kt)("p",null,"Please check out the Historical results section in our developer guide."),(0,o.kt)("h3",{id:"what-are-the-different-statuses-possible-for-a-measurement"},"What are the different statuses possible for a measurement?"),(0,o.kt)("p",null,"A measurement can have one of the following statuses: CAPTURING, PROCESSING, COMPLETE, ERROR and INCOMPLETE"),(0,o.kt)("p",null,"Please check out the Measurements section in our developer guide."),(0,o.kt)("h3",{id:"can-i-receive-real-time-results-for-a-measurement"},"Can I receive real-time results for a measurement?"),(0,o.kt)("p",null,"In order to receive real-time results, you will need to use the Measurements.Subscribe endpoint. This is a WebSocket only endpoint. "),(0,o.kt)("p",null,"Please check out the Subscribing to results section in our developer guide."),(0,o.kt)("h3",{id:"what-is-the-request-structure-for-a-websocket-request"},"What is the request structure for a WebSocket request?"),(0,o.kt)("p",null,"Please check out the Request structure section in our developer guide."),(0,o.kt)("h3",{id:"please-explain-the-license-api-registration-flow"},"Please explain the License API registration flow?"),(0,o.kt)("p",null,"The DFX license key permits a specified quantity (as licensed) of client devices to communicate with the DFX API for a specified duration (as licensed) while accessing a specified ORGANIZATION (as licensed)."),(0,o.kt)("p",null,"Every physical device (handset, desktop, laptop) that requires client communication with DFX must first register with the API to receive a unique device \u2018token\u2019."),(0,o.kt)("p",null,"The client software submits the DFX license key to the API to request registration of a device."),(0,o.kt)("p",null,"The API responds by issuing a valid device \u2018token\u2019 to the client software. The client software should save this device \u2018token\u2019 (persistent storage or cache) and submit the device \u2018token\u2019 with subsequent API transactions."),(0,o.kt)("p",null,"Each device registered causes the available device count balance to decrement (-1/device) from the original licensed count, until all devices have been assigned."),(0,o.kt)("p",null,"At any time devices that are no longer required may be \u2018unregistered\u2019 with the API in order to reclaim and increment (+1/device) the remaining device balance count."),(0,o.kt)("h3",{id:"what-is-one-time-refresh-token-otrt"},"What is One-Time Refresh Token (OTRT)?"),(0,o.kt)("p",null,"One-Time Refresh Token (OTRT) has been introduced to improve token security. "),(0,o.kt)("p",null,"How to FAQ"),(0,o.kt)("h3",{id:"how-can-i-start-using-the-dfx-cloud-api"},"How can I start using the DFX Cloud API?"),(0,o.kt)("p",null,"Please check out this Getting started with the cloud API page."),(0,o.kt)("h3",{id:"how-can-i-obtain-a-device-token"},"How can I obtain a device token?"),(0,o.kt)("p",null,"To obtain a device token for the device in use, register your organizations License Key on the DeepAffex\u2122 Cloud using the Organizations.RegisterLicense endpoint."),(0,o.kt)("p",null,"Please check out the Tokens section in our developer guider for more information."),(0,o.kt)("h3",{id:"how-do-i-register-a-device-to-carry-out-the-measurements"},"How do I register a device to carry out the measurements?"),(0,o.kt)("p",null,"To register a device you need to obtain a device token. A device token usually represents a single device. It  provides access to endpoints that allow for device-specific features e.g. making measurements. To obtain a device token for the device in use, register your organization license on the DeepAffex\u2122 Cloud. "),(0,o.kt)("p",null,"Please check out the  Register endpoint on DeepAffex\u2122 Cloud API Reference for more details. "),(0,o.kt)("h3",{id:"how-many-devices-can-i-register-for-measurement-through-my-license"},"How many devices can I register for measurement through my license?"),(0,o.kt)("p",null,"The number of devices are mapped to your license."),(0,o.kt)("p",null,"You can check the maximum number of devices as well as the count of registered devices in your DFX dashboard. Click on the licenses option in the left navigation bar. The counts can be seen under the \u201cDEVICE REGISTRATIONS\u201c heading. "),(0,o.kt)("h3",{id:"how-can-i-check-the-number-of-devices-registered-through-my-license"},"How can I check the number of devices registered through my license?"),(0,o.kt)("p",null,"You can check the maximum number of devices as well as the count of registered devices in your DFX dashboard. Click on the licenses option in the left navigation bar. The counts can be seen under the \u201cDEVICE REGISTRATIONS\u201c heading. "),(0,o.kt)("h3",{id:"how-can-i-unregister-a-device"},"How can I unregister a device?"),(0,o.kt)("p",null,"Some License Keys have a limited number of allowed active Devices. If you need to use your License on a different device, make sure to unregister your current device first by calling the Organizations.UnregisterLicense endpoint."),(0,o.kt)("h3",{id:"how-can-i-re-register-a-device"},"How can I re-register a device?"),(0,o.kt)("p",null,"To ensure that a token is valid, you can call the Verify Token endpoint. If it is not valid then you may register the device again following the normal registration process."),(0,o.kt)("p",null,"Please check out the  Register endpoint on DeepAffex\u2122 Cloud API Reference for more details. "),(0,o.kt)("h3",{id:"how-can-i-know-about-the-latest-updates-to-the-dfx-cloud-api"},"How can I know about the latest updates to the DFX Cloud API?"),(0,o.kt)("p",null,"Please check out our release notes to know about the latest updates."),(0,o.kt)("h3",{id:"can-a-device-token-get-expired-how-can-i-ensure-that-a-token-is-still-valid"},"Can a device token get expired? How can I ensure that a token is still valid?"),(0,o.kt)("p",null,"Device tokens may expire. To ensure that a token is valid, you can call the   Verify Token endpoint endpoint. If the ActiveLicense field in the response is false or if the API returns one of the following errors: INVALID_TOKEN, LICENSE_EXPIRED, INACTIVE_LICENSE or INACTIVE_DEVICE, then the client must re-register the license."),(0,o.kt)("p",null,"Please check out the  Register License endpoint on DeepAffex\u2122 Cloud API Reference for more details. "),(0,o.kt)("h3",{id:"how-to-logout-a-user-which-is-logged-in"},"How to logout a user which is logged in?"),(0,o.kt)("p",null,"Please checkout the User Logout section in our docs."),(0,o.kt)("h3",{id:"how-can-i-decode-real-time-results"},"How can I decode real-time results?"),(0,o.kt)("p",null,"Please check out the Decoding real-time results section in our developer guide."),(0,o.kt)("h3",{id:"how-can-i-send-data-to-the-cloud-after-subscribing-to-the-results"},"How can I send data to the cloud after subscribing to the results?"),(0,o.kt)("p",null,"Please check out the Adding data section in our developer guide."),(0,o.kt)("p",null,"When, where, why and other FAQ"),(0,o.kt)("h3",{id:"where-can-i-find-about-the-different-endpoints-for-the-dfx-cloud-api"},"Where can I find about the different endpoints for the DFX Cloud API?"),(0,o.kt)("p",null,"The API is canonically documented on the DeepAffex\u2122 API Apiary."),(0,o.kt)("h3",{id:"where-can-i-find-my-dfx-license-key"},"Where can I find my DFX license key?"),(0,o.kt)("p",null,"You can find your DFX license key in your DFX dashboard under the licenses option."),(0,o.kt)("h3",{id:"where-can-i-find-the-device-token-for-a-registered-device"},"Where can I find the device token for a registered device?"),(0,o.kt)("p",null,"To obtain a device token for the device in use, register your organizations License Key on the DeepAffex\u2122 Cloud using the  Organizations.RegisterLicense endpoint."),(0,o.kt)("p",null,"After obtaining the device token, you will need to manage it securely."),(0,o.kt)("h3",{id:"what-are-the-allowed-rest-http-request-methods"},"What are the allowed REST HTTP request methods?"),(0,o.kt)("p",null,"Please check out the this section on  DeepAffex\u2122 Cloud API Reference."),(0,o.kt)("h3",{id:"which-ports-should-i-use-for-api-requests"},"Which ports should I use for API requests?"),(0,o.kt)("p",null,"Please check out the port addresses section on  DeepAffex\u2122 Cloud API Reference."),(0,o.kt)("h3",{id:"where-can-i-check-the-validity-of-my-license-key"},"Where can I check the validity of my license key?"),(0,o.kt)("p",null,"You can check the validity of your DFX license key in your DFX dashboard. Click on the licenses option in the left navigation bar. The validity can be seen under the expiration heading. "),(0,o.kt)("p",null,"Troubleshooting FAQ"),(0,o.kt)("h3",{id:"why-my-api-requests-to-register-the-dfx-license-from-a-device-keep-failing"},"Why my API requests to register the DFX license from a device keep failing?"),(0,o.kt)("p",null,"One possibility is that you have exhausted your count (quantity) of licensed devices."),(0,o.kt)("p",null,"Every physical device (handset, desktop, laptop) that requires client communication with DFX must first register with the API to receive a unique device \u2018token\u2019. The maximum number of devices that are permitted to connect with DFX is controlled by your license-key."),(0,o.kt)("p",null,"You can make requests to the API to \u2018unregister\u2019 any/all currently registered device \u2018tokens\u2019 and reclaim device balance."),(0,o.kt)("h3",{id:"why-i-am-getting-incorrect_request-for-a-websocket-request"},"Why I am getting \u201cINCORRECT_REQUEST\u201c for a WebSocket request?"),(0,o.kt)("p",null,"Requests that do not abide by the prescribed Request structure are not processed and a response with the following body is returned: "),(0,o.kt)("p",null,"{"),(0,o.kt)("p",null,'Code: "INCORRECT_REQUEST"'),(0,o.kt)("p",null," }"))}h.isMDXComponent=!0}}]);