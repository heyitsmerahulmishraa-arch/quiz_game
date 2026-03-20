import React, { useState } from 'react'

const Registration = () => {

  const [registrationFormValue, setRegistrationFormValue] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleInputEmpty = (e) => {
    console.log(e.target.previousElementSibling.value)
    e.target.previousElementSibling.value = ''
  }

  const handleShowPassword = (e) => {
      console.log(e.target.previousElementSibling.type)
      if(e.target.previousElementSibling.type === 'password') {
        e.target.previousElementSibling.type = 'text'
        e.target.textContent = 'Hide'
      } else {
        e.target.previousElementSibling.type = 'password'
        e.target.textContent = 'Show'
      }
  }

  // const handleSubmit = (e) => {

  // }

  return (
    <div className="registrationPageMainContainer">
      <div className="userRegistrationContainer border max-w-[600px] mx-auto">
        <div className="topbar px-2 py-1">
          <p className="text-[12px] font-bold text-emerald-700">User Registration</p>
          <div className="userRegistrationInputContainer relative border mt-2 mb-5 border-emerald-700 rounded flex items-center gap-2">
            <input onChange={(e) => console.log(e.target.value)} type="text" placeholder="Username" name="username" className="border-0 outline-0 p-1 rounded-sm w-full"/>
            <button onClick={(e) => handleInputEmpty(e)} className='text-emerald-700 hover:text-emerald-400 h-6 px-2 rounded mr-1'>X</button>
            <p className="inputError text-red-500 text-[12px] absolute mt-12 ml-2 hidden">Invalid Username</p>
          </div>
          <div className="userRegistrationInputContainer relative border mt-2 mb-5 border-emerald-700 rounded flex items-center gap-2">
            <input onChange={(e) => console.log(e.target.value)} type="email" placeholder="Email" name="email" className="border-0 outline-0 p-1 rounded-sm w-full" />
            <button onClick={(e) => handleInputEmpty(e)} className='text-emerald-700 hover:text-emerald-400 h-6 px-2 rounded mr-1'>X</button>
            <p className="inputError text-red-500 text-[12px] absolute mt-12 ml-2 hidden">User email already exists</p>
          </div>
          <div className="userRegistrationInputContainer relative border mt-2 mb-1 border-emerald-700 rounded flex items-center gap-2">
            <input onChange={(e) => console.log(e.target.value)} type="password" placeholder="Password" name="password" className="border-0 outline-0 p-1 rounded-sm w-full" />
            <button onClick={(e) => handleShowPassword(e)} className="text-emerald-700 hover:text-emerald-400 border h-6 px-2 rounded mr-1">Show</button>
            <p className="inputError text-red-500 text-[12px] absolute mt-12 ml-2 hidden">Invalid Password</p>
          </div>
          <div className="buttonContainer flex items-center gap-4">
            <button className="bg-emerald-700 text-white hover:bg-emerald-600 px-4 py-1 mt-4 rounded">Register</button>
            <button className="border border-emerald-700 text-emerald-700 hover:bg-emerald-100 px-4 py-1 mt-4 rounded">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration