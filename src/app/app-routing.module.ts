import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsComponent } from './auction/auctions/auctions.component';
import { PromotionsComponent } from './auction/promotions/promotions.component';


const routes: Routes = [
  { path: '', redirectTo: 'auctions', pathMatch: 'full' },
  { path: 'auctions', component: AuctionsComponent },
  { path: 'promotions', component: PromotionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
