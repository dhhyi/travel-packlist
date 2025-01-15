import{c as L,d as h,e as R,g as l,h as W,i as de,j as F,k as ee,l as te,m as M,n as x,o as ie}from"./chunk-ed13faaa.js";import{b as me,e as _e}from"./chunk-83c6e598.js";import{f as re,g as ce,h as le,p as q}from"./chunk-a067c65f.js";import"./chunk-fc0d2ab4.js";import{c as E,q as pe}from"./chunk-90020e8a.js";import{d as se}from"./chunk-0d702e51.js";import"./chunk-12fb62d5.js";import{Aa as Z,Ac as T,Cb as m,Fb as O,Gb as N,Hb as c,Ib as s,Ja as $,Jb as u,Lb as y,Mb as G,Nb as B,Ob as oe,Rb as ae,Sb as P,Tb as o,_ as ne,_a as r,bc as C,cc as b,dc as z,ea as k,ec as U,fb as w,lb as I,na as f,oa as g,qb as d,xb as v,yb as A,zb as Q}from"./chunk-6d94f052.js";import{a as H,b as J}from"./chunk-cb4c040a.js";var ue={opacity:0,transform:"scale(0.9)",height:0,padding:0,margin:"-2px"},fe={opacity:1,transform:"scale(1)",height:"*",padding:"*",margin:"*"},X=ee([l(ue),ie(50,[h("0.3s ease-in",l(fe))])]),Y=ee([l(fe),ie(50,[h("0.3s ease-in",l(ue))])]);function K(t){return`${t.category}-${t.name}`;}var D=(()=>{class t{router=k(se);state=k(pe);isAccessibleMode=T(()=>this.state.config.accessibility()==="accessible");numberOfItems=T(()=>this.state.active.items().length);checkedItems=this.state.packlist.checkedItems;collapsedCategories=this.state.packlist.collapsedCategories;isItemChecked(e){return this.checkedItems().includes(K(e));}numberOfCheckedItems=T(()=>{let e=this.state.active.items().map(K);return this.checkedItems().filter(i=>e.includes(i)).length;});isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem(e){let i=K(e);this.checkedItems().includes(i)?this.checkedItems.update(n=>n.filter(p=>p!==i)):this.checkedItems.update(n=>[...n,i]);}toggleCategoryCollapse(e){this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);}categoriesOrderBy=T(()=>this.state.config.categorySorting()==="definition"?()=>0:(i,n)=>i.localeCompare(n));packlist=T(()=>{let e=this.state.active.items(),i=this.checkedItems(),n=e.reduce((S,_)=>(S[_.category]||(S[_.category]={name:_.category,items:[],checked:0,collapsed:this.isCategoryCollapsed(_.category),totalWeight:0,checkedWeight:0}),S[_.category].items.push(J(H({},_),{checked:i.includes(K(_))})),i.includes(K(_))&&(S[_.category].checked++,S[_.category].checkedWeight+=_.weight??0),S[_.category].totalWeight+=_.weight??0,S),{}),p=Object.entries(n).map(S=>S[1]),ke=this.categoriesOrderBy();return p.sort((S,_)=>ke(S.name,_.name)),p;});totalWeight=T(()=>this.packlist().reduce((e,i)=>e+i.totalWeight,0));checkedWeight=T(()=>this.packlist().reduce((e,i)=>e+i.checkedWeight,0));rulesAvailable=T(()=>this.state.rules.parsed().length>0);isAnswersLockActive=this.state.packlist.answersLocked;model=this.state.packlist.answers;activeQuestions=this.state.active.questions;questions=T(()=>this.activeQuestions().filter(e=>!this.isAnswersLockActive()||this.model()[e.variable]));questionsAvailable=T(()=>this.activeQuestions().length>0);toggleQuestion(e){this.isAnswersLockActive()||this.model.update(i=>J(H({},i),{[e.variable]:!i[e.variable]}));}isQuestionActive(e){return this.model()[e.variable];}toggleAnswersLock(){this.isAnswersLockActive.update(e=>!e);}trackWeight=this.state.config.trackWeight;goToRulesEdit(){this.router.navigate(["/rules"]).then(()=>{this.state.router.rulesMode.set("edit");});}goToConfigImport(){this.router.navigate(["/config"],{fragment:"import"});}static ɵfac=function(i){return new(i||t)();};static ɵprov=ne({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function j(t,a){return E(t,void 0,1)+" / "+E(a,void 0,1);}function Ae(t,a){t&1&&u(0,"app-icon-checkmark");}function xe(t,a){if(t&1&&C(0),t&2){let e=o();U(" ",e.count()," / ",e.total(),`
`);}}var ge=(()=>{class t{count=Z(0);total=Z(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&d(0,Ae,1,0,"app-icon-checkmark")(1,xe,1,2),i&2&&m(n.count()===n.total()?0:1);},dependencies:[q],encapsulation:2,changeDetection:0});}return t;})();var Ce=(t,a)=>a.name;function Ie(t,a){t&1&&(c(0,"div",1)(1,"p",4),oe(2,0),s()());}function Pe(t,a){if(t&1&&C(0),t&2){let e=o(2).$implicit,i=o();z(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function ve(t,a){if(t&1&&C(0),t&2){let e=o(2).$implicit,i=o();z(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function ye(t,a){if(t&1&&(c(0,"span",9),d(1,Pe,1,1)(2,ve,1,1),s()),t&2){let e=o().$implicit;r(),m(e.checkedWeight===e.totalWeight?1:2);}}function Ee(t,a){if(t&1&&(c(0,"span",13),C(1),s()),t&2){let e=o().$implicit,i=o(3);r(),b(i.serializeWeight(e.weight));}}function Fe(t,a){if(t&1){let e=y();c(0,"div",11)(1,"div",12),P("click",function(){let n=f(e).$implicit,p=o(3);return g(p.facade.toggleCheckedItem(n));})("keypress",function(){let n=f(e).$implicit,p=o(3);return g(p.facade.toggleCheckedItem(n));}),C(2),d(3,Ee,2,1,"span",13),s()();}if(t&2){let e=a.$implicit,i=o(3);r(),Q("text-checked-item",e.checked),A("@animateStrikeThrough",e.checked),v("aria-checked",e.checked),r(),z(" ",e.name," "),r(),m(e.weight&&i.facade.trackWeight()?3:-1);}}function De(t,a){if(t&1&&O(0,Fe,4,6,"div",11,Ce),t&2){let e=o().$implicit;N(e.items);}}function be(t,a){if(t&1){let e=y();c(0,"div",3)(1,"div",5),P("click",function(){let n=f(e).$implicit,p=o();return g(p.facade.toggleCategoryCollapse(n.name));}),c(2,"div",6),u(3,"app-icon-key-right",7),c(4,"span",8),C(5),s(),d(6,ye,3,1,"span",9),s(),u(7,"app-items-status",10),s(),d(8,De,2,0),s();}if(t&2){let e=a.$implicit,i=o();A("@animateItems",e),v("aria-label",e.name),r(3),A("@animateChevron",e.collapsed),r(2),b(e.name),r(),m(i.facade.trackWeight()&&e.totalWeight?6:-1),r(),A("count",e.checked)("total",e.items.length),r(),m(e.collapsed?-1:8);}}var Le=L("animateCategory",[F("* <=> *",[R([x('div[role="list"]:enter',M(X),{optional:!0}),x('div[role="list"]:leave',M(Y),{optional:!0}),x("@*",[te()],{optional:!0})])])]),$e=L("animateItems",[F("* <=> *",[R([x('div[role="listitem"]:enter',[l({opacity:0,height:0}),h("0.2s ease-in",l({opacity:1,height:"*"}))],{optional:!0}),x('div[role="listitem"]:leave',[l({opacity:1,height:"*"}),h("0.2s ease-in",l({opacity:0,height:0}))],{optional:!0}),x("@*",[te()],{optional:!0})])])]),we=L("animateChevron",[W("true",l({transform:"rotate(0)"})),W("false",l({transform:"rotate(90deg)"})),F("false => true",h("0.5s ease-in-out")),F("true => false",h("0.5s ease-in-out",de([l({transform:"rotate(0)"}),l({transform:"rotate(100deg)"}),l({transform:"rotate(80deg)"})])))]),Me=L("animateStrikeThrough",[W("true",l({textDecorationColor:"inherit"})),W("false",l({textDecorationColor:"transparent"})),F("false => true",h("0.5s ease-in-out")),F("true => false",h("0.5s ease-in-out"))]),Te=(()=>{class t{facade=k(D);serializeWeight=E;serializeWeightPartition=j;animationsDisabled=w(!0);constructor(){$(()=>{this.animationsDisabled.set(this.facade.isAccessibleMode());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-display-items"]],decls:4,vars:3,consts:()=>{let e;return e="No items available.",[e,[1,"flex","flex-col","items-center"],[1,"contents"],["role","list",1,"card","mb-1","overflow-hidden"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","select-none","items-center","justify-between",3,"click","keypress"],[1,"italic"]];},template:function(i,n){i&1&&(d(0,Ie,3,0,"div",1),c(1,"div",2),O(2,be,9,8,"div",3,Ce),s()),i&2&&(m(n.facade.numberOfItems()?-1:0),r(),A("@animateCategory",n.facade.packlist())("@.disabled",n.animationsDisabled()),r(),N(n.facade.packlist()));},dependencies:[ge,le],encapsulation:2,data:{animation:[Le,$e,we,Me]},changeDetection:0});}return t;})();var Oe=(t,a)=>a.question;function Ne(t,a){if(t&1){let e=y();c(0,"div",1)(1,"p",2),G(2,0),c(3,"button",3),P("click",function(){f(e);let n=o();return g(n.facade.goToRulesEdit());}),s(),B(),s()();}}function Re(t,a){t&1&&u(0,"app-icon-checkmark");}function We(t,a){if(t&1){let e=y();c(0,"div",8),P("click",function(){let n=f(e).$implicit,p=o(2);return g(p.facade.toggleQuestion(n));})("keypress",function(){let n=f(e).$implicit,p=o(2);return g(p.facade.toggleQuestion(n));}),c(1,"span",9),C(2),s(),d(3,Re,1,0,"app-icon-checkmark"),s();}if(t&2){let e=a.$implicit,i=o(2);Q("disabled",i.facade.isAnswersLockActive()),v("aria-checked",i.facade.isQuestionActive(e))("aria-disabled",i.facade.isAnswersLockActive())("aria-label",e.question),r(2),b(e.question),r(),m(i.facade.isQuestionActive(e)?3:-1);}}function Ke(t,a){t&1&&u(0,"app-icon-lock",7);}function Ve(t,a){t&1&&u(0,"app-icon-lock-open",7);}function Qe(t,a){if(t&1){let e=y();c(0,"div"),O(1,We,4,7,"div",4,Oe),s(),c(3,"div",5)(4,"button",6),P("click",function(){f(e);let n=o();return g(n.facade.toggleAnswersLock());})("keypress",function(){f(e);let n=o();return g(n.facade.toggleAnswersLock());}),d(5,Ke,1,0,"app-icon-lock",7)(6,Ve,1,0,"app-icon-lock-open",7),s()();}if(t&2){let e=o();A("@.disabled",e.animationsDisabled())("@animateQuestions",e.facade.questions()),r(),N(e.facade.questions()),r(3),v("aria-pressed",e.facade.isAnswersLockActive()),r(),m(e.facade.isAnswersLockActive()?5:6);}}var Ge=L("animateQuestions",[F("* <=> *",[R([x("div.card:enter",M(X),{optional:!0}),x("div.card:leave",M(Y),{optional:!0}),x("app-icon-checkmark:enter",[l({transform:"translateX(200%)"}),h("0.3s ease-in",l({transform:"translateX(0)"}))],{optional:!0})])])]),he=(()=>{class t{facade=k(D);animationsDisabled=w(!0);constructor(){$(()=>{this.animationsDisabled.set(this.facade.isAccessibleMode());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let e;e=" No questions available, please "+"\uFFFD#3\uFFFD"+" create "+"\uFFFD/#3\uFFFD"+" some. ";let i;return i="Lock answers",[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"disabled"],[1,"flex","justify-center"],["type","button","role","button","aria-label",i,1,"link",3,"click","keypress"],[1,"h-6","w-6"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"click","keypress"],["aria-hidden","true",1,"select-none","font-bold"]];},template:function(i,n){i&1&&d(0,Ne,4,0,"div",1)(1,Qe,7,4),i&2&&m(n.facade.questionsAvailable()?1:0);},dependencies:[re,ce,q],encapsulation:2,data:{animation:[Ge]},changeDetection:0});}return t;})();function Be(t,a){if(t&1&&u(0,"cmp-progress",2),t&2){let e=o();A("value",e.facade.checkedWeight())("max",e.facade.totalWeight())("animationDuration",e.animationDuration()),v("aria-label",e.statusLabelText());}}function ze(t,a){if(t&1&&u(0,"cmp-progress",3),t&2){let e=o();A("value",e.facade.numberOfCheckedItems())("max",e.facade.numberOfItems())("animationDuration",e.animationDuration()),v("aria-label",e.statusLabelText());}}function Ue(t,a){if(t&1&&(c(0,"span"),C(1),s()),t&2){let e=o();r(),b(e.serializeWeightPartition(e.facade.checkedWeight(),e.facade.totalWeight()));}}var Se=(()=>{class t{facade=k(D);serializeWeightPartition=j;statusLabelText=T(()=>{let e=this.facade.totalWeight(),i=this.facade.checkedWeight(),n=this.facade.numberOfCheckedItems().toString(),p=this.facade.numberOfItems().toString();return this.facade.trackWeight()?"You have packed "+E(i,void 0,1)+" out of "+E(e,void 0,1)+" by packing "+n+" out of "+p+" items.":"You have packed "+n+" out of "+p+" items.";});animationDuration=w(0);constructor(){$(()=>{this.animationDuration.set(this.facade.isAccessibleMode()?0:500);});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-packlist-status"]],decls:8,vars:4,consts:()=>{let e;e="weight packing progress";let i;return i="item packing progress",[[1,"card","mb-1"],[1,"mb-1","flex"],["title",e,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["title",i,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["aria-hidden","true",1,"flex","flex-col","items-center"]];},template:function(i,n){i&1&&(c(0,"div",0)(1,"div",1),d(2,Be,1,4,"cmp-progress",2)(3,ze,1,4,"cmp-progress",3),s(),c(4,"div",4)(5,"span"),C(6),s(),d(7,Ue,2,1,"span"),s()()),i&2&&(r(2),m(n.facade.trackWeight()?2:3),r(4),U("",n.facade.numberOfCheckedItems()," / ",n.facade.numberOfItems(),""),r(),m(n.facade.trackWeight()?7:-1));},dependencies:[_e,me],encapsulation:2,changeDetection:0});}return t;})();function qe(t,a){t&1&&u(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function Xe(t,a){if(t&1){let e=y();c(0,"div",1)(1,"p",2),G(2,0),c(3,"button",3),P("click",function(){f(e);let n=o();return g(n.facade.goToConfigImport());}),s(),c(4,"button",3),P("click",function(){f(e);let n=o();return g(n.facade.goToRulesEdit());}),s(),B(),s()();}}var Vt=(()=>{class t{facade=k(D);static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;return e=" No rules available, please "+"\uFFFD#3\uFFFD"+" import "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" or "+"\uFFFD#4\uFFFD"+" create "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" some. ",e=ae(e),[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&d(0,qe,3,0)(1,Xe,5,0,"div",1),i&2&&m(n.facade.rulesAvailable()?0:1);},dependencies:[Te,he,Se],encapsulation:2,changeDetection:0});}return t;})();export{Vt as default};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/