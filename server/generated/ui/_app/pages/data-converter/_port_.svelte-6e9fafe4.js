import{S as a,i as n,s as p,I as i,v as c}from"../../chunks/vendor-cba54241.js";import{g as m}from"../../chunks/navigation-093db9e2.js";import{p as u}from"../../chunks/stores-a6bbeb31.js";import{n as l}from"../../chunks/notifications-dc83cd3a.js";import{d as f}from"../../chunks/data-converter-config-343799f1.js";import"../../chunks/singletons-a6a7384f.js";const x=!1;function d(s,o,r){let e;return i(s,u,t=>r(0,e=t)),c(()=>{let{port:t}=e.params;f.set(t),m("/",{replaceState:!0}),l.add("success","Successfully set decoder")}),[]}class C extends a{constructor(o){super();n(this,o,d,null,p,{})}}export{C as default,x as ssr};