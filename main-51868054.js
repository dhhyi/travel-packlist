import"./chunk-78b1645b.js";import{a as G}from"./chunk-7928827a.js";import{a as R}from"./chunk-96dcd2ea.js";import{a as je,b}from"./chunk-9aa03191.js";import{n as De,q as Fe}from"./chunk-a067c65f.js";import{a as Ve,n as Ue,q as l}from"./chunk-90020e8a.js";import{c as Ie,d as W,e as Ne,f as Oe,g as Me,h as Le,i as ke,j as xe}from"./chunk-0d702e51.js";import{b as $e}from"./chunk-87ab79fe.js";import{a as Pe,b as Re}from"./chunk-12fb62d5.js";import{A as S,Ac as j,B as w,C as p,Cb as be,Dc as P,Fa as X,Ga as he,H as f,Hb as g,I as le,Ia as fe,Ib as E,Ic as $,Jb as C,Lb as Ae,Ob as Te,Q as ce,Sb as J,T as u,Tb as Se,Tc as Q,W as _,Y as pe,_ as d,_a as Y,ab as ge,ba as x,c as M,cb as ye,da as H,ea as s,fb as we,g as ie,ha as D,l as ne,lb as _e,m as L,n as se,na as de,oa as ue,q as m,qb as ve,sa as v,tb as Ee,u as ae,ua as me,ub as V,uc as Ce,v as z,wb as Z,wc as U,x as K,xa as F,yb as q,z as k}from"./chunk-6d94f052.js";import{a as oe}from"./chunk-cb4c040a.js";function tt(o,t){if(o&1){let e=Ae();g(0,"div",8)(1,"button",10),J("click",function(){de(e);let i=Se();return ue(i.scrollTop());}),C(2,"app-icon-arrow-upward",6),E()();}}var We=(()=>{class o{state=s(l);overlayVisible=we(!1);scrollTopVisible=j(()=>this.state.browser.scrollY()>100);scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(r){return new(r||o)();};static ɵcmp=_e({type:o,selectors:[["app-root"]],decls:11,vars:3,consts:()=>{let e;e="Go to TravelPacklist";let r;r="Go to configuration";let i;i="TravelPacklist";let a;return a="Scroll to top",[i,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["type","button","role","link","routerLink","/config","routerLinkActive","hidden","aria-label",r,1,"link","pr-2"],[1,"h-6","w-6"],[1,"flex","grow","flex-col","pb-[3.5rem]",3,"inert"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],[3,"overlayVisible"],["type","button","aria-label",a,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"]];},template:function(r,i){r&1&&(g(0,"nav",1)(1,"button",2),C(2,"img",3),g(3,"h1",4),Te(4,0),E()(),g(5,"button",5),C(6,"app-icon-cog",6),E()(),g(7,"div",7),C(8,"router-outlet"),ve(9,tt,3,0,"div",8),E(),g(10,"app-dialog",9),J("overlayVisible",function(n){return i.overlayVisible.set(n);}),E()),r&2&&(q("inert",i.overlayVisible()),Y(7),q("inert",i.overlayVisible()),Y(2),be(i.scrollTopVisible()?9:-1));},dependencies:[xe,Ie,Ne,Oe,De,je,Fe],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],changeDetection:0});}return o;})();var rt="@",ot=(()=>{class o{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=s(v);loadingSchedulerFn=s(it,{optional:!0});_engine;constructor(e,r,i,a,n){this.doc=e,this.delegate=r,this.zone=i,this.animationType=a,this.moduleImpl=n;}ngOnDestroy(){this._engine?.flush();}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-99bcc341.js").then(i=>i),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(i=>{throw new pe(5300,!1);}).then(({ɵcreateEngine:i,ɵAnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let n=new a(this.delegate,this._engine,this.zone);return this.delegate=n,n;});}createRenderer(e,r){let i=this.delegate.createRenderer(e,r);if(i.ɵtype===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new ee(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(n=>{let c=n.createRenderer(e,r);a.use(c),this.scheduler??=this.injector.get(me,null,{optional:!0}),this.scheduler?.notify(11);}).catch(n=>{a.use(i);}),a;}begin(){this.delegate.begin?.();}end(){this.delegate.end?.();}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve();}static ɵfac=function(r){ge();};static ɵprov=d({token:o,factory:o.ɵfac});}return o;})(),ee=class{delegate;replay=[];ɵtype=1;constructor(t){this.delegate=t;}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null;}}get data(){return this.delegate.data;}destroy(){this.replay=null,this.delegate.destroy();}createElement(t,e){return this.delegate.createElement(t,e);}createComment(t){return this.delegate.createComment(t);}createText(t){return this.delegate.createText(t);}get destroyNode(){return this.delegate.destroyNode;}appendChild(t,e){this.delegate.appendChild(t,e);}insertBefore(t,e,r,i){this.delegate.insertBefore(t,e,r,i);}removeChild(t,e,r){this.delegate.removeChild(t,e,r);}selectRootElement(t,e){return this.delegate.selectRootElement(t,e);}parentNode(t){return this.delegate.parentNode(t);}nextSibling(t){return this.delegate.nextSibling(t);}setAttribute(t,e,r,i){this.delegate.setAttribute(t,e,r,i);}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r);}addClass(t,e){this.delegate.addClass(t,e);}removeClass(t,e){this.delegate.removeClass(t,e);}setStyle(t,e,r,i){this.delegate.setStyle(t,e,r,i);}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r);}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(t,e,r)),this.delegate.setProperty(t,e,r);}setValue(t,e){this.delegate.setValue(t,e);}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(t,e,r)),this.delegate.listen(t,e,r);}shouldReplay(t){return this.replay!==null&&t.startsWith(rt);}},it=new x("");function Ge(o="animations"){return fe("NgAsyncAnimations"),D([{provide:ye,useFactory:(t,e,r)=>new ot(t,e,r,o),deps:[$,Pe,F]},{provide:he,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}]);}var O="Service workers are disabled or not supported by this browser";function nt(o){return z(()=>se(new Error(o)));}var A=class{serviceWorker;worker;registration;events;constructor(t){if(this.serviceWorker=t,!t)this.worker=this.events=this.registration=nt(O);else{let r=K(t,"controllerchange").pipe(m(()=>t.controller)),i=z(()=>L(t.controller)),a=ae(i,r);this.worker=a.pipe(p(y=>!!y)),this.registration=this.worker.pipe(u(()=>t.getRegistration()));let T=K(t,"message").pipe(m(y=>y.data)).pipe(p(y=>y&&y.type)).pipe(ce());T.connect(),this.events=T;}}postMessage(t,e){return this.worker.pipe(f(1),_(r=>{r.postMessage(oe({action:t},e));})).toPromise().then(()=>{});}postMessageWithOperation(t,e,r){let i=this.waitForOperationCompleted(r),a=this.postMessage(t,e);return Promise.all([a,i]).then(([,n])=>n);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(t){let e;return typeof t=="string"?e=r=>r.type===t:e=r=>t.includes(r.type),this.events.pipe(p(e));}nextEventOfType(t){return this.eventsOfType(t).pipe(f(1));}waitForOperationCompleted(t){return this.eventsOfType("OPERATION_COMPLETED").pipe(p(e=>e.nonce===t),f(1),m(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},st=(()=>{class o{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new ie();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=w,this.notificationClicks=w,this.subscription=w;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(m(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(m(i=>i.data)),this.pushManager=this.sw.registration.pipe(m(i=>i.pushManager));let r=this.pushManager.pipe(u(i=>i.getSubscription()));this.subscription=S(r,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(O));let r={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),a=new Uint8Array(new ArrayBuffer(i.length));for(let n=0;n<i.length;n++)a[n]=i.charCodeAt(n);return r.applicationServerKey=a,this.pushManager.pipe(u(n=>n.subscribe(r)),f(1)).toPromise().then(n=>(this.subscriptionChanges.next(n),n));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(O));let e=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(f(1),u(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(r){return new(r||o)(H(A));};static ɵprov=d({token:o,factory:o.ɵfac});}return o;})(),te=(()=>{class o{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=w,this.unrecoverable=w;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(O));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(O));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(r){return new(r||o)(H(A));};static ɵprov=d({token:o,factory:o.ɵfac});}return o;})();var Be=new x("");function at(o,t,e,r){return()=>{if(!(Q(r)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let i=o.get(F),a=o.get(Z);i.runOutsideAngular(()=>{let c=navigator.serviceWorker,h=()=>c.controller?.postMessage({action:"INITIALIZE"});c.addEventListener("controllerchange",h),a.onDestroy(()=>{c.removeEventListener("controllerchange",h);});});let n;if(typeof e.registrationStrategy=="function")n=e.registrationStrategy();else{let[c,...h]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(c){case"registerImmediately":n=L(null);break;case"registerWithDelay":n=ze(+h[0]||0);break;case"registerWhenStable":let T=ne(o.get(Z).whenStable());n=h[0]?S(T,ze(+h[0])):T;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}i.runOutsideAngular(()=>n.pipe(f(1)).subscribe(()=>navigator.serviceWorker.register(t,{scope:e.scope}).catch(c=>console.error("Service worker registration failed with:",c))));};}function ze(o){return L(null).pipe(le(o));}function lt(o,t){return new A(Q(t)&&o.enabled!==!1?navigator.serviceWorker:void 0);}var N=class{enabled;scope;registrationStrategy;};function Ke(o,t={}){return D([st,te,{provide:Be,useValue:o},{provide:N,useValue:t},{provide:A,useFactory:lt,deps:[N,X]},{provide:Ee,useFactory:at,deps:[v,Be,N,X],multi:!0}]);}var He=!1,Xe=async()=>{let o=s(l).rules.raw(),t=j(()=>o.includes("#"));if(!He&&t()){let e=await b("The current rules contain comments. Editing them with the graphical editor will discard these comments. Do you want to proceed?");return e&&(He=!0),e;}return!0;};var re=()=>{let o=s(l),t=s(W),e=o.rules.parserError();return e?t.createUrlTree(["/rules-error"],{queryParams:{error:e}}):!0;};var Ye=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-abbd14da.js"),canActivate:[re]},{path:"config",loadComponent:()=>import("./chunk-6a5068a9.js")},{path:"rules",loadComponent:()=>import("./chunk-00e07d27.js"),canActivate:[re,Xe]},{path:"rules-raw",loadComponent:()=>import("./chunk-8a50119e.js")},{path:"rules-error",loadComponent:()=>import("./chunk-fffbb01c.js")},{path:"documentation",loadComponent:()=>import("./chunk-7015c0dc.js")},{path:"**",redirectTo:"/packlist"}];var Ze=(()=>{class o{state=s(l);document=s($);init(){P(()=>{this.applyTheme(this.state.config.theme());}),P(()=>{this.applyLanguage(this.state.config.preferredLanguage());}),P(()=>{this.applyFontSize(this.state.config.fontSize());}),P(()=>{this.applyAccessibilityClass(this.state.config.accessibility());});}applyTheme(e){let r=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&r||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(U()){console.warn("Language switching is disabled in dev mode");return;}let r=window.location.href,i=window.location.hash,a=`index${e==="en"?"":`.${e}`}.html`,c=r.substring(0,r.indexOf(i))+a+window.location.hash;setTimeout(()=>{window.location.href=c;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}static ɵfac=function(r){return new(r||o)();};static ɵprov=d({token:o,factory:o.ɵfac,providedIn:"root"});}return o;})();var qe=(()=>{class o{swUpdate=s(te);status=s(l).serviceWorker.status;init(){S(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(_(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let r=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,r.reason);}}),p(e=>e.type==="VERSION_READY"),u(()=>b("A new version of the app is available. Do you want to reload?")),p(M)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?k(6e4).pipe(u(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(r){return new(r||o)();};static ɵprov=d({token:o,factory:o.ɵfac,providedIn:"root"});}return o;})();var ct=G("Filesystem",{web:()=>import("./chunk-3c4cd072.js").then(o=>new o.FilesystemWeb())});var pt=G("Share",{web:()=>import("./chunk-d0fd0e95.js").then(o=>new o.ShareWeb())});var B=class extends R{async webShareRules(){let t=this.state.rules.raw();if(!t){console.error("No rules available");return;}let e=this.exportFileName();await navigator.share({title:e,files:[new File([t],e,{type:"text/plain"})]});}downloadRules(){let t=this.state.rules.raw();if(!t){console.error("No rules available");return;}let e=new Blob([t],{type:"text/plain"}),r=URL.createObjectURL(e),i=document.createElement("a");i.href=r,i.download=this.exportFileName(),i.click();}async exportRules(){this.state.browser.isMobile()&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var Qe=(()=>{class o{router=s(W);state=s(l);exportNeeded=this.state.rules.exportNeeded;reminderActive=this.state.config.exportReminder;lastAskedHash=[];init(){k(3e4).pipe(p(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),m(()=>this.state.rules.hash()),p(e=>!this.lastAskedHash.includes(e)),_(e=>{this.lastAskedHash.push(e);}),u(()=>b("The current rules haven't been exported for some time now. Do you want to export them now?")),p(M)).subscribe(()=>{this.router.navigate(["/config"],{fragment:"export-now"});});}exportOverdue(){let e=this.state.export.lastDate();return new Date().getTime()-e>Je(10);}enoughTimeSinceLastEditPassed(){let e=this.state.rules.lastAction();return new Date().getTime()-e>Je(2);}static ɵfac=function(r){return new(r||o)();};static ɵprov=d({token:o,factory:o.ɵfac,providedIn:"root"});}return o;})();function Je(o){return o*60*1e3;}function dt(o){return{isTrackWeight:()=>o.get(l).config.trackWeight()};}var et={providers:[Ce(),Me(Ye,Le(),ke()),Ke("ngsw-worker.js",{enabled:!U()&&!0,registrationStrategy:"registerImmediately"}),Ge(),V(()=>{s(Ze).init();}),V(()=>{s(qe).init();}),V(()=>{s(Qe).init();}),{deps:[v],provide:Ue,useFactory:dt},{provide:R,useClass:B},$e(),Ve()]};Re(We,et).catch(o=>{console.error(o);});/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/