import{b as e}from"./chunk-a3a268e9.js";import"./chunk-cda56b02.js";var r=class extends e{async canShare(){return typeof navigator>"u"||!navigator.share?{value:!1}:{value:!0}}async share(a){if(typeof navigator>"u"||!navigator.share)throw this.unavailable("Share API not available in this browser");return await navigator.share({title:a.title,text:a.text,url:a.url}),{}}};export{r as ShareWeb};
/**i18n:4a6736036967a8ccd16f04367901a4ba71d037a76b0eab5e682f17022f102c1d*/
