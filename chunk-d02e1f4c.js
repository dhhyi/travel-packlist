import{d as Vt}from"./chunk-cdb97f7e.js";import{D as j,F as k,G as Pe,Ib as tt,Jb as st,Kb as Ce,Lb as We,Nb as Ve,R as O,S as M,i as _e,mb as Re,o as xe,ob as $,pb as Me,qb as Pt,xb as Mt,yb as Wt}from"./chunk-8d54ee53.js";import{a as N,b as L}from"./chunk-9755368f.js";var ce=class{condition;questions;items;constructor(s,e=[],a=[]){this.condition=s,this.questions=e,this.items=a;}},de=(()=>{class n{question;variable;static NEW_QUESTION_NAME="new_question";static NEW_VARIABLE_NAME="new_variable";constructor(e,a){this.question=e,this.variable=a;}}return n;})();function Ut(n){return n?n.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var pe=(()=>{class n{category;name;weight;static NEW_ITEM_NAME="new_item";static NEW_CATEGORY_NAME="new_category";constructor(e,a,f){this.category=e,this.name=a,this.weight=f;}id(){return`${Ut(this.category)}-${Ut(this.name)}`;}equals(e){return this.category===e.category&&this.name===e.name&&this.weight==e.weight;}}return n;})(),q=class{variable;constructor(s){this.variable=s;}evaluate(s){return s[this.variable];}},Ue=(()=>{class n extends q{static string="please_select";constructor(){super(n.string);}}return n;})(),ue=(()=>{class n extends q{static string="always";constructor(){super(n.string);}evaluate(){return!0;}}return n;})(),Y=class{not;constructor(s){this.not=s;}evaluate(s){return!this.not.evaluate(s);}},J=class{left;right;constructor(s,e){this.left=s,this.right=e;}evaluate(s){return this.left.evaluate(s)&&this.right.evaluate(s);}},Z=class{left;right;constructor(s,e){this.left=s,this.right=e;}evaluate(s){return this.left.evaluate(s)||this.right.evaluate(s);}};function lr(n,s){let e=s.filter(f=>f instanceof de),a=s.filter(f=>f instanceof pe);return new ce(n??new ue(),e,a);}function Ft(n){return n.length===1?n[0]:new J(n[0],Ft(n.slice(1)));}function zt(n){return n.length===1?n[0]:new Z(n[0],zt(n.slice(1)));}var fe=class extends SyntaxError{constructor(s,e,a,f){super(s),this.expected=e,this.found=a,this.location=f,this.name="SyntaxError";}format(s){let e="Error: "+this.message;if(this.location){let a=null,f=s.find(S=>S.source===this.location.source);f&&(a=f.text.split(/\r\n|\n|\r/g));let d=this.location.start,h=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(d):d,T=this.location.source+":"+h.line+":"+h.column;if(a){let S=this.location.end,Q="".padEnd(h.line.toString().length," "),G=a[d.line-1],v=(d.line===S.line?S.column:G.length+1)-d.column||1;e+=`
 --> `+T+`
`+Q+` |
`+h.line+" | "+G+`
`+Q+" | "+"".padEnd(d.column-1," ")+"".padEnd(v,"^");}else e+=`
 at `+T;}return e;}static buildMessage(s,e){function a(v){return v.codePointAt(0).toString(16).toUpperCase();}let f=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function d(v){return f?v.replace(f,b=>"\\u{"+a(b)+"}"):v;}function h(v){return d(v.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,b=>"\\x0"+a(b)).replace(/[\x10-\x1F\x7F-\x9F]/g,b=>"\\x"+a(b)));}function T(v){return d(v.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,b=>"\\x0"+a(b)).replace(/[\x10-\x1F\x7F-\x9F]/g,b=>"\\x"+a(b)));}let S={literal(v){return'"'+h(v.text)+'"';},class(v){let b=v.parts.map(D=>Array.isArray(D)?T(D[0])+"-"+T(D[1]):T(D));return"["+(v.inverted?"^":"")+b.join("")+"]"+(v.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(v){return v.description;}};function Q(v){return S[v.type](v);}function G(v){let b=v.map(Q);if(b.sort(),b.length>0){let D=1;for(let U=1;U<b.length;U++)b[U-1]!==b[U]&&(b[D]=b[U],D++);b.length=D;}switch(b.length){case 1:return b[0];case 2:return b[0]+" or "+b[1];default:return b.slice(0,-1).join(", ")+", or "+b[b.length-1];}}function z(v){return v?'"'+h(v)+'"':"end of input";}return"Expected "+G(s)+" but "+z(e)+" found.";}};function B(n,s){s=s!==void 0?s:{};let e={},a=s.grammarSource,f={Rules:yt,Rule:Qe,Condition:At,Effects:kt,Question:Ke,Item:Je,VariableName:Ye,QuestionString:xt,ItemNameAndWeight:Ct,CategoryName:Rt},d=yt,h="#",T=";",S=":-",Q="OR",G="AND",z="NOT",v=",",b="$",D="[",U="]",oe="kg",ee="g",me=".",te=/^[^\n\r]/,we=/^[^$,;#]/,Se=/^[a-zA-Z]/,be=/^[a-zA-Z0-9\-[\](){}_]/,re=/^[^\],;#[]/,Ae=/^[,;]/,A=/^[^$ ,;#]/,W=/^[0-9]/,_=/^[ \t\n\r]/,ae=V("title"),p=H("#",!1),w=ne([`
`,"\r"],!0,!1,!1),I=V("comment"),Ee=V("rule end"),x=H(";",!1),R=V("rule"),se=H(":-",!1),le=V("condition"),je=H("OR",!1),qe=H("AND",!1),Be=H("NOT",!1),vs=H(",",!1),gt=V("question"),ys=H("$",!1),dt=ne(["$",",",";","#"],!0,!1,!1),Ss=V("variable name"),As=ne([["a","z"],["A","Z"]],!1,!1,!1),pt=ne([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),Es=V("item"),Ts=V("category"),ks=H("[",!1),xs=H("]",!1),Rs=V("category name"),ht=ne(["]",",",";","#","["],!0,!1,!1),Cs=V("item name"),Ns=V("word"),Os=ne([",",";"],!1,!1,!1),mt=ne(["$"," ",",",";","#"],!0,!1,!1),Ds=V("weight"),Is=H("kg",!1),Ls=H("g",!1),_s=V("number"),Oe=ne([["0","9"]],!1,!1,!1),Ps=H(".",!1),wt=ne([" ","	",`
`,"\r"],!1,!1,!1),Ms=sr();function Ws(t,r,o){return r.title=t?.trim(),r.rulesContainComments=Lt,r.warnings=o,r;}function Vs(t){if(t.trim().length)return t.trim();}function Us(t){if(t.trim().length)return Lt=!0,t.trim();}function Fs(t,r){return lr(t,r);}function zs(t){return zt(t);}function Hs(t){return Ft(t);}function js(t){return new Y(t);}function qs(t){return Xe.add(t),new q(t);}function Bs(t,r){return Ie.has(r)&&Le.push({variable:r,type:"duplicate"}),Ie.add(r),new de(t.trim(),r);}function Qs(t,r){let{name:o,weight:l}=r;return new pe(t.trim(),o,l);}function Gs(t,r){return s.trackWeight;}function Ks(t,r){let o=t.trim();return o.length||bt("item name"),{name:o,weight:r};}function Ys(t){let r=t.trim();return r.length||bt("item name"),{name:r,weight:void 0};}function Js(t){return t*1e3;}function Zs(){return parseFloat(er());}function Xs(){for(let t of Xe)t!==Ue.string&&t!==ue.string&&!Ie.has(t)&&Le.push({variable:t,type:"undeclared"});for(let t of Ie)Xe.has(t)||Le.push({variable:t,type:"unused"});return Le;}let i=s.peg$currPos|0,C=i,$e=[{line:1,column:1}],K=i,De=s.peg$maxFailExpected||[],c=s.peg$silentFails|0,Te;if(s.startRule){if(!(s.startRule in f))throw new Error(`Can't start parsing from rule "`+s.startRule+'".');d=f[s.startRule];}function er(){return n.substring(C,i);}function Pr(){return C;}function Mr(){return{source:a,start:C,end:i};}function Wr(){return ke(C,i);}function bt(t,r){throw r=r!==void 0?r:ke(C,i),vt([V(t)],n.substring(C,i),r);}function Vr(t,r){throw r=r!==void 0?r:ke(C,i),nr(t,r);}function tr(t=i){let r=n.codePointAt(t);return r===void 0?"":String.fromCodePoint(r);}function H(t,r){return{type:"literal",text:t,ignoreCase:r};}function ne(t,r,o,l){return{type:"class",parts:t,inverted:r,ignoreCase:o,unicode:l};}function sr(){return{type:"any"};}function rr(){return{type:"end"};}function V(t){return{type:"other",description:t};}function $t(t){let r=$e[t],o;if(r)return r;if(t>=$e.length)o=$e.length-1;else for(o=t;!$e[--o];);for(r=$e[o],r={line:r.line,column:r.column};o<t;)n.charCodeAt(o)===10?(r.line++,r.column=1):r.column++,o++;return $e[t]=r,r;}function ke(t,r,o){let l=$t(t),u=$t(r),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:u.line,column:u.column}};return o&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function m(t){i<K||(i>K&&(K=i,De=[]),De.push(t));}function nr(t,r){return new fe(t,null,null,r);}function vt(t,r,o){return new fe(fe.buildMessage(t,r),t,r,o);}function yt(){let t,r,o,l,u,g,y,P;for(t=i,r=E(),o=ir(),o===e&&(o=null),l=E(),u=[],g=Qe();g!==e;)u.push(g),g=i,y=St(),y!==e?(y=Qe(),y===e?(i=g,g=e):g=y):g=y;return g=St(),g===e&&(g=null),y=E(),P=It(),P!==e?(C=t,t=Ws(o,u,P)):(i=t,t=e),t;}function ir(){let t,r,o,l,u,g;if(c++,t=i,n.charCodeAt(i)===35?(r=h,i++):(r=e,c===0&&m(p)),r!==e){if(o=E(),l=i,u=[],g=n.charAt(i),te.test(g)?i++:(g=e,c===0&&m(w)),g!==e)for(;g!==e;)u.push(g),g=n.charAt(i),te.test(g)?i++:(g=e,c===0&&m(w));else u=e;u!==e?l=n.substring(l,i):l=u,l!==e?(u=E(),C=t,t=Vs(l)):(i=t,t=e);}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(ae)),t;}function ve(){let t,r,o,l,u;if(c++,t=i,n.charCodeAt(i)===35?(r=h,i++):(r=e,c===0&&m(p)),r!==e){if(o=i,l=[],u=n.charAt(i),te.test(u)?i++:(u=e,c===0&&m(w)),u!==e)for(;u!==e;)l.push(u),u=n.charAt(i),te.test(u)?i++:(u=e,c===0&&m(w));else l=e;l!==e?o=n.substring(o,i):o=l,o!==e?(l=E(),C=t,t=Us(o)):(i=t,t=e);}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(I)),t;}function St(){let t,r,o,l,u,g;if(c++,t=i,r=E(),n.charCodeAt(i)===59?(o=T,i++):(o=e,c===0&&m(x)),o!==e){for(l=E(),u=[],g=ve();g!==e;)u.push(g),g=ve();g=E(),r=[r,o,l,u,g],t=r;}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(Ee)),t;}function Qe(){let t,r,o,l,u,g,y,P;for(c++,t=i,r=[],o=ve();o!==e;)r.push(o),o=ve();return o=E(),l=At(),l===e&&(l=null),u=E(),n.substr(i,2)===S?(g=S,i+=2):(g=e,c===0&&m(se)),g!==e?(y=E(),P=kt(),C=t,t=Fs(l,P)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(R)),t;}function At(){let t,r;return c++,t=or(),c--,t===e&&(r=e,c===0&&m(le)),t;}function or(){let t,r,o,l,u,g,y,P;for(c++,t=i,r=i,o=[],l=Et();l!==e;)o.push(l),l=i,u=i,g=E(),n.substr(i,2)===Q?(y=Q,i+=2):(y=e,c===0&&m(je)),y!==e?(P=E(),g=[g,y,P],u=g):(i=u,u=e),u!==e?(u=Et(),u===e?(i=l,l=e):l=u):l=u;return o.length<1?(i=r,r=e):r=o,r!==e&&(C=t,r=zs(r)),t=r,c--,t===e&&(r=e,c===0&&m(le)),t;}function Et(){let t,r,o,l,u,g,y,P;for(c++,t=i,r=i,o=[],l=Ge();l!==e;)o.push(l),l=i,u=i,g=E(),n.substr(i,3)===G?(y=G,i+=3):(y=e,c===0&&m(qe)),y!==e?(P=E(),g=[g,y,P],u=g):(i=u,u=e),u!==e?(u=Ge(),u===e?(i=l,l=e):l=u):l=u;return o.length<1?(i=r,r=e):r=o,r!==e&&(C=t,r=Hs(r)),t=r,c--,t===e&&(r=e,c===0&&m(le)),t;}function Ge(){let t,r,o,l,u,g;return c++,t=i,n.substr(i,3)===z?(r=z,i+=3):(r=e,c===0&&m(Be)),r!==e?(o=E(),n.substr(i,3)===z?(l=z,i+=3):(l=e,c===0&&m(Be)),l!==e?(u=E(),g=Ge(),g!==e?t=g:(i=t,t=e)):(i=t,t=e)):(i=t,t=e),t===e&&(t=i,n.substr(i,3)===z?(r=z,i+=3):(r=e,c===0&&m(Be)),r!==e?(o=E(),l=Tt(),l!==e?(C=t,t=js(l)):(i=t,t=e)):(i=t,t=e),t===e&&(t=i,r=Tt(),r!==e?t=r:(i=t,t=e))),c--,t===e&&(r=e,c===0&&m(le)),t;}function Tt(){let t,r;return t=i,r=Ye(),r!==e&&(C=t,r=qs(r)),t=r,t;}function kt(){let t,r,o,l,u,g,y,P,ye;for(t=i,r=[],o=Ke(),o===e&&(o=Je());o!==e;){if(r.push(o),o=i,l=i,u=E(),n.charCodeAt(i)===44?(g=v,i++):(g=e,c===0&&m(vs)),g!==e){for(y=E(),P=[],ye=ve();ye!==e;)P.push(ye),ye=ve();ye=E(),u=[u,g,y,P,ye],l=u;}else i=l,l=e;l!==e?(l=Ke(),l===e&&(l=Je()),l===e?(i=o,o=e):o=l):o=l;}return t=r,t;}function Ke(){let t,r,o,l;return c++,t=i,r=xt(),r!==e?(n.charCodeAt(i)===36?(o=b,i++):(o=e,c===0&&m(ys)),o!==e?(l=Ye(),l!==e?(C=t,t=Bs(r,l)):(i=t,t=e)):(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(gt)),t;}function xt(){let t,r,o;if(c++,t=i,r=[],o=n.charAt(i),we.test(o)?i++:(o=e,c===0&&m(dt)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),we.test(o)?i++:(o=e,c===0&&m(dt));else r=e;return r!==e?t=n.substring(t,i):t=r,c--,t===e&&(r=e,c===0&&m(gt)),t;}function Ye(){let t,r,o,l,u;if(c++,t=i,r=i,o=n.charAt(i),Se.test(o)?i++:(o=e,c===0&&m(As)),o!==e){for(l=[],u=n.charAt(i),be.test(u)?i++:(u=e,c===0&&m(pt));u!==e;)l.push(u),u=n.charAt(i),be.test(u)?i++:(u=e,c===0&&m(pt));o=[o,l],r=o;}else i=r,r=e;return r!==e?t=n.substring(t,i):t=r,c--,t===e&&(r=e,c===0&&m(Ss)),t;}function Je(){let t,r,o,l;return c++,t=i,r=ar(),r!==e?(o=E(),l=Ct(),l!==e?(C=t,t=Qs(r,l)):(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(Es)),t;}function ar(){let t,r,o,l,u,g;return c++,t=i,n.charCodeAt(i)===91?(r=D,i++):(r=e,c===0&&m(ks)),r!==e?(o=E(),l=Rt(),l!==e?(u=E(),n.charCodeAt(i)===93?(g=U,i++):(g=e,c===0&&m(xs)),g!==e?t=l:(i=t,t=e)):(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(Ts)),t;}function Rt(){let t,r,o;if(c++,t=i,r=[],o=n.charAt(i),re.test(o)?i++:(o=e,c===0&&m(ht)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),re.test(o)?i++:(o=e,c===0&&m(ht));else r=e;return r!==e?t=n.substring(t,i):t=r,c--,t===e&&(r=e,c===0&&m(Rs)),t;}function Ct(){let t,r,o,l,u;for(c++,t=i,r=i,o=[],l=Nt();l!==e;)o.push(l),l=i,u=E(),u=Nt(),u===e?(i=l,l=e):l=u;if(r=n.substring(r,i),o=E(),l=Ot(),l!==e?(C=i,u=Gs(r,l),u?u=void 0:u=e,u!==e?(C=t,t=Ks(r,l)):(i=t,t=e)):(i=t,t=e),t===e){for(t=i,r=i,o=[],l=Ze();l!==e;)o.push(l),l=i,u=E(),u=Ze(),u===e?(i=l,l=e):l=u;r=n.substring(r,i),C=t,r=Ys(r),t=r;}return c--,t===e&&(r=e,c===0&&m(Cs)),t;}function Nt(){let t,r,o,l,u,g;return c++,t=i,r=i,c++,o=i,l=Ot(),l!==e?(u=E(),g=It(),g===e&&(g=n.charAt(i),Ae.test(g)?i++:(g=e,c===0&&m(Os))),g!==e?(l=[l,u,g],o=l):(i=o,o=e)):(i=o,o=e),c--,o===e?r=void 0:(i=r,r=e),r!==e?(o=Ze(),o!==e?t=o:(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(Ns)),t;}function Ze(){let t,r,o;if(t=i,r=[],o=n.charAt(i),A.test(o)?i++:(o=e,c===0&&m(mt)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),A.test(o)?i++:(o=e,c===0&&m(mt));else r=e;return r!==e?t=n.substring(t,i):t=r,t;}function Ot(){let t,r,o;return c++,t=i,r=Dt(),r!==e?(n.substr(i,2)===oe?(o=oe,i+=2):(o=e,c===0&&m(Is)),o!==e?(C=t,t=Js(r)):(i=t,t=e)):(i=t,t=e),t===e&&(t=i,r=Dt(),r!==e?(n.charCodeAt(i)===103?(o=ee,i++):(o=e,c===0&&m(Ls)),o===e&&(o=null),t=r):(i=t,t=e)),c--,t===e&&(r=e,c===0&&m(Ds)),t;}function Dt(){let t,r,o,l,u,g,y;if(c++,t=i,r=[],o=n.charAt(i),W.test(o)?i++:(o=e,c===0&&m(Oe)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),W.test(o)?i++:(o=e,c===0&&m(Oe));else r=e;if(r!==e){if(o=i,n.charCodeAt(i)===46?(l=me,i++):(l=e,c===0&&m(Ps)),l!==e){if(u=i,g=[],y=n.charAt(i),W.test(y)?i++:(y=e,c===0&&m(Oe)),y!==e)for(;y!==e;)g.push(y),y=n.charAt(i),W.test(y)?i++:(y=e,c===0&&m(Oe));else g=e;g!==e?u=n.substring(u,i):u=g,u!==e?(l=[l,u],o=l):(i=o,o=e);}else i=o,o=e;o===e&&(o=null),C=t,t=Zs();}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(_s)),t;}function E(){let t,r;for(c++,t=[],r=n.charAt(i),_.test(r)?i++:(r=e,c===0&&m(wt));r!==e;)t.push(r),r=n.charAt(i),_.test(r)?i++:(r=e,c===0&&m(wt));return c--,t;}function It(){let t,r,o;return t=i,r=i,c++,n.length>i?(o=n.charAt(i),i++):(o=e,c===0&&m(Ms)),c--,o===e?r=void 0:(i=r,r=e),r!==e&&(C=t,r=Xs()),t=r,t;}let Lt=!1,Xe=new Set(),Ie=new Set(),Le=[];Te=d();let et=Te!==e&&i===n.length;function _t(){throw Te!==e&&i<n.length&&m(rr()),vt(De,K<n.length?tr(K):null,K<n.length?ke(K,K+1):ke(K,K));}if(s.peg$library)return{peg$result:Te,peg$currPos:i,peg$FAILED:e,peg$maxFailExpected:De,peg$maxFailPos:K,peg$success:et,peg$throw:et?void 0:_t};if(et)return Te;_t();}var ge=class{parser;constructor(s){this.parser=s;}extractVariablesFromCondition(s){if(s instanceof ue||s instanceof Ue)return new Set();if(s instanceof q)return new Set([s.variable]);if(s instanceof Y)return this.extractVariablesFromCondition(s.not);if(s instanceof J||s instanceof Z)return this.extractVariablesFromCondition(s.left).union(this.extractVariablesFromCondition(s.right));throw new Error("unknown condition type");}extractVariables(s,e=!1){return s.reduce((a,f)=>{let d=a.union(new Set(f.questions.map(h=>h.variable)));return e?d:d.union(this.extractVariablesFromCondition(f.condition));},new Set());}extractCategories(s){let e=new Set();for(let a of s)for(let f of a.items)e.add(f.category);return Array.from(e);}extractQuestions(s){return s.flatMap(e=>e.questions);}renameVariable(s,e,a){if(a instanceof Array)return a.map(d=>this.renameVariable(s,e,d));if(a instanceof de)return a.variable===s?new de(a.question,e):a;if(a instanceof ce)return new ce(this.renameVariable(s,e,a.condition),a.questions.map(d=>this.renameVariable(s,e,d)),a.items);if(a instanceof q)return a.variable===s?new q(e):a;if(a instanceof Y)return new Y(this.renameVariable(s,e,a.not));if(a instanceof J)return new J(this.renameVariable(s,e,a.left),this.renameVariable(s,e,a.right));if(a instanceof Z)return new Z(this.renameVariable(s,e,a.left),this.renameVariable(s,e,a.right));let f=a;throw new Error("Unknown item type: "+f);}filterActive(s){let e=s.rules.filter(d=>d.condition.evaluate(s.model)),a=this.extractVariables(e,!0),f=Array.from(a).reduce((d,h)=>L(N({},d),{[h]:s.model[h]}),{[ue.string]:!0});return e.length===s.rules.length?{model:f,rules:e}:this.filterActive({model:f,rules:e});}contains(s,e){let a=e.toLowerCase();if(s instanceof ce)return this.contains(s.condition,e)||s.questions.some(d=>this.contains(d,e))||s.items.some(d=>this.contains(d,e));if(s instanceof de)return s.question.toLowerCase().includes(a)||s.variable.toLowerCase().includes(a);if(s instanceof pe)return s.category.toLowerCase().includes(a)||s.name.toLowerCase().includes(a);if(s instanceof q)return s.variable.toLowerCase().includes(a);if(s instanceof Y)return this.contains(s.not,e);if(s instanceof J)return this.contains(s.left,e)||this.contains(s.right,e);if(s instanceof Z)return this.contains(s.left,e)||this.contains(s.right,e);let f=s;throw new Error("Unknown item type: "+f);}countItemsAndWeights(s){return s.reduce((e,a)=>a.items.reduce((f,d)=>{let h;return this.parser.isTrackWeight()?h=d.weight?1:0:h=this.parser.forceParseWeight(d.name)?1:0,{items:f.items+1,weights:f.weights+h};},e),{items:0,weights:0});}};function cr(n){let s=n.title?.trim();return(s?`# ${s}

`:"")+n.map(a=>fr(a)).map(a=>a+";").join(`

`)+`
`;}function Fe(n,s,e=-1){if(!n)return"0g";let a=(e<0?n/1e3:(n/1e3).toFixed(e)).toString()+"kg",f=n.toString()+"g";return s?s==="kg"?a:f:a.length<=f.length?a:f;}function ur(n,s){return Fe(n,void 0,1)+" / "+Fe(s,void 0,1);}function fr(n){let s=[];if(!(n.condition instanceof ue)){let a=he(n.condition);a&&s.push(a," ");}s.push(":-");let e=n.questions.map(a=>Ht(a)).concat(n.items.map(a=>jt(a)));if(e.length===1&&s.length===1)s.push(" ",e[0]);else for(let a=0;a<e.length;a++){let f=e[a];a>0&&s.push(","),s.push(`
`,"   ",f);}return s.join("");}function Ht(n){return n.question+" $"+n.variable;}function jt(n){let s=`[${n.category}] ${n.name}`.trim();return n.weight&&(s+=" "+Fe(n.weight)),s;}function he(n){if(n instanceof q)return n.variable;if(n instanceof Y)return"NOT "+he(n.not);if(n instanceof J)return he(n.left)+" AND "+he(n.right);if(n instanceof Z)return he(n.left)+" OR "+he(n.right);throw new Error("Unknown condition type");}var gr={isTrackWeight:()=>!1},ie=class{config;constructor(s=gr){this.config=s;}isTrackWeight(){return this.config.isTrackWeight();}makeOptions(s,e={}){return{startRule:s,trackWeight:e.forceWeightTracking??this.isTrackWeight()};}parseCondition(s){return B(s,this.makeOptions("Condition"));}parseQuestion(s){return B(s,this.makeOptions("Question"));}parseItem(s){return B(s,this.makeOptions("Item"));}parseEffects(s){return B(s,this.makeOptions("Effects"));}parseRule(s){return B(s,this.makeOptions("Rule"));}parseRules(s){try{return B(s,this.makeOptions("Rules"));}catch(e){let a=[];if(a.push("Error parsing rules"),e instanceof fe){let f=e.location.start.line.toString(),d=e.location.start.column.toString();a.push(" at line ",f," column ",d),a.push(":",`
`,e.message);}else e instanceof Error&&a.push(e.message);throw new Error(a.join(""),{cause:e});}}validateVariableName(s){B(s,this.makeOptions("VariableName"));}validateQuestionString(s){B(s,this.makeOptions("QuestionString"));}validateItemNameAndWeight(s){B(s,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(s){B(s,this.makeOptions("CategoryName"));}forceParseWeight(s){return B(s,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}};function dr(n){return Pe([{provide:ie,useFactory:()=>new ie(n?.())},{provide:ge,useFactory:()=>new ge(k(ie))}]);}function pr(n,s){return Object.entries(n).concat(Object.entries(s)).reduce((e,[a,f])=>(e[a]=N(N({},e[a]),f),e),{});}var Ne=new j("RESET_SIGNAL",{providedIn:"root",factory:()=>O(!1)}),ze=class n{state;triggerReset=k(Ne);constructor(s){this.state=s;}static builder(){return new n({});}extend(s){return new n(pr(this.state,s(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(s=>setTimeout(s,0));}};function Bt(n,s){if(typeof n!=typeof s)return!1;if(n&&s&&typeof n=="object"){let e=Object.keys(n),a=Object.keys(s);return e.length===a.length&&e.every(f=>Bt(n[f],s[f]));}return n===s;}function qt(n,s){let e=this.getItem("state")??"{}";return JSON.parse(e)[n]??s;}function hr(n,s,e){let a=this.getItem("state")??"{}",f=JSON.parse(a);Bt(s,e)?delete f[n]:s===null?f[n]=void 0:f[n]=s,this.setItem("state",JSON.stringify(f));}function Qt(n,s,e){let a=k(Ne),f=O(qt.call(n,s,e));return M(()=>{let d=f();d!==qt.call(n,s,e)&&hr.call(n,s,d,e);},{manualCleanup:!0}),M(()=>{a()&&f.set(e);}),f;}var X=(n,s)=>Qt(localStorage,n,s),He=(n,s)=>Qt(sessionStorage,n,s);var F=X,Gt=["en","de"],Kt=()=>{let n=F("categorySorting","alphabetically"),s=F("trackWeight",!1);return M(()=>{s()===!1&&n()==="weight"&&n.set("alphabetically");}),{config:{categorySorting:n,trackWeight:s,skipItems:F("skipItems",!1),fadeOutDisabledRules:F("fadeOutDisabledRules",!1),highlightVariableStatus:F("highlightVariableStatus",!1),refactorVariables:F("refactorVariables",!0),confirmRuleDeletion:F("confirmRuleDeletion",!0),rulesTemplate:F("rulesTemplate","default"),theme:F("theme","system"),fontSize:F("fontSize","normal"),accessibility:F("accessibility","accessible"),animations:F("animations",!0),language:F("language","auto"),exportReminder:F("exportReminder",!1)}};};var Yt=({config:{language:n,animations:s},router:{navigationRunning:e}})=>{let a=O(window.scrollY);window.addEventListener("scroll",()=>{a.set(window.scrollY);});let f=(d,h)=>Mt(()=>{!e()&&s()?h.set(d):h.set("");});return{browser:{scrollY:a,isMobile:$(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)),viewTransition:d=>{s()&&"startViewTransition"in document?document.startViewTransition(d):d();},animateEffect:f},config:{preferredLanguage:$(()=>{let d=n();return d==="auto"?navigator.languages.map(S=>S.split("-")[0]).find(S=>Gt.includes(S))??"en":d;})}};};var Jt=(n,s)=>He(n,s),Zt=()=>({clipboard:{items:Jt("clipboardItems",[]),questions:Jt("clipboardQuestions",[])}});var Xt=X;function mr(n){return"cat-"+n.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var nt=class extends pe{original;checked;skipped;colored;visible;constructor(s,e,a,f,d){super(s.category,s.name,s.weight),this.original=s,this.checked=e,this.skipped=a,this.colored=f,this.visible=d;}};function rt(){return{answers:{},checkedItems:[],skippedItems:[],collapsedCategories:[],answersLocked:!1,hideCompleted:!1,statsVisible:void 0,createdAt:Date.now(),modifiedAt:Date.now()};}var es=({rules:{parsed:n,raw:s},config:{categorySorting:e,skipItems:a}})=>{let f=Xt("packlistSessions",[rt(),void 0,void 0,void 0]),d=Xt("currentPacklistSessionIndex",0),h=$(()=>f()[d()]??rt());function T(p){f.update(w=>{let I=p(w[d()]??rt());return w.map((Ee,x)=>x===d()?I:Ee);});}function S(p){T(w=>L(N({},w),{sessionName:p,modifiedAt:Date.now()}));}function Q(p,w){T(I=>L(N({},I),{answers:L(N({},I.answers),{[p]:w}),modifiedAt:Date.now()}));}function G(){T(p=>L(N({},p),{answersLocked:!p.answersLocked,modifiedAt:Date.now()}));}function z(){T(p=>L(N({},p),{hideCompleted:!p.hideCompleted,modifiedAt:Date.now()}));}function v(p){T(w=>L(N({},w),{statsVisible:p,modifiedAt:Date.now()}));}let b=He("askedWeightTracking",void 0),D=k(ge),U=$(()=>D.filterActive({rules:n.value(),model:h().answers})),oe=$(()=>U().rules),ee=$(()=>oe().flatMap(p=>p.items)),me=$(()=>ee().filter(p=>h().checkedItems.includes(p.id())));function te(p){h().checkedItems.includes(p.id())?T(w=>L(N({},w),{checkedItems:w.checkedItems.filter(I=>I!==p.id()),modifiedAt:Date.now()})):T(w=>L(N({},w),{checkedItems:[...w.checkedItems,p.id()],modifiedAt:Date.now()}));}let we=$(()=>ee().filter(p=>h().skippedItems.includes(p.id())));function Se(p){a()&&(h().skippedItems.includes(p.id())?T(w=>L(N({},w),{skippedItems:w.skippedItems.filter(I=>I!==p.id()),modifiedAt:Date.now()})):T(w=>L(N({},w),{skippedItems:[...w.skippedItems,p.id()],modifiedAt:Date.now()})));}function be(p){h().collapsedCategories.includes(p)?T(w=>L(N({},w),{collapsedCategories:w.collapsedCategories.filter(I=>I!==p),modifiedAt:Date.now()})):T(w=>L(N({},w),{collapsedCategories:[...w.collapsedCategories,p],modifiedAt:Date.now()}));}let re=O([]);function Ae(p){(re().length!==p.length||!p.every(w=>re().includes(w)))&&re.set(p);}let A=$(()=>{function p(x){return{id:mr(x.category),name:x.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:h().collapsedCategories.includes(x.category),colored:h().statsVisible==="distribution"};}let w=ee().reduce((x,R)=>{x[R.category]||(x[R.category]=p(R));let se=a()&&we().includes(R),le=!se&&me().includes(R),je=h().statsVisible==="heaviestItems"&&re().includes(R.id()),qe=h().hideCompleted?!le&&!se:!0;return x[R.category].items.push(new nt(R,le,se,je,qe)),le&&(x[R.category].checkedItems++,x[R.category].checkedWeight+=R.weight??0),se||(x[R.category].totalItems++,x[R.category].totalWeight+=R.weight??0),x;},{}),Ee=$(()=>{let x=e();return x==="alphabetically"?(R,se)=>R.name.localeCompare(se.name):x==="weight"?(R,se)=>se.totalWeight-R.totalWeight:()=>0;})();return Object.entries(w).map(x=>x[1]).toSorted((x,R)=>Ee(x,R));}),W=$(()=>Object.entries(A()).reduce((p,[,w])=>(p.totalItems+=w.totalItems,p.checkedItems+=w.checkedItems,p.totalWeight+=w.totalWeight,p.checkedWeight+=w.checkedWeight,p),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));function _(){T(p=>L(N({},p),{answersLocked:!1,hideCompleted:!1,statsVisible:void 0,modifiedAt:Date.now()}));}let ae=!0;return M(()=>{s.hasValue()&&s.value()&&(ae?ae=!1:_());}),{rules:{categories:$(()=>D.extractCategories(n.value())),variables:$(()=>D.extractVariables(n.value()))},active:{rules:oe,answers:$(()=>U().model),questions:$(()=>oe().flatMap(p=>p.questions))},packlist:{sessions:$(()=>f().filter((p,w)=>w!==0).map((p,w)=>p?{index:w+1,sessionName:p.sessionName,modifiedAt:p.modifiedAt}:void 0)),clearSlot(p){f.update(w=>{let I=[...w];return I[p]=void 0,I;});},currentSlot:d,copySessionToSlot(p){f.update(w=>{let I=[...w];return I[p]=L(N({},h()),{modifiedAt:Date.now()}),I;});},sessionName:$(()=>h().sessionName),setSessionName:S,answers:$(()=>h().answers),updateAnswer:Q,model:A,stats:W,toggleCheckedItem:te,toggleSkippedItem:Se,colorItems:Ae,toggleCategoryCollapse:be,isAnswersLocked:$(()=>h().answersLocked),toggleAnswersLock:G,isHideCompleted:$(()=>h().hideCompleted),toggleHideCompleted:z,isStatsVisible:$(()=>h().statsVisible),setStatsVisible:v,askedWeightTracking:b}};};var it=(n,s)=>{let e=k(Ve),a=k(We),f=k(Ne),d=O(void 0);return e.events.pipe(xe(h=>h instanceof Ce),_e(()=>a.snapshot.queryParams[n]??s)).subscribe(h=>{h!==""&&d.set(h);}),M(()=>{let h=d()||void 0;h===s&&(h=void 0),a.snapshot.queryParams[n]!==h&&e.navigate([],{queryParams:{[n]:h},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),M(()=>{f()&&d.set(s);}),d;};var wr={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});},"config#session->restore"(){this.router.navigate(["/session"],{queryParams:{type:"restore"}});},"config#session->new"(){this.router.navigate(["/session"],{queryParams:{type:"new"}});}},ts=()=>{let n=k(Ve),s=k(We),e=it("rulesMode","view"),a=tt(s.fragment,{requireSync:!0}),f=Me(()=>a()??void 0);M(()=>{let S=f();S!==a()&&n.navigate([],{fragment:S,relativeTo:s,replaceUrl:!0,queryParamsHandling:"merge"});});let d=k(Wt),h=O(d.path());n.events.pipe(xe(S=>S instanceof Ce)).subscribe(()=>{d.path()!==h()&&h.set(d.path());});let T=tt(n.events.pipe(xe(S=>S instanceof st||S instanceof Ce),_e(S=>S instanceof st)),{initialValue:!0});return{router:{rulesMode:e,filterRulesQuery:it("filterRulesQuery",""),path:h.asReadonly(),fragment:f,go:S=>{wr[S].call({router:n,rulesMode:e});},navigationRunning:T}};};var ot=class{parser;raw;trackWeight;setCurrentTitle;value=O([]);error=O(void 0);status=O("idle");snapshot=$(()=>({value:this.value(),error:this.error(),status:this.status()}));constructor(s,e,a,f){this.parser=s,this.raw=e,this.trackWeight=a,this.setCurrentTitle=f,M(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let d=this.parser.parseRules(this.raw.value());d.title&&this.setCurrentTitle(d.title),this.value.set(d),this.error.set(void 0),this.status.set("resolved");}catch(d){this.error.set(d),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this),snapshot:this.snapshot};}},ss=({config:{trackWeight:n},rules:{raw:s},remoteRules:{setCurrentTitle:e}})=>{let a=new ot(k(ie),s,n,e);return{rules:{parsed:a.asReadonly(),hasError:$(()=>a.status()==="error"||s.status()==="error"),isLoading:$(()=>a.isLoading()||s.isLoading())}};};var rs=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,ns={name:"GitHub Gist",test:n=>rs.test(n),transform:n=>{let s=rs.exec(n);if(!s)return n;let[,e,a,,f]=s;return f?`https://gist.githubusercontent.com/${e}/${a}/raw/${f}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var at=class{name="GitHub";test(s){return s.startsWith("https://github.com/");}transform(s){return s.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},is=new at();var os=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,br={name:"Google Drive",needsCORS:!0,test:n=>os.test(n),transform:n=>{let s=os.exec(n);return s?`https://drive.google.com/uc?export=download&id=${s[1]}`:n;}},as=br;var $r={name:"Pastebin",needsCORS:!0,test:n=>n.startsWith("https://pastebin.com/")&&!n.includes("/raw/"),transform:n=>n.replace("https://pastebin.com/","https://pastebin.com/raw/")},ls=$r;var vr=[ns,is,as,ls];function cs(n,s){if(n){let e=vr.find(a=>a.test(n));if(e){let a=e.transform(n);return s&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return n;}var us=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var lt=new j("BACKPACKING_RULES_TEMPLATE");function xr(){return us;}var ct=new j("DEFAULT_RULES_TEMPLATE");function Rr(n){return n.startsWith("de")?fs:gs;}var ut=new j("EMPTY_RULES_TEMPLATE");function Cr(n){return n.startsWith("de")?ds:ps;}var ft=new j("LOGIC_RULES_TEMPLATE");function Nr(){return hs;}function di(){return Pe([{provide:lt,useFactory:xr,deps:[Re]},{provide:ct,useFactory:Rr,deps:[Re]},{provide:ut,useFactory:Cr,deps:[Re]},{provide:ft,useFactory:Nr,deps:[Re]}]);}var ms=new j("CAPACITOR_HTTP_REQUEST_MODE");function Or(n){switch(n){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var ws=({config:{rulesTemplate:n}})=>{let s=X("rulesMode","template"),e=X("rules",void 0),a=$(()=>e()!==void 0),f=$(()=>{let A=e();if(A)return Dr(A).toString(16);}),d=X("lastExportHash",void 0),h=X("lastExportDate",void 0),T=()=>{d.set(f()),h.set(new Date().getTime());},S=O(new Date().getTime());M(()=>{e(),S.set(new Date().getTime());});let Q=k(ct),G=k(ut),z=k(ft),v=k(lt),b=$(()=>{switch(n()){case"empty":return G;case"logic":return z;case"backpacking":return v;default:return Q;}}),D=X("remoteHistory",[]),U=X("remoteHistoryTitle",{}),oe=function(A){D.update(W=>W.filter(_=>_!==A)),U.update(W=>{let _=N({},W);return delete _[A],_;});},ee=Me(()=>s()==="remote"?D()[0]:void 0),me=k(ms,{optional:!0})??"cors",te=Pt({params:()=>({mode:s(),rawLocal:e(),remote:ee(),template:b()}),loader:({params:A})=>{switch(A.mode){case"local":return Promise.resolve(A.rawLocal);case"template":return Promise.resolve(A.template);case"remote":if(A.remote){if(!A.remote.startsWith("http"))throw new Error("Invalid URL");let W=cs(A.remote,me==="cors");return Vt.get({url:W,webFetchExtra:{mode:me}}).then(_=>{if(_.status>=200&&_.status<300)return D.update(ae=>[A.remote,...ae.filter(p=>p!==A.remote)]),_.data;{let ae=[["HTTP Error",_.status.toString()].join(" "),Or(_.status)].join(": ");throw new Error(ae);}});}else return Promise.resolve(void 0);}}}),we=function(A){ee()!==A&&(s.set("remote"),ee.set(A));},Se=function(A){let W=ee();s()==="remote"&&W&&U.update(_=>L(N({},_),{[W]:A}));},be=function(A){s.set("local"),e.set(A);},re=function(){e.set(te.value()),s.set("local"),T();},Ae=function(){te.reload();};return{rules:{mode:s,raw:te.asReadonly(),reload:Ae,lastAction:S.asReadonly(),hash:f,exportNeeded:$(()=>s()==="local"&&f()!==d()),markAsCurrent:T,localRulesAvailable:a},export:{lastDate:h.asReadonly()},localRules:{updateRules:be,copyFromCurrent:re},remoteRules:{load:we,setCurrentTitle:Se,history:$(()=>D().map(A=>({url:A,title:U()[A]}))),removeFromHistory:oe}};},Dr=function(n,s=0){let e=3735928559^s,a=1103547991^s;for(let f=0,d;f<n.length;f++)d=n.charCodeAt(f),e=Math.imul(e^d,2654435761),a=Math.imul(a^d,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var bs=()=>({serviceWorker:{status:O("init")}});function Ir(){return ze.builder().extend(ts).extend(Zt).extend(bs).extend(Kt).extend(Yt).extend(ws).extend(ss).extend(es);}var $s=new j("STATE_BUILDER",{providedIn:"root",factory:()=>Ir()}),Lr=new j("GLOBAL_STATE",{providedIn:"root",factory:()=>k($s).build()}),_r=new j("RESET_SWITCH",{providedIn:"root",factory:()=>{let n=k($s);return async()=>{await n.reset();};}});export{ce as a,de as b,pe as c,q as d,Ue as e,ue as f,Y as g,J as h,Z as i,fe as j,ie as k,ge as l,cr as m,Fe as n,ur as o,Ht as p,jt as q,dr as r,di as s,ms as t,Lr as u,_r as v};/**i18n:5690a4b1a2c568b42131495b9a23b34371b4a331bfdae7520da4f15fb4b096b2*/