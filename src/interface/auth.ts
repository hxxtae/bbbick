import { CartType } from './cart';

export interface IAuth {
  uid: string | null;
  email: string;
  nickname: string | null;
  profileImg: string | null;
  authType: string | null;
  authCart: CartType[] | [];
}
