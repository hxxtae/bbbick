import styled from '@emotion/styled';
import Box from '@muiDom/Box';
import Button from '@muiDom/Button';
import Container from '@muiDom/Container';
import Typography from '@muiDom/Typography';

export const Section = styled(Container)`
  padding-top: 20px;
`;

export const Block = styled(Box)`
  padding: 20px 24px;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const Title = styled(Typography)`
  font-size: 30px;
  letter-spacing: -1px;
`;

export const SubTitle = styled(Typography)`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Desc = styled(Typography)`
  font-size: 14px;
  opacity: .5;
  margin-bottom: 40px;
`

export const GoButton = styled(Button)`

`;
