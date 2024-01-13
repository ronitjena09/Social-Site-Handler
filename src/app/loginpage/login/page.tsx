import React from 'react'

const SignIn = () => {
  return (
    <div className='flex bg-[#e5e7eb] min-h-screen justify-center items-center '>
      <div className='bg-white p-10 rounded-lg shadow-lg '>
        <h1 className='font-bold'> Sign in </h1>
        <h3> to access social</h3>

        <div className='flex flex-col my-4'>
          <label></label>
          <input type='email' placeholder='Email address' className='border-2 outline-none border-zinc-600 rounded-md px-2 py-1'></input>
        </div>
        <div className='flex flex-col my-4'>
          <label></label>
          <input type='password' placeholder='Password' className='border-2 outline-none border-zinc-600 rounded-md px-2 py-1'></input>
        </div>
        <button className='bg-[#06b6d4] w-full py-1 my-2 rounded-md text-white'>Login</button>
      </div>

    </div>
  )
}

export default SignIn