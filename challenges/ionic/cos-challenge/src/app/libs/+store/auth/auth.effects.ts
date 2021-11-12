import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthResponseModel, AuthService, JwtInterceptor } from '../../data';
import { AuthActionTypes } from './auth-types';

@Injectable()
export class AuthEffects {

  /**
   * login to get jwt token
   * on success save token and userId from response in jwt service
   * on error show error message stay on login page
   */
  login$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActionTypes.login),
        switchMap(auth =>
          this.authService.login(auth.user)
            .pipe(
              tap((res: AuthResponseModel) => JwtInterceptor.setHeaderValues(res.token, res.userId)),
              map((res: AuthResponseModel) => AuthActionTypes.loginSuccess()
              ),
              catchError((err: any) => of(AuthActionTypes.loginError()))
            )
        )
      )
  );

  /**
   * on successful login route to buyer auction page
   * do not dispatch action
   */
  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.loginSuccess),
      tap(async () => this.router.navigateByUrl('buyer-auction-list'))
    ), { dispatch: false }
  );

  /**
   * on logout reset authToken and userId
   * redirect to login page
   * do not dispatch action
   */
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.logout),
      tap(() => JwtInterceptor.resetHeaderValues()),
      tap(() => this.router.navigateByUrl(''))
    ), { dispatch: false }
  );


  /**
   * on login error show error message
   * todo deal with error
   * do not dispatch action
   */
  loginError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.loginError),
      tap(async () => {
        const alert = await this.alertCtrl.create({
          header: 'Login Failure',
          message: 'Please check your credentials',
          buttons: [ 'OK' ]
        });
        await alert.present();
      })
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}
}
