import{a as Re}from"./chunk-71947de6.js";import{a as G,c as v,d as X}from"./chunk-2d2b0263.js";import{b as h}from"./chunk-dc07e920.js";import{k as me,t as de,u as Oe}from"./chunk-d90e348e.js";import{d as u,f as R,o as f}from"./chunk-9ff3c6ab.js";import{b as pe,r as Ie,s as m,t as ue}from"./chunk-5f7c50f4.js";import{b as Ne,d as $,e as Te}from"./chunk-35b70206.js";import"./chunk-d6ce3d1d.js";import{Ba as le,Bb as I,Cc as ge,Gb as i,Hb as a,Ib as O,Kb as re,Lb as V,Mb as k,Nb as r,Ob as B,Pb as j,Qc as ce,Rb as M,Sb as K,Xa as z,Za as C,Zb as Z,_ as ae,_b as Ce,ac as w,bc as se,cc as Pe,dc as Ee,ea as P,ec as p,fb as U,fc as N,gc as T,kb as g,la as b,ma as D,oc as Ae,pb as c,qc as Se,wb as W,xb as y,yb as H,zc as L}from"./chunk-5879788f.js";import"./chunk-5dac2c5c.js";function ye(t,A){t&1&&r(0,1);}function be(t,A){t&1&&(i(0,"span",26),O(1,"app-flag-uk",27),a());}function De(t,A){t&1&&(i(0,"span",28),O(1,"app-flag-germany",27),a());}function Ve(t,A){t&1&&r(0,2);}function ke(t,A){t&1&&r(0,3);}function Ke(t,A){t&1&&r(0,4);}function we(t,A){t&1&&(i(0,"span",29),r(1,5),a());}function ve(t,A){t&1&&(i(0,"span",30),r(1,6),a());}function Xe(t,A){t&1&&(i(0,"span",31),r(1,7),a());}function xe(t,A){t&1&&r(0,8);}function ze(t,A){t&1&&r(0,9);}var fe=(()=>{class t{state=P(m);theme=this.state.config.theme;language=this.state.config.language;fontSize=this.state.config.fontSize;accessibility=this.state.config.accessibility;animations=this.state.config.animations;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-appearance"]],decls:18,vars:5,consts:()=>{let o;o="Sprache";let n;n="Thema";let e;e="Schriftgr\xF6\xDFe";let l;l="Barrierefreiheit";let _;_="Animationen";let E;E="Aussehen";let d;d="automatisch";let s;s="englisch";let q;q="deutsch";let Y;Y="Dark";let J;J="Light";let ee;ee="System";let te;te="klein";let ne;ne="normal";let _e;_e="gro\xDF";let oe;oe="barrierefrei";let ie;return ie="kompakt",[E,d,Y,J,ee,te,ne,_e,oe,ie,["label",o,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],["label",n,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",e,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",l,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["id","animations","label",_,3,"ngModelChange","ngModel"],["aria-label",s],[1,"h-6","w-8"],["aria-label",q],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"cmp-select-options",10),T("ngModelChange",function(_){return N(e.language,_)||(e.language=_),_;}),c(3,ye,1,0,"ng-template",11)(4,be,2,0,"ng-template",12)(5,De,2,0,"ng-template",13),a(),i(6,"cmp-select-options",14),T("ngModelChange",function(_){return N(e.theme,_)||(e.theme=_),_;}),c(7,Ve,1,0,"ng-template",15)(8,ke,1,0,"ng-template",16)(9,Ke,1,0,"ng-template",17),a(),i(10,"cmp-select-options",18),T("ngModelChange",function(_){return N(e.fontSize,_)||(e.fontSize=_),_;}),c(11,we,2,0,"ng-template",19)(12,ve,2,0,"ng-template",20)(13,Xe,2,0,"ng-template",21),a(),i(14,"cmp-select-options",22),T("ngModelChange",function(_){return N(e.accessibility,_)||(e.accessibility=_),_;}),c(15,xe,1,0,"ng-template",23)(16,ze,1,0,"ng-template",24),a(),i(17,"cmp-checkbox",25),T("ngModelChange",function(_){return N(e.animations,_)||(e.animations=_),_;}),a()),n&2&&(C(2),p("ngModel",e.language),C(4),p("ngModel",e.theme),C(4),p("ngModel",e.fontSize),C(4),p("ngModel",e.accessibility),C(3),p("ngModel",e.animations));},dependencies:[f,u,R,X,v,Oe,de,G],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var x=(()=>{class t{state=P(m);rulesShare=P(Re);refactor=P(Ie);percentageOfItemsWithWeights=L(()=>{if(!this.state.rules.parserError()){let{items:o,weights:n}=this.refactor.countItemsAndWeights(this.state.rules.parsed());return n/o;}return 0;});resetHash(){this.state.export.lastHash.set(this.state.rules.hash()),this.state.export.lastDate.set(new Date().getTime());}isExportAvailable(){return!!this.state.rules.customized();}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.rules.exportNeeded()&&!(await h("Du hast ungespeicherte \xC4nderungen, die verloren gehen, wenn du neue Regeln importierst. M\xF6chtest du trotzdem fortfahren?"))?Promise.resolve(!1):new Promise(o=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{o(!1);}),n.onchange=async()=>{let e=n.files?.[0];if(!e){o(!1);return;}let l=await e.text();this.state.rules.raw.set(l),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),o(!0);},n.click();});}async promptEnableWeightTracking(){!this.state.config.trackWeight()&&this.percentageOfItemsWithWeights()>.1&&(await h("Es scheint, dass die importierten Regeln Gegenst\xE4nde mit Gewichten enthalten. Sollen wir die Gewichtserfassung aktivieren?"))&&this.state.config.trackWeight.set(!0);}resetChecklist(){this.state.packlist.answers.set({}),this.state.packlist.checkedItems.set([]),this.state.packlist.collapsedCategories.set([]),this.state.packlist.answersLocked.set(!1);}static ɵfac=function(n){return new(n||t)();};static ɵprov=ae({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function Ue(t,A){t&1&&r(0,2);}function We(t,A){t&1&&r(0,3);}var Ge=(()=>{class t{router=P($);state=P(m);facade=P(x);trackWeight=this.state.config.trackWeight;categorySorting=this.state.config.categorySorting;async resetChecklist(){(await h("Bist du sicher, dass du die Checkliste zur\xFCcksetzen m\xF6chtest?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-checklist"]],decls:8,vars:2,consts:()=>{let o;o="Gesamtgewicht verfolgen";let n;n="Du kannst das Gegenstandsgewicht im Editor an den Gegenstandsnamen anh\xE4ngen.";let e;e="Kategorien sortieren";let l;l="Checkliste";let _;_="Checkliste zur\xFCcksetzen";let E;E="alphabetisch";let d;return d="nach Definitionsreihenfolge",[l,_,E,d,["type","button",3,"click"],["id","track-weight","label",o,"help",n,3,"ngModelChange","ngModel"],["label",e,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"button",4),M("click",function(){return e.resetChecklist();}),r(3,1),a(),i(4,"cmp-checkbox",5),T("ngModelChange",function(_){return N(e.trackWeight,_)||(e.trackWeight=_),_;}),a(),i(5,"cmp-select-options",6),T("ngModelChange",function(_){return N(e.categorySorting,_)||(e.categorySorting=_),_;}),c(6,Ue,1,0,"ng-template",7)(7,We,1,0,"ng-template",8),a()),n&2&&(C(4),p("ngModel",e.trackWeight),C(),p("ngModel",e.categorySorting));},dependencies:[f,u,R,G,X,v],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Fe=(()=>{class t{router=P($);reset=P(ue);async resetEverything(){(await h("Bist du sicher, dass du die gesamte Anwendung zur\xFCcksetzen m\xF6chtest?"))&&(this.reset(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let o;o="GEFAHR!";let n;return n="Anwendung zur\xFCcksetzen",[o,n,["type","button",1,"red",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"button",2),M("click",function(){return e.resetEverything();}),r(3,1),a());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Me=(()=>{class t{state=P(m);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;refactorVariables=this.state.config.refactorVariables;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-editor"]],decls:11,vars:3,consts:()=>{let o;o="Deaktivierte Regeln im Editor ausblenden";let n;n="Variablenstatus im Editor hervorheben";let e;e="Alle Vorkommen beim Umbenennen von Variablen umbenennen";let l;l="Regel Editor";let _;_="Regeln bearbeiten";let E;E="Dokumentation";let d;return d="Regeln mit Code bearbeiten",[l,_,E,d,["type","button","routerLink","/rules"],["id","rules-debug-mode","label",o,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",e,3,"ngModelChange","ngModel"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"button",4),r(3,1),a(),i(4,"cmp-checkbox",5),T("ngModelChange",function(_){return N(e.fadeOutDisabledRules,_)||(e.fadeOutDisabledRules=_),_;}),a(),i(5,"cmp-checkbox",6),T("ngModelChange",function(_){return N(e.highlightVariableStatus,_)||(e.highlightVariableStatus=_),_;}),a(),i(6,"cmp-checkbox",7),T("ngModelChange",function(_){return N(e.refactorVariables,_)||(e.refactorVariables=_),_;}),a(),i(7,"button",8),r(8,2),a(),i(9,"button",9),r(10,3),a()),n&2&&(C(4),p("ngModel",e.fadeOutDisabledRules),C(),p("ngModel",e.highlightVariableStatus),C(),p("ngModel",e.refactorVariables));},dependencies:[G,f,u,R,Te],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var He=["exportButton"],Be=["importButton"];function je(t,A){t&1&&(i(0,"div",6),r(1,4),a());}function Ze(t,A){t&1&&(i(0,"div",9),O(1,"app-icon-download",10),a());}var Le=(()=>{class t{router=P($);route=P(Ne);state=P(m);exportReminder=this.state.config.exportReminder;exportNeeded=this.state.rules.exportNeeded;facade=P(x);highlightExport;exportButton=U.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=U.required("importButton");loading=le(!1);constructor(){let o=pe(this.route.fragment);this.highlightExport=L(()=>o()==="export-now"),this.highlightImport=L(()=>o()==="import"),ge(()=>{let n=o();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,e){n&1&&(Z(e.exportButton,He,5),Z(e.importButton,Be,5)),n&2&&Ce(2);},decls:9,vars:8,consts:()=>{let o;o="Export n\xF6tig";let n;n="Erinnere mich daran, regelm\xE4\xDFig Regeln zu exportieren";let e;e="Regeln exportieren";let l;l="Regeln importieren";let _;return _="Aktuelle Regeln sind nicht gesichert!",[["exportButton",""],["importButton",""],e,l,_,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",o,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],[1,"h-[12rem]","w-[12rem]"]];},template:function(n,e){if(n&1){let l=re();i(0,"button",5,0),M("click",function(){return b(l),D(e.exportRules());}),r(2,2),a(),c(3,je,2,0,"div",6),i(4,"button",7,1),M("click",function(){return b(l),D(e.importRules());}),r(6,3),a(),i(7,"cmp-checkbox",8),T("ngModelChange",function(E){return b(l),N(e.exportReminder,E)||(e.exportReminder=E),D(E);}),a(),c(8,Ze,2,0,"div",9);}n&2&&(H("highlighted",e.highlightExport()&&e.exportNeeded()),y("disabled",!e.isExportAvailable()),C(3),I(e.exportNeeded()?3:-1),C(),H("highlighted",e.highlightImport()),C(3),p("ngModel",e.exportReminder),C(),I(e.loading()?8:-1));},dependencies:[f,u,R,G,me],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function Qe(t,A){t&1&&(i(0,"p"),V(1,3),i(2,"a",8),O(3,"img",9),a(),k(),a());}var he=(()=>{class t{displayKoFi=!0;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let o;o="einen Issue auf GitHub \xF6ffnen";let n;n="E-Mail an danilo.hoffmann1@googlemail.com";let e;e="Support";let l;l="Wenn du Fehler findest oder Vorschl\xE4ge hast, \xF6ffne bitte ein Issue auf GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let _;_="Alternativ kannst du mich per E-Mail unter "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+" erreichen.";let E;E="Kauf mir einen Kaffee auf ko-fi.com";let d;return d="Wenn dir diese App gef\xE4llt, \xFCberlege bitte mich zu unterst\xFCtzen: "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[e,l,_,d,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",o,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",E,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"p"),V(3,1),i(4,"a",4),O(5,"img",5),a(),k(),a(),i(6,"p"),V(7,2),i(8,"a",6),O(9,"img",7),a(),k(),a(),c(10,Qe,4,0,"p")),n&2&&(C(10),I(e.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function qe(t,A){if(t&1&&w(0),t&2){let o=K();Ee(" ",o.versionCode," (",o.version,") ");}}function Ye(t,A){if(t&1&&w(0),t&2){let o=K();Pe(" ",o.version," ");}}function Je(t,A){if(t&1&&(i(0,"span",7),r(1,2),a()),t&2){let o=K();C(),B(o.serviceWorkerStatus()),j(1);}}var $e=(()=>{class t{state=P(m);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1738076055422;version="0.6.5";gitHash="58f1b154ce5da123d5b95b811c1219afca791ec3";versionCode=21;currentVersionLabel="Die aktuelle Version ist "+this.version+"";gitHashLabel="Der aktuelle Git Hash startet mit "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=L(()=>{switch(this.state.serviceWorker.status()){case"disabled":return"deaktiviert";case"error":return"Fehler";case"unrecoverable":return"nicht wiederherstellbar - bitte aktualisieren";case"init":return"initialisierend";case"ok":return"ok";case"update-available":return"Update verf\xFCgbar";}});static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let o;o="App-Version";let n;n="gebaut am "+"\uFFFD0\uFFFD"+"";let e;return e="Service Worker: "+"\uFFFD0\uFFFD"+"",[o,n,e,[1,"accessible-content","inline-block","content-center",3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"font-mono","text-sm"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"span")(3,"a",3),c(4,qe,1,2)(5,Ye,1,1),a()(),i(6,"span",4),r(7,1),Ae(8,"date"),a(),i(9,"span",5)(10,"a",3)(11,"span",6),w(12),a()()(),c(13,Je,2,1,"span",7)),n&2&&(C(3),y("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+e.version,z),W("aria-label",e.currentVersionLabel),C(),I(e.displayVersionCode?4:5),C(4),B(Se(8,8,e.buildTime,"long")),j(7),C(2),y("href","https://github.com/dhhyi/travel-packlist/commit/"+e.gitHash,z),W("aria-label",e.gitHashLabel),C(2),se(e.gitHash),C(),I(e.displayServiceWorkerStatus?13:-1));},dependencies:[ce],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var En=(()=>{class t{static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config"]],decls:7,vars:0,template:function(n,e){n&1&&O(0,"app-config-checklist")(1,"app-config-rules-editor")(2,"app-config-rules-import-export")(3,"app-config-appearance")(4,"app-config-version")(5,"app-config-support")(6,"app-config-dangerzone");},dependencies:[Ge,Me,Le,fe,$e,he,Fe],encapsulation:2,changeDetection:0});}return t;})();export{En as ConfigComponent};/**i18n:5366b86f2516668e0182d7169675f5a9db84e9239a33e605b62f0d042910cdf2*/