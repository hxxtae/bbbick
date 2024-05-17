import { useEffect } from 'react';

import { useCategory } from '@/hooks/common/useCategory';
import { BooksScroll } from '@/layout/BooksScroll';
import { localStorageKeys } from '@/constants/keys';
import { LocalStore } from '@/store/localStore';
import * as S from './style';

const localBestCategory1 = new LocalStore(localStorageKeys.category1("best"));
const localBestCategory2 = new LocalStore(localStorageKeys.category2("best"));

export const Best = () => {
  const { category1, category2, CategorySelect, CategoryList } = useCategory({
    initCategory1: localBestCategory1.get() ?? "000",
    initCategory2: localBestCategory2.get() ?? "",
  });

  useEffect(() => {
    return () => {
      localBestCategory1.set(category1);
      localBestCategory2.set(category2);
    }
  }, [category1, category2]);

  return (
    <S.Section sx={{ bgcolor: "bg.card" }}>
      <S.Title sx={{ fontWeight: 600 }}>BEST SELLER</S.Title>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <CategorySelect />
        <CategoryList />
      </S.Block>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <BooksScroll category="best" category1={category1} category2={category2} />
      </S.Block>
    </S.Section>
  )
}