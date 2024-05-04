import { queryKeys } from '@/constants/keys'
import { ICart } from '@/interface/cart';
import { db } from '@/service/firebaseApp';
import { useAuthStore } from '@/store/useAuthStore';
import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from 'react-query'

export const useFetchCart = () => {
  const auth = useAuthStore((state) => state.auth);
  
  // ------------------------
  // 카트 내역 조회 API
  // ------------------------
  const getCartAPI = async () => {
    if (!auth?.uid) {
      return;
    }

    try {
      const post = await getDoc(doc(db, "cart", auth.uid));
      return post.data() as ICart;
    } catch (error) {
      console.error("[ERROR]: ", error)
    }
  }

  // ------------------------
  // 카트 내역 조회 Mutate
  // ------------------------
  const { isLoading, data } = useQuery({
    queryKey: queryKeys.cart.all,
    queryFn: getCartAPI,
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 10, // 10분
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnMount: true,
    select: (cartData?: ICart) => {
      if (cartData?.authCart.length) {
        const carts = [...cartData.authCart];
        carts.sort((a, b) => Number(a.id) - Number(b.id));
        return carts;
      }
      return cartData?.authCart
    }
  });

  // 카트 여부 확인
  const getCartItem = (bookId: string) => {
    const confirm = data?.some((item) => item.id === bookId);
    return confirm;
  }

  // 카트 내역 총 주문 금액 및 정가 금액
  const getCartTotalPay = (kind: "price" | "regularPrice") => {
    return data?.reduce((sum, cart) => sum + (cart.cartQuantity * cart[kind]), 0) ?? 0;
  }

  // 카트 내역 총 수량
  const getCartTotalQuantity = () => {
    return data?.reduce((sum, cart) => sum + cart.cartQuantity, 0) ?? 0;
  }

  return {
    isLoading,
    data,
    getCartItem,
    getCartTotalPay,
    getCartTotalQuantity
  }
}

