import { useDaumPostcodePopup, Address } from 'react-daum-postcode';
import * as S from './style';

interface PostCodeProps {
  setPost: (newPost: string) => void;
}

export const PostCode = ({ setPost }: PostCodeProps) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    // console.log(fullAddress); // ex) 서울 마포구 가양대로 1 (상암동)
    setPost(fullAddress);
  }

  const handleClick = () => {
    open({ onComplete: handleComplete })
  }
  return (
    <S.OpenAddress variant="outlined" type="button" onClick={handleClick}>주소 찾기</S.OpenAddress>
  )
}