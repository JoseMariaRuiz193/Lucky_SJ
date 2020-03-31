import React from 'react';
import "../../styles/Menu.scss";
import { NavLink } from 'react-router-dom';
import profileIco from '../../assets/icons_svg/user.svg';

export default function Menu() {
    return(
        <div className='menu-footer'>
            <nav>
                <ul className='menu-Container'>
                    <li className="menu-ico">
                    <NavLink to='/inicio' activeClassName='active'><span className='icon-home'/></NavLink>
                    </li>

                    <li className="menu-ico">
                    <NavLink to='/mapa' activeClassName='active'><span className='icon-mapa'/></NavLink>
                    </li>

                    <li className="menu-ico">
                    <NavLink to='/adopcion' activeClassName='active'><span className='icon-mascota'/></NavLink>
                    </li>

                    <li className="menu-ico">
                    <NavLink to='/'><img src={profileIco}/></NavLink>
                    </li>
                    
                    <li className="menu-ico">
                    <NavLink to='/' activeClassName='active'><span className='icon-more'/></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
