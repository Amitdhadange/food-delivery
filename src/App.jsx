import React from 'react'
import Home from './Routes/Home'
import Myorder from './Routes/Myorder'
import Cart from './Routes/Cart'
import Login from './Routes/Login'
import Logout from './Routes/Logout'
import {  Route, Routes } from 'react-router-dom'
import Signup from './Routes/Signup'

const App = () => {
  
  return (
      <>

        <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/Myorder' element={<Myorder/>}/> 
        <Route path='/Cart' element={<Cart/>}/> 
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/Logout' element={<Logout/>}/> 
        <Route path='/Signup' element={<Signup/>}/> 

        </Routes>


      </>
    
  )
}

export default App