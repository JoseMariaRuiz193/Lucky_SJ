import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/ResultsFilters.scss';
import flecha from '../../assets/icons_svg/atras.svg';

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
                <img src={flecha} className='back-btn'/>

                <div className='search-container'>
                <input type='text' className='search-filters' placeholder='Buscar'/>
                <span className='icon-buscar'/>
                </div>
               

                <span className='icon-filtros '/>
            </div>

        </div>
    )
}