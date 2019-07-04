import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsComponent } from './auctions/auctions.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AuctionItemComponent } from './auctions/auction-item/auction-item.component';


import { AuctionRoutingModule } from './auction-routing.module';

@NgModule({
  declarations: [
    AuctionsComponent,
    PromotionsComponent,
    AuctionItemComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
  ],
  exports: [
    AuctionsComponent
  ]
})
export class AuctionModule { }
