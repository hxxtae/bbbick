import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { withAuthSync } from '@/components/auth/withAuthSync';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { NotFound } from '@/components/common/NotFound';
import { LineLoading } from '@/components/common/Loading';
import { StoreLayout } from '@/layout/StoreLayout';
import { AggregateRouter } from './AggregateRouter';

const Signin = React.lazy(() => import('@/pages/Signin/index.tsx')
  .then((module) => ({ default: module.Signin })));
const Signup = React.lazy(() => import('@/pages/Signup/index.tsx')
  .then((module) => ({ default: module.Signup })));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<StoreLayout />} />
        <Route path="/signin" element={
          <Suspense fallback={<LineLoading fixed={true}/>}>
          <AggregateRouter route="Signin">
            <Signin />
            </AggregateRouter></Suspense>}
        />
        <Route path="/signup" element={
          <Suspense fallback={<LineLoading fixed={true}/>}>
            <AggregateRouter route="Signup">
              <Signup />
            </AggregateRouter>
          </Suspense>}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default withAuthSync(AppRouter)
