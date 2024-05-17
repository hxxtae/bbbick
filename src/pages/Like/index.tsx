import { useEffect } from 'react';

import { useCategory } from '@/hooks/common/useCategory';
import { BooksScroll } from '@/layout/BooksScroll';
import { localStorageKeys } from '@/constants/keys';
import { LocalStore } from '@/store/localStore';
import * as S from './style';

const localLikeCategory1 = new LocalStore(localStorageKeys.category1("like"));
const localLikeCategory2 = new LocalStore(localStorageKeys.category2("like"));

export const Like = () => {
  const { category1, category2, CategorySelect, CategoryList } = useCategory({
    initCategory1: localLikeCategory1.get() ?? "000",
    initCategory2: localLikeCategory2.get() ?? ""
  });

  useEffect(() => {
    return () => {
      localLikeCategory1.set(category1);
      localLikeCategory2.set(category2);
    }
  }, [category1, category2]);

  return (
    <S.Section sx={{ bgcolor: "bg.card" }}>
      <S.Title sx={{ fontWeight: 600 }}>독자들이 추천한 책</S.Title>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <CategorySelect />
        <CategoryList />
      </S.Block>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <BooksScroll category="like" category1={category1} category2={category2} />
      </S.Block>
    </S.Section>
  )
}