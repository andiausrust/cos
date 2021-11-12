import { createAction, props } from '@ngrx/store';
import { AuthRequestModel } from '../../data';

export const login = createAction(
  '[Login Page] Login User',
  props<{ user: AuthRequestModel }>()
);

export const loginSuccess = createAction(
  '[Api] User Login Success'
);

export const loginError = createAction(
  '[Api] Login User Error'
);

export const logout = createAction(
  '[Top Menu] Logout'
);
