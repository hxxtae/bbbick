import { Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import React from 'react';

import { BOOK_CATEGORY_1, BOOK_CATEGORY_2 } from '@/constants/product';
import { BooksKinds, CategoryKey } from '@/interface/products';
import { usePageFetchProduct } from '@/hooks/product/usePageFetchProduct';
import { ObserveElement } from '@/components/common/ObserveElement';
import { CycleLoading, LineLoading } from '@/components/common/Loading';
import { NotFind } from '@/components/common/NotFind';
import { numberFormat } from '@/utils/format';
import { Divider } from '@mui/material';
import * as S from './style';

interface BooksProps {
  category: BooksKinds;
  category1?: CategoryKey | "000";
  category2?: string;
}

export const BooksScroll = ({ category, category1, category2 }: BooksProps) => {
  const { products, isFetchingNextPage, hasNextPage, fetchNextPage, initLoading, isRefetching } = usePageFetchProduct({ category, category1, category2 });
  
  return (
    <S.List>
      {isRefetching && <LineLoading fixed={true} />}
      {initLoading ? <CycleLoading/> : products?.length ? products.map((item) => (
        <React.Fragment key={item.id}>
          <S.Item  >
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
          <Divider variant="fullWidth" />
        </React.Fragment>
      )) : <NotFind text="상품이 존재하지 않습니다." height="0px" />}
      <ObserveElement isLoading={isFetchingNextPage} hasNext={hasNextPage} callback={fetchNextPage} />
    </S.List>
  )
}