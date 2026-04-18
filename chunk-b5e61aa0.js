import{d as Vt}from"./chunk-cdb97f7e.js";import{D as j,F as k,G as _t,Ib as et,Jb as tt,Kb as xe,Lb as Me,Nb as We,R as O,S as M,i as _e,mb as ke,o as Te,ob as $,pb as Pe,qb as Pt,xb as Mt,yb as Wt}from"./chunk-8d54ee53.js";import{a as N,b as L}from"./chunk-9755368f.js";var le=class{condition;questions;items;constructor(s,e=[],a=[]){this.condition=s,this.questions=e,this.items=a;}},fe=(()=>{class n{question;variable;static NEW_QUESTION_NAME="new_question";static NEW_VARIABLE_NAME="new_variable";constructor(e,a){this.question=e,this.variable=a;}}return n;})();function Ut(n){return n?n.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var ge=(()=>{class n{category;name;weight;static NEW_ITEM_NAME="new_item";static NEW_CATEGORY_NAME="new_category";constructor(e,a,f){this.category=e,this.name=a,this.weight=f;}id(){return`${Ut(this.category)}-${Ut(this.name)}`;}equals(e){return this.category===e.category&&this.name===e.name&&this.weight==e.weight;}}return n;})(),q=class{variable;constructor(s){this.variable=s;}evaluate(s){return s[this.variable];}},Ve=(()=>{class n extends q{static string="please_select";constructor(){super(n.string);}}return n;})(),ce=(()=>{class n extends q{static string="always";constructor(){super(n.string);}evaluate(){return!0;}}return n;})(),Y=class{not;constructor(s){this.not=s;}evaluate(s){return!this.not.evaluate(s);}},J=class{left;right;constructor(s,e){this.left=s,this.right=e;}evaluate(s){return this.left.evaluate(s)&&this.right.evaluate(s);}},Z=class{left;right;constructor(s,e){this.left=s,this.right=e;}evaluate(s){return this.left.evaluate(s)||this.right.evaluate(s);}};function lr(n,s){let e=s.filter(f=>f instanceof fe),a=s.filter(f=>f instanceof ge);return new le(n??new ce(),e,a);}function Ft(n){return n.length===1?n[0]:new J(n[0],Ft(n.slice(1)));}function zt(n){return n.length===1?n[0]:new Z(n[0],zt(n.slice(1)));}var ue=class extends SyntaxError{constructor(s,e,a,f){super(s),this.expected=e,this.found=a,this.location=f,this.name="SyntaxError";}format(s){let e="Error: "+this.message;if(this.location){let a=null,f=s.find(A=>A.source===this.location.source);f&&(a=f.text.split(/\r\n|\n|\r/g));let d=this.location.start,h=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(d):d,T=this.location.source+":"+h.line+":"+h.column;if(a){let A=this.location.end,Q="".padEnd(h.line.toString().length," "),G=a[d.line-1],S=(d.line===A.line?A.column:G.length+1)-d.column||1;e+=`
 --> `+T+`
`+Q+` |
`+h.line+" | "+G+`
`+Q+" | "+"".padEnd(d.column-1," ")+"".padEnd(S,"^");}else e+=`
 at `+T;}return e;}static buildMessage(s,e){function a(S){return S.codePointAt(0).toString(16).toUpperCase();}let f=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function d(S){return f?S.replace(f,b=>"\\u{"+a(b)+"}"):S;}function h(S){return d(S.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,b=>"\\x0"+a(b)).replace(/[\x10-\x1F\x7F-\x9F]/g,b=>"\\x"+a(b)));}function T(S){return d(S.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,b=>"\\x0"+a(b)).replace(/[\x10-\x1F\x7F-\x9F]/g,b=>"\\x"+a(b)));}let A={literal(S){return'"'+h(S.text)+'"';},class(S){let b=S.parts.map(D=>Array.isArray(D)?T(D[0])+"-"+T(D[1]):T(D));return"["+(S.inverted?"^":"")+b.join("")+"]"+(S.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(S){return S.description;}};function Q(S){return A[S.type](S);}function G(S){let b=S.map(Q);if(b.sort(),b.length>0){let D=1;for(let U=1;U<b.length;U++)b[U-1]!==b[U]&&(b[D]=b[U],D++);b.length=D;}switch(b.length){case 1:return b[0];case 2:return b[0]+" or "+b[1];default:return b.slice(0,-1).join(", ")+", or "+b[b.length-1];}}function z(S){return S?'"'+h(S)+'"':"end of input";}return"Expected "+G(s)+" but "+z(e)+" found.";}};function B(n,s){s=s!==void 0?s:{};let e={},a=s.grammarSource,f={Rules:St,Rule:Be,Condition:At,Effects:Tt,Question:Ge,Item:Ye,VariableName:Ke,QuestionString:kt,ItemNameAndWeight:Rt,CategoryName:xt},d=St,h="#",T=";",A=":-",Q="OR",G="AND",z="NOT",S=",",b="$",D="[",U="]",ie="kg",ee="g",pe=".",te=/^[^\n\r]/,he=/^[^$,;#]/,Se=/^[a-zA-Z]/,me=/^[a-zA-Z0-9\-[\](){}_]/,re=/^[^\],;#[]/,ye=/^[,;]/,v=/^[^$ ,;#]/,W=/^[0-9]/,_=/^[ \t\n\r]/,oe=V("title"),p=H("#",!1),w=ne([`
`,"\r"],!0,!1,!1),I=V("comment"),Ae=V("rule end"),x=H(";",!1),R=V("rule"),se=H(":-",!1),ae=V("condition"),He=H("OR",!1),je=H("AND",!1),qe=H("NOT",!1),Ss=H(",",!1),ft=V("question"),ys=H("$",!1),gt=ne(["$",",",";","#"],!0,!1,!1),As=V("variable name"),vs=ne([["a","z"],["A","Z"]],!1,!1,!1),dt=ne([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),Es=V("item"),Ts=V("category"),ks=H("[",!1),xs=H("]",!1),Rs=V("category name"),pt=ne(["]",",",";","#","["],!0,!1,!1),Cs=V("item name"),Ns=V("word"),Os=ne([",",";"],!1,!1,!1),ht=ne(["$"," ",",",";","#"],!0,!1,!1),Ds=V("weight"),Is=H("kg",!1),Ls=H("g",!1),_s=V("number"),Oe=ne([["0","9"]],!1,!1,!1),Ps=H(".",!1),mt=ne([" ","	",`
`,"\r"],!1,!1,!1),Ms=sr();function Ws(t,r,o){return r.title=t?.trim(),r.rulesContainComments=It,r.warnings=o,r;}function Vs(t){if(t.trim().length)return t.trim();}function Us(t){if(t.trim().length)return It=!0,t.trim();}function Fs(t,r){return lr(t,r);}function zs(t){return zt(t);}function Hs(t){return Ft(t);}function js(t){return new Y(t);}function qs(t){return Ze.add(t),new q(t);}function Bs(t,r){return Ie.has(r)&&Le.push({variable:r,type:"duplicate"}),Ie.add(r),new fe(t.trim(),r);}function Qs(t,r){let{name:o,weight:l}=r;return new ge(t.trim(),o,l);}function Gs(t,r){return s.trackWeight;}function Ks(t,r){let o=t.trim();return o.length||wt("item name"),{name:o,weight:r};}function Ys(t){let r=t.trim();return r.length||wt("item name"),{name:r,weight:void 0};}function Js(t){return t*1e3;}function Zs(){return parseFloat(er());}function Xs(){for(let t of Ze)t!==Ve.string&&t!==ce.string&&!Ie.has(t)&&Le.push({variable:t,type:"undeclared"});for(let t of Ie)Ze.has(t)||Le.push({variable:t,type:"unused"});return Le;}let i=s.peg$currPos|0,C=i,we=[{line:1,column:1}],K=i,De=s.peg$maxFailExpected||[],c=s.peg$silentFails|0,ve;if(s.startRule){if(!(s.startRule in f))throw new Error(`Can't start parsing from rule "`+s.startRule+'".');d=f[s.startRule];}function er(){return n.substring(C,i);}function _r(){return C;}function Pr(){return{source:a,start:C,end:i};}function Mr(){return Ee(C,i);}function wt(t,r){throw r=r!==void 0?r:Ee(C,i),$t([V(t)],n.substring(C,i),r);}function Wr(t,r){throw r=r!==void 0?r:Ee(C,i),nr(t,r);}function tr(t=i){let r=n.codePointAt(t);return r===void 0?"":String.fromCodePoint(r);}function H(t,r){return{type:"literal",text:t,ignoreCase:r};}function ne(t,r,o,l){return{type:"class",parts:t,inverted:r,ignoreCase:o,unicode:l};}function sr(){return{type:"any"};}function rr(){return{type:"end"};}function V(t){return{type:"other",description:t};}function bt(t){let r=we[t],o;if(r)return r;if(t>=we.length)o=we.length-1;else for(o=t;!we[--o];);for(r=we[o],r={line:r.line,column:r.column};o<t;)n.charCodeAt(o)===10?(r.line++,r.column=1):r.column++,o++;return we[t]=r,r;}function Ee(t,r,o){let l=bt(t),u=bt(r),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:u.line,column:u.column}};return o&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function m(t){i<K||(i>K&&(K=i,De=[]),De.push(t));}function nr(t,r){return new ue(t,null,null,r);}function $t(t,r,o){return new ue(ue.buildMessage(t,r),t,r,o);}function St(){let t,r,o,l,u,g,y,P;for(t=i,r=E(),o=ir(),o===e&&(o=null),l=E(),u=[],g=Be();g!==e;)u.push(g),g=i,y=yt(),y!==e?(y=Be(),y===e?(i=g,g=e):g=y):g=y;return g=yt(),g===e&&(g=null),y=E(),P=Dt(),P!==e?(C=t,t=Ws(o,u,P)):(i=t,t=e),t;}function ir(){let t,r,o,l,u,g;if(c++,t=i,n.charCodeAt(i)===35?(r=h,i++):(r=e,c===0&&m(p)),r!==e){if(o=E(),l=i,u=[],g=n.charAt(i),te.test(g)?i++:(g=e,c===0&&m(w)),g!==e)for(;g!==e;)u.push(g),g=n.charAt(i),te.test(g)?i++:(g=e,c===0&&m(w));else u=e;u!==e?l=n.substring(l,i):l=u,l!==e?(u=E(),C=t,t=Vs(l)):(i=t,t=e);}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(oe)),t;}function be(){let t,r,o,l,u;if(c++,t=i,n.charCodeAt(i)===35?(r=h,i++):(r=e,c===0&&m(p)),r!==e){if(o=i,l=[],u=n.charAt(i),te.test(u)?i++:(u=e,c===0&&m(w)),u!==e)for(;u!==e;)l.push(u),u=n.charAt(i),te.test(u)?i++:(u=e,c===0&&m(w));else l=e;l!==e?o=n.substring(o,i):o=l,o!==e?(l=E(),C=t,t=Us(o)):(i=t,t=e);}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(I)),t;}function yt(){let t,r,o,l,u,g;if(c++,t=i,r=E(),n.charCodeAt(i)===59?(o=T,i++):(o=e,c===0&&m(x)),o!==e){for(l=E(),u=[],g=be();g!==e;)u.push(g),g=be();g=E(),r=[r,o,l,u,g],t=r;}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(Ae)),t;}function Be(){let t,r,o,l,u,g,y,P;for(c++,t=i,r=[],o=be();o!==e;)r.push(o),o=be();return o=E(),l=At(),l===e&&(l=null),u=E(),n.substr(i,2)===A?(g=A,i+=2):(g=e,c===0&&m(se)),g!==e?(y=E(),P=Tt(),C=t,t=Fs(l,P)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(R)),t;}function At(){let t,r;return c++,t=or(),c--,t===e&&(r=e,c===0&&m(ae)),t;}function or(){let t,r,o,l,u,g,y,P;for(c++,t=i,r=i,o=[],l=vt();l!==e;)o.push(l),l=i,u=i,g=E(),n.substr(i,2)===Q?(y=Q,i+=2):(y=e,c===0&&m(He)),y!==e?(P=E(),g=[g,y,P],u=g):(i=u,u=e),u!==e?(u=vt(),u===e?(i=l,l=e):l=u):l=u;return o.length<1?(i=r,r=e):r=o,r!==e&&(C=t,r=zs(r)),t=r,c--,t===e&&(r=e,c===0&&m(ae)),t;}function vt(){let t,r,o,l,u,g,y,P;for(c++,t=i,r=i,o=[],l=Qe();l!==e;)o.push(l),l=i,u=i,g=E(),n.substr(i,3)===G?(y=G,i+=3):(y=e,c===0&&m(je)),y!==e?(P=E(),g=[g,y,P],u=g):(i=u,u=e),u!==e?(u=Qe(),u===e?(i=l,l=e):l=u):l=u;return o.length<1?(i=r,r=e):r=o,r!==e&&(C=t,r=Hs(r)),t=r,c--,t===e&&(r=e,c===0&&m(ae)),t;}function Qe(){let t,r,o,l,u,g;return c++,t=i,n.substr(i,3)===z?(r=z,i+=3):(r=e,c===0&&m(qe)),r!==e?(o=E(),n.substr(i,3)===z?(l=z,i+=3):(l=e,c===0&&m(qe)),l!==e?(u=E(),g=Qe(),g!==e?t=g:(i=t,t=e)):(i=t,t=e)):(i=t,t=e),t===e&&(t=i,n.substr(i,3)===z?(r=z,i+=3):(r=e,c===0&&m(qe)),r!==e?(o=E(),l=Et(),l!==e?(C=t,t=js(l)):(i=t,t=e)):(i=t,t=e),t===e&&(t=i,r=Et(),r!==e?t=r:(i=t,t=e))),c--,t===e&&(r=e,c===0&&m(ae)),t;}function Et(){let t,r;return t=i,r=Ke(),r!==e&&(C=t,r=qs(r)),t=r,t;}function Tt(){let t,r,o,l,u,g,y,P,$e;for(t=i,r=[],o=Ge(),o===e&&(o=Ye());o!==e;){if(r.push(o),o=i,l=i,u=E(),n.charCodeAt(i)===44?(g=S,i++):(g=e,c===0&&m(Ss)),g!==e){for(y=E(),P=[],$e=be();$e!==e;)P.push($e),$e=be();$e=E(),u=[u,g,y,P,$e],l=u;}else i=l,l=e;l!==e?(l=Ge(),l===e&&(l=Ye()),l===e?(i=o,o=e):o=l):o=l;}return t=r,t;}function Ge(){let t,r,o,l;return c++,t=i,r=kt(),r!==e?(n.charCodeAt(i)===36?(o=b,i++):(o=e,c===0&&m(ys)),o!==e?(l=Ke(),l!==e?(C=t,t=Bs(r,l)):(i=t,t=e)):(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(ft)),t;}function kt(){let t,r,o;if(c++,t=i,r=[],o=n.charAt(i),he.test(o)?i++:(o=e,c===0&&m(gt)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),he.test(o)?i++:(o=e,c===0&&m(gt));else r=e;return r!==e?t=n.substring(t,i):t=r,c--,t===e&&(r=e,c===0&&m(ft)),t;}function Ke(){let t,r,o,l,u;if(c++,t=i,r=i,o=n.charAt(i),Se.test(o)?i++:(o=e,c===0&&m(vs)),o!==e){for(l=[],u=n.charAt(i),me.test(u)?i++:(u=e,c===0&&m(dt));u!==e;)l.push(u),u=n.charAt(i),me.test(u)?i++:(u=e,c===0&&m(dt));o=[o,l],r=o;}else i=r,r=e;return r!==e?t=n.substring(t,i):t=r,c--,t===e&&(r=e,c===0&&m(As)),t;}function Ye(){let t,r,o,l;return c++,t=i,r=ar(),r!==e?(o=E(),l=Rt(),l!==e?(C=t,t=Qs(r,l)):(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(Es)),t;}function ar(){let t,r,o,l,u,g;return c++,t=i,n.charCodeAt(i)===91?(r=D,i++):(r=e,c===0&&m(ks)),r!==e?(o=E(),l=xt(),l!==e?(u=E(),n.charCodeAt(i)===93?(g=U,i++):(g=e,c===0&&m(xs)),g!==e?t=l:(i=t,t=e)):(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(Ts)),t;}function xt(){let t,r,o;if(c++,t=i,r=[],o=n.charAt(i),re.test(o)?i++:(o=e,c===0&&m(pt)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),re.test(o)?i++:(o=e,c===0&&m(pt));else r=e;return r!==e?t=n.substring(t,i):t=r,c--,t===e&&(r=e,c===0&&m(Rs)),t;}function Rt(){let t,r,o,l,u;for(c++,t=i,r=i,o=[],l=Ct();l!==e;)o.push(l),l=i,u=E(),u=Ct(),u===e?(i=l,l=e):l=u;if(r=n.substring(r,i),o=E(),l=Nt(),l!==e?(C=i,u=Gs(r,l),u?u=void 0:u=e,u!==e?(C=t,t=Ks(r,l)):(i=t,t=e)):(i=t,t=e),t===e){for(t=i,r=i,o=[],l=Je();l!==e;)o.push(l),l=i,u=E(),u=Je(),u===e?(i=l,l=e):l=u;r=n.substring(r,i),C=t,r=Ys(r),t=r;}return c--,t===e&&(r=e,c===0&&m(Cs)),t;}function Ct(){let t,r,o,l,u,g;return c++,t=i,r=i,c++,o=i,l=Nt(),l!==e?(u=E(),g=Dt(),g===e&&(g=n.charAt(i),ye.test(g)?i++:(g=e,c===0&&m(Os))),g!==e?(l=[l,u,g],o=l):(i=o,o=e)):(i=o,o=e),c--,o===e?r=void 0:(i=r,r=e),r!==e?(o=Je(),o!==e?t=o:(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(Ns)),t;}function Je(){let t,r,o;if(t=i,r=[],o=n.charAt(i),v.test(o)?i++:(o=e,c===0&&m(ht)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),v.test(o)?i++:(o=e,c===0&&m(ht));else r=e;return r!==e?t=n.substring(t,i):t=r,t;}function Nt(){let t,r,o;return c++,t=i,r=Ot(),r!==e?(n.substr(i,2)===ie?(o=ie,i+=2):(o=e,c===0&&m(Is)),o!==e?(C=t,t=Js(r)):(i=t,t=e)):(i=t,t=e),t===e&&(t=i,r=Ot(),r!==e?(n.charCodeAt(i)===103?(o=ee,i++):(o=e,c===0&&m(Ls)),o===e&&(o=null),t=r):(i=t,t=e)),c--,t===e&&(r=e,c===0&&m(Ds)),t;}function Ot(){let t,r,o,l,u,g,y;if(c++,t=i,r=[],o=n.charAt(i),W.test(o)?i++:(o=e,c===0&&m(Oe)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),W.test(o)?i++:(o=e,c===0&&m(Oe));else r=e;if(r!==e){if(o=i,n.charCodeAt(i)===46?(l=pe,i++):(l=e,c===0&&m(Ps)),l!==e){if(u=i,g=[],y=n.charAt(i),W.test(y)?i++:(y=e,c===0&&m(Oe)),y!==e)for(;y!==e;)g.push(y),y=n.charAt(i),W.test(y)?i++:(y=e,c===0&&m(Oe));else g=e;g!==e?u=n.substring(u,i):u=g,u!==e?(l=[l,u],o=l):(i=o,o=e);}else i=o,o=e;o===e&&(o=null),C=t,t=Zs();}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(_s)),t;}function E(){let t,r;for(c++,t=[],r=n.charAt(i),_.test(r)?i++:(r=e,c===0&&m(mt));r!==e;)t.push(r),r=n.charAt(i),_.test(r)?i++:(r=e,c===0&&m(mt));return c--,t;}function Dt(){let t,r,o;return t=i,r=i,c++,n.length>i?(o=n.charAt(i),i++):(o=e,c===0&&m(Ms)),c--,o===e?r=void 0:(i=r,r=e),r!==e&&(C=t,r=Xs()),t=r,t;}let It=!1,Ze=new Set(),Ie=new Set(),Le=[];ve=d();let Xe=ve!==e&&i===n.length;function Lt(){throw ve!==e&&i<n.length&&m(rr()),$t(De,K<n.length?tr(K):null,K<n.length?Ee(K,K+1):Ee(K,K));}if(s.peg$library)return{peg$result:ve,peg$currPos:i,peg$FAILED:e,peg$maxFailExpected:De,peg$maxFailPos:K,peg$success:Xe,peg$throw:Xe?void 0:Lt};if(Xe)return ve;Lt();}var Re=class{parser;constructor(s){this.parser=s;}extractVariablesFromCondition(s){if(s instanceof ce||s instanceof Ve)return new Set();if(s instanceof q)return new Set([s.variable]);if(s instanceof Y)return this.extractVariablesFromCondition(s.not);if(s instanceof J||s instanceof Z)return this.extractVariablesFromCondition(s.left).union(this.extractVariablesFromCondition(s.right));throw new Error("unknown condition type");}extractVariables(s,e=!1){return s.reduce((a,f)=>{let d=a.union(new Set(f.questions.map(h=>h.variable)));return e?d:d.union(this.extractVariablesFromCondition(f.condition));},new Set());}extractCategories(s){let e=new Set();for(let a of s)for(let f of a.items)e.add(f.category);return Array.from(e);}extractQuestions(s){return s.flatMap(e=>e.questions);}renameVariable(s,e,a){if(a instanceof Array)return a.map(d=>this.renameVariable(s,e,d));if(a instanceof fe)return a.variable===s?new fe(a.question,e):a;if(a instanceof le)return new le(this.renameVariable(s,e,a.condition),a.questions.map(d=>this.renameVariable(s,e,d)),a.items);if(a instanceof q)return a.variable===s?new q(e):a;if(a instanceof Y)return new Y(this.renameVariable(s,e,a.not));if(a instanceof J)return new J(this.renameVariable(s,e,a.left),this.renameVariable(s,e,a.right));if(a instanceof Z)return new Z(this.renameVariable(s,e,a.left),this.renameVariable(s,e,a.right));let f=a;throw new Error("Unknown item type: "+f);}filterActive(s){let e=s.rules.filter(d=>d.condition.evaluate(s.model)),a=this.extractVariables(e,!0),f=Array.from(a).reduce((d,h)=>L(N({},d),{[h]:s.model[h]}),{[ce.string]:!0});return e.length===s.rules.length?{model:f,rules:e}:this.filterActive({model:f,rules:e});}contains(s,e){let a=e.toLowerCase();if(s instanceof le)return this.contains(s.condition,e)||s.questions.some(d=>this.contains(d,e))||s.items.some(d=>this.contains(d,e));if(s instanceof fe)return s.question.toLowerCase().includes(a)||s.variable.toLowerCase().includes(a);if(s instanceof ge)return s.category.toLowerCase().includes(a)||s.name.toLowerCase().includes(a);if(s instanceof q)return s.variable.toLowerCase().includes(a);if(s instanceof Y)return this.contains(s.not,e);if(s instanceof J)return this.contains(s.left,e)||this.contains(s.right,e);if(s instanceof Z)return this.contains(s.left,e)||this.contains(s.right,e);let f=s;throw new Error("Unknown item type: "+f);}countItemsAndWeights(s){return s.reduce((e,a)=>a.items.reduce((f,d)=>{let h;return this.parser.isTrackWeight()?h=d.weight?1:0:h=this.parser.forceParseWeight(d.name)?1:0,{items:f.items+1,weights:f.weights+h};},e),{items:0,weights:0});}};function cr(n){let s=n.title?.trim();return(s?`# ${s}

`:"")+n.map(a=>fr(a)).map(a=>a+";").join(`

`)+`
`;}function Ue(n,s,e=-1){if(!n)return"0g";let a=(e<0?n/1e3:(n/1e3).toFixed(e)).toString()+"kg",f=n.toString()+"g";return s?s==="kg"?a:f:a.length<=f.length?a:f;}function ur(n,s){return Ue(n,void 0,1)+" / "+Ue(s,void 0,1);}function fr(n){let s=[];if(!(n.condition instanceof ce)){let a=de(n.condition);a&&s.push(a," ");}s.push(":-");let e=n.questions.map(a=>Ht(a)).concat(n.items.map(a=>jt(a)));if(e.length===1&&s.length===1)s.push(" ",e[0]);else for(let a=0;a<e.length;a++){let f=e[a];a>0&&s.push(","),s.push(`
`,"   ",f);}return s.join("");}function Ht(n){return n.question+" $"+n.variable;}function jt(n){let s=`[${n.category}] ${n.name}`.trim();return n.weight&&(s+=" "+Ue(n.weight)),s;}function de(n){if(n instanceof q)return n.variable;if(n instanceof Y)return"NOT "+de(n.not);if(n instanceof J)return de(n.left)+" AND "+de(n.right);if(n instanceof Z)return de(n.left)+" OR "+de(n.right);throw new Error("Unknown condition type");}var gr={isTrackWeight:()=>!1},Ce=class{config;constructor(s=gr){this.config=s;}isTrackWeight(){return this.config.isTrackWeight();}makeOptions(s,e={}){return{startRule:s,trackWeight:e.forceWeightTracking??this.isTrackWeight()};}parseCondition(s){return B(s,this.makeOptions("Condition"));}parseQuestion(s){return B(s,this.makeOptions("Question"));}parseItem(s){return B(s,this.makeOptions("Item"));}parseEffects(s){return B(s,this.makeOptions("Effects"));}parseRule(s){return B(s,this.makeOptions("Rule"));}parseRules(s){try{return B(s,this.makeOptions("Rules"));}catch(e){let a=[];if(a.push("Error parsing rules"),e instanceof ue){let f=e.location.start.line.toString(),d=e.location.start.column.toString();a.push(" at line ",f," column ",d),a.push(":",`
`,e.message);}else e instanceof Error&&a.push(e.message);throw new Error(a.join(""),{cause:e});}}validateVariableName(s){B(s,this.makeOptions("VariableName"));}validateQuestionString(s){B(s,this.makeOptions("QuestionString"));}validateItemNameAndWeight(s){B(s,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(s){B(s,this.makeOptions("CategoryName"));}forceParseWeight(s){return B(s,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}};function dr(n,s){return Object.entries(n).concat(Object.entries(s)).reduce((e,[a,f])=>(e[a]=N(N({},e[a]),f),e),{});}var Ne=new j("RESET_SIGNAL",{providedIn:"root",factory:()=>O(!1)}),Fe=class n{state;triggerReset=k(Ne);constructor(s){this.state=s;}static builder(){return new n({});}extend(s){return new n(dr(this.state,s(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(s=>setTimeout(s,0));}};function Bt(n,s){if(typeof n!=typeof s)return!1;if(n&&s&&typeof n=="object"){let e=Object.keys(n),a=Object.keys(s);return e.length===a.length&&e.every(f=>Bt(n[f],s[f]));}return n===s;}function qt(n,s){let e=this.getItem("state")??"{}";return JSON.parse(e)[n]??s;}function pr(n,s,e){let a=this.getItem("state")??"{}",f=JSON.parse(a);Bt(s,e)?delete f[n]:s===null?f[n]=void 0:f[n]=s,this.setItem("state",JSON.stringify(f));}function Qt(n,s,e){let a=k(Ne),f=O(qt.call(n,s,e));return M(()=>{let d=f();d!==qt.call(n,s,e)&&pr.call(n,s,d,e);},{manualCleanup:!0}),M(()=>{a()&&f.set(e);}),f;}var X=(n,s)=>Qt(localStorage,n,s),ze=(n,s)=>Qt(sessionStorage,n,s);var F=X,Gt=["en","de"],Kt=()=>{let n=F("categorySorting","alphabetically"),s=F("trackWeight",!1);return M(()=>{s()===!1&&n()==="weight"&&n.set("alphabetically");}),{config:{categorySorting:n,trackWeight:s,skipItems:F("skipItems",!1),fadeOutDisabledRules:F("fadeOutDisabledRules",!1),highlightVariableStatus:F("highlightVariableStatus",!1),refactorVariables:F("refactorVariables",!0),confirmRuleDeletion:F("confirmRuleDeletion",!0),rulesTemplate:F("rulesTemplate","default"),theme:F("theme","system"),fontSize:F("fontSize","normal"),accessibility:F("accessibility","accessible"),animations:F("animations",!0),language:F("language","auto"),exportReminder:F("exportReminder",!1)}};};var Yt=({config:{language:n,animations:s},router:{navigationRunning:e}})=>{let a=O(window.scrollY);window.addEventListener("scroll",()=>{a.set(window.scrollY);});let f=(d,h)=>Mt(()=>{!e()&&s()?h.set(d):h.set("");});return{browser:{scrollY:a,isMobile:$(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)),viewTransition:d=>{s()&&"startViewTransition"in document?document.startViewTransition(d):d();},animateEffect:f},config:{preferredLanguage:$(()=>{let d=n();return d==="auto"?navigator.languages.map(A=>A.split("-")[0]).find(A=>Gt.includes(A))??"en":d;})}};};var Jt=(n,s)=>ze(n,s),Zt=()=>({clipboard:{items:Jt("clipboardItems",[]),questions:Jt("clipboardQuestions",[])}});var Xt=X;function hr(n){return"cat-"+n.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var rt=class extends ge{original;checked;skipped;colored;visible;constructor(s,e,a,f,d){super(s.category,s.name,s.weight),this.original=s,this.checked=e,this.skipped=a,this.colored=f,this.visible=d;}};function st(){return{answers:{},checkedItems:[],skippedItems:[],collapsedCategories:[],answersLocked:!1,hideCompleted:!1,statsVisible:void 0,createdAt:Date.now(),modifiedAt:Date.now()};}var es=({rules:{parsed:n,raw:s},config:{categorySorting:e,skipItems:a}})=>{let f=Xt("packlistSessions",[st(),void 0,void 0,void 0]),d=Xt("currentPacklistSessionIndex",0),h=$(()=>f()[d()]??st());function T(p){f.update(w=>{let I=p(w[d()]??st());return w.map((Ae,x)=>x===d()?I:Ae);});}function A(p){T(w=>L(N({},w),{sessionName:p,modifiedAt:Date.now()}));}function Q(p,w){T(I=>L(N({},I),{answers:L(N({},I.answers),{[p]:w}),modifiedAt:Date.now()}));}function G(){T(p=>L(N({},p),{answersLocked:!p.answersLocked,modifiedAt:Date.now()}));}function z(){T(p=>L(N({},p),{hideCompleted:!p.hideCompleted,modifiedAt:Date.now()}));}function S(p){T(w=>L(N({},w),{statsVisible:p,modifiedAt:Date.now()}));}let b=ze("askedWeightTracking",void 0),D=k(Re),U=$(()=>D.filterActive({rules:n.value(),model:h().answers})),ie=$(()=>U().rules),ee=$(()=>ie().flatMap(p=>p.items)),pe=$(()=>ee().filter(p=>h().checkedItems.includes(p.id())));function te(p){h().checkedItems.includes(p.id())?T(w=>L(N({},w),{checkedItems:w.checkedItems.filter(I=>I!==p.id()),modifiedAt:Date.now()})):T(w=>L(N({},w),{checkedItems:[...w.checkedItems,p.id()],modifiedAt:Date.now()}));}let he=$(()=>ee().filter(p=>h().skippedItems.includes(p.id())));function Se(p){a()&&(h().skippedItems.includes(p.id())?T(w=>L(N({},w),{skippedItems:w.skippedItems.filter(I=>I!==p.id()),modifiedAt:Date.now()})):T(w=>L(N({},w),{skippedItems:[...w.skippedItems,p.id()],modifiedAt:Date.now()})));}function me(p){h().collapsedCategories.includes(p)?T(w=>L(N({},w),{collapsedCategories:w.collapsedCategories.filter(I=>I!==p),modifiedAt:Date.now()})):T(w=>L(N({},w),{collapsedCategories:[...w.collapsedCategories,p],modifiedAt:Date.now()}));}let re=O([]);function ye(p){(re().length!==p.length||!p.every(w=>re().includes(w)))&&re.set(p);}let v=$(()=>{function p(x){return{id:hr(x.category),name:x.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:h().collapsedCategories.includes(x.category),colored:h().statsVisible==="distribution"};}let w=ee().reduce((x,R)=>{x[R.category]||(x[R.category]=p(R));let se=a()&&he().includes(R),ae=!se&&pe().includes(R),He=h().statsVisible==="heaviestItems"&&re().includes(R.id()),je=h().hideCompleted?!ae&&!se:!0;return x[R.category].items.push(new rt(R,ae,se,He,je)),ae&&(x[R.category].checkedItems++,x[R.category].checkedWeight+=R.weight??0),se||(x[R.category].totalItems++,x[R.category].totalWeight+=R.weight??0),x;},{}),Ae=$(()=>{let x=e();return x==="alphabetically"?(R,se)=>R.name.localeCompare(se.name):x==="weight"?(R,se)=>se.totalWeight-R.totalWeight:()=>0;})();return Object.entries(w).map(x=>x[1]).toSorted((x,R)=>Ae(x,R));}),W=$(()=>Object.entries(v()).reduce((p,[,w])=>(p.totalItems+=w.totalItems,p.checkedItems+=w.checkedItems,p.totalWeight+=w.totalWeight,p.checkedWeight+=w.checkedWeight,p),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));function _(){T(p=>L(N({},p),{answersLocked:!1,hideCompleted:!1,statsVisible:void 0,modifiedAt:Date.now()}));}let oe=!0;return M(()=>{s.hasValue()&&s.value()&&(oe?oe=!1:_());}),{rules:{categories:$(()=>D.extractCategories(n.value())),variables:$(()=>D.extractVariables(n.value()))},active:{rules:ie,answers:$(()=>U().model),questions:$(()=>ie().flatMap(p=>p.questions))},packlist:{sessions:$(()=>f().filter((p,w)=>w!==0).map((p,w)=>p?{index:w+1,sessionName:p.sessionName,modifiedAt:p.modifiedAt}:void 0)),clearSlot(p){f.update(w=>{let I=[...w];return I[p]=void 0,I;});},currentSlot:d,copySessionToSlot(p){f.update(w=>{let I=[...w];return I[p]=L(N({},h()),{modifiedAt:Date.now()}),I;});},sessionName:$(()=>h().sessionName),setSessionName:A,answers:$(()=>h().answers),updateAnswer:Q,model:v,stats:W,toggleCheckedItem:te,toggleSkippedItem:Se,colorItems:ye,toggleCategoryCollapse:me,isAnswersLocked:$(()=>h().answersLocked),toggleAnswersLock:G,isHideCompleted:$(()=>h().hideCompleted),toggleHideCompleted:z,isStatsVisible:$(()=>h().statsVisible),setStatsVisible:S,askedWeightTracking:b}};};var nt=(n,s)=>{let e=k(We),a=k(Me),f=k(Ne),d=O(void 0);return e.events.pipe(Te(h=>h instanceof xe),_e(()=>a.snapshot.queryParams[n]??s)).subscribe(h=>{h!==""&&d.set(h);}),M(()=>{let h=d()||void 0;h===s&&(h=void 0),a.snapshot.queryParams[n]!==h&&e.navigate([],{queryParams:{[n]:h},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),M(()=>{f()&&d.set(s);}),d;};var mr={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});},"config#session->restore"(){this.router.navigate(["/session"],{queryParams:{type:"restore"}});},"config#session->new"(){this.router.navigate(["/session"],{queryParams:{type:"new"}});}},ts=()=>{let n=k(We),s=k(Me),e=nt("rulesMode","view"),a=et(s.fragment,{requireSync:!0}),f=Pe(()=>a()??void 0);M(()=>{let A=f();A!==a()&&n.navigate([],{fragment:A,relativeTo:s,replaceUrl:!0,queryParamsHandling:"merge"});});let d=k(Wt),h=O(d.path());n.events.pipe(Te(A=>A instanceof xe)).subscribe(()=>{d.path()!==h()&&h.set(d.path());});let T=et(n.events.pipe(Te(A=>A instanceof tt||A instanceof xe),_e(A=>A instanceof tt)),{initialValue:!0});return{router:{rulesMode:e,filterRulesQuery:nt("filterRulesQuery",""),path:h.asReadonly(),fragment:f,go:A=>{mr[A].call({router:n,rulesMode:e});},navigationRunning:T}};};var it=class{parser;raw;trackWeight;setCurrentTitle;value=O([]);error=O(void 0);status=O("idle");snapshot=$(()=>({value:this.value(),error:this.error(),status:this.status()}));constructor(s,e,a,f){this.parser=s,this.raw=e,this.trackWeight=a,this.setCurrentTitle=f,M(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let d=this.parser.parseRules(this.raw.value());d.title&&this.setCurrentTitle(d.title),this.value.set(d),this.error.set(void 0),this.status.set("resolved");}catch(d){this.error.set(d),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this),snapshot:this.snapshot};}},ss=({config:{trackWeight:n},rules:{raw:s},remoteRules:{setCurrentTitle:e}})=>{let a=new it(k(Ce),s,n,e);return{rules:{parsed:a.asReadonly(),hasError:$(()=>a.status()==="error"||s.status()==="error"),isLoading:$(()=>a.isLoading()||s.isLoading())}};};var rs=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,ns={name:"GitHub Gist",test:n=>rs.test(n),transform:n=>{let s=rs.exec(n);if(!s)return n;let[,e,a,,f]=s;return f?`https://gist.githubusercontent.com/${e}/${a}/raw/${f}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var ot=class{name="GitHub";test(s){return s.startsWith("https://github.com/");}transform(s){return s.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},is=new ot();var os=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,wr={name:"Google Drive",needsCORS:!0,test:n=>os.test(n),transform:n=>{let s=os.exec(n);return s?`https://drive.google.com/uc?export=download&id=${s[1]}`:n;}},as=wr;var br={name:"Pastebin",needsCORS:!0,test:n=>n.startsWith("https://pastebin.com/")&&!n.includes("/raw/"),transform:n=>n.replace("https://pastebin.com/","https://pastebin.com/raw/")},ls=br;var $r=[ns,is,as,ls];function cs(n,s){if(n){let e=$r.find(a=>a.test(n));if(e){let a=e.transform(n);return s&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return n;}var us=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var fs=`# Beispiel Packliste

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
`;var gs=`# Example Packlist

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
`;var ds=`:- [Neu] Dies ist dein erster Gegenstand;
`;var ps=`:- [New] This is your first item;
`;var hs=`# Example Logic Demonstration

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
`;var at=new j("BACKPACKING_RULES_TEMPLATE");function kr(){return us;}var lt=new j("DEFAULT_RULES_TEMPLATE");function xr(n){return n.startsWith("de")?fs:gs;}var ct=new j("EMPTY_RULES_TEMPLATE");function Rr(n){return n.startsWith("de")?ds:ps;}var ut=new j("LOGIC_RULES_TEMPLATE");function Cr(){return hs;}function ai(){return _t([{provide:at,useFactory:kr,deps:[ke]},{provide:lt,useFactory:xr,deps:[ke]},{provide:ct,useFactory:Rr,deps:[ke]},{provide:ut,useFactory:Cr,deps:[ke]}]);}var ms=new j("CAPACITOR_HTTP_REQUEST_MODE");function Nr(n){switch(n){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var ws=({config:{rulesTemplate:n}})=>{let s=X("rulesMode","template"),e=X("rules",void 0),a=$(()=>e()!==void 0),f=$(()=>{let v=e();if(v)return Or(v).toString(16);}),d=X("lastExportHash",void 0),h=X("lastExportDate",void 0),T=()=>{d.set(f()),h.set(new Date().getTime());},A=O(new Date().getTime());M(()=>{e(),A.set(new Date().getTime());});let Q=k(lt),G=k(ct),z=k(ut),S=k(at),b=$(()=>{switch(n()){case"empty":return G;case"logic":return z;case"backpacking":return S;default:return Q;}}),D=X("remoteHistory",[]),U=X("remoteHistoryTitle",{}),ie=function(v){D.update(W=>W.filter(_=>_!==v)),U.update(W=>{let _=N({},W);return delete _[v],_;});},ee=Pe(()=>s()==="remote"?D()[0]:void 0),pe=k(ms,{optional:!0})??"cors",te=Pt({params:()=>({mode:s(),rawLocal:e(),remote:ee(),template:b()}),loader:({params:v})=>{switch(v.mode){case"local":return Promise.resolve(v.rawLocal);case"template":return Promise.resolve(v.template);case"remote":if(v.remote){if(!v.remote.startsWith("http"))throw new Error("Invalid URL");let W=cs(v.remote,pe==="cors");return Vt.get({url:W,webFetchExtra:{mode:pe}}).then(_=>{if(_.status>=200&&_.status<300)return D.update(oe=>[v.remote,...oe.filter(p=>p!==v.remote)]),_.data;{let oe=[["HTTP Error",_.status.toString()].join(" "),Nr(_.status)].join(": ");throw new Error(oe);}});}else return Promise.resolve(void 0);}}}),he=function(v){ee()!==v&&(s.set("remote"),ee.set(v));},Se=function(v){let W=ee();s()==="remote"&&W&&U.update(_=>L(N({},_),{[W]:v}));},me=function(v){s.set("local"),e.set(v);},re=function(){e.set(te.value()),s.set("local"),T();},ye=function(){te.reload();};return{rules:{mode:s,raw:te.asReadonly(),reload:ye,lastAction:A.asReadonly(),hash:f,exportNeeded:$(()=>s()==="local"&&f()!==d()),markAsCurrent:T,localRulesAvailable:a},export:{lastDate:h.asReadonly()},localRules:{updateRules:me,copyFromCurrent:re},remoteRules:{load:he,setCurrentTitle:Se,history:$(()=>D().map(v=>({url:v,title:U()[v]}))),removeFromHistory:ie}};},Or=function(n,s=0){let e=3735928559^s,a=1103547991^s;for(let f=0,d;f<n.length;f++)d=n.charCodeAt(f),e=Math.imul(e^d,2654435761),a=Math.imul(a^d,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var bs=()=>({serviceWorker:{status:O("init")}});function Dr(){return Fe.builder().extend(ts).extend(Zt).extend(bs).extend(Kt).extend(Yt).extend(ws).extend(ss).extend(es);}var $s=new j("STATE_BUILDER",{providedIn:"root",factory:()=>Dr()}),Ir=new j("GLOBAL_STATE",{providedIn:"root",factory:()=>k($s).build()}),Lr=new j("RESET_SWITCH",{providedIn:"root",factory:()=>{let n=k($s);return async()=>{await n.reset();};}});export{le as a,fe as b,ge as c,q as d,Ve as e,ce as f,Y as g,J as h,Z as i,ue as j,Ce as k,Re as l,cr as m,Ue as n,ur as o,Ht as p,jt as q,ai as r,ms as s,Ir as t,Lr as u};/**i18n:5690a4b1a2c568b42131495b9a23b34371b4a331bfdae7520da4f15fb4b096b2*/