import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

function NotFound() {
  return (
    <>
      <div className='not-found'>
          <Logo/>
          <p className='message'> Page not found.</p>
          <Link to="/" className='tx-input-submit'>Return main page</Link>
        </div>
    </>
    

  )
}

export default NotFound