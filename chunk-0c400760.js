import{d as dt}from"./chunk-5ccfb57d.js";import{k as pt,l as ht,m as we,o as ye}from"./chunk-082ead22.js";import{$ as D,Ac as ft,Bc as gt,C as lt,Y as Se,ca as y,da as ct,r as ot,rc as ut,xc as S,ya as j,yc as B,zc as te}from"./chunk-9e62b5d5.js";import{a as ce,b as at}from"./chunk-cfe2c86e.js";function _r(s){return s.map(a=>a.toString()).map(a=>a+";").join(`

`);}function be(s,a,e=-1){if(!s)return"0g";let o=(e<0?s/1e3:(s/1e3).toFixed(e)).toString()+"kg",c=(s*1).toString()+"g";return a?a==="kg"?o:c:o.length<=c.length?o:c;}function zr(s,a){return be(s,void 0,1)+" / "+be(a,void 0,1);}var G=class{condition;questions;items;constructor(a,e=[],o=[]){this.condition=a,this.questions=e,this.items=o;}toString(){let a=[];if(!(this.condition instanceof ue)){let o=this.condition.toString();o&&a.push(o," ");}a.push(":-");let e=this.questions.map(o=>o.toString()).concat(this.items.map(o=>o.toString()));if(e.length===1&&a.length===1)a.push(" ",e[0]);else for(let o=0;o<e.length;o++){let c=e[o];o>0&&a.push(","),a.push(`
`,"   ",c);}return a.join("");}},H=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(a,e){this.question=a,this.variable=e;}toString(){return this.question+" $"+this.variable;}},X=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(a,e,o){this.category=a,this.name=e,this.weight=o;}toString(){let a=`[${this.category}] ${this.name}`.trim();return this.weight&&(a+=" "+be(this.weight)),a;}},F=class{variable;constructor(a){this.variable=a;}evaluate(a){return a[this.variable];}toString(){return this.variable;}},Fr=(()=>{class s extends F{static string="please_select";constructor(){super(s.string);}}return s;})(),ue=(()=>{class s extends F{static string="always";constructor(){super(s.string);}evaluate(){return!0;}}return s;})(),K=class{not;constructor(a){this.not=a;}evaluate(a){return!this.not.evaluate(a);}toString(){return"NOT "+this.not.toString();}},J=class{left;right;constructor(a,e){this.left=a,this.right=e;}evaluate(a){return this.left.evaluate(a)&&this.right.evaluate(a);}toString(){return this.left.toString()+" AND "+this.right.toString();}},Y=class{left;right;constructor(a,e){this.left=a,this.right=e;}evaluate(a){return this.left.evaluate(a)||this.right.evaluate(a);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function yr(s,a){let e=a.filter(c=>c instanceof H),o=a.filter(c=>c instanceof X);return new G(s??new ue(),e,o);}function mt(s){return s.length===1?s[0]:new J(s[0],mt(s.slice(1)));}function vt(s){return s.length===1?s[0]:new Y(s[0],vt(s.slice(1)));}function br(s,a){function e(){this.constructor=s;}e.prototype=a.prototype,s.prototype=new e();}function U(s,a,e,o){var c=Error.call(this,s);return Object.setPrototypeOf&&Object.setPrototypeOf(c,U.prototype),c.expected=a,c.found=e,c.location=o,c.name="SyntaxError",c;}br(U,Error);function Ne(s,a,e){return e=e||" ",s.length>a?s:(a-=s.length,e+=e.repeat(a),s+e.slice(0,a));}U.prototype.format=function(s){var a="Error: "+this.message;if(this.location){var e=null,o;for(o=0;o<s.length;o++)if(s[o].source===this.location.source){e=s[o].text.split(/\r\n|\n|\r/g);break;}var c=this.location.start,g=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(c):c,d=this.location.source+":"+g.line+":"+g.column;if(e){var w=this.location.end,C=Ne("",g.line.toString().length," "),v=e[c.line-1],m=c.line===w.line?w.column:v.length+1,b=m-c.column||1;a+=`
 --> `+d+`
`+C+` |
`+g.line+" | "+v+`
`+C+" | "+Ne("",c.column-1," ")+Ne("",b,"^");}else a+=`
 at `+d;}return a;};U.buildMessage=function(s,a){var e={literal:function(v){return'"'+c(v.text)+'"';},class:function(v){var m=v.parts.map(function(b){return Array.isArray(b)?g(b[0])+"-"+g(b[1]):g(b);});return"["+(v.inverted?"^":"")+m.join("")+"]";},any:function(){return"any character";},end:function(){return"end of input";},other:function(v){return v.description;}};function o(v){return v.charCodeAt(0).toString(16).toUpperCase();}function c(v){return v.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(m){return"\\x0"+o(m);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(m){return"\\x"+o(m);});}function g(v){return v.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(m){return"\\x0"+o(m);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(m){return"\\x"+o(m);});}function d(v){return e[v.type](v);}function w(v){var m=v.map(d),b,N;if(m.sort(),m.length>0){for(b=1,N=1;b<m.length;b++)m[b-1]!==m[b]&&(m[N]=m[b],N++);m.length=N;}switch(m.length){case 1:return m[0];case 2:return m[0]+" or "+m[1];default:return m.slice(0,-1).join(", ")+", or "+m[m.length-1];}}function C(v){return v?'"'+c(v)+'"':"end of input";}return"Expected "+w(s)+" but "+C(a)+" found.";};function _(s,a){a=a!==void 0?a:{};var e={},o=a.grammarSource,c={Rules:Be,Rule:Ie,Condition:Ke,Effects:Ze,Question:Ce,Item:We,VariableName:Oe,QuestionString:Xe,ItemNameAndWeight:tt,CategoryName:et},g=Be,d=";",w=":-",C="OR",v="AND",m="NOT",b=",",N="$",re="[",se="]",x="kg",q="g",z=".",pe=/^[^$,;#]/,Ae=/^[a-zA-Z]/,ne=/^[a-zA-Z0-9\-[\](){}_]/,he=/^[^\],;#[]/,$=/^[,;]/,E=/^[^ ,;#]/,O=/^[0-9]/,T=/^[ \t\n\r]/,k=W("rule end"),ie=L(";",!1),de=W("rule"),Lt=L(":-",!1),me=W("condition"),Dt=L("OR",!1),jt=L("AND",!1),ke=L("NOT",!1),_t=L(",",!1),_e=W("question"),zt=L("$",!1),ze=Q(["$",",",";","#"],!0,!1),Mt=W("variable name"),Vt=Q([["a","z"],["A","Z"]],!1,!1),Me=Q([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1),Ft=W("item"),Ut=W("category"),qt=L("[",!1),Ht=L("]",!1),Qt=W("category name"),Ve=Q(["]",",",";","#","["],!0,!1),Bt=W("item name"),Gt=W("word"),Kt=Q([",",";"],!1,!1),Fe=Q([" ",",",";","#"],!0,!1),Jt=W("weight"),Yt=L("kg",!1),Zt=L("g",!1),Xt=W("number"),ve=Q([["0","9"]],!1,!1),er=L(".",!1),tr=W("whitespace"),Ue=Q([" ","	",`
`,"\r"],!1,!1),rr=mr(),sr=function(t,r){return yr(t,r);},nr=function(t){return vt(t);},ir=function(t){return mt(t);},ar=function(t){return new K(t);},or=function(t){return new F(t);},lr=function(t,r){return new H(t.trim(),r.trim());},cr=function(t,r){let{name:i,weight:l}=r;return new X(t.trim(),i,l);},ur=function(t,r){return a.trackWeight;},fr=function(t,r){let i=t.trim();return i.length||qe("item name"),{name:i,weight:r};},gr=function(t){let r=t.trim();return r.length||qe("item name"),{name:r,weight:void 0};},pr=function(t){return t*1e3;},hr=function(){return parseFloat(dr());},n=a.peg$currPos|0,I=n,ee=[{line:1,column:1}],M=n,$e=a.peg$maxFailExpected||[],u=a.peg$silentFails|0,ae;if(a.startRule){if(!(a.startRule in c))throw new Error(`Can't start parsing from rule "`+a.startRule+'".');g=c[a.startRule];}function dr(){return s.substring(I,n);}function Nr(){return I;}function Lr(){return{source:o,start:I,end:n};}function Dr(){return oe(I,n);}function qe(t,r){throw r=r!==void 0?r:oe(I,n),Qe([W(t)],s.substring(I,n),r);}function jr(t,r){throw r=r!==void 0?r:oe(I,n),$r(t,r);}function L(t,r){return{type:"literal",text:t,ignoreCase:r};}function Q(t,r,i){return{type:"class",parts:t,inverted:r,ignoreCase:i};}function mr(){return{type:"any"};}function vr(){return{type:"end"};}function W(t){return{type:"other",description:t};}function He(t){var r=ee[t],i;if(r)return r;if(t>=ee.length)i=ee.length-1;else for(i=t;!ee[--i];);for(r=ee[i],r={line:r.line,column:r.column};i<t;)s.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return ee[t]=r,r;}function oe(t,r,i){var l=He(t),f=He(r),h={source:o,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:f.line,column:f.column}};return i&&o&&typeof o.offset=="function"&&(h.start=o.offset(h.start),h.end=o.offset(h.end)),h;}function p(t){n<M||(n>M&&(M=n,$e=[]),$e.push(t));}function $r(t,r){return new U(t,null,null,r);}function Qe(t,r,i){return new U(U.buildMessage(t,r),t,r,i);}function Be(){var t,r,i,l,f,h;for(t=n,r=R(),i=[],l=Ie();l!==e;)i.push(l),l=n,f=Ge(),f!==e?(f=Ie(),f===e?(n=l,l=e):l=f):l=f;return l=Ge(),l===e&&(l=null),f=R(),h=it(),h!==e?t=i:(n=t,t=e),t;}function Ge(){var t,r,i,l;return u++,t=n,r=R(),s.charCodeAt(n)===59?(i=d,n++):(i=e,u===0&&p(ie)),i!==e?(l=R(),r=[r,i,l],t=r):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(k)),t;}function Ie(){var t,r,i,l,f,h;return u++,t=n,r=Ke(),r===e&&(r=null),i=R(),s.substr(n,2)===w?(l=w,n+=2):(l=e,u===0&&p(Lt)),l!==e?(f=R(),h=Ze(),I=t,t=sr(r,h)):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(de)),t;}function Ke(){var t,r;return u++,t=Sr(),u--,t===e&&(r=e,u===0&&p(me)),t;}function Sr(){var t,r,i,l,f,h,A,le;for(u++,t=n,r=n,i=[],l=Je();l!==e;)i.push(l),l=n,f=n,h=R(),s.substr(n,2)===C?(A=C,n+=2):(A=e,u===0&&p(Dt)),A!==e?(le=R(),h=[h,A,le],f=h):(n=f,f=e),f!==e?(f=Je(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(I=t,r=nr(r)),t=r,u--,t===e&&(r=e,u===0&&p(me)),t;}function Je(){var t,r,i,l,f,h,A,le;for(u++,t=n,r=n,i=[],l=Te();l!==e;)i.push(l),l=n,f=n,h=R(),s.substr(n,3)===v?(A=v,n+=3):(A=e,u===0&&p(jt)),A!==e?(le=R(),h=[h,A,le],f=h):(n=f,f=e),f!==e?(f=Te(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(I=t,r=ir(r)),t=r,u--,t===e&&(r=e,u===0&&p(me)),t;}function Te(){var t,r,i,l,f,h;return u++,t=n,s.substr(n,3)===m?(r=m,n+=3):(r=e,u===0&&p(ke)),r!==e?(i=R(),s.substr(n,3)===m?(l=m,n+=3):(l=e,u===0&&p(ke)),l!==e?(f=R(),h=Te(),h!==e?t=h:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s.substr(n,3)===m?(r=m,n+=3):(r=e,u===0&&p(ke)),r!==e?(i=R(),l=Ye(),l!==e?(I=t,t=ar(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=Ye(),r!==e?t=r:(n=t,t=e))),u--,t===e&&(r=e,u===0&&p(me)),t;}function Ye(){var t,r;return t=n,r=Oe(),r!==e&&(I=t,r=or(r)),t=r,t;}function Ze(){var t,r,i,l,f,h,A;for(t=n,r=[],i=Ce(),i===e&&(i=We());i!==e;)r.push(i),i=n,l=n,f=R(),s.charCodeAt(n)===44?(h=b,n++):(h=e,u===0&&p(_t)),h!==e?(A=R(),f=[f,h,A],l=f):(n=l,l=e),l!==e?(l=Ce(),l===e&&(l=We()),l===e?(n=i,i=e):i=l):i=l;return t=r,t;}function Ce(){var t,r,i,l;return u++,t=n,r=Xe(),r!==e?(s.charCodeAt(n)===36?(i=N,n++):(i=e,u===0&&p(zt)),i!==e?(l=Oe(),l!==e?(I=t,t=lr(r,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(_e)),t;}function Xe(){var t,r,i;if(u++,t=n,r=[],i=s.charAt(n),pe.test(i)?n++:(i=e,u===0&&p(ze)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),pe.test(i)?n++:(i=e,u===0&&p(ze));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&p(_e)),t;}function Oe(){var t,r,i,l,f;if(u++,t=n,r=n,i=s.charAt(n),Ae.test(i)?n++:(i=e,u===0&&p(Vt)),i!==e){for(l=[],f=s.charAt(n),ne.test(f)?n++:(f=e,u===0&&p(Me));f!==e;)l.push(f),f=s.charAt(n),ne.test(f)?n++:(f=e,u===0&&p(Me));i=[i,l],r=i;}else n=r,r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&p(Mt)),t;}function We(){var t,r,i,l;return u++,t=n,r=wr(),r!==e?(i=R(),l=tt(),l!==e?(I=t,t=cr(r,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(Ft)),t;}function wr(){var t,r,i,l,f,h;return u++,t=n,s.charCodeAt(n)===91?(r=re,n++):(r=e,u===0&&p(qt)),r!==e?(i=R(),l=et(),l!==e?(f=R(),s.charCodeAt(n)===93?(h=se,n++):(h=e,u===0&&p(Ht)),h!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(Ut)),t;}function et(){var t,r,i;if(u++,t=n,r=[],i=s.charAt(n),he.test(i)?n++:(i=e,u===0&&p(Ve)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),he.test(i)?n++:(i=e,u===0&&p(Ve));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&p(Qt)),t;}function tt(){var t,r,i,l,f;for(u++,t=n,r=n,i=[],l=rt();l!==e;)i.push(l),l=n,f=R(),f=rt(),f===e?(n=l,l=e):l=f;if(r=s.substring(r,n),i=R(),l=st(),l!==e?(I=n,f=ur(r,l),f?f=void 0:f=e,f!==e?(I=t,t=fr(r,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,r=n,i=[],l=Pe();l!==e;)i.push(l),l=n,f=R(),f=Pe(),f===e?(n=l,l=e):l=f;r=s.substring(r,n),I=t,r=gr(r),t=r;}return u--,t===e&&(r=e,u===0&&p(Bt)),t;}function rt(){var t,r,i,l,f,h;return u++,t=n,r=n,u++,i=n,l=st(),l!==e?(f=R(),h=it(),h===e&&(h=s.charAt(n),$.test(h)?n++:(h=e,u===0&&p(Kt))),h!==e?(l=[l,f,h],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?r=void 0:(n=r,r=e),r!==e?(i=Pe(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&p(Gt)),t;}function Pe(){var t,r,i;if(t=n,r=[],i=s.charAt(n),E.test(i)?n++:(i=e,u===0&&p(Fe)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),E.test(i)?n++:(i=e,u===0&&p(Fe));else r=e;return r!==e?t=s.substring(t,n):t=r,t;}function st(){var t,r,i;return u++,t=n,r=nt(),r!==e?(s.substr(n,2)===x?(i=x,n+=2):(i=e,u===0&&p(Yt)),i!==e?(I=t,t=pr(r)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=nt(),r!==e?(s.charCodeAt(n)===103?(i=q,n++):(i=e,u===0&&p(Zt)),i===e&&(i=null),t=r):(n=t,t=e)),u--,t===e&&(r=e,u===0&&p(Jt)),t;}function nt(){var t,r,i,l,f,h,A;if(u++,t=n,r=[],i=s.charAt(n),O.test(i)?n++:(i=e,u===0&&p(ve)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),O.test(i)?n++:(i=e,u===0&&p(ve));else r=e;if(r!==e){if(i=n,s.charCodeAt(n)===46?(l=z,n++):(l=e,u===0&&p(er)),l!==e){if(f=n,h=[],A=s.charAt(n),O.test(A)?n++:(A=e,u===0&&p(ve)),A!==e)for(;A!==e;)h.push(A),A=s.charAt(n),O.test(A)?n++:(A=e,u===0&&p(ve));else h=e;h!==e?f=s.substring(f,n):f=h,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),I=t,t=hr();}else n=t,t=e;return u--,t===e&&(r=e,u===0&&p(Xt)),t;}function R(){var t,r;for(u++,t=[],r=s.charAt(n),T.test(r)?n++:(r=e,u===0&&p(Ue));r!==e;)t.push(r),r=s.charAt(n),T.test(r)?n++:(r=e,u===0&&p(Ue));return u--,r=e,u===0&&p(tr),t;}function it(){var t,r;return t=n,u++,s.length>n?(r=s.charAt(n),n++):(r=e,u===0&&p(rr)),u--,r===e?t=void 0:(n=t,t=e),t;}if(ae=g(),a.peg$library)return{peg$result:ae,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:$e,peg$maxFailPos:M};if(ae!==e&&n===s.length)return ae;throw ae!==e&&n<s.length&&p(vr()),Qe($e,M<s.length?s.charAt(M):null,M<s.length?oe(M,M+1):oe(M,M));}var xr={isTrackWeight:()=>!1},Rr=new D("PARSER_CONFIG_PROVIDER"),Ee=(()=>{class s{config=y(Rr,{optional:!0})??xr;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,o={}){return{startRule:e,trackWeight:o.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return _(e,this.makeOptions("Condition"));}parseQuestion(e){return _(e,this.makeOptions("Question"));}parseItem(e){return _(e,this.makeOptions("Item"));}parseEffects(e){return _(e,this.makeOptions("Effects"));}parseRule(e){return _(e,this.makeOptions("Rule"));}parseRules(e){let o=e.split(/\r?\n/g).map(c=>c.replace(/#.*/,"")).join(`
`);try{return _(o,this.makeOptions("Rules"));}catch(c){let g=[];if(g.push("Fehler beim Parsen der Regeln"),c instanceof U){let d=c.location.start.line.toString(),w=c.location.start.column.toString();g.push(" at line ",d," column ",w),g.push(":",`
`,c.message);}else console.error(c);throw new Error(g.join(""));}}validateVariableName(e){_(e,this.makeOptions("VariableName"));}validateQuestionString(e){_(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){_(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){_(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return _(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(o){return new(o||s)();};static ɵprov=Se({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();var Le=(()=>{class s{parser=y(Ee);extractVariables(e){return e.reduce((o,c)=>[...o,...c.questions.map(g=>g.variable)],[]);}extractCategories(e){let o=new Set();for(let c of e)for(let g of c.items)o.add(g.category);return Array.from(o);}renameVariable(e,o,c){if(c instanceof Array)return c.map(d=>this.renameVariable(e,o,d));if(c instanceof H)return c.variable===e?new H(c.question,o):c;if(c instanceof G)return new G(this.renameVariable(e,o,c.condition),c.questions.map(d=>this.renameVariable(e,o,d)),c.items);if(c instanceof F)return c.variable===e?new F(o):c;if(c instanceof K)return new K(this.renameVariable(e,o,c.not));if(c instanceof J)return new J(this.renameVariable(e,o,c.left),this.renameVariable(e,o,c.right));if(c instanceof Y)return new Y(this.renameVariable(e,o,c.left),this.renameVariable(e,o,c.right));let g=c;throw new Error("Unknown item type: "+g);}filterActive(e){let o=e.rules.filter(g=>g.condition.evaluate(e.model)),c=this.extractVariables(o).reduce((g,d)=>at(ce({},g),{[d]:e.model[d]}),{[ue.string]:!0});return o.length===e.rules.length?{model:c,rules:o}:this.filterActive({model:c,rules:o});}contains(e,o){let c=o.toLowerCase();if(e instanceof G)return this.contains(e.condition,o)||e.questions.some(d=>this.contains(d,o))||e.items.some(d=>this.contains(d,o));if(e instanceof H)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof X)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof F)return e.variable.toLowerCase().includes(c);if(e instanceof K)return this.contains(e.not,o);if(e instanceof J)return this.contains(e.left,o)||this.contains(e.right,o);if(e instanceof Y)return this.contains(e.left,o)||this.contains(e.right,o);let g=e;throw new Error("Unknown item type: "+g);}countItemsAndWeights(e){return e.reduce((o,c)=>c.items.reduce((g,d)=>{let w;return this.parser.isTrackWeight()?w=d.weight?1:0:w=this.parser.forceParseWeight(d.name)?1:0,{items:g.items+1,weights:g.weights+w};},o),{items:0,weights:0});}static ɵfac=function(o){return new(o||s)();};static ɵprov=Se({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();function Ar(s,a){return Object.entries(s).concat(Object.entries(a)).reduce((e,[o,c])=>(e[o]=ce(ce({},e[o]),c),e),{});}var fe=new D("RESET_SIGNAL",{providedIn:"root",factory:()=>j(!1)}),xe=class s{state;triggerReset=y(fe);constructor(a){this.state=a;}static builder(){return new s({});}extend(a){return new s(Ar(this.state,a(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(a=>setTimeout(a,0));}};function St(s,a){if(typeof s!=typeof a)return!1;if(s&&a&&typeof s=="object"){let e=Object.keys(s),o=Object.keys(a);return e.length===o.length&&e.every(c=>St(s[c],a[c]));}return s===a;}function $t(s,a){let e=this.getItem("state")??"{}";return JSON.parse(e)[s]??a;}function kr(s,a,e){let o=this.getItem("state")??"{}",c=JSON.parse(o);St(a,e)?delete c[s]:a===null?c[s]=void 0:c[s]=a,this.setItem("state",JSON.stringify(c));}function wt(s,a,e){let o=y(fe),c=j($t.call(s,a,e));return B(()=>{let g=c();g!==$t.call(s,a,e)&&kr.call(s,a,g,e);},{manualCleanup:!0}),B(()=>{o()&&c.set(e);}),c;}var V=(s,a)=>wt(localStorage,s,a),Re=(s,a)=>wt(sessionStorage,s,a);var P=V,yt=["en","de"],bt=()=>({config:{categorySorting:P("categorySorting","alphabetically"),trackWeight:P("trackWeight",!1),skipItems:P("skipItems",!1),fadeOutDisabledRules:P("fadeOutDisabledRules",!1),highlightVariableStatus:P("highlightVariableStatus",!1),refactorVariables:P("refactorVariables",!0),confirmRuleDeletion:P("confirmRuleDeletion",!0),theme:P("theme","system"),fontSize:P("fontSize","normal"),accessibility:P("accessibility","accessible"),animations:P("animations",!0),language:P("language","auto"),exportReminder:P("exportReminder",!1)}});var Et=({config:{language:s}})=>{let a=j(window.scrollY);return window.addEventListener("scroll",()=>{a.set(window.scrollY);}),{browser:{scrollY:a,isMobile:S(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:S(()=>{let e=s();return e==="auto"?navigator.languages.map(g=>g.split("-")[0]).find(g=>yt.includes(g))??"en":e;})}};};var xt=(s,a)=>Re(s,a),Rt=()=>({clipboard:{items:xt("clipboardItems",[]),questions:xt("clipboardQuestions",[])}});var ge=V;function Z(s){return`${s.category}-${s.name}`;}var At=({rules:{parsed:s},config:{categorySorting:a,skipItems:e}})=>{let o=ge("answers",{}),c=ge("checkedItems",[]),g=ge("skippedItems",[]),d=ge("collapsedCategories",[]),w=ge("answersLocked",!1),C=Re("statsVisible",void 0),v=y(Le),m=S(()=>v.filterActive({rules:s(),model:o()})),b=S(()=>m().rules),N=S(()=>b().flatMap($=>$.items)),re=S(()=>N().filter($=>c().includes(Z($)))),se=$=>{c().includes(Z($))?c.update(E=>E.filter(O=>O!==Z($))):c.update(E=>[...E,Z($)]);},x=S(()=>N().filter($=>g().includes(Z($)))),q=$=>{e()&&(g().includes(Z($))?g.update(E=>E.filter(O=>O!==Z($))):g.update(E=>[...E,Z($)]));},z=$=>{d().includes($)?d.update(E=>E.filter(O=>O!==$)):d.update(E=>[...E,$]);};function pe($){return d().includes($);}let Ae=S(()=>a()==="definition"?()=>0:(E,O)=>E.localeCompare(O)),ne=S(()=>{function $(T){return{name:T.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:pe(T.category)};}let E=N().reduce((T,k)=>{T[k.category]||(T[k.category]=$(k));let ie=e()&&x().includes(k),de=!ie&&re().includes(k);return T[k.category].items.push({category:k.category,name:k.name,weight:k.weight,checked:de,skipped:ie}),de&&(T[k.category].checkedItems++,T[k.category].checkedWeight+=k.weight??0),ie||(T[k.category].totalItems++,T[k.category].totalWeight+=k.weight??0),T;},{}),O=Ae();return Object.entries(E).map(T=>T[1]).toSorted((T,k)=>O(T.name,k.name));}),he=S(()=>Object.entries(ne()).reduce(($,[,E])=>($.totalItems+=E.totalItems,$.checkedItems+=E.checkedItems,$.totalWeight+=E.totalWeight,$.checkedWeight+=E.checkedWeight,$),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return{rules:{categories:S(()=>v.extractCategories(s())),variables:S(()=>v.extractVariables(s()))},active:{rules:b,answers:S(()=>m().model),questions:S(()=>b().flatMap($=>$.questions))},packlist:{answers:o,model:ne,stats:he,toggleCheckedItem:se,toggleSkippedItem:q,toggleCategoryCollapse:z,answersLocked:w,statsVisible:C,reset:()=>{o.set({}),c.set([]),g.set([]),d.set([]),w.set(!1),C.set(void 0);}}};};var De=(s,a)=>{let e=y(ye),o=y(we),c=y(fe),g=j(void 0);return e.events.pipe(lt(d=>d instanceof ht),ot(()=>o.snapshot.queryParams[s]??a)).subscribe(d=>{d!==""&&g.set(d);}),B(()=>{let d=g()||void 0;d===a&&(d=void 0),o.snapshot.queryParams[s]!==d&&e.navigate([],{queryParams:{[s]:d},queryParamsHandling:"merge",relativeTo:o,replaceUrl:!0});}),B(()=>{c()&&g.set(a);}),g;};var Ir={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},kt=()=>{let s=y(ye),a=y(we),e=De("rulesMode","view");return{router:{rulesMode:e,filterRulesQuery:De("filterRulesQuery",void 0),fragment:pt(a.fragment),go:o=>{Ir[o].call({router:s,rulesMode:e});}}};};var It=({rules:{raw:s,customized:a,mode:e}})=>{let o=y(Ee),c=S(()=>{try{return{parsedRules:o.parseRules(s()),ruleParserError:""};}catch(m){console.error(m);let b=m instanceof Error?m.message:"An unknown error occurred";return{parsedRules:[],ruleParserError:b};}}),g=j(new Date().getTime());B(()=>{s(),g.set(new Date().getTime());});let d=S(()=>Tr(s()).toString(16)),w=V("lastExportHash",""),C=V("lastExportDate",0),v=()=>{w.set(d()),C.set(new Date().getTime());};return{rules:{parsed:S(()=>c().parsedRules),parserError:S(()=>c().ruleParserError),lastAction:g.asReadonly(),hash:d,exportNeeded:S(()=>e()==="local"&&a()&&d()!==w()),markAsCurrent:v},export:{lastDate:C.asReadonly()}};},Tr=function(s,a=0){let e=3735928559^a,o=1103547991^a;for(let c=0,g;c<s.length;c++)g=s.charCodeAt(c),e=Math.imul(e^g,2654435761),o=Math.imul(o^g,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507),o^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&o)+(e>>>0);};var Tt=`:-
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
`;var Ct=`:-
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
`;var je=new D("RULES_TEMPLATE");function Cr(s){return s.startsWith("de")?Tt:Ct;}function qs(){return ct([{provide:je,useFactory:Cr,deps:[ut]}]);}var Ot=new D("CAPACITOR_HTTP_REQUEST_MODE"),Wt=()=>{let s=V("rulesMode","local"),a=y(je),e=V("rules",void 0),o=V("remoteHistory",[]),c=function(x){o.update(q=>q.filter(z=>z!==x));},g=S(()=>s()==="remote"?o()[0]:void 0),d=y(Ot,{optional:!0})??"cors",w=gt({request:()=>g(),loader:({request:x})=>x?dt.get({url:x,webFetchExtra:{mode:d}}):Promise.resolve(void 0)}),C=function(){w.reload();},v=ft(()=>{if(s()!=="remote")return{state:"idle",i18n:"leerlauf"};let x=w.status(),q=w.value()?.data,z=w.value()?.status;return x===te.Idle?{state:"idle",i18n:"leerlauf"}:x===te.Loading||x===te.Reloading?{state:"loading",i18n:"ladend"}:x===te.Error?{state:"error",i18n:"Fehler"}:x===te.Resolved?z&&z>=200&&z<300?q?{state:"loaded",i18n:"geladen"}:{state:"no content",i18n:"kein Inhalt gefunden"}:{state:"error",i18n:"Fehler"}:{state:"unknown",i18n:"unbekannt"};}),m=function(x){if(!x.startsWith("http")){v.set({state:"invalid url",i18n:"ung\xFCltige URL"});return;}o.update(q=>[x,...q.filter(z=>z!==x)]);},b=S(()=>w.value()?.data||void 0),N=S(()=>s()==="local"?e()??a:b()??""),re=function(x){e.set(x===a?void 0:x);},se=S(()=>!!e());return{rules:{mode:s,raw:N,customized:se},localRules:{updateRules:re},remoteRules:{load:m,status:v.asReadonly(),reload:C,history:o.asReadonly(),removeFromHistory:c}};};var Pt=()=>({serviceWorker:{status:j("init")}});function Or(){return xe.builder().extend(kt).extend(Rt).extend(Pt).extend(bt).extend(Et).extend(Wt).extend(It).extend(At);}var Nt=new D("STATE_BUILDER",{providedIn:"root",factory:()=>Or()}),Wr=new D("GLOBAL_STATE",{providedIn:"root",factory:()=>y(Nt).build()}),Pr=new D("RESET_SWITCH",{providedIn:"root",factory:()=>{let s=y(Nt);return async()=>{await s.reset();};}});export{_r as a,be as b,zr as c,G as d,H as e,X as f,F as g,Fr as h,ue as i,K as j,J as k,Y as l,U as m,Rr as n,Ee as o,Le as p,qs as q,Ot as r,Wr as s,Pr as t};/**i18n:dceda2222b78a7d36ce594824fbf7b515d927444d0f7723e201921c9765a2e5b*/