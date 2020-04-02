import React from 'react';
import { Link } from 'react-router-dom';

export default function AnimalsAdoptionList (props) {
    
    const animals = [];
    for(let i = 0; i < props.adoptionAnimals.length; i++){
        const animal = props.adoptionAnimals[i];
        animals.push(
            <Link to='/perfil-animal'>
            <div className='animal-profile'>
                <div className='img-wrap'>
                    <img className='bbdd-img' src={animal.image} alt=''/>
                </div>
                <div className='bbdd-text'>
                    <h2>{animal.name}</h2>
                    <p>{animal.city}</p>
                </div>
            </div>
            </Link>
        )
    }

    return(
        <div className='content'>
            {animals}
        </div>
    )
}