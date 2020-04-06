import React from 'react';
import '../../../styles/AnimalProfile.scss';
import pawPrint from '../../../assets/img/data/pawprint@3x.png';

export default function DataAnimal () {

    return(
    <div className='margin-correct-DA'>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Especie</p>
                    <p>Especie</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Fecha de nacimiento</p>
                    <p>Fecha de nacimiento</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Sexo</p>
                    <p>Sexo</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Tamaño</p>
                    <p>Tamaño</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Peso</p>
                    <p>Peso</p>
                </div>
            </div>
        </div>
    </div>
    )
}