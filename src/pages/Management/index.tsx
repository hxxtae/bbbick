import { SidePortal } from '@/components/common/Portal';
import { ManageForm } from './ManageForm';
import { ButtonToggle } from '@/components/common/ModalToggle';
import { ManageList } from './ManageList';
import * as S from './style';

export const Management = () => {
  return (
    <S.Section sx={{ bgcolor: "bg.card"}}>
      <S.Block sx={{ bgcolor: "bg.main" }}>
        <S.Wrapper>
          <S.Title sx={{ fontSize: 18, fontWeight: 600 }}>상품 관리</S.Title>
          <ButtonToggle toggleName='추가하기'>
            <SidePortal children={<ManageForm />} />
          </ButtonToggle>
        </S.Wrapper>
        <ManageList />
      </S.Block>
    </S.Section>
  )
}