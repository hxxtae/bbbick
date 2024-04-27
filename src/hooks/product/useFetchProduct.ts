import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { ProductType } from '@/interface/products';
import { db } from '@/service/firebaseApp';

export const useFetchProduct = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const getProducts = async () => {
    const q = query(collection(db, "products"), orderBy("createAt", "desc"));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const docData = {
          id: doc.id, ...doc.data()
        } as ProductType;
        setProducts((prev) => [...prev, docData])
      });
    } catch (error) {
      console.error("[Error] Product Fetch Error: ", error)
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return { products, getProducts }
}