import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  constructor() { }

  getAll(): AuctionItem[] {
    return [{
      title: 'Dom22e22k',
      description: 'jakiś tam op22is2',
      imgUrl: 'https://picsum.photos/id/236/800/800',
      price: 10
    }];
  }
}
