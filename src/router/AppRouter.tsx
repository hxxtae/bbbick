import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Signin } from '@/pages/Signin';
import { Signup } from '@/pages/Signup';
import { NotFound } from '@/components/ui/NotFound';
import { Home } from '@/pages/Home';
import { Books } from '@/pages/Books';
import { StoreLayout } from '@/layout/StoreLayout';
import { PublicRouter } from './PublicRouter';
import { Management } from '@/pages/Management';
import { PrivateRouter } from './PrivateRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="books" element={<PublicRouter><Books/></PublicRouter>} />
          <Route path="/best" />
          <Route path="/recomends" />
          <Route path="/cart" />
          <Route path="/mypage" />
          <Route path="/history" />
          <Route path="/management" element={<PrivateRouter><Management /></PrivateRouter>} />
          <Route path="/search" />
          <Route path="/signin" element={<Signin />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
};

// NOTE:
// - signin, signup 라우터는 유저 인증에 성공하면 route 접근을 막는다.
// - cart, mypage, history 라우터는 유저 인증이 없다면 route 접근을 막는다.
// - products 라우터는 관리자만 접근이 가능하다.