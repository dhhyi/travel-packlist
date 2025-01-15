import{c as L,d as S,e as O,g as l,h as N,i as pe,j as F,k as ee,l as te,m as $,n as x,o as ie}from"./chunk-ed13faaa.js";import{f as re,g as ce,h as le,p as q}from"./chunk-33b54222.js";import{c as E,q as _e}from"./chunk-2b440127.js";import{d as se}from"./chunk-5281f6a2.js";import"./chunk-8ab849a7.js";import{$ as k,$b as U,Ab as w,Bb as M,Cb as c,Db as s,Ea as K,Eb as u,Gb as y,Hb as G,Ib as B,Jb as oe,Mb as ae,Nb as P,Ob as o,V as ne,Va as r,Yb as C,Zb as b,_b as z,ab as V,gb as I,ia as f,ja as g,lb as p,sb as v,tb as A,ub as Q,uc as T,va as Z,xb as d}from"./chunk-3bd23466.js";import{a as H,b as J}from"./chunk-cb4c040a.js";var de={opacity:0,transform:"scale(0.9)",height:0,padding:0,margin:"-2px"},me={opacity:1,transform:"scale(1)",height:"*",padding:"*",margin:"*"},X=ee([l(de),ie(50,[S("0.3s ease-in",l(me))])]),Y=ee([l(me),ie(50,[S("0.3s ease-in",l(de))])]);function R(t){return`${t.category}-${t.name}`;}var D=(()=>{class t{router=k(se);state=k(_e);isAccessibleMode=T(()=>this.state.config.accessibility()==="accessible");numberOfItems=T(()=>this.state.active.items().length);checkedItems=this.state.packlist.checkedItems;collapsedCategories=this.state.packlist.collapsedCategories;isItemChecked(e){return this.checkedItems().includes(R(e));}numberOfCheckedItems=T(()=>{let e=this.state.active.items().map(R);return this.checkedItems().filter(i=>e.includes(i)).length;});isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem(e){let i=R(e);this.checkedItems().includes(i)?this.checkedItems.update(n=>n.filter(_=>_!==i)):this.checkedItems.update(n=>[...n,i]);}toggleCategoryCollapse(e){this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);}categoriesOrderBy=T(()=>this.state.config.categorySorting()==="definition"?()=>0:(i,n)=>i.localeCompare(n));packlist=T(()=>{let e=this.state.active.items(),i=this.checkedItems(),n=e.reduce((h,m)=>(h[m.category]||(h[m.category]={name:m.category,items:[],checked:0,collapsed:this.isCategoryCollapsed(m.category),totalWeight:0,checkedWeight:0}),h[m.category].items.push(J(H({},m),{checked:i.includes(R(m))})),i.includes(R(m))&&(h[m.category].checked++,h[m.category].checkedWeight+=m.weight??0),h[m.category].totalWeight+=m.weight??0,h),{}),_=Object.entries(n).map(h=>h[1]),Se=this.categoriesOrderBy();return _.sort((h,m)=>Se(h.name,m.name)),_;});totalWeight=T(()=>this.packlist().reduce((e,i)=>e+i.totalWeight,0));checkedWeight=T(()=>this.packlist().reduce((e,i)=>e+i.checkedWeight,0));rulesAvailable=T(()=>this.state.rules.parsed().length>0);isAnswersLockActive=this.state.packlist.answersLocked;model=this.state.packlist.answers;activeQuestions=this.state.active.questions;questions=T(()=>this.activeQuestions().filter(e=>!this.isAnswersLockActive()||this.model()[e.variable]));questionsAvailable=T(()=>this.activeQuestions().length>0);toggleQuestion(e){this.isAnswersLockActive()||this.model.update(i=>J(H({},i),{[e.variable]:!i[e.variable]}));}isQuestionActive(e){return this.model()[e.variable];}toggleAnswersLock(){this.isAnswersLockActive.update(e=>!e);}trackWeight=this.state.config.trackWeight;goToRulesEdit(){this.router.navigate(["/rules"]).then(()=>{this.state.router.rulesMode.set("edit");});}goToConfigImport(){this.router.navigate(["/config"],{fragment:"import"});}static ɵfac=function(i){return new(i||t)();};static ɵprov=ne({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function j(t,a){return E(t,void 0,1)+" / "+E(a,void 0,1);}function he(t,a){t&1&&u(0,"app-icon-checkmark");}function ke(t,a){if(t&1&&C(0),t&2){let e=o();U(" ",e.count()," / ",e.total(),`
`);}}var ue=(()=>{class t{count=Z(0);total=Z(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&p(0,he,1,0,"app-icon-checkmark")(1,ke,1,2),i&2&&d(n.count()===n.total()?0:1);},dependencies:[q],encapsulation:2,changeDetection:0});}return t;})();var fe=(t,a)=>a.name;function Ae(t,a){t&1&&(c(0,"div",1)(1,"p",4),oe(2,0),s()());}function xe(t,a){if(t&1&&C(0),t&2){let e=o(2).$implicit,i=o();z(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function Ie(t,a){if(t&1&&C(0),t&2){let e=o(2).$implicit,i=o();z(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function Pe(t,a){if(t&1&&(c(0,"span",9),p(1,xe,1,1)(2,Ie,1,1),s()),t&2){let e=o().$implicit;r(),d(e.checkedWeight===e.totalWeight?1:2);}}function ve(t,a){if(t&1&&(c(0,"span",13),C(1),s()),t&2){let e=o().$implicit,i=o(3);r(),b(i.serializeWeight(e.weight));}}function ye(t,a){if(t&1){let e=y();c(0,"div",11)(1,"div",12),P("click",function(){let n=f(e).$implicit,_=o(3);return g(_.facade.toggleCheckedItem(n));})("keypress",function(){let n=f(e).$implicit,_=o(3);return g(_.facade.toggleCheckedItem(n));}),C(2),p(3,ve,2,1,"span",13),s()();}if(t&2){let e=a.$implicit,i=o(3);r(),Q("text-checked-item",e.checked),A("@animateStrikeThrough",e.checked),v("aria-checked",e.checked),r(),z(" ",e.name," "),r(),d(e.weight&&i.facade.trackWeight()?3:-1);}}function Ee(t,a){if(t&1&&w(0,ye,4,6,"div",11,fe),t&2){let e=o().$implicit;M(e.items);}}function Fe(t,a){if(t&1){let e=y();c(0,"div",3)(1,"div",5),P("click",function(){let n=f(e).$implicit,_=o();return g(_.facade.toggleCategoryCollapse(n.name));}),c(2,"div",6),u(3,"app-icon-key-right",7),c(4,"span",8),C(5),s(),p(6,Pe,3,1,"span",9),s(),u(7,"app-items-status",10),s(),p(8,Ee,2,0),s();}if(t&2){let e=a.$implicit,i=o();A("@animateItems",e),v("aria-label",e.name),r(3),A("@animateChevron",e.collapsed),r(2),b(e.name),r(),d(i.facade.trackWeight()&&e.totalWeight?6:-1),r(),A("count",e.checked)("total",e.items.length),r(),d(e.collapsed?-1:8);}}var De=L("animateCategory",[F("* <=> *",[O([x('div[role="list"]:enter',$(X),{optional:!0}),x('div[role="list"]:leave',$(Y),{optional:!0}),x("@*",[te()],{optional:!0})])])]),be=L("animateItems",[F("* <=> *",[O([x('div[role="listitem"]:enter',[l({opacity:0,height:0}),S("0.2s ease-in",l({opacity:1,height:"*"}))],{optional:!0}),x('div[role="listitem"]:leave',[l({opacity:1,height:"*"}),S("0.2s ease-in",l({opacity:0,height:0}))],{optional:!0}),x("@*",[te()],{optional:!0})])])]),Le=L("animateChevron",[N("true",l({transform:"rotate(0)"})),N("false",l({transform:"rotate(90deg)"})),F("false => true",S("0.5s ease-in-out")),F("true => false",S("0.5s ease-in-out",pe([l({transform:"rotate(0)"}),l({transform:"rotate(100deg)"}),l({transform:"rotate(80deg)"})])))]),$e=L("animateStrikeThrough",[N("true",l({textDecorationColor:"inherit"})),N("false",l({textDecorationColor:"transparent"})),F("false => true",S("0.5s ease-in-out")),F("true => false",S("0.5s ease-in-out"))]),ge=(()=>{class t{facade=k(D);serializeWeight=E;serializeWeightPartition=j;animationsDisabled=V(!0);constructor(){K(()=>{this.animationsDisabled.set(this.facade.isAccessibleMode());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-display-items"]],decls:4,vars:3,consts:()=>{let e;return e="No items available.",[e,[1,"flex","flex-col","items-center"],[1,"contents"],["role","list",1,"card","mb-1","overflow-hidden"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","select-none","items-center","justify-between",3,"click","keypress"],[1,"italic"]];},template:function(i,n){i&1&&(p(0,Ae,3,0,"div",1),c(1,"div",2),w(2,Fe,9,8,"div",3,fe),s()),i&2&&(d(n.facade.numberOfItems()?-1:0),r(),A("@animateCategory",n.facade.packlist())("@.disabled",n.animationsDisabled()),r(),M(n.facade.packlist()));},dependencies:[ue,le],encapsulation:2,data:{animation:[De,be,Le,$e]},changeDetection:0});}return t;})();var we=(t,a)=>a.question;function Me(t,a){if(t&1){let e=y();c(0,"div",1)(1,"p",2),G(2,0),c(3,"button",3),P("click",function(){f(e);let n=o();return g(n.facade.goToRulesEdit());}),s(),B(),s()();}}function Oe(t,a){t&1&&u(0,"app-icon-checkmark");}function Ne(t,a){if(t&1){let e=y();c(0,"div",8),P("click",function(){let n=f(e).$implicit,_=o(2);return g(_.facade.toggleQuestion(n));})("keypress",function(){let n=f(e).$implicit,_=o(2);return g(_.facade.toggleQuestion(n));}),c(1,"span",9),C(2),s(),p(3,Oe,1,0,"app-icon-checkmark"),s();}if(t&2){let e=a.$implicit,i=o(2);Q("disabled",i.facade.isAnswersLockActive()),v("aria-checked",i.facade.isQuestionActive(e))("aria-disabled",i.facade.isAnswersLockActive())("aria-label",e.question),r(2),b(e.question),r(),d(i.facade.isQuestionActive(e)?3:-1);}}function Re(t,a){t&1&&u(0,"app-icon-lock",7);}function We(t,a){t&1&&u(0,"app-icon-lock-open",7);}function Ke(t,a){if(t&1){let e=y();c(0,"div"),w(1,Ne,4,7,"div",4,we),s(),c(3,"div",5)(4,"button",6),P("click",function(){f(e);let n=o();return g(n.facade.toggleAnswersLock());})("keypress",function(){f(e);let n=o();return g(n.facade.toggleAnswersLock());}),p(5,Re,1,0,"app-icon-lock",7)(6,We,1,0,"app-icon-lock-open",7),s()();}if(t&2){let e=o();A("@.disabled",e.animationsDisabled())("@animateQuestions",e.facade.questions()),r(),M(e.facade.questions()),r(3),v("aria-pressed",e.facade.isAnswersLockActive()),r(),d(e.facade.isAnswersLockActive()?5:6);}}var Ve=L("animateQuestions",[F("* <=> *",[O([x("div.card:enter",$(X),{optional:!0}),x("div.card:leave",$(Y),{optional:!0}),x("app-icon-checkmark:enter",[l({transform:"translateX(200%)"}),S("0.3s ease-in",l({transform:"translateX(0)"}))],{optional:!0})])])]),Ce=(()=>{class t{facade=k(D);animationsDisabled=V(!0);constructor(){K(()=>{this.animationsDisabled.set(this.facade.isAccessibleMode());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let e;e=" No questions available, please "+"\uFFFD#3\uFFFD"+" create "+"\uFFFD/#3\uFFFD"+" some. ";let i;return i="Lock answers",[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"disabled"],[1,"flex","justify-center"],["type","button","role","button","aria-label",i,1,"link",3,"click","keypress"],[1,"h-6","w-6"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"click","keypress"],["aria-hidden","true",1,"select-none","font-bold"]];},template:function(i,n){i&1&&p(0,Me,4,0,"div",1)(1,Ke,7,4),i&2&&d(n.facade.questionsAvailable()?1:0);},dependencies:[re,ce,q],encapsulation:2,data:{animation:[Ve]},changeDetection:0});}return t;})();function Qe(t,a){if(t&1&&u(0,"progress",2),t&2){let e=o();A("value",e.facade.checkedWeight())("max",e.facade.totalWeight()),v("aria-label",e.statusLabelText());}}function Ge(t,a){if(t&1&&u(0,"progress",3),t&2){let e=o();A("value",e.facade.numberOfCheckedItems())("max",e.facade.numberOfItems()),v("aria-label",e.statusLabelText());}}function Be(t,a){if(t&1&&(c(0,"span"),C(1),s()),t&2){let e=o();r(),b(e.serializeWeightPartition(e.facade.checkedWeight(),e.facade.totalWeight()));}}var Te=(()=>{class t{facade=k(D);serializeWeightPartition=j;statusLabelText=T(()=>{let e=this.facade.totalWeight(),i=this.facade.checkedWeight(),n=this.facade.numberOfCheckedItems().toString(),_=this.facade.numberOfItems().toString();return this.facade.trackWeight()?"You have packed "+E(i,void 0,1)+" out of "+E(e,void 0,1)+" by packing "+n+" out of "+_+" items.":"You have packed "+n+" out of "+_+" items.";});static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-packlist-status"]],decls:8,vars:4,consts:()=>{let e;e="weight packing progress";let i;return i="item packing progress",[[1,"card","mb-1"],[1,"mb-1","flex"],["role","progressbar","title",e,"aria-live","polite",1,"grow",3,"value","max"],["role","progressbar","title",i,"aria-live","polite",1,"grow",3,"value","max"],["aria-hidden","true",1,"flex","flex-col","items-center"]];},template:function(i,n){i&1&&(c(0,"div",0)(1,"div",1),p(2,Qe,1,3,"progress",2)(3,Ge,1,3,"progress",3),s(),c(4,"div",4)(5,"span"),C(6),s(),p(7,Be,2,1,"span"),s()()),i&2&&(r(2),d(n.facade.trackWeight()?2:3),r(4),U("",n.facade.numberOfCheckedItems()," / ",n.facade.numberOfItems(),""),r(),d(n.facade.trackWeight()?7:-1));},encapsulation:2,changeDetection:0});}return t;})();function ze(t,a){t&1&&u(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function Ue(t,a){if(t&1){let e=y();c(0,"div",1)(1,"p",2),G(2,0),c(3,"button",3),P("click",function(){f(e);let n=o();return g(n.facade.goToConfigImport());}),s(),c(4,"button",3),P("click",function(){f(e);let n=o();return g(n.facade.goToRulesEdit());}),s(),B(),s()();}}var Nt=(()=>{class t{facade=k(D);static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;return e=" No rules available, please "+"\uFFFD#3\uFFFD"+" import "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" or "+"\uFFFD#4\uFFFD"+" create "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" some. ",e=ae(e),[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&p(0,ze,3,0)(1,Ue,5,0,"div",1),i&2&&d(n.facade.rulesAvailable()?0:1);},dependencies:[ge,Ce,Te],encapsulation:2,changeDetection:0});}return t;})();export{Nt as default};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/