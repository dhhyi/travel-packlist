import{a as Ge}from"./chunk-3f78027b.js";import{b as $,e as D,f as k}from"./chunk-32ba644f.js";import{b as y}from"./chunk-349c35c9.js";import{e as ce,k as pe,n as me,x as de,y as Te}from"./chunk-d4af0442.js";import{b as ue,d as I,f as Ie,g as M,i as Re,p as F,q as fe}from"./chunk-2302763c.js";import{B as m,C as Oe,b as Ae,z as Ne}from"./chunk-57797f53.js";import"./chunk-337215d3.js";import"./chunk-77e1066b.js";import{$b as se,Ba as ae,Bb as f,F as le,Gb as i,Hb as l,Ib as T,Kb as re,Lb as v,Mb as X,Nb as C,Ob as Z,Pb as Y,Pc as Se,Rb as O,Sb as x,Wb as Q,Xa as H,Xb as Ce,Za as r,Zb as b,_b as U,ac as Pe,bc as A,cc as c,dc as p,ea as P,fb as W,kb as g,la as K,lc as Ee,ma as w,nc as ge,pb as S,wb as B,wc as h,xb as R,yb as j,zc as z}from"./chunk-46ff38a9.js";import"./chunk-c362d21a.js";function Ve(t,s){t&1&&C(0,1);}function Ke(t,s){t&1&&T(0,"span",26);}function we(t,s){t&1&&T(0,"span",27);}function ve(t,s){t&1&&C(0,2);}function Xe(t,s){t&1&&C(0,3);}function xe(t,s){t&1&&C(0,4);}function Ue(t,s){t&1&&(i(0,"span",28),C(1,5),l());}function ze(t,s){t&1&&(i(0,"span",29),C(1,6),l());}function He(t,s){t&1&&(i(0,"span",30),C(1,7),l());}function We(t,s){t&1&&C(0,8);}function Be(t,s){t&1&&C(0,9);}var Me=(()=>{class t{state=P(m);theme=this.state.config.theme;language=this.state.config.language;fontSize=this.state.config.fontSize;accessibility=this.state.config.accessibility;animations=this.state.config.animations;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-appearance"]],decls:18,vars:5,consts:()=>{let o;o="Sprache";let n;n="Thema";let e;e="Schriftgr\xF6\xDFe";let a;a="Barrierefreiheit";let _;_="Animationen";let E;E="Aussehen";let N;N="automatisch";let u;u="englisch";let G;G="deutsch";let q;q="Dark";let J;J="Light";let ee;ee="System";let te;te="klein";let ne;ne="normal";let oe;oe="gro\xDF";let _e;_e="barrierefrei";let ie;return ie="kompakt",[E,N,q,J,ee,te,ne,oe,_e,ie,["label",o,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],["label",n,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",e,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",a,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["id","animations","label",_,3,"ngModelChange","ngModel"],["aria-label",u,"flagUk","","iconClass","h-6 w-8"],["aria-label",G,"flagGermany","","iconClass","h-6 w-8"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"cmp-select-options",10),p("ngModelChange",function(_){return c(e.language,_)||(e.language=_),_;}),S(3,Ve,1,0,"ng-template",11)(4,Ke,1,0,"ng-template",12)(5,we,1,0,"ng-template",13),l(),i(6,"cmp-select-options",14),p("ngModelChange",function(_){return c(e.theme,_)||(e.theme=_),_;}),S(7,ve,1,0,"ng-template",15)(8,Xe,1,0,"ng-template",16)(9,xe,1,0,"ng-template",17),l(),i(10,"cmp-select-options",18),p("ngModelChange",function(_){return c(e.fontSize,_)||(e.fontSize=_),_;}),S(11,Ue,2,0,"ng-template",19)(12,ze,2,0,"ng-template",20)(13,He,2,0,"ng-template",21),l(),i(14,"cmp-select-options",22),p("ngModelChange",function(_){return c(e.accessibility,_)||(e.accessibility=_),_;}),S(15,We,1,0,"ng-template",23)(16,Be,1,0,"ng-template",24),l(),i(17,"cmp-checkbox",25),p("ngModelChange",function(_){return c(e.animations,_)||(e.animations=_),_;}),l()),n&2&&(r(2),A("ngModel",e.language),r(4),A("ngModel",e.theme),r(4),A("ngModel",e.fontSize),r(4),A("ngModel",e.accessibility),r(3),A("ngModel",e.animations));},dependencies:[F,I,M,k,D,Te,de,$],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function je(t,s){t&1&&C(0,2);}function Ze(t,s){t&1&&C(0,3);}var Fe=(()=>{class t{state=P(m);trackWeight=this.state.config.trackWeight;skipItems=this.state.config.skipItems;categorySorting=this.state.config.categorySorting;skipItemsHelpText=h(()=>this.state.browser.isMobile()?"Durch langes Dr\xFCcken kannst du Gegenst\xE4nde in der Packliste \xFCberspringen.":"Durch Doppelklicken kannst du Gegenst\xE4nde in der Packliste \xFCberspringen.");async resetChecklist(){(await y("Bist du sicher, dass du die Checkliste zur\xFCcksetzen m\xF6chtest?"))&&(this.state.packlist.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-checklist"]],decls:9,vars:4,consts:()=>{let o;o="Gesamtgewicht verfolgen";let n;n="Du kannst das Gegenstandsgewicht im Editor an den Gegenstandsnamen anh\xE4ngen.";let e;e="\xDCberspringen von Gegenst\xE4nden zulassen";let a;a="Kategorien sortieren";let _;_="Checkliste";let E;E="Checkliste zur\xFCcksetzen";let N;N="alphabetisch";let u;return u="nach Definitionsreihenfolge",[_,E,N,u,["type","button",3,"click"],["id","track-weight","label",o,"help",n,3,"ngModelChange","ngModel"],["id","skip-items","label",e,3,"ngModelChange","help","ngModel"],["label",a,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"button",4),O("click",function(){return e.resetChecklist();}),C(3,1),l(),i(4,"cmp-checkbox",5),p("ngModelChange",function(_){return c(e.trackWeight,_)||(e.trackWeight=_),_;}),l(),i(5,"cmp-checkbox",6),p("ngModelChange",function(_){return c(e.skipItems,_)||(e.skipItems=_),_;}),l(),i(6,"cmp-select-options",7),p("ngModelChange",function(_){return c(e.categorySorting,_)||(e.categorySorting=_),_;}),S(7,je,1,0,"ng-template",8)(8,Ze,1,0,"ng-template",9),l()),n&2&&(r(4),A("ngModel",e.trackWeight),r(),R("help",e.skipItemsHelpText()),A("ngModel",e.skipItems),r(),A("ngModel",e.categorySorting));},dependencies:[F,I,M,$,k,D],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Le=(()=>{class t{reset=P(Oe);state=P(m);async resetEverything(){(await y("Bist du sicher, dass du die gesamte Anwendung zur\xFCcksetzen m\xF6chtest?"))&&(await this.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let o;o="GEFAHR!";let n;return n="Anwendung zur\xFCcksetzen",[o,n,["type","button",1,"red",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"button",2),O("click",function(){return e.resetEverything();}),C(3,1),l());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var he=(()=>{class t{state=P(m);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;refactorVariables=this.state.config.refactorVariables;go=this.state.router.go;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-editor"]],decls:9,vars:3,consts:()=>{let o;o="Deaktivierte Regeln im Editor ausblenden";let n;n="Variablenstatus im Editor hervorheben";let e;e="Alle Vorkommen beim Umbenennen von Variablen umbenennen";let a;a="Regel Editor";let _;_="Regeln bearbeiten";let E;return E="Regeln mit Code bearbeiten",[a,_,E,["type","button",3,"click"],["id","rules-debug-mode","label",o,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",e,3,"ngModelChange","ngModel"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"button",3),O("click",function(){return e.go("rules");}),C(3,1),l(),i(4,"cmp-checkbox",4),p("ngModelChange",function(_){return c(e.fadeOutDisabledRules,_)||(e.fadeOutDisabledRules=_),_;}),l(),i(5,"cmp-checkbox",5),p("ngModelChange",function(_){return c(e.highlightVariableStatus,_)||(e.highlightVariableStatus=_),_;}),l(),i(6,"cmp-checkbox",6),p("ngModelChange",function(_){return c(e.refactorVariables,_)||(e.refactorVariables=_),_;}),l(),i(7,"button",3),O("click",function(){return e.go("rules-raw");}),C(8,2),l()),n&2&&(r(4),A("ngModel",e.fadeOutDisabledRules),r(),A("ngModel",e.highlightVariableStatus),r(),A("ngModel",e.refactorVariables));},dependencies:[$,F,I,M],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Ye=["exportButton"],Qe=["importButton"];function qe(t,s){t&1&&(i(0,"div",6),C(1,4),l());}function Je(t,s){t&1&&T(0,"div",9);}var $e=(()=>{class t{state=P(m);exportReminder=this.state.config.exportReminder;exportNeeded=this.state.rules.exportNeeded;highlightExport;exportButton=W.required("exportButton");highlightImport;importButton=W.required("importButton");loading=ae(!1);constructor(){let o=this.state.router.fragment;this.highlightExport=h(()=>o()==="export-now"),this.highlightImport=h(()=>o()==="import"),z(()=>{let n=o();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.triggerImportRules())&&this.state.router.go("packlist"),this.loading.set(!1);}rulesShare=P(Ge);refactor=P(Ne);percentageOfItemsWithWeights=h(()=>{if(!this.state.rules.parserError()){let{items:o,weights:n}=this.refactor.countItemsAndWeights(this.state.rules.parsed());return n/o;}return 0;});resetHash(){this.state.export.lastHash.set(this.state.rules.hash()),this.state.export.lastDate.set(new Date().getTime());}isExportAvailable(){return!!this.state.rules.customized();}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async triggerImportRules(){return this.state.rules.exportNeeded()&&!(await y("Du hast ungespeicherte \xC4nderungen, die verloren gehen, wenn du neue Regeln importierst. M\xF6chtest du trotzdem fortfahren?"))?Promise.resolve(!1):new Promise(o=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{o(!1);}),n.onchange=async()=>{let e=n.files?.[0];if(!e){o(!1);return;}let a=await e.text();this.state.rules.raw.set(a),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.state.packlist.reset(),o(!0);},n.click();});}async promptEnableWeightTracking(){!this.state.config.trackWeight()&&this.percentageOfItemsWithWeights()>.1&&(await y("Es scheint, dass die importierten Regeln Gegenst\xE4nde mit Gewichten enthalten. Sollen wir die Gewichtserfassung aktivieren?"))&&this.state.config.trackWeight.set(!0);}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,e){n&1&&(Q(e.exportButton,Ye,5),Q(e.importButton,Qe,5)),n&2&&Ce(2);},decls:9,vars:8,consts:()=>{let o;o="Export n\xF6tig";let n;n="Erinnere mich daran, regelm\xE4\xDFig Regeln zu exportieren";let e;e="Regeln exportieren";let a;a="Regeln importieren";let _;return _="Aktuelle Regeln sind nicht gesichert!",[["exportButton",""],["importButton",""],e,a,_,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",o,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],["iconDownload","","iconClass","h-[12rem] w-[12rem]",1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"]];},template:function(n,e){if(n&1){let a=re();i(0,"button",5,0),O("click",function(){return K(a),w(e.exportRules());}),C(2,2),l(),S(3,qe,2,0,"div",6),i(4,"button",7,1),O("click",function(){return K(a),w(e.importRules());}),C(6,3),l(),i(7,"cmp-checkbox",8),p("ngModelChange",function(E){return K(a),c(e.exportReminder,E)||(e.exportReminder=E),w(E);}),l(),S(8,Je,1,0,"div",9);}n&2&&(j("highlighted",e.highlightExport()&&e.exportNeeded()),R("disabled",!e.isExportAvailable()),r(3),f(e.exportNeeded()?3:-1),r(),j("highlighted",e.highlightImport()),r(3),A("ngModel",e.exportReminder),r(),f(e.loading()?8:-1));},dependencies:[F,I,M,$,me],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function et(t,s){t&1&&C(0,1);}function tt(t,s){t&1&&C(0,2);}var ye=(()=>{class t{state=P(m);rulesMode=this.state.rules.mode;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-mode"]],decls:5,vars:1,consts:()=>{let o;o="Regel Modus";let n;n="lokal";let e;return e="remote",[o,n,e,[3,"ngModelChange","ngModel"],["value","local"],["value","remote"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"cmp-select-options",3),p("ngModelChange",function(_){return c(e.rulesMode,_)||(e.rulesMode=_),_;}),S(3,et,1,0,"ng-template",4)(4,tt,1,0,"ng-template",5),l()),n&2&&(r(2),A("ngModel",e.rulesMode));},dependencies:[F,I,M,k,D],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var be=(()=>{class t{state=P(m);remoteStatus=this.state.rules.remoteStatus;remoteHistory=this.state.rules.remoteHistory;control=new Ie(this.remoteHistory()[0],{updateOn:"blur"});controlValueChanges=Ae(this.control.valueChanges.pipe(le(500)));constructor(){z(()=>{let o=this.controlValueChanges();o&&this.state.rules.loadRemote(o);});}reloadRemote(){this.state.rules.reloadRemote();}loadRemoteHistory(){console.log("load history");}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-remote"]],decls:8,vars:4,consts:()=>{let o;o="Lade Quelle aus dem Verlauf";let n;n="Quelle neuladen";let e;return e="Internet Quelle",[e,["rows","4",3,"formControl"],[1,"flex","flex-row","items-center"],["iconHistory","","iconClass","h-6 w-6","type","button","aria-label",o,1,"link",3,"click","disabled"],[1,"grow","text-center","font-mono"],["iconRefresh","","iconClass","h-6 w-6","type","button","aria-label",n,1,"link",3,"click","disabled"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),T(2,"textarea",1),i(3,"div",2)(4,"button",3),O("click",function(){return e.loadRemoteHistory();}),l(),i(5,"div",4),b(6),l(),i(7,"button",5),O("click",function(){return e.reloadRemote();}),l()()),n&2&&(r(2),R("formControl",e.control),r(2),R("disabled",!e.remoteHistory().length),r(2),U(e.remoteStatus()),r(),R("disabled",!e.control.value));},dependencies:[fe,ue,I,Re,pe,ce],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function nt(t,s){t&1&&(i(0,"p"),v(1,3),i(2,"a",8),T(3,"img",9),l(),X(),l());}var De=(()=>{class t{displayKoFi=!0;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let o;o="einen Issue auf GitHub \xF6ffnen";let n;n="E-Mail an danilo.hoffmann1@googlemail.com";let e;e="Support";let a;a="Wenn du Fehler findest oder Vorschl\xE4ge hast, \xF6ffne bitte ein Issue auf GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let _;_="Alternativ kannst du mich per E-Mail unter "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+" erreichen.";let E;E="Kauf mir einen Kaffee auf ko-fi.com";let N;return N="Wenn dir diese App gef\xE4llt, \xFCberlege bitte mich zu unterst\xFCtzen: "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[e,a,_,N,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",o,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"e2e-hidden","inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"e2e-hidden","inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",E,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"p"),v(3,1),i(4,"a",4),T(5,"img",5),l(),X(),l(),i(6,"p"),v(7,2),i(8,"a",6),T(9,"img",7),l(),X(),l(),S(10,nt,4,0,"p")),n&2&&(r(10),f(e.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function ot(t,s){if(t&1&&b(0),t&2){let o=x();Pe(" ",o.versionCode," (",o.version,") ");}}function _t(t,s){if(t&1&&b(0),t&2){let o=x();se(" ",o.version," ");}}function it(t,s){if(t&1&&(i(0,"span",8),C(1,2),l()),t&2){let o=x();r(),Z(o.serviceWorkerStatus()),Y(1);}}var ke=(()=>{class t{state=P(m);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1739991356849;version="0.9.0";gitHash="bfef7bdf5638844caa9545cdf6e7c2c204d210c6";versionCode=30;currentVersionLabel="Die aktuelle Version ist "+this.version+"";gitHashLabel="Der aktuelle Git Hash startet mit "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=h(()=>{switch(this.state.serviceWorker.status()){case"disabled":return"deaktiviert";case"error":return"Fehler";case"unrecoverable":return"nicht wiederherstellbar - bitte aktualisieren";case"init":return"initialisierend";case"ok":return"ok";case"update-available":return"Update verf\xFCgbar";}});static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let o;o="App-Version";let n;n="gebaut am "+"\uFFFD0\uFFFD"+"";let e;return e="Service Worker: "+"\uFFFD0\uFFFD"+"",[o,n,e,[1,"e2e-hidden"],[1,"accessible-content","inline-block","content-center",3,"href"],[1,"e2e-hidden","italic"],[1,"e2e-hidden","truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"e2e-hidden","font-mono","text-sm"]];},template:function(n,e){n&1&&(i(0,"h2"),C(1,0),l(),i(2,"span",3)(3,"a",4),S(4,ot,1,2)(5,_t,1,1),l()(),i(6,"span",5),C(7,1),Ee(8,"date"),l(),i(9,"span",6)(10,"a",4)(11,"span",7),b(12),l()()(),S(13,it,2,1,"span",8)),n&2&&(r(3),R("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+e.version,H),B("aria-label",e.currentVersionLabel),r(),f(e.displayVersionCode?4:5),r(4),Z(ge(8,8,e.buildTime,"long")),Y(7),r(2),R("href","https://github.com/dhhyi/travel-packlist/commit/"+e.gitHash,H),B("aria-label",e.gitHashLabel),r(2),U(e.gitHash),r(),f(e.displayServiceWorkerStatus?13:-1));},dependencies:[Se],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function lt(t,s){t&1&&T(0,"app-config-rules-editor")(1,"app-config-rules-import-export");}function at(t,s){t&1&&T(0,"app-config-rules-remote");}var hn=(()=>{class t{state=P(m);rulesMode=this.state.rules.mode;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config"]],decls:8,vars:2,template:function(n,e){n&1&&(T(0,"app-config-checklist")(1,"app-config-rules-mode"),S(2,lt,2,0)(3,at,1,0,"app-config-rules-remote"),T(4,"app-config-appearance")(5,"app-config-version")(6,"app-config-support")(7,"app-config-dangerzone")),n&2&&(r(2),f(e.rulesMode()==="local"?2:-1),r(),f(e.rulesMode()==="remote"?3:-1));},dependencies:[Fe,he,$e,Me,ke,De,Le,ye,be],encapsulation:2,changeDetection:0});}return t;})();export{hn as ConfigComponent};/**i18n:3c21b2b191b8a9740df1d1ee6e00c81bf8245c385e0820d6dd1b44445542cf32*/