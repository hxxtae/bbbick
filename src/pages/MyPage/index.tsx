import { AuthProfile } from '@/components/auth/AuthProfile';
import { AuthAddress } from '@/components/auth/AuthAddress';
import { AuthConcern } from '@/components/auth/AuthConcern';
import * as S from './style';

export const MyPage = () => {
  return (
    <S.Section sx={{ bgcolor: "bg.card"}}>
      <S.Title>마이페이지</S.Title>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <AuthProfile />
      </S.Block>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <AuthAddress />
        <AuthConcern />
      </S.Block>
    </S.Section>
  )
}