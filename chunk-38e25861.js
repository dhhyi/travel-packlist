import{a as je}from"./chunk-f789052e.js";import{b as G}from"./chunk-1328b0cb.js";import{j as Ve,l as we,u as ve,v as De}from"./chunk-24a9c903.js";import{b as Ke,c as ze,d as Xe,f as xe,h as We,j as He,r as Be}from"./chunk-f1ad7e9d.js";import{p as L}from"./chunk-557595d8.js";import{b as $e,d as ye,e as ke,j as be}from"./chunk-a1592053.js";import{$a as I,Aa as r,Ab as Oe,Bb as p,Cb as T,Db as N,Ga as y,Ha as pe,Ib as P,Ka as Te,Kb as Ge,Lb as Me,Pa as m,Tb as w,Vb as he,W as Ee,Xa as d,aa as E,cc as Re,dc as Le,eb as i,fb as t,gb as A,ia as a,ib as k,ja as g,jb as M,kb as h,lb as o,mb as b,nb as V,pb as S,qb as O,ub as Ne,vb as me,xb as R,ya as $,yb as Ie,zb as Fe}from"./chunk-61d1b8f0.js";import"./chunk-be8120ea.js";var qe=(()=>{class _{state=E(L);rulesShare=E(je);resetHash(){this.state.set("lastExportHash",this.state.get("rulesHash")),this.state.set("lastExportDate",new Date().getTime());}isExportAvailable(){return!!this.state.get("rules");}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.get("exportNeeded")&&!(await G("Du hast ungespeicherte \xC4nderungen, die verloren gehen, wenn du neue Regeln importierst. M\xF6chtest du trotzdem fortfahren?"))?Promise.resolve(!1):new Promise(c=>{let C=document.createElement("input");C.type="file",C.accept=".txt",C.addEventListener("cancel",()=>{c(!1);}),C.onchange=async()=>{let e=C.files?.[0];if(!e){c(!1);return;}let s=await e.text();this.state.set("rules",s),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),c(!0);},C.click();});}async promptEnableWeightTracking(){this.state.get("percentageOfItemsWithWeights")>.1&&!this.state.get("trackWeight")&&(await G("Es sieht so aus, als ob die importierten Regeln Artikel mit Gewichten enthalten. Sollen wir die Gewichtsverfolgung aktivieren?"))&&this.state.set("trackWeight",!0);}resetChecklist(){this.state.set("answers",{}),this.state.set("checkedItems",[]),this.state.set("collapsedCategories",[]),this.state.set("answersLocked",!1);}static ɵfac=function(C){return new(C||_)();};static ɵprov=Ee({token:_,factory:_.ɵfac,providedIn:"root"});}return _;})();var Qe=["exportButton"],Ye=_=>({"bg-green-light animate-pulse":_}),f=_=>({active:_});function Je(_,F){if(_&1){let c=k();i(0,"legend",82),S("click",function(){a(c);let e=O();return g(e.trackWeightHelp.set(!1));})("keypress",function(){a(c);let e=O();return g(e.trackWeightHelp.set(!1));}),o(1,35),t();}}function Ze(_,F){_&1&&(i(0,"div",62),o(1,36),t());}function et(_,F){if(_&1&&R(0),_&2){let c=O();Oe(" ",c.versionCode," (",c.version,") ");}}function tt(_,F){if(_&1&&R(0),_&2){let c=O();Fe(" ",c.version," ");}}function it(_,F){if(_&1&&(i(0,"span",74),o(1,37),t()),_&2){let c=O();r(),b(c.serviceWorkerStatus()),V(1);}}function nt(_,F){_&1&&(i(0,"p"),M(1,38),i(2,"a",83),A(3,"img",84),t(),h(),t());}function ot(_,F){_&1&&(i(0,"div",81),A(1,"app-icon-download",85),t());}var It=(()=>{class _{loading=y(!1);displayKoFi=!0;displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1734772581628;version="0.3.3";gitHash="3e6725074ad77658ab0cae55d12bdeffdc689b18";versionCode=9;router=E(ye);route=E($e);state=E(L);fadeOutDisabledRules=this.state.signal("fadeOutDisabledRules");highlightVariableStatus=this.state.signal("highlightVariableStatus");refactorVariables=this.state.signal("refactorVariables");trackWeight=this.state.signal("trackWeight");categorySorting=this.state.signal("categorySorting");exportReminder=this.state.signal("exportReminder");theme=this.state.signal("theme");language=this.state.signal("language");fontSize=this.state.signal("fontSize");trackWeightHelp=y(!1);exportNeeded=this.state.signal("exportNeeded");facade=E(qe);highlightExport;exportButton=pe.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);serviceWorkerStatus=w(()=>{switch(this.state.signal("serviceWorkerStatus")()){case"disabled":return"deaktiviert";case"error":return"Fehler";case"unrecoverable":return"nicht wiederherstellbar";case"init":return"Initialisierung";case"ok":return"OK";case"update-available":return"Aktualisierung verf\xFCgbar";}});constructor(){let c=Ke(this.route.fragment);this.highlightExport=w(()=>c()==="export-now"),he(()=>{let C=c(),e=this.exportButton().nativeElement.getBoundingClientRect().top;C==="export-now"&&e>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async resetChecklist(){(await G("Bist du sicher, dass du die Checkliste zur\xFCcksetzen m\xF6chtest?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}async resetEverything(){(await G("Bist du sicher, dass du die Anwendung zur\xFCcksetzen m\xF6chtest?"))&&(this.state.reset(),await this.router.navigate(["/packlist"]));}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(C){return new(C||_)();};static ɵcmp=Te({type:_,selectors:[["app-config"]],viewQuery:function(C,e){C&1&&Ne(e.exportButton,Qe,5),C&2&&me();},decls:120,vars:51,consts:()=>{let c;c="GitHub issues";let C;C="Email";let e;e="Checkliste";let s;s="Checkliste zur\xFCcksetzen";let u;u="Gewicht verfolgen";let l;l="Kategorien Sortierung";let v;v="alphabetisch";let D;D="nach Definitionsreihenfolge";let K;K="Regeln";let z;z="Regeln bearbeiten";let X;X="Inaktive Regeln im Editor ausgrauen";let x;x="Variablenstatus im Editor anzeigen";let W;W="Benenne alle Vorkommen um, wenn Variablen umbenannt werden";let H;H="Dokumentation";let B;B="Regeln als Code bearbeiten";let j;j="Regeln exportieren";let q;q="Regeln importieren";let U;U="Erinnere mich daran, die Regeln regelm\xE4\xDFig zu exportieren";let Q;Q="Aussehen";let Y;Y="Theme";let J;J="Dark";let Z;Z="Light";let ee;ee="System";let te;te="Schriftgr\xF6\xDFe";let ie;ie="klein";let ne;ne="normal";let oe;oe="gro\xDF";let _e;_e="Sprache";let le;le="auto";let re;re="App Version";let se;se="gebaut am "+"\uFFFD0\uFFFD"+"";let ae;ae="Support";let ge;ge="Falls du Bugs findest oder Vorschl\xE4ge hast, \xF6ffne bitte ein Issue auf GitHub: "+"\uFFFD#107\uFFFD"+""+"\uFFFD#108\uFFFD\uFFFD/#108\uFFFD"+""+"\uFFFD/#107\uFFFD"+"";let ce;ce="Alternativ kannst du mir eine "+"\uFFFD#111\uFFFD"+""+"\uFFFD#112\uFFFD\uFFFD/#112\uFFFD"+""+"\uFFFD/#111\uFFFD"+" schreiben";let Ce;Ce="GEFAHRENZONE!";let ue;ue="Anwendung zur\xFCcksetzen";let Se;Se="Das Gewicht des Artikels kann im Editor hinter dem Artikelnamen eingegeben werden.";let de;de="Die aktuellen Regeln sind nicht gesichert!";let Pe;Pe="Service Worker: "+"\uFFFD0\uFFFD"+"";let Ae;Ae="Kauf mir einen Kaffee auf ko-fi.com";let fe;return fe="Falls dir die App gef\xE4llt und du mich unterst\xFCtzen m\xF6chtest, kannst du mir gerne einen Kaffee spendieren: "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[["exportButton",""],e,s,u,l,v,D,K,z,X,x,W,H,B,j,q,U,Q,Y,J,Z,ee,te,ie,ne,oe,_e,le,re,se,ae,ge,ce,Ce,ue,Se,de,Pe,fe,[1,"section"],[1,"font-bold"],["type","button",3,"click"],["type","checkbox","id","track-weight",3,"ngModelChange","ngModel"],["for","track-weight",1,"grow"],["type","button",1,"link",3,"click"],[1,"h-6","w-6"],["role","contentinfo",1,"help"],[1,"flex","flex-row","flex-wrap","gap-x-6"],["type","radio","id","sort-alphabetically","value","alphabetically",3,"ngModelChange","ngModel"],["for","sort-alphabetically"],["type","radio","id","sort-definition","value","definition",3,"ngModelChange","ngModel"],["for","sort-definition"],["type","button","routerLink","/rules"],["type","checkbox","id","rules-debug-mode",3,"ngModelChange","ngModel"],["for","rules-debug-mode"],["type","checkbox","id","variables-debug-mode",3,"ngModelChange","ngModel"],["for","variables-debug-mode"],["type","checkbox","id","variables-refactor",3,"ngModelChange","ngModel"],["for","variables-refactor"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"],["type","button",3,"click","ngClass","disabled"],[1,"text-red-light","text-center","italic"],["type","checkbox","id","export-reminder",3,"ngModelChange","ngModel"],["for","export-reminder"],[1,"grid","grid-cols-3","gap-2"],["type","button",1,"link",3,"click","ngClass"],["type","button",1,"link","text-[16px]",3,"click","ngClass"],["type","button",1,"link","text-[18px]",3,"click","ngClass"],["type","button",1,"link","text-[20px]",3,"click","ngClass"],[1,"h-6","w-8"],[3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],[1,"font-mono","text-sm"],[1,"flex","flex-col","gap-4"],["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank"],["src","https://img.shields.io/github/issues/dhhyi/travel-packlist","alt",c,1,"inline"],["href","mailto:dhhyi@aol.com","target","_blank"],["src","https://img.shields.io/badge/email-dhhyi%40aol.com-blue","alt",C,1,"inline"],["type","button",1,"red",3,"click"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],["role","contentinfo",1,"help",3,"click","keypress"],["href","https://ko-fi.com/danilohoffmann","target","_blank"],["src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png","alt",Ae,1,"inline","max-w-[10rem]"],[1,"h-[12rem]","w-[12rem]"]];},template:function(C,e){if(C&1){let s=k();i(0,"div",39)(1,"span",40),o(2,1),t(),i(3,"button",41),S("click",function(){return a(s),g(e.resetChecklist());}),o(4,2),t(),i(5,"div")(6,"input",42),N("ngModelChange",function(l){return a(s),T(e.trackWeight,l)||(e.trackWeight=l),g(l);}),t(),i(7,"label",43),o(8,3),t(),i(9,"button",44),S("click",function(){return a(s),g(e.trackWeightHelp.set(!e.trackWeightHelp()));}),A(10,"app-icon-help",45),t(),m(11,Je,2,0,"legend",46),t(),i(12,"div")(13,"fieldset",47)(14,"legend"),o(15,4),t(),i(16,"div")(17,"input",48),N("ngModelChange",function(l){return a(s),T(e.categorySorting,l)||(e.categorySorting=l),g(l);}),t(),i(18,"label",49),o(19,5),t()(),i(20,"div")(21,"input",50),N("ngModelChange",function(l){return a(s),T(e.categorySorting,l)||(e.categorySorting=l),g(l);}),t(),i(22,"label",51),o(23,6),t()()()()(),i(24,"div",39)(25,"span",40),o(26,7),t(),i(27,"button",52),o(28,8),t(),i(29,"div")(30,"input",53),N("ngModelChange",function(l){return a(s),T(e.fadeOutDisabledRules,l)||(e.fadeOutDisabledRules=l),g(l);}),t(),i(31,"label",54),o(32,9),t()(),i(33,"div")(34,"input",55),N("ngModelChange",function(l){return a(s),T(e.highlightVariableStatus,l)||(e.highlightVariableStatus=l),g(l);}),t(),i(35,"label",56),o(36,10),t()(),i(37,"div")(38,"input",57),N("ngModelChange",function(l){return a(s),T(e.refactorVariables,l)||(e.refactorVariables=l),g(l);}),t(),i(39,"label",58),o(40,11),t()(),A(41,"hr"),i(42,"button",59),o(43,12),t(),i(44,"button",60),o(45,13),t(),A(46,"hr"),i(47,"button",61,0),S("click",function(){return a(s),g(e.exportRules());}),o(49,14),t(),m(50,Ze,2,0,"div",62),i(51,"button",41),S("click",function(){return a(s),g(e.importRules());}),o(52,15),t(),i(53,"div")(54,"input",63),N("ngModelChange",function(l){return a(s),T(e.exportReminder,l)||(e.exportReminder=l),g(l);}),t(),i(55,"label",64),o(56,16),t()()(),i(57,"div",39)(58,"span",40),o(59,17),t(),i(60,"fieldset",65)(61,"legend"),o(62,18),t(),i(63,"button",66),S("click",function(){return a(s),g(e.theme.set("dark"));}),o(64,19),t(),i(65,"button",66),S("click",function(){return a(s),g(e.theme.set("light"));}),o(66,20),t(),i(67,"button",66),S("click",function(){return a(s),g(e.theme.set("system"));}),o(68,21),t()(),i(69,"fieldset",65)(70,"legend"),o(71,22),t(),i(72,"button",67),S("click",function(){return a(s),g(e.fontSize.set("small"));}),o(73,23),t(),i(74,"button",68),S("click",function(){return a(s),g(e.fontSize.set("normal"));}),o(75,24),t(),i(76,"button",69),S("click",function(){return a(s),g(e.fontSize.set("large"));}),o(77,25),t()(),i(78,"fieldset",65)(79,"legend"),o(80,26),t(),i(81,"button",66),S("click",function(){return a(s),g(e.language.set("auto"));}),o(82,27),t(),i(83,"button",66),S("click",function(){return a(s),g(e.language.set("en"));}),A(84,"app-flag-uk",70),t(),i(85,"button",66),S("click",function(){return a(s),g(e.language.set("de"));}),A(86,"app-flag-germany",70),t()()(),i(87,"div",39)(88,"span",40),o(89,28),t(),i(90,"span")(91,"a",71),m(92,et,1,2)(93,tt,1,1),t()(),i(94,"span",72),o(95,29),Ge(96,"date"),t(),i(97,"span",73)(98,"a",71),R(99),t()(),m(100,it,2,1,"span",74),t(),i(101,"div",39)(102,"span",40),o(103,30),t(),i(104,"div",75)(105,"p"),M(106,31),i(107,"a",76),A(108,"img",77),t(),h(),t(),i(109,"p"),M(110,32),i(111,"a",78),A(112,"img",79),t(),h(),t(),m(113,nt,4,0,"p"),t()(),i(114,"div",39)(115,"span",40),o(116,33),t(),i(117,"button",80),S("click",function(){return a(s),g(e.resetEverything());}),o(118,34),t()(),m(119,ot,2,0,"div",81);}C&2&&(r(6),p("ngModel",e.trackWeight),r(5),I(e.trackWeightHelp()?11:-1),r(6),p("ngModel",e.categorySorting),r(4),p("ngModel",e.categorySorting),r(9),p("ngModel",e.fadeOutDisabledRules),r(4),p("ngModel",e.highlightVariableStatus),r(4),p("ngModel",e.refactorVariables),r(9),d("ngClass",P(31,Ye,e.highlightExport()&&e.exportNeeded()))("disabled",!e.isExportAvailable()),r(3),I(e.exportNeeded()?50:-1),r(4),p("ngModel",e.exportReminder),r(9),d("ngClass",P(33,f,e.theme()==="dark")),r(2),d("ngClass",P(35,f,e.theme()==="light")),r(2),d("ngClass",P(37,f,e.theme()==="system")),r(5),d("ngClass",P(39,f,e.fontSize()==="small")),r(2),d("ngClass",P(41,f,e.fontSize()==="normal")),r(2),d("ngClass",P(43,f,e.fontSize()==="large")),r(5),d("ngClass",P(45,f,e.language()==="auto")),r(2),d("ngClass",P(47,f,e.language()==="en")),r(2),d("ngClass",P(49,f,e.language()==="de")),r(6),d("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+e.version,$),r(),I(e.displayVersionCode?92:93),r(4),b(Me(96,28,e.buildTime,"long")),V(95),r(2),d("href","https://github.com/dhhyi/travel-packlist/commit/"+e.gitHash,$),r(),Ie(e.gitHash),r(),I(e.displayServiceWorkerStatus?100:-1),r(13),I(e.displayKoFi?113:-1),r(6),I(e.loading()?119:-1));},dependencies:[be,ke,Be,Xe,ze,He,xe,We,Le,Re,De,ve,we,Ve],styles:[".section[_ngcontent-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}"],changeDetection:0});}return _;})();export{It as default};/**i18n:cbcf01d4640d52ad6821130aa8bde718125de417ff622aa7dfac4aa297a95122*/