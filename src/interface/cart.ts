export interface CartType {
  id: string;
  name: string;
  price: number;
  regularPrice: number;
  discountRate: number;
  quantity: number;
  cartQuantity: number;
  writer: string;
  productImg_url: string;
  publisher: string | null;
  publishDate: string | null;
  like: number | null;
  saleRate: number | null;
}

export interface ICart {
  authCart: CartType[];
}