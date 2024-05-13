export const localStorageKeys = {
  theme: "bbbick_theme" as const,
  files: "bbbick_image" as const
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
    category: (category: string) => [...queryKeys.product.all, `/${category}`] as const,
    categoryScroll: (category: string, limit?: number) => [...queryKeys.product.all, `/${category}`, `/${limit}`] as const,
  },
  order: {
    all: ['/order'] as const,
  }
}