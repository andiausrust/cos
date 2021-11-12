import { Component, OnInit } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { BuyerAuctionFacade } from '../../libs/+store/buyer-auction/buyer-auction.facade';
import { BuyerItemDisplayModel } from '../../libs/data/models/buyer-item-display.model';

@Component({
  selector: 'cos-buyer-auction-list',
  templateUrl: './buyer-auction-list.page.html',
  styleUrls: [ './buyer-auction-list.page.scss' ],
})
export class BuyerAuctionListPage implements OnInit {

  endSubscription = new Subject();
  buyerAuctionItems$: Observable<BuyerItemDisplayModel[]>;

  constructor(private buyerAuctionsFacade: BuyerAuctionFacade) { }

  ionViewWillEnter() {
    timer(0, 20000)
      .pipe(
        tap(() => this.buyerAuctionsFacade.requestBuyerAuctions()),
        takeUntil(this.endSubscription)
      )
      .subscribe();
  }

  ionViewDidLeave() {
    this.endSubscription.next();
  }

  onExit() {
    this.buyerAuctionsFacade.logout();
  }

  ngOnInit(): void {
    this.buyerAuctionItems$ = this.buyerAuctionsFacade.buyerAuctionItems$;
  }
}
