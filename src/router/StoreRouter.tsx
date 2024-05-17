import { Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'

import { IRouterPages, IRouterPaths } from '@/interface/router'
import { LineLoading } from '@/components/common/Loading'
import { NotFound } from '@/components/common/NotFound'
import { AggregateRouter } from './AggregateRouter'

const storeRouter = [
  { path: "/", route: "Home" },
  { path: "/recent", route: "Recent" },
  { path: "/recent/:bookid", route: "ProductDetail" },
  { path: "/best", route: "Best" },
  { path: "/best/:bookid", route: "ProductDetail" },
  { path: "/like", route: "Like" },
  { path: "/like/:bookid", route: "ProductDetail" },
  { path: "/detail/:bookid", route: "ProductDetail" },
  { path: "/mypage", route: "MyPage" },
  { path: "/history", route: "History" },
  { path: "/cart", route: "Cart" },
  { path: "/cart/order", route: "Order" },
  { path: "/management", route: "Management" },
  { path: "/search", route: "Search" },
] as { path: IRouterPaths, route: IRouterPages }[];

export const StoreRouter = () => {
  return (
    <Routes>
      {storeRouter.map(({ path, route }, idx) => {
        const LazyComponent = React.lazy(() => import(`@/pages/${route}/index.tsx`)
          .then((module) => ({ default: module[`${route}`] })));
        return (
          <Route
            key={idx}
            path={path}
            element={
              <Suspense fallback={<LineLoading fixed={true} />}>
                <AggregateRouter route={route}>
                  <LazyComponent />
                </AggregateRouter>
              </Suspense>
            }
          />
        )
      })}
      <Route path="/*" element={<NotFound />} />
    </Routes>
    
  )
}