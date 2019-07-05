import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    console.log(myForm.value);
  }
}
