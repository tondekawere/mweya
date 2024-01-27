import React from "react";
import styled from "styled-components";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: url(../images/home.png);
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  @media (min-width: 768px) {
    height: 50vh;
  }
  @media (min-width: 1200px) {
    height: 100vh;
    justify-content: space-between;
  }
  .hero-inner {
    display: grid;
    gap: 10%;
    padding: 20% 5% 5% 5%;
    color: #fff;
    @media (min-width: 1200px) {
      gap: 15%;
    }
    h1 {
      font-family: ${(props) => props.theme.fam.medium};
      line-height: 30px;
      img {
        margin: 3% 0;
        width: 100%;
        @media (min-width: 1200px) {
          width: 73%;
        }
      }
      @media (min-width: 768px) {
        font-size: 50px;
        line-height: 48px;
      }
      @media (min-width: 1200px) {
        font-size: 50px;
        line-height: 42px;
      }
    }
    a {
      font-family: ${(props) => props.theme.fam.medium};
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: #4ce;
      }
    }
  }
  .hero-icons {
    display: none;
    padding: 5%;
    gap: 10%;
    align-items: center;
    @media (min-width: 568px) {
      display: block;
      .icons {
        display: grid;
        gap: 5%;
        margin-top: 100%;
      }
    }
    @media (min-width: 1200px) {
      .icons {
        margin-top: 50%;
      }
    }
    p {
      transform: rotate(-90deg);
      color: #fff;
      width: 200%;
      margin-top: 80%;
      font-size: 10px;
      margin-left: -60%;
      @media (min-width: 768px) {
        margin-top: 50%;
        margin-left: -70%;
      }
      @media (min-width: 1200px) {
        margin-left: -80%;
        font-size: 15px;
      }
    }
    .line {
      display: none;
      @media (min-width: 768px) {
        display: block;
        height: 100px;
        margin-bottom: 30%;
        width: 3%;
        margin-left: 30%;
        background: #fff;
      }
      @media (min-width: 1200px) {
        height: 180px;
        margin-bottom: 0%;
        width: 6%;
        margin-left: 18%;
        background: #fff;
      }
    }
  }
`;

function Hero() {
  return (
    <Wrapper>
      <div className="hero-inner">
        <h1>
          TRADE <br /> <img src="./images/text.png" alt="image" /> <br /> FOR
          GOOD
        </h1>

        <a href="#">MWEYA GREEN ENERGY</a>
      </div>
      <div className="hero-icons">
        <div className="line"></div>
        <div className="icons">
          <a href="#">
            <BiLogoLinkedin size={24} color="white" className="custom-icon" />
          </a>
          <a href="#">
            <BiLogoInstagram size={24} color="white" className="custom-icon" />
          </a>
          <a href="#">
            <BiLogoFacebook size={24} color="white" className="custom-icon" />
          </a>
        </div>

        <p>follow us</p>
      </div>
    </Wrapper>
  );
}

export default Hero;
