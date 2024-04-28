import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { INIT_PRODUCT_DATA } from '@/constants/product';
import { IProductForm } from '@/interface/form';
import { localStorageKeys } from '@/constants/keys';
import { db } from '@/service/firebaseApp';

export const useAddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const onSubmit = async (data: IProductForm = INIT_PRODUCT_DATA) => {
    if (!data) return;
    let { productImg_url, category1, category2 } = data;
    if(!category1 || !category2) return;
    if (!productImg_url || !productImg_url.length) {
      alert("이미지 파일을 추가해주세요.")
      return;
    }

    setIsLoading(true);
    const files = JSON.parse(localStorage.getItem(localStorageKeys.files) ?? '[]');
    productImg_url = [...files];
    const createAt = new Date()?.toLocaleDateString("ko", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const formData: IProductForm = {
      ...data,
      productImg_url,
      createAt,
      updateAt: null
    }

    try {
      await addDoc(collection(db, "products",), { ...formData });
    } catch (error) {
      console.error("[Error]: Product Add Error: ", error)
    } finally {
      // NOTE: 완료 후 기존 데이터 초기화
      localStorage.setItem(localStorageKeys.files, "[]");
      setIsLoading(false);
      navigate("/");
    }
  }

  return { isLoading, onSubmit }
}
