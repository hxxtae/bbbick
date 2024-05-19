import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import { ISignin } from '@/interface/form'
import { app } from '@/service/firebaseApp';

export const useSignin = () => {
  const navigate = useNavigate();
  const onSubmit = async ({ email, password }: ISignin) => {

    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err: any) {
      switch (err.code) {
        case 'auth/invalid-credential': {
          alert('유효한 계정이 아닙니다.')
          break
        }
        default: {
          alert('로그인 실패')
          break
        }
      }
    }
  }

  return { onSubmit }
}
