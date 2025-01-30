import{a as de}from"./chunk-be953fd4.js";import{a as F,c as w,d as v}from"./chunk-1a5a8a21.js";import{b as h}from"./chunk-6ea3fc15.js";import{k as ce,t as pe,u as Ne}from"./chunk-0a0ed178.js";import{d as R,f,o as G}from"./chunk-29c892b0.js";import{A as Te,B as m,C as me}from"./chunk-577b6619.js";import"./chunk-080625d0.js";import{Ba as le,Bb as u,Cc as ge,Gb as i,Hb as l,Ib as O,Kb as ae,Lb as D,Mb as V,Nb as r,Ob as H,Pb as B,Qc as Se,Rb as I,Sb as k,Xa as x,Za as C,Zb as j,_ as ie,_b as re,ac as K,bc as Ce,cc as se,dc as Pe,ea as E,ec as p,fb as z,fc as N,gc as T,kb as S,la as y,ma as b,oc as Ee,pb as c,qc as Ae,wb as U,xb as $,yb as W,zc as L}from"./chunk-d8ae0c91.js";import"./chunk-bbcdbfbd.js";function Me(t,A){t&1&&r(0,1);}function Le(t,A){t&1&&(i(0,"span",26),O(1,"app-flag-uk",27),l());}function he(t,A){t&1&&(i(0,"span",28),O(1,"app-flag-germany",27),l());}function $e(t,A){t&1&&r(0,2);}function ye(t,A){t&1&&r(0,3);}function be(t,A){t&1&&r(0,4);}function De(t,A){t&1&&(i(0,"span",29),r(1,5),l());}function Ve(t,A){t&1&&(i(0,"span",30),r(1,6),l());}function ke(t,A){t&1&&(i(0,"span",31),r(1,7),l());}function Ke(t,A){t&1&&r(0,8);}function we(t,A){t&1&&r(0,9);}var Oe=(()=>{class t{state=E(m);theme=this.state.config.theme;language=this.state.config.language;fontSize=this.state.config.fontSize;accessibility=this.state.config.accessibility;animations=this.state.config.animations;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-appearance"]],decls:18,vars:5,consts:()=>{let o;o="Sprache";let n;n="Thema";let e;e="Schriftgr\xF6\xDFe";let a;a="Barrierefreiheit";let _;_="Animationen";let P;P="Aussehen";let d;d="automatisch";let s;s="englisch";let Q;Q="deutsch";let q;q="Dark";let Y;Y="Light";let J;J="System";let ee;ee="klein";let te;te="normal";let ne;ne="gro\xDF";let _e;_e="barrierefrei";let oe;return oe="kompakt",[P,d,q,Y,J,ee,te,ne,_e,oe,["label",o,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],["label",n,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",e,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",a,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["id","animations","label",_,3,"ngModelChange","ngModel"],["aria-label",s],[1,"h-6","w-8"],["aria-label",Q],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),l(),i(2,"cmp-select-options",10),T("ngModelChange",function(_){return N(e.language,_)||(e.language=_),_;}),c(3,Me,1,0,"ng-template",11)(4,Le,2,0,"ng-template",12)(5,he,2,0,"ng-template",13),l(),i(6,"cmp-select-options",14),T("ngModelChange",function(_){return N(e.theme,_)||(e.theme=_),_;}),c(7,$e,1,0,"ng-template",15)(8,ye,1,0,"ng-template",16)(9,be,1,0,"ng-template",17),l(),i(10,"cmp-select-options",18),T("ngModelChange",function(_){return N(e.fontSize,_)||(e.fontSize=_),_;}),c(11,De,2,0,"ng-template",19)(12,Ve,2,0,"ng-template",20)(13,ke,2,0,"ng-template",21),l(),i(14,"cmp-select-options",22),T("ngModelChange",function(_){return N(e.accessibility,_)||(e.accessibility=_),_;}),c(15,Ke,1,0,"ng-template",23)(16,we,1,0,"ng-template",24),l(),i(17,"cmp-checkbox",25),T("ngModelChange",function(_){return N(e.animations,_)||(e.animations=_),_;}),l()),n&2&&(C(2),p("ngModel",e.language),C(4),p("ngModel",e.theme),C(4),p("ngModel",e.fontSize),C(4),p("ngModel",e.accessibility),C(3),p("ngModel",e.animations));},dependencies:[G,R,f,v,w,Ne,pe,F],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var X=(()=>{class t{state=E(m);rulesShare=E(de);refactor=E(Te);percentageOfItemsWithWeights=L(()=>{if(!this.state.rules.parserError()){let{items:o,weights:n}=this.refactor.countItemsAndWeights(this.state.rules.parsed());return n/o;}return 0;});resetHash(){this.state.export.lastHash.set(this.state.rules.hash()),this.state.export.lastDate.set(new Date().getTime());}isExportAvailable(){return!!this.state.rules.customized();}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.rules.exportNeeded()&&!(await h("Du hast ungespeicherte \xC4nderungen, die verloren gehen, wenn du neue Regeln importierst. M\xF6chtest du trotzdem fortfahren?"))?Promise.resolve(!1):new Promise(o=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{o(!1);}),n.onchange=async()=>{let e=n.files?.[0];if(!e){o(!1);return;}let a=await e.text();this.state.rules.raw.set(a),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),o(!0);},n.click();});}async promptEnableWeightTracking(){!this.state.config.trackWeight()&&this.percentageOfItemsWithWeights()>.1&&(await h("Es scheint, dass die importierten Regeln Gegenst\xE4nde mit Gewichten enthalten. Sollen wir die Gewichtserfassung aktivieren?"))&&this.state.config.trackWeight.set(!0);}resetChecklist(){this.state.packlist.reset();}static ɵfac=function(n){return new(n||t)();};static ɵprov=ie({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();function ve(t,A){t&1&&r(0,2);}function Xe(t,A){t&1&&r(0,3);}var Ie=(()=>{class t{state=E(m);facade=E(X);trackWeight=this.state.config.trackWeight;categorySorting=this.state.config.categorySorting;async resetChecklist(){(await h("Bist du sicher, dass du die Checkliste zur\xFCcksetzen m\xF6chtest?"))&&(this.facade.resetChecklist(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-checklist"]],decls:8,vars:2,consts:()=>{let o;o="Gesamtgewicht verfolgen";let n;n="Du kannst das Gegenstandsgewicht im Editor an den Gegenstandsnamen anh\xE4ngen.";let e;e="Kategorien sortieren";let a;a="Checkliste";let _;_="Checkliste zur\xFCcksetzen";let P;P="alphabetisch";let d;return d="nach Definitionsreihenfolge",[a,_,P,d,["type","button",3,"click"],["id","track-weight","label",o,"help",n,3,"ngModelChange","ngModel"],["label",e,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),l(),i(2,"button",4),I("click",function(){return e.resetChecklist();}),r(3,1),l(),i(4,"cmp-checkbox",5),T("ngModelChange",function(_){return N(e.trackWeight,_)||(e.trackWeight=_),_;}),l(),i(5,"cmp-select-options",6),T("ngModelChange",function(_){return N(e.categorySorting,_)||(e.categorySorting=_),_;}),c(6,ve,1,0,"ng-template",7)(7,Xe,1,0,"ng-template",8),l()),n&2&&(C(4),p("ngModel",e.trackWeight),C(),p("ngModel",e.categorySorting));},dependencies:[G,R,f,F,v,w],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var ue=(()=>{class t{reset=E(me);state=E(m);async resetEverything(){(await h("Bist du sicher, dass du die gesamte Anwendung zur\xFCcksetzen m\xF6chtest?"))&&(this.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let o;o="GEFAHR!";let n;return n="Anwendung zur\xFCcksetzen",[o,n,["type","button",1,"red",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),l(),i(2,"button",2),I("click",function(){return e.resetEverything();}),r(3,1),l());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Re=(()=>{class t{state=E(m);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;refactorVariables=this.state.config.refactorVariables;go=this.state.router.go;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-editor"]],decls:11,vars:3,consts:()=>{let o;o="Deaktivierte Regeln im Editor ausblenden";let n;n="Variablenstatus im Editor hervorheben";let e;e="Alle Vorkommen beim Umbenennen von Variablen umbenennen";let a;a="Regel Editor";let _;_="Regeln bearbeiten";let P;P="Dokumentation";let d;return d="Regeln mit Code bearbeiten",[a,_,P,d,["type","button",3,"click"],["id","rules-debug-mode","label",o,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",e,3,"ngModelChange","ngModel"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),l(),i(2,"button",4),I("click",function(){return e.go("rules");}),r(3,1),l(),i(4,"cmp-checkbox",5),T("ngModelChange",function(_){return N(e.fadeOutDisabledRules,_)||(e.fadeOutDisabledRules=_),_;}),l(),i(5,"cmp-checkbox",6),T("ngModelChange",function(_){return N(e.highlightVariableStatus,_)||(e.highlightVariableStatus=_),_;}),l(),i(6,"cmp-checkbox",7),T("ngModelChange",function(_){return N(e.refactorVariables,_)||(e.refactorVariables=_),_;}),l(),i(7,"button",4),I("click",function(){return e.go("documentation");}),r(8,2),l(),i(9,"button",4),I("click",function(){return e.go("rules-raw");}),r(10,3),l()),n&2&&(C(4),p("ngModel",e.fadeOutDisabledRules),C(),p("ngModel",e.highlightVariableStatus),C(),p("ngModel",e.refactorVariables));},dependencies:[F,G,R,f],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var xe=["exportButton"],ze=["importButton"];function Ue(t,A){t&1&&(i(0,"div",6),r(1,4),l());}function We(t,A){t&1&&(i(0,"div",9),O(1,"app-icon-download",10),l());}var fe=(()=>{class t{state=E(m);exportReminder=this.state.config.exportReminder;exportNeeded=this.state.rules.exportNeeded;facade=E(X);highlightExport;exportButton=z.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=z.required("importButton");loading=le(!1);constructor(){let o=this.state.router.fragment;this.highlightExport=L(()=>o()==="export-now"),this.highlightImport=L(()=>o()==="import"),ge(()=>{let n=o();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&this.state.router.go("packlist"),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,e){n&1&&(j(e.exportButton,xe,5),j(e.importButton,ze,5)),n&2&&re(2);},decls:9,vars:8,consts:()=>{let o;o="Export n\xF6tig";let n;n="Erinnere mich daran, regelm\xE4\xDFig Regeln zu exportieren";let e;e="Regeln exportieren";let a;a="Regeln importieren";let _;return _="Aktuelle Regeln sind nicht gesichert!",[["exportButton",""],["importButton",""],e,a,_,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",o,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],[1,"h-[12rem]","w-[12rem]"]];},template:function(n,e){if(n&1){let a=ae();i(0,"button",5,0),I("click",function(){return y(a),b(e.exportRules());}),r(2,2),l(),c(3,Ue,2,0,"div",6),i(4,"button",7,1),I("click",function(){return y(a),b(e.importRules());}),r(6,3),l(),i(7,"cmp-checkbox",8),T("ngModelChange",function(P){return y(a),N(e.exportReminder,P)||(e.exportReminder=P),b(P);}),l(),c(8,We,2,0,"div",9);}n&2&&(W("highlighted",e.highlightExport()&&e.exportNeeded()),$("disabled",!e.isExportAvailable()),C(3),u(e.exportNeeded()?3:-1),C(),W("highlighted",e.highlightImport()),C(3),p("ngModel",e.exportReminder),C(),u(e.loading()?8:-1));},dependencies:[G,R,f,F,ce],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function He(t,A){t&1&&(i(0,"p"),D(1,3),i(2,"a",8),O(3,"img",9),l(),V(),l());}var Ge=(()=>{class t{displayKoFi=!0;static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let o;o="einen Issue auf GitHub \xF6ffnen";let n;n="E-Mail an danilo.hoffmann1@googlemail.com";let e;e="Support";let a;a="Wenn du Fehler findest oder Vorschl\xE4ge hast, \xF6ffne bitte ein Issue auf GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let _;_="Alternativ kannst du mich per E-Mail unter "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+" erreichen.";let P;P="Kauf mir einen Kaffee auf ko-fi.com";let d;return d="Wenn dir diese App gef\xE4llt, \xFCberlege bitte mich zu unterst\xFCtzen: "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[e,a,_,d,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",o,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",P,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),l(),i(2,"p"),D(3,1),i(4,"a",4),O(5,"img",5),l(),V(),l(),i(6,"p"),D(7,2),i(8,"a",6),O(9,"img",7),l(),V(),l(),c(10,He,4,0,"p")),n&2&&(C(10),u(e.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function Be(t,A){if(t&1&&K(0),t&2){let o=k();Pe(" ",o.versionCode," (",o.version,") ");}}function je(t,A){if(t&1&&K(0),t&2){let o=k();se(" ",o.version," ");}}function Ze(t,A){if(t&1&&(i(0,"span",7),r(1,2),l()),t&2){let o=k();C(),H(o.serviceWorkerStatus()),B(1);}}var Fe=(()=>{class t{state=E(m);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1738242983472;version="0.6.6";gitHash="1c2b0d595eabfe1546796eb74d437d6f10759f8b";versionCode=22;currentVersionLabel="Die aktuelle Version ist "+this.version+"";gitHashLabel="Der aktuelle Git Hash startet mit "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=L(()=>{switch(this.state.serviceWorker.status()){case"disabled":return"deaktiviert";case"error":return"Fehler";case"unrecoverable":return"nicht wiederherstellbar - bitte aktualisieren";case"init":return"initialisierend";case"ok":return"ok";case"update-available":return"Update verf\xFCgbar";}});static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let o;o="App-Version";let n;n="gebaut am "+"\uFFFD0\uFFFD"+"";let e;return e="Service Worker: "+"\uFFFD0\uFFFD"+"",[o,n,e,[1,"accessible-content","inline-block","content-center",3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"font-mono","text-sm"]];},template:function(n,e){n&1&&(i(0,"h2"),r(1,0),l(),i(2,"span")(3,"a",3),c(4,Be,1,2)(5,je,1,1),l()(),i(6,"span",4),r(7,1),Ee(8,"date"),l(),i(9,"span",5)(10,"a",3)(11,"span",6),K(12),l()()(),c(13,Ze,2,1,"span",7)),n&2&&(C(3),$("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+e.version,x),U("aria-label",e.currentVersionLabel),C(),u(e.displayVersionCode?4:5),C(4),H(Ae(8,8,e.buildTime,"long")),B(7),C(2),$("href","https://github.com/dhhyi/travel-packlist/commit/"+e.gitHash,x),U("aria-label",e.gitHashLabel),C(2),Ce(e.gitHash),C(),u(e.displayServiceWorkerStatus?13:-1));},dependencies:[Se],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var nn=(()=>{class t{static ɵfac=function(n){return new(n||t)();};static ɵcmp=S({type:t,selectors:[["app-config"]],decls:7,vars:0,template:function(n,e){n&1&&O(0,"app-config-checklist")(1,"app-config-rules-editor")(2,"app-config-rules-import-export")(3,"app-config-appearance")(4,"app-config-version")(5,"app-config-support")(6,"app-config-dangerzone");},dependencies:[Ie,Re,fe,Oe,Fe,Ge,ue],encapsulation:2,changeDetection:0});}return t;})();export{nn as ConfigComponent};/**i18n:eee3d47a017a9f4fe983a06f27e0a9c7b95602fff3951636f2d8c55069b18d30*/