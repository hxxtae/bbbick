import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { withAuthSync } from '@/components/auth/withAuthSync';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { NotFound } from '@/components/common/NotFound';
import { StoreLayout } from '@/layout/StoreLayout';
import { ProductDetail } from '@/pages/ProductDetail';
import { Management } from '@/pages/Management';
import { Signin } from '@/pages/Signin';
import { Signup } from '@/pages/Signup';
import { Home } from '@/pages/Home';
import { MyPage } from '@/pages/MyPage';
import { Best } from '@/pages/Best';
import { Like } from '@/pages/Like';
import { Cart } from '@/pages/Cart';
import { History } from '@/pages/History';
import Order from '@/pages/Order';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<StoreLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recent/:bookid" element={<ProductDetail/>} />
          <Route path="/best" element={<Best />} />
          <Route path="/best/:bookid" element={<ProductDetail/>} />
          <Route path="/like" element={<Like />} />
          <Route path="/like/:bookid" element={<ProductDetail/>} />
          <Route path="/ebooks" />
          <Route path="/mypage" element={<PublicRouter><MyPage/></PublicRouter>}/>
          <Route path="/history" element={<History/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/order" element={<Order orderState={{}} />} />
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
