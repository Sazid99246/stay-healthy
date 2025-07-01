import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import LandingPage from './Components/Landing_Page/LandingPage';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </>
  )
}

export default App
