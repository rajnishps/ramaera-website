import React from "react";
import styled from "styled-components";
import AboutTeam from "./AboutTeam/AboutTeam";
import Trending from "./Trending";
const AboutContainer = styled.div`
  width: 100%;
`;
const AboutHead = styled.h1`
  text-align: center;
  margin-top: 10%;
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 65px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 600px){
    font-size: 1.7rem;
    line-height: 45px;
  }
`;
const AboutPara = styled.p`
  width: 65%;
  text-align: center;
  margin: 20px auto;
  color: white;
  font-size: 1.4rem;
  line-height: 40px;
  @media (max-width: 600px){
    font-size: 1rem;
    line-height: 30px;
    width: 90%;
  }
`;
const AboutEnd = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/background/AboutEnd.jpeg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px){
    background-size: contain;
    background-repeat: no-repeat;
    height: 50vh;
  }
`;
const EndTagline = styled.h1`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 7rem;
  line-height: 154px;
  /* or 120% */

  text-align: center;
  text-transform: uppercase;

  background: linear-gradient(90deg, #FFE259 0%, #FFA751 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
@media (max-width: 600px){
  font-size: 2rem;
  line-height: 50px;
}
`;
const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutHead>GET TO KNOW US BETTER</AboutHead>
        <AboutPara>
          We are focused to endure transparency in each venture of ours as a
          remark of our loyalty to Ramaera Family. We present you with all the
          latest information and wholesome knowledge of operational ventures of
          Ramaera Industries.
        </AboutPara>
        <Trending />
        <AboutTeam />
      </AboutContainer>
      <AboutEnd>
        <EndTagline>STANDING STRONG AS A FAMILY</EndTagline>
      </AboutEnd>
    </>
  );
};

export default About;
