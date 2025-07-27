import{d as Ot}from"./chunk-8eec2dd9.js";import{b as Ct,k as Nt,l as Oe,m as Ie,o as Le}from"./chunk-3c4ff19e.js";import{$ as P,B as xe,Y as Ce,ba as v,ca as kt,pa as C,r as Rt,uc as Se,wc as A,xc as I,yc as Ne,zc as xt}from"./chunk-b1391333.js";import{a as ee,b as ke}from"./chunk-788b26f0.js";function xr(r){let o=r.title?.trim();return(o?`# ${o}

`:"")+r.map(a=>a.toString()).map(a=>a+";").join(`

`);}function De(r,o,e=-1){if(!r)return"0g";let a=(e<0?r/1e3:(r/1e3).toFixed(e)).toString()+"kg",c=r.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Cr(r,o){return De(r,void 0,1)+" / "+De(o,void 0,1);}var te=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof Ee)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},Y=class{question;variable;static NEW_QUESTION_NAME="New Question";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function It(r){return r?r.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var J=class{category;name;weight;static NEW_ITEM_NAME="New Item";static NEW_CATEGORY_NAME="New";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${It(this.category)}-${It(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+De(this.weight)),o;}},K=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Ir=(()=>{class r extends K{static string="please_select";constructor(){super(r.string);}}return r;})(),Ee=(()=>{class r extends K{static string="always";constructor(){super(r.string);}evaluate(){return!0;}}return r;})(),se=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},re=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},ne=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Zs(r,o){let e=o.filter(c=>c instanceof Y),a=o.filter(c=>c instanceof J);return new te(r??new Ee(),e,a);}function Lt(r){return r.length===1?r[0]:new re(r[0],Lt(r.slice(1)));}function Dt(r){return r.length===1?r[0]:new ne(r[0],Dt(r.slice(1)));}var ie=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(O=>O.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let p=this.location.start,h=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,T=this.location.source+":"+h.line+":"+h.column;if(a){let O=this.location.end,U="".padEnd(h.line.toString().length," "),W=a[p.line-1],w=(p.line===O.line?O.column:W.length+1)-p.column||1;e+=`
 --> `+T+`
`+U+` |
`+h.line+" | "+W+`
`+U+" | "+"".padEnd(p.column-1," ")+"".padEnd(w,"^");}else e+=`
 at `+T;}return e;}static buildMessage(o,e){function a(w){return w.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p(w){return c?w.replace(c,$=>"\\u{"+a($)+"}"):w;}function h(w){return p(w.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}function T(w){return p(w.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,$=>"\\x0"+a($)).replace(/[\x10-\x1F\x7F-\x9F]/g,$=>"\\x"+a($)));}let O={literal(w){return'"'+h(w.text)+'"';},class(w){let $=w.parts.map(N=>Array.isArray(N)?T(N[0])+"-"+T(N[1]):T(N));return"["+(w.inverted?"^":"")+$.join("")+"]"+(w.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(w){return w.description;}};function U(w){return O[w.type](w);}function W(w){let $=w.map(U);if($.sort(),$.length>0){let N=1;for(let L=1;L<$.length;L++)$[L-1]!==$[L]&&($[N]=$[L],N++);$.length=N;}switch($.length){case 1:return $[0];case 2:return $[0]+" or "+$[1];default:return $.slice(0,-1).join(", ")+", or "+$[$.length-1];}}function F(w){return w?'"'+h(w)+'"':"end of input";}return"Expected "+W(o)+" but "+F(e)+" found.";}};function z(r,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:ft,Rule:Fe,Condition:pt,Effects:mt,Question:Ve,Item:He,VariableName:ze,QuestionString:bt,ItemNameAndWeight:$t,CategoryName:wt},p=ft,h="#",T=";",O=":-",U="OR",W="AND",F="NOT",w=",",$="$",N="[",L="]",ae="kg",Z="g",le=".",q=/^[^\n\r]/,ce=/^[^$,;#]/,X=/^[a-zA-Z]/,ue=/^[a-zA-Z0-9\-[\](){}_]/,oe=/^[^\],;#[]/,me=/^[,;]/,E=/^[^ ,;#]/,m=/^[0-9]/,b=/^[ \t\n\r]/,V=D("title"),fe=j("#",!1),R=Q([`
`,"\r"],!0,!1,!1),k=D("comment"),G=D("rule end"),be=j(";",!1),We=D("rule"),Me=j(":-",!1),Te=D("condition"),cs=j("OR",!1),us=j("AND",!1),Ue=j("NOT",!1),fs=j(",",!1),st=D("question"),gs=j("$",!1),rt=Q(["$",",",";","#"],!0,!1,!1),ps=D("variable name"),ds=Q([["a","z"],["A","Z"]],!1,!1,!1),nt=Q([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),hs=D("item"),ms=D("category"),bs=j("[",!1),ws=j("]",!1),$s=D("category name"),it=Q(["]",",",";","#","["],!0,!1,!1),Ss=D("item name"),Es=D("word"),ys=Q([",",";"],!1,!1,!1),ot=Q([" ",",",";","#"],!0,!1,!1),vs=D("weight"),Ts=j("kg",!1),As=j("g",!1),Rs=D("number"),Ae=Q([["0","9"]],!1,!1,!1),ks=j(".",!1),at=Q([" ","	",`
`,"\r"],!1,!1,!1),xs=qs();function Cs(t,s){return s.title=t?.trim(),s.rulesContainComments=Tt,s;}function Ns(t){if(t.trim().length)return t.trim();}function Os(t){if(t.trim().length)return Tt=!0,t.trim();}function Is(t,s){return Zs(t,s);}function Ls(t){return Dt(t);}function Ds(t){return Lt(t);}function _s(t){return new se(t);}function Ps(t){return new K(t);}function Ws(t,s){return new Y(t.trim(),s.trim());}function Ms(t,s){let{name:i,weight:l}=s;return new J(t.trim(),i,l);}function Us(t,s){return o.trackWeight;}function Fs(t,s){let i=t.trim();return i.length||lt("item name"),{name:i,weight:s};}function js(t){let s=t.trim();return s.length||lt("item name"),{name:s,weight:void 0};}function Vs(t){return t*1e3;}function zs(){return parseFloat(Hs());}let n=o.peg$currPos|0,x=n,ge=[{line:1,column:1}],H=n,Re=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,we;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=c[o.startRule];}function Hs(){return r.substring(x,n);}function Tr(){return x;}function Ar(){return{source:a,start:x,end:n};}function Rr(){return $e(x,n);}function lt(t,s){throw s=s!==void 0?s:$e(x,n),ut([D(t)],r.substring(x,n),s);}function kr(t,s){throw s=s!==void 0?s:$e(x,n),Ks(t,s);}function Bs(t=n){let s=r.codePointAt(t);return s===void 0?"":String.fromCodePoint(s);}function j(t,s){return{type:"literal",text:t,ignoreCase:s};}function Q(t,s,i,l){return{type:"class",parts:t,inverted:s,ignoreCase:i,unicode:l};}function qs(){return{type:"any"};}function Gs(){return{type:"end"};}function D(t){return{type:"other",description:t};}function ct(t){let s=ge[t],i;if(s)return s;if(t>=ge.length)i=ge.length-1;else for(i=t;!ge[--i];);for(s=ge[i],s={line:s.line,column:s.column};i<t;)r.charCodeAt(i)===10?(s.line++,s.column=1):s.column++,i++;return ge[t]=s,s;}function $e(t,s,i){let l=ct(t),f=ct(s),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:s,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function d(t){n<H||(n>H&&(H=n,Re=[]),Re.push(t));}function Ks(t,s){return new ie(t,null,null,s);}function ut(t,s,i){return new ie(ie.buildMessage(t,s),t,s,i);}function ft(){let t,s,i,l,f,g,S,_;for(t=n,s=y(),i=Qs(),i===e&&(i=null),l=y(),f=[],g=Fe();g!==e;)f.push(g),g=n,S=gt(),S!==e?(S=Fe(),S===e?(n=g,g=e):g=S):g=S;return g=gt(),g===e&&(g=null),S=y(),_=vt(),_!==e?(x=t,t=Cs(i,f)):(n=t,t=e),t;}function Qs(){let t,s,i,l,f,g;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&d(fe)),s!==e){if(i=y(),l=n,f=[],g=r.charAt(n),q.test(g)?n++:(g=e,u===0&&d(R)),g!==e)for(;g!==e;)f.push(g),g=r.charAt(n),q.test(g)?n++:(g=e,u===0&&d(R));else f=e;f!==e?l=r.substring(l,n):l=f,l!==e?(f=y(),x=t,t=Ns(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(V)),t;}function pe(){let t,s,i,l,f;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&d(fe)),s!==e){if(i=n,l=[],f=r.charAt(n),q.test(f)?n++:(f=e,u===0&&d(R)),f!==e)for(;f!==e;)l.push(f),f=r.charAt(n),q.test(f)?n++:(f=e,u===0&&d(R));else l=e;l!==e?i=r.substring(i,n):i=l,i!==e?(l=y(),x=t,t=Os(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(k)),t;}function gt(){let t,s,i,l,f,g;if(u++,t=n,s=y(),r.charCodeAt(n)===59?(i=T,n++):(i=e,u===0&&d(be)),i!==e){for(l=y(),f=[],g=pe();g!==e;)f.push(g),g=pe();g=y(),s=[s,i,l,f,g],t=s;}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(G)),t;}function Fe(){let t,s,i,l,f,g,S,_;for(u++,t=n,s=[],i=pe();i!==e;)s.push(i),i=pe();return i=y(),l=pt(),l===e&&(l=null),f=y(),r.substr(n,2)===O?(g=O,n+=2):(g=e,u===0&&d(Me)),g!==e?(S=y(),_=mt(),x=t,t=Is(l,_)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(We)),t;}function pt(){let t,s;return u++,t=Ys(),u--,t===e&&(s=e,u===0&&d(Te)),t;}function Ys(){let t,s,i,l,f,g,S,_;for(u++,t=n,s=n,i=[],l=dt();l!==e;)i.push(l),l=n,f=n,g=y(),r.substr(n,2)===U?(S=U,n+=2):(S=e,u===0&&d(cs)),S!==e?(_=y(),g=[g,S,_],f=g):(n=f,f=e),f!==e?(f=dt(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(x=t,s=Ls(s)),t=s,u--,t===e&&(s=e,u===0&&d(Te)),t;}function dt(){let t,s,i,l,f,g,S,_;for(u++,t=n,s=n,i=[],l=je();l!==e;)i.push(l),l=n,f=n,g=y(),r.substr(n,3)===W?(S=W,n+=3):(S=e,u===0&&d(us)),S!==e?(_=y(),g=[g,S,_],f=g):(n=f,f=e),f!==e?(f=je(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(x=t,s=Ds(s)),t=s,u--,t===e&&(s=e,u===0&&d(Te)),t;}function je(){let t,s,i,l,f,g;return u++,t=n,r.substr(n,3)===F?(s=F,n+=3):(s=e,u===0&&d(Ue)),s!==e?(i=y(),r.substr(n,3)===F?(l=F,n+=3):(l=e,u===0&&d(Ue)),l!==e?(f=y(),g=je(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r.substr(n,3)===F?(s=F,n+=3):(s=e,u===0&&d(Ue)),s!==e?(i=y(),l=ht(),l!==e?(x=t,t=_s(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=ht(),s!==e?t=s:(n=t,t=e))),u--,t===e&&(s=e,u===0&&d(Te)),t;}function ht(){let t,s;return t=n,s=ze(),s!==e&&(x=t,s=Ps(s)),t=s,t;}function mt(){let t,s,i,l,f,g,S,_,de;for(t=n,s=[],i=Ve(),i===e&&(i=He());i!==e;){if(s.push(i),i=n,l=n,f=y(),r.charCodeAt(n)===44?(g=w,n++):(g=e,u===0&&d(fs)),g!==e){for(S=y(),_=[],de=pe();de!==e;)_.push(de),de=pe();de=y(),f=[f,g,S,_,de],l=f;}else n=l,l=e;l!==e?(l=Ve(),l===e&&(l=He()),l===e?(n=i,i=e):i=l):i=l;}return t=s,t;}function Ve(){let t,s,i,l;return u++,t=n,s=bt(),s!==e?(r.charCodeAt(n)===36?(i=$,n++):(i=e,u===0&&d(gs)),i!==e?(l=ze(),l!==e?(x=t,t=Ws(s,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(st)),t;}function bt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),ce.test(i)?n++:(i=e,u===0&&d(rt)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),ce.test(i)?n++:(i=e,u===0&&d(rt));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d(st)),t;}function ze(){let t,s,i,l,f;if(u++,t=n,s=n,i=r.charAt(n),X.test(i)?n++:(i=e,u===0&&d(ds)),i!==e){for(l=[],f=r.charAt(n),ue.test(f)?n++:(f=e,u===0&&d(nt));f!==e;)l.push(f),f=r.charAt(n),ue.test(f)?n++:(f=e,u===0&&d(nt));i=[i,l],s=i;}else n=s,s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d(ps)),t;}function He(){let t,s,i,l;return u++,t=n,s=Js(),s!==e?(i=y(),l=$t(),l!==e?(x=t,t=Ms(s,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(hs)),t;}function Js(){let t,s,i,l,f,g;return u++,t=n,r.charCodeAt(n)===91?(s=N,n++):(s=e,u===0&&d(bs)),s!==e?(i=y(),l=wt(),l!==e?(f=y(),r.charCodeAt(n)===93?(g=L,n++):(g=e,u===0&&d(ws)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(ms)),t;}function wt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),oe.test(i)?n++:(i=e,u===0&&d(it)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),oe.test(i)?n++:(i=e,u===0&&d(it));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d($s)),t;}function $t(){let t,s,i,l,f;for(u++,t=n,s=n,i=[],l=St();l!==e;)i.push(l),l=n,f=y(),f=St(),f===e?(n=l,l=e):l=f;if(s=r.substring(s,n),i=y(),l=Et(),l!==e?(x=n,f=Us(s,l),f?f=void 0:f=e,f!==e?(x=t,t=Fs(s,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,s=n,i=[],l=Be();l!==e;)i.push(l),l=n,f=y(),f=Be(),f===e?(n=l,l=e):l=f;s=r.substring(s,n),x=t,s=js(s),t=s;}return u--,t===e&&(s=e,u===0&&d(Ss)),t;}function St(){let t,s,i,l,f,g;return u++,t=n,s=n,u++,i=n,l=Et(),l!==e?(f=y(),g=vt(),g===e&&(g=r.charAt(n),me.test(g)?n++:(g=e,u===0&&d(ys))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?s=void 0:(n=s,s=e),s!==e?(i=Be(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(Es)),t;}function Be(){let t,s,i;if(t=n,s=[],i=r.charAt(n),E.test(i)?n++:(i=e,u===0&&d(ot)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),E.test(i)?n++:(i=e,u===0&&d(ot));else s=e;return s!==e?t=r.substring(t,n):t=s,t;}function Et(){let t,s,i;return u++,t=n,s=yt(),s!==e?(r.substr(n,2)===ae?(i=ae,n+=2):(i=e,u===0&&d(Ts)),i!==e?(x=t,t=Vs(s)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=yt(),s!==e?(r.charCodeAt(n)===103?(i=Z,n++):(i=e,u===0&&d(As)),i===e&&(i=null),t=s):(n=t,t=e)),u--,t===e&&(s=e,u===0&&d(vs)),t;}function yt(){let t,s,i,l,f,g,S;if(u++,t=n,s=[],i=r.charAt(n),m.test(i)?n++:(i=e,u===0&&d(Ae)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),m.test(i)?n++:(i=e,u===0&&d(Ae));else s=e;if(s!==e){if(i=n,r.charCodeAt(n)===46?(l=le,n++):(l=e,u===0&&d(ks)),l!==e){if(f=n,g=[],S=r.charAt(n),m.test(S)?n++:(S=e,u===0&&d(Ae)),S!==e)for(;S!==e;)g.push(S),S=r.charAt(n),m.test(S)?n++:(S=e,u===0&&d(Ae));else g=e;g!==e?f=r.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),x=t,t=zs();}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(Rs)),t;}function y(){let t,s;for(u++,t=[],s=r.charAt(n),b.test(s)?n++:(s=e,u===0&&d(at));s!==e;)t.push(s),s=r.charAt(n),b.test(s)?n++:(s=e,u===0&&d(at));return u--,t;}function vt(){let t,s;return t=n,u++,r.length>n?(s=r.charAt(n),n++):(s=e,u===0&&d(xs)),u--,s===e?t=void 0:(n=t,t=e),t;}let Tt=!1;we=p();let qe=we!==e&&n===r.length;function At(){throw we!==e&&n<r.length&&d(Gs()),ut(Re,H<r.length?Bs(H):null,H<r.length?$e(H,H+1):$e(H,H));}if(o.peg$library)return{peg$result:we,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Re,peg$maxFailPos:H,peg$success:qe,peg$throw:qe?void 0:At};if(qe)return we;At();}var er={isTrackWeight:()=>!1},tr=new P("PARSER_CONFIG_PROVIDER"),_e=(()=>{class r{config=v(tr,{optional:!0})??er;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return z(e,this.makeOptions("Condition"));}parseQuestion(e){return z(e,this.makeOptions("Question"));}parseItem(e){return z(e,this.makeOptions("Item"));}parseEffects(e){return z(e,this.makeOptions("Effects"));}parseRule(e){return z(e,this.makeOptions("Rule"));}parseRules(e){try{return z(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Error parsing rules"),a instanceof ie){let p=a.location.start.line.toString(),h=a.location.start.column.toString();c.push(" at line ",p," column ",h),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){z(e,this.makeOptions("VariableName"));}validateQuestionString(e){z(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){z(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){z(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return z(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||r)();};static ɵprov=Ce({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();var Ge=(()=>{class r{parser=v(_e);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let p of c.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(h=>this.renameVariable(e,a,h));if(c instanceof Y)return c.variable===e?new Y(c.question,a):c;if(c instanceof te)return new te(this.renameVariable(e,a,c.condition),c.questions.map(h=>this.renameVariable(e,a,h)),c.items);if(c instanceof K)return c.variable===e?new K(a):c;if(c instanceof se)return new se(this.renameVariable(e,a,c.not));if(c instanceof re)return new re(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof ne)return new ne(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let p=c;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((p,h)=>ke(ee({},p),{[h]:e.model[h]}),{[Ee.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof te)return this.contains(e.condition,a)||e.questions.some(h=>this.contains(h,a))||e.items.some(h=>this.contains(h,a));if(e instanceof Y)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof J)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof K)return e.variable.toLowerCase().includes(c);if(e instanceof se)return this.contains(e.not,a);if(e instanceof re)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof ne)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((p,h)=>{let T;return this.parser.isTrackWeight()?T=h.weight?1:0:T=this.parser.forceParseWeight(h.name)?1:0,{items:p.items+1,weights:p.weights+T};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||r)();};static ɵprov=Ce({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();function sr(r,o){return Object.entries(r).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=ee(ee({},e[a]),c),e),{});}var ye=new P("RESET_SIGNAL",{providedIn:"root",factory:()=>C(!1)}),Pe=class r{state;triggerReset=v(ye);constructor(o){this.state=o;}static builder(){return new r({});}extend(o){return new r(sr(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function Pt(r,o){if(typeof r!=typeof o)return!1;if(r&&o&&typeof r=="object"){let e=Object.keys(r),a=Object.keys(o);return e.length===a.length&&e.every(c=>Pt(r[c],o[c]));}return r===o;}function _t(r,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[r]??o;}function rr(r,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);Pt(o,e)?delete c[r]:o===null?c[r]=void 0:c[r]=o,this.setItem("state",JSON.stringify(c));}function Wt(r,o,e){let a=v(ye),c=C(_t.call(r,o,e));return I(()=>{let p=c();p!==_t.call(r,o,e)&&rr.call(r,o,p,e);},{manualCleanup:!0}),I(()=>{a()&&c.set(e);}),c;}var B=(r,o)=>Wt(localStorage,r,o),ve=(r,o)=>Wt(sessionStorage,r,o);var M=B,Mt=["en","de"],Ut=()=>{let r=M("categorySorting","alphabetically"),o=M("trackWeight",!1);return I(()=>{o()===!1&&r()==="weight"&&r.set("alphabetically");}),{config:{categorySorting:r,trackWeight:o,skipItems:M("skipItems",!1),fadeOutDisabledRules:M("fadeOutDisabledRules",!1),highlightVariableStatus:M("highlightVariableStatus",!1),refactorVariables:M("refactorVariables",!0),confirmRuleDeletion:M("confirmRuleDeletion",!0),rulesTemplate:M("rulesTemplate","default"),theme:M("theme","system"),fontSize:M("fontSize","normal"),accessibility:M("accessibility","accessible"),animations:M("animations",!0),language:M("language","auto"),exportReminder:M("exportReminder",!1)}};};var Ft=({config:{language:r}})=>{let o=C(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:A(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:A(()=>{let e=r();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>Mt.includes(p))??"en":e;})}};};var jt=(r,o)=>ve(r,o),Vt=()=>({clipboard:{items:jt("clipboardItems",[]),questions:jt("clipboardQuestions",[])}});var he=B;function nr(r){return"cat-"+r.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Ke=class extends J{original;checked;skipped;colored;visible;constructor(o,e,a,c,p){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c,this.visible=p;}},zt=({rules:{parsed:r,raw:o},config:{categorySorting:e,skipItems:a}})=>{let c=he("answers",{}),p=he("checkedItems",[]),h=he("skippedItems",[]),T=he("collapsedCategories",[]),O=he("answersLocked",!1),U=he("hideCompleted",!1),W=ve("statsVisible",void 0),F=ve("askedWeightTracking",void 0),w=v(Ge),$=A(()=>w.filterActive({rules:r.value(),model:c()})),N=A(()=>$().rules),L=A(()=>N().flatMap(m=>m.items)),ae=A(()=>L().filter(m=>p().includes(m.id()))),Z=m=>{p().includes(m.id())?p.update(b=>b.filter(V=>V!==m.id())):p.update(b=>[...b,m.id()]);},le=A(()=>L().filter(m=>h().includes(m.id()))),q=m=>{a()&&(h().includes(m.id())?h.update(b=>b.filter(V=>V!==m.id())):h.update(b=>[...b,m.id()]));},ce=m=>{T().includes(m)?T.update(b=>b.filter(V=>V!==m)):T.update(b=>[...b,m]);},X=C([]),ue=m=>{(X().length!==m.length||!m.every(b=>X().includes(b)))&&X.set(m);},oe=A(()=>{function m(R){return{id:nr(R.category),name:R.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:T().includes(R.category),colored:W()==="distribution"};}let b=L().reduce((R,k)=>{R[k.category]||(R[k.category]=m(k));let G=a()&&le().includes(k),be=!G&&ae().includes(k),We=W()==="heaviestItems"&&X().includes(k.id()),Me=U()?!be&&!G:!0;return R[k.category].items.push(new Ke(k,be,G,We,Me)),be&&(R[k.category].checkedItems++,R[k.category].checkedWeight+=k.weight??0),G||(R[k.category].totalItems++,R[k.category].totalWeight+=k.weight??0),R;},{}),fe=A(()=>{let R=e();return R==="alphabetically"?(k,G)=>k.name.localeCompare(G.name):R==="weight"?(k,G)=>G.totalWeight-k.totalWeight:()=>0;})();return Object.entries(b).map(R=>R[1]).toSorted((R,k)=>fe(R,k));}),me=A(()=>Object.entries(oe()).reduce((m,[,b])=>(m.totalItems+=b.totalItems,m.checkedItems+=b.checkedItems,m.totalWeight+=b.totalWeight,m.checkedWeight+=b.checkedWeight,m),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0})),E=()=>{O.set(!1),U.set(!1),W.set(void 0);};return I(()=>{o.hasValue()&&o.value()&&E();}),{rules:{categories:A(()=>w.extractCategories(r.value())),variables:A(()=>w.extractVariables(r.value()))},active:{rules:N,answers:A(()=>$().model),questions:A(()=>N().flatMap(m=>m.questions))},packlist:{answers:c,model:oe,stats:me,toggleCheckedItem:Z,toggleSkippedItem:q,colorItems:ue,toggleCategoryCollapse:ce,answersLocked:O,hideCompleted:U,statsVisible:W,askedWeightTracking:F,reset:()=>{c.set({}),p.set([]),h.set([]),T.set([]),E();}}};};var Qe=(r,o)=>{let e=v(Le),a=v(Ie),c=v(ye),p=C(void 0);return e.events.pipe(xe(h=>h instanceof Oe),Rt(()=>a.snapshot.queryParams[r]??o)).subscribe(h=>{h!==""&&p.set(h);}),I(()=>{let h=p()||void 0;h===o&&(h=void 0),a.snapshot.queryParams[r]!==h&&e.navigate([],{queryParams:{[r]:h},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),I(()=>{c()&&p.set(o);}),p;};var ir={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},Ht=()=>{let r=v(Le),o=v(Ie),e=Qe("rulesMode","view"),a=Nt(o.fragment,{requireSync:!0}),c=Ne(()=>a()??void 0);I(()=>{let T=c();T!==a()&&r.navigate([],{fragment:T,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=v(Ct),h=C(p.path());return r.events.pipe(xe(T=>T instanceof Oe)).subscribe(()=>{p.path()!==h()&&h.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Qe("filterRulesQuery",void 0),path:h.asReadonly(),fragment:c,go:T=>{ir[T].call({router:r,rulesMode:e});}}};};var Ye=class{parser;raw;trackWeight;setCurrentTitle;value=C([]);error=C(void 0);status=C("idle");constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,I(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let p=this.parser.parseRules(this.raw.value());p.title&&this.setCurrentTitle(p.title),this.value.set(p),this.error.set(void 0),this.status.set("resolved");}catch(p){this.error.set(p),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},Bt=({config:{trackWeight:r},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new Ye(v(_e),o,r,e);return{rules:{parsed:a.asReadonly(),hasError:A(()=>a.status()==="error"||o.status()==="error"),isLoading:A(()=>a.isLoading()||o.isLoading())}};};var qt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Gt={name:"GitHub Gist",test:r=>qt.test(r),transform:r=>{let o=qt.exec(r);if(!o)return r;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var Je=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Kt=new Je();var Qt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,or={name:"Google Drive",needsCORS:!0,test:r=>Qt.test(r),transform:r=>{let o=Qt.exec(r);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:r;}},Yt=or;var ar={name:"Pastebin",needsCORS:!0,test:r=>r.startsWith("https://pastebin.com/")&&!r.includes("/raw/"),transform:r=>r.replace("https://pastebin.com/","https://pastebin.com/raw/")},Jt=ar;var lr=[Gt,Kt,Yt,Jt];function Zt(r,o){if(r){let e=lr.find(a=>a.test(r));if(e){let a=e.transform(r);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return r;}var Xt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var es=`# Beispiel Packliste

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
`;var ts=`# Example Packlist

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
`;var ss=`:- [Neu] Dies ist dein erster Gegenstand;
`;var rs=`:- [New] This is your first item;
`;var ns=`# Example Logic Demonstration

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
`;var Ze=new P("BACKPACKING_RULES_TEMPLATE");function hr(){return Xt;}var Xe=new P("DEFAULT_RULES_TEMPLATE");function mr(r){return r.startsWith("de")?es:ts;}var et=new P("EMPTY_RULES_TEMPLATE");function br(r){return r.startsWith("de")?ss:rs;}var tt=new P("LOGIC_RULES_TEMPLATE");function wr(){return ns;}function si(){return kt([{provide:Ze,useFactory:hr,deps:[Se]},{provide:Xe,useFactory:mr,deps:[Se]},{provide:et,useFactory:br,deps:[Se]},{provide:tt,useFactory:wr,deps:[Se]}]);}var is=new P("CAPACITOR_HTTP_REQUEST_MODE");function $r(r){switch(r){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var os=({config:{rulesTemplate:r}})=>{let o=B("rulesMode","template"),e=B("rules",void 0),a=A(()=>e()!==void 0),c=A(()=>{let E=e();if(E)return Sr(E).toString(16);}),p=B("lastExportHash",void 0),h=B("lastExportDate",void 0),T=()=>{p.set(c()),h.set(new Date().getTime());},O=C(new Date().getTime());I(()=>{e(),O.set(new Date().getTime());});let U=v(Xe),W=v(et),F=v(tt),w=v(Ze),$=A(()=>{switch(r()){case"empty":return W;case"logic":return F;case"backpacking":return w;default:return U;}}),N=B("remoteHistory",[]),L=B("remoteHistoryTitle",{}),ae=function(E){N.update(m=>m.filter(b=>b!==E)),L.update(m=>{let b=ee({},m);return delete b[E],b;});},Z=Ne(()=>o()==="remote"?N()[0]:void 0),le=v(is,{optional:!0})??"cors",q=xt({params:()=>({mode:o(),rawLocal:e(),remote:Z(),template:$()}),loader:({params:E})=>{switch(E.mode){case"local":return Promise.resolve(E.rawLocal);case"template":return Promise.resolve(E.template);case"remote":if(E.remote){if(!E.remote.startsWith("http"))throw new Error("Invalid URL");let m=Zt(E.remote,le==="cors");return Ot.get({url:m,webFetchExtra:{mode:le}}).then(b=>{if(b.status>=200&&b.status<300)return N.update(V=>[E.remote,...V.filter(fe=>fe!==E.remote)]),b.data;{let V=[["HTTP Error",b.status.toString()].join(" "),$r(b.status)].join(": ");throw new Error(V);}});}else return Promise.resolve(void 0);}}}),ce=function(E){Z()!==E&&(o.set("remote"),Z.set(E));},X=function(E){let m=Z();o()==="remote"&&m&&L.update(b=>ke(ee({},b),{[m]:E}));},ue=function(E){o.set("local"),e.set(E);},oe=function(){e.set(q.value()),o.set("local"),T();},me=function(){q.reload();};return{rules:{mode:o,raw:q.asReadonly(),reload:me,lastAction:O.asReadonly(),hash:c,exportNeeded:A(()=>o()==="local"&&c()!==p()),markAsCurrent:T,localRulesAvailable:a},export:{lastDate:h.asReadonly()},localRules:{updateRules:ue,copyFromCurrent:oe},remoteRules:{load:ce,setCurrentTitle:X,history:A(()=>N().map(E=>({url:E,title:L()[E]}))),removeFromHistory:ae}};},Sr=function(r,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,p;c<r.length;c++)p=r.charCodeAt(c),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var as=()=>({serviceWorker:{status:C("init")}});function Er(){return Pe.builder().extend(Ht).extend(Vt).extend(as).extend(Ut).extend(Ft).extend(os).extend(Bt).extend(zt);}var ls=new P("STATE_BUILDER",{providedIn:"root",factory:()=>Er()}),yr=new P("GLOBAL_STATE",{providedIn:"root",factory:()=>v(ls).build()}),vr=new P("RESET_SWITCH",{providedIn:"root",factory:()=>{let r=v(ls);return async()=>{await r.reset();};}});export{xr as a,De as b,Cr as c,te as d,Y as e,J as f,K as g,Ir as h,Ee as i,se as j,re as k,ne as l,ie as m,tr as n,_e as o,Ge as p,si as q,is as r,yr as s,vr as t};/**i18n:a07a570fe7d916408bde90ede90c4124f8060aafe99e778c259164423f2442d9*/