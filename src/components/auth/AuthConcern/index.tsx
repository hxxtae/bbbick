import { useTotalFetchOrder } from '@/hooks/order/useTotalFetchOrder';
import { numberFormat } from '@/utils/format';
import * as S from './style';

export const AuthConcern = () => {
  const { getTotalCount } = useTotalFetchOrder();

  return (
    <S.PrivateBlock>
      <S.SubTitle>내 관심사</S.SubTitle>
      <S.PrivateBox>
        <S.PrivateItem>
          <S.PrivateNum>0</S.PrivateNum>
          <S.PrivateText>좋아요</S.PrivateText>
        </S.PrivateItem>
        <S.PrivateItem>
          <S.PrivateNum>{numberFormat(getTotalCount())}</S.PrivateNum>
          <S.PrivateText>구매 개수</S.PrivateText>
        </S.PrivateItem>
        <S.PrivateItem>
          <S.PrivateNum>0</S.PrivateNum>
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
