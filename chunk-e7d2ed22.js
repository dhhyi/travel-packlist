import{a as Ue}from"./chunk-e5517a1c.js";import{b as F}from"./chunk-30703d5f.js";import{j as Ke,l as De,u as Xe,v as ze}from"./chunk-49914899.js";import{b as xe,c as We,d as Be,f as He,h as je,j as qe,r as Qe}from"./chunk-a03ded42.js";import{q as $}from"./chunk-41410835.js";import{b as ke,d as Ve,e as we,j as ve}from"./chunk-e3b837a5.js";import{$a as I,Aa as _,Ab as he,Bb as p,Cb as T,Db as N,Fb as d,Ga as b,Ha as k,Ib as Re,Jb as Le,Ka as Oe,Pa as m,Rb as L,Tb as $e,W as Ie,Xa as P,aa as E,ac as ye,bc as be,eb as t,fb as i,gb as f,ia as a,ib as V,ja as g,jb as M,kb as h,lb as o,mb as w,nb as v,pb as S,qb as G,ub as K,vb as Ge,xb as R,ya as y,yb as Fe,zb as Me}from"./chunk-5580e9c8.js";import"./chunk-5742b79d.js";var Ye=(()=>{class l{state=E($);rulesShare=E(Ue);resetHash(){this.state.set("lastExportHash",this.state.get("rulesHash")),this.state.set("lastExportDate",new Date().getTime());}isExportAvailable(){return!!this.state.get("rules");}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.get("exportNeeded")&&!(await F("You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?"))?Promise.resolve(!1):new Promise(C=>{let u=document.createElement("input");u.type="file",u.accept=".txt",u.addEventListener("cancel",()=>{C(!1);}),u.onchange=async()=>{let e=u.files?.[0];if(!e){C(!1);return;}let r=await e.text();this.state.set("rules",r),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),C(!0);},u.click();});}async promptEnableWeightTracking(){this.state.get("percentageOfItemsWithWeights")>.1&&!this.state.get("trackWeight")&&(await F("It seems that the imported rules contain items with weights. Shall we enable the weight tracking?"))&&this.state.set("trackWeight",!0);}resetChecklist(){this.state.set("answers",{}),this.state.set("checkedItems",[]),this.state.set("collapsedCategories",[]),this.state.set("answersLocked",!1);}static ɵfac=function(u){return new(u||l)();};static ɵprov=Ie({token:l,factory:l.ɵfac,providedIn:"root"});}return l;})();var ei=["exportButton"],ii=["importButton"],Je=l=>({"bg-green-light animate-pulse":l}),A=l=>({active:l});function ti(l,O){if(l&1){let C=V();t(0,"legend",88),S("click",function(){a(C);let e=G();return g(e.trackWeightHelp.set(!1));})("keypress",function(){a(C);let e=G();return g(e.trackWeightHelp.set(!1));}),o(1,39),i();}}function ni(l,O){l&1&&(t(0,"div",66),o(1,40),i());}function oi(l,O){if(l&1&&R(0),l&2){let C=G();he(" ",C.versionCode," (",C.version,") ");}}function _i(l,O){if(l&1&&R(0),l&2){let C=G();Me(" ",C.version," ");}}function li(l,O){if(l&1&&(t(0,"span",80),o(1,41),i()),l&2){let C=G();_(),w(C.serviceWorkerStatus()),v(1);}}function si(l,O){l&1&&(t(0,"p"),M(1,42),t(2,"a",89),f(3,"img",90),i(),h(),i());}function ri(l,O){l&1&&(t(0,"div",87),f(1,"app-icon-download",91),i());}var Mi=(()=>{class l{loading=b(!1);displayKoFi=!0;displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1736073609002;version="0.4.0-accessibility-1";gitHash="b0c14098486c85b3171ad47c3488b3eb315c7ab1";versionCode=11;router=E(Ve);route=E(ke);state=E($);fadeOutDisabledRules=this.state.signal("fadeOutDisabledRules");highlightVariableStatus=this.state.signal("highlightVariableStatus");refactorVariables=this.state.signal("refactorVariables");trackWeight=this.state.signal("trackWeight");categorySorting=this.state.signal("categorySorting");exportReminder=this.state.signal("exportReminder");theme=this.state.signal("theme");language=this.state.signal("language");fontSize=this.state.signal("fontSize");accessibility=this.state.signal("accessibility");trackWeightHelp=b(!1);exportNeeded=this.state.signal("exportNeeded");facade=E(Ye);highlightExport;exportButton=k.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=k.required("importButton");serviceWorkerStatus=L(()=>{switch(this.state.signal("serviceWorkerStatus")()){case"disabled":return"disabled";case"error":return"error";case"unrecoverable":return"unrecoverable - please refresh";case"init":return"initializing";case"ok":return"ok";case"update-available":return"update available";}});constructor(){let C=xe(this.route.fragment);this.highlightExport=L(()=>C()==="export-now"),this.highlightImport=L(()=>C()==="import"),$e(()=>{let u=C();u==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):u==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async resetChecklist(){(await F("Are you sure you want to reset the checklist?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}async resetEverything(){(await F("Are you sure you want to reset the whole application?"))&&(this.state.reset(),await this.router.navigate(["/packlist"]));}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(u){return new(u||l)();};static ɵcmp=Oe({type:l,selectors:[["app-config"]],viewQuery:function(u,e){u&1&&(K(e.exportButton,ei,5),K(e.importButton,ii,5)),u&2&&Ge(2);},decls:128,vars:60,consts:()=>{let C;C="GitHub issues";let u;u="Email";let e;e="Checklist";let r;r=" Reset Checklist ";let c;c="Track item weight";let s;s=" Sort categories ";let D;D="alphabetically";let X;X="order of definition";let z;z="Rules";let x;x=" Edit Rules ";let W;W="Fade out disabled rules in editor";let B;B="Highlight variable status in editor";let H;H="Rename all occurrences when renaming variables";let j;j=" Documentation ";let q;q=" Edit Rules with Code ";let Q;Q=" Export Rules ";let U;U=" Import Rules ";let Y;Y="Remind me to regularly export rules";let J;J="Appearance";let Z;Z="Theme";let ee;ee=" Dark ";let ie;ie=" Light ";let te;te=" System ";let ne;ne="Font Size";let oe;oe=" small ";let _e;_e=" normal ";let le;le=" large ";let se;se="Accessibility";let re;re=" accessible ";let ae;ae=" compact ";let ge;ge="Language";let ce;ce=" detect ";let Ce;Ce="App Version";let ue;ue="built on "+"\uFFFD0\uFFFD"+"";let Se;Se="Support";let Pe;Pe=" If you find any bugs or have any suggestions, please open an issue on GitHub: "+"\uFFFD#115\uFFFD"+""+"\uFFFD#116\uFFFD\uFFFD/#116\uFFFD"+""+"\uFFFD/#115\uFFFD"+"";let de;de=" Alternatively, you can reach out to me by "+"\uFFFD#119\uFFFD"+""+"\uFFFD#120\uFFFD\uFFFD/#120\uFFFD"+""+"\uFFFD/#119\uFFFD"+"";let Ae;Ae="DANGER!";let fe;fe=" Reset Application ";let Ee;Ee=" You can enter the item weight appended to the item name in the editor. ";let pe;pe=" Current rules are not backed up! ";let Te;Te="Service Worker: "+"\uFFFD0\uFFFD"+"";let Ne;Ne="Buy Me a Coffee at ko-fi.com";let me;return me=" If you like this app, please consider to "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[["exportButton",""],["importButton",""],e,r,c,s,D,X,z,x,W,B,H,j,q,Q,U,Y,J,Z,ee,ie,te,ne,oe,_e,le,se,re,ae,ge,ce,Ce,ue,Se,Pe,de,Ae,fe,Ee,pe,Te,me,[1,"section"],[1,"font-bold"],["type","button",3,"click"],["type","checkbox","id","track-weight",3,"ngModelChange","ngModel"],["for","track-weight",1,"grow"],["type","button",1,"link",3,"click"],[1,"h-6","w-6"],["role","contentinfo",1,"help"],[1,"flex","flex-row","flex-wrap","gap-x-6"],["type","radio","id","sort-alphabetically","value","alphabetically",3,"ngModelChange","ngModel"],["for","sort-alphabetically"],["type","radio","id","sort-definition","value","definition",3,"ngModelChange","ngModel"],["for","sort-definition"],["type","button","routerLink","/rules"],["type","checkbox","id","rules-debug-mode",3,"ngModelChange","ngModel"],["for","rules-debug-mode"],["type","checkbox","id","variables-debug-mode",3,"ngModelChange","ngModel"],["for","variables-debug-mode"],["type","checkbox","id","variables-refactor",3,"ngModelChange","ngModel"],["for","variables-refactor"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"],["type","button",3,"click","ngClass","disabled"],[1,"text-red-light","text-center","italic"],["type","button",3,"click","ngClass"],["type","checkbox","id","export-reminder",3,"ngModelChange","ngModel"],["for","export-reminder"],[1,"grid","grid-cols-3","gap-2"],["type","button",1,"link",3,"click","ngClass"],["type","button",1,"link","text-[16px]",3,"click","ngClass"],["type","button",1,"link","text-[18px]",3,"click","ngClass"],["type","button",1,"link","text-[20px]",3,"click","ngClass"],[1,"grid","grid-cols-2","gap-2"],[1,"h-6","w-8"],[3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],[1,"font-mono","text-sm"],[1,"flex","flex-col","gap-4"],["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank"],["src","https://img.shields.io/github/issues/dhhyi/travel-packlist","alt",C,1,"inline"],["href","mailto:dhhyi@aol.com","target","_blank"],["src","https://img.shields.io/badge/email-dhhyi%40aol.com-blue","alt",u,1,"inline"],["type","button",1,"red",3,"click"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],["role","contentinfo",1,"help",3,"click","keypress"],["href","https://ko-fi.com/danilohoffmann","target","_blank"],["src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png","alt",Ne,1,"inline","max-w-[10rem]"],[1,"h-[12rem]","w-[12rem]"]];},template:function(u,e){if(u&1){let r=V();t(0,"div",43)(1,"span",44),o(2,2),i(),t(3,"button",45),S("click",function(){return a(r),g(e.resetChecklist());}),o(4,3),i(),t(5,"div")(6,"input",46),N("ngModelChange",function(s){return a(r),T(e.trackWeight,s)||(e.trackWeight=s),g(s);}),i(),t(7,"label",47),o(8,4),i(),t(9,"button",48),S("click",function(){return a(r),g(e.trackWeightHelp.set(!e.trackWeightHelp()));}),f(10,"app-icon-help",49),i(),m(11,ti,2,0,"legend",50),i(),t(12,"div")(13,"fieldset",51)(14,"legend"),o(15,5),i(),t(16,"div")(17,"input",52),N("ngModelChange",function(s){return a(r),T(e.categorySorting,s)||(e.categorySorting=s),g(s);}),i(),t(18,"label",53),o(19,6),i()(),t(20,"div")(21,"input",54),N("ngModelChange",function(s){return a(r),T(e.categorySorting,s)||(e.categorySorting=s),g(s);}),i(),t(22,"label",55),o(23,7),i()()()()(),t(24,"div",43)(25,"span",44),o(26,8),i(),t(27,"button",56),o(28,9),i(),t(29,"div")(30,"input",57),N("ngModelChange",function(s){return a(r),T(e.fadeOutDisabledRules,s)||(e.fadeOutDisabledRules=s),g(s);}),i(),t(31,"label",58),o(32,10),i()(),t(33,"div")(34,"input",59),N("ngModelChange",function(s){return a(r),T(e.highlightVariableStatus,s)||(e.highlightVariableStatus=s),g(s);}),i(),t(35,"label",60),o(36,11),i()(),t(37,"div")(38,"input",61),N("ngModelChange",function(s){return a(r),T(e.refactorVariables,s)||(e.refactorVariables=s),g(s);}),i(),t(39,"label",62),o(40,12),i()(),f(41,"hr"),t(42,"button",63),o(43,13),i(),t(44,"button",64),o(45,14),i(),f(46,"hr"),t(47,"button",65,0),S("click",function(){return a(r),g(e.exportRules());}),o(49,15),i(),m(50,ni,2,0,"div",66),t(51,"button",67,1),S("click",function(){return a(r),g(e.importRules());}),o(53,16),i(),t(54,"div")(55,"input",68),N("ngModelChange",function(s){return a(r),T(e.exportReminder,s)||(e.exportReminder=s),g(s);}),i(),t(56,"label",69),o(57,17),i()()(),t(58,"div",43)(59,"span",44),o(60,18),i(),t(61,"fieldset",70)(62,"legend"),o(63,19),i(),t(64,"button",71),S("click",function(){return a(r),g(e.theme.set("dark"));}),o(65,20),i(),t(66,"button",71),S("click",function(){return a(r),g(e.theme.set("light"));}),o(67,21),i(),t(68,"button",71),S("click",function(){return a(r),g(e.theme.set("system"));}),o(69,22),i()(),t(70,"fieldset",70)(71,"legend"),o(72,23),i(),t(73,"button",72),S("click",function(){return a(r),g(e.fontSize.set("small"));}),o(74,24),i(),t(75,"button",73),S("click",function(){return a(r),g(e.fontSize.set("normal"));}),o(76,25),i(),t(77,"button",74),S("click",function(){return a(r),g(e.fontSize.set("large"));}),o(78,26),i()(),t(79,"fieldset",75)(80,"legend"),o(81,27),i(),t(82,"button",71),S("click",function(){return a(r),g(e.accessibility.set("accessible"));}),o(83,28),i(),t(84,"button",71),S("click",function(){return a(r),g(e.accessibility.set("compact"));}),o(85,29),i()(),t(86,"fieldset",70)(87,"legend"),o(88,30),i(),t(89,"button",71),S("click",function(){return a(r),g(e.language.set("auto"));}),o(90,31),i(),t(91,"button",71),S("click",function(){return a(r),g(e.language.set("en"));}),f(92,"app-flag-uk",76),i(),t(93,"button",71),S("click",function(){return a(r),g(e.language.set("de"));}),f(94,"app-flag-germany",76),i()()(),t(95,"div",43)(96,"span",44),o(97,32),i(),t(98,"span")(99,"a",77),m(100,oi,1,2)(101,_i,1,1),i()(),t(102,"span",78),o(103,33),Re(104,"date"),i(),t(105,"span",79)(106,"a",77),R(107),i()(),m(108,li,2,1,"span",80),i(),t(109,"div",43)(110,"span",44),o(111,34),i(),t(112,"div",81)(113,"p"),M(114,35),t(115,"a",82),f(116,"img",83),i(),h(),i(),t(117,"p"),M(118,36),t(119,"a",84),f(120,"img",85),i(),h(),i(),m(121,si,4,0,"p"),i()(),t(122,"div",43)(123,"span",44),o(124,37),i(),t(125,"button",86),S("click",function(){return a(r),g(e.resetEverything());}),o(126,38),i()(),m(127,ri,2,0,"div",87);}u&2&&(_(6),p("ngModel",e.trackWeight),_(5),I(e.trackWeightHelp()?11:-1),_(6),p("ngModel",e.categorySorting),_(4),p("ngModel",e.categorySorting),_(9),p("ngModel",e.fadeOutDisabledRules),_(4),p("ngModel",e.highlightVariableStatus),_(4),p("ngModel",e.refactorVariables),_(9),P("ngClass",d(34,Je,e.highlightExport()&&e.exportNeeded()))("disabled",!e.isExportAvailable()),_(3),I(e.exportNeeded()?50:-1),_(),P("ngClass",d(36,Je,e.highlightImport())),_(4),p("ngModel",e.exportReminder),_(9),P("ngClass",d(38,A,e.theme()==="dark")),_(2),P("ngClass",d(40,A,e.theme()==="light")),_(2),P("ngClass",d(42,A,e.theme()==="system")),_(5),P("ngClass",d(44,A,e.fontSize()==="small")),_(2),P("ngClass",d(46,A,e.fontSize()==="normal")),_(2),P("ngClass",d(48,A,e.fontSize()==="large")),_(5),P("ngClass",d(50,A,e.accessibility()==="accessible")),_(2),P("ngClass",d(52,A,e.accessibility()==="compact")),_(5),P("ngClass",d(54,A,e.language()==="auto")),_(2),P("ngClass",d(56,A,e.language()==="en")),_(2),P("ngClass",d(58,A,e.language()==="de")),_(6),P("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+e.version,y),_(),I(e.displayVersionCode?100:101),_(4),w(Le(104,31,e.buildTime,"long")),v(103),_(2),P("href","https://github.com/dhhyi/travel-packlist/commit/"+e.gitHash,y),_(),Fe(e.gitHash),_(),I(e.displayServiceWorkerStatus?108:-1),_(13),I(e.displayKoFi?121:-1),_(6),I(e.loading()?127:-1));},dependencies:[ve,we,Qe,Be,We,qe,He,je,be,ye,ze,Xe,De,Ke],styles:[".section[_ngcontent-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}"],changeDetection:0});}return l;})();export{Mi as default};/**i18n:9552fa0fbb6d334e0be38fbfc53a03a3c04e4f027352c7a86b85f26c3861fe82*/