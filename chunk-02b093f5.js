import{d as xt}from"./chunk-0cdf4dca.js";import{b as Rt,k as kt,l as Ce,m as Ne,o as Oe}from"./chunk-55ade91b.js";import{$ as M,B as Re,Y as ke,ba as y,ca as Tt,pa as C,r as vt,uc as me,wc as R,xc as L,yc as xe,zc as At}from"./chunk-f397f3d0.js";import{a as ee,b as Ae}from"./chunk-ecf0d82d.js";function xr(r){let o=r.title?.trim();return(o?`# ${o}

`:"")+r.map(a=>a.toString()).map(a=>a+";").join(`

`);}function Ie(r,o,e=-1){if(!r)return"0g";let a=(e<0?r/1e3:(r/1e3).toFixed(e)).toString()+"kg",c=r.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Cr(r,o){return Ie(r,void 0,1)+" / "+Ie(o,void 0,1);}var te=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof be)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},J=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function Ct(r){return r?r.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var Z=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${Ct(this.category)}-${Ct(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+Ie(this.weight)),o;}},K=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Ir=(()=>{class r extends K{static string="please_select";constructor(){super(r.string);}}return r;})(),be=(()=>{class r extends K{static string="always";constructor(){super(r.string);}evaluate(){return!0;}}return r;})(),se=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},re=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},ne=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Zs(r,o){let e=o.filter(c=>c instanceof J),a=o.filter(c=>c instanceof Z);return new te(r??new be(),e,a);}function Nt(r){return r.length===1?r[0]:new re(r[0],Nt(r.slice(1)));}function Ot(r){return r.length===1?r[0]:new ne(r[0],Ot(r.slice(1)));}var ie=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(O=>O.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let p=this.location.start,h=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,v=this.location.source+":"+h.line+":"+h.column;if(a){let O=this.location.end,D="".padEnd(h.line.toString().length," "),H=a[p.line-1],$=(p.line===O.line?O.column:H.length+1)-p.column||1;e+=`
 --> `+v+`
`+D+` |
`+h.line+" | "+H+`
`+D+" | "+"".padEnd(p.column-1," ")+"".padEnd($,"^");}else e+=`
 at `+v;}return e;}static buildMessage(o,e){function a($){return $.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p($){return c?$.replace(c,b=>"\\u{"+a(b)+"}"):$;}function h($){return p($.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,b=>"\\x0"+a(b)).replace(/[\x10-\x1F\x7F-\x9F]/g,b=>"\\x"+a(b)));}function v($){return p($.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,b=>"\\x0"+a(b)).replace(/[\x10-\x1F\x7F-\x9F]/g,b=>"\\x"+a(b)));}let O={literal($){return'"'+h($.text)+'"';},class($){let b=$.parts.map(N=>Array.isArray(N)?v(N[0])+"-"+v(N[1]):v(N));return"["+($.inverted?"^":"")+b.join("")+"]"+($.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other($){return $.description;}};function D($){return O[$.type]($);}function H($){let b=$.map(D);if(b.sort(),b.length>0){let N=1;for(let F=1;F<b.length;F++)b[F-1]!==b[F]&&(b[N]=b[F],N++);b.length=N;}switch(b.length){case 1:return b[0];case 2:return b[0]+" or "+b[1];default:return b.slice(0,-1).join(", ")+", or "+b[b.length-1];}}function _($){return $?'"'+h($)+'"':"end of input";}return"Expected "+H(o)+" but "+_(e)+" found.";}};function z(r,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:lt,Rule:We,Condition:ut,Effects:pt,Question:Ue,Item:je,VariableName:Fe,QuestionString:dt,ItemNameAndWeight:mt,CategoryName:ht},p=lt,h="#",v=";",O=":-",D="OR",H="AND",_="NOT",$=",",b="$",N="[",F="]",ae="kg",X="g",le=".",G=/^[^\n\r]/,Q=/^[^$,;#]/,pe=/^[a-zA-Z]/,oe=/^[a-zA-Z0-9\-[\](){}_]/,ce=/^[^\],;#[]/,w=/^[,;]/,m=/^[^ ,;#]/,x=/^[0-9]/,I=/^[ \t\n\r]/,A=P("title"),T=j("#",!1),V=Y([`
`,"\r"],!0,!1,!1),Ee=P("comment"),_e=P("rule end"),os=j(";",!1),as=P("rule"),ls=j(":-",!1),ye=P("condition"),cs=j("OR",!1),us=j("AND",!1),Pe=j("NOT",!1),fs=j(",",!1),Xe=P("question"),gs=j("$",!1),et=Y(["$",",",";","#"],!0,!1,!1),ps=P("variable name"),ds=Y([["a","z"],["A","Z"]],!1,!1,!1),tt=Y([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),hs=P("item"),ms=P("category"),bs=j("[",!1),ws=j("]",!1),$s=P("category name"),st=Y(["]",",",";","#","["],!0,!1,!1),Ss=P("item name"),Es=P("word"),ys=Y([",",";"],!1,!1,!1),rt=Y([" ",",",";","#"],!0,!1,!1),vs=P("weight"),Ts=j("kg",!1),As=j("g",!1),Rs=P("number"),ve=Y([["0","9"]],!1,!1,!1),ks=j(".",!1),nt=Y([" ","	",`
`,"\r"],!1,!1,!1),xs=qs();function Cs(t,s){return s.title=t?.trim(),s.rulesContainComments=Et,s;}function Ns(t){if(t.trim().length)return t.trim();}function Os(t){if(t.trim().length)return Et=!0,t.trim();}function Is(t,s){return Zs(t,s);}function Ls(t){return Ot(t);}function Ds(t){return Nt(t);}function _s(t){return new se(t);}function Ps(t){return new K(t);}function Ws(t,s){return new J(t.trim(),s.trim());}function Ms(t,s){let{name:i,weight:l}=s;return new Z(t.trim(),i,l);}function Us(t,s){return o.trackWeight;}function Fs(t,s){let i=t.trim();return i.length||it("item name"),{name:i,weight:s};}function js(t){let s=t.trim();return s.length||it("item name"),{name:s,weight:void 0};}function Vs(t){return t*1e3;}function zs(){return parseFloat(Hs());}let n=o.peg$currPos|0,k=n,ue=[{line:1,column:1}],B=n,Te=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,de;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=c[o.startRule];}function Hs(){return r.substring(k,n);}function Tr(){return k;}function Ar(){return{source:a,start:k,end:n};}function Rr(){return he(k,n);}function it(t,s){throw s=s!==void 0?s:he(k,n),at([P(t)],r.substring(k,n),s);}function kr(t,s){throw s=s!==void 0?s:he(k,n),Ks(t,s);}function Bs(t=n){let s=r.codePointAt(t);return s===void 0?"":String.fromCodePoint(s);}function j(t,s){return{type:"literal",text:t,ignoreCase:s};}function Y(t,s,i,l){return{type:"class",parts:t,inverted:s,ignoreCase:i,unicode:l};}function qs(){return{type:"any"};}function Gs(){return{type:"end"};}function P(t){return{type:"other",description:t};}function ot(t){let s=ue[t],i;if(s)return s;if(t>=ue.length)i=ue.length-1;else for(i=t;!ue[--i];);for(s=ue[i],s={line:s.line,column:s.column};i<t;)r.charCodeAt(i)===10?(s.line++,s.column=1):s.column++,i++;return ue[t]=s,s;}function he(t,s,i){let l=ot(t),f=ot(s),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:s,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function d(t){n<B||(n>B&&(B=n,Te=[]),Te.push(t));}function Ks(t,s){return new ie(t,null,null,s);}function at(t,s,i){return new ie(ie.buildMessage(t,s),t,s,i);}function lt(){let t,s,i,l,f,g,S,W;for(t=n,s=E(),i=Qs(),i===e&&(i=null),l=E(),f=[],g=We();g!==e;)f.push(g),g=n,S=ct(),S!==e?(S=We(),S===e?(n=g,g=e):g=S):g=S;return g=ct(),g===e&&(g=null),S=E(),W=St(),W!==e?(k=t,t=Cs(i,f)):(n=t,t=e),t;}function Qs(){let t,s,i,l,f,g;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&d(T)),s!==e){if(i=E(),l=n,f=[],g=r.charAt(n),G.test(g)?n++:(g=e,u===0&&d(V)),g!==e)for(;g!==e;)f.push(g),g=r.charAt(n),G.test(g)?n++:(g=e,u===0&&d(V));else f=e;f!==e?l=r.substring(l,n):l=f,l!==e?(f=E(),k=t,t=Ns(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(A)),t;}function fe(){let t,s,i,l,f;if(u++,t=n,r.charCodeAt(n)===35?(s=h,n++):(s=e,u===0&&d(T)),s!==e){if(i=n,l=[],f=r.charAt(n),G.test(f)?n++:(f=e,u===0&&d(V)),f!==e)for(;f!==e;)l.push(f),f=r.charAt(n),G.test(f)?n++:(f=e,u===0&&d(V));else l=e;l!==e?i=r.substring(i,n):i=l,i!==e?(l=E(),k=t,t=Os(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(Ee)),t;}function ct(){let t,s,i,l,f,g;if(u++,t=n,s=E(),r.charCodeAt(n)===59?(i=v,n++):(i=e,u===0&&d(os)),i!==e){for(l=E(),f=[],g=fe();g!==e;)f.push(g),g=fe();g=E(),s=[s,i,l,f,g],t=s;}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(_e)),t;}function We(){let t,s,i,l,f,g,S,W;for(u++,t=n,s=[],i=fe();i!==e;)s.push(i),i=fe();return i=E(),l=ut(),l===e&&(l=null),f=E(),r.substr(n,2)===O?(g=O,n+=2):(g=e,u===0&&d(ls)),g!==e?(S=E(),W=pt(),k=t,t=Is(l,W)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(as)),t;}function ut(){let t,s;return u++,t=Ys(),u--,t===e&&(s=e,u===0&&d(ye)),t;}function Ys(){let t,s,i,l,f,g,S,W;for(u++,t=n,s=n,i=[],l=ft();l!==e;)i.push(l),l=n,f=n,g=E(),r.substr(n,2)===D?(S=D,n+=2):(S=e,u===0&&d(cs)),S!==e?(W=E(),g=[g,S,W],f=g):(n=f,f=e),f!==e?(f=ft(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(k=t,s=Ls(s)),t=s,u--,t===e&&(s=e,u===0&&d(ye)),t;}function ft(){let t,s,i,l,f,g,S,W;for(u++,t=n,s=n,i=[],l=Me();l!==e;)i.push(l),l=n,f=n,g=E(),r.substr(n,3)===H?(S=H,n+=3):(S=e,u===0&&d(us)),S!==e?(W=E(),g=[g,S,W],f=g):(n=f,f=e),f!==e?(f=Me(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(k=t,s=Ds(s)),t=s,u--,t===e&&(s=e,u===0&&d(ye)),t;}function Me(){let t,s,i,l,f,g;return u++,t=n,r.substr(n,3)===_?(s=_,n+=3):(s=e,u===0&&d(Pe)),s!==e?(i=E(),r.substr(n,3)===_?(l=_,n+=3):(l=e,u===0&&d(Pe)),l!==e?(f=E(),g=Me(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r.substr(n,3)===_?(s=_,n+=3):(s=e,u===0&&d(Pe)),s!==e?(i=E(),l=gt(),l!==e?(k=t,t=_s(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=gt(),s!==e?t=s:(n=t,t=e))),u--,t===e&&(s=e,u===0&&d(ye)),t;}function gt(){let t,s;return t=n,s=Fe(),s!==e&&(k=t,s=Ps(s)),t=s,t;}function pt(){let t,s,i,l,f,g,S,W,ge;for(t=n,s=[],i=Ue(),i===e&&(i=je());i!==e;){if(s.push(i),i=n,l=n,f=E(),r.charCodeAt(n)===44?(g=$,n++):(g=e,u===0&&d(fs)),g!==e){for(S=E(),W=[],ge=fe();ge!==e;)W.push(ge),ge=fe();ge=E(),f=[f,g,S,W,ge],l=f;}else n=l,l=e;l!==e?(l=Ue(),l===e&&(l=je()),l===e?(n=i,i=e):i=l):i=l;}return t=s,t;}function Ue(){let t,s,i,l;return u++,t=n,s=dt(),s!==e?(r.charCodeAt(n)===36?(i=b,n++):(i=e,u===0&&d(gs)),i!==e?(l=Fe(),l!==e?(k=t,t=Ws(s,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(Xe)),t;}function dt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),Q.test(i)?n++:(i=e,u===0&&d(et)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),Q.test(i)?n++:(i=e,u===0&&d(et));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d(Xe)),t;}function Fe(){let t,s,i,l,f;if(u++,t=n,s=n,i=r.charAt(n),pe.test(i)?n++:(i=e,u===0&&d(ds)),i!==e){for(l=[],f=r.charAt(n),oe.test(f)?n++:(f=e,u===0&&d(tt));f!==e;)l.push(f),f=r.charAt(n),oe.test(f)?n++:(f=e,u===0&&d(tt));i=[i,l],s=i;}else n=s,s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d(ps)),t;}function je(){let t,s,i,l;return u++,t=n,s=Js(),s!==e?(i=E(),l=mt(),l!==e?(k=t,t=Ms(s,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(hs)),t;}function Js(){let t,s,i,l,f,g;return u++,t=n,r.charCodeAt(n)===91?(s=N,n++):(s=e,u===0&&d(bs)),s!==e?(i=E(),l=ht(),l!==e?(f=E(),r.charCodeAt(n)===93?(g=F,n++):(g=e,u===0&&d(ws)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(ms)),t;}function ht(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),ce.test(i)?n++:(i=e,u===0&&d(st)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),ce.test(i)?n++:(i=e,u===0&&d(st));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&d($s)),t;}function mt(){let t,s,i,l,f;for(u++,t=n,s=n,i=[],l=bt();l!==e;)i.push(l),l=n,f=E(),f=bt(),f===e?(n=l,l=e):l=f;if(s=r.substring(s,n),i=E(),l=wt(),l!==e?(k=n,f=Us(s,l),f?f=void 0:f=e,f!==e?(k=t,t=Fs(s,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,s=n,i=[],l=Ve();l!==e;)i.push(l),l=n,f=E(),f=Ve(),f===e?(n=l,l=e):l=f;s=r.substring(s,n),k=t,s=js(s),t=s;}return u--,t===e&&(s=e,u===0&&d(Ss)),t;}function bt(){let t,s,i,l,f,g;return u++,t=n,s=n,u++,i=n,l=wt(),l!==e?(f=E(),g=St(),g===e&&(g=r.charAt(n),w.test(g)?n++:(g=e,u===0&&d(ys))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?s=void 0:(n=s,s=e),s!==e?(i=Ve(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&d(Es)),t;}function Ve(){let t,s,i;if(t=n,s=[],i=r.charAt(n),m.test(i)?n++:(i=e,u===0&&d(rt)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),m.test(i)?n++:(i=e,u===0&&d(rt));else s=e;return s!==e?t=r.substring(t,n):t=s,t;}function wt(){let t,s,i;return u++,t=n,s=$t(),s!==e?(r.substr(n,2)===ae?(i=ae,n+=2):(i=e,u===0&&d(Ts)),i!==e?(k=t,t=Vs(s)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=$t(),s!==e?(r.charCodeAt(n)===103?(i=X,n++):(i=e,u===0&&d(As)),i===e&&(i=null),t=s):(n=t,t=e)),u--,t===e&&(s=e,u===0&&d(vs)),t;}function $t(){let t,s,i,l,f,g,S;if(u++,t=n,s=[],i=r.charAt(n),x.test(i)?n++:(i=e,u===0&&d(ve)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),x.test(i)?n++:(i=e,u===0&&d(ve));else s=e;if(s!==e){if(i=n,r.charCodeAt(n)===46?(l=le,n++):(l=e,u===0&&d(ks)),l!==e){if(f=n,g=[],S=r.charAt(n),x.test(S)?n++:(S=e,u===0&&d(ve)),S!==e)for(;S!==e;)g.push(S),S=r.charAt(n),x.test(S)?n++:(S=e,u===0&&d(ve));else g=e;g!==e?f=r.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),k=t,t=zs();}else n=t,t=e;return u--,t===e&&(s=e,u===0&&d(Rs)),t;}function E(){let t,s;for(u++,t=[],s=r.charAt(n),I.test(s)?n++:(s=e,u===0&&d(nt));s!==e;)t.push(s),s=r.charAt(n),I.test(s)?n++:(s=e,u===0&&d(nt));return u--,t;}function St(){let t,s;return t=n,u++,r.length>n?(s=r.charAt(n),n++):(s=e,u===0&&d(xs)),u--,s===e?t=void 0:(n=t,t=e),t;}let Et=!1;de=p();let ze=de!==e&&n===r.length;function yt(){throw de!==e&&n<r.length&&d(Gs()),at(Te,B<r.length?Bs(B):null,B<r.length?he(B,B+1):he(B,B));}if(o.peg$library)return{peg$result:de,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Te,peg$maxFailPos:B,peg$success:ze,peg$throw:ze?void 0:yt};if(ze)return de;yt();}var er={isTrackWeight:()=>!1},tr=new M("PARSER_CONFIG_PROVIDER"),Le=(()=>{class r{config=y(tr,{optional:!0})??er;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return z(e,this.makeOptions("Condition"));}parseQuestion(e){return z(e,this.makeOptions("Question"));}parseItem(e){return z(e,this.makeOptions("Item"));}parseEffects(e){return z(e,this.makeOptions("Effects"));}parseRule(e){return z(e,this.makeOptions("Rule"));}parseRules(e){try{return z(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Fehler beim Parsen der Regeln"),a instanceof ie){let p=a.location.start.line.toString(),h=a.location.start.column.toString();c.push(" at line ",p," column ",h),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){z(e,this.makeOptions("VariableName"));}validateQuestionString(e){z(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){z(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){z(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return z(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||r)();};static ɵprov=ke({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();var He=(()=>{class r{parser=y(Le);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let p of c.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(h=>this.renameVariable(e,a,h));if(c instanceof J)return c.variable===e?new J(c.question,a):c;if(c instanceof te)return new te(this.renameVariable(e,a,c.condition),c.questions.map(h=>this.renameVariable(e,a,h)),c.items);if(c instanceof K)return c.variable===e?new K(a):c;if(c instanceof se)return new se(this.renameVariable(e,a,c.not));if(c instanceof re)return new re(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof ne)return new ne(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let p=c;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((p,h)=>Ae(ee({},p),{[h]:e.model[h]}),{[be.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof te)return this.contains(e.condition,a)||e.questions.some(h=>this.contains(h,a))||e.items.some(h=>this.contains(h,a));if(e instanceof J)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof Z)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof K)return e.variable.toLowerCase().includes(c);if(e instanceof se)return this.contains(e.not,a);if(e instanceof re)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof ne)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((p,h)=>{let v;return this.parser.isTrackWeight()?v=h.weight?1:0:v=this.parser.forceParseWeight(h.name)?1:0,{items:p.items+1,weights:p.weights+v};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||r)();};static ɵprov=ke({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();function sr(r,o){return Object.entries(r).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=ee(ee({},e[a]),c),e),{});}var we=new M("RESET_SIGNAL",{providedIn:"root",factory:()=>C(!1)}),De=class r{state;triggerReset=y(we);constructor(o){this.state=o;}static builder(){return new r({});}extend(o){return new r(sr(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function Lt(r,o){if(typeof r!=typeof o)return!1;if(r&&o&&typeof r=="object"){let e=Object.keys(r),a=Object.keys(o);return e.length===a.length&&e.every(c=>Lt(r[c],o[c]));}return r===o;}function It(r,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[r]??o;}function rr(r,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);Lt(o,e)?delete c[r]:o===null?c[r]=void 0:c[r]=o,this.setItem("state",JSON.stringify(c));}function Dt(r,o,e){let a=y(we),c=C(It.call(r,o,e));return L(()=>{let p=c();p!==It.call(r,o,e)&&rr.call(r,o,p,e);},{manualCleanup:!0}),L(()=>{a()&&c.set(e);}),c;}var q=(r,o)=>Dt(localStorage,r,o),$e=(r,o)=>Dt(sessionStorage,r,o);var U=q,_t=["en","de"],Pt=()=>{let r=U("categorySorting","alphabetically"),o=U("trackWeight",!1);return L(()=>{o()===!1&&r()==="weight"&&r.set("alphabetically");}),{config:{categorySorting:r,trackWeight:o,skipItems:U("skipItems",!1),fadeOutDisabledRules:U("fadeOutDisabledRules",!1),highlightVariableStatus:U("highlightVariableStatus",!1),refactorVariables:U("refactorVariables",!0),confirmRuleDeletion:U("confirmRuleDeletion",!0),rulesTemplate:U("rulesTemplate","default"),theme:U("theme","system"),fontSize:U("fontSize","normal"),accessibility:U("accessibility","accessible"),animations:U("animations",!0),language:U("language","auto"),exportReminder:U("exportReminder",!1)}};};var Wt=({config:{language:r}})=>{let o=C(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:R(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:R(()=>{let e=r();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>_t.includes(p))??"en":e;})}};};var Mt=(r,o)=>$e(r,o),Ut=()=>({clipboard:{items:Mt("clipboardItems",[]),questions:Mt("clipboardQuestions",[])}});var Se=q;function nr(r){return"cat-"+r.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Be=class extends Z{original;checked;skipped;colored;constructor(o,e,a,c){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c;}},Ft=({rules:{parsed:r,raw:o},config:{categorySorting:e,skipItems:a}})=>{let c=Se("answers",{}),p=Se("checkedItems",[]),h=Se("skippedItems",[]),v=Se("collapsedCategories",[]),O=Se("answersLocked",!1),D=$e("statsVisible",void 0),H=$e("askedWeightTracking",void 0),_=y(He),$=R(()=>_.filterActive({rules:r.value(),model:c()})),b=R(()=>$().rules),N=R(()=>b().flatMap(w=>w.items)),F=R(()=>N().filter(w=>p().includes(w.id()))),ae=w=>{p().includes(w.id())?p.update(m=>m.filter(x=>x!==w.id())):p.update(m=>[...m,w.id()]);},X=R(()=>N().filter(w=>h().includes(w.id()))),le=w=>{a()&&(h().includes(w.id())?h.update(m=>m.filter(x=>x!==w.id())):h.update(m=>[...m,w.id()]));},G=w=>{v().includes(w)?v.update(m=>m.filter(x=>x!==w)):v.update(m=>[...m,w]);},Q=C([]),pe=w=>{(Q().length!==w.length||!w.every(m=>Q().includes(m)))&&Q.set(w);},oe=R(()=>{function w(A){return{id:nr(A.category),name:A.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:v().includes(A.category),colored:D()==="distribution"};}let m=N().reduce((A,T)=>{A[T.category]||(A[T.category]=w(T));let V=a()&&X().includes(T),Ee=!V&&F().includes(T),_e=D()==="heaviestItems"&&Q().includes(T.id());return A[T.category].items.push(new Be(T,Ee,V,_e)),Ee&&(A[T.category].checkedItems++,A[T.category].checkedWeight+=T.weight??0),V||(A[T.category].totalItems++,A[T.category].totalWeight+=T.weight??0),A;},{}),I=R(()=>{let A=e();return A==="alphabetically"?(T,V)=>T.name.localeCompare(V.name):A==="weight"?(T,V)=>V.totalWeight-T.totalWeight:()=>0;})();return Object.entries(m).map(A=>A[1]).toSorted((A,T)=>I(A,T));}),ce=R(()=>Object.entries(oe()).reduce((w,[,m])=>(w.totalItems+=m.totalItems,w.checkedItems+=m.checkedItems,w.totalWeight+=m.totalWeight,w.checkedWeight+=m.checkedWeight,w),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return L(()=>{o.hasValue()&&o.value()&&(O.set(!1),D.set(void 0));}),{rules:{categories:R(()=>_.extractCategories(r.value())),variables:R(()=>_.extractVariables(r.value()))},active:{rules:b,answers:R(()=>$().model),questions:R(()=>b().flatMap(w=>w.questions))},packlist:{answers:c,model:oe,stats:ce,toggleCheckedItem:ae,toggleSkippedItem:le,colorItems:pe,toggleCategoryCollapse:G,answersLocked:O,statsVisible:D,askedWeightTracking:H,reset:()=>{c.set({}),p.set([]),h.set([]),v.set([]),O.set(!1),D.set(void 0);}}};};var qe=(r,o)=>{let e=y(Oe),a=y(Ne),c=y(we),p=C(void 0);return e.events.pipe(Re(h=>h instanceof Ce),vt(()=>a.snapshot.queryParams[r]??o)).subscribe(h=>{h!==""&&p.set(h);}),L(()=>{let h=p()||void 0;h===o&&(h=void 0),a.snapshot.queryParams[r]!==h&&e.navigate([],{queryParams:{[r]:h},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),L(()=>{c()&&p.set(o);}),p;};var ir={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},jt=()=>{let r=y(Oe),o=y(Ne),e=qe("rulesMode","view"),a=kt(o.fragment,{requireSync:!0}),c=xe(()=>a()??void 0);L(()=>{let v=c();v!==a()&&r.navigate([],{fragment:v,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=y(Rt),h=C(p.path());return r.events.pipe(Re(v=>v instanceof Ce)).subscribe(()=>{p.path()!==h()&&h.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:qe("filterRulesQuery",void 0),path:h.asReadonly(),fragment:c,go:v=>{ir[v].call({router:r,rulesMode:e});}}};};var Ge=class{parser;raw;trackWeight;setCurrentTitle;value=C([]);error=C(void 0);status=C("idle");constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,L(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let p=this.parser.parseRules(this.raw.value());p.title&&this.setCurrentTitle(p.title),this.value.set(p),this.error.set(void 0),this.status.set("resolved");}catch(p){this.error.set(p),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},Vt=({config:{trackWeight:r},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new Ge(y(Le),o,r,e);return{rules:{parsed:a.asReadonly(),hasError:R(()=>a.status()==="error"||o.status()==="error"),isLoading:R(()=>a.isLoading()||o.isLoading())}};};var zt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,Ht={name:"GitHub Gist",test:r=>zt.test(r),transform:r=>{let o=zt.exec(r);if(!o)return r;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var Ke=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Bt=new Ke();var qt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,or={name:"Google Drive",needsCORS:!0,test:r=>qt.test(r),transform:r=>{let o=qt.exec(r);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:r;}},Gt=or;var ar={name:"Pastebin",needsCORS:!0,test:r=>r.startsWith("https://pastebin.com/")&&!r.includes("/raw/"),transform:r=>r.replace("https://pastebin.com/","https://pastebin.com/raw/")},Kt=ar;var lr=[Ht,Bt,Gt,Kt];function Qt(r,o){if(r){let e=lr.find(a=>a.test(r));if(e){let a=e.transform(r);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return r;}var Yt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var es=`:- [New] This is your first item;
`;var ts=`# Example Logic Demonstration

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
`;var Qe=new M("BACKPACKING_RULES_TEMPLATE");function hr(){return Yt;}var Ye=new M("DEFAULT_RULES_TEMPLATE");function mr(r){return r.startsWith("de")?Jt:Zt;}var Je=new M("EMPTY_RULES_TEMPLATE");function br(r){return r.startsWith("de")?Xt:es;}var Ze=new M("LOGIC_RULES_TEMPLATE");function wr(){return ts;}function si(){return Tt([{provide:Qe,useFactory:hr,deps:[me]},{provide:Ye,useFactory:mr,deps:[me]},{provide:Je,useFactory:br,deps:[me]},{provide:Ze,useFactory:wr,deps:[me]}]);}var ss=new M("CAPACITOR_HTTP_REQUEST_MODE");function $r(r){switch(r){case 400:return"Ung\xFCltige Anfrage";case 401:return"Nicht autorisiert";case 403:return"Verboten";case 404:return"Nicht gefunden";case 500:return"interner Serverfehler";case 504:return"Zeit\xFCberschreitung";default:return;}}var rs=({config:{rulesTemplate:r}})=>{let o=q("rulesMode","template"),e=q("rules",void 0),a=R(()=>e()!==void 0),c=R(()=>{let m=e();if(m)return Sr(m).toString(16);}),p=q("lastExportHash",void 0),h=q("lastExportDate",void 0),v=()=>{p.set(c()),h.set(new Date().getTime());},O=C(new Date().getTime());L(()=>{e(),O.set(new Date().getTime());});let D=y(Ye),H=y(Je),_=y(Ze),$=y(Qe),b=R(()=>{switch(r()){case"empty":return H;case"logic":return _;case"backpacking":return $;default:return D;}}),N=q("remoteHistory",[]),F=q("remoteHistoryTitle",{}),ae=function(m){N.update(x=>x.filter(I=>I!==m)),F.update(x=>{let I=ee({},x);return delete I[m],I;});},X=xe(()=>o()==="remote"?N()[0]:void 0),le=y(ss,{optional:!0})??"cors",G=At({params:()=>({mode:o(),rawLocal:e(),remote:X(),template:b()}),loader:({params:m})=>{switch(m.mode){case"local":return Promise.resolve(m.rawLocal);case"template":return Promise.resolve(m.template);case"remote":if(m.remote){if(!m.remote.startsWith("http"))throw new Error("Invalid URL");let x=Qt(m.remote,le==="cors");return xt.get({url:x,webFetchExtra:{mode:le}}).then(I=>{if(I.status>=200&&I.status<300)return N.update(A=>[m.remote,...A.filter(T=>T!==m.remote)]),I.data;{let A=[["HTTP Fehler",I.status.toString()].join(" "),$r(I.status)].join(": ");throw new Error(A);}});}else return Promise.resolve(void 0);}}}),Q=function(m){X()!==m&&(o.set("remote"),X.set(m));},pe=function(m){let x=X();o()==="remote"&&x&&F.update(I=>Ae(ee({},I),{[x]:m}));},oe=function(m){o.set("local"),e.set(m);},ce=function(){e.set(G.value()),o.set("local"),v();},w=function(){G.reload();};return{rules:{mode:o,raw:G.asReadonly(),reload:w,lastAction:O.asReadonly(),hash:c,exportNeeded:R(()=>o()==="local"&&c()!==p()),markAsCurrent:v,localRulesAvailable:a},export:{lastDate:h.asReadonly()},localRules:{updateRules:oe,copyFromCurrent:ce},remoteRules:{load:Q,setCurrentTitle:pe,history:R(()=>N().map(m=>({url:m,title:F()[m]}))),removeFromHistory:ae}};},Sr=function(r,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,p;c<r.length;c++)p=r.charCodeAt(c),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var ns=()=>({serviceWorker:{status:C("init")}});function Er(){return De.builder().extend(jt).extend(Ut).extend(ns).extend(Pt).extend(Wt).extend(rs).extend(Vt).extend(Ft);}var is=new M("STATE_BUILDER",{providedIn:"root",factory:()=>Er()}),yr=new M("GLOBAL_STATE",{providedIn:"root",factory:()=>y(is).build()}),vr=new M("RESET_SWITCH",{providedIn:"root",factory:()=>{let r=y(is);return async()=>{await r.reset();};}});export{xr as a,Ie as b,Cr as c,te as d,J as e,Z as f,K as g,Ir as h,be as i,se as j,re as k,ne as l,ie as m,tr as n,Le as o,He as p,si as q,ss as r,yr as s,vr as t};/**i18n:28a3168b76bee7dffc4b1e816012f24aa421b4da90b9b896cc67ce89fdf6fb94*/