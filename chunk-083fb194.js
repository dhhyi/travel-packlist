import{f as Y,g as j,h as q,i as X,q as N}from"./chunk-ac459377.js";import{b as I,q as H}from"./chunk-01b1a2d5.js";import{d as U}from"./chunk-e15b0d87.js";import{Aa as c,Cb as C,Db as E,Eb as M,Fb as O,Ma as h,Ra as r,W as G,Ya as A,Za as F,Zb as g,_a as b,aa as S,bb as _,cb as Q,eb as y,fb as v,gb as l,hb as s,ia as u,ib as m,ja as f,kb as x,lb as $,mb as w,nb as B,qb as z,rb as k,sb as a,ta as V}from"./chunk-e83faf22.js";import{a as W,b as K}from"./chunk-71f6c2da.js";function L(t){return`${t.category}-${t.name}`;}var P=(()=>{class t{router=S(U);state=S(H);numberOfItems=g(()=>this.state.activeItems().length);checkedItems=this.state.checkedItems;collapsedCategories=this.state.collapsedCategories;isItemChecked(e){return this.checkedItems().includes(L(e));}numberOfCheckedItems=g(()=>{let e=this.state.activeItems().map(L);return this.checkedItems().filter(i=>e.includes(i)).length;});isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem(e){let i=L(e);this.checkedItems().includes(i)?this.checkedItems.update(n=>n.filter(p=>p!==i)):this.checkedItems.update(n=>[...n,i]);}toggleCategoryCollapse(e){this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);}categoriesOrderBy=g(()=>this.state.categorySorting()==="definition"?()=>0:(i,n)=>i.localeCompare(n));packlist=g(()=>{let e=this.state.activeItems(),i=this.checkedItems(),n=e.reduce((T,d)=>(T[d.category]||(T[d.category]={name:d.category,items:[],checked:0,collapsed:this.isCategoryCollapsed(d.category),totalWeight:0,checkedWeight:0}),T[d.category].items.push(K(W({},d),{checked:i.includes(L(d))})),i.includes(L(d))&&(T[d.category].checked++,T[d.category].checkedWeight+=d.weight??0),T[d.category].totalWeight+=d.weight??0,T),{}),p=Object.entries(n).map(T=>T[1]),ie=this.categoriesOrderBy();return p.sort((T,d)=>ie(T.name,d.name)),p;});totalWeight=g(()=>this.packlist().reduce((e,i)=>e+i.totalWeight,0));checkedWeight=g(()=>this.packlist().reduce((e,i)=>e+i.checkedWeight,0));rulesAvailable=g(()=>this.state.parsedRules().length>0);isAnswersLockActive=this.state.answersLocked;model=this.state.answers;activeQuestions=this.state.activeQuestions;questions=g(()=>this.activeQuestions().filter(e=>!this.isAnswersLockActive()||this.model()[e.variable]));questionsAvailable=g(()=>this.activeQuestions().length>0);toggleQuestion(e){this.isAnswersLockActive()||this.model.update(i=>K(W({},i),{[e.variable]:!i[e.variable]}));}isQuestionActive(e){return this.model()[e.variable];}toggleAnswersLock(){this.isAnswersLockActive.update(e=>!e);}trackWeight=this.state.trackWeight;goToRulesEdit(){this.router.navigate(["/rules"]).then(()=>{this.state.rulesMode.set("edit");});}goToConfigImport(){this.router.navigate(["/config"],{fragment:"import"});}static ɵfac=function(i){return new(i||t)();};static ɵprov=G({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function R(t,o){return I(t,void 0,1)+" / "+I(o,void 0,1);}function ne(t,o){t&1&&m(0,"app-icon-checkmark");}function oe(t,o){if(t&1&&C(0),t&2){let e=a();O(" ",e.count()," / ",e.total(),`
`);}}var J=(()=>{class t{count=V(0);total=V(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=h({type:t,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&r(0,ne,1,0,"app-icon-checkmark")(1,oe,1,2),i&2&&_(n.count()===n.total()?0:1);},dependencies:[N],encapsulation:2,changeDetection:0});}return t;})();var ae=(t,o)=>o.name;function se(t,o){t&1&&(l(0,"div",1)(1,"p",3),B(2,0),s()());}function ce(t,o){t&1&&m(0,"app-icon-key-right",6);}function le(t,o){t&1&&m(0,"app-icon-key-down",6);}function re(t,o){if(t&1&&C(0),t&2){let e=a(2).$implicit,i=a();M(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function _e(t,o){if(t&1&&C(0),t&2){let e=a(2).$implicit,i=a();M(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function pe(t,o){if(t&1&&(l(0,"span",8),r(1,re,1,1)(2,_e,1,1),s()),t&2){let e=a().$implicit;c(),_(e.checkedWeight===e.totalWeight?1:2);}}function de(t,o){if(t&1&&(l(0,"span",12),C(1),s()),t&2){let e=a().$implicit,i=a(3);c(),E(i.serializeWeight(e.weight));}}function me(t,o){if(t&1){let e=x();l(0,"div",10)(1,"div",11),k("click",function(){let n=u(e).$implicit,p=a(3);return f(p.facade.toggleCheckedItem(n));})("keypress",function(){let n=u(e).$implicit,p=a(3);return f(p.facade.toggleCheckedItem(n));}),C(2),r(3,de,2,1,"span",12),s()();}if(t&2){let e=o.$implicit,i=a(3);c(),b("text-checked-item",e.checked),A("aria-checked",e.checked),c(),M(" ",e.name," "),c(),_(e.weight&&i.facade.trackWeight()?3:-1);}}function ue(t,o){if(t&1&&y(0,me,4,5,"div",10,Q),t&2){let e=a().$implicit;v(e.items);}}function fe(t,o){if(t&1){let e=x();l(0,"div",2)(1,"div",4),k("click",function(){let n=u(e).$implicit,p=a();return f(p.facade.toggleCategoryCollapse(n.name));}),l(2,"div",5),r(3,ce,1,0,"app-icon-key-right",6)(4,le,1,0,"app-icon-key-down",6),l(5,"span",7),C(6),s(),r(7,pe,3,1,"span",8),s(),m(8,"app-items-status",9),s(),r(9,ue,2,0),s();}if(t&2){let e=o.$implicit,i=a();A("aria-label",e.name),c(3),_(e.collapsed?3:4),c(3),E(e.name),c(),_(i.facade.trackWeight()&&e.totalWeight?7:-1),c(),F("count",e.checked)("total",e.items.length),c(),_(e.collapsed?-1:9);}}var Z=(()=>{class t{facade=S(P);serializeWeight=I;serializeWeightPartition=R;static ɵfac=function(i){return new(i||t)();};static ɵcmp=h({type:t,selectors:[["app-display-items"]],decls:3,vars:1,consts:()=>{let e;return e="No items available.",[e,[1,"flex","flex-col","items-center"],["role","list",1,"card","mb-1"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","items-center","justify-between",3,"click","keypress"],[1,"italic"]];},template:function(i,n){i&1&&(r(0,se,3,0,"div",1),y(1,fe,10,7,"div",2,ae)),i&2&&(_(n.facade.numberOfItems()?-1:0),c(),v(n.facade.packlist()));},dependencies:[J,X,q],encapsulation:2,changeDetection:0});}return t;})();var Ce=(t,o)=>o.question;function ge(t,o){if(t&1){let e=x();l(0,"div",1)(1,"p",2),$(2,0),l(3,"button",3),k("click",function(){u(e);let n=a();return f(n.facade.goToRulesEdit());}),s(),w(),s()();}}function Te(t,o){t&1&&m(0,"app-icon-checkmark");}function Se(t,o){if(t&1){let e=x();l(0,"div",8),k("click",function(){let n=u(e).$implicit,p=a(2);return f(p.facade.toggleQuestion(n));})("keypress",function(){let n=u(e).$implicit,p=a(2);return f(p.facade.toggleQuestion(n));}),l(1,"span",9),C(2),s(),r(3,Te,1,0,"app-icon-checkmark"),s();}if(t&2){let e=o.$implicit,i=a(2);b("disabled",i.facade.isAnswersLockActive()),A("aria-checked",i.facade.isQuestionActive(e))("aria-disabled",i.facade.isAnswersLockActive())("aria-label",e.question),c(2),E(e.question),c(),_(i.facade.isQuestionActive(e)?3:-1);}}function he(t,o){t&1&&m(0,"app-icon-lock",7);}function ke(t,o){t&1&&m(0,"app-icon-lock-open",7);}function Ae(t,o){if(t&1){let e=x();y(0,Se,4,7,"div",4,Ce),l(2,"div",5)(3,"button",6),k("click",function(){u(e);let n=a();return f(n.facade.toggleAnswersLock());})("keypress",function(){u(e);let n=a();return f(n.facade.toggleAnswersLock());}),r(4,he,1,0,"app-icon-lock",7)(5,ke,1,0,"app-icon-lock-open",7),s()();}if(t&2){let e=a();v(e.facade.questions()),c(3),A("aria-pressed",e.facade.isAnswersLockActive()),c(),_(e.facade.isAnswersLockActive()?4:5);}}var ee=(()=>{class t{facade=S(P);static ɵfac=function(i){return new(i||t)();};static ɵcmp=h({type:t,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let e;e=" No questions available, please "+"\uFFFD#3\uFFFD"+" create "+"\uFFFD/#3\uFFFD"+" some. ";let i;return i="Lock answers",[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between",3,"disabled"],[1,"flex","justify-center"],["type","button","role","button","aria-label",i,1,"link",3,"click","keypress"],[1,"h-6","w-6"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between",3,"click","keypress"],["aria-hidden","true",1,"font-bold"]];},template:function(i,n){i&1&&r(0,ge,4,0,"div",1)(1,Ae,6,2),i&2&&_(n.facade.questionsAvailable()?1:0);},dependencies:[Y,j,N],encapsulation:2,changeDetection:0});}return t;})();function xe(t,o){if(t&1&&m(0,"progress",2),t&2){let e=a();F("value",e.facade.checkedWeight())("max",e.facade.totalWeight()),A("aria-label",e.statusLabelText());}}function Ie(t,o){if(t&1&&m(0,"progress",3),t&2){let e=a();F("value",e.facade.numberOfCheckedItems())("max",e.facade.numberOfItems()),A("aria-label",e.statusLabelText());}}function Pe(t,o){if(t&1&&(l(0,"span"),C(1),s()),t&2){let e=a();c(),E(e.serializeWeightPartition(e.facade.checkedWeight(),e.facade.totalWeight()));}}var te=(()=>{class t{facade=S(P);serializeWeightPartition=R;statusLabelText=g(()=>{let e=this.facade.totalWeight(),i=this.facade.checkedWeight(),n=this.facade.numberOfCheckedItems().toString(),p=this.facade.numberOfItems().toString();return this.facade.trackWeight()?"You have packed "+I(i,void 0,1)+" out of "+I(e,void 0,1)+" by packing "+n+" out of "+p+" items.":"You have packed "+n+" out of "+p+" items.";});static ɵfac=function(i){return new(i||t)();};static ɵcmp=h({type:t,selectors:[["app-packlist-status"]],decls:8,vars:4,consts:()=>{let e;e="weight packing progress";let i;return i="item packing progress",[[1,"card","mb-1"],[1,"mb-1","flex"],["role","progressbar","title",e,"aria-live","polite",1,"grow",3,"value","max"],["role","progressbar","title",i,"aria-live","polite",1,"grow",3,"value","max"],["aria-hidden","true",1,"flex","flex-col","items-center"]];},template:function(i,n){i&1&&(l(0,"div",0)(1,"div",1),r(2,xe,1,3,"progress",2)(3,Ie,1,3,"progress",3),s(),l(4,"div",4)(5,"span"),C(6),s(),r(7,Pe,2,1,"span"),s()()),i&2&&(c(2),_(n.facade.trackWeight()?2:3),c(4),O("",n.facade.numberOfCheckedItems()," / ",n.facade.numberOfItems(),""),c(),_(n.facade.trackWeight()?7:-1));},encapsulation:2,changeDetection:0});}return t;})();function Ee(t,o){t&1&&m(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function Fe(t,o){if(t&1){let e=x();l(0,"div",1)(1,"p",2),$(2,0),l(3,"button",3),k("click",function(){u(e);let n=a();return f(n.facade.goToConfigImport());}),s(),l(4,"button",3),k("click",function(){u(e);let n=a();return f(n.facade.goToRulesEdit());}),s(),w(),s()();}}var dt=(()=>{class t{facade=S(P);static ɵfac=function(i){return new(i||t)();};static ɵcmp=h({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;return e=" No rules available, please "+"\uFFFD#3\uFFFD"+" import "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" or "+"\uFFFD#4\uFFFD"+" create "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" some. ",e=z(e),[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&r(0,Ee,3,0)(1,Fe,5,0,"div",1),i&2&&_(n.facade.rulesAvailable()?0:1);},dependencies:[Z,ee,te],encapsulation:2,changeDetection:0});}return t;})();export{dt as default};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/