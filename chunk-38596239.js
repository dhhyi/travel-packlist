import{d as Ot}from"./chunk-2c5cb6d3.js";import{b as Ct,k as Nt,l as Ie,m as Le,o as De}from"./chunk-daf74bd7.js";import{$ as W,B as Ce,Y as Ne,ba as y,ca as kt,pa as C,r as Rt,uc as ye,wc as A,xc as L,yc as Oe,zc as xt}from"./chunk-864a163a.js";import{a as te,b as xe}from"./chunk-e39c6cd7.js";function xr(r){let o=r.title?.trim();return(o?`# ${o}

`:"")+r.map(a=>a.toString()).map(a=>a+";").join(`

`);}function _e(r,o,e=-1){if(!r)return"0g";let a=(e<0?r/1e3:(r/1e3).toFixed(e)).toString()+"kg",c=r.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Cr(r,o){return _e(r,void 0,1)+" / "+_e(o,void 0,1);}var se=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof ve)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},J=class{question;variable;static NEW_QUESTION_NAME="New Question";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function It(r){return r?r.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var Z=class{category;name;weight;static NEW_ITEM_NAME="New Item";static NEW_CATEGORY_NAME="New";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${It(this.category)}-${It(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+_e(this.weight)),o;}},Q=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Ir=(()=>{class r extends Q{static string="please_select";constructor(){super(r.string);}}return r;})(),ve=(()=>{class r extends Q{static string="always";constructor(){super(r.string);}evaluate(){return!0;}}return r;})(),re=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},ne=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},ie=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Zs(r,o){let e=o.filter(c=>c instanceof J),a=o.filter(c=>c instanceof Z);return new se(r??new ve(),e,a);}function Lt(r){return r.length===1?r[0]:new ne(r[0],Lt(r.slice(1)));}function Dt(r){return r.length===1?r[0]:new ie(r[0],Dt(r.slice(1)));}var oe=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(O=>O.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let p=this.location.start,h=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,v=this.location.source+":"+h.line+":"+h.column;if(a){let O=this.location.end,F="".padEnd(h.line.toString().length," "),M=a[p.line-1],b=(p.line===O.line?O.column:M.length+1)-p.column||1;e+=`
 --> `+v+`
`+F+` |
`+h.line+" | "+M+`
`+F+" | "+"".padEnd(p.column-1," ")+"".padEnd(b,"^");}else e+=`
 at `+v;}return e;}static buildMessage(o,e){function a(b){return b.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p(b){return c?b.replace(c,w=>"\\u{"+a(w)+"}"):b;}function h(b){return p(b.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}function v(b){return p(b.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}let O={literal(b){return'"'+h(b.text)+'"';},class(b){let w=b.parts.map(N=>Array.isArray(N)?v(N[0])+"-"+v(N[1]):v(N));return"["+(b.inverted?"^":"")+w.join("")+"]"+(b.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(b){return b.description;}};function F(b){return O[b.type](b);}function M(b){let w=b.map(F);if(w.sort(),w.length>0){let N=1;for(let D=1;D<w.length;D++)w[D-1]!==w[D]&&(w[N]=w[D],N++);w.length=N;}switch(w.length){case 1:return w[0];case 2:return w[0]+" or "+w[1];default:return w.slice(0,-1).join(", ")+", or "+w[w.length-1];}}function j(b){return b?'"'+h(b)+'"':"end of input";}return"Expected "+M(o)+" but "+j(e)+" found.";}};function z(r,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:ft,Rule:Fe,Condition:pt,Effects:mt,Question:Ve,Item:He,VariableName:ze,QuestionString:bt,ItemNameAndWeight:$t,CategoryName:wt},p=ft,h="#",v=";",O=":-",F="OR",M="AND",j="NOT",b=",",w="$",N="[",D="]",le="kg",X="g",ce=".",G=/^[^\n\r]/,ue=/^[^$,;#]/,ee=/^[a-zA-Z]/,fe=/^[a-zA-Z0-9\-[\](){}_]/,ae=/^[^\],;#[]/,we=/^[,;]/,S=/^[^ ,;#]/,I=/^[0-9]/,m=/^[ \t\n\r]/,T=_("title"),B=V("#",!1),ge=Y([`
`,"\r"],!0,!1,!1),x=_("comment"),R=_("rule end"),K=V(";",!1),$e=_("rule"),Me=V(":-",!1),pe=_("condition"),cs=V("OR",!1),us=V("AND",!1),Ue=V("NOT",!1),fs=V(",",!1),st=_("question"),gs=V("$",!1),rt=Y(["$",",",";","#"],!0,!1,!1),ps=_("variable name"),ds=Y([["a","z"],["A","Z"]],!1,!1,!1),nt=Y([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),hs=_("item"),ms=_("category"),bs=V("[",!1),ws=V("]",!1),$s=_("category name"),it=Y(["]",",",";","#","["],!0,!1,!1),Ss=_("item name"),Es=_("word"),ys=Y([",",";"],!1,!1,!1),ot=Y([" ",",",";","#"],!0,!1,!1),vs=_("weight"),Ts=V("kg",!1),As=V("g",!1),Rs=_("number"),Re=Y([["0","9"]],!1,!1,!1),ks=V(".",!1),at=Y([" ","	",`
`,"\r"],!1,!1,!1),xs=qs();function Cs(t,s){return s.title=t?.trim(),s.rulesContainComments=Tt,s;}function Ns(t){if(t.trim().length)return t.trim();}function Os(t){if(t.trim().length)return Tt=!0,t.trim();}function Is(t,s){return Zs(t,s);}function Ls(t){return Dt(t);}function Ds(t){return Lt(t);}function _s(t){return new re(t);}function Ps(t){return new Q(t);}function Ws(t,s){return new J(t.trim(),s.trim());}function Ms(t,s){let{name:i,weight:l}=s;return new Z(t.trim(),i,l);}function Us(t,s){return o.trackWeight;}function Fs(t,s){let i=t.trim();return i.length||lt("item name"),{name:i,weight:s};}function js(t){let s=t.trim();return s.length||lt("item name"),{name:s,weight:void 0};}function Vs(t){return t*1e3;}function zs(){return parseFloat(Hs());}let n=o.peg$currPos|0,k=n,de=[{line:1,column:1}],q=n,ke=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,Se;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=c[o.startRule];}function Hs(){return r.substring(k,n);}function Tr(){return k;}function Ar(){return{source:a,start:k,end:n};}function Rr(){return Ee(k,n);}function lt(t,s){throw s=s!==void 0?s:Ee(k,n),ut([_(t)],r.substring(k,n),s);}function kr(t,s){throw s=s!==void 0?s:Ee(k,n),Ks(t,s);}function Bs(t=n){let s=r.codePointAt(t);return s===void 0?"":String.fromCodePoint(s);}function V(t,s){return{type:"literal",text:t,ignoreCase:s};}function Y(t,s,i,l){return{type:"class",parts:t,inverted:s,ignoreCase:i,unicode:l};}function qs(){return{type:"any"};}function Gs(){return{type:"end"};}function _(t){return{type:"other",description:t};}function ct(t){let s=de[t],i;if(s)return s;if(t>=de.length)i=de.length-1;else for(i=t;!de[--i];);for(s=de[i],s={line:s.line,column:s.column};i<t;)r.charCodeAt(i)===10?(s.line++,s.column=1):s.column++,i++;return de[t]=s,s;}function Ee(t,s,i){let l=ct(t),f=ct(s),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:s,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function d(t){n<q||(n>q&&(q=n,ke=[]),ke.push(t));}function Ks(t,s){return new oe(t,null,null,s);}function ut(t,s,i){return new oe(oe.buildMessage(t,s),t,s,i);}function ft(){let t,s,i,l,f,g,$,P;for(t=n,s=E(),i=Qs(),i===e&&(i=null),l=E(),f=[],g=Fe();g!==e;)f.push(g),g=n,$=gt(),$!==e?($=Fe(),$===e?(n=g,g=e):g=$):g=$;return g=gt(),g===e&&(g=null),$=E(),P=vt(),P!==e?(k=t,t=Cs(i,f)):(n=t,t=e),t;}function Qs(){let t,s,i,l,f,g;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&d(B)),s!==e){if(i=E(),l=n,f=[],g=r.charAt(n),G.test(g)?n++:(g=e,u===0&&d(ge)),g!==e)for(;g!==e;)f.push(g),g=r.charAt(n),G.test(g)?n++:(g=e,u===0&&d(ge));else f=e;f!==e?l=r.substring(l,n):l=f,l!==e?(f=E(),k=t,t=Ns(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(T)),t;}function he(){let t,s,i,l,f;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&d(B)),s!==e){if(i=n,l=[],f=r.charAt(n),G.test(f)?n++:(f=e,u===0&&d(ge)),f!==e)for(;f!==e;)l.push(f),f=r.charAt(n),G.test(f)?n++:(f=e,u===0&&d(ge));else l=e;l!==e?i=r.substring(i,n):i=l,i!==e?(l=E(),k=t,t=Os(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(x)),t;}function gt(){let t,s,i,l,f,g;if(u++,t=n,s=E(),r.charCodeAt(n)===59?(i=v,n++):(i=e,u===0&&d(K)),i!==e){for(l=E(),f=[],g=he();g!==e;)f.push(g),g=he();g=E(),s=[s,i,l,f,g],t=s;}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(R)),t;}function Fe(){let t,s,i,l,f,g,$,P;for(u++,t=n,s=[],i=he();i!==e;)s.push(i),i=he();return i=E(),l=pt(),l===e&&(l=null),f=E(),r.substr(n,2)===O?(g=O,n+=2):(g=e,u===0&&d(Me)),g!==e?($=E(),P=mt(),k=t,t=Is(l,P)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d($e)),t;}function pt(){let t,s;return u++,t=Ys(),u--,t===e&&(s=e,u===0&&d(pe)),t;}function Ys(){let t,s,i,l,f,g,$,P;for(u++,t=n,s=n,i=[],l=dt();l!==e;)i.push(l),l=n,f=n,g=E(),r.substr(n,2)===F?($=F,n+=2):($=e,u===0&&d(cs)),$!==e?(P=E(),g=[g,$,P],f=g):(n=f,f=e),f!==e?(f=dt(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(k=t,s=Ls(s)),t=s,u--,t===e&&(s=e,u===0&&d(pe)),t;}function dt(){let t,s,i,l,f,g,$,P;for(u++,t=n,s=n,i=[],l=je();l!==e;)i.push(l),l=n,f=n,g=E(),r.substr(n,3)===M?($=M,n+=3):($=e,u===0&&d(us)),$!==e?(P=E(),g=[g,$,P],f=g):(n=f,f=e),f!==e?(f=je(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(k=t,s=Ds(s)),t=s,u--,t===e&&(s=e,u===0&&d(pe)),t;}function je(){let t,s,i,l,f,g;return u++,t=n,r.substr(n,3)===j?(s=j,n+=3):(s=e,u===0&&d(Ue)),s!==e?(i=E(),r.substr(n,3)===j?(l=j,n+=3):(l=e,u===0&&d(Ue)),l!==e?(f=E(),g=je(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r.substr(n,3)===j?(s=j,n+=3):(s=e,u===0&&d(Ue)),s!==e?(i=E(),l=ht(),l!==e?(k=t,t=_s(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=ht(),s!==e?t=s:(n=t,t=e))),u--,t===e&&(s=e,u===0&&d(pe)),t;}function ht(){let t,s;return t=n,s=ze(),s!==e&&(k=t,s=Ps(s)),t=s,t;}function mt(){let t,s,i,l,f,g,$,P,me;for(t=n,s=[],i=Ve(),i===e&&(i=He());i!==e;){if(s.push(i),i=n,l=n,f=E(),r.charCodeAt(n)===44?(g=b,n++):(g=e,u===0&&d(fs)),g!==e){for($=E(),P=[],me=he();me!==e;)P.push(me),me=he();me=E(),f=[f,g,$,P,me],l=f;}else n=l,l=e;l!==e?(l=Ve(),l===e&&(l=He()),l===e?(n=i,i=e):i=l):i=l;}return t=s,t;}function Ve(){let t,s,i,l;return u++,t=n,s=bt(),s!==e?(r.charCodeAt(n)===36?(i=w,n++):(i=e,u===0&&d(gs)),i!==e?(l=ze(),l!==e?(k=t,t=Ws(s,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(st)),t;}function bt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),ue.test(i)?n++:(i=e,u===0&&d(rt)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),ue.test(i)?n++:(i=e,u===0&&d(rt));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d(st)),t;}function ze(){let t,s,i,l,f;if(u++,t=n,s=n,i=r.charAt(n),ee.test(i)?n++:(i=e,u===0&&d(ds)),i!==e){for(l=[],f=r.charAt(n),fe.test(f)?n++:(f=e,u===0&&d(nt));f!==e;)l.push(f),f=r.charAt(n),fe.test(f)?n++:(f=e,u===0&&d(nt));i=[i,l],s=i;}else n=s,s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d(ps)),t;}function He(){let t,s,i,l;return u++,t=n,s=Js(),s!==e?(i=E(),l=$t(),l!==e?(k=t,t=Ms(s,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(hs)),t;}function Js(){let t,s,i,l,f,g;return u++,t=n,r.charCodeAt(n)===91?(s=N,n++):(s=e,u===0&&d(bs)),s!==e?(i=E(),l=wt(),l!==e?(f=E(),r.charCodeAt(n)===93?(g=D,n++):(g=e,u===0&&d(ws)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(ms)),t;}function wt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),ae.test(i)?n++:(i=e,u===0&&d(it)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),ae.test(i)?n++:(i=e,u===0&&d(it));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d($s)),t;}function $t(){let t,s,i,l,f;for(u++,t=n,s=n,i=[],l=St();l!==e;)i.push(l),l=n,f=E(),f=St(),f===e?(n=l,l=e):l=f;if(s=r.substring(s,n),i=E(),l=Et(),l!==e?(k=n,f=Us(s,l),f?f=void 0:f=e,f!==e?(k=t,t=Fs(s,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,s=n,i=[],l=Be();l!==e;)i.push(l),l=n,f=E(),f=Be(),f===e?(n=l,l=e):l=f;s=r.substring(s,n),k=t,s=js(s),t=s;}return u--,t===e&&(s=e,u===0&&d(Ss)),t;}function St(){let t,s,i,l,f,g;return u++,t=n,s=n,u++,i=n,l=Et(),l!==e?(f=E(),g=vt(),g===e&&(g=r.charAt(n),we.test(g)?n++:(g=e,u===0&&d(ys))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?s=void 0:(n=s,s=e),s!==e?(i=Be(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(Es)),t;}function Be(){let t,s,i;if(t=n,s=[],i=r.charAt(n),S.test(i)?n++:(i=e,u===0&&d(ot)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),S.test(i)?n++:(i=e,u===0&&d(ot));else s=e;return s!==e?t=r.substring(t,n):t=s,t;}function Et(){let t,s,i;return u++,t=n,s=yt(),s!==e?(r.substr(n,2)===le?(i=le,n+=2):(i=e,u===0&&d(Ts)),i!==e?(k=t,t=Vs(s)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=yt(),s!==e?(r.charCodeAt(n)===103?(i=X,n++):(i=e,u===0&&d(As)),i===e&&(i=null),t=s):(n=t,t=e)),u--,t===e&&(s=e,u===0&&d(vs)),t;}function yt(){let t,s,i,l,f,g,$;if(u++,t=n,s=[],i=r.charAt(n),I.test(i)?n++:(i=e,u===0&&d(Re)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),I.test(i)?n++:(i=e,u===0&&d(Re));else s=e;if(s!==e){if(i=n,r.charCodeAt(n)===46?(l=ce,n++):(l=e,u===0&&d(ks)),l!==e){if(f=n,g=[],$=r.charAt(n),I.test($)?n++:($=e,u===0&&d(Re)),$!==e)for(;$!==e;)g.push($),$=r.charAt(n),I.test($)?n++:($=e,u===0&&d(Re));else g=e;g!==e?f=r.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),k=t,t=zs();}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(Rs)),t;}function E(){let t,s;for(u++,t=[],s=r.charAt(n),m.test(s)?n++:(s=e,u===0&&d(at));s!==e;)t.push(s),s=r.charAt(n),m.test(s)?n++:(s=e,u===0&&d(at));return u--,t;}function vt(){let t,s;return t=n,u++,r.length>n?(s=r.charAt(n),n++):(s=e,u===0&&d(xs)),u--,s===e?t=void 0:(n=t,t=e),t;}let Tt=!1;Se=p();let qe=Se!==e&&n===r.length;function At(){throw Se!==e&&n<r.length&&d(Gs()),ut(ke,q<r.length?Bs(q):null,q<r.length?Ee(q,q+1):Ee(q,q));}if(o.peg$library)return{peg$result:Se,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:ke,peg$maxFailPos:q,peg$success:qe,peg$throw:qe?void 0:At};if(qe)return Se;At();}var er={isTrackWeight:()=>!1},tr=new W("PARSER_CONFIG_PROVIDER"),Pe=(()=>{class r{config=y(tr,{optional:!0})??er;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return z(e,this.makeOptions("Condition"));}parseQuestion(e){return z(e,this.makeOptions("Question"));}parseItem(e){return z(e,this.makeOptions("Item"));}parseEffects(e){return z(e,this.makeOptions("Effects"));}parseRule(e){return z(e,this.makeOptions("Rule"));}parseRules(e){try{return z(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Error parsing rules"),a instanceof oe){let p=a.location.start.line.toString(),h=a.location.start.column.toString();c.push(" at line ",p," column ",h),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){z(e,this.makeOptions("VariableName"));}validateQuestionString(e){z(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){z(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){z(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return z(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||r)();};static ɵprov=Ne({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();var Ge=(()=>{class r{parser=y(Pe);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let p of c.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(h=>this.renameVariable(e,a,h));if(c instanceof J)return c.variable===e?new J(c.question,a):c;if(c instanceof se)return new se(this.renameVariable(e,a,c.condition),c.questions.map(h=>this.renameVariable(e,a,h)),c.items);if(c instanceof Q)return c.variable===e?new Q(a):c;if(c instanceof re)return new re(this.renameVariable(e,a,c.not));if(c instanceof ne)return new ne(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof ie)return new ie(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let p=c;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((p,h)=>xe(te({},p),{[h]:e.model[h]}),{[ve.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof se)return this.contains(e.condition,a)||e.questions.some(h=>this.contains(h,a))||e.items.some(h=>this.contains(h,a));if(e instanceof J)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof Z)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof Q)return e.variable.toLowerCase().includes(c);if(e instanceof re)return this.contains(e.not,a);if(e instanceof ne)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof ie)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((p,h)=>{let v;return this.parser.isTrackWeight()?v=h.weight?1:0:v=this.parser.forceParseWeight(h.name)?1:0,{items:p.items+1,weights:p.weights+v};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||r)();};static ɵprov=Ne({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();function sr(r,o){return Object.entries(r).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=te(te({},e[a]),c),e),{});}var Te=new W("RESET_SIGNAL",{providedIn:"root",factory:()=>C(!1)}),We=class r{state;triggerReset=y(Te);constructor(o){this.state=o;}static builder(){return new r({});}extend(o){return new r(sr(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function Pt(r,o){if(typeof r!=typeof o)return!1;if(r&&o&&typeof r=="object"){let e=Object.keys(r),a=Object.keys(o);return e.length===a.length&&e.every(c=>Pt(r[c],o[c]));}return r===o;}function _t(r,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[r]??o;}function rr(r,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);Pt(o,e)?delete c[r]:o===null?c[r]=void 0:c[r]=o,this.setItem("state",JSON.stringify(c));}function Wt(r,o,e){let a=y(Te),c=C(_t.call(r,o,e));return L(()=>{let p=c();p!==_t.call(r,o,e)&&rr.call(r,o,p,e);},{manualCleanup:!0}),L(()=>{a()&&c.set(e);}),c;}var H=(r,o)=>Wt(localStorage,r,o),Ae=(r,o)=>Wt(sessionStorage,r,o);var U=H,Mt=["en","de"],Ut=()=>{let r=U("categorySorting","alphabetically"),o=U("trackWeight",!1);return L(()=>{o()===!1&&r()==="weight"&&r.set("alphabetically");}),{config:{categorySorting:r,trackWeight:o,skipItems:U("skipItems",!1),fadeOutDisabledRules:U("fadeOutDisabledRules",!1),highlightVariableStatus:U("highlightVariableStatus",!1),refactorVariables:U("refactorVariables",!0),confirmRuleDeletion:U("confirmRuleDeletion",!0),rulesTemplate:U("rulesTemplate","default"),theme:U("theme","system"),fontSize:U("fontSize","normal"),accessibility:U("accessibility","accessible"),animations:U("animations",!0),language:U("language","auto"),exportReminder:U("exportReminder",!1)}};};var Ft=({config:{language:r}})=>{let o=C(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:A(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:A(()=>{let e=r();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>Mt.includes(p))??"en":e;})}};};var jt=(r,o)=>Ae(r,o),Vt=()=>({clipboard:{items:jt("clipboardItems",[]),questions:jt("clipboardQuestions",[])}});var be=H;function nr(r){return"cat-"+r.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Ke=class extends Z{original;checked;skipped;colored;visible;constructor(o,e,a,c,p){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c,this.visible=p;}},zt=({rules:{parsed:r,raw:o},config:{categorySorting:e,skipItems:a}})=>{let c=be("answers",{}),p=be("checkedItems",[]),h=be("skippedItems",[]),v=be("collapsedCategories",[]),O=be("answersLocked",!1),F=be("hideCompleted",!1),M=Ae("statsVisible",void 0),j=Ae("askedWeightTracking",void 0),b=y(Ge),w=A(()=>b.filterActive({rules:r.value(),model:c()})),N=A(()=>w().rules),D=A(()=>N().flatMap(m=>m.items)),le=A(()=>D().filter(m=>p().includes(m.id()))),X=m=>{p().includes(m.id())?p.update(T=>T.filter(B=>B!==m.id())):p.update(T=>[...T,m.id()]);},ce=A(()=>D().filter(m=>h().includes(m.id()))),G=m=>{a()&&(h().includes(m.id())?h.update(T=>T.filter(B=>B!==m.id())):h.update(T=>[...T,m.id()]));},ue=m=>{v().includes(m)?v.update(T=>T.filter(B=>B!==m)):v.update(T=>[...T,m]);},ee=C([]),fe=m=>{(ee().length!==m.length||!m.every(T=>ee().includes(T)))&&ee.set(m);},ae=A(()=>{function m(x){return{id:nr(x.category),name:x.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:v().includes(x.category),colored:M()==="distribution"};}let T=D().reduce((x,R)=>{x[R.category]||(x[R.category]=m(R));let K=a()&&ce().includes(R),$e=!K&&le().includes(R),Me=M()==="heaviestItems"&&ee().includes(R.id()),pe=F()?!$e&&!K:!0;return x[R.category].items.push(new Ke(R,$e,K,Me,pe)),$e&&(x[R.category].checkedItems++,x[R.category].checkedWeight+=R.weight??0),K||(x[R.category].totalItems++,x[R.category].totalWeight+=R.weight??0),x;},{}),ge=A(()=>{let x=e();return x==="alphabetically"?(R,K)=>R.name.localeCompare(K.name):x==="weight"?(R,K)=>K.totalWeight-R.totalWeight:()=>0;})();return Object.entries(T).map(x=>x[1]).toSorted((x,R)=>ge(x,R));}),we=A(()=>Object.entries(ae()).reduce((m,[,T])=>(m.totalItems+=T.totalItems,m.checkedItems+=T.checkedItems,m.totalWeight+=T.totalWeight,m.checkedWeight+=T.checkedWeight,m),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0})),S=H("sessionName",void 0),I=()=>{O.set(!1),F.set(!1),M.set(void 0);};return L(()=>{o.hasValue()&&o.value()&&I();}),{rules:{categories:A(()=>b.extractCategories(r.value())),variables:A(()=>b.extractVariables(r.value()))},active:{rules:N,answers:A(()=>w().model),questions:A(()=>N().flatMap(m=>m.questions))},packlist:{sessionName:S,answers:c,model:ae,stats:we,toggleCheckedItem:X,toggleSkippedItem:G,colorItems:fe,toggleCategoryCollapse:ue,answersLocked:O,hideCompleted:F,statsVisible:M,askedWeightTracking:j,reset:()=>{S.set(void 0),c.set({}),p.set([]),h.set([]),v.set([]),I();}}};};var Qe=(r,o)=>{let e=y(De),a=y(Le),c=y(Te),p=C(void 0);return e.events.pipe(Ce(h=>h instanceof Ie),Rt(()=>a.snapshot.queryParams[r]??o)).subscribe(h=>{h!==""&&p.set(h);}),L(()=>{let h=p()||void 0;h===o&&(h=void 0),a.snapshot.queryParams[r]!==h&&e.navigate([],{queryParams:{[r]:h},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),L(()=>{c()&&p.set(o);}),p;};var ir={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},Ht=()=>{let r=y(De),o=y(Le),e=Qe("rulesMode","view"),a=Nt(o.fragment,{requireSync:!0}),c=Oe(()=>a()??void 0);L(()=>{let v=c();v!==a()&&r.navigate([],{fragment:v,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=y(Ct),h=C(p.path());return r.events.pipe(Ce(v=>v instanceof Ie)).subscribe(()=>{p.path()!==h()&&h.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Qe("filterRulesQuery",void 0),path:h.asReadonly(),fragment:c,go:v=>{ir[v].call({router:r,rulesMode:e});}}};};var Ye=class{parser;raw;trackWeight;setCurrentTitle;value=C([]);error=C(void 0);status=C("idle");constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,L(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let p=this.parser.parseRules(this.raw.value());p.title&&this.setCurrentTitle(p.title),this.value.set(p),this.error.set(void 0),this.status.set("resolved");}catch(p){this.error.set(p),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},Bt=({config:{trackWeight:r},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new Ye(y(Pe),o,r,e);return{rules:{parsed:a.asReadonly(),hasError:A(()=>a.status()==="error"||o.status()==="error"),isLoading:A(()=>a.isLoading()||o.isLoading())}};};var qt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Gt={name:"GitHub Gist",test:r=>qt.test(r),transform:r=>{let o=qt.exec(r);if(!o)return r;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var Je=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Kt=new Je();var Qt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,or={name:"Google Drive",needsCORS:!0,test:r=>Qt.test(r),transform:r=>{let o=Qt.exec(r);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:r;}},Yt=or;var ar={name:"Pastebin",needsCORS:!0,test:r=>r.startsWith("https://pastebin.com/")&&!r.includes("/raw/"),transform:r=>r.replace("https://pastebin.com/","https://pastebin.com/raw/")},Jt=ar;var lr=[Gt,Kt,Yt,Jt];function Zt(r,o){if(r){let e=lr.find(a=>a.test(r));if(e){let a=e.transform(r);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return r;}var Xt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var Ze=new W("BACKPACKING_RULES_TEMPLATE");function hr(){return Xt;}var Xe=new W("DEFAULT_RULES_TEMPLATE");function mr(r){return r.startsWith("de")?es:ts;}var et=new W("EMPTY_RULES_TEMPLATE");function br(r){return r.startsWith("de")?ss:rs;}var tt=new W("LOGIC_RULES_TEMPLATE");function wr(){return ns;}function si(){return kt([{provide:Ze,useFactory:hr,deps:[ye]},{provide:Xe,useFactory:mr,deps:[ye]},{provide:et,useFactory:br,deps:[ye]},{provide:tt,useFactory:wr,deps:[ye]}]);}var is=new W("CAPACITOR_HTTP_REQUEST_MODE");function $r(r){switch(r){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var os=({config:{rulesTemplate:r}})=>{let o=H("rulesMode","template"),e=H("rules",void 0),a=A(()=>e()!==void 0),c=A(()=>{let S=e();if(S)return Sr(S).toString(16);}),p=H("lastExportHash",void 0),h=H("lastExportDate",void 0),v=()=>{p.set(c()),h.set(new Date().getTime());},O=C(new Date().getTime());L(()=>{e(),O.set(new Date().getTime());});let F=y(Xe),M=y(et),j=y(tt),b=y(Ze),w=A(()=>{switch(r()){case"empty":return M;case"logic":return j;case"backpacking":return b;default:return F;}}),N=H("remoteHistory",[]),D=H("remoteHistoryTitle",{}),le=function(S){N.update(I=>I.filter(m=>m!==S)),D.update(I=>{let m=te({},I);return delete m[S],m;});},X=Oe(()=>o()==="remote"?N()[0]:void 0),ce=y(is,{optional:!0})??"cors",G=xt({params:()=>({mode:o(),rawLocal:e(),remote:X(),template:w()}),loader:({params:S})=>{switch(S.mode){case"local":return Promise.resolve(S.rawLocal);case"template":return Promise.resolve(S.template);case"remote":if(S.remote){if(!S.remote.startsWith("http"))throw new Error("Invalid URL");let I=Zt(S.remote,ce==="cors");return Ot.get({url:I,webFetchExtra:{mode:ce}}).then(m=>{if(m.status>=200&&m.status<300)return N.update(T=>[S.remote,...T.filter(B=>B!==S.remote)]),m.data;{let T=[["HTTP Error",m.status.toString()].join(" "),$r(m.status)].join(": ");throw new Error(T);}});}else return Promise.resolve(void 0);}}}),ue=function(S){X()!==S&&(o.set("remote"),X.set(S));},ee=function(S){let I=X();o()==="remote"&&I&&D.update(m=>xe(te({},m),{[I]:S}));},fe=function(S){o.set("local"),e.set(S);},ae=function(){e.set(G.value()),o.set("local"),v();},we=function(){G.reload();};return{rules:{mode:o,raw:G.asReadonly(),reload:we,lastAction:O.asReadonly(),hash:c,exportNeeded:A(()=>o()==="local"&&c()!==p()),markAsCurrent:v,localRulesAvailable:a},export:{lastDate:h.asReadonly()},localRules:{updateRules:fe,copyFromCurrent:ae},remoteRules:{load:ue,setCurrentTitle:ee,history:A(()=>N().map(S=>({url:S,title:D()[S]}))),removeFromHistory:le}};},Sr=function(r,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,p;c<r.length;c++)p=r.charCodeAt(c),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var as=()=>({serviceWorker:{status:C("init")}});function Er(){return We.builder().extend(Ht).extend(Vt).extend(as).extend(Ut).extend(Ft).extend(os).extend(Bt).extend(zt);}var ls=new W("STATE_BUILDER",{providedIn:"root",factory:()=>Er()}),yr=new W("GLOBAL_STATE",{providedIn:"root",factory:()=>y(ls).build()}),vr=new W("RESET_SWITCH",{providedIn:"root",factory:()=>{let r=y(ls);return async()=>{await r.reset();};}});export{xr as a,_e as b,Cr as c,se as d,J as e,Z as f,Q as g,Ir as h,ve as i,re as j,ne as k,ie as l,oe as m,tr as n,Pe as o,Ge as p,si as q,is as r,yr as s,vr as t};/**i18n:02b940d651cca38199bf4688131265cf0357a49eef7b8ac774e63035febcc1d3*/