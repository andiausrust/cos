import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { BuyerAuctionModel, BuyerAuctionService } from '../../data';
import { BuyerAuctionActionTypes } from './buyer-auction.types';

@Injectable()
export class BuyerAuctionEffects {

  /**
   * request buyer auth actions from API
   * save it into store
   */
  requestBuyerAuctions = createEffect(() =>
    this.actions$
      .pipe(
        ofType(BuyerAuctionActionTypes.requestBuyerAuctions),
        concatMap(() => this.buyerAuctions.getBuyerAuctions()
          .pipe(
            map((res: BuyerAuctionModel) =>
              BuyerAuctionActionTypes.requestBuyerAuctionsSuccess({
                buyerAuctions: res
              })),
            catchError(err => of(BuyerAuctionActionTypes.requestBuyerAuctionsError()))
          )
        )
      )
  );

  /**
   * on request auctions error show error message
   * todo deal with error
   * do not dispatch action
   */
  requestBuyerAuctionsError = createEffect(() =>
    this.actions$.pipe(
      ofType(BuyerAuctionActionTypes.requestBuyerAuctionsError),
      tap(async () => {
        const alert = await this.alertCtrl.create({
          header: 'Cannot fetch auction data',
          message: 'Please check if you are online',
          buttons: [ 'OK' ]
        });
        await alert.present();
      })
    ), { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    private buyerAuctions: BuyerAuctionService,
    private alertCtrl: AlertController
  ) {}
}
