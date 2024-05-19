import { IRouterPages } from '@/interface/router';
import { useAuthStore } from '@/store/useAuthStore';
import { Navigate, useLocation } from 'react-router-dom';

interface AggregateRouterProps {
  route: IRouterPages;
  children: React.ReactNode;
}

export const AggregateRouter = ({ route, children }: AggregateRouterProps) => {
  const auth = useAuthStore((state) => state.auth);
  const locate = useLocation();

  // Not User
  if (route === "Signin" || route === "Signup") {
    if (!auth?.uid) {
      return children;
    }
    return <Navigate to={"/"} replace state={{...locate}} />
  }
  
  // Public Router
  if (route === "MyPage" || route === "History" || route === "Cart" || route === "Order") {
    if (auth?.uid && !auth.authType) {
      return children
    }
    const path = auth?.authType ? "/" : "/signin";
    alert("구매자만 접근 가능합니다.");
    return <Navigate to={path} replace state={{...locate}} />
  }

  // Private Router
  if (route === "Management") {
    if (auth?.uid && auth.authType) {
      return children
    }
    alert("판매자(관리자)만 접근 가능합니다.")
    return <Navigate to={"/"} replace state={{...locate}} />
  }

  return children
}