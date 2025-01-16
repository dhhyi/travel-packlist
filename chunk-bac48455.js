import{a as ue}from"./chunk-a80f91b7.js";import{a as y,c as X,d as x,e as G}from"./chunk-c1c6f045.js";import{b as h}from"./chunk-f24c7ffd.js";import{k as me,t as Te,u as Ne}from"./chunk-9c4cfe63.js";import{d as I,f as R,o as f}from"./chunk-d2b0e2d3.js";import{b as Ae,r as de,s as N,t as Oe}from"./chunk-9298e721.js";import{b as ce,d as $,e as pe}from"./chunk-5bce0458.js";import"./chunk-250d1157.js";import{$b as le,Ac as L,Cb as u,Dc as ge,Hb as i,Ib as a,Jb as O,Lb as ae,Mb as V,Nb as K,Ob as r,Pb as j,Qb as Z,Rc as Se,Sb as M,Tb as v,Xa as U,_ as _e,_a as C,_b as Q,bc as w,cc as re,dc as Ce,ea as P,ec as se,fb as ie,fc as c,gb as W,gc as p,hc as m,lb as S,na as D,oa as k,pc as Pe,qb as A,rc as Ee,xb as H,yb as b,zb as B}from"./chunk-fac6b1c2.js";import"./chunk-cb4c040a.js";function ye(e,g){e&1&&r(0,1);}function be(e,g){e&1&&r(0,2);}function De(e,g){e&1&&r(0,3);}function ke(e,g){e&1&&(i(0,"span",25),r(1,4),a());}function Ve(e,g){e&1&&(i(0,"span",26),r(1,5),a());}function Ke(e,g){e&1&&(i(0,"span",27),r(1,6),a());}function ve(e,g){e&1&&r(0,7);}function we(e,g){e&1&&r(0,8);}function Xe(e,g){e&1&&r(0,9);}function xe(e,g){e&1&&O(0,"app-flag-uk",28);}function ze(e,g){e&1&&O(0,"app-flag-germany",28);}var Ie=(()=>{class e{state=P(N);theme=this.state.config.theme;language=this.state.config.language;fontSize=this.state.config.fontSize;accessibility=this.state.config.accessibility;static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-appearance"]],decls:17,vars:4,consts:()=>{let o;o="Theme";let n;n="Font Size";let t;t="Accessibility";let l;l="Language";let _;_="Appearance";let E;E="Dark";let d;d="Light";let s;s="System";let Y;Y="small";let J;J="normal";let ee;ee="large";let te;te="accessible";let ne;ne="compact";let oe;return oe="auto",[_,E,d,s,Y,J,ee,te,ne,oe,["label",o,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",n,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",t,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["label",l,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"],[1,"h-6","w-8"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"cmp-select-options",10),m("ngModelChange",function(_){return p(t.theme,_)||(t.theme=_),_;}),A(3,ye,1,0,"ng-template",11)(4,be,1,0,"ng-template",12)(5,De,1,0,"ng-template",13),a(),i(6,"cmp-select-options",14),m("ngModelChange",function(_){return p(t.fontSize,_)||(t.fontSize=_),_;}),A(7,ke,2,0,"ng-template",15)(8,Ve,2,0,"ng-template",16)(9,Ke,2,0,"ng-template",17),a(),i(10,"cmp-select-options",18),m("ngModelChange",function(_){return p(t.accessibility,_)||(t.accessibility=_),_;}),A(11,ve,1,0,"ng-template",19)(12,we,1,0,"ng-template",20),a(),i(13,"cmp-select-options",21),m("ngModelChange",function(_){return p(t.language,_)||(t.language=_),_;}),A(14,Xe,1,0,"ng-template",22)(15,xe,1,0,"ng-template",23)(16,ze,1,0,"ng-template",24),a()),n&2&&(C(2),c("ngModel",t.theme),C(4),c("ngModel",t.fontSize),C(4),c("ngModel",t.accessibility),C(3),c("ngModel",t.language));},dependencies:[f,I,R,G,x,X,Ne,Te],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var z=(()=>{class e{state=P(N);rulesShare=P(ue);refactor=P(de);percentageOfItemsWithWeights=L(()=>{if(!this.state.rules.parserError()){let{items:o,weights:n}=this.refactor.countItemsAndWeights(this.state.rules.parsed());return n/o;}return 0;});resetHash(){this.state.export.lastHash.set(this.state.rules.hash()),this.state.export.lastDate.set(new Date().getTime());}isExportAvailable(){return!!this.state.rules.customized();}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.rules.exportNeeded()&&!(await h("You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?"))?Promise.resolve(!1):new Promise(o=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{o(!1);}),n.onchange=async()=>{let t=n.files?.[0];if(!t){o(!1);return;}let l=await t.text();this.state.rules.raw.set(l),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),o(!0);},n.click();});}async promptEnableWeightTracking(){!this.state.config.trackWeight()&&this.percentageOfItemsWithWeights()>.1&&(await h("It seems that the imported rules contain items with weights. Shall we enable the weight tracking?"))&&this.state.config.trackWeight.set(!0);}resetChecklist(){this.state.packlist.answers.set({}),this.state.packlist.checkedItems.set([]),this.state.packlist.collapsedCategories.set([]),this.state.packlist.answersLocked.set(!1);}static ɵfac=function(n){return new(n||e)();};static ɵprov=_e({token:e,factory:e.ɵfac,providedIn:"root"});}return e;})();function Ue(e,g){e&1&&r(0,2);}function We(e,g){e&1&&r(0,3);}var fe=(()=>{class e{router=P($);state=P(N);facade=P(z);trackWeight=this.state.config.trackWeight;categorySorting=this.state.config.categorySorting;async resetChecklist(){(await h("Are you sure you want to reset the checklist?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-checklist"]],decls:8,vars:2,consts:()=>{let o;o="Track item weight";let n;n="You can enter the item weight appended to the item name in the editor.";let t;t="Sort categories";let l;l="Checklist";let _;_="Reset Checklist";let E;E="alphabetically";let d;return d="order of definition",[l,_,E,d,["type","button",3,"click"],["id","track-weight","label",o,"help",n,3,"ngModelChange","ngModel"],["label",t,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"button",4),M("click",function(){return t.resetChecklist();}),r(3,1),a(),i(4,"cmp-checkbox",5),m("ngModelChange",function(_){return p(t.trackWeight,_)||(t.trackWeight=_),_;}),a(),i(5,"cmp-select-options",6),m("ngModelChange",function(_){return p(t.categorySorting,_)||(t.categorySorting=_),_;}),A(6,Ue,1,0,"ng-template",7)(7,We,1,0,"ng-template",8),a()),n&2&&(C(4),c("ngModel",t.trackWeight),C(),c("ngModel",t.categorySorting));},dependencies:[f,I,R,G,y,x,X],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var Ge=(()=>{class e{router=P($);reset=P(Oe);async resetEverything(){(await h("Are you sure you want to reset the whole application?"))&&(this.reset(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let o;o="DANGER!";let n;return n=" Reset Application\n",[o,n,["type","button",1,"red",3,"click"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"button",2),M("click",function(){return t.resetEverything();}),r(3,1),a());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var Fe=(()=>{class e{state=P(N);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;refactorVariables=this.state.config.refactorVariables;static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-rules-editor"]],decls:11,vars:3,consts:()=>{let o;o="Fade out disabled rules in editor";let n;n="Highlight variable status in editor";let t;t="Rename all occurrences when renaming variables";let l;l="Rules Editor";let _;_="Edit Rules";let E;E="Documentation";let d;return d="Edit Rules with Code",[l,_,E,d,["type","button","routerLink","/rules"],["id","rules-debug-mode","label",o,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",t,3,"ngModelChange","ngModel"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"button",4),r(3,1),a(),i(4,"cmp-checkbox",5),m("ngModelChange",function(_){return p(t.fadeOutDisabledRules,_)||(t.fadeOutDisabledRules=_),_;}),a(),i(5,"cmp-checkbox",6),m("ngModelChange",function(_){return p(t.highlightVariableStatus,_)||(t.highlightVariableStatus=_),_;}),a(),i(6,"cmp-checkbox",7),m("ngModelChange",function(_){return p(t.refactorVariables,_)||(t.refactorVariables=_),_;}),a(),i(7,"button",8),r(8,2),a(),i(9,"button",9),r(10,3),a()),n&2&&(C(4),c("ngModel",t.fadeOutDisabledRules),C(),c("ngModel",t.highlightVariableStatus),C(),c("ngModel",t.refactorVariables));},dependencies:[G,y,f,I,R,pe],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var He=["exportButton"],Be=["importButton"];function je(e,g){e&1&&(i(0,"div",6),r(1,4),a());}function Ze(e,g){e&1&&(i(0,"div",9),O(1,"app-icon-download",10),a());}var Me=(()=>{class e{router=P($);route=P(ce);state=P(N);exportReminder=this.state.config.exportReminder;exportNeeded=this.state.rules.exportNeeded;facade=P(z);highlightExport;exportButton=W.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=W.required("importButton");loading=ie(!1);constructor(){let o=Ae(this.route.fragment);this.highlightExport=L(()=>o()==="export-now"),this.highlightImport=L(()=>o()==="import"),ge(()=>{let n=o();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,t){n&1&&(Q(t.exportButton,He,5),Q(t.importButton,Be,5)),n&2&&le(2);},decls:9,vars:8,consts:()=>{let o;o="Export needed";let n;n="Remind me to regularly export rules";let t;t=" Export Rules\n";let l;l=" Import Rules\n";let _;return _=" Current rules are not backed up! ",[["exportButton",""],["importButton",""],t,l,_,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",o,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],[1,"h-[12rem]","w-[12rem]"]];},template:function(n,t){if(n&1){let l=ae();i(0,"button",5,0),M("click",function(){return D(l),k(t.exportRules());}),r(2,2),a(),A(3,je,2,0,"div",6),i(4,"button",7,1),M("click",function(){return D(l),k(t.importRules());}),r(6,3),a(),i(7,"cmp-checkbox",8),m("ngModelChange",function(E){return D(l),p(t.exportReminder,E)||(t.exportReminder=E),k(E);}),a(),A(8,Ze,2,0,"div",9);}n&2&&(B("highlighted",t.highlightExport()&&t.exportNeeded()),b("disabled",!t.isExportAvailable()),C(3),u(t.exportNeeded()?3:-1),C(),B("highlighted",t.highlightImport()),C(3),c("ngModel",t.exportReminder),C(),u(t.loading()?8:-1));},dependencies:[f,I,R,G,y,me],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function Qe(e,g){e&1&&(i(0,"p"),V(1,3),i(2,"a",8),O(3,"img",9),a(),K(),a());}var Le=(()=>{class e{displayKoFi=!0;static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let o;o="open an issue on GitHub";let n;n="email to danilo.hoffmann1@googlemail.com";let t;t="Support";let l;l=" If you find any bugs or have any suggestions, please open an issue on GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let _;_=" Alternatively, you can reach out to me by "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+"";let E;E="Buy Me a Coffee at ko-fi.com";let d;return d=" If you like this app, please consider to "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[t,l,_,d,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",o,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",E,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"p"),V(3,1),i(4,"a",4),O(5,"img",5),a(),K(),a(),i(6,"p"),V(7,2),i(8,"a",6),O(9,"img",7),a(),K(),a(),A(10,Qe,4,0,"p")),n&2&&(C(10),u(t.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function qe(e,g){if(e&1&&w(0),e&2){let o=v();se(" ",o.versionCode," (",o.version,") ");}}function Ye(e,g){if(e&1&&w(0),e&2){let o=v();Ce(" ",o.version," ");}}function Je(e,g){if(e&1&&(i(0,"span",7),r(1,2),a()),e&2){let o=v();C(),j(o.serviceWorkerStatus()),Z(1);}}var he=(()=>{class e{state=P(N);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1737021247629;version="0.5.0";gitHash="dd76f654b0d6f60eb96cba6e2df4a9d757f6d1c4";versionCode=15;currentVersionLabel="Current version is "+this.version+"";gitHashLabel="Current git hash starts with "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=L(()=>{switch(this.state.serviceWorker.status()){case"disabled":return"disabled";case"error":return"error";case"unrecoverable":return"unrecoverable - please refresh";case"init":return"initializing";case"ok":return"ok";case"update-available":return"update available";}});static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let o;o="App Version";let n;n="built on "+"\uFFFD0\uFFFD"+"";let t;return t="Service Worker: "+"\uFFFD0\uFFFD"+"",[o,n,t,[1,"accessible-content","inline-block","content-center",3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"font-mono","text-sm"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"span")(3,"a",3),A(4,qe,1,2)(5,Ye,1,1),a()(),i(6,"span",4),r(7,1),Pe(8,"date"),a(),i(9,"span",5)(10,"a",3)(11,"span",6),w(12),a()()(),A(13,Je,2,1,"span",7)),n&2&&(C(3),b("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+t.version,U),H("aria-label",t.currentVersionLabel),C(),u(t.displayVersionCode?4:5),C(4),j(Ee(8,8,t.buildTime,"long")),Z(7),C(2),b("href","https://github.com/dhhyi/travel-packlist/commit/"+t.gitHash,U),H("aria-label",t.gitHashLabel),C(2),re(t.gitHash),C(),u(t.displayServiceWorkerStatus?13:-1));},dependencies:[Se],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var En=(()=>{class e{static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config"]],decls:7,vars:0,template:function(n,t){n&1&&O(0,"app-config-checklist")(1,"app-config-rules-editor")(2,"app-config-rules-import-export")(3,"app-config-appearance")(4,"app-config-version")(5,"app-config-support")(6,"app-config-dangerzone");},dependencies:[fe,Fe,Me,Ie,he,Le,Ge],encapsulation:2,changeDetection:0});}return e;})();export{En as default};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/