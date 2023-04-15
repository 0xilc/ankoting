import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (!username || !password) {
      toast.warn("Fill required fields");
      return;
    };
    try{
      const config = {
        headers: {
          "Content-type" : "application/json"
        }
      }
      const { data } = await axios.post(
        "http://localhost:3005/api/user/login",
        {username,password},
        config
      )
      toast.success(`Welcome ${data.username}!`);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate('/');
    } catch (error)
    {
      toast.error('Invalid Credentials');
      console.log(error.response)
    }
  }

  return (
    <>
    <div className='login'>
      <div className='login-register'>
        <div className='tx-bg-text'>
          login
        </div>
        <div className='inner-login'>

          <div className='tx-modal'>
            <form className='form'>
              <div className='form-row'>
                  <Link to="/" className='logo'>⎾Ankoting⏌</Link>
                  <h4 className='title'>
                    Login 
                  </h4>
              </div>
              <div className='form-row'>
                <label for="uname">Username</label> 
                <input className='tx-input' id="uname" placeholder='Username' required onChange={(e) => setUsername(e.target.value)}></input>
              </div>
              <div className='form-row'>
                <label for="pword">Password</label> 
                <input className='tx-input' id='pword' placeholder='Password' type='password' required onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className='form-row'>
                <div className='tx-input-submit' onClick={handleSubmit}>Login</div>
              </div>
              <div className='form-row'>
                <Link className='active-text' to="/auth/register">Don't you have an account? Register</Link>
              </div>
              <div className='form-row'>
                <Link className='passive-text' to="/forgot-password">Forgot Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login