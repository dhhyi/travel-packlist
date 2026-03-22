import{d as Ft}from"./chunk-1b0c3c16.js";import{C as Le,D as F,F as T,G as Pt,Ib as Xe,Jb as et,Kb as Re,Lb as Pe,Nb as Me,R as O,S as M,i as De,mb as Te,o as ke,ob as S,pb as _e,qb as Mt,xb as Wt,yb as Vt}from"./chunk-9a2a0b87.js";import{a as N,b as L}from"./chunk-a898bc51.js";var ue=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}},ie=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}};function Ut(s){return s?s.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var oe=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${Ut(this.category)}-${Ut(this.name)}`;}equals(o){return this.category===o.category&&this.name===o.name&&this.weight==o.weight;}},q=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}},We=(()=>{class s extends q{static string="please_select";constructor(){super(s.string);}}return s;})(),fe=(()=>{class s extends q{static string="always";constructor(){super(s.string);}evaluate(){return!0;}}return s;})(),Y=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}},J=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}},Z=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}};function ar(s,o){let e=o.filter(c=>c instanceof ie),a=o.filter(c=>c instanceof oe);return new ue(s??new fe(),e,a);}function jt(s){return s.length===1?s[0]:new J(s[0],jt(s.slice(1)));}function zt(s){return s.length===1?s[0]:new Z(s[0],zt(s.slice(1)));}var ge=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(A=>A.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let d=this.location.start,p=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(d):d,b=this.location.source+":"+p.line+":"+p.column;if(a){let A=this.location.end,G="".padEnd(p.line.toString().length," "),K=a[d.line-1],y=(d.line===A.line?A.column:K.length+1)-d.column||1;e+=`
 --> `+b+`
`+G+` |
`+p.line+" | "+K+`
`+G+" | "+"".padEnd(d.column-1," ")+"".padEnd(y,"^");}else e+=`
 at `+b;}return e;}static buildMessage(o,e){function a(y){return y.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function d(y){return c?y.replace(c,$=>"\\u{"+a($)+"}"):y;}function p(y){return d(y.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}function b(y){return d(y.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}let A={literal(y){return'"'+p(y.text)+'"';},class(y){let $=y.parts.map(I=>Array.isArray(I)?b(I[0])+"-"+b(I[1]):b(I));return"["+(y.inverted?"^":"")+$.join("")+"]"+(y.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(y){return y.description;}};function G(y){return A[y.type](y);}function K(y){let $=y.map(G);if($.sort(),$.length>0){let I=1;for(let U=1;U<$.length;U++)$[U-1]!==$[U]&&($[I]=$[U],I++);$.length=I;}switch($.length){case 1:return $[0];case 2:return $[0]+" or "+$[1];default:return $.slice(0,-1).join(", ")+", or "+$[$.length-1];}}function z(y){return y?'"'+p(y)+'"':"end of input";}return"Expected "+K(o)+" but "+z(e)+" found.";}};function B(s,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:yt,Rule:qe,Condition:At,Effects:Tt,Question:Ge,Item:Qe,VariableName:Ke,QuestionString:Rt,ItemNameAndWeight:Ct,CategoryName:xt},d=yt,p="#",b=";",A=":-",G="OR",K="AND",z="NOT",y=",",$="$",I="[",U="]",ae="kg",ee="g",de=".",te=/^[^\n\r]/,pe=/^[^$,;#]/,Se=/^[a-zA-Z]/,he=/^[a-zA-Z0-9\-[\](){}_]/,re=/^[^\],;#[]/,ye=/^[,;]/,E=/^[^$ ,;#]/,W=/^[0-9]/,_=/^[ \t\n\r]/,le=V("title"),h=H("#",!1),w=ne([`
`,"\r"],!0,!1,!1),D=V("comment"),ve=V("rule end"),R=H(";",!1),x=V("rule"),se=H(":-",!1),ce=V("condition"),je=H("OR",!1),ze=H("AND",!1),He=H("NOT",!1),$s=H(",",!1),gt=V("question"),Ss=H("$",!1),dt=ne(["$",",",";","#"],!0,!1,!1),ys=V("variable name"),vs=ne([["a","z"],["A","Z"]],!1,!1,!1),pt=ne([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),As=V("item"),Es=V("category"),ks=H("[",!1),Ts=H("]",!1),Rs=V("category name"),ht=ne(["]",",",";","#","["],!0,!1,!1),xs=V("item name"),Cs=V("word"),Ns=ne([",",";"],!1,!1,!1),mt=ne(["$"," ",",",";","#"],!0,!1,!1),Os=V("weight"),Is=H("kg",!1),Ds=H("g",!1),Ls=V("number"),Ce=ne([["0","9"]],!1,!1,!1),_s=H(".",!1),wt=ne([" ","	",`
`,"\r"],!1,!1,!1),Ps=tr();function Ms(t,r,i){return r.title=t?.trim(),r.rulesContainComments=Lt,r.warnings=i,r;}function Ws(t){if(t.trim().length)return t.trim();}function Vs(t){if(t.trim().length)return Lt=!0,t.trim();}function Fs(t,r){return ar(t,r);}function Us(t){return zt(t);}function js(t){return jt(t);}function zs(t){return new Y(t);}function Hs(t){return Je.add(t),new q(t);}function qs(t,r){return Oe.has(r)&&Ie.push({variable:r,type:"duplicate"}),Oe.add(r),new ie(t.trim(),r);}function Bs(t,r){let{name:i,weight:l}=r;return new oe(t.trim(),i,l);}function Gs(t,r){return o.trackWeight;}function Ks(t,r){let i=t.trim();return i.length||bt("item name"),{name:i,weight:r};}function Qs(t){let r=t.trim();return r.length||bt("item name"),{name:r,weight:void 0};}function Ys(t){return t*1e3;}function Js(){return parseFloat(Xs());}function Zs(){for(let t of Je)t!==We.string&&t!==fe.string&&!Oe.has(t)&&Ie.push({variable:t,type:"undeclared"});for(let t of Oe)Je.has(t)||Ie.push({variable:t,type:"unused"});return Ie;}let n=o.peg$currPos|0,C=n,me=[{line:1,column:1}],Q=n,Ne=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,Ae;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');d=c[o.startRule];}function Xs(){return s.substring(C,n);}function Pr(){return C;}function Mr(){return{source:a,start:C,end:n};}function Wr(){return Ee(C,n);}function bt(t,r){throw r=r!==void 0?r:Ee(C,n),St([V(t)],s.substring(C,n),r);}function Vr(t,r){throw r=r!==void 0?r:Ee(C,n),rr(t,r);}function er(t=n){let r=s.codePointAt(t);return r===void 0?"":String.fromCodePoint(r);}function H(t,r){return{type:"literal",text:t,ignoreCase:r};}function ne(t,r,i,l){return{type:"class",parts:t,inverted:r,ignoreCase:i,unicode:l};}function tr(){return{type:"any"};}function sr(){return{type:"end"};}function V(t){return{type:"other",description:t};}function $t(t){let r=me[t],i;if(r)return r;if(t>=me.length)i=me.length-1;else for(i=t;!me[--i];);for(r=me[i],r={line:r.line,column:r.column};i<t;)s.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return me[t]=r,r;}function Ee(t,r,i){let l=$t(t),f=$t(r),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function m(t){n<Q||(n>Q&&(Q=n,Ne=[]),Ne.push(t));}function rr(t,r){return new ge(t,null,null,r);}function St(t,r,i){return new ge(ge.buildMessage(t,r),t,r,i);}function yt(){let t,r,i,l,f,g,v,P;for(t=n,r=k(),i=nr(),i===e&&(i=null),l=k(),f=[],g=qe();g!==e;)f.push(g),g=n,v=vt(),v!==e?(v=qe(),v===e?(n=g,g=e):g=v):g=v;return g=vt(),g===e&&(g=null),v=k(),P=Dt(),P!==e?(C=t,t=Ms(i,f,P)):(n=t,t=e),t;}function nr(){let t,r,i,l,f,g;if(u++,t=n,s.charCodeAt(n)===35?(r=p,n++):(r=e,u===0&&m(h)),r!==e){if(i=k(),l=n,f=[],g=s.charAt(n),te.test(g)?n++:(g=e,u===0&&m(w)),g!==e)for(;g!==e;)f.push(g),g=s.charAt(n),te.test(g)?n++:(g=e,u===0&&m(w));else f=e;f!==e?l=s.substring(l,n):l=f,l!==e?(f=k(),C=t,t=Ws(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(le)),t;}function we(){let t,r,i,l,f;if(u++,t=n,s.charCodeAt(n)===35?(r=p,n++):(r=e,u===0&&m(h)),r!==e){if(i=n,l=[],f=s.charAt(n),te.test(f)?n++:(f=e,u===0&&m(w)),f!==e)for(;f!==e;)l.push(f),f=s.charAt(n),te.test(f)?n++:(f=e,u===0&&m(w));else l=e;l!==e?i=s.substring(i,n):i=l,i!==e?(l=k(),C=t,t=Vs(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(D)),t;}function vt(){let t,r,i,l,f,g;if(u++,t=n,r=k(),s.charCodeAt(n)===59?(i=b,n++):(i=e,u===0&&m(R)),i!==e){for(l=k(),f=[],g=we();g!==e;)f.push(g),g=we();g=k(),r=[r,i,l,f,g],t=r;}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(ve)),t;}function qe(){let t,r,i,l,f,g,v,P;for(u++,t=n,r=[],i=we();i!==e;)r.push(i),i=we();return i=k(),l=At(),l===e&&(l=null),f=k(),s.substr(n,2)===A?(g=A,n+=2):(g=e,u===0&&m(se)),g!==e?(v=k(),P=Tt(),C=t,t=Fs(l,P)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(x)),t;}function At(){let t,r;return u++,t=ir(),u--,t===e&&(r=e,u===0&&m(ce)),t;}function ir(){let t,r,i,l,f,g,v,P;for(u++,t=n,r=n,i=[],l=Et();l!==e;)i.push(l),l=n,f=n,g=k(),s.substr(n,2)===G?(v=G,n+=2):(v=e,u===0&&m(je)),v!==e?(P=k(),g=[g,v,P],f=g):(n=f,f=e),f!==e?(f=Et(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(C=t,r=Us(r)),t=r,u--,t===e&&(r=e,u===0&&m(ce)),t;}function Et(){let t,r,i,l,f,g,v,P;for(u++,t=n,r=n,i=[],l=Be();l!==e;)i.push(l),l=n,f=n,g=k(),s.substr(n,3)===K?(v=K,n+=3):(v=e,u===0&&m(ze)),v!==e?(P=k(),g=[g,v,P],f=g):(n=f,f=e),f!==e?(f=Be(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(C=t,r=js(r)),t=r,u--,t===e&&(r=e,u===0&&m(ce)),t;}function Be(){let t,r,i,l,f,g;return u++,t=n,s.substr(n,3)===z?(r=z,n+=3):(r=e,u===0&&m(He)),r!==e?(i=k(),s.substr(n,3)===z?(l=z,n+=3):(l=e,u===0&&m(He)),l!==e?(f=k(),g=Be(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s.substr(n,3)===z?(r=z,n+=3):(r=e,u===0&&m(He)),r!==e?(i=k(),l=kt(),l!==e?(C=t,t=zs(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=kt(),r!==e?t=r:(n=t,t=e))),u--,t===e&&(r=e,u===0&&m(ce)),t;}function kt(){let t,r;return t=n,r=Ke(),r!==e&&(C=t,r=Hs(r)),t=r,t;}function Tt(){let t,r,i,l,f,g,v,P,be;for(t=n,r=[],i=Ge(),i===e&&(i=Qe());i!==e;){if(r.push(i),i=n,l=n,f=k(),s.charCodeAt(n)===44?(g=y,n++):(g=e,u===0&&m($s)),g!==e){for(v=k(),P=[],be=we();be!==e;)P.push(be),be=we();be=k(),f=[f,g,v,P,be],l=f;}else n=l,l=e;l!==e?(l=Ge(),l===e&&(l=Qe()),l===e?(n=i,i=e):i=l):i=l;}return t=r,t;}function Ge(){let t,r,i,l;return u++,t=n,r=Rt(),r!==e?(s.charCodeAt(n)===36?(i=$,n++):(i=e,u===0&&m(Ss)),i!==e?(l=Ke(),l!==e?(C=t,t=qs(r,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(gt)),t;}function Rt(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),pe.test(i)?n++:(i=e,u===0&&m(dt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),pe.test(i)?n++:(i=e,u===0&&m(dt));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&m(gt)),t;}function Ke(){let t,r,i,l,f;if(u++,t=n,r=n,i=s.charAt(n),Se.test(i)?n++:(i=e,u===0&&m(vs)),i!==e){for(l=[],f=s.charAt(n),he.test(f)?n++:(f=e,u===0&&m(pt));f!==e;)l.push(f),f=s.charAt(n),he.test(f)?n++:(f=e,u===0&&m(pt));i=[i,l],r=i;}else n=r,r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&m(ys)),t;}function Qe(){let t,r,i,l;return u++,t=n,r=or(),r!==e?(i=k(),l=Ct(),l!==e?(C=t,t=Bs(r,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(As)),t;}function or(){let t,r,i,l,f,g;return u++,t=n,s.charCodeAt(n)===91?(r=I,n++):(r=e,u===0&&m(ks)),r!==e?(i=k(),l=xt(),l!==e?(f=k(),s.charCodeAt(n)===93?(g=U,n++):(g=e,u===0&&m(Ts)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(Es)),t;}function xt(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),re.test(i)?n++:(i=e,u===0&&m(ht)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),re.test(i)?n++:(i=e,u===0&&m(ht));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&m(Rs)),t;}function Ct(){let t,r,i,l,f;for(u++,t=n,r=n,i=[],l=Nt();l!==e;)i.push(l),l=n,f=k(),f=Nt(),f===e?(n=l,l=e):l=f;if(r=s.substring(r,n),i=k(),l=Ot(),l!==e?(C=n,f=Gs(r,l),f?f=void 0:f=e,f!==e?(C=t,t=Ks(r,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,r=n,i=[],l=Ye();l!==e;)i.push(l),l=n,f=k(),f=Ye(),f===e?(n=l,l=e):l=f;r=s.substring(r,n),C=t,r=Qs(r),t=r;}return u--,t===e&&(r=e,u===0&&m(xs)),t;}function Nt(){let t,r,i,l,f,g;return u++,t=n,r=n,u++,i=n,l=Ot(),l!==e?(f=k(),g=Dt(),g===e&&(g=s.charAt(n),ye.test(g)?n++:(g=e,u===0&&m(Ns))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?r=void 0:(n=r,r=e),r!==e?(i=Ye(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&m(Cs)),t;}function Ye(){let t,r,i;if(t=n,r=[],i=s.charAt(n),E.test(i)?n++:(i=e,u===0&&m(mt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),E.test(i)?n++:(i=e,u===0&&m(mt));else r=e;return r!==e?t=s.substring(t,n):t=r,t;}function Ot(){let t,r,i;return u++,t=n,r=It(),r!==e?(s.substr(n,2)===ae?(i=ae,n+=2):(i=e,u===0&&m(Is)),i!==e?(C=t,t=Ys(r)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=It(),r!==e?(s.charCodeAt(n)===103?(i=ee,n++):(i=e,u===0&&m(Ds)),i===e&&(i=null),t=r):(n=t,t=e)),u--,t===e&&(r=e,u===0&&m(Os)),t;}function It(){let t,r,i,l,f,g,v;if(u++,t=n,r=[],i=s.charAt(n),W.test(i)?n++:(i=e,u===0&&m(Ce)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),W.test(i)?n++:(i=e,u===0&&m(Ce));else r=e;if(r!==e){if(i=n,s.charCodeAt(n)===46?(l=de,n++):(l=e,u===0&&m(_s)),l!==e){if(f=n,g=[],v=s.charAt(n),W.test(v)?n++:(v=e,u===0&&m(Ce)),v!==e)for(;v!==e;)g.push(v),v=s.charAt(n),W.test(v)?n++:(v=e,u===0&&m(Ce));else g=e;g!==e?f=s.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),C=t,t=Js();}else n=t,t=e;return u--,t===e&&(r=e,u===0&&m(Ls)),t;}function k(){let t,r;for(u++,t=[],r=s.charAt(n),_.test(r)?n++:(r=e,u===0&&m(wt));r!==e;)t.push(r),r=s.charAt(n),_.test(r)?n++:(r=e,u===0&&m(wt));return u--,t;}function Dt(){let t,r,i;return t=n,r=n,u++,s.length>n?(i=s.charAt(n),n++):(i=e,u===0&&m(Ps)),u--,i===e?r=void 0:(n=r,r=e),r!==e&&(C=t,r=Zs()),t=r,t;}let Lt=!1,Je=new Set(),Oe=new Set(),Ie=[];Ae=d();let Ze=Ae!==e&&n===s.length;function _t(){throw Ae!==e&&n<s.length&&m(sr()),St(Ne,Q<s.length?er(Q):null,Q<s.length?Ee(Q,Q+1):Ee(Q,Q));}if(o.peg$library)return{peg$result:Ae,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Ne,peg$maxFailPos:Q,peg$success:Ze,peg$throw:Ze?void 0:_t};if(Ze)return Ae;_t();}var cr={isTrackWeight:()=>!1},ur=new F("PARSER_CONFIG_PROVIDER"),Ve=(()=>{class s{config=T(ur,{optional:!0})??cr;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return B(e,this.makeOptions("Condition"));}parseQuestion(e){return B(e,this.makeOptions("Question"));}parseItem(e){return B(e,this.makeOptions("Item"));}parseEffects(e){return B(e,this.makeOptions("Effects"));}parseRule(e){return B(e,this.makeOptions("Rule"));}parseRules(e){try{return B(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Fehler beim Parsen der Regeln"),a instanceof ge){let d=a.location.start.line.toString(),p=a.location.start.column.toString();c.push(" at line ",d," column ",p),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""),{cause:a});}}validateVariableName(e){B(e,this.makeOptions("VariableName"));}validateQuestionString(e){B(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){B(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){B(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return B(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||s)();};static ɵprov=Le({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();var tt=(()=>{class s{parser=T(Ve);extractVariablesFromCondition(e){if(e instanceof fe||e instanceof We)return new Set();if(e instanceof q)return new Set([e.variable]);if(e instanceof Y)return this.extractVariablesFromCondition(e.not);if(e instanceof J||e instanceof Z)return this.extractVariablesFromCondition(e.left).union(this.extractVariablesFromCondition(e.right));throw new Error("unknown condition type");}extractVariables(e,a=!1){return e.reduce((c,d)=>{let p=c.union(new Set(d.questions.map(b=>b.variable)));return a?p:p.union(this.extractVariablesFromCondition(d.condition));},new Set());}extractCategories(e){let a=new Set();for(let c of e)for(let d of c.items)a.add(d.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(p=>this.renameVariable(e,a,p));if(c instanceof ie)return c.variable===e?new ie(c.question,a):c;if(c instanceof ue)return new ue(this.renameVariable(e,a,c.condition),c.questions.map(p=>this.renameVariable(e,a,p)),c.items);if(c instanceof q)return c.variable===e?new q(a):c;if(c instanceof Y)return new Y(this.renameVariable(e,a,c.not));if(c instanceof J)return new J(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof Z)return new Z(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let d=c;throw new Error("Unknown item type: "+d);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a,!0),d=Array.from(c).reduce((p,b)=>L(N({},p),{[b]:e.model[b]}),{[fe.string]:!0});return a.length===e.rules.length?{model:d,rules:a}:this.filterActive({model:d,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof ue)return this.contains(e.condition,a)||e.questions.some(p=>this.contains(p,a))||e.items.some(p=>this.contains(p,a));if(e instanceof ie)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof oe)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof q)return e.variable.toLowerCase().includes(c);if(e instanceof Y)return this.contains(e.not,a);if(e instanceof J)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof Z)return this.contains(e.left,a)||this.contains(e.right,a);let d=e;throw new Error("Unknown item type: "+d);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((d,p)=>{let b;return this.parser.isTrackWeight()?b=p.weight?1:0:b=this.parser.forceParseWeight(p.name)?1:0,{items:d.items+1,weights:d.weights+b};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||s)();};static ɵprov=Le({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();function tn(s){let o=s.title?.trim();return(o?`# ${o}

`:"")+s.map(a=>fr(a)).map(a=>a+";").join(`

`)+`
`;}function st(s,o,e=-1){if(!s)return"0g";let a=(e<0?s/1e3:(s/1e3).toFixed(e)).toString()+"kg",c=s.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function sn(s,o){return st(s,void 0,1)+" / "+st(o,void 0,1);}function fr(s){let o=[];if(!(s.condition instanceof fe)){let a=$e(s.condition);a&&o.push(a," ");}o.push(":-");let e=s.questions.map(a=>gr(a)).concat(s.items.map(a=>dr(a)));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}function gr(s){return s.question+" $"+s.variable;}function dr(s){let o=`[${s.category}] ${s.name}`.trim();return s.weight&&(o+=" "+st(s.weight)),o;}function $e(s){if(s instanceof q)return s.variable;if(s instanceof Y)return"NOT "+$e(s.not);if(s instanceof J)return $e(s.left)+" AND "+$e(s.right);if(s instanceof Z)return $e(s.left)+" OR "+$e(s.right);throw new Error("Unknown condition type");}function pr(s,o){return Object.entries(s).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=N(N({},e[a]),c),e),{});}var xe=new F("RESET_SIGNAL",{providedIn:"root",factory:()=>O(!1)}),Fe=class s{state;triggerReset=T(xe);constructor(o){this.state=o;}static builder(){return new s({});}extend(o){return new s(pr(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function qt(s,o){if(typeof s!=typeof o)return!1;if(s&&o&&typeof s=="object"){let e=Object.keys(s),a=Object.keys(o);return e.length===a.length&&e.every(c=>qt(s[c],o[c]));}return s===o;}function Ht(s,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[s]??o;}function hr(s,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);qt(o,e)?delete c[s]:o===null?c[s]=void 0:c[s]=o,this.setItem("state",JSON.stringify(c));}function Bt(s,o,e){let a=T(xe),c=O(Ht.call(s,o,e));return M(()=>{let d=c();d!==Ht.call(s,o,e)&&hr.call(s,o,d,e);},{manualCleanup:!0}),M(()=>{a()&&c.set(e);}),c;}var X=(s,o)=>Bt(localStorage,s,o),Ue=(s,o)=>Bt(sessionStorage,s,o);var j=X,Gt=["en","de"],Kt=()=>{let s=j("categorySorting","alphabetically"),o=j("trackWeight",!1);return M(()=>{o()===!1&&s()==="weight"&&s.set("alphabetically");}),{config:{categorySorting:s,trackWeight:o,skipItems:j("skipItems",!1),fadeOutDisabledRules:j("fadeOutDisabledRules",!1),highlightVariableStatus:j("highlightVariableStatus",!1),refactorVariables:j("refactorVariables",!0),confirmRuleDeletion:j("confirmRuleDeletion",!0),rulesTemplate:j("rulesTemplate","default"),theme:j("theme","system"),fontSize:j("fontSize","normal"),accessibility:j("accessibility","accessible"),animations:j("animations",!0),language:j("language","auto"),exportReminder:j("exportReminder",!1)}};};var Qt=({config:{language:s,animations:o},router:{navigationRunning:e}})=>{let a=O(window.scrollY);window.addEventListener("scroll",()=>{a.set(window.scrollY);});let c=(d,p)=>Wt(()=>{!e()&&o()?p.set(d):p.set("");});return{browser:{scrollY:a,isMobile:S(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)),viewTransition:d=>{o()&&"startViewTransition"in document?document.startViewTransition(d):d();},animateEffect:c},config:{preferredLanguage:S(()=>{let d=s();return d==="auto"?navigator.languages.map(A=>A.split("-")[0]).find(A=>Gt.includes(A))??"en":d;})}};};var Yt=(s,o)=>Ue(s,o),Jt=()=>({clipboard:{items:Yt("clipboardItems",[]),questions:Yt("clipboardQuestions",[])}});var Zt=X;function mr(s){return"cat-"+s.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var nt=class extends oe{original;checked;skipped;colored;visible;constructor(o,e,a,c,d){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c,this.visible=d;}};function rt(){return{answers:{},checkedItems:[],skippedItems:[],collapsedCategories:[],answersLocked:!1,hideCompleted:!1,statsVisible:void 0,createdAt:Date.now(),modifiedAt:Date.now()};}var Xt=({rules:{parsed:s,raw:o},config:{categorySorting:e,skipItems:a}})=>{let c=Zt("packlistSessions",[rt(),void 0,void 0,void 0]),d=Zt("currentPacklistSessionIndex",0),p=S(()=>c()[d()]??rt());function b(h){c.update(w=>{let D=h(w[d()]??rt());return w.map((ve,R)=>R===d()?D:ve);});}function A(h){b(w=>L(N({},w),{sessionName:h,modifiedAt:Date.now()}));}function G(h,w){b(D=>L(N({},D),{answers:L(N({},D.answers),{[h]:w}),modifiedAt:Date.now()}));}function K(){b(h=>L(N({},h),{answersLocked:!h.answersLocked,modifiedAt:Date.now()}));}function z(){b(h=>L(N({},h),{hideCompleted:!h.hideCompleted,modifiedAt:Date.now()}));}function y(h){b(w=>L(N({},w),{statsVisible:h,modifiedAt:Date.now()}));}let $=Ue("askedWeightTracking",void 0),I=T(tt),U=S(()=>I.filterActive({rules:s.value(),model:p().answers})),ae=S(()=>U().rules),ee=S(()=>ae().flatMap(h=>h.items)),de=S(()=>ee().filter(h=>p().checkedItems.includes(h.id())));function te(h){p().checkedItems.includes(h.id())?b(w=>L(N({},w),{checkedItems:w.checkedItems.filter(D=>D!==h.id()),modifiedAt:Date.now()})):b(w=>L(N({},w),{checkedItems:[...w.checkedItems,h.id()],modifiedAt:Date.now()}));}let pe=S(()=>ee().filter(h=>p().skippedItems.includes(h.id())));function Se(h){a()&&(p().skippedItems.includes(h.id())?b(w=>L(N({},w),{skippedItems:w.skippedItems.filter(D=>D!==h.id()),modifiedAt:Date.now()})):b(w=>L(N({},w),{skippedItems:[...w.skippedItems,h.id()],modifiedAt:Date.now()})));}function he(h){p().collapsedCategories.includes(h)?b(w=>L(N({},w),{collapsedCategories:w.collapsedCategories.filter(D=>D!==h),modifiedAt:Date.now()})):b(w=>L(N({},w),{collapsedCategories:[...w.collapsedCategories,h],modifiedAt:Date.now()}));}let re=O([]);function ye(h){(re().length!==h.length||!h.every(w=>re().includes(w)))&&re.set(h);}let E=S(()=>{function h(R){return{id:mr(R.category),name:R.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:p().collapsedCategories.includes(R.category),colored:p().statsVisible==="distribution"};}let w=ee().reduce((R,x)=>{R[x.category]||(R[x.category]=h(x));let se=a()&&pe().includes(x),ce=!se&&de().includes(x),je=p().statsVisible==="heaviestItems"&&re().includes(x.id()),ze=p().hideCompleted?!ce&&!se:!0;return R[x.category].items.push(new nt(x,ce,se,je,ze)),ce&&(R[x.category].checkedItems++,R[x.category].checkedWeight+=x.weight??0),se||(R[x.category].totalItems++,R[x.category].totalWeight+=x.weight??0),R;},{}),ve=S(()=>{let R=e();return R==="alphabetically"?(x,se)=>x.name.localeCompare(se.name):R==="weight"?(x,se)=>se.totalWeight-x.totalWeight:()=>0;})();return Object.entries(w).map(R=>R[1]).toSorted((R,x)=>ve(R,x));}),W=S(()=>Object.entries(E()).reduce((h,[,w])=>(h.totalItems+=w.totalItems,h.checkedItems+=w.checkedItems,h.totalWeight+=w.totalWeight,h.checkedWeight+=w.checkedWeight,h),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));function _(){b(h=>L(N({},h),{answersLocked:!1,hideCompleted:!1,statsVisible:void 0,modifiedAt:Date.now()}));}let le=!0;return M(()=>{o.hasValue()&&o.value()&&(le?le=!1:_());}),{rules:{categories:S(()=>I.extractCategories(s.value())),variables:S(()=>I.extractVariables(s.value()))},active:{rules:ae,answers:S(()=>U().model),questions:S(()=>ae().flatMap(h=>h.questions))},packlist:{sessions:S(()=>c().filter((h,w)=>w!==0).map((h,w)=>h?{index:w+1,sessionName:h.sessionName,modifiedAt:h.modifiedAt}:void 0)),clearSlot(h){c.update(w=>{let D=[...w];return D[h]=void 0,D;});},currentSlot:d,copySessionToSlot(h){c.update(w=>{let D=[...w];return D[h]=L(N({},p()),{modifiedAt:Date.now()}),D;});},sessionName:S(()=>p().sessionName),setSessionName:A,answers:S(()=>p().answers),updateAnswer:G,model:E,stats:W,toggleCheckedItem:te,toggleSkippedItem:Se,colorItems:ye,toggleCategoryCollapse:he,isAnswersLocked:S(()=>p().answersLocked),toggleAnswersLock:K,isHideCompleted:S(()=>p().hideCompleted),toggleHideCompleted:z,isStatsVisible:S(()=>p().statsVisible),setStatsVisible:y,askedWeightTracking:$}};};var it=(s,o)=>{let e=T(Me),a=T(Pe),c=T(xe),d=O(void 0);return e.events.pipe(ke(p=>p instanceof Re),De(()=>a.snapshot.queryParams[s]??o)).subscribe(p=>{p!==""&&d.set(p);}),M(()=>{let p=d()||void 0;p===o&&(p=void 0),a.snapshot.queryParams[s]!==p&&e.navigate([],{queryParams:{[s]:p},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),M(()=>{c()&&d.set(o);}),d;};var wr={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});},"config#session->restore"(){this.router.navigate(["/session"],{queryParams:{type:"restore"}});},"config#session->new"(){this.router.navigate(["/session"],{queryParams:{type:"new"}});}},es=()=>{let s=T(Me),o=T(Pe),e=it("rulesMode","view"),a=Xe(o.fragment,{requireSync:!0}),c=_e(()=>a()??void 0);M(()=>{let A=c();A!==a()&&s.navigate([],{fragment:A,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let d=T(Vt),p=O(d.path());s.events.pipe(ke(A=>A instanceof Re)).subscribe(()=>{d.path()!==p()&&p.set(d.path());});let b=Xe(s.events.pipe(ke(A=>A instanceof et||A instanceof Re),De(A=>A instanceof et)),{initialValue:!0});return{router:{rulesMode:e,filterRulesQuery:it("filterRulesQuery",""),path:p.asReadonly(),fragment:c,go:A=>{wr[A].call({router:s,rulesMode:e});},navigationRunning:b}};};var ot=class{parser;raw;trackWeight;setCurrentTitle;value=O([]);error=O(void 0);status=O("idle");snapshot=S(()=>({value:this.value(),error:this.error(),status:this.status()}));constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,M(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let d=this.parser.parseRules(this.raw.value());d.title&&this.setCurrentTitle(d.title),this.value.set(d),this.error.set(void 0),this.status.set("resolved");}catch(d){this.error.set(d),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this),snapshot:this.snapshot};}},ts=({config:{trackWeight:s},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new ot(T(Ve),o,s,e);return{rules:{parsed:a.asReadonly(),hasError:S(()=>a.status()==="error"||o.status()==="error"),isLoading:S(()=>a.isLoading()||o.isLoading())}};};var ss=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,rs={name:"GitHub Gist",test:s=>ss.test(s),transform:s=>{let o=ss.exec(s);if(!o)return s;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var at=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},ns=new at();var is=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,br={name:"Google Drive",needsCORS:!0,test:s=>is.test(s),transform:s=>{let o=is.exec(s);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:s;}},os=br;var $r={name:"Pastebin",needsCORS:!0,test:s=>s.startsWith("https://pastebin.com/")&&!s.includes("/raw/"),transform:s=>s.replace("https://pastebin.com/","https://pastebin.com/raw/")},as=$r;var Sr=[rs,ns,os,as];function ls(s,o){if(s){let e=Sr.find(a=>a.test(s));if(e){let a=e.transform(s);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return s;}var cs=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var us=`# Beispiel Packliste

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
`;var fs=`# Example Packlist

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
`;var gs=`:- [Neu] Dies ist dein erster Gegenstand;
`;var ds=`:- [New] This is your first item;
`;var ps=`# Example Logic Demonstration

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
`;var lt=new F("BACKPACKING_RULES_TEMPLATE");function Rr(){return cs;}var ct=new F("DEFAULT_RULES_TEMPLATE");function xr(s){return s.startsWith("de")?us:fs;}var ut=new F("EMPTY_RULES_TEMPLATE");function Cr(s){return s.startsWith("de")?gs:ds;}var ft=new F("LOGIC_RULES_TEMPLATE");function Nr(){return ps;}function hi(){return Pt([{provide:lt,useFactory:Rr,deps:[Te]},{provide:ct,useFactory:xr,deps:[Te]},{provide:ut,useFactory:Cr,deps:[Te]},{provide:ft,useFactory:Nr,deps:[Te]}]);}var hs=new F("CAPACITOR_HTTP_REQUEST_MODE");function Or(s){switch(s){case 400:return"Ung\xFCltige Anfrage";case 401:return"Nicht autorisiert";case 403:return"Verboten";case 404:return"Nicht gefunden";case 500:return"interner Serverfehler";case 504:return"Zeit\xFCberschreitung";default:return;}}var ms=({config:{rulesTemplate:s}})=>{let o=X("rulesMode","template"),e=X("rules",void 0),a=S(()=>e()!==void 0),c=S(()=>{let E=e();if(E)return Ir(E).toString(16);}),d=X("lastExportHash",void 0),p=X("lastExportDate",void 0),b=()=>{d.set(c()),p.set(new Date().getTime());},A=O(new Date().getTime());M(()=>{e(),A.set(new Date().getTime());});let G=T(ct),K=T(ut),z=T(ft),y=T(lt),$=S(()=>{switch(s()){case"empty":return K;case"logic":return z;case"backpacking":return y;default:return G;}}),I=X("remoteHistory",[]),U=X("remoteHistoryTitle",{}),ae=function(E){I.update(W=>W.filter(_=>_!==E)),U.update(W=>{let _=N({},W);return delete _[E],_;});},ee=_e(()=>o()==="remote"?I()[0]:void 0),de=T(hs,{optional:!0})??"cors",te=Mt({params:()=>({mode:o(),rawLocal:e(),remote:ee(),template:$()}),loader:({params:E})=>{switch(E.mode){case"local":return Promise.resolve(E.rawLocal);case"template":return Promise.resolve(E.template);case"remote":if(E.remote){if(!E.remote.startsWith("http"))throw new Error("Invalid URL");let W=ls(E.remote,de==="cors");return Ft.get({url:W,webFetchExtra:{mode:de}}).then(_=>{if(_.status>=200&&_.status<300)return I.update(le=>[E.remote,...le.filter(h=>h!==E.remote)]),_.data;{let le=[["HTTP Fehler",_.status.toString()].join(" "),Or(_.status)].join(": ");throw new Error(le);}});}else return Promise.resolve(void 0);}}}),pe=function(E){ee()!==E&&(o.set("remote"),ee.set(E));},Se=function(E){let W=ee();o()==="remote"&&W&&U.update(_=>L(N({},_),{[W]:E}));},he=function(E){o.set("local"),e.set(E);},re=function(){e.set(te.value()),o.set("local"),b();},ye=function(){te.reload();};return{rules:{mode:o,raw:te.asReadonly(),reload:ye,lastAction:A.asReadonly(),hash:c,exportNeeded:S(()=>o()==="local"&&c()!==d()),markAsCurrent:b,localRulesAvailable:a},export:{lastDate:p.asReadonly()},localRules:{updateRules:he,copyFromCurrent:re},remoteRules:{load:pe,setCurrentTitle:Se,history:S(()=>I().map(E=>({url:E,title:U()[E]}))),removeFromHistory:ae}};},Ir=function(s,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,d;c<s.length;c++)d=s.charCodeAt(c),e=Math.imul(e^d,2654435761),a=Math.imul(a^d,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var ws=()=>({serviceWorker:{status:O("init")}});function Dr(){return Fe.builder().extend(es).extend(Jt).extend(ws).extend(Kt).extend(Qt).extend(ms).extend(ts).extend(Xt);}var bs=new F("STATE_BUILDER",{providedIn:"root",factory:()=>Dr()}),Lr=new F("GLOBAL_STATE",{providedIn:"root",factory:()=>T(bs).build()}),_r=new F("RESET_SWITCH",{providedIn:"root",factory:()=>{let s=T(bs);return async()=>{await s.reset();};}});export{ue as a,ie as b,oe as c,q as d,We as e,fe as f,Y as g,J as h,Z as i,ge as j,ur as k,Ve as l,tt as m,tn as n,st as o,sn as p,gr as q,dr as r,hi as s,hs as t,Lr as u,_r as v};/**i18n:02aae89da1045ac2cdc4a3c2bd37bfe4ea4a29a6a927b3235b2a5699c115d91b*/