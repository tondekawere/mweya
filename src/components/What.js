import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #e7e8e3;
  padding: 10% 5% 40% 5%;
  margin-top: 50%;
  display: grid;
  gap: 3%;
  @media (min-width: 568px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10% 5% 20% 5%;
    margin-top: 24%;
  }
  @media (min-width: 768px) {
    padding: 10% 5% 15% 5%;
    margin-top: 10%;
  }
  @media (min-width: 992px) {
    padding: 5%;
  }
  @media (min-width: 1200px) {
    align-items: center;
    gap: 5%;
    margin-top: 0%;
  }
  img {
    width: 50%;
  }
  .left {
    img {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 60%;
      padding-top: 10%;
    }
    @media (min-width: 1200px) {
      margin-left: 5%;
      padding-top: 2%;
      gap: 6%;
      width: 83%;
    }
  }
  .right {
    display: grid;
    gap: 10%;
    @media (min-width: 768px) {
      width: 70%;
    }
    @media (min-width: 1200px) {
      width: 100%;
      gap: 22%;
    }
    h2 {
      color: #2e1910;
      font-family: ${(props) => props.theme.fam.bla};
      font-size: 27px;
      @media (min-width: 1200px) {
        font-size: 40px;
      }
    }
    ol {
      list-style: decimal;
      padding: 0 5%;
      display: grid;
      gap: 3%;
      line-height: 20px;
      color: #000000a3;
      @media (min-width: 1200px) {
        font-size: 15px;
        line-height: 24px;
      }
    }
  }
`;
function What() {
  return (
    <Wrapper>
      <div className="left">
        <img src="./images/map.png" alt="map" />
      </div>
      <div className="right">
        <h2>WHAT WE DO</h2>
        <ol>
          <li>
            Define carbon footprint and design solutions to offset emissions.
          </li>
          <li>
            Promote innovation and technology in Africa to help businesses and
            farmers harness their green capacity for carbon credits.
          </li>
          <li>
            Monitor social impact of green energy projects to ensure that the
            SDG goals are
          </li>
          <li>
            Find where the current climate combating incentives and funding
            opportunities from international organisations are, in terms of
            policy and actual projects.
          </li>
          <li>
            Engage youths from Africa and the USA to actively participate in
            climate action
          </li>
        </ol>
      </div>
    </Wrapper>
  );
}

export default What;
