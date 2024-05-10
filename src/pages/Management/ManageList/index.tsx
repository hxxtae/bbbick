import { useFetchProduct } from '@/hooks/product/useFetchProduct'
import { BOOK_CATEGORY_1, BOOK_CATEGORY_2 } from '@/constants/product';
import { useDelProduct } from '@/hooks/product/useDelProduct';
import { numberFormat } from '@/utils/format';
import { CategoryKey } from '@/interface/products';
import { ModalToggle } from '@/components/common/ModalToggle';
import { Portal } from '@/components/common/Portal';
import { ManageForm } from '../ManageForm';

import * as S from './style';

export const ManageList = () => {
  const { products } = useFetchProduct('recent');
  const { delProduct } = useDelProduct();
  
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
              <S.Text>
                {numberFormat(item.regularPrice)}<S.Sub1>원</S.Sub1>
              </S.Text>
              <S.Text sx={{ fontSize: 18, color: "error.light" }}>
                {numberFormat(item.price)}<S.Sub1>원</S.Sub1><S.Sub2>{ `(${item.discountRate}% 할인)` }</S.Sub2>
              </S.Text>
              <S.ChipBox>
                <S.Chipe variant="filled" label={item.writer} />
                <S.Chipe variant="filled" label={BOOK_CATEGORY_1[item.category1]} />
                <S.Chipe variant="filled" label={BOOK_CATEGORY_2[item.category1 as CategoryKey][item.category2]} />
              </S.ChipBox>
              <S.Text sx={{ opacity: .6 }}>{item.publishDate} 출간</S.Text>
              <S.Text sx={{ opacity: .6 }}>{item.publisher}</S.Text>
            </S.Content>
            <S.ButtonGroup>
              <ModalToggle toggleName='수정하기' iconShow={false}>
                <Portal children={<ManageForm productData={item} />} />
              </ModalToggle>
              <S.DelButton variant="outlined" onClick={() => delProduct(item.id)}>삭제하기</S.DelButton>
            </S.ButtonGroup>
          </S.Item>
        ))}
      </S.List>
    </S.Section>
  )
}