import{d as e}from"./chunk-T53CFLPC.js";var r=class extends e{async canShare(){return typeof navigator>"u"||!navigator.share?{value:!1}:{value:!0}}async share(a){if(typeof navigator>"u"||!navigator.share)throw this.unavailable("Share API not available in this browser");return await navigator.share({title:a.title,text:a.text,url:a.url}),{}}};export{r as ShareWeb};
/**i18n:269fa4b8105467d14d499e90cd8b7e26b0346e7e52bf4e6923902ad8612c93d8*/