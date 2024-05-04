import { queryKeys } from '@/constants/keys'
import { ICart } from '@/interface/cart';
import { db } from '@/service/firebaseApp';
import { useAuthStore } from '@/store/useAuthStore';
import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from 'react-query'

export const useFetchCart = () => {
  const auth = useAuthStore((state) => state.auth);
  
  const getStorageOfCart = async () => {
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

  const { isLoading, data } = useQuery({
    queryKey: queryKeys.cart.all,
    queryFn: getStorageOfCart,
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

  const getCartItem = (bookId: string) => {
    const confirm = data?.some((item) => item.id === bookId);
    return confirm;
  }

  return { isLoading, data, getCartItem }
}

