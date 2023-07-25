"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[264],{3264:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r,a,o,i,c=n(5861),s=n(9439),l=n(4687),d=n.n(l),p=n(3614),u=n(2791),v=n(7689),h=n(1087),m=n(168),f=n(6151),x=n(7691),g=x.ZP.ul(r||(r=(0,m.Z)(["\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  gap: 10px;\n  height: fit-content;\n"]))),b=(0,x.ZP)(f.Z)(a||(a=(0,m.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 18px;\n  line-height: 1.75px;\n  border: 1px solid black;\n\n  &.css-1yq06zn-MuiButtonBase-root-MuiButton-root:hover {\n    color: #02c342;\n    border: 1px solid #02c342;\n  }\n\n  &.active {\n    color: #02c342;\n    border: 1px solid #02c342;\n  }\n"]))),y=x.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  margin: 20px 0;\n"]))),Z=n(184),w=function(e){var t=(0,v.TH)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("h2",{children:"Additional info"}),(0,Z.jsxs)(y,{children:[(0,Z.jsxs)(g,{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(b,{component:h.rU,to:"cast",variant:"outlined",color:"secondary",className:t.pathname.includes("cast")?"active":"",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(b,{component:h.rU,to:"reviews",variant:"outlined",color:"secondary",className:t.pathname.includes("reviews")?"active":"",children:"Reviews"})})]}),(t.pathname.includes("cast")||t.pathname.includes("reviews"))&&(0,Z.jsx)(b,{component:h.rU,to:"",variant:"outlined",color:"secondary",className:"hide",children:"Hide"})]})]})},S=n(8221),z=x.ZP.iframe(i||(i=(0,m.Z)(["\n  width: 860px;\n  height: 478px;\n  display: block;\n  margin: 30px auto;\n"])));var k,j,C,I=function(){var e=(0,v.UO)().movieId,t=(0,u.useState)(""),r=(0,s.Z)(t,2),a=r[0],o=r[1],i=(0,u.useState)(""),l=(0,s.Z)(i,2),p=l[0],h=l[1];return(0,u.useEffect)((function(){function t(){return(t=(0,c.Z)(d().mark((function t(){var n,r,a;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,S.om)(e);case 3:n=t.sent,r=n.results,a=r.find((function(e){var t=e.official,n=e.type;return t&&"Trailer"===n})),h(a.key),o("resolved"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),o("rejected");case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),o("pending")}),[e]),"pending"===a?(0,Z.jsx)("img",{src:n(4529),alt:"default player",width:560}):"resolved"===a?(0,Z.jsx)(z,{src:"https://www.youtube.com/embed/"+p,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):"rejected"===a?(0,Z.jsx)("img",{src:n(8488),alt:"error loading",width:560}):void 0},R=n(8054),_=x.ZP.div(k||(k=(0,m.Z)(["\n    margin: 15px 0 30px 0;\n    display: flex;\n    gap: 40px;\n    justify-content: start;\n    align-items: center;\n"]))),B=x.ZP.div(j||(j=(0,m.Z)(["\n    display: flex;\n    gap: 10px;\n    align-items: center;\n"]))),P=x.ZP.h1(C||(C=(0,m.Z)(["\n    margin-bottom: 20px;\n"]))),E=function(){var e,t,n=(0,v.UO)().movieId,r=(0,u.useState)({}),a=(0,s.Z)(r,2),o=a[0],i=a[1],l=(0,u.useState)(""),m=(0,s.Z)(l,2),x=m[0],g=m[1],b=(0,v.TH)(),y=(0,u.useRef)(null!==(e=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,u.useEffect)((function(){function e(){return(e=(0,c.Z)(d().mark((function e(){var t,r,a,o,c,s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,S.TP)(n);case 3:t=e.sent,r=t.genres,a=t.overview,o=t.poster_path,c=t.title,s=t.vote_average,i({genres:r,overview:a,poster_path:o,title:c,vote_average:s}),g("resolved"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),g("rejected");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),g("pending")}),[n]),"pending"===x?(0,Z.jsx)(p.a,{}):"resolved"===x?(0,Z.jsxs)(R.$,{children:[(0,Z.jsx)(f.Z,{component:h.rU,to:y.current,color:"secondary",size:"small",variant:"outlined",children:"Go Back"}),(0,Z.jsxs)(_,{children:[(0,Z.jsx)("img",{src:S.YQ+o.poster_path,alt:o.title,width:300}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(P,{children:o.title}),(0,Z.jsxs)("p",{children:["User score: ",Math.ceil(10*o.vote_average),"%"]}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:o.overview}),0!==o.genres.length&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("h2",{children:"Genres"}),(0,Z.jsx)(B,{children:o.genres.map((function(e){var t=e.id,n=e.name;return(0,Z.jsx)("p",{children:n},t)}))})]})]})]}),(0,Z.jsx)(w,{}),(0,Z.jsx)(u.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading..."}),children:(0,Z.jsx)(v.j3,{})}),(0,Z.jsx)(I,{})]}):"rejected"===x?(0,Z.jsx)("h1",{children:"Sorry, we don't have this movie"}):void 0}},8221:function(e,t,n){n.d(t,{Hg:function(){return d},Jh:function(){return f},TP:function(){return h},YQ:function(){return l},_r:function(){return g},ld:function(){return u},om:function(){return y}});var r=n(5861),a=n(4687),o=n.n(a),i=n(1243),c="f5c750e62498ce7d84b29e02e1f941bc",s="https://api.themoviedb.org/3",l="https://image.tmdb.org/t/p/original/";function d(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(o().mark((function e(){var t,n,r=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.prev=1,e.next=4,i.Z.get("".concat(s,"/trending/movie/day"),{params:{api_key:"".concat(c),page:t}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),p.apply(this,arguments)}function u(){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(o().mark((function e(){var t,n,r,a=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=2,e.next=5,i.Z.get("".concat(s,"/search/movie"),{params:{api_key:"".concat(c),query:t,page:n}});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),v.apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t),{params:{api_key:"".concat(c)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/credits"),{params:{api_key:"".concat(c)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews"),{params:{api_key:"".concat(c)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function y(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/videos"),{params:{api_key:"".concat(c)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},8054:function(e,t,n){n.d(t,{$:function(){return o}});var r,a=n(168),o=n(7691).ZP.section(r||(r=(0,a.Z)(["\n    padding: 30px 0;\n"])))},6151:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(4942),a=n(3366),o=n(7462),i=n(2791),c=n(8182),s=n(5735),l=n(4419),d=n(2065),p=n(6934),u=n(1402),v=n(6901),h=n(4036),m=n(5878),f=n(7225);function x(e){return(0,f.Z)("MuiButton",e)}var g=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=i.createContext({}),y=n(184),Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],w=function(e){return(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},S=(0,p.ZP)(v.Z,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,h.Z)(n.color))],t["size".concat((0,h.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,h.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n,a,i=e.theme,c=e.ownerState,s="light"===i.palette.mode?i.palette.grey[300]:i.palette.grey[800],l="light"===i.palette.mode?i.palette.grey.A100:i.palette.grey[700];return(0,o.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:i.vars?i.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,o.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,r.Z)(t,"&.".concat(g.focusVisible),(0,o.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,r.Z)(t,"&.".concat(g.disabled),(0,o.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(n=(a=i.palette).getContrastText)?void 0:n.call(a,i.palette.grey[300]),backgroundColor:i.vars?i.vars.palette.Button.inheritContainedBg:s,boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,r.Z)(t,"&.".concat(g.focusVisible),{boxShadow:"none"}),(0,r.Z)(t,"&:active",{boxShadow:"none"}),(0,r.Z)(t,"&.".concat(g.disabled),{boxShadow:"none"}),t)})),z=(0,p.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat((0,h.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},w(t))})),k=(0,p.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat((0,h.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},w(t))})),j=i.forwardRef((function(e,t){var n=i.useContext(b),r=(0,s.Z)(n,e),d=(0,u.Z)({props:r,name:"MuiButton"}),p=d.children,v=d.color,m=void 0===v?"primary":v,f=d.component,g=void 0===f?"button":f,w=d.className,j=d.disabled,C=void 0!==j&&j,I=d.disableElevation,R=void 0!==I&&I,_=d.disableFocusRipple,B=void 0!==_&&_,P=d.endIcon,E=d.focusVisibleClassName,M=d.fullWidth,T=void 0!==M&&M,W=d.size,F=void 0===W?"medium":W,N=d.startIcon,O=d.type,L=d.variant,U=void 0===L?"text":L,V=(0,a.Z)(d,Z),q=(0,o.Z)({},d,{color:m,component:g,disabled:C,disableElevation:R,disableFocusRipple:B,fullWidth:T,size:F,type:O,variant:U}),H=function(e){var t=e.color,n=e.disableElevation,r=e.fullWidth,a=e.size,i=e.variant,c=e.classes,s={root:["root",i,"".concat(i).concat((0,h.Z)(t)),"size".concat((0,h.Z)(a)),"".concat(i,"Size").concat((0,h.Z)(a)),"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(a))],endIcon:["endIcon","iconSize".concat((0,h.Z)(a))]},d=(0,l.Z)(s,x,c);return(0,o.Z)({},c,d)}(q),Y=N&&(0,y.jsx)(z,{className:H.startIcon,ownerState:q,children:N}),A=P&&(0,y.jsx)(k,{className:H.endIcon,ownerState:q,children:P});return(0,y.jsxs)(S,(0,o.Z)({ownerState:q,className:(0,c.Z)(n.className,H.root,w),component:g,disabled:C,focusRipple:!B,focusVisibleClassName:(0,c.Z)(H.focusVisible,E),ref:t,type:O},V,{classes:H,children:[Y,p,A]}))}))},4529:function(e,t,n){e.exports=n.p+"static/media/player.1f84a5f5d489c2430b2b.png"},8488:function(e,t,n){e.exports=n.p+"static/media/video_error.3ce040218dcabc2e8f83.png"}}]);
//# sourceMappingURL=264.40a589ca.chunk.js.map