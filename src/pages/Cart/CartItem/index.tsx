import { useForm } from 'react-hook-form';

import { useSetQuantityCart } from '@/hooks/cart/useSetQuantityCart';
import { InputText } from '@/components/form/Input';
import { CartQuantityForm } from '@/interface/form';
import { numberFormat } from '@/utils/format';
import { CartType } from '@/interface/cart';
import * as S from './style';

interface CartItemProps {
  data: CartType;
}

export const CartItem = ({ data }: CartItemProps) => {
  const { register, handleSubmit } = useForm<CartQuantityForm>()
  const { loadQuantity, setQuantity, removeLoading, removeCart } = useSetQuantityCart({ data });

  return (
    <>
      <S.TableRow_
        key={data.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        {/* 이미지 */}
        <S.TableCell_ component="th" scope="row" sx={{ width:  60 }}>
          <S.ImageBox>
            <S.Image src={data.productImg_url} style={{ width: "60px" }} />
          </S.ImageBox>
        </S.TableCell_>
        {/* 이름 및 텍스트 */}
        <S.TableCell_ align="left" sx={{ maxWidth: 250 }}>
          <S.Text>[도서] {data.name}</S.Text>
          <S.Text>{data.writer}&nbsp;|&nbsp;{data.publisher}</S.Text>
        </S.TableCell_>
        {/* 수량 */}
        <S.TableCell_ align="center" sx={{ width: 120 }}>
          <S.Form onSubmit={handleSubmit(setQuantity)}>
            <InputText type="number" resister={register("newQuantity", {
              value: data.cartQuantity,
            })} />
            <S.Submit type="submit" variant="contained" disabled={loadQuantity} sx={{ width: 1 }}>변경</S.Submit>
          </S.Form>
        </S.TableCell_>
        {/* 가격 */}
        <S.TableCell_ align="right">{numberFormat(data.price * data.cartQuantity)}<S.Sub1>원</S.Sub1></S.TableCell_>
        {/* 제어 */}
        <S.TableCell_ align="right">
          <S.Remove
            variant="contained"
            disabled={removeLoading}
            onClick={() => removeLoading || removeCart(data.id)}>제거
          </S.Remove>
        </S.TableCell_>
      </S.TableRow_>
    </>
  )
}