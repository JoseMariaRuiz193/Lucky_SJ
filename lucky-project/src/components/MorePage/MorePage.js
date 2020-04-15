import React from 'react';
import '../../styles/MorePage.scss';
import Menu from '../Menu/Menu';
import OutSessionMorePage from './subcomponents/OutSessionMorePage';
import { UserConsumer } from '../Context/UserContext';


export default function MorePage () {
 
    return(
        <div>
            <UserConsumer>
                { user => (  
            <p>Soy el usuario{'Aquí si pongo, user.user.name, o user.name, o como lo ponga me salta error'}</p>
                )}
            </UserConsumer>
            <Menu/>
        </div>
    )
}