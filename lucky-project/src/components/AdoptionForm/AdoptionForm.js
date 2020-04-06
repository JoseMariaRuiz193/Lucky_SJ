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

    return(
        <div className='content'>
            {component}

        <button className='btn-continue-AF'>Continuar</button>
        </div>
    )
}