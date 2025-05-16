/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .then(() => fetch('build-info.json'))
  .then((response) => response.json())
  .then((data) => {
    /* eslint-disable */
    const w = window as any;
    w.BUILD_TIME = data.buildTime;
    w.VERSION = data.version;
    w.COMMITS_SINCE = data.commitsSince;
    w.GIT_HASH = data.gitHash;
    w.VERSION_CODE = data.versionCode;
    /* eslint-enable */
  })
  .catch((err: unknown) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
