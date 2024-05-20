import { IHistory } from '@/interface/order';
import Paper from '@muiDom/Paper';
import Table from '@muiDom/Table';
import TableBody from '@muiDom/TableBody';
import TableCell from '@muiDom/TableCell';
import TableContainer from '@muiDom/TableContainer';
import TableHead from '@muiDom/TableHead';
import TableRow from '@muiDom/TableRow';
import { getDateOfSubstr, numberFormat } from '@/utils/format';
import { CycleLoading } from '@/components/common/Loading';
import { NotFind } from '@/components/common/NotFind';
import { Link } from 'react-router-dom';
import * as S from './style';


interface HistoryTableProps {
  data?: IHistory[];
  isInitLoading: boolean;
  onCancelOrder: (orderId: string) => void;
}

export const HistoryTable = ({ data, isInitLoading, onCancelOrder }: HistoryTableProps) => {
  return (
    <TableContainer component={Paper}>
      {isInitLoading ? <CycleLoading /> : data?.length ? 
        <Table sx={{ minWidth: 710 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <S.TableCell_ colSpan={2}>상품정보</S.TableCell_>
              <S.TableCell_ align="center">배송비</S.TableCell_>
              <S.TableCell_ align="center">진행상태</S.TableCell_>
              <S.TableCell_ align="center">주문변경</S.TableCell_>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <Row key={row.id} row={row} onCancelOrder={onCancelOrder} />
            ))}
          </TableBody>
        </Table> : <NotFind text='구매내역이 없습니다.' height='300px' />}
    </TableContainer>
  )
}

interface RowProps {
  row: IHistory;
  onCancelOrder: (orderId: string) => void;
}

const Row = ({ row, onCancelOrder }: RowProps) => {
  return (
    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="right">
        <S.ImageBox>
          <S.Image src={row.productImg_url} style={{ width: "60px" }} />
        </S.ImageBox>
      </TableCell>
      <TableCell component="th" scope="row" sx={{ maxWidth: "350px" }} >
        <S.Group>
          {row.deliverState ?
            <S.Done>결제완료</S.Done> :
            <S.Cancel>결제취소</S.Cancel>}
          <S.Info>{ row.orderId }</S.Info>
        </S.Group>
        <Link to={`/detail/${row.id}`} state={{id: row.id}}>
          <S.Title>{`[도서] ${row.name}`}</S.Title>
        </Link>
        <S.Group>
          <S.Price>{`${numberFormat(row.price * row.cartQuantity)}원`}</S.Price>/
          <S.Count>{`수량 ${row.cartQuantity}개`}</S.Count>
        </S.Group>
        <S.Day>{`${getDateOfSubstr(row.orderDate ?? '')}`}</S.Day>
      </TableCell>
      <TableCell align="center">무료</TableCell>
      <TableCell align="center">{row.deliverState ? "배송준비" : "배송취소"}</TableCell>
      <TableCell align="center">
        <S.CancelBtn
          variant="outlined"
          onClick={() => row.deliverState && onCancelOrder(row.orderId)}
          disabled={!row.deliverState}>
          주문취소
        </S.CancelBtn>
      </TableCell>
    </TableRow>
  )
}

