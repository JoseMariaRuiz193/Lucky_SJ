import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Log-Register.scss';
import logoLucky from '../../assets/img/register/logo.svg';
import check from '../../assets/img/register/checkmark.svg';
import google from '../../assets/img/register/Google__G__Logo.svg';
import ojo from '../../assets/icons_svg/ojo.svg';
import profileImg from '../../assets/icons_svg/new-photo.svg';

export default function Register(){
    return(
        <div className ='content'>
          <div className='logo-container'>
            <Link to='/home' className ='logo-lucky'><img src={logoLucky}/></Link>
            </div>
            <h1 className='title-form'>Crear Cuenta</h1>
            <div className='register-form'>

                <div className='profile-container'>
                    <img className='profile-img' id='img' src={profileImg}/>
                </div>

                <div className='input-container'>
                <input type='text' className ='data-form' id='user_name' placeholder='Nombre de Usuario' required/>
                <div className='image'>
                <img className='check' src={check}/>
                </div>
                </div>

                <div className='input-container'>
                <input type='text' className ='data-form' id='name' placeholder='Nombre' required/>
                <div className='image'>
                <img className='check' src={check}/>
                </div>
                </div>

                <div className='input-container'>
                <input type='text' className ='data-form' id='surname' placeholder='Apellidos' required/>
                <div className='image'>
                <img className='check' src={check}/>
                </div>
                </div>

                <div className='input-container'>
                <input type='text' className ='data-form' id='email' placeholder='Email' required/>
                <div className='image'>
                <img className='check' src={check}/>
                </div>
                </div>

                <div className='input-container'>
                <input type='text' className ='data-form' id='password' placeholder='Contraseña' required/>
                <div className='image'>
                <img className='check' src={ojo}/>
                </div>
                </div>

                <div className='input-container'>
                <input type='text' className ='data-form' id='password2' placeholder='Repita la contraseña' required/>
                <div className='image'>
                <img className='check' src={ojo}/>
                </div>
                </div>

                <Link to='/registro/recuperar-contraseña' className = 'forget-pass'>¿Has olvidado tu contraseña?</Link>
            </div>
                <input type='button' className= 'btn-create-user' value='Crear cuenta'/>
        </div>
    )
}