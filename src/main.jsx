import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast' // 🟩 Toaster import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" reverseOrder={false} /> {/* 🟩 Toaster Added */}
  </React.StrictMode>,
)
