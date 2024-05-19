import { Link, useNavigate } from 'react-router-dom';

import { numberFormat } from '@/utils/format';
import { CartType } from '@/interface/cart';
import { IOrder } from '@/interface/order';
import { IAuth } from '@/interface/auth';
import * as S from './style';

interface CartPaymentProps {
  authData: IAuth | null;
  carts?: CartType[];
  totalPrice: number;
  totalRegular: number;
  totalQuantity: number;
}

export const CartPayment = ({ authData, carts = [], totalPrice, totalRegular, totalQuantity }: CartPaymentProps) => {
  const navigate = useNavigate();
  const onClickOrder = () => {
    if (!authData?.uid) {
      alert("로그인 이후 이용해주세요.");
      return;
    }
    if (carts.length < 1) return;
    
    navigate("/cart/order", {
      state: {
        orderId: authData.uid,
        orderCarts: [...carts],
        orderPrice: totalPrice,
        orderAddress: {...authData.authAddress},
        orderDate: null
      } as IOrder
    })
  }
  return (
    <>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <S.Title sx={{ fontWeight: 600 }} >총 주문 금액</S.Title>
        <S.InfoWrapper >
          <S.InfoContent>
            <S.InfoBoxTop>
              <S.InfoTitle>총 상품금액</S.InfoTitle>
              <S.Total>{numberFormat(totalPrice)}원</S.Total>
            </S.InfoBoxTop>
            <S.InfoBoxBottom>
              <S.InfoText>정가: {numberFormat(totalRegular)}원에서</S.InfoText>
              <S.InfoText>{numberFormat(totalRegular - totalPrice)}원 즉시할인</S.InfoText>
              <S.InfoText>{carts?.length}종&nbsp;({totalQuantity}개)</S.InfoText>
            </S.InfoBoxBottom>
          </S.InfoContent>
          <S.InfoContent>
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
        <S.NextButton variant="contained" onClick={onClickOrder}>
          주문하기
        </S.NextButton>
      </S.ButtonWrapper>
    </>
  )
}