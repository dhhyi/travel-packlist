import{a as ze}from"./chunk-140022de.js";import{b as K}from"./chunk-6d5a7e1b.js";import{j as xe,l as Ve,u as we,v as Ke}from"./chunk-2765a49a.js";import{a as te,d as y,f as $,o as M,r as He}from"./chunk-27f3abe4.js";import{p as Xe,q as O,r as Ue}from"./chunk-2b440127.js";import{b as De,d as H,e as ve}from"./chunk-5281f6a2.js";import"./chunk-8ab849a7.js";import{$ as c,$b as Fe,Ab as Ie,Bb as Re,Cb as l,Db as _,Eb as d,Fb as Ge,Gb as V,Hb as q,Ib as Z,Jb as s,Jc as $e,Kb as re,Kc as ke,Lb as ae,Nb as N,Ob as m,Sa as oe,U as B,Ub as he,V as Ae,Va as a,Vb as se,W as ue,Wb as Q,Ya as Te,Yb as L,Zb as U,_b as Y,ab as x,ac as S,b as X,bb as _e,bc as A,cc as u,db as Ne,dc as Me,ec as Le,fc as Ce,gb as g,gc as J,hb as Oe,ia as I,ib as fe,ic as ee,ja as R,kc as be,lb as E,lc as ye,sb as b,tb as F,ub as le,uc as w,va as v,wb as j,xb as G,xc as z}from"./chunk-3bd23466.js";import"./chunk-cb4c040a.js";var et=(e,C)=>({"bg-slate-300":e,"dark:bg-slate-700":C});function tt(e,C){if(e&1){let i=V();l(0,"legend",5),N("click",function(t){I(i);let r=m(2);return R(r.toggleHelp(t));})("keypress",function(t){I(i);let r=m(2);return R(r.toggleHelp(t));}),L(1),_();}if(e&2){let i=m(2);a(),Y(" ",i.help()," ");}}function nt(e,C){if(e&1){let i=V();l(0,"button",2),N("click",function(t){I(i);let r=m();return R(r.toggleHelp(t));}),d(1,"app-icon-help",3),_(),E(2,tt,2,1,"legend",4);}if(e&2){let i=m();a(2),G(i.helpVisible()?2:-1);}}var k=(()=>{class e{id=v.required();label=v.required();help=v();model=x(void 0);onChange=X;onTouched=X;helpVisible=x(!1);constructor(){z(()=>{this.onChange(this.model()),this.onTouched();});}toggleHelp(i){i.stopPropagation(),this.helpVisible.update(n=>!n);}toggle(){this.model.update(i=>!i);}writeValue(i){this.model.set(i);}registerOnChange(i){this.onChange=i;}registerOnTouched(i){this.onTouched=i;}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["cmp-checkbox"]],hostAttrs:["role","checkbox","tabindex","0"],hostVars:2,hostBindings:function(n,t){n&1&&N("click",function(){return t.toggle();})("keypress",function(){return t.toggle();}),n&2&&b("aria-checked",t.model())("aria-label",t.label()+(t.help()?". ("+t.help()+")":""));},inputs:{id:[1,"id"],label:[1,"label"],help:[1,"help"]},features:[J([{provide:te,useExisting:B(()=>e),multi:!0}])],decls:4,vars:9,consts:[["tabindex","-1",1,"my-2","h-6","min-h-6","w-6","min-w-6","appearance-none","rounded-sm","border-4","border-slate-300","dark:border-slate-700",3,"id"],[1,"grow",3,"htmlFor"],["type","button","tabindex","-1","aria-hidden","true",1,"link",3,"click"],[1,"h-6","w-6"],["role","contentinfo",1,"help"],["role","contentinfo",1,"help",3,"click","keypress"]],template:function(n,t){n&1&&(d(0,"div",0),l(1,"label",1),L(2),_(),E(3,nt,3,1)),n&2&&(j(ee(6,et,t.model(),t.model())),F("id",t.id()),a(),F("htmlFor",t.id()),a(),U(t.label()),a(),G(t.help()?3:-1));},dependencies:[M,xe],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:.5rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0});}return e;})();var it=(e,C)=>C.value(),ot=(e,C)=>({"bg-slate-300":e,"dark:bg-slate-700":C});function _t(e,C){e&1&&Ge(0);}function lt(e,C){if(e&1){let i=V();Me(0),l(1,"div",2),N("click",function(){I(i);let t=Ce(0),r=m();return R(r.model.set(t));})("keypress",function(){I(i);let t=Ce(0),r=m();return R(r.model.set(t));}),d(2,"div",3),E(3,_t,1,0,"ng-container",4),_();}if(e&2){let i=C.$implicit,n=m(),t=Le(i.value());a(),b("aria-checked",n.model()===t),a(),j(ee(5,ot,n.model()===t,n.model()===t)),a(),F("ngTemplateOutlet",n.template(t));}}var W=(()=>{class e{value=v.required();template=c(Te);static ɵfac=function(n){return new(n||e)();};static ɵdir=fe({type:e,selectors:[["ng-template","value",""]],inputs:{value:[1,"value"]}});}return e;})(),ne=(()=>{class e{label=v.required();model=x(void 0);children=Ne(W);onChanged=X;onTouched=X;constructor(){z(()=>{this.onChanged(this.model()),this.onTouched();});}template(i){let n=this.children().find(t=>t.value()===i);if(!n)throw new Error(`No template found for option: ${i}`);return n.template;}writeValue(i){this.model.set(i);}registerOnChange(i){this.onChanged=i;}registerOnTouched(i){this.onTouched=i;}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["cmp-select-options"]],contentQueries:function(n,t,r){n&1&&he(r,t.children,W,4),n&2&&Q();},inputs:{label:[1,"label"]},features:[J([{provide:te,useExisting:B(()=>e),multi:!0}])],decls:5,vars:2,consts:[["role","radiogroup",1,"flex","flex-wrap","justify-evenly","gap-2","gap-y-4","pb-4"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap",3,"click","keypress"],[1,"mr-2","h-6","min-h-6","w-6","min-w-6","rounded-full","border-4","border-slate-300","dark:border-slate-700"],[4,"ngTemplateOutlet"]],template:function(n,t){n&1&&(l(0,"fieldset",0)(1,"legend"),L(2),_(),Ie(3,lt,4,8,"div",1,it),_()),n&2&&(b("aria-label",t.label()),a(2),U(t.label()),a(),Re(t.children()));},dependencies:[$e],styles:[".accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0});}return e;})();var D=(()=>{class e{static ɵfac=function(n){return new(n||e)();};static ɵmod=Oe({type:e});static ɵinj=ue({imports:[k]});}return e;})();function rt(e,C){e&1&&s(0,1);}function at(e,C){e&1&&s(0,2);}function st(e,C){e&1&&s(0,3);}function Ct(e,C){e&1&&(l(0,"span",25),s(1,4),_());}function ct(e,C){e&1&&(l(0,"span",26),s(1,5),_());}function Pt(e,C){e&1&&(l(0,"span",27),s(1,6),_());}function pt(e,C){e&1&&s(0,7);}function gt(e,C){e&1&&s(0,8);}function Et(e,C){e&1&&s(0,9);}function dt(e,C){e&1&&d(0,"app-flag-uk",28);}function mt(e,C){e&1&&d(0,"app-flag-germany",28);}var Be=(()=>{class e{state=c(O);theme=this.state.config.theme;language=this.state.config.language;fontSize=this.state.config.fontSize;accessibility=this.state.config.accessibility;static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-appearance"]],decls:17,vars:4,consts:()=>{let i;i="Theme";let n;n="Font Size";let t;t="Accessibility";let r;r="Language";let o;o="Appearance";let p;p="Dark";let f;f="Light";let P;P="System";let pe;pe="small";let ge;ge="normal";let Ee;Ee="large";let de;de="accessible";let me;me="compact";let Se;return Se="auto",[o,p,f,P,pe,ge,Ee,de,me,Se,["label",i,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",n,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",t,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["label",r,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"],[1,"h-6","w-8"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"cmp-select-options",10),u("ngModelChange",function(o){return A(t.theme,o)||(t.theme=o),o;}),E(3,rt,1,0,"ng-template",11)(4,at,1,0,"ng-template",12)(5,st,1,0,"ng-template",13),_(),l(6,"cmp-select-options",14),u("ngModelChange",function(o){return A(t.fontSize,o)||(t.fontSize=o),o;}),E(7,Ct,2,0,"ng-template",15)(8,ct,2,0,"ng-template",16)(9,Pt,2,0,"ng-template",17),_(),l(10,"cmp-select-options",18),u("ngModelChange",function(o){return A(t.accessibility,o)||(t.accessibility=o),o;}),E(11,pt,1,0,"ng-template",19)(12,gt,1,0,"ng-template",20),_(),l(13,"cmp-select-options",21),u("ngModelChange",function(o){return A(t.language,o)||(t.language=o),o;}),E(14,Et,1,0,"ng-template",22)(15,dt,1,0,"ng-template",23)(16,mt,1,0,"ng-template",24),_()),n&2&&(a(2),S("ngModel",t.theme),a(4),S("ngModel",t.fontSize),a(4),S("ngModel",t.accessibility),a(3),S("ngModel",t.language));},dependencies:[M,y,$,D,ne,W,Ke,we],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var ie=(()=>{class e{state=c(O);rulesShare=c(ze);refactor=c(Xe);percentageOfItemsWithWeights=w(()=>{if(!this.state.rules.parserError()){let{items:i,weights:n}=this.refactor.countItemsAndWeights(this.state.rules.parsed());return n/i;}return 0;});resetHash(){this.state.export.lastHash.set(this.state.rules.hash()),this.state.export.lastDate.set(new Date().getTime());}isExportAvailable(){return!!this.state.rules.customized();}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.rules.exportNeeded()&&!(await K("You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?"))?Promise.resolve(!1):new Promise(i=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{i(!1);}),n.onchange=async()=>{let t=n.files?.[0];if(!t){i(!1);return;}let r=await t.text();this.state.rules.raw.set(r),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),i(!0);},n.click();});}async promptEnableWeightTracking(){!this.state.config.trackWeight()&&this.percentageOfItemsWithWeights()>.1&&(await K("It seems that the imported rules contain items with weights. Shall we enable the weight tracking?"))&&this.state.config.trackWeight.set(!0);}resetChecklist(){this.state.packlist.answers.set({}),this.state.packlist.checkedItems.set([]),this.state.packlist.collapsedCategories.set([]),this.state.packlist.answersLocked.set(!1);}static ɵfac=function(n){return new(n||e)();};static ɵprov=Ae({token:e,factory:e.ɵfac,providedIn:"root"});}return e;})();function St(e,C){e&1&&s(0,2);}function At(e,C){e&1&&s(0,3);}var je=(()=>{class e{router=c(H);state=c(O);facade=c(ie);trackWeight=this.state.config.trackWeight;categorySorting=this.state.config.categorySorting;async resetChecklist(){(await K("Are you sure you want to reset the checklist?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-checklist"]],decls:8,vars:2,consts:()=>{let i;i="Track item weight";let n;n="You can enter the item weight appended to the item name in the editor.";let t;t="Sort categories";let r;r="Checklist";let o;o="Reset Checklist";let p;p="alphabetically";let f;return f="order of definition",[r,o,p,f,["type","button",3,"click"],["id","track-weight","label",i,"help",n,3,"ngModelChange","ngModel"],["label",t,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"button",4),N("click",function(){return t.resetChecklist();}),s(3,1),_(),l(4,"cmp-checkbox",5),u("ngModelChange",function(o){return A(t.trackWeight,o)||(t.trackWeight=o),o;}),_(),l(5,"cmp-select-options",6),u("ngModelChange",function(o){return A(t.categorySorting,o)||(t.categorySorting=o),o;}),E(6,St,1,0,"ng-template",7)(7,At,1,0,"ng-template",8),_()),n&2&&(a(4),S("ngModel",t.trackWeight),a(),S("ngModel",t.categorySorting));},dependencies:[M,y,$,D,k,ne,W],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var qe=(()=>{class e{router=c(H);reset=c(Ue);async resetEverything(){(await K("Are you sure you want to reset the whole application?"))&&(this.reset(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let i;i="DANGER!";let n;return n=" Reset Application\n",[i,n,["type","button",1,"red",3,"click"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"button",2),N("click",function(){return t.resetEverything();}),s(3,1),_());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var Ze=(()=>{class e{state=c(O);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;refactorVariables=this.state.config.refactorVariables;static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-rules-editor"]],decls:11,vars:3,consts:()=>{let i;i="Fade out disabled rules in editor";let n;n="Highlight variable status in editor";let t;t="Rename all occurrences when renaming variables";let r;r="Rules Editor";let o;o="Edit Rules";let p;p="Documentation";let f;return f="Edit Rules with Code",[r,o,p,f,["type","button","routerLink","/rules"],["id","rules-debug-mode","label",i,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",t,3,"ngModelChange","ngModel"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"button",4),s(3,1),_(),l(4,"cmp-checkbox",5),u("ngModelChange",function(o){return A(t.fadeOutDisabledRules,o)||(t.fadeOutDisabledRules=o),o;}),_(),l(5,"cmp-checkbox",6),u("ngModelChange",function(o){return A(t.highlightVariableStatus,o)||(t.highlightVariableStatus=o),o;}),_(),l(6,"cmp-checkbox",7),u("ngModelChange",function(o){return A(t.refactorVariables,o)||(t.refactorVariables=o),o;}),_(),l(7,"button",8),s(8,2),_(),l(9,"button",9),s(10,3),_()),n&2&&(a(4),S("ngModel",t.fadeOutDisabledRules),a(),S("ngModel",t.highlightVariableStatus),a(),S("ngModel",t.refactorVariables));},dependencies:[D,k,M,y,$,ve],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var ut=["exportButton"],Tt=["importButton"];function Nt(e,C){e&1&&(l(0,"div",6),s(1,4),_());}function Ot(e,C){e&1&&(l(0,"div",9),d(1,"app-icon-download",10),_());}var Qe=(()=>{class e{router=c(H);route=c(De);state=c(O);exportReminder=this.state.config.exportReminder;exportNeeded=this.state.rules.exportNeeded;facade=c(ie);highlightExport;exportButton=_e.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=_e.required("importButton");loading=x(!1);constructor(){let i=He(this.route.fragment);this.highlightExport=w(()=>i()==="export-now"),this.highlightImport=w(()=>i()==="import"),z(()=>{let n=i();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,t){n&1&&(se(t.exportButton,ut,5),se(t.importButton,Tt,5)),n&2&&Q(2);},decls:9,vars:8,consts:()=>{let i;i="Export needed";let n;n="Remind me to regularly export rules";let t;t=" Export Rules\n";let r;r=" Import Rules\n";let o;return o=" Current rules are not backed up! ",[["exportButton",""],["importButton",""],t,r,o,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",i,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],[1,"h-[12rem]","w-[12rem]"]];},template:function(n,t){if(n&1){let r=V();l(0,"button",5,0),N("click",function(){return I(r),R(t.exportRules());}),s(2,2),_(),E(3,Nt,2,0,"div",6),l(4,"button",7,1),N("click",function(){return I(r),R(t.importRules());}),s(6,3),_(),l(7,"cmp-checkbox",8),u("ngModelChange",function(p){return I(r),A(t.exportReminder,p)||(t.exportReminder=p),R(p);}),_(),E(8,Ot,2,0,"div",9);}n&2&&(le("highlighted",t.highlightExport()&&t.exportNeeded()),F("disabled",!t.isExportAvailable()),a(3),G(t.exportNeeded()?3:-1),a(),le("highlighted",t.highlightImport()),a(3),S("ngModel",t.exportReminder),a(),G(t.loading()?8:-1));},dependencies:[M,y,$,D,k,Ve],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function ft(e,C){e&1&&(l(0,"p"),q(1,3),l(2,"a",8),d(3,"img",9),_(),Z(),_());}var Ye=(()=>{class e{displayKoFi=!0;static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let i;i="open an issue on GitHub";let n;n="email to danilo.hoffmann1@googlemail.com";let t;t="Support";let r;r=" If you find any bugs or have any suggestions, please open an issue on GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let o;o=" Alternatively, you can reach out to me by "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+"";let p;p="Buy Me a Coffee at ko-fi.com";let f;return f=" If you like this app, please consider to "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[t,r,o,f,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",i,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",p,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"p"),q(3,1),l(4,"a",4),d(5,"img",5),_(),Z(),_(),l(6,"p"),q(7,2),l(8,"a",6),d(9,"img",7),_(),Z(),_(),E(10,ft,4,0,"p")),n&2&&(a(10),G(t.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function It(e,C){if(e&1&&L(0),e&2){let i=m();Fe(" ",i.versionCode," (",i.version,") ");}}function Rt(e,C){if(e&1&&L(0),e&2){let i=m();Y(" ",i.version," ");}}function Gt(e,C){if(e&1&&(l(0,"span",7),s(1,2),_()),e&2){let i=m();a(),re(i.serviceWorkerStatus()),ae(1);}}var Je=(()=>{class e{state=c(O);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1736868119538;version="0.5.0";gitHash="73896704eb7c285ed6ce0792c9938aca8a7970d1";versionCode=15;currentVersionLabel="Current version is "+this.version+"";gitHashLabel="Current git hash starts with "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=w(()=>{switch(this.state.serviceWorker.status()){case"disabled":return"disabled";case"error":return"error";case"unrecoverable":return"unrecoverable - please refresh";case"init":return"initializing";case"ok":return"ok";case"update-available":return"update available";}});static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let i;i="App Version";let n;n="built on "+"\uFFFD0\uFFFD"+"";let t;return t="Service Worker: "+"\uFFFD0\uFFFD"+"",[i,n,t,[1,"accessible-content","inline-block","content-center",3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"font-mono","text-sm"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"span")(3,"a",3),E(4,It,1,2)(5,Rt,1,1),_()(),l(6,"span",4),s(7,1),be(8,"date"),_(),l(9,"span",5)(10,"a",3)(11,"span",6),L(12),_()()(),E(13,Gt,2,1,"span",7)),n&2&&(a(3),F("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+t.version,oe),b("aria-label",t.currentVersionLabel),a(),G(t.displayVersionCode?4:5),a(4),re(ye(8,8,t.buildTime,"long")),ae(7),a(2),F("href","https://github.com/dhhyi/travel-packlist/commit/"+t.gitHash,oe),b("aria-label",t.gitHashLabel),a(2),U(t.gitHash),a(),G(t.displayServiceWorkerStatus?13:-1));},dependencies:[ke],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var oi=(()=>{class e{static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config"]],decls:7,vars:0,template:function(n,t){n&1&&d(0,"app-config-checklist")(1,"app-config-rules-editor")(2,"app-config-rules-import-export")(3,"app-config-appearance")(4,"app-config-version")(5,"app-config-support")(6,"app-config-dangerzone");},dependencies:[je,Ze,Qe,Be,Je,Ye,qe],encapsulation:2,changeDetection:0});}return e;})();export{oi as default};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/