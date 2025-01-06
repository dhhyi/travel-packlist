import{a as at}from"./chunk-e5517a1c.js";import{b as L}from"./chunk-507d9a43.js";import{j as it,l as nt,u as ot,v as _t}from"./chunk-d4b1fe5c.js";import{b as lt,p as z}from"./chunk-8169169e.js";import{q as X}from"./chunk-96e25749.js";import{b as Je,d as Ze,e as et,j as tt}from"./chunk-1c10ba45.js";import{Aa as s,Ab as I,Bb as M,Cb as x,Da as ve,Db as Be,Eb as A,Fb as E,Ga as b,Gb as T,Ha as H,Ia as Ve,Ib as R,Ja as $,Jb as U,Kb as D,Ma as G,Mb as He,Nb as qe,Oa as xe,Ra as u,Vb as K,W as we,Xb as je,Ya as y,Za as m,aa as N,ab as k,bb as h,db as De,eb as Ke,ec as Qe,fb as Xe,fc as Ue,gb as _,gc as Ye,hb as o,ia as C,ib as S,ja as d,jb as ze,kb as F,lb as w,mb as v,nb as c,ob as q,pb as j,rb as f,sb as P,ta as O,wb as We,xb as Q,ya as B,yb as V}from"./chunk-415c542e.js";import"./chunk-5742b79d.js";var Ct=(t,g)=>({"bg-slate-300":t,"dark:bg-slate-700":g});function dt(t,g){if(t&1){let n=F();_(0,"legend",5),f("click",function(e){C(n);let r=P(2);return d(r.toggleHelp(e));})("keypress",function(e){C(n);let r=P(2);return d(r.toggleHelp(e));}),I(1),o();}if(t&2){let n=P(2);s(),x(" ",n.help()," ");}}function pt(t,g){if(t&1){let n=F();_(0,"button",2),f("click",function(e){C(n);let r=P();return d(r.toggleHelp(e));}),S(1,"app-icon-help",3),o(),u(2,dt,2,1,"legend",4);}if(t&2){let n=P();s(2),h(n.helpVisible()?2:-1);}}var st=(()=>{class t{id=O.required();model=$.required();label=O.required();help=O();helpVisible=b(!1);toggleHelp(n){n.stopPropagation(),this.helpVisible.update(i=>!i);}toggle(){this.model.update(n=>!n);}static ɵfac=function(i){return new(i||t)();};static ɵcmp=G({type:t,selectors:[["cmp-checkbox"]],hostAttrs:["role","checkbox","tabindex","0"],hostVars:2,hostBindings:function(i,e){i&1&&f("click",function(){return e.toggle();})("keypress",function(){return e.toggle();}),i&2&&y("aria-checked",e.model())("aria-label",e.label()+(e.help()?". ("+e.help()+")":""));},inputs:{id:[1,"id"],model:[1,"model"],label:[1,"label"],help:[1,"help"]},outputs:{model:"modelChange"},decls:4,vars:9,consts:[["tabindex","-1",1,"my-2","h-6","min-h-6","w-6","min-w-6","appearance-none","rounded-sm","border-4","border-slate-300","hover:border-slate-400","dark:border-slate-700",3,"id"],[1,"grow",3,"htmlFor"],["type","button","tabindex","-1",1,"link",3,"click"],[1,"h-6","w-6"],["role","contentinfo",1,"help"],["role","contentinfo",1,"help",3,"click","keypress"]],template:function(i,e){i&1&&(S(0,"div",0),_(1,"label",1),I(2),o(),u(3,pt,3,1)),i&2&&(k(D(6,Ct,e.model(),e.model())),m("id",e.id()),s(),m("htmlFor",e.id()),s(),M(e.label()),s(),h(e.help()?3:-1));},dependencies:[z,it],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:.5rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0});}return t;})();var ut=(t,g)=>({"bg-slate-300":t,"dark:bg-slate-700":g});function mt(t,g){t&1&&ze(0);}function St(t,g){if(t&1){let n=F();_(0,"div",2),f("click",function(){let e=C(n).$implicit,r=P();return d(r.model.set(e));})("keypress",function(){let e=C(n).$implicit,r=P();return d(r.model.set(e));}),S(1,"div",3),u(2,mt,1,0,"ng-container",4),o();}if(t&2){let n=g.$implicit,i=P();y("aria-checked",i.model()===n),s(),k(D(4,ut,i.model()===n,i.model()===n)),s(),m("ngTemplateOutlet",i.template(n));}}var W=(()=>{class t{value=O.required();template=N(ve);static ɵfac=function(i){return new(i||t)();};static ɵdir=xe({type:t,selectors:[["ng-template","value",""]],inputs:{value:[1,"value"]}});}return t;})(),rt=(()=>{class t{label=O.required();model=$.required();options=O.required();children=Ve(W);template(n){let i=this.children().find(e=>e.value()===n);if(!i)throw new Error(`No template found for option: ${n}`);return i.template;}static ɵfac=function(i){return new(i||t)();};static ɵcmp=G({type:t,selectors:[["cmp-select-options"]],contentQueries:function(i,e,r){i&1&&We(r,e.children,W,4),i&2&&V();},inputs:{label:[1,"label"],model:[1,"model"],options:[1,"options"]},outputs:{model:"modelChange"},decls:5,vars:2,consts:[["role","radiogroup",1,"flex","flex-wrap","justify-evenly","gap-2","gap-y-4","pb-4"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap",3,"click","keypress"],[1,"mr-2","h-6","min-h-6","w-6","min-w-6","rounded-full","border-4","border-slate-300","dark:border-slate-700"],[4,"ngTemplateOutlet"]],template:function(i,e){i&1&&(_(0,"fieldset",0)(1,"legend"),I(2),o(),Ke(3,St,3,7,"div",1,De),o()),i&2&&(y("aria-label",e.label()),s(2),M(e.label()),s(),Xe(e.options()));},dependencies:[Ue],styles:[".accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0});}return t;})();var ct=(()=>{class t{state=N(X);rulesShare=N(at);resetHash(){this.state.set("lastExportHash",this.state.get("rulesHash")),this.state.set("lastExportDate",new Date().getTime());}isExportAvailable(){return!!this.state.get("rules");}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.get("exportNeeded")&&!(await L("You have unsaved changes that will be lost if you import new rules. Do you want to continue anyway?"))?Promise.resolve(!1):new Promise(n=>{let i=document.createElement("input");i.type="file",i.accept=".txt",i.addEventListener("cancel",()=>{n(!1);}),i.onchange=async()=>{let e=i.files?.[0];if(!e){n(!1);return;}let r=await e.text();this.state.set("rules",r),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),n(!0);},i.click();});}async promptEnableWeightTracking(){this.state.get("percentageOfItemsWithWeights")>.1&&!this.state.get("trackWeight")&&(await L("It seems that the imported rules contain items with weights. Shall we enable the weight tracking?"))&&this.state.set("trackWeight",!0);}resetChecklist(){this.state.set("answers",{}),this.state.set("checkedItems",[]),this.state.set("collapsedCategories",[]),this.state.set("answersLocked",!1);}static ɵfac=function(i){return new(i||t)();};static ɵprov=we({token:t,factory:t.ɵfac,providedIn:"root"});}return t;})();var Pt=["exportButton"],ft=["importButton"],At=()=>["alphabetically","definition"],gt=t=>({"bg-green-light animate-pulse":t}),Et=()=>["dark","light","system"],Tt=()=>["small","normal","large"],Nt=()=>["accessible","compact"],ht=()=>["auto","en","de"];function It(t,g){t&1&&c(0,18);}function Ot(t,g){t&1&&c(0,19);}function Ft(t,g){t&1&&(_(0,"div",46),c(1,20),o());}function Gt(t,g){t&1&&c(0,21);}function Mt(t,g){t&1&&c(0,22);}function Rt(t,g){t&1&&c(0,23);}function Lt(t,g){t&1&&(_(0,"span",75),c(1,24),o());}function bt(t,g){t&1&&(_(0,"span",76),c(1,25),o());}function yt(t,g){t&1&&(_(0,"span",77),c(1,26),o());}function $t(t,g){t&1&&c(0,27);}function kt(t,g){t&1&&c(0,28);}function wt(t,g){t&1&&c(0,29);}function vt(t,g){t&1&&S(0,"app-flag-uk",78);}function Vt(t,g){t&1&&S(0,"app-flag-germany",78);}function xt(t,g){if(t&1&&I(0),t&2){let n=P();Be(" ",n.versionCode," (",n.version,") ");}}function Dt(t,g){if(t&1&&I(0),t&2){let n=P();x(" ",n.version," ");}}function Kt(t,g){if(t&1&&(_(0,"span",67),c(1,30),o()),t&2){let n=P();s(),q(n.serviceWorkerStatus()),j(1);}}function Xt(t,g){t&1&&(_(0,"p"),w(1,31),_(2,"a",79),S(3,"img",80),o(),v(),o());}function zt(t,g){t&1&&(_(0,"div",74),S(1,"app-icon-download",81),o());}var hi=(()=>{class t{loading=b(!1);displayKoFi=!0;displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1736154922744;version="0.4.0-accessibility-2";gitHash="27fde643215e3b42c6a6a4fed3a94e73f31beeb7";versionCode=12;router=N(Ze);route=N(Je);state=N(X);fadeOutDisabledRules=this.state.signal("fadeOutDisabledRules");highlightVariableStatus=this.state.signal("highlightVariableStatus");refactorVariables=this.state.signal("refactorVariables");trackWeight=this.state.signal("trackWeight");categorySorting=this.state.signal("categorySorting");exportReminder=this.state.signal("exportReminder");theme=this.state.signal("theme");language=this.state.signal("language");fontSize=this.state.signal("fontSize");accessibility=this.state.signal("accessibility");trackWeightHelp=b(!1);exportNeeded=this.state.signal("exportNeeded");facade=N(ct);highlightExport;exportButton=H.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=H.required("importButton");serviceWorkerStatus=K(()=>{switch(this.state.signal("serviceWorkerStatus")()){case"disabled":return"disabled";case"error":return"error";case"unrecoverable":return"unrecoverable - please refresh";case"init":return"initializing";case"ok":return"ok";case"update-available":return"update available";}});constructor(){let n=lt(this.route.fragment);this.highlightExport=K(()=>n()==="export-now"),this.highlightImport=K(()=>n()==="import"),je(()=>{let i=n();i==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):i==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async resetChecklist(){(await L("Are you sure you want to reset the checklist?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}async resetEverything(){(await L("Are you sure you want to reset the whole application?"))&&(this.state.reset(),await this.router.navigate(["/packlist"]));}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(i){return new(i||t)();};static ɵcmp=G({type:t,selectors:[["app-config"]],viewQuery:function(i,e){i&1&&(Q(e.exportButton,Pt,5),Q(e.importButton,ft,5)),i&2&&V(2);},decls:82,vars:39,consts:()=>{let n;n="Track item weight";let i;i="You can enter the item weight appended to the item name in the editor.";let e;e="Sort categories";let r;r="Fade out disabled rules in editor";let p;p="Highlight variable status in editor";let a;a="Rename all occurrences when renaming variables";let J;J="Remind me to regularly export rules";let Z;Z="Theme";let ee;ee="Font Size";let te;te="Accessibility";let ie;ie="Language";let ne;ne="GitHub issues";let oe;oe="Email";let _e;_e="Checklist";let le;le=" Reset Checklist ";let ae;ae="Rules";let se;se=" Edit Rules ";let re;re=" Documentation ";let ce;ce=" Edit Rules with Code ";let ge;ge=" Export Rules ";let Ce;Ce=" Import Rules ";let de;de="Appearance";let pe;pe="App Version";let ue;ue="built on "+"\uFFFD0\uFFFD"+"";let me;me="Support";let Se;Se=" If you find any bugs or have any suggestions, please open an issue on GitHub: "+"\uFFFD#69\uFFFD"+""+"\uFFFD#70\uFFFD\uFFFD/#70\uFFFD"+""+"\uFFFD/#69\uFFFD"+"";let Pe;Pe=" Alternatively, you can reach out to me by "+"\uFFFD#73\uFFFD"+""+"\uFFFD#74\uFFFD\uFFFD/#74\uFFFD"+""+"\uFFFD/#73\uFFFD"+"";let fe;fe="DANGER!";let Ae;Ae=" Reset Application ";let Ee;Ee="alphabetically";let Te;Te="order of definition";let Ne;Ne=" Current rules are not backed up! ";let he;he="Dark";let Ie;Ie="Light";let Oe;Oe="System";let Fe;Fe="small";let Ge;Ge="normal";let Me;Me="large";let Re;Re="accessible";let Le;Le="compact";let be;be="detect";let ye;ye="Service Worker: "+"\uFFFD0\uFFFD"+"";let $e;$e="Buy Me a Coffee at ko-fi.com";let ke;return ke=" If you like this app, please consider to "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[["exportButton",""],["importButton",""],_e,le,ae,se,re,ce,ge,Ce,de,pe,ue,me,Se,Pe,fe,Ae,Ee,Te,Ne,he,Ie,Oe,Fe,Ge,Me,Re,Le,be,ye,ke,[1,"section"],[1,"font-bold"],["type","button",3,"click"],["id","track-weight","label",n,"help",i,3,"modelChange","model"],["label",e,3,"modelChange","options","model"],["value","alphabetically"],["value","definition"],["type","button","routerLink","/rules"],["id","rules-debug-mode","label",r,3,"modelChange","model"],["id","variables-debug-mode","label",p,3,"modelChange","model"],["id","variables-refactor","label",a,3,"modelChange","model"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"],["type","button",3,"click","ngClass","disabled"],[1,"text-red","text-center","italic"],["type","button",3,"click","ngClass"],["id","export-reminder","label",J,3,"modelChange","model"],["label",Z,3,"modelChange","options","model"],["value","dark"],["value","light"],["value","system"],["label",ee,3,"modelChange","options","model"],["value","small"],["value","normal"],["value","large"],["label",te,3,"modelChange","options","model"],["value","accessible"],["value","compact"],["label",ie,3,"modelChange","options","model"],["value","auto"],["value","en"],["value","de"],[3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],[1,"font-mono","text-sm"],[1,"flex","flex-col","gap-4"],["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank"],["src","https://img.shields.io/github/issues/dhhyi/travel-packlist","alt",ne,1,"inline"],["href","mailto:dhhyi@aol.com","target","_blank"],["src","https://img.shields.io/badge/email-dhhyi%40aol.com-blue","alt",oe,1,"inline"],["type","button",1,"red",3,"click"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"],[1,"h-6","w-8"],["href","https://ko-fi.com/danilohoffmann","target","_blank"],["src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png","alt",$e,1,"inline","max-w-[10rem]"],[1,"h-[12rem]","w-[12rem]"]];},template:function(i,e){if(i&1){let r=F();_(0,"div",32)(1,"span",33),c(2,2),o(),_(3,"button",34),f("click",function(){return C(r),d(e.resetChecklist());}),c(4,3),o(),_(5,"cmp-checkbox",35),T("modelChange",function(a){return C(r),E(e.trackWeight,a)||(e.trackWeight=a),d(a);}),o(),_(6,"cmp-select-options",36),T("modelChange",function(a){return C(r),E(e.categorySorting,a)||(e.categorySorting=a),d(a);}),u(7,It,1,0,"ng-template",37)(8,Ot,1,0,"ng-template",38),o()(),_(9,"div",32)(10,"span",33),c(11,4),o(),_(12,"button",39),c(13,5),o(),_(14,"cmp-checkbox",40),T("modelChange",function(a){return C(r),E(e.fadeOutDisabledRules,a)||(e.fadeOutDisabledRules=a),d(a);}),o(),_(15,"cmp-checkbox",41),T("modelChange",function(a){return C(r),E(e.highlightVariableStatus,a)||(e.highlightVariableStatus=a),d(a);}),o(),_(16,"cmp-checkbox",42),T("modelChange",function(a){return C(r),E(e.refactorVariables,a)||(e.refactorVariables=a),d(a);}),o(),S(17,"hr"),_(18,"button",43),c(19,6),o(),_(20,"button",44),c(21,7),o(),S(22,"hr"),_(23,"button",45,0),f("click",function(){return C(r),d(e.exportRules());}),c(25,8),o(),u(26,Ft,2,0,"div",46),_(27,"button",47,1),f("click",function(){return C(r),d(e.importRules());}),c(29,9),o(),_(30,"cmp-checkbox",48),T("modelChange",function(a){return C(r),E(e.exportReminder,a)||(e.exportReminder=a),d(a);}),o()(),_(31,"div",32)(32,"span",33),c(33,10),o(),_(34,"cmp-select-options",49),T("modelChange",function(a){return C(r),E(e.theme,a)||(e.theme=a),d(a);}),u(35,Gt,1,0,"ng-template",50)(36,Mt,1,0,"ng-template",51)(37,Rt,1,0,"ng-template",52),o(),_(38,"cmp-select-options",53),T("modelChange",function(a){return C(r),E(e.fontSize,a)||(e.fontSize=a),d(a);}),u(39,Lt,2,0,"ng-template",54)(40,bt,2,0,"ng-template",55)(41,yt,2,0,"ng-template",56),o(),_(42,"cmp-select-options",57),T("modelChange",function(a){return C(r),E(e.accessibility,a)||(e.accessibility=a),d(a);}),u(43,$t,1,0,"ng-template",58)(44,kt,1,0,"ng-template",59),o(),_(45,"cmp-select-options",60),T("modelChange",function(a){return C(r),E(e.language,a)||(e.language=a),d(a);}),u(46,wt,1,0,"ng-template",61)(47,vt,1,0,"ng-template",62)(48,Vt,1,0,"ng-template",63),o()(),_(49,"div",32)(50,"span",33),c(51,11),o(),_(52,"span")(53,"a",64),u(54,xt,1,2)(55,Dt,1,1),o()(),_(56,"span",65),c(57,12),He(58,"date"),o(),_(59,"span",66)(60,"a",64),I(61),o()(),u(62,Kt,2,1,"span",67),o(),_(63,"div",32)(64,"span",33),c(65,13),o(),_(66,"div",68)(67,"p"),w(68,14),_(69,"a",69),S(70,"img",70),o(),v(),o(),_(71,"p"),w(72,15),_(73,"a",71),S(74,"img",72),o(),v(),o(),u(75,Xt,4,0,"p"),o()(),_(76,"div",32)(77,"span",33),c(78,16),o(),_(79,"button",73),f("click",function(){return C(r),d(e.resetEverything());}),c(80,17),o()(),u(81,zt,2,0,"div",74);}i&2&&(s(5),A("model",e.trackWeight),s(),m("options",R(30,At)),A("model",e.categorySorting),s(8),A("model",e.fadeOutDisabledRules),s(),A("model",e.highlightVariableStatus),s(),A("model",e.refactorVariables),s(7),m("ngClass",U(31,gt,e.highlightExport()&&e.exportNeeded()))("disabled",!e.isExportAvailable()),s(3),h(e.exportNeeded()?26:-1),s(),m("ngClass",U(33,gt,e.highlightImport())),s(3),A("model",e.exportReminder),s(4),m("options",R(35,Et)),A("model",e.theme),s(4),m("options",R(36,Tt)),A("model",e.fontSize),s(4),m("options",R(37,Nt)),A("model",e.accessibility),s(3),m("options",R(38,ht)),A("model",e.language),s(8),m("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+e.version,B),s(),h(e.displayVersionCode?54:55),s(4),q(qe(58,27,e.buildTime,"long")),j(57),s(2),m("href","https://github.com/dhhyi/travel-packlist/commit/"+e.gitHash,B),s(),M(e.gitHash),s(),h(e.displayServiceWorkerStatus?62:-1),s(13),h(e.displayKoFi?75:-1),s(6),h(e.loading()?81:-1));},dependencies:[tt,et,z,Ye,Qe,_t,ot,nt,st,rt,W],styles:[".section[_ngcontent-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}"],changeDetection:0});}return t;})();export{hi as default};/**i18n:9552fa0fbb6d334e0be38fbfc53a03a3c04e4f027352c7a86b85f26c3861fe82*/