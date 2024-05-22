<br><br><br><br>

<div align="center">
  <img src="https://github.com/hxxtae/bbbick/assets/79623316/7ba157a6-a23a-4723-9a48-72cca7dc0ae9" alt="메인이미지">
</div>

<br><br><br><br>

# BBBick · ![Gitea Last Commit (dev-branch)](https://img.shields.io/github/last-commit/hxxtae/bbbick/dev?color=blue)

온라인 북 커머스 플랫폼 입니다.   

<br>

| title | desc |
| --- | ---- |
| 배포 URL | https://bbbick.vercel.app |
| 프로젝트 진행 기간 | 2024.04 ~ 2024.05 (4주) |

|     | ID | PW |
| --- | ---- | --- |
| 구매자 | buyer@email.com | qwe123 |
| 판매자(관리자) | seller@email.com | qwe123 |

## 시작하기

```javascript
{
  npm: '10.2.3',
  node: '20.10.0'
}
```

```bash
git clone https://github.com/hxxtae/bbbick.git

cd bbbick

npm install

npm run dev
```

## 기술적 도전

- [React Dev Tools의 Profiler를 활용한 렌더링 성능 개선](https://dev.to/hxxtae/react-dev-toolsyi-profilerreul-hwalyonghan-rendeoring-seongneung-gaeseon-h1g)
- [Lighthouse를 활용한 Tree Shaking 및 빌드 경량화](https://dev.to/hxxtae/lighthousereul-hwalyonghan-tree-shaking-8ie)
- 주문 과정의 직접적인 URL 접근을 막기 위한 고민
- DOM outside 클릭 감지에 대한 고민

## 트러블슈팅
- [Named export 컴포넌트 lazy 호출 시 문제 개선](https://dev.to/hxxtae/named-export-keomponeonteu-dongjeog-import-hoculhagi-dnm)
- 라우터 페이지 이동 시 스크롤이 유지되는 현상 개선

## 주요 기능

### [신간 도서, 베스트 셀러, 추천 책 골라보기]

> 카테고리별로 책을 조회하여 원하는 유형의 책을 찾을 수 있습니다.

<img src="https://github.com/hxxtae/bbbick/assets/79623316/61c9e8e9-ca36-4d95-a02b-102a8998ad49" style="width: 700px">

### [`구매자용` 장바구니]

> 장바구니에 구매할 책 상품들을 보관할 수 있습니다.

<img src="https://github.com/hxxtae/bbbick/assets/79623316/b781e409-9cde-44f0-b3dc-046d17b9aea2" style="width: 700px">

### [`구매자용` 상품 주문 및 결제]

> 장바구니에 담은 책 상품들을 수량 및 금액 확인 후 바로 결제 프로세스를 진행합니다.

<img src="https://github.com/hxxtae/bbbick/assets/79623316/e272f0b4-96f4-4e61-a7e9-0cf6b079d10b" style="width: 700px">

### [`구매자용` 구매내역]

> 결제된 상품들을 언제든지 구매내역을 통해 확인할 수 있습니다.
> 결제를 취소하고 싶다면 주문 취소가 가능합니다.

<img src="https://github.com/hxxtae/bbbick/assets/79623316/ef099ffa-1044-44d9-ba9e-904951a60822" style="width: 700px">

### [`구매자용` 마이페이지]

> 구매자의 프로필, 닉네임, 비밀번호, 배송지 주소 등을 관리할 수 있습니다.

<img src="https://github.com/hxxtae/bbbick/assets/79623316/48a448a2-8200-4ab5-acfd-858447e01dbd" style="width: 700px">

### [`판매자용` 상품등록, 수정, 삭제]

> 판매자는 상품을 등록 및 수정, 삭제하여 책 상품을 관리할 수 있습니다.

(UI 수정중)

## 아키텍처

![bbbick 아키텍처](https://github.com/hxxtae/bbbick/assets/79623316/db0c61ef-15d7-4690-b37e-49627dfe52e9)

## 기술 스택

<!-- <img src="https://img.shields.io/badge/[기술명]-[배경색]?style=flat-square&logo=[아이콘명]&logoColor=[글자색]"/> -->

![vite](https://img.shields.io/badge/Vite-white?style=flat-square&logo=vite)
![React](https://img.shields.io/badge/React-white?style=flat-square&logo=react)
![typescript](https://img.shields.io/badge/typescript-white?style=flat-square&logo=typescript)   
![zustand](https://img.shields.io/badge/zustand-white?style=flat-square&logo=zustand)
![reactquery](https://img.shields.io/badge/reactquery-white?style=flat-square&logo=reactquery)
![styledcomponents](https://img.shields.io/badge/styledcomponents-white?style=flat-square&logo=styledcomponents)   
![firebase](https://img.shields.io/badge/firebase-white?style=flat-square&logo=firebase)
![jest](https://img.shields.io/badge/jest-red?style=flat-square&logo=jest)

## 디렉터리 구조

```
📦src
 ┣ 📂components
 ┣ 📂constants
 ┣ 📂hooks
 ┣ 📂interface
 ┣ 📂layout
 ┣ 📂router
 ┣ 📂service
 ┣ 📂store
 ┣ 📂styles
 ┣ 📂utils
 ┣ 📂pages
 ┃ ┣ 📂Best
 ┃ ┣ 📂Cart
 ┃ ┣ 📂History
 ┃ ┣ 📂Home
 ┃ ┣ 📂Like
 ┃ ┣ 📂Management
 ┃ ┣ 📂MyPage
 ┃ ┣ 📂Order
 ┃ ┣ 📂ProductDetail
 ┃ ┣ 📂Recent
 ┃ ┣ 📂Search
 ┃ ┣ 📂Signin
 ┗ ┗ 📂Signup
```
| 폴더명 | 설명 |
| --- | --- |
| `components` | 재사용 컴포넌트들을 모아놓은 폴더   |
| `constants` | 상수 값을 모아놓은 폴더   |
| `hooks` | 커스텀 훅 선언   |
| `interface` | 타입에 대한 정의를 모아놓은 폴더    |
| `layout` | 컴포넌트 페이지 레이아웃을 모아놓은 폴더   |
| `pages` | 컴포넌트 페이지를 모아놓은 폴더   |
| `router` | 페이지 라우터 컴포넌트들을 모아놓은 폴더 |
| `service` | 서버와 관련된 config 폴더 |
| `store` | 전역 상태를 관리하기 위한 폴더 |
| `styles` | 전역 스타일을 관리학 위한 폴더 |
| `utils` | 유틸 함수를 모아놓은 폴더 |
