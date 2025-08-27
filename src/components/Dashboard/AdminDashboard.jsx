import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTasks from '../Others/AllTasks'

const AdminDashboard = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Header />
      <CreateTask></CreateTask>
      <AllTasks></AllTasks>
    </div>
  )
}

export default AdminDashboard
