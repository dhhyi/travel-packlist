import{b as e}from"./chunk-M3ELZOQ4.js";import"./chunk-2NFLSA4Y.js";var r=class extends e{async canShare(){return typeof navigator>"u"||!navigator.share?{value:!1}:{value:!0}}async share(a){if(typeof navigator>"u"||!navigator.share)throw this.unavailable("Share API not available in this browser");return await navigator.share({title:a.title,text:a.text,url:a.url}),{}}};export{r as ShareWeb};