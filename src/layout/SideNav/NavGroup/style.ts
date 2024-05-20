import styled from '@emotion/styled';
import Typography from '@muiDom/Typography';
import ListItemText from '@muiDom/ListItemText';
import IconButton from '@muiDom/IconButton';

export const H1 = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-top: 20px;
`;

export const H2 = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
`;

export const Text = styled(ListItemText)`
  font-size: 14px;
  font-weight: 600;
`;

export const IconBox = styled(IconButton)`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;
