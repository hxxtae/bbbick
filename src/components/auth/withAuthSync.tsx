import { createPortal } from 'react-dom';
import { FunctionComponent } from 'react';

import { useAuthSync } from '@/hooks/auth/useAuthSync';
import { Loading } from '../common/Loading';

type wrappedProps = {
  [key: string]: string
}

type withAuthSyncProps<T> = FunctionComponent<T>

export const withAuthSync = <T extends wrappedProps>(ViewComponent: withAuthSyncProps<T>) => {
  return (props: T) => {
    const { isLoading } = useAuthSync();

    return (
      <>
        {isLoading ?
          createPortal(<Loading />, document.body, 'auth-loading') :
          <ViewComponent {...props} />}
      </>
    )
  }
}