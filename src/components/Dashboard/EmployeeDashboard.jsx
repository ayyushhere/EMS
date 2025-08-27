import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header></Header>
        <TaskListNumbers></TaskListNumbers>
        <TaskList></TaskList>
    </div>
  )
}

export default EmployeeDashboard