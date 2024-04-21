import ReactDOM from 'react-dom/client'
import { App } from './App'
import { RecoilRoot } from 'recoil'
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>
)
