import styled from "styled-components";

export const VisionBox = styled.div`
  background: url("/background/Rectangle.svg");
  width: 100%;
  height: 202.6vh;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  @media (max-width: 600px){
    height: 270vh;
    width: 100%;
    margin:0px auto;
  }
`;
export const VisionBG = styled.div`
  width: 95%;
  margin: 50px auto;
  background: url("/background/3dTriangle.png");
  height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
`;
export const VisionHead = styled.h1`
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
  text-align: center;
  padding-top: 70px;
  @media (max-width: 600px){
    font-size: 2rem;
  }
`;
export const VisionPara = styled.p`
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 45px;
  margin-top: 30px;
  /* or 156% */

  background: linear-gradient(90deg, #ffffff 0%, #cfdef3 100%, #dadada 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 600px){
    font-size: 1rem;
    line-height: 35px;
    text-align: center;
  }
`;
