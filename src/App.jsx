import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import Sign_Up from './Components/SignUp/Sign_Up';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Sign_Up/>}/>
      </Routes>
    </>
  )
}

export default App
