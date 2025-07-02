import { Component } from '@angular/core';
import { NewsComponent } from '../news/news.component';
import { NewsNgrxComponent } from '../news-ngrx/news-ngrx.component';

@Component({
  selector: 'app-static-component',
  imports: [NewsComponent, NewsNgrxComponent],
  templateUrl: './static-component.component.html',
  styleUrl: './static-component.component.css'
})
export class StaticComponentComponent {

}
