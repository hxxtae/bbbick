import { collection, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { useInfiniteQuery } from 'react-query';

import { BooksKinds, ProductType } from '@/interface/products';
import { queryKeys } from '@/constants/keys';
import { db } from '@/service/firebaseApp';

const firstLimit = 10;
const nextLimit = 5;

export const usePageFetchProduct = (category: BooksKinds) => {

  const getOrder = () => {
    switch (category) {
      case "recent": {
        return orderBy("publishDate", "desc");
      }
      case "best": {
        return orderBy("saleRate", "desc");
      }
      case "like": {
        return orderBy("like", "desc");
      }
      default: {
        return orderBy("publishDate");
      }
    }
  }

  const getSnapShot = async (pageParam: any) => {
    const setQuery = !pageParam ?
      query(
        collection(db, "products"),
        getOrder(),
        limit(firstLimit)) : 
      query(
        collection(db, "products"),
        getOrder(),
        startAfter(pageParam),
        limit(nextLimit))
    
    const cursor = await getDocs(setQuery);
    const posts = cursor.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    } as ProductType))

    return { cursor, posts };
  }

  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [...queryKeys.product.categoryScroll(category, nextLimit)],
    queryFn: ({ pageParam }) => getSnapShot(pageParam),
    getNextPageParam: ({cursor}) => {
      return cursor.size < 1 ? null : cursor.docs[cursor.docs.length - 1]
    },
    select: (data) => ({
      pageParams: data.pageParams,
      pages: data.pages
    }),
    staleTime: 1000 * 60 * 5, // 5분
    cacheTime: 1000 * 60 * 20, // 20분
    refetchOnWindowFocus: false,
    retry: false,
  })

  return {
    products: data?.pages.flatMap((item) => item.posts),
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  }
}

// ref: https://velog.io/@hamham/useInfiniteQuery%EB%A1%9C-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
// ref: https://engschool.tistory.com/76