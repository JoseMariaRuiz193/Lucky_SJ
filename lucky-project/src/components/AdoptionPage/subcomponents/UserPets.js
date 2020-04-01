import React from 'react';
import '../../../styles/AdoptionPage.scss';
import filters from '../../../assets/icons_svg/filtros.svg';
import blue from '../../../assets/img/animals/maxresdefault@3x.png';
import { Link } from 'react-router-dom';

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
                <img src={filters} alt=''/>
            </div>

            <div className='animals-container'>

                <Link to='/perfil-animal'>
                <div className='animal-profile'>
                    <div className='img-wrap'>
                        <img className='bbdd-img' src={blue} alt=''/>
                    </div>
                    <div className='bbdd-text'>
                        <h2>Blue</h2>
                        <p>Madrid</p>
                    </div>
                </div>
                </Link>
                
            </div>

           </div>
        </div>
    )
}