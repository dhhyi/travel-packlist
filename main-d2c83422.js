import{a as P}from"./chunk-596c179b.js";import{a as Le,b as _}from"./chunk-dddb1384.js";import{o as Re,r as Ie}from"./chunk-ac459377.js";import{m as Oe,p as Ne,q as l}from"./chunk-bfb8c121.js";import{c as _e,d as V,e as Te,f as Ae,g as ye,h as Se,i as Ce,j as Pe}from"./chunk-e15b0d87.js";import{b as Me}from"./chunk-51d6b58b.js";import{$ as G,$b as C,A as E,Aa as K,B as c,G as h,Ga as pe,I as oe,Ma as ue,N as ie,Q as u,Ra as de,S as b,Ua as me,Ub as Ee,Va as k,W as m,Wb as x,Xa as z,Z as ne,Za as H,Zb as D,aa as s,bb as fe,c as O,cc as be,da as se,g as Q,gb as g,hb as v,ia as ae,ib as S,ja as le,k as ee,kb as he,kc as Z,l as N,m as te,mc as ve,na as M,nb as ge,p as d,ra as ce,rb as X,sb as we,t as re,u as $,va as B,w as W,y as L,z as y}from"./chunk-e83faf22.js";import"./chunk-78b1645b.js";import{a as F}from"./chunk-7928827a.js";import{a as J}from"./chunk-71f6c2da.js";function ze(t,o){if(t&1){let e=he();g(0,"div",8)(1,"button",10),X("click",function(){ae(e);let i=we();return le(i.scrollTop());}),S(2,"app-icon-arrow-upward",6),v()();}}var ke=(()=>{class t{state=s(l);overlayVisible=pe(!1);scrollTopVisible=D(()=>this.state.browser.scrollY()>100);scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(r){return new(r||t)();};static ɵcmp=ue({type:t,selectors:[["app-root"]],decls:11,vars:3,consts:()=>{let e;e="Gehe zur TravelPacklist";let r;r="Gehe zu Konfiguration";let i;i="TravelPacklist";let a;return a="Nach oben scrollen",[i,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["type","button","role","link","routerLink","/config","routerLinkActive","hidden","aria-label",r,1,"link","pr-2"],[1,"h-6","w-6"],[1,"flex","grow","flex-col","pb-[3.5rem]",3,"inert"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],[3,"overlayVisible"],["type","button","aria-label",a,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"]];},template:function(r,i){r&1&&(g(0,"nav",1)(1,"button",2),S(2,"img",3),g(3,"h1",4),ge(4,0),v()(),g(5,"button",5),S(6,"app-icon-cog",6),v()(),g(7,"div",7),S(8,"router-outlet"),de(9,ze,3,0,"div",8),v(),g(10,"app-dialog",9),X("overlayVisible",function(n){return i.overlayVisible.set(n);}),v()),r&2&&(H("inert",i.overlayVisible()),K(7),H("inert",i.overlayVisible()),K(2),fe(i.scrollTopVisible()?9:-1));},dependencies:[Pe,_e,Te,Ae,Re,Le,Ie],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],changeDetection:0});}return t;})();var I="Service workers are disabled or not supported by this browser";function He(t){return $(()=>te(new Error(t)));}var T=class{serviceWorker;worker;registration;events;constructor(o){if(this.serviceWorker=o,!o)this.worker=this.events=this.registration=He(I);else{let r=W(o,"controllerchange").pipe(d(()=>o.controller)),i=$(()=>N(o.controller)),a=re(i,r);this.worker=a.pipe(c(w=>!!w)),this.registration=this.worker.pipe(u(()=>o.getRegistration()));let A=W(o,"message").pipe(d(w=>w.data)).pipe(c(w=>w&&w.type)).pipe(ie());A.connect(),this.events=A;}}postMessage(o,e){return this.worker.pipe(h(1),b(r=>{r.postMessage(J({action:o},e));})).toPromise().then(()=>{});}postMessageWithOperation(o,e,r){let i=this.waitForOperationCompleted(r),a=this.postMessage(o,e);return Promise.all([a,i]).then(([,n])=>n);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(o){let e;return typeof o=="string"?e=r=>r.type===o:e=r=>o.includes(r.type),this.events.pipe(c(e));}nextEventOfType(o){return this.eventsOfType(o).pipe(h(1));}waitForOperationCompleted(o){return this.eventsOfType("OPERATION_COMPLETED").pipe(c(e=>e.nonce===o),h(1),d(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},Xe=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new Q();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=E,this.notificationClicks=E,this.subscription=E;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(d(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(d(i=>i.data)),this.pushManager=this.sw.registration.pipe(d(i=>i.pushManager));let r=this.pushManager.pipe(u(i=>i.getSubscription()));this.subscription=y(r,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(I));let r={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),a=new Uint8Array(new ArrayBuffer(i.length));for(let n=0;n<i.length;n++)a[n]=i.charCodeAt(n);return r.applicationServerKey=a,this.pushManager.pipe(u(n=>n.subscribe(r)),h(1)).toPromise().then(n=>(this.subscriptionChanges.next(n),n));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let e=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(h(1),u(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(r){return new(r||t)(G(T));};static ɵprov=m({token:t,factory:t.ɵfac});}return t;})(),Y=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=E,this.unrecoverable=E;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(r){return new(r||t)(G(T));};static ɵprov=m({token:t,factory:t.ɵfac});}return t;})();var xe=new ne("");function Ze(t,o,e,r){return()=>{if(!(Z(r)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let i=t.get(ce),a=t.get(z);i.runOutsideAngular(()=>{let p=navigator.serviceWorker,f=()=>p.controller?.postMessage({action:"INITIALIZE"});p.addEventListener("controllerchange",f),a.onDestroy(()=>{p.removeEventListener("controllerchange",f);});});let n;if(typeof e.registrationStrategy=="function")n=e.registrationStrategy();else{let[p,...f]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":n=N(null);break;case"registerWithDelay":n=De(+f[0]||0);break;case"registerWhenStable":let A=ee(t.get(z).whenStable());n=f[0]?y(A,De(+f[0])):A;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}i.runOutsideAngular(()=>n.pipe(h(1)).subscribe(()=>navigator.serviceWorker.register(o,{scope:e.scope}).catch(p=>console.error("Service worker registration failed with:",p))));};}function De(t){return N(null).pipe(oe(t));}function Ye(t,o){return new T(Z(o)&&t.enabled!==!1?navigator.serviceWorker:void 0);}var R=class{enabled;scope;registrationStrategy;};function Ve(t,o={}){return se([Xe,Y,{provide:xe,useValue:t},{provide:R,useValue:o},{provide:T,useFactory:Ye,deps:[R,B]},{provide:me,useFactory:Ze,deps:[M,xe,R,B],multi:!0}]);}var Fe=!1,Ue=async()=>{let t=s(l).rules.raw(),o=D(()=>t?.includes("#"));if(!Fe&&o()){let e=await _("Die aktuellen Regeln enthalten Kommentare. Wenn du sie mit dem grafischen Editor bearbeitest, werden diese Kommentare verworfen. M\xF6chtest du fortfahren?");return e&&(Fe=!0),e;}return!0;};var q=()=>{let t=s(l),o=s(V),e=t.rules.parserError();return e?o.createUrlTree(["/rules-error"],{queryParams:{error:e}}):!0;};var je=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-94a8dfad.js"),canActivate:[q]},{path:"config",loadComponent:()=>import("./chunk-a47b5514.js")},{path:"rules",loadComponent:()=>import("./chunk-86b9e8b6.js"),canActivate:[q,Ue]},{path:"rules-raw",loadComponent:()=>import("./chunk-54316a91.js")},{path:"rules-error",loadComponent:()=>import("./chunk-7496b6cd.js")},{path:"documentation",loadComponent:()=>import("./chunk-ec5f064e.js")},{path:"**",redirectTo:"/packlist"}];var $e=(()=>{class t{state=s(l);document=s(be);init(){C(()=>{this.applyTheme(this.state.config.theme());}),C(()=>{this.applyLanguage(this.state.config.preferredLanguage());}),C(()=>{this.applyFontSize(this.state.config.fontSize());}),C(()=>{this.applyAccessibilityClass(this.state.config.accessibility());});}applyTheme(e){let r=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&r||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(x()){console.warn("Language switching is disabled in dev mode");return;}let r=window.location.href,i=window.location.hash,a=`index${e==="en"?"":`.${e}`}.html`,p=r.substring(0,r.indexOf(i))+a+window.location.hash;setTimeout(()=>{window.location.href=p;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}static ɵfac=function(r){return new(r||t)();};static ɵprov=m({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var We=(()=>{class t{swUpdate=s(Y);status=s(l).serviceWorker.status;init(){y(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(b(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let r=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,r.reason);}}),c(e=>e.type==="VERSION_READY"),u(()=>_("Eine neue Version der App ist verf\xFCgbar. M\xF6chtest du neu laden?")),c(O)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?L(6e4).pipe(u(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(r){return new(r||t)();};static ɵprov=m({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var qe=F("Filesystem",{web:()=>import("./chunk-cbd94392.js").then(t=>new t.FilesystemWeb())});var Je=F("Share",{web:()=>import("./chunk-3618862d.js").then(t=>new t.ShareWeb())});var j=class extends P{async webShareRules(){let o=this.state.rules.raw();if(!o){console.error("No rules available");return;}let e=this.exportFileName();await navigator.share({title:e,files:[new File([o],e,{type:"text/plain"})]});}downloadRules(){let o=this.state.rules.raw();if(!o){console.error("No rules available");return;}let e=new Blob([o],{type:"text/plain"}),r=URL.createObjectURL(e),i=document.createElement("a");i.href=r,i.download=this.exportFileName(),i.click();}async exportRules(){this.state.browser.isMobile()&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var Be=(()=>{class t{router=s(V);state=s(l);exportNeeded=this.state.rules.exportNeeded;reminderActive=this.state.config.exportReminder;lastAskedHash=[];init(){L(3e4).pipe(c(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),d(()=>this.state.rules.hash()),c(e=>!this.lastAskedHash.includes(e)),b(e=>{this.lastAskedHash.push(e);}),u(()=>_("Die aktuellen Regeln wurden seit einiger Zeit nicht mehr exportiert. M\xF6chtest du sie jetzt exportieren?")),c(O)).subscribe(()=>{this.router.navigate(["/config"],{fragment:"export-now"});});}exportOverdue(){let e=this.state.export.lastDate();return new Date().getTime()-e>Ge(10);}enoughTimeSinceLastEditPassed(){let e=this.state.rules.lastAction();return new Date().getTime()-e>Ge(2);}static ɵfac=function(r){return new(r||t)();};static ɵprov=m({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function Ge(t){return t*60*1e3;}function Qe(t){return{isTrackWeight:()=>t.get(l).config.trackWeight()};}var Ke={providers:[Ee(),ye(je,Se(),Ce()),Ve("ngsw-worker.js",{enabled:!x()&&!0,registrationStrategy:"registerImmediately"}),k(()=>{s($e).init();}),k(()=>{s(We).init();}),k(()=>{s(Be).init();}),{deps:[M],provide:Oe,useFactory:Qe},{provide:P,useClass:j},Me(),Ne()]};ve(ke,Ke).catch(t=>{console.error(t);});/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/