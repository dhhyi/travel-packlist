import{c as ot,d as xe}from"./chunk-ee347d6b.js";import{a as ze,b as de,c as Be,d as We,e as je,k as Ye,m as me,n as He,p as pe,r as Je,s as Ze,t as et}from"./chunk-4ac8b7d9.js";import{a as Oe,b as fe,d as W,e as oe,f as j,g as Te,h as rt,i as he,l as Se,m as ge,n as at,o as lt,p as st,q as Re,r as _t,s as Ae}from"./chunk-dd05d5ee.js";import{a as tt,b as it,c as K,d as N,e as X,f as Ce,g as w,h as te,i as Ee,j as ie,k as ne,l as B,n as D,o as nt,q as A}from"./chunk-14d93657.js";import{e as Xe}from"./chunk-96e3562a.js";import{$a as u,Aa as _,B as le,Bb as Ge,Cb as ke,Da as U,Db as Ke,E as se,Fa as ve,Ga as _e,Ha as G,Ib as x,Jb as z,Ka as b,Mb as ue,Pa as m,Q as ye,T as $e,Tb as g,Vb as O,W as qe,Xa as p,Za as Fe,aa as T,ab as Z,bb as De,cb as L,cc as F,db as V,eb as l,fb as a,gb as f,hb as Qe,ia as C,ib as h,ja as E,l as ae,lb as S,mb as y,nb as $,ob as Ie,p as Pe,pb as d,qb as s,sa as v,ta as I,ub as k,vb as ce,wb as Ue,x as Me,xb as R,yb as q,zb as ee}from"./chunk-0b36a61d.js";import"./chunk-be8120ea.js";var Et=["content"],ft=["keyword"],Tt=["variable"],ht=["select"],St=(n,o,e)=>({"font-bold":n,"text-green-light":o,"text-red-light":e}),gt=n=>({width:n});function Rt(n,o){if(n&1&&(l(0,"span",5),R(1),a()),n&2){let e=o.$implicit;_(),q(e);}}function At(n,o){if(n&1&&(l(0,"span",6),R(1),a()),n&2){let e=o.$implicit,t=s();p("ngClass",z(2,St,t.highlighVariable(),t.highlighVariable()&&t.variableActive(e),t.highlighVariable()&&!t.variableActive(e))),_(),q(e);}}function bt(n,o){if(n&1&&(l(0,"option",8),R(1),a()),n&2){let e=s(2).$implicit,t=s();p("value",t.NOT),_(),ee("NOT ",t.variablePlaceholder(e),"");}}function Pt(n,o){if(n&1&&(l(0,"option",8),R(1),a()),n&2){let e=s(2).$implicit,t=s();p("value",t.AND),_(),ee("",t.variablePlaceholder(e)," AND x");}}function vt(n,o){if(n&1&&(l(0,"option",8),R(1),a()),n&2){let e=s(2).$implicit,t=s();p("value",t.OR),_(),ee("",t.variablePlaceholder(e)," OR x");}}function It(n,o){if(n&1&&(l(0,"option",8),R(1,"REMOVE"),a()),n&2){let e=s(4);p("value",e.REMOVE);}}function xt(n,o){if(n&1&&m(0,It,2,1,"option",8),n&2){let e=s(2).$implicit,t=s();u(e!==t.PLEASE_SELECT?0:-1);}}function Ot(n,o){if(n&1&&(l(0,"option",9),R(1),a()),n&2){let e=s().$implicit,t=s().$implicit,i=s();p("value",e)("selected",t===e)("disabled",e===i.PLEASE_SELECT),_(),ee(" ",e," ");}}function Nt(n,o){if(n&1&&m(0,bt,2,2,"option",8)(1,Pt,2,2,"option",8)(2,vt,2,2,"option",8)(3,xt,1,1)(4,Ot,2,4,"option",9),n&2){let e,t=o.$implicit,i=s(2);u((e=t)===i.NOT?0:e===i.AND?1:e===i.OR?2:e===i.REMOVE?3:4);}}function wt(n,o){if(n&1){let e=h();l(0,"select",7,4),d("change",function(){let i=C(e),r=i.$implicit,c=i.selection,P=Ue(1);return E(c(P.value,r));}),L(2,Nt,5,1,null,null,Z),a();}if(n&2){let e=o.options,t=o.width;Fe(x(2,gt,t)),_(2),V(e);}}var Ne="NOT",we="AND",Le="OR",Ve="REMOVE",ct=(()=>{class n{condition=I.required();selectVariables=I.required();content=G.required("content",{read:ve});keywordTemplate=G.required("keyword",{read:U});variableTemplate=G.required("variable",{read:U});selectTemplate=G.required("select",{read:U});state=T(A);activeAnswers=this.state.signal("activeAnswers");mode=this.state.signal("rulesMode");highlighVariable=g(()=>this.mode()!=="edit"&&this.state.signal("highlightVariableStatus")());serializedCondition=g(()=>this.condition().toString());PLEASE_SELECT=w.string;ALWAYS=te.string;NOT=Ne;AND=we;OR=Le;REMOVE=Ve;conditionChanged=v();constructor(){O(()=>{this.mode(),this.condition(),this.selectVariables(),this.repaint();});}repaint(){this.content().clear(),this.paintKeyword("IF"),this.paintCondition(this.condition(),e=>{e?this.conditionChanged.emit(e):this.conditionChanged.emit(new w());});}calculateOptions(e){return[this.PLEASE_SELECT,this.ALWAYS,...this.selectVariables(),this.NOT,this.AND,this.OR,this.REMOVE].filter(t=>!e.includes(t));}createFromPrevious(e){return e===this.PLEASE_SELECT||e===this.ALWAYS?new w():new Ce(e);}selection(e,t){return e===this.NOT?new Ee(this.createFromPrevious(t)):e===this.AND?new ie(this.createFromPrevious(t),new w()):e===this.OR?new ne(this.createFromPrevious(t),new w()):e===this.REMOVE?null:e===this.ALWAYS?new te():new Ce(e);}paintKeyword(e){this.content().createEmbeddedView(this.keywordTemplate(),{$implicit:e});}paintSelect(e,t,i){this.content().createEmbeddedView(this.selectTemplate(),{$implicit:e,options:this.calculateOptions(i),selection:(r,c)=>{t(this.selection(r,c));},width:(e.length*9+30).toString()+"px"});}paintVariable(e){this.content().createEmbeddedView(this.variableTemplate(),{$implicit:e});}paintCondition(e,t,i=[]){if(e instanceof Ee){let r=i.filter(c=>c!==this.ALWAYS);this.paintKeyword("NOT"),this.paintCondition(e.not,c=>{t(c?new Ee(c):null);},r);}else if(e instanceof ie){let r=[...i,this.ALWAYS];this.paintCondition(e.left,c=>{t(c?new ie(c,e.right):e.right);},r),this.paintKeyword("AND"),this.paintCondition(e.right,c=>{t(c?new ie(e.left,c):e.left);},r);}else if(e instanceof ne){let r=[...i,this.ALWAYS];this.paintCondition(e.left,c=>{t(c?new ne(c,e.right):e.right);},r),this.paintKeyword("OR"),this.paintCondition(e.right,c=>{t(c?new ne(e.left,c):e.left);},r);}else e instanceof Ce&&(this.mode()==="edit"?this.paintSelect(e.variable,t,i):this.paintVariable(e.variable));}variableActive(e){return this.activeAnswers()[e];}variablePlaceholder(e){return e===this.ALWAYS||e===this.PLEASE_SELECT?"x":e;}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-editor-condition"]],viewQuery:function(t,i){t&1&&(k(i.content,Et,5,ve),k(i.keywordTemplate,ft,5,U),k(i.variableTemplate,Tt,5,U),k(i.selectTemplate,ht,5,U)),t&2&&ce(4);},inputs:{condition:[1,"condition"],selectVariables:[1,"selectVariables"]},outputs:{conditionChanged:"conditionChanged"},decls:8,vars:0,consts:[["content",""],["keyword",""],["variable",""],["select",""],["selectbox",""],[1,"font-bold"],[1,"font-mono",3,"ngClass"],[1,"font-mono",3,"change"],[3,"value"],[3,"value","selected","disabled"]],template:function(t,i){t&1&&(Qe(0,null,0),m(2,Rt,2,1,"ng-template",null,1,ue)(4,At,2,6,"ng-template",null,2,ue)(6,wt,4,4,"ng-template",null,3,ue));},dependencies:[F],styles:["[_nghost-%COMP%]{display:flex;min-height:2rem;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:.5rem}"],changeDetection:0});}return n;})();function Lt(n,o){if(n&1&&(l(0,"option",4),R(1),a()),n&2){let e=o.$implicit;p("value",e),_(),q(e);}}function Vt(n,o){n&1&&(l(0,"span"),S(1,0),a()),n&2&&(_(),y(o),$(1));}function Mt(n,o){n&1&&(l(0,"span"),S(1,1),a());}function yt(n,o){if(n&1&&m(0,Vt,2,1,"span")(1,Mt,2,0,"span"),n&2){let e,t=s(2);u((e=t.form.controls.name.errors==null?null:t.form.controls.name.errors.pattern)?0:-1,e),_(),u(t.form.controls.name.errors!=null&&t.form.controls.name.errors.required?1:-1);}}function $t(n,o){if(n&1&&(l(0,"div",7),m(1,yt,2,2),a()),n&2){let e=s();_(),u(e.form.controls.name.touched?1:-1);}}var dt=(()=>{class n{item=I.required();state=T(A);mode=this.state.signal("rulesMode");categories=this.state.signal("categories");itemChanged=v();fb=T(Re).nonNullable;form=this.fb.group({category:this.fb.control(""),name:this.fb.control("",{validators:[this.validateNamePattern(),oe.required.bind(this)]})});parser=T(D);constructor(){O(()=>{this.item(),this.reset();});let e=fe(this.form.valueChanges.pipe(se(500),le(()=>this.form.valid)));O(()=>{let t=e();if(!t?.name)return;if(!t.category){this.addNewCategory();return;}let i=new X(t.category,t.name).toString();this.itemChanged.emit(this.parser.parseItem(i));}),O(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}blockPatch=!1;reset(){if(!this.blockPatch){let e=this.item().name;this.item().weight&&(e+=` ${it(this.item().weight)}`),this.form.patchValue({category:this.item().category,name:e},{emitEvent:!1});}}focus(e){this.blockPatch=document.activeElement===e.target,this.form.controls.name.value===X.NEW_ITEM_NAME&&this.form.controls.name.setValue("",{emitEvent:!1});}blur(){this.blockPatch=!1,this.reset();}async addNewCategory(e=""){let t=await ot("Enter new category name",e);if(t)try{this.parser.validateCategoryName(t),this.form.patchValue({category:t});}catch(i){if(i instanceof B){let r=i.found;await xe("Category name cannot contain '"+r+"'");}else console.error(i),await xe("Invalid category name");this.addNewCategory(t);}else this.reset();}validateNamePattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateItemNameAndWeight(t),null;}catch(i){return e.markAsTouched(),i instanceof B?{pattern:i.found}:{pattern:!0};}};}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-editor-item"]],inputs:{item:[1,"item"]},outputs:{itemChanged:"itemChanged"},decls:8,vars:2,consts:()=>{let e;e="Item name cannot contain the character '"+"\uFFFD0\uFFFD"+"'";let t;return t="Item name is required",[e,t,[1,"flex",3,"formGroup"],["name","categories","formControlName","category",1,"max-w-[5rem]"],[3,"value"],["value",""],["type","text","formControlName","name",1,"w-0","flex-1",3,"focus","blur"],[1,"text-red-light","m-1","text-sm"]];},template:function(t,i){t&1&&(l(0,"form",2)(1,"select",3),L(2,Lt,2,2,"option",4,De),l(4,"option",5),R(5,"+"),a()(),l(6,"input",6),d("focus",function(c){return i.focus(c);})("blur",function(){return i.blur();}),a()(),m(7,$t,2,1,"div",7)),t&2&&(p("formGroup",i.form),_(2),V(i.categories()),_(5),u(i.mode()==="edit"&&i.form.valid===!1&&i.form.touched?7:-1));},dependencies:[Ae,he,lt,st,W,at,j,Te,Se,ge],encapsulation:2,changeDetection:0});}return n;})();var qt=(n,o,e)=>({"font-bold":n,"text-green-light":o,"text-red-light":e});function Ft(n,o){n&1&&(l(0,"span"),S(1,0),a()),n&2&&(_(),y(o),$(1));}function Dt(n,o){n&1&&(l(0,"span"),S(1,1),a());}function Qt(n,o){n&1&&(l(0,"span"),S(1,2),a());}function Ut(n,o){if(n&1&&(l(0,"span"),S(1,3),a()),n&2){let e=s();_(),y(e),$(1);}}function Gt(n,o){n&1&&m(0,Qt,2,0,"span")(1,Ut,2,1,"span"),n&2&&u(o===" "?0:1);}function kt(n,o){n&1&&(l(0,"span"),S(1,4),a());}function Kt(n,o){n&1&&(l(0,"span"),S(1,5),a());}function Xt(n,o){n&1&&(l(0,"span"),S(1,6),a());}function zt(n,o){if(n&1&&(l(0,"div",12),m(1,Ft,2,1,"span")(2,Dt,2,0,"span")(3,Gt,2,1)(4,kt,2,0,"span")(5,Kt,2,0,"span")(6,Xt,2,0,"span"),a()),n&2){let e,t,i=s();_(),u((e=i.form.controls.question.errors==null?null:i.form.controls.question.errors.pattern)?1:-1,e),_(),u(i.form.controls.question.errors!=null&&i.form.controls.question.errors.required?2:-1),_(),u((t=i.form.controls.variable.errors==null?null:i.form.controls.variable.errors.pattern)?3:-1,t),_(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.required?4:-1),_(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.reserved?5:-1),_(),u(i.form.controls.variable.errors!=null&&i.form.controls.variable.errors.used?6:-1);}}var mt=(()=>{class n{question=I.required();parser=T(D);state=T(A);variables=this.state.signal("variables");mode=this.state.signal("rulesMode");highlighVariable=g(()=>this.mode()!=="edit"&&this.state.signal("highlightVariableStatus")());variableActive=g(()=>this.state.signal("activeAnswers")()[this.question().variable]);refactorVariables=this.state.signal("refactorVariables");questionChanged=v();variableChanged=v();fb=T(Re).nonNullable;form=this.fb.group({question:this.fb.control("",{validators:[this.validateQuestionPattern(),oe.required.bind(this)]}),variable:this.fb.control("",{validators:[this.validateVariablePattern(),Bt(),oe.required.bind(this)],asyncValidators:[Wt(Oe(this.variables),Oe(this.question))]})});constructor(){O(()=>{this.question(),this.reset();});let e=fe(this.form.valueChanges.pipe(se(500),le(()=>this.form.valid)));O(()=>{let t=e();t?.question&&t.question!==this.question().question&&t.variable?this.questionChanged.emit(new N(t.question,t.variable)):t?.variable&&t.variable.trim()!==this.question().variable&&(this.question().variable===N.NEW_VARIABLE_NAME||!this.refactorVariables()?this.questionChanged.emit(new N(this.question().question,t.variable.trim())):this.variableChanged.emit([this.question().variable,t.variable.trim()]));}),O(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}reset(){this.form.patchValue(this.question(),{emitEvent:!1});}focusQuestion(){this.form.controls.question.value===N.NEW_QUESTION_NAME&&this.form.controls.question.setValue("",{emitEvent:!1});}focusVariable(){this.form.controls.variable.value===N.NEW_VARIABLE_NAME&&this.form.controls.variable.setValue("",{emitEvent:!1});}validateVariablePattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateVariableName(t),null;}catch(i){return e.markAsTouched(),i instanceof B?{pattern:i.found}:{pattern:!0};}};}validateQuestionPattern(){return e=>{let t=e.value?.trim()??"";try{return this.parser.validateQuestionString(t),null;}catch(i){return e.markAsTouched(),i instanceof B?{pattern:i.found}:{pattern:!0};}};}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-editor-question"]],inputs:{question:[1,"question"]},outputs:{questionChanged:"questionChanged",variableChanged:"variableChanged"},decls:6,vars:7,consts:()=>{let e;e="question";let t;t="variable";let i;i="Questions cannot contain this character: '"+"\uFFFD0\uFFFD"+"'";let r;r="Question is required";let c;c="Variables cannot contain spaces";let P;P="Variables cannot contain this character: '"+"\uFFFD0\uFFFD"+"'";let Q;Q="Variable name is required";let J;J="This variable name is reserved";let re;return re="This variable name is already used",[i,r,c,P,Q,J,re,[1,"flex","flex-col",3,"formGroup"],["type","text","placeholder",e,"formControlName","question",1,"grow",3,"focus"],[1,"flex","items-center","gap-2"],[1,"ml-2","h-4"],["type","text","placeholder",t,"formControlName","variable",1,"grow","font-mono",3,"focus","ngClass"],[1,"text-red-light","m-1","flex","flex-col","text-sm"]];},template:function(t,i){t&1&&(l(0,"form",7)(1,"input",8),d("focus",function(){return i.focusQuestion();}),a(),l(2,"div",9),f(3,"app-icon-arrow-forward",10),l(4,"input",11),d("focus",function(){return i.focusVariable();}),a()(),m(5,zt,7,6,"div",12),a()),t&2&&(p("formGroup",i.form),_(4),p("ngClass",z(3,qt,i.highlighVariable(),i.highlighVariable()&&i.variableActive(),i.highlighVariable()&&!i.variableActive())),_(),u(i.mode()==="edit"&&i.form.valid===!1&&i.form.touched?5:-1));},dependencies:[Ae,he,W,j,Te,Se,ge,F,Ze],encapsulation:2,changeDetection:0});}return n;})();function Bt(){return n=>[te.string,Ne,we,Le,Ve].some(o=>o===n.value?.trim())?{reserved:!0}:null;}function Wt(n,o){return e=>ae(e.value).pipe($e(n.pipe(Pe(t=>[...t])),o),ye(([t,i,r])=>Me(()=>!i.find(c=>c===r.variable),ae(null),ae([t,i,r]).pipe(Pe(([c,P,Q])=>{let J=P.findIndex(re=>re===Q.variable);return P.splice(J,1),P.includes(c?.trim()??"")?{used:!0}:null;})))));}var be=(()=>{class n{parser=T(D);state=T(A);questions=this.state.signal("clipboardQuestions");items=this.state.signal("clipboardItems");itemsCount=g(()=>this.items().length);questionsCount=g(()=>this.questions().length);cutQuestion(e){this.questions.update(t=>[...t,e.toString()]);}cutItem(e){this.items.update(t=>[...t,e.toString()]);}paste(){let e={questions:this.questions().map(t=>this.parser.parseQuestion(t)),items:this.items().map(t=>this.parser.parseItem(t))};return this.questions.set([]),this.items.set([]),e;}static ɵfac=function(t){return new(t||n)();};static ɵprov=qe({token:n,factory:n.ɵfac,providedIn:"root"});}return n;})();function jt(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){C(e);let i=s();return E(i.resetCondition());}),f(1,"app-icon-clear"),a();}}function Yt(n,o){if(n&1){let e=h();l(0,"button",11),d("click",function(){C(e);let i=s(2).$index,r=s();return E(r.swapQuestions(i,i+1));}),f(1,"app-icon-arrow-downward"),a();}}function Ht(n,o){n&1&&f(0,"span",10);}function Jt(n,o){if(n&1&&m(0,Yt,2,0,"button",9)(1,Ht,1,0,"span",10),n&2){let e=s().$index,t=s();u(e<t.rule().questions.length-1?0:1);}}function Zt(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){C(e);let i=s().$index,r=s();return E(r.deleteQuestion(i));}),f(1,"app-icon-delete"),a();}}function ei(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){C(e);let i=s().$index,r=s();return E(r.cutQuestion(i));}),f(1,"app-icon-cut"),a();}}function ti(n,o){if(n&1){let e=h();l(0,"button",11),d("click",function(){C(e);let i=s().$index,r=s();return E(r.swapQuestions(i-1,i));}),f(1,"app-icon-arrow-upward"),a();}}function ii(n,o){if(n&1){let e=h();l(0,"div",2),m(1,Jt,2,1),l(2,"app-editor-question",8),d("questionChanged",function(i){let r=C(e).$index,c=s();return E(c.updateQuestion(r,i));})("variableChanged",function(i){C(e);let r=s();return E(r.variableChanged(i));}),a(),m(3,Zt,2,0,"button",4)(4,ei,2,0,"button",4)(5,ti,2,0,"button",9),a();}if(n&2){let e=o.$implicit,t=o.$index,i=s();_(),u(i.mode()==="swap"&&i.rule().questions.length>1?1:-1),_(),p("question",e),_(),u(i.mode()==="delete"?3:i.mode()==="cut-paste"?4:i.mode()==="swap"&&t>0?5:-1);}}function ni(n,o){if(n&1){let e=h();l(0,"button",11),d("click",function(){C(e);let i=s(2).$index,r=s();return E(r.swapItems(i,i+1));}),f(1,"app-icon-arrow-downward"),a();}}function oi(n,o){n&1&&f(0,"span",10);}function ri(n,o){if(n&1&&m(0,ni,2,0,"button",9)(1,oi,1,0,"span",10),n&2){let e=s().$index,t=s();u(e<t.rule().items.length-1?0:1);}}function ai(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){C(e);let i=s().$index,r=s();return E(r.deleteItem(i));}),f(1,"app-icon-delete"),a();}}function li(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){C(e);let i=s().$index,r=s();return E(r.cutItem(i));}),f(1,"app-icon-cut"),a();}}function si(n,o){if(n&1){let e=h();l(0,"button",11),d("click",function(){C(e);let i=s().$index,r=s();return E(r.swapItems(i-1,i));}),f(1,"app-icon-arrow-upward"),a();}}function _i(n,o){if(n&1){let e=h();l(0,"div",2),m(1,ri,2,1),l(2,"app-editor-item",12),d("itemChanged",function(i){let r=C(e).$index,c=s();return E(c.updateItem(r,i));}),a(),m(3,ai,2,0,"button",4)(4,li,2,0,"button",4)(5,si,2,0,"button",9),a();}if(n&2){let e=o.$implicit,t=o.$index,i=s();_(),u(i.mode()==="swap"&&i.rule().items.length>1?1:-1),_(),p("item",e),_(),u(i.mode()==="delete"?3:i.mode()==="cut-paste"?4:i.mode()==="swap"&&t>0?5:-1);}}function ci(n,o){if(n&1){let e=h();l(0,"div",5)(1,"button",13),d("click",function(){C(e);let i=s();return E(i.addQuestion());}),S(2,0),a(),l(3,"button",13),d("click",function(){C(e);let i=s();return E(i.addItem());}),S(4,1),a()();}}function ui(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){C(e);let i=s(2);return E(i.deleteRule.emit());}),f(1,"app-icon-delete"),a();}}function di(n,o){if(n&1){let e=h();l(0,"button",7),d("click",function(){C(e);let i=s(2);return E(i.paste());}),f(1,"app-icon-paste"),a();}}function mi(n,o){if(n&1&&(l(0,"div",6),m(1,ui,2,0,"button",4)(2,di,2,0,"button",4),a()),n&2){let e=s();_(),u(e.mode()==="delete"?1:-1),_(),u(e.mode()==="cut-paste"?2:-1);}}function pi(n,o){if(n&1&&(l(0,"pre"),R(1),a(),l(2,"pre"),R(3),a()),n&2){let e=s();_(),q(o),_(2),q(e.ruleDebugString());}}var pt=(()=>{class n{rule=I.required();ruleChanged=v();deleteRule=v();renameVariable=v();ruleDebugString=g(()=>this.rule.toString());errorMessage=_e(null);state=T(A);mode=this.state.signal("rulesMode");selectVariables=g(()=>{let e=this.rule().questions.map(i=>i.variable);return this.state.get("variables").filter(i=>!e.includes(i));});clipboard=T(be);parser=T(D);compileRule(e){try{return this.parser.parseRule(e.toString()),this.errorMessage.set(null),!0;}catch(t){return t instanceof Error&&this.errorMessage.set(t.message),!1;}}resetCondition(){this.updateCondition(new w());}updateCondition(e){let t=new K(e,this.rule().questions,this.rule().items);this.compileRule(t)&&this.ruleChanged.emit(t);}emitNewQuestions(e){let t=new K(this.rule().condition,e,this.rule().items);this.compileRule(t)&&this.ruleChanged.emit(t);}updateQuestion(e,t){let i=this.rule().questions;i[e]=t,this.emitNewQuestions(i);}addQuestion(){let e=new N(N.NEW_QUESTION_NAME,N.NEW_VARIABLE_NAME);this.updateQuestion(this.rule().questions.length,e);}deleteQuestion(e){let t=this.rule().questions;t.splice(e,1),this.emitNewQuestions(t);}cutQuestion(e){let t=this.rule().questions[e];this.deleteQuestion(e),this.clipboard.cutQuestion(t);}swapQuestions(e,t){let i=this.rule().questions,r=i[e];i[e]=i[t],i[t]=r,this.emitNewQuestions(i);}emitNewItems(e){let t=new K(this.rule().condition,this.rule().questions,e);this.compileRule(t)&&this.ruleChanged.emit(t);}updateItem(e,t){let i=this.rule().items;i[e]=t,this.emitNewItems(i);}addItem(){let e=new X(X.NEW_CATEGORY_NAME,X.NEW_ITEM_NAME);this.updateItem(this.rule().items.length,e);}deleteItem(e){let t=this.rule().items;t.splice(e,1),this.emitNewItems(t);}cutItem(e){let t=this.rule().items[e];this.deleteItem(e),this.clipboard.cutItem(t);}swapItems(e,t){let i=this.rule().items,r=i[e];i[e]=i[t],i[t]=r,this.emitNewItems(i);}paste(){let{questions:e,items:t}=this.clipboard.paste(),i=new K(this.rule().condition,[...this.rule().questions,...e],[...this.rule().items,...t]);this.ruleChanged.emit(i);}variableChanged([e,t]){this.renameVariable.emit([e,t]);}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-editor-rule"]],inputs:{rule:[1,"rule"]},outputs:{ruleChanged:"ruleChanged",deleteRule:"deleteRule",renameVariable:"renameVariable"},decls:10,vars:5,consts:()=>{let e;e=" + Question ";let t;return t=" + Item ",[e,t,[1,"mb-1","flex","items-center"],[1,"grow",3,"conditionChanged","condition","selectVariables"],["type","button",1,"link"],[1,"flex","justify-end","gap-2"],[1,"flex","justify-center"],["type","button",1,"link",3,"click"],[1,"grow",3,"questionChanged","variableChanged","question"],["type","button",1,"link","p-1"],[1,"ml-6"],["type","button",1,"link","p-1",3,"click"],[1,"grow",3,"itemChanged","item"],["type","button",1,"h-8",3,"click"]];},template:function(t,i){if(t&1&&(l(0,"div",2)(1,"app-editor-condition",3),d("conditionChanged",function(c){return i.updateCondition(c);}),a(),m(2,jt,2,0,"button",4),a(),L(3,ii,6,3,"div",2,Z),L(5,_i,6,3,"div",2,Z),m(7,ci,5,0,"div",5)(8,mi,3,2,"div",6)(9,pi,4,2)),t&2){let r;_(),p("condition",i.rule().condition)("selectVariables",i.selectVariables()),_(),u(i.mode()==="edit"?2:-1),_(),V(i.rule().questions),_(2),V(i.rule().items),_(2),u(i.mode()==="edit"?7:8),_(2),u((r=i.errorMessage())?9:-1,r);}},dependencies:[ct,mt,dt,me,He,je,pe,et,Je],encapsulation:2,changeDetection:0});}return n;})();var Ci=["searchInput"],Ei=n=>({"sticky left-0 top-0 z-30 shadow-md":n}),H=n=>({active:n});function fi(n,o){if(n&1&&(l(0,"span"),S(1,2),a()),n&2){let e=o;_(),y(e)(e),$(1);}}function Ti(n,o){if(n&1&&(l(0,"span"),S(1,3),a()),n&2){let e=o;_(),y(e)(e),$(1);}}function hi(n,o){if(n&1&&(l(0,"div",10)(1,"span"),S(2,1),a(),m(3,fi,2,2,"span")(4,Ti,2,2,"span"),a()),n&2){let e,t,i=s(2);_(3),u((e=i.clipboard.itemsCount())?3:-1,e),_(),u((t=i.clipboard.questionsCount())?4:-1,t);}}function Si(n,o){if(n&1&&m(0,hi,5,2,"div",10),n&2){let e=s();u(e.clipboard.itemsCount()>0||e.clipboard.questionsCount()>0?0:-1);}}function gi(n,o){if(n&1){let e=h();l(0,"div",9)(1,"input",11,0),Ke("ngModelChange",function(i){C(e);let r=s();return ke(r.searchTerm,i)||(r.searchTerm=i),E(i);}),a(),l(3,"button",12),d("click",function(){C(e);let i=s();return E(i.clearSearch());}),f(4,"app-icon-clear",13),a()();}if(n&2){let e=s();_(),Ge("ngModel",e.searchTerm);}}var Ct=(()=>{class n{noOfVisibleRules=I.required();state=T(A);mode=this.state.signal("rulesMode");searchTerm=this.state.signal("filterRulesQuery");clipboard=T(be);sticky=g(()=>this.state.signal("scrollY")()>48);searchInput=G.required("searchInput");focusSearch(){setTimeout(()=>{this.searchInput().nativeElement.focus();},50);}clearSearch(){this.searchTerm.set(""),this.focusSearch();}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-toolbar"]],viewQuery:function(t,i){t&1&&k(i.searchInput,Ci,5),t&2&&ce();},inputs:{noOfVisibleRules:[1,"noOfVisibleRules"]},decls:16,vars:26,consts:()=>{let e;e="Clipboard:";let t;t="{VAR_PLURAL, plural, one {1 Item} other {{INTERPOLATION} Items}}",t=Ie(t,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"});let i;return i="{VAR_PLURAL, plural, one {1 Question} other {{INTERPOLATION} Questions}}",i=Ie(i,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"}),[["searchInput",""],e,t,i,[1,"bg-active","py-2",3,"ngClass"],[1,"mb-1","grid","grid-cols-6","gap-2"],["type","button",1,"link",3,"click","ngClass"],[1,"my-auto","h-6","w-6"],["type","button",1,"link",3,"click","ngClass","disabled"],[1,"mt-2","flex","items-center"],[1,"mt-2","flex","justify-center","gap-4"],["type","text",1,"grow",3,"ngModelChange","ngModel"],["type","button",1,"link",3,"click"],[1,"h-6","w-6"]];},template:function(t,i){t&1&&(l(0,"div",4)(1,"div",5)(2,"button",6),d("click",function(){return i.mode.set("view");}),f(3,"app-icon-view",7),a(),l(4,"button",8),d("click",function(){return i.mode.set("edit");}),f(5,"app-icon-edit",7),a(),l(6,"button",8),d("click",function(){return i.mode.set("delete");}),f(7,"app-icon-delete",7),a(),l(8,"button",8),d("click",function(){return i.mode.set("cut-paste");}),f(9,"app-icon-reorder",7),a(),l(10,"button",8),d("click",function(){return i.mode.set("swap");}),f(11,"app-icon-swap",7),a(),l(12,"button",6),d("click",function(){return i.mode.set("search"),i.focusSearch();}),f(13,"app-icon-search",7),a()(),m(14,Si,1,1)(15,gi,5,1,"div",9),a()),t&2&&(p("ngClass",x(12,Ei,i.sticky())),_(2),p("ngClass",x(14,H,i.mode()==="view")),_(2),p("ngClass",x(16,H,i.mode()==="edit"))("disabled",!i.noOfVisibleRules()&&!!i.searchTerm()),_(2),p("ngClass",x(18,H,i.mode()==="delete"))("disabled",!i.noOfVisibleRules()),_(2),p("ngClass",x(20,H,i.mode()==="cut-paste"))("disabled",i.noOfVisibleRules()<2&&!i.clipboard.itemsCount()&&!i.clipboard.questionsCount()),_(2),p("ngClass",x(22,H,i.mode()==="swap"))("disabled",!i.noOfVisibleRules()),_(2),p("ngClass",x(24,H,i.mode()==="search")),_(2),u(i.mode()==="cut-paste"?14:i.mode()==="search"||i.searchTerm()?15:-1));},dependencies:[_t,W,j,rt,F,ze,Ye,me,We,de,Be,pe],encapsulation:2,changeDetection:0});}return n;})();var Ri=(n,o)=>o.index,Ai=(n,o,e)=>({disabled:n,"animate-pulse":o,"mb-[2.25rem]":e});function bi(n,o){if(n&1){let e=h();l(0,"div",4)(1,"button",7),d("click",function(){C(e);let i=s().$implicit,r=s();return E(r.swapRules(i.index-1,i.index));}),f(2,"app-icon-swap"),a()();}}function Pi(n,o){if(n&1){let e=h();m(0,bi,3,0,"div",4),l(1,"div",5)(2,"app-editor-rule",6),d("ruleChanged",function(i){let r=C(e).$implicit,c=s();return E(c.updateRule(r.index,i));})("deleteRule",function(){let i=C(e).$implicit,r=s();return E(r.deleteRule(i.index));})("renameVariable",function(i){C(e);let r=s();return E(r.renameVariable(i));}),a()();}if(n&2){let e=o.$implicit,t=s();u(e.index>0&&t.mode()==="swap"&&!t.filter()?0:-1),_(),p("id","rule-"+e.index)("ngClass",z(4,Ai,t.showAsDisabled(e.rule),t.highlightRule()===e.index,t.mode()==="view"||t.mode()==="search")),_(),p("rule",e.rule);}}function vi(n,o){if(n&1){let e=h();l(0,"button",8),d("click",function(){C(e);let i=s();return E(i.addRule());}),S(1,0),a();}}function Ii(n,o){n&1&&(l(0,"a",3),f(1,"img",9),a());}var Qn=(()=>{class n{refactor=T(nt);state=T(A);parsedRules=this.state.signal("parsedRules");activeRules=this.state.signal("activeRules");mode=this.state.signal("rulesMode");filter=this.state.signal("filterRulesQuery");highlightRule=_e(void 0);visibleRules=g(()=>this.filter()===""?this.parsedRules().map((t,i)=>({rule:t,index:i})):this.parsedRules().map((t,i)=>({rule:t,index:i})).filter(t=>{let i=this.filter();return!i||this.refactor.contains(t.rule,i);}));goToPacklistButtonVisible=g(()=>this.state.signal("scrollY")()>100);updateRules(e){let t=tt(e);this.state.set("rules",t);}updateRule(e,t){let i=this.parsedRules();i[e]=t,this.updateRules([...i]);}deleteRule(e){let t=this.parsedRules();t.splice(e,1),this.updateRules([...t]);}addRule(){let e=this.parsedRules().length,t=[];for(let c=0;c<this.parsedRules().length;c++){let P=document.querySelector(`#rule-${c.toString()}`);if(P){let Q=P.getBoundingClientRect();Q.top>=0&&Q.bottom<=window.innerHeight&&t.push(c);}}t.includes(e-1)||(e=t[0]+1);let i=new K(new w()),r=this.parsedRules();r.splice(e,0,i),this.updateRules([...r]),this.highlightRule.set(e),setTimeout(()=>{this.highlightRule.set(void 0);},4e3);}swapRules(e,t){let i=this.parsedRules(),r=i[e];i[e]=i[t],i[t]=r,this.updateRules([...i]);}showAsDisabled(e){return this.state.get("fadeOutDisabledRules")&&!this.activeRules().includes(e);}renameVariable([e,t]){let i=this.refactor.renameVariable(e,t,this.parsedRules());this.updateRules(i);}static ɵfac=function(t){return new(t||n)();};static ɵcmp=b({type:n,selectors:[["app-rules"]],decls:5,vars:3,consts:()=>{let e;e=" + Rule ";let t;return t="application icon",[e,[3,"noOfVisibleRules"],["type","button",1,"fixed","bottom-2","z-50"],["routerLink","/packlist",1,"fixed","bottom-2","right-2","z-50"],[1,"flex","justify-center"],[1,"card","mb-1",3,"id","ngClass"],[3,"ruleChanged","deleteRule","renameVariable","rule"],["type","button",1,"link",3,"click"],["type","button",1,"fixed","bottom-2","z-50",3,"click"],["alt",t,"src","icon.svg",1,"h-12"]];},template:function(t,i){t&1&&(f(0,"app-toolbar",1),L(1,Pi,3,8,null,null,Ri),m(3,vi,2,0,"button",2)(4,Ii,2,0,"a",3)),t&2&&(p("noOfVisibleRules",i.visibleRules().length),_(),V(i.visibleRules()),_(2),u(i.mode()==="edit"&&!i.filter()?3:-1),_(),u(i.goToPacklistButtonVisible()?4:-1));},dependencies:[pt,Ct,de,F,Xe],encapsulation:2,changeDetection:0});}return n;})();export{Qn as default};/**i18n:cbcf01d4640d52ad6821130aa8bde718125de417ff622aa7dfac4aa297a95122*/