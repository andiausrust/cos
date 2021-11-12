export interface AuthRequestModel {
  email: string;
  password: string;
}

export interface AuthResponseModel {
  token: string;
  authenticated: true;
  userId: string;
  internalUserId: string;
  internalUserUUID: string;
  type: number;
  privileges: any;
}
