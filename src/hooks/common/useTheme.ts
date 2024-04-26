import { useThemeStore } from '@/store/useThemeStore';
import { useMemo } from 'react'

export const useTheme = () => {
  const { theme, setTheme } = useThemeStore((state) => state)
  
  const themeMode = useMemo(
    () => ({
      mode: theme,
      setMode: () => {
        setTheme({theme});
      },
    }),
    [theme, setTheme],
  );

  return themeMode
}