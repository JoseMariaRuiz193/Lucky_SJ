import React from 'react';
import '../../../styles/AnimalProfile.scss';
import loro from '../../../assets/img/animals/maxresdefault@3x.png';
import DataNav from './DataNav';
import { Link } from 'react-router-dom';
import sexIco from '../../../assets/icons_svg/male.svg';
import pawPrint from '../../../assets/img/data/pawprint@3x.png';

export default function DataHealth () {

    return(
        <div className='content'>

            {/** Encabezado superior con foto del animal */}
        
            <div className='btn-atras-container'><Link to='/filtros'><span className='icon-atras'/></Link></div>
            <img className='img-filters' src={loro} alt=''/>
            <div className='name-animal-container'>
                <img src={sexIco} alt='simbolo del sexo del animal' />
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
                <h3>Vacunado</h3>
                <p>Si</p>
                </div>

            </div>

            <div className='data-container'>
                <img src={pawPrint} alt=''/>

                <div className='text-container'>
                <h3>Desparasitado</h3>
                <p>Si</p>
                </div>

            </div>

            <div className='data-container'>
                <img src={pawPrint} alt=''/>

                <div className='text-container'>
                <h3>Sano</h3>
                <p>Si</p>
                </div>

            </div>

            <div className='data-container'>
                <img src={pawPrint} alt=''/>

                <div className='text-container'>
                <h3>Esterilizado</h3>
                <p>No</p>
                </div>

            </div>

            <div className='data-container'>
                <img src={pawPrint} alt=''/>

                <div className='text-container'>
                <h3>Identificado</h3>
                <p>No</p>
                </div>

            </div>

            <div className='data-container'>
                <img src={pawPrint} alt=''/>

                <div className='text-container'>
                <h3>Microchip</h3>
                <p>No</p>
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

            <input className='btn-adopt' type='button' value='Adoptar'/>

        </div>
    )
}