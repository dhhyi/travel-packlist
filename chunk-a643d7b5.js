import{C as f}from"./chunk-705bf34f.js";import"./chunk-74ff73aa.js";import"./chunk-b5010655.js";import{Ab as E,Fb as _,Gb as o,Jb as d,Kb as g,Lb as C,Mb as R,Qb as L,Rb as p,Yb as m,Za as l,Zb as O,ea as S,kb as c,la as u,ma as T,ob as A,ya as P}from"./chunk-f0a3c3ce.js";import"./chunk-ad6d2de6.js";function N(e,M){if(e&1){let r=d();_(0,"p"),R(1,1),o(),_(2,"p"),g(3,2),_(4,"button",6),L("click",function(){u(r);let n=p();return T(n.goToRawEditor());}),o(),C(),o();}}function $(e,M){e&1&&(_(0,"p"),R(1,3),o());}var I=(()=>{class e{error=P();state=S(f);rulesMode=this.state.rules.mode;goToRawEditor(){this.state.router.go("rules-raw");}static ɵfac=function(t){return new(t||e)();};static ɵcmp=c({type:e,selectors:[["app-error"]],inputs:{error:[1,"error"]},decls:7,vars:3,consts:()=>{let r;r="The following error occurred while parsing the rules:";let t;t="Fix error in raw editor";let n;n=" Unfortunately, this error can only be fixed by changing the rules manually. ";let a;a=" Please do that "+"\uFFFD#4\uFFFD"+" here"+"\uFFFD/#4\uFFFD"+". ";let s;return s=" As the rules come from a remote source, they are either not parsable or the source is not returning plain text rules. ",[r,n,a,s,["role","alert",1,"flex","flex-col","items-center","gap-4","text-center"],[1,"text-red-normal","font-mono"],["type","button","aria-label",t,1,"link","inline","p-0","underline",3,"click"]];},template:function(t,n){t&1&&(_(0,"div",4)(1,"p"),R(2,0),o(),_(3,"p",5),m(4),o(),A(5,N,5,0)(6,$,2,0,"p"),o()),t&2&&(l(4),O(n.error()),l(),E(n.rulesMode()==="local"?5:-1),l(),E(n.rulesMode()==="remote"?6:-1));},encapsulation:2,changeDetection:0});}return e;})();export{I as RulesErrorComponent};/**i18n:3ea64412cb2fa7572222484f1122e69f6d5b2ce20c9a2c903c347eb498cd7f05*/