import React from "react";
import styled from "styled-components";
const Box = styled.div`
  width: 350px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin-bottom: 30px;
  position: relative;
  transition: all 1s linear;

  &:hover {
    border: 2px solid white;
  }
`;
const YellowDiv = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(90deg, #ece9e6 0%, #ffffff 100%);
  border-radius: 15px;
`;
const WhiteDiv = styled.div`
  width: 60px;
  height: 60px;
  background-image: url("/background/white.png");
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 6%;
  left: 44%;
`;

const Head = styled.p`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 35px;
  text-align: center;
  background: linear-gradient(90deg, #606263 0%, #414345 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition: all 1s linear;

  &:hover {
    background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

const Para = styled.p`
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 30px;
  text-align: center;
  background: linear-gradient(90deg, #595a5b 0%, #535354 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  width: 80%;
  margin-bottom: 30px;
`;
const Box1 = ({ Heading, ParaGraph, percent }) => {
  return (
    <Box>
      <YellowDiv />
      <WhiteDiv />
      <Head>
        {" "}
        <span>{percent}</span>
        {Heading}
      </Head>
      <Para>{ParaGraph}</Para>
    </Box>
  );
};

export default Box1;
