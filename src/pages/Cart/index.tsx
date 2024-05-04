import { Paper, TableContainer } from '@mui/material';
import { useFetchCart } from '@/hooks/cart/useFetchCart';
import { CartItem } from './CartItem';
import { CartPayment } from './CartPayment';
import * as S from './style';

export const Cart = () => {
  const { data } = useFetchCart();
  
  return (
    <S.Section sx={{ bgcolor: "bg.card"}}>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <S.Title sx={{ fontWeight: 600 }} >장바구니</S.Title>
        <TableContainer component={Paper}>
          <S.Table_ sx={{ minWidth: 650 }} aria-label="simple table">
            <S.TableHead_>
              <S.TableRow_>
                <S.TableCell_ colSpan={2}>상품정보</S.TableCell_>
                <S.TableCell_ align="center">수량</S.TableCell_>
                <S.TableCell_ align="right">상품금액</S.TableCell_>
                <S.TableCell_ align="right">제어</S.TableCell_>
              </S.TableRow_>
            </S.TableHead_>
            <S.TableBody_>
              {data?.map((cart) => (
                <CartItem key={cart.id} data={cart} />
              ))}
            </S.TableBody_>
          </S.Table_>
        </TableContainer>
      </S.Block>
      <CartPayment carts={data} />
    </S.Section>
  )
}