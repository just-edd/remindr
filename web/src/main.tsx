import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RemindersProvider } from './context/RemindersContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RemindersProvider>
      <App />
    </RemindersProvider>
  </StrictMode>,
)
