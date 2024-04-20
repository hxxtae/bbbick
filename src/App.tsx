import { AppRouter } from './router/AppRouter'
import { AppLayout } from './AppLayout'

export const App = () => {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

