import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BuyerAuctionItemModel } from '../../data/models/buyer-auction.item.model';
import { BuyerItemDisplayModel } from '../../data/models/buyer-item-display.model';
import { BuyerAuctionState } from './buyer-auction.reducer';

export const selectBuyerAuctionState = createFeatureSelector<BuyerAuctionState>('buyerAuctions');

export const selectBuyerAuctions = createSelector(
  selectBuyerAuctionState,
  buyerAuctionState =>
    buyerAuctionState.auctions?.items ?
    buyerAuctionState.auctions.items.map((auction: BuyerAuctionItemModel) =>
      (
        {
          img: auction.associatedVehicle.vehicleImages[0].url,
          ez: auction.associatedVehicle.ez,
          mileage: auction.associatedVehicle.mileageInKm,
          fuelType: auction.associatedVehicle.fuelType,
          transmission: auction.associatedVehicle.transmission,
          currentHighestBidValue: auction.currentHighestBidValue,
          remainingTime: auction.remainingTimeInSeconds,
          amIHighestBidder: auction.amIHighestBidder
        } as BuyerItemDisplayModel
      )) :
      []
);
