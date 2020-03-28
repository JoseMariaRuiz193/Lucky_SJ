import React from 'react';
import "../../styles/Menu.scss";
import { NavLink } from 'react-router-dom';
import homeIco from '../../assets/icons_svg/home_azul.svg';
import locaIco from '../../assets/icons_svg/mapa.svg';
import dogIco from '../../assets/icons_svg/mascota_2.svg';
import profileIco from '../../assets/icons_svg/user.svg';
import moreIco from '../../assets/icons_svg/mS_azul.svg';

export default function Menu() {
    return(
        <div>
            <nav>
                <ul className='Menu-Container'>
                    <li className="menu-ico">
                    <NavLink to='/home' activeClassName='active'><img src={homeIco}/></NavLink>
                    </li>

                    <li className="menu-ico">
                    <NavLink to='/map'><img src={locaIco}/></NavLink>
                    </li>

                    <li className="menu-ico">
                    <NavLink to='/'><img src={dogIco}/></NavLink>
                    </li>

                    <li className="menu-ico">
                    <NavLink to='/'><img src={profileIco}/></NavLink>
                    </li>
                    
                    <li className="menu-ico">
                    <NavLink to='/'><img src={moreIco}/></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
