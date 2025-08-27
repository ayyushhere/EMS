import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl'>Hello <br></br> <span className='text-3xl font-medium'>Ayush 👋</span></h1>
        <button className='text-lg bg-red-600 font-bold rounded-sm text-white p-2 cursor-pointer hover:bg-red-500'>Logout</button>
    </div>
  )
}

export default Header