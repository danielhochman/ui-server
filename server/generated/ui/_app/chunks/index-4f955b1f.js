function k(){}const V=t=>t;function St(t,e){for(const n in e)t[n]=e[n];return t}function Nt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ft(t){return t()}function ct(){return Object.create(null)}function C(t){t.forEach(ft)}function X(t){return typeof t=="function"}function ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function se(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function Tt(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function re(t){let e;return _t(t,n=>e=n)(),e}function ce(t,e,n){t.$$.on_destroy.push(_t(e,n))}function oe(t,e,n,i){if(t){const s=dt(t,e,n,i);return t[0](s)}}function dt(t,e,n,i){return t[1]&&i?St(n.ctx.slice(),t[1](i(e))):n.ctx}function le(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)o[a]=e.dirty[a]|s[a];return o}return e.dirty|s}return e.dirty}function ae(t,e,n,i,s,o){if(s){const r=dt(e,n,i,o);t.p(r,s)}}function ue(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function fe(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function _e(t){return t==null?"":t}function de(t,e,n){return t.set(n),e}const jt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),ht=typeof window!="undefined";let Y=ht?()=>window.performance.now():()=>Date.now(),Z=ht?t=>requestAnimationFrame(t):k;const A=new Set;function mt(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&Z(mt)}function tt(t){let e;return A.size===0&&Z(mt),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}let F=!1;function Mt(){F=!0}function Ot(){F=!1}function Rt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function qt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:Rt(1,s,_=>e[n[_]].claim_order,l))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,s=Math.max(u,s)}const o=[],r=[];let a=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);o.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<o.length&&r[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(r[c],f)}}function pt(t,e){t.appendChild(e)}function yt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Dt(t){const e=G("style");return Pt(yt(t),e),e.sheet}function Pt(t,e){pt(t.head||t,e)}function zt(t,e){if(F){for(qt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Bt(t,e,n){t.insertBefore(e,n||null)}function Ht(t,e,n){F&&!n?zt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function j(t){t.parentNode.removeChild(t)}function he(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function me(t,e){const n={};for(const i in t)jt(t,i)&&e.indexOf(i)===-1&&(n[i]=t[i]);return n}function Lt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function et(t){return document.createTextNode(t)}function pe(){return et(" ")}function ye(){return et("")}function ot(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ge(t){return function(e){return e.preventDefault(),t.call(this,e)}}function be(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xe(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:gt(t,i,e[i])}function we(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:gt(t,e,n)}function Wt(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function xt(t,e,n,i,s=!1){bt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function wt(t,e,n,i){return xt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||o.push(a.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function $e(t,e,n){return wt(t,e,n,G)}function ke(t,e,n){return wt(t,e,n,Lt)}function It(t,e){return xt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>et(e),!0)}function ve(t){return It(t," ")}function lt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Ee(t){const e=lt(t,"HTML_TAG_START",0),n=lt(t,"HTML_TAG_END",e);if(e===n)return new at;bt(t);const i=t.splice(e,n-e+1);j(i[0]),j(i[i.length-1]);const s=i.slice(1,i.length-1);for(const o of s)o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new at(s)}function Ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ce(t,e){t.value=e==null?"":e}function Se(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ne(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Te(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let D;function Ft(){if(D===void 0){D=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{D=!0}}return D}function je(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=G("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Ft();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=ot(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=ot(i.contentWindow,"resize",e)}),pt(t,i),()=>{(s||o&&i.contentWindow)&&o(),j(i)}}function Me(t,e,n){t.classList[n?"add":"remove"](e)}function $t(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function Oe(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Gt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=G(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Bt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(j)}}class at extends Gt{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}}const H=new Map;let L=0;function Jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Kt(t,e){const n={stylesheet:Dt(e),rules:{}};return H.set(t,n),n}function nt(t,e,n,i,s,o,r,a=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*o(m);l+=m*100+`%{${r(g,1-g)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Jt(f)}_${a}`,_=yt(t),{stylesheet:d,rules:h}=H.get(_)||Kt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${u} ${i}ms linear ${s}ms 1 both`,L+=1,u}function W(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),L-=s,L||Qt())}function Qt(){Z(()=>{L||(H.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),H.clear())})}function Re(t,e,n,i){if(!e)return k;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return k;const{delay:o=0,duration:r=300,easing:a=V,start:c=Y()+o,end:l=c+r,tick:f=k,css:u}=n(t,{from:e,to:s},i);let _=!0,d=!1,h;function y(){u&&(h=nt(t,0,1,r,o,a,u)),o||(d=!0)}function m(){u&&W(t,h),_=!1}return tt(g=>{if(!d&&g>=c&&(d=!0),d&&g>=l&&(f(1,0),m()),!_)return!1;if(d){const w=g-c,v=0+1*a(w/r);f(v,1-v)}return!0}),y(),f(0,1),m}function qe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Ut(t,s)}}function Ut(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let M;function $(t){M=t}function S(){if(!M)throw new Error("Function called outside component initialization");return M}function De(t){S().$$.on_mount.push(t)}function Pe(t){S().$$.after_update.push(t)}function ze(){const t=S();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=$t(e,n);i.slice().forEach(o=>{o.call(t,s)})}}}function Be(t,e){S().$$.context.set(t,e)}function He(t){return S().$$.context.get(t)}function Le(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const T=[],ut=[],z=[],Q=[],kt=Promise.resolve();let U=!1;function vt(){U||(U=!0,kt.then(it))}function We(){return vt(),kt}function O(t){z.push(t)}function Ie(t){Q.push(t)}const K=new Set;let P=0;function it(){const t=M;do{for(;P<T.length;){const e=T[P];P++,$(e),Vt(e.$$)}for($(null),T.length=0,P=0;ut.length;)ut.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];K.has(n)||(K.add(n),n())}z.length=0}while(T.length);for(;Q.length;)Q.pop()();U=!1,K.clear(),$(t)}function Vt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let N;function Et(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function I(t,e,n){t.dispatchEvent($t(`${e?"intro":"outro"}${n}`))}const B=new Set;let E;function Xt(){E={r:0,c:[],p:E}}function Yt(){E.r||C(E.c),E=E.p}function st(t,e){t&&t.i&&(B.delete(t),t.i(e))}function At(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),E.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Ct={duration:0};function Fe(t,e,n){let i=e(t,n),s=!1,o,r,a=0;function c(){o&&W(t,o)}function l(){const{delay:u=0,duration:_=300,easing:d=V,tick:h=k,css:y}=i||Ct;y&&(o=nt(t,0,1,_,u,d,y,a++)),h(0,1);const m=Y()+u,g=m+_;r&&r.abort(),s=!0,O(()=>I(t,!0,"start")),r=tt(w=>{if(s){if(w>=g)return h(1,0),I(t,!0,"end"),c(),s=!1;if(w>=m){const v=d((w-m)/_);h(v,1-v)}}return s})}let f=!1;return{start(){f||(f=!0,W(t),X(i)?(i=i(),Et().then(l)):l())},invalidate(){f=!1},end(){s&&(c(),s=!1)}}}function Ge(t,e,n){let i=e(t,n),s=!0,o;const r=E;r.r+=1;function a(){const{delay:c=0,duration:l=300,easing:f=V,tick:u=k,css:_}=i||Ct;_&&(o=nt(t,1,0,l,c,f,_));const d=Y()+c,h=d+l;O(()=>I(t,!1,"start")),tt(y=>{if(s){if(y>=h)return u(0,1),I(t,!1,"end"),--r.r||C(r.c),!1;if(y>=d){const m=f((y-d)/l);u(1-m,m)}}return s})}return X(i)?Et().then(()=>{i=i(),a()}):a(),{end(c){c&&i.tick&&i.tick(1,0),s&&(o&&W(t,o),s=!1)}}}function Je(t,e){const n=e.token={};function i(s,o,r,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;r!==void 0&&(c=c.slice(),c[r]=a);const l=s&&(e.current=s)(c);let f=!1;e.block&&(e.blocks?e.blocks.forEach((u,_)=>{_!==o&&u&&(Xt(),At(u,1,1,()=>{e.blocks[_]===u&&(e.blocks[_]=null)}),Yt())}):e.block.d(1),l.c(),st(l,1),l.m(e.mount(),e.anchor),f=!0),e.block=l,e.blocks&&(e.blocks[o]=l),f&&it()}if(Nt(t)){const s=S();if(t.then(o=>{$(s),i(e.then,1,e.value,o),$(null)},o=>{if($(s),i(e.catch,2,e.error,o),$(null),!e.hasCatch)throw o}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Ke(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Qe(t,e){t.d(1),e.delete(t.key)}function Zt(t,e){At(t,1,1,()=>{e.delete(t.key)})}function Ue(t,e){t.f(),Zt(t,e)}function Ve(t,e,n,i,s,o,r,a,c,l,f,u){let _=t.length,d=o.length,h=_;const y={};for(;h--;)y[t[h].key]=h;const m=[],g=new Map,w=new Map;for(h=d;h--;){const p=u(s,o,h),b=n(p);let x=r.get(b);x?i&&x.p(p,e):(x=l(b,p),x.c()),g.set(b,m[h]=x),b in y&&w.set(b,Math.abs(h-y[b]))}const v=new Set,rt=new Set;function J(p){st(p,1),p.m(a,f),r.set(p.key,p),f=p.first,d--}for(;_&&d;){const p=m[d-1],b=t[_-1],x=p.key,R=b.key;p===b?(f=p.first,_--,d--):g.has(R)?!r.has(x)||v.has(x)?J(p):rt.has(R)?_--:w.get(x)>w.get(R)?(rt.add(x),J(p)):(v.add(R),_--):(c(b,r),_--)}for(;_--;){const p=t[_];g.has(p.key)||c(p,r)}for(;d;)J(m[d-1]);return m}function Xe(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],a=e[o];if(a){for(const c in r)c in a||(i[c]=1);for(const c in a)s[c]||(n[c]=a[c],s[c]=1);t[o]=a}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ye(t){return typeof t=="object"&&t!==null?t:{}}function Ze(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function tn(t){t&&t.c()}function en(t,e){t&&t.l(e)}function te(t,e,n,i){const{fragment:s,on_mount:o,on_destroy:r,after_update:a}=t.$$;s&&s.m(e,n),i||O(()=>{const c=o.map(ft).filter(X);r?r.push(...c):C(c),t.$$.on_mount=[]}),a.forEach(O)}function ee(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(t,e){t.$$.dirty[0]===-1&&(T.push(t),vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nn(t,e,n,i,s,o,r,a=[-1]){const c=M;$(t);const l=t.$$={fragment:null,ctx:null,props:o,update:k,not_equal:s,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ct(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&s(l.ctx[u],l.ctx[u]=h)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](h),f&&ne(t,u)),_}):[],l.update(),f=!0,C(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){Mt();const u=Wt(e.target);l.fragment&&l.fragment.l(u),u.forEach(j)}else l.fragment&&l.fragment.c();e.intro&&st(t.$$.fragment),te(t,e.target,e.anchor,e.customElement),Ot(),it()}$(c)}class sn{$destroy(){ee(this,1),this.$destroy=k}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Fe as $,Ye as A,ee as B,St as C,We as D,k as E,_t as F,C as G,X as H,ut as I,Ze as J,Ie as K,ce as L,he as M,oe as N,ae as O,ue as P,le as Q,se as R,sn as S,zt as T,ot as U,Oe as V,Me as W,qe as X,Ut as Y,Re as Z,O as _,Wt as a,Ge as a0,Ve as a1,Ue as a2,_e as a3,de as a4,He as a5,Lt as a6,ke as a7,Ne as a8,fe as a9,Le as aa,Te as ab,ze as ac,re as ad,Ce as ae,xe as af,Qe as ag,me as ah,at as ai,Ee as aj,Zt as ak,be as al,ge as am,je as an,we as ao,Je as ap,Ke as aq,gt as b,$e as c,j as d,G as e,Se as f,Ht as g,It as h,nn as i,Ae as j,pe as k,ye as l,ve as m,Xt as n,At as o,Yt as p,st as q,Be as r,ie as s,et as t,Pe as u,De as v,tn as w,en as x,te as y,Xe as z};
