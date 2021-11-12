import { createReducer } from '@ngrx/store';
import { AuthRequestModel } from '../../data';

export interface AuthState {
  user: AuthRequestModel;
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,
);
