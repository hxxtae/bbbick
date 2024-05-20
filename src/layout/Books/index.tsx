import { useFetchProduct } from '@/hooks/product/useFetchProduct';
import { OrderByButton } from '@/components/common/OrderByButton';
import { BooksKinds } from '@/interface/products';
import { Book } from '../Book';
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
        <Book key={item.id} item={item} category={category} />
      ))}
    </S.List>
  )
}