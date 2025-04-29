import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './index.css'
import LandingPage from './Pages/LandingPage'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import AddViewEditors from './Pages/Managers-Pages/Add-View-Editors'
import AddViewTeams from './Pages/Managers-Pages/Add-View-Teams'
import ManagerDashboard from './Pages/Managers-Pages/ManagerDashboard'

function App() {


  return (
    // <AddViewTeams />
    <>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/managerDashboard" element={<ManagerDashboard />} />
      <Route path="/editors" element={<AddViewEditors />} />
      <Route path="/teams" element={<AddViewTeams />} />
    </Routes> 
    

    </>
  )
}

export default App
