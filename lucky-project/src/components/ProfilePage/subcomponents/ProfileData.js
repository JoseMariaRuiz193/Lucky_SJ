import React from 'react';
import '../../../../styles/ProfilePage.scss';

import profileIco from '../../../../assets/icons_svg/user.svg';
import chica from '../../../../assets/icons_svg/chica.svg';
import localizacion from '../../../../assets/icons_svg/localization.svg';
import favoritos from '../../../../assets/icons_svg/favoritosCopy.svg';
import notificaciones from '../../../../assets/icons_svg/notification.svg';
import mascota from '../../../../assets/icons_svg/mascota_2.svg';
import apdrina from '../../../../assets/icons_svg/apadrina.svg';
import donar from '../../../../assets/icons_svg/donar.svg';
import adelante from '../../../../assets/icons_svg/adelante.svg';

export default function ProfileData () {

    return(
        
    <div className='total-container'>

        <div className='content'>

        <img className='img-profile' src={profileIco}/>

        <div className='data-container'>
            <img className='data-ico' src={chica}/>
            <h2>Mi perfil</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <div className='data-container'>
            <img className='data-ico' src={localizacion}/>
            <h2>Direcciones</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <div className='data-container'>
            <img className='data-ico' src={favoritos}/>
            <h2>Favoritos</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <div className='data-container'>
            <img className='data-ico' src={notificaciones}/>
            <h2>Notificaciones</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <div className='data-container'>
            <img className='data-ico' src={mascota}/>
            <h2>Estado de la adopción</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <div className='data-container'>
            <img className='data-ico' src={apdrina}/>
            <h2>Apadrinar</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        <div className='data-container'>
            <img className='data-ico' src={donar}/>
            <h2>Donar</h2>
            <img className='adelante-arrow' src={adelante}/>
        </div>

        </div>
    </div>
    )
}