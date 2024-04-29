import { IProductForm } from './form';

export type CategoryKey = "010" | "020" | "030" | "040";
export type CategoryKind1 = "경제 경영" | "자기계발" | "에세이" | "IT모바일";
export type CategoryKind2 =
  "경제" | "투자/제테크" |
  "인간관계" | "기획/정보/시간관리" |
  "삶의 자세와 지혜" | "명상/치유 에세이" |
  "네트워크/해킹/보안" | "프로그래밍 언어" | "컴퓨터 공학" | "웹사이트" | "게임";

export interface ProductType extends IProductForm {
  id: string;
}

export interface Category1Type {
  [key: string]: CategoryKind1;
}

export interface Category2Type {
  [key: string]: CategoryKind2;
}
