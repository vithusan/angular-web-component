import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsState } from './news.reducer';

export const selectNewsState = createFeatureSelector<NewsState>('news');

export const selectArticles = createSelector(
  selectNewsState,
  (state) => state.articles
);

export const selectNewsError = createSelector(
  selectNewsState,
  (state) => state.error
);
