import { NavigateOptions } from 'react-router-dom';
import { useState } from 'react';

import { withOrderAccess } from '@/components/auth/withOrderAccess';
import { OrderSetup } from '@/components/order/OrderSetup';
import { useFunnel } from '@/hooks/common/useFunnel';
import { IOrder, StepType } from '@/interface/order';
import * as S from './style';

const steps: StepType[] = [
  { no: "1", name: "배송지입력", desc: "배송지 정보를 입력해주세요." },
  { no: "2", name: "주문목록확인", desc: "주문 목록을 다시 확인해주세요."},
  { no: "3", name: "결제완료", desc: "결제가 완료되었습니다." }
]

interface OrderProps {
  orderState?: NavigateOptions;
}

export const Order = withOrderAccess(({ orderState }: OrderProps) => {
  const [order, setOrder] = useState<IOrder>({
    ...orderState?.state
  });
  
  const { Funnel, Step, nextClickHandler, prevClickHandler, currentStep } = useFunnel(steps[0].name);
  const onSetOrder = ({orderAddress, orderDate}: Omit<IOrder, "orderId" | "orderCarts" | "orderPrice">) => {
    setOrder((prev) => ({
      ...prev,
      orderAddress,
      orderDate
    }))
  }
  const getStepNo = steps.findIndex((step) => step.name === currentStep) + 1;
  const getStepDesc = steps.find((step) => step.name === currentStep);

  return (
    <S.Section sx={{ bgcolor: "bg.card"}}>
      <S.Block sx={{ bgcolor: "bg.main", mb: "20px" }}>
        <S.StepBlock>
          <S.StepName>STEP {getStepNo}</S.StepName>
          <S.StepDesc>{getStepDesc?.desc}</S.StepDesc>
        </S.StepBlock>
        <OrderSetup
          Funnel={Funnel}
          Step={Step}
          steps={steps}
          nextClickHandler={nextClickHandler}
          prevClickHandler={prevClickHandler}
          order={order}
          onSetOrder={onSetOrder}
        />
      </S.Block>
    </S.Section>
  )
})
