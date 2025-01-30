import{i as ce}from"./chunk-0a0ed178.js";import{a as F,o as de}from"./chunk-29c892b0.js";import{a as A}from"./chunk-6426fb16.js";import{Ab as P,Ba as x,Bb as E,Cc as D,E as $,Eb as X,Fb as Y,Gb as g,Hb as c,Ib as h,J as I,Jb as Z,K as N,Kb as w,Oc as le,P as Q,Pc as se,Rb as f,S as U,Sb as s,V as W,X as j,Yb as ee,Z as M,Za as r,_b as te,ac as O,b as _,bb as G,bc as T,cc as ne,ea as z,hb as J,hc as ie,ic as oe,j as y,jc as H,kb as C,kc as S,la as d,m as B,ma as p,mb as K,mc as V,oc as re,pb as k,pc as ae,q as v,r as q,wb as m,xb as u,ya as a,z as R}from"./chunk-d8ae0c91.js";var me=(i,l)=>({"bg-slate-300":i,"dark:bg-slate-700":l});function ue(i,l){if(i&1){let e=w();g(0,"legend",5),f("click",function(t){d(e);let o=s(2);return p(o.toggleHelp(t))})("keypress",function(t){d(e);let o=s(2);return p(o.toggleHelp(t))}),O(1),c()}if(i&2){let e=s(2);r(),ne(" ",e.help()," ")}}function ge(i,l){if(i&1){let e=w();g(0,"button",2),f("click",function(t){d(e);let o=s();return p(o.toggleHelp(t))}),h(1,"app-icon-help",3),c(),k(2,ue,2,1,"legend",4)}if(i&2){let e=s();r(2),E(e.helpVisible()?2:-1)}}var he=(()=>{class i{id=a.required();label=a.required();help=a();model=x(void 0);onChange=_;onTouched=_;helpVisible=x(!1);constructor(){D(()=>{this.onChange(this.model()),this.onTouched()})}toggleHelp(e){e.stopPropagation(),this.helpVisible.update(n=>!n)}toggle(){this.model.update(e=>!e)}writeValue(e){this.model.set(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["cmp-checkbox"]],hostAttrs:["role","checkbox","tabindex","0"],hostVars:2,hostBindings:function(n,t){n&1&&f("click",function(){return t.toggle()})("keypress",function(){return t.toggle()}),n&2&&m("aria-checked",t.model())("aria-label",t.label()+(t.help()?". ("+t.help()+")":""))},inputs:{id:[1,"id"],label:[1,"label"],help:[1,"help"]},features:[S([{provide:F,useExisting:M(()=>i),multi:!0}])],decls:4,vars:9,consts:[["tabindex","-1",1,"my-2","h-6","min-h-6","w-6","min-w-6","appearance-none","rounded-sm","border-4","border-slate-300","dark:border-slate-700",3,"id"],[1,"grow",3,"htmlFor"],["type","button","tabindex","-1","aria-hidden","true",1,"link",3,"click"],[1,"h-6","w-6"],["role","contentinfo",1,"help"],["role","contentinfo",1,"help",3,"click","keypress"]],template:function(n,t){n&1&&(h(0,"div",0),g(1,"label",1),O(2),c(),k(3,ge,3,1)),n&2&&(P(V(6,me,t.model(),t.model())),u("id",t.id()),r(),u("htmlFor",t.id()),r(),T(t.label()),r(),E(t.help()?3:-1))},dependencies:[de,ce],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:.5rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}.animations[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .animations   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}"],changeDetection:0})}return i})();var _e=i=>i*(2-i),Ce=(()=>{class i{value=a(0);max=a.required();animationDuration=a(0);currentCount$=q([A(this.value).pipe(U(this.value()),Q())]).pipe(j(A(this.animationDuration)),$(([[[e,n]],t])=>{if(t<=0)return B(n);let o=y.now();return R(0,y).pipe(v(()=>y.now()-o),v(b=>b/t),W(b=>b<=1),v(_e),v(b=>e+b*(n-e)),N(n),I())}));static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["cmp-progress"]],hostAttrs:["role","progressbar"],hostVars:3,hostBindings:function(n,t){n&2&&m("aria-valuemin",0)("aria-valuemax",t.max())("aria-valuenow",t.value())},inputs:{value:[1,"value"],max:[1,"max"],animationDuration:[1,"animationDuration"]},decls:2,vars:4,consts:[["aria-hidden","true",1,"w-full",3,"value","max"]],template:function(n,t){n&1&&(h(0,"progress",0),re(1,"async")),n&2&&u("value",ae(1,2,t.currentCount$))("max",t.max())},dependencies:[se],styles:["progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:2px solid #ccc;border-radius:5px;background-color:transparent}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#999;border-radius:3px}"],changeDetection:0})}return i})();var fe=(i,l)=>l.value(),be=(i,l)=>({"bg-slate-300":i,"dark:bg-slate-700":l});function ve(i,l){i&1&&Z(0)}function xe(i,l){if(i&1){let e=w();ie(0),g(1,"div",2),f("click",function(){d(e);let t=H(0),o=s();return p(o.model.set(t))})("keypress",function(){d(e);let t=H(0),o=s();return p(o.model.set(t))}),h(2,"div",3),k(3,ve,1,0,"ng-container",4),c()}if(i&2){let e=l.$implicit,n=s(),t=oe(e.value());r(),m("aria-checked",n.model()===t),r(),P(V(5,be,n.model()===t,n.model()===t)),r(),u("ngTemplateOutlet",n.template(t))}}var L=(()=>{class i{value=a.required();template=z(G);static \u0275fac=function(n){return new(n||i)};static \u0275dir=K({type:i,selectors:[["ng-template","value",""]],inputs:{value:[1,"value"]}})}return i})(),ke=(()=>{class i{label=a.required();model=x(void 0);children=J(L);onChanged=_;onTouched=_;constructor(){D(()=>{this.onChanged(this.model()),this.onTouched()})}template(e){let n=this.children().find(t=>t.value()===e);if(!n)throw new Error(`No template found for option: ${e}`);return n.template}writeValue(e){this.model.set(e)}registerOnChange(e){this.onChanged=e}registerOnTouched(e){this.onTouched=e}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["cmp-select-options"]],contentQueries:function(n,t,o){n&1&&ee(o,t.children,L,4),n&2&&te()},inputs:{label:[1,"label"]},features:[S([{provide:F,useExisting:M(()=>i),multi:!0}])],decls:5,vars:2,consts:[["role","radiogroup",1,"flex","flex-wrap","justify-evenly","gap-2","gap-y-4","pb-4"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap",3,"click","keypress"],[1,"mr-2","h-6","min-h-6","w-6","min-w-6","rounded-full","border-4","border-slate-300","dark:border-slate-700"],[4,"ngTemplateOutlet"]],template:function(n,t){n&1&&(g(0,"fieldset",0)(1,"legend"),O(2),c(),X(3,xe,4,8,"div",1,fe),c()),n&2&&(m("aria-label",t.label()),r(2),T(t.label()),r(),Y(t.children()))},dependencies:[le],styles:[".accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}.animations[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .animations   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}"],changeDetection:0})}return i})();export{he as a,Ce as b,L as c,ke as d};
/**i18n:eee3d47a017a9f4fe983a06f27e0a9c7b95602fff3951636f2d8c55069b18d30*/
