import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import * as NewsActions from './news.actions';
import { DataService } from '../data.service';

interface NewsResponse {
  articles: any[];
}

@Injectable()
export class NewsEffects {
  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActions.loadNews),
      switchMap(() =>
        this.dataService.get().pipe(
          delay(2000),
          map((response: any) => ({
            articles: (response.articles || []).slice(0, 5)
          } as NewsResponse)),
          map((response: NewsResponse) => 
            NewsActions.loadNewsSuccess({ articles: response.articles })
          ),
          catchError(error => of(NewsActions.loadNewsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}