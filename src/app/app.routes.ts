import { Routes } from '@angular/router';
import { NewsButtonComponent } from './news-button/news-button.component';
import { NewsComponent } from './news/news.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { NewsNgrxComponent } from './news-ngrx/news-ngrx.component';
import { StaticComponentComponent } from './static-component/static-component.component';


export const routes: Routes = [
  { path: '', component: NewsButtonComponent },
  { path: 'news', component: NewsComponent },
  { path: 'input', component: InputBoxComponent},
  { path: 'news-ngrx', component: NewsNgrxComponent},
  { path: 'static', component: StaticComponentComponent}
];
