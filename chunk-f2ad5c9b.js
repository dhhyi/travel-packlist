import{c as F,d as f,e as M,g as c,h as N,i as it,j as I,k as Y,l as j,m as b,n as h,o as H}from"./chunk-52d2bc2d.js";import{b as st}from"./chunk-ca4279b1.js";import{f as nt,g as ot,h as at,p as B}from"./chunk-7ff34069.js";import"./chunk-4649e0d4.js";import{C as v,m as R,n as Q}from"./chunk-869a6500.js";import"./chunk-0f08dbce.js";import{Ba as L,Bb as m,Eb as w,Fb as $,Gb as l,Hb as s,Ib as C,Ja as D,Kb as k,Lb as V,Mb as K,Nb as tt,Qb as et,Rb as S,Sb as o,Za as r,ac as g,bc as E,cc as G,dc as W,ea as P,kb as A,la as u,ma as d,pb as p,wb as x,xb as T,ya as X,yb as O,zc as y}from"./chunk-3414ef25.js";import{a as J,b as Z}from"./chunk-f82bfcf9.js";var rt={opacity:0,transform:"scale(0.9)",height:0,minHeight:0,padding:0,margin:"-2px"},lt={opacity:1,transform:"scale(1)",height:"*",minHeight:"*",padding:"*",margin:"*"},U=Y([c(rt),H(50,[f("0.3s ease-in",c(lt))])]),q=Y([c(lt),H(50,[f("0.3s ease-in",c(rt))])]);function dt(e,a){e&1&&C(0,"app-icon-checkmark");}function Ct(e,a){if(e&1&&g(0),e&2){let t=o();W(" ",t.count()," / ",t.total(),`
`);}}var ct=(()=>{class e{count=X(0);total=X(0);static ɵfac=function(i){return new(i||e)();};static ɵcmp=A({type:e,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&p(0,dt,1,0,"app-icon-checkmark")(1,Ct,1,2),i&2&&m(n.count()===n.total()?0:1);},dependencies:[B],encapsulation:2,changeDetection:0});}return e;})();var _t=(e,a)=>a.name;function gt(e,a){e&1&&(l(0,"div",1)(1,"p",4),tt(2,0),s()());}function Tt(e,a){if(e&1&&g(0),e&2){let t=o(2).$implicit,i=o();G(" (",i.serializeWeight(t.checkedWeight,void 0,1),") ");}}function St(e,a){if(e&1&&g(0),e&2){let t=o(2).$implicit,i=o();G(" (",i.serializeWeightPartition(t.checkedWeight,t.totalWeight),") ");}}function ft(e,a){if(e&1&&(l(0,"span",9),p(1,Tt,1,1)(2,St,1,1),s()),e&2){let t=o().$implicit;r(),m(t.checkedWeight===t.totalWeight?1:2);}}function ht(e,a){if(e&1&&(l(0,"span",13),g(1),s()),e&2){let t=o().$implicit,i=o(3);r(),E(i.serializeWeight(t.weight));}}function At(e,a){if(e&1){let t=k();l(0,"div",11)(1,"div",12),S("click",function(){let n=u(t).$implicit,_=o(3);return d(_.toggleCheckedItem(n));})("keypress",function(){let n=u(t).$implicit,_=o(3);return d(_.toggleCheckedItem(n));})("dblclick",function(){let n=u(t).$implicit,_=o(3);return d(_.toggleSkippedItem(n));})("touchstart",function(){let n=u(t).$implicit,_=o(3);return d(_.touchStart(n));})("touchend",function(){u(t);let n=o(3);return d(n.touchEnd());}),g(2),p(3,ht,2,1,"span",13),s()();}if(e&2){let t=a.$implicit,i=o(3);r(),O("text-checked-item",t.checked&&!t.skipped)("text-skipped-item",t.skipped),T("@animateStrikeThrough",t.checked),x("aria-checked",t.checked),r(),G(" ",t.name," "),r(),m(t.weight&&i.trackWeight()?3:-1);}}function kt(e,a){if(e&1&&w(0,At,4,8,"div",11,_t),e&2){let t=o().$implicit;$(t.items);}}function xt(e,a){if(e&1){let t=k();l(0,"div",3)(1,"div",5),S("click",function(){let n=u(t).$implicit,_=o();return d(_.toggleCategoryCollapse(n.name));}),l(2,"div",6),C(3,"app-icon-key-right",7),l(4,"span",8),g(5),s(),p(6,ft,3,1,"span",9),s(),C(7,"app-items-status",10),s(),p(8,kt,2,0),s();}if(e&2){let t=a.$implicit,i=o();T("@animateItems",t),x("aria-label",t.name),r(3),T("@animateChevron",t.collapsed),r(2),E(t.name),r(),m(i.trackWeight()&&t.totalWeight?6:-1),r(),T("count",t.checkedItems)("total",t.totalItems),r(),m(t.collapsed?-1:8);}}var Pt=F("animateCategory",[I("* <=> *",[M([h('div[role="list"]:enter',b(U),{optional:!0}),h('div[role="list"]:leave',b(q),{optional:!0}),h("@*",[j()],{optional:!0})])])]),It=F("animateItems",[I("* <=> *",[M([h('div[role="listitem"]:enter',[c({opacity:0,height:0}),f("0.2s ease-in",c({opacity:1,height:"*"}))],{optional:!0}),h('div[role="listitem"]:leave',[c({opacity:1,height:"*"}),f("0.2s ease-in",c({opacity:0,height:0}))],{optional:!0}),h("@*",[j()],{optional:!0})])])]),vt=F("animateChevron",[N("true",c({transform:"rotate(0)"})),N("false",c({transform:"rotate(90deg)"})),I("false => true",f("0.5s ease-in-out")),I("true => false",f("0.5s ease-in-out",it([c({transform:"rotate(0)"}),c({transform:"rotate(100deg)"}),c({transform:"rotate(80deg)"})])))]),Et=F("animateStrikeThrough",[N("true",c({textDecorationColor:"inherit"})),N("false",c({textDecorationColor:"transparent"})),I("false => true",f("0.2s ease-in-out"))]),pt=(()=>{class e{state=P(v);stats=this.state.packlist.stats;packlist=this.state.packlist.model;trackWeight=this.state.config.trackWeight;toggleCategoryCollapse=this.state.packlist.toggleCategoryCollapse;toggleCheckedItem=this.state.packlist.toggleCheckedItem;toggleSkippedItem=this.state.packlist.toggleSkippedItem;serializeWeight=R;serializeWeightPartition=Q;animationsDisabled=L(!0);constructor(){D(()=>{this.animationsDisabled.set(!this.state.config.animations());});}touchAction;touchStart(t){this.touchAction=setTimeout(()=>{this.toggleSkippedItem(t);},1e3);}touchEnd(){this.touchAction&&clearTimeout(this.touchAction);}static ɵfac=function(i){return new(i||e)();};static ɵcmp=A({type:e,selectors:[["app-display-items"]],decls:4,vars:3,consts:()=>{let t;return t="No items available.",[t,[1,"flex","flex-col","items-center"],[1,"contents"],["role","list",1,"card","mb-1","overflow-hidden"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","select-none","items-center","justify-between",3,"click","keypress","dblclick","touchstart","touchend"],[1,"italic"]];},template:function(i,n){i&1&&(p(0,gt,3,0,"div",1),l(1,"div",2),w(2,xt,9,8,"div",3,_t),s()),i&2&&(m(n.stats().totalItems?-1:0),r(),T("@animateCategory",n.packlist())("@.disabled",n.animationsDisabled()),r(),$(n.packlist()));},dependencies:[ct,at],encapsulation:2,data:{animation:[Pt,It,vt,Et]},changeDetection:0});}return e;})();var yt=(e,a)=>a.question;function Ft(e,a){if(e&1){let t=k();l(0,"div",1)(1,"p",2),V(2,0),l(3,"button",3),S("click",function(){u(t);let n=o();return d(n.goToRulesEdit());}),s(),K(),s()();}}function Lt(e,a){e&1&&C(0,"app-icon-checkmark");}function Dt(e,a){if(e&1){let t=k();l(0,"div",5),S("click",function(){let n=u(t).$implicit,_=o(2);return d(_.toggleQuestion(n));})("keypress",function(){let n=u(t).$implicit,_=o(2);return d(_.toggleQuestion(n));}),l(1,"span",6),g(2),s(),p(3,Lt,1,0,"app-icon-checkmark"),s();}if(e&2){let t=a.$implicit,i=o(2);O("disabled",i.isAnswersLockActive()),x("aria-checked",i.isQuestionActive(t))("aria-disabled",i.isAnswersLockActive())("aria-label",t.question),r(2),E(t.question),r(),m(i.isQuestionActive(t)?3:-1);}}function bt(e,a){if(e&1&&(l(0,"div"),w(1,Dt,4,7,"div",4,yt),s()),e&2){let t=o();T("@.disabled",t.animationsDisabled())("@animateQuestions",t.questions()),r(),$(t.displayQuestions());}}var wt=F("animateQuestions",[I("* <=> *",[M([h("div.card:enter",b(U),{optional:!0}),h("div.card:leave",b(q),{optional:!0}),h("app-icon-checkmark:enter",[c({transform:"translateX(200%)"}),f("0.3s ease-in",c({transform:"translateX(0)"}))],{optional:!0})])])]),mt=(()=>{class e{state=P(v);questions=this.state.active.questions;isQuestionActive=t=>this.state.packlist.answers()[t.variable];isAnswersLockActive=this.state.packlist.answersLocked;displayQuestions=y(()=>this.questions().filter(t=>!this.isAnswersLockActive()||this.isQuestionActive(t)));toggleQuestion=t=>{this.isAnswersLockActive()||this.state.packlist.answers.update(i=>Z(J({},i),{[t.variable]:!i[t.variable]}));};goToRulesEdit(){this.state.router.go("rules->edit");}animationsDisabled=L(!0);constructor(){D(()=>{this.animationsDisabled.set(!this.state.config.animations());});}static ɵfac=function(i){return new(i||e)();};static ɵcmp=A({type:e,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let t;return t=" No questions available, please "+"\uFFFD#3\uFFFD"+" create "+"\uFFFD/#3\uFFFD"+" some. ",[t,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"disabled"],["role","checkbox","tabindex","0",1,"card","mb-1","flex","flex-row","items-center","justify-between","overflow-hidden",3,"click","keypress"],["aria-hidden","true",1,"select-none","font-bold"]];},template:function(i,n){i&1&&p(0,Ft,4,0,"div",1)(1,bt,3,2,"div"),i&2&&m(n.questions().length?1:0);},dependencies:[B],encapsulation:2,data:{animation:[wt]},changeDetection:0});}return e;})();function $t(e,a){e&1&&C(0,"app-icon-lock",7);}function Mt(e,a){e&1&&C(0,"app-icon-lock-open",7);}function Nt(e,a){if(e&1){let t=k();l(0,"div",0)(1,"button",6),S("click",function(){u(t);let n=o();return d(n.toggleAnswersLock());})("keypress",function(){u(t);let n=o();return d(n.toggleAnswersLock());}),p(2,$t,1,0,"app-icon-lock",7)(3,Mt,1,0,"app-icon-lock-open",7),s()();}if(e&2){let t=o();r(),x("aria-pressed",t.isAnswersLockActive()),r(),m(t.isAnswersLockActive()?2:3);}}function Rt(e,a){if(e&1&&C(0,"cmp-progress",3),e&2){let t=o();T("value",t.stats().checkedWeight)("max",t.stats().totalWeight)("animationDuration",t.animationDuration()),x("aria-label",t.statusLabelText());}}function Ot(e,a){if(e&1&&C(0,"cmp-progress",4),e&2){let t=o();T("value",t.stats().checkedItems)("max",t.stats().totalItems)("animationDuration",t.animationDuration()),x("aria-label",t.statusLabelText());}}function Vt(e,a){if(e&1&&(l(0,"span"),g(1),s()),e&2){let t=o();r(),E(t.serializeWeightPartition(t.stats().checkedWeight,t.stats().totalWeight));}}var ut=(()=>{class e{state=P(v);questionsAvailable=y(()=>this.state.active.questions().length>0);isAnswersLockActive=this.state.packlist.answersLocked;trackWeight=this.state.config.trackWeight;stats=this.state.packlist.stats;toggleAnswersLock(){this.state.packlist.answersLocked.update(t=>!t);}serializeWeightPartition=Q;statusLabelText=y(()=>{let t=this.stats().totalWeight,i=this.stats().checkedWeight,n=this.stats().checkedItems.toString(),_=this.stats().totalItems.toString();return this.trackWeight()?"You have packed "+R(i,void 0,1)+" out of "+R(t,void 0,1)+" by packing "+n+" out of "+_+" items.":"You have packed "+n+" out of "+_+" items.";});animationDuration=L(0);constructor(){D(()=>{this.animationDuration.set(this.state.config.animations()?500:0);});}static ɵfac=function(i){return new(i||e)();};static ɵcmp=A({type:e,selectors:[["app-packlist-status"]],decls:9,vars:5,consts:()=>{let t;t="weight packing progress";let i;i="item packing progress";let n;return n="Lock answers",[[1,"flex","justify-center"],[1,"card","mb-1"],[1,"mb-1","flex"],["title",t,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["title",i,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["aria-hidden","true",1,"flex","flex-col","items-center"],["type","button","role","button","aria-label",n,1,"link",3,"click","keypress"],[1,"h-6","w-6"]];},template:function(i,n){i&1&&(p(0,Nt,4,2,"div",0),l(1,"div",1)(2,"div",2),p(3,Rt,1,4,"cmp-progress",3)(4,Ot,1,4,"cmp-progress",4),s(),l(5,"div",5)(6,"span"),g(7),s(),p(8,Vt,2,1,"span"),s()()),i&2&&(m(n.questionsAvailable()?0:-1),r(3),m(n.trackWeight()?3:4),r(4),W("",n.stats().checkedItems," / ",n.stats().totalItems,""),r(),m(n.trackWeight()?8:-1));},dependencies:[nt,ot,st],encapsulation:2,changeDetection:0});}return e;})();function Kt(e,a){e&1&&C(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function Gt(e,a){if(e&1){let t=k();l(0,"div",1)(1,"p",2),V(2,0),l(3,"button",3),S("click",function(){u(t);let n=o();return d(n.goToConfigImport());}),s(),l(4,"button",3),S("click",function(){u(t);let n=o();return d(n.goToRulesEdit());}),s(),K(),s()();}}var Fe=(()=>{class e{state=P(v);rulesAvailable=y(()=>this.state.rules.parsed().length>0);goToRulesEdit(){this.state.router.go("rules->edit");}goToConfigImport(){this.state.router.go("config#import");}static ɵfac=function(i){return new(i||e)();};static ɵcmp=A({type:e,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let t;return t=" No rules available, please "+"\uFFFD#3\uFFFD"+" import "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" or "+"\uFFFD#4\uFFFD"+" create "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" some. ",t=et(t),[t,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&p(0,Kt,3,0)(1,Gt,5,0,"div",1),i&2&&m(n.rulesAvailable()?0:1);},dependencies:[pt,mt,ut],encapsulation:2,changeDetection:0});}return e;})();export{Fe as PacklistComponent};/**i18n:fa6a0de0799e328438a1292187138906a6008b52cafbc3fb84e0949794a35b78*/