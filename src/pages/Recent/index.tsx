import { useEffect } from 'react';

import { useCategory } from '@/hooks/common/useCategory';
import { localStorageKeys } from '@/constants/keys';
import { BooksScroll } from '@/layout/BooksScroll';
import { LocalStore } from '@/store/localStore';
import * as S from './style';

const localRecentCategory1 = new LocalStore(localStorageKeys.category1("recent"));
const localRecentCategory2 = new LocalStore(localStorageKeys.category2("recent"));

export const Recent = () => {
  const { category1, category2, CategorySelect, CategoryList } = useCategory({
    initCategory1: localRecentCategory1.get() ?? "000",
    initCategory2: localRecentCategory2.get() ?? ""
  });

  useEffect(() => {
    return () => {
      localRecentCategory1.set(category1);
      localRecentCategory2.set(category2);
    }
  }, [category1, category2]);

  return (
    <S.Section sx={{ bgcolor: "bg.card" }}>
      <S.Title sx={{ fontWeight: 600 }}>오늘, 신간도서</S.Title>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <CategorySelect />
        <CategoryList />
      </S.Block>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <BooksScroll category="recent" category1={category1} category2={category2} />
      </S.Block>
    </S.Section>
  )
}