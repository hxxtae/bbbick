import { queryKeys } from '@/constants/keys'
import { IAuth } from '@/interface/auth';
import { db } from '@/service/firebaseApp';
import { useAuthStore } from '@/store/useAuthStore';
import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from 'react-query'

export const useFetchCart = () => {
  const auth = useAuthStore((state) => state.auth);
  
  const getStorageOfCart = async () => {
    if (!auth?.uid) {
      alert("로그인 후 다시 시도해주세요.");
      return;
    }

    try {
      const post = await getDoc(doc(db, "auth", auth.uid));
      return post.data() as IAuth;
    } catch (error) {
      console.error("[ERROR]: ", error)
    }
  }

  const { isLoading, data } = useQuery({
    queryKey: queryKeys.auth.cart(),
    queryFn: getStorageOfCart,
    staleTime: 1000 * 60 * 10, // 10분
    cacheTime: 1000 * 60 * 10, // 10분
    refetchOnWindowFocus: false,
    retry: false,
  });

  const getCartItem = (bookId: string) => {
    const confirm = data?.authCart.some((item) => item.id === bookId);
    return confirm;
  }

  return { isLoading, data, getCartItem }
}

