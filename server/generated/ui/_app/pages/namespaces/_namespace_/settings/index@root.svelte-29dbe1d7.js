import{S as st,i as nt,s as lt,e as i,t as f,k as m,c,a as p,h as u,d as s,m as d,b as r,g as je,M as e,j as k,E as tt,N as rt}from"../../../../chunks/index-604742bf.js";import{p as ot}from"../../../../chunks/stores-810822a9.js";import{e as at}from"../../../../chunks/format-date-919f4714.js";import"../../../../chunks/to-duration-271d3946.js";const it=a=>{var _,y;const n=(_=a==null?void 0:a.replicationConfig)==null?void 0:_.clusters,E=(y=a==null?void 0:a.replicationConfig)==null?void 0:y.activeClusterName;return n!=null&&n.length?n.map(({clusterName:v})=>v===E?`${v} (active)`:v).join(", "):"Unknown"};function ct(a){var Fe,Ye,qe,Me,ze,Be,Je,Ke,Le,Qe,We,Xe;let n,E,_,y,v,t,g,P,N,S,U,ve,he,J=((Ye=(Fe=a[0])==null?void 0:Fe.namespaceInfo)==null?void 0:Ye.description)+"",ne,_e,A,j,ye,Ee,K=(((Me=(qe=a[0])==null?void 0:qe.namespaceInfo)==null?void 0:Me.ownerEmail)||"Unknown")+"",le,ge,b,F,Ne,Pe,L=(ze=a[0])!=null&&ze.isGlobalNamespace?"Yes":"No",re,Se,w,Y,Ae,be,Q=at((Je=(Be=a[0])==null?void 0:Be.config)==null?void 0:Je.workflowExecutionRetentionTtl.toString())+"",oe,we,C,q,Ce,Ie,W=((Le=(Ke=a[0])==null?void 0:Ke.config)==null?void 0:Le.historyArchivalState)+"",ie,Ve,I,M,De,ke,X=((We=(Qe=a[0])==null?void 0:Qe.config)==null?void 0:We.visibilityArchivalState)+"",ce,He,V,z,Ge,Re,Z=((Xe=a[0])==null?void 0:Xe.failoverVersion)+"",pe,Oe,D,B,Te,Ue,fe;return{c(){n=i("h2"),E=f("Settings: "),_=f(a[2]),y=m(),v=i("div"),t=i("div"),g=i("h1"),P=f("Details"),N=m(),S=i("p"),U=i("span"),ve=f("Description:"),he=m(),ne=f(J),_e=m(),A=i("p"),j=i("span"),ye=f("Owner:"),Ee=m(),le=f(K),ge=m(),b=i("p"),F=i("span"),Ne=f("Global?"),Pe=m(),re=f(L),Se=m(),w=i("p"),Y=i("span"),Ae=f("Retention Period:"),be=m(),oe=f(Q),we=m(),C=i("p"),q=i("span"),Ce=f("History Archival:"),Ie=m(),ie=f(W),Ve=m(),I=i("p"),M=i("span"),De=f("Visibility Archival:"),ke=m(),ce=f(X),He=m(),V=i("p"),z=i("span"),Ge=f("Failover Version:"),Re=m(),pe=f(Z),Oe=m(),D=i("p"),B=i("span"),Te=f("Clusters:"),Ue=m(),fe=f(a[1]),this.h()},l(o){n=c(o,"H2",{class:!0,"data-cy":!0});var h=p(n);E=u(h,"Settings: "),_=u(h,a[2]),h.forEach(s),y=d(o),v=c(o,"DIV",{class:!0});var x=p(v);t=c(x,"DIV",{class:!0});var l=p(t);g=c(l,"H1",{class:!0});var $=p(g);P=u($,"Details"),$.forEach(s),N=d(l),S=c(l,"P",{"data-cy":!0});var H=p(S);U=c(H,"SPAN",{class:!0});var ee=p(U);ve=u(ee,"Description:"),ee.forEach(s),he=d(H),ne=u(H,J),H.forEach(s),_e=d(l),A=c(l,"P",{"data-cy":!0});var G=p(A);j=c(G,"SPAN",{class:!0});var te=p(j);ye=u(te,"Owner:"),te.forEach(s),Ee=d(G),le=u(G,K),G.forEach(s),ge=d(l),b=c(l,"P",{"data-cy":!0});var R=p(b);F=c(R,"SPAN",{class:!0});var ae=p(F);Ne=u(ae,"Global?"),ae.forEach(s),Pe=d(R),re=u(R,L),R.forEach(s),Se=d(l),w=c(l,"P",{"data-cy":!0});var O=p(w);Y=c(O,"SPAN",{class:!0});var se=p(Y);Ae=u(se,"Retention Period:"),se.forEach(s),be=d(O),oe=u(O,Q),O.forEach(s),we=d(l),C=c(l,"P",{"data-cy":!0});var T=p(C);q=c(T,"SPAN",{class:!0});var Ze=p(q);Ce=u(Ze,"History Archival:"),Ze.forEach(s),Ie=d(T),ie=u(T,W),T.forEach(s),Ve=d(l),I=c(l,"P",{"data-cy":!0});var ue=p(I);M=c(ue,"SPAN",{class:!0});var xe=p(M);De=u(xe,"Visibility Archival:"),xe.forEach(s),ke=d(ue),ce=u(ue,X),ue.forEach(s),He=d(l),V=c(l,"P",{"data-cy":!0});var me=p(V);z=c(me,"SPAN",{class:!0});var $e=p(z);Ge=u($e,"Failover Version:"),$e.forEach(s),Re=d(me),pe=u(me,Z),me.forEach(s),Oe=d(l),D=c(l,"P",{"data-cy":!0});var de=p(D);B=c(de,"SPAN",{class:!0});var et=p(B);Te=u(et,"Clusters:"),et.forEach(s),Ue=d(de),fe=u(de,a[1]),de.forEach(s),l.forEach(s),x.forEach(s),this.h()},h(){r(n,"class","text-2xl"),r(n,"data-cy","settings-title"),r(g,"class","my-4 text-lg font-medium"),r(U,"class","mr-2 font-medium"),r(S,"data-cy","namespace-description"),r(j,"class","mr-2 font-medium"),r(A,"data-cy","namespace-owner"),r(F,"class","mr-2 font-medium"),r(b,"data-cy","namespace-global"),r(Y,"class","mr-2 font-medium"),r(w,"data-cy","namespace-retention"),r(q,"class","mr-2 font-medium"),r(C,"data-cy","namespace-history"),r(M,"class","mr-2 font-medium"),r(I,"data-cy","namespace-visibility"),r(z,"class","mr-2 font-medium"),r(V,"data-cy","namespace-failover"),r(B,"class","mr-2 font-medium"),r(D,"data-cy","namespace-clusters"),r(t,"class","namespace-info w-full p-4"),r(v,"class","flex")},m(o,h){je(o,n,h),e(n,E),e(n,_),je(o,y,h),je(o,v,h),e(v,t),e(t,g),e(g,P),e(t,N),e(t,S),e(S,U),e(U,ve),e(S,he),e(S,ne),e(t,_e),e(t,A),e(A,j),e(j,ye),e(A,Ee),e(A,le),e(t,ge),e(t,b),e(b,F),e(F,Ne),e(b,Pe),e(b,re),e(t,Se),e(t,w),e(w,Y),e(Y,Ae),e(w,be),e(w,oe),e(t,we),e(t,C),e(C,q),e(q,Ce),e(C,Ie),e(C,ie),e(t,Ve),e(t,I),e(I,M),e(M,De),e(I,ke),e(I,ce),e(t,He),e(t,V),e(V,z),e(z,Ge),e(V,Re),e(V,pe),e(t,Oe),e(t,D),e(D,B),e(B,Te),e(D,Ue),e(D,fe)},p(o,[h]){var x,l,$,H,ee,G,te,R,ae,O,se,T;h&1&&J!==(J=((l=(x=o[0])==null?void 0:x.namespaceInfo)==null?void 0:l.description)+"")&&k(ne,J),h&1&&K!==(K=(((H=($=o[0])==null?void 0:$.namespaceInfo)==null?void 0:H.ownerEmail)||"Unknown")+"")&&k(le,K),h&1&&L!==(L=(ee=o[0])!=null&&ee.isGlobalNamespace?"Yes":"No")&&k(re,L),h&1&&Q!==(Q=at((te=(G=o[0])==null?void 0:G.config)==null?void 0:te.workflowExecutionRetentionTtl.toString())+"")&&k(oe,Q),h&1&&W!==(W=((ae=(R=o[0])==null?void 0:R.config)==null?void 0:ae.historyArchivalState)+"")&&k(ie,W),h&1&&X!==(X=((se=(O=o[0])==null?void 0:O.config)==null?void 0:se.visibilityArchivalState)+"")&&k(ce,X),h&1&&Z!==(Z=((T=o[0])==null?void 0:T.failoverVersion)+"")&&k(pe,Z),h&2&&k(fe,o[1])},i:tt,o:tt,d(o){o&&s(n),o&&s(y),o&&s(v)}}}const vt=async function({params:a,url:n,stuff:E}){const{searchParams:_}=n;_.has("time-range")&&_.delete("time-range");const y=a.namespace,t=E.namespaces.find(P=>P.namespaceInfo.name===y),g=it(t);return{props:{currentNamespace:t,clusters:g}}};function pt(a,n,E){let _;rt(a,ot,N=>E(5,_=N));var y,v;let t=_.params.namespace||((v=(y=_.stuff)===null||y===void 0?void 0:y.settings)===null||v===void 0?void 0:v.defaultNamespace),{currentNamespace:g}=n,{clusters:P}=n;return a.$$set=N=>{"currentNamespace"in N&&E(0,g=N.currentNamespace),"clusters"in N&&E(1,P=N.clusters)},[g,P,t]}class ht extends st{constructor(n){super(),nt(this,n,pt,ct,lt,{currentNamespace:0,clusters:1})}}export{ht as default,vt as load};
