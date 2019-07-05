import { Component, OnInit } from '@angular/core';
import {AuctionService} from '../auction.service';
import {AuctionItem} from './../auction-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'ap-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  auctions: AuctionItem[] = [];
  constructor(private auctionService: AuctionService, private cartService: CartService) { }

  ngOnInit() {
    this.auctionService
      .getAll()
      .subscribe((auctions: AuctionItem[]) => {
        this.auctions = auctions;
      });
  }

  handleAddToCart(auction: AuctionItem) {
    this.cartService.addToCart(auction);
  }
}
