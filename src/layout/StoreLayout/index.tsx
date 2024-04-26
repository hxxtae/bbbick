import { Outlet } from 'react-router-dom'

import { Header } from '../Header';
import { SideNav } from '../SideNav';
import * as S from './style';

export const StoreLayout = () => {
  return (
    <S.Wrapper>
      <Header/>
      <S.Container>
        <SideNav />
        <Outlet />
      </S.Container>
    </S.Wrapper>
  )
}