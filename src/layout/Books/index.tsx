import { Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { useFetchProduct } from '@/hooks/product/useFetchProduct';
import { BOOK_CATEGORY_1, BOOK_CATEGORY_2 } from '@/constants/product';
import { OrderByButton } from '@/components/common/OrderByButton';
import { BooksKinds, CategoryKey } from '@/interface/products';
import { numberFormat } from '@/utils/format';
import * as S from './style';

interface BooksProps {
  title: string;
  category: BooksKinds;
}

export const Books = ({ title, category }: BooksProps) => {
  const { products, ...orderBy } = useFetchProduct(category);

  return (
    <S.List>
      <S.BtnGroup>
      <S.SubTitle sx={{ fontWeight: 600 }}>{title}</S.SubTitle>
      {category === "recent" && <>
        <OrderByButton title="최신순" kind="date" orderKind={orderBy.pickOrder} orderState={orderBy.orderDate} setOrderKind={orderBy.togglePickOrder} setOrderState={orderBy.toggleOrderDate} />
        <OrderByButton title="가격순" kind="price" orderKind={orderBy.pickOrder} orderState={orderBy.orderPrice} setOrderKind={orderBy.togglePickOrder} setOrderState={orderBy.toggleOrderPrice} /> </>}
      </S.BtnGroup>
      {products?.map((item) => (
        <S.Item key={item.id} >
          <S.ImageBox>
            <S.ImageWrapper>
              <Link to={`/${category}/${item.id}`} state={item}>
                <S.Image src={item.productImg_url[0].url} style={{ width: "125px" }} />
              </Link>
            </S.ImageWrapper>
            <S.ImageBottom sx={{ bgcolor: "bg.card" }}>
              <Favorite sx={{ fontSize: "16px", color: "error.dark" }} />
              <S.Like sx={{ fontSize: "14px" }}>{ item.like }</S.Like>
            </S.ImageBottom>
          </S.ImageBox>
          <S.Content>
            <Link to={`/${category}/${item.id}`} state={item}>
              <S.Title>{item.name}</S.Title>
            </Link>
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
        </S.Item>
      ))}
    </S.List>
  )
}