import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 27%;
  height: 25vh;
  @media (max-width: 600px) {
    width: 80%;
    margin: 15% auto;
  }
`;
const BoxHead = styled.h2`
  font-family: "personal";

  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 36px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 25px;
  }
`;

const BoxPara = styled.p`
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 23px;
  /* or 135% */

  letter-spacing: 0.04em;

  color: #ffffff;
  @media (max-width: 600px) {
    font-size: 0.7rem;
    line-height: 20px;
  }
`;
const PartnerBox = ({ Heading, Para }) => {
  return (
    <Box>
      <BoxHead>{Heading}</BoxHead>
      <BoxPara>{Para}</BoxPara>
    </Box>
  );
};

export default PartnerBox;
