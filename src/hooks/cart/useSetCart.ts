import { arrayUnion, doc, setDoc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query'

import { useAuthStore } from '@/store/useAuthStore';
import { ProductType } from '@/interface/products';
import { CartType } from '@/interface/cart'
import { db } from '@/service/firebaseApp';
import { queryKeys } from '@/constants/keys';

export const useSetCart = () => {
  const auth = useAuthStore((state) => state.auth);
  const queryClient = useQueryClient();

  // DB API
  const setCartStore = async (bookData: ProductType) => {
    if (!auth?.uid) {
      alert("로그인 후 다시 시도해주세요.");
      return;
    }
    if (!bookData || !bookData.id) return;
    if (bookData.quantity === 0) {
      alert("품절된 도서 입니다.");
      return;
    }
    const authId = auth.uid;
    const cartData = {
      id: bookData.id,
      name: bookData.name,
      discountRate: Number(bookData.discountRate),
      like: Number(bookData.like),
      price: Number(bookData.price),
      productImg_url: bookData.productImg_url[0].url,
      publishDate: bookData.publishDate,
      publisher: bookData.publisher,
      quantity: Number(bookData.quantity),
      cartQuantity: 1,
      regularPrice: Number(bookData.regularPrice),
      saleRate: Number(bookData.saleRate),
      writer: bookData.writer
    } as CartType;
    
    try {
      await setDoc(doc(db, "cart", authId), {
        authCart: arrayUnion(cartData)
      }, { merge: true }); // 기존 데이터 형식을 유지하며, 업데이트 진행
    } catch (error) {
      console.error("[Error]: Add Cart DB Error: ", error)
    }
  }

  // Middle
  const { isLoading, mutate } = useMutation((data: ProductType) => setCartStore(data), {
    mutationKey: queryKeys.cart.all,
    onSuccess: () => {
      alert("장바구니에 추가되었습니다.");
      // 장바구니 데이터 최신화 (캐시 데이터 최신화)
      queryClient.invalidateQueries(queryKeys.cart.all)
    },
    onError: (error: any) => {
      console.error("[Error] Add Cart Error: ", error)
    }
  })

  // Run
  const onAddCart = (data: ProductType) => {
    if (isLoading) return;
    mutate(data);
  }

  return { onAddCart }
}