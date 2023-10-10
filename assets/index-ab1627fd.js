import{R as X,r as a}from"./index-e7b5741e.js";import{C as z}from"./request-2941cc25.js";import{g as Q,r as U,m as V,C as I,c as w,aw as B,b as q,i as G,ax as J,a4 as K}from"./colors-a3541b40.js";function Y(e,o,n){return typeof e=="boolean"?e:o===void 0?!!n:o!==!1&&o!==null}function Z(e,o,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:X.createElement(z,null),t=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(!Y(e,o,t))return[!1,null];const l=typeof o=="boolean"||o===void 0||o===null?r:o;return[!0,n?n(l):l]}const ee=e=>{const{paddingXXS:o,lineWidth:n,tagPaddingHorizontal:r,componentCls:t}=e,s=r-n,l=o-n;return{[t]:Object.assign(Object.assign({},U(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${t}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${t}-close-icon`]:{marginInlineStart:l,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${t}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${t}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:s}}),[`${t}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},$=e=>{const{lineWidth:o,fontSizeIcon:n}=e,r=e.fontSizeSM,t=`${e.lineHeightSM*r}px`;return V(e,{tagFontSize:r,tagLineHeight:t,tagIconSize:n-2*o,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary})},x=e=>({defaultBg:e.colorFillQuaternary,defaultColor:e.colorText}),H=Q("Tag",e=>{const o=$(e);return ee(o)},x);var oe=globalThis&&globalThis.__rest||function(e,o){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)o.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(n[r[t]]=e[r[t]]);return n};const re=e=>{const{prefixCls:o,style:n,className:r,checked:t,onChange:s,onClick:l}=e,f=oe(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:d,tag:i}=a.useContext(I),m=S=>{s==null||s(!t),l==null||l(S)},u=d("tag",o),[h,g]=H(u),y=w(u,`${u}-checkable`,{[`${u}-checkable-checked`]:t},i==null?void 0:i.className,r,g);return h(a.createElement("span",Object.assign({},f,{style:Object.assign(Object.assign({},n),i==null?void 0:i.style),className:y,onClick:m})))},te=re,ne=e=>q(e,(o,n)=>{let{textColor:r,lightBorderColor:t,lightColor:s,darkColor:l}=n;return{[`${e.componentCls}-${o}`]:{color:r,background:s,borderColor:t,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),le=B(["Tag","preset"],e=>{const o=$(e);return ne(o)},x);function ae(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const b=(e,o,n)=>{const r=ae(n);return{[`${e.componentCls}-${o}`]:{color:e[`color${n}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},se=B(["Tag","status"],e=>{const o=$(e);return[b(o,"success","Success"),b(o,"processing","Info"),b(o,"error","Error"),b(o,"warning","Warning")]},x);var ce=globalThis&&globalThis.__rest||function(e,o){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)o.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(n[r[t]]=e[r[t]]);return n};const ie=(e,o)=>{const{prefixCls:n,className:r,rootClassName:t,style:s,children:l,icon:f,color:d,onClose:i,closeIcon:m,closable:u,bordered:h=!0}=e,g=ce(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:y,direction:S,tag:p}=a.useContext(I),[k,T]=a.useState(!0);a.useEffect(()=>{"visible"in g&&T(g.visible)},[g.visible]);const O=G(d),P=J(d),v=O||P,F=Object.assign(Object.assign({backgroundColor:d&&!v?d:void 0},p==null?void 0:p.style),s),c=y("tag",n),[M,R]=H(c),W=w(c,p==null?void 0:p.className,{[`${c}-${d}`]:v,[`${c}-has-color`]:d&&!v,[`${c}-hidden`]:!k,[`${c}-rtl`]:S==="rtl",[`${c}-borderless`]:!h},r,t,R),j=C=>{C.stopPropagation(),i==null||i(C),!C.defaultPrevented&&T(!1)},[,L]=Z(u,m,C=>C===null?a.createElement(z,{className:`${c}-close-icon`,onClick:j}):a.createElement("span",{className:`${c}-close-icon`,onClick:j},C),null,!1),A=typeof g.onClick=="function"||l&&l.type==="a",E=f||null,D=E?a.createElement(a.Fragment,null,E,l&&a.createElement("span",null,l)):l,N=a.createElement("span",Object.assign({},g,{ref:o,className:W,style:F}),D,L,O&&a.createElement(le,{key:"preset",prefixCls:c}),P&&a.createElement(se,{key:"status",prefixCls:c}));return M(A?a.createElement(K,{component:"Tag"},N):N)},_=a.forwardRef(ie);_.CheckableTag=te;const pe=_;export{pe as T};