import { ActionReducerMap } from '@ngrx/store';
import { newsReducer, NewsState } from './news.reducer';

export interface AppState {
  news: NewsState;
}

export const reducers: ActionReducerMap<AppState> = {
  news: newsReducer
};