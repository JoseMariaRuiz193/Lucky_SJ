import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/AdoptionPage.scss';

export default function AnimalsAdoptionList (props) {
    
    const animals = [];

    for(let i = 0; i < props.adoptionAnimals.length; i++){
        const animal = props.adoptionAnimals[i];
        const name = animal.name.replace(/\b\w/g, l => l.toUpperCase());
        const city = animal.city.replace(/\b\w/g, l => l.toUpperCase());
        const animalImage = `http://localhost:2020/${animal.image}`
        animals.push(
        <div key={i} className='animals-container'>
        
            <Link to='/perfil-animal'>
            <div className='animal-profile'>
                <div className='img-wrap'>
                    <img className='bbdd-img' src={animalImage} alt=''/>
                </div>
                <div className='bbdd-text'>
                    <h2>{name}</h2>
                    <p>{city}</p>
                </div>
            </div>
            </Link>
        </div>
        )
    }

    return(
        <div className='content'>
            {animals}
        </div>
    )
}