import{h as it,i as at,k as nt}from"./chunk-5PIG4D3U.js";import{B as st,W as K,Z as rt,_a as A,aa as S,fc as w,hc as L,oa as B,p as tt}from"./chunk-7VAD6DTB.js";import{a as M,b as et}from"./chunk-2NFLSA4Y.js";var j=class{constructor(t,e=[],o=[]){this.condition=t;this.questions=e;this.items=o}},W=class{constructor(t,e){this.question=t;this.variable=e}static NEW_QUESTION_NAME=$localize`:@@model.new.question:New Question`;static NEW_VARIABLE_NAME="new_variable"},F=class{constructor(t,e,o){this.category=t;this.name=e;this.weight=o}static NEW_ITEM_NAME=$localize`:@@model.new.item:New Item`;static NEW_CATEGORY_NAME=$localize`:@@model.new.category:New`},k=class{constructor(t){this.variable=t}evaluate(t){return t[this.variable]}},ot=class a extends k{static string="please_select";constructor(){super(a.string)}},q=class a extends k{static string="always";constructor(){super(a.string)}evaluate(){return!0}},N=class{constructor(t){this.not=t}evaluate(t){return!this.not.evaluate(t)}},V=class{constructor(t,e){this.left=t;this.right=e}evaluate(t){return this.left.evaluate(t)&&this.right.evaluate(t)}},D=class{constructor(t,e){this.left=t;this.right=e}evaluate(t){return this.left.evaluate(t)||this.right.evaluate(t)}};var le=class a{serializeRules(t){return t.map(this.serialize.bind(this)).map(e=>e+";").join(`

`)}serializeEffects(t){return t.questions.map(this.serialize.bind(this)).concat(t.items.map(this.serialize.bind(this)))}serializeWeight(t,e,o=-1){if(!t)return"0g";let f=(o<0?t/1e3:(t/1e3).toFixed(o)).toString()+"kg",g=(t*1).toString()+"g";return e?e==="kg"?f:g:f.length<=g.length?f:g}serialize(t){if(t instanceof j){let o=[];if(!(t.condition instanceof q)){let g=this.serialize(t.condition);g&&o.push(g," ")}o.push(":-");let f=this.serializeEffects(t);if(f.length===1&&o.length===1)o.push(" ",f[0]);else for(let g=0;g<f.length;g++){let $=f[g];g>0&&o.push(","),o.push(`
`,"   ",$)}return o.join("")}else{if(t instanceof W)return t.question+" $"+t.variable;if(t instanceof F){let o=`[${t.category}] ${t.name}`.trim();return t.weight&&(o+=" "+this.serializeWeight(t.weight)),o}else{if(t instanceof k)return t.variable;if(t instanceof N)return"NOT "+this.serialize(t.not);if(t instanceof V)return this.serialize(t.left)+" AND "+this.serialize(t.right);if(t instanceof D)return this.serialize(t.left)+" OR "+this.serialize(t.right)}}let e=t;throw new Error("Cannot serialize unknown input",e)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};function os(a,t){let e=t.filter(f=>f instanceof W),o=t.filter(f=>f instanceof F);return new j(a??new q,e,o)}function lt(a){return a.length===1?a[0]:new V(a[0],lt(a.slice(1)))}function ct(a){return a.length===1?a[0]:new D(a[0],ct(a.slice(1)))}function ls(a,t){function e(){this.constructor=a}e.prototype=t.prototype,a.prototype=new e}function z(a,t,e,o){var f=Error.call(this,a);return Object.setPrototypeOf&&Object.setPrototypeOf(f,z.prototype),f.expected=t,f.found=e,f.location=o,f.name="SyntaxError",f}ls(z,Error);function we(a,t,e){return e=e||" ",a.length>t?a:(t-=a.length,e+=e.repeat(t),a+e.slice(0,t))}z.prototype.format=function(a){var t="Error: "+this.message;if(this.location){var e=null,o;for(o=0;o<a.length;o++)if(a[o].source===this.location.source){e=a[o].text.split(/\r\n|\n|\r/g);break}var f=this.location.start,g=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(f):f,$=this.location.source+":"+g.line+":"+g.column;if(e){var R=this.location.end,P=we("",g.line.toString().length," "),y=e[f.line-1],p=f.line===R.line?R.column:y.length+1,v=p-f.column||1;t+=`
 --> `+$+`
`+P+` |
`+g.line+" | "+y+`
`+P+" | "+we("",f.column-1," ")+we("",v,"^")}else t+=`
 at `+$}return t};z.buildMessage=function(a,t){var e={literal:function(y){return'"'+f(y.text)+'"'},class:function(y){var p=y.parts.map(function(v){return Array.isArray(v)?g(v[0])+"-"+g(v[1]):g(v)});return"["+(y.inverted?"^":"")+p.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(y){return y.description}};function o(y){return y.charCodeAt(0).toString(16).toUpperCase()}function f(y){return y.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(p){return"\\x0"+o(p)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(p){return"\\x"+o(p)})}function g(y){return y.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(p){return"\\x0"+o(p)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(p){return"\\x"+o(p)})}function $(y){return e[y.type](y)}function R(y){var p=y.map($),v,C;if(p.sort(),p.length>0){for(v=1,C=1;v<p.length;v++)p[v-1]!==p[v]&&(p[C]=p[v],C++);p.length=C}switch(p.length){case 1:return p[0];case 2:return p[0]+" or "+p[1];default:return p.slice(0,-1).join(", ")+", or "+p[p.length-1]}}function P(y){return y?'"'+f(y)+'"':"end of input"}return"Expected "+R(a)+" but "+P(t)+" found."};function O(a,t){t=t!==void 0?t:{};var e={},o=t.grammarSource,f={Rules:qe,Rule:me,Condition:He,Effects:Ye,Question:Se,Item:Te,VariableName:be,QuestionString:Ge,ItemNameAndWeight:Xe,CategoryName:Ze},g=qe,$=";",R=":-",P="OR",y="AND",p="NOT",v=",",C="$",Q="[",ht="]",Ce="kg",dt="g",yt=".",Ee=/^[^$,;#]/,mt=/^[a-zA-Z]/,Ae=/^[a-zA-Z0-9\-[\](){}_]/,We=/^[^\],;#[]/,Oe=/^[^ ,;#]/,se=/^[0-9]/,Pe=/^[ \t\n\r]/,vt=ts(),St=x("rule end"),bt=I(";",!1),Tt=x("rule"),wt=I(":-",!1),re=x("condition"),Kt=I("OR",!1),$t=I("AND",!1),ye=I("NOT",!1),Rt=I(",",!1),Me=x("question"),xt=I("$",!1),je=H(["$",",",";","#"],!0,!1),It=x("variable name"),kt=H([["a","z"],["A","Z"]],!1,!1),Ne=H([["a","z"],["A","Z"],["0","9"],"-","[","]","(",")","{","}","_"],!1,!1),Ct=x("item"),Et=x("category"),At=I("[",!1),Wt=I("]",!1),Ot=x("category name"),Ve=H(["]",",",";","#","["],!0,!1),Pt=x("item name"),De=H([" ",",",";","#"],!0,!1),Mt=x("weight"),jt=I("kg",!1),Nt=I("g",!1),Vt=x("number"),ie=H([["0","9"]],!1,!1),Dt=I(".",!1),Ft=x("whitespace"),Fe=H([" ","	",`
`,"\r"],!1,!1),zt=function(s,r){return os(s,r)},Qt=function(s){return ct(s)},Lt=function(s){return lt(s)},qt=function(s){return new N(s)},Ut=function(s){return new k(s)},Ht=function(s,r){return new W(s.trim(),r.trim())},Jt=function(s,r){let{name:n,weight:l}=r;return new F(s.trim(),n,l)},Bt=function(){return a.substring(es().end).replaceAll(/[,;].*/gs,"").trim().split(/\s+/).length-1},Yt=function(s,r){return s.length||ze("item name"),typeof r=="string"?{name:s.concat(r).join(" "),weight:void 0}:{name:s.join(" "),weight:r}},Gt=function(s){return s.length||ze("item name"),{name:s.join(" "),weight:void 0}},Zt=function(s){return t.trackWeight?s*1e3:ne()},Xt=function(s){return t.trackWeight?s:ne()},_t=function(){return t.trackWeight?parseFloat(ne()):ne()},i=t.peg$currPos|0,T=i,J=[{line:1,column:1}],E=i,ae=t.peg$maxFailExpected||[],c=t.peg$silentFails|0,Z;if(t.startRule){if(!(t.startRule in f))throw new Error(`Can't start parsing from rule "`+t.startRule+'".');g=f[t.startRule]}function ne(){return a.substring(T,i)}function gs(){return T}function es(){return{source:o,start:T,end:i}}function hs(){return X(T,i)}function ze(s,r){throw r=r!==void 0?r:X(T,i),Le([x(s)],a.substring(T,i),r)}function ds(s,r){throw r=r!==void 0?r:X(T,i),rs(s,r)}function I(s,r){return{type:"literal",text:s,ignoreCase:r}}function H(s,r,n){return{type:"class",parts:s,inverted:r,ignoreCase:n}}function ts(){return{type:"any"}}function ss(){return{type:"end"}}function x(s){return{type:"other",description:s}}function Qe(s){var r=J[s],n;if(r)return r;if(s>=J.length)n=J.length-1;else for(n=s;!J[--n];);for(r=J[n],r={line:r.line,column:r.column};n<s;)a.charCodeAt(n)===10?(r.line++,r.column=1):r.column++,n++;return J[s]=r,r}function X(s,r,n){var l=Qe(s),u=Qe(r),h={source:o,start:{offset:s,line:l.line,column:l.column},end:{offset:r,line:u.line,column:u.column}};return n&&o&&typeof o.offset=="function"&&(h.start=o.offset(h.start),h.end=o.offset(h.end)),h}function d(s){i<E||(i>E&&(E=i,ae=[]),ae.push(s))}function rs(s,r){return new z(s,null,null,r)}function Le(s,r,n){return new z(z.buildMessage(s,r),s,r,n)}function qe(){var s,r,n,l,u,h,m;for(s=i,r=b(),n=[],l=me();l!==e;)n.push(l),l=i,u=Ue(),u!==e?(u=me(),u===e?(i=l,l=e):l=u):l=u;return l=Ue(),l===e&&(l=null),u=b(),h=i,c++,a.length>i?(m=a.charAt(i),i++):(m=e,c===0&&d(vt)),c--,m===e?h=void 0:(i=h,h=e),h!==e?s=n:(i=s,s=e),s}function Ue(){var s,r,n,l;return c++,s=i,r=b(),a.charCodeAt(i)===59?(n=$,i++):(n=e,c===0&&d(bt)),n!==e?(l=b(),r=[r,n,l],s=r):(i=s,s=e),c--,s===e&&(r=e,c===0&&d(St)),s}function me(){var s,r,n,l,u,h;return c++,s=i,r=He(),r===e&&(r=null),n=b(),a.substr(i,2)===R?(l=R,i+=2):(l=e,c===0&&d(wt)),l!==e?(u=b(),h=Ye(),T=s,s=zt(r,h)):(i=s,s=e),c--,s===e&&(r=e,c===0&&d(Tt)),s}function He(){var s,r;return c++,s=is(),c--,s===e&&(r=e,c===0&&d(re)),s}function is(){var s,r,n,l,u,h,m,_;for(c++,s=i,r=i,n=[],l=Je();l!==e;)n.push(l),l=i,u=i,h=b(),a.substr(i,2)===P?(m=P,i+=2):(m=e,c===0&&d(Kt)),m!==e?(_=b(),h=[h,m,_],u=h):(i=u,u=e),u!==e?(u=Je(),u===e?(i=l,l=e):l=u):l=u;return n.length<1?(i=r,r=e):r=n,r!==e&&(T=s,r=Qt(r)),s=r,c--,s===e&&(r=e,c===0&&d(re)),s}function Je(){var s,r,n,l,u,h,m,_;for(c++,s=i,r=i,n=[],l=ve();l!==e;)n.push(l),l=i,u=i,h=b(),a.substr(i,3)===y?(m=y,i+=3):(m=e,c===0&&d($t)),m!==e?(_=b(),h=[h,m,_],u=h):(i=u,u=e),u!==e?(u=ve(),u===e?(i=l,l=e):l=u):l=u;return n.length<1?(i=r,r=e):r=n,r!==e&&(T=s,r=Lt(r)),s=r,c--,s===e&&(r=e,c===0&&d(re)),s}function ve(){var s,r,n,l,u,h;return c++,s=i,a.substr(i,3)===p?(r=p,i+=3):(r=e,c===0&&d(ye)),r!==e?(n=b(),a.substr(i,3)===p?(l=p,i+=3):(l=e,c===0&&d(ye)),l!==e?(u=b(),h=ve(),h!==e?s=h:(i=s,s=e)):(i=s,s=e)):(i=s,s=e),s===e&&(s=i,a.substr(i,3)===p?(r=p,i+=3):(r=e,c===0&&d(ye)),r!==e?(n=b(),l=Be(),l!==e?(T=s,s=qt(l)):(i=s,s=e)):(i=s,s=e),s===e&&(s=i,r=Be(),r!==e?s=r:(i=s,s=e))),c--,s===e&&(r=e,c===0&&d(re)),s}function Be(){var s,r;return s=i,r=be(),r!==e&&(T=s,r=Ut(r)),s=r,s}function Ye(){var s,r,n,l,u,h,m;for(s=i,r=[],n=Se(),n===e&&(n=Te());n!==e;)r.push(n),n=i,l=i,u=b(),a.charCodeAt(i)===44?(h=v,i++):(h=e,c===0&&d(Rt)),h!==e?(m=b(),u=[u,h,m],l=u):(i=l,l=e),l!==e?(l=Se(),l===e&&(l=Te()),l===e?(i=n,n=e):n=l):n=l;return s=r,s}function Se(){var s,r,n,l;return c++,s=i,r=Ge(),r!==e?(a.charCodeAt(i)===36?(n=C,i++):(n=e,c===0&&d(xt)),n!==e?(l=be(),l!==e?(T=s,s=Ht(r,l)):(i=s,s=e)):(i=s,s=e)):(i=s,s=e),c--,s===e&&(r=e,c===0&&d(Me)),s}function Ge(){var s,r,n;if(c++,s=i,r=[],n=a.charAt(i),Ee.test(n)?i++:(n=e,c===0&&d(je)),n!==e)for(;n!==e;)r.push(n),n=a.charAt(i),Ee.test(n)?i++:(n=e,c===0&&d(je));else r=e;return r!==e?s=a.substring(s,i):s=r,c--,s===e&&(r=e,c===0&&d(Me)),s}function be(){var s,r,n,l,u;if(c++,s=i,r=i,n=a.charAt(i),mt.test(n)?i++:(n=e,c===0&&d(kt)),n!==e){for(l=[],u=a.charAt(i),Ae.test(u)?i++:(u=e,c===0&&d(Ne));u!==e;)l.push(u),u=a.charAt(i),Ae.test(u)?i++:(u=e,c===0&&d(Ne));n=[n,l],r=n}else i=r,r=e;return r!==e?s=a.substring(s,i):s=r,c--,s===e&&(r=e,c===0&&d(It)),s}function Te(){var s,r,n,l;return c++,s=i,r=as(),r!==e?(n=b(),l=Xe(),l!==e?(T=s,s=Jt(r,l)):(i=s,s=e)):(i=s,s=e),c--,s===e&&(r=e,c===0&&d(Ct)),s}function as(){var s,r,n,l,u,h;return c++,s=i,a.charCodeAt(i)===91?(r=Q,i++):(r=e,c===0&&d(At)),r!==e?(n=b(),l=Ze(),l!==e?(u=b(),a.charCodeAt(i)===93?(h=ht,i++):(h=e,c===0&&d(Wt)),h!==e?s=l:(i=s,s=e)):(i=s,s=e)):(i=s,s=e),c--,s===e&&(r=e,c===0&&d(Et)),s}function Ze(){var s,r,n;if(c++,s=i,r=[],n=a.charAt(i),We.test(n)?i++:(n=e,c===0&&d(Ve)),n!==e)for(;n!==e;)r.push(n),n=a.charAt(i),We.test(n)?i++:(n=e,c===0&&d(Ve));else r=e;return r!==e?s=a.substring(s,i):s=r,c--,s===e&&(r=e,c===0&&d(Ot)),s}function Xe(){var s,r,n,l,u,h;for(c++,s=i,r=Bt(),n=i,l=[],l.length>=(r|0)?u=e:u=oe();u!==e;)l.push(u),l.length>=(r|0)?u=e:(u=i,h=b(),h=oe(),h===e?(i=u,u=e):u=h);if(l.length<(r|0)?(i=n,n=e):n=l,r=n,r!==e?(n=b(),l=ns(),l!==e?(T=s,s=Yt(r,l)):(i=s,s=e)):(i=s,s=e),s===e){for(s=i,r=[],n=oe();n!==e;)r.push(n),n=i,l=b(),l=oe(),l===e?(i=n,n=e):n=l;T=s,r=Gt(r),s=r}return c--,s===e&&(r=e,c===0&&d(Pt)),s}function oe(){var s,r,n;if(s=i,r=[],n=a.charAt(i),Oe.test(n)?i++:(n=e,c===0&&d(De)),n!==e)for(;n!==e;)r.push(n),n=a.charAt(i),Oe.test(n)?i++:(n=e,c===0&&d(De));else r=e;return r!==e?s=a.substring(s,i):s=r,s}function ns(){var s,r,n;return c++,s=i,r=_e(),r!==e?(a.substr(i,2)===Ce?(n=Ce,i+=2):(n=e,c===0&&d(jt)),n!==e?(T=s,s=Zt(r)):(i=s,s=e)):(i=s,s=e),s===e&&(s=i,r=_e(),r!==e?(a.charCodeAt(i)===103?(n=dt,i++):(n=e,c===0&&d(Nt)),n===e&&(n=null),T=s,s=Xt(r)):(i=s,s=e)),c--,s===e&&(r=e,c===0&&d(Mt)),s}function _e(){var s,r,n,l,u,h,m;if(c++,s=i,r=[],n=a.charAt(i),se.test(n)?i++:(n=e,c===0&&d(ie)),n!==e)for(;n!==e;)r.push(n),n=a.charAt(i),se.test(n)?i++:(n=e,c===0&&d(ie));else r=e;if(r!==e){if(n=i,a.charCodeAt(i)===46?(l=yt,i++):(l=e,c===0&&d(Dt)),l!==e){if(u=i,h=[],m=a.charAt(i),se.test(m)?i++:(m=e,c===0&&d(ie)),m!==e)for(;m!==e;)h.push(m),m=a.charAt(i),se.test(m)?i++:(m=e,c===0&&d(ie));else h=e;h!==e?u=a.substring(u,i):u=h,u!==e?(l=[l,u],n=l):(i=n,n=e)}else i=n,n=e;n===e&&(n=null),T=s,s=_t()}else i=s,s=e;return c--,s===e&&(r=e,c===0&&d(Vt)),s}function b(){var s,r;for(c++,s=[],r=a.charAt(i),Pe.test(r)?i++:(r=e,c===0&&d(Fe));r!==e;)s.push(r),r=a.charAt(i),Pe.test(r)?i++:(r=e,c===0&&d(Fe));return c--,r=e,c===0&&d(Ft),s}if(Z=g(),t.peg$library)return{peg$result:Z,peg$currPos:i,peg$FAILED:e,peg$maxFailExpected:ae,peg$maxFailPos:E};if(Z!==e&&i===a.length)return Z;throw Z!==e&&i<a.length&&d(ss()),Le(ae,E<a.length?a.charAt(E):null,E<a.length?X(E,E+1):X(E,E))}var cs={isTrackWeight:()=>!1},us=new rt("PARSER_CONFIG_PROVIDER"),Y=class a{injector=S(B);isTrackWeight(){return this.injector.get(us,cs).isTrackWeight()}makeOptions(t,e={}){return{startRule:t,trackWeight:e.forceWeightTracking??this.isTrackWeight()}}parseCondition(t){return O(t,this.makeOptions("Condition"))}parseQuestion(t){return O(t,this.makeOptions("Question"))}parseItem(t,e){return O(t,this.makeOptions("Item",{forceWeightTracking:e}))}parseEffects(t){return O(t,this.makeOptions("Effects"))}parseRule(t){return O(t,this.makeOptions("Rule"))}parseRules(t){let e=t.split(/\r?\n/g).map(o=>o.replace(/#.*/,"")).join(`
`);try{return O(e,this.makeOptions("Rules"))}catch(o){let f=[];if(f.push($localize`:@@parser.error.rules:Error parsing rules`),o instanceof z){let g=o.location.start.line.toString(),$=o.location.start.column.toString();f.push(" at line ",g," column ",$),f.push(":",`
`,o.message)}else console.error(o);throw new Error(f.join(""))}}validateVariableName(t){O(t,this.makeOptions("VariableName"))}validateQuestionString(t){O(t,this.makeOptions("QuestionString"))}validateItemNameAndWeight(t){O(t,this.makeOptions("ItemNameAndWeight"))}validateCategoryName(t){O(t,this.makeOptions("CategoryName"))}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var ce=class a{serializer=S(le);parser=S(Y);extractVariables(t){return t.reduce((e,o)=>[...e,...o.questions.map(f=>f.variable)],[])}extractCategories(t){let e=new Set;for(let o of t)for(let f of o.items)e.add(f.category);return Array.from(e)}renameVariable(t,e,o){if(o instanceof Array)return o.map(g=>this.renameVariable(t,e,g));if(o instanceof W)return o.variable===t?new W(o.question,e):o;if(o instanceof j)return new j(this.renameVariable(t,e,o.condition),o.questions.map(g=>this.renameVariable(t,e,g)),o.items);if(o instanceof k)return o.variable===t?new k(e):o;if(o instanceof N)return new N(this.renameVariable(t,e,o.not));if(o instanceof V)return new V(this.renameVariable(t,e,o.left),this.renameVariable(t,e,o.right));if(o instanceof D)return new D(this.renameVariable(t,e,o.left),this.renameVariable(t,e,o.right));let f=o;throw new Error("Unknown item type",f)}filterActive(t){let e=t.rules.filter(f=>f.condition.evaluate(t.model)),o=this.extractVariables(e).reduce((f,g)=>et(M({},f),{[g]:t.model[g]}),{[q.string]:!0});return e.length===t.rules.length?{model:o,rules:e}:this.filterActive({model:o,rules:e})}contains(t,e){let o=e.toLowerCase();if(t instanceof j)return this.contains(t.condition,e)||t.questions.some(g=>this.contains(g,e))||t.items.some(g=>this.contains(g,e));if(t instanceof W)return t.question.toLowerCase().includes(o)||t.variable.toLowerCase().includes(o);if(t instanceof F)return t.category.toLowerCase().includes(o)||t.name.toLowerCase().includes(o);if(t instanceof k)return t.variable.toLowerCase().includes(o);if(t instanceof N)return this.contains(t.not,e);if(t instanceof V)return this.contains(t.left,e)||this.contains(t.right,e);if(t instanceof D)return this.contains(t.left,e)||this.contains(t.right,e);let f=t;throw new Error("Unknown item type",f)}countItemsAndWeights(t){return t.reduce((e,o)=>o.items.reduce((f,g)=>{let $;if(this.parser.isTrackWeight())$=g.weight?1:0;else{let{weight:R}=this.parser.parseItem(this.serializer.serialize(g),!0);$=R?1:0}return{items:f.items+1,weights:f.weights+$}},e),{items:0,weights:0})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var ut=`:-
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
`;function ue(a,t){let e=a.getItem("state"),o;if(e){let f=JSON.parse(e);o=M(M({},t),f)}else o=M({},t);return o}function ft(a,t){if(typeof a!=typeof t)return!1;if(a&&t&&typeof a=="object"){let e=Object.keys(a),o=Object.keys(t);return e.length===o.length&&e.every(f=>ft(a[f],t[f]))}return a===t}function fs(a,t){let e=Object.keys(t).filter(o=>!ft(a[o],t[o])).map(o=>[o,a[o]]);return e.length===0?null:Object.fromEntries(e)}function fe(a,t,e){let o=fs(t,e);o===null?a.removeItem("state"):a.setItem("state",JSON.stringify(o))}var pt=["en","de"],ee={answers:{},checkedItems:[],collapsedCategories:[],rules:void 0,fadeOutDisabledRules:!1,highlightVariableStatus:!1,refactorVariables:!0,categorySorting:"alphabetically",trackWeight:!1,answersLocked:!1,theme:"system",fontSize:"normal",language:"auto",exportReminder:!1,lastExportHash:"",lastExportDate:0},Ke=Object.keys(ee),G=class a{state=ue(localStorage,ee);injector=S(B);signalMap=new Map;constructor(){this.loadLegacyState(),this.initializeSignals()}initializeSignals(){for(let t of Ke){let e=A(this.state[t]);L(()=>{let o=e();o!==this.state[t]&&(this.state[t]=o,this.persist())},{manualCleanup:!0,injector:this.injector}),this.signalMap.set(t,e)}}loadLegacyState(){if(localStorage.getItem("answers")&&(this.state.answers=JSON.parse(localStorage.getItem("answers")),localStorage.removeItem("answers")),localStorage.getItem("checkedItems")&&(this.state.checkedItems=JSON.parse(localStorage.getItem("checkedItems")),localStorage.removeItem("checkedItems")),localStorage.getItem("collapsedCategories")&&(this.state.collapsedCategories=JSON.parse(localStorage.getItem("collapsedCategories")),localStorage.removeItem("collapsedCategories")),localStorage.getItem("rules")&&(this.state.rules=localStorage.getItem("rules"),localStorage.removeItem("rules")),localStorage.getItem("config")){let t=JSON.parse(localStorage.getItem("config"));this.state.fadeOutDisabledRules=t.fadeOutDisabledRules,this.state.trackWeight=t.trackWeight,this.state.answersLocked=t.answersLocked,this.state.theme=t.theme,this.state.language=t.language,localStorage.removeItem("config")}this.persist()}persist(){fe(localStorage,this.state,ee)}handles(t){return Ke.includes(t)}signal(t){return this.signalMap.get(t)}set(t,e){this.signal(t).set(e)}get(t){return this.signal(t)()}reset(){this.state=M({},ee),this.persist(),Ke.forEach(t=>{this.signal(t).set(ee[t])})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var pe=class a{state=S(G);parser=S(Y);refactor=S(ce);signalMap=new Map;constructor(){this.initializeSignals()}initializeSignals(){this.signalMap.set("isMobile",w(()=>{let p=navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(p)}));let t=A(window.scrollY);window.addEventListener("scroll",()=>{t.set(window.scrollY)}),this.signalMap.set("scrollY",t.asReadonly()),this.signalMap.set("preferredLanguage",w(()=>{let p=this.state.signal("language")();return p==="auto"?navigator.languages.map(Q=>Q.split("-")[0]).find(Q=>pt.includes(Q))??"en":p})),this.signalMap.set("rulesContainComments",w(()=>{let p=this.state.signal("rules")();return!!p&&p.includes("#")}));let e=w(()=>{let p=this.state.signal("rules")();return p||ut});this.signalMap.set("rulesOrTemplate",e);let o=w(()=>{try{return{parsedRules:this.parser.parseRules(e()),ruleParserError:""}}catch(p){p instanceof Error?console.warn(p.message):console.error(p);let v=p instanceof Error?p.message:"An unknown error occurred";return{parsedRules:[],ruleParserError:v}}}),f=w(()=>{let{ruleParserError:p,parsedRules:v}=o();if(!p){let{items:C,weights:Q}=this.refactor.countItemsAndWeights(v);return Q/C}return 0});this.signalMap.set("percentageOfItemsWithWeights",f);let g=w(()=>o().parsedRules);this.signalMap.set("parsedRules",g),this.signalMap.set("ruleParserError",w(()=>o().ruleParserError)),this.signalMap.set("categories",w(()=>this.refactor.extractCategories(g()))),this.signalMap.set("variables",w(()=>this.refactor.extractVariables(g())));let $=w(()=>this.refactor.filterActive({rules:g(),model:this.state.signal("answers")()})),R=w(()=>$().rules);this.signalMap.set("activeRules",R),this.signalMap.set("activeAnswers",w(()=>$().model)),this.signalMap.set("activeQuestions",w(()=>R().flatMap(p=>p.questions))),this.signalMap.set("activeItems",w(()=>R().flatMap(p=>p.items)));let P=w(()=>ps(e()).toString(16));this.signalMap.set("rulesHash",P);let y=A(new Date().getTime());this.signalMap.set("lastRulesAction",y.asReadonly()),L(()=>{e(),y.set(new Date().getTime())}),this.signalMap.set("exportFileName",w(()=>{let p=new Date(y()).toISOString().replace(/\..*$/,"").replace(/[T:]/g,"-"),v=P();return`travel-packlist-rules-${p}-${v}.txt`})),this.signalMap.set("exportNeeded",w(()=>{let p=this.signal("rulesHash")(),v=this.state.signal("lastExportHash")(),C=p!==v;return!!this.state.signal("rules")()&&C}))}handles(t){return this.signalMap.has(t)}signal(t){return this.signalMap.get(t)}get(t){return this.signal(t)()}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})},ps=function(a,t=0){let e=3735928559^t,o=1103547991^t;for(let f=0,g;f<a.length;f++)g=a.charCodeAt(f),e=Math.imul(e^g,2654435761),o=Math.imul(o^g,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507),o^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&o)+(e>>>0)};var Re={rulesMode:"view",filterRulesQuery:void 0},$e=Object.keys(Re),ge=class a{route=S(at);router=S(nt);signalMap=new Map;constructor(){for(let t of $e)this.signalMap.set(t,this.createSignal(t))}createSignal(t){let e=A(void 0);return this.router.events.pipe(st(o=>o instanceof it),tt(()=>this.route.snapshot.queryParams[t]??Re[t])).subscribe(o=>{o!==""&&e.set(o)}),L(()=>{let o=e()||void 0;o===Re[t]&&(o=void 0),this.route.snapshot.queryParams[t]!==o&&this.router.navigate([],{queryParams:{[t]:o},queryParamsHandling:"merge",relativeTo:this.route,replaceUrl:!0})}),e}handles(t){return $e.includes(t)}signal(t){return this.signalMap.get(t)}get(t){return this.signal(t)()}set(t,e){this.signal(t).set(e)}reset(){for(let t of $e)this.signal(t).set(void 0)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var te={clipboardItems:[],clipboardQuestions:[]},xe=Object.keys(te),he=class a{state=ue(sessionStorage,te);injector=S(B);signalMap=new Map;constructor(){this.initializeSignals()}initializeSignals(){for(let t of xe){let e=A(this.state[t]);L(()=>{let o=e();o!==this.state[t]&&(this.state[t]=o,this.persist())},{manualCleanup:!0,injector:this.injector}),this.signalMap.set(t,e)}}persist(){fe(sessionStorage,this.state,te)}handles(t){return xe.includes(t)}signal(t){return this.signalMap.get(t)}set(t,e){this.signal(t).set(e)}get(t){return this.signal(t)()}reset(){this.state=M({},te),this.persist(),xe.forEach(t=>{this.signal(t).set(te[t])})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var ke={serviceWorkerStatus:"init"},Ie=Object.keys(ke),de=class a{signalMap=new Map;constructor(){this.initializeSignals()}initializeSignals(){for(let t of Ie){let e=A(ke[t]);this.signalMap.set(t,e)}}handles(t){return Ie.includes(t)}signal(t){return this.signalMap.get(t)}get(t){return this.signal(t)()}set(t,e){this.signal(t).set(e)}reset(){for(let t of Ie)this.signal(t).set(ke[t])}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var gt=class a{persistent=S(G);router=S(ge);session=S(he);transient=S(de);derived=S(pe);get(t){if(this.persistent.handles(t))return this.persistent.get(t);if(this.router.handles(t))return this.router.get(t);if(this.session.handles(t))return this.session.get(t);if(this.transient.handles(t))return this.transient.get(t);if(this.derived.handles(t))return this.derived.get(t);throw new Error(`Key ${t} not handled in state`)}signal(t){if(this.persistent.handles(t))return this.persistent.signal(t);if(this.router.handles(t))return this.router.signal(t);if(this.session.handles(t))return this.session.signal(t);if(this.transient.handles(t))return this.transient.signal(t);if(this.derived.handles(t))return this.derived.signal(t);throw new Error(`Key ${t} not handled in state`)}set(t,e){if(this.persistent.handles(t))this.persistent.signal(t).set(e);else if(this.router.handles(t))this.router.set(t,e);else if(this.session.handles(t))this.session.set(t,e);else if(this.transient.handles(t))this.transient.set(t,e);else throw this.derived.handles(t)?new Error("Key is derived and cannot be set"):new Error(`Key ${t} not handled in state`)}reset(){this.persistent.reset(),this.session.reset(),this.router.reset()}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};export{j as a,W as b,F as c,k as d,ot as e,q as f,N as g,V as h,D as i,z as j,us as k,Y as l,le as m,ce as n,gt as o};
