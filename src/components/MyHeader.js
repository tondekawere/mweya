import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  transform: translate3d(0, 0, 0);
  transition: all 300ms ease;
  background: #243432;
  width: 100%;
  z-index: 1;
  padding: 3% 0;
  a {
    font-family: ${(props) => props.theme.fam.medium};
  }
  @media (min-width: 568px) {
    padding: 3% 0;
  }
  @media (min-width: 992px) {
    background: transparent;
    justify-content: flex-start;
    gap: 2%;
    padding: 2% 0;
  }
  @media (min-width: 1200px) {
    padding: 2%;
    padding-left: 0;
    gap: 7%;
  }
  img {
    margin-left: 5%;
    width: 20%;
    cursor: pointer;
    &:hover {
      border-radius: 5px;
      background: rgba(240, 255, 242, 0.301);
    }
    @media (min-width: 568px) {
      margin-left: 10%;
    }
    @media (min-width: 768px) {
      margin-left: 15%;
    }
    @media (min-width: 992px) {
      width: 35%;
      margin-left: 22%;
      &:hover {
        border-radius: 100%;
        background: rgba(240, 255, 242, 0.301);
      }
    }
    @media (min-width: 1200px) {
      width: 84%;
      margin-left: 40%;
    }
  }
  .menu {
    @media (min-width: 992px) {
      width: 100%;
    }
    .hamburger {
      position: relative;
      margin-right: 20px;
      @media (min-width: 768px) {
        right: 140%;
      }
      @media (min-width: 992px) {
        display: none;
        right: 10%;
      }
      span {
        width: 30px;
        height: 2px;
        background: #fff;
        position: absolute;
        right: 0;
        transition: all 0.7s ease;
        &:before {
          position: absolute;
          content: "";
          background: #fff;
          top: -7px;
          right: 1%;
          height: 100%;
          width: 35px;
          transition: all 0.7s ease;
        }
        &:after {
          position: absolute;
          content: "";
          background: #fff;
          top: 7px;
          right: 1%;
          height: 100%;
          width: 25px;
          transition: all 0.7s ease;
        }
      }
    }
    .open {
      outline-color: #000;
      span {
        background: transparent;
        transform: rotate(360deg);
        &:after {
          top: 0;
          transform: rotate(45deg);
          background: #66e0fb;
          width: 100%;
        }
        &:before {
          top: 0;
          width: 100%;
          transform: rotate(-45deg);
          background: #66e0fb;
        }
      }
    }
    ul {
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
      height: 100vh;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 5%;
      z-index: 1;
      max-height: 0;
      overflow: hidden;
      list-style: none;
      font-size: 18px;
      transition: all 0.7s ease;
      @media (min-width: 568px) {
        top: 100%;
        height: 250px;
      }
      @media (min-width: 768px) {
        height: 720px;
      }
      @media (min-width: 992px) {
        max-height: none;
        background: transparent;
        justify-content: flex-start;
        flex-direction: unset;
        width: unset;
        height: unset;
        position: relative;
        margin: 0;
        padding: 0;
        gap: 0;
      }
      li {
        width: unset;
        transition: all 1s ease;
        @media (min-width: 1200px) {
          padding: 1%;
        }
        &:hover {
          border: 1px solid #181818;
          background-color: #2e1910;
          a {
            font-size: 20px;
            text-decoration: underline;
            color: #fff;
            font-weight: 500;
          }
          @media (min-width: 992px) {
            border: none;
            background-color: unset;
            width: unset;
          }
          @media (min-width: 1200px) {
            background-color: #2e1910;
            padding: 1%;
            a {
              font-size: 14px;
            }
          }
        }
        @media (min-width: 992px) {
          margin: 0 0 0 2%;
        }
        a {
          color: #000;
          display: block;
          padding: 20px;
          cursor: pointer;
          transition: all 0.7s ease;

          @media (min-width: 992px) {
            width: unset;
            padding: 0;
            margin: 0;
            color: #ffffff;
            &:hover {
              color: #4c4;
              font-size: 20px;
            }
          }
          @media (min-width: 1200px) {
            font-size: 14px;
            &:hover {
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
    }
    .opened {
      max-height: 500px;
      @media (min-width: 568px) {
        padding: 5% 0;
        max-height: 300px;
        a {
          padding: 0;
        }
      }
      @media (min-width: 768px) {
        padding: 15% 0;
        max-height: 200px;
        gap: 10%;
        a {
          font-size: 20px;
          &:hover {
            font-size: 24px;
          }
        }
      }
      @media (min-width: 992px) {
        gap: 2%;
        a {
          padding: 0;
        }
      }
    }
  }
`;

function Header() {
  const [click, setClick] = useState(false);
  return (
    <Wrapper>
      <a href="#" className="logo">
        <img src="./images/logo.png" alt="logo" />
      </a>
      <div className="menu">
        <div
          className={click ? "hamburger open" : "hamburger"}
          onClick={() => setClick(!click)}
        >
          <span></span>
        </div>
        <ul className={click ? "opened" : ""}>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">WHO WE ARE</a>
          </li>
          <li>
            <a href="#">OUR SERVICES</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header;
