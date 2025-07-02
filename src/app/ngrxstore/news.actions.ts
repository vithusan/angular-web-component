import { createAction, props } from '@ngrx/store';

export const loadNews = createAction('[News] Load News');
export const loadNewsSuccess = createAction(
  '[News] Load News Success',
  props<{ articles: any[] }>()
);
export const loadNewsFailure = createAction(
  '[News] Load News Failure',
  props<{ error: any }>()
);
export const addArticles = createAction(
  '[News] Add Articles',
  props<{ articles: any[] }>()
);