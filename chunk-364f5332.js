import{b as h,d as b,i as v,o as x,q as V}from"./chunk-afa126bf.js";import{s as y}from"./chunk-7b3dcbb5.js";import"./chunk-74ff73aa.js";import{e as T}from"./chunk-eb86e6a0.js";import{Ab as E,F as p,Fb as l,Gb as r,Hb as N,Mb as P,Nb as O,Ob as $,Pb as I,Rb as u,S as f,Yb as U,Za as a,_b as W,dc as G,ea as A,kb as M,ob as S,vc as d,wb as m,yc as C}from"./chunk-da5c6bf3.js";import"./chunk-ad6d2de6.js";function F(e,s){e&1&&(l(0,"div",4),P(1,0),r());}function K(e,s){if(e&1&&(G(0),l(1,"div",5),P(2,1),r()),e&2){let t=u().rules;a(2),O(t)(t),$(2);}}function X(e,s){if(e&1&&(l(0,"div",6),U(1),r()),e&2){let _=u();a(),W(" ",_.error," ");}}function w(e,s){if(e&1&&S(0,F,2,0,"div",4)(1,K,3,2,"div",5)(2,X,2,1,"div",6),e&2){let _;E((_=s.type)==="pending"?0:_==="success"?1:2);}}var Y=(()=>{class e{state=A(y);fb=A(x).nonNullable;rulesControl=this.fb.control(this.state.rules.raw());rulesText=T(this.rulesControl.valueChanges.pipe(f(this.rulesControl.value)));rulesPending=d(()=>this.rulesText()!==this.state.rules.raw());parserState=d(()=>{if(this.rulesPending())return{type:"pending"};{let _=this.state.rules.parserError;return _()?{type:"error",error:_()}:{type:"success",rules:this.state.rules.parsed().length};}});constructor(){let _=T(this.rulesControl.valueChanges.pipe(p(500)));C(()=>{let t=_();typeof t=="string"&&t!==this.state.rules.raw()&&this.state.localRules.updateRules(t);}),C(()=>{this.state.rules.mode()==="local"?this.rulesControl.enable():this.rulesControl.disable();});}static ɵfac=function(t){return new(t||e)();};static ɵcmp=M({type:e,selectors:[["app-edit-rules-raw"]],decls:3,vars:2,consts:()=>{let _;_="Regeln als Code";let t;t="Parser-Zustand";let o;o="ausstehend";let i;i="Erfolg";let L;L="Fehler";let c;c="Warten auf Eingabe.";let R;R="{VAR_PLURAL, plural, one {Eine Regel} other {{INTERPOLATION} Regeln}}",R=I(R,{INTERPOLATION:"\uFFFD1\uFFFD",VAR_PLURAL:"\uFFFD0\uFFFD"});let g;return g=""+R+" erfolgreich geparst!",[c,g,["aria-label",_,1,"grow","resize-none","rounded","border","border-gray-300","bg-gray-100","px-1","py-0","pb-8","font-mono","leading-tight","text-gray-700","focus:outline-none","dark:bg-gray-900","dark:text-gray-300",3,"formControl"],["aria-label",t,"aria-live","polite",1,"bg-active","bottom-0","p-2","font-mono"],["aria-label",o,1,"text-yellow-normal"],["aria-label",i,1,"text-green"],["aria-label",L,1,"text-red"]];},template:function(t,o){if(t&1&&(N(0,"textarea",2),l(1,"div",3),S(2,w,3,1),r()),t&2){let i;m("formControl",o.rulesControl),a(2),E((i=o.parserState())?2:-1,i);}},dependencies:[V,h,b,v],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column}"],changeDetection:0});}return e;})();export{Y as EditRulesRawComponent};/**i18n:3ea64412cb2fa7572222484f1122e69f6d5b2ce20c9a2c903c347eb498cd7f05*/