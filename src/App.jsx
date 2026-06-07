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
import Discover from './screens/discover'
import Search111 from './screens/search111'
import Foundresults from './screens/foundresults'
import Product from './screens/product'
import Yourcart from './screens/yourcart'

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
          <Route path="/discover" element={<Discover />} />
          <Route path="/search111" element={<Search111 />} />
          <Route path="/product" element={<Product />} />
          <Route path="/foundresults" element={<Foundresults />} />
          <Route path="/yourcart" element={<Yourcart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
