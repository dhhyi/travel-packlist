import{a as je}from"./chunk-569712cb.js";import{b as G}from"./chunk-2ef27b60.js";import{j as Ve,l as we,u as ve,v as De}from"./chunk-7ec096d2.js";import{b as Ke,c as ze,d as Xe,f as xe,h as We,j as Be,r as He}from"./chunk-195f605a.js";import{q as $}from"./chunk-b4a90f47.js";import{b as $e,d as ye,e as ke,j as be}from"./chunk-35feb389.js";import{$a as I,$b as Re,Aa as r,Ab as Oe,Bb as E,Cb as T,Db as m,Fb as P,Ga as k,Ha as b,Hb as Ge,Ib as he,Ka as me,Pa as N,Qb as L,Sb as Me,W as Te,Xa as d,aa as p,ac as Le,eb as i,fb as t,gb as A,ia as c,ib as V,ja as C,jb as h,kb as M,lb as o,mb as w,nb as v,pb as S,qb as O,ub as D,vb as Ne,xb as R,ya as y,yb as Ie,zb as Fe}from"./chunk-6c739ab3.js";import"./chunk-e37fab44.js";var qe=(()=>{class _{state=p($);rulesShare=p(je);resetHash(){this.state.set("lastExportHash",this.state.get("rulesHash")),this.state.set("lastExportDate",new Date().getTime());}isExportAvailable(){return!!this.state.get("rules");}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.get("exportNeeded")&&!(await G("You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?"))?Promise.resolve(!1):new Promise(a=>{let g=document.createElement("input");g.type="file",g.accept=".txt",g.addEventListener("cancel",()=>{a(!1);}),g.onchange=async()=>{let e=g.files?.[0];if(!e){a(!1);return;}let s=await e.text();this.state.set("rules",s),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),a(!0);},g.click();});}async promptEnableWeightTracking(){this.state.get("percentageOfItemsWithWeights")>.1&&!this.state.get("trackWeight")&&(await G("It seems that the imported rules contain items with weights. Shall we enable the weight tracking?"))&&this.state.set("trackWeight",!0);}resetChecklist(){this.state.set("answers",{}),this.state.set("checkedItems",[]),this.state.set("collapsedCategories",[]),this.state.set("answersLocked",!1);}static ɵfac=function(g){return new(g||_)();};static ɵprov=Te({token:_,factory:_.ɵfac,providedIn:"root"});}return _;})();var Ye=["exportButton"],Je=["importButton"],Qe=_=>({"bg-green-light animate-pulse":_}),f=_=>({active:_});function Ze(_,F){if(_&1){let a=V();i(0,"legend",84),S("click",function(){c(a);let e=O();return C(e.trackWeightHelp.set(!1));})("keypress",function(){c(a);let e=O();return C(e.trackWeightHelp.set(!1));}),o(1,36),t();}}function et(_,F){_&1&&(i(0,"div",63),o(1,37),t());}function tt(_,F){if(_&1&&R(0),_&2){let a=O();Oe(" ",a.versionCode," (",a.version,") ");}}function it(_,F){if(_&1&&R(0),_&2){let a=O();Fe(" ",a.version," ");}}function nt(_,F){if(_&1&&(i(0,"span",76),o(1,38),t()),_&2){let a=O();r(),w(a.serviceWorkerStatus()),v(1);}}function ot(_,F){_&1&&(i(0,"p"),h(1,39),i(2,"a",85),A(3,"img",86),t(),M(),t());}function _t(_,F){_&1&&(i(0,"div",83),A(1,"app-icon-download",87),t());}var Ft=(()=>{class _{loading=k(!1);displayKoFi=!0;displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1735893934721;version="0.4.0";gitHash="f3e0a83307387ddbd35ade3a41aaa87ff5df9e16";versionCode=10;router=p(ye);route=p($e);state=p($);fadeOutDisabledRules=this.state.signal("fadeOutDisabledRules");highlightVariableStatus=this.state.signal("highlightVariableStatus");refactorVariables=this.state.signal("refactorVariables");trackWeight=this.state.signal("trackWeight");categorySorting=this.state.signal("categorySorting");exportReminder=this.state.signal("exportReminder");theme=this.state.signal("theme");language=this.state.signal("language");fontSize=this.state.signal("fontSize");trackWeightHelp=k(!1);exportNeeded=this.state.signal("exportNeeded");facade=p(qe);highlightExport;exportButton=b.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=b.required("importButton");serviceWorkerStatus=L(()=>{switch(this.state.signal("serviceWorkerStatus")()){case"disabled":return"disabled";case"error":return"error";case"unrecoverable":return"unrecoverable - please refresh";case"init":return"initializing";case"ok":return"ok";case"update-available":return"update available";}});constructor(){let a=Ke(this.route.fragment);this.highlightExport=L(()=>a()==="export-now"),this.highlightImport=L(()=>a()==="import"),Me(()=>{let g=a();g==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):g==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async resetChecklist(){(await G("Are you sure you want to reset the checklist?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}async resetEverything(){(await G("Are you sure you want to reset the whole application?"))&&(this.state.reset(),await this.router.navigate(["/packlist"]));}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(g){return new(g||_)();};static ɵcmp=me({type:_,selectors:[["app-config"]],viewQuery:function(g,e){g&1&&(D(e.exportButton,Ye,5),D(e.importButton,Je,5)),g&2&&Ne(2);},decls:121,vars:54,consts:()=>{let a;a="GitHub issues";let g;g="Email";let e;e="Checklist";let s;s=" Reset Checklist ";let u;u="Track item weight";let l;l=" Sort categories ";let K;K="alphabetically";let z;z="order of definition";let X;X="Rules";let x;x=" Edit Rules ";let W;W="Fade out disabled rules in editor";let B;B="Highlight variable status in editor";let H;H="Rename all occurrences when renaming variables";let j;j=" Documentation ";let q;q=" Edit Rules with Code ";let Q;Q=" Export Rules ";let U;U=" Import Rules ";let Y;Y="Remind me to regularly export rules";let J;J="Appearance";let Z;Z="Theme";let ee;ee=" Dark ";let te;te=" Light ";let ie;ie=" System ";let ne;ne="Font Size";let oe;oe=" small ";let _e;_e=" normal ";let le;le=" large ";let re;re="Language";let se;se=" detect ";let ae;ae="App Version";let ge;ge="built on "+"\uFFFD0\uFFFD"+"";let ce;ce="Support";let Ce;Ce=" If you find any bugs or have any suggestions, please open an issue on GitHub: "+"\uFFFD#108\uFFFD"+""+"\uFFFD#109\uFFFD\uFFFD/#109\uFFFD"+""+"\uFFFD/#108\uFFFD"+"";let ue;ue=" Alternatively, you can reach out to me by "+"\uFFFD#112\uFFFD"+""+"\uFFFD#113\uFFFD\uFFFD/#113\uFFFD"+""+"\uFFFD/#112\uFFFD"+"";let Se;Se="DANGER!";let de;de=" Reset Application ";let Pe;Pe=" You can enter the item weight appended to the item name in the editor. ";let Ae;Ae=" Current rules are not backed up! ";let fe;fe="Service Worker: "+"\uFFFD0\uFFFD"+"";let pe;pe="Buy Me a Coffee at ko-fi.com";let Ee;return Ee=" If you like this app, please consider to "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[["exportButton",""],["importButton",""],e,s,u,l,K,z,X,x,W,B,H,j,q,Q,U,Y,J,Z,ee,te,ie,ne,oe,_e,le,re,se,ae,ge,ce,Ce,ue,Se,de,Pe,Ae,fe,Ee,[1,"section"],[1,"font-bold"],["type","button",3,"click"],["type","checkbox","id","track-weight",3,"ngModelChange","ngModel"],["for","track-weight",1,"grow"],["type","button",1,"link",3,"click"],[1,"h-6","w-6"],["role","contentinfo",1,"help"],[1,"flex","flex-row","flex-wrap","gap-x-6"],["type","radio","id","sort-alphabetically","value","alphabetically",3,"ngModelChange","ngModel"],["for","sort-alphabetically"],["type","radio","id","sort-definition","value","definition",3,"ngModelChange","ngModel"],["for","sort-definition"],["type","button","routerLink","/rules"],["type","checkbox","id","rules-debug-mode",3,"ngModelChange","ngModel"],["for","rules-debug-mode"],["type","checkbox","id","variables-debug-mode",3,"ngModelChange","ngModel"],["for","variables-debug-mode"],["type","checkbox","id","variables-refactor",3,"ngModelChange","ngModel"],["for","variables-refactor"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"],["type","button",3,"click","ngClass","disabled"],[1,"text-red-light","text-center","italic"],["type","button",3,"click","ngClass"],["type","checkbox","id","export-reminder",3,"ngModelChange","ngModel"],["for","export-reminder"],[1,"grid","grid-cols-3","gap-2"],["type","button",1,"link",3,"click","ngClass"],["type","button",1,"link","text-[16px]",3,"click","ngClass"],["type","button",1,"link","text-[18px]",3,"click","ngClass"],["type","button",1,"link","text-[20px]",3,"click","ngClass"],[1,"h-6","w-8"],[3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],[1,"font-mono","text-sm"],[1,"flex","flex-col","gap-4"],["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank"],["src","https://img.shields.io/github/issues/dhhyi/travel-packlist","alt",a,1,"inline"],["href","mailto:dhhyi@aol.com","target","_blank"],["src","https://img.shields.io/badge/email-dhhyi%40aol.com-blue","alt",g,1,"inline"],["type","button",1,"red",3,"click"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],["role","contentinfo",1,"help",3,"click","keypress"],["href","https://ko-fi.com/danilohoffmann","target","_blank"],["src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png","alt",pe,1,"inline","max-w-[10rem]"],[1,"h-[12rem]","w-[12rem]"]];},template:function(g,e){if(g&1){let s=V();i(0,"div",40)(1,"span",41),o(2,2),t(),i(3,"button",42),S("click",function(){return c(s),C(e.resetChecklist());}),o(4,3),t(),i(5,"div")(6,"input",43),m("ngModelChange",function(l){return c(s),T(e.trackWeight,l)||(e.trackWeight=l),C(l);}),t(),i(7,"label",44),o(8,4),t(),i(9,"button",45),S("click",function(){return c(s),C(e.trackWeightHelp.set(!e.trackWeightHelp()));}),A(10,"app-icon-help",46),t(),N(11,Ze,2,0,"legend",47),t(),i(12,"div")(13,"fieldset",48)(14,"legend"),o(15,5),t(),i(16,"div")(17,"input",49),m("ngModelChange",function(l){return c(s),T(e.categorySorting,l)||(e.categorySorting=l),C(l);}),t(),i(18,"label",50),o(19,6),t()(),i(20,"div")(21,"input",51),m("ngModelChange",function(l){return c(s),T(e.categorySorting,l)||(e.categorySorting=l),C(l);}),t(),i(22,"label",52),o(23,7),t()()()()(),i(24,"div",40)(25,"span",41),o(26,8),t(),i(27,"button",53),o(28,9),t(),i(29,"div")(30,"input",54),m("ngModelChange",function(l){return c(s),T(e.fadeOutDisabledRules,l)||(e.fadeOutDisabledRules=l),C(l);}),t(),i(31,"label",55),o(32,10),t()(),i(33,"div")(34,"input",56),m("ngModelChange",function(l){return c(s),T(e.highlightVariableStatus,l)||(e.highlightVariableStatus=l),C(l);}),t(),i(35,"label",57),o(36,11),t()(),i(37,"div")(38,"input",58),m("ngModelChange",function(l){return c(s),T(e.refactorVariables,l)||(e.refactorVariables=l),C(l);}),t(),i(39,"label",59),o(40,12),t()(),A(41,"hr"),i(42,"button",60),o(43,13),t(),i(44,"button",61),o(45,14),t(),A(46,"hr"),i(47,"button",62,0),S("click",function(){return c(s),C(e.exportRules());}),o(49,15),t(),N(50,et,2,0,"div",63),i(51,"button",64,1),S("click",function(){return c(s),C(e.importRules());}),o(53,16),t(),i(54,"div")(55,"input",65),m("ngModelChange",function(l){return c(s),T(e.exportReminder,l)||(e.exportReminder=l),C(l);}),t(),i(56,"label",66),o(57,17),t()()(),i(58,"div",40)(59,"span",41),o(60,18),t(),i(61,"fieldset",67)(62,"legend"),o(63,19),t(),i(64,"button",68),S("click",function(){return c(s),C(e.theme.set("dark"));}),o(65,20),t(),i(66,"button",68),S("click",function(){return c(s),C(e.theme.set("light"));}),o(67,21),t(),i(68,"button",68),S("click",function(){return c(s),C(e.theme.set("system"));}),o(69,22),t()(),i(70,"fieldset",67)(71,"legend"),o(72,23),t(),i(73,"button",69),S("click",function(){return c(s),C(e.fontSize.set("small"));}),o(74,24),t(),i(75,"button",70),S("click",function(){return c(s),C(e.fontSize.set("normal"));}),o(76,25),t(),i(77,"button",71),S("click",function(){return c(s),C(e.fontSize.set("large"));}),o(78,26),t()(),i(79,"fieldset",67)(80,"legend"),o(81,27),t(),i(82,"button",68),S("click",function(){return c(s),C(e.language.set("auto"));}),o(83,28),t(),i(84,"button",68),S("click",function(){return c(s),C(e.language.set("en"));}),A(85,"app-flag-uk",72),t(),i(86,"button",68),S("click",function(){return c(s),C(e.language.set("de"));}),A(87,"app-flag-germany",72),t()()(),i(88,"div",40)(89,"span",41),o(90,29),t(),i(91,"span")(92,"a",73),N(93,tt,1,2)(94,it,1,1),t()(),i(95,"span",74),o(96,30),Ge(97,"date"),t(),i(98,"span",75)(99,"a",73),R(100),t()(),N(101,nt,2,1,"span",76),t(),i(102,"div",40)(103,"span",41),o(104,31),t(),i(105,"div",77)(106,"p"),h(107,32),i(108,"a",78),A(109,"img",79),t(),M(),t(),i(110,"p"),h(111,33),i(112,"a",80),A(113,"img",81),t(),M(),t(),N(114,ot,4,0,"p"),t()(),i(115,"div",40)(116,"span",41),o(117,34),t(),i(118,"button",82),S("click",function(){return c(s),C(e.resetEverything());}),o(119,35),t()(),N(120,_t,2,0,"div",83);}g&2&&(r(6),E("ngModel",e.trackWeight),r(5),I(e.trackWeightHelp()?11:-1),r(6),E("ngModel",e.categorySorting),r(4),E("ngModel",e.categorySorting),r(9),E("ngModel",e.fadeOutDisabledRules),r(4),E("ngModel",e.highlightVariableStatus),r(4),E("ngModel",e.refactorVariables),r(9),d("ngClass",P(32,Qe,e.highlightExport()&&e.exportNeeded()))("disabled",!e.isExportAvailable()),r(3),I(e.exportNeeded()?50:-1),r(),d("ngClass",P(34,Qe,e.highlightImport())),r(4),E("ngModel",e.exportReminder),r(9),d("ngClass",P(36,f,e.theme()==="dark")),r(2),d("ngClass",P(38,f,e.theme()==="light")),r(2),d("ngClass",P(40,f,e.theme()==="system")),r(5),d("ngClass",P(42,f,e.fontSize()==="small")),r(2),d("ngClass",P(44,f,e.fontSize()==="normal")),r(2),d("ngClass",P(46,f,e.fontSize()==="large")),r(5),d("ngClass",P(48,f,e.language()==="auto")),r(2),d("ngClass",P(50,f,e.language()==="en")),r(2),d("ngClass",P(52,f,e.language()==="de")),r(6),d("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+e.version,y),r(),I(e.displayVersionCode?93:94),r(4),w(he(97,29,e.buildTime,"long")),v(96),r(2),d("href","https://github.com/dhhyi/travel-packlist/commit/"+e.gitHash,y),r(),Ie(e.gitHash),r(),I(e.displayServiceWorkerStatus?101:-1),r(13),I(e.displayKoFi?114:-1),r(6),I(e.loading()?120:-1));},dependencies:[be,ke,He,Xe,ze,Be,xe,We,Le,Re,De,ve,we,Ve],styles:[".section[_ngcontent-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}"],changeDetection:0});}return _;})();export{Ft as default};/**i18n:e44c97b853b206ae381adf260d958d5dfbaba558a4dcc6d8b72122fc056efd3f*/