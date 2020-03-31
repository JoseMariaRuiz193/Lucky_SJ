import React from 'react';
import '../../../styles/AnimalProfile.scss';
import loro from '../../../assets/img/animals/maxresdefault@3x.png';
import DataNav from './DataNav';
import sexIco from '../../../assets/icons_svg/male.svg';
import { Link } from 'react-router-dom';

export default function DataAdoption () {

    return(
        <div className='content'>

            {/** Encabezado superior con foto del animal */}
        
            <div className='btn-atras-container'><Link to='/filtros'><span className='icon-atras'/></Link></div>
            
            <img className='img-filters' src={loro}/>
            <div className='name-animal-container'>
                <img src={sexIco}/>
                    <div className='name-animal'>
                    <h3>Blue</h3>
                    <p>Madrid</p>
                    </div>
            
            </div>

            {/** Navegador de datos de los animales */}
            <DataNav/>
            {/** contenedor de datos */}
            <div className='general-data'>

                <div className='box-data'>
                    <h3>Requisitos adopción</h3>
                    <p>No hay requisitos especiales para adoptar a Blue</p>
                </div>

                <div className='box-data'>
                    <h3>Tasa de adopción</h3>
                    <p>125€</p>
                </div>

                <div className='box-data'>
                    <h3>¿Se envía a otra ciudad?</h3>
                    <p>No se envía a otra ciudad</p>
                </div>

            </div>
            {/** Contenedor de historia del animal */}

            <div className='animal-story-container'>
                <h2>Historia</h2>
                <p>
                Me llamo Blue, era un pajarito muy bueno, pero ví cosas que no debería 
                haber visto, que no debían de haber pasado. Por eso llamaron a LARA y vino 
                a salvarnos la vida</p>
            </div>

            {/** Botones para interactuar */}

            <input className='btn-adopt' type='button' value='Adoptar'/>

        </div>
    )
}