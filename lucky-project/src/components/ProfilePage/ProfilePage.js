import React from 'react';
import '../../styles/ProfilePage.scss';
import ProfileData from './subcomponents/ProfileData';
import Menu from '../Menu/Menu';



export default function ProfilePage () {

    return(       
    <div className='content'>
        <ProfileData/>
        <Menu/>
    </div>
    )
}