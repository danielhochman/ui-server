import{S as W,i as A,s as D,w as B,k as y,e as _,t as k,x as I,m as S,c as d,a as $,h as E,d as l,b as v,y as L,g as w,M as m,q as N,o as P,B as q,O as F}from"../../chunks/index-733079a8.js";import{f as H,N as M}from"../../chunks/navigation-header-bf6d57e7.js";import{u as T}from"../../chunks/index.es-b93730d8.js";import{l as U}from"../../chunks/route-for-46a9c4b7.js";import{B as V}from"../../chunks/button-dfaef4d6.js";import{p as j}from"../../chunks/stores-1e95b62c.js";import{g as z}from"../../chunks/navigation-3f1ea447.js";import"../../chunks/route-for-api-fec77250.js";import"../../chunks/index-d95e2ca5.js";import"../../chunks/notifications-7ffcc78e.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/data-converter-config-8b44b398.js";import"../../chunks/persist-store-bb92bb0b.js";import"../../chunks/tooltip-e0caa48f.js";import"../../chunks/copyable-a8d8233c.js";import"../../chunks/singletons-d1fb5791.js";function G(r){let t;return{c(){t=k("Continue to SSO")},l(n){t=E(n,"Continue to SSO")},m(n,s){w(n,t,s)},d(n){n&&l(t)}}}function J(r){let t,n,s,o,p,c,u,x,b,f,i,h;return t=new M({props:{href:"/"}}),i=new V({props:{classes:"",login:!0,icon:T,$$slots:{default:[G]},$$scope:{ctx:r}}}),i.$on("click",r[2]),{c(){B(t.$$.fragment),n=y(),s=_("section"),o=_("h1"),p=k("Welcome back."),c=y(),u=_("p"),x=k("Lets get you signed in."),b=y(),f=_("div"),B(i.$$.fragment),this.h()},l(e){I(t.$$.fragment,e),n=S(e),s=d(e,"SECTION",{class:!0});var a=$(s);o=d(a,"H1",{class:!0});var g=$(o);p=E(g,"Welcome back."),g.forEach(l),c=S(a),u=d(a,"P",{class:!0});var C=$(u);x=E(C,"Lets get you signed in."),C.forEach(l),b=S(a),f=d(a,"DIV",{class:!0});var O=$(f);I(i.$$.fragment,O),O.forEach(l),a.forEach(l),this.h()},h(){v(o,"class","text-8xl font-semibold"),v(u,"class","my-7"),v(f,"class","mx-auto"),v(s,"class","text-center my-[20vh]")},m(e,a){L(t,e,a),w(e,n,a),w(e,s,a),m(s,o),m(o,p),m(s,c),m(s,u),m(u,x),m(s,b),m(s,f),L(i,f,null),h=!0},p(e,[a]){const g={};a&8&&(g.$$scope={dirty:a,ctx:e}),i.$set(g)},i(e){h||(N(t.$$.fragment,e),N(i.$$.fragment,e),h=!0)},o(e){P(t.$$.fragment,e),P(i.$$.fragment,e),h=!1},d(e){q(t,e),e&&l(n),e&&l(s),q(i)}}}const ut=async function({url:r}){const t=await H({url:r});return t.auth.enabled?{props:{settings:t},stuff:{settings:t}}:{status:404}};function K(r,t,n){let s;F(r,j,c=>n(1,s=c));let{settings:o}=t;const p=()=>{z(U({settings:o,searchParams:s.url.searchParams,originUrl:s.url.origin}))};return r.$$set=c=>{"settings"in c&&n(0,o=c.settings)},[o,s,p]}class ft extends W{constructor(t){super(),A(this,t,K,J,D,{settings:0})}}export{ft as default,ut as load};
