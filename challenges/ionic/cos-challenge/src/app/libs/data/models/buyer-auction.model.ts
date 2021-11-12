import { BuyerAuctionItemModel } from './buyer-auction.item.model';

export interface BuyerAuctionModel {
  items: BuyerAuctionItemModel[];
  page: number;
  total: number;
}
