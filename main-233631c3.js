import"./chunk-433fca8e.js";import{a as z}from"./chunk-2536d5b8.js";import{c as Ne,d as oe,e as Oe,g as N,j as ie,k as Me,m as ne,n as O}from"./chunk-ec8cad2b.js";import{a as M}from"./chunk-0bb81da3.js";import{a as Xe,b as _}from"./chunk-6d30e082.js";import{n as We,q as Ge}from"./chunk-7c5e0890.js";import{b as Le,c as Be,p as ze,s as c}from"./chunk-b6162221.js";import{a as ke,c as De,d as A,e as xe,f as Fe,g as Ve,h as Ue,i as je,j as $e}from"./chunk-1d3e77c2.js";import{b as Ke}from"./chunk-fbc13506.js";import{a as Re,b as Ie}from"./chunk-0ec23941.js";import{$a as be,A as C,Aa as we,B as w,Ba as Z,C as l,Cc as b,Fa as q,Ga as ve,Gb as g,H as f,Hb as P,Hc as B,I as he,Ib as R,Ja as Ee,Nb as Ce,Q as fe,Rb as te,Sc as re,T as m,W as v,Y as ge,Za as J,_ as u,ba as U,c as x,cb as Ae,da as Y,ea as a,fa as j,g as pe,kb as _e,l as de,m as F,n as ue,q as d,qa as E,sa as ye,sb as Te,tb as W,tc as Pe,u as me,v as K,va as $,vb as Q,vc as G,x as H,xb as ee,yb as Se,z as V,zc as I}from"./chunk-d849c6ec.js";import{a as ce}from"./chunk-a787c124.js";var He=Me([O(":enter, :leave",N({position:"fixed",width:`${(Math.min(window.innerWidth,600)-18).toFixed(0)}px`}),{optional:!0}),O(":enter",N({opacity:0,transform:"{{ from }}"}),{optional:!0}),Oe([O(":leave",[oe("{{ duration }}",N({opacity:0,transform:"{{ to }}"}))],{optional:!0}),O(":enter",[oe("{{ duration }}",N({opacity:1,transform:"translateX(0) translateY(0) scale(1)"}))],{optional:!0})])],{params:{duration:"0.3s ease-in-out"}}),lt=Ne("routeTransition",[ie(":decrement",[ne(He,{params:{from:"translateX(-100%) scale(1)",to:"translateX(100%) scale(0.9)"}})]),ie(":increment",[ne(He,{params:{from:"translateX(100%) scale(1)",to:"translateX(-100%) scale(0.9)"}})])]),Ye=(()=>{class t{state=a(c);overlayVisible=Z(!1);router=a(A);routeData=Le(this.router.events.pipe(l(e=>e instanceof ke),d(()=>this.router.routerState.root.snapshot.firstChild?.data)));hierarchy=I(()=>this.routeData()?.hierarchy);scrollTopVisible=I(()=>this.state.browser.scrollY()>100);disableAnimations=Z(!0);constructor(){Ee(()=>{this.disableAnimations.set(!this.state.config.animations());});}scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(o){return new(o||t)();};static ɵcmp=_e({type:t,selectors:[["app-root"]],decls:13,vars:6,consts:()=>{let e;e="Gehe zur TravelPacklist";let o;o="Gehe zu Konfiguration";let i;i="Nach oben scrollen";let s;return s="TravelPacklist",[s,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["type","button","role","link","routerLink","/config","routerLinkActive","hidden","aria-label",o,1,"link","pr-2"],[1,"h-6","w-6"],[1,"flex","grow","flex-col","pb-[3.5rem]",3,"inert"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],["type","button","aria-label",i,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"],[3,"overlayVisible"]];},template:function(o,i){o&1&&(g(0,"nav",1)(1,"button",2),R(2,"img",3),g(3,"h1",4),Ce(4,0),P()(),g(5,"button",5),R(6,"app-icon-cog",6),P()(),g(7,"div",7),R(8,"router-outlet"),g(9,"div",8)(10,"button",9),te("click",function(){return i.scrollTop();}),R(11,"app-icon-arrow-upward",6),P()()(),g(12,"app-dialog",10),te("overlayVisible",function(n){return i.overlayVisible.set(n);}),P()),o&2&&(ee("inert",i.overlayVisible()),J(7),ee("@routeTransition",i.hierarchy())("@.disabled",i.disableAnimations())("inert",i.overlayVisible()),J(2),Se("hidden",!i.scrollTopVisible()));},dependencies:[$e,De,xe,Fe,We,Xe,Ge],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],data:{animation:[lt]},changeDetection:0});}return t;})();var ct="@",pt=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=a(E);loadingSchedulerFn=a(dt,{optional:!0});_engine;constructor(e,o,i,s,n){this.doc=e,this.delegate=o,this.zone=i,this.animationType=s,this.moduleImpl=n;}ngOnDestroy(){this._engine?.flush();}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-cdf02e39.js").then(i=>i),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(i=>{throw new ge(5300,!1);}).then(({ɵcreateEngine:i,ɵAnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let n=new s(this.delegate,this._engine,this.zone);return this.delegate=n,n;});}createRenderer(e,o){let i=this.delegate.createRenderer(e,o);if(i.ɵtype===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new se(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(n=>{let p=n.createRenderer(e,o);s.use(p),this.scheduler??=this.injector.get(ye,null,{optional:!0}),this.scheduler?.notify(11);}).catch(n=>{s.use(i);}),s;}begin(){this.delegate.begin?.();}end(){this.delegate.end?.();}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve();}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e);}static ɵfac=function(o){be();};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})(),se=class{delegate;replay=[];ɵtype=1;constructor(r){this.delegate=r;}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null;}}get data(){return this.delegate.data;}destroy(){this.replay=null,this.delegate.destroy();}createElement(r,e){return this.delegate.createElement(r,e);}createComment(r){return this.delegate.createComment(r);}createText(r){return this.delegate.createText(r);}get destroyNode(){return this.delegate.destroyNode;}appendChild(r,e){this.delegate.appendChild(r,e);}insertBefore(r,e,o,i){this.delegate.insertBefore(r,e,o,i);}removeChild(r,e,o){this.delegate.removeChild(r,e,o);}selectRootElement(r,e){return this.delegate.selectRootElement(r,e);}parentNode(r){return this.delegate.parentNode(r);}nextSibling(r){return this.delegate.nextSibling(r);}setAttribute(r,e,o,i){this.delegate.setAttribute(r,e,o,i);}removeAttribute(r,e,o){this.delegate.removeAttribute(r,e,o);}addClass(r,e){this.delegate.addClass(r,e);}removeClass(r,e){this.delegate.removeClass(r,e);}setStyle(r,e,o,i){this.delegate.setStyle(r,e,o,i);}removeStyle(r,e,o){this.delegate.removeStyle(r,e,o);}setProperty(r,e,o){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(r,e,o)),this.delegate.setProperty(r,e,o);}setValue(r,e){this.delegate.setValue(r,e);}listen(r,e,o,i){return this.shouldReplay(e)&&this.replay.push(s=>s.listen(r,e,o,i)),this.delegate.listen(r,e,o,i);}shouldReplay(r){return this.replay!==null&&r.startsWith(ct);}},dt=new U("");function Ze(t="animations"){return we("NgAsyncAnimations"),j([{provide:Ae,useFactory:(r,e,o)=>new pt(r,e,o,t),deps:[B,Re,$]},{provide:ve,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}]);}var D="Service workers are disabled or not supported by this browser";function ut(t){return K(()=>ue(new Error(t)));}var T=class{serviceWorker;worker;registration;events;constructor(r){if(this.serviceWorker=r,!r)this.worker=this.events=this.registration=ut(D);else{let o=H(r,"controllerchange").pipe(d(()=>r.controller)),i=K(()=>F(r.controller)),s=me(i,o);this.worker=s.pipe(l(y=>!!y)),this.registration=this.worker.pipe(m(()=>r.getRegistration()));let S=H(r,"message").pipe(d(y=>y.data)).pipe(l(y=>y&&y.type)).pipe(fe());S.connect(),this.events=S;}}postMessage(r,e){return this.worker.pipe(f(1),v(o=>{o.postMessage(ce({action:r},e));})).toPromise().then(()=>{});}postMessageWithOperation(r,e,o){let i=this.waitForOperationCompleted(o),s=this.postMessage(r,e);return Promise.all([s,i]).then(([,n])=>n);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(r){let e;return typeof r=="string"?e=o=>o.type===r:e=o=>r.includes(o.type),this.events.pipe(l(e));}nextEventOfType(r){return this.eventsOfType(r).pipe(f(1));}waitForOperationCompleted(r){return this.eventsOfType("OPERATION_COMPLETED").pipe(l(e=>e.nonce===r),f(1),d(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},mt=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new pe();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=w,this.notificationClicks=w,this.subscription=w;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(d(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(d(i=>i.data)),this.pushManager=this.sw.registration.pipe(d(i=>i.pushManager));let o=this.pushManager.pipe(m(i=>i.getSubscription()));this.subscription=C(o,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(D));let o={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(i.length));for(let n=0;n<i.length;n++)s[n]=i.charCodeAt(n);return o.applicationServerKey=s,this.pushManager.pipe(m(n=>n.subscribe(o)),f(1)).toPromise().then(n=>(this.subscriptionChanges.next(n),n));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(D));let e=o=>{if(o===null)throw new Error("Not subscribed to push notifications.");return o.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(f(1),m(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(o){return new(o||t)(Y(T));};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})(),ae=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=w,this.unrecoverable=w;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(D));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(D));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(o){return new(o||t)(Y(T));};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})();var qe=new U("");function ht(t,r,e,o){return()=>{if(!(re(o)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let i=t.get($),s=t.get(Q);i.runOutsideAngular(()=>{let p=navigator.serviceWorker,h=()=>p.controller?.postMessage({action:"INITIALIZE"});p.addEventListener("controllerchange",h),s.onDestroy(()=>{p.removeEventListener("controllerchange",h);});});let n;if(typeof e.registrationStrategy=="function")n=e.registrationStrategy();else{let[p,...h]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":n=F(null);break;case"registerWithDelay":n=Je(+h[0]||0);break;case"registerWhenStable":let S=de(t.get(Q).whenStable());n=h[0]?C(S,Je(+h[0])):S;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}i.runOutsideAngular(()=>n.pipe(f(1)).subscribe(()=>navigator.serviceWorker.register(r,{scope:e.scope}).catch(p=>console.error("Service worker registration failed with:",p))));};}function Je(t){return F(null).pipe(he(t));}function ft(t,r){return new T(re(r)&&t.enabled!==!1?navigator.serviceWorker:void 0);}var k=class{enabled;scope;registrationStrategy;};function Qe(t,r={}){return j([mt,ae,{provide:qe,useValue:t},{provide:k,useValue:r},{provide:T,useFactory:ft,deps:[k,q]},{provide:Te,useFactory:ht,deps:[E,qe,k,q],multi:!0}]);}var et=!1,tt=async()=>{let t=a(c).rules.raw(),r=I(()=>t.includes("#"));if(!et&&r()){let e=await _("Die aktuellen Regeln enthalten Kommentare. Wenn du sie mit dem grafischen Editor bearbeitest, werden diese Kommentare verworfen. M\xF6chtest du fortfahren?");return e&&(et=!0),e;}return!0;};var le=()=>{let t=a(c),r=a(A),e=t.rules.parserError();return e?r.createUrlTree(["/rules-error"],{queryParams:{error:e}}):!0;};var rt=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-3edde98e.js").then(t=>t.PacklistComponent),canActivate:[le],data:{hierarchy:0}},{path:"config",loadComponent:()=>import("./chunk-f28bb221.js").then(t=>t.ConfigComponent),data:{hierarchy:1}},{path:"rules",loadComponent:()=>import("./chunk-bb433882.js").then(t=>t.RulesComponent),canActivate:[le,tt],data:{hierarchy:2}},{path:"rules-raw",loadComponent:()=>import("./chunk-8ea0bcc3.js").then(t=>t.EditRulesRawComponent),data:{hierarchy:2}},{path:"rules-error",loadComponent:()=>import("./chunk-0a244ad7.js").then(t=>t.RulesErrorComponent),data:{hierarchy:2}},{path:"documentation",loadComponent:()=>import("./chunk-e7d79c43.js").then(t=>t.DocumentationComponent),data:{hierarchy:2}},{path:"**",redirectTo:"/packlist"}];var ot=(()=>{class t{state=a(c);document=a(B);init(){b(()=>{this.applyTheme(this.state.config.theme());}),b(()=>{this.applyLanguage(this.state.config.preferredLanguage());}),b(()=>{this.applyFontSize(this.state.config.fontSize());}),b(()=>{this.applyAccessibilityClass(this.state.config.accessibility());}),b(()=>{this.applyAnimationClass(this.state.config.animations());});}applyTheme(e){let o=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&o||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(G()){console.warn("Language switching is disabled in dev mode");return;}let o=window.location.href,i=window.location.hash,s=`index${e==="en"?"":`.${e}`}.html`,p=o.substring(0,o.indexOf(i))+s+window.location.hash;setTimeout(()=>{window.location.href=p;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}applyAnimationClass(e){document.documentElement.classList.toggle("animations",e);}static ɵfac=function(o){return new(o||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var it=(()=>{class t{swUpdate=a(ae);status=a(c).serviceWorker.status;init(){C(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(v(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let o=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,o.reason);}}),l(e=>e.type==="VERSION_READY"),m(()=>_("Eine neue Version der App ist verf\xFCgbar. M\xF6chtest du neu laden?")),l(x)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?V(6e4).pipe(m(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(o){return new(o||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var gt=z("Filesystem",{web:()=>import("./chunk-9d37a34e.js").then(t=>new t.FilesystemWeb())});var yt=z("Share",{web:()=>import("./chunk-32769e9a.js").then(t=>new t.ShareWeb())});var X=class extends M{async webShareRules(){let r=this.state.rules.raw();if(!r){console.error("No rules available");return;}let e=this.exportFileName();await navigator.share({title:e,files:[new File([r],e,{type:"text/plain"})]});}downloadRules(){let r=this.state.rules.raw();if(!r){console.error("No rules available");return;}let e=new Blob([r],{type:"text/plain"}),o=URL.createObjectURL(e),i=document.createElement("a");i.href=o,i.download=this.exportFileName(),i.click();}async exportRules(){this.state.browser.isMobile()&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var st=(()=>{class t{router=a(A);state=a(c);exportNeeded=this.state.rules.exportNeeded;reminderActive=this.state.config.exportReminder;lastAskedHash=[];init(){V(3e4).pipe(l(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),d(()=>this.state.rules.hash()),l(e=>!this.lastAskedHash.includes(e)),v(e=>{this.lastAskedHash.push(e);}),m(()=>_("Die aktuellen Regeln wurden seit einiger Zeit nicht mehr exportiert. M\xF6chtest du sie jetzt exportieren?")),l(x)).subscribe(()=>{this.router.navigate(["/config"],{fragment:"export-now"});});}exportOverdue(){let e=this.state.export.lastDate();return new Date().getTime()-e>nt(10);}enoughTimeSinceLastEditPassed(){let e=this.state.rules.lastAction();return new Date().getTime()-e>nt(2);}static ɵfac=function(o){return new(o||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function nt(t){return t*60*1e3;}function wt(t){return{isTrackWeight:()=>t.get(c).config.trackWeight()};}var at={providers:[Pe(),Ve(rt,Ue(),je()),Qe("ngsw-worker.js",{enabled:!G()&&!0,registrationStrategy:"registerImmediately"}),Ze(),W(()=>{a(ot).init();}),W(()=>{a(it).init();}),W(()=>{a(st).init();}),{deps:[E],provide:ze,useFactory:wt},{provide:M,useClass:X},Ke(),Be()]};Ie(Ye,at).catch(t=>{console.error(t);});/**i18n:20a69378bcb30b4ad603187e7bb8505c5b8b76ebdfce9873b2ffab296fc1dc45*/