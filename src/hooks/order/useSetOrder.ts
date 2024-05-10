import { doc, updateDoc, writeBatch } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';

import { useAuthStore } from '@/store/useAuthStore';
import { FirebaseError } from 'firebase/app';
import { queryKeys } from '@/constants/keys';
import { IHistory, IOrder } from '@/interface/order';
import { db } from '@/service/firebaseApp';

export const useSetOrder = () => {
  const auth = useAuthStore((state) => state.auth);
  const queryClient = useQueryClient();

  // -------------------
  // 주문등록 API
  // -------------------
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
      orderId: data.orderId,
      orderAddress: data.orderAddress,
      orderPrice: data.orderPrice,
      orderDate: data.orderDate,
      deliverState: true
    }) as IHistory) as IHistory[];
    
    try {
      const batch = writeBatch(db);
      createOrders.forEach((orderData, idx) => {
        const orderId = "ORD"+"_"+idx.toString()+"_"+Date.now().toString();
        batch.set(doc(db, "order", authId, "authOrder", orderId), { ...orderData, orderId });
      });
      await batch.commit();
    } catch (error) {
      console.error("[Error]: Add Order Error: ", error);
    }
  }

  // -------------------
  // 주문취소 API
  // -------------------
  const setCancleOrderState = async (orderId: string) => {
    if (!auth?.uid) {
      alert("로그인 후 다시 시도해주세요.");
      return;
    }

    try {
      const orderRef = doc(db, "order", auth.uid, "authOrder", orderId);
      await updateDoc(orderRef, {
        deliverState: false
      });
    } catch (error) {
      console.error("[Error]: Cancel Order Error: ", error);
    }
  }

  const { isLoading: addOrderLoading, mutate: onAddOrder } = useMutation((data: IOrder) => setOrderStore(data), {
    mutationKey: queryKeys.order.all,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.order.all);
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error("[Error]: Add Order Error: ", error.message);
      } else {
        console.error("[Error]: Add Order Error: ", error);
      }
    }
  });

  const { isLoading: cancelOrderLoading, mutate } = useMutation((orderId: string) => setCancleOrderState(orderId), {
    mutationKey: queryKeys.order.all,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.order.all);
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error("[Error]: Cancel Order Error: ", error.message);
      } else {
        console.error("[Error]: Cancel Order Error: ", error);
      }
    }
  })

  const onCancelOrder = (orderId: string) => {
    if (cancelOrderLoading) return;
    if (confirm("상품주문을 취소하시겠습니까?")) {
      mutate(orderId);
    }
  }

  return { addOrderLoading, onAddOrder, cancelOrderLoading, onCancelOrder }
}