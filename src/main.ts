import {
  bootstrapApplication,
  createApplication,
} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { NewsComponent } from './app/news/news.component';
import { InputBoxComponent } from './app/input-box/input-box.component';
import { ApplicationRef } from '@angular/core';

createApplication(appConfig).then((app) => {
  // Create input box web component
  const inputElement = createCustomElement(InputBoxComponent, {
    injector: app.injector,
  });
  customElements.define('angular-input', inputElement);

  // Create news web component
  const newsElement = createCustomElement(NewsComponent, {
    injector: app.injector,
  });
  customElements.define('angular-news', newsElement);

  // Bootstrap the application
  const appRef = app.injector.get(ApplicationRef);
  appRef.bootstrap(AppComponent);
});
