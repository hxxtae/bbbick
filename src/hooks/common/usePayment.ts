import { useNavigate } from 'react-router-dom';

import { loadTossPayments } from '@tosspayments/payment-sdk'
import { useAuthStore } from '@/store/useAuthStore';
import { useSetOrder } from '../order/useSetOrder';
import { useSetCart } from '../cart/useSetCart';
import { IOrder } from '@/interface/order';

interface usePaymentProps extends IOrder {  
  orderName: string;
  onSuccess: () => void;
}

export const usePayment = ({ onSuccess, ...order }: usePaymentProps) => {
  const auth = useAuthStore((state) => state.auth);
  const navigate = useNavigate();
  const { onAddOrder } = useSetOrder();
  const { onRemoveCart } = useSetCart();

  const onPayment = async () => {
    const clientKey = import.meta.env.VITE_TOSS_CLIENT_KEY;
    const { orderId, orderName, orderPrice } = order;
    if (auth?.uid !== orderId) {
      alert("잠시후 다시 시도해주세요.");
      navigate("/cart", { replace: true, state: {} });
      return;
    }

    loadTossPayments(clientKey).then(tossPayments => {
      tossPayments.requestPayment('카드', {
        amount: orderPrice,
        orderId: orderId,
        orderName: orderName,
        customerEmail: auth.email,
        customerName: auth.nickname || auth.email,
      }).then(() => {
        onAddOrder(order);
        onRemoveCart();
        onSuccess();
      }).catch(error => {
        switch (error.code) {
          case 'FORBIDDEN_REQUEST': {
            console.error("허용되지 않은 요청입니다.")
            break;
          }
          case 'EXCEED_MAX_VALID_HOURS': {
            console.error("가상 계좌의 최대 유효시간을 초과했습니다.")
            break;
          }
          case 'EXCEED_MAX_DUE_DATE': {
            console.error("가상 계좌의 최대 유효만료 기간을 초과했습니다.")
            break;
          }
          case 'DUPLICATED_ORDER_ID': {
            console.error("이미 승인 및 취소가 진행된 중복된 주문번호 입니다. 다른 주문번호로 진행해주세요.")
            break;
          }
          case 'BELOW_ZERO_AMOUNT': {
            console.error("금액은 0보다 커야 합니다.")
            break;
          }
          case 'USER_CANCEL': {
            console.error("취소되었습니다")
            break;
          }
          case 'INSUFFICIENT_PRIVILEGES': {
            console.error("요청에 대한 권한이 불충분합니다. 토스페이먼츠에 문의해주세요.")
            break;
          }
        }
      });
    })
  }

  return { onPayment }
}

/*
  [Reference]

  - NOTE: 결제 SDK docs
  - https://docs.tosspayments.com/reference/js-sdk#%EC%B4%88%EA%B8%B0%ED%99%94-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0

  - NOTE: 에러처리 목록 확인
  - https://docs.tosspayments.com/reference/error-codes#failurl로-전달되는-에러
*/