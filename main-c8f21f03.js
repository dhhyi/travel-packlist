import{a as P}from"./chunk-dd3afaac.js";import{a as Me,b as v}from"./chunk-1d4264f5.js";import{o as Re,r as Ie}from"./chunk-b794de41.js";import{m as Ne,p as ke,q as a}from"./chunk-ec7c250c.js";import{c as ve,d as D,e as ye,f as Se,g as Ce,h as Te,i as Ae,j as Pe}from"./chunk-ca9721e1.js";import{b as Oe}from"./chunk-d2f9e219.js";import{$ as G,A as _,Aa as z,B as c,G as h,Ga as ce,I as re,La as pe,N as oe,Q as u,Qa as ue,S as w,Ta as me,Tb as be,Ua as x,Vb as L,W as d,Wa as K,Yb as _e,Z as ie,Za as H,_b as A,aa as s,bb as de,bc as we,c as N,da as ne,g as J,gb as g,hb as E,ia as se,ib as T,ja as ae,k as Q,kb as fe,l as k,lc as B,m as ee,na as O,nb as he,nc as Ee,p as m,ra as le,rb as X,sb as ge,t as te,u as j,va as W,w as $,y as M,z as C}from"./chunk-34570b52.js";import"./chunk-303c11e1.js";import{a as V}from"./chunk-c4e53d60.js";import{a as Y}from"./chunk-363de978.js";function He(t,i){if(t&1){let e=fe();g(0,"div",8)(1,"button",10),X("click",function(){se(e);let o=ge();return ae(o.scrollTop());}),T(2,"app-icon-arrow-upward",6),E()();}}var xe=(()=>{class t{state=s(a);overlayVisible=ce(!1);scrollTopVisible=_e(()=>this.state.signal("scrollY")()>100);scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(r){return new(r||t)();};static ɵcmp=pe({type:t,selectors:[["app-root"]],decls:11,vars:3,consts:()=>{let e;e="Zur TravelPacklist";let r;r="Zur Konfiguration";let o;o="TravelPacklist";let l;return l="Zum Seitenanfang",[o,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["type","button","role","link","routerLink","/config","routerLinkActive","hidden","aria-label",r,1,"link","pr-2"],[1,"h-6","w-6"],[1,"flex","grow","flex-col","pb-[3.5rem]",3,"inert"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],[3,"overlayVisible"],["type","button","aria-label",l,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"]];},template:function(r,o){r&1&&(g(0,"nav",1)(1,"button",2),T(2,"img",3),g(3,"h1",4),he(4,0),E()(),g(5,"button",5),T(6,"app-icon-cog",6),E()(),g(7,"div",7),T(8,"router-outlet"),ue(9,He,3,0,"div",8),E(),g(10,"app-dialog",9),X("overlayVisible",function(n){return o.overlayVisible.set(n);}),E()),r&2&&(H("inert",o.overlayVisible()),z(7),H("inert",o.overlayVisible()),z(2),de(o.scrollTopVisible()?9:-1));},dependencies:[Pe,ve,ye,Se,Re,Me,Ie],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],changeDetection:0});}return t;})();var I="Service workers are disabled or not supported by this browser";function Xe(t){return j(()=>ee(new Error(t)));}var y=class{serviceWorker;worker;registration;events;constructor(i){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=Xe(I);else{let r=$(i,"controllerchange").pipe(m(()=>i.controller)),o=j(()=>k(i.controller)),l=te(o,r);this.worker=l.pipe(c(b=>!!b)),this.registration=this.worker.pipe(u(()=>i.getRegistration()));let S=$(i,"message").pipe(m(b=>b.data)).pipe(c(b=>b&&b.type)).pipe(oe());S.connect(),this.events=S;}}postMessage(i,e){return this.worker.pipe(h(1),w(r=>{r.postMessage(Y({action:i},e));})).toPromise().then(()=>{});}postMessageWithOperation(i,e,r){let o=this.waitForOperationCompleted(r),l=this.postMessage(i,e);return Promise.all([l,o]).then(([,n])=>n);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(i){let e;return typeof i=="string"?e=r=>r.type===i:e=r=>i.includes(r.type),this.events.pipe(c(e));}nextEventOfType(i){return this.eventsOfType(i).pipe(h(1));}waitForOperationCompleted(i){return this.eventsOfType("OPERATION_COMPLETED").pipe(c(e=>e.nonce===i),h(1),m(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},Be=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new J();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=_,this.notificationClicks=_,this.subscription=_;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(m(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(m(o=>o.data)),this.pushManager=this.sw.registration.pipe(m(o=>o.pushManager));let r=this.pushManager.pipe(u(o=>o.getSubscription()));this.subscription=C(r,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(I));let r={userVisibleOnly:!0},o=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),l=new Uint8Array(new ArrayBuffer(o.length));for(let n=0;n<o.length;n++)l[n]=o.charCodeAt(n);return r.applicationServerKey=l,this.pushManager.pipe(u(n=>n.subscribe(r)),h(1)).toPromise().then(n=>(this.subscriptionChanges.next(n),n));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let e=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(o=>{if(!o)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(h(1),u(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(r){return new(r||t)(G(y));};static ɵprov=d({token:t,factory:t.ɵfac});}return t;})(),Z=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=_,this.unrecoverable=_;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(r){return new(r||t)(G(y));};static ɵprov=d({token:t,factory:t.ɵfac});}return t;})();var Le=new ie("");function Ze(t,i,e,r){return()=>{if(!(B(r)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let o=t.get(le),l=t.get(K);o.runOutsideAngular(()=>{let p=navigator.serviceWorker,f=()=>p.controller?.postMessage({action:"INITIALIZE"});p.addEventListener("controllerchange",f),l.onDestroy(()=>{p.removeEventListener("controllerchange",f);});});let n;if(typeof e.registrationStrategy=="function")n=e.registrationStrategy();else{let[p,...f]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":n=k(null);break;case"registerWithDelay":n=De(+f[0]||0);break;case"registerWhenStable":let S=Q(t.get(K).whenStable());n=f[0]?C(S,De(+f[0])):S;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}o.runOutsideAngular(()=>n.pipe(h(1)).subscribe(()=>navigator.serviceWorker.register(i,{scope:e.scope}).catch(p=>console.error("Service worker registration failed with:",p))));};}function De(t){return k(null).pipe(re(t));}function qe(t,i){return new y(B(i)&&t.enabled!==!1?navigator.serviceWorker:void 0);}var R=class{enabled;scope;registrationStrategy;};function Ve(t,i={}){return ne([Be,Z,{provide:Le,useValue:t},{provide:R,useValue:i},{provide:y,useFactory:qe,deps:[R,W]},{provide:me,useFactory:Ze,deps:[O,Le,R,W],multi:!0}]);}var Fe=!1,Ue=async()=>{if(s(a).get("rulesContainComments")&&!Fe){let i=await v("Die aktuellen Regeln enthalten Kommentare. Wenn du sie im grafischen Editor bearbeitest, werden diese Kommentare verworfen. M\xF6chtest du trotzdem fortfahren?");return i&&(Fe=!0),i;}return!0;};var q=()=>{let t=s(a),i=s(D),e=t.get("ruleParserError");return e?i.createUrlTree(["/rules-error"],{queryParams:{error:e}}):!0;};var je=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-7284162d.js"),canActivate:[q]},{path:"config",loadComponent:()=>import("./chunk-f7455e35.js")},{path:"rules",loadComponent:()=>import("./chunk-de58d6ce.js"),canActivate:[q,Ue]},{path:"rules-raw",loadComponent:()=>import("./chunk-e620b0f4.js")},{path:"rules-error",loadComponent:()=>import("./chunk-090e8493.js")},{path:"documentation",loadComponent:()=>import("./chunk-f6e12c6b.js")},{path:"**",redirectTo:"/packlist"}];var $e=(()=>{class t{state=s(a);document=s(we);init(){let e=this.state.signal("theme");A(()=>{this.applyTheme(e());});let r=this.state.signal("preferredLanguage");A(()=>{this.applyLanguage(r());});let o=this.state.signal("fontSize");A(()=>{this.applyFontSize(o());});let l=this.state.signal("accessibility");A(()=>{this.applyAccessibilityClass(l());});}applyTheme(e){let r=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&r||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(L()){console.warn("Language switching is disabled in dev mode");return;}let r=window.location.href,o=window.location.hash,l=`index${e==="en"?"":`.${e}`}.html`,p=r.substring(0,r.indexOf(o))+l+window.location.hash;setTimeout(()=>{window.location.href=p;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var Ge=(()=>{class t{swUpdate=s(Z);status=s(a).signal("serviceWorkerStatus");init(){C(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(w(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let r=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,r.reason);}}),c(e=>e.type==="VERSION_READY"),u(()=>v("Eine neue Version der App ist verf\xFCgbar. M\xF6chtest du neu laden?")),c(N)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?M(6e4).pipe(u(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var Ye=V("Filesystem",{web:()=>import("./chunk-e7e9eb3c.js").then(t=>new t.FilesystemWeb())});var Je=V("Share",{web:()=>import("./chunk-8ed4999d.js").then(t=>new t.ShareWeb())});var U=class extends P{state=s(a);async webShareRules(){let i=this.state.get("rules");if(!i){console.error("No rules available");return;}let e=this.state.get("exportFileName");await navigator.share({title:e,files:[new File([i],e,{type:"text/plain"})]});}downloadRules(){let i=this.state.get("rules");if(!i){console.error("No rules available");return;}let e=new Blob([i],{type:"text/plain"}),r=URL.createObjectURL(e),o=document.createElement("a");o.href=r,o.download=this.state.get("exportFileName"),o.click();}async exportRules(){this.state.get("isMobile")&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var ze=(()=>{class t{router=s(D);state=s(a);exportNeeded=this.state.signal("exportNeeded");reminderActive=this.state.signal("exportReminder");lastAskedHash=[];init(){M(3e4).pipe(c(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),m(()=>this.state.get("rulesHash")),c(e=>!this.lastAskedHash.includes(e)),w(e=>{this.lastAskedHash.push(e);}),u(()=>v("Die aktuellen Regeln wurden seit einiger Zeit nicht mehr exportiert. M\xF6chtest du sie jetzt exportieren?")),c(N)).subscribe(()=>{this.router.navigate(["/config"],{fragment:"export-now"});});}exportOverdue(){let e=this.state.get("lastExportDate");return new Date().getTime()-e>We(10);}enoughTimeSinceLastEditPassed(){let e=this.state.get("lastRulesAction");return new Date().getTime()-e>We(2);}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function We(t){return t*60*1e3;}function Qe(t){return{isTrackWeight:()=>t.get(a).get("trackWeight")};}var Ke={providers:[be(),Ce(je,Te(),Ae()),Ve("ngsw-worker.js",{enabled:!L()&&!0,registrationStrategy:"registerImmediately"}),x(()=>{s($e).init();}),x(()=>{s(Ge).init();}),x(()=>{s(ze).init();}),{deps:[O],provide:Ne,useFactory:Qe},{provide:P,useClass:U},Oe(),ke()]};Ee(xe,Ke).catch(t=>{console.error(t);});/**i18n:b8d4d2f9d1240cc11e4b937c8e3bec391e40968f9f0185d6119133313df6ac24*/