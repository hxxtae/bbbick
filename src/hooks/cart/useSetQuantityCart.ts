import { arrayRemove, arrayUnion, doc, setDoc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { useState } from 'react';

import { useAuthStore } from '@/store/useAuthStore';
import { CartQuantityForm } from '@/interface/form';
import { queryKeys } from '@/constants/keys';
import { CartType } from '@/interface/cart';
import { db } from '@/service/firebaseApp';
import { FirebaseError } from 'firebase/app';

const MAX_QUANTITY = 9999;
const MIN_QUANTITY = 1;

interface useSetQuantityCartProps {
  data: CartType;
}

export const useSetQuantityCart = ({ data }: useSetQuantityCartProps) => {
  const auth = useAuthStore((state) => state.auth);
  const [prevQuantity, setPrevQuantity] = useState(data.cartQuantity);
  const queryClient = useQueryClient();

  // -----------------------
  // 장바구니 상품 수량 변경 API
  // -----------------------
  const setQuantityAPI = async ({ newQuantity = 0 }: CartQuantityForm) => {
    if (!auth?.uid) {
      alert("로그인 후 다시 시도해주세요.");
      return;
    }
    if (newQuantity === undefined || newQuantity === null) return;
    if (newQuantity < MIN_QUANTITY) {
      alert(`상품 수량은 ${MIN_QUANTITY}개 이상을 입력해주세요.`);
      return;
    }
    if (newQuantity > MAX_QUANTITY) {
      alert(`상품 수량은 ${MAX_QUANTITY}개 이하로 입력해주세요.`);
      return;
    }
    if (newQuantity == prevQuantity) {
      alert("이미 반영된 수량입니다.");
      return;
    }
    const authId = auth.uid;

    // 수정한 수량 및 Cart Item
    const cartData = {
      ...data,
      cartQuantity: Number(newQuantity)
    } as CartType;    

    // 수정 이전 수량 및 Cart Item
    const prevData = {
      ...data,
      cartQuantity: prevQuantity
    } as CartType;

    try {
      // 장바구니 배열에서 변경된 수량으로 상품 추가
      await setDoc(doc(db, "cart", authId), {
        authCart: arrayUnion(cartData)
      }, { merge: true }); // 기존 데이터 형식을 유지하며, 업데이트 진행

      // 장바구니 배열에서 이전 변경된 수량의 상품 삭제
      await setDoc(doc(db, "cart", authId), {
        authCart: arrayRemove(prevData)
      }, { merge: true });
      setPrevQuantity(Number(newQuantity));
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[Error]: Add Cart DB Error: ", error.message);
      } else {
        console.error("[Error]: Add Cart DB Error: ", error);
      }
    }
  }

  // -----------------------
  // 장바구니 상품 제거 API
  // -----------------------
  const removeCartAPI = async (bookId: string) => {
    if (!auth?.uid) {
      alert("로그인 후 다시 시도해주세요.");
      return;
    }
    if (!bookId) return;
    if (data.id !== bookId) return;

    if (!confirm("상품을 장바구니에서 제거하시겠습니까?")) return;

    const authId = auth.uid;
    try {
      // 장바구니 래스트에서 해당 상품 삭제
      await setDoc(doc(db, "cart", authId), {
        authCart: arrayRemove(data)
      }, { merge: true });
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[Error]: Remove Cart DB Error: ", error.message);
      } else {
        console.error("[Error]: Remove Cart DB Error: ", error);
      }
    }
  }

  // -----------------------
  // 장바구니 상품 수량 변경 Mutate
  // -----------------------
  const { isLoading: loadQuantity, mutate: setQuantity } = useMutation((newQuantity: number) => setQuantityAPI({ newQuantity }), {
    mutationKey: queryKeys.cart.all,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.cart.all);
    },
    onError: (error) => {
      console.error("[Error]: Set Quantity of Cart Error: ", error);
    }
  });
  // 상품 수량 변경 Submit 함수
  const setQuantitySubmit = ({ newQuantity = 0 }: CartQuantityForm) => {
    if (loadQuantity) return;
    setQuantity(newQuantity)
  }

  // -----------------------
  // 장바구니 상품 제거 Mutate
  // -----------------------
  const { isLoading: removeLoading, mutate: removeCart } = useMutation((bookId: string) => removeCartAPI(bookId), {
    mutationKey: queryKeys.cart.all,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.cart.all);
    },
    onError: (error) => {
      console.error("[Error]: Remove Cart Error: ", error);
    }
  })

  return {
    loadQuantity,
    setQuantity: setQuantitySubmit,
    removeLoading,
    removeCart
  }
}