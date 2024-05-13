import { useMutation, useQueryClient } from 'react-query';
import { doc, updateDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { useAuthStore } from '@/store/useAuthStore'
import { app, db } from '@/service/firebaseApp';
import { AddressForm } from '@/interface/auth';
import { queryKeys } from '@/constants/keys';

export const useSetAuth = () => {
  const { auth, setAuth } = useAuthStore();
  const authApp = getAuth(app);
  const queryClient = useQueryClient();
  
  // -------------------
  // 사용자 주소 정보 변경 API
  // -------------------
  const setAuthStore = async (data: AddressForm) => {
    if (!auth?.uid) {
      alert("새로고침 후 다시 시도해주세요.");
      return;
    }
    if (!authApp.currentUser?.uid) {
      alert("로그인 후 다시 시도해주세요.");
      return;
    }

    try {
      const authRef = doc(db, "auth", auth.uid);
      await updateDoc(authRef, {
        authAddress: { ...data }
      });
      setAuth({
        ...auth,
        authAddress: {
          ...data
        }
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[Error] Fetch Auth Error: " + error.message);
      } else {
        console.error("[Error] Fetch Auth Error: " + error);
      }
    }
  }

  const { isLoading: isAuthLoading, mutate: authAddressMutate } = useMutation((addressData: AddressForm) => setAuthStore(addressData), {
    mutationKey: queryKeys.auth.address(),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.auth.all);
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error("[Error] Fetch Auth Error: " + error.message);
      } else {
        console.error("[Error] Fetch Auth Error: " + error);
      }
    }
  });

  const setAuthAddress = (data: AddressForm) => {
    if (isAuthLoading) return;
    authAddressMutate(data);
  }

  return { setAuthAddress }
}