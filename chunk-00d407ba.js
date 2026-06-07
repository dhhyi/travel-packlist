import{d as Ut}from"./chunk-e94aef17.js";import{D as j,F as R,G as _t,Jb as tt,Kb as st,Lb as Ne,Mb as Ue,Ob as Fe,R as M,S as W,i as We,mb as Ce,o as Re,ob as b,pb as Ve,qb as Pt,xb as Mt,yb as Wt,zb as Vt}from"./chunk-3633d0fb.js";import{a as x,b as O}from"./chunk-16574126.js";var ae=class{condition;questions;items;constructor(s,e=[],a=[]){this.condition=s,this.questions=e,this.items=a;}},fe=(()=>{class n{question;variable;static NEW_QUESTION_NAME="new_question";static NEW_VARIABLE_NAME="new_variable";constructor(e,a){this.question=e,this.variable=a;}}return n;})();function Ft(n){return n?n.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var ge=(()=>{class n{category;name;weight;static NEW_ITEM_NAME="new_item";static NEW_CATEGORY_NAME="new_category";constructor(e,a,f){this.category=e,this.name=a,this.weight=f;}id(){return`${Ft(this.category)}-${Ft(this.name)}`;}equals(e){return this.category===e.category&&this.name===e.name&&this.weight==e.weight;}}return n;})(),q=class{variable;constructor(s){this.variable=s;}evaluate(s){return s[this.variable];}},ze=(()=>{class n extends q{static string="please_select";constructor(){super(n.string);}}return n;})(),le=(()=>{class n extends q{static string="always";constructor(){super(n.string);}evaluate(){return!0;}}return n;})(),J=class{not;constructor(s){this.not=s;}evaluate(s){return!this.not.evaluate(s);}},Z=class{left;right;constructor(s,e){this.left=s,this.right=e;}evaluate(s){return this.left.evaluate(s)&&this.right.evaluate(s);}},X=class{left;right;constructor(s,e){this.left=s,this.right=e;}evaluate(s){return this.left.evaluate(s)||this.right.evaluate(s);}};function lr(n,s){let e=s.filter(f=>f instanceof fe),a=s.filter(f=>f instanceof ge);return new ae(n??new le(),e,a);}function zt(n){return n.length===1?n[0]:new Z(n[0],zt(n.slice(1)));}function Ht(n){return n.length===1?n[0]:new X(n[0],Ht(n.slice(1)));}var ce=class extends SyntaxError{constructor(s,e,a,f){super(s),this.expected=e,this.found=a,this.location=f,this.name="SyntaxError";}format(s){let e="Error: "+this.message;if(this.location){let a=null,f=s.find(v=>v.source===this.location.source);f&&(a=f.text.split(/\r\n|\n|\r/g));let d=this.location.start,p=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(d):d,E=this.location.source+":"+p.line+":"+p.column;if(a){let v=this.location.end,G="".padEnd(p.line.toString().length," "),K=a[d.line-1],A=(d.line===v.line?v.column:K.length+1)-d.column||1;e+=`
 --> `+E+`
`+G+` |
`+p.line+" | "+K+`
`+G+" | "+"".padEnd(d.column-1," ")+"".padEnd(A,"^");}else e+=`
 at `+E;}return e;}static buildMessage(s,e){function a(A){return A.codePointAt(0).toString(16).toUpperCase();}let f=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function d(A){return f?A.replace(f,$=>"\\u{"+a($)+"}"):A;}function p(A){return d(A.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}function E(A){return d(A.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}let v={literal(A){return'"'+p(A.text)+'"';},class(A){let $=A.parts.map(L=>Array.isArray(L)?E(L[0])+"-"+E(L[1]):E(L));return"["+(A.inverted?"^":"")+$.join("")+"]"+(A.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(A){return A.description;}};function G(A){return v[A.type](A);}function K(A){let $=A.map(G);if($.sort(),$.length>0){let L=1;for(let z=1;z<$.length;z++)$[z-1]!==$[z]&&($[L]=$[z],L++);$.length=L;}switch($.length){case 1:return $[0];case 2:return $[0]+" or "+$[1];default:return $.slice(0,-1).join(", ")+", or "+$[$.length-1];}}function F(A){return A?'"'+p(A)+'"':"end of input";}return"Expected "+K(s)+" but "+F(e)+" found.";}};function Q(n,s){s=s!==void 0?s:{};let e={},a=s.grammarSource,f={Rules:St,Rule:Qe,Condition:yt,Effects:Tt,Question:Ke,Item:Je,VariableName:Ye,QuestionString:kt,ItemNameAndWeight:Rt,CategoryName:xt},d=St,p="#",E=";",v=":-",G="OR",K="AND",F="NOT",A=",",$="$",L="[",z="]",ie="kg",re="g",oe=".",B=/^[^\n\r]/,pe=/^[^$,;#]/,Ae=/^[a-zA-Z]/,he=/^[a-zA-Z0-9\-[\](){}_]/,me=/^[^\],;#[]/,ye=/^[,;]/,S=/^[^$ ,;#]/,_=/^[0-9]/,I=/^[ \t\n\r]/,te=V("title"),we=H("#",!1),ue=ne([`
`,"\r"],!0,!1,!1),h=V("comment"),w=V("rule end"),D=H(";",!1),Ee=V("rule"),C=H(":-",!1),k=V("condition"),se=H("OR",!1),ve=H("AND",!1),Te=H("NOT",!1),Be=H(",",!1),ft=V("question"),As=H("$",!1),gt=ne(["$",",",";","#"],!0,!1,!1),ys=V("variable name"),Es=ne([["a","z"],["A","Z"]],!1,!1,!1),dt=ne([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),vs=V("item"),Ts=V("category"),ks=H("[",!1),xs=H("]",!1),Rs=V("category name"),pt=ne(["]",",",";","#","["],!0,!1,!1),Cs=V("item name"),Ns=V("word"),Os=ne([",",";"],!1,!1,!1),ht=ne(["$"," ",",",";","#"],!0,!1,!1),Is=V("weight"),Ds=H("kg",!1),Ls=H("g",!1),_s=V("number"),Le=ne([["0","9"]],!1,!1,!1),Ps=H(".",!1),mt=ne([" ","	",`
`,"\r"],!1,!1,!1),Ms=sr();function Ws(t,r,o){return r.title=t?.trim(),r.rulesContainComments=Dt,r.warnings=o,r;}function Vs(t){if(t.trim().length)return t.trim();}function Us(t){if(t.trim().length)return Dt=!0,t.trim();}function Fs(t,r){return lr(t,r);}function zs(t){return Ht(t);}function Hs(t){return zt(t);}function js(t){return new J(t);}function qs(t){return Xe.add(t),new q(t);}function Bs(t,r){return Pe.has(r)&&Me.push({variable:r,type:"duplicate"}),Pe.add(r),new fe(t.trim(),r);}function Qs(t,r){let{name:o,weight:l}=r;return new ge(t.trim(),o,l);}function Gs(t,r){return s.trackWeight;}function Ks(t,r){let o=t.trim();return o.length||wt("item name"),{name:o,weight:r};}function Ys(t){let r=t.trim();return r.length||wt("item name"),{name:r,weight:void 0};}function Js(t){return t*1e3;}function Zs(){return parseFloat(er());}function Xs(){for(let t of Xe)t!==ze.string&&t!==le.string&&!Pe.has(t)&&Me.push({variable:t,type:"undeclared"});for(let t of Pe)Xe.has(t)||Me.push({variable:t,type:"unused"});return Me;}let i=s.peg$currPos|0,N=i,be=[{line:1,column:1}],Y=i,_e=s.peg$maxFailExpected||[],c=s.peg$silentFails|0,ke;if(s.startRule){if(!(s.startRule in f))throw new Error(`Can't start parsing from rule "`+s.startRule+'".');d=f[s.startRule];}function er(){return n.substring(N,i);}function _r(){return N;}function Pr(){return{source:a,start:N,end:i};}function Mr(){return xe(N,i);}function wt(t,r){throw r=r!==void 0?r:xe(N,i),$t([V(t)],n.substring(N,i),r);}function Wr(t,r){throw r=r!==void 0?r:xe(N,i),nr(t,r);}function tr(t=i){let r=n.codePointAt(t);return r===void 0?"":String.fromCodePoint(r);}function H(t,r){return{type:"literal",text:t,ignoreCase:r};}function ne(t,r,o,l){return{type:"class",parts:t,inverted:r,ignoreCase:o,unicode:l};}function sr(){return{type:"any"};}function rr(){return{type:"end"};}function V(t){return{type:"other",description:t};}function bt(t){let r=be[t],o;if(r)return r;if(t>=be.length)o=be.length-1;else for(o=t;!be[--o];);for(r=be[o],r={line:r.line,column:r.column};o<t;)n.charCodeAt(o)===10?(r.line++,r.column=1):r.column++,o++;return be[t]=r,r;}function xe(t,r,o){let l=bt(t),u=bt(r),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:u.line,column:u.column}};return o&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function m(t){i<Y||(i>Y&&(Y=i,_e=[]),_e.push(t));}function nr(t,r){return new ce(t,null,null,r);}function $t(t,r,o){return new ce(ce.buildMessage(t,r),t,r,o);}function St(){let t,r,o,l,u,g,y,P;for(t=i,r=T(),o=ir(),o===e&&(o=null),l=T(),u=[],g=Qe();g!==e;)u.push(g),g=i,y=At(),y!==e?(y=Qe(),y===e?(i=g,g=e):g=y):g=y;return g=At(),g===e&&(g=null),y=T(),P=It(),P!==e?(N=t,t=Ws(o,u,P)):(i=t,t=e),t;}function ir(){let t,r,o,l,u,g;if(c++,t=i,n.charCodeAt(i)===35?(r=p,i++):(r=e,c===0&&m(we)),r!==e){if(o=T(),l=i,u=[],g=n.charAt(i),B.test(g)?i++:(g=e,c===0&&m(ue)),g!==e)for(;g!==e;)u.push(g),g=n.charAt(i),B.test(g)?i++:(g=e,c===0&&m(ue));else u=e;u!==e?l=n.substring(l,i):l=u,l!==e?(u=T(),N=t,t=Vs(l)):(i=t,t=e);}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(te)),t;}function $e(){let t,r,o,l,u;if(c++,t=i,n.charCodeAt(i)===35?(r=p,i++):(r=e,c===0&&m(we)),r!==e){if(o=i,l=[],u=n.charAt(i),B.test(u)?i++:(u=e,c===0&&m(ue)),u!==e)for(;u!==e;)l.push(u),u=n.charAt(i),B.test(u)?i++:(u=e,c===0&&m(ue));else l=e;l!==e?o=n.substring(o,i):o=l,o!==e?(l=T(),N=t,t=Us(o)):(i=t,t=e);}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(h)),t;}function At(){let t,r,o,l,u,g;if(c++,t=i,r=T(),n.charCodeAt(i)===59?(o=E,i++):(o=e,c===0&&m(D)),o!==e){for(l=T(),u=[],g=$e();g!==e;)u.push(g),g=$e();g=T(),r=[r,o,l,u,g],t=r;}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(w)),t;}function Qe(){let t,r,o,l,u,g,y,P;for(c++,t=i,r=[],o=$e();o!==e;)r.push(o),o=$e();return o=T(),l=yt(),l===e&&(l=null),u=T(),n.substr(i,2)===v?(g=v,i+=2):(g=e,c===0&&m(C)),g!==e?(y=T(),P=Tt(),N=t,t=Fs(l,P)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(Ee)),t;}function yt(){let t,r;return c++,t=or(),c--,t===e&&(r=e,c===0&&m(k)),t;}function or(){let t,r,o,l,u,g,y,P;for(c++,t=i,r=i,o=[],l=Et();l!==e;)o.push(l),l=i,u=i,g=T(),n.substr(i,2)===G?(y=G,i+=2):(y=e,c===0&&m(se)),y!==e?(P=T(),g=[g,y,P],u=g):(i=u,u=e),u!==e?(u=Et(),u===e?(i=l,l=e):l=u):l=u;return o.length<1?(i=r,r=e):r=o,r!==e&&(N=t,r=zs(r)),t=r,c--,t===e&&(r=e,c===0&&m(k)),t;}function Et(){let t,r,o,l,u,g,y,P;for(c++,t=i,r=i,o=[],l=Ge();l!==e;)o.push(l),l=i,u=i,g=T(),n.substr(i,3)===K?(y=K,i+=3):(y=e,c===0&&m(ve)),y!==e?(P=T(),g=[g,y,P],u=g):(i=u,u=e),u!==e?(u=Ge(),u===e?(i=l,l=e):l=u):l=u;return o.length<1?(i=r,r=e):r=o,r!==e&&(N=t,r=Hs(r)),t=r,c--,t===e&&(r=e,c===0&&m(k)),t;}function Ge(){let t,r,o,l,u,g;return c++,t=i,n.substr(i,3)===F?(r=F,i+=3):(r=e,c===0&&m(Te)),r!==e?(o=T(),n.substr(i,3)===F?(l=F,i+=3):(l=e,c===0&&m(Te)),l!==e?(u=T(),g=Ge(),g!==e?t=g:(i=t,t=e)):(i=t,t=e)):(i=t,t=e),t===e&&(t=i,n.substr(i,3)===F?(r=F,i+=3):(r=e,c===0&&m(Te)),r!==e?(o=T(),l=vt(),l!==e?(N=t,t=js(l)):(i=t,t=e)):(i=t,t=e),t===e&&(t=i,r=vt(),r!==e?t=r:(i=t,t=e))),c--,t===e&&(r=e,c===0&&m(k)),t;}function vt(){let t,r;return t=i,r=Ye(),r!==e&&(N=t,r=qs(r)),t=r,t;}function Tt(){let t,r,o,l,u,g,y,P,Se;for(t=i,r=[],o=Ke(),o===e&&(o=Je());o!==e;){if(r.push(o),o=i,l=i,u=T(),n.charCodeAt(i)===44?(g=A,i++):(g=e,c===0&&m(Be)),g!==e){for(y=T(),P=[],Se=$e();Se!==e;)P.push(Se),Se=$e();Se=T(),u=[u,g,y,P,Se],l=u;}else i=l,l=e;l!==e?(l=Ke(),l===e&&(l=Je()),l===e?(i=o,o=e):o=l):o=l;}return t=r,t;}function Ke(){let t,r,o,l;return c++,t=i,r=kt(),r!==e?(n.charCodeAt(i)===36?(o=$,i++):(o=e,c===0&&m(As)),o!==e?(l=Ye(),l!==e?(N=t,t=Bs(r,l)):(i=t,t=e)):(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(ft)),t;}function kt(){let t,r,o;if(c++,t=i,r=[],o=n.charAt(i),pe.test(o)?i++:(o=e,c===0&&m(gt)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),pe.test(o)?i++:(o=e,c===0&&m(gt));else r=e;return r!==e?t=n.substring(t,i):t=r,c--,t===e&&(r=e,c===0&&m(ft)),t;}function Ye(){let t,r,o,l,u;if(c++,t=i,r=i,o=n.charAt(i),Ae.test(o)?i++:(o=e,c===0&&m(Es)),o!==e){for(l=[],u=n.charAt(i),he.test(u)?i++:(u=e,c===0&&m(dt));u!==e;)l.push(u),u=n.charAt(i),he.test(u)?i++:(u=e,c===0&&m(dt));o=[o,l],r=o;}else i=r,r=e;return r!==e?t=n.substring(t,i):t=r,c--,t===e&&(r=e,c===0&&m(ys)),t;}function Je(){let t,r,o,l;return c++,t=i,r=ar(),r!==e?(o=T(),l=Rt(),l!==e?(N=t,t=Qs(r,l)):(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(vs)),t;}function ar(){let t,r,o,l,u,g;return c++,t=i,n.charCodeAt(i)===91?(r=L,i++):(r=e,c===0&&m(ks)),r!==e?(o=T(),l=xt(),l!==e?(u=T(),n.charCodeAt(i)===93?(g=z,i++):(g=e,c===0&&m(xs)),g!==e?t=l:(i=t,t=e)):(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(Ts)),t;}function xt(){let t,r,o;if(c++,t=i,r=[],o=n.charAt(i),me.test(o)?i++:(o=e,c===0&&m(pt)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),me.test(o)?i++:(o=e,c===0&&m(pt));else r=e;return r!==e?t=n.substring(t,i):t=r,c--,t===e&&(r=e,c===0&&m(Rs)),t;}function Rt(){let t,r,o,l,u;for(c++,t=i,r=i,o=[],l=Ct();l!==e;)o.push(l),l=i,u=T(),u=Ct(),u===e?(i=l,l=e):l=u;if(r=n.substring(r,i),o=T(),l=Nt(),l!==e?(N=i,u=Gs(r,l),u?u=void 0:u=e,u!==e?(N=t,t=Ks(r,l)):(i=t,t=e)):(i=t,t=e),t===e){for(t=i,r=i,o=[],l=Ze();l!==e;)o.push(l),l=i,u=T(),u=Ze(),u===e?(i=l,l=e):l=u;r=n.substring(r,i),N=t,r=Ys(r),t=r;}return c--,t===e&&(r=e,c===0&&m(Cs)),t;}function Ct(){let t,r,o,l,u,g;return c++,t=i,r=i,c++,o=i,l=Nt(),l!==e?(u=T(),g=It(),g===e&&(g=n.charAt(i),ye.test(g)?i++:(g=e,c===0&&m(Os))),g!==e?(l=[l,u,g],o=l):(i=o,o=e)):(i=o,o=e),c--,o===e?r=void 0:(i=r,r=e),r!==e?(o=Ze(),o!==e?t=o:(i=t,t=e)):(i=t,t=e),c--,t===e&&(r=e,c===0&&m(Ns)),t;}function Ze(){let t,r,o;if(t=i,r=[],o=n.charAt(i),S.test(o)?i++:(o=e,c===0&&m(ht)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),S.test(o)?i++:(o=e,c===0&&m(ht));else r=e;return r!==e?t=n.substring(t,i):t=r,t;}function Nt(){let t,r,o;return c++,t=i,r=Ot(),r!==e?(n.substr(i,2)===ie?(o=ie,i+=2):(o=e,c===0&&m(Ds)),o!==e?(N=t,t=Js(r)):(i=t,t=e)):(i=t,t=e),t===e&&(t=i,r=Ot(),r!==e?(n.charCodeAt(i)===103?(o=re,i++):(o=e,c===0&&m(Ls)),o===e&&(o=null),t=r):(i=t,t=e)),c--,t===e&&(r=e,c===0&&m(Is)),t;}function Ot(){let t,r,o,l,u,g,y;if(c++,t=i,r=[],o=n.charAt(i),_.test(o)?i++:(o=e,c===0&&m(Le)),o!==e)for(;o!==e;)r.push(o),o=n.charAt(i),_.test(o)?i++:(o=e,c===0&&m(Le));else r=e;if(r!==e){if(o=i,n.charCodeAt(i)===46?(l=oe,i++):(l=e,c===0&&m(Ps)),l!==e){if(u=i,g=[],y=n.charAt(i),_.test(y)?i++:(y=e,c===0&&m(Le)),y!==e)for(;y!==e;)g.push(y),y=n.charAt(i),_.test(y)?i++:(y=e,c===0&&m(Le));else g=e;g!==e?u=n.substring(u,i):u=g,u!==e?(l=[l,u],o=l):(i=o,o=e);}else i=o,o=e;o===e&&(o=null),N=t,t=Zs();}else i=t,t=e;return c--,t===e&&(r=e,c===0&&m(_s)),t;}function T(){let t,r;for(c++,t=[],r=n.charAt(i),I.test(r)?i++:(r=e,c===0&&m(mt));r!==e;)t.push(r),r=n.charAt(i),I.test(r)?i++:(r=e,c===0&&m(mt));return c--,t;}function It(){let t,r,o;return t=i,r=i,c++,n.length>i?(o=n.charAt(i),i++):(o=e,c===0&&m(Ms)),c--,o===e?r=void 0:(i=r,r=e),r!==e&&(N=t,r=Xs()),t=r,t;}let Dt=!1,Xe=new Set(),Pe=new Set(),Me=[];ke=d();let et=ke!==e&&i===n.length;function Lt(){throw ke!==e&&i<n.length&&m(rr()),$t(_e,Y<n.length?tr(Y):null,Y<n.length?xe(Y,Y+1):xe(Y,Y));}if(s.peg$library)return{peg$result:ke,peg$currPos:i,peg$FAILED:e,peg$maxFailExpected:_e,peg$maxFailPos:Y,peg$success:et,peg$throw:et?void 0:Lt};if(et)return ke;Lt();}var Oe=class{parser;constructor(s){this.parser=s;}extractVariablesFromCondition(s){if(s instanceof le||s instanceof ze)return new Set();if(s instanceof q)return new Set([s.variable]);if(s instanceof J)return this.extractVariablesFromCondition(s.not);if(s instanceof Z||s instanceof X)return this.extractVariablesFromCondition(s.left).union(this.extractVariablesFromCondition(s.right));throw new Error("unknown condition type");}extractVariables(s,e=!1){return s.reduce((a,f)=>{let d=a.union(new Set(f.questions.map(p=>p.variable)));return e?d:d.union(this.extractVariablesFromCondition(f.condition));},new Set());}extractCategories(s){let e=new Set();for(let a of s)for(let f of a.items)e.add(f.category);return Array.from(e);}extractQuestions(s){return s.flatMap(e=>e.questions);}renameVariable(s,e,a){if(a instanceof Array)return a.map(d=>this.renameVariable(s,e,d));if(a instanceof fe)return a.variable===s?new fe(a.question,e):a;if(a instanceof ae)return new ae(this.renameVariable(s,e,a.condition),a.questions.map(d=>this.renameVariable(s,e,d)),a.items);if(a instanceof q)return a.variable===s?new q(e):a;if(a instanceof J)return new J(this.renameVariable(s,e,a.not));if(a instanceof Z)return new Z(this.renameVariable(s,e,a.left),this.renameVariable(s,e,a.right));if(a instanceof X)return new X(this.renameVariable(s,e,a.left),this.renameVariable(s,e,a.right));let f=a;throw new Error("Unknown item type: "+f);}filterActive(s){let e=s.rules.filter(d=>d.condition.evaluate(s.model)),a=this.extractVariables(e,!0),f=Array.from(a).reduce((d,p)=>O(x({},d),{[p]:s.model[p]}),{[le.string]:!0});return e.length===s.rules.length?{model:f,rules:e}:this.filterActive({model:f,rules:e});}contains(s,e){let a=e.toLowerCase();if(s instanceof ae)return this.contains(s.condition,e)||s.questions.some(d=>this.contains(d,e))||s.items.some(d=>this.contains(d,e));if(s instanceof fe)return s.question.toLowerCase().includes(a)||s.variable.toLowerCase().includes(a);if(s instanceof ge)return s.category.toLowerCase().includes(a)||s.name.toLowerCase().includes(a);if(s instanceof q)return s.variable.toLowerCase().includes(a);if(s instanceof J)return this.contains(s.not,e);if(s instanceof Z)return this.contains(s.left,e)||this.contains(s.right,e);if(s instanceof X)return this.contains(s.left,e)||this.contains(s.right,e);let f=s;throw new Error("Unknown item type: "+f);}countItemsAndWeights(s){return s.reduce((e,a)=>a.items.reduce((f,d)=>{let p;return this.parser.isTrackWeight()?p=d.weight?1:0:p=this.parser.forceParseWeight(d.name)?1:0,{items:f.items+1,weights:f.weights+p};},e),{items:0,weights:0});}};function cr(n){let s=n.title?.trim();return(s?`# ${s}

`:"")+n.map(a=>fr(a)).map(a=>a+";").join(`

`)+`
`;}function He(n,s,e=-1){if(!n)return"0g";let a=(e<0?n/1e3:(n/1e3).toFixed(e)).toString()+"kg",f=n.toString()+"g";return s?s==="kg"?a:f:a.length<=f.length?a:f;}function ur(n,s){return He(n,void 0,1)+" / "+He(s,void 0,1);}function fr(n){let s=[];if(!(n.condition instanceof le)){let a=de(n.condition);a&&s.push(a," ");}s.push(":-");let e=n.questions.map(a=>jt(a)).concat(n.items.map(a=>qt(a)));if(e.length===1&&s.length===1)s.push(" ",e[0]);else for(let a=0;a<e.length;a++){let f=e[a];a>0&&s.push(","),s.push(`
`,"   ",f);}return s.join("");}function jt(n){return n.question+" $"+n.variable;}function qt(n){let s=`[${n.category}] ${n.name}`.trim();return n.weight&&(s+=" "+He(n.weight)),s;}function de(n){if(n instanceof q)return n.variable;if(n instanceof J)return"NOT "+de(n.not);if(n instanceof Z)return de(n.left)+" AND "+de(n.right);if(n instanceof X)return de(n.left)+" OR "+de(n.right);throw new Error("Unknown condition type");}var gr={isTrackWeight:()=>!1},Ie=class{config;constructor(s=gr){this.config=s;}isTrackWeight(){return this.config.isTrackWeight();}makeOptions(s,e={}){return{startRule:s,trackWeight:e.forceWeightTracking??this.isTrackWeight()};}parseCondition(s){return Q(s,this.makeOptions("Condition"));}parseQuestion(s){return Q(s,this.makeOptions("Question"));}parseItem(s){return Q(s,this.makeOptions("Item"));}parseEffects(s){return Q(s,this.makeOptions("Effects"));}parseRule(s){return Q(s,this.makeOptions("Rule"));}parseRules(s){try{return Q(s,this.makeOptions("Rules"));}catch(e){let a=[];if(a.push("Error parsing rules"),e instanceof ce){let f=e.location.start.line.toString(),d=e.location.start.column.toString();a.push(" at line ",f," column ",d),a.push(":",`
`,e.message);}else e instanceof Error&&a.push(e.message);throw new Error(a.join(""),{cause:e});}}validateVariableName(s){Q(s,this.makeOptions("VariableName"));}validateQuestionString(s){Q(s,this.makeOptions("QuestionString"));}validateItemNameAndWeight(s){Q(s,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(s){Q(s,this.makeOptions("CategoryName"));}forceParseWeight(s){return Q(s,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}};function dr(n,s){return Object.entries(n).concat(Object.entries(s)).reduce((e,[a,f])=>(e[a]=x(x({},e[a]),f),e),{});}var De=new j("RESET_SIGNAL",{providedIn:"root",factory:()=>M(!1)}),je=class n{state;triggerReset=R(De);constructor(s){this.state=s;}static builder(){return new n({});}extend(s){return new n(dr(this.state,s(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(s=>setTimeout(s,0));}};function Qt(n,s){if(typeof n!=typeof s)return!1;if(n&&s&&typeof n=="object"){let e=Object.keys(n),a=Object.keys(s);return e.length===a.length&&e.every(f=>Qt(n[f],s[f]));}return n===s;}function Bt(n,s){let e=this.getItem("state")??"{}";return JSON.parse(e)[n]??s;}function pr(n,s,e){let a=this.getItem("state")??"{}",f=JSON.parse(a);Qt(s,e)?delete f[n]:s===null?f[n]=void 0:f[n]=s,this.setItem("state",JSON.stringify(f));}function Gt(n,s,e){let a=R(De),f=M(Bt.call(n,s,e));return W(()=>{let d=f();d!==Bt.call(n,s,e)&&pr.call(n,s,d,e);},{manualCleanup:!0}),W(()=>{a()&&f.set(e);}),f;}var ee=(n,s)=>Gt(localStorage,n,s),qe=(n,s)=>Gt(sessionStorage,n,s);var U=ee,Kt=["en","de"],Yt=()=>{let n=U("categorySorting","alphabetically"),s=U("trackWeight",!1);return W(()=>{s()===!1&&n()==="weight"&&n.set("alphabetically");}),{config:{categorySorting:n,trackWeight:s,skipItems:U("skipItems",!1),fadeOutDisabledRules:U("fadeOutDisabledRules",!1),highlightVariableStatus:U("highlightVariableStatus",!1),refactorVariables:U("refactorVariables",!0),confirmRuleDeletion:U("confirmRuleDeletion",!0),rulesTemplate:U("rulesTemplate","default"),theme:U("theme","system"),fontSize:U("fontSize","normal"),accessibility:U("accessibility","accessible"),animations:U("animations",!0),language:U("language","auto"),exportReminder:U("exportReminder",!1)}};};var Jt=({config:{language:n,animations:s},router:{navigationRunning:e}})=>{let a=M(window.scrollY);window.addEventListener("scroll",()=>{a.set(window.scrollY);});let f=(d,p)=>Mt(()=>{!e()&&s()?p.set(d):p.set("");});return{browser:{scrollY:a,isMobile:b(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)),viewTransition:d=>{s()&&"startViewTransition"in document?document.startViewTransition(d):d();},animateEffect:f},config:{preferredLanguage:b(()=>{let d=n();return d==="auto"?navigator.languages.map(v=>v.split("-")[0]).find(v=>Kt.includes(v))??"en":d;})}};};var Zt=(n,s)=>qe(n,s),Xt=()=>({clipboard:{items:Zt("clipboardItems",[]),questions:Zt("clipboardQuestions",[])}});var es=ee;function hr(n){return"cat-"+n.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var nt=class extends ge{original;checked;skipped;colored;visible;constructor(s,e,a,f,d){super(s.category,s.name,s.weight),this.original=s,this.checked=e,this.skipped=a,this.colored=f,this.visible=d;}};function rt(){return{answers:{},checkedItems:[],skippedItems:[],collapsedCategories:[],answersLocked:!1,hideCompleted:!1,statsVisible:void 0,notesVisible:!1,createdAt:Date.now(),modifiedAt:Date.now()};}var ts=({rules:{parsed:n,raw:s},config:{categorySorting:e,skipItems:a}})=>{let f=es("packlistSessions",[rt(),void 0,void 0,void 0]),d=es("currentPacklistSessionIndex",0),p=b(()=>f()[d()]??rt());function E(h){f.update(w=>{let D=h(w[d()]??rt());return w.map((Ee,C)=>C===d()?D:Ee);});}function v(h){E(w=>O(x({},w),{sessionName:h,modifiedAt:Date.now()}));}function G(h){E(w=>O(x({},w),{notes:h,modifiedAt:Date.now()}));}function K(h){E(w=>O(x({},w),{notesVisible:h,modifiedAt:Date.now()}));}function F(h,w){E(D=>O(x({},D),{answers:O(x({},D.answers),{[h]:w}),modifiedAt:Date.now()}));}function A(){E(h=>O(x({},h),{answersLocked:!h.answersLocked,modifiedAt:Date.now()}));}function $(){E(h=>O(x({},h),{hideCompleted:!h.hideCompleted,modifiedAt:Date.now()}));}function L(h){E(w=>O(x({},w),{statsVisible:h,modifiedAt:Date.now()}));}let z=qe("askedWeightTracking",void 0),ie=R(Oe),re=b(()=>ie.filterActive({rules:n.value(),model:p().answers})),oe=b(()=>re().rules),B=b(()=>oe().flatMap(h=>h.items)),pe=b(()=>B().filter(h=>p().checkedItems.includes(h.id())));function Ae(h){p().checkedItems.includes(h.id())?E(w=>O(x({},w),{checkedItems:w.checkedItems.filter(D=>D!==h.id()),modifiedAt:Date.now()})):E(w=>O(x({},w),{checkedItems:[...w.checkedItems,h.id()],modifiedAt:Date.now()}));}let he=b(()=>B().filter(h=>p().skippedItems.includes(h.id())));function me(h){a()&&(p().skippedItems.includes(h.id())?E(w=>O(x({},w),{skippedItems:w.skippedItems.filter(D=>D!==h.id()),modifiedAt:Date.now()})):E(w=>O(x({},w),{skippedItems:[...w.skippedItems,h.id()],modifiedAt:Date.now()})));}function ye(h){p().collapsedCategories.includes(h)?E(w=>O(x({},w),{collapsedCategories:w.collapsedCategories.filter(D=>D!==h),modifiedAt:Date.now()})):E(w=>O(x({},w),{collapsedCategories:[...w.collapsedCategories,h],modifiedAt:Date.now()}));}let S=M([]);function _(h){(S().length!==h.length||!h.every(w=>S().includes(w)))&&S.set(h);}let I=b(()=>{function h(C){return{id:hr(C.category),name:C.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:p().collapsedCategories.includes(C.category),colored:p().statsVisible==="distribution"};}let w=B().reduce((C,k)=>{C[k.category]||(C[k.category]=h(k));let se=a()&&he().includes(k),ve=!se&&pe().includes(k),Te=p().statsVisible==="heaviestItems"&&S().includes(k.id()),Be=p().hideCompleted?!ve&&!se:!0;return C[k.category].items.push(new nt(k,ve,se,Te,Be)),ve&&(C[k.category].checkedItems++,C[k.category].checkedWeight+=k.weight??0),se||(C[k.category].totalItems++,C[k.category].totalWeight+=k.weight??0),C;},{}),Ee=b(()=>{let C=e();return C==="alphabetically"?(k,se)=>k.name.localeCompare(se.name):C==="weight"?(k,se)=>se.totalWeight-k.totalWeight:()=>0;})();return Object.entries(w).map(C=>C[1]).toSorted((C,k)=>Ee(C,k));}),te=b(()=>Object.entries(I()).reduce((h,[,w])=>(h.totalItems+=w.totalItems,h.checkedItems+=w.checkedItems,h.totalWeight+=w.totalWeight,h.checkedWeight+=w.checkedWeight,h),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));function we(){E(h=>O(x({},h),{answersLocked:!1,hideCompleted:!1,statsVisible:void 0,modifiedAt:Date.now()}));}let ue=!0;return W(()=>{s.hasValue()&&s.value()&&(ue?ue=!1:we());}),{rules:{categories:b(()=>ie.extractCategories(n.value())),variables:b(()=>ie.extractVariables(n.value()))},active:{rules:oe,answers:b(()=>re().model),questions:b(()=>oe().flatMap(h=>h.questions))},packlist:{sessions:b(()=>f().filter((h,w)=>w!==0).map((h,w)=>h?{index:w+1,sessionName:h.sessionName,modifiedAt:h.modifiedAt}:void 0)),clearSlot(h){f.update(w=>{let D=[...w];return D[h]=void 0,D;});},currentSlot:d,copySessionToSlot(h){f.update(w=>{let D=[...w];return D[h]=O(x({},p()),{modifiedAt:Date.now()}),D;});},sessionName:b(()=>p().sessionName),setSessionName:v,sessionNotes:b(()=>p().notes),setSessionNotes:G,isNotesVisible:b(()=>p().notesVisible),setNotesVisible:K,answers:b(()=>p().answers),updateAnswer:F,model:I,stats:te,toggleCheckedItem:Ae,toggleSkippedItem:me,colorItems:_,toggleCategoryCollapse:ye,isAnswersLocked:b(()=>p().answersLocked),toggleAnswersLock:A,isHideCompleted:b(()=>p().hideCompleted),toggleHideCompleted:$,isStatsVisible:b(()=>p().statsVisible),setStatsVisible:L,askedWeightTracking:z}};};var it=(n,s)=>{let e=R(Fe),a=R(Ue),f=R(De),d=M(void 0);return e.events.pipe(Re(p=>p instanceof Ne),We(()=>a.snapshot.queryParams[n]??s)).subscribe(p=>{p!==""&&d.set(p);}),W(()=>{let p=d()||void 0;p===s&&(p=void 0),a.snapshot.queryParams[n]!==p&&e.navigate([],{queryParams:{[n]:p},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),W(()=>{f()&&d.set(s);}),d;};var mr={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});},"config#session->restore"(){this.router.navigate(["/session"],{queryParams:{type:"restore"}});},"config#session->new"(){this.router.navigate(["/session"],{queryParams:{type:"new"}});}},ss=()=>{let n=R(Fe),s=R(Ue),e=it("rulesMode","view"),a=tt(s.fragment,{requireSync:!0}),f=Ve(()=>a()??void 0);W(()=>{let v=f();v!==a()&&n.navigate([],{fragment:v,relativeTo:s,replaceUrl:!0,queryParamsHandling:"merge"});});let d=R(Vt),p=M(d.path());n.events.pipe(Re(v=>v instanceof Ne)).subscribe(()=>{d.path()!==p()&&p.set(d.path());});let E=tt(n.events.pipe(Re(v=>v instanceof st||v instanceof Ne),We(v=>v instanceof st)),{initialValue:!0});return{router:{rulesMode:e,filterRulesQuery:it("filterRulesQuery",""),path:p.asReadonly(),fragment:f,go:v=>{mr[v].call({router:n,rulesMode:e});},navigationRunning:E}};};var rs=({config:{trackWeight:n},rules:{raw:s},remoteRules:{setCurrentTitleForHistory:e}})=>{let a=R(Ie),f=[],d=Wt(b(()=>{if(n(),s.status()==="resolved"&&s.hasValue()&&typeof s.value()=="string")try{let p=a.parseRules(s.value());return f=p,{value:p,status:"resolved",error:void 0};}catch(p){return{status:"error",value:f,error:p};}else return s.status()==="error"?{status:"error",value:f,error:s.error()??new Error("Unknown error while loading rules")}:s.isLoading()?{status:"loading",value:f}:{status:"idle",value:f};}));return W(()=>{if(d.hasValue()){let p=d.value();e(p.title);}}),{rules:{parsed:d,hasError:b(()=>d.status()==="error"||s.status()==="error"),isLoading:b(()=>d.isLoading()||s.isLoading())}};};var ns=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,is={name:"GitHub Gist",test:n=>ns.test(n),transform:n=>{let s=ns.exec(n);if(!s)return n;let[,e,a,,f]=s;return f?`https://gist.githubusercontent.com/${e}/${a}/raw/${f}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var ot=class{name="GitHub";test(s){return s.startsWith("https://github.com/");}transform(s){return s.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},os=new ot();var as=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,wr={name:"Google Drive",needsCORS:!0,test:n=>as.test(n),transform:n=>{let s=as.exec(n);return s?`https://drive.google.com/uc?export=download&id=${s[1]}`:n;}},ls=wr;var br={name:"Pastebin",needsCORS:!0,test:n=>n.startsWith("https://pastebin.com/")&&!n.includes("/raw/"),transform:n=>n.replace("https://pastebin.com/","https://pastebin.com/raw/")},cs=br;var $r=[is,os,ls,cs];function us(n,s){if(n){let e=$r.find(a=>a.test(n));if(e){let a=e.transform(n);return s&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return n;}var fs=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var gs=`# Beispiel Packliste

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
`;var ds=`# Example Packlist

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
`;var ps=`:- [Neu] Dies ist dein erster Gegenstand;
`;var hs=`:- [New] This is your first item;
`;var ms=`# Example Logic Demonstration

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
`;var at=new j("BACKPACKING_RULES_TEMPLATE");function kr(){return fs;}var lt=new j("DEFAULT_RULES_TEMPLATE");function xr(n){return n.startsWith("de")?gs:ds;}var ct=new j("EMPTY_RULES_TEMPLATE");function Rr(n){return n.startsWith("de")?ps:hs;}var ut=new j("LOGIC_RULES_TEMPLATE");function Cr(){return ms;}function ai(){return _t([{provide:at,useFactory:kr,deps:[Ce]},{provide:lt,useFactory:xr,deps:[Ce]},{provide:ct,useFactory:Rr,deps:[Ce]},{provide:ut,useFactory:Cr,deps:[Ce]}]);}var ws=new j("CAPACITOR_HTTP_REQUEST_MODE");function Nr(n){switch(n){case 400:return"Ung\xFCltige Anfrage";case 401:return"Nicht autorisiert";case 403:return"Verboten";case 404:return"Nicht gefunden";case 500:return"interner Serverfehler";case 504:return"Zeit\xFCberschreitung";default:return;}}var bs=({config:{rulesTemplate:n}})=>{let s=ee("rulesMode","template"),e=ee("rules",void 0),a=b(()=>e()!==void 0),f=b(()=>{let S=e();if(S)return Or(S).toString(16);}),d=ee("lastExportHash",void 0),p=ee("lastExportDate",void 0),E=()=>{d.set(f()),p.set(new Date().getTime());},v=M(new Date().getTime());W(()=>{e(),v.set(new Date().getTime());});let G=R(lt),K=R(ct),F=R(ut),A=R(at),$=b(()=>{switch(n()){case"empty":return K;case"logic":return F;case"backpacking":return A;default:return G;}}),L=ee("remoteHistory",[]),z=ee("remoteHistoryTitle",{}),ie=function(S){L.update(_=>_.filter(I=>I!==S)),z.update(_=>{let I=x({},_);return delete I[S],I;});},re=Ve(()=>s()==="remote"?L()[0]:void 0),oe=R(ws,{optional:!0})??"cors",B=Pt({params:()=>({mode:s(),rawLocal:e(),remote:re(),template:$()}),loader:({params:S})=>{switch(S.mode){case"local":return Promise.resolve(S.rawLocal);case"template":return Promise.resolve(S.template);case"remote":if(S.remote){if(!S.remote.startsWith("http"))throw new Error("Invalid URL");let _=us(S.remote,oe==="cors");return Ut.get({url:_,webFetchExtra:{mode:oe}}).then(I=>{if(I.status>=200&&I.status<300)return L.update(te=>[S.remote,...te.filter(we=>we!==S.remote)]),I.data;{let te=[["HTTP Fehler",I.status.toString()].join(" "),Nr(I.status)].join(": ");throw new Error(te);}});}else return Promise.resolve(void 0);}}}),pe=function(S){re()!==S&&(s()!=="remote"&&s.set("remote"),re.set(S));},Ae=function(S){let _=re();s()==="remote"&&_&&z.update(I=>{if(S)return O(x({},I),{[_]:S});{let te=x({},I);return delete te[_],te;}});},he=function(S){s.set("local"),e.set(S);},me=function(){e.set(B.value()),s.set("local"),E();},ye=function(){B.reload();};return{rules:{mode:s,raw:B.asReadonly(),reload:ye,lastAction:v.asReadonly(),hash:f,exportNeeded:b(()=>s()==="local"&&f()!==d()),markAsCurrent:E,localRulesAvailable:a},export:{lastDate:p.asReadonly()},localRules:{updateRules:he,copyFromCurrent:me},remoteRules:{load:pe,setCurrentTitleForHistory:Ae,history:b(()=>L().map(S=>({url:S,title:z()[S]}))),removeFromHistory:ie}};},Or=function(n,s=0){let e=3735928559^s,a=1103547991^s;for(let f=0,d;f<n.length;f++)d=n.charCodeAt(f),e=Math.imul(e^d,2654435761),a=Math.imul(a^d,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var $s=()=>({serviceWorker:{status:M("init")}});function Ir(){return je.builder().extend(ss).extend(Xt).extend($s).extend(Yt).extend(Jt).extend(bs).extend(rs).extend(ts);}var Ss=new j("STATE_BUILDER",{providedIn:"root",factory:()=>Ir()}),Dr=new j("GLOBAL_STATE",{providedIn:"root",factory:()=>R(Ss).build()}),Lr=new j("RESET_SWITCH",{providedIn:"root",factory:()=>{let n=R(Ss);return async()=>{await n.reset();};}});export{ae as a,fe as b,ge as c,q as d,ze as e,le as f,J as g,Z as h,X as i,ce as j,Ie as k,Oe as l,cr as m,He as n,ur as o,jt as p,qt as q,ai as r,ws as s,Dr as t,Lr as u};/**i18n:3c733494c05bf9283e4c29bf500547c037b44a892b0e31592bc28a01859422af*/