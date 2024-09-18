import { createActionGroup, props } from '@ngrx/store';
import { CartItem } from '../../../model/cart-item';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Loaded From Local Storage': props<{ items: CartItem[] }>(),
    'Add': props<{ item: CartItem }>(),
    'Remove': props<{ id: number }>(),
    'Increase Quantity': props<{ id: number }>(),
    'Decrease Quantity': props<{ id: number }>()
  }
});