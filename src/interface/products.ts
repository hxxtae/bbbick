import { IProductForm } from './form';

export type BooksKinds = 'recent' | 'best' | 'like' | 'createAt';
export type OrderKinds = 'date' | 'price';
export type CategoryKey = "010" | "020" | "030" | "040" | "050";
export type CategoryValue1 = "경제 경영" | "자기계발" | "에세이" | "IT모바일" | "소설/시/희곡";
export type CategoryValue2 =
  "경제" | "투자/제테크" |
  "인간관계" | "기획/정보/시간관리" |
  "삶의 자세와 지혜" | "명상/치유 에세이" |
  "네트워크/해킹/보안" | "프로그래밍 언어" | "컴퓨터 공학" | "웹사이트" | "게임" |
  "영미소설" | "중국소설";

export interface ProductType extends IProductForm {
  id: string;
  like: number | null;
  saleRate: number | null;
  createAt: string | null;
  updateAt: string | null;
}

export interface CategoryObjValue1 {
  [key: string]: CategoryValue1;
}

export interface CategoryObjValue2 {
  [key: string]: CategoryValue2;
}

export type CategoryTotalKey = CategoryKey | "000";
