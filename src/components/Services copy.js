import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

const Wrapper = styled.section`
  padding: 10% 5%;
  h2 {
    font-family: ${(props) => props.theme.fam.bla};
    font-size: 27px;
    color: #2e1910;
    @media (min-width: 1200px) {
      font-size: 40px;
    }
  }
  p {
    line-height: 20px;
    color: #000000a3;
    font-family: ${(props) => props.theme.fam.italic};
    @media (min-width: 1200px) {
      font-size: 14px;
      line-height: 24px;
    }
  }

  img {
    width: 60%;
  }
  .card {
    background: #fff;
  }
  .c1 {
    border-radius: 5px;
    box-shadow: 0 0 6px rgba(13, 9, 45, 43);
    width: 20%;
  }
`;
function Services() {
  return (
    <Wrapper>
      <h2>OUR SERVICES</h2>
      <p>“We provide pathways for sustainable climate change mitigation.”</p>
      <div className="cards">
        <div className="card c1">
          <img src="./images/s1.png" alt="card-image-1" />
          <div className="icon">
            <a href="#">
              <img src="./images/quote.png" alt="icon" />
            </a>
          </div>
          <p>
            We help businesses and universities define their carbon footprint
            and provide solutions to offset emissions
          </p>
        </div>
        <div className="card">
          <img src="./images/s2.png" alt="card-image-2" />
        </div>
        <div className="card">
          <img src="./images/s3.png" alt="card-image-3" />
        </div>
      </div>
      
    </Wrapper>
  );
}

export default Services;

