import * as S from './style';

interface NotFindProps {
  height: string;
}

export const NotFind = ({ height }: NotFindProps) => {
  return (
    <S.Block height={height}>
      <S.Text>구매내역이 없습니다.</S.Text>
    </S.Block>
  )
}