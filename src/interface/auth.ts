import { AddressType } from './order';

export interface IAuth {
  uid: string | null;
  email: string;
  nickname: string | null;
  profileImg: string | null;
  authType: string | null;
  authAddress: AddressType | null;
}

export type AddressForm = AddressType;
