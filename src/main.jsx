import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Form from './components/Form'
import Header from './components/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='relative bg-blue-100 w-full h-full'>
    <App />
    </div>
 
  </React.StrictMode>
)
