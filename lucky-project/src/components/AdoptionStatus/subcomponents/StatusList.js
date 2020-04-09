import React, { useState } from 'react';
import '../../../styles/AdoptionStatus.scss';
import { Link } from 'react-router-dom';

export default function StatusList (props) {

    const [id, setId] = useState();

    const animalsInAdoption = [];
    const animalsRejected = [];
    const animalsInProccess = [];

    function capitilice(word){
        if(typeof word !== 'string') return ''
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    }

    for(let i = 0; i < props.animals.length; i ++){
        const animal = props.animals[i];
        const animalFoto = `http://localhost:2020/${animal.image}`;
        const name = capitilice(animal.name);
        const city = capitilice(animal.city);
        const sex = capitilice(animal.sex);

    const getId = () => {
        setId(animal._id)
    }

        if(animal.status === 'en adopcion'){
            animalsInAdoption.push(
                <div key={i} className='status-animal-container' onClick={getId}>
                    <Link to={`/perfil-animal/${animal._id}`}>
                    <div className='status-text-container'>
                        <h3>Adopción de {name}</h3>

                            <p className='text-inadoption'>En proceso</p>
                            <span className='circle-inadoption'/>

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
                    </Link>
                </div>
            );
        } else {
        if(animal.status === 'en proceso'){
            animalsInProccess.push(
                <div key={i} className='status-animal-container' onClick={getId}>
                    <Link to={`/perfil-animal/${animal._id}`}>
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
                    </Link>
                </div>
            );
        } else {
            if(animal.status === 'rechazado'){
                animalsRejected.push(
                <div key={i} className='status-animal-container' onClick={getId}>
                    <Link to={`/perfil-animal/${animal._id}`}>
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
                    </Link>
                </div>
                )
            }
        }
    }
    }
    console.log(id);
    
    return(
        <div className='content'>
            {animalsInAdoption}
            {animalsInProccess}
            {animalsRejected}
        </div>
    )
}