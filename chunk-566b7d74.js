var n=function(e){return e[e.State=0]="State",e[e.Transition=1]="Transition",e[e.Sequence=2]="Sequence",e[e.Group=3]="Group",e[e.Animate=4]="Animate",e[e.Keyframes=5]="Keyframes",e[e.Style=6]="Style",e[e.Trigger=7]="Trigger",e[e.Reference=8]="Reference",e[e.AnimateChild=9]="AnimateChild",e[e.AnimateRef=10]="AnimateRef",e[e.Query=11]="Query",e[e.Stagger=12]="Stagger",e}(n||{}),c="*";function _(e,t){return{type:n.Trigger,name:e,definitions:t,options:{}}}function f(e,t=null){return{type:n.Animate,styles:t,timings:e}}function d(e,t=null){return{type:n.Group,steps:e,options:t}}function y(e,t=null){return{type:n.Sequence,steps:e,options:t}}function p(e){return{type:n.Style,styles:e,offset:null}}function m(e,t,s){return{type:n.State,name:e,styles:t,options:s}}function g(e){return{type:n.Keyframes,steps:e}}function D(e,t,s=null){return{type:n.Transition,expr:e,animation:t,options:s}}function F(e,t=null){return{type:n.Reference,animation:e,options:t}}function S(e=null){return{type:n.AnimateChild,options:e}}function E(e,t=null){return{type:n.AnimateRef,animation:e,options:t}}function P(e,t,s=null){return{type:n.Query,selector:e,animation:t,options:s}}function v(e,t){return{type:n.Stagger,timings:e,animation:t}}var a=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(t=0,s=0){this.totalTime=t+s}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let s=t=="start"?this._onStartFns:this._onDoneFns;s.forEach(i=>i()),s.length=0}},l=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(t){this.players=t;let s=0,i=0,o=0,h=this.players.length;h==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(r=>{r.onDone(()=>{++s==h&&this._onFinish()}),r.onDestroy(()=>{++i==h&&this._onDestroy()}),r.onStart(()=>{++o==h&&this._onStart()})}),this.totalTime=this.players.reduce((r,u)=>Math.max(r,u.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let s=t*this.totalTime;this.players.forEach(i=>{let o=i.totalTime?Math.min(1,s/i.totalTime):1;i.setPosition(o)})}getPosition(){let t=this.players.reduce((s,i)=>s===null||i.totalTime>s.totalTime?i:s,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let s=t=="start"?this._onStartFns:this._onDoneFns;s.forEach(i=>i()),s.length=0}},b="!";export{n as a,c as b,_ as c,f as d,d as e,y as f,p as g,m as h,g as i,D as j,F as k,S as l,E as m,P as n,v as o,a as p,l as q,b as r};
/**i18n:eee3d47a017a9f4fe983a06f27e0a9c7b95602fff3951636f2d8c55069b18d30*/
