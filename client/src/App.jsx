import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Login'
import Register from './Register';
import ResetPassword from './ResetPassword';


const App = ()=> {

  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Reset' element={<ResetPassword />} />

        </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App
