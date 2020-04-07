import React from 'react';
import '../../../styles/AnimalProfile.scss';

export default function AdoptionAnimal (props) {

    const adoptionRequirements = props.animal.adoption_requirements;
    const adoptionRate = props.animal.adoption_rate + ' €';
    const shipping = props.animal.shipping;
    let shippingStatus = '';

    if(shipping === 'no'){
        shippingStatus = 'No se realizan envíos';
    } else {
        shippingStatus = 'Comprobar requísitos de traslado';
    }

    return(
        <div className='margin-correct-DA'>

            <div className='data-container-AA'>
                <h3>Requisitos Adopción</h3>
                <p>{adoptionRequirements}</p>
            </div>

            <div className='data-container-AA'>
                <h3>Tasa de adopción</h3>
                <p>{adoptionRate}</p>
            </div>

            <div className='data-container-AA'>
                <h3>¿Se envía a otra ciudad?</h3>
                <p>{shippingStatus}</p>
            </div>

        </div>
    )
}