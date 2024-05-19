import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom'

import { useAuthStore } from '@/store/useAuthStore'

export const PrivateRouter = ({ children }: PropsWithChildren) => {
  const auth = useAuthStore((state) => state.auth);
  const locate = useLocation();
  
  // NOTE: 인증(판매자) 정보가 있는 경우 라우터 처리
  if (auth?.uid && auth.authType) {
    return children
  }

  // NOTE: 인증(판매자) 정보가 없는 경우 라우터 처리
  alert("관리자만 접근 가능합니다.")
  return <Navigate to={"/"} replace state={{...locate}} />
}