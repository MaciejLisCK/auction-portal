import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  auctions: AuctionsItemp[] = [{
    title: 'Domek',
    description: 'jakiś tam opis2',
    imgUrl: 'https://picsum.photos/id/236/200/200',
    price: 10
  }];
  constructor() { }

  ngOnInit() {
  }

}
