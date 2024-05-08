import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Group, InputText, Title } from '@/components/form/Input';
import { PostCode } from '@/components/common/PostCode';
import { AddressForm } from '@/interface/auth';
import { IOrder } from '@/interface/order';
import * as S from './style';

const Address = Object.assign(Group, {
  Title,
  InputText
})

interface OrderAddressProps {
  onNext: () => void;
  onSetOrder: (newOrder: Omit<IOrder, "orderId" | "orderCarts" | "orderPrice">) => void;
  order: IOrder;
}

export const OrderAddress = ({ onNext, onSetOrder, order }: OrderAddressProps) => {
  const { orderAddress } = order;
  const { register, handleSubmit, setValue } = useForm<AddressForm>();

  const onSubmit = (data: AddressForm) => {
    if (!data.addressName) {
      alert("배송지명을 작성해주세요.");
      return;
    }
    if (!data.address) {
      alert("배송 주소를 작성해주세요.");
      return;
    }
    onSetOrder({
      orderAddress: { ...data },
      orderDate: new Date()?.toLocaleDateString("ko", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    })
    onNext();
  }

  const onSetPost = (newPost: string) => {
    setValue('address', newPost);
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Address>
          <Address.Title title="배송지명*" id="addressName" />
          <Address.InputText type="text" resister={register("addressName", {
            maxLength: 60,
            value: orderAddress?.addressName,
          })} />
        </Address>
          <Address>
          <Address.Title title="배송 주소*" id="address" />
          <S.Row>
            <Address.InputText type="text" resister={register("address", {
              maxLength: 60,
              value: orderAddress?.address,
            })} readOnly={true} />
            <PostCode setPost={onSetPost} />
          </S.Row>
        </Address>
        <Address>
          <Address.Title title="상세주소" id="addressDetail" />
          <Address.InputText type="text" resister={register("addressDetail", {
            maxLength: 60,
            value: orderAddress?.addressDetail
          })} />
        </Address>
        <S.BtnGroup>
          <Link to={"/cart"}><S.PrevBtn type="button" variant="outlined">이전</S.PrevBtn></Link>
          <S.Next type="submit" variant="contained">다음</S.Next>
        </S.BtnGroup>
      </S.Form>
    </S.Wrapper>
  )
}