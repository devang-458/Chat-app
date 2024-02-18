import { useState } from 'react'
import './App.css'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import {BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path='/register' element= {<Register />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
