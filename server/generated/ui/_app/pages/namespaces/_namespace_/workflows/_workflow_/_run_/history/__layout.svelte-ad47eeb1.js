import{S as Ee,i as Ie,s as Ce,e as W,w as k,c as P,a as y,x as d,d as _,b as j,g as J,y as h,q as c,o as $,B as v,l as de,n as Se,p as Ne,I as Oe,k as b,t as re,m as E,h as oe,M as u,J as je,K as We,L as Pe,N as ye,al as De,a9 as pe}from"../../../../../../../chunks/index-4d40a842.js";import{g as Re,l as he,f as ee}from"../../../../../../../chunks/route-for-e4b4dbdd.js";import{f as te}from"../../../../../../../chunks/format-date-cc1b1b48.js";import{e as ne}from"../../../../../../../chunks/event-view-a82e2c63.js";import{c as Ve}from"../../../../../../../chunks/events-d5d159d5.js";import{T as Ue,a as we}from"../../../../../../../chunks/toggle-buttons-e32a26ec.js";import Fe from"./_pending-activties.svelte-f9b75c6b.js";import{E as Je}from"../../../../../../../chunks/empty-state-95d632e0.js";import ve from"./_input-and-results.svelte-db06f7c7.js";import z from"../_workflow-detail.svelte-7b93f2cb.js";import"../../../../../../../chunks/to-duration-271d3946.js";import"../../../../../../../chunks/index-af0e9636.js";import"../../../../../../../chunks/stores-9cf180cc.js";import"../../../../../../../chunks/persist-store-2422fd33.js";import"../../../../../../../chunks/events-service-c598ef82.js";import"../../../../../../../chunks/route-for-api-82025f31.js";import"../../../../../../../chunks/notifications-136c5477.js";import"../../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../../chunks/index-11d4e1b6.js";import"../../../../../../../chunks/is-http-8674ce27.js";import"../../../../../../../chunks/data-converter-config-f121db83.js";import"../../../../../../../chunks/atob-eb4fc9a1.js";import"../../../../../../../chunks/index-8821dfb5.js";import"../../../../../../../chunks/get-event-categorization-20095c1b.js";import"../../../../../../../chunks/simplify-attributes-988ed373.js";import"../../../../../../../chunks/with-loading-22689bcc.js";import"../../../../../../../chunks/index-9d61a9ea.js";import"../../../../../../../chunks/link-c1629635.js";import"../../../../../../../chunks/copyable-c13fdd7f.js";import"../../../../../../../chunks/format-camel-case-abb2903d.js";import"../../../../../../../chunks/code-block-3555fee3.js";function Te(o){let e,t,n;return t=new Je({props:{title:"An Error Occured",content:"Please make sure you have at least one worker running.",class:"my-0"}}),{c(){e=W("section"),k(t.$$.fragment),this.h()},l(a){e=P(a,"SECTION",{class:!0});var l=y(e);d(t.$$.fragment,l),l.forEach(_),this.h()},h(){j(e,"class","stack-trace svelte-wcmxvi")},m(a,l){J(a,e,l),h(t,e,null),n=!0},i(a){n||(c(t.$$.fragment,a),n=!0)},o(a){$(t.$$.fragment,a),n=!1},d(a){a&&_(e),v(t)}}}function Qe(o){let e,t,n=o[0]&&Te();return{c(){n&&n.c(),e=de()},l(a){n&&n.l(a),e=de()},m(a,l){n&&n.m(a,l),J(a,e,l),t=!0},p(a,[l]){a[0]?n?l&1&&c(n,1):(n=Te(),n.c(),c(n,1),n.m(e.parentNode,e)):n&&(Se(),$(n,1,1,()=>{n=null}),Ne())},i(a){t||(c(n),t=!0)},o(a){$(n),t=!1},d(a){n&&n.d(a),a&&_(e)}}}function qe(o,e,t){let n;var a;let{workflow:l}=e,{workers:f}=e;return o.$$set=r=>{"workflow"in r&&t(1,l=r.workflow),"workers"in r&&t(2,f=r.workers)},o.$$.update=()=>{o.$$.dirty&14&&t(0,n=l.isRunning&&!(!(t(3,a=f==null?void 0:f.pollers)===null||a===void 0)&&a.length))},[n,l,f,a]}class Ae extends Ee{constructor(e){super(),Ie(this,e,qe,Qe,Ce,{workflow:1,workers:2})}}function be(o){var n,a,l;let e,t;return e=new z({props:{title:"Parent",content:(n=o[1].parent)==null?void 0:n.workflowId,href:he({namespace:o[0],workflow:(a=o[1].parent)==null?void 0:a.workflowId,run:(l=o[1].parent)==null?void 0:l.runId})}}),{c(){k(e.$$.fragment)},l(f){d(e.$$.fragment,f)},m(f,r){h(e,f,r),t=!0},p(f,r){var C,w,S;const i={};r&2&&(i.content=(C=f[1].parent)==null?void 0:C.workflowId),r&3&&(i.href=he({namespace:f[0],workflow:(w=f[1].parent)==null?void 0:w.workflowId,run:(S=f[1].parent)==null?void 0:S.runId})),e.$set(i)},i(f){t||(c(e.$$.fragment,f),t=!0)},o(f){$(e.$$.fragment,f),t=!1},d(f){v(e,f)}}}function He(o){let e;return{c(){e=re("Timeline")},l(t){e=oe(t,"Timeline")},m(t,n){J(t,e,n)},d(t){t&&_(e)}}}function Be(o){let e;return{c(){e=re("Compact")},l(t){e=oe(t,"Compact")},m(t,n){J(t,e,n)},d(t){t&&_(e)}}}function Ke(o){let e;return{c(){e=re("JSON")},l(t){e=oe(t,"JSON")},m(t,n){J(t,e,n)},d(t){t&&_(e)}}}function Le(o){let e,t,n,a,l,f;return e=new we({props:{icon:"feed",base:ee(o[4]("feed")),href:ee(o[4]("feed")),active:o[3]==="feed","data-cy":"feed",$$slots:{default:[He]},$$scope:{ctx:o}}}),e.$on("click",o[7]),n=new we({props:{icon:"compact",href:ee(o[4]("compact")),active:o[3]==="compact","data-cy":"compact",$$slots:{default:[Be]},$$scope:{ctx:o}}}),n.$on("click",o[8]),l=new we({props:{icon:"json",href:ee(o[4]("json")),active:o[3]==="json","data-cy":"json",$$slots:{default:[Ke]},$$scope:{ctx:o}}}),l.$on("click",o[9]),{c(){k(e.$$.fragment),t=b(),k(n.$$.fragment),a=b(),k(l.$$.fragment)},l(r){d(e.$$.fragment,r),t=E(r),d(n.$$.fragment,r),a=E(r),d(l.$$.fragment,r)},m(r,i){h(e,r,i),J(r,t,i),h(n,r,i),J(r,a,i),h(l,r,i),f=!0},p(r,i){const C={};i&8&&(C.active=r[3]==="feed"),i&1024&&(C.$$scope={dirty:i,ctx:r}),e.$set(C);const w={};i&8&&(w.active=r[3]==="compact"),i&1024&&(w.$$scope={dirty:i,ctx:r}),n.$set(w);const S={};i&8&&(S.active=r[3]==="json"),i&1024&&(S.$$scope={dirty:i,ctx:r}),l.$set(S)},i(r){f||(c(e.$$.fragment,r),c(n.$$.fragment,r),c(l.$$.fragment,r),f=!0)},o(r){$(e.$$.fragment,r),$(n.$$.fragment,r),$(l.$$.fragment,r),f=!1},d(r){v(e,r),r&&_(t),v(n,r),r&&_(a),v(l,r)}}}function Me(o){var ge;let e,t,n,a,l,f,r,i,C,w,S,N,Z,g,O,se,D,ae,R,Q,le,q,fe,A,ie,V,U,G,me,ce,H,F,ue,X;n=new z({props:{title:"Workflow Type",content:o[1].name}}),l=new z({props:{title:"Run ID",content:o[1].runId}}),i=new z({props:{title:"Start Time",content:te(o[1].startTime,"UTC")}}),w=new z({props:{title:"Close Time",content:te(o[1].endTime,"UTC")}}),N=new z({props:{title:"Task Queue",content:o[1].taskQueue,href:Re(o[5])}});let p=((ge=o[1])==null?void 0:ge.parent)&&be(o);O=new z({props:{title:"State Transitions",content:o[1].stateTransitionCount}}),D=new Ae({props:{workflow:o[1],workers:o[2]}}),Q=new ve({props:{type:"input"}}),q=new ve({props:{type:"results"}}),A=new Fe({}),F=new Ue({props:{$$slots:{default:[Le]},$$scope:{ctx:o}}});const $e=o[6].default,I=Oe($e,o,o[10],null);return{c(){e=W("section"),t=W("section"),k(n.$$.fragment),a=b(),k(l.$$.fragment),f=b(),r=W("div"),k(i.$$.fragment),C=b(),k(w.$$.fragment),S=b(),k(N.$$.fragment),Z=b(),p&&p.c(),g=b(),k(O.$$.fragment),se=b(),k(D.$$.fragment),ae=b(),R=W("section"),k(Q.$$.fragment),le=b(),k(q.$$.fragment),fe=b(),k(A.$$.fragment),ie=b(),V=W("section"),U=W("nav"),G=W("h3"),me=re("Recent Events"),ce=b(),H=W("div"),k(F.$$.fragment),ue=b(),I&&I.c(),this.h()},l(s){e=P(s,"SECTION",{class:!0});var m=y(e);t=P(m,"SECTION",{class:!0});var T=y(t);d(n.$$.fragment,T),a=E(T),d(l.$$.fragment,T),f=E(T),r=P(T,"DIV",{class:!0});var B=y(r);d(i.$$.fragment,B),C=E(B),d(w.$$.fragment,B),B.forEach(_),S=E(T),d(N.$$.fragment,T),Z=E(T),p&&p.l(T),g=E(T),d(O.$$.fragment,T),T.forEach(_),se=E(m),d(D.$$.fragment,m),ae=E(m),R=P(m,"SECTION",{class:!0});var K=y(R);d(Q.$$.fragment,K),le=E(K),d(q.$$.fragment,K),K.forEach(_),fe=E(m),d(A.$$.fragment,m),ie=E(m),V=P(m,"SECTION",{id:!0});var L=y(V);U=P(L,"NAV",{class:!0});var M=y(U);G=P(M,"H3",{class:!0});var x=y(G);me=oe(x,"Recent Events"),x.forEach(_),ce=E(M),H=P(M,"DIV",{id:!0,class:!0});var Y=y(H);d(F.$$.fragment,Y),Y.forEach(_),M.forEach(_),ue=E(L),I&&I.l(L),L.forEach(_),m.forEach(_),this.h()},h(){j(r,"class","flex flex-col gap-1 md:flex-row md:gap-6"),j(t,"class","flex flex-col gap-1"),j(R,"class","flex w-full flex-col gap-4 lg:flex-row"),j(G,"class","text-lg font-medium"),j(H,"id","event-view-toggle"),j(H,"class","flex gap-4"),j(U,"class","flex items-end justify-between gap-4 pb-4"),j(V,"id","event-history"),j(e,"class","flex flex-col gap-4")},m(s,m){J(s,e,m),u(e,t),h(n,t,null),u(t,a),h(l,t,null),u(t,f),u(t,r),h(i,r,null),u(r,C),h(w,r,null),u(t,S),h(N,t,null),u(t,Z),p&&p.m(t,null),u(t,g),h(O,t,null),u(e,se),h(D,e,null),u(e,ae),u(e,R),h(Q,R,null),u(R,le),h(q,R,null),u(e,fe),h(A,e,null),u(e,ie),u(e,V),u(V,U),u(U,G),u(G,me),u(U,ce),u(U,H),h(F,H,null),u(V,ue),I&&I.m(V,null),X=!0},p(s,[m]){var ke;const T={};m&2&&(T.content=s[1].name),n.$set(T);const B={};m&2&&(B.content=s[1].runId),l.$set(B);const K={};m&2&&(K.content=te(s[1].startTime,"UTC")),i.$set(K);const L={};m&2&&(L.content=te(s[1].endTime,"UTC")),w.$set(L);const M={};m&2&&(M.content=s[1].taskQueue),N.$set(M),(ke=s[1])!=null&&ke.parent?p?(p.p(s,m),m&2&&c(p,1)):(p=be(s),p.c(),c(p,1),p.m(t,g)):p&&(Se(),$(p,1,1,()=>{p=null}),Ne());const x={};m&2&&(x.content=s[1].stateTransitionCount),O.$set(x);const Y={};m&2&&(Y.workflow=s[1]),m&4&&(Y.workers=s[2]),D.$set(Y);const _e={};m&1032&&(_e.$$scope={dirty:m,ctx:s}),F.$set(_e),I&&I.p&&(!X||m&1024)&&je(I,$e,s,s[10],X?Pe($e,s[10],m,null):We(s[10]),null)},i(s){X||(c(n.$$.fragment,s),c(l.$$.fragment,s),c(i.$$.fragment,s),c(w.$$.fragment,s),c(N.$$.fragment,s),c(p),c(O.$$.fragment,s),c(D.$$.fragment,s),c(Q.$$.fragment,s),c(q.$$.fragment,s),c(A.$$.fragment,s),c(F.$$.fragment,s),c(I,s),X=!0)},o(s){$(n.$$.fragment,s),$(l.$$.fragment,s),$(i.$$.fragment,s),$(w.$$.fragment,s),$(N.$$.fragment,s),$(p),$(O.$$.fragment,s),$(D.$$.fragment,s),$(Q.$$.fragment,s),$(q.$$.fragment,s),$(A.$$.fragment,s),$(F.$$.fragment,s),$(I,s),X=!1},d(s){s&&_(e),v(n),v(l),v(i),v(w),v(N),p&&p.d(),v(O),v(D),v(Q),v(q),v(A),v(F),I&&I.d(s)}}}const Ct=async function({params:o,stuff:e}){const{workflow:t,workers:n}=e,{namespace:a}=o;return{props:{namespace:a,workflow:t,workers:n}}};function ze(o,e,t){let n;ye(o,ne,g=>t(3,n=g));let{$$slots:a={},$$scope:l}=e,{namespace:f}=e,{workflow:r}=e,{workers:i}=e;const C=(g,O)=>({namespace:f,workflow:r.id,run:r.runId,view:g,eventId:O}),w={namespace:f,workflow:r.id,run:r.runId};De(()=>{Ve()});const S=()=>pe(ne,n="feed",n),N=()=>pe(ne,n="compact",n),Z=()=>pe(ne,n="json",n);return o.$$set=g=>{"namespace"in g&&t(0,f=g.namespace),"workflow"in g&&t(1,r=g.workflow),"workers"in g&&t(2,i=g.workers),"$$scope"in g&&t(10,l=g.$$scope)},[f,r,i,n,C,w,a,S,N,Z,l]}class St extends Ee{constructor(e){super(),Ie(this,e,ze,Me,Ce,{namespace:0,workflow:1,workers:2})}}export{St as default,Ct as load};