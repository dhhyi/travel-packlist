import{c as mt,d as Ve}from"./chunk-9efdb21a.js";import{a as _t,b as Se,c as rt,d as lt,e as st,k as at,m as me,n as Et,p as Re,r as ut,s as ct,t as dt}from"./chunk-ac459377.js";import{b as ee,c as ae,d as te,e as Pe,f as Rt,g as fe,i as Le,j as Oe,k as Ct,l as At,m as Pt,n as Ie,o as ft,p as ge,q as Ue,r as Ne}from"./chunk-8070f68a.js";import{a as Tt,b as pt,c as W,d as D,e as j,f as Ce,g as G,h as re,i as Ae,j as le,k as se,l as J,n as Z,o as St,q as N}from"./chunk-49434dce.js";import{e as ot}from"./chunk-e15b0d87.js";import{$a as ke,$b as V,Aa as E,Ab as H,B as ue,Bb as He,Cb as x,Da as k,Db as oe,E as ce,Eb as _e,Fa as ve,Ga as qe,Gb as Je,Ha as F,Hb as Ze,Ia as Xe,Ib as et,Jb as tt,Ma as $,Nb as it,Pb as nt,Q as Fe,Ra as p,Sb as pe,T as Qe,W as Ke,Ya as de,Za as R,Zb as g,_a as X,aa as A,ab as Be,bb as u,cb as ne,db as ze,eb as Q,fb as K,gb as l,hb as r,ia as c,ib as S,ja as d,jb as We,kb as C,l as Ee,nb as P,ob as B,p as $e,pb as z,qb as Te,rb as T,sa as b,sb as s,ta as M,tb as je,ub as Ye,x as Ge,zb as y}from"./chunk-e83faf22.js";import"./chunk-71f6c2da.js";var he=(()=>{class n{parser=A(Z);state=A(N);questions=this.state.clipboardQuestions;items=this.state.clipboardItems;itemsCount=g(()=>this.items().length);questionsCount=g(()=>this.questions().length);cutQuestion(e){this.questions.update(t=>[...t,e.toString()]);}cutItem(e){this.items.update(t=>[...t,e.toString()]);}paste(){let e={questions:this.questions().map(t=>this.parser.parseQuestion(t)),items:this.items().map(t=>this.parser.parseItem(t))};return this.questions.set([]),this.items.set([]),e;}static ɵfac=function(t){return new(t||n)();};static ɵprov=Ke({token:n,factory:n.ɵfac,providedIn:"root"});}return n;})();var Mt=["content"],bt=["keyword"],$t=["variable"],vt=["select"],Vt=n=>({width:n});function Ut(n,_){if(n&1&&(l(0,"span",5),x(1),r()),n&2){let e=_.$implicit;E(),oe(e);}}function xt(n,_){if(n&1&&(l(0,"span",6),x(1),r()),n&2){let e=_.$implicit,t=s();X("text-green",t.highlighVariable()&&t.variableActive(e))("text-red",t.highlighVariable()&&!t.variableActive(e)),E(),oe(e);}}function wt(n,_){if(n&1&&(l(0,"option",8),x(1),r()),n&2){let e=s(2).$implicit,t=s();R("value",t.NOT),E(),_e("NOT ",t.variablePlaceholder(e),"");}}function yt(n,_){if(n&1&&(l(0,"option",8),x(1),r()),n&2){let e=s(2).$implicit,t=s();R("value",t.AND),E(),_e("",t.variablePlaceholder(e)," AND x");}}function Dt(n,_){if(n&1&&(l(0,"option",8),x(1),r()),n&2){let e=s(2).$implicit,t=s();R("value",t.OR),E(),_e("",t.variablePlaceholder(e)," OR x");}}function Gt(n,_){if(n&1&&(l(0,"option",8),x(1,"REMOVE"),r()),n&2){let e=s(4);R("value",e.REMOVE);}}function Ft(n,_){if(n&1&&p(0,Gt,2,1,"option",8),n&2){let e=s(2).$implicit,t=s();u(e!==t.PLEASE_SELECT?0:-1);}}function Qt(n,_){if(n&1&&(l(0,"option",9),x(1),r()),n&2){let e=s().$implicit,t=s().$implicit,i=s();R("value",e)("selected",t===e)("disabled",e===i.PLEASE_SELECT),E(),_e(" ",e," ");}}function Kt(n,_){if(n&1&&p(0,wt,2,2,"option",8)(1,yt,2,2,"option",8)(2,Dt,2,2,"option",8)(3,Ft,1,1)(4,Qt,2,4,"option",9),n&2){let e,t=_.$implicit,i=s(2);u((e=t)===i.NOT?0:e===i.AND?1:e===i.OR?2:e===i.REMOVE?3:4);}}function qt(n,_){if(n&1){let e=C();l(0,"select",7,4),T("change",function(){let i=c(e),o=i.$implicit,a=i.selection,m=He(1);return d(a(m.value,o));}),Q(2,Kt,5,1,null,null,ne),r();}if(n&2){let e=_.options,t=_.width;ke(it(2,Vt,t)),E(2),K(e);}}var xe="NOT",we="AND",ye="OR",De="REMOVE",Lt=(()=>{class n{condition=M.required();selectVariables=M.required();content=F.required("content",{read:ve});keywordTemplate=F.required("keyword",{read:k});variableTemplate=F.required("variable",{read:k});selectTemplate=F.required("select",{read:k});state=A(N);activeAnswers=this.state.activeAnswers;mode=this.state.rulesMode;highlighVariable=g(()=>this.mode()!=="edit"&&this.state.highlightVariableStatus());serializedCondition=g(()=>this.condition().toString());PLEASE_SELECT=G.string;ALWAYS=re.string;NOT=xe;AND=we;OR=ye;REMOVE=De;conditionChanged=b();constructor(){V(()=>{this.mode(),this.condition(),this.selectVariables(),this.repaint();});}repaint(){this.content().clear(),this.paintKeyword("IF"),this.paintCondition(this.condition(),e=>{e?this.conditionChanged.emit(e):this.conditionChanged.emit(new G());});}calculateOptions(e){return[this.PLEASE_SELECT,this.ALWAYS,...this.selectVariables(),this.NOT,this.AND,this.OR,this.REMOVE].filter(t=>!e.includes(t));}createFromPrevious(e){return e===this.PLEASE_SELECT||e===this.ALWAYS?new G():new Ce(e);}selection(e,t){return e===this.NOT?new Ae(this.createFromPrevious(t)):e===this.AND?new le(this.createFromPrevious(t),new G()):e===this.OR?new se(this.createFromPrevious(t),new G()):e===this.REMOVE?null:e===this.ALWAYS?new re():new Ce(e);}paintKeyword(e){this.content().createEmbeddedView(this.keywordTemplate(),{$implicit:e});}paintSelect(e,t,i){this.content().createEmbeddedView(this.selectTemplate(),{$implicit:e,options:this.calculateOptions(i),selection:(o,a)=>{t(this.selection(o,a));},width:(e.length*9+30).toString()+"px"});}paintVariable(e){this.content().createEmbeddedView(this.variableTemplate(),{$implicit:e});}paintCondition(e,t,i=[]){if(e instanceof Ae){let o=i.filter(a=>a!==this.ALWAYS);this.paintKeyword("NOT"),this.paintCondition(e.not,a=>{t(a?new Ae(a):null);},o);}else if(e instanceof le){let o=[...i,this.ALWAYS];this.paintCondition(e.left,a=>{t(a?new le(a,e.right):e.right);},o),this.paintKeyword("AND"),this.paintCondition(e.right,a=>{t(a?new le(e.left,a):e.left);},o);}else if(e instanceof se){let o=[...i,this.ALWAYS];this.paintCondition(e.left,a=>{t(a?new se(a,e.right):e.right);},o),this.paintKeyword("OR"),this.paintCondition(e.right,a=>{t(a?new se(e.left,a):e.left);},o);}else e instanceof Ce&&(this.mode()==="edit"?this.paintSelect(e.variable,t,i):this.paintVariable(e.variable));}variableActive(e){return this.activeAnswers()[e];}variablePlaceholder(e){return e===this.ALWAYS||e===this.PLEASE_SELECT?"x":e;}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-editor-condition"]],viewQuery:function(t,i){t&1&&(y(i.content,Mt,5,ve),y(i.keywordTemplate,bt,5,k),y(i.variableTemplate,$t,5,k),y(i.selectTemplate,vt,5,k)),t&2&&H(4);},inputs:{condition:[1,"condition"],selectVariables:[1,"selectVariables"]},outputs:{conditionChanged:"conditionChanged"},decls:8,vars:0,consts:()=>{let e;return e="Variable",[["content",""],["keyword",""],["variable",""],["select",""],["selectbox",""],["role","text",1,"font-bold"],[1,"font-mono","font-bold"],["role","combobox","aria-label",e,1,"font-mono",3,"change"],[3,"value"],[3,"value","selected","disabled"]];},template:function(t,i){t&1&&(We(0,null,0),p(2,Ut,2,1,"ng-template",null,1,pe)(4,xt,2,5,"ng-template",null,2,pe)(6,qt,4,4,"ng-template",null,3,pe));},styles:["[_nghost-%COMP%]{display:flex;min-height:2rem;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:.5rem}"],changeDetection:0});}return n;})();function Xt(n,_){if(n&1&&(l(0,"option",4),x(1),r()),n&2){let e=_.$implicit;R("value",e),E(),oe(e);}}function kt(n,_){n&1&&(l(0,"span"),P(1,0),r()),n&2&&(E(),B(_),z(1));}function Bt(n,_){n&1&&(l(0,"span"),P(1,1),r());}function zt(n,_){if(n&1&&p(0,kt,2,1,"span")(1,Bt,2,0,"span"),n&2){let e,t=s(2);u((e=t.form.controls.name.errors==null?null:t.form.controls.name.errors.pattern)?0:-1,e),E(),u(t.form.controls.name.errors!=null&&t.form.controls.name.errors.required?1:-1);}}function Wt(n,_){if(n&1&&(l(0,"div",7),p(1,zt,2,2),r()),n&2){let e=s();E(),u(e.form.controls.name.touched?1:-1);}}var It=(()=>{class n{item=M.required();state=A(N);mode=this.state.rulesMode;categories=this.state.categories;itemChanged=b();fb=A(Ie).nonNullable;form=this.fb.group({category:this.fb.control(""),name:this.fb.control("",{validators:[this.validateNamePattern(),ae.required.bind(this)]})});parser=A(Z);constructor(){V(()=>{this.item(),this.reset();});let e=Ne(this.form.valueChanges.pipe(ce(500),ue(()=>this.form.valid)));V(()=>{let t=e();if(!t?.name)return;if(!t.category){this.addNewCategory();return;}let i=new j(t.category,t.name).toString();this.itemChanged.emit(this.parser.parseItem(i));}),V(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}blockPatch=!1;reset(){if(!this.blockPatch){let e=this.item().name;this.item().weight&&(e+=` ${pt(this.item().weight)}`),this.form.patchValue({category:this.item().category,name:e},{emitEvent:!1});}}focus(e){this.blockPatch=document.activeElement===e.target,this.form.controls.name.value===j.NEW_ITEM_NAME&&this.form.controls.name.setValue("",{emitEvent:!1});}blur(){this.blockPatch=!1,this.reset();}async addNewCategory(e=""){let t=await mt("Enter new category name",e);if(t)try{this.parser.validateCategoryName(t),this.form.patchValue({category:t});}catch(i){if(i instanceof J){let o=i.found;await Ve("Kategoriename darf '"+o+"' nicht enthalten");}else console.error(i),await Ve("Ung\xFCltiger Kategoriename");this.addNewCategory(t);}else this.reset();}validateNamePattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateItemNameAndWeight(t),null;}catch(i){return e.markAsTouched(),i instanceof J?{pattern:i.found}:{pattern:!0};}};}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-editor-item"]],inputs:{item:[1,"item"]},outputs:{itemChanged:"itemChanged"},decls:8,vars:2,consts:()=>{let e;e="Gegenstand";let t;t="Kategorie";let i;i="Gegenstandsname";let o;o="Gegenstandsname darf das Zeichen '"+"\uFFFD0\uFFFD"+"' nicht enthalten";let a;return a="Gegenstandsname ist erforderlich",[o,a,["role","group","aria-label",e,1,"flex",3,"formGroup"],["name","categories","formControlName","category","aria-label",t,1,"max-w-[5rem]"],[3,"value"],["value",""],["type","text","formControlName","name","aria-label",i,1,"w-0","flex-1",3,"focus","blur"],["role","alert",1,"text-red-light","m-1","text-sm"]];},template:function(t,i){t&1&&(l(0,"form",2)(1,"select",3),Q(2,Xt,2,2,"option",4,ze),l(4,"option",5),x(5,"+"),r()(),l(6,"input",6),T("focus",function(a){return i.focus(a);})("blur",function(){return i.blur();}),r()(),p(7,Wt,2,1,"div",7)),t&2&&(R("formGroup",i.form),E(2),K(i.categories()),E(5),u(i.mode()==="edit"&&i.form.valid===!1&&i.form.touched?7:-1));},dependencies:[ge,fe,At,Pt,ee,Ct,te,Pe,Le,Oe],encapsulation:2,changeDetection:0});}return n;})();function jt(n,_){n&1&&(l(0,"span"),P(1,0),r()),n&2&&(E(),B(_),z(1));}function Yt(n,_){n&1&&(l(0,"span"),P(1,1),r());}function Ht(n,_){n&1&&(l(0,"span"),P(1,2),r());}function Jt(n,_){if(n&1&&(l(0,"span"),P(1,3),r()),n&2){let e=s();E(),B(e),z(1);}}function Zt(n,_){n&1&&p(0,Ht,2,0,"span")(1,Jt,2,1,"span"),n&2&&u(_===" "?0:1);}function ei(n,_){n&1&&(l(0,"span"),P(1,4),r());}function ti(n,_){n&1&&(l(0,"span"),P(1,5),r());}function ii(n,_){n&1&&(l(0,"span"),P(1,6),r());}function ni(n,_){if(n&1&&(l(0,"div",12),p(1,jt,2,1,"span")(2,Yt,2,0,"span")(3,Zt,2,1)(4,ei,2,0,"span")(5,ti,2,0,"span")(6,ii,2,0,"span"),r()),n&2){let e,t,i=s();E(),u((e=i.form.controls.question.errors==null?null:i.form.controls.question.errors.pattern)?1:-1,e),E(),u(i.form.controls.question.errors!=null&&i.form.controls.question.errors.required?2:-1),E(),u((t=i.form.controls.variable.errors==null?null:i.form.controls.variable.errors.pattern)?3:-1,t),E(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.required?4:-1),E(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.reserved?5:-1),E(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.used?6:-1);}}var gt=(()=>{class n{question=M.required();parser=A(Z);state=A(N);variables=this.state.variables;mode=this.state.rulesMode;highlighVariable=g(()=>this.mode()!=="edit"&&this.state.highlightVariableStatus());variableActive=g(()=>this.state.activeAnswers()[this.question().variable]);refactorVariables=this.state.refactorVariables;questionChanged=b();variableChanged=b();fb=A(Ie).nonNullable;form=this.fb.group({question:this.fb.control("",{validators:[this.validateQuestionPattern(),ae.required.bind(this)]}),variable:this.fb.control("",{validators:[this.validateVariablePattern(),oi(),ae.required.bind(this)],asyncValidators:[_i(Ue(this.variables),Ue(this.question))]})});constructor(){V(()=>{this.question(),this.reset();});let e=Ne(this.form.valueChanges.pipe(ce(500),ue(()=>this.form.valid)));V(()=>{let t=e();t?.question&&t.question!==this.question().question&&t.variable?this.questionChanged.emit(new D(t.question,t.variable)):t?.variable&&t.variable.trim()!==this.question().variable&&(this.question().variable===D.NEW_VARIABLE_NAME||!this.refactorVariables()?this.questionChanged.emit(new D(this.question().question,t.variable.trim())):this.variableChanged.emit([this.question().variable,t.variable.trim()]));}),V(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}reset(){this.form.patchValue(this.question(),{emitEvent:!1});}focusQuestion(){this.form.controls.question.value===D.NEW_QUESTION_NAME&&this.form.controls.question.setValue("",{emitEvent:!1});}focusVariable(){this.form.controls.variable.value===D.NEW_VARIABLE_NAME&&this.form.controls.variable.setValue("",{emitEvent:!1});}validateVariablePattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateVariableName(t),null;}catch(i){return e.markAsTouched(),i instanceof J?{pattern:i.found}:{pattern:!0};}};}validateQuestionPattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateQuestionString(t),null;}catch(i){return e.markAsTouched(),i instanceof J?{pattern:i.found}:{pattern:!0};}};}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-editor-question"]],inputs:{question:[1,"question"]},outputs:{questionChanged:"questionChanged",variableChanged:"variableChanged"},decls:6,vars:6,consts:()=>{let e;e="Frage";let t;t="Frage";let i;i="Frage";let o;o="Variable";let a;a="Variable";let m;m="Fragen d\xFCrfen dieses Zeichen nicht enthalten: '"+"\uFFFD0\uFFFD"+"'";let L;L="Frage ist erforderlich";let f;f="Variablen d\xFCrfen keine Leerzeichen enthalten";let v;v="Variablen d\xFCrfen dieses Zeichen nicht enthalten: '"+"\uFFFD0\uFFFD"+"'";let U;U="Variablenname ist erforderlich";let w;w="Dieser Variablenname ist reserviert";let q;return q="Dieser Variablenname wird bereits verwendet",[m,L,f,v,U,w,q,["role","group","aria-label",e,1,"flex","flex-col",3,"formGroup"],["type","text","placeholder",t,"aria-label",i,"formControlName","question",1,"grow",3,"focus"],[1,"flex","items-center","gap-2"],[1,"ml-2","h-4"],["type","text","placeholder",o,"aria-label",a,"formControlName","variable",1,"grow","font-mono","font-bold",3,"focus"],["role","alert",1,"text-red","m-1","flex","flex-col","text-sm"]];},template:function(t,i){t&1&&(l(0,"form",7)(1,"input",8),T("focus",function(){return i.focusQuestion();}),r(),l(2,"div",9),S(3,"app-icon-arrow-forward",10),l(4,"input",11),T("focus",function(){return i.focusVariable();}),r()(),p(5,ni,7,6,"div",12),r()),t&2&&(R("formGroup",i.form),E(4),X("text-green",i.highlighVariable()&&i.variableActive())("text-red",i.highlighVariable()&&!i.variableActive()),E(),u(i.mode()==="edit"&&i.form.valid===!1&&i.form.touched?5:-1));},dependencies:[ge,fe,ee,te,Pe,Le,Oe,ct],encapsulation:2,changeDetection:0});}return n;})();function oi(){return n=>[re.string,xe,we,ye,De].some(_=>_===n.value?.trim())?{reserved:!0}:null;}function _i(n,_){return e=>Ee(e.value).pipe(Qe(n.pipe($e(t=>[...t])),_),Fe(([t,i,o])=>Ge(()=>!i.find(a=>a===o.variable),Ee(null),Ee([t,i,o]).pipe($e(([a,m,L])=>{let f=m.findIndex(v=>v===L.variable);return m.splice(f,1),m.includes(a?.trim()??"")?{used:!0}:null;})))));}function ri(n,_){if(n&1){let e=C();l(0,"button",8),T("click",function(){c(e);let i=s();return d(i.resetCondition());}),S(1,"app-icon-clear"),r();}}function li(n,_){if(n&1){let e=C();l(0,"button",15),T("click",function(){c(e);let i=s(2).$index,o=s();return d(o.swapQuestions(i,i+1));}),S(1,"app-icon-arrow-downward"),r();}}function si(n,_){n&1&&S(0,"span",14);}function ai(n,_){if(n&1&&p(0,li,2,0,"button",13)(1,si,1,0,"span",14),n&2){let e=s().$index,t=s();u(e<t.rule().questions.length-1?0:1);}}function Ei(n,_){if(n&1){let e=C();l(0,"button",16),T("click",function(){c(e);let i=s().$index,o=s();return d(o.deleteQuestion(i));}),S(1,"app-icon-delete"),r();}}function ui(n,_){if(n&1){let e=C();l(0,"button",17),T("click",function(){c(e);let i=s().$index,o=s();return d(o.cutQuestion(i));}),S(1,"app-icon-cut"),r();}}function ci(n,_){if(n&1){let e=C();l(0,"button",18),T("click",function(){c(e);let i=s().$index,o=s();return d(o.swapQuestions(i-1,i));}),S(1,"app-icon-arrow-upward"),r();}}function di(n,_){if(n&1){let e=C();l(0,"div",5),p(1,ai,2,1),l(2,"app-editor-question",9),T("questionChanged",function(i){let o=c(e).$index,a=s();return d(a.updateQuestion(o,i));})("variableChanged",function(i){c(e);let o=s();return d(o.variableChanged(i));}),r(),p(3,Ei,2,0,"button",10)(4,ui,2,0,"button",11)(5,ci,2,0,"button",12),r();}if(n&2){let e=_.$implicit,t=_.$index,i=s();E(),u(i.mode()==="swap"&&i.rule().questions.length>1?1:-1),E(),R("question",e),E(),u(i.mode()==="delete"?3:i.mode()==="cut-paste"?4:i.mode()==="swap"&&t>0?5:-1);}}function Ti(n,_){if(n&1){let e=C();l(0,"button",24),T("click",function(){c(e);let i=s(2).$index,o=s();return d(o.swapItems(i,i+1));}),S(1,"app-icon-arrow-downward"),r();}}function pi(n,_){n&1&&S(0,"span",14);}function Si(n,_){if(n&1&&p(0,Ti,2,0,"button",23)(1,pi,1,0,"span",14),n&2){let e=s().$index,t=s();u(e<t.rule().items.length-1?0:1);}}function mi(n,_){if(n&1){let e=C();l(0,"button",25),T("click",function(){c(e);let i=s().$index,o=s();return d(o.deleteItem(i));}),S(1,"app-icon-delete"),r();}}function Ri(n,_){if(n&1){let e=C();l(0,"button",26),T("click",function(){c(e);let i=s().$index,o=s();return d(o.cutItem(i));}),S(1,"app-icon-cut"),r();}}function Ci(n,_){if(n&1){let e=C();l(0,"button",27),T("click",function(){c(e);let i=s().$index,o=s();return d(o.swapItems(i-1,i));}),S(1,"app-icon-arrow-upward"),r();}}function Ai(n,_){if(n&1){let e=C();l(0,"div",5),p(1,Si,2,1),l(2,"app-editor-item",19),T("itemChanged",function(i){let o=c(e).$index,a=s();return d(a.updateItem(o,i));}),r(),p(3,mi,2,0,"button",20)(4,Ri,2,0,"button",21)(5,Ci,2,0,"button",22),r();}if(n&2){let e=_.$implicit,t=_.$index,i=s();E(),u(i.mode()==="swap"&&i.rule().items.length>1?1:-1),E(),R("item",e),E(),u(i.mode()==="delete"?3:i.mode()==="cut-paste"?4:i.mode()==="swap"&&t>0?5:-1);}}function Pi(n,_){if(n&1){let e=C();l(0,"div",6)(1,"button",28),T("click",function(){c(e);let i=s();return d(i.addQuestion());}),P(2,0),r(),l(3,"button",29),T("click",function(){c(e);let i=s();return d(i.addItem());}),P(4,1),r()();}}function fi(n,_){if(n&1){let e=C();l(0,"button",32),T("click",function(){c(e);let i=s(2);return d(i.deleteRule.emit());}),S(1,"app-icon-delete"),r();}}function Li(n,_){if(n&1){let e=C();l(0,"button",33),T("click",function(){c(e);let i=s(2);return d(i.paste());}),S(1,"app-icon-paste"),r();}}function Oi(n,_){if(n&1&&(l(0,"div",7),p(1,fi,2,0,"button",30)(2,Li,2,0,"button",31),r()),n&2){let e=s();E(),u(e.mode()==="delete"?1:-1),E(),u(e.mode()==="cut-paste"?2:-1);}}var Nt=(()=>{class n{rule=M.required();ruleChanged=b();deleteRule=b();renameVariable=b();state=A(N);mode=this.state.rulesMode;selectVariables=g(()=>{let e=this.rule().questions.map(i=>i.variable);return this.state.variables().filter(i=>!e.includes(i));});clipboard=A(he);resetCondition(){this.updateCondition(new G());}updateCondition(e){let t=new W(e,this.rule().questions,this.rule().items);this.ruleChanged.emit(t);}emitNewQuestions(e){let t=new W(this.rule().condition,e,this.rule().items);this.ruleChanged.emit(t);}updateQuestion(e,t){let i=this.rule().questions;i[e]=t,this.emitNewQuestions(i);}addQuestion(){let e=new D(D.NEW_QUESTION_NAME,D.NEW_VARIABLE_NAME);this.updateQuestion(this.rule().questions.length,e);}deleteQuestion(e){let t=this.rule().questions;t.splice(e,1),this.emitNewQuestions(t);}cutQuestion(e){let t=this.rule().questions[e];this.deleteQuestion(e),this.clipboard.cutQuestion(t);}swapQuestions(e,t){let i=this.rule().questions,o=i[e];i[e]=i[t],i[t]=o,this.emitNewQuestions(i);}emitNewItems(e){let t=new W(this.rule().condition,this.rule().questions,e);this.ruleChanged.emit(t);}updateItem(e,t){let i=this.rule().items;i[e]=t,this.emitNewItems(i);}addItem(){let e=new j(j.NEW_CATEGORY_NAME,j.NEW_ITEM_NAME);this.updateItem(this.rule().items.length,e);}deleteItem(e){let t=this.rule().items;t.splice(e,1),this.emitNewItems(t);}cutItem(e){let t=this.rule().items[e];this.deleteItem(e),this.clipboard.cutItem(t);}swapItems(e,t){let i=this.rule().items,o=i[e];i[e]=i[t],i[t]=o,this.emitNewItems(i);}paste(){let{questions:e,items:t}=this.clipboard.paste(),i=new W(this.rule().condition,[...this.rule().questions,...e],[...this.rule().items,...t]);this.ruleChanged.emit(i);}variableChanged([e,t]){this.renameVariable.emit([e,t]);}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-editor-rule"]],inputs:{rule:[1,"rule"]},outputs:{ruleChanged:"ruleChanged",deleteRule:"deleteRule",renameVariable:"renameVariable"},decls:9,vars:4,consts:()=>{let e;e="Bedingung";let t;t="Bedingung zur\xFCcksetzen";let i;i="Frage l\xF6schen";let o;o="Frage ausschneiden";let a;a="Frage nach oben verschieben";let m;m="Frage nach unten verschieben";let L;L="Gegenstand l\xF6schen";let f;f="Gegenstand ausschneiden";let v;v="Gegenstand nach oben verschieben";let U;U="Gegenstand nach unten verschieben";let w;w="Frage hinzuf\xFCgen";let q;q="Gegenstand hinzuf\xFCgen";let O;O="+ Frage";let ie;ie="+ Gegenstand";let I;I="Regel l\xF6schen";let be;return be="Einf\xFCgen aus der Zwischenablage",[O,ie,["aria-label",e,"role","group",1,"mb-1","flex","items-center"],[1,"accessible-content","grow",3,"conditionChanged","condition","selectVariables"],["type","button","aria-label",t,1,"link"],[1,"mb-1","flex","items-center"],[1,"flex","justify-end","gap-2"],[1,"flex","justify-center"],["type","button","aria-label",t,1,"link",3,"click"],[1,"grow",3,"questionChanged","variableChanged","question"],["type","button","aria-label",i,1,"link"],["type","button","aria-label",o,1,"link"],["type","button","aria-label",a,1,"link","p-1"],["type","button","aria-label",m,1,"link","p-1"],[1,"ml-6"],["type","button","aria-label",m,1,"link","p-1",3,"click"],["type","button","aria-label",i,1,"link",3,"click"],["type","button","aria-label",o,1,"link",3,"click"],["type","button","aria-label",a,1,"link","p-1",3,"click"],[1,"grow",3,"itemChanged","item"],["type","button","aria-label",L,1,"link"],["type","button","aria-label",f,1,"link"],["type","button","aria-label",v,1,"link","p-1"],["type","button","aria-label",U,1,"link","p-1"],["type","button","aria-label",U,1,"link","p-1",3,"click"],["type","button","aria-label",L,1,"link",3,"click"],["type","button","aria-label",f,1,"link",3,"click"],["type","button","aria-label",v,1,"link","p-1",3,"click"],["type","button","aria-label",w,1,"h-8",3,"click"],["type","button","aria-label",q,1,"h-8",3,"click"],["type","button","aria-label",I,1,"link"],["type","button","aria-label",be,1,"link"],["type","button","aria-label",I,1,"link",3,"click"],["type","button","aria-label",be,1,"link",3,"click"]];},template:function(t,i){t&1&&(l(0,"div",2)(1,"app-editor-condition",3),T("conditionChanged",function(a){return i.updateCondition(a);}),r(),p(2,ri,2,0,"button",4),r(),Q(3,di,6,3,"div",5,ne),Q(5,Ai,6,3,"div",5,ne),p(7,Pi,5,0,"div",6)(8,Oi,3,2,"div",7)),t&2&&(E(),R("condition",i.rule().condition)("selectVariables",i.selectVariables()),E(),u(i.mode()==="edit"?2:-1),E(),K(i.rule().questions),E(2),K(i.rule().items),E(2),u(i.mode()==="edit"?7:8));},dependencies:[Lt,gt,It,me,Et,st,Re,dt,ut],encapsulation:2,changeDetection:0});}return n;})();var Ii=["button"],gi=["*"],Me=(()=>{class n{state=A(N);mode=this.state.rulesMode;type=M.required();label=M.required();disabled=M(!1);button=F("button");focusPrevious=b();focusNext=b();focus(){let e=this.button();e&&(e.nativeElement.focus(),this.mode.set(this.type()));}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-toolbar-button"]],viewQuery:function(t,i){t&1&&y(i.button,Ii,5),t&2&&H();},inputs:{type:[1,"type"],label:[1,"label"],disabled:[1,"disabled"]},outputs:{focusPrevious:"focusPrevious",focusNext:"focusNext"},ngContentSelectors:gi,decls:3,vars:6,consts:[["button",""],["type","button","role","radio",1,"link","h-full","w-full",3,"click","keypress","keydown.arrowLeft","keydown.arrowRight","tabIndex","disabled"]],template:function(t,i){if(t&1){let o=C();je(),l(0,"button",1,0),T("click",function(){return c(o),d(i.mode.set(i.type()));})("keypress",function(){return c(o),d(i.mode.set(i.type()));})("keydown.arrowLeft",function(){return c(o),d(i.focusPrevious.emit());})("keydown.arrowRight",function(){return c(o),d(i.focusNext.emit());}),Ye(2),r();}t&2&&(X("active",i.mode()===i.type()),R("tabIndex",i.mode()===i.type()?0:-1)("disabled",i.disabled()),de("aria-label",i.label())("aria-checked",i.mode()===i.type()));},encapsulation:2,changeDetection:0});}return n;})();var Ni=["searchInput"];function hi(n,_){if(n&1&&(tt(0)(1)(2),l(3,"div",12),P(4,1),r()),n&2){let e=s(2),t=e.clipboard.itemsCount(),i=e.clipboard.questionsCount(),o=!!t&&!!i;E(4),B(t)(t)(o)(i)(i),z(4);}}function Mi(n,_){if(n&1&&p(0,hi,5,5,"div",12),n&2){let e=s();u(e.clipboard.itemsCount()>0||e.clipboard.questionsCount()>0?0:-1);}}function bi(n,_){if(n&1){let e=C();l(0,"div",11)(1,"input",13,0),et("ngModelChange",function(i){c(e);let o=s();return Ze(o.searchTerm,i)||(o.searchTerm=i),d(i);}),r(),l(3,"button",14),T("click",function(){c(e);let i=s();return d(i.clearSearch());}),S(4,"app-icon-clear",15),r()();}if(n&2){let e=s();E(),Je("ngModel",e.searchTerm);}}var ht=(()=>{class n{toolbarButtons=Xe(Me);noOfVisibleRules=M.required();state=A(N);mode=this.state.rulesMode;searchTerm=this.state.filterRulesQuery;clipboard=A(he);sticky=g(()=>this.state.scrollY()>48);searchInput=F.required("searchInput");constructor(){V(()=>{this.toolbarButtons().forEach(e=>{e.focusNext.subscribe(()=>{this.focusNext();}),e.focusPrevious.subscribe(()=>{this.focusPrevious();});});});}focusNext(){let e=this.toolbarButtons(),t=e.length,i=e.findIndex(o=>o.type()===this.mode());if(i!==-1){let o=(i+1)%t;e[o].focus();}}focusPrevious(){let e=this.toolbarButtons(),t=e.length,i=e.findIndex(o=>o.type()===this.mode());if(i!==-1){let o=(i-1+t)%t;e[o].focus();}}focusSearch(){setTimeout(()=>{this.searchInput().nativeElement.focus();},50);}clearSearch(){this.searchTerm.set(""),this.focusSearch();}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-toolbar"]],viewQuery:function(t,i){t&1&&(y(i.toolbarButtons,Me,5),y(i.searchInput,Ni,5)),t&2&&H(2);},inputs:{noOfVisibleRules:[1,"noOfVisibleRules"]},decls:16,vars:7,consts:()=>{let e;e="Editor-Modus";let t;t="Ansehen";let i;i="Bearbeiten";let o;o="L\xF6schen";let a;a="Ausschneiden/Einf\xFCgen";let m;m="Tauschen";let L;L="Suche";let f;f="Zwischenablage";let v;v="{VAR_PLURAL, plural, =0 {} one {1 Gegenstand} other {{INTERPOLATION} Gegenst\xE4nde}}",v=Te(v,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"});let U;U="{VAR_SELECT, select, true {und} other {}}",U=Te(U,{VAR_SELECT:"\uFFFD2\uFFFD"});let w;w="{VAR_PLURAL, plural, =0 {} one {1 Frage} other {{INTERPOLATION} Fragen}}",w=Te(w,{INTERPOLATION:"\uFFFD4\uFFFD",VAR_PLURAL:"\uFFFD3\uFFFD"});let q;q="Zwischenablage: "+v+" "+U+" "+w+"";let O;O="in Regeln suchen";let ie;return ie="Suche l\xF6schen",[["searchInput",""],q,["role","toolbar","aria-orientation","horizontal",1,"bg-active","sticky","left-0","top-0","z-30","py-2"],["role","radiogroup","aria-label",e,1,"mb-1","grid","grid-cols-6","gap-2"],["type","view","label",t],[1,"my-auto","h-6","w-6"],["type","edit","label",i,3,"disabled"],["type","delete","label",o,3,"disabled"],["type","cut-paste","label",a,3,"disabled"],["type","swap","label",m,3,"disabled"],["type","search","label",L],[1,"mt-2","flex","items-center"],["role","status","aria-label",f,1,"mt-2","flex","justify-center","gap-4"],["type","text","role","searchbox","aria-label",O,1,"grow",3,"ngModelChange","ngModel"],["type","button","aria-label",ie,1,"link",3,"click"],[1,"h-6","w-6"]];},template:function(t,i){t&1&&(l(0,"div",2)(1,"div",3)(2,"app-toolbar-button",4),S(3,"app-icon-view",5),r(),l(4,"app-toolbar-button",6),S(5,"app-icon-edit",5),r(),l(6,"app-toolbar-button",7),S(7,"app-icon-delete",5),r(),l(8,"app-toolbar-button",8),S(9,"app-icon-reorder",5),r(),l(10,"app-toolbar-button",9),S(11,"app-icon-swap",5),r(),l(12,"app-toolbar-button",10),S(13,"app-icon-search",5),r()(),p(14,Mi,1,1)(15,bi,5,1,"div",11),r()),t&2&&(X("shadow-md",i.sticky()),E(4),R("disabled",!i.noOfVisibleRules()&&!!i.searchTerm()),E(2),R("disabled",!i.noOfVisibleRules()),E(2),R("disabled",i.noOfVisibleRules()<2&&!i.clipboard.itemsCount()&&!i.clipboard.questionsCount()),E(2),R("disabled",!i.noOfVisibleRules()),E(4),u(i.mode()==="cut-paste"?14:i.mode()==="search"||i.searchTerm()?15:-1));},dependencies:[ft,ee,te,Rt,_t,at,me,lt,Se,rt,Re,Me],encapsulation:2,changeDetection:0});}return n;})();var $i=(n,_)=>_.index,vi=(n,_,e,t)=>({disabled:n,"animate-pulse":_,"mb-[2.25rem]":e,"mb-12":t});function Vi(n,_){if(n&1){let e=C();l(0,"div",4)(1,"div",7)(2,"p"),P(3,0),r(),l(4,"button",8),T("click",function(){c(e);let i=s();return d(i.addRuleAndEdit());}),P(5,1),r()()();}}function Ui(n,_){if(n&1){let e=C();l(0,"div",9)(1,"button",12),T("click",function(){c(e);let i=s().$implicit,o=s();return d(o.swapRules(i.index-1,i.index));}),S(2,"app-icon-swap"),r()();}}function xi(n,_){if(n&1){let e=C();p(0,Ui,3,0,"div",9),l(1,"div",10)(2,"app-editor-rule",11),T("ruleChanged",function(i){let o=c(e).$implicit,a=s();return d(a.updateRule(o.index,i));})("deleteRule",function(){let i=c(e).$implicit,o=s();return d(o.deleteRule(i.index));})("renameVariable",function(i){c(e);let o=s();return d(o.renameVariable(i));}),r()();}if(n&2){let e=_.$implicit,t=s();u(e.index>0&&t.mode()==="swap"&&!t.filter()?0:-1),E(),Be(nt(6,vi,t.showAsDisabled(e.rule),t.highlightRule()===e.index,(t.mode()==="view"||t.mode()==="search")&&t.accessibility()==="compact",(t.mode()==="view"||t.mode()==="search")&&t.accessibility()==="accessible")),R("id","rule-"+e.index),de("aria-label",t.ruleLabel(e.index)),E(),R("rule",e.rule);}}function wi(n,_){if(n&1){let e=C();l(0,"button",13),T("click",function(){c(e);let i=s();return d(i.addRule());}),P(1,2),r();}}function yi(n,_){n&1&&(l(0,"a",6),S(1,"img",14),r());}var Hn=(()=>{class n{refactor=A(St);state=A(N);parsedRules=this.state.parsedRules;activeRules=this.state.activeRules;mode=this.state.rulesMode;accessibility=this.state.accessibility;filter=this.state.filterRulesQuery;highlightRule=qe(void 0);visibleRules=g(()=>this.filter()===""?this.parsedRules().map((t,i)=>({rule:t,index:i})):this.parsedRules().map((t,i)=>({rule:t,index:i})).filter(t=>{let i=this.filter();return!i||this.refactor.contains(t.rule,i);}));goToPacklistButtonVisible=g(()=>this.state.scrollY()>100);ruleLabel(e){return"Regel #"+(e+1).toString()+"";}updateRules(e){let t=Tt(e);this.state.rules.set(t);}updateRule(e,t){let i=this.parsedRules();i[e]=t,this.updateRules([...i]);}deleteRule(e){let t=this.parsedRules();t.splice(e,1),this.updateRules([...t]);}addRule(){let e=this.parsedRules().length,t=[];for(let a=0;a<this.parsedRules().length;a++){let m=document.querySelector(`#rule-${a.toString()}`);if(m){let L=m.getBoundingClientRect();L.top>=0&&L.bottom<=window.innerHeight&&t.push(a);}}t.includes(e-1)||(e=t[0]+1);let i=new W(new G()),o=this.parsedRules();o.splice(e,0,i),this.updateRules([...o]),this.highlightRule.set(e),setTimeout(()=>{this.highlightRule.set(void 0);},4e3);}addRuleAndEdit(){this.addRule(),this.mode.set("edit");}swapRules(e,t){let i=this.parsedRules(),o=i[e];i[e]=i[t],i[t]=o,this.updateRules([...i]);}showAsDisabled(e){return this.state.fadeOutDisabledRules()&&!this.activeRules().includes(e);}renameVariable([e,t]){let i=this.refactor.renameVariable(e,t,this.parsedRules());this.updateRules(i);}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-rules"]],decls:6,vars:4,consts:()=>{let e;e="Regel hinzuf\xFCgen";let t;t="Regel hinzuf\xFCgen";let i;i="Es sind noch keine Regeln definiert.";let o;o="+ Regel";let a;a="Obere Regel mit unterer Regel tauschen";let m;m="+ Regel";let L;return L="Anwendungssymbol",[i,o,m,[3,"noOfVisibleRules"],[1,"flex","h-[calc(100vh-4rem)]","items-center","justify-center"],["aria-label",e,"type","button",1,"fixed","bottom-2","z-50"],["routerLink","/packlist",1,"fixed","bottom-2","right-2","z-50"],[1,"flex","flex-col","items-center","gap-6"],["aria-label",t,"type","button",3,"click"],[1,"flex","justify-center"],["role","group","tabindex","0",1,"card","mb-1",3,"id"],[3,"ruleChanged","deleteRule","renameVariable","rule"],["type","button","aria-label",a,1,"link",3,"click"],["aria-label",e,"type","button",1,"fixed","bottom-2","z-50",3,"click"],["alt",L,"src","icon.svg",1,"h-12"]];},template:function(t,i){t&1&&(S(0,"app-toolbar",3),p(1,Vi,6,0,"div",4),Q(2,xi,3,11,null,null,$i),p(4,wi,2,0,"button",5)(5,yi,2,0,"a",6)),t&2&&(R("noOfVisibleRules",i.visibleRules().length),E(),u(!i.visibleRules().length&&!i.filter()?1:-1),E(),K(i.visibleRules()),E(2),u(i.mode()==="edit"&&!i.filter()&&i.visibleRules().length?4:-1),E(),u(i.goToPacklistButtonVisible()?5:-1));},dependencies:[Nt,ht,Se,ot],encapsulation:2,changeDetection:0});}return n;})();export{Hn as default};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/