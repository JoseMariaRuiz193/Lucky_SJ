import React from 'react';
import '../../styles/Profile.scss';
import searchIco from '../../assets/icons_svg/buscar.svg';

export default function SearchBar () {

    return(
        <div className='content'>
            <div className='search-container'>
                <input type='search' placeholder='Buscar'/>
                <submit><img className='search-ico' src={searchIco}/></submit>
            </div>
        </div>
    )
}