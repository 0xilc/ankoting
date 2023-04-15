import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!username || !password || !confirmPass) {
      toast.warn('Fill required fields!');
      return;
    };
    if (password !== confirmPass)
    {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type" : "application/json"
        }
      }
      const { data } = await axios.post(
        "http://localhost:3005/api/user/register",
        {username, password},
        config
      );
      toast.success(`Registered as ${data.username}`);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate('/');
    } catch(error)
    {
      toast.error(`${username} is taken!`)
      console.log(error)
    }
  } 
  return (
    <>
    <div className='register'>
      <div className='login-register'>
          <div className='tx-bg-text'>
            register
          </div>
          <div className='inner-login'>
            <div className='tx-modal'>
              <form className='form'>
                <div className='form-row'>
                  <Link to="/" className='logo'>⎾Ankoting⏌</Link>
                  <h4 className='title'>
                    Register
                  </h4>
                </div>
                <div className='form-row'>
                  <label for="uname">Username</label> 
                  <input className='tx-input' id="uname" placeholder='Username' required onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className='form-row'>
                  <label for="pword">Password</label> 
                  <input className='tx-input' id='pword' placeholder='Password' required type='password' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='form-row'>
                  <label for="pword">Confirm Password</label> 
                  <input className='tx-input' id='pwordconfirm' placeholder='Password again' required type='password' onChange={(e) => setConfirmPass(e.target.value)}></input>
                </div>
                <div className='form-row'>
                  <div className='tx-input-submit' onClick={handleSubmit}>Register</div>
                </div>
                <div className='form-row'>
                  <Link className='active-text' to="/auth/login">Do you have an account? Login!</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register