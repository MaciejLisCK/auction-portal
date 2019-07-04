import { Component, OnInit } from '@angular/core';
import {AuctionService} from '../auction.service';

@Component({
  selector: 'ap-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  auctions: AuctionsItem[] = [];
  constructor(private auctionService: AuctionService) { }

  ngOnInit() {
    this.auctions = this.auctionService.getAll();
  }

}
