import"./chunk-78b1645b.js";import{a as z}from"./chunk-7928827a.js";import{c as Ne,d as oe,e as Oe,g as N,j as ie,k as Me,m as ne,n as O}from"./chunk-ed13faaa.js";import{a as M}from"./chunk-b22f1ab8.js";import{a as Xe,b as A}from"./chunk-57e4aefe.js";import{n as We,q as Ge}from"./chunk-9c4cfe63.js";import{b as Le,c as Be,p as ze,s as c}from"./chunk-f77e7dde.js";import{a as ke,c as De,d as E,e as xe,f as Fe,g as Ve,h as Ue,i as je,j as $e}from"./chunk-5bce0458.js";import{b as Ke}from"./chunk-599ca4f8.js";import{a as Re,b as Ie}from"./chunk-250d1157.js";import{A as S,Ac as R,B as w,C as l,Dc as I,Fa as Z,Ga as we,H as f,Hb as g,I as he,Ia as be,Ib as P,Ic as B,Ja as ve,Jb as C,Ob as Pe,Q as fe,Sb as te,T as m,Tc as re,W as b,Y as ge,_ as u,_a as q,ab as Ee,ba as U,c as x,cb as Ae,da as Y,ea as s,fb as J,g as pe,ha as j,l as de,lb as _e,m as F,n as ue,q as d,sa as v,tb as Te,u as me,ua as ye,ub as W,uc as Ce,v as K,wb as Q,wc as G,x as H,xa as $,yb as ee,z as V,zb as Se}from"./chunk-fac6b1c2.js";import{a as ce}from"./chunk-cb4c040a.js";var He=Me([O(":enter, :leave",N({position:"fixed",width:"100%"}),{optional:!0}),O(":enter",N({opacity:0,transform:"{{ from }}"}),{optional:!0}),Oe([O(":leave",[oe("{{ duration }}",N({opacity:0,transform:"{{ to }}"}))],{optional:!0}),O(":enter",[oe("{{ duration }}",N({opacity:1,transform:"translateX(0) translateY(0) scale(1)"}))],{optional:!0})])],{params:{duration:"0.3s ease-in-out"}}),lt=Ne("routeTransition",[ie(":decrement",[ne(He,{params:{from:"translateX(-100%) scale(1)",to:"translateX(100%) scale(0.9)"}})]),ie(":increment",[ne(He,{params:{from:"translateX(100%) scale(1)",to:"translateX(-100%) scale(0.9)"}})])]),Ye=(()=>{class o{state=s(c);overlayVisible=J(!1);router=s(E);routeData=Le(this.router.events.pipe(l(e=>e instanceof ke),d(()=>this.router.routerState.root.snapshot.firstChild?.data)));hierarchy=R(()=>this.routeData()?.hierarchy);scrollTopVisible=R(()=>this.state.browser.scrollY()>100);disableAnimations=J(!0);constructor(){ve(()=>{this.disableAnimations.set(this.state.config.accessibility()==="accessible");});}scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(r){return new(r||o)();};static ɵcmp=_e({type:o,selectors:[["app-root"]],decls:13,vars:6,consts:()=>{let e;e="Gehe zur TravelPacklist";let r;r="Gehe zu Konfiguration";let i;i="Nach oben scrollen";let a;return a="TravelPacklist",[a,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["type","button","role","link","routerLink","/config","routerLinkActive","hidden","aria-label",r,1,"link","pr-2"],[1,"h-6","w-6"],[1,"flex","grow","flex-col","pb-[3.5rem]",3,"inert"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],["type","button","aria-label",i,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"],[3,"overlayVisible"]];},template:function(r,i){r&1&&(g(0,"nav",1)(1,"button",2),C(2,"img",3),g(3,"h1",4),Pe(4,0),P()(),g(5,"button",5),C(6,"app-icon-cog",6),P()(),g(7,"div",7),C(8,"router-outlet"),g(9,"div",8)(10,"button",9),te("click",function(){return i.scrollTop();}),C(11,"app-icon-arrow-upward",6),P()()(),g(12,"app-dialog",10),te("overlayVisible",function(n){return i.overlayVisible.set(n);}),P()),r&2&&(ee("inert",i.overlayVisible()),q(7),ee("@routeTransition",i.hierarchy())("@.disabled",i.disableAnimations())("inert",i.overlayVisible()),q(2),Se("hidden",!i.scrollTopVisible()));},dependencies:[$e,De,xe,Fe,We,Xe,Ge],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],data:{animation:[lt]},changeDetection:0});}return o;})();var ct="@",pt=(()=>{class o{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=s(v);loadingSchedulerFn=s(dt,{optional:!0});_engine;constructor(e,r,i,a,n){this.doc=e,this.delegate=r,this.zone=i,this.animationType=a,this.moduleImpl=n;}ngOnDestroy(){this._engine?.flush();}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-d5cb2476.js").then(i=>i),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(i=>{throw new ge(5300,!1);}).then(({ɵcreateEngine:i,ɵAnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let n=new a(this.delegate,this._engine,this.zone);return this.delegate=n,n;});}createRenderer(e,r){let i=this.delegate.createRenderer(e,r);if(i.ɵtype===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new se(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(n=>{let p=n.createRenderer(e,r);a.use(p),this.scheduler??=this.injector.get(ye,null,{optional:!0}),this.scheduler?.notify(11);}).catch(n=>{a.use(i);}),a;}begin(){this.delegate.begin?.();}end(){this.delegate.end?.();}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve();}static ɵfac=function(r){Ee();};static ɵprov=u({token:o,factory:o.ɵfac});}return o;})(),se=class{delegate;replay=[];ɵtype=1;constructor(t){this.delegate=t;}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null;}}get data(){return this.delegate.data;}destroy(){this.replay=null,this.delegate.destroy();}createElement(t,e){return this.delegate.createElement(t,e);}createComment(t){return this.delegate.createComment(t);}createText(t){return this.delegate.createText(t);}get destroyNode(){return this.delegate.destroyNode;}appendChild(t,e){this.delegate.appendChild(t,e);}insertBefore(t,e,r,i){this.delegate.insertBefore(t,e,r,i);}removeChild(t,e,r){this.delegate.removeChild(t,e,r);}selectRootElement(t,e){return this.delegate.selectRootElement(t,e);}parentNode(t){return this.delegate.parentNode(t);}nextSibling(t){return this.delegate.nextSibling(t);}setAttribute(t,e,r,i){this.delegate.setAttribute(t,e,r,i);}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r);}addClass(t,e){this.delegate.addClass(t,e);}removeClass(t,e){this.delegate.removeClass(t,e);}setStyle(t,e,r,i){this.delegate.setStyle(t,e,r,i);}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r);}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(t,e,r)),this.delegate.setProperty(t,e,r);}setValue(t,e){this.delegate.setValue(t,e);}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(t,e,r)),this.delegate.listen(t,e,r);}shouldReplay(t){return this.replay!==null&&t.startsWith(ct);}},dt=new U("");function Ze(o="animations"){return be("NgAsyncAnimations"),j([{provide:Ae,useFactory:(t,e,r)=>new pt(t,e,r,o),deps:[B,Re,$]},{provide:we,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}]);}var D="Service workers are disabled or not supported by this browser";function ut(o){return K(()=>ue(new Error(o)));}var _=class{serviceWorker;worker;registration;events;constructor(t){if(this.serviceWorker=t,!t)this.worker=this.events=this.registration=ut(D);else{let r=H(t,"controllerchange").pipe(d(()=>t.controller)),i=K(()=>F(t.controller)),a=me(i,r);this.worker=a.pipe(l(y=>!!y)),this.registration=this.worker.pipe(m(()=>t.getRegistration()));let T=H(t,"message").pipe(d(y=>y.data)).pipe(l(y=>y&&y.type)).pipe(fe());T.connect(),this.events=T;}}postMessage(t,e){return this.worker.pipe(f(1),b(r=>{r.postMessage(ce({action:t},e));})).toPromise().then(()=>{});}postMessageWithOperation(t,e,r){let i=this.waitForOperationCompleted(r),a=this.postMessage(t,e);return Promise.all([a,i]).then(([,n])=>n);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(t){let e;return typeof t=="string"?e=r=>r.type===t:e=r=>t.includes(r.type),this.events.pipe(l(e));}nextEventOfType(t){return this.eventsOfType(t).pipe(f(1));}waitForOperationCompleted(t){return this.eventsOfType("OPERATION_COMPLETED").pipe(l(e=>e.nonce===t),f(1),d(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},mt=(()=>{class o{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new pe();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=w,this.notificationClicks=w,this.subscription=w;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(d(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(d(i=>i.data)),this.pushManager=this.sw.registration.pipe(d(i=>i.pushManager));let r=this.pushManager.pipe(m(i=>i.getSubscription()));this.subscription=S(r,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(D));let r={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),a=new Uint8Array(new ArrayBuffer(i.length));for(let n=0;n<i.length;n++)a[n]=i.charCodeAt(n);return r.applicationServerKey=a,this.pushManager.pipe(m(n=>n.subscribe(r)),f(1)).toPromise().then(n=>(this.subscriptionChanges.next(n),n));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(D));let e=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(f(1),m(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(r){return new(r||o)(Y(_));};static ɵprov=u({token:o,factory:o.ɵfac});}return o;})(),ae=(()=>{class o{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=w,this.unrecoverable=w;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(D));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(D));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(r){return new(r||o)(Y(_));};static ɵprov=u({token:o,factory:o.ɵfac});}return o;})();var qe=new U("");function ht(o,t,e,r){return()=>{if(!(re(r)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let i=o.get($),a=o.get(Q);i.runOutsideAngular(()=>{let p=navigator.serviceWorker,h=()=>p.controller?.postMessage({action:"INITIALIZE"});p.addEventListener("controllerchange",h),a.onDestroy(()=>{p.removeEventListener("controllerchange",h);});});let n;if(typeof e.registrationStrategy=="function")n=e.registrationStrategy();else{let[p,...h]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":n=F(null);break;case"registerWithDelay":n=Je(+h[0]||0);break;case"registerWhenStable":let T=de(o.get(Q).whenStable());n=h[0]?S(T,Je(+h[0])):T;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}i.runOutsideAngular(()=>n.pipe(f(1)).subscribe(()=>navigator.serviceWorker.register(t,{scope:e.scope}).catch(p=>console.error("Service worker registration failed with:",p))));};}function Je(o){return F(null).pipe(he(o));}function ft(o,t){return new _(re(t)&&o.enabled!==!1?navigator.serviceWorker:void 0);}var k=class{enabled;scope;registrationStrategy;};function Qe(o,t={}){return j([mt,ae,{provide:qe,useValue:o},{provide:k,useValue:t},{provide:_,useFactory:ft,deps:[k,Z]},{provide:Te,useFactory:ht,deps:[v,qe,k,Z],multi:!0}]);}var et=!1,tt=async()=>{let o=s(c).rules.raw(),t=R(()=>o.includes("#"));if(!et&&t()){let e=await A("Die aktuellen Regeln enthalten Kommentare. Wenn du sie mit dem grafischen Editor bearbeitest, werden diese Kommentare verworfen. M\xF6chtest du fortfahren?");return e&&(et=!0),e;}return!0;};var le=()=>{let o=s(c),t=s(E),e=o.rules.parserError();return e?t.createUrlTree(["/rules-error"],{queryParams:{error:e}}):!0;};var rt=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-839f6ba7.js"),canActivate:[le],data:{hierarchy:0}},{path:"config",loadComponent:()=>import("./chunk-b8a49ffd.js"),data:{hierarchy:1}},{path:"rules",loadComponent:()=>import("./chunk-633ea7a0.js"),canActivate:[le,tt],data:{hierarchy:2}},{path:"rules-raw",loadComponent:()=>import("./chunk-72d4dbbe.js"),data:{hierarchy:2}},{path:"rules-error",loadComponent:()=>import("./chunk-9d78fdf1.js"),data:{hierarchy:2}},{path:"documentation",loadComponent:()=>import("./chunk-7225a2f4.js"),data:{hierarchy:2}},{path:"**",redirectTo:"/packlist"}];var ot=(()=>{class o{state=s(c);document=s(B);init(){I(()=>{this.applyTheme(this.state.config.theme());}),I(()=>{this.applyLanguage(this.state.config.preferredLanguage());}),I(()=>{this.applyFontSize(this.state.config.fontSize());}),I(()=>{this.applyAccessibilityClass(this.state.config.accessibility());});}applyTheme(e){let r=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&r||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(G()){console.warn("Language switching is disabled in dev mode");return;}let r=window.location.href,i=window.location.hash,a=`index${e==="en"?"":`.${e}`}.html`,p=r.substring(0,r.indexOf(i))+a+window.location.hash;setTimeout(()=>{window.location.href=p;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}static ɵfac=function(r){return new(r||o)();};static ɵprov=u({token:o,factory:o.ɵfac,providedIn:"root"});}return o;})();var it=(()=>{class o{swUpdate=s(ae);status=s(c).serviceWorker.status;init(){S(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(b(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let r=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,r.reason);}}),l(e=>e.type==="VERSION_READY"),m(()=>A("Eine neue Version der App ist verf\xFCgbar. M\xF6chtest du neu laden?")),l(x)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?V(6e4).pipe(m(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(r){return new(r||o)();};static ɵprov=u({token:o,factory:o.ɵfac,providedIn:"root"});}return o;})();var gt=z("Filesystem",{web:()=>import("./chunk-3c4cd072.js").then(o=>new o.FilesystemWeb())});var yt=z("Share",{web:()=>import("./chunk-d0fd0e95.js").then(o=>new o.ShareWeb())});var X=class extends M{async webShareRules(){let t=this.state.rules.raw();if(!t){console.error("No rules available");return;}let e=this.exportFileName();await navigator.share({title:e,files:[new File([t],e,{type:"text/plain"})]});}downloadRules(){let t=this.state.rules.raw();if(!t){console.error("No rules available");return;}let e=new Blob([t],{type:"text/plain"}),r=URL.createObjectURL(e),i=document.createElement("a");i.href=r,i.download=this.exportFileName(),i.click();}async exportRules(){this.state.browser.isMobile()&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var st=(()=>{class o{router=s(E);state=s(c);exportNeeded=this.state.rules.exportNeeded;reminderActive=this.state.config.exportReminder;lastAskedHash=[];init(){V(3e4).pipe(l(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),d(()=>this.state.rules.hash()),l(e=>!this.lastAskedHash.includes(e)),b(e=>{this.lastAskedHash.push(e);}),m(()=>A("Die aktuellen Regeln wurden seit einiger Zeit nicht mehr exportiert. M\xF6chtest du sie jetzt exportieren?")),l(x)).subscribe(()=>{this.router.navigate(["/config"],{fragment:"export-now"});});}exportOverdue(){let e=this.state.export.lastDate();return new Date().getTime()-e>nt(10);}enoughTimeSinceLastEditPassed(){let e=this.state.rules.lastAction();return new Date().getTime()-e>nt(2);}static ɵfac=function(r){return new(r||o)();};static ɵprov=u({token:o,factory:o.ɵfac,providedIn:"root"});}return o;})();function nt(o){return o*60*1e3;}function wt(o){return{isTrackWeight:()=>o.get(c).config.trackWeight()};}var at={providers:[Ce(),Ve(rt,Ue(),je()),Qe("ngsw-worker.js",{enabled:!G()&&!0,registrationStrategy:"registerImmediately"}),Ze(),W(()=>{s(ot).init();}),W(()=>{s(it).init();}),W(()=>{s(st).init();}),{deps:[v],provide:ze,useFactory:wt},{provide:M,useClass:X},Ke(),Be()]};Ie(Ye,at).catch(o=>{console.error(o);});/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/