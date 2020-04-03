import React from 'react';
import '../../../styles/ResultsFilters.scss';

export default function Animals(props) {

    const animalList = [];

    for(let i = 0; i < props.animals.length; i++){
       const animal = props.animals[i];
       const animalFoto = `http://localhost:2020/${animal.image}`
       animalList.push(
           <div key={i} className='animals-container-filters'>
                 <div className='animal-profile-filters'>
                    <div className='img-wrap-filters'>
                        <img className='bbdd-img-filters' src={animalFoto} alt=''/>
                    </div>
                    <div className='bbdd-text-filters'>
                        <h2>{animal.name}</h2>
                        <p>{animal.city}</p>
                    </div>
                </div>
           </div>
       );
    }

    return(
        <div className='content'>
            {animalList}
        </div>
    )
}