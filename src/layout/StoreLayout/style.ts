
import { LAYOUT_OF_HEIGHT } from '@/constants/style';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  
`;

export const Container = styled.main`
  height: calc(100vh - ${LAYOUT_OF_HEIGHT.header}px);
  display: flex;
`