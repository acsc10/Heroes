import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const Login = () => {

   const {login} = useContext(AuthContext)
  const navigate = useNavigate();
 

  const hadleLogin = ()=>{
    login( "Andres Sanchez")
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
