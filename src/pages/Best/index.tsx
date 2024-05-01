import { BooksScroll } from '@/layout/BooksScroll';
import * as S from './style';

export const Best = () => {
  return (
    <S.Section sx={{ bgcolor: "bg.card"}}>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <BooksScroll title="BEST SELLER" category="best" />
      </S.Block>
    </S.Section>
  )
}