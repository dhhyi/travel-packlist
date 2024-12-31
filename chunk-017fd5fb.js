import{f as Z,g as ee,h as te,i as ie,q as R}from"./chunk-aba70abd.js";import{b as O,q as F}from"./chunk-0336efe5.js";import{d as J}from"./chunk-913e316e.js";import{$a as _,Aa as l,Ab as L,Eb as G,Fb as I,Gb as f,Ib as V,Ka as T,Kb as X,Lb as Y,Pa as p,Tb as y,W as K,Xa as v,aa as k,ab as z,cb as E,cc as N,db as A,eb as c,ec as H,fb as s,gb as C,ia as m,ib as h,ja as u,jb as B,kb as q,lb as Q,ob as U,pb as x,qb as o,sa as j,ta as D,xb as g,yb as b,zb as M}from"./chunk-2ccdc547.js";import{a as w,b as $}from"./chunk-794ac7e9.js";function ce(t,a){t&1&&C(0,"app-icon-checkmark");}function re(t,a){if(t&1&&g(0),t&2){let e=o();L(" ",e.count()," / ",e.total(),`
`);}}var ne=(()=>{class t{count=D(0);total=D(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=T({type:t,selectors:[["app-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&p(0,ce,1,0,"app-icon-checkmark")(1,re,1,2),i&2&&_(n.count()===n.total()?0:1);},dependencies:[R],encapsulation:2,changeDetection:0});}return t;})();function oe(t){return`${t.category}-${t.name}`;}var ae=(()=>{class t{state=k(F);checkedItems=this.state.signal("checkedItems");collapsedCategories=this.state.signal("collapsedCategories");isItemChecked(e){return this.checkedItems().includes(oe(e));}isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem(e){let i=oe(e);this.checkedItems().includes(i)?this.checkedItems.update(n=>n.filter(r=>r!==i)):this.checkedItems.update(n=>[...n,i]);}toggleCategoryCollapse(e){this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);}packlist=y(()=>{let e=this.state.signal("activeItems")(),i=0,n=0,r=0,P=e.reduce((S,d)=>(S[d.category]||(S[d.category]={items:[],checked:0,collapsed:this.isCategoryCollapsed(d.category),totalWeight:0,checkedWeight:0}),S[d.category].items.push($(w({},d),{checked:this.isItemChecked(d)})),this.isItemChecked(d)&&(i++,S[d.category].checked++,n+=d.weight??0,S[d.category].checkedWeight+=d.weight??0),S[d.category].totalWeight+=d.weight??0,r+=d.weight??0,S),{});return{numberOfItems:e.length,categories:P,checked:i,checkedWeight:n,totalWeight:r};});static ɵfac=function(i){return new(i||t)();};static ɵprov=K({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var pe=(t,a)=>a.key,_e=t=>({"text-slate-600 line-through dark:text-slate-400":t});function de(t,a){if(t&1&&(c(0,"div",3),C(1,"progress",4),s(),c(2,"div",2)(3,"span"),g(4),s(),c(5,"span"),g(6),s()()),t&2){let e=o(),i=f(1),n=f(2),r=f(3),P=f(4);l(),v("value",r)("max",P),l(3),L("",i," / ",n,""),l(2),b(e.serializeWeightPartition(r,P));}}function me(t,a){if(t&1&&(c(0,"div",3),C(1,"progress",4),s(),c(2,"div",5)(3,"span"),g(4),s()()),t&2){o();let e=f(1),i=f(2);l(),v("value",e)("max",i),l(3),L("",e," / ",i,"");}}function ue(t,a){t&1&&(c(0,"div",2)(1,"p",6),Q(2,0),s()());}function Ce(t,a){t&1&&C(0,"app-icon-key-right",9);}function ge(t,a){t&1&&C(0,"app-icon-key-down",9);}function fe(t,a){if(t&1&&g(0),t&2){o(2);let e=f(1),i=o();M(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function xe(t,a){if(t&1&&g(0),t&2){o(2);let e=f(1),i=o();M(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function ke(t,a){if(t&1&&(c(0,"span",11),p(1,fe,1,1)(2,xe,1,1),s()),t&2){o();let e=f(1);l(),_(e.checkedWeight===e.totalWeight?1:2);}}function he(t,a){if(t&1&&(c(0,"span",16),g(1),s()),t&2){let e=o().$implicit,i=o(3);l(),b(i.serializeWeight(e.weight));}}function Te(t,a){if(t&1){let e=h();c(0,"li",15),x("click",function(){let n=m(e).$implicit,r=o(3);return u(r.toggleCheckedItem(n));})("keypress",function(){let n=m(e).$implicit,r=o(3);return u(r.toggleCheckedItem(n));}),g(1),p(2,he,2,1,"span",16),s();}if(t&2){let e=a.$implicit,i=o(3);v("ngClass",V(3,_e,e.checked)),l(),M(" ",e.name," "),l(),_(e.weight&&i.trackWeight()?2:-1);}}function ve(t,a){if(t&1&&(c(0,"ul",13),E(1,Te,3,5,"li",14,z),s()),t&2){o();let e=f(1);l(),A(e.items);}}function ye(t,a){if(t&1){let e=h();G(0)(1),c(2,"div",1)(3,"div",7),x("click",function(){m(e);let n=f(0),r=o();return u(r.toggleCategoryCollapse(n));})("keypress",function(){m(e);let n=f(0),r=o();return u(r.toggleCategoryCollapse(n));}),c(4,"div",8),p(5,Ce,1,0,"app-icon-key-right",9)(6,ge,1,0,"app-icon-key-down",9),c(7,"span",10),g(8),s(),p(9,ke,3,1,"span",11),s(),C(10,"app-status",12),s(),p(11,ve,3,0,"ul",13),s();}if(t&2){let e=a.$implicit,i=o(),n=I(e.key);l();let r=I(e.value);l(4),_(r.collapsed?5:6),l(3),b(n),l(),_(i.trackWeight()&&r.totalWeight?9:-1),l(),v("count",r.checked)("total",r.items.length),l(),_(r.collapsed?-1:11);}}var le=(()=>{class t{state=k(F);facade=k(ae);view=this.facade.packlist;orderBy=y(()=>this.state.signal("categorySorting")()==="definition"?()=>0:void 0);trackWeight=this.state.signal("trackWeight");serializeWeight=O;serializeWeightPartition(e,i){return O(e,void 0,1)+" / "+O(i,void 0,1);}toggleCheckedItem(e){this.facade.toggleCheckedItem(e);}toggleCategoryCollapse(e){this.facade.toggleCategoryCollapse(e);}static ɵfac=function(i){return new(i||t)();};static ɵcmp=T({type:t,selectors:[["app-display-items"]],decls:11,vars:9,consts:()=>{let e;return e="No items available.",[e,[1,"card","mb-1"],[1,"flex","flex-col","items-center"],[1,"mb-1","flex"],[1,"grow",3,"value","max"],[1,"flex","justify-center"],[1,"text-center"],["role","button","tabindex","0",1,"flex","justify-between",3,"click","keypress"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],[1,"pt-2"],["role","button","tabindex","0",1,"flex","justify-between",3,"ngClass"],["role","button","tabindex","0",1,"flex","justify-between",3,"click","keypress","ngClass"],[1,"italic"]];},template:function(i,n){i&1&&(c(0,"div",1),G(1)(2)(3)(4),p(5,de,7,5)(6,me,5,4),s(),p(7,ue,3,0,"div",2),E(8,ye,12,8,"div",1,pe),X(10,"keyvalue")),i&2&&(l(),I(n.view().checked),l(),I(n.view().numberOfItems),l(),I(n.view().checkedWeight),l(),I(n.view().totalWeight),l(),_(n.trackWeight()?5:6),l(2),_(n.view().numberOfItems?-1:7),l(),A(Y(10,6,n.view().categories,n.orderBy())));},dependencies:[H,ne,N,ie,te],styles:["progress[_ngcontent-%COMP%]::-webkit-progress-bar{border:2px solid #ccc;border-radius:5px;background-color:transparent}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#999;border-radius:3px}"],changeDetection:0});}return t;})();function Fe(t,a){t&1&&(c(0,"span"),C(1,"app-icon-checkmark"),s());}function Se(t,a){if(t&1){let e=h();c(0,"div",1),x("click",function(){m(e);let n=o();return u(n.click());})("keypress",function(){m(e);let n=o();return u(n.click());}),c(1,"span",2),g(2),s(),p(3,Fe,2,0,"span"),s();}if(t&2){let e=o();l(2),b(a),l(),_(e.value()?3:-1);}}var se=(()=>{class t{question=D(void 0);value=D(void 0);valueChange=j();state=k(F);click(){this.state.get("answersLocked")||this.valueChange.emit(!this.value());}static ɵfac=function(i){return new(i||t)();};static ɵcmp=T({type:t,selectors:[["app-display-question"]],inputs:{question:[1,"question"],value:[1,"value"]},outputs:{valueChange:"valueChange"},decls:1,vars:1,consts:[["role","button","tabindex","0",1,"flex","flex-row","justify-between"],["role","button","tabindex","0",1,"flex","flex-row","justify-between",3,"click","keypress"],[1,"font-bold"]],template:function(i,n){if(i&1&&p(0,Se,4,2,"div",0),i&2){let r;_((r=n.question())?0:-1,r);}},dependencies:[R],encapsulation:2,changeDetection:0});}return t;})();var Ie=(t,a)=>a.question,Pe=t=>({disabled:t});function De(t,a){if(t&1){let e=h();c(0,"div",2)(1,"p",3),B(2,0),c(3,"button",4),x("click",function(){m(e);let n=o(2);return u(n.goToRulesEdit());}),s(),q(),s()();}}function be(t,a){if(t&1){let e=h();c(0,"div",5)(1,"app-display-question",9),x("valueChange",function(n){let r=m(e).$implicit,P=o(3);return u(P.modelChange(r.variable,n));}),s()();}if(t&2){let e=a.$implicit,i=o(3);v("ngClass",V(3,Pe,i.isLockActive())),l(),v("question",e.question)("value",i.model()[e.variable]);}}function Ee(t,a){t&1&&C(0,"app-icon-lock",8);}function Ae(t,a){t&1&&C(0,"app-icon-lock-open",8);}function Le(t,a){if(t&1){let e=h();E(0,be,2,5,"div",5,Ie),c(2,"div",6)(3,"button",7),x("click",function(){m(e);let n=o(2);return u(n.toggleLock());}),p(4,Ee,1,0,"app-icon-lock",8)(5,Ae,1,0,"app-icon-lock-open",8),s()(),C(6,"app-display-items");}if(t&2){let e=o(2);A(e.questions()),l(4),_(e.isLockActive()?4:5);}}function we(t,a){if(t&1&&p(0,De,4,0,"div",2)(1,Le,7,1),t&2){let e=o();_(e.questionsAvailable()?1:0);}}function $e(t,a){if(t&1){let e=h();c(0,"div",2)(1,"p",3),B(2,1),c(3,"button",4),x("click",function(){m(e);let n=o();return u(n.goToConfigImport());}),s(),c(4,"button",4),x("click",function(){m(e);let n=o();return u(n.goToRulesEdit());}),s(),q(),s()();}}var gt=(()=>{class t{router=k(J);state=k(F);activeQuestions=this.state.signal("activeQuestions");isLockActive=this.state.signal("answersLocked");model=this.state.signal("answers");rulesAvailable=y(()=>this.state.signal("numberOfRules")()>0);questions=y(()=>this.activeQuestions().filter(e=>!this.isLockActive()||this.model()[e.variable]));questionsAvailable=y(()=>this.activeQuestions().length>0);modelChange(e,i){this.model.update(n=>$(w({},n),{[e]:i}));}toggleLock(){this.isLockActive.update(e=>!e);}goToRulesEdit(){this.router.navigate(["/rules"]).then(()=>{this.state.set("rulesMode","edit");});}goToConfigImport(){this.router.navigate(["/config"],{fragment:"import"});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=T({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;e=" No questions available, please "+"\uFFFD#3\uFFFD"+" create "+"\uFFFD/#3\uFFFD"+" some. ";let i;return i=" No rules available, please "+"\uFFFD#3\uFFFD"+" import "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" or "+"\uFFFD#4\uFFFD"+" create "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" some. ",i=U(i),[e,i,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],[1,"card","mb-1",3,"ngClass"],[1,"flex","justify-center"],["type","button",1,"link",3,"click"],[1,"h-6","w-6"],[3,"valueChange","question","value"]];},template:function(i,n){i&1&&p(0,we,2,1)(1,$e,5,0,"div",2),i&2&&_(n.rulesAvailable()?0:1);},dependencies:[se,le,Z,ee,N],encapsulation:2,changeDetection:0});}return t;})();export{gt as default};/**i18n:0f1ac2006305e21a124f56a06385be2074bad8b1d623218306b95cd4058b433e*/