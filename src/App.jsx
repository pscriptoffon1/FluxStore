import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './screens/welcome'
import Intro1 from './screens/intro1'
import Signup from './screens/signup'
import Login from './screens/login'
import Password from './screens/password'
import Verification from './screens/verification'
import Newpassword from './screens/newpassword'
import Homepage from './screens/homepage'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/intro1" element={<Intro1 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password" element={<Password />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/newpassword" element={<Newpassword />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
