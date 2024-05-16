import { BooksScroll } from '@/layout/BooksScroll';
import * as S from './style';
import { useCategory } from '@/hooks/common/useCategory';

export const Like = () => {
  const { category1, category2, CategorySelect, CategoryList } = useCategory();

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