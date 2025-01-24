import{a as We}from"./chunk-997d7e9d.js";import{b as w}from"./chunk-3fcbc460.js";import{j as Xe,l as ze,u as Ue,v as He}from"./chunk-e3604e7f.js";import{a as te,d as b,f as y,o as M,r as Be}from"./chunk-21a0f0e3.js";import{q as N}from"./chunk-c1193dc0.js";import{b as we,d as U,e as Ke}from"./chunk-f8091216.js";import{$b as W,Aa as r,Ab as re,Bb as Q,Da as Te,Db as L,Eb as X,Fb as Y,Ga as v,Gb as Le,Ha as _e,Hb as S,Ib as A,Ja as Oe,Jb as u,Kb as be,Lb as ye,Ma as g,Mb as se,Na as fe,Nb as J,Oa as Ie,Ob as Ce,Pb as ee,Ra as P,Rb as ce,Sb as $e,Tb as ke,V as B,W as ue,X as Ne,Ya as x,Za as Re,_a as G,aa as p,b as K,bb as j,bc as z,cb as F,fb as Ge,gb as Fe,hb as _,ia as I,ib as l,ja as R,jb as d,kb as he,kc as De,lb as V,lc as ve,mb as q,mc as xe,nb as Z,nc as Ve,ob as s,pb as le,qb as ae,sb as O,ta as D,tb as E,ya as oe,zb as Me}from"./chunk-b1dbc7fb.js";import"./chunk-9a864749.js";var it=(e,C)=>({"bg-slate-300":e,"dark:bg-slate-700":C});function ot(e,C){if(e&1){let i=V();_(0,"legend",5),O("click",function(t){I(i);let a=E(2);return R(a.toggleHelp(t));})("keypress",function(t){I(i);let a=E(2);return R(a.toggleHelp(t));}),L(1),l();}if(e&2){let i=E(2);r(),Y(" ",i.help()," ");}}function _t(e,C){if(e&1){let i=V();_(0,"button",2),O("click",function(t){I(i);let a=E();return R(a.toggleHelp(t));}),d(1,"app-icon-help",3),l(),P(2,ot,2,1,"legend",4);}if(e&2){let i=E();r(2),F(i.helpVisible()?2:-1);}}var $=(()=>{class e{id=D.required();label=D.required();help=D();model=v(void 0);onChange=K;onTouched=K;helpVisible=v(!1);constructor(){z(()=>{this.onChange(this.model()),this.onTouched();});}toggleHelp(i){i.stopPropagation(),this.helpVisible.update(n=>!n);}toggle(){this.model.update(i=>!i);}writeValue(i){this.model.set(i);}registerOnChange(i){this.onChange=i;}registerOnTouched(i){this.onTouched=i;}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["cmp-checkbox"]],hostAttrs:["role","checkbox","tabindex","0"],hostVars:2,hostBindings:function(n,t){n&1&&O("click",function(){return t.toggle();})("keypress",function(){return t.toggle();}),n&2&&x("aria-checked",t.model())("aria-label",t.label()+(t.help()?". ("+t.help()+")":""));},inputs:{id:[1,"id"],label:[1,"label"],help:[1,"help"]},features:[J([{provide:te,useExisting:B(()=>e),multi:!0}])],decls:4,vars:9,consts:[["tabindex","-1",1,"my-2","h-6","min-h-6","w-6","min-w-6","appearance-none","rounded-sm","border-4","border-slate-300","dark:border-slate-700",3,"id"],[1,"grow",3,"htmlFor"],["type","button","tabindex","-1","aria-hidden","true",1,"link",3,"click"],[1,"h-6","w-6"],["role","contentinfo",1,"help"],["role","contentinfo",1,"help",3,"click","keypress"]],template:function(n,t){n&1&&(d(0,"div",0),_(1,"label",1),L(2),l(),P(3,_t,3,1)),n&2&&(j(ee(6,it,t.model(),t.model())),G("id",t.id()),r(),G("htmlFor",t.id()),r(),X(t.label()),r(),F(t.help()?3:-1));},dependencies:[M,Xe],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:.5rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0});}return e;})();var lt=(e,C)=>C.value(),at=(e,C)=>({"bg-slate-300":e,"dark:bg-slate-700":C});function rt(e,C){e&1&&he(0);}function st(e,C){if(e&1){let i=V();be(0),_(1,"div",2),O("click",function(){I(i);let t=se(0),a=E();return R(a.model.set(t));})("keypress",function(){I(i);let t=se(0),a=E();return R(a.model.set(t));}),d(2,"div",3),P(3,rt,1,0,"ng-container",4),l();}if(e&2){let i=C.$implicit,n=E(),t=ye(i.value());r(),x("aria-checked",n.model()===t),r(),j(ee(5,at,n.model()===t,n.model()===t)),r(),G("ngTemplateOutlet",n.template(t));}}var H=(()=>{class e{value=D.required();template=p(Te);static ɵfac=function(n){return new(n||e)();};static ɵdir=Ie({type:e,selectors:[["ng-template","value",""]],inputs:{value:[1,"value"]}});}return e;})(),ne=(()=>{class e{label=D.required();model=v(void 0);children=Oe(H);onChanged=K;onTouched=K;constructor(){z(()=>{this.onChanged(this.model()),this.onTouched();});}template(i){let n=this.children().find(t=>t.value()===i);if(!n)throw new Error(`No template found for option: ${i}`);return n.template;}writeValue(i){this.model.set(i);}registerOnChange(i){this.onChanged=i;}registerOnTouched(i){this.onTouched=i;}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["cmp-select-options"]],contentQueries:function(n,t,a){n&1&&Me(a,t.children,H,4),n&2&&Q();},inputs:{label:[1,"label"]},features:[J([{provide:te,useExisting:B(()=>e),multi:!0}])],decls:5,vars:2,consts:[["role","radiogroup",1,"flex","flex-wrap","justify-evenly","gap-2","gap-y-4","pb-4"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap",3,"click","keypress"],[1,"mr-2","h-6","min-h-6","w-6","min-w-6","rounded-full","border-4","border-slate-300","dark:border-slate-700"],[4,"ngTemplateOutlet"]],template:function(n,t){n&1&&(_(0,"fieldset",0)(1,"legend"),L(2),l(),Ge(3,st,4,8,"div",1,lt),l()),n&2&&(x("aria-label",t.label()),r(2),X(t.label()),r(),Fe(t.children()));},dependencies:[ve],styles:[".accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0});}return e;})();var k=(()=>{class e{static ɵfac=function(n){return new(n||e)();};static ɵmod=fe({type:e});static ɵinj=Ne({imports:[$]});}return e;})();function Ct(e,C){e&1&&s(0,1);}function ct(e,C){e&1&&s(0,2);}function pt(e,C){e&1&&s(0,3);}function gt(e,C){e&1&&(_(0,"span",25),s(1,4),l());}function Pt(e,C){e&1&&(_(0,"span",26),s(1,5),l());}function dt(e,C){e&1&&(_(0,"span",27),s(1,6),l());}function mt(e,C){e&1&&s(0,7);}function Et(e,C){e&1&&s(0,8);}function St(e,C){e&1&&s(0,9);}function At(e,C){e&1&&d(0,"app-flag-uk",28);}function ut(e,C){e&1&&d(0,"app-flag-germany",28);}var qe=(()=>{class e{state=p(N);theme=this.state.signal("theme");language=this.state.signal("language");fontSize=this.state.signal("fontSize");accessibility=this.state.signal("accessibility");static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-appearance"]],decls:17,vars:4,consts:()=>{let i;i="Theme";let n;n="Font Size";let t;t="Accessibility";let a;a="Language";let o;o="Appearance";let m;m="Dark";let f;f="Light";let c;c="System";let Pe;Pe="small";let de;de="normal";let me;me="large";let Ee;Ee="accessible";let Se;Se="compact";let Ae;return Ae="detect",[o,m,f,c,Pe,de,me,Ee,Se,Ae,["label",i,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",n,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",t,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["label",a,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"],[1,"h-6","w-8"]];},template:function(n,t){n&1&&(_(0,"h2"),s(1,0),l(),_(2,"cmp-select-options",10),u("ngModelChange",function(o){return A(t.theme,o)||(t.theme=o),o;}),P(3,Ct,1,0,"ng-template",11)(4,ct,1,0,"ng-template",12)(5,pt,1,0,"ng-template",13),l(),_(6,"cmp-select-options",14),u("ngModelChange",function(o){return A(t.fontSize,o)||(t.fontSize=o),o;}),P(7,gt,2,0,"ng-template",15)(8,Pt,2,0,"ng-template",16)(9,dt,2,0,"ng-template",17),l(),_(10,"cmp-select-options",18),u("ngModelChange",function(o){return A(t.accessibility,o)||(t.accessibility=o),o;}),P(11,mt,1,0,"ng-template",19)(12,Et,1,0,"ng-template",20),l(),_(13,"cmp-select-options",21),u("ngModelChange",function(o){return A(t.language,o)||(t.language=o),o;}),P(14,St,1,0,"ng-template",22)(15,At,1,0,"ng-template",23)(16,ut,1,0,"ng-template",24),l()),n&2&&(r(2),S("ngModel",t.theme),r(4),S("ngModel",t.fontSize),r(4),S("ngModel",t.accessibility),r(3),S("ngModel",t.language));},dependencies:[M,b,y,k,ne,H,He,Ue],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var ie=(()=>{class e{state=p(N);rulesShare=p(We);resetHash(){this.state.set("lastExportHash",this.state.get("rulesHash")),this.state.set("lastExportDate",new Date().getTime());}isExportAvailable(){return!!this.state.get("rules");}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.get("exportNeeded")&&!(await w("You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?"))?Promise.resolve(!1):new Promise(i=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{i(!1);}),n.onchange=async()=>{let t=n.files?.[0];if(!t){i(!1);return;}let a=await t.text();this.state.set("rules",a),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),i(!0);},n.click();});}async promptEnableWeightTracking(){this.state.get("percentageOfItemsWithWeights")>.1&&!this.state.get("trackWeight")&&(await w("It seems that the imported rules contain items with weights. Shall we enable the weight tracking?"))&&this.state.set("trackWeight",!0);}resetChecklist(){this.state.set("answers",{}),this.state.set("checkedItems",[]),this.state.set("collapsedCategories",[]),this.state.set("answersLocked",!1);}static ɵfac=function(n){return new(n||e)();};static ɵprov=ue({token:e,factory:e.ɵfac,providedIn:"root"});}return e;})();function Nt(e,C){e&1&&s(0,2);}function Tt(e,C){e&1&&s(0,3);}var Ze=(()=>{class e{router=p(U);state=p(N);facade=p(ie);trackWeight=this.state.signal("trackWeight");categorySorting=this.state.signal("categorySorting");async resetChecklist(){(await w("Are you sure you want to reset the checklist?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-checklist"]],decls:8,vars:2,consts:()=>{let i;i="Track item weight";let n;n="You can enter the item weight appended to the item name in the editor.";let t;t="Sort categories";let a;a="Checklist";let o;o="Reset Checklist";let m;m="alphabetically";let f;return f="order of definition",[a,o,m,f,["type","button",3,"click"],["id","track-weight","label",i,"help",n,3,"ngModelChange","ngModel"],["label",t,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,t){n&1&&(_(0,"h2"),s(1,0),l(),_(2,"button",4),O("click",function(){return t.resetChecklist();}),s(3,1),l(),_(4,"cmp-checkbox",5),u("ngModelChange",function(o){return A(t.trackWeight,o)||(t.trackWeight=o),o;}),l(),_(5,"cmp-select-options",6),u("ngModelChange",function(o){return A(t.categorySorting,o)||(t.categorySorting=o),o;}),P(6,Nt,1,0,"ng-template",7)(7,Tt,1,0,"ng-template",8),l()),n&2&&(r(4),S("ngModel",t.trackWeight),r(),S("ngModel",t.categorySorting));},dependencies:[M,b,y,k,$,ne,H],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var Qe=(()=>{class e{router=p(U);state=p(N);async resetEverything(){(await w("Are you sure you want to reset the whole application?"))&&(this.state.reset(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let i;i="DANGER!";let n;return n=" Reset Application\n",[i,n,["type","button",1,"red",3,"click"]];},template:function(n,t){n&1&&(_(0,"h2"),s(1,0),l(),_(2,"button",2),O("click",function(){return t.resetEverything();}),s(3,1),l());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var Ye=(()=>{class e{state=p(N);fadeOutDisabledRules=this.state.signal("fadeOutDisabledRules");highlightVariableStatus=this.state.signal("highlightVariableStatus");refactorVariables=this.state.signal("refactorVariables");static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-rules-editor"]],decls:11,vars:3,consts:()=>{let i;i="Fade out disabled rules in editor";let n;n="Highlight variable status in editor";let t;t="Rename all occurrences when renaming variables";let a;a="Rules Editor";let o;o="Edit Rules";let m;m="Documentation";let f;return f="Edit Rules with Code",[a,o,m,f,["type","button","routerLink","/rules"],["id","rules-debug-mode","label",i,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",t,3,"ngModelChange","ngModel"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"]];},template:function(n,t){n&1&&(_(0,"h2"),s(1,0),l(),_(2,"button",4),s(3,1),l(),_(4,"cmp-checkbox",5),u("ngModelChange",function(o){return A(t.fadeOutDisabledRules,o)||(t.fadeOutDisabledRules=o),o;}),l(),_(5,"cmp-checkbox",6),u("ngModelChange",function(o){return A(t.highlightVariableStatus,o)||(t.highlightVariableStatus=o),o;}),l(),_(6,"cmp-checkbox",7),u("ngModelChange",function(o){return A(t.refactorVariables,o)||(t.refactorVariables=o),o;}),l(),_(7,"button",8),s(8,2),l(),_(9,"button",9),s(10,3),l()),n&2&&(r(4),S("ngModel",t.fadeOutDisabledRules),r(),S("ngModel",t.highlightVariableStatus),r(),S("ngModel",t.refactorVariables));},dependencies:[k,$,M,b,y,Ke],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var Ot=["exportButton"],ft=["importButton"],Je=e=>({"bg-green-light animate-pulse":e});function It(e,C){e&1&&(_(0,"div",6),s(1,4),l());}function Rt(e,C){e&1&&(_(0,"div",9),d(1,"app-icon-download",10),l());}var et=(()=>{class e{router=p(U);route=p(we);state=p(N);exportReminder=this.state.signal("exportReminder");exportNeeded=this.state.signal("exportNeeded");facade=p(ie);highlightExport;exportButton=_e.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=_e.required("importButton");loading=v(!1);constructor(){let i=Be(this.route.fragment);this.highlightExport=W(()=>i()==="export-now"),this.highlightImport=W(()=>i()==="import"),z(()=>{let n=i();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,t){n&1&&(re(t.exportButton,Ot,5),re(t.importButton,ft,5)),n&2&&Q(2);},decls:9,vars:10,consts:()=>{let i;i="Remind me to regularly export rules";let n;n=" Export Rules\n";let t;t=" Import Rules\n";let a;return a=" Current rules are not backed up! ",[["exportButton",""],["importButton",""],n,t,a,["type","button",3,"click","ngClass","disabled"],[1,"text-red","text-center","italic"],["type","button",3,"click","ngClass"],["id","export-reminder","label",i,3,"ngModelChange","ngModel"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],[1,"h-[12rem]","w-[12rem]"]];},template:function(n,t){if(n&1){let a=V();_(0,"button",5,0),O("click",function(){return I(a),R(t.exportRules());}),s(2,2),l(),P(3,It,2,0,"div",6),_(4,"button",7,1),O("click",function(){return I(a),R(t.importRules());}),s(6,3),l(),_(7,"cmp-checkbox",8),u("ngModelChange",function(m){return I(a),A(t.exportReminder,m)||(t.exportReminder=m),R(m);}),l(),P(8,Rt,2,0,"div",9);}n&2&&(G("ngClass",Ce(6,Je,t.highlightExport()&&t.exportNeeded()))("disabled",!t.isExportAvailable()),r(3),F(t.exportNeeded()?3:-1),r(),G("ngClass",Ce(8,Je,t.highlightImport())),r(3),S("ngModel",t.exportReminder),r(),F(t.loading()?8:-1));},dependencies:[M,b,y,k,$,ze,De],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function Gt(e,C){e&1&&(_(0,"p"),q(1,3),_(2,"a",8),d(3,"img",9),l(),Z(),l());}var tt=(()=>{class e{displayKoFi=!0;static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let i;i="open an issue on GitHub";let n;n="email to danilo.hoffmann1@googlemail.com";let t;t="Support";let a;a=" If you find any bugs or have any suggestions, please open an issue on GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let o;o=" Alternatively, you can reach out to me by "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+"";let m;m="Buy Me a Coffee at ko-fi.com";let f;return f=" If you like this app, please consider to "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[t,a,o,f,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",i,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",m,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,t){n&1&&(_(0,"h2"),s(1,0),l(),_(2,"p"),q(3,1),_(4,"a",4),d(5,"img",5),l(),Z(),l(),_(6,"p"),q(7,2),_(8,"a",6),d(9,"img",7),l(),Z(),l(),P(10,Gt,4,0,"p")),n&2&&(r(10),F(t.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function Ft(e,C){if(e&1&&L(0),e&2){let i=E();Le(" ",i.versionCode," (",i.version,") ");}}function ht(e,C){if(e&1&&L(0),e&2){let i=E();Y(" ",i.version," ");}}function Mt(e,C){if(e&1&&(_(0,"span",7),s(1,2),l()),e&2){let i=E();r(),le(i.serviceWorkerStatus()),ae(1);}}var nt=(()=>{class e{state=p(N);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1736348348117;version="0.4.0-accessibility-4";gitHash="3d60225430d430d8ccaa9b8b6f0c47dcbb5d310e";versionCode=14;currentVersionLabel="Current version is "+this.version+"";serviceWorkerStatus=W(()=>{switch(this.state.signal("serviceWorkerStatus")()){case"disabled":return"disabled";case"error":return"error";case"unrecoverable":return"unrecoverable - please refresh";case"init":return"initializing";case"ok":return"ok";case"update-available":return"update available";}});static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-version"]],decls:15,vars:16,consts:()=>{let i;i="App Version";let n;n="built on "+"\uFFFD0\uFFFD"+"";let t;return t="Service Worker: "+"\uFFFD0\uFFFD"+"",[i,n,t,[1,"accessible-content","inline-block","content-center",3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"font-mono","text-sm"]];},template:function(n,t){n&1&&(_(0,"h2"),s(1,0),l(),_(2,"span")(3,"a",3),P(4,Ft,1,2)(5,ht,1,1),l()(),_(6,"span",4),s(7,1),ce(8,"date"),l(),_(9,"span",5)(10,"a",3),ce(11,"slice"),_(12,"span",6),L(13),l()()(),P(14,Mt,2,1,"span",7)),n&2&&(r(3),G("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+t.version,oe),x("aria-label",t.currentVersionLabel),r(),F(t.displayVersionCode?4:5),r(4),le($e(8,9,t.buildTime,"long")),ae(7),r(2),Re("aria-label","Current git hash starts with ",ke(11,12,t.gitHash,0,8),""),G("href","https://github.com/dhhyi/travel-packlist/commit/"+t.gitHash,oe),r(3),X(t.gitHash),r(),F(t.displayServiceWorkerStatus?14:-1));},dependencies:[xe,Ve],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var ai=(()=>{class e{static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config"]],decls:7,vars:0,template:function(n,t){n&1&&d(0,"app-config-checklist")(1,"app-config-rules-editor")(2,"app-config-rules-import-export")(3,"app-config-appearance")(4,"app-config-version")(5,"app-config-support")(6,"app-config-dangerzone");},dependencies:[Ze,Ye,et,qe,nt,tt,Qe],encapsulation:2,changeDetection:0});}return e;})();export{ai as default};/**i18n:a0cb156d3141d1fb250da8465e56462e8a2ed50869b02cb5b44a45862bdbaf22*/