import{S as o,i,s as u,j as c,m,o as f,x as d,u as l,v as p}from"../../../../../../../../chunks/vendor-7695a512.js";import{E as b}from"../../../../../../../../chunks/event-details-094d7c4b.js";import"../../../../../../../../chunks/format-camel-case-8b7e013d.js";import"../../../../../../../../chunks/code-block-701d5f9b.js";function _(a){let e,s;return e=new b({props:{attributes:a[0]}}),{c(){c(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,n){f(e,t,n),s=!0},p(t,[n]){const r={};n&1&&(r.attributes=t[0]),e.$set(r)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){p(e,t)}}}const k=async({stuff:a,page:e})=>{const{events:s}=a,{id:t}=e.params,n=s.find(r=>r.id===t);return n?{props:{attributes:n.attributes}}:{status:404}};function v(a,e,s){let{attributes:t}=e;return a.$$set=n=>{"attributes"in n&&s(0,t=n.attributes)},[t]}class x extends o{constructor(e){super();i(this,e,v,_,u,{attributes:0})}}export{x as default,k as load};
