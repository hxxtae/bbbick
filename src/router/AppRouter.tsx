import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { withAuthSync } from '@/components/auth/withAuthSync';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { NotFound } from '@/components/common/NotFound';
import { StoreLayout } from '@/layout/StoreLayout';
import { Signin } from '@/pages/Signin';
import { Signup } from '@/pages/Signup';
import { AggregateRouter } from './AggregateRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<StoreLayout />} />
        <Route path="/signin" element={<AggregateRouter route="Signin"><Signin /></AggregateRouter>} />
        <Route path="/signup" element={<AggregateRouter route="Signup"><Signup /></AggregateRouter>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default withAuthSync(AppRouter)
