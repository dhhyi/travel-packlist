import{b as h,d as v,h as x,n as V,p as b,r as d}from"./chunk-81f7af67.js";import{q as y}from"./chunk-a6c57699.js";import"./chunk-66971f89.js";import{$b as G,Aa as A,Cb as I,E as g,Eb as U,Jb as W,Ma as f,P as p,Ra as a,Za as M,Zb as T,aa as S,bb as E,gb as r,hb as l,ib as m,nb as P,ob as N,pb as O,qb as $,sb as u}from"./chunk-e4f7fe75.js";import"./chunk-86437c54.js";function F(e,s){e&1&&(r(0,"div",4),P(1,0),l());}function K(e,s){if(e&1&&(W(0),r(1,"div",5),P(2,1),l()),e&2){let t=u().rules;A(2),N(t)(t),O(2);}}function X(e,s){if(e&1&&(r(0,"div",6),I(1),l()),e&2){let _=u();A(),U(" ",_.error," ");}}function w(e,s){if(e&1&&a(0,F,2,0,"div",4)(1,K,3,2,"div",5)(2,X,2,1,"div",6),e&2){let _;E((_=s.type)==="pending"?0:_==="success"?1:2);}}var Y=(()=>{class e{state=S(y);fb=S(V).nonNullable;rulesControl=this.fb.control(this.state.rulesOrTemplate());rulesText=d(this.rulesControl.valueChanges.pipe(p(this.rulesControl.value)));rulesPending=T(()=>this.rulesText()!==this.state.rulesOrTemplate());parserState=T(()=>{if(this.rulesPending())return{type:"pending"};{let _=this.state.ruleParserError;return _()?{type:"error",error:_()}:{type:"success",rules:this.state.parsedRules().length};}});constructor(){let _=d(this.rulesControl.valueChanges.pipe(g(500)));G(()=>{let t=_();this.state.rules.set(t);});}static ɵfac=function(t){return new(t||e)();};static ɵcmp=f({type:e,selectors:[["app-edit-rules-raw"]],decls:3,vars:2,consts:()=>{let _;_="Regeln als Code";let t;t="Parser-Zustand";let o;o="ausstehend";let i;i="Erfolg";let C;C="Fehler";let L;L="Warten auf Eingabe.";let R;R="{VAR_PLURAL, plural, one {Eine Regel} other {{INTERPOLATION} Regeln}}",R=$(R,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"});let c;return c=""+R+" erfolgreich geparst!",[L,c,["aria-label",_,1,"grow","resize-none","rounded","border","border-gray-300","bg-gray-100","px-1","py-0","pb-8","font-mono","leading-tight","text-gray-700","focus:outline-none","dark:bg-gray-900","dark:text-gray-300",3,"formControl"],["aria-label",t,"aria-live","polite",1,"bg-active","bottom-0","p-2","font-mono"],["aria-label",o,1,"text-yellow-normal"],["aria-label",i,1,"text-green"],["aria-label",C,1,"text-red"]];},template:function(t,o){if(t&1&&(m(0,"textarea",2),r(1,"div",3),a(2,w,3,1),l()),t&2){let i;M("formControl",o.rulesControl),A(2),E((i=o.parserState())?2:-1,i);}},dependencies:[b,h,v,x],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column}"],changeDetection:0});}return e;})();export{Y as default};/**i18n:213e8f5fa9a1aaeed4742f603cb6e2b7bb69275ecdd03bddd6382bb3635f0c75*/