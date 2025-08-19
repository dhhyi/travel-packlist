import{d as Nt}from"./chunk-2c5cb6d3.js";import{b as xt,k as Ct,l as Ce,m as Ne,o as Oe}from"./chunk-daf74bd7.js";import{$ as U,B as Te,Y as Re,ba as k,ca as Tt,pa as N,r as At,uc as Se,wc as y,xc as L,yc as xe,zc as Rt}from"./chunk-864a163a.js";import{a as C,b as I}from"./chunk-e39c6cd7.js";function Cr(r){let o=r.title?.trim();return(o?`# ${o}

`:"")+r.map(a=>a.toString()).map(a=>a+";").join(`

`);}function Ie(r,o,e=-1){if(!r)return"0g";let a=(e<0?r/1e3:(r/1e3).toFixed(e)).toString()+"kg",l=r.toString()+"g";return o?o==="kg"?a:l:a.length<=l.length?a:l;}function Nr(r,o){return Ie(r,void 0,1)+" / "+Ie(o,void 0,1);}var se=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof Ee)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let l=e[a];a>0&&o.push(","),o.push(`
`,"   ",l);}return o.join("");}},X=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function Ot(r){return r?r.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var ee=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${Ot(this.category)}-${Ot(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+Ie(this.weight)),o;}},Y=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Lr=(()=>{class r extends Y{static string="please_select";constructor(){super(r.string);}}return r;})(),Ee=(()=>{class r extends Y{static string="always";constructor(){super(r.string);}evaluate(){return!0;}}return r;})(),re=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},ne=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},ie=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Zs(r,o){let e=o.filter(l=>l instanceof X),a=o.filter(l=>l instanceof ee);return new se(r??new Ee(),e,a);}function It(r){return r.length===1?r[0]:new ne(r[0],It(r.slice(1)));}function Lt(r){return r.length===1?r[0]:new ie(r[0],Lt(r.slice(1)));}var oe=class extends SyntaxError{constructor(o,e,a,l){super(o),this.expected=e,this.found=a,this.location=l,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,l=o.find(D=>D.source===this.location.source);l&&(a=l.text.split(/\r\n|\n|\r/g));let p=this.location.start,w=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,A=this.location.source+":"+w.line+":"+w.column;if(a){let D=this.location.end,H="".padEnd(w.line.toString().length," "),B=a[p.line-1],$=(p.line===D.line?D.column:B.length+1)-p.column||1;e+=`
 --> `+A+`
`+H+` |
`+w.line+" | "+B+`
`+H+" | "+"".padEnd(p.column-1," ")+"".padEnd($,"^");}else e+=`
 at `+A;}return e;}static buildMessage(o,e){function a($){return $.codePointAt(0).toString(16).toUpperCase();}let l=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p($){return l?$.replace(l,b=>"\\u{"+a(b)+"}"):$;}function w($){return p($.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,b=>"\\x0"+a(b)).replace(/[\x10-\x1F\x7F-\x9F]/g,b=>"\\x"+a(b)));}function A($){return p($.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,b=>"\\x0"+a(b)).replace(/[\x10-\x1F\x7F-\x9F]/g,b=>"\\x"+a(b)));}let D={literal($){return'"'+w($.text)+'"';},class($){let b=$.parts.map(O=>Array.isArray(O)?A(O[0])+"-"+A(O[1]):A(O));return"["+($.inverted?"^":"")+b.join("")+"]"+($.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other($){return $.description;}};function H($){return D[$.type]($);}function B($){let b=$.map(H);if(b.sort(),b.length>0){let O=1;for(let F=1;F<b.length;F++)b[F-1]!==b[F]&&(b[O]=b[F],O++);b.length=O;}switch(b.length){case 1:return b[0];case 2:return b[0]+" or "+b[1];default:return b.slice(0,-1).join(", ")+", or "+b[b.length-1];}}function _($){return $?'"'+w($)+'"':"end of input";}return"Expected "+B(o)+" but "+_(e)+" found.";}};function z(r,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,l={Rules:ut,Rule:Ue,Condition:gt,Effects:ht,Question:Fe,Item:ze,VariableName:je,QuestionString:mt,ItemNameAndWeight:bt,CategoryName:wt},p=ut,w="#",A=";",D=":-",H="OR",B="AND",_="NOT",$=",",b="$",O="[",F="]",le="kg",te="g",ce=".",K=/^[^\n\r]/,J=/^[^$,;#]/,he=/^[a-zA-Z]/,ae=/^[a-zA-Z0-9\-[\](){}_]/,ue=/^[^\],;#[]/,me=/^[,;]/,E=/^[^ ,;#]/,d=/^[0-9]/,m=/^[ \t\n\r]/,P=W("title"),fe=j("#",!1),T=Z([`
`,"\r"],!0,!1,!1),R=W("comment"),Q=W("rule end"),we=j(";",!1),Pe=W("rule"),We=j(":-",!1),ve=W("condition"),cs=j("OR",!1),us=j("AND",!1),Me=j("NOT",!1),fs=j(",",!1),tt=W("question"),gs=j("$",!1),st=Z(["$",",",";","#"],!0,!1,!1),ps=W("variable name"),ds=Z([["a","z"],["A","Z"]],!1,!1,!1),rt=Z([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),hs=W("item"),ms=W("category"),ws=j("[",!1),bs=j("]",!1),$s=W("category name"),nt=Z(["]",",",";","#","["],!0,!1,!1),Ss=W("item name"),Es=W("word"),ys=Z([",",";"],!1,!1,!1),it=Z([" ",",",";","#"],!0,!1,!1),vs=W("weight"),ks=j("kg",!1),As=j("g",!1),Ts=W("number"),ke=Z([["0","9"]],!1,!1,!1),Rs=j(".",!1),ot=Z([" ","	",`
`,"\r"],!1,!1,!1),xs=qs();function Cs(t,s){return s.title=t?.trim(),s.rulesContainComments=vt,s;}function Ns(t){if(t.trim().length)return t.trim();}function Os(t){if(t.trim().length)return vt=!0,t.trim();}function Is(t,s){return Zs(t,s);}function Ls(t){return Lt(t);}function Ds(t){return It(t);}function _s(t){return new re(t);}function Ps(t){return new Y(t);}function Ws(t,s){return new X(t.trim(),s.trim());}function Ms(t,s){let{name:i,weight:c}=s;return new ee(t.trim(),i,c);}function Us(t,s){return o.trackWeight;}function Vs(t,s){let i=t.trim();return i.length||at("item name"),{name:i,weight:s};}function Fs(t){let s=t.trim();return s.length||at("item name"),{name:s,weight:void 0};}function js(t){return t*1e3;}function zs(){return parseFloat(Hs());}let n=o.peg$currPos|0,x=n,ge=[{line:1,column:1}],q=n,Ae=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,be;if(o.startRule){if(!(o.startRule in l))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=l[o.startRule];}function Hs(){return r.substring(x,n);}function Ar(){return x;}function Tr(){return{source:a,start:x,end:n};}function Rr(){return $e(x,n);}function at(t,s){throw s=s!==void 0?s:$e(x,n),ct([W(t)],r.substring(x,n),s);}function xr(t,s){throw s=s!==void 0?s:$e(x,n),Ks(t,s);}function Bs(t=n){let s=r.codePointAt(t);return s===void 0?"":String.fromCodePoint(s);}function j(t,s){return{type:"literal",text:t,ignoreCase:s};}function Z(t,s,i,c){return{type:"class",parts:t,inverted:s,ignoreCase:i,unicode:c};}function qs(){return{type:"any"};}function Gs(){return{type:"end"};}function W(t){return{type:"other",description:t};}function lt(t){let s=ge[t],i;if(s)return s;if(t>=ge.length)i=ge.length-1;else for(i=t;!ge[--i];);for(s=ge[i],s={line:s.line,column:s.column};i<t;)r.charCodeAt(i)===10?(s.line++,s.column=1):s.column++,i++;return ge[t]=s,s;}function $e(t,s,i){let c=lt(t),f=lt(s),g={source:a,start:{offset:t,line:c.line,column:c.column},end:{offset:s,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function h(t){n<q||(n>q&&(q=n,Ae=[]),Ae.push(t));}function Ks(t,s){return new oe(t,null,null,s);}function ct(t,s,i){return new oe(oe.buildMessage(t,s),t,s,i);}function ut(){let t,s,i,c,f,g,S,M;for(t=n,s=v(),i=Qs(),i===e&&(i=null),c=v(),f=[],g=Ue();g!==e;)f.push(g),g=n,S=ft(),S!==e?(S=Ue(),S===e?(n=g,g=e):g=S):g=S;return g=ft(),g===e&&(g=null),S=v(),M=yt(),M!==e?(x=t,t=Cs(i,f)):(n=t,t=e),t;}function Qs(){let t,s,i,c,f,g;if(u++,t=n,r.charCodeAt(n)===35?(s=w,n++):(s=e,u===0&&h(fe)),s!==e){if(i=v(),c=n,f=[],g=r.charAt(n),K.test(g)?n++:(g=e,u===0&&h(T)),g!==e)for(;g!==e;)f.push(g),g=r.charAt(n),K.test(g)?n++:(g=e,u===0&&h(T));else f=e;f!==e?c=r.substring(c,n):c=f,c!==e?(f=v(),x=t,t=Ns(c)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(P)),t;}function pe(){let t,s,i,c,f;if(u++,t=n,r.charCodeAt(n)===35?(s=w,n++):(s=e,u===0&&h(fe)),s!==e){if(i=n,c=[],f=r.charAt(n),K.test(f)?n++:(f=e,u===0&&h(T)),f!==e)for(;f!==e;)c.push(f),f=r.charAt(n),K.test(f)?n++:(f=e,u===0&&h(T));else c=e;c!==e?i=r.substring(i,n):i=c,i!==e?(c=v(),x=t,t=Os(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(R)),t;}function ft(){let t,s,i,c,f,g;if(u++,t=n,s=v(),r.charCodeAt(n)===59?(i=A,n++):(i=e,u===0&&h(we)),i!==e){for(c=v(),f=[],g=pe();g!==e;)f.push(g),g=pe();g=v(),s=[s,i,c,f,g],t=s;}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(Q)),t;}function Ue(){let t,s,i,c,f,g,S,M;for(u++,t=n,s=[],i=pe();i!==e;)s.push(i),i=pe();return i=v(),c=gt(),c===e&&(c=null),f=v(),r.substr(n,2)===D?(g=D,n+=2):(g=e,u===0&&h(We)),g!==e?(S=v(),M=ht(),x=t,t=Is(c,M)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(Pe)),t;}function gt(){let t,s;return u++,t=Ys(),u--,t===e&&(s=e,u===0&&h(ve)),t;}function Ys(){let t,s,i,c,f,g,S,M;for(u++,t=n,s=n,i=[],c=pt();c!==e;)i.push(c),c=n,f=n,g=v(),r.substr(n,2)===H?(S=H,n+=2):(S=e,u===0&&h(cs)),S!==e?(M=v(),g=[g,S,M],f=g):(n=f,f=e),f!==e?(f=pt(),f===e?(n=c,c=e):c=f):c=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(x=t,s=Ls(s)),t=s,u--,t===e&&(s=e,u===0&&h(ve)),t;}function pt(){let t,s,i,c,f,g,S,M;for(u++,t=n,s=n,i=[],c=Ve();c!==e;)i.push(c),c=n,f=n,g=v(),r.substr(n,3)===B?(S=B,n+=3):(S=e,u===0&&h(us)),S!==e?(M=v(),g=[g,S,M],f=g):(n=f,f=e),f!==e?(f=Ve(),f===e?(n=c,c=e):c=f):c=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(x=t,s=Ds(s)),t=s,u--,t===e&&(s=e,u===0&&h(ve)),t;}function Ve(){let t,s,i,c,f,g;return u++,t=n,r.substr(n,3)===_?(s=_,n+=3):(s=e,u===0&&h(Me)),s!==e?(i=v(),r.substr(n,3)===_?(c=_,n+=3):(c=e,u===0&&h(Me)),c!==e?(f=v(),g=Ve(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r.substr(n,3)===_?(s=_,n+=3):(s=e,u===0&&h(Me)),s!==e?(i=v(),c=dt(),c!==e?(x=t,t=_s(c)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=dt(),s!==e?t=s:(n=t,t=e))),u--,t===e&&(s=e,u===0&&h(ve)),t;}function dt(){let t,s;return t=n,s=je(),s!==e&&(x=t,s=Ps(s)),t=s,t;}function ht(){let t,s,i,c,f,g,S,M,de;for(t=n,s=[],i=Fe(),i===e&&(i=ze());i!==e;){if(s.push(i),i=n,c=n,f=v(),r.charCodeAt(n)===44?(g=$,n++):(g=e,u===0&&h(fs)),g!==e){for(S=v(),M=[],de=pe();de!==e;)M.push(de),de=pe();de=v(),f=[f,g,S,M,de],c=f;}else n=c,c=e;c!==e?(c=Fe(),c===e&&(c=ze()),c===e?(n=i,i=e):i=c):i=c;}return t=s,t;}function Fe(){let t,s,i,c;return u++,t=n,s=mt(),s!==e?(r.charCodeAt(n)===36?(i=b,n++):(i=e,u===0&&h(gs)),i!==e?(c=je(),c!==e?(x=t,t=Ws(s,c)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(tt)),t;}function mt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),J.test(i)?n++:(i=e,u===0&&h(st)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),J.test(i)?n++:(i=e,u===0&&h(st));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&h(tt)),t;}function je(){let t,s,i,c,f;if(u++,t=n,s=n,i=r.charAt(n),he.test(i)?n++:(i=e,u===0&&h(ds)),i!==e){for(c=[],f=r.charAt(n),ae.test(f)?n++:(f=e,u===0&&h(rt));f!==e;)c.push(f),f=r.charAt(n),ae.test(f)?n++:(f=e,u===0&&h(rt));i=[i,c],s=i;}else n=s,s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&h(ps)),t;}function ze(){let t,s,i,c;return u++,t=n,s=Js(),s!==e?(i=v(),c=bt(),c!==e?(x=t,t=Ms(s,c)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(hs)),t;}function Js(){let t,s,i,c,f,g;return u++,t=n,r.charCodeAt(n)===91?(s=O,n++):(s=e,u===0&&h(ws)),s!==e?(i=v(),c=wt(),c!==e?(f=v(),r.charCodeAt(n)===93?(g=F,n++):(g=e,u===0&&h(bs)),g!==e?t=c:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(ms)),t;}function wt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),ue.test(i)?n++:(i=e,u===0&&h(nt)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),ue.test(i)?n++:(i=e,u===0&&h(nt));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&h($s)),t;}function bt(){let t,s,i,c,f;for(u++,t=n,s=n,i=[],c=$t();c!==e;)i.push(c),c=n,f=v(),f=$t(),f===e?(n=c,c=e):c=f;if(s=r.substring(s,n),i=v(),c=St(),c!==e?(x=n,f=Us(s,c),f?f=void 0:f=e,f!==e?(x=t,t=Vs(s,c)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,s=n,i=[],c=He();c!==e;)i.push(c),c=n,f=v(),f=He(),f===e?(n=c,c=e):c=f;s=r.substring(s,n),x=t,s=Fs(s),t=s;}return u--,t===e&&(s=e,u===0&&h(Ss)),t;}function $t(){let t,s,i,c,f,g;return u++,t=n,s=n,u++,i=n,c=St(),c!==e?(f=v(),g=yt(),g===e&&(g=r.charAt(n),me.test(g)?n++:(g=e,u===0&&h(ys))),g!==e?(c=[c,f,g],i=c):(n=i,i=e)):(n=i,i=e),u--,i===e?s=void 0:(n=s,s=e),s!==e?(i=He(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(Es)),t;}function He(){let t,s,i;if(t=n,s=[],i=r.charAt(n),E.test(i)?n++:(i=e,u===0&&h(it)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),E.test(i)?n++:(i=e,u===0&&h(it));else s=e;return s!==e?t=r.substring(t,n):t=s,t;}function St(){let t,s,i;return u++,t=n,s=Et(),s!==e?(r.substr(n,2)===le?(i=le,n+=2):(i=e,u===0&&h(ks)),i!==e?(x=t,t=js(s)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=Et(),s!==e?(r.charCodeAt(n)===103?(i=te,n++):(i=e,u===0&&h(As)),i===e&&(i=null),t=s):(n=t,t=e)),u--,t===e&&(s=e,u===0&&h(vs)),t;}function Et(){let t,s,i,c,f,g,S;if(u++,t=n,s=[],i=r.charAt(n),d.test(i)?n++:(i=e,u===0&&h(ke)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),d.test(i)?n++:(i=e,u===0&&h(ke));else s=e;if(s!==e){if(i=n,r.charCodeAt(n)===46?(c=ce,n++):(c=e,u===0&&h(Rs)),c!==e){if(f=n,g=[],S=r.charAt(n),d.test(S)?n++:(S=e,u===0&&h(ke)),S!==e)for(;S!==e;)g.push(S),S=r.charAt(n),d.test(S)?n++:(S=e,u===0&&h(ke));else g=e;g!==e?f=r.substring(f,n):f=g,f!==e?(c=[c,f],i=c):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),x=t,t=zs();}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(Ts)),t;}function v(){let t,s;for(u++,t=[],s=r.charAt(n),m.test(s)?n++:(s=e,u===0&&h(ot));s!==e;)t.push(s),s=r.charAt(n),m.test(s)?n++:(s=e,u===0&&h(ot));return u--,t;}function yt(){let t,s;return t=n,u++,r.length>n?(s=r.charAt(n),n++):(s=e,u===0&&h(xs)),u--,s===e?t=void 0:(n=t,t=e),t;}let vt=!1;be=p();let Be=be!==e&&n===r.length;function kt(){throw be!==e&&n<r.length&&h(Gs()),ct(Ae,q<r.length?Bs(q):null,q<r.length?$e(q,q+1):$e(q,q));}if(o.peg$library)return{peg$result:be,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Ae,peg$maxFailPos:q,peg$success:Be,peg$throw:Be?void 0:kt};if(Be)return be;kt();}var er={isTrackWeight:()=>!1},tr=new U("PARSER_CONFIG_PROVIDER"),Le=(()=>{class r{config=k(tr,{optional:!0})??er;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return z(e,this.makeOptions("Condition"));}parseQuestion(e){return z(e,this.makeOptions("Question"));}parseItem(e){return z(e,this.makeOptions("Item"));}parseEffects(e){return z(e,this.makeOptions("Effects"));}parseRule(e){return z(e,this.makeOptions("Rule"));}parseRules(e){try{return z(e,this.makeOptions("Rules"));}catch(a){let l=[];if(l.push("Fehler beim Parsen der Regeln"),a instanceof oe){let p=a.location.start.line.toString(),w=a.location.start.column.toString();l.push(" at line ",p," column ",w),l.push(":",`
`,a.message);}else a instanceof Error&&l.push(a.message);throw new Error(l.join(""));}}validateVariableName(e){z(e,this.makeOptions("VariableName"));}validateQuestionString(e){z(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){z(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){z(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return z(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||r)();};static ɵprov=Re({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();var qe=(()=>{class r{parser=k(Le);extractVariables(e){return e.reduce((a,l)=>[...a,...l.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let l of e)for(let p of l.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,l){if(l instanceof Array)return l.map(w=>this.renameVariable(e,a,w));if(l instanceof X)return l.variable===e?new X(l.question,a):l;if(l instanceof se)return new se(this.renameVariable(e,a,l.condition),l.questions.map(w=>this.renameVariable(e,a,w)),l.items);if(l instanceof Y)return l.variable===e?new Y(a):l;if(l instanceof re)return new re(this.renameVariable(e,a,l.not));if(l instanceof ne)return new ne(this.renameVariable(e,a,l.left),this.renameVariable(e,a,l.right));if(l instanceof ie)return new ie(this.renameVariable(e,a,l.left),this.renameVariable(e,a,l.right));let p=l;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),l=this.extractVariables(a).reduce((p,w)=>I(C({},p),{[w]:e.model[w]}),{[Ee.string]:!0});return a.length===e.rules.length?{model:l,rules:a}:this.filterActive({model:l,rules:a});}contains(e,a){let l=a.toLowerCase();if(e instanceof se)return this.contains(e.condition,a)||e.questions.some(w=>this.contains(w,a))||e.items.some(w=>this.contains(w,a));if(e instanceof X)return e.question.toLowerCase().includes(l)||e.variable.toLowerCase().includes(l);if(e instanceof ee)return e.category.toLowerCase().includes(l)||e.name.toLowerCase().includes(l);if(e instanceof Y)return e.variable.toLowerCase().includes(l);if(e instanceof re)return this.contains(e.not,a);if(e instanceof ne)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof ie)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,l)=>l.items.reduce((p,w)=>{let A;return this.parser.isTrackWeight()?A=w.weight?1:0:A=this.parser.forceParseWeight(w.name)?1:0,{items:p.items+1,weights:p.weights+A};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||r)();};static ɵprov=Re({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();function sr(r,o){return Object.entries(r).concat(Object.entries(o)).reduce((e,[a,l])=>(e[a]=C(C({},e[a]),l),e),{});}var ye=new U("RESET_SIGNAL",{providedIn:"root",factory:()=>N(!1)}),De=class r{state;triggerReset=k(ye);constructor(o){this.state=o;}static builder(){return new r({});}extend(o){return new r(sr(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function _t(r,o){if(typeof r!=typeof o)return!1;if(r&&o&&typeof r=="object"){let e=Object.keys(r),a=Object.keys(o);return e.length===a.length&&e.every(l=>_t(r[l],o[l]));}return r===o;}function Dt(r,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[r]??o;}function rr(r,o,e){let a=this.getItem("state")??"{}",l=JSON.parse(a);_t(o,e)?delete l[r]:o===null?l[r]=void 0:l[r]=o,this.setItem("state",JSON.stringify(l));}function Pt(r,o,e){let a=k(ye),l=N(Dt.call(r,o,e));return L(()=>{let p=l();p!==Dt.call(r,o,e)&&rr.call(r,o,p,e);},{manualCleanup:!0}),L(()=>{a()&&l.set(e);}),l;}var G=(r,o)=>Pt(localStorage,r,o),_e=(r,o)=>Pt(sessionStorage,r,o);var V=G,Wt=["en","de"],Mt=()=>{let r=V("categorySorting","alphabetically"),o=V("trackWeight",!1);return L(()=>{o()===!1&&r()==="weight"&&r.set("alphabetically");}),{config:{categorySorting:r,trackWeight:o,skipItems:V("skipItems",!1),fadeOutDisabledRules:V("fadeOutDisabledRules",!1),highlightVariableStatus:V("highlightVariableStatus",!1),refactorVariables:V("refactorVariables",!0),confirmRuleDeletion:V("confirmRuleDeletion",!0),rulesTemplate:V("rulesTemplate","default"),theme:V("theme","system"),fontSize:V("fontSize","normal"),accessibility:V("accessibility","accessible"),animations:V("animations",!0),language:V("language","auto"),exportReminder:V("exportReminder",!1)}};};var Ut=({config:{language:r}})=>{let o=N(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:y(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:y(()=>{let e=r();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>Wt.includes(p))??"en":e;})}};};var Vt=(r,o)=>_e(r,o),Ft=()=>({clipboard:{items:Vt("clipboardItems",[]),questions:Vt("clipboardQuestions",[])}});var nr=G;function ir(r){return"cat-"+r.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Ge=class extends ee{original;checked;skipped;colored;visible;constructor(o,e,a,l,p){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=l,this.visible=p;}};function jt(){return{sessionName:void 0,answers:{},checkedItems:[],skippedItems:[],collapsedCategories:[],answersLocked:!1,hideCompleted:!1,statsVisible:void 0};}var zt=({rules:{parsed:r,raw:o},config:{categorySorting:e,skipItems:a}})=>{let l=nr("packlistSession",jt());function p(d){l.update(m=>I(C({},m),{sessionName:d}));}function w(d,m){l.update(P=>I(C({},P),{answers:I(C({},P.answers),{[d]:m})}));}function A(){l.update(d=>I(C({},d),{answersLocked:!d.answersLocked}));}function D(){l.update(d=>I(C({},d),{hideCompleted:!d.hideCompleted}));}function H(d){l.update(m=>I(C({},m),{statsVisible:d}));}let B=_e("askedWeightTracking",void 0),_=k(qe),$=y(()=>_.filterActive({rules:r.value(),model:l().answers})),b=y(()=>$().rules),O=y(()=>b().flatMap(d=>d.items)),F=y(()=>O().filter(d=>l().checkedItems.includes(d.id())));function le(d){l().checkedItems.includes(d.id())?l.update(m=>I(C({},m),{checkedItems:m.checkedItems.filter(P=>P!==d.id())})):l.update(m=>I(C({},m),{checkedItems:[...m.checkedItems,d.id()]}));}let te=y(()=>O().filter(d=>l().skippedItems.includes(d.id())));function ce(d){a()&&(l().skippedItems.includes(d.id())?l.update(m=>I(C({},m),{skippedItems:m.skippedItems.filter(P=>P!==d.id())})):l.update(m=>I(C({},m),{skippedItems:[...m.skippedItems,d.id()]})));}function K(d){l().collapsedCategories.includes(d)?l.update(m=>I(C({},m),{collapsedCategories:m.collapsedCategories.filter(P=>P!==d)})):l.update(m=>I(C({},m),{collapsedCategories:[...m.collapsedCategories,d]}));}let J=N([]);function he(d){(J().length!==d.length||!d.every(m=>J().includes(m)))&&J.set(d);}let ae=y(()=>{function d(T){return{id:ir(T.category),name:T.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:l().collapsedCategories.includes(T.category),colored:l().statsVisible==="distribution"};}let m=O().reduce((T,R)=>{T[R.category]||(T[R.category]=d(R));let Q=a()&&te().includes(R),we=!Q&&F().includes(R),Pe=l().statsVisible==="heaviestItems"&&J().includes(R.id()),We=l().hideCompleted?!we&&!Q:!0;return T[R.category].items.push(new Ge(R,we,Q,Pe,We)),we&&(T[R.category].checkedItems++,T[R.category].checkedWeight+=R.weight??0),Q||(T[R.category].totalItems++,T[R.category].totalWeight+=R.weight??0),T;},{}),fe=y(()=>{let T=e();return T==="alphabetically"?(R,Q)=>R.name.localeCompare(Q.name):T==="weight"?(R,Q)=>Q.totalWeight-R.totalWeight:()=>0;})();return Object.entries(m).map(T=>T[1]).toSorted((T,R)=>fe(T,R));}),ue=y(()=>Object.entries(ae()).reduce((d,[,m])=>(d.totalItems+=m.totalItems,d.checkedItems+=m.checkedItems,d.totalWeight+=m.totalWeight,d.checkedWeight+=m.checkedWeight,d),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));function me(){l.update(d=>I(C({},d),{answersLocked:!1,hideCompleted:!1,statsVisible:void 0}));}let E=!0;return L(()=>{o.hasValue()&&o.value()&&(E?E=!1:me());}),{rules:{categories:y(()=>_.extractCategories(r.value())),variables:y(()=>_.extractVariables(r.value()))},active:{rules:b,answers:y(()=>$().model),questions:y(()=>b().flatMap(d=>d.questions))},packlist:{sessionName:y(()=>l().sessionName),setSessionName:p,answers:y(()=>l().answers),updateAnswer:w,model:ae,stats:ue,toggleCheckedItem:le,toggleSkippedItem:ce,colorItems:he,toggleCategoryCollapse:K,isAnswersLocked:y(()=>l().answersLocked),toggleAnswersLock:A,isHideCompleted:y(()=>l().hideCompleted),toggleHideCompleted:D,isStatsVisible:y(()=>l().statsVisible),setStatsVisible:H,askedWeightTracking:B,reset:()=>{l.set(jt());}}};};var Ke=(r,o)=>{let e=k(Oe),a=k(Ne),l=k(ye),p=N(void 0);return e.events.pipe(Te(w=>w instanceof Ce),At(()=>a.snapshot.queryParams[r]??o)).subscribe(w=>{w!==""&&p.set(w);}),L(()=>{let w=p()||void 0;w===o&&(w=void 0),a.snapshot.queryParams[r]!==w&&e.navigate([],{queryParams:{[r]:w},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),L(()=>{l()&&p.set(o);}),p;};var or={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},Ht=()=>{let r=k(Oe),o=k(Ne),e=Ke("rulesMode","view"),a=Ct(o.fragment,{requireSync:!0}),l=xe(()=>a()??void 0);L(()=>{let A=l();A!==a()&&r.navigate([],{fragment:A,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=k(xt),w=N(p.path());return r.events.pipe(Te(A=>A instanceof Ce)).subscribe(()=>{p.path()!==w()&&w.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Ke("filterRulesQuery",void 0),path:w.asReadonly(),fragment:l,go:A=>{or[A].call({router:r,rulesMode:e});}}};};var Qe=class{parser;raw;trackWeight;setCurrentTitle;value=N([]);error=N(void 0);status=N("idle");constructor(o,e,a,l){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=l,L(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let p=this.parser.parseRules(this.raw.value());p.title&&this.setCurrentTitle(p.title),this.value.set(p),this.error.set(void 0),this.status.set("resolved");}catch(p){this.error.set(p),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},Bt=({config:{trackWeight:r},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new Qe(k(Le),o,r,e);return{rules:{parsed:a.asReadonly(),hasError:y(()=>a.status()==="error"||o.status()==="error"),isLoading:y(()=>a.isLoading()||o.isLoading())}};};var qt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Gt={name:"GitHub Gist",test:r=>qt.test(r),transform:r=>{let o=qt.exec(r);if(!o)return r;let[,e,a,,l]=o;return l?`https://gist.githubusercontent.com/${e}/${a}/raw/${l}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var Ye=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Kt=new Ye();var Qt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,ar={name:"Google Drive",needsCORS:!0,test:r=>Qt.test(r),transform:r=>{let o=Qt.exec(r);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:r;}},Yt=ar;var lr={name:"Pastebin",needsCORS:!0,test:r=>r.startsWith("https://pastebin.com/")&&!r.includes("/raw/"),transform:r=>r.replace("https://pastebin.com/","https://pastebin.com/raw/")},Jt=lr;var cr=[Gt,Kt,Yt,Jt];function Zt(r,o){if(r){let e=cr.find(a=>a.test(r));if(e){let a=e.transform(r);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return r;}var Xt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var Je=new U("BACKPACKING_RULES_TEMPLATE");function mr(){return Xt;}var Ze=new U("DEFAULT_RULES_TEMPLATE");function wr(r){return r.startsWith("de")?es:ts;}var Xe=new U("EMPTY_RULES_TEMPLATE");function br(r){return r.startsWith("de")?ss:rs;}var et=new U("LOGIC_RULES_TEMPLATE");function $r(){return ns;}function ni(){return Tt([{provide:Je,useFactory:mr,deps:[Se]},{provide:Ze,useFactory:wr,deps:[Se]},{provide:Xe,useFactory:br,deps:[Se]},{provide:et,useFactory:$r,deps:[Se]}]);}var is=new U("CAPACITOR_HTTP_REQUEST_MODE");function Sr(r){switch(r){case 400:return"Ung\xFCltige Anfrage";case 401:return"Nicht autorisiert";case 403:return"Verboten";case 404:return"Nicht gefunden";case 500:return"interner Serverfehler";case 504:return"Zeit\xFCberschreitung";default:return;}}var os=({config:{rulesTemplate:r}})=>{let o=G("rulesMode","template"),e=G("rules",void 0),a=y(()=>e()!==void 0),l=y(()=>{let E=e();if(E)return Er(E).toString(16);}),p=G("lastExportHash",void 0),w=G("lastExportDate",void 0),A=()=>{p.set(l()),w.set(new Date().getTime());},D=N(new Date().getTime());L(()=>{e(),D.set(new Date().getTime());});let H=k(Ze),B=k(Xe),_=k(et),$=k(Je),b=y(()=>{switch(r()){case"empty":return B;case"logic":return _;case"backpacking":return $;default:return H;}}),O=G("remoteHistory",[]),F=G("remoteHistoryTitle",{}),le=function(E){O.update(d=>d.filter(m=>m!==E)),F.update(d=>{let m=C({},d);return delete m[E],m;});},te=xe(()=>o()==="remote"?O()[0]:void 0),ce=k(is,{optional:!0})??"cors",K=Rt({params:()=>({mode:o(),rawLocal:e(),remote:te(),template:b()}),loader:({params:E})=>{switch(E.mode){case"local":return Promise.resolve(E.rawLocal);case"template":return Promise.resolve(E.template);case"remote":if(E.remote){if(!E.remote.startsWith("http"))throw new Error("Invalid URL");let d=Zt(E.remote,ce==="cors");return Nt.get({url:d,webFetchExtra:{mode:ce}}).then(m=>{if(m.status>=200&&m.status<300)return O.update(P=>[E.remote,...P.filter(fe=>fe!==E.remote)]),m.data;{let P=[["HTTP Fehler",m.status.toString()].join(" "),Sr(m.status)].join(": ");throw new Error(P);}});}else return Promise.resolve(void 0);}}}),J=function(E){te()!==E&&(o.set("remote"),te.set(E));},he=function(E){let d=te();o()==="remote"&&d&&F.update(m=>I(C({},m),{[d]:E}));},ae=function(E){o.set("local"),e.set(E);},ue=function(){e.set(K.value()),o.set("local"),A();},me=function(){K.reload();};return{rules:{mode:o,raw:K.asReadonly(),reload:me,lastAction:D.asReadonly(),hash:l,exportNeeded:y(()=>o()==="local"&&l()!==p()),markAsCurrent:A,localRulesAvailable:a},export:{lastDate:w.asReadonly()},localRules:{updateRules:ae,copyFromCurrent:ue},remoteRules:{load:J,setCurrentTitle:he,history:y(()=>O().map(E=>({url:E,title:F()[E]}))),removeFromHistory:le}};},Er=function(r,o=0){let e=3735928559^o,a=1103547991^o;for(let l=0,p;l<r.length;l++)p=r.charCodeAt(l),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var as=()=>({serviceWorker:{status:N("init")}});function yr(){return De.builder().extend(Ht).extend(Ft).extend(as).extend(Mt).extend(Ut).extend(os).extend(Bt).extend(zt);}var ls=new U("STATE_BUILDER",{providedIn:"root",factory:()=>yr()}),vr=new U("GLOBAL_STATE",{providedIn:"root",factory:()=>k(ls).build()}),kr=new U("RESET_SWITCH",{providedIn:"root",factory:()=>{let r=k(ls);return async()=>{await r.reset();};}});export{Cr as a,Ie as b,Nr as c,se as d,X as e,ee as f,Y as g,Lr as h,Ee as i,re as j,ne as k,ie as l,oe as m,tr as n,Le as o,qe as p,ni as q,is as r,vr as s,kr as t};/**i18n:02b940d651cca38199bf4688131265cf0357a49eef7b8ac774e63035febcc1d3*/