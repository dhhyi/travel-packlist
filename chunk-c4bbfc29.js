import{d as kt}from"./chunk-0cdf4dca.js";import{b as At,k as Rt,l as xe,m as Ce,o as Ne}from"./chunk-55ade91b.js";import{$ as P,B as Ae,Y as Re,ba as v,ca as vt,pa as C,r as yt,uc as me,wc as R,xc as I,yc as ke,zc as Tt}from"./chunk-f397f3d0.js";import{a as X,b as Te}from"./chunk-ecf0d82d.js";function xr(r){let o=r.title?.trim();return(o?`# ${o}

`:"")+r.map(a=>a.toString()).map(a=>a+";").join(`

`);}function Oe(r,o,e=-1){if(!r)return"0g";let a=(e<0?r/1e3:(r/1e3).toFixed(e)).toString()+"kg",c=r.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Cr(r,o){return Oe(r,void 0,1)+" / "+Oe(o,void 0,1);}var ee=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof we)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},Y=class{question;variable;static NEW_QUESTION_NAME="New Question";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function xt(r){return r?r.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var J=class{category;name;weight;static NEW_ITEM_NAME="New Item";static NEW_CATEGORY_NAME="New";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${xt(this.category)}-${xt(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+Oe(this.weight)),o;}},K=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Ir=(()=>{class r extends K{static string="please_select";constructor(){super(r.string);}}return r;})(),we=(()=>{class r extends K{static string="always";constructor(){super(r.string);}evaluate(){return!0;}}return r;})(),te=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},se=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},re=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Zs(r,o){let e=o.filter(c=>c instanceof Y),a=o.filter(c=>c instanceof J);return new ee(r??new we(),e,a);}function Ct(r){return r.length===1?r[0]:new se(r[0],Ct(r.slice(1)));}function Nt(r){return r.length===1?r[0]:new re(r[0],Nt(r.slice(1)));}var ne=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(N=>N.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let p=this.location.start,h=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,A=this.location.source+":"+h.line+":"+h.column;if(a){let N=this.location.end,B="".padEnd(h.line.toString().length," "),U=a[p.line-1],$=(p.line===N.line?N.column:U.length+1)-p.column||1;e+=`
 --> `+A+`
`+B+` |
`+h.line+" | "+U+`
`+B+" | "+"".padEnd(p.column-1," ")+"".padEnd($,"^");}else e+=`
 at `+A;}return e;}static buildMessage(o,e){function a($){return $.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p($){return c?$.replace(c,w=>"\\u{"+a(w)+"}"):$;}function h($){return p($.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}function A($){return p($.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}let N={literal($){return'"'+h($.text)+'"';},class($){let w=$.parts.map(O=>Array.isArray(O)?A(O[0])+"-"+A(O[1]):A(O));return"["+($.inverted?"^":"")+w.join("")+"]"+($.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other($){return $.description;}};function B($){return N[$.type]($);}function U($){let w=$.map(B);if(w.sort(),w.length>0){let O=1;for(let F=1;F<w.length;F++)w[F-1]!==w[F]&&(w[O]=w[F],O++);w.length=O;}switch(w.length){case 1:return w[0];case 2:return w[0]+" or "+w[1];default:return w.slice(0,-1).join(", ")+", or "+w[w.length-1];}}function W($){return $?'"'+h($)+'"':"end of input";}return"Expected "+U(o)+" but "+W(e)+" found.";}};function H(r,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:at,Rule:Pe,Condition:ct,Effects:gt,Question:Me,Item:Fe,VariableName:Ue,QuestionString:pt,ItemNameAndWeight:ht,CategoryName:dt},p=at,h="#",A=";",N=":-",B="OR",U="AND",W="NOT",$=",",w="$",O="[",F="]",oe="kg",Z="g",ae=".",j=/^[^\n\r]/,le=/^[^$,;#]/,ce=/^[a-zA-Z]/,ue=/^[a-zA-Z0-9\-[\](){}_]/,m=/^[^\],;#[]/,k=/^[,;]/,S=/^[^ ,;#]/,L=/^[0-9]/,b=/^[ \t\n\r]/,T=D("title"),z=V("#",!1),ie=Q([`
`,"\r"],!0,!1,!1),De=D("comment"),is=D("rule end"),os=V(";",!1),as=D("rule"),ls=V(":-",!1),Ee=D("condition"),cs=V("OR",!1),us=V("AND",!1),_e=V("NOT",!1),fs=V(",",!1),Ze=D("question"),gs=V("$",!1),Xe=Q(["$",",",";","#"],!0,!1,!1),ps=D("variable name"),ds=Q([["a","z"],["A","Z"]],!1,!1,!1),et=Q([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),hs=D("item"),ms=D("category"),ws=V("[",!1),bs=V("]",!1),$s=D("category name"),tt=Q(["]",",",";","#","["],!0,!1,!1),Ss=D("item name"),Es=D("word"),ys=Q([",",";"],!1,!1,!1),st=Q([" ",",",";","#"],!0,!1,!1),vs=D("weight"),Ts=V("kg",!1),As=V("g",!1),Rs=D("number"),ye=Q([["0","9"]],!1,!1,!1),ks=V(".",!1),rt=Q([" ","	",`
`,"\r"],!1,!1,!1),xs=qs();function Cs(t,s){return s.title=t?.trim(),s.rulesContainComments=St,s;}function Ns(t){if(t.trim().length)return t.trim();}function Os(t){if(t.trim().length)return St=!0,t.trim();}function Is(t,s){return Zs(t,s);}function Ls(t){return Nt(t);}function Ds(t){return Ct(t);}function _s(t){return new te(t);}function Ps(t){return new K(t);}function Ws(t,s){return new Y(t.trim(),s.trim());}function Ms(t,s){let{name:i,weight:l}=s;return new J(t.trim(),i,l);}function Us(t,s){return o.trackWeight;}function Fs(t,s){let i=t.trim();return i.length||nt("item name"),{name:i,weight:s};}function js(t){let s=t.trim();return s.length||nt("item name"),{name:s,weight:void 0};}function Vs(t){return t*1e3;}function zs(){return parseFloat(Hs());}let n=o.peg$currPos|0,x=n,fe=[{line:1,column:1}],q=n,ve=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,de;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=c[o.startRule];}function Hs(){return r.substring(x,n);}function Tr(){return x;}function Ar(){return{source:a,start:x,end:n};}function Rr(){return he(x,n);}function nt(t,s){throw s=s!==void 0?s:he(x,n),ot([D(t)],r.substring(x,n),s);}function kr(t,s){throw s=s!==void 0?s:he(x,n),Ks(t,s);}function Bs(t=n){let s=r.codePointAt(t);return s===void 0?"":String.fromCodePoint(s);}function V(t,s){return{type:"literal",text:t,ignoreCase:s};}function Q(t,s,i,l){return{type:"class",parts:t,inverted:s,ignoreCase:i,unicode:l};}function qs(){return{type:"any"};}function Gs(){return{type:"end"};}function D(t){return{type:"other",description:t};}function it(t){let s=fe[t],i;if(s)return s;if(t>=fe.length)i=fe.length-1;else for(i=t;!fe[--i];);for(s=fe[i],s={line:s.line,column:s.column};i<t;)r.charCodeAt(i)===10?(s.line++,s.column=1):s.column++,i++;return fe[t]=s,s;}function he(t,s,i){let l=it(t),f=it(s),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:s,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function d(t){n<q||(n>q&&(q=n,ve=[]),ve.push(t));}function Ks(t,s){return new ne(t,null,null,s);}function ot(t,s,i){return new ne(ne.buildMessage(t,s),t,s,i);}function at(){let t,s,i,l,f,g,E,_;for(t=n,s=y(),i=Qs(),i===e&&(i=null),l=y(),f=[],g=Pe();g!==e;)f.push(g),g=n,E=lt(),E!==e?(E=Pe(),E===e?(n=g,g=e):g=E):g=E;return g=lt(),g===e&&(g=null),E=y(),_=$t(),_!==e?(x=t,t=Cs(i,f)):(n=t,t=e),t;}function Qs(){let t,s,i,l,f,g;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&d(z)),s!==e){if(i=y(),l=n,f=[],g=r.charAt(n),j.test(g)?n++:(g=e,u===0&&d(ie)),g!==e)for(;g!==e;)f.push(g),g=r.charAt(n),j.test(g)?n++:(g=e,u===0&&d(ie));else f=e;f!==e?l=r.substring(l,n):l=f,l!==e?(f=y(),x=t,t=Ns(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(T)),t;}function ge(){let t,s,i,l,f;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&d(z)),s!==e){if(i=n,l=[],f=r.charAt(n),j.test(f)?n++:(f=e,u===0&&d(ie)),f!==e)for(;f!==e;)l.push(f),f=r.charAt(n),j.test(f)?n++:(f=e,u===0&&d(ie));else l=e;l!==e?i=r.substring(i,n):i=l,i!==e?(l=y(),x=t,t=Os(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(De)),t;}function lt(){let t,s,i,l,f,g;if(u++,t=n,s=y(),r.charCodeAt(n)===59?(i=A,n++):(i=e,u===0&&d(os)),i!==e){for(l=y(),f=[],g=ge();g!==e;)f.push(g),g=ge();g=y(),s=[s,i,l,f,g],t=s;}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(is)),t;}function Pe(){let t,s,i,l,f,g,E,_;for(u++,t=n,s=[],i=ge();i!==e;)s.push(i),i=ge();return i=y(),l=ct(),l===e&&(l=null),f=y(),r.substr(n,2)===N?(g=N,n+=2):(g=e,u===0&&d(ls)),g!==e?(E=y(),_=gt(),x=t,t=Is(l,_)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(as)),t;}function ct(){let t,s;return u++,t=Ys(),u--,t===e&&(s=e,u===0&&d(Ee)),t;}function Ys(){let t,s,i,l,f,g,E,_;for(u++,t=n,s=n,i=[],l=ut();l!==e;)i.push(l),l=n,f=n,g=y(),r.substr(n,2)===B?(E=B,n+=2):(E=e,u===0&&d(cs)),E!==e?(_=y(),g=[g,E,_],f=g):(n=f,f=e),f!==e?(f=ut(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(x=t,s=Ls(s)),t=s,u--,t===e&&(s=e,u===0&&d(Ee)),t;}function ut(){let t,s,i,l,f,g,E,_;for(u++,t=n,s=n,i=[],l=We();l!==e;)i.push(l),l=n,f=n,g=y(),r.substr(n,3)===U?(E=U,n+=3):(E=e,u===0&&d(us)),E!==e?(_=y(),g=[g,E,_],f=g):(n=f,f=e),f!==e?(f=We(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(x=t,s=Ds(s)),t=s,u--,t===e&&(s=e,u===0&&d(Ee)),t;}function We(){let t,s,i,l,f,g;return u++,t=n,r.substr(n,3)===W?(s=W,n+=3):(s=e,u===0&&d(_e)),s!==e?(i=y(),r.substr(n,3)===W?(l=W,n+=3):(l=e,u===0&&d(_e)),l!==e?(f=y(),g=We(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r.substr(n,3)===W?(s=W,n+=3):(s=e,u===0&&d(_e)),s!==e?(i=y(),l=ft(),l!==e?(x=t,t=_s(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=ft(),s!==e?t=s:(n=t,t=e))),u--,t===e&&(s=e,u===0&&d(Ee)),t;}function ft(){let t,s;return t=n,s=Ue(),s!==e&&(x=t,s=Ps(s)),t=s,t;}function gt(){let t,s,i,l,f,g,E,_,pe;for(t=n,s=[],i=Me(),i===e&&(i=Fe());i!==e;){if(s.push(i),i=n,l=n,f=y(),r.charCodeAt(n)===44?(g=$,n++):(g=e,u===0&&d(fs)),g!==e){for(E=y(),_=[],pe=ge();pe!==e;)_.push(pe),pe=ge();pe=y(),f=[f,g,E,_,pe],l=f;}else n=l,l=e;l!==e?(l=Me(),l===e&&(l=Fe()),l===e?(n=i,i=e):i=l):i=l;}return t=s,t;}function Me(){let t,s,i,l;return u++,t=n,s=pt(),s!==e?(r.charCodeAt(n)===36?(i=w,n++):(i=e,u===0&&d(gs)),i!==e?(l=Ue(),l!==e?(x=t,t=Ws(s,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(Ze)),t;}function pt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),le.test(i)?n++:(i=e,u===0&&d(Xe)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),le.test(i)?n++:(i=e,u===0&&d(Xe));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d(Ze)),t;}function Ue(){let t,s,i,l,f;if(u++,t=n,s=n,i=r.charAt(n),ce.test(i)?n++:(i=e,u===0&&d(ds)),i!==e){for(l=[],f=r.charAt(n),ue.test(f)?n++:(f=e,u===0&&d(et));f!==e;)l.push(f),f=r.charAt(n),ue.test(f)?n++:(f=e,u===0&&d(et));i=[i,l],s=i;}else n=s,s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d(ps)),t;}function Fe(){let t,s,i,l;return u++,t=n,s=Js(),s!==e?(i=y(),l=ht(),l!==e?(x=t,t=Ms(s,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(hs)),t;}function Js(){let t,s,i,l,f,g;return u++,t=n,r.charCodeAt(n)===91?(s=O,n++):(s=e,u===0&&d(ws)),s!==e?(i=y(),l=dt(),l!==e?(f=y(),r.charCodeAt(n)===93?(g=F,n++):(g=e,u===0&&d(bs)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(ms)),t;}function dt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),m.test(i)?n++:(i=e,u===0&&d(tt)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),m.test(i)?n++:(i=e,u===0&&d(tt));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d($s)),t;}function ht(){let t,s,i,l,f;for(u++,t=n,s=n,i=[],l=mt();l!==e;)i.push(l),l=n,f=y(),f=mt(),f===e?(n=l,l=e):l=f;if(s=r.substring(s,n),i=y(),l=wt(),l!==e?(x=n,f=Us(s,l),f?f=void 0:f=e,f!==e?(x=t,t=Fs(s,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,s=n,i=[],l=je();l!==e;)i.push(l),l=n,f=y(),f=je(),f===e?(n=l,l=e):l=f;s=r.substring(s,n),x=t,s=js(s),t=s;}return u--,t===e&&(s=e,u===0&&d(Ss)),t;}function mt(){let t,s,i,l,f,g;return u++,t=n,s=n,u++,i=n,l=wt(),l!==e?(f=y(),g=$t(),g===e&&(g=r.charAt(n),k.test(g)?n++:(g=e,u===0&&d(ys))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?s=void 0:(n=s,s=e),s!==e?(i=je(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(Es)),t;}function je(){let t,s,i;if(t=n,s=[],i=r.charAt(n),S.test(i)?n++:(i=e,u===0&&d(st)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),S.test(i)?n++:(i=e,u===0&&d(st));else s=e;return s!==e?t=r.substring(t,n):t=s,t;}function wt(){let t,s,i;return u++,t=n,s=bt(),s!==e?(r.substr(n,2)===oe?(i=oe,n+=2):(i=e,u===0&&d(Ts)),i!==e?(x=t,t=Vs(s)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=bt(),s!==e?(r.charCodeAt(n)===103?(i=Z,n++):(i=e,u===0&&d(As)),i===e&&(i=null),t=s):(n=t,t=e)),u--,t===e&&(s=e,u===0&&d(vs)),t;}function bt(){let t,s,i,l,f,g,E;if(u++,t=n,s=[],i=r.charAt(n),L.test(i)?n++:(i=e,u===0&&d(ye)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),L.test(i)?n++:(i=e,u===0&&d(ye));else s=e;if(s!==e){if(i=n,r.charCodeAt(n)===46?(l=ae,n++):(l=e,u===0&&d(ks)),l!==e){if(f=n,g=[],E=r.charAt(n),L.test(E)?n++:(E=e,u===0&&d(ye)),E!==e)for(;E!==e;)g.push(E),E=r.charAt(n),L.test(E)?n++:(E=e,u===0&&d(ye));else g=e;g!==e?f=r.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),x=t,t=zs();}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(Rs)),t;}function y(){let t,s;for(u++,t=[],s=r.charAt(n),b.test(s)?n++:(s=e,u===0&&d(rt));s!==e;)t.push(s),s=r.charAt(n),b.test(s)?n++:(s=e,u===0&&d(rt));return u--,t;}function $t(){let t,s;return t=n,u++,r.length>n?(s=r.charAt(n),n++):(s=e,u===0&&d(xs)),u--,s===e?t=void 0:(n=t,t=e),t;}let St=!1;de=p();let Ve=de!==e&&n===r.length;function Et(){throw de!==e&&n<r.length&&d(Gs()),ot(ve,q<r.length?Bs(q):null,q<r.length?he(q,q+1):he(q,q));}if(o.peg$library)return{peg$result:de,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:ve,peg$maxFailPos:q,peg$success:Ve,peg$throw:Ve?void 0:Et};if(Ve)return de;Et();}var er={isTrackWeight:()=>!1},tr=new P("PARSER_CONFIG_PROVIDER"),Ie=(()=>{class r{config=v(tr,{optional:!0})??er;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return H(e,this.makeOptions("Condition"));}parseQuestion(e){return H(e,this.makeOptions("Question"));}parseItem(e){return H(e,this.makeOptions("Item"));}parseEffects(e){return H(e,this.makeOptions("Effects"));}parseRule(e){return H(e,this.makeOptions("Rule"));}parseRules(e){try{return H(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Error parsing rules"),a instanceof ne){let p=a.location.start.line.toString(),h=a.location.start.column.toString();c.push(" at line ",p," column ",h),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){H(e,this.makeOptions("VariableName"));}validateQuestionString(e){H(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){H(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){H(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return H(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||r)();};static ɵprov=Re({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();var ze=(()=>{class r{parser=v(Ie);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let p of c.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(h=>this.renameVariable(e,a,h));if(c instanceof Y)return c.variable===e?new Y(c.question,a):c;if(c instanceof ee)return new ee(this.renameVariable(e,a,c.condition),c.questions.map(h=>this.renameVariable(e,a,h)),c.items);if(c instanceof K)return c.variable===e?new K(a):c;if(c instanceof te)return new te(this.renameVariable(e,a,c.not));if(c instanceof se)return new se(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof re)return new re(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let p=c;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((p,h)=>Te(X({},p),{[h]:e.model[h]}),{[we.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof ee)return this.contains(e.condition,a)||e.questions.some(h=>this.contains(h,a))||e.items.some(h=>this.contains(h,a));if(e instanceof Y)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof J)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof K)return e.variable.toLowerCase().includes(c);if(e instanceof te)return this.contains(e.not,a);if(e instanceof se)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof re)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((p,h)=>{let A;return this.parser.isTrackWeight()?A=h.weight?1:0:A=this.parser.forceParseWeight(h.name)?1:0,{items:p.items+1,weights:p.weights+A};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||r)();};static ɵprov=Re({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();function sr(r,o){return Object.entries(r).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=X(X({},e[a]),c),e),{});}var be=new P("RESET_SIGNAL",{providedIn:"root",factory:()=>C(!1)}),Le=class r{state;triggerReset=v(be);constructor(o){this.state=o;}static builder(){return new r({});}extend(o){return new r(sr(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function It(r,o){if(typeof r!=typeof o)return!1;if(r&&o&&typeof r=="object"){let e=Object.keys(r),a=Object.keys(o);return e.length===a.length&&e.every(c=>It(r[c],o[c]));}return r===o;}function Ot(r,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[r]??o;}function rr(r,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);It(o,e)?delete c[r]:o===null?c[r]=void 0:c[r]=o,this.setItem("state",JSON.stringify(c));}function Lt(r,o,e){let a=v(be),c=C(Ot.call(r,o,e));return I(()=>{let p=c();p!==Ot.call(r,o,e)&&rr.call(r,o,p,e);},{manualCleanup:!0}),I(()=>{a()&&c.set(e);}),c;}var G=(r,o)=>Lt(localStorage,r,o),$e=(r,o)=>Lt(sessionStorage,r,o);var M=G,Dt=["en","de"],_t=()=>{let r=M("categorySorting","alphabetically"),o=M("trackWeight",!1);return I(()=>{o()===!1&&r()==="weight"&&r.set("alphabetically");}),{config:{categorySorting:r,trackWeight:o,skipItems:M("skipItems",!1),fadeOutDisabledRules:M("fadeOutDisabledRules",!1),highlightVariableStatus:M("highlightVariableStatus",!1),refactorVariables:M("refactorVariables",!0),confirmRuleDeletion:M("confirmRuleDeletion",!0),rulesTemplate:M("rulesTemplate","default"),theme:M("theme","system"),fontSize:M("fontSize","normal"),accessibility:M("accessibility","accessible"),animations:M("animations",!0),language:M("language","auto"),exportReminder:M("exportReminder",!1)}};};var Pt=({config:{language:r}})=>{let o=C(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:R(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:R(()=>{let e=r();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>Dt.includes(p))??"en":e;})}};};var Wt=(r,o)=>$e(r,o),Mt=()=>({clipboard:{items:Wt("clipboardItems",[]),questions:Wt("clipboardQuestions",[])}});var Se=G;function nr(r){return"cat-"+r.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var He=class extends J{original;checked;skipped;colored;constructor(o,e,a,c){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c;}},Ut=({rules:{parsed:r},config:{categorySorting:o,skipItems:e}})=>{let a=Se("answers",{}),c=Se("checkedItems",[]),p=Se("skippedItems",[]),h=Se("collapsedCategories",[]),A=Se("answersLocked",!1),N=$e("statsVisible",void 0),B=$e("askedWeightTracking",void 0),U=v(ze),W=R(()=>U.filterActive({rules:r.value(),model:a()})),$=R(()=>W().rules),w=R(()=>$().flatMap(m=>m.items)),O=R(()=>w().filter(m=>c().includes(m.id()))),F=m=>{c().includes(m.id())?c.update(k=>k.filter(S=>S!==m.id())):c.update(k=>[...k,m.id()]);},oe=R(()=>w().filter(m=>p().includes(m.id()))),Z=m=>{e()&&(p().includes(m.id())?p.update(k=>k.filter(S=>S!==m.id())):p.update(k=>[...k,m.id()]));},ae=m=>{h().includes(m)?h.update(k=>k.filter(S=>S!==m)):h.update(k=>[...k,m]);},j=C([]),le=m=>{(j().length!==m.length||!m.every(k=>j().includes(k)))&&j.set(m);},ce=R(()=>{function m(b){return{id:nr(b.category),name:b.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:h().includes(b.category),colored:N()==="distribution"};}let k=w().reduce((b,T)=>{b[T.category]||(b[T.category]=m(T));let z=e()&&oe().includes(T),ie=!z&&O().includes(T),De=N()==="heaviestItems"&&j().includes(T.id());return b[T.category].items.push(new He(T,ie,z,De)),ie&&(b[T.category].checkedItems++,b[T.category].checkedWeight+=T.weight??0),z||(b[T.category].totalItems++,b[T.category].totalWeight+=T.weight??0),b;},{}),L=R(()=>{let b=o();return b==="alphabetically"?(T,z)=>T.name.localeCompare(z.name):b==="weight"?(T,z)=>z.totalWeight-T.totalWeight:()=>0;})();return Object.entries(k).map(b=>b[1]).toSorted((b,T)=>L(b,T));}),ue=R(()=>Object.entries(ce()).reduce((m,[,k])=>(m.totalItems+=k.totalItems,m.checkedItems+=k.checkedItems,m.totalWeight+=k.totalWeight,m.checkedWeight+=k.checkedWeight,m),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return I(()=>{r.value(),A.set(!1),N.set(void 0);}),{rules:{categories:R(()=>U.extractCategories(r.value())),variables:R(()=>U.extractVariables(r.value()))},active:{rules:$,answers:R(()=>W().model),questions:R(()=>$().flatMap(m=>m.questions))},packlist:{answers:a,model:ce,stats:ue,toggleCheckedItem:F,toggleSkippedItem:Z,colorItems:le,toggleCategoryCollapse:ae,answersLocked:A,statsVisible:N,askedWeightTracking:B,reset:()=>{a.set({}),c.set([]),p.set([]),h.set([]),A.set(!1),N.set(void 0);}}};};var Be=(r,o)=>{let e=v(Ne),a=v(Ce),c=v(be),p=C(void 0);return e.events.pipe(Ae(h=>h instanceof xe),yt(()=>a.snapshot.queryParams[r]??o)).subscribe(h=>{h!==""&&p.set(h);}),I(()=>{let h=p()||void 0;h===o&&(h=void 0),a.snapshot.queryParams[r]!==h&&e.navigate([],{queryParams:{[r]:h},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),I(()=>{c()&&p.set(o);}),p;};var ir={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},Ft=()=>{let r=v(Ne),o=v(Ce),e=Be("rulesMode","view"),a=Rt(o.fragment,{requireSync:!0}),c=ke(()=>a()??void 0);I(()=>{let A=c();A!==a()&&r.navigate([],{fragment:A,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=v(At),h=C(p.path());return r.events.pipe(Ae(A=>A instanceof xe)).subscribe(()=>{p.path()!==h()&&h.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Be("filterRulesQuery",void 0),path:h.asReadonly(),fragment:c,go:A=>{ir[A].call({router:r,rulesMode:e});}}};};var qe=class{parser;raw;trackWeight;setCurrentTitle;value=C([]);error=C(void 0);status=C("idle");constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,I(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let p=this.parser.parseRules(this.raw.value());p.title&&this.setCurrentTitle(p.title),this.value.set(p),this.error.set(void 0),this.status.set("resolved");}catch(p){this.error.set(p),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},jt=({config:{trackWeight:r},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new qe(v(Ie),o,r,e);return{rules:{parsed:a.asReadonly(),hasError:R(()=>a.status()==="error"||o.status()==="error"),isLoading:R(()=>a.isLoading()||o.isLoading())}};};var Vt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,zt={name:"GitHub Gist",test:r=>Vt.test(r),transform:r=>{let o=Vt.exec(r);if(!o)return r;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var Ge=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Ht=new Ge();var Bt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,or={name:"Google Drive",needsCORS:!0,test:r=>Bt.test(r),transform:r=>{let o=Bt.exec(r);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:r;}},qt=or;var ar={name:"Pastebin",needsCORS:!0,test:r=>r.startsWith("https://pastebin.com/")&&!r.includes("/raw/"),transform:r=>r.replace("https://pastebin.com/","https://pastebin.com/raw/")},Gt=ar;var lr=[zt,Ht,qt,Gt];function Kt(r,o){if(r){let e=lr.find(a=>a.test(r));if(e){let a=e.transform(r);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return r;}var Qt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var es=`# Example Logic Demonstration

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
`;var Ke=new P("BACKPACKING_RULES_TEMPLATE");function hr(){return Qt;}var Qe=new P("DEFAULT_RULES_TEMPLATE");function mr(r){return r.startsWith("de")?Yt:Jt;}var Ye=new P("EMPTY_RULES_TEMPLATE");function wr(r){return r.startsWith("de")?Zt:Xt;}var Je=new P("LOGIC_RULES_TEMPLATE");function br(){return es;}function si(){return vt([{provide:Ke,useFactory:hr,deps:[me]},{provide:Qe,useFactory:mr,deps:[me]},{provide:Ye,useFactory:wr,deps:[me]},{provide:Je,useFactory:br,deps:[me]}]);}var ts=new P("CAPACITOR_HTTP_REQUEST_MODE");function $r(r){switch(r){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var ss=({config:{rulesTemplate:r}})=>{let o=G("rulesMode","template"),e=G("rules",void 0),a=R(()=>e()!==void 0),c=R(()=>{let S=e();if(S)return Sr(S).toString(16);}),p=G("lastExportHash",void 0),h=G("lastExportDate",void 0),A=()=>{p.set(c()),h.set(new Date().getTime());},N=C(new Date().getTime());I(()=>{e(),N.set(new Date().getTime());});let B=v(Qe),U=v(Ye),W=v(Je),$=v(Ke),w=R(()=>{switch(r()){case"empty":return U;case"logic":return W;case"backpacking":return $;default:return B;}}),O=G("remoteHistory",[]),F=G("remoteHistoryTitle",{}),oe=function(S){O.update(L=>L.filter(b=>b!==S)),F.update(L=>{let b=X({},L);return delete b[S],b;});},Z=ke(()=>o()==="remote"?O()[0]:void 0),ae=v(ts,{optional:!0})??"cors",j=Tt({params:()=>({mode:o(),rawLocal:e(),remote:Z(),template:w()}),loader:({params:S})=>{switch(S.mode){case"local":return Promise.resolve(S.rawLocal);case"template":return Promise.resolve(S.template);case"remote":if(S.remote){if(!S.remote.startsWith("http"))throw new Error("Invalid URL");let L=Kt(S.remote,ae==="cors");return kt.get({url:L,webFetchExtra:{mode:ae}}).then(b=>{if(b.status>=200&&b.status<300)return O.update(T=>[S.remote,...T.filter(z=>z!==S.remote)]),b.data;{let T=[["HTTP Error",b.status.toString()].join(" "),$r(b.status)].join(": ");throw new Error(T);}});}else return Promise.resolve(void 0);}}}),le=function(S){Z()!==S&&(o.set("remote"),Z.set(S));},ce=function(S){let L=Z();o()==="remote"&&L&&F.update(b=>Te(X({},b),{[L]:S}));},ue=function(S){o.set("local"),e.set(S);},m=function(){e.set(j.value()),o.set("local"),A();},k=function(){j.reload();};return{rules:{mode:o,raw:j.asReadonly(),reload:k,lastAction:N.asReadonly(),hash:c,exportNeeded:R(()=>o()==="local"&&c()!==p()),markAsCurrent:A,localRulesAvailable:a},export:{lastDate:h.asReadonly()},localRules:{updateRules:ue,copyFromCurrent:m},remoteRules:{load:le,setCurrentTitle:ce,history:R(()=>O().map(S=>({url:S,title:F()[S]}))),removeFromHistory:oe}};},Sr=function(r,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,p;c<r.length;c++)p=r.charCodeAt(c),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var rs=()=>({serviceWorker:{status:C("init")}});function Er(){return Le.builder().extend(Ft).extend(Mt).extend(rs).extend(_t).extend(Pt).extend(ss).extend(jt).extend(Ut);}var ns=new P("STATE_BUILDER",{providedIn:"root",factory:()=>Er()}),yr=new P("GLOBAL_STATE",{providedIn:"root",factory:()=>v(ns).build()}),vr=new P("RESET_SWITCH",{providedIn:"root",factory:()=>{let r=v(ns);return async()=>{await r.reset();};}});export{xr as a,Oe as b,Cr as c,ee as d,Y as e,J as f,K as g,Ir as h,we as i,te as j,se as k,re as l,ne as m,tr as n,Ie as o,ze as p,si as q,ts as r,yr as s,vr as t};/**i18n:28a3168b76bee7dffc4b1e816012f24aa421b4da90b9b896cc67ce89fdf6fb94*/