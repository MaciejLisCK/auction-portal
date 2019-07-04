import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsComponent } from './auctions/auctions.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AuctionItemComponent } from './auctions/auction-item/auction-item.component';


import { AuctionRoutingModule } from './auction-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuctionFilterPipe } from './auction-filter.pipe';

@NgModule({
  declarations: [
    AuctionsComponent,
    PromotionsComponent,
    AuctionItemComponent,
    AuctionFilterPipe
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    SharedModule
  ],
  exports: [
    AuctionsComponent
  ]
})
export class AuctionModule { }
