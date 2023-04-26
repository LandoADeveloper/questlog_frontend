import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Bouncer from './bouncer/Bouncer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login/>}/>
        <Route path='/register' element= {<Register/>}/>
        <Route element={<Bouncer/>}>
          <Route path='/dashboard' element= {<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
