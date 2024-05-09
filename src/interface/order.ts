import { CartType } from './cart';

export interface AddressType {
  addressName: string; // 배송지명
  address: string; // 주소
  addressDetail: string; // 상세주소
}

export interface IOrder {
  orderId: string;
  orderCarts: CartType[];
  orderPrice: number;
  orderAddress: AddressType | null;
  orderDate: string | null;
}

export type StepType = {
  no: string;
  name: string;
  desc: string;
}

export type IHistory = CartType & Omit<IOrder, "orderCarts" | "orderId">