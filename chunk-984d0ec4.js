import{d as Et}from"./chunk-3447131f.js";import{c as $t,l as St,m as Ae,n as Re,p as xe}from"./chunk-9657e3fc.js";import{B as Se,X as Ee,_ as I,ba as $,ca as bt,nc as he,r as wt,tc as E,uc as _,vc as Ue,wa as N,wc as ye,xc as Te}from"./chunk-bd96b616.js";import{a as pe,b as vt}from"./chunk-1a8a1911.js";function cs(r){return r.map(i=>i.toString()).map(i=>i+";").join(`

`);}function ke(r,i,e=-1){if(!r)return"0g";let o=(e<0?r/1e3:(r/1e3).toFixed(e)).toString()+"kg",l=(r*1).toString()+"g";return i?i==="kg"?o:l:o.length<=l.length?o:l;}function us(r,i){return ke(r,void 0,1)+" / "+ke(i,void 0,1);}var Y=class{condition;questions;items;constructor(i,e=[],o=[]){this.condition=i,this.questions=e,this.items=o;}toString(){let i=[];if(!(this.condition instanceof de)){let o=this.condition.toString();o&&i.push(o," ");}i.push(":-");let e=this.questions.map(o=>o.toString()).concat(this.items.map(o=>o.toString()));if(e.length===1&&i.length===1)i.push(" ",e[0]);else for(let o=0;o<e.length;o++){let l=e[o];o>0&&i.push(","),i.push(`
`,"   ",l);}return i.join("");}},B=class{question;variable;static NEW_QUESTION_NAME="New Question";static NEW_VARIABLE_NAME="new_variable";constructor(i,e){this.question=i,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function yt(r){return r?r.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var G=class{category;name;weight;static NEW_ITEM_NAME="New Item";static NEW_CATEGORY_NAME="New";constructor(i,e,o){this.category=i,this.name=e,this.weight=o;}id(){return`${yt(this.category)}-${yt(this.name)}`;}toString(){let i=`[${this.category}] ${this.name}`.trim();return this.weight&&(i+=" "+ke(this.weight)),i;}},j=class{variable;constructor(i){this.variable=i;}evaluate(i){return i[this.variable];}toString(){return this.variable;}},ps=(()=>{class r extends j{static string="please_select";constructor(){super(r.string);}}return r;})(),de=(()=>{class r extends j{static string="always";constructor(){super(r.string);}evaluate(){return!0;}}return r;})(),J=class{not;constructor(i){this.not=i;}evaluate(i){return!this.not.evaluate(i);}toString(){return"NOT "+this.not.toString();}},Z=class{left;right;constructor(i,e){this.left=i,this.right=e;}evaluate(i){return this.left.evaluate(i)&&this.right.evaluate(i);}toString(){return this.left.toString()+" AND "+this.right.toString();}},X=class{left;right;constructor(i,e){this.left=i,this.right=e;}evaluate(i){return this.left.evaluate(i)||this.right.evaluate(i);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Mr(r,i){let e=i.filter(l=>l instanceof B),o=i.filter(l=>l instanceof G);return new Y(r??new de(),e,o);}function Tt(r){return r.length===1?r[0]:new Z(r[0],Tt(r.slice(1)));}function At(r){return r.length===1?r[0]:new X(r[0],At(r.slice(1)));}function Ur(r,i){function e(){this.constructor=r;}e.prototype=i.prototype,r.prototype=new e();}function z(r,i,e,o){var l=Error.call(this,r);return Object.setPrototypeOf&&Object.setPrototypeOf(l,z.prototype),l.expected=i,l.found=e,l.location=o,l.name="SyntaxError",l;}Ur(z,Error);function Fe(r,i,e){return e=e||" ",r.length>i?r:(i-=r.length,e+=e.repeat(i),r+e.slice(0,i));}z.prototype.format=function(r){var i="Error: "+this.message;if(this.location){var e=null,o;for(o=0;o<r.length;o++)if(r[o].source===this.location.source){e=r[o].text.split(/\r\n|\n|\r/g);break;}var l=this.location.start,g=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(l):l,d=this.location.source+":"+g.line+":"+g.column;if(e){var S=this.location.end,C=Fe("",g.line.toString().length," "),b=e[l.line-1],m=l.line===S.line?S.column:b.length+1,k=m-l.column||1;i+=`
 --> `+d+`
`+C+` |
`+g.line+" | "+b+`
`+C+" | "+Fe("",l.column-1," ")+Fe("",k,"^");}else i+=`
 at `+d;}return i;};z.buildMessage=function(r,i){var e={literal:function(b){return'"'+l(b.text)+'"';},class:function(b){var m=b.parts.map(function(k){return Array.isArray(k)?g(k[0])+"-"+g(k[1]):g(k);});return"["+(b.inverted?"^":"")+m.join("")+"]";},any:function(){return"any character";},end:function(){return"end of input";},other:function(b){return b.description;}};function o(b){return b.charCodeAt(0).toString(16).toUpperCase();}function l(b){return b.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(m){return"\\x0"+o(m);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(m){return"\\x"+o(m);});}function g(b){return b.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(m){return"\\x0"+o(m);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(m){return"\\x"+o(m);});}function d(b){return e[b.type](b);}function S(b){var m=b.map(d),k,D;if(m.sort(),m.length>0){for(k=1,D=1;k<m.length;k++)m[k-1]!==m[k]&&(m[D]=m[k],D++);m.length=D;}switch(m.length){case 1:return m[0];case 2:return m[0]+" or "+m[1];default:return m.slice(0,-1).join(", ")+", or "+m[m.length-1];}}function C(b){return b?'"'+l(b)+'"':"end of input";}return"Expected "+S(r)+" but "+C(i)+" found.";};function U(r,i){i=i!==void 0?i:{};var e={},o=i.grammarSource,l={Rules:nt,Rule:Le,Condition:at,Effects:ct,Question:Pe,Item:De,VariableName:We,QuestionString:ut,ItemNameAndWeight:gt,CategoryName:ft},g=nt,d=";",S=":-",C="OR",b="AND",m="NOT",k=",",D="$",ee="[",K="]",ie="kg",te="g",ae=".",re=/^[^$,;#]/,q=/^[a-zA-Z]/,oe=/^[a-zA-Z0-9\-[\](){}_]/,se=/^[^\],;#[]/,T=/^[,;]/,v=/^[^ ,;#]/,w=/^[0-9]/,W=/^[ \t\n\r]/,ce=L("rule end"),x=M(";",!1),y=L("rule"),H=M(":-",!1),ne=L("condition"),Ne=M("OR",!1),er=M("AND",!1),Ie=M("NOT",!1),tr=M(",",!1),Qe=L("question"),rr=M("$",!1),Ye=Q(["$",",",";","#"],!0,!1),sr=L("variable name"),nr=Q([["a","z"],["A","Z"]],!1,!1),Je=Q([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1),ir=L("item"),ar=L("category"),or=M("[",!1),lr=M("]",!1),cr=L("category name"),Ze=Q(["]",",",";","#","["],!0,!1),ur=L("item name"),fr=L("word"),gr=Q([",",";"],!1,!1),Xe=Q([" ",",",";","#"],!0,!1),pr=L("weight"),hr=M("kg",!1),dr=M("g",!1),mr=L("number"),be=Q([["0","9"]],!1,!1),vr=M(".",!1),wr=L("whitespace"),et=Q([" ","	",`
`,"\r"],!1,!1),br=Lr(),$r=function(t,s){return Mr(t,s);},Sr=function(t){return At(t);},Er=function(t){return Tt(t);},yr=function(t){return new J(t);},Tr=function(t){return new j(t);},Ar=function(t,s){return new B(t.trim(),s.trim());},Rr=function(t,s){let{name:a,weight:c}=s;return new G(t.trim(),a,c);},xr=function(t,s){return i.trackWeight;},kr=function(t,s){let a=t.trim();return a.length||tt("item name"),{name:a,weight:s};},Or=function(t){let s=t.trim();return s.length||tt("item name"),{name:s,weight:void 0};},Cr=function(t){return t*1e3;},Nr=function(){return parseFloat(Ir());},n=i.peg$currPos|0,O=n,le=[{line:1,column:1}],F=n,$e=i.peg$maxFailExpected||[],u=i.peg$silentFails|0,ue;if(i.startRule){if(!(i.startRule in l))throw new Error(`Can't start parsing from rule "`+i.startRule+'".');g=l[i.startRule];}function Ir(){return r.substring(O,n);}function is(){return O;}function as(){return{source:o,start:O,end:n};}function os(){return fe(O,n);}function tt(t,s){throw s=s!==void 0?s:fe(O,n),st([L(t)],r.substring(O,n),s);}function ls(t,s){throw s=s!==void 0?s:fe(O,n),Pr(t,s);}function M(t,s){return{type:"literal",text:t,ignoreCase:s};}function Q(t,s,a){return{type:"class",parts:t,inverted:s,ignoreCase:a};}function Lr(){return{type:"any"};}function _r(){return{type:"end"};}function L(t){return{type:"other",description:t};}function rt(t){var s=le[t],a;if(s)return s;if(t>=le.length)a=le.length-1;else for(a=t;!le[--a];);for(s=le[a],s={line:s.line,column:s.column};a<t;)r.charCodeAt(a)===10?(s.line++,s.column=1):s.column++,a++;return le[t]=s,s;}function fe(t,s,a){var c=rt(t),f=rt(s),h={source:o,start:{offset:t,line:c.line,column:c.column},end:{offset:s,line:f.line,column:f.column}};return a&&o&&typeof o.offset=="function"&&(h.start=o.offset(h.start),h.end=o.offset(h.end)),h;}function p(t){n<F||(n>F&&(F=n,$e=[]),$e.push(t));}function Pr(t,s){return new z(t,null,null,s);}function st(t,s,a){return new z(z.buildMessage(t,s),t,s,a);}function nt(){var t,s,a,c,f,h;for(t=n,s=A(),a=[],c=Le();c!==e;)a.push(c),c=n,f=it(),f!==e?(f=Le(),f===e?(n=c,c=e):c=f):c=f;return c=it(),c===e&&(c=null),f=A(),h=mt(),h!==e?t=a:(n=t,t=e),t;}function it(){var t,s,a,c;return u++,t=n,s=A(),r.charCodeAt(n)===59?(a=d,n++):(a=e,u===0&&p(x)),a!==e?(c=A(),s=[s,a,c],t=s):(n=t,t=e),u--,t===e&&(s=e,u===0&&p(ce)),t;}function Le(){var t,s,a,c,f,h;return u++,t=n,s=at(),s===e&&(s=null),a=A(),r.substr(n,2)===S?(c=S,n+=2):(c=e,u===0&&p(H)),c!==e?(f=A(),h=ct(),O=t,t=$r(s,h)):(n=t,t=e),u--,t===e&&(s=e,u===0&&p(y)),t;}function at(){var t,s;return u++,t=Wr(),u--,t===e&&(s=e,u===0&&p(ne)),t;}function Wr(){var t,s,a,c,f,h,R,ge;for(u++,t=n,s=n,a=[],c=ot();c!==e;)a.push(c),c=n,f=n,h=A(),r.substr(n,2)===C?(R=C,n+=2):(R=e,u===0&&p(Ne)),R!==e?(ge=A(),h=[h,R,ge],f=h):(n=f,f=e),f!==e?(f=ot(),f===e?(n=c,c=e):c=f):c=f;return a.length<1?(n=s,s=e):s=a,s!==e&&(O=t,s=Sr(s)),t=s,u--,t===e&&(s=e,u===0&&p(ne)),t;}function ot(){var t,s,a,c,f,h,R,ge;for(u++,t=n,s=n,a=[],c=_e();c!==e;)a.push(c),c=n,f=n,h=A(),r.substr(n,3)===b?(R=b,n+=3):(R=e,u===0&&p(er)),R!==e?(ge=A(),h=[h,R,ge],f=h):(n=f,f=e),f!==e?(f=_e(),f===e?(n=c,c=e):c=f):c=f;return a.length<1?(n=s,s=e):s=a,s!==e&&(O=t,s=Er(s)),t=s,u--,t===e&&(s=e,u===0&&p(ne)),t;}function _e(){var t,s,a,c,f,h;return u++,t=n,r.substr(n,3)===m?(s=m,n+=3):(s=e,u===0&&p(Ie)),s!==e?(a=A(),r.substr(n,3)===m?(c=m,n+=3):(c=e,u===0&&p(Ie)),c!==e?(f=A(),h=_e(),h!==e?t=h:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r.substr(n,3)===m?(s=m,n+=3):(s=e,u===0&&p(Ie)),s!==e?(a=A(),c=lt(),c!==e?(O=t,t=yr(c)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=lt(),s!==e?t=s:(n=t,t=e))),u--,t===e&&(s=e,u===0&&p(ne)),t;}function lt(){var t,s;return t=n,s=We(),s!==e&&(O=t,s=Tr(s)),t=s,t;}function ct(){var t,s,a,c,f,h,R;for(t=n,s=[],a=Pe(),a===e&&(a=De());a!==e;)s.push(a),a=n,c=n,f=A(),r.charCodeAt(n)===44?(h=k,n++):(h=e,u===0&&p(tr)),h!==e?(R=A(),f=[f,h,R],c=f):(n=c,c=e),c!==e?(c=Pe(),c===e&&(c=De()),c===e?(n=a,a=e):a=c):a=c;return t=s,t;}function Pe(){var t,s,a,c;return u++,t=n,s=ut(),s!==e?(r.charCodeAt(n)===36?(a=D,n++):(a=e,u===0&&p(rr)),a!==e?(c=We(),c!==e?(O=t,t=Ar(s,c)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&p(Qe)),t;}function ut(){var t,s,a;if(u++,t=n,s=[],a=r.charAt(n),re.test(a)?n++:(a=e,u===0&&p(Ye)),a!==e)for(;a!==e;)s.push(a),a=r.charAt(n),re.test(a)?n++:(a=e,u===0&&p(Ye));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&p(Qe)),t;}function We(){var t,s,a,c,f;if(u++,t=n,s=n,a=r.charAt(n),q.test(a)?n++:(a=e,u===0&&p(nr)),a!==e){for(c=[],f=r.charAt(n),oe.test(f)?n++:(f=e,u===0&&p(Je));f!==e;)c.push(f),f=r.charAt(n),oe.test(f)?n++:(f=e,u===0&&p(Je));a=[a,c],s=a;}else n=s,s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&p(sr)),t;}function De(){var t,s,a,c;return u++,t=n,s=Dr(),s!==e?(a=A(),c=gt(),c!==e?(O=t,t=Rr(s,c)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&p(ir)),t;}function Dr(){var t,s,a,c,f,h;return u++,t=n,r.charCodeAt(n)===91?(s=ee,n++):(s=e,u===0&&p(or)),s!==e?(a=A(),c=ft(),c!==e?(f=A(),r.charCodeAt(n)===93?(h=K,n++):(h=e,u===0&&p(lr)),h!==e?t=c:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&p(ar)),t;}function ft(){var t,s,a;if(u++,t=n,s=[],a=r.charAt(n),se.test(a)?n++:(a=e,u===0&&p(Ze)),a!==e)for(;a!==e;)s.push(a),a=r.charAt(n),se.test(a)?n++:(a=e,u===0&&p(Ze));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&p(cr)),t;}function gt(){var t,s,a,c,f;for(u++,t=n,s=n,a=[],c=pt();c!==e;)a.push(c),c=n,f=A(),f=pt(),f===e?(n=c,c=e):c=f;if(s=r.substring(s,n),a=A(),c=ht(),c!==e?(O=n,f=xr(s,c),f?f=void 0:f=e,f!==e?(O=t,t=kr(s,c)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,s=n,a=[],c=Me();c!==e;)a.push(c),c=n,f=A(),f=Me(),f===e?(n=c,c=e):c=f;s=r.substring(s,n),O=t,s=Or(s),t=s;}return u--,t===e&&(s=e,u===0&&p(ur)),t;}function pt(){var t,s,a,c,f,h;return u++,t=n,s=n,u++,a=n,c=ht(),c!==e?(f=A(),h=mt(),h===e&&(h=r.charAt(n),T.test(h)?n++:(h=e,u===0&&p(gr))),h!==e?(c=[c,f,h],a=c):(n=a,a=e)):(n=a,a=e),u--,a===e?s=void 0:(n=s,s=e),s!==e?(a=Me(),a!==e?t=a:(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&p(fr)),t;}function Me(){var t,s,a;if(t=n,s=[],a=r.charAt(n),v.test(a)?n++:(a=e,u===0&&p(Xe)),a!==e)for(;a!==e;)s.push(a),a=r.charAt(n),v.test(a)?n++:(a=e,u===0&&p(Xe));else s=e;return s!==e?t=r.substring(t,n):t=s,t;}function ht(){var t,s,a;return u++,t=n,s=dt(),s!==e?(r.substr(n,2)===ie?(a=ie,n+=2):(a=e,u===0&&p(hr)),a!==e?(O=t,t=Cr(s)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=dt(),s!==e?(r.charCodeAt(n)===103?(a=te,n++):(a=e,u===0&&p(dr)),a===e&&(a=null),t=s):(n=t,t=e)),u--,t===e&&(s=e,u===0&&p(pr)),t;}function dt(){var t,s,a,c,f,h,R;if(u++,t=n,s=[],a=r.charAt(n),w.test(a)?n++:(a=e,u===0&&p(be)),a!==e)for(;a!==e;)s.push(a),a=r.charAt(n),w.test(a)?n++:(a=e,u===0&&p(be));else s=e;if(s!==e){if(a=n,r.charCodeAt(n)===46?(c=ae,n++):(c=e,u===0&&p(vr)),c!==e){if(f=n,h=[],R=r.charAt(n),w.test(R)?n++:(R=e,u===0&&p(be)),R!==e)for(;R!==e;)h.push(R),R=r.charAt(n),w.test(R)?n++:(R=e,u===0&&p(be));else h=e;h!==e?f=r.substring(f,n):f=h,f!==e?(c=[c,f],a=c):(n=a,a=e);}else n=a,a=e;a===e&&(a=null),O=t,t=Nr();}else n=t,t=e;return u--,t===e&&(s=e,u===0&&p(mr)),t;}function A(){var t,s;for(u++,t=[],s=r.charAt(n),W.test(s)?n++:(s=e,u===0&&p(et));s!==e;)t.push(s),s=r.charAt(n),W.test(s)?n++:(s=e,u===0&&p(et));return u--,s=e,u===0&&p(wr),t;}function mt(){var t,s;return t=n,u++,r.length>n?(s=r.charAt(n),n++):(s=e,u===0&&p(br)),u--,s===e?t=void 0:(n=t,t=e),t;}if(ue=g(),i.peg$library)return{peg$result:ue,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:$e,peg$maxFailPos:F};if(ue!==e&&n===r.length)return ue;throw ue!==e&&n<r.length&&p(_r()),st($e,F<r.length?r.charAt(F):null,F<r.length?fe(F,F+1):fe(F,F));}var jr={isTrackWeight:()=>!1},zr=new I("PARSER_CONFIG_PROVIDER"),Oe=(()=>{class r{config=$(zr,{optional:!0})??jr;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,o={}){return{startRule:e,trackWeight:o.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return U(e,this.makeOptions("Condition"));}parseQuestion(e){return U(e,this.makeOptions("Question"));}parseItem(e){return U(e,this.makeOptions("Item"));}parseEffects(e){return U(e,this.makeOptions("Effects"));}parseRule(e){return U(e,this.makeOptions("Rule"));}parseRules(e){let o=e.split(/\r?\n/g).map(l=>l.replace(/#.*/,"")).join(`
`);try{return U(o,this.makeOptions("Rules"));}catch(l){let g=[];if(g.push("Error parsing rules"),l instanceof z){let d=l.location.start.line.toString(),S=l.location.start.column.toString();g.push(" at line ",d," column ",S),g.push(":",`
`,l.message);}else l instanceof Error&&g.push(l.message);throw new Error(g.join(""));}}validateVariableName(e){U(e,this.makeOptions("VariableName"));}validateQuestionString(e){U(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){U(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){U(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return U(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(o){return new(o||r)();};static ɵprov=Ee({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();var je=(()=>{class r{parser=$(Oe);extractVariables(e){return e.reduce((o,l)=>[...o,...l.questions.map(g=>g.variable)],[]);}extractCategories(e){let o=new Set();for(let l of e)for(let g of l.items)o.add(g.category);return Array.from(o);}renameVariable(e,o,l){if(l instanceof Array)return l.map(d=>this.renameVariable(e,o,d));if(l instanceof B)return l.variable===e?new B(l.question,o):l;if(l instanceof Y)return new Y(this.renameVariable(e,o,l.condition),l.questions.map(d=>this.renameVariable(e,o,d)),l.items);if(l instanceof j)return l.variable===e?new j(o):l;if(l instanceof J)return new J(this.renameVariable(e,o,l.not));if(l instanceof Z)return new Z(this.renameVariable(e,o,l.left),this.renameVariable(e,o,l.right));if(l instanceof X)return new X(this.renameVariable(e,o,l.left),this.renameVariable(e,o,l.right));let g=l;throw new Error("Unknown item type: "+g);}filterActive(e){let o=e.rules.filter(g=>g.condition.evaluate(e.model)),l=this.extractVariables(o).reduce((g,d)=>vt(pe({},g),{[d]:e.model[d]}),{[de.string]:!0});return o.length===e.rules.length?{model:l,rules:o}:this.filterActive({model:l,rules:o});}contains(e,o){let l=o.toLowerCase();if(e instanceof Y)return this.contains(e.condition,o)||e.questions.some(d=>this.contains(d,o))||e.items.some(d=>this.contains(d,o));if(e instanceof B)return e.question.toLowerCase().includes(l)||e.variable.toLowerCase().includes(l);if(e instanceof G)return e.category.toLowerCase().includes(l)||e.name.toLowerCase().includes(l);if(e instanceof j)return e.variable.toLowerCase().includes(l);if(e instanceof J)return this.contains(e.not,o);if(e instanceof Z)return this.contains(e.left,o)||this.contains(e.right,o);if(e instanceof X)return this.contains(e.left,o)||this.contains(e.right,o);let g=e;throw new Error("Unknown item type: "+g);}countItemsAndWeights(e){return e.reduce((o,l)=>l.items.reduce((g,d)=>{let S;return this.parser.isTrackWeight()?S=d.weight?1:0:S=this.parser.forceParseWeight(d.name)?1:0,{items:g.items+1,weights:g.weights+S};},o),{items:0,weights:0});}static ɵfac=function(o){return new(o||r)();};static ɵprov=Ee({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();function Vr(r,i){return Object.entries(r).concat(Object.entries(i)).reduce((e,[o,l])=>(e[o]=pe(pe({},e[o]),l),e),{});}var me=new I("RESET_SIGNAL",{providedIn:"root",factory:()=>N(!1)}),Ce=class r{state;triggerReset=$(me);constructor(i){this.state=i;}static builder(){return new r({});}extend(i){return new r(Vr(this.state,i(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(i=>setTimeout(i,0));}};function xt(r,i){if(typeof r!=typeof i)return!1;if(r&&i&&typeof r=="object"){let e=Object.keys(r),o=Object.keys(i);return e.length===o.length&&e.every(l=>xt(r[l],i[l]));}return r===i;}function Rt(r,i){let e=this.getItem("state")??"{}";return JSON.parse(e)[r]??i;}function Hr(r,i,e){let o=this.getItem("state")??"{}",l=JSON.parse(o);xt(i,e)?delete l[r]:i===null?l[r]=void 0:l[r]=i,this.setItem("state",JSON.stringify(l));}function kt(r,i,e){let o=$(me),l=N(Rt.call(r,i,e));return _(()=>{let g=l();g!==Rt.call(r,i,e)&&Hr.call(r,i,g,e);},{manualCleanup:!0}),_(()=>{o()&&l.set(e);}),l;}var V=(r,i)=>kt(localStorage,r,i),ve=(r,i)=>kt(sessionStorage,r,i);var P=V,Ot=["en","de"],Ct=()=>{let r=P("categorySorting","alphabetically"),i=P("trackWeight",!1);return _(()=>{i()===!1&&r()==="weight"&&r.set("alphabetically");}),{config:{categorySorting:r,trackWeight:i,skipItems:P("skipItems",!1),fadeOutDisabledRules:P("fadeOutDisabledRules",!1),highlightVariableStatus:P("highlightVariableStatus",!1),refactorVariables:P("refactorVariables",!0),confirmRuleDeletion:P("confirmRuleDeletion",!0),rulesTemplate:P("rulesTemplate","default"),theme:P("theme","system"),fontSize:P("fontSize","normal"),accessibility:P("accessibility","accessible"),animations:P("animations",!0),language:P("language","auto"),exportReminder:P("exportReminder",!1)}};};var Nt=({config:{language:r}})=>{let i=N(window.scrollY);return window.addEventListener("scroll",()=>{i.set(window.scrollY);}),{browser:{scrollY:i,isMobile:E(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:E(()=>{let e=r();return e==="auto"?navigator.languages.map(g=>g.split("-")[0]).find(g=>Ot.includes(g))??"en":e;})}};};var It=(r,i)=>ve(r,i),Lt=()=>({clipboard:{items:It("clipboardItems",[]),questions:It("clipboardQuestions",[])}});var we=V;function Br(r){return"cat-"+r.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var ze=class extends G{original;checked;skipped;colored;constructor(i,e,o,l){super(i.category,i.name,i.weight),this.original=i,this.checked=e,this.skipped=o,this.colored=l;}},_t=({rules:{parsed:r},config:{categorySorting:i,skipItems:e}})=>{let o=we("answers",{}),l=we("checkedItems",[]),g=we("skippedItems",[]),d=we("collapsedCategories",[]),S=we("answersLocked",!1),C=ve("statsVisible",void 0),b=ve("askedWeightTracking",void 0),m=$(je),k=E(()=>m.filterActive({rules:r.value(),model:o()})),D=E(()=>k().rules),ee=E(()=>D().flatMap(v=>v.items)),K=E(()=>ee().filter(v=>l().includes(v.id()))),ie=v=>{l().includes(v.id())?l.update(w=>w.filter(W=>W!==v.id())):l.update(w=>[...w,v.id()]);},te=E(()=>ee().filter(v=>g().includes(v.id()))),ae=v=>{e()&&(g().includes(v.id())?g.update(w=>w.filter(W=>W!==v.id())):g.update(w=>[...w,v.id()]));},re=v=>{d().includes(v)?d.update(w=>w.filter(W=>W!==v)):d.update(w=>[...w,v]);},q=N([]),oe=v=>{(q().length!==v.length||!v.every(w=>q().includes(w)))&&q.set(v);},se=E(()=>{function v(x){return{id:Br(x.category),name:x.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:d().includes(x.category),colored:C()==="distribution"};}let w=ee().reduce((x,y)=>{x[y.category]||(x[y.category]=v(y));let H=e()&&te().includes(y),ne=!H&&K().includes(y),Ne=C()==="heaviestItems"&&q().includes(y.id());return x[y.category].items.push(new ze(y,ne,H,Ne)),ne&&(x[y.category].checkedItems++,x[y.category].checkedWeight+=y.weight??0),H||(x[y.category].totalItems++,x[y.category].totalWeight+=y.weight??0),x;},{}),ce=E(()=>{let x=i();return x==="alphabetically"?(y,H)=>y.name.localeCompare(H.name):x==="weight"?(y,H)=>H.totalWeight-y.totalWeight:()=>0;})();return Object.entries(w).map(x=>x[1]).toSorted((x,y)=>ce(x,y));}),T=E(()=>Object.entries(se()).reduce((v,[,w])=>(v.totalItems+=w.totalItems,v.checkedItems+=w.checkedItems,v.totalWeight+=w.totalWeight,v.checkedWeight+=w.checkedWeight,v),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return _(()=>{r.value(),S.set(!1),C.set(void 0);}),{rules:{categories:E(()=>m.extractCategories(r.value())),variables:E(()=>m.extractVariables(r.value()))},active:{rules:D,answers:E(()=>k().model),questions:E(()=>D().flatMap(v=>v.questions))},packlist:{answers:o,model:se,stats:T,toggleCheckedItem:ie,toggleSkippedItem:ae,colorItems:oe,toggleCategoryCollapse:re,answersLocked:S,statsVisible:C,askedWeightTracking:b,reset:()=>{o.set({}),l.set([]),g.set([]),d.set([]),S.set(!1),C.set(void 0);}}};};var Ve=(r,i)=>{let e=$(xe),o=$(Re),l=$(me),g=N(void 0);return e.events.pipe(Se(d=>d instanceof Ae),wt(()=>o.snapshot.queryParams[r]??i)).subscribe(d=>{d!==""&&g.set(d);}),_(()=>{let d=g()||void 0;d===i&&(d=void 0),o.snapshot.queryParams[r]!==d&&e.navigate([],{queryParams:{[r]:d},queryParamsHandling:"merge",relativeTo:o,replaceUrl:!0});}),_(()=>{l()&&g.set(i);}),g;};var Gr={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},Pt=()=>{let r=$(xe),i=$(Re),e=Ve("rulesMode","view"),o=St(i.fragment,{requireSync:!0}),l=ye(()=>o()??void 0);_(()=>{let S=l();S!==o()&&r.navigate([],{fragment:S,relativeTo:i});});let g=$($t),d=N(g.path());return r.events.pipe(Se(S=>S instanceof Ae)).subscribe(()=>{g.path()!==d()&&d.set(g.path());}),{router:{rulesMode:e,filterRulesQuery:Ve("filterRulesQuery",void 0),path:d.asReadonly(),fragment:l,go:S=>{Gr[S].call({router:r,rulesMode:e});}}};};var Wt=({config:{trackWeight:r},rules:{raw:i}})=>{let e=$(Oe),o=Te({request:()=>(r(),i.value()),loader:({request:l})=>Promise.resolve(l?e.parseRules(l):[]),defaultValue:[]});return{rules:{parsed:o,hasError:E(()=>o.status()===Ue.Error||i.status()===Ue.Error),isLoading:E(()=>o.isLoading()||i.isLoading())}};};var Dt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Mt={name:"GitHub Gist",test:r=>Dt.test(r),transform:r=>{let i=Dt.exec(r);if(!i)return r;let[,e,o,,l]=i;return l?`https://gist.githubusercontent.com/${e}/${o}/raw/${l}`:`https://gist.githubusercontent.com/${e}/${o}/raw`;}};var He=class{name="GitHub";test(i){return i.startsWith("https://github.com/");}transform(i){return i.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Ut=new He();var Ft=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,Kr={name:"Google Drive",needsCORS:!0,test:r=>Ft.test(r),transform:r=>{let i=Ft.exec(r);return i?`https://drive.google.com/uc?export=download&id=${i[1]}`:r;}},jt=Kr;var qr={name:"Pastebin",needsCORS:!0,test:r=>r.startsWith("https://pastebin.com/")&&!r.includes("/raw/"),transform:r=>r.replace("https://pastebin.com/","https://pastebin.com/raw/")},zt=qr;var Qr=[Mt,Ut,jt,zt];function Vt(r,i){if(r){let e=Qr.find(o=>o.test(r));if(e){let o=e.transform(r);return i&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(o):o;}}return r;}var Ht=`:-
  Expecting a lot of rain? $rain,
  Add food and water weight? $food,
  Add worn clothes weight? $wear,
  [Container] lightweight backpack 40l 700g,
  [House] tent 600g,
  [House] poles and pegs 300g,
  [House] quilt 600g,
  [House] sleeping pad 500g,
  [Electronics] charger 50g,
  [Electronics] power bank 350g,
  [Electronics] USB-C cable 20g,
  [Electronics] head lamp 50g,
  [Electronics] phone 300g,
  [Container] Ziplock bag for Electronics 20g,
  [Body] toothbrush 15g,
  [Body] toothpaste 30g,
  [Other] first aid kit 50g,
  [Body] sun cream 50g,
  [Body] soap 100g,
  [Body] towel 80g,
  [Kitchen] cook pot 90g,
  [Kitchen] stove and fuel 150g,
  [Kitchen] spoon 20g,
  [Container] PET water bottles 60g,
  [Container] Ziplock bags for food 50g,
  [Kitchen] water filter 90g,
  [Clothes] spare underpants 100g,
  [Clothes] spare socks 40g,
  [Clothes] long pants 300g,
  [Clothes] sun cap 80g,
  [Clothes] sun glasses 30g,
  [Clothes] fleece jacket 160g;

wear :-
  [Clothes] hiking pants 200g,
  [Clothes] t-shirt 150g,
  [Clothes] underpants 100g,
  [Clothes] socks 40g;

rain :-
  [Pack] liner 20g,
  [Clothes] rain jacket 380g;

food :-
  [Food] water 2l 2kg,
  [Food] snacks 500g,
  [Food] 2 days worth dried 500g;
`;var Bt=`:-
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
`;var Gt=`:-
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
`;var Kt=`:- [Neu] Dies ist dein erster Gegenstand;
`;var qt=`:- [New] This is your first item;
`;var Qt=`:-
   a $a,
   b $b,
   c $c;

a :-
   [rules] 1: a;

NOT a :-
   [rules] 2: NOT a;

a AND b :-
   [rules] 3: a AND b;

NOT a AND b :-
   [rules] 4: NOT a AND b;

NOT a AND NOT b :-
   [rules] 5: NOT a AND NOT b;

a OR c :-
   [rules] 6: a OR c;

a OR NOT c :-
   [rules] 7: a OR NOT c;

NOT a OR NOT c :-
   [rules] 8: NOT a OR NOT c;

a AND b OR c :-
   [rules] 9: a AND b OR c;

NOT a AND b OR NOT c :-
   [rules] 10: NOT a AND b OR NOT c;

NOT a AND b OR NOT c AND a OR NOT b AND c :-
   [rules] 11: NOT a AND b OR NOT c AND a OR NOT b AND c;
`;var Be=new I("BACKPACKING_RULES_TEMPLATE");function Yr(){return Ht;}var Ge=new I("DEFAULT_RULES_TEMPLATE");function Jr(r){return r.startsWith("de")?Bt:Gt;}var Ke=new I("EMPTY_RULES_TEMPLATE");function Zr(r){return r.startsWith("de")?Kt:qt;}var qe=new I("LOGIC_RULES_TEMPLATE");function Xr(){return Qt;}function Dn(){return bt([{provide:Be,useFactory:Yr,deps:[he]},{provide:Ge,useFactory:Jr,deps:[he]},{provide:Ke,useFactory:Zr,deps:[he]},{provide:qe,useFactory:Xr,deps:[he]}]);}var Yt=new I("CAPACITOR_HTTP_REQUEST_MODE");function es(r){switch(r){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var Jt=({config:{rulesTemplate:r}})=>{let i=V("rulesMode","template"),e=V("rules",void 0),o=E(()=>e()!==void 0),l=E(()=>{let T=e();if(T)return ts(T).toString(16);}),g=V("lastExportHash",void 0),d=V("lastExportDate",void 0),S=()=>{g.set(l()),d.set(new Date().getTime());},C=N(new Date().getTime());_(()=>{e(),C.set(new Date().getTime());});let b=$(Ge),m=$(Ke),k=$(qe),D=$(Be),ee=E(()=>{switch(r()){case"empty":return m;case"logic":return k;case"backpacking":return D;default:return b;}}),K=V("remoteHistory",[]),ie=function(T){K.update(v=>v.filter(w=>w!==T));},te=ye(()=>i()==="remote"?K()[0]:void 0),ae=$(Yt,{optional:!0})??"cors",re=Te({request:()=>({mode:i(),rawLocal:e(),remote:te(),template:ee()}),loader:({request:T})=>{switch(T.mode){case"local":return Promise.resolve(T.rawLocal);case"template":return Promise.resolve(T.template);case"remote":if(T.remote){if(!T.remote.startsWith("http"))throw new Error("Invalid URL");let v=Vt(T.remote,ae==="cors");return Et.get({url:v,webFetchExtra:{mode:ae}}).then(w=>{if(w.status>=200&&w.status<300)return K.update(W=>[T.remote,...W.filter(ce=>ce!==T.remote)]),w.data;{let W=[["HTTP Error",w.status.toString()].join(" "),es(w.status)].join(": ");throw new Error(W);}});}else return Promise.resolve(void 0);}}}),q=function(T){te()!==T&&(i.set("remote"),te.set(T));},oe=function(T){i.set("local"),e.set(T);},se=function(){e.set(re.value()),i.set("local"),S();};return{rules:{mode:i,raw:re.asReadonly(),lastAction:C.asReadonly(),hash:l,exportNeeded:E(()=>i()==="local"&&l()!==g()),markAsCurrent:S,localRulesAvailable:o},export:{lastDate:d.asReadonly()},localRules:{updateRules:oe,copyFromCurrent:se},remoteRules:{load:q,history:K.asReadonly(),removeFromHistory:ie}};},ts=function(r,i=0){let e=3735928559^i,o=1103547991^i;for(let l=0,g;l<r.length;l++)g=r.charCodeAt(l),e=Math.imul(e^g,2654435761),o=Math.imul(o^g,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507),o^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&o)+(e>>>0);};var Zt=()=>({serviceWorker:{status:N("init")}});function rs(){return Ce.builder().extend(Pt).extend(Lt).extend(Zt).extend(Ct).extend(Nt).extend(Jt).extend(Wt).extend(_t);}var Xt=new I("STATE_BUILDER",{providedIn:"root",factory:()=>rs()}),ss=new I("GLOBAL_STATE",{providedIn:"root",factory:()=>$(Xt).build()}),ns=new I("RESET_SWITCH",{providedIn:"root",factory:()=>{let r=$(Xt);return async()=>{await r.reset();};}});export{cs as a,ke as b,us as c,Y as d,B as e,G as f,j as g,ps as h,de as i,J as j,Z as k,X as l,z as m,zr as n,Oe as o,je as p,Dn as q,Yt as r,ss as s,ns as t};/**i18n:692e7334a9541eae203257fc8b38f6e46e0b888ca0b329c43e8a79e51bd3d58d*/