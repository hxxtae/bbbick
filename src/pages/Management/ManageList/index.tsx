import { useFetchProduct } from '@/hooks/product/useFetchProduct'

import * as S from './style';
import { numberFormat } from '@/utils/format';
import { BOOK_CATEGORY_VALUE } from '@/constants/product';

export const ManageList = () => {
  const { products } = useFetchProduct();
  
  return (
    <S.Section>
      <S.List>
        {products?.map((item) => (
          <S.Item key={item.id} >
            <S.ImageBox>
              <S.Image src={item.productImg_url[0].url} style={{ width: "125px" }} />
            </S.ImageBox>
            <S.Content>
              <S.Title>{item.name}</S.Title>
              <S.Text sx={{ color: "error.light"}}>{numberFormat(item.regularPrice)}<S.Sub1>원</S.Sub1></S.Text>
              <S.Text sx={{ fontSize: 18 }}>
                {numberFormat(item.price)}<S.Sub1>원</S.Sub1><S.Sub2>{ `(${item.discountRate}% 할인)` }</S.Sub2>
              </S.Text>
              <S.ChipBox>
                <S.Chipe variant="filled" label={item.writer} />
                {/* <S.Chipe variant="filled" label={BOOK_CATEGORY_VALUE[]} /> */}
              </S.ChipBox>
              <S.Text>{item.publishDate}</S.Text>
            </S.Content>
          </S.Item>
        ))}
      </S.List>
    </S.Section>
  )
}