import{e as o,g as t,f as a,p as g}from"./request-e7c2fce7.js";const L=s=>o("/v1/publishLogs",{logs:s}),c=s=>t("/v1/getDateLogs",{date:s}),p=()=>t("/v1/getAllLogs"),A=s=>a("/v1/deleteDateLogs",{date:s}),n=()=>a("/v1/clearAllLogs"),r=(s,e)=>g("/v1/updateDateLogs",{date:s,logs:e});export{c as a,n as b,A as c,p as g,L as p,r as u};
