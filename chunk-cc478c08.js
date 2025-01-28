import{c as L,d as A,e as R,g as l,h as W,i as se,j as F,k as J,l as Z,m as O,n as x,o as ee}from"./chunk-852dc99d.js";import{b as _e}from"./chunk-f57227a5.js";import{f as ce,g as le,h as me,p as q}from"./chunk-d90e348e.js";import"./chunk-9ff3c6ab.js";import{e as E,s as pe}from"./chunk-d304b66f.js";import{d as re}from"./chunk-35b70206.js";import"./chunk-d6ce3d1d.js";import{Ba as w,Bb as _,Eb as M,Fb as N,Gb as c,Hb as s,Ib as u,Ja as $,Kb as y,Lb as V,Mb as G,Nb as oe,Qb as ae,Rb as P,Sb as o,Za as r,_ as ne,ac as C,bc as b,cc as B,dc as z,ea as S,kb as I,la as g,ma as f,pb as p,wb as v,xb as k,ya as H,yb as Q,zc as T}from"./chunk-5879788f.js";import{a as te,b as ie}from"./chunk-5dac2c5c.js";var de={opacity:0,transform:"scale(0.9)",height:0,padding:0,margin:"-2px"},ue={opacity:1,transform:"scale(1)",height:"*",padding:"*",margin:"*"},U=J([l(de),ee(50,[A("0.3s ease-in",l(ue))])]),X=J([l(ue),ee(50,[A("0.3s ease-in",l(de))])]);function Y(t){return`${t.category}-${t.name}`;}var D=(()=>{class t{router=S(re);state=S(pe);animationsEnabled=this.state.config.animations;numberOfItems=T(()=>this.state.active.items().length);checkedItems=this.state.packlist.checkedItems;collapsedCategories=this.state.packlist.collapsedCategories;numberOfCheckedItems=T(()=>{let e=this.state.active.items().map(Y);return this.checkedItems().filter(i=>e.includes(i)).length;});isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem=e=>{let i=Y(e);this.checkedItems().includes(i)?this.checkedItems.update(n=>n.filter(d=>d!==i)):this.checkedItems.update(n=>[...n,i]);};toggleCategoryCollapse=e=>{this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);};categoriesOrderBy=T(()=>this.state.config.categorySorting()==="definition"?()=>0:(i,n)=>i.localeCompare(n));packlist=T(()=>{let e=this.state.active.items(),i=this.checkedItems(),n=e.reduce((h,m)=>(h[m.category]||(h[m.category]={name:m.category,items:[],checked:0,collapsed:this.isCategoryCollapsed(m.category),totalWeight:0,checkedWeight:0}),h[m.category].items.push({category:m.category,name:m.name,weight:m.weight,checked:i.includes(Y(m))}),i.includes(Y(m))&&(h[m.category].checked++,h[m.category].checkedWeight+=m.weight??0),h[m.category].totalWeight+=m.weight??0,h),{}),d=this.categoriesOrderBy();return Object.entries(n).map(h=>h[1]).toSorted((h,m)=>d(h.name,m.name));});totalWeight=T(()=>this.packlist().reduce((e,i)=>e+i.totalWeight,0));checkedWeight=T(()=>this.packlist().reduce((e,i)=>e+i.checkedWeight,0));rulesAvailable=T(()=>this.state.rules.parsed().length>0);isAnswersLockActive=this.state.packlist.answersLocked;model=this.state.packlist.answers;activeQuestions=this.state.active.questions;questions=T(()=>this.activeQuestions().filter(e=>!this.isAnswersLockActive()||this.model()[e.variable]));questionsAvailable=T(()=>this.activeQuestions().length>0);toggleQuestion=e=>{this.isAnswersLockActive()||this.model.update(i=>ie(te({},i),{[e.variable]:!i[e.variable]}));};isQuestionActive=e=>this.model()[e.variable];toggleAnswersLock=()=>{this.isAnswersLockActive.update(e=>!e);};trackWeight=this.state.config.trackWeight;goToRulesEdit=()=>{this.router.navigate(["/rules"]).then(()=>{this.state.router.rulesMode.set("edit");});};goToConfigImport=()=>{this.router.navigate(["/config"],{fragment:"import"});};static ɵfac=function(i){return new(i||t)();};static ɵprov=ne({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function j(t,a){return E(t,void 0,1)+" / "+E(a,void 0,1);}function Se(t,a){t&1&&u(0,"app-icon-checkmark");}function ke(t,a){if(t&1&&C(0),t&2){let e=o();z(" ",e.count()," / ",e.total(),`
`);}}var ge=(()=>{class t{count=H(0);total=H(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&p(0,Se,1,0,"app-icon-checkmark")(1,ke,1,2),i&2&&_(n.count()===n.total()?0:1);},dependencies:[q],encapsulation:2,changeDetection:0});}return t;})();var fe=(t,a)=>a.name;function Ae(t,a){t&1&&(c(0,"div",1)(1,"p",4),oe(2,0),s()());}function xe(t,a){if(t&1&&C(0),t&2){let e=o(2).$implicit,i=o();B(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function Ie(t,a){if(t&1&&C(0),t&2){let e=o(2).$implicit,i=o();B(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function Pe(t,a){if(t&1&&(c(0,"span",9),p(1,xe,1,1)(2,Ie,1,1),s()),t&2){let e=o().$implicit;r(),_(e.checkedWeight===e.totalWeight?1:2);}}function ve(t,a){if(t&1&&(c(0,"span",13),C(1),s()),t&2){let e=o().$implicit,i=o(3);r(),b(i.serializeWeight(e.weight));}}function ye(t,a){if(t&1){let e=y();c(0,"div",11)(1,"div",12),P("click",function(){let n=g(e).$implicit,d=o(3);return f(d.toggleCheckedItem(n));})("keypress",function(){let n=g(e).$implicit,d=o(3);return f(d.toggleCheckedItem(n));}),C(2),p(3,ve,2,1,"span",13),s()();}if(t&2){let e=a.$implicit,i=o(3);r(),Q("text-checked-item",e.checked),k("@animateStrikeThrough",e.checked),v("aria-checked",e.checked),r(),B(" ",e.name," "),r(),_(e.weight&&i.trackWeight()?3:-1);}}function Ee(t,a){if(t&1&&M(0,ye,4,6,"div",11,fe),t&2){let e=o().$implicit;N(e.items);}}function Fe(t,a){if(t&1){let e=y();c(0,"div",3)(1,"div",5),P("click",function(){let n=g(e).$implicit,d=o();return f(d.toggleCategoryCollapse(n.name));}),c(2,"div",6),u(3,"app-icon-key-right",7),c(4,"span",8),C(5),s(),p(6,Pe,3,1,"span",9),s(),u(7,"app-items-status",10),s(),p(8,Ee,2,0),s();}if(t&2){let e=a.$implicit,i=o();k("@animateItems",e),v("aria-label",e.name),r(3),k("@animateChevron",e.collapsed),r(2),b(e.name),r(),_(i.trackWeight()&&e.totalWeight?6:-1),r(),k("count",e.checked)("total",e.items.length),r(),_(e.collapsed?-1:8);}}var De=L("animateCategory",[F("* <=> *",[R([x('div[role="list"]:enter',O(U),{optional:!0}),x('div[role="list"]:leave',O(X),{optional:!0}),x("@*",[Z()],{optional:!0})])])]),be=L("animateItems",[F("* <=> *",[R([x('div[role="listitem"]:enter',[l({opacity:0,height:0}),A("0.2s ease-in",l({opacity:1,height:"*"}))],{optional:!0}),x('div[role="listitem"]:leave',[l({opacity:1,height:"*"}),A("0.2s ease-in",l({opacity:0,height:0}))],{optional:!0}),x("@*",[Z()],{optional:!0})])])]),Le=L("animateChevron",[W("true",l({transform:"rotate(0)"})),W("false",l({transform:"rotate(90deg)"})),F("false => true",A("0.5s ease-in-out")),F("true => false",A("0.5s ease-in-out",se([l({transform:"rotate(0)"}),l({transform:"rotate(100deg)"}),l({transform:"rotate(80deg)"})])))]),we=L("animateStrikeThrough",[W("true",l({textDecorationColor:"inherit"})),W("false",l({textDecorationColor:"transparent"})),F("false => true",A("0.2s ease-in-out"))]),Ce=(()=>{class t{facade=S(D);numberOfItems=this.facade.numberOfItems;packlist=this.facade.packlist;trackWeight=this.facade.trackWeight;toggleCategoryCollapse=this.facade.toggleCategoryCollapse;toggleCheckedItem=this.facade.toggleCheckedItem;serializeWeight=E;serializeWeightPartition=j;animationsDisabled=w(!0);constructor(){$(()=>{this.animationsDisabled.set(!this.facade.animationsEnabled());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-display-items"]],decls:4,vars:3,consts:()=>{let e;return e="No items available.",[e,[1,"flex","flex-col","items-center"],[1,"contents"],["role","list",1,"card","mb-1","overflow-hidden"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","select-none","items-center","justify-between",3,"click","keypress"],[1,"italic"]];},template:function(i,n){i&1&&(p(0,Ae,3,0,"div",1),c(1,"div",2),M(2,Fe,9,8,"div",3,fe),s()),i&2&&(_(n.numberOfItems()?-1:0),r(),k("@animateCategory",n.packlist())("@.disabled",n.animationsDisabled()),r(),N(n.packlist()));},dependencies:[ge,me],encapsulation:2,data:{animation:[De,be,Le,we]},changeDetection:0});}return t;})();var $e=(t,a)=>a.question;function Oe(t,a){if(t&1){let e=y();c(0,"div",1)(1,"p",2),V(2,0),c(3,"button",3),P("click",function(){g(e);let n=o();return f(n.goToRulesEdit());}),s(),G(),s()();}}function Me(t,a){t&1&&u(0,"app-icon-checkmark");}function Ne(t,a){if(t&1){let e=y();c(0,"div",8),P("click",function(){let n=g(e).$implicit,d=o(2);return f(d.toggleQuestion(n));})("keypress",function(){let n=g(e).$implicit,d=o(2);return f(d.toggleQuestion(n));}),c(1,"span",9),C(2),s(),p(3,Me,1,0,"app-icon-checkmark"),s();}if(t&2){let e=a.$implicit,i=o(2);Q("disabled",i.isAnswersLockActive()),v("aria-checked",i.isQuestionActive(e))("aria-disabled",i.isAnswersLockActive())("aria-label",e.question),r(2),b(e.question),r(),_(i.isQuestionActive(e)?3:-1);}}function Re(t,a){t&1&&u(0,"app-icon-lock",7);}function We(t,a){t&1&&u(0,"app-icon-lock-open",7);}function Ke(t,a){if(t&1){let e=y();c(0,"div"),M(1,Ne,4,7,"div",4,$e),s(),c(3,"div",5)(4,"button",6),P("click",function(){g(e);let n=o();return f(n.toggleAnswersLock());})("keypress",function(){g(e);let n=o();return f(n.toggleAnswersLock());}),p(5,Re,1,0,"app-icon-lock",7)(6,We,1,0,"app-icon-lock-open",7),s()();}if(t&2){let e=o();k("@.disabled",e.animationsDisabled())("@animateQuestions",e.questions()),r(),N(e.questions()),r(3),v("aria-pressed",e.isAnswersLockActive()),r(),_(e.isAnswersLockActive()?5:6);}}var Qe=L("animateQuestions",[F("* <=> *",[R([x("div.card:enter",O(U),{optional:!0}),x("div.card:leave",O(X),{optional:!0}),x("app-icon-checkmark:enter",[l({transform:"translateX(200%)"}),A("0.3s ease-in",l({transform:"translateX(0)"}))],{optional:!0})])])]),Te=(()=>{class t{facade=S(D);questions=this.facade.questions;questionsAvailable=this.facade.questionsAvailable;isQuestionActive=this.facade.isQuestionActive;isAnswersLockActive=this.facade.isAnswersLockActive;toggleAnswersLock=this.facade.toggleAnswersLock;toggleQuestion=this.facade.toggleQuestion;goToRulesEdit=this.facade.goToRulesEdit;animationsDisabled=w(!0);constructor(){$(()=>{this.animationsDisabled.set(!this.facade.animationsEnabled());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let e;e=" No questions available, please "+"\uFFFD#3\uFFFD"+" create "+"\uFFFD/#3\uFFFD"+" some. ";let i;return i="Lock answers",[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"disabled"],[1,"flex","justify-center"],["type","button","role","button","aria-label",i,1,"link",3,"click","keypress"],[1,"h-6","w-6"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"click","keypress"],["aria-hidden","true",1,"select-none","font-bold"]];},template:function(i,n){i&1&&p(0,Oe,4,0,"div",1)(1,Ke,7,4),i&2&&_(n.questionsAvailable()?1:0);},dependencies:[ce,le,q],encapsulation:2,data:{animation:[Qe]},changeDetection:0});}return t;})();function Ve(t,a){if(t&1&&u(0,"cmp-progress",2),t&2){let e=o();k("value",e.facade.checkedWeight())("max",e.facade.totalWeight())("animationDuration",e.animationDuration()),v("aria-label",e.statusLabelText());}}function Ge(t,a){if(t&1&&u(0,"cmp-progress",3),t&2){let e=o();k("value",e.facade.numberOfCheckedItems())("max",e.facade.numberOfItems())("animationDuration",e.animationDuration()),v("aria-label",e.statusLabelText());}}function Be(t,a){if(t&1&&(c(0,"span"),C(1),s()),t&2){let e=o();r(),b(e.serializeWeightPartition(e.facade.checkedWeight(),e.facade.totalWeight()));}}var he=(()=>{class t{facade=S(D);serializeWeightPartition=j;statusLabelText=T(()=>{let e=this.facade.totalWeight(),i=this.facade.checkedWeight(),n=this.facade.numberOfCheckedItems().toString(),d=this.facade.numberOfItems().toString();return this.facade.trackWeight()?"You have packed "+E(i,void 0,1)+" out of "+E(e,void 0,1)+" by packing "+n+" out of "+d+" items.":"You have packed "+n+" out of "+d+" items.";});animationDuration=w(0);constructor(){$(()=>{this.animationDuration.set(this.facade.animationsEnabled()?500:0);});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-packlist-status"]],decls:8,vars:4,consts:()=>{let e;e="weight packing progress";let i;return i="item packing progress",[[1,"card","mb-1"],[1,"mb-1","flex"],["title",e,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["title",i,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["aria-hidden","true",1,"flex","flex-col","items-center"]];},template:function(i,n){i&1&&(c(0,"div",0)(1,"div",1),p(2,Ve,1,4,"cmp-progress",2)(3,Ge,1,4,"cmp-progress",3),s(),c(4,"div",4)(5,"span"),C(6),s(),p(7,Be,2,1,"span"),s()()),i&2&&(r(2),_(n.facade.trackWeight()?2:3),r(4),z("",n.facade.numberOfCheckedItems()," / ",n.facade.numberOfItems(),""),r(),_(n.facade.trackWeight()?7:-1));},dependencies:[_e],encapsulation:2,changeDetection:0});}return t;})();function ze(t,a){t&1&&u(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function qe(t,a){if(t&1){let e=y();c(0,"div",1)(1,"p",2),V(2,0),c(3,"button",3),P("click",function(){g(e);let n=o();return f(n.goToConfigImport());}),s(),c(4,"button",3),P("click",function(){g(e);let n=o();return f(n.goToRulesEdit());}),s(),G(),s()();}}var Rt=(()=>{class t{facade=S(D);rulesAvailable=this.facade.rulesAvailable;goToRulesEdit=this.facade.goToRulesEdit;goToConfigImport=this.facade.goToConfigImport;static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;return e=" No rules available, please "+"\uFFFD#3\uFFFD"+" import "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" or "+"\uFFFD#4\uFFFD"+" create "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" some. ",e=ae(e),[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&p(0,ze,3,0)(1,qe,5,0,"div",1),i&2&&_(n.rulesAvailable()?0:1);},dependencies:[Ce,Te,he],encapsulation:2,changeDetection:0});}return t;})();export{Rt as PacklistComponent};/**i18n:5366b86f2516668e0182d7169675f5a9db84e9239a33e605b62f0d042910cdf2*/