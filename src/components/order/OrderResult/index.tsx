import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CheckCircleOutline } from '@mui/icons-material';
import { Alert } from '@mui/material';
import * as S from './style';

const INIT_TIME = 10;

export const OrderResult = () => {
  const [time, setTime] = useState(INIT_TIME);
  const navigate = useNavigate();
  const locate = useLocation();
  
  useEffect(() => {
    delete locate.state;
    const timeCounterRef = window.setInterval(() => {
      setTime(prev => {
        if (prev <= INIT_TIME && prev > 0) return prev - 1;
        return prev;
      })
    }, 1000);

    const timeoutNextPage = window.setTimeout(() => {
      navigate("/history", { replace: true, state: {} });
    }, (INIT_TIME + 1) * 1000);

    return () => {
      clearTimeout(timeoutNextPage);
      clearInterval(timeCounterRef);
      navigate("/history", { replace: true, state: {} });
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Content>
        <Alert icon={<CheckCircleOutline fontSize="inherit" />} severity="success">
          결제 성공
        </Alert>
        <S.BtnGroup>
          <Link to={"/history"} replace={true} state={{}}>
            <S.Success variant="contained">{`완료 ${time}`}</S.Success>
          </Link>
        </S.BtnGroup>
      </S.Content>
    </S.Wrapper>
  )
}
