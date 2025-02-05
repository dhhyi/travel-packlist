import{c as L,d as k,e as R,g as l,h as W,i as ae,j as F,k as H,l as J,m as O,n as A,o as Z}from"./chunk-566b7d74.js";import{b as me}from"./chunk-746bacc4.js";import{f as se,g as re,h as ce,p as z}from"./chunk-ec7e9cc0.js";import"./chunk-29c892b0.js";import{B as le,n as E}from"./chunk-910509aa.js";import"./chunk-080625d0.js";import{Ba as w,Bb as _,Eb as M,Fb as N,Gb as c,Hb as s,Ib as u,Ja as $,Kb as y,Lb as V,Mb as G,Nb as ne,Qb as oe,Rb as P,Sb as o,Za as r,_ as ie,ac as f,bc as b,cc as B,dc as q,ea as x,kb as I,la as g,ma as C,pb as p,wb as v,xb as S,ya as j,yb as Q,zc as T}from"./chunk-d8ae0c91.js";import{a as ee,b as te}from"./chunk-bbcdbfbd.js";var pe={opacity:0,transform:"scale(0.9)",height:0,minHeight:0,padding:0,margin:"-2px"},_e={opacity:1,transform:"scale(1)",height:"*",minHeight:"*",padding:"*",margin:"*"},U=H([l(pe),Z(50,[k("0.3s ease-in",l(_e))])]),X=H([l(_e),Z(50,[k("0.3s ease-in",l(pe))])]);var D=(()=>{class t{state=x(le);animationsEnabled=this.state.config.animations;numberOfItems=T(()=>this.state.active.items().length);checkedItems=this.state.packlist.checkedItems;collapsedCategories=this.state.packlist.collapsedCategories;numberOfCheckedItems=T(()=>{let e=this.state.active.items();return this.checkedItems().filter(i=>e.includes(i)).length;});isCategoryCollapsed(e){return this.collapsedCategories().includes(e);}toggleCheckedItem=this.state.packlist.toggleCheckedItem;toggleCategoryCollapse=e=>{this.collapsedCategories().includes(e)?this.collapsedCategories.update(i=>i.filter(n=>n!==e)):this.collapsedCategories.update(i=>[...i,e]);};categoriesOrderBy=T(()=>this.state.config.categorySorting()==="definition"?()=>0:(i,n)=>i.localeCompare(n));packlist=T(()=>{let e=this.state.active.items(),i=this.checkedItems(),n=e.reduce((h,m)=>(h[m.category]||(h[m.category]={name:m.category,items:[],checked:0,collapsed:this.isCategoryCollapsed(m.category),totalWeight:0,checkedWeight:0}),h[m.category].items.push({category:m.category,name:m.name,weight:m.weight,checked:i.includes(m)}),i.includes(m)&&(h[m.category].checked++,h[m.category].checkedWeight+=m.weight??0),h[m.category].totalWeight+=m.weight??0,h),{}),d=this.categoriesOrderBy();return Object.entries(n).map(h=>h[1]).toSorted((h,m)=>d(h.name,m.name));});totalWeight=T(()=>this.packlist().reduce((e,i)=>e+i.totalWeight,0));checkedWeight=T(()=>this.packlist().reduce((e,i)=>e+i.checkedWeight,0));rulesAvailable=T(()=>this.state.rules.parsed().length>0);isAnswersLockActive=this.state.packlist.answersLocked;model=this.state.packlist.answers;activeQuestions=this.state.active.questions;questions=T(()=>this.activeQuestions().filter(e=>!this.isAnswersLockActive()||this.model()[e.variable]));questionsAvailable=T(()=>this.activeQuestions().length>0);toggleQuestion=e=>{this.isAnswersLockActive()||this.model.update(i=>te(ee({},i),{[e.variable]:!i[e.variable]}));};isQuestionActive=e=>this.model()[e.variable];toggleAnswersLock=()=>{this.isAnswersLockActive.update(e=>!e);};trackWeight=this.state.config.trackWeight;goToConfigImport=()=>{this.state.router.go("config#import");};goToRulesEdit=()=>{this.state.router.go("rules->edit");};static ɵfac=function(i){return new(i||t)();};static ɵprov=ie({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function Y(t,a){return E(t,void 0,1)+" / "+E(a,void 0,1);}function Te(t,a){t&1&&u(0,"app-icon-checkmark");}function he(t,a){if(t&1&&f(0),t&2){let e=o();q(" ",e.count()," / ",e.total(),`
`);}}var de=(()=>{class t{count=j(0);total=j(0);static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&p(0,Te,1,0,"app-icon-checkmark")(1,he,1,2),i&2&&_(n.count()===n.total()?0:1);},dependencies:[z],encapsulation:2,changeDetection:0});}return t;})();var ue=(t,a)=>a.name;function Se(t,a){t&1&&(c(0,"div",1)(1,"p",4),ne(2,0),s()());}function ke(t,a){if(t&1&&f(0),t&2){let e=o(2).$implicit,i=o();B(" (",i.serializeWeight(e.checkedWeight,void 0,1),") ");}}function Ae(t,a){if(t&1&&f(0),t&2){let e=o(2).$implicit,i=o();B(" (",i.serializeWeightPartition(e.checkedWeight,e.totalWeight),") ");}}function xe(t,a){if(t&1&&(c(0,"span",9),p(1,ke,1,1)(2,Ae,1,1),s()),t&2){let e=o().$implicit;r(),_(e.checkedWeight===e.totalWeight?1:2);}}function Ie(t,a){if(t&1&&(c(0,"span",13),f(1),s()),t&2){let e=o().$implicit,i=o(3);r(),b(i.serializeWeight(e.weight));}}function Pe(t,a){if(t&1){let e=y();c(0,"div",11)(1,"div",12),P("click",function(){let n=g(e).$implicit,d=o(3);return C(d.toggleCheckedItem(n));})("keypress",function(){let n=g(e).$implicit,d=o(3);return C(d.toggleCheckedItem(n));}),f(2),p(3,Ie,2,1,"span",13),s()();}if(t&2){let e=a.$implicit,i=o(3);r(),Q("text-checked-item",e.checked),S("@animateStrikeThrough",e.checked),v("aria-checked",e.checked),r(),B(" ",e.name," "),r(),_(e.weight&&i.trackWeight()?3:-1);}}function ve(t,a){if(t&1&&M(0,Pe,4,6,"div",11,ue),t&2){let e=o().$implicit;N(e.items);}}function ye(t,a){if(t&1){let e=y();c(0,"div",3)(1,"div",5),P("click",function(){let n=g(e).$implicit,d=o();return C(d.toggleCategoryCollapse(n.name));}),c(2,"div",6),u(3,"app-icon-key-right",7),c(4,"span",8),f(5),s(),p(6,xe,3,1,"span",9),s(),u(7,"app-items-status",10),s(),p(8,ve,2,0),s();}if(t&2){let e=a.$implicit,i=o();S("@animateItems",e),v("aria-label",e.name),r(3),S("@animateChevron",e.collapsed),r(2),b(e.name),r(),_(i.trackWeight()&&e.totalWeight?6:-1),r(),S("count",e.checked)("total",e.items.length),r(),_(e.collapsed?-1:8);}}var Ee=L("animateCategory",[F("* <=> *",[R([A('div[role="list"]:enter',O(U),{optional:!0}),A('div[role="list"]:leave',O(X),{optional:!0}),A("@*",[J()],{optional:!0})])])]),Fe=L("animateItems",[F("* <=> *",[R([A('div[role="listitem"]:enter',[l({opacity:0,height:0}),k("0.2s ease-in",l({opacity:1,height:"*"}))],{optional:!0}),A('div[role="listitem"]:leave',[l({opacity:1,height:"*"}),k("0.2s ease-in",l({opacity:0,height:0}))],{optional:!0}),A("@*",[J()],{optional:!0})])])]),De=L("animateChevron",[W("true",l({transform:"rotate(0)"})),W("false",l({transform:"rotate(90deg)"})),F("false => true",k("0.5s ease-in-out")),F("true => false",k("0.5s ease-in-out",ae([l({transform:"rotate(0)"}),l({transform:"rotate(100deg)"}),l({transform:"rotate(80deg)"})])))]),be=L("animateStrikeThrough",[W("true",l({textDecorationColor:"inherit"})),W("false",l({textDecorationColor:"transparent"})),F("false => true",k("0.2s ease-in-out"))]),ge=(()=>{class t{facade=x(D);numberOfItems=this.facade.numberOfItems;packlist=this.facade.packlist;trackWeight=this.facade.trackWeight;toggleCategoryCollapse=this.facade.toggleCategoryCollapse;toggleCheckedItem=this.facade.toggleCheckedItem;serializeWeight=E;serializeWeightPartition=Y;animationsDisabled=w(!0);constructor(){$(()=>{this.animationsDisabled.set(!this.facade.animationsEnabled());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-display-items"]],decls:4,vars:3,consts:()=>{let e;return e="Keine Gegenst\xE4nde verf\xFCgbar.",[e,[1,"flex","flex-col","items-center"],[1,"contents"],["role","list",1,"card","mb-1","overflow-hidden"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","select-none","items-center","justify-between",3,"click","keypress"],[1,"italic"]];},template:function(i,n){i&1&&(p(0,Se,3,0,"div",1),c(1,"div",2),M(2,ye,9,8,"div",3,ue),s()),i&2&&(_(n.numberOfItems()?-1:0),r(),S("@animateCategory",n.packlist())("@.disabled",n.animationsDisabled()),r(),N(n.packlist()));},dependencies:[de,ce],encapsulation:2,data:{animation:[Ee,Fe,De,be]},changeDetection:0});}return t;})();var Le=(t,a)=>a.question;function we(t,a){if(t&1){let e=y();c(0,"div",1)(1,"p",2),V(2,0),c(3,"button",3),P("click",function(){g(e);let n=o();return C(n.goToRulesEdit());}),s(),G(),s()();}}function $e(t,a){t&1&&u(0,"app-icon-checkmark");}function Oe(t,a){if(t&1){let e=y();c(0,"div",8),P("click",function(){let n=g(e).$implicit,d=o(2);return C(d.toggleQuestion(n));})("keypress",function(){let n=g(e).$implicit,d=o(2);return C(d.toggleQuestion(n));}),c(1,"span",9),f(2),s(),p(3,$e,1,0,"app-icon-checkmark"),s();}if(t&2){let e=a.$implicit,i=o(2);Q("disabled",i.isAnswersLockActive()),v("aria-checked",i.isQuestionActive(e))("aria-disabled",i.isAnswersLockActive())("aria-label",e.question),r(2),b(e.question),r(),_(i.isQuestionActive(e)?3:-1);}}function Me(t,a){t&1&&u(0,"app-icon-lock",7);}function Ne(t,a){t&1&&u(0,"app-icon-lock-open",7);}function Re(t,a){if(t&1){let e=y();c(0,"div"),M(1,Oe,4,7,"div",4,Le),s(),c(3,"div",5)(4,"button",6),P("click",function(){g(e);let n=o();return C(n.toggleAnswersLock());})("keypress",function(){g(e);let n=o();return C(n.toggleAnswersLock());}),p(5,Me,1,0,"app-icon-lock",7)(6,Ne,1,0,"app-icon-lock-open",7),s()();}if(t&2){let e=o();S("@.disabled",e.animationsDisabled())("@animateQuestions",e.questions()),r(),N(e.questions()),r(3),v("aria-pressed",e.isAnswersLockActive()),r(),_(e.isAnswersLockActive()?5:6);}}var We=L("animateQuestions",[F("* <=> *",[R([A("div.card:enter",O(U),{optional:!0}),A("div.card:leave",O(X),{optional:!0}),A("app-icon-checkmark:enter",[l({transform:"translateX(200%)"}),k("0.3s ease-in",l({transform:"translateX(0)"}))],{optional:!0})])])]),Ce=(()=>{class t{facade=x(D);questions=this.facade.questions;questionsAvailable=this.facade.questionsAvailable;isQuestionActive=this.facade.isQuestionActive;isAnswersLockActive=this.facade.isAnswersLockActive;toggleAnswersLock=this.facade.toggleAnswersLock;toggleQuestion=this.facade.toggleQuestion;goToRulesEdit=this.facade.goToRulesEdit;animationsDisabled=w(!0);constructor(){$(()=>{this.animationsDisabled.set(!this.facade.animationsEnabled());});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let e;e="Keine Fragen verf\xFCgbar, bitte "+"\uFFFD#3\uFFFD"+" erstelle "+"\uFFFD/#3\uFFFD"+" welche.";let i;return i="Antworten sperren",[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"disabled"],[1,"flex","justify-center"],["type","button","role","button","aria-label",i,1,"link",3,"click","keypress"],[1,"h-6","w-6"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"click","keypress"],["aria-hidden","true",1,"select-none","font-bold"]];},template:function(i,n){i&1&&p(0,we,4,0,"div",1)(1,Re,7,4),i&2&&_(n.questionsAvailable()?1:0);},dependencies:[se,re,z],encapsulation:2,data:{animation:[We]},changeDetection:0});}return t;})();function Ke(t,a){if(t&1&&u(0,"cmp-progress",2),t&2){let e=o();S("value",e.facade.checkedWeight())("max",e.facade.totalWeight())("animationDuration",e.animationDuration()),v("aria-label",e.statusLabelText());}}function Qe(t,a){if(t&1&&u(0,"cmp-progress",3),t&2){let e=o();S("value",e.facade.numberOfCheckedItems())("max",e.facade.numberOfItems())("animationDuration",e.animationDuration()),v("aria-label",e.statusLabelText());}}function Ve(t,a){if(t&1&&(c(0,"span"),f(1),s()),t&2){let e=o();r(),b(e.serializeWeightPartition(e.facade.checkedWeight(),e.facade.totalWeight()));}}var fe=(()=>{class t{facade=x(D);serializeWeightPartition=Y;statusLabelText=T(()=>{let e=this.facade.totalWeight(),i=this.facade.checkedWeight(),n=this.facade.numberOfCheckedItems().toString(),d=this.facade.numberOfItems().toString();return this.facade.trackWeight()?"Du hast "+E(i,void 0,1)+" von "+E(e,void 0,1)+" gepackt, indem du "+n+" von "+d+" Gegenst\xE4nde gepackt hast.":"Du hast "+n+" von "+d+" Gegenst\xE4nde gepackt.";});animationDuration=w(0);constructor(){$(()=>{this.animationDuration.set(this.facade.animationsEnabled()?500:0);});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-packlist-status"]],decls:8,vars:4,consts:()=>{let e;e="Gewicht-Packfortschritt";let i;return i="Gegenstandspackfortschritt",[[1,"card","mb-1"],[1,"mb-1","flex"],["title",e,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["title",i,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["aria-hidden","true",1,"flex","flex-col","items-center"]];},template:function(i,n){i&1&&(c(0,"div",0)(1,"div",1),p(2,Ke,1,4,"cmp-progress",2)(3,Qe,1,4,"cmp-progress",3),s(),c(4,"div",4)(5,"span"),f(6),s(),p(7,Ve,2,1,"span"),s()()),i&2&&(r(2),_(n.facade.trackWeight()?2:3),r(4),q("",n.facade.numberOfCheckedItems()," / ",n.facade.numberOfItems(),""),r(),_(n.facade.trackWeight()?7:-1));},dependencies:[me],encapsulation:2,changeDetection:0});}return t;})();function Ge(t,a){t&1&&u(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function Be(t,a){if(t&1){let e=y();c(0,"div",1)(1,"p",2),V(2,0),c(3,"button",3),P("click",function(){g(e);let n=o();return C(n.goToConfigImport());}),s(),c(4,"button",3),P("click",function(){g(e);let n=o();return C(n.goToRulesEdit());}),s(),G(),s()();}}var Ot=(()=>{class t{facade=x(D);rulesAvailable=this.facade.rulesAvailable;goToRulesEdit=this.facade.goToRulesEdit;goToConfigImport=this.facade.goToConfigImport;static ɵfac=function(i){return new(i||t)();};static ɵcmp=I({type:t,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let e;return e="Keine Regeln verf\xFCgbar, bitte "+"\uFFFD#3\uFFFD"+" importiere "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" oder "+"\uFFFD#4\uFFFD"+" erstelle "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" welche.",e=oe(e),[e,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&p(0,Ge,3,0)(1,Be,5,0,"div",1),i&2&&_(n.rulesAvailable()?0:1);},dependencies:[ge,Ce,fe],encapsulation:2,changeDetection:0});}return t;})();export{Ot as PacklistComponent};/**i18n:eee3d47a017a9f4fe983a06f27e0a9c7b95602fff3951636f2d8c55069b18d30*/