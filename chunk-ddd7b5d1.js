import{a as he}from"./chunk-149eed87.js";import{b as h,e as K,f as v}from"./chunk-c1acf663.js";import{b}from"./chunk-58016c75.js";import{e as pe,k as Te,n as Ne,o as Re,y as ue,z as Oe}from"./chunk-de1f64ae.js";import{b as Ge,d as G,f as Me,g as M,i as Le,p as L,q as Fe}from"./chunk-cb0d8ad9.js";import{p as Ie,s as m,t as fe}from"./chunk-186665b7.js";import"./chunk-74ff73aa.js";import{e as me,k as de}from"./chunk-2442fbee.js";import{$b as Se,Ab as F,Bb as se,Db as Ce,Eb as Ee,F as ae,Fb as i,Gb as l,Hb as O,Jb as z,Mb as W,Nb as H,Ob as s,Pb as Q,Qb as q,Sb as p,Tb as y,Va as j,Xa as a,Xb as J,Yb as Pe,_b as D,ac as X,bc as ge,ca as P,cc as g,db as Z,dc as A,ec as c,ib as S,ja as V,ka as k,mc as Ae,nb as d,oc as ce,vb as Y,wb as R,xb as w,ya as x,yc as f,zc as B}from"./chunk-df8e09a3.js";import"./chunk-ad6d2de6.js";function Xe(t,E){t&1&&s(0,1);}function xe(t,E){t&1&&O(0,"span",26);}function ze(t,E){t&1&&O(0,"span",27);}function We(t,E){t&1&&s(0,2);}function He(t,E){t&1&&s(0,3);}function Be(t,E){t&1&&s(0,4);}function je(t,E){t&1&&(i(0,"span",28),s(1,5),l());}function Ze(t,E){t&1&&(i(0,"span",29),s(1,6),l());}function Ye(t,E){t&1&&(i(0,"span",30),s(1,7),l());}function Qe(t,E){t&1&&s(0,8);}function qe(t,E){t&1&&s(0,9);}var $e=(()=>{class t{state=P(m);theme=this.state.config.theme;language=this.state.config.language;fontSize=this.state.config.fontSize;accessibility=this.state.config.accessibility;animations=this.state.config.animations;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-appearance"]],decls:18,vars:5,consts:()=>{let _;_="Language";let n;n="Theme";let e;e="Font Size";let r;r="Accessibility";let o;o="Animations";let C;C="Appearance";let N;N="auto";let I;I="English";let T;T="German";let ee;ee="Dark";let te;te="Light";let ne;ne="System";let _e;_e="small";let oe;oe="normal";let ie;ie="large";let le;le="accessible";let re;return re="compact",[C,N,ee,te,ne,_e,oe,ie,le,re,["label",_,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],["label",n,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",e,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",r,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["id","animations","label",o,3,"ngModelChange","ngModel"],["aria-label",I,"flagUk","","iconClass","h-6 w-8"],["aria-label",T,"flagGermany","","iconClass","h-6 w-8"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"cmp-select-options",10),c("ngModelChange",function(o){return A(e.language,o)||(e.language=o),o;}),d(3,Xe,1,0,"ng-template",11)(4,xe,1,0,"ng-template",12)(5,ze,1,0,"ng-template",13),l(),i(6,"cmp-select-options",14),c("ngModelChange",function(o){return A(e.theme,o)||(e.theme=o),o;}),d(7,We,1,0,"ng-template",15)(8,He,1,0,"ng-template",16)(9,Be,1,0,"ng-template",17),l(),i(10,"cmp-select-options",18),c("ngModelChange",function(o){return A(e.fontSize,o)||(e.fontSize=o),o;}),d(11,je,2,0,"ng-template",19)(12,Ze,2,0,"ng-template",20)(13,Ye,2,0,"ng-template",21),l(),i(14,"cmp-select-options",22),c("ngModelChange",function(o){return A(e.accessibility,o)||(e.accessibility=o),o;}),d(15,Qe,1,0,"ng-template",23)(16,qe,1,0,"ng-template",24),l(),i(17,"cmp-checkbox",25),c("ngModelChange",function(o){return A(e.animations,o)||(e.animations=o),o;}),l()),n&2&&(a(2),g("ngModel",e.language),a(4),g("ngModel",e.theme),a(4),g("ngModel",e.fontSize),a(4),g("ngModel",e.accessibility),a(3),g("ngModel",e.animations));},dependencies:[L,G,M,v,K,Oe,ue,h],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function Je(t,E){t&1&&s(0,2);}function et(t,E){t&1&&s(0,3);}var ye=(()=>{class t{state=P(m);trackWeight=this.state.config.trackWeight;skipItems=this.state.config.skipItems;categorySorting=this.state.config.categorySorting;skipItemsHelpText=f(()=>this.state.browser.isMobile()?"You can skip items in the packlist by long pressing them.":"You can skip items in the packlist by double clicking them.");async resetChecklist(){(await b("Are you sure you want to reset the checklist?"))&&(this.state.packlist.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-checklist"]],decls:9,vars:4,consts:()=>{let _;_="Track item weight";let n;n="You can enter the item weight appended to the item name in the editor.";let e;e="Allow skipping items";let r;r="Sort categories";let o;o="Checklist";let C;C="Reset Checklist";let N;N="alphabetically";let I;return I="order of definition",[o,C,N,I,["type","button",3,"click"],["id","track-weight","label",_,"help",n,3,"ngModelChange","ngModel"],["id","skip-items","label",e,3,"ngModelChange","help","ngModel"],["label",r,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",4),p("click",function(){return e.resetChecklist();}),s(3,1),l(),i(4,"cmp-checkbox",5),c("ngModelChange",function(o){return A(e.trackWeight,o)||(e.trackWeight=o),o;}),l(),i(5,"cmp-checkbox",6),c("ngModelChange",function(o){return A(e.skipItems,o)||(e.skipItems=o),o;}),l(),i(6,"cmp-select-options",7),c("ngModelChange",function(o){return A(e.categorySorting,o)||(e.categorySorting=o),o;}),d(7,Je,1,0,"ng-template",8)(8,et,1,0,"ng-template",9),l()),n&2&&(a(4),g("ngModel",e.trackWeight),a(),R("help",e.skipItemsHelpText()),g("ngModel",e.skipItems),a(),g("ngModel",e.categorySorting));},dependencies:[L,G,M,h,v,K],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var be=(()=>{class t{reset=P(fe);state=P(m);async resetEverything(){(await b("Are you sure you want to reset the whole application?"))&&(await this.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let _;_="DANGER!";let n;return n=" Reset Application\n",[_,n,["type","button",1,"red",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",2),p("click",function(){return e.resetEverything();}),s(3,1),l());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Ve=(()=>{class t{state=P(m);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;refactorVariables=this.state.config.refactorVariables;go=this.state.router.go;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-editor"]],decls:9,vars:3,consts:()=>{let _;_="Fade out disabled rules";let n;n="Highlight variable status";let e;e="Rename all occurrences when renaming variables";let r;r="Rules Editor";let o;o="Edit Rules";let C;return C=" Edit Rules with Code\n",[r,o,C,["type","button",3,"click"],["id","rules-debug-mode","label",_,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",e,3,"ngModelChange","ngModel"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",3),p("click",function(){return e.go("rules");}),s(3,1),l(),i(4,"cmp-checkbox",4),c("ngModelChange",function(o){return A(e.fadeOutDisabledRules,o)||(e.fadeOutDisabledRules=o),o;}),l(),i(5,"cmp-checkbox",5),c("ngModelChange",function(o){return A(e.highlightVariableStatus,o)||(e.highlightVariableStatus=o),o;}),l(),i(6,"cmp-checkbox",6),c("ngModelChange",function(o){return A(e.refactorVariables,o)||(e.refactorVariables=o),o;}),l(),i(7,"button",3),p("click",function(){return e.go("rules-raw");}),s(8,2),l()),n&2&&(a(4),g("ngModel",e.fadeOutDisabledRules),a(),g("ngModel",e.highlightVariableStatus),a(),g("ngModel",e.refactorVariables));},dependencies:[h,L,G,M],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var tt=["exportButton"],nt=["importButton"];function _t(t,E){t&1&&(i(0,"div",6),s(1,4),l());}function ot(t,E){t&1&&O(0,"div",9);}var ke=(()=>{class t{state=P(m);exportReminder=this.state.config.exportReminder;exportNeeded=this.state.rules.exportNeeded;highlightExport;exportButton=Z.required("exportButton");highlightImport;importButton=Z.required("importButton");loading=x(!1);constructor(){let _=this.state.router.fragment;this.highlightExport=f(()=>_()==="export-now"),this.highlightImport=f(()=>_()==="import"),B(()=>{let n=_();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.triggerImportRules())&&this.state.router.go("packlist"),this.loading.set(!1);}rulesShare=P(he);refactor=P(Ie);percentageOfItemsWithWeights=f(()=>{if(!this.state.rules.parserError()){let{items:_,weights:n}=this.refactor.countItemsAndWeights(this.state.rules.parsed());return n/_;}return 0;});isExportAvailable(){return!!this.state.rules.customized();}async exportRules(){await this.rulesShare.exportRules(),this.state.rules.markAsCurrent();}async triggerImportRules(){return this.state.rules.exportNeeded()&&!(await b("You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?"))?Promise.resolve(!1):new Promise(_=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{_(!1);}),n.onchange=async()=>{let e=n.files?.[0];if(!e){_(!1);return;}let r=await e.text();this.state.localRules.updateRules(r),this.state.rules.markAsCurrent(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.state.packlist.reset(),_(!0);},n.click();});}async promptEnableWeightTracking(){!this.state.config.trackWeight()&&this.percentageOfItemsWithWeights()>.1&&(await b("It seems that the imported rules contain items with weights. Shall we enable the weight tracking?"))&&this.state.config.trackWeight.set(!0);}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,e){n&1&&(J(e.exportButton,tt,5),J(e.importButton,nt,5)),n&2&&Pe(2);},decls:9,vars:8,consts:()=>{let _;_="Export needed";let n;n="Remind me to regularly export rules";let e;e=" Export Rules\n";let r;r=" Import Rules\n";let o;return o=" Current rules are not backed up! ",[["exportButton",""],["importButton",""],e,r,o,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",_,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],["iconDownload","","iconClass","h-[12rem] w-[12rem]",1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"]];},template:function(n,e){if(n&1){let r=z();i(0,"button",5,0),p("click",function(){return V(r),k(e.exportRules());}),s(2,2),l(),d(3,_t,2,0,"div",6),i(4,"button",7,1),p("click",function(){return V(r),k(e.importRules());}),s(6,3),l(),i(7,"cmp-checkbox",8),c("ngModelChange",function(C){return V(r),A(e.exportReminder,C)||(e.exportReminder=C),k(C);}),l(),d(8,ot,1,0,"div",9);}n&2&&(w("highlighted",e.highlightExport()&&e.exportNeeded()),R("disabled",!e.isExportAvailable()),a(3),F(e.exportNeeded()?3:-1),a(),w("highlighted",e.highlightImport()),a(3),g("ngModel",e.exportReminder),a(),F(e.loading()?8:-1));},dependencies:[L,G,M,h,Ne],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function it(t,E){t&1&&s(0,1);}function lt(t,E){t&1&&s(0,2);}var De=(()=>{class t{state=P(m);rulesMode=this.state.rules.mode;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-mode"]],decls:5,vars:2,consts:()=>{let _;_="Rules Mode";let n;n="Rules Mode";let e;e="local";let r;return r="remote",[n,e,r,["label",_,3,"ngModelChange","legendHidden","ngModel"],["value","local"],["value","remote"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"cmp-select-options",3),c("ngModelChange",function(o){return A(e.rulesMode,o)||(e.rulesMode=o),o;}),d(3,it,1,0,"ng-template",4)(4,lt,1,0,"ng-template",5),l()),n&2&&(a(2),R("legendHidden",!0),g("ngModel",e.rulesMode));},dependencies:[L,G,M,v,K],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function rt(t,E){if(t&1){let _=z();i(0,"li",8)(1,"span",9),p("click",function(){let e=V(_).$implicit,r=y(2);return k(r.loadRemote(e));})("keypress",function(){let e=V(_).$implicit,r=y(2);return k(r.loadRemote(e));}),D(2),l(),i(3,"button",10),p("click",function(){let e=V(_).$implicit,r=y(2);return k(r.removeFromHistory(e));}),l()();}if(t&2){let _=E.$implicit;a(2),X(" ",_," ");}}function at(t,E){if(t&1&&(i(0,"ul"),Ce(1,rt,4,1,"li",8,se),l()),t&2){let _=y();a(),Ee(_.remoteHistory());}}var we=(()=>{class t{state=P(m);remoteStatus=this.state.remoteRules.status;currentURL=f(()=>this.state.remoteRules.history()[0]);remoteHistory=f(()=>this.state.remoteRules.history().slice(1));remoteHistoryVisible=x(!1);control=new Me(this.currentURL(),{updateOn:"blur"});controlValueChanges=de(this.control.valueChanges.pipe(ae(500)));constructor(){B(()=>{let _=this.controlValueChanges();_&&this.state.remoteRules.load(_);});}reloadRemote(){this.state.remoteRules.reload();}loadRemote(_){this.control.setValue(_),this.remoteHistoryVisible.set(!1);}removeFromHistory(_){this.state.remoteRules.removeFromHistory(_);}async copyRulesLocally(){(!this.state.rules.customized()||(await b("Copying rules locally will replace the previous local rules. Do you really want to continue?")))&&(this.state.localRules.updateRules(this.state.rules.raw()),this.state.rules.mode.set("local"),this.state.rules.markAsCurrent());}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-remote"]],decls:11,vars:6,consts:()=>{let _;_="remote rules source";let n;n="insert URL here";let e;e="Load source from history";let r;r="remote source status";let o;o="Reload source";let C;C="Remote Source";let N;N=" Copy rules locally\n";let I;return I="remove entry from history",[C,N,["aria-label",_,"rows","4","placeholder",n,3,"formControl"],[1,"flex","flex-row","items-center"],["iconHistory","","iconClass","h-6 w-6","type","button","aria-label",e,1,"link",3,"click","disabled"],["aria-label",r,"role","status",1,"grow","text-center","font-mono"],["iconRefresh","","iconClass","h-6 w-6","type","button","aria-label",o,1,"link",3,"click","disabled"],["type","button",3,"click","disabled"],[1,"flex","cursor-pointer","items-center","p-1","text-sm"],["tabindex","0",1,"grow","break-all",3,"click","keypress"],["iconDelete","","iconClass","min-h-4 min-w-4","type","button","aria-label",I,1,"link","pr-0",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),O(2,"textarea",2),i(3,"div",3)(4,"button",4),p("click",function(){return e.remoteHistoryVisible.set(!e.remoteHistoryVisible());}),l(),i(5,"div",5),D(6),l(),i(7,"button",6),p("click",function(){return e.reloadRemote();}),l()(),d(8,at,3,0,"ul"),i(9,"button",7),p("click",function(){return e.copyRulesLocally();}),s(10,1),l()),n&2&&(a(2),R("formControl",e.control),a(2),R("disabled",!e.remoteHistory().length),a(2),X(" ",e.remoteStatus().i18n," "),a(),R("disabled",!e.control.value),a(),F(e.remoteHistoryVisible()?8:-1),a(),R("disabled",e.remoteStatus().state!=="loaded"));},dependencies:[Fe,Ge,G,Le,Te,pe,Re],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Ke=(()=>{class t{state=P(m);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;go=this.state.router.go;rulesLoaded=f(()=>this.state.remoteRules.status().state==="loaded");rulesError=f(()=>this.state.remoteRules.status().state==="error");static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-viewer"]],decls:8,vars:4,consts:()=>{let _;_="Fade out disabled rules";let n;n="Highlight variable status";let e;e="Rules Viewer";let r;r=" View Rules\n";let o;return o=" View Rules Code\n",[e,r,o,["type","button",3,"click","disabled"],["id","rules-debug-mode","label",_,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",3),p("click",function(){return e.go("rules");}),s(3,1),l(),i(4,"cmp-checkbox",4),c("ngModelChange",function(o){return A(e.fadeOutDisabledRules,o)||(e.fadeOutDisabledRules=o),o;}),l(),i(5,"cmp-checkbox",5),c("ngModelChange",function(o){return A(e.highlightVariableStatus,o)||(e.highlightVariableStatus=o),o;}),l(),i(6,"button",3),p("click",function(){return e.go("rules-raw");}),s(7,2),l()),n&2&&(a(2),R("disabled",!e.rulesLoaded()),a(2),g("ngModel",e.fadeOutDisabledRules),a(),g("ngModel",e.highlightVariableStatus),a(),R("disabled",!e.rulesLoaded()&&!e.rulesError()));},dependencies:[h,L,G,M],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function st(t,E){t&1&&(i(0,"p"),W(1,3),i(2,"a",8),O(3,"img",9),l(),H(),l());}var ve=(()=>{class t{displayKoFi=!0;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let _;_="open an issue on GitHub";let n;n="email to danilo.hoffmann1@googlemail.com";let e;e="Support";let r;r=" If you find any bugs or have any suggestions, please open an issue on GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let o;o=" Alternatively, you can reach out to me by "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+"";let C;C="Buy Me a Coffee at ko-fi.com";let N;return N=" If you like this app, please consider to "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[e,r,o,N,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",_,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"e2e-hidden","inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"e2e-hidden","inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",C,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"p"),W(3,1),i(4,"a",4),O(5,"img",5),l(),H(),l(),i(6,"p"),W(7,2),i(8,"a",6),O(9,"img",7),l(),H(),l(),d(10,st,4,0,"p")),n&2&&(a(10),F(e.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function Ct(t,E){if(t&1&&D(0),t&2){let _=y();ge(" ",_.versionCode," (",_.version,") ");}}function Et(t,E){if(t&1&&D(0),t&2){let _=y();X(" ",_.version," ");}}function Pt(t,E){if(t&1&&(i(0,"span",8),s(1,2),l()),t&2){let _=y();a(),Q(_.serviceWorkerStatus()),q(1);}}var Ue=(()=>{class t{state=P(m);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1743934290231;version="0.10.2";gitHash="cb7460284a60adb39b06b68119ad88cc92c12850";versionCode=33;currentVersionLabel="Current version is "+this.version+"";gitHashLabel="Current git hash starts with "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=f(()=>{switch(this.state.serviceWorker.status()){case"disabled":return"disabled";case"error":return"error";case"unrecoverable":return"unrecoverable - please refresh";case"init":return"initializing";case"ok":return"ok";case"update-available":return"update available";}});static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let _;_="App Version";let n;n="built on "+"\uFFFD0\uFFFD"+"";let e;return e="Service Worker: "+"\uFFFD0\uFFFD"+"",[_,n,e,[1,"e2e-hidden"],[1,"accessible-content","inline-block","content-center",3,"href"],[1,"e2e-hidden","italic"],[1,"e2e-hidden","truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"e2e-hidden","font-mono","text-sm"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"span",3)(3,"a",4),d(4,Ct,1,2)(5,Et,1,1),l()(),i(6,"span",5),s(7,1),Ae(8,"date"),l(),i(9,"span",6)(10,"a",4)(11,"span",7),D(12),l()()(),d(13,Pt,2,1,"span",8)),n&2&&(a(3),R("href",`https://github.com/dhhyi/travel-packlist/releases/tag/v${e.version}`,j),Y("aria-label",e.currentVersionLabel),a(),F(e.displayVersionCode?4:5),a(4),Q(ce(8,8,e.buildTime,"long")),q(7),a(2),R("href",`https://github.com/dhhyi/travel-packlist/commit/${e.gitHash}`,j),Y("aria-label",e.gitHashLabel),a(2),Se(e.gitHash),a(),F(e.displayServiceWorkerStatus?13:-1));},dependencies:[me],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Wn=(()=>{class t{state=P(m);rulesMode=this.state.rules.mode;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config"]],decls:12,vars:4,template:function(n,e){n&1&&(O(0,"app-config-checklist")(1,"app-config-rules-mode"),i(2,"div"),O(3,"app-config-rules-editor")(4,"app-config-rules-import-export"),l(),i(5,"div"),O(6,"app-config-rules-remote")(7,"app-config-rules-viewer"),l(),O(8,"app-config-appearance")(9,"app-config-version")(10,"app-config-support")(11,"app-config-dangerzone")),n&2&&(a(2),w("hidden",e.rulesMode()==="remote"),a(3),w("hidden",e.rulesMode()==="local"));},dependencies:[ye,Ve,ke,$e,Ue,ve,be,De,we,Ke],encapsulation:2,changeDetection:0});}return t;})();export{Wn as ConfigComponent};/**i18n:3ea64412cb2fa7572222484f1122e69f6d5b2ce20c9a2c903c347eb498cd7f05*/