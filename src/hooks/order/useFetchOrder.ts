import { queryKeys } from '@/constants/keys';
import { IHistory } from '@/interface/order';
import { db } from '@/service/firebaseApp';
import { useAuthStore } from '@/store/useAuthStore'
import { FirebaseError } from 'firebase/app';
import { collection, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { useInfiniteQuery } from 'react-query';

const firstLimit = 5;
const nextLimit = 5;

export const useFetchOrder = () => {
  const auth = useAuthStore((state) => state.auth);

  const getOrder = () => {
    return orderBy('orderDate', 'desc');
  }

  const getOrderStorage = async (pageParam: any) => {
    const setQuery = !pageParam ?
      query(
        collection(db, "order", auth?.uid ?? '', "authOrder"),
        getOrder(),
        limit(firstLimit)) :
      query(
        collection(db, "order", auth?.uid ?? '', "authOrder"),
        getOrder(),
        startAfter(pageParam),
        limit(nextLimit));
    
    const cursor = await getDocs(setQuery);
    const posts = cursor.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    } as IHistory))

    return { cursor, posts };
  }

  const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: queryKeys.order.all,
    queryFn: ({ pageParam }) => getOrderStorage(pageParam),
    getNextPageParam: ({ cursor }) => {
      return cursor.size < 1 ? null : cursor.docs[cursor.docs.length - 1]
    },
    enabled: !!auth?.uid,
    select: (data) => ({
      pageParams: data.pageParams,
      pages: data.pages
    }),
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 20, // 20분
    refetchOnWindowFocus: false,
    retry: false,
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error("[ERROR] Order Fetch Error ", error.message);
      } else {
        console.error("[ERROR] Order Fetch Error ", error);
      }
    },
  })

  return {
    historys: data?.pages.flatMap((item) => item.posts),
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading
  }
}
