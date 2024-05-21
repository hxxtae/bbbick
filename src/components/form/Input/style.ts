import styled from '@emotion/styled';
import Checkbox from '@muiDom/Checkbox';
import InputLabel from '@muiDom/InputLabel';
import TextField from '@muiDom/TextField';
import Select from '@muiDom/Select';

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

export const Title = styled(InputLabel)`
  font-size: 14px;
`

export const Input = styled(TextField)`
  font-size: 14px;
  width: inherit;
`

export const CheckBox = styled(Checkbox)`
  
`

export const SelectBox = styled(Select)`
  font-size: 14px;
  width: inherit;
`
