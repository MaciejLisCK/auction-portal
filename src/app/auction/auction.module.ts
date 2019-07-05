import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsComponent } from './auctions/auctions.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AuctionItemComponent } from './auctions/auction-item/auction-item.component';


import { AuctionRoutingModule } from './auction-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuctionFilterPipe } from './auction-filter.pipe';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AuctionsComponent,
    PromotionsComponent,
    AuctionItemComponent,
    AuctionFilterPipe,
    AddAuctionComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    SharedModule
  ],
  exports: [
    AuctionsComponent
  ],
  providers: [
    CartService
  ]
})
export class AuctionModule { }
