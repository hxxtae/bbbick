import Paper from '@muiDom/Paper';
import TableContainer from '@muiDom/TableContainer';
import { useFetchCart } from '@/hooks/cart/useFetchCart';
import { useAuthStore } from '@/store/useAuthStore';
import { CartPayment } from './CartPayment';
import { CartItem } from './CartItem';
import * as S from './style';

export const Cart = () => {
  const { data, getCartTotalPay, getCartTotalQuantity } = useFetchCart();
  const auth = useAuthStore((state) => state.auth);
  
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
      <CartPayment
        authData={auth}
        carts={data}
        totalPrice={getCartTotalPay("price")}
        totalRegular={getCartTotalPay("regularPrice")}
        totalQuantity={getCartTotalQuantity()} />
    </S.Section>
  )
}