import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/AnimalProfile.scss';

export default function DataNav () {
    return (
        <nav>
        <ul className='nav-animal'>
        <NavLink to='perfil-animal-datos' activeClassName='active'><li className='data-results'>Datos</li></NavLink>
        <NavLink to='/perfil-animal-salud' activeClassName='active'><li className='data-results'>Salud</li></NavLink>
        <NavLink to='/perfil-animal-adopcion' activeClassName='active'><li className='data-results'>Adopción</li></NavLink>
        </ul>
    </nav>
    )
}