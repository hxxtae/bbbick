import { useMutation, useQueryClient } from 'react-query';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

import { localStorageKeys, queryKeys } from '@/constants/keys';
import { INIT_PRODUCT_DATA } from '@/constants/product';
import { ProductType } from '@/interface/products';
import { IProductForm } from '@/interface/form';
import { LocalStore } from '@/store/localStore';
import { db } from '@/service/firebaseApp';

const localImage = new LocalStore(localStorageKeys.files);

interface ProductMutate {
  data: IProductForm;
  id?: string;
}

export const useSetProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // ---------------------
  // 상품 등록 및 수정 API
  // ---------------------
  const setProductStore = async (formData: IProductForm, productId: string) => {
    try {
      await setDoc(doc(db, "products", productId), { ...formData }, { merge: true });
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[Error]: Product Set Error: ", error.message);
      } else {
        console.error("[Error]: Product Set Error: ", error);
      }
    }
  }
  
  const onSetProductState = async (data: IProductForm = INIT_PRODUCT_DATA, id?: string) => {
    if (!data) return;
    const files = JSON.parse(localImage.get() ?? '[]');
    const { category1, category2 } = data;
    if (!category1 || !category2) {
      alert("카테고리를 선택해주세요.")
      return;
    }
    if (!files || !files.length) {
      alert("이미지 파일을 추가해주세요.")
      return;
    }

    const productId = id ?? Date.now().toString();
    const submitDate = new Date()?.toLocaleDateString("ko", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const createData: Omit<ProductType, "id"> = {
      ...data,
      productImg_url: [...files],
      saleRate: 0,
      like: 0,
      createAt: submitDate,
      updateAt: null
    }
    const updateData: Omit<ProductType, "like" | "saleRate" | "id"> = {
      ...data,
      productImg_url: [...files],
      updateAt: submitDate,
      createAt: null
    }
    const formData = id ? updateData : createData;

    await setProductStore(formData, productId);
  }

  const { isLoading, mutate } = useMutation(({data, id}: ProductMutate) => onSetProductState(data, id), {
    mutationKey: queryKeys.product.all,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.product.all);
      console.log("신규 상품이 등록되었습니다.");

      // NOTE: 완료 후 기존 데이터 초기화
      localImage.set("[]");
      navigate("/");
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error("[Error]: Product Set Error: ", error.message);
      } else {
        console.error("[Error]: Product Set Error: ", error);
      }
    }
  })

  const onSubmit = (data: IProductForm, id?: string) => {
    if (isLoading) return;
    mutate({ data, id });
  }

  return { isLoading, onSubmit }
}
