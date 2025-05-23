import { createReducer, on } from '@ngrx/store';
import {
  loadArticles,
  loadArticlesSuccess,
  loadArticlesFailure,
} from './news.actions';

export interface NewsState {
  articles: any[];
  error: any;
}

export const initialState: NewsState = {
  articles: [],
  error: null,
};

export const newsReducer = createReducer(
  initialState,
  on(loadArticles, (state) => ({ ...state, articles: [], error: null })),
  on(loadArticlesSuccess, (state, { articles }) => ({ ...state, articles })),
  on(loadArticlesFailure, (state, { error }) => ({ ...state, error }))
);
