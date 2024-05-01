import { BooksScroll } from '@/layout/BooksScroll';
import * as S from './style';

export const Like = () => {
  return (
    <S.Section sx={{ bgcolor: "bg.card"}}>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <BooksScroll title="독자들이 추천한 책" category="like" />
      </S.Block>
    </S.Section>
  )
}