import{b as e}from"./chunk-4b1dfe58.js";import"./chunk-dd371127.js";var r=class extends e{async canShare(){return typeof navigator>"u"||!navigator.share?{value:!1}:{value:!0}}async share(a){if(typeof navigator>"u"||!navigator.share)throw this.unavailable("Share API not available in this browser");return await navigator.share({title:a.title,text:a.text,url:a.url}),{}}};export{r as ShareWeb};
/**i18n:4be4faadc01327a97e860b06942fb7e470703ee2338d4a40735be0c88fb41d51*/
