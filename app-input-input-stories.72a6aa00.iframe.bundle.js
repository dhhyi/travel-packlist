(self.webpackChunktravel_packlist_root=self.webpackChunktravel_packlist_root||[]).push([[448],{"./apps/design-system/src/app/input/input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>input_input_stories,inputs:()=>inputs});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs");var input_stories=__webpack_require__("./apps/design-system/src/app/input/input.stories.ts.css?ngResource!=!./node_modules/.pnpm/@ngtools+webpack@19.1.4_@angular+compiler-cli@19.1.3_@angular+compiler@19.1.3_@angular+core@1_lh4d76ngzgf3xqpp72dzplji7u/node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICA6aG9zdCB7CiAgICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGdhcC15LTQ7CiAgICB9CiAgICA6aG9zdCA%2BICogewogICAgfQogIA%3D%3D!./apps/design-system/src/app/input/input.stories.ts"),input_stories_default=__webpack_require__.n(input_stories),common=__webpack_require__("./node_modules/.pnpm/@angular+common@19.1.3_@angular+core@19.1.3_rxjs@7.8.1_zone.js@0.15.0__rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/.pnpm/@angular+core@19.1.3_rxjs@7.8.1_zone.js@0.15.0/node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@19.1.3_@angular+common@19.1.3_@angular+core@19.1.3_rxjs@7.8.1_zone.js@0.15.0___fazwv5ynedr32zhcg22n4dwdr4/node_modules/@angular/forms/fesm2022/forms.mjs");var checkbox_componentngResource=__webpack_require__("./libs/components/src/lib/checkbox/checkbox.component.scss?ngResource"),checkbox_componentngResource_default=__webpack_require__.n(checkbox_componentngResource),src=__webpack_require__("./libs/icons/src/index.ts"),noop=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/noop.js");let CheckboxComponent=class CheckboxComponent{id=core.input.required();label=core.input.required();help=(0,core.input)();model=(0,core.signal)(void 0);onChange=noop.l;onTouched=noop.l;helpVisible=(0,core.signal)(!1);constructor(){(0,core.effect)((()=>{this.onChange(this.model()),this.onTouched()}))}toggleHelp(event){event.stopPropagation(),this.helpVisible.update((value=>!value))}toggle(){this.model.update((value=>!value))}writeValue(obj){this.model.set(obj)}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouched=fn}static ctorParameters=()=>[];static propDecorators={id:[{type:core.Input,args:[{isSignal:!0,alias:"id",required:!0,transform:void 0}]}],label:[{type:core.Input,args:[{isSignal:!0,alias:"label",required:!0,transform:void 0}]}],help:[{type:core.Input,args:[{isSignal:!0,alias:"help",required:!1,transform:void 0}]}]}};CheckboxComponent=(0,tslib_es6.Cg)([(0,core.Component)({changeDetection:core.ChangeDetectionStrategy.OnPush,selector:"cmp-checkbox",imports:[fesm2022_forms.YN,src.kG],template:'<div\n  class="my-2 h-6 min-h-6 w-6 min-w-6 appearance-none rounded-sm border-4 border-slate-300 dark:border-slate-700"\n  tabindex="-1"\n  [class]="{\n    \'bg-slate-300\': model(),\n    \'dark:bg-slate-700\': model(),\n  }"\n  [id]="id()"\n></div>\n<label class="grow" [htmlFor]="id()">{{ label() }}</label>\n@if (help()) {\n  <button\n    class="link"\n    type="button"\n    tabindex="-1"\n    aria-hidden="true"\n    (click)="toggleHelp($event)"\n  >\n    <app-icon-help class="h-6 w-6" />\n  </button>\n  @if (helpVisible()) {\n    <legend\n      class="help"\n      role="contentinfo"\n      (click)="toggleHelp($event)"\n      (keypress)="toggleHelp($event)"\n    >\n      {{ help() }}\n    </legend>\n  }\n}\n',host:{"(click)":"toggle()","(keypress)":"toggle()","[attr.aria-checked]":"model()","[attr.aria-label]":'label() + (help() ? ". (" + help() + ")" : "")',role:"checkbox",tabindex:"0"},providers:[{provide:fesm2022_forms.kq,useExisting:(0,core.forwardRef)((()=>CheckboxComponent)),multi:!0}],styles:[checkbox_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[])],CheckboxComponent);var progress_componentngResource=__webpack_require__("./libs/components/src/lib/progress/progress.component.scss?ngResource"),progress_componentngResource_default=__webpack_require__.n(progress_componentngResource),rxjs_interop=__webpack_require__("./node_modules/.pnpm/@angular+core@19.1.3_rxjs@7.8.1_zone.js@0.15.0/node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),combineLatest=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js"),startWith=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/startWith.js"),pairwise=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/pairwise.js"),withLatestFrom=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js"),concatMap=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/concatMap.js"),of=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/of.js"),animationFrame=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js"),interval=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/interval.js"),map=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/map.js"),takeWhile=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js"),endWith=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/endWith.js"),distinctUntilChanged=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js");const easeOutQuad=x=>x*(2-x);let ProgressComponent=class ProgressComponent{value=(0,core.input)(0);max=core.input.required();animationDuration=(0,core.input)(0);currentCount$=(0,combineLatest.z)([(0,rxjs_interop.br)(this.value).pipe((0,startWith.Z)(this.value()),(0,pairwise.J)())]).pipe((0,withLatestFrom.E)((0,rxjs_interop.br)(this.animationDuration)),(0,concatMap.H)((([[[prev,count]],duration])=>{if(duration<=0)return(0,of.of)(count);const startTime=animationFrame.X.now();return(0,interval.Y)(0,animationFrame.X).pipe((0,map.T)((()=>animationFrame.X.now()-startTime)),(0,map.T)((elapsedTime=>elapsedTime/duration)),(0,takeWhile.v)((progress=>progress<=1)),(0,map.T)(easeOutQuad),(0,map.T)((progress=>prev+progress*(count-prev))),(0,endWith.q)(count),(0,distinctUntilChanged.F)())})));static propDecorators={value:[{type:core.Input,args:[{isSignal:!0,alias:"value",required:!1,transform:void 0}]}],max:[{type:core.Input,args:[{isSignal:!0,alias:"max",required:!0,transform:void 0}]}],animationDuration:[{type:core.Input,args:[{isSignal:!0,alias:"animationDuration",required:!1,transform:void 0}]}]}};ProgressComponent=(0,tslib_es6.Cg)([(0,core.Component)({changeDetection:core.ChangeDetectionStrategy.OnPush,selector:"cmp-progress",template:'<progress\n  class="w-full"\n  aria-hidden="true"\n  [value]="currentCount$ | async"\n  [max]="max()"\n></progress>\n',imports:[common.AsyncPipe],host:{role:"progressbar","[attr.aria-valuemin]":"0","[attr.aria-valuemax]":"max()","[attr.aria-valuenow]":"value()"},styles:[progress_componentngResource_default()]})],ProgressComponent);var select_options_componentngResource=__webpack_require__("./libs/components/src/lib/select-options/select-options.component.scss?ngResource"),select_options_componentngResource_default=__webpack_require__.n(select_options_componentngResource);let SelectOptionDirective=class SelectOptionDirective{value=core.input.required();template=(0,core.inject)(core.TemplateRef);static propDecorators={value:[{type:core.Input,args:[{isSignal:!0,alias:"value",required:!0,transform:void 0}]}]}};SelectOptionDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"ng-template[value]"})],SelectOptionDirective);let SelectOptionsComponent=class SelectOptionsComponent{label=core.input.required();model=(0,core.signal)(void 0);children=(0,core.contentChildren)(SelectOptionDirective);onChanged=noop.l;onTouched=noop.l;constructor(){(0,core.effect)((()=>{this.onChanged(this.model()),this.onTouched()}))}template(option){const template=this.children().find((child=>child.value()===option));if(!template)throw new Error(`No template found for option: ${option}`);return template.template}writeValue(value){this.model.set(value)}registerOnChange(fn){this.onChanged=fn}registerOnTouched(fn){this.onTouched=fn}static ctorParameters=()=>[];static propDecorators={label:[{type:core.Input,args:[{isSignal:!0,alias:"label",required:!0,transform:void 0}]}],children:[{type:core.ContentChildren,args:[SelectOptionDirective,{isSignal:!0}]}]}};SelectOptionsComponent=(0,tslib_es6.Cg)([(0,core.Component)({changeDetection:core.ChangeDetectionStrategy.OnPush,selector:"cmp-select-options",template:'<fieldset\n  role="radiogroup"\n  class="flex flex-wrap justify-evenly gap-2 gap-y-4 pb-4"\n  [attr.aria-label]="label()"\n>\n  <legend>{{ label() }}</legend>\n  @for (child of children(); track child.value()) {\n    @let option = child.value();\n    <div\n      role="radio"\n      tabindex="0"\n      class="bg-active flex items-center text-nowrap"\n      [attr.aria-checked]="model() === option"\n      (click)="model.set(option)"\n      (keypress)="model.set(option)"\n    >\n      <div\n        class="mr-2 h-6 min-h-6 w-6 min-w-6 rounded-full border-4 border-slate-300 dark:border-slate-700"\n        [class]="{\n          \'bg-slate-300\': model() === option,\n          \'dark:bg-slate-700\': model() === option,\n        }"\n      ></div>\n      <ng-container *ngTemplateOutlet="template(option)" />\n    </div>\n  }\n</fieldset>\n',imports:[common.NgTemplateOutlet],providers:[{provide:fesm2022_forms.kq,useExisting:(0,core.forwardRef)((()=>SelectOptionsComponent)),multi:!0}],styles:[select_options_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[])],SelectOptionsComponent);let Input=class Input{form=new fesm2022_forms.gE({input:new fesm2022_forms.MJ(""),input_disabled:new fesm2022_forms.MJ({value:"disabled input",disabled:!0}),select:new fesm2022_forms.MJ("1"),checkbox:new fesm2022_forms.MJ(!1),checkbox_help:new fesm2022_forms.MJ(!1),radio:new fesm2022_forms.MJ("option 1")});constructor(){this.form.valueChanges.subscribe((value=>{console.log(value)}))}static ctorParameters=()=>[]};Input=(0,tslib_es6.Cg)([(0,core.Component)({changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,selector:"ds-input",template:'<ng-container [formGroup]="form">\n  <input type="text" placeholder="input" formControlName="input" />\n\n  <input type="text" formControlName="input_disabled" />\n\n  <select formControlName="select">\n    <option value="1">select</option>\n    <option value="2">option 1</option>\n    <option value="3">option 2</option>\n  </select>\n\n  <cmp-checkbox id="checkbox1" label="checkbox" formControlName="checkbox" />\n\n  <cmp-checkbox\n    id="checkbox2"\n    label="checkbox"\n    formControlName="checkbox_help"\n    help="This is a help text for the checkbox"\n  />\n\n  <cmp-select-options id="select1" label="select" formControlName="radio">\n    <ng-template value="option 1">Option 1</ng-template>\n    <ng-template value="option 2">Option 2</ng-template>\n  </cmp-select-options>\n</ng-container>\n',imports:[src.kG,CheckboxComponent,SelectOptionsComponent,SelectOptionDirective,fesm2022_forms.X1,common.JsonPipe],styles:[input_stories_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[])],Input);const input_input_stories={component:Input,title:"Components/Inputs"},inputs={},__namedExportsOrder=["inputs"];inputs.parameters={...inputs.parameters,docs:{...inputs.parameters?.docs,source:{originalSource:"{}",...inputs.parameters?.docs?.source}}}},"./apps/design-system/src/app/input/input.stories.ts.css?ngResource!=!./node_modules/.pnpm/@ngtools+webpack@19.1.4_@angular+compiler-cli@19.1.3_@angular+compiler@19.1.3_@angular+core@1_lh4d76ngzgf3xqpp72dzplji7u/node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICA6aG9zdCB7CiAgICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGdhcC15LTQ7CiAgICB9CiAgICA6aG9zdCA%2BICogewogICAgfQogIA%3D%3D!./apps/design-system/src/app/input/input.stories.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.2_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_3p2qoscowgxtpy2ti56qa2ccyu/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.2_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_3p2qoscowgxtpy2ti56qa2ccyu/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n    :host {\n    display: flex;\n    flex-direction: column;\n    row-gap: 1rem\n}\n    :host > * {\n    }\n  ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/src/lib/checkbox/checkbox.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.2_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_3p2qoscowgxtpy2ti56qa2ccyu/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.2_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_3p2qoscowgxtpy2ti56qa2ccyu/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n\n    display: flex;\n\n    align-items: center;\n\n    column-gap: 0.5rem\n}\n\n:host-context(.accessible) div[id] {\n\n    height: 2rem;\n\n    min-height: 2rem;\n\n    width: 2rem;\n\n    min-width: 2rem;\n\n    border-width: 6px\n}\n\n:host-context(.animations) div[id] {\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 150ms\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/src/lib/progress/progress.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.2_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_3p2qoscowgxtpy2ti56qa2ccyu/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.2_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_3p2qoscowgxtpy2ti56qa2ccyu/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"progress::-webkit-progress-bar {\n  border: 2px solid #ccc;\n  border-radius: 5px;\n  background-color: transparent;\n}\n\nprogress::-webkit-progress-value {\n  background-color: #999;\n  border-radius: 3px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/src/lib/select-options/select-options.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.2_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_3p2qoscowgxtpy2ti56qa2ccyu/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.2.2_@swc+helpers@0.5.15__webpack@5.97.1_@swc+core@1.5.29_@swc_3p2qoscowgxtpy2ti56qa2ccyu/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host-context(.accessible) div[role=radio] > div {\n\n    height: 2rem;\n\n    min-height: 2rem;\n\n    width: 2rem;\n\n    min-width: 2rem;\n\n    border-width: 6px\n}\n\n:host-context(.animations) div[role=radio] > div {\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 150ms\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);