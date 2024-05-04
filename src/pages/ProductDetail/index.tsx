import { useLocation, useNavigate } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';

import { BOOK_CATEGORY_1, BOOK_CATEGORY_2 } from '@/constants/product';
import { CategoryKey } from '@/interface/products';
import { useFetchCart } from '@/hooks/cart/useFetchCart';
import { useSetCart } from '@/hooks/cart/useSetCart';
import { numberFormat } from '@/utils/format';
import { Books } from '@/layout/Books';
import * as S from './style';

export const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { onAddCart } = useSetCart();
  const { getCartItem } = useFetchCart();

  const cartAddHandler = (nowPay: boolean = false) => {
    if (getCartItem(state.id)) {
      navigate("/cart");
      return;
    }
    onAddCart(state)
    nowPay && navigate("/cart");
  }

  return (
    <S.Section sx={{ bgcolor: "bg.card" }}>
      <S.Block sx={{ bgcolor: "bg.main" }}>
        <S.Wrapper>
          <S.Left>
            <S.ImageBox>
              <S.Image src={state.productImg_url[0].url} />
            </S.ImageBox>
          </S.Left>

          <S.Right>
            <S.InfoBox>
              <S.Title>[도서] {state.name}</S.Title>
              <S.Row>
                <S.Text>{state.writer}</S.Text>|
                <S.Text>{state.publisher}</S.Text>|
                <S.Text>{state.publishDate}</S.Text>
              </S.Row>
              <S.Row>
                <S.Text sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Favorite sx={{ fontSize: "16px", color: "error.dark" }} />
                  {state.like}
                </S.Text>|
                <S.Text>판매지수 {state.saleRate}</S.Text>
              </S.Row>
              <S.ChipBox sx={{ borderColor: "border.main" }}>
                <S.Chipe variant="filled" label={state.writer} />
                <S.Chipe variant="filled" label={BOOK_CATEGORY_1[state.category1]} />
                <S.Chipe variant="filled" label={BOOK_CATEGORY_2[state.category1 as CategoryKey][state.category2]} />
              </S.ChipBox>
              <S.PriceWrapper>
                <S.Text>정가</S.Text>
                <S.Text>{numberFormat(state.regularPrice)}<S.Sub1>원</S.Sub1></S.Text>
                <S.Text sx={{ fontWeight: "bold" }}>판매가</S.Text>
                <S.Price sx={{ color: "error.light" }}>
                  {numberFormat(state.price)}<S.Sub1>원</S.Sub1><S.Sub2>{ `(${state.discountRate}% 할인)` }</S.Sub2>
                </S.Price>
              </S.PriceWrapper>
            </S.InfoBox>
            <S.ButtonGroup>
              <S.AddCart variant="contained" onClick={() => cartAddHandler(false)}> {getCartItem(state.id) ? "장바구니 보기" : "장바구니 넣기"} </S.AddCart>
              <S.BuyNow variant="contained" onClick={() => cartAddHandler(true)}> 바로구매 </S.BuyNow>
            </S.ButtonGroup>
          </S.Right>
        </S.Wrapper>
      </S.Block>

      <S.Block sx={{ bgcolor: "bg.main", mt: "20px" }}>
        <S.Title>책 소개</S.Title>
        <S.Desc>{state.desc}</S.Desc>
      </S.Block>

      <S.Block sx={{ bgcolor: "bg.main", mt: "20px" }}>
        <Books title="추천 도서" category="like" />
      </S.Block>
    </S.Section>
  )
}