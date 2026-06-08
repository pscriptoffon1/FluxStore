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
import Checkout1 from './screens/checkout1'
import Check2 from './screens/check2'
import Check3 from './screens/check3'
import Addnew from './screens/addnew'
import Orders2 from './screens/orders2'
import Orders3 from './screens/orders3'
import Newcard from './screens/newcard'
import Myorders1 from './screens/myorders1'
import Orderinfo1 from './screens/orderinfo1'
import Orderinfo2 from './screens/orderinfo2'
import Rateproduct from './screens/rateproduct'
import Trackorder from './screens/trackorder'
import Notification from './screens/notification'
import Profile from './screens/profile'
import Voucher from './screens/voucher'
import Wishit from './screens/wishit'
import Wishit2 from './screens/wishit2'
import Address from './screens/address'
import Profilesetting from './screens/profilesetting'
import Setting from './screens/setting'
import Support from './screens/support'

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
          <Route path="/checkout1" element={<Checkout1 />} />
          <Route path="/check2" element={<Check2 />} />
          <Route path="/check3" element={<Check3 />} />
          <Route path="/addnew" element={<Addnew />} />
          <Route path="/newcard" element={<Newcard />} />
          <Route path="/orders2" element={<Orders2 />} />
          <Route path="/orders3" element={<Orders3 />} />
          <Route path="/myorders1" element={<Myorders1 />} />
          <Route path="/orderinfo1" element={<Orderinfo1 />} />
          <Route path="/orderinfo2" element={<Orderinfo2 />} />
          <Route path="/rateproduct" element={<Rateproduct />} />
          <Route path="/trackorder" element={<Trackorder />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/wishit" element={<Wishit />} />
          <Route path="/wishit2" element={<Wishit2 />} />
          <Route path="/address" element={<Address />} />
          <Route path="/profilesetting" element={<Profilesetting />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
