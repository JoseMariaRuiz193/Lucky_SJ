import React from 'react';
import '../../styles/Home.scss';

import chinchillas from '../../assets/img/home/chinchillas.png';
import iguana from '../../assets/img/home/iguana.png';
import dog from '../../assets/img/home/perro.png';

export default function Notices (){
    
    return(   
    <div className='notices'>

        <h3 className='novedades'>Novedades</h3>

    <div className='single-notice'>
            <img className='notice-image' src={chinchillas}/>
        <p className='text-notice'>10 curiosidades sobre las chinchillas</p>
    </div>
    
    <div className='single-notice'>
            <img className='notice-image' src={iguana}/>
        <p className='text-notice'>¿Sabes qué comen las iguanas?</p>
    </div>

    <div className='single-notice'>
            <img className='notice-image'  src={dog}/>
        <p className='text-notice'>10 lugares para visitar con tu perro en Madrid</p>
    </div>
    </div>
    )
}

