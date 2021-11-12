import { authReducer } from '@cos-store/auth';
import { buyerAuctionsReducer } from '@cos-store/buyer-action';
import { ActionReducerMap } from '@ngrx/store';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  buyerAuctions: buyerAuctionsReducer
};
