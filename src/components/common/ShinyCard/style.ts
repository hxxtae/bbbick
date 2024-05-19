import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(105deg, 
    transparent 40%, 
    rgba(255, 255, 255, .4) 50%, 
    rgba(200, 200, 200, .4) 50%,
    transparent 54%);
  background-size: 150% 150%;
  background-position: 100%;

  filter: brightness(1.1) opacity(0.8);
  mix-blend-mode: color-dodge;
`