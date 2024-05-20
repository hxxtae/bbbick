import { BooksKinds, CategoryKey } from '@/interface/products';
import { usePageFetchProduct } from '@/hooks/product/usePageFetchProduct';
import { ObserveElement } from '@/components/common/ObserveElement';
import { CycleLoading, LineLoading } from '@/components/common/Loading';
import { NotFind } from '@/components/common/NotFind';
import { Book } from '../Book';
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
        <Book key={item.id} item={item} category={category} />
      )) : <NotFind text="상품이 존재하지 않습니다." height="0px" />}
      <ObserveElement isLoading={isFetchingNextPage} hasNext={hasNextPage} callback={fetchNextPage} />
    </S.List>
  )
}