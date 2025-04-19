import{l as fe}from"./chunk-bbb08834.js";import{a as q,p as ve}from"./chunk-6c42d3fd.js";import{c as ue,d as _e,f as be,j as z}from"./chunk-248f8e5a.js";import{$b as ge,Ab as V,Cb as v,Db as P,E as Y,Eb as d,Fb as p,Gb as h,Hb as de,I as ee,Ib as $,J as te,O as ne,Q as ie,Rb as x,Sb as l,T as oe,V as re,Vb as pe,X as H,Xa as r,Xb as me,Za as se,Zb as C,_b as w,ac as he,b as O,ca as ae,ec as y,fb as ce,fc as Ce,gc as R,hc as E,ib as g,ja as u,k as F,ka as _,kb as le,kc as I,la as b,lc as L,n as J,nb as M,r as k,s as K,ub as c,vb as f,wa as s,wb as T,wc as j,xc as A,ya as S,yb as B,z as X,zb as D}from"./chunk-8a02f8fd.js";import{a as W,b as Z}from"./chunk-1724ecac.js";function Oe(i,a){if(i&1){let t=$();d(0,"legend",4),x("click",function(e){u(t);let o=l(2);return _(o.toggleHelp(e))})("keypress",function(e){u(t);let o=l(2);return _(o.toggleHelp(e))}),C(1),p()}if(i&2){let t=l(2);r(),ge(" ",t.help()," ")}}function Me(i,a){if(i&1){let t=$();d(0,"button",2),x("click",function(e){u(t);let o=l();return _(o.toggleHelp(e))}),p(),M(1,Oe,2,1,"legend",3)}if(i&2){let t=l();r(),D(t.helpVisible()?1:-1)}}var xe=(()=>{class i{id=s.required();label=s.required();help=s();model=S(void 0);onChange=O;onTouched=O;helpVisible=S(!1);constructor(){A(()=>{this.onChange(this.model()),this.onTouched()})}toggleHelp(t){t.stopPropagation(),this.helpVisible.update(n=>!n)}toggle(){this.model.update(t=>!t)}writeValue(t){this.model.set(t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["cmp-checkbox"]],hostAttrs:["role","checkbox","tabindex","0"],hostVars:2,hostBindings:function(n,e){n&1&&x("click",function(){return e.toggle()})("keypress",function(){return e.toggle()}),n&2&&c("aria-checked",e.model())("aria-label",e.label()+(e.help()?". ("+e.help()+")":""))},inputs:{id:[1,"id"],label:[1,"label"],help:[1,"help"]},features:[E([{provide:q,useExisting:H(()=>i),multi:!0}])],decls:4,vars:6,consts:[["tabindex","-1",1,"element","my-2","h-6","min-h-6","w-6","min-w-6","appearance-none",3,"id"],[1,"grow",3,"htmlFor"],["iconHelp","","iconClass","h-6 w-6","type","button","tabindex","-1","aria-hidden","true",1,"link",3,"click"],["role","contentinfo",1,"help"],["role","contentinfo",1,"help",3,"click","keypress"]],template:function(n,e){n&1&&(h(0,"div",0),d(1,"label",1),C(2),p(),M(3,Me,2,1)),n&2&&(T("selected",e.model()),f("id",e.id()),r(),f("htmlFor",e.id()),r(),w(e.label()),r(),D(e.help()?3:-1))},dependencies:[ve,fe],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:.5rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{height:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{min-height:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{width:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{min-width:2rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{border-width:6px}.animations[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .animations   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.element[_ngcontent-%COMP%]{margin-left:3px;border-radius:.125rem;border-width:2px;--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity, 1));box-shadow:0 0 0 3px #cbd5e1}.element.selected[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(203 213 225 / var(--tw-bg-opacity, 1))}.dark[_nghost-%COMP%]   .element[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .element[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(15 23 42 / var(--tw-border-opacity, 1))}.dark[_nghost-%COMP%]   .element[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .element[_ngcontent-%COMP%]{box-shadow:0 0 0 3px #334155}.dark[_nghost-%COMP%]   .element.selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .element.selected[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(51 65 85 / var(--tw-bg-opacity, 1))}"],changeDetection:0})}return i})();var we=(i,a)=>a.value();function ye(i,a){if(i&1&&(d(0,"legend"),C(1),p()),i&2){let t=l();r(),w(t.label())}}function ke(i,a){i&1&&de(0)}function Se(i,a){if(i&1){let t=$();y(0),d(1,"div",2),x("click",function(){u(t);let e=R(0),o=l();return _(o.model.set(e))})("keypress",function(){u(t);let e=R(0),o=l();return _(o.model.set(e))}),h(2,"div",3),M(3,ke,1,0,"ng-container",4),p()}if(i&2){let t=a.$implicit,n=l(),e=Ce(t.value());r(),c("aria-checked",n.model()===e),r(),T("selected",n.model()===e),r(),f("ngTemplateOutlet",n.template(e))}}var Q=(()=>{class i{value=s.required();template=ae(se);static \u0275fac=function(n){return new(n||i)};static \u0275dir=le({type:i,selectors:[["ng-template","value",""]],inputs:{value:[1,"value"]}})}return i})(),Te=(()=>{class i{label=s("");legendHidden=s(!1);model=S(void 0);children=ce(Q);onChanged=O;onTouched=O;constructor(){A(()=>{this.onChanged(this.model()),this.onTouched()})}template(t){let n=this.children().find(e=>e.value()===t);if(!n)throw new Error(`No template found for option: ${t}`);return n.template}writeValue(t){this.model.set(t)}registerOnChange(t){this.onChanged=t}registerOnTouched(t){this.onTouched=t}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["cmp-select-options"]],contentQueries:function(n,e,o){n&1&&pe(o,e.children,Q,4),n&2&&me()},inputs:{label:[1,"label"],legendHidden:[1,"legendHidden"]},features:[E([{provide:q,useExisting:H(()=>i),multi:!0}])],decls:4,vars:4,consts:[["role","radiogroup",1,"flex","flex-wrap","justify-evenly","gap-2","gap-y-4","pb-4"],["role","radio","tabindex","0",1,"bg-active","flex","items-center"],["role","radio","tabindex","0",1,"bg-active","flex","items-center",3,"click","keypress"],[1,"element","mr-2","h-6","min-h-6","w-6","min-w-6","rounded-full"],[4,"ngTemplateOutlet"]],template:function(n,e){n&1&&(d(0,"fieldset",0),M(1,ye,2,1,"legend"),v(2,Se,4,5,"div",1,we),p()),n&2&&(T("pt-4",!e.label()||e.legendHidden()),c("aria-label",e.label()),r(),D(e.label()&&!e.legendHidden()?1:-1),r(),P(e.children()))},dependencies:[ue],styles:[".accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-height:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:2rem}.accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}.animations[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .animations   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.element[_ngcontent-%COMP%]{border-width:2px;--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity, 1));box-shadow:0 0 0 3px #cbd5e1}.element.selected[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(203 213 225 / var(--tw-bg-opacity, 1))}.dark[_nghost-%COMP%]   .element[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .element[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(15 23 42 / var(--tw-border-opacity, 1))}.dark[_nghost-%COMP%]   .element[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .element[_ngcontent-%COMP%]{box-shadow:0 0 0 3px #334155}.dark[_nghost-%COMP%]   .element.selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .element.selected[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(51 65 85 / var(--tw-bg-opacity, 1))}"],changeDetection:0})}return i})();function N(i){return`hsl(${(De(i,400)*360/400).toString()}, 50%, 50%)`}function De(i,a){let t=0;for(let n=0;n<i.length;n++){let e=i.charCodeAt(n);t=(t<<5)-t+e,t|=0}return Math.abs(t)%a+1}function Ve(i,a){if(i&1&&(b(),h(0,"rect",1),d(1,"text",2)(2,"tspan",3),C(3),p()()),i&2){let t=a.$implicit,n=a.$index,e=l();c("fill",e.color(t.name))("x",e.padding)("y",e.padding+n*(e.barHeight+e.barPadding))("width",100*t.value)("height",e.barHeight),r(),c("x",e.barPadding+e.padding)("y",e.padding+n*(e.barHeight+e.barPadding)),r(2),w(t.name)}}var $e=(()=>{class i{padding=10;barHeight=10;barPadding=2;bars=s.required();chartClass=s("");color(t){return N(t)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["cmp-bar-chart"]],inputs:{bars:[1,"bars"],chartClass:[1,"chartClass"]},decls:4,vars:3,consts:[["xmlns","http://www.w3.org/2000/svg"],["rx","2"],["font-size","6"],["dy","1.2em"]],template:function(n,e){if(n&1&&(y(0),b(),d(1,"svg",0),v(2,Ve,4,8,null,null,V),p()),n&2){let o=e.bars().length*(e.barHeight+e.barPadding)+e.padding*2;r(),B(e.chartClass()),c("viewBox",`0 0 120 ${o}`),r(),P(e.bars())}},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"],changeDetection:0})}return i})();function Fe(i,a){if(i&1&&(b(),h(0,"path",1)),i&2){let t=a.$implicit,n=l();c("d",t.path)("fill",n.color(t.name))}}function He(i,a){if(i&1&&(b(),d(0,"text",2)(1,"tspan",3),C(2),I(3,"percent"),p()()),i&2){let t=a.$implicit,n=a.$index,e=l();c("x",e.padding)("y",115+8*n)("fill",e.color(t.name)),r(),c("x",e.padding),r(),he(" ",t.name," (",L(3,6,t.value),") ")}}var Be=(()=>{class i{padding=10;segments=s.required();chartClass=s("");sortedSegments=j(()=>this.segments().length===1&&this.segments()[0].value===1?this.segments().map(t=>Z(W({},t),{value:.999})):this.segments().toSorted((t,n)=>n.value-t.value));paths=j(()=>{let n=e=>{let o=Math.sin(2*Math.PI*e)*50+(this.padding+50),m=-Math.cos(2*Math.PI*e)*50+(this.padding+50);return`${o} ${m}`};return this.sortedSegments().reduce(({paths:e,start:o},m)=>{let U=o+m.value,Pe=`
          M ${this.padding+50} ${this.padding+50}
          L ${n(o)}
          A 50 50 0 ${m.value>.5?1:0} 1 ${n(U)}
          Z`;return{paths:[...e,{name:m.name,path:Pe}],start:U}},{paths:[],start:0}).paths});color(t){return N(t)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["cmp-pie-chart"]],inputs:{segments:[1,"segments"],chartClass:[1,"chartClass"]},decls:6,vars:3,consts:[["xmlns","http://www.w3.org/2000/svg"],["stroke","white","stroke-width","0.5"],["font-size","6"],["dy","1.2em"]],template:function(n,e){if(n&1&&(y(0),b(),d(1,"svg",0),v(2,Fe,1,2,":svg:path",1,V),v(4,He,4,8,":svg:text",2,V),p()),n&2){let o=120+8*e.segments().length;r(),B(e.chartClass()),c("viewBox",`0 0 120 ${o}`),r(),P(e.paths()),r(2),P(e.sortedSegments())}},dependencies:[be],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"],changeDetection:0})}return i})();var Ee=i=>i*(2-i),Ie=(()=>{class i{value=s(0);max=s.required();animationDuration=s(0);currentCount$=K([z(this.value).pipe(ie(this.value()),ne())]).pipe(re(z(this.animationDuration)),Y(([[[t,n]],e])=>{if(e<=0)return J(n);let o=F.now();return X(0,F).pipe(k(()=>F.now()-o),k(m=>m/e),oe(m=>m<=1),k(Ee),k(m=>t+m*(n-t)),te(n),ee())}));static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["cmp-progress"]],hostAttrs:["role","progressbar"],hostVars:3,hostBindings:function(n,e){n&2&&c("aria-valuemin",0)("aria-valuemax",e.max())("aria-valuenow",e.value())},inputs:{value:[1,"value"],max:[1,"max"],animationDuration:[1,"animationDuration"]},decls:2,vars:4,consts:[["aria-hidden","true",1,"w-full",3,"value","max"]],template:function(n,e){n&1&&(h(0,"progress",0),I(1,"async")),n&2&&f("value",L(1,2,e.currentCount$))("max",e.max())},dependencies:[_e],styles:["progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:2px solid #ccc;border-radius:5px;background-color:transparent}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#999;border-radius:3px}"],changeDetection:0})}return i})();export{$e as a,xe as b,Be as c,Ie as d,Q as e,Te as f};
/**i18n:e347161579cdf7823cf79475d305275cd962b26b6c63283454da043ebf1dcaa5*/
