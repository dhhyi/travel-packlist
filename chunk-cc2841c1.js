import{a as he}from"./chunk-c7f0e9b6.js";import{b as h,e as K,f as U}from"./chunk-9670bc74.js";import{b}from"./chunk-84b513d3.js";import{e as Te,k as pe,n as Ne,o as Re,y as ue,z as Oe}from"./chunk-c9a69773.js";import{b as Ge,d as G,f as Me,g as M,i as Le,p as L,q as Fe}from"./chunk-de3aa6be.js";import{p as Ie,s as d,t as fe}from"./chunk-0c400760.js";import"./chunk-5ccfb57d.js";import{e as me,k as de}from"./chunk-082ead22.js";import{$b as X,Ab as se,Cb as Ce,Db as Ee,Eb as i,F as ae,Fb as l,Gb as O,Ib as z,Lb as W,Mb as H,Nb as s,Ob as Q,Pb as q,Rb as p,Sb as y,Va as j,Wb as J,Xa as a,Xb as Pe,Zb as k,_b as Se,ac as ge,bc as A,ca as P,cc as c,db as Z,dc as m,ib as g,ja as V,ka as D,lc as Ae,nb as T,nc as ce,ub as Y,vb as R,wb as w,xc as f,ya as x,yc as B,zb as F}from"./chunk-9e62b5d5.js";import"./chunk-cfe2c86e.js";function Xe(t,E){t&1&&s(0,1);}function xe(t,E){t&1&&O(0,"span",26);}function ze(t,E){t&1&&O(0,"span",27);}function We(t,E){t&1&&s(0,2);}function He(t,E){t&1&&s(0,3);}function Be(t,E){t&1&&s(0,4);}function je(t,E){t&1&&(i(0,"span",28),s(1,5),l());}function Ze(t,E){t&1&&(i(0,"span",29),s(1,6),l());}function Ye(t,E){t&1&&(i(0,"span",30),s(1,7),l());}function Qe(t,E){t&1&&s(0,8);}function qe(t,E){t&1&&s(0,9);}var $e=(()=>{class t{state=P(d);theme=this.state.config.theme;language=this.state.config.language;fontSize=this.state.config.fontSize;accessibility=this.state.config.accessibility;animations=this.state.config.animations;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-appearance"]],decls:18,vars:5,consts:()=>{let o;o="Sprache";let n;n="Thema";let e;e="Schriftgr\xF6\xDFe";let r;r="Barrierefreiheit";let _;_="Animationen";let C;C="Aussehen";let I;I="automatisch";let S;S="englisch";let N;N="deutsch";let ee;ee="Dark";let te;te="Light";let ne;ne="System";let _e;_e="klein";let oe;oe="normal";let ie;ie="gro\xDF";let le;le="barrierefrei";let re;return re="kompakt",[C,I,ee,te,ne,_e,oe,ie,le,re,["label",o,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],["label",n,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",e,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",r,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["id","animations","label",_,3,"ngModelChange","ngModel"],["aria-label",S,"flagUk","","iconClass","h-6 w-8"],["aria-label",N,"flagGermany","","iconClass","h-6 w-8"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"cmp-select-options",10),m("ngModelChange",function(_){return c(e.language,_)||(e.language=_),_;}),T(3,Xe,1,0,"ng-template",11)(4,xe,1,0,"ng-template",12)(5,ze,1,0,"ng-template",13),l(),i(6,"cmp-select-options",14),m("ngModelChange",function(_){return c(e.theme,_)||(e.theme=_),_;}),T(7,We,1,0,"ng-template",15)(8,He,1,0,"ng-template",16)(9,Be,1,0,"ng-template",17),l(),i(10,"cmp-select-options",18),m("ngModelChange",function(_){return c(e.fontSize,_)||(e.fontSize=_),_;}),T(11,je,2,0,"ng-template",19)(12,Ze,2,0,"ng-template",20)(13,Ye,2,0,"ng-template",21),l(),i(14,"cmp-select-options",22),m("ngModelChange",function(_){return c(e.accessibility,_)||(e.accessibility=_),_;}),T(15,Qe,1,0,"ng-template",23)(16,qe,1,0,"ng-template",24),l(),i(17,"cmp-checkbox",25),m("ngModelChange",function(_){return c(e.animations,_)||(e.animations=_),_;}),l()),n&2&&(a(2),A("ngModel",e.language),a(4),A("ngModel",e.theme),a(4),A("ngModel",e.fontSize),a(4),A("ngModel",e.accessibility),a(3),A("ngModel",e.animations));},dependencies:[L,G,M,U,K,Oe,ue,h],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function Je(t,E){t&1&&s(0,2);}function et(t,E){t&1&&s(0,3);}var ye=(()=>{class t{state=P(d);trackWeight=this.state.config.trackWeight;skipItems=this.state.config.skipItems;categorySorting=this.state.config.categorySorting;skipItemsHelpText=f(()=>this.state.browser.isMobile()?"Durch langes Dr\xFCcken kannst du Gegenst\xE4nde in der Packliste \xFCberspringen.":"Durch Doppelklicken kannst du Gegenst\xE4nde in der Packliste \xFCberspringen.");async resetChecklist(){(await b("Bist du sicher, dass du die Checkliste zur\xFCcksetzen m\xF6chtest?"))&&(this.state.packlist.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-checklist"]],decls:9,vars:4,consts:()=>{let o;o="Gesamtgewicht verfolgen";let n;n="Du kannst das Gegenstandsgewicht im Editor an den Gegenstandsnamen anh\xE4ngen.";let e;e="\xDCberspringen von Gegenst\xE4nden zulassen";let r;r="Kategorien sortieren";let _;_="Checkliste";let C;C="Checkliste zur\xFCcksetzen";let I;I="alphabetisch";let S;return S="nach Definitionsreihenfolge",[_,C,I,S,["type","button",3,"click"],["id","track-weight","label",o,"help",n,3,"ngModelChange","ngModel"],["id","skip-items","label",e,3,"ngModelChange","help","ngModel"],["label",r,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",4),p("click",function(){return e.resetChecklist();}),s(3,1),l(),i(4,"cmp-checkbox",5),m("ngModelChange",function(_){return c(e.trackWeight,_)||(e.trackWeight=_),_;}),l(),i(5,"cmp-checkbox",6),m("ngModelChange",function(_){return c(e.skipItems,_)||(e.skipItems=_),_;}),l(),i(6,"cmp-select-options",7),m("ngModelChange",function(_){return c(e.categorySorting,_)||(e.categorySorting=_),_;}),T(7,Je,1,0,"ng-template",8)(8,et,1,0,"ng-template",9),l()),n&2&&(a(4),A("ngModel",e.trackWeight),a(),R("help",e.skipItemsHelpText()),A("ngModel",e.skipItems),a(),A("ngModel",e.categorySorting));},dependencies:[L,G,M,h,U,K],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var be=(()=>{class t{reset=P(fe);state=P(d);async resetEverything(){(await b("Bist du sicher, dass du die gesamte Anwendung zur\xFCcksetzen m\xF6chtest?"))&&(await this.reset(),this.state.router.go("packlist"));}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let o;o="GEFAHR!";let n;return n="Anwendung zur\xFCcksetzen",[o,n,["type","button",1,"red",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",2),p("click",function(){return e.resetEverything();}),s(3,1),l());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Ve=(()=>{class t{state=P(d);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;refactorVariables=this.state.config.refactorVariables;confirmRuleDeletion=this.state.config.confirmRuleDeletion;go=this.state.router.go;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-editor"]],decls:10,vars:4,consts:()=>{let o;o="Inaktive Regeln ausgrauen";let n;n="Variablenstatus anzeigen";let e;e="Alle Vorkommen beim Umbenennen von Variablen umbenennen";let r;r="Das L\xF6schen von Regeln best\xE4tigen";let _;_="Regel Editor";let C;C="Regeln bearbeiten";let I;return I="Regeln mit Code bearbeiten",[_,C,I,["type","button",3,"click"],["id","rules-debug-mode","label",o,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",e,3,"ngModelChange","ngModel"],["id","confirm-rule-deletion","label",r,3,"ngModelChange","ngModel"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",3),p("click",function(){return e.go("rules");}),s(3,1),l(),i(4,"cmp-checkbox",4),m("ngModelChange",function(_){return c(e.fadeOutDisabledRules,_)||(e.fadeOutDisabledRules=_),_;}),l(),i(5,"cmp-checkbox",5),m("ngModelChange",function(_){return c(e.highlightVariableStatus,_)||(e.highlightVariableStatus=_),_;}),l(),i(6,"cmp-checkbox",6),m("ngModelChange",function(_){return c(e.refactorVariables,_)||(e.refactorVariables=_),_;}),l(),i(7,"cmp-checkbox",7),m("ngModelChange",function(_){return c(e.confirmRuleDeletion,_)||(e.confirmRuleDeletion=_),_;}),l(),i(8,"button",3),p("click",function(){return e.go("rules-raw");}),s(9,2),l()),n&2&&(a(4),A("ngModel",e.fadeOutDisabledRules),a(),A("ngModel",e.highlightVariableStatus),a(),A("ngModel",e.refactorVariables),a(),A("ngModel",e.confirmRuleDeletion));},dependencies:[h,L,G,M],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var tt=["exportButton"],nt=["importButton"];function _t(t,E){t&1&&(i(0,"div",6),s(1,4),l());}function ot(t,E){t&1&&O(0,"div",9);}var De=(()=>{class t{state=P(d);exportReminder=this.state.config.exportReminder;exportNeeded=this.state.rules.exportNeeded;highlightExport;exportButton=Z.required("exportButton");highlightImport;importButton=Z.required("importButton");loading=x(!1);constructor(){let o=this.state.router.fragment;this.highlightExport=f(()=>o()==="export-now"),this.highlightImport=f(()=>o()==="import"),B(()=>{let n=o();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.triggerImportRules())&&this.state.router.go("packlist"),this.loading.set(!1);}rulesShare=P(he);refactor=P(Ie);percentageOfItemsWithWeights=f(()=>{if(!this.state.rules.parserError()){let{items:o,weights:n}=this.refactor.countItemsAndWeights(this.state.rules.parsed());return n/o;}return 0;});isExportAvailable(){return!!this.state.rules.customized();}async exportRules(){await this.rulesShare.exportRules(),this.state.rules.markAsCurrent();}async triggerImportRules(){return this.state.rules.exportNeeded()&&!(await b("Du hast ungespeicherte \xC4nderungen, die verloren gehen, wenn du neue Regeln importierst. M\xF6chtest du trotzdem fortfahren?"))?Promise.resolve(!1):new Promise(o=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{o(!1);}),n.onchange=async()=>{let e=n.files?.[0];if(!e){o(!1);return;}let r=await e.text();this.state.localRules.updateRules(r),this.state.rules.markAsCurrent(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.state.packlist.reset(),o(!0);},n.click();});}async promptEnableWeightTracking(){!this.state.config.trackWeight()&&this.percentageOfItemsWithWeights()>.1&&(await b("Es scheint, dass die importierten Regeln Gegenst\xE4nde mit Gewichten enthalten. Sollen wir die Gewichtserfassung aktivieren?"))&&this.state.config.trackWeight.set(!0);}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,e){n&1&&(J(e.exportButton,tt,5),J(e.importButton,nt,5)),n&2&&Pe(2);},decls:9,vars:8,consts:()=>{let o;o="Export n\xF6tig";let n;n="Erinnere mich daran, regelm\xE4\xDFig Regeln zu exportieren";let e;e="Regeln exportieren";let r;r="Regeln importieren";let _;return _="Aktuelle Regeln sind nicht gesichert!",[["exportButton",""],["importButton",""],e,r,_,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",o,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],["iconDownload","","iconClass","h-[12rem] w-[12rem]",1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"]];},template:function(n,e){if(n&1){let r=z();i(0,"button",5,0),p("click",function(){return V(r),D(e.exportRules());}),s(2,2),l(),T(3,_t,2,0,"div",6),i(4,"button",7,1),p("click",function(){return V(r),D(e.importRules());}),s(6,3),l(),i(7,"cmp-checkbox",8),m("ngModelChange",function(C){return V(r),c(e.exportReminder,C)||(e.exportReminder=C),D(C);}),l(),T(8,ot,1,0,"div",9);}n&2&&(w("highlighted",e.highlightExport()&&e.exportNeeded()),R("disabled",!e.isExportAvailable()),a(3),F(e.exportNeeded()?3:-1),a(),w("highlighted",e.highlightImport()),a(3),A("ngModel",e.exportReminder),a(),F(e.loading()?8:-1));},dependencies:[L,G,M,h,Ne],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function it(t,E){t&1&&s(0,1);}function lt(t,E){t&1&&s(0,2);}var ke=(()=>{class t{state=P(d);rulesMode=this.state.rules.mode;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-mode"]],decls:5,vars:2,consts:()=>{let o;o="Regel Modus";let n;n="Regel Modus";let e;e="lokal";let r;return r="remote",[n,e,r,["label",o,3,"ngModelChange","legendHidden","ngModel"],["value","local"],["value","remote"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"cmp-select-options",3),m("ngModelChange",function(_){return c(e.rulesMode,_)||(e.rulesMode=_),_;}),T(3,it,1,0,"ng-template",4)(4,lt,1,0,"ng-template",5),l()),n&2&&(a(2),R("legendHidden",!0),A("ngModel",e.rulesMode));},dependencies:[L,G,M,U,K],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function rt(t,E){if(t&1){let o=z();i(0,"li",8)(1,"span",9),p("click",function(){let e=V(o).$implicit,r=y(2);return D(r.loadRemote(e));})("keypress",function(){let e=V(o).$implicit,r=y(2);return D(r.loadRemote(e));}),k(2),l(),i(3,"button",10),p("click",function(){let e=V(o).$implicit,r=y(2);return D(r.removeFromHistory(e));}),l()();}if(t&2){let o=E.$implicit;a(2),X(" ",o," ");}}function at(t,E){if(t&1&&(i(0,"ul"),Ce(1,rt,4,1,"li",8,se),l()),t&2){let o=y();a(),Ee(o.remoteHistory());}}var we=(()=>{class t{state=P(d);remoteStatus=this.state.remoteRules.status;currentURL=f(()=>this.state.remoteRules.history()[0]);remoteHistory=f(()=>this.state.remoteRules.history().slice(1));remoteHistoryVisible=x(!1);control=new Me(this.currentURL(),{updateOn:"blur"});controlValueChanges=de(this.control.valueChanges.pipe(ae(500)));constructor(){B(()=>{let o=this.controlValueChanges();o&&this.state.remoteRules.load(o);});}reloadRemote(){this.state.remoteRules.reload();}loadRemote(o){this.control.setValue(o),this.remoteHistoryVisible.set(!1);}removeFromHistory(o){this.state.remoteRules.removeFromHistory(o);}async copyRulesLocally(){(!this.state.rules.customized()||(await b("Dieser Vorgang wird die lokalen Regeln mit denen aus der Internet Quelle ersetzen. M\xF6chtest du wirklich fortfahren?")))&&(this.state.localRules.updateRules(this.state.rules.raw()),this.state.rules.mode.set("local"),this.state.rules.markAsCurrent());}static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-remote"]],decls:11,vars:6,consts:()=>{let o;o="Internet Quelle";let n;n="URL hier einf\xFCgen";let e;e="Lade Quelle aus dem Verlauf";let r;r="Status der Internet Quelle";let _;_="Quelle neuladen";let C;C="Internet Quelle";let I;I="Regeln lokal kopieren";let S;return S="Eintrag aus dem Verlauf entfernen",[C,I,["aria-label",o,"rows","4","placeholder",n,3,"formControl"],[1,"flex","flex-row","items-center"],["iconHistory","","iconClass","h-6 w-6","type","button","aria-label",e,1,"link",3,"click","disabled"],["aria-label",r,"role","status",1,"grow","text-center","font-mono"],["iconRefresh","","iconClass","h-6 w-6","type","button","aria-label",_,1,"link",3,"click","disabled"],["type","button",3,"click","disabled"],[1,"flex","cursor-pointer","items-center","p-1","text-sm"],["tabindex","0",1,"grow","break-all",3,"click","keypress"],["iconDelete","","iconClass","min-h-4 min-w-4","type","button","aria-label",S,1,"link","pr-0",3,"click"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),O(2,"textarea",2),i(3,"div",3)(4,"button",4),p("click",function(){return e.remoteHistoryVisible.set(!e.remoteHistoryVisible());}),l(),i(5,"div",5),k(6),l(),i(7,"button",6),p("click",function(){return e.reloadRemote();}),l()(),T(8,at,3,0,"ul"),i(9,"button",7),p("click",function(){return e.copyRulesLocally();}),s(10,1),l()),n&2&&(a(2),R("formControl",e.control),a(2),R("disabled",!e.remoteHistory().length),a(2),X(" ",e.remoteStatus().i18n," "),a(),R("disabled",!e.control.value),a(),F(e.remoteHistoryVisible()?8:-1),a(),R("disabled",e.remoteStatus().state!=="loaded"));},dependencies:[Fe,Ge,G,Le,pe,Te,Re],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Ke=(()=>{class t{state=P(d);fadeOutDisabledRules=this.state.config.fadeOutDisabledRules;highlightVariableStatus=this.state.config.highlightVariableStatus;go=this.state.router.go;rulesLoaded=f(()=>this.state.remoteRules.status().state==="loaded");rulesError=f(()=>this.state.remoteRules.status().state==="error");static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-rules-viewer"]],decls:8,vars:4,consts:()=>{let o;o="Inaktive Regeln ausgrauen";let n;n="Variablenstatus anzeigen";let e;e="Regelansicht";let r;r="Regeln ansehen";let _;return _="Regelcode ansehen",[e,r,_,["type","button",3,"click","disabled"],["id","rules-debug-mode","label",o,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"button",3),p("click",function(){return e.go("rules");}),s(3,1),l(),i(4,"cmp-checkbox",4),m("ngModelChange",function(_){return c(e.fadeOutDisabledRules,_)||(e.fadeOutDisabledRules=_),_;}),l(),i(5,"cmp-checkbox",5),m("ngModelChange",function(_){return c(e.highlightVariableStatus,_)||(e.highlightVariableStatus=_),_;}),l(),i(6,"button",3),p("click",function(){return e.go("rules-raw");}),s(7,2),l()),n&2&&(a(2),R("disabled",!e.rulesLoaded()),a(2),A("ngModel",e.fadeOutDisabledRules),a(),A("ngModel",e.highlightVariableStatus),a(),R("disabled",!e.rulesLoaded()&&!e.rulesError()));},dependencies:[h,L,G,M],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function st(t,E){t&1&&(i(0,"p"),W(1,3),i(2,"a",8),O(3,"img",9),l(),H(),l());}var Ue=(()=>{class t{displayKoFi=!0;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let o;o="einen Issue auf GitHub \xF6ffnen";let n;n="E-Mail an danilo.hoffmann1@googlemail.com";let e;e="Support";let r;r="Wenn du Fehler findest oder Vorschl\xE4ge hast, \xF6ffne bitte ein Issue auf GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let _;_="Alternativ kannst du mich per E-Mail unter "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+" erreichen.";let C;C="Kauf mir einen Kaffee auf ko-fi.com";let I;return I="Wenn dir diese App gef\xE4llt, \xFCberlege bitte mich zu unterst\xFCtzen: "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[e,r,_,I,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",o,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"e2e-hidden","inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"e2e-hidden","inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",C,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"p"),W(3,1),i(4,"a",4),O(5,"img",5),l(),H(),l(),i(6,"p"),W(7,2),i(8,"a",6),O(9,"img",7),l(),H(),l(),T(10,st,4,0,"p")),n&2&&(a(10),F(e.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();function Ct(t,E){if(t&1&&k(0),t&2){let o=y();ge(" ",o.versionCode," (",o.version,") ");}}function Et(t,E){if(t&1&&k(0),t&2){let o=y();X(" ",o.version," ");}}function Pt(t,E){if(t&1&&(i(0,"span",8),s(1,2),l()),t&2){let o=y();a(),Q(o.serviceWorkerStatus()),q(1);}}var ve=(()=>{class t{state=P(d);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1744878753029;version="0.10.2";gitHash="9bbad5215a6af60941bfbcccbe2525aa484abe97";versionCode=33;currentVersionLabel="Die aktuelle Version ist "+this.version+"";gitHashLabel="Der aktuelle Git Hash startet mit "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=f(()=>{switch(this.state.serviceWorker.status()){case"disabled":return"deaktiviert";case"error":return"Fehler";case"unrecoverable":return"nicht wiederherstellbar - bitte aktualisieren";case"init":return"initialisierend";case"ok":return"ok";case"update-available":return"Update verf\xFCgbar";}});static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let o;o="App-Version";let n;n="gebaut am "+"\uFFFD0\uFFFD"+"";let e;return e="Service Worker: "+"\uFFFD0\uFFFD"+"",[o,n,e,[1,"e2e-hidden"],[1,"accessible-content","inline-block","content-center",3,"href"],[1,"e2e-hidden","italic"],[1,"e2e-hidden","truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"e2e-hidden","font-mono","text-sm"]];},template:function(n,e){n&1&&(i(0,"h2"),s(1,0),l(),i(2,"span",3)(3,"a",4),T(4,Ct,1,2)(5,Et,1,1),l()(),i(6,"span",5),s(7,1),Ae(8,"date"),l(),i(9,"span",6)(10,"a",4)(11,"span",7),k(12),l()()(),T(13,Pt,2,1,"span",8)),n&2&&(a(3),R("href",`https://github.com/dhhyi/travel-packlist/releases/tag/v${e.version}`,j),Y("aria-label",e.currentVersionLabel),a(),F(e.displayVersionCode?4:5),a(4),Q(ce(8,8,e.buildTime,"long")),q(7),a(2),R("href",`https://github.com/dhhyi/travel-packlist/commit/${e.gitHash}`,j),Y("aria-label",e.gitHashLabel),a(2),Se(e.gitHash),a(),F(e.displayServiceWorkerStatus?13:-1));},dependencies:[me],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return t;})();var Wn=(()=>{class t{state=P(d);rulesMode=this.state.rules.mode;static ɵfac=function(n){return new(n||t)();};static ɵcmp=g({type:t,selectors:[["app-config"]],decls:12,vars:4,template:function(n,e){n&1&&(O(0,"app-config-checklist")(1,"app-config-rules-mode"),i(2,"div"),O(3,"app-config-rules-editor")(4,"app-config-rules-import-export"),l(),i(5,"div"),O(6,"app-config-rules-remote")(7,"app-config-rules-viewer"),l(),O(8,"app-config-appearance")(9,"app-config-version")(10,"app-config-support")(11,"app-config-dangerzone")),n&2&&(a(2),w("hidden",e.rulesMode()==="remote"),a(3),w("hidden",e.rulesMode()==="local"));},dependencies:[ye,Ve,De,$e,ve,Ue,be,ke,we,Ke],encapsulation:2,changeDetection:0});}return t;})();export{Wn as ConfigComponent};/**i18n:dceda2222b78a7d36ce594824fbf7b515d927444d0f7723e201921c9765a2e5b*/