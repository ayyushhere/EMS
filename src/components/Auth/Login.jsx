import React from 'react'
import { useState } from 'react';



const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log(handleLogin);


  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    console.log("Email is ",email);
    console.log("password is ",password);

    setEmail("");
    setPassword("");
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
        <div className='border-2 border-emerald-600 p-20 rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300'>
            <form onSubmit={(e) => {
              submitHandler(e);
            }} className='flex flex-col items-center justify-center gap-4'>
                <input 
                    required 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email" 
                    placeholder='Enter your email' 
                    className='border-2 rounded-full outline-none bg-transparent text-white border-emerald-600 py-3 px-6 placeholder:text-gray-400 w-72 hover:border-emerald-500 focus:border-emerald-400 transition-colors duration-300'
                />
                <input 
                  value={password}
                  onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password" 
                    placeholder='Enter your password' 
                    className='border-2 rounded-full outline-none bg-transparent text-white border-emerald-600 py-3 px-6 placeholder:text-gray-400 w-72 hover:border-emerald-500 focus:border-emerald-400 transition-colors duration-300'
                />
                <button 
                    type='submit' 
                    className='w-72 text-white bg-emerald-600 py-3 px-8 rounded-full mt-4 hover:bg-emerald-500 active:bg-emerald-700 transition-colors duration-300 font-semibold tracking-wide'
                >
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login