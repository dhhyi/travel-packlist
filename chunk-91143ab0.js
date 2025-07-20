import{d as xt}from"./chunk-88d5c091.js";import{b as Rt,k as kt,l as ve,m as Ce,o as Oe}from"./chunk-f5659769.js";import{$ as W,B as Re,Y as ke,ba as T,ca as Tt,nc as me,pa as C,pc as k,qc as I,r as yt,rc as xe,sc as At}from"./chunk-cccbad7d.js";import{a as X,b as Ae}from"./chunk-ecf0d82d.js";function vs(s){let o=s.title?.trim();return(o?`# ${o}

`:"")+s.map(a=>a.toString()).map(a=>a+";").join(`

`);}function Ne(s,o,e=-1){if(!s)return"0g";let a=(e<0?s/1e3:(s/1e3).toFixed(e)).toString()+"kg",c=s.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Cs(s,o){return Ne(s,void 0,1)+" / "+Ne(o,void 0,1);}var ee=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof we)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},Y=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function vt(s){return s?s.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var J=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${vt(this.category)}-${vt(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+Ne(this.weight)),o;}},K=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Is=(()=>{class s extends K{static string="please_select";constructor(){super(s.string);}}return s;})(),we=(()=>{class s extends K{static string="always";constructor(){super(s.string);}evaluate(){return!0;}}return s;})(),te=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},re=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},se=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Zr(s,o){let e=o.filter(c=>c instanceof Y),a=o.filter(c=>c instanceof J);return new ee(s??new we(),e,a);}function Ct(s){return s.length===1?s[0]:new re(s[0],Ct(s.slice(1)));}function Ot(s){return s.length===1?s[0]:new se(s[0],Ot(s.slice(1)));}var ne=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(O=>O.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let p=this.location.start,d=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,R=this.location.source+":"+d.line+":"+d.column;if(a){let O=this.location.end,B="".padEnd(d.line.toString().length," "),U=a[p.line-1],b=(p.line===O.line?O.column:U.length+1)-p.column||1;e+=`
 --> `+R+`
`+B+` |
`+d.line+" | "+U+`
`+B+" | "+"".padEnd(p.column-1," ")+"".padEnd(b,"^");}else e+=`
 at `+R;}return e;}static buildMessage(o,e){function a(b){return b.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p(b){return c?b.replace(c,w=>"\\u{"+a(w)+"}"):b;}function d(b){return p(b.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}function R(b){return p(b.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}let O={literal(b){return'"'+d(b.text)+'"';},class(b){let w=b.parts.map(N=>Array.isArray(N)?R(N[0])+"-"+R(N[1]):R(N));return"["+(b.inverted?"^":"")+w.join("")+"]"+(b.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(b){return b.description;}};function B(b){return O[b.type](b);}function U(b){let w=b.map(B);if(w.sort(),w.length>0){let N=1;for(let F=1;F<w.length;F++)w[F-1]!==w[F]&&(w[N]=w[F],N++);w.length=N;}switch(w.length){case 1:return w[0];case 2:return w[0]+" or "+w[1];default:return w.slice(0,-1).join(", ")+", or "+w[w.length-1];}}function D(b){return b?'"'+d(b)+'"':"end of input";}return"Expected "+U(o)+" but "+D(e)+" found.";}};function H(s,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:at,Rule:We,Condition:ct,Effects:gt,Question:Me,Item:Fe,VariableName:Ue,QuestionString:pt,ItemNameAndWeight:dt,CategoryName:ht},p=at,d="#",R=";",O=":-",B="OR",U="AND",D="NOT",b=",",w="$",N="[",F="]",oe="kg",Z="g",ae=".",j=/^[^\n\r]/,le=/^[^$,;#]/,ce=/^[a-zA-Z]/,ue=/^[a-zA-Z0-9\-[\](){}_]/,m=/^[^\],;#[]/,x=/^[,;]/,S=/^[^ ,;#]/,L=/^[0-9]/,$=/^[ \t\n\r]/,A=_("title"),z=V("#",!1),ie=Q([`
`,"\r"],!0,!1,!1),_e=_("comment"),ir=_("rule end"),or=V(";",!1),ar=_("rule"),lr=V(":-",!1),Ee=_("condition"),cr=V("OR",!1),ur=V("AND",!1),Pe=V("NOT",!1),fr=V(",",!1),Ze=_("question"),gr=V("$",!1),Xe=Q(["$",",",";","#"],!0,!1,!1),pr=_("variable name"),hr=Q([["a","z"],["A","Z"]],!1,!1,!1),et=Q([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),dr=_("item"),mr=_("category"),wr=V("[",!1),$r=V("]",!1),br=_("category name"),tt=Q(["]",",",";","#","["],!0,!1,!1),Sr=_("item name"),Er=_("word"),yr=Q([",",";"],!1,!1,!1),rt=Q([" ",",",";","#"],!0,!1,!1),Tr=_("weight"),Ar=V("kg",!1),Rr=V("g",!1),kr=_("number"),ye=Q([["0","9"]],!1,!1,!1),xr=V(".",!1),st=Q([" ","	",`
`,"\r"],!1,!1,!1),vr=qr();function Cr(t,r){return r.title=t?.trim(),r.rulesContainComments=St,r;}function Or(t){if(t.trim().length)return t.trim();}function Nr(t){if(t.trim().length)return St=!0,t.trim();}function Ir(t,r){return Zr(t,r);}function Lr(t){return Ot(t);}function _r(t){return Ct(t);}function Pr(t){return new te(t);}function Wr(t){return new K(t);}function Dr(t,r){return new Y(t.trim(),r.trim());}function Mr(t,r){let{name:i,weight:l}=r;return new J(t.trim(),i,l);}function Ur(t,r){return o.trackWeight;}function Fr(t,r){let i=t.trim();return i.length||nt("item name"),{name:i,weight:r};}function jr(t){let r=t.trim();return r.length||nt("item name"),{name:r,weight:void 0};}function Vr(t){return t*1e3;}function zr(){return parseFloat(Hr());}let n=o.peg$currPos|0,v=n,fe=[{line:1,column:1}],q=n,Te=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,he;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=c[o.startRule];}function Hr(){return s.substring(v,n);}function As(){return v;}function Rs(){return{source:a,start:v,end:n};}function ks(){return de(v,n);}function nt(t,r){throw r=r!==void 0?r:de(v,n),ot([_(t)],s.substring(v,n),r);}function xs(t,r){throw r=r!==void 0?r:de(v,n),Kr(t,r);}function Br(t=n){let r=s.codePointAt(t);return r===void 0?"":String.fromCodePoint(r);}function V(t,r){return{type:"literal",text:t,ignoreCase:r};}function Q(t,r,i,l){return{type:"class",parts:t,inverted:r,ignoreCase:i,unicode:l};}function qr(){return{type:"any"};}function Gr(){return{type:"end"};}function _(t){return{type:"other",description:t};}function it(t){let r=fe[t],i;if(r)return r;if(t>=fe.length)i=fe.length-1;else for(i=t;!fe[--i];);for(r=fe[i],r={line:r.line,column:r.column};i<t;)s.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return fe[t]=r,r;}function de(t,r,i){let l=it(t),f=it(r),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function h(t){n<q||(n>q&&(q=n,Te=[]),Te.push(t));}function Kr(t,r){return new ne(t,null,null,r);}function ot(t,r,i){return new ne(ne.buildMessage(t,r),t,r,i);}function at(){let t,r,i,l,f,g,E,P;for(t=n,r=y(),i=Qr(),i===e&&(i=null),l=y(),f=[],g=We();g!==e;)f.push(g),g=n,E=lt(),E!==e?(E=We(),E===e?(n=g,g=e):g=E):g=E;return g=lt(),g===e&&(g=null),E=y(),P=bt(),P!==e?(v=t,t=Cr(i,f)):(n=t,t=e),t;}function Qr(){let t,r,i,l,f,g;if(u++,t=n,s.charCodeAt(n)===35?(r=d,n++):(r=e,u===0&&h(z)),r!==e){if(i=y(),l=n,f=[],g=s.charAt(n),j.test(g)?n++:(g=e,u===0&&h(ie)),g!==e)for(;g!==e;)f.push(g),g=s.charAt(n),j.test(g)?n++:(g=e,u===0&&h(ie));else f=e;f!==e?l=s.substring(l,n):l=f,l!==e?(f=y(),v=t,t=Or(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(A)),t;}function ge(){let t,r,i,l,f;if(u++,t=n,s.charCodeAt(n)===35?(r=d,n++):(r=e,u===0&&h(z)),r!==e){if(i=n,l=[],f=s.charAt(n),j.test(f)?n++:(f=e,u===0&&h(ie)),f!==e)for(;f!==e;)l.push(f),f=s.charAt(n),j.test(f)?n++:(f=e,u===0&&h(ie));else l=e;l!==e?i=s.substring(i,n):i=l,i!==e?(l=y(),v=t,t=Nr(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(_e)),t;}function lt(){let t,r,i,l,f,g;if(u++,t=n,r=y(),s.charCodeAt(n)===59?(i=R,n++):(i=e,u===0&&h(or)),i!==e){for(l=y(),f=[],g=ge();g!==e;)f.push(g),g=ge();g=y(),r=[r,i,l,f,g],t=r;}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(ir)),t;}function We(){let t,r,i,l,f,g,E,P;for(u++,t=n,r=[],i=ge();i!==e;)r.push(i),i=ge();return i=y(),l=ct(),l===e&&(l=null),f=y(),s.substr(n,2)===O?(g=O,n+=2):(g=e,u===0&&h(lr)),g!==e?(E=y(),P=gt(),v=t,t=Ir(l,P)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(ar)),t;}function ct(){let t,r;return u++,t=Yr(),u--,t===e&&(r=e,u===0&&h(Ee)),t;}function Yr(){let t,r,i,l,f,g,E,P;for(u++,t=n,r=n,i=[],l=ut();l!==e;)i.push(l),l=n,f=n,g=y(),s.substr(n,2)===B?(E=B,n+=2):(E=e,u===0&&h(cr)),E!==e?(P=y(),g=[g,E,P],f=g):(n=f,f=e),f!==e?(f=ut(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(v=t,r=Lr(r)),t=r,u--,t===e&&(r=e,u===0&&h(Ee)),t;}function ut(){let t,r,i,l,f,g,E,P;for(u++,t=n,r=n,i=[],l=De();l!==e;)i.push(l),l=n,f=n,g=y(),s.substr(n,3)===U?(E=U,n+=3):(E=e,u===0&&h(ur)),E!==e?(P=y(),g=[g,E,P],f=g):(n=f,f=e),f!==e?(f=De(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(v=t,r=_r(r)),t=r,u--,t===e&&(r=e,u===0&&h(Ee)),t;}function De(){let t,r,i,l,f,g;return u++,t=n,s.substr(n,3)===D?(r=D,n+=3):(r=e,u===0&&h(Pe)),r!==e?(i=y(),s.substr(n,3)===D?(l=D,n+=3):(l=e,u===0&&h(Pe)),l!==e?(f=y(),g=De(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s.substr(n,3)===D?(r=D,n+=3):(r=e,u===0&&h(Pe)),r!==e?(i=y(),l=ft(),l!==e?(v=t,t=Pr(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=ft(),r!==e?t=r:(n=t,t=e))),u--,t===e&&(r=e,u===0&&h(Ee)),t;}function ft(){let t,r;return t=n,r=Ue(),r!==e&&(v=t,r=Wr(r)),t=r,t;}function gt(){let t,r,i,l,f,g,E,P,pe;for(t=n,r=[],i=Me(),i===e&&(i=Fe());i!==e;){if(r.push(i),i=n,l=n,f=y(),s.charCodeAt(n)===44?(g=b,n++):(g=e,u===0&&h(fr)),g!==e){for(E=y(),P=[],pe=ge();pe!==e;)P.push(pe),pe=ge();pe=y(),f=[f,g,E,P,pe],l=f;}else n=l,l=e;l!==e?(l=Me(),l===e&&(l=Fe()),l===e?(n=i,i=e):i=l):i=l;}return t=r,t;}function Me(){let t,r,i,l;return u++,t=n,r=pt(),r!==e?(s.charCodeAt(n)===36?(i=w,n++):(i=e,u===0&&h(gr)),i!==e?(l=Ue(),l!==e?(v=t,t=Dr(r,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(Ze)),t;}function pt(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),le.test(i)?n++:(i=e,u===0&&h(Xe)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),le.test(i)?n++:(i=e,u===0&&h(Xe));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&h(Ze)),t;}function Ue(){let t,r,i,l,f;if(u++,t=n,r=n,i=s.charAt(n),ce.test(i)?n++:(i=e,u===0&&h(hr)),i!==e){for(l=[],f=s.charAt(n),ue.test(f)?n++:(f=e,u===0&&h(et));f!==e;)l.push(f),f=s.charAt(n),ue.test(f)?n++:(f=e,u===0&&h(et));i=[i,l],r=i;}else n=r,r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&h(pr)),t;}function Fe(){let t,r,i,l;return u++,t=n,r=Jr(),r!==e?(i=y(),l=dt(),l!==e?(v=t,t=Mr(r,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(dr)),t;}function Jr(){let t,r,i,l,f,g;return u++,t=n,s.charCodeAt(n)===91?(r=N,n++):(r=e,u===0&&h(wr)),r!==e?(i=y(),l=ht(),l!==e?(f=y(),s.charCodeAt(n)===93?(g=F,n++):(g=e,u===0&&h($r)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(mr)),t;}function ht(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),m.test(i)?n++:(i=e,u===0&&h(tt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),m.test(i)?n++:(i=e,u===0&&h(tt));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&h(br)),t;}function dt(){let t,r,i,l,f;for(u++,t=n,r=n,i=[],l=mt();l!==e;)i.push(l),l=n,f=y(),f=mt(),f===e?(n=l,l=e):l=f;if(r=s.substring(r,n),i=y(),l=wt(),l!==e?(v=n,f=Ur(r,l),f?f=void 0:f=e,f!==e?(v=t,t=Fr(r,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,r=n,i=[],l=je();l!==e;)i.push(l),l=n,f=y(),f=je(),f===e?(n=l,l=e):l=f;r=s.substring(r,n),v=t,r=jr(r),t=r;}return u--,t===e&&(r=e,u===0&&h(Sr)),t;}function mt(){let t,r,i,l,f,g;return u++,t=n,r=n,u++,i=n,l=wt(),l!==e?(f=y(),g=bt(),g===e&&(g=s.charAt(n),x.test(g)?n++:(g=e,u===0&&h(yr))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?r=void 0:(n=r,r=e),r!==e?(i=je(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(Er)),t;}function je(){let t,r,i;if(t=n,r=[],i=s.charAt(n),S.test(i)?n++:(i=e,u===0&&h(rt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),S.test(i)?n++:(i=e,u===0&&h(rt));else r=e;return r!==e?t=s.substring(t,n):t=r,t;}function wt(){let t,r,i;return u++,t=n,r=$t(),r!==e?(s.substr(n,2)===oe?(i=oe,n+=2):(i=e,u===0&&h(Ar)),i!==e?(v=t,t=Vr(r)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=$t(),r!==e?(s.charCodeAt(n)===103?(i=Z,n++):(i=e,u===0&&h(Rr)),i===e&&(i=null),t=r):(n=t,t=e)),u--,t===e&&(r=e,u===0&&h(Tr)),t;}function $t(){let t,r,i,l,f,g,E;if(u++,t=n,r=[],i=s.charAt(n),L.test(i)?n++:(i=e,u===0&&h(ye)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),L.test(i)?n++:(i=e,u===0&&h(ye));else r=e;if(r!==e){if(i=n,s.charCodeAt(n)===46?(l=ae,n++):(l=e,u===0&&h(xr)),l!==e){if(f=n,g=[],E=s.charAt(n),L.test(E)?n++:(E=e,u===0&&h(ye)),E!==e)for(;E!==e;)g.push(E),E=s.charAt(n),L.test(E)?n++:(E=e,u===0&&h(ye));else g=e;g!==e?f=s.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),v=t,t=zr();}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(kr)),t;}function y(){let t,r;for(u++,t=[],r=s.charAt(n),$.test(r)?n++:(r=e,u===0&&h(st));r!==e;)t.push(r),r=s.charAt(n),$.test(r)?n++:(r=e,u===0&&h(st));return u--,t;}function bt(){let t,r;return t=n,u++,s.length>n?(r=s.charAt(n),n++):(r=e,u===0&&h(vr)),u--,r===e?t=void 0:(n=t,t=e),t;}let St=!1;he=p();let Ve=he!==e&&n===s.length;function Et(){throw he!==e&&n<s.length&&h(Gr()),ot(Te,q<s.length?Br(q):null,q<s.length?de(q,q+1):de(q,q));}if(o.peg$library)return{peg$result:he,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Te,peg$maxFailPos:q,peg$success:Ve,peg$throw:Ve?void 0:Et};if(Ve)return he;Et();}var es={isTrackWeight:()=>!1},ts=new W("PARSER_CONFIG_PROVIDER"),Ie=(()=>{class s{config=T(ts,{optional:!0})??es;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return H(e,this.makeOptions("Condition"));}parseQuestion(e){return H(e,this.makeOptions("Question"));}parseItem(e){return H(e,this.makeOptions("Item"));}parseEffects(e){return H(e,this.makeOptions("Effects"));}parseRule(e){return H(e,this.makeOptions("Rule"));}parseRules(e){try{return H(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Fehler beim Parsen der Regeln"),a instanceof ne){let p=a.location.start.line.toString(),d=a.location.start.column.toString();c.push(" at line ",p," column ",d),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){H(e,this.makeOptions("VariableName"));}validateQuestionString(e){H(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){H(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){H(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return H(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||s)();};static ɵprov=ke({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();var ze=(()=>{class s{parser=T(Ie);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let p of c.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(d=>this.renameVariable(e,a,d));if(c instanceof Y)return c.variable===e?new Y(c.question,a):c;if(c instanceof ee)return new ee(this.renameVariable(e,a,c.condition),c.questions.map(d=>this.renameVariable(e,a,d)),c.items);if(c instanceof K)return c.variable===e?new K(a):c;if(c instanceof te)return new te(this.renameVariable(e,a,c.not));if(c instanceof re)return new re(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof se)return new se(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let p=c;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((p,d)=>Ae(X({},p),{[d]:e.model[d]}),{[we.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof ee)return this.contains(e.condition,a)||e.questions.some(d=>this.contains(d,a))||e.items.some(d=>this.contains(d,a));if(e instanceof Y)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof J)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof K)return e.variable.toLowerCase().includes(c);if(e instanceof te)return this.contains(e.not,a);if(e instanceof re)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof se)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((p,d)=>{let R;return this.parser.isTrackWeight()?R=d.weight?1:0:R=this.parser.forceParseWeight(d.name)?1:0,{items:p.items+1,weights:p.weights+R};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||s)();};static ɵprov=ke({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();function rs(s,o){return Object.entries(s).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=X(X({},e[a]),c),e),{});}var $e=new W("RESET_SIGNAL",{providedIn:"root",factory:()=>C(!1)}),Le=class s{state;triggerReset=T($e);constructor(o){this.state=o;}static builder(){return new s({});}extend(o){return new s(rs(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function It(s,o){if(typeof s!=typeof o)return!1;if(s&&o&&typeof s=="object"){let e=Object.keys(s),a=Object.keys(o);return e.length===a.length&&e.every(c=>It(s[c],o[c]));}return s===o;}function Nt(s,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[s]??o;}function ss(s,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);It(o,e)?delete c[s]:o===null?c[s]=void 0:c[s]=o,this.setItem("state",JSON.stringify(c));}function Lt(s,o,e){let a=T($e),c=C(Nt.call(s,o,e));return I(()=>{let p=c();p!==Nt.call(s,o,e)&&ss.call(s,o,p,e);},{manualCleanup:!0}),I(()=>{a()&&c.set(e);}),c;}var G=(s,o)=>Lt(localStorage,s,o),be=(s,o)=>Lt(sessionStorage,s,o);var M=G,_t=["en","de"],Pt=()=>{let s=M("categorySorting","alphabetically"),o=M("trackWeight",!1);return I(()=>{o()===!1&&s()==="weight"&&s.set("alphabetically");}),{config:{categorySorting:s,trackWeight:o,skipItems:M("skipItems",!1),fadeOutDisabledRules:M("fadeOutDisabledRules",!1),highlightVariableStatus:M("highlightVariableStatus",!1),refactorVariables:M("refactorVariables",!0),confirmRuleDeletion:M("confirmRuleDeletion",!0),rulesTemplate:M("rulesTemplate","default"),theme:M("theme","system"),fontSize:M("fontSize","normal"),accessibility:M("accessibility","accessible"),animations:M("animations",!0),language:M("language","auto"),exportReminder:M("exportReminder",!1)}};};var Wt=({config:{language:s}})=>{let o=C(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:k(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:k(()=>{let e=s();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>_t.includes(p))??"en":e;})}};};var Dt=(s,o)=>be(s,o),Mt=()=>({clipboard:{items:Dt("clipboardItems",[]),questions:Dt("clipboardQuestions",[])}});var Se=G;function ns(s){return"cat-"+s.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var He=class extends J{original;checked;skipped;colored;constructor(o,e,a,c){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c;}},Ut=({rules:{parsed:s},config:{categorySorting:o,skipItems:e}})=>{let a=Se("answers",{}),c=Se("checkedItems",[]),p=Se("skippedItems",[]),d=Se("collapsedCategories",[]),R=Se("answersLocked",!1),O=be("statsVisible",void 0),B=be("askedWeightTracking",void 0),U=T(ze),D=k(()=>U.filterActive({rules:s.value(),model:a()})),b=k(()=>D().rules),w=k(()=>b().flatMap(m=>m.items)),N=k(()=>w().filter(m=>c().includes(m.id()))),F=m=>{c().includes(m.id())?c.update(x=>x.filter(S=>S!==m.id())):c.update(x=>[...x,m.id()]);},oe=k(()=>w().filter(m=>p().includes(m.id()))),Z=m=>{e()&&(p().includes(m.id())?p.update(x=>x.filter(S=>S!==m.id())):p.update(x=>[...x,m.id()]));},ae=m=>{d().includes(m)?d.update(x=>x.filter(S=>S!==m)):d.update(x=>[...x,m]);},j=C([]),le=m=>{(j().length!==m.length||!m.every(x=>j().includes(x)))&&j.set(m);},ce=k(()=>{function m($){return{id:ns($.category),name:$.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:d().includes($.category),colored:O()==="distribution"};}let x=w().reduce(($,A)=>{$[A.category]||($[A.category]=m(A));let z=e()&&oe().includes(A),ie=!z&&N().includes(A),_e=O()==="heaviestItems"&&j().includes(A.id());return $[A.category].items.push(new He(A,ie,z,_e)),ie&&($[A.category].checkedItems++,$[A.category].checkedWeight+=A.weight??0),z||($[A.category].totalItems++,$[A.category].totalWeight+=A.weight??0),$;},{}),L=k(()=>{let $=o();return $==="alphabetically"?(A,z)=>A.name.localeCompare(z.name):$==="weight"?(A,z)=>z.totalWeight-A.totalWeight:()=>0;})();return Object.entries(x).map($=>$[1]).toSorted(($,A)=>L($,A));}),ue=k(()=>Object.entries(ce()).reduce((m,[,x])=>(m.totalItems+=x.totalItems,m.checkedItems+=x.checkedItems,m.totalWeight+=x.totalWeight,m.checkedWeight+=x.checkedWeight,m),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return I(()=>{s.value(),R.set(!1),O.set(void 0);}),{rules:{categories:k(()=>U.extractCategories(s.value())),variables:k(()=>U.extractVariables(s.value()))},active:{rules:b,answers:k(()=>D().model),questions:k(()=>b().flatMap(m=>m.questions))},packlist:{answers:a,model:ce,stats:ue,toggleCheckedItem:F,toggleSkippedItem:Z,colorItems:le,toggleCategoryCollapse:ae,answersLocked:R,statsVisible:O,askedWeightTracking:B,reset:()=>{a.set({}),c.set([]),p.set([]),d.set([]),R.set(!1),O.set(void 0);}}};};var Be=(s,o)=>{let e=T(Oe),a=T(Ce),c=T($e),p=C(void 0);return e.events.pipe(Re(d=>d instanceof ve),yt(()=>a.snapshot.queryParams[s]??o)).subscribe(d=>{d!==""&&p.set(d);}),I(()=>{let d=p()||void 0;d===o&&(d=void 0),a.snapshot.queryParams[s]!==d&&e.navigate([],{queryParams:{[s]:d},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),I(()=>{c()&&p.set(o);}),p;};var is={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},Ft=()=>{let s=T(Oe),o=T(Ce),e=Be("rulesMode","view"),a=kt(o.fragment,{requireSync:!0}),c=xe(()=>a()??void 0);I(()=>{let R=c();R!==a()&&s.navigate([],{fragment:R,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=T(Rt),d=C(p.path());return s.events.pipe(Re(R=>R instanceof ve)).subscribe(()=>{p.path()!==d()&&d.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Be("filterRulesQuery",void 0),path:d.asReadonly(),fragment:c,go:R=>{is[R].call({router:s,rulesMode:e});}}};};var qe=class{parser;raw;trackWeight;setCurrentTitle;value=C([]);error=C(void 0);status=C("idle");constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,I(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let p=this.parser.parseRules(this.raw.value());p.title&&this.setCurrentTitle(p.title),this.value.set(p),this.error.set(void 0),this.status.set("resolved");}catch(p){this.error.set(p),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},jt=({config:{trackWeight:s},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new qe(T(Ie),o,s,e);return{rules:{parsed:a.asReadonly(),hasError:k(()=>a.status()==="error"||o.status()==="error"),isLoading:k(()=>a.isLoading()||o.isLoading())}};};var Vt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,zt={name:"GitHub Gist",test:s=>Vt.test(s),transform:s=>{let o=Vt.exec(s);if(!o)return s;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var Ge=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Ht=new Ge();var Bt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,os={name:"Google Drive",needsCORS:!0,test:s=>Bt.test(s),transform:s=>{let o=Bt.exec(s);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:s;}},qt=os;var as={name:"Pastebin",needsCORS:!0,test:s=>s.startsWith("https://pastebin.com/")&&!s.includes("/raw/"),transform:s=>s.replace("https://pastebin.com/","https://pastebin.com/raw/")},Gt=as;var ls=[zt,Ht,qt,Gt];function Kt(s,o){if(s){let e=ls.find(a=>a.test(s));if(e){let a=e.transform(s);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return s;}var Qt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var Yt=`# Beispiel Packliste

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
`;var Jt=`# Example Packlist

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
`;var Zt=`:- [Neu] Dies ist dein erster Gegenstand;
`;var Xt=`:- [New] This is your first item;
`;var er=`# Example Logic Demonstration

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
`;var Ke=new W("BACKPACKING_RULES_TEMPLATE");function ds(){return Qt;}var Qe=new W("DEFAULT_RULES_TEMPLATE");function ms(s){return s.startsWith("de")?Yt:Jt;}var Ye=new W("EMPTY_RULES_TEMPLATE");function ws(s){return s.startsWith("de")?Zt:Xt;}var Je=new W("LOGIC_RULES_TEMPLATE");function $s(){return er;}function ri(){return Tt([{provide:Ke,useFactory:ds,deps:[me]},{provide:Qe,useFactory:ms,deps:[me]},{provide:Ye,useFactory:ws,deps:[me]},{provide:Je,useFactory:$s,deps:[me]}]);}var tr=new W("CAPACITOR_HTTP_REQUEST_MODE");function bs(s){switch(s){case 400:return"Ung\xFCltige Anfrage";case 401:return"Nicht autorisiert";case 403:return"Verboten";case 404:return"Nicht gefunden";case 500:return"interner Serverfehler";case 504:return"Zeit\xFCberschreitung";default:return;}}var rr=({config:{rulesTemplate:s}})=>{let o=G("rulesMode","template"),e=G("rules",void 0),a=k(()=>e()!==void 0),c=k(()=>{let S=e();if(S)return Ss(S).toString(16);}),p=G("lastExportHash",void 0),d=G("lastExportDate",void 0),R=()=>{p.set(c()),d.set(new Date().getTime());},O=C(new Date().getTime());I(()=>{e(),O.set(new Date().getTime());});let B=T(Qe),U=T(Ye),D=T(Je),b=T(Ke),w=k(()=>{switch(s()){case"empty":return U;case"logic":return D;case"backpacking":return b;default:return B;}}),N=G("remoteHistory",[]),F=G("remoteHistoryTitle",{}),oe=function(S){N.update(L=>L.filter($=>$!==S)),F.update(L=>{let $=X({},L);return delete $[S],$;});},Z=xe(()=>o()==="remote"?N()[0]:void 0),ae=T(tr,{optional:!0})??"cors",j=At({params:()=>({mode:o(),rawLocal:e(),remote:Z(),template:w()}),loader:({params:S})=>{switch(S.mode){case"local":return Promise.resolve(S.rawLocal);case"template":return Promise.resolve(S.template);case"remote":if(S.remote){if(!S.remote.startsWith("http"))throw new Error("Invalid URL");let L=Kt(S.remote,ae==="cors");return xt.get({url:L,webFetchExtra:{mode:ae}}).then($=>{if($.status>=200&&$.status<300)return N.update(A=>[S.remote,...A.filter(z=>z!==S.remote)]),$.data;{let A=[["HTTP Fehler",$.status.toString()].join(" "),bs($.status)].join(": ");throw new Error(A);}});}else return Promise.resolve(void 0);}}}),le=function(S){Z()!==S&&(o.set("remote"),Z.set(S));},ce=function(S){let L=Z();o()==="remote"&&L&&F.update($=>Ae(X({},$),{[L]:S}));},ue=function(S){o.set("local"),e.set(S);},m=function(){e.set(j.value()),o.set("local"),R();},x=function(){j.reload();};return{rules:{mode:o,raw:j.asReadonly(),reload:x,lastAction:O.asReadonly(),hash:c,exportNeeded:k(()=>o()==="local"&&c()!==p()),markAsCurrent:R,localRulesAvailable:a},export:{lastDate:d.asReadonly()},localRules:{updateRules:ue,copyFromCurrent:m},remoteRules:{load:le,setCurrentTitle:ce,history:k(()=>N().map(S=>({url:S,title:F()[S]}))),removeFromHistory:oe}};},Ss=function(s,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,p;c<s.length;c++)p=s.charCodeAt(c),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var sr=()=>({serviceWorker:{status:C("init")}});function Es(){return Le.builder().extend(Ft).extend(Mt).extend(sr).extend(Pt).extend(Wt).extend(rr).extend(jt).extend(Ut);}var nr=new W("STATE_BUILDER",{providedIn:"root",factory:()=>Es()}),ys=new W("GLOBAL_STATE",{providedIn:"root",factory:()=>T(nr).build()}),Ts=new W("RESET_SWITCH",{providedIn:"root",factory:()=>{let s=T(nr);return async()=>{await s.reset();};}});export{vs as a,Ne as b,Cs as c,ee as d,Y as e,J as f,K as g,Is as h,we as i,te as j,re as k,se as l,ne as m,ts as n,Ie as o,ze as p,ri as q,tr as r,ys as s,Ts as t};/**i18n:28a3168b76bee7dffc4b1e816012f24aa421b4da90b9b896cc67ce89fdf6fb94*/