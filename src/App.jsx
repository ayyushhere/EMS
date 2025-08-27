import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    setLocalStorage();
  },);
  

  return (
    <>
      <Login></Login>
      {/* <EmployeeDashboard></EmployeeDashboard> */}
      {/* <AdminDashboard></AdminDashboard> */}
    </>
  )
}

export default App