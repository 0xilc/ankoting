import React from 'react'
import { Link } from 'react-router-dom'
function AuthSelf() {
  return (
    <>
    <div className='auth-self'>
      <div className='section-wrapper'>
        <div className='banner'>
          <div className='logo'>
          ⎾Ankoting⏌
          </div>
        </div>
        <div className='links'>
          <Link className='tx-input-submit'  to="/auth/login">Login</Link>
          <Link className='tx-input-submit' to="/auth/register">Register</Link>
        </div>

        
      </div>

    </div>
    </>
  )
}

export default AuthSelf