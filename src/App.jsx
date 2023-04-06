import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import SignInSide from './Register'
import Login from './Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SignInSide />
      {/* <Login /> */}
      {/* <BrowserRouter>

        <Routes>
            <Route path='/Signin' element={<SignInSide />} />
            <Route path='/Login' element={<Login />} />
        </Routes>

      </BrowserRouter> */}
      
    </div>
  )
}

export default App
