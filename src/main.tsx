import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { RecoilRoot } from 'recoil'
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
