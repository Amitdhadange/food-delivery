import React, { useState,useRef, useEffect } from 'react'
import {useDispatchCart, useCart} from './ContextReducer'
const Food = (props) => {
  let dispatch= useDispatchCart();
  let data=useCart();
  const priceRef =useRef()
  let options =props.options;
  let priceOptions = Object.keys(options)

  const [qty,setQty]=useState(1)
  const[size,setsize]=useState("")

  const handleaddcart=async()=>{
    let food=[]
    for(const item of data){
      if(item.id === props.foodItems._id){
        food = item;
        break;
      }
    }

    if(food !== []) {
      if(food.size === size){
        await dispatch({type: "UPDATE", id:props.foodItems._id, price: finalPrice,qty:qty})
        return
      }
    else if(food.size !==size){
      await dispatch({type:"ADD",id:props.foodItems._id,name:props.foodItems.name,price:finalPrice,qty:qty,size:size,img:props.foodItems.img})
      return
    }
    return
    }
    await dispatch({type:"ADD",id:props.foodItems._id,name:props.foodItems.name,price:finalPrice, qty:qty ,size:size,img:props.foodItems.img})
    // await dispatch({ type: "ADD", id:props.foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img:props.fooditem.img })
  }
  let finalPrice= qty* parseInt(options[size]);
  useEffect(()=>{
    setsize(priceRef.current.value)
  },[])

  return (
    <div className="mt-8 cursor-pointer">
    
      <div className="flex flex-col bg-gray-100 border shadow-sm rounded-lg dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.9] overflow-hidden">
  <img className="w-full h-60 rounded-t-md cursor-pointer  hover:scale-105 transition-all ease-out duration-200" src={props.foodItems.img} alt="Image Description"/>
  <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      {props.foodItems.name}
    </h3>
    <div className='flex justify-between items-center'>

    <select className='rounded bg-slate-200'
    onChange={(e) => setQty(e.target.value)}>
    {Array.from(Array(5),(e,i)=>{
      return(
        <option key={i+1} value={i+1}>{i+1}</option>
        )
      })}
    </select>
    <select className='border-gray-600 rounded mb-2 bg-slate-200'ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
      {priceOptions.map((data)=>{
        return <option key={data} value={data}>{data}</option>
      })}
    </select>
      </div>
    
    <hr />
    <div className=' flex justify-between items-center'>
      <h4 className='font-bold'>₹{finalPrice}/-</h4>
    
    <div className='flex justify-center items-center mt-2'>
  <button className='border-gray-400 border-[1px] py-2 px-4 rounded bg-red-600 font-bold hover:text-white' onClick={handleaddcart}>Add Cart</button>
  </div>
    </div>
  </div>
</div>
  </div>
      )
}

      export default Food