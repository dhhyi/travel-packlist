var n=function(s){return s[s.State=0]="State",s[s.Transition=1]="Transition",s[s.Sequence=2]="Sequence",s[s.Group=3]="Group",s[s.Animate=4]="Animate",s[s.Keyframes=5]="Keyframes",s[s.Style=6]="Style",s[s.Trigger=7]="Trigger",s[s.Reference=8]="Reference",s[s.AnimateChild=9]="AnimateChild",s[s.AnimateRef=10]="AnimateRef",s[s.Query=11]="Query",s[s.Stagger=12]="Stagger",s}(n||{}),f="*";function _(s,t){return{type:n.Trigger,name:s,definitions:t,options:{}}}function c(s,t=null){return{type:n.Animate,styles:t,timings:s}}function y(s,t=null){return{type:n.Group,steps:s,options:t}}function F(s,t=null){return{type:n.Sequence,steps:s,options:t}}function S(s){return{type:n.Style,styles:s,offset:null}}function g(s,t,e){return{type:n.State,name:s,styles:t,options:e}}function D(s){return{type:n.Keyframes,steps:s}}function d(s,t,e=null){return{type:n.Transition,expr:s,animation:t,options:e}}function p(s,t=null){return{type:n.Reference,animation:s,options:t}}function E(s=null){return{type:n.AnimateChild,options:s}}function P(s,t=null){return{type:n.AnimateRef,animation:s,options:t}}function m(s,t,e=null){return{type:n.Query,selector:s,animation:t,options:e}}function C(s,t){return{type:n.Stagger,timings:s,animation:t}}var l=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(t=0,e=0){this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(r=>r()),e.length=0}},u=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(t){this.players=t;let e=0,r=0,o=0,h=this.players.length;h==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(i=>{i.onDone(()=>{++e==h&&this._onFinish()}),i.onDestroy(()=>{++r==h&&this._onDestroy()}),i.onStart(()=>{++o==h&&this._onStart()})}),this.totalTime=this.players.reduce((i,a)=>Math.max(i,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let e=t*this.totalTime;this.players.forEach(r=>{let o=r.totalTime?Math.min(1,e/r.totalTime):1;r.setPosition(o)})}getPosition(){let t=this.players.reduce((e,r)=>e===null||r.totalTime>e.totalTime?r:e,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(r=>r()),e.length=0}},k="!";export{n as a,f as b,_ as c,c as d,y as e,F as f,S as g,g as h,D as i,d as j,p as k,E as l,P as m,m as n,C as o,l as p,u as q,k as r};
/**i18n:3ea64412cb2fa7572222484f1122e69f6d5b2ce20c9a2c903c347eb498cd7f05*/
