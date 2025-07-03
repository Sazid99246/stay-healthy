import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Notification from './Components/Notification/Notification.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Notification>
      <StrictMode>
        <App/>
      </StrictMode>
    </Notification>
  </BrowserRouter>,
)
