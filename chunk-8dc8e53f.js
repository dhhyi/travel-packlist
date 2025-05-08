import{d as kt}from"./chunk-88d5c091.js";import{c as Rt,l as xt,m as Ce,n as Oe,p as Ne}from"./chunk-0e95d309.js";import{B as Re,X as xe,_ as D,ba as y,ca as At,oc as me,r as Tt,uc as x,vc as L,wa as N,wc as He,xc as ke,yc as ve}from"./chunk-b4a1f340.js";import{a as X,b as Ae}from"./chunk-ecf0d82d.js";function vs(s){let o=s.title?.trim();return(o?`# ${o}

`:"")+s.map(a=>a.toString()).map(a=>a+";").join(`

`);}function Ie(s,o,e=-1){if(!s)return"0g";let a=(e<0?s/1e3:(s/1e3).toFixed(e)).toString()+"kg",c=(s*1).toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Cs(s,o){return Ie(s,void 0,1)+" / "+Ie(o,void 0,1);}var ee=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof we)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},Y=class{question;variable;static NEW_QUESTION_NAME="New Question";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function vt(s){return s?s.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var J=class{category;name;weight;static NEW_ITEM_NAME="New Item";static NEW_CATEGORY_NAME="New";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${vt(this.category)}-${vt(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+Ie(this.weight)),o;}},q=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Is=(()=>{class s extends q{static string="please_select";constructor(){super(s.string);}}return s;})(),we=(()=>{class s extends q{static string="always";constructor(){super(s.string);}evaluate(){return!0;}}return s;})(),te=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},re=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},se=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Zr(s,o){let e=o.filter(c=>c instanceof Y),a=o.filter(c=>c instanceof J);return new ee(s??new we(),e,a);}function Ct(s){return s.length===1?s[0]:new re(s[0],Ct(s.slice(1)));}function Ot(s){return s.length===1?s[0]:new se(s[0],Ot(s.slice(1)));}var ne=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(v=>v.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let p=this.location.start,h=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,T=this.location.source+":"+h.line+":"+h.column;if(a){let v=this.location.end,H="".padEnd(h.line.toString().length," "),U=a[p.line-1],b=(p.line===v.line?v.column:U.length+1)-p.column||1;e+=`
 --> `+T+`
`+H+` |
`+h.line+" | "+U+`
`+H+" | "+"".padEnd(p.column-1," ")+"".padEnd(b,"^");}else e+=`
 at `+T;}return e;}static buildMessage(o,e){function a(b){return b.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p(b){return c?b.replace(c,$=>"\\u{"+a($)+"}"):b;}function h(b){return p(b.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}function T(b){return p(b.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}let v={literal(b){return'"'+h(b.text)+'"';},class(b){let $=b.parts.map(I=>Array.isArray(I)?T(I[0])+"-"+T(I[1]):T(I));return"["+(b.inverted?"^":"")+$.join("")+"]"+(b.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(b){return b.description;}};function H(b){return v[b.type](b);}function U(b){let $=b.map(H);if($.sort(),$.length>0){let I=1;for(let F=1;F<$.length;F++)$[F-1]!==$[F]&&($[I]=$[F],I++);$.length=I;}switch($.length){case 1:return $[0];case 2:return $[0]+" or "+$[1];default:return $.slice(0,-1).join(", ")+", or "+$[$.length-1];}}function W(b){return b?'"'+h(b)+'"':"end of input";}return"Expected "+U(o)+" but "+W(e)+" found.";}};function V(s,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:lt,Rule:We,Condition:ut,Effects:pt,Question:Ue,Item:je,VariableName:Fe,QuestionString:ht,ItemNameAndWeight:mt,CategoryName:dt},p=lt,h="#",T=";",v=":-",H="OR",U="AND",W="NOT",b=",",$="$",I="[",F="]",oe="kg",Z="g",ae=".",z=/^[^\n\r]/,le=/^[^$,;#]/,ce=/^[a-zA-Z]/,ue=/^[a-zA-Z0-9\-[\](){}_]/,w=/^[^\],;#[]/,m=/^[,;]/,O=/^[^ ,;#]/,C=/^[0-9]/,A=/^[ \t\n\r]/,R=_("title"),K=j("#",!1),ie=Q([`
`,"\r"],!0,!1,!1),Pe=_("comment"),ir=_("rule end"),or=j(";",!1),ar=_("rule"),lr=j(":-",!1),Ee=_("condition"),cr=j("OR",!1),ur=j("AND",!1),De=j("NOT",!1),fr=j(",",!1),Xe=_("question"),gr=j("$",!1),et=Q(["$",",",";","#"],!0,!1,!1),pr=_("variable name"),hr=Q([["a","z"],["A","Z"]],!1,!1,!1),tt=Q([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),dr=_("item"),mr=_("category"),wr=j("[",!1),$r=j("]",!1),br=_("category name"),rt=Q(["]",",",";","#","["],!0,!1,!1),Sr=_("item name"),Er=_("word"),yr=Q([",",";"],!1,!1,!1),st=Q([" ",",",";","#"],!0,!1,!1),Tr=_("weight"),Ar=j("kg",!1),Rr=j("g",!1),xr=_("number"),ye=Q([["0","9"]],!1,!1,!1),kr=j(".",!1),nt=Q([" ","	",`
`,"\r"],!1,!1,!1),vr=Gr();function Cr(t,r){return r.title=t?.trim(),r.rulesContainComments=Et,r;}function Or(t){if(t.trim().length)return t.trim();}function Nr(t){if(t.trim().length)return Et=!0,t.trim();}function Ir(t,r){return Zr(t,r);}function Lr(t){return Ot(t);}function _r(t){return Ct(t);}function Pr(t){return new te(t);}function Dr(t){return new q(t);}function Wr(t,r){return new Y(t.trim(),r.trim());}function Mr(t,r){let{name:i,weight:l}=r;return new J(t.trim(),i,l);}function Ur(t,r){return o.trackWeight;}function Fr(t,r){let i=t.trim();return i.length||it("item name"),{name:i,weight:r};}function jr(t){let r=t.trim();return r.length||it("item name"),{name:r,weight:void 0};}function zr(t){return t*1e3;}function Vr(){return parseFloat(Hr());}let n=o.peg$currPos|0,k=n,fe=[{line:1,column:1}],B=n,Te=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,he;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=c[o.startRule];}function Hr(){return s.substring(k,n);}function As(){return k;}function Rs(){return{source:a,start:k,end:n};}function xs(){return de(k,n);}function it(t,r){throw r=r!==void 0?r:de(k,n),at([_(t)],s.substring(k,n),r);}function ks(t,r){throw r=r!==void 0?r:de(k,n),qr(t,r);}function Br(t=n){let r=s.codePointAt(t);return r===void 0?"":String.fromCodePoint(r);}function j(t,r){return{type:"literal",text:t,ignoreCase:r};}function Q(t,r,i,l){return{type:"class",parts:t,inverted:r,ignoreCase:i,unicode:l};}function Gr(){return{type:"any"};}function Kr(){return{type:"end"};}function _(t){return{type:"other",description:t};}function ot(t){let r=fe[t],i;if(r)return r;if(t>=fe.length)i=fe.length-1;else for(i=t;!fe[--i];);for(r=fe[i],r={line:r.line,column:r.column};i<t;)s.charCodeAt(i)===10?(r.line++,r.column=1):r.column++,i++;return fe[t]=r,r;}function de(t,r,i){let l=ot(t),f=ot(r),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function d(t){n<B||(n>B&&(B=n,Te=[]),Te.push(t));}function qr(t,r){return new ne(t,null,null,r);}function at(t,r,i){return new ne(ne.buildMessage(t,r),t,r,i);}function lt(){let t,r,i,l,f,g,S,P;for(t=n,r=E(),i=Qr(),i===e&&(i=null),l=E(),f=[],g=We();g!==e;)f.push(g),g=n,S=ct(),S!==e?(S=We(),S===e?(n=g,g=e):g=S):g=S;return g=ct(),g===e&&(g=null),S=E(),P=St(),P!==e?(k=t,t=Cr(i,f)):(n=t,t=e),t;}function Qr(){let t,r,i,l,f,g;if(u++,t=n,s.charCodeAt(n)===35?(r=h,n++):(r=e,u===0&&d(K)),r!==e){if(i=E(),l=n,f=[],g=s.charAt(n),z.test(g)?n++:(g=e,u===0&&d(ie)),g!==e)for(;g!==e;)f.push(g),g=s.charAt(n),z.test(g)?n++:(g=e,u===0&&d(ie));else f=e;f!==e?l=s.substring(l,n):l=f,l!==e?(f=E(),k=t,t=Or(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&d(R)),t;}function ge(){let t,r,i,l,f;if(u++,t=n,s.charCodeAt(n)===35?(r=h,n++):(r=e,u===0&&d(K)),r!==e){if(i=n,l=[],f=s.charAt(n),z.test(f)?n++:(f=e,u===0&&d(ie)),f!==e)for(;f!==e;)l.push(f),f=s.charAt(n),z.test(f)?n++:(f=e,u===0&&d(ie));else l=e;l!==e?i=s.substring(i,n):i=l,i!==e?(l=E(),k=t,t=Nr(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(r=e,u===0&&d(Pe)),t;}function ct(){let t,r,i,l,f,g;if(u++,t=n,r=E(),s.charCodeAt(n)===59?(i=T,n++):(i=e,u===0&&d(or)),i!==e){for(l=E(),f=[],g=ge();g!==e;)f.push(g),g=ge();g=E(),r=[r,i,l,f,g],t=r;}else n=t,t=e;return u--,t===e&&(r=e,u===0&&d(ir)),t;}function We(){let t,r,i,l,f,g,S,P;for(u++,t=n,r=[],i=ge();i!==e;)r.push(i),i=ge();return i=E(),l=ut(),l===e&&(l=null),f=E(),s.substr(n,2)===v?(g=v,n+=2):(g=e,u===0&&d(lr)),g!==e?(S=E(),P=pt(),k=t,t=Ir(l,P)):(n=t,t=e),u--,t===e&&(r=e,u===0&&d(ar)),t;}function ut(){let t,r;return u++,t=Yr(),u--,t===e&&(r=e,u===0&&d(Ee)),t;}function Yr(){let t,r,i,l,f,g,S,P;for(u++,t=n,r=n,i=[],l=ft();l!==e;)i.push(l),l=n,f=n,g=E(),s.substr(n,2)===H?(S=H,n+=2):(S=e,u===0&&d(cr)),S!==e?(P=E(),g=[g,S,P],f=g):(n=f,f=e),f!==e?(f=ft(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(k=t,r=Lr(r)),t=r,u--,t===e&&(r=e,u===0&&d(Ee)),t;}function ft(){let t,r,i,l,f,g,S,P;for(u++,t=n,r=n,i=[],l=Me();l!==e;)i.push(l),l=n,f=n,g=E(),s.substr(n,3)===U?(S=U,n+=3):(S=e,u===0&&d(ur)),S!==e?(P=E(),g=[g,S,P],f=g):(n=f,f=e),f!==e?(f=Me(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=r,r=e):r=i,r!==e&&(k=t,r=_r(r)),t=r,u--,t===e&&(r=e,u===0&&d(Ee)),t;}function Me(){let t,r,i,l,f,g;return u++,t=n,s.substr(n,3)===W?(r=W,n+=3):(r=e,u===0&&d(De)),r!==e?(i=E(),s.substr(n,3)===W?(l=W,n+=3):(l=e,u===0&&d(De)),l!==e?(f=E(),g=Me(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s.substr(n,3)===W?(r=W,n+=3):(r=e,u===0&&d(De)),r!==e?(i=E(),l=gt(),l!==e?(k=t,t=Pr(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=gt(),r!==e?t=r:(n=t,t=e))),u--,t===e&&(r=e,u===0&&d(Ee)),t;}function gt(){let t,r;return t=n,r=Fe(),r!==e&&(k=t,r=Dr(r)),t=r,t;}function pt(){let t,r,i,l,f,g,S,P,pe;for(t=n,r=[],i=Ue(),i===e&&(i=je());i!==e;){if(r.push(i),i=n,l=n,f=E(),s.charCodeAt(n)===44?(g=b,n++):(g=e,u===0&&d(fr)),g!==e){for(S=E(),P=[],pe=ge();pe!==e;)P.push(pe),pe=ge();pe=E(),f=[f,g,S,P,pe],l=f;}else n=l,l=e;l!==e?(l=Ue(),l===e&&(l=je()),l===e?(n=i,i=e):i=l):i=l;}return t=r,t;}function Ue(){let t,r,i,l;return u++,t=n,r=ht(),r!==e?(s.charCodeAt(n)===36?(i=$,n++):(i=e,u===0&&d(gr)),i!==e?(l=Fe(),l!==e?(k=t,t=Wr(r,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&d(Xe)),t;}function ht(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),le.test(i)?n++:(i=e,u===0&&d(et)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),le.test(i)?n++:(i=e,u===0&&d(et));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&d(Xe)),t;}function Fe(){let t,r,i,l,f;if(u++,t=n,r=n,i=s.charAt(n),ce.test(i)?n++:(i=e,u===0&&d(hr)),i!==e){for(l=[],f=s.charAt(n),ue.test(f)?n++:(f=e,u===0&&d(tt));f!==e;)l.push(f),f=s.charAt(n),ue.test(f)?n++:(f=e,u===0&&d(tt));i=[i,l],r=i;}else n=r,r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&d(pr)),t;}function je(){let t,r,i,l;return u++,t=n,r=Jr(),r!==e?(i=E(),l=mt(),l!==e?(k=t,t=Mr(r,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&d(dr)),t;}function Jr(){let t,r,i,l,f,g;return u++,t=n,s.charCodeAt(n)===91?(r=I,n++):(r=e,u===0&&d(wr)),r!==e?(i=E(),l=dt(),l!==e?(f=E(),s.charCodeAt(n)===93?(g=F,n++):(g=e,u===0&&d($r)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&d(mr)),t;}function dt(){let t,r,i;if(u++,t=n,r=[],i=s.charAt(n),w.test(i)?n++:(i=e,u===0&&d(rt)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),w.test(i)?n++:(i=e,u===0&&d(rt));else r=e;return r!==e?t=s.substring(t,n):t=r,u--,t===e&&(r=e,u===0&&d(br)),t;}function mt(){let t,r,i,l,f;for(u++,t=n,r=n,i=[],l=wt();l!==e;)i.push(l),l=n,f=E(),f=wt(),f===e?(n=l,l=e):l=f;if(r=s.substring(r,n),i=E(),l=$t(),l!==e?(k=n,f=Ur(r,l),f?f=void 0:f=e,f!==e?(k=t,t=Fr(r,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,r=n,i=[],l=ze();l!==e;)i.push(l),l=n,f=E(),f=ze(),f===e?(n=l,l=e):l=f;r=s.substring(r,n),k=t,r=jr(r),t=r;}return u--,t===e&&(r=e,u===0&&d(Sr)),t;}function wt(){let t,r,i,l,f,g;return u++,t=n,r=n,u++,i=n,l=$t(),l!==e?(f=E(),g=St(),g===e&&(g=s.charAt(n),m.test(g)?n++:(g=e,u===0&&d(yr))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?r=void 0:(n=r,r=e),r!==e?(i=ze(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(r=e,u===0&&d(Er)),t;}function ze(){let t,r,i;if(t=n,r=[],i=s.charAt(n),O.test(i)?n++:(i=e,u===0&&d(st)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),O.test(i)?n++:(i=e,u===0&&d(st));else r=e;return r!==e?t=s.substring(t,n):t=r,t;}function $t(){let t,r,i;return u++,t=n,r=bt(),r!==e?(s.substr(n,2)===oe?(i=oe,n+=2):(i=e,u===0&&d(Ar)),i!==e?(k=t,t=zr(r)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r=bt(),r!==e?(s.charCodeAt(n)===103?(i=Z,n++):(i=e,u===0&&d(Rr)),i===e&&(i=null),t=r):(n=t,t=e)),u--,t===e&&(r=e,u===0&&d(Tr)),t;}function bt(){let t,r,i,l,f,g,S;if(u++,t=n,r=[],i=s.charAt(n),C.test(i)?n++:(i=e,u===0&&d(ye)),i!==e)for(;i!==e;)r.push(i),i=s.charAt(n),C.test(i)?n++:(i=e,u===0&&d(ye));else r=e;if(r!==e){if(i=n,s.charCodeAt(n)===46?(l=ae,n++):(l=e,u===0&&d(kr)),l!==e){if(f=n,g=[],S=s.charAt(n),C.test(S)?n++:(S=e,u===0&&d(ye)),S!==e)for(;S!==e;)g.push(S),S=s.charAt(n),C.test(S)?n++:(S=e,u===0&&d(ye));else g=e;g!==e?f=s.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),k=t,t=Vr();}else n=t,t=e;return u--,t===e&&(r=e,u===0&&d(xr)),t;}function E(){let t,r;for(u++,t=[],r=s.charAt(n),A.test(r)?n++:(r=e,u===0&&d(nt));r!==e;)t.push(r),r=s.charAt(n),A.test(r)?n++:(r=e,u===0&&d(nt));return u--,t;}function St(){let t,r;return t=n,u++,s.length>n?(r=s.charAt(n),n++):(r=e,u===0&&d(vr)),u--,r===e?t=void 0:(n=t,t=e),t;}let Et=!1;he=p();let Ve=he!==e&&n===s.length;function yt(){throw he!==e&&n<s.length&&d(Kr()),at(Te,B<s.length?Br(B):null,B<s.length?de(B,B+1):de(B,B));}if(o.peg$library)return{peg$result:he,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Te,peg$maxFailPos:B,peg$success:Ve,peg$throw:Ve?void 0:yt};if(Ve)return he;yt();}var es={isTrackWeight:()=>!1},ts=new D("PARSER_CONFIG_PROVIDER"),Le=(()=>{class s{config=y(ts,{optional:!0})??es;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return V(e,this.makeOptions("Condition"));}parseQuestion(e){return V(e,this.makeOptions("Question"));}parseItem(e){return V(e,this.makeOptions("Item"));}parseEffects(e){return V(e,this.makeOptions("Effects"));}parseRule(e){return V(e,this.makeOptions("Rule"));}parseRules(e){try{return V(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Error parsing rules"),a instanceof ne){let p=a.location.start.line.toString(),h=a.location.start.column.toString();c.push(" at line ",p," column ",h),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){V(e,this.makeOptions("VariableName"));}validateQuestionString(e){V(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){V(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){V(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return V(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||s)();};static ɵprov=xe({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();var Be=(()=>{class s{parser=y(Le);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let p of c.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(h=>this.renameVariable(e,a,h));if(c instanceof Y)return c.variable===e?new Y(c.question,a):c;if(c instanceof ee)return new ee(this.renameVariable(e,a,c.condition),c.questions.map(h=>this.renameVariable(e,a,h)),c.items);if(c instanceof q)return c.variable===e?new q(a):c;if(c instanceof te)return new te(this.renameVariable(e,a,c.not));if(c instanceof re)return new re(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof se)return new se(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let p=c;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((p,h)=>Ae(X({},p),{[h]:e.model[h]}),{[we.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof ee)return this.contains(e.condition,a)||e.questions.some(h=>this.contains(h,a))||e.items.some(h=>this.contains(h,a));if(e instanceof Y)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof J)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof q)return e.variable.toLowerCase().includes(c);if(e instanceof te)return this.contains(e.not,a);if(e instanceof re)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof se)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((p,h)=>{let T;return this.parser.isTrackWeight()?T=h.weight?1:0:T=this.parser.forceParseWeight(h.name)?1:0,{items:p.items+1,weights:p.weights+T};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||s)();};static ɵprov=xe({token:s,factory:s.ɵfac,providedIn:"root"});}return s;})();function rs(s,o){return Object.entries(s).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=X(X({},e[a]),c),e),{});}var $e=new D("RESET_SIGNAL",{providedIn:"root",factory:()=>N(!1)}),_e=class s{state;triggerReset=y($e);constructor(o){this.state=o;}static builder(){return new s({});}extend(o){return new s(rs(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function It(s,o){if(typeof s!=typeof o)return!1;if(s&&o&&typeof s=="object"){let e=Object.keys(s),a=Object.keys(o);return e.length===a.length&&e.every(c=>It(s[c],o[c]));}return s===o;}function Nt(s,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[s]??o;}function ss(s,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);It(o,e)?delete c[s]:o===null?c[s]=void 0:c[s]=o,this.setItem("state",JSON.stringify(c));}function Lt(s,o,e){let a=y($e),c=N(Nt.call(s,o,e));return L(()=>{let p=c();p!==Nt.call(s,o,e)&&ss.call(s,o,p,e);},{manualCleanup:!0}),L(()=>{a()&&c.set(e);}),c;}var G=(s,o)=>Lt(localStorage,s,o),be=(s,o)=>Lt(sessionStorage,s,o);var M=G,_t=["en","de"],Pt=()=>{let s=M("categorySorting","alphabetically"),o=M("trackWeight",!1);return L(()=>{o()===!1&&s()==="weight"&&s.set("alphabetically");}),{config:{categorySorting:s,trackWeight:o,skipItems:M("skipItems",!1),fadeOutDisabledRules:M("fadeOutDisabledRules",!1),highlightVariableStatus:M("highlightVariableStatus",!1),refactorVariables:M("refactorVariables",!0),confirmRuleDeletion:M("confirmRuleDeletion",!0),rulesTemplate:M("rulesTemplate","default"),theme:M("theme","system"),fontSize:M("fontSize","normal"),accessibility:M("accessibility","accessible"),animations:M("animations",!0),language:M("language","auto"),exportReminder:M("exportReminder",!1)}};};var Dt=({config:{language:s}})=>{let o=N(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:x(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:x(()=>{let e=s();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>_t.includes(p))??"en":e;})}};};var Wt=(s,o)=>be(s,o),Mt=()=>({clipboard:{items:Wt("clipboardItems",[]),questions:Wt("clipboardQuestions",[])}});var Se=G;function ns(s){return"cat-"+s.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Ge=class extends J{original;checked;skipped;colored;constructor(o,e,a,c){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c;}},Ut=({rules:{parsed:s},config:{categorySorting:o,skipItems:e}})=>{let a=Se("answers",{}),c=Se("checkedItems",[]),p=Se("skippedItems",[]),h=Se("collapsedCategories",[]),T=Se("answersLocked",!1),v=be("statsVisible",void 0),H=be("askedWeightTracking",void 0),U=y(Be),W=x(()=>U.filterActive({rules:s.value(),model:a()})),b=x(()=>W().rules),$=x(()=>b().flatMap(w=>w.items)),I=x(()=>$().filter(w=>c().includes(w.id()))),F=w=>{c().includes(w.id())?c.update(m=>m.filter(O=>O!==w.id())):c.update(m=>[...m,w.id()]);},oe=x(()=>$().filter(w=>p().includes(w.id()))),Z=w=>{e()&&(p().includes(w.id())?p.update(m=>m.filter(O=>O!==w.id())):p.update(m=>[...m,w.id()]));},ae=w=>{h().includes(w)?h.update(m=>m.filter(O=>O!==w)):h.update(m=>[...m,w]);},z=N([]),le=w=>{(z().length!==w.length||!w.every(m=>z().includes(m)))&&z.set(w);},ce=x(()=>{function w(A){return{id:ns(A.category),name:A.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:h().includes(A.category),colored:v()==="distribution"};}let m=$().reduce((A,R)=>{A[R.category]||(A[R.category]=w(R));let K=e()&&oe().includes(R),ie=!K&&I().includes(R),Pe=v()==="heaviestItems"&&z().includes(R.id());return A[R.category].items.push(new Ge(R,ie,K,Pe)),ie&&(A[R.category].checkedItems++,A[R.category].checkedWeight+=R.weight??0),K||(A[R.category].totalItems++,A[R.category].totalWeight+=R.weight??0),A;},{}),C=x(()=>{let A=o();return A==="alphabetically"?(R,K)=>R.name.localeCompare(K.name):A==="weight"?(R,K)=>K.totalWeight-R.totalWeight:()=>0;})();return Object.entries(m).map(A=>A[1]).toSorted((A,R)=>C(A,R));}),ue=x(()=>Object.entries(ce()).reduce((w,[,m])=>(w.totalItems+=m.totalItems,w.checkedItems+=m.checkedItems,w.totalWeight+=m.totalWeight,w.checkedWeight+=m.checkedWeight,w),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return L(()=>{s.value(),T.set(!1),v.set(void 0);}),{rules:{categories:x(()=>U.extractCategories(s.value())),variables:x(()=>U.extractVariables(s.value()))},active:{rules:b,answers:x(()=>W().model),questions:x(()=>b().flatMap(w=>w.questions))},packlist:{answers:a,model:ce,stats:ue,toggleCheckedItem:F,toggleSkippedItem:Z,colorItems:le,toggleCategoryCollapse:ae,answersLocked:T,statsVisible:v,askedWeightTracking:H,reset:()=>{a.set({}),c.set([]),p.set([]),h.set([]),T.set(!1),v.set(void 0);}}};};var Ke=(s,o)=>{let e=y(Ne),a=y(Oe),c=y($e),p=N(void 0);return e.events.pipe(Re(h=>h instanceof Ce),Tt(()=>a.snapshot.queryParams[s]??o)).subscribe(h=>{h!==""&&p.set(h);}),L(()=>{let h=p()||void 0;h===o&&(h=void 0),a.snapshot.queryParams[s]!==h&&e.navigate([],{queryParams:{[s]:h},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),L(()=>{c()&&p.set(o);}),p;};var is={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},Ft=()=>{let s=y(Ne),o=y(Oe),e=Ke("rulesMode","view"),a=xt(o.fragment,{requireSync:!0}),c=ke(()=>a()??void 0);L(()=>{let T=c();T!==a()&&s.navigate([],{fragment:T,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=y(Rt),h=N(p.path());return s.events.pipe(Re(T=>T instanceof Ce)).subscribe(()=>{p.path()!==h()&&h.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Ke("filterRulesQuery",void 0),path:h.asReadonly(),fragment:c,go:T=>{is[T].call({router:s,rulesMode:e});}}};};var jt=({config:{trackWeight:s},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=y(Le),c=ve({request:()=>(s(),o.value()),loader:({request:h})=>Promise.resolve(h?a.parseRules(h):[])}),p=N([]);return L(()=>{let h=c.value();h&&(p.set(h),h.title&&e(h.title));}),{rules:{parsed:{value:p.asReadonly(),status:c.status,error:c.error},hasError:x(()=>c.status()===He.Error||o.status()===He.Error),isLoading:x(()=>c.isLoading()||o.isLoading())}};};var zt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Vt={name:"GitHub Gist",test:s=>zt.test(s),transform:s=>{let o=zt.exec(s);if(!o)return s;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var qe=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Ht=new qe();var Bt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,os={name:"Google Drive",needsCORS:!0,test:s=>Bt.test(s),transform:s=>{let o=Bt.exec(s);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:s;}},Gt=os;var as={name:"Pastebin",needsCORS:!0,test:s=>s.startsWith("https://pastebin.com/")&&!s.includes("/raw/"),transform:s=>s.replace("https://pastebin.com/","https://pastebin.com/raw/")},Kt=as;var ls=[Vt,Ht,Gt,Kt];function qt(s,o){if(s){let e=ls.find(a=>a.test(s));if(e){let a=e.transform(s);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return s;}var Qt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var Qe=new D("BACKPACKING_RULES_TEMPLATE");function ds(){return Qt;}var Ye=new D("DEFAULT_RULES_TEMPLATE");function ms(s){return s.startsWith("de")?Yt:Jt;}var Je=new D("EMPTY_RULES_TEMPLATE");function ws(s){return s.startsWith("de")?Zt:Xt;}var Ze=new D("LOGIC_RULES_TEMPLATE");function $s(){return er;}function ri(){return At([{provide:Qe,useFactory:ds,deps:[me]},{provide:Ye,useFactory:ms,deps:[me]},{provide:Je,useFactory:ws,deps:[me]},{provide:Ze,useFactory:$s,deps:[me]}]);}var tr=new D("CAPACITOR_HTTP_REQUEST_MODE");function bs(s){switch(s){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var rr=({config:{rulesTemplate:s}})=>{let o=G("rulesMode","template"),e=G("rules",void 0),a=x(()=>e()!==void 0),c=x(()=>{let m=e();if(m)return Ss(m).toString(16);}),p=G("lastExportHash",void 0),h=G("lastExportDate",void 0),T=()=>{p.set(c()),h.set(new Date().getTime());},v=N(new Date().getTime());L(()=>{e(),v.set(new Date().getTime());});let H=y(Ye),U=y(Je),W=y(Ze),b=y(Qe),$=x(()=>{switch(s()){case"empty":return U;case"logic":return W;case"backpacking":return b;default:return H;}}),I=G("remoteHistory",[]),F=G("remoteHistoryTitle",{}),oe=function(m){I.update(O=>O.filter(C=>C!==m)),F.update(O=>{let C=X({},O);return delete C[m],C;});},Z=ke(()=>o()==="remote"?I()[0]:void 0),ae=y(tr,{optional:!0})??"cors",z=ve({request:()=>({mode:o(),rawLocal:e(),remote:Z(),template:$()}),loader:({request:m})=>{switch(m.mode){case"local":return Promise.resolve(m.rawLocal);case"template":return Promise.resolve(m.template);case"remote":if(m.remote){if(!m.remote.startsWith("http"))throw new Error("Invalid URL");let O=qt(m.remote,ae==="cors");return kt.get({url:O,webFetchExtra:{mode:ae}}).then(C=>{if(C.status>=200&&C.status<300)return I.update(A=>[m.remote,...A.filter(R=>R!==m.remote)]),C.data;{let A=[["HTTP Error",C.status.toString()].join(" "),bs(C.status)].join(": ");throw new Error(A);}});}else return Promise.resolve(void 0);}}}),le=function(m){Z()!==m&&(o.set("remote"),Z.set(m));},ce=function(m){let O=Z();o()==="remote"&&O&&F.update(C=>Ae(X({},C),{[O]:m}));},ue=function(m){o.set("local"),e.set(m);},w=function(){e.set(z.value()),o.set("local"),T();};return{rules:{mode:o,raw:z.asReadonly(),lastAction:v.asReadonly(),hash:c,exportNeeded:x(()=>o()==="local"&&c()!==p()),markAsCurrent:T,localRulesAvailable:a},export:{lastDate:h.asReadonly()},localRules:{updateRules:ue,copyFromCurrent:w},remoteRules:{load:le,setCurrentTitle:ce,history:x(()=>I().map(m=>({url:m,title:F()[m]}))),removeFromHistory:oe}};},Ss=function(s,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,p;c<s.length;c++)p=s.charCodeAt(c),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var sr=()=>({serviceWorker:{status:N("init")}});function Es(){return _e.builder().extend(Ft).extend(Mt).extend(sr).extend(Pt).extend(Dt).extend(rr).extend(jt).extend(Ut);}var nr=new D("STATE_BUILDER",{providedIn:"root",factory:()=>Es()}),ys=new D("GLOBAL_STATE",{providedIn:"root",factory:()=>y(nr).build()}),Ts=new D("RESET_SWITCH",{providedIn:"root",factory:()=>{let s=y(nr);return async()=>{await s.reset();};}});export{vs as a,Ie as b,Cs as c,ee as d,Y as e,J as f,q as g,Is as h,we as i,te as j,re as k,se as l,ne as m,ts as n,Le as o,Be as p,ri as q,tr as r,ys as s,Ts as t};/**i18n:28a3168b76bee7dffc4b1e816012f24aa421b4da90b9b896cc67ce89fdf6fb94*/