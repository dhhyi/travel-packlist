import{d as Nt}from"./chunk-0e1b8689.js";import{b as xt,k as Ct,l as Ne,m as Oe,o as Ie}from"./chunk-a3edc26b.js";import{$ as W,B as ke,Y as xe,ba as y,ca as Rt,pa as C,r as At,uc as $e,wc as A,xc as I,yc as Ce,zc as kt}from"./chunk-35a5bbfd.js";import{a as X,b as Re}from"./chunk-528b08af.js";function xr(r){let o=r.title?.trim();return(o?`# ${o}

`:"")+r.map(a=>a.toString()).map(a=>a+";").join(`

`);}function Le(r,o,e=-1){if(!r)return"0g";let a=(e<0?r/1e3:(r/1e3).toFixed(e)).toString()+"kg",c=r.toString()+"g";return o?o==="kg"?a:c:a.length<=c.length?a:c;}function Cr(r,o){return Le(r,void 0,1)+" / "+Le(o,void 0,1);}var ee=class{condition;questions;items;constructor(o,e=[],a=[]){this.condition=o,this.questions=e,this.items=a;}toString(){let o=[];if(!(this.condition instanceof Se)){let a=this.condition.toString();a&&o.push(a," ");}o.push(":-");let e=this.questions.map(a=>a.toString()).concat(this.items.map(a=>a.toString()));if(e.length===1&&o.length===1)o.push(" ",e[0]);else for(let a=0;a<e.length;a++){let c=e[a];a>0&&o.push(","),o.push(`
`,"   ",c);}return o.join("");}},Q=class{question;variable;static NEW_QUESTION_NAME="Neue Frage";static NEW_VARIABLE_NAME="new_variable";constructor(o,e){this.question=o,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function Ot(r){return r?r.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var Y=class{category;name;weight;static NEW_ITEM_NAME="Neuer Gegenstand";static NEW_CATEGORY_NAME="Neu";constructor(o,e,a){this.category=o,this.name=e,this.weight=a;}id(){return`${Ot(this.category)}-${Ot(this.name)}`;}toString(){let o=`[${this.category}] ${this.name}`.trim();return this.weight&&(o+=" "+Le(this.weight)),o;}},G=class{variable;constructor(o){this.variable=o;}evaluate(o){return o[this.variable];}toString(){return this.variable;}},Ir=(()=>{class r extends G{static string="please_select";constructor(){super(r.string);}}return r;})(),Se=(()=>{class r extends G{static string="always";constructor(){super(r.string);}evaluate(){return!0;}}return r;})(),te=class{not;constructor(o){this.not=o;}evaluate(o){return!this.not.evaluate(o);}toString(){return"NOT "+this.not.toString();}},se=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)&&this.right.evaluate(o);}toString(){return this.left.toString()+" AND "+this.right.toString();}},re=class{left;right;constructor(o,e){this.left=o,this.right=e;}evaluate(o){return this.left.evaluate(o)||this.right.evaluate(o);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Zs(r,o){let e=o.filter(c=>c instanceof Q),a=o.filter(c=>c instanceof Y);return new ee(r??new Se(),e,a);}function It(r){return r.length===1?r[0]:new se(r[0],It(r.slice(1)));}function Lt(r){return r.length===1?r[0]:new re(r[0],Lt(r.slice(1)));}var ne=class extends SyntaxError{constructor(o,e,a,c){super(o),this.expected=e,this.found=a,this.location=c,this.name="SyntaxError";}format(o){let e="Error: "+this.message;if(this.location){let a=null,c=o.find(O=>O.source===this.location.source);c&&(a=c.text.split(/\r\n|\n|\r/g));let p=this.location.start,m=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(p):p,v=this.location.source+":"+m.line+":"+m.column;if(a){let O=this.location.end,j="".padEnd(m.line.toString().length," "),L=a[p.line-1],b=(p.line===O.line?O.column:L.length+1)-p.column||1;e+=`
 --> `+v+`
`+j+` |
`+m.line+" | "+L+`
`+j+" | "+"".padEnd(p.column-1," ")+"".padEnd(b,"^");}else e+=`
 at `+v;}return e;}static buildMessage(o,e){function a(b){return b.codePointAt(0).toString(16).toUpperCase();}let c=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function p(b){return c?b.replace(c,w=>"\\u{"+a(w)+"}"):b;}function m(b){return p(b.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}function v(b){return p(b.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,w=>"\\x0"+a(w)).replace(/[\x10-\x1F\x7F-\x9F]/g,w=>"\\x"+a(w)));}let O={literal(b){return'"'+m(b.text)+'"';},class(b){let w=b.parts.map(N=>Array.isArray(N)?v(N[0])+"-"+v(N[1]):v(N));return"["+(b.inverted?"^":"")+w.join("")+"]"+(b.unicode?"u":"");},any(){return"any character";},end(){return"end of input";},other(b){return b.description;}};function j(b){return O[b.type](b);}function L(b){let w=b.map(j);if(w.sort(),w.length>0){let N=1;for(let D=1;D<w.length;D++)w[D-1]!==w[D]&&(w[N]=w[D],N++);w.length=N;}switch(w.length){case 1:return w[0];case 2:return w[0]+" or "+w[1];default:return w.slice(0,-1).join(", ")+", or "+w[w.length-1];}}function U(b){return b?'"'+m(b)+'"':"end of input";}return"Expected "+L(o)+" but "+U(e)+" found.";}};function V(r,o){o=o!==void 0?o:{};let e={},a=o.grammarSource,c={Rules:ut,Rule:Ue,Condition:gt,Effects:ht,Question:je,Item:ze,VariableName:Ve,QuestionString:mt,ItemNameAndWeight:wt,CategoryName:bt},p=ut,m="#",v=";",O=":-",j="OR",L="AND",U="NOT",b=",",w="$",N="[",D="]",ae="kg",J="g",le=".",B=/^[^\n\r]/,ce=/^[^$,;#]/,Z=/^[a-zA-Z]/,ue=/^[a-zA-Z0-9\-[\](){}_]/,ie=/^[^\],;#[]/,he=/^[,;]/,d=/^[^ ,;#]/,$=/^[0-9]/,k=/^[ \t\n\r]/,oe=_("title"),R=F("#",!1),T=K([`
`,"\r"],!0,!1,!1),q=_("comment"),me=_("rule end"),Pe=F(";",!1),We=_("rule"),ls=F(":-",!1),ve=_("condition"),cs=F("OR",!1),us=F("AND",!1),Me=F("NOT",!1),fs=F(",",!1),tt=_("question"),gs=F("$",!1),st=K(["$",",",";","#"],!0,!1,!1),ps=_("variable name"),ds=K([["a","z"],["A","Z"]],!1,!1,!1),rt=K([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1,!1),hs=_("item"),ms=_("category"),bs=F("[",!1),ws=F("]",!1),$s=_("category name"),nt=K(["]",",",";","#","["],!0,!1,!1),Ss=_("item name"),Es=_("word"),ys=K([",",";"],!1,!1,!1),it=K([" ",",",";","#"],!0,!1,!1),vs=_("weight"),Ts=F("kg",!1),As=F("g",!1),Rs=_("number"),Te=K([["0","9"]],!1,!1,!1),ks=F(".",!1),ot=K([" ","	",`
`,"\r"],!1,!1,!1),xs=qs();function Cs(t,s){return s.title=t?.trim(),s.rulesContainComments=vt,s;}function Ns(t){if(t.trim().length)return t.trim();}function Os(t){if(t.trim().length)return vt=!0,t.trim();}function Is(t,s){return Zs(t,s);}function Ls(t){return Lt(t);}function Ds(t){return It(t);}function _s(t){return new te(t);}function Ps(t){return new G(t);}function Ws(t,s){return new Q(t.trim(),s.trim());}function Ms(t,s){let{name:i,weight:l}=s;return new Y(t.trim(),i,l);}function Us(t,s){return o.trackWeight;}function Fs(t,s){let i=t.trim();return i.length||at("item name"),{name:i,weight:s};}function js(t){let s=t.trim();return s.length||at("item name"),{name:s,weight:void 0};}function Vs(t){return t*1e3;}function zs(){return parseFloat(Hs());}let n=o.peg$currPos|0,x=n,fe=[{line:1,column:1}],z=n,Ae=o.peg$maxFailExpected||[],u=o.peg$silentFails|0,be;if(o.startRule){if(!(o.startRule in c))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');p=c[o.startRule];}function Hs(){return r.substring(x,n);}function Tr(){return x;}function Ar(){return{source:a,start:x,end:n};}function Rr(){return we(x,n);}function at(t,s){throw s=s!==void 0?s:we(x,n),ct([_(t)],r.substring(x,n),s);}function kr(t,s){throw s=s!==void 0?s:we(x,n),Ks(t,s);}function Bs(t=n){let s=r.codePointAt(t);return s===void 0?"":String.fromCodePoint(s);}function F(t,s){return{type:"literal",text:t,ignoreCase:s};}function K(t,s,i,l){return{type:"class",parts:t,inverted:s,ignoreCase:i,unicode:l};}function qs(){return{type:"any"};}function Gs(){return{type:"end"};}function _(t){return{type:"other",description:t};}function lt(t){let s=fe[t],i;if(s)return s;if(t>=fe.length)i=fe.length-1;else for(i=t;!fe[--i];);for(s=fe[i],s={line:s.line,column:s.column};i<t;)r.charCodeAt(i)===10?(s.line++,s.column=1):s.column++,i++;return fe[t]=s,s;}function we(t,s,i){let l=lt(t),f=lt(s),g={source:a,start:{offset:t,line:l.line,column:l.column},end:{offset:s,line:f.line,column:f.column}};return i&&a&&typeof a.offset=="function"&&(g.start=a.offset(g.start),g.end=a.offset(g.end)),g;}function h(t){n<z||(n>z&&(z=n,Ae=[]),Ae.push(t));}function Ks(t,s){return new ne(t,null,null,s);}function ct(t,s,i){return new ne(ne.buildMessage(t,s),t,s,i);}function ut(){let t,s,i,l,f,g,S,P;for(t=n,s=E(),i=Qs(),i===e&&(i=null),l=E(),f=[],g=Ue();g!==e;)f.push(g),g=n,S=ft(),S!==e?(S=Ue(),S===e?(n=g,g=e):g=S):g=S;return g=ft(),g===e&&(g=null),S=E(),P=yt(),P!==e?(x=t,t=Cs(i,f)):(n=t,t=e),t;}function Qs(){let t,s,i,l,f,g;if(u++,t=n,r.charCodeAt(n)===35?(s=m,n++):(s=e,u===0&&h(R)),s!==e){if(i=E(),l=n,f=[],g=r.charAt(n),B.test(g)?n++:(g=e,u===0&&h(T)),g!==e)for(;g!==e;)f.push(g),g=r.charAt(n),B.test(g)?n++:(g=e,u===0&&h(T));else f=e;f!==e?l=r.substring(l,n):l=f,l!==e?(f=E(),x=t,t=Ns(l)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(oe)),t;}function ge(){let t,s,i,l,f;if(u++,t=n,r.charCodeAt(n)===35?(s=m,n++):(s=e,u===0&&h(R)),s!==e){if(i=n,l=[],f=r.charAt(n),B.test(f)?n++:(f=e,u===0&&h(T)),f!==e)for(;f!==e;)l.push(f),f=r.charAt(n),B.test(f)?n++:(f=e,u===0&&h(T));else l=e;l!==e?i=r.substring(i,n):i=l,i!==e?(l=E(),x=t,t=Os(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(q)),t;}function ft(){let t,s,i,l,f,g;if(u++,t=n,s=E(),r.charCodeAt(n)===59?(i=v,n++):(i=e,u===0&&h(Pe)),i!==e){for(l=E(),f=[],g=ge();g!==e;)f.push(g),g=ge();g=E(),s=[s,i,l,f,g],t=s;}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(me)),t;}function Ue(){let t,s,i,l,f,g,S,P;for(u++,t=n,s=[],i=ge();i!==e;)s.push(i),i=ge();return i=E(),l=gt(),l===e&&(l=null),f=E(),r.substr(n,2)===O?(g=O,n+=2):(g=e,u===0&&h(ls)),g!==e?(S=E(),P=ht(),x=t,t=Is(l,P)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(We)),t;}function gt(){let t,s;return u++,t=Ys(),u--,t===e&&(s=e,u===0&&h(ve)),t;}function Ys(){let t,s,i,l,f,g,S,P;for(u++,t=n,s=n,i=[],l=pt();l!==e;)i.push(l),l=n,f=n,g=E(),r.substr(n,2)===j?(S=j,n+=2):(S=e,u===0&&h(cs)),S!==e?(P=E(),g=[g,S,P],f=g):(n=f,f=e),f!==e?(f=pt(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(x=t,s=Ls(s)),t=s,u--,t===e&&(s=e,u===0&&h(ve)),t;}function pt(){let t,s,i,l,f,g,S,P;for(u++,t=n,s=n,i=[],l=Fe();l!==e;)i.push(l),l=n,f=n,g=E(),r.substr(n,3)===L?(S=L,n+=3):(S=e,u===0&&h(us)),S!==e?(P=E(),g=[g,S,P],f=g):(n=f,f=e),f!==e?(f=Fe(),f===e?(n=l,l=e):l=f):l=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(x=t,s=Ds(s)),t=s,u--,t===e&&(s=e,u===0&&h(ve)),t;}function Fe(){let t,s,i,l,f,g;return u++,t=n,r.substr(n,3)===U?(s=U,n+=3):(s=e,u===0&&h(Me)),s!==e?(i=E(),r.substr(n,3)===U?(l=U,n+=3):(l=e,u===0&&h(Me)),l!==e?(f=E(),g=Fe(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r.substr(n,3)===U?(s=U,n+=3):(s=e,u===0&&h(Me)),s!==e?(i=E(),l=dt(),l!==e?(x=t,t=_s(l)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=dt(),s!==e?t=s:(n=t,t=e))),u--,t===e&&(s=e,u===0&&h(ve)),t;}function dt(){let t,s;return t=n,s=Ve(),s!==e&&(x=t,s=Ps(s)),t=s,t;}function ht(){let t,s,i,l,f,g,S,P,pe;for(t=n,s=[],i=je(),i===e&&(i=ze());i!==e;){if(s.push(i),i=n,l=n,f=E(),r.charCodeAt(n)===44?(g=b,n++):(g=e,u===0&&h(fs)),g!==e){for(S=E(),P=[],pe=ge();pe!==e;)P.push(pe),pe=ge();pe=E(),f=[f,g,S,P,pe],l=f;}else n=l,l=e;l!==e?(l=je(),l===e&&(l=ze()),l===e?(n=i,i=e):i=l):i=l;}return t=s,t;}function je(){let t,s,i,l;return u++,t=n,s=mt(),s!==e?(r.charCodeAt(n)===36?(i=w,n++):(i=e,u===0&&h(gs)),i!==e?(l=Ve(),l!==e?(x=t,t=Ws(s,l)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(tt)),t;}function mt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),ce.test(i)?n++:(i=e,u===0&&h(st)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),ce.test(i)?n++:(i=e,u===0&&h(st));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&h(tt)),t;}function Ve(){let t,s,i,l,f;if(u++,t=n,s=n,i=r.charAt(n),Z.test(i)?n++:(i=e,u===0&&h(ds)),i!==e){for(l=[],f=r.charAt(n),ue.test(f)?n++:(f=e,u===0&&h(rt));f!==e;)l.push(f),f=r.charAt(n),ue.test(f)?n++:(f=e,u===0&&h(rt));i=[i,l],s=i;}else n=s,s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&h(ps)),t;}function ze(){let t,s,i,l;return u++,t=n,s=Js(),s!==e?(i=E(),l=wt(),l!==e?(x=t,t=Ms(s,l)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(hs)),t;}function Js(){let t,s,i,l,f,g;return u++,t=n,r.charCodeAt(n)===91?(s=N,n++):(s=e,u===0&&h(bs)),s!==e?(i=E(),l=bt(),l!==e?(f=E(),r.charCodeAt(n)===93?(g=D,n++):(g=e,u===0&&h(ws)),g!==e?t=l:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(ms)),t;}function bt(){let t,s,i;if(u++,t=n,s=[],i=r.charAt(n),ie.test(i)?n++:(i=e,u===0&&h(nt)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),ie.test(i)?n++:(i=e,u===0&&h(nt));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&h($s)),t;}function wt(){let t,s,i,l,f;for(u++,t=n,s=n,i=[],l=$t();l!==e;)i.push(l),l=n,f=E(),f=$t(),f===e?(n=l,l=e):l=f;if(s=r.substring(s,n),i=E(),l=St(),l!==e?(x=n,f=Us(s,l),f?f=void 0:f=e,f!==e?(x=t,t=Fs(s,l)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,s=n,i=[],l=He();l!==e;)i.push(l),l=n,f=E(),f=He(),f===e?(n=l,l=e):l=f;s=r.substring(s,n),x=t,s=js(s),t=s;}return u--,t===e&&(s=e,u===0&&h(Ss)),t;}function $t(){let t,s,i,l,f,g;return u++,t=n,s=n,u++,i=n,l=St(),l!==e?(f=E(),g=yt(),g===e&&(g=r.charAt(n),he.test(g)?n++:(g=e,u===0&&h(ys))),g!==e?(l=[l,f,g],i=l):(n=i,i=e)):(n=i,i=e),u--,i===e?s=void 0:(n=s,s=e),s!==e?(i=He(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(Es)),t;}function He(){let t,s,i;if(t=n,s=[],i=r.charAt(n),d.test(i)?n++:(i=e,u===0&&h(it)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),d.test(i)?n++:(i=e,u===0&&h(it));else s=e;return s!==e?t=r.substring(t,n):t=s,t;}function St(){let t,s,i;return u++,t=n,s=Et(),s!==e?(r.substr(n,2)===ae?(i=ae,n+=2):(i=e,u===0&&h(Ts)),i!==e?(x=t,t=Vs(s)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=Et(),s!==e?(r.charCodeAt(n)===103?(i=J,n++):(i=e,u===0&&h(As)),i===e&&(i=null),t=s):(n=t,t=e)),u--,t===e&&(s=e,u===0&&h(vs)),t;}function Et(){let t,s,i,l,f,g,S;if(u++,t=n,s=[],i=r.charAt(n),$.test(i)?n++:(i=e,u===0&&h(Te)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),$.test(i)?n++:(i=e,u===0&&h(Te));else s=e;if(s!==e){if(i=n,r.charCodeAt(n)===46?(l=le,n++):(l=e,u===0&&h(ks)),l!==e){if(f=n,g=[],S=r.charAt(n),$.test(S)?n++:(S=e,u===0&&h(Te)),S!==e)for(;S!==e;)g.push(S),S=r.charAt(n),$.test(S)?n++:(S=e,u===0&&h(Te));else g=e;g!==e?f=r.substring(f,n):f=g,f!==e?(l=[l,f],i=l):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),x=t,t=zs();}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(Rs)),t;}function E(){let t,s;for(u++,t=[],s=r.charAt(n),k.test(s)?n++:(s=e,u===0&&h(ot));s!==e;)t.push(s),s=r.charAt(n),k.test(s)?n++:(s=e,u===0&&h(ot));return u--,t;}function yt(){let t,s;return t=n,u++,r.length>n?(s=r.charAt(n),n++):(s=e,u===0&&h(xs)),u--,s===e?t=void 0:(n=t,t=e),t;}let vt=!1;be=p();let Be=be!==e&&n===r.length;function Tt(){throw be!==e&&n<r.length&&h(Gs()),ct(Ae,z<r.length?Bs(z):null,z<r.length?we(z,z+1):we(z,z));}if(o.peg$library)return{peg$result:be,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:Ae,peg$maxFailPos:z,peg$success:Be,peg$throw:Be?void 0:Tt};if(Be)return be;Tt();}var er={isTrackWeight:()=>!1},tr=new W("PARSER_CONFIG_PROVIDER"),De=(()=>{class r{config=y(tr,{optional:!0})??er;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,a={}){return{startRule:e,trackWeight:a.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return V(e,this.makeOptions("Condition"));}parseQuestion(e){return V(e,this.makeOptions("Question"));}parseItem(e){return V(e,this.makeOptions("Item"));}parseEffects(e){return V(e,this.makeOptions("Effects"));}parseRule(e){return V(e,this.makeOptions("Rule"));}parseRules(e){try{return V(e,this.makeOptions("Rules"));}catch(a){let c=[];if(c.push("Fehler beim Parsen der Regeln"),a instanceof ne){let p=a.location.start.line.toString(),m=a.location.start.column.toString();c.push(" at line ",p," column ",m),c.push(":",`
`,a.message);}else a instanceof Error&&c.push(a.message);throw new Error(c.join(""));}}validateVariableName(e){V(e,this.makeOptions("VariableName"));}validateQuestionString(e){V(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){V(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){V(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return V(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(a){return new(a||r)();};static ɵprov=xe({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();var qe=(()=>{class r{parser=y(De);extractVariables(e){return e.reduce((a,c)=>[...a,...c.questions.map(p=>p.variable)],[]);}extractCategories(e){let a=new Set();for(let c of e)for(let p of c.items)a.add(p.category);return Array.from(a);}renameVariable(e,a,c){if(c instanceof Array)return c.map(m=>this.renameVariable(e,a,m));if(c instanceof Q)return c.variable===e?new Q(c.question,a):c;if(c instanceof ee)return new ee(this.renameVariable(e,a,c.condition),c.questions.map(m=>this.renameVariable(e,a,m)),c.items);if(c instanceof G)return c.variable===e?new G(a):c;if(c instanceof te)return new te(this.renameVariable(e,a,c.not));if(c instanceof se)return new se(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));if(c instanceof re)return new re(this.renameVariable(e,a,c.left),this.renameVariable(e,a,c.right));let p=c;throw new Error("Unknown item type: "+p);}filterActive(e){let a=e.rules.filter(p=>p.condition.evaluate(e.model)),c=this.extractVariables(a).reduce((p,m)=>Re(X({},p),{[m]:e.model[m]}),{[Se.string]:!0});return a.length===e.rules.length?{model:c,rules:a}:this.filterActive({model:c,rules:a});}contains(e,a){let c=a.toLowerCase();if(e instanceof ee)return this.contains(e.condition,a)||e.questions.some(m=>this.contains(m,a))||e.items.some(m=>this.contains(m,a));if(e instanceof Q)return e.question.toLowerCase().includes(c)||e.variable.toLowerCase().includes(c);if(e instanceof Y)return e.category.toLowerCase().includes(c)||e.name.toLowerCase().includes(c);if(e instanceof G)return e.variable.toLowerCase().includes(c);if(e instanceof te)return this.contains(e.not,a);if(e instanceof se)return this.contains(e.left,a)||this.contains(e.right,a);if(e instanceof re)return this.contains(e.left,a)||this.contains(e.right,a);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((a,c)=>c.items.reduce((p,m)=>{let v;return this.parser.isTrackWeight()?v=m.weight?1:0:v=this.parser.forceParseWeight(m.name)?1:0,{items:p.items+1,weights:p.weights+v};},a),{items:0,weights:0});}static ɵfac=function(a){return new(a||r)();};static ɵprov=xe({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();function sr(r,o){return Object.entries(r).concat(Object.entries(o)).reduce((e,[a,c])=>(e[a]=X(X({},e[a]),c),e),{});}var Ee=new W("RESET_SIGNAL",{providedIn:"root",factory:()=>C(!1)}),_e=class r{state;triggerReset=y(Ee);constructor(o){this.state=o;}static builder(){return new r({});}extend(o){return new r(sr(this.state,o(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(o=>setTimeout(o,0));}};function _t(r,o){if(typeof r!=typeof o)return!1;if(r&&o&&typeof r=="object"){let e=Object.keys(r),a=Object.keys(o);return e.length===a.length&&e.every(c=>_t(r[c],o[c]));}return r===o;}function Dt(r,o){let e=this.getItem("state")??"{}";return JSON.parse(e)[r]??o;}function rr(r,o,e){let a=this.getItem("state")??"{}",c=JSON.parse(a);_t(o,e)?delete c[r]:o===null?c[r]=void 0:c[r]=o,this.setItem("state",JSON.stringify(c));}function Pt(r,o,e){let a=y(Ee),c=C(Dt.call(r,o,e));return I(()=>{let p=c();p!==Dt.call(r,o,e)&&rr.call(r,o,p,e);},{manualCleanup:!0}),I(()=>{a()&&c.set(e);}),c;}var H=(r,o)=>Pt(localStorage,r,o),ye=(r,o)=>Pt(sessionStorage,r,o);var M=H,Wt=["en","de"],Mt=()=>{let r=M("categorySorting","alphabetically"),o=M("trackWeight",!1);return I(()=>{o()===!1&&r()==="weight"&&r.set("alphabetically");}),{config:{categorySorting:r,trackWeight:o,skipItems:M("skipItems",!1),fadeOutDisabledRules:M("fadeOutDisabledRules",!1),highlightVariableStatus:M("highlightVariableStatus",!1),refactorVariables:M("refactorVariables",!0),confirmRuleDeletion:M("confirmRuleDeletion",!0),rulesTemplate:M("rulesTemplate","default"),theme:M("theme","system"),fontSize:M("fontSize","normal"),accessibility:M("accessibility","accessible"),animations:M("animations",!0),language:M("language","auto"),exportReminder:M("exportReminder",!1)}};};var Ut=({config:{language:r}})=>{let o=C(window.scrollY);return window.addEventListener("scroll",()=>{o.set(window.scrollY);}),{browser:{scrollY:o,isMobile:A(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:A(()=>{let e=r();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>Wt.includes(p))??"en":e;})}};};var Ft=(r,o)=>ye(r,o),jt=()=>({clipboard:{items:Ft("clipboardItems",[]),questions:Ft("clipboardQuestions",[])}});var de=H;function nr(r){return"cat-"+r.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Ge=class extends Y{original;checked;skipped;colored;visible;constructor(o,e,a,c,p){super(o.category,o.name,o.weight),this.original=o,this.checked=e,this.skipped=a,this.colored=c,this.visible=p;}},Vt=({rules:{parsed:r,raw:o},config:{categorySorting:e,skipItems:a}})=>{let c=de("answers",{}),p=de("checkedItems",[]),m=de("skippedItems",[]),v=de("collapsedCategories",[]),O=de("answersLocked",!1),j=de("hideCompleted",!1),L=ye("statsVisible",void 0),U=ye("askedWeightTracking",void 0),b=y(qe),w=A(()=>b.filterActive({rules:r.value(),model:c()})),N=A(()=>w().rules),D=A(()=>N().flatMap(d=>d.items)),ae=A(()=>D().filter(d=>p().includes(d.id()))),J=d=>{p().includes(d.id())?p.update($=>$.filter(k=>k!==d.id())):p.update($=>[...$,d.id()]);},le=A(()=>D().filter(d=>m().includes(d.id()))),B=d=>{a()&&(m().includes(d.id())?m.update($=>$.filter(k=>k!==d.id())):m.update($=>[...$,d.id()]));},ce=d=>{v().includes(d)?v.update($=>$.filter(k=>k!==d)):v.update($=>[...$,d]);},Z=C([]),ue=d=>{(Z().length!==d.length||!d.every($=>Z().includes($)))&&Z.set(d);},ie=A(()=>{function d(R){return{id:nr(R.category),name:R.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:v().includes(R.category),colored:L()==="distribution"};}let $=D().reduce((R,T)=>{R[T.category]||(R[T.category]=d(T));let q=a()&&le().includes(T),me=!q&&ae().includes(T),Pe=L()==="heaviestItems"&&Z().includes(T.id()),We=j()?!me&&!q:!0;return R[T.category].items.push(new Ge(T,me,q,Pe,We)),me&&(R[T.category].checkedItems++,R[T.category].checkedWeight+=T.weight??0),q||(R[T.category].totalItems++,R[T.category].totalWeight+=T.weight??0),R;},{}),oe=A(()=>{let R=e();return R==="alphabetically"?(T,q)=>T.name.localeCompare(q.name):R==="weight"?(T,q)=>q.totalWeight-T.totalWeight:()=>0;})();return Object.entries($).map(R=>R[1]).toSorted((R,T)=>oe(R,T));}),he=A(()=>Object.entries(ie()).reduce((d,[,$])=>(d.totalItems+=$.totalItems,d.checkedItems+=$.checkedItems,d.totalWeight+=$.totalWeight,d.checkedWeight+=$.checkedWeight,d),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return I(()=>{o.hasValue()&&o.value()&&(O.set(!1),L.set(void 0));}),{rules:{categories:A(()=>b.extractCategories(r.value())),variables:A(()=>b.extractVariables(r.value()))},active:{rules:N,answers:A(()=>w().model),questions:A(()=>N().flatMap(d=>d.questions))},packlist:{answers:c,model:ie,stats:he,toggleCheckedItem:J,toggleSkippedItem:B,colorItems:ue,toggleCategoryCollapse:ce,answersLocked:O,hideCompleted:j,statsVisible:L,askedWeightTracking:U,reset:()=>{c.set({}),p.set([]),m.set([]),v.set([]),O.set(!1),L.set(void 0);}}};};var Ke=(r,o)=>{let e=y(Ie),a=y(Oe),c=y(Ee),p=C(void 0);return e.events.pipe(ke(m=>m instanceof Ne),At(()=>a.snapshot.queryParams[r]??o)).subscribe(m=>{m!==""&&p.set(m);}),I(()=>{let m=p()||void 0;m===o&&(m=void 0),a.snapshot.queryParams[r]!==m&&e.navigate([],{queryParams:{[r]:m},queryParamsHandling:"merge",relativeTo:a,replaceUrl:!0});}),I(()=>{c()&&p.set(o);}),p;};var ir={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},zt=()=>{let r=y(Ie),o=y(Oe),e=Ke("rulesMode","view"),a=Ct(o.fragment,{requireSync:!0}),c=Ce(()=>a()??void 0);I(()=>{let v=c();v!==a()&&r.navigate([],{fragment:v,relativeTo:o,replaceUrl:!0,queryParamsHandling:"merge"});});let p=y(xt),m=C(p.path());return r.events.pipe(ke(v=>v instanceof Ne)).subscribe(()=>{p.path()!==m()&&m.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Ke("filterRulesQuery",void 0),path:m.asReadonly(),fragment:c,go:v=>{ir[v].call({router:r,rulesMode:e});}}};};var Qe=class{parser;raw;trackWeight;setCurrentTitle;value=C([]);error=C(void 0);status=C("idle");constructor(o,e,a,c){this.parser=o,this.raw=e,this.trackWeight=a,this.setCurrentTitle=c,I(()=>{if(this.trackWeight(),this.raw.status()==="resolved"&&this.raw.hasValue()&&typeof this.raw.value()=="string")try{let p=this.parser.parseRules(this.raw.value());p.title&&this.setCurrentTitle(p.title),this.value.set(p),this.error.set(void 0),this.status.set("resolved");}catch(p){this.error.set(p),this.status.set("error");}});}get isLoading(){return this.raw.isLoading;}hasValue(){return!0;}asReadonly(){return{value:this.value.asReadonly(),error:this.error.asReadonly(),status:this.status.asReadonly(),isLoading:this.isLoading,hasValue:this.hasValue.bind(this)};}},Ht=({config:{trackWeight:r},rules:{raw:o},remoteRules:{setCurrentTitle:e}})=>{let a=new Qe(y(De),o,r,e);return{rules:{parsed:a.asReadonly(),hasError:A(()=>a.status()==="error"||o.status()==="error"),isLoading:A(()=>a.isLoading()||o.isLoading())}};};var Bt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,qt={name:"GitHub Gist",test:r=>Bt.test(r),transform:r=>{let o=Bt.exec(r);if(!o)return r;let[,e,a,,c]=o;return c?`https://gist.githubusercontent.com/${e}/${a}/raw/${c}`:`https://gist.githubusercontent.com/${e}/${a}/raw`;}};var Ye=class{name="GitHub";test(o){return o.startsWith("https://github.com/");}transform(o){return o.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Gt=new Ye();var Kt=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,or={name:"Google Drive",needsCORS:!0,test:r=>Kt.test(r),transform:r=>{let o=Kt.exec(r);return o?`https://drive.google.com/uc?export=download&id=${o[1]}`:r;}},Qt=or;var ar={name:"Pastebin",needsCORS:!0,test:r=>r.startsWith("https://pastebin.com/")&&!r.includes("/raw/"),transform:r=>r.replace("https://pastebin.com/","https://pastebin.com/raw/")},Yt=ar;var lr=[qt,Gt,Qt,Yt];function Jt(r,o){if(r){let e=lr.find(a=>a.test(r));if(e){let a=e.transform(r);return o&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(a):a;}}return r;}var Zt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var Xt=`# Beispiel Packliste

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
`;var es=`# Example Packlist

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
`;var ts=`:- [Neu] Dies ist dein erster Gegenstand;
`;var ss=`:- [New] This is your first item;
`;var rs=`# Example Logic Demonstration

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
`;var Je=new W("BACKPACKING_RULES_TEMPLATE");function hr(){return Zt;}var Ze=new W("DEFAULT_RULES_TEMPLATE");function mr(r){return r.startsWith("de")?Xt:es;}var Xe=new W("EMPTY_RULES_TEMPLATE");function br(r){return r.startsWith("de")?ts:ss;}var et=new W("LOGIC_RULES_TEMPLATE");function wr(){return rs;}function si(){return Rt([{provide:Je,useFactory:hr,deps:[$e]},{provide:Ze,useFactory:mr,deps:[$e]},{provide:Xe,useFactory:br,deps:[$e]},{provide:et,useFactory:wr,deps:[$e]}]);}var ns=new W("CAPACITOR_HTTP_REQUEST_MODE");function $r(r){switch(r){case 400:return"Ung\xFCltige Anfrage";case 401:return"Nicht autorisiert";case 403:return"Verboten";case 404:return"Nicht gefunden";case 500:return"interner Serverfehler";case 504:return"Zeit\xFCberschreitung";default:return;}}var is=({config:{rulesTemplate:r}})=>{let o=H("rulesMode","template"),e=H("rules",void 0),a=A(()=>e()!==void 0),c=A(()=>{let d=e();if(d)return Sr(d).toString(16);}),p=H("lastExportHash",void 0),m=H("lastExportDate",void 0),v=()=>{p.set(c()),m.set(new Date().getTime());},O=C(new Date().getTime());I(()=>{e(),O.set(new Date().getTime());});let j=y(Ze),L=y(Xe),U=y(et),b=y(Je),w=A(()=>{switch(r()){case"empty":return L;case"logic":return U;case"backpacking":return b;default:return j;}}),N=H("remoteHistory",[]),D=H("remoteHistoryTitle",{}),ae=function(d){N.update($=>$.filter(k=>k!==d)),D.update($=>{let k=X({},$);return delete k[d],k;});},J=Ce(()=>o()==="remote"?N()[0]:void 0),le=y(ns,{optional:!0})??"cors",B=kt({params:()=>({mode:o(),rawLocal:e(),remote:J(),template:w()}),loader:({params:d})=>{switch(d.mode){case"local":return Promise.resolve(d.rawLocal);case"template":return Promise.resolve(d.template);case"remote":if(d.remote){if(!d.remote.startsWith("http"))throw new Error("Invalid URL");let $=Jt(d.remote,le==="cors");return Nt.get({url:$,webFetchExtra:{mode:le}}).then(k=>{if(k.status>=200&&k.status<300)return N.update(oe=>[d.remote,...oe.filter(R=>R!==d.remote)]),k.data;{let oe=[["HTTP Fehler",k.status.toString()].join(" "),$r(k.status)].join(": ");throw new Error(oe);}});}else return Promise.resolve(void 0);}}}),ce=function(d){J()!==d&&(o.set("remote"),J.set(d));},Z=function(d){let $=J();o()==="remote"&&$&&D.update(k=>Re(X({},k),{[$]:d}));},ue=function(d){o.set("local"),e.set(d);},ie=function(){e.set(B.value()),o.set("local"),v();},he=function(){B.reload();};return{rules:{mode:o,raw:B.asReadonly(),reload:he,lastAction:O.asReadonly(),hash:c,exportNeeded:A(()=>o()==="local"&&c()!==p()),markAsCurrent:v,localRulesAvailable:a},export:{lastDate:m.asReadonly()},localRules:{updateRules:ue,copyFromCurrent:ie},remoteRules:{load:ce,setCurrentTitle:Z,history:A(()=>N().map(d=>({url:d,title:D()[d]}))),removeFromHistory:ae}};},Sr=function(r,o=0){let e=3735928559^o,a=1103547991^o;for(let c=0,p;c<r.length;c++)p=r.charCodeAt(c),e=Math.imul(e^p,2654435761),a=Math.imul(a^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507),a^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&a)+(e>>>0);};var os=()=>({serviceWorker:{status:C("init")}});function Er(){return _e.builder().extend(zt).extend(jt).extend(os).extend(Mt).extend(Ut).extend(is).extend(Ht).extend(Vt);}var as=new W("STATE_BUILDER",{providedIn:"root",factory:()=>Er()}),yr=new W("GLOBAL_STATE",{providedIn:"root",factory:()=>y(as).build()}),vr=new W("RESET_SWITCH",{providedIn:"root",factory:()=>{let r=y(as);return async()=>{await r.reset();};}});export{xr as a,Le as b,Cr as c,ee as d,Q as e,Y as f,G as g,Ir as h,Se as i,te as j,se as k,re as l,ne as m,tr as n,De as o,qe as p,si as q,ns as r,yr as s,vr as t};/**i18n:21aa1334e8c34cb1bdc052bbb2b637916f11e405b5750f3de4ff3557f803a0d4*/