import{Eb as a,Fb as r,Gb as O,Ib as w,Nb as b,Rb as p,Sb as c,Xa as g,Yb as P,Zb as E,_b as y,b as m,ib as T,ja as u,ka as _,nb as V,va as A,wb as C,xc as M,ya as l,zb as S}from"./chunk-b54f2700.js";function k(e,t){if(e&1){let i=w();O(0,"div",3),a(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7),E(5),r(),a(6,"input",8,0),p("keydown.enter",function(){u(i);let s=P(7),f=c();return _(f.self.dialogOk()(s.value));}),r(),a(8,"div",9)(9,"button",10),p("click",function(){u(i);let s=c();return _(s.self.dialogCancel()());}),b(10,1),r(),a(11,"button",11),p("click",function(){u(i);let s=P(7),f=c();return _(f.self.dialogOk()(s.value));}),b(12,2),r()()()()();}if(e&2){let i=c();g(5),y(i.self.dialogMessage()),g(),C("hidden",!i.self.dialogPromptVisible()),g(3),C("hidden",!i.self.dialogCancelVisible());}}var o=class e{self=e;static dialogVisible=l(!1);static dialogPromptVisible=l(!1);static dialogCancelVisible=l(!0);static dialogMessage=l("");static dialogOk=l(m);static dialogCancel=l(m);overlayVisible=A();constructor(){M(()=>{this.overlayVisible.emit(e.dialogVisible());});}static ɵfac=function(i){return new(i||e)();};static ɵcmp=T({type:e,selectors:[["app-dialog"]],outputs:{overlayVisible:"overlayVisible"},decls:1,vars:1,consts:()=>{let t;t="Abbrechen";let i;return i="OK",[["prompt",""],t,i,[1,"bg-disabled","pointer-events-none","fixed","left-0","top-0","z-40","h-full","w-full","opacity-50"],[1,"fixed","left-0","top-0","z-50","flex","h-full","w-full"],["role","dialog","aria-describedby","dialog-message",1,"card","bg-disabled","m-auto","w-[300px]"],[1,"m-2","flex","flex-col","gap-4"],["id","dialog-message"],["id","prompt","type","text","role","textbox",3,"keydown.enter"],[1,"mt-4","grid","grid-cols-2","gap-4"],["type","button","role","button",1,"secondary",3,"click"],["id","ok-button","type","submit","role","button",3,"click"]];},template:function(i,n){i&1&&V(0,k,13,5),i&2&&S(n.self.dialogVisible()?0:-1);},encapsulation:2,changeDetection:0});};function x(e=!0,t=!1){o.dialogCancelVisible.set(e),o.dialogPromptVisible.set(t),o.dialogVisible.set(!0);}function d(){o.dialogVisible.set(!1),o.dialogPromptVisible.set(!1),o.dialogCancelVisible.set(!0);}function v(e){let t=document.querySelector("#prompt");if(!t)throw new Error("Prompt input not found");t.value=e,t.focus();}function L(){let e=document.querySelector("#ok-button");if(!e)throw new Error("Ok button not found");e.focus();}function D(e){return o.dialogMessage.set(e),setTimeout(()=>{L();},0),x(),new Promise(t=>{o.dialogOk.set(()=>{d(),t(!0);}),o.dialogCancel.set(()=>{d(),t(!1);});});}function I(e,t=""){return o.dialogMessage.set(e),setTimeout(()=>{v(t);},0),x(!0,!0),new Promise(i=>{o.dialogOk.set(n=>{d(),i(n.trim());}),o.dialogCancel.set(()=>{d(),i(null);});});}function G(e){return o.dialogMessage.set(e),setTimeout(()=>{L();},0),x(!1),new Promise(t=>{o.dialogOk.set(()=>{d(),t();});});}export{o as a,D as b,I as c,G as d};/**i18n:4be4faadc01327a97e860b06942fb7e470703ee2338d4a40735be0c88fb41d51*/