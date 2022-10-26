import React from 'react';
import images from './images';
import ImageSlider from './ImageSlider';
import { TbInfinity } from 'react-icons/tb'
import { GiAlarmClock } from 'react-icons/gi'
import { FaCarrot } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'


function Carousel() {    
  return (
    <div className="carousel" id="carousel">
        <h2 className="title" id="title-one">Some of our meals</h2>
        <ImageSlider  images={images} />
        <div className="meal-text">
            <h2>our food is:</h2>
            <div className="container">
              <div className="inside" data-aos="flip-left" data-aos-duration="1500">
                <h3 className="first inside-title"><TbInfinity className="logo" /> UP TO 365 DAYS/YEAR</h3>
                <div className="inside-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo voluptates at!, quod vero?</div>
              </div>
              <div className="inside" data-aos="flip-left" data-aos-duration="1500">
                <h3 className="second inside-title"><GiAlarmClock className="logo" />READY IN 20 MINUTES</h3>
                <div className="inside-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo voluptates at!, quod vero?</div>
              </div>
              <div className="inside" data-aos="flip-left" data-aos-duration="1500">
                <h3 className="third inside-title"><FaCarrot className="logo" />100% ORGANIC</h3>
                <div className="inside-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque quidem consequatur corrupti, quod vero?</div>
              </div>
              <div className="inside" data-aos="flip-left" data-aos-duration="1500">
                <h3 className="forth inside-title"><AiOutlineShoppingCart className="logo" />ORDER ANYTHING</h3>
                <div className="inside-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo voluptates at!, quod vero?</div>
              </div>
            </div>
        </div>  
    </div>
  )
}

export default Carousel