import{a as I}from"./chunk-RAQBVYOW.js";import{a as Me}from"./chunk-H2SPHNQA.js";import{a as ke,b as y}from"./chunk-UESBYECV.js";import{j as De,n as a}from"./chunk-QSS7ZLS3.js";import{b as Ae,f as Y,g as Ie,j as Re,k as U,l as _e,m as xe,n as Ne,o as Pe,p as Oe}from"./chunk-GVLRKNS6.js";import{$ as B,A as E,Aa as K,Ab as Ce,B as l,Bb as ye,G as v,Ha as fe,I as ne,N as se,Pa as M,Q as p,S as C,Va as he,W as u,Wa as D,Wb as Se,Ya as X,Yb as F,Z as ae,aa as n,bc as Te,c as N,cb as ge,da as le,dc as L,g as te,hb as ve,ib as we,ja as pe,k as re,ka as ce,l as P,la as me,m as oe,nb as f,oa as k,ob as w,p as m,pb as h,rb as be,sa as ue,t as ie,u as H,va as de,w as Z,wb as Ee,y as O,z as A}from"./chunk-QP6SEBO3.js";import"./chunk-ODAM5CCI.js";import{a as j}from"./chunk-PHVZFTPN.js";import{a as ee}from"./chunk-XVUYO3C5.js";var V=class r{class=de("h-4 w-4");static ɵfac=function(t){return new(t||r)();};static ɵcmp=M({type:r,selectors:[["app-icon-cog"]],inputs:{class:[1,"class"]},decls:2,vars:2,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960"],["d","m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"]],template:function(t,o){t&1&&(me(),f(0,"svg",0),h(1,"path",1),w()),t&2&&ve(o.class());},encapsulation:2,changeDetection:0});};function ze(r,e){if(r&1){let t=be();f(0,"div",8)(1,"button",9),Ce("click",function(){pe(t);let i=ye();return ce(i.scrollTop());}),h(2,"app-icon-up",6),w()();}}var q=class r{state=n(a);scrollTopVisible=Te(()=>this.state.signal("scrollY")()>100);scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(t){return new(t||r)();};static ɵcmp=M({type:r,selectors:[["app-root"]],decls:11,vars:1,consts:()=>{let e;e="application icon";let t;return t="TravelPacklist",[t,[1,"flex","h-12","flex-row","items-center","pb-2"],["routerLink","/",1,"flex","grow"],["alt",e,"src","icon.svg",1,"h-8"],[1,"text-2xl","font-bold"],["routerLink","/config",1,"pr-2"],[1,"h-6","w-6"],[1,"grow-children","flex","grow","flex-col"],[1,"sticky","bottom-2","flex","justify-center"],["type","button",1,"rounded-3xl","border","border-slate-300","shadow-xl",3,"click"]];},template:function(t,o){t&1&&(f(0,"nav",1)(1,"a",2),h(2,"img",3),f(3,"span",4),Ee(4,0),w()(),f(5,"a",5),h(6,"app-icon-cog",6),w()(),f(7,"div",7),h(8,"router-outlet"),ge(9,ze,3,0,"div",8),w(),h(10,"app-dialog")),t&2&&(fe(9),we(o.scrollTopVisible()?9:-1));},dependencies:[Oe,Re,_e,V,Me,ke],encapsulation:2,changeDetection:0});};var x="Service workers are disabled or not supported by this browser";function He(r){return H(()=>oe(new Error(r)));}var S=class{serviceWorker;worker;registration;events;constructor(e){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=He(x);else{let o=Z(e,"controllerchange").pipe(m(()=>e.controller)),i=H(()=>P(e.controller)),c=ie(i,o);this.worker=c.pipe(l(b=>!!b)),this.registration=this.worker.pipe(p(()=>e.getRegistration()));let T=Z(e,"message").pipe(m(b=>b.data)).pipe(l(b=>b&&b.type)).pipe(se());T.connect(),this.events=T;}}postMessage(e,t){return this.worker.pipe(v(1),C(o=>{o.postMessage(ee({action:e},t));})).toPromise().then(()=>{});}postMessageWithOperation(e,t,o){let i=this.waitForOperationCompleted(o),c=this.postMessage(e,t);return Promise.all([c,i]).then(([,s])=>s);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(e){let t;return typeof e=="string"?t=o=>o.type===e:t=o=>e.includes(o.type),this.events.pipe(l(t));}nextEventOfType(e){return this.eventsOfType(e).pipe(v(1));}waitForOperationCompleted(e){return this.eventsOfType("OPERATION_COMPLETED").pipe(l(t=>t.nonce===e),v(1),m(t=>{if(t.result!==void 0)return t.result;throw new Error(t.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},Ze=(()=>{class r{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new te();constructor(t){if(this.sw=t,!t.isEnabled){this.messages=E,this.notificationClicks=E,this.subscription=E;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(m(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(m(i=>i.data)),this.pushManager=this.sw.registration.pipe(m(i=>i.pushManager));let o=this.pushManager.pipe(p(i=>i.getSubscription()));this.subscription=A(o,this.subscriptionChanges);}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(x));let o={userVisibleOnly:!0},i=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),c=new Uint8Array(new ArrayBuffer(i.length));for(let s=0;s<i.length;s++)c[s]=i.charCodeAt(s);return o.applicationServerKey=c,this.pushManager.pipe(p(s=>s.subscribe(o)),v(1)).toPromise().then(s=>(this.subscriptionChanges.next(s),s));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(x));let t=o=>{if(o===null)throw new Error("Not subscribed to push notifications.");return o.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(v(1),p(t)).toPromise();}decodeBase64(t){return atob(t);}static ɵfac=function(o){return new(o||r)(B(S));};static ɵprov=u({token:r,factory:r.ɵfac});}return r;})(),J=(()=>{class r{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=E,this.unrecoverable=E;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(x));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(x));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t);}static ɵfac=function(o){return new(o||r)(B(S));};static ɵprov=u({token:r,factory:r.ɵfac});}return r;})();var Fe=new ae("");function Be(r,e,t,o){return()=>{if(!(Y(o)&&"serviceWorker"in navigator&&t.enabled!==!1))return;let i=r.get(ue),c=r.get(X);i.runOutsideAngular(()=>{let d=navigator.serviceWorker,g=()=>d.controller?.postMessage({action:"INITIALIZE"});d.addEventListener("controllerchange",g),c.onDestroy(()=>{d.removeEventListener("controllerchange",g);});});let s;if(typeof t.registrationStrategy=="function")s=t.registrationStrategy();else{let[d,...g]=(t.registrationStrategy||"registerWhenStable:30000").split(":");switch(d){case"registerImmediately":s=P(null);break;case"registerWithDelay":s=Le(+g[0]||0);break;case"registerWhenStable":let T=re(r.get(X).whenStable());s=g[0]?A(T,Le(+g[0])):T;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`);}}i.runOutsideAngular(()=>s.pipe(v(1)).subscribe(()=>navigator.serviceWorker.register(e,{scope:t.scope}).catch(d=>console.error("Service worker registration failed with:",d))));};}function Le(r){return P(null).pipe(ne(r));}function Ke(r,e){return new S(Y(e)&&r.enabled!==!1?navigator.serviceWorker:void 0);}var _=class{enabled;scope;registrationStrategy;};function Ue(r,e={}){return le([Ze,J,{provide:Fe,useValue:r},{provide:_,useValue:e},{provide:S,useFactory:Ke,deps:[_,K]},{provide:he,useFactory:Be,deps:[k,Fe,_,K],multi:!0}]);}var je=!1,Ve=async()=>{if(n(a).get("rulesContainComments")&&!je){let e=await y("Die aktuellen Regeln enthalten Kommentare. Wenn du sie im grafischen Editor bearbeitest, werden diese Kommentare verworfen. M\xF6chtest du trotzdem fortfahren?");return e&&(je=!0),e;}return!0;};var Q=()=>{let r=n(a),e=n(U),t=r.get("ruleParserError");return t?e.createUrlTree(["/rules-error"],{queryParams:{error:t}}):!0;};var qe=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-54DCLIXW.js"),canActivate:[Q]},{path:"config",loadComponent:()=>import("./chunk-B4NUQGQG.js")},{path:"rules",loadComponent:()=>import("./chunk-JXC5FDIY.js"),canActivate:[Q,Ve]},{path:"rules-raw",loadComponent:()=>import("./chunk-CWFC4QXQ.js")},{path:"rules-error",loadComponent:()=>import("./chunk-RLZVRVAJ.js")},{path:"documentation",loadComponent:()=>import("./chunk-3KAOH2G4.js")},{path:"**",redirectTo:"/packlist"}];var W=class r{injector=n(k);document=n(Ae);init(){let e=this.injector.get(a),t=e.signal("theme");L(()=>{this.applyTheme(t());});let o=e.signal("preferredLanguage");L(()=>{this.applyLanguage(o());});let i=e.signal("fontSize");L(()=>{this.applyFontSize(i());});}applyTheme(e){let t=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&t||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(F()){console.warn("Language switching is disabled in dev mode");return;}let t=window.location.href,o=window.location.hash,i=`index${e==="en"?"":`.${e}`}.html`,s=t.substring(0,t.indexOf(o))+i+window.location.hash;setTimeout(()=>{window.location.href=s;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}static ɵfac=function(t){return new(t||r)();};static ɵprov=u({token:r,factory:r.ɵfac,providedIn:"root"});};var G=class r{swUpdate=n(J);status=n(a).signal("serviceWorkerStatus");init(){A(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(C(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let t=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,t.reason);}}),l(e=>e.type==="VERSION_READY"),p(()=>y("Eine neue Version der App ist verf\xFCgbar. M\xF6chtest du neu laden?")),l(N)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?O(6e4).pipe(p(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(t){return new(t||r)();};static ɵprov=u({token:r,factory:r.ɵfac,providedIn:"root"});};var Xe=j("Filesystem",{web:()=>import("./chunk-4A3GQRXZ.js").then(r=>new r.FilesystemWeb())});var Ye=j("Share",{web:()=>import("./chunk-U7ZNJLG2.js").then(r=>new r.ShareWeb())});var $=class extends I{state=n(a);async webShareRules(){let e=this.state.get("rules");if(!e){console.error("No rules available");return;}let t=this.state.get("exportFileName");await navigator.share({title:t,files:[new File([e],t,{type:"text/plain"})]});}downloadRules(){let e=this.state.get("rules");if(!e){console.error("No rules available");return;}let t=new Blob([e],{type:"text/plain"}),o=URL.createObjectURL(t),i=document.createElement("a");i.href=o,i.download=this.state.get("exportFileName"),i.click();}async exportRules(){this.state.get("isMobile")&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var z=class r{router=n(U);state=n(a);exportNeeded=this.state.signal("exportNeeded");reminderActive=this.state.signal("exportReminder");lastAskedHash=[];init(){O(3e4).pipe(l(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),m(()=>this.state.get("rulesHash")),l(e=>!this.lastAskedHash.includes(e)),C(e=>{this.lastAskedHash.push(e);}),p(()=>y("Die aktuellen Regeln wurden seit einiger Zeit nicht mehr exportiert. M\xF6chtest du sie jetzt exportieren?")),l(N)).subscribe(()=>{this.router.navigate(["/config"],{fragment:"export-now"});});}exportOverdue(){let e=this.state.get("lastExportDate");return new Date().getTime()-e>We(10);}enoughTimeSinceLastEditPassed(){let e=this.state.get("lastRulesAction");return new Date().getTime()-e>We(2);}static ɵfac=function(t){return new(t||r)();};static ɵprov=u({token:r,factory:r.ɵfac,providedIn:"root"});};function We(r){return r*60*1e3;}function Je(r){return{isTrackWeight:r.signal("trackWeight")};}var Ge={providers:[Se(),xe(qe,Ne(),Pe()),Ue("ngsw-worker.js",{enabled:!F()&&!0,registrationStrategy:"registerImmediately"}),D(()=>{n(W).init();}),D(()=>{n(G).init();}),D(()=>{n(z).init();}),{provide:De,useFactory:Je,deps:[a]},{provide:I,useClass:$}]};Ie(q,Ge).catch(r=>{console.error(r);});/**i18n:717214697a29241ab35fda4f803c9965e2e966609f94cbb4e7c0189a1847a6bb*/