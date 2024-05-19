import { StoreRouter } from '@/router/StoreRouter';
import { Header } from '../Header';
import { SideNav } from '../SideNav';
import * as S from './style';

export const StoreLayout = () => {
  return (
    <S.Wrapper>
      <Header/>
      <S.Container>
        <SideNav />
        <StoreRouter />
      </S.Container>
    </S.Wrapper>
  )
}