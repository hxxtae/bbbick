import { useLocation, useNavigate, useParams } from 'react-router-dom';
import FavoriteIcon from '@icons/Favorite';

import { useDetailFetchProduct } from '@/hooks/product/useDetailFetchProduct';
import { BOOK_CATEGORY_1, BOOK_CATEGORY_2 } from '@/constants/product';
import { useFetchCart } from '@/hooks/cart/useFetchCart';
import { ShinyCard } from '@/components/common/ShinyCard';
import { LineLoading } from '@/components/common/Loading';
import { NotFind } from '@/components/common/NotFind';
import { useSetCart } from '@/hooks/cart/useSetCart';
import { CategoryKey } from '@/interface/products';
import { numberFormat } from '@/utils/format';
import { Books } from '@/layout/Books';
import * as S from './style';

export const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const path = useParams()
  const { isProductLoading, isProductReLoading, product } = useDetailFetchProduct(state?.id || path?.bookid);
  const { isLoading, getCartItem } = useFetchCart();
  const { onAddCart } = useSetCart();

  const cartAddHandler = (nowPay: boolean = false) => {
    if (!state.id) return;
    if (isProductLoading || isProductReLoading || isLoading) {
      alert("잠시만 기다려주세요.");
      return;
    }
    if (!product || !product?.id) return;
    if (getCartItem(product.id)) {
      navigate("/cart");
    } else {
      onAddCart(product);
      nowPay && navigate("/cart");
    }
  }
  
  return (
    <S.Section sx={{ bgcolor: "bg.card" }}>
      <S.Block sx={{ bgcolor: "bg.main" }}>
        {(isLoading || isProductLoading || isProductReLoading) ? <LineLoading fixed={true} /> :
          product ?
            (<S.Wrapper>
              <S.Left>
                <ShinyCard>
                  <S.ImageBox>
                    <S.Image src={product.productImg_url[0].url} />
                  </S.ImageBox>
                </ShinyCard>
              </S.Left>

              <S.Right>
                <S.InfoBox>
                  <S.Title>[도서]&nbsp;{product.name}</S.Title>
                  <S.Row>
                    <S.Text>{product.writer}</S.Text>|
                    <S.Text>{product.publisher}</S.Text>|
                    <S.Text>{product.publishDate}</S.Text>
                  </S.Row>
                  <S.Row>
                    <S.Text sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <FavoriteIcon sx={{ fontSize: "16px", color: "error.dark" }} />
                      {product.like}
                    </S.Text>|
                    <S.Text>판매지수 {product.saleRate}</S.Text>
                  </S.Row>
                  <S.ChipBox sx={{ borderColor: "border.main" }}>
                    <S.Chipe variant="filled" label={product.writer} />
                    <S.Chipe variant="filled" label={BOOK_CATEGORY_1[product.category1]} />
                    <S.Chipe variant="filled" label={BOOK_CATEGORY_2[product.category1 as CategoryKey][product.category2]} />
                  </S.ChipBox>
                  <S.PriceWrapper>
                    <S.Text>정가</S.Text>
                    <S.Text>{numberFormat(product.regularPrice)}<S.Sub1>원</S.Sub1></S.Text>
                    <S.Text sx={{ fontWeight: "bold" }}>판매가</S.Text>
                    <S.Price sx={{ color: "error.light" }}>
                      {numberFormat(product.price)}<S.Sub1>원</S.Sub1><S.Sub2>{ `(${product.discountRate}% 할인)` }</S.Sub2>
                    </S.Price>
                  </S.PriceWrapper>
                </S.InfoBox>
                <S.ButtonGroup>
                  <S.AddCart variant="contained" onClick={() => cartAddHandler(false)}>{getCartItem(product.id) ? "장바구니 보기" : "장바구니 넣기"}</S.AddCart>
                  <S.BuyNow variant="contained" onClick={() => cartAddHandler(true)}>바로구매</S.BuyNow>
                </S.ButtonGroup>
              </S.Right>
            </S.Wrapper>) : <NotFind text="이미 만료된 상품입니다." height="400px" />}
          </S.Block>

          <S.Block sx={{ bgcolor: "bg.main", mt: "20px" }}>
            <S.Title>책 소개</S.Title>
            <S.Desc>{product?.desc}</S.Desc>
          </S.Block>

      <S.Block sx={{ bgcolor: "bg.main", mt: "20px" }}>
        <Books title="추천 도서" category="like" />
      </S.Block>
    </S.Section>
  )
}