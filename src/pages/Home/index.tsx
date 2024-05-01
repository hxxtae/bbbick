import { Link } from 'react-router-dom';

import { Books } from '@/layout/Books';
import * as S from './style';

export const Home = () => {
  return (
    <S.Section sx={{ bgcolor: "bg.card" }}>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <S.Title sx={{ fontWeight: 600 }}>BBBick</S.Title>
        <S.Desc sx={{ color: "text.main" }}>쉽게 책을 접하고 구매할 수 있는 곳. 온라인 북 스토어 bbbick(book,book,pick) 입니다.</S.Desc>
        <Link to={"/best"}>
          <S.GoButton variant="contained" sx={{ mr: "10px" }}>베스트셀러</S.GoButton>
        </Link>
        <Link to={"/like"}>
          <S.GoButton variant="contained">추천 북 보러가기</S.GoButton>
        </Link>
      </S.Block>
      <S.Block sx={{ bgcolor: "bg.main" }}>
        <Books title="지금, 이 책" category="recent" />
      </S.Block>
      <S.Block sx={{ bgcolor: "bg.main" }}>
        <Books title="베스트셀러 TOP 5" category="best" />
      </S.Block>
      <S.Block sx={{ bgcolor: "bg.main" }}>
        <Books title="추천 북 TOP 5" category="like" />
      </S.Block>
    </S.Section>
  )
}