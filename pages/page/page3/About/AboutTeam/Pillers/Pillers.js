import React from "react";
import styled from "styled-components";
import TeamBox, { ImageBox } from "./TeamBox";

const PillerContainer = styled.div`
  width: 90%;
  margin: 10% auto;
  @media (max-width: 600px){
    width: 90%;
    margin: 0px auto;
  }
`;
const PillerHead = styled.h2`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  line-height: 65px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 50px;
  }
`;
const PillerPara = styled.p`
  color: white;
  font-size: 1.7rem;
  width: 60%;
  margin: 20px auto;
  text-align: center;
  @media (max-width: 600px) {
    width: 90%;
    font-size: 1.1rem;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  height: 80.1vh;
  box-sizing: border-box;
  margin: 5% auto;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;

  }
`;
const TextContainer = styled.div`
  position: absolute;
  pointer-events: none;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  width: 80%;
  height: 80.1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  &:hover {
    opacity: 0;
    display: none;
  }
  ${ImageContainer}:hover & {
    display: none;
  }
  @media (max-width: 600px){
    font-size: 1rem;
    width: 70%;
  }

`;

const Pillers = () => {
  return (
    <PillerContainer>
      <PillerHead>Meet the pillars of Ramaera</PillerHead>
      <PillerPara>
        The Ramaera Management is the foundation pillar of the organisation and
        the reason of our scalability and success.
      </PillerPara>
      <ImageContainer>
        <TextContainer>
          <p style={{ width: "70%" }}>
            The Ramaera Management is the foundation pillar of the organisation
            and the reason of our scalability and success.
          </p>
        </TextContainer>

        <TeamBox
          imgUrl={"/background/CEO.jpeg"}
          hoverImg={"/background/CEO2.png"}
          mobileImg={"/background/mobileCEO.png"}
          />
        <TeamBox
          imgUrl={"/background/Team1.jpeg"}
          mobileImg={"/background/mobileInn.png"}
          hoverImg={"/background/hover1.png"}
          />
        <TeamBox
          imgUrl={"/background/Team2.jpeg"}
          mobileImg={"/background/mobileSus.png"}
          hoverImg={"/background/hover2.png"}
          />
        <TeamBox
          imgUrl={"/background/Team3.jpeg"}
          mobileImg={"/background/mobileImp.png"}
          hoverImg={"/background/hover3.png"}
          // bgPos={"top"}
        />
      </ImageContainer>
    </PillerContainer>
  );
};

export default Pillers;
