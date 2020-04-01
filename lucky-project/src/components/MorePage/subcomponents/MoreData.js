import React from 'react';
import '../../../styles/MorePage.scss';

import chica from '../../../assets/icons_svg/chica.svg';
import localizacion from '../../../assets/icons_svg/localization.svg';
import favoritos from '../../../assets/icons_svg/favoritosCopy.svg';
import notificaciones from '../../../assets/icons_svg/notification.svg';
import mascota from '../../../assets/icons_svg/mascota_2.svg';
import adelante from '../../../assets/icons_svg/adelante.svg';
import { Link } from 'react-router-dom';

export default function MoreData () {

    return(


        <div className='content'>
        
        <div className='margin-corrector'></div>
        
        <div className='more-data-container '>
            <img className='data-ico' src={chica} alt='icono'/>
            <h2>Asociaciones protectoras</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <div className='more-data-container '>
            <img className='data-ico' src={localizacion} alt='icono'/>
            <h2>Eventos</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <div className='more-data-container '>
            <img className='data-ico' src={favoritos} alt='icono'/>
            <h2>Curiosidades</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <div className='more-data-container '>
            <img className='data-ico' src={notificaciones} alt='icono'/>
            <h2>Ayuda</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <div className='more-data-container '>
            <img className='data-ico' src={mascota} alt='icono'/>
            <h2>Configuración</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <Link to='login-usuario'><input type='button' className='login-btn' value='Iniciar Sesión'/></Link>
        
    </div>
    )
}