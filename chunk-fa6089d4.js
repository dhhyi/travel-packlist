import{b as m,d as v,f as h,k as w,q as M,s as F}from"./chunk-b845661c.js";import{q as L}from"./chunk-a36edca3.js";import"./chunk-43426cf1.js";import{Aa as l,E as g,La as C,P as R,Qa as _,Rb as c,Tb as x,Ya as E,aa as a,ab as u,fb as i,gb as o,hb as S,mb as d,nb as A,ob as P,rb as p,yb as T,zb as y}from"./chunk-36b36bcf.js";import"./chunk-5742b79d.js";function N(t,r){t&1&&(i(0,"div",4),d(1,0),o());}function O(t,r){if(t&1&&(i(0,"div",5),d(1,1),o()),t&2){let e=p();l(),A(e.rules),P(1);}}function b(t,r){if(t&1&&(i(0,"div",6),T(1),o()),t&2){let e=p();l(),y(e.error);}}function U(t,r){if(t&1&&_(0,N,2,0,"div",4)(1,O,2,1,"div",5)(2,b,2,1,"div",6),t&2){let e;u((e=r.type)==="pending"?0:e==="success"?1:2);}}var B=(()=>{class t{state=a(L);fb=a(M).nonNullable;rulesControl=this.fb.control(this.state.get("rulesOrTemplate"));rulesText=m(this.rulesControl.valueChanges.pipe(R(this.rulesControl.value)));rulesPending=c(()=>this.rulesText()!==this.state.signal("rulesOrTemplate")());parserState=c(()=>{if(this.rulesPending())return{type:"pending"};{let e=this.state.signal("ruleParserError");return e()?{type:"error",error:e()}:{type:"success",rules:this.state.signal("parsedRules")().length};}});constructor(){let e=m(this.rulesControl.valueChanges.pipe(g(500)));x(()=>{let n=e();this.state.set("rules",n);});}static ɵfac=function(n){return new(n||t)();};static ɵcmp=C({type:t,selectors:[["app-edit-rules-raw"]],decls:3,vars:2,consts:()=>{let e;e=" Waiting for input. ";let n;return n=" Parsed "+"\uFFFD0\uFFFD"+" rules successfully! ",[e,n,[1,"grow","resize-none","rounded","border","border-gray-300","bg-gray-100","px-1","py-0","pb-8","font-mono","leading-tight","text-gray-700","focus:outline-none","dark:bg-gray-900","dark:text-gray-300",3,"formControl"],[1,"bg-active","bottom-0","p-2","font-mono"],[1,"text-yellow-normal"],[1,"text-green"],[1,"text-red"]];},template:function(n,s){if(n&1&&(S(0,"textarea",2),i(1,"div",3),_(2,U,3,1),o()),n&2){let f;E("formControl",s.rulesControl),l(2),u((f=s.parserState())?2:-1,f);}},dependencies:[F,v,h,w],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column}"],changeDetection:0});}return t;})();export{B as default};/**i18n:9552fa0fbb6d334e0be38fbfc53a03a3c04e4f027352c7a86b85f26c3861fe82*/