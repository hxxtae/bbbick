import { AppLayout } from './layout/AppLayout'
import AppRouter from './router/AppRouter'

export const App = () => {
  return (
    <AppLayout>
      <AppRouter/>
    </AppLayout>
  )
}