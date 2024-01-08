import React from 'react'

const page = () => {
  return (
    <div className='flex bg-[#94a3b8] min-h-screen justify-center items-center'>
      <div className='bg-white p-10 rounded-lg shadow-lg'>
        <h1 className='font-bold'> Sign in </h1>
        <h3> to access social</h3>
        <div className='flex flex-col my-4'>
          <label></label>
          <input type='text' placeholder='Email address' className='border-2 outline-none border-zinc-600 rounded-md px-2 py-1'></input>
        </div>
      </div>

    </div>
  )
}

export default page