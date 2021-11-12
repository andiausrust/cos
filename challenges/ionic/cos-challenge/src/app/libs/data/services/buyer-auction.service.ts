import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BuyerAuctionModel } from '../models/buyer-auction.model';

@Injectable({
  providedIn: 'root',
})
export class BuyerAuctionService {

  baseUrl = environment.v2BaseUrl;

  constructor(private http: HttpClient) {}

  getBuyerAuctions(): Observable<BuyerAuctionModel> {
    return this.http.get<BuyerAuctionModel>(`${ this.baseUrl }/auction/buyer/`, {
      params: {
        count: false
      }
    });
  }

}
