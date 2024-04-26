
import { LAYOUT_OF_WIDTH } from '@/constants/style';
import styled from '@emotion/styled';

export const Wrapper = styled.section`
  max-width: ${LAYOUT_OF_WIDTH.pc}px;
  margin: 0 auto;
  padding: 0 ${LAYOUT_OF_WIDTH.gutter}px;

  @media only screen and (max-width: ${LAYOUT_OF_WIDTH.modile}px) {
    
  }
`;

// const StatWrapper = styled('div')(
//   ({ theme }) => `
//   background-color: ${theme};
//   min-width: 300px;
// `,
// );