function h(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function l(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function d(e){l(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function ve(e,t){l(2,arguments);var r=d(e),a=h(t);return isNaN(a)?new Date(NaN):(a&&r.setDate(r.getDate()+a),r)}function he(e,t){l(2,arguments);var r=d(e),a=h(t);if(isNaN(a))return new Date(NaN);if(!a)return r;var n=r.getDate(),i=new Date(r.getTime());i.setMonth(r.getMonth()+a+1,0);var o=i.getDate();return n>=o?i:(r.setFullYear(i.getFullYear(),i.getMonth(),n),r)}function We(e,t){if(l(2,arguments),!t||typeof t!="object")return new Date(NaN);var r=t.years?h(t.years):0,a=t.months?h(t.months):0,n=t.weeks?h(t.weeks):0,i=t.days?h(t.days):0,o=t.hours?h(t.hours):0,u=t.minutes?h(t.minutes):0,s=t.seconds?h(t.seconds):0,f=d(e),c=a||r?he(f,a+r*12):f,m=i||n?ve(c,i+n*7):c,D=u+o*60,T=s+D*60,y=T*1e3,b=new Date(m.getTime()+y);return b}function Ie(e,t){l(2,arguments);var r=d(e).getTime(),a=h(t);return new Date(r+a)}function x(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function B(e){l(1,arguments);var t=d(e);return t.setHours(0,0,0,0),t}var ke=864e5;function Ee(e,t){l(2,arguments);var r=B(e),a=B(t),n=r.getTime()-x(r),i=a.getTime()-x(a);return Math.round((n-i)/ke)}function O(e,t){l(2,arguments);var r=d(e),a=d(t),n=r.getTime()-a.getTime();return n<0?-1:n>0?1:n}var Fe=6e4,He=36e5;function _e(e){return l(1,arguments),e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function E(e){if(l(1,arguments),!_e(e)&&typeof e!="number")return!1;var t=d(e);return!isNaN(Number(t))}function ze(e,t){l(2,arguments);var r=d(e),a=d(t),n=r.getFullYear()-a.getFullYear(),i=r.getMonth()-a.getMonth();return n*12+i}function Le(e,t){l(2,arguments);var r=d(e),a=d(t);return r.getFullYear()-a.getFullYear()}function V(e,t){var r=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return r<0?-1:r>0?1:r}function Xe(e,t){l(2,arguments);var r=d(e),a=d(t),n=V(r,a),i=Math.abs(Ee(r,a));r.setDate(r.getDate()-n*i);var o=Number(V(r,a)===-n),u=n*(i-o);return u===0?0:u}function Z(e,t){return l(2,arguments),d(e).getTime()-d(t).getTime()}var J={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},$e="trunc";function Q(e){return e?J[e]:J[$e]}function Ae(e,t,r){l(2,arguments);var a=Z(e,t)/He;return Q(r==null?void 0:r.roundingMethod)(a)}function Re(e,t,r){l(2,arguments);var a=Z(e,t)/Fe;return Q(r==null?void 0:r.roundingMethod)(a)}function qe(e){l(1,arguments);var t=d(e);return t.setHours(23,59,59,999),t}function je(e){l(1,arguments);var t=d(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function Ze(e){l(1,arguments);var t=d(e);return qe(t).getTime()===je(t).getTime()}function ge(e,t){l(2,arguments);var r=d(e),a=d(t),n=O(r,a),i=Math.abs(ze(r,a)),o;if(i<1)o=0;else{r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-n*i);var u=O(r,a)===-n;Ze(d(e))&&i===1&&O(e,a)===1&&(u=!1),o=n*(i-Number(u))}return o===0?0:o}function we(e,t,r){l(2,arguments);var a=Z(e,t)/1e3;return Q(r==null?void 0:r.roundingMethod)(a)}function Qe(e,t){l(2,arguments);var r=d(e),a=d(t),n=O(r,a),i=Math.abs(Le(r,a));r.setFullYear(1584),a.setFullYear(1584);var o=O(r,a)===-n,u=n*(i-Number(o));return u===0?0:u}var Ge={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Be=function(e,t,r){var a,n=Ge[e];return typeof n=="string"?a=n:t===1?a=n.one:a=n.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a},Ve=Be;function z(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.width?String(t.width):e.defaultWidth,a=e.formats[r]||e.formats[e.defaultWidth];return a}}var Je={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ke={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},et={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},tt={date:z({formats:Je,defaultWidth:"full"}),time:z({formats:Ke,defaultWidth:"full"}),dateTime:z({formats:et,defaultWidth:"full"})},rt=tt,at={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nt=function(e,t,r,a){return at[e]},it=nt;function W(e){return function(t,r){var a=r||{},n=a.context?String(a.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,u=a.width?String(a.width):o;i=e.formattingValues[u]||e.formattingValues[o]}else{var s=e.defaultWidth,f=a.width?String(a.width):e.defaultWidth;i=e.values[f]||e.values[s]}var c=e.argumentCallback?e.argumentCallback(t):t;return i[c]}}var ot={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ut={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},st={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ft={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ct={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},dt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},lt=function(e,t){var r=Number(e),a=r%100;if(a>20||a<10)switch(a%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},mt={ordinalNumber:lt,era:W({values:ot,defaultWidth:"wide"}),quarter:W({values:ut,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:W({values:st,defaultWidth:"wide"}),day:W({values:ft,defaultWidth:"wide"}),dayPeriod:W({values:ct,defaultWidth:"wide",formattingValues:dt,defaultFormattingWidth:"wide"})},vt=mt;function I(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.width,n=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],u=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?gt(u,function(m){return m.test(o)}):ht(u,function(m){return m.test(o)}),f;f=e.valueCallback?e.valueCallback(s):s,f=r.valueCallback?r.valueCallback(f):f;var c=t.slice(o.length);return{value:f,rest:c}}}function ht(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}function gt(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return r}function wt(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var n=a[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=r.valueCallback?r.valueCallback(o):o;var u=t.slice(n.length);return{value:o,rest:u}}}var Dt=/^(\d+)(th|st|nd|rd)?/i,Tt=/\d+/i,yt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Mt={any:[/^b/i,/^(a|c)/i]},bt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},pt={any:[/1/i,/2/i,/3/i,/4/i]},Ct={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Nt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ot={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},xt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Yt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},St={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pt={ordinalNumber:wt({matchPattern:Dt,parsePattern:Tt,valueCallback:function(e){return parseInt(e,10)}}),era:I({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any"}),quarter:I({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:I({matchPatterns:Ct,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any"}),day:I({matchPatterns:Ot,defaultMatchWidth:"wide",parsePatterns:xt,defaultParseWidth:"any"}),dayPeriod:I({matchPatterns:Yt,defaultMatchWidth:"any",parsePatterns:St,defaultParseWidth:"any"})},Ut=Pt,Wt={code:"en-US",formatDistance:Ve,formatLong:rt,formatRelative:it,localize:vt,match:Ut,options:{weekStartsOn:0,firstWeekContainsDate:1}},G=Wt;function It(e,t){l(2,arguments);var r=h(t);return Ie(e,-r)}function v(e,t){for(var r=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return r+a}var kt={y:function(e,t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return v(t==="yy"?a%100:a,t.length)},M:function(e,t){var r=e.getUTCMonth();return t==="M"?String(r+1):v(r+1,2)},d:function(e,t){return v(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,t){return v(e.getUTCHours()%12||12,t.length)},H:function(e,t){return v(e.getUTCHours(),t.length)},m:function(e,t){return v(e.getUTCMinutes(),t.length)},s:function(e,t){return v(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,a=e.getUTCMilliseconds(),n=Math.floor(a*Math.pow(10,r-3));return v(n,t.length)}},p=kt,Et=864e5;function Ft(e){l(1,arguments);var t=d(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=r-a;return Math.floor(n/Et)+1}function F(e){l(1,arguments);var t=1,r=d(e),a=r.getUTCDay(),n=(a<t?7:0)+a-t;return r.setUTCDate(r.getUTCDate()-n),r.setUTCHours(0,0,0,0),r}function De(e){l(1,arguments);var t=d(e),r=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var n=F(a),i=new Date(0);i.setUTCFullYear(r,0,4),i.setUTCHours(0,0,0,0);var o=F(i);return t.getTime()>=n.getTime()?r+1:t.getTime()>=o.getTime()?r:r-1}function Ht(e){l(1,arguments);var t=De(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var a=F(r);return a}var _t=6048e5;function zt(e){l(1,arguments);var t=d(e),r=F(t).getTime()-Ht(t).getTime();return Math.round(r/_t)+1}function H(e,t){l(1,arguments);var r=t||{},a=r.locale,n=a&&a.options&&a.options.weekStartsOn,i=n==null?0:h(n),o=r.weekStartsOn==null?i:h(r.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=d(e),s=u.getUTCDay(),f=(s<o?7:0)+s-o;return u.setUTCDate(u.getUTCDate()-f),u.setUTCHours(0,0,0,0),u}function Te(e,t){l(1,arguments);var r=d(e,t),a=r.getUTCFullYear(),n=t||{},i=n.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=o==null?1:h(o),s=n.firstWeekContainsDate==null?u:h(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(a+1,0,s),f.setUTCHours(0,0,0,0);var c=H(f,t),m=new Date(0);m.setUTCFullYear(a,0,s),m.setUTCHours(0,0,0,0);var D=H(m,t);return r.getTime()>=c.getTime()?a+1:r.getTime()>=D.getTime()?a:a-1}function Lt(e,t){l(1,arguments);var r=t||{},a=r.locale,n=a&&a.options&&a.options.firstWeekContainsDate,i=n==null?1:h(n),o=r.firstWeekContainsDate==null?i:h(r.firstWeekContainsDate),u=Te(e,t),s=new Date(0);s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0);var f=H(s,t);return f}var Xt=6048e5;function $t(e,t){l(1,arguments);var r=d(e),a=H(r,t).getTime()-Lt(r,t).getTime();return Math.round(a/Xt)+1}var S={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},At={G:function(e,t,r){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){var a=e.getUTCFullYear(),n=a>0?a:1-a;return r.ordinalNumber(n,{unit:"year"})}return p.y(e,t)},Y:function(e,t,r,a){var n=Te(e,a),i=n>0?n:1-n;if(t==="YY"){var o=i%100;return v(o,2)}return t==="Yo"?r.ordinalNumber(i,{unit:"year"}):v(i,t.length)},R:function(e,t){var r=De(e);return v(r,t.length)},u:function(e,t){var r=e.getUTCFullYear();return v(r,t.length)},Q:function(e,t,r){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return v(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,r){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return v(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,r){var a=e.getUTCMonth();switch(t){case"M":case"MM":return p.M(e,t);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,r){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return v(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,r,a){var n=$t(e,a);return t==="wo"?r.ordinalNumber(n,{unit:"week"}):v(n,t.length)},I:function(e,t,r){var a=zt(e);return t==="Io"?r.ordinalNumber(a,{unit:"week"}):v(a,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):p.d(e,t)},D:function(e,t,r){var a=Ft(e);return t==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):v(a,t.length)},E:function(e,t,r){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,r,a){var n=e.getUTCDay(),i=(n-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return v(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})}},c:function(e,t,r,a){var n=e.getUTCDay(),i=(n-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return v(i,t.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})}},i:function(e,t,r){var a=e.getUTCDay(),n=a===0?7:a;switch(t){case"i":return String(n);case"ii":return v(n,t.length);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,r){var a=e.getUTCHours(),n=a/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,r){var a=e.getUTCHours(),n;switch(a===12?n=S.noon:a===0?n=S.midnight:n=a/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,r){var a=e.getUTCHours(),n;switch(a>=17?n=S.evening:a>=12?n=S.afternoon:a>=4?n=S.morning:n=S.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){var a=e.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return p.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):p.H(e,t)},K:function(e,t,r){var a=e.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(a,{unit:"hour"}):v(a,t.length)},k:function(e,t,r){var a=e.getUTCHours();return a===0&&(a=24),t==="ko"?r.ordinalNumber(a,{unit:"hour"}):v(a,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):p.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):p.s(e,t)},S:function(e,t){return p.S(e,t)},X:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return ee(i);case"XXXX":case"XX":return N(i);case"XXXXX":case"XXX":default:return N(i,":")}},x:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"x":return ee(i);case"xxxx":case"xx":return N(i);case"xxxxx":case"xxx":default:return N(i,":")}},O:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+K(i,":");case"OOOO":default:return"GMT"+N(i,":")}},z:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+K(i,":");case"zzzz":default:return"GMT"+N(i,":")}},t:function(e,t,r,a){var n=a._originalDate||e,i=Math.floor(n.getTime()/1e3);return v(i,t.length)},T:function(e,t,r,a){var n=a._originalDate||e,i=n.getTime();return v(i,t.length)}};function K(e,t){var r=e>0?"-":"+",a=Math.abs(e),n=Math.floor(a/60),i=a%60;if(i===0)return r+String(n);var o=t||"";return r+String(n)+o+v(i,2)}function ee(e,t){if(e%60===0){var r=e>0?"-":"+";return r+v(Math.abs(e)/60,2)}return N(e,t)}function N(e,t){var r=t||"",a=e>0?"-":"+",n=Math.abs(e),i=v(Math.floor(n/60),2),o=v(n%60,2);return a+i+r+o}var Rt=At;function te(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function ye(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function qt(e,t){var r=e.match(/(P+)(p+)?/),a=r[1],n=r[2];if(!n)return te(e,t);var i;switch(a){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",te(a,t)).replace("{{time}}",ye(n,t))}var jt={p:ye,P:qt},Zt=jt,Qt=["D","DD"],Gt=["YY","YYYY"];function Bt(e){return Qt.indexOf(e)!==-1}function Vt(e){return Gt.indexOf(e)!==-1}function re(e,t,r){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"))}var Jt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Kt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,er=/^'([^]*?)'?$/,tr=/''/g,rr=/[a-zA-Z]/;function ar(e,t,r){l(2,arguments);var a=String(t),n=r||{},i=n.locale||G,o=i.options&&i.options.firstWeekContainsDate,u=o==null?1:h(o),s=n.firstWeekContainsDate==null?u:h(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=i.options&&i.options.weekStartsOn,c=f==null?0:h(f),m=n.weekStartsOn==null?c:h(n.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var D=d(e);if(!E(D))throw new RangeError("Invalid time value");var T=x(D),y=It(D,T),b={firstWeekContainsDate:s,weekStartsOn:m,locale:i,_originalDate:D},C=a.match(Kt).map(function(g){var M=g[0];if(M==="p"||M==="P"){var Y=Zt[M];return Y(g,i.formatLong,b)}return g}).join("").match(Jt).map(function(g){if(g==="''")return"'";var M=g[0];if(M==="'")return nr(g);var Y=Rt[M];if(Y)return!n.useAdditionalWeekYearTokens&&Vt(g)&&re(g,t,e),!n.useAdditionalDayOfYearTokens&&Bt(g)&&re(g,t,e),Y(y,g,i.localize,b);if(M.match(rr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+M+"`");return g}).join("");return C}function nr(e){return e.match(er)[1].replace(tr,"'")}function ir(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");t=t||{};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function Me(e){return ir({},e)}var ae=1440,or=2520,L=43200,ur=86400;function sr(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};l(2,arguments);var a=r.locale||G;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var n=O(e,t);if(isNaN(n))throw new RangeError("Invalid time value");var i=Me(r);i.addSuffix=Boolean(r.addSuffix),i.comparison=n;var o,u;n>0?(o=d(t),u=d(e)):(o=d(e),u=d(t));var s=we(u,o),f=(x(u)-x(o))/1e3,c=Math.round((s-f)/60),m;if(c<2)return r.includeSeconds?s<5?a.formatDistance("lessThanXSeconds",5,i):s<10?a.formatDistance("lessThanXSeconds",10,i):s<20?a.formatDistance("lessThanXSeconds",20,i):s<40?a.formatDistance("halfAMinute",null,i):s<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):c===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",c,i);if(c<45)return a.formatDistance("xMinutes",c,i);if(c<90)return a.formatDistance("aboutXHours",1,i);if(c<ae){var D=Math.round(c/60);return a.formatDistance("aboutXHours",D,i)}else{if(c<or)return a.formatDistance("xDays",1,i);if(c<L){var T=Math.round(c/ae);return a.formatDistance("xDays",T,i)}else if(c<ur)return m=Math.round(c/L),a.formatDistance("aboutXMonths",m,i)}if(m=ge(u,o),m<12){var y=Math.round(c/L);return a.formatDistance("xMonths",y,i)}else{var b=m%12,C=Math.floor(m/12);return b<3?a.formatDistance("aboutXYears",C,i):b<9?a.formatDistance("overXYears",C,i):a.formatDistance("almostXYears",C+1,i)}}function fr(e,t){return l(1,arguments),sr(e,Date.now(),t)}var cr=["years","months","weeks","days","hours","minutes","seconds"];function dr(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var r=(t==null?void 0:t.format)||cr,a=(t==null?void 0:t.locale)||G,n=(t==null?void 0:t.zero)||!1,i=(t==null?void 0:t.delimiter)||" ",o=r.reduce(function(u,s){var f="x".concat(s.replace(/(^.)/,function(m){return m.toUpperCase()})),c=typeof e[s]=="number"&&(n||e[s]);return c?u.concat(a.formatDistance(f,e[s])):u},[]).join(i);return o}function be(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var r=d(e);if(!E(r))throw new RangeError("Invalid time value");var a=t||{},n=a.format==null?"extended":String(a.format),i=a.representation==null?"complete":String(a.representation);if(n!=="extended"&&n!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(i!=="date"&&i!=="time"&&i!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var o="",u="",s=n==="extended"?"-":"",f=n==="extended"?":":"";if(i!=="time"){var c=v(r.getDate(),2),m=v(r.getMonth()+1,2),D=v(r.getFullYear(),4);o="".concat(D).concat(s).concat(m).concat(s).concat(c)}if(i!=="date"){var T=r.getTimezoneOffset();if(T!==0){var y=Math.abs(T),b=v(Math.floor(y/60),2),C=v(y%60,2),g=T<0?"+":"-";u="".concat(g).concat(b,":").concat(C)}else u="Z";var M=v(r.getHours(),2),Y=v(r.getMinutes(),2),Se=v(r.getSeconds(),2),Pe=o===""?"":"T",Ue=[M,Y,Se].join(f);o="".concat(o).concat(Pe).concat(Ue).concat(u)}return o}function lr(e,t){l(2,arguments);var r=h(t);return ve(e,-r)}function mr(e,t){l(2,arguments);var r=h(t);return he(e,-r)}function P(e,t){if(l(2,arguments),!t||typeof t!="object")return new Date(NaN);var r=t.years?h(t.years):0,a=t.months?h(t.months):0,n=t.weeks?h(t.weeks):0,i=t.days?h(t.days):0,o=t.hours?h(t.hours):0,u=t.minutes?h(t.minutes):0,s=t.seconds?h(t.seconds):0,f=mr(e,a+r*12),c=lr(f,i+n*7),m=u+o*60,D=s+m*60,T=D*1e3,y=new Date(c.getTime()-T);return y}function vr(e){var t=e.start,r=e.end;l(1,arguments);var a=d(t),n=d(r);if(!E(a))throw new RangeError("Start Date is invalid");if(!E(n))throw new RangeError("End Date is invalid");var i={years:0,months:0,days:0,hours:0,minutes:0,seconds:0},o=O(a,n);i.years=Math.abs(Qe(a,n));var u=P(a,{years:o*i.years});i.months=Math.abs(ge(u,n));var s=P(u,{months:o*i.months});i.days=Math.abs(Xe(s,n));var f=P(s,{days:o*i.days});i.hours=Math.abs(Ae(f,n));var c=P(f,{hours:o*i.hours});i.minutes=Math.abs(Re(c,n));var m=P(c,{minutes:o*i.minutes});return i.seconds=Math.abs(we(m,n)),i}function hr(e){if(l(1,arguments),typeof e=="string"){var t=e.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);return t?new Date(Date.UTC(+t[1],+t[2]-1,+t[3],+t[4]-(+t[9]||0)*(t[8]=="-"?-1:1),+t[5]-(+t[10]||0)*(t[8]=="-"?-1:1),+t[6],+((t[7]||"0")+"00").substring(0,3))):new Date(NaN)}return d(e)}function ne(e,t,r){var a=Dr(e,r.timeZone,r.locale);return a.formatToParts?gr(a,t):wr(a,t)}function gr(e,t){var r=e.formatToParts(t);return r[r.length-1].value}function wr(e,t){var r=e.format(t).replace(/\u200E/g,""),a=/ [\w-+ ]+$/.exec(r);return a?a[0].substr(1):""}function Dr(e,t,r){if(r&&!r.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(r?[r.code,"en-US"]:void 0,{timeZone:t,timeZoneName:e})}function Tr(e,t){var r=pr(t);return r.formatToParts?Mr(r,e):br(r,e)}var yr={year:0,month:1,day:2,hour:3,minute:4,second:5};function Mr(e,t){for(var r=e.formatToParts(t),a=[],n=0;n<r.length;n++){var i=yr[r[n].type];i>=0&&(a[i]=parseInt(r[n].value,10))}return a}function br(e,t){var r=e.format(t).replace(/\u200E/g,""),a=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);return[a[3],a[1],a[2],a[4],a[5],a[6]]}var X={};function pr(e){if(!X[e]){var t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),r=t==="06/25/2014, 00:00:00"||t==="\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";X[e]=r?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return X[e]}var ie=36e5,Cr=6e4,$={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-])(\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function k(e,t,r){var a,n;if(e===""||(a=$.timezoneZ.exec(e),a))return 0;var i;if(a=$.timezoneHH.exec(e),a)return i=parseInt(a[2],10),oe()?(n=i*ie,a[1]==="+"?-n:n):NaN;if(a=$.timezoneHHMM.exec(e),a){i=parseInt(a[2],10);var o=parseInt(a[3],10);return oe(i,o)?(n=i*ie+o*Cr,a[1]==="+"?-n:n):NaN}if(xr(e)){t=new Date(t||Date.now());var u=r?t:Nr(t),s=j(u,e),f=r?s:Or(t,s,e);return-f}return NaN}function Nr(e){return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))}function j(e,t){var r=Tr(e,t),a=Date.UTC(r[0],r[1]-1,r[2],r[3]%24,r[4],r[5]),n=e.getTime(),i=n%1e3;return n-=i>=0?i:1e3+i,a-n}function Or(e,t,r){var a=e.getTime(),n=a-t,i=j(new Date(n),r);if(t===i)return t;n-=i-t;var o=j(new Date(n),r);return i===o?i:Math.max(i,o)}function oe(e,t){return!(t!=null&&(t<0||t>59))}var ue={};function xr(e){if(ue[e])return!0;try{return Intl.DateTimeFormat(void 0,{timeZone:e}),ue[e]=!0,!0}catch{return!1}}var A=60*1e3,Yr={X:function(e,t,r,a){var n=a._originalDate||e,i=a.timeZone?k(a.timeZone,n,!0)/A:n.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return se(i);case"XXXX":case"XX":return U(i);case"XXXXX":case"XXX":default:return U(i,":")}},x:function(e,t,r,a){var n=a._originalDate||e,i=a.timeZone?k(a.timeZone,n,!0)/A:n.getTimezoneOffset();switch(t){case"x":return se(i);case"xxxx":case"xx":return U(i);case"xxxxx":case"xxx":default:return U(i,":")}},O:function(e,t,r,a){var n=a._originalDate||e,i=a.timeZone?k(a.timeZone,n,!0)/A:n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Sr(i,":");case"OOOO":default:return"GMT"+U(i,":")}},z:function(e,t,r,a){var n=a._originalDate||e;switch(t){case"z":case"zz":case"zzz":return ne("short",n,a);case"zzzz":default:return ne("long",n,a)}}};function _(e,t){for(var r=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return r+a}function U(e,t){var r=t||"",a=e>0?"-":"+",n=Math.abs(e),i=_(Math.floor(n/60),2),o=_(n%60,2);return a+i+r+o}function se(e,t){if(e%60===0){var r=e>0?"-":"+";return r+_(Math.abs(e)/60,2)}return U(e,t)}function Sr(e,t){var r=e>0?"-":"+",a=Math.abs(e),n=Math.floor(a/60),i=a%60;if(i===0)return r+String(n);var o=t||"";return r+String(n)+o+_(i,2)}var Pr=Yr,Ur=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,Wr=Ur,R=36e5,fe=6e4,Ir=2,w={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:Wr};function pe(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(e===null)return new Date(NaN);var r=t||{},a=r.additionalDigits==null?Ir:h(r.additionalDigits);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]")return new Date(e.getTime());if(typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]")return new Date(e);if(!(typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"))return new Date(NaN);var n=kr(e),i=Er(n.date,a),o=i.year,u=i.restDateString,s=Fr(u,o);if(isNaN(s))return new Date(NaN);if(s){var f=s.getTime(),c=0,m;if(n.time&&(c=Hr(n.time),isNaN(c)))return new Date(NaN);if(n.timeZone||r.timeZone){if(m=k(n.timeZone||r.timeZone,new Date(f+c)),isNaN(m))return new Date(NaN)}else m=x(new Date(f+c)),m=x(new Date(f+c+m));return new Date(f+c+m)}else return new Date(NaN)}function kr(e){var t={},r=w.dateTimePattern.exec(e),a;if(r?(t.date=r[1],a=r[3]):(r=w.datePattern.exec(e),r?(t.date=r[1],a=r[2]):(t.date=null,a=e)),a){var n=w.timeZone.exec(a);n?(t.time=a.replace(n[1],""),t.timeZone=n[1].trim()):t.time=a}return t}function Er(e,t){var r=w.YYY[t],a=w.YYYYY[t],n;if(n=w.YYYY.exec(e)||a.exec(e),n){var i=n[1];return{year:parseInt(i,10),restDateString:e.slice(i.length)}}if(n=w.YY.exec(e)||r.exec(e),n){var o=n[1];return{year:parseInt(o,10)*100,restDateString:e.slice(o.length)}}return{year:null}}function Fr(e,t){if(t===null)return null;var r,a,n,i;if(e.length===0)return a=new Date(0),a.setUTCFullYear(t),a;if(r=w.MM.exec(e),r)return a=new Date(0),n=parseInt(r[1],10)-1,de(t,n)?(a.setUTCFullYear(t,n),a):new Date(NaN);if(r=w.DDD.exec(e),r){a=new Date(0);var o=parseInt(r[1],10);return Lr(t,o)?(a.setUTCFullYear(t,0,o),a):new Date(NaN)}if(r=w.MMDD.exec(e),r){a=new Date(0),n=parseInt(r[1],10)-1;var u=parseInt(r[2],10);return de(t,n,u)?(a.setUTCFullYear(t,n,u),a):new Date(NaN)}if(r=w.Www.exec(e),r)return i=parseInt(r[1],10)-1,le(t,i)?ce(t,i):new Date(NaN);if(r=w.WwwD.exec(e),r){i=parseInt(r[1],10)-1;var s=parseInt(r[2],10)-1;return le(t,i,s)?ce(t,i,s):new Date(NaN)}return null}function Hr(e){var t,r,a;if(t=w.HH.exec(e),t)return r=parseFloat(t[1].replace(",",".")),q(r)?r%24*R:NaN;if(t=w.HHMM.exec(e),t)return r=parseInt(t[1],10),a=parseFloat(t[2].replace(",",".")),q(r,a)?r%24*R+a*fe:NaN;if(t=w.HHMMSS.exec(e),t){r=parseInt(t[1],10),a=parseInt(t[2],10);var n=parseFloat(t[3].replace(",","."));return q(r,a,n)?r%24*R+a*fe+n*1e3:NaN}return null}function ce(e,t,r){t=t||0,r=r||0;var a=new Date(0);a.setUTCFullYear(e,0,4);var n=a.getUTCDay()||7,i=t*7+r+1-n;return a.setUTCDate(a.getUTCDate()+i),a}var _r=[31,28,31,30,31,30,31,31,30,31,30,31],zr=[31,29,31,30,31,30,31,31,30,31,30,31];function Ce(e){return e%400===0||e%4===0&&e%100!==0}function de(e,t,r){if(t<0||t>11)return!1;if(r!=null){if(r<1)return!1;var a=Ce(e);if(a&&r>zr[t]||!a&&r>_r[t])return!1}return!0}function Lr(e,t){if(t<1)return!1;var r=Ce(e);return!(r&&t>366||!r&&t>365)}function le(e,t,r){return!(t<0||t>52||r!=null&&(r<0||r>6))}function q(e,t,r){return!(e!=null&&(e<0||e>=25)||t!=null&&(t<0||t>=60)||r!=null&&(r<0||r>=60))}var Xr=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function Ne(e,t,r){var a=String(t),n=r||{},i=a.match(Xr);if(i){var o=pe(e,n);a=i.reduce(function(u,s){if(s[0]==="'")return u;var f=u.indexOf(s),c=u[f-1]==="'",m=u.replace(s,"'"+Pr[s[0]](o,s,null,n)+"'");return c?m.substring(0,f-1)+m.substring(f+1):m},a)}return ar(e,a,n)}function $r(e,t,r){var a=pe(e,r),n=k(t,a,!0),i=new Date(a.getTime()-n);return new Date(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds())}function Ar(e,t,r,a){var n=Me(a);return n.timeZone=t,Ne($r(e,t),r,n)}const Oe=["years","months","weeks","days","hours","minutes","seconds"],Qr=["10 minutes","60 minutes","3 hours","24 hours","3 days","7 days","30 days","90 days"],xe=new RegExp(`(\\d+)\\s(${Oe.join("|")})`),Rr=e=>{if(typeof e!="string")return!1;for(const t of Oe)if(t===e)return!0;return!1},Gr=e=>{if(e===null||typeof e!="object")return!1;for(const t of Object.keys(e))if(!Rr(t))return!1;return!0},Br=e=>{if(e===null||typeof e!="string")return!1;const t=e.match(xe);if(!t)return!1;const[,r,a]=t;return!!r&&!!a},Vr=()=>be(We(new Date,{hours:24})),qr=e=>{const[,t,r]=e.match(xe);return{[r]:parseInt(t,10)}},Jr=e=>{const t=typeof e=="string"?qr(e):e;return be(P(new Date,t))},jr=e=>{const t=parseInt(e)*1e3;if(!!e.endsWith("s")&&!isNaN(t))return vr({start:0,end:t})},me="yyyy-MM-dd z HH:mm:ss.SS";function Kr(e,t="UTC"){if(!e)return"";try{Ye(e)&&(e=Zr(e));const r=hr(e);return t==="local"?Ne(r,me):t==="relative"?fr(r)+" ago":Ar(r,"UTC",me)}catch{return""}}function Zr(e){if(!Ye(e))throw new TypeError("provided value is not a timestamp");const t=new Date(null);return t.setTime(Number(e.seconds)*1e3+e.nanos/1e3),t}function Ye(e){return typeof e=="object"?e.seconds!==void 0&&e.nanos!==void 0:!1}function ea(e){return e===null?"":(typeof e=="string"&&(e=jr(e)),dr(e,{delimiter:", "}))}export{ea as a,Br as b,Vr as c,Qr as d,Kr as f,Gr as i,Jr as t};
