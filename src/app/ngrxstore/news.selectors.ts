import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsState } from './news.reducer';

export const selectNewsState = createFeatureSelector<NewsState>('ngrxNews'); // Make sure this matches your store key

export const selectArticles = createSelector(
  selectNewsState,
  (state: NewsState) => state.articles
);

export const selectLoading = createSelector(
  selectNewsState,
  (state: NewsState) => state.loading
);

export const selectError = createSelector(
  selectNewsState,
  (state: NewsState) => state.error
);