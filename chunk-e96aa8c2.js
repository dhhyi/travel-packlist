import{c as Rt,d as xe}from"./chunk-349c35c9.js";import{a as _t,b as me,c as rt,d as lt,g as st,m as at,o as Ce,p as Et,r as Ae,u as ut,v as ct,w as dt}from"./chunk-d4af0442.js";import{b as ee,c as ae,d as te,e as Le,g as mt,h as Oe,j as ge,k as Ie,l as Ct,m as At,n as Pt,o as Ne,p as ft,q as he}from"./chunk-2302763c.js";import{B as g,a as Ue,b as Re,k as Tt,l as pt,n as W,o as y,p as j,q as Pe,r as G,s as re,t as fe,u as le,v as se,w as J,y as Z,z as St}from"./chunk-57797f53.js";import"./chunk-337215d3.js";import"./chunk-77e1066b.js";import{$b as _e,Ab as ze,Ba as Xe,Bb as u,C as ue,Cb as ne,Db as We,Eb as Q,Fb as K,Gb as s,Hb as r,Ib as h,Jb as je,Kb as S,Nb as A,Ob as B,Pb as z,Qb as de,Rb as T,Sb as l,T as Qe,Tb as Ye,Ub as He,Wb as D,X as Ke,Xb as H,Yb as Je,Za as E,Zb as x,_ as qe,_b as oe,bb as k,bc as Ze,cc as et,dc as tt,ea as C,eb as Ve,ec as it,fb as F,fc as Te,gb as ke,gc as pe,ic as nt,kb as $,kc as ot,la as c,m as Ee,ma as d,oc as Se,pb as p,q as ve,wb as ce,wc as M,xa as b,xb as m,y as Fe,ya as N,yb as X,zb as Be,zc as V}from"./chunk-46ff38a9.js";import"./chunk-c362d21a.js";var Me=(()=>{class n{parser=C(Z);state=C(g);questions=this.state.clipboard.questions;items=this.state.clipboard.items;itemsCount=M(()=>this.items().length);questionsCount=M(()=>this.questions().length);cutQuestion(e){this.questions.update(t=>[...t,e.toString()]);}cutItem(e){this.items.update(t=>[...t,e.toString()]);}paste(){let e={questions:this.questions().map(t=>this.parser.parseQuestion(t)),items:this.items().map(t=>this.parser.parseItem(t))};return this.questions.set([]),this.items.set([]),e;}static ɵfac=function(t){return new(t||n)();};static ɵprov=qe({token:n,factory:n.ɵfac,providedIn:"root"});}return n;})();var Mt=["content"],bt=["keyword"],$t=["variable"],vt=["select"],Vt=n=>({width:n});function Ut(n,_){if(n&1&&(s(0,"span",5),x(1),r()),n&2){let e=_.$implicit;E(),oe(e);}}function xt(n,_){if(n&1&&(s(0,"span",6),x(1),r()),n&2){let e=_.$implicit,t=l();X("text-green",t.highlighVariable()&&t.variableActive(e))("text-red",t.highlighVariable()&&!t.variableActive(e)),E(),oe(e);}}function wt(n,_){if(n&1&&(s(0,"option",8),x(1),r()),n&2){let e=l(2).$implicit,t=l();m("value",t.NOT),E(),_e("NOT ",t.variablePlaceholder(e),"");}}function Dt(n,_){if(n&1&&(s(0,"option",8),x(1),r()),n&2){let e=l(2).$implicit,t=l();m("value",t.AND),E(),_e("",t.variablePlaceholder(e)," AND x");}}function yt(n,_){if(n&1&&(s(0,"option",8),x(1),r()),n&2){let e=l(2).$implicit,t=l();m("value",t.OR),E(),_e("",t.variablePlaceholder(e)," OR x");}}function Gt(n,_){if(n&1&&(s(0,"option",8),x(1,"REMOVE"),r()),n&2){let e=l(4);m("value",e.REMOVE);}}function Ft(n,_){if(n&1&&p(0,Gt,2,1,"option",8),n&2){let e=l(2).$implicit,t=l();u(e!==t.PLEASE_SELECT?0:-1);}}function Qt(n,_){if(n&1&&(s(0,"option",9),x(1),r()),n&2){let e=l().$implicit,t=l().$implicit,i=l();m("value",e)("selected",t===e)("disabled",e===i.PLEASE_SELECT),E(),_e(" ",e," ");}}function Kt(n,_){if(n&1&&p(0,wt,2,2,"option",8)(1,Dt,2,2,"option",8)(2,yt,2,2,"option",8)(3,Ft,1,1)(4,Qt,2,4,"option",9),n&2){let e,t=_.$implicit,i=l(2);u((e=t)===i.NOT?0:e===i.AND?1:e===i.OR?2:e===i.REMOVE?3:4);}}function qt(n,_){if(n&1){let e=S();s(0,"select",7,4),T("change",function(){let i=c(e),o=i.$implicit,a=i.selection,R=Je(1);return d(a(R.value,o));}),Q(2,Kt,5,1,null,null,ne),r();}if(n&2){let e=_.options,t=_.width;Be(nt(2,Vt,t)),E(2),K(e);}}var we="NOT",De="AND",ye="OR",Ge="REMOVE",Lt=(()=>{class n{condition=N.required();selectVariables=N.required();content=F.required("content",{read:Ve});keywordTemplate=F.required("keyword",{read:k});variableTemplate=F.required("variable",{read:k});selectTemplate=F.required("select",{read:k});state=C(g);activeAnswers=this.state.active.answers;mode=this.state.router.rulesMode;highlighVariable=M(()=>this.mode()!=="edit"&&this.state.config.highlightVariableStatus());ALWAYS=re.string;PLEASE_SELECT=G.string;NOT=we;AND=De;OR=ye;REMOVE=Ge;conditionChanged=b();constructor(){V(()=>{this.mode(),this.condition(),this.selectVariables(),this.repaint();});}repaint(){this.content().clear(),this.paintKeyword("IF"),this.paintCondition(this.condition(),e=>{e?this.conditionChanged.emit(e):this.conditionChanged.emit(new G());});}calculateOptions(e){return[this.PLEASE_SELECT,this.ALWAYS,...this.selectVariables(),this.NOT,this.AND,this.OR,this.REMOVE].filter(t=>!e.includes(t));}createFromPrevious(e){return e===this.PLEASE_SELECT||e===this.ALWAYS?new G():new Pe(e);}selection(e,t){return e===this.NOT?new fe(this.createFromPrevious(t)):e===this.AND?new le(this.createFromPrevious(t),new G()):e===this.OR?new se(this.createFromPrevious(t),new G()):e===this.REMOVE?null:e===this.ALWAYS?new re():new Pe(e);}paintKeyword(e){this.content().createEmbeddedView(this.keywordTemplate(),{$implicit:e});}paintSelect(e,t,i){this.content().createEmbeddedView(this.selectTemplate(),{$implicit:e,options:this.calculateOptions(i),selection:(o,a)=>{t(this.selection(o,a));},width:(e.length*9+30).toString()+"px"});}paintVariable(e){this.content().createEmbeddedView(this.variableTemplate(),{$implicit:e});}paintCondition(e,t,i=[]){if(e instanceof fe){let o=i.filter(a=>a!==this.ALWAYS);this.paintKeyword("NOT"),this.paintCondition(e.not,a=>{t(a?new fe(a):null);},o);}else if(e instanceof le){let o=[...i,this.ALWAYS];this.paintCondition(e.left,a=>{t(a?new le(a,e.right):e.right);},o),this.paintKeyword("AND"),this.paintCondition(e.right,a=>{t(a?new le(e.left,a):e.left);},o);}else if(e instanceof se){let o=[...i,this.ALWAYS];this.paintCondition(e.left,a=>{t(a?new se(a,e.right):e.right);},o),this.paintKeyword("OR"),this.paintCondition(e.right,a=>{t(a?new se(e.left,a):e.left);},o);}else e instanceof Pe&&(this.mode()==="edit"?this.paintSelect(e.variable,t,i):this.paintVariable(e.variable));}variableActive(e){return this.activeAnswers()[e];}variablePlaceholder(e){return e===this.ALWAYS||e===this.PLEASE_SELECT?"x":e;}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-editor-condition"]],viewQuery:function(t,i){t&1&&(D(i.content,Mt,5,Ve),D(i.keywordTemplate,bt,5,k),D(i.variableTemplate,$t,5,k),D(i.selectTemplate,vt,5,k)),t&2&&H(4);},inputs:{condition:[1,"condition"],selectVariables:[1,"selectVariables"]},outputs:{conditionChanged:"conditionChanged"},decls:8,vars:0,consts:()=>{let e;return e="Variable",[["content",""],["keyword",""],["variable",""],["select",""],["selectbox",""],["role","text",1,"font-bold"],[1,"font-mono","font-bold"],["role","combobox","aria-label",e,1,"font-mono",3,"change"],[3,"value"],[3,"value","selected","disabled"]];},template:function(t,i){t&1&&(je(0,null,0),p(2,Ut,2,1,"ng-template",null,1,Se)(4,xt,2,5,"ng-template",null,2,Se)(6,qt,4,4,"ng-template",null,3,Se));},styles:["[_nghost-%COMP%]{display:flex;min-height:2rem;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:.5rem}"],changeDetection:0});}return n;})();function Xt(n,_){if(n&1&&(s(0,"option",4),x(1),r()),n&2){let e=_.$implicit;m("value",e),E(),oe(e);}}function kt(n,_){n&1&&(s(0,"span"),A(1,0),r()),n&2&&(E(),B(_),z(1));}function Bt(n,_){n&1&&(s(0,"span"),A(1,1),r());}function zt(n,_){if(n&1&&p(0,kt,2,1,"span")(1,Bt,2,0,"span"),n&2){let e,t=l(2);u((e=t.form.controls.name.errors==null?null:t.form.controls.name.errors.pattern)?0:-1,e),E(),u(t.form.controls.name.errors!=null&&t.form.controls.name.errors.required?1:-1);}}function Wt(n,_){if(n&1&&(s(0,"div",7),p(1,zt,2,2),r()),n&2){let e=l();E(),u(e.form.controls.name.touched?1:-1);}}var gt=(()=>{class n{item=N.required();state=C(g);mode=this.state.router.rulesMode;categories=this.state.rules.categories;itemChanged=b();fb=C(Ne).nonNullable;form=this.fb.group({category:this.fb.control(""),name:this.fb.control("",{validators:[this.validateNamePattern(),ae.required.bind(this)]})});parser=C(Z);constructor(){V(()=>{this.item(),this.reset();});let e=Re(this.form.valueChanges.pipe(ue(()=>this.form.valid)));V(()=>{let t=e();if(!t?.name)return;if(!t.category){this.addNewCategory();return;}let i=new j(t.category,t.name).toString();this.itemChanged.emit(this.parser.parseItem(i));}),V(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}blockPatch=!1;reset(){if(!this.blockPatch){let e=this.item().name;this.item().weight&&(e+=` ${pt(this.item().weight)}`),this.form.patchValue({category:this.item().category,name:e},{emitEvent:!1});}}focus(e){this.blockPatch=document.activeElement===e.target,this.form.controls.name.value===j.NEW_ITEM_NAME&&this.form.controls.name.setValue("",{emitEvent:!1});}blur(){this.blockPatch=!1,this.reset();}async addNewCategory(e=""){let t=await Rt("Enter new category name",e);if(t)try{this.parser.validateCategoryName(t),this.form.patchValue({category:t});}catch(i){if(i instanceof J){let o=i.found;await xe("Kategoriename darf '"+o+"' nicht enthalten");}else console.error(i),await xe("Ung\xFCltiger Kategoriename");this.addNewCategory(t);}else this.reset();}validateNamePattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateItemNameAndWeight(t),null;}catch(i){return i instanceof J?{pattern:i.found}:{pattern:!0};}};}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-editor-item"]],inputs:{item:[1,"item"]},outputs:{itemChanged:"itemChanged"},decls:8,vars:2,consts:()=>{let e;e="Gegenstand";let t;t="Kategorie";let i;i="Gegenstandsname";let o;o="Gegenstandsname darf das Zeichen '"+"\uFFFD0\uFFFD"+"' nicht enthalten";let a;return a="Gegenstandsname ist erforderlich",[o,a,["role","group","aria-label",e,1,"flex",3,"formGroup"],["name","categories","formControlName","category","aria-label",t,1,"max-w-[5rem]"],[3,"value"],["value",""],["type","text","formControlName","name","aria-label",i,1,"w-0","flex-1",3,"focus","blur"],["role","alert",1,"text-red-light","m-1","text-sm"]];},template:function(t,i){t&1&&(s(0,"form",2)(1,"select",3),Q(2,Xt,2,2,"option",4,We),s(4,"option",5),x(5,"+"),r()(),s(6,"input",6),T("focus",function(a){return i.focus(a);})("blur",function(){return i.blur();}),r()(),p(7,Wt,2,1,"div",7)),t&2&&(m("formGroup",i.form),E(2),K(i.categories()),E(5),u(i.mode()==="edit"&&i.form.valid===!1&&i.form.dirty?7:-1));},dependencies:[he,Oe,At,Pt,ee,Ct,te,Le,ge,Ie],encapsulation:2,changeDetection:0});}return n;})();function jt(n,_){n&1&&(s(0,"span"),A(1,0),r()),n&2&&(E(),B(_),z(1));}function Yt(n,_){n&1&&(s(0,"span"),A(1,1),r());}function Ht(n,_){n&1&&(s(0,"span"),A(1,2),r());}function Jt(n,_){if(n&1&&(s(0,"span"),A(1,3),r()),n&2){let e=l();E(),B(e),z(1);}}function Zt(n,_){n&1&&p(0,Ht,2,0,"span")(1,Jt,2,1,"span"),n&2&&u(_===" "?0:1);}function ei(n,_){n&1&&(s(0,"span"),A(1,4),r());}function ti(n,_){n&1&&(s(0,"span"),A(1,5),r());}function ii(n,_){n&1&&(s(0,"span"),A(1,6),r());}function ni(n,_){if(n&1&&(s(0,"div",12),p(1,jt,2,1,"span")(2,Yt,2,0,"span")(3,Zt,2,1)(4,ei,2,0,"span")(5,ti,2,0,"span")(6,ii,2,0,"span"),r()),n&2){let e,t,i=l();E(),u((e=i.form.controls.question.errors==null?null:i.form.controls.question.errors.pattern)?1:-1,e),E(),u(i.form.controls.question.errors!=null&&i.form.controls.question.errors.required?2:-1),E(),u((t=i.form.controls.variable.errors==null?null:i.form.controls.variable.errors.pattern)?3:-1,t),E(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.required?4:-1),E(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.reserved?5:-1),E(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.used?6:-1);}}var It=(()=>{class n{question=N.required();parser=C(Z);state=C(g);variables=this.state.rules.variables;mode=this.state.router.rulesMode;highlighVariable=M(()=>this.mode()!=="edit"&&this.state.config.highlightVariableStatus());variableActive=M(()=>this.state.active.answers()[this.question().variable]);refactorVariables=this.state.config.refactorVariables;questionChanged=b();variableChanged=b();fb=C(Ne).nonNullable;form=this.fb.group({question:this.fb.control("",{validators:[this.validateQuestionPattern(),ae.required.bind(this)]}),variable:this.fb.control("",{validators:[this.validateVariablePattern(),oi(),ae.required.bind(this)],asyncValidators:[_i(Ue(this.variables),Ue(this.question))]})});constructor(){V(()=>{this.question(),this.reset();});let e=Re(this.form.valueChanges.pipe(ue(()=>this.form.valid)));V(()=>{let t=e();t?.question&&t.question!==this.question().question&&t.variable?this.questionChanged.emit(new y(t.question,t.variable)):t?.variable&&t.variable.trim()!==this.question().variable&&(this.question().variable===y.NEW_VARIABLE_NAME||!this.refactorVariables()?this.questionChanged.emit(new y(this.question().question,t.variable.trim())):this.variableChanged.emit([this.question().variable,t.variable.trim()]));}),V(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}reset(){this.form.patchValue(this.question(),{emitEvent:!1});}focusQuestion(){this.form.controls.question.value===y.NEW_QUESTION_NAME&&this.form.controls.question.setValue("",{emitEvent:!1});}focusVariable(){this.form.controls.variable.value===y.NEW_VARIABLE_NAME&&this.form.controls.variable.setValue("",{emitEvent:!1});}validateVariablePattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateVariableName(t),null;}catch(i){return i instanceof J?{pattern:i.found}:{pattern:!0};}};}validateQuestionPattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateQuestionString(t),null;}catch(i){return i instanceof J?{pattern:i.found}:{pattern:!0};}};}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-editor-question"]],inputs:{question:[1,"question"]},outputs:{questionChanged:"questionChanged",variableChanged:"variableChanged"},decls:6,vars:6,consts:()=>{let e;e="Frage";let t;t="Frage";let i;i="Frage";let o;o="Variable";let a;a="Variable";let R;R="Fragen d\xFCrfen dieses Zeichen nicht enthalten: '"+"\uFFFD0\uFFFD"+"'";let f;f="Frage ist erforderlich";let P;P="Variablen d\xFCrfen keine Leerzeichen enthalten";let v;v="Variablen d\xFCrfen dieses Zeichen nicht enthalten: '"+"\uFFFD0\uFFFD"+"'";let U;U="Variablenname ist erforderlich";let w;w="Dieser Variablenname ist reserviert";let q;return q="Dieser Variablenname wird bereits verwendet",[R,f,P,v,U,w,q,["role","group","aria-label",e,1,"flex","flex-col",3,"formGroup"],["type","text","placeholder",t,"aria-label",i,"formControlName","question",1,"grow",3,"focus"],[1,"flex","items-center","gap-2"],[1,"ml-2","h-4"],["type","text","placeholder",o,"aria-label",a,"formControlName","variable",1,"grow","font-mono","font-bold",3,"focus"],["role","alert",1,"text-red","m-1","flex","flex-col","text-sm"]];},template:function(t,i){t&1&&(s(0,"form",7)(1,"input",8),T("focus",function(){return i.focusQuestion();}),r(),s(2,"div",9),h(3,"app-icon-arrow-forward",10),s(4,"input",11),T("focus",function(){return i.focusVariable();}),r()(),p(5,ni,7,6,"div",12),r()),t&2&&(m("formGroup",i.form),E(4),X("text-green",i.highlighVariable()&&i.variableActive())("text-red",i.highlighVariable()&&!i.variableActive()),E(),u(i.mode()==="edit"&&i.form.valid===!1&&i.form.dirty?5:-1));},dependencies:[he,Oe,ee,te,Le,ge,Ie,ct],encapsulation:2,changeDetection:0});}return n;})();function oi(){return n=>[re.string,we,De,ye,Ge].some(_=>_===n.value?.trim())?{reserved:!0}:null;}function _i(n,_){return e=>Ee(e.value).pipe(Ke(n.pipe(ve(t=>[...t])),_),Qe(([t,i,o])=>Fe(()=>!i.find(a=>a===o.variable),Ee(null),Ee([t,i,o]).pipe(ve(([a,R,f])=>{let P=R.findIndex(v=>v===f.variable);return R.splice(P,1),R.includes(a?.trim()??"")?{used:!0}:null;})))));}function ri(n,_){if(n&1){let e=S();s(0,"button",8),T("click",function(){c(e);let i=l();return d(i.resetCondition());}),r();}}function li(n,_){if(n&1){let e=S();s(0,"button",15),T("click",function(){c(e);let i=l(2).$index,o=l();return d(o.swapQuestions(i,i+1));}),r();}}function si(n,_){n&1&&h(0,"span",14);}function ai(n,_){if(n&1&&p(0,li,1,0,"button",13)(1,si,1,0,"span",14),n&2){let e=l().$index,t=l();u(e<t.rule().questions.length-1?0:1);}}function Ei(n,_){if(n&1){let e=S();s(0,"button",16),T("click",function(){c(e);let i=l().$index,o=l();return d(o.deleteQuestion(i));}),r();}}function ui(n,_){if(n&1){let e=S();s(0,"button",17),T("click",function(){c(e);let i=l().$index,o=l();return d(o.cutQuestion(i));}),r();}}function ci(n,_){if(n&1){let e=S();s(0,"button",18),T("click",function(){c(e);let i=l().$index,o=l();return d(o.swapQuestions(i-1,i));}),r();}}function di(n,_){if(n&1){let e=S();s(0,"div",5),p(1,ai,2,1),s(2,"app-editor-question",9),T("questionChanged",function(i){let o=c(e).$index,a=l();return d(a.updateQuestion(o,i));})("variableChanged",function(i){c(e);let o=l();return d(o.variableChanged(i));}),r(),p(3,Ei,1,0,"button",10)(4,ui,1,0,"button",11)(5,ci,1,0,"button",12),r();}if(n&2){let e=_.$implicit,t=_.$index,i=l();E(),u(i.mode()==="swap"&&i.rule().questions.length>1?1:-1),E(),m("question",e),E(),u(i.mode()==="delete"?3:i.mode()==="cut-paste"?4:i.mode()==="swap"&&t>0?5:-1);}}function Ti(n,_){if(n&1){let e=S();s(0,"button",24),T("click",function(){c(e);let i=l(2).$index,o=l();return d(o.swapItems(i,i+1));}),r();}}function pi(n,_){n&1&&h(0,"span",14);}function Si(n,_){if(n&1&&p(0,Ti,1,0,"button",23)(1,pi,1,0,"span",14),n&2){let e=l().$index,t=l();u(e<t.rule().items.length-1?0:1);}}function Ri(n,_){if(n&1){let e=S();s(0,"button",25),T("click",function(){c(e);let i=l().$index,o=l();return d(o.deleteItem(i));}),r();}}function mi(n,_){if(n&1){let e=S();s(0,"button",26),T("click",function(){c(e);let i=l().$index,o=l();return d(o.cutItem(i));}),r();}}function Ci(n,_){if(n&1){let e=S();s(0,"button",27),T("click",function(){c(e);let i=l().$index,o=l();return d(o.swapItems(i-1,i));}),r();}}function Ai(n,_){if(n&1){let e=S();s(0,"div",5),p(1,Si,2,1),s(2,"app-editor-item",19),T("itemChanged",function(i){let o=c(e).$index,a=l();return d(a.updateItem(o,i));}),r(),p(3,Ri,1,0,"button",20)(4,mi,1,0,"button",21)(5,Ci,1,0,"button",22),r();}if(n&2){let e=_.$implicit,t=_.$index,i=l();E(),u(i.mode()==="swap"&&i.rule().items.length>1?1:-1),E(),m("item",e),E(),u(i.mode()==="delete"?3:i.mode()==="cut-paste"?4:i.mode()==="swap"&&t>0?5:-1);}}function Pi(n,_){if(n&1){let e=S();s(0,"div",6)(1,"button",28),T("click",function(){c(e);let i=l();return d(i.addQuestion());}),A(2,0),r(),s(3,"button",29),T("click",function(){c(e);let i=l();return d(i.addItem());}),A(4,1),r()();}}function fi(n,_){if(n&1){let e=S();s(0,"button",32),T("click",function(){c(e);let i=l(2);return d(i.deleteRule.emit());}),r();}}function Li(n,_){if(n&1){let e=S();s(0,"button",33),T("click",function(){c(e);let i=l(2);return d(i.paste());}),r();}}function Oi(n,_){if(n&1&&(s(0,"div",7),p(1,fi,1,0,"button",30)(2,Li,1,0,"button",31),r()),n&2){let e=l();E(),u(e.mode()==="delete"?1:-1),E(),u(e.mode()==="cut-paste"?2:-1);}}var Nt=(()=>{class n{rule=N.required();ruleChanged=b();deleteRule=b();renameVariable=b();state=C(g);mode=this.state.router.rulesMode;selectVariables=M(()=>{let e=this.rule().questions.map(i=>i.variable);return this.state.rules.variables().filter(i=>!e.includes(i));});clipboard=C(Me);resetCondition(){this.updateCondition(new G());}updateCondition(e){let t=new W(e,this.rule().questions,this.rule().items);this.ruleChanged.emit(t);}emitNewQuestions(e){let t=new W(this.rule().condition,e,this.rule().items);this.ruleChanged.emit(t);}updateQuestion(e,t){let i=this.rule().questions;i[e]=t,this.emitNewQuestions(i);}addQuestion(){let e=new y(y.NEW_QUESTION_NAME,y.NEW_VARIABLE_NAME);this.updateQuestion(this.rule().questions.length,e);}deleteQuestion(e){let t=this.rule().questions;t.splice(e,1),this.emitNewQuestions(t);}cutQuestion(e){let t=this.rule().questions[e];this.deleteQuestion(e),this.clipboard.cutQuestion(t);}swapQuestions(e,t){let i=this.rule().questions,o=i[e];i[e]=i[t],i[t]=o,this.emitNewQuestions(i);}emitNewItems(e){let t=new W(this.rule().condition,this.rule().questions,e);this.ruleChanged.emit(t);}updateItem(e,t){let i=this.rule().items;i[e]=t,this.emitNewItems(i);}addItem(){let e=new j(j.NEW_CATEGORY_NAME,j.NEW_ITEM_NAME);this.updateItem(this.rule().items.length,e);}deleteItem(e){let t=this.rule().items;t.splice(e,1),this.emitNewItems(t);}cutItem(e){let t=this.rule().items[e];this.deleteItem(e),this.clipboard.cutItem(t);}swapItems(e,t){let i=this.rule().items,o=i[e];i[e]=i[t],i[t]=o,this.emitNewItems(i);}paste(){let{questions:e,items:t}=this.clipboard.paste(),i=new W(this.rule().condition,[...this.rule().questions,...e],[...this.rule().items,...t]);this.ruleChanged.emit(i);}variableChanged([e,t]){this.renameVariable.emit([e,t]);}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-editor-rule"]],inputs:{rule:[1,"rule"]},outputs:{ruleChanged:"ruleChanged",deleteRule:"deleteRule",renameVariable:"renameVariable"},decls:9,vars:4,consts:()=>{let e;e="Bedingung";let t;t="Bedingung zur\xFCcksetzen";let i;i="Frage l\xF6schen";let o;o="Frage ausschneiden";let a;a="Frage nach oben verschieben";let R;R="Frage nach unten verschieben";let f;f="Gegenstand l\xF6schen";let P;P="Gegenstand ausschneiden";let v;v="Gegenstand nach oben verschieben";let U;U="Gegenstand nach unten verschieben";let w;w="Frage hinzuf\xFCgen";let q;q="Gegenstand hinzuf\xFCgen";let L;L="+ Frage";let ie;ie="+ Gegenstand";let O;O="Regel l\xF6schen";let $e;return $e="Einf\xFCgen aus der Zwischenablage",[L,ie,["aria-label",e,"role","group",1,"mb-1","flex","items-center"],[1,"accessible-content","grow",3,"conditionChanged","condition","selectVariables"],["iconClear","","type","button","aria-label",t,1,"link"],[1,"mb-1","flex","items-center"],[1,"flex","justify-end","gap-2"],[1,"flex","justify-center"],["iconClear","","type","button","aria-label",t,1,"link",3,"click"],[1,"w-0","grow",3,"questionChanged","variableChanged","question"],["iconDelete","","type","button","aria-label",i,1,"link"],["iconCut","","type","button","aria-label",o,1,"link"],["iconArrowUpward","","type","button","aria-label",a,1,"link","p-1"],["iconArrowDownward","","type","button","aria-label",R,1,"link","p-1"],[1,"ml-6"],["iconArrowDownward","","type","button","aria-label",R,1,"link","p-1",3,"click"],["iconDelete","","type","button","aria-label",i,1,"link",3,"click"],["iconCut","","type","button","aria-label",o,1,"link",3,"click"],["iconArrowUpward","","type","button","aria-label",a,1,"link","p-1",3,"click"],[1,"grow",3,"itemChanged","item"],["iconDelete","","type","button","aria-label",f,1,"link"],["iconCut","","type","button","aria-label",P,1,"link"],["iconArrowUpward","","type","button","aria-label",v,1,"link","p-1"],["iconArrowDownward","","type","button","aria-label",U,1,"link","p-1"],["iconArrowDownward","","type","button","aria-label",U,1,"link","p-1",3,"click"],["iconDelete","","type","button","aria-label",f,1,"link",3,"click"],["iconCut","","type","button","aria-label",P,1,"link",3,"click"],["iconArrowUpward","","type","button","aria-label",v,1,"link","p-1",3,"click"],["type","button","aria-label",w,1,"h-8",3,"click"],["type","button","aria-label",q,1,"h-8",3,"click"],["iconDelete","","type","button","aria-label",O,1,"link"],["iconPaste","","type","button","aria-label",$e,1,"link"],["iconDelete","","type","button","aria-label",O,1,"link",3,"click"],["iconPaste","","type","button","aria-label",$e,1,"link",3,"click"]];},template:function(t,i){t&1&&(s(0,"div",2)(1,"app-editor-condition",3),T("conditionChanged",function(a){return i.updateCondition(a);}),r(),p(2,ri,1,0,"button",4),r(),Q(3,di,6,3,"div",5,ne),Q(5,Ai,6,3,"div",5,ne),p(7,Pi,5,0,"div",6)(8,Oi,3,2,"div",7)),t&2&&(E(),m("condition",i.rule().condition)("selectVariables",i.selectVariables()),E(),u(i.mode()==="edit"?2:-1),E(),K(i.rule().questions),E(2),K(i.rule().items),E(2),u(i.mode()==="edit"?7:8));},dependencies:[Lt,It,gt,Ce,Et,st,Ae,dt,ut],encapsulation:2,changeDetection:0});}return n;})();var gi=["button"],Ii=["*"],be=(()=>{class n{state=C(g);mode=this.state.router.rulesMode;type=N.required();label=N.required();disabled=N(!1);button=F("button");focusPrevious=b();focusNext=b();focus(){let e=this.button();e&&(e.nativeElement.focus(),this.mode.set(this.type()));}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-toolbar-button"]],viewQuery:function(t,i){t&1&&D(i.button,gi,5),t&2&&H();},inputs:{type:[1,"type"],label:[1,"label"],disabled:[1,"disabled"]},outputs:{focusPrevious:"focusPrevious",focusNext:"focusNext"},ngContentSelectors:Ii,decls:3,vars:6,consts:[["button",""],["type","button","role","radio",1,"link","h-full","w-full",3,"click","keypress","keydown.arrowLeft","keydown.arrowRight","tabIndex","disabled"]],template:function(t,i){if(t&1){let o=S();Ye(),s(0,"button",1,0),T("click",function(){return c(o),d(i.mode.set(i.type()));})("keypress",function(){return c(o),d(i.mode.set(i.type()));})("keydown.arrowLeft",function(){return c(o),d(i.focusPrevious.emit());})("keydown.arrowRight",function(){return c(o),d(i.focusNext.emit());}),He(2),r();}t&2&&(X("active",i.mode()===i.type()),m("tabIndex",i.mode()===i.type()?0:-1)("disabled",i.disabled()),ce("aria-label",i.label())("aria-checked",i.mode()===i.type()));},encapsulation:2,changeDetection:0});}return n;})();var Ni=["searchInput"];function hi(n,_){if(n&1&&(s(0,"div",12),A(1,1),r()),n&2){l();let e=pe(0),t=pe(1),i=pe(2);E(),B(e)(e)(i)(t)(t),z(1);}}function Mi(n,_){if(n&1&&(it(0)(1)(2),p(3,hi,2,5,"div",12)),n&2){let e=l(),t=Te(e.clipboardItems());E();let i=Te(e.clipboardQuestions());E(),Te(!!t&&!!i),E(),u(t>0||i>0?3:-1);}}function bi(n,_){if(n&1){let e=S();s(0,"div",11)(1,"input",13,0),tt("ngModelChange",function(i){c(e);let o=l();return et(o.searchTerm,i)||(o.searchTerm=i),d(i);}),r(),s(3,"button",14),T("click",function(){c(e);let i=l();return d(i.clearSearch());}),r()();}if(n&2){let e=l();E(),Ze("ngModel",e.searchTerm);}}var ht=(()=>{class n{toolbarButtons=ke(be);noOfVisibleRules=N.required();state=C(g);mode=this.state.router.rulesMode;searchTerm=this.state.router.filterRulesQuery;clipboard=C(Me);clipboardItems=this.clipboard.itemsCount;clipboardQuestions=this.clipboard.questionsCount;sticky=M(()=>this.state.browser.scrollY()>48);searchInput=F.required("searchInput");constructor(){V(()=>{this.toolbarButtons().forEach(e=>{e.focusNext.subscribe(()=>{this.focusNext();}),e.focusPrevious.subscribe(()=>{this.focusPrevious();});});});}focusNext(){let e=this.toolbarButtons(),t=e.length,i=e.findIndex(o=>o.type()===this.mode());if(i!==-1){let o=(i+1)%t;e[o].focus();}}focusPrevious(){let e=this.toolbarButtons(),t=e.length,i=e.findIndex(o=>o.type()===this.mode());if(i!==-1){let o=(i-1+t)%t;e[o].focus();}}focusSearch(){setTimeout(()=>{this.searchInput().nativeElement.focus();},50);}clearSearch(){this.searchTerm.set(""),this.focusSearch();}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-toolbar"]],viewQuery:function(t,i){t&1&&(D(i.toolbarButtons,be,5),D(i.searchInput,Ni,5)),t&2&&H(2);},inputs:{noOfVisibleRules:[1,"noOfVisibleRules"]},decls:16,vars:7,consts:()=>{let e;e="Editor-Modus";let t;t="Ansehen";let i;i="Bearbeiten";let o;o="L\xF6schen";let a;a="Ausschneiden/Einf\xFCgen";let R;R="Tauschen";let f;f="Suche";let P;P="Zwischenablage";let v;v="{VAR_PLURAL, plural, =0 {} one {1 Gegenstand} other {{INTERPOLATION} Gegenst\xE4nde}}",v=de(v,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"});let U;U="{VAR_SELECT, select, true {und} other {}}",U=de(U,{VAR_SELECT:"\uFFFD2\uFFFD"});let w;w="{VAR_PLURAL, plural, =0 {} one {1 Frage} other {{INTERPOLATION} Fragen}}",w=de(w,{INTERPOLATION:"\uFFFD4\uFFFD",VAR_PLURAL:"\uFFFD3\uFFFD"});let q;q="Zwischenablage: "+v+" "+U+" "+w+"";let L;L="in Regeln suchen";let ie;return ie="Suche l\xF6schen",[["searchInput",""],q,["role","toolbar","aria-orientation","horizontal",1,"bg-active","sticky","left-0","top-0","z-30","py-2"],["role","radiogroup","aria-label",e,1,"mb-1","grid","grid-cols-6","gap-2"],["type","view","label",t],[1,"my-auto","h-6","w-6"],["type","edit","label",i,3,"disabled"],["type","delete","label",o,3,"disabled"],["type","cut-paste","label",a,3,"disabled"],["type","swap","label",R,3,"disabled"],["type","search","label",f],[1,"mt-2","flex","items-center"],["role","status","aria-label",P,1,"mt-2","flex","justify-center","gap-4"],["type","text","role","searchbox","aria-label",L,1,"grow",3,"ngModelChange","ngModel"],["iconClear","","iconClass","h-6 w-6","type","button","aria-label",ie,1,"link",3,"click"]];},template:function(t,i){t&1&&(s(0,"div",2)(1,"div",3)(2,"app-toolbar-button",4),h(3,"app-icon-view",5),r(),s(4,"app-toolbar-button",6),h(5,"app-icon-edit",5),r(),s(6,"app-toolbar-button",7),h(7,"app-icon-delete",5),r(),s(8,"app-toolbar-button",8),h(9,"app-icon-reorder",5),r(),s(10,"app-toolbar-button",9),h(11,"app-icon-swap",5),r(),s(12,"app-toolbar-button",10),h(13,"app-icon-search",5),r()(),p(14,Mi,4,4)(15,bi,4,1,"div",11),r()),t&2&&(X("shadow-md",i.sticky()),E(4),m("disabled",!i.noOfVisibleRules()&&!!i.searchTerm()),E(2),m("disabled",!i.noOfVisibleRules()),E(2),m("disabled",i.noOfVisibleRules()<2&&!i.clipboardItems()&&!i.clipboardQuestions()),E(2),m("disabled",!i.noOfVisibleRules()),E(4),u(i.mode()==="cut-paste"?14:i.mode()==="search"||i.searchTerm()?15:-1));},dependencies:[ft,ee,te,mt,_t,at,Ce,lt,me,rt,Ae,be],encapsulation:2,changeDetection:0});}return n;})();var $i=(n,_)=>_.index,vi=(n,_,e,t)=>({disabled:n,"animate-pulse":_,"mb-[2.25rem]":e,"mb-12":t});function Vi(n,_){if(n&1){let e=S();s(0,"div",4)(1,"div",7)(2,"p"),A(3,0),r(),s(4,"button",8),T("click",function(){c(e);let i=l();return d(i.addRuleAndEdit());}),A(5,1),r()()();}}function Ui(n,_){if(n&1){let e=S();s(0,"div",9)(1,"button",12),T("click",function(){c(e);let i=l().$implicit,o=l();return d(o.swapRules(i.index-1,i.index));}),r()();}}function xi(n,_){if(n&1){let e=S();p(0,Ui,2,0,"div",9),s(1,"div",10)(2,"app-editor-rule",11),T("ruleChanged",function(i){let o=c(e).$implicit,a=l();return d(a.updateRule(o.index,i));})("deleteRule",function(){let i=c(e).$implicit,o=l();return d(o.deleteRule(i.index));})("renameVariable",function(i){c(e);let o=l();return d(o.renameVariable(i));}),r()();}if(n&2){let e=_.$implicit,t=l();u(e.index>0&&t.mode()==="swap"&&!t.filter()?0:-1),E(),ze(ot(6,vi,t.showAsDisabled(e.rule),t.highlightRule()===e.index,(t.mode()==="view"||t.mode()==="search")&&t.accessibility()==="compact",(t.mode()==="view"||t.mode()==="search")&&t.accessibility()==="accessible")),m("id","rule-"+e.index),ce("aria-label",t.ruleLabel(e.index)),E(),m("rule",e.rule);}}function wi(n,_){if(n&1){let e=S();s(0,"button",13),T("click",function(){c(e);let i=l();return d(i.addRule());}),A(1,2),r();}}function Di(n,_){if(n&1){let e=S();s(0,"a",14),T("click",function(){c(e);let i=l();return d(i.goToPacklist());}),h(1,"img",15),r();}}var Yn=(()=>{class n{refactor=C(St);state=C(g);parsedRules=this.state.rules.parsed;activeRules=this.state.active.rules;mode=this.state.router.rulesMode;accessibility=this.state.config.accessibility;filter=this.state.router.filterRulesQuery;highlightRule=Xe(void 0);visibleRules=M(()=>this.filter()===""?this.parsedRules().map((t,i)=>({rule:t,index:i})):this.parsedRules().map((t,i)=>({rule:t,index:i})).filter(t=>{let i=this.filter();return!i||this.refactor.contains(t.rule,i);}));goToPacklistButtonVisible=M(()=>this.state.browser.scrollY()>100);ruleLabel(e){return"Regel #"+(e+1).toString()+"";}updateRules(e){let t=Tt(e);this.state.rules.raw.set(t);}updateRule(e,t){let i=this.parsedRules();i[e]=t,this.updateRules([...i]);}deleteRule(e){let t=this.parsedRules();t.splice(e,1),this.updateRules([...t]);}addRule(){let e=this.parsedRules().length,t=[];for(let a=0;a<this.parsedRules().length;a++){let R=document.querySelector(`#rule-${a.toString()}`);if(R){let f=R.getBoundingClientRect();f.top>=0&&f.bottom<=window.innerHeight&&t.push(a);}}t.includes(e-1)||(e=t[0]+1);let i=new W(new G()),o=this.parsedRules();o.splice(e,0,i),this.updateRules([...o]),this.highlightRule.set(e),setTimeout(()=>{this.highlightRule.set(void 0);},4e3);}addRuleAndEdit(){this.addRule(),this.mode.set("edit");}swapRules(e,t){let i=this.parsedRules(),o=i[e];i[e]=i[t],i[t]=o,this.updateRules([...i]);}showAsDisabled(e){return this.state.config.fadeOutDisabledRules()&&!this.activeRules().includes(e);}renameVariable([e,t]){let i=this.refactor.renameVariable(e,t,this.parsedRules());this.updateRules(i);}goToPacklist(){this.state.router.go("packlist");}static ɵfac=function(t){return new(t||n)();};static ɵcmp=$({type:n,selectors:[["app-rules"]],decls:6,vars:4,consts:()=>{let e;e="Regel hinzuf\xFCgen";let t;t="Regel hinzuf\xFCgen";let i;i="Es sind noch keine Regeln definiert.";let o;o="+ Regel";let a;a="Obere Regel mit unterer Regel tauschen";let R;R="+ Regel";let f;return f="Anwendungssymbol",[i,o,R,[3,"noOfVisibleRules"],[1,"flex","h-[calc(100vh-4rem)]","items-center","justify-center"],["aria-label",e,"type","button",1,"fixed","bottom-2","z-50"],["aria-hidden","true",1,"fixed","bottom-2","right-2","z-50"],[1,"flex","flex-col","items-center","gap-6"],["aria-label",t,"type","button",3,"click"],[1,"flex","justify-center"],["role","group","tabindex","0",1,"card","mb-1",3,"id"],[3,"ruleChanged","deleteRule","renameVariable","rule"],["iconSwap","","type","button","aria-label",a,1,"link",3,"click"],["aria-label",e,"type","button",1,"fixed","bottom-2","z-50",3,"click"],["aria-hidden","true",1,"fixed","bottom-2","right-2","z-50",3,"click"],["alt",f,"src","icon.svg",1,"h-12"]];},template:function(t,i){t&1&&(h(0,"app-toolbar",3),p(1,Vi,6,0,"div",4),Q(2,xi,3,11,null,null,$i),p(4,wi,2,0,"button",5)(5,Di,2,0,"a",6)),t&2&&(m("noOfVisibleRules",i.visibleRules().length),E(),u(!i.visibleRules().length&&!i.filter()?1:-1),E(),K(i.visibleRules()),E(2),u(i.mode()==="edit"&&!i.filter()&&i.visibleRules().length?4:-1),E(),u(i.goToPacklistButtonVisible()?5:-1));},dependencies:[Nt,ht,me],encapsulation:2,changeDetection:0});}return n;})();export{Yn as RulesComponent};/**i18n:3c21b2b191b8a9740df1d1ee6e00c81bf8245c385e0820d6dd1b44445542cf32*/