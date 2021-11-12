import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActionTypes } from '../auth/auth-types';
import { selectBuyerAuctions } from './buyer-auction.selectors';
import { BuyerAuctionActionTypes } from './buyer-auction.types';

@Injectable({
  providedIn: 'root'
})
export class BuyerAuctionFacade {

  buyerAuctionItems$ = this.store.select(selectBuyerAuctions);

  constructor(private store: Store) {}

  requestBuyerAuctions(): void {
    this.store.dispatch(BuyerAuctionActionTypes.requestBuyerAuctions());
  }

  logout(): void {
    this.store.dispatch(AuthActionTypes.logout());
  }

}
