import{S as v,i as g,s as h,w as f,x as u,y as p,q as c,o as $,B as d,N as w,k as b,e as k,t as j,m as E,c as C,a as I,h as T,d as m,b as L,g as _,M as q}from"../../chunks/index-604742bf.js";import{p as D}from"../../chunks/stores-810822a9.js";import{I as F}from"../../chunks/index-0574ae1f.js";import{N as O,n as S,a as V}from"../../chunks/_nav-row-56ea2046.js";import{T as y}from"../../chunks/tooltip-4b9b03e7.js";import{r as B,d as M}from"../../chunks/route-for-1f2060cd.js";import"../../chunks/persist-store-26f405dd.js";import"../../chunks/index-c9e619a8.js";import"../../chunks/copyable-6f962ac2.js";import"../../chunks/copy-to-clipboard-8832075c.js";function W(i){let e,r,t;return r=new F({props:{isCloud:i[0],name:"download",scale:1}}),{c(){e=k("div"),f(r.$$.fragment),this.h()},l(n){e=C(n,"DIV",{class:!0});var o=I(e);u(r.$$.fragment,o),o.forEach(m),this.h()},h(){L(e,"class","nav-icon svelte-vwdlej")},m(n,o){_(n,e,o),p(r,e,null),t=!0},p(n,o){const s={};o&1&&(s.isCloud=n[0]),r.$set(s)},i(n){t||(c(r.$$.fragment,n),t=!0)},o(n){$(r.$$.fragment,n),t=!1},d(n){n&&m(e),d(r)}}}function z(i){let e,r,t,n,o;return e=new y({props:{right:!0,hide:i[2],text:"Import",$$slots:{default:[W]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment),r=b(),t=k("div"),n=j("Import"),this.h()},l(s){u(e.$$.fragment,s),r=E(s),t=C(s,"DIV",{class:!0});var a=I(t);n=T(a,"Import"),a.forEach(m),this.h()},h(){L(t,"class","nav-title svelte-vwdlej")},m(s,a){p(e,s,a),_(s,r,a),_(s,t,a),q(t,n),o=!0},p(s,a){const l={};a&4&&(l.hide=s[2]),a&9&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(c(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){d(e,s),s&&m(r),s&&m(t)}}}function A(i){let e,r;return e=new V({props:{link:i[1].import,isCloud:i[0],$$slots:{default:[z]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,n){const o={};n&2&&(o.link=t[1].import),n&1&&(o.isCloud=t[0]),n&13&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function G(i){let e,r;return e=new O({props:{isCloud:i[0],linkList:i[1],$$slots:{top:[A]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,[n]){const o={};n&1&&(o.isCloud=t[0]),n&2&&(o.linkList=t[1]),n&15&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function H(i,e,r){let t;w(i,S,s=>r(2,t=s));let{isCloud:n}=e,{linkList:o}=e;return i.$$set=s=>{"isCloud"in s&&r(0,n=s.isCloud),"linkList"in s&&r(1,o=s.linkList)},[n,o,t]}class J extends v{constructor(e){super(),g(this,e,H,G,h,{isCloud:0,linkList:1})}}function K(i){let e,r;return e=new J({props:{linkList:i[0],isCloud:i[1]}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,[n]){const o={};n&1&&(o.linkList=t[0]),e.$set(o)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function P(i,e,r){let t,n,o;w(i,D,N=>r(5,o=N));var s,a;const{isCloud:l}=o.stuff.settings.runtimeEnvironment;return i.$$.update=()=>{i.$$.dirty&44&&r(4,t=r(3,a=r(2,s=o.stuff)===null||s===void 0?void 0:s.settings)===null||a===void 0?void 0:a.defaultNamespace),i.$$.dirty&16&&r(0,n={home:B({namespace:t}),import:M({importType:"events"})})},[n,l,s,a,t,o]}class rt extends v{constructor(e){super(),g(this,e,P,K,h,{})}}export{rt as default};
