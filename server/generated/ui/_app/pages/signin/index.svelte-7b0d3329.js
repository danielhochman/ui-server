import{S as P,i as T,s as D,e as u,k as L,t as q,w as H,c as f,a as $,d as n,m as C,h as A,x as R,R as W,b as o,g as y,T as m,y as j,q as F,o as G,B as M,L as N}from"../../chunks/index-4f955b1f.js";import{f as U}from"../../chunks/settings-service-f76ca13a.js";import{r as V}from"../../chunks/index.es-3f7bba01.js";import{j as z}from"../../chunks/route-for-a8f6a277.js";import{B as J}from"../../chunks/button-25cd39d5.js";import{p as K}from"../../chunks/stores-8f54f2cb.js";import{g as Q}from"../../chunks/navigation-3f1ea447.js";import"../../chunks/route-for-api-e81b76bd.js";import"../../chunks/index-eae5a65e.js";import"../../chunks/notifications-2d1c3827.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/singletons-d1fb5791.js";function X(i){let t;return{c(){t=q("Continue to SSO")},l(s){t=A(s,"Continue to SSO")},m(s,r){y(s,t,r)},d(s){s&&n(t)}}}function Y(i){let t,s,r,p,g,a,h,E,S,d,k,w,_,c,b;return c=new J({props:{classes:"",login:!0,icon:V,$$slots:{default:[X]},$$scope:{ctx:i}}}),c.$on("click",i[2]),{c(){t=u("header"),s=u("a"),r=u("img"),g=L(),a=u("section"),h=u("h1"),E=q("Welcome back."),S=L(),d=u("p"),k=q("Lets get you signed in."),w=L(),_=u("div"),H(c.$$.fragment),this.h()},l(e){t=f(e,"HEADER",{class:!0});var l=$(t);s=f(l,"A",{href:!0,class:!0});var v=$(s);r=f(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(n),l.forEach(n),g=C(e),a=f(e,"SECTION",{class:!0});var x=$(a);h=f(x,"H1",{class:!0});var B=$(h);E=A(B,"Welcome back."),B.forEach(n),S=C(x),d=f(x,"P",{class:!0});var I=$(d);k=A(I,"Lets get you signed in."),I.forEach(n),w=C(x),_=f(x,"DIV",{class:!0});var O=$(_);R(c.$$.fragment,O),O.forEach(n),x.forEach(n),this.h()},h(){W(r.src,p="/logo.svg")||o(r,"src",p),o(r,"alt","Temporal Logo"),o(r,"class","max-h-8"),o(s,"href","/"),o(s,"class","flex my-4 max-h-8"),o(t,"class","grid grid-rows-1 grid-cols-12 px-10 items-center bg-gray-900 shadow-lg gap-6"),o(h,"class","text-8xl font-semibold"),o(d,"class","my-7"),o(_,"class","mx-auto"),o(a,"class","text-center my-[20vh]")},m(e,l){y(e,t,l),m(t,s),m(s,r),y(e,g,l),y(e,a,l),m(a,h),m(h,E),m(a,S),m(a,d),m(d,k),m(a,w),m(a,_),j(c,_,null),b=!0},p(e,[l]){const v={};l&8&&(v.$$scope={dirty:l,ctx:e}),c.$set(v)},i(e){b||(F(c.$$.fragment,e),b=!0)},o(e){G(c.$$.fragment,e),b=!1},d(e){e&&n(t),e&&n(g),e&&n(a),M(c)}}}const ft=async function({url:i}){const t=await U({url:i});return t.auth.enabled?{props:{settings:t},stuff:{settings:t}}:{status:404}};function Z(i,t,s){let r;N(i,K,a=>s(1,r=a));let{settings:p}=t;const g=()=>{Q(z({settings:p,searchParams:r.url.searchParams,originUrl:r.url.origin}))};return i.$$set=a=>{"settings"in a&&s(0,p=a.settings)},[p,r,g]}class pt extends P{constructor(t){super(),T(this,t,Z,Y,D,{settings:0})}}export{pt as default,ft as load};
