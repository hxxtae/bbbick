import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { useMutation, useQueryClient } from 'react-query';

import { queryKeys } from '@/constants/keys';
import { useAuthStore } from '@/store/useAuthStore';
import { app } from '@/service/firebaseApp';

export const useSignout = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const queryClient = useQueryClient();

  const setSignoutAuth = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[Error] Signout Error: " + error.message);
      } else {
        console.error("[Error] Signout Error: " + error)
      }
    }
  }

  const { isLoading: signoutLoading , mutate: signoutMutate } = useMutation(() => setSignoutAuth(), {
    mutationKey: queryKeys.auth.all,
    onSuccess: () => {
      setAuth(null)
      queryClient.removeQueries();
      navigate("/");
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error("[Error] Signout Error: " + error.message);
      } else {
        console.error("[Error] Signout Error: " + error)
      }
    }
  })

  const onSignout = () => {
    if (signoutLoading) return;
    signoutMutate();
  }

  return { signoutLoading, onSignout }
}