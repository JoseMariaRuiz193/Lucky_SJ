import React from 'react';
import '../../../styles/AdoptionForm.scss';
import video from '../../../assets/img/advertencia/group5.svg';

export default function Advertisement () {

    return(
        <div className='content'>

            <div className='advertisement-container'>

                <h2 className='advertisement-title'>Solicitud de adopción</h2>
                <p>Adoptar es un acto de amor, pero 
                sobre todo una responsabilidad 
                de por vida
                </p>
                <p>
                Por éste motivo es importante que veas el siguiente vídeo donde 
                te explicamos como va a ser todo el proceso de adopción
                </p>
                <img className='advertisement-video' src={video}/>
                <h2 className='advertisement-subtitle'>¿Quieres continuar con el proceso de adopción?</h2>

                <div className='advertisement-btn-container'>
                    <input id='cancelar' type='button' value='Cancelar'/>
                    <input id='continuar' type='button' value='Continuar'/>
                </div>



            </div>

        </div>
    )
}