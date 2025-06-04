import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { DataService } from '../data.service';
import { switchMap, tap, Observable, pipe, of } from 'rxjs';
import { withDevtools } from '@angular-architects/ngrx-toolkit';

interface NewsState {
  articles: any[];
  loading: boolean;
  error: any;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

export const NewsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('articles'),
  withComputed((state) => ({
    hasArticles: computed(() => state.articles().length > 0),
    isLoading: computed(() => state.loading()),
    hasError: computed(() => state.error() !== null),
  })),
  withMethods((store: any, dataService = inject(DataService)) => ({
    loadArticles: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() =>
          dataService.get().pipe(
            tapResponse(
              (response: any) => {
                const articles = response?.articles || [];
                patchState(store, { articles, loading: false });
              },
              (error: any) => patchState(store, { error, loading: false })
            )
          )
        )
      )
    ),
  }))
);