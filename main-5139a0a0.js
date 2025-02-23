import"./chunk-4327e78b.js";import{c as Le,d as ie,e as xe,g as I,j as se,k as De,m as ae,n as N}from"./chunk-8a9a02b3.js";import{a as k}from"./chunk-f2e03ef8.js";import{a as Qe,b as S}from"./chunk-fd242edf.js";import{l as He,q as Xe,u as ze,x as Ke}from"./chunk-cd1e44c0.js";import{n as Ye,q as Ze,r as qe,s as p}from"./chunk-3b243499.js";import{a as Z}from"./chunk-74ff73aa.js";import{a as Je}from"./chunk-6118c1a5.js";import{a as Me,b as Oe,e as Fe,f as Ve,h as Ue,i as Y,j as $e,k as je,l as Ge,m as Be,n as We}from"./chunk-eb86e6a0.js";import{A as R,Aa as Ee,Ab as W,B as w,Ba as te,C as c,Fb as f,Fc as K,Ga as be,Gb as g,H as y,Hb as ne,I as _e,Ja as Ce,Jb as H,Mb as Ne,Q as ye,Qb as T,Rb as X,T as m,W as E,Y as Ae,Za as C,_ as u,ab as Te,ba as V,c as x,da as ee,db as ve,ea as a,fa as U,g as me,kb as Se,l as he,la as $,m as D,ma as j,n as fe,ob as Pe,pc as ke,q as d,qa as b,rb as Re,rc as z,sa as we,sb as B,u as ge,ub as re,v as Q,va as G,vc as _,wb as oe,x as J,xb as Ie,yc as v,z as F}from"./chunk-da5c6bf3.js";import{a as ue}from"./chunk-ad6d2de6.js";function ht(t,o){if(t&1){let e=H();f(0,"button",12),T("click",function(){$(e);let n=X();return j(n.go("rules-documentation"));}),g();}}function ft(t,o){if(t&1){let e=H();f(0,"button",13),T("click",function(){$(e);let n=X();return j(n.go("back"));}),g();}}function gt(t,o){if(t&1){let e=H();f(0,"button",14),T("click",function(){$(e);let n=X();return j(n.go("config"));}),g();}}var et=De([N(":enter, :leave",I({position:"fixed",width:`${(Math.min(window.innerWidth,600)-18).toFixed(0)}px`}),{optional:!0}),N(":enter",I({opacity:0,transform:"{{ from }}"}),{optional:!0}),xe([N(":leave",[ie("{{ duration }}",I({opacity:0,transform:"{{ to }}"}))],{optional:!0}),N(":enter",[ie("{{ duration }}",I({opacity:1,transform:"translateX(0) translateY(0) scale(1)"}))],{optional:!0})])],{params:{duration:"0.3s ease-in-out"}}),_t=Le("routeTransition",[se(":decrement",[ae(et,{params:{from:"translateX(-100%) scale(1)",to:"translateX(100%) scale(0.9)"}})]),se(":increment",[ae(et,{params:{from:"translateX(100%) scale(1)",to:"translateX(-100%) scale(0.9)"}})])]),tt=(()=>{class t{state=a(p);overlayVisible=te(!1);router=a(Y);routeData=Fe(this.router.events.pipe(c(e=>e instanceof Ve),d(()=>this.router.routerState.root.snapshot.firstChild?.data)));hierarchy=_(()=>this.routeData()?.hierarchy);scrollTopVisible=_(()=>this.state.browser.scrollY()>100);disableAnimations=te(!0);displayRuleHelpLink=_(()=>this.routeData()?.ruleHelp);displayConfigLink=_(()=>this.routeData()?.config);displayHistoryBackLink=_(()=>this.routeData()?.historyBack);constructor(){Ce(()=>{this.disableAnimations.set(!this.state.config.animations());});}scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}go=this.state.router.go;static ɵfac=function(r){return new(r||t)();};static ɵcmp=Se({type:t,selectors:[["app-root"]],decls:13,vars:9,consts:()=>{let e;e="Go to TravelPacklist";let r;r="Go to rules format help";let n;n="Go back";let s;s="Go to configuration";let i;i="Scroll to top";let l;return l="TravelPacklist",[l,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["iconHelp","","iconClass","h-6 w-6","type","button","role","link","aria-label",r,1,"link","pr-2"],["iconArrowBack","","iconClass","h-6 w-6","type","button","role","link","aria-label",n,1,"link","pr-2"],["iconCog","","iconClass","h-6 w-6","type","button","role","link","aria-label",s,1,"link","pr-2"],[1,"flex","grow","flex-col","pb-[3.5rem]",3,"inert"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],["iconArrowUpward","","iconClass","h-6 w-6","type","button","aria-label",i,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"],[3,"overlayVisible"],["iconHelp","","iconClass","h-6 w-6","type","button","role","link","aria-label",r,1,"link","pr-2",3,"click"],["iconArrowBack","","iconClass","h-6 w-6","type","button","role","link","aria-label",n,1,"link","pr-2",3,"click"],["iconCog","","iconClass","h-6 w-6","type","button","role","link","aria-label",s,1,"link","pr-2",3,"click"]];},template:function(r,n){r&1&&(f(0,"nav",1)(1,"button",2),ne(2,"img",3),f(3,"h1",4),Ne(4,0),g()(),Pe(5,ht,1,0,"button",5)(6,ft,1,0,"button",6)(7,gt,1,0,"button",7),g(),f(8,"div",8),ne(9,"router-outlet"),f(10,"div",9)(11,"button",10),T("click",function(){return n.scrollTop();}),g()()(),f(12,"app-dialog",11),T("overlayVisible",function(i){return n.overlayVisible.set(i);}),g()),r&2&&(oe("inert",n.overlayVisible()),C(5),W(n.displayRuleHelpLink()?5:-1),C(),W(n.displayHistoryBackLink()?6:-1),C(),W(n.displayConfigLink()?7:-1),C(),oe("@routeTransition",n.hierarchy())("@.disabled",n.disableAnimations())("inert",n.overlayVisible()),C(2),Ie("hidden",!n.scrollTopVisible()));},dependencies:[We,Ue,$e,Xe,Qe,ze,Ke,He],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],data:{animation:[_t]},changeDetection:0});}return t;})();var yt="@",At=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=a(b);loadingSchedulerFn=a(wt,{optional:!0});_engine;constructor(e,r,n,s,i){this.doc=e,this.delegate=r,this.zone=n,this.animationType=s,this.moduleImpl=i;}ngOnDestroy(){this._engine?.flush();}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-47168cb5.js").then(n=>n),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(n=>{throw new Ae(5300,!1);}).then(({ɵcreateEngine:n,ɵAnimationRendererFactory:s})=>{this._engine=n(this.animationType,this.doc);let i=new s(this.delegate,this._engine,this.zone);return this.delegate=i,i;});}createRenderer(e,r){let n=this.delegate.createRenderer(e,r);if(n.ɵtype===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new le(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(i=>{let l=i.createRenderer(e,r);s.use(l),this.scheduler??=this.injector.get(we,null,{optional:!0}),this.scheduler?.notify(11);}).catch(i=>{s.use(n);}),s;}begin(){this.delegate.begin?.();}end(){this.delegate.end?.();}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve();}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e);}static ɵfac=function(r){ve();};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})(),le=class{delegate;replay=[];ɵtype=1;constructor(o){this.delegate=o;}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null;}}get data(){return this.delegate.data;}destroy(){this.replay=null,this.delegate.destroy();}createElement(o,e){return this.delegate.createElement(o,e);}createComment(o){return this.delegate.createComment(o);}createText(o){return this.delegate.createText(o);}get destroyNode(){return this.delegate.destroyNode;}appendChild(o,e){this.delegate.appendChild(o,e);}insertBefore(o,e,r,n){this.delegate.insertBefore(o,e,r,n);}removeChild(o,e,r){this.delegate.removeChild(o,e,r);}selectRootElement(o,e){return this.delegate.selectRootElement(o,e);}parentNode(o){return this.delegate.parentNode(o);}nextSibling(o){return this.delegate.nextSibling(o);}setAttribute(o,e,r,n){this.delegate.setAttribute(o,e,r,n);}removeAttribute(o,e,r){this.delegate.removeAttribute(o,e,r);}addClass(o,e){this.delegate.addClass(o,e);}removeClass(o,e){this.delegate.removeClass(o,e);}setStyle(o,e,r,n){this.delegate.setStyle(o,e,r,n);}removeStyle(o,e,r){this.delegate.removeStyle(o,e,r);}setProperty(o,e,r){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(o,e,r)),this.delegate.setProperty(o,e,r);}setValue(o,e){this.delegate.setValue(o,e);}listen(o,e,r,n){return this.shouldReplay(e)&&this.replay.push(s=>s.listen(o,e,r,n)),this.delegate.listen(o,e,r,n);}shouldReplay(o){return this.replay!==null&&o.startsWith(yt);}},wt=new V("");function rt(t="animations"){return Ee("NgAsyncAnimations"),U([{provide:Te,useFactory:(o,e,r)=>new At(o,e,r,t),deps:[K,Me,G]},{provide:be,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}]);}var L="Service workers are disabled or not supported by this browser";function Et(t){return Q(()=>fe(new Error(t)));}var P=class{serviceWorker;worker;registration;events;constructor(o){if(this.serviceWorker=o,!o)this.worker=this.events=this.registration=Et(L);else{let r=J(o,"controllerchange").pipe(d(()=>o.controller)),n=Q(()=>D(o.controller)),s=ge(n,r);this.worker=s.pipe(c(A=>!!A)),this.registration=this.worker.pipe(m(()=>o.getRegistration()));let de=J(o,"message").pipe(d(A=>A.data)).pipe(c(A=>A&&A.type)).pipe(ye());de.connect(),this.events=de;}}postMessage(o,e){return this.worker.pipe(y(1),E(r=>{r.postMessage(ue({action:o},e));})).toPromise().then(()=>{});}postMessageWithOperation(o,e,r){let n=this.waitForOperationCompleted(r),s=this.postMessage(o,e);return Promise.all([s,n]).then(([,i])=>i);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(o){let e;return typeof o=="string"?e=r=>r.type===o:e=r=>o.includes(r.type),this.events.pipe(c(e));}nextEventOfType(o){return this.eventsOfType(o).pipe(y(1));}waitForOperationCompleted(o){return this.eventsOfType("OPERATION_COMPLETED").pipe(c(e=>e.nonce===o),y(1),d(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},bt=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new me();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=w,this.notificationClicks=w,this.subscription=w;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(d(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(d(n=>n.data)),this.pushManager=this.sw.registration.pipe(d(n=>n.pushManager));let r=this.pushManager.pipe(m(n=>n.getSubscription()));this.subscription=R(r,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(L));let r={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(n.length));for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return r.applicationServerKey=s,this.pushManager.pipe(m(i=>i.subscribe(r)),y(1)).toPromise().then(i=>(this.subscriptionChanges.next(i),i));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(L));let e=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(n=>{if(!n)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(y(1),m(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(r){return new(r||t)(ee(P));};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})(),ce=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=w,this.unrecoverable=w;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(L));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(L));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(r){return new(r||t)(ee(P));};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})();var ot=new V("");function Ct(t,o,e){return()=>{if(!("serviceWorker"in navigator&&e.enabled!==!1))return;let r=t.get(G),n=t.get(re);r.runOutsideAngular(()=>{let i=navigator.serviceWorker,l=()=>i.controller?.postMessage({action:"INITIALIZE"});i.addEventListener("controllerchange",l),n.onDestroy(()=>{i.removeEventListener("controllerchange",l);});});let s;if(typeof e.registrationStrategy=="function")s=e.registrationStrategy();else{let[i,...l]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(i){case"registerImmediately":s=D(null);break;case"registerWithDelay":s=nt(+l[0]||0);break;case"registerWhenStable":let h=he(t.get(re).whenStable());s=l[0]?R(h,nt(+l[0])):h;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}r.runOutsideAngular(()=>s.pipe(y(1)).subscribe(()=>navigator.serviceWorker.register(o,{scope:e.scope}).catch(i=>console.error("Service worker registration failed with:",i))));};}function nt(t){return D(null).pipe(_e(t));}function Tt(t){return new P(t.enabled!==!1?navigator.serviceWorker:void 0);}var O=class{enabled;scope;registrationStrategy;};function it(t,o={}){return U([bt,ce,{provide:ot,useValue:t},{provide:O,useValue:o},{provide:P,useFactory:Tt,deps:[O]},{provide:Re,useFactory:Ct,deps:[b,ot,O],multi:!0}]);}var st=!1,at=async()=>{let t=a(p).rules.raw(),o=_(()=>t.includes("#"));if(!st&&o()){let e=await S("The current rules contain comments. Editing them with the graphical editor will discard these comments. Do you want to proceed?");return e&&(st=!0),e;}return!0;};var pe=()=>{let t=a(p),o=a(Y),e=t.rules.parserError();if(e){let r=o.getCurrentNavigation()?.finalUrl;return o.navigate(["/rules-error"],{queryParams:{error:e},browserUrl:r});}else return!0;};var lt=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-e0b7ddf0.js").then(t=>t.PacklistComponent),canActivate:[pe],data:{hierarchy:0,config:!0}},{path:"config",loadComponent:()=>import("./chunk-a383fc07.js").then(t=>t.ConfigComponent),data:{hierarchy:1}},{path:"rules",loadComponent:()=>import("./chunk-73ab9c80.js").then(t=>t.RulesComponent),canActivate:[pe,at],data:{hierarchy:2,config:!0}},{path:"rules-raw",loadComponent:()=>import("./chunk-5c30dbee.js").then(t=>t.EditRulesRawComponent),data:{hierarchy:2,config:!0,ruleHelp:!0}},{path:"rules-error",loadComponent:()=>import("./chunk-2e26ae71.js").then(t=>t.RulesErrorComponent),data:{hierarchy:2,config:!0}},{path:"documentation/:topic",loadComponent:()=>import("./chunk-34431619.js").then(t=>t.DocumentationComponent),data:{hierarchy:3,historyBack:!0}},{path:"**",redirectTo:"/packlist"}];var ct=(()=>{class t{state=a(p);document=a(K);init(){v(()=>{this.applyTheme(this.state.config.theme());}),v(()=>{this.applyLanguage(this.state.config.preferredLanguage());}),v(()=>{this.applyFontSize(this.state.config.fontSize());}),v(()=>{this.applyAccessibilityClass(this.state.config.accessibility());}),v(()=>{this.applyAnimationClass(this.state.config.animations());});}applyTheme(e){let r=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&r||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if(z()){console.warn("Language switching is disabled in dev mode");return;}let r=window.location.href,n=window.location.hash,s=`index${e==="en"?"":`.${e}`}.html`,l=r.substring(0,r.indexOf(n))+s+window.location.hash;setTimeout(()=>{window.location.href=l;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}applyAnimationClass(e){document.documentElement.classList.toggle("animations",e);}static ɵfac=function(r){return new(r||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var pt=(()=>{class t{swUpdate=a(ce);status=a(p).serviceWorker.status;init(){R(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(E(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let r=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,r.reason);}}),c(e=>e.type==="VERSION_READY"),m(()=>S("A new version of the app is available. Do you want to reload?")),c(x)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?F(6e4).pipe(m(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(r){return new(r||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var vt=Z("Filesystem",{web:()=>import("./chunk-1fe62964.js").then(t=>new t.FilesystemWeb())});var St=Z("Share",{web:()=>import("./chunk-8d22869a.js").then(t=>new t.ShareWeb())});var q=class extends k{async webShareRules(){let o=this.state.rules.raw();if(!o){console.error("No rules available");return;}let e=this.exportFileName();await navigator.share({title:e,files:[new File([o],e,{type:"text/plain"})]});}downloadRules(){let o=this.state.rules.raw();if(!o){console.error("No rules available");return;}let e=new Blob([o],{type:"text/plain"}),r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=this.exportFileName(),n.click();}async exportRules(){this.state.browser.isMobile()&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var ut=(()=>{class t{state=a(p);exportNeeded=this.state.rules.exportNeeded;reminderActive=this.state.config.exportReminder;lastAskedHash=[];init(){F(3e4).pipe(c(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),d(()=>this.state.rules.hash()),c(e=>!this.lastAskedHash.includes(e)),E(e=>{this.lastAskedHash.push(e);}),m(()=>S("The current rules haven't been exported for some time now. Do you want to export them now?")),c(x)).subscribe(()=>{this.state.router.go("config#export");});}exportOverdue(){let e=this.state.export.lastDate();return new Date().getTime()-e>dt(10);}enoughTimeSinceLastEditPassed(){let e=this.state.rules.lastAction();return new Date().getTime()-e>dt(2);}static ɵfac=function(r){return new(r||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function dt(t){return t*60*1e3;}function Pt(t){return{isTrackWeight:()=>t.get(p).config.trackWeight()};}var mt={providers:[ke(),je(lt,Ge(),Be()),it("ngsw-worker.js",{enabled:!z()&&!0,registrationStrategy:"registerImmediately"}),rt(),B(()=>{a(ct).init();}),B(()=>{a(pt).init();}),B(()=>{a(ut).init();}),{deps:[b],provide:Ye,useFactory:Pt},{provide:k,useClass:q},Je(),Ze(),{provide:qe,useValue:"cors"}]};Oe(tt,mt).catch(t=>{console.error(t);});/**i18n:3ea64412cb2fa7572222484f1122e69f6d5b2ce20c9a2c903c347eb498cd7f05*/