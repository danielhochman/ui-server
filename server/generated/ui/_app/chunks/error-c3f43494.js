import{S as M,i as z,s as A,e as y,t as h,k as x,w as q,l as O,c as C,a as T,h as d,d as f,m as L,x as P,b,g as v,M as c,y as U,j as F,q as B,o as D,B as H,N as G,O as J}from"./index-d3b4e788.js";import{b as K}from"./navigation-3f1ea447.js";import{p as Q}from"./stores-da6b127c.js";import{i as R}from"./is-network-error-ac7c8caf.js";import{L as I}from"./link-14afa753.js";function V(n){let e;return{c(){e=h("Try a refresh")},l(t){e=d(t,"Try a refresh")},m(t,o){v(t,e,o)},d(t){t&&f(e)}}}function W(n){let e;return{c(){e=h("jump on our Slack Channel")},l(t){e=d(t,"jump on our Slack Channel")},m(t,o){v(t,e,o)},d(t){t&&f(e)}}}function X(n){let e,t,o,u,l,p,$,i,a,N,m,j,w,S,g;return a=new I({props:{href:n[2],target:"_self",class:"underline-offset-2 underline",$$slots:{default:[V]},$$scope:{ctx:n}}}),a.$on("click",n[4]),m=new I({props:{href:"https://temporal.io/slack",$$slots:{default:[W]},$$scope:{ctx:n}}}),{c(){e=y("section"),t=y("h1"),o=h(n[0]),u=x(),l=y("p"),p=h("Uh oh. There's an error."),$=x(),i=y("p"),q(a.$$.fragment),N=h(`
    or
    `),q(m.$$.fragment),j=h("."),w=x(),S=O(),this.h()},l(r){e=C(r,"SECTION",{"aria-roledescription":!0,class:!0});var s=T(e);t=C(s,"H1",{class:!0});var _=T(t);o=d(_,n[0]),_.forEach(f),u=L(s),l=C(s,"P",{class:!0});var k=T(l);p=d(k,"Uh oh. There's an error."),k.forEach(f),$=L(s),i=C(s,"P",{class:!0});var E=T(i);P(a.$$.fragment,E),N=d(E,`
    or
    `),P(m.$$.fragment,E),j=d(E,"."),E.forEach(f),s.forEach(f),w=L(r),S=O(),this.h()},h(){b(t,"class","text-[12rem] font-semibold "),b(l,"class","-mt-6 mb-5 text-lg"),b(i,"class","text-lg"),b(e,"aria-roledescription","error"),b(e,"class","text-center align-middle mt-32")},m(r,s){v(r,e,s),c(e,t),c(t,o),c(e,u),c(e,l),c(l,p),c(e,$),c(e,i),U(a,i,null),c(i,N),U(m,i,null),c(i,j),v(r,w,s),v(r,S,s),g=!0},p(r,[s]){(!g||s&1)&&F(o,r[0]);const _={};s&4&&(_.href=r[2]),s&64&&(_.$$scope={dirty:s,ctx:r}),a.$set(_);const k={};s&64&&(k.$$scope={dirty:s,ctx:r}),m.$set(k)},i(r){g||(B(a.$$.fragment,r),B(m.$$.fragment,r),g=!0)},o(r){D(a.$$.fragment,r),D(m.$$.fragment,r),g=!1},d(r){r&&f(e),H(a),H(m),r&&f(w),r&&f(S)}}}function Y(n,e,t){let o,u;G(n,Q,a=>t(3,u=a));let{error:l=null}=e,{status:p=500}=e;R(l)&&(p=l.statusCode);const $=J();K(()=>{$("clearError",{})});const i=()=>{window.location.reload()};return n.$$set=a=>{"error"in a&&t(1,l=a.error),"status"in a&&t(0,p=a.status)},n.$$.update=()=>{n.$$.dirty&8&&t(2,o=u.url.toString())},[p,l,o,u,i]}class ae extends M{constructor(e){super(),z(this,e,Y,X,A,{error:1,status:0})}}export{ae as E};