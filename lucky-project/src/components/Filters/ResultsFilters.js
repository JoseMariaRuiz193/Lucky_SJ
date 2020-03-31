import React, { useState } from 'react';

export default function ResultsFilters () {

    const [animals, setAnimals] = useState({
        
        img: '',
        name: '',
        city: ''

    })

    return(
        <div className='content'>

            <div className='filter-search-container'>
                <span />
                   <input className='search-filters' type='search' placeholder='Buscar'/>
                <span/>
            </div>

        </div>
    )
}