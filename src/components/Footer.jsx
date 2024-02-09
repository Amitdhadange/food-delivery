import React from 'react'

const Footer = () => {
  return (
    <div>
      

<footer className="bg-gray-400 rounded-lg shadow m-4 dark:bg-gray-100">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-900 sm:text-center dark:text-gray-400 inline-flex">© 2023 <p className="hover:underline"> Foodis</p>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-800 dark:text-gray-400 sm:mt-0">
        <li className=' hover:text-black'>
            <a href="" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li className=' hover:text-black'>
            <a href="" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li className=' hover:text-black'>
            <a href="" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li className=' hover:text-black'>
            <a href="" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>


    </div>
  )
}

export default Footer