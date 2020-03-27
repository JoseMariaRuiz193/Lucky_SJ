import React from 'react';
import '../../styles/WelcomePage.scss';
import logo from '../../assets/img/welcome_page/group29.svg';
import lucky from '../../assets/img/welcome_page/group.svg';

export default function WelcomePage(){

    return(
        <section className="content">
        <div className="welcome-container">         
            <img className="logo" src={logo}/>
            <img  className="lucky" src={lucky}/>
        </div>
        </section>
    )
}