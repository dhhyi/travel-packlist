import{b as h,d as v,h as x,n as V,p as b}from"./chunk-29c892b0.js";import{B as y,b as T}from"./chunk-78dbed41.js";import"./chunk-080625d0.js";import{Bb as E,Cc as G,F as g,Gb as r,Hb as l,Ib as m,Nb as P,Ob as N,Pb as O,Qb as $,S as p,Sb as u,Za as R,ac as I,cc as U,ea as S,hc as W,kb as f,pb as a,xb as M,zc as d}from"./chunk-d8ae0c91.js";import"./chunk-bbcdbfbd.js";function F(e,s){e&1&&(r(0,"div",4),P(1,0),l());}function K(e,s){if(e&1&&(W(0),r(1,"div",5),P(2,1),l()),e&2){let t=u().rules;R(2),N(t)(t),O(2);}}function X(e,s){if(e&1&&(r(0,"div",6),I(1),l()),e&2){let _=u();R(),U(" ",_.error," ");}}function w(e,s){if(e&1&&a(0,F,2,0,"div",4)(1,K,3,2,"div",5)(2,X,2,1,"div",6),e&2){let _;E((_=s.type)==="pending"?0:_==="success"?1:2);}}var Y=(()=>{class e{state=S(y);fb=S(V).nonNullable;rulesControl=this.fb.control(this.state.rules.raw());rulesText=T(this.rulesControl.valueChanges.pipe(p(this.rulesControl.value)));rulesPending=d(()=>this.rulesText()!==this.state.rules.raw());parserState=d(()=>{if(this.rulesPending())return{type:"pending"};{let _=this.state.rules.parserError;return _()?{type:"error",error:_()}:{type:"success",rules:this.state.rules.parsed().length};}});constructor(){let _=T(this.rulesControl.valueChanges.pipe(g(500)));G(()=>{let t=_();typeof t=="string"&&t!==this.state.rules.raw()&&this.state.rules.raw.set(t);});}static ɵfac=function(t){return new(t||e)();};static ɵcmp=f({type:e,selectors:[["app-edit-rules-raw"]],decls:3,vars:2,consts:()=>{let _;_="Rules as code";let t;t="Parser state";let o;o="pending";let i;i="success";let C;C="error";let L;L=" Waiting for input. ";let A;A="{VAR_PLURAL, plural, one {1 rule} other {{INTERPOLATION} rules}}",A=$(A,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"});let c;return c=" Parsed "+A+" successfully! ",[L,c,["aria-label",_,1,"grow","resize-none","rounded","border","border-gray-300","bg-gray-100","px-1","py-0","pb-8","font-mono","leading-tight","text-gray-700","focus:outline-none","dark:bg-gray-900","dark:text-gray-300",3,"formControl"],["aria-label",t,"aria-live","polite",1,"bg-active","bottom-0","p-2","font-mono"],["aria-label",o,1,"text-yellow-normal"],["aria-label",i,1,"text-green"],["aria-label",C,1,"text-red"]];},template:function(t,o){if(t&1&&(m(0,"textarea",2),r(1,"div",3),a(2,w,3,1),l()),t&2){let i;M("formControl",o.rulesControl),R(2),E((i=o.parserState())?2:-1,i);}},dependencies:[b,h,v,x],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column}"],changeDetection:0});}return e;})();export{Y as EditRulesRawComponent};/**i18n:eee3d47a017a9f4fe983a06f27e0a9c7b95602fff3951636f2d8c55069b18d30*/