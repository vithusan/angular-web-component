import { Component, OnInit, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import * as NewsActions from '../ngrxstore/news.actions';
import * as NewsSelectors from '../ngrxstore/news.selectors';
import { NewsStore } from '../store/news.store';

@Component({
  selector: 'app-news-ngrx',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-ngrx.component.html',
  styleUrls: ['./news-ngrx.component.css']
})
export class NewsNgrxComponent implements OnInit {
  articles$!: Observable<any[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  private readonly ngrxStore = inject(Store);
  private readonly signalStore = inject(NewsStore);

  constructor() {
    this.articles$ = this.ngrxStore.select(NewsSelectors.selectArticles).pipe(
      tap(articles => console.log('Articles in ngrx component:', articles))
    );
    this.loading$ = this.ngrxStore.select(NewsSelectors.selectLoading).pipe(
      tap(loading => console.log('Loading state:', loading))
    );
    this.error$ = this.ngrxStore.select(NewsSelectors.selectError).pipe(
      tap(error => console.log('Error state:', error))
    );

    // Reactively sync SignalStore's articles to NgRx store
    effect(() => {
      const signalArticles = this.signalStore.articlesList(); // signal
      const articlesValue = signalArticles(); // get the value
      if (articlesValue && articlesValue.length === 10) {
        this.ngrxStore.dispatch(NewsActions.addArticles({ articles: articlesValue }));
      }
    });
  }

  ngOnInit(): void {
    // 1. Dispatch NgRx fetch (which loads 5 articles)
    this.ngrxStore.dispatch(NewsActions.loadNews());
  }
}
