import { queryKeys } from '@/constants/keys';
import { db } from '@/service/firebaseApp'
import { FirebaseError } from 'firebase/app';
import { deleteDoc, doc } from 'firebase/firestore/lite'
import { useMutation, useQueryClient } from 'react-query';

export const useDelProduct = () => {
  const queryClient = useQueryClient();

  const setProductStoreOfRemove = async (productId: string) => {
    try {
      await deleteDoc(doc(db, "products", productId));
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[Error]: Product Delete Error: ", error.message);
      } else {
        console.error("[Error]: Product Delete Error: ", error);
      }
    }
  }

  const { isLoading, mutate } = useMutation((productId: string) => setProductStoreOfRemove(productId), {
    mutationKey: queryKeys.product.all,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.product.all);
      alert("상품을 삭제하였습니다.");
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error("[Error]: Product Delete Error: ", error.message);
      } else {
        console.error("[Error]: Product Delete Error: ", error);
      }
    }
  })

  const onRemoveProduct = (productId: string) => {
    if (!productId) return;
    if (isLoading) return;
    if (confirm("상품을 삭제하시겠습니까?")) {
      mutate(productId);
    }    
  }

  return { isLoading, onRemoveProduct }
}