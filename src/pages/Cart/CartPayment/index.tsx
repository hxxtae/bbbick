import { CartType } from '@/interface/cart';
import * as S from './style';
import { numberFormat } from '@/utils/format';
import { Link } from 'react-router-dom';

interface CartPaymentProps {
  authId: string | null;
  carts?: CartType[];
  totalPrice: number;
  totalRegular: number;
  totalQuantity: number;
}

export const CartPayment = ({ authId, carts, totalPrice, totalRegular, totalQuantity }: CartPaymentProps) => {
  return (
    <>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <S.Title sx={{ fontWeight: 600 }} >총 주문 금액</S.Title>
        <S.InfoWrapper >
          <S.InfoContent sx={{ bgcolor: "bg.card" }}>
            <S.InfoBoxTop>
              <S.InfoTitle>총 상품금액</S.InfoTitle>
              <S.Total>{numberFormat(totalPrice)}원</S.Total>
            </S.InfoBoxTop>
            <S.InfoBoxBottom>
              <S.InfoText>정가: {numberFormat(totalRegular)}원에서</S.InfoText>
              <S.InfoText>{numberFormat(totalRegular - totalPrice)}원 즉시할인</S.InfoText>
              <S.InfoText>{carts?.length}종 ({totalQuantity}개)</S.InfoText>
            </S.InfoBoxBottom>
          </S.InfoContent>
          <S.InfoContent sx={{ bgcolor: "bg.card" }}>
            <S.InfoBoxTop sx={{ alignItems: "flex-end"}}>
              <S.InfoTitle sx={{ color: "error.main"}}>최종 결제금액</S.InfoTitle>
              <S.Total sx={{ color: "error.main"}}>{numberFormat(totalPrice)}원</S.Total>
            </S.InfoBoxTop>
          </S.InfoContent>
        </S.InfoWrapper>
      </S.Block>
      <S.ButtonWrapper>
        <Link to={"/"}>
          <S.PrevButton variant="outlined">쇼핑계속하기</S.PrevButton>
        </Link>
        <Link to={`/cart/order/${authId}`}>
          <S.NextButton variant="contained">주문하기</S.NextButton>
        </Link>
      </S.ButtonWrapper>
    </>
  )
}