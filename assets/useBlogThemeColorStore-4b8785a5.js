import{r as h,g as T}from"./index-c3b558f8.js";const b=t=>{let e;const o=new Set,u=(i,d)=>{const s=typeof i=="function"?i(e):i;if(!Object.is(s,e)){const p=e;e=d??typeof s!="object"?s:Object.assign({},e,s),o.forEach(g=>g(e,p))}},n=()=>e,c={setState:u,getState:n,subscribe:i=>(o.add(i),()=>o.delete(i)),destroy:()=>{o.clear()}};return e=t(u,n,c),c},x=t=>t?b(t):b;var y={exports:{}},V={},A={exports:{}},R={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=h;function N(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var D=typeof Object.is=="function"?Object.is:N,O=E.useState,P=E.useEffect,w=E.useLayoutEffect,I=E.useDebugValue;function H(t,e){var o=e(),u=O({inst:{value:o,getSnapshot:e}}),n=u[0].inst,r=u[1];return w(function(){n.value=o,n.getSnapshot=e,m(n)&&r({inst:n})},[t,o,e]),P(function(){return m(n)&&r({inst:n}),t(function(){m(n)&&r({inst:n})})},[t]),I(o),o}function m(t){var e=t.getSnapshot;t=t.value;try{var o=e();return!D(t,o)}catch{return!0}}function F(t,e){return e()}var j=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?F:H;R.useSyncExternalStore=E.useSyncExternalStore!==void 0?E.useSyncExternalStore:j;A.exports=R;var B=A.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=h,C=B;function q(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var M=typeof Object.is=="function"?Object.is:q,W=C.useSyncExternalStore,$=S.useRef,z=S.useEffect,G=S.useMemo,k=S.useDebugValue;V.useSyncExternalStoreWithSelector=function(t,e,o,u,n){var r=$(null);if(r.current===null){var l={hasValue:!1,value:null};r.current=l}else l=r.current;r=G(function(){function i(a){if(!d){if(d=!0,s=a,a=u(a),n!==void 0&&l.hasValue){var f=l.value;if(n(f,a))return p=f}return p=a}if(f=p,M(s,a))return f;var v=u(a);return n!==void 0&&n(f,v)?f:(s=a,p=v)}var d=!1,s,p,g=o===void 0?null:o;return[function(){return i(e())},g===null?void 0:function(){return i(g())}]},[e,o,u,n]);var c=W(t,r[0],r[1]);return z(function(){l.hasValue=!0,l.value=c},[c]),k(c),c};y.exports=V;var L=y.exports;const U=T(L),{useSyncExternalStoreWithSelector:X}=U;function J(t,e=t.getState,o){const u=X(t.subscribe,t.getState,t.getServerState||t.getState,e,o);return h.useDebugValue(u),u}const _=t=>{const e=typeof t=="function"?x(t):t,o=(u,n)=>J(e,u,n);return Object.assign(o,e),o},K=t=>t?_(t):_,Y=K()(t=>({blogThemeColor:localStorage.getItem("blogThemeColor")||"var(--pink)",setBlogThemeColor:e=>t({blogThemeColor:e||"var(--pink)"})}));export{Y as u};
