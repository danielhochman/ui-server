var c=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var u=(r,e)=>{var s={};for(var t in r)a.call(r,t)&&e.indexOf(t)<0&&(s[t]=r[t]);if(r!=null&&c)for(var t of c(r))e.indexOf(t)<0&&$.call(r,t)&&(s[t]=r[t]);return s};const i=({namespace:r})=>`/namespaces/${r}`,f=r=>`${i(r)}/workflows`,n=t=>{var o=t,{workflow:r,run:e}=o,s=u(o,["workflow","run"]);return`${f(s)}/${r}/${e}`},F=s=>{var t=s,{view:r}=t,e=u(t,["view"]);const o=`${n(e)}/history`;if(!r)return o;if(r==="summary")return`${o}/summary`;if(r==="compact")return`${o}/compact`;if(r==="json")return`${o}/json`},m=r=>`${F(r)}/${r.eventId}`,y=r=>`${n(r)}/workers`,p=r=>`${n(r)}/stack-trace`,d=r=>`${n(r)}/query`,l=r=>`${n(r)}/pending-activities`;export{n as a,F as b,l as c,y as d,p as e,d as f,m as g,f as r};