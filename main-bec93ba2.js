import{a as y}from"./chunk-569712cb.js";import{a as Ne,b as v}from"./chunk-2ef27b60.js";import{o as ye,r as Ae}from"./chunk-f6306f17.js";import{m as Re,p as Ie,q as a}from"./chunk-b4a90f47.js";import{c as be,d as D,e as Ee,f as ve,g as Se,h as Te,i as Ce,j as Pe}from"./chunk-35feb389.js";import{b as Me}from"./chunk-4d10534e.js";import{$ as G,$a as pe,A as w,Aa as se,B as c,G as h,I as Q,Ka as ae,Lb as he,N as ee,Nb as x,Pa as le,Q as u,Qb as ge,S as _,Sa as ce,Sb as L,Ta as O,Va as z,Vb as we,W as d,Z as te,aa as s,bc as K,c as I,da as re,dc as _e,eb as b,fb as P,g as Z,gb as E,ia as oe,ib as ue,ja as ie,k as q,l as N,lb as me,m as Y,na as k,p as m,pb as de,qb as fe,ra as ne,t as J,u as V,va as W,w as $,y as M,z as C}from"./chunk-6c739ab3.js";import"./chunk-678b6c41.js";import{a as F}from"./chunk-8f27351b.js";import{a as B}from"./chunk-e37fab44.js";function ze(t,o){if(t&1){let e=ue();b(0,"div",8)(1,"button",9),de("click",function(){oe(e);let i=fe();return ie(i.scrollTop());}),E(2,"app-icon-arrow-upward",6),P()();}}var ke=(()=>{class t{state=s(a);scrollTopVisible=ge(()=>this.state.signal("scrollY")()>100);scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(r){return new(r||t)();};static ɵcmp=ae({type:t,selectors:[["app-root"]],decls:11,vars:1,consts:()=>{let e;e="Go to TravelPacklist";let r;r="Go to configuration";let i;i="TravelPacklist";let l;return l="Scroll to top",[i,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["type","button","role","link","routerLink","/config","routerLinkActive","hidden","aria-label",r,1,"link","pr-2"],[1,"h-6","w-6"],[1,"flex","grow","flex-col","pb-[3.5rem]"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],["type","button","aria-label",l,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-300","shadow-xl",3,"click"]];},template:function(r,i){r&1&&(b(0,"nav",1)(1,"button",2),E(2,"img",3),b(3,"h1",4),me(4,0),P()(),b(5,"button",5),E(6,"app-icon-cog",6),P()(),b(7,"div",7),E(8,"router-outlet"),le(9,ze,3,0,"div",8),P(),E(10,"app-dialog")),r&2&&(se(9),pe(i.scrollTopVisible()?9:-1));},dependencies:[Pe,be,Ee,ve,ye,Ne,Ae],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],changeDetection:0});}return t;})();var R="Service workers are disabled or not supported by this browser";function Ke(t){return V(()=>Y(new Error(t)));}var S=class{serviceWorker;worker;registration;events;constructor(o){if(this.serviceWorker=o,!o)this.worker=this.events=this.registration=Ke(R);else{let r=$(o,"controllerchange").pipe(m(()=>o.controller)),i=V(()=>N(o.controller)),l=J(i,r);this.worker=l.pipe(c(g=>!!g)),this.registration=this.worker.pipe(u(()=>o.getRegistration()));let T=$(o,"message").pipe(m(g=>g.data)).pipe(c(g=>g&&g.type)).pipe(ee());T.connect(),this.events=T;}}postMessage(o,e){return this.worker.pipe(h(1),_(r=>{r.postMessage(B({action:o},e));})).toPromise().then(()=>{});}postMessageWithOperation(o,e,r){let i=this.waitForOperationCompleted(r),l=this.postMessage(o,e);return Promise.all([l,i]).then(([,n])=>n);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(o){let e;return typeof o=="string"?e=r=>r.type===o:e=r=>o.includes(r.type),this.events.pipe(c(e));}nextEventOfType(o){return this.eventsOfType(o).pipe(h(1));}waitForOperationCompleted(o){return this.eventsOfType("OPERATION_COMPLETED").pipe(c(e=>e.nonce===o),h(1),m(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},He=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new Z();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=w,this.notificationClicks=w,this.subscription=w;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(m(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(m(i=>i.data)),this.pushManager=this.sw.registration.pipe(m(i=>i.pushManager));let r=this.pushManager.pipe(u(i=>i.getSubscription()));this.subscription=C(r,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(R));let r={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),l=new Uint8Array(new ArrayBuffer(i.length));for(let n=0;n<i.length;n++)l[n]=i.charCodeAt(n);return r.applicationServerKey=l,this.pushManager.pipe(u(n=>n.subscribe(r)),h(1)).toPromise().then(n=>(this.subscriptionChanges.next(n),n));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(R));let e=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(h(1),u(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(r){return new(r||t)(G(S));};static ɵprov=d({token:t,factory:t.ɵfac});}return t;})(),H=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=w,this.unrecoverable=w;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(R));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(R));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(r){return new(r||t)(G(S));};static ɵprov=d({token:t,factory:t.ɵfac});}return t;})();var Oe=new te("");function Xe(t,o,e,r){return()=>{if(!(K(r)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let i=t.get(ne),l=t.get(z);i.runOutsideAngular(()=>{let p=navigator.serviceWorker,f=()=>p.controller?.postMessage({action:"INITIALIZE"});p.addEventListener("controllerchange",f),l.onDestroy(()=>{p.removeEventListener("controllerchange",f);});});let n;if(typeof e.registrationStrategy=="function")n=e.registrationStrategy();else{let[p,...f]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":n=N(null);break;case"registerWithDelay":n=xe(+f[0]||0);break;case"registerWhenStable":let T=q(t.get(z).whenStable());n=f[0]?C(T,xe(+f[0])):T;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}i.runOutsideAngular(()=>n.pipe(h(1)).subscribe(()=>navigator.serviceWorker.register(o,{scope:e.scope}).catch(p=>console.error("Service worker registration failed with:",p))));};}function xe(t){return N(null).pipe(Q(t));}function Be(t,o){return new S(K(o)&&t.enabled!==!1?navigator.serviceWorker:void 0);}var A=class{enabled;scope;registrationStrategy;};function Le(t,o={}){return re([He,H,{provide:Oe,useValue:t},{provide:A,useValue:o},{provide:S,useFactory:Be,deps:[A,W]},{provide:ce,useFactory:Xe,deps:[k,Oe,A,W],multi:!0}]);}var De=!1,Fe=async()=>{if(s(a).get("rulesContainComments")&&!De){let o=await v("The current rules contain comments. Editing them with the graphical editor will discard these comments. Do you want to proceed?");return o&&(De=!0),o;}return!0;};var X=()=>{let t=s(a),o=s(D),e=t.get("ruleParserError");return e?o.createUrlTree(["/rules-error"],{queryParams:{error:e}}):!0;};var Ue=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-81f7a763.js"),canActivate:[X]},{path:"config",loadComponent:()=>import("./chunk-93862fdf.js")},{path:"rules",loadComponent:()=>import("./chunk-aee0d499.js"),canActivate:[X,Fe]},{path:"rules-raw",loadComponent:()=>import("./chunk-1a3a208b.js")},{path:"rules-error",loadComponent:()=>import("./chunk-2b7bf656.js")},{path:"documentation",loadComponent:()=>import("./chunk-207c7629.js")},{path:"**",redirectTo:"/packlist"}];var je=(()=>{class t{state=s(a);document=s(we);init(){let e=this.state.signal("theme");L(()=>{this.applyTheme(e());});let r=this.state.signal("preferredLanguage");L(()=>{this.applyLanguage(r());});let i=this.state.signal("fontSize");L(()=>{this.applyFontSize(i());});}applyTheme(e){let r=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&r||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(x()){console.warn("Language switching is disabled in dev mode");return;}let r=window.location.href,i=window.location.hash,l=`index${e==="en"?"":`.${e}`}.html`,p=r.substring(0,r.indexOf(i))+l+window.location.hash;setTimeout(()=>{window.location.href=p;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var Ve=(()=>{class t{swUpdate=s(H);status=s(a).signal("serviceWorkerStatus");init(){C(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(_(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let r=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,r.reason);}}),c(e=>e.type==="VERSION_READY"),u(()=>v("A new version of the app is available. Do you want to reload?")),c(I)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?M(6e4).pipe(u(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var Ze=F("Filesystem",{web:()=>import("./chunk-a761f874.js").then(t=>new t.FilesystemWeb())});var qe=F("Share",{web:()=>import("./chunk-0cc25f7d.js").then(t=>new t.ShareWeb())});var j=class extends y{state=s(a);async webShareRules(){let o=this.state.get("rules");if(!o){console.error("No rules available");return;}let e=this.state.get("exportFileName");await navigator.share({title:e,files:[new File([o],e,{type:"text/plain"})]});}downloadRules(){let o=this.state.get("rules");if(!o){console.error("No rules available");return;}let e=new Blob([o],{type:"text/plain"}),r=URL.createObjectURL(e),i=document.createElement("a");i.href=r,i.download=this.state.get("exportFileName"),i.click();}async exportRules(){this.state.get("isMobile")&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var Ge=(()=>{class t{router=s(D);state=s(a);exportNeeded=this.state.signal("exportNeeded");reminderActive=this.state.signal("exportReminder");lastAskedHash=[];init(){M(3e4).pipe(c(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),m(()=>this.state.get("rulesHash")),c(e=>!this.lastAskedHash.includes(e)),_(e=>{this.lastAskedHash.push(e);}),u(()=>v("The current rules haven't been exported for some time now. Do you want to export them now?")),c(I)).subscribe(()=>{this.router.navigate(["/config"],{fragment:"export-now"});});}exportOverdue(){let e=this.state.get("lastExportDate");return new Date().getTime()-e>$e(10);}enoughTimeSinceLastEditPassed(){let e=this.state.get("lastRulesAction");return new Date().getTime()-e>$e(2);}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function $e(t){return t*60*1e3;}function Ye(t){return{isTrackWeight:()=>t.get(a).get("trackWeight")};}var We={providers:[he(),Se(Ue,Te(),Ce()),Le("ngsw-worker.js",{enabled:!x()&&!0,registrationStrategy:"registerImmediately"}),O(()=>{s(je).init();}),O(()=>{s(Ve).init();}),O(()=>{s(Ge).init();}),{deps:[k],provide:Re,useFactory:Ye},{provide:y,useClass:j},Me(),Ie()]};_e(ke,We).catch(t=>{console.error(t);});/**i18n:e44c97b853b206ae381adf260d958d5dfbaba558a4dcc6d8b72122fc056efd3f*/