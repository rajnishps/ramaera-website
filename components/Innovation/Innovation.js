import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
const InnovationHead = styled.h1`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 150%;
  text-align: center;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-top: 40px;
`;

export const InnovationPara = styled.p`
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 150%;
  text-align: center;

  color: #ffffff;
`;

export const ParaContainer = styled.div`
  margin-top: 20px;
  width: 85%;
`;
const Polygon = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
`
const PolyGonImg = styled.img`
   width: 20rem;
   height: 45rem;
   /* position: relative;
   bottom: 20vh; */

`
const Innovation = () => {
  return (
    <>
      <MainContainer>
        <InnovationHead>
          An initiative of today for a perfect tomorrow
        </InnovationHead>
        <ParaContainer>
          <InnovationPara>
            Innovation and excellence are our guiding principles and the
            execution of these in technology is helping us to carry out various
            policies that contribute to the upliftment of the society for a
            better tomorrow.
          </InnovationPara>
        </ParaContainer>
        <Polygon>
           <PolyGonImg src={"/background/polygon.png"}/>
        </Polygon>
      </MainContainer>
    </>
  );
};

export default Innovation;
