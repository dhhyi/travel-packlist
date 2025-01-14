import{a as et,b as tt,d as rt}from"./chunk-5281f6a2.js";import{$ as y,B as Je,V as X,Y as D,ab as R,ca as Ye,p as Ge,pc as Ze,uc as x,vc as Xe,xc as C}from"./chunk-3bd23466.js";import{a as P,b as Ke}from"./chunk-cb4c040a.js";function dr(s){return s.map(a=>a.toString()).map(a=>a+";").join(`

`);}function pe(s,a,e=-1){if(!s)return"0g";let o=(e<0?s/1e3:(s/1e3).toFixed(e)).toString()+"kg",c=(s*1).toString()+"g";return a?a==="kg"?o:c:o.length<=c.length?o:c;}var j=class{condition;questions;items;constructor(a,e=[],o=[]){this.condition=a,this.questions=e,this.items=o;}toString(){let a=[];if(!(this.condition instanceof K)){let o=this.condition.toString();o&&a.push(o," ");}a.push(":-");let e=this.questions.map(o=>o.toString()).concat(this.items.map(o=>o.toString()));if(e.length===1&&a.length===1)a.push(" ",e[0]);else for(let o=0;o<e.length;o++){let c=e[o];o>0&&a.push(","),a.push(`
`,"   ",c);}return a.join("");}},L=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(a,e){this.question=a,this.variable=e;}toString(){return this.question+" $"+this.variable;}},q=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(a,e,o){this.category=a,this.name=e,this.weight=o;}toString(){let a=`[${this.category}] ${this.name}`.trim();return this.weight&&(a+=" "+pe(this.weight)),a;}},W=class{variable;constructor(a){this.variable=a;}evaluate(a){return a[this.variable];}toString(){return this.variable;}},Dr=(()=>{class s extends W{static string="please_select";constructor(){super(s.string);}}return s;})(),K=(()=>{class s extends W{static string="always";constructor(){super(s.string);}evaluate(){return!0;}}return s;})(),F=class{not;constructor(a){this.not=a;}evaluate(a){return!this.not.evaluate(a);}toString(){return"NOT "+this.not.toString();}},M=class{left;right;constructor(a,e){this.left=a,this.right=e;}evaluate(a){return this.left.evaluate(a)&&this.right.evaluate(a);}toString(){return this.left.toString()+" AND "+this.right.toString();}},z=class{left;right;constructor(a,e){this.left=a,this.right=e;}evaluate(a){return this.left.evaluate(a)||this.right.evaluate(a);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function mr(s,a){let e=a.filter(c=>c instanceof L),o=a.filter(c=>c instanceof q);return new j(s??new K(),e,o);}function st(s){return s.length===1?s[0]:new M(s[0],st(s.slice(1)));}function nt(s){return s.length===1?s[0]:new z(s[0],nt(s.slice(1)));}function vr(s,a){function e(){this.constructor=s;}e.prototype=a.prototype,s.prototype=new e();}function N(s,a,e,o){var c=Error.call(this,s);return Object.setPrototypeOf&&Object.setPrototypeOf(c,N.prototype),c.expected=a,c.found=e,c.location=o,c.name="SyntaxError",c;}vr(N,Error);function he(s,a,e){return e=e||" ",s.length>a?s:(a-=s.length,e+=e.repeat(a),s+e.slice(0,a));}N.prototype.format=function(s){var a="Error: "+this.message;if(this.location){var e=null,o;for(o=0;o<s.length;o++)if(s[o].source===this.location.source){e=s[o].text.split(/\r\n|\n|\r/g);break;}var c=this.location.start,g=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(c):c,v=this.location.source+":"+g.line+":"+g.column;if(e){var b=this.location.end,I=he("",g.line.toString().length," "),m=e[c.line-1],d=c.line===b.line?b.column:m.length+1,E=d-c.column||1;a+=`
 --> `+v+`
`+I+` |
`+g.line+" | "+m+`
`+I+" | "+he("",c.column-1," ")+he("",E,"^");}else a+=`
 at `+v;}return a;};N.buildMessage=function(s,a){var e={literal:function(m){return'"'+c(m.text)+'"';},class:function(m){var d=m.parts.map(function(E){return Array.isArray(E)?g(E[0])+"-"+g(E[1]):g(E);});return"["+(m.inverted?"^":"")+d.join("")+"]";},any:function(){return"any character";},end:function(){return"end of input";},other:function(m){return m.description;}};function o(m){return m.charCodeAt(0).toString(16).toUpperCase();}function c(m){return m.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+o(d);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+o(d);});}function g(m){return m.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+o(d);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+o(d);});}function v(m){return e[m.type](m);}function b(m){var d=m.map(v),E,_;if(d.sort(),d.length>0){for(E=1,_=1;E<d.length;E++)d[E-1]!==d[E]&&(d[_]=d[E],_++);d.length=_;}switch(d.length){case 1:return d[0];case 2:return d[0]+" or "+d[1];default:return d.slice(0,-1).join(", ")+", or "+d[d.length-1];}}function I(m){return m?'"'+c(m)+'"':"end of input";}return"Expected "+b(s)+" but "+I(a)+" found.";};function k(s,a){a=a!==void 0?a:{};var e={},o=a.grammarSource,c={Rules:Le,Rule:oe,Condition:De,Effects:Me,Question:ce,Item:fe,VariableName:ue,QuestionString:ze,ItemNameAndWeight:_e,CategoryName:qe},g=Le,v=";",b=":-",I="OR",m="AND",d="NOT",E=",",_="$",bt="[",St="]",be="kg",xt="g",yt=".",Se=/^[^$,;#]/,Et=/^[a-zA-Z]/,xe=/^[a-zA-Z0-9\-[\](){}_]/,ye=/^[^\],;#[]/,At=/^[,;]/,Ee=/^[^ ,;#]/,G=/^[0-9]/,Ae=/^[ \t\n\r]/,Rt=A("rule end"),Ct=O(";",!1),Ot=A("rule"),kt=O(":-",!1),J=A("condition"),Tt=O("OR",!1),It=O("AND",!1),ae=O("NOT",!1),Wt=O(",",!1),Re=A("question"),Nt=O("$",!1),Ce=V(["$",",",";","#"],!0,!1),Pt=A("variable name"),Lt=V([["a","z"],["A","Z"]],!1,!1),Oe=V([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1),Vt=A("item"),Dt=A("category"),jt=O("[",!1),Ft=O("]",!1),Mt=A("category name"),ke=V(["]",",",";","#","["],!0,!1),zt=A("item name"),qt=A("word"),_t=V([",",";"],!1,!1),Te=V([" ",",",";","#"],!0,!1),Ut=A("weight"),Qt=O("kg",!1),Ht=O("g",!1),Bt=A("number"),Y=V([["0","9"]],!1,!1),Kt=O(".",!1),Gt=A("whitespace"),Ie=V([" ","	",`
`,"\r"],!1,!1),Jt=ur(),Yt=function(t,r){return mr(t,r);},Zt=function(t){return nt(t);},Xt=function(t){return st(t);},er=function(t){return new F(t);},tr=function(t){return new W(t);},rr=function(t,r){return new L(t.trim(),r.trim());},sr=function(t,r){let{name:i,weight:l}=r;return new q(t.trim(),i,l);},nr=function(t,r){return a.trackWeight;},ir=function(t,r){let i=t.trim();return i.length||We("item name"),{name:i,weight:r};},ar=function(t){let r=t.trim();return r.length||We("item name"),{name:r,weight:void 0};},or=function(t){return t*1e3;},lr=function(){return parseFloat(cr());},n=a.peg$currPos|0,S=n,U=[{line:1,column:1}],T=n,Z=a.peg$maxFailExpected||[],u=a.peg$silentFails|0,Q;if(a.startRule){if(!(a.startRule in c))throw new Error(`Can't start parsing from rule "`+a.startRule+'".');g=c[a.startRule];}function cr(){return s.substring(S,n);}function Ir(){return S;}function Wr(){return{source:o,start:S,end:n};}function Nr(){return H(S,n);}function We(t,r){throw r=r!==void 0?r:H(S,n),Pe([A(t)],s.substring(S,n),r);}function Pr(t,r){throw r=r!==void 0?r:H(S,n),gr(t,r);}function O(t,r){return{type:"literal",text:t,ignoreCase:r};}function V(t,r,i){return{type:"class",parts:t,inverted:r,ignoreCase:i};}function ur(){return{type:"any"};}function fr(){return{type:"end"};}function A(t){return{type:"other",description:t};}function Ne(t){var r=U[t],i;if(r)return r;if(t>=U.length)i=U.length-1;else for(i=t;!U[--i];);for(r=U[i],r={line:r.line,column:r.column};i<t;)s.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return U[t]=r,r;}function H(t,r,i){var l=Ne(t),f=Ne(r),h={source:o,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:f.line,column:f.column}};return i&&o&&typeof o.offset=="function"&&(h.start=o.offset(h.start),h.end=o.offset(h.end)),h;}function p(t){n<T||(n>T&&(T=n,Z=[]),Z.push(t));}function gr(t,r){return new N(t,null,null,r);}function Pe(t,r,i){return new N(N.buildMessage(t,r),t,r,i);}function Le(){var t,r,i,l,f,h;for(t=n,r=$(),i=[],l=oe();l!==e;)i.push(l),l=n,f=Ve(),f!==e?(f=oe(),f===e?(n=l,l=e):l=f):l=f;return l=Ve(),l===e&&(l=null),f=$(),h=Be(),h!==e?t=i:(n=t,t=e),t;}function Ve(){var t,r,i,l;return u++,t=n,r=$(),s.charCodeAt(n)===59?(i=v,n++):(i=e,u===0&&p(Ct)),i!==e?(l=$(),r=[r,i,l],t=r):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(Rt)),t;}function oe(){var t,r,i,l,f,h;return u++,t=n,r=De(),r===e&&(r=null),i=$(),s.substr(n,2)===b?(l=b,n+=2):(l=e,u===0&&p(kt)),l!==e?(f=$(),h=Me(),S=t,t=Yt(r,h)):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(Ot)),t;}function De(){var t,r;return u++,t=pr(),u--,t===e&&(r=e,u===0&&p(J)),t;}function pr(){var t,r,i,l,f,h,w,B;for(u++,t=n,r=n,i=[],l=je();l!==e;)i.push(l),l=n,f=n,h=$(),s.substr(n,2)===I?(w=I,n+=2):(w=e,u===0&&p(Tt)),w!==e?(B=$(),h=[h,w,B],f=h):(n=f,f=e),f!==e?(f=je(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(S=t,r=Zt(r)),t=r,u--,t===e&&(r=e,u===0&&p(J)),t;}function je(){var t,r,i,l,f,h,w,B;for(u++,t=n,r=n,i=[],l=le();l!==e;)i.push(l),l=n,f=n,h=$(),s.substr(n,3)===m?(w=m,n+=3):(w=e,u===0&&p(It)),w!==e?(B=$(),h=[h,w,B],f=h):(n=f,f=e),f!==e?(f=le(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(S=t,r=Xt(r)),t=r,u--,t===e&&(r=e,u===0&&p(J)),t;}function le(){var t,r,i,l,f,h;return u++,t=n,s.substr(n,3)===d?(r=d,n+=3):(r=e,u===0&&p(ae)),r!==e?(i=$(),s.substr(n,3)===d?(l=d,n+=3):(l=e,u===0&&p(ae)),l!==e?(f=$(),h=le(),h!==e?t=h:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s.substr(n,3)===d?(r=d,n+=3):(r=e,u===0&&p(ae)),r!==e?(i=$(),l=Fe(),l!==e?(S=t,t=er(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=Fe(),r!==e?t=r:(n=t,t=e))),u--,t===e&&(r=e,u===0&&p(J)),t;}function Fe(){var t,r;return t=n,r=ue(),r!==e&&(S=t,r=tr(r)),t=r,t;}function Me(){var t,r,i,l,f,h,w;for(t=n,r=[],i=ce(),i===e&&(i=fe());i!==e;)r.push(i),i=n,l=n,f=$(),s.charCodeAt(n)===44?(h=E,n++):(h=e,u===0&&p(Wt)),h!==e?(w=$(),f=[f,h,w],l=f):(n=l,l=e),l!==e?(l=ce(),l===e&&(l=fe()),l===e?(n=i,i=e):i=l):i=l;return t=r,t;}function ce(){var t,r,i,l;return u++,t=n,r=ze(),r!==e?(s.charCodeAt(n)===36?(i=_,n++):(i=e,u===0&&p(Nt)),i!==e?(l=ue(),l!==e?(S=t,t=rr(r,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(Re)),t;}function ze(){var t,r,i;if(u++,t=n,r=[],i=s.charAt(n),Se.test(i)?n++:(i=e,u===0&&p(Ce)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),Se.test(i)?n++:(i=e,u===0&&p(Ce));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&p(Re)),t;}function ue(){var t,r,i,l,f;if(u++,t=n,r=n,i=s.charAt(n),Et.test(i)?n++:(i=e,u===0&&p(Lt)),i!==e){for(l=[],f=s.charAt(n),xe.test(f)?n++:(f=e,u===0&&p(Oe));f!==e;)l.push(f),f=s.charAt(n),xe.test(f)?n++:(f=e,u===0&&p(Oe));i=[i,l],r=i;}else n=r,r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&p(Pt)),t;}function fe(){var t,r,i,l;return u++,t=n,r=hr(),r!==e?(i=$(),l=_e(),l!==e?(S=t,t=sr(r,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(Vt)),t;}function hr(){var t,r,i,l,f,h;return u++,t=n,s.charCodeAt(n)===91?(r=bt,n++):(r=e,u===0&&p(jt)),r!==e?(i=$(),l=qe(),l!==e?(f=$(),s.charCodeAt(n)===93?(h=St,n++):(h=e,u===0&&p(Ft)),h!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(Dt)),t;}function qe(){var t,r,i;if(u++,t=n,r=[],i=s.charAt(n),ye.test(i)?n++:(i=e,u===0&&p(ke)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),ye.test(i)?n++:(i=e,u===0&&p(ke));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&p(Mt)),t;}function _e(){var t,r,i,l,f;for(u++,t=n,r=n,i=[],l=Ue();l!==e;)i.push(l),l=n,f=$(),f=Ue(),f===e?(n=l,l=e):l=f;if(r=s.substring(r,n),i=$(),l=Qe(),l!==e?(S=n,f=nr(r,l),f?f=void 0:f=e,f!==e?(S=t,t=ir(r,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,r=n,i=[],l=ge();l!==e;)i.push(l),l=n,f=$(),f=ge(),f===e?(n=l,l=e):l=f;r=s.substring(r,n),S=t,r=ar(r),t=r;}return u--,t===e&&(r=e,u===0&&p(zt)),t;}function Ue(){var t,r,i,l,f,h;return u++,t=n,r=n,u++,i=n,l=Qe(),l!==e?(f=$(),h=Be(),h===e&&(h=s.charAt(n),At.test(h)?n++:(h=e,u===0&&p(_t))),h!==e?(l=[l,f,h],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?r=void 0:(n=r,r=e),r!==e?(i=ge(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(qt)),t;}function ge(){var t,r,i;if(t=n,r=[],i=s.charAt(n),Ee.test(i)?n++:(i=e,u===0&&p(Te)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),Ee.test(i)?n++:(i=e,u===0&&p(Te));else r=e;return r!==e?t=s.substring(t,n):t=r,t;}function Qe(){var t,r,i;return u++,t=n,r=He(),r!==e?(s.substr(n,2)===be?(i=be,n+=2):(i=e,u===0&&p(Qt)),i!==e?(S=t,t=or(r)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=He(),r!==e?(s.charCodeAt(n)===103?(i=xt,n++):(i=e,u===0&&p(Ht)),i===e&&(i=null),t=r):(n=t,t=e)),u--,t===e&&(r=e,u===0&&p(Ut)),t;}function He(){var t,r,i,l,f,h,w;if(u++,t=n,r=[],i=s.charAt(n),G.test(i)?n++:(i=e,u===0&&p(Y)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),G.test(i)?n++:(i=e,u===0&&p(Y));else r=e;if(r!==e){if(i=n,s.charCodeAt(n)===46?(l=yt,n++):(l=e,u===0&&p(Kt)),l!==e){if(f=n,h=[],w=s.charAt(n),G.test(w)?n++:(w=e,u===0&&p(Y)),w!==e)for(;w!==e;)h.push(w),w=s.charAt(n),G.test(w)?n++:(w=e,u===0&&p(Y));else h=e;h!==e?f=s.substring(f,n):f=h,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),S=t,t=lr();}else n=t,t=e;return u--,t===e&&(r=e,u===0&&p(Bt)),t;}function $(){var t,r;for(u++,t=[],r=s.charAt(n),Ae.test(r)?n++:(r=e,u===0&&p(Ie));r!==e;)t.push(r),r=s.charAt(n),Ae.test(r)?n++:(r=e,u===0&&p(Ie));return u--,r=e,u===0&&p(Gt),t;}function Be(){var t,r;return t=n,u++,s.length>n?(r=s.charAt(n),n++):(r=e,u===0&&p(Jt)),u--,r===e?t=void 0:(n=t,t=e),t;}if(Q=g(),a.peg$library)return{peg$result:Q,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Z,peg$maxFailPos:T};if(Q!==e&&n===s.length)return Q;throw Q!==e&&n<s.length&&p(fr()),Pe(Z,T<s.length?s.charAt(T):null,T<s.length?H(T,T+1):H(T,T));}var wr={isTrackWeight:()=>!1},br=new D("PARSER_CONFIG_PROVIDER"),ee=(()=>{class s{config=y(br,{optional:!0})??wr;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,o={}){return{startRule:e,trackWeight:o.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return k(e,this.makeOptions("Condition"));}parseQuestion(e){return k(e,this.makeOptions("Question"));}parseItem(e){return k(e,this.makeOptions("Item"));}parseEffects(e){return k(e,this.makeOptions("Effects"));}parseRule(e){return k(e,this.makeOptions("Rule"));}parseRules(e){let o=e.split(/\r?\n/g).map(c=>c.replace(/#.*/,"")).join(`
`);try{return k(o,this.makeOptions("Rules"));}catch(c){let g=[];if(g.push("Fehler beim Parsen der Regeln"),c instanceof N){let v=c.location.start.line.toString(),b=c.location.start.column.toString();g.push(" at line ",v," column ",b),g.push(":",`
`,c.message);}else console.error(c);throw new Error(g.join(""));}}validateVariableName(e){k(e,this.makeOptions("VariableName"));}validateQuestionString(e){k(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){k(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){k(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return k(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(o){return new(o||s)();};static ɵprov=X({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();var de=(()=>{class s{parser=y(ee);extractVariables(e){return e.reduce((o,c)=>[...o,...c.questions.map(g=>g.variable)],[]);}extractCategories(e){let o=new Set();for(let c of e)for(let g of c.items)o.add(g.category);return Array.from(o);}renameVariable(e,o,c){if(c instanceof Array)return c.map(v=>this.renameVariable(e,o,v));if(c instanceof L)return c.variable===e?new L(c.question,o):c;if(c instanceof j)return new j(this.renameVariable(e,o,c.condition),c.questions.map(v=>this.renameVariable(e,o,v)),c.items);if(c instanceof W)return c.variable===e?new W(o):c;if(c instanceof F)return new F(this.renameVariable(e,o,c.not));if(c instanceof M)return new M(this.renameVariable(e,o,c.left),this.renameVariable(e,o,c.right));if(c instanceof z)return new z(this.renameVariable(e,o,c.left),this.renameVariable(e,o,c.right));let g=c;throw new Error("Unknown item type: "+g);}filterActive(e){let o=e.rules.filter(g=>g.condition.evaluate(e.model)),c=this.extractVariables(o).reduce((g,v)=>Ke(P({},g),{[v]:e.model[v]}),{[K.string]:!0});return o.length===e.rules.length?{model:c,rules:o}:this.filterActive({model:c,rules:o});}contains(e,o){let c=o.toLowerCase();if(e instanceof j)return this.contains(e.condition,o)||e.questions.some(v=>this.contains(v,o))||e.items.some(v=>this.contains(v,o));if(e instanceof L)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof q)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof W)return e.variable.toLowerCase().includes(c);if(e instanceof F)return this.contains(e.not,o);if(e instanceof M)return this.contains(e.left,o)||this.contains(e.right,o);if(e instanceof z)return this.contains(e.left,o)||this.contains(e.right,o);let g=e;throw new Error("Unknown item type: "+g);}countItemsAndWeights(e){return e.reduce((o,c)=>c.items.reduce((g,v)=>{let b;return this.parser.isTrackWeight()?b=v.weight?1:0:b=this.parser.forceParseWeight(v.name)?1:0,{items:g.items+1,weights:g.weights+b};},o),{items:0,weights:0});}static ɵfac=function(o){return new(o||s)();};static ɵprov=X({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();var it=`:-
   [Utility] Paper Tissues,
   [Utility] Backpack;

:- Are you traveling longer than 3 days? $longer;

longer :-
   Do you have a washer or laundry service available? $laundry,
   Do you want to work? $work,
   [Electronics] Phone Charger,
   [Electronics] Tablet;

longer AND NOT laundry :-
   [Clothes] enough Shirts,
   [Clothes] enough Underwear,
   [Clothes] spare Pants;

laundry :-
   [Clothes] 3 Shirts,
   [Clothes] 3 sets of Underwear;

work :-
   [Electronics] Laptop;

:-
   Will it be sunny? $sunny,
   Will it be rainy? $rainy,
   Are you traveling abroad? $abroad;

sunny :-
   Do you expect a high UV index? $uv,
   [Utility] Sunglasses,
   [Clothes] Short Pants;

rainy :-
   [Clothes] Rain Jacket;

NOT rainy :-
   [Clothes] Jacket;

NOT sunny :-
   [Clothes] Long Pants;

uv :-
   [Utility] Sunscreen;

abroad :-
   [Documents] Passport,
   [Documents] Visa;
`;var at=`:-
   [N\xFCtzliches] Papiertaschent\xFCcher,
   [N\xFCtzliches] Rucksack;

:- Reist du l\xE4nger als 3 Tage? $longer;

longer :-
   Hast du eine Waschmaschine oder einen W\xE4scheservice zur Verf\xFCgung? $laundry,
   Willst du arbeiten? $work,
   [Elektronik] Handy-Ladeger\xE4t,
   [Elektronik] Tablet;

longer AND NOT laundry :-
   [Kleidung] genug Hemden,
   [Kleidung] genug Unterw\xE4sche,
   [Kleidung] Ersatzhosen;

laundry :-
   [Kleidung] 3 Hemden,
   [Kleidung] 3 S\xE4tze Unterw\xE4sche;

work :-
   [Elektronik] Laptop;

:-
   Wird es sonnig sein? $sunny,
   Wird es regnerisch sein? $rainy,
   Reist du ins Ausland? $abroad;

sunny :-
   Erwartest du einen hohen UV-Index? $uv,
   [N\xFCtzliches] Sonnenbrille,
   [Kleidung] Kurze Hosen;

rainy :-
   [Kleidung] Regenjacke;

NOT rainy :-
   [Kleidung] Jacke;

NOT sunny :-
   [Kleidung] Lange Hosen;

uv :-
   [N\xFCtzliches] Sonnencreme;

abroad :-
   [Dokumente] Reisepass,
   [Dokumente] Visum;
`;var me=new D("RULES_TEMPLATE");function Sr(s){return s.startsWith("de")?at:it;}function ls(){return Ye([{provide:me,useFactory:Sr,deps:[Ze]}]);}function te(s,a){let e=s.getItem("state"),o;if(e){let c=JSON.parse(e);o=P(P({},a),c);}else o=P({},a);return o;}function ot(s,a){if(typeof s!=typeof a)return!1;if(s&&a&&typeof s=="object"){let e=Object.keys(s),o=Object.keys(a);return e.length===o.length&&e.every(c=>ot(s[c],a[c]));}return s===a;}function xr(s,a){let e=Object.keys(a).filter(o=>!ot(s[o],a[o])).map(o=>[o,s[o]]);return e.length===0?null:Object.fromEntries(e);}function re(s,a,e){let o=xr(a,e);o===null?s.removeItem("state"):s.setItem("state",JSON.stringify(o));}var lt=["en","de"],ve={rules:void 0,answers:{},checkedItems:[],collapsedCategories:[],categorySorting:"alphabetically",trackWeight:!1,answersLocked:!1,fadeOutDisabledRules:!1,highlightVariableStatus:!1,refactorVariables:!0,theme:"system",fontSize:"normal",accessibility:"accessible",language:"auto",exportReminder:!1,lastExportHash:"",lastExportDate:0},se=te(localStorage,ve);function yr(){re(localStorage,se,ve);}var Er=function(s){let a=R(se[s]);return C(()=>{let e=a();e!==se[s]&&(se[s]=e,yr());},{manualCleanup:!0}),C(()=>{this.triggerReset()&&a.set(ve[s]);}),a;},ct=s=>{let a=Er.bind({triggerReset:s}),e=y(me),o=a("rules"),c=Xe(()=>o()??e);return C(()=>{let g=c();o.set(g===e?void 0:g);}),{rules:{raw:c,customized:x(()=>!!o())},packlist:{answers:a("answers"),checkedItems:a("checkedItems"),collapsedCategories:a("collapsedCategories"),answersLocked:a("answersLocked")},config:{categorySorting:a("categorySorting"),trackWeight:a("trackWeight"),fadeOutDisabledRules:a("fadeOutDisabledRules"),highlightVariableStatus:a("highlightVariableStatus"),refactorVariables:a("refactorVariables"),theme:a("theme"),fontSize:a("fontSize"),accessibility:a("accessibility"),language:a("language"),exportReminder:a("exportReminder")},export:{lastHash:a("lastExportHash"),lastDate:a("lastExportDate")}};};var $e={rulesMode:"view",filterRulesQuery:void 0},ut=(s,a)=>{let e=y(rt),o=y(tt),c=R(void 0);return e.events.pipe(Je(g=>g instanceof et),Ge(()=>o.snapshot.queryParams[s]??$e[s])).subscribe(g=>{g!==""&&c.set(g);}),C(()=>{let g=c()||void 0;g===$e[s]&&(g=void 0),o.snapshot.queryParams[s]!==g&&e.navigate([],{queryParams:{[s]:g},queryParamsHandling:"merge",relativeTo:o,replaceUrl:!0});}),C(()=>{a()&&c.set($e[s]);}),c;},ft=s=>({router:{rulesMode:ut("rulesMode",s),filterRulesQuery:ut("filterRulesQuery",s)}});var we={clipboardItems:[],clipboardQuestions:[]},ne=te(sessionStorage,we),gt=(s,a)=>{let e=R(ne[s]);return C(()=>{let o=e();o!==ne[s]&&(ne[s]=o,Ar());},{manualCleanup:!0}),C(()=>{a()&&e.set(we[s]);}),e;},Ar=()=>{re(sessionStorage,ne,we);},pt=s=>({clipboard:{items:gt("clipboardItems",s),questions:gt("clipboardQuestions",s)}});var Rr=(s,a)=>{let e=R(s);return C(()=>{a()&&e.set(s);}),e;},ht=s=>({serviceWorker:{status:Rr("init",s)}});var dt=({config:{language:s}})=>{let a=R(window.scrollY);return window.addEventListener("scroll",()=>{a.set(window.scrollY);}),{browser:{scrollY:a,isMobile:x(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:x(()=>{let e=s();return e==="auto"?navigator.languages.map(g=>g.split("-")[0]).find(g=>lt.includes(g))??"en":e;})}};};var mt=({rules:{parsed:s},packlist:{answers:a}})=>{let e=y(de),o=x(()=>e.filterActive({rules:s(),model:a()})),c=x(()=>o().rules);return{rules:{categories:x(()=>e.extractCategories(s())),variables:x(()=>e.extractVariables(s()))},active:{rules:c,answers:x(()=>o().model),questions:x(()=>c().flatMap(g=>g.questions)),items:x(()=>c().flatMap(g=>g.items))}};};var vt=({rules:{raw:s,customized:a},export:{lastHash:e}})=>{let o=y(ee),c=x(()=>{try{return{parsedRules:o.parseRules(s()),ruleParserError:""};}catch(b){b instanceof Error?console.warn(b.message):console.error(b);let I=b instanceof Error?b.message:"An unknown error occurred";return{parsedRules:[],ruleParserError:I};}}),g=R(new Date().getTime());C(()=>{s(),g.set(new Date().getTime());});let v=x(()=>Cr(s()).toString(16));return{rules:{parsed:x(()=>c().parsedRules),parserError:x(()=>c().ruleParserError),lastAction:g,hash:v,exportNeeded:x(()=>a()&&v()!==e())}};},Cr=function(s,a=0){let e=3735928559^a,o=1103547991^a;for(let c=0,g;c<s.length;c++)g=s.charCodeAt(c),e=Math.imul(e^g,2654435761),o=Math.imul(o^g,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507),o^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&o)+(e>>>0);};function $t(s,a){return Object.entries(s).concat(Object.entries(a)).reduce((e,[o,c])=>(e[o]=P(P({},e[o]),c),e),{});}var ie=class s{state;triggerReset;constructor(a,e){this.state=a,this.triggerReset=e;}static builder(){return new s({},R(!1));}extend(a){let e=a(this.triggerReset);return new s($t(this.state,e),this.triggerReset);}derive(a){return new s($t(this.state,a(this.state)),this.triggerReset);}build(){return this.state;}reset(){this.triggerReset.set(Date.now());}};function Or(){return ie.builder().extend(ct).extend(ft).extend(pt).extend(ht).derive(dt).derive(vt).derive(mt);}var wt=new D("STATE_BUILDER",{providedIn:"root",factory:()=>Or()}),kr=new D("GLOBAL_STATE",{providedIn:"root",factory:()=>y(wt).build()}),Tr=new D("RESET_SWITCH",{providedIn:"root",factory:()=>{let s=y(wt);return()=>{s.reset();};}});export{ls as a,dr as b,pe as c,j as d,L as e,q as f,W as g,Dr as h,K as i,F as j,M as k,z as l,N as m,br as n,ee as o,de as p,kr as q,Tr as r};/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/