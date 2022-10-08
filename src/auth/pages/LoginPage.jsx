import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice';

export const LoginPage = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const onLogin = () => {
    const user = {
      id:'2236',
      name: 'Martin Terzi'
    }
    dispatch(login(user))
    
    navigate('/search', {
      replace: true
    })
  }

  
  

  return (
    <div className="container mt-5">

      <h1>Login</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
