import{d as It}from"./chunk-2c5cb6d3.js";import{b as Nt,k as Ot,l as Ie,m as Le,o as De}from"./chunk-daf74bd7.js";import{$ as M,B as Ce,Y as Ne,ba as y,ca as xt,pa as C,r as kt,uc as ye,wc as A,xc as D,yc as Oe,zc as Ct}from"./chunk-864a163a.js";import{a as se,b as xe}from"./chunk-e39c6cd7.js";function xr(r){let o=r.title?.trim();return(o?`# ${o}

`:"")+r.map(a=>a.toString()).map(a=>a+";").join(`

`);}function _e(r,o,e=-1){if(!r)return"0g";let a=(e<0?r/1e3:(r/1e3).toFixed(e)).toString()+"kg",c=r.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Cr(r,o){return _e(r,void 0,1)+" / "+_e(o,void 0,1);}var re=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof ve)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},Z=class{question;variable;static NEW_QUESTION_NAME="New Question";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function Lt(r){return r?r.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var X=class{category;name;weight;static NEW_ITEM_NAME="New Item";static NEW_CATEGORY_NAME="New";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${Lt(this.category)}-${Lt(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+_e(this.weight)),o;}},Y=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Ir=(()=>{class r extends Y{static string="please_select";constructor(){super(r.string);}}return r;})(),ve=(()=>{class r extends Y{static string="always";constructor(){super(r.string);}evaluate(){return!0;}}return r;})(),ne=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},ie=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},oe=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Zs(r,o){let e=o.filter(c=>c instanceof Z),a=o.filter(c=>c instanceof X);return new re(r??new ve(),e,a);}function Dt(r){return r.length===1?r[0]:new ie(r[0],Dt(r.slice(1)));}function _t(r){return r.length===1?r[0]:new oe(r[0],_t(r.slice(1)));}var ae=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(I=>I.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let p=this.location.start,h=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,v=this.location.source+":"+h.line+":"+h.column;if(a){let I=this.location.end,j="".padEnd(h.line.toString().length," "),U=a[p.line-1],b=(p.line===I.line?I.column:U.length+1)-p.column||1;e+=`
 --> `+v+`
`+j+` |
`+h.line+" | "+U+`
`+j+" | "+"".padEnd(p.column-1," ")+"".padEnd(b,"^");}else e+=`
 at `+v;}return e;}static buildMessage(o,e){function a(b){return b.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p(b){return c?b.replace(c,w=>"\\u{"+a(w)+"}"):b;}function h(b){return p(b.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}function v(b){return p(b.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}let I={literal(b){return'"'+h(b.text)+'"';},class(b){let w=b.parts.map(N=>Array.isArray(N)?v(N[0])+"-"+v(N[1]):v(N));return"["+(b.inverted?"^":"")+w.join("")+"]"+(b.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(b){return b.description;}};function j(b){return I[b.type](b);}function U(b){let w=b.map(j);if(w.sort(),w.length>0){let N=1;for(let _=1;_<w.length;_++)w[_-1]!==w[_]&&(w[N]=w[_],N++);w.length=N;}switch(w.length){case 1:return w[0];case 2:return w[0]+" or "+w[1];default:return w.slice(0,-1).join(", ")+", or "+w[w.length-1];}}function V(b){return b?'"'+h(b)+'"':"end of input";}return"Expected "+U(o)+" but "+V(e)+" found.";}};function H(r,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:gt,Rule:je,Condition:dt,Effects:bt,Question:ze,Item:Be,VariableName:He,QuestionString:wt,ItemNameAndWeight:St,CategoryName:$t},p=gt,h="#",v=";",I=":-",j="OR",U="AND",V="NOT",b=",",w="$",N="[",_="]",ce="kg",ee="g",ue=".",K=/^[^\n\r]/,fe=/^[^$,;#]/,te=/^[a-zA-Z]/,ge=/^[a-zA-Z0-9\-[\](){}_]/,le=/^[^\],;#[]/,we=/^[,;]/,S=/^[^ ,;#]/,L=/^[0-9]/,O=/^[ \t\n\r]/,m=P("title"),T=z("#",!1),q=J([`
`,"\r"],!0,!1,!1),Me=P("comment"),x=P("rule end"),R=z(";",!1),Q=P("rule"),$e=z(":-",!1),pe=P("condition"),Ue=z("OR",!1),us=z("AND",!1),Fe=z("NOT",!1),fs=z(",",!1),rt=P("question"),gs=z("$",!1),nt=J(["$",",",";","#"],!0,!1,!1),ps=P("variable name"),ds=J([["a","z"],["A","Z"]],!1,!1,!1),it=J([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),hs=P("item"),ms=P("category"),bs=z("[",!1),ws=z("]",!1),$s=P("category name"),ot=J(["]",",",";","#","["],!0,!1,!1),Ss=P("item name"),Es=P("word"),ys=J([",",";"],!1,!1,!1),at=J([" ",",",";","#"],!0,!1,!1),vs=P("weight"),Ts=z("kg",!1),As=z("g",!1),Rs=P("number"),Re=J([["0","9"]],!1,!1,!1),ks=z(".",!1),lt=J([" ","	",`
`,"\r"],!1,!1,!1),xs=qs();function Cs(t,s){return s.title=t?.trim(),s.rulesContainComments=At,s;}function Ns(t){if(t.trim().length)return t.trim();}function Os(t){if(t.trim().length)return At=!0,t.trim();}function Is(t,s){return Zs(t,s);}function Ls(t){return _t(t);}function Ds(t){return Dt(t);}function _s(t){return new ne(t);}function Ps(t){return new Y(t);}function Ws(t,s){return new Z(t.trim(),s.trim());}function Ms(t,s){let{name:i,weight:l}=s;return new X(t.trim(),i,l);}function Us(t,s){return o.trackWeight;}function Fs(t,s){let i=t.trim();return i.length||ct("item name"),{name:i,weight:s};}function js(t){let s=t.trim();return s.length||ct("item name"),{name:s,weight:void 0};}function Vs(t){return t*1e3;}function zs(){return parseFloat(Hs());}let n=o.peg$currPos|0,k=n,de=[{line:1,column:1}],G=n,ke=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,Se;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=c[o.startRule];}function Hs(){return r.substring(k,n);}function Tr(){return k;}function Ar(){return{source:a,start:k,end:n};}function Rr(){return Ee(k,n);}function ct(t,s){throw s=s!==void 0?s:Ee(k,n),ft([P(t)],r.substring(k,n),s);}function kr(t,s){throw s=s!==void 0?s:Ee(k,n),Ks(t,s);}function Bs(t=n){let s=r.codePointAt(t);return s===void 0?"":String.fromCodePoint(s);}function z(t,s){return{type:"literal",text:t,ignoreCase:s};}function J(t,s,i,l){return{type:"class",parts:t,inverted:s,ignoreCase:i,unicode:l};}function qs(){return{type:"any"};}function Gs(){return{type:"end"};}function P(t){return{type:"other",description:t};}function ut(t){let s=de[t],i;if(s)return s;if(t>=de.length)i=de.length-1;else for(i=t;!de[--i];);for(s=de[i],s={line:s.line,column:s.column};i<t;)r.charCodeAt(i)===10?(s.line++,s.column=1):s.column++,i++;return de[t]=s,s;}function Ee(t,s,i){let l=ut(t),f=ut(s),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:s,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function d(t){n<G||(n>G&&(G=n,ke=[]),ke.push(t));}function Ks(t,s){return new ae(t,null,null,s);}function ft(t,s,i){return new ae(ae.buildMessage(t,s),t,s,i);}function gt(){let t,s,i,l,f,g,$,W;for(t=n,s=E(),i=Qs(),i===e&&(i=null),l=E(),f=[],g=je();g!==e;)f.push(g),g=n,$=pt(),$!==e?($=je(),$===e?(n=g,g=e):g=$):g=$;return g=pt(),g===e&&(g=null),$=E(),W=Tt(),W!==e?(k=t,t=Cs(i,f)):(n=t,t=e),t;}function Qs(){let t,s,i,l,f,g;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&d(T)),s!==e){if(i=E(),l=n,f=[],g=r.charAt(n),K.test(g)?n++:(g=e,u===0&&d(q)),g!==e)for(;g!==e;)f.push(g),g=r.charAt(n),K.test(g)?n++:(g=e,u===0&&d(q));else f=e;f!==e?l=r.substring(l,n):l=f,l!==e?(f=E(),k=t,t=Ns(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(m)),t;}function he(){let t,s,i,l,f;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&d(T)),s!==e){if(i=n,l=[],f=r.charAt(n),K.test(f)?n++:(f=e,u===0&&d(q)),f!==e)for(;f!==e;)l.push(f),f=r.charAt(n),K.test(f)?n++:(f=e,u===0&&d(q));else l=e;l!==e?i=r.substring(i,n):i=l,i!==e?(l=E(),k=t,t=Os(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(Me)),t;}function pt(){let t,s,i,l,f,g;if(u++,t=n,s=E(),r.charCodeAt(n)===59?(i=v,n++):(i=e,u===0&&d(R)),i!==e){for(l=E(),f=[],g=he();g!==e;)f.push(g),g=he();g=E(),s=[s,i,l,f,g],t=s;}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(x)),t;}function je(){let t,s,i,l,f,g,$,W;for(u++,t=n,s=[],i=he();i!==e;)s.push(i),i=he();return i=E(),l=dt(),l===e&&(l=null),f=E(),r.substr(n,2)===I?(g=I,n+=2):(g=e,u===0&&d($e)),g!==e?($=E(),W=bt(),k=t,t=Is(l,W)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(Q)),t;}function dt(){let t,s;return u++,t=Ys(),u--,t===e&&(s=e,u===0&&d(pe)),t;}function Ys(){let t,s,i,l,f,g,$,W;for(u++,t=n,s=n,i=[],l=ht();l!==e;)i.push(l),l=n,f=n,g=E(),r.substr(n,2)===j?($=j,n+=2):($=e,u===0&&d(Ue)),$!==e?(W=E(),g=[g,$,W],f=g):(n=f,f=e),f!==e?(f=ht(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(k=t,s=Ls(s)),t=s,u--,t===e&&(s=e,u===0&&d(pe)),t;}function ht(){let t,s,i,l,f,g,$,W;for(u++,t=n,s=n,i=[],l=Ve();l!==e;)i.push(l),l=n,f=n,g=E(),r.substr(n,3)===U?($=U,n+=3):($=e,u===0&&d(us)),$!==e?(W=E(),g=[g,$,W],f=g):(n=f,f=e),f!==e?(f=Ve(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(k=t,s=Ds(s)),t=s,u--,t===e&&(s=e,u===0&&d(pe)),t;}function Ve(){let t,s,i,l,f,g;return u++,t=n,r.substr(n,3)===V?(s=V,n+=3):(s=e,u===0&&d(Fe)),s!==e?(i=E(),r.substr(n,3)===V?(l=V,n+=3):(l=e,u===0&&d(Fe)),l!==e?(f=E(),g=Ve(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r.substr(n,3)===V?(s=V,n+=3):(s=e,u===0&&d(Fe)),s!==e?(i=E(),l=mt(),l!==e?(k=t,t=_s(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=mt(),s!==e?t=s:(n=t,t=e))),u--,t===e&&(s=e,u===0&&d(pe)),t;}function mt(){let t,s;return t=n,s=He(),s!==e&&(k=t,s=Ps(s)),t=s,t;}function bt(){let t,s,i,l,f,g,$,W,me;for(t=n,s=[],i=ze(),i===e&&(i=Be());i!==e;){if(s.push(i),i=n,l=n,f=E(),r.charCodeAt(n)===44?(g=b,n++):(g=e,u===0&&d(fs)),g!==e){for($=E(),W=[],me=he();me!==e;)W.push(me),me=he();me=E(),f=[f,g,$,W,me],l=f;}else n=l,l=e;l!==e?(l=ze(),l===e&&(l=Be()),l===e?(n=i,i=e):i=l):i=l;}return t=s,t;}function ze(){let t,s,i,l;return u++,t=n,s=wt(),s!==e?(r.charCodeAt(n)===36?(i=w,n++):(i=e,u===0&&d(gs)),i!==e?(l=He(),l!==e?(k=t,t=Ws(s,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(rt)),t;}function wt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),fe.test(i)?n++:(i=e,u===0&&d(nt)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),fe.test(i)?n++:(i=e,u===0&&d(nt));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d(rt)),t;}function He(){let t,s,i,l,f;if(u++,t=n,s=n,i=r.charAt(n),te.test(i)?n++:(i=e,u===0&&d(ds)),i!==e){for(l=[],f=r.charAt(n),ge.test(f)?n++:(f=e,u===0&&d(it));f!==e;)l.push(f),f=r.charAt(n),ge.test(f)?n++:(f=e,u===0&&d(it));i=[i,l],s=i;}else n=s,s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d(ps)),t;}function Be(){let t,s,i,l;return u++,t=n,s=Js(),s!==e?(i=E(),l=St(),l!==e?(k=t,t=Ms(s,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(hs)),t;}function Js(){let t,s,i,l,f,g;return u++,t=n,r.charCodeAt(n)===91?(s=N,n++):(s=e,u===0&&d(bs)),s!==e?(i=E(),l=$t(),l!==e?(f=E(),r.charCodeAt(n)===93?(g=_,n++):(g=e,u===0&&d(ws)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(ms)),t;}function $t(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),le.test(i)?n++:(i=e,u===0&&d(ot)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),le.test(i)?n++:(i=e,u===0&&d(ot));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d($s)),t;}function St(){let t,s,i,l,f;for(u++,t=n,s=n,i=[],l=Et();l!==e;)i.push(l),l=n,f=E(),f=Et(),f===e?(n=l,l=e):l=f;if(s=r.substring(s,n),i=E(),l=yt(),l!==e?(k=n,f=Us(s,l),f?f=void 0:f=e,f!==e?(k=t,t=Fs(s,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,s=n,i=[],l=qe();l!==e;)i.push(l),l=n,f=E(),f=qe(),f===e?(n=l,l=e):l=f;s=r.substring(s,n),k=t,s=js(s),t=s;}return u--,t===e&&(s=e,u===0&&d(Ss)),t;}function Et(){let t,s,i,l,f,g;return u++,t=n,s=n,u++,i=n,l=yt(),l!==e?(f=E(),g=Tt(),g===e&&(g=r.charAt(n),we.test(g)?n++:(g=e,u===0&&d(ys))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?s=void 0:(n=s,s=e),s!==e?(i=qe(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(Es)),t;}function qe(){let t,s,i;if(t=n,s=[],i=r.charAt(n),S.test(i)?n++:(i=e,u===0&&d(at)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),S.test(i)?n++:(i=e,u===0&&d(at));else s=e;return s!==e?t=r.substring(t,n):t=s,t;}function yt(){let t,s,i;return u++,t=n,s=vt(),s!==e?(r.substr(n,2)===ce?(i=ce,n+=2):(i=e,u===0&&d(Ts)),i!==e?(k=t,t=Vs(s)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=vt(),s!==e?(r.charCodeAt(n)===103?(i=ee,n++):(i=e,u===0&&d(As)),i===e&&(i=null),t=s):(n=t,t=e)),u--,t===e&&(s=e,u===0&&d(vs)),t;}function vt(){let t,s,i,l,f,g,$;if(u++,t=n,s=[],i=r.charAt(n),L.test(i)?n++:(i=e,u===0&&d(Re)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),L.test(i)?n++:(i=e,u===0&&d(Re));else s=e;if(s!==e){if(i=n,r.charCodeAt(n)===46?(l=ue,n++):(l=e,u===0&&d(ks)),l!==e){if(f=n,g=[],$=r.charAt(n),L.test($)?n++:($=e,u===0&&d(Re)),$!==e)for(;$!==e;)g.push($),$=r.charAt(n),L.test($)?n++:($=e,u===0&&d(Re));else g=e;g!==e?f=r.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),k=t,t=zs();}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(Rs)),t;}function E(){let t,s;for(u++,t=[],s=r.charAt(n),O.test(s)?n++:(s=e,u===0&&d(lt));s!==e;)t.push(s),s=r.charAt(n),O.test(s)?n++:(s=e,u===0&&d(lt));return u--,t;}function Tt(){let t,s;return t=n,u++,r.length>n?(s=r.charAt(n),n++):(s=e,u===0&&d(xs)),u--,s===e?t=void 0:(n=t,t=e),t;}let At=!1;Se=p();let Ge=Se!==e&&n===r.length;function Rt(){throw Se!==e&&n<r.length&&d(Gs()),ft(ke,G<r.length?Bs(G):null,G<r.length?Ee(G,G+1):Ee(G,G));}if(o.peg$library)return{peg$result:Se,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:ke,peg$maxFailPos:G,peg$success:Ge,peg$throw:Ge?void 0:Rt};if(Ge)return Se;Rt();}var er={isTrackWeight:()=>!1},tr=new M("PARSER_CONFIG_PROVIDER"),Pe=(()=>{class r{config=y(tr,{optional:!0})??er;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return H(e,this.makeOptions("Condition"));}parseQuestion(e){return H(e,this.makeOptions("Question"));}parseItem(e){return H(e,this.makeOptions("Item"));}parseEffects(e){return H(e,this.makeOptions("Effects"));}parseRule(e){return H(e,this.makeOptions("Rule"));}parseRules(e){try{return H(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Error parsing rules"),a instanceof ae){let p=a.location.start.line.toString(),h=a.location.start.column.toString();c.push(" at line ",p," column ",h),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){H(e,this.makeOptions("VariableName"));}validateQuestionString(e){H(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){H(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){H(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return H(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||r)();};static ɵprov=Ne({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();var Ke=(()=>{class r{parser=y(Pe);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let p of c.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(h=>this.renameVariable(e,a,h));if(c instanceof Z)return c.variable===e?new Z(c.question,a):c;if(c instanceof re)return new re(this.renameVariable(e,a,c.condition),c.questions.map(h=>this.renameVariable(e,a,h)),c.items);if(c instanceof Y)return c.variable===e?new Y(a):c;if(c instanceof ne)return new ne(this.renameVariable(e,a,c.not));if(c instanceof ie)return new ie(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof oe)return new oe(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let p=c;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((p,h)=>xe(se({},p),{[h]:e.model[h]}),{[ve.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof re)return this.contains(e.condition,a)||e.questions.some(h=>this.contains(h,a))||e.items.some(h=>this.contains(h,a));if(e instanceof Z)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof X)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof Y)return e.variable.toLowerCase().includes(c);if(e instanceof ne)return this.contains(e.not,a);if(e instanceof ie)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof oe)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((p,h)=>{let v;return this.parser.isTrackWeight()?v=h.weight?1:0:v=this.parser.forceParseWeight(h.name)?1:0,{items:p.items+1,weights:p.weights+v};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||r)();};static ɵprov=Ne({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();function sr(r,o){return Object.entries(r).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=se(se({},e[a]),c),e),{});}var Te=new M("RESET_SIGNAL",{providedIn:"root",factory:()=>C(!1)}),We=class r{state;triggerReset=y(Te);constructor(o){this.state=o;}static builder(){return new r({});}extend(o){return new r(sr(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function Wt(r,o){if(typeof r!=typeof o)return!1;if(r&&o&&typeof r=="object"){let e=Object.keys(r),a=Object.keys(o);return e.length===a.length&&e.every(c=>Wt(r[c],o[c]));}return r===o;}function Pt(r,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[r]??o;}function rr(r,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);Wt(o,e)?delete c[r]:o===null?c[r]=void 0:c[r]=o,this.setItem("state",JSON.stringify(c));}function Mt(r,o,e){let a=y(Te),c=C(Pt.call(r,o,e));return D(()=>{let p=c();p!==Pt.call(r,o,e)&&rr.call(r,o,p,e);},{manualCleanup:!0}),D(()=>{a()&&c.set(e);}),c;}var B=(r,o)=>Mt(localStorage,r,o),Ae=(r,o)=>Mt(sessionStorage,r,o);var F=B,Ut=["en","de"],Ft=()=>{let r=F("categorySorting","alphabetically"),o=F("trackWeight",!1);return D(()=>{o()===!1&&r()==="weight"&&r.set("alphabetically");}),{config:{categorySorting:r,trackWeight:o,skipItems:F("skipItems",!1),fadeOutDisabledRules:F("fadeOutDisabledRules",!1),highlightVariableStatus:F("highlightVariableStatus",!1),refactorVariables:F("refactorVariables",!0),confirmRuleDeletion:F("confirmRuleDeletion",!0),rulesTemplate:F("rulesTemplate","default"),theme:F("theme","system"),fontSize:F("fontSize","normal"),accessibility:F("accessibility","accessible"),animations:F("animations",!0),language:F("language","auto"),exportReminder:F("exportReminder",!1)}};};var jt=({config:{language:r}})=>{let o=C(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:A(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:A(()=>{let e=r();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>Ut.includes(p))??"en":e;})}};};var Vt=(r,o)=>Ae(r,o),zt=()=>({clipboard:{items:Vt("clipboardItems",[]),questions:Vt("clipboardQuestions",[])}});var be=B;function nr(r){return"cat-"+r.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Qe=class extends X{original;checked;skipped;colored;visible;constructor(o,e,a,c,p){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c,this.visible=p;}},Ht=({rules:{parsed:r,raw:o},config:{categorySorting:e,skipItems:a}})=>{let c=be("answers",{}),p=be("checkedItems",[]),h=be("skippedItems",[]),v=be("collapsedCategories",[]),I=be("answersLocked",!1),j=be("hideCompleted",!1),U=Ae("statsVisible",void 0),V=Ae("askedWeightTracking",void 0),b=y(Ke),w=A(()=>b.filterActive({rules:r.value(),model:c()})),N=A(()=>w().rules),_=A(()=>N().flatMap(m=>m.items)),ce=A(()=>_().filter(m=>p().includes(m.id()))),ee=m=>{p().includes(m.id())?p.update(T=>T.filter(q=>q!==m.id())):p.update(T=>[...T,m.id()]);},ue=A(()=>_().filter(m=>h().includes(m.id()))),K=m=>{a()&&(h().includes(m.id())?h.update(T=>T.filter(q=>q!==m.id())):h.update(T=>[...T,m.id()]));},fe=m=>{v().includes(m)?v.update(T=>T.filter(q=>q!==m)):v.update(T=>[...T,m]);},te=C([]),ge=m=>{(te().length!==m.length||!m.every(T=>te().includes(T)))&&te.set(m);},le=A(()=>{function m(x){return{id:nr(x.category),name:x.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:v().includes(x.category),colored:U()==="distribution"};}let T=_().reduce((x,R)=>{x[R.category]||(x[R.category]=m(R));let Q=a()&&ue().includes(R),$e=!Q&&ce().includes(R),pe=U()==="heaviestItems"&&te().includes(R.id()),Ue=j()?!$e&&!Q:!0;return x[R.category].items.push(new Qe(R,$e,Q,pe,Ue)),$e&&(x[R.category].checkedItems++,x[R.category].checkedWeight+=R.weight??0),Q||(x[R.category].totalItems++,x[R.category].totalWeight+=R.weight??0),x;},{}),Me=A(()=>{let x=e();return x==="alphabetically"?(R,Q)=>R.name.localeCompare(Q.name):x==="weight"?(R,Q)=>Q.totalWeight-R.totalWeight:()=>0;})();return Object.entries(T).map(x=>x[1]).toSorted((x,R)=>Me(x,R));}),we=A(()=>Object.entries(le()).reduce((m,[,T])=>(m.totalItems+=T.totalItems,m.checkedItems+=T.checkedItems,m.totalWeight+=T.totalWeight,m.checkedWeight+=T.checkedWeight,m),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0})),S=B("sessionName",void 0),L=()=>{I.set(!1),j.set(!1),U.set(void 0);},O=!0;return D(()=>{o.hasValue()&&o.value()&&(O?O=!1:L());}),{rules:{categories:A(()=>b.extractCategories(r.value())),variables:A(()=>b.extractVariables(r.value()))},active:{rules:N,answers:A(()=>w().model),questions:A(()=>N().flatMap(m=>m.questions))},packlist:{sessionName:S,answers:c,model:le,stats:we,toggleCheckedItem:ee,toggleSkippedItem:K,colorItems:ge,toggleCategoryCollapse:fe,answersLocked:I,hideCompleted:j,statsVisible:U,askedWeightTracking:V,reset:()=>{S.set(void 0),c.set({}),p.set([]),h.set([]),v.set([]),L();}}};};var Ye=(r,o)=>{let e=y(De),a=y(Le),c=y(Te),p=C(void 0);return e.events.pipe(Ce(h=>h instanceof Ie),kt(()=>a.snapshot.queryParams[r]??o)).subscribe(h=>{h!==""&&p.set(h);}),D(()=>{let h=p()||void 0;h===o&&(h=void 0),a.snapshot.queryParams[r]!==h&&e.navigate([],{queryParams:{[r]:h},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),D(()=>{c()&&p.set(o);}),p;};var ir={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},Bt=()=>{let r=y(De),o=y(Le),e=Ye("rulesMode","view"),a=Ot(o.fragment,{requireSync:!0}),c=Oe(()=>a()??void 0);D(()=>{let v=c();v!==a()&&r.navigate([],{fragment:v,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=y(Nt),h=C(p.path());return r.events.pipe(Ce(v=>v instanceof Ie)).subscribe(()=>{p.path()!==h()&&h.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Ye("filterRulesQuery",void 0),path:h.asReadonly(),fragment:c,go:v=>{ir[v].call({router:r,rulesMode:e});}}};};var Je=class{parser;raw;trackWeight;setCurrentTitle;value=C([]);error=C(void 0);status=C("idle");constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,D(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let p=this.parser.parseRules(this.raw.value());p.title&&this.setCurrentTitle(p.title),this.value.set(p),this.error.set(void 0),this.status.set("resolved");}catch(p){this.error.set(p),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},qt=({config:{trackWeight:r},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new Je(y(Pe),o,r,e);return{rules:{parsed:a.asReadonly(),hasError:A(()=>a.status()==="error"||o.status()==="error"),isLoading:A(()=>a.isLoading()||o.isLoading())}};};var Gt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Kt={name:"GitHub Gist",test:r=>Gt.test(r),transform:r=>{let o=Gt.exec(r);if(!o)return r;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var Ze=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Qt=new Ze();var Yt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,or={name:"Google Drive",needsCORS:!0,test:r=>Yt.test(r),transform:r=>{let o=Yt.exec(r);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:r;}},Jt=or;var ar={name:"Pastebin",needsCORS:!0,test:r=>r.startsWith("https://pastebin.com/")&&!r.includes("/raw/"),transform:r=>r.replace("https://pastebin.com/","https://pastebin.com/raw/")},Zt=ar;var lr=[Kt,Qt,Jt,Zt];function Xt(r,o){if(r){let e=lr.find(a=>a.test(r));if(e){let a=e.transform(r);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return r;}var es=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var ts=`# Beispiel Packliste

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
`;var ss=`# Example Packlist

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
`;var rs=`:- [Neu] Dies ist dein erster Gegenstand;
`;var ns=`:- [New] This is your first item;
`;var is=`# Example Logic Demonstration

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
`;var Xe=new M("BACKPACKING_RULES_TEMPLATE");function hr(){return es;}var et=new M("DEFAULT_RULES_TEMPLATE");function mr(r){return r.startsWith("de")?ts:ss;}var tt=new M("EMPTY_RULES_TEMPLATE");function br(r){return r.startsWith("de")?rs:ns;}var st=new M("LOGIC_RULES_TEMPLATE");function wr(){return is;}function si(){return xt([{provide:Xe,useFactory:hr,deps:[ye]},{provide:et,useFactory:mr,deps:[ye]},{provide:tt,useFactory:br,deps:[ye]},{provide:st,useFactory:wr,deps:[ye]}]);}var os=new M("CAPACITOR_HTTP_REQUEST_MODE");function $r(r){switch(r){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var as=({config:{rulesTemplate:r}})=>{let o=B("rulesMode","template"),e=B("rules",void 0),a=A(()=>e()!==void 0),c=A(()=>{let S=e();if(S)return Sr(S).toString(16);}),p=B("lastExportHash",void 0),h=B("lastExportDate",void 0),v=()=>{p.set(c()),h.set(new Date().getTime());},I=C(new Date().getTime());D(()=>{e(),I.set(new Date().getTime());});let j=y(et),U=y(tt),V=y(st),b=y(Xe),w=A(()=>{switch(r()){case"empty":return U;case"logic":return V;case"backpacking":return b;default:return j;}}),N=B("remoteHistory",[]),_=B("remoteHistoryTitle",{}),ce=function(S){N.update(L=>L.filter(O=>O!==S)),_.update(L=>{let O=se({},L);return delete O[S],O;});},ee=Oe(()=>o()==="remote"?N()[0]:void 0),ue=y(os,{optional:!0})??"cors",K=Ct({params:()=>({mode:o(),rawLocal:e(),remote:ee(),template:w()}),loader:({params:S})=>{switch(S.mode){case"local":return Promise.resolve(S.rawLocal);case"template":return Promise.resolve(S.template);case"remote":if(S.remote){if(!S.remote.startsWith("http"))throw new Error("Invalid URL");let L=Xt(S.remote,ue==="cors");return It.get({url:L,webFetchExtra:{mode:ue}}).then(O=>{if(O.status>=200&&O.status<300)return N.update(m=>[S.remote,...m.filter(T=>T!==S.remote)]),O.data;{let m=[["HTTP Error",O.status.toString()].join(" "),$r(O.status)].join(": ");throw new Error(m);}});}else return Promise.resolve(void 0);}}}),fe=function(S){ee()!==S&&(o.set("remote"),ee.set(S));},te=function(S){let L=ee();o()==="remote"&&L&&_.update(O=>xe(se({},O),{[L]:S}));},ge=function(S){o.set("local"),e.set(S);},le=function(){e.set(K.value()),o.set("local"),v();},we=function(){K.reload();};return{rules:{mode:o,raw:K.asReadonly(),reload:we,lastAction:I.asReadonly(),hash:c,exportNeeded:A(()=>o()==="local"&&c()!==p()),markAsCurrent:v,localRulesAvailable:a},export:{lastDate:h.asReadonly()},localRules:{updateRules:ge,copyFromCurrent:le},remoteRules:{load:fe,setCurrentTitle:te,history:A(()=>N().map(S=>({url:S,title:_()[S]}))),removeFromHistory:ce}};},Sr=function(r,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,p;c<r.length;c++)p=r.charCodeAt(c),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var ls=()=>({serviceWorker:{status:C("init")}});function Er(){return We.builder().extend(Bt).extend(zt).extend(ls).extend(Ft).extend(jt).extend(as).extend(qt).extend(Ht);}var cs=new M("STATE_BUILDER",{providedIn:"root",factory:()=>Er()}),yr=new M("GLOBAL_STATE",{providedIn:"root",factory:()=>y(cs).build()}),vr=new M("RESET_SWITCH",{providedIn:"root",factory:()=>{let r=y(cs);return async()=>{await r.reset();};}});export{xr as a,_e as b,Cr as c,re as d,Z as e,X as f,Y as g,Ir as h,ve as i,ne as j,ie as k,oe as l,ae as m,tr as n,Pe as o,Ke as p,si as q,os as r,yr as s,vr as t};/**i18n:02b940d651cca38199bf4688131265cf0357a49eef7b8ac774e63035febcc1d3*/