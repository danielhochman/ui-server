import{S as a,i as u,s as c,w as f,x as g,y as _,q as l,o as y,B as E,L as i}from"../../../../../chunks/index-4f955b1f.js";import{p as $}from"../../../../../chunks/stores-8f54f2cb.js";import{a as d}from"../../../../../chunks/import-events-ee494f5c.js";import{E as h}from"../../../../../chunks/event-summary-5f1f2699.js";import"../../../../../chunks/index-eae5a65e.js";import"../../../../../chunks/pagination-05247e47.js";import"../../../../../chunks/index.es-3f7bba01.js";import"../../../../../chunks/table-link-8c74cb5c.js";import"../../../../../chunks/navigation-3f1ea447.js";import"../../../../../chunks/singletons-d1fb5791.js";import"../../../../../chunks/select-7cfdb92d.js";import"../../../../../chunks/index-825e9062.js";import"../../../../../chunks/get-event-categorization-b2bce139.js";import"../../../../../chunks/index-a8ee0a5c.js";import"../../../../../chunks/format-date-0917cdb3.js";import"../../../../../chunks/format-camel-case-2143e830.js";import"../../../../../chunks/route-for-a8f6a277.js";import"../../../../../chunks/code-block-ea06467c.js";import"../../../../../chunks/empty-state-2dcd34e2.js";function v(o){let r,e;return r=new h({props:{items:o[1],groups:o[0],compact:!0}}),{c(){f(r.$$.fragment)},l(t){g(r.$$.fragment,t)},m(t,m){_(r,t,m),e=!0},p(t,[m]){const p={};m&2&&(p.items=t[1]),m&1&&(p.groups=t[0]),r.$set(p)},i(t){e||(l(r.$$.fragment,t),e=!0)},o(t){y(r.$$.fragment,t),e=!1},d(t){E(r,t)}}}function G(o,r,e){let t,m,p,s;return i(o,d,n=>e(0,p=n)),i(o,$,n=>e(3,s=n)),o.$$.update=()=>{o.$$.dirty&8&&e(2,t=s.url.searchParams.get("category")),o.$$.dirty&5&&e(1,m=p.filter(n=>t?n.category===t:n))},[p,m,t,s]}class M extends a{constructor(r){super(),u(this,r,G,v,c,{})}}export{M as default};