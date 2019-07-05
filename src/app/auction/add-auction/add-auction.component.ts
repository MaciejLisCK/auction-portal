import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(myForm: NgForm) {
    console.log(myForm);
  }
}
