import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Webinar from './Webinar.jsx'
import Privacy from './Privacy.jsx'
import LeadMagnet from './LeadMagnet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/lead-magnet" element={<LeadMagnet />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
