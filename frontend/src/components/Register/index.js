import React from 'react'
import { A } from 'hookrouter'

import './register.scss'

function Register (){
  return (
    <div className='container-fluid register'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-lg-12'>
            <ul className='register-login'>
              <li><A href= '#'>Acesse sua conta</A></li>
              <li>ou</li>
              <li><A href= '#'> Cadastre-se</A></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
