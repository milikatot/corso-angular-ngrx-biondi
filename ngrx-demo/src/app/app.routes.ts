import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsCartEmpty } from './core/store/cart/cart.feature';

export const routes: Routes = [
    { path: 'shop', loadComponent: () => import('./features/shop/shop.component')},
    { path: 'cart', loadComponent: () => import('./features/cart/cart.component')},
    { path: 'counter', loadComponent: () => import('./features/counter/counter.component')},
    { 
      path: 'order-form', 
      loadComponent: () => import('./features/order/shop-order-form.component'),
      canActivate: [
        () => {
          const store = inject(Store)
          // inject router
          const router = inject(Router)
          const isCartEmpty = store.selectSignal(selectIsCartEmpty)
          // redirect if cart is empty
          if (isCartEmpty()) {
            router.navigateByUrl('shop')
          }
          return !isCartEmpty()
        }
      ]
    },
    { path: 'cms', loadComponent: () => import('./features/cms/cms.component')},
    { path: '', redirectTo: 'shop', pathMatch: 'full' }
  ];