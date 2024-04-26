import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';

import { IFilePath, IProductFiles } from '@/interface/form';
import { storage } from '@/service/firebaseApp'
import { localStorageKeys } from '@/constants/keys';

interface FilesProps {
  basePath: IFilePath;
}

export const useFiles = ({ basePath = "images" }: FilesProps) => {
  const local = JSON.parse(localStorage.getItem(localStorageKeys.files) ?? '[]') as IProductFiles[];
  const [imageList, setImageList] = useState<IProductFiles[]>(local ?? []);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  // const imageListRef = ref(storage, `${basePath}/`);

  const addFile = (e: React.ChangeEvent<HTMLInputElement & HTMLLabelElement>) => {
    const imageFiles = e.target.files;
    if (!imageFiles?.length) return;
    const imageFile = imageFiles[0];

    const imageRef = ref(storage, `${basePath}/${imageFile.name}`);
    setImageLoading(true);
    uploadBytes(imageRef, imageFile).then((snapshot) => {
      // 업로드 되자마자 이미지 뜨게 만들기
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => {
          localStorage.setItem(localStorageKeys.files, JSON.stringify([...prev, {filename: imageFile.name, url}]));
          return [...prev, {filename: imageFile.name, url}]
        });
        setImageLoading(false);
      });
    });
  }

  const delFile = (filename: string) => {
    setImageLoading(true);
    const imageRef = ref(storage, `${basePath}/${filename}`);
    deleteObject(imageRef).then(() => {
      setImageList((prev) => {
        const list = prev.filter((item) => item.filename !== filename);
        localStorage.setItem(localStorageKeys.files, JSON.stringify(list));
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

    if (!local) {
      localStorage.setItem("bbbkick_image", JSON.stringify([]));
    }
    setImageLoading(false);
  }, []);

  return {
    isLoading: imageLoading,
    fileList: imageList,
    addFile,
    delFile
  }

}