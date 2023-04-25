import React, { useState } from 'react'
import Register from './Register'
import Login  from './Login'
function Auth() {
  const [sw, setSw] = useState(true)
  return (
    sw ? 
      <Login setSw={setSw}/>
      :<Register setSw={setSw}/>

  )
}

export default Auth