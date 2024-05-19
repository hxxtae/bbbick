import { FunnelProps, StepProps } from '@/hooks/common/useFunnel';
import { IOrder, StepType } from '@/interface/order';
import { OrderAddress } from '../OrderAddress';
import { OrderResult } from '../OrderResult';
import { OrderList } from '../OrderList';


export interface OrderSetupProps {
  steps: StepType[];
  nextClickHandler: (nextStep: string) => void;
  prevClickHandler: (prevStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
  order: IOrder;
  onSetOrder: (newOrder: Omit<IOrder, "orderId" | "orderCarts" | "orderPrice">) => void;
}

export const OrderSetup = ({ steps, Funnel, Step, nextClickHandler, prevClickHandler, order, onSetOrder }: OrderSetupProps) => {
  return (
    <>
      <Funnel>
        <Step name="배송지입력">
          <OrderAddress
            onNext={() => nextClickHandler(steps[1].name)}
            onSetOrder={onSetOrder}
            order={order}
          />
        </Step>

        <Step name="주문목록확인">
          <OrderList
            onPrev={() => prevClickHandler(steps[0].name)}
            onNext={() => nextClickHandler(steps[2].name)}
            order={order}
          />
        </Step>

        <Step name="결제완료">
          <OrderResult />
        </Step>
      </Funnel>
    </>
  )
}