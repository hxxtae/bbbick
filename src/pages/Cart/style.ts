import styled from '@emotion/styled';
import Box from '@muiDom/Box';
import Container from '@muiDom/Container';
import Typography from '@muiDom/Typography';
import Table from '@muiDom/Table';
import TableBody from '@muiDom/TableBody';
import TableCell from '@muiDom/TableCell';
import TableContainer from '@muiDom/TableContainer';
import TableHead from '@muiDom/TableHead';
import TableRow from '@muiDom/TableRow';
import Button from '@muiDom/Button';

export const Section = styled(Container)`
  padding-top: 20px;
`;

export const Block = styled(Box)`
  padding: 20px 24px;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const Title = styled(Typography)`
  font-size: 18px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export const ContentBox = styled(Box)`
  
`;

export const Form = styled.form`

`;

export const Submit = styled(Button)`
  height: 30px;
  margin-top: 5px;
`;

export const ImageBox = styled.div`
  
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Text = styled(Typography)`
  font-size: 14px;
  padding: 5px 0;
`;

export const Remove = styled(Button)`
  height: 30px;
`;

export const TableContainer_ = styled(TableContainer)``;

export const Table_ = styled(Table)``;

export const TableHead_ = styled(TableHead)``;

export const TableBody_ = styled(TableBody)``;

export const TableRow_ = styled(TableRow)``;

export const TableCell_ = styled(TableCell)`
  font-weight: 600;
`;