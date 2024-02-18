import { useState } from 'react'
import './App.css'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {
  return (
    // <BrowserRoute>
    // <Routes>
    //   <Route path="/login" element={<Login />}/>
    // </Routes>
    // </BrowserRoute>
    <Login />
  )
}

export default App
