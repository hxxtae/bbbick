import { OrderByDirection, collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { BooksKinds, OrderKinds, ProductType } from '@/interface/products';
import { queryKeys } from '@/constants/keys';
import { db } from '@/service/firebaseApp';

export const useFetchProduct = (category: BooksKinds) => {
  const [orderDate, setOrderDate] = useState<OrderByDirection>("desc");
  const [orderPrice, setOrderPrice] = useState<OrderByDirection>("desc");
  const [pickOrder, setPickOrder] = useState<OrderKinds>('date');

  const toggleOrderDate = () => {
    setOrderDate((prev) => prev === "desc" ? "asc" : "desc")
  }
  const toggleOrderPrice = () => {
    setOrderPrice((prev) => prev === "desc" ? "asc" : "desc")
  }
  const togglePickOrder = (kind: OrderKinds) => {
    setPickOrder(kind)
  }

  const getOrder = () => {
    switch (category) {
      case "recent": {
        return pickOrder === "date" ? orderBy("publishDate", orderDate) : orderBy("price", orderPrice);
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
  
  const getProducts = async () => {
    const q = query(collection(db, "products"), getOrder(), limit(5));
    try {
      const querySnapshot = await getDocs(q);
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      } as ProductType));
      return posts;
    } catch (error) {
      console.error("[Error] Product Fetch Error: ", error)
    }
  }

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: queryKeys.product.category(category),
    queryFn: getProducts,
    staleTime: 1000 * 60 * 20, // 20분
    cacheTime: 1000 * 60 * 20, // 20분,
    refetchOnWindowFocus: false,
    retry: false,
  })

  useEffect(() => {
    refetch();
  }, [orderDate, orderPrice])
  
  return {
    isLoading,
    error,
    products: data,
    orderDate,
    orderPrice,
    pickOrder,
    toggleOrderDate,
    toggleOrderPrice,
    togglePickOrder
  }
}