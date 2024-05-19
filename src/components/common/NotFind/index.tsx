import * as S from './style';

interface NotFindProps {
  height: string;
  text: string;
}

export const NotFind = ({ height, text }: NotFindProps) => {
  return (
    <S.Block height={height}>
      <S.Text>{text}</S.Text>
    </S.Block>
  )
}