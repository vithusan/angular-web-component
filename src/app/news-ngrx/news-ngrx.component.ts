import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import * as NewsActions from '../ngrxstore/news.actions';
import * as NewsSelectors from '../ngrxstore/news.selectors';
import { AppState } from '../ngrxstore/store';

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

  constructor(private store: Store<AppState>) {
    this.articles$ = this.store.select(NewsSelectors.selectArticles).pipe(
      tap(articles => console.log('Articles in component:', articles))
    );
    this.loading$ = this.store.select(NewsSelectors.selectLoading).pipe(
      tap(loading => console.log('Loading state:', loading))
    );
    this.error$ = this.store.select(NewsSelectors.selectError).pipe(
      tap(error => console.log('Error state:', error))
    );
  }

  ngOnInit(): void {
    console.log('Dispatching loadNews action');
    this.store.dispatch(NewsActions.loadNews());
  }
}
