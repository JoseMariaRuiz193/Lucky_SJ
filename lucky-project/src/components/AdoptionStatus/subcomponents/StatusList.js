import React from 'react';
import '../../../styles/AdoptionStatus.scss';

export default function StatusList (props) {

    const animalsRejected = [];
    const animalsInProccess = [];

    for(let i = 0; i < props.animals.length; i ++){
        const animal = props.animals[i];
        const animalFoto = `http://localhost:2020/${animal.image}`;
        const name = animal.name.replace(/\b\w/g, l => l.toUpperCase());
        const city = animal.city.replace(/\b\w/g, l => l.toUpperCase());
        const sex = animal.sex.replace(/\b\w/g, l => l.toUpperCase());

        if(animal.status === 'en proceso'){
            animalsInProccess.push(
                <div className='status-animal-container'>
                    <div className='status-text-container'>
                        <h3>Adopción de {name}</h3>

                            <p className='text-inprocess'>En proceso</p>
                            <span className='circle-inprogress'/>

                    </div>
                    <div className='status-img-data-container'>

                        <div className='status-photo-wrap'>
                        <img src={animalFoto} alt=''/>
                        </div>

                        <div className='text-container-status'>
                            <span className='statements'>
                                <p><strong>Nombre</strong></p>
                                <p><strong>Ciudad</strong></p>
                                <p><strong>Sexo</strong></p>
                            </span>

                            <span>
                                <p>{name}</p>
                                <p>{city}</p>
                                <p>{sex}</p>
                            </span>

                        </div>
                    </div>
                </div>
            );
        } else {
            if(animal.status === 'rechazado'){
                animalsRejected.push(
                    <div className='status-animal-container'>
                    <div className='status-text-container'>
                        <h3>Adopción de {name}</h3>
                        <p className='text-rejected'>Rechazado </p>
                        <span className='circle-rejected'/>
                    </div>
                    <div className='status-img-data-container'>

                        <div className='status-photo-wrap'>
                        <img src={animalFoto} alt=''/>
                        </div>

                        <div className='text-container-status'>
                        <span className='statements'>

                                <p><strong>Nombre</strong></p>
                                <p><strong>Ciudad</strong></p>
                                <p><strong>Sexo</strong></p>
                            </span>

                            <span>
                                <p>{name}</p>
                                <p>{city}</p>
                                <p>{sex}</p>
                            </span>
                            
                        </div>
                    </div>
                </div>
                )
            }
        }
    }
    return(
        <div className='content'>
            {animalsInProccess}
            {animalsRejected}
        </div>
    )
}