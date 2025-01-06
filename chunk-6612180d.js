import{a as ze}from"./chunk-40420d00.js";import{b as D}from"./chunk-ecd26bf9.js";import{j as De,l as Ve,u as Ke,v as Xe}from"./chunk-ae456e05.js";import{a as te,d as y,f as b,o as M,r as Ue}from"./chunk-b4a5fd47.js";import{q as A}from"./chunk-fb2819c3.js";import{b as we,d as z,e as xe}from"./chunk-6bffe2e5.js";import{$a as j,Aa as a,Ab as K,Bb as Y,Cb as Fe,Da as Ae,Db as S,Eb as u,Fb as f,Ga as w,Gb as Me,Ha as _e,Hb as Le,Ia as Ne,Ib as se,Jb as J,Kb as ce,La as p,Lb as ee,Ma as Te,Na as Oe,Nb as ye,Ob as be,Qa as P,V as B,W as ue,Wb as W,X as fe,Xa as H,Ya as h,Yb as X,aa as C,ab as G,b as V,db as Ie,eb as Re,fb as r,fc as $e,gb as _,gc as ke,hb as d,hc as ve,ia as I,ib as he,ja as R,jb as x,kb as q,lb as Z,mb as s,nb as re,ob as le,qb as T,rb as E,ta as v,vb as Ge,wb as ae,xb as Q,ya as oe,zb as L}from"./chunk-61a88145.js";import"./chunk-677272e4.js";var et=(e,c)=>({"bg-slate-300":e,"dark:bg-slate-700":c});function tt(e,c){if(e&1){let i=x();r(0,"legend",5),T("click",function(t){I(i);let l=E(2);return R(l.toggleHelp(t));})("keypress",function(t){I(i);let l=E(2);return R(l.toggleHelp(t));}),L(1),_();}if(e&2){let i=E(2);a(),Y(" ",i.help()," ");}}function nt(e,c){if(e&1){let i=x();r(0,"button",2),T("click",function(t){I(i);let l=E();return R(l.toggleHelp(t));}),d(1,"app-icon-help",3),_(),P(2,tt,2,1,"legend",4);}if(e&2){let i=E();a(2),G(i.helpVisible()?2:-1);}}var $=(()=>{class e{id=v.required();label=v.required();help=v();model=w(void 0);onChange=V;onTouched=V;helpVisible=w(!1);constructor(){X(()=>{this.onChange(this.model()),this.onTouched();});}toggleHelp(i){i.stopPropagation(),this.helpVisible.update(n=>!n);}toggle(){this.model.update(i=>!i);}writeValue(i){this.model.set(i);}registerOnChange(i){this.onChange=i;}registerOnTouched(i){this.onTouched=i;}static ɵfac=function(n){return new(n||e)();};static ɵcmp=p({type:e,selectors:[["cmp-checkbox"]],hostAttrs:["role","checkbox","tabindex","0"],hostVars:2,hostBindings:function(n,t){n&1&&T("click",function(){return t.toggle();})("keypress",function(){return t.toggle();}),n&2&&H("aria-checked",t.model())("aria-label",t.label()+(t.help()?". ("+t.help()+")":""));},inputs:{id:[1,"id"],label:[1,"label"],help:[1,"help"]},features:[J([{provide:te,useExisting:B(()=>e),multi:!0}])],decls:4,vars:9,consts:[["tabindex","-1",1,"my-2","h-6","min-h-6","w-6","min-w-6","appearance-none","rounded-sm","border-4","border-slate-300","hover:border-slate-400","dark:border-slate-700",3,"id"],[1,"grow",3,"htmlFor"],["type","button","tabindex","-1",1,"link",3,"click"],[1,"h-6","w-6"],["role","contentinfo",1,"help"],["role","contentinfo",1,"help",3,"click","keypress"]],template:function(n,t){n&1&&(d(0,"div",0),r(1,"label",1),L(2),_(),P(3,nt,3,1)),n&2&&(j(ee(6,et,t.model(),t.model())),h("id",t.id()),a(),h("htmlFor",t.id()),a(),K(t.label()),a(),G(t.help()?3:-1));},dependencies:[M,De],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:.5rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0});}return e;})();var it=(e,c)=>c.value(),ot=(e,c)=>({"bg-slate-300":e,"dark:bg-slate-700":c});function _t(e,c){e&1&&he(0);}function rt(e,c){if(e&1){let i=x();Me(0),r(1,"div",2),T("click",function(){I(i);let t=se(0),l=E();return R(l.model.set(t));})("keypress",function(){I(i);let t=se(0),l=E();return R(l.model.set(t));}),d(2,"div",3),P(3,_t,1,0,"ng-container",4),_();}if(e&2){let i=c.$implicit,n=E(),t=Le(i.value());a(),H("aria-checked",n.model()===t),a(),j(ee(5,ot,n.model()===t,n.model()===t)),a(),h("ngTemplateOutlet",n.template(t));}}var U=(()=>{class e{value=v.required();template=C(Ae);static ɵfac=function(n){return new(n||e)();};static ɵdir=Oe({type:e,selectors:[["ng-template","value",""]],inputs:{value:[1,"value"]}});}return e;})(),ne=(()=>{class e{label=v.required();model=w(void 0);children=Ne(U);onChanged=V;onTouched=V;constructor(){X(()=>{this.onChanged(this.model()),this.onTouched();});}template(i){let n=this.children().find(t=>t.value()===i);if(!n)throw new Error(`No template found for option: ${i}`);return n.template;}writeValue(i){this.model.set(i);}registerOnChange(i){this.onChanged=i;}registerOnTouched(i){this.onTouched=i;}static ɵfac=function(n){return new(n||e)();};static ɵcmp=p({type:e,selectors:[["cmp-select-options"]],contentQueries:function(n,t,l){n&1&&Ge(l,t.children,U,4),n&2&&Q();},inputs:{label:[1,"label"]},features:[J([{provide:te,useExisting:B(()=>e),multi:!0}])],decls:5,vars:2,consts:[["role","radiogroup",1,"flex","flex-wrap","justify-evenly","gap-2","gap-y-4","pb-4"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap",3,"click","keypress"],[1,"mr-2","h-6","min-h-6","w-6","min-w-6","rounded-full","border-4","border-slate-300","dark:border-slate-700"],[4,"ngTemplateOutlet"]],template:function(n,t){n&1&&(r(0,"fieldset",0)(1,"legend"),L(2),_(),Ie(3,rt,4,8,"div",1,it),_()),n&2&&(H("aria-label",t.label()),a(2),K(t.label()),a(),Re(t.children()));},dependencies:[ke],styles:[".accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0});}return e;})();var k=(()=>{class e{static ɵfac=function(n){return new(n||e)();};static ɵmod=Te({type:e});static ɵinj=fe({imports:[$]});}return e;})();function lt(e,c){e&1&&s(0,1);}function at(e,c){e&1&&s(0,2);}function st(e,c){e&1&&s(0,3);}function ct(e,c){e&1&&(r(0,"span",25),s(1,4),_());}function gt(e,c){e&1&&(r(0,"span",26),s(1,5),_());}function Ct(e,c){e&1&&(r(0,"span",27),s(1,6),_());}function pt(e,c){e&1&&s(0,7);}function Pt(e,c){e&1&&s(0,8);}function dt(e,c){e&1&&s(0,9);}function mt(e,c){e&1&&d(0,"app-flag-uk",28);}function Et(e,c){e&1&&d(0,"app-flag-germany",28);}var We=(()=>{class e{state=C(A);theme=this.state.signal("theme");language=this.state.signal("language");fontSize=this.state.signal("fontSize");accessibility=this.state.signal("accessibility");static ɵfac=function(n){return new(n||e)();};static ɵcmp=p({type:e,selectors:[["app-config-appearance"]],decls:17,vars:4,consts:()=>{let i;i="Theme";let n;n="Font Size";let t;t="Accessibility";let l;l="Language";let o;o="Appearance";let m;m="Dark";let O;O="Light";let g;g="System";let pe;pe="small";let Pe;Pe="normal";let de;de="large";let me;me="accessible";let Ee;Ee="compact";let Se;return Se="detect",[o,m,O,g,pe,Pe,de,me,Ee,Se,["label",i,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",n,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",t,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["label",l,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"],[1,"h-6","w-8"]];},template:function(n,t){n&1&&(r(0,"h2"),s(1,0),_(),r(2,"cmp-select-options",10),f("ngModelChange",function(o){return u(t.theme,o)||(t.theme=o),o;}),P(3,lt,1,0,"ng-template",11)(4,at,1,0,"ng-template",12)(5,st,1,0,"ng-template",13),_(),r(6,"cmp-select-options",14),f("ngModelChange",function(o){return u(t.fontSize,o)||(t.fontSize=o),o;}),P(7,ct,2,0,"ng-template",15)(8,gt,2,0,"ng-template",16)(9,Ct,2,0,"ng-template",17),_(),r(10,"cmp-select-options",18),f("ngModelChange",function(o){return u(t.accessibility,o)||(t.accessibility=o),o;}),P(11,pt,1,0,"ng-template",19)(12,Pt,1,0,"ng-template",20),_(),r(13,"cmp-select-options",21),f("ngModelChange",function(o){return u(t.language,o)||(t.language=o),o;}),P(14,dt,1,0,"ng-template",22)(15,mt,1,0,"ng-template",23)(16,Et,1,0,"ng-template",24),_()),n&2&&(a(2),S("ngModel",t.theme),a(4),S("ngModel",t.fontSize),a(4),S("ngModel",t.accessibility),a(3),S("ngModel",t.language));},dependencies:[M,y,b,k,ne,U,Xe,Ke],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var ie=(()=>{class e{state=C(A);rulesShare=C(ze);resetHash(){this.state.set("lastExportHash",this.state.get("rulesHash")),this.state.set("lastExportDate",new Date().getTime());}isExportAvailable(){return!!this.state.get("rules");}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.get("exportNeeded")&&!(await D("You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?"))?Promise.resolve(!1):new Promise(i=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{i(!1);}),n.onchange=async()=>{let t=n.files?.[0];if(!t){i(!1);return;}let l=await t.text();this.state.set("rules",l),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),i(!0);},n.click();});}async promptEnableWeightTracking(){this.state.get("percentageOfItemsWithWeights")>.1&&!this.state.get("trackWeight")&&(await D("It seems that the imported rules contain items with weights. Shall we enable the weight tracking?"))&&this.state.set("trackWeight",!0);}resetChecklist(){this.state.set("answers",{}),this.state.set("checkedItems",[]),this.state.set("collapsedCategories",[]),this.state.set("answersLocked",!1);}static ɵfac=function(n){return new(n||e)();};static ɵprov=ue({token:e,factory:e.ɵfac,providedIn:"root"});}return e;})();function St(e,c){e&1&&s(0,2);}function ut(e,c){e&1&&s(0,3);}var Be=(()=>{class e{router=C(z);state=C(A);facade=C(ie);trackWeight=this.state.signal("trackWeight");categorySorting=this.state.signal("categorySorting");async resetChecklist(){(await D("Are you sure you want to reset the checklist?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=p({type:e,selectors:[["app-config-checklist"]],decls:8,vars:2,consts:()=>{let i;i="Track item weight";let n;n="You can enter the item weight appended to the item name in the editor.";let t;t="Sort categories";let l;l="Checklist";let o;o=" Reset Checklist\n";let m;m="alphabetically";let O;return O="order of definition",[l,o,m,O,["type","button",3,"click"],["id","track-weight","label",i,"help",n,3,"ngModelChange","ngModel"],["label",t,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,t){n&1&&(r(0,"h2"),s(1,0),_(),r(2,"button",4),T("click",function(){return t.resetChecklist();}),s(3,1),_(),r(4,"cmp-checkbox",5),f("ngModelChange",function(o){return u(t.trackWeight,o)||(t.trackWeight=o),o;}),_(),r(5,"cmp-select-options",6),f("ngModelChange",function(o){return u(t.categorySorting,o)||(t.categorySorting=o),o;}),P(6,St,1,0,"ng-template",7)(7,ut,1,0,"ng-template",8),_()),n&2&&(a(4),S("ngModel",t.trackWeight),a(),S("ngModel",t.categorySorting));},dependencies:[M,y,b,k,$,ne,U],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var je=(()=>{class e{router=C(z);state=C(A);async resetEverything(){(await D("Are you sure you want to reset the whole application?"))&&(this.state.reset(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=p({type:e,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let i;i="DANGER!";let n;return n=" Reset Application\n",[i,n,["type","button",1,"red",3,"click"]];},template:function(n,t){n&1&&(r(0,"h2"),s(1,0),_(),r(2,"button",2),T("click",function(){return t.resetEverything();}),s(3,1),_());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var qe=(()=>{class e{state=C(A);fadeOutDisabledRules=this.state.signal("fadeOutDisabledRules");highlightVariableStatus=this.state.signal("highlightVariableStatus");refactorVariables=this.state.signal("refactorVariables");static ɵfac=function(n){return new(n||e)();};static ɵcmp=p({type:e,selectors:[["app-config-rules-editor"]],decls:11,vars:3,consts:()=>{let i;i="Fade out disabled rules in editor";let n;n="Highlight variable status in editor";let t;t="Rename all occurrences when renaming variables";let l;l="Rules Editor";let o;o=" Edit Rules\n";let m;m=" Documentation\n";let O;return O=" Edit Rules with Code\n",[l,o,m,O,["type","button","routerLink","/rules"],["id","rules-debug-mode","label",i,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",t,3,"ngModelChange","ngModel"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"]];},template:function(n,t){n&1&&(r(0,"h2"),s(1,0),_(),r(2,"button",4),s(3,1),_(),r(4,"cmp-checkbox",5),f("ngModelChange",function(o){return u(t.fadeOutDisabledRules,o)||(t.fadeOutDisabledRules=o),o;}),_(),r(5,"cmp-checkbox",6),f("ngModelChange",function(o){return u(t.highlightVariableStatus,o)||(t.highlightVariableStatus=o),o;}),_(),r(6,"cmp-checkbox",7),f("ngModelChange",function(o){return u(t.refactorVariables,o)||(t.refactorVariables=o),o;}),_(),r(7,"button",8),s(8,2),_(),r(9,"button",9),s(10,3),_()),n&2&&(a(4),S("ngModel",t.fadeOutDisabledRules),a(),S("ngModel",t.highlightVariableStatus),a(),S("ngModel",t.refactorVariables));},dependencies:[k,$,M,y,b,xe],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var ft=["exportButton"],At=["importButton"],Ze=e=>({"bg-green-light animate-pulse":e});function Nt(e,c){e&1&&(r(0,"div",6),s(1,4),_());}function Tt(e,c){e&1&&(r(0,"div",9),d(1,"app-icon-download",10),_());}var Qe=(()=>{class e{router=C(z);route=C(we);state=C(A);exportReminder=this.state.signal("exportReminder");exportNeeded=this.state.signal("exportNeeded");facade=C(ie);highlightExport;exportButton=_e.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=_e.required("importButton");loading=w(!1);constructor(){let i=Ue(this.route.fragment);this.highlightExport=W(()=>i()==="export-now"),this.highlightImport=W(()=>i()==="import"),X(()=>{let n=i();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(n){return new(n||e)();};static ɵcmp=p({type:e,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,t){n&1&&(ae(t.exportButton,ft,5),ae(t.importButton,At,5)),n&2&&Q(2);},decls:9,vars:10,consts:()=>{let i;i="Remind me to regularly export rules";let n;n=" Export Rules\n";let t;t=" Import Rules\n";let l;return l=" Current rules are not backed up! ",[["exportButton",""],["importButton",""],n,t,l,["type","button",3,"click","ngClass","disabled"],[1,"text-red","text-center","italic"],["type","button",3,"click","ngClass"],["id","export-reminder","label",i,3,"ngModelChange","ngModel"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],[1,"h-[12rem]","w-[12rem]"]];},template:function(n,t){if(n&1){let l=x();r(0,"button",5,0),T("click",function(){return I(l),R(t.exportRules());}),s(2,2),_(),P(3,Nt,2,0,"div",6),r(4,"button",7,1),T("click",function(){return I(l),R(t.importRules());}),s(6,3),_(),r(7,"cmp-checkbox",8),f("ngModelChange",function(m){return I(l),u(t.exportReminder,m)||(t.exportReminder=m),R(m);}),_(),P(8,Tt,2,0,"div",9);}n&2&&(h("ngClass",ce(6,Ze,t.highlightExport()&&t.exportNeeded()))("disabled",!t.isExportAvailable()),a(3),G(t.exportNeeded()?3:-1),a(),h("ngClass",ce(8,Ze,t.highlightImport())),a(3),S("ngModel",t.exportReminder),a(),G(t.loading()?8:-1));},dependencies:[M,y,b,k,$,Ve,$e],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function Ot(e,c){e&1&&(r(0,"p"),q(1,3),r(2,"a",9),d(3,"img",10),_(),Z(),_());}var Ye=(()=>{class e{displayKoFi=!0;static ɵfac=function(n){return new(n||e)();};static ɵcmp=p({type:e,selectors:[["app-config-support"]],decls:12,vars:1,consts:()=>{let i;i="GitHub issues";let n;n="Email";let t;t="Support";let l;l=" If you find any bugs or have any suggestions, please open an issue on GitHub: "+"\uFFFD#5\uFFFD"+""+"\uFFFD#6\uFFFD\uFFFD/#6\uFFFD"+""+"\uFFFD/#5\uFFFD"+"";let o;o=" Alternatively, you can reach out to me by "+"\uFFFD#9\uFFFD"+""+"\uFFFD#10\uFFFD\uFFFD/#10\uFFFD"+""+"\uFFFD/#9\uFFFD"+"";let m;m="Buy Me a Coffee at ko-fi.com";let O;return O=" If you like this app, please consider to "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[t,l,o,O,[1,"flex","flex-col","gap-4"],["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank"],["src","https://img.shields.io/github/issues/dhhyi/travel-packlist","alt",i,1,"inline"],["href","mailto:dhhyi@aol.com","target","_blank"],["src","https://img.shields.io/badge/email-dhhyi%40aol.com-blue","alt",n,1,"inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank"],["src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png","alt",m,1,"inline","max-w-[10rem]"]];},template:function(n,t){n&1&&(r(0,"h2"),s(1,0),_(),r(2,"div",4)(3,"p"),q(4,1),r(5,"a",5),d(6,"img",6),_(),Z(),_(),r(7,"p"),q(8,2),r(9,"a",7),d(10,"img",8),_(),Z(),_(),P(11,Ot,4,0,"p"),_()),n&2&&(a(11),G(t.displayKoFi?11:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function It(e,c){if(e&1&&L(0),e&2){let i=E();Fe(" ",i.versionCode," (",i.version,") ");}}function Rt(e,c){if(e&1&&L(0),e&2){let i=E();Y(" ",i.version," ");}}function ht(e,c){if(e&1&&(r(0,"span",6),s(1,2),_()),e&2){let i=E();a(),re(i.serviceWorkerStatus()),le(1);}}var Je=(()=>{class e{state=C(A);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1736178964310;version="0.4.0-accessibility-3";gitHash="35c4a16a6f61e86a4d3a09108ee258c55cc7c2a3";versionCode=13;serviceWorkerStatus=W(()=>{switch(this.state.signal("serviceWorkerStatus")()){case"disabled":return"disabled";case"error":return"error";case"unrecoverable":return"unrecoverable - please refresh";case"init":return"initializing";case"ok":return"ok";case"update-available":return"update available";}});static ɵfac=function(n){return new(n||e)();};static ɵcmp=p({type:e,selectors:[["app-config-version"]],decls:13,vars:9,consts:()=>{let i;i="App Version";let n;n="built on "+"\uFFFD0\uFFFD"+"";let t;return t="Service Worker: "+"\uFFFD0\uFFFD"+"",[i,n,t,[3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],[1,"font-mono","text-sm"]];},template:function(n,t){n&1&&(r(0,"h2"),s(1,0),_(),r(2,"span")(3,"a",3),P(4,It,1,2)(5,Rt,1,1),_()(),r(6,"span",4),s(7,1),ye(8,"date"),_(),r(9,"span",5)(10,"a",3),L(11),_()(),P(12,ht,2,1,"span",6)),n&2&&(a(3),h("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+t.version,oe),a(),G(t.displayVersionCode?4:5),a(4),re(be(8,6,t.buildTime,"long")),le(7),a(2),h("href","https://github.com/dhhyi/travel-packlist/commit/"+t.gitHash,oe),a(),K(t.gitHash),a(),G(t.displayServiceWorkerStatus?12:-1));},dependencies:[ve],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var oi=(()=>{class e{static ɵfac=function(n){return new(n||e)();};static ɵcmp=p({type:e,selectors:[["app-config"]],decls:7,vars:0,template:function(n,t){n&1&&d(0,"app-config-checklist")(1,"app-config-rules-editor")(2,"app-config-rules-import-export")(3,"app-config-appearance")(4,"app-config-version")(5,"app-config-support")(6,"app-config-dangerzone");},dependencies:[Be,qe,Qe,We,Je,Ye,je],encapsulation:2,changeDetection:0});}return e;})();export{oi as default};/**i18n:253d824a50230d6ba1c36645bd1a1a9583d181ff130b02f7f13f99994d3f2743*/