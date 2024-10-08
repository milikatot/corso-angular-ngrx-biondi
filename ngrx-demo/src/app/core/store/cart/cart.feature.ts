import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { CartActions } from './cart.actions';
import { CartItem } from '../../../model/cart-item';

export interface CartState {
  list: CartItem[];
}

const initialState: CartState =  {
  list: []
}

export const cartFeature = createFeature({
  name: 'cart',
  reducer: createReducer(
    initialState,
    on(CartActions.loadedFromLocalStorage, (state, action) => ({
      ...state,
      list: [...action.items]
    })),
    on(CartActions.add, (state, action) => {
      const productAlreadyInCart = state.list.find(item => item.product.id === action.item.product.id);
    
      if (productAlreadyInCart) {
        // increase qty
        return ({
          ...state,
          list: state.list.map(item => {
            return item.product.id === action.item.product.id ? {...item, qty: item.qty + 1} : item;
          })
        })
      } else {
        // add in cart
        const cartItem: CartItem = { product: action.item.product, qty: 1};
        return ({
          ...state, list: [...state.list, cartItem]
        })
      }
    }),
    on(CartActions.remove, (state, action) => ({
      ...state,
      list: state.list.filter(item => item.product.id !== action.id)
    })),
    on(CartActions.increaseQuantity, (state, action) => {
      return ({
        ...state,
        list: state.list.map(item => {
          return item.product.id === action.id ? {...item, qty: item.qty + 1} : item;
        })
      })
    }),
    on(CartActions.decreaseQuantity, (state, action) => {
      const productAlreadyInCart = state.list.find(item => item.product.id === action.id);
    
      // if cart item has a quantity > 1
      if (productAlreadyInCart && productAlreadyInCart.qty > 1) {
        // decrease the quantity
        return ({
          ...state,
          list: state.list.map(item => {
            return item.product.id === action.id ? {...item, qty: item.qty - 1} : item;
          })
        })
      }
      // otherwise, if quantity is <= 1
      // remove the element from the cart
      return {
        ...state,
        list: state.list.filter(item => item.product.id !== action.id)
      }
    }),
    on(CartActions.clear, (state): CartState => ({
      ...state,
      list: []
    }))
  ),
  extraSelectors: ({ selectList }) => ({
    selectIsCartEmpty: createSelector(
      selectList,
      (list) => list.length === 0
    ),
    selectTotalCartItems: createSelector(
      selectList,
      (list) => list.reduce((total, item) => total + item.qty, 0)
    ),
    selectTotalCartCost: createSelector(
      selectList,
      (list) => list.reduce((total, item) => total + (item.product.cost * item.qty), 0)
    )
  })
});

export const {
  selectList,
  selectIsCartEmpty,
  selectTotalCartItems,
  selectTotalCartCost
} = cartFeature;