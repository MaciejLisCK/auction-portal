import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsComponent } from './auctions/auctions.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AuctionRoutingModule } from './auction-routing.module';

@NgModule({
  declarations: [
    AuctionsComponent,
    PromotionsComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule
  ],
  exports: [
    AuctionsComponent
  ]
})
export class AuctionModule { }
