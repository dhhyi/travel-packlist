import{i as le}from"./chunk-10593693.js";import{a as F,o as de}from"./chunk-00c434d9.js";import{a as A}from"./chunk-938952c0.js";import{Ab as y,Ba as O,Bb as E,Cc as D,E as $,Eb as X,Fb as Y,Gb as u,Hb as l,Ib as h,J as I,Jb as Z,K as N,Kb as P,Oc as se,P as Q,Pc as ce,Rb as f,S as U,Sb as c,V as W,X as j,Yb as ee,Z as w,Za as r,_b as te,ac as x,b as C,bb as G,bc as T,cc as ne,ea as z,hb as J,hc as ie,ic as oe,j as k,jc as H,kb as _,kc as S,la as d,m as B,ma as p,mb as K,mc as V,oc as re,pb as M,pc as ae,q as b,r as q,wb as m,xb as g,ya as a,z as R}from"./chunk-7dca9674.js";var me=(i,s)=>({"bg-slate-300":i,"dark:bg-slate-700":s});function ge(i,s){if(i&1){let e=P();u(0,"legend",4),f("click",function(t){d(e);let o=c(2);return p(o.toggleHelp(t))})("keypress",function(t){d(e);let o=c(2);return p(o.toggleHelp(t))}),x(1),l()}if(i&2){let e=c(2);r(),ne(" ",e.help()," ")}}function ue(i,s){if(i&1){let e=P();u(0,"button",2),f("click",function(t){d(e);let o=c();return p(o.toggleHelp(t))}),l(),M(1,ge,2,1,"legend",3)}if(i&2){let e=c();r(),E(e.helpVisible()?1:-1)}}var Ce=(()=>{class i{id=a.required();label=a.required();help=a();model=O(void 0);onChange=C;onTouched=C;helpVisible=O(!1);constructor(){D(()=>{this.onChange(this.model()),this.onTouched()})}toggleHelp(e){e.stopPropagation(),this.helpVisible.update(n=>!n)}toggle(){this.model.update(e=>!e)}writeValue(e){this.model.set(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_({type:i,selectors:[["cmp-checkbox"]],hostAttrs:["role","checkbox","tabindex","0"],hostVars:2,hostBindings:function(n,t){n&1&&f("click",function(){return t.toggle()})("keypress",function(){return t.toggle()}),n&2&&m("aria-checked",t.model())("aria-label",t.label()+(t.help()?". ("+t.help()+")":""))},inputs:{id:[1,"id"],label:[1,"label"],help:[1,"help"]},features:[S([{provide:F,useExisting:w(()=>i),multi:!0}])],decls:4,vars:9,consts:[["tabindex","-1",1,"my-2","h-6","min-h-6","w-6","min-w-6","appearance-none","rounded-sm","border-4","border-slate-300","dark:border-slate-700",3,"id"],[1,"grow",3,"htmlFor"],["iconHelp","","iconClass","h-6 w-6","type","button","tabindex","-1","aria-hidden","true",1,"link",3,"click"],["role","contentinfo",1,"help"],["role","contentinfo",1,"help",3,"click","keypress"]],template:function(n,t){n&1&&(h(0,"div",0),u(1,"label",1),x(2),l(),M(3,ue,2,1)),n&2&&(y(V(6,me,t.model(),t.model())),g("id",t.id()),r(),g("htmlFor",t.id()),r(),T(t.label()),r(),E(t.help()?3:-1))},dependencies:[de,le],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:.5rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{height:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{min-height:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{width:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{min-width:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{border-width:6px}.animations[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .animations   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}"],changeDetection:0})}return i})();var _e=i=>i*(2-i),he=(()=>{class i{value=a(0);max=a.required();animationDuration=a(0);currentCount$=q([A(this.value).pipe(U(this.value()),Q())]).pipe(j(A(this.animationDuration)),$(([[[e,n]],t])=>{if(t<=0)return B(n);let o=k.now();return R(0,k).pipe(b(()=>k.now()-o),b(v=>v/t),W(v=>v<=1),b(_e),b(v=>e+v*(n-e)),N(n),I())}));static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_({type:i,selectors:[["cmp-progress"]],hostAttrs:["role","progressbar"],hostVars:3,hostBindings:function(n,t){n&2&&m("aria-valuemin",0)("aria-valuemax",t.max())("aria-valuenow",t.value())},inputs:{value:[1,"value"],max:[1,"max"],animationDuration:[1,"animationDuration"]},decls:2,vars:4,consts:[["aria-hidden","true",1,"w-full",3,"value","max"]],template:function(n,t){n&1&&(h(0,"progress",0),re(1,"async")),n&2&&g("value",ae(1,2,t.currentCount$))("max",t.max())},dependencies:[ce],styles:["progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:2px solid #ccc;border-radius:5px;background-color:transparent}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#999;border-radius:3px}"],changeDetection:0})}return i})();var fe=(i,s)=>s.value(),ve=(i,s)=>({"bg-slate-300":i,"dark:bg-slate-700":s});function be(i,s){i&1&&Z(0)}function Oe(i,s){if(i&1){let e=P();ie(0),u(1,"div",2),f("click",function(){d(e);let t=H(0),o=c();return p(o.model.set(t))})("keypress",function(){d(e);let t=H(0),o=c();return p(o.model.set(t))}),h(2,"div",3),M(3,be,1,0,"ng-container",4),l()}if(i&2){let e=s.$implicit,n=c(),t=oe(e.value());r(),m("aria-checked",n.model()===t),r(),y(V(5,ve,n.model()===t,n.model()===t)),r(),g("ngTemplateOutlet",n.template(t))}}var L=(()=>{class i{value=a.required();template=z(G);static \u0275fac=function(n){return new(n||i)};static \u0275dir=K({type:i,selectors:[["ng-template","value",""]],inputs:{value:[1,"value"]}})}return i})(),Me=(()=>{class i{label=a.required();model=O(void 0);children=J(L);onChanged=C;onTouched=C;constructor(){D(()=>{this.onChanged(this.model()),this.onTouched()})}template(e){let n=this.children().find(t=>t.value()===e);if(!n)throw new Error(`No template found for option: ${e}`);return n.template}writeValue(e){this.model.set(e)}registerOnChange(e){this.onChanged=e}registerOnTouched(e){this.onTouched=e}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_({type:i,selectors:[["cmp-select-options"]],contentQueries:function(n,t,o){n&1&&ee(o,t.children,L,4),n&2&&te()},inputs:{label:[1,"label"]},features:[S([{provide:F,useExisting:w(()=>i),multi:!0}])],decls:5,vars:2,consts:[["role","radiogroup",1,"flex","flex-wrap","justify-evenly","gap-2","gap-y-4","pb-4"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap",3,"click","keypress"],[1,"mr-2","h-6","min-h-6","w-6","min-w-6","rounded-full","border-4","border-slate-300","dark:border-slate-700"],[4,"ngTemplateOutlet"]],template:function(n,t){n&1&&(u(0,"fieldset",0)(1,"legend"),x(2),l(),X(3,Oe,4,8,"div",1,fe),l()),n&2&&(m("aria-label",t.label()),r(2),T(t.label()),r(),Y(t.children()))},dependencies:[se],styles:[".accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-height:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}.animations[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .animations   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}"],changeDetection:0})}return i})();export{Ce as a,he as b,L as c,Me as d};
/**i18n:bd8df5c6a39626a064361984cc0fbef23b35207f4b5a13f0bb17a8c6638801b7*/
