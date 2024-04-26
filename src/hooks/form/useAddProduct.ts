import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { INIT_PRODUCT_DATA } from '@/constants/form';
import { IProductForm } from '@/interface/form';
import { localStorageKeys } from '@/constants/keys';
import { db } from '@/service/firebaseApp';

export const useAddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const onSubmit = async (data: IProductForm = INIT_PRODUCT_DATA) => {
    setIsLoading(true)
    const files = JSON.parse(localStorage.getItem(localStorageKeys.files) ?? '[');
    const formData: IProductForm = {
      ...data,
      productImg_url: [
        ...files
      ]
    }

    try {
      await addDoc(collection(db, "products",), { ...formData });
    } catch (error) {
      console.error("[Error]: Product Add Error: ", error)
    } finally {
      // NOTE: 완료 후 기존 데이터 다시 초기화
      localStorage.setItem(localStorageKeys.files, "[]");
      setIsLoading(false);
      navigate("/");
    }
  }

  return { isLoading, onSubmit }
}
