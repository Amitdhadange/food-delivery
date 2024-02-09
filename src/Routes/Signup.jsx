import React, { useState } from 'react'
import { Await, Link } from 'react-router-dom'

const Signup = () => {
  
  const [credentials,setcredentials] = useState({name: "",email: "",password: "",geolocation: ""})

  const handleSubmit =async(e)=>{
    e.preventDefault();
    // console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}))
    const response =await fetch("http://localhost:3000/api/createuser",{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,  location:credentials.geolocation,password:credentials.password})
    })
    const json= await response.json()
    console.log(json);

    if(!json.success){
      alert("Enter valid value ")
    }
  }
  const onChange =(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         <h1 className="mx-auto h-10 w-auto ml-[8rem] font-bold text-3xl font-serif italic bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Foodii</h1>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          
         <form onSubmit={handleSubmit}>

            
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name='name'
                  value={credentials.name}
                  onChange={onChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-semibold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  value={credentials.email}
                  onChange={onChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-semibold"
                />
              </div>
            </div>

            <div>
            <label htmlFor="location " className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  name="geolocation"
                  type="text"
                  value={credentials.geolocation}
                  onChange={onChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-semibold"
                />
              </div>
            </div>

            <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"  
                  value={credentials.password}
                  onChange={onChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-semibold"
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
              >
                Sign in
              </button>
            </div>
          </form>
              <div className='w-full mt-[4vh]'>
              <Link to ="/Login" className='font-semibold text-indigo-600 hover:text-indigo-500 ml-[8rem]'>Already account</Link>
              </div>
        </div>
      </div>
    </>
  )
}

export default Signup