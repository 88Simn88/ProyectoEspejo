import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { InventoryProvider } from './context/InventoryContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <InventoryProvider>
        <ModalProvider>
    <App />
        </ModalProvider>
      </InventoryProvider>
    </HashRouter>
  </StrictMode>,


)
