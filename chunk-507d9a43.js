import{Aa as g,Ab as w,Bb as E,Ga as l,Jb as A,Ma as x,Ra as S,Xb as M,Za as C,b as m,bb as O,ec as L,gb as s,hb as r,ia as u,ib as y,ja as _,kb as k,nb as b,rb as p,sa as V,sb as c,zb as P}from"./chunk-415c542e.js";var v=e=>({hidden:e});function I(e,t){if(e&1){let i=k();y(0,"div",3),s(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7),w(5),r(),s(6,"input",8,0),p("keydown.enter",function(){u(i);let a=P(7),f=c();return _(f.self.dialogOk()(a.value));}),r(),s(8,"div",9)(9,"button",10),p("click",function(){u(i);let a=c();return _(a.self.dialogCancel()());}),b(10,1),r(),s(11,"button",11),p("click",function(){u(i);let a=P(7),f=c();return _(f.self.dialogOk()(a.value));}),b(12,2),r()()()()();}if(e&2){let i=c();g(5),E(i.self.dialogMessage()),g(),C("ngClass",A(3,v,!i.self.dialogPromptVisible())),g(3),C("ngClass",A(5,v,!i.self.dialogCancelVisible()));}}var o=class e{self=e;static dialogVisible=l(!1);static dialogPromptVisible=l(!1);static dialogCancelVisible=l(!0);static dialogMessage=l("");static dialogOk=l(m);static dialogCancel=l(m);overlayVisible=V();constructor(){M(()=>{this.overlayVisible.emit(e.dialogVisible());});}static ɵfac=function(i){return new(i||e)();};static ɵcmp=x({type:e,selectors:[["app-dialog"]],outputs:{overlayVisible:"overlayVisible"},decls:1,vars:1,consts:()=>{let t;t=" Cancel ";let i;return i=" OK ",[["prompt",""],t,i,[1,"bg-disabled","pointer-events-none","fixed","left-0","top-0","z-40","h-full","w-full","opacity-50"],["role","dialog","aria-describedby","dialog-message",1,"fixed","left-0","top-0","z-50","flex","h-full","w-full"],[1,"card","bg-disabled","m-auto","w-[300px]"],[1,"m-2","flex","flex-col","gap-4"],["id","dialog-message"],["id","prompt","type","text",3,"keydown.enter","ngClass"],[1,"mt-4","grid","grid-cols-2","gap-4"],["type","button","role","button",1,"secondary",3,"click","ngClass"],["id","ok-button","type","submit","role","button",3,"click"]];},template:function(i,n){i&1&&S(0,I,13,7),i&2&&O(n.self.dialogVisible()?0:-1);},dependencies:[L],encapsulation:2,changeDetection:0});};function T(e=!0,t=!1){o.dialogCancelVisible.set(e),o.dialogPromptVisible.set(t),o.dialogVisible.set(!0);}function d(){o.dialogVisible.set(!1),o.dialogPromptVisible.set(!1),o.dialogCancelVisible.set(!0);}function N(e){let t=document.querySelector("#prompt");if(!t)throw new Error("Prompt input not found");t.value=e,t.focus();}function D(){let e=document.querySelector("#ok-button");if(!e)throw new Error("Ok button not found");e.focus();}function G(e){return o.dialogMessage.set(e),setTimeout(()=>{D();},100),T(),new Promise(t=>{o.dialogOk.set(()=>{d(),t(!0);}),o.dialogCancel.set(()=>{d(),t(!1);});});}function R(e,t=""){return o.dialogMessage.set(e),setTimeout(()=>{N(t);},100),T(!0,!0),new Promise(i=>{o.dialogOk.set(n=>{d(),i(n.trim());}),o.dialogCancel.set(()=>{d(),i(null);});});}function h(e){return o.dialogMessage.set(e),setTimeout(()=>{D();},100),T(!1),new Promise(t=>{o.dialogOk.set(()=>{d(),t();});});}export{o as a,G as b,R as c,h as d};/**i18n:9552fa0fbb6d334e0be38fbfc53a03a3c04e4f027352c7a86b85f26c3861fe82*/