import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuctionItem } from '../../auction-item';

@Component({
  selector: 'ap-auction-item',
  template: `
  <div class="card">
    <div class="card-header" apHighlight>{{auction.title}}</div>
    <img class="card-img" [src]="auction.imgUrl">
    <div class="card-body">
        <p class="card-text">
            {{auction.description}}
        </p>
        <button class="btn btn-primary" (click)="emitAddToCart()">
            <i class="fa fa-cart-plus"></i>
        </button>
    </div>
  </div>
  `,
  styles: []
})
export class AuctionItemComponent {
  @Input() auction: AuctionItem;
  @Output() addToCart = new EventEmitter<AuctionItem>();

  emitAddToCart() {
    this.addToCart.emit(this.auction);
  }
}
