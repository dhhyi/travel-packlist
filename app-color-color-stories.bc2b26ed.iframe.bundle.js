(self.webpackChunktravel_packlist_root=self.webpackChunktravel_packlist_root||[]).push([[824],{"./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.0_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_wa2wmkkb6w3o7fu54h74ziehta/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.0_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_wa2wmkkb6w3o7fu54h74ziehta/node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./apps/design-system/src/app/color/color.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,colors:()=>colors,default:()=>color_color_stories});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs");var color_stories=__webpack_require__("./apps/design-system/src/app/color/color.stories.ts.css?ngResource!=!./node_modules/.pnpm/@ngtools+webpack@19.1.3_@angular+compiler-cli@19.1.2_@angular+compiler@19.1.2_@angular+core@1_pdz4wbnotcaftkyegtmcqsihsm/node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuY29sb3IgewogICAgICBAYXBwbHkgbWluLWgtOCBtaW4tdy0xMiByb3VuZGVkLW1kOwogICAgfQogICAgZmllbGRzZXQgewogICAgICBAYXBwbHkgZmxleCBmbGV4LXJvdyBnYXAtMTsKICAgIH0KICA%3D!./apps/design-system/src/app/color/color.stories.ts"),color_stories_default=__webpack_require__.n(color_stories),core=__webpack_require__("./node_modules/.pnpm/@angular+core@19.1.2_rxjs@7.8.1_zone.js@0.15.0/node_modules/@angular/core/fesm2022/core.mjs");const selectedColor=(0,core.signal)(void 0);let ColorDirective=class ColorDirective{constructor(element){const color=Array.from(element.nativeElement.classList).find((c=>c.startsWith("bg-")));element.nativeElement.addEventListener("click",(()=>{color&&(navigator.clipboard.writeText(color),selectedColor.set(color),element.nativeElement.classList.add("border"),setTimeout((()=>{element.nativeElement.classList.remove("border")}),5e3))}))}static ctorParameters=()=>[{type:core.ElementRef}]};ColorDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"div.color"}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef])],ColorDirective);let Color=class Color{selectedColor=selectedColor};Color=(0,tslib_es6.Cg)([(0,core.Component)({changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[ColorDirective],selector:"ds-color",template:'<div class="flex h-12 items-center justify-center gap-2">\n  @if (selectedColor(); as color) {\n  <div>You selected: {{color}}</div>\n  <div class="text-sm">(Copied to clipboard)</div>\n  } @else {\n  <div>Click on a color to select it.</div>\n  }\n</div>\n\n<fieldset>\n  <legend>slate</legend>\n  <div class="color bg-slate-100"></div>\n  <div class="color bg-slate-200"></div>\n  <div class="color bg-slate-300"></div>\n  <div class="color bg-slate-400"></div>\n  <div class="color bg-slate-500"></div>\n  <div class="color bg-slate-600"></div>\n  <div class="color bg-slate-700"></div>\n  <div class="color bg-slate-800"></div>\n  <div class="color bg-slate-900"></div>\n</fieldset>\n\n<fieldset>\n  <legend>grayscale</legend>\n  <div class="color bg-white"></div>\n  <div class="color bg-gray-100"></div>\n  <div class="color bg-gray-300"></div>\n  <div class="color bg-gray-500"></div>\n  <div class="color bg-gray-700"></div>\n  <div class="color bg-gray-900"></div>\n  <div class="color bg-black"></div>\n</fieldset>\n\n<div class="flex gap-4">\n  <fieldset>\n    <legend>green</legend>\n    <div class="color bg-green-light"></div>\n    <div class="color bg-green-normal"></div>\n  </fieldset>\n\n  <fieldset>\n    <legend>red</legend>\n    <div class="color bg-red-light"></div>\n    <div class="color bg-red-normal"></div>\n  </fieldset>\n\n  <fieldset>\n    <legend>yellow</legend>\n    <div class="color bg-yellow-normal"></div>\n  </fieldset>\n</div>\n',styles:[color_stories_default()]})],Color);const color_color_stories={component:Color,title:"General/Colors",parameters:{viewport:{disable:!0}}},colors={},__namedExportsOrder=["colors"];colors.parameters={...colors.parameters,docs:{...colors.parameters?.docs,source:{originalSource:"{}",...colors.parameters?.docs?.source}}}},"./apps/design-system/src/app/color/color.stories.ts.css?ngResource!=!./node_modules/.pnpm/@ngtools+webpack@19.1.3_@angular+compiler-cli@19.1.2_@angular+compiler@19.1.2_@angular+core@1_pdz4wbnotcaftkyegtmcqsihsm/node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuY29sb3IgewogICAgICBAYXBwbHkgbWluLWgtOCBtaW4tdy0xMiByb3VuZGVkLW1kOwogICAgfQogICAgZmllbGRzZXQgewogICAgICBAYXBwbHkgZmxleCBmbGV4LXJvdyBnYXAtMTsKICAgIH0KICA%3D!./apps/design-system/src/app/color/color.stories.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.0_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_wa2wmkkb6w3o7fu54h74ziehta/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.0_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_wa2wmkkb6w3o7fu54h74ziehta/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n    .color {\n    min-height: 2rem;\n    min-width: 3rem;\n    border-radius: 0.375rem\n}\n    fieldset {\n    display: flex;\n    flex-direction: row;\n    gap: 0.25rem\n}\n  ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);