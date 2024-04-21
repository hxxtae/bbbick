import { IAuth } from '@/interface/auth'
import { create } from 'zustand'

type AuthState = {
  auth: IAuth | null
}

type AuthSetState = {
  setAuth: (auth: IAuth | null) => void
}

export const useAuthStore = create<AuthState & AuthSetState>((set) => ({
  auth: null,
  setAuth: (auth: IAuth | null) => set(() => ({ auth }))
}))