import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsComponent } from './auctions/auctions.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: 'auctions', component: AuctionsComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'add-auction', component: AddAuctionComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
