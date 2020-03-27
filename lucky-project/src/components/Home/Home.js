import React from 'react';
import '../../styles/Home.scss';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import HomeTitle from './HomeTitle';
import Notices from './Notices';
import Menu from '../../components/Menu/Menu';
import slidePerro from '../../assets/img/slides_home/perro.png';
import slideApadrina from '../../assets/img/slides_home/apadrina.png';
import slideProtectoras from '../../assets/img/slides_home/protectoras.png';


export default function Home () {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(

      <div>
        <HomeTitle/>
        <Slider {...settings}>

          <div>
          <div className='slide-container'>
            <Link to = '/' className='slide-container'>
            <img className='slide-animal' src={slidePerro}/>
            </Link>
          </div>
          </div>

          <div>
          <div className='slide-container'>
          <Link to='/' className='slide-container'>
            <img className='slide-animal' src={slideApadrina}/>
          </Link>
          </div>
          </div>

          <div>
          <div className='slide-container'>
          <Link to='/' className='slide-container'>
            <img className='slide-animal' src={slideProtectoras}/>
          </Link>
          </div>
          </div>

        </Slider>

        <Notices/>
        <Menu/>
      </div>
    )
}