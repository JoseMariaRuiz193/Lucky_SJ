import React from 'react';
import '../../styles/Maps_map.scss';
import Menu from '../Menu/Menu';
import MapSimple from './subcomponents/MapSimple';

export default function Maps_map () {
    return(
        <div className='content'>
            <div className='bar-container'>
                <input type='search' placeholder='¿Que estás buscando?'/>
            </div>
            
            <span className='icon-filtros '/>

            <div className='map-container'>
                <MapSimple/>
            </div>
                {/* <submit><img className='search-ico' src={searchIco}/></submit> */} 
        <Menu/>          
        </div>
    )
}