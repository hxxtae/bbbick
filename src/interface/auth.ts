import { AddressType } from './order';

export interface AuthAddition {
  authType: boolean;
  authAddress: AddressType | null;
}

export interface IAuth extends AuthAddition {
  uid: string | null;
  email: string;
  nickname: string | null;
  profileImg: string | null;
}

export type AddressForm = AddressType;

export type SetAuthType = {
  nickname?: string;
  password?: string;
  profileImg?: File;
}
