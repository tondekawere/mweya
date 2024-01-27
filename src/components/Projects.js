import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #e7e8f0;
  padding: 10% 5% 40% 5%;
  text-align: center;
  display: grid;
  gap: 4%;
  @media (min-width: 768px) {
    gap: 13%;
    padding: 10% 5% 23% 5%;
  }
  @media (min-width: 992px) {
    gap: 13%;
    padding: 10% 5% 19% 5%;
  }
  @media (min-width: 1200px) {
    gap: 10%;
    padding: 6% 5% 12% 5%;
  }
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
    color: #333d29;
    font-family: ${(props) => props.theme.fam.italic};
    @media (min-width: 1200px) {
      font-size: 14px;
      line-height: 24px;
    }
  }
  a {
    color: #333d29;
    font-size: 15px;
    text-decoration: none;
    font-family: ${(props) => props.theme.fam.regular};
    &:hover {
      text-decoration: underline;
    }
  }
  .cards {
    margin-bottom: 15%;
    text-align: left;
    display: grid;
    gap: 3%;
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0%;
    }
    @media (min-width: 1200px) {
      margin: 1% 0 2% 0;
    }
    .card {
      padding: 8% 8% 15% 8%;
      border-radius: 5px;
      background: #fff;
      display: grid;
      gap: 8%;
      @media (min-width: 768px) {
        padding: 4% 2% 8% 2%;
        width: 30%;
        gap: 13%;
      }
      @media (min-width: 1200px) {
        box-shadow: 0 0 6px rgba(100, 100, 100, 0.2);
        padding: 2% 2% 8% 2%;
        width: 18%;
      }
      img {
        width: 30%;
        margin-bottom: 8%;
        @media (min-width: 1200px) {
          width: 34%;
        }
      }
      h6 {
        font-size: 16px;
      }
      a {
        color: #000000a3;
        font-size: 15px;
        font-family: ${(props) => props.theme.fam.regular};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

function Projects() {
  return (
    <Wrapper>
      <h2>OUR PROJECTS</h2>
      <p>
        “Working with communities to preserve the earth for future generations.”
      </p>
      <div className="cards">
        <div className="card">
            <img src="./images/left.png" alt="card-image-1" />
          <h6>Solar projects in Africa</h6>
          <a href="#">Find out more</a>
        </div>
        <div className="card">
          <img src="./images/center.png" alt="card-image-1" />
          <h6>Green Consulting</h6>
          <a href="#">Find out more</a>
        </div>
        <div className="card">
          <img src="./images/right.png" alt="card-image-1" />
          <h6>Youth Climate Action</h6>
          <a href="#">Find out more</a>
        </div>
      </div>
      <a href="#">Sign Up / Partner with us for potential projects.</a>
    </Wrapper>
  );
}

export default Projects;
