import React from 'react';
import '../../../styles/AnimalProfile.scss';
import pawPrint from '../../../assets/img/data/pawprint@3x.png';

export default function HealthAnimal () {

    return(
    <div className='margin-correct-DA'>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Vacunado</p>
                    <p>No</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Desparasitado</p>
                    <p>No</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Sano</p>
                    <p>No</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Esterilizado</p>
                    <p>No</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Identificado</p>
                    <p>No</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Microchip</p>
                    <p>No</p>
                </div>
            </div>
        </div>

    </div>
    )
}

