const u=(e,t)=>{const r=e.charCodeAt(t);return r>=65&&r<=90},l=e=>{let t="",r=0;for(;r<e.length;){const n=e[r],s=e[r+1];if(r===0){t+=e[r].toUpperCase(),r++;continue}if(n+s==="Id"){t+=" ID",r+=2;continue}if(u(e,r)){t+=" ",t+=n.toUpperCase(),r++;continue}t+=n,r++}return t},f=(e,t)=>!(t===null||t===void 0||t===""||t==="0s"||e==="type"),p=e=>e?!!e.toLowerCase().endsWith("runid"):!1,c=(e,t)=>{const r=Object.keys(t)[0];return{key:`${e}.${r}`,value:t[r]}},a=e=>{if(!!e){for(const[t,r]of Object.entries(e))if(f(t,r))return typeof r=="object"?c(t,r):{key:t,value:r.toString()}}},y=({event:e,eventGroup:t})=>{var r,n,s;if(t){const i=(r=t==null?void 0:t.initialEvent)==null?void 0:r.attributes,o=(n=i==null?void 0:i.input)!=null?n:"";return{key:"input",value:o}}return(s=a(e==null?void 0:e.attributes))!=null?s:{key:"",value:""}};export{p as a,l as f,y as g,f as s};