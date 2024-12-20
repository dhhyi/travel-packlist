import{a as A}from"./chunk-f789052e.js";import{a as xe,b as y}from"./chunk-1328b0cb.js";import{o as Ae,r as Re}from"./chunk-24a9c903.js";import{k as Pe,o as Ie,p as a}from"./chunk-557595d8.js";import{c as ve,d as L,e as Ee,f as ye,g as Se,h as Ce,i as Te,j as _e}from"./chunk-a1592053.js";import{b as Ne}from"./chunk-4a8eee22.js";import{$,$a as pe,A as w,Aa as se,B as c,G as h,I as Q,Ka as ae,N as ee,Ob as he,Pa as le,Q as u,Qb as M,S as b,Sa as ce,Ta as k,Tb as ge,Va as z,Vb as D,W as d,Yb as we,Z as te,aa as n,c as I,da as re,eb as v,fb as _,fc as H,g as q,gb as E,hc as be,ia as oe,ib as ue,ja as ie,k as X,l as x,lb as me,m as Y,na as O,p as m,pb as de,qb as fe,ra as ne,t as J,u as V,va as G,w as W,y as N,z as T}from"./chunk-61d1b8f0.js";import"./chunk-2af6911e.js";import{a as F}from"./chunk-76f012a1.js";import{a as Z}from"./chunk-be8120ea.js";function ze(t,o){if(t&1){let e=ue();v(0,"div",8)(1,"button",9),de("click",function(){oe(e);let i=fe();return ie(i.scrollTop());}),E(2,"app-icon-arrow-upward",6),_()();}}var Oe=(()=>{class t{state=n(a);scrollTopVisible=ge(()=>this.state.signal("scrollY")()>100);scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(r){return new(r||t)();};static ɵcmp=ae({type:t,selectors:[["app-root"]],decls:11,vars:1,consts:()=>{let e;e="application icon";let r;return r="TravelPacklist",[r,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2"],["routerLink","/",1,"flex","grow"],["alt",e,"src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["routerLink","/config","routerLinkActive","hidden",1,"pr-2"],[1,"h-6","w-6"],[1,"flex","grow","flex-col","pb-[3.5rem]"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],["type","button",1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-300","shadow-xl",3,"click"]];},template:function(r,i){r&1&&(v(0,"nav",1)(1,"a",2),E(2,"img",3),v(3,"span",4),me(4,0),_()(),v(5,"a",5),E(6,"app-icon-cog",6),_()(),v(7,"div",7),E(8,"router-outlet"),le(9,ze,3,0,"div",8),_(),E(10,"app-dialog")),r&2&&(se(9),pe(i.scrollTopVisible()?9:-1));},dependencies:[_e,ve,Ee,ye,Ae,xe,Re],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],changeDetection:0});}return t;})();var P="Service workers are disabled or not supported by this browser";function He(t){return V(()=>Y(new Error(t)));}var S=class{serviceWorker;worker;registration;events;constructor(o){if(this.serviceWorker=o,!o)this.worker=this.events=this.registration=He(P);else{let r=W(o,"controllerchange").pipe(m(()=>o.controller)),i=V(()=>x(o.controller)),l=J(i,r);this.worker=l.pipe(c(g=>!!g)),this.registration=this.worker.pipe(u(()=>o.getRegistration()));let C=W(o,"message").pipe(m(g=>g.data)).pipe(c(g=>g&&g.type)).pipe(ee());C.connect(),this.events=C;}}postMessage(o,e){return this.worker.pipe(h(1),b(r=>{r.postMessage(Z({action:o},e));})).toPromise().then(()=>{});}postMessageWithOperation(o,e,r){let i=this.waitForOperationCompleted(r),l=this.postMessage(o,e);return Promise.all([l,i]).then(([,s])=>s);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(o){let e;return typeof o=="string"?e=r=>r.type===o:e=r=>o.includes(r.type),this.events.pipe(c(e));}nextEventOfType(o){return this.eventsOfType(o).pipe(h(1));}waitForOperationCompleted(o){return this.eventsOfType("OPERATION_COMPLETED").pipe(c(e=>e.nonce===o),h(1),m(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},Ke=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new q();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=w,this.notificationClicks=w,this.subscription=w;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(m(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(m(i=>i.data)),this.pushManager=this.sw.registration.pipe(m(i=>i.pushManager));let r=this.pushManager.pipe(u(i=>i.getSubscription()));this.subscription=T(r,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(P));let r={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),l=new Uint8Array(new ArrayBuffer(i.length));for(let s=0;s<i.length;s++)l[s]=i.charCodeAt(s);return r.applicationServerKey=l,this.pushManager.pipe(u(s=>s.subscribe(r)),h(1)).toPromise().then(s=>(this.subscriptionChanges.next(s),s));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(P));let e=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(h(1),u(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(r){return new(r||t)($(S));};static ɵprov=d({token:t,factory:t.ɵfac});}return t;})(),K=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=w,this.unrecoverable=w;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(P));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(P));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(r){return new(r||t)($(S));};static ɵprov=d({token:t,factory:t.ɵfac});}return t;})();var ke=new te("");function Be(t,o,e,r){return()=>{if(!(H(r)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let i=t.get(ne),l=t.get(z);i.runOutsideAngular(()=>{let p=navigator.serviceWorker,f=()=>p.controller?.postMessage({action:"INITIALIZE"});p.addEventListener("controllerchange",f),l.onDestroy(()=>{p.removeEventListener("controllerchange",f);});});let s;if(typeof e.registrationStrategy=="function")s=e.registrationStrategy();else{let[p,...f]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":s=x(null);break;case"registerWithDelay":s=Me(+f[0]||0);break;case"registerWhenStable":let C=X(t.get(z).whenStable());s=f[0]?T(C,Me(+f[0])):C;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}i.runOutsideAngular(()=>s.pipe(h(1)).subscribe(()=>navigator.serviceWorker.register(o,{scope:e.scope}).catch(p=>console.error("Service worker registration failed with:",p))));};}function Me(t){return x(null).pipe(Q(t));}function Ze(t,o){return new S(H(o)&&t.enabled!==!1?navigator.serviceWorker:void 0);}var R=class{enabled;scope;registrationStrategy;};function De(t,o={}){return re([Ke,K,{provide:ke,useValue:t},{provide:R,useValue:o},{provide:S,useFactory:Ze,deps:[R,G]},{provide:ce,useFactory:Be,deps:[O,ke,R,G],multi:!0}]);}var Le=!1,Fe=async()=>{if(n(a).get("rulesContainComments")&&!Le){let o=await y("Die aktuellen Regeln enthalten Kommentare. Wenn du sie im grafischen Editor bearbeitest, werden diese Kommentare verworfen. M\xF6chtest du trotzdem fortfahren?");return o&&(Le=!0),o;}return!0;};var B=()=>{let t=n(a),o=n(L),e=t.get("ruleParserError");return e?o.createUrlTree(["/rules-error"],{queryParams:{error:e}}):!0;};var Ue=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-13a74be6.js"),canActivate:[B]},{path:"config",loadComponent:()=>import("./chunk-39a8cc6e.js")},{path:"rules",loadComponent:()=>import("./chunk-c03d3b9a.js"),canActivate:[B,Fe]},{path:"rules-raw",loadComponent:()=>import("./chunk-5744ac89.js")},{path:"rules-error",loadComponent:()=>import("./chunk-65d61fa5.js")},{path:"documentation",loadComponent:()=>import("./chunk-7a6c412f.js")},{path:"**",redirectTo:"/packlist"}];var je=(()=>{class t{injector=n(O);document=n(we);init(){let e=this.injector.get(a),r=e.signal("theme");D(()=>{this.applyTheme(r());});let i=e.signal("preferredLanguage");D(()=>{this.applyLanguage(i());});let l=e.signal("fontSize");D(()=>{this.applyFontSize(l());});}applyTheme(e){let r=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&r||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(M()){console.warn("Language switching is disabled in dev mode");return;}let r=window.location.href,i=window.location.hash,l=`index${e==="en"?"":`.${e}`}.html`,p=r.substring(0,r.indexOf(i))+l+window.location.hash;setTimeout(()=>{window.location.href=p;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var Ve=(()=>{class t{swUpdate=n(K);status=n(a).signal("serviceWorkerStatus");init(){T(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(b(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let r=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,r.reason);}}),c(e=>e.type==="VERSION_READY"),u(()=>y("Eine neue Version der App ist verf\xFCgbar. M\xF6chtest du neu laden?")),c(I)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?N(6e4).pipe(u(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var qe=F("Filesystem",{web:()=>import("./chunk-409e754e.js").then(t=>new t.FilesystemWeb())});var Xe=F("Share",{web:()=>import("./chunk-917bba0f.js").then(t=>new t.ShareWeb())});var j=class extends A{state=n(a);async webShareRules(){let o=this.state.get("rules");if(!o){console.error("No rules available");return;}let e=this.state.get("exportFileName");await navigator.share({title:e,files:[new File([o],e,{type:"text/plain"})]});}downloadRules(){let o=this.state.get("rules");if(!o){console.error("No rules available");return;}let e=new Blob([o],{type:"text/plain"}),r=URL.createObjectURL(e),i=document.createElement("a");i.href=r,i.download=this.state.get("exportFileName"),i.click();}async exportRules(){this.state.get("isMobile")&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var $e=(()=>{class t{router=n(L);state=n(a);exportNeeded=this.state.signal("exportNeeded");reminderActive=this.state.signal("exportReminder");lastAskedHash=[];init(){N(3e4).pipe(c(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),m(()=>this.state.get("rulesHash")),c(e=>!this.lastAskedHash.includes(e)),b(e=>{this.lastAskedHash.push(e);}),u(()=>y("Die aktuellen Regeln wurden seit einiger Zeit nicht mehr exportiert. M\xF6chtest du sie jetzt exportieren?")),c(I)).subscribe(()=>{this.router.navigate(["/config"],{fragment:"export-now"});});}exportOverdue(){let e=this.state.get("lastExportDate");return new Date().getTime()-e>We(10);}enoughTimeSinceLastEditPassed(){let e=this.state.get("lastRulesAction");return new Date().getTime()-e>We(2);}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function We(t){return t*60*1e3;}function Ye(t){return{isTrackWeight:t.signal("trackWeight")};}var Ge={providers:[he(),Se(Ue,Ce(),Te()),De("ngsw-worker.js",{enabled:!M()&&!0,registrationStrategy:"registerImmediately"}),k(()=>{n(je).init();}),k(()=>{n(Ve).init();}),k(()=>{n($e).init();}),{deps:[a],provide:Pe,useFactory:Ye},{provide:A,useClass:j},Ne(),Ie()]};be(Oe,Ge).catch(t=>{console.error(t);});/**i18n:cbcf01d4640d52ad6821130aa8bde718125de417ff622aa7dfac4aa297a95122*/