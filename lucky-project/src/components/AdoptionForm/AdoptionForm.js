import React, { useState } from 'react';
import YourData from './subcomponents/YourData';
import AboutPets from './subcomponents/AboutPets';
import FamilyHome from './subcomponents/FamilyHome';

export default function AdoptionForm () {
   
    const yd = <YourData/>
    const ap = <AboutPets/>
    const fh = <FamilyHome/>
    const components = [yd, ap, fh];

    const [component, setComponent] = useState(components[0]);
    const [counter, setCounter] = useState(1);

    

    function nextComponent(counter){
        const nextPage = counter + 1;
        if(nextPage <= 3){
           setCounter(nextPage);
           setComponent(components[counter]);
           // console.log('El contador siguiente es: ' + counter);
        }
    }

    function previousComponent(counter) {
        const previousPage = counter - 1;
        if(previousPage > -1){
            setCounter(previousPage);
            setComponent(components[previousPage]);
            // console.log('El contador anterior es: ' + counter)
        } 
    }

    return(
        <div className='content'>

                <div className='title-container-AF'>

                        <div className='btn-atras-container-AF'>
                            <button className='icon-atras' onClick={() => previousComponent(counter)}/>
                        </div>

                        <p>Formulario de adopción</p>

                </div>

        {component}

        <button className='btn-continue-AF' onClick={() => nextComponent(counter)}>Continuar</button>
        </div>
    )
}