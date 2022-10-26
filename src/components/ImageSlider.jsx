import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'



const ImageSlider = ({images}) => {
    const settings = {
        dots: true,
        arrows:true,
        pauseOnHover:false,
        autoplay:true,
        fade:false,
        infinite: true,
        speed: 500,
        slidestoShow: 1,
        slidesToScroll:1,
        autoplaySpeed: 2000,
        nextArrow: <BsFillArrowRightCircleFill />,
        prevArrow: <BsFillArrowLeftCircleFill />
    };
  return (
    <div className="image-slider" data-aos="zoom-out" data-aos-duration="2000">
        <Slider {...settings} >
            {images.map((item) => (
                <div key={item.id}>
                    <img src={item.src} alt={item.alt} />
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default ImageSlider;