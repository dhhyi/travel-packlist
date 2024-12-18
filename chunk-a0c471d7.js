import{c as nt,d as Oe}from"./chunk-1328b0cb.js";import{c as Be,d as We,e as je,g as me,i as Ye,j as pe,l as He,r as Je,s as Ze,t as et,u as Ce,v as tt}from"./chunk-05f78ef0.js";import{a as Ne,b as Te,d as j,e as re,f as Y,g as he,h as ot,i as Se,l as ge,m as Re,n as rt,o as at,p as lt,q as Ae,r as st,s as be}from"./chunk-f1ad7e9d.js";import{a as K,b as N,c as X,d as Ee,e as w,f as ie,g as fe,h as ne,i as oe,j as W,l as Q,m as L,n as it,p as A}from"./chunk-478eee41.js";import{e as Xe}from"./chunk-a1592053.js";import{$a as u,Aa as _,B as se,Bb as ke,Cb as ze,Da as G,Db as Ke,E as _e,Fa as Ie,Ga as ce,Ha as k,Ib as x,Jb as B,Ka as b,Mb as de,Pa as m,Q as $e,T as qe,Tb as g,Vb as O,W as Fe,Xa as p,Za as De,aa as C,ab as ee,bb as Qe,cb as V,cc as D,db as M,eb as l,fb as a,gb as T,hb as Ue,ia as E,ib as h,ja as f,l as le,lb as S,mb as $,nb as q,ob as xe,p as ve,pb as d,qb as s,sa as v,ta as I,ub as z,vb as ue,wb as Ge,x as ye,xb as R,yb as F,zb as te}from"./chunk-61d1b8f0.js";import"./chunk-be8120ea.js";var Ct=["content"],Et=["keyword"],ft=["variable"],Tt=["select"],ht=(n,o,e)=>({"font-bold":n,"text-green-light":o,"text-red-light":e}),St=n=>({width:n});function gt(n,o){if(n&1&&(l(0,"span",5),R(1),a()),n&2){let e=o.$implicit;_(),F(e);}}function Rt(n,o){if(n&1&&(l(0,"span",6),R(1),a()),n&2){let e=o.$implicit,t=s();p("ngClass",B(2,ht,t.highlighVariable(),t.highlighVariable()&&t.variableActive(e),t.highlighVariable()&&!t.variableActive(e))),_(),F(e);}}function At(n,o){if(n&1&&(l(0,"option",8),R(1),a()),n&2){let e=s(2).$implicit,t=s();p("value",t.NOT),_(),te("NOT ",t.variablePlaceholder(e),"");}}function bt(n,o){if(n&1&&(l(0,"option",8),R(1),a()),n&2){let e=s(2).$implicit,t=s();p("value",t.AND),_(),te("",t.variablePlaceholder(e)," AND x");}}function Pt(n,o){if(n&1&&(l(0,"option",8),R(1),a()),n&2){let e=s(2).$implicit,t=s();p("value",t.OR),_(),te("",t.variablePlaceholder(e)," OR x");}}function vt(n,o){if(n&1&&(l(0,"option",8),R(1,"REMOVE"),a()),n&2){let e=s(4);p("value",e.REMOVE);}}function It(n,o){if(n&1&&m(0,vt,2,1,"option",8),n&2){let e=s(2).$implicit,t=s();u(e!==t.PLEASE_SELECT?0:-1);}}function xt(n,o){if(n&1&&(l(0,"option",9),R(1),a()),n&2){let e=s().$implicit,t=s().$implicit,i=s();p("value",e)("selected",t===e)("disabled",e===i.PLEASE_SELECT),_(),te(" ",e," ");}}function Ot(n,o){if(n&1&&m(0,At,2,2,"option",8)(1,bt,2,2,"option",8)(2,Pt,2,2,"option",8)(3,It,1,1)(4,xt,2,4,"option",9),n&2){let e,t=o.$implicit,i=s(2);u((e=t)===i.NOT?0:e===i.AND?1:e===i.OR?2:e===i.REMOVE?3:4);}}function Nt(n,o){if(n&1){let e=h();l(0,"select",7,4),d("change",function(){let i=E(e),r=i.$implicit,c=i.selection,P=Ge(1);return f(c(P.value,r));}),V(2,Ot,5,1,null,null,ee),a();}if(n&2){let e=o.options,t=o.width;De(x(2,St,t)),_(2),M(e);}}var we="NOT",Le="AND",Ve="OR",Me="REMOVE",_t=(()=>{class n{condition=I.required();selectVariables=I.required();content=k.required("content",{read:Ie});keywordTemplate=k.required("keyword",{read:G});variableTemplate=k.required("variable",{read:G});selectTemplate=k.required("select",{read:G});state=C(A);activeAnswers=this.state.signal("activeAnswers");mode=this.state.signal("rulesMode");highlighVariable=g(()=>this.mode()!=="edit"&&this.state.signal("highlightVariableStatus")());serializer=C(L);serializedCondition=g(()=>this.serializer.serialize(this.condition()));PLEASE_SELECT=w.string;ALWAYS=ie.string;NOT=we;AND=Le;OR=Ve;REMOVE=Me;conditionChanged=v();constructor(){O(()=>{this.mode(),this.condition(),this.selectVariables(),this.repaint();});}repaint(){this.content().clear(),this.paintKeyword("IF"),this.paintCondition(this.condition(),e=>{e?this.conditionChanged.emit(e):this.conditionChanged.emit(new w());});}calculateOptions(e){return[this.PLEASE_SELECT,this.ALWAYS,...this.selectVariables(),this.NOT,this.AND,this.OR,this.REMOVE].filter(t=>!e.includes(t));}createFromPrevious(e){return e===this.PLEASE_SELECT||e===this.ALWAYS?new w():new Ee(e);}selection(e,t){return e===this.NOT?new fe(this.createFromPrevious(t)):e===this.AND?new ne(this.createFromPrevious(t),new w()):e===this.OR?new oe(this.createFromPrevious(t),new w()):e===this.REMOVE?null:e===this.ALWAYS?new ie():new Ee(e);}paintKeyword(e){this.content().createEmbeddedView(this.keywordTemplate(),{$implicit:e});}paintSelect(e,t,i){this.content().createEmbeddedView(this.selectTemplate(),{$implicit:e,options:this.calculateOptions(i),selection:(r,c)=>{t(this.selection(r,c));},width:(e.length*9+30).toString()+"px"});}paintVariable(e){this.content().createEmbeddedView(this.variableTemplate(),{$implicit:e});}paintCondition(e,t,i=[]){if(e instanceof fe){let r=i.filter(c=>c!==this.ALWAYS);this.paintKeyword("NOT"),this.paintCondition(e.not,c=>{t(c?new fe(c):null);},r);}else if(e instanceof ne){let r=[...i,this.ALWAYS];this.paintCondition(e.left,c=>{t(c?new ne(c,e.right):e.right);},r),this.paintKeyword("AND"),this.paintCondition(e.right,c=>{t(c?new ne(e.left,c):e.left);},r);}else if(e instanceof oe){let r=[...i,this.ALWAYS];this.paintCondition(e.left,c=>{t(c?new oe(c,e.right):e.right);},r),this.paintKeyword("OR"),this.paintCondition(e.right,c=>{t(c?new oe(e.left,c):e.left);},r);}else e instanceof Ee&&(this.mode()==="edit"?this.paintSelect(e.variable,t,i):this.paintVariable(e.variable));}variableActive(e){return this.activeAnswers()[e];}variablePlaceholder(e){return e===this.ALWAYS||e===this.PLEASE_SELECT?"x":e;}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-editor-condition"]],viewQuery:function(t,i){t&1&&(z(i.content,Ct,5,Ie),z(i.keywordTemplate,Et,5,G),z(i.variableTemplate,ft,5,G),z(i.selectTemplate,Tt,5,G)),t&2&&ue(4);},inputs:{condition:[1,"condition"],selectVariables:[1,"selectVariables"]},outputs:{conditionChanged:"conditionChanged"},decls:8,vars:0,consts:[["content",""],["keyword",""],["variable",""],["select",""],["selectbox",""],[1,"font-bold"],[1,"font-mono",3,"ngClass"],[1,"font-mono",3,"change"],[3,"value"],[3,"value","selected","disabled"]],template:function(t,i){t&1&&(Ue(0,null,0),m(2,gt,2,1,"ng-template",null,1,de)(4,Rt,2,6,"ng-template",null,2,de)(6,Nt,4,4,"ng-template",null,3,de));},dependencies:[D],styles:["[_nghost-%COMP%]{display:flex;min-height:2rem;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:.5rem}"],changeDetection:0});}return n;})();function wt(n,o){if(n&1&&(l(0,"option",4),R(1),a()),n&2){let e=o.$implicit;p("value",e),_(),F(e);}}function Lt(n,o){n&1&&(l(0,"span"),S(1,0),a()),n&2&&(_(),$(o),q(1));}function Vt(n,o){n&1&&(l(0,"span"),S(1,1),a());}function Mt(n,o){if(n&1&&m(0,Lt,2,1,"span")(1,Vt,2,0,"span"),n&2){let e,t=s(2);u((e=t.form.controls.name.errors==null?null:t.form.controls.name.errors.pattern)?0:-1,e),_(),u(t.form.controls.name.errors!=null&&t.form.controls.name.errors.required?1:-1);}}function yt(n,o){if(n&1&&(l(0,"div",7),m(1,Mt,2,2),a()),n&2){let e=s();_(),u(e.form.controls.name.touched?1:-1);}}var ut=(()=>{class n{item=I.required();state=C(A);mode=this.state.signal("rulesMode");categories=this.state.signal("categories");itemChanged=v();fb=C(Ae).nonNullable;form=this.fb.group({category:this.fb.control(""),name:this.fb.control("",{validators:[this.validateNamePattern(),re.required.bind(this)]})});parser=C(Q);serializer=C(L);constructor(){O(()=>{this.item(),this.reset();});let e=Te(this.form.valueChanges.pipe(_e(500),se(()=>this.form.valid)));O(()=>{let t=e();if(!t?.name)return;if(!t.category){this.addNewCategory();return;}let i=this.serializer.serialize(new X(t.category,t.name));this.itemChanged.emit(this.parser.parseItem(i));}),O(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}blockPatch=!1;reset(){if(!this.blockPatch){let e=this.item().name;this.item().weight&&(e+=` ${this.serializer.serializeWeight(this.item().weight)}`),this.form.patchValue({category:this.item().category,name:e},{emitEvent:!1});}}focus(e){this.blockPatch=document.activeElement===e.target,this.form.controls.name.value===X.NEW_ITEM_NAME&&this.form.controls.name.setValue("",{emitEvent:!1});}blur(){this.blockPatch=!1,this.reset();}async addNewCategory(e=""){let t=await nt("Enter new category name",e);if(t)try{this.parser.validateCategoryName(t),this.form.patchValue({category:t});}catch(i){if(i instanceof W){let r=i.found;await Oe("Kategorie darf '"+r+"' nicht enthalten");}else console.error(i),await Oe("Unzul\xE4ssiger Kategoriename");this.addNewCategory(t);}else this.reset();}validateNamePattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateItemNameAndWeight(t),null;}catch(i){return e.markAsTouched(),i instanceof W?{pattern:i.found}:{pattern:!0};}};}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-editor-item"]],inputs:{item:[1,"item"]},outputs:{itemChanged:"itemChanged"},decls:8,vars:2,consts:()=>{let e;e="Name darf das Zeichen '"+"\uFFFD0\uFFFD"+"' nicht enthalten";let t;return t="Artikelname ist erforderlich",[e,t,[1,"flex",3,"formGroup"],["name","categories","formControlName","category",1,"max-w-[5rem]"],[3,"value"],["value",""],["type","text","formControlName","name",1,"w-0","flex-1",3,"focus","blur"],[1,"text-red-light","m-1","text-sm"]];},template:function(t,i){t&1&&(l(0,"form",2)(1,"select",3),V(2,wt,2,2,"option",4,Qe),l(4,"option",5),R(5,"+"),a()(),l(6,"input",6),d("focus",function(c){return i.focus(c);})("blur",function(){return i.blur();}),a()(),m(7,yt,2,1,"div",7)),t&2&&(p("formGroup",i.form),_(2),M(i.categories()),_(5),u(i.mode()==="edit"&&i.form.valid===!1&&i.form.touched?7:-1));},dependencies:[be,Se,at,lt,j,rt,Y,he,ge,Re],encapsulation:2,changeDetection:0});}return n;})();var $t=(n,o,e)=>({"font-bold":n,"text-green-light":o,"text-red-light":e});function qt(n,o){n&1&&(l(0,"span"),S(1,0),a()),n&2&&(_(),$(o),q(1));}function Ft(n,o){n&1&&(l(0,"span"),S(1,1),a());}function Dt(n,o){n&1&&(l(0,"span"),S(1,2),a());}function Qt(n,o){if(n&1&&(l(0,"span"),S(1,3),a()),n&2){let e=s();_(),$(e),q(1);}}function Ut(n,o){n&1&&m(0,Dt,2,0,"span")(1,Qt,2,1,"span"),n&2&&u(o===" "?0:1);}function Gt(n,o){n&1&&(l(0,"span"),S(1,4),a());}function kt(n,o){n&1&&(l(0,"span"),S(1,5),a());}function zt(n,o){n&1&&(l(0,"span"),S(1,6),a());}function Kt(n,o){if(n&1&&(l(0,"div",12),m(1,qt,2,1,"span")(2,Ft,2,0,"span")(3,Ut,2,1)(4,Gt,2,0,"span")(5,kt,2,0,"span")(6,zt,2,0,"span"),a()),n&2){let e,t,i=s();_(),u((e=i.form.controls.question.errors==null?null:i.form.controls.question.errors.pattern)?1:-1,e),_(),u(i.form.controls.question.errors!=null&&i.form.controls.question.errors.required?2:-1),_(),u((t=i.form.controls.variable.errors==null?null:i.form.controls.variable.errors.pattern)?3:-1,t),_(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.required?4:-1),_(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.reserved?5:-1),_(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.used?6:-1);}}var dt=(()=>{class n{question=I.required();parser=C(Q);state=C(A);variables=this.state.signal("variables");mode=this.state.signal("rulesMode");highlighVariable=g(()=>this.mode()!=="edit"&&this.state.signal("highlightVariableStatus")());variableActive=g(()=>this.state.signal("activeAnswers")()[this.question().variable]);refactorVariables=this.state.signal("refactorVariables");questionChanged=v();variableChanged=v();fb=C(Ae).nonNullable;form=this.fb.group({question:this.fb.control("",{validators:[this.validateQuestionPattern(),re.required.bind(this)]}),variable:this.fb.control("",{validators:[this.validateVariablePattern(),Xt(),re.required.bind(this)],asyncValidators:[Bt(Ne(this.variables),Ne(this.question))]})});constructor(){O(()=>{this.question(),this.reset();});let e=Te(this.form.valueChanges.pipe(_e(500),se(()=>this.form.valid)));O(()=>{let t=e();t?.question&&t.question!==this.question().question&&t.variable?this.questionChanged.emit(new N(t.question,t.variable)):t?.variable&&t.variable.trim()!==this.question().variable&&(this.question().variable===N.NEW_VARIABLE_NAME||!this.refactorVariables()?this.questionChanged.emit(new N(this.question().question,t.variable.trim())):this.variableChanged.emit([this.question().variable,t.variable.trim()]));}),O(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}reset(){this.form.patchValue(this.question(),{emitEvent:!1});}focusQuestion(){this.form.controls.question.value===N.NEW_QUESTION_NAME&&this.form.controls.question.setValue("",{emitEvent:!1});}focusVariable(){this.form.controls.variable.value===N.NEW_VARIABLE_NAME&&this.form.controls.variable.setValue("",{emitEvent:!1});}validateVariablePattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateVariableName(t),null;}catch(i){return e.markAsTouched(),i instanceof W?{pattern:i.found}:{pattern:!0};}};}validateQuestionPattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateQuestionString(t),null;}catch(i){return e.markAsTouched(),i instanceof W?{pattern:i.found}:{pattern:!0};}};}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-editor-question"]],inputs:{question:[1,"question"]},outputs:{questionChanged:"questionChanged",variableChanged:"variableChanged"},decls:6,vars:7,consts:()=>{let e;e="Frage";let t;t="Variable";let i;i="Fragen k\xF6nnen dieses Zeichen nicht enthalten: '"+"\uFFFD0\uFFFD"+"'";let r;r="Frage ist erforderlich";let c;c="Variablen d\xFCrfen keine Leerzeichen enthalten";let P;P="Variablen k\xF6nnen dieses Zeichen nicht enthalten: '"+"\uFFFD0\uFFFD"+"'";let U;U="Variablenname ist erforderlich";let Z;Z="Dieser Variablenname ist reserviert";let ae;return ae="Dieser Variablenname wird bereits verwendet",[i,r,c,P,U,Z,ae,[1,"flex","flex-col",3,"formGroup"],["type","text","placeholder",e,"formControlName","question",1,"grow",3,"focus"],[1,"flex","items-center","gap-2"],[1,"ml-2","h-4"],["type","text","placeholder",t,"formControlName","variable",1,"grow","font-mono",3,"focus","ngClass"],[1,"text-red-light","m-1","flex","flex-col","text-sm"]];},template:function(t,i){t&1&&(l(0,"form",7)(1,"input",8),d("focus",function(){return i.focusQuestion();}),a(),l(2,"div",9),T(3,"app-icon-arrow-forward",10),l(4,"input",11),d("focus",function(){return i.focusVariable();}),a()(),m(5,Kt,7,6,"div",12),a()),t&2&&(p("formGroup",i.form),_(4),p("ngClass",B(3,$t,i.highlighVariable(),i.highlighVariable()&&i.variableActive(),i.highlighVariable()&&!i.variableActive())),_(),u(i.mode()==="edit"&&i.form.valid===!1&&i.form.touched?5:-1));},dependencies:[be,Se,j,Y,he,ge,Re,D,We],encapsulation:2,changeDetection:0});}return n;})();function Xt(){return n=>[ie.string,we,Le,Ve,Me].some(o=>o===n.value?.trim())?{reserved:!0}:null;}function Bt(n,o){return e=>le(e.value).pipe(qe(n.pipe(ve(t=>[...t])),o),$e(([t,i,r])=>ye(()=>!i.find(c=>c===r.variable),le(null),le([t,i,r]).pipe(ve(([c,P,U])=>{let Z=P.findIndex(ae=>ae===U.variable);return P.splice(Z,1),P.includes(c?.trim()??"")?{used:!0}:null;})))));}var Pe=(()=>{class n{serializer=C(L);parser=C(Q);state=C(A);questions=this.state.signal("clipboardQuestions");items=this.state.signal("clipboardItems");itemsCount=g(()=>this.items().length);questionsCount=g(()=>this.questions().length);cutQuestion(e){this.questions.update(t=>[...t,this.serializer.serialize(e)]);}cutItem(e){this.items.update(t=>[...t,this.serializer.serialize(e)]);}paste(){let e={questions:this.questions().map(t=>this.parser.parseQuestion(t)),items:this.items().map(t=>this.parser.parseItem(t))};return this.questions.set([]),this.items.set([]),e;}static ɵfac=function(t){return new(t||n)();};static ɵprov=Fe({token:n,factory:n.ɵfac,providedIn:"root"});}return n;})();function Wt(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){E(e);let i=s();return f(i.resetCondition());}),T(1,"app-icon-clear"),a();}}function jt(n,o){if(n&1){let e=h();l(0,"button",11),d("click",function(){E(e);let i=s(2).$index,r=s();return f(r.swapQuestions(i,i+1));}),T(1,"app-icon-arrow-downward"),a();}}function Yt(n,o){n&1&&T(0,"span",10);}function Ht(n,o){if(n&1&&m(0,jt,2,0,"button",9)(1,Yt,1,0,"span",10),n&2){let e=s().$index,t=s();u(e<t.rule().questions.length-1?0:1);}}function Jt(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){E(e);let i=s().$index,r=s();return f(r.deleteQuestion(i));}),T(1,"app-icon-delete"),a();}}function Zt(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){E(e);let i=s().$index,r=s();return f(r.cutQuestion(i));}),T(1,"app-icon-cut"),a();}}function ei(n,o){if(n&1){let e=h();l(0,"button",11),d("click",function(){E(e);let i=s().$index,r=s();return f(r.swapQuestions(i-1,i));}),T(1,"app-icon-arrow-upward"),a();}}function ti(n,o){if(n&1){let e=h();l(0,"div",2),m(1,Ht,2,1),l(2,"app-editor-question",8),d("questionChanged",function(i){let r=E(e).$index,c=s();return f(c.updateQuestion(r,i));})("variableChanged",function(i){E(e);let r=s();return f(r.variableChanged(i));}),a(),m(3,Jt,2,0,"button",4)(4,Zt,2,0,"button",4)(5,ei,2,0,"button",9),a();}if(n&2){let e=o.$implicit,t=o.$index,i=s();_(),u(i.mode()==="swap"&&i.rule().questions.length>1?1:-1),_(),p("question",e),_(),u(i.mode()==="delete"?3:i.mode()==="cut-paste"?4:i.mode()==="swap"&&t>0?5:-1);}}function ii(n,o){if(n&1){let e=h();l(0,"button",11),d("click",function(){E(e);let i=s(2).$index,r=s();return f(r.swapItems(i,i+1));}),T(1,"app-icon-arrow-downward"),a();}}function ni(n,o){n&1&&T(0,"span",10);}function oi(n,o){if(n&1&&m(0,ii,2,0,"button",9)(1,ni,1,0,"span",10),n&2){let e=s().$index,t=s();u(e<t.rule().items.length-1?0:1);}}function ri(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){E(e);let i=s().$index,r=s();return f(r.deleteItem(i));}),T(1,"app-icon-delete"),a();}}function ai(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){E(e);let i=s().$index,r=s();return f(r.cutItem(i));}),T(1,"app-icon-cut"),a();}}function li(n,o){if(n&1){let e=h();l(0,"button",11),d("click",function(){E(e);let i=s().$index,r=s();return f(r.swapItems(i-1,i));}),T(1,"app-icon-arrow-upward"),a();}}function si(n,o){if(n&1){let e=h();l(0,"div",2),m(1,oi,2,1),l(2,"app-editor-item",12),d("itemChanged",function(i){let r=E(e).$index,c=s();return f(c.updateItem(r,i));}),a(),m(3,ri,2,0,"button",4)(4,ai,2,0,"button",4)(5,li,2,0,"button",9),a();}if(n&2){let e=o.$implicit,t=o.$index,i=s();_(),u(i.mode()==="swap"&&i.rule().items.length>1?1:-1),_(),p("item",e),_(),u(i.mode()==="delete"?3:i.mode()==="cut-paste"?4:i.mode()==="swap"&&t>0?5:-1);}}function _i(n,o){if(n&1){let e=h();l(0,"div",5)(1,"button",13),d("click",function(){E(e);let i=s();return f(i.addQuestion());}),S(2,0),a(),l(3,"button",13),d("click",function(){E(e);let i=s();return f(i.addItem());}),S(4,1),a()();}}function ci(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){E(e);let i=s(2);return f(i.deleteRule.emit());}),T(1,"app-icon-delete"),a();}}function ui(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){E(e);let i=s(2);return f(i.paste());}),T(1,"app-icon-paste"),a();}}function di(n,o){if(n&1&&(l(0,"div",6),m(1,ci,2,0,"button",4)(2,ui,2,0,"button",4),a()),n&2){let e=s();_(),u(e.mode()==="delete"?1:-1),_(),u(e.mode()==="cut-paste"?2:-1);}}function mi(n,o){if(n&1&&(l(0,"pre"),R(1),a(),l(2,"pre"),R(3),a()),n&2){let e=s();_(),F(o),_(2),F(e.ruleDebugString());}}var mt=(()=>{class n{rule=I.required();ruleChanged=v();deleteRule=v();renameVariable=v();ruleDebugString=g(()=>this.serializer.serialize(this.rule()));errorMessage=ce(null);state=C(A);mode=this.state.signal("rulesMode");selectVariables=g(()=>{let e=this.rule().questions.map(i=>i.variable);return this.state.get("variables").filter(i=>!e.includes(i));});clipboard=C(Pe);parser=C(Q);serializer=C(L);compileRule(e){try{return this.parser.parseRule(this.serializer.serialize(e)),this.errorMessage.set(null),!0;}catch(t){return t instanceof Error&&this.errorMessage.set(t.message),!1;}}resetCondition(){this.updateCondition(new w());}updateCondition(e){let t=new K(e,this.rule().questions,this.rule().items);this.compileRule(t)&&this.ruleChanged.emit(t);}emitNewQuestions(e){let t=new K(this.rule().condition,e,this.rule().items);this.compileRule(t)&&this.ruleChanged.emit(t);}updateQuestion(e,t){let i=this.rule().questions;i[e]=t,this.emitNewQuestions(i);}addQuestion(){let e=new N(N.NEW_QUESTION_NAME,N.NEW_VARIABLE_NAME);this.updateQuestion(this.rule().questions.length,e);}deleteQuestion(e){let t=this.rule().questions;t.splice(e,1),this.emitNewQuestions(t);}cutQuestion(e){let t=this.rule().questions[e];this.deleteQuestion(e),this.clipboard.cutQuestion(t);}swapQuestions(e,t){let i=this.rule().questions,r=i[e];i[e]=i[t],i[t]=r,this.emitNewQuestions(i);}emitNewItems(e){let t=new K(this.rule().condition,this.rule().questions,e);this.compileRule(t)&&this.ruleChanged.emit(t);}updateItem(e,t){let i=this.rule().items;i[e]=t,this.emitNewItems(i);}addItem(){let e=new X(X.NEW_CATEGORY_NAME,X.NEW_ITEM_NAME);this.updateItem(this.rule().items.length,e);}deleteItem(e){let t=this.rule().items;t.splice(e,1),this.emitNewItems(t);}cutItem(e){let t=this.rule().items[e];this.deleteItem(e),this.clipboard.cutItem(t);}swapItems(e,t){let i=this.rule().items,r=i[e];i[e]=i[t],i[t]=r,this.emitNewItems(i);}paste(){let{questions:e,items:t}=this.clipboard.paste(),i=new K(this.rule().condition,[...this.rule().questions,...e],[...this.rule().items,...t]);this.ruleChanged.emit(i);}variableChanged([e,t]){this.renameVariable.emit([e,t]);}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-editor-rule"]],inputs:{rule:[1,"rule"]},outputs:{ruleChanged:"ruleChanged",deleteRule:"deleteRule",renameVariable:"renameVariable"},decls:10,vars:5,consts:()=>{let e;e="+ Frage";let t;return t="+ Gegenstand",[e,t,[1,"mb-1","flex","items-center"],[1,"grow",3,"conditionChanged","condition","selectVariables"],["type","button",1,"link"],[1,"flex","justify-end","gap-2"],[1,"flex","justify-center"],["type","button",1,"link",3,"click"],[1,"grow",3,"questionChanged","variableChanged","question"],["type","button",1,"link","p-1"],[1,"ml-6"],["type","button",1,"link","p-1",3,"click"],[1,"grow",3,"itemChanged","item"],["type","button",1,"h-8",3,"click"]];},template:function(t,i){if(t&1&&(l(0,"div",2)(1,"app-editor-condition",3),d("conditionChanged",function(c){return i.updateCondition(c);}),a(),m(2,Wt,2,0,"button",4),a(),V(3,ti,6,3,"div",2,ee),V(5,si,6,3,"div",2,ee),m(7,_i,5,0,"div",5)(8,di,3,2,"div",6)(9,mi,4,2)),t&2){let r;_(),p("condition",i.rule().condition)("selectVariables",i.selectVariables()),_(),u(i.mode()==="edit"?2:-1),_(),M(i.rule().questions),_(2),M(i.rule().items),_(2),u(i.mode()==="edit"?7:8),_(2),u((r=i.errorMessage())?9:-1,r);}},dependencies:[_t,dt,ut,pe,Ye,Je,me,Be,je],encapsulation:2,changeDetection:0});}return n;})();var pi=["searchInput"],Ci=n=>({"sticky left-0 top-0 z-30 shadow-md":n}),J=n=>({active:n});function Ei(n,o){if(n&1&&(l(0,"span"),S(1,2),a()),n&2){let e=o;_(),$(e)(e),q(1);}}function fi(n,o){if(n&1&&(l(0,"span"),S(1,3),a()),n&2){let e=o;_(),$(e)(e),q(1);}}function Ti(n,o){if(n&1&&(l(0,"div",10)(1,"span"),S(2,1),a(),m(3,Ei,2,2,"span")(4,fi,2,2,"span"),a()),n&2){let e,t,i=s(2);_(3),u((e=i.clipboard.itemsCount())?3:-1,e),_(),u((t=i.clipboard.questionsCount())?4:-1,t);}}function hi(n,o){if(n&1&&m(0,Ti,5,2,"div",10),n&2){let e=s();u(e.clipboard.itemsCount()>0||e.clipboard.questionsCount()>0?0:-1);}}function Si(n,o){if(n&1){let e=h();l(0,"div",9)(1,"input",11,0),Ke("ngModelChange",function(i){E(e);let r=s();return ze(r.searchTerm,i)||(r.searchTerm=i),f(i);}),a(),l(3,"button",12),d("click",function(){E(e);let i=s();return f(i.clearSearch());}),T(4,"app-icon-clear",13),a()();}if(n&2){let e=s();_(),ke("ngModel",e.searchTerm);}}var pt=(()=>{class n{noOfVisibleRules=I.required();state=C(A);mode=this.state.signal("rulesMode");searchTerm=this.state.signal("filterRulesQuery");clipboard=C(Pe);sticky=g(()=>this.state.signal("scrollY")()>48);searchInput=k.required("searchInput");focusSearch(){setTimeout(()=>{this.searchInput().nativeElement.focus();},50);}clearSearch(){this.searchTerm.set(""),this.focusSearch();}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-toolbar"]],viewQuery:function(t,i){t&1&&z(i.searchInput,pi,5),t&2&&ue();},inputs:{noOfVisibleRules:[1,"noOfVisibleRules"]},decls:16,vars:26,consts:()=>{let e;e="Zwischenablage:";let t;t="{VAR_PLURAL, plural, one {1 Gegenstand} other {{INTERPOLATION} Gegenst\xE4nde}}",t=xe(t,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"});let i;return i="{VAR_PLURAL, plural, one {1 Frage} other {{INTERPOLATION} Fragen}}",i=xe(i,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"}),[["searchInput",""],e,t,i,[1,"bg-active","py-2",3,"ngClass"],[1,"mb-1","grid","grid-cols-6","gap-2"],["type","button",1,"link",3,"click","ngClass"],[1,"my-auto","h-6","w-6"],["type","button",1,"link",3,"click","ngClass","disabled"],[1,"mt-2","flex","items-center"],[1,"mt-2","flex","justify-center","gap-4"],["type","text",1,"grow",3,"ngModelChange","ngModel"],["type","button",1,"link",3,"click"],[1,"h-6","w-6"]];},template:function(t,i){t&1&&(l(0,"div",4)(1,"div",5)(2,"button",6),d("click",function(){return i.mode.set("view");}),T(3,"app-icon-view",7),a(),l(4,"button",8),d("click",function(){return i.mode.set("edit");}),T(5,"app-icon-edit",7),a(),l(6,"button",8),d("click",function(){return i.mode.set("delete");}),T(7,"app-icon-delete",7),a(),l(8,"button",8),d("click",function(){return i.mode.set("cut-paste");}),T(9,"app-icon-reorder",7),a(),l(10,"button",8),d("click",function(){return i.mode.set("swap");}),T(11,"app-icon-swap",7),a(),l(12,"button",6),d("click",function(){return i.mode.set("search"),i.focusSearch();}),T(13,"app-icon-search",7),a()(),m(14,hi,1,1)(15,Si,5,1,"div",9),a()),t&2&&(p("ngClass",x(12,Ci,i.sticky())),_(2),p("ngClass",x(14,J,i.mode()==="view")),_(2),p("ngClass",x(16,J,i.mode()==="edit"))("disabled",!i.noOfVisibleRules()&&!!i.searchTerm()),_(2),p("ngClass",x(18,J,i.mode()==="delete"))("disabled",!i.noOfVisibleRules()),_(2),p("ngClass",x(20,J,i.mode()==="cut-paste"))("disabled",i.noOfVisibleRules()<2&&!i.clipboard.itemsCount()&&!i.clipboard.questionsCount()),_(2),p("ngClass",x(22,J,i.mode()==="swap"))("disabled",!i.noOfVisibleRules()),_(2),p("ngClass",x(24,J,i.mode()==="search")),_(2),u(i.mode()==="cut-paste"?14:i.mode()==="search"||i.searchTerm()?15:-1));},dependencies:[st,j,Y,ot,D,tt,He,pe,Ze,Ce,et,me],encapsulation:2,changeDetection:0});}return n;})();var gi=(n,o)=>o.index,Ri=(n,o,e)=>({disabled:n,"animate-pulse":o,"mb-[2.25rem]":e});function Ai(n,o){if(n&1){let e=h();l(0,"div",4)(1,"button",7),d("click",function(){E(e);let i=s().$implicit,r=s();return f(r.swapRules(i.index-1,i.index));}),T(2,"app-icon-swap"),a()();}}function bi(n,o){if(n&1){let e=h();m(0,Ai,3,0,"div",4),l(1,"div",5)(2,"app-editor-rule",6),d("ruleChanged",function(i){let r=E(e).$implicit,c=s();return f(c.updateRule(r.index,i));})("deleteRule",function(){let i=E(e).$implicit,r=s();return f(r.deleteRule(i.index));})("renameVariable",function(i){E(e);let r=s();return f(r.renameVariable(i));}),a()();}if(n&2){let e=o.$implicit,t=s();u(e.index>0&&t.mode()==="swap"&&!t.filter()?0:-1),_(),p("id","rule-"+e.index)("ngClass",B(4,Ri,t.showAsDisabled(e.rule),t.highlightRule()===e.index,t.mode()==="view"||t.mode()==="search")),_(),p("rule",e.rule);}}function Pi(n,o){if(n&1){let e=h();l(0,"button",8),d("click",function(){E(e);let i=s();return f(i.addRule());}),S(1,0),a();}}function vi(n,o){n&1&&(l(0,"a",3),T(1,"img",9),a());}var Dn=(()=>{class n{serializer=C(L);refactor=C(it);state=C(A);parsedRules=this.state.signal("parsedRules");activeRules=this.state.signal("activeRules");mode=this.state.signal("rulesMode");filter=this.state.signal("filterRulesQuery");highlightRule=ce(void 0);visibleRules=g(()=>this.filter()===""?this.parsedRules().map((t,i)=>({rule:t,index:i})):this.parsedRules().map((t,i)=>({rule:t,index:i})).filter(t=>{let i=this.filter();return!i||this.refactor.contains(t.rule,i);}));goToPacklistButtonVisible=g(()=>this.state.signal("scrollY")()>100);updateRules(e){let t=this.serializer.serializeRules(e);this.state.set("rules",t);}updateRule(e,t){let i=this.parsedRules();i[e]=t,this.updateRules([...i]);}deleteRule(e){let t=this.parsedRules();t.splice(e,1),this.updateRules([...t]);}addRule(){let e=this.parsedRules().length,t=[];for(let c=0;c<this.parsedRules().length;c++){let P=document.querySelector(`#rule-${c.toString()}`);if(P){let U=P.getBoundingClientRect();U.top>=0&&U.bottom<=window.innerHeight&&t.push(c);}}t.includes(e-1)||(e=t[0]+1);let i=new K(new w()),r=this.parsedRules();r.splice(e,0,i),this.updateRules([...r]),this.highlightRule.set(e),setTimeout(()=>{this.highlightRule.set(void 0);},4e3);}swapRules(e,t){let i=this.parsedRules(),r=i[e];i[e]=i[t],i[t]=r,this.updateRules([...i]);}showAsDisabled(e){return this.state.get("fadeOutDisabledRules")&&!this.activeRules().includes(e);}renameVariable([e,t]){let i=this.refactor.renameVariable(e,t,this.parsedRules());this.updateRules(i);}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-rules"]],decls:5,vars:3,consts:()=>{let e;e="+ Regel";let t;return t="application icon",[e,[3,"noOfVisibleRules"],["type","button",1,"fixed","bottom-2","z-50"],["routerLink","/packlist",1,"fixed","bottom-2","right-2","z-50"],[1,"flex","justify-center"],[1,"card","mb-1",3,"id","ngClass"],[3,"ruleChanged","deleteRule","renameVariable","rule"],["type","button",1,"link",3,"click"],["type","button",1,"fixed","bottom-2","z-50",3,"click"],["alt",t,"src","icon.svg",1,"h-12"]];},template:function(t,i){t&1&&(T(0,"app-toolbar",1),V(1,bi,3,8,null,null,gi),m(3,Pi,2,0,"button",2)(4,vi,2,0,"a",3)),t&2&&(p("noOfVisibleRules",i.visibleRules().length),_(),M(i.visibleRules()),_(2),u(i.mode()==="edit"&&!i.filter()?3:-1),_(),u(i.goToPacklistButtonVisible()?4:-1));},dependencies:[mt,pt,Ce,D,Xe],encapsulation:2,changeDetection:0});}return n;})();export{Dn as default};/**i18n:cbcf01d4640d52ad6821130aa8bde718125de417ff622aa7dfac4aa297a95122*/