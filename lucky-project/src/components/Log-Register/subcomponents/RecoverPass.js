import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Log-Register.scss';
import logoLucky from '../../../assets/img/register/logo.svg';
import check from '../../../assets/img/register/checkmark.svg';

export default function RecoverPass (){
    return(
        <div className='content'>
          <div className='logo-container'>
            <Link to='/home' className ='logo-lucky'><img src={logoLucky}/></Link>
            </div>
            <h1 className='title-form'>Recuperar Contraseña</h1>
           <div className='recover-container'>
                <div className='input-container-RP'>
                <input type='text' className ='data-form' id='recover-email' placeholder='Introduce tu Email' required/>
                <div className='image'>
                  <img className='check' src={check}/>
                </div>
            </div>
          </div>
          <input type='button' className= 'btn-recover-pass' value='Recuperar contraseña'/>
        </div>
    )
}