"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{7149:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a,r,o,i=n(5861),c=n(9439),s=n(4687),l=n.n(s),d=n(3614),p=n(2791),u=n(7689),v=n(1087),h=n(168),m=n(6151),x=n(7691),f=(0,x.ZP)(m.Z)(a||(a=(0,h.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 18px;\n  line-height: 1.75px;\n  border: 1px solid black;\n  &.css-1yq06zn-MuiButtonBase-root-MuiButton-root:hover,\n  :focus {\n    color: #02c342;\n    border: 1px solid #02c342;\n  }\n\n  &.active {\n    color: #02c342;\n    border: 1px solid #02c342;\n  }\n"]))),g=n(3472),b=n(184),y=function(e){var t=(0,u.TH)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h2",{children:"Additional info"}),(0,b.jsxs)(g.W_,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(f,{component:v.rU,to:"cast",variant:"outlined",color:"secondary",className:t.pathname.includes("cast")?"active":"",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(f,{component:v.rU,to:"reviews",variant:"outlined",color:"secondary",className:t.pathname.includes("reviews")?"active":"",children:"Reviews"})})]})]})},S=n(8221),Z=x.ZP.div(r||(r=(0,h.Z)(["\n    margin: 30px 0;\n    display: flex;\n    gap: 40px;\n    justify-content: start;\n    align-items: center;\n"]))),w=x.ZP.div(o||(o=(0,h.Z)(["\n    display: flex;\n    gap: 10px;\n    align-items: center;\n"]))),z=function(){var e,t,n=(0,u.UO)().movieId,a=(0,p.useState)({}),r=(0,c.Z)(a,2),o=r[0],s=r[1],h=(0,p.useState)(""),x=(0,c.Z)(h,2),f=x[0],g=x[1],z=(0,u.TH)(),k=(0,p.useRef)(null!==(e=null===(t=z.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(l().mark((function e(){var t,a,r,o,i,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,S.TP)(n);case 3:t=e.sent,a=t.genres,r=t.overview,o=t.poster_path,i=t.title,c=t.vote_average,s({genres:a,overview:r,poster_path:o,title:i,vote_average:c}),g("resolved"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),g("rejected");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),g("pending")}),[n]),"pending"===f?(0,b.jsx)(d.a,{}):"resolved"===f?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.Z,{component:v.rU,to:k.current,color:"secondary",size:"small",variant:"outlined",children:"Go Back"}),(0,b.jsxs)(Z,{children:[(0,b.jsx)("img",{src:S.YQ+o.poster_path,alt:o.title,width:300}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{children:o.title}),(0,b.jsxs)("p",{children:["User score: ",Math.ceil(10*o.vote_average),"%"]}),(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:o.overview}),0!==o.genres.length&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h2",{children:"Genres"}),(0,b.jsx)(w,{children:o.genres.map((function(e){var t=e.id,n=e.name;return(0,b.jsx)("p",{children:n},t)}))})]})]})]}),(0,b.jsx)(y,{}),(0,b.jsx)(p.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(u.j3,{})})]}):"rejected"===f?(0,b.jsx)("h1",{children:"Sorry, we don't have this movie"}):void 0}},8221:function(e,t,n){n.d(t,{Hg:function(){return d},Jh:function(){return x},TP:function(){return h},YQ:function(){return l},_r:function(){return g},ld:function(){return u}});var a=n(5861),r=n(4687),o=n.n(r),i=n(1243),c="f5c750e62498ce7d84b29e02e1f941bc",s="https://api.themoviedb.org/3",l="https://image.tmdb.org/t/p/original/";function d(){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/trending/movie/day"),{params:{api_key:"".concat(c)}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(){return v.apply(this,arguments)}function v(){return v=(0,a.Z)(o().mark((function e(){var t,n,a=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.prev=1,e.next=4,i.Z.get("".concat(s,"/search/movie"),{params:{api_key:"".concat(c),query:t}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),v.apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t),{params:{api_key:"".concat(c)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/credits"),{params:{api_key:"".concat(c)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews"),{params:{api_key:"".concat(c)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},6151:function(e,t,n){n.d(t,{Z:function(){return j}});var a=n(4942),r=n(3366),o=n(7462),i=n(2791),c=n(8182),s=n(5735),l=n(4419),d=n(2065),p=n(6934),u=n(1402),v=n(6901),h=n(4036),m=n(5878),x=n(7225);function f(e){return(0,x.Z)("MuiButton",e)}var g=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=i.createContext({}),y=n(184),S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=function(e){return(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},w=(0,p.ZP)(v.Z,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,h.Z)(n.color))],t["size".concat((0,h.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,h.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n,r,i=e.theme,c=e.ownerState,s="light"===i.palette.mode?i.palette.grey[300]:i.palette.grey[800],l="light"===i.palette.mode?i.palette.grey.A100:i.palette.grey[700];return(0,o.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:i.vars?i.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,o.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,a.Z)(t,"&.".concat(g.focusVisible),(0,o.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,a.Z)(t,"&.".concat(g.disabled),(0,o.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(n=(r=i.palette).getContrastText)?void 0:n.call(r,i.palette.grey[300]),backgroundColor:i.vars?i.vars.palette.Button.inheritContainedBg:s,boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(t,"&.".concat(g.focusVisible),{boxShadow:"none"}),(0,a.Z)(t,"&:active",{boxShadow:"none"}),(0,a.Z)(t,"&.".concat(g.disabled),{boxShadow:"none"}),t)})),z=(0,p.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat((0,h.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},Z(t))})),k=(0,p.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat((0,h.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},Z(t))})),j=i.forwardRef((function(e,t){var n=i.useContext(b),a=(0,s.Z)(n,e),d=(0,u.Z)({props:a,name:"MuiButton"}),p=d.children,v=d.color,m=void 0===v?"primary":v,x=d.component,g=void 0===x?"button":x,Z=d.className,j=d.disabled,C=void 0!==j&&j,I=d.disableElevation,R=void 0!==I&&I,_=d.disableFocusRipple,B=void 0!==_&&_,E=d.endIcon,M=d.focusVisibleClassName,W=d.fullWidth,F=void 0!==W&&W,P=d.size,T=void 0===P?"medium":P,N=d.startIcon,L=d.type,O=d.variant,V=void 0===O?"text":O,q=(0,r.Z)(d,S),U=(0,o.Z)({},d,{color:m,component:g,disabled:C,disableElevation:R,disableFocusRipple:B,fullWidth:F,size:T,type:L,variant:V}),H=function(e){var t=e.color,n=e.disableElevation,a=e.fullWidth,r=e.size,i=e.variant,c=e.classes,s={root:["root",i,"".concat(i).concat((0,h.Z)(t)),"size".concat((0,h.Z)(r)),"".concat(i,"Size").concat((0,h.Z)(r)),"inherit"===t&&"colorInherit",n&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(r))],endIcon:["endIcon","iconSize".concat((0,h.Z)(r))]},d=(0,l.Z)(s,f,c);return(0,o.Z)({},c,d)}(U),A=N&&(0,y.jsx)(z,{className:H.startIcon,ownerState:U,children:N}),G=E&&(0,y.jsx)(k,{className:H.endIcon,ownerState:U,children:E});return(0,y.jsxs)(w,(0,o.Z)({ownerState:U,className:(0,c.Z)(n.className,H.root,Z),component:g,disabled:C,focusRipple:!B,focusVisibleClassName:(0,c.Z)(H.focusVisible,M),ref:t,type:L},q,{classes:H,children:[A,p,G]}))}))}}]);
//# sourceMappingURL=149.dac2db44.chunk.js.map