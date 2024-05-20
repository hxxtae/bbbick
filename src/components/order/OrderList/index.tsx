import Divider from '@muiDom/Divider';
import List from '@muiDom/List';
import Typography from '@muiDom/Typography';
import { usePayment } from '@/hooks/common/usePayment';
import { numberFormat } from '@/utils/format';
import { IOrder } from '@/interface/order';
import * as S from './style';

interface OrderListProps {
  onPrev: () => void;
  onNext: () => void;
  order: IOrder;
}

export const OrderList = ({ onPrev, onNext, order }: OrderListProps) => {

  const initPaymentData = (order: IOrder) => {
    const { orderCarts, orderPrice } = order;
    const cartLength = orderCarts.length - 1;
    let orderName = '[도서] ';
    if (cartLength > 1) {
      orderName += `${orderCarts[0].name} 외 ${cartLength}개`
    } else {
      orderName += orderCarts[0].name
    }

    return {
      ...order,
      orderName,
      orderPrice,
    }
  }

  const { onPayment } = usePayment({...initPaymentData(order), onSuccess: onNext})
  
  return (
    <S.Wrapper>
      <S.Content>
      <List sx={{ width: '100%', maxWidth: 450, overflowY: "scroll"}}>
          {order.orderCarts.map((cart) => (
            <div key={cart.id}>
              <S.Item>
                <S.ItemText
                  primary={`[도서] ${cart.name}`}
                  secondary={
                    <>
                      <Typography component={"span"} sx={{ display: 'inline' }} variant="body2">
                        {`${cart.cartQuantity}개`}
                      </Typography>
                      {` ― ${numberFormat(cart.price * cart.cartQuantity)}원`}
                    </>
                  } />
              </S.Item>
              <Divider variant="middle" component="li" />
            </div>
          ))}
        </List>
        <S.TotalPrice>{ `결제금액: ${numberFormat(order.orderPrice)}` }</S.TotalPrice>
        <S.BtnGroup>
          <S.PrevBtn type="button" variant="outlined" onClick={onPrev}>이전</S.PrevBtn>
          <S.Submit type="submit" variant="contained" onClick={onPayment}>결제하기</S.Submit>
        </S.BtnGroup>
      </S.Content>
    </S.Wrapper>
  )
}