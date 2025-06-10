// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
// import { newsReducer } from './store/news.reducer';
// import { NewsEffects } from './store/news.effects';
// import { routes } from './app.routes';
// import { provideHttpClient, withFetch } from '@angular/common/http';
// import { provideStoreDevtools } from '@ngrx/store-devtools';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes),
//     provideStore({ news: newsReducer }),
//     provideEffects([NewsEffects]),
//     provideHttpClient(withFetch()),
//      provideStoreDevtools({
//       maxAge: 25,
//       logOnly: false,
//       autoPause: true,
//       trace: false,
//       traceLimit: 75,
//     }),
//   ],
// };


import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { newsReducer } from './ngrxstore/news.reducer';  // Updated path for NgRx store
import { NewsEffects } from './ngrxstore/news.effects';  // Updated path for NgRx store
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { NewsStore } from './store/news.store';  // Signal store

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // NgRx store configuration
    provideStore({ ngrxNews: newsReducer }), // Changed key to avoid conflicts
    provideEffects([NewsEffects]),
    provideHttpClient(withFetch()),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    // Signal store provider
    NewsStore
  ],
};