import React from 'react';
import '../../styles/Maps_map.scss';
import Menu from '../Menu/Menu';

export default function Maps_map () {
    return(
        <div className='content'>
            <div className='bar-container'>
                <input type='search' placeholder='¿Que estás buscando?'/>
            </div>

            <div className='map-container'>
            </div>
                {/* <submit><img className='search-ico' src={searchIco}/></submit> */} 
        <Menu/>          
        </div>
    )
}