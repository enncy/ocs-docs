"use strict";(self.webpackChunkocs_docs=self.webpackChunkocs_docs||[]).push([[514,204],{9963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ie});var a=n(7294),l=n(6010),r=n(1944),c=n(5281),o=n(3320),i=n(2802),s=n(4477),d=n(1116),m=n(3285),u=n(5999),b=n(2466),p=n(5936);const E="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function v(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:c,cancelScroll:o}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const c=n?.scrollY;c&&(r.current?r.current=!1:a>=c?(o(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>c(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",c.k.common.backToTopButton,E,e&&h),type:"button",onClick:t})}var f=n(6550),_=n(7524),g=n(6668),k=n(1327),C=n(7462);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S="collapseSidebarButton_PEFL",N="collapseSidebarButtonIcon_kv0_";function Z(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",S),onClick:t},a.createElement(I,{className:N}))}var x=n(9689),y=n(902);const T=Symbol("EmptyContext"),L=a.createContext(T);function M(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(L.Provider,{value:r},t)}var w=n(6043),A=n(8596),B=n(9960),H=n(2389);function F(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:r,level:o,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:E}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,g.L)(),v=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),f=(0,i._F)(t,r),_=(0,A.Mg)(E,r),{collapsed:k,setCollapsed:I}=(0,w.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(L);if(e===T)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!k),N(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,y.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:f,collapsed:k,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&h&&I(!0)}),[b,S,s,I,h]),a.createElement("li",{className:(0,l.Z)(c.k.docs.docSidebarItemCategory,c.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(B.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!E&&b,"menu__link--active":f}),onClick:b?e=>{n?.(t),E?Z(!1):(e.preventDefault(),Z())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!k:void 0,href:b?v??"#":v},d),u),E&&b&&a.createElement(F,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(j,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:r,level:o+1})))}var D=n(3919),W=n(9471);const R="menuExternalLink_NmtK";function z(e){let{item:t,onItemClick:n,activePath:r,level:o,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,E=(0,i._F)(t,r),h=(0,D.Z)(m);return a.createElement("li",{className:(0,l.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",b),key:u},a.createElement(B.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!h&&R,{"menu__link--active":E}),autoAddBaseUrl:p,"aria-current":E?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(W.Z,null)))}const U="menuHtmlItem_M9Kj";function V(e){let{item:t,level:n,index:r}=e;const{value:o,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(n),i&&[U,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:o}})}function K(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,C.Z)({item:t},n));case"html":return a.createElement(V,(0,C.Z)({item:t},n));default:return a.createElement(z,(0,C.Z)({item:t},n))}}function O(e){let{items:t,...n}=e;return a.createElement(M,null,t.map(((e,t)=>a.createElement(K,(0,C.Z)({key:t,item:e,index:t},n)))))}const j=(0,a.memo)(O),q="menu_SIkG",G="menuWithAnnouncementBar_GW3s";function Y(e){let{path:t,sidebar:n,className:r}=e;const o=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",q,o&&G,r)},a.createElement("ul",{className:(0,l.Z)(c.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}const X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:r,isHidden:c}=e;const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:i}}}=(0,g.L)();return a.createElement("div",{className:(0,l.Z)(X,o&&J,c&&Q)},o&&a.createElement(k.Z,{tabIndex:-1,className:$}),a.createElement(Y,{path:t,sidebar:n}),i&&a.createElement(Z,{onClick:r}))}const te=a.memo(ee);var ne=n(3102),ae=n(2961);const le=e=>{let{sidebar:t,path:n}=e;const r=(0,ae.e)();return a.createElement("ul",{className:(0,l.Z)(c.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return a.createElement(ne.Zo,{component:le,props:e})}const ce=a.memo(re);function oe(e){const t=(0,_.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),l&&a.createElement(ce,e))}const ie="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ie,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:se}))}const me="docSidebarContainer_b6E3",ue="docSidebarContainerHidden_b3ry";function be(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function pe(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:o}=(0,f.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),r((e=>!e))}),[r,i]);return a.createElement("aside",{className:(0,l.Z)(c.k.docs.docSidebarContainer,me,n&&ue),onTransitionEnd:e=>{e.currentTarget.classList.contains(me)&&n&&s(!0)}},a.createElement(be,null,a.createElement(oe,{sidebar:t,path:o,onCollapse:d,isHidden:i})),i&&a.createElement(de,{toggleSidebar:d}))}const Ee={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function he(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(Ee.docMainContainer,(t||!r)&&Ee.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,t&&Ee.docItemWrapperEnhanced)},n))}const ve="docPage__5DB",fe="docsWrapper_BCFX";function _e(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:fe},a.createElement(v,null),a.createElement("div",{className:ve},n&&a.createElement(pe,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(he,{hiddenSidebarContainer:l},t)))}var ge=n(4204),ke=n(197);function Ce(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ie(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(ge.default,null);const{docElement:o,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Ce,e),a.createElement(r.FG,{className:(0,l.Z)(c.k.wrapper.docsPages,c.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(_e,null,o)))))}},4477:(e,t,n)=>{n.d(t,{E:()=>o,q:()=>c});var a=n(7294),l=n(902);const r=a.createContext(null);function c(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function o(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},4204:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(7294),l=n(3285);function r(e){return a.createElement(l.Z,null,a.createElement("main",null,a.createElement("div",{className:"container"},a.createElement("div",{style:{margin:"0 auto",width:"500px",marginTop:"50px"}},a.createElement("h1",null,"\u627e\u4e0d\u5230\u9875\u9762 \ud83d\ude2d"),a.createElement("p",null,"404 NOT FOUND"),a.createElement("p",null,"\u9875\u9762\u4e0d\u5b58\u5728\uff0c\u6216\u8005\u9875\u9762\u94fe\u63a5\u635f\u574f"),a.createElement("p",null,"\u53ef\u4ee5\u67e5\u770b\u53f3\u4e0a\u89d2\u7684\u5176\u4ed6\u9875\u9762\uff0c\u5bfb\u627e\u4f60\u60f3\u8981\u7684\u7b54\u6848\u3002")))))}}}]);