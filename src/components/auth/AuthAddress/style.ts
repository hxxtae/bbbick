import styled from '@emotion/styled';
import Button from '@muiDom/Button';
import Typography from '@muiDom/Typography';

export const SubTitle = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const DeliverBlock = styled.div`

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-end;
  gap: 10px;

  & input {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 10px;
`;

export const BtnGroup = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;
`;

export const Save = styled(Button)`

`;
