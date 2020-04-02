import React from 'react';
import '../../styles/AnimalProfile.scss';
import loro from '../../assets/img/animals/maxresdefault@3x.png';
import DataNav from './subcomponents/DataNav';
import { Link } from 'react-router-dom';
import sexIco from '../../assets/icons_svg/male.svg';
import pawPrint from '../../assets/img/data/pawprint@3x.png';


export default function DataPage () {

    return(

    <div className='content'>

            {/** Encabezado superior con foto del animal */}
        
            <div className='btn-atras-container'><Link to='/adopcion'><span className='icon-atras'/></Link></div>
            <img className='img-filters' src={loro} alt='foto de animal'/>
            <div className='name-animal-container'>
                <img src={sexIco} alt=''/>
                    <div className='name-animal'>
                    <h3>Blue</h3>
                    <p>Madrid</p>
                    </div>
            
            </div>

            {/** Navegador de datos de los animales */}
            <DataNav/>
            {/** contenedor de datos */}
            <div className='general-data'>

            <div className='data-container'>
                <img src={pawPrint} alt=''/>

                <div className='text-container'>
                <h3>Especie</h3>
                <p>Ave</p>
                </div>

            </div>

            <div className='data-container'>
                <img src={pawPrint} alt=''/>

                <div className='text-container'>
                <h3>Fecha de nacimiento</h3>
                <p>03-08-2018</p>
                </div>

            </div>

            <div className='data-container'>
                <img src={pawPrint} alt=''/>

                <div className='text-container'>
                <h3>Sexo</h3>
                <p>Macho</p>
                </div>

            </div>

            <div className='data-container'>
                <img src={pawPrint} alt=''/>

                <div className='text-container'>
                <h3>Tamaño</h3>
                <p>Pequeño</p>
                </div>

            </div>

            <div className='data-container'>
                <img src={pawPrint} alt=''/>

                <div className='text-container'>
                <h3>Peso</h3>
                <p>0,3 KG</p>
                </div>

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

            <input id='adoptar-btn' className='btn-adopt' type='button' value='Adoptar'/>

        </div>
    )
}