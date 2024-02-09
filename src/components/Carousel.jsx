import React from 'react'
import { Carousel } from 'flowbite-react';
const carousel = () => {
  return (
    <div className="w-full h-[80vh] p-2">
      <div className='z-10 mt-[25vmax] absolute w-[90vw] ml-6'>
      <form>   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg id='logo' className="w-4 h-4 text-white {
            }" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search " className="block w-full p-4 ps-10 bg-transparent backdrop-brightness-50 text-[15px] font-bold border text-white border-gray-500 rounded-lg placeholder:text-white " placeholder="Search Pizza Momos . . ." required/>
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
      </div>
      <Carousel>
        <img src="https://source.unsplash.com/random/300×300/?pizza" alt="..." />

        <img src="https://source.unsplash.com/random/300×300/?Samosa" alt="..." />

        <img src="https://source.unsplash.com/random/300×300/?Burger" alt="..." />

        <img src="https://source.unsplash.com/random/300×300/?Coffee" alt="..." />

        <img src="https://source.unsplash.com/random/300×300/?Pastry" alt="..." />
      </Carousel>
    </div>
  )
}

export default carousel