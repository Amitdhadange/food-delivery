import React from 'react'
import Home from './Routes/Home'
import Cart from './Routes/Cart'
import Login from './Routes/Login'
import Logout from './Routes/Logout'
import { Route, Routes } from 'react-router-dom'
import Signup from './Routes/Signup'
import {ContextReducer} from './components/ContextReducer'
import Myorder from './Routes/Myorder'
const App = () => {
  return (
    <>
    <ContextReducer>

        <Routes>

        <Route path='/' element={<Home/>}/>  
        <Route path='/myorder' element={<Myorder/>}/> 
        <Route path='/Cart' element={<Cart/>}/> 
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/Logout' element={<Logout/>}/> 
        <Route path='/Signup' element={<Signup/>}/> 


        </Routes>

      </ContextReducer>
    
    </>
  )
}

export default App