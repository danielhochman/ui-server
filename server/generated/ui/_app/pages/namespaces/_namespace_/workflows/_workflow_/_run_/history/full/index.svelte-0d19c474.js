import{S as m,i,s as a,w as p,x as u,y as c,q as g,o as f,B as l}from"../../../../../../../../chunks/index-208d16bf.js";import{b as _}from"../../../../../../../../chunks/get-event-categorization-b2bce139.js";import{E as y}from"../../../../../../../../chunks/event-summary-90f9b7ec.js";import"../../../../../../../../chunks/pagination-0ec725d2.js";import"../../../../../../../../chunks/stores-e98c925f.js";import"../../../../../../../../chunks/index-b3caf0f7.js";import"../../../../../../../../chunks/index.es-b78271c9.js";import"../../../../../../../../chunks/filter-select-6d51ec99.js";import"../../../../../../../../chunks/navigation-3f1ea447.js";import"../../../../../../../../chunks/singletons-d1fb5791.js";import"../../../../../../../../chunks/select-c6c5551c.js";import"../../../../../../../../chunks/index-200beb4e.js";import"../../../../../../../../chunks/persist-store-e22b12b5.js";import"../../../../../../../../chunks/index-a8ee0a5c.js";import"../../../../../../../../chunks/format-date-a3b7d511.js";import"../../../../../../../../chunks/format-camel-case-c8f5e0aa.js";import"../../../../../../../../chunks/route-for-d606e623.js";import"../../../../../../../../chunks/code-block-65693d9a.js";import"../../../../../../../../chunks/link-4b791f37.js";import"../../../../../../../../chunks/copyable-8868f814.js";import"../../../../../../../../chunks/empty-state-41a8fee2.js";function v(n){let e,r;return e=new y({props:{items:n[0],groups:n[1],expandAll:!0}}),{c(){p(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,o){c(e,t,o),r=!0},p(t,[o]){const s={};o&1&&(s.items=t[0]),o&2&&(s.groups=t[1]),e.$set(s)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){l(e,t)}}}const K=async function({stuff:n,url:e}){const r=e.searchParams.get("category"),t=_(n.events,r),o=n.eventGroups;return{props:{items:t,groups:o}}};function d(n,e,r){let{items:t}=e,{groups:o}=e;return n.$$set=s=>{"items"in s&&r(0,t=s.items),"groups"in s&&r(1,o=s.groups)},[t,o]}class L extends m{constructor(e){super(),i(this,e,d,v,a,{items:0,groups:1})}}export{L as default,K as load};
