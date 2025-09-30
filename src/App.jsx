import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { useEffect } from 'react'
import { getLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const authData = useContext(AuthContext);
  console.log(authData);

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    } else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password);
      if(employee){
        setUser('employee');
        setLoggedInUserData(empleeee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      }
    } else{
      alert("Invalid credentials");
    }
  }
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}></Login> : ''}
      {user == 'admin' ? <AdminDashboard></AdminDashboard> : <EmployeeDashboard></EmployeeDashboard>}
    </>
  )
}

export default App