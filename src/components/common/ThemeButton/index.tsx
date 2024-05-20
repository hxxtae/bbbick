import { useTheme } from '@/hooks/common/useTheme';
import Brightness7Icon from '@icons/Brightness7';
import DarkModeIcon from '@icons/DarkMode';
import * as S from './style';

export const ThemeButton = () => {
  const { mode, setMode } = useTheme();

  return (
    <S.Button onClick={() => setMode()}>
      {mode === "light" ? <DarkModeIcon/> : <Brightness7Icon/> }
    </S.Button>
  )
}

