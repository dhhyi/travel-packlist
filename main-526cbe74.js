import"./chunk-74a2b748.js";import{a as G}from"./chunk-0f5556a1.js";import{c as Re,d as ee,e as Ie,g as C,j as te,k as Ne,m as re,n as P}from"./chunk-d6e0ccba.js";import{a as R}from"./chunk-912a1097.js";import{a as Be,b as E}from"./chunk-47f384f6.js";import{o as je,r as $e}from"./chunk-5faceaef.js";import{B as Ge,C as c,b as Me,c as Oe,d as Le,e as W,f as ke,g as De,h as xe,i as Fe,j as Ue,k as Ve,y as We}from"./chunk-db0e641e.js";import{b as ze}from"./chunk-ccd2ecc9.js";import{a as Ce,b as Pe}from"./chunk-2ec0a2cb.js";import{$a as ve,A as _,Aa as ge,B as g,Ba as Y,C as l,Cc as b,Ga as ye,Gb as v,H as h,Hb as T,Hc as $,I as ue,Ib as V,Ja as we,Nb as Te,Q as me,Rb as Q,T as m,W as y,Y as he,Za as Z,_ as u,ba as D,c as O,cb as be,da as H,ea as a,fa as x,g as le,kb as Ee,l as ce,m as L,n as pe,q as d,qa as w,sa as fe,sb as Ae,tb as U,tc as Se,u as de,v as X,va as F,vb as q,vc as j,x as K,xb as J,yb as _e,z as k,zc as S}from"./chunk-9f64b81f.js";import{a as ae}from"./chunk-089050b7.js";var Xe=Ne([P(":enter, :leave",C({position:"fixed",width:`${(Math.min(window.innerWidth,600)-18).toFixed(0)}px`}),{optional:!0}),P(":enter",C({opacity:0,transform:"{{ from }}"}),{optional:!0}),Ie([P(":leave",[ee("{{ duration }}",C({opacity:0,transform:"{{ to }}"}))],{optional:!0}),P(":enter",[ee("{{ duration }}",C({opacity:1,transform:"translateX(0) translateY(0) scale(1)"}))],{optional:!0})])],{params:{duration:"0.3s ease-in-out"}}),st=Re("routeTransition",[te(":decrement",[re(Xe,{params:{from:"translateX(-100%) scale(1)",to:"translateX(100%) scale(0.9)"}})]),te(":increment",[re(Xe,{params:{from:"translateX(100%) scale(1)",to:"translateX(-100%) scale(0.9)"}})])]),Ke=(()=>{class t{state=a(c);overlayVisible=Y(!1);router=a(W);routeData=Me(this.router.events.pipe(l(e=>e instanceof Oe),d(()=>this.router.routerState.root.snapshot.firstChild?.data)));hierarchy=S(()=>this.routeData()?.hierarchy);scrollTopVisible=S(()=>this.state.browser.scrollY()>100);disableAnimations=Y(!0);constructor(){we(()=>{this.disableAnimations.set(!this.state.config.animations());});}scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}static ɵfac=function(o){return new(o||t)();};static ɵcmp=Ee({type:t,selectors:[["app-root"]],decls:11,vars:6,consts:()=>{let e;e="Gehe zur TravelPacklist";let o;o="Gehe zu Konfiguration";let i;i="Nach oben scrollen";let s;return s="TravelPacklist",[s,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["iconCog","","iconClass","h-6 w-6","type","button","role","link","routerLink","/config","routerLinkActive","hidden","aria-label",o,1,"link","pr-2"],[1,"flex","grow","flex-col","pb-[3.5rem]",3,"inert"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],["iconArrowUpward","","iconClass","h-6 w-6","type","button","aria-label",i,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"],[3,"overlayVisible"]];},template:function(o,i){o&1&&(v(0,"nav",1)(1,"button",2),V(2,"img",3),v(3,"h1",4),Te(4,0),T()(),V(5,"button",5),T(),v(6,"div",6),V(7,"router-outlet"),v(8,"div",7)(9,"button",8),Q("click",function(){return i.scrollTop();}),T()()(),v(10,"app-dialog",9),Q("overlayVisible",function(n){return i.overlayVisible.set(n);}),T()),o&2&&(J("inert",i.overlayVisible()),Z(6),J("@routeTransition",i.hierarchy())("@.disabled",i.disableAnimations())("inert",i.overlayVisible()),Z(2),_e("hidden",!i.scrollTopVisible()));},dependencies:[Ve,Le,ke,De,je,Be,$e],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],data:{animation:[st]},changeDetection:0});}return t;})();var at="@",lt=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=a(w);loadingSchedulerFn=a(ct,{optional:!0});_engine;constructor(e,o,i,s,n){this.doc=e,this.delegate=o,this.zone=i,this.animationType=s,this.moduleImpl=n;}ngOnDestroy(){this._engine?.flush();}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-65ea633d.js").then(i=>i),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(i=>{throw new he(5300,!1);}).then(({ɵcreateEngine:i,ɵAnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let n=new s(this.delegate,this._engine,this.zone);return this.delegate=n,n;});}createRenderer(e,o){let i=this.delegate.createRenderer(e,o);if(i.ɵtype===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new oe(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(n=>{let p=n.createRenderer(e,o);s.use(p),this.scheduler??=this.injector.get(fe,null,{optional:!0}),this.scheduler?.notify(11);}).catch(n=>{s.use(i);}),s;}begin(){this.delegate.begin?.();}end(){this.delegate.end?.();}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve();}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e);}static ɵfac=function(o){ve();};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})(),oe=class{delegate;replay=[];ɵtype=1;constructor(r){this.delegate=r;}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null;}}get data(){return this.delegate.data;}destroy(){this.replay=null,this.delegate.destroy();}createElement(r,e){return this.delegate.createElement(r,e);}createComment(r){return this.delegate.createComment(r);}createText(r){return this.delegate.createText(r);}get destroyNode(){return this.delegate.destroyNode;}appendChild(r,e){this.delegate.appendChild(r,e);}insertBefore(r,e,o,i){this.delegate.insertBefore(r,e,o,i);}removeChild(r,e,o){this.delegate.removeChild(r,e,o);}selectRootElement(r,e){return this.delegate.selectRootElement(r,e);}parentNode(r){return this.delegate.parentNode(r);}nextSibling(r){return this.delegate.nextSibling(r);}setAttribute(r,e,o,i){this.delegate.setAttribute(r,e,o,i);}removeAttribute(r,e,o){this.delegate.removeAttribute(r,e,o);}addClass(r,e){this.delegate.addClass(r,e);}removeClass(r,e){this.delegate.removeClass(r,e);}setStyle(r,e,o,i){this.delegate.setStyle(r,e,o,i);}removeStyle(r,e,o){this.delegate.removeStyle(r,e,o);}setProperty(r,e,o){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(r,e,o)),this.delegate.setProperty(r,e,o);}setValue(r,e){this.delegate.setValue(r,e);}listen(r,e,o,i){return this.shouldReplay(e)&&this.replay.push(s=>s.listen(r,e,o,i)),this.delegate.listen(r,e,o,i);}shouldReplay(r){return this.replay!==null&&r.startsWith(at);}},ct=new D("");function He(t="animations"){return ge("NgAsyncAnimations"),x([{provide:be,useFactory:(r,e,o)=>new lt(r,e,o,t),deps:[$,Ce,F]},{provide:ye,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}]);}var M="Service workers are disabled or not supported by this browser";function pt(t){return X(()=>pe(new Error(t)));}var A=class{serviceWorker;worker;registration;events;constructor(r){if(this.serviceWorker=r,!r)this.worker=this.events=this.registration=pt(M);else{let o=K(r,"controllerchange").pipe(d(()=>r.controller)),i=X(()=>L(r.controller)),s=de(i,o);this.worker=s.pipe(l(f=>!!f)),this.registration=this.worker.pipe(m(()=>r.getRegistration()));let se=K(r,"message").pipe(d(f=>f.data)).pipe(l(f=>f&&f.type)).pipe(me());se.connect(),this.events=se;}}postMessage(r,e){return this.worker.pipe(h(1),y(o=>{o.postMessage(ae({action:r},e));})).toPromise().then(()=>{});}postMessageWithOperation(r,e,o){let i=this.waitForOperationCompleted(o),s=this.postMessage(r,e);return Promise.all([s,i]).then(([,n])=>n);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(r){let e;return typeof r=="string"?e=o=>o.type===r:e=o=>r.includes(o.type),this.events.pipe(l(e));}nextEventOfType(r){return this.eventsOfType(r).pipe(h(1));}waitForOperationCompleted(r){return this.eventsOfType("OPERATION_COMPLETED").pipe(l(e=>e.nonce===r),h(1),d(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},dt=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new le();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=g,this.notificationClicks=g,this.subscription=g;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(d(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(d(i=>i.data)),this.pushManager=this.sw.registration.pipe(d(i=>i.pushManager));let o=this.pushManager.pipe(m(i=>i.getSubscription()));this.subscription=_(o,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(M));let o={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(i.length));for(let n=0;n<i.length;n++)s[n]=i.charCodeAt(n);return o.applicationServerKey=s,this.pushManager.pipe(m(n=>n.subscribe(o)),h(1)).toPromise().then(n=>(this.subscriptionChanges.next(n),n));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(M));let e=o=>{if(o===null)throw new Error("Not subscribed to push notifications.");return o.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(h(1),m(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(o){return new(o||t)(H(A));};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})(),ie=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=g,this.unrecoverable=g;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(M));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(M));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(o){return new(o||t)(H(A));};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})();var Ye=new D("");function ut(t,r,e){return()=>{if(!("serviceWorker"in navigator&&e.enabled!==!1))return;let o=t.get(F),i=t.get(q);o.runOutsideAngular(()=>{let n=navigator.serviceWorker,p=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",p),i.onDestroy(()=>{n.removeEventListener("controllerchange",p);});});let s;if(typeof e.registrationStrategy=="function")s=e.registrationStrategy();else{let[n,...p]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(n){case"registerImmediately":s=L(null);break;case"registerWithDelay":s=Ze(+p[0]||0);break;case"registerWhenStable":let z=ce(t.get(q).whenStable());s=p[0]?_(z,Ze(+p[0])):z;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}o.runOutsideAngular(()=>s.pipe(h(1)).subscribe(()=>navigator.serviceWorker.register(r,{scope:e.scope}).catch(n=>console.error("Service worker registration failed with:",n))));};}function Ze(t){return L(null).pipe(ue(t));}function mt(t){return new A(t.enabled!==!1?navigator.serviceWorker:void 0);}var N=class{enabled;scope;registrationStrategy;};function qe(t,r={}){return x([dt,ie,{provide:Ye,useValue:t},{provide:N,useValue:r},{provide:A,useFactory:mt,deps:[N]},{provide:Ae,useFactory:ut,deps:[w,Ye,N],multi:!0}]);}var Je=!1,Qe=async()=>{let t=a(c).rules.raw(),r=S(()=>t.includes("#"));if(!Je&&r()){let e=await E("Die aktuellen Regeln enthalten Kommentare. Wenn du sie mit dem grafischen Editor bearbeitest, werden diese Kommentare verworfen. M\xF6chtest du fortfahren?");return e&&(Je=!0),e;}return!0;};var ne=()=>{let t=a(c),r=a(W),e=t.rules.parserError();if(e){let o=r.getCurrentNavigation()?.finalUrl;return r.navigate(["/rules-error"],{queryParams:{error:e},browserUrl:o});}else return!0;};var et=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-f2319e45.js").then(t=>t.PacklistComponent),canActivate:[ne],data:{hierarchy:0}},{path:"config",loadComponent:()=>import("./chunk-7ac27577.js").then(t=>t.ConfigComponent),data:{hierarchy:1}},{path:"rules",loadComponent:()=>import("./chunk-90e3cac2.js").then(t=>t.RulesComponent),canActivate:[ne,Qe],data:{hierarchy:2}},{path:"rules-raw",loadComponent:()=>import("./chunk-1a12947a.js").then(t=>t.EditRulesRawComponent),data:{hierarchy:2}},{path:"rules-error",loadComponent:()=>import("./chunk-c281fdf6.js").then(t=>t.RulesErrorComponent),data:{hierarchy:2}},{path:"documentation",loadComponent:()=>import("./chunk-bab24932.js").then(t=>t.DocumentationComponent),data:{hierarchy:2}},{path:"**",redirectTo:"/packlist"}];var tt=(()=>{class t{state=a(c);document=a($);init(){b(()=>{this.applyTheme(this.state.config.theme());}),b(()=>{this.applyLanguage(this.state.config.preferredLanguage());}),b(()=>{this.applyFontSize(this.state.config.fontSize());}),b(()=>{this.applyAccessibilityClass(this.state.config.accessibility());}),b(()=>{this.applyAnimationClass(this.state.config.animations());});}applyTheme(e){let o=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&o||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(j()){console.warn("Language switching is disabled in dev mode");return;}let o=window.location.href,i=window.location.hash,s=`index${e==="en"?"":`.${e}`}.html`,p=o.substring(0,o.indexOf(i))+s+window.location.hash;setTimeout(()=>{window.location.href=p;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}applyAnimationClass(e){document.documentElement.classList.toggle("animations",e);}static ɵfac=function(o){return new(o||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var rt=(()=>{class t{swUpdate=a(ie);status=a(c).serviceWorker.status;init(){_(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(y(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let o=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,o.reason);}}),l(e=>e.type==="VERSION_READY"),m(()=>E("Eine neue Version der App ist verf\xFCgbar. M\xF6chtest du neu laden?")),l(O)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?k(6e4).pipe(m(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(o){return new(o||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var ht=G("Filesystem",{web:()=>import("./chunk-06e17042.js").then(t=>new t.FilesystemWeb())});var ft=G("Share",{web:()=>import("./chunk-4fdf9956.js").then(t=>new t.ShareWeb())});var B=class extends R{async webShareRules(){let r=this.state.rules.raw();if(!r){console.error("No rules available");return;}let e=this.exportFileName();await navigator.share({title:e,files:[new File([r],e,{type:"text/plain"})]});}downloadRules(){let r=this.state.rules.raw();if(!r){console.error("No rules available");return;}let e=new Blob([r],{type:"text/plain"}),o=URL.createObjectURL(e),i=document.createElement("a");i.href=o,i.download=this.exportFileName(),i.click();}async exportRules(){this.state.browser.isMobile()&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var it=(()=>{class t{state=a(c);exportNeeded=this.state.rules.exportNeeded;reminderActive=this.state.config.exportReminder;lastAskedHash=[];init(){k(3e4).pipe(l(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),d(()=>this.state.rules.hash()),l(e=>!this.lastAskedHash.includes(e)),y(e=>{this.lastAskedHash.push(e);}),m(()=>E("Die aktuellen Regeln wurden seit einiger Zeit nicht mehr exportiert. M\xF6chtest du sie jetzt exportieren?")),l(O)).subscribe(()=>{this.state.router.go("config#export");});}exportOverdue(){let e=this.state.export.lastDate();return new Date().getTime()-e>ot(10);}enoughTimeSinceLastEditPassed(){let e=this.state.rules.lastAction();return new Date().getTime()-e>ot(2);}static ɵfac=function(o){return new(o||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function ot(t){return t*60*1e3;}function gt(t){return{isTrackWeight:()=>t.get(c).config.trackWeight()};}var nt={providers:[Se(),xe(et,Fe(),Ue()),qe("ngsw-worker.js",{enabled:!j()&&!0,registrationStrategy:"registerImmediately"}),He(),U(()=>{a(tt).init();}),U(()=>{a(rt).init();}),U(()=>{a(it).init();}),{deps:[w],provide:We,useFactory:gt},{provide:R,useClass:B},ze(),Ge()]};Pe(Ke,nt).catch(t=>{console.error(t);});/**i18n:14d9dda96f8b1cc78a5c1f627e7f4001f725ee96fc4e32e9e8f03011a063420a*/