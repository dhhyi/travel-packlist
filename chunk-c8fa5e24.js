import{a as $e}from"./chunk-e7cbdf33.js";import{b,e as K,f as U}from"./chunk-06256d74.js";import{b as F}from"./chunk-8ae1a8b3.js";import{A as fe,e as ue,k as Ne,n as Re,r as Oe,z as Ie}from"./chunk-bbb08834.js";import{b as Le,d as f,f as Fe,g as G,i as he,p as L,q as ye}from"./chunk-6c42d3fd.js";import{a as be}from"./chunk-44030357.js";import{p as Me,s as p,t as Ge}from"./chunk-73820e3c.js";import"./chunk-c0685382.js";import{e as pe,k as de}from"./chunk-248f8e5a.js";import{$b as z,Ab as Ee,Cb as Pe,Db as Se,Eb as i,F as se,Fb as l,Gb as R,Ib as H,Lb as B,Mb as j,Nb as s,Ob as q,Pb as J,Rb as T,Sb as D,Va as Z,Wb as ee,Xa as a,Xb as ge,Zb as v,_b as Ae,ac as ce,bc as g,ca as P,cc as A,db as Y,dc as c,ib as S,ja as w,ka as k,kc as me,mc as Te,nb as d,ub as Q,vb as u,wb as V,wc as O,xc as x,ya as W,yb as Ce,yc as $,zb as y}from"./chunk-8a02f8fd.js";import"./chunk-1724ecac.js";function He(t,E){t&1&&s(0,1);}function Be(t,E){t&1&&R(0,"span",26);}function je(t,E){t&1&&R(0,"span",27);}function Ze(t,E){t&1&&s(0,2);}function Ye(t,E){t&1&&s(0,3);}function Qe(t,E){t&1&&s(0,4);}function qe(t,E){t&1&&(i(0,"span",28),s(1,5),l());}function Je(t,E){t&1&&(i(0,"span",29),s(1,6),l());}function et(t,E){t&1&&(i(0,"span",30),s(1,7),l());}function tt(t,E){t&1&&s(0,8);}function nt(t,E){t&1&&s(0,9);}var Ve=(()=>{class t{state=P(p);theme=this.state.config.theme;language=this.state.config.language;fontSize=this.state.config.fontSize;accessibility=this.state.config.accessibility;animations=this.state.config.animations;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-appearance"]],decls:18,vars:5,consts:()=>{let o;o="Language";let n;n="Theme";let e;e="Font Size";let r;r="Accessibility";let _;_="Animations";let C;C="Appearance";let M;M="auto";let m;m="English";let N;N="German";let te;te="Dark";let ne;ne="Light";let _e;_e="System";let oe;oe="small";let ie;ie="normal";let le;le="large";let re;re="accessible";let ae;return ae="compact",[C,M,te,ne,_e,oe,ie,le,re,ae,["label",o,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],["label",n,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",e,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",r,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["id","animations","label",_,3,"ngModelChange","ngModel"],["aria-label",m,"flagUk","","iconClass","h-6 w-8"],["aria-label",N,"flagGermany","","iconClass","h-6 w-8"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"cmp-select-options",10),c("ngModelChange",function(_){return A(e.language,_)||(e.language=_),_;}),d(3,He,1,0,"ng-template",11)(4,Be,1,0,"ng-template",12)(5,je,1,0,"ng-template",13),l(),i(6,"cmp-select-options",14),c("ngModelChange",function(_){return A(e.theme,_)||(e.theme=_),_;}),d(7,Ze,1,0,"ng-template",15)(8,Ye,1,0,"ng-template",16)(9,Qe,1,0,"ng-template",17),l(),i(10,"cmp-select-options",18),c("ngModelChange",function(_){return A(e.fontSize,_)||(e.fontSize=_),_;}),d(11,qe,2,0,"ng-template",19)(12,Je,2,0,"ng-template",20)(13,et,2,0,"ng-template",21),l(),i(14,"cmp-select-options",22),c("ngModelChange",function(_){return A(e.accessibility,_)||(e.accessibility=_),_;}),d(15,tt,1,0,"ng-template",23)(16,nt,1,0,"ng-template",24),l(),i(17,"cmp-checkbox",25),c("ngModelChange",function(_){return A(e.animations,_)||(e.animations=_),_;}),l()),n&2&&(a(2),g("ngModel",e.language),a(4),g("ngModel",e.theme),a(4),g("ngModel",e.fontSize),a(4),g("ngModel",e.accessibility),a(3),g("ngModel",e.animations));},dependencies:[L,f,G,U,K,fe,Ie,b],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function _t(t,E){t&1&&s(0,2);}function ot(t,E){t&1&&s(0,3);}var De=(()=>{class t{state=P(p);trackWeight=this.state.config.trackWeight;skipItems=this.state.config.skipItems;categorySorting=this.state.config.categorySorting;skipItemsHelpText=O(()=>this.state.browser.isMobile()?"You can skip items in the packlist by long pressing them.":"You can skip items in the packlist by double clicking them.");async resetChecklist(){(await F("Are you sure you want to reset the checklist?"))&&(this.state.packlist.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-checklist"]],decls:9,vars:4,consts:()=>{let o;o="Track item weight";let n;n="You can enter the item weight appended to the item name in the editor.";let e;e="Allow skipping items";let r;r="Sort categories";let _;_="Checklist";let C;C="Reset Checklist";let M;M="alphabetically";let m;return m="order of definition",[_,C,M,m,["type","button",3,"click"],["id","track-weight","label",o,"help",n,3,"ngModelChange","ngModel"],["id","skip-items","label",e,3,"ngModelChange","help","ngModel"],["label",r,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",4),T("click",function(){return e.resetChecklist();}),s(3,1),l(),i(4,"cmp-checkbox",5),c("ngModelChange",function(_){return A(e.trackWeight,_)||(e.trackWeight=_),_;}),l(),i(5,"cmp-checkbox",6),c("ngModelChange",function(_){return A(e.skipItems,_)||(e.skipItems=_),_;}),l(),i(6,"cmp-select-options",7),c("ngModelChange",function(_){return A(e.categorySorting,_)||(e.categorySorting=_),_;}),d(7,_t,1,0,"ng-template",8)(8,ot,1,0,"ng-template",9),l()),n&2&&(a(4),g("ngModel",e.trackWeight),a(),u("help",e.skipItemsHelpText()),g("ngModel",e.skipItems),a(),g("ngModel",e.categorySorting));},dependencies:[L,f,G,b,U,K],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var we=(()=>{class t{reset=P(Ge);state=P(p);async resetEverything(){(await F("Are you sure you want to reset the whole application?"))&&(await this.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let o;o="DANGER!";let n;return n=" Reset Application\n",[o,n,["type","button",1,"red",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",2),T("click",function(){return e.resetEverything();}),s(3,1),l());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var ke=(()=>{class t{state=P(p);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;refactorVariables=this.state.config.refactorVariables;confirmRuleDeletion=this.state.config.confirmRuleDeletion;go=this.state.router.go;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-editor"]],decls:10,vars:4,consts:()=>{let o;o="Fade out disabled rules";let n;n="Highlight variable status";let e;e="Rename all occurrences when renaming variables";let r;r="Confirm before deleting rules";let _;_="Rules Editor";let C;C="Edit Rules";let M;return M=" Edit Rules with Code\n",[_,C,M,["type","button",3,"click"],["id","rules-debug-mode","label",o,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",e,3,"ngModelChange","ngModel"],["id","confirm-rule-deletion","label",r,3,"ngModelChange","ngModel"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",3),T("click",function(){return e.go("rules");}),s(3,1),l(),i(4,"cmp-checkbox",4),c("ngModelChange",function(_){return A(e.fadeOutDisabledRules,_)||(e.fadeOutDisabledRules=_),_;}),l(),i(5,"cmp-checkbox",5),c("ngModelChange",function(_){return A(e.highlightVariableStatus,_)||(e.highlightVariableStatus=_),_;}),l(),i(6,"cmp-checkbox",6),c("ngModelChange",function(_){return A(e.refactorVariables,_)||(e.refactorVariables=_),_;}),l(),i(7,"cmp-checkbox",7),c("ngModelChange",function(_){return A(e.confirmRuleDeletion,_)||(e.confirmRuleDeletion=_),_;}),l(),i(8,"button",3),T("click",function(){return e.go("rules-raw");}),s(9,2),l()),n&2&&(a(4),g("ngModel",e.fadeOutDisabledRules),a(),g("ngModel",e.highlightVariableStatus),a(),g("ngModel",e.refactorVariables),a(),g("ngModel",e.confirmRuleDeletion));},dependencies:[b,L,f,G],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var it=["exportButton"],lt=["importButton"];function rt(t,E){t&1&&(i(0,"div",6),s(1,4),l());}function at(t,E){t&1&&R(0,"div",9);}var Ke=(()=>{class t{state=P(p);exportReminder=this.state.config.exportReminder;exportNeeded=this.state.rules.exportNeeded;highlightExport;exportButton=Y.required("exportButton");highlightImport;importButton=Y.required("importButton");loading=W(!1);constructor(){let o=this.state.router.fragment;this.highlightExport=O(()=>o()==="export-now"),this.highlightImport=O(()=>o()==="import"),x(()=>{let n=o();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.triggerImportRules())&&this.state.router.go("packlist"),this.loading.set(!1);}rulesShare=P($e);refactor=P(Me);percentageOfItemsWithWeights=O(()=>{if(this.state.rules.parsed.hasValue()){let{items:o,weights:n}=this.refactor.countItemsAndWeights(this.state.rules.parsed.value());return n/o;}return 0;});isExportAvailable(){return!!this.state.rules.localRulesAvailable();}async exportRules(){await this.rulesShare.exportRules(),this.state.rules.markAsCurrent();}async triggerImportRules(){return this.state.rules.exportNeeded()&&!(await F("You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?"))?Promise.resolve(!1):new Promise(o=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{o(!1);}),n.onchange=async()=>{let e=n.files?.[0];if(!e){o(!1);return;}let r=await e.text();this.state.localRules.updateRules(r),this.state.rules.markAsCurrent(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.state.packlist.reset(),o(!0);},n.click();});}async promptEnableWeightTracking(){!this.state.config.trackWeight()&&this.percentageOfItemsWithWeights()>.1&&(await F("It seems that the imported rules contain items with weights. Shall we enable the weight tracking?"))&&this.state.config.trackWeight.set(!0);}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,e){n&1&&(ee(e.exportButton,it,5),ee(e.importButton,lt,5)),n&2&&ge(2);},decls:9,vars:8,consts:()=>{let o;o="Export needed";let n;n="Remind me to regularly export rules";let e;e=" Export Rules\n";let r;r=" Import Rules\n";let _;return _=" Current rules are not backed up! ",[["exportButton",""],["importButton",""],e,r,_,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",o,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],["iconDownload","","iconClass","h-[12rem] w-[12rem]",1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"]];},template:function(n,e){if(n&1){let r=H();i(0,"button",5,0),T("click",function(){return w(r),k(e.exportRules());}),s(2,2),l(),d(3,rt,2,0,"div",6),i(4,"button",7,1),T("click",function(){return w(r),k(e.importRules());}),s(6,3),l(),i(7,"cmp-checkbox",8),c("ngModelChange",function(C){return w(r),A(e.exportReminder,C)||(e.exportReminder=C),k(C);}),l(),d(8,at,1,0,"div",9);}n&2&&(V("highlighted",e.highlightExport()&&e.exportNeeded()),u("disabled",!e.isExportAvailable()),a(3),y(e.exportNeeded()?3:-1),a(),V("highlighted",e.highlightImport()),a(3),g("ngModel",e.exportReminder),a(),y(e.loading()?8:-1));},dependencies:[L,f,G,b,Re],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function st(t,E){t&1&&s(0,1);}function Ct(t,E){t&1&&s(0,2);}function Et(t,E){t&1&&s(0,3);}var Ue=(()=>{class t{state=P(p);rulesMode=this.state.rules.mode;constructor(){x(()=>{console.log("Rules mode changed:",this.rulesMode());});}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-mode"]],decls:6,vars:2,consts:()=>{let o;o="Rules Mode";let n;n="Rules Mode";let e;e="local";let r;r="remote";let _;return _="template",[n,e,r,_,["label",o,3,"ngModelChange","legendHidden","ngModel"],["value","local"],["value","remote"],["value","template"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"cmp-select-options",4),c("ngModelChange",function(_){return A(e.rulesMode,_)||(e.rulesMode=_),_;}),d(3,st,1,0,"ng-template",5)(4,Ct,1,0,"ng-template",6)(5,Et,1,0,"ng-template",7),l()),n&2&&(a(2),u("legendHidden",!0),g("ngModel",e.rulesMode));},dependencies:[L,f,G,U,K],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function Pt(t,E){if(t&1){let o=H();i(0,"li",11)(1,"span",12),T("click",function(){let e=w(o).$implicit,r=D(2);return k(r.loadRemote(e));})("keypress",function(){let e=w(o).$implicit,r=D(2);return k(r.loadRemote(e));}),v(2),l(),i(3,"button",13),T("click",function(){let e=w(o).$implicit,r=D(2);return k(r.removeFromHistory(e));}),l()();}if(t&2){let o=E.$implicit;a(2),z(" ",o," ");}}function St(t,E){if(t&1&&(i(0,"ul"),Pe(1,Pt,4,1,"li",11,Ee),l()),t&2){let o=D();a(),Se(o.remoteHistory());}}var ve=(()=>{class t{state=P(p);currentURL=O(()=>this.state.remoteRules.history()[0]);rulesLoaded=O(()=>this.state.rules.raw.hasValue());stateColor=O(()=>this.state.rules.raw.status()===$.Idle||!this.controlValue()?"text-gray-500":this.state.rules.isLoading()?"text-yellow-normal":this.state.rules.hasError()?"text-red":"text-green");i18nStatus=O(()=>{if(this.state.rules.raw.status()===$.Idle||!this.controlValue())return"idle";switch(this.state.rules.raw.status()){case $.Loading:case $.Reloading:return"loading";case $.Resolved:return this.state.rules.parsed.status()===$.Error?"parser error":"loaded";case $.Error:return be(this.state.rules.raw.error());default:return"unknown";}});remoteHistory=O(()=>this.state.rules.hasError()?this.state.remoteRules.history():this.state.remoteRules.history().slice(1));remoteHistoryVisible=W(!1);control=new Fe(this.currentURL(),{updateOn:"blur"});controlValue=de(this.control.valueChanges.pipe(se(500)));constructor(){x(()=>{let o=this.controlValue();o&&this.state.remoteRules.load(o);});}clearRemote(){this.control.setValue("");}reloadRemote(){this.state.rules.raw.reload();}loadRemote(o){this.control.setValue(o),this.remoteHistoryVisible.set(!1);}removeFromHistory(o){this.state.remoteRules.removeFromHistory(o);}async copyRulesLocally(){(!this.state.rules.localRulesAvailable()||(await F("Copying rules locally will replace the previous local rules. Do you really want to continue?")))&&this.state.localRules.copyFromCurrent();}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-remote"]],decls:14,vars:10,consts:()=>{let o;o="remote rules source";let n;n="insert URL here";let e;e="Load source from history";let r;r="remote source status";let _;_="Reload source";let C;C="Remote Source";let M;M=" Copy rules locally\n";let m;return m="remove entry from history",[C,M,[1,"relative"],["aria-label",o,"rows","4","placeholder",n,1,"w-full",3,"formControl"],["type","button",1,"absolute","right-1","top-1","bg-white","bg-opacity-50","hover:bg-opacity-50","dark:bg-slate-900","dark:bg-opacity-50",3,"click"],[1,"h-4","w-4"],[1,"flex","flex-row","items-center"],["iconHistory","","iconClass","h-6 w-6","type","button","aria-label",e,1,"link",3,"click","disabled"],["aria-label",r,"role","status",1,"grow","text-center","font-mono"],["iconRefresh","","iconClass","h-6 w-6","type","button","aria-label",_,1,"link",3,"click","disabled"],["type","button",3,"click","disabled"],[1,"flex","cursor-pointer","items-center","p-1","text-sm"],["tabindex","0",1,"grow","break-all",3,"click","keypress"],["iconDelete","","iconClass","min-h-4 min-w-4","type","button","aria-label",m,1,"link","pr-0",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"div",2),R(3,"textarea",3),i(4,"button",4),T("click",function(){return e.clearRemote();}),R(5,"app-icon-close",5),l()(),i(6,"div",6)(7,"button",7),T("click",function(){return e.remoteHistoryVisible.set(!e.remoteHistoryVisible());}),l(),i(8,"div",8),v(9),l(),i(10,"button",9),T("click",function(){return e.reloadRemote();}),l()(),d(11,St,3,0,"ul"),i(12,"button",10),T("click",function(){return e.copyRulesLocally();}),s(13,1),l()),n&2&&(a(3),u("formControl",e.control),a(),V("hidden",!e.control.value),a(3),u("disabled",!e.remoteHistory().length),a(),Ce(e.stateColor()),a(),z(" ",e.i18nStatus()," "),a(),u("disabled",!e.control.value),a(),y(e.remoteHistoryVisible()?11:-1),a(),u("disabled",!e.rulesLoaded()));},dependencies:[ye,Le,f,he,Ne,ue,Oe],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function gt(t,E){t&1&&s(0,2);}function At(t,E){t&1&&s(0,3);}var Xe=(()=>{class t{state=P(p);rulesTemplate=this.state.config.rulesTemplate;async copyRulesLocally(){(!this.state.rules.localRulesAvailable()||(await F("Copying rules locally will replace the previous local rules. Do you really want to continue?")))&&this.state.localRules.copyFromCurrent();}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-template"]],decls:7,vars:2,consts:()=>{let o;o="Rules Template";let n;n="Rule Templates";let e;e=" Copy rules locally\n";let r;r="Example template with some existing rules.";let _;return _="Empty template for starting your own rules.",[n,e,r,_,["label",o,3,"ngModelChange","legendHidden","ngModel"],["value","default"],["value","empty"],["type","button",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"cmp-select-options",4),c("ngModelChange",function(_){return A(e.rulesTemplate,_)||(e.rulesTemplate=_),_;}),d(3,gt,1,0,"ng-template",5)(4,At,1,0,"ng-template",6),l(),i(5,"button",7),T("click",function(){return e.copyRulesLocally();}),s(6,1),l()),n&2&&(a(2),u("legendHidden",!0),g("ngModel",e.rulesTemplate));},dependencies:[U,K,L,f,G],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var xe=(()=>{class t{state=P(p);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;go=this.state.router.go;rulesLoaded=O(()=>this.state.rules.raw.hasValue());rulesError=O(()=>this.state.rules.raw.status()===$.Error);static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-viewer"]],decls:8,vars:4,consts:()=>{let o;o="Fade out disabled rules";let n;n="Highlight variable status";let e;e="Rules Viewer";let r;r=" View Rules\n";let _;return _=" View Rules Code\n",[e,r,_,["type","button",3,"click","disabled"],["id","rules-debug-mode","label",o,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",3),T("click",function(){return e.go("rules");}),s(3,1),l(),i(4,"cmp-checkbox",4),c("ngModelChange",function(_){return A(e.fadeOutDisabledRules,_)||(e.fadeOutDisabledRules=_),_;}),l(),i(5,"cmp-checkbox",5),c("ngModelChange",function(_){return A(e.highlightVariableStatus,_)||(e.highlightVariableStatus=_),_;}),l(),i(6,"button",3),T("click",function(){return e.go("rules-raw");}),s(7,2),l()),n&2&&(a(2),u("disabled",!e.rulesLoaded()),a(2),g("ngModel",e.fadeOutDisabledRules),a(),g("ngModel",e.highlightVariableStatus),a(),u("disabled",!e.rulesLoaded()&&!e.rulesError()));},dependencies:[b,L,f,G],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function ct(t,E){t&1&&(i(0,"p"),B(1,3),i(2,"a",8),R(3,"img",9),l(),j(),l());}var ze=(()=>{class t{displayKoFi=!0;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let o;o="open an issue on GitHub";let n;n="email to danilo.hoffmann1@googlemail.com";let e;e="Support";let r;r=" If you find any bugs or have any suggestions, please open an issue on GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let _;_=" Alternatively, you can reach out to me by "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+"";let C;C="Buy Me a Coffee at ko-fi.com";let M;return M=" If you like this app, please consider to "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[e,r,_,M,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",o,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"e2e-hidden","inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"e2e-hidden","inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",C,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"p"),B(3,1),i(4,"a",4),R(5,"img",5),l(),j(),l(),i(6,"p"),B(7,2),i(8,"a",6),R(9,"img",7),l(),j(),l(),d(10,ct,4,0,"p")),n&2&&(a(10),y(e.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function mt(t,E){if(t&1&&v(0),t&2){let o=D();ce(" ",o.versionCode," (",o.version,") ");}}function Tt(t,E){if(t&1&&v(0),t&2){let o=D();z(" ",o.version," ");}}function pt(t,E){if(t&1&&(i(0,"span",8),s(1,2),l()),t&2){let o=D();a(),q(o.serviceWorkerStatus()),J(1);}}var We=(()=>{class t{state=P(p);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1745049599098;version="0.10.2";gitHash="2686c19df03ce65834d6413127671b87c4c769f4";versionCode=33;currentVersionLabel="Current version is "+this.version+"";gitHashLabel="Current git hash starts with "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=O(()=>{switch(this.state.serviceWorker.status()){case"disabled":return"disabled";case"error":return"error";case"unrecoverable":return"unrecoverable - please refresh";case"init":return"initializing";case"ok":return"ok";case"update-available":return"update available";}});static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let o;o="App Version";let n;n="built on "+"\uFFFD0\uFFFD"+"";let e;return e="Service Worker: "+"\uFFFD0\uFFFD"+"",[o,n,e,[1,"e2e-hidden"],[1,"accessible-content","inline-block","content-center",3,"href"],[1,"e2e-hidden","italic"],[1,"e2e-hidden","truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"e2e-hidden","font-mono","text-sm"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"span",3)(3,"a",4),d(4,mt,1,2)(5,Tt,1,1),l()(),i(6,"span",5),s(7,1),me(8,"date"),l(),i(9,"span",6)(10,"a",4)(11,"span",7),v(12),l()()(),d(13,pt,2,1,"span",8)),n&2&&(a(3),u("href",`https://github.com/dhhyi/travel-packlist/releases/tag/v${e.version}`,Z),Q("aria-label",e.currentVersionLabel),a(),y(e.displayVersionCode?4:5),a(4),q(Te(8,8,e.buildTime,"long")),J(7),a(2),u("href",`https://github.com/dhhyi/travel-packlist/commit/${e.gitHash}`,Z),Q("aria-label",e.gitHashLabel),a(2),Ae(e.gitHash),a(),y(e.displayServiceWorkerStatus?13:-1));},dependencies:[pe],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var a_=(()=>{class t{state=P(p);rulesMode=this.state.rules.mode;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config"]],decls:15,vars:6,template:function(n,e){n&1&&(R(0,"app-config-checklist")(1,"app-config-rules-mode"),i(2,"div"),R(3,"app-config-rules-editor")(4,"app-config-rules-import-export"),l(),i(5,"div"),R(6,"app-config-rules-remote")(7,"app-config-rules-viewer"),l(),i(8,"div"),R(9,"app-config-rules-template")(10,"app-config-rules-viewer"),l(),R(11,"app-config-appearance")(12,"app-config-version")(13,"app-config-support")(14,"app-config-dangerzone")),n&2&&(a(2),V("hidden",e.rulesMode()!=="local"),a(3),V("hidden",e.rulesMode()!=="remote"),a(3),V("hidden",e.rulesMode()!=="template"));},dependencies:[De,ke,Ke,Ve,We,ze,we,Ue,ve,xe,Xe],encapsulation:2,changeDetection:0});}return t;})();export{a_ as ConfigComponent};/**i18n:e347161579cdf7823cf79475d305275cd962b26b6c63283454da043ebf1dcaa5*/