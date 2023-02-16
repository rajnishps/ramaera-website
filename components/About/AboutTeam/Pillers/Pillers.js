import React from "react";
import styled from "styled-components";
import TeamBox, { ImageBox } from "./TeamBox";

const PillerContainer = styled.div`
  width: 90%;
  margin: 10% auto;
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
`;
const PillerPara = styled.p`
  color: white;
  font-size: 1.7rem;
  width: 60%;
  margin: 20px auto;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 80%;
  height: 80.1vh;
  box-sizing: border-box;
  margin: 5% auto;
  display: flex;
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
          <p style={{width:"70%"}}>The Ramaera Management is the foundation pillar of the organisation
          and the reason of our scalability and success.</p>
        </TextContainer>

        <TeamBox
          imgUrl={"/background/CEO.jpeg"}
          hoverImg={"/background/CEO1.png"}
        />
        <TeamBox
          imgUrl={"/background/Team1.jpeg"}
          hoverImg={"/background/hover1.png"}
        />
        <TeamBox
          imgUrl={"/background/Team2.jpeg"}
          hoverImg={"/background/hover2.png"}
        />
        <TeamBox
          imgUrl={"/background/Team3.jpeg"}
          hoverImg={"/background/hover3.png"}
        />
      </ImageContainer>
    </PillerContainer>
  );
};

export default Pillers;
