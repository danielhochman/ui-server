import{S as u,i as c,s as f,w as g,x as _,y,q as l,o as E,B as d,N as s}from"../../../../../chunks/index-d3b4e788.js";import{p as v}from"../../../../../chunks/stores-da6b127c.js";import{i as h,a as b}from"../../../../../chunks/import-events-999e5b6d.js";import{E as q}from"../../../../../chunks/event-summary-19c4594c.js";import"../../../../../chunks/index-d96c6995.js";import"../../../../../chunks/pagination-8a6dee6a.js";import"../../../../../chunks/index.es-b0be0744.js";import"../../../../../chunks/navigation-3f1ea447.js";import"../../../../../chunks/singletons-d1fb5791.js";import"../../../../../chunks/select-b1ee2935.js";import"../../../../../chunks/index-bc80f711.js";import"../../../../../chunks/get-event-categorization-b2bce139.js";import"../../../../../chunks/event-filters-05b70482.js";import"../../../../../chunks/persist-store-a7f17701.js";import"../../../../../chunks/time-format-da0a14d5.js";import"../../../../../chunks/event-view-type-03605eae.js";import"../../../../../chunks/route-for-37155b93.js";import"../../../../../chunks/get-single-attribute-for-event-94ae8f24.js";import"../../../../../chunks/index-8ae46573.js";import"../../../../../chunks/format-date-4b1bc9ef.js";import"../../../../../chunks/code-block-3502cf88.js";import"../../../../../chunks/link-14afa753.js";import"../../../../../chunks/copyable-0f6b07fa.js";import"../../../../../chunks/empty-state-ead6dc71.js";function w(o){let r,e;return r=new q({props:{items:o[0],groups:o[1]}}),{c(){g(r.$$.fragment)},l(t){_(r.$$.fragment,t)},m(t,p){y(r,t,p),e=!0},p(t,[p]){const i={};p&1&&(i.items=t[0]),p&2&&(i.groups=t[1]),r.$set(i)},i(t){e||(l(r.$$.fragment,t),e=!0)},o(t){E(r.$$.fragment,t),e=!1},d(t){d(r,t)}}}function G(o,r,e){let t,p,i,n,a;return s(o,h,m=>e(3,i=m)),s(o,v,m=>e(4,n=m)),s(o,b,m=>e(1,a=m)),o.$$.update=()=>{o.$$.dirty&16&&e(2,t=n.url.searchParams.get("category")),o.$$.dirty&12&&e(0,p=i.filter(m=>t?m.category===t:m))},[p,a,t,i,n]}class V extends u{constructor(r){super(),c(this,r,G,w,f,{})}}export{V as default};