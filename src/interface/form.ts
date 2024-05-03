export interface ISignin {
  email: string
  password: string
}

export interface ISignup {
  email: string
  password: string
  passwordConfirm: string
  nickname: string
  authType?: string | boolean
}

export interface IProductFiles {
  filename: string;
  url: string;
}

export interface IProductForm {
  name: string;
  price: number;
  regularPrice: number;
  discountRate: number;
  quantity: number;
  category1: string;
  category2: string;
  desc: string;
  writer: string;
  productImg_url: IProductFiles[];
  publisher: string | null;
  publishDate: string | null;
  pageNumber: string | null;
  weight: string | null;
  bookSize: string | null;
}

export type IFilePath = "images";

export interface CartQuantityForm {
  newQuantity: number;
}