/// <reference types="@angular/localize" />
import { bootstrapApplication } from '@angular/platform-browser';
import '@capacitor-community/safe-area';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err: unknown) => {
  console.error(err);
});
