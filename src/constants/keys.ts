import { BooksKinds } from '@/interface/products'

export const localStorageKeys = {
  theme: "bbbick_theme" as const,
  files: "bbbick_image" as const,
  category1: (orderby: BooksKinds) => `bbbick_${orderby}/category1`,
  category2: (orderby: BooksKinds) => `bbbick_${orderby}/category2`,
}

export const queryKeys = {
  auth: {
    all: ['/auth'] as const,
    address: () => [...queryKeys.auth.all, '/address'] as const,
  },
  cart: {
    all: ['/cart'] as const,
  },
  product: {
    all: ['/product'] as const,
    basic: (page: number) => [...queryKeys.product.all, `${page}`] as const,
    orders: (order: string, orderKind: string) => [...queryKeys.product.all, `/${order}`, `${orderKind}`] as const,
    categorys: (order: string, category1: string, category2: string) => [...queryKeys.product.all, `/${order}`, `/${category1}`, `/${category2}`] as const,
    detail: (id: string) => [...queryKeys.product.all, `/${id}`] as const,
  },
  order: {
    all: ['/order'] as const,
    scroll: () => [...queryKeys.order.all, 'scroll'],
  }
}