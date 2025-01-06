import{c as rt,d as ve}from"./chunk-bdcb943f.js";import{a as Be,b as de,c as We,d as je,e as Ye,k as He,m as ue,n as Je,p as me,r as Ze,s as et,t as tt}from"./chunk-ae456e05.js";import{b as X,c as ie,d as z,e as Ce,f as lt,g as fe,i as Te,j as Re,k as at,l as st,m as _t,n as Se,o as ct,p as he,q as Oe,r as ge}from"./chunk-b4a5fd47.js";import{a as it,b as nt,c as Q,d as L,e as G,f as pe,g as N,h as Z,i as Ee,j as ee,k as te,l as k,n as K,o as ot,q as g}from"./chunk-11777a4e.js";import{e as ze}from"./chunk-6bffe2e5.js";import{Aa as _,Ab as H,B as re,Bb as J,Da as D,Db as Ge,E as le,Eb as ke,Fa as be,Fb as Ke,Ga as qe,Ha as F,Kb as O,La as A,Mb as Xe,Pb as _e,Q as Me,Qa as m,T as ye,W as $e,Wb as h,Ya as f,Yb as x,Za as ae,_a as De,aa as R,ab as d,bb as Y,cb as Fe,db as w,eb as V,fb as a,fc as ce,gb as l,hb as C,ia as p,ib as Ue,ja as E,jb as T,l as oe,mb as S,nb as y,ob as $,p as Pe,pb as Ie,qb as u,rb as s,sa as b,ta as I,wb as U,x as Ve,xb as se,yb as Qe,zb as v}from"./chunk-61a88145.js";import"./chunk-677272e4.js";var Ae=(()=>{class n{parser=R(K);state=R(g);questions=this.state.signal("clipboardQuestions");items=this.state.signal("clipboardItems");itemsCount=h(()=>this.items().length);questionsCount=h(()=>this.questions().length);cutQuestion(e){this.questions.update(i=>[...i,e.toString()]);}cutItem(e){this.items.update(i=>[...i,e.toString()]);}paste(){let e={questions:this.questions().map(i=>this.parser.parseQuestion(i)),items:this.items().map(i=>this.parser.parseItem(i))};return this.questions.set([]),this.items.set([]),e;}static ɵfac=function(i){return new(i||n)();};static ɵprov=$e({token:n,factory:n.ɵfac,providedIn:"root"});}return n;})();var ft=["content"],Tt=["keyword"],Rt=["variable"],St=["select"],ht=n=>({width:n});function gt(n,r){if(n&1&&(a(0,"span",5),v(1),l()),n&2){let e=r.$implicit;_(),H(e);}}function At(n,r){if(n&1&&(a(0,"span",6),v(1),l()),n&2){let e=r.$implicit,i=s();ae("text-green",i.highlighVariable()&&i.variableActive(e))("text-red",i.highlighVariable()&&!i.variableActive(e)),_(),H(e);}}function Pt(n,r){if(n&1&&(a(0,"option",8),v(1),l()),n&2){let e=s(2).$implicit,i=s();f("value",i.NOT),_(),J("NOT ",i.variablePlaceholder(e),"");}}function bt(n,r){if(n&1&&(a(0,"option",8),v(1),l()),n&2){let e=s(2).$implicit,i=s();f("value",i.AND),_(),J("",i.variablePlaceholder(e)," AND x");}}function It(n,r){if(n&1&&(a(0,"option",8),v(1),l()),n&2){let e=s(2).$implicit,i=s();f("value",i.OR),_(),J("",i.variablePlaceholder(e)," OR x");}}function vt(n,r){if(n&1&&(a(0,"option",8),v(1,"REMOVE"),l()),n&2){let e=s(4);f("value",e.REMOVE);}}function Ot(n,r){if(n&1&&m(0,vt,2,1,"option",8),n&2){let e=s(2).$implicit,i=s();d(e!==i.PLEASE_SELECT?0:-1);}}function xt(n,r){if(n&1&&(a(0,"option",9),v(1),l()),n&2){let e=s().$implicit,i=s().$implicit,t=s();f("value",e)("selected",i===e)("disabled",e===t.PLEASE_SELECT),_(),J(" ",e," ");}}function Lt(n,r){if(n&1&&m(0,Pt,2,2,"option",8)(1,bt,2,2,"option",8)(2,It,2,2,"option",8)(3,Ot,1,1)(4,xt,2,4,"option",9),n&2){let e,i=r.$implicit,t=s(2);d((e=i)===t.NOT?0:e===t.AND?1:e===t.OR?2:e===t.REMOVE?3:4);}}function Nt(n,r){if(n&1){let e=T();a(0,"select",7,4),u("change",function(){let t=p(e),o=t.$implicit,c=t.selection,P=Qe(1);return E(c(P.value,o));}),w(2,Lt,5,1,null,null,Y),l();}if(n&2){let e=r.options,i=r.width;De(O(2,ht,i)),_(2),V(e);}}var xe="NOT",Le="AND",Ne="OR",we="REMOVE",dt=(()=>{class n{condition=I.required();selectVariables=I.required();content=F.required("content",{read:be});keywordTemplate=F.required("keyword",{read:D});variableTemplate=F.required("variable",{read:D});selectTemplate=F.required("select",{read:D});state=R(g);activeAnswers=this.state.signal("activeAnswers");mode=this.state.signal("rulesMode");highlighVariable=h(()=>this.mode()!=="edit"&&this.state.signal("highlightVariableStatus")());serializedCondition=h(()=>this.condition().toString());PLEASE_SELECT=N.string;ALWAYS=Z.string;NOT=xe;AND=Le;OR=Ne;REMOVE=we;conditionChanged=b();constructor(){x(()=>{this.mode(),this.condition(),this.selectVariables(),this.repaint();});}repaint(){this.content().clear(),this.paintKeyword("IF"),this.paintCondition(this.condition(),e=>{e?this.conditionChanged.emit(e):this.conditionChanged.emit(new N());});}calculateOptions(e){return[this.PLEASE_SELECT,this.ALWAYS,...this.selectVariables(),this.NOT,this.AND,this.OR,this.REMOVE].filter(i=>!e.includes(i));}createFromPrevious(e){return e===this.PLEASE_SELECT||e===this.ALWAYS?new N():new pe(e);}selection(e,i){return e===this.NOT?new Ee(this.createFromPrevious(i)):e===this.AND?new ee(this.createFromPrevious(i),new N()):e===this.OR?new te(this.createFromPrevious(i),new N()):e===this.REMOVE?null:e===this.ALWAYS?new Z():new pe(e);}paintKeyword(e){this.content().createEmbeddedView(this.keywordTemplate(),{$implicit:e});}paintSelect(e,i,t){this.content().createEmbeddedView(this.selectTemplate(),{$implicit:e,options:this.calculateOptions(t),selection:(o,c)=>{i(this.selection(o,c));},width:(e.length*9+30).toString()+"px"});}paintVariable(e){this.content().createEmbeddedView(this.variableTemplate(),{$implicit:e});}paintCondition(e,i,t=[]){if(e instanceof Ee){let o=t.filter(c=>c!==this.ALWAYS);this.paintKeyword("NOT"),this.paintCondition(e.not,c=>{i(c?new Ee(c):null);},o);}else if(e instanceof ee){let o=[...t,this.ALWAYS];this.paintCondition(e.left,c=>{i(c?new ee(c,e.right):e.right);},o),this.paintKeyword("AND"),this.paintCondition(e.right,c=>{i(c?new ee(e.left,c):e.left);},o);}else if(e instanceof te){let o=[...t,this.ALWAYS];this.paintCondition(e.left,c=>{i(c?new te(c,e.right):e.right);},o),this.paintKeyword("OR"),this.paintCondition(e.right,c=>{i(c?new te(e.left,c):e.left);},o);}else e instanceof pe&&(this.mode()==="edit"?this.paintSelect(e.variable,i,t):this.paintVariable(e.variable));}variableActive(e){return this.activeAnswers()[e];}variablePlaceholder(e){return e===this.ALWAYS||e===this.PLEASE_SELECT?"x":e;}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-editor-condition"]],viewQuery:function(i,t){i&1&&(U(t.content,ft,5,be),U(t.keywordTemplate,Tt,5,D),U(t.variableTemplate,Rt,5,D),U(t.selectTemplate,St,5,D)),i&2&&se(4);},inputs:{condition:[1,"condition"],selectVariables:[1,"selectVariables"]},outputs:{conditionChanged:"conditionChanged"},decls:8,vars:0,consts:[["content",""],["keyword",""],["variable",""],["select",""],["selectbox",""],[1,"font-bold"],[1,"font-mono","font-bold"],[1,"font-mono",3,"change"],[3,"value"],[3,"value","selected","disabled"]],template:function(i,t){i&1&&(Ue(0,null,0),m(2,gt,2,1,"ng-template",null,1,_e)(4,At,2,5,"ng-template",null,2,_e)(6,Nt,4,4,"ng-template",null,3,_e));},styles:["[_nghost-%COMP%]{display:flex;min-height:2rem;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:.5rem}"],changeDetection:0});}return n;})();function wt(n,r){if(n&1&&(a(0,"option",4),v(1),l()),n&2){let e=r.$implicit;f("value",e),_(),H(e);}}function Vt(n,r){n&1&&(a(0,"span"),S(1,0),l()),n&2&&(_(),y(r),$(1));}function Mt(n,r){n&1&&(a(0,"span"),S(1,1),l());}function yt(n,r){if(n&1&&m(0,Vt,2,1,"span")(1,Mt,2,0,"span"),n&2){let e,i=s(2);d((e=i.form.controls.name.errors==null?null:i.form.controls.name.errors.pattern)?0:-1,e),_(),d(i.form.controls.name.errors!=null&&i.form.controls.name.errors.required?1:-1);}}function $t(n,r){if(n&1&&(a(0,"div",7),m(1,yt,2,2),l()),n&2){let e=s();_(),d(e.form.controls.name.touched?1:-1);}}var mt=(()=>{class n{item=I.required();state=R(g);mode=this.state.signal("rulesMode");categories=this.state.signal("categories");itemChanged=b();fb=R(Se).nonNullable;form=this.fb.group({category:this.fb.control(""),name:this.fb.control("",{validators:[this.validateNamePattern(),ie.required.bind(this)]})});parser=R(K);constructor(){x(()=>{this.item(),this.reset();});let e=ge(this.form.valueChanges.pipe(le(500),re(()=>this.form.valid)));x(()=>{let i=e();if(!i?.name)return;if(!i.category){this.addNewCategory();return;}let t=new G(i.category,i.name).toString();this.itemChanged.emit(this.parser.parseItem(t));}),x(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}blockPatch=!1;reset(){if(!this.blockPatch){let e=this.item().name;this.item().weight&&(e+=` ${nt(this.item().weight)}`),this.form.patchValue({category:this.item().category,name:e},{emitEvent:!1});}}focus(e){this.blockPatch=document.activeElement===e.target,this.form.controls.name.value===G.NEW_ITEM_NAME&&this.form.controls.name.setValue("",{emitEvent:!1});}blur(){this.blockPatch=!1,this.reset();}async addNewCategory(e=""){let i=await rt("Enter new category name",e);if(i)try{this.parser.validateCategoryName(i),this.form.patchValue({category:i});}catch(t){if(t instanceof k){let o=t.found;await ve("Kategorie darf '"+o+"' nicht enthalten");}else console.error(t),await ve("Unzul\xE4ssiger Kategoriename");this.addNewCategory(i);}else this.reset();}validateNamePattern(){return e=>{let i=e.value?.trim()??"";try{return this.parser.validateItemNameAndWeight(i),null;}catch(t){return e.markAsTouched(),t instanceof k?{pattern:t.found}:{pattern:!0};}};}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-editor-item"]],inputs:{item:[1,"item"]},outputs:{itemChanged:"itemChanged"},decls:8,vars:2,consts:()=>{let e;e="Name darf das Zeichen '"+"\uFFFD0\uFFFD"+"' nicht enthalten";let i;return i="Artikelname ist erforderlich",[e,i,[1,"flex",3,"formGroup"],["name","categories","formControlName","category",1,"max-w-[5rem]"],[3,"value"],["value",""],["type","text","formControlName","name",1,"w-0","flex-1",3,"focus","blur"],[1,"text-red-light","m-1","text-sm"]];},template:function(i,t){i&1&&(a(0,"form",2)(1,"select",3),w(2,wt,2,2,"option",4,Fe),a(4,"option",5),v(5,"+"),l()(),a(6,"input",6),u("focus",function(c){return t.focus(c);})("blur",function(){return t.blur();}),l()(),m(7,$t,2,1,"div",7)),i&2&&(f("formGroup",t.form),_(2),V(t.categories()),_(5),d(t.mode()==="edit"&&t.form.valid===!1&&t.form.touched?7:-1));},dependencies:[he,fe,st,_t,X,at,z,Ce,Te,Re],encapsulation:2,changeDetection:0});}return n;})();function qt(n,r){n&1&&(a(0,"span"),S(1,0),l()),n&2&&(_(),y(r),$(1));}function Dt(n,r){n&1&&(a(0,"span"),S(1,1),l());}function Ft(n,r){n&1&&(a(0,"span"),S(1,2),l());}function Ut(n,r){if(n&1&&(a(0,"span"),S(1,3),l()),n&2){let e=s();_(),y(e),$(1);}}function Qt(n,r){n&1&&m(0,Ft,2,0,"span")(1,Ut,2,1,"span"),n&2&&d(r===" "?0:1);}function Gt(n,r){n&1&&(a(0,"span"),S(1,4),l());}function kt(n,r){n&1&&(a(0,"span"),S(1,5),l());}function Kt(n,r){n&1&&(a(0,"span"),S(1,6),l());}function Xt(n,r){if(n&1&&(a(0,"div",12),m(1,qt,2,1,"span")(2,Dt,2,0,"span")(3,Qt,2,1)(4,Gt,2,0,"span")(5,kt,2,0,"span")(6,Kt,2,0,"span"),l()),n&2){let e,i,t=s();_(),d((e=t.form.controls.question.errors==null?null:t.form.controls.question.errors.pattern)?1:-1,e),_(),d(t.form.controls.question.errors!=null&&t.form.controls.question.errors.required?2:-1),_(),d((i=t.form.controls.variable.errors==null?null:t.form.controls.variable.errors.pattern)?3:-1,i),_(),d(t.form.controls.variable.errors!=null&&t.form.controls.variable.errors.required?4:-1),_(),d(t.form.controls.variable.errors!=null&&t.form.controls.variable.errors.reserved?5:-1),_(),d(t.form.controls.variable.errors!=null&&t.form.controls.variable.errors.used?6:-1);}}var pt=(()=>{class n{question=I.required();parser=R(K);state=R(g);variables=this.state.signal("variables");mode=this.state.signal("rulesMode");highlighVariable=h(()=>this.mode()!=="edit"&&this.state.signal("highlightVariableStatus")());variableActive=h(()=>this.state.signal("activeAnswers")()[this.question().variable]);refactorVariables=this.state.signal("refactorVariables");questionChanged=b();variableChanged=b();fb=R(Se).nonNullable;form=this.fb.group({question:this.fb.control("",{validators:[this.validateQuestionPattern(),ie.required.bind(this)]}),variable:this.fb.control("",{validators:[this.validateVariablePattern(),zt(),ie.required.bind(this)],asyncValidators:[Bt(Oe(this.variables),Oe(this.question))]})});constructor(){x(()=>{this.question(),this.reset();});let e=ge(this.form.valueChanges.pipe(le(500),re(()=>this.form.valid)));x(()=>{let i=e();i?.question&&i.question!==this.question().question&&i.variable?this.questionChanged.emit(new L(i.question,i.variable)):i?.variable&&i.variable.trim()!==this.question().variable&&(this.question().variable===L.NEW_VARIABLE_NAME||!this.refactorVariables()?this.questionChanged.emit(new L(this.question().question,i.variable.trim())):this.variableChanged.emit([this.question().variable,i.variable.trim()]));}),x(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}reset(){this.form.patchValue(this.question(),{emitEvent:!1});}focusQuestion(){this.form.controls.question.value===L.NEW_QUESTION_NAME&&this.form.controls.question.setValue("",{emitEvent:!1});}focusVariable(){this.form.controls.variable.value===L.NEW_VARIABLE_NAME&&this.form.controls.variable.setValue("",{emitEvent:!1});}validateVariablePattern(){return e=>{let i=e.value?.trim()??"";try{return this.parser.validateVariableName(i),null;}catch(t){return e.markAsTouched(),t instanceof k?{pattern:t.found}:{pattern:!0};}};}validateQuestionPattern(){return e=>{let i=e.value?.trim()??"";try{return this.parser.validateQuestionString(i),null;}catch(t){return e.markAsTouched(),t instanceof k?{pattern:t.found}:{pattern:!0};}};}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-editor-question"]],inputs:{question:[1,"question"]},outputs:{questionChanged:"questionChanged",variableChanged:"variableChanged"},decls:6,vars:6,consts:()=>{let e;e="Frage";let i;i="Variable";let t;t="Fragen k\xF6nnen dieses Zeichen nicht enthalten: '"+"\uFFFD0\uFFFD"+"'";let o;o="Frage ist erforderlich";let c;c="Variablen d\xFCrfen keine Leerzeichen enthalten";let P;P="Variablen k\xF6nnen dieses Zeichen nicht enthalten: '"+"\uFFFD0\uFFFD"+"'";let q;q="Variablenname ist erforderlich";let j;j="Dieser Variablenname ist reserviert";let ne;return ne="Dieser Variablenname wird bereits verwendet",[t,o,c,P,q,j,ne,[1,"flex","flex-col",3,"formGroup"],["type","text","placeholder",e,"formControlName","question",1,"grow",3,"focus"],[1,"flex","items-center","gap-2"],[1,"ml-2","h-4"],["type","text","placeholder",i,"formControlName","variable",1,"grow","font-mono","font-bold",3,"focus"],[1,"text-red","m-1","flex","flex-col","text-sm"]];},template:function(i,t){i&1&&(a(0,"form",7)(1,"input",8),u("focus",function(){return t.focusQuestion();}),l(),a(2,"div",9),C(3,"app-icon-arrow-forward",10),a(4,"input",11),u("focus",function(){return t.focusVariable();}),l()(),m(5,Xt,7,6,"div",12),l()),i&2&&(f("formGroup",t.form),_(4),ae("text-green",t.highlighVariable()&&t.variableActive())("text-red",t.highlighVariable()&&!t.variableActive()),_(),d(t.mode()==="edit"&&t.form.valid===!1&&t.form.touched?5:-1));},dependencies:[he,fe,X,z,Ce,Te,Re,et],encapsulation:2,changeDetection:0});}return n;})();function zt(){return n=>[Z.string,xe,Le,Ne,we].some(r=>r===n.value?.trim())?{reserved:!0}:null;}function Bt(n,r){return e=>oe(e.value).pipe(ye(n.pipe(Pe(i=>[...i])),r),Me(([i,t,o])=>Ve(()=>!t.find(c=>c===o.variable),oe(null),oe([i,t,o]).pipe(Pe(([c,P,q])=>{let j=P.findIndex(ne=>ne===q.variable);return P.splice(j,1),P.includes(c?.trim()??"")?{used:!0}:null;})))));}function Wt(n,r){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s();return E(t.resetCondition());}),C(1,"app-icon-clear"),l();}}function jt(n,r){if(n&1){let e=T();a(0,"button",11),u("click",function(){p(e);let t=s(2).$index,o=s();return E(o.swapQuestions(t,t+1));}),C(1,"app-icon-arrow-downward"),l();}}function Yt(n,r){n&1&&C(0,"span",10);}function Ht(n,r){if(n&1&&m(0,jt,2,0,"button",9)(1,Yt,1,0,"span",10),n&2){let e=s().$index,i=s();d(e<i.rule().questions.length-1?0:1);}}function Jt(n,r){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s().$index,o=s();return E(o.deleteQuestion(t));}),C(1,"app-icon-delete"),l();}}function Zt(n,r){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s().$index,o=s();return E(o.cutQuestion(t));}),C(1,"app-icon-cut"),l();}}function ei(n,r){if(n&1){let e=T();a(0,"button",11),u("click",function(){p(e);let t=s().$index,o=s();return E(o.swapQuestions(t-1,t));}),C(1,"app-icon-arrow-upward"),l();}}function ti(n,r){if(n&1){let e=T();a(0,"div",2),m(1,Ht,2,1),a(2,"app-editor-question",8),u("questionChanged",function(t){let o=p(e).$index,c=s();return E(c.updateQuestion(o,t));})("variableChanged",function(t){p(e);let o=s();return E(o.variableChanged(t));}),l(),m(3,Jt,2,0,"button",4)(4,Zt,2,0,"button",4)(5,ei,2,0,"button",9),l();}if(n&2){let e=r.$implicit,i=r.$index,t=s();_(),d(t.mode()==="swap"&&t.rule().questions.length>1?1:-1),_(),f("question",e),_(),d(t.mode()==="delete"?3:t.mode()==="cut-paste"?4:t.mode()==="swap"&&i>0?5:-1);}}function ii(n,r){if(n&1){let e=T();a(0,"button",11),u("click",function(){p(e);let t=s(2).$index,o=s();return E(o.swapItems(t,t+1));}),C(1,"app-icon-arrow-downward"),l();}}function ni(n,r){n&1&&C(0,"span",10);}function oi(n,r){if(n&1&&m(0,ii,2,0,"button",9)(1,ni,1,0,"span",10),n&2){let e=s().$index,i=s();d(e<i.rule().items.length-1?0:1);}}function ri(n,r){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s().$index,o=s();return E(o.deleteItem(t));}),C(1,"app-icon-delete"),l();}}function li(n,r){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s().$index,o=s();return E(o.cutItem(t));}),C(1,"app-icon-cut"),l();}}function ai(n,r){if(n&1){let e=T();a(0,"button",11),u("click",function(){p(e);let t=s().$index,o=s();return E(o.swapItems(t-1,t));}),C(1,"app-icon-arrow-upward"),l();}}function si(n,r){if(n&1){let e=T();a(0,"div",2),m(1,oi,2,1),a(2,"app-editor-item",12),u("itemChanged",function(t){let o=p(e).$index,c=s();return E(c.updateItem(o,t));}),l(),m(3,ri,2,0,"button",4)(4,li,2,0,"button",4)(5,ai,2,0,"button",9),l();}if(n&2){let e=r.$implicit,i=r.$index,t=s();_(),d(t.mode()==="swap"&&t.rule().items.length>1?1:-1),_(),f("item",e),_(),d(t.mode()==="delete"?3:t.mode()==="cut-paste"?4:t.mode()==="swap"&&i>0?5:-1);}}function _i(n,r){if(n&1){let e=T();a(0,"div",5)(1,"button",13),u("click",function(){p(e);let t=s();return E(t.addQuestion());}),S(2,0),l(),a(3,"button",13),u("click",function(){p(e);let t=s();return E(t.addItem());}),S(4,1),l()();}}function ci(n,r){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s(2);return E(t.deleteRule.emit());}),C(1,"app-icon-delete"),l();}}function di(n,r){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s(2);return E(t.paste());}),C(1,"app-icon-paste"),l();}}function ui(n,r){if(n&1&&(a(0,"div",6),m(1,ci,2,0,"button",4)(2,di,2,0,"button",4),l()),n&2){let e=s();_(),d(e.mode()==="delete"?1:-1),_(),d(e.mode()==="cut-paste"?2:-1);}}var Et=(()=>{class n{rule=I.required();ruleChanged=b();deleteRule=b();renameVariable=b();state=R(g);mode=this.state.signal("rulesMode");selectVariables=h(()=>{let e=this.rule().questions.map(t=>t.variable);return this.state.get("variables").filter(t=>!e.includes(t));});clipboard=R(Ae);resetCondition(){this.updateCondition(new N());}updateCondition(e){let i=new Q(e,this.rule().questions,this.rule().items);this.ruleChanged.emit(i);}emitNewQuestions(e){let i=new Q(this.rule().condition,e,this.rule().items);this.ruleChanged.emit(i);}updateQuestion(e,i){let t=this.rule().questions;t[e]=i,this.emitNewQuestions(t);}addQuestion(){let e=new L(L.NEW_QUESTION_NAME,L.NEW_VARIABLE_NAME);this.updateQuestion(this.rule().questions.length,e);}deleteQuestion(e){let i=this.rule().questions;i.splice(e,1),this.emitNewQuestions(i);}cutQuestion(e){let i=this.rule().questions[e];this.deleteQuestion(e),this.clipboard.cutQuestion(i);}swapQuestions(e,i){let t=this.rule().questions,o=t[e];t[e]=t[i],t[i]=o,this.emitNewQuestions(t);}emitNewItems(e){let i=new Q(this.rule().condition,this.rule().questions,e);this.ruleChanged.emit(i);}updateItem(e,i){let t=this.rule().items;t[e]=i,this.emitNewItems(t);}addItem(){let e=new G(G.NEW_CATEGORY_NAME,G.NEW_ITEM_NAME);this.updateItem(this.rule().items.length,e);}deleteItem(e){let i=this.rule().items;i.splice(e,1),this.emitNewItems(i);}cutItem(e){let i=this.rule().items[e];this.deleteItem(e),this.clipboard.cutItem(i);}swapItems(e,i){let t=this.rule().items,o=t[e];t[e]=t[i],t[i]=o,this.emitNewItems(t);}paste(){let{questions:e,items:i}=this.clipboard.paste(),t=new Q(this.rule().condition,[...this.rule().questions,...e],[...this.rule().items,...i]);this.ruleChanged.emit(t);}variableChanged([e,i]){this.renameVariable.emit([e,i]);}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-editor-rule"]],inputs:{rule:[1,"rule"]},outputs:{ruleChanged:"ruleChanged",deleteRule:"deleteRule",renameVariable:"renameVariable"},decls:9,vars:4,consts:()=>{let e;e="+ Frage";let i;return i="+ Gegenstand",[e,i,[1,"mb-1","flex","items-center"],[1,"accessible-content","grow",3,"conditionChanged","condition","selectVariables"],["type","button",1,"link"],[1,"flex","justify-end","gap-2"],[1,"flex","justify-center"],["type","button",1,"link",3,"click"],[1,"grow",3,"questionChanged","variableChanged","question"],["type","button",1,"link","p-1"],[1,"ml-6"],["type","button",1,"link","p-1",3,"click"],[1,"grow",3,"itemChanged","item"],["type","button",1,"h-8",3,"click"]];},template:function(i,t){i&1&&(a(0,"div",2)(1,"app-editor-condition",3),u("conditionChanged",function(c){return t.updateCondition(c);}),l(),m(2,Wt,2,0,"button",4),l(),w(3,ti,6,3,"div",2,Y),w(5,si,6,3,"div",2,Y),m(7,_i,5,0,"div",5)(8,ui,3,2,"div",6)),i&2&&(_(),f("condition",t.rule().condition)("selectVariables",t.selectVariables()),_(),d(t.mode()==="edit"?2:-1),_(),V(t.rule().questions),_(2),V(t.rule().items),_(2),d(t.mode()==="edit"?7:8));},dependencies:[dt,pt,mt,ue,Je,Ye,me,tt,Ze],encapsulation:2,changeDetection:0});}return n;})();var mi=["searchInput"],pi=n=>({"sticky left-0 top-0 z-30 shadow-md":n}),W=n=>({active:n});function Ei(n,r){if(n&1&&(a(0,"span"),S(1,2),l()),n&2){let e=r;_(),y(e)(e),$(1);}}function Ci(n,r){if(n&1&&(a(0,"span"),S(1,3),l()),n&2){let e=r;_(),y(e)(e),$(1);}}function fi(n,r){if(n&1&&(a(0,"div",10)(1,"span"),S(2,1),l(),m(3,Ei,2,2,"span")(4,Ci,2,2,"span"),l()),n&2){let e,i,t=s(2);_(3),d((e=t.clipboard.itemsCount())?3:-1,e),_(),d((i=t.clipboard.questionsCount())?4:-1,i);}}function Ti(n,r){if(n&1&&m(0,fi,5,2,"div",10),n&2){let e=s();d(e.clipboard.itemsCount()>0||e.clipboard.questionsCount()>0?0:-1);}}function Ri(n,r){if(n&1){let e=T();a(0,"div",9)(1,"input",11,0),Ke("ngModelChange",function(t){p(e);let o=s();return ke(o.searchTerm,t)||(o.searchTerm=t),E(t);}),l(),a(3,"button",12),u("click",function(){p(e);let t=s();return E(t.clearSearch());}),C(4,"app-icon-clear",13),l()();}if(n&2){let e=s();_(),Ge("ngModel",e.searchTerm);}}var Ct=(()=>{class n{noOfVisibleRules=I.required();state=R(g);mode=this.state.signal("rulesMode");searchTerm=this.state.signal("filterRulesQuery");clipboard=R(Ae);sticky=h(()=>this.state.signal("scrollY")()>48);searchInput=F.required("searchInput");focusSearch(){setTimeout(()=>{this.searchInput().nativeElement.focus();},50);}clearSearch(){this.searchTerm.set(""),this.focusSearch();}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-toolbar"]],viewQuery:function(i,t){i&1&&U(t.searchInput,mi,5),i&2&&se();},inputs:{noOfVisibleRules:[1,"noOfVisibleRules"]},decls:16,vars:26,consts:()=>{let e;e="Zwischenablage:";let i;i="{VAR_PLURAL, plural, one {1 Gegenstand} other {{INTERPOLATION} Gegenst\xE4nde}}",i=Ie(i,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"});let t;return t="{VAR_PLURAL, plural, one {1 Frage} other {{INTERPOLATION} Fragen}}",t=Ie(t,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"}),[["searchInput",""],e,i,t,[1,"bg-active","py-2",3,"ngClass"],[1,"mb-1","grid","grid-cols-6","gap-2"],["type","button",1,"link",3,"click","ngClass"],[1,"my-auto","h-6","w-6"],["type","button",1,"link",3,"click","ngClass","disabled"],[1,"mt-2","flex","items-center"],[1,"mt-2","flex","justify-center","gap-4"],["type","text",1,"grow",3,"ngModelChange","ngModel"],["type","button",1,"link",3,"click"],[1,"h-6","w-6"]];},template:function(i,t){i&1&&(a(0,"div",4)(1,"div",5)(2,"button",6),u("click",function(){return t.mode.set("view");}),C(3,"app-icon-view",7),l(),a(4,"button",8),u("click",function(){return t.mode.set("edit");}),C(5,"app-icon-edit",7),l(),a(6,"button",8),u("click",function(){return t.mode.set("delete");}),C(7,"app-icon-delete",7),l(),a(8,"button",8),u("click",function(){return t.mode.set("cut-paste");}),C(9,"app-icon-reorder",7),l(),a(10,"button",8),u("click",function(){return t.mode.set("swap");}),C(11,"app-icon-swap",7),l(),a(12,"button",6),u("click",function(){return t.mode.set("search"),t.focusSearch();}),C(13,"app-icon-search",7),l()(),m(14,Ti,1,1)(15,Ri,5,1,"div",9),l()),i&2&&(f("ngClass",O(12,pi,t.sticky())),_(2),f("ngClass",O(14,W,t.mode()==="view")),_(2),f("ngClass",O(16,W,t.mode()==="edit"))("disabled",!t.noOfVisibleRules()&&!!t.searchTerm()),_(2),f("ngClass",O(18,W,t.mode()==="delete"))("disabled",!t.noOfVisibleRules()),_(2),f("ngClass",O(20,W,t.mode()==="cut-paste"))("disabled",t.noOfVisibleRules()<2&&!t.clipboard.itemsCount()&&!t.clipboard.questionsCount()),_(2),f("ngClass",O(22,W,t.mode()==="swap"))("disabled",!t.noOfVisibleRules()),_(2),f("ngClass",O(24,W,t.mode()==="search")),_(2),d(t.mode()==="cut-paste"?14:t.mode()==="search"||t.searchTerm()?15:-1));},dependencies:[ct,X,z,lt,ce,Be,He,ue,je,de,We,me],encapsulation:2,changeDetection:0});}return n;})();var Si=(n,r)=>r.index,hi=(n,r,e,i)=>({disabled:n,"animate-pulse":r,"mb-[2.25rem]":e,"mb-12":i});function gi(n,r){if(n&1){let e=T();a(0,"div",4)(1,"div",7)(2,"p"),S(3,0),l(),a(4,"button",8),u("click",function(){p(e);let t=s();return E(t.addRuleAndEdit());}),S(5,1),l()()();}}function Ai(n,r){if(n&1){let e=T();a(0,"div",9)(1,"button",12),u("click",function(){p(e);let t=s().$implicit,o=s();return E(o.swapRules(t.index-1,t.index));}),C(2,"app-icon-swap"),l()();}}function Pi(n,r){if(n&1){let e=T();m(0,Ai,3,0,"div",9),a(1,"div",10)(2,"app-editor-rule",11),u("ruleChanged",function(t){let o=p(e).$implicit,c=s();return E(c.updateRule(o.index,t));})("deleteRule",function(){let t=p(e).$implicit,o=s();return E(o.deleteRule(t.index));})("renameVariable",function(t){p(e);let o=s();return E(o.renameVariable(t));}),l()();}if(n&2){let e=r.$implicit,i=s();d(e.index>0&&i.mode()==="swap"&&!i.filter()?0:-1),_(),f("id","rule-"+e.index)("ngClass",Xe(4,hi,i.showAsDisabled(e.rule),i.highlightRule()===e.index,(i.mode()==="view"||i.mode()==="search")&&i.accessibility()==="compact",(i.mode()==="view"||i.mode()==="search")&&i.accessibility()==="accessible")),_(),f("rule",e.rule);}}function bi(n,r){if(n&1){let e=T();a(0,"button",13),u("click",function(){p(e);let t=s();return E(t.addRule());}),S(1,2),l();}}function Ii(n,r){n&1&&(a(0,"a",6),C(1,"img",14),l());}var $n=(()=>{class n{refactor=R(ot);state=R(g);parsedRules=this.state.signal("parsedRules");activeRules=this.state.signal("activeRules");mode=this.state.signal("rulesMode");accessibility=this.state.signal("accessibility");filter=this.state.signal("filterRulesQuery");highlightRule=qe(void 0);visibleRules=h(()=>this.filter()===""?this.parsedRules().map((i,t)=>({rule:i,index:t})):this.parsedRules().map((i,t)=>({rule:i,index:t})).filter(i=>{let t=this.filter();return!t||this.refactor.contains(i.rule,t);}));goToPacklistButtonVisible=h(()=>this.state.signal("scrollY")()>100);updateRules(e){let i=it(e);this.state.set("rules",i);}updateRule(e,i){let t=this.parsedRules();t[e]=i,this.updateRules([...t]);}deleteRule(e){let i=this.parsedRules();i.splice(e,1),this.updateRules([...i]);}addRule(){let e=this.parsedRules().length,i=[];for(let c=0;c<this.parsedRules().length;c++){let P=document.querySelector(`#rule-${c.toString()}`);if(P){let q=P.getBoundingClientRect();q.top>=0&&q.bottom<=window.innerHeight&&i.push(c);}}i.includes(e-1)||(e=i[0]+1);let t=new Q(new N()),o=this.parsedRules();o.splice(e,0,t),this.updateRules([...o]),this.highlightRule.set(e),setTimeout(()=>{this.highlightRule.set(void 0);},4e3);}addRuleAndEdit(){this.addRule(),this.mode.set("edit");}swapRules(e,i){let t=this.parsedRules(),o=t[e];t[e]=t[i],t[i]=o,this.updateRules([...t]);}showAsDisabled(e){return this.state.get("fadeOutDisabledRules")&&!this.activeRules().includes(e);}renameVariable([e,i]){let t=this.refactor.renameVariable(e,i,this.parsedRules());this.updateRules(t);}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-rules"]],decls:6,vars:4,consts:()=>{let e;e="Es sind noch keine Regeln definiert.";let i;i="+ Regel";let t;t="+ Regel";let o;return o="application icon",[e,i,t,[3,"noOfVisibleRules"],[1,"flex","h-[calc(100vh-4rem)]","items-center","justify-center"],["type","button",1,"fixed","bottom-2","z-50"],["routerLink","/packlist",1,"fixed","bottom-2","right-2","z-50"],[1,"flex","flex-col","items-center","gap-6"],["type","button",3,"click"],[1,"flex","justify-center"],[1,"card","mb-1",3,"id","ngClass"],[3,"ruleChanged","deleteRule","renameVariable","rule"],["type","button",1,"link",3,"click"],["type","button",1,"fixed","bottom-2","z-50",3,"click"],["alt",o,"src","icon.svg",1,"h-12"]];},template:function(i,t){i&1&&(C(0,"app-toolbar",3),m(1,gi,6,0,"div",4),w(2,Pi,3,9,null,null,Si),m(4,bi,2,0,"button",5)(5,Ii,2,0,"a",6)),i&2&&(f("noOfVisibleRules",t.visibleRules().length),_(),d(t.visibleRules().length?-1:1),_(),V(t.visibleRules()),_(2),d(t.mode()==="edit"&&!t.filter()&&t.visibleRules().length?4:-1),_(),d(t.goToPacklistButtonVisible()?5:-1));},dependencies:[Et,Ct,de,ce,ze],encapsulation:2,changeDetection:0});}return n;})();export{$n as default};/**i18n:253d824a50230d6ba1c36645bd1a1a9583d181ff130b02f7f13f99994d3f2743*/