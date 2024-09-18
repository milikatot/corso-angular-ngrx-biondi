import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as productsEffects from './core/store/products/products.effects';
import { provideHttpClient } from '@angular/common/http';
import { productsFeature } from './core/store/products/products.feature';
import { cartFeature } from './core/store/cart/cart.feature';
import * as cartEffects from './core/store/cart/cart.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState(productsFeature),
    provideState(cartFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([productsEffects, cartEffects])
]
};
