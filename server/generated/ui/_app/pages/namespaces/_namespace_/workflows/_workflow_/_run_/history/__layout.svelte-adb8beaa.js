var Ke=Object.defineProperty;var re=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var Oe=(n,e,t)=>e in n?Ke(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Te=(n,e)=>{for(var t in e||(e={}))Ce.call(e,t)&&Oe(n,t,e[t]);if(re)for(var t of re(e))Fe.call(e,t)&&Oe(n,t,e[t]);return n};var Ve=(n,e)=>{var t={};for(var s in n)Ce.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&re)for(var s of re(n))e.indexOf(s)<0&&Fe.call(n,s)&&(t[s]=n[s]);return t};import{S as Z,i as x,s as ee,e as v,c as $,a as b,d as _,b as w,U,g as T,W as Qe,n as Ue,o as H,p as ze,q as N,I as le,ah as Xe,K as oe,M as ie,N as fe,O as ce,P as Ye,w as J,k,x as R,m as I,y as B,L as d,B as M,aL as Ze,T as pe,r as xe,t as C,h as F,a1 as et,aM as tt,l as je,v as st,aF as nt,f as Le,aN as rt,aO as at,aP as lt,aQ as ot}from"../../../../../../../chunks/vendor-9a5c5afd.js";import{h as it,c as he,r as ft,a as ct}from"../../../../../../../chunks/route-for-api-64432365.js";import{t as ut}from"../../../../../../../chunks/index-f6ad4416.js";import{c as mt,b as ae,g as Je}from"../../../../../../../chunks/route-for-f402e023.js";import{p as ue}from"../../../../../../../chunks/stores-3140227a.js";import{g as dt}from"../../../../../../../chunks/get-context-148b86cd.js";import{C as Re}from"../../../../../../../chunks/code-block-3e161d8f.js";import{f as _t}from"../../../../../../../chunks/format-date-6527f144.js";import"../../../../../../../chunks/navigation-093db9e2.js";import"../../../../../../../chunks/singletons-a6a7384f.js";import"../../../../../../../chunks/notifications-db2a548d.js";import"../../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../../chunks/data-converter-config-d3c9f3cb.js";import"../../../../../../../chunks/atob-5f9d7101.js";const qe=(n={},e={})=>{const t=Te({},n);for(const s of Object.keys(e)){const a=t[s];Array.isArray(a)?t[s]=t[s].concat(e[s]):typeof a=="object"&&!Array.isArray(a)?t[s]=qe(t[s],e[s]):t[s]=e[s]}return t},Ge=async(n,{onStart:e,onUpdate:t,onComplete:s,onError:a=it,token:l,previousProps:o}={})=>{!o&&he(e)&&e();try{const i=await n(l),{nextPageToken:r}=i,u=Ve(i,["nextPageToken"]),m=qe(o,u);return he(t)&&t(m,u),r?Ge(n,{onStart:e,onUpdate:t,onComplete:s,token:r,previousProps:m}):(he(s)&&s(m),m)}catch(c){a(c)}},We=async({namespace:n,executionId:e,runId:t,onStart:s,onUpdate:a,onComplete:l},o=fetch)=>(await Ge(async c=>ft(ct("events",{namespace:n,executionId:e,runId:t}),{token:c,request:o}),{onStart:s,onUpdate:a,onComplete:l})).history.events,gt=async(n,e=fetch)=>We(n,e).then(ut),ht=n=>{var l,o,i,c;let e,t;const s=n==null?void 0:n.find(r=>!!r.workflowExecutionStartedEventAttributes),a=n==null?void 0:n.find(r=>!!r.workflowExecutionCompletedEventAttributes);return s&&(e=JSON.stringify((o=(l=s==null?void 0:s.workflowExecutionStartedEventAttributes)==null?void 0:l.input)==null?void 0:o.payloads)),a&&(t=JSON.stringify((c=(i=a==null?void 0:a.workflowExecutionCompletedEventAttributes)==null?void 0:i.result)==null?void 0:c.payloads)),{input:e,result:t}};function pt(n){let e;const t=n[7].default,s=oe(t,n,n[6],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),e=!0},p(a,l){s&&s.p&&(!e||l&64)&&ie(s,t,a,a[6],e?ce(t,a[6],l,null):fe(a[6]),null)},i(a){e||(N(s,a),e=!0)},o(a){H(s,a),e=!1},d(a){s&&s.d(a)}}}function vt(n){let e,t,s,a;t=new Ye({props:{icon:n[0],scale:n[2]}});const l=n[7].default,o=oe(l,n,n[6],null);return{c(){e=v("div"),J(t.$$.fragment),s=k(),o&&o.c(),this.h()},l(i){e=$(i,"DIV",{class:!0});var c=b(e);R(t.$$.fragment,c),s=I(c),o&&o.l(c),c.forEach(_),this.h()},h(){w(e,"class","flex gap-2 items-center")},m(i,c){T(i,e,c),B(t,e,null),d(e,s),o&&o.m(e,null),a=!0},p(i,c){const r={};c&1&&(r.icon=i[0]),c&4&&(r.scale=i[2]),t.$set(r),o&&o.p&&(!a||c&64)&&ie(o,l,i,i[6],a?ce(l,i[6],c,null):fe(i[6]),null)},i(i){a||(N(t.$$.fragment,i),N(o,i),a=!0)},o(i){H(t.$$.fragment,i),H(o,i),a=!1},d(i){i&&_(e),M(t),o&&o.d(i)}}}function $t(n){let e,t,s,a,l,o,i;const c=[vt,pt],r=[];function u(m,f){return m[0]?0:1}return t=u(n),s=r[t]=c[t](n),{c(){e=v("a"),s.c(),this.h()},l(m){e=$(m,"A",{class:!0,href:!0});var f=b(e);s.l(f),f.forEach(_),this.h()},h(){w(e,"class","border-2 py-2 px-4 hover:text-white hover:bg-gray-600 flex items-center justify-center svelte-1orl6nd"),w(e,"href",a=n[3]+n[5].url.search),U(e,"rounded-lg",!n[1]),U(e,"active",n[5].url.pathname.includes(n[4])),U(e,"group",n[1])},m(m,f){T(m,e,f),r[t].m(e,null),l=!0,o||(i=Qe(e,"click",n[8]),o=!0)},p(m,[f]){let E=t;t=u(m),t===E?r[t].p(m,f):(Ue(),H(r[E],1,1,()=>{r[E]=null}),ze(),s=r[t],s?s.p(m,f):(s=r[t]=c[t](m),s.c()),N(s,1),s.m(e,null)),(!l||f&40&&a!==(a=m[3]+m[5].url.search))&&w(e,"href",a),f&2&&U(e,"rounded-lg",!m[1]),f&48&&U(e,"active",m[5].url.pathname.includes(m[4])),f&2&&U(e,"group",m[1])},i(m){l||(N(s),l=!0)},o(m){H(s),l=!1},d(m){m&&_(e),r[t].d(),o=!1,i()}}}function bt(n,e,t){let s;le(n,ue,f=>t(5,s=f));let{$$slots:a={},$$scope:l}=e,{icon:o}=e,{group:i=dt("group")}=e,{scale:c=1}=e,{href:r="#"}=e,{base:u=r}=e;function m(f){Xe.call(this,n,f)}return n.$$set=f=>{"icon"in f&&t(0,o=f.icon),"group"in f&&t(1,i=f.group),"scale"in f&&t(2,c=f.scale),"href"in f&&t(3,r=f.href),"base"in f&&t(4,u=f.base),"$$scope"in f&&t(6,l=f.$$scope)},[o,i,c,r,u,s,l,a,m]}class Y extends Z{constructor(e){super();x(this,e,bt,$t,ee,{icon:0,group:1,scale:2,href:3,base:4})}}function wt(n){let e,t;return e=new Y({props:{icon:Ze}}),e.$on("click",n[0]),{c(){J(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,a){B(e,s,a),t=!0},p:pe,i(s){t||(N(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function Et(n,e,t){let s;le(n,ue,c=>t(1,s=c));const{workflow:a,run:l,namespace:o}=s.params;return[async()=>{const c=await We({namespace:o,executionId:a,runId:l}),r=JSON.stringify({events:c},null,2);u(r,`${l}/events.json`,"text/plain");function u(m,f,E){const g=document.createElement("a"),p=new Blob([m],{type:E});g.href=URL.createObjectURL(p),g.download=f,g.click()}}]}class yt extends Z{constructor(e){super();x(this,e,Et,wt,ee,{})}}function kt(n){let e,t;const s=n[1].default,a=oe(s,n,n[0],null);return{c(){e=v("div"),a&&a.c(),this.h()},l(l){e=$(l,"DIV",{class:!0});var o=b(e);a&&a.l(o),o.forEach(_),this.h()},h(){w(e,"class","flex")},m(l,o){T(l,e,o),a&&a.m(e,null),t=!0},p(l,[o]){a&&a.p&&(!t||o&1)&&ie(a,s,l,l[0],t?ce(s,l[0],o,null):fe(l[0]),null)},i(l){t||(N(a,l),t=!0)},o(l){H(a,l),t=!1},d(l){l&&_(e),a&&a.d(l)}}}function It(n,e,t){let{$$slots:s={},$$scope:a}=e;return xe("group",!0),n.$$set=l=>{"$$scope"in l&&t(0,a=l.$$scope)},[a,s]}class At extends Z{constructor(e){super();x(this,e,It,kt,ee,{})}}function Be(n,e,t){const s=n.slice();return s[6]=e[t].id,s[7]=nt(e[t],["id"]),s}function St(n){let e,t,s,a,l,o=[],i=new Map,c,r,u,m,f=n[0];const E=g=>g[6];for(let g=0;g<f.length;g+=1){let p=Be(n,f,g),A=E(p);i.set(A,o[g]=Me(A,p))}return{c(){e=v("section"),t=v("h3"),s=C("Pending Activities"),a=k(),l=v("section");for(let g=0;g<o.length;g+=1)o[g].c();c=k(),r=v("div"),u=v("a"),m=C("Show all"),this.h()},l(g){e=$(g,"SECTION",{class:!0});var p=b(e);t=$(p,"H3",{class:!0});var A=b(t);s=F(A,"Pending Activities"),A.forEach(_),a=I(p),l=$(p,"SECTION",{class:!0});var S=b(l);for(let L=0;L<o.length;L+=1)o[L].l(S);S.forEach(_),c=I(p),r=$(p,"DIV",{class:!0});var P=b(r);u=$(P,"A",{href:!0,class:!0});var O=b(u);m=F(O,"Show all"),O.forEach(_),P.forEach(_),p.forEach(_),this.h()},h(){w(t,"class","text-lg font-medium mb-4"),w(l,"class","w-full table-auto space-x-4"),w(u,"href",n[1]),w(u,"class","border-b-2 border-blue-600"),w(r,"class","text-right"),w(e,"class","border-2 border-gray-300 rounded-lg p-4")},m(g,p){T(g,e,p),d(e,t),d(t,s),d(e,a),d(e,l);for(let A=0;A<o.length;A+=1)o[A].m(l,null);d(e,c),d(e,r),d(r,u),d(u,m)},p(g,p){p&3&&(f=g[0],o=et(o,p,E,1,g,f,i,l,tt,Me,null,Be))},d(g){g&&_(e);for(let p=0;p<o.length;p+=1)o[p].d()}}}function Me(n,e){var $e;let t,s,a=e[7].activityId+"",l,o,i,c,r,u,m,f,E,g=(($e=e[7].activityType)==null?void 0:$e.name)+"",p,A,S,P,O,L,D,h,y,q=e[7].lastFailure+"",W,K,G,V,z,me,de,X,ve=_t(e[7].lastHeartbeatTime)+"",_e,ge;return{key:n,first:null,c(){t=v("a"),s=v("div"),l=C(a),o=k(),i=v("div"),c=v("div"),r=v("h4"),u=C("Activity Name"),m=k(),f=v("p"),E=v("span"),p=C(g),A=k(),S=v("div"),P=v("div"),O=v("h3"),L=C("Last Failure"),D=k(),h=v("pre"),y=v("code"),W=C(q),K=k(),G=v("div"),V=v("div"),z=v("h4"),me=C("Last Heartbeat Time"),de=k(),X=v("p"),_e=C(ve),ge=k(),this.h()},l(Q){t=$(Q,"A",{class:!0,href:!0});var j=b(t);s=$(j,"DIV",{class:!0});var be=b(s);l=F(be,a),be.forEach(_),o=I(j),i=$(j,"DIV",{class:!0});var we=b(i);c=$(we,"DIV",{class:!0});var te=b(c);r=$(te,"H4",{});var Ee=b(r);u=F(Ee,"Activity Name"),Ee.forEach(_),m=I(te),f=$(te,"P",{});var ye=b(f);E=$(ye,"SPAN",{class:!0});var ke=b(E);p=F(ke,g),ke.forEach(_),ye.forEach(_),te.forEach(_),we.forEach(_),A=I(j),S=$(j,"DIV",{class:!0});var Ie=b(S);P=$(Ie,"DIV",{class:!0});var se=b(P);O=$(se,"H3",{});var Ae=b(O);L=F(Ae,"Last Failure"),Ae.forEach(_),D=I(se),h=$(se,"PRE",{style:!0,class:!0});var Se=b(h);y=$(Se,"CODE",{class:!0});var De=b(y);W=F(De,q),De.forEach(_),Se.forEach(_),se.forEach(_),Ie.forEach(_),K=I(j),G=$(j,"DIV",{class:!0});var He=b(G);V=$(He,"DIV",{class:!0});var ne=b(V);z=$(ne,"H4",{});var Ne=b(z);me=F(Ne,"Last Heartbeat Time"),Ne.forEach(_),de=I(ne),X=$(ne,"P",{});var Pe=b(X);_e=F(Pe,ve),Pe.forEach(_),ne.forEach(_),He.forEach(_),ge=I(j),j.forEach(_),this.h()},h(){w(s,"class","text-left font-normal text-gray-500 w-40"),w(E,"class","bg-gray-300 text-gray-700 px-2"),w(c,"class","flex gap-2"),w(i,"class","w-full"),w(y,"class","language-json"),Le(h,"padding","0 1em"),Le(h,"margin","0"),w(h,"class","rounded-lg"),w(P,"class","flex gap-2"),w(S,"class","w-full"),w(V,"class","flex gap-2"),w(G,"class","w-full"),w(t,"class","flex content-between w-full border-b-2 border-gray-300 p-2 last-of-type:border-b-0 hover:bg-gray-50"),w(t,"href",e[1]),this.first=t},m(Q,j){T(Q,t,j),d(t,s),d(s,l),d(t,o),d(t,i),d(i,c),d(c,r),d(r,u),d(c,m),d(c,f),d(f,E),d(E,p),d(t,A),d(t,S),d(S,P),d(P,O),d(O,L),d(P,D),d(P,h),d(h,y),d(y,W),d(t,K),d(t,G),d(G,V),d(V,z),d(z,me),d(V,de),d(V,X),d(X,_e),d(t,ge)},p(Q,j){e=Q},d(Q){Q&&_(t)}}}function Dt(n){let e,t=n[0].length&&St(n);return{c(){t&&t.c(),e=je()},l(s){t&&t.l(s),e=je()},m(s,a){t&&t.m(s,a),T(s,e,a)},p(s,[a]){s[0].length&&t.p(s,a)},i:pe,o:pe,d(s){t&&t.d(s),s&&_(e)}}}function Ht(n,e,t){let s;le(n,ue,r=>t(2,s=r));const{pendingActivities:a}=s.stuff.workflow,{namespace:l,workflow:o,run:i}=s.params,c=mt({namespace:l,workflow:o,run:i});return st(()=>{window.Prism.highlightAll()}),[a,c]}class Nt extends Z{constructor(e){super();x(this,e,Ht,Dt,ee,{})}}function Pt(n){let e;return{c(){e=C("Summary")},l(t){e=F(t,"Summary")},m(t,s){T(t,e,s)},d(t){t&&_(e)}}}function Ot(n){let e;return{c(){e=C("Full")},l(t){e=F(t,"Full")},m(t,s){T(t,e,s)},d(t){t&&_(e)}}}function Ct(n){let e;return{c(){e=C("Compact")},l(t){e=F(t,"Compact")},m(t,s){T(t,e,s)},d(t){t&&_(e)}}}function Ft(n){let e;return{c(){e=C("JSON")},l(t){e=F(t,"JSON")},m(t,s){T(t,e,s)},d(t){t&&_(e)}}}function Tt(n){let e,t,s,a,l,o,i,c;return e=new Y({props:{icon:rt,base:ae(n[3]("summary")),href:Je(n[3]("summary",n[0].params.eventId||"1")),$$slots:{default:[Pt]},$$scope:{ctx:n}}}),s=new Y({props:{icon:at,href:ae(n[3]("full")),$$slots:{default:[Ot]},$$scope:{ctx:n}}}),l=new Y({props:{icon:lt,href:ae(n[3]("compact")),$$slots:{default:[Ct]},$$scope:{ctx:n}}}),i=new Y({props:{icon:ot,href:ae(n[3]("json")),$$slots:{default:[Ft]},$$scope:{ctx:n}}}),{c(){J(e.$$.fragment),t=k(),J(s.$$.fragment),a=k(),J(l.$$.fragment),o=k(),J(i.$$.fragment)},l(r){R(e.$$.fragment,r),t=I(r),R(s.$$.fragment,r),a=I(r),R(l.$$.fragment,r),o=I(r),R(i.$$.fragment,r)},m(r,u){B(e,r,u),T(r,t,u),B(s,r,u),T(r,a,u),B(l,r,u),T(r,o,u),B(i,r,u),c=!0},p(r,u){const m={};u&1&&(m.href=Je(r[3]("summary",r[0].params.eventId||"1"))),u&256&&(m.$$scope={dirty:u,ctx:r}),e.$set(m);const f={};u&256&&(f.$$scope={dirty:u,ctx:r}),s.$set(f);const E={};u&256&&(E.$$scope={dirty:u,ctx:r}),l.$set(E);const g={};u&256&&(g.$$scope={dirty:u,ctx:r}),i.$set(g)},i(r){c||(N(e.$$.fragment,r),N(s.$$.fragment,r),N(l.$$.fragment,r),N(i.$$.fragment,r),c=!0)},o(r){H(e.$$.fragment,r),H(s.$$.fragment,r),H(l.$$.fragment,r),H(i.$$.fragment,r),c=!1},d(r){M(e,r),r&&_(t),M(s,r),r&&_(a),M(l,r),r&&_(o),M(i,r)}}}function Vt(n){let e,t,s,a,l,o,i,c,r,u,m,f,E,g,p,A,S,P,O;s=new Re({props:{heading:"Input",content:n[1],framed:!0}}),l=new Re({props:{heading:"Result",content:n[2],framed:!0}}),i=new Nt({}),p=new At({props:{$$slots:{default:[Tt]},$$scope:{ctx:n}}}),S=new yt({});const L=n[7].default,D=oe(L,n,n[8],null);return{c(){e=v("section"),t=v("div"),J(s.$$.fragment),a=k(),J(l.$$.fragment),o=k(),J(i.$$.fragment),c=k(),r=v("section"),u=v("nav"),m=v("h3"),f=C("Event History"),E=k(),g=v("div"),J(p.$$.fragment),A=k(),J(S.$$.fragment),P=k(),D&&D.c(),this.h()},l(h){e=$(h,"SECTION",{class:!0});var y=b(e);t=$(y,"DIV",{class:!0});var q=b(t);R(s.$$.fragment,q),a=I(q),R(l.$$.fragment,q),q.forEach(_),o=I(y),R(i.$$.fragment,y),c=I(y),r=$(y,"SECTION",{id:!0});var W=b(r);u=$(W,"NAV",{class:!0});var K=b(u);m=$(K,"H3",{class:!0});var G=b(m);f=F(G,"Event History"),G.forEach(_),E=I(K),g=$(K,"DIV",{class:!0});var V=b(g);R(p.$$.fragment,V),A=I(V),R(S.$$.fragment,V),V.forEach(_),K.forEach(_),P=I(W),D&&D.l(W),W.forEach(_),y.forEach(_),this.h()},h(){w(t,"class","flex gap-4"),w(m,"class","text-lg font-medium"),w(g,"class","flex gap-4"),w(u,"class","flex gap-4 justify-between items-end pb-4"),w(r,"id","event-history"),w(e,"class","flex flex-col gap-4")},m(h,y){T(h,e,y),d(e,t),B(s,t,null),d(t,a),B(l,t,null),d(e,o),B(i,e,null),d(e,c),d(e,r),d(r,u),d(u,m),d(m,f),d(u,E),d(u,g),B(p,g,null),d(g,A),B(S,g,null),d(r,P),D&&D.m(r,null),O=!0},p(h,[y]){const q={};y&257&&(q.$$scope={dirty:y,ctx:h}),p.$set(q),D&&D.p&&(!O||y&256)&&ie(D,L,h,h[8],O?ce(L,h[8],y,null):fe(h[8]),null)},i(h){O||(N(s.$$.fragment,h),N(l.$$.fragment,h),N(i.$$.fragment,h),N(p.$$.fragment,h),N(S.$$.fragment,h),N(D,h),O=!0)},o(h){H(s.$$.fragment,h),H(l.$$.fragment,h),H(i.$$.fragment,h),H(p.$$.fragment,h),H(S.$$.fragment,h),H(D,h),O=!1},d(h){h&&_(e),M(s),M(l),M(i),M(p),M(S),D&&D.d(h)}}}const xt=async function({params:n,stuff:e,fetch:t}){const{workflow:s}=e,{namespace:a}=n,l={namespace:a,executionId:s.id,runId:s.runId},{events:o,eventGroups:i}=await gt(l,t);return{props:{namespace:a,workflow:s,events:o,eventGroups:i},stuff:{events:o,eventGroups:i}}};function jt(n,e,t){let s;le(n,ue,f=>t(0,s=f));let{$$slots:a={},$$scope:l}=e,{namespace:o}=e,{workflow:i}=e,{events:c}=e;const{input:r,result:u}=ht(c),m=(f,E)=>({namespace:o,workflow:i.id,run:i.runId,view:f,eventId:E});return n.$$set=f=>{"namespace"in f&&t(4,o=f.namespace),"workflow"in f&&t(5,i=f.workflow),"events"in f&&t(6,c=f.events),"$$scope"in f&&t(8,l=f.$$scope)},[s,r,u,m,o,i,c,a,l]}class es extends Z{constructor(e){super();x(this,e,jt,Vt,ee,{namespace:4,workflow:5,events:6})}}export{es as default,xt as load};
