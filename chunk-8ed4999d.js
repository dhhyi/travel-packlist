import{b as e}from"./chunk-c4e53d60.js";import"./chunk-363de978.js";var r=class extends e{async canShare(){return typeof navigator>"u"||!navigator.share?{value:!1}:{value:!0}}async share(a){if(typeof navigator>"u"||!navigator.share)throw this.unavailable("Share API not available in this browser");return await navigator.share({title:a.title,text:a.text,url:a.url}),{}}};export{r as ShareWeb};
/**i18n:b8d4d2f9d1240cc11e4b937c8e3bec391e40968f9f0185d6119133313df6ac24*/