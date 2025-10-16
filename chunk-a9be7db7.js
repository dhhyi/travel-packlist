import{b as Pt,l as Wt,m as Le,n as _e,p as Pe}from"./chunk-9f7bbd74.js";import{d as Mt}from"./chunk-ebb84b43.js";import{A as Oe,X as Ie,_ as F,aa as k,ba as Lt,oa as N,r as Dt,tc as ke,vc as A,wc as P,xc as De,yc as _t}from"./chunk-5cc3cef7.js";import{a as C,b as D}from"./chunk-0b432020.js";var ue=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}},ie=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}};function Vt(s){return s?s.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var oe=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${Vt(this.category)}-${Vt(this.name)}`;}},B=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}},We=(()=>{class s extends B{static string="please_select";constructor(){super(s.string);}}return s;})(),fe=(()=>{class s extends B{static string="always";constructor(){super(s.string);}evaluate(){return!0;}}return s;})(),Y=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}},J=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}},Z=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}};function ir(s,o){let e=o.filter(c=>c instanceof ie),a=o.filter(c=>c instanceof oe);return new ue(s??new fe(),e,a);}function Ft(s){return s.length===1?s[0]:new J(s[0],Ft(s.slice(1)));}function Ut(s){return s.length===1?s[0]:new Z(s[0],Ut(s.slice(1)));}var ge=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(W=>W.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let d=this.location.start,p=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(d):d,b=this.location.source+":"+p.line+":"+p.column;if(a){let W=this.location.end,G="".padEnd(p.line.toString().length," "),K=a[d.line-1],S=(d.line===W.line?W.column:K.length+1)-d.column||1;e+=`
 --> `+b+`
`+G+` |
`+p.line+" | "+K+`
`+G+" | "+"".padEnd(d.column-1," ")+"".padEnd(S,"^");}else e+=`
 at `+b;}return e;}static buildMessage(o,e){function a(S){return S.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function d(S){return c?S.replace(c,$=>"\\u{"+a($)+"}"):S;}function p(S){return d(S.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}function b(S){return d(S.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}let W={literal(S){return'"'+p(S.text)+'"';},class(S){let $=S.parts.map(O=>Array.isArray(O)?b(O[0])+"-"+b(O[1]):b(O));return"["+(S.inverted?"^":"")+$.join("")+"]"+(S.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(S){return S.description;}};function G(S){return W[S.type](S);}function K(S){let $=S.map(G);if($.sort(),$.length>0){let O=1;for(let U=1;U<$.length;U++)$[U-1]!==$[U]&&($[O]=$[U],O++);$.length=O;}switch($.length){case 1:return $[0];case 2:return $[0]+" or "+$[1];default:return $.slice(0,-1).join(", ")+", or "+$[$.length-1];}}function z(S){return S?'"'+p(S)+'"':"end of input";}return"Expected "+K(o)+" but "+z(e)+" found.";}};function q(s,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:bt,Rule:He,Condition:St,Effects:Et,Question:qe,Item:Ke,VariableName:Ge,QuestionString:vt,ItemNameAndWeight:Tt,CategoryName:kt},d=bt,p="#",b=";",W=":-",G="OR",K="AND",z="NOT",S=",",$="$",O="[",U="]",ae="kg",ee="g",de=".",te=/^[^\n\r]/,pe=/^[^$,;#]/,Se=/^[a-zA-Z]/,he=/^[a-zA-Z0-9\-[\](){}_]/,re=/^[^\],;#[]/,ye=/^[,;]/,E=/^[^ ,;#]/,M=/^[0-9]/,L=/^[ \t\n\r]/,le=V("title"),h=H("#",!1),w=ne([`
`,"\r"],!0,!1,!1),I=V("comment"),Ae=V("rule end"),T=H(";",!1),R=V("rule"),se=H(":-",!1),ce=V("condition"),Ue=H("OR",!1),je=H("AND",!1),ze=H("NOT",!1),ws=H(",",!1),ct=V("question"),bs=H("$",!1),ut=ne(["$",",",";","#"],!0,!1,!1),$s=V("variable name"),Ss=ne([["a","z"],["A","Z"]],!1,!1,!1),ft=ne([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),ys=V("item"),As=V("category"),Es=H("[",!1),vs=H("]",!1),ks=V("category name"),gt=ne(["]",",",";","#","["],!0,!1,!1),Ts=V("item name"),Rs=V("word"),xs=ne([",",";"],!1,!1,!1),dt=ne([" ",",",";","#"],!0,!1,!1),Cs=V("weight"),Ns=H("kg",!1),Os=H("g",!1),Is=V("number"),Re=ne([["0","9"]],!1,!1,!1),Ds=H(".",!1),pt=ne([" ","	",`
`,"\r"],!1,!1,!1),Ls=Xs();function _s(t,r,i){return r.title=t?.trim(),r.rulesContainComments=Ot,r.warnings=i,r;}function Ps(t){if(t.trim().length)return t.trim();}function Ws(t){if(t.trim().length)return Ot=!0,t.trim();}function Ms(t,r){return ir(t,r);}function Vs(t){return Ut(t);}function Fs(t){return Ft(t);}function Us(t){return new Y(t);}function js(t){return Ye.add(t),new B(t);}function zs(t,r){return Ce.has(r)&&Ne.push({variable:r,type:"duplicate"}),Ce.add(r),new ie(t.trim(),r);}function Hs(t,r){let{name:i,weight:l}=r;return new oe(t.trim(),i,l);}function Bs(t,r){return o.trackWeight;}function qs(t,r){let i=t.trim();return i.length||ht("item name"),{name:i,weight:r};}function Gs(t){let r=t.trim();return r.length||ht("item name"),{name:r,weight:void 0};}function Ks(t){return t*1e3;}function Qs(){return parseFloat(Js());}function Ys(){for(let t of Ye)t!==We.string&&t!==fe.string&&!Ce.has(t)&&Ne.push({variable:t,type:"undeclared"});for(let t of Ce)Ye.has(t)||Ne.push({variable:t,type:"unused"});return Ne;}let n=o.peg$currPos|0,x=n,me=[{line:1,column:1}],Q=n,xe=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,Ee;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');d=c[o.startRule];}function Js(){return s.substring(x,n);}function Lr(){return x;}function _r(){return{source:a,start:x,end:n};}function Pr(){return ve(x,n);}function ht(t,r){throw r=r!==void 0?r:ve(x,n),wt([V(t)],s.substring(x,n),r);}function Wr(t,r){throw r=r!==void 0?r:ve(x,n),tr(t,r);}function Zs(t=n){let r=s.codePointAt(t);return r===void 0?"":String.fromCodePoint(r);}function H(t,r){return{type:"literal",text:t,ignoreCase:r};}function ne(t,r,i,l){return{type:"class",parts:t,inverted:r,ignoreCase:i,unicode:l};}function Xs(){return{type:"any"};}function er(){return{type:"end"};}function V(t){return{type:"other",description:t};}function mt(t){let r=me[t],i;if(r)return r;if(t>=me.length)i=me.length-1;else for(i=t;!me[--i];);for(r=me[i],r={line:r.line,column:r.column};i<t;)s.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return me[t]=r,r;}function ve(t,r,i){let l=mt(t),f=mt(r),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function m(t){n<Q||(n>Q&&(Q=n,xe=[]),xe.push(t));}function tr(t,r){return new ge(t,null,null,r);}function wt(t,r,i){return new ge(ge.buildMessage(t,r),t,r,i);}function bt(){let t,r,i,l,f,g,y,_;for(t=n,r=v(),i=sr(),i===e&&(i=null),l=v(),f=[],g=He();g!==e;)f.push(g),g=n,y=$t(),y!==e?(y=He(),y===e?(n=g,g=e):g=y):g=y;return g=$t(),g===e&&(g=null),y=v(),_=Nt(),_!==e?(x=t,t=_s(i,f,_)):(n=t,t=e),t;}function sr(){let t,r,i,l,f,g;if(u++,t=n,s.charCodeAt(n)===35?(r=p,n++):(r=e,u===0&&m(h)),r!==e){if(i=v(),l=n,f=[],g=s.charAt(n),te.test(g)?n++:(g=e,u===0&&m(w)),g!==e)for(;g!==e;)f.push(g),g=s.charAt(n),te.test(g)?n++:(g=e,u===0&&m(w));else f=e;f!==e?l=s.substring(l,n):l=f,l!==e?(f=v(),x=t,t=Ps(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(le)),t;}function we(){let t,r,i,l,f;if(u++,t=n,s.charCodeAt(n)===35?(r=p,n++):(r=e,u===0&&m(h)),r!==e){if(i=n,l=[],f=s.charAt(n),te.test(f)?n++:(f=e,u===0&&m(w)),f!==e)for(;f!==e;)l.push(f),f=s.charAt(n),te.test(f)?n++:(f=e,u===0&&m(w));else l=e;l!==e?i=s.substring(i,n):i=l,i!==e?(l=v(),x=t,t=Ws(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(I)),t;}function $t(){let t,r,i,l,f,g;if(u++,t=n,r=v(),s.charCodeAt(n)===59?(i=b,n++):(i=e,u===0&&m(T)),i!==e){for(l=v(),f=[],g=we();g!==e;)f.push(g),g=we();g=v(),r=[r,i,l,f,g],t=r;}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(Ae)),t;}function He(){let t,r,i,l,f,g,y,_;for(u++,t=n,r=[],i=we();i!==e;)r.push(i),i=we();return i=v(),l=St(),l===e&&(l=null),f=v(),s.substr(n,2)===W?(g=W,n+=2):(g=e,u===0&&m(se)),g!==e?(y=v(),_=Et(),x=t,t=Ms(l,_)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(R)),t;}function St(){let t,r;return u++,t=rr(),u--,t===e&&(r=e,u===0&&m(ce)),t;}function rr(){let t,r,i,l,f,g,y,_;for(u++,t=n,r=n,i=[],l=yt();l!==e;)i.push(l),l=n,f=n,g=v(),s.substr(n,2)===G?(y=G,n+=2):(y=e,u===0&&m(Ue)),y!==e?(_=v(),g=[g,y,_],f=g):(n=f,f=e),f!==e?(f=yt(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(x=t,r=Vs(r)),t=r,u--,t===e&&(r=e,u===0&&m(ce)),t;}function yt(){let t,r,i,l,f,g,y,_;for(u++,t=n,r=n,i=[],l=Be();l!==e;)i.push(l),l=n,f=n,g=v(),s.substr(n,3)===K?(y=K,n+=3):(y=e,u===0&&m(je)),y!==e?(_=v(),g=[g,y,_],f=g):(n=f,f=e),f!==e?(f=Be(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(x=t,r=Fs(r)),t=r,u--,t===e&&(r=e,u===0&&m(ce)),t;}function Be(){let t,r,i,l,f,g;return u++,t=n,s.substr(n,3)===z?(r=z,n+=3):(r=e,u===0&&m(ze)),r!==e?(i=v(),s.substr(n,3)===z?(l=z,n+=3):(l=e,u===0&&m(ze)),l!==e?(f=v(),g=Be(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s.substr(n,3)===z?(r=z,n+=3):(r=e,u===0&&m(ze)),r!==e?(i=v(),l=At(),l!==e?(x=t,t=Us(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=At(),r!==e?t=r:(n=t,t=e))),u--,t===e&&(r=e,u===0&&m(ce)),t;}function At(){let t,r;return t=n,r=Ge(),r!==e&&(x=t,r=js(r)),t=r,t;}function Et(){let t,r,i,l,f,g,y,_,be;for(t=n,r=[],i=qe(),i===e&&(i=Ke());i!==e;){if(r.push(i),i=n,l=n,f=v(),s.charCodeAt(n)===44?(g=S,n++):(g=e,u===0&&m(ws)),g!==e){for(y=v(),_=[],be=we();be!==e;)_.push(be),be=we();be=v(),f=[f,g,y,_,be],l=f;}else n=l,l=e;l!==e?(l=qe(),l===e&&(l=Ke()),l===e?(n=i,i=e):i=l):i=l;}return t=r,t;}function qe(){let t,r,i,l;return u++,t=n,r=vt(),r!==e?(s.charCodeAt(n)===36?(i=$,n++):(i=e,u===0&&m(bs)),i!==e?(l=Ge(),l!==e?(x=t,t=zs(r,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(ct)),t;}function vt(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),pe.test(i)?n++:(i=e,u===0&&m(ut)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),pe.test(i)?n++:(i=e,u===0&&m(ut));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&m(ct)),t;}function Ge(){let t,r,i,l,f;if(u++,t=n,r=n,i=s.charAt(n),Se.test(i)?n++:(i=e,u===0&&m(Ss)),i!==e){for(l=[],f=s.charAt(n),he.test(f)?n++:(f=e,u===0&&m(ft));f!==e;)l.push(f),f=s.charAt(n),he.test(f)?n++:(f=e,u===0&&m(ft));i=[i,l],r=i;}else n=r,r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&m($s)),t;}function Ke(){let t,r,i,l;return u++,t=n,r=nr(),r!==e?(i=v(),l=Tt(),l!==e?(x=t,t=Hs(r,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(ys)),t;}function nr(){let t,r,i,l,f,g;return u++,t=n,s.charCodeAt(n)===91?(r=O,n++):(r=e,u===0&&m(Es)),r!==e?(i=v(),l=kt(),l!==e?(f=v(),s.charCodeAt(n)===93?(g=U,n++):(g=e,u===0&&m(vs)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(As)),t;}function kt(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),re.test(i)?n++:(i=e,u===0&&m(gt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),re.test(i)?n++:(i=e,u===0&&m(gt));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&m(ks)),t;}function Tt(){let t,r,i,l,f;for(u++,t=n,r=n,i=[],l=Rt();l!==e;)i.push(l),l=n,f=v(),f=Rt(),f===e?(n=l,l=e):l=f;if(r=s.substring(r,n),i=v(),l=xt(),l!==e?(x=n,f=Bs(r,l),f?f=void 0:f=e,f!==e?(x=t,t=qs(r,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,r=n,i=[],l=Qe();l!==e;)i.push(l),l=n,f=v(),f=Qe(),f===e?(n=l,l=e):l=f;r=s.substring(r,n),x=t,r=Gs(r),t=r;}return u--,t===e&&(r=e,u===0&&m(Ts)),t;}function Rt(){let t,r,i,l,f,g;return u++,t=n,r=n,u++,i=n,l=xt(),l!==e?(f=v(),g=Nt(),g===e&&(g=s.charAt(n),ye.test(g)?n++:(g=e,u===0&&m(xs))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?r=void 0:(n=r,r=e),r!==e?(i=Qe(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(Rs)),t;}function Qe(){let t,r,i;if(t=n,r=[],i=s.charAt(n),E.test(i)?n++:(i=e,u===0&&m(dt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),E.test(i)?n++:(i=e,u===0&&m(dt));else r=e;return r!==e?t=s.substring(t,n):t=r,t;}function xt(){let t,r,i;return u++,t=n,r=Ct(),r!==e?(s.substr(n,2)===ae?(i=ae,n+=2):(i=e,u===0&&m(Ns)),i!==e?(x=t,t=Ks(r)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=Ct(),r!==e?(s.charCodeAt(n)===103?(i=ee,n++):(i=e,u===0&&m(Os)),i===e&&(i=null),t=r):(n=t,t=e)),u--,t===e&&(r=e,u===0&&m(Cs)),t;}function Ct(){let t,r,i,l,f,g,y;if(u++,t=n,r=[],i=s.charAt(n),M.test(i)?n++:(i=e,u===0&&m(Re)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),M.test(i)?n++:(i=e,u===0&&m(Re));else r=e;if(r!==e){if(i=n,s.charCodeAt(n)===46?(l=de,n++):(l=e,u===0&&m(Ds)),l!==e){if(f=n,g=[],y=s.charAt(n),M.test(y)?n++:(y=e,u===0&&m(Re)),y!==e)for(;y!==e;)g.push(y),y=s.charAt(n),M.test(y)?n++:(y=e,u===0&&m(Re));else g=e;g!==e?f=s.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),x=t,t=Qs();}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(Is)),t;}function v(){let t,r;for(u++,t=[],r=s.charAt(n),L.test(r)?n++:(r=e,u===0&&m(pt));r!==e;)t.push(r),r=s.charAt(n),L.test(r)?n++:(r=e,u===0&&m(pt));return u--,t;}function Nt(){let t,r,i;return t=n,r=n,u++,s.length>n?(i=s.charAt(n),n++):(i=e,u===0&&m(Ls)),u--,i===e?r=void 0:(n=r,r=e),r!==e&&(x=t,r=Ys()),t=r,t;}let Ot=!1,Ye=new Set(),Ce=new Set(),Ne=[];Ee=d();let Je=Ee!==e&&n===s.length;function It(){throw Ee!==e&&n<s.length&&m(er()),wt(xe,Q<s.length?Zs(Q):null,Q<s.length?ve(Q,Q+1):ve(Q,Q));}if(o.peg$library)return{peg$result:Ee,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:xe,peg$maxFailPos:Q,peg$success:Je,peg$throw:Je?void 0:It};if(Je)return Ee;It();}var ar={isTrackWeight:()=>!1},lr=new F("PARSER_CONFIG_PROVIDER"),Me=(()=>{class s{config=k(lr,{optional:!0})??ar;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return q(e,this.makeOptions("Condition"));}parseQuestion(e){return q(e,this.makeOptions("Question"));}parseItem(e){return q(e,this.makeOptions("Item"));}parseEffects(e){return q(e,this.makeOptions("Effects"));}parseRule(e){return q(e,this.makeOptions("Rule"));}parseRules(e){try{return q(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Fehler beim Parsen der Regeln"),a instanceof ge){let d=a.location.start.line.toString(),p=a.location.start.column.toString();c.push(" at line ",d," column ",p),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){q(e,this.makeOptions("VariableName"));}validateQuestionString(e){q(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){q(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){q(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return q(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||s)();};static ɵprov=Ie({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();var Ze=(()=>{class s{parser=k(Me);extractVariablesFromCondition(e){if(e instanceof fe||e instanceof We)return new Set();if(e instanceof B)return new Set([e.variable]);if(e instanceof Y)return this.extractVariablesFromCondition(e.not);if(e instanceof J||e instanceof Z)return this.extractVariablesFromCondition(e.left).union(this.extractVariablesFromCondition(e.right));throw new Error("unknown condition type");}extractVariables(e,a=!1){return e.reduce((c,d)=>{let p=c.union(new Set(d.questions.map(b=>b.variable)));return a?p:p.union(this.extractVariablesFromCondition(d.condition));},new Set());}extractCategories(e){let a=new Set();for(let c of e)for(let d of c.items)a.add(d.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(p=>this.renameVariable(e,a,p));if(c instanceof ie)return c.variable===e?new ie(c.question,a):c;if(c instanceof ue)return new ue(this.renameVariable(e,a,c.condition),c.questions.map(p=>this.renameVariable(e,a,p)),c.items);if(c instanceof B)return c.variable===e?new B(a):c;if(c instanceof Y)return new Y(this.renameVariable(e,a,c.not));if(c instanceof J)return new J(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof Z)return new Z(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let d=c;throw new Error("Unknown item type: "+d);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a,!0),d=Array.from(c).reduce((p,b)=>D(C({},p),{[b]:e.model[b]}),{[fe.string]:!0});return a.length===e.rules.length?{model:d,rules:a}:this.filterActive({model:d,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof ue)return this.contains(e.condition,a)||e.questions.some(p=>this.contains(p,a))||e.items.some(p=>this.contains(p,a));if(e instanceof ie)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof oe)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof B)return e.variable.toLowerCase().includes(c);if(e instanceof Y)return this.contains(e.not,a);if(e instanceof J)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof Z)return this.contains(e.left,a)||this.contains(e.right,a);let d=e;throw new Error("Unknown item type: "+d);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((d,p)=>{let b;return this.parser.isTrackWeight()?b=p.weight?1:0:b=this.parser.forceParseWeight(p.name)?1:0,{items:d.items+1,weights:d.weights+b};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||s)();};static ɵprov=Ie({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();function Xr(s){let o=s.title?.trim();return(o?`# ${o}

`:"")+s.map(a=>cr(a)).map(a=>a+";").join(`

`)+`
`;}function Xe(s,o,e=-1){if(!s)return"0g";let a=(e<0?s/1e3:(s/1e3).toFixed(e)).toString()+"kg",c=s.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function en(s,o){return Xe(s,void 0,1)+" / "+Xe(o,void 0,1);}function cr(s){let o=[];if(!(s.condition instanceof fe)){let a=$e(s.condition);a&&o.push(a," ");}o.push(":-");let e=s.questions.map(a=>ur(a)).concat(s.items.map(a=>fr(a)));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}function ur(s){return s.question+" $"+s.variable;}function fr(s){let o=`[${s.category}] ${s.name}`.trim();return s.weight&&(o+=" "+Xe(s.weight)),o;}function $e(s){if(s instanceof B)return s.variable;if(s instanceof Y)return"NOT "+$e(s.not);if(s instanceof J)return $e(s.left)+" AND "+$e(s.right);if(s instanceof Z)return $e(s.left)+" OR "+$e(s.right);throw new Error("Unknown condition type");}function gr(s,o){return Object.entries(s).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=C(C({},e[a]),c),e),{});}var Te=new F("RESET_SIGNAL",{providedIn:"root",factory:()=>N(!1)}),Ve=class s{state;triggerReset=k(Te);constructor(o){this.state=o;}static builder(){return new s({});}extend(o){return new s(gr(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function zt(s,o){if(typeof s!=typeof o)return!1;if(s&&o&&typeof s=="object"){let e=Object.keys(s),a=Object.keys(o);return e.length===a.length&&e.every(c=>zt(s[c],o[c]));}return s===o;}function jt(s,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[s]??o;}function dr(s,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);zt(o,e)?delete c[s]:o===null?c[s]=void 0:c[s]=o,this.setItem("state",JSON.stringify(c));}function Ht(s,o,e){let a=k(Te),c=N(jt.call(s,o,e));return P(()=>{let d=c();d!==jt.call(s,o,e)&&dr.call(s,o,d,e);},{manualCleanup:!0}),P(()=>{a()&&c.set(e);}),c;}var X=(s,o)=>Ht(localStorage,s,o),Fe=(s,o)=>Ht(sessionStorage,s,o);var j=X,Bt=["en","de"],qt=()=>{let s=j("categorySorting","alphabetically"),o=j("trackWeight",!1);return P(()=>{o()===!1&&s()==="weight"&&s.set("alphabetically");}),{config:{categorySorting:s,trackWeight:o,skipItems:j("skipItems",!1),fadeOutDisabledRules:j("fadeOutDisabledRules",!1),highlightVariableStatus:j("highlightVariableStatus",!1),refactorVariables:j("refactorVariables",!0),confirmRuleDeletion:j("confirmRuleDeletion",!0),rulesTemplate:j("rulesTemplate","default"),theme:j("theme","system"),fontSize:j("fontSize","normal"),accessibility:j("accessibility","accessible"),animations:j("animations",!0),language:j("language","auto"),exportReminder:j("exportReminder",!1)}};};var Gt=({config:{language:s}})=>{let o=N(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:A(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:A(()=>{let e=s();return e==="auto"?navigator.languages.map(d=>d.split("-")[0]).find(d=>Bt.includes(d))??"en":e;})}};};var Kt=(s,o)=>Fe(s,o),Qt=()=>({clipboard:{items:Kt("clipboardItems",[]),questions:Kt("clipboardQuestions",[])}});var Yt=X;function pr(s){return"cat-"+s.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var tt=class extends oe{original;checked;skipped;colored;visible;constructor(o,e,a,c,d){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c,this.visible=d;}};function et(){return{answers:{},checkedItems:[],skippedItems:[],collapsedCategories:[],answersLocked:!1,hideCompleted:!1,statsVisible:void 0,createdAt:Date.now(),modifiedAt:Date.now()};}var Jt=({rules:{parsed:s,raw:o},config:{categorySorting:e,skipItems:a}})=>{let c=Yt("packlistSessions",[et(),void 0,void 0,void 0]),d=Yt("currentPacklistSessionIndex",0),p=A(()=>c()[d()]??et());function b(h){c.update(w=>{let I=h(w[d()]??et());return w.map((Ae,T)=>T===d()?I:Ae);});}function W(h){b(w=>D(C({},w),{sessionName:h,modifiedAt:Date.now()}));}function G(h,w){b(I=>D(C({},I),{answers:D(C({},I.answers),{[h]:w}),modifiedAt:Date.now()}));}function K(){b(h=>D(C({},h),{answersLocked:!h.answersLocked,modifiedAt:Date.now()}));}function z(){b(h=>D(C({},h),{hideCompleted:!h.hideCompleted,modifiedAt:Date.now()}));}function S(h){b(w=>D(C({},w),{statsVisible:h,modifiedAt:Date.now()}));}let $=Fe("askedWeightTracking",void 0),O=k(Ze),U=A(()=>O.filterActive({rules:s.value(),model:p().answers})),ae=A(()=>U().rules),ee=A(()=>ae().flatMap(h=>h.items)),de=A(()=>ee().filter(h=>p().checkedItems.includes(h.id())));function te(h){p().checkedItems.includes(h.id())?b(w=>D(C({},w),{checkedItems:w.checkedItems.filter(I=>I!==h.id()),modifiedAt:Date.now()})):b(w=>D(C({},w),{checkedItems:[...w.checkedItems,h.id()],modifiedAt:Date.now()}));}let pe=A(()=>ee().filter(h=>p().skippedItems.includes(h.id())));function Se(h){a()&&(p().skippedItems.includes(h.id())?b(w=>D(C({},w),{skippedItems:w.skippedItems.filter(I=>I!==h.id()),modifiedAt:Date.now()})):b(w=>D(C({},w),{skippedItems:[...w.skippedItems,h.id()],modifiedAt:Date.now()})));}function he(h){p().collapsedCategories.includes(h)?b(w=>D(C({},w),{collapsedCategories:w.collapsedCategories.filter(I=>I!==h),modifiedAt:Date.now()})):b(w=>D(C({},w),{collapsedCategories:[...w.collapsedCategories,h],modifiedAt:Date.now()}));}let re=N([]);function ye(h){(re().length!==h.length||!h.every(w=>re().includes(w)))&&re.set(h);}let E=A(()=>{function h(T){return{id:pr(T.category),name:T.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:p().collapsedCategories.includes(T.category),colored:p().statsVisible==="distribution"};}let w=ee().reduce((T,R)=>{T[R.category]||(T[R.category]=h(R));let se=a()&&pe().includes(R),ce=!se&&de().includes(R),Ue=p().statsVisible==="heaviestItems"&&re().includes(R.id()),je=p().hideCompleted?!ce&&!se:!0;return T[R.category].items.push(new tt(R,ce,se,Ue,je)),ce&&(T[R.category].checkedItems++,T[R.category].checkedWeight+=R.weight??0),se||(T[R.category].totalItems++,T[R.category].totalWeight+=R.weight??0),T;},{}),Ae=A(()=>{let T=e();return T==="alphabetically"?(R,se)=>R.name.localeCompare(se.name):T==="weight"?(R,se)=>se.totalWeight-R.totalWeight:()=>0;})();return Object.entries(w).map(T=>T[1]).toSorted((T,R)=>Ae(T,R));}),M=A(()=>Object.entries(E()).reduce((h,[,w])=>(h.totalItems+=w.totalItems,h.checkedItems+=w.checkedItems,h.totalWeight+=w.totalWeight,h.checkedWeight+=w.checkedWeight,h),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));function L(){b(h=>D(C({},h),{answersLocked:!1,hideCompleted:!1,statsVisible:void 0,modifiedAt:Date.now()}));}let le=!0;return P(()=>{o.hasValue()&&o.value()&&(le?le=!1:L());}),{rules:{categories:A(()=>O.extractCategories(s.value())),variables:A(()=>O.extractVariables(s.value()))},active:{rules:ae,answers:A(()=>U().model),questions:A(()=>ae().flatMap(h=>h.questions))},packlist:{sessions:A(()=>c().filter((h,w)=>w!==0).map((h,w)=>h?{index:w+1,sessionName:h.sessionName,modifiedAt:h.modifiedAt}:void 0)),clearSlot(h){c.update(w=>{let I=[...w];return I[h]=void 0,I;});},currentSlot:d,copySessionToSlot(h){c.update(w=>{let I=[...w];return I[h]=D(C({},p()),{modifiedAt:Date.now()}),I;});},sessionName:A(()=>p().sessionName),setSessionName:W,answers:A(()=>p().answers),updateAnswer:G,model:E,stats:M,toggleCheckedItem:te,toggleSkippedItem:Se,colorItems:ye,toggleCategoryCollapse:he,isAnswersLocked:A(()=>p().answersLocked),toggleAnswersLock:K,isHideCompleted:A(()=>p().hideCompleted),toggleHideCompleted:z,isStatsVisible:A(()=>p().statsVisible),setStatsVisible:S,askedWeightTracking:$}};};var st=(s,o)=>{let e=k(Pe),a=k(_e),c=k(Te),d=N(void 0);return e.events.pipe(Oe(p=>p instanceof Le),Dt(()=>a.snapshot.queryParams[s]??o)).subscribe(p=>{p!==""&&d.set(p);}),P(()=>{let p=d()||void 0;p===o&&(p=void 0),a.snapshot.queryParams[s]!==p&&e.navigate([],{queryParams:{[s]:p},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),P(()=>{c()&&d.set(o);}),d;};var hr={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});},"config#session->restore"(){this.router.navigate(["/session"],{queryParams:{type:"restore"}});},"config#session->new"(){this.router.navigate(["/session"],{queryParams:{type:"new"}});}},Zt=()=>{let s=k(Pe),o=k(_e),e=st("rulesMode","view"),a=Wt(o.fragment,{requireSync:!0}),c=De(()=>a()??void 0);P(()=>{let b=c();b!==a()&&s.navigate([],{fragment:b,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let d=k(Pt),p=N(d.path());return s.events.pipe(Oe(b=>b instanceof Le)).subscribe(()=>{d.path()!==p()&&p.set(d.path());}),{router:{rulesMode:e,filterRulesQuery:st("filterRulesQuery",void 0),path:p.asReadonly(),fragment:c,go:b=>{hr[b].call({router:s,rulesMode:e});}}};};var rt=class{parser;raw;trackWeight;setCurrentTitle;value=N([]);error=N(void 0);status=N("idle");constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,P(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let d=this.parser.parseRules(this.raw.value());d.title&&this.setCurrentTitle(d.title),this.value.set(d),this.error.set(void 0),this.status.set("resolved");}catch(d){this.error.set(d),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},Xt=({config:{trackWeight:s},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new rt(k(Me),o,s,e);return{rules:{parsed:a.asReadonly(),hasError:A(()=>a.status()==="error"||o.status()==="error"),isLoading:A(()=>a.isLoading()||o.isLoading())}};};var es=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,ts={name:"GitHub Gist",test:s=>es.test(s),transform:s=>{let o=es.exec(s);if(!o)return s;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var nt=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},ss=new nt();var rs=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,mr={name:"Google Drive",needsCORS:!0,test:s=>rs.test(s),transform:s=>{let o=rs.exec(s);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:s;}},ns=mr;var wr={name:"Pastebin",needsCORS:!0,test:s=>s.startsWith("https://pastebin.com/")&&!s.includes("/raw/"),transform:s=>s.replace("https://pastebin.com/","https://pastebin.com/raw/")},is=wr;var br=[ts,ss,ns,is];function os(s,o){if(s){let e=br.find(a=>a.test(s));if(e){let a=e.transform(s);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return s;}var as=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var ls=`# Beispiel Packliste

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
`;var cs=`# Example Packlist

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
`;var us=`:- [Neu] Dies ist dein erster Gegenstand;
`;var fs=`:- [New] This is your first item;
`;var gs=`# Example Logic Demonstration

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
`;var it=new F("BACKPACKING_RULES_TEMPLATE");function kr(){return as;}var ot=new F("DEFAULT_RULES_TEMPLATE");function Tr(s){return s.startsWith("de")?ls:cs;}var at=new F("EMPTY_RULES_TEMPLATE");function Rr(s){return s.startsWith("de")?us:fs;}var lt=new F("LOGIC_RULES_TEMPLATE");function xr(){return gs;}function di(){return Lt([{provide:it,useFactory:kr,deps:[ke]},{provide:ot,useFactory:Tr,deps:[ke]},{provide:at,useFactory:Rr,deps:[ke]},{provide:lt,useFactory:xr,deps:[ke]}]);}var ds=new F("CAPACITOR_HTTP_REQUEST_MODE");function Cr(s){switch(s){case 400:return"Ung\xFCltige Anfrage";case 401:return"Nicht autorisiert";case 403:return"Verboten";case 404:return"Nicht gefunden";case 500:return"interner Serverfehler";case 504:return"Zeit\xFCberschreitung";default:return;}}var ps=({config:{rulesTemplate:s}})=>{let o=X("rulesMode","template"),e=X("rules",void 0),a=A(()=>e()!==void 0),c=A(()=>{let E=e();if(E)return Nr(E).toString(16);}),d=X("lastExportHash",void 0),p=X("lastExportDate",void 0),b=()=>{d.set(c()),p.set(new Date().getTime());},W=N(new Date().getTime());P(()=>{e(),W.set(new Date().getTime());});let G=k(ot),K=k(at),z=k(lt),S=k(it),$=A(()=>{switch(s()){case"empty":return K;case"logic":return z;case"backpacking":return S;default:return G;}}),O=X("remoteHistory",[]),U=X("remoteHistoryTitle",{}),ae=function(E){O.update(M=>M.filter(L=>L!==E)),U.update(M=>{let L=C({},M);return delete L[E],L;});},ee=De(()=>o()==="remote"?O()[0]:void 0),de=k(ds,{optional:!0})??"cors",te=_t({params:()=>({mode:o(),rawLocal:e(),remote:ee(),template:$()}),loader:({params:E})=>{switch(E.mode){case"local":return Promise.resolve(E.rawLocal);case"template":return Promise.resolve(E.template);case"remote":if(E.remote){if(!E.remote.startsWith("http"))throw new Error("Invalid URL");let M=os(E.remote,de==="cors");return Mt.get({url:M,webFetchExtra:{mode:de}}).then(L=>{if(L.status>=200&&L.status<300)return O.update(le=>[E.remote,...le.filter(h=>h!==E.remote)]),L.data;{let le=[["HTTP Fehler",L.status.toString()].join(" "),Cr(L.status)].join(": ");throw new Error(le);}});}else return Promise.resolve(void 0);}}}),pe=function(E){ee()!==E&&(o.set("remote"),ee.set(E));},Se=function(E){let M=ee();o()==="remote"&&M&&U.update(L=>D(C({},L),{[M]:E}));},he=function(E){o.set("local"),e.set(E);},re=function(){e.set(te.value()),o.set("local"),b();},ye=function(){te.reload();};return{rules:{mode:o,raw:te.asReadonly(),reload:ye,lastAction:W.asReadonly(),hash:c,exportNeeded:A(()=>o()==="local"&&c()!==d()),markAsCurrent:b,localRulesAvailable:a},export:{lastDate:p.asReadonly()},localRules:{updateRules:he,copyFromCurrent:re},remoteRules:{load:pe,setCurrentTitle:Se,history:A(()=>O().map(E=>({url:E,title:U()[E]}))),removeFromHistory:ae}};},Nr=function(s,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,d;c<s.length;c++)d=s.charCodeAt(c),e=Math.imul(e^d,2654435761),a=Math.imul(a^d,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var hs=()=>({serviceWorker:{status:N("init")}});function Or(){return Ve.builder().extend(Zt).extend(Qt).extend(hs).extend(qt).extend(Gt).extend(ps).extend(Xt).extend(Jt);}var ms=new F("STATE_BUILDER",{providedIn:"root",factory:()=>Or()}),Ir=new F("GLOBAL_STATE",{providedIn:"root",factory:()=>k(ms).build()}),Dr=new F("RESET_SWITCH",{providedIn:"root",factory:()=>{let s=k(ms);return async()=>{await s.reset();};}});export{ue as a,ie as b,oe as c,B as d,We as e,fe as f,Y as g,J as h,Z as i,ge as j,lr as k,Me as l,Ze as m,Xr as n,Xe as o,en as p,ur as q,fr as r,di as s,ds as t,Ir as u,Dr as v};/**i18n:02aae89da1045ac2cdc4a3c2bd37bfe4ea4a29a6a927b3235b2a5699c115d91b*/