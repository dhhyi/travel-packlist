import{b as h,d as v,h as x,n as b,p as V,r as T}from"./chunk-8443f659.js";import{q as y}from"./chunk-a6f295e0.js";import"./chunk-da304b3b.js";import{$b as G,Aa as a,Cb as I,E as c,Eb as U,Jb as W,Ma as f,P as p,Ra as S,Za as M,Zb as d,aa as A,bb as E,gb as l,hb as r,ib as m,nb as P,ob as N,pb as O,qb as $,sb as u}from"./chunk-550e43a6.js";import"./chunk-86437c54.js";function F(e,s){e&1&&(l(0,"div",4),P(1,0),r());}function K(e,s){if(e&1&&(W(0),l(1,"div",5),P(2,1),r()),e&2){let t=u().rules;a(2),N(t)(t),O(2);}}function X(e,s){if(e&1&&(l(0,"div",6),I(1),r()),e&2){let _=u();a(),U(" ",_.error," ");}}function w(e,s){if(e&1&&S(0,F,2,0,"div",4)(1,K,3,2,"div",5)(2,X,2,1,"div",6),e&2){let _;E((_=s.type)==="pending"?0:_==="success"?1:2);}}var Y=(()=>{class e{state=A(y);fb=A(b).nonNullable;rulesControl=this.fb.control(this.state.get("rulesOrTemplate"));rulesText=T(this.rulesControl.valueChanges.pipe(p(this.rulesControl.value)));rulesPending=d(()=>this.rulesText()!==this.state.signal("rulesOrTemplate")());parserState=d(()=>{if(this.rulesPending())return{type:"pending"};{let _=this.state.signal("ruleParserError");return _()?{type:"error",error:_()}:{type:"success",rules:this.state.signal("parsedRules")().length};}});constructor(){let _=T(this.rulesControl.valueChanges.pipe(c(500)));G(()=>{let t=_();this.state.set("rules",t);});}static ɵfac=function(t){return new(t||e)();};static ɵcmp=f({type:e,selectors:[["app-edit-rules-raw"]],decls:3,vars:2,consts:()=>{let _;_="Regeln als Code";let t;t="Parser-Zustand";let o;o="ausstehend";let i;i="Erfolg";let C;C="Fehler";let L;L="Warten auf Eingabe.";let R;R="{VAR_PLURAL, plural, one {Eine Regel} other {{INTERPOLATION} Regeln}}",R=$(R,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"});let g;return g=""+R+" erfolgreich geparst!",[L,g,["aria-label",_,1,"grow","resize-none","rounded","border","border-gray-300","bg-gray-100","px-1","py-0","pb-8","font-mono","leading-tight","text-gray-700","focus:outline-none","dark:bg-gray-900","dark:text-gray-300",3,"formControl"],["aria-label",t,"aria-live","polite",1,"bg-active","bottom-0","p-2","font-mono"],["aria-label",o,1,"text-yellow-normal"],["aria-label",i,1,"text-green"],["aria-label",C,1,"text-red"]];},template:function(t,o){if(t&1&&(m(0,"textarea",2),l(1,"div",3),S(2,w,3,1),r()),t&2){let i;M("formControl",o.rulesControl),a(2),E((i=o.parserState())?2:-1,i);}},dependencies:[V,h,v,x],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column}"],changeDetection:0});}return e;})();export{Y as default};/**i18n:213e8f5fa9a1aaeed4742f603cb6e2b7bb69275ecdd03bddd6382bb3635f0c75*/