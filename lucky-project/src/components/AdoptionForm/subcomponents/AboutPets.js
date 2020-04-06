import React from 'react';
import '../../../styles/AdoptionForm.scss';

export default function AboutPets () {
    
    return(
    <div>
    <div className='title-container-AF'>

        <div className='btn-atras-container-AF'>
            <button className='icon-atras'/>
        </div>

        <p>Formulario de adopción</p>
            <div className='progress'>
                <span className='progress-bar-AP'/>
                <span className='remaining-progress-AP'/>
            </div>
    </div>
    <div className='component-form'>

        <div className='form-container-AF'>
            
        <h3>Sobre las mascotas</h3>

        <div className='other-animals-AP'>
            <h3>¿Tienes otros animales?</h3>
                <div className='radio-container-AP'>
                    <p>Sí</p>
                    <input type='radio'/>
                </div>
                <div className='radio-container-AP'>
                    <p>No</p>
                    <input type='radio'/>
                </div>
        </div>

            <div className='input-container-AP'>
            <input type='text' className='input-form-AP' placeholder='¿Cuáles?'/>
            </div>

            <div className='input-container-AP'>
            <input type='text' className='input-form-AP' placeholder='¿Se llevan bien con otros animales?'/>
            </div>

            <div className='input-container-AP-2'>
                <p className='title-input-AP'>¿Por qué has elegido adoptar?</p>
                <input type='text' className='input-form-AP'/>
            </div>

            <div className='input-container-AP-2'>
                <p className='title-input-AP'>¿Conoces las necesidades del animal?</p>
                <input type='text' className='input-form-AP'/>
            </div>

            <div className='input-container-AP-2'>
                <p className='title-input-AP'>¿Conoces sus gastos?</p>
                <input type='text' className='input-form-AP'/>
            </div>

            <div className='input-container-AP-2'>
                <p className='title-input-AP'>¿Conoces su alimentación?</p>
                <input type='text' className='input-form-AP'/>
            </div>
        </div>
    </div>

    </div>
    )
}