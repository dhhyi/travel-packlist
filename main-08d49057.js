import"./chunk-a31d3819.js";import{c as Le,d as ne,e as xe,g as R,j as se,k as De,m as ae,n as I}from"./chunk-d2ea4036.js";import{a as N}from"./chunk-991af646.js";import{a as Ze,b as v}from"./chunk-74b17d9f.js";import{l as ze,q as He,u as Xe}from"./chunk-60d0d70d.js";import{A as Ye,B as p,b as Fe,c as Ve,d as Ue,e as W,f as je,g as $e,h as Ge,i as We,j as Be,x as Ke}from"./chunk-f73229ac.js";import{a as B}from"./chunk-9a4e4e1d.js";import{b as qe}from"./chunk-7f3a4fac.js";import{a as Oe,b as ke}from"./chunk-36148c1c.js";import{$a as Ce,A as T,Aa as Ee,B as w,Ba as J,Bb as te,C as c,Ga as Ae,Gb as h,Gc as G,H as f,Hb as g,I as ye,Ib as re,Ja as ve,Kb as oe,Nb as Ne,Q as _e,Rb as P,Sb as ie,T as m,W as b,Y as we,Za as S,_ as u,ba as F,c as L,cb as Te,da as Y,ea as a,fa as V,g as me,kb as Se,l as he,la as Z,m as x,ma as q,n as fe,pb as Pe,q as d,qa as E,qc as Me,sa as be,sb as Re,sc as $,tb as j,u as ge,v as X,va as U,vb as Q,wc as y,x as K,xb as ee,yb as Ie,z as D,zc as A}from"./chunk-2af3151b.js";import{a as ue}from"./chunk-c9702c22.js";function ut(t,o){if(t&1){let e=oe();h(0,"button",11),P("click",function(){Z(e);let i=ie();return q(i.go("documentation"));}),g();}}function mt(t,o){if(t&1){let e=oe();h(0,"button",12),P("click",function(){Z(e);let i=ie();return q(i.go("config"));}),g();}}var Je=De([I(":enter, :leave",R({position:"fixed",width:`${(Math.min(window.innerWidth,600)-18).toFixed(0)}px`}),{optional:!0}),I(":enter",R({opacity:0,transform:"{{ from }}"}),{optional:!0}),xe([I(":leave",[ne("{{ duration }}",R({opacity:0,transform:"{{ to }}"}))],{optional:!0}),I(":enter",[ne("{{ duration }}",R({opacity:1,transform:"translateX(0) translateY(0) scale(1)"}))],{optional:!0})])],{params:{duration:"0.3s ease-in-out"}}),ht=Le("routeTransition",[se(":decrement",[ae(Je,{params:{from:"translateX(-100%) scale(1)",to:"translateX(100%) scale(0.9)"}})]),se(":increment",[ae(Je,{params:{from:"translateX(100%) scale(1)",to:"translateX(-100%) scale(0.9)"}})])]),Qe=(()=>{class t{state=a(p);overlayVisible=J(!1);router=a(W);routeData=Fe(this.router.events.pipe(c(e=>e instanceof Ve),d(()=>this.router.routerState.root.snapshot.firstChild?.data)));hierarchy=y(()=>this.routeData()?.hierarchy);scrollTopVisible=y(()=>this.state.browser.scrollY()>100);disableAnimations=J(!0);displayRuleHelpLink=y(()=>this.routeData()?.ruleHelp);displayConfigLink=y(()=>this.routeData()?.config);constructor(){ve(()=>{this.disableAnimations.set(!this.state.config.animations());});}scrollTop(){window.scrollTo({top:0,behavior:"smooth"});}go=this.state.router.go;static ɵfac=function(r){return new(r||t)();};static ɵcmp=Se({type:t,selectors:[["app-root"]],decls:12,vars:8,consts:()=>{let e;e="Go to TravelPacklist";let r;r="Go to rules format help";let i;i="Go to configuration";let s;s="Scroll to top";let n;return n="TravelPacklist",[n,["role","navigation",1,"flex","h-[3rem]","min-h-[3rem]","flex-row","items-center","pb-2",3,"inert"],["type","button","aria-label",e,"role","banner","routerLink","/",1,"link","grow","justify-start","pl-0"],["aria-hidden","true","src","icon.svg",1,"h-8"],[1,"text-xl","font-bold"],["iconHelp","","iconClass","h-6 w-6","type","button","role","link","aria-label",r,1,"link","pr-2"],["iconCog","","iconClass","h-6 w-6","type","button","role","link","aria-label",i,1,"link","pr-2"],[1,"flex","grow","flex-col","pb-[3.5rem]",3,"inert"],[1,"fixed","bottom-2","left-1/2","-translate-x-1/2"],["iconArrowUpward","","iconClass","h-6 w-6","type","button","aria-label",s,1,"flex","w-full","items-center","justify-center","rounded-3xl","border","border-slate-700","shadow-xl","dark:border-slate-300",3,"click"],[3,"overlayVisible"],["iconHelp","","iconClass","h-6 w-6","type","button","role","link","aria-label",r,1,"link","pr-2",3,"click"],["iconCog","","iconClass","h-6 w-6","type","button","role","link","aria-label",i,1,"link","pr-2",3,"click"]];},template:function(r,i){r&1&&(h(0,"nav",1)(1,"button",2),re(2,"img",3),h(3,"h1",4),Ne(4,0),g()(),Pe(5,ut,1,0,"button",5)(6,mt,1,0,"button",6),g(),h(7,"div",7),re(8,"router-outlet"),h(9,"div",8)(10,"button",9),P("click",function(){return i.scrollTop();}),g()()(),h(11,"app-dialog",10),P("overlayVisible",function(n){return i.overlayVisible.set(n);}),g()),r&2&&(ee("inert",i.overlayVisible()),S(5),te(i.displayRuleHelpLink()?5:-1),S(),te(i.displayConfigLink()?6:-1),S(),ee("@routeTransition",i.hierarchy())("@.disabled",i.disableAnimations())("inert",i.overlayVisible()),S(2),Ie("hidden",!i.scrollTopVisible()));},dependencies:[Be,Ue,je,He,Ze,Xe,ze],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"],data:{animation:[ht]},changeDetection:0});}return t;})();var ft="@",gt=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=a(E);loadingSchedulerFn=a(yt,{optional:!0});_engine;constructor(e,r,i,s,n){this.doc=e,this.delegate=r,this.zone=i,this.animationType=s,this.moduleImpl=n;}ngOnDestroy(){this._engine?.flush();}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-11bd6d2e.js").then(i=>i),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(i=>{throw new we(5300,!1);}).then(({ɵcreateEngine:i,ɵAnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let n=new s(this.delegate,this._engine,this.zone);return this.delegate=n,n;});}createRenderer(e,r){let i=this.delegate.createRenderer(e,r);if(i.ɵtype===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new le(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(n=>{let l=n.createRenderer(e,r);s.use(l),this.scheduler??=this.injector.get(be,null,{optional:!0}),this.scheduler?.notify(11);}).catch(n=>{s.use(i);}),s;}begin(){this.delegate.begin?.();}end(){this.delegate.end?.();}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve();}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e);}static ɵfac=function(r){Ce();};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})(),le=class{delegate;replay=[];ɵtype=1;constructor(o){this.delegate=o;}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null;}}get data(){return this.delegate.data;}destroy(){this.replay=null,this.delegate.destroy();}createElement(o,e){return this.delegate.createElement(o,e);}createComment(o){return this.delegate.createComment(o);}createText(o){return this.delegate.createText(o);}get destroyNode(){return this.delegate.destroyNode;}appendChild(o,e){this.delegate.appendChild(o,e);}insertBefore(o,e,r,i){this.delegate.insertBefore(o,e,r,i);}removeChild(o,e,r){this.delegate.removeChild(o,e,r);}selectRootElement(o,e){return this.delegate.selectRootElement(o,e);}parentNode(o){return this.delegate.parentNode(o);}nextSibling(o){return this.delegate.nextSibling(o);}setAttribute(o,e,r,i){this.delegate.setAttribute(o,e,r,i);}removeAttribute(o,e,r){this.delegate.removeAttribute(o,e,r);}addClass(o,e){this.delegate.addClass(o,e);}removeClass(o,e){this.delegate.removeClass(o,e);}setStyle(o,e,r,i){this.delegate.setStyle(o,e,r,i);}removeStyle(o,e,r){this.delegate.removeStyle(o,e,r);}setProperty(o,e,r){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(o,e,r)),this.delegate.setProperty(o,e,r);}setValue(o,e){this.delegate.setValue(o,e);}listen(o,e,r,i){return this.shouldReplay(e)&&this.replay.push(s=>s.listen(o,e,r,i)),this.delegate.listen(o,e,r,i);}shouldReplay(o){return this.replay!==null&&o.startsWith(ft);}},yt=new F("");function et(t="animations"){return Ee("NgAsyncAnimations"),V([{provide:Te,useFactory:(o,e,r)=>new gt(o,e,r,t),deps:[G,Oe,U]},{provide:Ae,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}]);}var k="Service workers are disabled or not supported by this browser";function _t(t){return X(()=>fe(new Error(t)));}var C=class{serviceWorker;worker;registration;events;constructor(o){if(this.serviceWorker=o,!o)this.worker=this.events=this.registration=_t(k);else{let r=K(o,"controllerchange").pipe(d(()=>o.controller)),i=X(()=>x(o.controller)),s=ge(i,r);this.worker=s.pipe(c(_=>!!_)),this.registration=this.worker.pipe(m(()=>o.getRegistration()));let de=K(o,"message").pipe(d(_=>_.data)).pipe(c(_=>_&&_.type)).pipe(_e());de.connect(),this.events=de;}}postMessage(o,e){return this.worker.pipe(f(1),b(r=>{r.postMessage(ue({action:o},e));})).toPromise().then(()=>{});}postMessageWithOperation(o,e,r){let i=this.waitForOperationCompleted(r),s=this.postMessage(o,e);return Promise.all([s,i]).then(([,n])=>n);}generateNonce(){return Math.round(Math.random()*1e7);}eventsOfType(o){let e;return typeof o=="string"?e=r=>r.type===o:e=r=>o.includes(r.type),this.events.pipe(c(e));}nextEventOfType(o){return this.eventsOfType(o).pipe(f(1));}waitForOperationCompleted(o){return this.eventsOfType("OPERATION_COMPLETED").pipe(c(e=>e.nonce===o),f(1),d(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error);})).toPromise();}get isEnabled(){return!!this.serviceWorker;}},wt=(()=>{class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled;}pushManager=null;subscriptionChanges=new me();constructor(e){if(this.sw=e,!e.isEnabled){this.messages=w,this.notificationClicks=w,this.subscription=w;return;}this.messages=this.sw.eventsOfType("PUSH").pipe(d(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(d(i=>i.data)),this.pushManager=this.sw.registration.pipe(d(i=>i.pushManager));let r=this.pushManager.pipe(m(i=>i.getSubscription()));this.subscription=T(r,this.subscriptionChanges);}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(k));let r={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(i.length));for(let n=0;n<i.length;n++)s[n]=i.charCodeAt(n);return r.applicationServerKey=s,this.pushManager.pipe(m(n=>n.subscribe(r)),f(1)).toPromise().then(n=>(this.subscriptionChanges.next(n),n));}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(k));let e=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null);});};return this.subscription.pipe(f(1),m(e)).toPromise();}decodeBase64(e){return atob(e);}static ɵfac=function(r){return new(r||t)(Y(C));};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})(),ce=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled;}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=w,this.unrecoverable=w;return;}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE");}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(k));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e);}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(k));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e);}static ɵfac=function(r){return new(r||t)(Y(C));};static ɵprov=u({token:t,factory:t.ɵfac});}return t;})();var tt=new F("");function bt(t,o,e){return()=>{if(!("serviceWorker"in navigator&&e.enabled!==!1))return;let r=t.get(U),i=t.get(Q);r.runOutsideAngular(()=>{let n=navigator.serviceWorker,l=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",l),i.onDestroy(()=>{n.removeEventListener("controllerchange",l);});});let s;if(typeof e.registrationStrategy=="function")s=e.registrationStrategy();else{let[n,...l]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(n){case"registerImmediately":s=x(null);break;case"registerWithDelay":s=rt(+l[0]||0);break;case"registerWhenStable":let H=he(t.get(Q).whenStable());s=l[0]?T(H,rt(+l[0])):H;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`);}}r.runOutsideAngular(()=>s.pipe(f(1)).subscribe(()=>navigator.serviceWorker.register(o,{scope:e.scope}).catch(n=>console.error("Service worker registration failed with:",n))));};}function rt(t){return x(null).pipe(ye(t));}function Et(t){return new C(t.enabled!==!1?navigator.serviceWorker:void 0);}var O=class{enabled;scope;registrationStrategy;};function ot(t,o={}){return V([wt,ce,{provide:tt,useValue:t},{provide:O,useValue:o},{provide:C,useFactory:Et,deps:[O]},{provide:Re,useFactory:bt,deps:[E,tt,O],multi:!0}]);}var it=!1,nt=async()=>{let t=a(p).rules.raw(),o=y(()=>t.includes("#"));if(!it&&o()){let e=await v("The current rules contain comments. Editing them with the graphical editor will discard these comments. Do you want to proceed?");return e&&(it=!0),e;}return!0;};var pe=()=>{let t=a(p),o=a(W),e=t.rules.parserError();if(e){let r=o.getCurrentNavigation()?.finalUrl;return o.navigate(["/rules-error"],{queryParams:{error:e},browserUrl:r});}else return!0;};var st=[{path:"",redirectTo:"/packlist",pathMatch:"full"},{path:"packlist",loadComponent:()=>import("./chunk-e9cfc09f.js").then(t=>t.PacklistComponent),canActivate:[pe],data:{hierarchy:0,config:!0}},{path:"config",loadComponent:()=>import("./chunk-e843cc29.js").then(t=>t.ConfigComponent),data:{hierarchy:1}},{path:"rules",loadComponent:()=>import("./chunk-fc533696.js").then(t=>t.RulesComponent),canActivate:[pe,nt],data:{hierarchy:2,config:!0}},{path:"rules-raw",loadComponent:()=>import("./chunk-beb9247e.js").then(t=>t.EditRulesRawComponent),data:{hierarchy:2,config:!0,ruleHelp:!0}},{path:"rules-error",loadComponent:()=>import("./chunk-857833e3.js").then(t=>t.RulesErrorComponent),data:{hierarchy:2,config:!0}},{path:"documentation",loadComponent:()=>import("./chunk-5734defb.js").then(t=>t.DocumentationComponent),data:{hierarchy:2,config:!0}},{path:"**",redirectTo:"/packlist"}];var at=(()=>{class t{state=a(p);document=a(G);init(){A(()=>{this.applyTheme(this.state.config.theme());}),A(()=>{this.applyLanguage(this.state.config.preferredLanguage());}),A(()=>{this.applyFontSize(this.state.config.fontSize());}),A(()=>{this.applyAccessibilityClass(this.state.config.accessibility());}),A(()=>{this.applyAnimationClass(this.state.config.animations());});}applyTheme(e){let r=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="system"&&r||e==="dark"?this.document.documentElement.classList.add("dark"):this.document.documentElement.classList.remove("dark");}applyLanguage(e){if(e&&this.document.documentElement.lang!==e){if($()){console.warn("Language switching is disabled in dev mode");return;}let r=window.location.href,i=window.location.hash,s=`index${e==="en"?"":`.${e}`}.html`,l=r.substring(0,r.indexOf(i))+s+window.location.hash;setTimeout(()=>{window.location.href=l;},0);}}applyFontSize(e){document.documentElement.style.setProperty("--html-font-size",e==="small"?"16px":e==="normal"?"18px":"20px");}applyAccessibilityClass(e){document.documentElement.classList.remove("accessible","compact"),document.documentElement.classList.add(e);}applyAnimationClass(e){document.documentElement.classList.toggle("animations",e);}static ɵfac=function(r){return new(r||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var lt=(()=>{class t{swUpdate=a(ce);status=a(p).serviceWorker.status;init(){T(this.swUpdate.versionUpdates,this.swUpdate.unrecoverable).pipe(b(e=>{if(e.type==="VERSION_INSTALLATION_FAILED")this.status.set("error"),console.error(`Version installation failed
`,e.error);else if(e.type==="NO_NEW_VERSION_DETECTED")this.status.set("ok");else if(e.type==="VERSION_READY"||e.type==="VERSION_DETECTED")this.status.set("update-available");else{let r=e;this.status.set("unrecoverable"),console.error(`Unrecoverable state
`,r.reason);}}),c(e=>e.type==="VERSION_READY"),m(()=>v("A new version of the app is available. Do you want to reload?")),c(L)).subscribe(()=>{window.location.reload();}),this.swUpdate.isEnabled?D(6e4).pipe(m(()=>this.swUpdate.checkForUpdate())).subscribe(e=>{e&&console.log("Update available");}):(this.status.set("disabled"),console.warn("Service worker updates are disabled/unavailable"));}static ɵfac=function(r){return new(r||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var At=B("Filesystem",{web:()=>import("./chunk-fc58b489.js").then(t=>new t.FilesystemWeb())});var vt=B("Share",{web:()=>import("./chunk-14318a53.js").then(t=>new t.ShareWeb())});var z=class extends N{async webShareRules(){let o=this.state.rules.raw();if(!o){console.error("No rules available");return;}let e=this.exportFileName();await navigator.share({title:e,files:[new File([o],e,{type:"text/plain"})]});}downloadRules(){let o=this.state.rules.raw();if(!o){console.error("No rules available");return;}let e=new Blob([o],{type:"text/plain"}),r=URL.createObjectURL(e),i=document.createElement("a");i.href=r,i.download=this.exportFileName(),i.click();}async exportRules(){this.state.browser.isMobile()&&"share"in navigator?await this.webShareRules():this.downloadRules();}};var pt=(()=>{class t{state=a(p);exportNeeded=this.state.rules.exportNeeded;reminderActive=this.state.config.exportReminder;lastAskedHash=[];init(){D(3e4).pipe(c(()=>this.reminderActive()&&this.exportNeeded()&&this.exportOverdue()&&this.enoughTimeSinceLastEditPassed()),d(()=>this.state.rules.hash()),c(e=>!this.lastAskedHash.includes(e)),b(e=>{this.lastAskedHash.push(e);}),m(()=>v("The current rules haven't been exported for some time now. Do you want to export them now?")),c(L)).subscribe(()=>{this.state.router.go("config#export");});}exportOverdue(){let e=this.state.export.lastDate();return new Date().getTime()-e>ct(10);}enoughTimeSinceLastEditPassed(){let e=this.state.rules.lastAction();return new Date().getTime()-e>ct(2);}static ɵfac=function(r){return new(r||t)();};static ɵprov=u({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function ct(t){return t*60*1e3;}function Ct(t){return{isTrackWeight:()=>t.get(p).config.trackWeight()};}var dt={providers:[Me(),$e(st,Ge(),We()),ot("ngsw-worker.js",{enabled:!$()&&!0,registrationStrategy:"registerImmediately"}),et(),j(()=>{a(at).init();}),j(()=>{a(lt).init();}),j(()=>{a(pt).init();}),{deps:[E],provide:Ke,useFactory:Ct},{provide:N,useClass:z},qe(),Ye()]};ke(Qe,dt).catch(t=>{console.error(t);});/**i18n:5c6e9d302c5c908d93147fcd8fd769fa3ef826986a9cebf3e6646880d4eee918*/