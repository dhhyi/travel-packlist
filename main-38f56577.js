import{b as He}from"./chunk-64ffb88f.js";import"./chunk-13e659ee.js";import{a as A}from"./chunk-500108a1.js";import{c as Oe,d as ie,e as Me,g as O,j as ne,k as Le,m as se,n as M}from"./chunk-852dc99d.js";import{a as L}from"./chunk-71947de6.js";import{a as Ke,b as T}from"./chunk-dc07e920.js";import{n as Ge,q as Be}from"./chunk-d90e348e.js";import{b as ke,c as ze,p as Xe,s as c}from"./chunk-5f7c50f4.js";import{a as xe,c as De,d as _,e as Fe,f as Ue,g as Ve,h as je,i as $e,j as We}from"./chunk-35b70206.js";import{a as Ie,b as Ne}from"./chunk-d6ce3d1d.js";import{$a as Ae,A as P,Aa as ve,B as w,Ba as q,C as l,Cc as E,Fa as J,Ga as be,Gb as g,H as f,Hb as R,Hc as z,I as fe,Ib as I,Ja as Ee,Nb as Pe,Q as ge,Rb as re,Sc as oe,T as m,W as v,Y as ye,Za as Q,_ as u,ba as j,c as F,cb as _e,da as Z,ea as a,fa as $,g as de,kb as Te,l as ue,m as U,n as me,q as d,qa as b,sa as we,sb as Se,tb as G,tc as Re,u as he,v as H,va as W,vb as ee,vc as B,x as Y,xb as te,yb as Ce,z as V,zc as N}from"./chunk-5879788f.js";import{a as pe}from"./chunk-5dac2c5c.js";var At=A("SafeArea",{web:()=>import("./chunk-76430337.js").then(t=>new t.SafeAreaWeb())});function X(t){var r;typeof document<"u"&&((r=document.querySelector(":root"))===null||r===void 0||r.style.setProperty(`--safe-area-inset-${t}`,`max(env(safe-area-inset-${t}), 0px)`));}function ct(){X("top"),X("left"),X("bottom"),X("right");}ct();var Ye=Le([M(":enter, :leave",O({position:"fixed",width:`${(Math.min(window.innerWidth,600)-18).toFixed(0)}px`}),{optional:!0}),M(":enter",O({opacity:0,transform:"{{ from }}"}),{optional:!0}),Me([M(":leave",[ie("{{ duration }}",O({opacity:0,transform:"{{ to }}"}))],{optional:!0}),M(":enter",[ie("{{ duration }}",O({opacity:1,transform:"translateX(0) translateY(0) scale(1)"}))],{optional:!0})])],{params:{duration:"0.3s ease-in-out"}}),pt=Oe("routeTransition",[ne(":decrement",[se(Ye,{params:{from:"translateX(-100%) scale(1)",to:"translateX(100%) scale(0.9)"}})]),ne(":increment",[se(Ye,{params:{from:"translateX(100%) scale(1)",to:"translateX(-100%) scale(0.9)"}})])]),Ze=(()=>{class t{state=a(c);overlayVisible=q(!1);router=a(_);routeData=ke(this.router.events.pipe(l(e=>e instanceof xe),d(()=>this.router.routerState.root.snapshot.firstChild?.data)));hierarchy=N(()=>this.routeData()?.hierarchy);scrollTopVisible=N(()=>this.state.browser.scrollY()>100);disableAnimations=q(!0);constructor(){Ee(()=>{this.disableAnimations.set(!this.state.config.animations());});}scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(o){return new(o||t)();};static ɵcmp=Te({type:t,selectors:[["app-root"]],decls:13,vars:6,consts:()=>{let e;e="Gehe zur TravelPacklist";let o;o="Gehe zu Konfiguration";let i;i="Nach oben scrollen";let s;return s="TravelPacklist",[s,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["type","button","role","link","routerLink","/config","routerLinkActive","hidden","aria-label",o,1,"link","pr-2"],[1,"h-6","w-6"],[1,"p-content-safe-bottom","flex","grow","flex-col",3,"inert"],[1,"p-safe-bottom","fixed","bottom-2","left-1/2","-translate-x-1/2"],["type","button","aria-label",i,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"],[3,"overlayVisible"]];},template:function(o,i){o&1&&(g(0,"nav",1)(1,"button",2),I(2,"img",3),g(3,"h1",4),Pe(4,0),R()(),g(5,"button",5),I(6,"app-icon-cog",6),R()(),g(7,"div",7),I(8,"router-outlet"),g(9,"div",8)(10,"button",9),re("click",function(){return i.scrollTop();}),I(11,"app-icon-arrow-upward",6),R()()(),g(12,"app-dialog",10),re("overlayVisible",function(n){return i.overlayVisible.set(n);}),R()),o&2&&(te("inert",i.overlayVisible()),Q(7),te("@routeTransition",i.hierarchy())("@.disabled",i.disableAnimations())("inert",i.overlayVisible()),Q(2),Ce("hidden",!i.scrollTopVisible()));},dependencies:[We,De,Fe,Ue,Ge,Ke,Be],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],data:{animation:[pt]},changeDetection:0});}return t;})();var dt="@",ut=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=a(b);loadingSchedulerFn=a(mt,{optional:!0});_engine;constructor(e,o,i,s,n){this.doc=e,this.delegate=o,this.zone=i,this.animationType=s,this.moduleImpl=n;}ngOnDestroy(){this._engine?.flush();}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-63ad6738.js").then(i=>i),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(i=>{throw new ye(5300,!1);}).then(({ɵcreateEngine:i,ɵAnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let n=new s(this.delegate,this._engine,this.zone);return this.delegate=n,n;});}createRenderer(e,o){let i=this.delegate.createRenderer(e,o);if(i.ɵtype===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new ae(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(n=>{let p=n.createRenderer(e,o);s.use(p),this.scheduler??=this.injector.get(we,null,{optional:!0}),this.scheduler?.notify(11);}).catch(n=>{s.use(i);}),s;}begin(){this.delegate.begin?.();}end(){this.delegate.end?.();}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve();}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e);}static ɵfac=function(o){Ae();};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})(),ae=class{delegate;replay=[];ɵtype=1;constructor(r){this.delegate=r;}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null;}}get data(){return this.delegate.data;}destroy(){this.replay=null,this.delegate.destroy();}createElement(r,e){return this.delegate.createElement(r,e);}createComment(r){return this.delegate.createComment(r);}createText(r){return this.delegate.createText(r);}get destroyNode(){return this.delegate.destroyNode;}appendChild(r,e){this.delegate.appendChild(r,e);}insertBefore(r,e,o,i){this.delegate.insertBefore(r,e,o,i);}removeChild(r,e,o){this.delegate.removeChild(r,e,o);}selectRootElement(r,e){return this.delegate.selectRootElement(r,e);}parentNode(r){return this.delegate.parentNode(r);}nextSibling(r){return this.delegate.nextSibling(r);}setAttribute(r,e,o,i){this.delegate.setAttribute(r,e,o,i);}removeAttribute(r,e,o){this.delegate.removeAttribute(r,e,o);}addClass(r,e){this.delegate.addClass(r,e);}removeClass(r,e){this.delegate.removeClass(r,e);}setStyle(r,e,o,i){this.delegate.setStyle(r,e,o,i);}removeStyle(r,e,o){this.delegate.removeStyle(r,e,o);}setProperty(r,e,o){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(r,e,o)),this.delegate.setProperty(r,e,o);}setValue(r,e){this.delegate.setValue(r,e);}listen(r,e,o,i){return this.shouldReplay(e)&&this.replay.push(s=>s.listen(r,e,o,i)),this.delegate.listen(r,e,o,i);}shouldReplay(r){return this.replay!==null&&r.startsWith(dt);}},mt=new j("");function qe(t="animations"){return ve("NgAsyncAnimations"),$([{provide:_e,useFactory:(r,e,o)=>new ut(r,e,o,t),deps:[z,Ie,W]},{provide:be,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}]);}var D="Service workers are disabled or not supported by this browser";function ht(t){return H(()=>me(new Error(t)));}var S=class{serviceWorker;worker;registration;events;constructor(r){if(this.serviceWorker=r,!r)this.worker=this.events=this.registration=ht(D);else{let o=Y(r,"controllerchange").pipe(d(()=>r.controller)),i=H(()=>U(r.controller)),s=he(i,o);this.worker=s.pipe(l(y=>!!y)),this.registration=this.worker.pipe(m(()=>r.getRegistration()));let C=Y(r,"message").pipe(d(y=>y.data)).pipe(l(y=>y&&y.type)).pipe(ge());C.connect(),this.events=C;}}postMessage(r,e){return this.worker.pipe(f(1),v(o=>{o.postMessage(pe({action:r},e));})).toPromise().then(()=>{});}postMessageWithOperation(r,e,o){let i=this.waitForOperationCompleted(o),s=this.postMessage(r,e);return Promise.all([s,i]).then(([,n])=>n);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(r){let e;return typeof r=="string"?e=o=>o.type===r:e=o=>r.includes(o.type),this.events.pipe(l(e));}nextEventOfType(r){return this.eventsOfType(r).pipe(f(1));}waitForOperationCompleted(r){return this.eventsOfType("OPERATION_COMPLETED").pipe(l(e=>e.nonce===r),f(1),d(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},ft=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new de();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=w,this.notificationClicks=w,this.subscription=w;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(d(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(d(i=>i.data)),this.pushManager=this.sw.registration.pipe(d(i=>i.pushManager));let o=this.pushManager.pipe(m(i=>i.getSubscription()));this.subscription=P(o,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(D));let o={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(i.length));for(let n=0;n<i.length;n++)s[n]=i.charCodeAt(n);return o.applicationServerKey=s,this.pushManager.pipe(m(n=>n.subscribe(o)),f(1)).toPromise().then(n=>(this.subscriptionChanges.next(n),n));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(D));let e=o=>{if(o===null)throw new Error("Not subscribed to push notifications.");return o.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(f(1),m(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(o){return new(o||t)(Z(S));};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})(),le=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=w,this.unrecoverable=w;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(D));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(D));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(o){return new(o||t)(Z(S));};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})();var Je=new j("");function gt(t,r,e,o){return()=>{if(!(oe(o)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let i=t.get(W),s=t.get(ee);i.runOutsideAngular(()=>{let p=navigator.serviceWorker,h=()=>p.controller?.postMessage({action:"INITIALIZE"});p.addEventListener("controllerchange",h),s.onDestroy(()=>{p.removeEventListener("controllerchange",h);});});let n;if(typeof e.registrationStrategy=="function")n=e.registrationStrategy();else{let[p,...h]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":n=U(null);break;case"registerWithDelay":n=Qe(+h[0]||0);break;case"registerWhenStable":let C=ue(t.get(ee).whenStable());n=h[0]?P(C,Qe(+h[0])):C;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}i.runOutsideAngular(()=>n.pipe(f(1)).subscribe(()=>navigator.serviceWorker.register(r,{scope:e.scope}).catch(p=>console.error("Service worker registration failed with:",p))));};}function Qe(t){return U(null).pipe(fe(t));}function yt(t,r){return new S(oe(r)&&t.enabled!==!1?navigator.serviceWorker:void 0);}var x=class{enabled;scope;registrationStrategy;};function et(t,r={}){return $([ft,le,{provide:Je,useValue:t},{provide:x,useValue:r},{provide:S,useFactory:yt,deps:[x,J]},{provide:Se,useFactory:gt,deps:[b,Je,x,J],multi:!0}]);}var tt=!1,rt=async()=>{let t=a(c).rules.raw(),r=N(()=>t.includes("#"));if(!tt&&r()){let e=await T("Die aktuellen Regeln enthalten Kommentare. Wenn du sie mit dem grafischen Editor bearbeitest, werden diese Kommentare verworfen. M\xF6chtest du fortfahren?");return e&&(tt=!0),e;}return!0;};var ce=()=>{let t=a(c),r=a(_),e=t.rules.parserError();if(e){let o=r.getCurrentNavigation()?.finalUrl;return r.navigate(["/rules-error"],{queryParams:{error:e},browserUrl:o});}else return!0;};var ot=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-79848eac.js").then(t=>t.PacklistComponent),canActivate:[ce],data:{hierarchy:0}},{path:"config",loadComponent:()=>import("./chunk-db24b527.js").then(t=>t.ConfigComponent),data:{hierarchy:1}},{path:"rules",loadComponent:()=>import("./chunk-7e017a4d.js").then(t=>t.RulesComponent),canActivate:[ce,rt],data:{hierarchy:2}},{path:"rules-raw",loadComponent:()=>import("./chunk-44cfb84a.js").then(t=>t.EditRulesRawComponent),data:{hierarchy:2}},{path:"rules-error",loadComponent:()=>import("./chunk-69af2065.js").then(t=>t.RulesErrorComponent),data:{hierarchy:2}},{path:"documentation",loadComponent:()=>import("./chunk-fdef7db5.js").then(t=>t.DocumentationComponent),data:{hierarchy:2}},{path:"**",redirectTo:"/packlist"}];var it=(()=>{class t{state=a(c);document=a(z);init(){E(()=>{this.applyTheme(this.state.config.theme());}),E(()=>{this.applyLanguage(this.state.config.preferredLanguage());}),E(()=>{this.applyFontSize(this.state.config.fontSize());}),E(()=>{this.applyAccessibilityClass(this.state.config.accessibility());}),E(()=>{this.applyAnimationClass(this.state.config.animations());});}applyTheme(e){let o=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&o||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(B()){console.warn("Language switching is disabled in dev mode");return;}let o=window.location.href,i=window.location.hash,s=`index${e==="en"?"":`.${e}`}.html`,p=o.substring(0,o.indexOf(i))+s+window.location.hash;setTimeout(()=>{window.location.href=p;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}applyAnimationClass(e){document.documentElement.classList.toggle("animations",e);}static ɵfac=function(o){return new(o||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var nt=(()=>{class t{swUpdate=a(le);status=a(c).serviceWorker.status;init(){P(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(v(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let o=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,o.reason);}}),l(e=>e.type==="VERSION_READY"),m(()=>T("Eine neue Version der App ist verf\xFCgbar. M\xF6chtest du neu laden?")),l(F)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?V(6e4).pipe(m(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(o){return new(o||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var wt=A("Filesystem",{web:()=>import("./chunk-8648d3b4.js").then(t=>new t.FilesystemWeb())});var vt=A("Share",{web:()=>import("./chunk-59c3699b.js").then(t=>new t.ShareWeb())});var K=class extends L{async webShareRules(){let r=this.state.rules.raw();if(!r){console.error("No rules available");return;}let e=this.exportFileName();await navigator.share({title:e,files:[new File([r],e,{type:"text/plain"})]});}downloadRules(){let r=this.state.rules.raw();if(!r){console.error("No rules available");return;}let e=new Blob([r],{type:"text/plain"}),o=URL.createObjectURL(e),i=document.createElement("a");i.href=o,i.download=this.exportFileName(),i.click();}async exportRules(){this.state.browser.isMobile()&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var at=(()=>{class t{router=a(_);state=a(c);exportNeeded=this.state.rules.exportNeeded;reminderActive=this.state.config.exportReminder;lastAskedHash=[];init(){V(3e4).pipe(l(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),d(()=>this.state.rules.hash()),l(e=>!this.lastAskedHash.includes(e)),v(e=>{this.lastAskedHash.push(e);}),m(()=>T("Die aktuellen Regeln wurden seit einiger Zeit nicht mehr exportiert. M\xF6chtest du sie jetzt exportieren?")),l(F)).subscribe(()=>{this.router.navigate(["/config"],{fragment:"export-now"});});}exportOverdue(){let e=this.state.export.lastDate();return new Date().getTime()-e>st(10);}enoughTimeSinceLastEditPassed(){let e=this.state.rules.lastAction();return new Date().getTime()-e>st(2);}static ɵfac=function(o){return new(o||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function st(t){return t*60*1e3;}function bt(t){return{isTrackWeight:()=>t.get(c).config.trackWeight()};}var lt={providers:[Re(),Ve(ot,je(),$e()),et("ngsw-worker.js",{enabled:!B()&&!0,registrationStrategy:"registerImmediately"}),qe(),G(()=>{a(it).init();}),G(()=>{a(nt).init();}),G(()=>{a(at).init();}),{deps:[b],provide:Xe,useFactory:bt},{provide:L,useClass:K},He(),ze()]};Ne(Ze,lt).catch(t=>{console.error(t);});/**i18n:5366b86f2516668e0182d7169675f5a9db84e9239a33e605b62f0d042910cdf2*/