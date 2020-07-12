import React from 'react'
import { A } from 'hookrouter'

import './login.scss'
import './login-devices.scss'

function Register (){
  return (
    <div className='login'>
      <ul className='login-user'>
        <li><A href= '#'>Acesse sua conta</A></li>
        <li>ou</li>
        <li><A href= '#'> Cadastre-se</A></li>
      </ul>
    </div>
  )
}

export default Register
