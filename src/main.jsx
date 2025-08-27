import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faSpinner)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
     <App />
    </Router>
  </StrictMode>,
)
