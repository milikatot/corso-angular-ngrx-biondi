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
import { shopFiltersFeature } from './core/store/shop/shop-filters.feature';
import { UIFeature } from './core/store/ui/ui.feature';
import * as orderEffects from './core/store/cart/order.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState(productsFeature),
    provideState(cartFeature),
    provideState(shopFiltersFeature),
    provideState(UIFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([
      productsEffects, 
      cartEffects,
      orderEffects])
]
};
