import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/AdoptionPage.scss';
import blue from '../../../assets/img/animals/maxresdefault@3x.png';
import { Link } from 'react-router-dom';
import AnimalsAdoptionList from './AnimalsAdoptionList';

export default function UserPets () {

    const[adoptionAnimals, setAdoptionAnimals] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:2020/lucky-db/animals`)
        .then(res => {
            setAdoptionAnimals(res.data.animals);
        })
        .catch( err => {
            console.log('Error de conexión con base de datos');
        });
    }, [])

    return(
        <div className='content'>
        <div className='pets-container'>
        
        {/* Aquí deberemos modificar y añadir la flecha y ponerla en color salmón */}

            <input type='button' className='status' value='Estado de la adopción'/>



            <div className='filter-container'>
                <h2>Animales en adopción</h2>
                <Link to= '/filtros'><span className='icon-filtros'/></Link>
                
            </div>

            <div className='animals-container'>

            <AnimalsAdoptionList adoptionAnimals={adoptionAnimals}/>

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