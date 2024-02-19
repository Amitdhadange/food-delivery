import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer'
import Navbar from '../components/Navbar';


const Cart = () => {

  let data =useCart();
  let dispatch =useDispatchCart();
  if(data.length === 0){
    return(
      <>
      <div>
      <Navbar/>
     </div>
      <div className=' flex justify-center items-center mt-52'>
          <h1 className='font-bold text-2xl'>The Cart is empty !</h1>
          </div>
          </>
    )
  }

  const handleCheckout=async()=>{
    let userEmail =localStorage.getItem("userEmail")
    let responce =await fetch("http://localhost:3000/api/OrderData",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        order_data:data,
        email:userEmail,
        order_date:new Date().toDateString()
      })
    });
    console.log("Order Response",responce)
    if(responce.status===200){
      dispatch({type:"DROP"})
    }
  }

  let totalPrice= data.reduce((total,food)=>total+food.price,0)
  return (
    <div class="flex h-full flex-col  bg-white shadow-xl">
      <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div class="flex items-start justify-between">
        <a href="/"><h1 className=" font-bold text-3xl font-serif italic bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">F00dii</h1></a>
        </div>  
            <hr />
        <div class="mt-8 ">
          <div class="flow-root">
            <ul role="list" class="-my-6 divide-y divide-gray-200">
              {data.map((food,index)=>(

                <li class="flex py-6">
                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 ">
                  <img  src={food.img} alt="Lodding..." className='w-full h-full'/>
                </div>
                
                <div class="ml-4 flex flex-1 flex-col">
                  <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <h1>{food.name}</h1>
                      <p class="ml-4">₹{food.price}</p>
                    </div>
                    <p class=" w-12 mt-1 text-sm text-gray-500 ">{food.size}</p>
                  </div>
                  <div class="flex flex-1 items-end justify-between text-sm ">
                    <p class="text-gray-500 border-[1px] py-1 px-2 border-gray-400">Qty {food.qty}</p>

                    <div class="flex">
                      <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Remove</button>
                    </div>
                  </div>
                </div>
              </li>
              ))}
              
              
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p className='font-bold'>Subtotal </p>
          <p className='font-bold text-xl'>₹{totalPrice}</p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div class="mt-6">
          <button class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={handleCheckout}>Checkout</button>
        </div>
        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            <a href="/">

            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
              Home
            
            </button>
            </a>
          </p>

        </div>
      </div>
    </div>
 
  )
}
export default Cart