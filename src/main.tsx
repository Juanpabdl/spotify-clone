import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PlayerContextProvider from './utils/context/PlayerContext/ContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </StrictMode>,
)
