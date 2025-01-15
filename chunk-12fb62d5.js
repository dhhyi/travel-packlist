import{Ca as G,Da as L,Ea as Y,Fa as S,Fc as H,Gc as re,Ha as P,Hc as oe,Ic as f,La as M,Ma as g,Na as E,Oa as q,Oc as se,Pa as K,Qa as W,Ra as X,Sa as J,Sc as ie,Ta as Q,Ua as ee,Uc as k,Va as m,Wc as ae,Y as v,Za as T,_ as u,ba as _,cb as te,da as c,ia as z,xa as w,ya as N,yc as ne}from"./chunk-6d94f052.js";import{a as I,b as Z}from"./chunk-cb4c040a.js";var j=class extends oe{supportsDOMEvents=!0},U=class r extends j{static makeCurrent(){re(new r)}onAndCancel(n,e,t){return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=ge();return e==null?null:Ee(e)}resetBaseElement(){D=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return se(document.cookie,n)}},D=null;function ge(){return D=D||document.querySelector("base"),D?D.getAttribute("href"):null}function Ee(r){return new URL(r,document.baseURI).pathname}var we=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||r)};static \u0275prov=u({token:r,factory:r.\u0275fac})}return r})(),B=new _(""),pe=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,o){return this._findPluginFor(t).addEventListener(e,t,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(s=>s.supports(e)),!t)throw new v(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||r)(c(B),c(w))};static \u0275prov=u({token:r,factory:r.\u0275fac})}return r})(),A=class{_doc;constructor(n){this._doc=n}manager},b="ng-app-id";function ce(r){for(let n of r)n.remove()}function le(r,n){let e=n.createElement("style");return e.textContent=r,e}function Se(r,n,e,t){let o=r.head?.querySelectorAll(`style[${b}="${n}"],link[${b}="${n}"]`);if(o)for(let s of o)s.removeAttribute(b),s instanceof HTMLLinkElement?t.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function F(r,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",r),e}var he=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,t,o,s={}){this.doc=e,this.appId=t,this.nonce=o,this.isServer=k(s),Se(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let o of e)this.addUsage(o,this.inline,le);t?.forEach(o=>this.addUsage(o,this.external,F))}removeStyles(e,t){for(let o of e)this.removeUsage(o,this.inline);t?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,t,o){let s=t.get(e);s?s.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,o(e,this.doc)))})}removeUsage(e,t){let o=t.get(e);o&&(o.usage--,o.usage<=0&&(ce(o.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ce(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:o}]of this.inline)o.push(this.addElement(e,le(t,this.doc)));for(let[t,{elements:o}]of this.external)o.push(this.addElement(e,F(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),this.isServer&&t.setAttribute(b,this.appId),e.appendChild(t)}static \u0275fac=function(t){return new(t||r)(c(f),c(L),c(P,8),c(S))};static \u0275prov=u({token:r,factory:r.\u0275fac})}return r})(),x={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},V=/%COMP%/g,me="%COMP%",Me=`_nghost-${me}`,Te=`_ngcontent-${me}`,De=!0,Ce=new _("",{providedIn:"root",factory:()=>De});function Re(r){return Te.replace(V,r)}function be(r){return Me.replace(V,r)}function ye(r,n){return n.map(e=>e.replace(V,r))}var de=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,t,o,s,i,a,l,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=i,this.platformId=a,this.ngZone=l,this.nonce=d,this.platformIsServer=k(a),this.defaultRenderer=new C(e,i,l,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===M.ShadowDom&&(t=Z(I({},t),{encapsulation:M.Emulated}));let o=this.getOrCreateRenderer(e,t);return o instanceof O?o.applyToHost(e):o instanceof R&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,s=o.get(t.id);if(!s){let i=this.doc,a=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(t.encapsulation){case M.Emulated:s=new O(l,d,t,this.appId,p,i,a,h);break;case M.ShadowDom:return new $(l,d,e,t,i,a,this.nonce,h);default:s=new R(l,d,t,p,i,a,h);break}o.set(t.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||r)(c(pe),c(he),c(L),c(Ce),c(f),c(S),c(w),c(P))};static \u0275prov=u({token:r,factory:r.\u0275fac})}return r})(),C=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,o){this.eventManager=n,this.doc=e,this.ngZone=t,this.platformIsServer=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(x[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(ue(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(ue(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new v(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,o){if(o){e=o+":"+e;let s=x[o];s?n.setAttributeNS(s,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let o=x[t];o?n.removeAttributeNS(o,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,o){o&(T.DashCase|T.Important)?n.style.setProperty(e,t,o&T.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&T.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t){if(typeof n=="string"&&(n=H().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${e}`);return this.eventManager.addEventListener(n,e,this.decoratePreventDefault(t))}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))===!1&&e.preventDefault()}}};function ue(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var $=class extends C{sharedStylesHost;hostEl;shadowRoot;constructor(n,e,t,o,s,i,a,l){super(n,s,i,l),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=ye(o.id,o.styles);for(let h of d){let y=document.createElement("style");a&&y.setAttribute("nonce",a),y.textContent=h,this.shadowRoot.appendChild(y)}let p=o.getExternalStyles?.();if(p)for(let h of p){let y=F(h,s);a&&y.setAttribute("nonce",a),this.shadowRoot.appendChild(y)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},R=class extends C{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,o,s,i,a,l){super(n,s,i,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o,this.styles=l?ye(l,t.styles):t.styles,this.styleUrls=t.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},O=class extends R{contentAttr;hostAttr;constructor(n,e,t,o,s,i,a,l){let d=o+"-"+t.id;super(n,e,t,s,i,a,l,d),this.contentAttr=Re(d),this.hostAttr=be(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}},Ae=(()=>{class r extends A{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o){return e.addEventListener(t,o,!1),()=>this.removeEventListener(e,t,o)}removeEventListener(e,t,o){return e.removeEventListener(t,o)}static \u0275fac=function(t){return new(t||r)(c(f))};static \u0275prov=u({token:r,factory:r.\u0275fac})}return r})(),fe=["alt","control","meta","shift"],Oe={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ie={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},_e=(()=>{class r extends A{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,t,o){let s=r.parseEventName(t),i=r.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>H().onAndCancel(e,s.domEventName,i))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let s=r._normalizeKey(t.pop()),i="",a=t.indexOf("code");if(a>-1&&(t.splice(a,1),i="code."),fe.forEach(d=>{let p=t.indexOf(d);p>-1&&(t.splice(p,1),i+=d+".")}),i+=s,t.length!=0||s.length===0)return null;let l={};return l.domEventName=o,l.fullKey=i,l}static matchEventFullKeyCode(e,t){let o=Oe[e.key]||e.key,s="";return t.indexOf("code.")>-1&&(o=e.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),fe.forEach(i=>{if(i!==o){let a=Ie[i];a(e)&&(s+=i+".")}}),s+=o,s===t)}static eventCallback(e,t,o){return s=>{r.matchEventFullKeyCode(s,e)&&o.runGuarded(()=>t(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||r)(c(f))};static \u0275prov=u({token:r,factory:r.\u0275fac})}return r})();function gt(r,n){return ne(I({rootComponent:r},Ne(n)))}function Ne(r){return{appProviders:[...xe,...r?.providers??[]],platformProviders:ke}}function Le(){U.makeCurrent()}function Pe(){return new N}function He(){return G(document),document}var ke=[{provide:S,useValue:ie},{provide:Y,useValue:Le,multi:!0},{provide:f,useFactory:He,deps:[]}];var xe=[{provide:z,useValue:"root"},{provide:N,useFactory:Pe,deps:[]},{provide:B,useClass:Ae,multi:!0,deps:[f,w,S]},{provide:B,useClass:_e,multi:!0,deps:[f]},de,he,pe,{provide:te,useExisting:de},{provide:ae,useClass:we,deps:[]},[]];var Et=(()=>{class r{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||r)(c(f))};static \u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var je=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275prov=u({token:r,factory:function(t){let o=null;return t?o=new(t||r):o=c(Ue),o},providedIn:"root"})}return r})(),Ue=(()=>{class r extends je{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case m.NONE:return t;case m.HTML:return E(t,"HTML")?g(t):ee(this._doc,String(t)).toString();case m.STYLE:return E(t,"Style")?g(t):t;case m.SCRIPT:if(E(t,"Script"))return g(t);throw new v(5200,!1);case m.URL:return E(t,"URL")?g(t):Q(String(t));case m.RESOURCE_URL:if(E(t,"ResourceURL"))return g(t);throw new v(5201,!1);default:throw new v(5202,!1)}}bypassSecurityTrustHtml(e){return q(e)}bypassSecurityTrustStyle(e){return K(e)}bypassSecurityTrustScript(e){return W(e)}bypassSecurityTrustUrl(e){return X(e)}bypassSecurityTrustResourceUrl(e){return J(e)}static \u0275fac=function(t){return new(t||r)(c(f))};static \u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();export{de as a,gt as b,Et as c,je as d};
/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/
