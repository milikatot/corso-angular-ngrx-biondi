import { inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ProductsActions } from "./products.actions";
import { HttpClient } from "@angular/common/http";
import { Product } from "../../../model/product";

export const loadProducts = createEffect((
    actions$ = inject(Actions),
    http = inject(HttpClient)
  ) => {
    return actions$.pipe(
      ofType(ProductsActions.load),
      mergeMap(() =>
        http.get<Product[]>('http://localhost:3001/products')
          .pipe(
            map((items) =>
              ProductsActions.loadSuccess({ items })
            ),
            catchError((error) =>
                of(ProductsActions.loadFail())
            )
          )
      )
    );
  },
  { functional: true}
);