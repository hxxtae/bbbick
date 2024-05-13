
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import { Group, InputText, Title } from '@/components/form/Input';
import { useFetchAuth } from '@/hooks/auth/useFetchAuth';
import { PostCode } from '@/components/common/PostCode';
import { useSetAuth } from '@/hooks/auth/useSetAuth';
import { AddressForm } from '@/interface/auth';
import * as S from './style';

const Address = Object.assign(Group, {
  Title,
  InputText
})

export const AuthAddress = () => {
  const { authData } = useFetchAuth();
  const { setAuthAddress } = useSetAuth();
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
    
    if (window.confirm("배송지 정보를 저장하시겠습니까?")) {
      setAuthAddress(data);
    }
  }

  const onSetPost = (newPost: string) => {
    setValue('address', newPost);
  }
  
  useEffect(() => {
    setValue('addressName', authData?.authAddress?.addressName ?? '');
    setValue('address', authData?.authAddress?.address ?? '');
    setValue('addressDetail', authData?.authAddress?.addressDetail ?? '');
  }, [authData, setValue]);

  return (
    <S.DeliverBlock>
      <S.SubTitle>배송지 관리</S.SubTitle>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Address>
          <Address.Title title="배송지명*" id="addressName" />
          <Address.InputText type="text" resister={register("addressName", {
            maxLength: 60,
            value: authData?.authAddress?.addressName,
          })} />
        </Address>
          <Address>
          <Address.Title title="배송 주소*" id="address" />
          <S.Row>
            <Address.InputText type="text" resister={register("address", {
              maxLength: 60,
              value: authData?.authAddress?.address,
            })} readOnly={true} />
            <PostCode setPost={onSetPost} />
          </S.Row>
        </Address>
        <Address>
          <Address.Title title="상세주소" id="addressDetail" />
          <Address.InputText type="text" resister={register("addressDetail", {
            maxLength: 60,
            value: authData?.authAddress?.addressDetail
          })} />
        </Address>
        <S.BtnGroup>
          <S.Save type="submit" variant="contained">배송지 저장</S.Save>
        </S.BtnGroup>
      </S.Form>
    </S.DeliverBlock>
  )
}