import{a as P}from"./chunk-0b42f20d.js";import{a as Ne,b as v}from"./chunk-9efdb21a.js";import{o as Re,r as Ie}from"./chunk-ac459377.js";import{m as Oe,p as Le,q as a}from"./chunk-49434dce.js";import{c as ve,d as D,e as Te,f as Ae,g as ye,h as Se,i as Ce,j as Pe}from"./chunk-e15b0d87.js";import{b as Me}from"./chunk-51d6b58b.js";import{$ as G,$b as C,A as w,Aa as B,B as c,G as h,Ga as ce,I as re,Ma as pe,N as oe,Q as u,Ra as ue,S as b,Ua as me,Ub as Ee,Va as k,W as d,Wb as x,Xa as z,Z as ie,Za as K,Zb as we,aa as s,bb as de,c as O,cc as be,da as ne,g as J,gb as g,hb as _,ia as se,ib as S,ja as ae,k as Q,kb as fe,kc as X,l as L,m as ee,mc as _e,na as M,nb as he,p as m,ra as le,rb as H,sb as ge,t as te,u as j,va as W,w as $,y as N,z as y}from"./chunk-e83faf22.js";import"./chunk-78b1645b.js";import{a as V}from"./chunk-7928827a.js";import{a as q}from"./chunk-71f6c2da.js";function Ke(t,i){if(t&1){let e=fe();g(0,"div",8)(1,"button",10),H("click",function(){se(e);let o=ge();return ae(o.scrollTop());}),S(2,"app-icon-arrow-upward",6),_()();}}var ke=(()=>{class t{state=s(a);overlayVisible=ce(!1);scrollTopVisible=we(()=>this.state.scrollY()>100);scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(r){return new(r||t)();};static ɵcmp=pe({type:t,selectors:[["app-root"]],decls:11,vars:3,consts:()=>{let e;e="Gehe zur TravelPacklist";let r;r="Gehe zu Konfiguration";let o;o="TravelPacklist";let l;return l="Nach oben scrollen",[o,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["type","button","role","link","routerLink","/config","routerLinkActive","hidden","aria-label",r,1,"link","pr-2"],[1,"h-6","w-6"],[1,"flex","grow","flex-col","pb-[3.5rem]",3,"inert"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],[3,"overlayVisible"],["type","button","aria-label",l,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"]];},template:function(r,o){r&1&&(g(0,"nav",1)(1,"button",2),S(2,"img",3),g(3,"h1",4),he(4,0),_()(),g(5,"button",5),S(6,"app-icon-cog",6),_()(),g(7,"div",7),S(8,"router-outlet"),ue(9,Ke,3,0,"div",8),_(),g(10,"app-dialog",9),H("overlayVisible",function(n){return o.overlayVisible.set(n);}),_()),r&2&&(K("inert",o.overlayVisible()),B(7),K("inert",o.overlayVisible()),B(2),de(o.scrollTopVisible()?9:-1));},dependencies:[Pe,ve,Te,Ae,Re,Ne,Ie],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],changeDetection:0});}return t;})();var I="Service workers are disabled or not supported by this browser";function He(t){return j(()=>ee(new Error(t)));}var T=class{serviceWorker;worker;registration;events;constructor(i){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=He(I);else{let r=$(i,"controllerchange").pipe(m(()=>i.controller)),o=j(()=>L(i.controller)),l=te(o,r);this.worker=l.pipe(c(E=>!!E)),this.registration=this.worker.pipe(u(()=>i.getRegistration()));let A=$(i,"message").pipe(m(E=>E.data)).pipe(c(E=>E&&E.type)).pipe(oe());A.connect(),this.events=A;}}postMessage(i,e){return this.worker.pipe(h(1),b(r=>{r.postMessage(q({action:i},e));})).toPromise().then(()=>{});}postMessageWithOperation(i,e,r){let o=this.waitForOperationCompleted(r),l=this.postMessage(i,e);return Promise.all([l,o]).then(([,n])=>n);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(i){let e;return typeof i=="string"?e=r=>r.type===i:e=r=>i.includes(r.type),this.events.pipe(c(e));}nextEventOfType(i){return this.eventsOfType(i).pipe(h(1));}waitForOperationCompleted(i){return this.eventsOfType("OPERATION_COMPLETED").pipe(c(e=>e.nonce===i),h(1),m(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},Xe=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new J();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=w,this.notificationClicks=w,this.subscription=w;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(m(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(m(o=>o.data)),this.pushManager=this.sw.registration.pipe(m(o=>o.pushManager));let r=this.pushManager.pipe(u(o=>o.getSubscription()));this.subscription=y(r,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(I));let r={userVisibleOnly:!0},o=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),l=new Uint8Array(new ArrayBuffer(o.length));for(let n=0;n<o.length;n++)l[n]=o.charCodeAt(n);return r.applicationServerKey=l,this.pushManager.pipe(u(n=>n.subscribe(r)),h(1)).toPromise().then(n=>(this.subscriptionChanges.next(n),n));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let e=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(o=>{if(!o)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(h(1),u(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(r){return new(r||t)(G(T));};static ɵprov=d({token:t,factory:t.ɵfac});}return t;})(),Z=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=w,this.unrecoverable=w;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(I));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(r){return new(r||t)(G(T));};static ɵprov=d({token:t,factory:t.ɵfac});}return t;})();var xe=new ie("");function Ze(t,i,e,r){return()=>{if(!(X(r)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let o=t.get(le),l=t.get(z);o.runOutsideAngular(()=>{let p=navigator.serviceWorker,f=()=>p.controller?.postMessage({action:"INITIALIZE"});p.addEventListener("controllerchange",f),l.onDestroy(()=>{p.removeEventListener("controllerchange",f);});});let n;if(typeof e.registrationStrategy=="function")n=e.registrationStrategy();else{let[p,...f]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":n=L(null);break;case"registerWithDelay":n=De(+f[0]||0);break;case"registerWhenStable":let A=Q(t.get(z).whenStable());n=f[0]?y(A,De(+f[0])):A;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}o.runOutsideAngular(()=>n.pipe(h(1)).subscribe(()=>navigator.serviceWorker.register(i,{scope:e.scope}).catch(p=>console.error("Service worker registration failed with:",p))));};}function De(t){return L(null).pipe(re(t));}function Ye(t,i){return new T(X(i)&&t.enabled!==!1?navigator.serviceWorker:void 0);}var R=class{enabled;scope;registrationStrategy;};function Ve(t,i={}){return ne([Xe,Z,{provide:xe,useValue:t},{provide:R,useValue:i},{provide:T,useFactory:Ye,deps:[R,W]},{provide:me,useFactory:Ze,deps:[M,xe,R,W],multi:!0}]);}var Fe=!1,Ue=async()=>{if(s(a).rulesContainComments()&&!Fe){let i=await v("Die aktuellen Regeln enthalten Kommentare. Wenn du sie mit dem grafischen Editor bearbeitest, werden diese Kommentare verworfen. M\xF6chtest du fortfahren?");return i&&(Fe=!0),i;}return!0;};var Y=()=>{let t=s(a),i=s(D),e=t.ruleParserError();return e?i.createUrlTree(["/rules-error"],{queryParams:{error:e}}):!0;};var je=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-a706487d.js"),canActivate:[Y]},{path:"config",loadComponent:()=>import("./chunk-e4cf2570.js")},{path:"rules",loadComponent:()=>import("./chunk-2d49fc5f.js"),canActivate:[Y,Ue]},{path:"rules-raw",loadComponent:()=>import("./chunk-13505a86.js")},{path:"rules-error",loadComponent:()=>import("./chunk-7496b6cd.js")},{path:"documentation",loadComponent:()=>import("./chunk-ec5f064e.js")},{path:"**",redirectTo:"/packlist"}];var $e=(()=>{class t{state=s(a);document=s(be);init(){let e=this.state.theme;C(()=>{this.applyTheme(e());});let r=this.state.preferredLanguage;C(()=>{this.applyLanguage(r());});let o=this.state.fontSize;C(()=>{this.applyFontSize(o());});let l=this.state.accessibility;C(()=>{this.applyAccessibilityClass(l());});}applyTheme(e){let r=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&r||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(x()){console.warn("Language switching is disabled in dev mode");return;}let r=window.location.href,o=window.location.hash,l=`index${e==="en"?"":`.${e}`}.html`,p=r.substring(0,r.indexOf(o))+l+window.location.hash;setTimeout(()=>{window.location.href=p;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var Ge=(()=>{class t{swUpdate=s(Z);status=s(a).serviceWorkerStatus;init(){y(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(b(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let r=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,r.reason);}}),c(e=>e.type==="VERSION_READY"),u(()=>v("Eine neue Version der App ist verf\xFCgbar. M\xF6chtest du neu laden?")),c(O)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?N(6e4).pipe(u(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var qe=V("Filesystem",{web:()=>import("./chunk-cbd94392.js").then(t=>new t.FilesystemWeb())});var Je=V("Share",{web:()=>import("./chunk-3618862d.js").then(t=>new t.ShareWeb())});var U=class extends P{state=s(a);async webShareRules(){let i=this.state.rules();if(!i){console.error("No rules available");return;}let e=this.state.exportFileName();await navigator.share({title:e,files:[new File([i],e,{type:"text/plain"})]});}downloadRules(){let i=this.state.rules();if(!i){console.error("No rules available");return;}let e=new Blob([i],{type:"text/plain"}),r=URL.createObjectURL(e),o=document.createElement("a");o.href=r,o.download=this.state.exportFileName(),o.click();}async exportRules(){this.state.isMobile()&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var Be=(()=>{class t{router=s(D);state=s(a);exportNeeded=this.state.exportNeeded;reminderActive=this.state.exportReminder;lastAskedHash=[];init(){N(3e4).pipe(c(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),m(()=>this.state.rulesHash()),c(e=>!this.lastAskedHash.includes(e)),b(e=>{this.lastAskedHash.push(e);}),u(()=>v("Die aktuellen Regeln wurden seit einiger Zeit nicht mehr exportiert. M\xF6chtest du sie jetzt exportieren?")),c(O)).subscribe(()=>{this.router.navigate(["/config"],{fragment:"export-now"});});}exportOverdue(){let e=this.state.lastExportDate();return new Date().getTime()-e>We(10);}enoughTimeSinceLastEditPassed(){let e=this.state.lastRulesAction();return new Date().getTime()-e>We(2);}static ɵfac=function(r){return new(r||t)();};static ɵprov=d({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function We(t){return t*60*1e3;}function Qe(t){return{isTrackWeight:()=>t.get(a).trackWeight()};}var ze={providers:[Ee(),ye(je,Se(),Ce()),Ve("ngsw-worker.js",{enabled:!x()&&!0,registrationStrategy:"registerImmediately"}),k(()=>{s($e).init();}),k(()=>{s(Ge).init();}),k(()=>{s(Be).init();}),{deps:[M],provide:Oe,useFactory:Qe},{provide:P,useClass:U},Me(),Le()]};_e(ke,ze).catch(t=>{console.error(t);});/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/