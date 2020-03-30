import React from 'react';
import '../../styles/Maps_map.scss';
import searchIco from '../../assets/icons_svg/buscar.svg';
import Menu from '../Menu/Menu';

export default function Maps_map () {
    const position = [40.4893538, -3.6827461];

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