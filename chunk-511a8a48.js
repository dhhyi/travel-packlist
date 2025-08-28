import{b as It,l as Dt,m as Ie,n as De,p as Le}from"./chunk-d424d774.js";import{d as Lt}from"./chunk-32f3b8a5.js";import{$ as V,B as Ce,Y as Ne,ba as k,ca as Nt,pa as N,r as Ct,uc as ke,wc as E,xc as _,yc as Oe,zc as Ot}from"./chunk-df17556f.js";import{a as x,b as D}from"./chunk-bdc09bad.js";var ue=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}},ie=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}};function _t(s){return s?s.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var oe=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${_t(this.category)}-${_t(this.name)}`;}},B=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}},Dr=(()=>{class s extends B{static string="please_select";constructor(){super(s.string);}}return s;})(),be=(()=>{class s extends B{static string="always";constructor(){super(s.string);}evaluate(){return!0;}}return s;})(),ee=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}},te=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}},se=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}};function er(s,o){let e=o.filter(c=>c instanceof ie),a=o.filter(c=>c instanceof oe);return new ue(s??new be(),e,a);}function Pt(s){return s.length===1?s[0]:new te(s[0],Pt(s.slice(1)));}function Wt(s){return s.length===1?s[0]:new se(s[0],Wt(s.slice(1)));}var fe=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(P=>P.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let d=this.location.start,h=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(d):d,b=this.location.source+":"+h.line+":"+h.column;if(a){let P=this.location.end,G="".padEnd(h.line.toString().length," "),K=a[d.line-1],A=(d.line===P.line?P.column:K.length+1)-d.column||1;e+=`
 --> `+b+`
`+G+` |
`+h.line+" | "+K+`
`+G+" | "+"".padEnd(d.column-1," ")+"".padEnd(A,"^");}else e+=`
 at `+b;}return e;}static buildMessage(o,e){function a(A){return A.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function d(A){return c?A.replace(c,$=>"\\u{"+a($)+"}"):A;}function h(A){return d(A.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}function b(A){return d(A.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}let P={literal(A){return'"'+h(A.text)+'"';},class(A){let $=A.parts.map(O=>Array.isArray(O)?b(O[0])+"-"+b(O[1]):b(O));return"["+(A.inverted?"^":"")+$.join("")+"]"+(A.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(A){return A.description;}};function G(A){return P[A.type](A);}function K(A){let $=A.map(G);if($.sort(),$.length>0){let O=1;for(let F=1;F<$.length;F++)$[F-1]!==$[F]&&($[O]=$[F],O++);$.length=O;}switch($.length){case 1:return $[0];case 2:return $[0]+" or "+$[1];default:return $.slice(0,-1).join(", ")+", or "+$[$.length-1];}}function z(A){return A?'"'+h(A)+'"':"end of input";}return"Expected "+K(o)+" but "+z(e)+" found.";}};function q(s,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:pt,Rule:Fe,Condition:mt,Effects:$t,Question:ze,Item:Be,VariableName:He,QuestionString:At,ItemNameAndWeight:Et,CategoryName:yt},d=pt,h="#",b=";",P=":-",G="OR",K="AND",z="NOT",A=",",$="$",O="[",F="]",ae="kg",J="g",ge=".",Z=/^[^\n\r]/,de=/^[^$,;#]/,Ae=/^[a-zA-Z]/,pe=/^[a-zA-Z0-9\-[\](){}_]/,re=/^[^\],;#[]/,ye=/^[,;]/,S=/^[^ ,;#]/,W=/^[0-9]/,L=/^[ \t\n\r]/,le=M("title"),p=H("#",!1),w=ne([`
`,"\r"],!0,!1,!1),I=M("comment"),Ee=M("rule end"),T=H(";",!1),R=M("rule"),X=H(":-",!1),ce=M("condition"),Me=H("OR",!1),Ue=H("AND",!1),Ve=H("NOT",!1),ds=H(",",!1),it=M("question"),ps=H("$",!1),ot=ne(["$",",",";","#"],!0,!1,!1),hs=M("variable name"),ms=ne([["a","z"],["A","Z"]],!1,!1,!1),at=ne([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),ws=M("item"),bs=M("category"),$s=H("[",!1),As=H("]",!1),ys=M("category name"),lt=ne(["]",",",";","#","["],!0,!1,!1),Es=M("item name"),Ss=M("word"),vs=ne([",",";"],!1,!1,!1),ct=ne([" ",",",";","#"],!0,!1,!1),ks=M("weight"),Ts=H("kg",!1),Rs=H("g",!1),xs=M("number"),Re=ne([["0","9"]],!1,!1,!1),Cs=H(".",!1),ut=ne([" ","	",`
`,"\r"],!1,!1,!1),Ns=Ks();function Os(t,r){return r.title=t?.trim(),r.rulesContainComments=Rt,r;}function Is(t){if(t.trim().length)return t.trim();}function Ds(t){if(t.trim().length)return Rt=!0,t.trim();}function Ls(t,r){return er(t,r);}function _s(t){return Wt(t);}function Ps(t){return Pt(t);}function Ws(t){return new ee(t);}function Ms(t){return new B(t);}function Us(t,r){return new ie(t.trim(),r.trim());}function Vs(t,r){let{name:i,weight:l}=r;return new oe(t.trim(),i,l);}function Fs(t,r){return o.trackWeight;}function js(t,r){let i=t.trim();return i.length||ft("item name"),{name:i,weight:r};}function zs(t){let r=t.trim();return r.length||ft("item name"),{name:r,weight:void 0};}function Hs(t){return t*1e3;}function Bs(){return parseFloat(qs());}let n=o.peg$currPos|0,C=n,he=[{line:1,column:1}],Q=n,xe=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,Se;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');d=c[o.startRule];}function qs(){return s.substring(C,n);}function Cr(){return C;}function Nr(){return{source:a,start:C,end:n};}function Or(){return ve(C,n);}function ft(t,r){throw r=r!==void 0?r:ve(C,n),dt([M(t)],s.substring(C,n),r);}function Ir(t,r){throw r=r!==void 0?r:ve(C,n),Ys(t,r);}function Gs(t=n){let r=s.codePointAt(t);return r===void 0?"":String.fromCodePoint(r);}function H(t,r){return{type:"literal",text:t,ignoreCase:r};}function ne(t,r,i,l){return{type:"class",parts:t,inverted:r,ignoreCase:i,unicode:l};}function Ks(){return{type:"any"};}function Qs(){return{type:"end"};}function M(t){return{type:"other",description:t};}function gt(t){let r=he[t],i;if(r)return r;if(t>=he.length)i=he.length-1;else for(i=t;!he[--i];);for(r=he[i],r={line:r.line,column:r.column};i<t;)s.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return he[t]=r,r;}function ve(t,r,i){let l=gt(t),f=gt(r),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function m(t){n<Q||(n>Q&&(Q=n,xe=[]),xe.push(t));}function Ys(t,r){return new fe(t,null,null,r);}function dt(t,r,i){return new fe(fe.buildMessage(t,r),t,r,i);}function pt(){let t,r,i,l,f,g,y,U;for(t=n,r=v(),i=Js(),i===e&&(i=null),l=v(),f=[],g=Fe();g!==e;)f.push(g),g=n,y=ht(),y!==e?(y=Fe(),y===e?(n=g,g=e):g=y):g=y;return g=ht(),g===e&&(g=null),y=v(),U=Tt(),U!==e?(C=t,t=Os(i,f)):(n=t,t=e),t;}function Js(){let t,r,i,l,f,g;if(u++,t=n,s.charCodeAt(n)===35?(r=h,n++):(r=e,u===0&&m(p)),r!==e){if(i=v(),l=n,f=[],g=s.charAt(n),Z.test(g)?n++:(g=e,u===0&&m(w)),g!==e)for(;g!==e;)f.push(g),g=s.charAt(n),Z.test(g)?n++:(g=e,u===0&&m(w));else f=e;f!==e?l=s.substring(l,n):l=f,l!==e?(f=v(),C=t,t=Is(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(le)),t;}function me(){let t,r,i,l,f;if(u++,t=n,s.charCodeAt(n)===35?(r=h,n++):(r=e,u===0&&m(p)),r!==e){if(i=n,l=[],f=s.charAt(n),Z.test(f)?n++:(f=e,u===0&&m(w)),f!==e)for(;f!==e;)l.push(f),f=s.charAt(n),Z.test(f)?n++:(f=e,u===0&&m(w));else l=e;l!==e?i=s.substring(i,n):i=l,i!==e?(l=v(),C=t,t=Ds(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(I)),t;}function ht(){let t,r,i,l,f,g;if(u++,t=n,r=v(),s.charCodeAt(n)===59?(i=b,n++):(i=e,u===0&&m(T)),i!==e){for(l=v(),f=[],g=me();g!==e;)f.push(g),g=me();g=v(),r=[r,i,l,f,g],t=r;}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(Ee)),t;}function Fe(){let t,r,i,l,f,g,y,U;for(u++,t=n,r=[],i=me();i!==e;)r.push(i),i=me();return i=v(),l=mt(),l===e&&(l=null),f=v(),s.substr(n,2)===P?(g=P,n+=2):(g=e,u===0&&m(X)),g!==e?(y=v(),U=$t(),C=t,t=Ls(l,U)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(R)),t;}function mt(){let t,r;return u++,t=Zs(),u--,t===e&&(r=e,u===0&&m(ce)),t;}function Zs(){let t,r,i,l,f,g,y,U;for(u++,t=n,r=n,i=[],l=wt();l!==e;)i.push(l),l=n,f=n,g=v(),s.substr(n,2)===G?(y=G,n+=2):(y=e,u===0&&m(Me)),y!==e?(U=v(),g=[g,y,U],f=g):(n=f,f=e),f!==e?(f=wt(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(C=t,r=_s(r)),t=r,u--,t===e&&(r=e,u===0&&m(ce)),t;}function wt(){let t,r,i,l,f,g,y,U;for(u++,t=n,r=n,i=[],l=je();l!==e;)i.push(l),l=n,f=n,g=v(),s.substr(n,3)===K?(y=K,n+=3):(y=e,u===0&&m(Ue)),y!==e?(U=v(),g=[g,y,U],f=g):(n=f,f=e),f!==e?(f=je(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(C=t,r=Ps(r)),t=r,u--,t===e&&(r=e,u===0&&m(ce)),t;}function je(){let t,r,i,l,f,g;return u++,t=n,s.substr(n,3)===z?(r=z,n+=3):(r=e,u===0&&m(Ve)),r!==e?(i=v(),s.substr(n,3)===z?(l=z,n+=3):(l=e,u===0&&m(Ve)),l!==e?(f=v(),g=je(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s.substr(n,3)===z?(r=z,n+=3):(r=e,u===0&&m(Ve)),r!==e?(i=v(),l=bt(),l!==e?(C=t,t=Ws(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=bt(),r!==e?t=r:(n=t,t=e))),u--,t===e&&(r=e,u===0&&m(ce)),t;}function bt(){let t,r;return t=n,r=He(),r!==e&&(C=t,r=Ms(r)),t=r,t;}function $t(){let t,r,i,l,f,g,y,U,we;for(t=n,r=[],i=ze(),i===e&&(i=Be());i!==e;){if(r.push(i),i=n,l=n,f=v(),s.charCodeAt(n)===44?(g=A,n++):(g=e,u===0&&m(ds)),g!==e){for(y=v(),U=[],we=me();we!==e;)U.push(we),we=me();we=v(),f=[f,g,y,U,we],l=f;}else n=l,l=e;l!==e?(l=ze(),l===e&&(l=Be()),l===e?(n=i,i=e):i=l):i=l;}return t=r,t;}function ze(){let t,r,i,l;return u++,t=n,r=At(),r!==e?(s.charCodeAt(n)===36?(i=$,n++):(i=e,u===0&&m(ps)),i!==e?(l=He(),l!==e?(C=t,t=Us(r,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(it)),t;}function At(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),de.test(i)?n++:(i=e,u===0&&m(ot)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),de.test(i)?n++:(i=e,u===0&&m(ot));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&m(it)),t;}function He(){let t,r,i,l,f;if(u++,t=n,r=n,i=s.charAt(n),Ae.test(i)?n++:(i=e,u===0&&m(ms)),i!==e){for(l=[],f=s.charAt(n),pe.test(f)?n++:(f=e,u===0&&m(at));f!==e;)l.push(f),f=s.charAt(n),pe.test(f)?n++:(f=e,u===0&&m(at));i=[i,l],r=i;}else n=r,r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&m(hs)),t;}function Be(){let t,r,i,l;return u++,t=n,r=Xs(),r!==e?(i=v(),l=Et(),l!==e?(C=t,t=Vs(r,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(ws)),t;}function Xs(){let t,r,i,l,f,g;return u++,t=n,s.charCodeAt(n)===91?(r=O,n++):(r=e,u===0&&m($s)),r!==e?(i=v(),l=yt(),l!==e?(f=v(),s.charCodeAt(n)===93?(g=F,n++):(g=e,u===0&&m(As)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(bs)),t;}function yt(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),re.test(i)?n++:(i=e,u===0&&m(lt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),re.test(i)?n++:(i=e,u===0&&m(lt));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&m(ys)),t;}function Et(){let t,r,i,l,f;for(u++,t=n,r=n,i=[],l=St();l!==e;)i.push(l),l=n,f=v(),f=St(),f===e?(n=l,l=e):l=f;if(r=s.substring(r,n),i=v(),l=vt(),l!==e?(C=n,f=Fs(r,l),f?f=void 0:f=e,f!==e?(C=t,t=js(r,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,r=n,i=[],l=qe();l!==e;)i.push(l),l=n,f=v(),f=qe(),f===e?(n=l,l=e):l=f;r=s.substring(r,n),C=t,r=zs(r),t=r;}return u--,t===e&&(r=e,u===0&&m(Es)),t;}function St(){let t,r,i,l,f,g;return u++,t=n,r=n,u++,i=n,l=vt(),l!==e?(f=v(),g=Tt(),g===e&&(g=s.charAt(n),ye.test(g)?n++:(g=e,u===0&&m(vs))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?r=void 0:(n=r,r=e),r!==e?(i=qe(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(Ss)),t;}function qe(){let t,r,i;if(t=n,r=[],i=s.charAt(n),S.test(i)?n++:(i=e,u===0&&m(ct)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),S.test(i)?n++:(i=e,u===0&&m(ct));else r=e;return r!==e?t=s.substring(t,n):t=r,t;}function vt(){let t,r,i;return u++,t=n,r=kt(),r!==e?(s.substr(n,2)===ae?(i=ae,n+=2):(i=e,u===0&&m(Ts)),i!==e?(C=t,t=Hs(r)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=kt(),r!==e?(s.charCodeAt(n)===103?(i=J,n++):(i=e,u===0&&m(Rs)),i===e&&(i=null),t=r):(n=t,t=e)),u--,t===e&&(r=e,u===0&&m(ks)),t;}function kt(){let t,r,i,l,f,g,y;if(u++,t=n,r=[],i=s.charAt(n),W.test(i)?n++:(i=e,u===0&&m(Re)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),W.test(i)?n++:(i=e,u===0&&m(Re));else r=e;if(r!==e){if(i=n,s.charCodeAt(n)===46?(l=ge,n++):(l=e,u===0&&m(Cs)),l!==e){if(f=n,g=[],y=s.charAt(n),W.test(y)?n++:(y=e,u===0&&m(Re)),y!==e)for(;y!==e;)g.push(y),y=s.charAt(n),W.test(y)?n++:(y=e,u===0&&m(Re));else g=e;g!==e?f=s.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),C=t,t=Bs();}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(xs)),t;}function v(){let t,r;for(u++,t=[],r=s.charAt(n),L.test(r)?n++:(r=e,u===0&&m(ut));r!==e;)t.push(r),r=s.charAt(n),L.test(r)?n++:(r=e,u===0&&m(ut));return u--,t;}function Tt(){let t,r;return t=n,u++,s.length>n?(r=s.charAt(n),n++):(r=e,u===0&&m(Ns)),u--,r===e?t=void 0:(n=t,t=e),t;}let Rt=!1;Se=d();let Ge=Se!==e&&n===s.length;function xt(){throw Se!==e&&n<s.length&&m(Qs()),dt(xe,Q<s.length?Gs(Q):null,Q<s.length?ve(Q,Q+1):ve(Q,Q));}if(o.peg$library)return{peg$result:Se,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:xe,peg$maxFailPos:Q,peg$success:Ge,peg$throw:Ge?void 0:xt};if(Ge)return Se;xt();}var sr={isTrackWeight:()=>!1},rr=new V("PARSER_CONFIG_PROVIDER"),_e=(()=>{class s{config=k(rr,{optional:!0})??sr;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return q(e,this.makeOptions("Condition"));}parseQuestion(e){return q(e,this.makeOptions("Question"));}parseItem(e){return q(e,this.makeOptions("Item"));}parseEffects(e){return q(e,this.makeOptions("Effects"));}parseRule(e){return q(e,this.makeOptions("Rule"));}parseRules(e){try{return q(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Fehler beim Parsen der Regeln"),a instanceof fe){let d=a.location.start.line.toString(),h=a.location.start.column.toString();c.push(" at line ",d," column ",h),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){q(e,this.makeOptions("VariableName"));}validateQuestionString(e){q(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){q(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){q(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return q(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||s)();};static ɵprov=Ne({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();var Ke=(()=>{class s{parser=k(_e);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(d=>d.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let d of c.items)a.add(d.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(h=>this.renameVariable(e,a,h));if(c instanceof ie)return c.variable===e?new ie(c.question,a):c;if(c instanceof ue)return new ue(this.renameVariable(e,a,c.condition),c.questions.map(h=>this.renameVariable(e,a,h)),c.items);if(c instanceof B)return c.variable===e?new B(a):c;if(c instanceof ee)return new ee(this.renameVariable(e,a,c.not));if(c instanceof te)return new te(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof se)return new se(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let d=c;throw new Error("Unknown item type: "+d);}filterActive(e){let a=e.rules.filter(d=>d.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((d,h)=>D(x({},d),{[h]:e.model[h]}),{[be.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof ue)return this.contains(e.condition,a)||e.questions.some(h=>this.contains(h,a))||e.items.some(h=>this.contains(h,a));if(e instanceof ie)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof oe)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof B)return e.variable.toLowerCase().includes(c);if(e instanceof ee)return this.contains(e.not,a);if(e instanceof te)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof se)return this.contains(e.left,a)||this.contains(e.right,a);let d=e;throw new Error("Unknown item type: "+d);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((d,h)=>{let b;return this.parser.isTrackWeight()?b=h.weight?1:0:b=this.parser.forceParseWeight(h.name)?1:0,{items:d.items+1,weights:d.weights+b};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||s)();};static ɵprov=Ne({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();function Kr(s){let o=s.title?.trim();return(o?`# ${o}

`:"")+s.map(a=>nr(a)).map(a=>a+";").join(`

`);}function Qe(s,o,e=-1){if(!s)return"0g";let a=(e<0?s/1e3:(s/1e3).toFixed(e)).toString()+"kg",c=s.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Qr(s,o){return Qe(s,void 0,1)+" / "+Qe(o,void 0,1);}function nr(s){let o=[];if(!(s.condition instanceof be)){let a=$e(s.condition);a&&o.push(a," ");}o.push(":-");let e=s.questions.map(a=>ir(a)).concat(s.items.map(a=>or(a)));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}function ir(s){return s.question+" $"+s.variable;}function or(s){let o=`[${s.category}] ${s.name}`.trim();return s.weight&&(o+=" "+Qe(s.weight)),o;}function $e(s){if(s instanceof B)return s.variable;if(s instanceof ee)return"NOT "+$e(s.not);if(s instanceof te)return $e(s.left)+" AND "+$e(s.right);if(s instanceof se)return $e(s.left)+" OR "+$e(s.right);throw new Error("Unknown condition type");}function ar(s,o){return Object.entries(s).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=x(x({},e[a]),c),e),{});}var Te=new V("RESET_SIGNAL",{providedIn:"root",factory:()=>N(!1)}),Pe=class s{state;triggerReset=k(Te);constructor(o){this.state=o;}static builder(){return new s({});}extend(o){return new s(ar(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function Ut(s,o){if(typeof s!=typeof o)return!1;if(s&&o&&typeof s=="object"){let e=Object.keys(s),a=Object.keys(o);return e.length===a.length&&e.every(c=>Ut(s[c],o[c]));}return s===o;}function Mt(s,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[s]??o;}function lr(s,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);Ut(o,e)?delete c[s]:o===null?c[s]=void 0:c[s]=o,this.setItem("state",JSON.stringify(c));}function Vt(s,o,e){let a=k(Te),c=N(Mt.call(s,o,e));return _(()=>{let d=c();d!==Mt.call(s,o,e)&&lr.call(s,o,d,e);},{manualCleanup:!0}),_(()=>{a()&&c.set(e);}),c;}var Y=(s,o)=>Vt(localStorage,s,o),We=(s,o)=>Vt(sessionStorage,s,o);var j=Y,Ft=["en","de"],jt=()=>{let s=j("categorySorting","alphabetically"),o=j("trackWeight",!1);return _(()=>{o()===!1&&s()==="weight"&&s.set("alphabetically");}),{config:{categorySorting:s,trackWeight:o,skipItems:j("skipItems",!1),fadeOutDisabledRules:j("fadeOutDisabledRules",!1),highlightVariableStatus:j("highlightVariableStatus",!1),refactorVariables:j("refactorVariables",!0),confirmRuleDeletion:j("confirmRuleDeletion",!0),rulesTemplate:j("rulesTemplate","default"),theme:j("theme","system"),fontSize:j("fontSize","normal"),accessibility:j("accessibility","accessible"),animations:j("animations",!0),language:j("language","auto"),exportReminder:j("exportReminder",!1)}};};var zt=({config:{language:s}})=>{let o=N(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:E(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:E(()=>{let e=s();return e==="auto"?navigator.languages.map(d=>d.split("-")[0]).find(d=>Ft.includes(d))??"en":e;})}};};var Ht=(s,o)=>We(s,o),Bt=()=>({clipboard:{items:Ht("clipboardItems",[]),questions:Ht("clipboardQuestions",[])}});var qt=Y;function cr(s){return"cat-"+s.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Je=class extends oe{original;checked;skipped;colored;visible;constructor(o,e,a,c,d){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c,this.visible=d;}};function Ye(){return{answers:{},checkedItems:[],skippedItems:[],collapsedCategories:[],answersLocked:!1,hideCompleted:!1,statsVisible:void 0,createdAt:Date.now(),modifiedAt:Date.now()};}var Gt=({rules:{parsed:s,raw:o},config:{categorySorting:e,skipItems:a}})=>{let c=qt("packlistSessions",[Ye(),void 0,void 0,void 0]),d=qt("currentPacklistSessionIndex",0),h=E(()=>c()[d()]??Ye());function b(p){c.update(w=>{let I=p(w[d()]??Ye());return w.map((Ee,T)=>T===d()?I:Ee);});}function P(p){b(w=>D(x({},w),{sessionName:p,modifiedAt:Date.now()}));}function G(p,w){b(I=>D(x({},I),{answers:D(x({},I.answers),{[p]:w}),modifiedAt:Date.now()}));}function K(){b(p=>D(x({},p),{answersLocked:!p.answersLocked,modifiedAt:Date.now()}));}function z(){b(p=>D(x({},p),{hideCompleted:!p.hideCompleted,modifiedAt:Date.now()}));}function A(p){b(w=>D(x({},w),{statsVisible:p,modifiedAt:Date.now()}));}let $=We("askedWeightTracking",void 0),O=k(Ke),F=E(()=>O.filterActive({rules:s.value(),model:h().answers})),ae=E(()=>F().rules),J=E(()=>ae().flatMap(p=>p.items)),ge=E(()=>J().filter(p=>h().checkedItems.includes(p.id())));function Z(p){h().checkedItems.includes(p.id())?b(w=>D(x({},w),{checkedItems:w.checkedItems.filter(I=>I!==p.id()),modifiedAt:Date.now()})):b(w=>D(x({},w),{checkedItems:[...w.checkedItems,p.id()],modifiedAt:Date.now()}));}let de=E(()=>J().filter(p=>h().skippedItems.includes(p.id())));function Ae(p){a()&&(h().skippedItems.includes(p.id())?b(w=>D(x({},w),{skippedItems:w.skippedItems.filter(I=>I!==p.id()),modifiedAt:Date.now()})):b(w=>D(x({},w),{skippedItems:[...w.skippedItems,p.id()],modifiedAt:Date.now()})));}function pe(p){h().collapsedCategories.includes(p)?b(w=>D(x({},w),{collapsedCategories:w.collapsedCategories.filter(I=>I!==p),modifiedAt:Date.now()})):b(w=>D(x({},w),{collapsedCategories:[...w.collapsedCategories,p],modifiedAt:Date.now()}));}let re=N([]);function ye(p){(re().length!==p.length||!p.every(w=>re().includes(w)))&&re.set(p);}let S=E(()=>{function p(T){return{id:cr(T.category),name:T.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:h().collapsedCategories.includes(T.category),colored:h().statsVisible==="distribution"};}let w=J().reduce((T,R)=>{T[R.category]||(T[R.category]=p(R));let X=a()&&de().includes(R),ce=!X&&ge().includes(R),Me=h().statsVisible==="heaviestItems"&&re().includes(R.id()),Ue=h().hideCompleted?!ce&&!X:!0;return T[R.category].items.push(new Je(R,ce,X,Me,Ue)),ce&&(T[R.category].checkedItems++,T[R.category].checkedWeight+=R.weight??0),X||(T[R.category].totalItems++,T[R.category].totalWeight+=R.weight??0),T;},{}),Ee=E(()=>{let T=e();return T==="alphabetically"?(R,X)=>R.name.localeCompare(X.name):T==="weight"?(R,X)=>X.totalWeight-R.totalWeight:()=>0;})();return Object.entries(w).map(T=>T[1]).toSorted((T,R)=>Ee(T,R));}),W=E(()=>Object.entries(S()).reduce((p,[,w])=>(p.totalItems+=w.totalItems,p.checkedItems+=w.checkedItems,p.totalWeight+=w.totalWeight,p.checkedWeight+=w.checkedWeight,p),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));function L(){b(p=>D(x({},p),{answersLocked:!1,hideCompleted:!1,statsVisible:void 0,modifiedAt:Date.now()}));}let le=!0;return _(()=>{o.hasValue()&&o.value()&&(le?le=!1:L());}),{rules:{categories:E(()=>O.extractCategories(s.value())),variables:E(()=>O.extractVariables(s.value()))},active:{rules:ae,answers:E(()=>F().model),questions:E(()=>ae().flatMap(p=>p.questions))},packlist:{sessions:E(()=>c().filter((p,w)=>w!==0).map((p,w)=>p?{index:w+1,sessionName:p.sessionName,modifiedAt:p.modifiedAt}:void 0)),clearSlot(p){c.update(w=>{let I=[...w];return I[p]=void 0,I;});},currentSlot:d,copySessionToSlot(p){c.update(w=>{let I=[...w];return I[p]=D(x({},h()),{modifiedAt:Date.now()}),I;});},sessionName:E(()=>h().sessionName),setSessionName:P,answers:E(()=>h().answers),updateAnswer:G,model:S,stats:W,toggleCheckedItem:Z,toggleSkippedItem:Ae,colorItems:ye,toggleCategoryCollapse:pe,isAnswersLocked:E(()=>h().answersLocked),toggleAnswersLock:K,isHideCompleted:E(()=>h().hideCompleted),toggleHideCompleted:z,isStatsVisible:E(()=>h().statsVisible),setStatsVisible:A,askedWeightTracking:$}};};var Ze=(s,o)=>{let e=k(Le),a=k(De),c=k(Te),d=N(void 0);return e.events.pipe(Ce(h=>h instanceof Ie),Ct(()=>a.snapshot.queryParams[s]??o)).subscribe(h=>{h!==""&&d.set(h);}),_(()=>{let h=d()||void 0;h===o&&(h=void 0),a.snapshot.queryParams[s]!==h&&e.navigate([],{queryParams:{[s]:h},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),_(()=>{c()&&d.set(o);}),d;};var ur={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});},"config#session->restore"(){this.router.navigate(["/session"],{queryParams:{type:"restore"}});},"config#session->new"(){this.router.navigate(["/session"],{queryParams:{type:"new"}});}},Kt=()=>{let s=k(Le),o=k(De),e=Ze("rulesMode","view"),a=Dt(o.fragment,{requireSync:!0}),c=Oe(()=>a()??void 0);_(()=>{let b=c();b!==a()&&s.navigate([],{fragment:b,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let d=k(It),h=N(d.path());return s.events.pipe(Ce(b=>b instanceof Ie)).subscribe(()=>{d.path()!==h()&&h.set(d.path());}),{router:{rulesMode:e,filterRulesQuery:Ze("filterRulesQuery",void 0),path:h.asReadonly(),fragment:c,go:b=>{ur[b].call({router:s,rulesMode:e});}}};};var Xe=class{parser;raw;trackWeight;setCurrentTitle;value=N([]);error=N(void 0);status=N("idle");constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,_(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let d=this.parser.parseRules(this.raw.value());d.title&&this.setCurrentTitle(d.title),this.value.set(d),this.error.set(void 0),this.status.set("resolved");}catch(d){this.error.set(d),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},Qt=({config:{trackWeight:s},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new Xe(k(_e),o,s,e);return{rules:{parsed:a.asReadonly(),hasError:E(()=>a.status()==="error"||o.status()==="error"),isLoading:E(()=>a.isLoading()||o.isLoading())}};};var Yt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Jt={name:"GitHub Gist",test:s=>Yt.test(s),transform:s=>{let o=Yt.exec(s);if(!o)return s;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var et=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Zt=new et();var Xt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,fr={name:"Google Drive",needsCORS:!0,test:s=>Xt.test(s),transform:s=>{let o=Xt.exec(s);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:s;}},es=fr;var gr={name:"Pastebin",needsCORS:!0,test:s=>s.startsWith("https://pastebin.com/")&&!s.includes("/raw/"),transform:s=>s.replace("https://pastebin.com/","https://pastebin.com/raw/")},ts=gr;var dr=[Jt,Zt,es,ts];function ss(s,o){if(s){let e=dr.find(a=>a.test(s));if(e){let a=e.transform(s);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return s;}var rs=`# Packlist for a Multi-Day Backpacking Adventure

:-
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
`;var ns=`# Beispiel Packliste

:-
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
`;var is=`# Example Packlist

:-
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
`;var os=`:- [Neu] Dies ist dein erster Gegenstand;
`;var as=`:- [New] This is your first item;
`;var ls=`# Example Logic Demonstration

:-
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
`;var tt=new V("BACKPACKING_RULES_TEMPLATE");function Ar(){return rs;}var st=new V("DEFAULT_RULES_TEMPLATE");function yr(s){return s.startsWith("de")?ns:is;}var rt=new V("EMPTY_RULES_TEMPLATE");function Er(s){return s.startsWith("de")?os:as;}var nt=new V("LOGIC_RULES_TEMPLATE");function Sr(){return ls;}function li(){return Nt([{provide:tt,useFactory:Ar,deps:[ke]},{provide:st,useFactory:yr,deps:[ke]},{provide:rt,useFactory:Er,deps:[ke]},{provide:nt,useFactory:Sr,deps:[ke]}]);}var cs=new V("CAPACITOR_HTTP_REQUEST_MODE");function vr(s){switch(s){case 400:return"Ung\xFCltige Anfrage";case 401:return"Nicht autorisiert";case 403:return"Verboten";case 404:return"Nicht gefunden";case 500:return"interner Serverfehler";case 504:return"Zeit\xFCberschreitung";default:return;}}var us=({config:{rulesTemplate:s}})=>{let o=Y("rulesMode","template"),e=Y("rules",void 0),a=E(()=>e()!==void 0),c=E(()=>{let S=e();if(S)return kr(S).toString(16);}),d=Y("lastExportHash",void 0),h=Y("lastExportDate",void 0),b=()=>{d.set(c()),h.set(new Date().getTime());},P=N(new Date().getTime());_(()=>{e(),P.set(new Date().getTime());});let G=k(st),K=k(rt),z=k(nt),A=k(tt),$=E(()=>{switch(s()){case"empty":return K;case"logic":return z;case"backpacking":return A;default:return G;}}),O=Y("remoteHistory",[]),F=Y("remoteHistoryTitle",{}),ae=function(S){O.update(W=>W.filter(L=>L!==S)),F.update(W=>{let L=x({},W);return delete L[S],L;});},J=Oe(()=>o()==="remote"?O()[0]:void 0),ge=k(cs,{optional:!0})??"cors",Z=Ot({params:()=>({mode:o(),rawLocal:e(),remote:J(),template:$()}),loader:({params:S})=>{switch(S.mode){case"local":return Promise.resolve(S.rawLocal);case"template":return Promise.resolve(S.template);case"remote":if(S.remote){if(!S.remote.startsWith("http"))throw new Error("Invalid URL");let W=ss(S.remote,ge==="cors");return Lt.get({url:W,webFetchExtra:{mode:ge}}).then(L=>{if(L.status>=200&&L.status<300)return O.update(le=>[S.remote,...le.filter(p=>p!==S.remote)]),L.data;{let le=[["HTTP Fehler",L.status.toString()].join(" "),vr(L.status)].join(": ");throw new Error(le);}});}else return Promise.resolve(void 0);}}}),de=function(S){J()!==S&&(o.set("remote"),J.set(S));},Ae=function(S){let W=J();o()==="remote"&&W&&F.update(L=>D(x({},L),{[W]:S}));},pe=function(S){o.set("local"),e.set(S);},re=function(){e.set(Z.value()),o.set("local"),b();},ye=function(){Z.reload();};return{rules:{mode:o,raw:Z.asReadonly(),reload:ye,lastAction:P.asReadonly(),hash:c,exportNeeded:E(()=>o()==="local"&&c()!==d()),markAsCurrent:b,localRulesAvailable:a},export:{lastDate:h.asReadonly()},localRules:{updateRules:pe,copyFromCurrent:re},remoteRules:{load:de,setCurrentTitle:Ae,history:E(()=>O().map(S=>({url:S,title:F()[S]}))),removeFromHistory:ae}};},kr=function(s,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,d;c<s.length;c++)d=s.charCodeAt(c),e=Math.imul(e^d,2654435761),a=Math.imul(a^d,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var fs=()=>({serviceWorker:{status:N("init")}});function Tr(){return Pe.builder().extend(Kt).extend(Bt).extend(fs).extend(jt).extend(zt).extend(us).extend(Qt).extend(Gt);}var gs=new V("STATE_BUILDER",{providedIn:"root",factory:()=>Tr()}),Rr=new V("GLOBAL_STATE",{providedIn:"root",factory:()=>k(gs).build()}),xr=new V("RESET_SWITCH",{providedIn:"root",factory:()=>{let s=k(gs);return async()=>{await s.reset();};}});export{ue as a,ie as b,oe as c,B as d,Dr as e,be as f,ee as g,te as h,se as i,fe as j,rr as k,_e as l,Ke as m,Kr as n,Qe as o,Qr as p,ir as q,or as r,li as s,cs as t,Rr as u,xr as v};/**i18n:1e46c8204f38df38d095c36b85005d70b26c53f2afa257bd2af7cc57ec9b3308*/