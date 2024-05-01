import { OrderByDirection } from 'firebase/firestore';
import * as S from './style';
import { OrderKinds } from '@/interface/products';

interface OrderByButtonProps {
  title: string;
  kind: OrderKinds;
  orderKind: OrderKinds;
  orderState: OrderByDirection;
  setOrderState: () => void;
  setOrderKind: (kind: OrderKinds) => void;
}

export const OrderByButton = ({ title, kind, orderKind, orderState, setOrderKind, setOrderState }: OrderByButtonProps) => {

  const toggleOrder = () => {
    setOrderState();
    setOrderKind(kind);
  }
  
  return (
    <S.OrderBy
      variant={kind === orderKind ? "contained" : "outlined"}
      onClick={toggleOrder}>
      {title} {orderState === "desc" ? "↓" : "↑"}
    </S.OrderBy>
  )
}