import { Routes } from '@angular/router';
import { NewsButtonComponent } from './news-button/news-button.component';
import { NewsComponent } from './news/news.component';
import { InputBoxComponent } from './input-box/input-box.component';

export const routes: Routes = [
  { path: '', component: NewsButtonComponent },
  { path: 'news', component: NewsComponent },
  { path: 'input', component: InputBoxComponent}
];
