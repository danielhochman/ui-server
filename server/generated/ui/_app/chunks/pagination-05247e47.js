import{ad as L,S as ve,i as Ie,s as Pe,_ as de,N as ye,e as T,t as U,k as C,w as Z,c as F,a as S,h as W,d as k,m as G,x as $,b as E,g as Ne,T as f,y as ee,an as we,U as te,j as ne,O as ke,P as Ee,Q as je,q as R,o as x,B as se,G as Te,L as Fe,v as Se,F as Be,E as Oe}from"./index-4f955b1f.js";import{p as Me}from"./stores-8f54f2cb.js";import{d as Ve,w as ge}from"./index-eae5a65e.js";import{F as _e,o as ze,p as Ae}from"./index.es-3f7bba01.js";import{F as De}from"./table-link-8c74cb5c.js";const ae=["100","250","500"],me=e=>{const t=String(e);return ae.includes(t)?ae:[e,...ae]},J=(e,t)=>Math.floor(e/t)+1,pe=(e,t,s)=>isNaN(e)||e<=1?0:e>be(t,s)?s.length-t:Math.floor(t*(e-1)),Ue=(e,t,s)=>{const i=J(e,t);return pe(i,t,s)},be=(e,t)=>Math.ceil(t.length/e),re=(e,t)=>isNaN(e)||e<0?0:e<t.length?e:t.length-1,oe=(e,t)=>e>=t.length||e<0,We=(e=[],t=100,s=0)=>{const i=Ue(Number(s),Number(t),e),o=ge(Number(t)),p=ge(i),I=n=>{o.set(Number(n))},d=()=>{p.update(n=>{const a=n+L(o);return oe(a,e)?n:re(a,e)})},P=()=>{p.update(n=>{const a=n-L(o);return re(a,e)})},c=n=>{const a=L(o);return p.set(pe(Number(n),a,e))},g=n=>{const a=J(Number(n),L(o));c(a)},_=n=>{for(let a=0;a<e.length;a++)if(n(e[a]))return a},b=n=>{const a=_(n);return J(a,L(o))},{subscribe:y}=Ve([p,o],([n,a])=>({items:e.slice(n,n+a),hasPrevious:!oe(n-a,e),hasNext:!oe(n+a,e),startingIndex:n,endingIndex:re(n+a-1,e),length:e.length,pageSize:a,currentPage:J(n,a),totalPages:be(a,e)}));return{subscribe:y,adjustPageSize:I,next:d,previous:P,jumpToPage:c,jumpToIndex:g,findIndex:_,findPage:b}},qe=({width:e,height:t,screenWidth:s,breakpoint:i=1024})=>e&&t&&s>i?`position: absolute; right: ${e+20}px; top: -${t+14}px`:"";const Le=e=>({visibleItems:e&64}),he=e=>({visibleItems:e[6].items});function Ce(e){let t,s,i,o,p,I,d,P,c,g,_,b,y,n,a=e[6].startingIndex+1+"",j,B,v=e[6].endingIndex+1+"",V,q,O=e[6].length+"",z,l,N,M,H,le,K,h,X,ie;de(e[14]),d=new De({props:{label:"Per Page",parameter:e[0],value:e[4],options:me(e[4])}}),_=new _e({props:{icon:ze}}),M=new _e({props:{icon:Ae}});const Y=e[13].default,m=ye(Y,e,e[12],he);return{c(){t=T("div"),s=T("nav"),i=T("div"),o=T("p"),p=U("Per Page"),I=C(),Z(d.$$.fragment),P=C(),c=T("div"),g=T("button"),Z(_.$$.fragment),y=C(),n=T("p"),j=U(a),B=U("\u2013"),V=U(v),q=U(" of "),z=U(O),l=C(),N=T("button"),Z(M.$$.fragment),K=C(),m&&m.c(),this.h()},l(r){t=F(r,"DIV",{class:!0});var u=S(t);s=F(u,"NAV",{style:!0,class:!0});var w=S(s);i=F(w,"DIV",{class:!0});var Q=S(i);o=F(Q,"P",{class:!0});var ue=S(o);p=W(ue,"Per Page"),ue.forEach(k),I=G(Q),$(d.$$.fragment,Q),Q.forEach(k),P=G(w),c=F(w,"DIV",{class:!0});var A=S(c);g=F(A,"BUTTON",{class:!0});var fe=S(g);$(_.$$.fragment,fe),fe.forEach(k),y=G(A),n=F(A,"P",{});var D=S(n);j=W(D,a),B=W(D,"\u2013"),V=W(D,v),q=W(D," of "),z=W(D,O),D.forEach(k),l=G(A),N=F(A,"BUTTON",{class:!0});var ce=S(N);$(M.$$.fragment,ce),ce.forEach(k),A.forEach(k),w.forEach(k),K=G(u),m&&m.l(u),u.forEach(k),this.h()},h(){E(o,"class","w-fit text-right"),E(i,"class","flex gap-2 items-center justify-center"),E(g,"class","caret svelte-15p08gy"),g.disabled=b=!e[6].hasPrevious,E(N,"class","caret svelte-15p08gy"),N.disabled=H=!e[6].hasNext,E(c,"class","flex gap-6 items-center justify-center"),E(s,"style",e[5]),E(s,"class","flex justify-end gap-8"),de(()=>e[17].call(s)),E(t,"class","pagination flex flex-col gap-4 relative mb-8")},m(r,u){Ne(r,t,u),f(t,s),f(s,i),f(i,o),f(o,p),f(i,I),ee(d,i,null),f(s,P),f(s,c),f(c,g),ee(_,g,null),f(c,y),f(c,n),f(n,j),f(n,B),f(n,V),f(n,q),f(n,z),f(c,l),f(c,N),ee(M,N,null),le=we(s,e[17].bind(s)),f(t,K),m&&m.m(t,null),h=!0,X||(ie=[te(window,"resize",e[14]),te(g,"click",e[15]),te(N,"click",e[16])],X=!0)},p(r,[u]){const w={};u&1&&(w.parameter=r[0]),u&16&&(w.value=r[4]),u&16&&(w.options=me(r[4])),d.$set(w),(!h||u&64&&b!==(b=!r[6].hasPrevious))&&(g.disabled=b),(!h||u&64)&&a!==(a=r[6].startingIndex+1+"")&&ne(j,a),(!h||u&64)&&v!==(v=r[6].endingIndex+1+"")&&ne(V,v),(!h||u&64)&&O!==(O=r[6].length+"")&&ne(z,O),(!h||u&64&&H!==(H=!r[6].hasNext))&&(N.disabled=H),(!h||u&32)&&E(s,"style",r[5]),m&&m.p&&(!h||u&4160)&&ke(m,Y,r,r[12],h?je(Y,r[12],u,Le):Ee(r[12]),he)},i(r){h||(R(d.$$.fragment,r),R(_.$$.fragment,r),R(M.$$.fragment,r),R(m,r),h=!0)},o(r){x(d.$$.fragment,r),x(_.$$.fragment,r),x(M.$$.fragment,r),x(m,r),h=!1},d(r){r&&k(t),se(d),se(_),se(M),le(),m&&m.d(r),X=!1,Te(ie)}}}function Ge(e,t,s){let i,o,p,I,d,P=Oe,c=()=>(P(),P=Be(o,l=>s(6,d=l)),o);Fe(e,Me,l=>s(11,I=l)),e.$$.on_destroy.push(()=>P());let{$$slots:g={},$$scope:_}=t,{key:b="per-page"}=t,{items:y}=t,{floatId:n=void 0}=t,{startingIndex:a=0}=t,j,B,v;Se(()=>{var l;n&&s(10,B=(l=document.getElementById(n))===null||l===void 0?void 0:l.clientWidth)});function V(){s(1,j=window.innerWidth)}const q=()=>o.previous(),O=()=>o.next();function z(){v=this.clientHeight,s(2,v)}return e.$$set=l=>{"key"in l&&s(0,b=l.key),"items"in l&&s(7,y=l.items),"floatId"in l&&s(8,n=l.floatId),"startingIndex"in l&&s(9,a=l.startingIndex),"$$scope"in l&&s(12,_=l.$$scope)},e.$$.update=()=>{e.$$.dirty&2049&&s(4,i=I.url.searchParams.get(b)||"100"),e.$$.dirty&144&&c(s(3,o=We(y,i))),e.$$.dirty&24&&o.adjustPageSize(i),e.$$.dirty&520&&o.jumpToIndex(a),e.$$.dirty&1030&&s(5,p=qe({width:B,height:v,screenWidth:j}))},[b,j,v,o,i,p,d,y,n,a,B,I,_,g,V,q,O,z]}class Ke extends ve{constructor(t){super(),Ie(this,t,Ge,Ce,Pe,{key:0,items:7,floatId:8,startingIndex:9})}}export{Ke as P};
