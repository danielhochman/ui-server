import{S as W,i as A,s as D,w as B,k as y,e as _,t as k,x as I,m as S,c as d,a as $,h as E,d as l,b as v,y as L,g as w,M as m,q as O,o as P,B as q,N as F}from"../../chunks/index-caf98bb2.js";import{f as H,N as M}from"../../chunks/navigation-header-41512cc1.js";import{v as T}from"../../chunks/index.es-20d15ff4.js";import{m as U}from"../../chunks/route-for-37155b93.js";import{B as V}from"../../chunks/button-e117c6a4.js";import{p as j}from"../../chunks/stores-2b8df60b.js";import{g as z}from"../../chunks/navigation-3f1ea447.js";import"../../chunks/route-for-api-5336419a.js";import"../../chunks/index-270904a8.js";import"../../chunks/notifications-8e3c8d41.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/data-converter-config-dfc8e61f.js";import"../../chunks/persist-store-27bd62c3.js";import"../../chunks/is-http-f88da701.js";import"../../chunks/tooltip-8489907b.js";import"../../chunks/copyable-242207d1.js";import"../../chunks/modal-de8cc343.js";import"../../chunks/singletons-d1fb5791.js";function G(r){let t;return{c(){t=k("Continue to SSO")},l(n){t=E(n,"Continue to SSO")},m(n,s){w(n,t,s)},d(n){n&&l(t)}}}function J(r){let t,n,s,o,f,c,p,x,b,u,i,h;return t=new M({props:{href:"/"}}),i=new V({props:{classes:"",login:!0,icon:T,$$slots:{default:[G]},$$scope:{ctx:r}}}),i.$on("click",r[2]),{c(){B(t.$$.fragment),n=y(),s=_("section"),o=_("h1"),f=k("Welcome back."),c=y(),p=_("p"),x=k("Let's get you signed in."),b=y(),u=_("div"),B(i.$$.fragment),this.h()},l(e){I(t.$$.fragment,e),n=S(e),s=d(e,"SECTION",{class:!0});var a=$(s);o=d(a,"H1",{class:!0});var g=$(o);f=E(g,"Welcome back."),g.forEach(l),c=S(a),p=d(a,"P",{class:!0});var C=$(p);x=E(C,"Let's get you signed in."),C.forEach(l),b=S(a),u=d(a,"DIV",{class:!0});var N=$(u);I(i.$$.fragment,N),N.forEach(l),a.forEach(l),this.h()},h(){v(o,"class","text-8xl font-semibold"),v(p,"class","my-7"),v(u,"class","mx-auto"),v(s,"class","text-center my-[20vh]")},m(e,a){L(t,e,a),w(e,n,a),w(e,s,a),m(s,o),m(o,f),m(s,c),m(s,p),m(p,x),m(s,b),m(s,u),L(i,u,null),h=!0},p(e,[a]){const g={};a&8&&(g.$$scope={dirty:a,ctx:e}),i.$set(g)},i(e){h||(O(t.$$.fragment,e),O(i.$$.fragment,e),h=!0)},o(e){P(t.$$.fragment,e),P(i.$$.fragment,e),h=!1},d(e){q(t,e),e&&l(n),e&&l(s),q(i)}}}const ft=async function({url:r}){const t=await H({url:r});return t.auth.enabled?{props:{settings:t},stuff:{settings:t}}:{status:404}};function K(r,t,n){let s;F(r,j,c=>n(1,s=c));let{settings:o}=t;const f=()=>{z(U({settings:o,searchParams:s.url.searchParams,originUrl:s.url.origin}))};return r.$$set=c=>{"settings"in c&&n(0,o=c.settings)},[o,s,f]}class gt extends W{constructor(t){super(),A(this,t,K,J,D,{settings:0})}}export{gt as default,ft as load};