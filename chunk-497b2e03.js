import{a as Oe}from"./chunk-b22f1ab8.js";import{a as $,c as w,d as X}from"./chunk-a0fa8531.js";import{b as L}from"./chunk-57e4aefe.js";import{k as pe,t as me,u as Te}from"./chunk-42864eeb.js";import{d as I,f as R,o as f}from"./chunk-d2b0e2d3.js";import{b as Se,r as Ne,s as N,t as de}from"./chunk-f77e7dde.js";import{b as Ae,d as h,e as ce}from"./chunk-5bce0458.js";import"./chunk-250d1157.js";import{$b as ae,Ac as M,Cb as u,Dc as Ee,Hb as i,Ib as a,Jb as O,Lb as ie,Mb as k,Nb as V,Ob as r,Pb as B,Qb as j,Rc as ge,Sb as F,Tb as K,Xa as z,_ as oe,_a as C,_b as Z,bc as v,cc as le,dc as re,ea as P,ec as Ce,fb as _e,fc as c,gb as U,gc as p,hc as m,lb as S,na as b,oa as D,pc as se,qb as A,rc as Pe,xb as W,yb as y,zb as H}from"./chunk-fac6b1c2.js";import"./chunk-cb4c040a.js";function Le(e,g){e&1&&r(0,1);}function he(e,g){e&1&&r(0,2);}function $e(e,g){e&1&&r(0,3);}function ye(e,g){e&1&&(i(0,"span",25),r(1,4),a());}function be(e,g){e&1&&(i(0,"span",26),r(1,5),a());}function De(e,g){e&1&&(i(0,"span",27),r(1,6),a());}function ke(e,g){e&1&&r(0,7);}function Ve(e,g){e&1&&r(0,8);}function Ke(e,g){e&1&&r(0,9);}function ve(e,g){e&1&&O(0,"app-flag-uk",28);}function we(e,g){e&1&&O(0,"app-flag-germany",28);}var ue=(()=>{class e{state=P(N);theme=this.state.config.theme;language=this.state.config.language;fontSize=this.state.config.fontSize;accessibility=this.state.config.accessibility;static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-appearance"]],decls:17,vars:4,consts:()=>{let o;o="Thema";let n;n="Schriftgr\xF6\xDFe";let t;t="Barrierefreiheit";let l;l="Sprache";let _;_="Aussehen";let E;E="Dark";let d;d="Light";let s;s="System";let q;q="klein";let Y;Y="normal";let J;J="gro\xDF";let ee;ee="barrierefrei";let te;te="kompakt";let ne;return ne="automatisch",[_,E,d,s,q,Y,J,ee,te,ne,["label",o,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",n,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",t,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["label",l,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"],[1,"h-6","w-8"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"cmp-select-options",10),m("ngModelChange",function(_){return p(t.theme,_)||(t.theme=_),_;}),A(3,Le,1,0,"ng-template",11)(4,he,1,0,"ng-template",12)(5,$e,1,0,"ng-template",13),a(),i(6,"cmp-select-options",14),m("ngModelChange",function(_){return p(t.fontSize,_)||(t.fontSize=_),_;}),A(7,ye,2,0,"ng-template",15)(8,be,2,0,"ng-template",16)(9,De,2,0,"ng-template",17),a(),i(10,"cmp-select-options",18),m("ngModelChange",function(_){return p(t.accessibility,_)||(t.accessibility=_),_;}),A(11,ke,1,0,"ng-template",19)(12,Ve,1,0,"ng-template",20),a(),i(13,"cmp-select-options",21),m("ngModelChange",function(_){return p(t.language,_)||(t.language=_),_;}),A(14,Ke,1,0,"ng-template",22)(15,ve,1,0,"ng-template",23)(16,we,1,0,"ng-template",24),a()),n&2&&(C(2),c("ngModel",t.theme),C(4),c("ngModel",t.fontSize),C(4),c("ngModel",t.accessibility),C(3),c("ngModel",t.language));},dependencies:[f,I,R,X,w,Te,me],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var x=(()=>{class e{state=P(N);rulesShare=P(Oe);refactor=P(Ne);percentageOfItemsWithWeights=M(()=>{if(!this.state.rules.parserError()){let{items:o,weights:n}=this.refactor.countItemsAndWeights(this.state.rules.parsed());return n/o;}return 0;});resetHash(){this.state.export.lastHash.set(this.state.rules.hash()),this.state.export.lastDate.set(new Date().getTime());}isExportAvailable(){return!!this.state.rules.customized();}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.rules.exportNeeded()&&!(await L("Du hast ungespeicherte \xC4nderungen, die verloren gehen, wenn du neue Regeln importierst. M\xF6chtest du trotzdem fortfahren?"))?Promise.resolve(!1):new Promise(o=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{o(!1);}),n.onchange=async()=>{let t=n.files?.[0];if(!t){o(!1);return;}let l=await t.text();this.state.rules.raw.set(l),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),o(!0);},n.click();});}async promptEnableWeightTracking(){!this.state.config.trackWeight()&&this.percentageOfItemsWithWeights()>.1&&(await L("Es scheint, dass die importierten Regeln Gegenst\xE4nde mit Gewichten enthalten. Sollen wir die Gewichtserfassung aktivieren?"))&&this.state.config.trackWeight.set(!0);}resetChecklist(){this.state.packlist.answers.set({}),this.state.packlist.checkedItems.set([]),this.state.packlist.collapsedCategories.set([]),this.state.packlist.answersLocked.set(!1);}static ɵfac=function(n){return new(n||e)();};static ɵprov=oe({token:e,factory:e.ɵfac,providedIn:"root"});}return e;})();function Xe(e,g){e&1&&r(0,2);}function xe(e,g){e&1&&r(0,3);}var Ie=(()=>{class e{router=P(h);state=P(N);facade=P(x);trackWeight=this.state.config.trackWeight;categorySorting=this.state.config.categorySorting;async resetChecklist(){(await L("Bist du sicher, dass du die Checkliste zur\xFCcksetzen m\xF6chtest?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-checklist"]],decls:8,vars:2,consts:()=>{let o;o="Gesamtgewicht verfolgen";let n;n="Du kannst das Gegenstandsgewicht im Editor an den Gegenstandsnamen anh\xE4ngen.";let t;t="Kategorien sortieren";let l;l="Checkliste";let _;_="Checkliste zur\xFCcksetzen";let E;E="alphabetisch";let d;return d="nach Definitionsreihenfolge",[l,_,E,d,["type","button",3,"click"],["id","track-weight","label",o,"help",n,3,"ngModelChange","ngModel"],["label",t,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"button",4),F("click",function(){return t.resetChecklist();}),r(3,1),a(),i(4,"cmp-checkbox",5),m("ngModelChange",function(_){return p(t.trackWeight,_)||(t.trackWeight=_),_;}),a(),i(5,"cmp-select-options",6),m("ngModelChange",function(_){return p(t.categorySorting,_)||(t.categorySorting=_),_;}),A(6,Xe,1,0,"ng-template",7)(7,xe,1,0,"ng-template",8),a()),n&2&&(C(4),c("ngModel",t.trackWeight),C(),c("ngModel",t.categorySorting));},dependencies:[f,I,R,$,X,w],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var Re=(()=>{class e{router=P(h);reset=P(de);async resetEverything(){(await L("Bist du sicher, dass du die gesamte Anwendung zur\xFCcksetzen m\xF6chtest?"))&&(this.reset(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let o;o="GEFAHR!";let n;return n="Anwendung zur\xFCcksetzen",[o,n,["type","button",1,"red",3,"click"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"button",2),F("click",function(){return t.resetEverything();}),r(3,1),a());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var fe=(()=>{class e{state=P(N);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;refactorVariables=this.state.config.refactorVariables;static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-rules-editor"]],decls:11,vars:3,consts:()=>{let o;o="Deaktivierte Regeln im Editor ausblenden";let n;n="Variablenstatus im Editor hervorheben";let t;t="Alle Vorkommen beim Umbenennen von Variablen umbenennen";let l;l="Regel Editor";let _;_="Regeln bearbeiten";let E;E="Dokumentation";let d;return d="Regeln mit Code bearbeiten",[l,_,E,d,["type","button","routerLink","/rules"],["id","rules-debug-mode","label",o,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",t,3,"ngModelChange","ngModel"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"button",4),r(3,1),a(),i(4,"cmp-checkbox",5),m("ngModelChange",function(_){return p(t.fadeOutDisabledRules,_)||(t.fadeOutDisabledRules=_),_;}),a(),i(5,"cmp-checkbox",6),m("ngModelChange",function(_){return p(t.highlightVariableStatus,_)||(t.highlightVariableStatus=_),_;}),a(),i(6,"cmp-checkbox",7),m("ngModelChange",function(_){return p(t.refactorVariables,_)||(t.refactorVariables=_),_;}),a(),i(7,"button",8),r(8,2),a(),i(9,"button",9),r(10,3),a()),n&2&&(C(4),c("ngModel",t.fadeOutDisabledRules),C(),c("ngModel",t.highlightVariableStatus),C(),c("ngModel",t.refactorVariables));},dependencies:[$,f,I,R,ce],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var ze=["exportButton"],Ue=["importButton"];function We(e,g){e&1&&(i(0,"div",6),r(1,4),a());}function He(e,g){e&1&&(i(0,"div",9),O(1,"app-icon-download",10),a());}var Ge=(()=>{class e{router=P(h);route=P(Ae);state=P(N);exportReminder=this.state.config.exportReminder;exportNeeded=this.state.rules.exportNeeded;facade=P(x);highlightExport;exportButton=U.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=U.required("importButton");loading=_e(!1);constructor(){let o=Se(this.route.fragment);this.highlightExport=M(()=>o()==="export-now"),this.highlightImport=M(()=>o()==="import"),Ee(()=>{let n=o();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,t){n&1&&(Z(t.exportButton,ze,5),Z(t.importButton,Ue,5)),n&2&&ae(2);},decls:9,vars:8,consts:()=>{let o;o="Export n\xF6tig";let n;n="Erinnere mich daran, regelm\xE4\xDFig Regeln zu exportieren";let t;t="Regeln exportieren";let l;l="Regeln importieren";let _;return _="Aktuelle Regeln sind nicht gesichert!",[["exportButton",""],["importButton",""],t,l,_,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",o,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],[1,"h-[12rem]","w-[12rem]"]];},template:function(n,t){if(n&1){let l=ie();i(0,"button",5,0),F("click",function(){return b(l),D(t.exportRules());}),r(2,2),a(),A(3,We,2,0,"div",6),i(4,"button",7,1),F("click",function(){return b(l),D(t.importRules());}),r(6,3),a(),i(7,"cmp-checkbox",8),m("ngModelChange",function(E){return b(l),p(t.exportReminder,E)||(t.exportReminder=E),D(E);}),a(),A(8,He,2,0,"div",9);}n&2&&(H("highlighted",t.highlightExport()&&t.exportNeeded()),y("disabled",!t.isExportAvailable()),C(3),u(t.exportNeeded()?3:-1),C(),H("highlighted",t.highlightImport()),C(3),c("ngModel",t.exportReminder),C(),u(t.loading()?8:-1));},dependencies:[f,I,R,$,pe],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function Be(e,g){e&1&&(i(0,"p"),k(1,3),i(2,"a",8),O(3,"img",9),a(),V(),a());}var Fe=(()=>{class e{displayKoFi=!0;static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let o;o="einen Issue auf GitHub \xF6ffnen";let n;n="E-Mail an danilo.hoffmann1@googlemail.com";let t;t="Support";let l;l="Wenn du Fehler findest oder Vorschl\xE4ge hast, \xF6ffne bitte ein Issue auf GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let _;_="Alternativ kannst du mich per E-Mail unter "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+" erreichen.";let E;E="Kauf mir einen Kaffee auf ko-fi.com";let d;return d="Wenn dir diese App gef\xE4llt, \xFCberlege bitte mich zu unterst\xFCtzen: "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[t,l,_,d,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",o,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",E,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"p"),k(3,1),i(4,"a",4),O(5,"img",5),a(),V(),a(),i(6,"p"),k(7,2),i(8,"a",6),O(9,"img",7),a(),V(),a(),A(10,Be,4,0,"p")),n&2&&(C(10),u(t.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function je(e,g){if(e&1&&v(0),e&2){let o=K();Ce(" ",o.versionCode," (",o.version,") ");}}function Ze(e,g){if(e&1&&v(0),e&2){let o=K();re(" ",o.version," ");}}function Qe(e,g){if(e&1&&(i(0,"span",7),r(1,2),a()),e&2){let o=K();C(),B(o.serviceWorkerStatus()),j(1);}}var Me=(()=>{class e{state=P(N);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1737453002364;version="0.6.0";gitHash="c037335f2fa8369d9f4717db48e2ccf152ebef1a";versionCode=16;currentVersionLabel="Die aktuelle Version ist "+this.version+"";gitHashLabel="Der aktuelle Git Hash startet mit "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=M(()=>{switch(this.state.serviceWorker.status()){case"disabled":return"deaktiviert";case"error":return"Fehler";case"unrecoverable":return"nicht wiederherstellbar - bitte aktualisieren";case"init":return"initialisierend";case"ok":return"ok";case"update-available":return"Update verf\xFCgbar";}});static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let o;o="App-Version";let n;n="gebaut am "+"\uFFFD0\uFFFD"+"";let t;return t="Service Worker: "+"\uFFFD0\uFFFD"+"",[o,n,t,[1,"accessible-content","inline-block","content-center",3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"font-mono","text-sm"]];},template:function(n,t){n&1&&(i(0,"h2"),r(1,0),a(),i(2,"span")(3,"a",3),A(4,je,1,2)(5,Ze,1,1),a()(),i(6,"span",4),r(7,1),se(8,"date"),a(),i(9,"span",5)(10,"a",3)(11,"span",6),v(12),a()()(),A(13,Qe,2,1,"span",7)),n&2&&(C(3),y("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+t.version,z),W("aria-label",t.currentVersionLabel),C(),u(t.displayVersionCode?4:5),C(4),B(Pe(8,8,t.buildTime,"long")),j(7),C(2),y("href","https://github.com/dhhyi/travel-packlist/commit/"+t.gitHash,z),W("aria-label",t.gitHashLabel),C(2),le(t.gitHash),C(),u(t.displayServiceWorkerStatus?13:-1));},dependencies:[ge],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var Cn=(()=>{class e{static ɵfac=function(n){return new(n||e)();};static ɵcmp=S({type:e,selectors:[["app-config"]],decls:7,vars:0,template:function(n,t){n&1&&O(0,"app-config-checklist")(1,"app-config-rules-editor")(2,"app-config-rules-import-export")(3,"app-config-appearance")(4,"app-config-version")(5,"app-config-support")(6,"app-config-dangerzone");},dependencies:[Ie,fe,Ge,ue,Me,Fe,Re],encapsulation:2,changeDetection:0});}return e;})();export{Cn as ConfigComponent};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/