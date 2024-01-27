import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 10% 5%;
  display: grid;
  gap: 15%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 992px) {
    padding: 5%;
  }
  @media (min-width: 1200px) {
    align-items: flex-start;
    gap: 23%;
  }

  .left {
    display: grid;
    gap: 3%;
    @media (min-width: 768px) {
      width: 100%;
    }
    @media (min-width: 1200px) {
      gap: 6%;
      width: 67%;
    }
    h2 {
      font-family: ${(props) => props.theme.fam.bla};
      font-size: 27px;
      @media (min-width: 1200px) {
        font-size: 40px;
      }
    }
    h3 {
      font-family: ${(props) => props.theme.fam.bold};
      @media (min-width: 1200px) {
        font-size: 22px;
        line-height: 30px;
      }
    }
    p {
      line-height: 20px;
      color: #000000a3;
      @media (min-width: 1200px) {
        font-size: 15px;
        line-height: 24px;
      }
    }
    a {
      color: #000000a3;
      @media (min-width: 1200px) {
        font-size: 13px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    h5 {
      font-family: ${(props) => props.theme.fam.italic};
    }
  }
  .right {
    display: grid;
    gap: 3%;
    @media (min-width: 768px) {
      width: 70%;
    }
    @media (min-width: 1200px) {
      width: 45%;
    }
    .img-top {
      img {
        width: 100%;
      }
    }
    .img-bottom {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 5%;
      @media (min-width: 768px) {
        justify-content: flex-end;
      }
      img {
        width: 48%;
        height: 90%;
        @media (min-width: 768px) {
          height: unset;
          width: 60%;
        }
        @media (min-width: 1200px) {
          width: 70%;
        }
      }
      @media (min-width: 1200px) {
        .small-img {
          width: 50%;
        }
      }
    }
  }
`;
function About() {
  return (
    <Wrapper>
      <div className="left">
        <h2>WHO WE ARE</h2>
        <h3>
          Mweya is an Africa centric green energy company that works towards
          climate change mitigation through a holistic approach that ensures
          sustainable socio economic development.
        </h3>
        <p>
          We are an interdisciplinary group of innovators in African climate
          change solutions, that partners with businesses, farmers, and
          educational institutions to turn carbon offset credits into a vital
          resource for financing sustainable development projects
        </p>
        <p>
          At mweya we believe we can do well for our planet and its people. That
          is why we are pioneers in the use of carbon credits to finance
          development project in Africa. Our team partners with businesses,
          farmers and communities to turn carbon offsets into a vital resource
          to fuel development and invest in green projects. Through these
          partnerships remote rural communities can build schools and get clean
          water, cash strapped hospitals can add solar, finance more clinics and
          buy critical medicines and small businesses can do their part to grow
          sustainably with access to green funding.
        </p>
        <a href="#">Find out more about us</a>
        <h5>“We use carbon offsets for sustainable development.”</h5>
      </div>
      <div className="right">
        <div className="img-top">
          <img src="./images/about-top.png" alt="image" />
        </div>
        <div className="img-bottom">
          <img src="./images/about-left.png" className="small-img" alt="image" />
          <img src="./images/about-right.png" alt="image" />
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
