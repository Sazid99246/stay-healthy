import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Landing_Page from './Components/Landing_Page/Landing_Page.jsx'
import InstantConsultation from './Components/InstantConsultation/InstantConsultation.jsx'
import Notification from './Components/Notification/Notification.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
        <Route path="notification" element={<Notification/>} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
)
