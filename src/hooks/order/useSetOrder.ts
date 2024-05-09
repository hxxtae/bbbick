import { doc, writeBatch } from 'firebase/firestore';
import { useMutation } from 'react-query';

import { useAuthStore } from '@/store/useAuthStore';
import { FirebaseError } from 'firebase/app';
import { queryKeys } from '@/constants/keys';
import { IHistory, IOrder } from '@/interface/order';
import { db } from '@/service/firebaseApp';

export const useSetOrder = () => {
  const auth = useAuthStore((state) => state.auth);
  const setOrderStore = async (data: IOrder) => {
    if (!auth?.uid) {
      alert("로그인 후 다시 시도해주세요.");
      return;
    }
    if (!data || !data.orderId) {
      alert("주문정보가 존재하지 않습니다.");
      return;
    }
    if (!data.orderCarts?.length) {
      alert("주문정보가 존재하지 않습니다.");
      return;
    }
    
    const authId = auth.uid;
    const createOrders = data.orderCarts.map((cart) => ({
      ...cart,
      orderAddress: data.orderAddress,
      orderPrice: data.orderPrice,
      orderDate: data.orderDate,
      deliverState: true
    }) as IHistory) as IHistory[];
    
    try {

      const batch = writeBatch(db);
      createOrders.forEach((orderData, idx) => {
        const orderId = "ORDER" + "_" + idx.toString() + "_" + Date.now().toString();
        batch.set(doc(db, "order", authId, "authOrder", orderId), { orderId, ...orderData });
      });
      await batch.commit();
    } catch (error) {
      console.error("[Error]: Add Order DB Error: ", error)
    }
  }

  const { isLoading, mutate } = useMutation((data: IOrder) => setOrderStore(data), {
    mutationKey: queryKeys.order.all,
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  });

  return { addOrderLoading: isLoading, onAddOrder: mutate }
}