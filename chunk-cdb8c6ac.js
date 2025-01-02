import{c as ot,d as Ie}from"./chunk-69dac247.js";import{a as ze,b as ce,c as Be,d as We,e as je,k as Ye,m as ue,n as He,p as me,r as Je,s as Ze,t as et}from"./chunk-1cbc437c.js";import{a as xe,b as Ee,d as B,e as oe,f as W,g as fe,h as rt,i as Te,l as Se,m as he,n as lt,o as at,p as st,q as Re,r as _t,s as ge}from"./chunk-97ff127d.js";import{a as tt,b as it,c as G,d as N,e as k,f as pe,g as L,h as te,i as Ce,j as ie,k as ne,l as X,n as z,o as nt,q as g}from"./chunk-b22ce02d.js";import{e as Xe}from"./chunk-c5baa0cd.js";import{$a as c,Aa as _,B as ae,Bb as Ge,Cb as ke,Da as D,Db as Ke,E as se,Fa as be,Ga as qe,Ha as U,Ib as x,Jb as K,Ka as A,Mb as de,Pa as m,Q as Me,T as ye,Tb as R,Vb as O,W as $e,Xa as E,Za as Fe,aa as S,ab as J,bb as De,cb as w,cc as q,db as V,eb as a,fb as l,gb as f,hb as Ue,ia as p,ib as T,ja as C,l as le,lb as h,mb as y,nb as $,ob as ve,p as Pe,pb as u,qb as s,sa as b,ta as v,ub as Q,vb as _e,wb as Qe,x as Ve,xb as I,yb as Z,zb as ee}from"./chunk-11555493.js";import"./chunk-fde9b292.js";var Et=["content"],ft=["keyword"],Tt=["variable"],St=["select"],ht=(n,o,e)=>({"font-bold":n,"text-green-light":o,"text-red-light":e}),Rt=n=>({width:n});function gt(n,o){if(n&1&&(a(0,"span",5),I(1),l()),n&2){let e=o.$implicit;_(),Z(e);}}function At(n,o){if(n&1&&(a(0,"span",6),I(1),l()),n&2){let e=o.$implicit,i=s();E("ngClass",K(2,ht,i.highlighVariable(),i.highlighVariable()&&i.variableActive(e),i.highlighVariable()&&!i.variableActive(e))),_(),Z(e);}}function Pt(n,o){if(n&1&&(a(0,"option",8),I(1),l()),n&2){let e=s(2).$implicit,i=s();E("value",i.NOT),_(),ee("NOT ",i.variablePlaceholder(e),"");}}function bt(n,o){if(n&1&&(a(0,"option",8),I(1),l()),n&2){let e=s(2).$implicit,i=s();E("value",i.AND),_(),ee("",i.variablePlaceholder(e)," AND x");}}function vt(n,o){if(n&1&&(a(0,"option",8),I(1),l()),n&2){let e=s(2).$implicit,i=s();E("value",i.OR),_(),ee("",i.variablePlaceholder(e)," OR x");}}function It(n,o){if(n&1&&(a(0,"option",8),I(1,"REMOVE"),l()),n&2){let e=s(4);E("value",e.REMOVE);}}function xt(n,o){if(n&1&&m(0,It,2,1,"option",8),n&2){let e=s(2).$implicit,i=s();c(e!==i.PLEASE_SELECT?0:-1);}}function Ot(n,o){if(n&1&&(a(0,"option",9),I(1),l()),n&2){let e=s().$implicit,i=s().$implicit,t=s();E("value",e)("selected",i===e)("disabled",e===t.PLEASE_SELECT),_(),ee(" ",e," ");}}function Nt(n,o){if(n&1&&m(0,Pt,2,2,"option",8)(1,bt,2,2,"option",8)(2,vt,2,2,"option",8)(3,xt,1,1)(4,Ot,2,4,"option",9),n&2){let e,i=o.$implicit,t=s(2);c((e=i)===t.NOT?0:e===t.AND?1:e===t.OR?2:e===t.REMOVE?3:4);}}function Lt(n,o){if(n&1){let e=T();a(0,"select",7,4),u("change",function(){let t=p(e),r=t.$implicit,d=t.selection,P=Qe(1);return C(d(P.value,r));}),w(2,Nt,5,1,null,null,J),l();}if(n&2){let e=o.options,i=o.width;Fe(x(2,Rt,i)),_(2),V(e);}}var Oe="NOT",Ne="AND",Le="OR",we="REMOVE",dt=(()=>{class n{condition=v.required();selectVariables=v.required();content=U.required("content",{read:be});keywordTemplate=U.required("keyword",{read:D});variableTemplate=U.required("variable",{read:D});selectTemplate=U.required("select",{read:D});state=S(g);activeAnswers=this.state.signal("activeAnswers");mode=this.state.signal("rulesMode");highlighVariable=R(()=>this.mode()!=="edit"&&this.state.signal("highlightVariableStatus")());serializedCondition=R(()=>this.condition().toString());PLEASE_SELECT=L.string;ALWAYS=te.string;NOT=Oe;AND=Ne;OR=Le;REMOVE=we;conditionChanged=b();constructor(){O(()=>{this.mode(),this.condition(),this.selectVariables(),this.repaint();});}repaint(){this.content().clear(),this.paintKeyword("IF"),this.paintCondition(this.condition(),e=>{e?this.conditionChanged.emit(e):this.conditionChanged.emit(new L());});}calculateOptions(e){return[this.PLEASE_SELECT,this.ALWAYS,...this.selectVariables(),this.NOT,this.AND,this.OR,this.REMOVE].filter(i=>!e.includes(i));}createFromPrevious(e){return e===this.PLEASE_SELECT||e===this.ALWAYS?new L():new pe(e);}selection(e,i){return e===this.NOT?new Ce(this.createFromPrevious(i)):e===this.AND?new ie(this.createFromPrevious(i),new L()):e===this.OR?new ne(this.createFromPrevious(i),new L()):e===this.REMOVE?null:e===this.ALWAYS?new te():new pe(e);}paintKeyword(e){this.content().createEmbeddedView(this.keywordTemplate(),{$implicit:e});}paintSelect(e,i,t){this.content().createEmbeddedView(this.selectTemplate(),{$implicit:e,options:this.calculateOptions(t),selection:(r,d)=>{i(this.selection(r,d));},width:(e.length*9+30).toString()+"px"});}paintVariable(e){this.content().createEmbeddedView(this.variableTemplate(),{$implicit:e});}paintCondition(e,i,t=[]){if(e instanceof Ce){let r=t.filter(d=>d!==this.ALWAYS);this.paintKeyword("NOT"),this.paintCondition(e.not,d=>{i(d?new Ce(d):null);},r);}else if(e instanceof ie){let r=[...t,this.ALWAYS];this.paintCondition(e.left,d=>{i(d?new ie(d,e.right):e.right);},r),this.paintKeyword("AND"),this.paintCondition(e.right,d=>{i(d?new ie(e.left,d):e.left);},r);}else if(e instanceof ne){let r=[...t,this.ALWAYS];this.paintCondition(e.left,d=>{i(d?new ne(d,e.right):e.right);},r),this.paintKeyword("OR"),this.paintCondition(e.right,d=>{i(d?new ne(e.left,d):e.left);},r);}else e instanceof pe&&(this.mode()==="edit"?this.paintSelect(e.variable,i,t):this.paintVariable(e.variable));}variableActive(e){return this.activeAnswers()[e];}variablePlaceholder(e){return e===this.ALWAYS||e===this.PLEASE_SELECT?"x":e;}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-editor-condition"]],viewQuery:function(i,t){i&1&&(Q(t.content,Et,5,be),Q(t.keywordTemplate,ft,5,D),Q(t.variableTemplate,Tt,5,D),Q(t.selectTemplate,St,5,D)),i&2&&_e(4);},inputs:{condition:[1,"condition"],selectVariables:[1,"selectVariables"]},outputs:{conditionChanged:"conditionChanged"},decls:8,vars:0,consts:[["content",""],["keyword",""],["variable",""],["select",""],["selectbox",""],[1,"font-bold"],[1,"font-mono",3,"ngClass"],[1,"font-mono",3,"change"],[3,"value"],[3,"value","selected","disabled"]],template:function(i,t){i&1&&(Ue(0,null,0),m(2,gt,2,1,"ng-template",null,1,de)(4,At,2,6,"ng-template",null,2,de)(6,Lt,4,4,"ng-template",null,3,de));},dependencies:[q],styles:["[_nghost-%COMP%]{display:flex;min-height:2rem;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:.5rem}"],changeDetection:0});}return n;})();function wt(n,o){if(n&1&&(a(0,"option",4),I(1),l()),n&2){let e=o.$implicit;E("value",e),_(),Z(e);}}function Vt(n,o){n&1&&(a(0,"span"),h(1,0),l()),n&2&&(_(),y(o),$(1));}function Mt(n,o){n&1&&(a(0,"span"),h(1,1),l());}function yt(n,o){if(n&1&&m(0,Vt,2,1,"span")(1,Mt,2,0,"span"),n&2){let e,i=s(2);c((e=i.form.controls.name.errors==null?null:i.form.controls.name.errors.pattern)?0:-1,e),_(),c(i.form.controls.name.errors!=null&&i.form.controls.name.errors.required?1:-1);}}function $t(n,o){if(n&1&&(a(0,"div",7),m(1,yt,2,2),l()),n&2){let e=s();_(),c(e.form.controls.name.touched?1:-1);}}var ut=(()=>{class n{item=v.required();state=S(g);mode=this.state.signal("rulesMode");categories=this.state.signal("categories");itemChanged=b();fb=S(Re).nonNullable;form=this.fb.group({category:this.fb.control(""),name:this.fb.control("",{validators:[this.validateNamePattern(),oe.required.bind(this)]})});parser=S(z);constructor(){O(()=>{this.item(),this.reset();});let e=Ee(this.form.valueChanges.pipe(se(500),ae(()=>this.form.valid)));O(()=>{let i=e();if(!i?.name)return;if(!i.category){this.addNewCategory();return;}let t=new k(i.category,i.name).toString();this.itemChanged.emit(this.parser.parseItem(t));}),O(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}blockPatch=!1;reset(){if(!this.blockPatch){let e=this.item().name;this.item().weight&&(e+=` ${it(this.item().weight)}`),this.form.patchValue({category:this.item().category,name:e},{emitEvent:!1});}}focus(e){this.blockPatch=document.activeElement===e.target,this.form.controls.name.value===k.NEW_ITEM_NAME&&this.form.controls.name.setValue("",{emitEvent:!1});}blur(){this.blockPatch=!1,this.reset();}async addNewCategory(e=""){let i=await ot("Enter new category name",e);if(i)try{this.parser.validateCategoryName(i),this.form.patchValue({category:i});}catch(t){if(t instanceof X){let r=t.found;await Ie("Category name cannot contain '"+r+"'");}else console.error(t),await Ie("Invalid category name");this.addNewCategory(i);}else this.reset();}validateNamePattern(){return e=>{let i=e.value?.trim()??"";try{return this.parser.validateItemNameAndWeight(i),null;}catch(t){return e.markAsTouched(),t instanceof X?{pattern:t.found}:{pattern:!0};}};}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-editor-item"]],inputs:{item:[1,"item"]},outputs:{itemChanged:"itemChanged"},decls:8,vars:2,consts:()=>{let e;e="Item name cannot contain the character '"+"\uFFFD0\uFFFD"+"'";let i;return i="Item name is required",[e,i,[1,"flex",3,"formGroup"],["name","categories","formControlName","category",1,"max-w-[5rem]"],[3,"value"],["value",""],["type","text","formControlName","name",1,"w-0","flex-1",3,"focus","blur"],[1,"text-red-light","m-1","text-sm"]];},template:function(i,t){i&1&&(a(0,"form",2)(1,"select",3),w(2,wt,2,2,"option",4,De),a(4,"option",5),I(5,"+"),l()(),a(6,"input",6),u("focus",function(d){return t.focus(d);})("blur",function(){return t.blur();}),l()(),m(7,$t,2,1,"div",7)),i&2&&(E("formGroup",t.form),_(2),V(t.categories()),_(5),c(t.mode()==="edit"&&t.form.valid===!1&&t.form.touched?7:-1));},dependencies:[ge,Te,at,st,B,lt,W,fe,Se,he],encapsulation:2,changeDetection:0});}return n;})();var qt=(n,o,e)=>({"font-bold":n,"text-green-light":o,"text-red-light":e});function Ft(n,o){n&1&&(a(0,"span"),h(1,0),l()),n&2&&(_(),y(o),$(1));}function Dt(n,o){n&1&&(a(0,"span"),h(1,1),l());}function Ut(n,o){n&1&&(a(0,"span"),h(1,2),l());}function Qt(n,o){if(n&1&&(a(0,"span"),h(1,3),l()),n&2){let e=s();_(),y(e),$(1);}}function Gt(n,o){n&1&&m(0,Ut,2,0,"span")(1,Qt,2,1,"span"),n&2&&c(o===" "?0:1);}function kt(n,o){n&1&&(a(0,"span"),h(1,4),l());}function Kt(n,o){n&1&&(a(0,"span"),h(1,5),l());}function Xt(n,o){n&1&&(a(0,"span"),h(1,6),l());}function zt(n,o){if(n&1&&(a(0,"div",12),m(1,Ft,2,1,"span")(2,Dt,2,0,"span")(3,Gt,2,1)(4,kt,2,0,"span")(5,Kt,2,0,"span")(6,Xt,2,0,"span"),l()),n&2){let e,i,t=s();_(),c((e=t.form.controls.question.errors==null?null:t.form.controls.question.errors.pattern)?1:-1,e),_(),c(t.form.controls.question.errors!=null&&t.form.controls.question.errors.required?2:-1),_(),c((i=t.form.controls.variable.errors==null?null:t.form.controls.variable.errors.pattern)?3:-1,i),_(),c(t.form.controls.variable.errors!=null&&t.form.controls.variable.errors.required?4:-1),_(),c(t.form.controls.variable.errors!=null&&t.form.controls.variable.errors.reserved?5:-1),_(),c(t.form.controls.variable.errors!=null&&t.form.controls.variable.errors.used?6:-1);}}var mt=(()=>{class n{question=v.required();parser=S(z);state=S(g);variables=this.state.signal("variables");mode=this.state.signal("rulesMode");highlighVariable=R(()=>this.mode()!=="edit"&&this.state.signal("highlightVariableStatus")());variableActive=R(()=>this.state.signal("activeAnswers")()[this.question().variable]);refactorVariables=this.state.signal("refactorVariables");questionChanged=b();variableChanged=b();fb=S(Re).nonNullable;form=this.fb.group({question:this.fb.control("",{validators:[this.validateQuestionPattern(),oe.required.bind(this)]}),variable:this.fb.control("",{validators:[this.validateVariablePattern(),Bt(),oe.required.bind(this)],asyncValidators:[Wt(xe(this.variables),xe(this.question))]})});constructor(){O(()=>{this.question(),this.reset();});let e=Ee(this.form.valueChanges.pipe(se(500),ae(()=>this.form.valid)));O(()=>{let i=e();i?.question&&i.question!==this.question().question&&i.variable?this.questionChanged.emit(new N(i.question,i.variable)):i?.variable&&i.variable.trim()!==this.question().variable&&(this.question().variable===N.NEW_VARIABLE_NAME||!this.refactorVariables()?this.questionChanged.emit(new N(this.question().question,i.variable.trim())):this.variableChanged.emit([this.question().variable,i.variable.trim()]));}),O(()=>{this.mode()==="edit"?this.form.enable({emitEvent:!1}):this.form.disable({emitEvent:!1}),this.reset();});}reset(){this.form.patchValue(this.question(),{emitEvent:!1});}focusQuestion(){this.form.controls.question.value===N.NEW_QUESTION_NAME&&this.form.controls.question.setValue("",{emitEvent:!1});}focusVariable(){this.form.controls.variable.value===N.NEW_VARIABLE_NAME&&this.form.controls.variable.setValue("",{emitEvent:!1});}validateVariablePattern(){return e=>{let i=e.value?.trim()??"";try{return this.parser.validateVariableName(i),null;}catch(t){return e.markAsTouched(),t instanceof X?{pattern:t.found}:{pattern:!0};}};}validateQuestionPattern(){return e=>{let i=e.value?.trim()??"";try{return this.parser.validateQuestionString(i),null;}catch(t){return e.markAsTouched(),t instanceof X?{pattern:t.found}:{pattern:!0};}};}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-editor-question"]],inputs:{question:[1,"question"]},outputs:{questionChanged:"questionChanged",variableChanged:"variableChanged"},decls:6,vars:7,consts:()=>{let e;e="question";let i;i="variable";let t;t="Questions cannot contain this character: '"+"\uFFFD0\uFFFD"+"'";let r;r="Question is required";let d;d="Variables cannot contain spaces";let P;P="Variables cannot contain this character: '"+"\uFFFD0\uFFFD"+"'";let F;F="Variable name is required";let H;H="This variable name is reserved";let re;return re="This variable name is already used",[t,r,d,P,F,H,re,[1,"flex","flex-col",3,"formGroup"],["type","text","placeholder",e,"formControlName","question",1,"grow",3,"focus"],[1,"flex","items-center","gap-2"],[1,"ml-2","h-4"],["type","text","placeholder",i,"formControlName","variable",1,"grow","font-mono",3,"focus","ngClass"],[1,"text-red-light","m-1","flex","flex-col","text-sm"]];},template:function(i,t){i&1&&(a(0,"form",7)(1,"input",8),u("focus",function(){return t.focusQuestion();}),l(),a(2,"div",9),f(3,"app-icon-arrow-forward",10),a(4,"input",11),u("focus",function(){return t.focusVariable();}),l()(),m(5,zt,7,6,"div",12),l()),i&2&&(E("formGroup",t.form),_(4),E("ngClass",K(3,qt,t.highlighVariable(),t.highlighVariable()&&t.variableActive(),t.highlighVariable()&&!t.variableActive())),_(),c(t.mode()==="edit"&&t.form.valid===!1&&t.form.touched?5:-1));},dependencies:[ge,Te,B,W,fe,Se,he,q,Ze],encapsulation:2,changeDetection:0});}return n;})();function Bt(){return n=>[te.string,Oe,Ne,Le,we].some(o=>o===n.value?.trim())?{reserved:!0}:null;}function Wt(n,o){return e=>le(e.value).pipe(ye(n.pipe(Pe(i=>[...i])),o),Me(([i,t,r])=>Ve(()=>!t.find(d=>d===r.variable),le(null),le([i,t,r]).pipe(Pe(([d,P,F])=>{let H=P.findIndex(re=>re===F.variable);return P.splice(H,1),P.includes(d?.trim()??"")?{used:!0}:null;})))));}var Ae=(()=>{class n{parser=S(z);state=S(g);questions=this.state.signal("clipboardQuestions");items=this.state.signal("clipboardItems");itemsCount=R(()=>this.items().length);questionsCount=R(()=>this.questions().length);cutQuestion(e){this.questions.update(i=>[...i,e.toString()]);}cutItem(e){this.items.update(i=>[...i,e.toString()]);}paste(){let e={questions:this.questions().map(i=>this.parser.parseQuestion(i)),items:this.items().map(i=>this.parser.parseItem(i))};return this.questions.set([]),this.items.set([]),e;}static ɵfac=function(i){return new(i||n)();};static ɵprov=$e({token:n,factory:n.ɵfac,providedIn:"root"});}return n;})();function jt(n,o){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s();return C(t.resetCondition());}),f(1,"app-icon-clear"),l();}}function Yt(n,o){if(n&1){let e=T();a(0,"button",11),u("click",function(){p(e);let t=s(2).$index,r=s();return C(r.swapQuestions(t,t+1));}),f(1,"app-icon-arrow-downward"),l();}}function Ht(n,o){n&1&&f(0,"span",10);}function Jt(n,o){if(n&1&&m(0,Yt,2,0,"button",9)(1,Ht,1,0,"span",10),n&2){let e=s().$index,i=s();c(e<i.rule().questions.length-1?0:1);}}function Zt(n,o){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s().$index,r=s();return C(r.deleteQuestion(t));}),f(1,"app-icon-delete"),l();}}function ei(n,o){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s().$index,r=s();return C(r.cutQuestion(t));}),f(1,"app-icon-cut"),l();}}function ti(n,o){if(n&1){let e=T();a(0,"button",11),u("click",function(){p(e);let t=s().$index,r=s();return C(r.swapQuestions(t-1,t));}),f(1,"app-icon-arrow-upward"),l();}}function ii(n,o){if(n&1){let e=T();a(0,"div",2),m(1,Jt,2,1),a(2,"app-editor-question",8),u("questionChanged",function(t){let r=p(e).$index,d=s();return C(d.updateQuestion(r,t));})("variableChanged",function(t){p(e);let r=s();return C(r.variableChanged(t));}),l(),m(3,Zt,2,0,"button",4)(4,ei,2,0,"button",4)(5,ti,2,0,"button",9),l();}if(n&2){let e=o.$implicit,i=o.$index,t=s();_(),c(t.mode()==="swap"&&t.rule().questions.length>1?1:-1),_(),E("question",e),_(),c(t.mode()==="delete"?3:t.mode()==="cut-paste"?4:t.mode()==="swap"&&i>0?5:-1);}}function ni(n,o){if(n&1){let e=T();a(0,"button",11),u("click",function(){p(e);let t=s(2).$index,r=s();return C(r.swapItems(t,t+1));}),f(1,"app-icon-arrow-downward"),l();}}function oi(n,o){n&1&&f(0,"span",10);}function ri(n,o){if(n&1&&m(0,ni,2,0,"button",9)(1,oi,1,0,"span",10),n&2){let e=s().$index,i=s();c(e<i.rule().items.length-1?0:1);}}function li(n,o){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s().$index,r=s();return C(r.deleteItem(t));}),f(1,"app-icon-delete"),l();}}function ai(n,o){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s().$index,r=s();return C(r.cutItem(t));}),f(1,"app-icon-cut"),l();}}function si(n,o){if(n&1){let e=T();a(0,"button",11),u("click",function(){p(e);let t=s().$index,r=s();return C(r.swapItems(t-1,t));}),f(1,"app-icon-arrow-upward"),l();}}function _i(n,o){if(n&1){let e=T();a(0,"div",2),m(1,ri,2,1),a(2,"app-editor-item",12),u("itemChanged",function(t){let r=p(e).$index,d=s();return C(d.updateItem(r,t));}),l(),m(3,li,2,0,"button",4)(4,ai,2,0,"button",4)(5,si,2,0,"button",9),l();}if(n&2){let e=o.$implicit,i=o.$index,t=s();_(),c(t.mode()==="swap"&&t.rule().items.length>1?1:-1),_(),E("item",e),_(),c(t.mode()==="delete"?3:t.mode()==="cut-paste"?4:t.mode()==="swap"&&i>0?5:-1);}}function di(n,o){if(n&1){let e=T();a(0,"div",5)(1,"button",13),u("click",function(){p(e);let t=s();return C(t.addQuestion());}),h(2,0),l(),a(3,"button",13),u("click",function(){p(e);let t=s();return C(t.addItem());}),h(4,1),l()();}}function ci(n,o){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s(2);return C(t.deleteRule.emit());}),f(1,"app-icon-delete"),l();}}function ui(n,o){if(n&1){let e=T();a(0,"button",7),u("click",function(){p(e);let t=s(2);return C(t.paste());}),f(1,"app-icon-paste"),l();}}function mi(n,o){if(n&1&&(a(0,"div",6),m(1,ci,2,0,"button",4)(2,ui,2,0,"button",4),l()),n&2){let e=s();_(),c(e.mode()==="delete"?1:-1),_(),c(e.mode()==="cut-paste"?2:-1);}}var pt=(()=>{class n{rule=v.required();ruleChanged=b();deleteRule=b();renameVariable=b();state=S(g);mode=this.state.signal("rulesMode");selectVariables=R(()=>{let e=this.rule().questions.map(t=>t.variable);return this.state.get("variables").filter(t=>!e.includes(t));});clipboard=S(Ae);resetCondition(){this.updateCondition(new L());}updateCondition(e){let i=new G(e,this.rule().questions,this.rule().items);this.ruleChanged.emit(i);}emitNewQuestions(e){let i=new G(this.rule().condition,e,this.rule().items);this.ruleChanged.emit(i);}updateQuestion(e,i){let t=this.rule().questions;t[e]=i,this.emitNewQuestions(t);}addQuestion(){let e=new N(N.NEW_QUESTION_NAME,N.NEW_VARIABLE_NAME);this.updateQuestion(this.rule().questions.length,e);}deleteQuestion(e){let i=this.rule().questions;i.splice(e,1),this.emitNewQuestions(i);}cutQuestion(e){let i=this.rule().questions[e];this.deleteQuestion(e),this.clipboard.cutQuestion(i);}swapQuestions(e,i){let t=this.rule().questions,r=t[e];t[e]=t[i],t[i]=r,this.emitNewQuestions(t);}emitNewItems(e){let i=new G(this.rule().condition,this.rule().questions,e);this.ruleChanged.emit(i);}updateItem(e,i){let t=this.rule().items;t[e]=i,this.emitNewItems(t);}addItem(){let e=new k(k.NEW_CATEGORY_NAME,k.NEW_ITEM_NAME);this.updateItem(this.rule().items.length,e);}deleteItem(e){let i=this.rule().items;i.splice(e,1),this.emitNewItems(i);}cutItem(e){let i=this.rule().items[e];this.deleteItem(e),this.clipboard.cutItem(i);}swapItems(e,i){let t=this.rule().items,r=t[e];t[e]=t[i],t[i]=r,this.emitNewItems(t);}paste(){let{questions:e,items:i}=this.clipboard.paste(),t=new G(this.rule().condition,[...this.rule().questions,...e],[...this.rule().items,...i]);this.ruleChanged.emit(t);}variableChanged([e,i]){this.renameVariable.emit([e,i]);}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-editor-rule"]],inputs:{rule:[1,"rule"]},outputs:{ruleChanged:"ruleChanged",deleteRule:"deleteRule",renameVariable:"renameVariable"},decls:9,vars:4,consts:()=>{let e;e=" + Question ";let i;return i=" + Item ",[e,i,[1,"mb-1","flex","items-center"],[1,"grow",3,"conditionChanged","condition","selectVariables"],["type","button",1,"link"],[1,"flex","justify-end","gap-2"],[1,"flex","justify-center"],["type","button",1,"link",3,"click"],[1,"grow",3,"questionChanged","variableChanged","question"],["type","button",1,"link","p-1"],[1,"ml-6"],["type","button",1,"link","p-1",3,"click"],[1,"grow",3,"itemChanged","item"],["type","button",1,"h-8",3,"click"]];},template:function(i,t){i&1&&(a(0,"div",2)(1,"app-editor-condition",3),u("conditionChanged",function(d){return t.updateCondition(d);}),l(),m(2,jt,2,0,"button",4),l(),w(3,ii,6,3,"div",2,J),w(5,_i,6,3,"div",2,J),m(7,di,5,0,"div",5)(8,mi,3,2,"div",6)),i&2&&(_(),E("condition",t.rule().condition)("selectVariables",t.selectVariables()),_(),c(t.mode()==="edit"?2:-1),_(),V(t.rule().questions),_(2),V(t.rule().items),_(2),c(t.mode()==="edit"?7:8));},dependencies:[dt,mt,ut,ue,He,je,me,et,Je],encapsulation:2,changeDetection:0});}return n;})();var pi=["searchInput"],Ci=n=>({"sticky left-0 top-0 z-30 shadow-md":n}),Y=n=>({active:n});function Ei(n,o){if(n&1&&(a(0,"span"),h(1,2),l()),n&2){let e=o;_(),y(e)(e),$(1);}}function fi(n,o){if(n&1&&(a(0,"span"),h(1,3),l()),n&2){let e=o;_(),y(e)(e),$(1);}}function Ti(n,o){if(n&1&&(a(0,"div",10)(1,"span"),h(2,1),l(),m(3,Ei,2,2,"span")(4,fi,2,2,"span"),l()),n&2){let e,i,t=s(2);_(3),c((e=t.clipboard.itemsCount())?3:-1,e),_(),c((i=t.clipboard.questionsCount())?4:-1,i);}}function Si(n,o){if(n&1&&m(0,Ti,5,2,"div",10),n&2){let e=s();c(e.clipboard.itemsCount()>0||e.clipboard.questionsCount()>0?0:-1);}}function hi(n,o){if(n&1){let e=T();a(0,"div",9)(1,"input",11,0),Ke("ngModelChange",function(t){p(e);let r=s();return ke(r.searchTerm,t)||(r.searchTerm=t),C(t);}),l(),a(3,"button",12),u("click",function(){p(e);let t=s();return C(t.clearSearch());}),f(4,"app-icon-clear",13),l()();}if(n&2){let e=s();_(),Ge("ngModel",e.searchTerm);}}var Ct=(()=>{class n{noOfVisibleRules=v.required();state=S(g);mode=this.state.signal("rulesMode");searchTerm=this.state.signal("filterRulesQuery");clipboard=S(Ae);sticky=R(()=>this.state.signal("scrollY")()>48);searchInput=U.required("searchInput");focusSearch(){setTimeout(()=>{this.searchInput().nativeElement.focus();},50);}clearSearch(){this.searchTerm.set(""),this.focusSearch();}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-toolbar"]],viewQuery:function(i,t){i&1&&Q(t.searchInput,pi,5),i&2&&_e();},inputs:{noOfVisibleRules:[1,"noOfVisibleRules"]},decls:16,vars:26,consts:()=>{let e;e="Clipboard:";let i;i="{VAR_PLURAL, plural, one {1 Item} other {{INTERPOLATION} Items}}",i=ve(i,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"});let t;return t="{VAR_PLURAL, plural, one {1 Question} other {{INTERPOLATION} Questions}}",t=ve(t,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"}),[["searchInput",""],e,i,t,[1,"bg-active","py-2",3,"ngClass"],[1,"mb-1","grid","grid-cols-6","gap-2"],["type","button",1,"link",3,"click","ngClass"],[1,"my-auto","h-6","w-6"],["type","button",1,"link",3,"click","ngClass","disabled"],[1,"mt-2","flex","items-center"],[1,"mt-2","flex","justify-center","gap-4"],["type","text",1,"grow",3,"ngModelChange","ngModel"],["type","button",1,"link",3,"click"],[1,"h-6","w-6"]];},template:function(i,t){i&1&&(a(0,"div",4)(1,"div",5)(2,"button",6),u("click",function(){return t.mode.set("view");}),f(3,"app-icon-view",7),l(),a(4,"button",8),u("click",function(){return t.mode.set("edit");}),f(5,"app-icon-edit",7),l(),a(6,"button",8),u("click",function(){return t.mode.set("delete");}),f(7,"app-icon-delete",7),l(),a(8,"button",8),u("click",function(){return t.mode.set("cut-paste");}),f(9,"app-icon-reorder",7),l(),a(10,"button",8),u("click",function(){return t.mode.set("swap");}),f(11,"app-icon-swap",7),l(),a(12,"button",6),u("click",function(){return t.mode.set("search"),t.focusSearch();}),f(13,"app-icon-search",7),l()(),m(14,Si,1,1)(15,hi,5,1,"div",9),l()),i&2&&(E("ngClass",x(12,Ci,t.sticky())),_(2),E("ngClass",x(14,Y,t.mode()==="view")),_(2),E("ngClass",x(16,Y,t.mode()==="edit"))("disabled",!t.noOfVisibleRules()&&!!t.searchTerm()),_(2),E("ngClass",x(18,Y,t.mode()==="delete"))("disabled",!t.noOfVisibleRules()),_(2),E("ngClass",x(20,Y,t.mode()==="cut-paste"))("disabled",t.noOfVisibleRules()<2&&!t.clipboard.itemsCount()&&!t.clipboard.questionsCount()),_(2),E("ngClass",x(22,Y,t.mode()==="swap"))("disabled",!t.noOfVisibleRules()),_(2),E("ngClass",x(24,Y,t.mode()==="search")),_(2),c(t.mode()==="cut-paste"?14:t.mode()==="search"||t.searchTerm()?15:-1));},dependencies:[_t,B,W,rt,q,ze,Ye,ue,We,ce,Be,me],encapsulation:2,changeDetection:0});}return n;})();var Ri=(n,o)=>o.index,gi=(n,o,e)=>({disabled:n,"animate-pulse":o,"mb-[2.25rem]":e});function Ai(n,o){if(n&1){let e=T();a(0,"div",4)(1,"div",7)(2,"p"),h(3,0),l(),a(4,"button",8),u("click",function(){p(e);let t=s();return C(t.addRuleAndEdit());}),h(5,1),l()()();}}function Pi(n,o){if(n&1){let e=T();a(0,"div",9)(1,"button",12),u("click",function(){p(e);let t=s().$implicit,r=s();return C(r.swapRules(t.index-1,t.index));}),f(2,"app-icon-swap"),l()();}}function bi(n,o){if(n&1){let e=T();m(0,Pi,3,0,"div",9),a(1,"div",10)(2,"app-editor-rule",11),u("ruleChanged",function(t){let r=p(e).$implicit,d=s();return C(d.updateRule(r.index,t));})("deleteRule",function(){let t=p(e).$implicit,r=s();return C(r.deleteRule(t.index));})("renameVariable",function(t){p(e);let r=s();return C(r.renameVariable(t));}),l()();}if(n&2){let e=o.$implicit,i=s();c(e.index>0&&i.mode()==="swap"&&!i.filter()?0:-1),_(),E("id","rule-"+e.index)("ngClass",K(4,gi,i.showAsDisabled(e.rule),i.highlightRule()===e.index,i.mode()==="view"||i.mode()==="search")),_(),E("rule",e.rule);}}function vi(n,o){if(n&1){let e=T();a(0,"button",13),u("click",function(){p(e);let t=s();return C(t.addRule());}),h(1,2),l();}}function Ii(n,o){n&1&&(a(0,"a",6),f(1,"img",14),l());}var Un=(()=>{class n{refactor=S(nt);state=S(g);parsedRules=this.state.signal("parsedRules");activeRules=this.state.signal("activeRules");mode=this.state.signal("rulesMode");filter=this.state.signal("filterRulesQuery");highlightRule=qe(void 0);visibleRules=R(()=>this.filter()===""?this.parsedRules().map((i,t)=>({rule:i,index:t})):this.parsedRules().map((i,t)=>({rule:i,index:t})).filter(i=>{let t=this.filter();return!t||this.refactor.contains(i.rule,t);}));goToPacklistButtonVisible=R(()=>this.state.signal("scrollY")()>100);updateRules(e){let i=tt(e);this.state.set("rules",i);}updateRule(e,i){let t=this.parsedRules();t[e]=i,this.updateRules([...t]);}deleteRule(e){let i=this.parsedRules();i.splice(e,1),this.updateRules([...i]);}addRule(){let e=this.parsedRules().length,i=[];for(let d=0;d<this.parsedRules().length;d++){let P=document.querySelector(`#rule-${d.toString()}`);if(P){let F=P.getBoundingClientRect();F.top>=0&&F.bottom<=window.innerHeight&&i.push(d);}}i.includes(e-1)||(e=i[0]+1);let t=new G(new L()),r=this.parsedRules();r.splice(e,0,t),this.updateRules([...r]),this.highlightRule.set(e),setTimeout(()=>{this.highlightRule.set(void 0);},4e3);}addRuleAndEdit(){this.addRule(),this.mode.set("edit");}swapRules(e,i){let t=this.parsedRules(),r=t[e];t[e]=t[i],t[i]=r,this.updateRules([...t]);}showAsDisabled(e){return this.state.get("fadeOutDisabledRules")&&!this.activeRules().includes(e);}renameVariable([e,i]){let t=this.refactor.renameVariable(e,i,this.parsedRules());this.updateRules(t);}static ɵfac=function(i){return new(i||n)();};static ɵcmp=A({type:n,selectors:[["app-rules"]],decls:6,vars:4,consts:()=>{let e;e="There are no rules defined yet.";let i;i=" + Rule ";let t;t=" + Rule ";let r;return r="application icon",[e,i,t,[3,"noOfVisibleRules"],[1,"flex","h-[calc(100vh-4rem)]","items-center","justify-center"],["type","button",1,"fixed","bottom-2","z-50"],["routerLink","/packlist",1,"fixed","bottom-2","right-2","z-50"],[1,"flex","flex-col","items-center","gap-6"],["type","button",3,"click"],[1,"flex","justify-center"],[1,"card","mb-1",3,"id","ngClass"],[3,"ruleChanged","deleteRule","renameVariable","rule"],["type","button",1,"link",3,"click"],["type","button",1,"fixed","bottom-2","z-50",3,"click"],["alt",r,"src","icon.svg",1,"h-12"]];},template:function(i,t){i&1&&(f(0,"app-toolbar",3),m(1,Ai,6,0,"div",4),w(2,bi,3,8,null,null,Ri),m(4,vi,2,0,"button",5)(5,Ii,2,0,"a",6)),i&2&&(E("noOfVisibleRules",t.visibleRules().length),_(),c(t.visibleRules().length?-1:1),_(),V(t.visibleRules()),_(2),c(t.mode()==="edit"&&!t.filter()&&t.visibleRules().length?4:-1),_(),c(t.goToPacklistButtonVisible()?5:-1));},dependencies:[pt,Ct,ce,q,Xe],encapsulation:2,changeDetection:0});}return n;})();export{Un as default};/**i18n:dedd5470af1d8ff9fad383437db3f2db99f1a4dd222b97ea99c2e928bb12df18*/