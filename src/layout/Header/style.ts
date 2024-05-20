import Avatar from '@muiDom/Avatar';
import Typography from '@muiDom/Typography';
import styled from '@emotion/styled';
import { LAYOUT_OF_HEIGHT, LAYOUT_OF_WIDTH } from '@/constants/style';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(${LAYOUT_OF_WIDTH.pc}px - 2*${LAYOUT_OF_WIDTH.gutter}px);
  width: 100%;
  height: ${LAYOUT_OF_HEIGHT.header}px;
`;

export const Left = styled.div`
  
`;

export const Img = styled.img`
  display: inline-block;
  height: 24px;
  min-height: 24px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
`;

export const UserImage = styled(Avatar)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const UserID = styled(Typography)`
  font-size: 14px;
`;
