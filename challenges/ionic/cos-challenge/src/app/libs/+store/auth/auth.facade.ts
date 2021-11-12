import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthRequestModel } from '../../data';
import { AuthActionTypes } from './auth-types';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  constructor(
    private store: Store
  ) {}

  login(user: AuthRequestModel) {
    this.store.dispatch(AuthActionTypes.login({ user }));
  }


}
