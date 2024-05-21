import { doc, getDoc } from 'firebase/firestore/lite';
import { FirebaseError } from 'firebase/app';
import { useQuery } from 'react-query';

import { db } from '@/service/firebaseApp';
import { queryKeys } from '@/constants/keys';
import { ProductType } from '@/interface/products';

export const useDetailFetchProduct = (productId: string) => {
  const getProductOfStore = async (productId: string) => {
    if (!productId) {
      alert("상품 정보를 가져올 수 없습니다.");
      return;
    }

    const q = doc(db, "products", productId);
    try {
      const querySnapshot = await getDoc(q);
      const post = querySnapshot.data() as ProductType;
      return {
        ...post,
        id: productId
      };
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[ERROR] Product Fetch Error ", error.message);
      } else {
        console.error("[ERROR] Product Fetch Error ", error);
      }
    }
  }

  const { isLoading: isProductLoading,
    data: product,
    isRefetching: isProductReLoading
  } = useQuery({
    queryKey: queryKeys.product.detail(productId),
    queryFn: () => getProductOfStore(productId),
    staleTime: 1000 * 60 * 5,  // 5분
    cacheTime: 1000 * 60 * 20, // 20분
    refetchOnWindowFocus: false,
    retry: false
  });

  return {
    isProductLoading,
    isProductReLoading,
    product
  }
}