import{b as W,d as G,h as I,n as x,p as y,r as P}from"./chunk-7a67e28c.js";import{q as U}from"./chunk-af83ccb3.js";import"./chunk-0cd0230a.js";import{Aa as l,Ab as $,Cb as O,E as p,La as L,P as T,Qa as R,Yb as u,Za as f,_b as w,aa as S,bb as d,gb as o,hb as s,ib as m,nb as E,ob as M,pb as N,sb as A}from"./chunk-2d37ca5c.js";import"./chunk-8bb36e3c.js";function b(t,a){t&1&&(o(0,"div",4),E(1,0),s());}function v(t,a){if(t&1&&(o(0,"div",5),E(1,1),s()),t&2){let e=A();l(),M(e.rules),N(1);}}function h(t,a){if(t&1&&(o(0,"div",6),$(1),s()),t&2){let e=A();l(),O(" ",e.error," ");}}function F(t,a){if(t&1&&R(0,b,2,0,"div",4)(1,v,2,1,"div",5)(2,h,2,1,"div",6),t&2){let e;d((e=a.type)==="pending"?0:e==="success"?1:2);}}var H=(()=>{class t{state=S(U);fb=S(x).nonNullable;rulesControl=this.fb.control(this.state.get("rulesOrTemplate"));rulesText=P(this.rulesControl.valueChanges.pipe(T(this.rulesControl.value)));rulesPending=u(()=>this.rulesText()!==this.state.signal("rulesOrTemplate")());parserState=u(()=>{if(this.rulesPending())return{type:"pending"};{let e=this.state.signal("ruleParserError");return e()?{type:"error",error:e()}:{type:"success",rules:this.state.signal("parsedRules")().length};}});constructor(){let e=P(this.rulesControl.valueChanges.pipe(p(500)));w(()=>{let _=e();this.state.set("rules",_);});}static ɵfac=function(_){return new(_||t)();};static ɵcmp=L({type:t,selectors:[["app-edit-rules-raw"]],decls:3,vars:2,consts:()=>{let e;e="Regeln als Code";let _;_="Parserstatus";let i;i="Warte auf Eingabe";let r;r="Erfolgreich";let c;c="Fehler";let C;C="Warte auf Eingabe.";let g;return g=""+"\uFFFD0\uFFFD"+" Regeln erfolgreich geparst!",[C,g,["aria-label",e,1,"grow","resize-none","rounded","border","border-gray-300","bg-gray-100","px-1","py-0","pb-8","font-mono","leading-tight","text-gray-700","focus:outline-none","dark:bg-gray-900","dark:text-gray-300",3,"formControl"],["aria-label",_,"aria-live","polite",1,"bg-active","bottom-0","p-2","font-mono"],["aria-label",i,1,"text-yellow-normal"],["aria-label",r,1,"text-green"],["aria-label",c,1,"text-red"]];},template:function(_,i){if(_&1&&(m(0,"textarea",2),o(1,"div",3),R(2,F,3,1),s()),_&2){let r;f("formControl",i.rulesControl),l(2),d((r=i.parserState())?2:-1,r);}},dependencies:[y,W,G,I],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column}"],changeDetection:0});}return t;})();export{H as default};/**i18n:0ec2d64ea9e2092d11c28c539165e70c8ad80242e511d1061ae893c907602da7*/