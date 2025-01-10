import{a as Ue}from"./chunk-0b42f20d.js";import{b as w}from"./chunk-9efdb21a.js";import{j as xe,l as Ve,u as we,v as Ke}from"./chunk-ac459377.js";import{a as te,d as y,f as $,o as M,r as ze}from"./chunk-8070f68a.js";import{q as O,r as Xe}from"./chunk-49434dce.js";import{b as De,d as z,e as ve}from"./chunk-e15b0d87.js";import{$b as U,Aa as r,Ab as Q,Cb as L,Da as Te,Db as X,Eb as Y,Fb as he,Ga as x,Gb as S,Ha as _e,Hb as A,Ib as u,Ja as Ne,Jb as Me,Kb as Le,Lb as Ce,Ma as g,Mb as J,Na as Oe,Oa as fe,Ob as ee,Qb as be,Ra as E,Rb as ye,V as B,W as Ae,X as ue,Ya as b,Za as h,Zb as W,_a as le,aa as P,ab as j,b as K,bb as G,eb as Ie,fb as Re,gb as l,hb as _,ia as I,ib as d,ic as $e,ja as R,jb as Ge,jc as ke,kb as V,lb as q,mb as Z,nb as s,ob as ae,pb as re,rb as N,sb as m,ta as v,ya as oe,yb as Fe,zb as se}from"./chunk-e83faf22.js";import"./chunk-71f6c2da.js";var Je=(e,C)=>({"bg-slate-300":e,"dark:bg-slate-700":C});function et(e,C){if(e&1){let i=V();l(0,"legend",5),N("click",function(t){I(i);let a=m(2);return R(a.toggleHelp(t));})("keypress",function(t){I(i);let a=m(2);return R(a.toggleHelp(t));}),L(1),_();}if(e&2){let i=m(2);r(),Y(" ",i.help()," ");}}function tt(e,C){if(e&1){let i=V();l(0,"button",2),N("click",function(t){I(i);let a=m();return R(a.toggleHelp(t));}),d(1,"app-icon-help",3),_(),E(2,et,2,1,"legend",4);}if(e&2){let i=m();r(2),G(i.helpVisible()?2:-1);}}var k=(()=>{class e{id=v.required();label=v.required();help=v();model=x(void 0);onChange=K;onTouched=K;helpVisible=x(!1);constructor(){U(()=>{this.onChange(this.model()),this.onTouched();});}toggleHelp(i){i.stopPropagation(),this.helpVisible.update(n=>!n);}toggle(){this.model.update(i=>!i);}writeValue(i){this.model.set(i);}registerOnChange(i){this.onChange=i;}registerOnTouched(i){this.onTouched=i;}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["cmp-checkbox"]],hostAttrs:["role","checkbox","tabindex","0"],hostVars:2,hostBindings:function(n,t){n&1&&N("click",function(){return t.toggle();})("keypress",function(){return t.toggle();}),n&2&&b("aria-checked",t.model())("aria-label",t.label()+(t.help()?". ("+t.help()+")":""));},inputs:{id:[1,"id"],label:[1,"label"],help:[1,"help"]},features:[J([{provide:te,useExisting:B(()=>e),multi:!0}])],decls:4,vars:9,consts:[["tabindex","-1",1,"my-2","h-6","min-h-6","w-6","min-w-6","appearance-none","rounded-sm","border-4","border-slate-300","dark:border-slate-700",3,"id"],[1,"grow",3,"htmlFor"],["type","button","tabindex","-1","aria-hidden","true",1,"link",3,"click"],[1,"h-6","w-6"],["role","contentinfo",1,"help"],["role","contentinfo",1,"help",3,"click","keypress"]],template:function(n,t){n&1&&(d(0,"div",0),l(1,"label",1),L(2),_(),E(3,tt,3,1)),n&2&&(j(ee(6,Je,t.model(),t.model())),h("id",t.id()),r(),h("htmlFor",t.id()),r(),X(t.label()),r(),G(t.help()?3:-1));},dependencies:[M,xe],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:.5rem}.accessible[_nghost-%COMP%]   div[id][_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[id][_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0});}return e;})();var nt=(e,C)=>C.value(),it=(e,C)=>({"bg-slate-300":e,"dark:bg-slate-700":C});function ot(e,C){e&1&&Ge(0);}function _t(e,C){if(e&1){let i=V();Me(0),l(1,"div",2),N("click",function(){I(i);let t=Ce(0),a=m();return R(a.model.set(t));})("keypress",function(){I(i);let t=Ce(0),a=m();return R(a.model.set(t));}),d(2,"div",3),E(3,ot,1,0,"ng-container",4),_();}if(e&2){let i=C.$implicit,n=m(),t=Le(i.value());r(),b("aria-checked",n.model()===t),r(),j(ee(5,it,n.model()===t,n.model()===t)),r(),h("ngTemplateOutlet",n.template(t));}}var H=(()=>{class e{value=v.required();template=P(Te);static ɵfac=function(n){return new(n||e)();};static ɵdir=fe({type:e,selectors:[["ng-template","value",""]],inputs:{value:[1,"value"]}});}return e;})(),ne=(()=>{class e{label=v.required();model=x(void 0);children=Ne(H);onChanged=K;onTouched=K;constructor(){U(()=>{this.onChanged(this.model()),this.onTouched();});}template(i){let n=this.children().find(t=>t.value()===i);if(!n)throw new Error(`No template found for option: ${i}`);return n.template;}writeValue(i){this.model.set(i);}registerOnChange(i){this.onChanged=i;}registerOnTouched(i){this.onTouched=i;}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["cmp-select-options"]],contentQueries:function(n,t,a){n&1&&Fe(a,t.children,H,4),n&2&&Q();},inputs:{label:[1,"label"]},features:[J([{provide:te,useExisting:B(()=>e),multi:!0}])],decls:5,vars:2,consts:[["role","radiogroup",1,"flex","flex-wrap","justify-evenly","gap-2","gap-y-4","pb-4"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap"],["role","radio","tabindex","0",1,"bg-active","flex","items-center","text-nowrap",3,"click","keypress"],[1,"mr-2","h-6","min-h-6","w-6","min-w-6","rounded-full","border-4","border-slate-300","dark:border-slate-700"],[4,"ngTemplateOutlet"]],template:function(n,t){n&1&&(l(0,"fieldset",0)(1,"legend"),L(2),_(),Ie(3,_t,4,8,"div",1,nt),_()),n&2&&(b("aria-label",t.label()),r(2),X(t.label()),r(),Re(t.children()));},dependencies:[$e],styles:[".accessible[_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .accessible   [_nghost-%COMP%]   div[role=radio][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2rem;min-height:2rem;width:2rem;min-width:2rem;border-width:6px}"],changeDetection:0});}return e;})();var D=(()=>{class e{static ɵfac=function(n){return new(n||e)();};static ɵmod=Oe({type:e});static ɵinj=ue({imports:[k]});}return e;})();function lt(e,C){e&1&&s(0,1);}function at(e,C){e&1&&s(0,2);}function rt(e,C){e&1&&s(0,3);}function st(e,C){e&1&&(l(0,"span",25),s(1,4),_());}function Ct(e,C){e&1&&(l(0,"span",26),s(1,5),_());}function ct(e,C){e&1&&(l(0,"span",27),s(1,6),_());}function Pt(e,C){e&1&&s(0,7);}function pt(e,C){e&1&&s(0,8);}function gt(e,C){e&1&&s(0,9);}function Et(e,C){e&1&&d(0,"app-flag-uk",28);}function dt(e,C){e&1&&d(0,"app-flag-germany",28);}var We=(()=>{class e{state=P(O);theme=this.state.theme;language=this.state.language;fontSize=this.state.fontSize;accessibility=this.state.accessibility;static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-appearance"]],decls:17,vars:4,consts:()=>{let i;i="Thema";let n;n="Schriftgr\xF6\xDFe";let t;t="Barrierefreiheit";let a;a="Sprache";let o;o="Aussehen";let p;p="Dark";let f;f="Light";let c;c="System";let pe;pe="klein";let ge;ge="normal";let Ee;Ee="gro\xDF";let de;de="barrierefrei";let me;me="kompakt";let Se;return Se="automatisch",[o,p,f,c,pe,ge,Ee,de,me,Se,["label",i,3,"ngModelChange","ngModel"],["value","dark"],["value","light"],["value","system"],["label",n,3,"ngModelChange","ngModel"],["value","small"],["value","normal"],["value","large"],["label",t,3,"ngModelChange","ngModel"],["value","accessible"],["value","compact"],["label",a,3,"ngModelChange","ngModel"],["value","auto"],["value","en"],["value","de"],[1,"text-[16px]"],[1,"text-[18px]"],[1,"text-[20px]"],[1,"h-6","w-8"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"cmp-select-options",10),u("ngModelChange",function(o){return A(t.theme,o)||(t.theme=o),o;}),E(3,lt,1,0,"ng-template",11)(4,at,1,0,"ng-template",12)(5,rt,1,0,"ng-template",13),_(),l(6,"cmp-select-options",14),u("ngModelChange",function(o){return A(t.fontSize,o)||(t.fontSize=o),o;}),E(7,st,2,0,"ng-template",15)(8,Ct,2,0,"ng-template",16)(9,ct,2,0,"ng-template",17),_(),l(10,"cmp-select-options",18),u("ngModelChange",function(o){return A(t.accessibility,o)||(t.accessibility=o),o;}),E(11,Pt,1,0,"ng-template",19)(12,pt,1,0,"ng-template",20),_(),l(13,"cmp-select-options",21),u("ngModelChange",function(o){return A(t.language,o)||(t.language=o),o;}),E(14,gt,1,0,"ng-template",22)(15,Et,1,0,"ng-template",23)(16,dt,1,0,"ng-template",24),_()),n&2&&(r(2),S("ngModel",t.theme),r(4),S("ngModel",t.fontSize),r(4),S("ngModel",t.accessibility),r(3),S("ngModel",t.language));},dependencies:[M,y,$,D,ne,H,Ke,we],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var ie=(()=>{class e{state=P(O);rulesShare=P(Ue);resetHash(){this.state.lastExportHash.set(this.state.rulesHash()),this.state.lastExportDate.set(new Date().getTime());}isExportAvailable(){return!!this.state.rules();}async exportRules(){await this.rulesShare.exportRules(),this.resetHash();}async importRules(){return this.state.exportNeeded()&&!(await w("Du hast ungespeicherte \xC4nderungen, die verloren gehen, wenn du neue Regeln importierst. M\xF6chtest du trotzdem fortfahren?"))?Promise.resolve(!1):new Promise(i=>{let n=document.createElement("input");n.type="file",n.accept=".txt",n.addEventListener("cancel",()=>{i(!1);}),n.onchange=async()=>{let t=n.files?.[0];if(!t){i(!1);return;}let a=await t.text();this.state.rules.set(a),this.resetHash(),setTimeout(()=>{this.promptEnableWeightTracking();},2e3),this.resetChecklist(),i(!0);},n.click();});}async promptEnableWeightTracking(){this.state.percentageOfItemsWithWeights()>.1&&!this.state.trackWeight()&&(await w("Es scheint, dass die importierten Regeln Gegenst\xE4nde mit Gewichten enthalten. Sollen wir die Gewichtserfassung aktivieren?"))&&this.state.trackWeight.set(!0);}resetChecklist(){this.state.answers.set({}),this.state.checkedItems.set([]),this.state.collapsedCategories.set([]),this.state.answersLocked.set(!1);}static ɵfac=function(n){return new(n||e)();};static ɵprov=Ae({token:e,factory:e.ɵfac,providedIn:"root"});}return e;})();function mt(e,C){e&1&&s(0,2);}function St(e,C){e&1&&s(0,3);}var Be=(()=>{class e{router=P(z);state=P(O);facade=P(ie);trackWeight=this.state.trackWeight;categorySorting=this.state.categorySorting;async resetChecklist(){(await w("Bist du sicher, dass du die Checkliste zur\xFCcksetzen m\xF6chtest?"))&&(this.facade.resetChecklist(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-checklist"]],decls:8,vars:2,consts:()=>{let i;i="Gesamtgewicht verfolgen";let n;n="Du kannst das Gegenstandsgewicht im Editor an den Gegenstandsnamen anh\xE4ngen.";let t;t="Kategorien sortieren";let a;a="Checkliste";let o;o="Checkliste zur\xFCcksetzen";let p;p="alphabetisch";let f;return f="nach Definitionsreihenfolge",[a,o,p,f,["type","button",3,"click"],["id","track-weight","label",i,"help",n,3,"ngModelChange","ngModel"],["label",t,3,"ngModelChange","ngModel"],["value","alphabetically"],["value","definition"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"button",4),N("click",function(){return t.resetChecklist();}),s(3,1),_(),l(4,"cmp-checkbox",5),u("ngModelChange",function(o){return A(t.trackWeight,o)||(t.trackWeight=o),o;}),_(),l(5,"cmp-select-options",6),u("ngModelChange",function(o){return A(t.categorySorting,o)||(t.categorySorting=o),o;}),E(6,mt,1,0,"ng-template",7)(7,St,1,0,"ng-template",8),_()),n&2&&(r(4),S("ngModel",t.trackWeight),r(),S("ngModel",t.categorySorting));},dependencies:[M,y,$,D,k,ne,H],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var je=(()=>{class e{router=P(z);reset=P(Xe);async resetEverything(){(await w("Bist du sicher, dass du die gesamte Anwendung zur\xFCcksetzen m\xF6chtest?"))&&(this.reset(),await this.router.navigate(["/packlist"]));}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-dangerzone"]],decls:4,vars:0,consts:()=>{let i;i="GEFAHR!";let n;return n="Anwendung zur\xFCcksetzen",[i,n,["type","button",1,"red",3,"click"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"button",2),N("click",function(){return t.resetEverything();}),s(3,1),_());},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var qe=(()=>{class e{state=P(O);fadeOutDisabledRules=this.state.fadeOutDisabledRules;highlightVariableStatus=this.state.highlightVariableStatus;refactorVariables=this.state.refactorVariables;static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-rules-editor"]],decls:11,vars:3,consts:()=>{let i;i="Deaktivierte Regeln im Editor ausblenden";let n;n="Variablenstatus im Editor hervorheben";let t;t="Alle Vorkommen beim Umbenennen von Variablen umbenennen";let a;a="Regel Editor";let o;o="Regeln bearbeiten";let p;p="Dokumentation";let f;return f="Regeln mit Code bearbeiten",[a,o,p,f,["type","button","routerLink","/rules"],["id","rules-debug-mode","label",i,3,"ngModelChange","ngModel"],["id","variables-debug-mode","label",n,3,"ngModelChange","ngModel"],["id","variables-refactor","label",t,3,"ngModelChange","ngModel"],["type","button","routerLink","/documentation"],["type","button","routerLink","/rules-raw"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"button",4),s(3,1),_(),l(4,"cmp-checkbox",5),u("ngModelChange",function(o){return A(t.fadeOutDisabledRules,o)||(t.fadeOutDisabledRules=o),o;}),_(),l(5,"cmp-checkbox",6),u("ngModelChange",function(o){return A(t.highlightVariableStatus,o)||(t.highlightVariableStatus=o),o;}),_(),l(6,"cmp-checkbox",7),u("ngModelChange",function(o){return A(t.refactorVariables,o)||(t.refactorVariables=o),o;}),_(),l(7,"button",8),s(8,2),_(),l(9,"button",9),s(10,3),_()),n&2&&(r(4),S("ngModel",t.fadeOutDisabledRules),r(),S("ngModel",t.highlightVariableStatus),r(),S("ngModel",t.refactorVariables));},dependencies:[D,k,M,y,$,ve],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var At=["exportButton"],ut=["importButton"];function Tt(e,C){e&1&&(l(0,"div",6),s(1,4),_());}function Nt(e,C){e&1&&(l(0,"div",9),d(1,"app-icon-download",10),_());}var Ze=(()=>{class e{router=P(z);route=P(De);state=P(O);exportReminder=this.state.exportReminder;exportNeeded=this.state.exportNeeded;facade=P(ie);highlightExport;exportButton=_e.required("exportButton");isExportAvailable=this.facade.isExportAvailable.bind(this.facade);highlightImport;importButton=_e.required("importButton");loading=x(!1);constructor(){let i=ze(this.route.fragment);this.highlightExport=W(()=>i()==="export-now"),this.highlightImport=W(()=>i()==="import"),U(()=>{let n=i();n==="export-now"?this.exportButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.exportButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3):n==="import"&&this.importButton().nativeElement.getBoundingClientRect().top>window.innerHeight&&setTimeout(()=>{this.importButton().nativeElement.scrollIntoView({behavior:"smooth"});},2e3);});}async importRules(){this.loading.set(!0),(await this.facade.importRules())&&(await this.router.navigate(["/packlist"])),this.loading.set(!1);}async exportRules(){await this.facade.exportRules();}static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-rules-import-export"]],viewQuery:function(n,t){n&1&&(se(t.exportButton,At,5),se(t.importButton,ut,5)),n&2&&Q(2);},decls:9,vars:8,consts:()=>{let i;i="Export n\xF6tig";let n;n="Erinnere mich daran, regelm\xE4\xDFig Regeln zu exportieren";let t;t="Regeln exportieren";let a;a="Regeln importieren";let o;return o="Aktuelle Regeln sind nicht gesichert!",[["exportButton",""],["importButton",""],t,a,o,["type","button",3,"click","disabled"],["role","alert","aria-live","polite","aria-label",i,1,"text-red","text-center","italic"],["type","button",3,"click"],["id","export-reminder","label",n,3,"ngModelChange","ngModel"],[1,"loading","fixed","left-0","top-0","flex","h-svh","w-full","items-center","justify-center","bg-white","opacity-30"],[1,"h-[12rem]","w-[12rem]"]];},template:function(n,t){if(n&1){let a=V();l(0,"button",5,0),N("click",function(){return I(a),R(t.exportRules());}),s(2,2),_(),E(3,Tt,2,0,"div",6),l(4,"button",7,1),N("click",function(){return I(a),R(t.importRules());}),s(6,3),_(),l(7,"cmp-checkbox",8),u("ngModelChange",function(p){return I(a),A(t.exportReminder,p)||(t.exportReminder=p),R(p);}),_(),E(8,Nt,2,0,"div",9);}n&2&&(le("highlighted",t.highlightExport()&&t.exportNeeded()),h("disabled",!t.isExportAvailable()),r(3),G(t.exportNeeded()?3:-1),r(),le("highlighted",t.highlightImport()),r(3),S("ngModel",t.exportReminder),r(),G(t.loading()?8:-1));},dependencies:[M,y,$,D,k,Ve],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function Ot(e,C){e&1&&(l(0,"p"),q(1,3),l(2,"a",8),d(3,"img",9),_(),Z(),_());}var Qe=(()=>{class e{displayKoFi=!0;static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-support"]],decls:11,vars:1,consts:()=>{let i;i="einen Issue auf GitHub \xF6ffnen";let n;n="E-Mail an danilo.hoffmann1@googlemail.com";let t;t="Support";let a;a="Wenn du Fehler findest oder Vorschl\xE4ge hast, \xF6ffne bitte ein Issue auf GitHub: "+"\uFFFD#4\uFFFD"+""+"\uFFFD#5\uFFFD\uFFFD/#5\uFFFD"+""+"\uFFFD/#4\uFFFD"+"";let o;o="Alternativ kannst du mich per E-Mail unter "+"\uFFFD#8\uFFFD"+""+"\uFFFD#9\uFFFD\uFFFD/#9\uFFFD"+""+"\uFFFD/#8\uFFFD"+" erreichen.";let p;p="Kauf mir einen Kaffee auf ko-fi.com";let f;return f="Wenn dir diese App gef\xE4llt, \xFCberlege bitte mich zu unterst\xFCtzen: "+"\uFFFD#2\uFFFD"+""+"\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"+""+"\uFFFD/#2\uFFFD"+"",[t,a,o,f,["href","https://github.com/dhhyi/travel-packlist/issues","target","_blank","aria-label",i,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/github/issues/dhhyi/travel-packlist",1,"inline"],["href","mailto:danilo.hoffmann1+travelpacklist@googlemail.com","target","_blank","aria-label",n,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://img.shields.io/badge/email-danilo.hoffmann1%40googlemail.com-blue",1,"inline"],["href","https://ko-fi.com/danilohoffmann","target","_blank","aria-label",p,1,"accessible-content","inline-block"],["aria-hidden","true","src","https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png",1,"inline","max-w-[10rem]"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"p"),q(3,1),l(4,"a",4),d(5,"img",5),_(),Z(),_(),l(6,"p"),q(7,2),l(8,"a",6),d(9,"img",7),_(),Z(),_(),E(10,Ot,4,0,"p")),n&2&&(r(10),G(t.displayKoFi?10:-1));},styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();function ft(e,C){if(e&1&&L(0),e&2){let i=m();he(" ",i.versionCode," (",i.version,") ");}}function It(e,C){if(e&1&&L(0),e&2){let i=m();Y(" ",i.version," ");}}function Rt(e,C){if(e&1&&(l(0,"span",7),s(1,2),_()),e&2){let i=m();r(),ae(i.serviceWorkerStatus()),re(1);}}var Ye=(()=>{class e{state=P(O);displayServiceWorkerStatus=!0;displayVersionCode=!1;buildTime=1736510507666;version="0.5.0";gitHash="5639400a335d13b2ed497e2b02ef7eedc4a58e69";versionCode=15;currentVersionLabel="Die aktuelle Version ist "+this.version+"";gitHashLabel="Der aktuelle Git Hash startet mit "+this.gitHash.substring(0,8)+"";serviceWorkerStatus=W(()=>{switch(this.state.serviceWorkerStatus()){case"disabled":return"deaktiviert";case"error":return"Fehler";case"unrecoverable":return"nicht wiederherstellbar - bitte aktualisieren";case"init":return"initialisierend";case"ok":return"ok";case"update-available":return"Update verf\xFCgbar";}});static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config-version"]],decls:14,vars:11,consts:()=>{let i;i="App-Version";let n;n="gebaut am "+"\uFFFD0\uFFFD"+"";let t;return t="Service Worker: "+"\uFFFD0\uFFFD"+"",[i,n,t,[1,"accessible-content","inline-block","content-center",3,"href"],[1,"italic"],[1,"truncate","font-mono","text-sm","text-slate-500"],["aria-hidden","true"],[1,"font-mono","text-sm"]];},template:function(n,t){n&1&&(l(0,"h2"),s(1,0),_(),l(2,"span")(3,"a",3),E(4,ft,1,2)(5,It,1,1),_()(),l(6,"span",4),s(7,1),be(8,"date"),_(),l(9,"span",5)(10,"a",3)(11,"span",6),L(12),_()()(),E(13,Rt,2,1,"span",7)),n&2&&(r(3),h("href","https://github.com/dhhyi/travel-packlist/releases/tag/v"+t.version,oe),b("aria-label",t.currentVersionLabel),r(),G(t.displayVersionCode?4:5),r(4),ae(ye(8,8,t.buildTime,"long")),re(7),r(2),h("href","https://github.com/dhhyi/travel-packlist/commit/"+t.gitHash,oe),b("aria-label",t.gitHashLabel),r(2),X(t.gitHash),r(),G(t.displayServiceWorkerStatus?13:-1));},dependencies:[ke],styles:["[_nghost-%COMP%]{margin-bottom:.5rem;display:flex;flex-direction:column;gap:.5rem;border-bottom-width:1px;padding-bottom:.5rem}h2[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700}"],changeDetection:0});}return e;})();var ni=(()=>{class e{static ɵfac=function(n){return new(n||e)();};static ɵcmp=g({type:e,selectors:[["app-config"]],decls:7,vars:0,template:function(n,t){n&1&&d(0,"app-config-checklist")(1,"app-config-rules-editor")(2,"app-config-rules-import-export")(3,"app-config-appearance")(4,"app-config-version")(5,"app-config-support")(6,"app-config-dangerzone");},dependencies:[Be,qe,Ze,We,Ye,Qe,je],encapsulation:2,changeDetection:0});}return e;})();export{ni as default};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/