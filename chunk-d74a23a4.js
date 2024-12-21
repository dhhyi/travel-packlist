import{a as at,b as ot,d as lt}from"./chunk-96e3562a.js";import{B as st,Ga as k,Pb as nt,Tb as E,Vb as U,W as I,Z as ne,aa as w,da as it,na as B,p as rt}from"./chunk-0b36a61d.js";import{a as T,b as tt}from"./chunk-be8120ea.js";var W=class{condition;questions;items;constructor(u,e=[],n=[]){this.condition=u,this.questions=e,this.items=n;}},N=class{question;variable;static NEW_QUESTION_NAME="New Question";static NEW_VARIABLE_NAME="new_variable";constructor(u,e){this.question=u,this.variable=e;}},L=class{category;name;weight;static NEW_ITEM_NAME="New Item";static NEW_CATEGORY_NAME="New";constructor(u,e,n){this.category=u,this.name=e,this.weight=n;}},M=class{variable;constructor(u){this.variable=u;}evaluate(u){return u[this.variable];}},Er=(()=>{class i extends M{static string="please_select";constructor(){super(i.string);}}return i;})(),Y=(()=>{class i extends M{static string="always";constructor(){super(i.string);}evaluate(){return!0;}}return i;})(),P=class{not;constructor(u){this.not=u;}evaluate(u){return!this.not.evaluate(u);}},F=class{left;right;constructor(u,e){this.left=u,this.right=e;}evaluate(u){return this.left.evaluate(u)&&this.right.evaluate(u);}},V=class{left;right;constructor(u,e){this.left=u,this.right=e;}evaluate(u){return this.left.evaluate(u)||this.right.evaluate(u);}};var ve=(()=>{class i{serializeRules(e){return e.map(this.serialize.bind(this)).map(n=>n+";").join(`

`);}serializeEffects(e){return e.questions.map(this.serialize.bind(this)).concat(e.items.map(this.serialize.bind(this)));}serializeWeight(e,n,o=-1){if(!e)return"0g";let p=(o<0?e/1e3:(e/1e3).toFixed(o)).toString()+"kg",m=(e*1).toString()+"g";return n?n==="kg"?p:m:p.length<=m.length?p:m;}serialize(e){if(e instanceof W){let o=[];if(!(e.condition instanceof Y)){let m=this.serialize(e.condition);m&&o.push(m," ");}o.push(":-");let p=this.serializeEffects(e);if(p.length===1&&o.length===1)o.push(" ",p[0]);else for(let m=0;m<p.length;m++){let x=p[m];m>0&&o.push(","),o.push(`
`,"   ",x);}return o.join("");}else{if(e instanceof N)return e.question+" $"+e.variable;if(e instanceof L){let o=`[${e.category}] ${e.name}`.trim();return e.weight&&(o+=" "+this.serializeWeight(e.weight)),o;}else{if(e instanceof M)return e.variable;if(e instanceof P)return"NOT "+this.serialize(e.not);if(e instanceof F)return this.serialize(e.left)+" AND "+this.serialize(e.right);if(e instanceof V)return this.serialize(e.left)+" OR "+this.serialize(e.right);}}let n=e;throw new Error("Cannot serialize unknown input: "+n);}static ɵfac=function(n){return new(n||i)();};static ɵprov=I({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();function gr(i,u){let e=u.filter(o=>o instanceof N),n=u.filter(o=>o instanceof L);return new W(i??new Y(),e,n);}function ct(i){return i.length===1?i[0]:new F(i[0],ct(i.slice(1)));}function ft(i){return i.length===1?i[0]:new V(i[0],ft(i.slice(1)));}function hr(i,u){function e(){this.constructor=i;}e.prototype=u.prototype,i.prototype=new e();}function D(i,u,e,n){var o=Error.call(this,i);return Object.setPrototypeOf&&Object.setPrototypeOf(o,D.prototype),o.expected=u,o.found=e,o.location=n,o.name="SyntaxError",o;}hr(D,Error);function $e(i,u,e){return e=e||" ",i.length>u?i:(u-=i.length,e+=e.repeat(u),i+e.slice(0,u));}D.prototype.format=function(i){var u="Error: "+this.message;if(this.location){var e=null,n;for(n=0;n<i.length;n++)if(i[n].source===this.location.source){e=i[n].text.split(/\r\n|\n|\r/g);break;}var o=this.location.start,p=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(o):o,m=this.location.source+":"+p.line+":"+p.column;if(e){var x=this.location.end,O=$e("",p.line.toString().length," "),$=e[o.line-1],v=o.line===x.line?x.column:$.length+1,d=v-o.column||1;u+=`
 --> `+m+`
`+O+` |
`+p.line+" | "+$+`
`+O+" | "+$e("",o.column-1," ")+$e("",d,"^");}else u+=`
 at `+m;}return u;};D.buildMessage=function(i,u){var e={literal:function($){return'"'+o($.text)+'"';},class:function($){var v=$.parts.map(function(d){return Array.isArray(d)?p(d[0])+"-"+p(d[1]):p(d);});return"["+($.inverted?"^":"")+v.join("")+"]";},any:function(){return"any character";},end:function(){return"end of input";},other:function($){return $.description;}};function n($){return $.charCodeAt(0).toString(16).toUpperCase();}function o($){return $.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(v){return"\\x0"+n(v);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(v){return"\\x"+n(v);});}function p($){return $.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(v){return"\\x0"+n(v);}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(v){return"\\x"+n(v);});}function m($){return e[$.type]($);}function x($){var v=$.map(m),d,A;if(v.sort(),v.length>0){for(d=1,A=1;d<v.length;d++)v[d-1]!==v[d]&&(v[A]=v[d],A++);v.length=A;}switch(v.length){case 1:return v[0];case 2:return v[0]+" or "+v[1];default:return v.slice(0,-1).join(", ")+", or "+v[v.length-1];}}function O($){return $?'"'+o($)+'"':"end of input";}return"Expected "+x(i)+" but "+O(u)+" found.";};function z(i,u){u=u!==void 0?u:{};var e={},n=u.grammarSource,o={Rules:qe,Rule:ue,Condition:Ue,Effects:Je,Question:he,Item:de,VariableName:pe,QuestionString:Be,ItemNameAndWeight:Ge,CategoryName:Ye},p=qe,m=";",x=":-",O="OR",$="AND",v="NOT",d=",",A="$",H="[",q="]",Re="kg",wt="g",bt=".",Oe=/^[^$,;#]/,yt=/^[a-zA-Z]/,Ce=/^[a-zA-Z0-9\-[\](){}_]/,Me=/^[^\],;#[]/,St=/^[,;]/,je=/^[^ ,;#]/,te=/^[0-9]/,ke=/^[ \t\n\r]/,Et=R("rule end"),xt=C(";",!1),It=R("rule"),At=C(":-",!1),re=R("condition"),Rt=C("OR",!1),Ot=C("AND",!1),fe=C("NOT",!1),Ct=C(",",!1),Ne=R("question"),Mt=C("$",!1),ze=K(["$",",",";","#"],!0,!1),jt=R("variable name"),kt=K([["a","z"],["A","Z"]],!1,!1),Te=K([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1),Nt=R("item"),zt=R("category"),Tt=C("[",!1),Wt=C("]",!1),Pt=R("category name"),We=K(["]",",",";","#","["],!0,!1),Ft=R("item name"),Vt=R("word"),Dt=K([",",";"],!1,!1),Pe=K([" ",",",";","#"],!0,!1),Lt=R("weight"),qt=C("kg",!1),Kt=C("g",!1),Ut=R("number"),se=K([["0","9"]],!1,!1),Qt=C(".",!1),Ht=R("whitespace"),Fe=K([" ","	",`
`,"\r"],!1,!1),Jt=or(),Bt=function(t,r){return gr(t,r);},Yt=function(t){return ft(t);},Gt=function(t){return ct(t);},Zt=function(t){return new P(t);},_t=function(t){return new M(t);},Xt=function(t,r){return new N(t.trim(),r.trim());},er=function(t,r){let{name:a,weight:l}=r;return new L(t.trim(),a,l);},tr=function(t,r){return u.trackWeight;},rr=function(t,r){let a=t.trim();return a.length||Ve("item name"),{name:a,weight:r};},sr=function(t){let r=t.trim();return r.length||Ve("item name"),{name:r,weight:void 0};},ir=function(t){return t*1e3;},nr=function(){return parseFloat(ar());},s=u.peg$currPos|0,S=s,J=[{line:1,column:1}],j=s,ie=u.peg$maxFailExpected||[],c=u.peg$silentFails|0,G;if(u.startRule){if(!(u.startRule in o))throw new Error(`Can't start parsing from rule "`+u.startRule+'".');p=o[u.startRule];}function ar(){return i.substring(S,s);}function wr(){return S;}function br(){return{source:n,start:S,end:s};}function yr(){return Z(S,s);}function Ve(t,r){throw r=r!==void 0?r:Z(S,s),Le([R(t)],i.substring(S,s),r);}function Sr(t,r){throw r=r!==void 0?r:Z(S,s),cr(t,r);}function C(t,r){return{type:"literal",text:t,ignoreCase:r};}function K(t,r,a){return{type:"class",parts:t,inverted:r,ignoreCase:a};}function or(){return{type:"any"};}function lr(){return{type:"end"};}function R(t){return{type:"other",description:t};}function De(t){var r=J[t],a;if(r)return r;if(t>=J.length)a=J.length-1;else for(a=t;!J[--a];);for(r=J[a],r={line:r.line,column:r.column};a<t;)i.charCodeAt(a)===10?(r.line++,r.column=1):r.column++,a++;return J[t]=r,r;}function Z(t,r,a){var l=De(t),f=De(r),h={source:n,start:{offset:t,line:l.line,column:l.column},end:{offset:r,line:f.line,column:f.column}};return a&&n&&typeof n.offset=="function"&&(h.start=n.offset(h.start),h.end=n.offset(h.end)),h;}function g(t){s<j||(s>j&&(j=s,ie=[]),ie.push(t));}function cr(t,r){return new D(t,null,null,r);}function Le(t,r,a){return new D(D.buildMessage(t,r),t,r,a);}function qe(){var t,r,a,l,f,h;for(t=s,r=b(),a=[],l=ue();l!==e;)a.push(l),l=s,f=Ke(),f!==e?(f=ue(),f===e?(s=l,l=e):l=f):l=f;return l=Ke(),l===e&&(l=null),f=b(),h=et(),h!==e?t=a:(s=t,t=e),t;}function Ke(){var t,r,a,l;return c++,t=s,r=b(),i.charCodeAt(s)===59?(a=m,s++):(a=e,c===0&&g(xt)),a!==e?(l=b(),r=[r,a,l],t=r):(s=t,t=e),c--,t===e&&(r=e,c===0&&g(Et)),t;}function ue(){var t,r,a,l,f,h;return c++,t=s,r=Ue(),r===e&&(r=null),a=b(),i.substr(s,2)===x?(l=x,s+=2):(l=e,c===0&&g(At)),l!==e?(f=b(),h=Je(),S=t,t=Bt(r,h)):(s=t,t=e),c--,t===e&&(r=e,c===0&&g(It)),t;}function Ue(){var t,r;return c++,t=fr(),c--,t===e&&(r=e,c===0&&g(re)),t;}function fr(){var t,r,a,l,f,h,y,_;for(c++,t=s,r=s,a=[],l=Qe();l!==e;)a.push(l),l=s,f=s,h=b(),i.substr(s,2)===O?(y=O,s+=2):(y=e,c===0&&g(Rt)),y!==e?(_=b(),h=[h,y,_],f=h):(s=f,f=e),f!==e?(f=Qe(),f===e?(s=l,l=e):l=f):l=f;return a.length<1?(s=r,r=e):r=a,r!==e&&(S=t,r=Yt(r)),t=r,c--,t===e&&(r=e,c===0&&g(re)),t;}function Qe(){var t,r,a,l,f,h,y,_;for(c++,t=s,r=s,a=[],l=ge();l!==e;)a.push(l),l=s,f=s,h=b(),i.substr(s,3)===$?(y=$,s+=3):(y=e,c===0&&g(Ot)),y!==e?(_=b(),h=[h,y,_],f=h):(s=f,f=e),f!==e?(f=ge(),f===e?(s=l,l=e):l=f):l=f;return a.length<1?(s=r,r=e):r=a,r!==e&&(S=t,r=Gt(r)),t=r,c--,t===e&&(r=e,c===0&&g(re)),t;}function ge(){var t,r,a,l,f,h;return c++,t=s,i.substr(s,3)===v?(r=v,s+=3):(r=e,c===0&&g(fe)),r!==e?(a=b(),i.substr(s,3)===v?(l=v,s+=3):(l=e,c===0&&g(fe)),l!==e?(f=b(),h=ge(),h!==e?t=h:(s=t,t=e)):(s=t,t=e)):(s=t,t=e),t===e&&(t=s,i.substr(s,3)===v?(r=v,s+=3):(r=e,c===0&&g(fe)),r!==e?(a=b(),l=He(),l!==e?(S=t,t=Zt(l)):(s=t,t=e)):(s=t,t=e),t===e&&(t=s,r=He(),r!==e?t=r:(s=t,t=e))),c--,t===e&&(r=e,c===0&&g(re)),t;}function He(){var t,r;return t=s,r=pe(),r!==e&&(S=t,r=_t(r)),t=r,t;}function Je(){var t,r,a,l,f,h,y;for(t=s,r=[],a=he(),a===e&&(a=de());a!==e;)r.push(a),a=s,l=s,f=b(),i.charCodeAt(s)===44?(h=d,s++):(h=e,c===0&&g(Ct)),h!==e?(y=b(),f=[f,h,y],l=f):(s=l,l=e),l!==e?(l=he(),l===e&&(l=de()),l===e?(s=a,a=e):a=l):a=l;return t=r,t;}function he(){var t,r,a,l;return c++,t=s,r=Be(),r!==e?(i.charCodeAt(s)===36?(a=A,s++):(a=e,c===0&&g(Mt)),a!==e?(l=pe(),l!==e?(S=t,t=Xt(r,l)):(s=t,t=e)):(s=t,t=e)):(s=t,t=e),c--,t===e&&(r=e,c===0&&g(Ne)),t;}function Be(){var t,r,a;if(c++,t=s,r=[],a=i.charAt(s),Oe.test(a)?s++:(a=e,c===0&&g(ze)),a!==e)for(;a!==e;)r.push(a),a=i.charAt(s),Oe.test(a)?s++:(a=e,c===0&&g(ze));else r=e;return r!==e?t=i.substring(t,s):t=r,c--,t===e&&(r=e,c===0&&g(Ne)),t;}function pe(){var t,r,a,l,f;if(c++,t=s,r=s,a=i.charAt(s),yt.test(a)?s++:(a=e,c===0&&g(kt)),a!==e){for(l=[],f=i.charAt(s),Ce.test(f)?s++:(f=e,c===0&&g(Te));f!==e;)l.push(f),f=i.charAt(s),Ce.test(f)?s++:(f=e,c===0&&g(Te));a=[a,l],r=a;}else s=r,r=e;return r!==e?t=i.substring(t,s):t=r,c--,t===e&&(r=e,c===0&&g(jt)),t;}function de(){var t,r,a,l;return c++,t=s,r=ur(),r!==e?(a=b(),l=Ge(),l!==e?(S=t,t=er(r,l)):(s=t,t=e)):(s=t,t=e),c--,t===e&&(r=e,c===0&&g(Nt)),t;}function ur(){var t,r,a,l,f,h;return c++,t=s,i.charCodeAt(s)===91?(r=H,s++):(r=e,c===0&&g(Tt)),r!==e?(a=b(),l=Ye(),l!==e?(f=b(),i.charCodeAt(s)===93?(h=q,s++):(h=e,c===0&&g(Wt)),h!==e?t=l:(s=t,t=e)):(s=t,t=e)):(s=t,t=e),c--,t===e&&(r=e,c===0&&g(zt)),t;}function Ye(){var t,r,a;if(c++,t=s,r=[],a=i.charAt(s),Me.test(a)?s++:(a=e,c===0&&g(We)),a!==e)for(;a!==e;)r.push(a),a=i.charAt(s),Me.test(a)?s++:(a=e,c===0&&g(We));else r=e;return r!==e?t=i.substring(t,s):t=r,c--,t===e&&(r=e,c===0&&g(Pt)),t;}function Ge(){var t,r,a,l,f;for(c++,t=s,r=s,a=[],l=Ze();l!==e;)a.push(l),l=s,f=b(),f=Ze(),f===e?(s=l,l=e):l=f;if(r=i.substring(r,s),a=b(),l=_e(),l!==e?(S=s,f=tr(r,l),f?f=void 0:f=e,f!==e?(S=t,t=rr(r,l)):(s=t,t=e)):(s=t,t=e),t===e){for(t=s,r=s,a=[],l=me();l!==e;)a.push(l),l=s,f=b(),f=me(),f===e?(s=l,l=e):l=f;r=i.substring(r,s),S=t,r=sr(r),t=r;}return c--,t===e&&(r=e,c===0&&g(Ft)),t;}function Ze(){var t,r,a,l,f,h;return c++,t=s,r=s,c++,a=s,l=_e(),l!==e?(f=b(),h=et(),h===e&&(h=i.charAt(s),St.test(h)?s++:(h=e,c===0&&g(Dt))),h!==e?(l=[l,f,h],a=l):(s=a,a=e)):(s=a,a=e),c--,a===e?r=void 0:(s=r,r=e),r!==e?(a=me(),a!==e?t=a:(s=t,t=e)):(s=t,t=e),c--,t===e&&(r=e,c===0&&g(Vt)),t;}function me(){var t,r,a;if(t=s,r=[],a=i.charAt(s),je.test(a)?s++:(a=e,c===0&&g(Pe)),a!==e)for(;a!==e;)r.push(a),a=i.charAt(s),je.test(a)?s++:(a=e,c===0&&g(Pe));else r=e;return r!==e?t=i.substring(t,s):t=r,t;}function _e(){var t,r,a;return c++,t=s,r=Xe(),r!==e?(i.substr(s,2)===Re?(a=Re,s+=2):(a=e,c===0&&g(qt)),a!==e?(S=t,t=ir(r)):(s=t,t=e)):(s=t,t=e),t===e&&(t=s,r=Xe(),r!==e?(i.charCodeAt(s)===103?(a=wt,s++):(a=e,c===0&&g(Kt)),a===e&&(a=null),t=r):(s=t,t=e)),c--,t===e&&(r=e,c===0&&g(Lt)),t;}function Xe(){var t,r,a,l,f,h,y;if(c++,t=s,r=[],a=i.charAt(s),te.test(a)?s++:(a=e,c===0&&g(se)),a!==e)for(;a!==e;)r.push(a),a=i.charAt(s),te.test(a)?s++:(a=e,c===0&&g(se));else r=e;if(r!==e){if(a=s,i.charCodeAt(s)===46?(l=bt,s++):(l=e,c===0&&g(Qt)),l!==e){if(f=s,h=[],y=i.charAt(s),te.test(y)?s++:(y=e,c===0&&g(se)),y!==e)for(;y!==e;)h.push(y),y=i.charAt(s),te.test(y)?s++:(y=e,c===0&&g(se));else h=e;h!==e?f=i.substring(f,s):f=h,f!==e?(l=[l,f],a=l):(s=a,a=e);}else s=a,a=e;a===e&&(a=null),S=t,t=nr();}else s=t,t=e;return c--,t===e&&(r=e,c===0&&g(Ut)),t;}function b(){var t,r;for(c++,t=[],r=i.charAt(s),ke.test(r)?s++:(r=e,c===0&&g(Fe));r!==e;)t.push(r),r=i.charAt(s),ke.test(r)?s++:(r=e,c===0&&g(Fe));return c--,r=e,c===0&&g(Ht),t;}function et(){var t,r;return t=s,c++,i.length>s?(r=i.charAt(s),s++):(r=e,c===0&&g(Jt)),c--,r===e?t=void 0:(s=t,t=e),t;}if(G=p(),u.peg$library)return{peg$result:G,peg$currPos:s,peg$FAILED:e,peg$maxFailExpected:ie,peg$maxFailPos:j};if(G!==e&&s===i.length)return G;throw G!==e&&s<i.length&&g(lr()),Le(ie,j<i.length?i.charAt(j):null,j<i.length?Z(j,j+1):Z(j,j));}var pr={isTrackWeight:()=>!1},dr=new ne("PARSER_CONFIG_PROVIDER"),ae=(()=>{class i{injector=w(B);isTrackWeight(){return this.injector.get(dr,pr).isTrackWeight();}makeOptions(e,n={}){return{startRule:e,trackWeight:n.forceWeightTracking??this.isTrackWeight()};}parseCondition(e){return z(e,this.makeOptions("Condition"));}parseQuestion(e){return z(e,this.makeOptions("Question"));}parseItem(e,n){return z(e,this.makeOptions("Item",{forceWeightTracking:n}));}parseEffects(e){return z(e,this.makeOptions("Effects"));}parseRule(e){return z(e,this.makeOptions("Rule"));}parseRules(e){let n=e.split(/\r?\n/g).map(o=>o.replace(/#.*/,"")).join(`
`);try{return z(n,this.makeOptions("Rules"));}catch(o){let p=[];if(p.push("Error parsing rules"),o instanceof D){let m=o.location.start.line.toString(),x=o.location.start.column.toString();p.push(" at line ",m," column ",x),p.push(":",`
`,o.message);}else console.error(o);throw new Error(p.join(""));}}validateVariableName(e){z(e,this.makeOptions("VariableName"));}validateQuestionString(e){z(e,this.makeOptions("QuestionString"));}validateItemNameAndWeight(e){z(e,this.makeOptions("ItemNameAndWeight"));}validateCategoryName(e){z(e,this.makeOptions("CategoryName"));}static ɵfac=function(n){return new(n||i)();};static ɵprov=I({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var we=(()=>{class i{serializer=w(ve);parser=w(ae);extractVariables(e){return e.reduce((n,o)=>[...n,...o.questions.map(p=>p.variable)],[]);}extractCategories(e){let n=new Set();for(let o of e)for(let p of o.items)n.add(p.category);return Array.from(n);}renameVariable(e,n,o){if(o instanceof Array)return o.map(m=>this.renameVariable(e,n,m));if(o instanceof N)return o.variable===e?new N(o.question,n):o;if(o instanceof W)return new W(this.renameVariable(e,n,o.condition),o.questions.map(m=>this.renameVariable(e,n,m)),o.items);if(o instanceof M)return o.variable===e?new M(n):o;if(o instanceof P)return new P(this.renameVariable(e,n,o.not));if(o instanceof F)return new F(this.renameVariable(e,n,o.left),this.renameVariable(e,n,o.right));if(o instanceof V)return new V(this.renameVariable(e,n,o.left),this.renameVariable(e,n,o.right));let p=o;throw new Error("Unknown item type: "+p);}filterActive(e){let n=e.rules.filter(p=>p.condition.evaluate(e.model)),o=this.extractVariables(n).reduce((p,m)=>tt(T({},p),{[m]:e.model[m]}),{[Y.string]:!0});return n.length===e.rules.length?{model:o,rules:n}:this.filterActive({model:o,rules:n});}contains(e,n){let o=n.toLowerCase();if(e instanceof W)return this.contains(e.condition,n)||e.questions.some(m=>this.contains(m,n))||e.items.some(m=>this.contains(m,n));if(e instanceof N)return e.question.toLowerCase().includes(o)||e.variable.toLowerCase().includes(o);if(e instanceof L)return e.category.toLowerCase().includes(o)||e.name.toLowerCase().includes(o);if(e instanceof M)return e.variable.toLowerCase().includes(o);if(e instanceof P)return this.contains(e.not,n);if(e instanceof F)return this.contains(e.left,n)||this.contains(e.right,n);if(e instanceof V)return this.contains(e.left,n)||this.contains(e.right,n);let p=e;throw new Error("Unknown item type: "+p);}countItemsAndWeights(e){return e.reduce((n,o)=>o.items.reduce((p,m)=>{let x;if(this.parser.isTrackWeight())x=m.weight?1:0;else{let{weight:O}=this.parser.parseItem(this.serializer.serialize(m),!0);x=O?1:0;}return{items:p.items+1,weights:p.weights+x};},n),{items:0,weights:0});}static ɵfac=function(n){return new(n||i)();};static ɵprov=I({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var ut=`:-
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
`;var gt=`:-
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
`;var be=new ne("RULES_TEMPLATE");function mr(i){return i.startsWith("de")?gt:ut;}function Zr(){return it([{provide:be,useFactory:mr,deps:[nt]}]);}function oe(i,u){let e=i.getItem("state"),n;if(e){let o=JSON.parse(e);n=T(T({},u),o);}else n=T({},u);return n;}function ht(i,u){if(typeof i!=typeof u)return!1;if(i&&u&&typeof i=="object"){let e=Object.keys(i),n=Object.keys(u);return e.length===n.length&&e.every(o=>ht(i[o],u[o]));}return i===u;}function vr(i,u){let e=Object.keys(u).filter(n=>!ht(i[n],u[n])).map(n=>[n,i[n]]);return e.length===0?null:Object.fromEntries(e);}function le(i,u,e){let n=vr(u,e);n===null?i.removeItem("state"):i.setItem("state",JSON.stringify(n));}var pt=["en","de"],X={answers:{},checkedItems:[],collapsedCategories:[],rules:void 0,fadeOutDisabledRules:!1,highlightVariableStatus:!1,refactorVariables:!0,categorySorting:"alphabetically",trackWeight:!1,answersLocked:!1,theme:"system",fontSize:"normal",language:"auto",exportReminder:!1,lastExportHash:"",lastExportDate:0},ye=Object.keys(X),ce=(()=>{class i{state=oe(localStorage,X);injector=w(B);signalMap=new Map();constructor(){this.loadLegacyState(),this.initializeSignals();}initializeSignals(){for(let e of ye){let n=k(this.state[e]);U(()=>{let o=n();o!==this.state[e]&&(this.state[e]=o,this.persist());},{manualCleanup:!0,injector:this.injector}),this.signalMap.set(e,n);}}loadLegacyState(){if(localStorage.getItem("answers")&&(this.state.answers=JSON.parse(localStorage.getItem("answers")),localStorage.removeItem("answers")),localStorage.getItem("checkedItems")&&(this.state.checkedItems=JSON.parse(localStorage.getItem("checkedItems")),localStorage.removeItem("checkedItems")),localStorage.getItem("collapsedCategories")&&(this.state.collapsedCategories=JSON.parse(localStorage.getItem("collapsedCategories")),localStorage.removeItem("collapsedCategories")),localStorage.getItem("rules")&&(this.state.rules=localStorage.getItem("rules"),localStorage.removeItem("rules")),localStorage.getItem("config")){let e=JSON.parse(localStorage.getItem("config"));this.state.fadeOutDisabledRules=e.fadeOutDisabledRules,this.state.trackWeight=e.trackWeight,this.state.answersLocked=e.answersLocked,this.state.theme=e.theme,this.state.language=e.language,localStorage.removeItem("config");}this.persist();}persist(){le(localStorage,this.state,X);}handles(e){return ye.includes(e);}signal(e){return this.signalMap.get(e);}set(e,n){this.signal(e).set(n);}get(e){return this.signal(e)();}reset(){this.state=T({},X),this.persist(),ye.forEach(e=>{this.signal(e).set(X[e]);});}static ɵfac=function(n){return new(n||i)();};static ɵprov=I({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var dt=(()=>{class i{state=w(ce);parser=w(ae);refactor=w(we);rulesTemplate=w(be);signalMap=new Map();constructor(){this.initializeSignals();}initializeSignals(){this.signalMap.set("isMobile",E(()=>{let d=navigator.userAgent;return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(d);}));let e=k(window.scrollY);window.addEventListener("scroll",()=>{e.set(window.scrollY);}),this.signalMap.set("scrollY",e.asReadonly()),this.signalMap.set("preferredLanguage",E(()=>{let d=this.state.signal("language")();return d==="auto"?navigator.languages.map(q=>q.split("-")[0]).find(q=>pt.includes(q))??"en":d;})),this.signalMap.set("rulesContainComments",E(()=>{let d=this.state.signal("rules")();return!!d&&d.includes("#");}));let n=E(()=>{let d=this.state.signal("rules")();return d||this.rulesTemplate;});this.signalMap.set("rulesOrTemplate",n);let o=E(()=>{try{return{parsedRules:this.parser.parseRules(n()),ruleParserError:""};}catch(d){d instanceof Error?console.warn(d.message):console.error(d);let A=d instanceof Error?d.message:"An unknown error occurred";return{parsedRules:[],ruleParserError:A};}}),p=E(()=>{let{ruleParserError:d,parsedRules:A}=o();if(!d){let{items:H,weights:q}=this.refactor.countItemsAndWeights(A);return q/H;}return 0;});this.signalMap.set("percentageOfItemsWithWeights",p);let m=E(()=>o().parsedRules);this.signalMap.set("parsedRules",m),this.signalMap.set("ruleParserError",E(()=>o().ruleParserError)),this.signalMap.set("categories",E(()=>this.refactor.extractCategories(m()))),this.signalMap.set("variables",E(()=>this.refactor.extractVariables(m())));let x=E(()=>this.refactor.filterActive({rules:m(),model:this.state.signal("answers")()})),O=E(()=>x().rules);this.signalMap.set("activeRules",O),this.signalMap.set("activeAnswers",E(()=>x().model)),this.signalMap.set("activeQuestions",E(()=>O().flatMap(d=>d.questions))),this.signalMap.set("activeItems",E(()=>O().flatMap(d=>d.items)));let $=E(()=>$r(n()).toString(16));this.signalMap.set("rulesHash",$);let v=k(new Date().getTime());this.signalMap.set("lastRulesAction",v.asReadonly()),U(()=>{n(),v.set(new Date().getTime());}),this.signalMap.set("exportFileName",E(()=>{let d=new Date(v()).toISOString().replace(/\..*$/,"").replace(/[T:]/g,"-"),A=$();return`travel-packlist-rules-${d}-${A}.txt`;})),this.signalMap.set("exportNeeded",E(()=>{let d=this.signal("rulesHash")(),A=this.state.signal("lastExportHash")(),H=d!==A;return!!this.state.signal("rules")()&&H;}));}handles(e){return this.signalMap.has(e);}signal(e){return this.signalMap.get(e);}get(e){return this.signal(e)();}static ɵfac=function(n){return new(n||i)();};static ɵprov=I({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),$r=function(i,u=0){let e=3735928559^u,n=1103547991^u;for(let o=0,p;o<i.length;o++)p=i.charCodeAt(o),e=Math.imul(e^p,2654435761),n=Math.imul(n^p,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&n)+(e>>>0);};var Ee={rulesMode:"view",filterRulesQuery:void 0},Se=Object.keys(Ee),mt=(()=>{class i{route=w(ot);router=w(lt);signalMap=new Map();constructor(){for(let e of Se)this.signalMap.set(e,this.createSignal(e));}createSignal(e){let n=k(void 0);return this.router.events.pipe(st(o=>o instanceof at),rt(()=>this.route.snapshot.queryParams[e]??Ee[e])).subscribe(o=>{o!==""&&n.set(o);}),U(()=>{let o=n()||void 0;o===Ee[e]&&(o=void 0),this.route.snapshot.queryParams[e]!==o&&this.router.navigate([],{queryParams:{[e]:o},queryParamsHandling:"merge",relativeTo:this.route,replaceUrl:!0});}),n;}handles(e){return Se.includes(e);}signal(e){return this.signalMap.get(e);}get(e){return this.signal(e)();}set(e,n){this.signal(e).set(n);}reset(){for(let e of Se)this.signal(e).set(void 0);}static ɵfac=function(n){return new(n||i)();};static ɵprov=I({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var ee={clipboardItems:[],clipboardQuestions:[]},xe=Object.keys(ee),vt=(()=>{class i{state=oe(sessionStorage,ee);injector=w(B);signalMap=new Map();constructor(){this.initializeSignals();}initializeSignals(){for(let e of xe){let n=k(this.state[e]);U(()=>{let o=n();o!==this.state[e]&&(this.state[e]=o,this.persist());},{manualCleanup:!0,injector:this.injector}),this.signalMap.set(e,n);}}persist(){le(sessionStorage,this.state,ee);}handles(e){return xe.includes(e);}signal(e){return this.signalMap.get(e);}set(e,n){this.signal(e).set(n);}get(e){return this.signal(e)();}reset(){this.state=T({},ee),this.persist(),xe.forEach(e=>{this.signal(e).set(ee[e]);});}static ɵfac=function(n){return new(n||i)();};static ɵprov=I({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Ae={serviceWorkerStatus:"init"},Ie=Object.keys(Ae),$t=(()=>{class i{signalMap=new Map();constructor(){this.initializeSignals();}initializeSignals(){for(let e of Ie){let n=k(Ae[e]);this.signalMap.set(e,n);}}handles(e){return Ie.includes(e);}signal(e){return this.signalMap.get(e);}get(e){return this.signal(e)();}set(e,n){this.signal(e).set(n);}reset(){for(let e of Ie)this.signal(e).set(Ae[e]);}static ɵfac=function(n){return new(n||i)();};static ɵprov=I({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var ks=(()=>{class i{persistent=w(ce);router=w(mt);session=w(vt);transient=w($t);derived=w(dt);get(e){if(this.persistent.handles(e))return this.persistent.get(e);if(this.router.handles(e))return this.router.get(e);if(this.session.handles(e))return this.session.get(e);if(this.transient.handles(e))return this.transient.get(e);if(this.derived.handles(e))return this.derived.get(e);throw new Error(`Key ${e} not handled in state`);}signal(e){if(this.persistent.handles(e))return this.persistent.signal(e);if(this.router.handles(e))return this.router.signal(e);if(this.session.handles(e))return this.session.signal(e);if(this.transient.handles(e))return this.transient.signal(e);if(this.derived.handles(e))return this.derived.signal(e);throw new Error(`Key ${e} not handled in state`);}set(e,n){if(this.persistent.handles(e))this.persistent.signal(e).set(n);else if(this.router.handles(e))this.router.set(e,n);else if(this.session.handles(e))this.session.set(e,n);else if(this.transient.handles(e))this.transient.set(e,n);else throw this.derived.handles(e)?new Error("Key is derived and cannot be set"):new Error(`Key ${e} not handled in state`);}reset(){this.persistent.reset(),this.session.reset(),this.router.reset();}static ɵfac=function(n){return new(n||i)();};static ɵprov=I({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();export{W as a,N as b,L as c,M as d,Er as e,Y as f,P as g,F as h,V as i,D as j,dr as k,ae as l,ve as m,we as n,Zr as o,ks as p};/**i18n:cbcf01d4640d52ad6821130aa8bde718125de417ff622aa7dfac4aa297a95122*/