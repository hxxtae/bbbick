import { LinearProgress } from '@mui/material';
import * as S from './style';

export const Loading = () => {
  return (
    <S.Wrapper >
      <LinearProgress sx={{ bgColor: "primary.main" }}/>
    </S.Wrapper>
  )
}