import React from 'react';
import '../../styles/Profile.scss';
import SearchBar from './SearchBar';
import UserPets from './UserPets';
import Menu from '../Menu/Menu';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import apolo from '../../assets/img/user/Apolo.png';
import dali from '../../assets/img/user/Dali.png';
import kiko from '../../assets/img/user/Kiko.png';

export default function UserProfile () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div>
            <SearchBar/>

            <div className='slider'>
                <h2>Mis mascotas</h2>
                <p>Accede al perfil de tus mascotas</p>
                
                <Slider {...settings}>

                    <div>
                    <div className='icons-container'>
                    <Link to = '/' className='icons-container'>
                    <img className='ico-animal' src={apolo}/>
                    </Link>
                    </div>
                    </div>

                    <div>
                    <div className='icons-container'>
                    <Link to = '/' className='icons-container'>
                    <img className='ico-animal' src={dali}/>
                    </Link>
                    </div>
                    </div>

                    <div>
                    <div className='icons-container'>
                    <Link to = '/' className='icons-container'>
                    <img className='ico-animal' src={kiko}/>
                    </Link>
                    </div>
                    </div>

                    </Slider>
            </div>
            <UserPets/>
            <Menu/>
        </div>
    )
}