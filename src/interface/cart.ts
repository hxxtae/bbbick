export interface CartType {
  id: string;
  name: string;
  price: number;
  regularPrice: number;
  discountRate: number;
  quantity: number;
  writer: string;
  productImg_url: string;
  publisher: string | null;
  publishDate: string | null;
  like: number | null;
  saleRate: number | null;
}

