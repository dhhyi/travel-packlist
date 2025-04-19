import{a as S}from"./chunk-c1ae676e.js";import{s as $}from"./chunk-1178909b.js";import"./chunk-4b1dfe58.js";import"./chunk-b958d0f2.js";import{Eb as n,Fb as o,Ib as C,Lb as p,Mb as L,Nb as a,Rb as m,Sb as f,Xa as i,Zb as O,_b as M,ca as P,ib as g,ja as d,ka as A,nb as s,wc as h,yc as N,zb as R}from"./chunk-b54f2700.js";import"./chunk-dd371127.js";function F(e,E){e&1&&(n(0,"p"),a(1,0),o());}function U(e,E){e&1&&(n(0,"p"),a(1,1),o());}function G(e,E){if(e&1){let _=C();n(0,"p"),a(1,2),o(),n(2,"p"),p(3,3),n(4,"button",7),m("click",function(){d(_);let t=f();return A(t.goToRawEditor());}),o(),L(),o();}}function y(e,E){e&1&&(n(0,"p"),a(1,4),o());}var K=(()=>{class e{state=P($);error=h(()=>this.state.rules.raw.status()===N.Error?{type:"fetching",message:S(this.state.rules.raw.error())}:{type:"parsing",message:S(this.state.rules.parsed.error())});rulesMode=this.state.rules.mode;goToRawEditor(){this.state.router.go("rules-raw");}static ɵfac=function(r){return new(r||e)();};static ɵcmp=g({type:e,selectors:[["app-error"]],decls:7,vars:5,consts:()=>{let _;_="The following error occurred while parsing the rules:";let r;r="The following error occurred while fetching the rules:";let t;t="Fix error in raw editor";let u;u=" Unfortunately, this error can only be fixed by changing the rules manually. ";let T;T=" Please do that "+"\uFFFD#4\uFFFD"+" here"+"\uFFFD/#4\uFFFD"+". ";let c;return c=" As the rules come from a remote source, they are either not parsable or the source is not returning plain text rules. ",[_,r,u,T,c,["role","alert",1,"flex","flex-col","items-center","gap-4","text-center"],[1,"text-red-normal","font-mono"],["type","button","aria-label",t,1,"link","inline","p-0","underline",3,"click"]];},template:function(r,t){r&1&&(n(0,"div",5),s(1,F,2,0,"p")(2,U,2,0,"p"),n(3,"p",6),O(4),o(),s(5,G,5,0)(6,y,2,0,"p"),o()),r&2&&(i(),R(t.error().type==="parsing"?1:-1),i(),R(t.error().type==="fetching"?2:-1),i(2),M(t.error().message),i(),R(t.rulesMode()==="local"?5:-1),i(),R(t.rulesMode()==="remote"?6:-1));},encapsulation:2,changeDetection:0});}return e;})();export{K as RulesErrorComponent};/**i18n:4be4faadc01327a97e860b06942fb7e470703ee2338d4a40735be0c88fb41d51*/