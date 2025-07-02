import { createReducer, on } from '@ngrx/store';
import * as NewsActions from './news.actions';

export interface NewsState {
  articles: any[];
  loading: boolean;
  error: any;
}

export const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null
};

export const newsReducer = createReducer(
  initialState,
  on(NewsActions.loadNews, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(NewsActions.loadNewsSuccess, (state, { articles }) => ({
    ...state,
    articles: [...state.articles, ...articles],
    loading: false
  })),
  on(NewsActions.loadNewsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(NewsActions.addArticles, (state, { articles }) => ({
    ...state,
    articles: [...state.articles, ...articles] // <-- This APPENDS!
  }))
);