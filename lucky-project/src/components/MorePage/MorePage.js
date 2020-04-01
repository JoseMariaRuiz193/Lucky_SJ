import React from 'react';
import '../../styles/MorePage.scss';
import Menu from '../Menu/Menu';
import MoreData from './subcomponents/MoreData';


export default function MorePage () {

    return(
        <div className='content'>
            <MoreData/>
            <Menu/>
        </div>
    )
}