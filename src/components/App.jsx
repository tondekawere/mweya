import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";


// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

const Wrapper = styled.section`
  padding: 10% 5%;
  display: grid;
  gap: 3%;
  @media (min-width: 1200px) {
    padding: 10% 5% 5% 5%;
  }
  h2 {
    font-family: ${(props) => props.theme.fam.bla};
    font-size: 27px;
    color: #2e1910;
    @media (min-width: 1200px) {
      font-size: 40px;
      margin-left: 2%;
    }
  }
  p {
    line-height: 20px;
    color: #000000a3;
    font-family: ${(props) => props.theme.fam.italic};
    @media (min-width: 1200px) {
      font-size: 14px;
      line-height: 24px;
      margin-left: 2%;
    }
  }
  .swiper-slide {
    width: 100%;
    padding: 2%;
  }
  img {
    width: 60%;
  }
  .swiper {
    padding: 5% 0 30% 0;
    width: 100%;
    @media (min-width: 768px) {
      padding: 5% 0;
    }
    @media (min-width: 992px) {
      padding: 1% 0;
    }
  }
  .card {
    width: 100%;
    padding-bottom: 19%;
    background: #fff;
    text-align: left;
    position: relative;
    display: grid;
    gap: 8%;
    border-radius: 5px;
    box-shadow: 0 0 6px rgba(13, 9, 45, 43);
    @media (min-width: 992px) {
      height: 270px;
    }
    @media (min-width: 1200px) {
      height: 350px;
    }
    img {
      width: 100%;
    }
    .icon {
      position: absolute;
      top: 42%;
      left: 0%;
      width: 30%;
      @media (min-width: 568px) {
        top: 44%;
      }
    }
    .text {
      padding: 5%;
      display: grid;
      gap: 5%;
      @media (min-width: 568px) {
        gap: 9%;
      }
      h5 {
        @media (min-width: 568px) {
          font-size: 16px;
        }
      }
      p {
        line-height: 20px;
        color: #000000a3;
        font-family: ${(props) => props.theme.fam.regular};
        @media (min-width: 568px) {
          font-size: 14px;
        }
        @media (min-width: 1200px) {
          font-size: 14px;
          line-height: 24px;
          margin-left: 0%;
        }
      }
    }
  }
  .card3 {
    display: none;
    @media (min-width: 1200px) {
      display: block;
      box-shadow: transparent;
       img {
        height: 35%;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: unset;
    bottom: 10%;
    height: 2px !important;
    @media (min-width: 768px) {
      bottom: 2%;
    }
    @media (min-width: 1200px) {
      bottom: 3%;
    }
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 20px;
  }
  .mySwiper {
    width: 100%;
  }
`;

export default function Swipe() {
  return (
    <Wrapper>
      <h2>OUR SERVICES</h2>
      <p>“We provide pathways for sustainable climate change mitigation.”</p>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card c1">
            <img src="./images/s1.png" alt="card-image-1" />
            <div className="icon">
              <a href="#">
                <img src="./images/quote.png" alt="icon" />
              </a>
            </div>
            <div className="text">
              <h5>Green Consulting</h5>
              <p>
                We help businesses and universities define their carbon
                footprint and provide solutions to offset emissions
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card c2">
            <img src="./images/s2.png" alt="card-image-2" />
            <div className="icon">
              <a href="#">
                <img src="./images/quote.png" alt="icon" />
              </a>
            </div>
            <div className="text">
              <h5>Green Consulting</h5>
              <p>
                We help businesses and universities define their carbon
                footprint and provide solutions to offset emissions
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card3">
          <div className="card c3">
            <img src="./images/s3.png" alt="card-image-3" />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card c1">
            <img src="./images/s1.png" alt="card-image-1" />
            <div className="icon">
              <a href="#">
                <img src="./images/quote.png" alt="icon" />
              </a>
            </div>
            <div className="text">
              <h5>Green Consulting</h5>
              <p>
                We help businesses and universities define their carbon
                footprint and provide solutions to offset emissions
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}
