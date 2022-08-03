import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate();
  const hadleLogin = ()=>{
     navigate('/', {replace: true})


  }
  return (
   
    <div className='container m-5'>
        <h1>Login</h1>
        <hr />

        <button className='btn btn-primary' onClick={hadleLogin}>
          Login
        </button>
    </div>
  )
}
