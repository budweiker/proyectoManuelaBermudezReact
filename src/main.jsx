import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import App from './pages/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/App/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
