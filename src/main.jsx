import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css'
import AuthContextProvider from './context/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App></App>
  </AuthContextProvider>
 
)
