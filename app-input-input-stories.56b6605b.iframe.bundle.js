(self.webpackChunk_travel_packlist=self.webpackChunk_travel_packlist||[]).push([[448],{"./apps/design-system/src/app/input/input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>input_input_stories,inputs:()=>inputs});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs");var input_stories=__webpack_require__("./apps/design-system/src/app/input/input.stories.ts.css?ngResource!=!./node_modules/.pnpm/@ngtools+webpack@19.0.5_@angular+compiler-cli@19.0.5_@angular+compiler@19.0.5_@angular+core@1_jh2frghzscdhqo2m75bofmdmbi/node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICA6aG9zdCB7CiAgICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGdhcC15LTQ7CiAgICB9CiAgICA6aG9zdCA%2BICogewogICAgfQogIA%3D%3D!./apps/design-system/src/app/input/input.stories.ts"),input_stories_default=__webpack_require__.n(input_stories),core=__webpack_require__("./node_modules/.pnpm/@angular+core@19.0.5_rxjs@7.8.1_zone.js@0.15.0/node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/icons/src/index.ts");let Input=class Input{displayHelp=(0,core.signal)(!1)};Input=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,selector:"ds-input",template:'<input type="text" placeholder="input" />\n\n<input type="text" value="disabled input" disabled />\n\n<select>\n  <option value="1">select</option>\n  <option value="2">option 1</option>\n  <option value="3">option 2</option>\n</select>\n\n<div>\n  <input type="checkbox" id="checkbox1" />\n  <label for="checkbox1">checkbox</label>\n</div>\n\n<div>\n  <input type="checkbox" id="checkbox2" />\n  <label for="checkbox2" class="grow">checkbox</label>\n\n  <button class="link" type="button" (click)="displayHelp.set(!displayHelp())">\n    <app-icon-help class="h-6 w-6" />\n  </button>\n  @if (displayHelp()) {\n  <legend\n    class="help"\n    role="contentinfo"\n    (click)="displayHelp.set(false)"\n    (keypress)="displayHelp.set(false)"\n  >\n    This is a help text for the checkbox\n  </legend>\n  }\n</div>\n\n<fieldset class="flex flex-row flex-wrap gap-x-6">\n  <legend>radio group</legend>\n  <div>\n    <input type="radio" id="radio1" name="radio" />\n    <label for="radio1">radio option 1</label>\n  </div>\n  <div>\n    <input type="radio" id="radio2" name="radio" />\n    <label for="radio2">radio option 2</label>\n  </div>\n</fieldset>\n',imports:[src.kG],styles:[input_stories_default()]})],Input);const input_input_stories={component:Input,title:"Components/Inputs"},inputs={},__namedExportsOrder=["inputs"];inputs.parameters={...inputs.parameters,docs:{...inputs.parameters?.docs,source:{originalSource:"{}",...inputs.parameters?.docs?.source}}}},"./apps/design-system/src/app/input/input.stories.ts.css?ngResource!=!./node_modules/.pnpm/@ngtools+webpack@19.0.5_@angular+compiler-cli@19.0.5_@angular+compiler@19.0.5_@angular+core@1_jh2frghzscdhqo2m75bofmdmbi/node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICA6aG9zdCB7CiAgICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGdhcC15LTQ7CiAgICB9CiAgICA6aG9zdCA%2BICogewogICAgfQogIA%3D%3D!./apps/design-system/src/app/input/input.stories.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.1.8_@swc+helpers@0.5.15__webpack@5.96.1_@swc+core@1.5.29_@swc_3hpbnfktns363m7bdorut7pt3q/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.1.8_@swc+helpers@0.5.15__webpack@5.96.1_@swc+core@1.5.29_@swc_3hpbnfktns363m7bdorut7pt3q/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n    :host {\n    display: flex;\n    flex-direction: column;\n    row-gap: 1rem\n}\n    :host > * {\n    }\n  ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);