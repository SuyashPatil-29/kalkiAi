import { useState } from 'react';
import Slider from 'react-slick';
import "./Carousel.css";
import "slick-carousel"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

// import icons
import {BsArrowLeft, BsArrowRight,} from 'react-icons/bs';
import { ComputersCanvas, EarthCanvas } from './canvas';
import IronManCanvas from './canvas/IronMan';
const images = [<ComputersCanvas />, <IronManCanvas />, <EarthCanvas />];

function SampleNextArrow({onClick}) {
  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <BsArrowRight/>
    </div>
  );
}

function SamplePrevArrow({onClick}) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <BsArrowLeft/>
    </div>
  );
}
function EmptyArrow({onClick}) {
  return (
    <div></div>
  );
}

function Carousel2() {

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next)=>setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        }
      }]
  };

  return (
    <div className="container">
        <div className="slider">
      <Slider {...settings}>
          {
            images.map((img, index)=>(
              <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>
                {img}
              </div>
            ))
          }
      </Slider>
        </div>
    </div>
  );
}

export default Carousel2;
