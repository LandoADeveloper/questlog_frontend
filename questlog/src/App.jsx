import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login/>}/>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/dashboard' element= {<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
