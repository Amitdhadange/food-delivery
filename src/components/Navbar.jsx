import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from './ContextReducer';
const Navbar = () => {
  const navigate = useNavigate();
  let data =useCart();
  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    navigate("/")

  }
  return (
    
      <nav>
        <div className='w-full h-[4rem] flex flex-wrap items-center justify-between  mx-auto pl-2 pr-4'>
          <Link to='/'><img src='../public/images/logo.png' alt='no image' className='w-[10vw] h-[10vh]' /></Link>
         

              {(localStorage.getItem('authtoken')) ?
              <div className='flex justify-center items-center gap-6'>
                    <Link to='/myorder' className='block py-2 px-3 text-black font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>My Order</Link>
                  <div className='flex justify-center items-center'>
                    <Link to='/Cart' className='block py-2 px-3 text-black font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Cart</Link>
                    <h6 className='rounded-full w-4 -mt-1 h-4 justify-center items-center flex bg-red-600 text-white'>{data.length}</h6>
                  </div>
                </div>
                : ""}

          {(!localStorage.getItem('authtoken')) ?
            <div className='flex gap-5 font-semibold'>

              <button className='bg-black px-3 py-2 rounded font-bold'>

                <Link to='/Login' className='block py-2 px-3  text-white  font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Log in</Link>
              </button>

              <button className='bg-black px-3 py-2 rounded'>

                <Link to='/Signup' className='block py-2 px-3 text-white font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Signup</Link>
              </button>
            </div>
            :
            <div className='flex justify-center items-center'>
              <button className='bg-black px-3 py-2 rounded text-white font-bold hover:text-red-500' onClick={handleLogout}>
                Logout
              </button>

            </div>

          }
        </div>
      </nav>

    
  )
}

export default Navbar