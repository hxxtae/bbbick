import { createPortal } from 'react-dom';

import { AppLayout } from './AppLayout'
import { AppRouter } from './router/AppRouter'
import { useAuthSync } from './hooks/auth/useAuthSync';
import { Loading } from './components/ui/Loading';

export const App = () => {
  const { isLoading } = useAuthSync();

  return (
    <AppLayout>
      <>
        {isLoading ? createPortal(<Loading />, document.body) : <AppRouter />}
      </>
    </AppLayout>
  )
}

