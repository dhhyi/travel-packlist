import{c as Q,d as F,f as A,g as B,h as b,i as j}from"./chunk-93e05be5.js";import{f as ee,g as te,h as ie,i as ne,q as G}from"./chunk-2765a49a.js";import{c as I,q as oe}from"./chunk-648ea6cc.js";import{d as Z}from"./chunk-5281f6a2.js";import"./chunk-8ab849a7.js";import{$ as S,$b as V,Ab as L,Bb as $,Cb as r,Db as s,Ea as O,Eb as m,Gb as P,Hb as R,Ib as W,Jb as H,Mb as J,Nb as k,Ob as o,V as X,Va as c,Yb as g,Zb as E,_b as K,ab as N,gb as h,ia as u,ja as f,lb as _,sb as x,tb as y,ub as D,uc as C,va as Y,xb as p}from"./chunk-3bd23466.js";import{a as U,b as q}from"./chunk-cb4c040a.js";function w(t){return`${t.category}-${t.name}`;}var v=(()=>{class t{router=S(Z);state=S(oe);isAccessibleMode=C(()=>this.state.config.accessibility()==="accessible");numberOfItems=C(()=>this.state.active.items().length);checkedItems=this.state.packlist.checkedItems;collapsedCategories=this.state.packlist.collapsedCategories;isItemChecked(e){return this.checkedItems().includes(w(e));}numberOfCheckedItems=C(()=>{let e=this.state.active.items().map(w);return this.checkedItems().filter(i=>e.includes(i)).length;});isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem(e){let i=w(e);this.checkedItems().includes(i)?this.checkedItems.update(n=>n.filter(l=>l!==i)):this.checkedItems.update(n=>[...n,i]);}toggleCategoryCollapse(e){this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);}categoriesOrderBy=C(()=>this.state.config.categorySorting()==="definition"?()=>0:(i,n)=>i.localeCompare(n));packlist=C(()=>{let e=this.state.active.items(),i=this.checkedItems(),n=e.reduce((T,d)=>(T[d.category]||(T[d.category]={name:d.category,items:[],checked:0,collapsed:this.isCategoryCollapsed(d.category),totalWeight:0,checkedWeight:0}),T[d.category].items.push(q(U({},d),{checked:i.includes(w(d))})),i.includes(w(d))&&(T[d.category].checked++,T[d.category].checkedWeight+=d.weight??0),T[d.category].totalWeight+=d.weight??0,T),{}),l=Object.entries(n).map(T=>T[1]),me=this.categoriesOrderBy();return l.sort((T,d)=>me(T.name,d.name)),l;});totalWeight=C(()=>this.packlist().reduce((e,i)=>e+i.totalWeight,0));checkedWeight=C(()=>this.packlist().reduce((e,i)=>e+i.checkedWeight,0));rulesAvailable=C(()=>this.state.rules.parsed().length>0);isAnswersLockActive=this.state.packlist.answersLocked;model=this.state.packlist.answers;activeQuestions=this.state.active.questions;questions=C(()=>this.activeQuestions().filter(e=>!this.isAnswersLockActive()||this.model()[e.variable]));questionsAvailable=C(()=>this.activeQuestions().length>0);toggleQuestion(e){this.isAnswersLockActive()||this.model.update(i=>q(U({},i),{[e.variable]:!i[e.variable]}));}isQuestionActive(e){return this.model()[e.variable];}toggleAnswersLock(){this.isAnswersLockActive.update(e=>!e);}trackWeight=this.state.config.trackWeight;goToRulesEdit(){this.router.navigate(["/rules"]).then(()=>{this.state.router.rulesMode.set("edit");});}goToConfigImport(){this.router.navigate(["/config"],{fragment:"import"});}static ɵfac=function(i){return new(i||t)();};static ɵprov=X({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function z(t,a){return I(t,void 0,1)+" / "+I(a,void 0,1);}function ue(t,a){t&1&&m(0,"app-icon-checkmark");}function fe(t,a){if(t&1&&g(0),t&2){let e=o();V(" ",e.count()," / ",e.total(),`
`);}}var ae=(()=>{class t{count=Y(0);total=Y(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=h({type:t,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&_(0,ue,1,0,"app-icon-checkmark")(1,fe,1,2),i&2&&p(n.count()===n.total()?0:1);},dependencies:[G],encapsulation:2,changeDetection:0});}return t;})();var se=(t,a)=>a.name;function ge(t,a){t&1&&(r(0,"div",1)(1,"p",3),H(2,0),s()());}function Ce(t,a){t&1&&m(0,"app-icon-key-right",6);}function Te(t,a){t&1&&m(0,"app-icon-key-down",6);}function Se(t,a){if(t&1&&g(0),t&2){let e=o(2).$implicit,i=o();K(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function he(t,a){if(t&1&&g(0),t&2){let e=o(2).$implicit,i=o();K(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function ke(t,a){if(t&1&&(r(0,"span",8),_(1,Se,1,1)(2,he,1,1),s()),t&2){let e=o().$implicit;c(),p(e.checkedWeight===e.totalWeight?1:2);}}function Ae(t,a){if(t&1&&(r(0,"span",12),g(1),s()),t&2){let e=o().$implicit,i=o(3);c(),E(i.serializeWeight(e.weight));}}function xe(t,a){if(t&1){let e=P();r(0,"div",10)(1,"div",11),k("click",function(){let n=u(e).$implicit,l=o(3);return f(l.facade.toggleCheckedItem(n));})("keypress",function(){let n=u(e).$implicit,l=o(3);return f(l.facade.toggleCheckedItem(n));}),g(2),_(3,Ae,2,1,"span",12),s()();}if(t&2){let e=a.$implicit,i=o(3);c(),D("text-checked-item",e.checked),x("aria-checked",e.checked),c(),K(" ",e.name," "),c(),p(e.weight&&i.facade.trackWeight()?3:-1);}}function Pe(t,a){if(t&1&&(r(0,"div"),L(1,xe,4,5,"div",10,se),s()),t&2){let e=o().$implicit,i=o();y("@.disabled",i.animationsDisabled())("@animate",e.items),c(),$(e.items);}}function Ie(t,a){if(t&1){let e=P();r(0,"div",2)(1,"div",4),k("click",function(){let n=u(e).$implicit,l=o();return f(l.facade.toggleCategoryCollapse(n.name));}),r(2,"div",5),_(3,Ce,1,0,"app-icon-key-right",6)(4,Te,1,0,"app-icon-key-down",6),r(5,"span",7),g(6),s(),_(7,ke,3,1,"span",8),s(),m(8,"app-items-status",9),s(),_(9,Pe,3,2,"div"),s();}if(t&2){let e=a.$implicit,i=o();x("aria-label",e.name),c(3),p(e.collapsed?3:4),c(3),E(e.name),c(),p(i.facade.trackWeight()&&e.totalWeight?7:-1),c(),y("count",e.checked)("total",e.items.length),c(),p(e.collapsed?-1:9);}}var ye=Q("animate",[B("* <=> *",[b(":enter",[A({opacity:0,height:0}),F("0.2s ease-in",A({opacity:1,height:"*"}))],{optional:!0}),b(":leave",[A({opacity:1,height:"*"}),F("0.2s ease-in",A({opacity:0,height:0}))],{optional:!0})])]),ce=(()=>{class t{facade=S(v);serializeWeight=I;serializeWeightPartition=z;animationsDisabled=N(!0);constructor(){O(()=>{this.animationsDisabled.set(this.facade.isAccessibleMode());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=h({type:t,selectors:[["app-display-items"]],decls:3,vars:1,consts:()=>{let e;return e="Keine Gegenst\xE4nde verf\xFCgbar.",[e,[1,"flex","flex-col","items-center"],["role","list",1,"card","mb-1"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","items-center","justify-between",3,"click","keypress"],[1,"italic"]];},template:function(i,n){i&1&&(_(0,ge,3,0,"div",1),L(1,Ie,10,7,"div",2,se)),i&2&&(p(n.facade.numberOfItems()?-1:0),c(),$(n.facade.packlist()));},dependencies:[ae,ne,ie],encapsulation:2,data:{animation:[ye]},changeDetection:0});}return t;})();var ve=(t,a)=>a.question;function Ee(t,a){if(t&1){let e=P();r(0,"div",1)(1,"p",2),R(2,0),r(3,"button",3),k("click",function(){u(e);let n=o();return f(n.facade.goToRulesEdit());}),s(),W(),s()();}}function Fe(t,a){if(t&1){let e=P();r(0,"div",8),k("click",function(){let n=u(e).$implicit,l=o(2);return f(l.facade.toggleQuestion(n));})("keypress",function(){let n=u(e).$implicit,l=o(2);return f(l.facade.toggleQuestion(n));}),r(1,"span",9),g(2),s(),m(3,"app-icon-checkmark"),s();}if(t&2){let e=a.$implicit,i=o(2);D("disabled",i.facade.isAnswersLockActive()),x("aria-checked",i.facade.isQuestionActive(e))("aria-disabled",i.facade.isAnswersLockActive())("aria-label",e.question),c(2),E(e.question),c(),D("hidden",!i.facade.isQuestionActive(e));}}function be(t,a){t&1&&m(0,"app-icon-lock",7);}function De(t,a){t&1&&m(0,"app-icon-lock-open",7);}function Le(t,a){if(t&1){let e=P();r(0,"div"),L(1,Fe,4,8,"div",4,ve),s(),r(3,"div",5)(4,"button",6),k("click",function(){u(e);let n=o();return f(n.facade.toggleAnswersLock());})("keypress",function(){u(e);let n=o();return f(n.facade.toggleAnswersLock());}),_(5,be,1,0,"app-icon-lock",7)(6,De,1,0,"app-icon-lock-open",7),s()();}if(t&2){let e=o();y("@.disabled",e.animationsDisabled())("@animate",e.facade.questions()),c(),$(e.facade.questions()),c(3),x("aria-pressed",e.facade.isAnswersLockActive()),c(),p(e.facade.isAnswersLockActive()?5:6);}}var re={opacity:0,transform:"scale(0.9)",height:0,padding:0,margin:"-2px"},le={opacity:1,transform:"scale(1)",height:"*",padding:"*",margin:"*"},_e="0.3s ease-in",$e=Q("animate",[B("* <=> *",[b(":enter",[A(re),j(100,[F(_e,A(le))])],{optional:!0}),b(":leave",[A(le),j(100,[F(_e,A(re))])],{optional:!0})])]),pe=(()=>{class t{facade=S(v);animationsDisabled=N(!0);constructor(){O(()=>{this.animationsDisabled.set(this.facade.isAccessibleMode());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=h({type:t,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let e;e="Keine Fragen verf\xFCgbar, bitte "+"\uFFFD#3\uFFFD"+" erstelle "+"\uFFFD/#3\uFFFD"+" welche.";let i;return i="Antworten sperren",[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between",3,"disabled"],[1,"flex","justify-center"],["type","button","role","button","aria-label",i,1,"link",3,"click","keypress"],[1,"h-6","w-6"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between",3,"click","keypress"],["aria-hidden","true",1,"font-bold"]];},template:function(i,n){i&1&&_(0,Ee,4,0,"div",1)(1,Le,7,4),i&2&&p(n.facade.questionsAvailable()?1:0);},dependencies:[ee,te,G],encapsulation:2,data:{animation:[$e]},changeDetection:0});}return t;})();function we(t,a){if(t&1&&m(0,"progress",2),t&2){let e=o();y("value",e.facade.checkedWeight())("max",e.facade.totalWeight()),x("aria-label",e.statusLabelText());}}function Me(t,a){if(t&1&&m(0,"progress",3),t&2){let e=o();y("value",e.facade.numberOfCheckedItems())("max",e.facade.numberOfItems()),x("aria-label",e.statusLabelText());}}function Oe(t,a){if(t&1&&(r(0,"span"),g(1),s()),t&2){let e=o();c(),E(e.serializeWeightPartition(e.facade.checkedWeight(),e.facade.totalWeight()));}}var de=(()=>{class t{facade=S(v);serializeWeightPartition=z;statusLabelText=C(()=>{let e=this.facade.totalWeight(),i=this.facade.checkedWeight(),n=this.facade.numberOfCheckedItems().toString(),l=this.facade.numberOfItems().toString();return this.facade.trackWeight()?"Du hast "+I(i,void 0,1)+" von "+I(e,void 0,1)+" gepackt, indem du "+n+" von "+l+" Gegenst\xE4nde gepackt hast.":"Du hast "+n+" von "+l+" Gegenst\xE4nde gepackt.";});static ɵfac=function(i){return new(i||t)();};static ɵcmp=h({type:t,selectors:[["app-packlist-status"]],decls:8,vars:4,consts:()=>{let e;e="Gewicht-Packfortschritt";let i;return i="Gegenstandspackfortschritt",[[1,"card","mb-1"],[1,"mb-1","flex"],["role","progressbar","title",e,"aria-live","polite",1,"grow",3,"value","max"],["role","progressbar","title",i,"aria-live","polite",1,"grow",3,"value","max"],["aria-hidden","true",1,"flex","flex-col","items-center"]];},template:function(i,n){i&1&&(r(0,"div",0)(1,"div",1),_(2,we,1,3,"progress",2)(3,Me,1,3,"progress",3),s(),r(4,"div",4)(5,"span"),g(6),s(),_(7,Oe,2,1,"span"),s()()),i&2&&(c(2),p(n.facade.trackWeight()?2:3),c(4),V("",n.facade.numberOfCheckedItems()," / ",n.facade.numberOfItems(),""),c(),p(n.facade.trackWeight()?7:-1));},encapsulation:2,changeDetection:0});}return t;})();function Ne(t,a){t&1&&m(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function Re(t,a){if(t&1){let e=P();r(0,"div",1)(1,"p",2),R(2,0),r(3,"button",3),k("click",function(){u(e);let n=o();return f(n.facade.goToConfigImport());}),s(),r(4,"button",3),k("click",function(){u(e);let n=o();return f(n.facade.goToRulesEdit());}),s(),W(),s()();}}var It=(()=>{class t{facade=S(v);static ɵfac=function(i){return new(i||t)();};static ɵcmp=h({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;return e="Keine Regeln verf\xFCgbar, bitte "+"\uFFFD#3\uFFFD"+" importiere "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" oder "+"\uFFFD#4\uFFFD"+" erstelle "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" welche.",e=J(e),[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&_(0,Ne,3,0)(1,Re,5,0,"div",1),i&2&&p(n.facade.rulesAvailable()?0:1);},dependencies:[ce,pe,de],encapsulation:2,changeDetection:0});}return t;})();export{It as default};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/