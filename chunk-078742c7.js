import{d as vt}from"./chunk-88d5c091.js";import{c as kt,l as xt,m as Ce,n as Oe,p as Ne}from"./chunk-e338f199.js";import{B as ke,X as xe,_ as W,ba as y,ca as At,oc as we,r as Tt,uc as k,vc as L,wa as v,wc as he,xc as ve,yc as Rt}from"./chunk-97a677ae.js";import{a as X,b as Re}from"./chunk-ecf0d82d.js";function Cs(s){let o=s.title?.trim();return(o?`# ${o}

`:"")+s.map(a=>a.toString()).map(a=>a+";").join(`

`);}function Ie(s,o,e=-1){if(!s)return"0g";let a=(e<0?s/1e3:(s/1e3).toFixed(e)).toString()+"kg",c=(s*1).toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Os(s,o){return Ie(s,void 0,1)+" / "+Ie(o,void 0,1);}var ee=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof $e)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},Y=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function Ct(s){return s?s.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var J=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${Ct(this.category)}-${Ct(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+Ie(this.weight)),o;}},q=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Ls=(()=>{class s extends q{static string="please_select";constructor(){super(s.string);}}return s;})(),$e=(()=>{class s extends q{static string="always";constructor(){super(s.string);}evaluate(){return!0;}}return s;})(),te=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},re=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},se=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Xr(s,o){let e=o.filter(c=>c instanceof Y),a=o.filter(c=>c instanceof J);return new ee(s??new $e(),e,a);}function Ot(s){return s.length===1?s[0]:new re(s[0],Ot(s.slice(1)));}function Nt(s){return s.length===1?s[0]:new se(s[0],Nt(s.slice(1)));}var ne=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(C=>C.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let p=this.location.start,d=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,T=this.location.source+":"+d.line+":"+d.column;if(a){let C=this.location.end,H="".padEnd(d.line.toString().length," "),U=a[p.line-1],b=(p.line===C.line?C.column:U.length+1)-p.column||1;e+=`
 --> `+T+`
`+H+` |
`+d.line+" | "+U+`
`+H+" | "+"".padEnd(p.column-1," ")+"".padEnd(b,"^");}else e+=`
 at `+T;}return e;}static buildMessage(o,e){function a(b){return b.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p(b){return c?b.replace(c,$=>"\\u{"+a($)+"}"):b;}function d(b){return p(b.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}function T(b){return p(b.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}let C={literal(b){return'"'+d(b.text)+'"';},class(b){let $=b.parts.map(I=>Array.isArray(I)?T(I[0])+"-"+T(I[1]):T(I));return"["+(b.inverted?"^":"")+$.join("")+"]"+(b.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(b){return b.description;}};function H(b){return C[b.type](b);}function U(b){let $=b.map(H);if($.sort(),$.length>0){let I=1;for(let F=1;F<$.length;F++)$[F-1]!==$[F]&&($[I]=$[F],I++);$.length=I;}switch($.length){case 1:return $[0];case 2:return $[0]+" or "+$[1];default:return $.slice(0,-1).join(", ")+", or "+$[$.length-1];}}function D(b){return b?'"'+d(b)+'"':"end of input";}return"Expected "+U(o)+" but "+D(e)+" found.";}};function z(s,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:lt,Rule:De,Condition:ut,Effects:pt,Question:Ue,Item:je,VariableName:Fe,QuestionString:ht,ItemNameAndWeight:mt,CategoryName:dt},p=lt,d="#",T=";",C=":-",H="OR",U="AND",D="NOT",b=",",$="$",I="[",F="]",oe="kg",Z="g",ae=".",V=/^[^\n\r]/,le=/^[^$,;#]/,ce=/^[a-zA-Z]/,ue=/^[a-zA-Z0-9\-[\](){}_]/,w=/^[^\],;#[]/,m=/^[,;]/,N=/^[^ ,;#]/,O=/^[0-9]/,A=/^[ \t\n\r]/,R=_("title"),K=j("#",!1),ie=Q([`
`,"\r"],!0,!1,!1),Pe=_("comment"),or=_("rule end"),ar=j(";",!1),lr=_("rule"),cr=j(":-",!1),ye=_("condition"),ur=j("OR",!1),fr=j("AND",!1),We=j("NOT",!1),gr=j(",",!1),Xe=_("question"),pr=j("$",!1),et=Q(["$",",",";","#"],!0,!1,!1),hr=_("variable name"),dr=Q([["a","z"],["A","Z"]],!1,!1,!1),tt=Q([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),mr=_("item"),wr=_("category"),$r=j("[",!1),br=j("]",!1),Er=_("category name"),rt=Q(["]",",",";","#","["],!0,!1,!1),Sr=_("item name"),yr=_("word"),Tr=Q([",",";"],!1,!1,!1),st=Q([" ",",",";","#"],!0,!1,!1),Ar=_("weight"),Rr=j("kg",!1),kr=j("g",!1),xr=_("number"),Te=Q([["0","9"]],!1,!1,!1),vr=j(".",!1),nt=Q([" ","	",`
`,"\r"],!1,!1,!1),Cr=Kr();function Or(t,r){return r.title=t?.trim(),r.rulesContainComments=St,r;}function Nr(t){if(t.trim().length)return t.trim();}function Ir(t){if(t.trim().length)return St=!0,t.trim();}function Lr(t,r){return Xr(t,r);}function _r(t){return Nt(t);}function Pr(t){return Ot(t);}function Wr(t){return new te(t);}function Dr(t){return new q(t);}function Mr(t,r){return new Y(t.trim(),r.trim());}function Ur(t,r){let{name:i,weight:l}=r;return new J(t.trim(),i,l);}function Fr(t,r){return o.trackWeight;}function jr(t,r){let i=t.trim();return i.length||it("item name"),{name:i,weight:r};}function Vr(t){let r=t.trim();return r.length||it("item name"),{name:r,weight:void 0};}function zr(t){return t*1e3;}function Hr(){return parseFloat(Br());}let n=o.peg$currPos|0,x=n,fe=[{line:1,column:1}],B=n,Ae=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,de;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=c[o.startRule];}function Br(){return s.substring(x,n);}function Rs(){return x;}function ks(){return{source:a,start:x,end:n};}function xs(){return me(x,n);}function it(t,r){throw r=r!==void 0?r:me(x,n),at([_(t)],s.substring(x,n),r);}function vs(t,r){throw r=r!==void 0?r:me(x,n),Qr(t,r);}function Gr(t=n){let r=s.codePointAt(t);return r===void 0?"":String.fromCodePoint(r);}function j(t,r){return{type:"literal",text:t,ignoreCase:r};}function Q(t,r,i,l){return{type:"class",parts:t,inverted:r,ignoreCase:i,unicode:l};}function Kr(){return{type:"any"};}function qr(){return{type:"end"};}function _(t){return{type:"other",description:t};}function ot(t){let r=fe[t],i;if(r)return r;if(t>=fe.length)i=fe.length-1;else for(i=t;!fe[--i];);for(r=fe[i],r={line:r.line,column:r.column};i<t;)s.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return fe[t]=r,r;}function me(t,r,i){let l=ot(t),f=ot(r),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function h(t){n<B||(n>B&&(B=n,Ae=[]),Ae.push(t));}function Qr(t,r){return new ne(t,null,null,r);}function at(t,r,i){return new ne(ne.buildMessage(t,r),t,r,i);}function lt(){let t,r,i,l,f,g,E,P;for(t=n,r=S(),i=Yr(),i===e&&(i=null),l=S(),f=[],g=De();g!==e;)f.push(g),g=n,E=ct(),E!==e?(E=De(),E===e?(n=g,g=e):g=E):g=E;return g=ct(),g===e&&(g=null),E=S(),P=Et(),P!==e?(x=t,t=Or(i,f)):(n=t,t=e),t;}function Yr(){let t,r,i,l,f,g;if(u++,t=n,s.charCodeAt(n)===35?(r=d,n++):(r=e,u===0&&h(K)),r!==e){if(i=S(),l=n,f=[],g=s.charAt(n),V.test(g)?n++:(g=e,u===0&&h(ie)),g!==e)for(;g!==e;)f.push(g),g=s.charAt(n),V.test(g)?n++:(g=e,u===0&&h(ie));else f=e;f!==e?l=s.substring(l,n):l=f,l!==e?(f=S(),x=t,t=Nr(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(R)),t;}function ge(){let t,r,i,l,f;if(u++,t=n,s.charCodeAt(n)===35?(r=d,n++):(r=e,u===0&&h(K)),r!==e){if(i=n,l=[],f=s.charAt(n),V.test(f)?n++:(f=e,u===0&&h(ie)),f!==e)for(;f!==e;)l.push(f),f=s.charAt(n),V.test(f)?n++:(f=e,u===0&&h(ie));else l=e;l!==e?i=s.substring(i,n):i=l,i!==e?(l=S(),x=t,t=Ir(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(Pe)),t;}function ct(){let t,r,i,l,f,g;if(u++,t=n,r=S(),s.charCodeAt(n)===59?(i=T,n++):(i=e,u===0&&h(ar)),i!==e){for(l=S(),f=[],g=ge();g!==e;)f.push(g),g=ge();g=S(),r=[r,i,l,f,g],t=r;}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(or)),t;}function De(){let t,r,i,l,f,g,E,P;for(u++,t=n,r=[],i=ge();i!==e;)r.push(i),i=ge();return i=S(),l=ut(),l===e&&(l=null),f=S(),s.substr(n,2)===C?(g=C,n+=2):(g=e,u===0&&h(cr)),g!==e?(E=S(),P=pt(),x=t,t=Lr(l,P)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(lr)),t;}function ut(){let t,r;return u++,t=Jr(),u--,t===e&&(r=e,u===0&&h(ye)),t;}function Jr(){let t,r,i,l,f,g,E,P;for(u++,t=n,r=n,i=[],l=ft();l!==e;)i.push(l),l=n,f=n,g=S(),s.substr(n,2)===H?(E=H,n+=2):(E=e,u===0&&h(ur)),E!==e?(P=S(),g=[g,E,P],f=g):(n=f,f=e),f!==e?(f=ft(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(x=t,r=_r(r)),t=r,u--,t===e&&(r=e,u===0&&h(ye)),t;}function ft(){let t,r,i,l,f,g,E,P;for(u++,t=n,r=n,i=[],l=Me();l!==e;)i.push(l),l=n,f=n,g=S(),s.substr(n,3)===U?(E=U,n+=3):(E=e,u===0&&h(fr)),E!==e?(P=S(),g=[g,E,P],f=g):(n=f,f=e),f!==e?(f=Me(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(x=t,r=Pr(r)),t=r,u--,t===e&&(r=e,u===0&&h(ye)),t;}function Me(){let t,r,i,l,f,g;return u++,t=n,s.substr(n,3)===D?(r=D,n+=3):(r=e,u===0&&h(We)),r!==e?(i=S(),s.substr(n,3)===D?(l=D,n+=3):(l=e,u===0&&h(We)),l!==e?(f=S(),g=Me(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s.substr(n,3)===D?(r=D,n+=3):(r=e,u===0&&h(We)),r!==e?(i=S(),l=gt(),l!==e?(x=t,t=Wr(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=gt(),r!==e?t=r:(n=t,t=e))),u--,t===e&&(r=e,u===0&&h(ye)),t;}function gt(){let t,r;return t=n,r=Fe(),r!==e&&(x=t,r=Dr(r)),t=r,t;}function pt(){let t,r,i,l,f,g,E,P,pe;for(t=n,r=[],i=Ue(),i===e&&(i=je());i!==e;){if(r.push(i),i=n,l=n,f=S(),s.charCodeAt(n)===44?(g=b,n++):(g=e,u===0&&h(gr)),g!==e){for(E=S(),P=[],pe=ge();pe!==e;)P.push(pe),pe=ge();pe=S(),f=[f,g,E,P,pe],l=f;}else n=l,l=e;l!==e?(l=Ue(),l===e&&(l=je()),l===e?(n=i,i=e):i=l):i=l;}return t=r,t;}function Ue(){let t,r,i,l;return u++,t=n,r=ht(),r!==e?(s.charCodeAt(n)===36?(i=$,n++):(i=e,u===0&&h(pr)),i!==e?(l=Fe(),l!==e?(x=t,t=Mr(r,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(Xe)),t;}function ht(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),le.test(i)?n++:(i=e,u===0&&h(et)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),le.test(i)?n++:(i=e,u===0&&h(et));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&h(Xe)),t;}function Fe(){let t,r,i,l,f;if(u++,t=n,r=n,i=s.charAt(n),ce.test(i)?n++:(i=e,u===0&&h(dr)),i!==e){for(l=[],f=s.charAt(n),ue.test(f)?n++:(f=e,u===0&&h(tt));f!==e;)l.push(f),f=s.charAt(n),ue.test(f)?n++:(f=e,u===0&&h(tt));i=[i,l],r=i;}else n=r,r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&h(hr)),t;}function je(){let t,r,i,l;return u++,t=n,r=Zr(),r!==e?(i=S(),l=mt(),l!==e?(x=t,t=Ur(r,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(mr)),t;}function Zr(){let t,r,i,l,f,g;return u++,t=n,s.charCodeAt(n)===91?(r=I,n++):(r=e,u===0&&h($r)),r!==e?(i=S(),l=dt(),l!==e?(f=S(),s.charCodeAt(n)===93?(g=F,n++):(g=e,u===0&&h(br)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(wr)),t;}function dt(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),w.test(i)?n++:(i=e,u===0&&h(rt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),w.test(i)?n++:(i=e,u===0&&h(rt));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&h(Er)),t;}function mt(){let t,r,i,l,f;for(u++,t=n,r=n,i=[],l=wt();l!==e;)i.push(l),l=n,f=S(),f=wt(),f===e?(n=l,l=e):l=f;if(r=s.substring(r,n),i=S(),l=$t(),l!==e?(x=n,f=Fr(r,l),f?f=void 0:f=e,f!==e?(x=t,t=jr(r,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,r=n,i=[],l=Ve();l!==e;)i.push(l),l=n,f=S(),f=Ve(),f===e?(n=l,l=e):l=f;r=s.substring(r,n),x=t,r=Vr(r),t=r;}return u--,t===e&&(r=e,u===0&&h(Sr)),t;}function wt(){let t,r,i,l,f,g;return u++,t=n,r=n,u++,i=n,l=$t(),l!==e?(f=S(),g=Et(),g===e&&(g=s.charAt(n),m.test(g)?n++:(g=e,u===0&&h(Tr))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?r=void 0:(n=r,r=e),r!==e?(i=Ve(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(yr)),t;}function Ve(){let t,r,i;if(t=n,r=[],i=s.charAt(n),N.test(i)?n++:(i=e,u===0&&h(st)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),N.test(i)?n++:(i=e,u===0&&h(st));else r=e;return r!==e?t=s.substring(t,n):t=r,t;}function $t(){let t,r,i;return u++,t=n,r=bt(),r!==e?(s.substr(n,2)===oe?(i=oe,n+=2):(i=e,u===0&&h(Rr)),i!==e?(x=t,t=zr(r)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=bt(),r!==e?(s.charCodeAt(n)===103?(i=Z,n++):(i=e,u===0&&h(kr)),i===e&&(i=null),t=r):(n=t,t=e)),u--,t===e&&(r=e,u===0&&h(Ar)),t;}function bt(){let t,r,i,l,f,g,E;if(u++,t=n,r=[],i=s.charAt(n),O.test(i)?n++:(i=e,u===0&&h(Te)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),O.test(i)?n++:(i=e,u===0&&h(Te));else r=e;if(r!==e){if(i=n,s.charCodeAt(n)===46?(l=ae,n++):(l=e,u===0&&h(vr)),l!==e){if(f=n,g=[],E=s.charAt(n),O.test(E)?n++:(E=e,u===0&&h(Te)),E!==e)for(;E!==e;)g.push(E),E=s.charAt(n),O.test(E)?n++:(E=e,u===0&&h(Te));else g=e;g!==e?f=s.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),x=t,t=Hr();}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(xr)),t;}function S(){let t,r;for(u++,t=[],r=s.charAt(n),A.test(r)?n++:(r=e,u===0&&h(nt));r!==e;)t.push(r),r=s.charAt(n),A.test(r)?n++:(r=e,u===0&&h(nt));return u--,t;}function Et(){let t,r;return t=n,u++,s.length>n?(r=s.charAt(n),n++):(r=e,u===0&&h(Cr)),u--,r===e?t=void 0:(n=t,t=e),t;}let St=!1;de=p();let ze=de!==e&&n===s.length;function yt(){throw de!==e&&n<s.length&&h(qr()),at(Ae,B<s.length?Gr(B):null,B<s.length?me(B,B+1):me(B,B));}if(o.peg$library)return{peg$result:de,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Ae,peg$maxFailPos:B,peg$success:ze,peg$throw:ze?void 0:yt};if(ze)return de;yt();}var ts={isTrackWeight:()=>!1},rs=new W("PARSER_CONFIG_PROVIDER"),Le=(()=>{class s{config=y(rs,{optional:!0})??ts;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return z(e,this.makeOptions("Condition"));}parseQuestion(e){return z(e,this.makeOptions("Question"));}parseItem(e){return z(e,this.makeOptions("Item"));}parseEffects(e){return z(e,this.makeOptions("Effects"));}parseRule(e){return z(e,this.makeOptions("Rule"));}parseRules(e){try{return z(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Fehler beim Parsen der Regeln"),a instanceof ne){let p=a.location.start.line.toString(),d=a.location.start.column.toString();c.push(" at line ",p," column ",d),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){z(e,this.makeOptions("VariableName"));}validateQuestionString(e){z(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){z(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){z(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return z(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||s)();};static ɵprov=xe({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();var He=(()=>{class s{parser=y(Le);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let p of c.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(d=>this.renameVariable(e,a,d));if(c instanceof Y)return c.variable===e?new Y(c.question,a):c;if(c instanceof ee)return new ee(this.renameVariable(e,a,c.condition),c.questions.map(d=>this.renameVariable(e,a,d)),c.items);if(c instanceof q)return c.variable===e?new q(a):c;if(c instanceof te)return new te(this.renameVariable(e,a,c.not));if(c instanceof re)return new re(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof se)return new se(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let p=c;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((p,d)=>Re(X({},p),{[d]:e.model[d]}),{[$e.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof ee)return this.contains(e.condition,a)||e.questions.some(d=>this.contains(d,a))||e.items.some(d=>this.contains(d,a));if(e instanceof Y)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof J)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof q)return e.variable.toLowerCase().includes(c);if(e instanceof te)return this.contains(e.not,a);if(e instanceof re)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof se)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((p,d)=>{let T;return this.parser.isTrackWeight()?T=d.weight?1:0:T=this.parser.forceParseWeight(d.name)?1:0,{items:p.items+1,weights:p.weights+T};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||s)();};static ɵprov=xe({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();function ss(s,o){return Object.entries(s).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=X(X({},e[a]),c),e),{});}var be=new W("RESET_SIGNAL",{providedIn:"root",factory:()=>v(!1)}),_e=class s{state;triggerReset=y(be);constructor(o){this.state=o;}static builder(){return new s({});}extend(o){return new s(ss(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function Lt(s,o){if(typeof s!=typeof o)return!1;if(s&&o&&typeof s=="object"){let e=Object.keys(s),a=Object.keys(o);return e.length===a.length&&e.every(c=>Lt(s[c],o[c]));}return s===o;}function It(s,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[s]??o;}function ns(s,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);Lt(o,e)?delete c[s]:o===null?c[s]=void 0:c[s]=o,this.setItem("state",JSON.stringify(c));}function _t(s,o,e){let a=y(be),c=v(It.call(s,o,e));return L(()=>{let p=c();p!==It.call(s,o,e)&&ns.call(s,o,p,e);},{manualCleanup:!0}),L(()=>{a()&&c.set(e);}),c;}var G=(s,o)=>_t(localStorage,s,o),Ee=(s,o)=>_t(sessionStorage,s,o);var M=G,Pt=["en","de"],Wt=()=>{let s=M("categorySorting","alphabetically"),o=M("trackWeight",!1);return L(()=>{o()===!1&&s()==="weight"&&s.set("alphabetically");}),{config:{categorySorting:s,trackWeight:o,skipItems:M("skipItems",!1),fadeOutDisabledRules:M("fadeOutDisabledRules",!1),highlightVariableStatus:M("highlightVariableStatus",!1),refactorVariables:M("refactorVariables",!0),confirmRuleDeletion:M("confirmRuleDeletion",!0),rulesTemplate:M("rulesTemplate","default"),theme:M("theme","system"),fontSize:M("fontSize","normal"),accessibility:M("accessibility","accessible"),animations:M("animations",!0),language:M("language","auto"),exportReminder:M("exportReminder",!1)}};};var Dt=({config:{language:s}})=>{let o=v(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:k(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:k(()=>{let e=s();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>Pt.includes(p))??"en":e;})}};};var Mt=(s,o)=>Ee(s,o),Ut=()=>({clipboard:{items:Mt("clipboardItems",[]),questions:Mt("clipboardQuestions",[])}});var Se=G;function is(s){return"cat-"+s.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Be=class extends J{original;checked;skipped;colored;constructor(o,e,a,c){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c;}},Ft=({rules:{parsed:s},config:{categorySorting:o,skipItems:e}})=>{let a=Se("answers",{}),c=Se("checkedItems",[]),p=Se("skippedItems",[]),d=Se("collapsedCategories",[]),T=Se("answersLocked",!1),C=Ee("statsVisible",void 0),H=Ee("askedWeightTracking",void 0),U=y(He),D=k(()=>U.filterActive({rules:s.value(),model:a()})),b=k(()=>D().rules),$=k(()=>b().flatMap(w=>w.items)),I=k(()=>$().filter(w=>c().includes(w.id()))),F=w=>{c().includes(w.id())?c.update(m=>m.filter(N=>N!==w.id())):c.update(m=>[...m,w.id()]);},oe=k(()=>$().filter(w=>p().includes(w.id()))),Z=w=>{e()&&(p().includes(w.id())?p.update(m=>m.filter(N=>N!==w.id())):p.update(m=>[...m,w.id()]));},ae=w=>{d().includes(w)?d.update(m=>m.filter(N=>N!==w)):d.update(m=>[...m,w]);},V=v([]),le=w=>{(V().length!==w.length||!w.every(m=>V().includes(m)))&&V.set(w);},ce=k(()=>{function w(A){return{id:is(A.category),name:A.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:d().includes(A.category),colored:C()==="distribution"};}let m=$().reduce((A,R)=>{A[R.category]||(A[R.category]=w(R));let K=e()&&oe().includes(R),ie=!K&&I().includes(R),Pe=C()==="heaviestItems"&&V().includes(R.id());return A[R.category].items.push(new Be(R,ie,K,Pe)),ie&&(A[R.category].checkedItems++,A[R.category].checkedWeight+=R.weight??0),K||(A[R.category].totalItems++,A[R.category].totalWeight+=R.weight??0),A;},{}),O=k(()=>{let A=o();return A==="alphabetically"?(R,K)=>R.name.localeCompare(K.name):A==="weight"?(R,K)=>K.totalWeight-R.totalWeight:()=>0;})();return Object.entries(m).map(A=>A[1]).toSorted((A,R)=>O(A,R));}),ue=k(()=>Object.entries(ce()).reduce((w,[,m])=>(w.totalItems+=m.totalItems,w.checkedItems+=m.checkedItems,w.totalWeight+=m.totalWeight,w.checkedWeight+=m.checkedWeight,w),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return L(()=>{s.value(),T.set(!1),C.set(void 0);}),{rules:{categories:k(()=>U.extractCategories(s.value())),variables:k(()=>U.extractVariables(s.value()))},active:{rules:b,answers:k(()=>D().model),questions:k(()=>b().flatMap(w=>w.questions))},packlist:{answers:a,model:ce,stats:ue,toggleCheckedItem:F,toggleSkippedItem:Z,colorItems:le,toggleCategoryCollapse:ae,answersLocked:T,statsVisible:C,askedWeightTracking:H,reset:()=>{a.set({}),c.set([]),p.set([]),d.set([]),T.set(!1),C.set(void 0);}}};};var Ge=(s,o)=>{let e=y(Ne),a=y(Oe),c=y(be),p=v(void 0);return e.events.pipe(ke(d=>d instanceof Ce),Tt(()=>a.snapshot.queryParams[s]??o)).subscribe(d=>{d!==""&&p.set(d);}),L(()=>{let d=p()||void 0;d===o&&(d=void 0),a.snapshot.queryParams[s]!==d&&e.navigate([],{queryParams:{[s]:d},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),L(()=>{c()&&p.set(o);}),p;};var os={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},jt=()=>{let s=y(Ne),o=y(Oe),e=Ge("rulesMode","view"),a=xt(o.fragment,{requireSync:!0}),c=ve(()=>a()??void 0);L(()=>{let T=c();T!==a()&&s.navigate([],{fragment:T,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=y(kt),d=v(p.path());return s.events.pipe(ke(T=>T instanceof Ce)).subscribe(()=>{p.path()!==d()&&d.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Ge("filterRulesQuery",void 0),path:d.asReadonly(),fragment:c,go:T=>{os[T].call({router:s,rulesMode:e});}}};};var Ke=class{parser;raw;trackWeight;setCurrentTitle;value=v([]);error=v(void 0);status=v(he.Idle);constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,L(()=>{this.trackWeight();let p=this.raw.value();if(typeof p=="string")try{let d=this.parser.parseRules(p);d.title&&this.setCurrentTitle(d.title),this.value.set(d),this.error.set(void 0),this.status.set(he.Resolved);}catch(d){this.error.set(d),this.status.set(he.Error);}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}reload(){return this.raw.reload();}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this),reload:this.reload.bind(this)};}},Vt=({config:{trackWeight:s},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new Ke(y(Le),o,s,e);return{rules:{parsed:a.asReadonly(),hasError:k(()=>a.status()===he.Error||o.status()===he.Error),isLoading:k(()=>a.isLoading()||o.isLoading())}};};var zt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Ht={name:"GitHub Gist",test:s=>zt.test(s),transform:s=>{let o=zt.exec(s);if(!o)return s;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var qe=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Bt=new qe();var Gt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,as={name:"Google Drive",needsCORS:!0,test:s=>Gt.test(s),transform:s=>{let o=Gt.exec(s);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:s;}},Kt=as;var ls={name:"Pastebin",needsCORS:!0,test:s=>s.startsWith("https://pastebin.com/")&&!s.includes("/raw/"),transform:s=>s.replace("https://pastebin.com/","https://pastebin.com/raw/")},qt=ls;var cs=[Ht,Bt,Kt,qt];function Qt(s,o){if(s){let e=cs.find(a=>a.test(s));if(e){let a=e.transform(s);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return s;}var Yt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var Jt=`# Beispiel Packliste

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
`;var Zt=`# Example Packlist

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
`;var Xt=`:- [Neu] Dies ist dein erster Gegenstand;
`;var er=`:- [New] This is your first item;
`;var tr=`# Example Logic Demonstration

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
`;var Qe=new W("BACKPACKING_RULES_TEMPLATE");function ms(){return Yt;}var Ye=new W("DEFAULT_RULES_TEMPLATE");function ws(s){return s.startsWith("de")?Jt:Zt;}var Je=new W("EMPTY_RULES_TEMPLATE");function $s(s){return s.startsWith("de")?Xt:er;}var Ze=new W("LOGIC_RULES_TEMPLATE");function bs(){return tr;}function si(){return At([{provide:Qe,useFactory:ms,deps:[we]},{provide:Ye,useFactory:ws,deps:[we]},{provide:Je,useFactory:$s,deps:[we]},{provide:Ze,useFactory:bs,deps:[we]}]);}var rr=new W("CAPACITOR_HTTP_REQUEST_MODE");function Es(s){switch(s){case 400:return"Ung\xFCltige Anfrage";case 401:return"Nicht autorisiert";case 403:return"Verboten";case 404:return"Nicht gefunden";case 500:return"interner Serverfehler";case 504:return"Zeit\xFCberschreitung";default:return;}}var sr=({config:{rulesTemplate:s}})=>{let o=G("rulesMode","template"),e=G("rules",void 0),a=k(()=>e()!==void 0),c=k(()=>{let m=e();if(m)return Ss(m).toString(16);}),p=G("lastExportHash",void 0),d=G("lastExportDate",void 0),T=()=>{p.set(c()),d.set(new Date().getTime());},C=v(new Date().getTime());L(()=>{e(),C.set(new Date().getTime());});let H=y(Ye),U=y(Je),D=y(Ze),b=y(Qe),$=k(()=>{switch(s()){case"empty":return U;case"logic":return D;case"backpacking":return b;default:return H;}}),I=G("remoteHistory",[]),F=G("remoteHistoryTitle",{}),oe=function(m){I.update(N=>N.filter(O=>O!==m)),F.update(N=>{let O=X({},N);return delete O[m],O;});},Z=ve(()=>o()==="remote"?I()[0]:void 0),ae=y(rr,{optional:!0})??"cors",V=Rt({request:()=>({mode:o(),rawLocal:e(),remote:Z(),template:$()}),loader:({request:m})=>{switch(m.mode){case"local":return Promise.resolve(m.rawLocal);case"template":return Promise.resolve(m.template);case"remote":if(m.remote){if(!m.remote.startsWith("http"))throw new Error("Invalid URL");let N=Qt(m.remote,ae==="cors");return vt.get({url:N,webFetchExtra:{mode:ae}}).then(O=>{if(O.status>=200&&O.status<300)return I.update(A=>[m.remote,...A.filter(R=>R!==m.remote)]),O.data;{let A=[["HTTP Fehler",O.status.toString()].join(" "),Es(O.status)].join(": ");throw new Error(A);}});}else return Promise.resolve(void 0);}}}),le=function(m){Z()!==m&&(o.set("remote"),Z.set(m));},ce=function(m){let N=Z();o()==="remote"&&N&&F.update(O=>Re(X({},O),{[N]:m}));},ue=function(m){o.set("local"),e.set(m);},w=function(){e.set(V.value()),o.set("local"),T();};return{rules:{mode:o,raw:V.asReadonly(),lastAction:C.asReadonly(),hash:c,exportNeeded:k(()=>o()==="local"&&c()!==p()),markAsCurrent:T,localRulesAvailable:a},export:{lastDate:d.asReadonly()},localRules:{updateRules:ue,copyFromCurrent:w},remoteRules:{load:le,setCurrentTitle:ce,history:k(()=>I().map(m=>({url:m,title:F()[m]}))),removeFromHistory:oe}};},Ss=function(s,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,p;c<s.length;c++)p=s.charCodeAt(c),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var nr=()=>({serviceWorker:{status:v("init")}});function ys(){return _e.builder().extend(jt).extend(Ut).extend(nr).extend(Wt).extend(Dt).extend(sr).extend(Vt).extend(Ft);}var ir=new W("STATE_BUILDER",{providedIn:"root",factory:()=>ys()}),Ts=new W("GLOBAL_STATE",{providedIn:"root",factory:()=>y(ir).build()}),As=new W("RESET_SWITCH",{providedIn:"root",factory:()=>{let s=y(ir);return async()=>{await s.reset();};}});export{Cs as a,Ie as b,Os as c,ee as d,Y as e,J as f,q as g,Ls as h,$e as i,te as j,re as k,se as l,ne as m,rs as n,Le as o,He as p,si as q,rr as r,Ts as s,As as t};/**i18n:28a3168b76bee7dffc4b1e816012f24aa421b4da90b9b896cc67ce89fdf6fb94*/