import styled from '@emotion/styled';
import { Box, ButtonBase } from '@mui/material';

export const Section = styled(Box)`
  flex: 1;
`;

export const ImageSection = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: 20px;
  overflow-x: scroll;
  height: 100px;
`;

export const ImageBox = styled.div`
  position: relative;
  flex-shrink: 0;
  height: 100%;

  &:hover {
    opacity: .7;
  }
`;

export const Del = styled(ButtonBase)`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  font-size: 14px;
  background-color: #999999;
  border-radius: 50%;
  font-weight: 600;
  z-index: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  display: inline-block;
  text-decoration: underline;
  transition: opacity 200ms ease-in-out;
  font-size: 14px;
  color: #999999;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
`;