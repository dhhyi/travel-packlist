import{d as kt}from"./chunk-3547fb00.js";import{c as Rt,l as xt,m as ve,n as Ce,p as Oe}from"./chunk-4116a9c8.js";import{B as Te,X as Re,_ as P,ba as y,ca as Tt,nc as me,r as At,tc as T,uc as I,vc as Ve,wa as O,wc as xe,xc as ke}from"./chunk-ed797429.js";import{a as de,b as yt}from"./chunk-3500bcc6.js";function ys(s){let o=s.title?.trim();return(o?`# ${o}

`:"")+s.map(a=>a.toString()).map(a=>a+";").join(`

`);}function Ne(s,o,e=-1){if(!s)return"0g";let a=(e<0?s/1e3:(s/1e3).toFixed(e)).toString()+"kg",c=(s*1).toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function As(s,o){return Ne(s,void 0,1)+" / "+Ne(o,void 0,1);}var ee=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof we)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},Y=class{question;variable;static NEW_QUESTION_NAME="New Question";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function vt(s){return s?s.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var J=class{category;name;weight;static NEW_ITEM_NAME="New Item";static NEW_CATEGORY_NAME="New";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${vt(this.category)}-${vt(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+Ne(this.weight)),o;}},K=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},xs=(()=>{class s extends K{static string="please_select";constructor(){super(s.string);}}return s;})(),we=(()=>{class s extends K{static string="always";constructor(){super(s.string);}evaluate(){return!0;}}return s;})(),te=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},re=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},se=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Zr(s,o){let e=o.filter(c=>c instanceof Y),a=o.filter(c=>c instanceof J);return new ee(s??new we(),e,a);}function Ct(s){return s.length===1?s[0]:new re(s[0],Ct(s.slice(1)));}function Ot(s){return s.length===1?s[0]:new se(s[0],Ot(s.slice(1)));}var ne=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(C=>C.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let p=this.location.start,d=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,A=this.location.source+":"+d.line+":"+d.column;if(a){let C=this.location.end,z="".padEnd(d.line.toString().length," "),M=a[p.line-1],$=(p.line===C.line?C.column:M.length+1)-p.column||1;e+=`
 --> `+A+`
`+z+` |
`+d.line+" | "+M+`
`+z+" | "+"".padEnd(p.column-1," ")+"".padEnd($,"^");}else e+=`
 at `+A;}return e;}static buildMessage(o,e){function a($){return $.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p($){return c?$.replace(c,w=>"\\u{"+a(w)+"}"):$;}function d($){return p($.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}function A($){return p($.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}let C={literal($){return'"'+d($.text)+'"';},class($){let w=$.parts.map(N=>Array.isArray(N)?A(N[0])+"-"+A(N[1]):A(N));return"["+($.inverted?"^":"")+w.join("")+"]"+($.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other($){return $.description;}};function z($){return C[$.type]($);}function M($){let w=$.map(z);if(w.sort(),w.length>0){let N=1;for(let V=1;V<w.length;V++)w[V-1]!==w[V]&&(w[N]=w[V],N++);w.length=N;}switch(w.length){case 1:return w[0];case 2:return w[0]+" or "+w[1];default:return w.slice(0,-1).join(", ")+", or "+w[w.length-1];}}function D($){return $?'"'+d($)+'"':"end of input";}return"Expected "+M(o)+" but "+D(e)+" found.";}};function j(s,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:at,Rule:De,Condition:ct,Effects:gt,Question:Me,Item:Fe,VariableName:Ue,QuestionString:pt,ItemNameAndWeight:dt,CategoryName:ht},p=at,d="#",A=";",C=":-",z="OR",M="AND",D="NOT",$=",",w="$",N="[",V="]",Z="kg",oe="g",ae=".",H=/^[^\n\r]/,le=/^[^$,;#]/,ce=/^[a-zA-Z]/,R=/^[a-zA-Z0-9\-[\](){}_]/,m=/^[^\],;#[]/,S=/^[,;]/,U=/^[^ ,;#]/,X=/^[0-9]/,k=/^[ \t\n\r]/,x=L("title"),G=F("#",!1),ie=Q([`
`,"\r"],!0,!1,!1),_e=L("comment"),ir=L("rule end"),or=F(";",!1),ar=L("rule"),lr=F(":-",!1),Ee=L("condition"),cr=F("OR",!1),ur=F("AND",!1),Pe=F("NOT",!1),fr=F(",",!1),Ze=L("question"),gr=F("$",!1),Xe=Q(["$",",",";","#"],!0,!1,!1),pr=L("variable name"),hr=Q([["a","z"],["A","Z"]],!1,!1,!1),et=Q([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),dr=L("item"),mr=L("category"),wr=F("[",!1),$r=F("]",!1),br=L("category name"),tt=Q(["]",",",";","#","["],!0,!1,!1),Sr=L("item name"),Er=L("word"),yr=Q([",",";"],!1,!1,!1),rt=Q([" ",",",";","#"],!0,!1,!1),Ar=L("weight"),Tr=F("kg",!1),Rr=F("g",!1),xr=L("number"),ye=Q([["0","9"]],!1,!1,!1),kr=F(".",!1),st=Q([" ","	",`
`,"\r"],!1,!1,!1),vr=Gr();function Cr(t,r){return r.title=t?.trim(),r.rulesContainComments=St,r;}function Or(t){if(t.trim().length)return t.trim();}function Nr(t){if(t.trim().length)return St=!0,t.trim();}function Ir(t,r){return Zr(t,r);}function Lr(t){return Ot(t);}function _r(t){return Ct(t);}function Pr(t){return new te(t);}function Dr(t){return new K(t);}function Wr(t,r){return new Y(t.trim(),r.trim());}function Mr(t,r){let{name:i,weight:l}=r;return new J(t.trim(),i,l);}function Ur(t,r){return o.trackWeight;}function Fr(t,r){let i=t.trim();return i.length||nt("item name"),{name:i,weight:r};}function jr(t){let r=t.trim();return r.length||nt("item name"),{name:r,weight:void 0};}function zr(t){return t*1e3;}function Vr(){return parseFloat(Hr());}let n=o.peg$currPos|0,v=n,ue=[{line:1,column:1}],B=n,Ae=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,pe;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=c[o.startRule];}function Hr(){return s.substring(v,n);}function $s(){return v;}function bs(){return{source:a,start:v,end:n};}function Ss(){return he(v,n);}function nt(t,r){throw r=r!==void 0?r:he(v,n),ot([L(t)],s.substring(v,n),r);}function Es(t,r){throw r=r!==void 0?r:he(v,n),qr(t,r);}function Br(t=n){let r=s.codePointAt(t);return r===void 0?"":String.fromCodePoint(r);}function F(t,r){return{type:"literal",text:t,ignoreCase:r};}function Q(t,r,i,l){return{type:"class",parts:t,inverted:r,ignoreCase:i,unicode:l};}function Gr(){return{type:"any"};}function Kr(){return{type:"end"};}function L(t){return{type:"other",description:t};}function it(t){let r=ue[t],i;if(r)return r;if(t>=ue.length)i=ue.length-1;else for(i=t;!ue[--i];);for(r=ue[i],r={line:r.line,column:r.column};i<t;)s.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return ue[t]=r,r;}function he(t,r,i){let l=it(t),f=it(r),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function h(t){n<B||(n>B&&(B=n,Ae=[]),Ae.push(t));}function qr(t,r){return new ne(t,null,null,r);}function ot(t,r,i){return new ne(ne.buildMessage(t,r),t,r,i);}function at(){let t,r,i,l,f,g,b,_;for(t=n,r=E(),i=Qr(),i===e&&(i=null),l=E(),f=[],g=De();g!==e;)f.push(g),g=n,b=lt(),b!==e?(b=De(),b===e?(n=g,g=e):g=b):g=b;return g=lt(),g===e&&(g=null),b=E(),_=bt(),_!==e?(v=t,t=Cr(i,f)):(n=t,t=e),t;}function Qr(){let t,r,i,l,f,g;if(u++,t=n,s.charCodeAt(n)===35?(r=d,n++):(r=e,u===0&&h(G)),r!==e){if(i=E(),l=n,f=[],g=s.charAt(n),H.test(g)?n++:(g=e,u===0&&h(ie)),g!==e)for(;g!==e;)f.push(g),g=s.charAt(n),H.test(g)?n++:(g=e,u===0&&h(ie));else f=e;f!==e?l=s.substring(l,n):l=f,l!==e?(f=E(),v=t,t=Or(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(x)),t;}function fe(){let t,r,i,l,f;if(u++,t=n,s.charCodeAt(n)===35?(r=d,n++):(r=e,u===0&&h(G)),r!==e){if(i=n,l=[],f=s.charAt(n),H.test(f)?n++:(f=e,u===0&&h(ie)),f!==e)for(;f!==e;)l.push(f),f=s.charAt(n),H.test(f)?n++:(f=e,u===0&&h(ie));else l=e;l!==e?i=s.substring(i,n):i=l,i!==e?(l=E(),v=t,t=Nr(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(_e)),t;}function lt(){let t,r,i,l,f,g;if(u++,t=n,r=E(),s.charCodeAt(n)===59?(i=A,n++):(i=e,u===0&&h(or)),i!==e){for(l=E(),f=[],g=fe();g!==e;)f.push(g),g=fe();g=E(),r=[r,i,l,f,g],t=r;}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(ir)),t;}function De(){let t,r,i,l,f,g,b,_;for(u++,t=n,r=[],i=fe();i!==e;)r.push(i),i=fe();return i=E(),l=ct(),l===e&&(l=null),f=E(),s.substr(n,2)===C?(g=C,n+=2):(g=e,u===0&&h(lr)),g!==e?(b=E(),_=gt(),v=t,t=Ir(l,_)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(ar)),t;}function ct(){let t,r;return u++,t=Yr(),u--,t===e&&(r=e,u===0&&h(Ee)),t;}function Yr(){let t,r,i,l,f,g,b,_;for(u++,t=n,r=n,i=[],l=ut();l!==e;)i.push(l),l=n,f=n,g=E(),s.substr(n,2)===z?(b=z,n+=2):(b=e,u===0&&h(cr)),b!==e?(_=E(),g=[g,b,_],f=g):(n=f,f=e),f!==e?(f=ut(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(v=t,r=Lr(r)),t=r,u--,t===e&&(r=e,u===0&&h(Ee)),t;}function ut(){let t,r,i,l,f,g,b,_;for(u++,t=n,r=n,i=[],l=We();l!==e;)i.push(l),l=n,f=n,g=E(),s.substr(n,3)===M?(b=M,n+=3):(b=e,u===0&&h(ur)),b!==e?(_=E(),g=[g,b,_],f=g):(n=f,f=e),f!==e?(f=We(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(v=t,r=_r(r)),t=r,u--,t===e&&(r=e,u===0&&h(Ee)),t;}function We(){let t,r,i,l,f,g;return u++,t=n,s.substr(n,3)===D?(r=D,n+=3):(r=e,u===0&&h(Pe)),r!==e?(i=E(),s.substr(n,3)===D?(l=D,n+=3):(l=e,u===0&&h(Pe)),l!==e?(f=E(),g=We(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s.substr(n,3)===D?(r=D,n+=3):(r=e,u===0&&h(Pe)),r!==e?(i=E(),l=ft(),l!==e?(v=t,t=Pr(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=ft(),r!==e?t=r:(n=t,t=e))),u--,t===e&&(r=e,u===0&&h(Ee)),t;}function ft(){let t,r;return t=n,r=Ue(),r!==e&&(v=t,r=Dr(r)),t=r,t;}function gt(){let t,r,i,l,f,g,b,_,ge;for(t=n,r=[],i=Me(),i===e&&(i=Fe());i!==e;){if(r.push(i),i=n,l=n,f=E(),s.charCodeAt(n)===44?(g=$,n++):(g=e,u===0&&h(fr)),g!==e){for(b=E(),_=[],ge=fe();ge!==e;)_.push(ge),ge=fe();ge=E(),f=[f,g,b,_,ge],l=f;}else n=l,l=e;l!==e?(l=Me(),l===e&&(l=Fe()),l===e?(n=i,i=e):i=l):i=l;}return t=r,t;}function Me(){let t,r,i,l;return u++,t=n,r=pt(),r!==e?(s.charCodeAt(n)===36?(i=w,n++):(i=e,u===0&&h(gr)),i!==e?(l=Ue(),l!==e?(v=t,t=Wr(r,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(Ze)),t;}function pt(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),le.test(i)?n++:(i=e,u===0&&h(Xe)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),le.test(i)?n++:(i=e,u===0&&h(Xe));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&h(Ze)),t;}function Ue(){let t,r,i,l,f;if(u++,t=n,r=n,i=s.charAt(n),ce.test(i)?n++:(i=e,u===0&&h(hr)),i!==e){for(l=[],f=s.charAt(n),R.test(f)?n++:(f=e,u===0&&h(et));f!==e;)l.push(f),f=s.charAt(n),R.test(f)?n++:(f=e,u===0&&h(et));i=[i,l],r=i;}else n=r,r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&h(pr)),t;}function Fe(){let t,r,i,l;return u++,t=n,r=Jr(),r!==e?(i=E(),l=dt(),l!==e?(v=t,t=Mr(r,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(dr)),t;}function Jr(){let t,r,i,l,f,g;return u++,t=n,s.charCodeAt(n)===91?(r=N,n++):(r=e,u===0&&h(wr)),r!==e?(i=E(),l=ht(),l!==e?(f=E(),s.charCodeAt(n)===93?(g=V,n++):(g=e,u===0&&h($r)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(mr)),t;}function ht(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),m.test(i)?n++:(i=e,u===0&&h(tt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),m.test(i)?n++:(i=e,u===0&&h(tt));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&h(br)),t;}function dt(){let t,r,i,l,f;for(u++,t=n,r=n,i=[],l=mt();l!==e;)i.push(l),l=n,f=E(),f=mt(),f===e?(n=l,l=e):l=f;if(r=s.substring(r,n),i=E(),l=wt(),l!==e?(v=n,f=Ur(r,l),f?f=void 0:f=e,f!==e?(v=t,t=Fr(r,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,r=n,i=[],l=je();l!==e;)i.push(l),l=n,f=E(),f=je(),f===e?(n=l,l=e):l=f;r=s.substring(r,n),v=t,r=jr(r),t=r;}return u--,t===e&&(r=e,u===0&&h(Sr)),t;}function mt(){let t,r,i,l,f,g;return u++,t=n,r=n,u++,i=n,l=wt(),l!==e?(f=E(),g=bt(),g===e&&(g=s.charAt(n),S.test(g)?n++:(g=e,u===0&&h(yr))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?r=void 0:(n=r,r=e),r!==e?(i=je(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&h(Er)),t;}function je(){let t,r,i;if(t=n,r=[],i=s.charAt(n),U.test(i)?n++:(i=e,u===0&&h(rt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),U.test(i)?n++:(i=e,u===0&&h(rt));else r=e;return r!==e?t=s.substring(t,n):t=r,t;}function wt(){let t,r,i;return u++,t=n,r=$t(),r!==e?(s.substr(n,2)===Z?(i=Z,n+=2):(i=e,u===0&&h(Tr)),i!==e?(v=t,t=zr(r)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=$t(),r!==e?(s.charCodeAt(n)===103?(i=oe,n++):(i=e,u===0&&h(Rr)),i===e&&(i=null),t=r):(n=t,t=e)),u--,t===e&&(r=e,u===0&&h(Ar)),t;}function $t(){let t,r,i,l,f,g,b;if(u++,t=n,r=[],i=s.charAt(n),X.test(i)?n++:(i=e,u===0&&h(ye)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),X.test(i)?n++:(i=e,u===0&&h(ye));else r=e;if(r!==e){if(i=n,s.charCodeAt(n)===46?(l=ae,n++):(l=e,u===0&&h(kr)),l!==e){if(f=n,g=[],b=s.charAt(n),X.test(b)?n++:(b=e,u===0&&h(ye)),b!==e)for(;b!==e;)g.push(b),b=s.charAt(n),X.test(b)?n++:(b=e,u===0&&h(ye));else g=e;g!==e?f=s.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),v=t,t=Vr();}else n=t,t=e;return u--,t===e&&(r=e,u===0&&h(xr)),t;}function E(){let t,r;for(u++,t=[],r=s.charAt(n),k.test(r)?n++:(r=e,u===0&&h(st));r!==e;)t.push(r),r=s.charAt(n),k.test(r)?n++:(r=e,u===0&&h(st));return u--,t;}function bt(){let t,r;return t=n,u++,s.length>n?(r=s.charAt(n),n++):(r=e,u===0&&h(vr)),u--,r===e?t=void 0:(n=t,t=e),t;}let St=!1;pe=p();let ze=pe!==e&&n===s.length;function Et(){throw pe!==e&&n<s.length&&h(Kr()),ot(Ae,B<s.length?Br(B):null,B<s.length?he(B,B+1):he(B,B));}if(o.peg$library)return{peg$result:pe,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Ae,peg$maxFailPos:B,peg$success:ze,peg$throw:ze?void 0:Et};if(ze)return pe;Et();}var es={isTrackWeight:()=>!1},ts=new P("PARSER_CONFIG_PROVIDER"),Ie=(()=>{class s{config=y(ts,{optional:!0})??es;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return j(e,this.makeOptions("Condition"));}parseQuestion(e){return j(e,this.makeOptions("Question"));}parseItem(e){return j(e,this.makeOptions("Item"));}parseEffects(e){return j(e,this.makeOptions("Effects"));}parseRule(e){return j(e,this.makeOptions("Rule"));}parseRules(e){try{return j(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Error parsing rules"),a instanceof ne){let p=a.location.start.line.toString(),d=a.location.start.column.toString();c.push(" at line ",p," column ",d),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){j(e,this.makeOptions("VariableName"));}validateQuestionString(e){j(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){j(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){j(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return j(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||s)();};static ɵprov=Re({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();var He=(()=>{class s{parser=y(Ie);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let p of c.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(d=>this.renameVariable(e,a,d));if(c instanceof Y)return c.variable===e?new Y(c.question,a):c;if(c instanceof ee)return new ee(this.renameVariable(e,a,c.condition),c.questions.map(d=>this.renameVariable(e,a,d)),c.items);if(c instanceof K)return c.variable===e?new K(a):c;if(c instanceof te)return new te(this.renameVariable(e,a,c.not));if(c instanceof re)return new re(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof se)return new se(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let p=c;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((p,d)=>yt(de({},p),{[d]:e.model[d]}),{[we.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof ee)return this.contains(e.condition,a)||e.questions.some(d=>this.contains(d,a))||e.items.some(d=>this.contains(d,a));if(e instanceof Y)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof J)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof K)return e.variable.toLowerCase().includes(c);if(e instanceof te)return this.contains(e.not,a);if(e instanceof re)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof se)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((p,d)=>{let A;return this.parser.isTrackWeight()?A=d.weight?1:0:A=this.parser.forceParseWeight(d.name)?1:0,{items:p.items+1,weights:p.weights+A};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||s)();};static ɵprov=Re({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();function rs(s,o){return Object.entries(s).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=de(de({},e[a]),c),e),{});}var $e=new P("RESET_SIGNAL",{providedIn:"root",factory:()=>O(!1)}),Le=class s{state;triggerReset=y($e);constructor(o){this.state=o;}static builder(){return new s({});}extend(o){return new s(rs(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function It(s,o){if(typeof s!=typeof o)return!1;if(s&&o&&typeof s=="object"){let e=Object.keys(s),a=Object.keys(o);return e.length===a.length&&e.every(c=>It(s[c],o[c]));}return s===o;}function Nt(s,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[s]??o;}function ss(s,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);It(o,e)?delete c[s]:o===null?c[s]=void 0:c[s]=o,this.setItem("state",JSON.stringify(c));}function Lt(s,o,e){let a=y($e),c=O(Nt.call(s,o,e));return I(()=>{let p=c();p!==Nt.call(s,o,e)&&ss.call(s,o,p,e);},{manualCleanup:!0}),I(()=>{a()&&c.set(e);}),c;}var q=(s,o)=>Lt(localStorage,s,o),be=(s,o)=>Lt(sessionStorage,s,o);var W=q,_t=["en","de"],Pt=()=>{let s=W("categorySorting","alphabetically"),o=W("trackWeight",!1);return I(()=>{o()===!1&&s()==="weight"&&s.set("alphabetically");}),{config:{categorySorting:s,trackWeight:o,skipItems:W("skipItems",!1),fadeOutDisabledRules:W("fadeOutDisabledRules",!1),highlightVariableStatus:W("highlightVariableStatus",!1),refactorVariables:W("refactorVariables",!0),confirmRuleDeletion:W("confirmRuleDeletion",!0),rulesTemplate:W("rulesTemplate","default"),theme:W("theme","system"),fontSize:W("fontSize","normal"),accessibility:W("accessibility","accessible"),animations:W("animations",!0),language:W("language","auto"),exportReminder:W("exportReminder",!1)}};};var Dt=({config:{language:s}})=>{let o=O(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:T(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:T(()=>{let e=s();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>_t.includes(p))??"en":e;})}};};var Wt=(s,o)=>be(s,o),Mt=()=>({clipboard:{items:Wt("clipboardItems",[]),questions:Wt("clipboardQuestions",[])}});var Se=q;function ns(s){return"cat-"+s.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Be=class extends J{original;checked;skipped;colored;constructor(o,e,a,c){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c;}},Ut=({rules:{parsed:s},config:{categorySorting:o,skipItems:e}})=>{let a=Se("answers",{}),c=Se("checkedItems",[]),p=Se("skippedItems",[]),d=Se("collapsedCategories",[]),A=Se("answersLocked",!1),C=be("statsVisible",void 0),z=be("askedWeightTracking",void 0),M=y(He),D=T(()=>M.filterActive({rules:s.value(),model:a()})),$=T(()=>D().rules),w=T(()=>$().flatMap(m=>m.items)),N=T(()=>w().filter(m=>c().includes(m.id()))),V=m=>{c().includes(m.id())?c.update(S=>S.filter(U=>U!==m.id())):c.update(S=>[...S,m.id()]);},Z=T(()=>w().filter(m=>p().includes(m.id()))),oe=m=>{e()&&(p().includes(m.id())?p.update(S=>S.filter(U=>U!==m.id())):p.update(S=>[...S,m.id()]));},ae=m=>{d().includes(m)?d.update(S=>S.filter(U=>U!==m)):d.update(S=>[...S,m]);},H=O([]),le=m=>{(H().length!==m.length||!m.every(S=>H().includes(S)))&&H.set(m);},ce=T(()=>{function m(k){return{id:ns(k.category),name:k.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:d().includes(k.category),colored:C()==="distribution"};}let S=w().reduce((k,x)=>{k[x.category]||(k[x.category]=m(x));let G=e()&&Z().includes(x),ie=!G&&N().includes(x),_e=C()==="heaviestItems"&&H().includes(x.id());return k[x.category].items.push(new Be(x,ie,G,_e)),ie&&(k[x.category].checkedItems++,k[x.category].checkedWeight+=x.weight??0),G||(k[x.category].totalItems++,k[x.category].totalWeight+=x.weight??0),k;},{}),X=T(()=>{let k=o();return k==="alphabetically"?(x,G)=>x.name.localeCompare(G.name):k==="weight"?(x,G)=>G.totalWeight-x.totalWeight:()=>0;})();return Object.entries(S).map(k=>k[1]).toSorted((k,x)=>X(k,x));}),R=T(()=>Object.entries(ce()).reduce((m,[,S])=>(m.totalItems+=S.totalItems,m.checkedItems+=S.checkedItems,m.totalWeight+=S.totalWeight,m.checkedWeight+=S.checkedWeight,m),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return I(()=>{s.value(),A.set(!1),C.set(void 0);}),{rules:{categories:T(()=>M.extractCategories(s.value())),variables:T(()=>M.extractVariables(s.value()))},active:{rules:$,answers:T(()=>D().model),questions:T(()=>$().flatMap(m=>m.questions))},packlist:{answers:a,model:ce,stats:R,toggleCheckedItem:V,toggleSkippedItem:oe,colorItems:le,toggleCategoryCollapse:ae,answersLocked:A,statsVisible:C,askedWeightTracking:z,reset:()=>{a.set({}),c.set([]),p.set([]),d.set([]),A.set(!1),C.set(void 0);}}};};var Ge=(s,o)=>{let e=y(Oe),a=y(Ce),c=y($e),p=O(void 0);return e.events.pipe(Te(d=>d instanceof ve),At(()=>a.snapshot.queryParams[s]??o)).subscribe(d=>{d!==""&&p.set(d);}),I(()=>{let d=p()||void 0;d===o&&(d=void 0),a.snapshot.queryParams[s]!==d&&e.navigate([],{queryParams:{[s]:d},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),I(()=>{c()&&p.set(o);}),p;};var is={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},Ft=()=>{let s=y(Oe),o=y(Ce),e=Ge("rulesMode","view"),a=xt(o.fragment,{requireSync:!0}),c=xe(()=>a()??void 0);I(()=>{let A=c();A!==a()&&s.navigate([],{fragment:A,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=y(Rt),d=O(p.path());return s.events.pipe(Te(A=>A instanceof ve)).subscribe(()=>{p.path()!==d()&&d.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Ge("filterRulesQuery",void 0),path:d.asReadonly(),fragment:c,go:A=>{is[A].call({router:s,rulesMode:e});}}};};var jt=({config:{trackWeight:s},rules:{raw:o}})=>{let e=y(Ie),a=ke({request:()=>(s(),o.value()),loader:({request:p})=>Promise.resolve(p?e.parseRules(p):[])}),c=O([]);return I(()=>{let p=a.value();p&&c.set(p);}),{rules:{parsed:{value:c.asReadonly(),status:a.status,error:a.error},hasError:T(()=>a.status()===Ve.Error||o.status()===Ve.Error),isLoading:T(()=>a.isLoading()||o.isLoading())}};};var zt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Vt={name:"GitHub Gist",test:s=>zt.test(s),transform:s=>{let o=zt.exec(s);if(!o)return s;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var Ke=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Ht=new Ke();var Bt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,os={name:"Google Drive",needsCORS:!0,test:s=>Bt.test(s),transform:s=>{let o=Bt.exec(s);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:s;}},Gt=os;var as={name:"Pastebin",needsCORS:!0,test:s=>s.startsWith("https://pastebin.com/")&&!s.includes("/raw/"),transform:s=>s.replace("https://pastebin.com/","https://pastebin.com/raw/")},Kt=as;var ls=[Vt,Ht,Gt,Kt];function qt(s,o){if(s){let e=ls.find(a=>a.test(s));if(e){let a=e.transform(s);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return s;}var Qt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var qe=new P("BACKPACKING_RULES_TEMPLATE");function cs(){return Qt;}var Qe=new P("DEFAULT_RULES_TEMPLATE");function us(s){return s.startsWith("de")?Yt:Jt;}var Ye=new P("EMPTY_RULES_TEMPLATE");function fs(s){return s.startsWith("de")?Zt:Xt;}var Je=new P("LOGIC_RULES_TEMPLATE");function gs(){return er;}function Yn(){return Tt([{provide:qe,useFactory:cs,deps:[me]},{provide:Qe,useFactory:us,deps:[me]},{provide:Ye,useFactory:fs,deps:[me]},{provide:Je,useFactory:gs,deps:[me]}]);}var tr=new P("CAPACITOR_HTTP_REQUEST_MODE");function ps(s){switch(s){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var rr=({config:{rulesTemplate:s}})=>{let o=q("rulesMode","template"),e=q("rules",void 0),a=T(()=>e()!==void 0),c=T(()=>{let R=e();if(R)return hs(R).toString(16);}),p=q("lastExportHash",void 0),d=q("lastExportDate",void 0),A=()=>{p.set(c()),d.set(new Date().getTime());},C=O(new Date().getTime());I(()=>{e(),C.set(new Date().getTime());});let z=y(Qe),M=y(Ye),D=y(Je),$=y(qe),w=T(()=>{switch(s()){case"empty":return M;case"logic":return D;case"backpacking":return $;default:return z;}}),N=q("remoteHistory",[]),V=function(R){N.update(m=>m.filter(S=>S!==R));},Z=xe(()=>o()==="remote"?N()[0]:void 0),oe=y(tr,{optional:!0})??"cors",ae=ke({request:()=>({mode:o(),rawLocal:e(),remote:Z(),template:w()}),loader:({request:R})=>{switch(R.mode){case"local":return Promise.resolve(R.rawLocal);case"template":return Promise.resolve(R.template);case"remote":if(R.remote){if(!R.remote.startsWith("http"))throw new Error("Invalid URL");let m=qt(R.remote,oe==="cors");return kt.get({url:m,webFetchExtra:{mode:oe}}).then(S=>{if(S.status>=200&&S.status<300)return N.update(U=>[R.remote,...U.filter(X=>X!==R.remote)]),S.data;{let U=[["HTTP Error",S.status.toString()].join(" "),ps(S.status)].join(": ");throw new Error(U);}});}else return Promise.resolve(void 0);}}}),H=function(R){Z()!==R&&(o.set("remote"),Z.set(R));},le=function(R){o.set("local"),e.set(R);},ce=function(){e.set(ae.value()),o.set("local"),A();};return{rules:{mode:o,raw:ae.asReadonly(),lastAction:C.asReadonly(),hash:c,exportNeeded:T(()=>o()==="local"&&c()!==p()),markAsCurrent:A,localRulesAvailable:a},export:{lastDate:d.asReadonly()},localRules:{updateRules:le,copyFromCurrent:ce},remoteRules:{load:H,history:N.asReadonly(),removeFromHistory:V}};},hs=function(s,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,p;c<s.length;c++)p=s.charCodeAt(c),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var sr=()=>({serviceWorker:{status:O("init")}});function ds(){return Le.builder().extend(Ft).extend(Mt).extend(sr).extend(Pt).extend(Dt).extend(rr).extend(jt).extend(Ut);}var nr=new P("STATE_BUILDER",{providedIn:"root",factory:()=>ds()}),ms=new P("GLOBAL_STATE",{providedIn:"root",factory:()=>y(nr).build()}),ws=new P("RESET_SWITCH",{providedIn:"root",factory:()=>{let s=y(nr);return async()=>{await s.reset();};}});export{ys as a,Ne as b,As as c,ee as d,Y as e,J as f,K as g,xs as h,we as i,te as j,re as k,se as l,ne as m,ts as n,Ie as o,He as p,Yn as q,tr as r,ms as s,ws as t};/**i18n:e46b0899b8a70e325374c271d32fbb927f955365ba6c424ec8a1c5b1d8e80e46*/