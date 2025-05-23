import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadArticles } from '../store/news.actions';
import { selectArticles } from '../store/news.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  articles$: Observable<any[]>;

  constructor(private store: Store) {
    this.articles$ = this.store.select(selectArticles);
  }

  ngOnInit() {
    this.store.dispatch(loadArticles()); // Fetch articles when the component is loaded
  }
}
