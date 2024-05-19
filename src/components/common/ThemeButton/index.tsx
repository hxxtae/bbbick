import { useTheme } from '@/hooks/common/useTheme';
import { Brightness7, DarkMode } from '@mui/icons-material';
import * as S from './style';

export const ThemeButton = () => {
  const { mode, setMode } = useTheme();

  return (
    <S.Button onClick={() => setMode()}>
      {mode === "light" ? <DarkMode/> : <Brightness7/> }
    </S.Button>
  )
}

