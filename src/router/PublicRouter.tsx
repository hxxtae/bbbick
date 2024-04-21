import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom'

import { useAuthStore } from '@/store/useAuthStore'

export const PublicRouter = ({ children }: PropsWithChildren) => {
  const auth = useAuthStore((state) => state.auth)
  const locate = useLocation();

  // NOTE: 인증(구매자) 정보가 있는 경우 라우터 처리
  if (auth?.uid && !auth.authType) {
    return children
  }

  const path = auth?.authType ? "/" : "/signin";
  // NOTE: 인증(구매자) 정보가 없는 경우 라우터 처리
  return <Navigate to={path} replace state={{...locate}} />
}