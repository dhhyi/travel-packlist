import{b as Ot,l as It,m as Oe,n as Ie,p as De}from"./chunk-d424d774.js";import{d as Dt}from"./chunk-32f3b8a5.js";import{$ as V,B as xe,Y as Ce,ba as k,ca as Ct,pa as N,r as xt,uc as Ee,wc as y,xc as _,yc as Ne,zc as Nt}from"./chunk-df17556f.js";import{a as x,b as D}from"./chunk-bdc09bad.js";function Cr(r){let o=r.title?.trim();return(o?`# ${o}

`:"")+r.map(a=>a.toString()).map(a=>a+";").join(`

`);}function Le(r,o,e=-1){if(!r)return"0g";let a=(e<0?r/1e3:(r/1e3).toFixed(e)).toString()+"kg",c=r.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Nr(r,o){return Le(r,void 0,1)+" / "+Le(o,void 0,1);}var ae=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof ve)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},se=class{question;variable;static NEW_QUESTION_NAME="New Question";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function Lt(r){return r?r.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var re=class{category;name;weight;static NEW_ITEM_NAME="New Item";static NEW_CATEGORY_NAME="New";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${Lt(this.category)}-${Lt(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+Le(this.weight)),o;}},X=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Dr=(()=>{class r extends X{static string="please_select";constructor(){super(r.string);}}return r;})(),ve=(()=>{class r extends X{static string="always";constructor(){super(r.string);}evaluate(){return!0;}}return r;})(),le=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},ce=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},ue=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Xs(r,o){let e=o.filter(c=>c instanceof se),a=o.filter(c=>c instanceof re);return new ae(r??new ve(),e,a);}function _t(r){return r.length===1?r[0]:new ce(r[0],_t(r.slice(1)));}function Pt(r){return r.length===1?r[0]:new ue(r[0],Pt(r.slice(1)));}var fe=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(P=>P.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let d=this.location.start,h=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(d):d,b=this.location.source+":"+h.line+":"+h.column;if(a){let P=this.location.end,B="".padEnd(h.line.toString().length," "),G=a[d.line-1],$=(d.line===P.line?P.column:G.length+1)-d.column||1;e+=`
 --> `+b+`
`+B+` |
`+h.line+" | "+G+`
`+B+" | "+"".padEnd(d.column-1," ")+"".padEnd($,"^");}else e+=`
 at `+b;}return e;}static buildMessage(o,e){function a($){return $.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function d($){return c?$.replace(c,S=>"\\u{"+a(S)+"}"):$;}function h($){return d($.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,S=>"\\x0"+a(S)).replace(/[\x10-\x1F\x7F-\x9F]/g,S=>"\\x"+a(S)));}function b($){return d($.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,S=>"\\x0"+a(S)).replace(/[\x10-\x1F\x7F-\x9F]/g,S=>"\\x"+a(S)));}let P={literal($){return'"'+h($.text)+'"';},class($){let S=$.parts.map(O=>Array.isArray(O)?b(O[0])+"-"+b(O[1]):b(O));return"["+($.inverted?"^":"")+S.join("")+"]"+($.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other($){return $.description;}};function B($){return P[$.type]($);}function G($){let S=$.map(B);if(S.sort(),S.length>0){let O=1;for(let F=1;F<S.length;F++)S[F-1]!==S[F]&&(S[O]=S[F],O++);S.length=O;}switch(S.length){case 1:return S[0];case 2:return S[0]+" or "+S[1];default:return S.slice(0,-1).join(", ")+", or "+S[S.length-1];}}function z($){return $?'"'+h($)+'"':"end of input";}return"Expected "+G(o)+" but "+z(e)+" found.";}};function q(r,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:dt,Rule:Fe,Condition:ht,Effects:bt,Question:ze,Item:qe,VariableName:He,QuestionString:St,ItemNameAndWeight:At,CategoryName:$t},d=dt,h="#",b=";",P=":-",B="OR",G="AND",z="NOT",$=",",S="$",O="[",F="]",ne="kg",Y="g",ge=".",J=/^[^\n\r]/,de=/^[^$,;#]/,be=/^[a-zA-Z]/,pe=/^[a-zA-Z0-9\-[\](){}_]/,ee=/^[^\],;#[]/,Se=/^[,;]/,E=/^[^ ,;#]/,W=/^[0-9]/,L=/^[ \t\n\r]/,ie=M("title"),p=H("#",!1),w=te([`
`,"\r"],!0,!1,!1),I=M("comment"),$e=M("rule end"),T=H(";",!1),R=M("rule"),Z=H(":-",!1),oe=M("condition"),Me=H("OR",!1),Ue=H("AND",!1),Ve=H("NOT",!1),gs=H(",",!1),nt=M("question"),ds=H("$",!1),it=te(["$",",",";","#"],!0,!1,!1),ps=M("variable name"),hs=te([["a","z"],["A","Z"]],!1,!1,!1),ot=te([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),ms=M("item"),ws=M("category"),bs=H("[",!1),Ss=H("]",!1),$s=M("category name"),at=te(["]",",",";","#","["],!0,!1,!1),As=M("item name"),ys=M("word"),Es=te([",",";"],!1,!1,!1),lt=te([" ",",",";","#"],!0,!1,!1),vs=M("weight"),ks=H("kg",!1),Ts=H("g",!1),Rs=M("number"),Te=te([["0","9"]],!1,!1,!1),xs=H(".",!1),ct=te([" ","	",`
`,"\r"],!1,!1,!1),Cs=Gs();function Ns(t,s){return s.title=t?.trim(),s.rulesContainComments=Tt,s;}function Os(t){if(t.trim().length)return t.trim();}function Is(t){if(t.trim().length)return Tt=!0,t.trim();}function Ds(t,s){return Xs(t,s);}function Ls(t){return Pt(t);}function _s(t){return _t(t);}function Ps(t){return new le(t);}function Ws(t){return new X(t);}function Ms(t,s){return new se(t.trim(),s.trim());}function Us(t,s){let{name:i,weight:l}=s;return new re(t.trim(),i,l);}function Vs(t,s){return o.trackWeight;}function Fs(t,s){let i=t.trim();return i.length||ut("item name"),{name:i,weight:s};}function js(t){let s=t.trim();return s.length||ut("item name"),{name:s,weight:void 0};}function zs(t){return t*1e3;}function Hs(){return parseFloat(qs());}let n=o.peg$currPos|0,C=n,he=[{line:1,column:1}],K=n,Re=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,Ae;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');d=c[o.startRule];}function qs(){return r.substring(C,n);}function kr(){return C;}function Tr(){return{source:a,start:C,end:n};}function Rr(){return ye(C,n);}function ut(t,s){throw s=s!==void 0?s:ye(C,n),gt([M(t)],r.substring(C,n),s);}function xr(t,s){throw s=s!==void 0?s:ye(C,n),Qs(t,s);}function Bs(t=n){let s=r.codePointAt(t);return s===void 0?"":String.fromCodePoint(s);}function H(t,s){return{type:"literal",text:t,ignoreCase:s};}function te(t,s,i,l){return{type:"class",parts:t,inverted:s,ignoreCase:i,unicode:l};}function Gs(){return{type:"any"};}function Ks(){return{type:"end"};}function M(t){return{type:"other",description:t};}function ft(t){let s=he[t],i;if(s)return s;if(t>=he.length)i=he.length-1;else for(i=t;!he[--i];);for(s=he[i],s={line:s.line,column:s.column};i<t;)r.charCodeAt(i)===10?(s.line++,s.column=1):s.column++,i++;return he[t]=s,s;}function ye(t,s,i){let l=ft(t),f=ft(s),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:s,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function m(t){n<K||(n>K&&(K=n,Re=[]),Re.push(t));}function Qs(t,s){return new fe(t,null,null,s);}function gt(t,s,i){return new fe(fe.buildMessage(t,s),t,s,i);}function dt(){let t,s,i,l,f,g,A,U;for(t=n,s=v(),i=Ys(),i===e&&(i=null),l=v(),f=[],g=Fe();g!==e;)f.push(g),g=n,A=pt(),A!==e?(A=Fe(),A===e?(n=g,g=e):g=A):g=A;return g=pt(),g===e&&(g=null),A=v(),U=kt(),U!==e?(C=t,t=Ns(i,f)):(n=t,t=e),t;}function Ys(){let t,s,i,l,f,g;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&m(p)),s!==e){if(i=v(),l=n,f=[],g=r.charAt(n),J.test(g)?n++:(g=e,u===0&&m(w)),g!==e)for(;g!==e;)f.push(g),g=r.charAt(n),J.test(g)?n++:(g=e,u===0&&m(w));else f=e;f!==e?l=r.substring(l,n):l=f,l!==e?(f=v(),C=t,t=Os(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&m(ie)),t;}function me(){let t,s,i,l,f;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&m(p)),s!==e){if(i=n,l=[],f=r.charAt(n),J.test(f)?n++:(f=e,u===0&&m(w)),f!==e)for(;f!==e;)l.push(f),f=r.charAt(n),J.test(f)?n++:(f=e,u===0&&m(w));else l=e;l!==e?i=r.substring(i,n):i=l,i!==e?(l=v(),C=t,t=Is(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&m(I)),t;}function pt(){let t,s,i,l,f,g;if(u++,t=n,s=v(),r.charCodeAt(n)===59?(i=b,n++):(i=e,u===0&&m(T)),i!==e){for(l=v(),f=[],g=me();g!==e;)f.push(g),g=me();g=v(),s=[s,i,l,f,g],t=s;}else n=t,t=e;return u--,t===e&&(s=e,u===0&&m($e)),t;}function Fe(){let t,s,i,l,f,g,A,U;for(u++,t=n,s=[],i=me();i!==e;)s.push(i),i=me();return i=v(),l=ht(),l===e&&(l=null),f=v(),r.substr(n,2)===P?(g=P,n+=2):(g=e,u===0&&m(Z)),g!==e?(A=v(),U=bt(),C=t,t=Ds(l,U)):(n=t,t=e),u--,t===e&&(s=e,u===0&&m(R)),t;}function ht(){let t,s;return u++,t=Js(),u--,t===e&&(s=e,u===0&&m(oe)),t;}function Js(){let t,s,i,l,f,g,A,U;for(u++,t=n,s=n,i=[],l=mt();l!==e;)i.push(l),l=n,f=n,g=v(),r.substr(n,2)===B?(A=B,n+=2):(A=e,u===0&&m(Me)),A!==e?(U=v(),g=[g,A,U],f=g):(n=f,f=e),f!==e?(f=mt(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(C=t,s=Ls(s)),t=s,u--,t===e&&(s=e,u===0&&m(oe)),t;}function mt(){let t,s,i,l,f,g,A,U;for(u++,t=n,s=n,i=[],l=je();l!==e;)i.push(l),l=n,f=n,g=v(),r.substr(n,3)===G?(A=G,n+=3):(A=e,u===0&&m(Ue)),A!==e?(U=v(),g=[g,A,U],f=g):(n=f,f=e),f!==e?(f=je(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(C=t,s=_s(s)),t=s,u--,t===e&&(s=e,u===0&&m(oe)),t;}function je(){let t,s,i,l,f,g;return u++,t=n,r.substr(n,3)===z?(s=z,n+=3):(s=e,u===0&&m(Ve)),s!==e?(i=v(),r.substr(n,3)===z?(l=z,n+=3):(l=e,u===0&&m(Ve)),l!==e?(f=v(),g=je(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r.substr(n,3)===z?(s=z,n+=3):(s=e,u===0&&m(Ve)),s!==e?(i=v(),l=wt(),l!==e?(C=t,t=Ps(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=wt(),s!==e?t=s:(n=t,t=e))),u--,t===e&&(s=e,u===0&&m(oe)),t;}function wt(){let t,s;return t=n,s=He(),s!==e&&(C=t,s=Ws(s)),t=s,t;}function bt(){let t,s,i,l,f,g,A,U,we;for(t=n,s=[],i=ze(),i===e&&(i=qe());i!==e;){if(s.push(i),i=n,l=n,f=v(),r.charCodeAt(n)===44?(g=$,n++):(g=e,u===0&&m(gs)),g!==e){for(A=v(),U=[],we=me();we!==e;)U.push(we),we=me();we=v(),f=[f,g,A,U,we],l=f;}else n=l,l=e;l!==e?(l=ze(),l===e&&(l=qe()),l===e?(n=i,i=e):i=l):i=l;}return t=s,t;}function ze(){let t,s,i,l;return u++,t=n,s=St(),s!==e?(r.charCodeAt(n)===36?(i=S,n++):(i=e,u===0&&m(ds)),i!==e?(l=He(),l!==e?(C=t,t=Ms(s,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&m(nt)),t;}function St(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),de.test(i)?n++:(i=e,u===0&&m(it)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),de.test(i)?n++:(i=e,u===0&&m(it));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&m(nt)),t;}function He(){let t,s,i,l,f;if(u++,t=n,s=n,i=r.charAt(n),be.test(i)?n++:(i=e,u===0&&m(hs)),i!==e){for(l=[],f=r.charAt(n),pe.test(f)?n++:(f=e,u===0&&m(ot));f!==e;)l.push(f),f=r.charAt(n),pe.test(f)?n++:(f=e,u===0&&m(ot));i=[i,l],s=i;}else n=s,s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&m(ps)),t;}function qe(){let t,s,i,l;return u++,t=n,s=Zs(),s!==e?(i=v(),l=At(),l!==e?(C=t,t=Us(s,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&m(ms)),t;}function Zs(){let t,s,i,l,f,g;return u++,t=n,r.charCodeAt(n)===91?(s=O,n++):(s=e,u===0&&m(bs)),s!==e?(i=v(),l=$t(),l!==e?(f=v(),r.charCodeAt(n)===93?(g=F,n++):(g=e,u===0&&m(Ss)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&m(ws)),t;}function $t(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),ee.test(i)?n++:(i=e,u===0&&m(at)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),ee.test(i)?n++:(i=e,u===0&&m(at));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&m($s)),t;}function At(){let t,s,i,l,f;for(u++,t=n,s=n,i=[],l=yt();l!==e;)i.push(l),l=n,f=v(),f=yt(),f===e?(n=l,l=e):l=f;if(s=r.substring(s,n),i=v(),l=Et(),l!==e?(C=n,f=Vs(s,l),f?f=void 0:f=e,f!==e?(C=t,t=Fs(s,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,s=n,i=[],l=Be();l!==e;)i.push(l),l=n,f=v(),f=Be(),f===e?(n=l,l=e):l=f;s=r.substring(s,n),C=t,s=js(s),t=s;}return u--,t===e&&(s=e,u===0&&m(As)),t;}function yt(){let t,s,i,l,f,g;return u++,t=n,s=n,u++,i=n,l=Et(),l!==e?(f=v(),g=kt(),g===e&&(g=r.charAt(n),Se.test(g)?n++:(g=e,u===0&&m(Es))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?s=void 0:(n=s,s=e),s!==e?(i=Be(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&m(ys)),t;}function Be(){let t,s,i;if(t=n,s=[],i=r.charAt(n),E.test(i)?n++:(i=e,u===0&&m(lt)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),E.test(i)?n++:(i=e,u===0&&m(lt));else s=e;return s!==e?t=r.substring(t,n):t=s,t;}function Et(){let t,s,i;return u++,t=n,s=vt(),s!==e?(r.substr(n,2)===ne?(i=ne,n+=2):(i=e,u===0&&m(ks)),i!==e?(C=t,t=zs(s)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=vt(),s!==e?(r.charCodeAt(n)===103?(i=Y,n++):(i=e,u===0&&m(Ts)),i===e&&(i=null),t=s):(n=t,t=e)),u--,t===e&&(s=e,u===0&&m(vs)),t;}function vt(){let t,s,i,l,f,g,A;if(u++,t=n,s=[],i=r.charAt(n),W.test(i)?n++:(i=e,u===0&&m(Te)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),W.test(i)?n++:(i=e,u===0&&m(Te));else s=e;if(s!==e){if(i=n,r.charCodeAt(n)===46?(l=ge,n++):(l=e,u===0&&m(xs)),l!==e){if(f=n,g=[],A=r.charAt(n),W.test(A)?n++:(A=e,u===0&&m(Te)),A!==e)for(;A!==e;)g.push(A),A=r.charAt(n),W.test(A)?n++:(A=e,u===0&&m(Te));else g=e;g!==e?f=r.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),C=t,t=Hs();}else n=t,t=e;return u--,t===e&&(s=e,u===0&&m(Rs)),t;}function v(){let t,s;for(u++,t=[],s=r.charAt(n),L.test(s)?n++:(s=e,u===0&&m(ct));s!==e;)t.push(s),s=r.charAt(n),L.test(s)?n++:(s=e,u===0&&m(ct));return u--,t;}function kt(){let t,s;return t=n,u++,r.length>n?(s=r.charAt(n),n++):(s=e,u===0&&m(Cs)),u--,s===e?t=void 0:(n=t,t=e),t;}let Tt=!1;Ae=d();let Ge=Ae!==e&&n===r.length;function Rt(){throw Ae!==e&&n<r.length&&m(Ks()),gt(Re,K<r.length?Bs(K):null,K<r.length?ye(K,K+1):ye(K,K));}if(o.peg$library)return{peg$result:Ae,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Re,peg$maxFailPos:K,peg$success:Ge,peg$throw:Ge?void 0:Rt};if(Ge)return Ae;Rt();}var tr={isTrackWeight:()=>!1},sr=new V("PARSER_CONFIG_PROVIDER"),_e=(()=>{class r{config=k(sr,{optional:!0})??tr;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return q(e,this.makeOptions("Condition"));}parseQuestion(e){return q(e,this.makeOptions("Question"));}parseItem(e){return q(e,this.makeOptions("Item"));}parseEffects(e){return q(e,this.makeOptions("Effects"));}parseRule(e){return q(e,this.makeOptions("Rule"));}parseRules(e){try{return q(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Error parsing rules"),a instanceof fe){let d=a.location.start.line.toString(),h=a.location.start.column.toString();c.push(" at line ",d," column ",h),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){q(e,this.makeOptions("VariableName"));}validateQuestionString(e){q(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){q(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){q(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return q(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||r)();};static ɵprov=Ce({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();var Ke=(()=>{class r{parser=k(_e);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(d=>d.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let d of c.items)a.add(d.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(h=>this.renameVariable(e,a,h));if(c instanceof se)return c.variable===e?new se(c.question,a):c;if(c instanceof ae)return new ae(this.renameVariable(e,a,c.condition),c.questions.map(h=>this.renameVariable(e,a,h)),c.items);if(c instanceof X)return c.variable===e?new X(a):c;if(c instanceof le)return new le(this.renameVariable(e,a,c.not));if(c instanceof ce)return new ce(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof ue)return new ue(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let d=c;throw new Error("Unknown item type: "+d);}filterActive(e){let a=e.rules.filter(d=>d.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((d,h)=>D(x({},d),{[h]:e.model[h]}),{[ve.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof ae)return this.contains(e.condition,a)||e.questions.some(h=>this.contains(h,a))||e.items.some(h=>this.contains(h,a));if(e instanceof se)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof re)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof X)return e.variable.toLowerCase().includes(c);if(e instanceof le)return this.contains(e.not,a);if(e instanceof ce)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof ue)return this.contains(e.left,a)||this.contains(e.right,a);let d=e;throw new Error("Unknown item type: "+d);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((d,h)=>{let b;return this.parser.isTrackWeight()?b=h.weight?1:0:b=this.parser.forceParseWeight(h.name)?1:0,{items:d.items+1,weights:d.weights+b};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||r)();};static ɵprov=Ce({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();function rr(r,o){return Object.entries(r).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=x(x({},e[a]),c),e),{});}var ke=new V("RESET_SIGNAL",{providedIn:"root",factory:()=>N(!1)}),Pe=class r{state;triggerReset=k(ke);constructor(o){this.state=o;}static builder(){return new r({});}extend(o){return new r(rr(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function Mt(r,o){if(typeof r!=typeof o)return!1;if(r&&o&&typeof r=="object"){let e=Object.keys(r),a=Object.keys(o);return e.length===a.length&&e.every(c=>Mt(r[c],o[c]));}return r===o;}function Wt(r,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[r]??o;}function nr(r,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);Mt(o,e)?delete c[r]:o===null?c[r]=void 0:c[r]=o,this.setItem("state",JSON.stringify(c));}function Ut(r,o,e){let a=k(ke),c=N(Wt.call(r,o,e));return _(()=>{let d=c();d!==Wt.call(r,o,e)&&nr.call(r,o,d,e);},{manualCleanup:!0}),_(()=>{a()&&c.set(e);}),c;}var Q=(r,o)=>Ut(localStorage,r,o),We=(r,o)=>Ut(sessionStorage,r,o);var j=Q,Vt=["en","de"],Ft=()=>{let r=j("categorySorting","alphabetically"),o=j("trackWeight",!1);return _(()=>{o()===!1&&r()==="weight"&&r.set("alphabetically");}),{config:{categorySorting:r,trackWeight:o,skipItems:j("skipItems",!1),fadeOutDisabledRules:j("fadeOutDisabledRules",!1),highlightVariableStatus:j("highlightVariableStatus",!1),refactorVariables:j("refactorVariables",!0),confirmRuleDeletion:j("confirmRuleDeletion",!0),rulesTemplate:j("rulesTemplate","default"),theme:j("theme","system"),fontSize:j("fontSize","normal"),accessibility:j("accessibility","accessible"),animations:j("animations",!0),language:j("language","auto"),exportReminder:j("exportReminder",!1)}};};var jt=({config:{language:r}})=>{let o=N(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:y(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:y(()=>{let e=r();return e==="auto"?navigator.languages.map(d=>d.split("-")[0]).find(d=>Vt.includes(d))??"en":e;})}};};var zt=(r,o)=>We(r,o),Ht=()=>({clipboard:{items:zt("clipboardItems",[]),questions:zt("clipboardQuestions",[])}});var qt=Q;function ir(r){return"cat-"+r.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Ye=class extends re{original;checked;skipped;colored;visible;constructor(o,e,a,c,d){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c,this.visible=d;}};function Qe(){return{answers:{},checkedItems:[],skippedItems:[],collapsedCategories:[],answersLocked:!1,hideCompleted:!1,statsVisible:void 0,createdAt:Date.now(),modifiedAt:Date.now()};}var Bt=({rules:{parsed:r,raw:o},config:{categorySorting:e,skipItems:a}})=>{let c=qt("packlistSessions",[Qe(),void 0,void 0,void 0]),d=qt("currentPacklistSessionIndex",0),h=y(()=>c()[d()]??Qe());function b(p){c.update(w=>{let I=p(w[d()]??Qe());return w.map(($e,T)=>T===d()?I:$e);});}function P(p){b(w=>D(x({},w),{sessionName:p,modifiedAt:Date.now()}));}function B(p,w){b(I=>D(x({},I),{answers:D(x({},I.answers),{[p]:w}),modifiedAt:Date.now()}));}function G(){b(p=>D(x({},p),{answersLocked:!p.answersLocked,modifiedAt:Date.now()}));}function z(){b(p=>D(x({},p),{hideCompleted:!p.hideCompleted,modifiedAt:Date.now()}));}function $(p){b(w=>D(x({},w),{statsVisible:p,modifiedAt:Date.now()}));}let S=We("askedWeightTracking",void 0),O=k(Ke),F=y(()=>O.filterActive({rules:r.value(),model:h().answers})),ne=y(()=>F().rules),Y=y(()=>ne().flatMap(p=>p.items)),ge=y(()=>Y().filter(p=>h().checkedItems.includes(p.id())));function J(p){h().checkedItems.includes(p.id())?b(w=>D(x({},w),{checkedItems:w.checkedItems.filter(I=>I!==p.id()),modifiedAt:Date.now()})):b(w=>D(x({},w),{checkedItems:[...w.checkedItems,p.id()],modifiedAt:Date.now()}));}let de=y(()=>Y().filter(p=>h().skippedItems.includes(p.id())));function be(p){a()&&(h().skippedItems.includes(p.id())?b(w=>D(x({},w),{skippedItems:w.skippedItems.filter(I=>I!==p.id()),modifiedAt:Date.now()})):b(w=>D(x({},w),{skippedItems:[...w.skippedItems,p.id()],modifiedAt:Date.now()})));}function pe(p){h().collapsedCategories.includes(p)?b(w=>D(x({},w),{collapsedCategories:w.collapsedCategories.filter(I=>I!==p),modifiedAt:Date.now()})):b(w=>D(x({},w),{collapsedCategories:[...w.collapsedCategories,p],modifiedAt:Date.now()}));}let ee=N([]);function Se(p){(ee().length!==p.length||!p.every(w=>ee().includes(w)))&&ee.set(p);}let E=y(()=>{function p(T){return{id:ir(T.category),name:T.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:h().collapsedCategories.includes(T.category),colored:h().statsVisible==="distribution"};}let w=Y().reduce((T,R)=>{T[R.category]||(T[R.category]=p(R));let Z=a()&&de().includes(R),oe=!Z&&ge().includes(R),Me=h().statsVisible==="heaviestItems"&&ee().includes(R.id()),Ue=h().hideCompleted?!oe&&!Z:!0;return T[R.category].items.push(new Ye(R,oe,Z,Me,Ue)),oe&&(T[R.category].checkedItems++,T[R.category].checkedWeight+=R.weight??0),Z||(T[R.category].totalItems++,T[R.category].totalWeight+=R.weight??0),T;},{}),$e=y(()=>{let T=e();return T==="alphabetically"?(R,Z)=>R.name.localeCompare(Z.name):T==="weight"?(R,Z)=>Z.totalWeight-R.totalWeight:()=>0;})();return Object.entries(w).map(T=>T[1]).toSorted((T,R)=>$e(T,R));}),W=y(()=>Object.entries(E()).reduce((p,[,w])=>(p.totalItems+=w.totalItems,p.checkedItems+=w.checkedItems,p.totalWeight+=w.totalWeight,p.checkedWeight+=w.checkedWeight,p),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));function L(){b(p=>D(x({},p),{answersLocked:!1,hideCompleted:!1,statsVisible:void 0,modifiedAt:Date.now()}));}let ie=!0;return _(()=>{o.hasValue()&&o.value()&&(ie?ie=!1:L());}),{rules:{categories:y(()=>O.extractCategories(r.value())),variables:y(()=>O.extractVariables(r.value()))},active:{rules:ne,answers:y(()=>F().model),questions:y(()=>ne().flatMap(p=>p.questions))},packlist:{sessions:y(()=>c().filter((p,w)=>w!==0).map((p,w)=>p?{index:w+1,sessionName:p.sessionName,modifiedAt:p.modifiedAt}:void 0)),clearSlot(p){c.update(w=>{let I=[...w];return I[p]=void 0,I;});},currentSlot:d,copySessionToSlot(p){c.update(w=>{let I=[...w];return I[p]=D(x({},h()),{modifiedAt:Date.now()}),I;});},sessionName:y(()=>h().sessionName),setSessionName:P,answers:y(()=>h().answers),updateAnswer:B,model:E,stats:W,toggleCheckedItem:J,toggleSkippedItem:be,colorItems:Se,toggleCategoryCollapse:pe,isAnswersLocked:y(()=>h().answersLocked),toggleAnswersLock:G,isHideCompleted:y(()=>h().hideCompleted),toggleHideCompleted:z,isStatsVisible:y(()=>h().statsVisible),setStatsVisible:$,askedWeightTracking:S}};};var Je=(r,o)=>{let e=k(De),a=k(Ie),c=k(ke),d=N(void 0);return e.events.pipe(xe(h=>h instanceof Oe),xt(()=>a.snapshot.queryParams[r]??o)).subscribe(h=>{h!==""&&d.set(h);}),_(()=>{let h=d()||void 0;h===o&&(h=void 0),a.snapshot.queryParams[r]!==h&&e.navigate([],{queryParams:{[r]:h},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),_(()=>{c()&&d.set(o);}),d;};var or={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});},"config#session->restore"(){this.router.navigate(["/session"],{queryParams:{type:"restore"}});},"config#session->new"(){this.router.navigate(["/session"],{queryParams:{type:"new"}});}},Gt=()=>{let r=k(De),o=k(Ie),e=Je("rulesMode","view"),a=It(o.fragment,{requireSync:!0}),c=Ne(()=>a()??void 0);_(()=>{let b=c();b!==a()&&r.navigate([],{fragment:b,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let d=k(Ot),h=N(d.path());return r.events.pipe(xe(b=>b instanceof Oe)).subscribe(()=>{d.path()!==h()&&h.set(d.path());}),{router:{rulesMode:e,filterRulesQuery:Je("filterRulesQuery",void 0),path:h.asReadonly(),fragment:c,go:b=>{or[b].call({router:r,rulesMode:e});}}};};var Ze=class{parser;raw;trackWeight;setCurrentTitle;value=N([]);error=N(void 0);status=N("idle");constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,_(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let d=this.parser.parseRules(this.raw.value());d.title&&this.setCurrentTitle(d.title),this.value.set(d),this.error.set(void 0),this.status.set("resolved");}catch(d){this.error.set(d),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},Kt=({config:{trackWeight:r},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new Ze(k(_e),o,r,e);return{rules:{parsed:a.asReadonly(),hasError:y(()=>a.status()==="error"||o.status()==="error"),isLoading:y(()=>a.isLoading()||o.isLoading())}};};var Qt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Yt={name:"GitHub Gist",test:r=>Qt.test(r),transform:r=>{let o=Qt.exec(r);if(!o)return r;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var Xe=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Jt=new Xe();var Zt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,ar={name:"Google Drive",needsCORS:!0,test:r=>Zt.test(r),transform:r=>{let o=Zt.exec(r);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:r;}},Xt=ar;var lr={name:"Pastebin",needsCORS:!0,test:r=>r.startsWith("https://pastebin.com/")&&!r.includes("/raw/"),transform:r=>r.replace("https://pastebin.com/","https://pastebin.com/raw/")},es=lr;var cr=[Yt,Jt,Xt,es];function ts(r,o){if(r){let e=cr.find(a=>a.test(r));if(e){let a=e.transform(r);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return r;}var ss=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var rs=`# Beispiel Packliste

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
`;var ns=`# Example Packlist

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
`;var is=`:- [Neu] Dies ist dein erster Gegenstand;
`;var os=`:- [New] This is your first item;
`;var as=`# Example Logic Demonstration

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
`;var et=new V("BACKPACKING_RULES_TEMPLATE");function mr(){return ss;}var tt=new V("DEFAULT_RULES_TEMPLATE");function wr(r){return r.startsWith("de")?rs:ns;}var st=new V("EMPTY_RULES_TEMPLATE");function br(r){return r.startsWith("de")?is:os;}var rt=new V("LOGIC_RULES_TEMPLATE");function Sr(){return as;}function ni(){return Ct([{provide:et,useFactory:mr,deps:[Ee]},{provide:tt,useFactory:wr,deps:[Ee]},{provide:st,useFactory:br,deps:[Ee]},{provide:rt,useFactory:Sr,deps:[Ee]}]);}var ls=new V("CAPACITOR_HTTP_REQUEST_MODE");function $r(r){switch(r){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var cs=({config:{rulesTemplate:r}})=>{let o=Q("rulesMode","template"),e=Q("rules",void 0),a=y(()=>e()!==void 0),c=y(()=>{let E=e();if(E)return Ar(E).toString(16);}),d=Q("lastExportHash",void 0),h=Q("lastExportDate",void 0),b=()=>{d.set(c()),h.set(new Date().getTime());},P=N(new Date().getTime());_(()=>{e(),P.set(new Date().getTime());});let B=k(tt),G=k(st),z=k(rt),$=k(et),S=y(()=>{switch(r()){case"empty":return G;case"logic":return z;case"backpacking":return $;default:return B;}}),O=Q("remoteHistory",[]),F=Q("remoteHistoryTitle",{}),ne=function(E){O.update(W=>W.filter(L=>L!==E)),F.update(W=>{let L=x({},W);return delete L[E],L;});},Y=Ne(()=>o()==="remote"?O()[0]:void 0),ge=k(ls,{optional:!0})??"cors",J=Nt({params:()=>({mode:o(),rawLocal:e(),remote:Y(),template:S()}),loader:({params:E})=>{switch(E.mode){case"local":return Promise.resolve(E.rawLocal);case"template":return Promise.resolve(E.template);case"remote":if(E.remote){if(!E.remote.startsWith("http"))throw new Error("Invalid URL");let W=ts(E.remote,ge==="cors");return Dt.get({url:W,webFetchExtra:{mode:ge}}).then(L=>{if(L.status>=200&&L.status<300)return O.update(ie=>[E.remote,...ie.filter(p=>p!==E.remote)]),L.data;{let ie=[["HTTP Error",L.status.toString()].join(" "),$r(L.status)].join(": ");throw new Error(ie);}});}else return Promise.resolve(void 0);}}}),de=function(E){Y()!==E&&(o.set("remote"),Y.set(E));},be=function(E){let W=Y();o()==="remote"&&W&&F.update(L=>D(x({},L),{[W]:E}));},pe=function(E){o.set("local"),e.set(E);},ee=function(){e.set(J.value()),o.set("local"),b();},Se=function(){J.reload();};return{rules:{mode:o,raw:J.asReadonly(),reload:Se,lastAction:P.asReadonly(),hash:c,exportNeeded:y(()=>o()==="local"&&c()!==d()),markAsCurrent:b,localRulesAvailable:a},export:{lastDate:h.asReadonly()},localRules:{updateRules:pe,copyFromCurrent:ee},remoteRules:{load:de,setCurrentTitle:be,history:y(()=>O().map(E=>({url:E,title:F()[E]}))),removeFromHistory:ne}};},Ar=function(r,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,d;c<r.length;c++)d=r.charCodeAt(c),e=Math.imul(e^d,2654435761),a=Math.imul(a^d,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var us=()=>({serviceWorker:{status:N("init")}});function yr(){return Pe.builder().extend(Gt).extend(Ht).extend(us).extend(Ft).extend(jt).extend(cs).extend(Kt).extend(Bt);}var fs=new V("STATE_BUILDER",{providedIn:"root",factory:()=>yr()}),Er=new V("GLOBAL_STATE",{providedIn:"root",factory:()=>k(fs).build()}),vr=new V("RESET_SWITCH",{providedIn:"root",factory:()=>{let r=k(fs);return async()=>{await r.reset();};}});export{Cr as a,Le as b,Nr as c,ae as d,se as e,re as f,X as g,Dr as h,ve as i,le as j,ce as k,ue as l,fe as m,sr as n,_e as o,Ke as p,ni as q,ls as r,Er as s,vr as t};/**i18n:1e46c8204f38df38d095c36b85005d70b26c53f2afa257bd2af7cc57ec9b3308*/