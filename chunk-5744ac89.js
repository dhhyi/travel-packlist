import{b as m,d as v,f as h,k as w,q as M,s as F}from"./chunk-f1ad7e9d.js";import{p as L}from"./chunk-557595d8.js";import"./chunk-a1592053.js";import{$a as u,Aa as l,E as g,Ka as C,P as R,Pa as _,Tb as c,Vb as x,Xa as E,aa as a,eb as i,fb as o,gb as S,lb as d,mb as A,nb as P,qb as p,xb as T,yb as y}from"./chunk-61d1b8f0.js";import"./chunk-be8120ea.js";function N(t,r){t&1&&(i(0,"div",4),d(1,0),o());}function O(t,r){if(t&1&&(i(0,"div",5),d(1,1),o()),t&2){let e=p();l(),A(e.rules),P(1);}}function b(t,r){if(t&1&&(i(0,"div",6),T(1),o()),t&2){let e=p();l(),y(e.error);}}function U(t,r){if(t&1&&_(0,N,2,0,"div",4)(1,O,2,1,"div",5)(2,b,2,1,"div",6),t&2){let e;u((e=r.type)==="pending"?0:e==="success"?1:2);}}var B=(()=>{class t{state=a(L);fb=a(M).nonNullable;rulesControl=this.fb.control(this.state.get("rulesOrTemplate"));rulesText=m(this.rulesControl.valueChanges.pipe(R(this.rulesControl.value)));rulesPending=c(()=>this.rulesText()!==this.state.signal("rulesOrTemplate")());parserState=c(()=>{if(this.rulesPending())return{type:"pending"};{let e=this.state.signal("ruleParserError");return e()?{type:"error",error:e()}:{type:"success",rules:this.state.signal("parsedRules")().length};}});constructor(){let e=m(this.rulesControl.valueChanges.pipe(g(500)));x(()=>{let n=e();n&&this.state.set("rules",n);});}static ɵfac=function(n){return new(n||t)();};static ɵcmp=C({type:t,selectors:[["app-edit-rules-raw"]],decls:3,vars:2,consts:()=>{let e;e="Warte auf Eingabe.";let n;return n=""+"\uFFFD0\uFFFD"+" Regeln erfolgreich geparst!",[e,n,[1,"grow","resize-none","rounded","border","border-gray-300","bg-gray-100","px-1","py-0","pb-8","font-mono","leading-tight","text-gray-700","focus:outline-none","dark:bg-gray-900","dark:text-gray-300",3,"formControl"],[1,"bg-active","bottom-0","p-2","font-mono"],[1,"text-yellow-normal"],[1,"text-green-normal"],[1,"text-red-normal"]];},template:function(n,s){if(n&1&&(S(0,"textarea",2),i(1,"div",3),_(2,U,3,1),o()),n&2){let f;E("formControl",s.rulesControl),l(2),u((f=s.parserState())?2:-1,f);}},dependencies:[F,v,h,w],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column}"],changeDetection:0});}return t;})();export{B as default};/**i18n:cbcf01d4640d52ad6821130aa8bde718125de417ff622aa7dfac4aa297a95122*/