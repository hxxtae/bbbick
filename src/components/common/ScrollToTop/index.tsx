import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  // pathname 즉, 라우터 경로가 변경되면 다음 작업을 수행
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}