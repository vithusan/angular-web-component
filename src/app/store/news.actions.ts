import { createAction, props } from '@ngrx/store';

export const loadArticles = createAction('[News] Load Articles');
export const loadArticlesSuccess = createAction(
  '[News] Load Articles Success',
  props<{ articles: any[] }>()
);
export const loadArticlesFailure = createAction(
  '[News] Load Articles Failure',
  props<{ error: any }>()
);
