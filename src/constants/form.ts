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
  createAt: '',
  updateAt: '',
}

// ------------------------
// dumy data of book category
// ------------------------
export const BOOK_CATEGORY = [
  {
    KEY: '010',
    VALUE: '경제 경영',
    MIDDLE: [
      {
        KEY: 'B1',
        VALUE: '경제',
      },
      {
        KEY: 'B2',
        VALUE: '투자/제테크',
      }
    ]
  },
  {
    KEY: '020',
    VALUE: '자기계발',  
    MIDDLE: [
      {
        KEY: 'B1',
        VALUE: '인간관계'
      },
      {
        KEY: 'B2',
        VALUE: '기획/정보/시간관리'
      }
    ]
  },
  {
    KEY: '030',
    VALUE: '에세이',
    MIDDLE: [
      {
        KEY: 'B1',
        VALUE: '삶의 자세와 지혜'
      },
      {
        KEY: 'B2',
        VALUE: '명상/치유 에세이'
      }
    ]
  },
  {
    KEY: '040',
    VALUE: 'IT모바일',
    MIDDLE: [
      {
        KEY: 'B1',
        VALUE: '네트워크/해킹/보안'
      },
      {
        KEY: 'B2',
        VALUE: '프로그래밍 언어'
      },
      {
        KEY: 'B3',
        VALUE: '컴퓨터 공학'
      },
      {
        KEY: 'B4',
        VALUE: '웹사이트'
      },
      {
        KEY: 'B5',
        VALUE: '게임'
      }
    ]
  },
];

