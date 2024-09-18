import { Component, inject, OnInit } from '@angular/core';
import { ProductsActions } from '../../core/store/products/products.actions';
import { Store } from '@ngrx/store';
import { selectList } from '../../core/store/products/products.feature';
import { Product } from '../../model/product';
import { CartActions } from '../../core/store/cart/cart.actions';
import { CartItem } from '../../model/cart-item';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      @for (product of products(); track product.id) {
        <div class="card bg-slate-900 shadow-xl">
          <figure>
            <img [src]="product.image" [alt]="product.name" /></figure>
          <div class="card-body">
            <h2 class="card-title">{{product.name}}</h2>
            <div class="card-actions justify-end">
              <button class="btn btn-outline btn-primary"
              (click)="addProductToCart(product)">
                Add to Cart  | € {{product.cost}}</button>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``
})
export default class ShopComponent implements OnInit {
  store = inject(Store);

  products = this.store.selectSignal(selectList);

  ngOnInit() {
    this.store.dispatch(ProductsActions.load())
  }

  addProductToCart(product: Product) {
    const item: CartItem = {
      product: product,
      qty: 1
    };
    this.store.dispatch(CartActions.add({item}));
  }
}
