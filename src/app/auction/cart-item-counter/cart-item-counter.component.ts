import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'ap-cart-item-counter',
  template: `
    <p>
      Masz już {{cartService.countItems() | async}} elementów w koszyku
    </p>
  `,
  styles: []
})
export class CartItemCounterComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

}
