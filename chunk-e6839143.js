import{a as x}from"./chunk-227dfe4f.js";import{b as m,c as P}from"./chunk-783362e7.js";import"./chunk-4b3a42dc.js";function E(u){let b=u.split("/").filter(r=>r!=="."),e=[];return b.forEach(r=>{r===".."&&e.length>0&&e[e.length-1]!==".."?e.pop():e.push(r)}),e.join("/")}function R(u,b){u=E(u),b=E(b);let e=u.split("/"),r=b.split("/");return u!==b&&e.every((t,i)=>t===r[i])}var F=(()=>{class u extends m{constructor(){super(...arguments),this.DB_VERSION=1,this.DB_NAME="Disc",this._writeCmds=["add","put","delete"],this.downloadFile=async e=>{var r,t;let i=P(e,e.webFetchExtra),n=await fetch(e.url,i),s;if(!e.progress)s=await n.blob();else if(!n?.body)s=new Blob;else{let c=n.body.getReader(),o=0,d=[],h=n.headers.get("content-type"),p=parseInt(n.headers.get("content-length")||"0",10);for(;;){let{done:y,value:w}=await c.read();if(y)break;d.push(w),o+=w?.length||0;let g={url:e.url,bytes:o,contentLength:p};this.notifyListeners("progress",g)}let f=new Uint8Array(o),l=0;for(let y of d)typeof y>"u"||(f.set(y,l),l+=y.length);s=new Blob([f.buffer],{type:h||void 0})}return{path:(await this.writeFile({path:e.path,directory:(r=e.directory)!==null&&r!==void 0?r:void 0,recursive:(t=e.recursive)!==null&&t!==void 0?t:!1,data:s})).uri,blob:s}}}async initDb(){if(this._db!==void 0)return this._db;if(!("indexedDB"in window))throw this.unavailable("This browser doesn't support IndexedDB");return new Promise((e,r)=>{let t=indexedDB.open(this.DB_NAME,this.DB_VERSION);t.onupgradeneeded=u.doUpgrade,t.onsuccess=()=>{this._db=t.result,e(t.result)},t.onerror=()=>r(t.error),t.onblocked=()=>{console.warn("db blocked")}})}static doUpgrade(e){let t=e.target.result;switch(e.oldVersion){case 0:case 1:default:t.objectStoreNames.contains("FileStorage")&&t.deleteObjectStore("FileStorage"),t.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}}async dbRequest(e,r){let t=this._writeCmds.indexOf(e)!==-1?"readwrite":"readonly";return this.initDb().then(i=>new Promise((n,s)=>{let o=i.transaction(["FileStorage"],t).objectStore("FileStorage")[e](...r);o.onsuccess=()=>n(o.result),o.onerror=()=>s(o.error)}))}async dbIndexRequest(e,r,t){let i=this._writeCmds.indexOf(r)!==-1?"readwrite":"readonly";return this.initDb().then(n=>new Promise((s,a)=>{let h=n.transaction(["FileStorage"],i).objectStore("FileStorage").index(e)[r](...t);h.onsuccess=()=>s(h.result),h.onerror=()=>a(h.error)}))}getPath(e,r){let t=r!==void 0?r.replace(/^[/]+|[/]+$/g,""):"",i="";return e!==void 0&&(i+="/"+e),r!==""&&(i+="/"+t),i}async clear(){(await this.initDb()).transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear()}async readFile(e){let r=this.getPath(e.directory,e.path),t=await this.dbRequest("get",[r]);if(t===void 0)throw Error("File does not exist.");return{data:t.content?t.content:""}}async writeFile(e){let r=this.getPath(e.directory,e.path),t=e.data,i=e.encoding,n=e.recursive,s=await this.dbRequest("get",[r]);if(s&&s.type==="directory")throw Error("The supplied path is a directory.");let a=r.substr(0,r.lastIndexOf("/"));if(await this.dbRequest("get",[a])===void 0){let h=a.indexOf("/",1);if(h!==-1){let p=a.substr(h);await this.mkdir({path:p,directory:e.directory,recursive:n})}}if(!i&&!(t instanceof Blob)&&(t=t.indexOf(",")>=0?t.split(",")[1]:t,!this.isBase64String(t)))throw Error("The supplied data is not valid base64 content.");let o=Date.now(),d={path:r,folder:a,type:"file",size:t instanceof Blob?t.size:t.length,ctime:o,mtime:o,content:t};return await this.dbRequest("put",[d]),{uri:d.path}}async appendFile(e){let r=this.getPath(e.directory,e.path),t=e.data,i=e.encoding,n=r.substr(0,r.lastIndexOf("/")),s=Date.now(),a=s,c=await this.dbRequest("get",[r]);if(c&&c.type==="directory")throw Error("The supplied path is a directory.");if(await this.dbRequest("get",[n])===void 0){let h=n.indexOf("/",1);if(h!==-1){let p=n.substr(h);await this.mkdir({path:p,directory:e.directory,recursive:!0})}}if(!i&&!this.isBase64String(t))throw Error("The supplied data is not valid base64 content.");if(c!==void 0){if(c.content instanceof Blob)throw Error("The occupied entry contains a Blob object which cannot be appended to.");c.content!==void 0&&!i?t=btoa(atob(c.content)+atob(t)):t=c.content+t,a=c.ctime}let d={path:r,folder:n,type:"file",size:t.length,ctime:a,mtime:s,content:t};await this.dbRequest("put",[d])}async deleteFile(e){let r=this.getPath(e.directory,e.path);if(await this.dbRequest("get",[r])===void 0)throw Error("File does not exist.");if((await this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(r)])).length!==0)throw Error("Folder is not empty.");await this.dbRequest("delete",[r])}async mkdir(e){let r=this.getPath(e.directory,e.path),t=e.recursive,i=r.substr(0,r.lastIndexOf("/")),n=(r.match(/\//g)||[]).length,s=await this.dbRequest("get",[i]),a=await this.dbRequest("get",[r]);if(n===1)throw Error("Cannot create Root directory");if(a!==void 0)throw Error("Current directory does already exist.");if(!t&&n!==2&&s===void 0)throw Error("Parent directory must exist");if(t&&n!==2&&s===void 0){let d=i.substr(i.indexOf("/",1));await this.mkdir({path:d,directory:e.directory,recursive:t})}let c=Date.now(),o={path:r,folder:i,type:"directory",size:0,ctime:c,mtime:c};await this.dbRequest("put",[o])}async rmdir(e){let{path:r,directory:t,recursive:i}=e,n=this.getPath(t,r),s=await this.dbRequest("get",[n]);if(s===void 0)throw Error("Folder does not exist.");if(s.type!=="directory")throw Error("Requested path is not a directory");let a=await this.readdir({path:r,directory:t});if(a.files.length!==0&&!i)throw Error("Folder is not empty");for(let c of a.files){let o=`${r}/${c.name}`;(await this.stat({path:o,directory:t})).type==="file"?await this.deleteFile({path:o,directory:t}):await this.rmdir({path:o,directory:t,recursive:i})}await this.dbRequest("delete",[n])}async readdir(e){let r=this.getPath(e.directory,e.path),t=await this.dbRequest("get",[r]);if(e.path!==""&&t===void 0)throw Error("Folder does not exist.");let i=await this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(r)]);return{files:await Promise.all(i.map(async s=>{let a=await this.dbRequest("get",[s]);return a===void 0&&(a=await this.dbRequest("get",[s+"/"])),{name:s.substring(r.length+1),type:a.type,size:a.size,ctime:a.ctime,mtime:a.mtime,uri:a.path}}))}}async getUri(e){let r=this.getPath(e.directory,e.path),t=await this.dbRequest("get",[r]);return t===void 0&&(t=await this.dbRequest("get",[r+"/"])),{uri:t?.path||r}}async stat(e){let r=this.getPath(e.directory,e.path),t=await this.dbRequest("get",[r]);if(t===void 0&&(t=await this.dbRequest("get",[r+"/"])),t===void 0)throw Error("Entry does not exist.");return{type:t.type,size:t.size,ctime:t.ctime,mtime:t.mtime,uri:t.path}}async rename(e){await this._copy(e,!0)}async copy(e){return this._copy(e,!1)}async requestPermissions(){return{publicStorage:"granted"}}async checkPermissions(){return{publicStorage:"granted"}}async _copy(e,r=!1){let{toDirectory:t}=e,{to:i,from:n,directory:s}=e;if(!i||!n)throw Error("Both to and from must be provided");t||(t=s);let a=this.getPath(s,n),c=this.getPath(t,i);if(a===c)return{uri:c};if(R(a,c))throw Error("To path cannot contain the from path");let o;try{o=await this.stat({path:i,directory:t})}catch{let l=i.split("/");l.pop();let y=l.join("/");if(l.length>0&&(await this.stat({path:y,directory:t})).type!=="directory")throw new Error("Parent directory of the to path is a file")}if(o&&o.type==="directory")throw new Error("Cannot overwrite a directory with a file");let d=await this.stat({path:n,directory:s}),h=async(f,l,y)=>{let w=this.getPath(t,f),g=await this.dbRequest("get",[w]);g.ctime=l,g.mtime=y,await this.dbRequest("put",[g])},p=d.ctime?d.ctime:Date.now();switch(d.type){case"file":{let f=await this.readFile({path:n,directory:s});r&&await this.deleteFile({path:n,directory:s});let l;!(f.data instanceof Blob)&&!this.isBase64String(f.data)&&(l=x.UTF8);let y=await this.writeFile({path:i,directory:t,data:f.data,encoding:l});return r&&await h(i,p,d.mtime),y}case"directory":{if(o)throw Error("Cannot move a directory over an existing object");try{await this.mkdir({path:i,directory:t,recursive:!1}),r&&await h(i,p,d.mtime)}catch{}let f=(await this.readdir({path:n,directory:s})).files;for(let l of f)await this._copy({from:`${n}/${l.name}`,to:`${i}/${l.name}`,directory:s,toDirectory:t},r);r&&await this.rmdir({path:n,directory:s})}}return{uri:c}}isBase64String(e){try{return btoa(atob(e))==e}catch{return!1}}}return u._debug=!0,u})();export{F as FilesystemWeb};
/**i18n:11555cd2058de678625c5e5f6fa7389cec339f76ccf0b7ad1e93105d8d32fab0*/
