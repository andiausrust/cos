import { Component, Input } from '@angular/core';
import { BuyerItemDisplayModel } from 'src/app/libs/data/models/buyer-item-display.model';

@Component({
  selector: 'cos-buyer-auction-item',
  templateUrl: './buyer-auction-item.component.html',
  styleUrls: [ './buyer-auction-item.component.scss' ],
})
export class BuyerAuctionItemComponent {
  @Input() buyerAuctionItems: BuyerItemDisplayModel[] = [];

}
