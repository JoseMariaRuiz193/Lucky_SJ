import React from 'react';
import '../../styles/Profile.scss';
import filters from '../../assets/icons_svg/filtros.svg';
import dogImg from '../../assets/img/user/uli-1-copy-2@3x.png';

export default function UserPets () {

    return(
        <div className='content'>
        <div className='pets-container'>
        
        {/* Aquí deberemos modificar y añadir la flecha y ponerla en color salmón */}

            <select className='status'>
                <option selected disabled>Estado de la adopción</option>
                <option>En Adopción</option>
                <option>En Proceso</option>
                <option>Rechazado</option>
            </select>

            <div className='filter-container'>
                <h2>Animales en adopción</h2>
                <img src={filters}/>
            </div>

            <div className='animals-container'>

                <div className='animal-profile'>
                    <div className='img-wrap'>
                        <img className='bbdd-img' src={dogImg}/>
                    </div>
                    <div className='bbdd-text'>
                        <h2>Simba</h2>
                        <p>Madrid</p>
                    </div>
                </div>
            </div>

           </div>
        </div>
    )
}