import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  auctionSubject = new BehaviorSubject<AuctionItem[]>([]);

  constructor() { }

  addToCart(item: AuctionItem) {
    const auctions = this.auctionSubject.getValue();
    this.auctionSubject.next([...auctions, item]);
  }

  getAllItems(): BehaviorSubject<AuctionItem[]> {
    return this.auctionSubject;
  }
}
