import { localStorageKeys } from '@/constants/keys'
import { PaletteMode } from '@mui/material'
import { create, StateCreator } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type ThemeState = {
  theme: PaletteMode
}

type ThemeSetState = {
  setTheme: (state: ThemeState) => void
}

const themeStore: StateCreator<ThemeState & ThemeSetState> = (set) => ({
  theme: "light",
  setTheme: () => set((prev) => ({ theme: prev.theme === "light" ? "dark" : "light" }))
});

const persistedThemeStore = persist<ThemeState & ThemeSetState>(
  themeStore,
  {
    name: localStorageKeys.theme,
    storage: createJSONStorage(() => localStorage), // local 사용
  },
)

export const useThemeStore = create(persistedThemeStore)