import { collection, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore';
import { useInfiniteQuery } from 'react-query';
import { useCallback } from 'react';

import { BooksKinds, CategoryKey, ProductType } from '@/interface/products';
import { queryKeys } from '@/constants/keys';
import { db } from '@/service/firebaseApp';

const firstLimit = 10;
const nextLimit = 5;

interface usePageFetchProductProps {
  category: BooksKinds;
  category1?: CategoryKey | "000";
  category2?: string;
}

export const usePageFetchProduct = ({ category, category1, category2 }: usePageFetchProductProps) => {
  
  const getQuery = useCallback(() => {
    const indexName1 = "category1";
    const indexName2 = "category2";
    if (category1 === "000") return [where(indexName1, "!=", '')];
    if (category1 && !category2) return [where(indexName1, "==", category1)];
    if (category1 && category2) return [where(indexName1, "==", category1), where(indexName2, "==", category2)];
    return [where(indexName1, "!=", '')];
  }, [category1, category2]);

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
        ...getQuery(),
        getOrder(),
        limit(firstLimit)) : 
      query(
        collection(db, "products"),
        ...getQuery(),
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

  const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading, refetch, isRefetching } = useInfiniteQuery({
    queryKey: [...queryKeys.product.categorys(category, category1 ?? 'all', category2 ?? 'all')],
    queryFn: ({ pageParam }) => getSnapShot(pageParam),
    getNextPageParam: ({cursor}) => {
      return cursor.size < 1 ? null : cursor.docs[cursor.docs.length - 1]
    },
    select: (data) => ({
      pageParams: data.pageParams,
      pages: data.pages
    }),
    staleTime: 1000 * 60 * 10, // 10분
    cacheTime: 1000 * 60 * 20, // 20분
    refetchOnWindowFocus: false,
    retry: false,
  })

  return {
    products: data?.pages.flatMap((item) => item.posts),
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    initLoading: isLoading,
    isRefetching,
    refetch,
  }
}

// ref: https://velog.io/@hamham/useInfiniteQuery%EB%A1%9C-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
// ref: https://engschool.tistory.com/76