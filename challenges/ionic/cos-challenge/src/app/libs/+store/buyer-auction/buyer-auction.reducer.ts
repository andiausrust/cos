import { createReducer, on } from '@ngrx/store';
import { BuyerAuctionModel } from '../../data';
import { BuyerAuctionActionTypes } from './buyer-auction.types';

export interface BuyerAuctionState {
  auctions: BuyerAuctionModel;
}

export const initialBuyerAuctionsState: BuyerAuctionState = {
  auctions: undefined
};

export const buyerAuctionsReducer = createReducer(
  initialBuyerAuctionsState,

  on(BuyerAuctionActionTypes.requestBuyerAuctionsSuccess, (_, action): BuyerAuctionState => (
    {
      auctions: action.buyerAuctions
    }
  ))
);
