import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import bgImage from './assets/img/bg.jpg'; // ✅ import the image


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div
      className="min-h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`, // ✅ use imported path
      }}
    >
      <App />
    </div>
  </StrictMode >,
)
