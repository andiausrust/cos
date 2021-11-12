import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyerAuctionListPage } from './buyer-auction-list.page';

const routes: Routes = [
  {
    path: '',
    component: BuyerAuctionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyerAuctionListPageRoutingModule {}
