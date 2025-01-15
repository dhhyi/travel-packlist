import{c as L,d as k,e as U,g as l,h as M,i as se,j as E,k as ce,l as F,m as H}from"./chunk-2cebe3b5.js";import{f as ie,g as ne,h as oe,p as z}from"./chunk-33b54222.js";import{c as y,q as ae}from"./chunk-648ea6cc.js";import{d as te}from"./chunk-5281f6a2.js";import"./chunk-8ab849a7.js";import{$ as h,$b as B,Ab as $,Bb as w,Cb as r,Db as s,Ea as R,Eb as u,Gb as v,Hb as V,Ib as Q,Jb as Z,Mb as ee,Nb as P,Ob as o,V as J,Va as c,Yb as C,Zb as b,_b as G,ab as W,gb as A,ia as f,ja as g,lb as p,sb as I,tb as x,ub as K,uc as T,va as j,xb as d}from"./chunk-3bd23466.js";import{a as X,b as Y}from"./chunk-cb4c040a.js";function O(t){return`${t.category}-${t.name}`;}var D=(()=>{class t{router=h(te);state=h(ae);isAccessibleMode=T(()=>this.state.config.accessibility()==="accessible");numberOfItems=T(()=>this.state.active.items().length);checkedItems=this.state.packlist.checkedItems;collapsedCategories=this.state.packlist.collapsedCategories;isItemChecked(e){return this.checkedItems().includes(O(e));}numberOfCheckedItems=T(()=>{let e=this.state.active.items().map(O);return this.checkedItems().filter(i=>e.includes(i)).length;});isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem(e){let i=O(e);this.checkedItems().includes(i)?this.checkedItems.update(n=>n.filter(_=>_!==i)):this.checkedItems.update(n=>[...n,i]);}toggleCategoryCollapse(e){this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);}categoriesOrderBy=T(()=>this.state.config.categorySorting()==="definition"?()=>0:(i,n)=>i.localeCompare(n));packlist=T(()=>{let e=this.state.active.items(),i=this.checkedItems(),n=e.reduce((S,m)=>(S[m.category]||(S[m.category]={name:m.category,items:[],checked:0,collapsed:this.isCategoryCollapsed(m.category),totalWeight:0,checkedWeight:0}),S[m.category].items.push(Y(X({},m),{checked:i.includes(O(m))})),i.includes(O(m))&&(S[m.category].checked++,S[m.category].checkedWeight+=m.weight??0),S[m.category].totalWeight+=m.weight??0,S),{}),_=Object.entries(n).map(S=>S[1]),fe=this.categoriesOrderBy();return _.sort((S,m)=>fe(S.name,m.name)),_;});totalWeight=T(()=>this.packlist().reduce((e,i)=>e+i.totalWeight,0));checkedWeight=T(()=>this.packlist().reduce((e,i)=>e+i.checkedWeight,0));rulesAvailable=T(()=>this.state.rules.parsed().length>0);isAnswersLockActive=this.state.packlist.answersLocked;model=this.state.packlist.answers;activeQuestions=this.state.active.questions;questions=T(()=>this.activeQuestions().filter(e=>!this.isAnswersLockActive()||this.model()[e.variable]));questionsAvailable=T(()=>this.activeQuestions().length>0);toggleQuestion(e){this.isAnswersLockActive()||this.model.update(i=>Y(X({},i),{[e.variable]:!i[e.variable]}));}isQuestionActive(e){return this.model()[e.variable];}toggleAnswersLock(){this.isAnswersLockActive.update(e=>!e);}trackWeight=this.state.config.trackWeight;goToRulesEdit(){this.router.navigate(["/rules"]).then(()=>{this.state.router.rulesMode.set("edit");});}goToConfigImport(){this.router.navigate(["/config"],{fragment:"import"});}static ɵfac=function(i){return new(i||t)();};static ɵprov=J({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function q(t,a){return y(t,void 0,1)+" / "+y(a,void 0,1);}function ge(t,a){t&1&&u(0,"app-icon-checkmark");}function Ce(t,a){if(t&1&&C(0),t&2){let e=o();B(" ",e.count()," / ",e.total(),`
`);}}var re=(()=>{class t{count=j(0);total=j(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=A({type:t,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&p(0,ge,1,0,"app-icon-checkmark")(1,Ce,1,2),i&2&&d(n.count()===n.total()?0:1);},dependencies:[z],encapsulation:2,changeDetection:0});}return t;})();var le=(t,a)=>a.name;function Te(t,a){t&1&&(r(0,"div",1)(1,"p",3),Z(2,0),s()());}function Se(t,a){if(t&1&&C(0),t&2){let e=o(2).$implicit,i=o();G(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function he(t,a){if(t&1&&C(0),t&2){let e=o(2).$implicit,i=o();G(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function ke(t,a){if(t&1&&(r(0,"span",8),p(1,Se,1,1)(2,he,1,1),s()),t&2){let e=o().$implicit;c(),d(e.checkedWeight===e.totalWeight?1:2);}}function Ae(t,a){if(t&1&&(r(0,"span",12),C(1),s()),t&2){let e=o().$implicit,i=o(3);c(),b(i.serializeWeight(e.weight));}}function xe(t,a){if(t&1){let e=v();r(0,"div",10)(1,"div",11),P("click",function(){let n=f(e).$implicit,_=o(3);return g(_.facade.toggleCheckedItem(n));})("keypress",function(){let n=f(e).$implicit,_=o(3);return g(_.facade.toggleCheckedItem(n));}),C(2),p(3,Ae,2,1,"span",12),s()();}if(t&2){let e=a.$implicit,i=o(3);c(),K("text-checked-item",e.checked),x("@animateStrikeThrough",e.checked),I("aria-checked",e.checked),c(),G(" ",e.name," "),c(),d(e.weight&&i.facade.trackWeight()?3:-1);}}function Pe(t,a){if(t&1&&$(0,xe,4,6,"div",10,le),t&2){let e=o().$implicit;w(e.items);}}function Ie(t,a){if(t&1){let e=v();r(0,"div",2)(1,"div",4),P("click",function(){let n=f(e).$implicit,_=o();return g(_.facade.toggleCategoryCollapse(n.name));}),r(2,"div",5),u(3,"app-icon-key-right",6),r(4,"span",7),C(5),s(),p(6,ke,3,1,"span",8),s(),u(7,"app-items-status",9),s(),p(8,Pe,2,0),s();}if(t&2){let e=a.$implicit,i=o();x("@animateItems",e)("@.disabled",i.animationsDisabled()),I("aria-label",e.name),c(3),x("@animateChevron",e.collapsed),c(2),b(e.name),c(),d(i.facade.trackWeight()&&e.totalWeight?6:-1),c(),x("count",e.checked)("total",e.items.length),c(),d(e.collapsed?-1:8);}}var ve=L("animateItems",[E("* <=> *",[U([F('div[role="listitem"]:enter',[l({opacity:0,height:0}),k("0.2s ease-in",l({opacity:1,height:"*"}))],{optional:!0}),F('div[role="listitem"]:leave',[l({opacity:1,height:"*"}),k("0.2s ease-in",l({opacity:0,height:0}))],{optional:!0}),F("@*",[ce()])])])]),ye=L("animateChevron",[M("true",l({transform:"rotate(0)"})),M("false",l({transform:"rotate(90deg)"})),E("false => true",k("0.5s ease-in-out")),E("true => false",k("0.5s ease-in-out",se([l({transform:"rotate(0)"}),l({transform:"rotate(100deg)"}),l({transform:"rotate(80deg)"})])))]),Ee=L("animateStrikeThrough",[M("true",l({textDecorationColor:"inherit"})),M("false",l({textDecorationColor:"transparent"})),E("false => true",k("0.5s ease-in-out")),E("true => false",k("0.5s ease-in-out"))]),_e=(()=>{class t{facade=h(D);serializeWeight=y;serializeWeightPartition=q;animationsDisabled=W(!0);constructor(){R(()=>{this.animationsDisabled.set(this.facade.isAccessibleMode());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=A({type:t,selectors:[["app-display-items"]],decls:3,vars:1,consts:()=>{let e;return e="Keine Gegenst\xE4nde verf\xFCgbar.",[e,[1,"flex","flex-col","items-center"],["role","list",1,"card","mb-1"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","select-none","items-center","justify-between",3,"click","keypress"],[1,"italic"]];},template:function(i,n){i&1&&(p(0,Te,3,0,"div",1),$(1,Ie,9,9,"div",2,le)),i&2&&(d(n.facade.numberOfItems()?-1:0),c(),w(n.facade.packlist()));},dependencies:[re,oe],encapsulation:2,data:{animation:[ve,ye,Ee]},changeDetection:0});}return t;})();var Fe=(t,a)=>a.question;function De(t,a){if(t&1){let e=v();r(0,"div",1)(1,"p",2),V(2,0),r(3,"button",3),P("click",function(){f(e);let n=o();return g(n.facade.goToRulesEdit());}),s(),Q(),s()();}}function be(t,a){t&1&&u(0,"app-icon-checkmark");}function Le(t,a){if(t&1){let e=v();r(0,"div",8),P("click",function(){let n=f(e).$implicit,_=o(2);return g(_.facade.toggleQuestion(n));})("keypress",function(){let n=f(e).$implicit,_=o(2);return g(_.facade.toggleQuestion(n));}),r(1,"span",9),C(2),s(),p(3,be,1,0,"app-icon-checkmark"),s();}if(t&2){let e=a.$implicit,i=o(2);K("disabled",i.facade.isAnswersLockActive()),I("aria-checked",i.facade.isQuestionActive(e))("aria-disabled",i.facade.isAnswersLockActive())("aria-label",e.question),c(2),b(e.question),c(),d(i.facade.isQuestionActive(e)?3:-1);}}function $e(t,a){t&1&&u(0,"app-icon-lock",7);}function we(t,a){t&1&&u(0,"app-icon-lock-open",7);}function Me(t,a){if(t&1){let e=v();r(0,"div"),$(1,Le,4,7,"div",4,Fe),s(),r(3,"div",5)(4,"button",6),P("click",function(){f(e);let n=o();return g(n.facade.toggleAnswersLock());})("keypress",function(){f(e);let n=o();return g(n.facade.toggleAnswersLock());}),p(5,$e,1,0,"app-icon-lock",7)(6,we,1,0,"app-icon-lock-open",7),s()();}if(t&2){let e=o();x("@.disabled",e.animationsDisabled())("@animateQuestions",e.facade.questions()),c(),w(e.facade.questions()),c(3),I("aria-pressed",e.facade.isAnswersLockActive()),c(),d(e.facade.isAnswersLockActive()?5:6);}}var pe={opacity:0,transform:"scale(0.9)",height:0,padding:0,margin:"-2px"},de={opacity:1,transform:"scale(1)",height:"*",padding:"*",margin:"*"},Oe=L("animateQuestions",[E("* <=> *",[U([F("div.card:enter",[l(pe),H(50,[k("0.3s ease-in",l(de))])],{optional:!0}),F("div.card:leave",[l(de),H(50,[k("0.3s ease-in",l(pe))])],{optional:!0}),F("app-icon-checkmark:enter",[l({transform:"translateX(200%)"}),k("0.3s ease-in",l({transform:"translateX(0)"}))],{optional:!0})])])]),me=(()=>{class t{facade=h(D);animationsDisabled=W(!0);constructor(){R(()=>{this.animationsDisabled.set(this.facade.isAccessibleMode());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=A({type:t,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let e;e="Keine Fragen verf\xFCgbar, bitte "+"\uFFFD#3\uFFFD"+" erstelle "+"\uFFFD/#3\uFFFD"+" welche.";let i;return i="Antworten sperren",[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"disabled"],[1,"flex","justify-center"],["type","button","role","button","aria-label",i,1,"link",3,"click","keypress"],[1,"h-6","w-6"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"click","keypress"],["aria-hidden","true",1,"select-none","font-bold"]];},template:function(i,n){i&1&&p(0,De,4,0,"div",1)(1,Me,7,4),i&2&&d(n.facade.questionsAvailable()?1:0);},dependencies:[ie,ne,z],encapsulation:2,data:{animation:[Oe]},changeDetection:0});}return t;})();function Ne(t,a){if(t&1&&u(0,"progress",2),t&2){let e=o();x("value",e.facade.checkedWeight())("max",e.facade.totalWeight()),I("aria-label",e.statusLabelText());}}function Re(t,a){if(t&1&&u(0,"progress",3),t&2){let e=o();x("value",e.facade.numberOfCheckedItems())("max",e.facade.numberOfItems()),I("aria-label",e.statusLabelText());}}function We(t,a){if(t&1&&(r(0,"span"),C(1),s()),t&2){let e=o();c(),b(e.serializeWeightPartition(e.facade.checkedWeight(),e.facade.totalWeight()));}}var ue=(()=>{class t{facade=h(D);serializeWeightPartition=q;statusLabelText=T(()=>{let e=this.facade.totalWeight(),i=this.facade.checkedWeight(),n=this.facade.numberOfCheckedItems().toString(),_=this.facade.numberOfItems().toString();return this.facade.trackWeight()?"Du hast "+y(i,void 0,1)+" von "+y(e,void 0,1)+" gepackt, indem du "+n+" von "+_+" Gegenst\xE4nde gepackt hast.":"Du hast "+n+" von "+_+" Gegenst\xE4nde gepackt.";});static ɵfac=function(i){return new(i||t)();};static ɵcmp=A({type:t,selectors:[["app-packlist-status"]],decls:8,vars:4,consts:()=>{let e;e="Gewicht-Packfortschritt";let i;return i="Gegenstandspackfortschritt",[[1,"card","mb-1"],[1,"mb-1","flex"],["role","progressbar","title",e,"aria-live","polite",1,"grow",3,"value","max"],["role","progressbar","title",i,"aria-live","polite",1,"grow",3,"value","max"],["aria-hidden","true",1,"flex","flex-col","items-center"]];},template:function(i,n){i&1&&(r(0,"div",0)(1,"div",1),p(2,Ne,1,3,"progress",2)(3,Re,1,3,"progress",3),s(),r(4,"div",4)(5,"span"),C(6),s(),p(7,We,2,1,"span"),s()()),i&2&&(c(2),d(n.facade.trackWeight()?2:3),c(4),B("",n.facade.numberOfCheckedItems()," / ",n.facade.numberOfItems(),""),c(),d(n.facade.trackWeight()?7:-1));},encapsulation:2,changeDetection:0});}return t;})();function Ke(t,a){t&1&&u(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function Ve(t,a){if(t&1){let e=v();r(0,"div",1)(1,"p",2),V(2,0),r(3,"button",3),P("click",function(){f(e);let n=o();return g(n.facade.goToConfigImport());}),s(),r(4,"button",3),P("click",function(){f(e);let n=o();return g(n.facade.goToRulesEdit());}),s(),Q(),s()();}}var Et=(()=>{class t{facade=h(D);static ɵfac=function(i){return new(i||t)();};static ɵcmp=A({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;return e="Keine Regeln verf\xFCgbar, bitte "+"\uFFFD#3\uFFFD"+" importiere "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" oder "+"\uFFFD#4\uFFFD"+" erstelle "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" welche.",e=ee(e),[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&p(0,Ke,3,0)(1,Ve,5,0,"div",1),i&2&&d(n.facade.rulesAvailable()?0:1);},dependencies:[_e,me,ue],encapsulation:2,changeDetection:0});}return t;})();export{Et as default};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/