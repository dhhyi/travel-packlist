import{i as de}from"./chunk-9c4cfe63.js";import{a as F,o as me}from"./chunk-d2b0e2d3.js";import{a as A}from"./chunk-9298e721.js";import{$ as G,$b as ie,Aa as a,Bb as T,Cb as E,Dc as D,E as I,Fb as Z,Gb as ee,Hb as h,Ib as c,J as R,Jb as g,K as $,Kb as te,Lb as k,P as j,Pc as ce,Qc as pe,S as Q,Sb as _,Tb as s,V as U,X as W,Z as M,Zb as ne,_a as r,b as f,bb as J,bc as y,cc as S,dc as oe,ea as z,fb as x,ib as K,ic as re,j as O,jc as ae,kc as H,lb as C,lc as V,m as B,mb as X,na as p,nb as Y,nc as P,oa as d,pc as le,q as v,qb as w,qc as se,r as q,xb as m,yb as u,z as N}from"./chunk-fac6b1c2.js";var ge=(t,l)=>({"bg-slate-300":t,"dark:bg-slate-700":l});function fe(t,l){if(t&1){let e=k();h(0,"legend",5),_("click",function(i){p(e);let o=s(2);return d(o.toggleHelp(i))})("keypress",function(i){p(e);let o=s(2);return d(o.toggleHelp(i))}),y(1),c()}if(t&2){let e=s(2);r(),oe(" ",e.help()," ")}}function Ce(t,l){if(t&1){let e=k();h(0,"button",2),_("click",function(i){p(e);let o=s();return d(o.toggleHelp(i))}),g(1,"app-icon-help",3),c(),w(2,fe,2,1,"legend",4)}if(t&2){let e=s();r(2),E(e.helpVisible()?2:-1)}}var ue=(()=>{class t{id=a.required();label=a.required();help=a();model=x(void 0);onChange=f;onTouched=f;helpVisible=x(!1);constructor(){D(()=>{this.onChange(this.model()),this.onTouched()})}toggleHelp(e){e.stopPropagation(),this.helpVisible.update(n=>!n)}toggle(){this.model.update(e=>!e)}writeValue(e){this.model.set(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=C({type:t,selectors:[["cmp-checkbox"]],hostAttrs:["role","checkbox","tabindex","0"],hostVars:2,hostBindings:function(n,i){n&1&&_("click",function(){return i.toggle()})("keypress",function(){return i.toggle()}),n&2&&m("aria-checked",i.model())("aria-label",i.label()+(i.help()?". ("+i.help()+")":""))},inputs:{id:[1,"id"],label:[1,"label"],help:[1,"help"]},features:[V([{provide:F,useExisting:M(()=>t),multi:!0}])],decls:4,vars:9,consts:[["tabindex","-1",1,"my-2","h-6","min-h-6","w-6","min-w-6","appearance-none","rounded-sm","border-4","border-slate-300","dark:border-slate-700",3,"id"],[1,"grow",3,"htmlFor"],["type","button","tabindex","-1","aria-hidden","true",1,"link",3,"click"],[1,"h-6","w-6"],["role","contentinfo",1,"help"],["role","contentinfo",1,"help",3,"click","keypress"]],template:function(n,i){n&1&&(g(0,"div",0),h(1,"label",1),y(2),c(),w(3,Ce,3,1)),n&2&&(T(P(6,ge,i.model(),i.model())),u("id",i.id()),r(),u("htmlFor",i.id()),r(),S(i.label()),r(),E(i.help()?3:-1))},dependencies:[me,de],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:.5rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0})}return t})();var _e=t=>t*(2-t),Be=(()=>{class t{value=a(0);max=a.required();animationDuration=a(0);currentCount$=q([A(this.value).pipe(Q(this.value()),j())]).pipe(W(A(this.animationDuration)),I(([[[e,n]],i])=>{if(i<=0)return B(n);let o=O.now();return N(0,O).pipe(v(()=>O.now()-o),v(b=>b/i),U(b=>b<=1),v(_e),v(b=>e+b*(n-e)),$(n),R())}));static \u0275fac=function(n){return new(n||t)};static \u0275cmp=C({type:t,selectors:[["cmp-progress"]],hostAttrs:["role","progressbar"],hostVars:3,hostBindings:function(n,i){n&2&&m("aria-valuemin",0)("aria-valuemax",i.max())("aria-valuenow",i.value())},inputs:{value:[1,"value"],max:[1,"max"],animationDuration:[1,"animationDuration"]},decls:2,vars:4,consts:[["aria-hidden","true",1,"w-full",3,"value","max"]],template:function(n,i){n&1&&(g(0,"progress",0),le(1,"async")),n&2&&u("value",se(1,2,i.currentCount$))("max",i.max())},dependencies:[pe],styles:["progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:2px solid #ccc;border-radius:5px;background-color:transparent}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#999;border-radius:3px}"],changeDetection:0})}return t})();var be=(t,l)=>l.value(),ve=(t,l)=>({"bg-slate-300":t,"dark:bg-slate-700":l});function xe(t,l){t&1&&te(0)}function we(t,l){if(t&1){let e=k();re(0),h(1,"div",2),_("click",function(){p(e);let i=H(0),o=s();return d(o.model.set(i))})("keypress",function(){p(e);let i=H(0),o=s();return d(o.model.set(i))}),g(2,"div",3),w(3,xe,1,0,"ng-container",4),c()}if(t&2){let e=l.$implicit,n=s(),i=ae(e.value());r(),m("aria-checked",n.model()===i),r(),T(P(5,ve,n.model()===i,n.model()===i)),r(),u("ngTemplateOutlet",n.template(i))}}var he=(()=>{class t{value=a.required();template=z(J);static \u0275fac=function(n){return new(n||t)};static \u0275dir=Y({type:t,selectors:[["ng-template","value",""]],inputs:{value:[1,"value"]}})}return t})(),We=(()=>{class t{label=a.required();model=x(void 0);children=K(he);onChanged=f;onTouched=f;constructor(){D(()=>{this.onChanged(this.model()),this.onTouched()})}template(e){let n=this.children().find(i=>i.value()===e);if(!n)throw new Error(`No template found for option: ${e}`);return n.template}writeValue(e){this.model.set(e)}registerOnChange(e){this.onChanged=e}registerOnTouched(e){this.onTouched=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=C({type:t,selectors:[["cmp-select-options"]],contentQueries:function(n,i,o){n&1&&ne(o,i.children,he,4),n&2&&ie()},inputs:{label:[1,"label"]},features:[V([{provide:F,useExisting:M(()=>t),multi:!0}])],decls:5,vars:2,consts:[["role","radiogroup",1,"flex","flex-wrap","justify-evenly","gap-2","gap-y-4","pb-4"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap",3,"click","keypress"],[1,"mr-2","h-6","min-h-6","w-6","min-w-6","rounded-full","border-4","border-slate-300","dark:border-slate-700"],[4,"ngTemplateOutlet"]],template:function(n,i){n&1&&(h(0,"fieldset",0)(1,"legend"),y(2),c(),Z(3,we,4,8,"div",1,be),c()),n&2&&(m("aria-label",i.label()),r(2),S(i.label()),r(),ee(i.children()))},dependencies:[ce],styles:[".accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0})}return t})();var ke=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=G({imports:[ue]})}return t})();export{ue as a,Be as b,he as c,We as d,ke as e};
/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/
