const i=(e,t)=>{const r=e.charCodeAt(t);return r>=65&&r<=90},d=e=>{let t="",r=0;for(;r<e.length;){const n=e[r],o=e[r+1];if(r===0){t+=e[r].toUpperCase(),r++;continue}if(n+o==="Id"){t+=" ID",r+=2;continue}if(i(e,r)){t+=" ",t+=n.toUpperCase(),r++;continue}t+=n,r++}return t},u={key:"",value:""},f=(e,t)=>!(t===null||t===void 0||t===""||t==="0s"||e==="type"),c=["baseRunId","continuedExecutionRunId","firstExecutionRunId","newExecutionRunId","newRunId","originalExecutionRunId"],k=e=>{for(const t of c)if(e===t)return!0;return!1},s=(e,t)=>{if(typeof t=="object"){const[r]=Object.keys(t);return{key:`${e}.${r}`,value:t[r]}}else return{key:e,value:t.toString()}},a=["activityType"],y=({attributes:e})=>{for(const[t,r]of Object.entries(e))if(f(t,r))return s(t,r)},l=e=>{const t=y(e);for(const[r,n]of Object.entries(e.attributes))for(const o of a)if(r===o)return s(r,n);return t},p=e=>{let t="";const r=e.initialEvent.attributes;for(const[n,o]of Object.entries(r))n==="input"&&(t=o);return{key:"input",value:t}},m=({event:e,eventGroup:t})=>!e&&!t?u:t?p(t):l(e);export{k as a,d as f,m as g,f as s};
