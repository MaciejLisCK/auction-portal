import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AuctionItem } from '../auction-item';

@Component({
  selector: 'ap-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {
  cartItems: AuctionItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getAllItems()
      .subscribe((items: AuctionItem[]) => {
        this.cartItems = items;
      }, err => {
        console.error(err);
      }, () => {
        console.log('complete');
      });
  }

}
