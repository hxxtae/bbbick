import { db } from '@/service/firebaseApp'
import { deleteDoc, doc } from 'firebase/firestore'

export const useDelProduct = () => {
  
  const delProduct = async (productId: string) => {
    if (!productId) return;
    if (!confirm("상품을 삭제하시겠습니까?")) return;
    
    try {
      await deleteDoc(doc(db, "products", productId));
    } catch (err) {
      console.error(`[Error]: Product Del Error: ${err}`)
    }
  }

  return { delProduct }
}