import { Portal } from '@/components/common/Portal';
import { ManageCreateForm } from './ManageCreateForm';
import { ModalToggle } from '@/components/common/ModalToggle';
import * as S from './style';
import { ManageList } from './ManageList';

export const Management = () => {
  return (
    <S.Section sx={{ bgcolor: "bg.card"}}>
      <S.Block>
        <S.Title sx={{ fontSize: 18, fontWeight: 600 }}>상품 관리</S.Title>
      </S.Block>
      <ModalToggle toggleName='추가하기'>
        <Portal children={<ManageCreateForm />} />
      </ModalToggle>
      <S.Block sx={{ bgcolor: "bg.main"}}>
        <ManageList />
      </S.Block>
    </S.Section>
  )
}