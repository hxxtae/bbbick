import { doc, getDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import { useQuery } from 'react-query';

import { useAuthStore } from '@/store/useAuthStore'
import { queryKeys } from '@/constants/keys';
import { db } from '@/service/firebaseApp';
import { IAuth } from '@/interface/auth';

export const useFetchAuth = () => {
  const auth = useAuthStore((state) => state.auth);
  
  const getAuthStore = async () => {
    if (!auth?.uid) return;

    try {
      const post = await getDoc(doc(db, "auth", auth.uid));
      return post.data() as IAuth;
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[Error] Fetch Cart Error: " + error.message);
      } else {
        console.error("[Error] Fetch Cart Error: " + error)
      }
    }
  }

  const { data: authData } = useQuery({
    queryKey: queryKeys.auth.address(),
    queryFn: getAuthStore,
    enabled: !!auth?.uid,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return { authData }
}