import { UseFormRegisterReturn } from 'react-hook-form';

import { useFiles } from '@/hooks/form/useFiles';
import { IProductFiles } from '@/interface/form';
import { CycleLoading } from '@/components/common/Loading';
import * as S from './style';

interface FileProps {
  register: UseFormRegisterReturn;
  initFiles?: IProductFiles[];
}

export const Files = ({ register, initFiles }: FileProps) => {
  const { isLoading, fileList, addFile, delFile } = useFiles({ basePath: "images", initFiles });

  return (
    <S.Section>
      <S.ImageSection sx={{ borderColor: "error.main", border: 1, borderRadius: 1.5 }}>
        {isLoading ? <CycleLoading /> : fileList?.map(({ filename, url }) => (
          <S.ImageBox key={filename}>
            <S.Del onClick={() => delFile(filename)}>X</S.Del>
            <S.Image alt="upload image" src={url} />
          </S.ImageBox>))}
      </S.ImageSection>
      <S.Label htmlFor='productImage' onChange={addFile}>
        상품 이미지 추가하기
        <input type='file' multiple id="productImage" style={{ display: 'none' }} accept=".jpg,.jpeg,.webp" {...register}  />
      </S.Label>
    </S.Section>
  );
};