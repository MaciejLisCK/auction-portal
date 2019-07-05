import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  auctions: AuctionItem[] = [];

  constructor() { }

  addToCart(item: AuctionItem) {
    this.auctions.push(item);
  }

  getAllItems(): AuctionItem[] {
    return this.auctions;
  }
}
