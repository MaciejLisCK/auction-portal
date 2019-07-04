import { Component, OnInit } from '@angular/core';
import {AuctionService} from '../auction.service';
import {AuctionItem} from './../auction-item';

@Component({
  selector: 'ap-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  auctions: AuctionItem[] = [];
  constructor(private auctionService: AuctionService) { }

  ngOnInit() {
    this.auctions = this.auctionService.getAll();
  }

}
