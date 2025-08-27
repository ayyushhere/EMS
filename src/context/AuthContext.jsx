import React, { Children } from 'react'

const AuthContext = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthContext