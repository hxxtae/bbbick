import { db } from '@/service/firebaseApp';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { INIT_PRODUCT_DATA } from '@/constants/product';
import { IProductForm } from '@/interface/form';
import { localStorageKeys } from '@/constants/keys';

export const useSetProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const onSubmit = async (data: IProductForm = INIT_PRODUCT_DATA, id?: string) => {
    if (!data) return;
    const files = JSON.parse(localStorage.getItem(localStorageKeys.files) ?? '[]');
    const { category1, category2 } = data;
    if (!category1 || !category2) return;
    if (!files || !files.length) {
      alert("이미지 파일을 추가해주세요.")
      return;
    }
    
    setIsLoading(true);
    const dataId = id ?? Date.now().toString();
    const submitDate = new Date()?.toLocaleDateString("ko", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const createData: IProductForm = {
      ...data,
      productImg_url: [...files],
      createAt: submitDate
    }
    const updateData: IProductForm = {
      ...data,
      productImg_url: [...files],
      updateAt: submitDate
    }
    const formData = id ? updateData : createData;
    try {
      await setDoc(doc(db, "products", dataId), { ...formData }, {merge: true});
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
