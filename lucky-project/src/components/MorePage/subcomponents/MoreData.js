import React from 'react';


import chica from '../../../assets/icons_svg/chica.svg';
import localizacion from '../../../assets/icons_svg/localization.svg';
import favoritos from '../../../assets/icons_svg/favoritosCopy.svg';
import notificaciones from '../../../assets/icons_svg/notification.svg';
import mascota from '../../../assets/icons_svg/mascota_2.svg';
import adelante from '../../../assets/icons_svg/adelante.svg';
import { Link } from 'react-router-dom';

export default function MoreData () {

    return(
        
        <div className='total-container'>

        <div className='content'>

        <div className='data-container'>
            <img className='data-ico' src={chica}/>
            <h2>Asociaciones protectoras</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <div className='data-container'>
            <img className='data-ico' src={localizacion}/>
            <h2>Eventos</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <div className='data-container'>
            <img className='data-ico' src={favoritos}/>
            <h2>Curiosidades</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <div className='data-container'>
            <img className='data-ico' src={notificaciones}/>
            <h2>Ayuda</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <div className='data-container'>
            <img className='data-ico' src={mascota}/>
            <h2>Configuración</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <Link to='login-usuario'><input type='button' className='login-btn' placeholder='Iniciar Sesión'/></Link>

        </div>
    </div>
    )
}