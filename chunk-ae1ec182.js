import{d as dt}from"./chunk-c0685382.js";import{k as pt,l as ht,m as be,o as Ee}from"./chunk-248f8e5a.js";import{$ as j,Ac as ye,C as ct,Y as we,ca as S,da as ut,qc as ft,r as lt,wc as y,xc as B,ya as _,yc as ge,zc as gt}from"./chunk-8a02f8fd.js";import{a as fe,b as ot}from"./chunk-1724ecac.js";function zr(n){return n.map(a=>a.toString()).map(a=>a+";").join(`

`);}function xe(n,a,e=-1){if(!n)return"0g";let o=(e<0?n/1e3:(n/1e3).toFixed(e)).toString()+"kg",l=(n*1).toString()+"g";return a?a==="kg"?o:l:o.length<=l.length?o:l;}function Fr(n,a){return xe(n,void 0,1)+" / "+xe(a,void 0,1);}var G=class{condition;questions;items;constructor(a,e=[],o=[]){this.condition=a,this.questions=e,this.items=o;}toString(){let a=[];if(!(this.condition instanceof pe)){let o=this.condition.toString();o&&a.push(o," ");}a.push(":-");let e=this.questions.map(o=>o.toString()).concat(this.items.map(o=>o.toString()));if(e.length===1&&a.length===1)a.push(" ",e[0]);else for(let o=0;o<e.length;o++){let l=e[o];o>0&&a.push(","),a.push(`
`,"   ",l);}return a.join("");}},Q=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(a,e){this.question=a,this.variable=e;}toString(){return this.question+" $"+this.variable;}},ee=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(a,e,o){this.category=a,this.name=e,this.weight=o;}toString(){let a=`[${this.category}] ${this.name}`.trim();return this.weight&&(a+=" "+xe(this.weight)),a;}},V=class{variable;constructor(a){this.variable=a;}evaluate(a){return a[this.variable];}toString(){return this.variable;}},Ur=(()=>{class n extends V{static string="please_select";constructor(){super(n.string);}}return n;})(),pe=(()=>{class n extends V{static string="always";constructor(){super(n.string);}evaluate(){return!0;}}return n;})(),K=class{not;constructor(a){this.not=a;}evaluate(a){return!this.not.evaluate(a);}toString(){return"NOT "+this.not.toString();}},J=class{left;right;constructor(a,e){this.left=a,this.right=e;}evaluate(a){return this.left.evaluate(a)&&this.right.evaluate(a);}toString(){return this.left.toString()+" AND "+this.right.toString();}},Y=class{left;right;constructor(a,e){this.left=a,this.right=e;}evaluate(a){return this.left.evaluate(a)||this.right.evaluate(a);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function yr(n,a){let e=a.filter(l=>l instanceof Q),o=a.filter(l=>l instanceof ee);return new G(n??new pe(),e,o);}function mt(n){return n.length===1?n[0]:new J(n[0],mt(n.slice(1)));}function vt(n){return n.length===1?n[0]:new Y(n[0],vt(n.slice(1)));}function br(n,a){function e(){this.constructor=n;}e.prototype=a.prototype,n.prototype=new e();}function U(n,a,e,o){var l=Error.call(this,n);return Object.setPrototypeOf&&Object.setPrototypeOf(l,U.prototype),l.expected=a,l.found=e,l.location=o,l.name="SyntaxError",l;}br(U,Error);function Ne(n,a,e){return e=e||" ",n.length>a?n:(a-=n.length,e+=e.repeat(a),n+e.slice(0,a));}U.prototype.format=function(n){var a="Error: "+this.message;if(this.location){var e=null,o;for(o=0;o<n.length;o++)if(n[o].source===this.location.source){e=n[o].text.split(/\r\n|\n|\r/g);break;}var l=this.location.start,g=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(l):l,d=this.location.source+":"+g.line+":"+g.column;if(e){var R=this.location.end,C=Ne("",g.line.toString().length," "),$=e[l.line-1],m=l.line===R.line?R.column:$.length+1,w=m-l.column||1;a+=`
 --> `+d+`
`+C+` |
`+g.line+" | "+$+`
`+C+" | "+Ne("",l.column-1," ")+Ne("",w,"^");}else a+=`
 at `+d;}return a;};U.buildMessage=function(n,a){var e={literal:function($){return'"'+l($.text)+'"';},class:function($){var m=$.parts.map(function(w){return Array.isArray(w)?g(w[0])+"-"+g(w[1]):g(w);});return"["+($.inverted?"^":"")+m.join("")+"]";},any:function(){return"any character";},end:function(){return"end of input";},other:function($){return $.description;}};function o($){return $.charCodeAt(0).toString(16).toUpperCase();}function l($){return $.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(m){return"\\x0"+o(m);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(m){return"\\x"+o(m);});}function g($){return $.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(m){return"\\x0"+o(m);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(m){return"\\x"+o(m);});}function d($){return e[$.type]($);}function R($){var m=$.map(d),w,N;if(m.sort(),m.length>0){for(w=1,N=1;w<m.length;w++)m[w-1]!==m[w]&&(m[N]=m[w],N++);m.length=N;}switch(m.length){case 1:return m[0];case 2:return m[0]+" or "+m[1];default:return m.slice(0,-1).join(", ")+", or "+m[m.length-1];}}function C($){return $?'"'+l($)+'"':"end of input";}return"Expected "+R(n)+" but "+C(a)+" found.";};function z(n,a){a=a!==void 0?a:{};var e={},o=a.grammarSource,l={Rules:Ge,Rule:Te,Condition:Je,Effects:Xe,Question:Oe,Item:Pe,VariableName:We,QuestionString:et,ItemNameAndWeight:rt,CategoryName:tt},g=Ge,d=";",R=":-",C="OR",$="AND",m="NOT",w=",",N="$",te="[",ne="]",X="kg",ie="g",ae=".",re=/^[^$,;#]/,A=/^[a-zA-Z]/,L=/^[a-zA-Z0-9\-[\](){}_]/,M=/^[^\],;#[]/,v=/^[,;]/,b=/^[^ ,;#]/,O=/^[0-9]/,T=/^[ \t\n\r]/,k=W("rule end"),oe=D(";",!1),me=W("rule"),Nt=D(":-",!1),ve=W("condition"),Dt=D("OR",!1),jt=D("AND",!1),Ie=D("NOT",!1),_t=D(",",!1),ze=W("question"),zt=D("$",!1),Fe=q(["$",",",";","#"],!0,!1),Ft=W("variable name"),Mt=q([["a","z"],["A","Z"]],!1,!1),Me=q([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1),Vt=W("item"),Ut=W("category"),Ht=D("[",!1),Qt=D("]",!1),qt=W("category name"),Ve=q(["]",",",";","#","["],!0,!1),Bt=W("item name"),Gt=W("word"),Kt=q([",",";"],!1,!1),Ue=q([" ",",",";","#"],!0,!1),Jt=W("weight"),Yt=D("kg",!1),Zt=D("g",!1),Xt=W("number"),$e=q([["0","9"]],!1,!1),er=D(".",!1),tr=W("whitespace"),He=q([" ","	",`
`,"\r"],!1,!1),rr=mr(),sr=function(t,r){return yr(t,r);},nr=function(t){return vt(t);},ir=function(t){return mt(t);},ar=function(t){return new K(t);},or=function(t){return new V(t);},lr=function(t,r){return new Q(t.trim(),r.trim());},cr=function(t,r){let{name:i,weight:c}=r;return new ee(t.trim(),i,c);},ur=function(t,r){return a.trackWeight;},fr=function(t,r){let i=t.trim();return i.length||Qe("item name"),{name:i,weight:r};},gr=function(t){let r=t.trim();return r.length||Qe("item name"),{name:r,weight:void 0};},pr=function(t){return t*1e3;},hr=function(){return parseFloat(dr());},s=a.peg$currPos|0,I=s,se=[{line:1,column:1}],F=s,Se=a.peg$maxFailExpected||[],u=a.peg$silentFails|0,le;if(a.startRule){if(!(a.startRule in l))throw new Error(`Can't start parsing from rule "`+a.startRule+'".');g=l[a.startRule];}function dr(){return n.substring(I,s);}function Nr(){return I;}function Dr(){return{source:o,start:I,end:s};}function jr(){return ce(I,s);}function Qe(t,r){throw r=r!==void 0?r:ce(I,s),Be([W(t)],n.substring(I,s),r);}function _r(t,r){throw r=r!==void 0?r:ce(I,s),$r(t,r);}function D(t,r){return{type:"literal",text:t,ignoreCase:r};}function q(t,r,i){return{type:"class",parts:t,inverted:r,ignoreCase:i};}function mr(){return{type:"any"};}function vr(){return{type:"end"};}function W(t){return{type:"other",description:t};}function qe(t){var r=se[t],i;if(r)return r;if(t>=se.length)i=se.length-1;else for(i=t;!se[--i];);for(r=se[i],r={line:r.line,column:r.column};i<t;)n.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return se[t]=r,r;}function ce(t,r,i){var c=qe(t),f=qe(r),h={source:o,start:{offset:t,line:c.line,column:c.column},end:{offset:r,line:f.line,column:f.column}};return i&&o&&typeof o.offset=="function"&&(h.start=o.offset(h.start),h.end=o.offset(h.end)),h;}function p(t){s<F||(s>F&&(F=s,Se=[]),Se.push(t));}function $r(t,r){return new U(t,null,null,r);}function Be(t,r,i){return new U(U.buildMessage(t,r),t,r,i);}function Ge(){var t,r,i,c,f,h;for(t=s,r=E(),i=[],c=Te();c!==e;)i.push(c),c=s,f=Ke(),f!==e?(f=Te(),f===e?(s=c,c=e):c=f):c=f;return c=Ke(),c===e&&(c=null),f=E(),h=at(),h!==e?t=i:(s=t,t=e),t;}function Ke(){var t,r,i,c;return u++,t=s,r=E(),n.charCodeAt(s)===59?(i=d,s++):(i=e,u===0&&p(oe)),i!==e?(c=E(),r=[r,i,c],t=r):(s=t,t=e),u--,t===e&&(r=e,u===0&&p(k)),t;}function Te(){var t,r,i,c,f,h;return u++,t=s,r=Je(),r===e&&(r=null),i=E(),n.substr(s,2)===R?(c=R,s+=2):(c=e,u===0&&p(Nt)),c!==e?(f=E(),h=Xe(),I=t,t=sr(r,h)):(s=t,t=e),u--,t===e&&(r=e,u===0&&p(me)),t;}function Je(){var t,r;return u++,t=Sr(),u--,t===e&&(r=e,u===0&&p(ve)),t;}function Sr(){var t,r,i,c,f,h,x,ue;for(u++,t=s,r=s,i=[],c=Ye();c!==e;)i.push(c),c=s,f=s,h=E(),n.substr(s,2)===C?(x=C,s+=2):(x=e,u===0&&p(Dt)),x!==e?(ue=E(),h=[h,x,ue],f=h):(s=f,f=e),f!==e?(f=Ye(),f===e?(s=c,c=e):c=f):c=f;return i.length<1?(s=r,r=e):r=i,r!==e&&(I=t,r=nr(r)),t=r,u--,t===e&&(r=e,u===0&&p(ve)),t;}function Ye(){var t,r,i,c,f,h,x,ue;for(u++,t=s,r=s,i=[],c=Ce();c!==e;)i.push(c),c=s,f=s,h=E(),n.substr(s,3)===$?(x=$,s+=3):(x=e,u===0&&p(jt)),x!==e?(ue=E(),h=[h,x,ue],f=h):(s=f,f=e),f!==e?(f=Ce(),f===e?(s=c,c=e):c=f):c=f;return i.length<1?(s=r,r=e):r=i,r!==e&&(I=t,r=ir(r)),t=r,u--,t===e&&(r=e,u===0&&p(ve)),t;}function Ce(){var t,r,i,c,f,h;return u++,t=s,n.substr(s,3)===m?(r=m,s+=3):(r=e,u===0&&p(Ie)),r!==e?(i=E(),n.substr(s,3)===m?(c=m,s+=3):(c=e,u===0&&p(Ie)),c!==e?(f=E(),h=Ce(),h!==e?t=h:(s=t,t=e)):(s=t,t=e)):(s=t,t=e),t===e&&(t=s,n.substr(s,3)===m?(r=m,s+=3):(r=e,u===0&&p(Ie)),r!==e?(i=E(),c=Ze(),c!==e?(I=t,t=ar(c)):(s=t,t=e)):(s=t,t=e),t===e&&(t=s,r=Ze(),r!==e?t=r:(s=t,t=e))),u--,t===e&&(r=e,u===0&&p(ve)),t;}function Ze(){var t,r;return t=s,r=We(),r!==e&&(I=t,r=or(r)),t=r,t;}function Xe(){var t,r,i,c,f,h,x;for(t=s,r=[],i=Oe(),i===e&&(i=Pe());i!==e;)r.push(i),i=s,c=s,f=E(),n.charCodeAt(s)===44?(h=w,s++):(h=e,u===0&&p(_t)),h!==e?(x=E(),f=[f,h,x],c=f):(s=c,c=e),c!==e?(c=Oe(),c===e&&(c=Pe()),c===e?(s=i,i=e):i=c):i=c;return t=r,t;}function Oe(){var t,r,i,c;return u++,t=s,r=et(),r!==e?(n.charCodeAt(s)===36?(i=N,s++):(i=e,u===0&&p(zt)),i!==e?(c=We(),c!==e?(I=t,t=lr(r,c)):(s=t,t=e)):(s=t,t=e)):(s=t,t=e),u--,t===e&&(r=e,u===0&&p(ze)),t;}function et(){var t,r,i;if(u++,t=s,r=[],i=n.charAt(s),re.test(i)?s++:(i=e,u===0&&p(Fe)),i!==e)for(;i!==e;)r.push(i),i=n.charAt(s),re.test(i)?s++:(i=e,u===0&&p(Fe));else r=e;return r!==e?t=n.substring(t,s):t=r,u--,t===e&&(r=e,u===0&&p(ze)),t;}function We(){var t,r,i,c,f;if(u++,t=s,r=s,i=n.charAt(s),A.test(i)?s++:(i=e,u===0&&p(Mt)),i!==e){for(c=[],f=n.charAt(s),L.test(f)?s++:(f=e,u===0&&p(Me));f!==e;)c.push(f),f=n.charAt(s),L.test(f)?s++:(f=e,u===0&&p(Me));i=[i,c],r=i;}else s=r,r=e;return r!==e?t=n.substring(t,s):t=r,u--,t===e&&(r=e,u===0&&p(Ft)),t;}function Pe(){var t,r,i,c;return u++,t=s,r=wr(),r!==e?(i=E(),c=rt(),c!==e?(I=t,t=cr(r,c)):(s=t,t=e)):(s=t,t=e),u--,t===e&&(r=e,u===0&&p(Vt)),t;}function wr(){var t,r,i,c,f,h;return u++,t=s,n.charCodeAt(s)===91?(r=te,s++):(r=e,u===0&&p(Ht)),r!==e?(i=E(),c=tt(),c!==e?(f=E(),n.charCodeAt(s)===93?(h=ne,s++):(h=e,u===0&&p(Qt)),h!==e?t=c:(s=t,t=e)):(s=t,t=e)):(s=t,t=e),u--,t===e&&(r=e,u===0&&p(Ut)),t;}function tt(){var t,r,i;if(u++,t=s,r=[],i=n.charAt(s),M.test(i)?s++:(i=e,u===0&&p(Ve)),i!==e)for(;i!==e;)r.push(i),i=n.charAt(s),M.test(i)?s++:(i=e,u===0&&p(Ve));else r=e;return r!==e?t=n.substring(t,s):t=r,u--,t===e&&(r=e,u===0&&p(qt)),t;}function rt(){var t,r,i,c,f;for(u++,t=s,r=s,i=[],c=st();c!==e;)i.push(c),c=s,f=E(),f=st(),f===e?(s=c,c=e):c=f;if(r=n.substring(r,s),i=E(),c=nt(),c!==e?(I=s,f=ur(r,c),f?f=void 0:f=e,f!==e?(I=t,t=fr(r,c)):(s=t,t=e)):(s=t,t=e),t===e){for(t=s,r=s,i=[],c=Le();c!==e;)i.push(c),c=s,f=E(),f=Le(),f===e?(s=c,c=e):c=f;r=n.substring(r,s),I=t,r=gr(r),t=r;}return u--,t===e&&(r=e,u===0&&p(Bt)),t;}function st(){var t,r,i,c,f,h;return u++,t=s,r=s,u++,i=s,c=nt(),c!==e?(f=E(),h=at(),h===e&&(h=n.charAt(s),v.test(h)?s++:(h=e,u===0&&p(Kt))),h!==e?(c=[c,f,h],i=c):(s=i,i=e)):(s=i,i=e),u--,i===e?r=void 0:(s=r,r=e),r!==e?(i=Le(),i!==e?t=i:(s=t,t=e)):(s=t,t=e),u--,t===e&&(r=e,u===0&&p(Gt)),t;}function Le(){var t,r,i;if(t=s,r=[],i=n.charAt(s),b.test(i)?s++:(i=e,u===0&&p(Ue)),i!==e)for(;i!==e;)r.push(i),i=n.charAt(s),b.test(i)?s++:(i=e,u===0&&p(Ue));else r=e;return r!==e?t=n.substring(t,s):t=r,t;}function nt(){var t,r,i;return u++,t=s,r=it(),r!==e?(n.substr(s,2)===X?(i=X,s+=2):(i=e,u===0&&p(Yt)),i!==e?(I=t,t=pr(r)):(s=t,t=e)):(s=t,t=e),t===e&&(t=s,r=it(),r!==e?(n.charCodeAt(s)===103?(i=ie,s++):(i=e,u===0&&p(Zt)),i===e&&(i=null),t=r):(s=t,t=e)),u--,t===e&&(r=e,u===0&&p(Jt)),t;}function it(){var t,r,i,c,f,h,x;if(u++,t=s,r=[],i=n.charAt(s),O.test(i)?s++:(i=e,u===0&&p($e)),i!==e)for(;i!==e;)r.push(i),i=n.charAt(s),O.test(i)?s++:(i=e,u===0&&p($e));else r=e;if(r!==e){if(i=s,n.charCodeAt(s)===46?(c=ae,s++):(c=e,u===0&&p(er)),c!==e){if(f=s,h=[],x=n.charAt(s),O.test(x)?s++:(x=e,u===0&&p($e)),x!==e)for(;x!==e;)h.push(x),x=n.charAt(s),O.test(x)?s++:(x=e,u===0&&p($e));else h=e;h!==e?f=n.substring(f,s):f=h,f!==e?(c=[c,f],i=c):(s=i,i=e);}else s=i,i=e;i===e&&(i=null),I=t,t=hr();}else s=t,t=e;return u--,t===e&&(r=e,u===0&&p(Xt)),t;}function E(){var t,r;for(u++,t=[],r=n.charAt(s),T.test(r)?s++:(r=e,u===0&&p(He));r!==e;)t.push(r),r=n.charAt(s),T.test(r)?s++:(r=e,u===0&&p(He));return u--,r=e,u===0&&p(tr),t;}function at(){var t,r;return t=s,u++,n.length>s?(r=n.charAt(s),s++):(r=e,u===0&&p(rr)),u--,r===e?t=void 0:(s=t,t=e),t;}if(le=g(),a.peg$library)return{peg$result:le,peg$currPos:s,peg$FAILED:e,peg$maxFailExpected:Se,peg$maxFailPos:F};if(le!==e&&s===n.length)return le;throw le!==e&&s<n.length&&p(vr()),Be(Se,F<n.length?n.charAt(F):null,F<n.length?ce(F,F+1):ce(F,F));}var xr={isTrackWeight:()=>!1},Ar=new j("PARSER_CONFIG_PROVIDER"),Ae=(()=>{class n{config=S(Ar,{optional:!0})??xr;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,o={}){return{startRule:e,trackWeight:o.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return z(e,this.makeOptions("Condition"));}parseQuestion(e){return z(e,this.makeOptions("Question"));}parseItem(e){return z(e,this.makeOptions("Item"));}parseEffects(e){return z(e,this.makeOptions("Effects"));}parseRule(e){return z(e,this.makeOptions("Rule"));}parseRules(e){let o=e.split(/\r?\n/g).map(l=>l.replace(/#.*/,"")).join(`
`);try{return z(o,this.makeOptions("Rules"));}catch(l){let g=[];if(g.push("Fehler beim Parsen der Regeln"),l instanceof U){let d=l.location.start.line.toString(),R=l.location.start.column.toString();g.push(" at line ",d," column ",R),g.push(":",`
`,l.message);}else console.error(l);throw new Error(g.join(""));}}validateVariableName(e){z(e,this.makeOptions("VariableName"));}validateQuestionString(e){z(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){z(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){z(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return z(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(o){return new(o||n)();};static ɵprov=we({token:n,factory:n.ɵfac,providedIn:"root"});}return n;})();var De=(()=>{class n{parser=S(Ae);extractVariables(e){return e.reduce((o,l)=>[...o,...l.questions.map(g=>g.variable)],[]);}extractCategories(e){let o=new Set();for(let l of e)for(let g of l.items)o.add(g.category);return Array.from(o);}renameVariable(e,o,l){if(l instanceof Array)return l.map(d=>this.renameVariable(e,o,d));if(l instanceof Q)return l.variable===e?new Q(l.question,o):l;if(l instanceof G)return new G(this.renameVariable(e,o,l.condition),l.questions.map(d=>this.renameVariable(e,o,d)),l.items);if(l instanceof V)return l.variable===e?new V(o):l;if(l instanceof K)return new K(this.renameVariable(e,o,l.not));if(l instanceof J)return new J(this.renameVariable(e,o,l.left),this.renameVariable(e,o,l.right));if(l instanceof Y)return new Y(this.renameVariable(e,o,l.left),this.renameVariable(e,o,l.right));let g=l;throw new Error("Unknown item type: "+g);}filterActive(e){let o=e.rules.filter(g=>g.condition.evaluate(e.model)),l=this.extractVariables(o).reduce((g,d)=>ot(fe({},g),{[d]:e.model[d]}),{[pe.string]:!0});return o.length===e.rules.length?{model:l,rules:o}:this.filterActive({model:l,rules:o});}contains(e,o){let l=o.toLowerCase();if(e instanceof G)return this.contains(e.condition,o)||e.questions.some(d=>this.contains(d,o))||e.items.some(d=>this.contains(d,o));if(e instanceof Q)return e.question.toLowerCase().includes(l)||e.variable.toLowerCase().includes(l);if(e instanceof ee)return e.category.toLowerCase().includes(l)||e.name.toLowerCase().includes(l);if(e instanceof V)return e.variable.toLowerCase().includes(l);if(e instanceof K)return this.contains(e.not,o);if(e instanceof J)return this.contains(e.left,o)||this.contains(e.right,o);if(e instanceof Y)return this.contains(e.left,o)||this.contains(e.right,o);let g=e;throw new Error("Unknown item type: "+g);}countItemsAndWeights(e){return e.reduce((o,l)=>l.items.reduce((g,d)=>{let R;return this.parser.isTrackWeight()?R=d.weight?1:0:R=this.parser.forceParseWeight(d.name)?1:0,{items:g.items+1,weights:g.weights+R};},o),{items:0,weights:0});}static ɵfac=function(o){return new(o||n)();};static ɵprov=we({token:n,factory:n.ɵfac,providedIn:"root"});}return n;})();function Rr(n,a){return Object.entries(n).concat(Object.entries(a)).reduce((e,[o,l])=>(e[o]=fe(fe({},e[o]),l),e),{});}var he=new j("RESET_SIGNAL",{providedIn:"root",factory:()=>_(!1)}),Re=class n{state;triggerReset=S(he);constructor(a){this.state=a;}static builder(){return new n({});}extend(a){return new n(Rr(this.state,a(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(a=>setTimeout(a,0));}};function St(n,a){if(typeof n!=typeof a)return!1;if(n&&a&&typeof n=="object"){let e=Object.keys(n),o=Object.keys(a);return e.length===o.length&&e.every(l=>St(n[l],a[l]));}return n===a;}function $t(n,a){let e=this.getItem("state")??"{}";return JSON.parse(e)[n]??a;}function kr(n,a,e){let o=this.getItem("state")??"{}",l=JSON.parse(o);St(a,e)?delete l[n]:a===null?l[n]=void 0:l[n]=a,this.setItem("state",JSON.stringify(l));}function wt(n,a,e){let o=S(he),l=_($t.call(n,a,e));return B(()=>{let g=l();g!==$t.call(n,a,e)&&kr.call(n,a,g,e);},{manualCleanup:!0}),B(()=>{o()&&l.set(e);}),l;}var H=(n,a)=>wt(localStorage,n,a),ke=(n,a)=>wt(sessionStorage,n,a);var P=H,yt=["en","de"],bt=()=>({config:{categorySorting:P("categorySorting","alphabetically"),trackWeight:P("trackWeight",!1),skipItems:P("skipItems",!1),fadeOutDisabledRules:P("fadeOutDisabledRules",!1),highlightVariableStatus:P("highlightVariableStatus",!1),refactorVariables:P("refactorVariables",!0),confirmRuleDeletion:P("confirmRuleDeletion",!0),rulesTemplate:P("rulesTemplate","default"),theme:P("theme","system"),fontSize:P("fontSize","normal"),accessibility:P("accessibility","accessible"),animations:P("animations",!0),language:P("language","auto"),exportReminder:P("exportReminder",!1)}});var Et=({config:{language:n}})=>{let a=_(window.scrollY);return window.addEventListener("scroll",()=>{a.set(window.scrollY);}),{browser:{scrollY:a,isMobile:y(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:y(()=>{let e=n();return e==="auto"?navigator.languages.map(g=>g.split("-")[0]).find(g=>yt.includes(g))??"en":e;})}};};var xt=(n,a)=>ke(n,a),At=()=>({clipboard:{items:xt("clipboardItems",[]),questions:xt("clipboardQuestions",[])}});var de=H;function Z(n){return`${n.category}-${n.name}`;}var Rt=({rules:{parsed:n},config:{categorySorting:a,skipItems:e}})=>{let o=de("answers",{}),l=de("checkedItems",[]),g=de("skippedItems",[]),d=de("collapsedCategories",[]),R=de("answersLocked",!1),C=ke("statsVisible",void 0),$=S(De),m=y(()=>$.filterActive({rules:n.value(),model:o()})),w=y(()=>m().rules),N=y(()=>w().flatMap(v=>v.items)),te=y(()=>N().filter(v=>l().includes(Z(v)))),ne=v=>{l().includes(Z(v))?l.update(b=>b.filter(O=>O!==Z(v))):l.update(b=>[...b,Z(v)]);},X=y(()=>N().filter(v=>g().includes(Z(v)))),ie=v=>{e()&&(g().includes(Z(v))?g.update(b=>b.filter(O=>O!==Z(v))):g.update(b=>[...b,Z(v)]));},ae=v=>{d().includes(v)?d.update(b=>b.filter(O=>O!==v)):d.update(b=>[...b,v]);};function re(v){return d().includes(v);}let A=y(()=>a()==="definition"?()=>0:(b,O)=>b.localeCompare(O)),L=y(()=>{function v(T){return{name:T.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:re(T.category)};}let b=N().reduce((T,k)=>{T[k.category]||(T[k.category]=v(k));let oe=e()&&X().includes(k),me=!oe&&te().includes(k);return T[k.category].items.push({category:k.category,name:k.name,weight:k.weight,checked:me,skipped:oe}),me&&(T[k.category].checkedItems++,T[k.category].checkedWeight+=k.weight??0),oe||(T[k.category].totalItems++,T[k.category].totalWeight+=k.weight??0),T;},{}),O=A();return Object.entries(b).map(T=>T[1]).toSorted((T,k)=>O(T.name,k.name));}),M=y(()=>Object.entries(L()).reduce((v,[,b])=>(v.totalItems+=b.totalItems,v.checkedItems+=b.checkedItems,v.totalWeight+=b.totalWeight,v.checkedWeight+=b.checkedWeight,v),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return{rules:{categories:y(()=>$.extractCategories(n.value())),variables:y(()=>$.extractVariables(n.value()))},active:{rules:w,answers:y(()=>m().model),questions:y(()=>w().flatMap(v=>v.questions))},packlist:{answers:o,model:L,stats:M,toggleCheckedItem:ne,toggleSkippedItem:ie,toggleCategoryCollapse:ae,answersLocked:R,statsVisible:C,reset:()=>{o.set({}),l.set([]),g.set([]),d.set([]),R.set(!1),C.set(void 0);}}};};var je=(n,a)=>{let e=S(Ee),o=S(be),l=S(he),g=_(void 0);return e.events.pipe(ct(d=>d instanceof ht),lt(()=>o.snapshot.queryParams[n]??a)).subscribe(d=>{d!==""&&g.set(d);}),B(()=>{let d=g()||void 0;d===a&&(d=void 0),o.snapshot.queryParams[n]!==d&&e.navigate([],{queryParams:{[n]:d},queryParamsHandling:"merge",relativeTo:o,replaceUrl:!0});}),B(()=>{l()&&g.set(a);}),g;};var Ir={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},kt=()=>{let n=S(Ee),a=S(be),e=je("rulesMode","view");return{router:{rulesMode:e,filterRulesQuery:je("filterRulesQuery",void 0),fragment:pt(a.fragment),go:o=>{Ir[o].call({router:n,rulesMode:e});}}};};var It=({config:{trackWeight:n},rules:{raw:a}})=>{let e=S(Ae),o=ye({request:()=>(n(),a.value()),loader:({request:l})=>Promise.resolve(l?e.parseRules(l):[]),defaultValue:[]});return{rules:{parsed:o,hasError:y(()=>o.status()===ge.Error||a.status()===ge.Error),isLoading:y(()=>o.status()===ge.Loading||a.status()===ge.Loading)}};};var Tt=`:-
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
`;var _e=new j("RULES_TEMPLATE");function Tr(n){return n.startsWith("de")?Tt:Ct;}function Hs(){return ut([{provide:_e,useFactory:Tr,deps:[ft]}]);}var Ot=new j("CAPACITOR_HTTP_REQUEST_MODE");function Cr(n){switch(n){case 400:return"Ung\xFCltige Anfrage";case 401:return"Nicht autorisiert";case 403:return"Verboten";case 404:return"Nicht gefunden";case 500:return"interner Serverfehler";default:return;}}var Wt=({config:{rulesTemplate:n}})=>{let a=H("rulesMode","template"),e=H("rules",void 0),o=y(()=>e()!==void 0),l=y(()=>{let A=e();if(A)return Or(A).toString(16);}),g=H("lastExportHash",void 0),d=H("lastExportDate",void 0),R=()=>{g.set(l()),d.set(new Date().getTime());},C=_(new Date().getTime());B(()=>{e(),C.set(new Date().getTime());});let $=S(_e),m=y(()=>n()==="default"?$:""),w=H("remoteHistory",[]),N=function(A){w.update(L=>L.filter(M=>M!==A));},te=gt(()=>a()==="remote"?w()[0]:void 0),ne=S(Ot,{optional:!0})??"cors",X=ye({request:()=>({mode:a(),rawLocal:e(),remote:te(),template:m()}),loader:({request:A})=>{switch(A.mode){case"local":return Promise.resolve(A.rawLocal);case"template":return Promise.resolve(A.template);case"remote":if(A.remote){if(!A.remote.startsWith("http"))throw new Error("Invalid URL");return dt.get({url:A.remote,webFetchExtra:{mode:ne}}).then(L=>{if(L.status>=200&&L.status<300)return w.update(M=>[A.remote,...M.filter(v=>v!==A.remote)]),L.data;{let M=[["HTTP Fehler",L.status.toString()].join(" "),Cr(L.status)].join(": ");throw new Error(M);}});}else return Promise.resolve(void 0);}}}),ie=function(A){a.set("remote"),te.set(A);},ae=function(A){a.set("local"),e.set(A);},re=function(){e.set(X.value()),a.set("local"),R();};return{rules:{mode:a,raw:X.asReadonly(),lastAction:C.asReadonly(),hash:l,exportNeeded:y(()=>a()==="local"&&l()!==g()),markAsCurrent:R,localRulesAvailable:o},export:{lastDate:d.asReadonly()},localRules:{updateRules:ae,copyFromCurrent:re},remoteRules:{load:ie,history:w.asReadonly(),removeFromHistory:N}};},Or=function(n,a=0){let e=3735928559^a,o=1103547991^a;for(let l=0,g;l<n.length;l++)g=n.charCodeAt(l),e=Math.imul(e^g,2654435761),o=Math.imul(o^g,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507),o^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&o)+(e>>>0);};var Pt=()=>({serviceWorker:{status:_("init")}});function Wr(){return Re.builder().extend(kt).extend(At).extend(Pt).extend(bt).extend(Et).extend(Wt).extend(It).extend(Rt);}var Lt=new j("STATE_BUILDER",{providedIn:"root",factory:()=>Wr()}),Pr=new j("GLOBAL_STATE",{providedIn:"root",factory:()=>S(Lt).build()}),Lr=new j("RESET_SWITCH",{providedIn:"root",factory:()=>{let n=S(Lt);return async()=>{await n.reset();};}});export{zr as a,xe as b,Fr as c,G as d,Q as e,ee as f,V as g,Ur as h,pe as i,K as j,J as k,Y as l,U as m,Ar as n,Ae as o,De as p,Hs as q,Ot as r,Pr as s,Lr as t};/**i18n:e347161579cdf7823cf79475d305275cd962b26b6c63283454da043ebf1dcaa5*/