// ------------------------
// create product form

import { Category1Type, Category2Type, CategoryKey } from '@/interface/products';

// ------------------------
export const INIT_PRODUCT_DATA = {
  name: '',
  price: 0,
  regularPrice: 0,
  discountRate: 0,
  quantity: 0,
  category1: '',
  category2: '',
  desc: '',
  writer: '',
  productImg_url: [],
  publisher: null,
  publishDate: null,
  pageNumber: null,
  weight: null,
  bookSize: null,
  createAt: '',
  updateAt: '',
}

export const BOOK_CATEGORY_1: Category1Type = {
  "010": "경제 경영",
  "020": "자기계발",
  "030": "에세이",
  "040": "IT모바일",
}

export const BOOK_CATEGORY_2: { [key in CategoryKey]: Category2Type } = {
  "010": {
    "A1": "경제",
    "A2": "투자/제테크",
  },
  "020": {
    "B1": "인간관계",
    "B2": "기획/정보/시간관리",
  },
  "030": {
    "C1": "삶의 자세와 지혜",
    "C2": "명상/치유 에세이",
  },
  "040": {
    "D1": "네트워크/해킹/보안",
    "D2": "프로그래밍 언어",
    "D3": "컴퓨터 공학",
    "D4": "웹사이트",
    "D5": "게임",
  }
}
