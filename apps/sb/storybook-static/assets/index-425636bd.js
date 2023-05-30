import{r as u}from"./index-8db94870.js";var _={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=u,m=Symbol.for("react.element"),f=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,g=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,l){var t,a={},o=null,i=null;l!==void 0&&(o=""+l),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(i=r.ref);for(t in r)x.call(r,t)&&!h.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)a[t]===void 0&&(a[t]=r[t]);return{$$typeof:m,type:e,key:o,ref:i,props:a,_owner:g.current}}n.Fragment=f;n.jsx=c;n.jsxs=c;_.exports=n;var s=_.exports;const d=({label:e,...r})=>s.jsx("button",{className:"button",...r,children:e});try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const p=({title:e})=>s.jsx("nav",{className:"header",children:s.jsx("h1",{children:e})});try{p.displayName="Header",p.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{d as B,p as H,s as j};
//# sourceMappingURL=index-425636bd.js.map
