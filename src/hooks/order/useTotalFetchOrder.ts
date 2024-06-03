import { collection, getDocs, query } from 'firebase/firestore/lite';
import { FirebaseError } from 'firebase/app';
import { useQuery } from 'react-query';

import { useAuthStore } from '@/store/useAuthStore';
import { IHistory } from '@/interface/order';
import { db } from '@/service/firebaseApp';
import { queryKeys } from '@/constants/keys';

export const useTotalFetchOrder = () => {
  const auth = useAuthStore((state) => state.auth);

  const getOrderStore = async () => {
    if (!auth || !auth.uid) return;

    const q = query(collection(db, "order", auth?.uid ?? '', "authOrder"));
    try {
      const querySnapshot = await getDocs(q);
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      } as IHistory));
      return posts;
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[ERROR] Order Fetch (Count) Error ", error.message);
      } else {
        console.error("[ERROR] Order Fetch (Count) Error ", error);
      }
    }
  }

  const { data, isLoading, isFetching } = useQuery({
    enabled: !!auth?.uid,
    queryKey: queryKeys.order.all,
    queryFn: getOrderStore,
    staleTime: 1000 * 60 * 20, // 20분
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const getTotalCount = () => {
    return data?.length ?? 0
  }

  return {
    orderDatas: data,
    isLoading: isLoading || isFetching,
    getTotalCount
  }
}