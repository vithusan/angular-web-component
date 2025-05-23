import {
  bootstrapApplication,
  createApplication,
} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { NewsComponent } from './app/news/news.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

createApplication(appConfig).then((app) => {
  const el = createCustomElement(NewsComponent, { injector: app.injector });
  customElements.define('news-widget', el);
});
