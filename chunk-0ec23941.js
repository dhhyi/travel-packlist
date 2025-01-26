import{Ca as Y,Da as P,Ea as K,Ec as H,Fa as w,Fc as se,Gc as ie,Ha as k,Hc as p,Ia as W,La as M,Ma as y,Na as E,Nc as ae,Oa as q,Pa as X,Qa as J,Ra as Q,Rc as ce,Sa as ee,Ta as te,Tc as j,Ua as ne,Va as h,Vc as le,Y as g,_ as f,ab as T,ba as L,cb as re,da as c,ga as G,va as S,wa as N,xc as oe}from"./chunk-d849c6ec.js";import{a as I,b as z}from"./chunk-a787c124.js";var U=class extends ie{supportsDOMEvents=!0},B=class r extends U{static makeCurrent(){se(new r)}onAndCancel(n,e,t,o){return n.addEventListener(e,t,o),()=>{n.removeEventListener(e,t,o)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=Se();return e==null?null:we(e)}resetBaseElement(){D=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return ae(document.cookie,n)}},D=null;function Se(){return D=D||document.querySelector("base"),D?D.getAttribute("href"):null}function we(r){return new URL(r,document.baseURI).pathname}var Me=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||r)};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})(),F=new L(""),me=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,o,s){return this._findPluginFor(t).addEventListener(e,t,o,s)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(s=>s.supports(e)),!t)throw new g(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||r)(c(F),c(S))};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})(),A=class{_doc;constructor(n){this._doc=n}manager},b="ng-app-id";function de(r){for(let n of r)n.remove()}function ue(r,n){let e=n.createElement("style");return e.textContent=r,e}function Te(r,n,e,t){let o=r.head?.querySelectorAll(`style[${b}="${n}"],link[${b}="${n}"]`);if(o)for(let s of o)s.removeAttribute(b),s instanceof HTMLLinkElement?t.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function V(r,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",r),e}var ve=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,t,o,s={}){this.doc=e,this.appId=t,this.nonce=o,this.isServer=j(s),Te(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let o of e)this.addUsage(o,this.inline,ue);t?.forEach(o=>this.addUsage(o,this.external,V))}removeStyles(e,t){for(let o of e)this.removeUsage(o,this.inline);t?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,t,o){let s=t.get(e);s?s.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,o(e,this.doc)))})}removeUsage(e,t){let o=t.get(e);o&&(o.usage--,o.usage<=0&&(de(o.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])de(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:o}]of this.inline)o.push(this.addElement(e,ue(t,this.doc)));for(let[t,{elements:o}]of this.external)o.push(this.addElement(e,V(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),this.isServer&&t.setAttribute(b,this.appId),e.appendChild(t)}static \u0275fac=function(t){return new(t||r)(c(p),c(P),c(k,8),c(w))};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})(),x={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Z=/%COMP%/g,ge="%COMP%",De=`_nghost-${ge}`,Ce=`_ngcontent-${ge}`,Re=!0,be=new L("",{providedIn:"root",factory:()=>Re});function Ae(r){return Ce.replace(Z,r)}function _e(r){return De.replace(Z,r)}function ye(r,n){return n.map(e=>e.replace(Z,r))}var fe=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,t,o,s,i,a,l,d=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=i,this.platformId=a,this.ngZone=l,this.nonce=d,this.tracingService=u,this.platformIsServer=j(a),this.defaultRenderer=new C(e,i,l,this.platformIsServer,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===M.ShadowDom&&(t=z(I({},t),{encapsulation:M.Emulated}));let o=this.getOrCreateRenderer(e,t);return o instanceof _?o.applyToHost(e):o instanceof R&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,s=o.get(t.id);if(!s){let i=this.doc,a=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,m=this.platformIsServer;switch(t.encapsulation){case M.Emulated:s=new _(l,d,t,this.appId,u,i,a,m,this.tracingService);break;case M.ShadowDom:return new $(l,d,e,t,i,a,this.nonce,m,this.tracingService);default:s=new R(l,d,t,u,i,a,m,this.tracingService);break}o.set(t.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||r)(c(me),c(ve),c(P),c(be),c(p),c(w),c(S),c(k),c(W,8))};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})(),C=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,o,s){this.eventManager=n,this.doc=e,this.ngZone=t,this.platformIsServer=o,this.tracingService=s}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(x[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(pe(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(pe(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new g(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,o){if(o){e=o+":"+e;let s=x[o];s?n.setAttributeNS(s,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let o=x[t];o?n.removeAttributeNS(o,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,o){o&(T.DashCase|T.Important)?n.style.setProperty(e,t,o&T.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&T.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,o){if(typeof n=="string"&&(n=H().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${e}`);let s=this.decoratePreventDefault(t);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(n,e,s)),this.eventManager.addEventListener(n,e,s,o)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))===!1&&e.preventDefault()}}};function pe(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var $=class extends C{sharedStylesHost;hostEl;shadowRoot;constructor(n,e,t,o,s,i,a,l,d){super(n,s,i,l,d),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=ye(o.id,o.styles);for(let O of u){let v=document.createElement("style");a&&v.setAttribute("nonce",a),v.textContent=O,this.shadowRoot.appendChild(v)}let m=o.getExternalStyles?.();if(m)for(let O of m){let v=V(O,s);a&&v.setAttribute("nonce",a),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},R=class extends C{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,o,s,i,a,l,d){super(n,s,i,a,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o,this.styles=d?ye(d,t.styles):t.styles,this.styleUrls=t.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},_=class extends R{contentAttr;hostAttr;constructor(n,e,t,o,s,i,a,l,d){let u=o+"-"+t.id;super(n,e,t,s,i,a,l,d,u),this.contentAttr=Ae(u),this.hostAttr=_e(u)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}},Oe=(()=>{class r extends A{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o,s){return e.addEventListener(t,o,s),()=>this.removeEventListener(e,t,o,s)}removeEventListener(e,t,o,s){return e.removeEventListener(t,o,s)}static \u0275fac=function(t){return new(t||r)(c(p))};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})(),he=["alt","control","meta","shift"],Ie={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Le={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},Ne=(()=>{class r extends A{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,t,o,s){let i=r.parseEventName(t),a=r.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>H().onAndCancel(e,i.domEventName,a,s))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let s=r._normalizeKey(t.pop()),i="",a=t.indexOf("code");if(a>-1&&(t.splice(a,1),i="code."),he.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),i+=d+".")}),i+=s,t.length!=0||s.length===0)return null;let l={};return l.domEventName=o,l.fullKey=i,l}static matchEventFullKeyCode(e,t){let o=Ie[e.key]||e.key,s="";return t.indexOf("code.")>-1&&(o=e.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),he.forEach(i=>{if(i!==o){let a=Le[i];a(e)&&(s+=i+".")}}),s+=o,s===t)}static eventCallback(e,t,o){return s=>{r.matchEventFullKeyCode(s,e)&&o.runGuarded(()=>t(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||r)(c(p))};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})();function St(r,n){return oe(I({rootComponent:r},Pe(n)))}function Pe(r){return{appProviders:[...Ue,...r?.providers??[]],platformProviders:xe}}function ke(){B.makeCurrent()}function He(){return new N}function je(){return Y(document),document}var xe=[{provide:w,useValue:ce},{provide:K,useValue:ke,multi:!0},{provide:p,useFactory:je,deps:[]}];var Ue=[{provide:G,useValue:"root"},{provide:N,useFactory:He,deps:[]},{provide:F,useClass:Oe,multi:!0,deps:[p,S,w]},{provide:F,useClass:Ne,multi:!0,deps:[p]},fe,ve,me,{provide:re,useExisting:fe},{provide:le,useClass:Me,deps:[]},[]];var wt=(()=>{class r{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||r)(c(p))};static \u0275prov=f({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Be=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275prov=f({token:r,factory:function(t){let o=null;return t?o=new(t||r):o=c(Fe),o},providedIn:"root"})}return r})(),Fe=(()=>{class r extends Be{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case h.NONE:return t;case h.HTML:return E(t,"HTML")?y(t):ne(this._doc,String(t)).toString();case h.STYLE:return E(t,"Style")?y(t):t;case h.SCRIPT:if(E(t,"Script"))return y(t);throw new g(5200,!1);case h.URL:return E(t,"URL")?y(t):te(String(t));case h.RESOURCE_URL:if(E(t,"ResourceURL"))return y(t);throw new g(5201,!1);default:throw new g(5202,!1)}}bypassSecurityTrustHtml(e){return q(e)}bypassSecurityTrustStyle(e){return X(e)}bypassSecurityTrustScript(e){return J(e)}bypassSecurityTrustUrl(e){return Q(e)}bypassSecurityTrustResourceUrl(e){return ee(e)}static \u0275fac=function(t){return new(t||r)(c(p))};static \u0275prov=f({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();export{fe as a,St as b,wt as c,Be as d};
/**i18n:20a69378bcb30b4ad603187e7bb8505c5b8b76ebdfce9873b2ffab296fc1dc45*/
