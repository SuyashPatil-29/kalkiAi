import styled from "styled-components";
import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import IronManCanvas from "./canvas/IronMan";

 const ImgSlider = () => {
    const settings= {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
    }
    return (
            <Carousel {...settings} >
                <Wrap className="flex flex-row">
                    <a>
                        <div className="ima z-10">
                           <ComputersCanvas />
                        </div>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <div className="ima z-10">
                          <IronManCanvas />
                        </div>
                    </a>
                </Wrap>
                <Wrap>
                <a>
                        <div className="ima z-10">
                           <EarthCanvas />
                        </div>
                    </a>
                </Wrap>
            </Carousel>
    );
 }
 
 const Carousel = styled(Slider)`
  width: 22.1vw;
  margin-top: 20px;
  /* margin-right: 180px; */

  &>button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

  }

  ul li button{
    &:before{
        font-size: 15px;
        color: rgb(150,158,171);
    }
  }

  li.slick-active button:before{
    color: white;
  }

  .slick-list{
    overflow: initial;
  }

  .slick-prev{
    left: -75px
  }
  .slick-next{
    right: -75px
  }
`;

const Wrap = styled.div`
 border-radius: 4px;
 cursor: pointer;
 position: relative;

 a{
 border-radius: 4px;
 box-shadow: rgb(0 0 0/69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
 display: block;
 cursor: pointer;
 position: relative;
 margin-left: 20px;
 padding: 4px;
 height: 400px;
 }
 

.ima{
    width: 100%;
    height: 100%;
 }
`


 export default ImgSlider;
 