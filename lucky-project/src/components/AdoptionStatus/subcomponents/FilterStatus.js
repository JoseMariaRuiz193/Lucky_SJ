import React, { useState } from 'react';
import '../../../styles/AdoptionStatus.scss';
import FilterResultsAs from './FilterResultsAs';

export default function FilterStatus () {
    
    const[filter, setFilter] = useState(false);
    const results = <FilterResultsAs filter={filter}/>

    const getCompleted = () => {
        setFilter('en adopcion')
    }
    const getInProcess = () => {
        setFilter('en proceso')
    }
    const getRejected = () => {
        setFilter('rechazado')
    }

    const applyFilters = () => {
        
        window.location.href= '/estado-adopcion-resultado';
    }

    return(
        <div className='floating-container'>
            <div className='filter-status-container'>
                <h3>Filtros</h3>
                <div className='icon-container-FS'>
                    <button className='completed-btn' alt='icono de búsqueda completado' onClick={getCompleted}/>
                    <button className='in_process-btn' alt='icono de búsqueda en proceso' onClick={getInProcess}/>
                    <button className='rejected-btn' alt='icono de búsqueda rechazado' onClick={getRejected}/>
                </div>
                
                <input className='apply-btn-FS' type='button' value='Aplicar' onClick={applyFilters}/>
                
            </div>
        </div>
    )
}