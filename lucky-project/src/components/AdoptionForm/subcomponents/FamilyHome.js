import React from 'react';
import '../../../styles/AdoptionForm.scss';

export default function FamilyHome() {

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

            <div className='input-container-AP-2'>
                <p className='title-input-AP'>¿Donde vives?</p>
                <input type='text' className='input-form-AP' placeholder='Piso, casa, chalet...'/>
            </div>

            <div className='other-animals-AP'>
            <h3>¿Vives de alquiler?</h3>
                <div className='radio-container-AP'>
                    <p>Sí</p>
                    <input type='radio'/>
                </div>
                <div className='radio-container-AP'>
                    <p>No</p>
                    <input type='radio'/>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Tu casero permite animales?</h3>
                <div className='radio-container-AP'>
                    <p>Sí</p>
                    <input type='radio'/>
                </div>
                <div className='radio-container-AP'>
                    <p>No</p>
                    <input type='radio'/>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Crees que podrías mudarte pronto?</h3>
                <div className='radio-container-AP'>
                    <p>Sí</p>
                    <input type='radio'/>
                </div>
                <div className='radio-container-AP'>
                    <p>No</p>
                    <input type='radio'/>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Tiene Jardín?</h3>
                <div className='radio-container-AP'>
                    <p>Sí</p>
                    <input type='radio'/>
                </div>
                <div className='radio-container-AP'>
                    <p>No</p>
                    <input type='radio'/>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Vives con otras personas?</h3>
                <div className='radio-container-AP'>
                    <p>Sí</p>
                    <input type='radio'/>
                </div>
                <div className='radio-container-AP'>
                    <p>No</p>
                    <input type='radio'/>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Están todos de acuerdo con la adopción?</h3>
                <div className='radio-container-AP'>
                    <p>Sí</p>
                    <input type='radio'/>
                </div>
                <div className='radio-container-AP'>
                    <p>No</p>
                    <input type='radio'/>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Estás de acuerdo con que visitemos tu casa?</h3>
                <div className='radio-container-AP'>
                    <p>Sí</p>
                    <input type='radio'/>
                </div>
                <div className='radio-container-AP'>
                    <p>No</p>
                    <input type='radio'/>
                </div>
        </div>

        </div>
    
    </div>
    </div>
    )
}