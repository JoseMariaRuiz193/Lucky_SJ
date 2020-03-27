import React from 'react';
import "../../styles/Menu.scss";
import { Link } from 'react-router-dom';
import homeIco from '../../assets/icons_svg/home.svg';
import locaIco from '../../assets/icons_svg/mapa.svg';
import dogIco from '../../assets/icons_svg/mascota_2.svg';
import profileIco from '../../assets/icons_svg/user.svg';
import moreIco from '../../assets/icons_svg/slideCopy.svg';

export default function Menu() {
    return(
        <div>
            <section className="Menu-Container">
                <Link to='/home'><img className="menu-ico" src={homeIco}/></Link>
                <Link to='/home'><img className="menu-ico" src={locaIco}/></Link>
                <Link to='/home'><img className="menu-ico" src={dogIco}/></Link>
                <Link to='/profile'><img className="menu-ico" src={profileIco}/></Link>
                <Link to='/home'><img className="menu-ico" src={moreIco}/></Link>
            </section>
        </div>
    );
}
