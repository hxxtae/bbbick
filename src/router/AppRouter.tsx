import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Home } from '@/pages/Home';
import { Signin } from '@/pages/Signin';
import { Signup } from '@/pages/Signup';
import { NotFound } from '@/components/ui/NotFound';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" />
        <Route path="/best" />
        <Route path="/recomends" />
        <Route path="/cart" />
        <Route path="/mypage" />
        <Route path="/history" />
        <Route path="/management" />
        <Route path="/search" />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
};

// NOTE:
// - signin, signup 라우터는 유저 인증에 성공하면 route 접근을 막는다.
// - cart, mypage, history 라우터는 유저 인증이 없다면 route 접근을 막는다.
// - products 라우터는 관리자만 접근이 가능하다.