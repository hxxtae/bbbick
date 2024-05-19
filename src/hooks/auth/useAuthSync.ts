import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { app, db } from '@/service/firebaseApp';
import { IAuth } from '@/interface/auth';
import { useAuthStore } from '@/store/useAuthStore'
import { doc, getDoc } from 'firebase/firestore';

export const useAuthSync = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setAuth } = useAuthStore((state) => state);
  
  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const getAuthStoreData = async () => {
          const dataSnap = await getDoc(doc(db, "auth", user?.uid)); // 사용자 추가 데이터 가져오기

          setAuth({
            uid: user.uid,
            email: user.email,
            nickname: user.displayName,
            profileImg: user.photoURL || null,
            authType: dataSnap.data()?.authType || null,
            authAddress: dataSnap.data()?.authAddress || null,
          } as IAuth)
          setIsLoading(false)
        }
        try {
          getAuthStoreData();
        } catch (err) {
          console.error("AuthStoreData Fetch Fail: ", err)
        }
      } else {
        setAuth(null)
        setIsLoading(false)
      }
    });
    
  }, [setAuth])

  return { isLoading }
}