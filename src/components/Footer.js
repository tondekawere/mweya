import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



const Wrapper = styled.footer`
  display: grid;
  padding: 10% 5% 40% 5%;
  gap: 5%;
  @media (min-width: 568px) {
    padding-bottom: 20%;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5%;
  }
  @media (min-width: 992px) {
    padding-bottom: 10%;
  }
  @media (min-width: 1200px) {
    gap: 7%;
  }
  img {
    width: 50%;
  }
  .left {
    background: url(../images/contact.png);
    background-position: center center;
    background-size: cover;
    padding: 20% 5% 29% 5%;
    color: #fff;
    text-align: center;
    display: grid;
    gap: 8%;
    @media (min-width: 768px) {
      padding: 13% 5% 18% 5%;
      width: 40%;
    }
    @media (min-width: 1200px) {
      padding: 14% 2% 13.5% 2%;
      width: 34%;
    }
    img {
      width: 100%;
      margin-bottom: 5%;
      @media (min-width: 1200px) {
        margin-bottom: 10%;
      }
    }
    .spans {
      display: grid;
      @media (min-width: 1200px) {
        gap: 45%;
      }
    }
    span {
      font-family: ${(props) => props.theme.fam.medium};
      @media (min-width: 1200px) {
        font-size: 14px;
      }
      a {
        color: #fff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .right {
    display: grid;
    gap: 5%;
    @media (min-width: 768px) {
      width: 40%;
      gap: 8%;
    }
    @media (min-width: 992px) {
      gap: 10%;
    }
    @media (min-width: 1200px) {
      gap: 10%;
      width: 42%;
    }
    h2 {
      font-family: ${(props) => props.theme.fam.bold};
      color: #2e1910;
      @media (min-width: 1200px) {
        font-size: 40px;
      }
    }
    p {
      font-family: ${(props) => props.theme.fam.italic};
      color: #333d29;
      font-size: 13px;
    }
    form {
      display: grid;
      @media (min-width: 992px) {
        gap: 8%;
        margin-bottom: 16%;
      }
      @media (min-width: 1200px) {
        gap: 15%;
        margin-bottom: 16%;
      }
    }
    .MuiButton-root {
      background: #2e1910;
      padding: 2% 0;
      font-family: ${(props) => props.theme.fam.bolder};
    }
  }
`;
function Footer() {
  return (
    <Wrapper>
      <div className="left">
      
        <img src="./images/text-contact.png" alt="text" />
        <div className="spans">
          <span>
          Email : <a href="#">bgreen@mweya. org</a>
        </span>
        <span>
          Mobile number: <a href="#">+263776845785</a>
        </span>
        <span>Address: 2 Natal Road, Belgravia, Harare, Zimbabwe</span>
        </div>
      </div>
      <div className="right">
        <h2>GET IN TOUCH</h2>
        <p>"GREEN REGARDS!”</p>
        <form action="#">
          <TextField id="standard-basic" label="Full Name" variant="standard" />
          <TextField
            id="standard-basic"
            label="Email Address"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="What are you interested in?"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Your Message"
            variant="standard"
          />
        </form>
        <Button variant="contained">SEND MESSEGE</Button>
      </div>
    </Wrapper>
  );
}

export default Footer;
