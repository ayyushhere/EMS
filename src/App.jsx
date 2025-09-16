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

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin');
      console.log(user);
    } else if(email == 'user@me.com' && password == '123'){
      setUser('employee');
    } else{
      alert("Invalid credentials");
    }
  }
  

  const data = useContext(AuthContext);
  console.log(data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}></Login> : ''}
      {user == 'admin' ? <AdminDashboard></AdminDashboard> : <EmployeeDashboard></EmployeeDashboard>}
    </>
  )
}

export default App