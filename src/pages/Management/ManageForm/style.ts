import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  height: 100%;
  padding: 40px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
`;

export const Submit = styled(Button)`

`;
