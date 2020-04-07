import React from 'react';
import '../../../styles/AnimalProfile.scss';
import pawPrint from '../../../assets/img/data/pawprint@3x.png';

export default function HealthAnimal (props) {

    const vaccinated = props.animal.vaccinated;
    const dewormed = props.animal.dewormed;
    const healthy = props.animal.healthy;
    const sterelized = props.animal.sterelized;
    const identified = props.animal.identified;
    const microchip = props.animal.microchip;

    return(
    <div className='margin-correct-DA'>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Vacunado</p>
                    <p>{vaccinated}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Desparasitado</p>
                    <p>{dewormed}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Sano</p>
                    <p>{healthy}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Esterilizado</p>
                    <p>{sterelized}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Identificado</p>
                    <p>{identified}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Microchip</p>
                    <p>{microchip}</p>
                </div>
            </div>
        </div>

    </div>
    )
}

