var P=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(P||{}),L=class extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}},I=r=>{var e,t;return r?.androidBridge?"android":!((t=(e=r?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},M=r=>{let e=r.CapacitorCustomPlatform||null,t=r.Capacitor||{},i=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:I(r),n=()=>s()!=="web",a=o=>{let c=w.get(o);return!!(c?.platforms.has(s())||d(o))},d=o=>{var c;return(c=t.PluginHeaders)===null||c===void 0?void 0:c.find(C=>C.name===o)},u=o=>r.console.error(o),w=new Map,E=(o,c={})=>{let C=w.get(o);if(C)return console.warn(`Capacitor plugin "${o}" already registered. Cannot register plugins twice.`),C.proxy;let v=s(),p=d(o),y,q=async()=>(!y&&v in c?y=typeof c[v]=="function"?y=await c[v]():y=c[v]:e!==null&&!y&&"web"in c&&(y=typeof c.web=="function"?y=await c.web():y=c.web),y),_=(l,f)=>{var g,b;if(p){let m=p?.methods.find(h=>f===h.name);if(m)return m.rtype==="promise"?h=>t.nativePromise(o,f.toString(),h):(h,k)=>t.nativeCallback(o,f.toString(),h,k);if(l)return(g=l[f])===null||g===void 0?void 0:g.bind(l)}else{if(l)return(b=l[f])===null||b===void 0?void 0:b.bind(l);throw new L(`"${o}" plugin is not implemented on ${v}`,P.Unimplemented)}},A=l=>{let f,g=(...b)=>{let m=q().then(h=>{let k=_(h,l);if(k){let O=k(...b);return f=O?.remove,O}else throw new L(`"${o}.${l}()" is not implemented on ${v}`,P.Unimplemented)});return l==="addListener"&&(m.remove=async()=>f()),m};return g.toString=()=>`${l.toString()}() { [capacitor code] }`,Object.defineProperty(g,"name",{value:l,writable:!1,configurable:!1}),g},T=A("addListener"),R=A("removeListener"),B=(l,f)=>{let g=T({eventName:l},f),b=async()=>{let h=await g;R({eventName:l,callbackId:h},f)},m=new Promise(h=>g.then(()=>h({remove:b})));return m.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await b()},m},x=new Proxy({},{get(l,f){switch(f){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return p?B:T;case"removeListener":return R;default:return A(f)}}});return i[o]=x,w.set(o,{name:o,proxy:x,platforms:new Set([...Object.keys(c),...p?[v]:[]])}),x};return t.convertFileSrc||(t.convertFileSrc=o=>o),t.getPlatform=s,t.handleError=u,t.isNativePlatform=n,t.isPluginAvailable=a,t.registerPlugin=E,t.Exception=L,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},K=r=>r.Capacitor=M(r),U=K(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),F=U.registerPlugin,$=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let i=!1;this.listeners[e]||(this.listeners[e]=[],i=!0),this.listeners[e].push(t);let n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n),i&&this.sendRetainedArgumentsForEvent(e);let a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,i){let s=this.listeners[e];if(!s){if(i){let n=this.retainedEventArguments[e];n||(n=[]),n.push(t),this.retainedEventArguments[e]=n}return}s.forEach(n=>n(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new U.Exception(e,P.Unimplemented)}unavailable(e="not available"){return new U.Exception(e,P.Unavailable)}async removeListener(e,t){let i=this.listeners[e];if(!i)return;let s=i.indexOf(t);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(i=>{this.notifyListeners(e,i)}))}};var H=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),D=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),j=class extends ${async getCookies(){let e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[s,n]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=D(s).trim(),n=D(n).trim(),t[s]=n}),t}async setCookie(e){try{let t=H(e.key),i=H(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,n=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${s}; path=${n}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{let e=document.cookie.split(";")||[];for(let t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}},J=F("CapacitorCookies",{web:()=>new j}),W=async r=>new Promise((e,t)=>{let i=new FileReader;i.onload=()=>{let s=i.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},i.onerror=s=>t(s),i.readAsDataURL(r)}),G=(r={})=>{let e=Object.keys(r);return Object.keys(r).map(s=>s.toLocaleLowerCase()).reduce((s,n,a)=>(s[n]=r[e[a]],s),{})},V=(r,e=!0)=>r?Object.entries(r).reduce((i,s)=>{let[n,a]=s,d,u;return Array.isArray(a)?(u="",a.forEach(w=>{d=e?encodeURIComponent(w):w,u+=`${n}=${d}&`}),u.slice(0,-1)):(d=e?encodeURIComponent(a):a,u=`${n}=${d}`),`${i}&${u}`},"").substr(1):null,z=(r,e={})=>{let t=Object.assign({method:r.method||"GET",headers:r.headers},e),s=G(r.headers)["content-type"]||"";if(typeof r.data=="string")t.body=r.data;else if(s.includes("application/x-www-form-urlencoded")){let n=new URLSearchParams;for(let[a,d]of Object.entries(r.data||{}))n.set(a,d);t.body=n.toString()}else if(s.includes("multipart/form-data")||r.data instanceof FormData){let n=new FormData;if(r.data instanceof FormData)r.data.forEach((d,u)=>{n.append(u,d)});else for(let d of Object.keys(r.data))n.append(d,r.data[d]);t.body=n;let a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(s.includes("application/json")||typeof r.data=="object")&&(t.body=JSON.stringify(r.data));return t},S=class extends ${async request(e){let t=z(e,e.webFetchExtra),i=V(e.params,e.shouldEncodeUrlParams),s=i?`${e.url}?${i}`:e.url,n=await fetch(s,t),a=n.headers.get("content-type")||"",{responseType:d="text"}=n.ok?e:{};a.includes("application/json")&&(d="json");let u,w;switch(d){case"arraybuffer":case"blob":w=await n.blob(),u=await W(w);break;case"json":u=await n.json();break;case"document":case"text":default:u=await n.text()}let E={};return n.headers.forEach((o,c)=>{E[c]=o}),{data:u,headers:E,status:n.status,url:n.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}},Q=F("CapacitorHttp",{web:()=>new S});export{F as a,$ as b,z as c};
/**i18n:20a69378bcb30b4ad603187e7bb8505c5b8b76ebdfce9873b2ffab296fc1dc45*/
