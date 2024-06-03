import { CategoryObjValue1, CategoryObjValue2, CategoryKey } from '@/interface/products';

// ------------------------
// create product form
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
  createAt: null,
  updateAt: null,
}

export const BOOK_CATEGORY_1: CategoryObjValue1 = {
  "010": "경제 경영",
  "020": "자기계발",
  "030": "에세이",
  "040": "IT모바일",
  "050": "소설/시/희곡",
}

export const BOOK_CATEGORY_2: { [key in CategoryKey]: CategoryObjValue2 } = {
  "010": {
    "B1": "경제",
    "B2": "투자/제테크",
  },
  "020": {
    "B1": "인간관계",
    "B2": "기획/정보/시간관리",
  },
  "030": {
    "B1": "삶의 자세와 지혜",
    "B2": "명상/치유 에세이",
  },
  "040": {
    "B1": "네트워크/해킹/보안",
    "B2": "프로그래밍 언어",
    "B3": "컴퓨터 공학",
    "B4": "웹사이트",
    "B5": "게임",
  },
  "050": {
    "B1": "영미소설",
    "B2": "중국소설",
  }
}
