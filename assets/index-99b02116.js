import{C as V,c as T,d as fe,g as ue,m as he,r as xe,a6 as Se,_ as U}from"./colors-51842a3b.js";import{R as $,r}from"./index-7944d32c.js";import{e as ye,P as ve,a as be,D as Ce,S as Ee}from"./index-413b9559.js";import{r as Z}from"./index-5f3e56f5.js";import{C as ze,R as Pe}from"./row-a8723ea0.js";const K=$.createContext({});K.Consumer;var k=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]]);return i};const Oe=t=>{var{prefixCls:e,className:i,avatar:n,title:a,description:s}=t,f=k(t,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:u}=r.useContext(V),p=u("list",e),S=T(`${p}-item-meta`,i),y=$.createElement("div",{className:`${p}-item-meta-content`},a&&$.createElement("h4",{className:`${p}-item-meta-title`},a),s&&$.createElement("div",{className:`${p}-item-meta-description`},s));return $.createElement("div",Object.assign({},f,{className:S}),n&&$.createElement("div",{className:`${p}-item-meta-avatar`},n),(a||s)&&y)},Be=(t,e)=>{var{prefixCls:i,children:n,actions:a,extra:s,className:f,colStyle:u}=t,p=k(t,["prefixCls","children","actions","extra","className","colStyle"]);const{grid:S,itemLayout:y}=r.useContext(K),{getPrefixCls:z}=r.useContext(V),l=()=>{let h;return r.Children.forEach(n,b=>{typeof b=="string"&&(h=!0)}),h&&r.Children.count(n)>1},C=()=>y==="vertical"?!!s:!l(),m=z("list",i),v=a&&a.length>0&&$.createElement("ul",{className:`${m}-item-action`,key:"actions"},a.map((h,b)=>$.createElement("li",{key:`${m}-item-action-${b}`},h,b!==a.length-1&&$.createElement("em",{className:`${m}-item-action-split`})))),E=S?"div":"li",P=$.createElement(E,Object.assign({},p,S?{}:{ref:e},{className:T(`${m}-item`,{[`${m}-item-no-flex`]:!C()},f)}),y==="vertical"&&s?[$.createElement("div",{className:`${m}-item-main`,key:"content"},n,v),$.createElement("div",{className:`${m}-item-extra`,key:"extra"},s)]:[n,v,fe(s,{key:"extra"})]);return S?$.createElement(ze,{ref:e,flex:1,style:u},P):P},ee=r.forwardRef(Be);ee.Meta=Oe;const Ne=ee,Ie=t=>{const{listBorderedCls:e,componentCls:i,paddingLG:n,margin:a,itemPaddingSM:s,itemPaddingLG:f,marginLG:u,borderRadiusLG:p}=t;return{[`${e}`]:{border:`${t.lineWidth}px ${t.lineType} ${t.colorBorder}`,borderRadius:p,[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:n},[`${i}-pagination`]:{margin:`${a}px ${u}px`}},[`${e}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:s}},[`${e}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:f}}}},Me=t=>{const{componentCls:e,screenSM:i,screenMD:n,marginLG:a,marginSM:s,margin:f}=t;return{[`@media screen and (max-width:${n})`]:{[`${e}`]:{[`${e}-item`]:{[`${e}-item-action`]:{marginInlineStart:a}}},[`${e}-vertical`]:{[`${e}-item`]:{[`${e}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${i})`]:{[`${e}`]:{[`${e}-item`]:{flexWrap:"wrap",[`${e}-action`]:{marginInlineStart:s}}},[`${e}-vertical`]:{[`${e}-item`]:{flexWrap:"wrap-reverse",[`${e}-item-main`]:{minWidth:t.contentWidth},[`${e}-item-extra`]:{margin:`auto auto ${f}px`}}}}}},Le=t=>{const{componentCls:e,antCls:i,controlHeight:n,minHeight:a,paddingSM:s,marginLG:f,padding:u,itemPadding:p,colorPrimary:S,itemPaddingSM:y,itemPaddingLG:z,paddingXS:l,margin:C,colorText:m,colorTextDescription:v,motionDurationSlow:E,lineWidth:P,headerBg:h,footerBg:b,emptyTextPadding:N,metaMarginBottom:W,avatarMarginRight:I,titleMarginBottom:G,descriptionFontSize:R}=t,M={};return["start","center","end"].forEach(L=>{M[`&-align-${L}`]={textAlign:L}}),{[`${e}`]:Object.assign(Object.assign({},xe(t)),{position:"relative","*":{outline:"none"},[`${e}-header`]:{background:h},[`${e}-footer`]:{background:b},[`${e}-header, ${e}-footer`]:{paddingBlock:s},[`${e}-pagination`]:Object.assign(Object.assign({marginBlockStart:f},M),{[`${i}-pagination-options`]:{textAlign:"start"}}),[`${e}-spin`]:{minHeight:a,textAlign:"center"},[`${e}-items`]:{margin:0,padding:0,listStyle:"none"},[`${e}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:p,color:m,[`${e}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${e}-item-meta-avatar`]:{marginInlineEnd:I},[`${e}-item-meta-content`]:{flex:"1 0",width:0,color:m},[`${e}-item-meta-title`]:{margin:`0 0 ${t.marginXXS}px 0`,color:m,fontSize:t.fontSize,lineHeight:t.lineHeight,"> a":{color:m,transition:`all ${E}`,"&:hover":{color:S}}},[`${e}-item-meta-description`]:{color:v,fontSize:R,lineHeight:t.lineHeight}},[`${e}-item-action`]:{flex:"0 0 auto",marginInlineStart:t.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${l}px`,color:v,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${e}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:P,height:Math.ceil(t.fontSize*t.lineHeight)-t.marginXXS*2,transform:"translateY(-50%)",backgroundColor:t.colorSplit}}},[`${e}-empty`]:{padding:`${u}px 0`,color:v,fontSize:t.fontSizeSM,textAlign:"center"},[`${e}-empty-text`]:{padding:N,color:t.colorTextDisabled,fontSize:t.fontSize,textAlign:"center"},[`${e}-item-no-flex`]:{display:"block"}}),[`${e}-grid ${i}-col > ${e}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:C,paddingBlock:0,borderBlockEnd:"none"},[`${e}-vertical ${e}-item`]:{alignItems:"initial",[`${e}-item-main`]:{display:"block",flex:1},[`${e}-item-extra`]:{marginInlineStart:f},[`${e}-item-meta`]:{marginBlockEnd:W,[`${e}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:G,color:m,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG}},[`${e}-item-action`]:{marginBlockStart:u,marginInlineStart:"auto","> li":{padding:`0 ${u}px`,"&:first-child":{paddingInlineStart:0}}}},[`${e}-split ${e}-item`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${e}-split ${e}-header`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-split${e}-empty ${e}-footer`]:{borderTop:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-loading ${e}-spin-nested-loading`]:{minHeight:n},[`${e}-split${e}-something-after-last-item ${i}-spin-container > ${e}-items > ${e}-item:last-child`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-lg ${e}-item`]:{padding:z},[`${e}-sm ${e}-item`]:{padding:y},[`${e}:not(${e}-vertical)`]:{[`${e}-item-no-flex`]:{[`${e}-item-action`]:{float:"right"}}}}},je=ue("List",t=>{const e=he(t,{listBorderedCls:`${t.componentCls}-bordered`,minHeight:t.controlHeightLG});return[Le(e),Ie(e),Me(e)]},t=>({contentWidth:220,itemPadding:`${t.paddingContentVertical}px 0`,itemPaddingSM:`${t.paddingContentVerticalSM}px ${t.paddingContentHorizontal}px`,itemPaddingLG:`${t.paddingContentVerticalLG}px ${t.paddingContentHorizontalLG}px`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:t.padding,metaMarginBottom:t.padding,avatarMarginRight:t.padding,titleMarginBottom:t.paddingSM,descriptionFontSize:t.fontSize}));var we=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]]);return i};function He(t){var e,{pagination:i=!1,prefixCls:n,bordered:a=!1,split:s=!0,className:f,rootClassName:u,style:p,children:S,itemLayout:y,loadMore:z,grid:l,dataSource:C=[],size:m,header:v,footer:E,loading:P=!1,rowKey:h,renderItem:b,locale:N}=t,W=we(t,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const I=i&&typeof i=="object"?i:{},[G,R]=r.useState(I.defaultCurrent||1),[M,L]=r.useState(I.defaultPageSize||10),{getPrefixCls:te,renderEmpty:A,direction:ie,list:O}=r.useContext(V),ne={current:1,total:0},J=o=>(d,x)=>{var F;R(d),L(x),i&&i[o]&&((F=i==null?void 0:i[o])===null||F===void 0||F.call(i,d,x))},ae=J("onChange"),re=J("onShowSizeChange"),oe=(o,d)=>{if(!b)return null;let x;return typeof h=="function"?x=h(o):h?x=o[h]:x=o.key,x||(x=`list-item-${d}`),r.createElement(r.Fragment,{key:x},b(o,d))},le=()=>!!(z||i||E),c=te("list",n),[se,ce]=je(c);let B=P;typeof B=="boolean"&&(B={spinning:B});const _=B&&B.spinning,me=Se(m);let j="";switch(me){case"large":j="lg";break;case"small":j="sm";break}const de=T(c,{[`${c}-vertical`]:y==="vertical",[`${c}-${j}`]:j,[`${c}-split`]:s,[`${c}-bordered`]:a,[`${c}-loading`]:_,[`${c}-grid`]:!!l,[`${c}-something-after-last-item`]:le(),[`${c}-rtl`]:ie==="rtl"},O==null?void 0:O.className,f,u,ce),g=ye(ne,{total:C.length,current:G,pageSize:M},i||{}),Y=Math.ceil(g.total/g.pageSize);g.current>Y&&(g.current=Y);const q=i?r.createElement("div",{className:T(`${c}-pagination`,`${c}-pagination-align-${(e=g==null?void 0:g.align)!==null&&e!==void 0?e:"end"}`)},r.createElement(ve,Object.assign({},g,{onChange:ae,onShowSizeChange:re}))):null;let D=U(C);i&&C.length>(g.current-1)*g.pageSize&&(D=U(C).splice((g.current-1)*g.pageSize,g.pageSize));const ge=Object.keys(l||{}).some(o=>["xs","sm","md","lg","xl","xxl"].includes(o)),Q=be(ge),w=r.useMemo(()=>{for(let o=0;o<Z.length;o+=1){const d=Z[o];if(Q[d])return d}},[Q]),pe=r.useMemo(()=>{if(!l)return;const o=w&&l[w]?l[w]:l.column;if(o)return{width:`${100/o}%`,maxWidth:`${100/o}%`}},[l==null?void 0:l.column,w]);let X=_&&r.createElement("div",{style:{minHeight:53}});if(D.length>0){const o=D.map((d,x)=>oe(d,x));X=l?r.createElement(Pe,{gutter:l.gutter},r.Children.map(o,d=>r.createElement("div",{key:d==null?void 0:d.key,style:pe},d))):r.createElement("ul",{className:`${c}-items`},o)}else!S&&!_&&(X=r.createElement("div",{className:`${c}-empty-text`},N&&N.emptyText||(A==null?void 0:A("List"))||r.createElement(Ce,{componentName:"List"})));const H=g.position||"bottom",$e=r.useMemo(()=>({grid:l,itemLayout:y}),[JSON.stringify(l),y]);return se(r.createElement(K.Provider,{value:$e},r.createElement("div",Object.assign({style:Object.assign(Object.assign({},O==null?void 0:O.style),p),className:de},W),(H==="top"||H==="both")&&q,v&&r.createElement("div",{className:`${c}-header`},v),r.createElement(Ee,Object.assign({},B),X,S),E&&r.createElement("div",{className:`${c}-footer`},E),z||(H==="bottom"||H==="both")&&q)))}He.Item=Ne;export{He as L};