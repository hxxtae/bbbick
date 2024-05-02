import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import { ISignup } from '@/interface/form'
import { app, db } from '@/service/firebaseApp';
import { doc, setDoc } from 'firebase/firestore';

export const useSignup = () => {
  const navigate = useNavigate();
  const onSubmit = async ({ email, password, passwordConfirm, nickname, authType }: ISignup) => {
    if (password !== passwordConfirm) return;

    try {
      const auth = getAuth(app);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: nickname }); // Firebase에서 제공하는 displayName 업데이트
      await setDoc(doc(db, "auth", user.uid), { authType, authCart: [] }); // 사용자 추가 정보를 Firestore에 저장
      navigate("/");

    } catch (err: any) {
      console.log(err)
      switch (err.code) {
        case 'auth/invalid-email': {
          alert('이메일을 바르게 입력해주세요.')
          break
        }
        case 'auth/weak-password': {
          alert('비밀번호가 너무 쉬워요.')
          break
        }
        case 'auth/email-already-in-use': {
          alert('이미 등록된 이메일 입니다.')
          break
        }
        default: {
          alert('회원가입 실패')
          break
        }
      }
    }
  }

  return { onSubmit }
}
