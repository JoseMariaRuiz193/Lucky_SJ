import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../styles/AnimalProfile.scss';
import DataAnimal from './subcomponents/DataAnimal';
import HealthAnimal from './subcomponents/HealthAnimal';
import AdoptionAnimal from './subcomponents/AdoptionAnimal';

import loro from '../../assets/img/animals/maxresdefault@3x.png';
import sexIco from '../../assets/icons_svg/male.svg';
import Advertisement from './subcomponents/Advertisement';
import Axios from 'axios';

export default function AnimalProfile (props) {

    const initialComponent = <DataAnimal/>

    const {id} = useParams();

    const [component, setComponent] = useState(initialComponent);
    const [advertisement, setadvertisement] = useState(false);
    const [animals, setAnimals] = useState([]);

    const animal = [];

    // Recorremos el Array de Animales para encontrar el animal pasado por parametro.

    useEffect(() => {
        getAnimal();
    }, []);

    // Recorremos el Array para encontrar el animal que buscamos

    console.log(animals)

    // Función para llamar a los animales de la BBDD

    function getAnimal(){
        Axios.get(`http://localhost:2020/lucky-db/animals/${id}`)
            .then(res => {
                setAnimals(res.data.animals);
            }).catch(err => {
                console.log('Ha ocurrido un error de conexión')
            });
    };

    // Función para mostrar el componente POPUP
    
    function changeComponent (component){
        setComponent(component);        
    };
    function showPopUp(popUp){
        if(advertisement === false){
            setadvertisement(popUp);
        } else {
            setadvertisement(false);
        }
    };

    return(
        <div className='content'>
               
            <div className='btn-atras-container'>
                <Link to='/adopcion'>
                    <span className='icon-atras'/>
                </Link>
            </div>
            
            <div className='AP-img-container'>
                <img className='img-AP' alt=''/>
            </div>

            <div className='data-banner-AP'>
                <img src={sexIco} className='sex-ico-AP' alt=''/>
                <div className='data-container'>
                    <h3></h3>
                    <p></p>
                </div>

            </div>

            <div className='AP-buttons-container'>
                <button className='btn-AP-data' onClick={() => changeComponent(<DataAnimal/>)}>Datos</button>
                <button className='btn-AP-data' onClick={() => changeComponent(<HealthAnimal/>)}>Salud</button>
                <button className='btn-AP-data' onClick={() => changeComponent(<AdoptionAnimal/>)} >Adopción</button>
            </div>

            <div className='AP-animal-data-container'>
                {component}
            </div>

            <div className='AP-story-container'>
                <h3>Historia</h3>
                <p>
                Me llamo Blue, era un pajarito muy bueno, pero ví cosas que no debería 
                haber visto, que no debían de haber pasado. Por eso llamaron a LARA y vino 
                a salvarnos la vida
                </p>
            </div>
            <input type='button' className='adopt-AP-btn' value='Adoptar' onClick={() => showPopUp(<Advertisement/>)}/>
            
            {advertisement}
        </div>
    )

}