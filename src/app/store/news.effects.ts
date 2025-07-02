import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from '../data.service';
import {
  loadArticles,
  loadArticlesSuccess,
  loadArticlesFailure,
} from './news.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class NewsEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticles),
      mergeMap(() => {
        console.log('loadArticles action dispatched'); // Debug log for action dispatch
        return this.dataService.get().pipe(
          map((data: any) => {
            console.log('API response:', data); // Debug log for API response
            return loadArticlesSuccess({ articles: data['articles'] });
          }),
          catchError((error) => {
            console.error('API error:', error); // Debug log for API error
            return of(loadArticlesFailure({ error }));
          })
        );
      })
    )
  );
  constructor(private actions$: Actions, private dataService: DataService) {}
}
