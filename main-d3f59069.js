import"./chunk-d0affa1f.js";import"./chunk-3a9c2b79.js";import{c as Se,d as ie,e as Pe,g as R,j as ne,k as Re,m as se,n as k}from"./chunk-ca6b35b1.js";import{a as I}from"./chunk-8f0489a6.js";import{a as We,b as S}from"./chunk-6ea723a8.js";import{l as Ve,q as Fe,v as je,y as Ue}from"./chunk-bbb08834.js";import{n as $e,q as Ge,r as Be,s as c}from"./chunk-ae1ec182.js";import{a as q}from"./chunk-c0685382.js";import{a as He}from"./chunk-7c4bbdf6.js";import{a as Y,g as ve,h as Te,k as ke,l as Ie,n as Me,o as Z,p as Ne,q as Oe,r as Le,s as xe,t as De}from"./chunk-248f8e5a.js";import{$ as U,A as de,B as w,C as p,Da as he,Eb as f,Fb as g,Ga as fe,Gb as oe,H as b,Ha as ge,Ib as z,Nb as Ee,R as m,Rb as v,Sb as X,U as j,W as ue,Xa as E,Y as u,_a as _e,ba as J,bb as ye,c as x,ca as a,da as $,e as D,h as V,ib as we,ja as G,ka as B,nb as be,oa as A,pc as Ce,qa as me,r as h,rb as C,rc as K,ta as W,tb as te,vb as re,wb as Ae,wc as _,xc as T,ya as ee,z as F,zb as H}from"./chunk-8a02f8fd.js";import{a as pe}from"./chunk-1724ecac.js";function st(o,i){if(o&1){let e=z();f(0,"button",12),v("click",function(){G(e);let r=X();return B(r.go("rules-documentation"));}),g();}}function at(o,i){if(o&1){let e=z();f(0,"button",13),v("click",function(){G(e);let r=X();return B(r.go("back"));}),g();}}function lt(o,i){if(o&1){let e=z();f(0,"button",14),v("click",function(){G(e);let r=X();return B(r.go("config"));}),g();}}var ze=Re([k(":enter, :leave",R({position:"fixed",width:`${(Math.min(window.innerWidth,600)-18).toFixed(0)}px`}),{optional:!0}),k(":enter",R({opacity:0,transform:"{{ from }}"}),{optional:!0}),Pe([k(":leave",[ie("{{ duration }}",R({opacity:0,transform:"{{ to }}"}))],{optional:!0}),k(":enter",[ie("{{ duration }}",R({opacity:1,transform:"translateX(0) translateY(0) scale(1)"}))],{optional:!0})])],{params:{duration:"0.3s ease-in-out"}}),ct=Se("routeTransition",[ne(":decrement",[se(ze,{params:{from:"translateX(-100%) scale(1)",to:"translateX(100%) scale(0.9)"}})]),ne(":increment",[se(ze,{params:{from:"translateX(100%) scale(1)",to:"translateX(-100%) scale(0.9)"}})])]),Xe=(()=>{class o{state=a(c);overlayVisible=ee(!1);router=a(Z);routeData=ke(this.router.events.pipe(p(e=>e instanceof Ie),h(()=>this.router.routerState.root.snapshot.firstChild?.data)));hierarchy=_(()=>this.routeData()?.hierarchy);scrollTopVisible=_(()=>this.state.browser.scrollY()>100);disableAnimations=ee(!0);displayRuleHelpLink=_(()=>this.routeData()?.ruleHelp);displayConfigLink=_(()=>this.routeData()?.config);displayHistoryBackLink=_(()=>this.routeData()?.historyBack);constructor(){ge(()=>{this.disableAnimations.set(!this.state.config.animations());});}scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}go=this.state.router.go;static ɵfac=function(t){return new(t||o)();};static ɵcmp=we({type:o,selectors:[["app-root"]],decls:13,vars:9,consts:()=>{let e;e="Gehe zur TravelPacklist";let t;t="Zur Regelformat Hilfe";let r;r="Zur\xFCck";let n;n="Gehe zu Konfiguration";let s;s="Nach oben scrollen";let l;return l="TravelPacklist",[l,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["iconHelp","","iconClass","h-6 w-6","type","button","role","link","aria-label",t,1,"link","pr-2"],["iconArrowBack","","iconClass","h-6 w-6","type","button","role","link","aria-label",r,1,"link","pr-2"],["iconCog","","iconClass","h-6 w-6","type","button","role","link","aria-label",n,1,"link","pr-2"],[1,"flex","grow","flex-col","pb-[3.5rem]",3,"inert"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],["iconArrowUpward","","iconClass","h-6 w-6","type","button","aria-label",s,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"],[3,"overlayVisible"],["iconHelp","","iconClass","h-6 w-6","type","button","role","link","aria-label",t,1,"link","pr-2",3,"click"],["iconArrowBack","","iconClass","h-6 w-6","type","button","role","link","aria-label",r,1,"link","pr-2",3,"click"],["iconCog","","iconClass","h-6 w-6","type","button","role","link","aria-label",n,1,"link","pr-2",3,"click"]];},template:function(t,r){t&1&&(f(0,"nav",1)(1,"button",2),oe(2,"img",3),f(3,"h1",4),Ee(4,0),g()(),be(5,st,1,0,"button",5)(6,at,1,0,"button",6)(7,lt,1,0,"button",7),g(),f(8,"div",8),oe(9,"router-outlet"),f(10,"div",9)(11,"button",10),v("click",function(){return r.scrollTop();}),g()()(),f(12,"app-dialog",11),v("overlayVisible",function(s){return r.overlayVisible.set(s);}),g()),t&2&&(re("inert",r.overlayVisible()),E(5),H(r.displayRuleHelpLink()?5:-1),E(),H(r.displayHistoryBackLink()?6:-1),E(),H(r.displayConfigLink()?7:-1),E(),re("@routeTransition",r.hierarchy())("@.disabled",r.disableAnimations())("inert",r.overlayVisible()),E(2),Ae("hidden",!r.scrollTopVisible()));},dependencies:[De,Me,Ne,Fe,We,je,Ue,Ve],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],data:{animation:[ct]},changeDetection:0});}return o;})();var pt="@",dt=(()=>{class o{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=a(A);loadingSchedulerFn=a(ut,{optional:!0});_engine;constructor(e,t,r,n,s){this.doc=e,this.delegate=t,this.zone=r,this.animationType=n,this.moduleImpl=s;}ngOnDestroy(){this._engine?.flush();}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-6fb5e60f.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new ue(5300,!1);}).then(({ɵcreateEngine:r,ɵAnimationRendererFactory:n})=>{this._engine=r(this.animationType,this.doc);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s;});}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.ɵtype===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let n=new ae(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let l=s.createRenderer(e,t);n.use(l),this.scheduler??=this.injector.get(me,null,{optional:!0}),this.scheduler?.notify(10);}).catch(s=>{n.use(r);}),n;}begin(){this.delegate.begin?.();}end(){this.delegate.end?.();}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve();}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e);}static ɵfac=function(t){ye();};static ɵprov=u({token:o,factory:o.ɵfac});}return o;})(),ae=class{delegate;replay=[];ɵtype=1;constructor(i){this.delegate=i;}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null;}}get data(){return this.delegate.data;}destroy(){this.replay=null,this.delegate.destroy();}createElement(i,e){return this.delegate.createElement(i,e);}createComment(i){return this.delegate.createComment(i);}createText(i){return this.delegate.createText(i);}get destroyNode(){return this.delegate.destroyNode;}appendChild(i,e){this.delegate.appendChild(i,e);}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r);}removeChild(i,e,t){this.delegate.removeChild(i,e,t);}selectRootElement(i,e){return this.delegate.selectRootElement(i,e);}parentNode(i){return this.delegate.parentNode(i);}nextSibling(i){return this.delegate.nextSibling(i);}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r);}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t);}addClass(i,e){this.delegate.addClass(i,e);}removeClass(i,e){this.delegate.removeClass(i,e);}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r);}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t);}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t);}setValue(i,e){this.delegate.setValue(i,e);}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(n=>n.listen(i,e,t,r)),this.delegate.listen(i,e,t,r);}shouldReplay(i){return this.replay!==null&&i.startsWith(pt);}},ut=new U("");function Ke(o="animations"){return fe("NgAsyncAnimations"),$([{provide:_e,useFactory:(i,e,t)=>new dt(i,e,t,o),deps:[Y,ve,W]},{provide:he,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}]);}var N="Service workers are disabled or not supported by this browser",P=class{serviceWorker;worker;registration;events;constructor(i,e){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=new D(t=>t.error(new Error(N)));else{let t=null,r=new V();this.worker=new D(y=>(t!==null&&y.next(t),r.subscribe(L=>y.next(L))));let n=()=>{let{controller:y}=i;y!==null&&(t=y,r.next(t));};i.addEventListener("controllerchange",n),n(),this.registration=this.worker.pipe(m(()=>i.getRegistration()));let s=new V();this.events=s.asObservable();let l=y=>{let{data:L}=y;L?.type&&s.next(L);};i.addEventListener("message",l),e?.get(te,null,{optional:!0})?.onDestroy(()=>{i.removeEventListener("controllerchange",n),i.removeEventListener("message",l);});}}postMessage(i,e){return new Promise(t=>{this.worker.pipe(b(1)).subscribe(r=>{r.postMessage(pe({action:i},e)),t();});});}postMessageWithOperation(i,e,t){let r=this.waitForOperationCompleted(t),n=this.postMessage(i,e);return Promise.all([n,r]).then(([,s])=>s);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(i){let e;return typeof i=="string"?e=t=>t.type===i:e=t=>i.includes(t.type),this.events.pipe(p(e));}nextEventOfType(i){return this.eventsOfType(i).pipe(b(1));}waitForOperationCompleted(i){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(p(r=>r.nonce===i),b(1),h(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error);})).subscribe({next:e,error:t});});}get isEnabled(){return!!this.serviceWorker;}},mt=(()=>{class o{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new V();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=w,this.notificationClicks=w,this.subscription=w;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(h(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(h(r=>r.data)),this.pushManager=this.sw.registration.pipe(h(r=>r.pushManager));let t=this.pushManager.pipe(m(r=>r.getSubscription()));this.subscription=new D(r=>{let n=t.subscribe(r),s=this.subscriptionChanges.subscribe(r);return()=>{n.unsubscribe(),s.unsubscribe();};});}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(N));let t={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),n=new Uint8Array(new ArrayBuffer(r.length));for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);return t.applicationServerKey=n,new Promise((s,l)=>{this.pushManager.pipe(m(d=>d.subscribe(t)),b(1)).subscribe({next:d=>{this.subscriptionChanges.next(d),s(d);},error:l});});}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(N));let e=t=>{if(t===null)throw new Error("Not subscribed to push notifications.");return t.unsubscribe().then(r=>{if(!r)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return new Promise((t,r)=>{this.subscription.pipe(b(1),m(e)).subscribe({next:t,error:r});});}decodeBase64(e){return atob(e);}static ɵfac=function(t){return new(t||o)(J(P));};static ɵprov=u({token:o,factory:o.ɵfac});}return o;})(),le=(()=>{class o{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=w,this.unrecoverable=w;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(N));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(N));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(t){return new(t||o)(J(P));};static ɵprov=u({token:o,factory:o.ɵfac});}return o;})();var Ze=new U("");function ht(){let o=a(O);if(!("serviceWorker"in navigator&&o.enabled!==!1))return;let i=a(Ze),e=a(W),t=a(te);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,n=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",n),t.onDestroy(()=>{r.removeEventListener("controllerchange",n);});}),e.runOutsideAngular(()=>{let r,{registrationStrategy:n}=o;if(typeof n=="function")r=new Promise(s=>n().subscribe(()=>s()));else{let[s,...l]=(n||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=Ye(+l[0]||0);break;case"registerWhenStable":r=Promise.race([t.whenStable(),Ye(+l[0])]);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${o.registrationStrategy}`);}}r.then(()=>navigator.serviceWorker.register(i,{scope:o.scope}).catch(s=>console.error("Service worker registration failed with:",s)));});}function Ye(o){return new Promise(i=>setTimeout(i,o));}function ft(o,i){return new P(o.enabled!==!1?navigator.serviceWorker:void 0,i);}var O=class{enabled;scope;registrationStrategy;};function qe(o,i={}){return $([mt,le,{provide:Ze,useValue:o},{provide:O,useValue:i},{provide:P,useFactory:ft,deps:[O,A]},C(ht)]);}var Qe=!1,Je=async()=>{let o=a(c).rules.raw.value(),i=_(()=>o?.includes("#"));if(!Qe&&i()){let e=await S("Die aktuellen Regeln enthalten Kommentare. Wenn du sie mit dem grafischen Editor bearbeitest, werden diese Kommentare verworfen. M\xF6chtest du fortfahren?");return e&&(Qe=!0),e;}return!0;};var ce=()=>{if(a(c).rules.hasError()){let i=a(Z),e=i.getCurrentNavigation()?.finalUrl;return i.navigate(["/rules-error"],{browserUrl:e});}else return!0;};var gt=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-2e151da0.js").then(o=>o.PacklistComponent),canActivate:[ce],data:{hierarchy:0,config:!0}},{path:"config",loadComponent:()=>import("./chunk-64f10da9.js").then(o=>o.ConfigComponent),data:{hierarchy:1}},{path:"rules",loadComponent:()=>import("./chunk-57fac316.js").then(o=>o.RulesComponent),canActivate:[ce,Je],data:{hierarchy:2,config:!0}},{path:"rules-raw",loadComponent:()=>import("./chunk-0abb0e97.js").then(o=>o.EditRulesRawComponent),data:{hierarchy:2,config:!0,ruleHelp:!0}},{path:"rules-error",loadComponent:()=>import("./chunk-171436e1.js").then(o=>o.RulesErrorComponent),data:{hierarchy:2,config:!0}},{path:"documentation/:topic",loadComponent:()=>import("./chunk-b4114d7d.js").then(o=>o.DocumentationComponent),data:{hierarchy:3,historyBack:!0}},{path:"**",redirectTo:"/packlist"}],et=()=>Oe(gt,Le(),xe());var tt=(()=>{class o{state=a(c);document=a(Y);init(){T(()=>{this.applyTheme(this.state.config.theme());}),T(()=>{this.applyLanguage(this.state.config.preferredLanguage());}),T(()=>{this.applyFontSize(this.state.config.fontSize());}),T(()=>{this.applyAccessibilityClass(this.state.config.accessibility());}),T(()=>{this.applyAnimationClass(this.state.config.animations());});}applyTheme(e){let t=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&t||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(K()){console.warn("Language switching is disabled in dev mode");return;}let t=window.location.href,r=window.location.hash,n=`index${e==="en"?"":`.${e}`}.html`,l=t.substring(0,t.indexOf(r))+n+window.location.hash;setTimeout(()=>{window.location.href=l;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}applyAnimationClass(e){document.documentElement.classList.toggle("animations",e);}static ɵfac=function(t){return new(t||o)();};static ɵprov=u({token:o,factory:o.ɵfac,providedIn:"root"});}return o;})();var rt=(()=>{class o{swUpdate=a(le);status=a(c).serviceWorker.status;init(){de(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(j(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let t=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,t.reason);}}),p(e=>e.type==="VERSION_READY"),m(()=>S("Eine neue Version der App ist verf\xFCgbar. M\xF6chtest du neu laden?")),p(x)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?F(6e4).pipe(m(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(t){return new(t||o)();};static ɵprov=u({token:o,factory:o.ɵfac,providedIn:"root"});}return o;})();var _t=q("Filesystem",{web:()=>import("./chunk-5bb3dd9b.js").then(o=>new o.FilesystemWeb())});var yt=q("Share",{web:()=>import("./chunk-c4f18971.js").then(o=>new o.ShareWeb())});var Q=class extends I{async webShareRules(){if(this.state.rules.raw.hasValue()){let i=this.state.rules.raw.value(),e=this.exportFileName();await navigator.share({title:e,files:[new File([i],e,{type:"text/plain"})]});}}downloadRules(){if(this.state.rules.raw.hasValue()){let i=this.state.rules.raw.value(),e=new Blob([i],{type:"text/plain"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=this.exportFileName(),r.click();}}async exportRules(){this.state.browser.isMobile()&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var it=(()=>{class o{state=a(c);exportNeeded=this.state.rules.exportNeeded;reminderActive=this.state.config.exportReminder;lastAskedHash=[];init(){F(3e4).pipe(p(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),h(()=>this.state.rules.hash()),p(e=>!this.lastAskedHash.includes(e)),j(e=>{this.lastAskedHash.push(e);}),m(()=>S("Die aktuellen Regeln wurden seit einiger Zeit nicht mehr exportiert. M\xF6chtest du sie jetzt exportieren?")),p(x)).subscribe(()=>{this.state.router.go("config#export");});}exportOverdue(){let e=this.state.export.lastDate();return new Date().getTime()-(e??0)>ot(10);}enoughTimeSinceLastEditPassed(){let e=this.state.rules.lastAction();return new Date().getTime()-e>ot(2);}static ɵfac=function(t){return new(t||o)();};static ɵprov=u({token:o,factory:o.ɵfac,providedIn:"root"});}return o;})();function ot(o){return o*60*1e3;}function wt(o){return{isTrackWeight:()=>o.get(c).config.trackWeight()};}var nt={providers:[Ce(),et(),qe("ngsw-worker.js",{enabled:!K()&&!0,registrationStrategy:"registerImmediately"}),Ke(),C(()=>{a(tt).init();}),C(()=>{a(rt).init();}),C(()=>{a(it).init();}),{deps:[A],provide:$e,useFactory:wt},{provide:I,useClass:Q},He(),Ge(),{provide:Be,useValue:"cors"}]};Te(Xe,nt).catch(o=>{console.error(o);});/**i18n:e347161579cdf7823cf79475d305275cd962b26b6c63283454da043ebf1dcaa5*/