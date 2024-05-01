import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Signin } from '@/pages/Signin';
import { Signup } from '@/pages/Signup';
import { NotFound } from '@/components/common/NotFound';
import { Home } from '@/pages/Home';
import { StoreLayout } from '@/layout/StoreLayout';
import { PublicRouter } from './PublicRouter';
import { Management } from '@/pages/Management';
import { PrivateRouter } from './PrivateRouter';
import { withAuthSync } from '@/components/auth/withAuthSync';
import { MyPage } from '@/pages/MyPage';
import { ProductDetail } from '@/pages/ProductDetail';
import { Best } from '@/pages/Best';
import { Like } from '@/pages/Like';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/books/:bookid" element={<ProductDetail/>} />
          <Route path="/best" element={<Best />} />
          <Route path="/best/:bookid" element={<ProductDetail/>} />
          <Route path="/like" element={<Like />} />
          <Route path="/like/:bookid" element={<ProductDetail/>} />
          <Route path="/ebooks" />
          <Route path="/mypage" element={<PublicRouter><MyPage/></PublicRouter>}/>
          <Route path="/history" />
          <Route path="/cart" />
          <Route path="/management" element={<PrivateRouter><Management /></PrivateRouter>} />
          <Route path="/search" />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default withAuthSync(AppRouter)
