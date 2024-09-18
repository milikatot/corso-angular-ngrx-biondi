import { createFeature, createReducer, on } from '@ngrx/store';
import { Product } from '../../../model/product';
import { ProductsActions } from './products.actions';


// 1. Define the State Type
export interface ProductsState {
  hasError: boolean;
  pending: boolean;
  list: Product[];
}

// 2. The initial State
const initialState: ProductsState = {
  hasError: false,
  pending: false,
  list: []
};

// 3. The Reducer
export const productsFeature = createFeature({
  name: 'products',
  reducer: createReducer(
    initialState,
    on(ProductsActions.load, (state) => ({
      ...state,
      pending: true,
      hasError: false
    })),
    on(ProductsActions.loadSuccess, (state, action) => ({
      list: [...action.items],
      pending: false,
      hasError: false
    })),
    on(ProductsActions.loadFail, (state) => ({
      ...state,
      hasError: true,
      pending: false
    })),
  ),
});

export const {
  selectHasError,
  selectPending,
  selectList
} = productsFeature;