import{C as g}from"./chunk-aa805410.js";import"./chunk-39c4b1ae.js";import{Gb as n,Hb as t,Lb as s,Mb as u,Nb as R,Rb as P,Za as S,ac as A,bc as c,ea as E,kb as T,ya as a}from"./chunk-a7901826.js";import"./chunk-243a5d09.js";var f=(()=>{class _{error=a();state=E(g);goToRawEditor(){this.state.router.go("rules-raw");}static ɵfac=function(e){return new(e||_)();};static ɵcmp=T({type:_,selectors:[["app-error"]],inputs:{error:[1,"error"]},decls:10,vars:1,consts:()=>{let r;r="Fix error in raw editor";let e;e="The following error occurred while parsing the rules:";let o;o=" Unfortunately, this error can only be fixed by changing the rules manually. ";let i;return i=" Please do that "+"\uFFFD#9\uFFFD"+" here"+"\uFFFD/#9\uFFFD"+". ",[e,o,i,["role","alert",1,"flex","flex-col","items-center","gap-4","text-center"],[1,"text-red-normal","font-mono"],["type","button","aria-label",r,1,"link","inline","p-0","underline",3,"click"]];},template:function(e,o){e&1&&(n(0,"div",3)(1,"p"),R(2,0),t(),n(3,"p",4),A(4),t(),n(5,"p"),R(6,1),t(),n(7,"p"),s(8,2),n(9,"button",5),P("click",function(){return o.goToRawEditor();}),t(),u(),t()()),e&2&&(S(4),c(o.error()));},encapsulation:2,changeDetection:0});}return _;})();export{f as RulesErrorComponent};/**i18n:15693acdce30f00c919aab2f8515f765f213a298081817f04f3b278c0f34be30*/