import{S as Q,i as z,s as J,e as h,t as O,c as g,a as N,h as H,d,R as F,b as a,g as C,T as c,U as W,k as M,w as G,m as V,x as S,y as U,q as B,o as L,B as x,V as X,N as Y,O as Z,P as ee,Q as te}from"../../chunks/index-4f955b1f.js";import{N as re,D as se,f as ae,a as ne,b as le,B as oe,E as ie}from"../../chunks/error-boundary-7876f7c0.js";import{f as ce}from"../../chunks/settings-service-f76ca13a.js";import{g as ue}from"../../chunks/navigation-3f1ea447.js";import{c as fe}from"../../chunks/route-for-a8f6a277.js";import"../../chunks/route-for-api-e81b76bd.js";import"../../chunks/index-eae5a65e.js";import"../../chunks/notifications-2d1c3827.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/index.es-3f7bba01.js";import"../../chunks/data-converter-config-728a6f58.js";import"../../chunks/stores-8f54f2cb.js";import"../../chunks/index-825e9062.js";import"../../chunks/error-22a906b7.js";import"../../chunks/singletons-d1fb5791.js";function me(m){let e;return{c(){e=O("Import")},l(s){e=H(s,"Import")},m(s,t){C(s,e,t)},d(s){s&&d(e)}}}function P(m){let e,s,t,r,u,_;return{c(){e=h("button"),s=O(`Logout
        `),t=h("img"),this.h()},l(o){e=g(o,"BUTTON",{class:!0});var l=N(e);s=H(l,`Logout
        `),t=g(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(d),this.h()},h(){F(t.src,r=m[0].picture)||a(t,"src",r),a(t,"alt","User Avatar"),a(t,"class","rounded-full h-6 w-6 ml-2.5"),a(e,"class","header-button min-w-min svelte-da4c40")},m(o,l){C(o,e,l),c(e,s),c(e,t),u||(_=W(e,"click",m[1]),u=!0)},p(o,l){l&1&&!F(t.src,r=o[0].picture)&&a(t,"src",r)},d(o){o&&d(e),u=!1,_()}}}function de(m){var i;let e,s,t,r,u,_,o,l,w,$,v,k,E,y,I,D,b;l=new re({props:{href:fe({importType:"events"}),$$slots:{default:[me]},$$scope:{ctx:m}}}),k=new se({});let p=((i=m[0])==null?void 0:i.email)&&P(m);return{c(){e=h("header"),s=h("div"),t=h("a"),r=h("img"),_=M(),o=h("div"),G(l.$$.fragment),w=M(),$=h("div"),v=h("div"),G(k.$$.fragment),E=M(),y=h("a"),I=O("Give Feedback"),D=M(),p&&p.c(),this.h()},l(n){e=g(n,"HEADER",{class:!0});var f=N(e);s=g(f,"DIV",{class:!0});var T=N(s);t=g(T,"A",{href:!0,class:!0});var A=N(t);r=g(A,"IMG",{src:!0,alt:!0,class:!0}),A.forEach(d),T.forEach(d),_=V(f),o=g(f,"DIV",{class:!0});var K=N(o);S(l.$$.fragment,K),K.forEach(d),w=V(f),$=g(f,"DIV",{class:!0});var q=N($);v=g(q,"DIV",{class:!0});var R=N(v);S(k.$$.fragment,R),R.forEach(d),E=V(q),y=g(q,"A",{class:!0,href:!0,target:!0});var j=N(y);I=H(j,"Give Feedback"),j.forEach(d),D=V(q),p&&p.l(q),q.forEach(d),f.forEach(d),this.h()},h(){F(r.src,u="/logo.svg")||a(r,"src",u),a(r,"alt","Temporal Logo"),a(r,"class","max-h-10"),a(t,"href","/"),a(t,"class","block"),a(s,"class","flex gap-4 col-span-1/2"),a(o,"class","flex gap-4 col-span-4"),a(v,"class","text-right"),a(y,"class","header-button svelte-da4c40"),a(y,"href","https://github.com/temporalio/ui/issues/new/choose"),a(y,"target","_blank"),a($,"class","flex justify-end gap-4 col-span-5 col-end-13 items-center"),a(e,"class","grid grid-rows-1 grid-cols-12 px-10 items-center bg-gray-900 shadow-lg gap-6")},m(n,f){C(n,e,f),c(e,s),c(s,t),c(t,r),c(e,_),c(e,o),U(l,o,null),c(e,w),c(e,$),c($,v),U(k,v,null),c($,E),c($,y),c(y,I),c($,D),p&&p.m($,null),b=!0},p(n,[f]){var A;const T={};f&4&&(T.$$scope={dirty:f,ctx:n}),l.$set(T),(A=n[0])!=null&&A.email?p?p.p(n,f):(p=P(n),p.c(),p.m($,null)):p&&(p.d(1),p=null)},i(n){b||(B(l.$$.fragment,n),B(k.$$.fragment,n),b=!0)},o(n){L(l.$$.fragment,n),L(k.$$.fragment,n),b=!1},d(n){n&&d(e),x(l),x(k),p&&p.d()}}}function pe(m,e,s){let{user:t}=e;const r=()=>ue("/auth/logout");return m.$$set=u=>{"user"in u&&s(0,t=u.user)},[t,r]}class he extends Q{constructor(e){super(),z(this,e,pe,de,J,{user:0})}}function ge(m){let e;const s=m[2].default,t=Y(s,m,m[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,u){t&&t.m(r,u),e=!0},p(r,u){t&&t.p&&(!e||u&8)&&Z(t,s,r,r[3],e?te(s,r[3],u,null):ee(r[3]),null)},i(r){e||(B(t,r),e=!0)},o(r){L(t,r),e=!1},d(r){t&&t.d(r)}}}function _e(m){let e,s,t,r,u,_,o,l,w,$,v,k,E,y,I,D,b,p;return w=new le({}),v=new oe({props:{cluster:m[1]}}),E=new he({props:{user:m[0]}}),b=new ie({props:{onError:$e,$$slots:{default:[ge]},$$scope:{ctx:m}}}),{c(){e=h("link"),s=h("link"),t=h("meta"),r=h("meta"),u=h("meta"),_=h("meta"),o=M(),l=h("main"),G(w.$$.fragment),$=M(),G(v.$$.fragment),k=M(),G(E.$$.fragment),y=M(),I=h("section"),D=h("div"),G(b.$$.fragment),this.h()},l(i){const n=X('[data-svelte="svelte-15ltrtv"]',document.head);e=g(n,"LINK",{rel:!0,href:!0}),s=g(n,"LINK",{rel:!0,href:!0}),t=g(n,"META",{property:!0,content:!0}),r=g(n,"META",{property:!0,content:!0}),u=g(n,"META",{property:!0,content:!0}),_=g(n,"META",{property:!0,content:!0}),n.forEach(d),o=V(i),l=g(i,"MAIN",{class:!0});var f=N(l);S(w.$$.fragment,f),$=V(f),S(v.$$.fragment,f),k=V(f),S(E.$$.fragment,f),y=V(f),I=g(f,"SECTION",{id:!0,class:!0});var T=N(I);D=g(T,"DIV",{class:!0});var A=N(D);S(b.$$.fragment,A),A.forEach(d),T.forEach(d),f.forEach(d),this.h()},h(){document.title="Temporal",a(e,"rel","manifest"),a(e,"href","/site.webmanifest"),a(s,"rel","apple-touch-icon"),a(s,"href","/apple-touch-icon.png"),a(t,"property","og:title"),a(t,"content","Temporal"),a(r,"property","og:type"),a(r,"content","website"),a(u,"property","og:url"),a(u,"content","https://temporal.io"),a(_,"property","og:image"),a(_,"content","/banner.png"),a(D,"class","flex flex-col h-full gap-4"),a(I,"id","content"),a(I,"class","h-full mx-10 mb-10 mt-8"),a(l,"class","flex flex-col h-screen")},m(i,n){c(document.head,e),c(document.head,s),c(document.head,t),c(document.head,r),c(document.head,u),c(document.head,_),C(i,o,n),C(i,l,n),U(w,l,null),c(l,$),U(v,l,null),c(l,k),U(E,l,null),c(l,y),c(l,I),c(I,D),U(b,D,null),p=!0},p(i,[n]){const f={};n&2&&(f.cluster=i[1]),v.$set(f);const T={};n&1&&(T.user=i[0]),E.$set(T);const A={};n&8&&(A.$$scope={dirty:n,ctx:i}),b.$set(A)},i(i){p||(B(w.$$.fragment,i),B(v.$$.fragment,i),B(E.$$.fragment,i),B(b.$$.fragment,i),p=!0)},o(i){L(w.$$.fragment,i),L(v.$$.fragment,i),L(E.$$.fragment,i),L(b.$$.fragment,i),p=!1},d(i){d(e),d(s),d(t),d(r),d(u),d(_),i&&d(o),i&&d(l),x(w),x(v),x(E),x(b)}}}const Ge=async function({url:m,fetch:e}){const s=await ce({url:m},e),t=await ae(e),r=await ne(s,e);return{props:{user:t,cluster:r}}},$e=()=>{};function ve(m,e,s){let{$$slots:t={},$$scope:r}=e,{user:u}=e,{cluster:_}=e;return m.$$set=o=>{"user"in o&&s(0,u=o.user),"cluster"in o&&s(1,_=o.cluster),"$$scope"in o&&s(3,r=o.$$scope)},[u,_,t,r]}class Se extends Q{constructor(e){super(),z(this,e,ve,_e,J,{user:0,cluster:1})}}export{Se as default,Ge as load};
