import{w as o}from"./index-eae5a65e.js";function u(s,c=""){var r;let t=c;try{t=JSON.parse((r=window==null?void 0:window.localStorage)==null?void 0:r.getItem(s))}catch{t=null}const{subscribe:i,set:l}=o(t);return{subscribe:i,set:e=>{var a;(a=window==null?void 0:window.localStorage)==null||a.setItem(s,JSON.stringify(e)),l(e)}}}const p=u("port",null),n=o("notRequested");function w(){n.set("error")}function d(){n.set("success")}export{d as a,p as d,n as l,u as p,w as s};
