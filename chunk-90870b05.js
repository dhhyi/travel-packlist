import{f as H,g as J,h as U,i as X,q as M}from"./chunk-4ac8b7d9.js";import{b as Q,q as v}from"./chunk-c327635d.js";import"./chunk-96e3562a.js";import{$a as d,Aa as o,Ab as E,Eb as A,Fb as b,Gb as C,Ib as j,Ka as h,Kb as G,Lb as K,Pa as m,Tb as L,W as N,Xa as k,aa as x,ab as B,cb as W,cc as $,db as F,eb as r,ec as R,fb as l,gb as _,ia as g,ib as w,ja as f,pb as y,qb as s,sa as O,ta as T,xb as u,yb as S,zb as P}from"./chunk-0b36a61d.js";import{a as V,b as q}from"./chunk-be8120ea.js";function ne(e,c){e&1&&_(0,"app-icon-checkmark")}function oe(e,c){if(e&1&&u(0),e&2){let t=s();E(" ",t.count()," / ",t.total(),`
`)}}var Y=(()=>{class e{count=T(0);total=T(0);static \u0275fac=function(i){return new(i||e)};static \u0275cmp=h({type:e,selectors:[["app-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&m(0,ne,1,0,"app-icon-checkmark")(1,oe,1,2),i&2&&d(n.count()===n.total()?0:1)},dependencies:[M],encapsulation:2,changeDetection:0})}return e})();function Z(e){return`${e.category}-${e.name}`}var ee=(()=>{class e{state=x(v);checkedItems=this.state.signal("checkedItems");collapsedCategories=this.state.signal("collapsedCategories");isItemChecked(t){return this.checkedItems().includes(Z(t))}isCategoryCollapsed(t){return this.collapsedCategories().includes(t)}toggleCheckedItem(t){let i=Z(t);this.checkedItems().includes(i)?this.checkedItems.update(n=>n.filter(a=>a!==i)):this.checkedItems.update(n=>[...n,i])}toggleCategoryCollapse(t){this.collapsedCategories().includes(t)?this.collapsedCategories.update(i=>i.filter(n=>n!==t)):this.collapsedCategories.update(i=>[...i,t])}packlist=L(()=>{let t=this.state.signal("activeItems")(),i=0,n=0,a=0,D=t.reduce((I,p)=>(I[p.category]||(I[p.category]={items:[],checked:0,collapsed:this.isCategoryCollapsed(p.category),totalWeight:0,checkedWeight:0}),I[p.category].items.push(q(V({},p),{checked:this.isItemChecked(p)})),this.isItemChecked(p)&&(i++,I[p.category].checked++,n+=p.weight??0,I[p.category].checkedWeight+=p.weight??0),I[p.category].totalWeight+=p.weight??0,a+=p.weight??0,I),{});return{numberOfItems:t.length,categories:D,checked:i,checkedWeight:n,totalWeight:a}});static \u0275fac=function(i){return new(i||e)};static \u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ae=(e,c)=>c.key,se=e=>({"text-slate-600 line-through dark:text-slate-400":e});function ce(e,c){if(e&1&&(r(0,"div",1),_(1,"progress",2),l(),r(2,"div",3)(3,"span"),u(4),l(),r(5,"span"),u(6),l()()),e&2){let t=s(),i=C(1),n=C(2),a=C(3),D=C(4);o(),k("value",a)("max",D),o(3),E("",i," / ",n,""),o(2),S(t.serializeWeightPartition(a,D))}}function le(e,c){if(e&1&&(r(0,"div",1),_(1,"progress",2),l(),r(2,"div",4)(3,"span"),u(4),l()()),e&2){s();let t=C(1),i=C(2);o(),k("value",t)("max",i),o(3),E("",t," / ",i,"")}}function re(e,c){e&1&&_(0,"app-icon-key-right",7)}function pe(e,c){e&1&&_(0,"app-icon-key-down",7)}function me(e,c){if(e&1&&u(0),e&2){s(2);let t=C(1),i=s();P(" (",i.serializeWeight(t.checkedWeight,void 0,1),") ")}}function de(e,c){if(e&1&&u(0),e&2){s(2);let t=C(1),i=s();P(" (",i.serializeWeightPartition(t.checkedWeight,t.totalWeight),") ")}}function _e(e,c){if(e&1&&(r(0,"span",9),m(1,me,1,1)(2,de,1,1),l()),e&2){s();let t=C(1);o(),d(t.checkedWeight===t.totalWeight?1:2)}}function ue(e,c){if(e&1&&(r(0,"span",14),u(1),l()),e&2){let t=s().$implicit,i=s(3);o(),S(i.serializeWeight(t.weight))}}function Ce(e,c){if(e&1){let t=w();r(0,"li",13),y("click",function(){let n=g(t).$implicit,a=s(3);return f(a.toggleCheckedItem(n))})("keypress",function(){let n=g(t).$implicit,a=s(3);return f(a.toggleCheckedItem(n))}),u(1),m(2,ue,2,1,"span",14),l()}if(e&2){let t=c.$implicit,i=s(3);k("ngClass",j(3,se,t.checked)),o(),P(" ",t.name," "),o(),d(t.weight&&i.trackWeight()?2:-1)}}function ge(e,c){if(e&1&&(r(0,"ul",11),W(1,Ce,3,5,"li",12,B),l()),e&2){s();let t=C(1);o(),F(t.items)}}function fe(e,c){if(e&1){let t=w();A(0)(1),r(2,"div",0)(3,"div",5),y("click",function(){g(t);let n=C(0),a=s();return f(a.toggleCategoryCollapse(n))})("keypress",function(){g(t);let n=C(0),a=s();return f(a.toggleCategoryCollapse(n))}),r(4,"div",6),m(5,re,1,0,"app-icon-key-right",7)(6,pe,1,0,"app-icon-key-down",7),r(7,"span",8),u(8),l(),m(9,_e,3,1,"span",9),l(),_(10,"app-status",10),l(),m(11,ge,3,0,"ul",11),l()}if(e&2){let t=c.$implicit,i=s(),n=b(t.key);o();let a=b(t.value);o(4),d(a.collapsed?5:6),o(3),S(n),o(),d(i.trackWeight()&&a.totalWeight?9:-1),o(),k("count",a.checked)("total",a.items.length),o(),d(a.collapsed?-1:11)}}var te=(()=>{class e{state=x(v);facade=x(ee);view=this.facade.packlist;orderBy=L(()=>this.state.signal("categorySorting")()==="definition"?()=>0:void 0);trackWeight=this.state.signal("trackWeight");serializeWeight=Q;serializeWeightPartition(t,i){return Q(t,void 0,1)+" / "+Q(i,void 0,1)}toggleCheckedItem(t){this.facade.toggleCheckedItem(t)}toggleCategoryCollapse(t){this.facade.toggleCategoryCollapse(t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=h({type:e,selectors:[["app-display-items"]],decls:10,vars:8,consts:[[1,"card","mb-1"],[1,"mb-1","flex"],[1,"grow",3,"value","max"],[1,"flex","flex-col","items-center"],[1,"flex","justify-center"],["role","button","tabindex","0",1,"flex","justify-between",3,"click","keypress"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],[1,"pt-2"],["role","button","tabindex","0",1,"flex","justify-between",3,"ngClass"],["role","button","tabindex","0",1,"flex","justify-between",3,"click","keypress","ngClass"],[1,"italic"]],template:function(i,n){i&1&&(r(0,"div",0),A(1)(2)(3)(4),m(5,ce,7,5)(6,le,5,4),l(),W(7,fe,12,8,"div",0,ae),G(9,"keyvalue")),i&2&&(o(),b(n.view().checked),o(),b(n.view().numberOfItems),o(),b(n.view().checkedWeight),o(),b(n.view().totalWeight),o(),d(n.trackWeight()?5:6),o(2),F(K(9,5,n.view().categories,n.orderBy())))},dependencies:[R,Y,$,X,U],styles:["progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:2px solid #ccc;border-radius:5px;background-color:transparent}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#999;border-radius:3px}"],changeDetection:0})}return e})();function xe(e,c){e&1&&(r(0,"span"),_(1,"app-icon-checkmark"),l())}function he(e,c){if(e&1){let t=w();r(0,"div",1),y("click",function(){g(t);let n=s();return f(n.click())})("keypress",function(){g(t);let n=s();return f(n.click())}),r(1,"span",2),u(2),l(),m(3,xe,2,0,"span"),l()}if(e&2){let t=s();o(2),S(c),o(),d(t.value()?3:-1)}}var ie=(()=>{class e{question=T(void 0);value=T(void 0);valueChange=O();state=x(v);click(){this.state.get("answersLocked")||this.valueChange.emit(!this.value())}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=h({type:e,selectors:[["app-display-question"]],inputs:{question:[1,"question"],value:[1,"value"]},outputs:{valueChange:"valueChange"},decls:1,vars:1,consts:[["role","button","tabindex","0",1,"flex","flex-row","justify-between"],["role","button","tabindex","0",1,"flex","flex-row","justify-between",3,"click","keypress"],[1,"font-bold"]],template:function(i,n){if(i&1&&m(0,he,4,2,"div",0),i&2){let a;d((a=n.question())?0:-1,a)}},dependencies:[M],encapsulation:2,changeDetection:0})}return e})();var ke=(e,c)=>c.question,ye=e=>({disabled:e});function ve(e,c){if(e&1){let t=w();r(0,"div",0)(1,"app-display-question",4),y("valueChange",function(n){let a=g(t).$implicit,D=s();return f(D.modelChange(a.variable,n))}),l()()}if(e&2){let t=c.$implicit,i=s();k("ngClass",j(3,ye,i.isLockActive())),o(),k("question",t.question)("value",i.model()[t.variable])}}function Ie(e,c){e&1&&_(0,"app-icon-lock",3)}function we(e,c){e&1&&_(0,"app-icon-lock-open",3)}var at=(()=>{class e{state=x(v);activeQuestions=this.state.signal("activeQuestions");isLockActive=this.state.signal("answersLocked");model=this.state.signal("answers");questions=L(()=>this.activeQuestions().filter(t=>!this.isLockActive()||this.model()[t.variable]));modelChange(t,i){this.model.update(n=>q(V({},n),{[t]:i}))}toggleLock(){this.isLockActive.update(t=>!t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=h({type:e,selectors:[["app-packlist"]],decls:7,vars:1,consts:[[1,"card","mb-1",3,"ngClass"],[1,"flex","justify-center"],["type","button",1,"link",3,"click"],[1,"h-6","w-6"],[3,"valueChange","question","value"]],template:function(i,n){i&1&&(W(0,ve,2,5,"div",0,ke),r(2,"div",1)(3,"button",2),y("click",function(){return n.toggleLock()}),m(4,Ie,1,0,"app-icon-lock",3)(5,we,1,0,"app-icon-lock-open",3),l()(),_(6,"app-display-items")),i&2&&(F(n.questions()),o(4),d(n.isLockActive()?4:5))},dependencies:[ie,te,H,J,$],encapsulation:2,changeDetection:0})}return e})();export{at as default};
/**i18n:cbcf01d4640d52ad6821130aa8bde718125de417ff622aa7dfac4aa297a95122*/
