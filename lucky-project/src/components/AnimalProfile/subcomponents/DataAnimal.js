import React from 'react';
import '../../../styles/AnimalProfile.scss';
import pawPrint from '../../../assets/img/data/pawprint@3x.png';

export default function DataAnimal (props) {

    console.log(props.animal.name);


    return(
    <div className='margin-correct-DA'>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Especie</p>
                    <p></p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Fecha de nacimiento</p>
                    <p></p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Sexo</p>
                    <p></p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Tamaño</p>
                    <p></p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Peso</p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    )
}