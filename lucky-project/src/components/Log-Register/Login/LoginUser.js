import React from "react";
import { Link } from 'react-router-dom';
import "../../../styles/Log-Register.scss";
import logoLucky from "../../../assets/img/register/logo.svg";
import check from "../../../assets/img/register/checkmark.svg";
import ojo from "../../../assets/icons_svg/ojo.svg";

export default function Login() {
  return (
    <div className="content">

      <div className="logo-container">
        <Link to='/home'>
          <img className="logo-lucky" src={logoLucky} />
        </Link>
      </div>

      <h1 className="title-form">
        ¡Hola! para continuar, inicia sesión o crea una cuenta
      </h1>

      <div className="register-form">

        <div className="input-container">
          <input type="text" className="data-form" id="user" placeholder="Usuario"/>
            <img className="check" src={check} />
        </div>

        <div className="input-container">
          <input type="text" className="data-form" id="password" placeholder="Contraseña"/>
            <img className="check" src={ojo} />
        </div>

        <p className='forget-pass'>¿Has olvidado tu contraseña?</p>

      </div>

        <input type='button' className= 'btn-signIn' value='Iniciar sesión'/>
        <Link to='/registro'><input type='button' className= 'btn-create-user' value='Crear cuenta'/></Link>

    </div>
  );
}
