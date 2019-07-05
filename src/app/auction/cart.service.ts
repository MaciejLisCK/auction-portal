import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  auctionSubject = new BehaviorSubject<AuctionItem[]>([]);
  item$ = this.auctionSubject.asObservable();

  constructor() { }

  addToCart(item: AuctionItem) {
    const auctions = this.auctionSubject.getValue();
    this.auctionSubject.next([...auctions, item]);
  }

  getAllItems(): Observable<AuctionItem[]> {
    return this.item$;
  }

  countItems(): Observable<number> {
    return this.item$.pipe(map((arr) => arr.length));
  }
}
