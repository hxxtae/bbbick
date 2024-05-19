import { numberFormat } from '@/utils/format';
import * as S from './style';

export const AuthConcern = () => {

  return (
    <S.PrivateBlock>
      <S.SubTitle>내 관심사</S.SubTitle>
      <S.PrivateBox>
        <S.PrivateItem>
          <S.PrivateNum>1</S.PrivateNum>
          <S.PrivateText>좋아요</S.PrivateText>
        </S.PrivateItem>
        <S.PrivateItem>
          <S.PrivateNum>2</S.PrivateNum>
          <S.PrivateText>구매 개수</S.PrivateText>
        </S.PrivateItem>
        <S.PrivateItem>
          <S.PrivateNum>3</S.PrivateNum>
          <S.PrivateText>찜 개수</S.PrivateText>
        </S.PrivateItem>
      </S.PrivateBox>

      <S.SubTitle>내 포인트</S.SubTitle>
      <S.PointBox>
        <S.PointIcon>
          <S.Icon src={`${import.meta.env.BASE_URL}assets/icons/icon_point.png`} />
        </S.PointIcon>
        <S.PointText>{numberFormat(1000)}</S.PointText>
      </S.PointBox>
    </S.PrivateBlock>
  )
}
