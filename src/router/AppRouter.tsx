import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Signin } from '@/pages/Signin';
import { Signup } from '@/pages/Signup';
import { NotFound } from '@/components/common/NotFound';
import { Home } from '@/pages/Home';
import { Books } from '@/pages/Books';
import { StoreLayout } from '@/layout/StoreLayout';
import { PublicRouter } from './PublicRouter';
import { Management } from '@/pages/Management';
import { PrivateRouter } from './PrivateRouter';
import { withAuthSync } from '@/components/auth/withAuthSync';

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
