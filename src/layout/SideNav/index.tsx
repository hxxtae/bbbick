import { Nav } from './NavGroup';
import * as S from './style';

export const SideNav = () => {
  return (
    <S.Wrapper sx={{ bgColor: "bg.card" }}>
      <Nav>
        <Nav.Head1 title="비비빅" />
        <Nav.Head2 title="구매하기" />
        <Nav.Item name="북스" path="/books" />
        <Nav.Item name="베스트셀러" path="/best" />
        <Nav.Item name="추천 북" path="/recommand" />
        <Nav.Item name="e-북" path="/e-books" />
      </Nav>
      <Nav>
        <Nav.Head2 title="관리하기" />
        <Nav.Item name="마이페이지" path="/mypage" />
        <Nav.Item name="구매 내역" path="/history" />
        <Nav.Item name="장바구니" path="/cart" />
      </Nav>
      <Nav>
        <Nav.Head2 title="관리자" />
        <Nav.Item name="상품 관리" path="/management" />
        <Nav.Item name="카테고리 관리" path="/category" />
      </Nav>
      <Nav>
        <Nav.Head2 title="부가기능" />
        <Nav.Item name="북 검색" path="/search" />
      </Nav>
    </S.Wrapper>
  )
}