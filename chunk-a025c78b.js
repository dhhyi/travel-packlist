import{d as Rt}from"./chunk-3547fb00.js";import{c as At,l as Tt,m as ke,n as Ce,p as Oe}from"./chunk-3812292d.js";import{B as Ae,X as Te,_ as P,ba as S,ca as yt,nc as me,r as St,tc as T,uc as L,vc as ze,wa as O,wc as Re,xc as xe}from"./chunk-fd03b049.js";import{a as de,b as Et}from"./chunk-3500bcc6.js";function Ss(r){let a=r.title?.trim();return(a?`# ${a}

`:"")+r.map(o=>o.toString()).map(o=>o+";").join(`

`);}function Ne(r,a,e=-1){if(!r)return"0g";let o=(e<0?r/1e3:(r/1e3).toFixed(e)).toString()+"kg",l=(r*1).toString()+"g";return a?a==="kg"?o:l:o.length<=l.length?o:l;}function ys(r,a){return Ne(r,void 0,1)+" / "+Ne(a,void 0,1);}var X=class{condition;questions;items;constructor(a,e=[],o=[]){this.condition=a,this.questions=e,this.items=o;}toString(){let a=[];if(!(this.condition instanceof ve)){let o=this.condition.toString();o&&a.push(o," ");}a.push(":-");let e=this.questions.map(o=>o.toString()).concat(this.items.map(o=>o.toString()));if(e.length===1&&a.length===1)a.push(" ",e[0]);else for(let o=0;o<e.length;o++){let l=e[o];o>0&&a.push(","),a.push(`
`,"   ",l);}return a.join("");}},q=class{question;variable;static NEW_QUESTION_NAME="New Question";static NEW_VARIABLE_NAME="new_variable";constructor(a,e){this.question=a,this.variable=e;}toString(){return this.question+" $"+this.variable;}};function xt(r){return r?r.trim().replace(/[^\w]/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,""):"";}var Q=class{category;name;weight;static NEW_ITEM_NAME="New Item";static NEW_CATEGORY_NAME="New";constructor(a,e,o){this.category=a,this.name=e,this.weight=o;}id(){return`${xt(this.category)}-${xt(this.name)}`;}toString(){let a=`[${this.category}] ${this.name}`.trim();return this.weight&&(a+=" "+Ne(this.weight)),a;}},H=class{variable;constructor(a){this.variable=a;}evaluate(a){return a[this.variable];}toString(){return this.variable;}},Rs=(()=>{class r extends H{static string="please_select";constructor(){super(r.string);}}return r;})(),ve=(()=>{class r extends H{static string="always";constructor(){super(r.string);}evaluate(){return!0;}}return r;})(),ee=class{not;constructor(a){this.not=a;}evaluate(a){return!this.not.evaluate(a);}toString(){return"NOT "+this.not.toString();}},te=class{left;right;constructor(a,e){this.left=a,this.right=e;}evaluate(a){return this.left.evaluate(a)&&this.right.evaluate(a);}toString(){return this.left.toString()+" AND "+this.right.toString();}},re=class{left;right;constructor(a,e){this.left=a,this.right=e;}evaluate(a){return this.left.evaluate(a)||this.right.evaluate(a);}toString(){return this.left.toString()+" OR "+this.right.toString();}};function Jr(r,a){let e=a.filter(l=>l instanceof q),o=a.filter(l=>l instanceof Q);return new X(r??new ve(),e,o);}function kt(r){return r.length===1?r[0]:new te(r[0],kt(r.slice(1)));}function Ct(r){return r.length===1?r[0]:new re(r[0],Ct(r.slice(1)));}function Zr(r,a){function e(){this.constructor=r;}e.prototype=a.prototype,r.prototype=new e();}function B(r,a,e,o){var l=Error.call(this,r);return Object.setPrototypeOf&&Object.setPrototypeOf(l,B.prototype),l.expected=a,l.found=e,l.location=o,l.name="SyntaxError",l;}Zr(B,Error);function Ve(r,a,e){return e=e||" ",r.length>a?r:(a-=r.length,e+=e.repeat(a),r+e.slice(0,a));}B.prototype.format=function(r){var a="Error: "+this.message;if(this.location){var e=null,o;for(o=0;o<r.length;o++)if(r[o].source===this.location.source){e=r[o].text.split(/\r\n|\n|\r/g);break;}var l=this.location.start,p=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(l):l,d=this.location.source+":"+p.line+":"+p.column;if(e){var A=this.location.end,N=Ve("",p.line.toString().length," "),$=e[l.line-1],v=l.line===A.line?A.column:$.length+1,y=v-l.column||1;a+=`
 --> `+d+`
`+N+` |
`+p.line+" | "+$+`
`+N+" | "+Ve("",l.column-1," ")+Ve("",y,"^");}else a+=`
 at `+d;}return a;};B.buildMessage=function(r,a){var e={literal:function($){return'"'+l($.text)+'"';},class:function($){var v=$.parts.map(function(y){return Array.isArray(y)?p(y[0])+"-"+p(y[1]):p(y);});return"["+($.inverted?"^":"")+v.join("")+"]";},any:function(){return"any character";},end:function(){return"end of input";},other:function($){return $.description;}};function o($){return $.charCodeAt(0).toString(16).toUpperCase();}function l($){return $.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(v){return"\\x0"+o(v);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(v){return"\\x"+o(v);});}function p($){return $.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(v){return"\\x0"+o(v);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(v){return"\\x"+o(v);});}function d($){return e[$.type]($);}function A($){var v=$.map(d),y,U;if(v.sort(),v.length>0){for(y=1,U=1;y<v.length;y++)v[y-1]!==v[y]&&(v[U]=v[y],U++);v.length=U;}switch(v.length){case 1:return v[0];case 2:return v[0]+" or "+v[1];default:return v.slice(0,-1).join(", ")+", or "+v[v.length-1];}}function N($){return $?'"'+l($)+'"':"end of input";}return"Expected "+A(r)+" but "+N(a)+" found.";};function F(r,a){a=a!==void 0?a:{};var e={},o=a.grammarSource,l={Rules:ot,Rule:De,Condition:ct,Effects:gt,Question:Me,Item:Fe,VariableName:Ue,QuestionString:pt,ItemNameAndWeight:dt,CategoryName:ht},p=ot,d="#",A=";",N=":-",$="OR",v="AND",y="NOT",U=",",se="$",Y="[",ge="]",J="kg",ie="g",ae=".",j=/^[^\n\r]/,oe=/^[^$,;#]/,le=/^[a-zA-Z]/,R=/^[a-zA-Z0-9\-[\](){}_]/,m=/^[^\],;#[]/,b=/^[,;]/,W=/^[^ ,;#]/,Z=/^[0-9]/,k=/^[ \t\n\r]/,x=I("title"),V=M("#",!1),ne=K([`
`,"\r"],!0,!1),_e=I("comment"),nr=I("rule end"),ir=M(";",!1),ar=I("rule"),or=M(":-",!1),Ee=I("condition"),lr=M("OR",!1),cr=M("AND",!1),Pe=M("NOT",!1),ur=M(",",!1),Ze=I("question"),fr=M("$",!1),Xe=K(["$",",",";","#"],!0,!1),gr=I("variable name"),pr=K([["a","z"],["A","Z"]],!1,!1),et=K([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1),hr=I("item"),dr=I("category"),mr=M("[",!1),vr=M("]",!1),wr=I("category name"),tt=K(["]",",",";","#","["],!0,!1),$r=I("item name"),br=I("word"),Er=K([",",";"],!1,!1),rt=K([" ",",",";","#"],!0,!1),Sr=I("weight"),yr=M("kg",!1),Ar=M("g",!1),Tr=I("number"),Se=K([["0","9"]],!1,!1),Rr=M(".",!1),xr=I("whitespace"),st=K([" ","	",`
`,"\r"],!1,!1),kr=Br(),Cr=function(t,s){return s.title=t?.trim(),s.rulesContainComments=bt,s;},Or=function(t){if(t.trim().length)return t.trim();},Nr=function(t){if(t.trim().length)return bt=!0,t.trim();},Ir=function(t,s){return Jr(t,s);},Lr=function(t){return Ct(t);},_r=function(t){return kt(t);},Pr=function(t){return new ee(t);},Dr=function(t){return new H(t);},Wr=function(t,s){return new q(t.trim(),s.trim());},Mr=function(t,s){let{name:i,weight:c}=s;return new Q(t.trim(),i,c);},Ur=function(t,s){return a.trackWeight;},Fr=function(t,s){let i=t.trim();return i.length||nt("item name"),{name:i,weight:s};},jr=function(t){let s=t.trim();return s.length||nt("item name"),{name:s,weight:void 0};},zr=function(t){return t*1e3;},Vr=function(){return parseFloat(Hr());},n=a.peg$currPos|0,C=n,ce=[{line:1,column:1}],z=n,ye=a.peg$maxFailExpected||[],u=a.peg$silentFails|0,pe;if(a.startRule){if(!(a.startRule in l))throw new Error(`Can't start parsing from rule "`+a.startRule+'".');p=l[a.startRule];}function Hr(){return r.substring(C,n);}function ws(){return C;}function $s(){return{source:o,start:C,end:n};}function bs(){return he(C,n);}function nt(t,s){throw s=s!==void 0?s:he(C,n),at([I(t)],r.substring(C,n),s);}function Es(t,s){throw s=s!==void 0?s:he(C,n),Kr(t,s);}function M(t,s){return{type:"literal",text:t,ignoreCase:s};}function K(t,s,i){return{type:"class",parts:t,inverted:s,ignoreCase:i};}function Br(){return{type:"any"};}function Gr(){return{type:"end"};}function I(t){return{type:"other",description:t};}function it(t){var s=ce[t],i;if(s)return s;if(t>=ce.length)i=ce.length-1;else for(i=t;!ce[--i];);for(s=ce[i],s={line:s.line,column:s.column};i<t;)r.charCodeAt(i)===10?(s.line++,s.column=1):s.column++,i++;return ce[t]=s,s;}function he(t,s,i){var c=it(t),f=it(s),g={source:o,start:{offset:t,line:c.line,column:c.column},end:{offset:s,line:f.line,column:f.column}};return i&&o&&typeof o.offset=="function"&&(g.start=o.offset(g.start),g.end=o.offset(g.end)),g;}function h(t){n<z||(n>z&&(z=n,ye=[]),ye.push(t));}function Kr(t,s){return new B(t,null,null,s);}function at(t,s,i){return new B(B.buildMessage(t,s),t,s,i);}function ot(){var t,s,i,c,f,g,w,_;for(t=n,s=E(),i=qr(),i===e&&(i=null),c=E(),f=[],g=De();g!==e;)f.push(g),g=n,w=lt(),w!==e?(w=De(),w===e?(n=g,g=e):g=w):g=w;return g=lt(),g===e&&(g=null),w=E(),_=$t(),_!==e?(C=t,t=Cr(i,f)):(n=t,t=e),t;}function qr(){var t,s,i,c,f,g;if(u++,t=n,r.charCodeAt(n)===35?(s=d,n++):(s=e,u===0&&h(V)),s!==e){if(i=E(),c=n,f=[],g=r.charAt(n),j.test(g)?n++:(g=e,u===0&&h(ne)),g!==e)for(;g!==e;)f.push(g),g=r.charAt(n),j.test(g)?n++:(g=e,u===0&&h(ne));else f=e;f!==e?c=r.substring(c,n):c=f,c!==e?(f=E(),C=t,t=Or(c)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(x)),t;}function ue(){var t,s,i,c,f;if(u++,t=n,r.charCodeAt(n)===35?(s=d,n++):(s=e,u===0&&h(V)),s!==e){if(i=n,c=[],f=r.charAt(n),j.test(f)?n++:(f=e,u===0&&h(ne)),f!==e)for(;f!==e;)c.push(f),f=r.charAt(n),j.test(f)?n++:(f=e,u===0&&h(ne));else c=e;c!==e?i=r.substring(i,n):i=c,i!==e?(c=E(),C=t,t=Nr(i)):(n=t,t=e);}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(_e)),t;}function lt(){var t,s,i,c,f,g;if(u++,t=n,s=E(),r.charCodeAt(n)===59?(i=A,n++):(i=e,u===0&&h(ir)),i!==e){for(c=E(),f=[],g=ue();g!==e;)f.push(g),g=ue();g=E(),s=[s,i,c,f,g],t=s;}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(nr)),t;}function De(){var t,s,i,c,f,g,w,_;for(u++,t=n,s=[],i=ue();i!==e;)s.push(i),i=ue();return i=E(),c=ct(),c===e&&(c=null),f=E(),r.substr(n,2)===N?(g=N,n+=2):(g=e,u===0&&h(or)),g!==e?(w=E(),_=gt(),C=t,t=Ir(c,_)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(ar)),t;}function ct(){var t,s;return u++,t=Qr(),u--,t===e&&(s=e,u===0&&h(Ee)),t;}function Qr(){var t,s,i,c,f,g,w,_;for(u++,t=n,s=n,i=[],c=ut();c!==e;)i.push(c),c=n,f=n,g=E(),r.substr(n,2)===$?(w=$,n+=2):(w=e,u===0&&h(lr)),w!==e?(_=E(),g=[g,w,_],f=g):(n=f,f=e),f!==e?(f=ut(),f===e?(n=c,c=e):c=f):c=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(C=t,s=Lr(s)),t=s,u--,t===e&&(s=e,u===0&&h(Ee)),t;}function ut(){var t,s,i,c,f,g,w,_;for(u++,t=n,s=n,i=[],c=We();c!==e;)i.push(c),c=n,f=n,g=E(),r.substr(n,3)===v?(w=v,n+=3):(w=e,u===0&&h(cr)),w!==e?(_=E(),g=[g,w,_],f=g):(n=f,f=e),f!==e?(f=We(),f===e?(n=c,c=e):c=f):c=f;return i.length<1?(n=s,s=e):s=i,s!==e&&(C=t,s=_r(s)),t=s,u--,t===e&&(s=e,u===0&&h(Ee)),t;}function We(){var t,s,i,c,f,g;return u++,t=n,r.substr(n,3)===y?(s=y,n+=3):(s=e,u===0&&h(Pe)),s!==e?(i=E(),r.substr(n,3)===y?(c=y,n+=3):(c=e,u===0&&h(Pe)),c!==e?(f=E(),g=We(),g!==e?t=g:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,r.substr(n,3)===y?(s=y,n+=3):(s=e,u===0&&h(Pe)),s!==e?(i=E(),c=ft(),c!==e?(C=t,t=Pr(c)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=ft(),s!==e?t=s:(n=t,t=e))),u--,t===e&&(s=e,u===0&&h(Ee)),t;}function ft(){var t,s;return t=n,s=Ue(),s!==e&&(C=t,s=Dr(s)),t=s,t;}function gt(){var t,s,i,c,f,g,w,_,fe;for(t=n,s=[],i=Me(),i===e&&(i=Fe());i!==e;){if(s.push(i),i=n,c=n,f=E(),r.charCodeAt(n)===44?(g=U,n++):(g=e,u===0&&h(ur)),g!==e){for(w=E(),_=[],fe=ue();fe!==e;)_.push(fe),fe=ue();fe=E(),f=[f,g,w,_,fe],c=f;}else n=c,c=e;c!==e?(c=Me(),c===e&&(c=Fe()),c===e?(n=i,i=e):i=c):i=c;}return t=s,t;}function Me(){var t,s,i,c;return u++,t=n,s=pt(),s!==e?(r.charCodeAt(n)===36?(i=se,n++):(i=e,u===0&&h(fr)),i!==e?(c=Ue(),c!==e?(C=t,t=Wr(s,c)):(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(Ze)),t;}function pt(){var t,s,i;if(u++,t=n,s=[],i=r.charAt(n),oe.test(i)?n++:(i=e,u===0&&h(Xe)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),oe.test(i)?n++:(i=e,u===0&&h(Xe));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&h(Ze)),t;}function Ue(){var t,s,i,c,f;if(u++,t=n,s=n,i=r.charAt(n),le.test(i)?n++:(i=e,u===0&&h(pr)),i!==e){for(c=[],f=r.charAt(n),R.test(f)?n++:(f=e,u===0&&h(et));f!==e;)c.push(f),f=r.charAt(n),R.test(f)?n++:(f=e,u===0&&h(et));i=[i,c],s=i;}else n=s,s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&h(gr)),t;}function Fe(){var t,s,i,c;return u++,t=n,s=Yr(),s!==e?(i=E(),c=dt(),c!==e?(C=t,t=Mr(s,c)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(hr)),t;}function Yr(){var t,s,i,c,f,g;return u++,t=n,r.charCodeAt(n)===91?(s=Y,n++):(s=e,u===0&&h(mr)),s!==e?(i=E(),c=ht(),c!==e?(f=E(),r.charCodeAt(n)===93?(g=ge,n++):(g=e,u===0&&h(vr)),g!==e?t=c:(n=t,t=e)):(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(dr)),t;}function ht(){var t,s,i;if(u++,t=n,s=[],i=r.charAt(n),m.test(i)?n++:(i=e,u===0&&h(tt)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),m.test(i)?n++:(i=e,u===0&&h(tt));else s=e;return s!==e?t=r.substring(t,n):t=s,u--,t===e&&(s=e,u===0&&h(wr)),t;}function dt(){var t,s,i,c,f;for(u++,t=n,s=n,i=[],c=mt();c!==e;)i.push(c),c=n,f=E(),f=mt(),f===e?(n=c,c=e):c=f;if(s=r.substring(s,n),i=E(),c=vt(),c!==e?(C=n,f=Ur(s,c),f?f=void 0:f=e,f!==e?(C=t,t=Fr(s,c)):(n=t,t=e)):(n=t,t=e),t===e){for(t=n,s=n,i=[],c=je();c!==e;)i.push(c),c=n,f=E(),f=je(),f===e?(n=c,c=e):c=f;s=r.substring(s,n),C=t,s=jr(s),t=s;}return u--,t===e&&(s=e,u===0&&h($r)),t;}function mt(){var t,s,i,c,f,g;return u++,t=n,s=n,u++,i=n,c=vt(),c!==e?(f=E(),g=$t(),g===e&&(g=r.charAt(n),b.test(g)?n++:(g=e,u===0&&h(Er))),g!==e?(c=[c,f,g],i=c):(n=i,i=e)):(n=i,i=e),u--,i===e?s=void 0:(n=s,s=e),s!==e?(i=je(),i!==e?t=i:(n=t,t=e)):(n=t,t=e),u--,t===e&&(s=e,u===0&&h(br)),t;}function je(){var t,s,i;if(t=n,s=[],i=r.charAt(n),W.test(i)?n++:(i=e,u===0&&h(rt)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),W.test(i)?n++:(i=e,u===0&&h(rt));else s=e;return s!==e?t=r.substring(t,n):t=s,t;}function vt(){var t,s,i;return u++,t=n,s=wt(),s!==e?(r.substr(n,2)===J?(i=J,n+=2):(i=e,u===0&&h(yr)),i!==e?(C=t,t=zr(s)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,s=wt(),s!==e?(r.charCodeAt(n)===103?(i=ie,n++):(i=e,u===0&&h(Ar)),i===e&&(i=null),t=s):(n=t,t=e)),u--,t===e&&(s=e,u===0&&h(Sr)),t;}function wt(){var t,s,i,c,f,g,w;if(u++,t=n,s=[],i=r.charAt(n),Z.test(i)?n++:(i=e,u===0&&h(Se)),i!==e)for(;i!==e;)s.push(i),i=r.charAt(n),Z.test(i)?n++:(i=e,u===0&&h(Se));else s=e;if(s!==e){if(i=n,r.charCodeAt(n)===46?(c=ae,n++):(c=e,u===0&&h(Rr)),c!==e){if(f=n,g=[],w=r.charAt(n),Z.test(w)?n++:(w=e,u===0&&h(Se)),w!==e)for(;w!==e;)g.push(w),w=r.charAt(n),Z.test(w)?n++:(w=e,u===0&&h(Se));else g=e;g!==e?f=r.substring(f,n):f=g,f!==e?(c=[c,f],i=c):(n=i,i=e);}else n=i,i=e;i===e&&(i=null),C=t,t=Vr();}else n=t,t=e;return u--,t===e&&(s=e,u===0&&h(Tr)),t;}function E(){var t,s;for(u++,t=[],s=r.charAt(n),k.test(s)?n++:(s=e,u===0&&h(st));s!==e;)t.push(s),s=r.charAt(n),k.test(s)?n++:(s=e,u===0&&h(st));return u--,s=e,u===0&&h(xr),t;}function $t(){var t,s;return t=n,u++,r.length>n?(s=r.charAt(n),n++):(s=e,u===0&&h(kr)),u--,s===e?t=void 0:(n=t,t=e),t;}let bt=!1;if(pe=p(),a.peg$library)return{peg$result:pe,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:ye,peg$maxFailPos:z};if(pe!==e&&n===r.length)return pe;throw pe!==e&&n<r.length&&h(Gr()),at(ye,z<r.length?r.charAt(z):null,z<r.length?he(z,z+1):he(z,z));}var es={isTrackWeight:()=>!1},ts=new P("PARSER_CONFIG_PROVIDER"),Ie=(()=>{class r{config=S(ts,{optional:!0})??es;isTrackWeight(){return this.config.isTrackWeight();}makeOptions(e,o={}){return{startRule:e,trackWeight:o.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return F(e,this.makeOptions("Condition"));}parseQuestion(e){return F(e,this.makeOptions("Question"));}parseItem(e){return F(e,this.makeOptions("Item"));}parseEffects(e){return F(e,this.makeOptions("Effects"));}parseRule(e){return F(e,this.makeOptions("Rule"));}parseRules(e){try{return F(e,this.makeOptions("Rules"));}catch(o){let l=[];if(l.push("Error parsing rules"),o instanceof B){let p=o.location.start.line.toString(),d=o.location.start.column.toString();l.push(" at line ",p," column ",d),l.push(":",`
`,o.message);}else o instanceof Error&&l.push(o.message);throw new Error(l.join(""));}}validateVariableName(e){F(e,this.makeOptions("VariableName"));}validateQuestionString(e){F(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){F(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){F(e,this.makeOptions("CategoryName"));}forceParseWeight(e){return F(e,this.makeOptions("ItemNameAndWeight",{forceWeightTracking:!0})).weight??0;}static ɵfac=function(o){return new(o||r)();};static ɵprov=Te({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();var He=(()=>{class r{parser=S(Ie);extractVariables(e){return e.reduce((o,l)=>[...o,...l.questions.map(p=>p.variable)],[]);}extractCategories(e){let o=new Set();for(let l of e)for(let p of l.items)o.add(p.category);return Array.from(o);}renameVariable(e,o,l){if(l instanceof Array)return l.map(d=>this.renameVariable(e,o,d));if(l instanceof q)return l.variable===e?new q(l.question,o):l;if(l instanceof X)return new X(this.renameVariable(e,o,l.condition),l.questions.map(d=>this.renameVariable(e,o,d)),l.items);if(l instanceof H)return l.variable===e?new H(o):l;if(l instanceof ee)return new ee(this.renameVariable(e,o,l.not));if(l instanceof te)return new te(this.renameVariable(e,o,l.left),this.renameVariable(e,o,l.right));if(l instanceof re)return new re(this.renameVariable(e,o,l.left),this.renameVariable(e,o,l.right));let p=l;throw new Error("Unknown item type: "+p);}filterActive(e){let o=e.rules.filter(p=>p.condition.evaluate(e.model)),l=this.extractVariables(o).reduce((p,d)=>Et(de({},p),{[d]:e.model[d]}),{[ve.string]:!0});return o.length===e.rules.length?{model:l,rules:o}:this.filterActive({model:l,rules:o});}contains(e,o){let l=o.toLowerCase();if(e instanceof X)return this.contains(e.condition,o)||e.questions.some(d=>this.contains(d,o))||e.items.some(d=>this.contains(d,o));if(e instanceof q)return e.question.toLowerCase().includes(l)||e.variable.toLowerCase().includes(l);if(e instanceof Q)return e.category.toLowerCase().includes(l)||e.name.toLowerCase().includes(l);if(e instanceof H)return e.variable.toLowerCase().includes(l);if(e instanceof ee)return this.contains(e.not,o);if(e instanceof te)return this.contains(e.left,o)||this.contains(e.right,o);if(e instanceof re)return this.contains(e.left,o)||this.contains(e.right,o);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((o,l)=>l.items.reduce((p,d)=>{let A;return this.parser.isTrackWeight()?A=d.weight?1:0:A=this.parser.forceParseWeight(d.name)?1:0,{items:p.items+1,weights:p.weights+A};},o),{items:0,weights:0});}static ɵfac=function(o){return new(o||r)();};static ɵprov=Te({token:r,factory:r.ɵfac,providedIn:"root"});}return r;})();function rs(r,a){return Object.entries(r).concat(Object.entries(a)).reduce((e,[o,l])=>(e[o]=de(de({},e[o]),l),e),{});}var we=new P("RESET_SIGNAL",{providedIn:"root",factory:()=>O(!1)}),Le=class r{state;triggerReset=S(we);constructor(a){this.state=a;}static builder(){return new r({});}extend(a){return new r(rs(this.state,a(this.state)));}build(){return this.state;}async reset(){this.triggerReset.set(Date.now()),await new Promise(a=>setTimeout(a,0));}};function Nt(r,a){if(typeof r!=typeof a)return!1;if(r&&a&&typeof r=="object"){let e=Object.keys(r),o=Object.keys(a);return e.length===o.length&&e.every(l=>Nt(r[l],a[l]));}return r===a;}function Ot(r,a){let e=this.getItem("state")??"{}";return JSON.parse(e)[r]??a;}function ss(r,a,e){let o=this.getItem("state")??"{}",l=JSON.parse(o);Nt(a,e)?delete l[r]:a===null?l[r]=void 0:l[r]=a,this.setItem("state",JSON.stringify(l));}function It(r,a,e){let o=S(we),l=O(Ot.call(r,a,e));return L(()=>{let p=l();p!==Ot.call(r,a,e)&&ss.call(r,a,p,e);},{manualCleanup:!0}),L(()=>{o()&&l.set(e);}),l;}var G=(r,a)=>It(localStorage,r,a),$e=(r,a)=>It(sessionStorage,r,a);var D=G,Lt=["en","de"],_t=()=>{let r=D("categorySorting","alphabetically"),a=D("trackWeight",!1);return L(()=>{a()===!1&&r()==="weight"&&r.set("alphabetically");}),{config:{categorySorting:r,trackWeight:a,skipItems:D("skipItems",!1),fadeOutDisabledRules:D("fadeOutDisabledRules",!1),highlightVariableStatus:D("highlightVariableStatus",!1),refactorVariables:D("refactorVariables",!0),confirmRuleDeletion:D("confirmRuleDeletion",!0),rulesTemplate:D("rulesTemplate","default"),theme:D("theme","system"),fontSize:D("fontSize","normal"),accessibility:D("accessibility","accessible"),animations:D("animations",!0),language:D("language","auto"),exportReminder:D("exportReminder",!1)}};};var Pt=({config:{language:r}})=>{let a=O(window.scrollY);return window.addEventListener("scroll",()=>{a.set(window.scrollY);}),{browser:{scrollY:a,isMobile:T(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent))},config:{preferredLanguage:T(()=>{let e=r();return e==="auto"?navigator.languages.map(p=>p.split("-")[0]).find(p=>Lt.includes(p))??"en":e;})}};};var Dt=(r,a)=>$e(r,a),Wt=()=>({clipboard:{items:Dt("clipboardItems",[]),questions:Dt("clipboardQuestions",[])}});var be=G;function ns(r){return"cat-"+r.trim().toLowerCase().replace(/[^\w]+/g,"_").replace(/__+$/,"_").replace(/^_+/,"").replace(/_+$/,"");}var Be=class extends Q{original;checked;skipped;colored;constructor(a,e,o,l){super(a.category,a.name,a.weight),this.original=a,this.checked=e,this.skipped=o,this.colored=l;}},Mt=({rules:{parsed:r},config:{categorySorting:a,skipItems:e}})=>{let o=be("answers",{}),l=be("checkedItems",[]),p=be("skippedItems",[]),d=be("collapsedCategories",[]),A=be("answersLocked",!1),N=$e("statsVisible",void 0),$=$e("askedWeightTracking",void 0),v=S(He),y=T(()=>v.filterActive({rules:r.value(),model:o()})),U=T(()=>y().rules),se=T(()=>U().flatMap(m=>m.items)),Y=T(()=>se().filter(m=>l().includes(m.id()))),ge=m=>{l().includes(m.id())?l.update(b=>b.filter(W=>W!==m.id())):l.update(b=>[...b,m.id()]);},J=T(()=>se().filter(m=>p().includes(m.id()))),ie=m=>{e()&&(p().includes(m.id())?p.update(b=>b.filter(W=>W!==m.id())):p.update(b=>[...b,m.id()]));},ae=m=>{d().includes(m)?d.update(b=>b.filter(W=>W!==m)):d.update(b=>[...b,m]);},j=O([]),oe=m=>{(j().length!==m.length||!m.every(b=>j().includes(b)))&&j.set(m);},le=T(()=>{function m(k){return{id:ns(k.category),name:k.category,items:[],totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0,collapsed:d().includes(k.category),colored:N()==="distribution"};}let b=se().reduce((k,x)=>{k[x.category]||(k[x.category]=m(x));let V=e()&&J().includes(x),ne=!V&&Y().includes(x),_e=N()==="heaviestItems"&&j().includes(x.id());return k[x.category].items.push(new Be(x,ne,V,_e)),ne&&(k[x.category].checkedItems++,k[x.category].checkedWeight+=x.weight??0),V||(k[x.category].totalItems++,k[x.category].totalWeight+=x.weight??0),k;},{}),Z=T(()=>{let k=a();return k==="alphabetically"?(x,V)=>x.name.localeCompare(V.name):k==="weight"?(x,V)=>V.totalWeight-x.totalWeight:()=>0;})();return Object.entries(b).map(k=>k[1]).toSorted((k,x)=>Z(k,x));}),R=T(()=>Object.entries(le()).reduce((m,[,b])=>(m.totalItems+=b.totalItems,m.checkedItems+=b.checkedItems,m.totalWeight+=b.totalWeight,m.checkedWeight+=b.checkedWeight,m),{totalItems:0,checkedItems:0,totalWeight:0,checkedWeight:0}));return L(()=>{r.value(),A.set(!1),N.set(void 0);}),{rules:{categories:T(()=>v.extractCategories(r.value())),variables:T(()=>v.extractVariables(r.value()))},active:{rules:U,answers:T(()=>y().model),questions:T(()=>U().flatMap(m=>m.questions))},packlist:{answers:o,model:le,stats:R,toggleCheckedItem:ge,toggleSkippedItem:ie,colorItems:oe,toggleCategoryCollapse:ae,answersLocked:A,statsVisible:N,askedWeightTracking:$,reset:()=>{o.set({}),l.set([]),p.set([]),d.set([]),A.set(!1),N.set(void 0);}}};};var Ge=(r,a)=>{let e=S(Oe),o=S(Ce),l=S(we),p=O(void 0);return e.events.pipe(Ae(d=>d instanceof ke),St(()=>o.snapshot.queryParams[r]??a)).subscribe(d=>{d!==""&&p.set(d);}),L(()=>{let d=p()||void 0;d===a&&(d=void 0),o.snapshot.queryParams[r]!==d&&e.navigate([],{queryParams:{[r]:d},queryParamsHandling:"merge",relativeTo:o,replaceUrl:!0});}),L(()=>{l()&&p.set(a);}),p;};var is={back(){window.history.back();},packlist(){this.router.navigate(["/packlist"]);},rules(){this.router.navigate(["/rules"]);},"rules-documentation"(){this.router.navigateByUrl("/documentation/rules");},"remote-rules-documentation"(){this.router.navigateByUrl("/documentation/remote-rules");},"rules-raw"(){this.router.navigate(["/rules-raw"]);},"rules->edit"(){this.router.navigate(["/rules"]).then(()=>{this.rulesMode.set("edit");});},config(){this.router.navigate(["/config"]);},"config#import"(){this.router.navigate(["/config"],{fragment:"import"});},"config#export"(){this.router.navigate(["/config"],{fragment:"export-now"});}},Ut=()=>{let r=S(Oe),a=S(Ce),e=Ge("rulesMode","view"),o=Tt(a.fragment,{requireSync:!0}),l=Re(()=>o()??void 0);L(()=>{let A=l();A!==o()&&r.navigate([],{fragment:A,relativeTo:a,replaceUrl:!0,queryParamsHandling:"merge"});});let p=S(At),d=O(p.path());return r.events.pipe(Ae(A=>A instanceof ke)).subscribe(()=>{p.path()!==d()&&d.set(p.path());}),{router:{rulesMode:e,filterRulesQuery:Ge("filterRulesQuery",void 0),path:d.asReadonly(),fragment:l,go:A=>{is[A].call({router:r,rulesMode:e});}}};};var Ft=({config:{trackWeight:r},rules:{raw:a}})=>{let e=S(Ie),o=xe({request:()=>(r(),a.value()),loader:({request:p})=>Promise.resolve(p?e.parseRules(p):[])}),l=O([]);return L(()=>{let p=o.value();p&&l.set(p);}),{rules:{parsed:{value:l.asReadonly(),status:o.status,error:o.error},hasError:T(()=>o.status()===ze.Error||a.status()===ze.Error),isLoading:T(()=>o.isLoading()||a.isLoading())}};};var jt=/https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/,zt={name:"GitHub Gist",test:r=>jt.test(r),transform:r=>{let a=jt.exec(r);if(!a)return r;let[,e,o,,l]=a;return l?`https://gist.githubusercontent.com/${e}/${o}/raw/${l}`:`https://gist.githubusercontent.com/${e}/${o}/raw`;}};var Ke=class{name="GitHub";test(a){return a.startsWith("https://github.com/");}transform(a){return a.replace("https://github.com/","https://raw.githubusercontent.com/").replace("/blob/","/");}},Vt=new Ke();var Ht=/https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/,as={name:"Google Drive",needsCORS:!0,test:r=>Ht.test(r),transform:r=>{let a=Ht.exec(r);return a?`https://drive.google.com/uc?export=download&id=${a[1]}`:r;}},Bt=as;var os={name:"Pastebin",needsCORS:!0,test:r=>r.startsWith("https://pastebin.com/")&&!r.includes("/raw/"),transform:r=>r.replace("https://pastebin.com/","https://pastebin.com/raw/")},Gt=os;var ls=[zt,Vt,Bt,Gt];function Kt(r,a){if(r){let e=ls.find(o=>o.test(r));if(e){let o=e.transform(r);return a&&e.needsCORS?"https://api.allorigins.win/raw?url="+encodeURIComponent(o):o;}}return r;}var qt=`# Packlist for a Multi-Day Backpacking Adventure

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
`;var Qt=`# Beispiel Packliste

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
`;var Yt=`# Example Packlist

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
`;var Jt=`:- [Neu] Dies ist dein erster Gegenstand;
`;var Zt=`:- [New] This is your first item;
`;var Xt=`# Example Logic Demonstration

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
`;var qe=new P("BACKPACKING_RULES_TEMPLATE");function cs(){return qt;}var Qe=new P("DEFAULT_RULES_TEMPLATE");function us(r){return r.startsWith("de")?Qt:Yt;}var Ye=new P("EMPTY_RULES_TEMPLATE");function fs(r){return r.startsWith("de")?Jt:Zt;}var Je=new P("LOGIC_RULES_TEMPLATE");function gs(){return Xt;}function Yn(){return yt([{provide:qe,useFactory:cs,deps:[me]},{provide:Qe,useFactory:us,deps:[me]},{provide:Ye,useFactory:fs,deps:[me]},{provide:Je,useFactory:gs,deps:[me]}]);}var er=new P("CAPACITOR_HTTP_REQUEST_MODE");function ps(r){switch(r){case 400:return"Bad Request";case 401:return"Unauthorized";case 403:return"Forbidden";case 404:return"Not Found";case 500:return"Internal Server Error";case 504:return"Gateway Timeout";default:return;}}var tr=({config:{rulesTemplate:r}})=>{let a=G("rulesMode","template"),e=G("rules",void 0),o=T(()=>e()!==void 0),l=T(()=>{let R=e();if(R)return hs(R).toString(16);}),p=G("lastExportHash",void 0),d=G("lastExportDate",void 0),A=()=>{p.set(l()),d.set(new Date().getTime());},N=O(new Date().getTime());L(()=>{e(),N.set(new Date().getTime());});let $=S(Qe),v=S(Ye),y=S(Je),U=S(qe),se=T(()=>{switch(r()){case"empty":return v;case"logic":return y;case"backpacking":return U;default:return $;}}),Y=G("remoteHistory",[]),ge=function(R){Y.update(m=>m.filter(b=>b!==R));},J=Re(()=>a()==="remote"?Y()[0]:void 0),ie=S(er,{optional:!0})??"cors",ae=xe({request:()=>({mode:a(),rawLocal:e(),remote:J(),template:se()}),loader:({request:R})=>{switch(R.mode){case"local":return Promise.resolve(R.rawLocal);case"template":return Promise.resolve(R.template);case"remote":if(R.remote){if(!R.remote.startsWith("http"))throw new Error("Invalid URL");let m=Kt(R.remote,ie==="cors");return Rt.get({url:m,webFetchExtra:{mode:ie}}).then(b=>{if(b.status>=200&&b.status<300)return Y.update(W=>[R.remote,...W.filter(Z=>Z!==R.remote)]),b.data;{let W=[["HTTP Error",b.status.toString()].join(" "),ps(b.status)].join(": ");throw new Error(W);}});}else return Promise.resolve(void 0);}}}),j=function(R){J()!==R&&(a.set("remote"),J.set(R));},oe=function(R){a.set("local"),e.set(R);},le=function(){e.set(ae.value()),a.set("local"),A();};return{rules:{mode:a,raw:ae.asReadonly(),lastAction:N.asReadonly(),hash:l,exportNeeded:T(()=>a()==="local"&&l()!==p()),markAsCurrent:A,localRulesAvailable:o},export:{lastDate:d.asReadonly()},localRules:{updateRules:oe,copyFromCurrent:le},remoteRules:{load:j,history:Y.asReadonly(),removeFromHistory:ge}};},hs=function(r,a=0){let e=3735928559^a,o=1103547991^a;for(let l=0,p;l<r.length;l++)p=r.charCodeAt(l),e=Math.imul(e^p,2654435761),o=Math.imul(o^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507),o^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&o)+(e>>>0);};var rr=()=>({serviceWorker:{status:O("init")}});function ds(){return Le.builder().extend(Ut).extend(Wt).extend(rr).extend(_t).extend(Pt).extend(tr).extend(Ft).extend(Mt);}var sr=new P("STATE_BUILDER",{providedIn:"root",factory:()=>ds()}),ms=new P("GLOBAL_STATE",{providedIn:"root",factory:()=>S(sr).build()}),vs=new P("RESET_SWITCH",{providedIn:"root",factory:()=>{let r=S(sr);return async()=>{await r.reset();};}});export{Ss as a,Ne as b,ys as c,X as d,q as e,Q as f,H as g,Rs as h,ve as i,ee as j,te as k,re as l,B as m,ts as n,Ie as o,He as p,Yn as q,er as r,ms as s,vs as t};/**i18n:e46b0899b8a70e325374c271d32fbb927f955365ba6c424ec8a1c5b1d8e80e46*/