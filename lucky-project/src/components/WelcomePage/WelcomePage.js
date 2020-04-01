import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/WelcomePage.scss';
import logo from '../../assets/img/welcome_page/group29.svg';
import lucky from '../../assets/img/welcome_page/group.svg';


export default function WelcomePage(){

    return(
        <section className="content">
        <Link to='/tutorial'>
        <div className="welcome-container">         
            <img className="logo" src={logo} alt='logo de la aplicación'/>
            <img  className="lucky" src={lucky}  alt='logo de la aplicación'/>
        </div>
        </Link>

        </section>
    )
}