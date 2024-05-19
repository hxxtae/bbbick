import { ObserveElement } from '@/components/common/ObserveElement';
import { useFetchOrder } from '@/hooks/order/useFetchOrder';
import { useSetOrder } from '@/hooks/order/useSetOrder';
import { HistoryTable } from './HistoryTable';
import * as S from './style';

export const History = () => {
  const { historys, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading } = useFetchOrder();
  const { onCancelOrder } = useSetOrder();
  
  return (
    <S.Section sx={{ bgcolor: "bg.card"}}>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <S.Title sx={{ fontWeight: 600 }} >구매내역</S.Title>
        <HistoryTable data={historys} isInitLoading={isLoading} onCancelOrder={onCancelOrder} />
        <ObserveElement isLoading={isFetchingNextPage} hasNext={hasNextPage} callback={fetchNextPage} />
      </S.Block>
    </S.Section>
  )
}