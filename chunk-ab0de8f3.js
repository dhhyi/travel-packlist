import{a as Te}from"./chunk-4728fd0c.js";import{b as L,e as X,f as v}from"./chunk-3c086dfe.js";import{b as $}from"./chunk-1261e490.js";import{l as ge,v as Se,w as ce}from"./chunk-433796b5.js";import{d as G,f as F,o as M}from"./chunk-75766ded.js";import{A as pe,C as d,D as Ne}from"./chunk-aa805410.js";import"./chunk-39c4b1ae.js";import{Ba as oe,Bb as R,Cc as Ee,Gb as i,Hb as l,Ib as O,Kb as ie,Lb as k,Mb as V,Nb as C,Ob as H,Pb as B,Qc as Ae,Rb as I,Sb as K,Xa as x,Za as r,Zb as Z,_b as le,ac as w,bc as ae,cc as Ce,dc as re,ea as N,ec as S,fb as z,fc as c,gc as p,kb as g,la as b,ma as D,oc as se,pb as T,qc as Pe,wb as U,xb as h,yb as W,zc as f}from"./chunk-a7901826.js";import"./chunk-243a5d09.js";function Ge(t,E){t&1&&C(0,1);}function Fe(t,E){t&1&&O(0,"span",26);}function Me(t,E){t&1&&O(0,"span",27);}function Le(t,E){t&1&&C(0,2);}function he(t,E){t&1&&C(0,3);}function $e(t,E){t&1&&C(0,4);}function ye(t,E){t&1&&(i(0,"span",28),C(1,5),l());}function be(t,E){t&1&&(i(0,"span",29),C(1,6),l());}function De(t,E){t&1&&(i(0,"span",30),C(1,7),l());}function ke(t,E){t&1&&C(0,8);}function Ve(t,E){t&1&&C(0,9);}var de=(()=>{class t{state=N(d);theme=this.state.config.theme;language=this.state.config.language;fontSize=this.state.config.fontSize;accessibility=this.state.config.accessibility;animations=this.state.config.animations;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-appearance"]],decls:18,vars:5,consts:()=>{let o;o="Language";let n;n="Theme";let e;e="Font Size";let a;a="Accessibility";let _;_="Animations";let s;s="Appearance";let m;m="auto";let P;P="English";let u;u="German";let Y;Y="Dark";let Q;Q="Light";let q;q="System";let J;J="small";let ee;ee="normal";let te;te="large";let ne;ne="accessible";let _e;return _e="compact",[s,m,Y,Q,q,J,ee,te,ne,_e,["label",o,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],["label",n,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",e,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",a,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["id","animations","label",_,3,"ngModelChange","ngModel"],["aria-label",P,"flagUk","","iconClass","h-6 w-8"],["aria-label",u,"flagGermany","","iconClass","h-6 w-8"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"cmp-select-options",10),p("ngModelChange",function(_){return c(e.language,_)||(e.language=_),_;}),T(3,Ge,1,0,"ng-template",11)(4,Fe,1,0,"ng-template",12)(5,Me,1,0,"ng-template",13),l(),i(6,"cmp-select-options",14),p("ngModelChange",function(_){return c(e.theme,_)||(e.theme=_),_;}),T(7,Le,1,0,"ng-template",15)(8,he,1,0,"ng-template",16)(9,$e,1,0,"ng-template",17),l(),i(10,"cmp-select-options",18),p("ngModelChange",function(_){return c(e.fontSize,_)||(e.fontSize=_),_;}),T(11,ye,2,0,"ng-template",19)(12,be,2,0,"ng-template",20)(13,De,2,0,"ng-template",21),l(),i(14,"cmp-select-options",22),p("ngModelChange",function(_){return c(e.accessibility,_)||(e.accessibility=_),_;}),T(15,ke,1,0,"ng-template",23)(16,Ve,1,0,"ng-template",24),l(),i(17,"cmp-checkbox",25),p("ngModelChange",function(_){return c(e.animations,_)||(e.animations=_),_;}),l()),n&2&&(r(2),S("ngModel",e.language),r(4),S("ngModel",e.theme),r(4),S("ngModel",e.fontSize),r(4),S("ngModel",e.accessibility),r(3),S("ngModel",e.animations));},dependencies:[M,G,F,v,X,ce,Se,L],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function Ke(t,E){t&1&&C(0,2);}function we(t,E){t&1&&C(0,3);}var me=(()=>{class t{state=N(d);trackWeight=this.state.config.trackWeight;skipItems=this.state.config.skipItems;categorySorting=this.state.config.categorySorting;skipItemsHelpText=f(()=>this.state.browser.isMobile()?"You can skip items in the packlist by long pressing them.":"You can skip items in the packlist by double clicking them.");async resetChecklist(){(await $("Are you sure you want to reset the checklist?"))&&(this.state.packlist.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-checklist"]],decls:9,vars:4,consts:()=>{let o;o="Track item weight";let n;n="You can enter the item weight appended to the item name in the editor.";let e;e="Allow skipping items";let a;a="Sort categories";let _;_="Checklist";let s;s="Reset Checklist";let m;m="alphabetically";let P;return P="order of definition",[_,s,m,P,["type","button",3,"click"],["id","track-weight","label",o,"help",n,3,"ngModelChange","ngModel"],["id","skip-items","label",e,3,"ngModelChange","help","ngModel"],["label",a,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"button",4),I("click",function(){return e.resetChecklist();}),C(3,1),l(),i(4,"cmp-checkbox",5),p("ngModelChange",function(_){return c(e.trackWeight,_)||(e.trackWeight=_),_;}),l(),i(5,"cmp-checkbox",6),p("ngModelChange",function(_){return c(e.skipItems,_)||(e.skipItems=_),_;}),l(),i(6,"cmp-select-options",7),p("ngModelChange",function(_){return c(e.categorySorting,_)||(e.categorySorting=_),_;}),T(7,Ke,1,0,"ng-template",8)(8,we,1,0,"ng-template",9),l()),n&2&&(r(4),S("ngModel",e.trackWeight),r(),h("help",e.skipItemsHelpText()),S("ngModel",e.skipItems),r(),S("ngModel",e.categorySorting));},dependencies:[M,G,F,L,v,X],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Oe=(()=>{class t{reset=N(Ne);state=N(d);async resetEverything(){(await $("Are you sure you want to reset the whole application?"))&&(await this.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let o;o="DANGER!";let n;return n=" Reset Application\n",[o,n,["type","button",1,"red",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"button",2),I("click",function(){return e.resetEverything();}),C(3,1),l());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Ie=(()=>{class t{state=N(d);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;refactorVariables=this.state.config.refactorVariables;go=this.state.router.go;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-editor"]],decls:11,vars:3,consts:()=>{let o;o="Fade out disabled rules in editor";let n;n="Highlight variable status in editor";let e;e="Rename all occurrences when renaming variables";let a;a="Rules Editor";let _;_="Edit Rules";let s;s="Documentation";let m;return m=" Edit Rules with Code\n",[a,_,s,m,["type","button",3,"click"],["id","rules-debug-mode","label",o,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",e,3,"ngModelChange","ngModel"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"button",4),I("click",function(){return e.go("rules");}),C(3,1),l(),i(4,"cmp-checkbox",5),p("ngModelChange",function(_){return c(e.fadeOutDisabledRules,_)||(e.fadeOutDisabledRules=_),_;}),l(),i(5,"cmp-checkbox",6),p("ngModelChange",function(_){return c(e.highlightVariableStatus,_)||(e.highlightVariableStatus=_),_;}),l(),i(6,"cmp-checkbox",7),p("ngModelChange",function(_){return c(e.refactorVariables,_)||(e.refactorVariables=_),_;}),l(),i(7,"button",4),I("click",function(){return e.go("documentation");}),C(8,2),l(),i(9,"button",4),I("click",function(){return e.go("rules-raw");}),C(10,3),l()),n&2&&(r(4),S("ngModel",e.fadeOutDisabledRules),r(),S("ngModel",e.highlightVariableStatus),r(),S("ngModel",e.refactorVariables));},dependencies:[L,M,G,F],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Xe=["exportButton"],ve=["importButton"];function xe(t,E){t&1&&(i(0,"div",6),C(1,4),l());}function ze(t,E){t&1&&O(0,"div",9);}var ue=(()=>{class t{state=N(d);exportReminder=this.state.config.exportReminder;exportNeeded=this.state.rules.exportNeeded;highlightExport;exportButton=z.required("exportButton");highlightImport;importButton=z.required("importButton");loading=oe(!1);constructor(){let o=this.state.router.fragment;this.highlightExport=f(()=>o()==="export-now"),this.highlightImport=f(()=>o()==="import"),Ee(()=>{let n=o();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.triggerImportRules())&&this.state.router.go("packlist"),this.loading.set(!1);}rulesShare=N(Te);refactor=N(pe);percentageOfItemsWithWeights=f(()=>{if(!this.state.rules.parserError()){let{items:o,weights:n}=this.refactor.countItemsAndWeights(this.state.rules.parsed());return n/o;}return 0;});resetHash(){this.state.export.lastHash.set(this.state.rules.hash()),this.state.export.lastDate.set(new Date().getTime());}isExportAvailable(){return!!this.state.rules.customized();}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async triggerImportRules(){return this.state.rules.exportNeeded()&&!(await $("You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?"))?Promise.resolve(!1):new Promise(o=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{o(!1);}),n.onchange=async()=>{let e=n.files?.[0];if(!e){o(!1);return;}let a=await e.text();this.state.rules.raw.set(a),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.state.packlist.reset(),o(!0);},n.click();});}async promptEnableWeightTracking(){!this.state.config.trackWeight()&&this.percentageOfItemsWithWeights()>.1&&(await $("It seems that the imported rules contain items with weights. Shall we enable the weight tracking?"))&&this.state.config.trackWeight.set(!0);}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,e){n&1&&(Z(e.exportButton,Xe,5),Z(e.importButton,ve,5)),n&2&&le(2);},decls:9,vars:8,consts:()=>{let o;o="Export needed";let n;n="Remind me to regularly export rules";let e;e=" Export Rules\n";let a;a=" Import Rules\n";let _;return _=" Current rules are not backed up! ",[["exportButton",""],["importButton",""],e,a,_,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",o,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],["iconDownload","","iconClass","h-[12rem] w-[12rem]",1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"]];},template:function(n,e){if(n&1){let a=ie();i(0,"button",5,0),I("click",function(){return b(a),D(e.exportRules());}),C(2,2),l(),T(3,xe,2,0,"div",6),i(4,"button",7,1),I("click",function(){return b(a),D(e.importRules());}),C(6,3),l(),i(7,"cmp-checkbox",8),p("ngModelChange",function(s){return b(a),c(e.exportReminder,s)||(e.exportReminder=s),D(s);}),l(),T(8,ze,1,0,"div",9);}n&2&&(W("highlighted",e.highlightExport()&&e.exportNeeded()),h("disabled",!e.isExportAvailable()),r(3),R(e.exportNeeded()?3:-1),r(),W("highlighted",e.highlightImport()),r(3),S("ngModel",e.exportReminder),r(),R(e.loading()?8:-1));},dependencies:[M,G,F,L,ge],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function Ue(t,E){t&1&&(i(0,"p"),k(1,3),i(2,"a",8),O(3,"img",9),l(),V(),l());}var Re=(()=>{class t{displayKoFi=!0;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let o;o="open an issue on GitHub";let n;n="email to danilo.hoffmann1@googlemail.com";let e;e="Support";let a;a=" If you find any bugs or have any suggestions, please open an issue on GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let _;_=" Alternatively, you can reach out to me by "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+"";let s;s="Buy Me a Coffee at ko-fi.com";let m;return m=" If you like this app, please consider to "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[e,a,_,m,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",o,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"e2e-hidden","inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"e2e-hidden","inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",s,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"p"),k(3,1),i(4,"a",4),O(5,"img",5),l(),V(),l(),i(6,"p"),k(7,2),i(8,"a",6),O(9,"img",7),l(),V(),l(),T(10,Ue,4,0,"p")),n&2&&(r(10),R(e.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function We(t,E){if(t&1&&w(0),t&2){let o=K();re(" ",o.versionCode," (",o.version,") ");}}function He(t,E){if(t&1&&w(0),t&2){let o=K();Ce(" ",o.version," ");}}function Be(t,E){if(t&1&&(i(0,"span",8),C(1,2),l()),t&2){let o=K();r(),H(o.serviceWorkerStatus()),B(1);}}var fe=(()=>{class t{state=N(d);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1739797195196;version="0.9.0";gitHash="f90578427f75b52960a3b0093947c71732d877c9";versionCode=30;currentVersionLabel="Current version is "+this.version+"";gitHashLabel="Current git hash starts with "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=f(()=>{switch(this.state.serviceWorker.status()){case"disabled":return"disabled";case"error":return"error";case"unrecoverable":return"unrecoverable - please refresh";case"init":return"initializing";case"ok":return"ok";case"update-available":return"update available";}});static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let o;o="App Version";let n;n="built on "+"\uFFFD0\uFFFD"+"";let e;return e="Service Worker: "+"\uFFFD0\uFFFD"+"",[o,n,e,[1,"e2e-hidden"],[1,"accessible-content","inline-block","content-center",3,"href"],[1,"e2e-hidden","italic"],[1,"e2e-hidden","truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"e2e-hidden","font-mono","text-sm"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"span",3)(3,"a",4),T(4,We,1,2)(5,He,1,1),l()(),i(6,"span",5),C(7,1),se(8,"date"),l(),i(9,"span",6)(10,"a",4)(11,"span",7),w(12),l()()(),T(13,Be,2,1,"span",8)),n&2&&(r(3),h("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+e.version,x),U("aria-label",e.currentVersionLabel),r(),R(e.displayVersionCode?4:5),r(4),H(Pe(8,8,e.buildTime,"long")),B(7),r(2),h("href","https://github.com/dhhyi/travel-packlist/commit/"+e.gitHash,x),U("aria-label",e.gitHashLabel),r(2),ae(e.gitHash),r(),R(e.displayServiceWorkerStatus?13:-1));},dependencies:[Ae],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Zt=(()=>{class t{static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config"]],decls:7,vars:0,template:function(n,e){n&1&&O(0,"app-config-checklist")(1,"app-config-rules-editor")(2,"app-config-rules-import-export")(3,"app-config-appearance")(4,"app-config-version")(5,"app-config-support")(6,"app-config-dangerzone");},dependencies:[me,Ie,ue,de,fe,Re,Oe],encapsulation:2,changeDetection:0});}return t;})();export{Zt as ConfigComponent};/**i18n:15693acdce30f00c919aab2f8515f765f213a298081817f04f3b278c0f34be30*/