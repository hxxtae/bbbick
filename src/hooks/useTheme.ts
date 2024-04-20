import { themeState } from '@/atom';
import { PaletteMode } from '@mui/material';
import { useMemo } from 'react'
import { useRecoilState } from 'recoil';

export const useTheme = () => {
  const [mode, setMode] = useRecoilState<PaletteMode>(themeState);
  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [mode, setMode],
  );

  return colorMode
}