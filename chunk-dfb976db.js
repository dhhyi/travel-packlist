import{f as j,g as X,h as H,i as J,q as O}from"./chunk-0334cdc5.js";import{b as I,q as Z}from"./chunk-a36edca3.js";import{d as Y}from"./chunk-43426cf1.js";import{Aa as c,Ab as $,Bb as M,Gb as U,La as k,Qa as r,Rb as f,W as V,Xa as x,Ya as F,Za as G,aa as S,ab as _,ac as q,bb as Q,db as E,eb as v,fb as l,gb as s,hb as m,ia as u,ja as g,jb as A,kb as D,lb as w,mb as B,pb as z,qb as h,rb as a,ta as K,yb as C,zb as y}from"./chunk-36b36bcf.js";import{a as R,b as W}from"./chunk-5742b79d.js";function b(t){return`${t.category}-${t.name}`;}var P=(()=>{class t{router=S(Y);state=S(Z);numberOfItems=f(()=>this.state.signal("activeItems")().length);checkedItems=this.state.signal("checkedItems");collapsedCategories=this.state.signal("collapsedCategories");isItemChecked(e){return this.checkedItems().includes(b(e));}numberOfCheckedItems=f(()=>{let e=this.state.signal("activeItems")().map(b);return this.checkedItems().filter(i=>e.includes(i)).length;});isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem(e){let i=b(e);this.checkedItems().includes(i)?this.checkedItems.update(n=>n.filter(p=>p!==i)):this.checkedItems.update(n=>[...n,i]);}toggleCategoryCollapse(e){this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);}categoriesOrderBy=f(()=>this.state.signal("categorySorting")()==="definition"?()=>0:(i,n)=>i.localeCompare(n));packlist=f(()=>{let e=this.state.signal("activeItems")(),i=this.checkedItems(),n=e.reduce((T,d)=>(T[d.category]||(T[d.category]={name:d.category,items:[],checked:0,collapsed:this.isCategoryCollapsed(d.category),totalWeight:0,checkedWeight:0}),T[d.category].items.push(W(R({},d),{checked:i.includes(b(d))})),i.includes(b(d))&&(T[d.category].checked++,T[d.category].checkedWeight+=d.weight??0),T[d.category].totalWeight+=d.weight??0,T),{}),p=Object.entries(n).map(T=>T[1]),oe=this.categoriesOrderBy();return p.sort((T,d)=>oe(T.name,d.name)),p;});totalWeight=f(()=>this.packlist().reduce((e,i)=>e+i.totalWeight,0));checkedWeight=f(()=>this.packlist().reduce((e,i)=>e+i.checkedWeight,0));rulesAvailable=f(()=>this.state.signal("numberOfRules")()>0);isAnswersLockActive=this.state.signal("answersLocked");model=this.state.signal("answers");activeQuestions=this.state.signal("activeQuestions");questions=f(()=>this.activeQuestions().filter(e=>!this.isAnswersLockActive()||this.model()[e.variable]));questionsAvailable=f(()=>this.activeQuestions().length>0);toggleQuestion(e){this.isAnswersLockActive()||this.model.update(i=>W(R({},i),{[e.variable]:!i[e.variable]}));}isQuestionActive(e){return this.model()[e.variable];}toggleAnswersLock(){this.isAnswersLockActive.update(e=>!e);}trackWeight=this.state.signal("trackWeight");goToRulesEdit(){this.router.navigate(["/rules"]).then(()=>{this.state.set("rulesMode","edit");});}goToConfigImport(){this.router.navigate(["/config"],{fragment:"import"});}static ɵfac=function(i){return new(i||t)();};static ɵprov=V({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function N(t,o){return I(t,void 0,1)+" / "+I(o,void 0,1);}function ae(t,o){t&1&&m(0,"app-icon-checkmark");}function se(t,o){if(t&1&&C(0),t&2){let e=a();M(" ",e.count()," / ",e.total(),`
`);}}var ee=(()=>{class t{count=K(0);total=K(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=k({type:t,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&r(0,ae,1,0,"app-icon-checkmark")(1,se,1,2),i&2&&_(n.count()===n.total()?0:1);},dependencies:[O],encapsulation:2,changeDetection:0});}return t;})();var ce=(t,o)=>o.name,le=t=>({"text-slate-600 line-through dark:text-slate-400":t});function re(t,o){t&1&&(l(0,"div",1)(1,"p",3),B(2,0),s()());}function _e(t,o){t&1&&m(0,"app-icon-key-right",6);}function pe(t,o){t&1&&m(0,"app-icon-key-down",6);}function de(t,o){if(t&1&&C(0),t&2){let e=a(2).$implicit,i=a();$(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function me(t,o){if(t&1&&C(0),t&2){let e=a(2).$implicit,i=a();$(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function ue(t,o){if(t&1&&(l(0,"span",8),r(1,de,1,1)(2,me,1,1),s()),t&2){let e=a().$implicit;c(),_(e.checkedWeight===e.totalWeight?1:2);}}function ge(t,o){if(t&1&&(l(0,"span",12),C(1),s()),t&2){let e=a().$implicit,i=a(3);c(),y(i.serializeWeight(e.weight));}}function Ce(t,o){if(t&1){let e=A();l(0,"div",10)(1,"div",11),h("click",function(){let n=u(e).$implicit,p=a(3);return g(p.facade.toggleCheckedItem(n));})("keypress",function(){let n=u(e).$implicit,p=a(3);return g(p.facade.toggleCheckedItem(n));}),C(2),r(3,ge,2,1,"span",12),s()();}if(t&2){let e=o.$implicit,i=a(3);c(),F("ngClass",U(4,le,e.checked)),x("aria-checked",e.checked),c(),$(" ",e.name," "),c(),_(e.weight&&i.facade.trackWeight()?3:-1);}}function fe(t,o){if(t&1&&E(0,Ce,4,6,"div",10,Q),t&2){let e=a().$implicit;v(e.items);}}function Te(t,o){if(t&1){let e=A();l(0,"div",2)(1,"div",4),h("click",function(){let n=u(e).$implicit,p=a();return g(p.facade.toggleCategoryCollapse(n.name));}),l(2,"div",5),r(3,_e,1,0,"app-icon-key-right",6)(4,pe,1,0,"app-icon-key-down",6),l(5,"span",7),C(6),s(),r(7,ue,3,1,"span",8),s(),m(8,"app-items-status",9),s(),r(9,fe,2,0),s();}if(t&2){let e=o.$implicit,i=a();x("aria-label",e.name),c(3),_(e.collapsed?3:4),c(3),y(e.name),c(),_(i.facade.trackWeight()&&e.totalWeight?7:-1),c(),F("count",e.checked)("total",e.items.length),c(),_(e.collapsed?-1:9);}}var te=(()=>{class t{facade=S(P);serializeWeight=I;serializeWeightPartition=N;static ɵfac=function(i){return new(i||t)();};static ɵcmp=k({type:t,selectors:[["app-display-items"]],decls:3,vars:1,consts:()=>{let e;return e="No items available.",[e,[1,"flex","flex-col","items-center"],["role","list",1,"card","mb-1"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","items-center","justify-between",3,"click","keypress","ngClass"],[1,"italic"]];},template:function(i,n){i&1&&(r(0,re,3,0,"div",1),E(1,Te,10,7,"div",2,ce)),i&2&&(_(n.facade.numberOfItems()?-1:0),c(),v(n.facade.packlist()));},dependencies:[ee,q,J,H],encapsulation:2,changeDetection:0});}return t;})();var Se=(t,o)=>o.question;function ke(t,o){if(t&1){let e=A();l(0,"div",1)(1,"p",2),D(2,0),l(3,"button",3),h("click",function(){u(e);let n=a();return g(n.facade.goToRulesEdit());}),s(),w(),s()();}}function he(t,o){t&1&&m(0,"app-icon-checkmark");}function xe(t,o){if(t&1){let e=A();l(0,"div",8),h("click",function(){let n=u(e).$implicit,p=a(2);return g(p.facade.toggleQuestion(n));})("keypress",function(){let n=u(e).$implicit,p=a(2);return g(p.facade.toggleQuestion(n));}),l(1,"span",9),C(2),s(),r(3,he,1,0,"app-icon-checkmark"),s();}if(t&2){let e=o.$implicit,i=a(2);G("disabled",i.facade.isAnswersLockActive()),x("aria-checked",i.facade.isQuestionActive(e))("aria-disabled",i.facade.isAnswersLockActive())("aria-label",e.question),c(2),y(e.question),c(),_(i.facade.isQuestionActive(e)?3:-1);}}function Ae(t,o){t&1&&m(0,"app-icon-lock",7);}function Ie(t,o){t&1&&m(0,"app-icon-lock-open",7);}function Pe(t,o){if(t&1){let e=A();E(0,xe,4,7,"div",4,Se),l(2,"div",5)(3,"button",6),h("click",function(){u(e);let n=a();return g(n.facade.toggleAnswersLock());})("keypress",function(){u(e);let n=a();return g(n.facade.toggleAnswersLock());}),r(4,Ae,1,0,"app-icon-lock",7)(5,Ie,1,0,"app-icon-lock-open",7),s()();}if(t&2){let e=a();v(e.facade.questions()),c(3),x("aria-pressed",e.facade.isAnswersLockActive()),c(),_(e.facade.isAnswersLockActive()?4:5);}}var ie=(()=>{class t{facade=S(P);static ɵfac=function(i){return new(i||t)();};static ɵcmp=k({type:t,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let e;e=" No questions available, please "+"\uFFFD#3\uFFFD"+" create "+"\uFFFD/#3\uFFFD"+" some. ";let i;return i="Lock answers",[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","justify-between",3,"disabled"],[1,"flex","justify-center"],["type","button","role","button","aria-label",i,1,"link",3,"click","keypress"],[1,"h-6","w-6"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","justify-between",3,"click","keypress"],["aria-hidden","true",1,"font-bold"]];},template:function(i,n){i&1&&r(0,ke,4,0,"div",1)(1,Pe,6,2),i&2&&_(n.facade.questionsAvailable()?1:0);},dependencies:[j,X,O],encapsulation:2,changeDetection:0});}return t;})();function ye(t,o){if(t&1&&m(0,"progress",2),t&2){let e=a();F("value",e.facade.checkedWeight())("max",e.facade.totalWeight()),x("aria-label",e.statusLabelText());}}function Fe(t,o){if(t&1&&m(0,"progress",3),t&2){let e=a();F("value",e.facade.numberOfCheckedItems())("max",e.facade.numberOfItems()),x("aria-label",e.statusLabelText());}}function Ee(t,o){if(t&1&&(l(0,"span"),C(1),s()),t&2){let e=a();c(),y(e.serializeWeightPartition(e.facade.checkedWeight(),e.facade.totalWeight()));}}var ne=(()=>{class t{facade=S(P);serializeWeightPartition=N;statusLabelText=f(()=>{let e=this.facade.totalWeight(),i=this.facade.checkedWeight(),n=this.facade.numberOfCheckedItems().toString(),p=this.facade.numberOfItems().toString();return this.facade.trackWeight()?"You have packed "+I(i,void 0,1)+" out of "+I(e,void 0,1)+" by packing "+n+" out of "+p+" items.":"You have packed "+n+" out of "+p+" items.";});static ɵfac=function(i){return new(i||t)();};static ɵcmp=k({type:t,selectors:[["app-packlist-status"]],decls:8,vars:4,consts:()=>{let e;e="weight packing progress";let i;return i="item packing progress",[[1,"card","mb-1"],[1,"mb-1","flex"],["role","progressbar","title",e,"aria-live","polite",1,"grow",3,"value","max"],["role","progressbar","title",i,"aria-live","polite",1,"grow",3,"value","max"],["aria-hidden","true",1,"flex","flex-col","items-center"]];},template:function(i,n){i&1&&(l(0,"div",0)(1,"div",1),r(2,ye,1,3,"progress",2)(3,Fe,1,3,"progress",3),s(),l(4,"div",4)(5,"span"),C(6),s(),r(7,Ee,2,1,"span"),s()()),i&2&&(c(2),_(n.facade.trackWeight()?2:3),c(4),M("",n.facade.numberOfCheckedItems()," / ",n.facade.numberOfItems(),""),c(),_(n.facade.trackWeight()?7:-1));},styles:["progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:2px solid #ccc;border-radius:5px;background-color:transparent}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#999;border-radius:3px}"],changeDetection:0});}return t;})();function ve(t,o){t&1&&m(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function be(t,o){if(t&1){let e=A();l(0,"div",1)(1,"p",2),D(2,0),l(3,"button",3),h("click",function(){u(e);let n=a();return g(n.facade.goToConfigImport());}),s(),l(4,"button",3),h("click",function(){u(e);let n=a();return g(n.facade.goToRulesEdit());}),s(),w(),s()();}}var Ct=(()=>{class t{facade=S(P);static ɵfac=function(i){return new(i||t)();};static ɵcmp=k({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;return e=" No rules available, please "+"\uFFFD#3\uFFFD"+" import "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" or "+"\uFFFD#4\uFFFD"+" create "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" some. ",e=z(e),[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&r(0,ve,3,0)(1,be,5,0,"div",1),i&2&&_(n.facade.rulesAvailable()?0:1);},dependencies:[te,ie,ne],encapsulation:2,changeDetection:0});}return t;})();export{Ct as default};/**i18n:9552fa0fbb6d334e0be38fbfc53a03a3c04e4f027352c7a86b85f26c3861fe82*/