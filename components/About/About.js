import React from "react";
import styled from "styled-components";
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
`;
const AboutPara = styled.p`
  width: 65%;
  text-align: center;
  margin: 20px auto;
  color: white;
  font-size: 1.4rem;
  line-height: 40px;
`;
const About = () => {
  return (
    <AboutContainer>
      <AboutHead>GET TO KNOW US BETTER</AboutHead>
      <AboutPara>
        We are focused to endure transparency in each venture of ours as a
        remark of our loyalty to Ramaera Family. We present you with all the
        latest information and wholesome knowledge of operational ventures of
        Ramaera Industries.
      </AboutPara>
      <Trending/>
    </AboutContainer>
  );
};

export default About;
