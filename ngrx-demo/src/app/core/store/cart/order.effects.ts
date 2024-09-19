import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Product } from '../../../model/product';
import { OrderActions } from './order.actions';
import { Router } from '@angular/router';
import { CartActions } from './cart.actions';


export const sendOrder = createEffect((
    actions$ = inject(Actions),
    http = inject(HttpClient)
  ) => {
    return actions$.pipe(
      ofType(OrderActions.send),
      mergeMap((action) =>
        http.post<Product[]>('http://localhost:3001/orders', {
          user: action.user,
          cart: action.cart
        })
          .pipe(
            map( () => OrderActions.sendSuccess() ),
            catchError(() => of(OrderActions.sendFail()) )
          )
      )
    );
  },
  { functional: true}
);

export const sendOrderSuccess = createEffect((
  actions$ = inject(Actions),
  router = inject(Router),
) => {
  return actions$.pipe(
    ofType(OrderActions.sendSuccess),
    map(() => CartActions.clear()),
    tap(() => {
      router.navigateByUrl('/shop')
    })
  );
},
{ functional: true}
);