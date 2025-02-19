import{l as fe}from"./chunk-d4af0442.js";import{a as A,p as ve}from"./chunk-2302763c.js";import{a as j}from"./chunk-d272b074.js";import{$b as pe,Ab as C,Ba as k,Bb as G,Cb as T,E as J,Eb as x,Fb as P,Gb as p,Hb as d,Ib as h,J as K,Jb as ce,K as X,Kb as D,Nc as ue,Oc as Ce,P as Y,Qc as _e,Rb as O,S as ee,Sb as l,V as te,Vb as le,X as ne,Xb as de,Z as F,Za as r,Zb as u,_b as y,ac as me,b as M,bb as oe,ea as ie,ec as ge,fc as he,gc as N,hb as re,hc as $,j as V,jc as B,kb as g,la as _,lc as E,m as U,ma as f,mb as ae,mc as H,na as v,pb as S,q as w,r as W,wb as c,wc as R,xb as b,ya as s,yb as se,z as Z,zc as I}from"./chunk-46ff38a9.js";var xe=(i,o)=>({"bg-slate-300":i,"dark:bg-slate-700":o});function Pe(i,o){if(i&1){let t=D();p(0,"legend",4),O("click",function(e){_(t);let a=l(2);return f(a.toggleHelp(e))})("keypress",function(e){_(t);let a=l(2);return f(a.toggleHelp(e))}),u(1),d()}if(i&2){let t=l(2);r(),pe(" ",t.help()," ")}}function Me(i,o){if(i&1){let t=D();p(0,"button",2),O("click",function(e){_(t);let a=l();return f(a.toggleHelp(e))}),d(),S(1,Pe,2,1,"legend",3)}if(i&2){let t=l();r(),G(t.helpVisible()?1:-1)}}var Oe=(()=>{class i{id=s.required();label=s.required();help=s();model=k(void 0);onChange=M;onTouched=M;helpVisible=k(!1);constructor(){I(()=>{this.onChange(this.model()),this.onTouched()})}toggleHelp(t){t.stopPropagation(),this.helpVisible.update(n=>!n)}toggle(){this.model.update(t=>!t)}writeValue(t){this.model.set(t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["cmp-checkbox"]],hostAttrs:["role","checkbox","tabindex","0"],hostVars:2,hostBindings:function(n,e){n&1&&O("click",function(){return e.toggle()})("keypress",function(){return e.toggle()}),n&2&&c("aria-checked",e.model())("aria-label",e.label()+(e.help()?". ("+e.help()+")":""))},inputs:{id:[1,"id"],label:[1,"label"],help:[1,"help"]},features:[$([{provide:A,useExisting:F(()=>i),multi:!0}])],decls:4,vars:9,consts:[["tabindex","-1",1,"my-2","h-6","min-h-6","w-6","min-w-6","appearance-none","rounded-sm","border-4","border-slate-300","dark:border-slate-700",3,"id"],[1,"grow",3,"htmlFor"],["iconHelp","","iconClass","h-6 w-6","type","button","tabindex","-1","aria-hidden","true",1,"link",3,"click"],["role","contentinfo",1,"help"],["role","contentinfo",1,"help",3,"click","keypress"]],template:function(n,e){n&1&&(h(0,"div",0),p(1,"label",1),u(2),d(),S(3,Me,2,1)),n&2&&(C(B(6,xe,e.model(),e.model())),b("id",e.id()),r(),b("htmlFor",e.id()),r(),y(e.label()),r(),G(e.help()?3:-1))},dependencies:[ve,fe],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:.5rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{height:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{min-height:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{width:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{min-width:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{border-width:6px}.animations[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .animations   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}"],changeDetection:0})}return i})();var ye=(i,o)=>o.value(),we=(i,o)=>({"bg-slate-300":i,"dark:bg-slate-700":o});function ke(i,o){i&1&&ce(0)}function Se(i,o){if(i&1){let t=D();ge(0),p(1,"div",2),O("click",function(){_(t);let e=N(0),a=l();return f(a.model.set(e))})("keypress",function(){_(t);let e=N(0),a=l();return f(a.model.set(e))}),h(2,"div",3),S(3,ke,1,0,"ng-container",4),d()}if(i&2){let t=o.$implicit,n=l(),e=he(t.value());r(),c("aria-checked",n.model()===e),r(),C(B(5,we,n.model()===e,n.model()===e)),r(),b("ngTemplateOutlet",n.template(e))}}var z=(()=>{class i{value=s.required();template=ie(oe);static \u0275fac=function(n){return new(n||i)};static \u0275dir=ae({type:i,selectors:[["ng-template","value",""]],inputs:{value:[1,"value"]}})}return i})(),Te=(()=>{class i{label=s("");model=k(void 0);children=re(z);onChanged=M;onTouched=M;constructor(){I(()=>{this.onChanged(this.model()),this.onTouched()})}template(t){let n=this.children().find(e=>e.value()===t);if(!n)throw new Error(`No template found for option: ${t}`);return n.template}writeValue(t){this.model.set(t)}registerOnChange(t){this.onChanged=t}registerOnTouched(t){this.onTouched=t}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["cmp-select-options"]],contentQueries:function(n,e,a){n&1&&le(a,e.children,z,4),n&2&&de()},inputs:{label:[1,"label"]},features:[$([{provide:A,useExisting:F(()=>i),multi:!0}])],decls:5,vars:4,consts:[["role","radiogroup",1,"flex","flex-wrap","justify-evenly","gap-2","gap-y-4","pb-4"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap",3,"click","keypress"],[1,"mr-2","h-6","min-h-6","w-6","min-w-6","rounded-full","border-4","border-slate-300","dark:border-slate-700"],[4,"ngTemplateOutlet"]],template:function(n,e){n&1&&(p(0,"fieldset",0)(1,"legend"),u(2),d(),x(3,Se,4,8,"div",1,ye),d()),n&2&&(se("pt-4",!e.label()),c("aria-label",e.label()),r(2),y(e.label()),r(),P(e.children()))},dependencies:[ue],styles:[".accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-height:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}.animations[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .animations   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}"],changeDetection:0})}return i})();function q(i){return`hsl(${(De(i,400)*360/400).toString()}, 50%, 50%)`}function De(i,o){let t=0;for(let n=0;n<i.length;n++){let e=i.charCodeAt(n);t=(t<<5)-t+e,t|=0}return Math.abs(t)%o+1}function Ve(i,o){if(i&1&&(v(),h(0,"rect",1),p(1,"text",2)(2,"tspan",3),u(3),d()()),i&2){let t=o.$implicit,n=o.$index,e=l();c("fill",e.color(t.name))("x",e.padding)("y",e.padding+n*(e.height+e.barPadding))("width",100*t.value)("height",e.height),r(),c("x",e.barPadding+e.padding)("y",e.padding+n*(e.height+e.barPadding)),r(2),y(t.name)}}var Fe=(()=>{class i{padding=10;height=10;barPadding=2;bars=s.required();chartClass=s("");color(t){return q(t)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["cmp-bar-chart"]],inputs:{bars:[1,"bars"],chartClass:[1,"chartClass"]},decls:3,vars:3,consts:[["xmlns","http://www.w3.org/2000/svg"],["rx","2"],["font-size","6"],["dy","1.2em"]],template:function(n,e){n&1&&(v(),p(0,"svg",0),x(1,Ve,4,8,null,null,T),d()),n&2&&(C(e.chartClass()),c("viewBox","0 0 120 "+(e.bars().length*(e.height+e.barPadding)+e.padding*2)),r(),P(e.bars()))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"],changeDetection:0})}return i})();function $e(i,o){if(i&1&&(v(),h(0,"path",1)),i&2){let t=o.$implicit,n=l();c("d",t.path)("fill",n.color(t.name))}}function Be(i,o){if(i&1&&(v(),p(0,"text",2)(1,"tspan",3),u(2),E(3,"percent"),d()()),i&2){let t=o.$implicit,n=o.$index,e=l();c("x",e.padding)("y",115+8*n)("fill",e.color(t.name)),r(),c("x",e.padding),r(),me(" ",t.name," (",H(3,6,t.value),") ")}}var Ee=(()=>{class i{padding=10;segments=s.required();chartClass=s("");sortedSegments=R(()=>this.segments().toSorted((t,n)=>n.value-t.value));paths=R(()=>{let n=e=>{let a=Math.sin(2*Math.PI*e)*50+(this.padding+50),m=-Math.cos(2*Math.PI*e)*50+(this.padding+50);return`${a} ${m}`};return this.sortedSegments().reduce(({paths:e,start:a},m)=>{let Q=a+m.value,be=`
          M ${this.padding+50} ${this.padding+50}
          L ${n(a)}
          A 50 50 0 ${m.value>.5?1:0} 1 ${n(Q)}
          Z`;return{paths:[...e,{name:m.name,path:be}],start:Q}},{paths:[],start:0}).paths});color(t){return q(t)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["cmp-pie-chart"]],inputs:{segments:[1,"segments"],chartClass:[1,"chartClass"]},decls:5,vars:3,consts:[["xmlns","http://www.w3.org/2000/svg"],["stroke","white","stroke-width","0.5"],["font-size","6"],["dy","1.2em"]],template:function(n,e){n&1&&(v(),p(0,"svg",0),x(1,$e,1,2,":svg:path",1,T),x(3,Be,4,8,":svg:text",2,T),d()),n&2&&(C(e.chartClass()),c("viewBox","0 0 120 "+(120+8*e.segments().length)),r(),P(e.paths()),r(2),P(e.sortedSegments()))},dependencies:[_e],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"],changeDetection:0})}return i})();var He=i=>i*(2-i),Ie=(()=>{class i{value=s(0);max=s.required();animationDuration=s(0);currentCount$=W([j(this.value).pipe(ee(this.value()),Y())]).pipe(ne(j(this.animationDuration)),J(([[[t,n]],e])=>{if(e<=0)return U(n);let a=V.now();return Z(0,V).pipe(w(()=>V.now()-a),w(m=>m/e),te(m=>m<=1),w(He),w(m=>t+m*(n-t)),X(n),K())}));static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["cmp-progress"]],hostAttrs:["role","progressbar"],hostVars:3,hostBindings:function(n,e){n&2&&c("aria-valuemin",0)("aria-valuemax",e.max())("aria-valuenow",e.value())},inputs:{value:[1,"value"],max:[1,"max"],animationDuration:[1,"animationDuration"]},decls:2,vars:4,consts:[["aria-hidden","true",1,"w-full",3,"value","max"]],template:function(n,e){n&1&&(h(0,"progress",0),E(1,"async")),n&2&&b("value",H(1,2,e.currentCount$))("max",e.max())},dependencies:[Ce],styles:["progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:2px solid #ccc;border-radius:5px;background-color:transparent}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#999;border-radius:3px}"],changeDetection:0})}return i})();export{Fe as a,Oe as b,Ee as c,Ie as d,z as e,Te as f};
/**i18n:3c21b2b191b8a9740df1d1ee6e00c81bf8245c385e0820d6dd1b44445542cf32*/
