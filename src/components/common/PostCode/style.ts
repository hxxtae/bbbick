import { styled as style } from '@mui/system'
import { Button } from '@mui/material';

export const OpenAddress = style(Button)(() => ({
  flexShrink: 0,
  backgroundColor: "#FFFFFF",
  ":hover": {
    backgroundColor: "#E6EBFF",
  },
}))