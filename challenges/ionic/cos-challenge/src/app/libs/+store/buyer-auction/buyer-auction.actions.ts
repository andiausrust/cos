import { createAction, props } from '@ngrx/store';
import { BuyerAuctionModel } from '../../data';

export const requestBuyerAuctions = createAction(
  '[BuyerAuctionModel Page] Request Buyer Auctions'
);

export const requestBuyerAuctionsSuccess = createAction(
  '[Api] Request Buyer Auctions Success',
  props<{ buyerAuctions: BuyerAuctionModel }>()
);

export const requestBuyerAuctionsError = createAction(
  '[Api] Request Buyer Auctions Error'
);
