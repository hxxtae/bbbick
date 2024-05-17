import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';

import { IFilePath, IProductFiles } from '@/interface/form';
import { storage } from '@/service/firebaseApp'
import { localStorageKeys } from '@/constants/keys';
import { LocalStore } from '@/store/localStore';

interface FilesProps {
  basePath: IFilePath;
  initFiles?: IProductFiles[];
}

const localFile = new LocalStore(localStorageKeys.files);

export const useFiles = ({ basePath = "images", initFiles }: FilesProps) => {
  const local = JSON.parse(localFile.get() ?? '[]') as IProductFiles[];
  const [imageList, setImageList] = useState<IProductFiles[]>(initFiles ? [...initFiles] : local);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  // const imageListRef = ref(storage, `${basePath}/`);

  const addFile = async (e: React.ChangeEvent<HTMLInputElement & HTMLLabelElement>) => {
    const imageFiles = e.target.files;
    if (!imageFiles?.length) return;
    const imageFile = imageFiles[0];

    const imageRef = ref(storage, `${basePath}/${imageFile.name}`);
    setImageLoading(true);
    uploadBytes(imageRef, imageFile).then((snapshot) => {
      // 업로드 되자마자 이미지 뜨게 만들기
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => {
          localFile.set(JSON.stringify([...prev, {filename: imageFile.name, url}]))
          return [...prev, {filename: imageFile.name, url}]
        });
        setImageLoading(false);
      });
    });
  }

  const delFile = async (filename: string) => {
    if (initFiles && imageList.length === 1) {
      alert("마지막 이미지 입니다. (최소 1개 이미지 필요)");
      return;
    }
    setImageLoading(true);
    const imageRef = ref(storage, `${basePath}/${filename}`);
    deleteObject(imageRef).then(() => {
      setImageList((prev) => {
        const list = prev.filter((item) => item.filename !== filename);
        localFile.set(JSON.stringify(list))
        return list
      })
      setImageLoading(false);
    });
  }

  useEffect(() => {
    // listAll(imageListRef).then((response) => {
    //   response.items.forEach((item) => {
    //     getDownloadURL(item).then((url) => {
    //       setImageList((prev) => [...prev, url]);
    //       setImageLoading(false);
    //     });
    //   });
    // });


    if (initFiles) {
      localStorage.setItem(localStorageKeys.files, JSON.stringify(initFiles));
    }
    setImageLoading(false);

    return () => {
      localStorage.setItem(localStorageKeys.files, JSON.stringify([]));
    }
  }, []);

  return {
    isLoading: imageLoading,
    fileList: imageList,
    addFile,
    delFile
  }

}