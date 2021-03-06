import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { UtilsModule } from '../../libs/utils/utils.module';
import { BuyerAuctionItemComponent } from './buyer-auction-item/buyer-auction-item.component';

import { BuyerAuctionListPageRoutingModule } from './buyer-auction-list-routing.module';

import { BuyerAuctionListPage } from './buyer-auction-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyerAuctionListPageRoutingModule,
    UtilsModule
  ],
  declarations: [ BuyerAuctionListPage, BuyerAuctionItemComponent ]
})
export class BuyerAuctionListPageModule {}
