import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Element from './Element.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Element />
    <App />
  </StrictMode>,
)
