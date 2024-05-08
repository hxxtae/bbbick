import { IOrder } from '@/interface/order';
import { FunctionComponent, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

type withOrderAccessProps<T> = FunctionComponent<T>;

export const withOrderAccess = <T extends {[key: string]: any}>(OrderComponent: withOrderAccessProps<T>) => {
  return (props: T) => {
    // URL을 통한 주문 및 결제 라우터 접근 시 제한
    const locate = useLocation();
    const navigate = useNavigate();
    const data = locate.state as IOrder;
    const newProps = {
      ...props,
      orderState: locate
    }
    
    useEffect(() => {
      if (data?.orderId) return;

      alert("잘못된 접근방식입니다.");
      navigate("/", { replace: true });
    }, [data, navigate])
    
    return <OrderComponent {...newProps} />
  }
}