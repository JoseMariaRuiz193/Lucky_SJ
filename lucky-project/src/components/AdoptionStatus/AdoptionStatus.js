import React, { useState, useEffect } from 'react';
import '../../styles/AdoptionStatus.scss';
import StatusList from '../AdoptionStatus/subcomponents/StatusList';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import flecha from '../../assets/icons_svg/atras.svg';

export default function AdoptionStatus () {

    const[animals, setAnimals] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:2020/lucky-db/animals`)
            .then((res) => {
                setAnimals(res.data.animals);
            }).catch((err) => {
                console.log('Ha ocurrido un error');
            })
    });

    return(
        <div className='content'>
            <div className='filter-search-container'>

                <Link to='/adopcion'>
                    <img src={flecha} className='back-btn' alt='botón de retroceder'/>
                </Link>
            
                <div className='search-container'>
                    <input type='text' className='search-filters' placeholder='Buscar'/>
                    <span className='icon-buscar'/>
                </div>
                
                <span className='icon-filtros '/>
            </div>
            <StatusList animals={animals}/>
        </div>
    )
}