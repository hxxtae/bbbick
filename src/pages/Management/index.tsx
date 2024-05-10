import { Portal } from '@/components/common/Portal';
import { ManageForm } from './ManageForm';
import { ModalToggle } from '@/components/common/ModalToggle';
import { ManageList } from './ManageList';
import * as S from './style';

export const Management = () => {
  return (
    <S.Section sx={{ bgcolor: "bg.card"}}>
      <S.Block sx={{ bgcolor: "bg.main" }}>
        <S.Wrapper>
          <S.Title sx={{ fontSize: 18, fontWeight: 600 }}>상품 관리</S.Title>
          <ModalToggle toggleName='추가하기'>
            <Portal children={<ManageForm />} />
          </ModalToggle>
        </S.Wrapper>
        <ManageList />
      </S.Block>
    </S.Section>
  )
}