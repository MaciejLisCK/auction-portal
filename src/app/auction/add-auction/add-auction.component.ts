import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuctionItem } from '../auction-item';

@Component({
  selector: 'ap-add-auction',
  templateUrl: './add-auction.component.html',
  styles: [`
    input.ng-dirty.ng-invalid {
      border-color: red;
    }
  `]
})
export class AddAuctionComponent implements OnInit {
  imgId = 1;

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(myForm: NgForm) {
    const imgUrl = `https://picsum.photos/id/${this.imgId}/600/600`;
    const auction = {...myForm.value, imgUrl} as AuctionItem;

    console.log(myForm.value);
    console.log(auction);
  }
}
