import { OrderByDirection, collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { BooksKinds, OrderKinds, ProductType } from '@/interface/products';
import { FirebaseError } from 'firebase/app';
import { queryKeys } from '@/constants/keys';
import { db } from '@/service/firebaseApp';

export const useFetchProduct = (category: BooksKinds, limit_count: number = 5) => {
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

  const getQueryKey1 = () => {
    if (category === "recent") return pickOrder;
    return category;
  }

  const getQueryKey2 = () => {
    if (category === "recent") return pickOrder === "date" ? orderDate : orderPrice;
    return "desc";
  }

  const getOrderBy = () => {
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
      case "createAt": {
        return orderBy("createAt", "desc");
      }
      default: {
        return orderBy("createAt", "desc");
      }
    }
  }
  
  const getProducts = async () => {
    const q = query(collection(db, "products"), getOrderBy(), limit(limit_count));
    try {
      const querySnapshot = await getDocs(q);
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      } as ProductType));
      return posts;
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[ERROR] Products Fetch Error ", error.message);
      } else {
        console.error("[ERROR] Products Fetch Error ", error);
      }
    }
  }

  const { isLoading, error, data } = useQuery({
    queryKey: queryKeys.product.orders(getQueryKey1(), getQueryKey2()),
    queryFn: getProducts,
    staleTime: 1000 * 60 * 20, // 20분
    cacheTime: 1000 * 60 * 20, // 20분,
    refetchOnWindowFocus: false,
    retry: false,
  })
  
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