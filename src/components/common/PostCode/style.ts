import { styled as style } from '@mui/system'
import Button from '@muiDom/Button';

export const OpenAddress = style(Button)(() => ({
  flexShrink: 0,
  backgroundColor: "#FFFFFF",
  ":hover": {
    backgroundColor: "#E6EBFF",
  },
}))