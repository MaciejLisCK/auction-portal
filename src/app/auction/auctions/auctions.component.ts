import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuctionService} from '../auction.service';
import {AuctionItem} from './../auction-item';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ap-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit, OnDestroy {

  auctions: AuctionItem[] = [];
  auctionSub: Subscription;

  constructor(private auctionService: AuctionService, private cartService: CartService) { }

  ngOnInit() {
    this.auctionSub = this.auctionService
      .getAll()
      .subscribe((auctions: AuctionItem[]) => {
        this.auctions = auctions;
        console.log(this.auctions);
      });
  }

  ngOnDestroy(): void {
    this.auctionSub.unsubscribe();
  }

  handleAddToCart(auction: AuctionItem) {
    this.cartService.addToCart(auction);
  }
}
