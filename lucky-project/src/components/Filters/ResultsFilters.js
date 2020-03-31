import React, { useState } from 'react';
import axios from 'axios';

export default function ResultsFilters () {

    const [animals, setAnimals] = useState([]);

    function getAnimals () {
        axios.get(`http://localhost:2020/lucky-db/animals`)
            .then(res => {
                setAnimals(res.data);
                console.log(animals);
         })
    }
    getAnimals();

    return(
        <div className='content'>

            <div className='filter-search-container'>
                <span className='icon-atras'/>
                <input className='search-filters' type='text' placeholder='Buscar'/>
                <span className='icon-buscar'/>
                <span className='icon-filtros '/>
            </div>

        </div>
    )
}