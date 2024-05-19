import { getAuth, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useMutation, useQueryClient } from 'react-query';
import { doc, updateDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import React from 'react';

import { AddressForm, SetAuthType } from '@/interface/auth';
import { app, db, storage } from '@/service/firebaseApp';
import { imageNameValidate } from '@/utils/regexps';
import { useAuthStore } from '@/store/useAuthStore';
import { queryKeys } from '@/constants/keys';
import { pathObj } from '@/constants/path';

export const useSetAuth = () => {
  const { auth, setAuth } = useAuthStore((state) => state);
  const authApp = getAuth(app);
  const queryClient = useQueryClient();
  
  // -------------------
  // 사용자 주소 정보 변경 API
  // -------------------
  const setAuthStoreOfAddress = async (data: AddressForm) => {
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
        console.error("[Error] Set Auth Address Error: " + error.message);
      } else {
        console.error("[Error] Set Auth Address Error: " + error);
      }
    }
  }

  // -------------------
  // 사용자 기본 정보 변경 API
  // - 닉네임
  // -------------------
  const setAuthStore = async (data: SetAuthType) => {
    if (!data.nickname) return;
    if (!auth?.uid) {
      alert("새로고침 후 다시 시도해주세요.");
      return;
    }
    if (!authApp.currentUser?.uid) {
      alert("로그인 후 다시 시도해주세요.");
      return;
    }

    try {
      const authRef = authApp.currentUser;
      const { nickname } = data;

      //  NOTE: 닉네임 변경
      if (nickname) {
        updateProfile(authRef, {
          displayName: nickname
        });
        setAuth({
          ...auth,
          nickname: nickname
        });
      }
      
      alert("저장되었습니다.")
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[Error] Set Auth Nickname Error: " + error.message);
      } else {
        console.error("[Error] Set Auth Nickname Error: " + error);
      }
    }
  }

  // -------------------
  // 사용자 기본 정보 변경 API
  // - 비밀번호
  // -------------------
  const setAuthStoreOfPassword = async () => {
    if (!auth?.uid) {
      alert("새로고침 후 다시 시도해주세요.");
      return;
    }
    if (!authApp.currentUser?.uid || !auth.email) {
      alert("로그인 후 다시 시도해주세요.");
      return;
    }

    sendPasswordResetEmail(authApp, auth.email)
      .then(() => {
        // NOTE: 비밀번호 재설정 메일이 발송되었습니다!
        alert("비밀번호 변경 메일을 보냈습니다. 메일을 확인해 주세요.");
        
      }).catch((error) => {
        // NOTE: 비밀번호 재설정 메일 발송 실패!
        if (error instanceof FirebaseError) {
          console.error("[Error] Set Auth Password Error: " + error.message);
        } else {
          console.error("[Error] Set Auth Password Error: " + error);
        }
      })
  }

  // -------------------
  // 사용자 기본 정보 변경 API
  // - 프로필 이미지
  // -------------------
  const setAuthStoreOfProfileImg = async (data: SetAuthType) => {
    const imageFile = data.profileImg;
    if (!imageFile) return;
    if (!auth?.uid) {
      alert("새로고침 후 다시 시도해주세요.");
      return;
    }
    if (!authApp.currentUser?.uid) {
      alert("로그인 후 다시 시도해주세요.");
      return;
    }
    if (!imageNameValidate(imageFile.name) &&
      ["jpg", "jpeg"].some((name) => name === imageFile.type.split("/")[-1])) {
      alert("지원하지 않는 확장자입니다. (.jpg, .jpeg 만 가능)");
      return;
    }
    const authRef = authApp.currentUser;
    const imageName = `IMG_${authRef.uid}.jpg`;
    const imageRef = ref(storage, `${pathObj.storage.PROFILE_IMG}/${imageName}`);

    try {
      deleteObject(imageRef).then(() => {
        console.log("이전 프로필 이미지 삭제 완료");
      });
      
      await uploadBytes(imageRef, imageFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // NOTE: Firebase Auth 업데이트
          updateProfile(authRef, {
            photoURL: url
          });
          // NOTE: Global State Auth 업데이트
          setAuth({
            ...auth,
            profileImg: url
          });
        });
        console.log("새로운 프로필 이미지 업로드 완료");
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("[Error] Set Auth PhotoURL Error: " + error.message);
      } else {
        console.error("[Error] Set Auth PhotoURL Error: " + error);
      }
    }
  }
  

  const { isLoading: isAuthLoading, mutate: authAddressMutate } = useMutation((addressData: AddressForm) => setAuthStoreOfAddress(addressData), {
    mutationKey: queryKeys.auth.address(),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.auth.address());
      alert("배송지 주소를 저장하였습니다.")
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error("[Error] Set Auth Address Error: " + error.message);
      } else {
        console.error("[Error] Set Auth Address Error: " + error);
      }
    }
  });

  const setAuthAddress = (data: AddressForm) => {
    if (!data.addressName) {
      alert("배송지명을 입력해주세요.");
      return;
    }
    if (!data.address) {
      alert("배송 주소를 작성해주세요.");
      return;
    }
    if (isAuthLoading) return;
    authAddressMutate(data);
  }

  const setAuthNickName = (nickname: string) => {
    if (!nickname) {
      alert("변경할 닉네임을 입력해주세요.");
      return;
    }
    setAuthStore({ nickname });
  }

  const setAuthPassword = () => {
    if (window.confirm("해당 이메일로 비밀번호 변경 링크를 보내시겠습니까?")) {
      setAuthStoreOfPassword();
    }
  }

  const setAuthProfileImg = (e: React.ChangeEvent<HTMLInputElement & HTMLLabelElement>) => {
    if (!e.target.files?.length) {
      alert("변경할 프로필 이미지를 선택해주세요.");
      return;
    }
    const imageFile = e.target.files[0];
    if (!imageNameValidate(imageFile.name) ||
      !["jpg", "jpeg"].some((name) => name === imageFile.type.split("/")[1])) {
      alert("지원하지 않는 확장자입니다. (.jpg, .jpeg 만 가능)");
      return;
    }
    setAuthStoreOfProfileImg({profileImg: imageFile})
  }

  return {
    isAuthLoading,
    setAuthAddress,
    setAuthNickName,
    setAuthPassword,
    setAuthProfileImg
  }
}