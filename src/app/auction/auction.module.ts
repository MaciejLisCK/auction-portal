import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsComponent } from './auctions/auctions.component';
import { PromotionsComponent } from './promotions/promotions.component';



@NgModule({
  declarations: [
    AuctionsComponent,
    PromotionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuctionsComponent
  ]
})
export class AuctionModule { }
