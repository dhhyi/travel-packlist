import{f as Y,g as H,h as J,i as Z,q as $}from"./chunk-2fd21f29.js";import{b as y,q as ee}from"./chunk-d674646e.js";import{d as j}from"./chunk-2cc4a044.js";import{$a as _,$b as q,Aa as c,Ab as N,Fb as X,Ka as S,Pa as r,Qb as A,W,Wa as h,Xa as E,Ya as Q,aa as f,ab as U,cb as L,db as v,eb as l,fb as s,gb as m,ia as u,ib as P,ja as g,jb as b,kb as w,lb as B,ob as z,pb as k,qb as a,ta as G,xb as C,yb as x,zb as M}from"./chunk-fa8487e3.js";import{a as K,b as V}from"./chunk-e13ede82.js";function O(t){return`${t.category}-${t.name}`;}var I=(()=>{class t{router=f(j);state=f(ee);numberOfItems=A(()=>this.state.signal("activeItems")().length);checkedItems=this.state.signal("checkedItems");collapsedCategories=this.state.signal("collapsedCategories");isItemChecked(e){return this.checkedItems().includes(O(e));}numberOfCheckedItems=A(()=>this.checkedItems().length);isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem(e){let i=O(e);this.checkedItems().includes(i)?this.checkedItems.update(n=>n.filter(p=>p!==i)):this.checkedItems.update(n=>[...n,i]);}toggleCategoryCollapse(e){this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);}categoriesOrderBy=A(()=>this.state.signal("categorySorting")()==="definition"?()=>0:(i,n)=>i.localeCompare(n));packlist=A(()=>{let e=this.state.signal("activeItems")(),i=this.checkedItems(),n=e.reduce((T,d)=>(T[d.category]||(T[d.category]={name:d.category,items:[],checked:0,collapsed:this.isCategoryCollapsed(d.category),totalWeight:0,checkedWeight:0}),T[d.category].items.push(V(K({},d),{checked:i.includes(O(d))})),i.includes(O(d))&&(T[d.category].checked++,T[d.category].checkedWeight+=d.weight??0),T[d.category].totalWeight+=d.weight??0,T),{}),p=Object.entries(n).map(T=>T[1]),F=this.categoriesOrderBy();return p.sort((T,d)=>F(T.name,d.name)),p;});totalWeight=A(()=>this.packlist().reduce((e,i)=>e+i.totalWeight,0));checkedWeight=A(()=>this.packlist().reduce((e,i)=>e+i.checkedWeight,0));rulesAvailable=A(()=>this.state.signal("numberOfRules")()>0);isAnswersLockActive=this.state.signal("answersLocked");model=this.state.signal("answers");activeQuestions=this.state.signal("activeQuestions");questions=A(()=>this.activeQuestions().filter(e=>!this.isAnswersLockActive()||this.model()[e.variable]));questionsAvailable=A(()=>this.activeQuestions().length>0);toggleQuestion(e){this.isAnswersLockActive()||this.model.update(i=>V(K({},i),{[e.variable]:!i[e.variable]}));}isQuestionActive(e){return this.model()[e.variable];}toggleAnswersLock(){this.isAnswersLockActive.update(e=>!e);}trackWeight=this.state.signal("trackWeight");goToRulesEdit(){this.router.navigate(["/rules"]).then(()=>{this.state.set("rulesMode","edit");});}goToConfigImport(){this.router.navigate(["/config"],{fragment:"import"});}static ɵfac=function(i){return new(i||t)();};static ɵprov=W({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function R(t,o){return y(t,void 0,1)+" / "+y(o,void 0,1);}function ae(t,o){t&1&&m(0,"app-icon-checkmark");}function se(t,o){if(t&1&&C(0),t&2){let e=a();N(" ",e.count()," / ",e.total(),`
`);}}var te=(()=>{class t{count=G(0);total=G(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=S({type:t,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&r(0,ae,1,0,"app-icon-checkmark")(1,se,1,2),i&2&&_(n.count()===n.total()?0:1);},dependencies:[$],encapsulation:2,changeDetection:0});}return t;})();var ce=(t,o)=>o.name,le=t=>({"text-slate-600 line-through dark:text-slate-400":t});function re(t,o){t&1&&(l(0,"div",1)(1,"p",3),B(2,0),s()());}function _e(t,o){t&1&&m(0,"app-icon-key-right",6);}function pe(t,o){t&1&&m(0,"app-icon-key-down",6);}function de(t,o){if(t&1&&C(0),t&2){let e=a(2).$implicit,i=a();M(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function me(t,o){if(t&1&&C(0),t&2){let e=a(2).$implicit,i=a();M(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function ue(t,o){if(t&1&&(l(0,"span",8),r(1,de,1,1)(2,me,1,1),s()),t&2){let e=a().$implicit;c(),_(e.checkedWeight===e.totalWeight?1:2);}}function ge(t,o){if(t&1&&(l(0,"span",12),C(1),s()),t&2){let e=a().$implicit,i=a(3);c(),x(i.serializeWeight(e.weight));}}function Ce(t,o){if(t&1){let e=P();l(0,"div",10)(1,"div",11),k("click",function(){let n=u(e).$implicit,p=a(3);return g(p.facade.toggleCheckedItem(n));})("keypress",function(){let n=u(e).$implicit,p=a(3);return g(p.facade.toggleCheckedItem(n));}),C(2),r(3,ge,2,1,"span",12),s()();}if(t&2){let e=o.$implicit,i=a(3);c(),E("ngClass",X(4,le,e.checked)),h("aria-checked",e.checked),c(),M(" ",e.name," "),c(),_(e.weight&&i.facade.trackWeight()?3:-1);}}function Te(t,o){if(t&1&&L(0,Ce,4,6,"div",10,U),t&2){let e=a().$implicit;v(e.items);}}function fe(t,o){if(t&1){let e=P();l(0,"div",2)(1,"div",4),k("click",function(){let n=u(e).$implicit,p=a();return g(p.facade.toggleCategoryCollapse(n.name));}),l(2,"div",5),r(3,_e,1,0,"app-icon-key-right",6)(4,pe,1,0,"app-icon-key-down",6),l(5,"span",7),C(6),s(),r(7,ue,3,1,"span",8),s(),m(8,"app-items-status",9),s(),r(9,Te,2,0),s();}if(t&2){let e=o.$implicit,i=a();h("aria-label",e.name),c(3),_(e.collapsed?3:4),c(3),x(e.name),c(),_(i.facade.trackWeight()&&e.totalWeight?7:-1),c(),E("count",e.checked)("total",e.items.length),c(),_(e.collapsed?-1:9);}}var ie=(()=>{class t{facade=f(I);serializeWeight=y;serializeWeightPartition=R;static ɵfac=function(i){return new(i||t)();};static ɵcmp=S({type:t,selectors:[["app-display-items"]],decls:3,vars:1,consts:()=>{let e;return e="No items available.",[e,[1,"flex","flex-col","items-center"],["role","list",1,"card","mb-1"],[1,"text-center"],["aria-hidden","true",1,"flex","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","justify-between",3,"click","keypress","ngClass"],[1,"italic"]];},template:function(i,n){i&1&&(r(0,re,3,0,"div",1),L(1,fe,10,7,"div",2,ce)),i&2&&(_(n.facade.numberOfItems()?-1:0),c(),v(n.facade.packlist()));},dependencies:[te,q,Z,J],encapsulation:2,changeDetection:0});}return t;})();var Se=(t,o)=>o.question;function ke(t,o){if(t&1){let e=P();l(0,"div",1)(1,"p",2),b(2,0),l(3,"button",3),k("click",function(){u(e);let n=a();return g(n.facade.goToRulesEdit());}),s(),w(),s()();}}function Ae(t,o){t&1&&m(0,"app-icon-checkmark");}function Pe(t,o){if(t&1){let e=P();l(0,"div",8),k("click",function(){let n=u(e).$implicit,p=a(2);return g(p.facade.toggleQuestion(n));})("keypress",function(){let n=u(e).$implicit,p=a(2);return g(p.facade.toggleQuestion(n));}),l(1,"span",9),C(2),s(),r(3,Ae,1,0,"app-icon-checkmark"),s();}if(t&2){let e=o.$implicit,i=a(2);Q("disabled",i.facade.isAnswersLockActive()),h("aria-checked",i.facade.isQuestionActive(e))("aria-disabled",i.facade.isAnswersLockActive()),c(2),x(e.question),c(),_(i.facade.isQuestionActive(e)?3:-1);}}function Ie(t,o){t&1&&m(0,"app-icon-lock",7);}function xe(t,o){t&1&&m(0,"app-icon-lock-open",7);}function he(t,o){if(t&1){let e=P();L(0,Pe,4,6,"div",4,Se),l(2,"div",5)(3,"button",6),k("click",function(){u(e);let n=a();return g(n.facade.toggleAnswersLock());})("keypress",function(){u(e);let n=a();return g(n.facade.toggleAnswersLock());}),r(4,Ie,1,0,"app-icon-lock",7)(5,xe,1,0,"app-icon-lock-open",7),s()();}if(t&2){let e=a();v(e.facade.questions()),c(3),h("aria-pressed",e.facade.isAnswersLockActive()),c(),_(e.facade.isAnswersLockActive()?4:5);}}var ne=(()=>{class t{facade=f(I);static ɵfac=function(i){return new(i||t)();};static ɵcmp=S({type:t,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let e;e=" No questions available, please "+"\uFFFD#3\uFFFD"+" create "+"\uFFFD/#3\uFFFD"+" some. ";let i;return i="Lock answers",[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","justify-between",3,"disabled"],[1,"flex","justify-center"],["type","button","role","button","aria-label",i,1,"link",3,"click","keypress"],[1,"h-6","w-6"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","justify-between",3,"click","keypress"],[1,"font-bold"]];},template:function(i,n){i&1&&r(0,ke,4,0,"div",1)(1,he,6,2),i&2&&_(n.facade.questionsAvailable()?1:0);},dependencies:[Y,H,$],encapsulation:2,changeDetection:0});}return t;})();function Ee(t,o){if(t&1&&m(0,"progress",2),t&2){let e=a();E("value",e.facade.checkedWeight())("max",e.facade.totalWeight());}}function ye(t,o){if(t&1&&m(0,"progress",3),t&2){let e=a();E("value",e.facade.numberOfCheckedItems())("max",e.facade.numberOfItems());}}function Fe(t,o){if(t&1&&(l(0,"span",6),C(1),s()),t&2){let e=a();c(),x(e.serializeWeightPartition(e.facade.checkedWeight(),e.facade.totalWeight()));}}var oe=(()=>{class t{facade=f(I);serializeWeightPartition=R;static ɵfac=function(i){return new(i||t)();};static ɵcmp=S({type:t,selectors:[["app-packlist-status"]],decls:8,vars:4,consts:()=>{let e;e="weight packing progress";let i;i="item packing progress";let n;n="item packing status";let p;return p="weight packing status",[[1,"card","mb-1"],[1,"mb-1","flex"],["role","progressbar","title",e,1,"grow",3,"value","max"],["role","progressbar","title",i,1,"grow",3,"value","max"],[1,"flex","flex-col","items-center"],["title",n,"aria-live","polite"],["title",p,"aria-live","polite"]];},template:function(i,n){i&1&&(l(0,"div",0)(1,"div",1),r(2,Ee,1,2,"progress",2)(3,ye,1,2,"progress",3),s(),l(4,"div",4)(5,"span",5),C(6),s(),r(7,Fe,2,1,"span",6),s()()),i&2&&(c(2),_(n.facade.trackWeight()?2:3),c(4),N("",n.facade.numberOfCheckedItems()," / ",n.facade.numberOfItems(),""),c(),_(n.facade.trackWeight()?7:-1));},styles:["progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:2px solid #ccc;border-radius:5px;background-color:transparent}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#999;border-radius:3px}"],changeDetection:0});}return t;})();function Le(t,o){t&1&&m(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function ve(t,o){if(t&1){let e=P();l(0,"div",1)(1,"p",2),b(2,0),l(3,"button",3),k("click",function(){u(e);let n=a();return g(n.facade.goToConfigImport());}),s(),l(4,"button",3),k("click",function(){u(e);let n=a();return g(n.facade.goToRulesEdit());}),s(),w(),s()();}}var Ct=(()=>{class t{facade=f(I);static ɵfac=function(i){return new(i||t)();};static ɵcmp=S({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;return e=" No rules available, please "+"\uFFFD#3\uFFFD"+" import "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" or "+"\uFFFD#4\uFFFD"+" create "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" some. ",e=z(e),[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&r(0,Le,3,0)(1,ve,5,0,"div",1),i&2&&_(n.facade.rulesAvailable()?0:1);},dependencies:[ie,ne,oe],encapsulation:2,changeDetection:0});}return t;})();export{Ct as default};/**i18n:4b3ec942134fb294d3fa1293c03da3289f5b7f76404972cf87582f16ddb6b2ee*/