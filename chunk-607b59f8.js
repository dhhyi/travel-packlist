import{c as b,d as I,e as D,g as d,h as G,i as nt,j as x,k as B,l as j,m as v,n as S,o as Y}from"./chunk-8a9a02b3.js";import{a as pt,c as mt,d as dt}from"./chunk-a22c312e.js";import{f as ot,h as at,i as st,j as rt,s as q,t as lt,u as ct,w as _t}from"./chunk-cd1e44c0.js";import"./chunk-afa126bf.js";import{b as K,c as H,s as P}from"./chunk-a19fb5de.js";import"./chunk-74ff73aa.js";import"./chunk-eb86e6a0.js";import{$b as U,Ab as _,Ba as y,Bb as tt,Db as O,Eb as R,Fb as l,Gb as a,Hb as m,Ja as F,Jb as L,Kb as W,Lb as Q,Mb as et,Pb as it,Qb as A,Rb as o,Yb as k,Za as r,Zb as $,_b as z,ea as f,kb as T,la as u,ma as C,ob as p,vb as E,vc as h,wb as g,xb as w,ya as X}from"./chunk-da5c6bf3.js";import{a as J,b as Z}from"./chunk-ad6d2de6.js";var ut={opacity:0,transform:"scale(0.9)",height:0,minHeight:0,padding:0,margin:"-2px"},Ct={opacity:1,transform:"scale(1)",height:"*",minHeight:"*",padding:"*",margin:"*"},N=B([d(ut),Y(50,[I("0.3s ease-in",d(Ct))])]),V=B([d(Ct),Y(50,[I("0.3s ease-in",d(ut))])]);function Et(e,s){e&1&&m(0,"app-icon-checkmark");}function vt(e,s){if(e&1&&k(0),e&2){let t=o();U(" ",t.count()," / ",t.total(),`
`);}}var gt=(()=>{class e{count=X(0);total=X(0);static ɵfac=function(i){return new(i||e)();};static ɵcmp=T({type:e,selectors:[["app-items-status"]],inputs:{count:[1,"count"],total:[1,"total"]},decls:2,vars:1,template:function(i,n){i&1&&p(0,Et,1,0,"app-icon-checkmark")(1,vt,1,2),i&2&&_(n.count()===n.total()?0:1);},dependencies:[q],encapsulation:2,changeDetection:0});}return e;})();var Tt=(e,s)=>s.name;function Lt(e,s){e&1&&(l(0,"div",1)(1,"p",4),et(2,0),a()());}function bt(e,s){if(e&1&&k(0),e&2){let t=o(2).$implicit,i=o();z(" (",i.serializeWeight(t.checkedWeight,void 0,1),") ");}}function yt(e,s){if(e&1&&k(0),e&2){let t=o(2).$implicit,i=o();z(" (",i.serializeWeightPartition(t.checkedWeight,t.totalWeight),") ");}}function Dt(e,s){if(e&1&&(l(0,"span",9),p(1,bt,1,1)(2,yt,1,1),a()),e&2){let t=o().$implicit;r(),_(t.checkedWeight===t.totalWeight?1:2);}}function Ft(e,s){if(e&1&&(l(0,"span",13),k(1),a()),e&2){let t=o().$implicit,i=o(3);r(),$(i.serializeWeight(t.weight));}}function wt(e,s){if(e&1){let t=L();l(0,"div",11)(1,"div",12),A("click",function(){let n=u(t).$implicit,c=o(3);return C(c.toggleCheckedItem(n));})("keypress",function(){let n=u(t).$implicit,c=o(3);return C(c.toggleCheckedItem(n));})("dblclick",function(){let n=u(t).$implicit,c=o(3);return C(c.dblclick(n));})("touchstart",function(){let n=u(t).$implicit,c=o(3);return C(c.tapStart(n));})("touchmove",function(){u(t);let n=o(3);return C(n.tapEnd());})("touchend",function(){u(t);let n=o(3);return C(n.tapEnd());}),k(2),p(3,Ft,2,1,"span",13),a()();}if(e&2){let t=s.$implicit,i=o(3);r(),w("text-checked-item",t.checked&&!t.skipped)("text-skipped-item",t.skipped),g("@animateStrikeThrough",t.checked),E("aria-checked",t.checked),r(),z(" ",t.name," "),r(),_(t.weight&&i.trackWeight()?3:-1);}}function Mt(e,s){if(e&1&&O(0,wt,4,8,"div",11,Tt),e&2){let t=o().$implicit;R(t.items);}}function Ot(e,s){if(e&1){let t=L();l(0,"div",3)(1,"div",5),A("click",function(){let n=u(t).$implicit,c=o();return C(c.toggleCategoryCollapse(n.name));}),l(2,"div",6),m(3,"app-icon-key-right",7),l(4,"span",8),k(5),a(),p(6,Dt,3,1,"span",9),a(),m(7,"app-items-status",10),a(),p(8,Mt,2,0),a();}if(e&2){let t=s.$implicit,i=o();g("@animateItems",t),E("aria-label",t.name),r(3),g("@animateChevron",t.collapsed),r(2),$(t.name),r(),_(i.trackWeight()&&t.totalWeight?6:-1),r(),g("count",t.checkedItems)("total",t.totalItems),r(),_(t.collapsed?-1:8);}}var Rt=b("animateCategory",[x("* <=> *",[D([S('div[role="list"]:enter',v(N),{optional:!0}),S('div[role="list"]:leave',v(V),{optional:!0}),S("@*",[j()],{optional:!0})])])]),$t=b("animateItems",[x("* <=> *",[D([S('div[role="listitem"]:enter',[d({opacity:0,height:0}),I("0.2s ease-in",d({opacity:1,height:"*"}))],{optional:!0}),S('div[role="listitem"]:leave',[d({opacity:1,height:"*"}),I("0.2s ease-in",d({opacity:0,height:0}))],{optional:!0}),S("@*",[j()],{optional:!0})])])]),Kt=b("animateChevron",[G("true",d({transform:"rotate(0)"})),G("false",d({transform:"rotate(90deg)"})),x("false => true",I("0.5s ease-in-out")),x("true => false",I("0.5s ease-in-out",nt([d({transform:"rotate(0)"}),d({transform:"rotate(100deg)"}),d({transform:"rotate(80deg)"})])))]),Nt=b("animateStrikeThrough",[G("true",d({textDecorationColor:"inherit"})),G("false",d({textDecorationColor:"transparent"})),x("false => true",I("0.2s ease-in-out"))]),St=(()=>{class e{state=f(P);stats=this.state.packlist.stats;packlist=this.state.packlist.model;trackWeight=this.state.config.trackWeight;toggleCategoryCollapse=this.state.packlist.toggleCategoryCollapse;toggleCheckedItem=this.state.packlist.toggleCheckedItem;serializeWeight=K;serializeWeightPartition=H;animationsDisabled=y(!0);constructor(){F(()=>{this.animationsDisabled.set(!this.state.config.animations());});}dblclick(t){this.state.browser.isMobile()||this.state.packlist.toggleSkippedItem(t);}touchAction;tapStart(t){this.state.browser.isMobile()&&(this.touchAction=setTimeout(()=>{this.state.packlist.toggleSkippedItem(t);},800));}tapEnd(){this.touchAction&&clearTimeout(this.touchAction);}static ɵfac=function(i){return new(i||e)();};static ɵcmp=T({type:e,selectors:[["app-display-items"]],decls:4,vars:3,consts:()=>{let t;return t="Keine Gegenst\xE4nde verf\xFCgbar.",[t,[1,"flex","flex-col","items-center"],[1,"contents"],["role","list",1,"card","mb-1","overflow-hidden"],[1,"text-center"],["aria-hidden","true",1,"accessible-content","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-1"],[1,"h-6","w-6"],[1,"font-bold","italic"],[1,"text-sm"],[3,"count","total"],["role","listitem"],["role","checkbox","tabindex","0",1,"flex","select-none","items-center","justify-between",3,"click","keypress","dblclick","touchstart","touchmove","touchend"],[1,"italic"]];},template:function(i,n){i&1&&(p(0,Lt,3,0,"div",1),l(1,"div",2),O(2,Ot,9,8,"div",3,Tt),a()),i&2&&(_(n.stats().totalItems?-1:0),r(),g("@animateCategory",n.packlist())("@.disabled",n.animationsDisabled()),r(),R(n.packlist()));},dependencies:[gt,rt],encapsulation:2,data:{animation:[Rt,$t,Kt,Nt]},changeDetection:0});}return e;})();var Vt=(e,s)=>s.question;function Gt(e,s){if(e&1){let t=L();l(0,"div",1)(1,"p",2),W(2,0),l(3,"button",3),A("click",function(){u(t);let n=o(2);return C(n.goToRulesEdit());}),a(),Q(),a()();}}function Bt(e,s){if(e&1&&p(0,Gt,4,0,"div",1),e&2){let t=o();_(t.rulesMode()==="local"?0:-1);}}function Wt(e,s){e&1&&m(0,"app-icon-checkmark");}function Qt(e,s){if(e&1){let t=L();l(0,"div",5),A("click",function(){let n=u(t).$implicit,c=o(2);return C(c.toggleQuestion(n));})("keypress",function(){let n=u(t).$implicit,c=o(2);return C(c.toggleQuestion(n));}),l(1,"span",6),k(2),a(),p(3,Wt,1,0,"app-icon-checkmark"),a();}if(e&2){let t=s.$implicit,i=s.$index,n=s.$count,c=o(2);w("disabled",c.isAnswersLockActive())("mb-1",i!==n-1),E("aria-checked",c.isQuestionActive(t))("aria-disabled",c.isAnswersLockActive())("aria-label",t.question),r(2),$(t.question),r(),_(c.isQuestionActive(t)?3:-1);}}function zt(e,s){if(e&1&&(l(0,"div"),O(1,Qt,4,9,"div",4,Vt),a()),e&2){let t=o();g("@.disabled",t.animationsDisabled())("@animateQuestions",t.displayQuestions()),r(),R(t.displayQuestions());}}var Ut=b("animateQuestions",[x("* <=> *",[D([S("div.card:enter",v(N),{optional:!0}),S("div.card:leave",v(V),{optional:!0}),S("app-icon-checkmark:enter",[d({transform:"translateX(200%)"}),I("0.3s ease-in",d({transform:"translateX(0)"}))],{optional:!0})])])]),ft=(()=>{class e{state=f(P);questions=this.state.active.questions;isQuestionActive=t=>this.state.packlist.answers()[t.variable];isAnswersLockActive=this.state.packlist.answersLocked;displayQuestions=h(()=>this.questions().filter(t=>!this.isAnswersLockActive()||this.isQuestionActive(t)));rulesMode=this.state.rules.mode;toggleQuestion=t=>{this.isAnswersLockActive()||this.state.packlist.answers.update(i=>Z(J({},i),{[t.variable]:!i[t.variable]}));};goToRulesEdit(){this.state.router.go("rules->edit");}animationsDisabled=y(!0);constructor(){F(()=>{this.animationsDisabled.set(!this.state.config.animations());});}static ɵfac=function(i){return new(i||e)();};static ɵcmp=T({type:e,selectors:[["app-display-questions"]],decls:2,vars:1,consts:()=>{let t;return t="Keine Fragen verf\xFCgbar, bitte "+"\uFFFD#3\uFFFD"+" erstelle "+"\uFFFD/#3\uFFFD"+" welche.",[t,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"],["role","checkbox","tabindex","0",1,"card","flex","flex-row","items-center","justify-between","overflow-hidden",3,"disabled","mb-1"],["role","checkbox","tabindex","0",1,"card","flex","flex-row","items-center","justify-between","overflow-hidden",3,"click","keypress"],["aria-hidden","true",1,"select-none","font-bold"]];},template:function(i,n){i&1&&p(0,Bt,1,1)(1,zt,3,2,"div"),i&2&&_(n.questions().length?1:0);},dependencies:[q],encapsulation:2,data:{animation:[Ut]},changeDetection:0});}return e;})();function qt(e,s){if(e&1&&m(0,"cmp-bar-chart",4),e&2){let t=o().$implicit;g("bars",t);}}function Ht(e,s){if(e&1&&p(0,qt,1,1,"cmp-bar-chart",4),e&2){let t=s.$index,i=o();_(t===i.currentPage()?0:-1);}}var At=B([S(":enter",d({transform:"translateY({{ from }})",height:"0"})),D([S(":leave",I("300ms",d({transform:"translateY({{ to }})",height:"0"}))),S(":enter",I("300ms",d({transform:"translateY(0)",height:"*"})))])]),Xt=b("animatePages",[x(":increment",[v(At,{params:{from:"150%",to:"-150%"}})]),x(":decrement",[v(At,{params:{from:"-150%",to:"150%"}})])]),Pt=(()=>{class e{pageSize=10;state=f(P);heaviestItems=h(()=>this.state.packlist.model().flatMap(t=>t.items).filter(t=>t.weight&&!t.skipped&&t.weight>0).toSorted((t,i)=>i.weight-t.weight).reduce((t,i)=>{let n=(t.max||i.weight)??0,c={name:`${i.name} (${K(i.weight)})`,value:(i.weight??0)/n};return{max:n,items:[...t.items,c]};},{max:NaN,items:[]}).items.reduce((t,i,n)=>{let c=Math.floor(n/this.pageSize);return t[c]=[...(t[c]||[]),i],t;},[]));currentPage=y(0);lastPage=h(()=>this.heaviestItems().length-1);previousPage(){this.currentPage.update(t=>Math.max(0,t-1));}nextPage(){this.currentPage.update(t=>Math.min(this.lastPage(),t+1));}static ɵfac=function(i){return new(i||e)();};static ɵcmp=T({type:e,selectors:[["app-heaviest-items"]],decls:6,vars:3,consts:()=>{let t;t="Vorherige Seite";let i;return i="N\xE4chste Seite",[[1,"flex","flex-col","justify-between"],["iconArrowUpward","","iconClass","h-6 w-6","type","button","role","button","aria-label",t,1,"link","px-1",3,"click","disabled"],["iconArrowDownward","","iconClass","h-6 w-6","type","button","role","button","aria-label",i,1,"link","px-1",3,"click","disabled"],[1,"flex-grow","overflow-hidden"],[3,"bars"]];},template:function(i,n){i&1&&(l(0,"div",0)(1,"button",1),A("click",function(){return n.previousPage();}),a(),l(2,"button",2),A("click",function(){return n.nextPage();}),a()(),l(3,"div",3),O(4,Ht,1,1,null,null,tt),a()),i&2&&(r(),g("disabled",n.currentPage()<=0),r(),g("disabled",n.currentPage()>=n.lastPage()),r(),g("@animatePages",n.currentPage()),r(),R(n.heaviestItems()));},dependencies:[pt,_t,ct],styles:["[_nghost-%COMP%]{display:flex;width:100%;max-width:350px;flex-direction:row;gap:.25rem}"],data:{animation:[Xt]},changeDetection:0});}return e;})();function jt(e,s){if(e&1&&m(0,"cmp-progress",2),e&2){let t=o();g("value",t.stats().checkedWeight)("max",t.stats().totalWeight)("animationDuration",t.animationDuration()),E("aria-label",t.statusLabelText());}}function Yt(e,s){if(e&1&&m(0,"cmp-progress",3),e&2){let t=o();g("value",t.stats().checkedItems)("max",t.stats().totalItems)("animationDuration",t.animationDuration()),E("aria-label",t.statusLabelText());}}function Jt(e,s){if(e&1&&(l(0,"span"),k(1),a()),e&2){let t=o();r(),$(t.serializeWeightPartition(t.stats().checkedWeight,t.stats().totalWeight));}}var ht=(()=>{class e{state=f(P);trackWeight=this.state.config.trackWeight;stats=this.state.packlist.stats;serializeWeightPartition=H;statusLabelText=h(()=>{let t=this.stats().totalWeight,i=this.stats().checkedWeight,n=this.stats().checkedItems.toString(),c=this.stats().totalItems.toString();return this.trackWeight()?"Du hast "+K(i,void 0,1)+" von "+K(t,void 0,1)+" gepackt, indem du "+n+" von "+c+" Gegenst\xE4nde gepackt hast.":"Du hast "+n+" von "+c+" Gegenst\xE4nde gepackt.";});animationDuration=y(0);constructor(){F(()=>{this.animationDuration.set(this.state.config.animations()?500:0);});}static ɵfac=function(i){return new(i||e)();};static ɵcmp=T({type:e,selectors:[["app-packlist-progress"]],decls:8,vars:4,consts:()=>{let t;t="Gewicht-Packfortschritt";let i;return i="Gegenstandspackfortschritt",[[1,"card","mb-1"],[1,"mb-1","flex"],["title",t,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["title",i,"aria-live","polite",1,"grow",3,"value","max","animationDuration"],["aria-hidden","true",1,"flex","flex-col","items-center"]];},template:function(i,n){i&1&&(l(0,"div",0)(1,"div",1),p(2,jt,1,4,"cmp-progress",2)(3,Yt,1,4,"cmp-progress",3),a(),l(4,"div",4)(5,"span"),k(6),a(),p(7,Jt,2,1,"span"),a()()),i&2&&(r(2),_(n.trackWeight()?2:3),r(4),U("",n.stats().checkedItems," / ",n.stats().totalItems,""),r(),_(n.trackWeight()?7:-1));},dependencies:[dt],encapsulation:2,changeDetection:0});}return e;})();function Zt(e,s){e&1&&m(0,"app-icon-lock",2);}function te(e,s){e&1&&m(0,"app-icon-lock-open",2);}function ee(e,s){if(e&1){let t=L();l(0,"button",3),A("click",function(){u(t);let n=o(2);return C(n.toggleStats("distribution"));}),a(),l(1,"button",4),A("click",function(){u(t);let n=o(2);return C(n.toggleStats("heaviestItems"));}),a();}if(e&2){let t=o(2);w("pressed",t.statsVisible()==="distribution"),E("aria-pressed",t.statsVisible()==="distribution"),r(),w("pressed",t.statsVisible()==="heaviestItems"),E("aria-pressed",t.statsVisible()==="heaviestItems");}}function ie(e,s){if(e&1){let t=L();l(0,"div",0)(1,"button",1),A("click",function(){u(t);let n=o();return C(n.toggleAnswersLock());})("keypress",function(){u(t);let n=o();return C(n.toggleAnswersLock());}),p(2,Zt,1,0,"app-icon-lock",2)(3,te,1,0,"app-icon-lock-open",2),a(),p(4,ee,2,6),a();}if(e&2){let t=o();r(),w("pressed",t.isAnswersLockActive()),E("aria-pressed",t.isAnswersLockActive()),r(),_(t.isAnswersLockActive()?2:3),r(2),_(t.displayWeightStatsButtons()?4:-1);}}var It=(()=>{class e{state=f(P);isAnswersLockActive=this.state.packlist.answersLocked;questionsAvailable=h(()=>this.state.active.questions().length>0);toggleAnswersLock(){this.state.packlist.answersLocked.update(t=>!t);}displayWeightStatsButtons=h(()=>this.state.config.trackWeight()&&this.state.packlist.stats().totalWeight>0);statsVisible=this.state.packlist.statsVisible;toggleStats(t){this.statsVisible.update(i=>{if(i!==t)return t;});}static ɵfac=function(i){return new(i||e)();};static ɵcmp=T({type:e,selectors:[["app-packlist-toolbar"]],decls:1,vars:1,consts:()=>{let t;t="Antworten sperren";let i;i="Zeige Gewichtsverteilung an";let n;return n="Zeige die schwersten Gegenst\xE4nde an",[[1,"flex","justify-center","gap-x-4","py-2"],["type","button","role","button","aria-label",t,1,"link",3,"click","keypress"],[1,"h-6","w-6"],["iconPieChart","","iconClass","h-6 w-6","type","button","role","button","aria-label",i,1,"link",3,"click"],["iconBarChart","","iconClass","h-6 w-6 rotate-90","type","button","role","button","aria-label",n,1,"link",3,"click"]];},template:function(i,n){i&1&&p(0,ie,5,5,"div",0),i&2&&_(n.questionsAvailable()?0:-1);},dependencies:[lt,at,st,ot],encapsulation:2,changeDetection:0});}return e;})();var kt=(()=>{class e{state=f(P);weightStats=h(()=>this.state.packlist.model().map(t=>({name:t.name,value:t.totalWeight/this.state.packlist.stats().totalWeight})).filter(t=>t.value>0));static ɵfac=function(i){return new(i||e)();};static ɵcmp=T({type:e,selectors:[["app-weight-distribution"]],decls:1,vars:1,consts:[["chartClass","max-w-[300px]",3,"segments"]],template:function(i,n){i&1&&m(0,"cmp-pie-chart",0),i&2&&g("segments",n.weightStats());},dependencies:[mt],encapsulation:2,changeDetection:0});}return e;})();function ne(e,s){e&1&&(l(0,"div",1),m(1,"app-weight-distribution"),a());}function oe(e,s){e&1&&(l(0,"div",2),m(1,"app-heaviest-items"),a());}var ae=b("animateDiagram",[x("* <=> *",[D([S("div.card:enter",v(N),{optional:!0}),S("div.card:leave",v(V),{optional:!0})])])]),xt=(()=>{class e{state=f(P);statsVisible=this.state.packlist.statsVisible;animationsDisabled=y(!0);constructor(){F(()=>{this.animationsDisabled.set(!this.state.config.animations());});}static ɵfac=function(i){return new(i||e)();};static ɵcmp=T({type:e,selectors:[["app-packlist-status"]],decls:5,vars:4,consts:[[1,"contents"],[1,"card","mb-1"],[1,"card","mb-1","flex","flex-col","items-center"]],template:function(i,n){i&1&&(m(0,"app-packlist-toolbar"),l(1,"div",0),p(2,ne,2,0,"div",1)(3,oe,2,0,"div",2),a(),m(4,"app-packlist-progress")),i&2&&(r(),g("@animateDiagram",n.statsVisible())("@.disabled",n.animationsDisabled()),r(),_(n.statsVisible()==="distribution"?2:-1),r(),_(n.statsVisible()==="heaviestItems"?3:-1));},dependencies:[Pt,It,ht,kt],encapsulation:2,data:{animation:[ae]},changeDetection:0});}return e;})();function se(e,s){e&1&&m(0,"app-display-questions")(1,"app-packlist-status")(2,"app-display-items");}function re(e,s){if(e&1){let t=L();l(0,"div",1)(1,"p",2),W(2,0),l(3,"button",3),A("click",function(){u(t);let n=o();return C(n.goToConfigImport());}),a(),l(4,"button",3),A("click",function(){u(t);let n=o();return C(n.goToRulesEdit());}),a(),Q(),a()();}}var Ei=(()=>{class e{state=f(P);rulesAvailable=h(()=>this.state.rules.parsed().length>0);rulesMode=this.state.rules.mode;goToRulesEdit(){this.state.router.go("rules->edit");}goToConfigImport(){this.state.router.go("config#import");}static ɵfac=function(i){return new(i||e)();};static ɵcmp=T({type:e,selectors:[["app-packlist"]],decls:2,vars:1,consts:()=>{let t;return t="Keine Regeln verf\xFCgbar, bitte "+"\uFFFD#3\uFFFD"+" importiere "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" oder "+"\uFFFD#4\uFFFD"+" erstelle "+"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"+" welche.",t=it(t),[t,[1,"flex","flex-col","items-center"],[1,"text-center"],["type","button",1,"link","inline","p-0","underline",3,"click"]];},template:function(i,n){i&1&&p(0,se,3,0)(1,re,5,0,"div",1),i&2&&_(n.rulesAvailable()?0:n.rulesMode()==="local"?1:-1);},dependencies:[St,ft,xt],encapsulation:2,changeDetection:0});}return e;})();export{Ei as PacklistComponent};/**i18n:3ea64412cb2fa7572222484f1122e69f6d5b2ce20c9a2c903c347eb498cd7f05*/