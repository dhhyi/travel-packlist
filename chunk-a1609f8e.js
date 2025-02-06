import{c as D,d as A,e as N,g as l,h as R,i as ae,j as F,k as H,l as J,m as O,n as x,o as Z}from"./chunk-566b7d74.js";import{b as me}from"./chunk-9494fd46.js";import{f as se,g as re,h as ce,p as z}from"./chunk-ec7e9cc0.js";import"./chunk-29c892b0.js";import{B as le,n as E}from"./chunk-1aa745bb.js";import"./chunk-080625d0.js";import{Ba as w,Bb as p,Eb as M,Fb as W,Gb as c,Hb as s,Ib as C,Ja as $,Kb as v,Lb as G,Mb as Q,Nb as ne,Qb as oe,Rb as k,Sb as o,Za as r,_ as ie,ac as f,bc as L,cc as q,dc as B,ea as P,kb as I,la as u,ma as g,pb as m,wb as y,xb as S,ya as Y,yb as V,zc as T}from"./chunk-d8ae0c91.js";import{a as ee,b as te}from"./chunk-bbcdbfbd.js";var pe={opacity:0,transform:"scale(0.9)",height:0,minHeight:0,padding:0,margin:"-2px"},_e={opacity:1,transform:"scale(1)",height:"*",minHeight:"*",padding:"*",margin:"*"},U=H([l(pe),Z(50,[A("0.3s ease-in",l(_e))])]),X=H([l(_e),Z(50,[A("0.3s ease-in",l(pe))])]);var b=(()=>{class t{state=P(le);animationsEnabled=this.state.config.animations;numberOfItems=T(()=>this.state.active.items().length);checkedItems=this.state.packlist.checkedItems;collapsedCategories=this.state.packlist.collapsedCategories;numberOfCheckedItems=T(()=>{let e=this.state.active.items();return this.checkedItems().filter(i=>e.includes(i)).length;});isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem=this.state.packlist.toggleCheckedItem;toggleCategoryCollapse=e=>{this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);};categoriesOrderBy=T(()=>this.state.config.categorySorting()==="definition"?()=>0:(i,n)=>i.localeCompare(n));packlist=T(()=>{let e=this.state.active.items(),i=this.checkedItems(),n=e.reduce((h,d)=>(h[d.category]||(h[d.category]={name:d.category,items:[],checked:0,collapsed:this.isCategoryCollapsed(d.category),totalWeight:0,checkedWeight:0}),h[d.category].items.push({category:d.category,name:d.name,weight:d.weight,checked:i.includes(d)}),i.includes(d)&&(h[d.category].checked++,h[d.category].checkedWeight+=d.weight??0),h[d.category].totalWeight+=d.weight??0,h),{}),_=this.categoriesOrderBy();return Object.entries(n).map(h=>h[1]).toSorted((h,d)=>_(h.name,d.name));});totalWeight=T(()=>this.packlist().reduce((e,i)=>e+i.totalWeight,0));checkedWeight=T(()=>this.packlist().reduce((e,i)=>e+i.checkedWeight,0));rulesAvailable=T(()=>this.state.rules.parsed().length>0);isAnswersLockActive=this.state.packlist.answersLocked;model=this.state.packlist.answers;activeQuestions=this.state.active.questions;questions=T(()=>this.activeQuestions().filter(e=>!this.isAnswersLockActive()||this.model()[e.variable]));questionsAvailable=T(()=>this.activeQuestions().length>0);toggleQuestion=e=>{this.isAnswersLockActive()||this.model.update(i=>te(ee({},i),{[e.variable]:!i[e.variable]}));};isQuestionActive=e=>this.model()[e.variable];toggleAnswersLock=()=>{this.isAnswersLockActive.update(e=>!e);};trackWeight=this.state.config.trackWeight;goToConfigImport=()=>{this.state.router.go("config#import");};goToRulesEdit=()=>{this.state.router.go("rules->edit");};static ɵfac=function(i){return new(i||t)();};static ɵprov=ie({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function j(t,a){return E(t,void 0,1)+" / "+E(a,void 0,1);}function Te(t,a){t&1&&C(0,"app-icon-checkmark");}function he(t,a){if(t&1&&f(0),t&2){let e=o();B(" ",e.count()," / ",e.total(),`
`);}}var de=(()=>{class t{count=Y(0);total=Y(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&m(0,Te,1,0,"app-icon-checkmark")(1,he,1,2),i&2&&p(n.count()===n.total()?0:1);},dependencies:[z],encapsulation:2,changeDetection:0});}return t;})();var ue=(t,a)=>a.name;function Se(t,a){t&1&&(c(0,"div",1)(1,"p",4),ne(2,0),s()());}function ke(t,a){if(t&1&&f(0),t&2){let e=o(2).$implicit,i=o();q(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function Ae(t,a){if(t&1&&f(0),t&2){let e=o(2).$implicit,i=o();q(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function xe(t,a){if(t&1&&(c(0,"span",9),m(1,ke,1,1)(2,Ae,1,1),s()),t&2){let e=o().$implicit;r(),p(e.checkedWeight===e.totalWeight?1:2);}}function Pe(t,a){if(t&1&&(c(0,"span",13),f(1),s()),t&2){let e=o().$implicit,i=o(3);r(),L(i.serializeWeight(e.weight));}}function Ie(t,a){if(t&1){let e=v();c(0,"div",11)(1,"div",12),k("click",function(){let n=u(e).$implicit,_=o(3);return g(_.toggleCheckedItem(n));})("keypress",function(){let n=u(e).$implicit,_=o(3);return g(_.toggleCheckedItem(n));}),f(2),m(3,Pe,2,1,"span",13),s()();}if(t&2){let e=a.$implicit,i=o(3);r(),V("text-checked-item",e.checked),S("@animateStrikeThrough",e.checked),y("aria-checked",e.checked),r(),q(" ",e.name," "),r(),p(e.weight&&i.trackWeight()?3:-1);}}function ve(t,a){if(t&1&&M(0,Ie,4,6,"div",11,ue),t&2){let e=o().$implicit;W(e.items);}}function ye(t,a){if(t&1){let e=v();c(0,"div",3)(1,"div",5),k("click",function(){let n=u(e).$implicit,_=o();return g(_.toggleCategoryCollapse(n.name));}),c(2,"div",6),C(3,"app-icon-key-right",7),c(4,"span",8),f(5),s(),m(6,xe,3,1,"span",9),s(),C(7,"app-items-status",10),s(),m(8,ve,2,0),s();}if(t&2){let e=a.$implicit,i=o();S("@animateItems",e),y("aria-label",e.name),r(3),S("@animateChevron",e.collapsed),r(2),L(e.name),r(),p(i.trackWeight()&&e.totalWeight?6:-1),r(),S("count",e.checked)("total",e.items.length),r(),p(e.collapsed?-1:8);}}var Ee=D("animateCategory",[F("* <=> *",[N([x('div[role="list"]:enter',O(U),{optional:!0}),x('div[role="list"]:leave',O(X),{optional:!0}),x("@*",[J()],{optional:!0})])])]),Fe=D("animateItems",[F("* <=> *",[N([x('div[role="listitem"]:enter',[l({opacity:0,height:0}),A("0.2s ease-in",l({opacity:1,height:"*"}))],{optional:!0}),x('div[role="listitem"]:leave',[l({opacity:1,height:"*"}),A("0.2s ease-in",l({opacity:0,height:0}))],{optional:!0}),x("@*",[J()],{optional:!0})])])]),be=D("animateChevron",[R("true",l({transform:"rotate(0)"})),R("false",l({transform:"rotate(90deg)"})),F("false => true",A("0.5s ease-in-out")),F("true => false",A("0.5s ease-in-out",ae([l({transform:"rotate(0)"}),l({transform:"rotate(100deg)"}),l({transform:"rotate(80deg)"})])))]),Le=D("animateStrikeThrough",[R("true",l({textDecorationColor:"inherit"})),R("false",l({textDecorationColor:"transparent"})),F("false => true",A("0.2s ease-in-out"))]),ge=(()=>{class t{facade=P(b);numberOfItems=this.facade.numberOfItems;packlist=this.facade.packlist;trackWeight=this.facade.trackWeight;toggleCategoryCollapse=this.facade.toggleCategoryCollapse;toggleCheckedItem=this.facade.toggleCheckedItem;serializeWeight=E;serializeWeightPartition=j;animationsDisabled=w(!0);constructor(){$(()=>{this.animationsDisabled.set(!this.facade.animationsEnabled());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-display-items"]],decls:4,vars:3,consts:()=>{let e;return e="No items available.",[e,[1,"flex","flex-col","items-center"],[1,"contents"],["role","list",1,"card","mb-1","overflow-hidden"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","select-none","items-center","justify-between",3,"click","keypress"],[1,"italic"]];},template:function(i,n){i&1&&(m(0,Se,3,0,"div",1),c(1,"div",2),M(2,ye,9,8,"div",3,ue),s()),i&2&&(p(n.numberOfItems()?-1:0),r(),S("@animateCategory",n.packlist())("@.disabled",n.animationsDisabled()),r(),W(n.packlist()));},dependencies:[de,ce],encapsulation:2,data:{animation:[Ee,Fe,be,Le]},changeDetection:0});}return t;})();var De=(t,a)=>a.question;function we(t,a){if(t&1){let e=v();c(0,"div",1)(1,"p",2),G(2,0),c(3,"button",3),k("click",function(){u(e);let n=o();return g(n.goToRulesEdit());}),s(),Q(),s()();}}function $e(t,a){t&1&&C(0,"app-icon-checkmark");}function Oe(t,a){if(t&1){let e=v();c(0,"div",5),k("click",function(){let n=u(e).$implicit,_=o(2);return g(_.toggleQuestion(n));})("keypress",function(){let n=u(e).$implicit,_=o(2);return g(_.toggleQuestion(n));}),c(1,"span",6),f(2),s(),m(3,$e,1,0,"app-icon-checkmark"),s();}if(t&2){let e=a.$implicit,i=o(2);V("disabled",i.isAnswersLockActive()),y("aria-checked",i.isQuestionActive(e))("aria-disabled",i.isAnswersLockActive())("aria-label",e.question),r(2),L(e.question),r(),p(i.isQuestionActive(e)?3:-1);}}function Me(t,a){if(t&1&&(c(0,"div"),M(1,Oe,4,7,"div",4,De),s()),t&2){let e=o();S("@.disabled",e.animationsDisabled())("@animateQuestions",e.questions()),r(),W(e.questions());}}var We=D("animateQuestions",[F("* <=> *",[N([x("div.card:enter",O(U),{optional:!0}),x("div.card:leave",O(X),{optional:!0}),x("app-icon-checkmark:enter",[l({transform:"translateX(200%)"}),A("0.3s ease-in",l({transform:"translateX(0)"}))],{optional:!0})])])]),Ce=(()=>{class t{facade=P(b);questions=this.facade.questions;questionsAvailable=this.facade.questionsAvailable;isQuestionActive=this.facade.isQuestionActive;isAnswersLockActive=this.facade.isAnswersLockActive;toggleQuestion=this.facade.toggleQuestion;goToRulesEdit=this.facade.goToRulesEdit;animationsDisabled=w(!0);constructor(){$(()=>{this.animationsDisabled.set(!this.facade.animationsEnabled());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let e;return e=" No questions available, please "+"\uFFFD#3\uFFFD"+" create "+"\uFFFD/#3\uFFFD"+" some. ",[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"disabled"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"click","keypress"],["aria-hidden","true",1,"select-none","font-bold"]];},template:function(i,n){i&1&&m(0,we,4,0,"div",1)(1,Me,3,2,"div"),i&2&&p(n.questionsAvailable()?1:0);},dependencies:[z],encapsulation:2,data:{animation:[We]},changeDetection:0});}return t;})();function Ne(t,a){t&1&&C(0,"app-icon-lock",7);}function Re(t,a){t&1&&C(0,"app-icon-lock-open",7);}function Ke(t,a){if(t&1){let e=v();c(0,"div",0)(1,"button",6),k("click",function(){u(e);let n=o();return g(n.toggleAnswersLock());})("keypress",function(){u(e);let n=o();return g(n.toggleAnswersLock());}),m(2,Ne,1,0,"app-icon-lock",7)(3,Re,1,0,"app-icon-lock-open",7),s()();}if(t&2){let e=o();r(),y("aria-pressed",e.isAnswersLockActive()),r(),p(e.isAnswersLockActive()?2:3);}}function Ve(t,a){if(t&1&&C(0,"cmp-progress",3),t&2){let e=o();S("value",e.checkedWeight())("max",e.totalWeight())("animationDuration",e.animationDuration()),y("aria-label",e.statusLabelText());}}function Ge(t,a){if(t&1&&C(0,"cmp-progress",4),t&2){let e=o();S("value",e.numberOfCheckedItems())("max",e.numberOfItems())("animationDuration",e.animationDuration()),y("aria-label",e.statusLabelText());}}function Qe(t,a){if(t&1&&(c(0,"span"),f(1),s()),t&2){let e=o();r(),L(e.serializeWeightPartition(e.checkedWeight(),e.totalWeight()));}}var fe=(()=>{class t{facade=P(b);questionsAvailable=this.facade.questionsAvailable;isAnswersLockActive=this.facade.isAnswersLockActive;toggleAnswersLock=this.facade.toggleAnswersLock;trackWeight=this.facade.trackWeight;checkedWeight=this.facade.checkedWeight;totalWeight=this.facade.totalWeight;numberOfCheckedItems=this.facade.numberOfCheckedItems;numberOfItems=this.facade.numberOfItems;serializeWeightPartition=j;statusLabelText=T(()=>{let e=this.facade.totalWeight(),i=this.facade.checkedWeight(),n=this.facade.numberOfCheckedItems().toString(),_=this.facade.numberOfItems().toString();return this.facade.trackWeight()?"You have packed "+E(i,void 0,1)+" out of "+E(e,void 0,1)+" by packing "+n+" out of "+_+" items.":"You have packed "+n+" out of "+_+" items.";});animationDuration=w(0);constructor(){$(()=>{this.animationDuration.set(this.facade.animationsEnabled()?500:0);});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-packlist-status"]],decls:9,vars:5,consts:()=>{let e;e="weight packing progress";let i;i="item packing progress";let n;return n="Lock answers",[[1,"flex","justify-center"],[1,"card","mb-1"],[1,"mb-1","flex"],["title",e,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["title",i,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["aria-hidden","true",1,"flex","flex-col","items-center"],["type","button","role","button","aria-label",n,1,"link",3,"click","keypress"],[1,"h-6","w-6"]];},template:function(i,n){i&1&&(m(0,Ke,4,2,"div",0),c(1,"div",1)(2,"div",2),m(3,Ve,1,4,"cmp-progress",3)(4,Ge,1,4,"cmp-progress",4),s(),c(5,"div",5)(6,"span"),f(7),s(),m(8,Qe,2,1,"span"),s()()),i&2&&(p(n.questionsAvailable()?0:-1),r(3),p(n.trackWeight()?3:4),r(4),B("",n.numberOfCheckedItems()," / ",n.numberOfItems(),""),r(),p(n.trackWeight()?8:-1));},dependencies:[se,re,me],encapsulation:2,changeDetection:0});}return t;})();function qe(t,a){t&1&&C(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function Be(t,a){if(t&1){let e=v();c(0,"div",1)(1,"p",2),G(2,0),c(3,"button",3),k("click",function(){u(e);let n=o();return g(n.goToConfigImport());}),s(),c(4,"button",3),k("click",function(){u(e);let n=o();return g(n.goToRulesEdit());}),s(),Q(),s()();}}var Wt=(()=>{class t{facade=P(b);rulesAvailable=this.facade.rulesAvailable;goToRulesEdit=this.facade.goToRulesEdit;goToConfigImport=this.facade.goToConfigImport;static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;return e=" No rules available, please "+"\uFFFD#3\uFFFD"+" import "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" or "+"\uFFFD#4\uFFFD"+" create "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" some. ",e=oe(e),[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&m(0,qe,3,0)(1,Be,5,0,"div",1),i&2&&p(n.rulesAvailable()?0:1);},dependencies:[ge,Ce,fe],encapsulation:2,changeDetection:0});}return t;})();export{Wt as PacklistComponent};/**i18n:eee3d47a017a9f4fe983a06f27e0a9c7b95602fff3951636f2d8c55069b18d30*/